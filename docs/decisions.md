
# karstenuhlig.de — Bau- & Design-Entscheidungen

**Stand:** Juni 2026
**Format:** Entscheidung · Warum · Stand
**Stand-Legende:** ✅ Erledigt · 🔧 In Arbeit · 📋 Offen · ❌ Verworfen · 🎯 Entschieden (noch nicht umgesetzt)

---

## 1. Strategie & Positionierung

| Entscheidung | Warum | Stand |
|---|---|---|
| Site ist **Beweis-Asset, kein Akquise-Asset** | Zeigt was Karsten baut/denkt — signalisiert NICHT "VP-Suche aktiv". Kein Berichtslinien-Filter öffentlich, kein "Open to opportunities", kein Kontaktformular | ✅ |
| **Drei Substanz-Säulen:** E-Commerce & Marketing · MarTech · Agentic AI | Löst das "zu technisch"-Problem strukturell. sem-agentic ist Inhalt UNTER Agentic AI, nicht eigene Top-Kategorie. Später erweiterbar auf 4. Säule "Transformation & Organisation" | ✅ |
| Eyebrow für Säulen-Block: **"Meine Schwerpunkte"** | Karstens eigene Wahl | ✅ |
| Erste Säule heißt **"E-Commerce & Marketing"** (nicht "Digital Marketing") | Spiegelt Hero-Subtitle "Commerce & Marketing Outcomes" und den echten Schwerpunkt | ✅ |
| Hero-Headline englisch: **"Closing the Implementation Gap"** | Eyebrow "Senior Digital Executive", Subtitle "Commerce & Marketing Outcomes through MarTech, Data & AI" | ✅ |
| Positionierung **Senior-Praktiker, nicht AI-Tech-Senior** | "Fachwissen ist Hygiene, Org-Handwerk ist Differenzierung". Marketing-/Business-Executive, der Tech als Hebel nutzt | ✅ |
| Technische Detailbegriffe (LangGraph, pgvector, DORA) nur auf Detailseiten | Hauptseite bleibt marketing-affin, nicht zu technisch | 🎯 |

---

## 2. Design & Visuelle Sprache

| Entscheidung | Warum | Stand |
|---|---|---|
| **BOSS-Ginza-inspiriert, Light-Mode** | Senior-Executive-Format, ruhig, präzise. Spiegel-Himmel-Blau das nach unten ins Weiße ausfadet | ✅ |
| Background-Gradient: `linear-gradient(180deg, #7A9DC0 0%, #94B2CF 18%, #B5CADD 38%, #D6E1ED 60%, #EEF2F7 80%, #FFFFFF 100%)`, `background-attachment: fixed` | Spiegel-Himmel-Effekt, kühl aber nicht eiskalt | ✅ |
| **Farbpalette:** Text #0F1729 · sekundär #3A4F6C · dritte Stufe #5B6B82 · Body #2A3D55 · Amber-Akzent #B45309 · Borders rgba(30,60,100,0.22) | Konsistente Tonalität, Amber nur als Lichtpunkt | ✅ |
| Navigation: **Logo "Karsten Uhlig" + "Über mich" links, "LinkedIn" rechts** | "Über mich" neben dem Namen, damit auf Mobile schnell erreichbar | ✅ |
| **Light-Mode beibehalten, Site-Hintergrund NICHT ändern** | Dark-Mode signalisiert Tech-Startup/Crypto/Gaming. Light-Mode = professional services, executive. Foto an die Site anpassen, nicht umgekehrt | 🎯 |
| Minimal-Formatierung, kein Drama, viel Whitespace | "Substanz über Style", keine Sucht-Signale, keine Verkaufs-CTAs | ✅ |

---

## 3. Tech-Stack & Deployment

| Entscheidung | Warum | Stand |
|---|---|---|
| **Astro + Tailwind CSS v4 + Vercel + Markdown Content Collections + GitHub** | Hybrid: Custom Tokens in global.css + Utility-Classes. Drei Collections: e-commerce-marketing, martech, agentic-ai | ✅ |
| **Inter-Font lokal über @fontsource** | DSGVO-konform, kein Google CDN | ✅ |
| Domain **karstenuhlig.de bei webgo**, DNS zeigt auf Vercel | kudigit.de bleibt bei IONOS als Reserve | ✅ |
| Projekt lokal unter `C:\AI\karstenuhlig-site` (Windows/PowerShell), Repo github.com/karstenuhlighh/karstenuhlig-site | `git push` = automatischer Vercel-Deploy (~30s). `npm run dev` → localhost:4321 | ✅ |
| Drei unabhängige Backups: GitHub + Vercel Deployments + lokales .git | Redundanz | ✅ |

