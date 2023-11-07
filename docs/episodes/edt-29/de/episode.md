---
layout: posts
title: "Nächste Generation der Hyperscale-Datenbank - Aerospike"
number: 29
permalink: episode-EDT29-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 29
tags:
    - aerospike
    - database
    - ingestion
    - optane
    - data
    - technology
    - pmem

date: Wed Nov 11 2020 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Tim Faulkes

img: thumbnail.png
image: thumbnail.png
summary: "Datenbanken zeigen ihr Alter und benötigen immer noch Zeit, um Ergebnisse zu liefern. Aerospike durchbricht mit Hilfe von Intel-Technologie (Optane) Geschwindigkeits-, Volumen- und Latenzprobleme. Tim Faulkes, Vice President Solutions Architecture bei Aerospike, spricht mit Darren Pulsipher, Chief Solutions Architect bei Intel, über die Vorteile der Aerospike-Technologie."
video: "https://youtu.be/btMNND3AH7Q"
description: "Datenbanken zeigen ihr Alter und benötigen immer noch Zeit, um Ergebnisse zu liefern. Aerospike durchbricht mit Hilfe von Intel-Technologie (Optane) Geschwindigkeits-, Volumen- und Latenzprobleme. Tim Faulkes, Vice President Solutions Architecture bei Aerospike, spricht mit Darren Pulsipher, Chief Solutions Architect bei Intel, über die Vorteile der Aerospike-Technologie."
---

<div>
{% include transistor.html id="1280ea95" title="#29 Next-Generation Hyperscale Database - Aerospike" %}

{% include youtube.html id="btMNND3AH7Q" %}
</div>

---

## Nächste Generation Hyperscale-Datenbank

Datenbanken zeigen ihr Alter und benötigen immer noch einige Zeit, um Ergebnisse zu liefern. Aerospike durchbricht jedoch mit Hilfe der Intel-Technologie Barrieren in Bezug auf Geschwindigkeit, Kapazität und geringe Latenz. Tim Faulkes, Vice President of Solutions Architecture bei Aerospike, ist in dieser Folge zu Gast und bespricht die Vorteile ihrer Technologie mit Darren.

## NoSQL - Ein aufstrebender Markt mit mehreren Technologien.

Aerospike wurde 2009 gegründet, mit den ersten produktiven Einsätzen im Jahr 2011. Die Mitbegründer waren sich der bevorstehenden Herausforderungen bewusst. Sie haben die Architektur von Grund auf so aufgebaut, dass sie zuverlässig, skalierbar für Unternehmen ist, nie ausfällt und große Datenmengen verarbeiten kann. Die Architektur von Aerospike basierte stark auf SSDs, sowohl auf NVMe-Laufwerken in modernen Ausführungen als auch auf SATA SAS-Laufwerken. Beide befanden sich noch in den Anfängen, daher waren die Gründer zukunftsorientiert in Bezug auf den Markt. Sie verließen sich auf diese Geräte, um Geschwindigkeit zu erreichen, und deshalb war die Intel-Technologie so wichtig. Seitdem haben andere Technologien von Intel, wie der nichtflüchtige Speicher, die Dinge wesentlich vereinfacht.

## Indizes im DRAM, Daten auf SSD

Aerospike geht Datenbanken anders an. Die SSDs sind keine schnelleren Festplatten. Eine Festplatte hat physische Sektoren und Köpfe und Dinge, die sie bewegen muss, um Daten zu lesen. Eine SSD kann Tausende von Datenstücken parallel schnell lesen. Es läuft nicht gut auf Rotationslaufwerken, aber mit NVMe/SSD läuft es blitzschnell. Niemand hat die gleiche Art von Leistung, nicht einmal in einer Speicherdatenbank.

Die einzigartige Architektur ist für hohe Durchsatzraten, hohe Datenmengen und sehr geringe Latenzzeiten konzipiert. Zum Beispiel führen einige Kunden regelmäßig 20 Millionen Transaktionen pro Sekunde durch. Einige von ihnen verarbeiten sogar Petabytes an Daten. In der Regel verwenden Kunden hochwertige Hardware, aber die Round-Trip-Zeit ist entscheidend. Aerospike benötigt etwa 200 Mikrosekunden, um Daten abzurufen und an den Client zurückzugeben, nicht zehn- oder hundertfache Millisekunden. Wenn Sie große Datenmengen schnell benötigen, beispielsweise zur Betrugserkennung, oder wenn Sie viele Daten, beispielsweise bei IoT, autonomen Fahrzeugen, Sensorauslesungen oder medizinischen Geräten, verarbeiten, kann Aerospike Millionen Transaktionen pro Sekunde bei Lese- und Schreibzugriffen durchführen. Sie müssen es nicht über einen Nachrichten-Bus senden und dann die Datenbank über den Nachrichten-Bus benachrichtigen lassen, dass sie die Daten erhalten hat. Die Daten sind bereits persistent.

## Führende Industrieinnovationen weltweit ermöglichen

