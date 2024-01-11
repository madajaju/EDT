---
layout: posts
title: "Die Entstehung des globalen Datennetzwerks"
number: 98
permalink: episode-EDT98-de
lang: de
nav_exclude: true
nav_order: 98
tags:
    - dataarchitecture
    - datamanagement
    - data
    - technology
    - cloud
    - globaldatanetwork
    - macrometa
    - multicloud
    - datamesh

date: Wed Aug 03 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Chetan Venkatesh

img: thumbnail.jpeg
image: thumbnail.jpeg
summary: "In dieser Episode erinnert sich Darren mit Chetan Venkatesh, dem CEO von MacroMeta. Venkatesh verfügt über eine lange Geschichte im Datenmanagement, angefangen bei den Anfängen des Grid Computing, und hat MacroMeta gegründet, um sich mit dem Datenmanagement über die global verteilten Edge, Rechenzentren und Clouds auseinanderzusetzen."
video: "https://youtu.be/url"
description: "In dieser Episode erinnert sich Darren mit Chetan Venkatesh, dem CEO von MacroMeta. Venkatesh verfügt über eine lange Geschichte im Datenmanagement, angefangen bei den Anfängen des Grid Computing, und hat MacroMeta gegründet, um sich mit dem Datenmanagement über die global verteilten Edge, Rechenzentren und Clouds auseinanderzusetzen."
---

<div>
{% include transistor.html id="140001aa" title="#98 The Emergence of the Global Data Network" %}

{% include youtube.html id="url" %}
</div>

---

Chetan ist ein Ingenieur, der sich zum Operations- und Start-up-Spezialisten entwickelt hat (Macrometa ist sein viertes Start-up). Er sagt, dass er seit zwanzig Jahren an derselben Herausforderung arbeitet, nämlich dem Umgang mit verteilten Daten und der Reduzierung von Latenzzeiten.

Daten befinden sich nicht mehr nur in einem Rechenzentrum, sondern überall: in der Cloud, am Rand und auf den Laptops der Menschen. Die effektive Verwaltung all dessen ist eine Herausforderung.

Vor ungefähr zehn Jahren sagte Marc Andreessen, dass Software die Welt verschlingt. Zu diesem Zeitpunkt hat die Software alles verschlungen und alle Arten von Beschränkungen und Barrieren in Chancen verwandelt. Mehrfadenverarbeitung ist eine der Barrieren, die mit der Cloud beseitigt wurden. Sie können Anwendungen erstellen, die gleichzeitig an verschiedenen Orten auf der Welt ausgeführt werden. Parallel dazu findet eine Bewegung von Entwicklern statt, um alles so einfach wie nötig für den durchschnittlichen Informatiker zu machen. Auf der einen Seite gibt es eine anspruchsvolle technologische Entwicklung und auf der anderen Seite eine Bewegung hin zur Einfachheit.

Architekturen wie Jamstack ermöglichen verteiltes Computing in großem Maßstab mit großer Einfachheit, aber es gibt immer noch eine große unerschlossene Grenze zu entdecken und einzufordern. Die umfangreiche Landnahme-Chance liegt jetzt am Rand. Verteiltes Datenmanagement und Edge sind zwei Seiten einer Medaille.

Ein großes Problem besteht darin, dass sich Teile der Softwareentwicklung zu einer Funktion als Dienst bewegen, die Daten ignoriert. Außerdem gibt es die Wahrnehmung, dass Daten allgegenwärtig sind, aber viele Edge-Geräte nicht immer verbunden sind. Es gibt keine Garantie, dass eine Anwendung Zugriff auf alle Daten hat. Netzwerke sind nicht mehr zentralisiert; die Idee der zustandslosen Microservices stammt aus der Cloud-Bewegung. Diese Zustandslosigkeit kann zu einer großen Hürde werden. Deshalb behandeln Architekturen wie Jamstack und serverlose Funktionen Daten eher als peripheres Problem als als Kernproblem.

Der folgende Text wird ins Deutsche übersetzt: 

Statuslose Datenstrukturen sind einfach. Sie haben einen bestimmten Ort, an dem Sie Ihre Daten speichern und dann wieder zu einem statuslosen Zustand wechseln. Zustandsbehaftete Datenstrukturen erfordern robuste Infrastrukturen mit komplexeren Datenstrukturen, da sie die Anwendung unterstützen, während sie kontinuierlich den Status aktualisiert. Wenn wir in eine reale Streaming-Datenwelt übergehen, in der der Status kontinuierlich aus dem Ökosystem emittiert wird, wird die Infrastruktur komplex und schwer zu verwalten, da sie nicht durchdacht ist. Hier kommt Macrometa ins Spiel. Sie haben eine neue Plattform für diesen kontinuierlichen, Echtzeit-aktiven Status im Exabyte-Maßstab entwickelt.

