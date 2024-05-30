---
layout: posts
title: "Sicherung des Heimarbeiters Teil 2"
number: 8
permalink: episode-EDT8-de
lang: de
nav_exclude: true
nav_order: 8
tags:
    - policy
    - security
    - intel
    - zerotrust
    - multicloud
    - cybersecurity

date: Mon Jul 20 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Mit vielen Mitarbeitern, die nun von zu Hause aus arbeiten, wie stellen Sie sicher, dass sie sicher arbeiten, aber ihnen dennoch die Flexibilität geben, die sie brauchen, um ihre Arbeit zu erledigen? In dieser Episode diskutieren Darren und der spezielle Gast Steve Orrin, CTO von Intel Federal, wie man die Intel-Technologie nutzen kann, um den Telearbeiter effektiv abzusichern."
video: "https://youtu.be/2PazR1MX2wc"
description: "Mit vielen Mitarbeitern, die nun von zu Hause aus arbeiten, wie stellen Sie sicher, dass sie sicher arbeiten, aber ihnen dennoch die Flexibilität geben, die sie brauchen, um ihre Arbeit zu erledigen? In dieser Episode diskutieren Darren und der spezielle Gast Steve Orrin, CTO von Intel Federal, wie man die Intel-Technologie nutzen kann, um den Telearbeiter effektiv abzusichern."
---

<div>
{% include transistor.html id="5fc292e0" title="#8 Securing the Teleworker Part 2" %}

{% include youtube.html id="2PazR1MX2wc" %}
</div>

---

## Clienttechnologien zur Absicherung des Telearbeiters

Sicherheit auf der Client-Seite beginnt und endet mit der Möglichkeit, den Client mittels eines sicheren Boots verifizieren zu können. Intel hat diese Technologie in unseren Clientsystemen seit Jahren mit Secure Boot mit Trusted Execution Technology (TXT) und kürzlich auch mit BootGuard (BtG) bereitgestellt. Auf den neuesten Plattformen haben wir Intel Hardware Shield, eine Reihe von Technologien, die das System auf seiner niedrigsten Ebene, auf Firmware- und BIOS-Ebene, absichern. So kann beispielsweise ein Unternehmenszugangskontrollsystem einen Client überprüfen, ob er sicher gebootet wurde und die korrekte Firmware sowie die richtigen Sicherheitskontrollen installiert hat, bevor er Zugriff auf das Unternehmensnetzwerk erhält.

Intel hat im Laufe der Jahre auch viel Arbeit geleistet, um Organisationen dabei zu helfen, ihre Daten besser zu schützen. Außerdem haben wir es dem Kunden ermöglicht, die Verschlüsselung überall ohne Leistungseinbußen einzuschalten. Wir haben in beinahe jeder Generation unserer Produkte neue Anweisungen implementiert, um die Sicherheit des Telearbeiters zu stärken.

Unser weiterer Schwerpunkt lag darauf, Anwendungen und ihre Daten während der Nutzung zu schützen. Hier kommen Intel Software Guard Extensions (SGX) ins Spiel. Dies ermöglicht es Organisationen, wichtige Teile von Anwendungen und wichtige Daten in sicheren, verschlüsselten Speicherumgebungen zu platzieren. Mit Telearbeit bedeutet dies, dass Sie Anwendungen in nicht vertrauenswürdigen Umgebungen bereitstellen können und dennoch ein hohes Sicherheitsniveau aufrechterhalten.

Zusätzlich ermöglicht die neue Technologie, die Intel in der Kategorie der Bedrohungserkennung eingeführt hat, Organisationen eine umfassende Einblick in die Vorgänge der Plattform, um Bedrohungen zu überwachen; keine Malware kann sich verbergen. Diese Technologien revolutionieren die Art und Weise, wie wir mithilfe von maschinellem Lernen und künstlicher Intelligenz Malware erkennen.

## Datenzentrumstechnologien zur Sicherung des Telearbeiters

Auch wenn Sie die Kunden gesichert haben, müssen Sie auch das Rechenzentrum sichern. Beide Seiten müssen geschützt werden, denn Ihr System ist nur so sicher wie das schwächste Glied. Viele der Techniken zur Sicherung des Telearbeiters ähneln der Sicherung Ihres Unternehmens: sicheres Booten, Virtualisierungssicherheit und Isolationskontrollen. Erneut ermöglichen Technologien wie Intel TXT und BootGuard das sichere Booten dieser Plattformen sowie von Rechenzentren und Cloud-Assets. In jüngster Zeit haben wir die Technologie Intel Select Solutions for Hardened Security eingeführt, die viele der Intel-Sicherheitstechnologien in einer einzigen Plattform integriert, die standardmäßig aktiviert ist.

