---
layout: posts
title: "Fernunterricht und -lernen"
number: 11
permalink: episode-EDT11-de
has_children: false
lang: de
nav_exclude: true
parent: Folgen
grand_parent: Deutsch
nav_order: 11
tags:
    - remotelearning
    - compute
    - technology
    - people
    - edge
    - telelearning

date: Tue Aug 11 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Erin Moseley
    - Grant Kelly

img: thumbnail.png
image: thumbnail.png
summary: "In dieser Folge sprechen Erin Moseley, Senior Account Executive für Bildung bei Intel, und Grant Kelly, Solution Architect für Bildung bei Intel, mit Darren über die Herausforderungen des Fernunterrichts und der Unterrichtstätigkeit sowie über die überwältigenden Veränderungen, mit denen Schulbezirke, Lehrer, Eltern und Schüler während der Covid-19-Pandemie konfrontiert sind. Erfahren Sie, wie Schüler und Lehrer mit neuen Technologien und Lernformen in Verbindung treten."
video: "https://youtu.be/Yb1rXTCEIeQ"
description: "In dieser Folge sprechen Erin Moseley, Senior Account Executive für Bildung bei Intel, und Grant Kelly, Solution Architect für Bildung bei Intel, mit Darren über die Herausforderungen des Fernunterrichts und der Unterrichtstätigkeit sowie über die überwältigenden Veränderungen, mit denen Schulbezirke, Lehrer, Eltern und Schüler während der Covid-19-Pandemie konfrontiert sind. Erfahren Sie, wie Schüler und Lehrer mit neuen Technologien und Lernformen in Verbindung treten."
---

<div>
{% include transistor.html id="e48d397d" title="#11 Distance Teaching and Learning" %}

{% include youtube.html id="Yb1rXTCEIeQ" %}
</div>

---

## Aufkommende Überlegungen

Lehrer, Mitarbeiter, Eltern und Schüler stehen alle vor unterschiedlichen Herausforderungen bei der plötzlichen Umstellung auf Fernunterricht. Auf der IT-Seite der Schulbezirke gibt es eine Vielzahl von aufkommenden Überlegungen. Was machen wir mit der Situation, dass Geräte von zu Hause (BYOD) in Null-Vertrauensnetzwerken verwendet werden? Wie schützen wir die Privatsphäre und verwalten die Sicherheit bei all den verschiedenen neuen Kommunikationsmethoden zwischen Lehrern, Mitarbeitern, Eltern und Schülern? Wie erhalten wir ein reibungsloses, verwaltetes Klassenzimmererlebnis aufrecht? Wie bieten wir Unterstützung an, wenn eine traditionelle Helpdesk-Struktur nicht existiert? Außerdem dürfen wir nicht vergessen, dass es einen wichtigen sozialen Aspekt gibt, der ein nahtloses Erlebnis ermöglichen muss. Wenn ein Drittklässler durch technische Probleme abgelenkt wird, wenn er sich mit Lehrern und Mitschülern verbinden muss, wird das Fernunterrichtserlebnis beeinträchtigt.

## Systemdienstleistungen und Plattformen für Bildung

Es gab schon immer Komplexität mit all den verschiedenen Ebenen von Diensten und Plattformen, zum Beispiel der Produktivitätssuite mit G Suite und Office 365. Die Frage ist nun, was können wir mit Learning-Management-Systemen in diesem Schichtansatz in die Integration des Studenteninformationssystems tun? Wir müssen betrachten, wie wir unsere Fähigkeiten in Bezug auf Skalierbarkeit nutzen. Wir müssen verschiedene Infrastruktur-als-Service (IAAS) und Plattform-als-Service (PAAS) Lösungen, Speicherdienste, Privatsphäre und Sicherheit und natürlich die zugrunde liegenden Plattformen, die all dies antreiben, in Betracht ziehen.

