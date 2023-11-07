---
layout: posts
title: "Folge und sichere den Bit-Rand zur Cloud."
number: 64
permalink: episode-EDT64-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 64
tags:
    - edge
    - compute
    - multicloud
    - cybersecurity

date: Wed Sep 01 2021 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Greg Clifton
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Intel, diskutiert die Nachverfolgung des Bits mit Greg Clifton, Director, DOD und Intelligence, Intel, in einem Folgegespräch zur Episode Nr. 2. Steve Orrin, CTO Federal, Intel, bringt seine Expertise in Bezug auf Sicherheit in komplexen Edge-to-Cloud-Umgebungen ein."
video: "https://youtu.be/aIwxVkw0k0o"
description: "Darren Pulsipher, Chief Solution Architect, Intel, diskutiert die Nachverfolgung des Bits mit Greg Clifton, Director, DOD und Intelligence, Intel, in einem Folgegespräch zur Episode Nr. 2. Steve Orrin, CTO Federal, Intel, bringt seine Expertise in Bezug auf Sicherheit in komplexen Edge-to-Cloud-Umgebungen ein."
---

<div>
{% include transistor.html id="24225e6c" title="#64 Follow and Secure the Bit Edge to Cloud" %}

{% include youtube.html id="aIwxVkw0k0o" %}
</div>

---

In Episode #2 erklärte Greg die komplexen Fragen des Sammelns, Bewegens und Analysierens von Daten in einer Umgebung des Verteidigungsministeriums (DOD), die auch edge-Geräte auf Schiffen, Flugzeugen und sogar Kämpfern enthält, sowie die Notwendigkeit, diese Daten schnell für zeitnahe, umsetzbare Entscheidungen zu bewegen und zu analysieren. Die Rolle von Intel besteht darin, die Prozesszyklen zu verkürzen und Engpässe im Datenfluss mit seinem Technologieportfolio zu entlasten. Es geht darum, Technologie mit der Mission abzustimmen.

Ein aktueller Architekturtrend besteht darin, die Berechnung, Verarbeitung und Intelligenz voranzutreiben, um die Daten zu erreichen, anstatt die Daten zur Backend zu bewegen. Diese Anpassung ermöglicht die beste Möglichkeit, Echtzeitantworten und Intelligenz zu erhalten. Dieser Ansatz ist ein anderes Betriebsmodell mit herausfordernden Fragen.

## Heterogene Hardware

In der grundlegenden Infrastruktur, wie stellen Sie die richtige Rechenleistung, Speicher, Arbeitsspeicher und Netzwerkfähigkeiten bereit, um Analysen am Rand zu ermöglichen und die Verarbeitung dort zu steuern, wo Sie sie benötigen? Wie verwalten Sie diese Anwendungen und Daten? Wie führen Sie Qualität und Pflege der Daten weiter oben in der Nahrungskette ein? Sicherheit ist ein grundlegendes Element jeder Infrastruktur und nun muss Daten am Rand durchgehend geschützt werden.

Die Branche muss zu einer heterogeneren Berechnung voranschreiten, damit die zugrunde liegende Software auf verschiedenen Hardwareplattformen laufen kann und man sich nicht an eine spezifische Software- oder Hardware-Struktur bindet. Ein Teil der Schönheit dessen, was Intel seit Jahren geleistet hat, besteht darin, Software-Portabilität anzubieten: das offene Framework, x86 und andere zugrunde liegende Systeme.

Ein wichtiger Faktor für die Entwicklung von Fähigkeiten bei Intel ist das Verständnis der Arbeitslast und des Datenflusses, anstatt sich auf Modernisierung zu konzentrieren, wie zum Beispiel das Verlagern von Dingen in die Cloud. Es geht nicht darum, wie Sie IT beschaffen (in der Cloud oder vor Ort), sondern darum, den Geschäftsfluss zu optimieren, um von der Art und Weise zu profitieren, wie die Daten fließen und was sie tatsächlich tun.

## DevOps in Not zu Hilfe

