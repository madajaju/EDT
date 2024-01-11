---
layout: posts
title: "Seguir y asegurar el borde de Bit hasta la nube."
number: 64
permalink: episode-EDT64-es
lang: es
nav_exclude: true
nav_order: 64
tags:
    - edge
    - compute
    - multicloud
    - cybersecurity

date: Wed Sep 01 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Greg Clifton
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquitecto Principal de Soluciones de Intel, discute siguiendo el tema junto a Greg Clifton, Director de DOD e Inteligencia de Intel, en un seguimiento al episodio n. ° 2, junto con Steve Orrin, CTO Federal de Intel, quien aporta su experiencia en seguridad en entornos complejos de borde a nube."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquitecto Principal de Soluciones de Intel, discute siguiendo el tema junto a Greg Clifton, Director de DOD e Inteligencia de Intel, en un seguimiento al episodio n. ° 2, junto con Steve Orrin, CTO Federal de Intel, quien aporta su experiencia en seguridad en entornos complejos de borde a nube."
---

<div>
{% include transistor.html id="24225e6c" title="#64 Follow and Secure the Bit Edge to Cloud" %}

{% include youtube.html id="url" %}
</div>

---

En el episodio número 2, Greg explicó las complejas cuestiones de recolectar, mover y analizar datos en un entorno del Departamento de Defensa (DOD) que incluye dispositivos periféricos en barcos, aviones e incluso combatientes, y la necesidad de mover y analizar esos datos rápidamente para tomar decisiones oportunas y acertadas. El papel de Intel es ayudar a acortar los ciclos del proceso y aliviar los cuellos de botella en el flujo de datos con su cartera de tecnología. Se trata de ajustar la tecnología a la misión.

Una tendencia arquitectónica reciente es trasladar el cálculo, el procesamiento y la inteligencia hacia adelante para que se encuentren con los datos en lugar de trasladar los datos al backend. Este ajuste proporciona la mejor capacidad para obtener respuestas e inteligencia en tiempo real. Este enfoque representa un modelo operativo diferente que plantea preguntas desafiantes.

## Hardware heterogéneo

En la infraestructura fundamental, ¿cómo proporcionas la capacidad adecuada de cálculo, almacenamiento, memoria y red para impulsar el análisis en el borde y procesar donde lo necesitas? ¿Cómo gestionas esas aplicaciones y datos? ¿Cómo introduces calidad y curaduría de datos en líneas superiores de la cadena de suministro? La seguridad es una pieza fundamental de cualquier infraestructura, y ahora, los datos deben estar protegidos siempre, incluso en el borde.

La industria necesita adoptar computación más heterogénea para que el software subyacente pueda funcionar en diversas plataformas de hardware y así no quedar encerrado en un software o plataforma de hardware específica. Parte de la belleza de lo que Intel ha hecho durante años es proporcionar portabilidad de software: el marco abierto, x86 y otros sistemas subyacentes.

Un factor importante en cómo Intel desarrolla capacidades es entender la carga de trabajo y el flujo de datos en lugar de centrarse en la modernización, como colocar cosas en la nube. No se trata de cómo se adquiere la tecnología de la información (en la nube o en las instalaciones), sino de optimizar el flujo de negocios para aprovechar cómo fluyen los datos y qué es lo que realmente hacen.

## DevOps al rescate

Otro aspecto crítico de estas nuevas soluciones es el tiempo de implementación. DevOps se ha vuelto cada vez más importante en todo el Departamento de Defensa, y los esfuerzos para desarrollar plataformas comunes de DevOps han aumentado drásticamente. Para escribir código una vez y ejecutarlo en cualquier lugar (en la nube, en las instalaciones o en el borde), las organizaciones utilizan el chipset x86 y el oneAPI de Intel para implementar servicios complejos en todo el ecosistema completo. Por ejemplo, oneAPI permite a los desarrolladores escribir tareas de análisis o de IA complejas que se ejecutan en una GPU, una CPU o incluso en FPGAs con la misma base de código. Luego, los desarrolladores pueden probar estos sistemas complejos en su centro de datos, asegurando que se comportarán de la misma manera cuando se implementen en el campo, lo que reduce el tiempo de implementación.

Poder aprovechar una combinación de un entorno DevOps flexible, que utiliza la contenerización y los frameworks de software como oneAPI, brinda a los programadores la abstracción que necesitan pero con optimizaciones de hardware/software incorporadas. Una distinción clave aquí es que hemos descubierto una forma de aprovechar toda la potencia del hardware y optimizar el software de manera que una aplicación aún pueda obtener mejoras de rendimiento y aprovechar al máximo el hardware especializado.

El ecosistema de contenedores proporciona una abstracción a nivel del sistema, por lo que las cosas no necesitan ser codificadas de forma rígida. Proporciona la capacidad de escalar hacia arriba o hacia abajo según la carga de servicios y la capacidad. Por ejemplo, si una capacidad se ejecuta en el borde, en un centro de datos portátil o en la nube, y pierde conectividad o un recurso, aún puede llevar a cabo la misión. Esta conectividad intermitente es vital en un entorno del Departamento de Defensa.

## Soluciones Edge

