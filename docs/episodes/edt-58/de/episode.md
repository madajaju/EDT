---
layout: posts
title: "Verständnis von Problemen bei Edge bis zum Rechenzentrum"
number: 58
permalink: episode-EDT58-de
has_children: false
lang: de
nav_exclude: true
parent: Folgen
grand_parent: Deutsch
nav_order: 58
tags:
    - data
    - edge
    - compute
    - edgemere
    - edgetocloud
    - cybersecurity
    - technology
    - process

date: Wed Jul 21 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect bei Intel, skizziert die häufigen Probleme in Edge-zu-Rechenzentrum-Architekturen, die er im öffentlichen Sektor beobachtet und mit Kunden diskutiert hat. Er stellt die ideale Architektur vor, um diese Probleme zu lösen."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solution Architect bei Intel, skizziert die häufigen Probleme in Edge-zu-Rechenzentrum-Architekturen, die er im öffentlichen Sektor beobachtet und mit Kunden diskutiert hat. Er stellt die ideale Architektur vor, um diese Probleme zu lösen."
---

<div>
{% include transistor.html id="51a240b0" title="#58 Understanding Edge to Data Center Problems" %}

{% include youtube.html id="url" %}
</div>

---

## Mission Integration can be translated to German as "Mission Integration" or "Missionseingliederung".

Es gibt viele bewegliche Teile, wenn es darum geht, Fähigkeiten in einer Mission einzusetzen, insbesondere im Verteidigungsministerium, aber auch in Veteranenangelegenheiten, Homeland Security, FDA und FEMA, beispielsweise, und die Daten von Edge-Geräten zurück zu Bodenstationen und regionalen und Unternehmens-Rechenzentren zu bringen. Die Daten müssen für große Analyseströme in KI-Arbeitsabläufen nutzbar und zuverlässig sein und den Analysten zur Verfügung stehen, um Entscheidungen auf Grundlage der Rohdaten zu treffen.

## Treiber für Edge: Latenz, Bandbreite, Sicherheit, Konnektivität

Ein Teil des Puzzles besteht darin, dass Edge-Geräte immer ausgefeilter werden und mehr Daten sammeln als wir jemals auf 5G werfen könnten. Die Hoffnung, dass 5G alle Daten erobert und sie nahtlos für das Rechenzentrum verfügbar macht, hat sich mit den Fortschritten bei IoT-Geräten nie verwirklicht.

Einer der ursprünglichen Architekturen rund um das Internet der Dinge wurde von Cisco entwickelt und "Fog" genannt. Die Idee des Fogs bestand darin, dass das Rechenzentrum den Nebel mit den Edge-Geräten verband, sodass dort ein Teil der Verarbeitung und Konnektivität stattfinden konnte. Wenn die Netzwerkverbindung zuverlässig und konsistent ist, funktioniert dies gut mit ausreichender Bandbreite. Die Menge an Daten, die jedoch heute an den Rändern von Organisationen generiert wird, übersteigt jegliche verfügbare Bandbreite.

Mit IoT wird nur ein Teil der Daten ins Rechenzentrum verschoben, so dass der Datenwert im Allgemeinen nur dort analysiert wird. Das Problem ist, dass das Rechenzentrum nicht in der Lage ist, alle Big Data zu speichern und aufzunehmen. Selbst das Verschieben in die Cloud löst das Problem nicht, da die Cloud nicht in der Lage ist, alle Daten zu verarbeiten, die am Rand liegen. Deshalb möchten wir uns davon abwenden, alle Daten zum Rechenzentrum zu senden, um den Wert zu erfassen, und stattdessen den Datenwert so nahe wie möglich an den Rand zu bringen, um die Datenmenge, die zum Rechenzentrum zurückkommt, zu verringern.

Natürlich kann nicht alle Daten an den Rand geschoben werden; es muss eine Korrelation zwischen verschiedenen Edge-Geräten geben. Der Wert muss an einem zentraleren Ort liegen, nicht unbedingt im zentralen Rechenzentrum, sondern möglicherweise in einem dieser Zwischenfogs oder regionalen Rechenzentren. Die Schlüssel besteht darin, Daten intelligent zu verschieben und den Datenwert so nah wie möglich am Rand auf eine wiederholbare und nachhaltige Weise zu positionieren. Dadurch können wir viel schneller auf den Rand reagieren.

## Gängige physikalische Schicht

Um einige dieser Probleme zu überwinden, brauchen wir zunächst eine gemeinsame physische Ebene. Das bedeutet, dass sie vom Rechenzentrum über die Nebel-Schichten bis hin zu den Edge-Geräten gemeinsam ist. Es gibt einen Weg, um die Geräte zu verwalten und zu steuern und Unterstützung auf eine zuverlässige, gemeinsame Weise zu erhalten. Das bedeutet nicht unbedingt die gleiche Maschine, sondern ein minimales funktionsfähiges Gerät mit einer gemeinsamen Schnittstelle. Ein weiterer Vorteil der gemeinsamen physischen Ebene besteht darin, dass, wenn Sie Code für eine Anwendung schreiben, er überall in diesem Ökosystem ausgeführt werden kann. Intel hat einige großartige Technologien dafür, wie zum Beispiel oneAPI, das einen Großteil der Arbeit erledigt, damit Sie Code einmal schreiben, die Binärdateien für die verschiedenen Arten von Geräten kompilieren, sie auf die gemeinsame physische Ebene übertragen und er entsprechend ausgeführt wird. Kurz gesagt, die Vorteile sind ein gemeinsames Betriebsmodell, ein gemeinsames Sicherheitsmodell und ein Schreib-einmal-ausführen-überall-Betriebsmodus.

