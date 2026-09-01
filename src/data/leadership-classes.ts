// Single source of truth für die sieben Leadership-Problemklassen.
//
// Fachliche Quelle: KA-OS capabilities/leadership-transformation/. Modell,
// Principles und Handlungsrepertoire sind dort ausdrücklich personen- und
// organisationsneutral formuliert und extern nutzbar. Cases/Evidence sind
// dort PRIVATE (bonprix-interne Namen, Projekte, Zahlen) und wurden hier
// NICHT übernommen. Die Beispiele in "about" sind bewusst generische,
// nicht an einen realen Einzelfall gebundene Illustrationen des Modells,
// keine Wiedergabe eines echten Falls.

export interface LeadershipClass {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  managementQuestion: string;
  image: string;
  alt: string;
  tags: string[];
  about: string;
  focus: string[];
  tensions: string;
}

export const leadershipClasses: LeadershipClass[] = [
  {
    number: "01",
    title: "Autonomie & Delegation",
    shortTitle: "Autonomie & Delegation",
    description: "Autonomie als Führungsinstrument einsetzen, nicht als Rückzug.",
    managementQuestion:
      "Wie führe ich fachlich starke, bereits autonome Führungskräfte, ohne ihnen Mandat oder Kompetenz zu nehmen, aber ohne die Gesamtverantwortung für den Bereich zu verlieren?",
    image: "/images/leadership-transformation/01-autonomie-delegation.png",
    alt: "Zwei Personen mit einem Dokument, verbunden durch einen Kreislauf aus Übergabe und Rückgabe",
    tags: ["Delegation", "Vertrauen", "Entwicklung"],
    about:
      "Innerhalb des vereinbarten Mandats entscheidet die geführte Führungskraft selbst. Die Ebene darüber übernimmt, was auf dieser Ebene nicht sinnvoll entschieden werden kann: übergreifende Ziele, Ressourcenkonflikte zwischen Bereichen, gemeinsame Führungsstandards. Bei einer Abweichung wird die Führung temporär enger, Verantwortung geht zurück, sobald sich das Verhalten sichtbar und stabil geändert hat. In einem Fall forderte eine Führungskraft volle Autonomie in einem Grenzprojekt: Die tatsächliche Grenze lag im organisatorischen Mandat, nicht in der fachlichen Kompetenz.",
    focus: [
      "Mandat und Entscheidungsraum explizit benennen",
      "Gemeinsames Führungsverständnis als Rahmen setzen, unabhängig von der individuellen Arbeitsmethode",
      "Bei Abweichung: Feedback geben, temporär enger begleiten, Verantwortung zurückgeben",
      "Entwicklung entlang der Wirkung führen, nicht entlang der Hierarchiestufe",
    ],
    tensions:
      "Nicht jede Führungskraft will oder soll auf die nächste Ebene entwickelt werden, und wiederholte Korrektur ohne stabile Verhaltensänderung ist ein Signal für eine strukturelle statt eine punktuelle Konsequenz.",
  },
  {
    number: "02",
    title: "Performance & Entwicklung",
    shortTitle: "Performance & Entwicklung",
    description: "Erst die Ursache diagnostizieren, dann das Instrument wählen.",
    managementQuestion:
      "Wie gehe ich mit ausbleibender Wirkung, schwierigen Mitarbeitenden und Fehlern um, ohne reflexhaft mit mehr Druck oder Kontrolle zu reagieren oder Standards aufzuweichen?",
    image: "/images/leadership-transformation/02-performance-entwicklung.png",
    alt: "Person mit Diagramm-Symbolen für Diagnose und Entwicklung",
    tags: ["Diagnose", "Verbindlichkeit", "Fehlerkultur"],
    about:
      "Neun mögliche Ursachen werden geprüft, bevor ein Instrument gewählt wird, von fehlender Erfahrung über Rollenfit bis zu einem Verhaltensproblem, eng an Person, Rolle oder System lokalisiert statt als Gesamturteil über die Person. Fehlerfreiheit ist dabei kein Maßstab: Maßgeblich sind Sorgfalt vor der Entscheidung und Verantwortungsübernahme danach. Ein Team behandelte einen Erstfehler als Lernfehler und bewertete einen strukturgleichen Wiederholungsfehler eine Woche später deutlich kritischer.",
    focus: [
      "Wirkung oder Abweichung konkret machen, dann Person, Rolle und System trennen",
      "Ursache eng lokalisieren, bevor ein Instrument gewählt wird",
      "Verhalten über Zeit beobachten, dann Verantwortung zurückgeben oder Rolle und Struktur ändern",
      "Wiederholtes, unabhängiges Feedback zum selben Muster als eigenständiges Signal werten",
    ],
    tensions:
      "Eine Leistungsgrenze beschädigt Vertrauen nicht automatisch, fehlende Verantwortung für die eigene Leistungsgrenze tut es, und eine Verbesserung, die nur unter dauerhafter Kontrolle besteht, ist keine belastbare Entwicklung.",
  },
  {
    number: "03",
    title: "Richtung, Priorisierung & Umsetzung",
    shortTitle: "Richtung & Umsetzung",
    description: "Die Wahl des Vorgehens folgt der Diagnose, nicht einem Standardwerkzeug.",
    managementQuestion:
      "Wie wird aus einem für richtig gehaltenen Ziel tatsächliche Umsetzung, wenn andere Bereiche andere Prioritäten haben, skeptisch sind oder Ressourcen fehlen?",
    image: "/images/leadership-transformation/03-richtung-priorisierung-umsetzung.png",
    alt: "Kompass-Symbol für Richtung und Priorisierung",
    tags: ["Priorisierung", "Umsetzung", "Eskalation"],
    about:
      "Vor jedem Werkzeug steht die Diagnose, was die Umsetzung tatsächlich blockiert: fehlende gemeinsame Faktenbasis, fachliche Skepsis, ein akzeptiertes Ziel bei nicht tragbarem Aufwand oder ein echter Zuständigkeitskonflikt. Eskalation ist ein legitimes Grenzwerkzeug für einen auf der aktuellen Ebene nicht lösbaren Konflikt, nicht der Normalmodus der Zieldurchsetzung. In einem Fall entstand aus einem skeptischen Bereich über zwei Jahre gemeinsamer Modellentwicklung, inklusive Offenlegung ungünstiger eigener Zahlen, ein aktiver Mitgestalter.",
    focus: [
      "Gemeinsame Faktenbasis schaffen, auch gegen die eigene Position, wenn die Fakten so liegen",
      "Verantwortung nahe an die Sache bringen, statt über Hierarchie zu entscheiden",
      "Mehrfach-„Priorität 1“ zurückweisen und eine echte Reihenfolge herstellen",
      "Bei neuen Fakten die eigene Position ändern, nicht die Kriterien nachträglich anpassen",
    ],
    tensions:
      "Manche Zielkonflikte sind struktureller Natur, weil Zielsystem und Machtverteilung gegeneinander stehen, und lassen sich nicht durch bessere Argumentation auf Peer-Ebene lösen.",
  },
  {
    number: "04",
    title: "Konflikt & Entscheiden",
    shortTitle: "Konflikt & Entscheiden",
    description: "Verstehen vor Verhandeln, Consent statt Konsens.",
    managementQuestion:
      "Wie werden Sachkonflikte geklärt und Entscheidungen unter echtem Dissens getroffen, ohne dass Beziehungen dauerhaft beschädigt werden?",
    image: "/images/leadership-transformation/04-konflikt-entscheiden.png",
    alt: "Zwei Personen im Dialog mit einem Spannungssymbol, das sich in eine Übereinkunft löst",
    tags: ["Konflikt", "Entscheidung", "Vertrauen"],
    about:
      "Ziel, Interessen und der eigentliche Engpass werden geklärt, bevor über Lösungen gestritten wird, Problem und vorgeschlagene Lösung bleiben dabei getrennt. Eine Entscheidung wird vollständig mitgetragen, auch wenn man selbst weiterhin eine andere Lösung für besser hält, solange sie legitim getroffen wurde: Consent statt Konsens. Entscheidungshoheit und Risk Ownership sind zwei getrennte Fragen und werden explizit geklärt, nicht automatisch derselben Instanz zugeschrieben.",
    focus: [
      "Problem und vorgeschlagene Lösung entkoppeln",
      "Verständnis aktiv spiegeln, nicht nur innerlich herstellen",
      "Entscheidungshoheit und Risk Ownership getrennt benennen",
      "Bei beschädigtem Vertrauen stärker verifizieren statt automatisch abzulehnen",
    ],
    tensions:
      "Eine gesichtswahrende, saubere Konfliktführung zwischen Peers neutralisiert eine übergeordnete Machtkonstellation nicht zwingend, und argumentative Stärke bringt zusätzliche Verantwortung dafür mit, wie das Gegenüber aus dem Konflikt herauskommt.",
  },
  {
    number: "05",
    title: "Matrix & Stakeholder Leadership",
    shortTitle: "Matrix & Stakeholder",
    description: "Gemeinsame Realität herstellen, Ownership durch echte Beteiligung erzeugen.",
    managementQuestion:
      "Wie führe ich wirksam über Bereichsgrenzen hinweg, wenn Ziele, Ressourcen und Entscheidungshoheiten verteilt sind und keine direkte Weisungsbefugnis besteht?",
    image: "/images/leadership-transformation/05-matrix-stakeholder.png",
    alt: "Mehrere verbundene Personen-Symbole für Matrix- und Stakeholder-Führung",
    tags: ["Matrix", "Stakeholder", "Governance"],
    about:
      "Matrix-Führung beginnt mit einer gemeinsamen Realität: Ziele, Interessen, Zwänge und Abhängigkeiten verstehen und daraus ein gemeinsames Problem-Framing herstellen. Ownership entsteht eher durch echte Beteiligung und konkrete gemeinsame Arbeit als durch abstrakte Abstimmung, Governance schafft Klarheit über Rollen und Entscheidungen, ersetzt aber keine tragfähige Beziehung. Eine besondere Konstellation entsteht, wenn eine Rolle knappe, von mehreren Bereichen benötigte Ressourcen verteilen muss: Die dabei entstehende Wahrnehmung von Bevorzugung ist eine strukturelle Folge der Rolle, kein automatischer Beleg für tatsächliches Fehlverhalten.",
    focus: [
      "Perspektive des anderen Bereichs systematisch mitdenken",
      "Verantwortung nah an die Sache bringen statt hierarchisch zu entscheiden",
      "Integrator- statt Lobbyist-Rolle einnehmen",
      "Verteilungsentscheidungen bei struktureller Knappheit transparent machen",
    ],
    tensions:
      "Governance ersetzt keine funktionierende Beziehung, sie kompensiert ihr Fehlen nur teilweise, und eine transparente Verteilungslogik mildert die Wahrnehmungsasymmetrie bei knappen Ressourcen, löst sie aber nicht vollständig auf.",
  },
  {
    number: "06",
    title: "Transformation & Change",
    shortTitle: "Transformation & Change",
    description: "Bedingungen für Veränderung schaffen, nicht stärker überzeugen.",
    managementQuestion:
      "Wie werden andere Bereiche zu Veränderungen bewegt, von denen sie selbst zunächst nicht überzeugt sind?",
    image: "/images/leadership-transformation/06-transformation-change.png",
    alt: "Personen-Symbol mit verzweigten Wegen für Veränderung und Adoption",
    tags: ["Change", "Transformation", "Adoption"],
    about:
      "Andere Bereiche werden selten dadurch verändert, dass man sie stärker überzeugt. Wirksamer ist, Bedingungen zu schaffen, unter denen Veränderung relevant, erlebbar, glaubwürdig, gestaltbar und schließlich organisatorisch selbstverständlich wird: Relevanz schaffen, Veränderung erlebbar machen statt nur zu erklären, mit den Veränderungsbereitesten beginnen und daraus Pull erzeugen, Ownership entstehen lassen, strukturell verankern. In einem Fall entstand aus der Zusammenarbeit mit der veränderungsbereitesten Partnerin eines Bereichs Pull aus mehreren weiteren, ursprünglich distanzierten Bereichen.",
    focus: [
      "Relevanz über Markttrends, Frühindikatoren oder externe Beispiele herstellen",
      "Erlebbarkeit durch Prototypen und Demos am realen Problem schaffen, statt nur zu kommunizieren",
      "Mit dem veränderungsbereitesten Partner beginnen und Erfolg sichtbar machen",
      "Veränderung strukturell verankern, damit keine Parallelorganisation entsteht",
    ],
    tensions:
      "Bedingungen für Veränderungsbereitschaft lassen sich schaffen, Veränderungsenergie selbst lässt sich in einer Person nicht beliebig erzeugen, und ein schlecht aufgesetzter Pilot ist bei hohen, kaum reversiblen Kosten kein sinnvoller Lernschritt.",
  },
  {
    number: "07",
    title: "Leadership Style / persönliche Haltung",
    shortTitle: "Leadership Style",
    description: "Die Synthese aus den sechs Problemklassen: eine durchgängige Führungslogik.",
    managementQuestion:
      "Wie führe ich grundsätzlich, und welche persönliche Logik verbindet die sechs konkreten Führungsprobleme?",
    image: "/images/leadership-transformation/07-leadership-style.png",
    alt: "Kompass im Zentrum eines Kreises aus sechs Führungssymbolen",
    tags: ["Haltung", "Synthese", "Diagnose vor Intervention"],
    about:
      "Die Grundhaltung ist klar, besonnen und ergebnisorientiert, mit Vertrauen und Wertschätzung bei hoher Verbindlichkeit als übergreifender Klammer: viel Verantwortung abgeben, aber sehr klar sein, wenn die Wirkung nicht stimmt. Über alle sechs Problemklassen hinweg wiederholt sich dieselbe Logik: Richtung schaffen, Verantwortung geben, Wirkung beobachten, Ursache verstehen, passend intervenieren, lernen und Verantwortung möglichst weit zurückgeben. Diagnose vor Intervention ist dabei das Meta-Prinzip über allen sieben Problemklassen: Bevor ein Führungsinstrument gewählt wird, wird die tatsächliche Ursache lokalisiert, nicht der bevorzugte Stil angewendet.",
    focus: [
      "Vor jeder Verhaltenserwartung an andere die eigene Vorbildwirkung prüfen",
      "Bei jedem Führungsthema zuerst Richtung und Kriterien klären, dann Verantwortung geben",
      "Bei ausbleibender Wirkung zuerst die Ursache diagnostizieren, dann das Instrument wählen",
      "Verantwortung möglichst weit zurückgeben, sobald Wirkung und Verhalten stabil sind",
    ],
    tensions:
      "Viel Handlungsspielraum zu geben und gleichzeitig hohe Verbindlichkeit einzufordern ist ein produktives Spannungsfeld, kein einmalig lösbarer Widerspruch, und die eigene Erinnerung an frühere Führungssituationen ist kein neutraler Datensatz, weil emotional intensive Fälle stärker haften bleiben als die größere Zahl unauffälliger, gut funktionierender Situationen.",
  },
];
