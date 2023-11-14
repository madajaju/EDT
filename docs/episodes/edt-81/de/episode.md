---
layout: posts
title: "Heterogene Programmierung mit OneAPI"
number: 81
permalink: episode-EDT81-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 81
tags:
    - cpu
    - fpga
    - gpu
    - heterogeneousprogramming
    - npu
    - oneapi
    - compute
    - technology
    - process

date: Wed Mar 23 2022 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - James Reinders

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect bei Intel, diskutiert mit James Reinders, dem Chief Evangelist von Intel OneAPI, über die Fähigkeiten und Zukunft von OneAPI. Dabei handelt es sich um ein branchenübergreifendes, offenes, auf Standards basierendes vereinheitlichtes Programmiermodell, das eine gemeinsame Entwicklererfahrung für Beschleunigerarchitekturen bietet."
video: "https://youtu.be/YDa_EeOzFzc"
description: "Darren Pulsipher, Chief Solution Architect bei Intel, diskutiert mit James Reinders, dem Chief Evangelist von Intel OneAPI, über die Fähigkeiten und Zukunft von OneAPI. Dabei handelt es sich um ein branchenübergreifendes, offenes, auf Standards basierendes vereinheitlichtes Programmiermodell, das eine gemeinsame Entwicklererfahrung für Beschleunigerarchitekturen bietet."
---

<div>
{% include transistor.html id="28fb34d4" title="#81 Heterogeneous Programming with OneAPI" %}

{% include youtube.html id="YDa_EeOzFzc" %}
</div>

---

Das Ziel von oneAPI besteht darin, die enorme Vielfalt an Hardware abstrakt zu erfassen, damit Softwareingenieure sie weiter oben im System nutzen und das Beste aus der Hardware herausholen können. James, ein Softwareingenieur, der auch eng mit der Hardware zusammenarbeitet, schätzt, was oneAPI im Kontext des aktuellen Trends zu heterogener Rechenleistung beitragen kann.

Das Wort "heterogen" bedeutet hier im Wesentlichen, dass es verschiedene Geräte in einem System gibt, die Berechnungen durchführen können, jedoch nicht denselben Befehlssatz ausführen. Zum Beispiel hat die CPU eine bestimmte Art, Anweisungen auszuführen, während die GPU einen anderen Ansatz verfolgt. FPGA, andere ASICs und Spezialgeräte haben jeweils unterschiedliche Programmierweisen. Das Ziel besteht darin, all diese Vorteile zu nutzen.

John Hennessy und David Patterson, Führungspersönlichkeiten im Bereich der Computerarchitektur, bezeichneten dies als ein neues goldenes Zeitalter der Computerarchitektur. Für Computerarchitekten ist es eine faszinierende Zeit, Spezialgeräte für verschiedene spezifische Bereiche zu entwerfen, aber für Programmierer kann es aufgrund der Komplexität schwierig und sogar beängstigend sein. Hier kommen die Initiativen oneAPI und oneAPI-Produkte ins Spiel.

Der Name, oneAPI, ist sowohl eine Initiative mit einer Spezifikation als auch eine Implementierung. Die Initiative ist ein einfaches Konzept: Softwareentwickler sollten die Freiheit haben, jedes gewünschte Gerät mit voller Leistung zu verwenden, und ihr Code sollte seinen Wert bewahren; sie sollten ihn nicht für jedes neue Gerät neu schreiben müssen. Diese Eigenschaften können auf Compiler, Bibliotheken, Debugger und jede Art von Tool angewendet werden.

Eine große Menge an Software zur Implementierung bestimmter Spezifikationen wurde quelloffen gemacht. Ein Großteil davon stammt von Intel, aber Intel stellt sie auch als herunterladbare Toolkits zur Verfügung, die bereits vorgefertigt und einsatzbereit sind, um Intel-Hardware zu unterstützen. Andere Anbieter, die Teile von oneAPI erstellen, haben ihre eigenen Implementierungen, sodass alle zusammenkommen, um die Spezifikationen auszutauschen, aber jeder kann Unterstützung für ihre eigene Hardware in einer offenen, branchenübergreifenden Multi-Vendor-Weise erstellen.

Das übergeordnete Ziel besteht darin, Code einmal zu schreiben und ihn überall optimal auszuführen. Es handelt sich jedoch um ein komplexes Problem, das einige Leistungsoptimierungen erfordern wird. Wenn zum Beispiel ein Algorithmus auf einer GPU gut funktioniert, wird er auch auf nahezu jeder anderen GPU ähnlich gut laufen. Wenn Sie den Algorithmus jedoch auf einem FPGA ausführen lassen, können Sie die Wiederverwendung Ihres Programms maximieren, haben jedoch die Möglichkeit, Teile des Algorithmus umzucodieren, damit er ebenfalls gut läuft. Es handelt sich um einen komplexen Ansatz, der es Ihnen ermöglicht, von jeder Hardware in hoffentlich sehr isolierten Neuschreibungen in unterschiedlichem Maße zu profitieren.

Sie können einen Code für verschiedene Geräte erstellen. Es gibt sogar noch ausgefeiltere Laufzeitansätze, die es Ihnen ermöglichen, zu erkennen, was vorhanden ist, und verschiedene Codeabschnitte auszuführen, sodass Sie tatsächlich einen allgemeinen Quellcode haben können, der dynamisch entscheidet. Sie können ein Bereitstellungsprogramm anwenden und es kann herausfinden, was auf Ihrer Maschine vorhanden ist und es dynamisch nutzen, anstatt den Benutzer dazu aufzufordern, abhängig von der verwendeten Maschine eine andere Binärdatei auszuführen.

