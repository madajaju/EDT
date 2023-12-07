---
layout: posts
title: "Anwendungstragbarkeit mit OneAPI"
number: 30
permalink: episode-EDT30-de
has_children: false
lang: de
parent: Folgen
grand_parent: Deutsch
nav_order: 30
tags:
    - aiml
    - devops
    - compute
    - technology
    - process
    - oneapi
    - aiops
    - developer
    - people

date: Mon Nov 16 2020 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Mit oneAPI hat Intel eine einheitliche Softwareumgebung für die Entwicklung geschaffen, die auf die Datenverarbeitung ausgerichtet ist. Gretchen Stewart, Chief Data Scientist im öffentlichen Sektor bei Intel, spricht mit Darren Pulsipher, Chief Solution Architect bei Intel, über diese Technologie, die es überflüssig macht, für unterschiedliche Architekturen verschiedene Programmiersprachen zu verwenden."
video: "https://youtu.be/url"
description: "Mit oneAPI hat Intel eine einheitliche Softwareumgebung für die Entwicklung geschaffen, die auf die Datenverarbeitung ausgerichtet ist. Gretchen Stewart, Chief Data Scientist im öffentlichen Sektor bei Intel, spricht mit Darren Pulsipher, Chief Solution Architect bei Intel, über diese Technologie, die es überflüssig macht, für unterschiedliche Architekturen verschiedene Programmiersprachen zu verwenden."
---

<div>
{% include transistor.html id="3d30cd84" title="#30 Application Portability with OneAPI" %}

{% include youtube.html id="url" %}
</div>

---

Mit oneAPI hat Intel eine vereinheitlichte Softwareumgebung für die Entwicklung geschaffen, die auf die Datenverarbeitung ausgerichtet ist. Es handelt sich um datenparalleles Programmieren, das auf einem Open-Source C++ basiert. Verschiedene Arten von Bibliotheken wie Intel's MKL, DNN und andere Open-Source-Projekte sind Teil des oneAPI-Toolkits, zusammen mit Zubehör wie einem CUDA-Übersetzer. Sie können Software in oneAPI entwickeln und sie dann je nach Bedarf auf die verschiedenen Bibliotheken verweisen. Es hat die Komplexität beseitigt, eine andere Sprache für unterschiedliche Architekturen zu erlernen.

## oneAPI Industry Initiative – Alternative zur Lösung von Einzelanbietern

Grundsätzlich kann ein Softwareentwickler einmalig Code schreiben, der auf verschiedenen Prozessoren ausgeführt wird: CPU, GPU, FPGA, NPU und VPU. Je nach Architektur und verwendeten Bibliotheken könnte eine erneute Kompilierung erforderlich sein, jedoch sind keine Code-Neuschreibungen erforderlich.

## Starke API-Bibliotheken

Diese Version ist nur der erste Schritt; Intel und andere werden weiterhin mit der Integration von künstlicher Intelligenz beschleunigenden Elementen entwerfen, zum Beispiel. Die Idee ist, dass sie sich weiterentwickeln wird, um Entwicklern wesentlich mehr Flexibilität zu ermöglichen und dass Abstraktion vielen Menschen ermöglichen wird, einfacher zu entwerfen und zu programmieren, vor allem aus Sicht der Datenwissenschaft und künstlichen Intelligenz.

Praktisch gesehen könnte ein Softwareingenieur etwas auf ihrem Laptop schreiben, es dort ausprobieren und dann denselben Code auf einer Cloud ausführen, die mit neuronalen Prozessoren, GPUs oder FPGAs vollständig ausgestattet ist. Dies könnte besonders nützlich im öffentlichen Sektor sein, wo Ingenieure spezielle Apps schreiben, die am Randverarbeitung durchführen, vielleicht mit einem FPGA. Sie müssen nicht unbedingt eine vollständige Umgebung für ihre Arbeit haben.

Ein weiterer aufregender Aspekt ist, dass once Intel maschinelles Lernen integriert, könnte oneAPI den Code durchgehen und angeben, welche Teile am besten auf verschiedenen Prozessoren laufen würden. Es würde den Code an die richtigen Stellen schieben, um die beste Geschwindigkeit und Leistung zu erzielen.

## oneAPI-Brancheninitiative - Alternative zur Lösung von einzelnen Anbietern

Es gibt viele KI-Frameworks da draußen, aber oneAPI ermöglicht die Migration von jedem Art von proprietärem Code zu einer Open-Source-Programmiersprache. Es basiert auf SYCL und wurde unter einem gesamten Industriekonsortium namens Khronos Group entwickelt, also handelt es sich um eine Art Entwicklungsframework.

## Leistungsstarke API-Bibliotheken

OneAPI hat zwanzig bis dreißig Bibliotheken wie MKL, Bibliotheken für neuronale Netzwerke und maschinelles Lernen, Open CNN oder DNN. Alle sind offen und Teil eines größeren Konsortiums.

Darüber hinaus arbeitet Intel daran, das TensorFlow-Framework und die Bibliotheken in oneAPI zu integrieren. Viele Frameworks wurden bereits von Intel optimiert und sie werden in die gleichen Bibliotheken eingebunden oder nutzen diese, sodass Benutzer sie verwenden oder darauf aufbauen können.

## Ressourcen

Intel hat oneAPI Anfang November 2020 allgemein verfügbar gemacht, und es war ein Höhepunkt der virtuellen Super Computing-Konvention vom 17. bis 19. November.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
