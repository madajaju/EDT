---
layout: posts
title: "Künstliche Intelligenz und Sicherheit"
number: 85
permalink: episode-EDT85-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 85
tags:
    - aiml
    - cybersecurity
    - devops
    - compute
    - technology
    - process

date: Wed May 04 2022 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "In dieser Folge diskutiert Darren die datenbezogenen Aspekte der künstlichen Intelligenz (KI) und die Bedeutung der Absicherung dieser Daten."
video: "https://youtu.be/NVcBCPpJ4rY"
description: "In dieser Folge diskutiert Darren die datenbezogenen Aspekte der künstlichen Intelligenz (KI) und die Bedeutung der Absicherung dieser Daten."
---

<div>
{% include transistor.html id="ffe877ee" title="#85 Artificial Intelligence and Security" %}

{% include youtube.html id="NVcBCPpJ4rY" %}
</div>

---

## KI-Fehler

Kürzlich forderte Darren eine Klasse von Gymnasial- und Hochschulstudenten, die sich mit KI beschäftigen, auf, KI-Fehlfunktionen zu finden. Sie fanden Beispiele wie Microsoft Tay, ein Chatbot, der aus Twitter zwanglose Gespräche gelernt hat und innerhalb von 24 Stunden rassistische und frauenfeindliche Kommentare aufgrund von Manipulation aus Twitter-Feeds abgab. Ein weiteres Beispiel war ein Ballverfolgungssystem des Inverness Football Club, das dazu gedacht war, einen Fußball zu verfolgen, aber stattdessen den kahlen Kopf eines Schiedsrichters verfolgte. Ernsthafter war ein Todesfall, als ein autonomes Fahrzeug von Uber einen Fußgänger außerhalb eines Zebrastreifens nicht erkannte und nicht anhielt.

## Bereitstellung von Lösungen

All diese KI-Fehlschläge hatten mit Daten zu tun. Bei der Bereitstellung von KI-Lösungen müssen Sie sich kritische Fragen stellen: Wo mache ich meine Schlussfolgerungen? Ist der Endpunkt sicher? Wenn Sie all Ihre Schlussfolgerungen am Endpunkt, beispielsweise bei der Objekterkennung mit einer Kamera, treffen, müssen Sie sicherstellen, dass dies sicher ist; niemand sollte in der Lage sein, die Daten, die Kamera oder das Modell zu manipulieren.

Eine weitere Frage ist, was wird bereitgestellt werden? Werde ich ein neuronales Netzwerk oder einen Algorithmus zum Randbereich deployen oder werde ich nur Daten vom Randbereich zurück in ein Rechenzentrum streamen, um dort die Schlussfolgerung zu erstellen? Darüber hinaus muss man sich fragen, wie oft die Modelle oder Algorithmen aktualisiert werden, wenn Künstliche Intelligenz operationalisiert wird.

## AI-Pipeline

Die Pipeline für die Entwicklung, das Training, das Testen, die Bereitstellung und die Inferenz von KI benötigt drei Dinge: die Anwendung, das Modell und die Daten. Diese drei Dinge müssen gemeinsam durch die Pipeline migrieren und gleichzeitig geschützt werden. Sie müssen sicherstellen, dass die Produktionsdaten selbst während der Produktion nicht manipuliert werden.

## KI-Sicherheitsbedrohungen

Die Bedrohungen für künstliche Intelligenz sind signifikant, sei es Spionage, Sabotage oder Betrug, da die Angriffsfläche groß ist.

## Angriffe

Zuerst kommen die Modelle. Ein Modell kann manipuliert werden, zum Beispiel indem jemand schwarze und weiße Aufkleber auf Stoppschilder klebt, sodass sie nicht als solche erkannt werden, oder indem jemand die Mustererkennung stört, um Angriffe unbemerkt zu lassen. Modelle müssen nicht nur während des Trainings, sondern auch während des Testens, der Bereitstellung und der Inferenz geschützt werden. Verschlüsselung, Zugriffskontrolle sowie Modell- und Versionskontrolle sind kritisch, genauso wie bei der Entwicklung einer Anwendung.

Quelltrainingsdaten und Produktionsdaten müssen ebenfalls vor Manipulation geschützt werden.

## Arten von Angriffen

