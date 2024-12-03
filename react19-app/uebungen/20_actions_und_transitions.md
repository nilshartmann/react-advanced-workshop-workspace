# Übung: Transitions und optimistische Updates

## Vorbereitung

* Bitte stelle sicher, dass in `main.tsx` die `Transition`-Komponente gerendert wird:
* ```tsx
  import App from "./standalone/transition/TransitionApp.tsx";
  
  ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
  ```
  
## Schritte:

* Füge in `LikesWidget` eine Transition hinzu, die die Like-Zahl erhöht
  * Als Simulation des Servers kannst du dafür die Funktion `incrementLikeOnServer` verwenden
    * Diese gibt dir einen neue Like-Anzahl als Promise zurück (künstlich verlangsamt)
    * Gibt dem Benutzer ein Feedback aus, während die Transition läuft
    * Während die Transition läuft, sollte man nicht auf den Button klicken können!
* Wenn die Anzahl der Likes über 5 geht, gibt es einen Fehler...
  * Baue ein Error Boundary, um den Fehler auszugeben
  * Du kannst die `ErrorBoundary`-Komponente aus [react-error-boundary](https://www.npmjs.com/package/react-error-boundary) verwenden
* Da die `incrementLikeOnServer`-Funktion sehr langsam ist, setze ein "optimistisches" Ergebnis, während der "Server-Call" läuft 

## Doku

* Asynchrone Actions ins React 19: https://react.dev/blog/2024/04/25/react-19#actions
* useTransition: https://19.react.dev/reference/react/useTransition
* useOptimistic: https://19.react.dev/reference/react/useOptimistic
* Error Boundaries (generell): https://19.react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
  * react-error-boundary Package: https://www.npmjs.com/package/react-error-boundary
