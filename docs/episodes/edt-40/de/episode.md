---
layout: posts
title: "Kollaborative medizinische Forschung mit vertraulichem Computing"
number: 40
permalink: episode-EDT40-de
lang: de
nav_exclude: true
nav_order: 40
tags:
    - confidentialcomputing
    - cybersecurity
    - distributedanalytics
    - sgx
    - healthcare
    - data
    - technology
    - edge

date: Tue Feb 23 2021 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Nick Bhadange

img: thumbnail.png
image: thumbnail.png
summary: "Beseitigen Sie die Barrieren zur Beschleunigung der medizinischen Forschung für die Heilung von Krebs mit vertraulichem Computing. Nick Bhadange, Technologie-Spezialist bei AI-Vets, und Darren Pulsipher, Chef-Lösungsarchitekt im öffentlichen Sektor bei Intel, diskutieren den Bedarf an vertraulichem Computing im Gesundheitswesen und die potenziellen Vorteile anhand von Anwendungsfällen."
video: "https://youtu.be/url"
description: "Beseitigen Sie die Barrieren zur Beschleunigung der medizinischen Forschung für die Heilung von Krebs mit vertraulichem Computing. Nick Bhadange, Technologie-Spezialist bei AI-Vets, und Darren Pulsipher, Chef-Lösungsarchitekt im öffentlichen Sektor bei Intel, diskutieren den Bedarf an vertraulichem Computing im Gesundheitswesen und die potenziellen Vorteile anhand von Anwendungsfällen."
---

<div>
{% include transistor.html id="558eb1c5" title="#40 Collaborative Medical Research with Confidential Computing" %}

{% include youtube.html id="url" %}
</div>

---

## Warum benötigen wir vertrauliche Berechnung?

Die aktuelle Computernetzwerk-Infrastruktur ist darauf ausgelegt, dass Teilen und Offenheit einen hohen Stellenwert haben: Das Internet ist kostenlos und Daten sollten frei sein. Das hat sich jedoch als Problem in Bezug auf Sicherheit erwiesen. Wir haben einige Lösungen implementiert, die gut funktionieren; wir verschlüsseln Daten, sowohl wenn sie gespeichert sind als auch wenn sie übertragen werden. Trotzdem kann Daten auf verschiedene Arten angegriffen werden, während sie gelesen, analysiert und verwendet werden.

Empfindliche Daten bleiben anfällig, egal ob es sich um Finanz-, medizinische oder Standortdaten handelt, sowohl in Bezug auf die Sichtbarkeit als auch auf die Datenintegrität.

Im Umgang mit Daten im Gesundheitswesen gibt es zusätzliche Komplexitätsebenen. Es gibt viele Regeln und Vorschriften wie beispielsweise HIPAA, und jeder Bundesstaat hat auch seine eigenen Vorschriften zur medizinischen Datenverarbeitung. Trotz der Komplexität und der Anzahl der regelnden Parteien ist vertrauliches Computing möglich, bei dem Sie die Möglichkeit haben, Daten zwischen Parteien zu teilen, die sich grundsätzlich nicht vertrauen.

Für Vertraulichkeit müssen wir über verschiedene Faktoren nachdenken: Datenintegrität, Datensicherheit und Codeintegrität.

## Kritische Probleme mit Datenschutz und Datensicherheit

Die Gesundheitsakten einer Person, insbesondere in den Vereinigten Staaten, sind überall unter Ärzten, Spezialisten, Laboren und Krankenhäusern verstreut. Die meisten Menschen haben keinen einfachen Zugriff auf ihre Akten. Es ist nahezu unmöglich, ein vollständiges Bild Ihrer eigenen Gesundheit zu erstellen. Vertrauliches Computing kann dabei helfen, diese Barrieren zu überwinden.

Zunächst einmal kann es sicherstellen, dass die von Ihnen geteilten Daten aus Sicht der Datenintegrität geschützt werden; sie werden von niemandem verändert. Die Daten können vertraulich sein, bedeutet tokenisiert oder verschlüsselt, können aber dennoch für Berechnungen verwendet werden. Zum Beispiel, wenn eine Partei Analysen zu bestimmten Daten durchführen möchte, müssen sie nicht Informationen wie Namen, Geburtsdaten oder Sozialversicherungsnummern kennen. Wenn diese Teile der Daten tokenisiert oder verschlüsselt werden können, können sie für die Analyse weitergegeben werden, solange die andere Partei vertrauenswürdig ist.

