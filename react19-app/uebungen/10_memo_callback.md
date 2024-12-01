# Übung: Renderzyklen optimieren

## Vorbereitung

* Installiere die Packages und starte das Frotnend
* ```bash
  pnpm install
  
  pnpm dev
  ```
* Das Frontend läuft auf Port 3000
* Bitte stelle sicher, dass in `main.tsx` die `CompilerApp`-Komponente gerendert wird:
* ```tsx
  import App from "./standalone/compiler/CompilerApp.tsx";
  
  ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
  ```
  
## Schritte:

* Verwende `useMemo`, `useCallback` und `memo`, um so viel wie möglich Renderzyklen zu erzeugen, wenn man auf `+` bzw. `-` klickt
  * Erlaubt ist **nicht**: State verschieben oder neue Komponenten bauen oder bestehende Komponenten entfernen
* Wenn eine Komponente gerendert wird, wird deren Render-Anzahl auf der Browser-Console ausgegeben
  * Ich hoffe, das funktioniert zuverlässig 🙏
* Außerdem kannst du in den React Developer Tools im Browser "Highlight updates when components render" auswählen
  * Achtung! Das gibt manchmal einen falschen Eindruck/falsches Ergebnis mit `memo`-Komponenten

## Doku

* https://19.react.dev/reference/react/useMemo
* https://19.react.dev/reference/react/useCallback
* https://19.react.dev/reference/react/memo
* React Dev Tools: https://19.react.dev/learn/react-developer-tools