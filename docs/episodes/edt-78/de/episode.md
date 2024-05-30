---
layout: posts
title: "Verständnis des Sicherheitsmodells der gemeinsamen Verantwortung"
number: 78
permalink: episode-EDT78-de
lang: de
nav_exclude: true
nav_order: 78
tags:
    - cloudsecurity
    - informationsecuritymanagement
    - networksecurity
    - datasecurity
    - zerotrust
    - multicloud
    - cybersecurity

date: Wed Feb 23 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chef-Solution-Architekt bei Intel, erklärt gemeinsame Sicherheitsmodelle der Verantwortung. Wer für die Sicherheit verantwortlich ist, kann in der Cloud verwirrend werden; die Verantwortung hängt von den Cloud-Dienstbereitstellungsmodellen und anderen Faktoren ab."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chef-Solution-Architekt bei Intel, erklärt gemeinsame Sicherheitsmodelle der Verantwortung. Wer für die Sicherheit verantwortlich ist, kann in der Cloud verwirrend werden; die Verantwortung hängt von den Cloud-Dienstbereitstellungsmodellen und anderen Faktoren ab."
---

<div>
{% include transistor.html id="975c761c" title="#78 Understanding the Shared Responsibility Security Model" %}

{% include youtube.html id="url" %}
</div>

---

## Sicherheit in der Cloud

Die meisten Menschen verstehen die Verantwortung für die Sicherheit vor Ort, aber die Verantwortung wird in der Cloud undurchsichtiger. Wenn Daten in der Cloud geschützt sind, wie werden sie geschützt? Wer ist für diese Sicherheit verantwortlich? Was ist mit der Aktualisierung von Maschinen?

Kürzlich haben Cloud-Service-Anbieter begonnen, noch mehr Dienste anzubieten, wodurch verschiedene Modelle entstehen. Manchmal geht dabei die Sicherheit verloren.

## Sicherheitsbereiche

Es gibt vier Hauptbereiche der Sicherheit, die wir verstehen müssen.

## Körperlich

Die physische Sicherheit ist leicht zu erkennen. Cloud-Dienstleister sind für die physische Sicherheit ihrer Rechenzentren verantwortlich, und Sie sind für die physische Sicherheit Ihrer eigenen Rechenzentren verantwortlich. Zusätzlich müssen Sie Ihren physischen Raum sichern. Wenn Sie beispielsweise ein Hersteller sind, müssen Sie die Maschinen innerhalb Ihres Bereichs sichern. Ein kürzlich erfolgter Hack erfolgte über das HVAC-System, das in das Netzwerk einer Organisation eingesteckt war.

## Infrastruktur

Die Sicherheit der Infrastruktur bezieht sich nicht auf den physischen Aspekt, sondern auf die Hardware selbst. Haben Ihre Netzwerk-Switches die richtigen Sicherheitskorrekturen und Upgrades? Werden die Laufwerks- und Speichergeräte aktualisiert? Werden sie geschützt? Die Infrastruktur kann bei Cloud-Dienstanbietern in Grauzonen fallen, daher müssen Sie wissen, wer für was und unter welchen Umständen verantwortlich ist.

## Bewerbung

Für die Anwendungssicherheit müssen Sie wissen, wer Zugriff auf eine Anwendung hat und ob sie mit den richtigen Sicherheitspatches aktualisiert wird.

## Daten

Das Schützen Ihrer Daten ist eine der wichtigsten Aufgaben, die Sie erledigen müssen. Daten können tatsächlich als Waffe bei einem Ransomware-Angriff eingesetzt werden, bei dem Angreifer sie entwenden oder verschlüsseln. Sie werden auch für starke Wettbewerbsvorteile in verschiedenen Organisationen genutzt. Sie müssen wissen, wo sich Ihre Daten befinden und wie Sie sie schützen können.

## Cloud Service Delivery Modelle