Ein weiterer kritischer Aspekt dieser neuen Lösungen ist die Bereitstellungszeit. DevOps ist im gesamten Verteidigungsministerium DOD zunehmend wichtig geworden und die Bemühungen zur Entwicklung gemeinsamer DevOps-Plattformen haben dramatisch zugenommen. Um Code einmal zu schreiben und überall auszuführen (in der Cloud, On-Premise oder an der Edge), verwenden Organisationen den x86-Chipsatz und Intels oneAPI, um komplexe Dienste über das gesamte Ökosystem bereitzustellen. Mit Hilfe von oneAPI können Entwickler beispielsweise komplexe Analysen oder KI-Jobs schreiben, die auf einer GPU, einer CPU oder sogar auf FPGAs mit demselben Code-Basis ausgeführt werden. Entwickler können dann diese komplexen Systeme in ihrem Rechenzentrum testen und sicherstellen, dass sie sich genauso verhalten, wenn sie im Feld bereitgestellt werden, was die Bereitstellungszeit verkürzt.

In der Lage zu sein, eine Kombination aus einer flexiblen DevOps-Umgebung zu nutzen, die Containerisierung und Software-Frameworks wie oneAPI nutzt, gibt Programmierern die Abstraktion, die sie benötigen, aber mit eingebauten Hard- und Softwareoptimierungen. Ein wesentlicher Unterschied hierbei ist, dass wir einen Weg gefunden haben, die gesamte Leistung der Hardware zu nutzen und die Software zu optimieren, damit eine Anwendung immer noch Leistungsverbesserungen erzielen und weiterhin von spezialisierter Hardware profitieren kann.

Das Container-Ökosystem bietet auf Systemebene eine Abstraktion, so dass Dinge nicht fest codiert sein müssen. Es ermöglicht die Skalierung nach oben oder unten basierend auf der Service-Belastung und Kapazität. Zum Beispiel, wenn eine Funktion an der Kante, in einem tragbaren Rechenzentrum oder zurück in der Cloud läuft und die Konnektivität oder ein Ressourcen verloren geht, kann die Mission dennoch durchgeführt werden. Diese intermittierende Konnektivität ist in einer Umgebung des Verteidigungsministeriums (DOD) entscheidend.

## Edge-Lösungen

Viele Leute denken bei Intel an einen Silizium- oder Hardware-Anbieter, aber das Unternehmen hat Lösungen und Referenzarchitekturen im Edge-to-Cloud-Ökosystem entwickelt. Ein Beispiel für Fortschritt ist ein maritimes taktisches Gitter, bei dem die Verarbeitung an der Kante, auf Schiffen, Flugzeugen und an Land stattfindet. Die Anwendungen müssen über das gesamte Ökosystem hinweg funktionieren, und das lässt sich nicht nur mit Hardware bewerkstelligen. Intel hat seine Silizium- und Sicherheitsfunktionen genutzt und auf Basis eines Container-Ökosystems komplexe Anwendungen mit mehreren Microservices entwickelt, die sowohl bei verbundenen als auch bei getrennten Einheiten ausgeführt werden können.

Ein weiteres Beispiel für Edge-Architekturen ist das Verfolgen von Objekten über Sensornetze hinweg, selbst bei Lücken im Sensornetz. Durch die Durchführung von Sensordatenfusion, Datensynthese und multidisziplinärer Analyse ist es möglich, Objekte über verschiedene Szenen und Sensorarten hinweg zu verfolgen. Dabei kann die Skalierung angepasst werden, um eine mobile Sensorplattform zu schaffen, die Edge-Sensoranalyse und Fusion durchführen kann. Anschließend kann sie auch an eine verteilte Gruppe von Knoten übergeben werden, die zusammenarbeiten, um ein Objekt über all diese verschiedenen vorhandenen Sensoren hinweg zu verfolgen.

Zum Beispiel, wenn Sie ein Objekt verfolgen und es sich zwischen Sensoren bewegt, verlieren Sie es für einen Moment. Was diese Intelligenz ermöglicht, ist das Verbinden dieser beiden Feeds und das Verfolgen der blinden Flecken. Dies funktioniert nicht nur mit homogenen Sensortypen, sondern auch mit verschiedenen Arten von Sensoren wie Bewegungssensoren, RF-Sensoren und IR-Sensoren. Wenn Sie also das Video verlieren, aber immer noch ein RF-Signal haben und dann das Video wieder aufnehmen, können Sie den vollständigen Pfad des Objekts anzeigen. Früher erforderten solche Analysen das Verschieben von Daten zum Rechenzentrum, um diese komplexen Interaktionen zu verarbeiten. Jetzt können wir dies am Rande des Sensor-Netzwerks durch Mikrodienste am Rand durchführen.

## Flexibilität bei der Bereitstellung.

