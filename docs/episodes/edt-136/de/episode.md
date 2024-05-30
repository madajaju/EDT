---
layout: posts
title: "Belastbare Daten in störenden Kommunikationen"
number: 136
permalink: episode-EDT136-de
lang: de
nav_exclude: true
nav_order: 136
tags:
    - artificialintelligence
    - cybersecurity
    - sabr
    - devsecops
    - generativeai
    - multicloud
    - zerotrust
    - technology
    - process
    - people

date: Mon May 01 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "In dieser Podcast-Episode wird Darren Pulsipher, der leitende Lösungsarchitekt von Intel für den öffentlichen Sektor, von Gastgeberin Dr. Anna Scott zum Thema widerstandsfähige Daten mit störenden Kommunikationstechnologien interviewt."
video: "https://youtu.be/url"
description: "In dieser Podcast-Episode wird Darren Pulsipher, der leitende Lösungsarchitekt von Intel für den öffentlichen Sektor, von Gastgeberin Dr. Anna Scott zum Thema widerstandsfähige Daten mit störenden Kommunikationstechnologien interviewt."
---

<div>
{% include transistor.html id="a2a806f7" title="#136 Resilient Data in Disruptive Comms" %}

{% include youtube.html id="url" %}
</div>

---

In dieser Podcast-Episode wird Darren Pulsipher, der leitende Lösungsarchitekt des öffentlichen Sektors bei Intel, von Gastgeberin Dr. Anna Scott zum Thema widerstandsfähige Daten mit disruptiven Kommunikationstechnologien interviewt. Die Diskussion dreht sich um die sichere und effiziente Verwaltung von Daten in Umgebungen mit begrenzter Bandbreite und unterbrochenem Service, um künstliche Intelligenz und komplexe Datenanalytik am Rand zu ermöglichen. Darren spricht über seine Erfahrungen bei der Arbeit an der vernetzten Auto-Cloud von Toyota als Grundlage zur Lösung dieses Problems und wie gängige Datenmanagementarchitekturen genutzt wurden, um eine Lösung zu schaffen. Die schrittweise Enthüllung der Herausforderungen des Kunden half dabei, Designmuster zu identifizieren, die die Architektur für eine erfolgreiche Lösung öffneten.

Trotz intermittierender Konnektivität und dynamischer Edge-Knoten ist der Architekturdesignprozess zur Durchführung von Edge-Analytics komplex und schwer zu artikulieren, daher haben sie einen iterativen Ansatz gewählt. Zuerst haben sie eine Lösung in Betracht gezogen, die alle Daten zu einem Ort zur Analyse bringen würde, stellten jedoch fest, dass dies aufgrund der schieren Datenmenge am Rand unpraktisch ist. Das Verschieben von Anwendungen an den Rand schien vielversprechend, bis der Kunde aggregierte Analysen über den Rand hinweg anforderte. Nachdem sie Designmuster erkundet hatten, entschieden sie sich für die Verwendung des Datenstrom-Designmusters mit einem Publish-and-Subscribe-Hub, um dynamisch Datenströme für Verbraucher und Produzenten zu erstellen. Obwohl dieser Ansatz gut etablierte Wurzeln in der IT nutzte, hatte der Kunde anfangs Bedenken hinsichtlich der Themenzuweisung.

In der Vergangenheit musste Darren ein PubSubHub-Ökosystem im Voraus erstellen und mit all seinen Komponenten vertraut sein. Das Einrichten von Datenströmen mit Kafka oder Apache Pulse war jedoch eine Herausforderung und die Konfiguration der Sicherheit noch schwieriger. Durch die Nutzung ihrer Erfahrung in DevSecOps entwickelten sie eine Lösung, die Datenstromdefinitionen, Eingabe- und Ausgabedefinitionen sowie Datenumwandlungen in ein Paket bündelt, das von der Pipeline verwendet werden kann. Dieses Bündel erstellt automatisch Datenströme in PubSubHub und richtet alle erforderlichen Sicherheitsmaßnahmen ein. Das Ergebnis vereinfachte die Komplexität, da sich Entwickler nur auf Algorithmen oder KI-Modelle konzentrieren mussten, während alles andere auf generische Weise erledigt wurde. Der iterative Ansatz mit den Kunden half dabei, Architekturen und Implementierungen entlang des Weges anzupassen.

