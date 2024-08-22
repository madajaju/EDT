---
layout: posts
title: "Datenverstöße & sichere Lieferkette"
number: 61
permalink: episode-EDT61-de
lang: de
nav_exclude: true
nav_order: 61
tags:
    - supplychain
    - encryption
    - databreaches
    - zerotrust
    - opensourcesecurity
    - networksecurity
    - cybersecurity
    - people
    - process
    - policy
    - technology

date: 2021-08-12T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Intel, diskutiert Datenverstöße und sichere Lieferketten mit dem häufigen Gast Steve Orrin, CTO von Intel, Federal."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solution Architect, Intel, diskutiert Datenverstöße und sichere Lieferketten mit dem häufigen Gast Steve Orrin, CTO von Intel, Federal."
---

<div>
{% include transistor.html id="2462e3fe" title="#61 Data Breaches & Secure Supply Chain" %}

{% include youtube.html id="url" %}
</div>

---

Neben prominenten Angriffen in der Lieferkette wie dem Vorfall mit SolarWinds gibt es auch andere weniger bekannte Angriffe, die ebenso problematisch sind.

## Sichere Lieferkette

Ein Beispiel ist die Chrome-Erweiterung "The Great Suspender", ein Werkzeug zur Gewährleistung einer korrekten Speichernutzung in Chrome-Anwendungen, mit etwa zwei Millionen Benutzern. Die Gründer dieses Open-Source-Tools verkauften ihre Firma ohne angemessene Sorgfalt an eine Organisation für Millionen von Dollar. Es stellte sich heraus, dass der Käufer eine organisierte Verbrechergruppe war, die das Werkzeug dann in Malware und Spyware umwandelte.

Es gab keinen Angriff im Sinne dessen, dass sie nicht in das ursprüngliche Unternehmen eingedrungen sind, sondern es gekauft und mit dem Code gemacht haben, was sie wollten. Was einmal ein legitimes Produkt war, wurde am nächsten Tag illegitim. Keine Sicherheitsprotokolle hätten dieses Problem beheben können. Unternehmen müssen nun ihre Lieferanten und die Drittanbieter, die sie unterstützen, sorgfältig prüfen.

Open Source ist ein Segen und ein Fluch. Der Segen besteht darin, dass man auf den Quellcode zugreifen kann und ihn nach Belieben überprüfen kann, da er frei verfügbar ist. Der Fluch besteht darin, dass niemand genügend Zeit, Energie oder Expertise besitzt, um jeden Teil des Open-Source-Codes, den er verwendet, gründlich zu überprüfen. Schadhafter Code, der anfällig für Malware ist und auch wenn dies unbeabsichtigt geschieht, kann eingeführt werden, wenn die Community ihn nicht erkennt, und manchmal dauert es lange, bis dies geschieht.

Es gibt zwei Dinge, die dieses Problem mildern könnten: Erstens könnte der Code mit Hilfe eines Quellcode-Analysetools ausgeführt werden, und es könnte ein Bewertungssystem für Code-Mitwirkende geben, deren Code konsequent weniger Sicherheitsrisiken oder Fehler aufweist. Drittanbieter würden diese Arbeit hauptsächlich durchführen. Zweitens gibt es bereits etablierte Startups, die offene Quellcodeprodukte überprüfen, um anzuzeigen, welche Objekte in einem Repository vertrauenswürdig sind und welche noch nicht vertraut werden können.

Aktuelle Schwachstellenanalysen in Open-Source-Programmen sind zwar eine Maßnahme, aber alleinige Sicherheitsvorkehrungen reichen nicht aus. Sie müssen mit zusätzlichen Kontrollen kombiniert werden, bevor sie in Ihrer Organisation angewendet werden.

## Datenverletzungen

Neben Ransomware- und Lieferkettenangriffen sind Datenlecks ein häufiges Problem. Im Jahr 2020 wurden in insgesamt 7,8 Milliarden Datensätzen 1,8 Billionen Dollar durch Datenlecks extrahiert. Ein Vorfall bei McDonald's beispielsweise hat Kundendaten, Partnerdaten und interne Daten gefährdet.

## Verschlüsselung

