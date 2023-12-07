---
layout: posts
title: "Datos resistentes en comunicaciones disruptivas"
number: 136
permalink: episode-EDT136-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 136
tags:
    - sabr
    - ddil
    - technology
    - edge
    - process
    - devops
    - security

date: Mon May 01 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "En este episodio de podcast, Darren Pulsipher, arquitecto jefe de soluciones de Intel para el sector público, es entrevistado por la presentadora invitada, la Dra. Anna Scott, sobre datos resilientes con comunicaciones disruptivas."
video: "https://youtu.be/url"
description: "En este episodio de podcast, Darren Pulsipher, arquitecto jefe de soluciones de Intel para el sector público, es entrevistado por la presentadora invitada, la Dra. Anna Scott, sobre datos resilientes con comunicaciones disruptivas."
---

<div>
{% include transistor.html id="a2a806f7" title="#136 Resilient Data in Disruptive Comms" %}

{% include youtube.html id="url" %}
</div>

---

En este episodio de podcast, Darren Pulsipher, arquitecto principal de soluciones de Intel para el sector público, es entrevistado por la presentadora invitada, la Dra. Anna Scott, sobre datos resistentes con comunicaciones disruptivas. La discusión se centra en la gestión segura y eficiente de datos en entornos con ancho de banda limitado y servicio interrumpido, permitiendo la inteligencia artificial y análisis de datos complejos en el borde. Darren habla sobre su experiencia trabajando en la nube de vehículos conectados de Toyota como base para resolver este problema y cómo se utilizaron arquitecturas comunes de gestión de datos para crear una solución. La revelación gradual de los desafíos por parte del cliente ayudó a identificar patrones de diseño que abrieron la arquitectura para una solución exitosa.

A pesar de la conectividad intermitente y los nodos de borde dinámicos, el proceso de diseño de la arquitectura para realizar análisis de borde es complejo y difícil de articular, por lo que adoptaron un enfoque iterativo. En primer lugar, consideraron una solución que llevaría todos los datos a un solo lugar para su análisis, pero resultó poco práctica debido al volumen de datos en el borde. Mover las aplicaciones al borde parecía prometedor hasta que el cliente solicitó análisis agregados en todo el borde. Después de explorar patrones de diseño, optaron por utilizar el patrón de diseño de flujo de datos con un concentrador de publicación y suscripción para crear flujos de datos para consumidores y productores de forma dinámica. Si bien este enfoque utiliza raíces bien establecidas en TI, inicialmente el cliente tenía preocupaciones sobre la asignación de temas.

En el pasado, Darren tenía que crear de antemano un ecosistema de PubSubHub y estar familiarizado con todos sus componentes. Sin embargo, configurar flujos de datos con Kafka o Apache Pulse resultaba desafiante y, además, configurar la seguridad era aún más difícil. Utilizando su experiencia en DevSecOps, se ideó una solución que agrupa las definiciones de flujo de datos, las definiciones de entrada y salida, y las transformaciones de datos en un paquete consumible por el pipeline. Este paquete crea automáticamente flujos de datos en PubSubHub y configura todas las medidas de seguridad necesarias. El resultado simplificó la complejidad, ya que los desarrolladores solo necesitaban enfocarse en algoritmos o modelos de inteligencia artificial, mientras que todo lo demás se encargaba de manera genérica. El enfoque iterativo con los clientes ayudó a modificar arquitecturas e implementaciones a lo largo del camino.

El desafío clave con este tipo de arquitectura es trabajar con recursos limitados, como solo tener acceso a dos núcleos y 2 gigabytes de RAM. ¿Cuánto procesamiento de datos puede ocurrir en la periferia con recursos limitados? Una de las limitaciones con las que el equipo de arquitectura necesitaba trabajar era hacer que el administrador de transmisión SABR y las medidas de seguridad fueran lo más pequeños posible. Darren eliminó el código al mínimo indispensable y eliminó paquetes de terceros innecesarios. El objetivo era crear un gestor de transmisión ligero que pudiera ejecutarse en la periferia y ser portátil en diferentes entornos. La arquitectura resultante de Saber era escalable y adaptable, capaz de ejecutarse desde un reloj inteligente hasta un servidor Xeon grande.

Darren y Anna discuten las dificultades de actualizar modelos de inteligencia artificial en un ecosistema distribuido con numerosas instancias de las mismas analíticas en funcionamiento. Para resolver este problema, SABR creó un flujo de datos de aprendizaje que conecta todas las instancias de las mismas analíticas y maneja las comunicaciones intermitentes, el almacenamiento en caché y el envío de deltas para actualizar los modelos. También desarrollaron un sistema de canal de datos utilizando el patrón de diseño de estrategia de política, lo que permite enviar diferentes canales con niveles variables de datos según reglas definidas por políticas. Este enfoque permite una transmisión de datos más eficiente, reduce la cantidad de datos procesados y aumenta la precisión de los modelos de inteligencia artificial.

A continuación, se explica cómo operar en el entorno DDIL priorizando el envío de datos al enviar primero resúmenes e información histórica antes que datos en tiempo real. Es importante definir las expectativas del sistema y las políticas de comunicación desde el principio para asegurar la consistencia en todo el ecosistema. Se cuenta con un proceso de creación y activación de políticas fácil de usar basado en JSON y JavaScript que elimina la duplicación de esfuerzos y promueve la reutilización. La arquitectura tiene la capacidad de añadir rápidamente nuevas capacidades aprovechando los sabers existentes y las transformaciones de datos.

Lo último es la resiliencia del sistema al recuperarse dinámicamente de las interrupciones en el sistema. Existe un potencial para el uso dinámico y flexible de la red SABR. Incluso si un nodo se cae, es posible mover un SABR a otra caja y seguir recibiendo todos los datos entrantes. También es posible utilizar computación heredada ejecutando un SABR muy liviano en un sistema antiguo que recopila y transmite datos a la red SABR. No se debe pasar por alto la importancia de la seguridad. Todos los flujos de datos están encriptados y los procesos están configurados para establecer confianza y certificación de los SABRs para prevenir el suplantamiento y el espionaje de datos. En general, la red SABR ofrece una solución prometedora para procesar datos en el borde con flexibilidad y seguridad.

El aprendizaje clave es el enfoque arquitectónico iterativo que el equipo utilizó para descubrir los casos de uso y los problemas que los usuarios finales estaban experimentando. Al simular la arquitectura, pudieron encontrar defectos y obtener comentarios de los clientes. Además, el uso de patrones de diseño fue esencial para acelerar el enfoque arquitectónico. La utilización de la abstracción también proporcionó la capacidad de intercambiar diferentes tecnologías a lo largo del proceso arquitectónico. Darren cree que este enfoque ha facilitado la creación de soluciones fáciles de usar y aprovechar el conocimiento actual de los clientes.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
