---
layout: posts
title: "Elastische Suche & Intel Optane DCPMM"
number: 17
permalink: episode-EDT17-de
lang: de
nav_exclude: true
nav_order: 17
tags:

date: Sun Aug 30 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher zeigt, wie er die Leistung von Elasticsearch erhöhte, indem er den Intel Optane Persistent Memory im 100 Prozent App-Direct-Modus verwendete. Seine Tests zeigen eine beeindruckende Leistungssteigerung von 2x. Durch Verdoppelung der Durchsatzkapazität können Sie die Anzahl der Server in Ihrem Elasticsearch-Cluster erheblich verringern."
video: "https://youtu.be/url"
description: "Darren Pulsipher zeigt, wie er die Leistung von Elasticsearch erhöhte, indem er den Intel Optane Persistent Memory im 100 Prozent App-Direct-Modus verwendete. Seine Tests zeigen eine beeindruckende Leistungssteigerung von 2x. Durch Verdoppelung der Durchsatzkapazität können Sie die Anzahl der Server in Ihrem Elasticsearch-Cluster erheblich verringern."
---

<div>
{% include transistor.html id="77870513" title="#17 Elastic Search & Intel Optane DCPMM" %}

{% include youtube.html id="url" %}
</div>

---

Kürzlich habe ich einige Tests mit der neuen von Intel entwickelten Technologie namens Optane DC Persistent Memory (PMEM) in Verbindung mit Kafka durchgeführt. Durch die Nutzung von Optane auf unkonventionelle Weise, indem es als Dateisystem eingebunden wurde, konnte ich eine massive Verbesserung der Durchsatzleistung erzielen. Hören Sie sich hier meinen Podcast dazu an. (Können Sie hier einen Link einfügen?) Ich habe dasselbe mit Elasticsearch ausprobiert, um festzustellen, ob ich eine ähnliche Leistungssteigerung erzielen kann.

Elasticsearch ist eine hochskalierbare Such- und Analyse-Engine, die es ermöglicht, Daten über mehrere Knoten zu verteilen, um die Lösung zu erweitern und umfangreichere Datenmengen zu unterstützen. Mit anderen Worten handelt es sich um einen verteilten Metadaten-Manager, der hauptsächlich zur Protokollanalyse verwendet wird. Elastic selbst ist ein großartiges Werkzeug, um Daten in JSON-Format zu normalisieren. Ich kann jede Art von Daten in Elastic einfügen und es kann sich über einen verteilten Cluster erstrecken. Es ist zwar kein Nachrichtenbus wie Kafka, indexiert aber stattdessen die ankommenden Daten. Da Elastic diese Daten auf Festplatten speichert, habe ich erkannt, dass ich PMEM auf die gleiche Weise nutzen könnte wie bei Kafka.

## Intel Optane DC Persistent Memory

Intel Optane DC Persistent Memory wird im DDR4-Format geliefert, sodass es perfekt in den DDR4-Speichersteckplatz Ihres Servers passt. Die Module sind in 128, 256 und 512 Gigabyte erhältlich, sodass ich in einem Zwei-Sockel-System 6 Terabyte PMEM haben kann. Eine wichtige Funktion ist, dass die Hardware verschlüsselt ist und mit dieser Verschlüsselung an Ihre CPU gebunden ist, sodass sie sicher und äußerst zuverlässig ist. Sie wird bereits verwendet, um tiefgreifende Veränderungen in der Art und Weise herbeizuführen, wie sie in vielen Datenbanken, wie zum Beispiel in Oracles Exadata-Plattform sowie SAP HANA, eingesetzt wird.

## Unterstützung für eine Vielfalt von Anwendungen

Es gibt mehrere Möglichkeiten, diese Technologie zu nutzen.

Der erste ist der Speichermodus, der die Ausdehnung des Fußabdrucks eines Servers ermöglicht. Er verwendet den PMEM genauso wie normalen Speicher. Der DDR4-Speicher fungiert als Cache für den PMEM. In diesem Modus ist die Geschwindigkeit vergleichbar mit DDR4; in den meisten Anwendungen werden Sie keine Veränderung feststellen.

Der zweite Modus ist die direkte App. Im direkten App-Modus kann ich eine Anwendung schreiben, die direkt in PMEM schreibt und zeitaufwändige Schritte umgeht.

Der dritte Modus verwendet den direkten App-Modus, um ein nichtflüchtiges Speicherdateisystem zu erstellen, das direkt am Speicherbus sitzt und um ein Vielfaches schneller ist als der NVMe-Bus oder sogar der SATA-Bus.

Mit diesem dritten Modus musste ich ein wenig über die Architektur von Elastic lernen, um herauszufinden, welche Teile ich in diesem ultraschnellen Dateisystem ausführen sollte und welche ich an ihrem Platz lassen sollte. Ich wollte auch wissen, ob ich diese Änderungen nur mit der Konfigurationsdatei vornehmen konnte.

## Die Verwendung des Linux-Kernels

