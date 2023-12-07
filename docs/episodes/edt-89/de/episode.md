---
layout: posts
title: "Zukunft von Big Memory und CXL"
number: 89
permalink: episode-EDT89-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 89
tags:
    - bigmemory
    - memverge
    - optane
    - technology
    - data
    - compute
    - pmem
    - cxl
    - ceo

date: Wed Jun 01 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Charles Fan

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Chief Solutions Architect bei Intel, spricht mit Charles Fan, CEO von MemVerge, über die CXL-Revolution und wie die Software von MemVerge die Zukunft des großen Arbeitsspeichers darstellt."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solutions Architect bei Intel, spricht mit Charles Fan, CEO von MemVerge, über die CXL-Revolution und wie die Software von MemVerge die Zukunft des großen Arbeitsspeichers darstellt."
---

<div>
{% include transistor.html id="536490f3" title="#89 Future of Big Memory and CXL" %}

{% include youtube.html id="url" %}
</div>

---

Eine spannende Entwicklung im Bereich des Speichers ist CXL (Compute Express Link). Auf der Host-Seite wird ein robustes Ökosystem entwickelt, bei dem Intel und andere CXL 1.1 in ihren Plattformen der nächsten Generation, wie zum Beispiel Sapphire Rapids, unterstützen. Diejenigen auf der Speicherseite, einschließlich Intel Optane der vierten Generation, werden CXL nutzen. Intel ist ein treibendes Mitglied eines starken CXL-Konsortiums, das den Standard vorantreibt. CXL 2.0 wurde bereits definiert und bietet zusätzliche Funktionen wie die Externalisierung und Umschaltung von CXL. CXL 3.0 befindet sich in Bearbeitung und wird standardisieren, wie CXL bereitgestellt und geteilt werden kann.

Es werden neue Produkte von Samsung, Micron und SK-Hynix mit CXL-Fähigkeiten auf den Markt kommen. Darüber hinaus werden neue Verbindungen entwickelt, die möglicherweise Speicher mit dem Netzwerk verbinden können, sodass ein speicherfähiges Netzwerk entsteht, das über mehrere Server gemeinsam genutzt werden kann.

Die CXL-Technologie ist ein Spielveränderer. Ein neues Speicherprotokoll läuft auf Standard-PCIe der fünften Generation und später. Da es Ihnen ermöglicht, den Speicher auf PCIe zu platzieren, kann er nicht nur innerhalb des Gehäuses sein, sondern in Zukunft mit PCIe-Switching kann der Speicher auf dem Netzwerk componierbar und gemeinsam nutzbar sein. Das erste CXL-Produkt wird bis Ende des Jahres herauskommen.

MemVerge hat bereits einen softwaredefinierten Speichercontroller, und CXL hat eine völlig neue Welt für die Software eröffnet. CXL ist für den Speicher, was Fibre-Channel für die Speicherung ist. Es handelt sich um ein Speicherbereichsnetzwerk anstelle eines Speichernetzwerks. Es ist möglich, mit CXL direkt in den Speicher zu gehen und die CPU komplett zu umgehen.

CXL wird deutlich schneller sein als bisherige Verbindungsstandards. Es wird eine Latenzzeit von 100 oder 200 Nanosekunden haben. Hier erhöht sich die Auslastung, Verwaltbarkeit und Flexibilität. Es wird eine höhere Verfügbarkeit und Produktivität bei der Nutzung des Speichers geben. Außerdem wird es möglich sein, den Speicher dynamisch bereitzustellen; Sie können ihn bei Bedarf bereitstellen, ohne dass er in den Server passen muss. Theoretisch haben Sie immer genügend Speicher für alles, was Sie aktiv benötigen.

Mit der Snapshot-Technologie von MemVerge ist Ihre Daten nicht nur geschützt, sondern auch dauerhaft verfügbar. Dies wird umso wichtiger, je größer Ihr Speicher wird. Wenn Sie ihn verlieren, wird es schwieriger, ihn wiederherzustellen.

Damit CXL erfolgreich ist, müssen drei Dinge vorhanden sein. Auf der Hardware-Seite müssen die führenden älteren Hardware-Anbieter mit an Bord sein und dieselben Standards unterstützen. Das ist im vergangenen Jahr geschehen, daher gibt es einen einheitlichen Standard, den jeder unterstützt. Zweitens müssen Sie Ihre Anwendung nicht ändern, um CXL zu verwenden, genauso wie bei Storage Area Networks. Drittens sollten Sie aus Sicht der Datenbank keine umfangreichen Neuschreibungen vornehmen müssen. Dies kann durch eine Kombination der bereitgestellten Standards, der Unterstützung des Betriebssystems und der MemVerge-Software erreicht werden, die Auto-Tiering zwischen DDR-Speicher und CXL-Speicher ermöglicht.

MemVerge kann diese Abstraktionsschicht bieten. Es handelt sich im Wesentlichen um Memory-Virtualisierung. Der softwaredefinierte Speicher behandelt die tatsächliche Platzierung des physischen Speichers.

MemVerge macht großen Arbeitsspeicher für die Anwendung transparent, sodass Programmierer die höhere Kapazität nutzen können, ohne jemals den Speicherplatz zu verbrauchen. Als nächstes kommt der Datenschutz. MemVerge hat einen In-Memory-Snapshot-Service entwickelt, der den gesamten Zustand einer Anwendung im Speicher erfassen kann, und dieser Zustand ist unveränderlich. Er kann jederzeit und überall wiederhergestellt werden. Es gibt viele Anwendungsfälle dafür, wie beispielsweise das Abmildern von Ransomware und die Verkürzung der Zykluszeiten in der Genomforschung.

Die Snapshot-Funktion ist nicht nur nützlich, weil sie eine laufende Pipeline schnell und einfach einfangen kann, was es ermöglicht, jederzeit zurückzurollen und wiederherzustellen, sondern sie kann auch Geld sparen, wenn Cloud-Services genutzt werden. Die Hauptanbieter von Diensten bieten Spot-Instanzen an, die um 70-90% günstiger sind als der Nachfragepreis, aber es gibt einen Haken: Sie können diese jederzeit mit nur 30 Sekunden bis zwei Minuten Vorwarnzeit zurücknehmen. Das ist keine ausreichende Zeit, um damit umzugehen, besonders wenn viele Daten im Arbeitsspeicher liegen, daher war es bisher für viele Workloads nicht hilfreich. Mit der Snapshot-Fähigkeit von MemVerge können Sie regelmäßige Schnappschüsse Ihrer laufenden Workload in jeder Instanz machen. Wenn die Spot-Instanz weggenommen wird, haben Sie ein Abbild, das Sie wiederherstellen und weiter ausführen können. Das ist eine Versicherung, die es Ihnen ermöglicht, den kostengünstigen Service mit Schutz zu nutzen.

Da Sie nicht nur eine Anwendung, sondern einen gesamten Container oder eine Instanz erfassen, können Sie ihn überall wiederherstellen - vor Ort, in derselben Cloud oder in einer anderen Cloud. Dies bietet Ihnen maximale Beweglichkeit und Widerstandsfähigkeit in Ihren Abläufen, selbst im Falle eines größeren Ausfalls von Cloud-Diensten. Diese Technologie bietet viele aufregende Möglichkeiten.

Die CXL-Revolution und die MemVerge Memory Machine-Software sind eine beeindruckende Kombination mit wegweisenden Möglichkeiten.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
