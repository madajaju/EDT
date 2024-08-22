---
layout: posts
title: "Programación heterogénea con OneAPI"
number: 81
permalink: episode-EDT81-es
lang: es
nav_exclude: true
nav_order: 81
tags:
    - oneapi
    - moderncomputing
    - technology

date: 2022-03-24T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - James Reinders

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquitecto Principal de Soluciones de Intel, discute las capacidades y el futuro de OneAPI, un modelo de programación unificado basado en estándares y abierto para diferentes industrias que ofrece una experiencia de desarrollo común en diversas arquitecturas de aceleradores, con James Reinders, Evangelista Principal de OneAPI de Intel."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquitecto Principal de Soluciones de Intel, discute las capacidades y el futuro de OneAPI, un modelo de programación unificado basado en estándares y abierto para diferentes industrias que ofrece una experiencia de desarrollo común en diversas arquitecturas de aceleradores, con James Reinders, Evangelista Principal de OneAPI de Intel."
---

<div>
{% include transistor.html id="28fb34d4" title="#81 Heterogeneous Programming with OneAPI" %}

{% include youtube.html id="url" %}
</div>

---

El objetivo de oneAPI es ayudar a abstraer la enorme diversidad que viene en el hardware para que los ingenieros de software puedan aprovecharlo mejor en niveles superiores y sacar el máximo provecho del hardware. James, un ingeniero de software que también trabaja estrechamente con el hardware, está encantado con lo que oneAPI puede aportar en el contexto de la computación heterogénea de tendencia.

La palabra heterogéneo aquí básicamente significa que hay diferentes dispositivos en un sistema que pueden realizar computación, pero no ejecutan el mismo conjunto de instrucciones. Por ejemplo, la CPU tiene una forma de ejecutar instrucciones y la GPU tiene una forma diferente. Los FPGA, otros ASIC y dispositivos especializados tienen diferentes formas de ser programados. Aprovechar todas esas distintas formas es el objetivo.

John Hennessy y David Patterson, líderes en el campo de la arquitectura de computadoras, llaman a esto la nueva edad de oro de la arquitectura de computadoras. Para los arquitectos de computadoras, es un momento increíble para diseñar todo tipo de dispositivos especializados que hagan cosas mejores para dominios específicos, pero para los programadores, puede ser difícil e incluso aterrador debido a la complejidad. Aquí es donde entra en juego la iniciativa oneAPI y los productos oneAPI.

El nombre, oneAPI, es tanto una iniciativa con una especificación como una implementación. La iniciativa es un concepto sencillo: los desarrolladores de software deberían tener la libertad de utilizar cualquier dispositivo que deseen con un rendimiento total, y su código debería preservar su valor; no deberían tener que volver a escribirlo para cada nuevo dispositivo. Estas cualidades se pueden aplicar a compiladores, bibliotecas, depuradores y cualquier tipo de herramienta.

Un gran número de software para implementar ciertas especificaciones ha sido liberado como software de código abierto. Gran parte de este software tiene su origen en Intel, pero también Intel lo pone a disposición en forma de herramientas descargables preconfiguradas y listas para usar, para soportar su hardware. Otros proveedores que contribuyen en la creación de partes de oneAPI tienen sus propias implementaciones, por lo que todos colaboran en las especificaciones, mientras cada uno crea su propio soporte para su hardware de forma abierta y con múltiples proveedores.

El objetivo principal es escribir código una vez y que se ejecute bien en cualquier lugar. Sin embargo, es un problema complejo que requerirá ajustes de rendimiento. Por ejemplo, si un algoritmo funciona bien en una GPU, se ejecutará de manera similar en casi cualquier GPU. Si cambias el algoritmo para que se ejecute en un FPGA, puedes maximizar la reutilización de tu programa, pero tienes la opción de reescribir partes del algoritmo para que se ejecute igual de bien. Es un enfoque complejo que te brinda la capacidad de aprovechar cualquier hardware con diferentes grados de reescrituras, esperemos que estén muy aisladas.

Puedes crear un código para diferentes dispositivos. Incluso existen enfoques de tiempo de ejecución más sofisticados que te permiten detectar lo que hay y ejecutar diferentes piezas de código, para que realmente puedas tener un código fuente común que decida dinámicamente. Puedes aplicar un programa de implementación y este puede averiguar qué hay en tu máquina y utilizarlo de manera dinámica en lugar de decirle al usuario que ejecute un archivo binario diferente según el dispositivo en el que esté.