Muchas personas piensan en Intel como un proveedor de silicio o hardware, pero la empresa ha desarrollado soluciones y arquitecturas de referencia en el ecosistema desde el borde hasta la nube. Un ejemplo de progreso es una red táctica naval donde el procesamiento ocurre en el borde, barcos, aviones y en tierra. Las aplicaciones deben poder ejecutarse en todo el ecosistema, y eso no puede hacerse solo con hardware. Intel ha aprovechado sus características de silicio y seguridad, y construyendo sobre un ecosistema de contenedores, ha producido aplicaciones complejas con varios microservicios que pueden ejecutarse cuando los activos están conectados y desconectados.

Otro ejemplo de arquitecturas de borde es el seguimiento de objetos a través de mallas de sensores, incluso con brechas en la malla de sensores. Al realizar la fusión de sensores, la fusión de datos y el análisis entre dominios, se pueden rastrear objetos en diferentes escenas y en diferentes tipos de sensores, escalando hacia arriba y hacia abajo para crear una plataforma de sensores móviles que pueda realizar análisis y fusión en el borde. Luego, también puede transferirse a un conjunto distribuido de nodos que pueden trabajar en conjunto para rastrear un objeto en todos esos sensores existentes diferentes.

Por ejemplo, si estás rastreando un objeto y se mueve entre sensores, lo perderás por un momento. Lo que esta inteligencia te permite hacer es conectar esas dos transmisiones y rastrear los puntos ciegos. Esto no solo funciona con tipos de sensores homogéneos, sino que también puede funcionar con múltiples tipos de sensores como sensores de movimiento, RF e infrarrojos, por lo que si pierdes el vídeo pero aún tienes un RF y luego vuelves a capturar el vídeo, puedes mostrar la trayectoria completa del objeto. En el pasado, este tipo de análisis requería mover los datos al centro de datos para procesar estas interacciones complejas; ahora, podemos hacer esto en el borde de la malla de sensores a través de microservicios en el borde.

## Flexibilidad de implementación

Un enfoque ventajoso es construir una vez y usar la misma arquitectura y software para diferentes misiones con un requisito analítico. En algunos lugares donde la computación de alta carga está en el límite, se pueden ampliar y aprovechar al máximo las capacidades del hardware. Otras plataformas pueden tener capacidades de cálculo limitadas y pueden ejecutar microservicios más pequeños que solo proporcionan una parte de la solución completa. Las nuevas capacidades y servicios de misión se pueden implementar rápidamente construyendo estos microservicios una vez para múltiples casos de uso.

## Seguridad en el Borde

La complejidad es a veces el peor enemigo de la seguridad, pero los principios fundamentales de seguridad también pueden asegurar los datos y aplicaciones en la periferia. En lugar del enfoque antiguo de proteger el servidor y esperar que todo permanezca allí, es esencial comprender hacia dónde fluyen los datos y en cada lugar donde existe, protegiéndolos sin importar en qué se estén ejecutando. Enfoques basados en el riesgo y conceptos como la confianza cero han ganado impulso porque adoptan una visión independiente del sistema de seguridad.

Hablando en términos simples, "zero trust" significa denegación por defecto. Nadie ingresa a menos que sea necesario, y aún así, solo por el tiempo necesario para la acción requerida. Cuando los controles de acceso temporales se combinan con un enfoque basado en el riesgo para proteger los datos a lo largo de su ciclo de vida, el resultado es la capacidad de proteger los datos sin importar dónde se encuentren ni quién los esté accediendo. Esta técnica es una de las formas de asegurar estos entornos altamente complejos.

La acción práctica a tomar en estos ecosistemas es aplicar una política que aproveche los controles que cumplan con el riesgo de un sistema dado en un momento dado, y luego monitorear y actualizarlos de forma continua en tiempo real para enfrentar el mundo cambiante de amenazas cibernéticas. Utilizar los controles técnicos que las capacidades de hardware y software ya proporcionan, como Secure Boot, raíz de confianza de hardware con módulos TPM o claves de almacenamiento SGX, encriptación, etc.

No hay una solución milagrosa que puedas comprar para ofrecer una solución integral de seguridad en estos ecosistemas complejos. Se trata de crear y hacer cumplir políticas de seguridad a medida que evolucionan las amenazas y desplegarlas a gran escala, aprovechando hardware, software y los procesos necesarios para asegurar los bits a medida que fluyen desde el borde hasta todo el ecosistema.

El marco de trabajo DevOps proporciona mecanismos efectivos para manejar la seguridad en todos los activos del ecosistema. Los contenedores deben estar equipados con instrumentación para hacer cumplir los controles y políticas de seguridad. La seguridad debe integrarse en el propio proceso DevOps porque si se confía en que el desarrollador implemente la seguridad, cada uno lo hará de manera ligeramente diferente, aumentando la complejidad y la variabilidad en el sistema. El desarrollador debe tener las capacidades y las limitaciones sobre las cuales debe desarrollar.

Los desarrolladores aún tendrán que realizar trabajo de seguridad, como asegurarse de utilizar herramientas de seguridad adecuadas para el entorno de amenazas específico, pero el trabajo pesado, la complejidad, debe ser abstraído en la arquitectura de DevOps.

Una de las áreas críticas en un entorno teatral complejo es la gestión de dispositivos periféricos, como monitorización y actualización de firmware. Asegurarse de que esos dispositivos estén seguros para poder respaldar la seguridad de datos y perfiles y políticas implementadas en los sistemas a gran escala requerirá innovación. Por eso, actualmente, el ecosistema está creciendo considerablemente: para enfrentar ese desafío.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
