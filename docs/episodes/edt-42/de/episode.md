---
layout: posts
title: "Absichern der DevOps-Pipeline = SecDevOps"
number: 42
permalink: episode-EDT42-de
has_children: false
lang: de
nav_exclude: true
parent: Folgen
grand_parent: Deutsch
nav_order: 42
tags:
    - cybersecurity
    - devops
    - compute
    - process
    - technology
    - multicloud
    - devsecops

date: Sun Mar 14 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.jpg
image: thumbnail.jpg
summary: "In dieser Episode diskutieren Darren Pulsipher, Chief Solution Architect bei Intel, und Steve Orrin, CTO von Intel Federal, warum und wie die DevOps-Pipeline abgesichert werden muss. Der einzige Weg, um solide, belastbare und sichere Codes zu liefern, besteht darin, Sicherheit von Anfang an einzubauen, und je früher, desto besser."
video: "https://youtu.be/url"
description: "In dieser Episode diskutieren Darren Pulsipher, Chief Solution Architect bei Intel, und Steve Orrin, CTO von Intel Federal, warum und wie die DevOps-Pipeline abgesichert werden muss. Der einzige Weg, um solide, belastbare und sichere Codes zu liefern, besteht darin, Sicherheit von Anfang an einzubauen, und je früher, desto besser."
---

<div>
{% include transistor.html id="2fd54175" title="#42 Securing the DevOps Pipeline = SecDevOps" %}

{% include youtube.html id="url" %}
</div>

---

Eine vor über 20 Jahren durchgeführte Studie zur Rendite von Sicherheitsinvestitionen hat gezeigt, dass es kostengünstiger ist, Sicherheit bereits in den Entwicklungszyklus einzubinden, anstatt bis zum Ende des Zyklus zu warten. Obwohl wir dies seit zwei Jahrzehnten wissen, befinden wir uns immer noch in einem fortlaufenden Prozess.

Die meisten Entwicklungsunternehmen haben Sicherheit als Teil ihres gesamten Entwicklungsprozesses, daher gab es bereits viele Fortschritte. Es handelt sich jedoch um eine Reise, kein Sprint. Es geht darum, alle verschiedenen Angriffsstellen und Schwachstellen zu verstehen und die richtigen Sicherheitsprozesse für diese Probleme bereitstellen zu können.

## Die Angriffsvektoren

Oft denken Menschen bei Angriffen an die Schwachstellen von Mitarbeitern oder Paketen und vergessen dabei den Prozessaspekt der Geschichte. Auf der operativen Seite geht es um die Zeit, die benötigt wird, um eine Schwachstelle zu schließen. Auf der anderen Seite steht die Entwicklung und Auslieferung von Produkten. Es gibt verschiedene Bruchstellen entlang dieser Kette, die kürzlich in den letzten Phasen des Build-Prozesses ausgenutzt wurden. Soweit es die Kunden betrifft, galt der aktualisierte Code als legitim, da er direkt aus der Quelle stammte. Daher müssen wir sorgfältig überlegen, wo wir Sicherheitsmaßnahmen in den Prozess integrieren sollten.

## Sicherheit eingebaut...

Agil, CI/CD, DevOps,...Wo ist die Sicherheit?

Während wir dazu neigen, Sicherheit bei den Übergängen vom Entwickler zur Qualitätssicherung und von der Qualitätssicherung zur Betrieb oder Bereitstellung zu betrachten, sollte Sicherheit wirklich in den gesamten Build-Zyklus integriert werden, nicht nur bei einigen Kontrollpunkten. Der Ansatz sollte kontinuierliche Sicherheit sein.

## Sicherheit integriert….

Machen Sie Sicherheit zu einem Teil jeder Phase

Kontinuierliche Sicherheit ist eine Herausforderung. Die meisten Entwickler und QA sind nicht im Bereich Sicherheit ausgebildet; das ist ein bergauf Kampf. Die Branche hat diesen Ansatz bereits in den frühen 2000er Jahren versucht, stieß jedoch auf drei Probleme. Erstens ist die Fluktuation zu hoch. Zweitens ändert sich die Sicherheitslandschaft zu schnell, um sie auf dem neuesten Stand zu halten, und drittens wurden die richtigen Verhaltensweisen nicht belohnt, da es nicht ihr Hauptaufgabenbereich war.