Ein Papier des Belfer Center stellt die Bedrohungen auf einer Achse des Formats und einer Achse der Sichtbarkeit dar. Die Format-Achse reicht von physisch bis digital. Die Sichtbarkeitsachse reicht von wahrnehmbar bis unbemerkt.

## Physische Angriffe

Körperliche Angriffe können physische Gegenstände verändern, wie beispielsweise den Aufkleber auf dem Stoppschild. Diese Angriffe waren bereits frühzeitig bei autonomen Fahrzeugen und Gesichtserkennungssystemen erkennbar. Für diese Angriffe benötigen wir eine bessere Schulung der KI-Algorithmen unter Verwendung von verstärktem Lernen und Techniken des Lernens anhand negativer Fälle.

## Digitale Angriffe

Digitale Angriffe sind schwerer zu erkennen, da sie nicht sichtbar sind. Ein Angriff könnte weißes Rauschen in den Datenstrom eingefügt werden, um den Algorithmus zu stören. Diese Angriffe sind schwer zu bekämpfen, es sei denn, die Inferenz wird am Rand durchgeführt oder die Mustererkennung wird eingesetzt. Aus diesem Grund ist es unerlässlich zu wissen, von wo die Quelldaten stammen, sowohl bei der Quellenschulung, dem Testen als auch den Produktionsdaten.

## Identifizieren Sie die Datenquellen.

Datenquellen müssen aus öffentlichen Datenquellen verifiziert und getestet werden. Open-Source-Daten sind nicht gut geschützt. Betrachten Sie die Erzeugung eigener Datenquellen, um mehr Kontrolle zu haben. Wenn Sie eine gemeinsam genutzte Datenquelle verwenden, nutzen Sie ein Versionskontrollsystem wie GitHub oder GitLab, um die Konsistenz zu überprüfen. Testdaten benötigen ebenfalls Versionskontrolle, Zugangskontrolle und andere Sicherheitsmaßnahmen, wie Sie es typischerweise in einer DevOps-Pipeline tun.

Der letzte und anspruchsvollste Teil besteht darin, die Produktionsdaten zu schützen. Ein guter Anfang ist es, die Inferenz so nah wie möglich an den Daten durchzuführen. Eine Menge Spekulationen können direkt am Rand mit neuromorpher Verarbeitung und sogar Befehlssätzen in den Intel-Prozessoren durchgeführt werden, um das Risiko einer Manipulation der Daten während des Transports zu verringern. Stattdessen können Sie die Daten verschlüsseln und zurück zum Rechenzentrum senden.

Schützen und Verwalten von Daten / Sichere KI-Pipeline

Sobald Sie alle Ihre Datenquellen identifiziert haben, gibt es drei kritische Aspekte für den Schutz: Kontrolle, Sicherheit und Verschlüsselung.

Das Erste ist Kontrolle. Sie sollten eine Versionskontrolle, geschützte Bibliotheken und eine Sicherung und Wiederherstellung für den Fall von beschädigten Daten-Dateien haben. Dies sind standardmäßige gute Sicherheitspraktiken, die KI in der App-Entwicklung anwenden sollte.

Sicherheit sollte Zugriffsberechtigungen umfassen, sogar einige Zero-Trust-Konzepte wie den Zugriff nur für kurze Zeit auf Personen beschränken, die ihn benötigen. Bitte stellen Sie sicher, dass die Modelle nicht manipuliert werden und stellen Sie sicher, dass sie an spezifische Anwendungen gebunden sind.

Die Daten sollten sowohl im Ruhezustand, bei der Übertragung als auch bei der Verwendung verschlüsselt werden. Früher war dies kostspielig in Bezug auf die CPU-Auslastung und Zeit, aber heute erfolgt ein Großteil der Verschlüsselung auf Siliziumbasis und ist sehr schnell ohne nennenswerte Leistungseinbußen.

## Aufforderung zum Handeln

Daten sind der Schlüssel für ein erfolgreiches und sicheres KI-System, daher schützen sie und wenden Sie von Anfang an bewährte Sicherheitspraktiken an. Operationalisieren Sie die Pipelines, um die Mitarbeiter von der tagtäglichen Arbeit der Bereitstellung und des Testens von KI-Algorithmen zu befreien. Automatisieren Sie so viel wie möglich und integrieren Sie Sicherheitsmaßnahmen in die KI-DevOps-Pipeline, um Ihre Quelldaten, Modelle und Anwendungen zu schützen.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
