---
layout: posts
title: "Cloud-Broker-Organisation Teil 2"
number: 57
permalink: episode-EDT57-de
lang: de
nav_exclude: true
nav_order: 57
tags:
    - crossfunctionalcollaboration
    - security
    - training
    - multicloud
    - zerotrust
    - cybersecurity

date: Wed Jul 14 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Dave Shrestha
    - Kevin Bleckmann

img: thumbnail.png
image: thumbnail.png
summary: "Im zweiten Teil von zwei sprechen Darren Pulsipher, Chief Solution Architect, und die Intel Cloud Solution Architects Dave Shrestha und Kevin Bleckman über die Vorteile und Dienstleistungen einer Cloud-Broker-Organisation."
video: "https://youtu.be/url"
description: "Im zweiten Teil von zwei sprechen Darren Pulsipher, Chief Solution Architect, und die Intel Cloud Solution Architects Dave Shrestha und Kevin Bleckman über die Vorteile und Dienstleistungen einer Cloud-Broker-Organisation."
---

<div>
{% include transistor.html id="3542904b" title="#57 Cloud Broker Organization Part 2" %}

{% include youtube.html id="url" %}
</div>

---

# Überlegungen zur Auswahl der Cloud

Sieben Jahre zuvor, als Dave und Kevin zum ersten Mal das Cloud-Broker-Team von Intel gründeten, gab es bedeutende Unterschiede zwischen Cloud-Service-Anbietern, wie regionale Verfügbarkeit. Doch mittlerweile, mit zunehmender Reife, sind die Unterschiede geringer geworden. Einige Anbieter haben sich auf bestimmte Bereiche wie KI und maschinelles Lernen oder umfangreiche verwaltete Datenbankdienste spezialisiert, und es gibt Kosteneffektoren, doch im Großen und Ganzen sind sie eher ähnlich als unterschiedlich. Cloud-Anbieter werden generell zu Dienstprogrammen, je reifer sie werden.

Die Sicherheit ist gut und ziemlich standardisiert bei den Cloud-Anbietern. Früher hat Intel externe Produkte von Drittanbietern zur Sicherheitsverwaltung bei Cloud-Diensten verwendet. Die Cloud-Anbieter haben nun einen Großteil davon in ihre Plattformen integriert, und Intel ist dazu übergegangen, mehr integrierte Komponenten zu nutzen. Es gibt noch viel Arbeit in diesem Bereich zu erledigen. In einigen Fällen müssen Sie immer noch die Sicherheit selbst übernehmen, aber die Anbieter sind auf dem richtigen Weg. Die Verwendung integrierter Werkzeuge ist für neue Unternehmen keine einfache Option, da sie nicht vollständig verwaltet werden, aber sobald Sie über das erforderliche Know-how und die erforderliche Reife verfügen, werden Ihnen zumindest die Werkzeuge zur Verfügung gestellt.

Das Kostenmanagement ist immer noch eine Kunst; viele Leute sind schockiert über ihre erste Cloud-Rechnung. Obwohl es eingebaute Werkzeuge gibt, die helfen werden, sowie Berater und öffentliche Cloud-Rechner, gibt es einige versteckte Kosten. Ingress- und Egress-Gebühren sind wahrscheinlich die größte Überraschung, gefolgt von Überbereitstellung. Intel hat einen Cloud-Optimizer, der von Densify betrieben wird und dabei hilft, überbereitete Ressourcen zu identifizieren und durch detaillierte Analysen empfiehlt, welche Instanzgrößen und -familien am optimalsten sind.

Einige Arbeitslasten sollten on-prem bleiben, insbesondere für große Unternehmen wie Intel, die ein großes on-prem Rechenzentrum haben. Das Cloud-Broker-Team verfügt über ein internes Tool namens Entscheidungsrahmenwerkzeug, das dabei helfen kann, die richtige Arbeitslast am richtigen Ort zu platzieren, und manchmal ist on-prem die beste Lösung.

# Arbeitsbelastungsbetrachtung für die Platzierung in der Public Cloud

Ohne ein Hilfsmittel zur Feststellung gibt es fünf Bereiche zu berücksichtigen.

