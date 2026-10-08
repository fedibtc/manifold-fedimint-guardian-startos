import { utils } from '@start9labs/start-sdk'
import { storeJson } from '../fileModels/store'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const setPassword = sdk.Action.withoutInput(
  'set-dashboard-password',
  async ({ effects }) => ({
    name: i18n('Set Dashboard Password'),
    description: i18n('Generate a new password for the dashboard.'),
    warning: (await storeJson.read((s) => s?.operatorPassword).const(effects))
      ? i18n(
          'Replaces the current dashboard password and signs out every dashboard session. A running service restarts.',
        )
      : null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),
  async ({ effects }) => {
    const operatorPassword = utils.getDefaultString({
      charset: 'a-z,A-Z,0-9',
      len: 32,
    })
    await storeJson.merge(effects, { operatorPassword })
    return {
      version: '1',
      title: i18n('Dashboard Password'),
      message: i18n('Use this password to sign in to the dashboard.'),
      result: {
        type: 'single',
        value: operatorPassword,
        masked: true,
        copyable: true,
        qr: false,
      },
    }
  },
)
