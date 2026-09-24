import { sdk } from './sdk'

export const { createBackup, restoreInit } = sdk.setupBackups(
  async ({ effects }) =>
    sdk.Backups.ofVolumes('main').setOptions({
      // Upstream requires restored safe-event journals to be discarded before FMan starts.
      exclude: [
        'safe-events',
        'admin.sock',
        'fleet-manager.lock',
        'database.db.lock',
      ],
    }),
)
