---
layout: posts
title: "VAST Data Revisited - VAST Data Revisitado"
number: 48
permalink: episode-EDT48-es
lang: es
nav_exclude: true
nav_order: 48
tags:
    - vastdata
    - supplychainoptimization
    - flexibility
    - highperformancecomputing
    - multicloud
    - operationalefficiency

date: 2021-04-29T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Randy Hayes

img: thumbnail.jpg
image: thumbnail.jpg
summary: "En este episodio, Darren se pone al día con Randy Hayes, ahora VP de Ventas para el sector público de VAST Data, seis meses después de su última conversación para ver cómo les está yendo en la industria, qué hay de nuevo en VAST y casos de uso interesantes. Su nuevo producto, Gemini, ofrece un modelo de negocio de almacenamiento diferente."
video: "https://youtu.be/url"
description: "En este episodio, Darren se pone al día con Randy Hayes, ahora VP de Ventas para el sector público de VAST Data, seis meses después de su última conversación para ver cómo les está yendo en la industria, qué hay de nuevo en VAST y casos de uso interesantes. Su nuevo producto, Gemini, ofrece un modelo de negocio de almacenamiento diferente."
---

<div>
{% include transistor.html id="d6fc5e00" title="#48 VAST Data Revisited" %}

{% include youtube.html id="url" %}
</div>

---

VAST Data ha estado creciendo rápidamente en los últimos seis meses, con un equipo en expansión y ventas impresionantes, como aproximadamente 70 petabytes de almacenamiento flash al gobierno federal. Además de la compartición de archivos general con sus sistemas de almacenamiento completamente flash, tienen casos de uso interesantes en áreas como secuenciación de próxima generación, microscopía confocal y cargas de trabajo de simulación de túneles de viento.

La plataforma de la empresa permite resolver problemas de lectura aleatoria porque todos los datos están en almacenamiento flash sin el costo exorbitante; la plataforma maneja un alto volumen de datos con baja latencia.

## Tecnología VAST y unidades Intel Optane

VAST utiliza las unidades Optane de Intel para lograr la paridad de lectura/escritura, entre otros beneficios. Dado que Optane es una memoria persistente, no hay problemas de coherencia de caché y no se necesita DRAM, lo cual es una gran ventaja arquitectónica para evitar fallas o pérdidas de datos. El costo total por usuario también se reduce porque no es necesario comprar máquinas grandes con mucha memoria para el almacenamiento de archivos si se desea más velocidad. Ese nivel se elimina.

Escalabilidad y flexibilidad son otras dos ventajas, ya que se pueden agregar más cajas de datos (D boxes) sin afectar el rendimiento, y son completamente compatibles incluso con múltiples generaciones de flash. No hay un punto único de fallo y no hay un límite teórico; VAST ha probado hasta 100 petabytes.

Puedes mejorar el rendimiento agregando cajas de clientes (C boxes), independientemente de las cajas D. La capacidad con flash es básicamente gratuita, pero debes exponer ese flash con la CPU. Las cajas C son completamente sin estado, por lo que puedes crecer o reducir su tamaño sobre la marcha. VAST garantiza el tiempo de actividad porque tienes acceso completo a cada PCP en el backend.

Dependiendo de los requisitos de rendimiento del cliente, puede haber diferentes números de cajas D y cajas C; por ejemplo, un cliente puede no necesitar más rendimiento, pero sí más capacidad, por lo que el clúster puede tener, digamos, 11 cajas C y 37 cajas D.

Si tienes una caja C y una caja D, tienes aproximadamente 40 gigabytes por segundo de ancho de banda, que es el modelo base. Cada adición de una caja D agrega otros 40 gigabytes de ancho de banda. Una caja C no satura todos los IOPS, por lo que si agregas otra caja C puedes obtener 350,000 IOPS de una caja. Dado que el flash está limitado por la CPU, cuanto más CPUs agregues, más te permite escalar.

## Nuevo modelo de negocio de almacenamiento

El nuevo producto de VAST Data, Gemini, permite a los clientes que necesitan un alto rendimiento sin mucha capacidad licenciar solamente la cantidad de hardware que necesitan de su fabricante contratado, lo que resulta en un enorme ahorro de costos. Los clientes pueden crecer y pagar por la capacidad a medida que la necesiten, en lugar de incurrir en un costo inicial por necesidades futuras de capacidad.

Desde una perspectiva de gastos operativos (OPEX), esto tiene sentido para muchas empresas. Por ejemplo, para un cliente, un sistema all-flash de 30 petabytes que proporciona un terabyte y medio de ancho de banda, el costo es inferior a S3 de acceso poco frecuente de Amazon. Eso es solo para un año; a medida que avanza, en realidad es menos costoso que Glacier si se considera la forma en que Amazon cobra, por gigabyte al mes. Y existe la flexibilidad de volver a un modelo de gastos de capital (CAPEX) si eso tiene más sentido en el futuro.

Es importante destacar que VAST está presentando un dispositivo, no un almacenamiento como servicio, lo que puede convertirse en una pesadilla de soporte debido a todas las variaciones de hardware y firmware, los discos que se están utilizando, las conexiones internas, etc., lo que resulta en una cantidad enorme de complejidad. VAST todavía está enviando las mismas cajas y servidores; simplemente es un modelo de negocio diferente que permite flexibilidad al consumir almacenamiento.

Algunas áreas interesantes donde VAST podría ser útil son en la investigación médica, como la anatomía patológica digital, que maneja una enorme cantidad de datos a la que a menudo los investigadores tienen dificultades para acceder debido a su almacenamiento barato y lento. La medicina de precisión basada en el perfil genético de una persona también es una posibilidad. Además, ejecutar la inteligencia artificial contra la captura de paquetes podría ser útil para predecir ataques de adversarios avanzados.

Otro caso de uso prometedor es un cliente con todos sus datos en un sistema de almacenamiento en flash VAST en lugar de en la nube, pero realiza todos sus cálculos en la nube, tal vez trayendo solo los resultados. Los resultados suelen ser muy pequeños, quizás un par de bytes de datos, y su extracción es económica. Este tipo de modelo, por ejemplo, podría generar valor a partir del análisis de datos antiguos que actualmente se encuentran almacenados y son demasiado costosos de mover.

Hay mucha flexibilidad para hacer un enfoque híbrido o de múltiples nubes donde tienes un sistema de almacenamiento centralizado en las instalaciones que se puede acceder a través de varios proveedores de nube.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
