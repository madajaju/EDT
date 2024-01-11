---
layout: posts
title: "Operationalisierung von Datenpipelines"
number: 25
permalink: episode-EDT25-de
has_children: false
lang: de
nav_exclude: true
parent: Folgen
grand_parent: Deutsch
nav_order: 25
tags:
    - dataarchitecture
    - datacentric
    - data
    - datamesh
    - datapipeline
    - technology
    - people

date: Tue Oct 13 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Sarah Kalicin

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, spricht mit Sarah Kalicin, Leitende Data Scientistin bei Intel, über die Operationalisierung der Datenpipeline Ihrer Organisation. Es bedarf eines Teamefforts, um kontinuierlich wertvolle Informationen zu modellieren, zu überwachen und zu produzieren. Dies ist die letzte Folge der Serie zur Initiierung Ihrer Organisationsumwandlung hin zu einer datenzentrierten Organisation."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, spricht mit Sarah Kalicin, Leitende Data Scientistin bei Intel, über die Operationalisierung der Datenpipeline Ihrer Organisation. Es bedarf eines Teamefforts, um kontinuierlich wertvolle Informationen zu modellieren, zu überwachen und zu produzieren. Dies ist die letzte Folge der Serie zur Initiierung Ihrer Organisationsumwandlung hin zu einer datenzentrierten Organisation."
---

<div>
{% include transistor.html id="cb72bda4" title="#25 Operationalizing Data Pipelines" %}

{% include youtube.html id="url" %}
</div>

---

Für die letzte Folge in dieser Serie spricht Darren mit Sarah Kalicin, der leitenden Datenwissenschaftlerin bei Intel, über die Operationalisierung Ihrer Datapipeline. Sie diskutieren, wie Sie Ihre Datenerkenntnisse von einem einmaligen wissenschaftlichen Experiment zu einer fortlaufenden Informationsquelle machen können.

## Wie setzen wir die Erkenntnisse der Analytik in die Praxis um?

Das erste, was man über die Datenpipeline verstehen muss, ist, dass sie nicht wie ein abgeschlossenes elektrisches System ist, das man aufbauen, sich davon entfernen und sechs Monate später einen Schalter umlegen kann, um zu wissen, dass die Glühbirne leuchtet. Eine Datenpipeline ist anders, weil die Daten variabel sind; sie können sich verändern oder abnehmen, zum Beispiel, sodass man nicht zwangsläufig belohnt wird, indem die Glühbirne zu irgendeinem Zeitpunkt leuchtet oder in diesem Fall die Erkenntnis, nach der man sucht. Man muss immer daran denken, was im System schiefgehen kann und wie man diese Kurzschlüsse beheben kann.

Das Erkennen von Abnormalitäten ist ein integrierter Bestandteil des Pipelines. Man kann nicht für alles planen, daher muss man zumindest in der Lage sein zu sehen, wenn etwas passiert ist, das außerhalb der Grenzen der ursprünglichen Analytik liegt. Ein Beispiel dafür ist die COVID-Krise, ein unvorhersehbares Ereignis, das für viele Systeme Muster verursacht hat, die weit außerhalb des Normalen liegen. Ein weiteres Beispiel wäre ein Unternehmen, das Widgets herstellt. Um zu wissen, wie viele Widgets produziert werden sollen, enthält die Datenpipeline die Kundennachfrage, den aktuellen Bestand und den Ertragsverlust. Diese können im Laufe der Zeit recht stabil sein, aber es könnte beispielsweise ein PR-Ereignis geben, das die Kundennachfrage explodieren lässt. Das kann einen großen Einfluss auf die Modelle haben. Maschinelles Lernen und Deep Learning betrachten vertraute Muster und wenn sie diese Muster noch nie zuvor gesehen haben, werden die Modelle versagen oder sich verschlechtern. Man muss an der Schwelle zur Entdeckung bleiben.

Die einzige Möglichkeit, um auf dem neuesten Stand der Entdeckungen zu bleiben, besteht darin, Ihre Datenpipelines automatisiert zu haben, um zeitnahen Zugriff auf Informationen zu erhalten. Dies ist der Wettbewerbsvorteil: aktuelle und aufschlussreiche Daten, die Ihnen schnell bei der Beantwortung Ihrer Fragen helfen können.

IT-Teams und Daten-Teams müssen bei der Automatisierung zusammenarbeiten und festlegen, was für eingehende Daten automatisiert werden sollte. Außerdem müssen sie gemeinsam Änderungen am Modell verwalten, die von den Datenwissenschaftlern vorgenommen werden, damit es problemlos in den Arbeitsablauf integriert werden kann.

## Bereitstellung führt zu Kurzschluss.

Es gibt zwei Arten von Kontrollen, die Kurzschlüsse bei der Bereitstellung verhindern können: Analytische Systemkontrollen und organisatorische Kontrollen.

Analytische Systemsteuerungen beziehen sich darauf, die Modelle, die Sie trainiert haben, einzusetzen, um Daten durchzuführen, um Ihre Fragen leicht zu beantworten. Diese implementierten Modelle müssen moderiert werden, um die Genauigkeit der Daten zu überprüfen. Viele Dinge können dazu führen, dass die Daten negativ beeinflusst werden, wie zum Beispiel Umweltveränderungen, Maschinenkalibrierung, Verteilungsprobleme und so weiter.

