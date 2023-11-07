---
layout: posts
title: "Seguridad del Controlador de Red con Elisity"
number: 101
permalink: episode-EDT101-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 101
tags:
    - networksecurity
    - cybersecurity
    - elisity
    - comms
    - technology
    - process

date: Mon Aug 22 2022 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Dan Demers
    - Dana Yanch

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher de Intel, Arquitecto Jefe de Soluciones, Sector Público, entrevista a los expertos en seguridad de redes Dana Yanch y Dan Demers de Elisity sobre técnicas de seguridad del controlador de la red y arquitecturas de confianza cero."
video: "https://youtu.be/st0HrHNmEUI"
description: "Darren Pulsipher de Intel, Arquitecto Jefe de Soluciones, Sector Público, entrevista a los expertos en seguridad de redes Dana Yanch y Dan Demers de Elisity sobre técnicas de seguridad del controlador de la red y arquitecturas de confianza cero."
---

<div>
{% include transistor.html id="d4feba70" title="#101 Network Controller Security with Elisity" %}

{% include youtube.html id="st0HrHNmEUI" %}
</div>

---

Dana ha estado trabajando en redes de alta intensidad durante los últimos 15 años. Ha trabajado con redes definidas por software y redes de área amplia, y se enfocó en el mundo de SD-WAN durante un tiempo. Luego trabajó con la nube, pero regresó a sus raíces en seguridad de redes en Elisity.

Dan ha trabajado principalmente en networking, pero comenzó con servicios avanzados en Cisco y realizó algunos trabajos en la industria del petróleo y gas en Houston. Luego se adentró en el espacio SASE SD-WAN, donde trabajó con Dana. Ahora se enfoca en seguridad de redes y seguridad definida por software. Dan afirma que el término, sin embargo, resulta esquivo porque la tecnología es micro-segmentación a través de la identidad.

La forma tradicional de crear microsegmentación mediante VLANs y firewalls ya no es suficiente. Durante los últimos 15 años, la seguridad de red se ha centrado en fortificar el perímetro de la red. Asegurar una muralla impenetrable alrededor de una empresa sigue siendo esencial, y los firewalls hacen un trabajo increíble para mantener a las personas fuera de la red. Pero en su mayor parte, el interior de la red, donde ha habido una explosión de nuevos requisitos de conectividad debido a IoT y OT, es un territorio sin restricciones una vez que un usuario se encuentra dentro. Dado que la pared exterior es robusta, se considera a menudo que cualquiera dentro es un usuario legítimo o de confianza.

La realidad es que la mayoría de los ataques actuales están ocurriendo dentro de la red a través de usuarios, dispositivos y aplicaciones de confianza aprovechados.

Hay muchas razones por las que aprovechar VLAN, ACL de IP, firewalls y métodos de segmentación tradicionales ya no funcionan hoy en día para la seguridad del movimiento lateral. Pueden funcionar en entornos estáticos a pequeña escala. Son muy efectivos en el borde de la red y lugares específicos como cuellos de botella o puntos de agregación, pero hay tres razones comunes por las cuales ya no son ideales.

Primero, la escalabilidad y eficiencia operativa de los métodos tradicionales son cuestionables. La gestión de VLAN, ACL de IP y firewalls en grandes empresas se realiza manualmente. No se trata de una arquitectura definida por software distribuida, sino que requiere una configuración caja por caja, línea por línea. No son dinámicos ni responden a nada en la red. Además, su uso crea una red de queso suizo llena de agujeros aleatorios. Los usuarios, especialmente los operadores de redes, suelen ser el mayor riesgo de un sistema. Por ejemplo, pueden abrir una VLAN o cambiar alguna configuración para hacer una prueba rápida y luego no deshacer el cambio.

Otro ejemplo es que una VLAN comenzará con un caso de uso y gradualmente se extenderá a otros casos de uso. De repente, lo que era una VLAN de diez dispositivos ahora tiene 60 dispositivos. En el mundo de la OT, puede tener seis o siete procesos diferentes ejecutándose dentro de ella porque era la LAN de confianza. Sin embargo, a menudo estos entornos crecen lentamente y no están documentados, por lo que el riesgo pasa desapercibido.

El segundo problema es que las VLAN y los firewalls se encuentran inherentemente en el lugar incorrecto de la red para proporcionar seguridad de movimiento lateral. Si te encuentras en la misma VLAN que otro dispositivo, usuario o aplicación, ese canal de comunicación está abierto incluso si no debería serlo. Los firewalls normalmente no se despliegan en un lugar estratégico donde puedan manejar el nivel de acceso del movimiento lateral. Es necesario dirigir el tráfico hacia un firewall y hacerlo volver, lo cual es ineficiente. Entonces, se crea un cuello de botella.

Los actores maliciosos están buscando en las redes para ver cómo pueden manipularlas para obtener algún resultado, no cómo deberían o fueron diseñadas para funcionar. Por ejemplo, si un usuario está en una VLAN y se está ejecutando un proceso dentro de un caso de uso, no hay nada que los detenga de ir del puerto 3 al puerto 32 en esa misma VLAN. A menudo, las personas diseñan la seguridad en base al uso previsto en lugar de cómo podría ser utilizado. Es común, por ejemplo, que los desarrolladores de software salten de puertos para trabajar de manera efectiva, pero eso es peligroso porque los deja expuestos. Nadie puede colocar cientos o miles de firewalls en todo el borde de acceso. Eso sería restrictivo desde el punto de vista fiscal e imposible de gestionar.

El tercer problema es que estas soluciones de segmentación heredadas no consideran la identidad, el contexto o el comportamiento del activo conectado a la red. Es una topología rígida y centrada en la red que ofrece algunas medidas de seguridad esenciales. Pero una dirección IP no dice nada sobre la legitimidad del activo y la red a la que está conectado. Entonces, ¿cómo puedes asegurar dinámicamente esta red cuando no sabes lo que se está conectando a ella? No puedes establecer una política sin ningún grado de detalle; tratar a todos los dispositivos por igual ya no funciona.

Aunque exista un análisis del tipo de tráfico, generalmente ocurre varias paradas más arriba, lo que significa que ahora tienes exposición. Cualquier acción de cumplimiento puede o no ser capaz de proteger completamente la infraestructura.

Esta capacidad de detección aún tiene valor, incluso si no hay protección. Aún así, la capacidad de detener algo que podría haber ocurrido justo en el límite, lo más cerca posible del activo, es una solución mejor.

Echa un vistazo al próximo episodio de esta serie [aquí](episode-EDT101).



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
