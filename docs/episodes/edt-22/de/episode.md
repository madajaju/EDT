---
layout: posts
title: "Ein Argument für Multi-Hybrid Cloud."
number: 22
permalink: episode-EDT22-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 22
tags:

date: Tue Sep 22 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher beschreibt, warum ein Multi-Hybrid Cloud Architekt möglicherweise bereits in Ihrem Rechenzentrum vorhanden sein könnte. Die meisten Organisationen haben bereits alle Zutaten. Sie müssen nur wissen, wie sie zusammenpassen."
video: "https://youtu.be/1cISpr_FNFM"
description: "Darren Pulsipher beschreibt, warum ein Multi-Hybrid Cloud Architekt möglicherweise bereits in Ihrem Rechenzentrum vorhanden sein könnte. Die meisten Organisationen haben bereits alle Zutaten. Sie müssen nur wissen, wie sie zusammenpassen."
---

<div>
{% include transistor.html id="e22edf51" title="#22 An Argument for Multi-Hybrid Cloud" %}

{% include youtube.html id="1cISpr_FNFM" %}
</div>

---

## Aktuelle Cloud-Umgebung.

In den letzten fünf Jahren hat es eine grundlegende Veränderung in der IT-Umgebung gegeben. Das kontinuierliche Wachstum der öffentlichen Cloud und das Aufkommen von privaten Cloud-Optionen haben viele CIOs und IT-Abteilungen ins Hintertreffen geraten lassen. In dem heutigen wettbewerbsintensiven Markt müssen viele Entwicklungsteams schneller vorankommen als die meisten IT-Abteilungen liefern können. Entwicklungsteams haben öffentliche Clouds wie AWS, GCE und Azure als eine praktikable Option für die altmodische "Unter-dem-Schreibtisch"-"Hobby-IT" gefunden. Die öffentlichen Cloud-Anbieter haben das schnelle und einfache Einrichten neuer Infrastrukturen ermöglicht. Es ist nicht mehr nötig, auf mehrere Ebenen technischer und geschäftlicher Genehmigungen, physischen Platz im Rechenzentrum und Lieferprobleme der Anbieter zu warten. Jetzt kann ein Entwicklungsteam innerhalb von Minuten die gesamte Infrastruktur für ihr neues Projekt bereitstellen.

Vor der öffentlichen Cloud konnten CIO(s) leicht "umhergehen" und die Anzahl der "Cottage IT" -Maschinen unter den Schreibtischen der Menschen zählen. Mit den physischen Maschinen, die den IT-Abteilungen nicht mehr sichtbar sind, ist es unmöglich, Teams und die Infrastrukturen ihrer Projekte zu identifizieren. Viele öffentliche Clouds haben Organisationen die Möglichkeit gegeben, die Buchhaltung von allen Konten für bestimmte Domains zu konsolidieren, aber die Sichtbarkeit darüber, was läuft und wer an der Infrastruktur arbeitet, ist immer noch eine Art "Schnitzeljagd". Oft werden diese "Schurken" -Projekte sichtbar, wenn Projekte marktfähig gemacht werden sollen und in eine unternehmenseigene Infrastruktur eingebracht werden müssen. Sicherheits-, Datenschutz- und Regulierungspolitiken können die "Marktfähigkeit" von Projekten nahezu unmöglich machen. Vor allem, wenn Entwickler ihre Anwendungen eng an die Cloud-Infrastruktur gekoppelt haben.

Zukunftsorientierte IT-Abteilungen geben ihr Bestes, um "Cottage IT" zu erfassen, indem sie mit Public Clouds und ISVs zusammenarbeiten, um "Unternehmensportale" in die Clouds zu integrieren. Das Einrichten eines Durchgangsportals ist ein guter Anfang, um Projekte mit Infrastruktur zu erfassen, aber viele Organisationen stellen fest, dass nur ein Portal die Entwicklungsteams nicht zufriedenstellt. In den letzten Jahren habe ich mit vielen dieser Organisationen zusammengearbeitet, um Anwendungsfälle, Architekturen und Technologien zu identifizieren, um diese erweiterten Portale zu entwickeln, die wir Hybrid Multi-Clouds (MHC) nennen. In der Regel werden drei Haupttechnologien integriert, um diese MHCs aufzubauen: Cloud Management Plattformen (CMPs), Automatisierungsframeworks und Platform as a Service-Tools (PaaS).