Dies unterscheidet sich nicht so sehr von der Softwareentwicklungswelt, in der Änderungen Vorhersagen beeinflussen können. Die IT-Abteilung ist mit dem Prozess vertraut, Tests durchzuführen, um sicherzustellen, dass ihre Modelle oder Anwendungen gemäß den festgelegten Richtlinien ausgeführt werden. Daher sollten DevOps und Datenwissenschaftler von diesen Ressourcen und diesem Wissen profitieren. Es besteht keine Notwendigkeit, einen neuen Prozess zu erfinden, sondern die Gruppen sollten Ressourcen kombinieren, um sich erfolgreich aufzustellen.

Organisatorische Kontrollen gehen auf eine organisatorische Grundlage zurück, die sich dazu verpflichtet, datenzentriert zu sein und die richtigen Personen und Ressourcen bereitzustellen, um gemeinsame Ziele zu verfolgen. Die beste Chance, Operationalisierung zu erreichen, besteht, wenn eine Zusammenarbeit, Vertrauen, Verständnis für Bedürfnisse und Feedbackschleifen zwischen den Gruppen in der Organisation bestehen.

Feedbackschleifen sind entscheidend in diesem Prozess. Beispielsweise können Fachexperten Informationen zu Marktdynamiken bereitstellen, damit die Datenwissenschaftler das Modell auf diese Änderungen in den Daten überwachen können. Wenn ein Modell im Laufe der Zeit verwendet werden soll, muss es ständig überarbeitet und verbessert werden.

Konsumenten der Daten sollten ein Dashboard haben, das ihnen Informationen liefert und es ihnen ermöglicht, genauer nachzuforschen, warum etwas ein wenig seltsam aussieht. Je mehr sie untersuchen oder aufzeigen können, was untersucht werden muss, desto gestärkter wird Ihre Organisation sein.

## Rohrleitung

Ein Schlüssel von der IT-Seite, um die Daten-Pipeline einsatzbereit zu machen, besteht darin, eine Versionskontrolle wie GitHub zu verwenden, um Zugriff auf frühere Versionen Ihres Modells zu haben. Für Prüfungszwecke ist es auch wichtig, die Daten zu speichern, die das Modell erstellt haben, sowie andere historische Daten. Sie möchten in der Lage sein, die Muster zu betrachten und zu sehen, wie sich ein bestimmtes Merkmal geändert hat oder das Modell beeinflusst hat. Sie können auch historische Daten in Ihre neuen Modelle einfügen, um zu sehen, wie stark sie Ihre aktuellen Daten beeinflussen.

Ein Beispiel: Einige Systeme zeigen ein verzerrtes Bild, da während COVID eine große Anzahl von Menschen von zu Hause aus arbeitet. Ein Fallbeispiel ist die Marine. Seit COVID sind 95% ihrer IT-Mitarbeiter remote tätig und ihre Produktivität ist um 35% gestiegen. Aufgrund dieses einen Datenpunktes könnte man sagen, dass alle jetzt von zu Hause aus arbeiten werden. Wird sich die Steigerung von 35% fortsetzen oder wird es, wenn die Leute ins Büro zurückkehren, einen Rückgang um 35% geben? Offensichtlich ist dieser eine Datenpunkt nicht unbedingt ausreichend, um tatsächliche Produktivität vorherzusagen.

Ein weiteres Tool, das die IT anbieten kann, ist die kontinuierliche Integration und Bereitstellung. Wenn Sie mit einem Modell arbeiten, können Sie entweder Jenkins, GitHub Actions oder ein ähnliches Tool verwenden, um automatisch Tests gegen Ihr Modell mit Ihren Daten auszuführen oder spontan sinnlose Daten zu generieren.

Die IT-Mitarbeiter und Datenwissenschaftler müssen zusammenarbeiten, um zu bestimmen, was und wie der Output der Modelle überwacht werden soll. Die IT kann den Output automatisch überwachen und auch die Leistung der Modelle in der Infrastruktur verfolgen. Ein Beispiel ist, dass die IT mit automatischer kontinuierlicher Integration und Bereitstellung schnell die Datenwissenschaftler alarmieren kann, wenn ein Modell länger als normal benötigt, um zu verhindern, dass es außer Kontrolle gerät. Wenn die IT in die Datenerzeugung investiert ist, was bisher weitgehend in der Branche gefehlt hat, wird der Prozess für alle einfacher und kohärenter sein.

Ein weiterer Aspekt, über den man nachdenken sollte, ist das Versuchsdesign, da auch die Wechselwirkungen zwischen Variablen und Merkmalen wichtig sind. Fachexperten können dabei helfen, zu bestimmen, welche potenziellen Interaktionen auftreten können, und man kann Modelle erstellen, um zu verstehen, welche Variabilität erwartet werden kann.

Es ist aufregend, dass ein Datenwissenschaftler Rohmaterial in Erkenntnisse verwandeln kann. Es erfordert jedoch ein Team. Je mehr jeder in Ihrer Organisation voneinander lernen kann, desto mehr großartige Dinge können geschehen.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