---

## 4. Foto & Portrait

| Entscheidung | Warum | Stand |
|---|---|---|
| **Profi-Studio-Shoot (Inga Sommer)** statt Außenaufnahme | Studio-Qualität signalisiert Senior-Niveau. Kontrollierter Hintergrund, klare Pose, "investiert in eigene Professionalität" | ✅ |
| **Farbe statt S/W** | Marketing-Executive braucht Nahbarkeit (nicht distanziert-edel). Hauttöne harmonieren mit Amber, Augen verbinden sich mit Site-Blau. Passt zur Working-in-Public-Erzählung | 🎯 |
| **Foto mit verschränkten Armen** (Variante 5, retuschiert) | Pose-Aussage stärker als frontal. Selbstsicherheit ohne Arroganz, füllt Hero-Raum besser, Uhr als subtiler Anker | 🎯 |
| **Heller Hintergrund** statt dunkler | Tonale Integration in Light-Mode-Site (kein harter dunkler Block), bessere Schulterkonturen-Definition, moderner statt Mode-Magazin-dramatisch, Bart-Stelle weniger sichtbar | 🎯 |
| Omega-Uhr im Bild bleibt | Nicht inszeniert (natürliche Pose-Folge), nicht protzig (kein Trophy-Watch wie Rolex). Mechanische Uhr = Werte-Statement gegen reine Digital-Identität | ✅ |
| **Selbst-Retusche** an Bart + Haarlinie (Variante 5) | Entspricht Karstens aktuellem Aussehen (Haar-OP, gewachsener Bart). Konservativ kalibriert: lieber knapp unter Realität als drüber. Legitime Retusche, kein KI-Bild | ✅ |
| **KI-generierte Porträts verworfen** | AI-Slop-Risiko: zu glatte Haut, hyperreale Augen, gerenderter Look. Senior-Audience erkennt KI sofort → untergräbt "Substanz statt Hype" | ❌ |
| **Foto-Embedding: Option C** (gerundete Ecken 12px + dezenter Schatten, kein Fade) | Klassisch, klare Form, hebt Foto subtil aus Site. Fade kann später ergänzt werden | 🎯 |
| Layout-Tausch: **Portrait links, Text rechts** | Bild soll in den Content schauen, nicht aus dem Layout heraus | 🎯 |
| **Konsistenz über alle Kanäle:** gleiches Foto auf Site, LinkedIn, CV | Wiedererkennung schafft Vertrauen. Verschiedene Fotos wirken wie inkonsistente Identität | 🎯 |
| Anschnitt: **eng für LinkedIn** (Gesicht füllt Avatar), **weiter für CV** (Pose sichtbar), Original für Site-Hero | LinkedIn-Avatar wird sehr klein angezeigt; CV hat Platz für Pose | 📋 |
| Export-Settings: JPG Qualität 90–95, mind. 1600px Breite, 300–600 KB; TinyPNG bei Bedarf | Schärfe für Retina, kleine Dateigröße für Ladezeit | 📋 |

---

## 5. sem-agentic / Augur Schaubilder

| Entscheidung | Warum | Stand |
|---|---|---|
| **sem-agentic als prominenter Hook im Hero** (Weg A) | Tech-Hook bewusst akzeptiert. Eyebrow "Aktueller Pilot" mit pulsierendem Live-Punkt | 🎯 |
| Projekt-Markenname **"Augur"** (lat. Vorhersage), im Schaubild "sem-agentic" | Markenname für Detailseiten, generischer Begriff im Hook | ✅ |
| Teaser-Schaubild: **generischer Google-SEM-Workflow + AI-Hebel-Schicht** (Option A) | Bleibt marketing-affin, nicht zu technisch. Echte Augur-Pipeline bleibt für Detailseite | ✅ |
| **Alle Animationen entfernt** (Partikel, Float-Animation, Roboterkopf-Bewegung) | "Zu verspielt". Nur pulsierender "Aktueller Pilot"-Dot bleibt. Passt zur ruhigen Site-Tonalität | 🎯 |
| Action-Badges "Scale / Maintain / Investigate / Pause" bleiben | Echte Output-Labels aus Augur, machen es greifbar | ✅ |
| Kein Google-Logo, nur Wort "Google SEM" + neutrale Lupe | Markenrechtlich + Design-Bruch vermeiden | ✅ |
| **Augur-Architektur-Schaubild** für Detailseite: Multi-Agent mit Validierungs-Layern | 5 Agenten + Coordinator, pro Agent Tool/Pattern/Check. Belegt Engineering-Disziplin, kein Buzzword. Statisch, BOSS-Ginza-Stil | ✅ (Datei erstellt) |