Dies ist spannend, denn lange Zeit haben Ingenieure einen Software-Stack verwendet, der am besten für ihre Maschine war. Heutzutage möchten sie jedoch ein Programm kompilieren, das Geräte von verschiedenen Herstellern nutzen kann. Das Programm sollte entsprechend darauf reagieren können. Damit das funktioniert, muss der Compiler den Code für diese verschiedenen Geräte zuverlässig erstellen können. Hier kommt die Offenheit ins Spiel.

Einige werden argumentieren, dass ein geschlossenes System eine bessere Leistung erbringt, da die Bibliotheken und die Sprache speziell auf die Hardware-Fähigkeiten abgestimmt sind. Aber die Frage ist, wie man das Beste aus beiden Welten bekommen kann? Wenn es beispielsweise eine anbieterspezifische Implementierung für eine mathematische Bibliothek gibt, kann es ein gemeinsames Programm geben. Ein großer Teil von oneAPI besteht nicht darin, die gesamte Welt neu zu erfinden, sondern sie so zu organisieren, dass das Beste auf jeder möglichen Plattform genutzt werden kann.

OneAPI hat die Fähigkeit, Speicher und Daten zu verschieben. Verschiedene Programmiermodelle sitzen auf OneAPI auf, und es liegt an Ihnen, wie stark Sie sich in die Verwaltung des Speichers einbringen möchten. Das Herumverschieben von Daten ist teuer und verbraucht Energie, daher können Sie dem nicht entkommen. Allerdings bietet Ihnen OneAPI die Werkzeuge, um das durch Abfragen des Systems zu steuern und Ihrem Programm zur Laufzeit die richtigen, dynamischen Entscheidungen zu ermöglichen, um die beste Leistung zu erzielen.

Intel hat jahrzehntelange Erfahrung im Bau von Instrumenten zur Optimierung und Migration und verfügt über hochoptimierende Compiler. V2 hat dazu beigetragen, die Branche um Hardwarezähler auf Prozessoren herum weiterzuentwickeln, was zur Norm geworden ist. Es gibt eine Vielzahl von anderen Analysetools, die Rückmeldungen zur Struktur Ihres Programms geben, von der Suche nach Deadlocks und parallelen Anwendungen bis hin zur Identifizierung von Stellen, an denen Sie einige Sicherungen hinzufügen müssen. Intel stellt all diese Tools in einem oneAPI-Stil zur Verfügung, um vielseitiger zu sein als nur auf eine CPU bezogen.

Die ersten Gruppen, die oneAPI übernehmen, umfassen leistungsstarke Rechenzentren (HPC). Mit der Explosion neuer Computerarchitekturideen wird es eine noch größere Vielfalt und Innovation in diesem Bereich geben. Die großen Codes, die bei der Lösung der größten technischen Probleme der Welt helfen können, oder zum Beispiel pharmazeutische Probleme lösen und neue Medikamente bewerten können, erfordern die neueste und beste Hardware. Daher gewinnt das Konzept der Leistungstragfähigkeit in nationalen Laboren, Universitäten und Forschungszentren an Bedeutung.

Das heutige HPC sind die Server von morgen, daher erfordert die Fähigkeit, unterschiedliche Hardware zu nutzen, dass Softwareingenieure planen und darauf achten, wie portabel der Code ist, da Code nicht schnell stirbt; er hält Jahrzehnte lang. Innerhalb weniger Jahre werden heterogene Systeme jeden berühren, und jetzt ist die Zeit, sich darüber zu informieren.

Software-Ingenieure müssen nicht parallel programmieren können, um von oneAPI zu profitieren. Es geht darum, Dinge zu nutzen, die offen und für mehrere Hersteller und Architekturen geeignet sind. Selbst Ingenieure, die oben in der Hierarchie stehen, sollten verstehen, was sich im Stapel befindet und was er in Bezug auf Portabilität und Leistungsfähigkeit leisten kann.

Die IoT-Gemeinschaft ist eine weitere Gruppe, die in der Programmierung über diverse heterogene Rechengeräte hinweg weit voraus ist und unterschiedliche Methoden zur Verwaltung von ihnen verwendet. Ihre Rechenfähigkeiten steigen weiter an, während sich die Technologie weiterentwickelt. Daher greift hier oneAPI und kann dazu beitragen, Dinge zu formalisieren oder zu standardisieren, die zuerst in der eingebetteten Welt innoviert wurden.

Die Idee einer einzigen API hat sich von einer verrückten Idee, über die nur wenige Leute sprachen, zu einer immer mehr anerkannten Idee entwickelt, die Sinn ergibt und Probleme in ihrer Organisation löst.

Der einfachste Ort, um sich über die Initiative zu informieren, ist die Website oneapi.io. Um mehr über die Umsetzung zu erfahren, klicken Sie auf den Implementierungs-Tab, um einen Link zu finden, der zu den Intel-Implementierungen führt. Dort können Sie die verschiedenen Toolkits herunterladen. Suchen Sie nach der Intel DevCloud, um die Tools kostenlos in der Cloud auszuprobieren, auch auf unterschiedlicher Hardware. Die Website oneapi.io bietet auch eine Vielzahl von Tutorials und Ressourcen.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
