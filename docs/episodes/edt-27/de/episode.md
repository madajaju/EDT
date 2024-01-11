---
layout: posts
title: "Hardware-Sicherheit: Unabdingbar für die Transformation von Daten"
number: 27
permalink: episode-EDT27-de
has_children: false
lang: de
nav_exclude: true
parent: Folgen
grand_parent: Deutsch
nav_order: 27
tags:
    - datagovernance
    - data
    - sgx
    - confidentialcomputing
    - cybersecurity
    - technology

date: Tue Oct 27 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Jesse Schrater

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Public Sector, Intel, und Jesse Schrater, Security Manager, Data Platforms Group, Intel, diskutieren die aktuelle Sicherheitslandschaft und wie Intels SGX und das Partner-Ökosystem eine zeitnahe und bewährte Lösung für Daten in Verwendung und andere Sicherheitsbedenken bietet."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solution Architect, Public Sector, Intel, und Jesse Schrater, Security Manager, Data Platforms Group, Intel, diskutieren die aktuelle Sicherheitslandschaft und wie Intels SGX und das Partner-Ökosystem eine zeitnahe und bewährte Lösung für Daten in Verwendung und andere Sicherheitsbedenken bietet."
---

<div>
{% include transistor.html id="360a1ce9" title="#27 Hardware Security: Imperative for Transforming Data" %}

{% include youtube.html id="url" %}
</div>

---

## Datensicherheitslandschaft

Die Welt ist durch alle Geräte unglaublich vernetzt geworden, und dies treibt ein exponentielles Wachstum in der Menge an Daten voran, die wir verwalten müssen: je mehr Volumen, desto mehr Risiko. Es ist eine Herausforderung, und die Nutzung neuer Rechenkapazitäten wie Cloud, Analyse und Edge Computing führt zu zusätzlicher Komplexität.

Es gibt drei wichtige Trends in der Sicherheit: die Verschlüsselung von allem, die Isolierung der Arbeitsbelastung und eine Vertrauenskette. Diese drei Bereiche sind wichtig, um Organisationen bei der Bewältigung steigender behördlicher Anforderungen zum Schutz von Daten zu unterstützen.

Wenn Organisationen sich entscheiden, eine digitale Transformation vorzunehmen oder beispielsweise aufgrund eines Katalysators wie COVID-19 auf Fernarbeiter angewiesen sind, müssen Sicherheitsmaßnahmen an erster Stelle stehen, um Sicherheitskontrollen und Compliance aufrechtzuerhalten. Wenn Sie Sicherheit bereits bei Ihren Bereitstellungen und Implementierungen berücksichtigen, können Sie nachhaltig Ihr Geschäft transformieren.

## Schützen Sie Daten während ihres Lebenszyklus.

Die Verschlüsselung von Daten ist in allen Phasen wichtig. Historisch gesehen konnten Angreifer Zugriff auf Daten direkt über das Netzwerk erhalten. Nachdem diese verschlüsselt wurden, begannen sie in die Rechenzentren einzudringen und Daten aus den Datenbanken zu ziehen. Deshalb begannen wir, die Speicherung zu verschlüsseln. Dennoch gelangen die Daten an einen Endpunkt und werden in den Speicher geladen und entschlüsselt. Somit könnte ein raffinierter Angriff mit Root-Zugriff gegebenenfalls die Daten an diesem Verarbeitungspunkt abfangen oder manipulieren. Dieser Angriff auf Daten während der Nutzung ist die neue Herausforderung für Angreifer und diejenigen, die den Raum verteidigen. Intel hat einige aufregende und innovative neue Funktionen, die wir in unsere Prozessoren integrieren, um Datenbesitzern, Anwendungsbesitzern, Dienstleistern und im Grunde dem gesamten Ökosystem zu helfen, diese potenziellen Schwachstellen zu schließen.

## Warum Daten im Gebrauch schützen?

In vielen Fällen nutzen Angreifer Privileg-Eskalationen auf der Betriebssystem- oder Hypervisor-Ebene. Sie könnten über ein Gastbetriebssystem, ein Host-Betriebssystem oder sogar physischen Hardwarezugriff auf den Server erfolgen. Die Angreifer könnten klassische Hacker-Malware-Typen, Wettbewerber von Drittanbietern oder Insider wie ein Administrator oder Systemadministrator bei einem Dienstleister sein.

## Intel Software Guard Extensions (Intel SGX) translates to "Intel Software Guard Extensions (Intel SGX)" in German.

Intel hat eine neue Technologie in unsere Prozessoren namens Intel Software Guard Extensions, oder SGX, integriert. Dies ist Teil des vertraulichen Computing-Paradigmas, das derzeit auf dem Markt boomt, da Unternehmen versuchen, ihre Daten zu transformieren und privat zu halten. SGX behebt diese neuen Arten von Angriffen, indem es der Anwendung ermöglicht, direkt mit dem Prozessor im verschlüsselten Speicher zu kommunizieren und das Betriebssystem, den Hypervisor und im Wesentlichen alles andere im System zu umgehen. Selbst wenn Ihr Betriebssystem, Hypervisor oder andere Anwendungen gehackt werden, können Angreifer nicht auf diese Daten zugreifen, da das Betriebssystem selbst keine Sichtbarkeit für diese Daten hat. Daher müssen Sie dem Anbieter oder dem restlichen System-Stack nicht vertrauen, da Sie im Grunde genommen davon ausgehen, dass sie bereits kompromittiert sind, und Ihr Code und Ihre Daten vertraulich und unverändert bleiben werden; sie werden Integrität aufweisen.

