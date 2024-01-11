---
layout: posts
title: "Wiedergeburt der privaten Cloud"
number: 137
permalink: episode-EDT137-de
has_children: false
lang: de
nav_exclude: true
parent: Folgen
grand_parent: Deutsch
nav_order: 137
tags:
    - cloud
    - computing
    - greenlake
    - hpe
    - multicloud
    - hybridcloud
    - technology

date: Tue May 09 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Sam Ceccola

img: thumbnail.png
image: thumbnail.png
summary: "In dieser Episode interviewt Darren Sam Ceccola, den CTO der DOD für HPE, über die neuen Geschäfts- und Technologiemodelle, die die Art und Weise verändern, wie Organisationen die Hybrid Cloud nutzen."
video: "https://youtu.be/url"
description: "In dieser Episode interviewt Darren Sam Ceccola, den CTO der DOD für HPE, über die neuen Geschäfts- und Technologiemodelle, die die Art und Weise verändern, wie Organisationen die Hybrid Cloud nutzen."
---

<div>
{% include transistor.html id="fcf7bb68" title="#137 Rebirth of the Private Cloud" %}

{% include youtube.html id="url" %}
</div>

---

In den letzten Jahren hat es im kommerziellen Sektor einen Trend zur Rückführung von Arbeitsspeichern und virtuellen Maschinen aus öffentlichen Cloud-Umgebungen gegeben, aufgrund finanzieller Gründe wie Ausgaben für den Datenausgang und Budgetierung von Hyper-Skalierungs-Arbeitsspeichern. Datensouveränität, Sicherheitsbedenken, Leistungs- und Latenzprobleme haben ebenfalls dazu geführt, dass immer mehr Unternehmen sich von der öffentlichen Cloud abwenden und zu privaten Cloud-Technologien zurückkehren. Trotz dieses Wandels wurden viele Versprechungen der Cloud erfüllt, um Benutzerfreundlichkeit, Elastizität und verbrauchsabhängige Preisgestaltung zu bieten. Um den Übergang zwischen den Cloud-Plattformen zu erleichtern, muss die private Cloud Benutzerfreundlichkeit, Portabilität von Arbeitsspeichern und neue verbrauchsabhängige Preisgestaltungsmodelle bereitstellen, die von öffentlichen Clouds stark nachgefragt werden.

## Kostenkontrolle

Sam Ceccola, der HPE DoD CTO, glaubt, dass es entscheidend ist, die mit jeder privaten, öffentlichen und hybriden Cloud-Technologie verbundenen Risiken und Herausforderungen zu verstehen. Und Architekturlösungen zu entwickeln, die von den Stärken jeder Technologie profitieren. Hier kommt HPEs Produktangebot GreenLake ins Spiel. GreenLakes verbrauchsbasiertes Beschaffungsmodell für Dienstleistungen wurde erstmals 2005 eingeführt und hat sich seitdem weiterentwickelt, um ein Self-Service-Portal zur Verwaltung mehrerer privater und öffentlicher Cloud-Umgebungen einzuschließen. GreenLake ermöglicht es Kunden, zusätzliche Ressourcen über die private/öffentliche Cloud-Grenze hinweg nach Bedarf bereitzustellen. Es verwaltet auch komplexe Kosten wie Ausgabegebühren und Budgetierung für hyper-scale Arbeitslasten und visualisiert diese.

## Datenverwaltung

Eine weitere wesentliche Sorge für die meisten Verbraucher öffentlicher Clouds ist das Datenmanagement, die Governance und die Souveränität. Ohne eine kohärente Datenstrategie sind viele Organisationen stark belastet durch Datenübertragungskosten, die das Bewegen von Daten in und aus öffentlichen Clouds mit sich bringt. Es gibt verschiedene Ansätze zur Verwaltung von Daten across Cloud-Grenzen hinweg. HPE verwendet einen Ansatz des Cloud-Nebenstellspeichers, der die Menge der in die Cloud übertragenen Daten auf ein Minimum reduziert. GreenLake's Cloud-Nebenstellspeicher behält die Daten vor Ort, während Berechnungsarbeiten in der Cloud durchgeführt werden. Dieser Ansatz gewährleistet Datenhoheit, verringert Egress-Kosten und Latenzprobleme, die mit der Übertragung großer Datenmengen zwischen Clouds verbunden sind.

## Tragbarkeit

Ein weiterer wichtiger Aspekt von Multi-Hybrid-Cloud-Architekturen ist die Möglichkeit, Workloads zwischen Clouds leicht zu verschieben. Einige Organisationen haben auf zustandslose Container-basierte Microservice-Architekturen umgestellt, um die Flexibilität und Portabilität von Workloads zu ermöglichen. Allerdings können nicht alle Workloads leicht containerisiert werden, insbesondere Workloads, die Anwendungen enthalten, die einen Zustand haben. In solchen Fällen werden virtuelle Maschinen verwendet, um die Möglichkeit zu geben, Anwendungen von einer Cloud zur anderen zu verschieben. Die Verlagerung von virtuellen Maschinen zwischen Clouds kann problematisch sein, da Cloud-Service-Provider unterschiedliche Hypervisoren und CPUs verwenden, die möglicherweise nicht vollständig kompatibel sind. Das Verständnis der Beschränkungen dieser Migrationen ist entscheidend für Kaufentscheidungen von Hardware, sowohl virtualisierter als auch nicht virtualisierter.

## Sicherheit

GreenLake beschränkt Kunden nicht auf eine lokale Bereitstellung, da es ihnen ermöglicht, Arbeitslasten über verschiedene Cloud-Umgebungen zu bereitstellen, einschließlich Amazon, Google und Azure. Darüber hinaus unterstützt GreenLake echte hybride Arbeitslasten, bei denen eine Arbeitslast sowohl lokal als auch in hyperskaligen Cloud-Umgebungen gleichzeitig ausgeführt werden kann. Das Ausführen von Arbeitslasten über Cloud-Grenzen hinweg kann zusätzliche Anfälligkeit für Cyber-Angriffe nach sich ziehen. Das Verständnis der Sicherheitsmodelle der verschiedenen öffentlichen und privaten Cloud-Technologien kann eine schwierige Aufgabe sein und erhöht den Bedarf an menschlichem Kapital, um eine starke Sicherheitsposition effektiv zu planen und zu verwalten. Die GreenLake-Plattform behandelt Sicherheit durch seine unabhängige Sicherheitsengine, Security Central, die Multi-Cloud-Bescheinigung und Zero-Trust-Architekturen für unabhängige Clouds unterstützt und die Komplexität und Integration von Sicherheitsmodellen verwaltet.

Das Architekturieren einer Multi-Hybrid-Cloud-Lösung ist nicht trivial und erfordert ein Verständnis für private und öffentliche Cloud-Technologien, ihre Einschränkungen und ihre Stärken. Glücklicherweise gibt es Organisationen wie HPE, die seit mehreren Jahren mit Multi-Hybrid-Cloud-Architekturen arbeiten und sich mit der effektiven Verwaltung von Arbeitslasten in dieser neuen flexiblen Umgebung bestens auskennen.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
