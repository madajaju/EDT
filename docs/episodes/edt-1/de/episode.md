---
layout: posts
title: "Geschichte der datenzentrierten Architektur"
number: 1
permalink: episode-EDT1-de
lang: de
nav_exclude: true
nav_order: 1
tags:
    - moderncomputing
    - cloudtechnology
    - virtualization
    - datamanagement
    - multicloud
    - technology

date: Thu May 07 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.bmp
image: thumbnail.bmp
summary: "In dieser Episode spricht Darren über die Geschichte der Anwendungen und wie sich aktuelle Veränderungen, hauptsächlich aufgrund der Datenflut aus dem Internet der Dinge, auf datenzentrierte Architekturen auswirken. Die Infrastruktur ist bereit, aber wir haben noch keinen geeigneten Weg, um all unsere Daten zu verwalten. Es gibt drei Elemente, die geändert werden müssen, um diesen Prozess zu erleichtern: Menschen (Organisation), Prozess (Betrieb) und Architektur (Technologie). Darren konzentriert sich auf die Architektur, bei der Daten und Berechnungen auf Tausenden von Edge-Geräten und über öffentliche und private Clouds verteilt sind."
video: "https://youtu.be/SZyyG2AGM6g"
description: "In dieser Episode spricht Darren über die Geschichte der Anwendungen und wie sich aktuelle Veränderungen, hauptsächlich aufgrund der Datenflut aus dem Internet der Dinge, auf datenzentrierte Architekturen auswirken. Die Infrastruktur ist bereit, aber wir haben noch keinen geeigneten Weg, um all unsere Daten zu verwalten. Es gibt drei Elemente, die geändert werden müssen, um diesen Prozess zu erleichtern: Menschen (Organisation), Prozess (Betrieb) und Architektur (Technologie). Darren konzentriert sich auf die Architektur, bei der Daten und Berechnungen auf Tausenden von Edge-Geräten und über öffentliche und private Clouds verteilt sind."
---

<div>
{% include transistor.html id="7dda1ee9" title="#1 History of Data Centric Architecture" %}

{% include youtube.html id="SZyyG2AGM6g" %}
</div>

---

in technology, have revolutionized the way we use and interact with them.

In dieser Folge spricht Darren über die Geschichte von Anwendungen und wie aktuelle Veränderungen, hauptsächlich aufgrund des Vormarschs der Technologie, die Art und Weise revolutioniert haben, wie wir sie nutzen und mit ihnen interagieren.

Die Daten des Internet der Dinge beeinflussen datenzentrierte Architekturen. Die Infrastruktur ist bereit, aber wir haben noch keine.

Wir haben noch keinen geeigneten Weg, um alle unsere Daten zu verwalten. Es gibt drei Elemente, die geändert werden müssen, um diesen Prozess zu erleichtern:

Menschen (Organisation), Prozess (Betrieb) und Architektur (Technologie). Darren konzentriert sich auf die Architektur, bei der Daten.

und verarbeitet werden auf tausenden von Edge-Geräten verteilt und über öffentliche und private Clouds hinweg.

## Zweckorientierte Hardware-Software-Stapel

Wie wir heute Anwendungen für Missionen bereitstellen, hat sich in den letzten dreißig Jahren nicht wesentlich verändert.

Diejenige Anwendung, die auf spezifischer Hardware entwickelt wurde, verfügt über eine Anwendungsstruktur. Die Rechenleistung und der Speicher sind damit verbunden.

Netzwerk. Dieses Modell funktionierte lange Zeit gut und tatsächlich werden immer noch etwa ein Viertel der Anwendungen bereitgestellt.

spezieller Hardware, aber dies ist heute nicht optimal. Die Technologie ist zu schnell für dieses Modell; Abweichungen treten auf.

Darüber hinaus gibt es lange Entwicklungszeiten, hohe Kosten, begrenzte Wiederverwendung der Technologie und mangelnde Integration in.

andere Anwendungen.

## Virtuelle Architekturen

Vor etwa 20 bis 25 Jahren begann die Hardware-Virtualisierung, einige dieser Probleme durch die Möglichkeit der Bereitstellung zu lösen.

Translate the following to German: multiple applications on one machine. Applications were no longer tied to specific hardware. Instead of buying five