Wie integrieren wir dann Sicherheit in den Prozess, automatisieren die wichtigsten Aufgaben, die wir erledigen möchten, und treten den Entwicklern nicht in den Weg, damit sie ihre Arbeit erledigen können - nämlich den Code zu erstellen, zu testen und bereitzustellen? Der Sicherheitsprozess kann wirklich glänzen, indem er ihn in diese Automatisierungen einbindet, die Sie bereits in DevOps durchführen, wie automatisierte Modultests, automatisierte Qualitäts- und Regressionstests, automatisierte Erstellung und automatisierte Bereitstellung. Dies löst nicht alle Probleme, aber es wird die Messlatte erheblich erhöhen, sodass Sie sich auf die schwierigen Herausforderungen im Bereich Sicherheit konzentrieren können.

## Sicherheit eingebaut…

Das bedeutet, dass Sicherheit von Anfang an integriert ist und nicht nur ein einzelner Schritt oder eine einzelne Stufe ist.

Einige gängige Tools bieten bereits automatisierte Sicherheitsfunktionen, die auf Schwachstellen hinweisen. Zum Beispiel führt GitHub Sicherheitsprüfungen für Projekte mit Node.js-Code und alle enthaltenen Pakete durch. Dies kann hilfreich sein, aber es ist bereits zu spät; die Sicherheit sollte in die Pipeline integriert werden, bevor sie überprüft wird.

## Sicherheit bereits integriert....?

## Wie gelangen wir dorthin?

Aktuelle Sicherheitsverletzungen verdeutlichen, dass Sicherheit in jedem Schritt des Prozesses integriert werden muss, einschließlich zwischen dem Erstellen und der Produktion sowie unmittelbar vor dem Ausführen des Skripts zur Erstellung der Anwendung. Zusätzlich zur Einbindung von Sicherheit in den Erstellungsprozess müssen wir auch den Erstellungsprozess selbst absichern; er ist schon lange Zeit eine große Schwachstelle.

Viele Unternehmen, die interne Entwicklung betreiben, werfen nun einen genaueren Blick auf ihren Entwicklungsprozess aufgrund der jüngsten Sicherheitsverstöße. Das ist gut, aber es darf nicht bei diesen übereilten Reaktionen auf jeden Angriff stehenbleiben. Wir müssen holistisch denken und nicht auf das nächste schwache Glied in der Kette warten.

Einige praktische Möglichkeiten, den Prozess abzusichern, bestehen darin, den Build-Server als wesentliche Ressource in der gesamten Infrastruktur zu behandeln und dieselben Regeln und Kontrollen auf diesen Server anzuwenden wie für Ihre Kernsysteme. Die Verwendung geeigneter Zugangsdaten, eine sichere Firmware-Startsequenz, Überprüfung des Codes, Protokollierung und Überwachung des Systems usw. werden dann während seiner gesamten Lebensdauer in den DevOps-Prozess integriert, wenn jemand auf den Button klickt.

## Gebaut, um zu bleiben

## Von Lösungen zu Dienstleistungen und darüber hinaus

Viele Leute denken nicht an das Skript selbst als ein Ziel. Es spielt keine Rolle, wie viele gute Module enthalten sind, wenn das Skript selbst nicht geschützt ist. Ein paar Möglichkeiten, das Skript zu schützen, sind, eine Prüfsumme auszuführen und es sollte versioniert, überprüft und signiert werden. Dies bringt zusätzliche Komplexität für DevOps mit sich, aber es gibt Tools, die helfen können.

## Einmal erstellen, überall bereitstellen

Genau wie wir den Entwicklungsprozess automatisieren, können wir auch die Automatisierung für die Implementierung dieser Kontrollen und Prüfungen einbauen. Automatisierung verhindert, dass eine andere Person möglicherweise Ihre Builds durcheinanderbringt, aber wir möchten auch sicherstellen, dass ein Mensch die Ergebnisse erhält und Audits überprüft.

Die bereits verwendeten Werkzeuge können erweitert werden, um Sicherheitsautomatisierung und Checks hinzuzufügen, zum Beispiel für die kontinuierliche Entwicklung und Integration im agilen Zyklus oder für Automatisierungstools in der Linux-Welt.

