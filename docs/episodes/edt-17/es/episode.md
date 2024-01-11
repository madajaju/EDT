---
layout: posts
title: "Elastic Search y Intel Optane DCPMM"
number: 17
permalink: episode-EDT17-es
has_children: false
lang: es
nav_exclude: true
parent: Episodios
grand_parent: Español
nav_order: 17
tags:

date: Sun Aug 30 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher muestra cómo aumentó el rendimiento de Elasticsearch utilizando la Memoria Persistente Optane de Intel en el modo 100 por ciento de aplicación directa. Sus pruebas muestran un aumento de rendimiento increíble de 2 veces. Al duplicar la capacidad de rendimiento, puedes disminuir enormemente el número de servidores en tu clúster de Elasticsearch."
video: "https://youtu.be/url"
description: "Darren Pulsipher muestra cómo aumentó el rendimiento de Elasticsearch utilizando la Memoria Persistente Optane de Intel en el modo 100 por ciento de aplicación directa. Sus pruebas muestran un aumento de rendimiento increíble de 2 veces. Al duplicar la capacidad de rendimiento, puedes disminuir enormemente el número de servidores en tu clúster de Elasticsearch."
---

<div>
{% include transistor.html id="77870513" title="#17 Elastic Search & Intel Optane DCPMM" %}

{% include youtube.html id="url" %}
</div>

---

Recientemente, realicé algunas pruebas con la nueva tecnología de Intel llamada Optane DC Persistent Memory (PMEM) con Kafka. Al utilizar Optane de manera no convencional, montado como un sistema de archivos, logré obtener una mejora masiva en el rendimiento. Puedes escuchar mi podcast al respecto aquí. (¿puedes poner un enlace aquí?) También intenté hacer lo mismo con Elasticsearch para ver si podía lograr una mejora similar en el rendimiento.

Elasticsearch es un motor de búsqueda y análisis altamente escalable que permite la distribución de datos en múltiples nodos para ampliar la solución y admitir cantidades más significativas de datos. En otras palabras, es un administrador de metadatos distribuido, utilizado principalmente para el análisis de registros. Elastic en sí mismo es una excelente herramienta para normalizar datos en formato JSON. Puedo enviar cualquier tipo de datos a Elastic y puede abarcar un clúster distributivo. No es un bus de mensajes como Kafka, pero en cambio, indexa los datos que llegan. Dado que Elastic almacena estos datos en unidades de disco, me di cuenta de que podría utilizar PMEM de la misma manera que lo hice con Kafka.

## Intel Optane DC Persistent Memory is translated to Spanish as "Memoria Persistente Intel Optane DC".

La Memoria Persistente Intel Optane DC viene en formato DDR4, por lo que se adapta perfectamente a su servidor en una ranura de memoria DDR4. Los módulos vienen en capacidades de 128, 256 y 512 gigabytes, por lo que en un sistema de dos zócalos puedo tener 6 terabytes de PMEM. Una característica importante es que el hardware está encriptado y vinculado a su CPU con esa encriptación, por lo que es seguro y altamente confiable. Ya se utiliza para hacer cambios profundos en la forma en que se utilizan en herramientas en muchas bases de datos, como en la plataforma Exadata de Oracle y SAP HANA.

## Apoyo para la Amplitud de Aplicaciones

Hay varias formas de utilizar esta tecnología.

El primero es el modo de memoria, que amplía la huella de un servidor. Utiliza el PMEM al igual que la memoria normal. La memoria DDR4 actúa como una caché para el PMEM. En este modo, la velocidad es comparable a la DDR4; en la mayoría de las aplicaciones, no notará ningún cambio.

El segundo modo es app direct. En el modo app directo, puedo escribir una aplicación para que escriba directamente en PMEM, evitando los pasos que consumen tiempo.

El tercer modo es utilizar el modo de aplicación directa para crear un sistema de archivos de memoria no volátil que se encuentra directamente en el bus de memoria, lo cual es muchas veces más rápido que el bus NVMe e incluso el bus SATA.

Utilizando este tercer modo, tuve que aprender un poco sobre la arquitectura de Elastic para descubrir qué partes debía ejecutar en este sistema de archivos ultra rápido y cuáles debía dejar donde están. También quería saber si podía realizar esos cambios solo con el archivo de configuración.

