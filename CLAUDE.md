# karstenuhlig.de — Project Memory

**Was das ist:** Karstens persönliche Präsenz-Website — ein **Pull-Asset** im Senior-Executive-Format (kein Verkaufs-Setup, kein Berater-Pitch). Zeigt Track-Record + aktuelle Agentic-AI-Bauerfahrung als Anker für Recruiter, Hiring-Manager und Netzwerk.

> **Grenzregel:** Dieses Repo = **was gebaut wird** (Code). Wer Karsten ist, wie er klingt, was die Botschaft ist = **AIS-OS** (Schwester-Repo, `c:\AI\AIS-OS`). Marke nicht hier duplizieren — aus AIS-OS ziehen.

## Marke & Inhalt (Quelle: AIS-OS, nicht hier)

- `context/positioning-pillars.md` — die 4 Pillars + Dachthese (= `Pillars.astro` rendert genau die)
- `references/voice.md`, `linkedin-comment-style.md` — Tonalität für alle Texte
- `strategy/website-concept.md` — Konzept, Zielfunktion, **Anti-Patterns**

**Anti-Patterns (aus dem Konzept, hart):** kein "Hire me"/Services/Stundensätze · kein CV-in-HTML · kein Buzzword-Manifest · sem-agentic = Architektur-**Beweis**, kein Produkt-Pitch. Senior-Executive-Format: Substanz vor Reichweite.

## Stack

- **Astro 6** (`type: module`), **Tailwind 4** (via `@tailwindcss/vite`), Inter-Font (`@fontsource/inter`), `@astrojs/sitemap`, `pdfjs-dist` (PDF-Anzeige). Node **>=22.12**.
- Scripts: `npm run dev` · `build` · `preview`.

## Struktur

- `src/pages/` — `index.astro` (One-Pager), `ueber-mich.astro`, Legal (`impressum`, `datenschutz`); Schwerpunkt-Sektionen `agentic-ai/` (inkl. `sem-agentic.astro`-Subpage), `e-commerce-marketing/`, `martech/`.
- `src/components/` — `Hero`, `Nav`, `Footer`, `Pillars`, `Stats`, `TrackRecord`, `NowSection` ("Was mich gerade beschäftigt"), `NotesList`, `SemAgenticTeaser`, `AugurWorkflowSchaubild`, `PageHeader`.
- `src/layouts/` — `Layout.astro`, `SubPageLayout.astro`.
- `src/content/` — Content-Collections `agentic-ai` / `e-commerce-marketing` / `martech` (noch leer; `content.config.ts`). **Hier wandert Pillar-/Schwerpunkt-Content rein** — Quelle ist AIS-OS.
- `src/styles/global.css` — globale Styles. Farbpalette laut Konzept: Hellblau-Graublau (RGB 145,175,203) + Orange-Akzent (RGB 200,120,58) — *gegen `global.css` verifizieren*.

## Wo Entscheidungen leben

- **Bau-/Design-Entscheidungen** → `docs/decisions.md` (in diesem Repo). Append-only, mit Warum.
- **Strategisches Konzept** → bleibt in AIS-OS `strategy/website-concept.md`.

## Arbeitsweise (Karstens Prinzipien)

- **Stage-1/2-Build** — bei größeren Änderungen erst Skizze + OK, dann bauen.
- **Voice nie faken** — externe Texte (alles, was auf der Live-Site landet) erst als Entwurf zeigen.
- Content immer **on-brand**: gegen `positioning-pillars.md` + `voice.md` prüfen.
