---
layout: posts
title: "Telemetría en la nube"
number: 52
permalink: episode-EDT52-es
has_children: false
lang: es
nav_exclude: true
parent: Episodios
grand_parent: Español
nav_order: 52
tags:
    - multicloud
    - optimization
    - workloadplacement

date: Mon Jun 07 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquitecto Principal de Soluciones en Intel, habla con Josh Hilliker, Director de Arquitectos de Soluciones en la Nube en Intel, sobre cómo utilizar la telemetría en la nube para maximizar el valor y la eficiencia."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquitecto Principal de Soluciones en Intel, habla con Josh Hilliker, Director de Arquitectos de Soluciones en la Nube en Intel, sobre cómo utilizar la telemetría en la nube para maximizar el valor y la eficiencia."
---

<div>
{% include transistor.html id="a732fe89" title="#52 Telemetry in the Cloud" %}

{% include youtube.html id="url" %}
</div>

---

## Beneficios de los Arquitectos de Soluciones en la Nube (CSAs)

El rol de CSA está en auge en la industria en este momento, e Intel ha estado contratando a un equipo de CSAs para brindar valor a sus clientes. Los CSAs pueden ayudar a los clientes a evitar la mentalidad de trasladar y levantar que lleva a costos innecesariamente altos. Estos nuevos CSAs aportan una perspectiva externa y se conectan con la comunidad de CSAs más grande para solucionar problemas.

## Fases de Telemetría

La telemetría en la nube no debería quedar relegada a tu proveedor de servicios en la nube. Por ejemplo, Amazon Web Services (AWS) tuvo una importante falla en la Costa Este en noviembre pasado, y sus herramientas no estaban informando, por lo que muchos clientes no tenían idea de que estaban fuera de servicio. Las organizaciones necesitan su propia telemetría para monitorear.

La primera fase es la falta de monitoreo en la nube. La segunda es la exposición de la telemetría donde comprendes lo que estás obteniendo, por ejemplo, la CPU, la memoria y la red, pero es nivel superficial. La siguiente fase es la monitorización y acción, donde recibes notificaciones sobre ralentizaciones, tasas de transacción, tasas de respuesta, etc. La siguiente fase es más profunda en la estructura, donde la nube inteligente moderna controla y predice para la corrección de problemas. Por último, está la automatización completa. Aquí es donde las cosas funcionan por sí solas, escuchan, responden y luego informan después del hecho.

Un ejemplo de automatización completa sería un centro de datos que controla un sistema de calefacción, ventilación y aire acondicionado (HVAC, por sus siglas en inglés), detectando y reduciendo o aumentando la temperatura en diferentes partes de un edificio. En cuanto a las cargas de trabajo, una nube inteligente puede mover las cargas de trabajo para maximizar el valor en capacidad y rendimiento.

## Enfoques actuales y limitaciones.

Muchas veces, sin embargo, los clientes de los proveedores de servicios en la nube relegan la automatización en la capa de infraestructura y olvidan la capa de carga de trabajo. Los clientes necesitan información más allá de lo básico; necesitan telemetría profunda y completa para saber qué está sucediendo realmente. Es un error confiar en que el proveedor de servicios en la nube tenga en cuenta tus mejores intereses en lo que respecta a la telemetría, y esto puede manifestarse en costos elevados.

Algunos proveedores de servicios en la nube están abriéndose más. Actualmente, AWS está cambiando el juego en cuanto a la telemetría que están proporcionando. Esperemos que otros sigan su ejemplo.

## Recopilemos la telemetría correcta...

Elegir las instancias correctas es importante. No todos los núcleos son iguales; se utilizan diferentes núcleos para diferentes tareas, y es importante entender cuáles son para obtener el mejor rendimiento y precio.

¿Qué tipo de información puede recopilar? El diseño del producto de Intel incluye unidades de monitoreo de rendimiento (PMUs, por sus siglas en inglés). Estas son contadores de subnivel y proporcionan información sobre transacciones, retrasos, latencia y cuellos de botella. Hay tres grupos diferentes en PMUs: núcleo, fuera del núcleo y componente sin núcleo. Estos PMUs recopilan información sobre CPI, utilización, frecuencia y TMAM. Todos estos datos están disponibles utilizando AWS.

Utilizando métricas y telemetría real, es una herramienta que te ayuda a optimizar tus cargas de trabajo. Por ejemplo, podrías comparar cómo se ejecuta tu carga de trabajo en tu propio centro de datos con AWS en estos casos, y utilizar métricas para averiguar en qué plataforma deberían alojarse las cargas de trabajo.

## Importancia de TI

Agregar telemetría con evaluación comparativa es una solución definitiva. Con la evaluación comparativa, puedes conocer tu rendimiento y, con la telemetría, puedes analizar el IPC, la utilización y la frecuencia, y tener un panel completo de lo que está sucediendo. Quieres hacer lo mismo en la nube, en lugar de simplemente cargar las cargas de trabajo en una instancia aparentemente más económica.

Los profesionales de IT no deben temer perder sus empleos debido a que las cosas se están moviendo hacia la nube. En cambio, deberían transferir sus habilidades para aprender sobre la telemetría de referencia en lugar de tener una mentalidad de traslado y reubicación. Convertirse en experto en la utilización de la nube también implica utilizar características nativas de la nube como Kubernetes y contenedores. La telemetría también funciona en estas áreas. Con el asesor C de Intel, puedes obtener una telemetría detallada como datos del núcleo y datos fuera del núcleo de tus contenedores.

Aunque pueda parecer abrumador cuando se considera todo lo que es posible en la nube, empezar de manera pequeña es la mejor opción. Analiza las aplicaciones adecuadas según el nivel de riesgo. Cataloga tus aplicaciones, analiza la clasificación de las aplicaciones y luego comienza a trasladarlas a la nube en fragmentos de funciones y aplicaciones similares. A medida que explores nuevos servicios y aprendas nuevas aplicaciones, ten en cuenta la arquitectura que hay detrás y formula las preguntas correctas para ser un arquitecto técnico más informado.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
