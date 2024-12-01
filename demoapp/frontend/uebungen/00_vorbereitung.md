# Vorbereitung: Installation und Starten

* Es gibt zwei Verzeichnisse, die für uns relevant sind:
  * `backend`: Ein einfaches Node.js-Backend, das eine API zur Verfügung stellt
  * `frontend`: Unser React-Frontend, dem leider noch (fast) sämtliche Funktionalität fehlt...

## Installation

> **pnpm Package Manager**
> 
> Ich verwende gerne den [pnpm Package Manager](https://pnpm.io/installation).
> 
> Wenn du den während des Workshops (oder generell) verwenden möchtest, kannst du den aktivieren,
> in dem Du `corepack` verwendest (`corepack` ist Bestandteil von Nde.js). Dazu auf der Kommandozeile ausführen:
> ```bash
> corepack enable pnpm
> ```
> Die CLI ist nahezu identisch mit npm:
> - `pnpm install`: installiert die Package aus der `package.json`
> - `pnpm XXX`: führt ein in der `package.json`-definiertes Script aus (im Gegensatz zu `npm` ist kein `run` extra erforderlich)
> - `pnpm add`: fügt neue Packages zum Projekt hinzu

Bitte führe `npm install` oder `pnpm install` in den beiden Verzeichnissen aus:

```bash

cd backend
pnpm install

```

```bash

cd frontend
pnpm install

```

## Starten

* Du kannst alle Prozesse direkt aus dem `frontend`-Verzeichnis starten:

```bash

cd frontend

pnpm backend

# Neues Terminal für den Frontend-Prozess:
pnpm dev

```

## Storybook

Der Workspace enthält einige fertige Komponenten, die du zum Arbeiten während der Übungen verwenden _kannst_.

Die Komponenten findest um im lokalen Storybook, das du separat starten kannst:

```bash

cd frontend

pnpm storybook
```

Storybook läuft dann auf http://localhost:6006.





