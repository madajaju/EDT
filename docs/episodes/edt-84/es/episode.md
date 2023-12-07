---
layout: posts
title: "Asegurando tu castillo con la confianza cero"
number: 84
permalink: episode-EDT84-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 84
tags:
    - cybersecurity
    - zerotrust

date: Sat Aug 20 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin
    - Cameron Chehreh

img: thumbnail.png
image: thumbnail.png
summary: "En este episodio, Darren discute la seguridad de confianza cero con Steve Orrin de Intel, CTO del sector público, y Cameron Chehreh, VP-GM del sector público."
video: "https://youtu.be/url"
description: "En este episodio, Darren discute la seguridad de confianza cero con Steve Orrin de Intel, CTO del sector público, y Cameron Chehreh, VP-GM del sector público."
---

<div>
{% include transistor.html id="e3f35ec7" title="#84 Securing Your Castle with Zero-Trust" %}

{% include youtube.html id="url" %}
</div>

---

El antiguo modelo de seguridad se podría comparar con un castillo, con guardias a lo largo del camino y un foso rodeando el castillo. Todas las joyas de la corona, en este caso, los datos, estarían ubicadas y gestionadas de forma centralizada dentro del castillo. La aparición de la filosofía de confianza cero ha creado un nuevo marco de referencia.

La mayor amenaza para los datos es el usuario final, por lo que la estrategia número uno es un marco que comienza en el borde exterior con pilares de excelencia y protecciones internas. Esta forma actualizada de pensar permite a las organizaciones involucrar a su misión y socios comerciales en la conversación de una manera real.

El antiguo estilo de pensamiento era más bien un enfoque de caparazón duro, con protecciones y controles en los lugares vulnerables. Una parte clave de la arquitectura de confianza cero es un enfoque basado en el riesgo, que es más dinámico y se basa en dos cosas: lo que ha funcionado y lo que no ha funcionado en el pasado. Entonces, si los atacantes entraron por la puerta izquierda la última vez, por supuesto, reforzarás las defensas allí, pero también aprenderás de ese ataque y fortalecerás otros lugares basándote en el nuevo conocimiento de cómo ocurrió eso. Un enfoque basado en el riesgo no solo resuelve el último ataque, sino que también piensa en el futuro y aplica los controles adecuados para las amenazas actuales y futuras en toda la empresa.

Parte del enfoque basado en riesgos es comprender el ecosistema. Los clientes, socios y usuarios son todos parte del cálculo de seguridad. El enfoque antiguo de caparazón duro no funciona. Al igual que un castillo tiene gente y suministros entrando y saliendo, y las riquezas pueden estar ubicadas en varios lugares del reino, la confianza cero lleva la seguridad un paso más allá, teniendo en cuenta todas las entradas y salidas de los datos o las personas que acceden a ellos.

Tradicionalmente, alguien podía obtener acceso con una sola sesión iniciada al castillo corporativo. Hay varios principios de confianza cero, pero las dos bases son el rechazo por defecto y la vigilancia y autorización continua. La confianza no se gana automáticamente, ni es permanente. Por ejemplo, si un invitado entra al castillo, se validan en la recepción y luego se les pregunta qué están visitando. Es posible que se les conceda acceso para visitar a una persona en una habitación durante cierto tiempo, y se les acompañará durante su recorrido. También se les controlará lo que ingresen y saquen durante su visita.

La filosofía de seguridad conocida como "cero confianza" se aplica a todo tipo de acceso en diversas ubicaciones: centros de datos, nubes, dispositivos periféricos, entornos empresariales, entre otros. Esta filosofía se centra tanto en los datos como en el acceso, y se combina con un enfoque basado en el riesgo. Se requiere una estrategia más amplia para su implementación. El enfoque basado en cero confianza resultante no descarta lo que ha funcionado bien anteriormente, sino que combina los buenos procesos, principios y tecnologías, y agrega un elemento temporal.

Este nuevo elemento no es tan difícil como se ha retratado con frecuencia, pero es un problema de proceso y cultura que puede ser complicado.

Muchos desarrolladores tienen miedo de que una arquitectura de confianza cero los ralentice, pero los expertos en seguridad y los desarrolladores necesitan tener una alianza para superar esa percepción. Un ejemplo del mundo real es Log4j. Hace seis meses, los desarrolladores podían descargarlo sin problema, pero ahora el entorno de amenazas ha cambiado. Sin un enfoque basado en el riesgo, un desarrollador podría descargar Log4j hasta que alguien de seguridad lo interrumpiera. Con un enfoque basado en el riesgo, junto con enfoques de acceso, Log4j no estaría disponible y se ofrecería una alternativa. Otro ejemplo sería cuando Log4j ya está incorporado en un producto, la evaluación dinámica de confianza podría agregar controles adicionales en lugar de bloquearlo por completo. Se trata de ambos lados del cálculo en juego.

Esta asociación es similar al entrenamiento cruzado y el intercambio de información que se necesita para incorporar la seguridad en el proceso de desarrollo. Mientras se construye y se prueba un producto, la seguridad también monitorea y evalúa el riesgo tanto para las entidades con las que trabajas como para las vulnerabilidades del producto en tiempo real. Adoptar un enfoque basado en el riesgo en el proceso aprovecha la inteligencia que llega al corazón de mucho de lo que percibimos como difícil.

¿Cuál es el primer paso para que los CISOs, CIOs o CTOs inicien la confianza cero? Cameron sugiere dejar de lado el "lenguaje técnico" y comunicarse en inglés común. Iniciar la iniciativa puede ser desafiante porque típicamente los líderes trabajan con un resultado u objetivo en mente. La confianza cero no tiene un objetivo definido hacia el cual trabajar, aparte de crear un entorno más seguro para que los usuarios operen. Por supuesto, hay indicadores clave de rendimiento y otras medidas para mostrar un aumento en la seguridad, pero es un viaje, no un destino. También enfatiza la financiación continua; no incrustar el presupuesto de ciberseguridad en el presupuesto de TI. Debe ser separado y distinto.

El mejor lugar para encontrar información de alto nivel con orientación práctica es la publicación SP 800-207 del NIST. También establece los cinco pilares de la confianza, que son puntos de inicio válidos.

Un aspecto primordial y fundamental es tener un buen inventario de activos de lo que necesita ser protegido, como fuentes de datos, bases de datos, procesos de negocio y aplicaciones de transacciones. Básicamente, necesitas definir el perímetro de tu castillo. Es importante no solo pensar en lo que posees, sino también en en lo que dependes, como el entorno SAAS, la infraestructura en la nube y las herramientas de terceros.

El panorama general es conocer tu cadena de valor. No solo se trata de lo que hay en tu castillo, sino cómo ganas dinero, cómo se distribuye ese dinero, a quién pagas y tus proveedores. Cada uno es una pieza crítica de la cadena.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
