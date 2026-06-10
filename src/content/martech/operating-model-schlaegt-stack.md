---
title: "Operating Model schlägt Stack"
date: 2026-06-10
excerpt: "Ein MarTech-Stack liefert keine Commerce-Ergebnisse. Das Operating Model um ihn herum tut es. Was die Plattform-Modernisierung bei bonprix darüber gezeigt hat."
---

Ein Stack liefert keine Commerce-Ergebnisse. Werkzeuge sind austauschbar und günstig geworden, Modelle sowieso. Was Ergebnisse bringt, ist das Operating Model um den Stack herum: die Datenarchitektur, die Verantwortlichkeiten, die Entscheidungswege. Die eigentliche Komplexität sitzt selten im ML-Modell. Sie sitzt in der Organisation und der Datenbasis, auf der das Modell überhaupt operativ wirksam wird.

Das klingt abstrakt. An einem konkreten Projekt wird es greifbar.

## Der Beleg: die Plattform-Modernisierung bei bonprix

Über mehrere Jahre haben wir die E-Commerce-Plattform von Grund auf umgebaut. Der Ausgangspunkt war ein Monolith mit über 400.000 Codezeilen auf 200 dedizierten Servern. Das Ziel war nicht eine schönere Architektur. Das Ziel war eine Plattform, die alle Touchpoints steuert (Webshop, App, Marketing) und Modelle im laufenden Betrieb trägt: Recommendations, Anomaly-Detection, Supply-Chain-Prediction, Personalisierung in Echtzeit.

Was die Plattform leistete, lässt sich an ihren Leistungsparametern ablesen. In der Spitze verarbeitete sie 16.500 Server-Requests pro Sekunde und trug 3,5 Millionen verkaufte Teile in einer einzigen Peakwoche. Die Besucherzahl lag 44 Prozent über dem Stand von 2015. Eine Customer Data Platform berechnete Kaufwahrscheinlichkeit, Next Best Product, Lifetime Value und Churn in unter 50 Millisekunden und machte Shop und Marketing in Echtzeit steuerbar.

Der schwierige Teil war nicht das einzelne Modell. Schwierig war, die Datenplattform so zu bauen, dass die Modelle verlässlich gefüttert werden. Wir haben die BI- und Marketing-Data-Plattform von Teradata und Hadoop auf BigQuery migriert. Am Ende lief der Webshop auf AWS und die Datenwelt auf Google Cloud, jede Last auf der Plattform, die zu ihr passt. Das war eine Operating-Model-Entscheidung, keine Tech-Spielerei. Sie hat Data-Science-Use-Cases einfacher gemacht und die Umsetzung beschleunigt.

Die Architektur war Mittel zum Zweck. Der Hebel war die Frage, wer für welches Ergebnis geradesteht und wie die Daten dorthin fließen.

## Dasselbe Muster, neue Welle

Bei Agentic AI sehe ich das Muster wieder. Die Tools sind verfügbar, die Demos beeindrucken. Was über Wirksamkeit entscheidet, ist die gleiche Frage wie damals: Ist die Datenbasis belastbar, sind Verantwortlichkeiten geklärt, kann die Organisation die Ergebnisse aufnehmen und steuern. Wer Modelle ausrollt, bevor das geklärt ist, vergrößert die Lücke zur Wirkung, statt sie zu schließen.

Ausrichtung schlägt Architektur. Ein guter Stack ist die Voraussetzung, nicht die Antwort. Die Antwort ist die Arbeit drumherum, und die ist weniger sichtbar und schwerer zu kopieren.
