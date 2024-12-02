# Übung: eine Mutation zum Erhöhen der Votes

* *Es gibt mehrere Stellen in der App, in der Votes eines Tasks angezeigt werden*
  * Listendarstellung
  * Task Einzeldarstellung
* Die Vote-Darstellung soll jeweils ein Button o.ä. werden
  * wenn man darauf klickt, soll der Task "gevotet" werden
  * Dazu muss ein Endpoint aufgerufen werden
* Die Darstellung soll dann automatisch in der Anwendung aktualisiert werden
* **Definiere ein Zod-Schema für die Antwort des Endpunkts**
  * zum Beispiel `VoteTaskResponseSchema`
  * Der Endpunkt ist `PATCH /api/tasks/$taskId/votes`
  * Zurückgeliefert wird ein Objekt mit den neuen Votes für den Task: `{"newVotes": 123}`
* **Beschreibe eine `Mutation` zum "voten"**
  * Endpunkt s.o.
  * Validiere das Ergebnis mit deinem Response Zod-Schema
  * Die Mutation soll ausgeführt werden, wenn auf den "Votes Button" geklickt wird
  * Kannst du den Button (oder welches Element du verwendest) disablen, während die Mutation läuft?
* **Sorge dafür, dass die Darstellungen aktualisiert werden**
  * Es gibt mehrere Wege, z.B.
    * invalidieren der Queries
    * Direktes Modifizieren des Caches/der Cache
    * Neuausführen der Queries (z.B. `refetchOnMount` im `queryClient` (`create-query-client.ts`))
  * Für welchen Weg/welche Wege entscheidest du dich?

## Doku
* useMutation https://tanstack.com/query/latest/docs/framework/react/reference/useMutation#usemutation
* Invalidation from Mutations: https://tanstack.com/query/latest/docs/framework/react/guides/invalidations-from-mutations
* Updates from Mutation Responses:  https://tanstack.com/query/latest/docs/framework/react/guides/updates-from-mutation-responses
* setQueryData: https://tanstack.com/query/latest/docs/reference/QueryClient/#queryclientsetquerydata
