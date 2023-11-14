---
layout: posts
title: "Förderung von Operationen mit 5G"
number: 109
permalink: episode-EDT109-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 109
tags:
    - 5g
    - comms
    - wifi6

date: Mon Oct 05 2020 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Leeland Brown
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "Intels Darren Pulsipher, Chief Solutions Architect, Leland Brown, Principal Engineer: Technischer Direktor für fortschrittliche Kommunikation und Dr. Anna Scott, Chief Edge Architect für den öffentlichen Sektor, sprechen über die Geschichte der fortschrittlichen Kommunikation und zukünftige Anwendungsfälle mit 5G. Teil zwei von zwei."
video: "https://youtu.be/ZHyeXrkxQhA"
description: "Intels Darren Pulsipher, Chief Solutions Architect, Leland Brown, Principal Engineer: Technischer Direktor für fortschrittliche Kommunikation und Dr. Anna Scott, Chief Edge Architect für den öffentlichen Sektor, sprechen über die Geschichte der fortschrittlichen Kommunikation und zukünftige Anwendungsfälle mit 5G. Teil zwei von zwei."
---

<div>
{% include transistor.html id="b613bc52" title="#109 Advancing Operations with 5G" %}

{% include youtube.html id="ZHyeXrkxQhA" %}
</div>

---

5G eröffnet viele Möglichkeiten. Sie können nun private Netzwerke einrichten, die softwaredefiniert sind, um Ihrem Netzwerk zusätzliche Funktionalität hinzuzufügen. Wohin führt uns diese ermöglichende Technologie?

Anna sagt, dass obwohl wir noch in den Anfangstagen in Bezug auf Bandbreite und Latenz sind, es echte Vorteile bei 5G gibt, wie beispielsweise die Öffnung des Spektrums wie CBRS, der Möglichkeit, vorhandene Nutzergeräte zu nutzen und der Möglichkeit für Kunden, mobilen Zugang zu haben.

Ein Anwendungsfall, der zwar nicht sexy ist, aber weitreichende Auswirkungen hat, besteht darin, dass Sie Ihren Laptop mit auf den Fabrikboden nehmen und ihn für eine vollständige Konnektivität verwenden können. Anstatt mit Notizblock und Papier auf den Fabrikboden zu gehen und die Informationen zurück ins Büro zu übertragen, können Sie die beiden Umgebungen zusammenführen. Die 5G-Standards ermöglichen dies, es handelt sich jedoch nicht zwangsläufig um eine vollständige 5G-Bereitstellung.

Eine Entwicklung, die gerade stattfindet, ist die Fähigkeit, hochauflösende Videos von einer drahtlosen Kamera über 5G zu streamen und eine so niedrige Latenz zu haben, dass Echtzeitanalysen möglich sind. Derzeit können nicht viele 5G-Kameras in dieser Umgebung arbeiten, daher werden Kameras oft in der Nähe von gekoppelten Edge-Computing-Geräten fest verdrahtet, um diesen Echtzeit-Aspekt zu erhalten. Aber diese vorteilhafte Streaming-Option wird bald verfügbar sein.

Ein weiteres Beispiel für einen 5G-Vorteil besteht darin, anstelle von ein oder zwei AR-Headsets mit WLAN 10 bis 20 zu verwenden. Der Schlüsselpunkt ist die MEC (Mobile Edge Compute), die die Möglichkeit bietet, die Anwendungen vor Ort zu haben, anstatt zum Switch oder zum Kern des Carriers zurückkehren zu müssen und diese RAN-Zeit zu haben.

Das Verständnis, wie Frequenzen eingesetzt werden, ist in Anwendungsfällen entscheidend, da einige Anbieter trotz Herausforderungen mmWave eingesetzt haben; n41- und n42-Frequenzen reagieren unterschiedlich in der realen Welt. Daher sind bei lokalen Bereitstellungen die MEC und das RF-Design äußerst wichtig.

