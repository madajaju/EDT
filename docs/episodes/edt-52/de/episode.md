---
layout: posts
title: "Telemetrie in der Cloud"
number: 52
permalink: episode-EDT52-de
lang: de
nav_exclude: true
nav_order: 52
tags:
    - cloud
    - data_management
    - aws
    - automation
    - multicloud
    - cybersecurity
    - technology
    - process

date: Mon Jun 07 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect bei Intel, spricht mit Josh Hilliker, Direktor der Cloud Solution Architects bei Intel, über die Verwendung von Telemetrie in der Cloud, um den Wert und die Effizienz zu maximieren."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solution Architect bei Intel, spricht mit Josh Hilliker, Direktor der Cloud Solution Architects bei Intel, über die Verwendung von Telemetrie in der Cloud, um den Wert und die Effizienz zu maximieren."
---

<div>
{% include transistor.html id="a732fe89" title="#52 Telemetry in the Cloud" %}

{% include youtube.html id="url" %}
</div>

---

## Vorteile von Cloud-Lösungsarchitekten (CSAs)

Die Rolle des CSA ist derzeit heiß begehrt in der Branche, und Intel hat ein Team von CSAs eingestellt, um Mehrwert für ihre Kunden zu bieten. CSAs können Kunden dabei helfen, den Ansatz des einfachen Kopierens und Verschiebens zu vermeiden, der zu unnötig hohen Kosten führt. Diese neuen CSAs bringen eine externe Perspektive mit und vernetzen sich mit der größeren CSA-Gemeinschaft, um Probleme zu lösen.

## Phasen der Telemetrie

Telemetrie in der Cloud sollte nicht nur auf den Cloud-Service-Anbieter beschränkt sein. Zum Beispiel hatte Amazon Web Services (AWS) im vergangenen November einen großen Ausfall an der Ostküste, und ihre Tools haben nicht richtig Bericht erstattet, so dass viele Kunden keine Ahnung hatten, dass sie offline waren. Organisationen benötigen ihre eigene Telemetrie für die Überwachung.

Die erste Phase ist keine Überwachung in der Cloud. Die zweite Phase beinhaltet die Offenlegung von Telemetrie, bei der Sie verstehen, was Sie erhalten, wie zum Beispiel CPU, Speicher und Netzwerk, aber es ist auf oberflächlicher Ebene. Die nächste Phase ist Überwachung und Handlungen, bei der Sie Benachrichtigungen über Verlangsamungen, Transaktionsraten, Reaktionsraten usw. erhalten. Die darauf folgende Phase liegt weiter unten im Stapel, wo die moderne intelligente Cloud Kontrolle ausübt und Vorhersagen für Maßnahmen trifft. Zuletzt kommt die vollständige Automatisierung. Hier werden Dinge von selbst betrieben, sie hören zu, reagieren und informieren dann im Nachhinein.

Ein Beispiel für vollständige Automatisierung wäre ein Rechenzentrum, das ein HVAC-System steuert, indem es die Temperatur in verschiedenen Teilen eines Gebäudes erfasst und reduziert oder erhöht. Bei Arbeitslasten kann eine intelligente Cloud die Arbeitslasten verschieben, um den Wert von Kapazität und Leistung zu maximieren.

## Aktuelle Ansätze und Begrenzungen

Oft vernachlässigen Kunden von Cloud-Dienstleistern die Automatisierung auf der Infrastrukturebene und vergessen die Auslastungsebene. Kunden benötigen Informationen, die über die Grundlagen hinausgehen; sie benötigen detaillierte und umfangreiche Telemetrie, um zu wissen, was wirklich passiert. Es ist ein Fehler, sich darauf zu verlassen, dass der Cloud-Dienstleister Ihre Interessen in Bezug auf Telemetrie im Blick hat, und dies kann zu hohen Kosten führen.

Einige Cloud-Service-Anbieter öffnen sich weiter. Derzeit ist AWS mit den von ihnen bereitgestellten Telemetriedaten ein Game Changer. Hoffentlich werden andere dem Beispiel folgen.

## Lassen Sie uns die richtige Telemetrie sammeln...

Das Auswählen der richtigen Instanzen ist wichtig. Nicht alle Kerne sind gleich; verschiedene Kerne werden für verschiedene Zwecke verwendet, und es ist wichtig zu verstehen, was sie sind, um die beste Leistung und den besten Preis zu erhalten.

Welche Art von Informationen können Sie sammeln? Intels Produktgestaltung umfasst Leistungsmessgeräte (PMUs). Diese sind Untereinheiten und liefern Informationen über Transaktionen, Verzögerungen, Latenzzeiten und Engpässe. Es gibt drei verschiedene Lager bei PMUs: Kern, außerhalb des Kerns und uncore. Diese PMUs sammeln Informationen über CPI, Auslastung, Frequenz und TMAM. All diese Daten sind über AWS verfügbar.

Mit Metriken und echter Telemetrie kann man seine Arbeitslasten optimieren. Man könnte beispielsweise vergleichen, wie eine Arbeitslast in einem eigenen Rechenzentrum im Vergleich zu AWS läuft und Metriken verwenden, um herauszufinden, auf welcher Plattform die Arbeitslasten besser funktionieren würden.

## IT Relevanz

Das Schichten von Telemetrie mit Benchmarking ist eine ultimative Lösung. Mit dem Benchmarking können Sie Ihre Ausgabe kennen und mit der Telemetrie können Sie CPI, Auslastung und Frequenz betrachten und haben das volle Dashboard, um zu sehen, was passiert. Sie möchten das Gleiche in der Cloud tun, anstatt nur Arbeitslasten auf eine scheinbar günstigere Instanz zu übertragen.

IT-Experten sollten keine Angst haben, ihren Job zu verlieren, weil alles in die Cloud verlagert wird. Stattdessen sollten sie ihre Fähigkeiten nutzen, um Benchmarking-Telemetrie zu erlernen, anstatt eine "Lift and Shift"-Mentalität zu haben. Die Beherrschung der Cloud-Nutzung beinhaltet auch die Verwendung cloudnativer Funktionen wie Kubernetes und Container. Telemetrie funktioniert auch in diesen Bereichen. Mit Intels C-Advisor erhält man umfassende Telemetrie-Daten wie Kern- und Nebenkern-Daten aus den Containern.

Obwohl es ein wenig einschüchternd erscheint, wenn man sich alles ansieht, was in der Cloud möglich ist, ist es am besten, klein anzufangen. Schauen Sie sich die richtigen Anwendungen basierend auf Risiko an. Katalogisieren Sie Ihre Apps, betrachten Sie die Einstufung der Anwendungen und verschieben Sie sie dann in größeren Teilen mit ähnlichen Funktionen und Apps in die Cloud. Wenn Sie sich neue Dienste ansehen und neue Anwendungen lernen, betrachten Sie die dahinter liegende Architektur und stellen Sie die richtigen Fragen, um ein besser informierter technischer Architekt zu sein.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