Es gibt drei grundlegende Modelle für die Bereitstellung von Cloud-Diensten. Es werden ständig neue Modelle erstellt, aber die drei wichtigsten sind Infrastructure as a Service (IAAS), Platform as a Service (PAAS) und Software as a Service (SAAS). Alles andere werden wir als X as a Service (XAAS) kategorisieren.

## Infrastruktur als Dienstleistung

IAAS bedeutet, dass Sie von einem Cloud-Service-Anbieter mieten. Dabei handelt es sich um virtuelle Maschinen und virtuelle Netzwerke, also Speicher, Berechnung und Netzwerk. Wir sehen auch immer mehr interessante Möglichkeiten mit Beschleunigern wie GPUs oder sogar neuromorphen Prozessoren. IAAS ist der Ort, an dem Sie Ihre Anwendungen ausführen.

## Plattform als Dienstleistung

Die nächste Schicht im Stack ist PAAS. Hier erhält man ein bestimmtes Framework wie Kubernetes, um Dinge auszuführen. VMware, das auf IAAS läuft, ist PAAS. CICD-Pipelines als Service haben viele Tools, die in diesen Bereich passen. PAAS ermöglicht es Ihnen, neue Dienste auf dieser Plattform aufzubauen und bereitzustellen, so dass Sie leicht große Systeme verwalten können, die auf IAAS aufgebaut sind.

## Software als Dienstleistung

Als nächstes kommt SAAS. Das ist spezifische Software, die vom Softwareanbieter oder dem Cloud-Dienstanbieter verwaltet wird, oder es könnte sich um ein von einem Dritten angebotenes SAAS für jemand anderen handeln. Der Schlüssel bei SAAS ist, dass sie für die Anwendungssicherheit verantwortlich sind. Sie verwalten die Betriebszeit und alle verwaltungstechnischen Bereiche wie Zuverlässigkeit, Sicherheit und Integrität. Viele der SAAS-Programme werden auf PAAS-Plattformen aufgebaut.

## X als Dienst

XAAS kann jeden neuen Service wie künstliche Intelligenz, Geräteverwaltung oder Sicherheitserkennung umfassen.

Das Verständnis dieser verschiedenen Bereitstellungsmodelle ist wichtig, da geteilte Sicherheitsmodelle von Cloud-Service-Anbietern auf dem Bereitstellungsmodell basieren.

## Cyber-Domänen

Jeder der sechs Pfeiler der Cybersicherheit, wie von Steve Warren, CTO bei Intel, in einem früheren Podcast identifiziert, ist wichtig, egal ob Sie sich in der Cloud, On-Prem oder am Rande befinden. Die sechs Pfeiler sind Bedrohungserkennung, Intelligenz, Analyse und Orchestrierung; Identitäts- und Zugangsmanagement; Datensicherheit und Anwendungssicherheit; Netzwerksicherheit; Lieferketten-Sicherheit; und Host- und System-Sicherheit. Alle sechs dieser Bereiche passen in das Modell der gemeinsamen Verantwortung, das Cloud-Service-Anbieter propagieren.

## Geteilte Verantwortungssicherheitsmatrix

Diese gemeinsame Verantwortung wird in der Matrix veranschaulicht. Die Lieferungstechniken des Service-Modells sind auf der vertikalen Achse: SAAS, PAAS, IAAS und On-Prem. Wenn Sie selbst hosten, liegt die gesamte Verantwortung ganz rechts bei Ihnen.

Auf der IAAS-Seite sind Sie vollständig verantwortlich für die Sicherheit von Daten und Anwendungen und zur Hälfte verantwortlich für die Infrastruktur, da Sie immer noch für die Netzwerksteuerung und das Betriebssystem verantwortlich sind. Der Cloud-Service-Anbieter ist für das physische Netzwerk und den Host verantwortlich.