---

## 6. Inhalte & Assets

| Entscheidung | Warum | Stand |
|---|---|---|
| Track Record als **Pattern-Stories statt Bullet-Wolke** | "Ich habe das erlebt" statt "ich war dabei". 2–3 konkrete Transformations-Stories stärker als 5 Bullets | 📋 |
| NowSection mit **konträrer Beobachtung** statt Selbstlob | Senior-Signal: Beobachtungen, die nur nach 20+ Jahren entstehen. Substanz schreibt Karsten selbst | 📋 |
| **VP-Pitch-Präsentation** (15 Slides, alle 7 Patterns, BOSS-Ginza-Stil) | Für aktive Bewerbungsprozesse (EON, Netto, BestSecret). AHA-Momente bei Senior-Stakeholdern | ✅ (Datei erstellt) |
| Reflexions-Substanz: **7 übergreifende Patterns** aus 13 Bau-Tagen | Verdichtet aus 60+ Einzel-Beobachtungen. Schicht-B-Substanz (Org-Handwerk). Quelle: eigene Reflexionen, NICHTS erfunden | ✅ |
| PDF-Einbindung: **native HTML-Sektion + Download**, nicht PDF-Embed | SEO (PDF/Bilder = kein Google-Content), Mobile-friendly, Stil-Konsistenz. Pattern-Cards nativ, Volltext als PDF-Download | 🎯 |
| Augur-Detailseite: drei Sektionen (**Architektur-Schaubild → 7 Patterns → PDF-Download**) | Logischer Drill-down von Hauptseiten-Teaser in die Tiefe | 🎯 |
| Konferenz-Foto: **Track Record Thumbnail** (Variante A) | Beleg für "eTail Germany Speaker", dezent. Klick → Lightbox. Kein zweites dominantes Bild auf Hauptseite | 🎯 |

---

## 7. Rechtliches & SEO

| Entscheidung | Warum | Stand |
|---|---|---|
| Impressum + Datenschutz (Karsten als Privatperson, Friedensallee 29) | Rechtlich erforderlich für DE | ✅ |
| **Kein Cookie-Banner** | Keine Cookies, kein Analytics, kein Tracking, kein Google Fonts CDN, kein Kontaktformular | ✅ |
| Vercel als Hosting-Dienstleister in Datenschutz referenziert (DPF + Standardvertragsklauseln) | Vercel-DPA nicht im UI aktivierbar auf Free Tier → in Erklärung referenziert | ✅ |
| E-Mail mail@karstenuhlig.de bei webgo als Weiterleitung | Spam-Schutz, Professionalität | 📋 |
| **SEO:** @astrojs/sitemap + robots.txt + Meta-Tags + Open Graph, `site: 'https://karstenuhlig.de'` | Ohne Sitemap ist Site für Google quasi unsichtbar | 🎯 |
| Google Search Console: Property + Verifizierung + Sitemap einreichen + Indexierung beantragen | Realistische Indexierungs-Zeit 1–3 Wochen | 📋 |
| **Mehrsprachigkeit NICHT bauen** | Browser-Übersetzung reicht für Übersichts-Site. Pipeline ist DACH. Doppel-Pflege lohnt nicht ohne konkreten internationalen Anlass | ❌ |

---

## 8. Verworfene Optionen (Lessons)

| Verworfen | Warum |
|---|---|
| **KI-generierte Porträts** | AI-Slop erkennbar (glatte Haut, hyperreale Augen). Reputations-Risiko für Senior-Positioning |
| **NotebookLM-Präsentation** auf der Site | Stilbruch (dark, dramatisch vs. ruhige Light-Mode-Site) + AI-Slop (NotebookLM-Wasserzeichen, AI-Concept-Art). Widerspruch zu "Substanz statt Hype" |
| **KI-generiertes Brand-Logo** | Gleicher Stilbruch + AI-Slop. Plus: Personal Brands auf VP-Level brauchen typischerweise kein Logo (nur Wortmarke "Karsten Uhlig") |
| **Dunkler Foto-Hintergrund** | Verstärkt Tonalitäts-Kontrast zur hellen Site statt ihn aufzulösen. Schulterkonturen verschwimmen, Bart-Stelle sichtbarer |
| **Sakko-Foto** (Variante 4) | "Konzern-Manager 2010" statt "Senior Digital Executive 2026". Austauschbar, differenziert nicht |
| **PDF-Embed / Bild-Carousel** für Präsentation | SEO null, Mobile holprig, Stilbruch. Native HTML-Sektionen sind langfristig besser |

