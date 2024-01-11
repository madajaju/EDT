---
layout: posts
title: "Vertrauliches Computing in der DevSecOps"
number: 87
permalink: episode-EDT87-de
lang: de
nav_exclude: true
nav_order: 87
tags:
    - confidentialcomputing
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - sgx

date: Wed May 18 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Ofir Azoulay-Rozanes

img: thumbnail.png
image: thumbnail.png
summary: "In dieser Episode diskutieren Darren Pulsipher, Chief Solutions Architect bei Intel, und Ofir Azoulay-Rozanes, Director of Product Management bei Anjuna, die Lösungen von Anjuna für vertrauliches Computing im DevOps-Lebenszyklus."
video: "https://youtu.be/url"
description: "In dieser Episode diskutieren Darren Pulsipher, Chief Solutions Architect bei Intel, und Ofir Azoulay-Rozanes, Director of Product Management bei Anjuna, die Lösungen von Anjuna für vertrauliches Computing im DevOps-Lebenszyklus."
---

<div>
{% include transistor.html id="e31a9c3f" title="#87 Confidential Computing in DevSecOps" %}

{% include youtube.html id="url" %}
</div>

---

Anjuna's Software ermöglicht es Anwendungen, unter dem Schutz von Intels SGX zu laufen und löst das Problem des Schutzes von Daten während ihrer Nutzung. Anjunas Mission ist es, sichere Enklaven so einfach wie möglich zu gestalten. Mit Anjunas Software ist es nicht erforderlich, irgendetwas in der Anwendung zu ändern; einfach nehmen, in einer Enklave ausführen und die SGX-Technologie funktioniert direkt "out of the box". Die Software funktioniert mit jeder App in jeder Cloud und in jedem Umfang.

Die globale Software-Lieferkette wird angegriffen. Insbesondere war SolarWinds ein Angriff auf DevOps und obwohl es Ideen gab, wie man das Problem lösen könnte, wurde es noch nicht abgesichert. Die Anjuna-Technologie kann eine einfache Lösung sein. Es besteht kein Bedarf, Ihre Software neu zu konzipieren oder Methoden zu ändern. Sie können sie in sicheren Umgebungen ausführen.

Als Darren Anjuna-Software ausprobierte, erstellte er einen Stapel mit Intel SGX an der Unterseite, Red Hat OpenShift, Anjuna für den vertraulichen Computing-Bereich und HashiCorp's Vault zur Speicherung eines sicheren Hauptbuchs. Er war schockiert, wie schnell die Lösung innerhalb einer Woche einsatzbereit war.

Darren nennt diesen Prozess die gehärtete DevSecOps-Pipeline, obwohl es viele bewegliche Teile gibt. Ofir stimmt dieser Terminologie zu, da es sich um einen neuen, mit SGX-Hardware-Technologie gehärteten DevOps-Prozess handelt, der mit Anjunas Software läuft.

Vertrauliches Computing oder eine sichere Enklave löst das Problem des Datenschutzes. Wenn Sie Daten in persistentem Speicher speichern, ist die Lösung für Daten im Ruhezustand bereits vorhanden. Für Daten im Transit gibt es auch eine Lösung mit TLS. Das Sichern von Daten während der Verwendung wurde bisher nicht gelöst, da die Anwendung darauf zugreifen muss, während die Daten im Klartext im Speicher sind. Sie können nicht gleichzeitig verschlüsselt und in Verwendung sein. Dies ist ein endloser Kreislauf von Problemen. Wenn ein böswilliger Akteur Zugriff auf eine Maschine hat, auf der die Anwendung ausgeführt wird, ist ein Hack so einfach wie der Zugriff auf das Gerät, Identifizieren des Prozesses und Erstellen eines Speicherabbilds. So erhält er alle Geheimnisse und vertraulichen Daten, die aufgezeichnet sind, und sie sind nicht verschlüsselt. Dies beinhaltet auch die Verschlüsselungsschlüssel für Daten im Ruhezustand und beim Transport, da die Software sie verwenden muss, um zu verschlüsseln. Der schlechte Akteur wird Zugriff auf das gesamte System haben.

