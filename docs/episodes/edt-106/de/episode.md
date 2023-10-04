---
layout: posts
title: "Die Geburt von Graph Intelligence Plattformen"
number: 106
permalink: episode-EDT106-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 106
tags:
    - data
    - graphintelligenceplatform
    - graphdb
    - katanagraph
    - technology

date: Mon Sep 19 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Greg Steck

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Intel’s Darren Pulsipher, Chief Solutions Architect, Public Sector und Greg Steck, Senior Director of Industry Solutions, Katana Graph, sprechen über die Vorteile von Katana's Graph Intelligence Plattform."
video: "https://youtu.be/Bx7yeMhnBJg"
description: "Intel’s Darren Pulsipher, Chief Solutions Architect, Public Sector und Greg Steck, Senior Director of Industry Solutions, Katana Graph, sprechen über die Vorteile von Katana's Graph Intelligence Plattform."
---

<div>
{% include transistor.html id="5fdeafa4" title="#106 The Birth of Graph Intelligence Platforms" %}

{% include youtube.html id="Bx7yeMhnBJg" %}
</div>

---

Greg begann seine Karriere bei einer Investmentbank im Bereich Kreditrisiko, als sie damit begannen, strengen Stresstests im Rahmen des CCAR durchzuführen. Nachdem er eine Zeit lang intensiv daran beteiligt war, begann er Beratungstätigkeiten und wurde dabei mit Grafiken vertraut, während er die Validierung von Kreditrisikomodellen durchführte. Er erkannte, wie Grafiken für viele verschiedene Arten von Analysen genutzt werden können und dabei Vorteile in der Datenverwaltung und im maschinellen Lernen haben, insbesondere bei der Kreditmodellierung. Von dort fand er den Weg zu Katana.

Datenanalysten und Datenwissenschaftler haben ständig Schwierigkeiten, verschiedene Datensätze zu integrieren. Greg wurde von Graphen angezogen, denn nachdem er in RDF, einem semantischen Wissensgraphenformat, eingeführt wurde, ergab es intuitiven Sinn, wie die Daten kombiniert und strukturiert werden könnten.

Mit vorhandenen Graph-Lösungen hatten Analysten Schwierigkeiten, ihre Lösungen zu skalieren, da ein Großteil ihrer Daten so umfangreich war. Katana Graph hat die Fähigkeit entwickelt, zu skalieren und sich auch auf maschinelles Lernen zu konzentrieren.

Am Anfang von Graphdatenbanken haben große Unternehmen wie Amazon und Facebook intern Graphdatenbanken aufgebaut, indem sie ihr Modellieren und maschinelles Lernen betrieben haben. Dann kamen Verbraucherversionen von Plattformen wie Neo4j und TigerGraph für allgemeine Anwendungsfälle. Die Herausforderung war, dass sie sich hauptsächlich auf die Datenbank konzentrierten und nicht so sehr auf die Analyse und das maschinelle Lernen, die Prozesse und die eigentliche Graphenberechnung. Sie waren darauf beschränkt, eine Art Datenspeicher zu sein, mit Schwerpunkt auf der Aufnahme und den CRUD-Operationen und nicht so sehr auf den Daten.

Es gibt drei verschiedene Arten von Graphbereichen für die Berechnung. Die erste ist die Graphabfrage, die Graphdatenbank und CRUD-Operationen. Die zweite ist die Graphanalyse und -mining mit PageRank oder Clustering-Algorithmen, die immer beliebter werden. Der dritte Bereich ist die Graph-KI und das maschinelle Lernen. Hier kommen graphbasierte neuronale Netze ins Spiel. Es gibt punktuelle Lösungen, die spezifische Teile dieser Bereiche lösen werden, aber Katana Graph befindet sich an der Schnittstelle dieser Bereiche.

Jede der drei Plattformen ist wichtig. Um Machine Learning zu machen, braucht man die anderen beiden Bereiche. Wenn die Daten zuerst aufgenommen werden, müssen sie viele Transformationen durchlaufen, um sie für das Machine Learning vorzubereiten. Wenn du nicht alles in einer Lösung hast, wird der Datenfluss langsam sein, da die Daten hin und zurück geschickt werden. Es ist effizienter, schnell an der gesamten Datenpipeline zu arbeiten. Es verringert auch das Risiko, Daten zu verlieren, da du die Anzahl der Datentransformationen reduzierst.

Darüber hinaus können Sie aufgrund der cloudbasierten Plattform von Katana Graph den Cluster anhalten, einen Prüfpunkt speichern, den Cluster herunterfahren und später wieder hochfahren, genau an der Stelle, an der Sie aufgehört haben.