## Software Defined Infrastructure - Softwaredefinierte Infrastruktur

SDI gilt für das Rechenzentrum in privaten und öffentlichen Clouds mit ihren softwaredefinierten APIs. Mit SDI am Rand erhalten wir gemeinsame Methoden zum Verschieben von Daten. Wir können Ressourcen am Rand im Rechenzentrum jederzeit bereitstellen und Daten auf diese Weise nahtloser übertragen.

## Verteilte Informationsmanagement-Schicht

Wir müssen intelligenter mit der Verwaltung und Klassifizierung von Daten umgehen, indem wir die Daten nur dorthin bewegen, wo sie verarbeitet werden sollen - sei es am Rand, in einem regionalen Rechenzentrum oder in der Cloud. Wichtige Aspekte sind die Katalogisierung und Wiederverwendung von Daten sowie die Einhaltung von Compliance- und Sicherheitsanforderungen. Der Vorteil dieser verteilten Informationsmanagement-Schicht besteht darin, dass weniger Daten ins Rechenzentrum übertragen, weniger Daten bewegt und der Mehrwert an den Randbereich gebracht wird.

## Service-Management-Schicht

Um den Wert wirklich bis an den Rand zu bringen, müssen wir in der Lage sein, Anwendungen bis an den Rand zu verteilen. Hier kommt eine Service-Verwaltungsschicht oder ein Container-Ökosystem ins Spiel. Dadurch ist es möglich, Microservices wiederholbar und zuverlässig bis an den Rand, in die Nebelzone, ins Rechenzentrum oder in die Cloud zu bringen. Wenn beispielsweise ein regionales Rechenzentrum ausfällt, muss man sich nicht darauf verlassen, dass das Service-Mesh weiterhin funktioniert.

## Anwendungsschicht für Dienste

Eine Anwendungsservicelage koordiniert verschiedene Anwendungen, sodass Sie Workflows erstellen können, die den tatsächlichen Geschäftswert aus den Daten generieren. Es genügt nicht nur, die Daten zu verschieben oder durch eine Analytics Engine laufen zu lassen. Die Daten müssen von der Analytics Engine zu einer Analystenarbeitsstation übertragen werden. Einige Werkzeuge in dieser Ebene wären Robotic Process Automation und DevOps-Pipelines. Hier können Sie auch Sicherheit und Compliance auf Anwendungsebene durchsetzen.

## Sicherheits- und Identitätsstufen

Der wichtigste Aspekt der Identitätsebene besteht darin, Vertrauen zwischen ordnungsgemäß identifizierten Entitäten herzustellen. Wir müssen verstehen, wer auf was zugreift und welche Geräte auf welche Daten, zu welcher Zeit und wo zugreifen. Die Identität wird über den typischen Benutzer hinaus in die Identität von Daten, Edge-Geräten, Nebel, Rechenzentren und der Cloud einbezogen.

Die Zwillingsschwester der Identität ist Sicherheit. Hier haben wir Erkennung, Behebung, Verschlüsselung und das Festlegen des Vertrauensgrundes. Dies führt zu Zuverlässigkeit, Vertrauen, Daten und Compliance. Nun kann intelligente Daten an den Rand (edge) geschoben werden und von dort aus zum Rechenzentrum hochgeladen werden, ohne große Mengen an Rohdaten zu verschieben, sondern nur das, was man auf sichere Weise benötigt.

## Hochrangiger Überblick

Um eine erfolgreiche Edge-to-Cloud-Architektur zu haben, die wiederholbar ist, sind all diese verschiedenen Elemente notwendig. Wir haben gesehen, dass einige Organisationen eine maßgeschneiderte Edge-to-Cloud-Architektur erstellen und dann stecken bleiben, wenn sie eine neue Funktionalität in diesem Bereich implementieren wollen. Wenn sie zum Beispiel die Daten, die sich am Edge befinden, fest codieren, weil sie immer am Edge verarbeiten werden, oder im Rechenzentrum für eine Anwendung, die immer im Rechenzentrum verarbeitet wird, führt dies zu Starrheit. Es erhöht auch die Zeit, die benötigt wird, um neue Fähigkeiten einzuführen, möglicherweise Jahre anstatt Monaten. Wenn wir aus den wiederholten Anwendungsimplementierungen im Edge-to-Cloud-Bereich lernen und anfangen zu verallgemeinern, stellen wir schnell fest, dass sie in eine der von uns identifizierten Ebenen fallen.

Für weitere Informationen schauen Sie sich bitte dieses Papier (inklusive Link) über die übergreifende Sichtweise dieser Architektur von Edge bis zur Cloud an. Wir schreiben nicht vor, was in diesen Boxen enthalten sein soll, aber entscheidend ist das Verständnis der Anwendungsfälle, die sie umfassen. Wir haben Ideen darüber, was in jeder Schicht enthalten ist, und wir bauen Ökosysteme auf, um den einzigartigen Anforderungen Ihrer Organisation innerhalb dieser Schichten gerecht zu werden.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
