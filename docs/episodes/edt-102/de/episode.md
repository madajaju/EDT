---
layout: posts
title: "Identitätsbasierte Mikrosegmentierung mit Elisity"
number: 102
permalink: episode-EDT102-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 102
tags:
    - microsegmentation
    - otsecurity
    - identitybasednetworking
    - cybersecurity
    - comms
    - technology
    - edge
    - sdn

date: Wed Aug 24 2022 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Dana Yanch
    - Dan Demers

img: thumbnail.png
image: thumbnail.png
summary: "Im Teil 2 von Sicherheit mit Elisity diskutiert Darren identitätsbasierte Mikrosegmentierungslösungen mit Dana Yanch, Direktorin für technisches Marketing, und Dan Demers, technischer Architekt."
video: "https://youtu.be/L2g_PjWTlWI"
description: "Im Teil 2 von Sicherheit mit Elisity diskutiert Darren identitätsbasierte Mikrosegmentierungslösungen mit Dana Yanch, Direktorin für technisches Marketing, und Dan Demers, technischer Architekt."
---

<div>
{% include transistor.html id="f7d12ab8" title="#102 Identity-based Micro-segmentation with Elisity" %}

{% include youtube.html id="L2g_PjWTlWI" %}
</div>

---

Im zweiten Teil von "Security mit Elisity" diskutiert Darren Identitätsbasierte Mikrosegmentierungslösungen mit Dana Yanch, Leiterin für technisches Marketing, und Dan Demers, technischer Architekt.

Elisitys Ansatz zur Netzwerksicherheit unterscheidet sich von traditionellen Architekturen durch die Art der Bereitstellung, Verteilung im Netzwerk und effiziente Durchführung, indem sie einen schnellen Mehrwert bietet. Das Hauptaugenmerk lag darauf, es so einfach, intuitiv und effektiv wie möglich zu gestalten, damit jede Branche von der Technologie profitieren kann.

Der Schlüssel zur Technologie von Elisity ist die Mikrosegmentierung, was bedeutet, dass die Fähigkeit besteht, jeden Benutzer, jedes Gerät oder jede Anwendung völlig zu isolieren, unabhängig davon, auf welchem Netzwerk es sich befindet, wo es sich im Netzwerk befindet oder ob es verwaltet oder nicht verwaltet wird. Mit anderen Worten ist es flexibel, eine Ressource von einer anderen zu isolieren, ohne Einschränkungen durch Netzwerkarchitektur oder Konstrukte wie VLANs oder VRFs.

Traditionelle Mikrosegmentierungssysteme, die einen Hardwareaustausch oder eine Instantiierung einer Vor-Ort-Appliance erfordern, können Monate oder Jahre brauchen, um einsatzbereit zu sein. Dennoch bietet Elisity innerhalb einer Woche volle Funktionalität, indem sie zu einer cloudnativen und cloudbasierten Mikrosegmentierungsplattform wechseln. Die gesamte Steuerungsverwaltung und Richtlinienebenen werden vollständig über die Cloud bereitgestellt, und die Komponente, die sich mit Ihrem Vor-Ort-Netzwerk verbindet, ist zu 100 Prozent softwarebasiert. Sie müssen nichts an Ihrer Vor-Ort-Infrastruktur ändern, da sie auf Ihrer vorhandenen Infrastruktur aufbaut. Es skaliert gut, ist einfach zu verwalten und wird dynamisch verteilt.

Elisity bietet auch eine On-Prem-Lösung für den OT-Bereich an, bei der Organisationen sie hinter ihrer DMZ aufbewahren und jeglichen Zugriff blockieren können.

Elisitys Plattform ist ein Mikrodienst im Sinne der horizontalen Skalierbarkeit. Sie können klein anfangen und 10.000 Dinge zum Netzwerk hinzufügen und mit Ihnen skalieren, egal ob lokal oder in der Cloud. Sie ist vollständig automatisiert im gesamten Netzwerk. Es gibt kaum Reibung und sie ist langfristig einfach zu verwalten.