Intel versucht, es so zu gestalten, dass Sie auf möglichst wenige Komponenten vertrauen müssen. SGX geht für das Rechenzentrum weiter als alles andere, was wir bisher gesehen haben. Sie müssen lediglich Ihrer eigenen Anwendung und dem Prozessor selbst vertrauen.

SGX bietet eine leistungsstarke Möglichkeit für Unternehmen wie Cloud-Dienstleister, die ihren Kunden mitteilen können, dass weder sie noch die Regierung beispielsweise auf Ihre Daten zugreifen können, selbst wenn sie es wollten.

## Intel SGX in Aktion

SGX wird bereits umfassend von Cloud-Service-Providern und Softwareanbietern genutzt, aber in gewisser Weise fangen wir gerade erst an. Obwohl diese Technologie seit einigen Jahren existiert, haben wir Ökosysteme integriert und bringen neue Fähigkeiten in unseren kommenden Xeon Ice Lake-Prozessoren der dritten Generation ein. Dadurch werden sich die Kapazitäten erweitern, die Skalierbarkeit auf umfangreiche Unternehmens-Workloads verbessern und es wird möglich sein, deutlich größere Speicherbereiche mit besserer Leistung und in einem viel breiteren Umfang im Mainstream-Rechenzentrum zu schützen.

Intel ist eines der Gründungsmitglieder des Confidential Computing Consortium, das Teil der Linux-Stiftung ist. Die meisten großen Cloud-Service-Anbieter, viele Software-Anbieter und sogar unsere anderen Silizium-Konkurrenten arbeiten gemeinsam an Lösungen für vertrauenswürdige Ausführungsumgebungen und setzen Standards für den Umgang mit dieser Art von Fähigkeit. Wir schaffen auch Bewusstsein für die Notwendigkeit und den Geschäftswert des vertraulichen Rechnens.

## Intel SGX Software Partner Ecosystem auf Deutsch übersetzen

SGX bietet eine Vielzahl von Nutzungsoptionen, abhängig davon, wonach der Datenbesitzer sucht. Wenn ein Kunde das feinste Maß an Kontrolle wünscht, ermöglicht SGX ihnen genau das. Tatsächlich können sie ihre Anwendung im Wesentlichen auf die codierten Daten reduzieren, die sie vom Rest des Systems isoliert halten möchten, oder sogar nur einen Teil dieser Anwendung. Diese Szenario erfordert jedoch, dass sie die Anwendung für diesen Zweck schreiben. Im Ökosystem gibt es Open-Source-Ressourcen, die diese Art der Entwicklung viel einfacher machen, und es wird ständig erweitert.

Auf der anderen Seite gibt es einen schnellen Pfad zum Anheben und Verschieben. Sie können Ihre Anwendung nehmen und in eine sicherere Umgebung verschieben. Das Ökosystem reagiert und erstellt SGX-bewusste Container. Sie könnten Ihre unveränderte Anwendung in dieser Umgebung ablegen, in der nur sie allein ausgeführt wird, sodass die Anwendung selbst denkt, dass sie in ihrer nativen Umgebung läuft.

Unsere Ökosystempartner haben in diesem Bereich mit Dingen wie Fortanix, Graphene und Scone viele Fortschritte gemacht. Einige sind Open Source und einige sind proprietär, aber sie bieten bereits alle Dienste. Zum Beispiel bietet Microsoft Azure Confidential Computing die gesamte Palette von Lift-and-Shift-Lösungen mit SGX bis hin zu SDKs, mit denen Sie Ihre Anwendung direkt dafür entwickeln und in ihrer Umgebung bereitstellen können, sodass Sie sich nicht einmal um die Hardware kümmern müssen. Es gibt eine vollständige Auswahl an Optionen, sodass niemand Angst vor den Komplexitäten von SGX haben sollte. Kunden sollten auch darauf vertrauen können, dass sensible Materialien wie Machine Learning-Algorithmen oder Verschlüsselungsschlüssel mit einem sehr granularen Schutzniveau behandelt werden.

## Vertrauliches Computing: Eine sicherheitsrelevante Neuerung.

SGX ist schon seit einiger Zeit auf dem Markt und wir haben daran gearbeitet, es zu erweitern. Es wurde getestet und durch Hunderte von Forschungspapieren geprüft und mit Updates immer weiter verbessert. Es hat den Vorteil, nicht mehr das neue Kind auf dem Block zu sein, sondern eine grundlegende Lösung, die mit Ice Lake in den Mainstream gebracht wird. Es konzentriert sich nicht mehr nur auf kleine, sensible Bereiche, sondern ist jetzt bereit für große Aufgaben.

Die Regierung, Finanzdienstleistungen und das Gesundheitswesen sind einige der Branchen, die frühzeitig das Potenzial der SGX erkannten. Dies liegt daran, dass in diesen Branchen strenge behördliche Anforderungen und Datenschutzrichtlinien gelten, gleichzeitig jedoch der Wunsch besteht, Daten zu teilen und innovative Lösungen mit verschiedenen Parteien zu entwickeln. Unternehmen stehen vor ähnlichen Herausforderungen, zum Beispiel wenn sie in die öffentliche Cloud wechseln möchten, aber Bedenken hinsichtlich des Schutzes ihrer sensiblen Daten haben. Mit SGX müssen sie dem Anbieter nicht vertrauen.

Intel hat gerade eine große Ankündigung in diesem Monat gemacht, und wir öffnen wirklich die Tore zu den kommenden Dingen. Ein großartiger Ausgangspunkt ist intel.com/sgx für Testimonials und einen tieferen Einblick in die Informationen. Kunden sollten nach den Ökosystempartnern wie Azure und Fortanix suchen. Ein weiterer Ort für Informationen ist das Confidential Computing Consortium aufgrund der Anzahl der Menschen, die in diesem Bereich arbeiten.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
