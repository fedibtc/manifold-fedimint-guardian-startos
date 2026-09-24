import { i18n } from './i18n'
import { sdk } from './sdk'
import { irohFirstPort, irohPortCount, uiPort } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const origin = await sdk.MultiHost.of(effects, 'ui-multi').bindPort(uiPort, {
    protocol: 'http',
    preferredExternalPort: uiPort,
  })
  const ui = sdk.createInterface(effects, {
    id: 'ui',
    name: i18n('Operator Dashboard'),
    description: i18n('Sign in with the password from Set Dashboard Password.'),
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })
  const receipt = await origin.export([ui])
  const range = await sdk.MultiHost.of(effects, 'seat-iroh').bindPortRange({
    internalStartPort: irohFirstPort,
    externalStartPort: 31000,
    numberOfPorts: irohPortCount,
  })
  await range.export(
    sdk.createRangeInterface(effects, {
      id: 'seat-iroh',
      name: i18n('Seat Iroh Ports'),
      description: i18n(
        'Direct iroh connections to guardian seats (first 8 seats)',
      ),
    }),
  )
  return [receipt]
})