Früher hatten Konferenz- und Kollaborationstools nur begrenzte Verwendungsmöglichkeiten, vielleicht um beispielsweise einen Gastredner einzuladen. Jetzt hingegen werden sie intensiv als Hauptwerkzeuge genutzt und haben zur Komplexität des Systems beigetragen.

## Service-Hosting-Optionen

Es gibt zwei Hauptarten, die verwendet werden, um auf Dienste zuzugreifen: Gerät als Portal zu Diensten (Software, Infrastruktur oder Plattform) und Gerät als Teil des internen Netzwerks. Früher fielen die meisten in letztere Kategorie, wo es nur begrenzte Bedenken hinsichtlich Dingen wie Patching und Richtlinienkonformität gab, da die Geräte ständig mit internen Schulstandorten verbunden waren, unabhängig davon, ob sie BYOD-Geräte oder vom Bezirk besitzte Vermögenswerte waren. Jetzt, mit den verschiedenen Arten von Konnektivität, müssen wir uns um die Skalierbarkeit der Bandbreite und wie wir sie implementieren, Sorgen machen.

## Gerät als Portal zu Dienstleistungen

Plattformen wie G Suite, Office 365 und solche für Konferenz und Zusammenarbeit sind bedenklich, da sie eine Abhängigkeit von einem Drittanbieter schaffen. Schulbezirke haben keine Kontrolle über Sicherheit, Datenschutz und Leistung. Es ist wichtig zu erkennen, dass die Verbindung zu diesen Cloud-Diensten auf den internen Host zurückführt, ob es sich um eine private Cloud oder ein Vor-Ort-Rechenzentrum handelt, das zugrunde liegende Dienste wie Identitätsmanagement, Schülerinformationssysteme, mögliche Inhaltsfilterung usw. hat. Die Vorteile sind jedoch weniger eingehender Datenverkehr zum Rechenzentrum sowie inhärente Skalierbarkeit und Verwaltbarkeit.

## Gerät als Teil des Netzwerks/der privaten Cloud

Die Implementierung eines virtuellen privaten Netzwerks (VPN) ist für die meisten Schulbezirke eine neue Idee. Unternehmen verwenden VPNs schon seit einiger Zeit und Schulbezirke müssen möglicherweise nachziehen, um den neuen Anforderungen des Fernlernens gerecht zu werden. Ein paar Nachteile eines VPNs sind Netzwerküberlastung, Skalierbarkeit und Datenverkehr aus Netzwerken mit "Zero Trust". Der Hauptvorteil besteht darin, dass es als Erweiterung des internen Netzwerks fungiert. Dadurch werden Sicherheitsmanagement und Datenverkehrsverschlüsselung auf die VPN-Clients ausgeweitet. Ein weiterer großer Vorteil ist der Zugang zu allen intern benötigten Diensten.

## Aufkommende Engpässe

Engpässe sehen beim Fernlernen anders aus. Im Unternehmensbereich lag die erwartete VPN-Auslastung, als die Belegschaft virtuell wurde, bei etwa 10%. Im Bildungsbereich wird diese Zahl deutlich höher sein und möglicherweise Engpässe im VPN verursachen. Eine weitere zu berücksichtigende Überlegung ist die Skalierbarkeit der gehosteten Dienste. Selbst wenn die Dienste in einer öffentlichen Cloud liegen, werden sie für Dinge wie SSO, Schülerinformationen, Datenverkehr und sogar Inhaltsfilterung mit einer privaten Cloud oder einem lokalen Rechenzentrum verbunden. Die Bandbreite für den dedizierten Internetzugang sowie die Art und Weise, wie die Bandbreitenübergabe im Rechenzentrum gehandhabt wird, sind wichtige Überlegungen.

Der Zugang zu einer Helpdesk-Komponente muss ebenfalls skalierbar sein, um Engpässe zu verhindern.

