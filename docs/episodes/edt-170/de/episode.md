---
layout: posts
title: "Null-Vertrauensgrundsätze"
number: 170
permalink: episode-EDT170-de
lang: de
nav_exclude: true
nav_order: 170
tags:
    - zta
    - zerotrust
    - zerotrustarchitecture
    - implementingzerotrust
    - identityverification
    - microsegmentation
    - leastprivilege
    - encryption
    - continuousauthentication
    - anomalydetection
    - automatedthreatresponse
    - dataprevention
    - rightsmanagement
    - analytics
    - policyenforcement
    - cybersecurity

date: Thu Oct 26 2023 00:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Anna Scott
    - Dave Marcus
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "In dieser Episode untersucht Darren die Prinzipien der Zero-Trust-Architektur mit dem speziellen Gast David Marcus, Senior Security Architect, und der wiederkehrenden Gast Dr. Anna Scott."
video: "https://youtu.be/Ps9ajHB-lGg"
description: "In dieser Episode untersucht Darren die Prinzipien der Zero-Trust-Architektur mit dem speziellen Gast David Marcus, Senior Security Architect, und der wiederkehrenden Gast Dr. Anna Scott."
---

<div>
{% include transistor.html id="7d887ec6" title="#170 Zero Trust Principles" %}

{% include youtube.html id="Ps9ajHB-lGg" %}
</div>

---

## Umsetzung der Zero Trust-Sicherheit

Null-Vertrauen-Sicherheit hat sich als immer beliebteres Modell zur Absicherung moderner IT-Umgebungen entwickelt. Aber was genau ist Null-Vertrauen und welche bewährten Maßnahmen gibt es für die Implementierung? Dieser Beitrag bietet eine Einführung in die Grundprinzipien des Null-Vertrauens und wichtige Überlegungen für die Annahme einer Null-Vertrauens-Architektur.

## Was ist Zero Trust?

Das Zero-Trust-Modell dreht sich um das Konzept von "niemals vertrauen, immer überprüfen". Im Gegensatz zur traditionellen Netzwerksicherheit, die sich auf Perimeterschutz konzentriert, geht Zero Trust davon aus, dass Angreifer bereits im Netzwerk sind. Es werden keine Benutzer oder Geräte automatisch vertraut - bei jedem Zugriffsversuch ist eine Überprüfung erforderlich.

Es gibt mehrere grundlegende Prinzipien von Zero Trust:

Überprüfen Sie alle Benutzer und Geräte, bevor Sie Zugriff gewähren.

Beschränken Sie den Zugriff nur auf das, was benötigt wird (geringstes Privileg).

Gehen Sie davon aus, dass Verstöße auftreten werden und begrenzen Sie den Radius der Auswirkungen.

## Die Implementierung von Zero Trust Security.

Null-Vertrauen-Sicherheit ist ein zunehmend beliebtes Modell zur Absicherung moderner IT-Umgebungen geworden. Aber was genau ist Null-Vertrauen und welche bewährten Verfahren gibt es für die Umsetzung? Dieser Beitrag liefert eine Einführung in die Null-Vertrauen-Prinzipien und wichtige Überlegungen zur Einführung einer Null-Vertrauen-Architektur.

## Was ist Zero Trust?

Das Zero-Trust-Modell basiert auf dem Konzept des "niemals vertrauen, immer verifizieren". Im Gegensatz zur herkömmlichen Netzwerksicherheit, die sich auf Perimeterverteidigungsmaßnahmen konzentriert, geht das Zero-Trust-Modell davon aus, dass Angreifer bereits innerhalb des Netzwerks sind. Weder Benutzer noch Geräte werden von Natur aus vertraut - bei jeder Zugriffsanfrage ist eine Verifizierung erforderlich.

Es gibt mehrere wichtige Prinzipien des Zero-Trust-Ansatzes:

Überprüfen Sie alle Benutzer und Geräte, bevor Sie den Zugriff gewähren.

Beschränken Sie den Zugriff nur auf das Notwendige (geringstes Recht)

Gehen Sie davon aus, dass Verstöße auftreten werden, und begrenzen Sie den Explosionsradius.

Überwachen Sie die Aktivität kontinuierlich auf Anomalien.

Automatisieren Sie die Reaktionen auf Bedrohungen.

Die Einführung von Zero Trust bedeutet den Wechsel vom impliziten Vertrauen zur kontinuierlichen Authentifizierung und Autorisierung von Nutzern, Geräten und Arbeitslasten.

## Die Schlüsselsäulen einer Zero-Trust-Architektur

Es gibt sechs wesentliche Säulen, die eine umfassende Zero-Trust-Architektur ausmachen.

## Identität

Starke Identitätsprüfung und Multi-Faktor-Authentifizierung stellen sicher, dass Benutzer wirklich diejenigen sind, für die sie sich ausgeben. Zugriffsrichtlinien sind an Benutzeridentitäten gebunden.

## Geräte

Gerätegesundheit, Sicherheitslage und Genehmigung müssen vor dem Zugriff überprüft werden. Dies beinhaltet auch Kontrollen für Geräte, die privat mitgebracht werden (BYOD).

## Netzwerk

Software-definierte Mikrosegmentierung und verschlüsselte Tunnel zwischen vertrauenswürdigen Zonen ersetzen implizites Vertrauen im Netzwerk. Zugang wird auf Basis einer Sitzung gewährt.

## Arbeitsbelastung

Die Anwendungsrechte sind streng begrenzt, basierend auf Identität und Umgebung. Der Zugriff auf hochwertige Vermögenswerte erfolgt über einen Gateway.

## Daten

Empfindliche Daten werden durch Verschlüsselung geschützt und der Zugriff wird über Datenschutzrichtlinien und Rechtemanagement kontrolliert.

## Sichtbarkeit und Analytik

Die kontinuierliche Überwachung bietet Einblick in alle Benutzer, Geräte und Aktivitäten. Durch fortschrittliche Analysetechniken werden Abweichungen erkannt und automatisierte Reaktionen werden eingesetzt, um Bedrohungen einzudämmen.

## Die Implementierung von Zero Trust.

Der Übergang zum Zero-Trust-Modell ist eine Reise, die aktualisierte Richtlinien, Prozesse und Technologien in der gesamten Organisation erfordert. Zu den wichtigsten Schritten gehören:

Identifizieren Sie Ihre wichtigsten Assets und hochwertigen Daten.

* Arbeitsabläufe und Zugangsanforderungen für diese Ressourcen skizzieren.

Implementieren Sie die Zwei-Faktor-Authentifizierung und das Prinzip des geringsten Privilegs.

Beginnen Sie mit der Segmentierung Ihres Netzwerks mittels Mikro-Perimeter und Kontrollpunkte.

Verschlüsseln Sie sensible Daten sowohl beim Transport als auch bei Ruhe.

Bewerten Sie Werkzeuge für erweiterte Analysen, Automatisierung und Orchestrierung.

Die Einführung von Zero Trust erfordert Zeit, kann aber Ihre Sicherheitsposition gegen moderne Bedrohungen erheblich verbessern. Ein inkrementeller risikobasierter Ansatz ermöglicht es Ihnen, Vorteile in jeder Reifephase zu erkennen.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
