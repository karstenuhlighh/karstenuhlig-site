# karstenuhlig.de — Project Memory

**Was das ist:** Karstens persönliche Präsenz-Website, ein **Pull-Asset** im Senior-Executive-Format (kein Verkaufs-Setup, kein Berater-Pitch). Commercial Management / Digital Commerce ist der Kern; Track Record und konkrete Anwendungen belegen ihn.

> **Autorität:** Für öffentliche Positionierung, Hierarchie, Story und Wortlaut gilt der aktuelle gerenderte Website-Stand. Harte Fakten werden aus **KA-OS** (`C:\AI\KA-OS`) und Evidence plausibilisiert. Ältere Konzepte/Logs überschreiben den aktuellen Stand nicht; Abweichungen benennen, nicht still harmonisieren.

## Öffentlicher Rahmen

- Eyebrow: **Commercial / Digital Commerce Executive**. H1: **Digital Commerce skalieren. Strategie wirksam machen.**
- Commercial Management / Digital Commerce dominiert. **Leadership & Transformation** und **Data, AI & Digital Product** (im Fließtext auch **Digital Products**) sind Enabler. Agentic AI ist Entwicklungs-/Anwendungsbereich, keine tragende Säule.
- Keine öffentliche 4-Pillars-/3-gleichrangige-Felder-Logik oder Was/Wie/Womit-Architektur. `Repertoire`, `Managementansatz`, `Positionierung` nicht als öffentliche Navigations-/Architekturbegriffe verwenden.
- Letzte Rolle extern: **VP E-Commerce & Digital Product**. Track Record = fachliche Phasen ab 2000; LinkedIn darf bewusst erst 2004 beginnen.
- Verbindliche Fakten (Karsten, 31.08.2026): **ca. 800 → 8.000 Styles**, **€1,6 Mrd.**; **Kundenwert und Retention als Steuergrößen verankert**, kein gemessener Retention-/CLV-Uplift. Abweichende Website-Zahlen sind keine neue Faktenautorität.
- KA-OS-Referenzen: `context/positioning-pillars.md` und `strategy/website-concept.md` (nur aktueller Stand); `references/voice.md` und `references/schreibregeln.md` (Tonalität).

**Anti-Patterns (aus dem Konzept, hart):** kein "Hire me"/Services/Stundensätze · kein CV-in-HTML · kein Buzzword-Manifest · sem-agentic = Architektur-**Beweis**, kein Produkt-Pitch. Senior-Executive-Format: Substanz vor Reichweite.

## Stack

- **Astro 6** (`type: module`), **Tailwind 4** (via `@tailwindcss/vite`), Inter-Font (`@fontsource/inter`), `@astrojs/sitemap`, `pdfjs-dist` (PDF-Anzeige). Node **>=22.12**.
- Scripts: `npm run dev` · `build` · `preview`.

## Struktur

- **Vor Änderungen Render und tatsächliche Imports prüfen.** Vorhandene Dateinamen allein sind keine aktive Komponenten- oder Navigationsvorgabe.
- `src/pages/index.astro` nutzt `Layout` + `Hero` mit `Commercial`, `MarketOffers` (sichtbar: Executive-Spannungsfelder), `TrackRecord`, `NowSection` (Thesen und Praxistests). `Commercial` nutzt `CommercialMotifGrid` + `CommercialManagementLoop`; keine Pillars-/Stats-Vorgabe.
- Mehrseitige Website: u. a. `ueber-mich`, `track-record` mit Deep Dive, `commercial-growth/[slug]`, Legal sowie bestehende Themen-/Notizseiten. Technische Altpfade sind keine öffentliche Hierarchie.
- `src/content/` enthält **befüllte** Collections `agentic-ai`, `e-commerce-marketing`, `martech` (Schema: `src/content.config.ts`). Seiteninhalte liegen auch direkt in Astro-Komponenten; Collection-Namen definieren keine Positionierungssäulen.
- Layouts: `src/layouts/`. Styles: `src/styles/global.css` und tatsächlich verwendete Komponenten, nicht alte Farb-/Layoutbeschreibungen.

## Wo Entscheidungen leben

- **Bau-/Design-Entscheidungen** → `docs/decisions.md` (in diesem Repo). Append-only, mit Warum.
- **Strategisches Konzept** → bleibt in KA-OS `strategy/website-concept.md`.

## Arbeitsweise (Karstens Prinzipien)

- **Stage-1/2-Build** — bei größeren Änderungen erst Skizze + OK, dann bauen.
- **Voice nie faken** — externe Texte (alles, was auf der Live-Site landet) erst als Entwurf zeigen.
- Content gegen den aktuellen öffentlichen Rahmen und KA-OS-Evidence/Voice prüfen. Historische Planungen nicht als offene Bauaufträge behandeln; nur freigegebenen Scope ändern.
