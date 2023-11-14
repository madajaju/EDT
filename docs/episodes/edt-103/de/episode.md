---
layout: posts
title: "Operationalisierung Ihrer KI-Projekte"
number: 103
permalink: episode-EDT103-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 103
tags:
    - aiops
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - aiml

date: Mon Aug 29 2022 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Gretchen Stewart

img: thumbnail.png
image: thumbnail.png
summary: "Intel's Darren Pulsipher, Chief Solutions Architect, Public Sector, und Gretchen Stewart, Chief Data Scientist, Public Sector, sprechen über die Operationalisierung von KI-Projekten."
video: "https://youtu.be/HbXNLtGkD5E"
description: "Intel's Darren Pulsipher, Chief Solutions Architect, Public Sector, und Gretchen Stewart, Chief Data Scientist, Public Sector, sprechen über die Operationalisierung von KI-Projekten."
---

<div>
{% include transistor.html id="dfad3810" title="#103 Operationalizing Your AI Projects" %}

{% include youtube.html id="HbXNLtGkD5E" %}
</div>

---

Gretchen ist ein ausgezeichnetes Beispiel für jemanden, der kontinuierlich lernt und sich anpasst. Ihr Bachelor-Abschluss ist in Mathematik. Sie hat einen Master-Abschluss in Betriebswirtschaft und vor einigen Jahren ein Programm an der Harvard University abgeschlossen, das sich auf Datenwissenschaften konzentrierte und sie zur Chefin der Datenwissenschaftler im öffentlichen Sektor bei Intel führte. Sie arbeitet seit über 20 Jahren in der Technologiebranche, zunächst im Bereich Softwareentwicklung, und verbrachte 15 Jahre im öffentlichen Sektor.

Sie findet die Arbeit im öffentlichen Sektor besonders lohnenswert, da sie einen Unterschied im Leben der Bürgerinnen und Bürger im Alltag bewirkt. Darüber hinaus verfügt die Bundesregierung über die meisten Daten auf dem Planeten, was perfekt für jemanden ist, der gerne von Daten umgeben ist und weiter lernen möchte.

Es gibt viele Begriffe rund um KI. Zunächst ist es wichtig, den Unterschied zwischen künstlicher Intelligenz (KI) und maschinellem Lernen (ML) zu verstehen. ML ist eine Technik, die Teil von KI ist; sie ist eine Untergruppe. ML-Algorithmen beziehen ihre Stärke daraus, dass sie aus verfügbaren Daten lernen können. In erster Linie lernt man entweder aus überwachtem oder nicht-überwachtem Datensatz.

Der einfache Unterschied zwischen überwachtem und nicht überwachtem Lernen liegt in der Datenkennzeichnung. Beim überwachten Lernen sind die Datensätze gekennzeichnet. Das bedeutet, dass das Aussehen der Daten bereits festgelegt ist. Dadurch wird die Klassifizierung und Vorhersage wesentlich einfacher. Beim nicht überwachten Lernen versucht man, Muster in den Daten zu finden; die Maschine lernt, Beziehungen zwischen Daten zu erstellen, indem sie gemeinsame Wege, Ähnlichkeiten oder Unterschiede findet.

Ein Beispiel für überwachtes Lernen wäre ein Online-Shop, der einem Kunden anhand seiner Einkaufshistorie einen Artikel empfiehlt, den er vielleicht kaufen möchte, oder ein Streaming-Dienst, der basierend auf den Sehgewohnheiten einer Person einen Film empfiehlt.

Viele Begriffe haben jetzt die Abkürzung "ops" am Ende. Zum Beispiel sagen die Leute "DL ops" für Deep Learning Operationen, eine Unterkategorie des Maschinenlernens. Warum das "ops"? Zunächst ist es nicht so anspruchsvoll wie DevOps. Stattdessen wurde es von der weit verbreiteten Idee des DevOps-Ansatzes zur Erstellung und Anpassung von Anwendungen beeinflusst. Die Menschen versuchen, eine Reihe von Praktiken zu entwickeln, um die Zuverlässigkeit und Effizienz des Designs, der Entwicklung und der Ausführung von maschinellem Lernen zu optimieren. Es wäre also fast wie ein Marktplatz, auf dem Sie benutzerdefinierte Anwendungen erstellen und betreiben können und sie dann mit anderen teilen können.