Translation: Mehrere Anwendungen auf einer Maschine. Anwendungen waren nicht mehr an bestimmte Hardware gebunden. Anstatt fünf zu kaufen.

kleinere Maschinen, ein größeres Hardwarestück könnte verwendet werden, nicht nur für Rechenleistung, sondern auch für virtuellen Speicher und Netzwerk.

Funktionen ermöglichen auch eine größere Kosteneffizienz. Wie bei jeder Entwicklung brachte dies jedoch einige neue Probleme mit sich.

erhöhte Sicherheitsbedenken und "lautstarke Nachbarn", was bedeutet, dass eine Anwendung die Leistung einer anderen beeinträchtigt.

aufgrund der Nutzung von IO-Bandbreite, Netzwerk, Speicherplatz usw.

## Cloud-Architekturen

In den frühen 2000er Jahren setzte sich die Cloud-Technologie durch. Wir konnten nun über mehrere Organisationen hinweg gemeinsam nutzen. Dabei spielte Virtualisierung eine wichtige Rolle.

Erstellte Abstraktion der Hardware, Cloud-Technologie schuf Abstraktion der Operationen und erleichterte die Verwaltung mehrerer.

Übersetzung: Maschinen. Die Cloud-Architekturidee hat "Software-definierte Infrastruktur" geschaffen, was es einfacher macht, diese hochzufahren und

Auslösen der Computer-, Speicher- und Netzwerkressourcen. Weitere Vorteile sind geringere Kapital- und Betriebskosten aufgrund geringerer...

Falls specific industry needs arise, automation can be scaled up or down based on hardware and manpower availability. It also gives the ability to handle increased demand, for instance, for retailers during the busy holiday season or the.

Regierung während der Volkszählung. Mit dem Fortschritt dieser Technologie werden die Probleme der Sicherheit und lärmenden Nachbarn.

erhöht aufgrund mehrerer Mieter auf derselben Maschine. Ein weiteres Anliegen sind Integrationskosten zwischen öffentlichen und

Private Clouds. Selbst mit diesen Bedenken überwiegen die Vorteile in den meisten Fällen eindeutig die Nachteile.

## Service- und Containerarchitekturen

Übersetzung ins Deutsche: In den letzten fünf bis sechs Jahren haben wir die Neuerfindung einer alten Technologie erlebt: Containerisierung. Docker hat einen neuen Standard für die Bereitstellung von Anwendungen geschaffen.

einfacher Weg, um die zuvor umständliche und schwierig zu verwendende Container-Technologie zu nutzen. Anwendungsentwickler, in

besonders, hat diese Technologie begrüßt, weil sie in mehreren Umgebungen konsistent ist. Die Service-Management-Schicht

mit der Containervirtualisierung von Anwendungen und Microservices steht die Anwendung im Mittelpunkt und ordnet diese Anwendungen zu.

generisch, virtualisierte Hardware, die abstrahiert wurde. Wir haben jetzt automatische Bereitstellung über mehrere Clouds.

Wir haben OpEx und auch CapEx im Anwendungsschicht-Stapel und im Dienstschicht-Stapel optimiert. Die Fehlertoleranz ist automatisiert, und

Es ist viel einfacher, sich mit Overlay-Netzwerken zu integrieren, sich über mehrere Clouds hinweg zu integrieren, Firewalls zu erstellen und zu verwalten.

Mikrosegmentierung usw... alles über Software.

Sicherheit ist jedoch ein Hauptanliegen. Da Container leicht in mehreren Umgebungen bereitgestellt werden können, ist es

wird es immer wichtiger, sich auf Sicherheit zu konzentrieren, die in die Bereitstellung "eingebaut" ist. Außerdem gibt es eine zunehmende Komplexität. Hier,

Wir sind von einer dreischichtigen Architektur zu einer Mehrschicht- oder sogar einer Mikroservice-Architektur mit Dutzenden von Schichten übergegangen.

translate: Dienste, die zusammenarbeiten. Ein weiteres Problem ist, wo und wie die Daten gespeichert und verwaltet werden. Bei der Dienstleistungsverwaltung.

Ebene, Speicher ist ein generischer Behälter, der die Daten selbst nicht verwaltet.

## Internet of Things Architekturen

