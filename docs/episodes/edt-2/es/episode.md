---
layout: posts
title: "Siga el Bit"
number: 2
permalink: episode-EDT2-es
lang: es
nav_exclude: true
nav_order: 2
tags:
    - iot
    - dod
    - edge
    - technology
    - data
    - cybersecurity

date: Wed Jun 17 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "En este episodio, Darren entrevista a Greg Clifton, Director del Departamento de Defensa (DOD) e Inteligencia de Intel Corp. Discuten los desafíos de la gestión de datos en un sistema complejo que abarca múltiples nubes, centros de datos empresariales, centros de datos regionales y entornos tácticos. Escucha a Darren y Greg seguir un poco de datos desde su recolección y recorrido a través de este ecosistema hasta la producción de información útil para analistas y combatientes. Escucha a Darren y Greg discutir algunos de los obstáculos en este entorno grande y circular, y soluciones para ayudar a obtener información útil para los analistas y devolverla a los combatientes."
video: "https://youtu.be/url"
description: "En este episodio, Darren entrevista a Greg Clifton, Director del Departamento de Defensa (DOD) e Inteligencia de Intel Corp. Discuten los desafíos de la gestión de datos en un sistema complejo que abarca múltiples nubes, centros de datos empresariales, centros de datos regionales y entornos tácticos. Escucha a Darren y Greg seguir un poco de datos desde su recolección y recorrido a través de este ecosistema hasta la producción de información útil para analistas y combatientes. Escucha a Darren y Greg discutir algunos de los obstáculos en este entorno grande y circular, y soluciones para ayudar a obtener información útil para los analistas y devolverla a los combatientes."
---

<div>
{% include transistor.html id="caf42ad5" title="#2 Follow the Bit" %}

{% include youtube.html id="url" %}
</div>

---

## El Internet de las cosas es el comienzo.

La implementación generalizada del Internet de las cosas (IoT) ha estado tomando más tiempo del esperado por la industria. Muchos culpan a los retrasos en la adopción y despliegue del 5G en todo el mundo, pero hay otro problema que ha frenado la implementación de sistemas robustos de IoT: la gestión de la complejidad. A medida que los datos se mueven a través del sistema desde el borde, borde agregado, red, centro de datos y nube, asegurar los datos es una preocupación importante, ya que la superficie de ataque aumenta al moverse fuera del centro de datos tradicional. Hay soluciones específicas que ayudan a mejorar estos problemas, pero aún no hay una arquitectura de solución completa que resuelva todos los problemas de este centro de datos sin paredes.

## Complejidad del entorno del Departamento de Defensa

El IoT ya es complejo y el Departamento de Defensa aumenta la complejidad debido a los tipos de productores y consumidores de datos. En el lado del productor, se adhieren sensores a satélites, aviones, barcos y vehículos; incluso los combatientes en sí mismos son básicamente centros de datos móviles. La cantidad de datos que estos dispositivos periféricos producen puede abrumar una red. El número de dispositivos heterogéneos puede hacer que gestionarlos parezca casi imposible, especialmente cuando los dispositivos se comunican con diferentes protocolos y tienen diferentes niveles de clasificación. En otras palabras, recopilar los datos no es el problema; el problema es hacer que lleguen a manos de aquellos que toman decisiones en un formato útil y rápido.

Además, la conectividad puede ser problemática con los dispositivos periféricos. Entornos hostiles donde la conectividad de red a un centro de datos es inexistente o irregular pueden retrasar los datos. Esto significa que una solución en este espacio debe funcionar en modos de operación conectados y desconectados. La velocidad de entrega es un factor clave de éxito; pueden estar en juego vidas si las decisiones basadas en los datos se retrasan.

## Marco común para aplicaciones, datos y seguridad.

Obviamente, necesitamos soluciones para estos problemas. De suma importancia es un marco común para gestionar la complejidad de estas nuevas arquitecturas de TI que están fuera de las paredes tradicionales del centro de datos. El marco debe abordar la gestión de aplicaciones, datos y seguridad. Necesitamos poder implementar aplicaciones portátiles y reutilizables en cualquier lugar del sistema, desde el borde hasta la nube: la doctrina "escribe una vez, ejecuta en cualquier lugar". Esto nos da la capacidad de desarrollar, probar e implementar aplicaciones rápidamente sin tener que configurar todas las permutaciones de configuraciones de hardware en el ecosistema. El uso de herramientas en el ecosistema de contenedores debería ayudar con esto. Las herramientas basadas en Kubernetes (K8s) son una buena opción, ya que se han convertido en el estándar de facto en la comunidad de DevOps.

Administrar aplicaciones de forma aislada, sin embargo, no es suficiente. Todas las aplicaciones necesitan datos en cierta medida, por lo que comprender dónde se encuentran los datos, a dónde van y cómo se clasifican es clave para soluciones exitosas. Necesitamos un entorno operativo común para administrar y gobernar las diferentes clases de datos, como dominios, límites de seguridad, gobernanza, gestión del ciclo de vida de los datos y ubicación de los datos. Un entorno operativo común aumenta la flexibilidad y velocidad de implementación de aplicaciones.

Un marco común de seguridad también es necesario. La pregunta crítica es cómo asegurar tus datos en todas sus formas y seguir compartiéndolos. Existen soluciones de hardware y software actuales y una progresión continua en esta área. Soluciones de seguridad básicas, como la encriptación, deberían ser fundamentales. Por supuesto, esto requiere el motor subyacente adecuado para el almacenamiento y la capacidad. Otra preocupación es la entrada de datos erróneos o maliciosos en el sistema. Establecer una raíz de confianza como base también es necesaria en este vasto ecosistema.

## Procesamiento en el borde, centro de datos y nube.

¿Dónde interviene Intel en este entorno? Podemos ayudar a proporcionar la infraestructura subyacente que respalda estos sistemas en rendimiento y eficiencia energética. Ya sea que esté procesando información de sensores en el borde en un entorno de baja potencia (piense en Atom y diseños de ASIC personalizados), o esté realizando entrenamiento de inteligencia artificial o inferencia en su centro de datos (Xeon y cómputo neuromórfico), Intel tiene un procesador que puede ayudar a convertir los datos en bruto en información valiosa y accionable, el componente clave en este entorno complejo orientado a la misión.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