Eine gute Demo befasst sich mit der Betrugserkennung anhand eines Bitcoin-Transaktionsdatensatzes. Die Plattform verarbeitet die strukturierten Daten, wobei die Bitcoin-Wallets die Knoten im Graphen sind und die Transaktionen die Kanten zwischen ihnen darstellen. Es handelt sich um einen einfachen Graphen. Das Ziel ist es, vorherzusagen, ob eine Bitcoin-Wallet betrügerisch ist. Illegale Wallets für Geldwäsche, Drogenhandel usw. wurden gekennzeichnet. Wenn ein neues Konto eingegangen ist, besteht die Aufgabe darin, vorherzusagen, ob es betrügerisch ist. Der anspruchsvolle Teil besteht dann darin, eine Vorverarbeitung der numerischen Merkmale der Konten durchzuführen. Zu diesem Zweck wurde ein Satz von APIs entwickelt, um dieses Problem anzugehen. Alle Vorbereitungen, die Datenwissenschaftler durchführen, um ihre Merkmale vorzubereiten, werden hier erledigt. Von dort aus ist der Graph bereit, in das maschinelle Lernmodell einzugeben, in dem er trainiert wird. Mithilfe von neuronalen Netzwerken kann dann gelernt werden, wie die Konten klassifiziert werden können.

Ein Vorteil der Plattform besteht darin, dass Datenwissenschaftler und Ingenieure von einer Plattform aus arbeiten können, anstatt Dinge zusammenzufügen.

Ein weiterer Vorteil ist die Gesamtbetriebskosten. Im Gegensatz zu anderen Plattformen müssen Sie die gesamte Grafikdatenbank nicht die ganze Zeit laufen lassen. Da Katana Graph Pipelines mit einer Trennung von Speicherung und Berechnung entwickelt wurden, können Sie problemlos einen Cluster starten, einige Batch-Verarbeitung durchführen und dann Inferenzierung in einem separaten System ausführen und trotzdem nutzen, was in der Grafik generiert wurde.

Katana Graph ist auch schneller mit großen Datensätzen, da es nicht sofort alle Daten lädt, sondern eine innovative, dynamische Methode hat, um die Daten zu laden, während sie benötigt werden, während Sie durch die Pipeline arbeiten.

Die grundlegenden Analysefunktionen sind auf einer Graphdatenbank viel einfacher als auf einer relationalen Datenbank. Wenn Sie zehn verschiedene Datensätze haben, kann es mühsam und fehleranfällig sein, für einen Analysten herauszufinden, wie sie verbunden werden können, um eine Abfrage in einer relationalen Datenbank zu schreiben. Mit einem Graphen haben Sie ein einheitliches, vordefiniertes und bereits aufgebautes Modell, sodass die Fragen viel einfacher sind, weil die Daten bereits miteinander verbunden sind. Sie können intuitiv sehen, wie die Informationen zusammenhängen.

Eine der neuen Funktionen von Katana ist ein Dash Data Frame Importeur. Dash ist ein gängiges Framework, das von Datenwissenschaftlern zur parallelen Verarbeitung von Datenrahmen verwendet wird. Die Datenwissenschaftler können mit dem bereits verwendeten Datenrahmen arbeiten und ihn direkt in den Katana Graph importieren, um eine nahtlose und vereinfachte Erfahrung zu ermöglichen.

DevOps ist ein wichtiger Teil dessen, was Katana mit ihrer Plattform unterstützen möchte. Sie integrieren problemlos in vorhandene Lernpipelines. Wenn die Graph-Neuronalen Netzwerke ausgeführt werden, können die Einbettungen exportiert werden. Die Features, die ein Graph generiert, können in einen maschinellen Lernprozess weitergeleitet werden. Dadurch wird die Integration wesentlich einfacher und leichter operativ umsetzbar und produktiv einsetzbar.

In den nächsten fünf Jahren stellt sich Greg vor, dass Organisationen wie Banken zentralisierte Repositories haben werden, um Kundendaten, Marketingdaten oder Kreditdaten für verschiedene Zwecke zu analysieren. Die Ausgabe von maschinellen Lernmodellen könnte zum Beispiel sowohl für die Kreditrisikobewertung als auch für die Betrugserkennung verwendet werden. Anstatt isolierte Datensätze mit viel Vervielfältigung und Duplizierung zwischen ihnen zu verwenden, gäbe es ein gemeinsames Modell, das innerhalb eines Graphen synchronisiert wird.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
