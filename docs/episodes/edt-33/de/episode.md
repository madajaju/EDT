---
layout: posts
title: "Der AWS-Ausfall im November 2020"
number: 33
permalink: episode-EDT33-de
lang: de
nav_exclude: true
nav_order: 33
tags:
    - aws
    - advancedcommunications
    - infrastructure
    - microservices
    - multicloud
    - technology
    - process

date: 2020-12-15T00:00:00.000Z
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Public Sector, bei Intel spricht über die aus dem AWS-Ausfall im November 2020 gewonnenen Erkenntnisse und vorbeugende Lösungen zur Bewältigung solcher Ausfälle."
video: "https://youtu.be/XquYoUXxJks"
description: "Darren Pulsipher, Chief Solution Architect, Public Sector, bei Intel spricht über die aus dem AWS-Ausfall im November 2020 gewonnenen Erkenntnisse und vorbeugende Lösungen zur Bewältigung solcher Ausfälle."
---

<div>
{% include transistor.html id="e81503fc" title="#33 The AWS Outage of Nov 2020" %}

{% include youtube.html id="XquYoUXxJks" %}
</div>

---

## Was wir aus dem AWS-Ausfall gelernt haben

Amazon Web Services (AWS) hatte zu einem ungünstigen Zeitpunkt eine erhebliche Störung – am Tag vor Thanksgiving 2020. Da sie ihre Service-Protokolle veröffentlicht haben, ist es interessant, diese zu überprüfen, um herauszufinden, was passiert ist und was wir daraus lernen können.

## Zeitstrahl des AWS-Ausfalls

Am Mittwoch, den 25. November 2020 gegen 3:00 Uhr PST, aktualisierte AWS die Ost-Region und fügte Server hinzu, um die Kapazität von Kinesis zu erhöhen. Kinesis ist ein beliebter KI-Dienst, der Musterabgleiche in Logdateien und Videodateien durchführt. Etwa anderthalb Stunden nach dem Upgrade begannen die Serveralarme Fehler in den Kinesis-Datensätzen zu melden. Ziemlich schnell, gegen 8 Uhr, identifizierten sie zunächst ein paar Kandidaten in den Front-End-Services als Ursache. Kinesis besteht aus verschiedenen kleineren Diensten, einer Gruppe von Front-End-Services und einer Gruppe von Back-End-Services. Wie das System aufgebaut ist, wird jedes Mal, wenn ein Back-End-Service läuft, ein Thread im Front-End gestartet. Eines der Probleme war, dass das Front-End die Thread-Grenzwerte erreichte, als sie während des Upgrades Server zum Back-End hinzufügten. Sobald sie dieses Problem erkannt hatten, führten sie eine vorübergehende Lösung mit Updates (Patches) für das Betriebssystem durch und Kinesis war gegen ungefähr 10:30 Uhr wieder online und wurde bis 1:15 Uhr am 26. November vollständig wiederhergestellt. Letztendlich war Kinesis 21 Stunden lang nicht voll funktionsfähig und obwohl nicht jeder dieses KI-Tool verwendet, war die Auswirkung weitreichend.

## Kinesis Impact auf Deutsch übersetzen.

Mehrere andere Amazon-Dienste nutzen Kinesis, wie zum Beispiel Amazon Cognito und CloudWatch, und sie erlitten unterschiedliche Störungen. Cognito war bis etwa 14 Uhr überlastet; CloudWatch war bis etwa 22 Uhr nicht verfügbar. In einem Dominoeffekt waren auch von CloudWatch abhängige Dienste wie Lambda und EventBridge betroffen. Da EventBridge nicht verfügbar war, waren auch die Container-Dienste LCS und LKS betroffen.

Die Stromausfälle traten nur in der Ostregion auf, und AWS hat schnell Kapazitäten in den anderen Regionen hinzugefügt, um zu verhindern, dass Kinesis ähnlich scheitert. Während des Ausfalls stießen Benutzer in der Ostregion jedoch auf ein verwirrendes Problem, da ihre Service-Dashboard und persönlichen Service-Dashboards keine Informationen empfingen und falsche positives anzeigten. Daher untersuchten viele andere IT-Organisationen die Probleme, da sie nicht die richtigen Informationen erhielten. Überraschenderweise hat AWS den Vorfall vollständig offengelegt, sodass es eine großartige Lernerfahrung ist.

## Lektionen gelernt

Eine der ersten Lektionen ist, dass einfache Eingriffe in die Infrastruktur wie Kapazitätserhöhungen verstanden und geplant werden müssen. Offensichtlich hat AWS die Upgrades nicht einfach spontan vorgenommen, aber sie haben die Auswirkungen nicht vollständig verstanden. Selbst wenn ein Vorgang standardmäßig erscheint, ist es immer eine gute Idee, in einem Testumfeld bis zum Versagen zu laufen, auch wenn es mehr Zeit kostet. Dies ist besonders wichtig bei Diensten, die für andere Kernabhängigkeiten von Bedeutung sind.

