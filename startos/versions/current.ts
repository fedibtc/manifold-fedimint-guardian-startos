import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.6:0',
  releaseNotes: {
    en_US: `This release updates TLS root certificates and moves guardian configs to a new storage layout.

- Updated TLS root certificates.
- Guardian configs move to a new storage layout on first start. After this update, you cannot go back to 0.1.5.
- The dashboard footer now shows the version.

No special upgrade steps are required for normal installations.

Image commit: 61d28d774e72f27d25e41489e33126ae3184e170. Fedimint: 0.12.0-fedi13.`,
    es_ES: `Esta versión actualiza los certificados raíz TLS y mueve las configuraciones de los guardians a un nuevo formato de almacenamiento.

- Certificados raíz TLS actualizados.
- Las configuraciones de los guardians pasan a un nuevo formato de almacenamiento en el primer inicio. Después de esta actualización no se puede volver a 0.1.5.
- El pie del panel ahora muestra la versión.

Las instalaciones normales no requieren pasos especiales para actualizar.

Commit de la imagen: 61d28d774e72f27d25e41489e33126ae3184e170. Fedimint: 0.12.0-fedi13.`,
    de_DE: `Diese Version aktualisiert die TLS-Stammzertifikate und überführt die Guardian-Konfigurationen in ein neues Speicherformat.

- TLS-Stammzertifikate aktualisiert.
- Guardian-Konfigurationen werden beim ersten Start in ein neues Speicherformat überführt. Nach diesem Update ist keine Rückkehr zu 0.1.5 möglich.
- Die Fußzeile des Dashboards zeigt jetzt die Version an.

Für normale Installationen sind keine besonderen Schritte beim Upgrade erforderlich.

Image-Commit: 61d28d774e72f27d25e41489e33126ae3184e170. Fedimint: 0.12.0-fedi13.`,
    pl_PL: `To wydanie aktualizuje główne certyfikaty TLS i przenosi konfiguracje guardianów do nowego formatu przechowywania.

- Zaktualizowano główne certyfikaty TLS.
- Konfiguracje guardianów są przenoszone do nowego formatu przechowywania przy pierwszym uruchomieniu. Po tej aktualizacji nie można wrócić do 0.1.5.
- Stopka panelu pokazuje teraz wersję.

W przypadku standardowych instalacji aktualizacja nie wymaga dodatkowych czynności.

Commit obrazu: 61d28d774e72f27d25e41489e33126ae3184e170. Fedimint: 0.12.0-fedi13.`,
    fr_FR: `Cette version met à jour les certificats racine TLS et déplace les configurations des guardians vers un nouveau format de stockage.

- Certificats racine TLS mis à jour.
- Les configurations des guardians passent à un nouveau format de stockage au premier démarrage. Après cette mise à jour, il n’est plus possible de revenir à 0.1.5.
- Le pied de page du tableau de bord affiche désormais la version.

Aucune étape particulière n’est nécessaire pour mettre à jour une installation standard.

Commit de l’image : 61d28d774e72f27d25e41489e33126ae3184e170. Fedimint : 0.12.0-fedi13.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