Das Problem ist gelöst, wenn Sie die verschiedenen Anwendungen in sicheren Enklaven ausführen. Selbst wenn jemand Zugriff auf die Maschine hätte, hätte er keinen Zugriff auf den Speicher jeder Anwendung. Das bedeutet nicht, dass Sie Schwachstellen nicht beheben müssen, aber Sie sind wesentlich weniger gestresst, sie so schnell wie möglich zu beheben. Sogar wenn es Kernel-Schwachstellen gibt, kann der Kernel nicht auf den Speicher zugreifen, wenn etwas in einer sicheren Enklave läuft.

Anjuna Software läuft sowohl auf anderen hardwarebasierten Technologien als auch auf SGX. Im Gegensatz zur Verschlüsselung in Software, bei der die Leistung erheblich beeinträchtigt würde, kann Anjuna die Konfiguration feinabstimmen, um Ihre Anwendung mit einer vernachlässigbaren Leistungseinbuße auszuführen: weniger als fünf Prozent.

Möglicherweise möchten Sie noch nicht alles in einer sicheren Enklave speichern, aber es ist die Zukunft in Bezug auf Sicherheit.

Einer der Verwendungszwecke für eine sichere Enklave besteht darin, Daten in einem sicheren Hauptbuch zu speichern, die verschiedene Schritte in der DevOps-Pipeline durchlaufen. Das Hauptbuch enthält alles, was in den Build, Sicherheitsschlüssel und Hash-Werte zur Überprüfung eingeflossen ist. Diese Überprüfungs-Hashs müssen während des gesamten Zyklus unverändert bleiben, damit niemand Code, Bibliotheken oder Binärdateien in das von Ihnen gelieferte Paket einschleusen kann. Alles sollte in einem Container in der modernen Welt ausgeführt werden.

Ein weiterer Kandidat für den Schutz ist ein Signaturschlüssel. Ohne sichere Enklaven müssen Sie, sobald Sie eine fertige Binärdatei haben, diese in einen dunklen Raum bringen, auf den niemand Zugriff hat. Aber dort unterschreiben drei Personen mit drei verschiedenen Schlüsseln. Sichere Enklaven ermöglichen den Zugriff auf diesen Signaturschlüssel in Ihrer vertrauten Umgebung, aber nur die Enklave wird darauf zugreifen. Es basiert auf der komplexen Identität der im SGX-Enklave ausgeführten Software, die über das Attestierungsquote implementiert wird. Mit anderen Worten, Sie können Enklave zu Enklave beglaubigen. Sie können auch Dinge beglaubigen, die außerhalb von Enklaven ausgeführt werden. Es ermöglicht Ihnen, Software, die an einem anderen Ort läuft, zu vertrauen.

Die Zusammenstellung von Binärdateien ist eine weitere Verwendung. Eines der großen Probleme im Verteidigungsministerium ist zum Beispiel, dass sie garantieren möchten, dass alles, was in den Build eingeht, auf den Entwickler zurückverfolgt werden kann, der es geschrieben hat. Besonders in eingebetteten Systemen, in denen Software multimillionenschwere Maschinen steuert, die Menschenleben retten oder gefährden können. Es muss eine vollständige Rückverfolgbarkeit geben, um Rechenschaftspflicht zu gewährleisten und eine sichere Entwicklung durchzuführen.

Neben Speicherabbildangriffen löst Anjuna ein weiteres Angriffsproblem. Es stellt sicher, dass in Fällen, in denen auf den Kernel zugegriffen werden muss, alles geschützt wird, was in der Interaktion zwischen der Enklave und der Außenwelt abgedeckt werden muss. Es kann auch davor schützen, auf Code zuzugreifen und Geheimnisse nur für die Enklave verfügbar zu machen. Darüber hinaus wird, falls jemand Zugriff auf eine Maschine erhält, weder ein TLS-Zertifikat noch der zur Verschlüsselung verwendete Schlüssel im Klartext gefunden.

Jeder Cloud-Dienstanbieter bietet sichere Enklaven an, und Anjuna unterstützt sie alle. Sie unterstützen auch On-Prem-Technologien. Zusätzlich zu dem Hauptangebot kann Anjuna auch die Möglichkeit bieten, Ihre Daten ruhend und während der Übertragung zu verschlüsseln, ohne Ihre Software zu ändern, selbst in Legacy-Anwendungen oder neuen Anwendungen, die nicht jede Datendatei verschlüsseln unterstützen.

Für weitere Informationen besuchen Sie anjuna.io oder werfen Sie einen Blick auf ein Whitepaper von Darren und Ofir auf embracingdigital.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
