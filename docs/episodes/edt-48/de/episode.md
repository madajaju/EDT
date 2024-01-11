---
layout: posts
title: "VAST Data überprüft"
number: 48
permalink: episode-EDT48-de
lang: de
nav_exclude: true
nav_order: 48
tags:
    - dataarchitecture
    - data
    - optane
    - technology
    - vastdata

date: Wed Apr 28 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Randy Hayes

img: thumbnail.jpg
image: thumbnail.jpg
summary: "In dieser Episode führt Darren ein Gespräch mit Randy Hayes, der nun als Vertriebsleiter für den öffentlichen Sektor bei VAST Data tätig ist. Es sind sechs Monate seit ihrem letzten Gespräch vergangen und Darren möchte nun wissen, wie es ihnen in der Branche ergeht, was es Neues bei VAST gibt und interessante Anwendungsfälle. Ihr neues Produkt Gemini bietet ein anderes Speichermodell."
video: "https://youtu.be/url"
description: "In dieser Episode führt Darren ein Gespräch mit Randy Hayes, der nun als Vertriebsleiter für den öffentlichen Sektor bei VAST Data tätig ist. Es sind sechs Monate seit ihrem letzten Gespräch vergangen und Darren möchte nun wissen, wie es ihnen in der Branche ergeht, was es Neues bei VAST gibt und interessante Anwendungsfälle. Ihr neues Produkt Gemini bietet ein anderes Speichermodell."
---

<div>
{% include transistor.html id="d6fc5e00" title="#48 VAST Data Revisited" %}

{% include youtube.html id="url" %}
</div>

---

VAST Data ist in den letzten sechs Monaten schnell gewachsen, mit einem wachsenden Team und beeindruckenden Verkäufen wie etwa 70 Petabyte Flash-Speicher an die Bundesregierung. Neben allgemeinem Dateiaustausch mit ihren All-Flash-Speichersystemen haben sie interessante Anwendungsfälle in Bereichen wie Next-Gen-Sequenzierung, konfokalen Mikroskopie und Windkanalsimulationsaufgaben.

Die Plattform des Unternehmens ermöglicht das Lösungen von zufälligen Lese-Problemen, da alle Daten auf Flash gespeichert sind, ohne die exorbitanten Kosten; die Plattform verarbeitet eine hohe Datenvolumen mit geringer Latenz.

## VAST-Technologie und Intel Optane-Laufwerke

VAST verwendet Intel Optane-Laufwerke, um Lese- / Schreibparität und andere Vorteile zu erreichen. Da Optane persistenter Speicher ist, treten keine Cache-Kohärenzprobleme auf und es besteht kein Bedarf an DRAM, was einen großen architektonischen Vorteil darstellt, um Ausfälle oder Datenverluste zu vermeiden. Die Gesamtkosten pro Benutzer werden ebenfalls gesenkt, da Sie keine großen Maschinen mit viel Speicher für die Dateispeicherung kaufen müssen, wenn Sie mehr Geschwindigkeit möchten. Diese Stufe wird eliminiert.

Skalierbarkeit und Flexibilität sind zwei weitere Vorteile, da Sie mehr Datenspeicher (D-Boxen) hinzufügen können, ohne die Leistung zu beeinträchtigen, und sie sind sogar vollständig kompatibel mit mehreren Generationen von Flash-Technologie. Es gibt keinen einzigen Fehlerpunkt und es gibt keine theoretische Grenze; VAST hat bis zu 100 Petabyte getestet.

Sie können die Leistung verbessern, indem Sie Client-Boxen (C-Boxen) hinzufügen, unabhängig von D-Boxen. Die Kapazität mit Flash-Speicher ist im Grunde kostenlos, aber Sie müssen diesen Flash-Speicher mit der CPU verbinden. Die C-Boxen sind vollständig zustandslos, sodass Sie sie dynamisch vergrößern oder verkleinern können. VAST garantiert eine hohe Verfügbarkeit, da Sie vollen Zugriff auf jeden PCP auf der Hinterseite haben.