Der erste Teil der Lösung besteht darin, bessere Sicherheitstools für Daten und Infrastruktur zu haben. Durch Verschlüsselung des Zugriffs und die Verwendung einer Standard-Deny-Funktion ist es entscheidend, dass selbst wenn jemand durch die Haustür hereinkommt, sie keinen Zugriff auf alles haben. Daten sollten innerhalb der Organisation verschlüsselt werden, nicht nur das, was in der Cloud freigegeben wird oder extern gesendet wird. Jegliche Daten, die Ihr Netzwerk durchqueren, sowie Daten im Ruhezustand sollten verschlüsselt sein.

Verschlüsselung hat Kosten, aber auf moderner Hardware gibt es eingebaute Beschleunigung, die den Nachteil aufhebt. Sie können nun die Verschlüsselung in Ihrer gesamten Organisation aktivieren, ohne Beeinträchtigung der Leistung.

## Segmentierung

Ein weiterer Teil sind Exklaven oder Segmentierung. Eine der Herausforderungen in Unternehmensnetzwerken besteht darin, dass, wenn jemand erst einmal eingedrungen ist, freie Hand hat, wenn alles miteinander verbunden ist. In letzter Zeit gab es Bestrebungen, die Entwicklung auszugliedern und in ein eigenes Netzwerk zu verlagern, und das ist ein Anfang, aber nur die Spitze des Eisbergs. Die Netzwerksegmentierung sollte über die gesamte Organisation hinweg erfolgen. Es können immer noch Verbindungen stattfinden, aber sie müssen sich an eine Reihe von Regeln halten und helfen, die Auswirkungen einzuschränken. Wenn zum Beispiel Ihr Helpdesk angegriffen wird, sind Ihre HR-Systeme nicht gleichzeitig kompromittiert.

Die Mikrosegmentierung war vor etwa fünf Jahren ein Modewort, aber sie muss jetzt umgesetzt werden. Es gibt einige großartige Tools, die dabei helfen können, wie zum Beispiel Container-Ökosysteme, in denen Sie eine Anwendung bereitstellen können, die sich in ihrem eigenen Netzwerk mit eigener Firewall befindet.

Die ordnungsgemäße Implementierung von Authentifizierungsberechtigungen muss jetzt auch erfolgen. Eine Mehrfaktor-Authentifizierung ist erforderlich, ebenso wie die Authentifizierung von Entitäten. Viele Tools sind automatisiert und verfügen über automatisierte Prozesse, daher müssen nicht nur Personen, sondern auch Entitäten über ordnungsgemäße Berechtigungen verfügen.

## Null Vertrauen

Der Zero-Trust-Ansatz hat sich mittlerweile so weit entwickelt, dass er umgesetzt werden sollte, und einige der wichtigsten Prinzipien wie "standardmäßig ablehnen" und "niemandem vertrauen" sind von entscheidender Bedeutung. Die Technologie hat den Einsatz solcher Konzepte aufgeholt.

Entwickler könnten sich Sorgen um diese Sicherheitstools machen, die den Prozess verlangsamen könnten, aber es gibt Möglichkeiten, die Architektur so zu gestalten, dass dieses Problem verringert wird. Zum Beispiel, wenn Sie ein Entwickler sind und über angemessene Zugangsdaten und Zugriff verfügen, sollten Sie in der Lage sein, auf die Dinge zuzugreifen, die Sie benötigen, wenn Sie sie benötigen, und nach Abschluss des Vorgangs den Zugriff zu verlieren, anstatt Zugangsdaten zu haben, die Ihnen jederzeit uneingeschränkten Zugang gewähren. Die Idee von Zero Trust besteht nicht darin, dass das Unternehmen dem Entwickler nicht vertraut, sondern dass der Zugriff für den richtigen Moment gilt, anstatt uneingeschränkten Zugang zu gewähren, wenn ein böswilliger Akteur die Zugangsdaten stiehlt.

Keine Industrie kann es sich leisten, die aktuellen Risiken zu ignorieren. Jede Organisation muss Sicherheit anders betrachten und Sicherheitsmaßnahmen innerhalb der gesamten Organisation und Architektur umsetzen.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
