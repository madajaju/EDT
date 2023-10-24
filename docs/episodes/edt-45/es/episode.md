---
layout: posts
title: "No todos los núcleos son iguales."
number: 45
permalink: episode-EDT45-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 45
tags:
    - multicloud
    - compute
    - optimization
    - workloadplacement
    - workload
    - migration
    - process
    - cloudinstance

date: Tue Mar 30 2021 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Steven Holt

img: thumbnail.png
image: thumbnail.png
summary: "En este episodio, Darren Pulsipher, Arquitecto Principal de Soluciones de Intel, y Stephen Holt, Arquitecto de Soluciones en la Nube de Intel, hablan sobre la optimización en la nube y los estudios que demuestran que los núcleos tienen un rendimiento diferente para diferentes cargas de trabajo."
video: "https://youtu.be/ZqdpCTp5yTY"
description: "En este episodio, Darren Pulsipher, Arquitecto Principal de Soluciones de Intel, y Stephen Holt, Arquitecto de Soluciones en la Nube de Intel, hablan sobre la optimización en la nube y los estudios que demuestran que los núcleos tienen un rendimiento diferente para diferentes cargas de trabajo."
---

<div>
{% include transistor.html id="cd1f0343" title="#45 Not All Cores are Equal" %}

{% include youtube.html id="ZqdpCTp5yTY" %}
</div>

---

Intel ha estado contratando arquitectos de soluciones en la nube para ayudar a los clientes a moverse inteligentemente hacia las instancias de nube correctas para sus cargas de trabajo. Stephen recientemente se ha unido a Intel y tiene una larga trayectoria en bases de datos en general, con los últimos siete u ocho años enfocados en la nube, aprovechando sus recursos para los clientes.

Algunos de los aspectos más difíciles con los que Stephen se ha encontrado al ayudar a los clientes a pasar a la nube son la fijación de precios y las expectativas para la migración. Los proveedores de servicios en la nube suelen afirmar que los clientes ahorrarán dinero al pasar a la nube, pero esto no suele ser cierto.

Una razón es que hay un cambio constante en el mercado de proveedores de servicios en la nube en cuanto a características, funciones y capacidades. Otra razón es la ignorancia, por ejemplo, creer que un VCP principal es igual en todos los casos. La migración con una mentalidad de "levantar y trasladar" también puede ser muy costosa. La optimización es clave para una migración inteligente a la nube.

Para reducir los costos y potencialmente ahorrar una gran cantidad de dinero, debes elegir las instancias adecuadas para el rendimiento adecuado. No todos los núcleos, o CPUs virtuales, son iguales. Dentro de AWS, tienen el M4, Broadwell de Intel, y el M5, que es una combinación de Cascade Lake y Skylake, y diversas cargas de trabajo pueden aprovechar esas plataformas de manera muy diferente.

## Rendimiento de CoreMark

CoreMark es una aplicación de un solo hilo que prueba movimientos de registros y sumas simples para cualquier cantidad de CPUs. A lo largo de tres generaciones de procesadores Intel, Broadwell, Skylake y Cascade Lake, esta prueba muestra muy poca diferencia entre ellos. Esta información ha sido utilizada erróneamente para orientar las decisiones de los clientes, ya que la prueba no es una forma efectiva de medir las diferencias en los procesos en sí mismos. Pueden haber diferencias enormes en el rendimiento con cargas de trabajo diferentes.

## Base de datos de rendimiento de WL

Stephen realizó pruebas digitales en cargas de trabajo reales, enfocadas en bases de datos de código abierto. El entorno Cascade Lake fue tres veces mejor que el entorno Broadwell para el código abierto, lo cual tiene sentido considerando los avances en velocidad y los avances en el chip que aprovechan el acceso de baja latencia. Por lo tanto, al avanzar dos generaciones se obtiene un rendimiento dos y tres veces mejor en estas cargas de trabajo.

La carga de trabajo y el núcleo deben ser considerados juntos. Por ejemplo, un cliente podría verse tentado a cambiar a un VCPU que Amazon dice que es un 10% más barato. Sin embargo, AWS podría agrupar núcleos en estos procesadores y ahora estás pasando de un entorno donde eres uno de 48 máquinas virtuales en una caja a uno donde hay 128 máquinas virtuales; tu acceso a la memoria es limitado y podrías obtener un rendimiento un 60% menor por un ahorro del 10%.

Las organizaciones a menudo creen que si externalizan a la nube, ya no necesitan un arquitecto de sistemas. Es cierto que los arquitectos ya no instalan y apilan máquinas físicamente, pero ahora lo hacen virtualmente y necesitan comprender qué ofrecen las diferentes instancias para cargas de trabajo diferentes.

Intel está trabajando en una herramienta para mostrar qué cargas de trabajo se ejecutan mejor en qué instancias. Mientras tanto, Intel cuenta con algunas pautas generales y arquitectos de soluciones en la nube para ayudar a orientar a los clientes.

Además, es importante realizar muchas pruebas para comprender dónde ubicar las cargas de trabajo, pero también es importante probar y evaluar para validar que estás obteniendo lo que esperas de un proveedor.

## Base de datos de rendimiento de WL: No NVMe.

Intel realizó algunas pruebas en cargas de trabajo en instalaciones nuevas en una instancia de 64 VCPU fija de 64 núcleos. Después de obtener el número inicial, se creó otra instancia y se volvió a ejecutar la misma prueba. Los resultados variaron drásticamente en cada prueba. Esto podría ser debido a una mezcla de procesos que se ofrecen en un determinado nivel de servicio, o puede haber alguna distancia y latencia adicional en las conexiones de almacenamiento en bloque, por ejemplo, o incluso vecinos ruidosos. Por lo tanto, es válido realizar pruebas para asegurarse de que el sistema cumpla con las expectativas.

En resumen, para aprovechar al máximo el valor de la nube, necesitas educarte, probar los sistemas y aprovechar la ayuda disponible.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
