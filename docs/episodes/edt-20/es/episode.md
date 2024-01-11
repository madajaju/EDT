---
layout: posts
title: "Destruyendo la complejidad de las capas de almacenamiento"
number: 20
permalink: episode-EDT20-es
has_children: false
lang: es
nav_exclude: true
parent: Episodios
grand_parent: Español
nav_order: 20
tags:
    - data
    - optane
    - technology
    - storage
    - vastdata

date: Tue Sep 08 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Randy Hayes

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Randy Hayes de VAST Data y Darren Pulsipher, Arquitecto Jefe de Soluciones del Sector Público de Intel, discuten la arquitectura de almacenamiento innovadora de VAST Data que elimina la necesidad de niveles utilizando NVMe sobre Fabrics, QLC Flash y 3D XPoint Optane."
video: "https://youtu.be/url"
description: "Randy Hayes de VAST Data y Darren Pulsipher, Arquitecto Jefe de Soluciones del Sector Público de Intel, discuten la arquitectura de almacenamiento innovadora de VAST Data que elimina la necesidad de niveles utilizando NVMe sobre Fabrics, QLC Flash y 3D XPoint Optane."
---

<div>
{% include transistor.html id="a3a3329f" title="#20 Destroying the Complexity of Storage Tiers" %}

{% include youtube.html id="url" %}
</div>

---

## Treinta años de complejidad en el almacenamiento

El almacenamiento puede ser un concepto antiguo, pero VAST Data ha alcanzado el estatus de unicornio en poco más de un año de envíos de ingresos. VAST ha reemplazado la antigua arquitectura de sistemas de almacenamiento multinivel con un sistema único y monolítico que es rápido y rentable. Las soluciones de VAST también eliminan el problema de los sistemas de almacenamiento grandes y desordenados que consisten en diferentes sistemas de archivos y arquitecturas diferentes.

## Una fundación para una nueva arquitectura.

El fundador de VAST estaba considerando el almacenamiento desde una perspectiva de una hoja en blanco. Descubrió que los clientes no necesariamente necesitaban más rendimiento de Flash, sino que necesitaban soporte para almacenamiento de archivos y objetos a un costo más bajo. Aprovechó tres tecnologías que no existían antes de 2018. La primera es NVMe sobre Fabrics, que se utiliza como una especie de almacenamiento de escala hiperconvergente para conectar todo con baja latencia. A continuación, está QLC Flash porque es económico y no tiene partes móviles como los discos duros. Tercero está el Optane 3D XPoint de Intel. Optane tiene paridad de lectura y escritura y tiene una resistencia alta a un precio razonable. Al combinar estas tres tecnologías, VAST tiene la capacidad de ofrecer un rendimiento totalmente Flash, pero a un precio comparable al de un disco duro. Elimina la necesidad de otros niveles que las organizaciones compran porque son baratos.

## Presentando Vast Data Universal Storage

El sistema VAST es la primera arquitectura desagregada y compartida de todo. Esto significa que la lógica está separada del estado del sistema de archivos. En cambio, el estado del sistema de archivos se encuentra en cajas de datos que contienen QLC Flash y Optane. El Optane se utiliza como un gran depósito de metadatos. Es multiusos, al igual que el sistema, que se denomina almacenamiento universal. Con estas cajas, no existe un único punto de falla, por lo que la capacidad es teóricamente ilimitada. (VAST ha probado el sistema en aproximadamente 50 petabytes en un solo sistema de archivos). Puedes aumentar la capacidad simplemente agregando servidores x86 económicos a los clústeres. Debido a que es un sistema de archivos paralelo, cualquier usuario puede acceder a cualquier dato de cualquiera de los servidores como si estuviera conectado directamente, por lo que puedes seguir escalando.

También puedes mejorar el rendimiento de forma independiente de la capacidad. Lo único que podría inhibir el rendimiento del flash es la CPU, así que al tener la capacidad de escalar sin problemas el número de CPUs en el clúster, puedes aumentar el rendimiento.

Uno de los problemas que se resuelve con esta estructura es la latencia. Muchas organizaciones necesitan una baja latencia para todos sus datos. Debido a que cada uno de estos servidores sin estado tiene acceso a todo, se tiene un rápido acceso a todos los datos.

## DASE Arquitectura: Agrupaciones de Servidores

Otro gran beneficio es que es fácil ajustar el almacenamiento de una organización. La naturaleza componible de los servidores sin estado y la ausencia de comunicación entre ellos te brinda la capacidad de construir un clúster que se adapte mejor a tus necesidades. Por ejemplo, puedes segmentar tus cajas de control según las diferentes cargas de trabajo, pero todas ellas pueden acceder a los mismos datos.

Además, el sistema funciona bien con una organización que necesita distintas capas de clasificación para acceder a los datos. Tienes la capacidad de segregar a qué tienen acceso los usuarios mediante la creación de múltiples zonas de acceso con direcciones IP virtuales. Uno de los desafíos con NFS es que se transmite básicamente a todo. Si limitas las transmisiones a un subconjunto de direcciones IP, te da la capacidad de dividir esas arquitecturas diferentes en sistemas discretos.

## Aplicaciones de Puentes de Almacenamiento Universales Eras

Esta no es solo una solución destinada a clústeres de HPC; no es prohibitiva en cuanto a costos. Muchas compañías están utilizando VAST primero para respaldo y establecer confianza. Por ejemplo, el Instituto Nacional del Cáncer tiene un archivo de biblioteca de cintas y querían poder acceder a la información más rápidamente. Evaluaron diferentes plataformas y VAST ofreció un precio más bajo y todo en Flash, lo cual es más rápido que su sistema NAS de producción. Por lo tanto, esta solución tiene un buen precio y es útil para la compartición de archivos en general y una variedad de cargas de trabajo, como IA, análisis de registros, Splunk, entre otros, no solo para HPC. Las soluciones de VAST son simples de gestionar y verdaderamente universales.

VAST es una empresa joven, pero tiene múltiples instalaciones en agencias gubernamentales como el Instituto Nacional de Salud y los tres laboratorios del Departamento de Energía, donde se requiere un rendimiento máximo para estas supercomputadoras. Este es un sistema potente en algunos de los entornos de HPC más grandes del mundo, que respalda aplicaciones críticas para la misión.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