Die Hauptherausforderung bei dieser Art von Architektur besteht darin, mit begrenzten Ressourcen zu arbeiten, wie beispielsweise nur Zugriff auf zwei Kerne und 2 Gigabyte RAM zu haben. Wie viel Datenverarbeitung kann mit begrenzten Ressourcen am Rand stattfinden? Eine der Einschränkungen, an denen das Architekturteam arbeiten musste, bestand darin, den SABR-Stream-Manager und die Sicherheitsmaßnahmen so klein wie möglich zu machen. Darren hat den Code auf das absolute Minimum reduziert und überflüssige Drittanbieterpakete eliminiert. Das Ziel war es, einen leichten Stream-Manager zu erstellen, der am Rand ausgeführt werden kann und in verschiedenen Umgebungen portabel ist. Die resultierende Saber-Architektur war skalierbar und anpassungsfähig und konnte von einer Smartwatch bis zu einem großen Xeon-Server ausgeführt werden.

Darren und Anna diskutieren die Schwierigkeiten bei der Aktualisierung von KI-Modellen in einem verteilten Ökosystem mit zahlreichen Instanzen derselben Analytics, die ausgeführt werden. Um dieses Problem zu lösen, hat SABR einen Lerndatenstrom erstellt, der alle Instanzen derselben Analytics verbindet und die intermittierende Kommunikation, Zwischenspeicherung und das Senden von Deltas zur Aktualisierung der Modelle handhabt. Sie haben auch ein Datenträgersystem entwickelt, das das Designmuster der Richtlinienstrategie verwendet, um verschiedene Kanäle mit unterschiedlichem Datenmengenniveau basierend auf regeldefinierten Richtlinien zu ermöglichen. Dieser Ansatz ermöglicht eine effizientere Datenübertragung, reduziert die zu verarbeitenden Datenmengen und erhöht die Genauigkeit der KI-Modelle.

Als nächstes wird erläutert, wie man in der DDIL-Umgebung agiert, indem man den Versand von Daten priorisiert, indem zuerst Zusammenfassungen und historische Daten gesendet werden, bevor Echtzeitdaten gesendet werden. Es ist wichtig, Systemerwartungen und Kommunikationsrichtlinien im Voraus festzulegen, um Konsistenz im gesamten Ökosystem zu gewährleisten. Ein benutzerfreundlicher, mit JSON konfigurierter und auf JavaScript basierter Prozess zur Erstellung und Aktivierung von Richtlinien, der doppelte Arbeit vermeidet und die Wiederverwendung fördert. Die Architektur hat die Fähigkeit, schnell neue Funktionen hinzuzufügen, indem bestehende Säbel und Datenumwandlungen genutzt werden.

Das Letzte ist die Widerstandsfähigkeit des Systems, indem es dynamisch von Systemausfällen wiederherstellt. Das Potenzial für die dynamische und flexible Nutzung des SABR-Netzwerks. Auch wenn ein Knoten ausfällt, ist es möglich, eine SABR auf einen anderen Rechner zu verschieben und trotzdem alle Datenfeeds zu empfangen. Es ist auch möglich, Legacy-Computing zu verwenden, indem eine sehr leichte SABR auf einem alten System läuft, das Daten sammelt und an das SABR-Netzwerk weiterleitet. Die Bedeutung der Sicherheit sollte nicht vernachlässigt werden. Alle Datenströme werden verschlüsselt und Prozesse werden eingestellt, um Vertrauen und Beglaubigung der SABRs zu etablieren, um Fälschungen und Daten-Spionage zu verhindern. Insgesamt bietet das SABR-Netzwerk eine vielversprechende Lösung zur Verarbeitung von Daten am Rand mit Flexibilität und Sicherheit.

Der wichtigste Lerneffekt besteht in dem iterativen architektonischen Ansatz, den das Team verwendet hat, um die Anwendungsfälle und Problembereiche der Endbenutzer aufzudecken. Durch die Simulation der Architektur konnten sie Schwachstellen identifizieren und Kundenfeedback erhalten. Zusätzlich war die Verwendung von Design-Patterns entscheidend für die Beschleunigung des architektonischen Ansatzes. Die Verwendung von Abstraktion ermöglichte auch den Austausch unterschiedlicher Technologien im Verlauf des architektonischen Prozesses. Darren ist der Meinung, dass dieser Ansatz es einfach macht, Lösungen zu schaffen, die benutzerfreundlich sind und das vorhandene Wissen der Kunden nutzen.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
