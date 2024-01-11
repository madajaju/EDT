---
layout: posts
title: "Historia de la Arquitectura Centrada en Datos"
number: 1
permalink: episode-EDT1-es
lang: es
nav_exclude: true
nav_order: 1
tags:
    - dataarchitecture
    - softwaredeveloper
    - microservice
    - container
    - virtualization
    - technology
    - compute
    - data

date: Thu May 07 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.bmp
image: thumbnail.bmp
summary: "En este episodio, Darren habla sobre la historia de las aplicaciones y cómo los cambios recientes, principalmente debido al aluvión de datos provenientes de Internet de las Cosas, están afectando las arquitecturas centradas en los datos. La infraestructura está lista, pero aún no tenemos una forma adecuada de gestionar todos nuestros datos. Hay tres elementos que necesitan cambiar para facilitar este proceso: las personas (organización), los procesos (operación) y la arquitectura (tecnología). Darren se centra en la arquitectura donde los datos y el procesamiento están distribuidos en miles de dispositivos periféricos y en nubes públicas y privadas."
video: "https://youtu.be/SZyyG2AGM6g"
description: "En este episodio, Darren habla sobre la historia de las aplicaciones y cómo los cambios recientes, principalmente debido al aluvión de datos provenientes de Internet de las Cosas, están afectando las arquitecturas centradas en los datos. La infraestructura está lista, pero aún no tenemos una forma adecuada de gestionar todos nuestros datos. Hay tres elementos que necesitan cambiar para facilitar este proceso: las personas (organización), los procesos (operación) y la arquitectura (tecnología). Darren se centra en la arquitectura donde los datos y el procesamiento están distribuidos en miles de dispositivos periféricos y en nubes públicas y privadas."
---

<div>
{% include transistor.html id="7dda1ee9" title="#1 History of Data Centric Architecture" %}

{% include youtube.html id="SZyyG2AGM6g" %}
</div>

---

En este episodio, Darren habla sobre la historia de las aplicaciones y cómo los cambios recientes, principalmente debido al aluvión.

de datos del Internet de las cosas, está afectando las arquitecturas centradas en datos. La infraestructura está lista, pero no estamos

aún no tenemos una forma adecuada de gestionar todos nuestros datos. Hay tres elementos que necesitan cambiar para facilitar este proceso:

flows between different systems.

y se calculan en miles de dispositivos periféricos y en nubes públicas y privadas.

## Hardware y software diseñados específicamente

Cómo desplegamos aplicaciones para misiones hoy en día no ha cambiado significativamente en treinta años. Una arquitectura de referencia.

que tiene una aplicación y una pila de aplicaciones construida en hardware específico, con computación y almacenamiento conectados a ella

red. Este modelo funcionó bien durante mucho tiempo, de hecho, aproximadamente una cuarta parte de las aplicaciones aún se están implementando.

hardware especialmente diseñado, pero no es óptimo hoy en día. La tecnología avanza demasiado rápido para este modelo; suceden desajustes.

Además, hay largos tiempos de desarrollo, altos costos, limitada reutilización de la tecnología y falta de integración con...

otras aplicaciones.

## Arquitecturas de virtualización

hardware-level virtual machines. Desde hace unos 20-25 años, la virtualización de hardware comenzó a resolver algunos de estos problemas con la capacidad de implementar máquinas virtuales a nivel de hardware.

Aplicaciones múltiples en una máquina. Las aplicaciones ya no estaban vinculadas a hardware específico. En lugar de comprar cinco.

máquinas más pequeñas, se podría utilizar una sola pieza de hardware más grande, no solo para calcular, sino también para almacenamiento virtual y red

funciona también, lo que conlleva a una mayor rentabilidad. Como con cualquier desarrollo, esto planteó algunos nuevos problemas.

aumento de preocupaciones de seguridad y "vecinos ruidosos", lo que significa que una aplicación interfiere en el rendimiento de otra

debido al uso excesivo de ancho de banda de entrada/salida, red o almacenamiento, etc..

## Arquitecturas en la nube

En la década de 2000, la tecnología en la nube despegó. Ahora podíamos compartir entre múltiples organizaciones. Donde la virtualización.

creó la abstracción del hardware, la tecnología en la nube creó la abstracción de las operaciones, facilitando la gestión de múltiples.

Espinilla el siguiente a Español: máquinas. La idea arquitectónica de la nube creó una "infraestructura definida por software", que facilita la activación y

usar los recursos informáticos, de almacenamiento y de red. Otros beneficios incluyen la disminución de los costos de inversión inicial (CapEx) y los costos operativos (OpEx), debido a la reducción de.

siguiente a español: hardware y mano de obra. También proporcionó la capacidad de estallido, por ejemplo, para minoristas durante la temporada ocupada de vacaciones o el

gobierno durante el censo. Con el avance de esta tecnología, los problemas de seguridad y los vecinos ruidosos.

