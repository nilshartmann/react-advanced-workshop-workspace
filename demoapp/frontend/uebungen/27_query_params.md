# Übung: Search bzw. Query Parameter

**Unsere Task-Liste soll sortierbar sein**

* **Definiere mit Zod das SearchParams-Objekt für die `/tasks`-Route**
  * Es gibt zunächst nur einen Search-Param, der `orderBy` heißen soll
    * Die erlaubten Werte: `dueDate`, `state` und `votes`
    * Default (bzw `catch`): `dueDate`
  * Lass die `/tasks`-Route die Search Parameter mit deinem Zod-Schema validieren
* **Passe den GET Tasks-Query an**
  * Lies in der Tasks-Route den `orderBy`-Search-Parameter aus
  * Verwende den Search Parameter, um die sortiere Liste vom Backend abzufragen:
    * Der Search Parameter für den **API Aufruf** heisst auch `orderBy` und kann die drei o.g. Werte annehmen
    * Du musst auch den `Query Key` anpassen!
  * Wenn Du den Search Parameter nun manuell im Browser in die URL einfügst, sollte sich die Sortierung ändern
* **Füge Buttons zum Ändern der Sortierung hinzu**
  * Baue eine Komponente, die drei Buttons darstellt
    * Jeder Button setzt den Search-Parameter jeweils auf einen der drei Werte zum Setzen der Sortierung
    * Der "aktive" Button soll optisch gekennzeichnet sein (damit man weiss, wonach gerade sortiert ist)
      * Du kannst als Basis die Komponente `OrderByButtonBar` verwenden
    * Du musst in der Komponente den `orderBy`-Search-Parameter der `/tasks`-Route abfragen
      * Damit kannst du dann prüfen, welcher Button "aktiv" ist
    * Die Button sollen jeweils einen `Link` rendern, der auf die ´/tasks`-Route zeigt, aber dabei natürlich den `orderBy` Parameter neu setzt.
      * Achte darauf, dass nur der `orderBy`-Parameter neu gesetzt wird, alle anderen Search-Parameter (sofern vorhanden), erhalten bleiben
        * Da wir zurzeit nur den einen Search-Parameter haben, kannst du manuell einen zweiten in der URL im Browser hinzufügen
        * Zum Beispiel: `?orderBy=dueDate?hello=world`
        * Wenn du der drei Buttons zum Ändern der Sortierung anklickst, muss `hello=world` erhalten bleiben
* **Stelle sicher, dass der Search-Parameter beim Routen-Wechsel erhalten bleibt**
  * Wenn du eine Route wechselst (z.B. `tasks` -> `/about` -> `/tasks`) soll die Sortierreihenfolge erhalten bleiben
  * Füge dazu in der Root-Route die `retainSearchParams` Middleware hinzu 

## Doku

* **Zod**
  * `.catch`: https://zod.dev/?id=catch
  * `.default`: https://zod.dev/?id=default
* **Router**
  * Search Params https://tanstack.com/router/latest/docs/framework/react/guide/search-params#transforming-search-with-search-middlewares
    * Zod Validator: https://tanstack.com/router/latest/docs/framework/react/guide/search-params#zod 
    * Search Middleware: https://tanstack.com/router/latest/docs/framework/react/guide/search-params#transforming-search-with-search-middlewares   
    * Retain Search Params middleware: https://tanstack.com/router/latest/docs/framework/react/api/router/retainSearchParamsFunction#search-middleware-to-retain-search-params
  * useSearch-Hook: https://tanstack.com/router/latest/docs/framework/react/api/router/useSearchHook
  * getRouteApi: https://tanstack.com/router/latest/docs/framework/react/api/router/getRouteApiFunction
    * (Achtung: **außerhalb** deiner Komponente verwenden, aber im gleichen Modul)