---
layout: posts
title: "Gestión de la complejidad en la nube"
number: 66
permalink: episode-EDT66-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 66
tags:
    - data
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - aiven

date: Wed Oct 13 2021 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - David Esposito

img: thumbnail.jpg
image: thumbnail.jpg
summary: "En este episodio, parte 2 de 2, Darren continúa su conversación con David Esposito, Arquitecto de Soluciones Global de Aiven, sobre cómo acelerar la adopción de la nube mientras se reduce la complejidad y el costo."
video: "https://youtu.be/OIIPkoZHKiw"
description: "En este episodio, parte 2 de 2, Darren continúa su conversación con David Esposito, Arquitecto de Soluciones Global de Aiven, sobre cómo acelerar la adopción de la nube mientras se reduce la complejidad y el costo."
---

<div>
{% include transistor.html id="49896b3b" title="#66 Managing Complexity in the Cloud" %}

{% include youtube.html id="OIIPkoZHKiw" %}
</div>

---

## Reducir la complejidad

¿Qué prácticas comerciales se deben implementar al administrar activos en la nube para disminuir la complejidad? En primer lugar, es necesario contar con código de infraestructura e implementaciones automatizadas. Todo lo que viene después es una conversación para definir qué riesgos existen para la empresa, como interrupciones y tiempo de inactividad, cómo mitigar estos riesgos y cuánto invertir en ello.

Para algunas empresas, es fundamental tener el nivel más alto de tiempo de actividad. En la atención médica, por ejemplo, es posible que deba tener todas las copias de seguridad de datos en múltiples ubicaciones, así como todos los servicios disponibles porque las decisiones críticas para salvar vidas podrían basarse en esos datos. Pero si estás en comercio electrónico en abril, tal vez puedas pasar algún tiempo en esa región enferma porque las consecuencias no son tan graves.

En el sector de la salud, tiene sentido adoptar la multicloud, aunque aumente la complejidad. Otros sectores que pueden beneficiarse de la multicloud son aquellos altamente regulados como los servicios financieros, el petróleo y gas, o las agencias federales. Si ocurre un incidente de seguridad, pueden desactivar uno y desplegar en otro lugar.

Cuando consideres el uso de múltiples nubes, debes tener en cuenta que existen algunas complejidades debido a las diferencias en las API. Si estás en GCP y sabes cómo implementar todo y estás pensando en pasar a AWS, tendrás que aprender nuevamente la plataforma y el proceso de implementación, incluso posiblemente escribir parte de ese código. Por esta razón, la contenerización es popular, porque te permite implementar en cualquier lugar. Sin embargo, se vuelve más complejo con otros servicios; por ejemplo, Postgres tiene diferentes configuraciones en AWS en comparación con GCP, tal vez con diferentes versiones de parches, diferentes configuraciones de red y diferentes extensiones. Por lo tanto, un servicio en una nube no es lo mismo que los servicios en otra.

Además, los entornos contenerizados no son ideales para todas las situaciones, y una situación ideal se vuelve más importante a medida que se escala. Si estás utilizando Kafka y enviando 1,000 mensajes por segundo, tu propio contenedor está bien. Pero si comienzas a enviar más de un millón de mensajes por segundo, un gigabyte, eso es una conversación diferente.

## Seguridad

La seguridad en la nube es una bestia diferente a la seguridad en tu propio centro de datos. Lo más importante a considerar es que los datos salen de tus propias paredes. Debes tener controles de seguridad adecuados para garantizar que los datos no se filtren ni tengan acceso no autorizado, y asegurarte de cumplir con los requisitos de cumplimiento. Esto requiere capacitación, ya que las medidas de seguridad para los centros de datos locales no se traducen directamente a la nube. Por ejemplo, los contenedores de S3 están encriptados en reposo, pero no si tienes acceso programático a través de buckets expuestos públicamente.

Además, necesitas saber qué hacen los proveedores de servicios. Por ejemplo, Aiven ejecuta bases de datos en GPUs EC2, GCP Compute o Azure. Cuando almacenan en disco, hay un nivel de encriptación que se realiza en el nivel de la nube por parte del proveedor de la nube, por lo que los datos están encriptados en reposo. Luego, Aiven realiza otra capa de encriptación con sus propias claves administradas, por lo que los datos están doblemente encriptados en reposo, y cualquier dato en tránsito está encriptado. Todo lo que se envía al servidor está encriptado para ese servidor en particular, y cuando un servidor se da de baja, se bloquea con la clave de Aiven y la clave del proveedor de la nube.

## Aiven

David se unió a Aiven como parte del equipo de arquitectura de soluciones cuando vio que la compañía ofrecía soluciones en la nube mejores que cualquier otra que había visto, basado en su experiencia previa con Kafka administrado y otras tecnologías de código abierto. La misión de Aiven es mejorar la vida de los desarrolladores. Ofrecen una prueba gratuita, con Kafka listo para producción en cinco minutos. También cuentan con artículos de ayuda y tutoriales para guiarte, de modo que puedas enviar un mensaje a Kafka en la nube siguiendo las mejores prácticas nativas de la nube en menos de diez minutos.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
