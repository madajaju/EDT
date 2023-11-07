---
layout: posts
title: "Moderne Datenverwaltung"
number: 70
permalink: episode-EDT70-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 70
tags:
    - datagovernance
    - immuta
    - dataaccess
    - identitymanagement
    - cybersecurity
    - data
    - technology

date: Wed Nov 24 2021 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Matthew Carroll

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Intel, diskutiert mit Matthew Carroll, CEO von Immuta, über die Realität und Zukunft der modernen Datenverwaltung."
video: "https://youtu.be/Y-mBQoKQvHM"
description: "Darren Pulsipher, Chief Solution Architect, Intel, diskutiert mit Matthew Carroll, CEO von Immuta, über die Realität und Zukunft der modernen Datenverwaltung."
---

<div>
{% include transistor.html id="752e2562" title="#70 Modern Data Governance" %}

{% include youtube.html id="Y-mBQoKQvHM" %}
</div>

---

Da Organisationen zur Cloud migrieren, ändert sich vollständig die Art und Weise, wie wir über Daten denken und wie wir Daten verwenden. In den letzten fünf oder sechs Jahren hat sich die gesamte Infrastrukturschicht verändert. Die erforderliche Leistung, Skalierung, Regeln und die Anzahl der Benutzer, die Daten kombinieren möchten, haben exponentiell zugenommen. Das in großem Maßstab zu bewältigen, ist keine einfache Aufgabe, und genau das ist der Bereich, in dem Immuta ins Spiel kommt.

Im Laufe der Zeit hat die Industrie das Paradigma der Datenspeicherung neu überdacht. Früher hat jedes Daten-Team Datenprodukte in einem Silo erstellt und sie dann an eine Geschäftseinheit geliefert. Die Geschäftseinheit hatte ihre passenden Daten, die ihnen einen qualitativ hochwertigen Service lieferten. Jetzt plötzlich möchten wir, dass jeder Daten über das gesamte Unternehmen hinweg kombinieren kann: Business-Analysten, Datenwissenschaftler, Dateningenieure, usw. Die Anzahl der Benutzer hat sich geändert und es geht nicht mehr nur um Suchanwendungen, sondern um Transformationen und Datenpipelines.

Das ist ein Unterschied, der einen anderen Qualitätsstandard, Zeit und ein nie zuvor dagewesenes Niveau an Raffinesse erfordert. Es wird noch komplexer, wenn man Datenschutzgesetze, Datenklassifizierung und die sich ständig ändernden Regeln und Bestimmungen hinzufügt.

Was Immuta versucht zu tun, ist es, es jedem Benutzer potenziell zu ermöglichen, jeden Datensatz, intern oder extern für die Organisation, zu kombinieren, um einige Erkenntnisse zu erhalten. Es geht alles um das Ausmaß. Die Richtlinien müssen von der Plattform getrennt werden, um die Richtlinien für all diese neuen Benutzer und alle verschiedenen Kombinationen von Daten zu skalieren. Sicherheit, Datenschutz und Governance sind großartig, aber wenn Sie nicht handeln können, ist niemand glücklich.

Eine Lektion, die Immuta früh gelernt hat, ist, dass ein Proxy nicht funktioniert. Es ist wie der Versuch, Petabytes an Daten durch einen Strohhalm zu bewegen: Sie werden zum Flaschenhals. Es ist einfach, die Middleware für Probleme verantwortlich zu machen, denn sie ist immer ein Engpass, da sie zwischen den Tools und den Daten steht. Dies ist ein klassisches Problem der Middleware.

Das zweite Problem mit diesem Design-Paradigma ist, dass es bei der klassischen Datenvirtualisierung funktioniert hat, weil es einen klaren Satz von Daten gab. Wenn jedoch Petabytes an Daten vorhanden sind, scheitert der Ansatz "Gib mir alles und wir finden eine Lösung" sehr schnell aufgrund der schieren Größe der Daten sowie der Regeln und Richtlinien, die damit verbunden sind.

In der normalen Virtualisierung müssen Sie sich in die Cloud-Computing-Infrastruktur von Snowflake, Synapse usw. nativ integrieren. Anstatt diese Abstraktionsschicht über diesen verschiedenen Tools zu legen, befindet sich die Abstraktionsschicht auf der Richtlinienseite.

Die Richtlinie ist nur so gut wie die Möglichkeit, sie zu überprüfen. Es ist wie eine Kette von Beweisen. Der Schlüssel besteht darin, nachweisen zu können, ob dieser Benutzer den Vorgaben innerhalb der IT-Infrastruktur entsprochen hat oder nicht. Mit moderner Datenverwaltung wird die Richtlinie innerhalb des Systems skaliert und die Prüfungen werden vereinheitlicht, aufgrund der Komplexität vieler Aktivitäten mit den Daten. Die Überprüfung der Richtlinie muss drastisch vereinfacht werden, da es sonst unmöglich ist, die Einhaltung festzustellen.

Es gibt drei Arten von Richtlinien zu berücksichtigen: betriebliche, regulatorische und vertragliche. Ein Beispiel dafür, wie umständlich das alles werden kann, ist ein Blick auf ein Unternehmen wie Cummins. Wenn sie in die Cloud modernisieren, müssen sie für jeden Markt die entsprechenden Vorschriften beachten. Für einen ihrer Motoren stellen Sie sich vor, sie müssten eine maßgeschneiderte Regel für jedes Land schreiben, in dem sie vertreten sind, aber auch für jedes Land, in dem sie nicht vertreten sind, da diese Länder es nicht sehen sollten. Das ist nicht skalierbar, wenn man über Zehntausende Datenquellen für die Schemas spricht, die sich ständig ändern. Von diesen Motoren gibt es Petabytes an Telemetriedaten.

Was du schreiben möchtest, ist, dass du nur einmal die Daten für das Land sehen kannst, in dem du wohnst, und dann gilt es überall. Aber so wird es nicht gemacht. Daher würden sie etwas wie 700 Richtlinien für ein Datenelement schreiben, wenn es nur eine geben sollte. Es wäre nahezu unmöglich, mit allen sich ändernden Richtlinien und Vorschriften für jede Datenquelle Schritt zu halten. Du wärst die ganze Zeit nicht konform.

Es war noch nie einfacher, ein Unternehmen zu globalisieren als heute, und Immune-Kunden erwarten, dass sie in der Lage sind, ihre Infrastruktur weltweit über jede Cloud hinweg zu betreiben. Sie sollten ihre Daten in jede beliebige Cloud verschieben können und dabei vollständig konform sein.

Immuta wendet Regeln auf die Daten mithilfe von Tags an, anstatt die Rohdaten zu verwenden, da jede Domäne ihre eigenen Fachbegriffe verwendet, um ihre Daten zu klassifizieren und darüber zu sprechen. Daher haben sie damit begonnen, allgemeine Konzeptvorlagen anzuwenden, wie beispielsweise für HIPAA. Diese Vorlagen sind jedoch noch nicht narrensicher, und es gibt noch einen langen Weg zu gehen.

Matt's Vision als CEO von Immuta ist es, eine Situation zu erreichen, in der Domänen ihre Richtlinien teilen können. Zum Beispiel gibt es im Gesundheitswesen gute Gründe, warum Moderna und Pfizer zusammenarbeiten möchten. Es könnte eine Vereinbarung darüber geben, wie man Echtwelt-Datenkontrollen mit der Akademie handhabt. Wenn es also eine konsistente Richtlinie geben würde, die in einer konzeptionellen Richtlinien-Cloud geteilt und gemeinsam genutzt werden könnte, wäre das der richtige Weg.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
