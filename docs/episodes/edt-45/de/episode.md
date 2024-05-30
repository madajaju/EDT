---
layout: posts
title: "Nicht alle Kerne sind gleich."
number: 45
permalink: episode-EDT45-de
lang: de
nav_exclude: true
nav_order: 45
tags:
    - datamanagement
    - multicloud
    - cybersecurity
    - people
    - process
    - technology

date: Tue Mar 30 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steven Holt

img: thumbnail.png
image: thumbnail.png
summary: "In dieser Episode diskutieren Darren Pulsipher, Chief Solution Architect bei Intel, und Stephen Holt, Cloud Solution Architect bei Intel, Cloud-Optimierung und Studien, die zeigen, dass Kerne unterschiedlich für verschiedene Arbeitslasten arbeiten."
video: "https://youtu.be/url"
description: "In dieser Episode diskutieren Darren Pulsipher, Chief Solution Architect bei Intel, und Stephen Holt, Cloud Solution Architect bei Intel, Cloud-Optimierung und Studien, die zeigen, dass Kerne unterschiedlich für verschiedene Arbeitslasten arbeiten."
---

<div>
{% include transistor.html id="cd1f0343" title="#45 Not All Cores are Equal" %}

{% include youtube.html id="url" %}
</div>

---

Intel hat Cloud-Lösungsarchitekten eingestellt, um Kunden dabei zu unterstützen, intelligent zu den richtigen Cloud-Instanzen für ihre Workloads zu wechseln. Stephen ist kürzlich bei Intel eingestiegen und verfügt über eine lange Erfahrung in Datenbanken im Allgemeinen, wobei er sich in den letzten sieben oder acht Jahren auf die Cloud konzentriert hat und deren Ressourcen zum Vorteil der Kunden nutzt.

Einige der schwierigsten Aspekte, mit denen Stephen bei der Unterstützung von Kunden beim Umzug in die Cloud konfrontiert war, sind die Preisgestaltung und die Erwartungen an den Umzug. Cloud-Service-Anbieter behaupten oft, dass Kunden Geld sparen werden, indem sie in die Cloud wechseln, aber das ist oft nicht der Fall.

Ein Grund dafür liegt darin, dass es ständige Veränderungen in den Merkmalen, Funktionen und Fähigkeiten des wettbewerbsintensiven Marktes der Cloud-Service-Provider gibt. Ein weiterer Grund ist Unwissenheit, zum Beispiel die Annahme, dass ein Kern-VCP überall gleich ist. Eine Migration mit einer "Lift and Shift" Denkweise kann auch sehr teuer sein. Optimierung ist der Schlüssel für eine intelligente Cloud-Migration.

Um Kosten zu senken und potenziell viel Geld zu sparen, müssen Sie die richtigen Instanzen für die richtigen Leistungen auswählen. Nicht alle Kerne oder virtuellen CPUs sind gleich. Innerhalb von AWS gibt es den M4, Intels Broadwell, und den M5, der eine Mischung aus Cascade Lake und Skylake ist. Unterschiedliche Arbeitslasten können diese Plattformen sehr unterschiedlich nutzen.

## Leistungsstärke von CoreMark

CoreMark ist eine Anwendung mit einem einzigen Thread, die Registerbewegungen und einfache Additionen für beliebige Anzahl von CPUs testet. Über drei Generationen von Intel-Prozessoren, nämlich Broadwell, Skylake und Cascade Lake, zeigt dieser Test nur sehr geringe Unterschiede zwischen ihnen. Diese Informationen wurden irrtümlicherweise zur Unterstützung von Kundenentscheidungen verwendet, da der Test keine effektive Methode darstellt, um die Unterschiede in den Prozessen selbst zu messen. Es können erhebliche Unterschiede in der Leistungsfähigkeit bei unterschiedlichen Arbeitslasten auftreten.

## Datenbank WL-Leistung

Stephen führte digitale Tests an realen Arbeitslasten durch, die sich auf Open-Source-Datenbanken konzentrierten. Die Cascade Lake-Umgebung war für Open-Source drei Mal besser als die Broadwell-Umgebung, was angesichts der Fortschritte bei Geschwindigkeit und On-Chip-Verbesserungen, die von einer geringen Latenz profitieren, Sinn macht. Eine Erhöhung um zwei Generationen ergibt eine zwei- oder dreifach bessere Leistung bei diesen Arbeitslasten.

Die Arbeitsbelastung und der Kern müssen zusammen betrachtet werden. Zum Beispiel könnte ein Kunde dazu verleitet werden, auf eine VCPU umzusteigen, die laut Amazon um 10% günstiger ist. AWS könnte jedoch Kerne auf diese Prozessoren packen, und Sie wechseln nun von einer Umgebung, in der Sie eine von 48 virtuellen Maschinen auf einem Server sind, zu einer, in der es 128 virtuelle Maschinen gibt. Ihr Zugriff auf den Speicher ist begrenzt, und Sie könnten 60% weniger Leistung für 10% Ersparnis erhalten.

Organisationen glauben oft, dass sie keinen Systemarchitekten mehr benötigen, wenn sie in die Cloud auslagern. Es ist wahr, dass Architekten keine physischen Maschinen mehr aufstellen und stapeln, aber sie tun es jetzt virtuell und müssen verstehen, was verschiedene Instanzen für unterschiedliche Arbeitslasten bieten.

Intel arbeitet an einem Tool, um zu zeigen, welche Workloads am besten auf welchen Instanzen laufen. In der Zwischenzeit hat Intel einige allgemeine Richtlinien und Cloud-Lösungsarchitekten, um Kunden zu beraten.

Darüber hinaus ist es wichtig, umfangreich zu testen, um zu verstehen, wo man Workloads platzieren sollte. Gleichzeitig ist es auch wichtig, zu testen und zu benchmarken, um zu überprüfen, ob man das erhält, was man von einem Anbieter erwartet.

## Datenbank WL Performance - Non NVMe

Intel hat einige Tests an Arbeitslasten auf frisch installierten 64-Kern-Fixed-64-VCPU-Instanzen durchgeführt. Nachdem die anfängliche Anzahl ermittelt wurde, wurde eine weitere Instanz erstellt und der gleiche Test erneut durchgeführt. Die Ergebnisse unterscheiden sich dramatisch für den gleichen Test jedes Mal. Dies könnte darauf zurückzuführen sein, dass möglicherweise eine Mischung von Prozessen angeboten wird, die auf einer bestimmten Stufenebene verfügbar sind, oder es könnten zusätzliche Latenzen und Verzögerungen bei der Anbindung an den Blockspeicher existieren, oder sogar laute Nachbarn. Daher ist es sinnvoll, Tests durchzuführen, um sicherzustellen, dass das System den Erwartungen entspricht.

Kurz gesagt, um den größten Nutzen aus der Cloud zu ziehen, müssen Sie sich informieren, die Systeme testen und die verfügbare Hilfe in Anspruch nehmen.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
