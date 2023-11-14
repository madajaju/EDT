---
layout: posts
title: "Großer Speicher Software Definierter Speichercontroller"
number: 21
permalink: episode-EDT21-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 21
tags:
    - bigmemory
    - edge
    - compute
    - technology
    - memverge
    - optane
    - pmem
    - data

date: Sun Sep 13 2020 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Charles Fan

img: thumbnail.png
image: thumbnail.png
summary: "Charles Fan, CEO von MemVerge, spricht mit Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, über ihre neue Technologie, Big Memory softwaredefinierte Speichercontroller. Die Technologie nutzt den Intel 3D XPoint Optane persistenten Speicher, um effizient die Kluft zwischen aktuellen und zukünftigen Architekturen zu überbrücken und dabei eine größere Kapazität, geringere Kosten und Persistenz zu bieten."
video: "https://youtu.be/LTMWXuu59Po"
description: "Charles Fan, CEO von MemVerge, spricht mit Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, über ihre neue Technologie, Big Memory softwaredefinierte Speichercontroller. Die Technologie nutzt den Intel 3D XPoint Optane persistenten Speicher, um effizient die Kluft zwischen aktuellen und zukünftigen Architekturen zu überbrücken und dabei eine größere Kapazität, geringere Kosten und Persistenz zu bieten."
---

<div>
{% include transistor.html id="0458954e" title="#21 Big Memory Software Defined Memory Controller" %}

{% include youtube.html id="LTMWXuu59Po" %}
</div>

---

Die 3D XPoint Optane persistente Speichertechnologie von Intel war ein Meilenstein für MemVerge und ermöglichte es ihnen, softwaredefinierten Speicher zu entwickeln. Dieser wird als Ausdruck der Leistungsfähigkeit von Optane PMEM beschrieben.

## Die beste Art und Weise, PMEM zu nutzen.

MemVerge hat Big Memory-Software entwickelt, um der wachsenden Nachfrage von Anwendungen und Unternehmen gerecht zu werden, Daten in immer größeren Mengen und Geschwindigkeiten zu verarbeiten. Immer mehr Echtzeitanwendungen benötigen sofortige Einblicke und Maßnahmen aus den Daten. Dies erfordert eine neue, speicherzentrierte Infrastruktur, um Latenzanforderungen zu erfüllen.

Anwendungen, die KI, maschinelles Lernen oder Echtzeit-Big-Data-Analyse verwenden, verwenden in der Regel DRAM. Obwohl DRAM eine Latenz im Nanosekundenbereich aufweist und eine gute Leistungsfähigkeit und Kapazität bietet, hat es physische Einschränkungen wie Speicherdichte und wie viel in einem Server Platz findet. Es ist auch relativ teuer. Am wichtigsten ist jedoch, dass es flüchtig ist, und mit zunehmender Datenmenge wird die Speicherflüchtigkeit zu einer Einschränkung. PMEM beseitigt diese Engpässe, da Sie eine größere Kapazität, niedrigere Kosten und Persistenz haben können.

Ein wichtiger Vorteil besteht darin, dass Unternehmen ihre Anwendungen nicht neu schreiben müssen, um die Technologie von MemVerge zu nutzen. Das Unternehmen suchte nach der besten Möglichkeit, Persistenz zu nutzen, und die Antwort bestand darin, die Programmierparadigmen so wenig wie möglich zu stören. Als Optane PMEM als Speicherformfaktor verfügbar wurde, bot sich die Gelegenheit, wertvolle Software als Teil der Lösung zu entwickeln.

## Software Defined Memory

Software Defined Memory (SDM) ist eine Technologie, die es ermöglicht, den Zugriff auf Speicherressourcen in einem Computer durch Software zu verwalten und anzupassen. SDM ist eine Art von Speichervirtualisierung, bei der Software die Kontrolle über die Speicherressourcen übernimmt und sie nach Bedarf zuweist und konfiguriert.

Mit SDM können Entwickler und Systemadministratoren den Speicher in ihrem System optimieren und anpassen, um die Leistung und Effizienz zu verbessern. Durch die Bereitstellung dynamischer Speicherlösungen können sie den Bedarf an Speicher an die aktuellen Anforderungen anpassen und so Engpässe oder Ressourcenverschwendung vermeiden.

SDM kann auch die Integration von verschiedenen Arten von Speichergeräten erleichtern, wie zum Beispiel Festplatten, Solid-State-Laufwerke oder Cloud-Speicher. Dadurch haben Benutzer die Flexibilität, verschiedene Speichertypen je nach Anwendungsanforderungen zu nutzen.

Insgesamt ermöglicht Software Defined Memory eine effizientere Verwaltung und Nutzung der Speicherressourcen in einem Computing-System, was zu einer besseren Leistung und Flexibilität führt.

Es findet eine Datenverarbeitung statt. Aus Sicht der Hardware wird es in den nächsten zehn Jahren wahrscheinlich eine heterogenere Welt geben, sowohl in der Berechnung als auch in den Speicherlementen. Es wird ein neuer Übertragungsstandard wie CXL entstehen, der diese Elemente miteinander verbindet. Die größte Herausforderung wird sein, das Anwendungsökosystem zu bewegen. Eine Softwareebene ist erforderlich, um sie in verdauliche, zusammenfügbarere Teile umzuwandeln, die es der Anwendung erleichtern. Die softwaredefinierte Speicherlösung von MemVerge wird ein wichtiger Bestandteil dieses Bereichs sein.

