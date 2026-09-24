<p align="center">
  <img src="icon.svg" alt="Manifold Fedimint Guardian Logo" width="21%">
</p>

# Manifold Fedimint Guardian on StartOS

> Everything not listed in this document should behave the same as upstream
> Manifold Fedimint Guardian. If a feature, setting, or behavior is not mentioned
> here, the upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

Manifold Fedimint Guardian is the Fleet Manager daemon from [fedibtc/manifold](https://github.com/fedibtc/manifold). It sells guardian seats to Fedimint federations and runs one guardian per seat sold.

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

The package runs upstream's `ghcr.io/fedibtc/manifold-fman` image, pinned by digest, for x86_64 and aarch64. The `Dockerfile` adds only `/etc/passwd`, `/etc/group`, and `/etc/nsswitch.conf`, which the minimal Nix image lacks.

One subcontainer, `fman-sub`, runs `/bin/fleet-manager serve` directly rather than the image's entrypoint script, with the same arguments that script would build. Each seat's guardian is a `fedimintd` child process of that daemon inside the same subcontainer. `RUST_LOG` is set to `info`; without it the daemon inherits StartOS's `warn` level and logs almost nothing.

## Volume and Data Layout

All of the service's state is on one volume.

| Volume           | Mount point    | Contents                                                                                                                                                                           |
| ---------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `main`           | `/data`        | Fleet SQLite database, identity and recovery phrase, payment wallets, `seats/<n>/` guardian directories, `safe-events/` journals, `admin.sock`, `store.json`, `.operator-password` |
| Bitcoin's `main` | `/mnt/bitcoin` | Read-only; only its `.cookie` is read                                                                                                                                              |

## File Models

The package owns two files; everything the dashboard configures (price, seat capacity, payout destination) lives in upstream's SQLite database.

| File                 | Format     | Seeded by                   | Rewritten                                         | Hand edit survives |
| -------------------- | ---------- | --------------------------- | ------------------------------------------------- | ------------------ |
| `store.json`         | JSON       | Set Dashboard Password      | Only by that action; other keys are preserved     | Yes                |
| `.operator-password` | plain text | `store.json` on every start | Every start, from `operatorPassword`, mode `0600` | No                 |

The daemon reads `.operator-password` only at startup.

## Dependencies

Bitcoin is required and should be running, synced, and healthy (`bitcoind`, `sync-progress`). The package resolves Bitcoin's RPC address over the StartOS bridge and authenticates with the `.cookie` from Bitcoin's volume, mounted read-only. It changes nothing in Bitcoin's configuration. When Bitcoin writes a new cookie the service restarts to pick it up.

The service refuses to start, with "Local Bitcoin is not reachable." or "Local Bitcoin RPC credentials are unavailable.", while Bitcoin is not installed or has not yet written its cookie.

## Network Access and Interfaces

The service exposes the dashboard and a port range for its guardian seats.

| Interface   | Type | Internal port(s) | External port(s) | Purpose                                                              |
| ----------- | ---- | ---------------- | ---------------- | -------------------------------------------------------------------- |
| `ui`        | ui   | 8181 (HTTP)      | 8181             | Operator dashboard and its admin API (`/api/auth`, `/api/admin`)     |
| `seat-iroh` | api  | 30000–30031      | 31000–31031      | Each seat's iroh sockets, for direct guardian and client connections |

The dashboard uses upstream's password mode: `POST /api/auth` issues an in-memory session cookie, so a restart signs every session out.

Seats use four ports each, by lifetime seat ordinal, so the range covers the first eight seats ever created. iroh uses only UDP, but a StartOS port range forwards TCP too, which also exposes each seat's plaintext WebSocket client-API port; upstream publishes UDP only. The range serves nothing until a seat exists.

## Installation and First-Run Flow

Installation generates nothing. A critical task holds the service until Set Dashboard Password is run; the service then starts into upstream's own setup wizard in the dashboard: create a new identity or restore one from its recovery phrase, authorize the host with a Fedi verification credential, then set the first price and seat capacity. The package does not pre-answer any of it.

## Actions

The package has one action.

**Set Dashboard Password** (`set-dashboard-password`)

- **When:** first setup (its task), or when the password is lost or compromised.
- **Changes:** `operatorPassword` in `store.json`.
- **Cost:** a running service restarts within seconds, and every dashboard session is signed out. Guardians restart with the daemon.
- **Repeat safety:** each run generates a new password; the previous one cannot be recovered.
- **Outputs:** the new 32-character password, masked and copyable.

## Tasks

The service is held on one task until a dashboard password exists.

- **Set Dashboard Password** — `critical`. Raised when `store.json` holds no `operatorPassword`, which is the state after install. Running the action clears it; it returns only if the stored password is removed.

## Health Checks

One check, on the daemon.

- **Operator Dashboard** (`fman`) — passes when port 8181 is listening, with the SDK's default timing. It does not reflect onboarding progress, federation health, or Bitcoin sync. A failure that persists means the daemon exited: read the logs. A daemon that never started at all is usually the Bitcoin errors under [Dependencies](#dependencies).

## Backups and Restore

The `main` volume is copied whole, with the service stopped, which is the complete data root upstream requires: SQLite, wallets, identity, and every seat's guardian database and checkpoints are restored together, with the dashboard password.

The copy excludes the `safe-events/` telemetry journals, which upstream requires discarding on a restore — the daemon starts fresh ones — along with `admin.sock` and runtime lock files.

Upstream supports one running instance per identity: restore onto a server that replaces the original, never alongside it. Bitcoin is backed up separately and must be present before the restored service starts.

## Limitations and Differences

1. Mainnet only, against the local Bitcoin; there is no setting for another network or RPC server.
2. Direct iroh paths cover the first eight seat ordinals; later seats fall back to relays until a package update extends the range.
3. The Esplora fallback for Bitcoin RPC errors is fixed to `https://mempool.space/api`.
4. No push-gateway origin is configured, so the daemon refuses requests for DKG-completion push callbacks; upstream treats push notifications as optional.

---

## Quick Reference for AI Consumers

```yaml
package_id: manifold-fedimint-guardian
image: ghcr.io/fedibtc/manifold-fman
architectures: [x86_64, aarch64]
subcontainers: [fman-sub]
volumes:
  main: /data
file_models:
  - store.json
  - .operator-password
startos_managed_env_vars:
  - RUST_LOG
dependencies: [bitcoind]
interfaces:
  ui: { type: ui, port: 8181 }
  seat-iroh: { type: api, port: 30000-30031 }
actions:
  - set-dashboard-password
tasks:
  - { action: set-dashboard-password, severity: critical }
health_checks:
  - fman
```
