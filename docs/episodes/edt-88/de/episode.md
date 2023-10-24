---
layout: posts
title: "Kollaborative DevSecOps"
number: 88
permalink: episode-EDT88-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 88
tags:
    - cybersecurity
    - devsecops
    - rpa
    - technology
    - compute
    - zerotrust
    - zta

date: Mon May 23 2022 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Mike Fraser
    - Callen Sapien

img: thumbnail.png
image: thumbnail.png
summary: "In dieser Folge spricht Darren mit Callen Sapien, dem Direktor für Produktmanagement bei Sophos Factory, und Mike Fraser, dem VP für DevSecOps, über ihr Produkt, das wirklich kollaboratives SecDevOps ermöglicht."
video: "https://youtu.be/4wm1mLse5eM"
description: "In dieser Folge spricht Darren mit Callen Sapien, dem Direktor für Produktmanagement bei Sophos Factory, und Mike Fraser, dem VP für DevSecOps, über ihr Produkt, das wirklich kollaboratives SecDevOps ermöglicht."
---

<div>
{% include transistor.html id="7c72a8c7" title="#88 Collaborative DevSecOps" %}

{% include youtube.html id="4wm1mLse5eM" %}
</div>

---

Mike's Erfahrung als Cybersecurity-Ingenieur in der Luftwaffe und seine anschließende Arbeit in den Bereichen Entwicklung, Sicherheit, Betrieb und Managed Services führten ihn zu dem Ziel, ein Produkt zu schaffen, das kollaborativ sein könnte, um moderne Automatisierung um das zu bauen, was er IT als Code nennt. Er wollte DevSecOps ganzheitlich betrachten und alle Beteiligten zusammenbringen.

Sein resultierendes Produkt, Sophos Factory, schafft moderne Lösungen rund um Bausteine mit den Funktionen, der Funktionalität und der Benutzererfahrung, die über das gesamte Spektrum technischer Talente genutzt werden können. Dies war ein komplexes Problem, das visuell arbeitende Personen, Entwickler, die programmieren, usw. einschloss. Es musste auch die Lücke zwischen Hardware und Software überbrücken und dabei einen agilen Prozess über Teams hinweg verwenden.

Die Sophos Factory ist mehr als nur eine CI/CD-Pipeline. Das ist nur ein kleiner Teil des gesamten Systems, das von Entwicklung über Sicherheit, Betrieb und Bereitstellung reicht und Funktionen wie einen visuellen Builder, DSL und Unterstützung für alle Inhalte im nativen Format bietet. Außerdem integriert es sich in bestehende Systeme. Es bringt alle verschiedenen Teams und die verschiedenen Werkzeuge, die sie verwenden, zusammen. Daher geht es weit über das Erstellen einer Pipeline oder Automatisierung hinaus.

Einzelne Benutzer werden mit den ihnen vertrauten Modulen präsentiert, aber alle mit der gleichen Benutzeroberfläche. Zum Beispiel kann eine Reihe von Skripten aus einem visuellen Format erstellt werden. Ein Sicherheitsexperte kann dieselbe Benutzeroberfläche mit den erwarteten Tools und Artefakten nutzen. Ein Full-Stack-Entwickler oder ein DevOps-Ingenieur kann alle Artefakte einbinden und auf eine Weise erstellen, die von anderen Teams genutzt werden kann. Es geht nicht um die Erstellung einer Pipeline für automatische Prozesse, sondern um ein verbindendes Gewebe zwischen verschiedenen Systemen.

Integration bedeutet die Übertragung von Daten, aber es beinhaltet auch Aktionen. Angenommen, jemand verwendet auf der Codeseite Jira, auf der IT-Betriebseite ServiceNow und auf der Sicherheitsseite ein Stück zur Vorfallreaktion. In diesem Fall können Sie all diese Teile integrieren und etwas an Slack senden, damit alle eine Übersicht haben und nahezu in Echtzeit reagieren können.

