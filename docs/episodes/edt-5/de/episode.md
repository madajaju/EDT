---
layout: posts
title: "Infrastruktur-Reifemodell"
number: 5
permalink: episode-EDT5-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 5
tags:
    - infrastructurematurity
    - compute
    - technology
    - sdi
    - cloud
    - multicloud

date: Thu Jul 23 2020 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Die digitale Transformation kann schwierig sein. Viele Organisationen werden gelähmt, wenn sie versuchen, all die Technologien zu entschlüsseln, die ihnen jeden Tag entgegengeworfen werden. Auf dieser Reise, wie bei jeder anderen, ist es wichtig, eine Karte zu haben. In dieser Episode erläutert Darren das Infrastruktur-Reifemodell, um Organisationen dabei zu helfen, herauszufinden, wo sie sich in ihrer digitalen Transformation befinden, wohin sie als nächstes gehen können und wie sie dorthin gelangen können."
video: "https://youtu.be/ZMEXlPBn82o"
description: "Die digitale Transformation kann schwierig sein. Viele Organisationen werden gelähmt, wenn sie versuchen, all die Technologien zu entschlüsseln, die ihnen jeden Tag entgegengeworfen werden. Auf dieser Reise, wie bei jeder anderen, ist es wichtig, eine Karte zu haben. In dieser Episode erläutert Darren das Infrastruktur-Reifemodell, um Organisationen dabei zu helfen, herauszufinden, wo sie sich in ihrer digitalen Transformation befinden, wohin sie als nächstes gehen können und wie sie dorthin gelangen können."
---

<div>
{% include transistor.html id="d5cf91e3" title="#5 Infrastructure Maturity Model" %}

{% include youtube.html id="ZMEXlPBn82o" %}
</div>

---

Digitale Transformation kann schwierig sein. Viele Organisationen werden gelähmt, wenn sie versuchen, all die Technologien zu entschlüsseln, die ihnen jeden Tag entgegengeworfen werden. Auf dieser Reise ist es wichtig, eine Karte zu haben, wie bei jeder anderen Reise auch. In dieser Episode erklärt Darren das "Infrastruktur-Reifemodell", um Organisationen dabei zu helfen herauszufinden, wo sie sich in ihrer digitalen Transformation befinden, wohin sie als nächstes gehen können und wie sie dorthin gelangen können.

## Standardisierte Phase

Fast jede Organisation befindet sich in dieser standardisierten Phase oder darüber hinaus. Das Verständnis dieser Phase gibt uns eine Grundlage, um über die gemeinsamen Dinge zu sprechen, die wir in Organisationen sehen.

## Grundlegend

Der Grundlevel ist dort, wo wir unkoordinierte Infrastruktur und reaktionsgesteuertes Management finden. Dies ist besonders häufig in Start-ups der Fall, wo eine Organisation Dienstleistungen oder Hardware nach Bedarf kauft, als Reaktion auf Ereignisse und nicht als Teil eines Masterplans. Hier sehen wir auch maßgeschneiderte Soft- und Hardware-Stapel. Eine umfangreiche individuelle IT ist ebenfalls Teil dieser Reifestufe.

## Zentralisiert.

Auf diesem Level ist die Infrastruktur zentralisiert. Organisationen kaufen Kapazität anstelle von speziell entwickelter Hardware. Die Einkäufe erfolgen nicht mehr reaktiv, sondern im Rahmen eines längerfristigen Plans. In der Regel verfügt die Organisation über gemeinsame Serverkonfigurationen, um kosteneffizient in größerem Umfang zu kaufen und eine höhere Zuverlässigkeit zu gewährleisten. IT ist stärker zentralisiert und spezialisiert, zum Beispiel in den Bereichen Netzwerk, Speicher, Rechenleistung und Sicherheit.

## Vereinfacht

Auf vereinfachtem Niveau ist die Infrastruktur stärker konsolidiert. Unterschiedliche Abteilungen können Geräte wie Server, Speicher und Netzwerke gemeinsam nutzen. Organisationen erzielen eine bessere Leistung, wenn sie von alten zentralen und komplizierten Methoden zu neuen zentralisierten und vereinfachten Methoden übergehen. Die Betriebskosten gehen durch gesteigerte Effizienz zurück.

## Virtualisierte Phase

Die meisten Organisationen sind heute zumindest teilweise in der virtualisierten Phase. Hier finden wir standardisierte Konfigurationen und private Clouds.