Der Umgang mit diesen Streaming-Daten in einem aktiven und dynamischen Zustand ist für viele Softwareentwickler eine bedeutende Veränderung. Seit die ersten Cloud-Infrastrukturen entstanden sind, dann Big-Data-Plattformen und schließlich Daten als Service, hat die Branche gelernt, historische Daten effizient zu erfassen, zu verarbeiten und zu analysieren. Aber jetzt befinden wir uns in einer Welt, in der Daten nicht mehr als Monolith existieren, sondern auf einem Spektrum liegen. Eine neu anerkannte Eigenschaft ist, dass Daten vergängliche Erkenntnisse und Wert haben. Einige Daten haben eine kurze Haltbarkeit. Die aktuellen Zeitskalen sind zu groß, um Daten effizient zu nutzen; wir brauchen Systeme, die innerhalb von 50 Millisekunden effizient kommunizieren und die kognitive Belastung für diejenigen reduzieren, die mit diesen Systemen interagieren.

Die meisten Menschen verstehen Latenz falsch: Es ist nichts, was Freude bereitet, sondern das Fehlen davon macht einen unzufrieden. Zum Beispiel, wie lange wird jemand ein stockendes YouTube-Video oder eine langsame Pufferung bei Netflix tolerieren? Fünfzig Millisekunden sind für eine Maschine eine Ewigkeit. Eine Maschine kann in 50 Millisekunden eine Vielzahl von Dingen erledigen, daher wird Latenz besonders wichtig, insbesondere wenn man den vergänglichen Wert von Daten betrachtet.

Ein weiteres Problem besteht nun darin, dass aufgrund der Cloud, der Interkonnektivität und des globalen Systems Start-ups multinationale Unternehmen sind und Daten standortsensibel werden. Ein Teil dieser Daten unterliegt Regulierungen, einige enthalten personenbezogene Informationen (PII) und dürfen in bestimmten Rechtsordnungen nicht ausgeführt werden, usw. Ein ausgezeichnetes Beispiel für dieses Problem ist, dass die Europäer ihre Daten nicht außerhalb ihrer Grenzen sehen wollen, aber die meisten Cloud-Infrastrukturen und Anwendungen in den USA entwickelt werden.

Ein drittes Problem besteht darin, dass Daten an vielen Orten gespeichert sind; es gibt Grenzen zwischen Systemen, physisch und logisch. Daten können im Wesentlichen statisch und starr sein, daher benötigen wir eine Infrastruktur, die es ermöglicht, dass Daten in Echtzeit mit Konsistenz und Ordnungsgarantien verbunden und fließen können. Am wichtigsten ist, dass dadurch Austauschbarkeit geschaffen wird, um sie schnell auf vielfältige Weise nutzen zu können.

Ein zusätzliches Problem besteht darin, dass Daten viel Störungen aufweisen und es keinen Sinn macht, interkontinentale Entfernungen zu überbrücken und dabei Übertragungsgebühren zu bezahlen, um dann den Großteil der Daten abzuziehen. Daten verlieren an Wert, bis sie ihr Ziel erreichen. Es gibt auch eine hohe Aktualisierungsrate, sodass Systeme häufig mit veralteten Daten arbeiten.

Wir brauchen neue Lösungswege für diese Art von verteilten Datenproblemen. Chetan glaubt, dass die nächsten zehn Jahre diesem Bereich der Datenwissenschaften gehören werden.

Die erste Generation von verteilten Datenlösungen verwendete operationale Transformation. Google Docs ist ein hervorragendes Beispiel dafür. Operationale Transformation erfordert jedoch eine Zentralisierung der Kontrolle, wodurch sie nicht gut skalierbar ist. Google hat jedoch einen Weg gefunden, um Skalierbarkeit zu erreichen, aber das lässt sich nicht auf den durchschnittlichen Entwickler verallgemeinern. Es gibt vielleicht nur fünf Unternehmen auf der Welt, die es in diesem Maßstab verstehen, und ein Großteil dieses Wissens ist in diesen Unternehmen und proprietärer Technologie gebunden.

Macrometa arbeitet mit der Gemeinschaft und der Akademie zusammen, um zu versuchen, einen neuen Wissensschatz zu schaffen, der weitaus effizienter ist als diese zentralisierten Modelle auf eine vollständig verteilte Weise.

Derzeit sind Infrastrukturen verfügbar, die großartig darin sind, historische Aufzeichnungssysteme zu lösen. Sie versuchen, sich hin zu Echtzeitdaten zu entwickeln, aber ihre Architekturen sind grundsätzlich nicht dafür ausgelegt. Diese neuen Probleme mit daten-, zeit- und ortsbezogener Empfindlichkeit, Aktivierungswert, Aktualisierungsraten, Datenanziehungskraft und Datenrauschen erfordern eine neue Art von Infrastruktur. Chetan nennt dies ein Interaktionssystem anstelle eines Aufzeichnungssystems, weil Interaktionssysteme Datenverbindungen sind, die nahe am Ursprungsort der Daten entstehen und verbraucht werden. Sie filtern und erweitern alle Daten in richtiger Weise und leiten sie an ihre beabsichtigten Empfänger weiter. Es ist eine Networking-Funktion.

