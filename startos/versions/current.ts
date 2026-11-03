import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.9:0',
  releaseNotes: {
    en_US: `This release makes your guardians more reliable.

- Guardians now reconnect by themselves after a lost connection.
- Guardians use less CPU under heavy load.
- The dashboard shows your uptime scores.
- If this host runs a release that is too old, it stops offering new seats, and the Health page tells you to update.

After you update to 0.1.9, you cannot go back to 0.1.8.

Image commit: 81ab02269135e0c5b2601c3b5eda11749d29215d. Fedimint: 0.12.0-fedi18.`,
    es_ES: `Esta versión hace que tus guardians sean más fiables.

- Los guardians ahora se reconectan solos después de perder una conexión.
- Los guardians usan menos CPU con carga alta.
- El panel muestra tus puntuaciones de disponibilidad.
- Si este host usa una versión demasiado antigua, deja de ofrecer nuevos puestos, y la página de Salud te indica que actualices.

Después de actualizar a 0.1.9, no se puede volver a 0.1.8.

Commit de la imagen: 81ab02269135e0c5b2601c3b5eda11749d29215d. Fedimint: 0.12.0-fedi18.`,
    de_DE: `Diese Version macht deine Guardians zuverlässiger.

- Guardians verbinden sich nach einem Verbindungsverlust jetzt selbst neu.
- Guardians brauchen unter hoher Last weniger CPU.
- Das Dashboard zeigt deine Verfügbarkeitswerte.
- Wenn dieser Host eine zu alte Version nutzt, bietet er keine neuen Plätze mehr an, und die Seite „Health“ fordert dich zum Update auf.

Nach dem Update auf 0.1.9 ist keine Rückkehr zu 0.1.8 möglich.

Image-Commit: 81ab02269135e0c5b2601c3b5eda11749d29215d. Fedimint: 0.12.0-fedi18.`,
    pl_PL: `To wydanie sprawia, że Twoi guardianie są bardziej niezawodni.

- Guardianie sami łączą się ponownie po utracie połączenia.
- Guardianie zużywają mniej CPU przy dużym obciążeniu.
- Panel pokazuje Twoje wyniki dostępności.
- Jeśli ten host używa zbyt starej wersji, przestaje oferować nowe miejsca, a strona Health poprosi Cię o aktualizację.

Po aktualizacji do 0.1.9 nie można wrócić do 0.1.8.

Commit obrazu: 81ab02269135e0c5b2601c3b5eda11749d29215d. Fedimint: 0.12.0-fedi18.`,
    fr_FR: `Cette version rend vos guardians plus fiables.

- Les guardians se reconnectent désormais seuls après une perte de connexion.
- Les guardians utilisent moins de CPU sous forte charge.
- Le tableau de bord affiche vos scores de disponibilité.
- Si cet hôte utilise une version trop ancienne, il cesse de proposer de nouvelles places, et la page Health vous demande de mettre à jour.

Après la mise à jour vers 0.1.9, il n’est plus possible de revenir à 0.1.8.

Commit de l’image : 81ab02269135e0c5b2601c3b5eda11749d29215d. Fedimint : 0.12.0-fedi18.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
