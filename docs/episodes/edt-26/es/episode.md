---
layout: posts
title: "Soluciones de datos Multi Cloud con Hammerspace"
number: 26
permalink: episode-EDT26-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 26
tags:
    - hammerspace
    - data
    - technology
    - dataarchitecture
    - multicloud
    - compute
    - multihybridcloud
    - datamesh

date: Wed Oct 21 2020 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Johan Ballin

img: thumbnail.png
image: thumbnail.png
summary: "Johan Ballin, Director de Marketing Técnico en Hammerspace, y Darren Pulsipher, Arquitecto Principal de Soluciones en el Sector Público de Intel, discuten la tecnología de nube híbrida de Hammerspace que libera los datos de la infraestructura de almacenamiento, proporcionando portabilidad y rendimiento de datos."
video: "https://youtu.be/9bLpCtVq9CM"
description: "Johan Ballin, Director de Marketing Técnico en Hammerspace, y Darren Pulsipher, Arquitecto Principal de Soluciones en el Sector Público de Intel, discuten la tecnología de nube híbrida de Hammerspace que libera los datos de la infraestructura de almacenamiento, proporcionando portabilidad y rendimiento de datos."
---

<div>
{% include transistor.html id="301a5c10" title="#26 Multi Cloud Data Solutions with Hammerspace" %}

{% include youtube.html id="9bLpCtVq9CM" %}
</div>

---

El almacenamiento está listo para la disrupción. Actualmente, la gestión de datos se realiza de forma engorrosa, procesal y a menudo manual y propensa a errores. Hammerspace fue fundada para resolver este problema mediante la abstracción de datos de la infraestructura de almacenamiento.

## Imagina por un segundo...

...si tus datos estuvieran liberados de la infraestructura de almacenamiento. Libres de las limitaciones impuestas por los sistemas de almacenamiento actuales, los usuarios podrían gestionar y proteger sus propios datos, cambiar el perfil de costos instantáneamente y acceder a los datos desde cualquier lugar de la infraestructura. El almacenamiento definido por software podría aumentar el rendimiento según la demanda y desplegar cargas de trabajo modernas como Kubernetes en cualquier infraestructura subyacente en cualquier lugar.

## El Desafío

Las aplicaciones se han vuelto portátiles, pero los datos todavía están aislados. El desafío es que el rendimiento, la confiabilidad y la gestionabilidad, todos sufren a gran escala debido al problema de aislamiento. La solución es liberar los datos de las limitaciones de la infraestructura subyacente. Hammerspace logra esto mediante la desagregación de metadatos, asimilando las partes constituyentes más pequeñas para hacer que los datos sean portátiles.

## Desvincular los datos del almacenamiento.

Con esta tecnología, tus aplicaciones cuentan con datos bajo demanda estés donde estés. Tienes control independiente, planos de datos y un espacio de nombres global y un sistema de archivos que abarca múltiples centros de datos y nubes. El almacenamiento está orquestado; los datos están completamente automatizados y aprovechan la gestión declarativa y autónoma de datos. En otras palabras, se separa el "cómo" del "qué", declarando el estado final deseado sin tener que detallar cada aspecto de cómo llegar allí.

## Arquitectura de Hammerspace

El sistema te permite operar a nivel granular de archivos, proporciona servicios de datos de clase empresarial como instantáneas y clones, y se mueve fácilmente a una escala masiva desde un centro de datos a otro, desde un centro de datos a la nube, y de regreso al centro de datos para dispersarlo en un escenario de nube híbrida múltiple.

## El almacenamiento heredado no puede superar los desafíos modernos.

El almacenamiento heredado no se escala suficientemente, incluso con soluciones de escalado horizontal, en la nube o en una escala planetaria, ya que incluso esos clústeres se convierten en silos, dejándote a veces atrapado con datos que no se pueden correlacionar ni analizar. El almacenamiento tradicional también tiene dificultades para escalar la capacidad y el rendimiento de forma independiente.

