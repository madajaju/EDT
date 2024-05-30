---
layout: posts
title: "Verminderung der Aufnahmeüberlastung mit Intel Optane DCPMM"
number: 16
permalink: episode-EDT16-de
lang: de
nav_exclude: true
nav_order: 16
tags:
    - datamanagement
    - analytics
    - multicloud
    - process
    - technology

date: Mon Aug 24 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "In dieser Episode spricht Darren darüber, wie man den Verzehr von Staus mit Intels Optane DC Persistent-Speicher verringern kann und das Experiment, das er mit überraschenden Ergebnissen durchgeführt hat. Es könnte sich möglicherweise darauf auswirken, wie wir in Zukunft über Programmierung denken."
video: "https://youtu.be/url"
description: "In dieser Episode spricht Darren darüber, wie man den Verzehr von Staus mit Intels Optane DC Persistent-Speicher verringern kann und das Experiment, das er mit überraschenden Ergebnissen durchgeführt hat. Es könnte sich möglicherweise darauf auswirken, wie wir in Zukunft über Programmierung denken."
---

<div>
{% include transistor.html id="7ca179aa" title="#16 Decreasing Ingestion Congestion with Intel Optane DCPMM" %}

{% include youtube.html id="url" %}
</div>

---

## Service-Stapel-Details

Ein Kunde in der Automobilindustrie hatte Schwierigkeiten, effektiv Informationen aus seinen Autos zu gewinnen und in sein Rechenzentrum zu übertragen, um maschinelles Lernen und Analysen durchführen zu können. Es gab bereits Forschung in diesem Bereich, aber nur für eine kleine Anzahl von Autos, nicht für die hundert Millionen Autos des Kunden. Als ich mir den gesamten Service-Stack ansah und wie alles ins Rechenzentrum gelangte, wurde deutlich, dass die Datenübernahme das Hauptproblem war: Wie kann ich so viele Daten aufnehmen und wie kann ich es schnell tun?

## Hoher Überblick über die Kafka-Architektur auf hoher Ebene

Der Kunde wollte Kafka für ihre Datenübernahme verwenden. Kafka ist ein Broker, der gut skalierbar ist, und der Schlüssel dazu ist, dass er mehrere Produzenten, verschiedene Verbraucher und viele Daten verarbeiten kann. Die Verwendung mehrerer Kafka-Broker, um Daten an den geeignetsten Stellen zu platzieren und abzuladen, bietet große Flexibilität.

Kafka hingegen wurde hauptsächlich für Nachrichtengrößen von etwa einem bis zehn Kilobyte konzipiert, während die Kundendaten pro Fahrzeug etwa 240 Kilobyte betrugen. Es gibt zwar Lösungen, aber ich wollte die gesamte 240 Kilobyte-Nachricht in den Kafka-Bus einbringen, um sie nach Bedarf verschieben zu können.

## Leistungsspitzen-Bewährte Methoden

Ich habe mir die Leistungsempfehlungen anderer Personen angesehen, die mit Kafka arbeiten, um herauszufinden, ob ich es für meinen Kunden skalieren kann. Eine Möglichkeit zur Feinabstimmung besteht darin, die Puffergröße zu erhöhen, um die gesamte Nachricht aufnehmen zu können, zusammen mit der Verwaltung der Stapelgröße für optimale Leistung. Eine weitere erfolgreiche Praxis besteht darin, die Logs zu verteilen. Die Flexibilität von Kafka ermöglicht es mir, die Daten in verschiedene Themenbereiche zu platzieren. Ich kann die Themenbereiche in mehrere Partitionen aufteilen, die sich über mehrere Laufwerke erstrecken. Die Frage ist also, auf wie vielen Laufwerken ich die Kafka-Logs verteile. Darüber hinaus möchte ich die schnellstmöglichen Laufwerke haben.

Ein Beispiel, das ich untersucht habe, war LinkedIn. Ihre veröffentlichten Zahlen von vor einem Jahr besagen, dass sie 13 Millionen Nachrichten pro Sekunde verarbeiten können, oder 2,7 Gigabyte pro Sekunde. Sie geben an, dass sie etwa 1.100 Kafka-Broker und mehr als 60 in einem Cluster haben, das ist eine ziemlich große Konfiguration.

## Automobilraum