Servervirtualisierung bietet die Flexibilität, Anwendungen auf verschiedenen Maschinen auszuführen und sie problemlos zwischen den Maschinen zu verschieben.

Die Speichervirtualisierung ist eine neuere Entwicklung, die ähnliche Vorteile wie die Servervirtualisierung bietet: Flexibilität für dynamischere Entscheidungen. Der Speicher kann jetzt das gesamte Ökosystem abdecken. Speicher kann für eine bestimmte Anwendung bereitgestellt werden und dieser Speicher sowie die Anwendung können innerhalb der Infrastruktur bewegt werden.

Netzwerkvirtualisierung, die neueste Ergänzung, wurde insbesondere von Internetdienstanbietern angenommen. Sie haben aufgrund der Effizienz, dynamische Änderungen im Netzwerk ferngesteuert anstatt von zuvor zweckgebundenen Hardware vornehmen zu können, eine enorme Investition getätigt.

All diese Virtualisierungstechnologien sind in Angeboten im Bereich der privaten Cloud miteinander verbunden, sowohl kommerziell als auch in Open Source, oft an einem einfach zu verwaltenden Ort. Organisationen gehen in diese Phase über und verändern und konsolidieren ihre IT von einem vertikalen Fokus hin zu einem Blick auf alles (ANMERKUNG: Können wir dies als horizontalen Fokus bezeichnen?). Dabei werden Systeme, Anwendungen und Dienste eher betont als Rechenleistung, Speicher und Netzwerk.

## Automatisierte Phase

In der automatisierten Phase können Organisationen die Infrastruktur automatisch bereitstellen, was Zeit spart, indem Schichten von Personen und Berechtigungen ausgeschaltet werden. Mit Hilfe von Self-Service-Portalen erhält ein Ingenieur oder Softwareentwickler sofort die benötigten Ressourcen. Diese automatische Bereitstellung ermöglicht auch eine grundlegende Automatisierung von Updates, virtuellen Maschinen, Sicherheit und Compliance. Die IT befindet sich nun weniger im reaktiven Modus, sondern im proaktiven Modus. Weitere wertvolle Bestandteile dieser Phase sind zum Beispiel das automatische Hochfahren der Infrastruktur für Anwendungen in der Produktion und selbstheilende Anwendungen.

## Orchesterphase

Mit zunehmender Komplexität der Automatisierung wird eine orchestrierte Phase notwendig. Automatisierung bedeutet, Handlungen auf eine Maschine anzuwenden, während Orchestrierung die Koordination der Handlungen auf mehreren Maschinen oder sogar Modalitäten (Speicher, Rechenleistung, Netzwerk) für eine Anwendung ist. Darüber hinaus können automatisierte Anwendungsstapel mehrere Anwendungen auf verschiedenen Servern bereitstellen. In dieser Phase orchestrieren Organisationen auch hybride Dienste, zum Beispiel Ressourcenmanagement über öffentliche und private Clouds hinweg. Die Vorteile dieser Orchestrierung sind gesunkene Betriebskosten, gesunkene Investitionskosten und verkürzte Bereitstellungszeit.

## Echtzeit (SLA-verwaltete) Phase

In einer Echtzeitphase befinden sich Organisationen in einer Service-Level-Agreement-Infrastruktur. Anstatt Anwendungen verwenden die Organisationen Dienste, die Wert liefern und alles miteinander verbinden. Gemeinsam genutzte Dienste laufen über mehrere Hybrid-Clouds und sogar über veraltete Infrastrukturen. Durch das Zusammenführen der Hybrid-Infrastruktur, eine an Richtlinien orientierte Orchestrierung und eine dienstbasierte Orchestrierung wird die Infrastruktur, das Datenmanagement und die Dienste optimiert.

## Schlussfolgerung

Es ist üblich, dass verschiedene Teile Ihrer Organisation sich in unterschiedlichen Phasen befinden. Einige Gruppen werden weiter fortgeschritten sein als andere; das ist gesund. Kleine Vorreitergruppen können scheitern, ohne die gesamte Organisation zu beeinflussen, oder sie können einen Durchbruch erzielen und den Rest der Organisation mit nach oben ziehen. Nur sehr wenige Organisationen haben sich in die höchste Phase auf der Karte bewegt. Die Hauptsache dabei ist, sich nicht entmutigen zu lassen, sondern die Karte als Leitfaden zu nutzen, um herauszufinden, wo Sie sich befinden und welche nächsten Schritte für Ihre Organisation sein könnten.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
