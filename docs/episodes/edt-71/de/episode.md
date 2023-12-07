---
layout: posts
title: "Moderne Datenverwaltung"
number: 71
permalink: episode-EDT71-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 71
tags:
    - datagovernance
    - data
    - immuta
    - dataaccess
    - identitymanagement
    - ceo
    - technology
    - process

date: Wed Dec 01 2021 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Matthew Carroll

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, der Chief Solution Architect bei Intel, führt seine ausführliche Diskussion über die Realität und Zukunft moderner Datenverwaltung mit Matthew Carroll, dem CEO von Immuta, fort. In dieser Episode diskutieren sie Datenklassifikation, Richtlinien und Governance."
video: "https://youtu.be/url"
description: "Darren Pulsipher, der Chief Solution Architect bei Intel, führt seine ausführliche Diskussion über die Realität und Zukunft moderner Datenverwaltung mit Matthew Carroll, dem CEO von Immuta, fort. In dieser Episode diskutieren sie Datenklassifikation, Richtlinien und Governance."
---

<div>
{% include transistor.html id="068a1dff" title="#71 Modern Data Governance" %}

{% include youtube.html id="url" %}
</div>

---

In der modernen Datenverwaltung lautet die erste Voraussetzung, dass Sie Richtlinien von der Plattform trennen müssen.

Das zweite ist, dass es keine Ontologie geben kann. Wenn jemand versucht, ein Superschema von allem zu erstellen, ist das unmöglich, aber man benötigt ein Schema, um Richtlinien anzuwenden. Wenn ein Benutzer zwei Spalten verbinden möchte, muss eine neue Richtlinie vorhanden sein. Sensible Daten müssen sowohl durch direkte als auch indirekte Identifikatoren entdeckt werden. Indirekte Identifikatoren sind schwieriger und es müssen Techniken angewendet werden, um das Risiko von Link-Angriffen zu verringern.

Die dritte Prämisse beinhaltet die Einführung einer Reihe von datenschutzverstärkenden Techniken wie Maskierung, Schwärzung, Autorisierung, usw.

Diese Werkzeuge sind als Teil moderner Datenverwaltung automatisiert. Ein paralleles Beispiel ist, wie früher ein Zauberer sein musste, um rote Augen auf einem Foto zu entfernen. Jetzt klickt man auf einen Knopf und die roten Augen verschwinden. Es ist dasselbe bei Datenschutz. Wir brauchen diesen einfachen Knopf, um automatisch potenziell indirekte Identifikatoren zu finden, bei denen eine größere als sehr geringe Risiko der Wiederidentifizierung besteht.

Neben der Privatsphäre gibt es eine Vielzahl anderer Dinge, die automatisiert werden sollten, bevor die Daten klassifiziert werden. Obwohl Immuta sich nicht mit der Datenveränderung und solchen Datenflüssen befasst, stellen sie eine API und eine Befehlszeilenschnittstelle zur Verfügung. Ingenieure, die diese Pipelines aufbauen, können ihre Arbeit erledigen, und Immuta gibt ihnen die Regeln vor, und die Aktualisierung der Regeln kann Teil der Pipeline sein. Sie wollen ein Kanal zu dieser Ebene sein.

Es gibt einige neue Rollen in diesem Bereich, wie Datenverwalter und Daten-Governance-Ingenieur, die vom Dateningenieur getrennt sind. Und dann gibt es wirklich drei separate Nutzergruppen mit drei separaten Bedürfnissen.

Zunächst einmal gibt es Datenwissenschaftler, die spezialisierte Fähigkeiten haben und Daten in einer bestimmten Art und Weise benötigen. Manchmal benötigen sie spezifische Werkzeuge und eine spezifische Rechenumgebung an einem Ort auf der Welt, um ihre Aufgabe zu erfüllen.

Auf der anderen Seite benötigen Daten- und Analyseingenieure, die einerseits Pipelines aufbauen und andererseits die Pipelines aufrechterhalten, einen schnellen Zugriff auf ein Notfallverfahren, wenn etwas kaputt geht. Sie speisen es in eine Pipeline ein und liefern es an jemanden aus und überprüfen, ob es auf dem neuesten Stand ist.

