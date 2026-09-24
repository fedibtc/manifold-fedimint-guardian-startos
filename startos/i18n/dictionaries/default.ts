export const DEFAULT_LANG = 'en_US'

const dict = {
  'Set Dashboard Password': 0,
  'Generate a new password for the dashboard.': 1,
  'Replaces the current dashboard password.': 2,
  'Dashboard Password': 3,
  'Use this password to sign in to the dashboard.': 4,
  'Set the dashboard password before starting.': 5,
  'Local Bitcoin is not reachable.': 6,
  'Local Bitcoin RPC credentials are unavailable.': 7,
  'Operator Dashboard': 8,
  'The operator dashboard is ready': 9,
  'The operator dashboard is not ready': 10,
  'Sign in with the password from Set Dashboard Password.': 11,
  'Seat Iroh Ports': 12,
  'Direct iroh connections to guardian seats (first 8 seats)': 13,
  'Local Bitcoin supplies the mainnet chain.': 14,
  Bitcoin: 15,
} as const

export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
