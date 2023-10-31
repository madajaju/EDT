---
layout: posts
title: "Casos de uso prácticos de la Memoria Persistente Optane"
number: 51
permalink: episode-EDT51-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 51
tags:
    - dataarchitecture
    - memverge
    - pmem
    - optane
    - technology
    - data

date: Wed Jun 02 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, arquitecto jefe de soluciones de Intel, habla con Charles Fan, CEO de MemVerge, sobre casos de uso con su software que utiliza la memoria persistente Optane de Intel de una manera innovadora, eliminando el cuello de botella entre la memoria y el almacenamiento."
video: "https://youtu.be/nTy8yXORkOw"
description: "Darren Pulsipher, arquitecto jefe de soluciones de Intel, habla con Charles Fan, CEO de MemVerge, sobre casos de uso con su software que utiliza la memoria persistente Optane de Intel de una manera innovadora, eliminando el cuello de botella entre la memoria y el almacenamiento."
---

<div>
{% include transistor.html id="442f5ddb" title="#51 Practical Optane Persistent Memory Use Cases" %}

{% include youtube.html id="nTy8yXORkOw" %}
</div>

---

MemVerge envió la primera versión de su software en septiembre de 2020 y, a pesar de la pandemia que ralentizó la educación de los clientes sobre la nueva tecnología, surgió un buen patrón de casos de uso.

## Reducción de costos de los proveedores de servicios en la nube

La métrica clave para un operador de servicios en la nube es cuántas máquinas virtuales pueden ofrecer a sus clientes y a qué costo. El tamaño de la memoria en los servidores se convierte en el cuello de botella de cuántas máquinas virtuales pueden asignar por servidor, limitando cuán bajo puede ser su precio por máquina virtual.

El software de MemVerge con Optane proporciona una mayor cantidad de memoria por servidor, asignando un mayor número de máquinas virtuales (VMs), reduciendo así el costo por VM y aumentando la competitividad de los proveedores de servicios en la nube. El costo por VM podría ser tres veces más barato.

## Confiabilidad con bases de datos de gran memoria.

Los clientes financieros, como las bolsas de valores, los bancos y los fondos mutuos, utilizan muchas bases de datos en memoria y aplicaciones en memoria. Además de aumentar el tamaño de su memoria para tener más instancias por servidor, MemVerge resuelve los desafíos de disponibilidad de las bases de datos en memoria. Si los datos no se están guardando en el almacenamiento todo el tiempo, sino que simplemente se encuentran en la memoria, se pierden todos los datos intradiarios en caso de un fallo. Esto es catastrófico. Incluso si se han registrado todas las transacciones, se debe reproducir el registro para recuperar la base de datos, lo cual puede llevar muchos minutos o incluso horas.

MemVerge ofrece un nuevo servicio de datos que tiene una instantánea en memoria. Persiste el estado de la base de datos en Optane, que es mucho más rápido que persistir en almacenamiento. Si hay un fallo, tienes la última instantánea capturada en la memoria persistente y puedes recuperarte a partir de eso. La recuperación solo lleva uno o dos minutos, por lo que es una mejora de 60 a 100 veces.

## Reducción de secuenciación genómica mediante captura instantánea de memoria

En el ámbito de la genómica, el software MemVerge en combinación con Optane aumenta la productividad de manera exponencial. En un flujo de trabajo de análisis de datos en varias etapas, una memoria más grande significa más paralelismo en el pipeline y en el procesamiento, por lo que todo el proceso es más rápido. El uso de instantáneas también es útil aquí. Si una organización está realizando, por ejemplo, investigación sobre el cáncer o el COVID, y necesita realizar secuencias de ADN o ARN, debe pasar por aproximadamente 50 etapas de procesamiento. Cada etapa puede llevar horas, y necesitan tomar una instantánea del estado de los resultados de la computación intermedia por varias razones: primero, para volver a ejecutar o reproducir los resultados, y segundo, para comparar los resultados si modifican algunos datos. Las instantáneas se guardan en el almacenamiento y esto puede llevar de cinco a 30 minutos. En muchos casos, esto puede llevar más tiempo que el propio cálculo. Entonces, si un trabajo lleva 24 horas, pueden usar ocho horas para el cálculo y 16 horas solo para realizar estas tareas de E/S y guardar esos estados intermedios.

En lugar de hacer IO, MemVerge utiliza una instantánea después de cada paso y la guarda en la memoria persistente de Optane. En lugar de 16 horas de IO, este proceso puede tomar un minuto. Es la nueva forma de hacer IO; no es necesario realizar la serialización o deserialización para abrir un archivo, leer, escribir, etc. Todo lo que tienes que hacer es tomar una instantánea.

Aunque esto requiere mucha memoria, con MemVerge, la memoria es más grande que antes y continuará mejorando a medida que Intel innova. Dos características adicionales ayudan con este problema. Primero, se toman instantáneas periódicamente sin crear copias completas del estado de la memoria; solo son las páginas de cambios, por lo que se minimiza el uso adicional de memoria. Segundo, MemVerge puede mantener hasta 256 capas de instantáneas en la memoria, pero al mismo tiempo, puedes exportar esas instantáneas fuera de la memoria a servidores de almacenamiento o tus propios sistemas de almacenamiento. Esto se hace sin interrumpir ni afectar tu aplicación en ejecución.

Básicamente, estás creando un DVR de memoria porque en lugar de solo ejecutar tu aplicación hacia adelante, también puedes ejecutar hacia atrás casi al instante. Es una experiencia nueva.

La genómica es solo el primer ejemplo de muchas cargas de trabajo que podrían beneficiarse de esta tecnología.

Dado que MemVerge es una startup, se enfocan estrechamente en tres áreas: proveedores de servicios en la nube, aplicaciones financieras con gran memoria, y genómica y trabajos relacionados en la ciencia de datos. Sin embargo, todos estos casos de uso demuestran el poder de la combinación de la memoria persistente Optane y el software de MemVerge.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
