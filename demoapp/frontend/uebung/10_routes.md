# Übung: Routen mit dem TanStack Router

## Vorbereitung

* Denk dran, das Frontend und ggf. Storybook zu starten (s. `00_vorbereitung.md`)

## Schritte

- Lege drei Routen an: für eine Root-Seite (`/`), für eine "Privacy" und "About"-Page an (`/privacy` und `/about`)
  - Auf den Seiten kannst du irgeneinen Blindtext anzeigen
  - Die Root-Seite ( `/`) werden wir später noch erweitern. Es reicht, wenn du den vom Generator erzeugen Code unverändert lässt.
  - Du kannst die Routen als "Directory" oder "Flat" Routes anlegen
- Wenn Du die Routen im Browser öffnest (http://localhost:3000/privacy bzw. http://localhost:3000/about) sind sie leider nicht zu sehen 😢
  - Passe die `__root`-Route an, so dass der Inhalt der beiden Routen überhaupt dargestellt wird, wenn sie im Browser geöffnet sind
- Füge in der `__root`-Komponente die `GlobalNavbar`-Komponente hinzu
- Füge in der `GlobalNavbar`-Komponente zwei `Link`s zur `/privacy` und `/about`-Route hinzu
  - Nun sollten deine Routen auch per Link addressierbar sein 
  - Kannst du die Links so stylen, dass der jeweils aktive Link hervorgehoben ist?
- Kannst du ein eigenes Layout für `/privacy` und `/about` vergeben?
  - Das Layout muss nicht schön sein, es soll nur erkennbar sein, z.B. andere Hintergrundfarbe, Rahmen, etc? 
  - Das Root-Layout soll trotzdem aktiv sein (z.B. die `GlobalNavbar`)
  - Das Layout für die beiden Routen soll _nicht_ für andere Routen gelten (z.B. *nicht* für die Root-Route (`/`))
## Doku

* Directory Routes: https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing#directory-routes
* Flat Routes: https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing#flat-routes
* Navigation: https://tanstack.com/router/latest/docs/framework/react/guide/navigation
* Link Komponente: https://tanstack.com/router/latest/docs/framework/react/api/router/linkComponent#link-component
* 