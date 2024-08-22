---
layout: posts
title: "DevOps mit Geschwindigkeit unter Reduzierung von Risiken"
number: 53
permalink: episode-EDT53-de
lang: de
nav_exclude: true
nav_order: 53
tags:
    - auditability
    - automation
    - compliance
    - zerotrust
    - cybersecurity
    - process
    - technology
    - policy

date: 2021-06-15T00:00:00.000Z
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "In dieser Folge spricht Robert Boule, Head of Solution Engineering bei OpsMx, mit Darren darüber, wie man die Geschwindigkeit im DevOps-Prozess verbessern kann, ohne das Risiko zu erhöhen. Die drei Schlüsselbereiche zur Balance in der Softwarebereitstellung sind Geschwindigkeit, Risiko und Qualität. Die meisten können ein oder zwei dieser Dinge managen, aber das Hinzufügen des Dritten kann schwierig werden. Zum Beispiel können Sie möglicherweise aufgrund Ihres großartigen CD-Systems mit Geschwindigkeit liefern, aber sobald Sie Compliance- und Policy-Checks einführen, stehen Sie vor einer Herausforderung. Sollen Sie anhalten und diese Dinge überprüfen oder vielleicht einige Ergebnisse von einem anderen Tool einbeziehen? Plötzlich leidet Ihre Geschwindigkeit."
video: "https://youtu.be/url"
description: "In dieser Folge spricht Robert Boule, Head of Solution Engineering bei OpsMx, mit Darren darüber, wie man die Geschwindigkeit im DevOps-Prozess verbessern kann, ohne das Risiko zu erhöhen. Die drei Schlüsselbereiche zur Balance in der Softwarebereitstellung sind Geschwindigkeit, Risiko und Qualität. Die meisten können ein oder zwei dieser Dinge managen, aber das Hinzufügen des Dritten kann schwierig werden. Zum Beispiel können Sie möglicherweise aufgrund Ihres großartigen CD-Systems mit Geschwindigkeit liefern, aber sobald Sie Compliance- und Policy-Checks einführen, stehen Sie vor einer Herausforderung. Sollen Sie anhalten und diese Dinge überprüfen oder vielleicht einige Ergebnisse von einem anderen Tool einbeziehen? Plötzlich leidet Ihre Geschwindigkeit."
---

<div>
{% include transistor.html id="9eb5fd35" title="#53 DevOps with Speed While Reducing Risk" %}

{% include youtube.html id="url" %}
</div>

---

Die drei wichtigsten Bereiche, die beim Software-Lieferprozess im Gleichgewicht gehalten werden müssen, sind Geschwindigkeit, Risiko und Qualität. Die meisten können ein oder zwei dieser Dinge bewältigen, aber das Hinzufügen des Dritten kann schwierig werden. Zum Beispiel können Sie möglicherweise aufgrund eines großartigen CD-Systems mit hoher Geschwindigkeit liefern, aber sobald Sie Compliance- und Richtlinienprüfungen einführen, stehen Sie vor einer Herausforderung. Sollten Sie anhalten und diese Dinge überprüfen oder vielleicht einige Ergebnisse von einem anderen Tool einbinden? Plötzlich leidet Ihre Geschwindigkeit.

OpsMx arbeitet daran, Menschen dabei zu helfen, diese Entscheidungspunkte zu automatisieren. Automatisierung ist das Wichtigste, um die Geschwindigkeit zu erhöhen, während die anderen beiden Säulen, Risiko und Qualität, verbessert werden.

## OpsMx Lösung: Vollautomatische Softwareauslieferung

Die Automatisierung funktioniert als Datenaggregation, indem sie Ergebnisse aus den verschiedenen Tools in der Tool-Kette abruft und dann einen Mechanismus wie einen Policy-Manager hat, der erwartete Ergebnisse auf Kontrollkästchen von Tools wie BlackDuck liefert. Wenn es richtig aussieht, stoppt der Prozess nicht wie derzeit für einen menschlichen Check.

## Schnellere Anwendungsbereitstellung erhöht die Ausfallraten.

Die Geschwindigkeit der Anwendungsbereitstellung hat sich von wöchentlich oder monatlich auf stündlich erhöht, was den Druck zur schnellen Produktion verstärkt. Wenn Sie jedoch versuchen, die Geschwindigkeit zu erhöhen, könnten Sie möglicherweise etwas Kontrolle über die Qualität verlieren und möglicherweise einige Risikoprüfungen überspringen. Das Endergebnis ist, dass je schneller Sie versuchen, voranzukommen, desto eher kann es zu einem Ausfall kommen.

## Reibungspunkte und Problemräume

