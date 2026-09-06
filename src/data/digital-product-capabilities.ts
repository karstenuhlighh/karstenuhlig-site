export interface DigitalProductCapability {
  number: string;
  title: string;
  description: string;
  hover: string;
  signature: string;
  intro: string;
  managementQuestions: string[];
  principles: string[];
  tradeOffs: string[];
  evidence: string[];
  boundary: string;
  image: string;
  alt: string;
}

export const digitalProductCapabilities: DigitalProductCapability[] = [
  {
    number: "01",
    title: "Customer Problem & Digital Experience",
    description: "Kommerzielle Ziele und Kundenverhalten in wirksame Journeys und Product-Mechaniken übersetzen.",
    hover: "Welches Problem soll gelöst werden — und welche digitale Mechanik erzeugt die beste Gesamtwirkung?",
    signature: "Problem before feature.",
    intro: "Customer-, Commercial- und Systemperspektive werden in einer Product-Entscheidung verbunden. Der Lösungsvorschlag eines Stakeholders ist dabei ein wertvoller Input, aber noch nicht automatisch die richtige Lösung.",
    managementQuestions: [
      "Welches Kundenproblem steckt hinter der gewünschten Lösung?",
      "Welche Stelle der Journey muss verändert werden?",
      "Wie wirkt die lokale Optimierung auf das gesamte Kundensystem?",
    ],
    principles: [
      "Customer Value und Commercial Value gemeinsam optimieren.",
      "Die Journey messen, nicht den Kanal isoliert.",
      "Sichtbare Experience braucht oft unsichtbare Capabilities.",
    ],
    tradeOffs: ["Customer Relevance vs. Commercial Steering", "lokale Optimierung vs. End-to-End-Wirkung", "Touchpoint-Spezialisierung vs. konsistente Journey"],
    evidence: ["Top Deals: Filter, Kategorie & Search", "Search & Browse", "App & Multi-Touchpoint", "UX Research + Analytics"],
    boundary: "Commercial setzt die wirtschaftliche Richtung. Product übersetzt sie in Journey und Experience; Data, AI & Decisioning liefert dafür Signale und Modelle.",
    image: "/images/digital-product-cx/01-customer-problem-experience.png",
    alt: "Ein Kundenproblem wird über eine Product-Entscheidung in verbundene digitale Touchpoints übersetzt",
  },
  {
    number: "02",
    title: "Product Lifecycle & Evolution",
    description: "Produkte vom ersten sinnvollen Livegang über Lernen und Evolution bis zum bewussten Stop steuern.",
    hover: "Was ist der nächste sinnvolle Zustand des Produkts — launchen, lernen, weiterentwickeln oder stoppen?",
    signature: "Launch, learn, evolve, retire.",
    intro: "Der nächste Product-Zustand wird aus Unsicherheit, Nutzen, Risiko, Operating Readiness und fortdauernder Komplexität abgeleitet — nicht aus Sunk Cost oder einem pauschalen MVP-Dogma.",
    managementQuestions: [
      "Welche Unsicherheit soll ein MVP konkret reduzieren?",
      "Wann ist das Produkt bereit für reale Nutzung?",
      "Wann verdient es weitere Investition — und wann einen Stop?",
    ],
    principles: [
      "Live gehen, wenn Realität die offene Frage sinnvoll beantworten kann.",
      "Readiness ist mehr als technische Fertigstellung.",
      "Ein Produkt muss seine fortdauernde Komplexität verdienen.",
    ],
    tradeOffs: ["Early Learning vs. Operating Readiness", "Geschwindigkeit vs. Risiko", "Weiterentwicklung vs. Deaktivierung"],
    evidence: ["Recommendations 0.1", "NIC MVP / New Checkout IT", "Visuelle Suche", "Tablet-Variante"],
    boundary: "Economics & Evidence beantwortet, ob sich das Produkt lohnt. Lifecycle übersetzt diese Evidenz in die nächste konkrete Product-Entscheidung.",
    image: "/images/digital-product-cx/02-product-lifecycle-evolution.png",
    alt: "Ein Produktwürfel ist von einem Kreislauf aus Launch, Lernen, Weiterentwicklung und Stop umgeben",
  },
  {
    number: "03",
    title: "Product Operating Model & Ownership",
    description: "Dauerhafte Product Ownership durch klare Decision Rights, stabile Teams und gemeinsame Leitplanken ermöglichen.",
    hover: "Wie entsteht echte Product Ownership statt Projektsteuerung unter neuem Namen?",
    signature: "Ownership requires decision rights.",
    intro: "Product Decision Rights, Teamstrukturen, Zielsysteme und Interaktionsmodelle werden so gestaltet, dass Product und Engineering dauerhaft gemeinsam Verantwortung tragen können.",
    managementQuestions: [
      "Welche Entscheidungen gehören ins Product Team?",
      "Wo braucht es Portfolio- oder Unternehmensentscheidungen?",
      "Welche Plattform- und Enabling-Fähigkeiten braucht Teamautonomie?",
    ],
    principles: [
      "Backlog Ownership ist ein realer Test von Product Ownership.",
      "Autonomie braucht Alignment.",
      "Leadership arbeitet am System, nicht an einzelnen Backlogs.",
    ],
    tradeOffs: ["Autonomie vs. Enterprise Alignment", "stabile Teams vs. flexible Kapazität", "dezentrale Entscheidungen vs. zentrale Risikosteuerung"],
    evidence: ["Projekt → Produkt", "Backlog-Hoheit", "Product + Engineering", "Team Topologies als Referenzmodell"],
    boundary: "Leadership & Transformation umfasst Führung und Veränderung breiter. Dieses Feld fokussiert die Decision Rights und Strukturen dauerhafter Product-Verantwortung.",
    image: "/images/digital-product-cx/03-operating-model-ownership.png",
    alt: "Ein stabiles Product Team ist über klare Entscheidungswege mit Produkt und Plattform verbunden",
  },
  {
    number: "04",
    title: "Product Portfolio & Strategic Allocation",
    description: "Knappe Product-Kapazität über Customer Value, Business Value, Risiko und Zukunftsfähigkeit verteilen.",
    hover: "Was bekommt Kapazität — und was wird im Interesse des Gesamtsystems bewusst nicht priorisiert?",
    signature: "Strategic focus requires explicit non-priorities.",
    intro: "Ein Product-Portfolio ist mehr als eine Rangliste lokaler Business Cases. Es schützt strategischen Fokus und Flow und berücksichtigt zugleich kundenwirksame, regulatorische und systemisch notwendige Arbeit.",
    managementQuestions: [
      "Welche Themen sind strategisch wirklich relevant?",
      "Wann muss Plattform- oder Legacy-Arbeit vor sichtbaren Features kommen?",
      "Welche Themen werden bewusst gestoppt oder vertagt?",
    ],
    principles: [
      "Portfolio-Optimierung ist nicht die Summe der besten Einzel-Business-Cases.",
      "Scoring strukturiert Urteil, ersetzt es aber nicht.",
      "Zukünftige Lieferfähigkeit kann wichtiger sein als unmittelbarer Feature Value.",
    ],
    tradeOffs: ["kurzfristiger Umsatz vs. Lieferfähigkeit", "Features vs. Plattform- und Legacy-Arbeit", "Teamautonomie vs. systemweite Allocation"],
    evidence: ["MOAL → Objectives → Team-KRs", "Must Stops", "Plattformmodernisierung", "Compliance & Legacy Removal"],
    boundary: "Commercial setzt die wirtschaftliche Richtung. Product Portfolio übersetzt sie gemeinsam mit Risiko, Systemzustand und Lieferfähigkeit in Kapazitätsentscheidungen.",
    image: "/images/digital-product-cx/04-portfolio-allocation.png",
    alt: "Mehrere Product-Initiativen werden über eine zentrale Portfolio-Entscheidung auf priorisierte Wirkungsfelder verteilt",
  },
  {
    number: "05",
    title: "Multi-Market Product Scaling",
    description: "Einen gemeinsamen Product Core skalieren und lokale Varianz dort zulassen, wo sie realen Mehrwert schafft.",
    hover: "Was lässt sich multiplizieren — und wo rechtfertigt lokaler Kunden-, Commercial- oder Regulierungswert zusätzliche Komplexität?",
    signature: "Multiplikation, wo möglich. Differenzierung, wo nötig.",
    intro: "Multi-Market Scaling verbindet Common Core und bewusste lokale Varianz. Internationalisierung wird dabei häufig als System-Readiness-Frage verstanden, nicht nur als Übersetzung oder Länderkonfiguration.",
    managementQuestions: [
      "Was kann als gemeinsamer Core multipliziert werden?",
      "Welche lokalen Unterschiede verändern die Journey tatsächlich?",
      "Welche Voraussetzungen müssen vor einem Rollout erfüllt sein?",
    ],
    principles: [
      "Lokale Differenzierung muss ihre Komplexität verdienen.",
      "Standardisierung schützt vor unnötiger Fragmentierung.",
      "Market Rollout ist oft ein System-Readiness-Problem.",
    ],
    tradeOffs: ["Common Core vs. Local Variation", "lokaler Mehrwert vs. Complexity Cost", "Rollout-Geschwindigkeit vs. System Readiness"],
    evidence: ["Brasilien Checkout & Payment", "Frankreich MyAccount & Payment", "Campaign Briefing", "Backend is Master"],
    boundary: "Portfolio entscheidet, welche Märkte Kapazität bekommen. Multi-Market Scaling gestaltet Produkt und Betriebsmodell so, dass der Rollout wirksam und beherrschbar wird.",
    image: "/images/digital-product-cx/05-multi-market-scaling.png",
    alt: "Ein gemeinsamer digitaler Product Core verbindet mehrere Märkte mit einer bewusst abweichenden lokalen Route",
  },
  {
    number: "06",
    title: "Product Economics & Evidence",
    description: "Product-Investitionen mit Evidenz beurteilen, ohne Scheingenauigkeit oder Complexity Cost auszublenden.",
    hover: "Erzeugt das Produkt genug Kunden- und Business Value, um weitere Kapazität, Kosten und Komplexität zu rechtfertigen?",
    signature: "Evidence over pseudo-precision.",
    intro: "Evidenz wird genutzt, um wirtschaftliche Product-Entscheidungen unter Unsicherheit zu treffen. Gemessen wird möglichst nah am veränderten Mechanismus, ohne die Gesamtwirkung aus dem Blick zu verlieren.",
    managementQuestions: [
      "Welche Wirkung ist für dieses Produkt tatsächlich relevant?",
      "Wann reicht Beobachtung — und wann braucht es ein Experiment?",
      "Wie bewerten wir laufende Kosten und Complexity Cost?",
    ],
    principles: [
      "Beobachtete Performance ist nicht automatisch kausaler Product Impact.",
      "Commercial Steering ist testbar, nicht selbstvalidierend.",
      "Nicht das Signal wegoptimieren, das die nächste Entscheidung braucht.",
    ],
    tradeOffs: ["Micro-Conversion vs. Gesamtwirkung", "Präzision vs. reale Unsicherheit", "kurzfristiger Uplift vs. zukünftige Lernfähigkeit"],
    evidence: ["Micro-Conversions", "Search & Browse Tests", "Sale vs. Newness", "Economics der visuellen Suche"],
    boundary: "Data, AI & Decisioning schafft Messung, Signale und Modelle. Product Economics nutzt sie für Investmententscheidungen; Lifecycle zieht daraus die Konsequenz.",
    image: "/images/digital-product-cx/06-economics-evidence.png",
    alt: "Produkt und Daten werden durch eine Evidenz-Lupe bewertet und führen zu einer klaren Investitionsentscheidung",
  },
];