Die wichtigste Sorge der Schulbezirke derzeit ist jedoch, allen Schülern Zugang zu ermöglichen. Für einige Schüler gibt es ein Engpass, nur um zu Hause ins Internet zu gelangen. Wenn dieses Problem zu allen unterschiedlichen Ebenen hinzugefügt wird, werden die aufkommenden Engpässe sehr komplex.

Um diesen potenziellen Problemen entgegenzuwirken, müssen Schulbezirke sich die Zeit und die Ressourcen nehmen, um eine solide Architektur zu erstellen, die widerstandsfähig ist, anstatt eine überhastete Spaghetti-Konstruktion zu errichten.

## Skalierbarkeit

Historisch gesehen haben Schulbezirke im Rechenzentrum skaliert und einige dieser Dienste an die Schulstandorte ausgelagert. Die Architektur besteht im Allgemeinen darin, die Zusammenführung von Lehrkräften, Mitarbeitern und Schülern für Aufgaben wie Authentifizierung, Patch-Management, Softwareverteilung usw. zu ermöglichen. Da jetzt die Skalierung in virtuellen Klassenzimmern erfolgt, kehrt man zur Skalierung der Dienste im Rechenzentrum zurück.

## Die Balance finden

Zuvor waren nur die beiden Faktoren von "vor Ort" im Rechenzentrum des Hauptbüros und den LAN-Verbindungen zu den Schulstandorten beteiligt. Jetzt gibt es den zusätzlichen Faktor, alle virtuellen Klassenzimmer unterzubringen, d. h. jedes Wohnzimmer der Schülerinnen und Schüler sowie der Lehrkräfte. Wie können wir das bewerkstelligen? Es geht letztlich um das Hauptkonzept, das Gleichgewicht zwischen den Bedürfnissen Ihres Schulbezirks zu finden. Jeder Bezirk unterscheidet sich in Größe und Technikkenntnissen, und es gibt viele bewegliche Teile.

## Engesstellen ansprechen.

Was kann Intel tun, um bei der Bewältigung dieser Engpässe zu helfen, die wir identifiziert haben?

Endpoint-Management und Endpunkt-Sicherheit sind Aufgabenbereiche, in denen der IT-Helpdesk ins Spiel kommt. Wir suchen nach Möglichkeiten, Unterstützung remote anzubieten, anstatt regelmäßige Besuche an Schulstandorten durchzuführen.

Wir können uns das Rechenzentrum und die Infrastruktur ansehen und eine Strategie entwickeln, die es uns ermöglicht, softwaredefiniertes Networking und Infrastruktur zu skalieren. Darüber hinaus können wir auch einige Infrastructure-as-a-Service-Cloud-Bursting integrieren, und dabei die Verkehrsprotokolle berücksichtigen.

## Intel Komponenten zur Behebung von Engpässen

Intel kann in drei großen Kategorien helfen: Rechenleistung, Speicher und Netzwerk. Wenn wir die Stärkung der softwaredefinierten Infrastruktur und die wichtigen Überlegungen betrachten, dreht sich alles um den Computer mit Intel-Prozessoren, Speicherprodukte und Netzwerkfähigkeiten. Anstatt an physische Schnittstellen und Geräte gebunden zu sein und dadurch begrenzt zu sein, kann die softwaredefinierte Infrastruktur skalieren und andere Rechenleistungs-, Speicher- und Netzwerkressourcen integrieren. Niemand weiß genau, wie die Situation sein wird, wenn wir zur Schule zurückkehren, und diese softwaredefinierte Infrastruktur ist dynamisch und bietet die größtmögliche Flexibilität.

Es gibt viele Möglichkeiten für Schulbezirke, eine lebensfähige, sichere Umgebung für Fernlernen zu schaffen. Obwohl wir in dieser Folge die Themen Datenschutz und Sicherheitsbedrohungen sowie Lösungen angesprochen haben, werden wir nächstes Mal tief in diese wichtigen Themen eintauchen.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