Mit strategischer Nutzung von Automatisierung haben Sie die Fähigkeit, die Geschwindigkeit zu erhöhen, ohne Risiken einzugehen. Durch kontinuierliche Überprüfung kann ein dreistündiger oder vierstündiger Prozess auf fünf oder zehn Sekunden verkürzt werden. Anstatt menschliche Arbeitskraft zu nutzen, um Protokolle nach abweichendem Verhalten zu durchsuchen, das möglicherweise ein binäres Bestehen/Nicht-Bestehen übergeben hat, kann die kontinuierliche Überprüfung dies automatisch tun und Menschen nur in Ausnahmefällen eingreifen lassen.

## Was bedeutet Automatisierung in diesem Zusammenhang?

Das nächste Stück verwendet die von dem Sicherheits- und Compliance-Team geforderten Werkzeuge, wie zum Beispiel BlackDuck. Durch die Automatisierung muss der Pipeline nicht gestoppt werden, um die Ergebnisse von jemandem interpretieren zu lassen, da dies automatisch geschieht.

Die anderen Teile stellen eine Politik auf einer höheren Ebene dar, wenn Sie in einer regulierten Branche mit mehr Kontrollen tätig sind oder etwas so Einfaches wie ein Einzelhändler, der zum Beispiel keine neue Software zwei Wochen vor Weihnachten veröffentlichen möchte. Diese Kontrollen können automatisiert werden, um die Notwendigkeit einer menschlichen Genehmigung zu beseitigen und den Ablauf fortzusetzen, sofern es keine Ausnahmen gibt. Die Idee besteht darin, so viele menschliche Barrieren wie möglich zu entfernen, um den Ablauf zu ermöglichen.

Der Hauptkomplex von Steuer- und Richtlinienautomatisierung ist wiederverwendbar für verschiedene Pipelines; Sie müssen nur solche anpassen oder erstellen, die für Ihre Freigabezyklen spezifische Kriterien erfüllen.

## OpsMx Lösung: Vollautomatische Software-Lieferung

OpsMx ermöglicht Ihnen die Möglichkeit, diese Pipelines zu erstellen und die Automatisierung der Log-Analyse durchzuführen. Spinnaker ist das derzeitige Werkzeug, aber OpsMx hat die Vision, so ​​cd-agnostisch wie möglich zu sein und die Verwendung aller cd-Tools wie Jenkins und Microsoft Azure zu ermöglichen. OpsMx nutzt den cd-Teil für die Automatisierung, sitzt jedoch darüber, um bei automatisierten Entscheidungen zu helfen.

Ein wachsender Teil des Tools besteht aus maschinellem Lernen, um zu helfen, zu verstehen, was die Basislinie für eine bestimmte Anwendung im Vergleich zu einem anomalen Verhalten ist. Es gibt auch ein überwachtes Lernmodell, bei dem ein DevOps-Experte, ein Ingenieur oder ein Produktbesitzer das anomale Verhalten im Kontext der Anwendung spezifizieren kann.

Das System ermöglicht auch Prüfbarkeit. Jede Änderung oder Ausnahme wird dokumentiert. Es gibt eine vollständige Audit-Spur von allem, was passiert, von der Genehmigung einer Ausnahme durch wen bis hin zu welchem Artefakt bereitgestellt wurde und welches Basisbild verwendet wurde. Ob es in der Cloud oder vor Ort ausgeführt wird, können Sie die gesamte Pipeline als eine Einheit sehen.

Ein weiterer Aspekt der von OpsMx bereitgestellten Sichtbarkeit ist eine Art Karte, die zeigt, was wo bereitgestellt ist, wie zum Beispiel die Reihe von Microservices, die derzeit in der QA sind, was sich in bestimmten Phasen befindet oder was sich in der Produktion befindet. Für jede dieser Dinge können Sie dann genauer nachschauen und eine historische Ansicht erhalten. Sie können auf eine beliebige Freigabe klicken und alle Audit-Informationen sind sofort verfügbar.

Darüber hinaus arbeitet OpsMx auch an der Effektivität der erfassten Artefakte, um sicherzustellen, dass die Lieferkette oder Linie transparent ist.

OpsMx verwendet jetzt eine agentenbasierte Technologie, die mit Ressourcen interagieren kann, die beispielsweise hinter Ihrer Firewall sitzen. Der Agent fungiert als Proxy für die Intelligenzschicht, damit Daten dort gesammelt werden können. Es gibt keine Sorgen darüber, Firewall-Ports zu öffnen oder freizulegen. Es funktioniert auf die gleiche Weise mit Cloud-Anbietern: Der Agent kann innerhalb des VPC bereitgestellt werden, und Sie müssen keine Schlüssel und geheimen Informationen mehr in einer Cloud-basierten Anwendung riskieren. Der Agent fungiert einfach als Proxy, sodass das autorisierte Stück immer innerhalb des VPC bleibt und die Art und Weise, wie Informationen gesammelt werden, sichert.

Mit dieser neuen Ausrichtung steht die DevOps-Branche insgesamt vor einer Erschütterung in Bezug auf Sicherheit und Nachvollziehbarkeit.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
