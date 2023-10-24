---
layout: posts
title: "Sicherung Ihrer DevOps-Pipeline"
number: 46
permalink: episode-EDT46-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 46
tags:
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - zerotrustarchitecture

date: Wed Apr 07 2021 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "In Teil zwei dieser Folge gibt Darren Pulsipher, Chief Solution Architect bei Intel, praktische Tipps zum Sichern jeder Phase der DevOps-Pipeline, einschließlich dem Schutz von Hardware- und Software-Stacks mit Hardware-Root-of-Trust, Sicherheitsscans, authentifizierten und verschlüsselten Containern/VMs und mehr."
video: "https://youtu.be/sf0VaCpQLVE"
description: "In Teil zwei dieser Folge gibt Darren Pulsipher, Chief Solution Architect bei Intel, praktische Tipps zum Sichern jeder Phase der DevOps-Pipeline, einschließlich dem Schutz von Hardware- und Software-Stacks mit Hardware-Root-of-Trust, Sicherheitsscans, authentifizierten und verschlüsselten Containern/VMs und mehr."
---

<div>
{% include transistor.html id="3abb647c" title="#46 Securing your DevOps Pipeline" %}

{% include youtube.html id="sf0VaCpQLVE" %}
</div>

---

## Die Angriffsvektoren

Viele Angriffe geschehen auf individueller Ebene. Einige der jüngsten hinterhältigen Angriffe haben sich auf Phishing und soziale Manipulation von Personen innerhalb von DevOps konzentriert. Wir müssen Menschen auf allen Ebenen besser schulen. In einem Fall war es ein Praktikant mit Zugriff auf die Schlüssel, der einer böswilligen Intrige erlag.

Ein weiterer Vektor ist die Technologie: traditionelle Denial-of-Service-Angriffe, SQL-Injektionsangriffe oder Pufferüberlaufangriffe. Die neuesten Vorfälle nutzen sowohl Menschen als auch Technologie, um den Prozess anzugreifen. Sie sind heimtückisch, weil sie während des Aufbauprozesses geschehen und daher sehr schwer zu finden sein können. Sie können auch bösartigen Code über Ihre Kunden verbreiten. Um das Vertrauen der Kunden zu stärken, müssen Organisationen eine Strategie haben, um die Lieferkette abzusichern.

## Pipeline-Sicherheit

Nicht jede Build-Pipeline ist gleich, aber im Allgemeinen bestehen sie aus vier Stufen mit Umgebungen: Entwicklung, Build, Test und Produktion. Diese Stufen lassen sich je nach Art des entwickelten Produkts leicht in mehrere Stufen unterteilen, aber die Umgebungen verbinden sich mit diesen verschiedenen Stufen.

Wir müssen uns den gesamten Prozess ansehen, der sowohl Software, Hardware als auch Abläufe umfasst, und einen anderen Ansatz verfolgen, anstatt uns nur auf die Infrastruktur zu konzentrieren, was die meisten effektiv gemacht haben.

## Host- und Infrastruktursicherheit

Am unteren Ende des Stapels müssen Sie die Hardware in der Entwicklungs- und Build-Umgebung sichern. Die Testumgebung wird etwas anders sein, da Sie möglicherweise Tests mit Injektion von schädlichem Code durchführen möchten. Produktionsumgebungen sind normalerweise gut abgesichert, insbesondere jetzt, da immer mehr Unternehmen Software als Dienstleistung anbieten. In den Produktions- und Build-Umgebungen müssen Sie alle typischen Sicherheitsmaßnahmen durchführen, die Sie in Produktions- oder SaaS-Umgebungen durchführen würden.

In diesen Umgebungen gibt es drei wesentliche Elemente. Das erste ist die Erkennung. Erkennung und Behebung sind bekannte Sicherheitsmaßnahmen, bei denen Dienstprotokolle verwendet werden, die eine Plattform wie Splunk nutzen, um etwas Ungewöhnliches zu finden. Stellen Sie sicher, dass dies nicht nur in Entwicklungsumgebungen, sondern auch in Bau- und Produktionsumgebungen geschieht.

Denken Sie daran, dass Sie in der Testumgebung mehrere Testumgebungen benötigen, von denen einige auf der Erkennungsseite sicherer sein sollten, da Sie fehlerhaften Code in Ihre Tests einspielen möchten. Verteilen Sie die Sicherheit nicht gleichmäßig auf alle Umgebungen; Sicherheitsprofile können für jede Umgebung unterschiedlich sein.

Prävention ist der zweite Schlüssel. Dies bedeutet, mit Hardware klug umzugehen, sicherzustellen, dass alles ordnungsgemäß aktualisiert ist, die richtigen Sicherheitsupdates zu haben und dies auf automatisierte Weise zu tun. Dies sollte in allen Umgebungen geschehen, einschließlich der Testumgebung, und insbesondere beim Erstellen und in der Produktion.

Der dritte Schlüssel ist Teil der Prävention: der Hardware-Root of Trust. Eine Vertrauenskette kann von der Hardware über die Firmware-Startbereiche bis hin zu den Hypervisoren und Betriebssystemen hergestellt werden. Der Root of Trust kann in die Entwicklungs-, Build-, Test- und Produktionsumgebungen integriert werden. Dies kann sichere Container und sichere virtuelle Maschinen umfassen. Zum Beispiel speichere ich meine Verschlüsselungs- und Hash-Schlüssel gerne in Hardware wie einem TPM-Modul und zusätzlich mit der Secure Guard-Erweiterung von Intel. Selbst wenn jemand Zugriff auf die Maschine erlangt, werden sie diese Schlüssel nicht stehlen können.

