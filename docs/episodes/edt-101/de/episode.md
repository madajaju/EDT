---
layout: posts
title: "Netzwerk-Controller-Sicherheit mit Elisity"
number: 101
permalink: episode-EDT101-de
has_children: false
lang: de
nav_exclude: true
parent: Folgen
grand_parent: Deutsch
nav_order: 101
tags:
    - networksecurity
    - cybersecurity
    - elisity
    - comms
    - technology
    - process

date: Mon Aug 22 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Dan Demers
    - Dana Yanch

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher von Intel, Chief Solutions Architect im öffentlichen Sektor, führt Interviews mit Netzwerksicherheitsexperten Dana Yanch und Dan Demers von Elisity über Netzwerk-Controller-Sicherheitstechniken und Zero-Trust-Architekturen."
video: "https://youtu.be/url"
description: "Darren Pulsipher von Intel, Chief Solutions Architect im öffentlichen Sektor, führt Interviews mit Netzwerksicherheitsexperten Dana Yanch und Dan Demers von Elisity über Netzwerk-Controller-Sicherheitstechniken und Zero-Trust-Architekturen."
---

<div>
{% include transistor.html id="d4feba70" title="#101 Network Controller Security with Elisity" %}

{% include youtube.html id="url" %}
</div>

---

Dana arbeitet seit den letzten 15 Jahren im Bereich Hardcore Networking. Er hat mit softwaredefinierten Netzwerken und Weitverkehrsnetzwerken gearbeitet und sich eine Zeit lang auf die SD-WAN-Welt konzentriert. Danach hat er mit der Cloud gearbeitet, kehrte jedoch zu seinen Wurzeln im Bereich Netzwerksicherheit bei Elisity zurück.

Dan hat hauptsächlich im Bereich Netzwerke gearbeitet, aber er begann mit fortgeschrittenen Diensten bei Cisco und hat einige Arbeiten in der Öl- und Gasbranche in Houston gemacht. Anschließend wechselte er in den Bereich SASE SD-WAN, wo er mit Dana zusammengearbeitet hat. Jetzt konzentriert er sich auf Netzwerksicherheit sowie softwaredefinierte Sicherheit. Dan sagt, dass der Begriff jedoch schwer fassbar ist, weil es sich um Mikrosegmentierung durch Identität handelt.

Die traditionelle Methode, um Micro-Segmentation durch VLANs und Firewalls zu erstellen, reicht nicht mehr aus. Seit 15 Jahren konzentriert sich die Netzwerksicherheit auf die Absicherung der Netzwerkperipherie. Das Errichten einer undurchdringlichen Barriere um ein Unternehmen herum ist immer noch unerlässlich, und Firewalls erledigen einen unglaublichen Job, um Personen vom Netzwerk fernzuhalten. Aber größtenteils herrscht im Inneren des Netzwerks, wo es aufgrund von IoT und OT eine Explosion neuer Konnektivitätsanforderungen gegeben hat, einmal ein wildes Durcheinander, sobald ein Benutzer im Inneren ist. Da die äußere Barriere robust ist, wird jeder Benutzer im Inneren oft als legitimer oder vertrauenswürdiger Benutzer angesehen.

Die Realität ist, dass die meisten aktuellen Angriffe im Netzwerk stattfinden, indem vertrauenswürdige Benutzer, Geräte und Anwendungen ausgenutzt werden.

Es gibt viele Gründe, warum VLANs, IP ACLs, Firewalls und traditionelle Segmentierungsmethoden heute nicht mehr für die Sicherheit bei seitlicher Bewegung funktionieren. Sie können in statischen Umgebungen in kleinem Maßstab funktionieren. Sie funktionieren gut am Netzwerkrand und an bestimmten Orten wie Engpässen oder Aggregationspunkten, aber es gibt drei häufige Gründe, warum diese nicht mehr ideal sind.