In der Zwischenzeit baut MemVerge eine Brücke zwischen den aktuellen und zukünftigen Paradigmen. MemVerges Softwaredefinierter Speicher bringt dynamische SLA und QLS, Widerstandsfähigkeit, Anwendungsbeständigkeit, Effizienz und Leistung. Dies sind alles Dinge, die Sie normalerweise mit einem softwaredefinierten Speichernetzwerk erhalten, aber nun mit einem Speicher mit geringerer Latenz und extrem schneller Geschwindigkeit erhalten können.

## Leistung auf der Memory Machine

Zwei wichtige MEMVerge-Geistige-Eigentumsrechte sind im Einsatz. Das erste ist eine Software-Virtualisierungsschicht, die die Leistung des Speichers - die Kombination aus PMEM und DRAM - optimiert, die sehr nahe an der DRAM-Leistung liegt. Jede Workload hat unterschiedliche Leistungsprofile, die durch Mischen von PMEM und DRAM in unterschiedlichen Verhältnissen feinabgestimmt werden können. Diese Feinabstimmung von PMEM und DRAM ermöglicht es Anwendungsentwicklern und IT-Profis, den Speicher an ihre Anwendungen anzupassen, anstatt für die gesamte Maschine. Anstatt die vorhandenen DRAM- und PMEM-Verhältnisse für die gesamte Maschine zu konfigurieren, können Sie die Verhältnisse von PMEM und DRAM nun dynamisch ändern, je nach Arbeitslast, und sogar die Leistung auf DRAM-Niveau übertreffen.

## ZeroIO Schnappschuss (Persistieren von Anwendungsdaten)

Die zweite dieser Erfindungen ist der Speicher-Snapshot oder ZeroIO. Es ermöglicht das Fortbestehen bestehender flüchtiger Anwendungen ohne Neuschreibungen. Es funktioniert auf der Grundlage des softwaredefinierten Speichers, der ein flüchtiger Speicherdienst ist. Obwohl der zugrundeliegende PMEM persistent ist, ist ein flüchtiger Speicher erforderlich, um bestehende Anwendungen nicht zu beeinträchtigen. Die Persistenz wird durch Bereitstellung einer grafischen Benutzeroberfläche (GUI) und einer CI zur Verwaltung von Snapshots genutzt. Es gibt eine Snapshot-Funktionalität, mit der der Zustand einer gesamten Anwendung sofort erfasst werden kann. Diese Anwendung kann dann jederzeit in der Zukunft wiederhergestellt werden.

Dies macht Ihren Speicher nicht nur persistent, sondern auch hochverfügbar. Nach einem Absturz können Sie eine sofortige Wiederherstellung durchführen. Wenn Sie einen Fehler in der Datenbank machen, können Sie zu einem früheren Punkt zurückkehren. Sie können auch über dem Snapshot klonen, sodass Sie neue Instanzen einer Anwendung erstellen können, ohne den Speicher physisch zu replizieren. Dadurch können Sie mehrere unabhängige Prozesse erstellen, bei denen die logischen Speicherbereiche auf den gleichen physischen Speicherbereich abgebildet werden. Dadurch wird nicht nur Speicher gespart, sondern auch der Prozess des Instant-Klonens ermöglicht. Diese neue Technologie macht viele Dinge möglich, die zuvor unmöglich waren.

Es gibt keine architektonischen Änderungen an Ihrem Programm, aber wenn Sie etwas persistieren müssen, können Sie es einfach als Schnappschuss speichern. Dies verändert nicht das vertraute Modell der Programmierung, beschleunigt jedoch erheblich die Ein- und Ausgabe. Eine weitere großartige Funktion ist, dass Schnappschüsse verwaltbare Objekte werden, sodass sie an jedem Ort, an dem Sie die Anwendung neu starten können, transportierbar sind. Live-Migration kann auch in bestimmten Szenarien aktiviert werden.

## Zukunftsfähige Anwendungsszenarien

Für einen kleinen Einblick in die Zukunft plant MemVerge in etwa einem Jahr eine Version 2.0 mit einem SDK. Neben der Verwendung als transparente Speicherschicht werden neue Anwendungsentwickler eine neue Möglichkeit haben, ihre Daten dauerhaft zu speichern. Dadurch wird sowohl die Anwendungsentwicklung als auch die Modifikation bestehender Anwendungen vereinfacht.

Mit dem SDK können Entwickler Segmenten des Anwendungsspeichers oder des kompletten Speicherprofils speichern, wodurch der Anwendungsentwickler die Möglichkeit hat, Speicher mit den umständlichen ORM- oder Speicherzuordnungstechnologien von heute dauerhaft speichern zu können.

In Partnerschaft mit Intel wird MemVerge am 23. September 2020 die erste Version ihres Produkts mit dem softwaredefinierten Speicher und den Snapshot-Funktionen in der allgemeinen Verfügbarkeit einführen.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
