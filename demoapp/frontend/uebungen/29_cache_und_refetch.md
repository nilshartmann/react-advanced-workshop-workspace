# Übung: Pending- und Fetching-States anzeigen

**Wenn die Daten geladen werden, soll der Benutzer Feedback haben**
  * Aktualisiere die UI abhängig von dem Zustand deines Queries

* Es gibt mehrere Konstellationen, z.B.
  * ein Query wurde noch _nie_ ausgeführt. Es liegen also keine Daten im Cache
  * Der aktuelle Query ist sichtbar (z.B. `orderBy=dueDate`) aber der nächste läuft schon (`orderBy=state`)
  * Der aktuelle Query hat Daten im Cache, wird aber erneut ausgeführt
    * `orderBy=dueData` -> `orderBy=state` -> `orderBy=dueDate`
* Gib für die einzelnen Konstellationen entsprechende Meldungen aus
  * Diese sollten fachlich sinnvoll sein
  * Macht es z.B. Sinn während des refetchings schon die alten Daten anzuzeigen, die im Cache sind, bis der Query neue Daten geladen hat?
* Untersuche den Netzwerkverkehr
  * Wann werden die Requests ausgeführt?
  * Wechsel auch zwischen unterschiedlichen Routen (`/tasks` -> `/about` -> `/tasks`) hin und her
  * Wie beeinflusst `refetchOnMount` in den `defaultOptions` des `QueryClient`-Objektes das Verhalten?
    * Du kannst den Parameter in `create-query-client.tsx` anpassen

## Doku

* Placeholder Query Data: https://tanstack.com/query/latest/docs/framework/react/guides/placeholder-query-data
* Background Fetching Indicators: https://tanstack.com/query/latest/docs/framework/react/guides/background-fetching-indicators
* Query Basics mit Status: https://tanstack.com/query/latest/docs/framework/react/guides/queries#query-basics