Für welche Anwendungsfälle ist Aerospike optimal geeignet? Es gibt offensichtliche Märkte wie z.B. das zuvor genannte Internet der Dinge (IoT), Betrugsbekämpfung und Sensor-Daten, aber es handelt sich um einen aufstrebenden Markt. Aerospike startete im Bereich der Werbetechnologie, wo Datenabfragen in Millisekunden oder noch schneller bearbeitet werden müssen. Hier wurde die hohe Leistungsfähigkeit unter realen Bedingungen im großen Maßstab erfolgreich getestet.

Weitere Branchen, in denen Aerospike nützlich sein kann, sind vielfältig. Ein Beispiel ist ein großer Telekommunikationsanbieter in Indien. Die Infrastruktur dort ist nicht immer zuverlässig und manchmal werden Anrufe abgebrochen. Dieses Unternehmen kann mit Hilfe der Aerospike-Technologie in Echtzeit feststellen, dass ein Anruf abgebrochen wurde, und sie können sofort Kontakt aufnehmen und dem Kunden Guthaben oder andere Entschädigungen anbieten, um die Kundenzufriedenheit aufrechtzuerhalten.

## Echtzeit-Abwicklung von Sofortzahlungen

Ein neuer Bereich, mit dem Aerospike stark involviert ist, sind Echtzeit-Digitalzahlungen. Dies erfordert nicht unbedingt eine große Menge an Daten oder hohe Durchsatzanforderungen, aber was diese Unternehmen benötigen, ist absolute Konstanz und absolute Verfügbarkeit, selbst wenn beispielsweise ein Rechenzentrum verloren geht.

Die Produktionsfläche ist auch ein aufstrebender Markt für die Aerospike-Technologie, beispielsweise in der Halbleiterfertigung, wo sie zur Speicherung von Sensordaten für Echtzeitanalysen verwendet wird. Aerospike glänzt in jeder Branche, in der viel Daten vorhanden sind und man sie schnell benötigt.

## Leistung im großen Maßstab - Ergebnisse unabhängiger Tests von Drittanbietern

Es gibt viele Datenbanken mit guter Technologie, aber es gibt Herausforderungen im Bereich der Skalierung. Nehmen wir zum Beispiel Redis. Da es alle Informationen im Speicher speichert, kann man nicht ohne erhebliche Kosten auf zehn Terabyte oder gar Hunderte von Terabyte oder Petabyte gehen. Da Aerospike Informationen auf SSDs speichert, beträgt der Zeitunterschied zwischen dem Abrufen von Daten auf einer SSD und im Speicher etwa 100 Mikrosekunden. Im Bereich von Petabytes ersetzt Aerospike ältere Technologien wie Cassandra, die zwar gut skalieren, aber an Geschwindigkeit mangelt.

## Gesamtkosten des Besitzes

Darüber hinaus sparen die Menschen im Vergleich zu diesen Technologien beim Umstieg auf Aerospike eine Menge Geld, da die Anzahl der Knoten aufgrund der einzigartigen Architektur dramatisch reduziert wird. Die Einsparungen betreffen nicht nur das Investitionsaufwand, sondern auch den Betriebsaufwand, da weniger Maschinen überwacht werden müssen.

Aerospike hat einige der traditionellen Ebenen in der Architektur zusammengebrochen. Oft haben Legacy-Systeme einen zusätzlichen Cache davor, um es zu beschleunigen. Dies führt zu Komplexität. Aerospike benötigt keinen Cache. Es gibt keine große Menge an DRAM. Es verlässt sich auf die Geschwindigkeit der SSDs und die zugrunde liegende Technologie, um die Leistung des Rohspeichers ohne Cache zu erreichen. Da der Cache und die Speicherebenen zusammengebrochen sind, ist die Lösung vereinfacht, was bedeutet, eingebaute Zuverlässigkeit und Geschwindigkeit.

## Kontinentale Bereitstellungsbeispiel

Die Konsistenz über mehrere geografische Gebiete hinweg ist auch ein wichtiger Vorteil der Technologie. Moderne Architektur erfordert geringe Latenz, das bedeutet in der Regel, dass es eine Reihe von H-basierten Clustern gibt, in denen die Daten nah beim Benutzer liegen. Andernfalls wird die Lichtgeschwindigkeit zu einem Faktor. Aerospike kann dafür sorgen, dass alle H-basierten Cluster miteinander kommunizieren, sodass eine Änderung eines Datensatzes in einem Cluster automatisch auf andere Cluster übertragen wird, asynchron. Bei bestimmten Anwendungen wie digitalen Zahlungen muss jedoch eine starke Konsistenz zwischen den Clustern gewährleistet sein, sodass sie die Daten synchron replizieren möchten. Sie möchten lieber von der lokalen Kopie der Daten lesen. Die Lesevorgänge werden dadurch sehr schnell; die Schreibvorgänge werden von der Lichtgeschwindigkeit beeinflusst, garantieren jedoch Konsistenz über geografische Entfernungen hinweg. Es handelt sich also nicht um Konfliktlösung, sondern um Konfliktvermeidung. Die Möglichkeit, diese stark konsistenten Schreibvorgänge weltweit zu verteilen und möglicherweise mehrere Datenbanksysteme zu haben, hat ein enormes Potenzial und Wert.