Macrometa hat Netzwerkprozessoren entwickelt, die die Daten bewegen - ein globales Datennetzwerk. Es handelt sich um ein serverloses API-System, bei dem Entwickler einfach APIs nutzen, um Echtzeit-aktive und betriebliche Datenprobleme zu lösen. Macrometa ist ein globales Datennetzwerk in der Topologie eines CDM, aber mit einer Datenplattform wie Snowflake, die reichhaltige Datenprimitive erzeugt, um mit Echtzeit-aktiven und betrieblichen Datenwerten umzugehen.

Sie können analytische Tools in das globale Datennetz integrieren und die Analysen dort einsetzen, wo die Daten generiert oder benötigt werden. Genau wie Amazon mit Edge-Architektur und Algorithmen die Einzelhandelsverteilung grundlegend verändert hat, um lokale Lager optimal für Übernacht-Lieferungen zu bestücken, hat auch Macrometa dasselbe für Daten getan. Sie bringen die Daten und die Berechnungen auf diesen Daten näher zusammen und ermöglichen es, dass dies in Millisekunden geschieht. Diese Fähigkeit, Echtzeit-Informationsschleifen zu erstellen, ist ein leistungsstarker Enabler. Zum Beispiel können kleine Einzelhändler die Lagerbestände ihrer lokalen Geschäfte für ihren E-Commerce nutzen, ohne sich dabei mit Amazon zu überschlagen.

Ein großartiger Anwendungsfall für die Macrometa-Plattform liegt im Bereich der Cybersicherheit. Einige Kunden entfernen ihre zentralisierten Datenmodelle, um von geringeren Latenzzeiten zu profitieren und Bedrohungen in Echtzeit zu blockieren.

Das globale Datennetzwerk ist eine Transformations Schicht zwischen Ihren Datenquellen und Empfängern, mit den Verbrauchern und Herausgebern. Es besteht aus drei Technologiekomponenten. Die erste ist das globale Datenmesh, welches die Integrations schicht für Daten darstellt. Die zweite ist ein globales Rechen-Fabric, das es Ihnen ermöglicht, Daten und Geschäftslogik in Form von Funktionen und Containern global zu orchestrieren. Das dritte Element ist ein globales Datenschutz-Fabric: Wie man Daten sichert und den unterschiedlichen datenrechtlichen Bestimmungen und Vorschriften entspricht, die bestimmen, ob Ihre Daten übertragen oder gespeichert werden dürfen.

Der globale Datennetzwerk ist eine Möglichkeit, Daten schnell und einfach aus verschiedenen Systemen über Grenzen hinweg zu integrieren, sei es physisch oder logisch. Alles wird integriert und fließt mit Konsistenz und garantierter Ordnung. Der größte Wert dieses Netzwerks besteht darin, dass es Daten austauschbar und nutzbar macht, indem es Ihnen ermöglicht, APIs schnell auf Daten zu setzen. Dies kann im Vergleich zu normalerweise mehreren Monaten in wenigen Stunden erfolgen. Das globale Datennetzwerk ist für Billionen von Ereignissen pro Sekunde ausgelegt, so dass es Daten in großem Umfang mit 90 Prozent geringeren Kosten als die Cloud bewegen kann.

Der globale Rechenverbund bringt Geschäftslogik und Orchestrierung mit sich, um Ihre Verarbeitung näher an den Ort zu bringen, an dem Ihre Daten entstehen oder verbraucht werden. Dies ist das Anti-Cloud-Muster. Macrometa wird chirurgisch und dynamisch jene Microservices verschieben, die z.B. datenschutzrechtlichen Vorschriften entsprechen müssen, an die richtigen Ausführungsorte.

Das letzte Stück ist der Datenschutz. Dies ist ein komplexes Problem und die Antworten, die wir heute haben, zum Beispiel das Öffnen eines separaten Silos für diese bestimmte Geo, um jedes Mal, wenn Sie eine Instanz in Ihrer App starten, den Anforderungen gerecht zu werden, sind nicht gut. Die Plattform von Macrometa verfügt über ein Datennetzwerk, das bereits in die Integration einbezieht und Ihre Daten über alle Grenzen hinweg fließen lässt, zusammen mit Berechnungsfunktionen und der Aufnahme von Daten ohne Begrenzungen. Jetzt kann es logische Grenzen schaffen und Daten an bestimmten Standorten schützen. Es können Präferenzen und Richtlinien festgelegt werden, wie Daten in einer Region leben und repliziert werden sollen, zum Beispiel ob sie anonymisiert werden sollen, wenn sie aus der Region kopiert werden.

Macrometas Technologie ermöglicht Anwendungsfälle, die in der Cloud nicht möglich sind, da die Clouds zu weit entfernt oder zu langsam sind. Macrometa hat die Infrastruktur aufgebaut, um Echtzeitdatenprobleme zu lösen und daraus Chancen anstatt Herausforderungen zu machen. Für mehr Informationen über Macrometa besuchen Sie macrometa.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