Wenn ich mir die rohen Zahlen des Kunden anschaue (1,6 Millionen Nachrichten pro Sekunde und 800 Gigabyte pro Sekunde) und sie mit LinkedIn vergleiche, das wahrscheinlich nicht für 240 Kilobyte optimiert ist, komme ich auf 44.000 Broker. Wenn ich es optimiere, könnte ich wahrscheinlich auf 4.400 Broker kommen, was immer noch 240 Cluster sind. Das ist eine riesige Anzahl von Maschinen, also musste ich mir überlegen, wie ich die Dinge schneller machen kann. Mit noch mehr Optimierung könnte ich wahrscheinlich auf 400 bis 500 Broker kommen, aber ich wollte sehen, was noch möglich ist.

## Intel Optane DC Persistent Memory

Ich habe nach unserem Optane Persistent Memory geschaut. Es passt in ein DDR4-Format und sitzt somit direkt am DDR4-Bus. Es gibt Module mit bis zu 512 Gigabyte, sodass ich in einem Zwei-Sockel-Server sechs Terabyte an persistentem Speicher haben kann. Ich wollte eine Möglichkeit finden, diese äußerst zuverlässige Technologie mit großartigen Funktionen wie der integrierten Hardwareverschlüsselung zu nutzen, um mir bei der Lösung dieses Problems zu helfen.

## Unterstützung für eine Vielzahl von Anwendungen

Es gibt zwei Betriebsmodi für diese Optane Memory: der direkte App-Modus und der Speichermodus. Der Speichermodus ist einfach. Es verwendet den persistenten Speicher als normalen RAM, da er günstiger ist als normaler DDR4. Es ist zwar nicht dasselbe wie DDR4, aber es ist nah genug dran, dass man in den meisten Anwendungen keinen Unterschied sieht. Im Direktmodus der App können Sie tatsächlich direkt aus Ihrem Programm in den persistenten Speicher schreiben. Auf diese Weise muss ich Datenstrukturen nicht mehr manuell umwandeln und streamen; ich kann sie einfach in den persistenten Speicher schieben. Ich kann den Direktmodus der App auch als Dateisystem mounten, so dass er auf dem Speicherbus liegt, was viel schneller ist als auf dem IO-Bus. Nun, was kann ich mit diesem Speicher tun?

## Verwendung des Linux-Kernels

Es gibt zwei Hauptwerkzeuge, die mit dem Linux-Kernel verwendet werden können: ndctl und ipmctl. Ndctl ist ein nichtflüchtiger Speichergeräte-Controller, und dann gibt es IPM, den Intel Persistent Memory Controller, mit dem ich diesen persistenten Speicher manipulieren und kontrollieren kann. Ich kann ihn im Memory-Modus oder im App-Direct-Modus einrichten. Ich musste ein bisschen über diese Werkzeuge und wie sie funktionieren lernen.

## Ansatz der Aufnahme

Mein erster Gedanke war, dass, wenn ich Kafka mehr Speicher mit großen Puffergrößen gebe, es viel schneller laufen sollte. Code-Änderungen in der Konfiguration wären unnötig oder minimal. Eine weitere Option bestand darin, Kafka so zu ändern, dass es in persistenten Speicher schreibt, anstatt auf ein Dateisystem zu schreiben, wodurch die Festplatte umgangen wird. Das letzte, worauf ich geachtet habe, war die Erstellung eines persistenten Dateisystems mit persistentem Speicher und dann das Platzieren der Kafka-Logs auf diesem neuen Dateisystem.

Die einfachste der drei Optionen war die erste – mehr Speicher. Ich habe alle meine Aufgaben mit mehr Speicher ausgeführt, aber es gab keine Veränderung in der Leistung. Der Grund dafür ist, dass letztendlich meine Puffer gefüllt wurden und ich auf ein Laufwerk auslagern musste. Letztendlich musste alles in die Kafka-Logs, was mein Engpass war.

Die zweite Option beinhaltet das Umschreiben des Codes und das Warten auf Genehmigungen, also bin ich zur dritten Option übergegangen. Die Ergebnisse dieses Experiments, bei dem ich die Logs auf dieses neue, ultraschnelle Dateisystem gezeigt habe, waren faszinierend. Schauen wir uns den Prozess und die Ergebnisse an.

## Testeinschränkungen

Um Hindernisse für die Leistungstestung zu beseitigen, habe ich das Netzwerk außer Acht gelassen, indem ich meinen Test auf derselben Maschine durchgeführt habe, auf der sich mein Broker befand. Außerdem habe ich zunächst nur Produzenten, dann nur Verbraucher und danach gemischte Tests durchgeführt, um die Unterschiede abschätzen zu können. Mein Ziel war es nicht, eine Gesamtverbesserung der Produktion zu betrachten, sondern herauszufinden, ob dies einen wirklichen Unterschied für einen einzelnen Broker macht.