Dies ist der Bereich, in dem Sicherheitsmaßnahmen wie Beglaubigung eine Rolle spielen, damit Parteien ihre Identität nachweisen können. Und diese Beglaubigung kann bis auf die Hardwareebene der vertrauenswürdigen Ausführungsumgebungen, die die Hardware bietet, verfolgt werden. Auf diese Weise vertrauen Sie nicht nur dem Transport und Endpunkt, sondern auch der Anwendung und wie sie die Daten verwenden wird.

Es gibt zwei grundlegende Ansätze dafür. Der erste ist das Anwendungs-SDK, bei dem der Entwickler entscheiden kann, wie er seinen Code in vertrauenswürdige und nicht vertrauenswürdige Komponenten unterteilen möchte. Der andere Ansatz besteht darin, ein Laufzeitverschlüsselungssystem zu haben, das auf einer vertrauenswürdigen Ausführungsumgebung aufgebaut werden kann. Dadurch wird der Aufwand minimiert, der erforderlich ist, um eine aktuelle Anwendung in etwas umzuwandeln, das in dieser Umgebung ausgeführt werden kann.

Mit einer hardwarebasierten und sicheren Ausführungsumgebung, die Anwendungen und Daten während der Nutzung schützt, wird es äußerst schwierig für einen unbefugten Akteur, selbst wenn er physischen Zugriff auf die Hardware, Root-Privilegien oder Administratorrechte für den Hypervisor hat, auf die geschützte Anwendung und Daten zuzugreifen. Das Konzept des vertraulichen Rechnens zielt darauf ab, sogar den Cloud-Anbieter aus der vertrauenswürdigen Rechenbasis zu entfernen. Auf diese Weise befinden sich nur die Hardware und die geschützte Anwendung selbst im Angriffsbereich.

Diese Rechenumgebungen ermöglichen es den CSPs, das Beste aus dem Angebot der Hardware und der bestmöglichen Sicherheit zu nutzen, über die der Endbenutzer absolut die Kontrolle hat. Jede Partei kann ihre eigenen Richtlinien festlegen sowie Hierarchien von Richtlinien wie auf Bundes- oder Landesebene, und jeder Informationsanbieter kann bestimmen, welche Richtlinien angewendet werden sollen und für wen.

## Evidenzbasierte klinische Studie

Das Zusammenführen aller Daten und das Verständlichmachen ist eine große Herausforderung in der Gesundheitsbranche. Die Vielzahl von Datenschutzeinstellungen und Datenfreigabeeinstellungen, die zwischen den verschiedenen Anbietern, Geräten, geografischen Standorten usw. vorhanden sind, macht es derzeit unmöglich.

AI-Vets, Intel und einige Partner arbeiten gemeinsam an diesem Problem. Die brillant einfache Architektur ermöglicht den Einsatz in unterschiedlichen Umgebungen, Datentypen und Richtlinien und kann dennoch zentrale Analysen durchführen.

Ein Beispiel für unsere Implementierung ist ein kleiner Konzeptnachweis: Wie analysiert man über verschiedene Parteien hinweg, wie Krankenhäuser, Forschungsumgebungen und Labore, die jeweils eigene Daten und klinische Studien durchführen? Wie können wir zum Beispiel eine Korrelation zwischen Personen finden, die das Medikament X zur Behandlung von Diabetes einnehmen und die Bedingung Y, sagen wir Krebs haben, obwohl das Medikament X nichts mit der Behandlung von Bedingung Y zu tun hat? Diese beiden Datensätze wären nicht an einem Ort, da sie von verschiedenen Anbietern verwaltet werden.

Wenn jedoch die Anbieter Teil eines Ökosystems wären, in dem sie bestimmen könnten, welche Richtlinien sie an ihrem Endpunkt anwenden möchten, könnten wir eine zentrale Anwendung haben, ein zentrales Forschungsportal, das mit diesen Endpunkten verbunden ist. Es gäbe eine Schlüsselverwaltung und Attestierung durch Dritte, um die Berechtigungen und Befugnisse gegenseitig zu überprüfen, so dass alle Parteien einander vertrauen können.

