---
layout: posts
title: "Multi-Cloud-Datenlösungen mit Hammerspace"
number: 26
permalink: episode-EDT26-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 26
tags:
    - hammerspace
    - data
    - technology
    - dataarchitecture
    - multicloud
    - compute
    - multihybridcloud
    - datamesh

date: Wed Oct 21 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Johan Ballin

img: thumbnail.png
image: thumbnail.png
summary: "Johan Ballin, Direktor für technisches Marketing bei Hammerspace, und Darren Pulsipher, Chief Solution Architect für den öffentlichen Sektor bei Intel, diskutieren Hammerspaces Hybrid-Cloud-Technologie, die Daten von der Speicherinfrastruktur entkoppelt und Datenträgheit und Leistung ermöglicht."
video: "https://youtu.be/9bLpCtVq9CM"
description: "Johan Ballin, Direktor für technisches Marketing bei Hammerspace, und Darren Pulsipher, Chief Solution Architect für den öffentlichen Sektor bei Intel, diskutieren Hammerspaces Hybrid-Cloud-Technologie, die Daten von der Speicherinfrastruktur entkoppelt und Datenträgheit und Leistung ermöglicht."
---

<div>
{% include transistor.html id="301a5c10" title="#26 Multi Cloud Data Solutions with Hammerspace" %}

{% include youtube.html id="9bLpCtVq9CM" %}
</div>

---

Die Speicherung ist reif für eine Störung. Derzeit wird die Verwaltung von Daten auf umständliche, prozedurale und oft manuelle und fehleranfällige Weise durchgeführt. Hammerspace wurde gegründet, um dieses Problem zu lösen, indem Daten von der Speicherinfrastruktur abstrahiert werden.

## Stell dir für einen Moment vor...

…wenn Ihre Daten von der Speicherinfrastruktur getrennt wären. Frei von den Einschränkungen, die durch aktuelle Speichersysteme auferlegt werden, könnten Benutzer ihre Datenverwaltung und -schutz selbstständig durchführen, das Kostenprofil sofort ändern und von überall auf der Infrastruktur auf Daten zugreifen. Software-definierter Speicher könnte die Leistung on demand skalieren und moderne Arbeitslasten wie Kubernetes auf jeder zugrunde liegenden Infrastruktur bereitstellen, egal wo.

## Die Herausforderung

Anwendungen sind jetzt tragbar geworden, aber Daten sind immer noch isoliert. Die Herausforderung besteht darin, dass Leistung, Zuverlässigkeit und Verwaltbarkeit bei hoher Skalierung aufgrund des Silo-Problems alle beeinträchtigt werden. Die Lösung besteht darin, die Daten von den Begrenzungen der zugrunde liegenden Infrastruktur zu befreien. Hammerspace erreicht dies durch die Aufteilung von Metadaten und die Assimilation der kleinsten Bestandteile, um Daten tragbar zu machen.

## Entkoppelung von Daten von der Speicherung

Mit dieser Technologie haben Sie immer und überall auf Abruf Daten für Ihre Apps. Sie haben unabhängige Kontroll-, Datenpläne sowie einen globalen Namensraum und ein Dateisystem, das mehrere Rechenzentren und Clouds umfasst. Die Speicherung wird orchestriert; Daten sind vollständig automatisiert und nutzen deklaratives autonomes Datenmanagement. Anders ausgedrückt trennt es das "Wie" vom "Was" und gibt den gewünschten Endzustand an, ohne alle Details zur Erreichung dessen aufzeigen zu müssen.

## Hammerspace Architektur

Das System ermöglicht es Ihnen, auf Dateiebene zu arbeiten, bietet Unternehmensdatendienste wie Schnappschüsse und Kopien und lässt sich problemlos von Rechenzentrum zu Rechenzentrum, von Rechenzentrum zur Cloud und zurück zum Rechenzentrum skalieren, um es in einem multi-hybriden Cloud-Szenario zu verteilen.

## Veralteter Speicher kann modernen Herausforderungen nicht standhalten

Vererbter Speicher skaliert nicht ausreichend, selbst mit horizontalen oder Cloud- oder Planeten-Skalierungslösungen, da selbst diese Cluster zu Silos werden und manchmal dazu führen, dass Sie mit Daten stecken bleiben, die nicht korreliert und analysiert werden können. Traditionsreicher Speicher hat auch Schwierigkeiten, Kapazität und Leistung unabhängig voneinander zu skalieren.

Replikation ist eine alte Technologie, die zu einer unkontrollierten Verbreitung von kopierten Daten führt. Anstatt nur die kleinsten Bestandteile zu verschieben, bewegt man die gesamte Nutzlast. Die Datenverwaltung wird oft vernachlässigt, dabei sollte sie prioritär behandelt werden und nicht als Nachgedanke.

