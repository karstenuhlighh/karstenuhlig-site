// Single source of truth für die acht Commercial-Management-Felder, geteilt
// zwischen Startseite, Landingpage und Drawer.
//
// Fachliche Quelle: KA-OS capabilities/commercial-management/. Reihenfolge,
// Texte und Freigabestatus: KA-OS market-activation/website-commercial-fliesstexte.md.

export interface CommercialQuestion {
  position: number;
  title: string;
  satz: string;
  these: string;
  slug: string | null;
  body: string[] | null;
  field: {
    number: string;
    title: string;
    shortTitle: string;
    description: string;
    managementQuestion: string;
    image: string;
    alt: string;
    tags: string[];
    focus: string[];
    tensions: string;
  };
}

export const commercialQuestions: CommercialQuestion[] = [
  {
    position: 1,
    title: "Wachstum neu begründen, wenn die bestehenden Quellen ausgereizt sind",
    satz: "Der Motor der letzten Jahre trägt nicht mehr, und die Alternativen sind unbelegt.",
    these: "Optimierung des Heutigen und strukturelles Wachstum folgen unterschiedlichen Logiken.",
    slug: "wachstum-neu-begruenden",
    field: {
      number: "02",
      title: "Future Growth",
      shortTitle: "Future Growth",
      description: "Zukünftiges Wachstum strukturell aufbauen.",
      managementQuestion: "Woher soll unser zukünftiges Wachstum kommen?",
      image: "/images/commercial-management/02-future-growth.png",
      alt: "Aufwärts gerichteter Wachstumspfad mit steigenden Balken",
      tags: ["Growth Space", "Value Proposition", "Strategic Bets"],
      focus: [
        "Optimierung des bestehenden Geschäfts von strukturellem Wachstum trennen.",
        "Veränderungen auf ihre Bedeutung für Value Proposition und Economics prüfen.",
        "Eine bewusste Adoptionsposition zwischen Experiment, Abwarten und Skalierung wählen.",
        "Wenige Wachstumsfelder mit Capabilities und Investitionen tatsächlich tragen.",
      ],
      tensions: "Heutiges Geschäft ausschöpfen oder neue Wachstumslogik aufbauen; früh lernen oder bewusst warten; viele Optionen offenhalten oder wenige belastbare Bets finanzieren.",
    },
    body: [
      "Ein Geschäft kann solide laufen und trotzdem zu wenig zukünftiges Wachstum erzeugen. Bekannte Hebel stärker zu bedienen reicht dann nicht.",
      "Ich trenne dabei zwei Logiken. Die Optimierung des heutigen Geschäfts schöpft bestehende Mechaniken besser aus und wächst linear. Strukturelles Wachstum erweitert das Geschäft oder verändert die Value Proposition und wächst nicht linear. Wer beides vermischt, schreibt die Planung fort und nennt es Strategie.",
      "Für neue Felder gilt: Bedeutung vor Adoption. Ein Trend ist wertlos, bis er die zugrundeliegenden Economics verändert. Die erste Frage ist nicht, ob wir eine Technologie einsetzen können, sondern was sie für Kundenversprechen und Geschäftsmodell bedeutet. Adoption ist danach eine kalibrierte Entscheidung zwischen Experimentieren, bewusstem Abwarten und schnellem Skalieren, kein Reflex. Und ein Wachstumsfeld wird erst strategisch, wenn es Ressourcenentscheidungen verändert. Wenige belastbare Wetten schlagen eine lange, folgenlose Innovationsliste.",
      "Bei bonprix hat sich diese Spielregel einmal grundlegend verschoben: Der physische Katalog fasste rund 800 Styles, online waren rund 8.000 wirtschaftlich darstellbar. Nicht mehr Auswahl war der Punkt, sondern eine andere Grenzkostenlogik. Aus diesem Spielraum ist der internationale E-Commerce über 20+ Märkte auf €1,6 Mrd. Umsatz gewachsen, mit einem internationalen Anteil von 50 Prozent. Kein Copy-Paste-Rollout: Märkte wurden nach Potenzial, Marktreife und lokaler Wirksamkeit unterschiedlich bearbeitet.",
    ],
  },
  {
    position: 2,
    title: "Kundenbasis über Economics steuern, nicht über Volumen",
    satz: "Marginaler CAC gegen deckungsbeitragsbasierten CLV, Payback und Liquidität.",
    these: "Der Bedarf folgt aus dem Zielbestand, nicht aus dem Marketingbudget.",
    slug: "kundenbasis-ueber-economics",
    field: {
      number: "03",
      title: "Customer Base",
      shortTitle: "Customer Base",
      description: "Kundenbasis als wirtschaftlichen Bestand steuern.",
      managementQuestion: "Wie steuere ich Größe, Qualität und Wert meiner Kundenbasis?",
      image: "/images/commercial-management/03-customer-base.png",
      alt: "Kundenbasis mit Acquisition und Reactivation als Zufluss sowie Churn als Abfluss",
      tags: ["Acquisition", "Retention", "Customer Value"],
      focus: [
        "Die notwendige aktive Kundenbasis aus Zielbestand und Churn ableiten.",
        "Acquisition, Retention und Reactivation auf denselben Bestand ausrichten.",
        "Größe, Qualität und zukünftigen Wert gemeinsam betrachten.",
        "Kundenwert als Guardrail gegen kurzfristige Aktivierung einsetzen.",
        "Eine gemeinsame Kundenwahrheit über Funktionen hinweg schaffen.",
      ],
      tensions: "Volumen oder Kundenqualität; nächster Kauf oder zukünftiger Wert; isolierte Kanal-ROIs oder eine gemeinsame Bestandslogik.",
    },
    body: [
      "Umsatz ist ein Ergebnisstrom. Die aktive Kundenbasis ist der Bestand, aus dem das Geschäft von morgen lebt. Wachstum kann kurzfristig gut aussehen, während Retention, Reaktivierung oder Kundenqualität unsichtbar schwächer werden.",
      "Deshalb beginnt die Steuerung nicht beim Marketingbudget, sondern beim Zielbestand. Welche aktive und wirtschaftlich tragfähige Kundenbasis braucht das Geschäft künftig? Davon abgezogen wird, was nach erwartetem Churn übrig bleibt. Die Differenz ist der tatsächliche Neukunden- und Reaktivierungsbedarf. Erst danach stellt sich die Frage nach dem Budget.",
      "Akquisition, Retention und Reaktivierung konkurrieren dabei nicht über isolierte Kanal-ROIs. Sie erfüllen unterschiedliche Rollen und zahlen auf denselben Zielbestand ein. Innerhalb der Basis wird differenziert: Wo Wiederkaufwahrscheinlichkeit und Wert hoch sind, wird investiert. Wo die Kosten den absehbaren Wert dauerhaft übersteigen, ist bewusst gesteuerter Churn die ehrlichere Entscheidung als künstliches Halten. Der Kundenwert dient dabei als Leitplanke, nicht als Zielgröße: Er verhindert, dass der nächste Kauf auf Kosten der künftigen Profitabilität optimiert wird.",
      "Bei bonprix habe ich eine Kundenbasis von rund 16 Mio. aktiven Kunden über alle Märkte gesteuert, mit einer von Grund auf entwickelten Multichannel-CRM-Fähigkeit über 20+ Märkte. Kundenwert und Retention wurden dort als feste Steuergrößen verankert.",
    ],
  },
  {
    position: 3,
    title: "Ergebnisabweichungen zerlegen, bevor interveniert wird",
    satz: "Erst die dominante Mechanik identifizieren, dann das Instrument wählen.",
    these: "Die Wahl der Interventionsebene ist selbst eine Managemententscheidung.",
    slug: "ergebnisabweichungen-zerlegen",
    field: {
      number: "01",
      title: "Economic Steering",
      shortTitle: "Economic Steering",
      description: "Ergebnisse, Treiber und wirtschaftliche Mechanik zusammenführen.",
      managementQuestion: "Wie diagnostiziere und steuere ich die wirtschaftliche Entwicklung eines Geschäfts?",
      image: "/images/commercial-management/01-economic-steering.png",
      alt: "Cockpit-Steuerung mit aktiv verändertem wirtschaftlichem Pfad",
      tags: ["Ergebnis", "Treiber", "Intervention"],
      focus: [
        "Plan, Forecast und Ist als Ausgangspunkt der Diagnose verbinden.",
        "Outcomes in Kunden-, Nachfrage-, Angebots-, Margen- und Kostentreiber zerlegen.",
        "Temporäre Effekte von strukturellen Veränderungen unterscheiden.",
        "Den relevanten Bottleneck und die richtige Interventionsebene bestimmen.",
        "Lokale KPI-Verbesserung gegen die wirtschaftliche Gesamtwirkung prüfen.",
      ],
      tensions: "Symptom oder Ursache; kurzfristiges Ergebnis oder zukünftige Wettbewerbsfähigkeit; lokale KPI oder wirtschaftliches Gesamtsystem.",
    },
    body: [
      "Wenn Umsatz oder Ergebnis anders laufen als geplant, steht sofort eine isolierte Frage im Raum: Welche Maßnahme ergreifen wir? Ein sichtbares Symptom ist aber nicht automatisch die Ursache.",
      "Ich zerlege die Abweichung zuerst in ihre Treiber: Kundenbasis, Nachfrage, Conversion, Marketing, Preis, Marge, Verfügbarkeit, Kosten. Und zwar so weit, bis sichtbar wird, welche Veränderungen sie tatsächlich tragen. Ein Beispiel: Sinkt die Conversion, prüfe ich veränderten Traffic-Mix, Mobile-Nutzung und Sortimentsverschiebung gegeneinander. Die Ursache kann dann ein Verfügbarkeitsengpass sein, also an einer Stelle liegen, die mit Conversion-Optimierung nicht zu erreichen ist.",
      "Danach folgt die Entscheidung über die Interventionsebene. Operativ, etwa eine Preisanpassung. Taktisch, etwa eine Verschiebung im Marketing-Mix. Strukturell, etwa die Lieferfähigkeit lösen. Oder strategisch, etwa Positionierung oder Kundenbasis verändern. Nicht jede Abweichung verlangt eine strukturelle Antwort. Umgekehrt darf ein struktureller Wandel nicht mit immer neuen kurzfristigen Maßnahmen überdeckt werden. Die Wahl der Ebene ist selbst eine Managemententscheidung, nicht das Ergebnis der Analyse. Und eine lokale Verbesserung ist kein Erfolg, wenn das wirtschaftliche Gesamtsystem dadurch schlechter wird.",
      "Für diese Diagnose habe ich ein Measurement-Framework und Self-Service-Analytics entwickelt, angebunden an 50+ Business Units und nutzbar für 500+ Business User, mit einem wöchentlichen Steering Circle als Ort für Entscheidung und Wirkungskontrolle.",
    ],
  },
  {
    position: 4,
    title: "Angebot und Customer Journey als ein wirtschaftliches System",
    satz: "Sortiment, Verfügbarkeit, Preis, Conversion und Marketing greifen ineinander oder gegeneinander.",
    these: "Conversion ist ein Ergebnis, keine Ursache.",
    slug: "angebot-und-customer-journey",
    field: {
      number: "04",
      title: "Offer & Customer Journey",
      shortTitle: "Offer & Customer Journey",
      description: "Angebot und Journey in wirtschaftliche Wirkung übersetzen.",
      managementQuestion: "Wie steuere ich Angebot und Customer Journey als wirtschaftliches Gesamtsystem?",
      image: "/images/commercial-management/04-offer-customer-journey.png",
      alt: "Customer Journey von Awareness über Consideration und Purchase bis Retention",
      tags: ["Angebot", "Journey", "Availability"],
      focus: [
        "Sortiment, Verfügbarkeit und Preis als Teil der Journey lesen.",
        "Traffic-Intent, Findbarkeit und Personalisierung gemeinsam betrachten.",
        "Fulfilment, Retouren und Cost-to-Serve in die Wirkung einbeziehen.",
        "Conversion als Resultat mehrerer Mechaniken statt als isolierte Ursache behandeln.",
        "Die Intervention am tatsächlichen Bottleneck ansetzen.",
      ],
      tensions: "Conversion oder Marge; zusätzliche Nachfrage oder begrenzte Verfügbarkeit; lokaler Touchpoint oder End-to-End-Wirkung.",
    },
    body: [
      "Wenn die Profitabilität sinkt, liegt die naheliegende Reaktion am Interface: Checkout entschlacken, Rabatt setzen, Kampagne verstärken. Der sichtbare Effekt am Touchpoint entsteht aber selten dort, wo er gemessen wird.",
      "Conversion ist ein Ergebnis, keine Ursache. Sie fasst Traffic-Intent, Verfügbarkeit, Preiswahrnehmung und Reibung im Erlebnis in einem einzigen Wert zusammen. Bevor am Interface optimiert wird, müssen die vorgelagerten Angebots-, Nachfrage- und Nutzungseffekte verstanden sein. Und eine isolierte Maßnahme kann die Journey verbessern und gleichzeitig das Geschäft verschlechtern: Ein Rabatt hebt die Conversion, lenkt Nachfrage auf knappe Bestände, treibt Retouren und Fulfilment-Kosten, und am Ende sinkt die Gesamtmarge.",
      "Ich steuere deshalb drei Ebenen zusammen. Das kommerzielle Angebot mit Sortiment, Verfügbarkeit und Preis. Die digitale Journey mit Findbarkeit, Empfehlung und Produktdaten. Und die operative Leistung mit Fulfilment, Retouren und Cost-to-Serve. Search, Checkout und Personalisierung sind dabei keine reinen Erlebnis-Themen, sondern Hebel auf Bestand und Marge.",
      "Was sich mit dem Digitalen verschoben hat, ist die Knappheit selbst. Im Katalog waren Seitenfläche und Lagerbestand knapp. Online sind es Auffindbarkeit, algorithmische Sichtbarkeit und Relevanz für den einzelnen Kunden. Die Steuerung muss dieser Verschiebung folgen.",
      "Bei bonprix habe ich diesen Weg von der Angebotssteuerung über Testkataloge bis zur Digital Experience Platform mit ML-gestützten Empfehlungen begleitet, auf einer Plattform mit über 5 Mio. täglichen Besuchen und 200.000 täglichen Transaktionen.",
    ],
  },
  {
    position: 5,
    title: "Attribution von tatsächlicher Wirkung trennen",
    satz: "Was hätte ohne die Maßnahme stattgefunden, und wie belastbar ist die Antwort.",
    these: "Eine technisch saubere Messung kann wirtschaftlich die falsche Geschichte erzählen.",
    slug: "attribution-von-wirkung-trennen",
    field: {
      number: "06",
      title: "Performance Causality",
      shortTitle: "Performance Causality",
      description: "Tatsächliche Wirkung statt bloßer Zuordnung verstehen.",
      managementQuestion: "Wie stelle ich fest, was Performance wirklich verursacht?",
      image: "/images/commercial-management/06-performance-causality.png",
      alt: "Diagramm mit Intervention, Actual, Counterfactual und Incremental Effect",
      tags: ["Counterfactual", "Incrementality", "Evidenz"],
      focus: [
        "Attribution von zusätzlicher Wirkung unterscheiden.",
        "Den behaupteten Wirkungsmechanismus gegen reales Kundenverhalten prüfen.",
        "Tests und Vergleiche an Entscheidung und Risiko ausrichten.",
        "Mehrere Evidenzquellen zu einem belastbaren Entscheidungsbild verbinden.",
        "Unsicherheit sichtbar machen und Wirkung später erneut überprüfen.",
      ],
      tensions: "Methodische Tiefe oder Entscheidungsgeschwindigkeit; technisch sauberes Ergebnis oder wirtschaftlich plausible Erklärung; Präzision oder transparent gemachte Unsicherheit.",
    },
    body: [
      "Ein Kanal, eine Kampagne oder eine Journey-Änderung sieht im Reporting erfolgreich aus. Ein grünes Dashboard ist aber noch keine Erklärung. Es zeigt, was zugeordnet wurde, nicht, was ohne die Maßnahme ausgeblieben wäre.",
      "Genau dort liegt der entscheidende Unterschied: zwischen Zuordnung und zusätzlicher Wirkung. Ein Kontakt kann einer Conversion zugerechnet werden, ohne sie verursacht zu haben. Deshalb stelle ich zuerst die Gegenfrage: Was wäre ohne diese Maßnahme wahrscheinlich passiert, und welcher Vergleich beantwortet das am ehesten? Das Counterfactual lässt sich nie perfekt beobachten. Die Frage danach verbessert trotzdem jede Wahl von Test, Vergleichsgruppe und Interpretation.",
      "Ein statistisch sauberes Ergebnis muss außerdem zur realen Mechanik passen. Ich prüfe drei Dinge. Stimmt das Timing der beobachteten Wirkung? Passt die zugewiesene Kanalrolle zum tatsächlichen Kundenverhalten? Stützen die operativen Veränderungen die behauptete Erklärung? Trägt eines davon nicht, erzählt die Messung wirtschaftlich die falsche Geschichte, auch wenn technisch korrekt gerechnet wurde.",
      "Die Evidenztiefe koppele ich an das Risiko der Entscheidung. Eine kleine, reversible Anpassung rechtfertigt keinen Testaufbau über Wochen. Eine große Budgetverschiebung oder eine mehrjährige Investition in Fähigkeiten schon. Wo Unsicherheit bleibt, mache ich sie sichtbar, statt sie in eine Nachkommastelle zu übersetzen. Falsche Präzision ist gefährlicher als offen benannte Unschärfe, weil sie eine Diskussion beendet, die noch nicht geführt wurde. Mein Ziel ist keine perfekte Messbarkeit, sondern eine Entscheidung, die belastbar genug getroffen und später erneut überprüft wird.",
      "Bei bonprix habe ich die Marketingsteuerung von historienbasierter Planung auf modellbasierte, getestete Steuerung umgestellt. Das Ergebnis war eine ROI-Verbesserung im zweistelligen Millionenbereich. Tests dienten dort der Verbesserung von Entscheidungen, nicht der nachträglichen Bestätigung bereits getroffener.",
    ],
  },
  {
    position: 6,
    title: "Reale Knappheit priorisieren",
    satz: "Wohin Geld, Aufmerksamkeit und knappe Fähigkeiten fließen, wenn alles begründet ist.",
    these: "Business Priority ist nicht dasselbe wie Capacity Allocation.",
    slug: "reale-knappheit-priorisieren",
    field: {
      number: "08",
      title: "Resource Allocation",
      shortTitle: "Resource Allocation",
      description: "Ressourcen auf die wichtigsten Werthebel konzentrieren.",
      managementQuestion: "Wie entscheide ich, wohin knappe Ressourcen und Capabilities fließen?",
      image: "/images/commercial-management/08-resource-allocation.png",
      alt: "Zuteilung knapper Ressourcen auf ausgewählte Prioritäten",
      tags: ["Scarcity", "Portfolio", "Capacity"],
      focus: [
        "Unterschiedliche Vorhaben auf gemeinsame Entscheidungsdimensionen bringen.",
        "Die tatsächlich knappe Capability oder Abhängigkeit identifizieren.",
        "Budget, Capacity und Capability-Tiefe auseinanderhalten.",
        "Business-Priorität und konkrete Ressourcenbesetzung sauber trennen.",
        "Das Portfolio adaptiv halten, ohne die Strategie ständig zu verändern.",
      ],
      tensions: "Strategische Stabilität oder adaptives Portfolio; Business-Priorität oder Capacity Allocation; reale Knappheit oder allgemeine Wunschliste.",
    },
    body: [
      "App, Pricing, Lieferfähigkeit, Marketing und Plattformarbeit konkurrieren um dieselben Mittel. In der Regel ist jeder einzelne Antrag gut begründet. Eine ROI-Rangliste sortiert sie trotzdem falsch, weil sie unterschiedliche Zeithorizonte, Risiken und Abhängigkeiten auf eine Zahl zusammenzieht.",
      "Ich mache die Vorhaben deshalb vergleichbar, ohne ihre Unterschiedlichkeit einzuebnen. Umsatz- und Ergebniswirkung, Customer Impact, Zeitprofil, Risiko, Aufwand, Abhängigkeiten und struktureller Beitrag werden nebeneinandergelegt. Ein Kriterienkatalog hilft dabei, Annahmen zu prüfen und überzogene Nutzenversprechen zu challengen. Er ersetzt die Entscheidung nicht. Eine Rangliste, die sich selbst ausrechnet, ist kein Portfolio-Management, sondern ausgelagerte Verantwortung.",
      "Der zweite Schritt ist die Frage nach der tatsächlichen Knappheit. Nicht jedes Vorhaben konkurriert mit jedem anderen. Gegeneinander gestellt werden muss nur, was auf dieselbe knappe Fähigkeit, denselben Engpass oder dieselbe Abhängigkeit zugreift. Und Budget ist nicht dasselbe wie Kapazität: Zusätzliches Geld löst kurzfristig weder fehlende Skills noch Recruiting, Einarbeitung, Sequenzierung oder technische Abhängigkeiten.",
      "Daraus folgt eine saubere Trennung der Entscheidungsrechte. Das Business bestellt Outcome und Priorität, nicht einzelne Menschen. Die fachlich Verantwortlichen entscheiden, mit welchem Skill-Mix und in welcher Reihenfolge das unter realen Abhängigkeiten umsetzbar ist. Die strategische Richtung bleibt über das Jahr stabil, das Portfolio wird quartalsweise neu sortiert, sobald sich Evidenz, Risiken oder Abhängigkeiten verschieben. Scheitert die Priorisierung dagegen in jedem Quartal an derselben Plattformkomponente, ist das kein Priorisierungsproblem mehr. Dann muss das System verändert werden, nicht die Warteschlange.",
      "Bei bonprix habe ich auf dieser Logik ein Portfolio von über 150 parallelen Maßnahmen und ein Budget von über €30 Mio. gesteuert. Wenige strategische Jahresziele wurden mit der Geschäftsführung vereinbart, die konkrete Kapazitätsverteilung blieb bei den fachlich Verantwortlichen.",
    ],
  },
  {
    position: 7,
    title: "Verantwortung ordnen, wenn kein Bereich das Ergebnis allein trägt",
    satz: "Wer entscheidet was, in welchem Rhythmus, mit welcher Wirkungskontrolle.",
    these: "Cross-funktionale Ziele brauchen Stewardship, keine fiktive Alleinverantwortung.",
    slug: "verantwortung-ordnen",
    field: {
      number: "07",
      title: "Commercial Operating Model",
      shortTitle: "Operating Model",
      description: "Verantwortung und Zusammenarbeit an kommerzieller Logik ausrichten.",
      managementQuestion: "Wie organisiere ich Verantwortung und Entscheidungen über Funktionen hinweg?",
      image: "/images/commercial-management/07-commercial-operating-model.png",
      alt: "Governance- und Verantwortungslogik rund um Commercial Outcomes",
      tags: ["Decision Rights", "Cadence", "Capabilities"],
      focus: [
        "Gemeinsame Outcomes und eine gemeinsame Datengrundlage schaffen.",
        "Decision Rights nach Information, Kompetenz und Wirkungsradius schneiden.",
        "Business-Priorität von Capability-Verantwortung trennen.",
        "Entscheidungen über Execution-Routinen bis zur Wirkungskontrolle schließen.",
        "Skills und Incentives als Teil des Operating Models behandeln.",
      ],
      tensions: "Autonomie oder gemeinsame Governance; Entscheidungsgeschwindigkeit oder permanenter Konsens; lokale Optimierung oder gemeinsamer Outcome.",
    },
    body: [
      "Marketing, CRM, Product, Data, Einkauf und Technology beeinflussen dasselbe kommerzielle Ergebnis. Geteilte Verantwortung klingt nach Zusammenarbeit, erzeugt aber häufig das Gegenteil: langsame Entscheidungen, doppelte Arbeit und am Ende niemanden, der für das Ergebnis geradesteht.",
      "Gemeinsame Ziele und eine gemeinsame Datengrundlage sind Voraussetzung dafür. Konsens für jede einzelne Entscheidung ist es nicht. Entscheidungsrechte gehören dorthin, wo die relevante Information und die fachliche Kompetenz sitzen. Wie weit sie reichen, bestimmt der Wirkungsradius. Was lokal wirkt, wird lokal entschieden. Was andere Funktionen oder das Gesamtsystem betrifft, braucht gemeinsame Steuerung oder eine klare übergeordnete Entscheidung. Handlungsfähig wird Verantwortung erst, wenn Ergebnisverantwortung, Entscheidungsrecht und fachliche Fähigkeit an derselben Stelle liegen.",
      "Ziele, Kennzahlen und Rollen allein tragen das nicht. Eine Entscheidung ist nicht abgeschlossen, wenn sie getroffen wurde. Sie braucht eine Routine, in der Abweichungen sichtbar werden, Ursachen gemeinsam diagnostiziert und Maßnahmen mit Owner und Termin festgelegt werden, und in der die Wirkung anschließend überprüft wird. Ohne diesen geschlossenen Kreislauf bleibt jede Entscheidung eine Absichtserklärung.",
      "Dazu gehört ein realistisches Verständnis geteilter Kennzahlen. Wer eine bereichsübergreifende Kennzahl verantwortet, verursacht sie nicht allein. Seine Aufgabe ist Messqualität, Diagnose und Nachhalten, nicht die Fiktion der Alleinverantwortung. Zugriff auf gemeinsame Daten erzeugt außerdem noch keine Wirksamkeit. Es braucht die Fähigkeit, damit zu arbeiten, und Zielsysteme, die bereichsübergreifende Ergebnisse belohnen statt lokaler Optimierung. Tauchen dieselben Konflikte trotz guter Zusammenarbeit immer wieder auf, ist das kein Kommunikationsproblem. Dann prüfe ich Mandate, Schnittstellen, Anreize und den organisatorischen Schnitt selbst.",
      "Bei bonprix habe ich die überlappende Verantwortung zwischen klassischer Akquise und Online-Marketing nicht moderiert, sondern anhand von Steuerungslogik, Measurement und Wertschöpfungsmechanik organisatorisch neu geordnet. In dieser Logik habe ich eine Organisation mit 100+ Mitarbeitenden in 20+ Teams geführt.",
    ],
  },
  {
    position: 8,
    title: "Über Märkte skalieren, ohne lokale Wirksamkeit zu verlieren",
    satz: "Standardisieren, konfigurieren oder als Ausnahme zulassen. Und wer die Komplexität trägt.",
    these: "Übertragen wird der Wirkungsmechanismus, nie die sichtbare Lösung.",
    slug: "ueber-maerkte-skalieren",
    field: {
      number: "05",
      title: "Multi-Market Scale",
      shortTitle: "Multi-Market Scale",
      description: "Erfolgsmechanismen über Märkte skalieren.",
      managementQuestion: "Wie skaliere ich Commercial über Märkte, ohne lokale Wirksamkeit zu verlieren?",
      image: "/images/commercial-management/05-multi-market-scale.png",
      alt: "Weltkugel mit mehreren Märkten und internationalen Verbindungen",
      tags: ["Global Core", "Local Context", "Transfer"],
      focus: [
        "Skalierbaren Kern von begründeter lokaler Konfiguration trennen.",
        "Lokale Abweichungen an wirtschaftliche Evidenz binden.",
        "Dauerhafte Komplexitäts- und Opportunitätskosten einbeziehen.",
        "Bearbeitungstiefe nach Potenzial, Reife und Capability differenzieren.",
        "Wirkungsmechanismen übertragen statt sichtbare Lösungen zu kopieren.",
      ],
      tensions: "Zentralisierung oder lokale Relevanz; Ausnahme oder Complexity Tax; Copy-Paste oder kontextgerechter Mechanism Transfer.",
    },
    body: [
      "Internationale Skalierung scheitert an zwei entgegengesetzten Fehlern. Zu viel Zentralisierung ignoriert reale Marktmechaniken und kostet lokale Relevanz. Zu viele lokale Varianten zerstören jeden Skaleneffekt. Die Frage ist nicht, wie viel Freiheit die Märkte bekommen, sondern was tatsächlich skalierbarer Kern ist und was begründete Anpassung.",
      "Ich standardisiere den Kern, nicht die Marktmechanik. Gemeinsame Plattformen, Prozesse, Datenmodelle, Rollen und das Basisangebot bleiben einheitlich. Marketing-Mix, Zahlarten, Lieferbedingungen, Kampagnen und Preisniveau sind Konfigurationsraum.",
      "Lokale Abweichung ist dabei weder grundsätzlich falsch noch automatisch wertvoll. Sie braucht einen nachvollziehbaren wirtschaftlichen Grund, belegt durch Research, Tests oder beobachtbares Kundenverhalten. „Unser Markt ist anders“ reicht nicht. Denn eine Sonderlösung kostet nicht nur einmalig: Sie erzeugt dauerhaft Pflegeaufwand, langsamere Entscheidungen, komplexeres Testen und erschwert spätere Veränderungen. Diese Komplexitätskosten muss der Unterschied wert sein.",
      "Auch die Bearbeitungstiefe folgt nicht der Gleichbehandlung. Ein kleiner oder früher Markt braucht nicht dasselbe Instrumentarium wie ein reifer. Und wenn ein Markt dauerhaft Ausnahmen vom Kern braucht, um überhaupt zu funktionieren, ist das kein operatives Problem, sondern ein Hinweis auf strategischen Misfit. Dann steht ein Strategiewechsel zur Debatte, im Zweifel auch der Rückzug.",
      "Was zwischen Märkten übertragen wird, ist nie die sichtbare Lösung. Erst wird verstanden, warum sie in Markt A wirkt, dann wird der Wirkungsmechanismus isoliert und in Markt B passend neu aufgesetzt. Kopieren scheitert an der lokalen Realität, Übertragen nicht.",
      "Auf dieser Logik ist der E-Commerce über 20+ Märkte auf €1,6 Mrd. Umsatz gewachsen, mit einem internationalen Anteil von 50 Prozent und einem marketinggetriebenen Traffic-Anteil von 0 auf 50 Prozent.",
    ],
  },
];

export const commercialFields = commercialQuestions
  .map((question) => ({
    ...question.field,
    detailTitle: question.title,
    about: question.body?.[0] ?? question.satz,
  }))
  .sort((a, b) => Number(a.number) - Number(b.number));
