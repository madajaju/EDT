---
layout: posts
title: "Anforderungen für Edge-to-Cloud-Architekturen"
number: 95
permalink: episode-EDT95-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 95
tags:
    - data
    - edge
    - compute
    - cybersecurity

date: Mon Jul 11 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "Intel's Darren Pulsipher, Chief Solutions Architect, und Dr. Anna Scott, Chief Edge Architect, Public Sector, diskutieren wesentliche Anforderungen für Edge-to-Cloud-Service-Architekturen."
video: "https://youtu.be/url"
description: "Intel's Darren Pulsipher, Chief Solutions Architect, und Dr. Anna Scott, Chief Edge Architect, Public Sector, diskutieren wesentliche Anforderungen für Edge-to-Cloud-Service-Architekturen."
---

<div>
{% include transistor.html id="6279b2d2" title="#95 Requirements for Edge to Cloud Architectures" %}

{% include youtube.html id="url" %}
</div>

---

Anna hat kürzlich eine Initiative zur Erstellung eines Whitepapers über Edge-to-Cloud-Service-Architekturen geleitet. Edge-to-Cloud umfasst alle wichtigen technologischen Aspekte, die Intel wichtig sind: Künstliche Intelligenz, Edge-Computing, Cloud und Netzwerkverbindungen. Das Ziel war es, Experten auf diesen Gebieten zusammenzubringen, um zu diskutieren, wie Intel Edge-Cloud-Architekturen angeht und wie diese Architekturen mit der Cloud verbunden werden können. Der Fokus lag auf den wesentlichen Elementen im Gegensatz zur aktuellen Technologie, die die Probleme anspricht. Dies würde einen Rahmen bieten, um über Diskrepanzen zu sprechen und nach ihnen zu suchen. Eine interessante Erkenntnis war, dass IT-, OT- und Netzwerkexperten unterschiedliche technische Sprachen mit unterschiedlichen Taxonomien sprechen, neben anderen Herausforderungen.

Eine Lektion aus diesen Diskussionen war, dass die Kommunikation von entscheidender Bedeutung ist und ein solides Wissen über Ihre Kommunikation vorhanden sein muss, insbesondere am Rand. Dies bestimmt, wie viel Rechenleistung lokal erfolgen muss und wie oft Sie auf die Cloud angewiesen sein können. Im öffentlichen Sektor muss die zusätzliche Komplexität der Anwendungsfälle die Funktionalität auch unter Bedingungen wie Verweigerung, Störung, Unterbrechung und begrenzten (DDIL) Ressourcen aufrechterhalten. Wir müssen diese Architekturen der Cloud-Konnektivität basierend auf diesen Einschränkungen neu durchdenken.

Kommunikation und Konnektivität sind der signifikanteste Unterschied zwischen einer Cloud-Architektur, einer Service-Infrastruktur und dem Edge. Viele aktuelle Tools nehmen fälschlicherweise eine konstante Konnektivität an; wenn etwas nicht verbunden ist, ist es tot. Das trifft jedoch nicht auf den Edge zu. Das wird deutlich in Edge-Organisationen wie dem Militär. Aber selbst in Branchen wie der Telemedizin muss man davon ausgehen, dass es keine gute Konnektivität gibt, zum Beispiel bei einem Anwendungsfall der Telemedizin, bei dem man von dem WLAN des Patienten zu Hause abhängig sein könnte. Der industrielle Sektor hat ähnliche Anforderungen. Manche Dinge können nicht offline sein, aufgrund kritischer Steuerungen für bestimmte Maschinen oder Prozesse.

Also, wie können Sie eine auf Edge-basierte Berechnung haben, die alle wichtigen Funktionen beibehält und dennoch in einer quasi unterbrochenen Verbindung mit der Cloud steht? Es gibt Architekturen dafür, aber es ist noch viel mehr zu tun, um einen nahtlosen Betrieb zu ermöglichen, wenn die Verbindung nicht kontinuierlich ist. Was können Sie weiterhin tun, und was passiert, wenn alles wiederhergestellt ist? Es wird eine Unterbrechung geben in Bezug auf das, was mit den Daten geschehen ist. Es wird komplex, wenn Sie all diese Daten im großen Maßstab synchronisieren müssen, vielleicht mit Tausenden von Edge-Geräten.

## Sicherheit

Sicherheit am Rande ist ein weiteres Gebiet, in dem immer mehr Arbeit zu erledigen ist. Traditionelle Sicherheitsmaßnahmen wie die Authentifizierung sind nach wie vor von entscheidender Bedeutung, aber Geräte bilden eine riesige Angriffsfläche und ihre physische Sicherheit ist eine andere Angelegenheit. Die Sicherheit von Laptops neigt dazu, solide zu sein, und diese Maßnahmen müssen auf andere Randgeräte angewendet werden. Neue KI-Entwicklungen werden helfen festzustellen, ob sich die Geräte an dem Ort befinden sollten, an dem sie sein sollten, und Anomalien in einer von, sagen wir, zehntausend Geräten erkennen.