Jetzt, da das Internet der Dinge (IoT) zu diesem Ökosystem hinzugefügt wird, wird das erhöhte Datenvolumen auf Hunderte oder

devices are not sufficiently protected against cyber attacks and can pose a risk to the network. Therefore, it is necessary to implement strong security measures to ensure the safety of the system. Additionally, edge devices require regular updates and patching to address any vulnerabilities that may arise. Overall, while the use of smart devices offers many advantages, it is crucial to prioritize security to mitigate potential risks.

Geräte sind für die Öffentlichkeit zugänglich. Zum Beispiel könnte jemand eine intelligente Straßenlaterne oder eine intelligente Verkehrssignalanlage manipulieren.

Translate the following to German: a drone, or security camera. The complexity of the different devices, their number and locations, along with the immense

eine Drohne oder Überwachungskamera. Die Komplexität der verschiedenen Geräte, ihre Anzahl und Standorte sowie die enorme

Menge an Daten ist enorm.

## Daten- und Informationsmanagement-Architekturen

Wie gehen wir mit diesen Problemen um? Organisationen passen sich bereits an, um mit dieser Komplexität durch neue Organisationen umzugehen.

und Positionen von Fälschung bei Datenmanagement-Anwendungsfällen. Zuvor gab es keinen Ort, an dem diese Anwendungsfälle verwaltet werden konnten, also

Wir haben eine neue Schlüsselebene namens Distributed Information Management Layer erstellt. Diese Ebene verwaltet Daten über das gesamte System hinweg.

Das Internet der Dinge (IoT), Legacy-Systeme und öffentliche und private Clouds. Es passt die Daten mit Anwendungsstapeln und Dienststapeln zusammen, sodass wir.

können Dienste und Anwendungen dynamisch in der Nähe der Daten oder umgekehrt zugeordnet werden. Regulierungen und schiere Größe der Daten

kann die Fähigkeit einschränken, Daten an zentralen Standorten zu verschieben, wie wir es traditionell getan haben. Mit dieser neuen Architektur,

Mehrere Betriebsweisen können genutzt werden, darunter disaggregierte Analytik, Datenbewegung und Anwendungsbewegung.

Nochmals, mit dieser erweiterten Architektur ist Sicherheit von höchster Bedeutung. Sicherheit muss als gemeinsamer Aspekt funktionieren.

Durch alle Schichten hindurch. Identitätssicherheit, das bedeutet Zugriff, Autorisierung und Authentifizierung von Personen sowie dem Internet der Dinge (IoT).

Geräte, Anwendungen, Dienste und sogar Daten sind von zentraler Bedeutung. Die Verwaltung der Identität umfasst Verschlüsselung für vertrauenswürdige Daten.

und Geräte.

## Schlussfolgerung

translate: "Die gesamte Architektur hier wird als Edgemere-Architektur bezeichnet. Viele der Teile existieren bereits; wir müssen..."

have a highly skilled team that is dedicated to continuously improving our processes. By optimizing how they work together, we can achieve greater efficiency and effectiveness in the DIML.

beginnen zu sehen, dass Start-ups und etabliertere Unternehmen die Anwendungsfälle und die architektonischen Elemente ausbauen

in dieser Schicht.

work together to deliver a seamless user experience. It provides a framework for understanding the different components and their interactions, such as the front-end interface, back-end systems, databases, APIs, and external integrations. By visualizing these elements and their connections, Edgemere architecture allows organizations to optimize their technology infrastructure and ensure efficient data flow and smooth functionality.

zusammenpassen

Intel passt in dieses Ökosystem, indem es das Schlüsselelement einer gemeinsamen physischen Schicht bereitstellt, um alle Ihre zu steuern und zu verwalten.

Ressourcen, ob es sich um ein IOT-Gerät, ein Rechenzentrum oder einen entfernten Standort handelt. Wir machen es Ihnen möglich.

Effizient Daten bewegen, sie effektiv speichern und alles verarbeiten. Ob es sich um die Xeon-Prozessoren auf der hohen

Ob es nun darum geht, am Ende zu sein oder um Inferenz oder KI mit einer sehr geringen Leistung an der Edge durchzuführen, Intel verfügt über eine vollständige Palette an physischer Hardware.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
