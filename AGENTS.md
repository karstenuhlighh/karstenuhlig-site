# Agent-Anweisungen

Der Projekt-Kanon steht vollstaendig in `CLAUDE.md`. Bitte dort lesen.

Diese Datei existiert nur, weil manche Agents `AGENTS.md` statt `CLAUDE.md` lesen.
Sie wird bewusst nicht gepflegt: eine zweite Kopie laeuft auseinander, ein Verweis nicht.

## Local development workflow

For every website change:

1. Reuse an already running dev server if available.
2. Otherwise start the Astro dev server with `npm run dev`.
3. Keep the server running after the task unless there is a technical reason to stop it.
4. Open the affected page in the local browser preview.
5. Visually verify the requested change at desktop width.
6. For responsive or navigation changes, also verify a mobile viewport.
7. Run `npm run build` before finishing.
8. Do not report completion until both build and visual browser verification have passed.

Default local site:
`http://localhost:4321`

If the default port is already in use, prefer the existing dev server and do not start an unnecessary second server.
