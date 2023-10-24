---
layout: posts
title: "Kämpfe gegen den Cybergegner, indem du deine Software-Lieferkette sicherst."
number: 91
permalink: episode-EDT91-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 91
tags:
    - cybersecurity
    - devsecops
    - sbom
    - securesupplychain
    - policy
    - process
    - compute

date: Wed Jun 08 2022 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Eric Greenwald

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect bei Intel, und Eric Greenwald, General Counsel von Finite State, sprechen über die Sicherung der Software-Lieferkette."
video: "https://youtu.be/zyIH533JhyM"
description: "Darren Pulsipher, Chief Solutions Architect bei Intel, und Eric Greenwald, General Counsel von Finite State, sprechen über die Sicherung der Software-Lieferkette."
---

<div>
{% include transistor.html id="d4b56c70" title="#91 Fighting the Cyber Adversary by Securing your Software Supply Chain" %}

{% include youtube.html id="zyIH533JhyM" %}
</div>

---

Darren und Eric Greenwald, der Justiziar von Finite State, diskutieren in dieser Folge die Sicherung der Software-Supply-Chain.

Finite State konzentriert sich darauf, Schwachstellen in Firmware zu finden, meistens Software von Dritten, die bereits bestehende Schwachstellen haben könnte, bevor sie diese in ihre Geräte integrieren. Finite State konzentriert sich hauptsächlich auf industrielle IoT-Geräte, medizinische Geräte, Automobile und Unterhaltungselektronik.

Vor sieben Jahren arbeitete Eric als Anwalt im privaten Sektor, wobei er sich auf Sicherheitstests und die Identifizierung von Schwachstellen für Cybersicherheitsunternehmen spezialisierte, bevor er Finite State beitrat. Zuvor arbeitete er im Regierungsbereich mit Schwerpunkt auf Cybersicherheit und nationaler Sicherheit für das FBI und die CIA sowie als Chefberater für den Geheimdienstausschuss des Repräsentantenhauses. Seine Regierungsarbeit erreichte ihren Höhepunkt, als er zum Senior Director für Cybersicherheit im Nationalen Sicherheitsrat im Weißen Haus wurde.

Eric glaubt, dass ein Teil des Grundes dafür, dass jetzt ein Schwerpunkt auf der Absicherung der Lieferkette liegt, darin besteht, dass die Bedrohung sich weiterentwickelt hat. Die zunehmend komplexe Natur von Software, einschließlich der Tatsache, dass viele Komponenten bei ihrer Erstellung anfällig sind und erst im Laufe der Zeit entdeckt werden, erschwert es, Geräte zu finden, die über die Software-Lieferkette erstellt wurden. Zudem haben kürzlich hochkarätige Angriffe über eine Verletzung der Software-Lieferkette wie bei SolarWinds die Menschen stärker auf die Gefahr aufmerksam gemacht.

In der SolarWinds-Attacke hatte der Täter Geduld und verursachte nicht sofort Chaos, sondern wartete ein Jahr lang, während er in amerikanischen Computernetzwerken umherstreifte, um Zugang und Informationen zu gewinnen. Diese Geduld ist wahrscheinlich der signifikanteste Unterschied zwischen einem staatlichen Angriff und einem kriminellen Angriff. Während kriminelle Angriffe manchmal geduldiger auf eine finanzielle Rendite ausgerichtet sind, sind diejenigen hinter einem staatlichen Angriff bereit, Jahre zu investieren, um ihren Zugang zu Informationen zu entwickeln. Bei beiden werden die Angriffe jedoch immer raffinierter und besser positioniert, um die komplexe Lieferkettenstruktur verheerend auszunutzen.

Um diese Angriffe zu bekämpfen, tauchen neue Vorschriften auf. Die Biden-Regierung erließ im Mai 2021 die Exekutivverordnung 14028, die zwei Hauptpunkte hat: sichere Softwareentwicklung und Software-Bill of Materials (SBOM). Die Exekutivverordnung richtet sich nur an Regierungsbeschaffungen, aber die Privatindustrie wird wahrscheinlich folgen.