*Sicherheit: Stellen Sie sicher, dass Sie die Identität der Anbieter, Verschlüsselung, Übereinstimmung und Single-Sign-On-Optionen kennenlernen. Dies sind die gleichen Punkte, mit denen Sie normalerweise vor Ort umgehen würden. Anstatt separate Tools zu verwenden, ist es am besten, Tools zu verwenden, die sowohl vor Ort als auch in der öffentlichen Cloud funktionieren, damit Ihre Teams sich nicht separate Tools aneignen müssen.

* Privatsphäre

Arbeitsbelastungsstabilität

*Datenaffinität/Datenschwere: Stellen Sie sicher, dass Ihr Cloud-Anbieter in den Regionen verfügbar ist, die Sie benötigen. Einige Cloud-Anbieter haben in allen ihren Regionen Verfügbarkeitszonen oder Rechenzentren, andere nicht. Darüber hinaus macht es bei einer Arbeitslast, die eine Verbindung zu vielen lokalen Systemen herstellt, keinen Sinn, diese in der öffentlichen Cloud zu platzieren.

Kosten: Es gibt immer noch Unterschiede in den Kosten zwischen den öffentlichen Cloud-Anbietern, insbesondere bei großen Recheninstanzen. Berücksichtigen Sie auch Ausgabe-Kosten.

## Wie man den Cloud-Broker-Service verkauft

Der Einstieg in den Cloud-Broker-Service kann für einige schwierig sein - insbesondere für Entwickler, die es gewohnt sind, die Kontrolle zu haben und beliebige Instanzen zu erstellen. Es können auch kleinere Anfangsschwierigkeiten auftreten. Als die Mitarbeiter von Intel ihre Konten zuerst erhalten haben, fühlten sie sich unsicher und das Informationssicherheits-Team hat ihnen Nachrichten geschickt, wenn sie etwas falsch gemacht haben. Diese wussten jedoch oft nicht genau, was sie falsch gemacht haben oder wie sie es beheben konnten. Mit der Weiterentwicklung und Reife des Services wurden diese Probleme allmählich gelöst, da das Team unterstützte und automatische Lösungen einsetzte.

Die Leute stellten fest, dass der Service letztendlich vorteilhaft war, weil er eine schnelle und einfache Möglichkeit bot, in die öffentliche Cloud zu gelangen, mit all der Unterstützung, die sie benötigten. Nach einer gewissen Zeit begann sich der Service von selbst zu verkaufen.

Einer der wichtigsten Dienste, die das Team anbietet, ist die Funktion als Vermittler zwischen Intels Geschäftspartnern von Endkunden und Informationssicherheitsgruppen, um übermäßig aggressive Sicherheitsrichtlinien zu verhindern, die lästig sind und zu vielen Tickets führen. Das Team sorgt für das richtige Gleichgewicht, das Entwicklern genügend Freiheit ermöglicht, innerhalb eines gesicherten Rahmens zu arbeiten und dennoch die Sicherheitsanforderungen zu erfüllen. Die Vermittler fungieren im Grunde genommen als Mediatoren zwischen Informationssicherheit und Entwicklern.

Das Cloud-Broker-Team bietet auch Schulungen an, indem es die Cloud-Anbieter einbezieht, um Workshops abzuhalten. Dieser Vorteil ergab sich auch aus dem Cloud Center of Excellence, wo die Mitarbeiter Schulungen in spezifischen Bereichen angefragt haben und das Team dann mit den Anbietern diesbezüglich verhandeln würde.

Neben externen Lieferanten nutzte Intel interne Teams, um zu demonstrieren, was sie mit der öffentlichen Cloud erreicht hatten, sodass andere Teams dieses Wissen nutzen konnten.

Cloud-Broker-Teams innerhalb von Unternehmen können eine Vielzahl von Dienstleistungen und Vorteilen bieten, wie zum Beispiel Sicherheit und Kosteneffizienz, insbesondere da sich die öffentlichen Cloud-Services weiterentwickeln, erweitern und für den Betrieb immer wichtiger werden.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