## Usando el kernel de Linux

Primero, tuve que aprender cómo usar los comandos del kernel de Linux para manipular esta PMEM.

Con el comando de control de memoria persistente de Intel (ipmctl), descubrí que podía configurar y administrar la PMEM para asignarla a ejecutarse en modo memoria, modo de aplicación directa o un porcentaje en modo memoria.

El otro comando es el controlador de dispositivos de memoria no volátil (ndctl). Esto me permite crear espacios de nombres y regiones en esa PMEM que creé, para luego poder montar esa región como un dispositivo. Luego puedo montar ese dispositivo como un sistema de archivos.

## ESRally Pruebas de rendimiento

Encontré ESRally, una herramienta de referencia, para usar en mis pruebas. La primera vez que configuré la prueba, ejecuté ESRally desde mi disco SATA normal, donde Elastic estaba ejecutando todo desde el disco PMEM. Obtuve cierta mejora en el rendimiento, pero lo que descubrí fue que, debido a que estaba transmitiendo datos desde el disco SATA que estaban almacenados en mi ESRally, estaba limitado por la velocidad a la que podía enviar datos a Elasticsearch. Entonces no era Elastic lo que estaba ralentizando, sino ESRally porque mi disco SATA era mucho más lento que mi disco PMEM. Moví ESRally al disco PMEM. Esto mejoró el rendimiento y obtuve algunos resultados interesantes.

## Pruebas de restricciones.

Para ver cuáles serían los efectos de esta unidad PMEM ultrarrápida en Elastic, realicé la prueba en una máquina. Esto eliminó la variabilidad de la red y también los cuellos de botella de la red como factor limitante. Disminuí la comunicación entre servicios, lo que redujo los cuellos de botella de las réplicas, y ejecuté todas las consultas en PMEMs, lo que eliminó la variabilidad de la unidad SATA.

## Rendimiento Óptimo (100%) App Direct

Primero, asigné toda la PMEM al modo de aplicación directa para poder montar todo como un sistema de archivos. Utilicé DIMMS de 128 gigabytes, por lo que tenía una unidad con 1.5 terabytes que podía utilizar. Sabía por mi prueba anterior con Kafka que obtengo un mejor rendimiento con el modo de aplicación directa al 100% en lugar del 50%.

Mediana de rendimiento (debería ser rendimiento - tal vez quieras cambiarlo en la diapositiva) documentos/segundo

Utilizando las estadísticas de ESRally, tomé la mediana de rendimiento en documentos por segundo en comparación con el número de carreras simultáneas que estaba ejecutando al mismo tiempo con productores y consumidores. Obtuvé algunos buenos números con la unidad SATA, comparables a otros tests publicados. Con la unidad PMEM, pude ingresar casi el doble de documentos por segundo. Esto es bastante increíble considerando que no hubo cambios en el código, solo un cambio de configuración.

## Tiempo de respuesta del servicio

El otro resultado fue el tiempo de respuesta a las funciones. Como se esperaba, a medida que aumenta el número de carreras concurrentes que se ejecutan al mismo tiempo, el tiempo de respuesta a esas consultas o funciones también aumenta. Pero con el PMEM, el tiempo de respuesta es casi el doble de rápido. A partir de esta prueba simple, aprendí que el lugar donde se almacena los datos que Elasticsearch necesita (PMEM o SATA) sí tiene un efecto en el tiempo de respuesta.

## Traducción al español: 
Conclusion

Usar Optane Persistent Memory en modo de sistema de archivos para aumentar el rendimiento y disminuir los costos de los servidores de Elasticsearch requiere cambios mínimos en el hardware y software de configuración, y no requiere cambios en Elasticsearch o en las aplicaciones subyacentes. Duplicar la capacidad de rendimiento de Elasticsearch significa que puedes reducir el número total de servidores en tu cluster de Elasticsearch, disminuyendo el costo total de propiedad.

## Para obtener más información

Para obtener información más detallada, consulta el enlace en el podcast al documento que creamos como respuesta a estos resultados de prueba. También puedes contactarme en darren.w.pulsipher@intel.com o en LinkedIn @darrenpulsipher.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