## Anwendungsentwicklung

Beim Erstellen von Anwendungen müssen Entwickler die einzigartige Edge-Umgebung verstehen und sie entwickeln, ohne dass eine Neuprogrammierung oder Integration neuer Middleware erforderlich ist, um am Edge ausgeführt zu werden. Anwendungen müssen in der Lage sein, mit Rechen-, Energie- und Konnektivitätseinschränkungen auszuführen. Darüber hinaus kann sich der Edge in einer neuen verteilten Rechenkonfiguration befinden und die Anwendung muss so konzipiert sein, dass sie in einem Mesh-Netzwerk mit hochgradig verteilter Rechenleistung ausgeführt werden kann. Das Entkoppeln der Anwendung von der Hardware ist eine bedeutende Veränderung und wird immer allgemeingültiger und weniger zweckgebunden. Dennoch geht der gesamte Dialog darauf hin, Daten von überallher zu erhalten und überall zu verwenden.

## Datenmanagement

Das Volumen an generierten und gesammelten Daten am Rand ist so groß, dass es keinen Sinn ergibt, all diese Daten an ein Rechenzentrum zu senden, um sie zu verarbeiten. Einer der Gründe ist der Kostenfaktor. In den Vereinigten Staaten kann ein privates 5G-Netzwerk kosteneffektiv für solch enorme Datenmengen sein, aber die Kosten wären ohne private 5G-Netzwerke für die meisten Organisationen prohibitiv.

Das andere Problem ist, dass die meisten Daten nutzlos sind. Wenn man zum Beispiel Geräte oder Anwendungen überwacht, zeigen die meisten Daten an, dass alles korrekt funktioniert, obwohl man sich nur für Ereignisse interessiert, die darauf hindeuten, dass etwas nicht in Ordnung ist. KI-Algorithmen werden am Rand angewendet, um die Menge an irrelevanten Daten zu verringern, die zur Verarbeitung in die Cloud zurückgeschickt werden.

Der traditionelle Betriebsmodus für das Datenmanagement, bei dem alles ins Rechenzentrum kopiert und dort analysiert wird, funktioniert am Rand (der Infrastruktur) nicht gut. Das Verschieben von Anwendungen an den Rand funktioniert auch nicht immer. Intel hat einige andere Datenarchitekturen oder Datenoperationen identifiziert. Eine davon heißt Datenaustausch, bei dem Daten erst nach der Analyse am Rand in sicheren Enklaven bewegt werden, ähnlich wie bei der Stapelverarbeitung. Die andere nennt sich intelligente Datenströme, bei denen SADE und SABR ins Spiel kommen. Daten werden nur entsprechend der Regeln verschoben und gestreamt. Dies funktioniert in DDIL-Umgebungen, da es die aktuellen Betriebsumgebungen ermitteln und anpassen kann.

## Verwaltbarkeit

Systeme müssen so entworfen werden, dass sie gewartet werden können. Es ist nicht möglich, zehntausend Geräte bereitzustellen und dann regelmäßig eine kleine Armee von Mitarbeitern zu entsenden, um diese zu überprüfen. Die IT war traditionell vorsichtig, ein funktionierendes System nicht aktualisieren zu wollen. Dennoch ergibt es keinen Sinn, Systeme unbeaufsichtigt zu lassen, insbesondere angesichts der Angst vor Ransomware-Angriffen auf OT-Netzwerke. Systeme müssen so strukturiert sein, dass alles leicht aktualisiert werden kann, um die Widerstandsfähigkeit gegenüber der Sicherheitsumgebung zu gewährleisten.

## Verfügbarkeit

Insbesondere in kritischen Bereichen wie dem Militär oder dem Gesundheitswesen ist es wichtig, Systeme mit ausreichender Redundanz zu entwerfen. Es handelt sich eher um einen systemischen Ansatz. Wenn einzelne Komponenten ausfallen, muss das Endziel dennoch erreicht werden. Das ist sehr unterschiedlich von dem, was in der Cloud passiert, wo es darum geht, die Infrastruktur aufrechtzuerhalten.

Die Technologie ist noch nicht ganz soweit, aber es steht auf dem Radar, für mehrere Netzwerke zu entwerfen. Wenn du zum Beispiel vorzugsweise WiFi 6 verwendest und es fehlschlägt, kann das System auf 4G oder ein anderes verfügbares Netzwerk zurückgreifen. Das Netzwerk muss ebenso solide sein wie die Berechnungen. Ein eigenständiger Betrieb ohne die Netzwerkseite ist anfällig. Wenn du dich für eine kabelgebundene Lösung entscheidest, erhältst du zwar höhere Begrenzungen, verlierst jedoch deine mobilen Anwendungen.

Sie finden das Whitepaper "Essential Requirements for Edge to Cloud Service Architectures" für weitere Informationen unter embracingdigital.org oder intel.org.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
