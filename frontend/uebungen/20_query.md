# Übung: Ein Query zum Lesen der Tasks

## Schritte

- **Anpassen der Routen-Konfiguration**
  - Lege eine neue Route `/tasks` an
    - Empfehlung: als Directory-Route, nicht als Flat-Route
  - Wenn die Route `/` aufgerufen wird, soll auf `/tasks` weitergeleitet werden
- **Lesen der Daten vom Backend**
  - Der Endpunkt für die "REST API" im Backend ist `/api/tasks`
    - In der `vite.config` ist ein Proxy-Konfiguriert, der alle Anfragen auf `/api` in unser Backend auf Port `3002` weiterleitet. 
    - Deswegen brauchst du keine Hostangaben zu machen
  - Verwende `useQuery` zum lesen der Aten 
    - Führe einen GET-Query aus, der alle Tasks liest
      - Der Rückgabe-Typ ist eine Liste von `Task`-Objekten (s. `types.ts`)
    - Du kannst `ky` oder `fetch` benutzen, oder welche Bibliothek auch immer dir am besten gefällt
    - Wähle einen passenden `queryKey`
- **Zeige die Tasks in einer Liste an**
  - Implementiere dafür die `RouteComponent` der `/tasks`-Route 
  - Du kannst dir selbst eine Komponente dafür bauen und/oder im StoryBook gucken, ob du (zusätzlich) fertige Komponenten verwenden willst
  - Angezeigt werden soll für jeden Task: `title`, `votes`  und `state`
- **Zeige einen Platzhalter an, solange noch keine Daten gelesen wurden**
  - Du kannst den Query künstlich verlangsamen, in dem Du `slowdown=delay_in_ms` anhängst (z.B. `/api/tasks?slowdown=2400`)
  - Alternativ kannst du die TanStack Query Developer Tools aktivieren (`RouteApp.tsx`) und dort `Trigger Loading` für den Cache-Eintrag der Task-Liste ausführen
  - Zusätzlich kannst du auch eine Fehlermeldung ausgeben, wenn das Lesen nicht geklappt hat.

## StoryBook

- Starten mit `pnpm storybook`, falls noch nicht geschehen
- http://localhost:6006

## Doku

**Router**
- `redirect`: https://tanstack.com/router/latest/docs/framework/react/api/router/redirectFunction
  - Alternativ `Navigate`:https://tanstack.com/router/latest/docs/framework/react/api/router/navigateComponent#navigate-component

**TanStack Query**:
  - Query Keys: https://tanstack.com/query/latest/docs/framework/react/guides/query-keys
  - Query Functions: https://tanstack.com/query/latest/docs/framework/react/guides/query-functions
  - useQuery-Hook: https://tanstack.com/query/latest/docs/framework/react/reference/useQuery
