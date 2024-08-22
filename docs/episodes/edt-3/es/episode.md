---
layout: posts
title: "Beneficios de la arquitectura Multi-Cloud"
number: 3
permalink: episode-EDT3-es
lang: es
nav_exclude: true
nav_order: 3
tags:
    - multicloud
    - organizationalculture
    - flexibility
    - security
    - compliance
    - efficiency

date: 2020-06-23T00:00:00.000Z
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Una arquitectura de nube multi-híbrida permite a las organizaciones aprovechar los beneficios de las nubes privadas y públicas, optimizando los recursos y la eficiencia de costos. Este modelo tiene cinco ventajas principales: agilidad, flexibilidad, rendimiento predictivo, seguridad y cumplimiento, y eficiencia."
video: "https://youtu.be/14mcgaHLoPU"
description: "Una arquitectura de nube multi-híbrida permite a las organizaciones aprovechar los beneficios de las nubes privadas y públicas, optimizando los recursos y la eficiencia de costos. Este modelo tiene cinco ventajas principales: agilidad, flexibilidad, rendimiento predictivo, seguridad y cumplimiento, y eficiencia."
---

<div>
{% include transistor.html id="f87aa67c" title="#3 Benefits of Multi-Cloud Architecture" %}

{% include youtube.html id="14mcgaHLoPU" %}
</div>

---

## Agilidad

La agilidad es la capacidad de moverse rápidamente para adaptarse a las condiciones cambiantes en nuevas tecnologías, nuevas aplicaciones y nuevas amenazas como seguridad y competencia. Un modelo multi-híbrido permite la habilidad de mover cosas entre nubes privadas y públicas, o incluso de infraestructuras heredadas a nubes. Puede ser tentador para los equipos de desarrollo utilizar inicialmente la nube pública bajo plazos ajustados porque pueden crear y desactivar rápidamente la infraestructura, pero puede haber problemas de integración en las etapas finales de implementación de las aplicaciones en el producto. Esto puede resultar en retrasos costosos. Al utilizar el modelo multi-híbrido, muchos de estos puntos de integración se exponen al equipo de desarrollo tempranamente. El desarrollo de aplicaciones utiliza esto para fallar rápido y temprano en el proceso de desarrollo.

## Flexibilidad

La flexibilidad en la infraestructura es un pariente cercano de la agilidad. Mientras que la agilidad implica la capacidad de moverse rápidamente, la flexibilidad se refiere a la capacidad de cambiar. Para lograr la máxima flexibilidad, los desarrolladores necesitan tener la habilidad de desplegar una aplicación en cualquier lugar, ya sea en nubes privadas o públicas, o en infraestructuras heredadas, sin quedar atrapados en los servicios o infraestructuras de una única nube.

Al implementar una plataforma de gestión en la nube (CPM) en una arquitectura multi-híbrida, las cargas de trabajo se pueden redirigir fácilmente a diferentes nubes según el costo, la seguridad y la confiabilidad.

Un ejemplo de las consecuencias de la falta de flexibilidad es la decisión temprana de Netflix de utilizar únicamente un proveedor de servicios en la nube. Esta nube pública tuvo un problema de infraestructura que resultó en tiempo de inactividad, y Netflix no pudo transmitir durante varias horas en la costa este de Estados Unidos. Después de ese desastre, Netflix implementó una solución de múltiples nubes para poder migrar rápidamente a otra nube en caso de problemas. Además, ahora tienen la capacidad de moverse hacia donde tenga más sentido en cualquier momento, según el costo, la seguridad y la confiabilidad.

Las aplicaciones de una nube híbrida multiplataforma son la portabilidad y la flexibilidad operativa. Al no estar limitados a la forma de hacer las cosas de una sola nube, los desarrolladores podrán escribir código que pueda ser fácilmente transportado entre diferentes nubes. Además, tendrás la flexibilidad operativa para mover las cargas de trabajo entre nubes y ofrecer a tus clientes lo que deseen de manera segura, consciente de los costos y confiable.

## Rendimiento predictivo

Las nubes públicas a menudo tienen un costo: "vecinos ruidosos", que pueden afectar el rendimiento predictivo o la calidad de servicio (QoS).

Cuando se utiliza una nube pública, muchas veces no sabes qué o quién más está ejecutando en la misma máquina, matriz de almacenamiento o red que tú. Para algunas cargas de trabajo, esto no es un problema. Sin embargo, si tienes una aplicación en la que necesitas un rendimiento más predecible, los vecinos ruidosos o aquellos que monopolizan el ancho de banda, la E/S de disco, la CPU y otros recursos pueden interferir con los resultados de QoS que necesitas.