Sie müssen in der Lage sein, Ihre Daten in großem Maßstab zu schützen, d.h. die Fähigkeit haben, alle Ihre Sicherheitstools nutzen zu können, ohne die Leistung negativ zu beeinflussen. Intels hardwarebeschleunigte Verschlüsselungstools (SHA, AES-2X, VPMADD52) machen dies möglich. Intels neue Anweisungen und QuickAssist-Technologien sind speziell auf die Verschlüsselungsanforderungen von Unternehmen und Cloud-Skalierung ausgerichtet.

Schließlich, wie überwachen Sie bedrohungsbezogene Informationen und führen in großem Umfang Audits durch? Die Cyber Intelligence Platform Architecture von Intel (FPGA, DCPMM, Optane SSD) verwendet Hochleistungsberechnung, Speicher- und Speichertechnologien, um die Cyber-Intelligence-Plattform zu skalieren, selbst bei der zusätzlichen Belastung durch zusätzliche externe Sicherheiten für Telearbeiter.

## Kurzfristige Lösungen

Mitarbeiterbildung ist die erste Maßnahme zur Eindämmung von Sicherheitsbedrohungen beim Telearbeiten. Anleitung zur Heimsicherheit und Sicherheitsschulungen oder die Verstärkung früherer Schulungen in Bereichen wie dem ordnungsgemäßen Datenzugriff sind von entscheidender Bedeutung. Seien Sie proaktiv bei Patches, indem Sie Patches bereitstellen und Benutzer dazu auffordern, ihre Geräte zu aktualisieren. Wenn Sie Zugangskontrolle für Unternehmen, ERM/DRM- und DLP-Lösungen haben, aktivieren Sie sie und skalieren Sie sie aus. Überprüfen Sie Ihre Richtlinien, um sicherzustellen, dass sie der neuen Realität von Telearbeitern entsprechen. Für Webverbindungen aktivieren Sie TLS und stellen Sie sicher, dass es durchgesetzt wird. Die zweifache Authentifizierung muss genutzt werden. Die meisten Unternehmen denken vielleicht, sie verfügen nicht über die Infrastruktur, um dies umzusetzen, aber es gibt verschiedene Anbieter, die in diesem Bereich helfen können, ohne dass eine große Menge neuer Infrastruktur bereitgestellt werden muss.

Viele Lösungen sind einfach standardmäßige Hygiene: Stellen Sie sicher, dass Ihre Endpunkt-Sicherheitsagenten aktiviert und auf dem aktuellen Stand sind. Verwalten und erzwingen Sie Sicherheitsrichtlinien für verschiedene Arten von Benutzergeräten. Aktivieren Sie die Vollverschlüsselung der Festplatte.

Organisationen müssen verstehen, dass Telearbeiter in einer Umgebung tätig sind, in der die Wahrscheinlichkeit hoch ist, dass ein Gerät von anderen in verschiedenen Situationen verwendet wird. Gute Sicherheitskontrollen, insbesondere Mitarbeiterbildung, können Probleme umgehen und es den Mitarbeitern ermöglichen, ohne negative Auswirkungen zu arbeiten.

## Langfristige Lösungen

Ein langfristiger Sicherheitsplan für eine Arbeitsumgebung mit Telearbeitern ist nun erforderlich, sei es für eine dauerhafte Umstellung auf mehr remote Arbeitnehmer oder um mit einer anderen Pandemie oder ähnlichen Situation umzugehen. Es gibt mehrere Schritte, die Organisationen jetzt unternehmen sollten, um diese Realität in Zukunft zu unterstützen.

Eine bewährte Methode ist die Implementierung von "Zero Trust"-Richtlinien. Dadurch wird die Abhängigkeit von dem Vertrauen in jeden Aspekt von Benutzern und Clients verringert, die kommen. Zusammen damit sollte eine Zwei-Faktor-Authentifizierung bei Benutzern und Geräten zur Standardvorgehensweise in der Organisation werden. Für diejenigen, die noch keine ERM und Policy-basierte Datenzugriffskontrolle übernommen haben, ist es jetzt an der Zeit, dies zu tun, um die Daten sowohl außerhalb als auch innerhalb des Standortes zu schützen. Die Implementierung von umfassenden Sicherheitslösungen statt nur auf Anwendungsebene oder Netzwerkebene ist wichtig. Dies beinhaltet sicheres Booten mit Beglaubigung, Virtualisierung und Sicherheit von Containern sowie Firmware-Sicherheit und Überwachung. Es ist wichtig, Audit, Bedrohungsinformationen und Überwachung auch auf Teleheimarbeitsumgebungen auszuweiten, trotz Widerstand von Benutzern, die keine zusätzliche Überwachung auf ihren Systemen wünschen. Überlegen Sie auch, die Sicherheit in Teleheimarbeitsumgebungen, soweit möglich, über das Gerät hinaus auszudehnen, wie z.B. bei verwalteten Geräten und Netzwerken.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
