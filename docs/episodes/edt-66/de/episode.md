---
layout: posts
title: "Das Verwalten von Komplexität in der Cloud"
number: 66
permalink: episode-EDT66-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 66
tags:
    - data
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - aiven

date: Wed Oct 13 2021 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - David Esposito

img: thumbnail.jpg
image: thumbnail.jpg
summary: "In dieser Folge, Teil 2 von 2, führt Darren sein Gespräch mit David Esposito, Global Solution Architect, von Aiven fort, über die Beschleunigung der Cloud-Adoption bei gleichzeitiger Reduzierung von Komplexität und Kosten."
video: "https://youtu.be/OIIPkoZHKiw"
description: "In dieser Folge, Teil 2 von 2, führt Darren sein Gespräch mit David Esposito, Global Solution Architect, von Aiven fort, über die Beschleunigung der Cloud-Adoption bei gleichzeitiger Reduzierung von Komplexität und Kosten."
---

<div>
{% include transistor.html id="49896b3b" title="#66 Managing Complexity in the Cloud" %}

{% include youtube.html id="OIIPkoZHKiw" %}
</div>

---

## Vereinfachung der Komplexität

Welche Geschäftspraktiken sollten bei der Verwaltung von Cloud-Ressourcen eingeführt werden, um die Komplexität zu verringern? Zunächst einmal müssen Sie über Infrastrukturcode und automatisierte Bereitstellungen verfügen. Alles, was als nächstes passiert, ist ein Gespräch, um festzulegen, welche Risiken für das Unternehmen bestehen, wie zum Beispiel Ausfälle und Ausfallzeiten, wie man diese Risiken mindern kann und wie viel in diese Investitionen gesteckt werden soll.

Für einige Unternehmen ist es entscheidend, die höchstmögliche Betriebszeit zu haben. Im Gesundheitswesen zum Beispiel müssen möglicherweise alle Daten an mehreren Standorten gesichert sein und alle Dienste verfügbar sein, da lebenswichtige Entscheidungen auf diesen Daten basieren könnten. Aber wenn Sie im April im E-Commerce tätig sind, können Sie möglicherweise etwas Zeit in dieser kranken Region verbringen, da die Folgen nicht so gravierend sind.

Im Gesundheitswesen ist es sinnvoll, auf Multi-Cloud umzusteigen, obwohl dies die Komplexität erhöht. Andere Branchen, die von Multi-Cloud profitieren können, sind stark regulierte Bereiche wie Finanzdienstleistungen, Öl und Gas oder Bundesbehörden. Wenn es zu einem Sicherheitsvorfall kommt, können sie eine Cloud ausschalten und an anderer Stelle einsetzen.

Bei der Betrachtung von Multi-Cloud-Lösungen ist zu beachten, dass es bestimmte Komplexitäten aufgrund von Unterschieden in den APIs gibt. Wenn Sie sich in GCP befinden und wissen, wie Sie alles bereitstellen, aber darüber nachdenken, zu AWS zu wechseln, müssen Sie die Plattform und den Bereitstellungsprozess erneut erlernen und möglicherweise sogar einen Teil des Codes neu schreiben. Aus diesem Grund ist die Containerisierung beliebt, da Sie überall bereitstellen können. Es wird jedoch komplexer mit anderen Diensten. Beispielsweise weisen Postgres in AWS im Vergleich zu GCP unterschiedliche Konfigurationen auf, möglicherweise mit unterschiedlichen Patch-Versionen, unterschiedlichen Netzwerkeinstellungen und unterschiedlichen Erweiterungen. Daher sind Dienste in einer Cloud nicht dasselbe wie in einer anderen.

Darüber hinaus sind Containerumgebungen nicht für jede Situation ideal, und eine ideale Situation wird umso wichtiger, je größer das Ausmaß wird. Wenn Sie Kafka verwenden und 1.000 Nachrichten pro Sekunde verarbeiten, ist Ihr eigener Behälter in Ordnung. Aber wenn Sie anfangen, mehr als eine Million Nachrichten pro Sekunde, also ein Gigabyte, zu verarbeiten, ändert sich die Situation.

## Sicherheit

Die Sicherheit in der Cloud ist ein anderes Tier als die Sicherheit in Ihrem eigenen Rechenzentrum. Das Wichtigste, woran man denken muss, ist, dass Daten außerhalb Ihrer eigenen Grenzen übertragen werden. Sie müssen angemessene Sicherheitskontrollen implementieren, um sicherzustellen, dass Daten nicht durchsickern oder unbefugten Zugriff haben, und sicherstellen, dass die Anforderungen zur Einhaltung erfüllt sind. Dies erfordert Training, da die Sicherheitsmaßnahmen für Rechenzentren vor Ort nicht direkt auf die Cloud übertragen werden können. Zum Beispiel sind S3-Container in Ruhe verschlüsselt, jedoch nicht, wenn Sie programmatischen Zugriff über öffentlich zugängliche Buckets haben.

Zusätzlich müssen Sie wissen, was die Dienstleister tun. Zum Beispiel betreibt Aiven Datenbanken auf GPUs EC2, GCP Compute oder Azure. Wenn sie auf die Festplatte speichern, gibt es eine Verschlüsselungsebene, die auf Cloud-Ebene vom Cloud-Anbieter durchgeführt wird, sodass die Daten ruhend verschlüsselt sind. Dann führt Aiven eine weitere Verschlüsselungsebene mit ihren eigenen verwalteten Schlüsseln durch, sodass die Daten ruhend doppelt verschlüsselt sind und alle Daten während der Übertragung verschlüsselt werden. Alles, was zum Server gesendet wird, ist für diesen bestimmten Server verschlüsselt, und wenn ein Server außer Betrieb genommen wird, wird er sowohl mit dem Schlüssel von Aiven als auch mit dem Schlüssel des Cloud-Anbieters gesperrt.

## Aiven

David trat dem Lösungsarchitekturteam von Aiven bei, als er sah, dass das Unternehmen bessere Cloud-Lösungen als alle anderen anbot, basierend auf seiner vorherigen Erfahrung mit verwaltetem Kafka und anderen Open-Source-Technologien. Die Mission von Aiven besteht darin, das Leben von Entwicklern zu verbessern. Sie bieten eine kostenlose Testversion an, mit produktionsfertigem Kafka innerhalb von fünf Minuten. Darüber hinaus verfügen sie über Hilfsartikel und Tutorials, die Sie durch den Prozess führen, sodass Sie innerhalb von zehn Minuten eine Kafka-Nachricht in der Cloud mit cloud-nativen Best Practices senden können.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
