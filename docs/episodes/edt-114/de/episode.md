---
layout: posts
title: "Automatisierung des Geschäftsprozessmanagements"
number: 114
permalink: episode-EDT114-de
lang: de
nav_exclude: true
nav_order: 114
tags:
    - compute
    - businessprocessmanagement
    - capitalbpm
    - bpm
    - automation
    - camunda
    - rpa

date: Tue Nov 22 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Max Young

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, und Max Young, CEO von Capital BPM, diskutieren die Operationalisierung des Geschäftsprozessmanagements mit Modellierungsprogrammen."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, und Max Young, CEO von Capital BPM, diskutieren die Operationalisierung des Geschäftsprozessmanagements mit Modellierungsprogrammen."
---

<div>
{% include transistor.html id="98cc2837" title="#114 Automating Business Process Management" %}

{% include youtube.html id="url" %}
</div>

---

BMP-Modellierung erinnert Darren daran, als er in der Highschool technisches Zeichnen hatte, und die Einführung von AutoCAD und computergestützten Zeichnungssystemen hat das Spiel verändert. Vorher mussten sie seitenweise komplexe Systeme und Diagramme erstellen, damit Menschen etwas bauen konnten, aber sie konnten das Modell nicht testen, um sicherzustellen, dass es korrekt war. Durch die Verwendung von Computermodellierung konnten sie Simulationen durchführen, um sicherzustellen, dass es keine Probleme wie elektrische und sanitäre Anlagen, die durch dasselbe Loch verlaufen, gab.

Dies ist analog dazu, dass Architekten PowerPoint verwenden, um Geschäftsprozesse darzustellen, anstatt ein Modellierungswerkzeug zu nutzen, das Konflikte und Probleme in dem, was Sie für den Geschäftsprozess halten, aufdecken kann.

Mit Hilfe eines Geschäftsmodellierungstools kann auch ein praktisches Problem gelöst werden, indem die verschwendete Zeit eliminiert wird, die für Treffen mit allen interessierten Parteien erforderlich sein kann. Stattdessen können Sie ein implementiertes Modell in die Hände des Geschäftskunden geben und gemeinsam mit ihnen die Schritte durchgehen.

Nachdem Sie die Prozesse artikuliert und modelliert haben, können Sie Integrationspunkte auswählen, die an Ruhestandschnittstellen angehängt werden können, um Informationen abzurufen und zurückzusenden. Auf diese Weise können Geschäftsprozesse mit Microservices in der Cloud integriert werden. Im Beispiel des Einstellungsprozesses könnten diese Punkte dort sein, wo Sie eine API benötigen, um Überprüfungen des Beschäftigungsverlaufs oder des Vorstrafenregisters anzufordern. Die Eingaben werden Dinge wie Sozialversicherungsnummern und Geburtsdaten sein und die Ausgaben werden ein Boolescher Wert sein - stimmen die Informationen überein oder nicht? Hier können Sie anfangen, dieses iterative Gespräch zu führen.

Übersetze das Folgende ins Deutsche: ![bpm Bild](./bpm.png)

Es gibt ziemlich viele manuelle Schritte in diesem Prozess, und Sie können auswählen, welche automatisiert werden sollen. Zum Beispiel, wenn Sie entscheiden, dass ein Interview nicht gut gelaufen ist, können Sie sich auf die Personalabteilung verlassen. Nachdem Sie diesen neuen Prozess implementiert haben, können Sie zur vorherigen Version zurückkehren, wenn Sie möchten. Dadurch haben Sie zwei gleichzeitig arbeitende und implementierte Versionen der Software im Prototyp.

Der Camunda Modeler ist ein nativer Modeler, aber Capital BPM hat eigene Anwendungen entwickelt, die helfen, einen Teil der Arbeit zu optimieren und verschiedene Benutzerrollen zu unterstützen.

Dieses System unterscheidet sich von RPA, weil anstatt das, was ein Benutzer mit Tastenanschlägen tut, aufzuzeichnen, ein Business-Analyst die Prozesse und Schritte über mehrere Abteilungen hinweg betrachtet. Der Analyst betrachtet den gesamten Prozess von oben nach unten. Ein RPA kann in bestimmte Schritte zur Effizienzsteigerung integriert werden. Ein einfaches Beispiel ist, wenn ein Stellenbewerber die Überprüfung des Arbeitsverlaufs und des Vorstrafenregisters besteht, kann er an eine leitende Person im Personalwesen übergeben werden; falls nicht, wird er abgelehnt. Die Auswahl bestimmter Schritte oder Sets von Schritten zur Automatisierung ist ein iterativer Ansatz, der bereits seit einiger Zeit in der Softwareentwicklung erfolgreich eingesetzt wird.

RPAs können bahnbrechend sein, aber sie sind taktisch und kurzfristig. Obwohl diese kurzfristigen Gewinne profitabel sein können, müssen Sie den gesamten Geschäftsprozess betrachten, um Optimierungsmöglichkeiten zu finden und Schritte zu eliminieren. Die Geschichte von der Frau, die immer das Fleisch vor dem Braten geschnitten hat, weil es ihre Mutter so gemacht hat, ist analog zu einigen Unternehmensprozessen. Die Frau fragte schließlich ihre Mutter, warum sie das Fleisch geschnitten habe, und ihre Mutter antwortete: "Damit es in meine Pfanne passt." Viele Unternehmensprozesse existieren nur, weil sie schon immer so gemacht wurden und niemand darüber nachgedacht hat, warum.

Testen, Simulation, das Verschieben von Dingen und das wiederholte Ausführen von Prozessen im Modellierer, mit anderen Worten, das empirische Testen, können dazu beitragen, diesen Prozessballast zu beseitigen und einen erheblichen Mehrwert zu schaffen. Visualisierung und Experimentieren sind wesentliche Bestandteile des gesamten Prozesses.

Max weist darauf hin, dass es eine Übereinstimmung zwischen dem Diagramm und der tatsächlichen Ausführung gibt. Entwickler zeichnen oft Diagramme als Ausgangspunkt. Dennoch verschwinden die Diagramme, wenn die Entwicklung durch die verschiedenen Parteien voranschreitet, daher unterscheiden sich die Vorstellungen des Unternehmens von dem tatsächlichen Geschehen. Das Diagramm und die Realität sind getrennt voneinander. In dieser Art der Modellierung stellt das Bild immer eine genaue Darstellung des Geschehens dar. Darüber hinaus ist es einfach zu erkennen und Änderungen zur Verbesserung vorzunehmen.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