Je nach Leistungsanforderungen des Kunden können unterschiedliche Anzahlen von D-Boxen und C-Boxen vorhanden sein. Zum Beispiel benötigt ein Kunde möglicherweise keine zusätzliche Leistung, sondern mehr Kapazität, sodass der Cluster beispielsweise aus 11 C-Boxen und 37 D-Boxen bestehen kann.

Wenn Sie eine C-Box und eine D-Box haben, haben Sie etwa 40 Gigabyte pro Sekunde Bandbreite, was das Basismodell ist. Jede zusätzliche D-Box erhöht die Bandbreite um weitere 40 Gigabyte. Eine C-Box sättigt nicht alle IOPS, daher können Sie durch Hinzufügen einer weiteren C-Box 350.000 IOPS aus einer Box erhalten. Da Flash durch die CPU begrenzt ist, ermöglicht das Hinzufügen von mehr CPUs eine bessere Skalierung.

## Neues Geschäftsmodell für Lagerung

Das neue Produkt von VAST Data, Gemini, ermöglicht es Kunden, die hohe Leistung benötigen, aber nur wenig Kapazität benötigen, nur die Menge an Hardware zu lizenzieren, die sie von ihrem Vertragspartner benötigen. Dies führt zu erheblichen Kostenersparnissen. Kunden können die Kapazität nach Bedarf steigern und bezahlen, anstatt von Anfang an Kosten für zukünftige Kapazitätsanforderungen zu verursachen.

Aus der Sicht der Betriebsausgaben ergibt dies für viele Unternehmen Sinn. Zum Beispiel kostet ein 30 Petabyte All-Flash-System, das eine Bandbreite von anderthalb Terabyte hat, weniger als S3 für seltenen Zugriff von Amazon. Das ist nur für ein Jahr; wenn man sich die Art und Weise ansieht, wie Amazon abrechnet, ist es sogar weniger als Glacier, pro Gigabyte pro Monat. Und es gibt die Möglichkeit, später wieder zu einem Investitionsausgaben-Modell zurückzukehren, falls das sinnvoller ist.

Es ist wichtig zu beachten, dass VAST ein Gerät präsentiert, und keinen Speicherservice, was zu einem Unterstützungsalbtraum führen kann, aufgrund all der verschiedenen Hardware- und Firmware-Varianten, die unterstützt werden, welche Laufwerke unterstützt werden, welche Verbindungen usw.... was zu einer verrückten Menge an Komplexität führt. VAST versendet immer noch dieselben Boxen und Server; es handelt sich nur um ein anderes Geschäftsmodell, um Flexibilität beim Verbrauch von Speicher zu ermöglichen.

Einige interessante Bereiche, in denen VAST nützlich sein könnte, sind die medizinische Forschung wie beispielsweise die digitale Pathologie mit einer astronomischen Menge an Daten, die für Forscher oft schwer zugänglich sind, weil sie auf billigen und langsamen Speichermedien liegen. Auch die präzisionsmedizinische Behandlung basierend auf dem genetischen Profil einer Person wäre eine Möglichkeit. Darüber hinaus könnte die Anwendung von künstlicher Intelligenz auf Paketaufzeichnungen dabei helfen, Angriffe von fortgeschrittenen Gegnern vorherzusagen.

Ein weiteres vielversprechendes Anwendungsszenario ist ein Kunde, der alle seine Daten in einem VAST All-Flash-Speichersystem anstelle der Cloud hat, aber seine Berechnungen vollständig in der Cloud durchführt und möglicherweise nur die Ergebnisse zurückbringt. Die Ergebnisse sind normalerweise sehr klein, vielleicht nur ein paar Bytes Daten, und das Abrufen ist kostengünstig. Dieser Modelltyp könnte beispielsweise einen Mehrwert aus der Analyse von alten Daten erzeugen, die derzeit einfach im Speicher liegen und zu teuer sind, um sie zu verschieben.

Es gibt viel Flexibilität, um einen hybriden oder Multi-Cloud-Ansatz durchzuführen, bei dem Sie ein zentrales, lokal betriebenes Speichersystem haben, auf das über mehrere Cloud-Anbieter zugegriffen werden kann.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