## Vertrauenswürdige ausführbare Dateien

Das Einrichten vertrauenswürdiger ausführbarer Dateien ist der nächste Schritt. Das bedeutet, dass Sie Sicherheitsüberprüfungen gegenüber dem eingereichten und erstellten Code durchführen können und dann den Hash-Wert mit diesen Änderungen überprüfen können. Wenn etwas in den Code eingefügt wurde, können Sie es erkennen, da während des Build-Prozesses keine Änderungen am Code vorgenommen werden sollten.

In einer neuen Phase von Sicherheitsüberprüfungen können Sie statische Analyse am Code oder dynamische Analyse am Code oder Sicherheitsverstöße durchführen. Es gibt einige großartige Tools, die Sie problemlos in Ihre typische DevOps-Pipeline integrieren können, egal ob Sie zum Beispiel Jenkins oder GitHub-Workflows verwenden.

Sobald ein ausführbares Programm erstellt wurde, sollte sofort der Hash erstellt werden, und dieser Hash sollte zusammen mit dem Programmversioniert werden; es sollte das ausführbare Programm bleiben, das alle Tests durchläuft und in Produktion geschoben wird. Dieser Hash garantiert, dass nichts manipuliert wurde.

## Attestierte und gesicherte Bilder

Normalerweise gibt es mehrere Code-Repositorys oder ausführbare Dateien zur Verwendung. Der Hash, der zur Bauzeit erstellt wird, befindet sich nun in der Registrierung und Sie können dies bestätigen. Sie können diese in den Abbildern sichern, damit sie nicht geändert werden können. Wenn jemand eine kleine Änderung vornehmen muss, zum Beispiel ein Label oder Metadaten, ist es wichtig, die Änderung nicht vorzunehmen und ihr dieselbe Versionsnummer zuzuweisen. Es ist am besten, den Zyklus erneut durchzugehen, auch wenn dies mehr Zeit in Anspruch nimmt, als manuelle Prozesse mit Ihren Binärdateien herumzufummeln.

Jetzt können Sie das gleiche binäre Programm, auf dem Sie alle Tests ausgeführt haben, in die Produktion einspielen. An diesem Punkt ist es ein Fehler, den Quellcode neu zu erstellen. Es ist am besten, die originale Build-Version in das Produktions- oder Gold-Repository hochzuladen. Dieses Repository ist der einzige Ort, von dem aus Bilder, Binärdateien oder VMs abgerufen werden sollten. Alle Bilder sollten notarisiert und beglaubigt werden. Wenn Sie vertrauliche VMs oder Anwendungen haben oder sicherstellen möchten, dass sie nur auf bestimmter Hardware landen, können Sie solche Einschränkungen vornehmen. Sie können die VMs, Container oder sogar Binärdateien verschlüsseln und mit dem Schlüssel sperren, der in Ihren Build- und Productionssystemen gespeichert ist.

## Sicherheitstools einspritzen

Sicherheitstools müssen in den Bauprozess integriert werden. Anstatt Open-Source-Sicherheitsbibliotheken zu verwenden oder solche neu zu erstellen, sollten Ihre Sicherheitsingenieure einbezogen werden, damit sie Tools auswählen können, die von den Entwicklungsteams leicht verwendet und wiederverwendet werden können. Ein gutes Beispiel ist die grundlegende Authentifizierung: Benutzeranmeldung. Es sollte eine gemeinsame Bibliothek geben, anstatt dass jede Anwendung ihre eigene hat.

Es ist wichtig, diese Sicherheitsbibliotheken und -tools genauso zu behandeln wie jedes andere Software-Entwicklungsprogramm, das Sie in Ihrer Organisation teilen. Das Teilen wird die Zeit verkürzen und die Sicherheit in Ihrem gesamten Ökosystem erhöhen.

## Errichte einmal, implementiere Sicherheit überall.

Sobald Sie Ihre Entwicklungssicherheitsteams etabliert haben, stellen Sie sicher, dass Sie die Richtlinien und Werkzeuge in all Ihre Produkte und Umgebungen integrieren. Heutzutage gibt es großartige Technologien, mit denen Sie mehrere Umgebungen verwalten können. Wenn also eine neue Anwendung gestartet wird, erfolgt dies in einem Sicherheitsprofil mit Ihren eigenen VM- oder Container-Images als Basisbilder, die von den Entwicklungsteams verwendet werden. Durch die Konfiguration von Sicherheit in Ihre VMs oder Container in Ihre Basisbilder erhalten Sie sofort eine Sicherheitskonformität in den verschiedenen Umgebungen. Es besteht auch die Möglichkeit, sich mit Sicherheitswerkzeugen zu integrieren, damit Sie, wenn Sie in der Anwendung etwas Ungewöhnliches feststellen, Sicherheitswerkzeuge benachrichtigen können. Versuchen Sie nicht, Sicherheitswerkzeuge zu erstellen, die hundert Prozent aller Fälle abdecken, denn Sie werden sie nie fertigstellen; setzen Sie auf achtzig Prozent als solide Basis und erstellen Sie sie so, dass Anwendungsentwickler bei Bedarf die letzten zwanzig Prozent in Zusammenarbeit mit Ihrem Sicherheitsteam verbessern können.

Ein letzter wichtiger Ratschlag ist es, alles zu automatisieren, was möglich ist, insbesondere in der DevOps-Pipeline, um böswillige Einschleusungen zu verhindern. Schützen Sie Ihre Pipeline, schützen Sie Ihren Prozess.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