Organisationen können ihre Sicherheitsmitarbeiter auch über die Teams für Geschäftsentwicklung verteilen, sodass Sicherheitspersonal bereits im Prozess eingebunden ist, falls Probleme auftreten. Zwei Bereiche, in denen Sie sicherstellen wollen, dass Sie Sicherheitspersonal haben, sind die Infrastruktur zur Unterstützung Ihres agilen Prozesses beispielsweise und das Produktmanagement, um Sicherheitsanforderungen für die Phase der Produktanforderungsdefinition zu erhalten, noch bevor sie an einen Entwickler gelangt.

Es gibt immer einen Mangel an ausreichend geschultem und fähigem Sicherheitspersonal sowie an Finanzierung, um die richtigen Leute einzustellen, aufgrund hoher Nachfrage. Einige Möglichkeiten sind, die bereits vorhandenen Mitarbeiter zu schulen und ihnen die erforderlichen Werkzeuge zur Verfügung zu stellen. Es ist nicht notwendig, einen Kryptoguru bei jedem Schritt des Prozesses zu haben. Eine weitere Möglichkeit ist es, anstelle dessen, dass jeder Programmierer für die Programmierung von Authentifizierung, Zugangsdaten und Protokolle in einem sicheren Aufbau in einer Infrastrukturbibliothek verantwortlich ist, ein Team zu haben, das Module entwickelt, die in Ihren Sprachen und Umgebungen alle Sicherheitsfunktionen abdecken. Der Programmierer kann das Modul aufrufen und es erledigt die schwere Arbeit. Auf diese Weise bauen Sie einmal und stellen überall bereit.

Wir sehen, dass Unternehmen SaaS-Sicherheitstools bereitstellen, cloud-basierte Dienste, die für Ihre Anwendung und Ihre Laufzeitumgebung genutzt werden können. Das ist ein großer Schritt im Prozess. Es gibt Unternehmen, die Sicherheitseinbindungspunkte wie Anwendungssicherheit in einer schnellen Umgebung anbieten. Diese Anwendungsprüfungen wie Eingabesäuberung und Eingabevalidierung können in Ihre funktionale Umgebung integriert werden, aber das muss noch bis zum Ende gewartet werden. Denken Sie daran, je früher Sie mit der Sicherheit beginnen, desto günstiger und weniger schmerzhaft wird es.

All dies erfordert natürlich weitere Integrationsarbeit. Entwickler können vorsichtig sein, was die damit verbundene Arbeit betrifft, aber wenn ein Framework mit integrierter Sicherheit vorhanden ist (und es gibt Prototypen wie Ruby on Rails und bestimmte Cloud-Infrastrukturen), kann es viele Stunden sparen. Sie müssen jedoch darauf achten, dass Sie sich nicht ausschließlich auf die Plattform für Sicherheit verlassen, da dies ein einzelner Fehlerpunkt sein könnte.

## Automatisierung wird dich befreien.

Die Sicherheitsverletzungen in den letzten sechs Monaten waren tiefgreifend. Hier sind einige wichtige Ratschläge:

Sicherheit sollte integraler Bestandteil des gesamten Lebenszyklus von den Anforderungen an sein. Sicherheit muss sich im DevOps-Zyklus selbst befinden, nicht nur in der Kodierung und Prüfung, sondern auch in der Infrastruktur, die diesen Prozess antreibt.

Beim Bau von Sicherheitswerkzeugen und Objekten durch Module: Baue sie einmal, mache sie modular und setze sie überall ein.

Nutzen Sie Dienstleistungen, bei denen Sie sich auf die Expertise anderer verlassen können, um Ihr eigenes unterfinanziertes Cyber-Team zu stärken.

Automatisierung wird dich befreien. Automatisiere so viel wie möglich, um die Sicherheit zu erleichtern und zu beschleunigen und die Reibung für deine Entwickler und Tester zu reduzieren. Mit Automatisierung kannst du 80 Prozent von dem, was wir als dumme Angelegenheiten bezeichnen, eliminieren, damit du deine begrenzten Ressourcen für die schwierigen Probleme nutzen kannst.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
