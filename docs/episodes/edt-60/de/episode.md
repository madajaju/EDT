---
layout: posts
title: "Risikomanagement bei Ransomware"
number: 60
permalink: episode-EDT60-de
lang: de
nav_exclude: true
nav_order: 60
tags:
    - cybersecurity
    - ransomware
    - datalifecyclemanagement
    - databreaches
    - zerotrust
    - datasecurity

date: 2021-08-05T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "In dieser Episode, Teil eins von zwei, diskutiert Darren Sicherheitstrends mit seinem häufigen Gast Steve Orrin, CTO von Intel, Federal. Im vergangenen Jahr gab es einen Anstieg der Anzahl und der Raffinesse von Cyberangriffen. Die drei wichtigsten Bereiche wiederkehrender Angriffe sind Ransomware, Angriffe auf die Lieferkette und Datenlecks."
video: "https://youtu.be/url"
description: "In dieser Episode, Teil eins von zwei, diskutiert Darren Sicherheitstrends mit seinem häufigen Gast Steve Orrin, CTO von Intel, Federal. Im vergangenen Jahr gab es einen Anstieg der Anzahl und der Raffinesse von Cyberangriffen. Die drei wichtigsten Bereiche wiederkehrender Angriffe sind Ransomware, Angriffe auf die Lieferkette und Datenlecks."
---

<div>
{% include transistor.html id="8b0a716a" title="#60 Managing Risk in the Face of Ransomware" %}

{% include youtube.html id="url" %}
</div>

---

Im vergangenen Jahr gab es einen Anstieg der Anzahl und Raffinesse von Cyberangriffen. Die drei Hauptbereiche wiederkehrender Angriffe sind Erpressungssoftware, Angriffe auf die Lieferkette und Datenlecks.

Die Angriffe sind aus mehreren Gründen immer ausgefeilter geworden. Erstens müssen die Angreifer besser werden, da die Sicherheit verbessert wird. Organisierte Kriminalität, Staatsakteure und andere Bedrohungsagenten erkennen, dass es mehr Raffinesse erfordert, um Sicherheitskontrollen zu umgehen und zu vereiteln. Genauso wie Unternehmen Softwareentwicklungslebenszyklusprozesse haben, hat auch die Malware-Gemeinschaft solche. Sie verfügen über Werkzeuge und Frameworks, aus denen sie bauen, sowie gute Verfahren, um Qualität in ihre Systeme einzubringen. Unterschiedliche Akteure kaufen, verkaufen und leihen Code aus. Sie lernen voneinander und teilen Informationen im Darknet. Sie sind nicht nur zusammengewürfelte Hacker-Teams, sondern agieren eher wie Unternehmen.

Diese Bedrohungsakteure operieren in einer milliardenschweren Industrie. Großes Geld treibt die Notwendigkeit nach Reife an. Wir können Sicherheit nicht mehr einfach nur anhängen; sie muss integriert werden und zwar überall, nicht nur in den Produkten, sondern auch in der Infrastruktur und den Prozessen. Das war eine der Lehren aus SolarWinds: Selbst wenn man ein gutes Produkt entwickelt, kann die unterstützende Infrastruktur anfällig sein.

Aktuelle Angriffe zeigen, dass niemand immun ist. Oftmals nehmen Organisationen fälschlicherweise an, dass sie sicher sind, da sie keine Finanzdienstleistungsunternehmen, Regierungen oder andere hochwertige Industrien sind. Jedoch haben die jüngsten Angriffe auf Unternehmen wie JBS Foods, McDonald's und Audi gezeigt, dass niemand immun ist. Unternehmen, unabhängig von ihrem Produkt, sind auf ihre digitale Infrastruktur angewiesen, um funktionsfähig zu sein. Der Angriff auf JBS Foods legte die weltweit größte Fleischverarbeitungsindustrie lahm.

Keine einzelne Sache dient als Heilmittel, um diese Angriffe zu verhindern. Es gibt Hoffnung, aber es erfordert viel Arbeit. Eine Organisation muss den Fleiß haben, die richtigen Risikokennzahlen anzuwenden, um Sicherheit korrekt zu implementieren. Wenn du dein Risiko nicht verstehst, werden keine Sicherheitskontrollen funktionieren, weil du nicht weißt, ob du sie an der richtigen Stelle anwendest.

