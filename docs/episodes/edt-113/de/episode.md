---
layout: posts
title: "Operationalisierung des Geschäftsprozessmanagements"
number: 113
permalink: episode-EDT113-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 113
tags:
    - bpm
    - automation
    - compute
    - management
    - camunda
    - capitalbpm
    - rpa

date: Thu Nov 17 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Max Young

img: thumbnail.png
image: thumbnail.png
summary: "In dieser Episode spricht Darren über Business-Process-Management und Automatisierung mit Max Young, CEO von Capital BPM."
video: "https://youtu.be/bIJRyJxSGvE"
description: "In dieser Episode spricht Darren über Business-Process-Management und Automatisierung mit Max Young, CEO von Capital BPM."
---

<div>
{% include transistor.html id="a05071ff" title="#113 Operationalizing Business Process Management" %}

{% include youtube.html id="bIJRyJxSGvE" %}
</div>

---

Max nennt sich selbst einen "gescheiterten Akademiker", weil er sein Promotionsstudium der Mathematik mit Spezialisierung auf Topologie abgebrochen hat, um Informatik zu studieren. Er hat einen Bachelor- und einen Masterabschluss erworben, wobei er sich auf Künstliche Intelligenz spezialisiert hat. Anschließend arbeitete er im Bereich des Geschäftsprozessmanagements (BPM), zunächst bei Lombardi, das später an IBM verkauft wurde, und bei einigen anderen Anbietern im BPM-Bereich. Vor zehn Jahren wagte er mit Freunden den Schritt und gründete Capital BPM.

Max hat sich aus zwei Gründen dazu entschieden, sich auf BPM zu konzentrieren. Erstens mochte er schon immer Algorithmen, weil sie einen systematischen Ansatz zur Lösung komplexer Probleme bieten. Algorithmen geben ihm ein Gefühl von Sicherheit in verrückten Situationen.

Zweitens, ihm gefallen das, was man in der Mathematik als Transformationen bezeichnet. Zum Beispiel, wenn man eine hässliche Form mit vielen Ecken hat, die schwer zu messen ist, könnte man sie in ein Rechteck umwandeln und dann alle Theorien rund um die Rechtecksmessung anwenden, es messen und die Antwort wieder in die ursprüngliche Form übersetzen. Auf die gleiche Weise kann man in BPM ein Problem in einen Bereich bringen, wo es leicht gelöst werden kann. Anstatt ein Problem zu einem Mikroproblem mit komplizierten verschachtelten F-Anweisungen zu machen, die schwer zu warten sind, kann man es in ein abgeflachtes Problem umwandeln, das man in Stufen erkennen und angehen kann.

Dieser Prozess ähnelt dem Hineinzoomen auf Google Maps, um zu sehen, wo eine konzentrierte Fokussierung erforderlich ist, und dann wieder herauszuzoomen, um zu sehen, wie dies in das Gesamtbild passt. Das Herz der Unternehmensarchitektur besteht darin, hinein- und herauszuzoomen, um sicherzustellen, dass die Linie, die Sie zeichnen, immer noch gültig ist.

Max vergleicht seine Vorliebe für BPM in der Informatik-Welt mit Kampfkünsten, die er seit seinem sechsten Lebensjahr studiert. Er sagt, es gibt praktische Kampfkünste wie Judo und Muay Thai, und esoterischere wie Tai Chi. Er mag pragmatische Kampfkünste, weil sie reale Probleme lösen können. Er gerät nicht mehr in Schlägereien, aber zum Beispiel helfen ihm seine Judo-Fähigkeiten, wenn er ausrutscht und hinfallen sollte. BPM ist pragmatisch, da es der Schlüssel zur Lösung von Geschäftsproblemen ist. Er glaubt, dass es einen realen Wert darin gibt, all die Theorien, die er in der Schule gelernt hat, anzuwenden und sie dienend einzusetzen, um eine Geschäftsplattform zu schaffen, die den Menschen ermöglicht, tägliche Probleme effizienter und konsistenter zu lösen, und dadurch den Menschen und der Gemeinschaft mehr Möglichkeiten zu geben.

