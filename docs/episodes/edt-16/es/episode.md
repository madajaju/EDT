---
layout: posts
title: "Reducción de la congestión de ingestión con Intel Optane DCPMM"
number: 16
permalink: episode-EDT16-es
lang: es
nav_exclude: true
nav_order: 16
tags:

date: Mon Aug 24 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "En este episodio, Darren habla sobre cómo disminuir la congestión de ingestión utilizando la Memoria Persistente Optane DC de Intel, y el experimento que realizó con resultados sorprendentes. Podría cambiar la forma en que pensamos sobre la programación en el futuro."
video: "https://youtu.be/url"
description: "En este episodio, Darren habla sobre cómo disminuir la congestión de ingestión utilizando la Memoria Persistente Optane DC de Intel, y el experimento que realizó con resultados sorprendentes. Podría cambiar la forma en que pensamos sobre la programación en el futuro."
---

<div>
{% include transistor.html id="7ca179aa" title="#16 Decreasing Ingestion Congestion with Intel Optane DCPMM" %}

{% include youtube.html id="url" %}
</div>

---

## Detalles del Stack de Servicios

Un cliente en la industria automotriz estaba teniendo dificultades para obtener información de manera efectiva de sus automóviles y llevarla a su centro de datos para poder realizar aprendizaje automático y análisis. Ha habido investigaciones en esta área, pero solo para un pequeño número de automóviles, no para los cien millones de automóviles del cliente. Cuando examiné su pila de servicios completa y cómo todo estaba llegando al centro de datos, la ingesta de datos se convirtió en el problema claro: ¿Cómo puedo ingerir tanta data y hacerlo rápidamente?

## Descripción general de la arquitectura de alto nivel de Kafka

El cliente quería utilizar Kafka para su ingestión. Kafka es un broker que puede escalar bien, y la clave está en que puede manejar varios productores, diferentes consumidores y una gran cantidad de datos. Utilizar varios brokers de Kafka para colocar y recibir datos en los lugares más apropiados ofrece una gran flexibilidad.

Kafka, sin embargo, fue principalmente diseñado para tamaños de mensaje de alrededor de uno a 10 kilobytes y los datos del cliente eran aproximadamente 240 kilobytes por automóvil. Hay soluciones alternativas, pero quería llevar el mensaje completo de 240 kilobytes al bus de Kafka para poder moverlo como necesitara.

## Prácticas recomendadas para obtener el mejor rendimiento.

Miré las mejores prácticas de rendimiento de otros que trabajan con Kafka para ver si podía adaptarlo a mi cliente. Aumentar el tamaño del búfer para acomodar todo el mensaje es una solución de ajuste fino, junto con gestionar el tamaño del lote para un rendimiento óptimo. Otra práctica exitosa es distribuir los registros. La flexibilidad de Kafka me permitiría colocar los datos en diferentes temas. Puedo dividir los temas en varias particiones que puedo distribuir en múltiples unidades. Entonces, la pregunta es, ¿en cuántas unidades estoy distribuyendo los registros de Kafka? Además, quiero las unidades más rápidas posibles.

Un ejemplo que examiné fue LinkedIn. Sus números publicados de hace un año indican que pueden manejar 13 millones de mensajes por segundo, o 2.7 gigabytes por segundo. Afirman tener alrededor de 1,100 brokers de Kafka y más de 60 en un clúster, por lo que esa es una configuración bastante grande.

## Espacio Automotriz

Si observo los números brutos del cliente (1.6 millones de mensajes por segundo y 800 gigabytes por segundo) y los comparo con LinkedIn, que probablemente no está optimizado para 240 kilobytes, obtengo 44,000 intermediarios. Si lo optimizara, probablemente podría reducirlo a 4,400 intermediarios, que todavía son 240 grupos. Eso es una cantidad enorme de máquinas, así que tuve que encontrar una forma de hacer las cosas más rápidas. Con más optimización, probablemente podría reducirlo a 400 a 500 intermediarios, pero quería ver qué más podía hacer.

## Memoria Persistente Intel Optane DC

Miré nuestra Memoria Persistente Optane. Encaja en un formato DDR4, por lo que se ubica directamente en el bus DDR4. Llega hasta módulos de 512 gigabytes, por lo que en un servidor de dos sockets puedo tener seis terabytes de memoria persistente. Quería encontrar una manera de aprovechar esta tecnología altamente confiable con características excelentes como encriptación de hardware incorporada para ayudarme a resolver este problema.

## Apoyo para una amplia variedad de aplicaciones

Hay dos modos de operación con esta Memoria Optane: el modo de aplicación directa y el modo de memoria. El modo de memoria es simple. Utiliza la memoria persistente como RAM normal porque es más barata que la DDR4 normal. No es lo mismo que la DDR4, pero es lo suficientemente similar como para que en la mayoría de las aplicaciones no se note ninguna diferencia. En el modo de aplicación directa, realmente puedes escribir desde tu programa directamente en la memoria persistente. De esta manera, no tengo que convertir y desconvertir estructuras de datos ni transmitirlas; simplemente puedo guardarlas en la memoria persistente. También puedo montar el modo de aplicación directa como un sistema de archivos para que esté en el bus de memoria, lo cual es mucho más rápido que en el bus de E/S. Ahora, ¿qué puedo hacer con esta memoria?

## Usando el núcleo de Linux

