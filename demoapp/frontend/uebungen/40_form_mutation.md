# Übung: Erweitere das Formular mit einer Mutation

- **Schreibe eine neue Mutation**, die die Daten aus dem Formular speichert
  - Endpunkt: `POST api/tasks/$taskId/insights` 
  - Payload: `NewInsight`-Objekt (`text`, `author`, `confidence`)
- **Erweitere das Formular**
  - Beim Submit soll die Mutation ausgeführt werden
  - **Optional**:
    - Kannst du den Submit-Button (oder gar das ganze Formular) disablen, während der Request läuft?
    - Du kannst den Request wieder künstlich mit `?slowdown=2000` verzögern
- **Behandlung des Ergebnisses:**
  - Wenn die Mutation **erfolgreich** war:
    - Setze das Formular zurück (alle Inhalte und Fehler löschen)
    - Zeige eine Bestätigungsmeldung unter dem Formular an ("Speichern hat geklappt")
  - Wenn die Mutation **fehlerhaft** war:
    - Zeige die Fehlermeldung unterhalb des Formulars an
    - Du kannst einen Fehler im Backend provozieren, in dem du als `Author` den Namen des künftigen US-Präsidenten angibst 🙄
  - In jedem Fall, wenn die Mutation **erfolgreich _oder_ fehlerhaft** war:
    - wenn danach ein Feld in irgenein Feld eingegeben wird, soll die Fehler/Bestätigungsmeldung wieder gelöscht werden

## Doku

- watch https://www.react-hook-form.com/api/useform/watch/
- reset https://www.react-hook-form.com/api/useform/reset/
- useMutation https://tanstack.com/query/latest/docs/framework/react/reference/useMutation#usemutation
  - Für die Behandlung der Antwort siehe dort z.B.
    - `mutateAsync`
    - `onSettled`

 Resolver: https://github.com/react-hook-form/resolvers?tab=readme-ov-file#zod