Zuerst musste ich lernen, wie man die Linux-Kernel-Befehle zur Manipulation dieses PMEM verwendet.

Mit dem Intel Persistent Memory Control (ipmctl) Befehl konnte ich feststellen, dass ich das PMEM so konfigurieren und verwalten konnte, dass ich es im Memory-Modus, im App-Direct-Modus oder im Memory-Modus in Prozenten betreiben konnte.

Der andere Befehl ist die Steuerung eines nichtflüchtigen Speichergeräts (ndctl). Damit kann ich Namensräume und Regionen in dem von mir erstellten PMEM erstellen, sodass ich diese Region als Gerät einbinden kann. Anschließend kann ich dieses Gerät als Dateisystem einbinden.

## ESRally Performance Testing übersetzen

Ich habe ESRally, ein Benchmark-Tool, gefunden, das ich in meinen Tests verwenden kann. Das erste Mal, als ich den Test einrichtete, habe ich ESRally von meiner normalen SATA-Festplatte ausgeführt, auf der Elastic alles von der PMEM-Festplatte ausführte. Es gab eine gewisse Leistungsverbesserung, aber was ich festgestellt habe, war, dass ich aufgrund des kontinuierlichen Datenstroms von der SATA-Festplatte, der in meinem ESRally gespeichert war, darin eingeschränkt wurde, wie schnell ich Daten in Elasticsearch pushen konnte. Also war es nicht Elastic, das langsamer wurde, sondern ESRally, weil meine SATA-Festplatte viel langsamer als meine PMEM-Festplatte war. Ich habe ESRally auf die PMEM-Festplatte verschoben. Dadurch verbesserte sich die Leistung und ich erhielt interessante Ergebnisse.

## Testen von Einschränkungen

Um zu sehen, welche Auswirkungen dieses PMEM Ultra-Schnelllaufwerk auf Elastic haben würde, führte ich den Test auf einer Maschine durch. Dadurch wurde die Netzwerkvariabilität entfernt, was Netzwerk-Engpässe als begrenzenden Faktor ausschloss. Ich reduzierte die Kommunikation zwischen den Diensten, was die Engpässe bei den Replikaten verringerte, und führte alle Anfragen auf PMEMs aus, was die Variabilität des SATA-Laufwerks eliminierte.

## Optimale Leistung (100%) App Direct

Zuerst habe ich den gesamten PMEM dem app direct Modus zugewiesen, damit ich das Ganze als Dateisystem mounten konnte. Ich habe 128-Gigabyte-DIMMs verwendet, sodass ich ein Laufwerk mit 1,5 Terabyte zur Verfügung hatte. Aus meinen vorherigen Tests mit Kafka wusste ich, dass ich bessere Leistung erhalte, wenn ich den app direct Modus zu 100% anstatt zu 50% verwende.

Durchsatzrate (sollte "Durchsatz" sein - sollte vielleicht auf der Folie geändert werden) Dokumente/Sekunde

Mit Hilfe der ESRally-Statistiken habe ich den Median-Durchsatz an Dokumenten pro Sekunde im Vergleich zur Anzahl der gleichzeitig laufenden Rennen mit Produzenten und Konsumenten berechnet. Mit der SATA-Festplatte erzielte ich recht gute Werte, die mit anderen veröffentlichten Tests vergleichbar waren. Mit dem PMEM-Laufwerk war es mir möglich, fast doppelt so viele Dokumente pro Sekunde zu verarbeiten. Das ist ziemlich unglaublich, bedenkt man, dass es keine Änderungen am Code gab, sondern nur eine Konfigurationsänderung.

## Service Reaktionszeit

Das andere Ergebnis betraf die Antwortzeiten für Funktionen. Wie erwartet steigt die Antwortzeit für Abfragen oder Funktionen, wenn die Anzahl der gleichzeitig laufenden parallelen Vorgänge zunimmt. Aber mit PMEM ist die Antwortzeit fast doppelt so schnell. Aus diesem einfachen Test habe ich gelernt, dass der Ort, an dem die Daten gespeichert werden, die Elasticsearch benötigt (PMEM oder SATA), einen Einfluss auf die Antwortzeit hat.

## Schlussfolgerung

Die Verwendung von Optane Persistent Memory im Dateisystemmodus zur Steigerung der Leistung und Reduzierung der Kosten von Elasticsearch-Servern erfordert minimale Änderungen an Hardware und Software sowie keine Änderungen an Elasticsearch oder den zugrunde liegenden Anwendungen. Durch Verdopplung Ihrer Durchsatzkapazität bei Elasticsearch können Sie die Gesamtanzahl der Server in Ihrem Elasticsearch-Cluster verringern und somit die Gesamtbetriebskosten senken.

## Für weitere Informationen

Für detailliertere Informationen schauen Sie sich den Link im Podcast zu dem Dokument an, das wir als Antwort auf diese Testergebnisse erstellt haben. Sie können mich auch unter darren.w.pulsipher@intel.com kontaktieren oder auf LinkedIn @darrenpulsipher.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
