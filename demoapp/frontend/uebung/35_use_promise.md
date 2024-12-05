# Lade die "Resourcen" zu einem Task

* **Ziel**
* Die Resourcen sollen unterhalb der Task-Darstellung erscheinen
* Wenn man auf der `/tasks/$taskId`-Route ist, soll unterhalb der Task-Darstellung ein Link gerendert werden, mit dem man die "Resourcen" eines Tasks anzeigen kann
  * "Resourcen" sollen fachlich weiterführende Informationen zu einem Task sein. 
  * Für uns wichtig ist, dass wir dafür technisch einen weiteren Request benötigen
  * Das Klicken auf den Link "klappt" die Resourcen quasi auf. 
    * Das wollen wir aber nicht über einen lokalen State regeln ("collapsed"), sondern über die URL
* Die Resourcen sollen unterhalb der Task-Darstellung angezeigt werden
* Der Unterschied in der Darstellung der beiden Routen besteht also nur darin, ob
  * ein Link angezeigt wird (`/task/$taskId`)
  * oder die Resourcen angezeigt werden (`/task/$taskId/resources`)

* **Vorbereitung: Refaktoring**
  * Die `/tasks/${taskId}`-Index-Route muss nun zu einer `route` werden
    * Diese soll dann der Container sein für:
      * /tasks/${taskId}/index.tsx
        * Diese zeigt unter den Insights einen Link auf `/resources` an
      * /tasks/${taskId}/resource.tsx
        * Diese zeigt unter den Insights die geladenen Resourcen an
    * Bennene also die `index.tsx`-Datei in `route.tsx` um
    * In der `route.tsx`-Datei musst du die Outlet-Komponete einfügen, um die Inhalte der Routen einzubetten
    * Erzeuge zwei neue Routen:
      * `tasks/$taskId/resources.tsx`: bleibt erstmal leer (default-Komponente, die der Router gerendert hat)
      * `tasks/$taskId/index.tsx`: diese rendert nun nur noch einen Link auf die `resources`-Route
        * Kannst du den Link so bauen, dass du den Wert für `$taskId` nicht in der `Link`-Komponente setzen musst?
    * Wenn du nun `tasks/$taskId` im Browser mit einer gültigen Task-Id aufrufst, sollte dein Link erscheinen
    * Wenn du auf den Link klickst, soll die leere `resources`-Routen-Komponente erscheinen
* **Verwenden des Router Context**
  * Die zentrale `QueryClient`-Instanz unserer Anwendung muss in den Router Context, damit wir in den `loader`-Funktionen darauf zugriff haben
    * Erzeuge in `__root.tsx` einen TypeScript-Typen für den Kontext.
      * Der Kontext soll einen Eintrag `queryClient` mit dem `QueryClient` enthalten
    * Deine `__root`-Komponente muss nun mit `createRootRouteWithContext` erzeugt werden
      * anstatt `createRootRoute`
    * Den initialen Kontext musst du in `RouterApp` in der `createRouter`-Funktion erzeugen
      * Als `queryClient` musst du das mit `createQueryClient` erzeugte Objekt nehmen, das bereits in der Datei vorhanden ist!
* **Laden der Resources**
  * Die Resourcen sollen in der `route.tsx`-Datei vorgeladen werden
  * Implementiere dort einen `loader`, in dem du die Resources in den Cache lädst
    * Endpunkt: `GET /api/tasks/$taskId/resources`. Ergebnis: `Resource`-Liste
  * Im RouterContext befindet sich das `QueryClient`-Objekt, mit dem du den Cache befüllen lassen kannst
* **Darstellen der Resourcen**
  * Verwende `useQuery` in der Routen-Komponente `tasks/$taskId/resources.tsx` und lass dir das `Promise` mit dem Ergebnis geben
  * Baue eine `ResourceList`-Komponente, die das Promise entgegennimmt
  * Warte in der Komponente auf die Daten aus dem Promise und zeige sie in einer Liste an
* **Darstellen einer Wartemeldung**
  * Wenn das Laden und Anzeigen der Resourcen funktioniert, ziehe eine `Suspense`-Komponente ein, um dem Benutzer visuelles Feedback zu geben, solange die Resourcen geladen werden
* **Optional**:
  * Anstatt im `loader` der `route`-Komponente: wo könntest du die Daten alternativ vorladen?
    * Was spricht dafür / dagegen?

## Doku

* **Router**
  * Router `loader`: https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#route-loaders
  * Router Context: https://tanstack.com/router/latest/docs/framework/react/guide/router-context
* **React**
  * `use`-Funktion: https://19.react.dev/reference/react/use
* **Query**
  * `useQuery` liefert `promise` zurück: https://tanstack.com/query/latest/docs/framework/react/reference/useQuery#usequery