## Cloud Management Platform (CMP) can be translated to German as: Cloud-Management-Plattform (CMP)

Die Hauptverantwortung von Cloud Management-Plattformen besteht darin, mehrere heterogene öffentliche und private Clouds zu verwalten. Sie ermöglichen es den Endbenutzern, mehrere Clouds und ihre Infrastruktur von einer einzigen Oberfläche aus zu verwalten. CMPs sind in der Regel auf Cloud-Administratoren ausgerichtet. Obwohl das Hauptaugenmerk der Tools für Cloud Management-Plattformen auf der Verwaltung mehrerer Clouds liegt, haben viele Tools Zusatzfunktionen aus den Bereichen PaaS und Automatisierungsframeworks oder zumindest eine Plugin-Architektur zur Unterstützung.

## Verwendete Anwendungsfälle

Verwalten von öffentlichen Clouds

Verwaltung von privaten Clouds

Verwaltung von Cloud-Identitäten

Verwaltung der Infrastruktur über mehrere Clouds hinweg.

## Automatisierungs-Frameworks

Das Hauptziel von Automatisierungs-Frameworks ist es, die Bereitstellung, Verwaltung und Aktualisierung von Software-Stacks auf der Infrastruktur zu automatisieren. Automatisierungs-Frameworks sind aus der DevOps-Community entstanden und konzentrieren sich in der Regel auf wiederholbare Prozesse. Viele dieser Tools umfassen Skriptsprachen, die es DevOps-Ingenieuren ermöglichen, Software und Dienste wiederholbar zu verwalten und zu konfigurieren. Viele DevOps-Teams sind mit diesen Tools gut vertraut.

## Anwendungsfälle abgedeckt

Software auf die Infrastruktur bereitstellen

Software auf Infrastruktur verwalten

* Software und Dienstleistungen verbessern

## Plattform als Dienstleistung (PAAS)

Platform as a Service (PaaS) ist in erster Linie dafür verantwortlich, eine einzige Schnittstelle zum Wiederverwenden von Plattformen und ihrer Bereitstellung auf der Infrastruktur bereitzustellen. PaaS-Tools sind in der Regel stark abhängig von der Entwicklerperspektive, was zu unflexiblen Infrastrukturkonfigurationen führen kann. Viele dieser Tools verfügen über ein Webportal, das Entwicklern die Möglichkeit gibt, Dienste auszuwählen und sie in der Infrastruktur bereitzustellen.

## Verwendete Anwendungsfälle

* Dienste/Anwendungen bereitstellen/verwalten

Service-Katalog verwalten

Entwickeln Sie neue Dienste/Anwendungen.

## Konvergenz erzeugt Hybrid Multi-Cloud (HMC).

Weil kein Werkzeugset alle Anwendungsfälle zur Verwaltung von Clouds, Anwendungen, Infrastruktur und Diensten abdeckt, investieren Teams mehrere "Mannjahre" in die Installation, Konfiguration und Integration dieser drei Werkzeugsets. Dies hat zur Entwicklung von Technologien geführt, die diese Werkzeuge integrieren, einschließlich neuer Produktangebote und neuer Funktionen in bereits verfügbaren Produkten.

Viele CMP-Produkte integrieren PaaS und Automatisierungs-Frameworks in ihre Lösungen. PaaS-Werkzeuge verwalten nun mehrere Clouds. Automatisierungs-Frameworks bieten zunehmend Webportale und Konnektivität zu verschiedenen Clouds an. Viele der Tools bewegen sich in Richtung der hybriden Multi-Cloud-Vision. Bei der Entscheidung, welche Tool(s) verwendet werden sollen, ist es wichtig, sich an die Ursprünge des Tools zu erinnern.

## Bereitstellung einer Lösung

Das hybride Multi-Cloud-Ökosystem ist noch recht neu und erfordert immer noch einige umfangreiche Integrationen zwischen den Tools. Es gibt einige Tools, die bereits vollständige Lösungen bieten, allerdings mit ihrer eigenen Sicht auf die Welt. Aufgrund der jungen Entwicklungsphase des Ökosystems gibt es viele Akteure und Auswahlmöglichkeiten. Die Zeit wird zeigen, wer diesen Bereich dominieren wird. Momentan wird es interessant sein, zu beobachten, wie die Tools zusammenkommen und eine einheitliche Basis schaffen, während die Funktionen ausgereift werden.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