Darüber hinaus müssen Service- oder Microservice-Architekturen ihren gesamten Abhängigkeitsbaum verstehen, damit sie bei Störungen Probleme beheben können. Es ist außerdem wichtig, so locker wie möglich an eine Abhängigkeit gekoppelt zu sein und defensives Programmieren in Microservices einzusetzen, um den Dominoeffekt zu vermeiden, der in diesem Fall auftrat.

Ein weiteres Problem, auf das man achten sollte, sind zirkuläre Abhängigkeiten. Wenn in einer Kette von voneinander abhängigen Mikrodiensten einer ausfällt, kann alles zum Stillstand kommen und Ressourcen verbraucht werden, ohne etwas zu erreichen.

Bei der Entwicklung von Mikrodiensten sollten Sie daran denken, dass Sie nicht immer eine Verbindung zu den von Ihnen abhängigen Diensten haben werden. Das Schreiben von Programmen, die im degradierten Zustand ausgeführt werden können oder zumindest anzeigen können, dass ein Dienst nicht funktioniert, kann Zeit und Mühe sparen. Bei diesem Ausfall sollten Sie bedenken, dass die Dashboards grün liefen, obwohl keine neuen Informationen durchkamen.

## Wer hat den Ausfall am besten bewältigt?

Viele Unternehmen waren von dem AWS-Ausfall betroffen, einschließlich einiger, die zu Amazon selbst gehören. Einige flogen fast unversehrt durch den Ausfall, während andere mehr Schwierigkeiten hatten, sich zu erholen. Diejenigen, die schnell reagieren konnten, hatten eine Multi-Hybrid-Cloud-Strategie, so dass sie alternative Clouds als Backup hatten. Einige nutzten eine andere Region von AWS, während andere Google oder Azure verwendeten, und einige führten es sogar zurück zu ihren eigenen Rechenzentren oder externen Websites. Mindestens wurden auf den Websites Nachrichten angezeigt, dass sie derzeit Probleme haben, anstatt eines 404-Fehlers.

Unternehmen, die nicht einige der spezialisierten Dienste von Amazon nutzten, schnitten ebenfalls besser ab. Zum Beispiel waren die EKS- und ECS-Managed-Container-Angebote sowie Lambda stark betroffen und blieben für eine erhebliche Zeitdauer offline, wodurch diejenigen, die von diesen Diensten abhängig waren, keine Alternativen hatten.

Während des Ausfalls funktionierten die automatischen Skalierungsdienste nicht richtig, daher musste jedes Unternehmen, das zu dieser Zeit viel Verkehr hatte, herausfinden, was los war und manuell die Dienste hochskalieren. Dies war ein größeres Problem als gewöhnlich, da es der Tag vor Thanksgiving war, eine Zeit, in der viele Verbraucher verreisen und online einkaufen. Zum Beispiel blieb Etsy online, aber sie konnten nicht so viel skalieren wie normalerweise, was zu einem Rückgang der Verkäufe führte.

Die Unternehmen, die über eine eigene externe Überwachung verfügten, schnitten auch besser ab. Einige benachrichtigten sogar AWS über die Ausfälle. Sie waren nicht nur von dem Gesundheits-Dashboard von AWS abhängig, sondern hatten ihre eigene Überwachung auf ihren Servern laufen.

Welche Hauptlehre sollten wir daraus ziehen? Organisationen sollten ihre Cloud-Ressourcen genauso wie Versorgungsunternehmen übernehmen. Genauso wie man einen Notstromgenerator für die Elektrizität hat, um den Geschäftsbetrieb bei einem Ausfall aufrechtzuerhalten, sollten Unternehmen dieselben bewährten Praktiken für Cloud-Services nutzen. Das bedeutet, dass es für das Überstehen einer Krise wie dem Ausfall von AWS unerlässlich ist, eine Backup-Cloud zu haben, die einen Betrieb auch bei eingeschränkter Kapazität ermöglicht.

## Ressourcen

https://aws.amazon.com/message/11201/ translates to German as: * https://aws.amazon.com/message/11201/

https://www.theverge.com/2020/11/25/21719396/amazon-web-services-aws-outage-down-internet

* Amazon Web Services (AWS) Ausfall beeinträchtigt das Internet

https://www.zdnet.com/article/amazon-heres-what-caused-major-aws-outage-last-week-apologies can be translated to German as follows: 

* https://www.zdnet.com/article/amazon-hier-ist-was-den-großen-aws-ausfall-in-der-letzten-woche-verursacht-hat-entschuldigungen

https://www.wsj.com/articles/amazon-web-services-hit-by-outage-11606326714


Erklärt: Amazon-Ausfall einfach gemacht



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