Hay dos herramientas principales disponibles utilizando el kernel de Linux: ndctl e ipmctl. Ndctl es un controlador de dispositivos de memoria no volátil, y luego está IPM, el controlador de memoria persistente de Intel, que me permite manipular y controlar esta memoria persistente. Puedo configurarlo en modo de memoria o modo de aplicación directa. Tuve un poco que aprender sobre estas herramientas y cómo funcionan.

## Enfoque de Ingestión

Mi primer pensamiento fue que si le daba a Kafka mucha más memoria con tamaños de búfer grandes, debería funcionar mucho más rápido. Los cambios de código en la configuración serían innecesarios o mínimos. Otra opción era cambiar Kafka para que escribiera en memoria persistente en lugar de escribir en un sistema de archivos, evitando el disco duro. Lo último en lo que me fijé fue en crear un sistema de archivos persistente utilizando memoria persistente y luego poner los registros de Kafka en este nuevo sistema de archivos.

La opción más fácil de las tres fue la primera: más memoria. Ejecuté todas mis tareas con más memoria y no hubo ningún cambio en el rendimiento. La razón es porque eventualmente mis buffers se llenaron y tuve que enviarlos a un disco. Al final, todo tenía que ir a los registros de Kafka, que era mi cuello de botella.

La segunda opción implica reescribir código y esperar a recibir aprobaciones, así que pasé a la tercera opción. Los resultados de este experimento donde apunté los registros a este nuevo sistema de archivos ultrarrápido fueron fascinantes. Echemos un vistazo al proceso y los resultados.

## Restricciones de prueba

Para eliminar obstáculos para probar el rendimiento, eliminé la red de la ecuación al ejecutar mi prueba en la misma máquina en la que se encontraba mi agente de bolsa. Además, solo ejecuté productores, luego solo consumidores y luego una combinación de ambos, para poder evaluar las diferencias. Mi objetivo no era analizar la mejora total de la producción, sino examinar a nivel individual si este impulso realmente marcaría la diferencia en un agente de bolsa.

## Primer Enfoque 50/50

Lo primero que hice fue tomar la mitad de mi memoria persistente y ponerla en modo de acceso directo a aplicaciones, convirtiéndola en un sistema de archivos. Dejé la otra mitad como memoria. Utilicé los comandos ndctl e ipmctl y creé espacios de nombres. Monté estos sistemas de archivos y ejecuté mi prueba.

## Cambiando el tamaño del mensaje

Ejecuté las pruebas con varios tamaños de mensaje diferentes. Esperaba cierta optimización, principalmente para 1 kilobyte. Vi que obtenía un rendimiento cada vez más óptimo hasta aproximadamente 10 productores. Después de los 10 productores, empecé a saturar el bus y obtener cierta variabilidad. Eso me dice que estaba almacenando en caché las cosas. Ahora puedo comparar estos números con los que obtuve anteriormente solo con una unidad SATA para los registros de Kafka. También probé nuestras unidades Optane NVMe para los registros.

## Comparación tecnológica

Echemos un vistazo a las diferencias. Para 240 kilobytes, con un disco SATA normal, es bastante plano. Obtuve cierta mejora y luego disminuyó a medida que aumentaba el número de productores. Con el disco Optane NVMe, obtuve un pico muy agradable, casi dos veces más rápido que un disco SATA, lo cual es lo que esperaba porque es un bus NVMe en lugar de un bus SATA. El Pmem es casi cinco veces más rápido que un disco SATA y dos veces y media más rápido que el disco Optane NVMe. Eso se debe a que estoy usando un bus de memoria en lugar del bus SATA o NVMe.

## Optimización adicional (100% directo a la aplicación)

Esto estaba corriendo rápido y estaba llenando rápidamente este disco temporal de 750 GB. Como necesitaba ejecutar la prueba un poco más tiempo, volví y reconfiguré mi máquina para que funcione al 100 por ciento en modo de aplicación directa, de manera que ahora podía tomar los 1.5 terabytes completos.

## Optimizado PMEM y 100% App Direct

Después de hacer esto y ejecutar las mismas pruebas, obtuve un resultado sorprendente. Pude agregar más productores y mi rendimiento aumentó casi dos o tres veces más. Ahora es entre 12 y 15 veces más rápido que una unidad SATA con 25-30 productores y un tamaño de mensaje de 240 kilobytes. Esto es increíble y reduciría en gran medida la necesidad de tantos brokers, filas y filas de máquinas por parte de mis clientes. Realicé la prueba varias veces porque no creía los resultados que obtenía. Llamé a uno de nuestros arquitectos que diseñaron esta tecnología y aprendí que una de las razones de la velocidad aumentada era que, cuando estaba utilizando parte de la memoria persistente como memoria, los datos tenían que pasar por dos o tres saltos que no son necesarios con el modo de acceso directo de la aplicación. Esto crea menos conflictos en el bus de memoria, y el rendimiento aumentó drásticamente.

## Llamado a la Acción

El resultado final es que pude utilizar Kafka con Optane DC Persistent Memory como un sistema de archivos ultrarrápido para obtener importantes mejoras en el rendimiento tanto en los productores como en los consumidores. Un solo intermediario puede manejar 15 veces más mensajes y rendimiento que antes, disminuyendo el número de servidores necesarios para manejar arquitecturas de sistemas grandes y complejas. Es hora de evaluar tu arquitectura actual y ver si esto beneficiaría a tu organización.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
