---
layout: posts
title: "Automatización de la Gestión de Procesos Empresariales"
number: 114
permalink: episode-EDT114-es
lang: es
nav_exclude: true
nav_order: 114
tags:
    - bpm
    - datamanagement
    - microservices
    - rpa
    - multicloud
    - cybersecurity
    - process
    - technology

date: Tue Nov 22 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Max Young

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquitecto Principal de Soluciones del Sector Público en Intel, y Max Young, CEO de Capital BPM, discuten la operacionalización de la gestión de procesos de negocio mediante programas de modelado."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquitecto Principal de Soluciones del Sector Público en Intel, y Max Young, CEO de Capital BPM, discuten la operacionalización de la gestión de procesos de negocio mediante programas de modelado."
---

<div>
{% include transistor.html id="98cc2837" title="#114 Automating Business Process Management" %}

{% include youtube.html id="url" %}
</div>

---

El modelado BMP le recuerda a Darren cuando tomó diseño en la escuela secundaria, y la introducción del sistema de diseño asistido por computadora de AutoCAD cambió el juego. Antes, tenían páginas y páginas de sistemas y diagramas complejos para que las personas pudieran construir, pero no podían probar el modelo para asegurarse de que estuviera correcto. Con el modelado por computadora, podían realizar simulaciones para garantizar que no hubiera problemas como cables eléctricos y tuberías pasando por el mismo agujero.

Esto es análogo a los arquitectos usando PowerPoint para mostrar procesos comerciales en lugar de utilizar una herramienta de modelado que pueda encontrar conflictos y problemas en lo que se pensaba que era el proceso comercial.

Usar una herramienta de modelado empresarial también resuelve un problema práctico al eliminar el tiempo perdido en reunir a todas las partes interesadas para reuniones que podrían necesitar ser más productivas. En su lugar, se puede poner un modelo implementado en manos del cliente empresarial y trabajar a través de los pasos con ellos.

Después de articular y modelar los procesos, puedes elegir los puntos de integración que puedan conectarse a interfaces RESTful para obtener información y devolverla. Así es como los procesos empresariales pueden integrarse con microservicios en la nube. En el ejemplo del proceso de contratación, estos puntos podrían ser donde necesitas una API para invocar verificaciones de historial laboral o antecedentes penales. Las entradas serán elementos como números de seguro social y fechas de nacimiento, y las salidas serán un booleano: ¿la información coincide o no? Aquí es donde puedes comenzar a tener esa conversación iterativa.

Translate the following to Spanish: ![imagen de bpm](./bpm.png)

Hay bastantes pasos manuales en este proceso, y puedes elegir cuáles automatizar. Por ejemplo, si decides que una entrevista no fue bien, puedes recurrir al departamento de recursos humanos. Después de implementar ese nuevo proceso, puedes volver atrás y revisar la versión anterior si así lo deseas, de modo que tengas dos versiones del software trabajando y desplegadas concurrentemente en el prototipo.

El modelador de Camunda es un modelador nativo, pero Capital BPM ha construido sus propias aplicaciones que ayudan a agilizar parte del trabajo y brindan soporte a diferentes roles de usuario.

Este sistema es diferente al RPA porque en lugar de capturar lo que hace un usuario con las pulsaciones de teclas, un analista de negocios analiza los procesos y pasos a través de varios departamentos. El analista observa de arriba hacia abajo todo el proceso. Un RPA puede ser conectado en algunos pasos para aumentar eficiencia. Un ejemplo simple es si un solicitante de empleo pasa la verificación de historial laboral y la verificación de antecedentes penales, puede ir a una persona de recursos humanos de mayor nivel; si no, es rechazado. Elegir pasos específicos o conjuntos de pasos para automatizar es un enfoque iterativo que ha sido utilizado con éxito en el desarrollo de software durante algún tiempo.

Los RPAs pueden ser agentes de cambio, pero son tácticos y a corto plazo. Mientras que estas ganancias a corto plazo pueden ser rentables, es necesario examinar todo el proceso empresarial para encontrar optimización y pasos que se puedan eliminar. La historia de la mujer que siempre cortaba el asado antes de hornearlo porque así lo hacía su madre es análoga a algunos procesos de la compañía. Finalmente, la mujer le preguntó a su madre por qué cortaba el asado, y su madre respondió: "Para que quepa en mi sartén". Muchos procesos de la compañía están ahí simplemente porque siempre se han hecho de esa manera, y nadie ha pensado en cuestionar por qué.

Pruebas, simulación, reubicación de elementos y ejecución repetida de procesos en el modelador, en otras palabras, pruebas empíricas, pueden ayudar a eliminar esta carga de procesos y agregar un valor significativo. La visualización y la experimentación son partes vitales de todo el proceso.

Max señala que hay fidelidad entre el diagrama y la ejecución real. Los desarrolladores a menudo dibujan diagramas como punto de partida. Sin embargo, los gráficos desaparecen a medida que el desarrollo avanza a través de las diferentes partes, por lo que lo que la empresa cree que está sucediendo y lo que realmente está sucediendo son diferentes. El diagrama y la realidad son cosas separadas. En este tipo de modelado, la imagen siempre es una representación precisa de lo que está sucediendo. Además, es fácil ver y realizar cambios para mejorar.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
