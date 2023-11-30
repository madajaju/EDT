---
layout: posts
title: "Camino de Ataque Cibernético Precog con XM Cyber"
number: 99
permalink: episode-EDT99-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 99
tags:
    - aiml
    - cybersecurity
    - xmcyber
    - technology
    - process

date: Mon Aug 08 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Paul Giorgi

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquitecto de Soluciones Principal de Intel, y Paul Giorgi, Director de Ingeniería de Ventas de XM Cyber, discuten cómo la tecnología de XM Cyber puede ayudar a las organizaciones a descubrir caminos de ataque y reducir el riesgo."
video: "https://youtu.be/G9PfJdHZi08"
description: "Darren Pulsipher, Arquitecto de Soluciones Principal de Intel, y Paul Giorgi, Director de Ingeniería de Ventas de XM Cyber, discuten cómo la tecnología de XM Cyber puede ayudar a las organizaciones a descubrir caminos de ataque y reducir el riesgo."
---

<div>
{% include transistor.html id="60eaf764" title="#99 Precog Cyber Attack PAth with XM Cyber" %}

{% include youtube.html id="G9PfJdHZi08" %}
</div>

---

Paul ha estado en seguridad desde finales de los años noventa, comenzando haciendo proyectos para el Departamento de Seguridad Nacional y el Departamento de Defensa. En 2005, se unió a Fishnet Security como ingeniero de ventas y se ha dedicado a la ingeniería de ventas. Se unió a XM Cyber para concentrarse en la simulación de brechas y ataques.

En lugar de la ciberseguridad tradicional, que se basa en la detección, remediación y prevención, XM Cyber es predictiva. Una buena descripción es que es una simulación precognitiva. XM Cyber crea incidentes imaginarios para brindarte una visión de cómo tus herramientas podrían abordarlos y cómo podrías trabajar para remediar puntos de congestión específicos. La idea es hacer todo esto antes de las pruebas de penetración. Puedes solucionar cosas hoy, ver el impacto mañana y luego mejorar continuamente tu seguridad.

Google Maps es una buena analogía de cómo XM Cyber funciona. Cuando quieres ir de un lugar a otro, Google Maps te dirá todas las formas de llegar, evitando peajes, la ruta más directa, etc. XM Cyber hace lo mismo pero con una simulación de ataque. Por ejemplo, supongamos que tienes una cuenta de usuario de active directory comprometida. En ese caso, te mostrará los seis pasos para poder llegar a un controlador de dominio local y comprometer ese activo crítico. También mostrará todas las diferentes rutas entre esos dos puntos.

Un caso de uso para esto es que puedes permitir que un equipo rojo sea súper eficiente con esta información, porque no tienen que buscar a tientas y tratar de hacer descubrimientos. También puede ayudar a la sección azul, permitiéndoles priorizar las soluciones en los puntos de estrangulamiento. Por ejemplo, si hay 400 rutas de ataque que van a diferentes áreas en tu DMZ, pero todas las 400 parecen tener que aprovechar esta única entidad para que esa ruta suceda, entonces puedes resolver ese único problema y destruir las 400 rutas. Los equipos azules pueden asegurar esos puntos de estrangulamiento que podrían permitir al atacante.

Un área que XM Cyber analiza es la gestión de identidad, no solo en el centro de datos, sino también en la nube. A veces, las vías de ataque pueden tener diez pasos de longitud, pero nueve de esos pasos estarán relacionados con la navegación en el mundo de la identidad. Por ejemplo, es posible que tengas permisos en tu cuenta de administrador, y luego esa cuenta de administrador puede tener permisos adicionales. Se pueden tomar seis o siete pasos ajustando diferentes permisos o restableciendo contraseñas y desplegando GPOs (Objetos de Directiva de Grupo). Se podrían dar nueve pasos desde una cuenta de usuario estándar a una de administrador de dominio aprovechando el Directorio Activo.

Además de la identidad, XM Cyber analiza más de cien entidades como máquinas, depósitos S3 y claves SSH. Estas diferentes entidades pueden combinarse para crear una ruta de ataque. A veces se vuelve muy complejo. Por ejemplo, un ataque podría comenzar en la ubicación local, pasar a Azure, aprovechar Intune y luego regresar para comprometer otra máquina que permita un salto a GCP. Una vez que los atacantes se encuentran en el entorno de GCP, pueden aprovechar la confianza o permisos entre AWS y GCP para comprometer AWS. XM Cyber examina todos los diferentes tipos de entidades en entornos dispares y las conecta para evaluar estos caminos en función de cómo cada entidad juega de manera integral en el riesgo de las demás.

Hay dos formas en que XM Cyber se involucra con los clientes. La primera es un descubrimiento de alto nivel para evaluar el entorno, exponer vulnerabilidades y medir cómo un atacante puede revelar nuevas vulnerabilidades para poner en riesgo activos críticos. La segunda es una evaluación dirigida de un escenario específico que preocupa al cliente. Estos compromisos no son solo análisis estáticos de entidades. Son dinámicos porque observan el tráfico y otros patrones.

Un caso de uso típico es determinar si OT es el activo crítico o el punto de brecha. XM Cyber pone en juego casos como si una máquina en Recursos Humanos fuera el punto de brecha, ¿hay algún riesgo para este PLC que se encuentra en el entorno SCADA y controla interruptores de presión que podrían apagar la electricidad de una municipalidad? Ese es un caso de uso real que XM Cyber puede simular. Este tipo de información es crucial en un mundo donde OT ya no está aislado, sino conectado a redes.

XM Cyber es una solución SaaS en lugar de estar en las instalaciones, para poder mantenerse dinámico y ofrecer el mejor servicio. Puede ser aterrador pensar que algo en la nube tiene todas tus técnicas de ataque. Sin embargo, XM Cyber hace mucho trabajo para asegurar que los datos estén completamente aislados, cumplan con SOC 2, entre otras certificaciones, y no haya multi-tenencia. Además, no recopilan nada sensible. La información sensible se cifra, y solo una parte se envía a la nube. No necesitan tener datos reales.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
