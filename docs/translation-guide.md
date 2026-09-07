# DE/EN Translation Guide

## Scope and authority

- German is the source of truth for content, facts and positioning.
- English is a British-English adaptation.
- Translate meaning, not wording.
- Preserve the hierarchy: Commercial Management / Digital Commerce is the core. Data, AI & Decisioning and Digital Product & Customer Experience are specialist enablers. Leadership & Transformation is the organisational and execution frame.
- Do not introduce claims, superlatives, evidence or capability fields that are absent from the German source.
- Keep numbers, roles, dates and evidence levels identical.

## Language rules

- Use natural, concise Executive English.
- Use British spelling: organisation, prioritisation, personalisation, behaviour, optimise, centralise.
- Preserve established English terms where they are already part of the German source.
- Translate UI labels consistently and keep internal links within the active language.

## Binding glossary

| German source term | British-English term |
| --- | --- |
| Commercial Management | Commercial Management |
| Data, AI & Decisioning | Data, AI & Decisioning |
| Digital Product & Customer Experience | Digital Product & Customer Experience |
| Leadership & Transformation | Leadership & Transformation |
| Kundenwert | Customer Value |
| Kundenbasis | Customer Base |
| kommerzielle Steuerung | Commercial Steering |
| wirtschaftliche Steuerung | Economic Steering |
| zukünftiges Wachstum | Future Growth |
| Skalierung über Märkte | Multi-Market Scale |
| Wirkung / Kausalität der Performance | Performance Causality |
| Betriebsmodell / Organisationsmodell | Operating Model |
| Ressourcenallokation | Resource Allocation |
| digitales Produkt | Digital Product |
| Produktverantwortung | Product Ownership |
| prädiktive AI | Predictive AI |
| agentische AI | Agentic AI |
| Personalisierung | Personalisation |
| Organisation | Organisation |
| Priorisierung | Prioritisation |
| Angebotssteuerung | Offer Management |
| Entscheidungsrechte | Decision Rights |
| wirtschaftliche Wirkung | Economic Impact |

## Maintenance workflow

1. Change the German master.
2. Mark the corresponding English route for review.
3. Update the English adaptation against the changed German meaning.
4. Run a semantic check: additions, omissions, hierarchy, facts, evidence level and British English.
5. Build and publish both versions together.

The English content is currently maintained in the language-aware page components and in `src/data/en/`. The six route pairs are defined centrally in `src/i18n/routes.ts`.
