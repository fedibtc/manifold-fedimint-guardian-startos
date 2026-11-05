import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.10:0',
  releaseNotes: {
    en_US: `This release updates Fedimint to 0.12.0-fedi22 and fixes small problems.

You do not need to do anything special to update.

Image commit: 53ca68e6787874d0dba20645380a405c0ae456e2. Fedimint: 0.12.0-fedi22.`,
    es_ES: `Esta versión actualiza Fedimint a 0.12.0-fedi22 y corrige pequeños problemas.

No necesitas hacer nada especial para actualizar.

Commit de la imagen: 53ca68e6787874d0dba20645380a405c0ae456e2. Fedimint: 0.12.0-fedi22.`,
    de_DE: `Diese Version aktualisiert Fedimint auf 0.12.0-fedi22 und behebt kleine Probleme.

Für das Update musst du nichts Besonderes tun.

Image-Commit: 53ca68e6787874d0dba20645380a405c0ae456e2. Fedimint: 0.12.0-fedi22.`,
    pl_PL: `To wydanie aktualizuje Fedimint do 0.12.0-fedi22 i naprawia drobne problemy.

Aktualizacja nie wymaga żadnych dodatkowych czynności.

Commit obrazu: 53ca68e6787874d0dba20645380a405c0ae456e2. Fedimint: 0.12.0-fedi22.`,
    fr_FR: `Cette version met à jour Fedimint vers 0.12.0-fedi22 et corrige de petits problèmes.

Vous n’avez rien de particulier à faire pour mettre à jour.

Commit de l’image : 53ca68e6787874d0dba20645380a405c0ae456e2. Fedimint : 0.12.0-fedi22.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
