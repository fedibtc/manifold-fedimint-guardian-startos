# Updating the upstream version

The upstream is the `ghcr.io/fedibtc/manifold-fman` image, pinned in the `Dockerfile` by full source commit and multi-platform digest. Upstream's release procedure is `packages/fleet-manager/production-releases.md` in `fedibtc/manifold`.

## Determining the upstream version

1. Pick a successful run of the image-publish workflow in `fedibtc/manifold` and take its full source commit — never a moving branch tag.
2. Confirm that tag carries both architectures, and read its digest:

   ```
   docker buildx imagetools inspect ghcr.io/fedibtc/manifold-fman:<commit>
   ```

3. Read the bundled Fedimint release from the image's `org.fedi.fedimintd.release` label.

## Applying the bump

1. In the `Dockerfile`, replace the tag and the digest together.
2. In `startos/versions/current.ts`, bump the version and record the image commit and the bundled Fedimint release in every locale's release notes — upstream requires the exact commit there. Never publish a different image under a version already released.
3. Build both architectures and test on StartOS: a fresh install, password rotation, an update over a populated data root, and backup/restore.
