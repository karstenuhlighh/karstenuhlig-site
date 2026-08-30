// Single source of truth für die acht Commercial-Growth-Einstiege, geteilt
// zwischen der Startseiten-Liste (Commercial.astro) und den Unterseiten
// (pages/commercial-growth/[slug].astro).
//
// Fachliche Quelle: KA-OS capabilities/commercial-management/. Reihenfolge,
// Texte und Freigabestatus: KA-OS market-activation/website-commercial-einstiege.md.
// Positionen 5-7 haben laut dieser Datei noch keinen Fließtext (Stand 2026-08-30)
// und bleiben deshalb ohne slug/body.

export interface CommercialQuestion {
  position: number;
  title: string;
  satz: string;
  these: string;
  slug: string | null;
  body: string[] | null;
}

export const commercialQuestions: CommercialQuestion[] = [
  {
    position: 1,
    title: "Wachstum neu begründen, wenn die bestehenden Quellen ausgereizt sind",
    satz: "Der Motor der letzten Jahre trägt nicht mehr, und die Alternativen sind unbelegt.",
    these: "Optimierung des Heutigen und strukturelles Wachstum folgen unterschiedlichen Logiken.",
    slug: "wachstum-neu-begruenden",
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
    slug: null,
    body: null,
  },
  {
    position: 6,
    title: "Reale Knappheit priorisieren",
    satz: "Wohin Geld, Aufmerksamkeit und knappe Fähigkeiten fließen, wenn alles begründet ist.",
    these: "Business Priority ist nicht dasselbe wie Capacity Allocation.",
    slug: null,
    body: null,
  },
  {
    position: 7,
    title: "Verantwortung ordnen, wenn kein Bereich das Ergebnis allein trägt",
    satz: "Wer entscheidet was, in welchem Rhythmus, mit welcher Wirkungskontrolle.",
    these: "Cross-funktionale Ziele brauchen Stewardship, keine fiktive Alleinverantwortung.",
    slug: null,
    body: null,
  },
  {
    position: 8,
    title: "Über Märkte skalieren, ohne lokale Wirksamkeit zu verlieren",
    satz: "Standardisieren, konfigurieren oder als Ausnahme zulassen. Und wer die Komplexität trägt.",
    these: "Übertragen wird der Wirkungsmechanismus, nie die sichtbare Lösung.",
    slug: "ueber-maerkte-skalieren",
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