Auf der PAAS-Ebene sind Sie immer noch für die Datensicherheit verantwortlich und zu einem gewissen Anteil für die Anwendungssicherheit sowie die Identitäts- und Verzeichnisinfrastruktur. Es gibt einige Tools, die in diesen Bereichen unterstützen können. Obwohl Sie für Anwendungen und ihre Plattformen verantwortlich sind, sind sie für die bereitgestellten Frameworks und Middleware verantwortlich. Obwohl sich das PAAS-Layer um den Großteil des Betriebssystems kümmert und Ihnen einige Tools auf höherer Ebene zur Verfügung stellt, obliegt Ihnen immer noch die Konfiguration der Netzwerksteuerungen.

Oben im Stapel auf SAAS, auch wenn Sie Speicherdienste, Datendienste oder CRM wie Salesforce verwenden, sind Sie immer noch für Ihre Daten verantwortlich, da Sie Ihre Backups entwerfen und verschlüsseln sowie Konten und Identitäten verwalten müssen.

Ein wichtiger Punkt, der bei den Modellen durchgehend gilt, ist, dass Sie für die Sicherheit Ihrer Daten verantwortlich sind. Es gibt niemals eine Situation, in der Sie Ihre gesamte Sicherheit den Cloud-Dienstanbietern überlassen. Sie müssen Ihre Daten sichern und prüfen, ob Sie objektspezifischen Speicher verwenden, damit Sie sich bei einem Ransomware-Angriff wiederherstellen können. Außerdem sollten Sie sicherstellen, dass Sie Ihr Zugriffsmanagement korrekt verwalten und Tools verwenden, die dies einfach machen.

## Unterschiedliche Ansätze zur Sicherheit

Jeder der drei besten Cloud-Service-Anbieter verfolgt einen anderen Ansatz in Bezug auf Sicherheit, insbesondere bei der Netzwerkkonfiguration.

## AWS can be translated to German as Amazon Web Services.

AWS konzentriert sich auf Prävention. Wenn Sie eine virtuelle Maschine starten, sind standardmäßig keine Ports geöffnet, sodass Sie Sicherheitsgruppen erstellen müssen. AWS ist am restriktivsten und verwendet IAM zur Identitätsverwaltung. AWS ist ideal für mittelgroße Teams, aber weniger gut für sehr große Organisationen geeignet.

## Azure

Azure konzentriert sich mehr auf Benutzerfreundlichkeit; Sicherheit ist weniger restriktiv. Sie verwenden das Konzept virtueller Netzwerke für die Sicherheit, so dass alle VMs im selben virtuellen Netzwerk miteinander kommunizieren können. Dies steht im Gegensatz zum Zero-Trust-Prinzip, daher müssen Sie entscheiden, was für Sie wichtiger ist. Azure verwendet Active Directory, daher ist es, wenn Sie bereits über ein ausgereiftes, solides Active Directory verfügen, eine gute Wahl für das Identitätsmanagement.

## Google Cloud Platform

Die Google Cloud Platform (GCP) legt ebenfalls Wert auf Benutzerfreundlichkeit, setzt aber mehr auf virtuelle Maschinen (VMs) und Netzwerksicherheit. Sie können Profile erstellen, die alles auf einer VM absichern oder ein Profil wählen, das etwas mehr Verschlüsse lockert. In Bezug auf Restriktivität liegen sie in der Mitte. Obwohl GCP nicht so umfangreich ist wie AWS oder Active Directory, bietet sie eine gute Identitätsverwaltung.

Alle drei dieser Cloud-Service-Anbieter bieten IAAS, PAAS, SAAS, Container as a Service und eine Vielzahl von XAAS an. Sie müssen das Sicherheitsmodell bewerten und die Unterschiede in jedem verstehen.

In gewisser Hinsicht ist es schwieriger, das Sicherheitsmodell der geteilten Verantwortung zu verstehen als einfach alles lokal auszuführen, da nun mehr Akteure beteiligt sind und die Komplexität zunimmt. Der Schlüssel besteht darin, die Modelle zu verstehen und verfügbare Tools zu nutzen, um die Sicherheit über mehrere Clouds hinweg zu verwalten.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