Ein bedeutender Unterschied zwischen der Plattform von Elisity und anderen Überlagerungsnetzwerken besteht darin, dass Elisity sich mit der Steuerungs- und Richtlinienebene statt mit der Datenübertragungsebene befasst. Es kann dieselbe Netzwerksicherheit auf granularer Ebene anwenden, ohne dabei auf Pakete zuzugreifen. Es teilt dem Netzwerk dynamisch mit, wer mit wem kommunizieren kann, basierend auf den Attributen und Identitäten, die im Netzwerk gefunden werden.

Ein Dreieck aus Benutzern, Anwendungen und Geräten ist eine ausgezeichnete Möglichkeit, dies zu veranschaulichen. Innerhalb dieses Dreiecks befinden sich alle Verbindungen, über die sich die Dinge miteinander austauschen. Elisity kann jede einzelne Verbindung oder jeden Kanal zwischen Benutzern, Anwendungen und Geräten mit hoher Genauigkeit absichern. Dies geschieht auf der Ebene der Netzwerksteuerung. Sobald der Datenverkehr auf die erste Schnittstelle trifft, wird er gesichert.

Sicherheit ist auf der Netzwerkebene und nicht auf der Anwendungsebene unerlässlich, da es sich um Zehntausende von Geräten in Ihrem Netzwerk handeln kann, auf die Sie keinen Agenten setzen oder ändern können, da sie beispielsweise eingebettete Betriebssysteme, Kameras, Zutrittsleser und Personen haben. Dies ist besonders wichtig auf der OT-Seite.

Mit OT liegt der Fokus auf Verfügbarkeit und Integrität. Dinge müssen weiterhin sicher funktionieren, da der Prozess kritische Infrastruktur darstellen könnte. Dies unterscheidet sich von IT, wo man eine Quarantäne einrichten und eine neue Instanz starten kann, wenn es zu einem Eindringen kommt. OT erfordert eine andere Denkweise. Während etwas in der IT sechs Monate oder ein Jahr existieren kann, kann etwas in OT 20 Jahre existieren. Oft werden diese Infrastrukturen alle paar Jahre gewartet oder aktualisiert oder bleiben bis zum Auftreten eines Fehlers unbeaufsichtigt. Sicherheit bedeutet die Beschränkung der Konnektivität. Wenn Sie sich zum Beispiel in einem VLAN befinden, bedeutet das nicht, dass Sie mit einem RTU, einem Sensor, einem HMI oder einem DCS sprechen sollten, die einen Switch entfernt sind. Bei einer veralteten Konstruktion besteht keine effiziente, flexible Möglichkeit, zu verhindern, dass diese Geräte sich verbinden.

Mit Elisitys System legen Sie Richtlinien basierend auf der Gruppierung von Dingen oder den Attributen, die Assets zugewiesen sind, fest, anstatt jede einzelne Position durchzugehen. Dies kann so einfach sein wie das Gruppieren aller Ihrer Prozesse, so dass sie nur in Nord-Süd-Richtung kommunizieren können und nicht in Ost-West-Richtung, oder beispielsweise das Zulassen, dass Abteilungsleiter sechs oder sieben Arten von Dingen teilen können. Zwei oder drei Richtlinien können schnell Ihre Angriffsfläche von 65.000 potenziellen Angriffsports auf zwei oder drei reduzieren.

Ein Anwendungsfall, der in OT-Netzwerken häufig vorkommt, ist, wenn ein Anbieter ein Update auf einem Gerät durchführt. Du musst sie hereinlassen und ihnen Zugriff auf dein gesamtes Netzwerk gewähren. Mit Elisity kannst du ihnen jedoch einfach für eine begrenzte Zeit Zugang gewähren und ihnen erlauben, auf feste Vermögenswerte zuzugreifen.

Angenommen, Sie möchten mehr über Elisity's Technologie erfahren. In diesem Fall erklären viele Ressourcen, einschließlich Videos, White Papers und Dokumente, wie die Lösung funktioniert und wie sie innerhalb einer Woche in Ihrem Netzwerk auf Elisity.com angewendet werden könnte.

Schauen Sie sich die vorherige Folge dieser Serie [hier](episode-EDT101) an.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
