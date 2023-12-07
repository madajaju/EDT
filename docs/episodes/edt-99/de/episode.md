---
layout: posts
title: "Präkog Cyber-Angriffspfad mit XM Cyber"
number: 99
permalink: episode-EDT99-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 99
tags:
    - aiml
    - cybersecurity
    - xmcyber
    - technology
    - process

date: Mon Aug 08 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Paul Giorgi

img: thumbnail.png
image: thumbnail.png
summary: "Intel’s Darren Pulsipher, Chief Solutions Architect, und Paul Giorgi, Direktor des Vertriebsingenieurwesens bei XM Cyber, diskutieren, wie die Technologie von XM Cyber Organisationen dabei helfen kann, Angriffspfade aufzudecken und das Risiko zu reduzieren."
video: "https://youtu.be/url"
description: "Intel’s Darren Pulsipher, Chief Solutions Architect, und Paul Giorgi, Direktor des Vertriebsingenieurwesens bei XM Cyber, diskutieren, wie die Technologie von XM Cyber Organisationen dabei helfen kann, Angriffspfade aufzudecken und das Risiko zu reduzieren."
---

<div>
{% include transistor.html id="60eaf764" title="#99 Precog Cyber Attack PAth with XM Cyber" %}

{% include youtube.html id="url" %}
</div>

---

Paul ist seit Ende der 1990er Jahre im Sicherheitsbereich tätig und hat seine Karriere mit Projekten für das Ministerium für Innere Sicherheit und das Verteidigungsministerium begonnen. Im Jahr 2005 trat er Fishnet Security bei und war dort im Vertriebsingenieurwesen tätig. Seitdem ist er eng mit dem Vertriebsingenieurwesen verbunden. Er trat XM Cyber bei, um sich auf Einbruch- und Angriffssimulationen zu konzentrieren.

Anstatt der traditionellen Cybersicherheit, die Erkennung, Behebung und Prävention umfasst, ist XM Cyber vorhersagend. Eine gute Beschreibung wäre, dass es eine prekognitive Simulation ist. XM Cyber erzeugt imaginative Vorfälle, um Ihnen Einblick zu geben, wie Ihre Tools damit umgehen könnten und wie Sie spezifische Engstellen beheben könnten. Die Idee ist, all dies vor einem Penetrationstest zu tun. Sie können heute Probleme beheben, die Auswirkungen morgen sehen und dann kontinuierlich Ihre Sicherheit steigern und verbessern.

Google Maps ist eine gute Analogie dafür, wie XM Cyber funktioniert. Wenn du von einem Ort zum nächsten gelangen möchtest, wird dir Google Maps alle Möglichkeiten aufzeigen, wie du dorthin gelangen kannst - ob es nun vermeidbare Mautstellen gibt oder welche die direkteste Strecke ist, usw. XM Cyber macht dasselbe, aber mit einer Angriffssimulation. Nehmen wir als Beispiel an, du hast einen kompromittierten Benutzeraccount im aktiven Verzeichnis. In diesem Fall wird es dir die sechs Schritte zeigen, die du unternehmen kannst, um zu einem lokalen Domänencontroller zu gelangen und diesen kritischen Vermögenswert zu kompromittieren. Es wird auch alle verschiedenen Routen zwischen diesen beiden Punkten anzeigen.

Ein Anwendungsfall dafür ist, dass Sie einem Red Team mit dieser Information ermöglichen können, äußerst effizient zu sein, da sie nicht herumstochern und versuchen müssen, Entdeckungen zu machen. Es kann auch dem blauen Bereich helfen, indem es ihnen ermöglicht, Remediations an Engstellen zu priorisieren. Zum Beispiel, wenn es 400 Angriffspfade gibt, die alle zu verschiedenen Bereichen in Ihrer DMZ führen, aber alle 400 scheinen auf diese eine Komponente angewiesen zu sein, um diesen Pfad zu ermöglichen, dann können Sie dieses eine Problem beheben und alle 400 Pfade zerstören. Blaue Teams können diese Engstellen, die den Angreifer ermöglichen könnten, absichern.

