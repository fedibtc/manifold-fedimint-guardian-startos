import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.7:0',
  releaseNotes: {
    en_US: `This release delivers the latest Fedimint update (0.12.0-fedi15) and also lets federation admins change Fedi app settings for their federation.

These app settings include:

- default currency
- wallet and invoice limits
- spaces that new members join
- default group chats
- the pinned message
- toggling certain features on/off (stability pool, multispend, invite codes, new members, offline wallet, and onchain deposits.)

A change takes effect when enough guardians in the federation run 0.1.7 or later.

No special upgrade steps are required for normal installations.

Image commit: 108c8318dab0536b2402206382f3e2c19f27189a. Fedimint: 0.12.0-fedi15.`,
    es_ES: `Esta versión incluye la última actualización de Fedimint (0.12.0-fedi15) y permite a los administradores de una federación cambiar los ajustes de la aplicación Fedi para su federación.

Estos ajustes incluyen:

- moneda predeterminada
- límites de la cartera y de las facturas
- espacios a los que se unen los nuevos miembros
- chats de grupo predeterminados
- el mensaje fijado
- activar o desactivar determinadas funciones (fondo de estabilidad, multispend, códigos de invitación, nuevos miembros, cartera sin conexión y depósitos en cadena)

Un cambio entra en vigor cuando suficientes guardians de la federación ejecutan la versión 0.1.7 o posterior.

Las instalaciones normales no requieren pasos especiales para actualizar.

Commit de la imagen: 108c8318dab0536b2402206382f3e2c19f27189a. Fedimint: 0.12.0-fedi15.`,
    de_DE: `Diese Version enthält das neueste Fedimint-Update (0.12.0-fedi15) und ermöglicht es Föderationsadministratoren, die Einstellungen der Fedi-App für ihre Föderation zu ändern.

Diese Einstellungen umfassen:

- Standardwährung
- Wallet- und Rechnungslimits
- Räume, denen neue Mitglieder beitreten
- Standard-Gruppenchats
- die angeheftete Nachricht
- das Ein- und Ausschalten bestimmter Funktionen (Stabilitätspool, Multispend, Einladungscodes, neue Mitglieder, Offline-Wallet und Onchain-Einzahlungen)

Eine Änderung wird wirksam, sobald genügend Guardians der Föderation Version 0.1.7 oder neuer ausführen.

Für normale Installationen sind keine besonderen Schritte beim Upgrade erforderlich.

Image-Commit: 108c8318dab0536b2402206382f3e2c19f27189a. Fedimint: 0.12.0-fedi15.`,
    pl_PL: `To wydanie zawiera najnowszą aktualizację Fedimint (0.12.0-fedi15) i pozwala administratorom federacji zmieniać ustawienia aplikacji Fedi dla swojej federacji.

Te ustawienia obejmują:

- domyślną walutę
- limity portfela i faktur
- przestrzenie, do których dołączają nowi członkowie
- domyślne czaty grupowe
- przypiętą wiadomość
- włączanie i wyłączanie wybranych funkcji (pula stabilności, multispend, kody zaproszeń, nowi członkowie, portfel offline i wpłaty onchain)

Zmiana wchodzi w życie, gdy wystarczająca liczba guardianów federacji korzysta z wersji 0.1.7 lub nowszej.

W przypadku standardowych instalacji aktualizacja nie wymaga dodatkowych czynności.

Commit obrazu: 108c8318dab0536b2402206382f3e2c19f27189a. Fedimint: 0.12.0-fedi15.`,
    fr_FR: `Cette version apporte la dernière mise à jour de Fedimint (0.12.0-fedi15) et permet aux administrateurs d’une fédération de modifier les paramètres de l’application Fedi pour leur fédération.

Ces paramètres comprennent :

- la devise par défaut
- les limites du portefeuille et des factures
- les espaces que rejoignent les nouveaux membres
- les discussions de groupe par défaut
- le message épinglé
- l’activation ou la désactivation de certaines fonctionnalités (pool de stabilité, multispend, codes d’invitation, nouveaux membres, portefeuille hors ligne et dépôts onchain)

Une modification prend effet lorsqu’un nombre suffisant de guardians de la fédération utilisent la version 0.1.7 ou ultérieure.

Aucune étape particulière n’est nécessaire pour mettre à jour une installation standard.

Commit de l’image : 108c8318dab0536b2402206382f3e2c19f27189a. Fedimint : 0.12.0-fedi15.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
