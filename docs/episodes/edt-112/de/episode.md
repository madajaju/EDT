---
layout: posts
title: "Mythen der Lift-and-Shift-Cloud-Migration"
number: 112
permalink: episode-EDT112-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 112
tags:
    - multicloud
    - cloudmigration
    - cloud
    - compute
    - process
    - technology

date: Mon Nov 14 2022 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - John Evans

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, und John Evans, Chief Technology Advisor, WWT, diskutieren fünf Mythen zur Cloud-Migration durch Lift and Shift."
video: "https://youtu.be/7pQKyV45ay4"
description: "Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, und John Evans, Chief Technology Advisor, WWT, diskutieren fünf Mythen zur Cloud-Migration durch Lift and Shift."
---

<div>
{% include transistor.html id="cfd34037" title="#112 Myths of Lift and Shift Cloud Migration" %}

{% include youtube.html id="7pQKyV45ay4" %}
</div>

---

John begann vor 20 Jahren seine Karriere in der Technologieabteilung des Helpdesks eines führenden Verteidigungsunternehmens. Im Laufe seiner Karriere spezialisierte er sich auf Cybersicherheit und Unternehmensarchitektur. Er arbeitete als Vertragspartner für die Defense Information Systems Agency (DISA), wo er als Hauptarchitekt für die DISA-Cloud des Verteidigungsministeriums tätig war. Schließlich wurde er vom Bundesstaat Maryland engagiert, um die Bemühungen zur digitalen Transformation des Staates zu leiten, einschließlich Cloud-Migration. Diese Migration war die bislang größte, die im Bereich des staatlichen und kommunalen Bildungswesens durchgeführt wurde.

Danach wechselte er in die Position des Chief Information Security Officers (CISO) des Staates, wo er oberste Tätigkeiten, Sicherheit und Regierungsaufsicht überwachte. Er verließ den Regierungsdienst und trat vor etwa drei Jahren WWT bei. Hauptsächlich arbeitet er im Bereich Bildung auf staatlicher und lokaler Ebene, obwohl er auch in anderen Bereichen des öffentlichen Sektors hilft.

## Mythos Eins - Die Cloud ist billiger.

Die Cloud ist nicht zwangsläufig günstiger als eine lokal betriebene Umgebung. Alte Anwendungen wurden für die lokale Umgebung entwickelt, daher gibt es keine Probleme mit der automatischen Skalierung. Es handelt sich um ein verbrauchsabhängiges Modell und es fallen bereits angesunkene Kosten an, wie zum Beispiel die Server. Die meisten Produkte, die Organisationen bei der Umstellung von Anwendungen in die Cloud helfen sollen, unterstützen keine automatische Skalierung. Wenn sie also zur Nutzung in der Cloud gezwungen werden, müssen sie immer mit maximaler Kapazität bereitgestellt werden, was häufig nicht zu Kosteneinsparungen führt. Kunden zahlen wahrscheinlich mehr als zuvor für die gleichen Möglichkeiten in einer lokal betriebenen Umgebung.

Als Darren mit der kanadischen Regierung arbeitete, haben sie eine SAP-Instanz in die Cloud verschoben. Diese war maximal bereitgestellt und lief rund um die Uhr, daher haben sie ihr Budget innerhalb von nur sechs Monaten überschritten. Als sie dieses Problem entdeckten, haben sie die Instanz jeden Tag ein- und ausgeschaltet, da sie nicht rund um die Uhr laufen musste. Dadurch konnten sie viel Geld sparen, indem sie sie auf 14-16 Stunden pro Tag reduzierten.

Der Zugang muss jederzeit in einer Abteilung wie dem Gesundheitsministerium oder dem Ministerium für Soziales und Menschenrechte gewährleistet sein, da dies in der Regel der größte Posten im IT-Budgetstaat ist. Es ist jedoch möglich, ihn während der Nebenzeiten auf ein Mindestmaß zu reduzieren, um Kosten zu sparen.

Die Cloud-Service-Anbieter (CSP) bieten jetzt cloud-native Dienste an, die von einer Anwendung eines Drittanbieters oder einem OEM-Produkt erfüllt werden können, das eine ähnliche Funktionalität mit Kosteneinsparungen bietet. Das funktioniert jedoch nicht bei allem, da einige ältere Anwendungen nicht für den Einsatz der cloud-native Anwendungen entwickelt wurden. Es wäre am besten, vorsichtig zu sein, sich an eine spezifische Cloud zu binden. Wenn Sie zum Beispiel proprietäre AWS-Dienste nutzen, könnte es herausfordernd sein, eine Anwendung zu lösen und zu Azure zu wechseln oder umgekehrt.

John rät Organisationen, sich zu fragen, ob es sinnvoll ist, in die Cloud zu wechseln. Es ist kein guter Grund, in die Cloud umzuziehen, nur weil man denkt, dass man es tun sollte. Sie könnten am Ende höhere Kosten und frustrierte Vorgesetzte und Mitarbeiter haben, weil die Strategie nicht gründlich durchdacht wurde.

## Mythos Zwei - Die Cloud löscht technische Schulden.

Der Umzug in die Cloud beseitigt in den meisten Fällen die technische Schuldenlast nicht. Stattdessen macht er die Schulden sichtbar und beschleunigt sie. Wenn man etwas, das seit 30 Jahren läuft, in eine neue Umgebung verschiebt, findet man Anfälligkeiten. Der beschleunigende Teil besteht darin, dass man sich jetzt um noch mehr technische Schulden sorgen muss, da sie sichtbar geworden sind.