Ein Bereich, den XM Cyber analysiert, ist das Identitätsmanagement, nicht nur im Rechenzentrum, sondern auch in der Cloud. Manchmal bestehen Angriffswege aus zehn Schritten, wobei neun Schritte sich durch die Identitätswelt bewegen. Zum Beispiel könnten Sie Berechtigungen für Ihr Administrator-Konto haben, und dann könnte dieses Administrator-Konto weitere Berechtigungen haben. Man muss möglicherweise sechs oder sieben Mal verschiedene Berechtigungen anpassen oder Passwörter zurücksetzen und Gruppenrichtlinien (GPOs) bereitstellen. Durch Nutzung des Active Directorys könnte man neun Schritte von einem Standardbenutzerkonto zum Domänenadministrator unternehmen.

Neben der Identität betrachtet XM Cyber über hundert Entitäten wie Maschinen, S3-Buckets und SSH-Schlüssel. Diese verschiedenen Entitäten können kombiniert werden, um einen Angriffsweg zu erstellen. Manchmal wird es sehr komplex. Zum Beispiel könnte ein Angriff lokal beginnen, zu Azure gehen, Intune nutzen und dann zu einer anderen Maschine zurückkehren, um einen Übergang zu GCP zu ermöglichen. Sobald sich Angreifer in der GCP-Umgebung befinden, können sie das Vertrauen oder die Berechtigungen zwischen AWS und GCP nutzen, um AWS zu kompromittieren. XM Cyber betrachtet alle verschiedenen Arten von Entitäten in verschiedenen Umgebungen und verbindet sie, um diese Wege zu bewerten, wie jede Entität in Bezug auf das Risiko aller anderen ganzheitlich zusammenwirkt.

Es gibt zwei Möglichkeiten, wie XM Cyber mit Kunden interagiert. Die erste ist eine hochrangige Erkundung, um die Umgebung zu bewerten, Schwachstellen aufzudecken und zu messen, wie ein Angreifer neue Schwachstellen aufdecken kann, um wichtige Vermögenswerte zu gefährden. Die zweite ist eine gezielte Bewertung eines bestimmten Szenarios, das den Kunden beunruhigt. Diese Zusammenarbeit umfasst nicht nur eine statische Analyse von Entitäten. Sie sind dynamisch, da sie den Datenverkehr und andere Muster betrachten.

Ein typischer gezielter Anwendungsfall besteht darin, zu bestimmen, ob die OT das kritische Vermögen oder der Einbruchspunkt ist. XM Cyber spielt Szenarien durch, wie zum Beispiel, ob eine Maschine in der Personalabteilung der Einbruchspunkt ist und ob dadurch ein Risiko für diesen PLZ besteht, der sich in der SCADA-Umgebung befindet und Druckschalter steuert, die die Stromversorgung für eine Stadtgemeinde abschalten könnten. Dies ist ein tatsächlicher Anwendungsfall, den XM Cyber simulieren kann. Diese Art von Informationen ist in einer Welt, in der OT nicht mehr isoliert, sondern mit Netzwerken verbunden ist, entscheidend.

XM Cyber ist eine SaaS-Lösung anstelle von On-Prem, damit sie dynamisch bleiben und den besten Service liefern können. Es kann beängstigend sein, sich vorzustellen, dass etwas in der Cloud alle Ihre Angriffstechniken hat. Dennoch unternimmt XM Cyber viel Arbeit, um sicherzustellen, dass Daten vollständig isoliert sind, SOC 2-konform und anderweitig zertifiziert sind und es keine Mehrmandantenfähigkeit gibt. Sie sammeln auch keine sensiblen Informationen. Sensible Informationen werden gehasht und nur ein Teil wird in die Cloud gesendet. Sie müssen tatsächliche Daten nicht besitzen.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