Zuerst sind die Skalierbarkeit und operative Effizienz traditioneller Methoden fragwürdig. Die Verwaltung von VLANs, IP ACLs und Firewalls in großen Unternehmen erfolgt manuell. Es handelt sich nicht um eine verteilte, softwaredefinierte Architektur, sondern erfordert eine Konfiguration Box für Box, Zeile für Zeile. Sie sind nicht dynamisch oder reaktionsschnell gegenüber Ereignissen im Netzwerk. Ihre Verwendung führt auch zu einem Netzwerk wie ein Schweizer Käse mit zufälligen Löchern. Benutzer, insbesondere Netzwerkbetreiber, stellen oft das größte Risiko eines Systems dar. Zum Beispiel könnten sie ein VLAN öffnen oder eine Einstellung ändern, um einen schnellen Test durchzuführen, aber dann die Änderung nicht rückgängig machen.

Ein weiteres Beispiel ist, dass eine VLAN mit einem Anwendungsfall beginnt und langsam auf andere Anwendungsfälle ausgedehnt wird. Plötzlich hat ein VLAN, das zuvor nur zehn Geräte hatte, jetzt 60 Geräte. In der OT-Welt könnten sechs oder sieben verschiedene Prozesse darin ausgeführt werden, da es das vertrauenswürdige LAN war. Oft wachsen diese Umgebungen langsam und sind undokumentiert, sodass das Risiko unbemerkt bleibt.

Das zweite Problem besteht darin, dass VLANs und Firewalls von Natur aus am falschen Ort im Netzwerk platziert sind, um eine seitliche Bewegungssicherheit zu gewährleisten. Wenn Sie sich im selben VLAN wie ein anderes Gerät, Benutzer oder Anwendung befinden, ist dieser Kommunikationskanal geöffnet, auch wenn es nicht sein müsste. Firewalls werden in der Regel nicht strategisch an einem Ort eingesetzt, an dem sie das Zugriffslevel seitlicher Bewegungen behandeln können. Sie müssen den Verkehr durch eine Firewall leiten und zurückführen, was ineffizient ist. Dann haben Sie einen Engpass.

Schlechte Schauspieler betrachten Netzwerke, um herauszufinden, wie sie diese verdrehen können, um ein bestimmtes Ergebnis zu erzielen, nicht wie sie funktionieren sollten oder beabsichtigt waren. Zum Beispiel, wenn ein Benutzer sich in einem VLAN befindet und ein Prozess in einem Anwendungsfall läuft, hindert nichts sie daran, von Port 3 zu Port 32 im selben VLAN zu wechseln. Häufig gestalten Menschen die Sicherheit entsprechend der beabsichtigten Verwendung, anstatt wie sie genutzt werden könnte. Es ist üblich, dass Softwareentwickler Ports wechseln, um effektiv zu arbeiten, aber das ist gefährlich, weil es sie angreifbar macht. Niemand kann Hunderte oder Tausende von Firewalls entlang des gesamten Zugriffsrands platzieren. Das wäre finanziell einschränkend und unmöglich zu verwalten.

Das dritte Problem ist, dass diese veralteten Segmentierungslösungen die Identität, den Kontext oder das Verhalten des mit dem Netzwerk verbundenen Assets nicht berücksichtigen. Es handelt sich um eine starre, netzwerkzentrierte Topologie, die einige grundlegende Sicherheitsmaßnahmen bietet. Aber eine IP-Adresse sagt nichts über die Legitimität des Assets und das Netzwerk, mit dem es verbunden ist, aus. Wie kann man also dieses Netzwerk dynamisch sichern, wenn man nicht weiß, was mit dem Netzwerk verbunden ist? Ohne jegliche Granularität lässt sich ohne weiteres keine Richtlinie festlegen; es funktioniert nicht, jedes Gerät gleich zu behandeln.

Auch wenn es eine Analyse des Verkehrstyps gibt, findet dies in der Regel mehrere Hops weiter oben statt, was bedeutet, dass Sie jetzt gefährdet sind. Jegliche Durchsetzung kann möglicherweise die Infrastruktur nicht vollständig schützen.

Diese Erkennungsfähigkeit hat immer noch einen Wert, auch wenn kein Schutz vorhanden ist. Dennoch ist die Fähigkeit, etwas am Rand zu stoppen, so nahe wie möglich am Vermögen, eine bessere Lösung.

Schau dir die nächste Episode dieser Serie [hier](episode-EDT101) an.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
