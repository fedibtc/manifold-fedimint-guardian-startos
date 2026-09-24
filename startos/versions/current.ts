import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.0:0',
  releaseNotes: {
    en_US:
      'Initial StartOS release. Image d32c0ef4b0a3b7881f0c98f6cf944a7a349c650d, including Fedimint v0.12.0-fedi7.',
    es_ES:
      'Lanzamiento inicial para StartOS. Imagen d32c0ef4b0a3b7881f0c98f6cf944a7a349c650d, que incluye Fedimint v0.12.0-fedi7.',
    de_DE:
      'Erstveröffentlichung für StartOS. Image d32c0ef4b0a3b7881f0c98f6cf944a7a349c650d, mit Fedimint v0.12.0-fedi7.',
    pl_PL:
      'Pierwsze wydanie dla StartOS. Obraz d32c0ef4b0a3b7881f0c98f6cf944a7a349c650d, zawierający Fedimint v0.12.0-fedi7.',
    fr_FR:
      'Version initiale pour StartOS. Image d32c0ef4b0a3b7881f0c98f6cf944a7a349c650d, incluant Fedimint v0.12.0-fedi7.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
