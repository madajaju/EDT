---
layout: posts
title: "Die Zerstörung der Komplexität der Speicherstufen"
number: 20
permalink: episode-EDT20-de
has_children: false
lang: de
nav_exclude: true
parent: Folgen
grand_parent: Deutsch
nav_order: 20
tags:
    - data
    - optane
    - technology
    - storage
    - vastdata

date: Tue Sep 08 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Randy Hayes

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Randy Hayes von VAST Data und Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, diskutieren die innovative Speicherarchitektur von VAST Data, die den Bedarf an Ebenen durch die Verwendung von NVMe über Fabrics, QLC-Flash und 3D XPoint Optane beseitigt."
video: "https://youtu.be/url"
description: "Randy Hayes von VAST Data und Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, diskutieren die innovative Speicherarchitektur von VAST Data, die den Bedarf an Ebenen durch die Verwendung von NVMe über Fabrics, QLC-Flash und 3D XPoint Optane beseitigt."
---

<div>
{% include transistor.html id="a3a3329f" title="#20 Destroying the Complexity of Storage Tiers" %}

{% include youtube.html id="url" %}
</div>

---

## Dreißig Jahre Speicher-Komplexität.

Speicherung mag ein altes Konzept sein, aber VAST Data hat sich in nur etwas mehr als einem Jahr nach Einführung der Einnahmeversand zu Einhornstatus katapultiert. VAST hat die alte Architektur von mehrstufigen Speichersystemen durch ein einziges, monolithisches System ersetzt, das schnell und kosteneffektiv ist. Die VAST-Lösungen beseitigen auch das Problem großer, unübersichtlicher Speichersysteme, die aus verschiedenen Dateisystemen und Architekturen bestehen.

## Eine Stiftung für eine neue Architektur

Der Gründer von VAST betrachtete den Speicher aus einer völlig neuen Perspektive. Er stellte fest, dass Kunden nicht unbedingt mehr Leistung von Flash benötigten, sondern stattdessen Unterstützung für Datei- und Objektspeicherung zu geringeren Kosten. Er machte sich drei Technologien zunutze, die vor 2018 nicht existierten. Erstens NVMe über Fabrics, das als Art hyperskalares SAN verwendet wird, um alles mit geringer Latenz zu verbinden. Als nächstes QLC-Flash, da es kostengünstig ist und keine beweglichen Teile wie Festplatten hat. Drittens Intels 3D XPoint Optane. Optane bietet Read-Write-Parität und hohe Ausdauer zu einem vernünftigen Preis. Die Kombination dieser drei Technologien ermöglicht es VAST, Kunden eine All-Flash-Leistung zu bieten, aber zu einem Preis, der vergleichbar ist mit dem einer Festplatte. Es beseitigt die Notwendigkeit für andere Ebenen, die Organisationen kaufen, weil sie günstig sind.

## Vorstellung von Vast Data Universal Storage

Das VAST-System ist die erste disaggregierte, gemeinsam genutzte Architektur für alles. Das bedeutet, dass die Logik vom Zustand des Dateisystems getrennt ist. Stattdessen existiert der Zustand des Dateisystems in Datenspeichern, die QLC-Flash und Optane enthalten. Die Optane wird als großer Metadatenspeicher verwendet. Sie ist vielseitig einsetzbar, genau wie das System, das als Universal Storage vermarktet wird. Mit diesen Speichern gibt es keinen einzelnen Ausfallpunkt, wodurch die Kapazität theoretisch unbegrenzt ist. (VAST hat das System bei etwa 50 Petabyte in einem einzigen Dateisystem getestet.) Sie können die Kapazität erweitern, indem Sie einfach kostengünstige x86-Server in die Cluster hinzufügen. Da es sich um ein paralleles Dateisystem handelt, kann jeder Benutzer über einen beliebigen Server auf beliebige Daten zugreifen, als wären sie direkt angeschlossen. Dadurch können Sie weiterhin skalieren.

Sie können die Leistung unabhängig von der Kapazität skalieren. Das einzige, was die Leistung des Flashs behindern würde, ist die CPU. Durch die nahtlose Skalierung der Anzahl der CPUs im Cluster können Sie die Leistung steigern.

Eines der Probleme, das mit dieser Struktur gelöst wird, ist die Latenz. Viele Organisationen benötigen eine geringe Latenz für alle ihre Daten. Da jeder dieser statenlosen Server Zugriff auf alles hat, haben Sie schnellen Zugriff auf alle Daten.

## DASE-Architektur: Server-Pools

Ein weiterer großer Vorteil ist, dass es einfach ist, den Speicher einer Organisation feinabzustimmen. Die zusammensetzbare Natur der zustandslosen Server und das Fehlen von Kommunikation zwischen ihnen ermöglicht es Ihnen, einen Cluster so aufzubauen, dass er Ihren Bedürfnissen am besten entspricht. Sie können zum Beispiel Ihre Steuerungseinheiten je nach unterschiedlicher Arbeitsbelastung segmentieren, aber sie haben alle Zugriff auf dieselben Daten.

Darüber hinaus funktioniert das System gut mit einer Organisation, die verschiedene Klassifikationsebenen benötigt, um auf die Daten zuzugreifen. Sie haben die Möglichkeit, zu segregieren, auf welche Benutzer zugreifen können, indem Sie mehrere Zugangszonen mit virtuellen IP-Adressen erstellen. Eine der Herausforderungen bei NFS besteht darin, dass es im Grunde an alles broadcastet. Wenn Sie die Broadcasts auf eine Teilmenge von IP-Adressen beschränken, erhalten Sie die Möglichkeit, diese verschiedenen Architekturen in separate Systeme aufzuteilen.

## Universelle Speicherbrücken-Anwendungseras

Dies ist nicht nur eine Lösung für HPC-Cluster; sie ist nicht kostenintensiv. Viele Unternehmen nutzen VAST zunächst zur Sicherung, um Vertrauen aufzubauen. Zum Beispiel hat das National Cancer Institute ein Bandbibliotheksarchiv und wollte auf die Informationen schneller zugreifen können. Sie haben sich verschiedene Plattformen angesehen und VAST kam mit einem niedrigeren Preispunkt und für All-Flash, was schneller ist als ihr Produktions-NAS-System. Die Lösung hat also einen guten Preis und ist nützlich für allgemeines Dateifreigeben und eine Vielzahl von Workloads wie Künstliche Intelligenz, Protokollanalyse, Splunk, usw., nicht nur für HPC. Die VAST-Lösungen sind einfach zu verwalten und wirklich universell.

VAST ist ein junges Unternehmen, aber sie haben mehrere Installationen in Regierungsbehörden wie dem National Institute of Health und den Tri-Labs des Department of Energy, wo Spitzenleistung für diese Supercomputer erforderlich ist. Dies ist ein leistungsstarkes System in einigen der größten HPC-Umgebungen der Welt, das missionkritische Anwendungen unterstützt.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