Ein Problem, das die Architektur von Hammerspace löst, ist das einfache Auffinden von Dingen. Versionierung kann zu großen geschäftlichen Problemen führen. Zum Beispiel haben sowohl Airbus als auch Boeing massive Probleme gehabt, weil einige Ingenieure nicht über ihre aktuellsten Versionen verfügten. Die Lösung besteht darin, die Daten zu orchestrieren.

## Datenorchestrierung

Orchestrierung bedeutet zunächst die Entkopplung aller verschiedenen Silos; die Daten werden als einziger Pool behandelt. Hammerspace assimiliert die kleinsten Bestandteile, die Metadaten, um im Grunde ein Datengegensystem zu schaffen. Dann implementieren sie Ziele wie Haltbarkeit, Verfügbarkeit und Schnappschüsse oder benutzerdefinierte Aktionen, die mit Hammer-Skripten durchgeführt werden können. Schließlich werden die Daten, egal ob es sich um Kubernetes, NFS oder SMB handelt, tragbar und sind mit dem System verbunden.

Was dies in der Praxis bedeutet, ist, dass Sie nicht zu einem anderen Silo gehen müssen, um eine bestimmte Arbeitslast zu bearbeiten. Daten werden dorthin geliefert, wo Sie es wollen. Diese Datenmobilität ist entscheidend, da sie live ist; es handelt sich nicht um Datenmigration, die störend ist und Ausfallzeiten verursacht.

Um teure Ausgangskosten zu minimieren, wird Daten auf Dateiebene dedupliziert und komprimiert. Anstatt ein ganzes festes Volumen zu verschieben, können Sie die Daten auswählen, die Sie basierend auf verschiedenen Kriterien wie Ordner, Metadaten-Tags oder einem Kunden-Deskriptor verschieben möchten. Dadurch ergeben sich Flexibilität und Kosteneinsparungen.

## Hammerspace-Architektur

In der Hammerspace-Architektur hat das globale Dateisystem auf höchster Ebene drei Komponenten: das globale Dateisystem selbst, die Front-End-Präsentation (NFS, CSI-Treiber und SMB) und Anvil innerhalb des globalen Dateisystems. Anvil ist die Komponente für die Metadatenverwaltung und DSX stellt Metadatenverwaltungsdienste bereit. Diese können als virtuelle Maschinen, VMware, KBM oder Hyper-V implementiert werden. Anvil ist in einer A-förmigen Konfiguration angeordnet, sodass es mindestens zwei in jeder Standort gibt. DSX kann parallelisiert werden, um die Leistung zu skalieren. Daher können Sie an verschiedenen Standorten eine Anzahl davon haben, um sicherzustellen, dass Sie ausreichend Leistung haben. Sie können problemlos skaliert werden.

Auf der Backend-Seite kann der zugrunde liegende Speicher Hammerspaces eigenes softwaredefiniertes Speichermodell mit direkt angebundenen Festplatten, assimiliertem NAS, jeder Cloud oder einer beliebigen Kombination sein. Dies kann auch horizontal skaliert werden, sodass Sie nun Leistung und Kapazität unabhängig voneinander skalieren können. Entsprechend dem Cloud-Modell ist es auch elastisch, sodass Sie bei einer Geschäftsänderung an diesem bestimmten Standort sowohl die Leistung als auch die Kapazität reduzieren können, um sicherzustellen, dass Anwendungen genau das Richtige an diesem Standort haben. Dies ermöglicht eine sehr flexible Architektur, um alle Anwendungs-Workloads auf der Front-End-Seite zu bedienen.

Ein großer Vorteil dieser flexiblen Architektur besteht darin, dass Daten assimiliert werden können, die in Geräten gespeichert sind, die nicht Ihnen gehören, wie z.B. NAS oder in der Cloud. Dadurch wird das Verschieben von Daten vereinfacht. Wenn Sie beispielsweise ein älteres NAS haben und auf ein neueres NAS migrieren möchten, spielt es keine Rolle, ob es sich um denselben oder einen anderen Anbieter handelt. Hammerspace assimiliert die Metadaten und verschiebt die Daten hinter den Kulissen und vollständig transparent für die Anwendungen, da es sich um eine Live-Datenmobilität handelt. Ein weiterer bedeutender Vorteil ist, dass es keine Ausfallzeiten beim Verschieben der Daten gibt.

Wenn Sie diese Technologie ausprobieren möchten, gehen Sie zu hammerspace.com und beginnen Sie mit einer kostenlosen Testversion mit einer Lizenz für bis zu 10 Terabyte, die in Azure, AWS oder Google Cloud bereitgestellt wurde.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