Technische Schulden bedeuten, dass Sie Systeme haben, die nicht mehr auf dem neuesten Stand sind. Zum Beispiel liefen einige Systeme noch auf grünen Bildschirmen, als John zum ersten Mal bei Maryland anfing zu arbeiten. Es war für aktuelle Mitarbeiter einfach zu bedienen, aber für neue Benutzer gab es eine steile Lernkurve. Obwohl das System seit vielen Jahren gut funktioniert hatte, besteht der Nachteil dieser technischen Schulden darin, dass eine umfangreiche Schulung erforderlich ist und Mitarbeiter gehalten werden müssen. Neuere Generationen, die in die Arbeitswelt eintreten und über Kenntnisse über die neuesten Trends und Entwicklungen verfügen, möchten sich nicht mit älteren Anwendungen befassen.

Technische Verschuldung bedeutet auch Sicherheitsprobleme. Wenn eine veraltete Anwendung nicht aktualisiert wurde, kann es sein, dass Sie aus Angst vor einer Beschädigung keine Patches anwenden können. Dadurch entstehen Sicherheitslücken, die Sie akzeptieren müssen, bis Sie aus dem Zyklus der technischen Verschuldung herauskommen.

Eine häufige Reaktion in einer Organisation besteht darin, bei Bedarf einen zusätzlichen Code anzufügen, um beispielsweise eine Regeländerung einer Landesgesetzgebung zu ermöglichen. Dies löst jedoch kein Problem; stattdessen führt das System zu einer Menge unübersichtlichen Codes, was eine Aktualisierung des Systems unmöglich macht. Eines der Konzepte in der Cloud besteht darin, das System in Module oder Mikrodienste aufzuteilen. Der unübersichtliche Code erlaubt dies jedoch nicht, da man nicht einfach einen Teil davon herausnehmen kann.

Dies führt dazu, dass Organisationen noch zögerlicher sind, sich zu modernisieren, denn sie haben jahrelang alles auf die falsche Art und Weise gemacht. Wenn dann etwas kaputtgeht und den Anstoß für diese Veränderung liefert, stellt dies eine noch größere Herausforderung dar.

Manchmal kann es sinnvoll sein, das alte System zu verwerfen und ganz von vorne anzufangen. Dies ist jedoch kostspielig und man muss über das neue System verfügen, bevor man das alte abschafft. Für einige Organisationen, wie zum Beispiel Staaten, die Bundesmittel für Abteilungen wie Gesundheit und Soziale Dienste erhalten können, könnte dies die beste Wahl sein. In einer solchen Situation kann man auch den Nutzen der Wiederverwendbarkeit, wie Vorlagen und Verwaltungsstrukturen für andere Abteilungen, herausfinden.

## Mythos Drei - Die Cloud ist sicher.

Der Umzug in die Cloud macht es nicht unbedingt einfacher, Anwendungen zu sichern, obwohl Sie sich beispielsweise keine Sorgen um physische Sicherheit oder Hypervisoren machen müssen. Cloud-Anbieter haben ein gemeinsames Verantwortungsmodell in verschiedenen Formen. Sie müssen verstehen, wofür Sie bei jedem Anbieter verantwortlich sind und wofür sie verantwortlich sind. Dies ändert sich nicht nur bei dem Anbieter, sondern auch bei den von Ihnen genutzten Diensten. Dies kann für Ihre Sicherheitsteams die Sicherheit komplexer machen, da sie auf dem neuesten Stand aller verschiedenen Variationen bei Anbietern und Diensten bleiben müssen.

## Mythos Vier - Die Cloud ist einfach

Die Migration in die Cloud ist komplex. Tatsächlich ist es einfacher, alles in Ihrem eigenen Rechenzentrum ohne Internetverbindung zu betreiben. Die Sicherheit ist auf diese Weise einfach, und die Kostenmodelle sind einfach. Allerdings kann man nicht expandieren. Man kann keine Dienstleistungen für seine Kunden oder Partner bereitstellen, und man kann die Zielvorgaben nicht erfüllen, unter anderem aus anderen Gründen. Die Welt ist komplex, und die Migration in die Cloud ist kompliziert.

## Mythos Fünf - Ein neues Fähigkeitsspektrum ist nicht notwendig.

Eine Wissenslücke kann auch zu den Schmerzpunkten rund um diese Komplexität beitragen. Softwareentwickler und andere IT-Spezialisten müssen ihr Denken über das Cloud-Computing ändern, insbesondere im Hinblick auf die Sicherheit. Zum Beispiel sollten Softwareentwickler keine Instanzen in der Cloud erstellen, wo immer sie möchten, oder Dinge von GitHub oder anderen Repositories herunterladen, um Bibliotheken zu nutzen, um Dinge zum Laufen zu bringen. Dadurch werden alle Firewall-Regeln geöffnet, da sie möglicherweise nicht korrekt ausgewählt werden. Richtlinien müssen implementiert werden, wenn man in die Cloud wechselt, was Veränderungen erfordert. Das Arbeiten in der Cloud erfordert eine andere Skill-Set und Denkweise. Am wichtigsten ist es, bessere Möglichkeiten zur Verwaltung der Sicherheit vor anspruchsvoller Ransomware und Cyberangriffen herauszufinden.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