Ein vorteilhafter Ansatz besteht darin, einmal zu bauen und dieselbe Architektur und Software für verschiedene Missionen mit analytischen Anforderungen zu verwenden. An Orten, an denen leistungsstarke Rechenkapazität an der Grenze (des Netzwerks) vorhanden ist, kann die Skalierung erfolgen und die volle Leistungsfähigkeit der Hardware ausgeschöpft werden. Andere Plattformen können begrenzte Rechenkapazitäten haben und können kleinere Mikrodienste ausführen, die nur einen Teil der vollständigen Lösung bereitstellen. Neue Missionseigenschaften und Dienste können schnell bereitgestellt werden, indem diese Mikrodienste einmalig für mehrere Anwendungsfälle aufgebaut werden.

## Die Sicherheit am Rand

Komplexität ist manchmal der schlimmste Feind der Sicherheit, aber grundlegende Sicherheitsprinzipien können auch Daten und Anwendungen am Rand sichern. Anstatt den alten Ansatz zu verfolgen, den Server zu schützen und zu hoffen, dass alles dort bleibt, ist es entscheidend zu verstehen, wohin die Daten fließen und an welchen Stellen sie existieren und sie zu schützen, egal auf welchem System sie ausgeführt werden. Risikobasierte Ansätze und Konzepte wie Zero Trust gewinnen an Bedeutung, da sie eine systemunabhängige Sichtweise der Sicherheit einnehmen.

Zusammengefasst bedeutet Zero Trust standardmäßiges Ablehnen. Niemand wird eingelassen, es sei denn, es ist erforderlich, und dann nur für die Dauer der notwendigen Aktion. Wenn zeitliche Zugriffskontrollen mit einem risikobasierten Ansatz zum Schutz der Daten während ihres gesamten Lebenszyklus kombiniert werden, resultiert dies in der Fähigkeit, die Daten unabhängig davon, wo sie sich befinden und wer darauf zugreift, zu schützen. Diese Technik ist eine der Möglichkeiten, um diese hochkomplexen Umgebungen abzusichern.

Die praktische Maßnahme in diesen Ökosystemen besteht darin, eine Richtlinie anzuwenden, die Kontrollen nutzt, die das Risiko eines bestimmten Systems zu einem bestimmten Zeitpunkt erfüllen, und sie dann kontinuierlich in Echtzeit überwacht und aktualisiert, um der sich ständig verändernden cyberbedrohenden Welt gerecht zu werden. Verwenden Sie die technischen Kontrollen, die die Hardware- und Softwarefähigkeiten bereits bieten, wie Secure Boot, Hardware Root of Trust mit TPM-Modulen oder SGX-Speicherkeys, Verschlüsselung usw.

Es gibt kein Wundermittel, das man kaufen kann, um eine umfassende Sicherheitslösung in diesen komplexen Ökosystemen bereitzustellen. Es geht darum, Sicherheitsrichtlinien zu erstellen und durchzusetzen, während Bedrohungen entstehen und sie in großem Umfang einzusetzen, indem man Hardware, Software und die notwendigen Prozesse nutzt, um das Bit sicher zu halten, während es vom Rand bis hin zum gesamten Ökosystem fließt.

Das DevOps-Framework bietet effektive Mechanismen, um Sicherheit für alle Vermögenswerte im Ökosystem zu gewährleisten. Container sollten mit Instrumenten ausgestattet sein, um Sicherheitskontrollen und -richtlinien durchzusetzen. Sicherheit muss in den DevOps-Prozess selbst integriert werden, da die Sicherheitsumsetzung durch verschiedene Entwickler zu einer erhöhten Komplexität und Variabilität im System führt. Der Entwickler muss über die erforderlichen Fähigkeiten und Einschränkungen verfügen, auf deren Grundlage er arbeiten muss.

Entwickler müssen immer noch Sicherheitsarbeit leisten, wie zum Beispiel sicherstellen, dass sie geeignete Sicherheitstools für die spezifische Bedrohungsumgebung verwenden, aber der Hauptaufwand, die Komplexität, sollte in die DevOps-Architektur abstrahiert werden.

Eines der kritischen Bereiche in einer komplexen Theaterumgebung ist das Management von Edge-Geräten wie Überwachung und Aktualisierung der Firmware. Es erfordert Innovation, um sicherzustellen, dass diese Geräte gesichert sind und die Datensicherheit, Profile und Richtlinien in den Systemen im großen Maßstab unterstützen können. Aus diesem Grund wächst das Ökosystem derzeit stark an, um dieser Herausforderung gerecht zu werden.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
