---
layout: posts
title: "Praktische Anwendungsfälle für Optane Persistent Memory"
number: 51
permalink: episode-EDT51-de
has_children: false
lang: de
nav_exclude: true
parent: Folgen
grand_parent: Deutsch
nav_order: 51
tags:
    - dataarchitecture
    - memverge
    - pmem
    - optane
    - technology
    - data

date: Wed Jun 02 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Chief Solution Architect bei Intel, spricht mit Charles Fan, CEO von MemVerge, über Anwendungsfälle ihrer Software, die Intels Optane Persistent Memory auf innovative Weise nutzt und Engpässe zwischen Speicher und Datenspeicher beseitigt."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solution Architect bei Intel, spricht mit Charles Fan, CEO von MemVerge, über Anwendungsfälle ihrer Software, die Intels Optane Persistent Memory auf innovative Weise nutzt und Engpässe zwischen Speicher und Datenspeicher beseitigt."
---

<div>
{% include transistor.html id="442f5ddb" title="#51 Practical Optane Persistent Memory Use Cases" %}

{% include youtube.html id="url" %}
</div>

---

MemVerge hat im September 2020 die erste Version ihrer Software ausgeliefert, und trotz der Pandemie, die die Aufklärung der Kunden über die neue Technologie verlangsamt hat, hat sich ein gutes Muster von Anwendungsfällen herausgebildet.

## Kostensenkung für Cloud-Service-Anbieter

Die wichtigste Kennzahl für einen Cloud-Service-Anbieter ist, wie viele virtuelle Maschinen (VMs) sie ihren Kunden zur Verfügung stellen können und zu welchen Kosten. Die Größe des Arbeitsspeichers auf den Servern wird zum Engpass dafür, wie viele VMs pro Server zugewiesen werden können und begrenzt, wie niedrig ihr Preis pro VM sein kann.

Die MemVerge-Software mit Optane liefert eine größere Menge an Speicher pro Server und ermöglicht die Zuweisung einer größeren Anzahl von virtuellen Maschinen (VMs), wodurch die Kosten pro VM gesenkt und die Wettbewerbsfähigkeit von Cloud-Service-Anbietern erhöht wird. Die Kosten pro VM könnten um das Dreifache günstiger sein.

## Zuverlässigkeit bei großen Speicherdatenbanken

Finanzkunden wie Börsen, Banken und Investmentfonds verwenden umfangreiche Speicherdatenbanken und In-Memory-Anwendungen. Neben der Erhöhung ihres Speicherplatzes, um mehr Instanzen pro Server zu haben, löst MemVerge Verfügbarkeitsprobleme von Speicherdatenbanken. Wenn die Daten nicht ständig auf dem Speichermedium gespeichert werden, sondern nur im Speicher liegen, gehen alle Intraday-Daten bei einem Absturz verloren. Das ist katastrophal. Selbst wenn alle Transaktionen erfasst wurden, muss das Protokoll erneut abgespielt werden, um die Datenbank wiederherzustellen, was viele Minuten oder sogar Stunden dauern kann.

MemVerge bietet einen neuen Datendienst an, der In-Memory-Snapshots hat. Er speichert den Datenbankzustand auf Optane dauerhaft und das ist wesentlich schneller als auf Speichermedien zu speichern. Falls es zu einem Absturz kommt, hast du den letzten auf persistentem Speicher erfassten Snapshot und kannst dich davon wiederherstellen. Die Wiederherstellung dauert nur eine Minute oder zwei, daher ist es eine Verbesserung um das 60- bis 100-fache.

## Reduzierung der genomischen Sequenzierung durch Speicherabbildung

Im Bereich der Genomik erhöht die MemVerge-Software in Kombination mit Optane die Produktivität exponentiell. In einem mehrstufigen Datenanalyse-Workflow bedeutet mehr Speicher mehr Parallelität der Pipeline und Verarbeitung, sodass der gesamte Prozess schneller ist. Auch die Snapshot-Funktion ist hier praktisch. Wenn eine Organisation beispielsweise Krebs- oder COVID-Forschung betreibt und DNA- oder RNA-Sequenzen erstellen muss, muss sie etwa 50 Verarbeitungsschritte durchlaufen. Jeder Schritt kann Stunden dauern, und es ist notwendig, den Zustand der Zwischenberechnungsergebnisse zu überprüfen - zum einen für das erneute Ausführen oder Reproduzieren der Ergebnisse und zum anderen für den Vergleich der Ergebnisse, wenn einige Daten verändert werden. Die Zwischenstände werden auf dem Speicher gespeichert und das dauert zwischen fünf und 30 Minuten. In vielen Fällen kann dies zeitaufwändiger sein als die eigentliche Berechnung. Wenn eine Aufgabe also 24 Stunden dauert, könnte man acht Stunden für die Berechnung und 16 Stunden nur für diese IO-Aufgaben verwenden, um diese Zwischenstände zu speichern.

Anstatt IO durchzuführen, verwendet MemVerge nach jedem Schritt einen Schnappschuss und speichert ihn im Optane Persistent Memory. Anstatt 16 Stunden IO dauert dieser Prozess nur eine Minute. Es ist die neue Art IO durchzuführen; man muss keine Serialisierung oder Deserialisierung durchführen, um eine Datei zu öffnen, zu lesen, zu schreiben, usw. Alles was man tun muss, ist einen Schnappschuss zu machen.

Obwohl dies viel Speicher benötigt, ist der Speicher mit MemVerge größer als zuvor und wird sich weiter verbessern, während Intel innoviert. Zwei weitere Funktionen helfen bei diesem Problem. Erstens werden regelmäßig Schnappschüsse erstellt, ohne vollständige Kopien des Speicherzustands zu erzeugen. Es handelt sich nur um Änderungsseiten, sodass der zusätzliche Speicherverbrauch minimiert wird. Zweitens kann MemVerge bis zu 256 Ebenen von Schnappschüssen im Speicher behalten, während Sie gleichzeitig diese Schnappschüsse auf Speicherserver oder Ihre eigenen Speichersysteme exportieren können. Dies erfolgt ohne Beeinträchtigung oder Auswirkung auf Ihre laufende Anwendung.

Im Grunde genommen erstellst du einen Speicher-DVR, denn anstatt deine Anwendung nur vorwärts laufen zu lassen, kannst du auch nahezu sofort rückwärts laufen. Es ist eine neue Erfahrung.

Die Genomik ist nur das erste Beispiel für viele Arbeitslasten, die von dieser Technologie profitieren könnten.

Da MemVerge ein Startup ist, konzentrieren sie sich eng auf die drei Bereiche Cloud-Service-Anbieter, finanzielle Anwendungen mit großem Speicher, Genomik und verwandte Data-Science-Pipeline-Aufgaben. Aber all diese Anwendungsfälle beweisen die Kraft der Kombination aus Optane Persistent Memory und MemVerge Software.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