Die Details und technischen Empfehlungen für die Entwicklung sicherer Software werden noch ausgearbeitet. Ein Teil davon wäre jedoch, dass Softwarelieferanten an die Regierung ein SBOM bereitstellen müssten. Der erste Gesetzesentwurf für SBOMS wurde 2014 veröffentlicht, so dass die Standards für deren Erstellung reifer und weiter entwickelt wurden. Ein SBOM ist im Wesentlichen eine Liste der Softwarekomponenten, die in ein Softwareprodukt eingeflossen sind, nicht so unterschiedlich wie eine Zutatenliste auf einem Lebensmittelprodukt. Dies bietet Transparenz in der Lieferkette, was wesentlich ist, um Schwachstellen zu bewerten oder eine Schwachstelle zu identifizieren, die zu einem späteren Zeitpunkt entdeckt wird.

Ein ausgezeichnetes Beispiel dafür ist das, was mit Log4j passiert ist. Als diese Schwachstelle entdeckt wurde, hatten viele Unternehmen keine Ahnung, ob sie Log4j in ihrem Stapel hatten. Es wäre kein Zauberstab, aber ein SBOM würde es Unternehmen ermöglichen, leichter festzustellen, ob sie das problematische Softwarekomponente in ihrem System haben, und schneller einen Patch implementieren.

Argumente gegen die Veröffentlichung von SBOMs sind, dass sie Angreifern einen Fahrplan liefern und proprietäre Informationen preisgeben werden. Obwohl dies legitime Bedenken sind und diskutiert werden müssen, sehen das Handelsministerium und das Ministerium für Innere Sicherheit einen viel größeren Nutzen darin, Transparenz für Verteidiger zu haben als irgendwelche Vorteile für Angreifer. Es gibt parteiübergreifende Gesetzesentwürfe zur Unterstützung von SBOMs. Es gibt Möglichkeiten, das Risiko zu verringern, dass SBOMs in falsche Hände gelangen, wie sichere oder nicht austauschbare Verträge. Die Debatten über diese Bedenken werden im öffentlichen Sektor fortgesetzt und immer mehr Unternehmen werden sie übernehmen.

Diese Gesetzgebung findet statt, weil die FDA vorgeschlagen hat, dass Hersteller von medizinischen Geräten SBOMs als Teil des Überprüfungsprozesses integrieren. Daher gewinnen SBOMs an Dynamik bei diesen Herstellern. Die physische Welt wird zunehmend von Software in medizinischen Geräten und eingebetteten Systemen wie Steuersystemen für Kraftwerke, HVAC-Systemen, Flughafenkontrollen usw. beeinflusst. Daher sind operative Systeme gefährdet und haben schwerwiegendere Folgen als Angriffe auf Geschäftssysteme.

Eine Schwierigkeit für OT-Profis ist, dass viele der industriellen Komponenten älter sind und möglicherweise nicht aktualisiert wurden. Dennoch zögern Hacker, sich mit dem Internet zu verbinden und Updates durchzuführen, denn so gelangen Hacker ins System. Die beste Lösung für dieses Problem besteht darin, Transparenz über die Komponenten im Stack zu erlangen, das System und die Geräte im OT-Netzwerk zu scannen und Reverse Engineering und Decompiling durchzuführen, um die Details zu verstehen. Im Wesentlichen müssen Sie Ihre SBOM erstellen und die verwundbaren Stellen bewerten.

Dies ist der Hauptarbeitsbereich für Finite State. Sie untersuchen Systeme und Geräte und führen eine Analyse durch. Sie verfügen über eine Plattform, die die Analyse des Embedded-Codes automatisiert, eine Aufschlüsselung der Schwachstellen liefert und die verwundbarsten und wichtigsten Schwachstellen identifiziert und gruppiert. Manchmal kann man eine ganze Kategorie von Offenheit mit einer einzigen Lösung beseitigen. Das alleinige Erstellen der SBOM reicht jedoch nicht aus. Sie muss in ein Risikomanagementsystem eingebunden werden, um die vielen Schwachstellen zu durchsuchen und zu sortieren. Das Finden der wichtigsten Risiken ist ein komplexer Prozess, und Finite State kann Sicherheitsteams dabei helfen, ihre Maßnahmen zum Schutz ihrer Systeme zu priorisieren.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