Esto es emocionante porque, durante mucho tiempo, los ingenieros utilizaban una pila de software que era la mejor para su máquina. Hoy en día, quieren compilar un programa que pueda utilizar dispositivos de múltiples proveedores. El programa debe reaccionar a eso. Para que eso funcione, el compilador debe ser capaz de generar código para estos diversos dispositivos de manera confiable. Aquí es donde entra en juego la apertura.

Algunos argumentarán que un sistema cerrado tendrá un mejor rendimiento, ya que las bibliotecas y el lenguaje están ajustados específicamente a las capacidades del hardware. Pero la pregunta es, ¿cómo puedes obtener lo mejor de ambos mundos? Si, por ejemplo, hay una implementación específica del proveedor para una biblioteca matemática, puede haber un programa común. Una gran parte de oneAPI no consiste en tratar de reinventar todo el mundo, sino en tratar de organizarlo de manera que se aproveche lo mejor en cada plataforma posible.

OneAPI tiene la capacidad de mover memoria y mover datos. Diferentes modelos de programación se encuentran encima de OneAPI, y es tu elección cuánto quieres involucrarte en la gestión de la memoria. Mover datos es costoso y consume energía, así que no puedes evitarlo, pero OneAPI te brinda las herramientas para gestionarlo mediante la consulta del sistema y permitiendo que tu programa tome las decisiones correctas y dinámicas en tiempo de ejecución que te brindarán el mejor rendimiento.

Intel tiene décadas de experiencia en la construcción de herramientas para ayudar con la afinación y migración, y cuenta con compiladores altamente optimizados. V2 ha ayudado a evolucionar la industria en torno a los contadores de hardware en los procesadores, convirtiéndose en la norma. Hay una variedad de otras herramientas de análisis para proporcionar retroalimentación desde la estructura de su programa hasta encontrar bloqueos y aplicaciones paralelas, y para encontrar dónde es necesario agregar algunos bloqueos. Intel está poniendo todas estas herramientas disponibles de manera "oneAPI" para que sean más versátiles, no solo se trata de una CPU.

Los primeros grupos que adoptan oneAPI incluyen la computación de alto rendimiento (HPC). Con la explosión de nuevas ideas en arquitectura informática, habrá una cantidad aún mayor de diversidad e innovación en este ámbito. Los códigos grandes que pueden ayudar a resolver los mayores problemas de ingeniería del mundo, o por ejemplo, resolver problemas farmacéuticos y evaluar nuevos medicamentos, exigen hardware de última generación. Por lo tanto, este concepto de portabilidad de rendimiento se está extendiendo entre los laboratorios nacionales, las universidades y los centros de investigación.

El HPC de hoy son los servidores de departamento de mañana, por lo que la capacidad de utilizar diferentes equipos requiere que los ingenieros de software planifiquen y presten atención a qué tan portable es el código, ya que el código no muere rápidamente; dura décadas. En pocos años, los sistemas heterogéneos afectarán a todos, y ahora es el momento de educarse al respecto.

Los ingenieros de software no necesitan programar en paralelo para aprovechar oneAPI. Se trata de utilizar cosas que son abiertas y capaces de múltiples proveedores y múltiples arquitecturas. Incluso los ingenieros que están en la cima de la pila deben comprender qué hay en la pila y qué es capaz en términos de portabilidad y portabilidad de rendimiento.

La comunidad del Internet de las cosas (IoT) es otro grupo que ha estado a la vanguardia en la programación de múltiples dispositivos de cómputo heterogéneos y utilizando diferentes métodos para gestionarlos. Sus capacidades de cómputo siguen aumentando a medida que avanza la tecnología. Por lo tanto, oneAPI se aplica aquí y puede ayudar a formalizar o estandarizar cosas que se han innovado primero en el mundo integrado.

La idea de una API ha pasado de ser una idea loca de la que solo hablaban unas pocas personas, a ser cada vez más reconocida como algo razonable y solucionador de problemas en sus organizaciones.

El lugar más sencillo para aprender sobre la iniciativa es en el sitio web de oneapi.io. Para aprender sobre la implementación, haz clic en la pestaña de implementación para obtener un enlace que te dirija a las implementaciones de Intel. Allí, puedes descargar los diferentes kits de herramientas. Busca el Intel dev cloud para probar las herramientas en la nube de forma gratuita, incluso en hardware diferente. El sitio web de oneapi.io también cuenta con una variedad de tutoriales y recursos.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