## Aerospike Connect für Spark

Zum Beispiel arbeitet Aerospike derzeit mit Spark zusammen, einer analytischen Technologie, die erfordert, dass die Daten im Arbeitsspeicher liegen. Durch das Laden der Daten von Aerospike aus kann das Spark-Datenrahmen Tausende oder Hunderttausende von Terabytes verarbeiten und dabei enorme Kosteneinsparungen und Geschwindigkeit erzielen. Die Integration mit anderen KI-Werkzeugen ist eine treibende Kraft, die einige aufregende Möglichkeiten eröffnen wird.

Das Einfügen von Daten in Aerospike ist einfach und unkompliziert. Da Anwendungen eine API-Ebene wie die meisten Datenbanken haben, kann Aerospike Daten aus branchenüblichen Quellen wie Kafka und Janus aufnehmen. Die Möglichkeit zur bidirektionalen Kommunikation mit Nachrichtenbussen ergibt Sinn, da Aerospike nicht nur Daten aus diesen Quellen aufnehmen, sondern sie auch aussenden kann. Wenn Aerospike eine verlässliche Quelle ist, wenn Sie einen Datensatz schreiben, können Sie ihn an nachgelagerte Systeme übertragen.

## Aerospike Connect für Kafka

Wenn Sie Aerospike für die Ingestion verwenden möchten, anstatt eine Ingestion Engine auf der Front-End-Seite zu verwenden, kann Aerospike entscheiden, ob es die Daten aufteilen oder im selben Format belassen und einfach in Aerospike einfügen möchte. Mit seinem Plugin-Framework ist dies ein API-Aufruf. Wenn die Daten gespeichert sind, kann eine Nachrichten-Warteschlange benachrichtigt werden, um nachgelagerte Verarbeitung durchzuführen. Dadurch wird ein Schritt in der Ingestion eliminiert und die Gesamtdurchsatz erhöht.

Das Skalieren auf Tausende von Clientegeräten ist aufgrund der Mehrfadenarchitektur möglich, mit der der Aerospike-Client entwickelt ist, um auf einem Prozess zu skalieren und eine große Menge an Daten zu verarbeiten. Der Client ist intelligent, um Geschwindigkeit zu gewährleisten. Jeder Datensatz wird direkt vom Client zum Knoten weitergeleitet, der im Besitz dieser Daten ist. Es gibt keine Zwischeninstanzen. Das bedeutet, dass der Client über alle Knoten Bescheid wissen muss, sodass es begrenzte Verbindungsgrenzen gibt und die Verwendung von Hunderttausenden von Clients nicht praktisch ist.

## Kontinentaleinsatz Beispiel

Wenn Sie jedoch Hunderttausende von Kunden haben, liegt das daran, dass Sie eine weltweit verteilte Bevölkerung haben. Wenn sie mit einem Cluster sprechen würden, wird die Geschwindigkeit des Lichts zu einem großen Problem. Es gibt Möglichkeiten, kleinere, Edge-basierte Cluster einzurichten, die entweder Informationen teilen oder mit einem zentralen System sprechen, sodass es möglich ist.

## Aerospike ist eine Datenbank für System Record Anwendungen.

Wenn Daten weltweit verschoben werden, kommen verschiedene Datenschutzebenen und Standards wie die DSGVO und CCPA ins Spiel, sodass Kunden den Ursprung der Daten kennen müssen. Aerospike hat die Flexibilität, die Daten genau zu betrachten und basierend auf dem Inhalt der Daten zu wissen, wann und wo sie verschickt werden können. Dies ist Teil der Aerospike-Datenversandkonfiguration, die in der Anwendung transparent ist. Sie müssen nichts an den Anwendungen ändern, sondern nur an der Konfiguration.

Aerospike stellt auch sicher, dass die Daten sicher sind. Wie alle unternehmensstarken Datenbanken unterstützt Aerospike die Verschlüsselung im Ruhezustand und im Flug sowie die Sicherheitsintegration von Dingen wie Hashicorp Vault. Es kann als ein System der Aufzeichnung genutzt werden.

Ein grundlegendes Ziel bei Aerospike besteht darin, die neuesten Innovationen und Technologien für den Erfolg der Kunden einzusetzen. Zum Beispiel haben sie, als Intel PMem auf den Markt brachte, den App-Direct-Modus verwendet, um die vollen Möglichkeiten des PMems optimal auszuschöpfen. Das bedeutet, dass bei einem rollenden Upgrade von beispielsweise einem Petabyte an Informationen die benötigte Zeit gering ist. Aerospike speichert dieses Petabyte möglicherweise in 50 oder 60 Knoten anstelle von Tausenden von Knoten und wenn ein Knoten heruntergefahren wird, muss er nicht neu aufgebaut werden, so dass die Neustartzeit sehr schnell ist.

Insgesamt bietet Aerospike Sicherheit, hohe Verfügbarkeit, Geschwindigkeit, geringe Latenz, Skalierbarkeit, Konsistenz und geringe Gesamtbetriebskosten.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