Ein überzeugendes Anwendungsbeispiel für den Einsatz von 5G außerhalb der Fabrik ist die Verwendung von Drohnen bei Notfalleinsätzen. Eine frühe Vorstufe der späteren Fähigkeit, Drohnen einzusetzen und ein beschädigtes Gebiet zu bewerten, besteht darin, Drohnen zu verbinden, eine Mission für eine Überflug durchzuführen und dann all diese Daten zusammenzuführen. Obwohl wir noch nicht in der Lage sind, Live-Videos von mehreren Drohnen zu streamen und sie zusammenzufügen, sind wir nahe dran, diese Daten zu sammeln, zu kombinieren und zu analysieren, allerdings noch nicht in Echtzeit.

Ein weiterer Anwendungsfall besteht darin, 5G, KI, Modellierung, Simulation und Edge Computing für das Training in vielen Branchen, einschließlich des Verteidigungsministeriums, zu nutzen. Es gibt einen enormen Vorteil darin, eine realistische Trainingssimulation zu erstellen, ohne die Person in Gefahr zu bringen oder massive Geldbeträge für Live-Training ausgeben zu müssen.

So sehr 5G diese Art von Anwendungsfall ermöglicht, hängt viel davon ab, dass 5G mit einem MEC (Multi-Access Edge Computing) verbunden ist, anstatt dass 5G in die Cloud hochgeht. Die Physik kommt ins Spiel. Du benötigst eine supergeringe Latenz, daher kann die Architektur nicht vom Headset zur Cloud gehen, dann zum MEC und anschließend zur Visualisierung. Es muss vom Headset direkt zum MEC gehen, wo Echtzeitverarbeitung stattfindet. Danach kannst du Daten über die Cloud für ein Echtzeit-Erlebnis teilen.

Es besteht auch die Möglichkeit, MECs zu vernetzen oder zu clustern, so dass Daten niemals zur Cloud gehen müssen. Die MECs können alle Verarbeitungs- und Analyseaufgaben am Schalter erledigen. Dadurch könnten Fortschritte wie intelligente Gebäude und Städte ermöglicht werden. Diese Art von 5G-fähiger Technologie ist der ideale Nährboden für bedeutende Veränderungen in der Branche.

Leland weist darauf hin, dass die Geschichte der neuen Netzwerke verteiltes Rechnen ist. Alles ist durch drahtlose Konnektivität verbunden, aber Recheneinheiten sind über die Landschaft verteilt, wo Apps am Rand sitzen und die Anwendungsfälle ermöglichen. Wo wir hingehen, ist drahtloses Eins-zu-Eins-Berechnen.

Welche Rolle spielt Intel bei 5G? Es geht weit über die Bereitstellung von Chips hinaus. Da 5G softwarebasiert ist, hat Intel das Ökosystem ermöglicht, auf Basis seines L15 zu bauen oder zu entwerfen. Beim Wechsel von 4G zu 5G hat Intel den funktionalen Block des RAN, namens FlexRan, übernommen und Firmen ermöglicht, ihre Basisband-Architekturen zu entwerfen und zu virtualisieren. Die Erstellung der FlexRan-Referenzarchitektur hat es neuen Marktteilnehmern wesentlich einfacher gemacht, dies als Ausgangspunkt zu verwenden.

Auf der Hardware-Seite hat Intel viele Zyklen investiert, um sicherzustellen, dass die kommerzielle, frei verkäufliche Hardware gut funktioniert, um alle Basisstationen, RAN-Anwendungen und Server zu unterstützen. Die neuen Systeme, die entwickelt werden, wenn man sich von proprietären Systemen abwendet, müssen problemlos von derselben Art Server unterstützt werden, die in der Cloud und im Rechenzentrum funktionieren, denn nun hat man den Vorteil der Skalierbarkeit und der Kostenersparnis.

Dies wird die Preise senken und zu mehr Innovation in der Branche führen.

Schau dir den ersten Teil dieses Interviews [hier](episode-EDT108) an.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