privados.
El aumento se debe a múltiples inquilinos en la misma máquina. Otra preocupación son los costos de integración entre públicos y privados.

nubes privadas. A pesar de estas preocupaciones, sin embargo, los beneficios superan con creces los inconvenientes en la mayoría de los casos.

## Arquitecturas de Servicio y Contenedor

Esta es la traducción al español del texto:
"Durante los últimos cinco o seis años, hemos presenciado la reinvención de una antigua tecnología: la contenerización. Docker creó un nuevo enfoque para empaquetar y desplegar aplicaciones en contenedores virtualizados."

Una forma más fácil de usar la tecnología de contenedores que antes era complicada y difícil de utilizar. Los desarrolladores de aplicaciones, en

particular, adoptó esta tecnología porque es consistente en múltiples entornos. La capa de gestión de servicios.

Con la contenerización de aplicaciones y microservicios, la orientación se enfoca más en las aplicaciones y mapea esas aplicaciones a.

hardware genérico y virtualizado que ha sido abstraído. Ahora tenemos implementación automática en múltiples nubes.

Hemos optimizado el OpEx y también el CapEx en la pila de aplicaciones y en la capa de servicios. La tolerancia a fallos está automatizada, y

translations, and manage traffic when using a centralized controller.

micro-segmentación, etc... todo a través del software.

Seguridad, sin embargo, es una preocupación principal. Dado que los contenedores son fáciles de implementar en múltiples entornos, es

es importante centrarse en la seguridad que está "incorporada" en la implementación. Además, hay un aumento en la complejidad. Aquí,

Hemos pasado de una arquitectura de tres niveles a una arquitectura de varios niveles, e incluso a una arquitectura de microservicios con docenas de componentes.

Trabajando juntos. Otro problema es dónde y cómo se almacenan y gestionan los datos. En la gestión del servicio.

capa, el almacenamiento es un contenedor genérico, que no gestiona los datos en sí.

## Arquitecturas del Internet de las cosas

Ahora, cuando se añade el Internet de las cosas (IoT) a este ecosistema, el volumen aumentado de datos se distribuye entre cientos o

dispositivos inteligentes. También aumenta la visibilidad, pero esto crea preocupaciones adicionales de seguridad. Muchos dispositivos periféricos.

and even a smart home device if they are not properly secured. It is important for manufacturers and users to prioritize cybersecurity to prevent unauthorized access and potential disruptions to these devices.

Una drone, o cámara de seguridad. La complejidad de los diferentes dispositivos, su número y ubicaciones, junto con la inmensidad.

la cantidad de datos es enorme.

## Arquitecturas de Gestión de Datos e Información

¿Cómo podemos resolver estos problemas? Las organizaciones ya están adaptándose para manejar esta complejidad con nuevas organizaciones.

y posiciones enfocadas en casos de uso de gestión de datos. Anteriormente, no había un lugar para administrar estos casos de uso, por lo que

hemos creado una nueva capa clave llamada capa de gestión distribuida de información. Esta capa gestiona los datos en todo

La IoT, Legacy y nubes públicas y privadas. Se ajusta a los datos con pilas de aplicaciones y pilas de servicios, por lo tanto.

pueden asignar dinámicamente servicios y aplicaciones cerca de los datos, o viceversa. Las regulaciones y el gran tamaño de los datos

puede limitar la capacidad de transferir datos a ubicaciones centrales, como hemos hecho tradicionalmente. Con esta nueva arquitectura,

varios modos de operación pueden ser utilizados, incluyendo análisis desagregados, movimiento de datos y movimiento de aplicaciones.

Una vez más, con esta arquitectura expandida, la seguridad es de suma importancia. La seguridad debe funcionar como un aspecto común.

A través de todas las capas. Seguridad de identidad, lo que significa acceso, autorización y autenticación de individuos, IOT.

dispositivos, aplicaciones, servicios e incluso datos son fundamentales. El manejo de la identidad incluye el cifrado de datos confiables.

y dispositivos.

## Conclusión

translate that architecture into reality

have developed a system to optimize how they work together. The DIML layer allows for efficient and effective management of distributed information.

están empezando a ver nuevas empresas emergentes y empresas ya establecidas desarrollando los casos de uso y los elementos arquitectónicos.

en esta capa.

work together to enable business processes and deliver value to customers. It provides a framework for understanding the components and interactions of a system, allowing organizations to make informed decisions about designing, developing, and maintaining their digital infrastructure.

encajar

Intel encaja en este ecosistema al proporcionar el elemento clave de una capa física común para controlar y gestionar todo de tuyo.

translate: recursos, ya sea un dispositivo de IoT, en el centro de datos o en una ubicación remota. Te permitimos

mover eficientemente los datos, almacenarlos de manera efectiva y procesar todo. Ya sea los procesadores Xeon de alta

Traduzca lo siguiente al español: fin, o si se trata de inferencia o IA en el borde con un consumo de energía muy bajo, Intel tiene una gama completa de hardware físico.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
