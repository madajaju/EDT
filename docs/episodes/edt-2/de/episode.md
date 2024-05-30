---
layout: posts
title: "Folge dem Bit"
number: 2
permalink: episode-EDT2-de
lang: de
nav_exclude: true
nav_order: 2
tags:
    - iot
    - datamanagement
    - cloud
    - security
    - zerotrust
    - cybersecurity
    - process
    - technology

date: Wed Jun 17 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "In dieser Episode interviewt Darren Greg Clifton, den Direktor des Department of Defense (DOD) und der Intelligence für Intel Corp. Sie diskutieren die Herausforderungen des Datenmanagements in einem komplexen System, das mehrere Clouds, Unternehmensrechenzentren, regionale Rechenzentren und taktische Randgebiete umfasst. Hören Sie Darren und Greg zu, wie sie einem Datenfragment von der Erfassung über seine Reise durch dieses Ökosystem bis zur Erzeugung verwertbarer Informationen für Analysten und Kämpfer folgen. Hören Sie Darren und Greg dabei zu, wie sie einige der Hindernisse in dieser großen, zirkulären Umgebung besprechen und Lösungen diskutieren, um verwertbare Informationen zu Analysten und zurück zu Kämpfern zu bringen."
video: "https://youtu.be/url"
description: "In dieser Episode interviewt Darren Greg Clifton, den Direktor des Department of Defense (DOD) und der Intelligence für Intel Corp. Sie diskutieren die Herausforderungen des Datenmanagements in einem komplexen System, das mehrere Clouds, Unternehmensrechenzentren, regionale Rechenzentren und taktische Randgebiete umfasst. Hören Sie Darren und Greg zu, wie sie einem Datenfragment von der Erfassung über seine Reise durch dieses Ökosystem bis zur Erzeugung verwertbarer Informationen für Analysten und Kämpfer folgen. Hören Sie Darren und Greg dabei zu, wie sie einige der Hindernisse in dieser großen, zirkulären Umgebung besprechen und Lösungen diskutieren, um verwertbare Informationen zu Analysten und zurück zu Kämpfern zu bringen."
---

<div>
{% include transistor.html id="caf42ad5" title="#2 Follow the Bit" %}

{% include youtube.html id="url" %}
</div>

---

## Internet der Dinge ist der Anfang.

Die weitverbreitete Implementierung des Internets der Dinge (IoT) dauert länger als von der Branche erwartet. Viele geben die Verzögerungen bei der Einführung und Bereitstellung von 5G weltweit dafür verantwortlich, aber es gibt ein weiteres Problem, das die Einführung robuster IoT-Systeme verlangsamt: das Management der Komplexität. Da Daten vom Rand über den aggregierten Rand, das Netzwerk, das Rechenzentrum und die Cloud durch das System fließen, ist die Absicherung der Daten eine große Sorge, da die Angriffsfläche außerhalb des traditionellen Rechenzentrums zunimmt. Es gibt punktuelle Lösungen, die diese Probleme verbessern, aber es gibt noch keine vollständige Lösungsarchitektur, die alle Probleme mit diesem datenzentrumlosen Ansatz löst.

## Komplexität der DoD-Umgebung

Das Internet der Dinge (IoT) ist bereits komplex und das US-Verteidigungsministerium (DOD) erhöht die Komplexität durch die Art der Produzenten und Verbraucher der Daten. Auf der Produzentenseite werden Sensoren an Satelliten, Flugzeugen, Schiffen und Fahrzeugen angebracht; sogar die Kriegskämpfer selbst sind im Grunde genommen mobile Rechenzentren. Die Menge an Daten, die diese Edge-Geräte erzeugen, kann ein Netzwerk überfordern. Die Anzahl der heterogenen Geräte kann das Management scheinbar nahezu unmöglich machen, insbesondere wenn die Geräte mit unterschiedlichen Protokollen kommunizieren und verschiedene Klassifizierungsstufen haben. Mit anderen Worten, das Sammeln der Daten ist nicht das Problem; die Herausforderung besteht darin, sie schnell und in einem nützlichen Format in die Hände der Entscheidungsträger zu bringen.

