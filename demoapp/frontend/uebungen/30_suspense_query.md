# Übung: Daten mit SuspenseQuery laden

* **Erzeuge eine neue Route zur Darstellung eines Tasks**
  * Die Route soll unterhalb von `/tasks` liegen
  * Die `taskId` soll Teil der URL sein
  * Ergänze in deiner Task-Liste für jeden Task einen `Link` auf die neue Komponente.
* **Lade die Task-Daten und zeige sie an**
  * Lade in deiner neuen Route den Task mit einem _Suspense_ Query
    * Endpoint: `GET api/tasks/$taskId`
    * Ergebnis: `Task`-Typ (bzw. `TaskSchema`)
  * Zur Darstellung des Tasks kannst du eine fertige Komponent aus der Komponentenbibliothek verwenden oder eine eigene bauen
  * Kannst du den Titel des Tasks als Titel des aktuellen Browser-Tabs setzen?
* **Lade die Insights eines Tasks**
  * Zu jedem Task kann es "Insights" geben (eine Art Kommentar)
  * Lade auch diese Daten und zeige sie an
      * Endpoint: `GET api/tasks/$taskId`
      * Ergebnis: Liste von `Insight`-Typen (bzw. `InsightSchema`)
  * Achtung!
    * Stelle sicher, dass die beiden Queries **parallel** ausgeführt werden
      * Es soll keine "Wasserfälle" geben
* **Feedback anzeigen**
  * Zeige dem Benutzer Feedback an, wenn Daten noch nicht verfügbar sind bzw. noch geladen werden
    * Du kannst die Queries jeweils verlangsamen, in dem du z.B. `?slowdown=2000` an die URL hängst
    * Oder du verwendest die React Query Developer Tools
  * Wie priorisierst du die Inhalte auf der Seite bzw. wo verwendest du die `Suspense`-Komponenten?
    * welchen Schnitt findest du fachlich sinnvoll?
  * Wenn es zu einem Fehler kommt, verwende ein Error Boundary, um die Fehlermeldung anzuzeigen
    * Dazu kannst du in der URL eine Task-Id verwenden, die es nicht gibt (z.B. 100)

## Doku

- **Router**
  - Path Params: https://tanstack.com/router/latest/docs/framework/react/guide/path-params
- **Query**
  - Suspense: https://tanstack.com/query/latest/docs/framework/react/guides/suspense
  - useSuspenseQuery: https://tanstack.com/query/latest/docs/framework/react/reference/useSuspenseQuery#usesuspensequery
  - useQueryClient: https://tanstack.com/query/latest/docs/framework/react/reference/useQueryClient#usequeryclient
  - ensureQueryData: https://tanstack.com/query/latest/docs/reference/QueryClient#queryclientensurequerydata
  - QueryErrorResetBoundary: https://tanstack.com/query/latest/docs/framework/react/reference/QueryErrorResetBoundary#queryerrorresetboundary
- **React**
  - Suspense Komponente: https://19.react.dev/reference/react/Suspense
  - Error Boundary Komponente: https://github.com/bvaughn/react-error-boundary/
  - title Komponente: https://19.react.dev/reference/react-dom/components/title