Sophos Factory verpackt Module in Pipelines zur Wiederverwendbarkeit, die zu Bausteinen werden. Diese können um verschiedene Anwendungsfälle herum erstellt werden, aber das Ziel ist, etwas zu schaffen, das immer wieder verwendet werden kann. Zum Beispiel, nehmen wir an, Sie verwenden ServiceNow und möchten ein Ticket erstellen. In diesem Fall verwenden Sie dies für verschiedene andere Anwendungsfälle rund um Netzwerkautomatisierung, Infrastrukturautomatisierung, Cloud, native Sicherheit, usw. Es geht um den Aufbau von Lösungen, nicht nur um die Automatisierung dieser Dinge. Der letzte Teil ist zukunftssicher, nicht nur wiederholbar. Sie können der gesamten Pipeline Dinge hinzufügen oder entfernen, was mit Hardware nicht möglich ist, aber auch sehr schwierig mit bestehenden Systemen wie CI/CD-Systemen, die für die Bereitstellung von Software in Produktion gemacht sind, ist, um ganzheitlich eine Lösung aufzubauen und den Lebenszyklus im Laufe der Zeit aufrechtzuerhalten.

Mit der Sophos Factory-Technologie können Sie verschiedene Tools verpacken, um Standards wie CIF oder NIST 853 einzuhalten und sie als Low-Code- oder No-Code-Pipelines zur Verfügung zu haben. Sophos Factory unterscheidet sich von anderen Automatisierungstechnologien durch das Teilen über Lösungskataloge. Sie können Automatisierungsbaukasten veröffentlichen, vollständige Lösungen erstellen oder von anderen Teams erstellte Automatisierung nutzen. Dies schafft eine enorme Flexibilität.

Die Versionskontrolle ist in die Pipelines und Lösungskataloge integriert. Wenn Sie eine Lösungspipeline von einer von jemand anderem veröffentlichten Aufzeichnung verwenden, können Sie sie auf die gewünschte Version setzen oder die neueste Version abrufen, um Aktualisierungen zu erhalten. RBAC ist auch Teil des Systems, falls Sie nur bestimmten Benutzern beispielsweise einen Lesezugriff ermöglichen möchten. Mit der Interoperabilität von Sophos Factory können Sie auch Scanning-Tools integrieren, um die Transparenz in der Pipeline aufrechtzuerhalten. Sie können auch verschiedene Kanäle mit Richtlinientools ausführen.

Sophos Factory verwebt Sicherheits- und IT-Arbeitsabläufe und schafft einen hervorragenden Integrationspunkt zwischen dem dreiköpfigen Monster von Entwicklung (Dev), Sicherheit (Sec) und Betrieb (Ops).

Um die Sicherheit zu verbessern, verfügt Sophos Factory über ein Zero-Trust- und Attestationsprodukt. Sie arbeiten jedoch auch mit anderen Sicherheitsprodukten wie HashiCorp Console zusammen. Die Zero-Trust- und Attestationsfähigkeit ist die natürliche Entwicklung zur Authentifizierung zwischen verschiedenen Systemen. Anstatt statischer Zugangsdaten gibt es nun bessere Möglichkeiten, Attestationsinformationen sicher zu kommunizieren und zu teilen.

Sophos Factory verfügt über ein integriertes Berechtigungssystem für das Schlüsselmanagement und unterstützt HashiCorp Vault und cloudbasierte Vorlagen. Sie können auch bei der Erstellung kritischer Managementdienste in der Cloud helfen und diese um eine Pipeline herum verpacken. Es gibt nicht nur eine Berechtigungsvariable zur Laufzeit, sondern auch einen Berechtigungsschritt, der nur zur Laufzeit ausgewertet wird. Sie können diese Sicherheitstools zusätzlich nutzen, damit sie natürlicher Bestandteil Ihrer Entwicklungslösung werden.

Sophos Factory befindet sich im Bereich der RPA, aber es geht weit über einen typischen RPA-Ausführer hinaus. Sie sind technisch gesehen RPA, denn obwohl Menschen immer noch daran beteiligt sind, Dinge herzustellen, werden Maschinen eingesetzt, um den Prozess zu automatisieren. Kunden suchen nach Möglichkeiten, sicher zu skalieren und Wert aus ihren IT-Käufen zu ziehen. Sophos Factory unterstützt dabei, technisches Talent weiterzuentwickeln und ihnen Zugang zu Werkzeugen zu geben, um mehr aus ihnen herauszuholen und dies sicher zu tun.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