Der Schlüssel besteht darin, mit dem richtigen Satz an Richtlinien und Risiken für Ihre Organisation zu beginnen. Ein grundlegender Schritt besteht darin, dass selbst wenn Ihre Organisation noch nicht vollständig herausgefunden hat, wie eine "Zero-Trust-Architektur" implementiert werden kann, das Leugnen aller Zugriffsanfragen, bis ihre Berechtigung nachgewiesen ist, in die richtige Richtung geht. Das bedeutet, dass es an jeder Tür eine Schranke gibt, anstatt einen Generalschlüssel für alles im Inneren. Die Standardeinstellung für Ablehnung ist ein Grundsatz des "Zero Trust"-Ansatzes.

Wenn die Stärke eines Unternehmens nicht in der Cybersicherheit liegt oder die finanziellen Mittel für ein ausreichendes internes Team nicht verfügbar sind, gibt es viele Ressourcen, die helfen können. Ein gemanagter Sicherheitsdienstleister (Managed Security Provider, MSP) ist eine gute Option, aber es sollte immer mindestens ein Experte im Inneren geben: ein Chief Security Officer. Diese Person hat den lokalen Kontext der Domänen-Erfahrung, um mit dem MSP zusammenzuarbeiten und dieses Wissen in der gesamten Organisation zu verbreiten. Der MSP verwaltet Ihre Sicherheitswerkzeuge und Konfigurationen, aber Sie benötigen jemanden, der Sicherheitswissen an Geschäfts- und IT-Einheiten vermittelt. Angesichts der jüngsten Angriffe ist ein Sicherheitsteam keine Option.

Jedes Unternehmen sollte einen Plan für einen Ransomware-Angriff haben. Wenn es bereits geschehen ist, ist nicht die Zeit, um es herauszufinden. Eine Grundlage ist, regelmäßig Daten zu sichern. Bewahren Sie makellose Kopien der Daten, Systeme, Anwendungen und Konfigurationen in einer offline, out-of-band Speicherumgebung auf. Sechs Monate saubere Backup-Daten sind wichtig, weil sich manchmal Ransomware in den Backups befinden kann, bevor sie entdeckt wird. Stellen Sie außerdem sicher, dass die Plattformen oder Server, die Sie für Ihre Datenbank benötigen, offline verfügbar sind, damit Sie sie in einem Ausfall- oder Redundanzmodell aktivieren können.

Dies ist im Grunde genommen das Geschäftskontinuitätsplanung. Genau wie eine Organisation einen Plan für die Fortsetzung im Falle einer physischen Katastrophe wie einer Überschwemmung oder eines Stromausfalls haben würde, sollte es auch einen Plan geben, um weiterhin mit wichtigen Firmenanwendungen teilweise wieder aufzunehmen, während das Problem gelöst wird.

Ein Schritt, um diese Redundanz zu erreichen, besteht darin, bei Bedarf in die Cloud auszubrechen und Cloud-Ressourcen in einem makellosen Zustand zu halten, möglicherweise sogar bei einem anderen Cloud-Service-Anbieter. Ein weiterer Schritt besteht darin, einen Kanarienvogel im Bergwerk zu haben. Das bedeutet, Systeme in der gesamten Unternehmenslandschaft bereitzustellen, die Sensoren auf höchster Stufe haben. Um Leistungs-, Speicher- und Geschwindigkeitsprobleme zu vermeiden, können sie strategisch an bestimmten Stellen eingesetzt werden, anstatt systemweit, um als Frühwarnungen zu dienen.

Das Erstellen eines Plans im Voraus wird auch bei der Herausforderung helfen, was in einer Krisensituation zu tun ist, ob Sie das Lösegeld bezahlen oder das FBI kontaktieren. Der Plan sollte schriftlich festgehalten sein und nicht nur Ihre Techniker, sondern auch Ihre Anwälte, CEO, CFO usw. einbeziehen, und jeder sollte Zugang dazu haben. Sie sollten wissen, wie man Bitcoin kauft, und Sie sollten die Nummer der örtlichen FBI-Büros und andere Informationen haben. Führen Sie den Plan als Übung durch, um zu sehen, ob er genauso funktioniert wie ein Notfallwiederherstellungs- oder Geschäftskontinuitätsplan.

Einige Branchen mögen denken, dass sie sicher sind, wenn sie ihre operationelle Technologie (OT) und ihre informatielle Technologie (IT) getrennt halten, aber sie sind tatsächlich nicht völlig getrennt. Zum Beispiel könnte eine Produktionslinie auf Computermaschinen laufen, aber ein Großteil der Versorgungskette, Logistik und der gesamten Organisation basieren auf IT-Systemen. Wenn diese Systeme ausfallen, kommt nichts rein oder raus. IT-Systeme sind geschäftskritisch und aus den jüngsten Angriffen lernen wir, dass wir von digitaler Technologie für all unsere Unternehmen abhängig sind.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
