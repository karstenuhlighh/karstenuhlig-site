export interface DataAiCapability {
  number: string;
  title: string;
  description: string;
  hover: string;
  signature: string;
  intro: string;
  managementQuestions: string[];
  principles: string[];
  evidence: string[];
  trends: string[];
  image: string;
  alt: string;
  href?: string;
  ctaLabel?: string;
}

export const dataAiCapabilities: DataAiCapability[] = [
  {
    number: "01",
    title: "Measurement & Signals",
    description: "Belastbare Signale schaffen, die digitales Verhalten mit Customer- und Business-Outcomes verbinden.",
    hover: "Welche Signale tragen Entscheidungen? Tracking, Signalqualität und Business Outcomes.",
    signature: "Measurement is decision infrastructure.",
    intro: "Belastbare Entscheidungen beginnen mit den richtigen Signalen in der nötigen Qualität, Granularität und Geschwindigkeit.",
    managementQuestions: [
      "Welche Signale braucht die Entscheidung?",
      "Wie stabil und manipulationssicher sind sie?",
      "Wie verbinden wir digitales Verhalten mit Geschäftsergebnissen?",
    ],
    principles: [
      "Stable signal before theoretical perfection.",
      "A metric needs behavioral context.",
      "Signal quality matters as much as availability.",
    ],
    evidence: ["Serverlogs & Conversion", "Primavera", "Attribution & Fraud", "Signal Steering"],
    trends: ["First-party Signals", "server-side Measurement", "Incrementality", "MMM", "Data Observability"],
    image: "/images/data-ai-decisioning/01-measurement-signals.png",
    alt: "Digitale Signale laufen in einem hervorgehobenen Messpunkt zusammen",
    href: "/agentic-ai/signal-steering",
    ctaLabel: "Signal Steering ansehen",
  },
  {
    number: "02",
    title: "Customer Data & Identity",
    description: "Fragmentierte Touchpoints in einen belastbaren, consent-basierten Customer State überführen.",
    hover: "Was wissen wir über den Kunden wirklich? Identity verbindet Verhalten, Transaktionen und Touchpoints.",
    signature: "From fragmented touchpoints to usable customer state.",
    intro: "Customer Steering beginnt mit dem Kunden- oder Visitor-Zustand, den ein Unternehmen tatsächlich kennt — und den Grenzen dieser Identität.",
    managementQuestions: [
      "Wann ist ein Visitor anonym, pseudonym oder bekannt?",
      "Welche Touchpoints lassen sich belastbar verbinden?",
      "Wo begrenzen Consent und Identity Coverage die Entscheidung?",
    ],
    principles: [
      "Customer before channel.",
      "Identity is a coverage problem, not a binary truth.",
      "Unknown is a legitimate customer state.",
    ],
    evidence: ["Session → GP-ID", "Integrated Customer Data", "Online Engagement → Print", "Retargeting Suppression"],
    trends: ["Identity Resolution", "consent-aware Customer State", "event-driven Profiles", "CDP architectures"],
    image: "/images/data-ai-decisioning/02-customer-data-identity.png",
    alt: "Kundenprofil ist mit mehreren digitalen Touchpoints verbunden",
  },
  {
    number: "03",
    title: "Analytics & Experimentation",
    description: "Beobachtung, Attribution und Kausalität trennen und Wirkung durch Experimente belastbar machen.",
    hover: "Was beobachten wir — und was wirkt? Analytics, Experimente und Causal Learning schaffen Klarheit.",
    signature: "Separate observation, attribution and causality.",
    intro: "Analytics erzeugt Hypothesen. Für wichtige Entscheidungen muss zusätzlich geklärt werden, ob eine Intervention die beobachtete Wirkung verursacht hat.",
    managementQuestions: [
      "Was ist Beobachtung, was Hypothese?",
      "Was ist attribuiert und was inkrementell?",
      "Wann braucht es ein Experiment?",
    ],
    principles: [
      "Observation generates hypotheses; intervention tests decisions.",
      "Attribution allocates credit; incrementality tests effect.",
      "Uncertainty should be visible, not hidden.",
    ],
    evidence: ["Attribution", "Retargeting-Bremse", "Search & Browse", "Signal Steering"],
    trends: ["Incrementality", "Geo Experiments", "MMM", "Uplift", "Causal ML", "AI-assisted Analytics"],
    image: "/images/data-ai-decisioning/03-analytics-experimentation.png",
    alt: "Ein Ausgangspunkt teilt sich in zwei messbare Testpfade",
    href: "/agentic-ai/signal-steering",
    ctaLabel: "Signal Steering ansehen",
  },
  {
    number: "04",
    title: "Data Science & Predictive AI",
    description: "Wahrscheinlichkeiten, Rankings und Empfehlungen modellieren und mit realen Entscheidungen verbinden.",
    hover: "Wo schlägt ein Modell die feste Regel? Scoring, Prediction, Ranking und Forecasting.",
    signature: "The value of a model is realized in the decision it changes.",
    intro: "Data Science schafft Wert, wenn Wahrscheinlichkeiten, Rankings oder Empfehlungen reale Geschäfts- und Kundenentscheidungen verbessern.",
    managementQuestions: [
      "Wo ist ein Modell besser als eine Regel?",
      "Welche Zielvariable ist wirtschaftlich relevant?",
      "Wie wird das Modell produktiv betrieben und überwacht?",
    ],
    principles: [
      "Prediction is not causality.",
      "Business value beats theoretical model perfection.",
      "Production ownership starts before go-live.",
    ],
    evidence: ["Propensity & Scoring", "Recommendation & Personalisation", "Search & Browse Ranking", "Fraud Detection"],
    trends: ["Modern ML", "Uplift", "Causal ML", "Model Monitoring", "MLflow", "Serving", "multimodale Modelle"],
    image: "/images/data-ai-decisioning/04-data-science-predictive-ai.png",
    alt: "Mehrere Datensignale werden zu drei gewichteten Prognosen verarbeitet",
  },
  {
    number: "05",
    title: "Decisioning & Personalisation",
    description: "Customer State, Regeln und Modelle in relevante kanalübergreifende Actions übersetzen.",
    hover: "Welche Action ist jetzt sinnvoll? Customer State, Rules und Modelle steuern die Experience.",
    signature: "Turn intelligence into the next customer action.",
    intro: "Der größte Wert von Data & AI entsteht dort, wo Customer State, Business Rules und Modelle eine konkrete Action verändern.",
    managementQuestions: [
      "Welche Action ist jetzt die beste?",
      "Wann reicht eine Rule, wann braucht es ein Modell?",
      "Wie verhindern wir lokale Kanaloptimierung?",
    ],
    principles: [
      "The customer is the unit of decision; the channel is the unit of execution.",
      "Suppression is as important as activation.",
      "Optimize incremental customer value, not attributed channel performance.",
    ],
    evidence: ["CIM", "Retargeting-Bremse", "PerSe", "Recommendation & Ranking"],
    trends: ["Next Best Action", "Realtime Customer State", "Journey Orchestration", "hybrid Rule/ML/AI Decisioning"],
    image: "/images/data-ai-decisioning/05-decisioning-personalisation.png",
    alt: "Eine Kundenentscheidung wird auf vier mögliche Touchpoints verteilt",
  },
  {
    number: "06",
    title: "Data Platforms & Products",
    description: "Wiederverwendbare Data- und AI-Capabilities skalierbar und wirtschaftlich verfügbar machen.",
    hover: "Wie werden Data & AI skalierbar? Plattformen, APIs, Realtime Services und Data Products.",
    signature: "Build the capabilities once. Reuse them at scale.",
    intro: "Data Platforms werden strategisch, wenn sie neue Analytics-, AI- und Customer-Use-Cases schneller und zuverlässiger produktiv machen.",
    managementQuestions: [
      "Welche Fähigkeiten müssen zentral verfügbar sein?",
      "Welche Workloads brauchen Realtime?",
      "Wie messen wir Plattformwert und Total Delivery Economics?",
    ],
    principles: [
      "Platform value is measured by the capabilities it enables.",
      "Optimize total delivery economics, not infrastructure cost.",
      "Use the latency the decision requires.",
    ],
    evidence: ["Primavera", "Teradata Marketing Platform", "Realtime Services & APIs", "BigQuery/GCP"],
    trends: ["AI-ready Data Platforms", "Data Products", "Data Contracts", "vector/embedding infrastructure", "governed APIs"],
    image: "/images/data-ai-decisioning/06-data-platforms-products.png",
    alt: "Zentrale Datenplattform verbindet wiederverwendbare Services und Produkte",
  },
  {
    number: "07",
    title: "Data Operating Model",
    description: "Ownership, Standards, Self-Service und Spezialistenkompetenz so organisieren, dass Data & AI skaliert.",
    hover: "Wie skaliert Data & AI organisatorisch? Über Ownership, zentrale Verlässlichkeit und Self-Service.",
    signature: "Centralize reliability. Decentralize usage and decisions.",
    intro: "Data & AI skaliert durch Ownership, Rollen, Qualität, Self-Service und die richtige Balance zwischen zentralen Standards und fachlicher Autonomie.",
    managementQuestions: [
      "Welche Verantwortung gehört zentral, welche in die Domäne?",
      "Wer besitzt Datenqualität und Semantik?",
      "Wie wird aus Projekten eine dauerhafte Capability?",
    ],
    principles: [
      "Centralize reliability, decentralize usage and decisions.",
      "Democratize access, not definitions.",
      "Scale capability, not hero experts.",
    ],
    evidence: ["BICC / Rollenmodelle", "Tableau / Data Democracy", "BI Data Manager / DQ", "PPM"],
    trends: ["Data Product Ownership", "Data Contracts", "federated Governance", "Observability", "AI Governance", "Enabling Teams"],
    image: "/images/data-ai-decisioning/07-data-operating-model.png",
    alt: "Data Operating Model verbindet zentrale Standards mit dezentralen Teams",
  },
  {
    number: "08",
    title: "GenAI & Agentic Systems",
    description: "LLMs und Agents dort einsetzen, wo Reasoning und Orchestration nachweisbaren Zusatznutzen erzeugen.",
    hover: "Wann lohnt sich ein LLM oder Agent? Entscheidend sind Evals, Guardrails und kontrollierte Autonomie.",
    signature: "Autonomy should increase with evidence, not ambition.",
    intro: "LLMs und Agents ermöglichen Reasoning und Orchestration. Entscheidend ist ihr nachweisbarer Mehrwert gegenüber einfacheren Mechanismen.",
    managementQuestions: [
      "Brauchen wir hier überhaupt ein LLM?",
      "Welche Tools und Berechtigungen braucht der Agent?",
      "Wie messen wir Eigenbeitrag und sinnvolle Human Approval?",
    ],
    principles: [
      "Rules where certainty matters; agents where reasoning and orchestration matter.",
      "AI autonomy must earn its right to exist.",
      "Evals are part of the architecture.",
      "Tool access defines real autonomy.",
    ],
    evidence: ["Augur / sem-agentic", "ADR-015", "KA-OS", "AI-assisted Building"],
    trends: ["RAG", "Agent Evals", "Tool Permissions", "Observability", "Prompt-Injection Defense", "Progressive Autonomy"],
    image: "/images/data-ai-decisioning/08-genai-agentic-systems.png",
    alt: "AI-gestützter Ablauf verbindet Kontext, Orchestrierung, Action und Lernschleife",
    href: "/agentic-ai/sem-agentic",
    ctaLabel: "Augur / sem-agentic ansehen",
  },
];