Schließlich gibt es die Gouverneure, die versuchen, mit den Vorschriften Schritt zu halten.

Diese Benutzer haben alle sehr unterschiedliche Ansichten und Bedürfnisse in Bezug auf Governance. Bei der Anwendung einer neuen Governance ist es am wichtigsten, diese Gruppen als separate Interessengruppen zu behandeln.

Wenn man all diese Rollen auf binäre Weise betrachtet, als Dateningenieure, dann endet es meist in vielen Meetings, so dass es unmöglich ist, zu skalieren. Wir müssen eine symbiotische Beziehung zwischen Datenoperationen, Datenwissenschaft, Datenanalytik und Governance schaffen. Ein Beispielmodell wäre Salesforce oder ServiceNow, wo es einen kompletten Arbeitsablauf von Anfang bis Ende gibt und keine Meetings stattfinden müssen. Dies wäre echtes Data Ops.

Immuta hat philosophisch gesehen einen attributsbasierten Ansatz anstelle eines rollenbasierten Ansatzes. Das Problem mit einem rollenbasierten Ansatz besteht darin, dass sich der Umfang immer weiter ausdehnt, da ständig neue Rollen hinzugefügt werden. Ein pharmazeutisches Unternehmen hatte beispielsweise über 800.000 Rollen, da Rollen aufgrund der Notwendigkeit der Reproduktion von Arzneimittelstudien niemals gelöscht werden können. Das Problem der Rollenüberlastung kann sich schnell zu einem Skalierungsproblem entwickeln.

Attributebasierter Zugriff ist der Schlüssel, um dem entgegenzuwirken. Anstatt ständig Rollen hinzuzufügen, haben Benutzer spezifische und konsistente Attribute. Zum Beispiel könnte ein Attribut eines Benutzers sein, dass er markiert ist, sodass er nur seinen eigenen Status sehen kann. Mit rollenbasiertem Zugriff müsste jeder Zustand, egal ob sichtbar oder nicht, aufgeschrieben werden. Dieses moderne Identitätsmanagement ist sehr skalierbar. Der Attributzugriff vereinfacht die Anzahl der Richtlinien, die geschrieben werden müssen, und hilft bei der Leistung.

Moderne globale Vorschriften wie die DSGVO erfordern jedoch auch einen Zweck. Hier kommt der Attributzugriff ins Spiel: Unter welchen Zwecken kann jede Person handeln? Gemäß einer Endbenutzer-Lizenzvereinbarung (EULA) müssen Daten nur für den angegebenen Grund von Benutzern verarbeitet werden. Andernfalls muss vor der operativen Verwendung der Daten für die Produktion eine Risikoanalyse durchgeführt werden.

Im Moment befinden wir uns am Anfang der modernen Datenverwaltung. Derzeit treffen Benutzer eine einmalige binäre Entscheidung in Bezug auf die Daten, entweder Zustimmung oder keine Zustimmung. Die Zukunft liegt irgendwo in der Mitte: begrenzte Zustimmung. Wenn eine Person zum Beispiel ihre genomischen Daten an ein Unternehmen wie ancestry.com weitergibt, was bedeutet das in Bezug auf ihr Kind? Das Kind hat keine Zustimmung dafür gegeben, dass sein genetisches Material möglicherweise von einer Krankenversicherungsgesellschaft untersucht wird, um das Risiko festzustellen. In der modernen Datenverwaltung sieht Matt Verbraucher eine begrenzte Zustimmung geben, wie zum Beispiel einer Firma nur die Analyse der DNA für Ahnenforschung und nichts anderes zu ermöglichen.

Die Zukunft muss sich um Zustimmung und zweckbasierten Zugang drehen, denn letztendlich treiben derivative Daten Erkenntnisse voran, da sich beim Entwickeln von maschinellem Lernen Daten in den Algorithmen einbetten.

Um mehr über Immuta und den Aufbau eines Datenverwaltungsprogramms zu erfahren, besuchen Sie Immuta.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
