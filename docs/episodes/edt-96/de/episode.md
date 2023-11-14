---
layout: posts
title: "Die Nutzung virtueller Rechenzentren mit Verge.io."
number: 96
permalink: episode-EDT96-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 96
tags:
    - privatecloud
    - cloud
    - compute
    - technology
    - sdi
    - virtualdatacenter
    - vergeio

date: Wed Jul 20 2022 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Aaron Reid
    - Chris Lehman

img: thumbnail.png
image: thumbnail.png
summary: "Intel's Darren Pulsipher, Chief Solutions Architect, und Aaron Reid, Principal Systems Engineer, sowie Chris Lehman, Senior VP of Sales, diskutieren Anwendungsfälle für die Virtual Data Center-Software von Verge.io."
video: "https://youtu.be/oYZH273nhUU"
description: "Intel's Darren Pulsipher, Chief Solutions Architect, und Aaron Reid, Principal Systems Engineer, sowie Chris Lehman, Senior VP of Sales, diskutieren Anwendungsfälle für die Virtual Data Center-Software von Verge.io."
---

<div>
{% include transistor.html id="dd535cf2" title="#96 Leveraging Virtual Datacenters with Verge.io" %}

{% include youtube.html id="oYZH273nhUU" %}
</div>

---

Aaron ist seit über 20 Jahren im IT-Bereich tätig. Er ist ein Vertriebsingenieur und spricht mit Kunden über den Wert und die Funktionen von Verge.io und hilft ihnen dabei, ihre Anforderungen zu definieren.

Chris ist der Vertriebsleiter bei Verge.io und verfügt über 25 Jahre Erfahrung in Technologie-Softwareunternehmen. Er beschreibt Verge.io als Unternehmen, das einen obsessiven Fokus auf Kundenzufriedenheit und Erfolg mit der Software hat.

Der Begriff "virtuelles Rechenzentrum" dient der Vereinfachung. Die Plattform ist mandantenfähig, sodass eigenständige verschachtelte Mandanten mit allen erforderlichen Ressourcen innerhalb eines Rechenzentrums isoliert sind, von der CPU über den Speicher bis hin zur Netzwerkkonnektivität. Gleichzeitig können Sie diese bei Bedarf erstellen. Genau wie Sie eine virtuelle Maschine (VM) bei Bedarf erstellen können, oft mit einer Vorlage, können Sie dasselbe mit einem Mandanten tun, der alles im virtuellen Rechenzentrum umfasst. Sie können sie entweder über einen Rezept-Engine oder von Grund auf erstellen. Sie können problemlos eine Kopie erstellen oder einen Snapshot von einem dieser Mandanten aufnehmen.

Diese virtuellen Rechenzentren können groß und komplex sein. Der größte Kunde von Verge.io betreibt über 60 Knoten und mehrere Mieter in ihrer Umgebung. Die einzigen Einschränkungen sind das, was im Backend-Verge.io-Cluster eingebaut ist. Angenommen, Sie haben zum Beispiel vier Terabyte Arbeitsspeicher, 100 Terabyte Speicher und 64 Kerne in Ihrer CPU. Sie könnten all diese Ressourcen diesem Mieter zuweisen, sie jedoch aufteilen, wie Sie möchten, zur Hälfte oder in Drittel und die Mieter auf diese Weise erstellen.

Wenn Sie zum Beispiel einige Knotenpunkte der Entwicklung, einige der Tests und den Rest der Produktion zugeordnet haben, wären dies verschiedene Mandanten. Sie können Schnappschüsse zwischen ihnen erstellen und in die Produktion verschieben. In diesem Fall können Sie sogar mehrere Produktionsumgebungen mit Blue-Green-Updates haben.

Viele Kunden von Verge.io sind verwaltete Dienstanbieter. Sie verwenden Multimandantenfähigkeit für ihre Endbenutzerkunden und stellen damit sichere Umgebungen mit Null-Vertrauen bereit. Kunden können ihre Cloud-Umgebung haben und virtuelle Arbeitslasten nach Bedarf bereitstellen.

Es gibt auch bedeutende Anwendungsfälle für Unternehmenskunden im IT-Bereich, die beispielsweise blue-green Dev-Test-Umgebungen wünschen oder unterschiedliche Umgebungen mit verschiedenen Sicherheits-Compliance-Anforderungen wie SOX oder HIPAA haben können. Verge.io hat mehrere große Bildungseinrichtungen als Kunden, die sich mit konformen Forschungsaktivitäten beschäftigen. Sie zertifizieren ihren Cluster einmalig und können dann innerhalb einer Stunde eine konforme Forschungsumgebung an einen ihrer Forscher liefern. Früher dauerte es Monate, um eine konforme Umgebung einzurichten und betriebsbereit zu machen.

Für Updates müssen Benutzer zwar Tools auf Anwendungsebene oder innerhalb von VM-Aufgaben verwenden, aber die Umgebungs-"Rezepte" für Dinge wie Firewall-Regeln oder Konfigurationseinstellungen zur Zuordnung von Ressourcen zu Arbeitslasten können nahtlos aktualisiert werden. Sie können auch eine VM in einer laufenden Umgebung mit neuer Konformität nehmen und in eine neue Umgebung verschieben.

Verge.io ist auch hilfreich für Sicherheit. Eine der größten quantitativen Firmen in Europa ist ein gutes Beispiel für die Anwendung von Sicherheit. Sie machen ein Foto ihrer gesamten Umgebung und führen dann Red- und Blue-Team-Übungen durch, um Sicherheitslücken zu finden, Patches zu überprüfen, usw.

VDI kann in der Umgebung ausgeführt werden. Verge.io arbeitet mit einem Unternehmen zusammen, um VDI-Unterstützung anzubieten. Verge.io kontrolliert die Ressourcen, die CPU und den Arbeitsspeicher. Sie unterstützen auch GPU und GPU-Passthrough sowie physische GPU. Dies ist ein bedeutender Anwendungsfall für einige Kunden, insbesondere in den Bereichen Ingenieurwesen oder Öl- und Gasbelastungen. Die virtuelle GPU ermöglicht günstige wirtschaftliche Bedingungen, da die Kosten auf mehrere Benutzer verteilt werden.

Eine perfekte Lösung für Verge.io sind Edge-Anwendungsfälle. Ein typisches Beispiel ist der Point of Sale. Wenn ein Einzelhandelskunde hundert Filialen hat, benötigt er möglicherweise zwei oder drei VM-Anwendungen pro Filiale. Da Verge.io eine geringe Hardware-Grundfläche hat, können Sie, sobald Sie mindestens zwei Server haben, diese in das Edge-Data-Center stellen und diese VMs erstellen. Dank der Snapshot- und Replikationsfunktionen können diese Konfigurationen in allen verschiedenen Umgebungen kopiert und eingefügt werden. Sie können die neuesten Konfigurationen in allen von ihnen aktualisieren, nicht nur Betriebssystem-Patches, sondern auch Firewall-Regeln.

Eine spannende Zukunftsperspektive für Verge.io liegt in automatisierten Fahrsystemen aufgrund des Datenvolumens. Viele Anbieter testen ihre Fahrzeuge an abgelegenen Standorten und verschicken physisch die Festplatten. Stell dir vor, wenn die Daten vor Ort verarbeitet werden könnten, vollständig redundant und mit den damit verbundenen überzeugenden Kosten, dann könnten die Daten in einem weiten Bereich transportiert werden, anstatt auf einer Festplatte und einem LKW.

Für weitere Informationen zu Verge.io besuchen Sie http://verge.io.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
