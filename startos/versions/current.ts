import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.1:1',
  releaseNotes: {
    en_US: `This release improves reliability and day-to-day operation of Manifold Fedimint Guardian.

- Added a built-in Health page to help diagnose common setup and connectivity issues without exposing sensitive information.
- Improved guardian startup so temporary issues with fallback Bitcoin services do not unnecessarily block startup.
- Fixed authorization updates so newer badge authorizations correctly replace older ones.

No special upgrade steps are required for normal installations.

- Set Dashboard Password's confirmation says that it signs out every dashboard session and restarts a running service.
- Bitcoin must be at least 28.4:29, 29.4:16, 30.3:16 or 31.1:16, depending on its major version. Bitcoin Knots (pre-RDTS) 29.3:29 or later also works.`,
    es_ES: `Esta versión mejora la fiabilidad y el funcionamiento diario de Manifold Fedimint Guardian.

- Se ha añadido una página de estado integrada para ayudar a diagnosticar problemas comunes de configuración y conectividad sin exponer información sensible.
- Se ha mejorado el inicio del guardian para que los problemas temporales con los servicios Bitcoin de respaldo no bloqueen innecesariamente el inicio.
- Se han corregido las actualizaciones de autorización para que las autorizaciones de credenciales más recientes sustituyan correctamente a las anteriores.

Las instalaciones normales no requieren pasos especiales para actualizar.

- La confirmación de Establecer contraseña del panel indica que cierra todas las sesiones del panel y reinicia el servicio si está en marcha.
- Bitcoin debe ser al menos la versión 28.4:29, 29.4:16, 30.3:16 o 31.1:16, según su versión principal. También funciona Bitcoin Knots (pre-RDTS) 29.3:29 o posterior.`,
    de_DE: `Diese Version verbessert die Zuverlässigkeit und den täglichen Betrieb von Manifold Fedimint Guardian.

- Eine integrierte Statusseite hilft dabei, häufige Einrichtungs- und Verbindungsprobleme zu erkennen, ohne vertrauliche Informationen offenzulegen.
- Der Start des Guardians wurde verbessert, damit vorübergehende Probleme mit Bitcoin-Ersatzdiensten ihn nicht unnötig blockieren.
- Aktualisierungen von Berechtigungen wurden korrigiert, damit neuere Badge-Berechtigungen ältere korrekt ersetzen.

Für normale Installationen sind keine besonderen Schritte beim Upgrade erforderlich.

- Die Bestätigung von Dashboard-Passwort festlegen weist darauf hin, dass jede Dashboard-Sitzung abgemeldet und ein laufender Dienst neu gestartet wird.
- Bitcoin muss je nach Hauptversion mindestens 28.4:29, 29.4:16, 30.3:16 oder 31.1:16 sein. Bitcoin Knots (pre-RDTS) ab 29.3:29 funktioniert ebenfalls.`,
    pl_PL: `To wydanie poprawia niezawodność i codzienne działanie Manifold Fedimint Guardian.

- Dodano wbudowaną stronę stanu, która pomaga diagnozować typowe problemy z konfiguracją i łącznością bez ujawniania poufnych informacji.
- Usprawniono uruchamianie guardiana, aby tymczasowe problemy z zapasowymi usługami Bitcoin nie blokowały go niepotrzebnie.
- Poprawiono aktualizacje autoryzacji, tak aby nowsze autoryzacje poświadczeń prawidłowo zastępowały starsze.

W przypadku standardowych instalacji aktualizacja nie wymaga dodatkowych czynności.

- Potwierdzenie działania Ustaw hasło panelu informuje, że wylogowuje ono wszystkie sesje panelu i ponownie uruchamia działającą usługę.
- Bitcoin musi być co najmniej w wersji 28.4:29, 29.4:16, 30.3:16 lub 31.1:16, zależnie od wersji głównej. Działa też Bitcoin Knots (pre-RDTS) 29.3:29 lub nowszy.`,
    fr_FR: `Cette version améliore la fiabilité et le fonctionnement quotidien de Manifold Fedimint Guardian.

- Ajout d’une page d’état intégrée pour aider à diagnostiquer les problèmes courants de configuration et de connectivité sans exposer d’informations sensibles.
- Amélioration du démarrage du guardian afin que les problèmes temporaires des services Bitcoin de secours ne le bloquent pas inutilement.
- Correction des mises à jour d’autorisation afin que les autorisations de badges plus récentes remplacent correctement les anciennes.

Aucune étape particulière n’est nécessaire pour mettre à jour une installation standard.

- La confirmation de Définir le mot de passe du tableau de bord indique qu’elle déconnecte toutes les sessions du tableau de bord et redémarre le service s’il est en cours d’exécution.
- Bitcoin doit être au moins en version 28.4:29, 29.4:16, 30.3:16 ou 31.1:16, selon sa version majeure. Bitcoin Knots (pre-RDTS) 29.3:29 ou plus récent fonctionne aussi.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