Dies ist ein Bereich der Informatik, der sich darauf bezieht, wie Menschen arbeiten können. Dinge können automatisiert werden, um die Anzahl wiederholbarer und eintöniger Aufgaben zu reduzieren, sodass sie sich auf wichtigere Dinge konzentrieren können. Menschen befürchten, dass Automatisierung alltägliche Arbeitsplätze verschlingen wird, aber stattdessen beseitigt sie Mühsamkeit und schafft Zeit für wichtigere Arbeiten. Sie kann auch Arbeitsplätze schaffen. Die gleichen Ängste existierten, als Ford-Computer automatisiert wurden, aber letztendlich wurden neue Industrien geschaffen. BPM sollte vollständig angenommen werden, anstatt davor Angst zu haben.

Der beste Weg, Prozesse zu operationalisieren, besteht darin, die wissenschaftliche Methode zur Artikulation des Problems zu verwenden. Im Business Process Management zeichnet man Bilder mithilfe eines Business Process Modelers. Max mag den Camunda Business Process Modeler, der kostenlos heruntergeladen werden kann und nur wenig Notation erfordert. Mit dem Modellierungsprogramm zeichnet man Schritte, um die verschiedenen Systeme und ihre Funktionsweise zu verdeutlichen.

In einem Bewerbungsprozess beginnt man zum Beispiel mit einem Pool, der interessierte Parteien definiert, wie den Kandidaten, den IT-Manager und die Personalabteilung. Innerhalb des Pools gibt es "Schwimmbahnen", die jeweils einen Spieler enthalten, der Aktionen durchführen kann. Man kann sich diese als LDAP-Gruppen vorstellen. Dann beginnt man, den Geschäftsprozess zu gestalten: Zuerst bewirbt sich ein Kandidat für die Stelle, dann könnte die Personalabteilung eine Bewertung vornehmen und anschließend prüft ein IT-Manager den Kandidaten. Genehmigte Entscheidungen werden auf dem Weg notiert. Nachdem die wichtigsten Schritte auf oberster Ebene im Modell festgelegt sind, kann man weitere Details zu differenzierteren Prozessen erarbeiten, wie zum Beispiel ein geteiltes Vorstellungsgespräch, eins für technische Fragen und eins für das Management.

Übersetze das Folgende ins Deutsche: ![bmp Bild](./bpm.png)

Das Modellierungsprogramm generiert im Hintergrund XML, während Sie diese Diagramme zeichnen. Diese XML-Datei ist zur Laufzeit von BPM-Maschinen interpretierbar; während Sie das Diagramm zeichnen, kann es zu einem ausführbaren Prozess werden.

Das menschliche Element ist immer noch in dieser Schleife vorhanden, aber die Verwendung eines BPM-Systems wie diesem macht deutlich, wo Prozesse automatisiert werden können, z. B. bei der Überprüfung des Arbeitsverlaufs oder einer kriminellen Hintergrundüberprüfung. Das Modell ermöglicht auch Flexibilität und Experimente. Zum Beispiel, nehmen wir an, der Fachexperte sagt, dass er den Arbeitscheck und den kriminellen Registercheck nicht gleichzeitig durchführen möchte, da letzterer teuer ist und ersterer günstig. In diesem Fall ist es einfach, den Arbeitscheck zuerst auszuführen und eine Entscheidung vor dem kriminellen Registercheck zu verlangen. Mit den vorgenommenen Änderungen baut man Konsens und eine wahre Geschichte auf, die sich mit jedem Experiment weiterentwickelt und wahrer wird.

Während das Werkzeug wie ein Zeichenwerkzeug aussieht, handelt es sich tatsächlich um ein Modellierungswerkzeug, das es Ihnen ermöglicht, Bilder zu zeichnen und diese im Hintergrund zu simulieren. Auf diese Weise können Sie diesen Vorgang ausführen und alle verschiedenen Entscheidungspunkte sowie deren Auswirkungen sehen. Das Modell wird Ihnen außerdem mitteilen, dass Sie nicht bereitstellen können, wenn Sie etwas nicht korrekt erledigt haben.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
