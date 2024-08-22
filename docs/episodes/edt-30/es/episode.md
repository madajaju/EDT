---
layout: posts
title: "Portabilidad de aplicaciones con OneAPI."
number: 30
permalink: episode-EDT30-es
lang: es
nav_exclude: true
nav_order: 30
tags:
    - oneapi
    - intel
    - edgecomputing
    - technology

date: 2020-11-17T00:00:00.000Z
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Con oneAPI, Intel ha creado un entorno de software unificado para el desarrollo, orientado al procesamiento de datos. Gretchen Stewart, Científica de Datos Principal en el Sector Público de Intel, discute esta tecnología con Darren Pulsipher, Arquitecto de Soluciones Principal de Intel, que elimina la necesidad de utilizar un lenguaje diferente para diferentes arquitecturas."
video: "https://youtu.be/url"
description: "Con oneAPI, Intel ha creado un entorno de software unificado para el desarrollo, orientado al procesamiento de datos. Gretchen Stewart, Científica de Datos Principal en el Sector Público de Intel, discute esta tecnología con Darren Pulsipher, Arquitecto de Soluciones Principal de Intel, que elimina la necesidad de utilizar un lenguaje diferente para diferentes arquitecturas."
---

<div>
{% include transistor.html id="3d30cd84" title="#30 Application Portability with OneAPI" %}

{% include youtube.html id="url" %}
</div>

---

Con oneAPI, Intel ha creado un entorno de software unificado para el desarrollo, orientado al procesamiento de datos. Es una programación paralela basada en código abierto C++. Diversos tipos de bibliotecas como MKL, DNN de Intel y otras fuentes abiertas forman parte del kit de herramientas oneAPI, junto con accesorios como un traductor CUDA. Puedes desarrollar software en oneAPI y luego apuntarlo a diferentes bibliotecas dependiendo de lo que estés haciendo. Ha eliminado la complejidad de aprender un lenguaje diferente para diferentes arquitecturas.

## Iniciativa de la Industria oneAPI: una alternativa a las soluciones de un solo proveedor.

Básicamente, un ingeniero de software puede escribir código una vez y este se ejecutará en diferentes procesadores: CPU, GPU, FPGA, NPU y VPU. Dependiendo de la arquitectura y bibliotecas que estés utilizando, podría ser necesario hacer una recompilación, pero no se requiere volver a escribir el código.

## Bibliotecas de API poderosas

Esta versión es solo el primer paso; Intel y otros continuarán diseñando con la adición de aceleradores de IA, por ejemplo. La idea es que evolucionará para brindar a los desarrolladores mucha más flexibilidad, y esa abstracción permitirá que muchas personas puedan diseñar y codificar de manera más simple, especialmente desde una perspectiva de ciencia de datos e IA.

Prácticamente hablando, un ingeniero de software podría escribir algo en su portátil, probarlo allí y luego usar el mismo código para ejecutarlo en una nube completamente equipada con procesadores neuronales, GPUs o FPGAs. Esto podría ser especialmente útil en el sector público donde los ingenieros están escribiendo aplicaciones especiales que procesan en el borde, tal vez con un FPGA. No tendrán que tener un entorno completo para hacer su trabajo.

Otro aspecto emocionante es que una vez que Intel integre el aprendizaje automático en el sistema, oneAPI podría revisar el código y especificar qué partes serían mejores en diferentes procesadores. Enviaría el código a los lugares correctos para obtener la mejor velocidad y rendimiento.

## Iniciativa de la Industria oneAPI - Alternativa a una Solución de un Solo Proveedor

Hay muchos marcos de inteligencia artificial disponibles, pero oneAPI permite la migración de cualquier tipo de código desde algo propietario a un lenguaje de programación de código abierto. Está basado en SYCL y desarrollado bajo un consorcio de toda la industria llamado Khronos group, por lo que es un tipo de marco de desarrollo.

## Potentes bibliotecas de API

OneAPI tiene veinte a treinta bibliotecas como MKL, bibliotecas para redes neuronales y aprendizaje automático, CNN abierta o DNN. Todas son abiertas, parte del consorcio más grande.

Además, Intel está en proceso de agregar el framework de tensorflow y las bibliotecas a oneAPI. Muchos frameworks ya han sido optimizados por Intel y se están incorporando o utilizando las mismas bibliotecas para que los usuarios puedan utilizarlo o construir sobre él.

## Recursos

Intel puso a disposición de manera general el proyecto oneAPI a principios de noviembre de 2020, y fue uno de los puntos destacados de la convención virtual Super Computing del 17 al 19 de noviembre.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
