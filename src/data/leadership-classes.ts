export interface LeadershipLayer {
  title: string;
  text: string;
}

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
  layers?: LeadershipLayer[];
  personalNote?: string;
}

export const leadershipClasses: LeadershipClass[] = [
  {
    number: "01",
    title: "Verantwortung & Handlungsspielraum",
    shortTitle: "Verantwortung & Handlungsspielraum",
    description: "Klare Richtung schafft Raum für eigenständige Entscheidungen und echte Verantwortung.",
    managementQuestion: "Wenn Ziele und Prioritäten verständlich sind, kann Verantwortung dort liegen, wo die fachliche Expertise ist.",
    image: "/images/leadership-transformation/01-verantwortung-handlungsspielraum.png",
    alt: "Mehrere Pfade innerhalb eines gemeinsamen Feldes für Verantwortung und Handlungsspielraum",
    tags: ["Richtung", "Entscheidungsraum", "Verbindlichkeit"],
    about: "Verantwortung gehört für mich dorthin, wo Kompetenz und Nähe zum Thema liegen. Entscheidend sind ein klares Mandat, verständliche Prioritäten und Transparenz über Risiken und Abhängigkeiten. Wenn eine Situation zusätzlichen Kontext oder eine Entscheidung auf anderer Ebene braucht, werde ich enger beteiligt. Ziel bleibt dabei, Verantwortung so schnell wie sinnvoll wieder dort zu verankern, wo sie im Alltag wirksam werden kann.",
    focus: [],
    tensions: "",
    layers: [
      { title: "Richtung", text: "Ziel, Prioritäten und relevante Rahmenbedingungen müssen so klar sein, dass Entscheidungen daran ausgerichtet werden können." },
      { title: "Entscheidungsraum", text: "Verantwortung umfasst für mich auch den Spielraum, Entscheidungen eigenständig zu treffen und die eigene Expertise einzubringen." },
      { title: "Verbindlichkeit", text: "Zu Verantwortung gehört, Entscheidungen nachvollziehbar zu machen, ihre Wirkung im Blick zu behalten und bei Bedarf nachzusteuern." },
    ],
    personalNote: "Verantwortung gehört für mich dorthin, wo Kompetenz und Nähe zum Thema liegen. Entscheidend sind ein klares Mandat, verständliche Prioritäten und Transparenz über Risiken und Abhängigkeiten. Wenn eine Situation zusätzlichen Kontext oder eine Entscheidung auf anderer Ebene braucht, werde ich enger beteiligt. Ziel bleibt dabei, Verantwortung so schnell wie sinnvoll wieder dort zu verankern, wo sie im Alltag wirksam werden kann.",
  },
  {
    number: "02",
    title: "Entwicklung & Feedback",
    shortTitle: "Entwicklung & Feedback",
    description: "Anspruch, Feedback und Entwicklung gehören für mich zusammen.",
    managementQuestion: "Mir ist wichtig, Erwartungen offen zu machen, Rückmeldung früh zu geben und Entwicklung als gemeinsamen Prozess zu verstehen.",
    image: "/images/leadership-transformation/02-entwicklung-feedback.png",
    alt: "Feedback und Entwicklung als Kreislauf mit Sprechblasen und sichtbarem Fortschritt",
    tags: ["Erwartungen", "Feedback", "Entwicklung"],
    about: "Mir ist wichtig, früh und konkret über Wirkung zu sprechen, in beide Richtungen. Gute Gespräche über Leistung und Entwicklung brauchen für mich Offenheit, Klarheit und gegenseitiges Vertrauen. Entwicklung entsteht vor allem durch echte Verantwortung, anspruchsvolle Aufgaben, ehrliche Rückmeldung und die Möglichkeit, aus Erfahrungen zu lernen.",
    focus: [],
    tensions: "",
    layers: [
      { title: "Erwartungen", text: "Klarheit darüber, was gute Wirkung ausmacht, welche Ergebnisse zählen und woran Fortschritt erkennbar wird." },
      { title: "Feedback", text: "Beobachtungen früh, konkret und im direkten Austausch ansprechen und genauso offen für Rückmeldung zur eigenen Führung sein." },
      { title: "Entwicklung", text: "Stärken weiter ausbauen, neue Verantwortung übernehmen und Erfahrungen bewusst nutzen, um sich fachlich wie persönlich weiterzuentwickeln." },
    ],
    personalNote: "Mir ist wichtig, früh und konkret über Wirkung zu sprechen, in beide Richtungen. Gute Gespräche über Leistung und Entwicklung brauchen für mich Offenheit, Klarheit und gegenseitiges Vertrauen. Entwicklung entsteht vor allem durch echte Verantwortung, anspruchsvolle Aufgaben, ehrliche Rückmeldung und die Möglichkeit, aus Erfahrungen zu lernen.",
  },
  {
    number: "03",
    title: "Richtung & Fokus",
    shortTitle: "Richtung & Fokus",
    description: "Gute Orientierung entsteht für mich aus einem gemeinsamen Verständnis von Ziel, Prioritäten und Entscheidungen.",
    managementQuestion: "Unterschiedliche Wege und Perspektiven gehören dabei selbstverständlich dazu.",
    image: "/images/leadership-transformation/03-richtung-fokus.png",
    alt: "Mehrere Ausgangspunkte und Wege führen zu einem gemeinsamen Ziel",
    tags: ["Zielbild", "Prioritäten", "Entscheidungen"],
    about: "Mir ist wichtig, dass nicht nur klar ist, was Priorität hat, sondern auch warum. In größeren Organisationen konkurrieren immer mehrere sinnvolle Themen um Aufmerksamkeit. Dann braucht es nachvollziehbare Prioritäten und klare Entscheidungen darüber, was jetzt zählt. Unterschiedliche Wege in der Umsetzung gehören dabei selbstverständlich dazu.",
    focus: [],
    tensions: "",
    layers: [
      { title: "Zielbild", text: "Verständlich machen, worauf wir hinarbeiten und welchen Beitrag ein Thema zum Ganzen leistet." },
      { title: "Prioritäten", text: "Wenige Dinge wirklich wichtig machen und transparent sein, wenn nicht alles gleichzeitig verfolgt werden kann." },
      { title: "Entscheidungen", text: "Klarheit darüber schaffen, was entschieden ist, was noch offen ist und wo weiterer Austausch sinnvoll ist." },
    ],
    personalNote: "Mir ist wichtig, dass nicht nur klar ist, was Priorität hat, sondern auch warum. In größeren Organisationen konkurrieren immer mehrere sinnvolle Themen um Aufmerksamkeit. Dann braucht es nachvollziehbare Prioritäten und klare Entscheidungen darüber, was jetzt zählt. Unterschiedliche Wege in der Umsetzung gehören dabei selbstverständlich dazu.",
  },
  {
    number: "04",
    title: "Offenheit & Konflikt",
    shortTitle: "Offenheit & Konflikt",
    description: "Unterschiedliche Sichtweisen gehören für mich zu guter Zusammenarbeit.",
    managementQuestion: "Mir ist wichtig, dass sie früh ausgesprochen, ernst genommen und offen gegeneinander abgewogen werden, auch wenn am Ende eine klare Entscheidung notwendig ist.",
    image: "/images/leadership-transformation/04-offenheit-konflikt.png",
    alt: "Vier unterschiedliche Perspektiven überlagern sich und führen zu einer Entscheidung",
    tags: ["Perspektiven", "Austausch", "Entscheidung"],
    about: "Mir ist wichtig, dass unterschiedliche Meinungen wirklich auf den Tisch kommen. Ich versuche, zuerst die Argumente und Interessen hinter einer Position zu verstehen. Nicht jede Diskussion muss in Konsens enden. Entscheidend ist für mich, dass die relevanten Perspektiven gehört wurden, eine Entscheidung nachvollziehbar ist und wir danach gemeinsam weiterarbeiten können.",
    focus: [],
    tensions: "",
    layers: [
      { title: "Perspektiven", text: "Unterschiedliche Sichtweisen früh sichtbar machen und die fachlichen Argumente dahinter verstehen." },
      { title: "Austausch", text: "Kontrovers diskutieren können, ohne dass aus einem Sachkonflikt ein Beziehungskonflikt wird." },
      { title: "Entscheidung", text: "Argumente abwägen, Verantwortung für die Entscheidung klären und danach gemeinsam handlungsfähig sein." },
    ],
    personalNote: "Mir ist wichtig, dass unterschiedliche Meinungen wirklich auf den Tisch kommen. Ich versuche, zuerst die Argumente und Interessen hinter einer Position zu verstehen. Nicht jede Diskussion muss in Konsens enden. Entscheidend ist für mich, dass die relevanten Perspektiven gehört wurden, eine Entscheidung nachvollziehbar ist und wir danach gemeinsam weiterarbeiten können.",
  },
  {
    number: "05",
    title: "Zusammenarbeit über Grenzen hinweg",
    shortTitle: "Zusammenarbeit über Grenzen hinweg",
    description: "Viele Entscheidungen betreffen mehrere Funktionen gleichzeitig.",
    managementQuestion: "Mir ist wichtig, die relevanten Perspektiven früh zusammenzubringen und Verantwortung für das Ergebnis gemeinsam zu tragen.",
    image: "/images/leadership-transformation/05-zusammenarbeit-grenzen.png",
    alt: "Dezentrales Netzwerk aus gleichwertigen Perspektiven und Beiträgen",
    tags: ["Perspektiven", "Zusammenspiel", "Verantwortung"],
    about: "Zusammenarbeit sollte früh beginnen und nicht erst an den Schnittstellen. Unterschiedliche Funktionen bringen ihre Perspektiven und Abhängigkeiten rechtzeitig ein. Gleichzeitig braucht es Klarheit darüber, wer welche Entscheidung trifft und wer welchen Beitrag zur Umsetzung übernimmt. Gemeinsame Verantwortung heißt für mich, Entscheidungen im Gesamtzusammenhang zu treffen und Zuständigkeiten klar zu halten.",
    focus: [],
    tensions: "",
    layers: [
      { title: "Perspektiven", text: "Unterschiedliche fachliche Sichtweisen und Abhängigkeiten früh sichtbar machen." },
      { title: "Zusammenspiel", text: "Beiträge aus Marketing, Product, Data, Tech und Märkten so verbinden, dass ein gemeinsames Verständnis der Aufgabe entsteht." },
      { title: "Verantwortung", text: "Klarheit darüber schaffen, wer welchen Beitrag leistet, wo Entscheidungen liegen und wie die Umsetzung zusammenwirkt." },
    ],
    personalNote: "Zusammenarbeit sollte früh beginnen und nicht erst an den Schnittstellen. Unterschiedliche Funktionen bringen ihre Perspektiven und Abhängigkeiten rechtzeitig ein. Gleichzeitig braucht es Klarheit darüber, wer welche Entscheidung trifft und wer welchen Beitrag zur Umsetzung übernimmt. Gemeinsame Verantwortung heißt für mich, Entscheidungen im Gesamtzusammenhang zu treffen und Zuständigkeiten klar zu halten.",
  },
  {
    number: "06",
    title: "Transformation, Veränderung & Lernen",
    shortTitle: "Transformation, Veränderung & Lernen",
    description: "Veränderung ist für mich ein gemeinsamer Lernprozess.",
    managementQuestion: "Dazu gehört, Erfahrungen aus der Umsetzung ernst zu nehmen, unterschiedliche Perspektiven einzubeziehen und die nächsten Schritte daraus weiterzuentwickeln.",
    image: "/images/leadership-transformation/06-veraenderung-lernen.png",
    alt: "Pflanzenwachstum in mehreren Entwicklungsstadien für Veränderung und Lernen",
    tags: ["Ziel und Sinn", "Erfahrung", "Weiterentwicklung"],
    about: "In Veränderungssituationen interessiert mich besonders, was Teams in der Praxis erleben. Dort zeigt sich, welche Annahmen tragen, wo neue Fragen entstehen und was angepasst werden sollte. Veränderung bleibt für mich deshalb ein Prozess, in dem Erfahrungen und neue Erkenntnisse immer wieder in die weitere Entwicklung einfließen.",
    focus: [],
    tensions: "",
    layers: [
      { title: "Ziel und Sinn", text: "Verständlich machen, was sich verändern soll, warum es relevant ist und woran Fortschritt erkennbar wird." },
      { title: "Erfahrung", text: "Wissen aus Teams, Funktionen und Märkten früh einbeziehen und sichtbar machen, was sich in der Praxis zeigt." },
      { title: "Weiterentwicklung", text: "Neue Erkenntnisse aufnehmen, Annahmen überprüfen und den weiteren Weg daran ausrichten." },
    ],
    personalNote: "In Veränderungssituationen interessiert mich besonders, was Teams in der Praxis erleben. Dort zeigt sich, welche Annahmen tragen, wo neue Fragen entstehen und was angepasst werden sollte. Veränderung bleibt für mich deshalb ein Prozess, in dem Erfahrungen und neue Erkenntnisse immer wieder in die weitere Entwicklung einfließen.",
  },
  {
    number: "07",
    title: "Führung & Haltung",
    shortTitle: "Führung & Haltung",
    description: "Führung heißt für mich, Orientierung zu geben, Verantwortung zu übertragen und unterschiedliche Perspektiven einzubeziehen.",
    managementQuestion: "Entscheidungen sollen auf relevanter Expertise, klarem Kontext und nachvollziehbarer Verantwortung beruhen.",
    image: "/images/leadership-transformation/07-fuehrung-haltung.png",
    alt: "Mehrere gleichwertige Perspektiven bilden eine gemeinsame Orientierungsfläche",
    tags: ["Orientierung", "Perspektiven", "Verantwortung"],
    about: "In fachlich vielfältigen Organisationen liegt relevante Expertise an vielen Stellen. Für mich gehört zu Führung, diese Perspektiven zusammenzubringen, Orientierung zu geben und Verantwortung klar zu verankern. Wenn eine Entscheidung auf meiner Ebene liegt, treffe ich sie und übernehme dafür die Verantwortung.",
    focus: [],
    tensions: "",
    layers: [
      { title: "Orientierung", text: "Richtung und Erwartungen klar machen und auch in anspruchsvollen Situationen verlässlich bleiben." },
      { title: "Perspektiven", text: "Unterschiedliche Sichtweisen einbeziehen und fachliche Expertise dort nutzen, wo sie liegt." },
      { title: "Verantwortung", text: "Entscheidungen dort verankern, wo Wissen und Verantwortung zusammenkommen, und Zuständigkeiten klar halten." },
    ],
    personalNote: "In fachlich vielfältigen Organisationen liegt relevante Expertise an vielen Stellen. Für mich gehört zu Führung, diese Perspektiven zusammenzubringen, Orientierung zu geben und Verantwortung klar zu verankern. Wenn eine Entscheidung auf meiner Ebene liegt, treffe ich sie und übernehme dafür die Verantwortung.",
  },
];