Darüber hinaus kann die Konnektivität bei Edge-Geräten problematisch sein. Feindliche Umgebungen, in denen die Netzwerkkonnektivität zu einem Rechenzentrum nicht vorhanden oder bestenfalls instabil ist, können die Datenverarbeitung verzögern. Das bedeutet, dass eine Lösung in diesem Bereich sowohl im verbundenen als auch im getrennten Betriebsmodus funktionieren muss. Die Liefergeschwindigkeit ist ein entscheidender Erfolgsfaktor; Leben können auf dem Spiel stehen, wenn Entscheidungen aufgrund verzögerter Daten getroffen werden.

## Gemeinsamer Rahmen für Anwendungen, Daten und Sicherheit.

Offensichtlich benötigen wir Lösungen für diese Probleme. Von größter Bedeutung ist ein gemeinsamer Rahmen zur Bewältigung der Komplexität dieser neuen IT-Architekturen, die außerhalb der traditionellen Rechenzentren liegen. Der Rahmen muss sich mit der Verwaltung von Anwendungen, Daten und Sicherheit befassen. Wir müssen in der Lage sein, tragbare und wiederverwendbare Anwendungen überall im System bereitzustellen, vom Rand bis zur Cloud: die "write once, run anywhere" Doctrin. Dies ermöglicht es uns, Anwendungen schnell zu entwickeln, zu testen und bereitzustellen, ohne alle Kombinationen von Hardware-Konfigurationen im Ökosystem einrichten zu müssen. Die Verwendung von Tools im Container-Ökosystem sollte dabei helfen. Tools basierend auf Kubernetes (K8s) sind eine gute Wahl, da sie zum de facto Standard in der DevOps-Gemeinschaft geworden sind.

Die Verwaltung von Anwendungen in Isolation reicht jedoch nicht aus. Alle Anwendungen benötigen in gewisser Weise Daten. Daher ist es entscheidend, zu verstehen, wo sich die Daten befinden, wohin sie gehen und wie sie klassifiziert sind, um erfolgreiche Lösungen zu erreichen. Wir benötigen eine gemeinsame Betriebsumgebung zur Verwaltung und Kontrolle der verschiedenen Datenkategorien wie Domänen, Sicherheitsgrenzen, Governance, Datenlebenszyklus-Management und Datennähe. Eine gemeinsame Betriebsumgebung erhöht die Flexibilität und Geschwindigkeit bei der Bereitstellung von Anwendungen.

Es ist auch ein gemeinsamer Sicherheitsrahmen erforderlich. Die entscheidende Frage ist, wie Sie Ihre Daten in all ihren Formen sichern und dennoch teilen. Es gibt derzeit Hardware- und Softwarelösungen sowie eine kontinuierliche Weiterentwicklung in diesem Bereich. Grundlegende Sicherheitslösungen wie Verschlüsselung sollten die Basis bilden. Natürlich erfordert dies die richtige zugrundeliegende Engine für Speicherung und Leistungsfähigkeit. Eine weitere Sorge besteht darin, dass fehlerhafte oder böswillige Daten in das System gelangen. Die Etablierung eines Vertrauensanker als Grundlage ist auch in diesem großen Ökosystem erforderlich.

## Verarbeitung am Rand, Rechenzentrum und in der Cloud.

Wo kommt Intel in dieser Umgebung ins Spiel? Wir können die zugrunde liegende Infrastruktur bereitstellen, die diese Systeme in Leistung und Energie unterstützt. Egal, ob Sie Sensordaten in einer energieeffizienten Umgebung (denken Sie an Atom- und maßgeschneiderte ASIC-Designs) verarbeiten oder Künstliche Intelligenz Training oder Inferenz in Ihrem Rechenzentrum durchführen (Xeon- und neuromorphes Computing), Intel hat einen Prozessor, der helfen kann, Rohdaten in wertvolle, handlungsorientierte Informationen umzuwandeln - die Schlüsselkomponente in dieser komplexen, auf Missionen ausgerichteten Umgebung.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