Das ist ein Aspekt des Vertrauens, aber wir müssen auch die Daten schützen, die extrahiert, abgefragt und übertragen werden. Um dies zu erreichen, können wir Daten und Anwendungen in sicheren, verschlüsselten Enklaven verwalten. Die Daten werden entsprechend der von jedem Benutzer festgelegten Richtlinien behandelt, z.B. durch Verschleierung von Geburtstagen, Sozialversicherungsnummern usw. Diese Informationen können tokenisiert werden, so dass sie in unbefugten Händen zu komplettem Müll werden.

Das zentrale Portal kann eine Abfrage durchführen, die mehrere Endpunkte umfasst und verschiedene Arten von Daten in sein Laufzeitsystem integriert und analysiert. Es wird also nicht alles in einen Datenlake gezogen und dann analysiert, sondern dies geschieht in Echtzeit. Es gibt keine Wartezeit darauf, dass die Daten zuerst veröffentlicht oder gereinigt werden, indem alle Richtlinien angewendet werden; dies geschieht dynamisch und im Vorbeigehen.

Dies ermöglicht enorme Erkenntnisse. Während der Pandemie zum Beispiel, wenn wir jeden Tag auf die Daten warten müssten und komplexe Analysen darauf ausführen müssten, wäre das schwierig. Wenn wir jedoch in der Lage wären, auf Echtzeitdaten aus all diesen verschiedenen Systemen im ganzen Land und weltweit zuzugreifen und sie sicher teilen könnten, könnten wir einzigartige Erkenntnisse gewinnen, die sonst nicht möglich wären.

Wir haben dies bereits in einigen POCs für Klinikseiten gesehen, die wir mit unserem Partner Fortanix durchgeführt haben. Sie haben eine Produktlinie, die es verschiedenen Entitäten ermöglicht, ihre Richtlinien in einer vertraulichen Rechenumgebung zu definieren und die Identitäten der jeweils anderen zu überprüfen sowie Schlüssel und Vertrauen zu verwalten. Das Konzept der vertrauenswürdigen Ausführungsumgebungen existiert bereits seit einiger Zeit und hat sich mittlerweile etabliert, sodass es einfacher geworden ist, davon zu profitieren. Die Anwendungsfälle dafür sind fantastisch.

## Automatische COVID-19-Erkennung anhand von Röntgenbildern der Brust

In einigen Anwendungsfällen müssen nicht nur die Daten, sondern auch das geistige Eigentum, das mit spezialisierten Algorithmen verbunden ist, geschützt werden. Zum Beispiel könnte es bei der automatischen Erkennung von COVID anhand von Röntgenbildern radiologische Daten, Patientendaten und möglicherweise einen proprietären Algorithmus zur Analyse geben. Die Enklaven können sowohl die Daten als auch die Anwendungen vor neugierigen Blicken schützen.

Die sichere Enklave schützt auch die anderen Maschinen im Netzwerk, denn wenn jemand etwas Schädliches auf die Endknoten im Netzwerk bringt, verhindert das Schlüsselverwaltungssystem den Austausch, da es nicht ordnungsgemäß bestätigt wurde. Die Parteien wählen genau aus, mit welchen Datenquellen die Enklave kommunizieren kann, und sie ist sowohl gegen eingehende als auch ausgehende Kommunikation gesichert.

## Elektronische Gesundheitsakten (eGA)

Gesundheitsakten sind ein großes Durcheinander in den Vereinigten Staaten, mit nicht durchsetzbaren papierbasierten HIPAA-Vereinbarungen usw. und allem, was auf verschiedene Einheiten verteilt ist. Ein Anwendungsfall, der für uns ein gutes Modell sein könnte, stammt von der deutschen Regierung. Sie haben vorgeschrieben, dass Gesundheitsdaten in elektronischen Gesundheitsakten gespeichert werden müssen und diese Anwendungen in vertrauenswürdigen Ausführungsumgebungen bereitgestellt werden müssen. Der Patient ist der Endbenutzer und bestimmt, welche Daten verfügbar sind und für wen.

Dieses Maß an Feinheit hinsichtlich dessen, was dem Endbenutzer zur Verfügung steht, ist enorm. Und nicht nur werden all diese Daten von den verschiedenen Systemen gesammelt und geteilt, sondern sie befinden sich auch in sicheren Enklaven, sodass sie von der Außenwelt vollständig geschützt sind. Wenn jemand Unbefugtes Zugriff auf die Daten selbst erhalten würde, wäre es völlig bedeutungslos.

Diese vertrauenswürdigen Ausführungsumgebungen sind der erste Schritt in Richtung Kontrollen, die leicht verständlich und leicht durchsetzbar sind.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