Viele Modelle und Algorithmen sind bereits optimiert und in Tools wie Converge.io oder C3 AI verfügbar. Diese Methoden und Technologien können Ihnen dabei helfen, Ihre maschinellen Lernmodelle zu optimieren. Der beste Weg, dies zu tun, besteht darin, viele Tools zu verwenden, die entweder Open Source sind oder spezifisch vom Hersteller entwickelte Software, um das Erstellen, Entwickeln, Designen, Ausführen und die Ansteuerung wesentlich zugänglicher zu machen.

Die Entwicklung von künstlicher Intelligenz ähnelt dem Stand der Softwareentwicklung vor 30 Jahren. Viele der Schritte sind immer noch manuell und hoffentlich bald automatisiert.

In früheren Episoden haben Darren und Gretchen darüber diskutiert, wie viele KI- und ML-Projekte einmalige wissenschaftliche Experimente sind. Dann geht der Data Scientist zu etwas anderem über und es wird nie operationalisiert. Im Gegensatz dazu zielt ML Ops darauf ab, das Modell nach dem Training und Lernen bereitzustellen, um einen echten Mehrwert zu bieten.

Einige Unternehmen nutzen diese Werkzeuge explizit. Domino Labs zum Beispiel, schafft fast diesen Marktplatz. Arbeit im öffentlichen Sektor, sagen wir, bei nuklearen U-Booten zur Objekterkennung oder Clusterklassifizierung, könnte auch in der Luftwaffe oder anderen Hilfseinrichtungen anwendbar sein, damit diese Arbeit katalogisiert werden kann, um agile Umgebungen zu unterstützen und aufzubauen. Sie könnten einige Algorithmen nutzen und je nach den Ergebnissen unterschiedlich gewichten. Sie könnten es anhand der Unterschiede in den Datensätzen anpassen, aber zumindest gibt es... Anhaltspunkte? Gemeinsamkeiten? Geteilte Werkzeuge? Ihre letzten Worte hier sind abgebrochen...

Sicherheit beschäftigt sich immer mit Open-Source-Software und -Modellen, und KI hat einzigartige Umstände. Zum Beispiel, wie weiß man, ob der Entwickler es nicht trainiert hat, sein Gesicht in einem Gesichtserkennungsmodell zu ignorieren? Es wird jetzt erwartet, dass Menschen Dinge dokumentieren, zum Beispiel, woher ein Datensatz stammt.

Es gibt auch das Thema Ethik und Verantwortung. Der Tay Chatbot und die voreingenommenen Gesichtserkennungsprogramme waren großartige Beispiele dafür, wie KI ohne böswillige Absicht schiefgehen kann. In der ML-Operations (ML-Ops) wurde lange Zeit von einer einzelnen Person gearbeitet, die die Ergebnisse produzierte. Jetzt geht es darum, dass man ein vielfältiges Team von Menschen mit unterschiedlichen Fähigkeiten und Weltanschauungen benötigt.

Die erste Konferenz zur Diskussion von KI und ML fand 1956 am Dartmouth College statt. Die Wahrheit ist, dass viele Grundlagen der KI, wie die logistische Regression, lineare Regression, Clustering-Algorithmen usw., mathematische Gleichungen sind, die schon lange existieren. Natürlich gibt es brillante zusätzliche Frameworks wie TensorFlow, auf denen man aufbauen kann, aber die Grundlagen sind/waren immer noch die Basis. Wir haben Rechenleistung, Speicher, 5G und einzigartige Fähigkeiten hinzugefügt. Sobald das Training abgeschlossen ist, haben wir die Daten und Informationen neben der Technologie anstatt alles zur Technologie bringen zu müssen. Die Technologie zu den Daten zu bringen eröffnet uns nun einige unterhaltsame und aufregende Probleme, die wir lösen können.

Aber Gespräche darüber, wie das Modell trainiert wurde, was die ursprünglichen Daten waren und wie man den Modelldruck berücksichtigt, müssen immer stattfinden. Nach einer gewissen Zeit muss man das Modell erneut trainieren; vielleicht muss man einen anderen Algorithmus hinzuziehen oder den aktuellen anders gewichten, um genauere Informationen zu erhalten, da es mehr und vielfältigere Daten gibt. Das ist alles gut, denn es erhöht das Genauigkeitsniveau.

Mit der Entwicklung hin zu ML Ops können Sie dies kontinuierlich tun. Genau wie die Softwareentwicklung auf kontinuierliche Integration und Bereitstellung hingearbeitet hat, wird dasselbe in KI oder ML geschehen, wo Modelle aktualisiert werden und immer genauer werden.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
