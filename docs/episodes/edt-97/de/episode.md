---
layout: posts
title: "Die Vorteile von Graphdatenbanken"
number: 97
permalink: episode-EDT97-de
lang: de
nav_exclude: true
nav_order: 97
tags:
    - datavisualization
    - datamodeling
    - cybersecurity
    - dataanalysis
    - datamanagement
    - multicloud
    - zerotrust

date: 2022-07-28T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Hadi Ahmadi

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Chief Solutions Architect, Intel, und Dr. Hadi Ahmadi, Director of Solutions Architecture, Katana Graph, diskutieren die Vorteile von Graphdatenbanken."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solutions Architect, Intel, und Dr. Hadi Ahmadi, Director of Solutions Architecture, Katana Graph, diskutieren die Vorteile von Graphdatenbanken."
---

<div>
{% include transistor.html id="c81eaabc" title="#97 The Benefits of Graph Databses" %}

{% include youtube.html id="url" %}
</div>

---

Hadi erwarb seinen Doktortitel in Informatik im Jahr 2012 und erforschte Kryptografie und Netzwerksicherheit. Er arbeitete einige Jahre im akademischen Bereich und wechselte dann in die Industrie, wobei er sich auf verschiedene Aspekte von Sicherheitslösungen konzentrierte, einschließlich Identitäts- und Zugriffsverwaltung. Im Jahr 2015 begann er mehr über Grafikmodellierung zu lernen und erkannte, wie die Modellierung von Graphendaten einige der aufregenden und komplexen Probleme in seinem Forschungsbereich lösen könnte.

In Graphdatenbanken bedeutet ein Graph nicht Diagramme oder grafische Benutzeroberflächen, sondern eine Möglichkeit, Daten auf der Speicherebene zu strukturieren, damit sie für komplexe Probleme abgerufen und verarbeitet werden können, insbesondere wenn die Daten miteinander verbunden sind. Der Graph bietet viele Vorteile und kann bestehende Datenstrukturen oder Lösungen wie relationale Datenbankmodelle oder Objektspeicher ergänzen.

Der Hauptunterschied zwischen graphen- und relationalen Datenbanken besteht darin, dass beide auf Beziehungen basieren, jedoch nehmen relationale Datenbanken die Beziehungen auf die Metadaten- und Schemebene, während graphenbasierte Datenbanken datengetriebene Beziehungen darstellen. Mit anderen Worten, in relationalen Datenbanken werden Spalten von Tabellen miteinander in Beziehung gesetzt. Um eine neue Beziehung einzuführen, müssen Sie Ihr Schema ändern. Der Graph bietet eine schema-freie Infrastruktur, in der Sie weitere Strukturen um Ihre Daten herum hinzufügen können, jedoch flexibel genug sind, um beliebige unstrukturierte Daten aufzunehmen.

Die Hälfte der weltweiten Daten wurde in den letzten Jahren aus verschiedenen Quellen gesammelt, aber weniger als zwei Prozent wurden analysiert, von denen die meisten strukturierten Daten sind. Die Daten werden gesammelt, aber die Informationen sind unzureichend für die Verarbeitung. Es muss eine Möglichkeit geben, flexibel eine gewisse Struktur hinzuzufügen, die dynamisch genug ist, um sich zu ändern, wenn man unsicher ist, aber dennoch von der fortgeschrittenen optimierten Berechnung profitieren kann. Das Diagramm ist eine ausgezeichnete Möglichkeit, dies zu tun.

Wenn Sie versuchen, mit korrelierten oder miteinander verbundenen Daten zu arbeiten, im Gegensatz zu beispielsweise isolierten Daten mit kritischen Werten, bietet ein Diagramm Vorteile aufgrund der Beziehungen. Fast jede Branche kann davon profitieren, da unstrukturierte Daten normalerweise aus verschiedenen Quellen und unterschiedlicher Natur stammen.

Ein Beispiel wäre Cybersicherheitslösungen. Es gibt Daten aus Protokollen und Prüfungspfaden aus Netzwerkumgebungen, der Cloud-Infrastruktur, den Endpunktgeräten usw. Die Daten stammen aus verschiedenen Quellen wie Verzeichnissen oder Rohprotokolldateien. Es wäre vorteilhaft, die Daten zu korrelieren, zum Beispiel, weil üblicherweise eine Identität oder ein Benutzer, der Teil eines Protokolls aus dem Identitätsverwaltungssystem sein könnte, derselbe Benutzer ist, der einen Prozess auf einem Laptop auslöst, wie das Herunterladen eines Anhangs aus einer E-Mail. Durch die Analyse dieser Muster kann man diese korrelative Verknüpfung nutzen, um mehr Einblick zu gewinnen. Mit anderen Worten, es spielt keine Rolle, wie oder woher die Daten stammen, sondern durch die Bereitstellung dieser Verknüpfung erfährt man mehr über jeden Datensatz, indem man sie im Kontext betrachtet.

Ein Vorteil besteht darin, dass es keine Probleme mit der Datenumwandlung gibt, was die Geschwindigkeit erhöht. Dies verringert auch den Speicherbedarf.

