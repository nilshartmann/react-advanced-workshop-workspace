# Übung: Typen mit Zod beschreiben und validieren

- Schreibe Zod-Beschreibungen für die TypeScript-Typen in `types.ts`
  - Die Zod-Typen kannst du zum Beispiel mit `Schema` am Ende bennenen (`XyzSchema`)
- Kommentiere die bestehenden TypeScript-Typen aus
- Lasse dir dann mit `z.infer` von Zod jeweils einen TypeScript-Typen erzeugen
  - Der TypeScript-Typ sollte genauso heissen, wie die jetzigen TypeScript-Typen in `types.ts`
  - Der TypeScript-Typ sollte per `export type` exportiert werden
- Die `TaskSummary`-Komponente, die den `Task`-Typen als Property erwartet sollte keinen Compile-Fehler haben
  - (wenn dein mit Zod gebauter `Task`-Typ dem Original `Task`-Typen entspricht)
- Überprüfe das Query-Ergebnis in der `/tasks`-Route mit Zod
  - Du kannst den generischen Typ-Parameter oder Type-Cast dann entfernen
  - Wenn dein `Task`-Typ korrekt beschrieben ist, funktioniert der Query weiterhin
    - Ansonsten gibt es einen Zod-Fehler, den du beheben musst...

## Doku

* **Zod**: https://zod.dev, insb:
  * Strings: https://zod.dev/?id=strings
  * Numbers: https://zod.dev/?id=numbers
  * Arrays: https://zod.dev/?id=array
  * Nullish (undefined oder null): https://zod.dev/?id=nullish
  * Type Inference mit `z.infer`: https://zod.dev/?id=type-inference
  * Zod Enums: https://zod.dev/?id=zod-enums
  * Parse: https://zod.dev/?id=parse