---

## 9. Übergreifendes Know-how & Prinzipien

### AI-Slop-Erkennung
- **Tells:** zu glatte/porzellanartige Haut, hyperreale/zu scharfe Augen, gerenderte Haarsträhnen, künstlich gleichmäßige Texturen, perfekte Symmetrie, Beleuchtungs-Inkonsistenzen
- **Senior-Audience erkennt KI-Material innerhalb von Sekunden** → auf einer "Substanz statt Hype"-Site ein Selbstwiderspruch

### Retusche vs. KI-Bild
- **Retusche** = lokale Korrektur eines echten Fotos (99%+ intakt). Industrie-Standard, legitim. Auch mit KI-gestützten Tools, solange nur lokal korrigiert
- **KI-Bild** = Neugenerierung aus Mustern. Synthetisch, nie real existiert
- **Reality-Check vor Verwendung:** retuschiertes Foto einem ehrlichen Dritten zeigen ("Siehst Du mich so?"). Lieber knapp unter aktuellem Aussehen als drüber

### Stilbruch-Prinzip
- Jedes Asset (Foto, Schaubild, Präsentation, Logo) muss zur **BOSS-Ginza-Tonalität** passen
- Dark/dramatisch/AI-Concept-Art bricht mit Light-Mode/ruhig/präzise
- Bei Stilbruch: Asset an die Site anpassen ODER verwerfen — nicht die Site an das Asset

### Senior-Executive-Signale
- Konkrete Zahlen statt vager Behauptungen (€2 Mrd Peak, 20+ Märkte)
- Pattern-Stories statt Bullet-Wolken
- Disziplin des Weglassens (keine Tool-Listen, keine Zertifikate, keine "Thought Leader"-Selbstbezeichnung)
- Beobachtungen, die nur nach 20+ Jahren entstehen — Trade-offs, Reihenfolge-Erkenntnisse, Pattern-Erkennung
- Faustregel: *Wenn jemand mit 10 Jahren Erfahrung den Satz auch schreiben könnte, ist er nicht Senior genug*

### Substanz-Disziplin
- **Keine sem-agentic-Substanz erfinden** — Pattern, Beobachtungen, Org-Übertragungen kommen aus Karstens eigenen Reflexionen
- Marketing-Übersetzungen technischer Begriffe nur, wenn sie belegbar sind

### Urheberrecht (fremde Inhalte, z.B. Scott Brinker)
- **Verlinken** auf Originalquellen: uneingeschränkt OK
- **Kurzzitate** mit Quellenangabe (§51 UrhG): OK, wenn Beleg für eigene Aussage, sparsam, klar erkennbar
- **Bilder/Folien/Studien hochladen oder hosten:** NICHT OK (Urheberrechtsverletzung, auch bei frei verteiltem Material)

### Foto-Konsistenz über Kanäle
- Gleiches Foto auf Site, LinkedIn, CV = Wiedererkennung = Vertrauen
- Verschiedene Crops für verschiedene Kanäle (eng/weit), aber gleiches Quellfoto

---

## 10. Offene nächste Schritte (Priorität)

1. 📋 **Profi-Retusche** optional für Site-Hero-Größe (Variante 5 selbst-retuschiert reicht für LinkedIn/CV)
2. 📋 **Google Search Console** einrichten + Sitemap einreichen (nach SEO-Deploy)
3. 📋 **E-Mail-Weiterleitung** mail@karstenuhlig.de bei webgo
4. 📋 **Track Record** zu Pattern-Stories umschreiben (Karsten selbst)
5. 📋 **NowSection-Texte** schreiben (Karsten selbst, Marketing-Tonalität)
6. 📋 **Bereichs-Übersichtsseiten** füllen (quartalsweise, Karsten selbst)
7. 📋 **CV + LinkedIn** mit finalem Foto aktualisieren
8. 🎯 **Site aktiv verlinken** in Bewerbungen, LinkedIn-Updates, Search-Partner-Mails (Verwertungs-Modus)

---

*Erstellt als Referenz-Dokument aus dem Bau-Verlauf. Stand Juni 2026.*