## Erster Ansatz 50/50

Das erste, was ich gemacht habe, war, die Hälfte meines persistenten Speichers in den App-Direct-Modus zu versetzen und es in ein Dateisystem umzuwandeln. Die andere Hälfte ließ ich als Speicher. Ich habe die Befehle "ndctl" und "ipmctl" verwendet und Namensräume erstellt. Diese Dateisysteme habe ich eingebunden und meinen Test ausgeführt.

## Ändern der Nachrichtengröße

Ich habe die Tests für verschiedene Nachrichtengrößen durchgeführt. Ich habe eine bestimmte Optimierung erwartet, vor allem für 1 Kilobyte. Ich habe festgestellt, dass die Leistung bis zu etwa 10 Produzenten immer besser wurde. Ab dem Zeitpunkt, an dem ich mehr als 10 Produzenten hatte, wurde der Bus gesättigt und es traten einige Schwankungen auf. Das sagt mir, dass ich etwas zwischengespeichert habe. Ich kann nun diese Zahlen mit dem vergleichen, was ich zuvor nur auf einer SATA-Festplatte für die Kafka-Protokolle getestet habe. Ich habe auch unsere Optane-NVMe-Laufwerke für die Protokolle ausprobiert.

## Technologievergleich

Lassen Sie uns einen Blick auf die Unterschiede werfen. Bei 240 Kilobyte ist es mit einer normalen SATA-Festplatte ziemlich flach. Ich habe eine Verbesserung festgestellt, und dann nahm sie ab, als die Anzahl der Produzenten zunahm. Mit der Optane NVMe-Festplatte habe ich einen schönen Höhepunkt erreicht, fast doppelt so schnell wie eine SATA-Festplatte, was ich erwartet habe, denn es handelt sich um einen NVMe-Bus anstelle eines SATA-Busses. Der Pmem ist fast fünfmal schneller als eine SATA-Festplatte und zweieinhalbmal schneller als die Optane NVMe-Festplatte. Das liegt daran, dass ich einen Speicherbus anstelle des SATA- oder NVMe-Busses verwende.

## Zusätzliche Optimierung (100% App Direkt)

Dies lief schnell und ich habe diesen temporären 750 GB-Laufwerk schnell gefüllt. Da ich den Test noch ein wenig länger durchführen musste, bin ich zurückgegangen und habe meine Maschine so umkonfiguriert, dass sie den 100-prozentigen Direktanwendungsmodus verwendet, um jetzt die gesamten 1,5 Terabyte nutzen zu können.

## Optimiertes PMEM und 100% App Direct.

Nachdem ich dies getan habe und dieselben Tests durchgeführt habe, habe ich ein überraschendes Ergebnis erhalten. Ich konnte mehr Produzenten hinzufügen, und meine Durchsatzrate stieg um fast das Zwei- oder Dreifache. Nun ist sie zwischen 12 und 15 Mal schneller als eine SATA-Festplatte mit 25-30 Produzenten und einer Nachrichtengröße von 240 Kilobytes. Das ist unglaublich und würde den Bedarf meiner Kunden an so vielen Brokern, Reihen und Reihen von Maschinen erheblich reduzieren. Ich habe den Test mehrmals durchgeführt, weil ich den Ergebnissen nicht glauben wollte. Ich habe einen unserer Architekten, der diese Technologie entworfen hat, angerufen und gelernt, dass einer der Gründe für die erhöhte Geschwindigkeit darin liegt, dass bei der Verwendung eines Teils des persistenten Speichers als Arbeitsspeicher die Daten durch zwei oder drei Hops gehen mussten, die im App-Direct-Modus nicht erforderlich sind. Dadurch wird die Konfliktmenge auf der Speicherleitung verringert, und die Durchsatzrate stieg dramatisch an.

## Aufruf zur Aktion

Das Endergebnis ist, dass ich in der Lage war, Kafka mit Optane DC Persistent Memory als ultraschnelles Dateisystem zu verwenden, um erhebliche Verbesserungen der Durchsatzrate sowohl bei Produzenten als auch bei Konsumenten zu erzielen. Ein einzelner Broker kann jetzt 15-mal mehr Nachrichten und Durchsatz verarbeiten als zuvor, wodurch die Anzahl der für komplexe Systemarchitekturen benötigten Server verringert wird. Es ist an der Zeit, Ihre aktuelle Architektur zu überprüfen und zu sehen, ob dies Ihrem Unternehmen zugutekommen würde.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