La replicación es una tecnología antigua que conduce a la dispersión de datos copiados. En lugar de mover las partes constituyentes más pequeñas, estás moviendo toda la carga útil. La gestión de datos a menudo se considera algo secundario; la gestión de datos pertenece al frente, no a la parte trasera.

Un problema que la arquitectura de Hammerspace resuelve es encontrar cosas fácilmente. La versión puede llevar a grandes problemas empresariales. Por ejemplo, tanto Airbus como Boeing han tenido problemas masivos porque algunos ingenieros no tenían sus versiones más actualizadas. La solución es orquestar los datos.

## Orquestación de datos

Orquestación, en primer lugar, es el desacoplamiento de todos los silos diferentes; los datos son tratados como un único conjunto. Hammerspace asimila las partes más pequeñas constituyentes, los metadatos, para crear, en esencia, un sistema de antigravedad de datos. Luego implementan objetivos como durabilidad, disponibilidad y snapshots, o acciones personalizadas definidas que se pueden realizar a través de scripts de Hammer. Por último, los datos, ya sea Kubernetes, NFS o SMB, se vuelven portátiles y se integran en el sistema.

Lo que esto significa en la práctica es que no necesitas ir a otro silo para atender una carga de trabajo específica. Los datos se entregan donde tú quieres que estén. Esta movilidad de datos es clave porque es en tiempo real; no se trata de una migración de datos, lo cual es disruptivo y causa tiempo de inactividad.

Para minimizar los costos caros de egress, los datos se deduplican y comprimen en una base granular de archivos. En lugar de mover un volumen fijo completo, puedes seleccionar los datos que deseas mover según cualquier tipo de expresión, como carpetas, etiquetas de metadatos o un descriptor de cliente. Esto ofrece flexibilidad y ahorro de costos.

## Arquitectura de Hammerspace

En la arquitectura de Hammerspace, el sistema de archivos global tiene tres componentes a nivel alto: el propio sistema de archivos global, la presentación del frontend (NFS, controlador CSI y SMB) y Anvil dentro del sistema de archivos global. Anvil es el componente de gestión de metadatos y DSX, que proporciona servicios de gestión de metadatos. Estos pueden implementarse como máquinas virtuales, VMware, KBM o Hyper-V. Anvil tiene una configuración en forma de A, por lo que hay al menos dos de ellos en cada ubicación. DSX se puede paralelizar para aumentar el rendimiento, por lo que se pueden tener varios de ellos en diferentes ubicaciones para asegurarse de tener suficiente rendimiento. Se pueden reducir fácilmente.

En el back end, el almacenamiento subyacente puede ser el almacenamiento definido por software propio de Hammerspace, con discos directamente conectados, NAS asimilado, cualquier nube o cualquier combinación. Esto también puede escalarse horizontalmente, por lo que ahora puedes escalar el rendimiento y la capacidad de forma independiente. Siguiendo el modelo de la nube, también es elástico, por lo que si el negocio cambia en esa ubicación específica, puedes reducir el rendimiento y la capacidad para asegurarte de que las aplicaciones tengan exactamente lo que necesitas en esa ubicación. Todo esto crea una arquitectura muy flexible para atender cualquier carga de trabajo de aplicación en el front end.

Una gran ventaja de esta arquitectura flexible es la capacidad de asimilar datos que se están almacenando en dispositivos que no son tuyos, como NAS o en la nube. Esto simplifica el traslado de datos. Por ejemplo, si tienes un NAS antiguo y deseas migrar a un NAS más nuevo, no importa si son del mismo proveedor o de proveedores diferentes. Hammerspace asimila los metadatos y traslada los datos por detrás y de manera completamente transparente a las aplicaciones, porque es una movilidad de datos en tiempo real. Otra ventaja significativa es que no hay tiempo de inactividad al mover los datos.

Si deseas probar esta tecnología, ve a hammerspace.com y comienza con una prueba gratuita con una licencia de hasta 10 terabytes desplegados en Azure, AWS o Google Cloud.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
