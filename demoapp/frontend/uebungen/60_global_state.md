# Übung: Search Params als "globaler State"

## Ziel
* **Man soll Tasks "anpinnen" können**
  * Dazu kann man in der Task-Liste auf Tasks klicken
  * Diese tauchen dann in einer Seitenspalte auf, die sichtbar ist, wenn die Task-Liste oder Task Detailansicht sichtbar ist
  * Die ausgewählten bzw. angepinnten Tasks sollen in den Search-Parametern festgehalten werden

## Schritte

1. Für die `/tasks`- und `/tasks/$taskId`-Routen brauchen wir ein Layout
   - Lege die entsprechende `route`-Komponente an
   - Das Layout soll links den Routen-Inhalt anzeigen und rechts die angepinnten Tasks
2. **Definiere den neuen Search-Paramter**
  - Auf die Search-Paramter musst du unterhalb in und unterhalb der `/tasks`-Route zugreifen
  - In welcher Routen-Definition musst du die Parameter als definieren?
  - Schreibe ein Zod-Schema für die Search-Params
    - Dieser soll eine Liste von `pinnedTaskIds` enthalten (optional)
    - Zum testen kannst du `pinnedTaskIds` in die URL schreiben. Es dürfte dann kein (Zod-)Fehler auftreten: http://localhost:3000/tasks?pinnedTaskIds=["2"%2C"1"%2C"6"]
3. Füge die Funktionalität zum "pinnen" von Tasks hinzu
  - Du kannst sowohl für jeden Task in der Listen- als auch in der Einzeldarstellung einen Button hinzufügen
  - Der Button soll in der Lage sein, den jeweiligen Task zu pinnen bzw. zu entpinnen
  - Der Button soll anzeigen, ob der jeweilige Task gerade gepinnt ist oder nicht
  - Wenn auf den Button geklickt wird, musst du die Search Parameter entsprechend anpassen
    - Achtung! Bestehende Search Parameter (z.B. `orderBy` dürfen dabei nicht verlorengehen!)
4. Baue eine Komponente, die einen "angepinnten" Task darstellt
    - Die Komponente soll die jeweilige Task-Id als Property bekommen
    - Die Komponente soll die Task-Daten laden
        - Beachte, dass wir Task-Daten per Id ja schon laden, evtl. kannst du Code wiederverwenden?
        - Verwendest Du `useSuspenseQuery` oder  `useQuery`
        - Verzögere den Query um zusehen, was passiert, wenn das Laden lange dauert
    - Es reicht wenn die Komponenten den Task-Titel und die Task Votes anzeigt
        - Die Votes sollen anklick- und hochzählbar sein
5. Füge die neue Komponeten in der `route`-Komponente für `/tasks` hinzu, so dass sie sichtbar ist für die Task-Liste und Einzeldarstellung

## Doku

* Search Params: https://tanstack.com/router/latest/docs/framework/react/guide/search-params
* useNavigate: https://tanstack.com/router/latest/docs/framework/react/api/router/useNavigateHook#usenavigate-hook