Las nubes privadas también pueden verse afectadas por vecinos ruidosos, pero dado que eres dueño de la infraestructura y las aplicaciones son propias, tienes la capacidad directa de administrarlas. Un vecino ruidoso en la nube pública es como vivir en un edificio de apartamentos donde tienes opciones limitadas para lidiar con los juerguistas de al lado. Por otro lado, los vecinos ruidosos en tu nube privada son como vivir en una casa con niños indisciplinados que puedes controlar de inmediato restringiendo los recursos.

Una estrategia de nube híbrida te brinda la capacidad de colocar cargas de trabajo y aplicaciones "sensibles" en nubes privadas y otras cargas de trabajo y aplicaciones en infraestructuras de nube pública para obtener eficiencia en costos y recursos. Muchas herramientas híbridas te permiten caracterizar cargas de trabajo con requisitos de QoS para ayudar en la colocación automática y óptima de las cargas de trabajo en diferentes infraestructuras de nube.

## Seguridad y cumplimiento normativo.

Hay algunos peligros al hacer las cosas de manera automatizada en las nubes públicas y privadas. Sin embargo, si la seguridad se incorpora en la arquitectura multi-híbrida, esta automatización se convierte en un beneficio porque significa que se puede imponer un perfil de seguridad en todos tus activos en la nube, ya sean privados o públicos, además de la infraestructura heredada. Este perfil de seguridad común se aplica en todas partes y las aplicaciones se despliegan basándose en esos perfiles.

Por ejemplo, en una nube privada, si deseas un tipo específico de seguridad, como vincular una aplicación determinada a una máquina determinada que solo se ejecuta en esa nube privada, fácilmente puede ser un requisito en el perfil de un sistema multicráter.

En un sistema multi-híbrido, también hay muchas herramientas excelentes para auditar y monitorear tu infraestructura. No solo puedes monitorear lo que está sucediendo en tu nube privada, sino también en la nube pública, lo que te alertará sobre posibles ataques maliciosos que podrían infectar tu nube privada o tus activos de infraestructura heredados.

## Eficiencia

Hay muchas ideas contradictorias sobre la eficiencia. Si observas diferentes calculadoras de coste total de propiedad (TCO), encontrarás respuestas diferentes sobre si las nubes privadas o públicas son las más rentables. Una solución de nube multi-híbrida puede resolver este dilema para tu organización a través de una mayor visibilidad y aprovisionamiento dinámico.

Con una arquitectura de nube híbrida y un orquestador inteligente, tu orquestador puede utilizar telemetría de tus nubes privadas y públicas, así como de tu infraestructura heredada, para tomar decisiones óptimas sobre dónde debería cargar la carga de trabajo tanto en la actualidad como en el futuro. Otro beneficio de esta visibilidad es que puedes decidir si es eficiente que las aplicaciones se ejecuten de forma continua. Un ejemplo de esto es cómo ayudamos al sistema del gobierno de Canadá a funcionar de manera más eficiente al reducir los costos asociados con la ejecución de una aplicación en la nube pública cuando nadie la está utilizando. En lugar de ejecutar una aplicación específica las 24 horas del día, ahora la ejecutan durante 18 horas, 5 días a la semana, según el uso real.

Esta visibilidad también te ayudará a identificar y eliminar cargas de trabajo y aplicaciones en fin de vida (EOL), lo cual te ahorrará dinero real. Para la nube privada, esto libera recursos que pueden ser utilizados para otras cargas de trabajo, aumentando así tu eficiencia. Además, los intermediarios de la nube en la arquitectura multi-híbrida buscarán la opción más económica sin comprometer la calidad de servicio (QoS) para una carga de trabajo específica. Esto reduce el costo general de ejecutar la carga de trabajo y también te brinda visibilidad sobre el costo real de utilizar una nube pública o privada en particular.

* Visibilidad de costos en todas las nubes e infraestructura heredada.

Impulsar cargas de trabajo y aplicaciones hacia los costos más bajos manteniendo los mismos acuerdos de nivel de servicio.

* Impulsar un mayor aprovechamiento de la infraestructura de nube privada.

## Llamado a la acción

Las arquitecturas de nube multi-híbrida están brindando a los directores de informática (CIOs) la capacidad de adelantarse a las demandas de sus clientes, pero todavía hay mucho trabajo duro que debe realizarse. Construir una estrategia de nube multi-híbrida incluye cambios organizativos, conductuales y técnicos que no pueden suceder de la noche a la mañana. Desarrollar una visión y un plan arquitectónico sólidos es clave para implementar una estrategia de nube multi-híbrida que pueda aprovechar las fortalezas de las nubes multi-híbridas y evitar la ineficiencia del "objeto brillante" del mes en las industrias técnicas.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