Graphen und relationale Datenbankstrukturen sind im Allgemeinen kompatibel. Hier ist ein vereinfachtes Beispiel eines sozialen Netzwerks: Die Knotentypen im Graphen ähneln Tabellen. So kann es einen Knoten namens "Person" geben und dann eine Tabelle namens "Person". Sie könnten einen anderen Knoten namens "Ort" haben und die Person mit einem bestimmten Ort verbinden. Sie können eine Tabelle namens "Ort" haben und sie mit Fremdschlüsseln verbinden. Dann haben Sie diese Beziehung von Freunden. Ein Freund einer Person in einem Graphmodell ist einfach eine Selbstschleife. Dadurch können Sie dieses Schema modellieren. In einer relationalen Datenbank müssten Sie eine neue Tabelle namens "Freunde" erstellen und sie dann verbinden. Auf dieser Ebene der Schemaerstellung fügen Sie also Redundanz und etwas Struktur hinzu. Und wenn Sie ein neues Konzept von Freundschaft oder Beziehung hinzufügen müssen, müssen Sie neue Tabellen erstellen und dadurch Redundanz und Komplexität aufbauen.

Weitere Vorteile von Graphen gegenüber relationalen Datenbanken sind Graphen über Elemente, graphische KI und die Idee, jetzt Modelldaten zu finden, um Muster aufgrund der Verbindung der Daten zu erkennen. Aufgrund der Beziehungen können Sie den Datensatz, den Sie suchen oder analysieren, verringern. Es nutzt die Kraft der Daten, um die Daten noch weiter zu stärken. Die Algorithmen in einer Graphdatenbank unterscheiden sich stark von denen in relationalen Datenbanken und sind besser optimiert, um schneller auf große Datensätze zuzugreifen.

Einer der Nachteile einer Graphdatenbank besteht darin, dass sie schwer skalierbar ist. In einer relationalen Datenbank ist es zum Beispiel einfach, eine Tabelle zu teilen und auf zwei Server zu verteilen. Frühere Graphdatenbanken waren darauf ausgelegt, als einzelne Gesamtlösung zu dienen. Wenn Sie also das Skalieren erhöhen wollten, mussten Sie mehr Speicher und CPU hinzufügen.

Nun, wenn Sie mit Petabyte an Daten in Grafiken arbeiten möchten, möchten Sie sich nach Möglichkeit vertikal skalieren, beispielsweise mit Technologien wie Intel VMs. Gleichzeitig möchten Sie jedoch auch horizontal skalieren. Neue Technologien wie die Graphenplattform von Katana helfen, dieses Skalierungsproblem durch verteiltes Computing zu lösen. Sie können das Problem in Teile aufteilen oder aufteilen und jeder Teil kann an einem kleinen Teil des Graphen für eine endgültige Lösung arbeiten. Katana hat bewiesen, dass Sie 256 oder mehr Maschinen zur Datenverarbeitung verwenden können. Dadurch können Sie schnell Tens von Terabyte an Daten im Arbeitsspeicher haben.

Eine Graphdatenbank erfordert ein ähnliches Ökosystem wie eine relationale Datenbank. Graphen sind etwas dynamischer und flexibler. Wenn Sie auf eine Graphen-Analyseplattform wechseln möchten, die über bloße betriebliche Datenbanken hinausgeht, könnten Sie von anderen Funktionen wie Datenlagerung und Datensee profitieren. Speicherung und Berechnung wären getrennt, was bedeutet, dass Graphenverarbeitungstechnologien, die alles im Speicher durchführen, nicht auf Speicherungsdienste angewiesen sein müssen, sodass Sie einen anderen Speicherdienst verwenden können.

Katana verwendet Objektspeicher und lädt dann bei Bedarf alles, was sie möchten, vom Graphen in den verteilten Speicher aller Maschinen. Die Daten kehren unveränderlich zum Speicher zurück, so dass Sie, sagen wir, den gesamten Cluster zerstören könnten, ohne etwas zu verlieren. Alle Daten sind bereits dort und werden gelagert. Relationale Datenbanken sind ein reiferes Gebiet, aber Graphdatenbanken werden im Ökosystem zunehmend besser unterstützt.

Basierend auf Hadis acht Jahren Erfahrung im Umgang mit Interessengruppen und Kunden erkennen alle sofort den Nutzen von Graphdatenbanken. Die Einschränkungen könnten darin bestehen, dass sie nicht mit Skalierbarkeit oder Kosten mithalten können. Die Arbeit von Katana und anderen Unternehmen der Graphentechnologie besteht darin, Graphen zu einem handelsüblichen Werkzeug zu machen, das Kunden für verschiedene Aufgaben nutzen können, anstatt dass es in der Datenbank ein Luxusprodukt ist. Zum Beispiel bietet Katana Kunden graphenbasierte Identitäts- und umfangreiche Datenverwaltungslösungen an.

Gute Anwendungsfälle für Graphen wären die frühzeitige Entwicklung von grafischen Lösungen, die speziell für bestimmte Unternehmen wie LinkedIn und Facebook mit ihren sozialen Netzwerken konzipiert sind. Heutzutage liegt ein naheliegender Einsatz im E-Commerce für Empfehlungssysteme vor. Durch das Finden von Verbindungen zwischen Kunden, Konten, Einkäufen und anderen Verhaltensweisen können sofort bessere Empfehlungen für die Käufer gemacht werden, was mit Abfragen in relationalen Datenbanken nicht möglich ist.

Um mehr über Katana zu erfahren oder wie man Hadi kontaktiert, gehe zu embracingdigital.org.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
