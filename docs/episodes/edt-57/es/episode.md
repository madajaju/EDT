---
layout: posts
title: "Organización del Intermediario de la Nube Parte 2"
number: 57
permalink: episode-EDT57-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 57
tags:
    - cloudbroker
    - change
    - people
    - process
    - compute
    - organizationalchange
    - multicloud

date: Wed Jul 14 2021 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Dave Shrestha
    - Kevin Bleckmann

img: thumbnail.png
image: thumbnail.png
summary: "En la segunda parte de dos, Darren Pulsipher, Arquitecto Principal de Soluciones, y los Arquitectos de Soluciones en la Nube de Intel, Dave Shrestha y Kevin Bleckman, hablan sobre los beneficios y servicios de una organización de intermediación en la nube."
video: "https://youtu.be/9cZHCXE64Zs"
description: "En la segunda parte de dos, Darren Pulsipher, Arquitecto Principal de Soluciones, y los Arquitectos de Soluciones en la Nube de Intel, Dave Shrestha y Kevin Bleckman, hablan sobre los beneficios y servicios de una organización de intermediación en la nube."
---

<div>
{% include transistor.html id="3542904b" title="#57 Cloud Broker Organization Part 2" %}

{% include youtube.html id="9cZHCXE64Zs" %}
</div>

---

# Consideraciones para la Selección en la Nube

Hace siete años, cuando Dave y Kevin comenzaron por primera vez el equipo de intermediarios de nube de Intel, había algunas diferencias significativas en los proveedores de servicios en la nube, como la disponibilidad regional, pero ahora, con la madurez, las diferencias son menores. Algunos proveedores se especializan en ciertas áreas como IA y aprendizaje automático o servicios de bases de datos administradas y ricas, y hay factores de costo, pero son más similares que diferentes. En general, los proveedores de nube se están convirtiendo cada vez más en una utilidad a medida que maduran.

La seguridad es buena y bastante estándar en los proveedores de la nube. Anteriormente, Intel utilizaba productos de proveedores externos de terceros para gestionar la seguridad con los servicios en la nube. Ahora, los proveedores de la nube han integrado gran parte de eso en sus plataformas y Intel ha comenzado a utilizar más componentes incorporados. Aún queda mucho trabajo por hacer en este espacio. En algunos casos, todavía tendrás que encargarte de la seguridad por ti mismo, pero los proveedores van en la dirección correcta. Utilizar las herramientas incorporadas no es la opción más fácil para las nuevas empresas porque no está completamente gestionada, pero una vez que tienes el conjunto de habilidades y madurez, al menos las herramientas están disponibles.

La gestión de costos sigue siendo un arte; muchas personas se sorprenden con su primera factura de la nube. Aunque existen herramientas integradas, asesores y calculadoras de la nube pública que pueden ayudar, también hay costos ocultos. Los cargos de entrada y salida son probablemente la sorpresa número uno, seguido de la sobreprovisión. Intel tiene un optimizador de nube que está impulsado por Densify y ayudará a identificar los recursos sobreprovisionados y recomendar, a través de un análisis detallado, qué tamaños y familias de instancias son los más óptimos.

Algunas cargas de trabajo deben permanecer en las instalaciones, especialmente para grandes empresas como Intel que tienen un gran centro de datos en las instalaciones. El equipo de intermediarios en la nube cuenta con una herramienta interna llamada "decision framework tool" que puede ayudar a colocar la carga de trabajo adecuada en el lugar correcto, y a veces la solución óptima es mantenerla en las instalaciones.

Consideración de la carga de trabajo para la colocación en la nube pública

Sin una herramienta para hacer la determinación, hay cinco áreas a considerar.

Seguridad: Asegúrate de conocer los proveedores de identidad, el cifrado, el cumplimiento y las opciones de inicio de sesión único. Estos son los mismos elementos con los que normalmente lidiarías en un entorno local. En lugar de herramientas separadas, es mejor tener herramientas que abarquen tanto el entorno local como la nube pública para que tus equipos no tengan que aprender de nuevo herramientas separadas.

Privacidad

Estabilidad de la carga de trabajo

Afinidad de datos/gravedad de datos: Asegúrese de que su proveedor de nube tenga disponibilidad en las regiones que necesita. Algunos proveedores de nube tienen zonas de disponibilidad, o centros de datos, en todas sus regiones, y otros no. Además, si una carga de trabajo se conecta a muchos sistemas locales, no tiene sentido poner esa carga de trabajo en la nube pública.

Costo: Todavía existen algunas diferencias de costos entre proveedores de servicios en la nube públicos, especialmente en instancias de computación de gran escala. También considere los costos de salida.

## Cómo vender tu servicio de intermediario en la nube.

Comprar el servicio de intermediario de la nube puede ser difícil para algunos, como los desarrolladores que están acostumbrados a tener control y crear cualquier instancia que deseen. También puede haber dificultades iniciales. Cuando las personas en Intel obtuvieron sus cuentas por primera vez, se sentían inseguras y luego seguridad de la información les envió mensajes cuando estaban haciendo algo mal, y ellos no necesariamente sabían qué habían hecho o cómo solucionarlo. A medida que el servicio evolucionó y maduró, esos problemas se solucionaron a medida que el equipo intervenía para ayudar y luego implementaba correcciones automáticas.

Las personas vieron que el servicio era en última instancia un beneficio porque proporcionaba una forma rápida y sencilla de acceder a la nube pública con todo el apoyo que necesitaban. Después de un período, el servicio comenzó a venderse por sí mismo.

Uno de los servicios clave que ofrece el equipo es actuar como puente entre los socios comerciales finales de Intel y los grupos de seguridad de la información para neutralizar políticas de seguridad excesivamente agresivas que crean molestias y demasiados problemas de tickets. El equipo proporciona el equilibrio adecuado que permite a los desarrolladores tener suficiente libertar para trabajar dentro de un marco seguro y cumplir con los requisitos de seguridad. Básicamente, los intermediarios trabajan como mediadores entre la seguridad de la información y los desarrolladores.

El equipo de intermediarios de la nube también ofrece entrenamiento al traer a los proveedores de la nube para realizar talleres. Este beneficio también surgió del Centro de Excelencia en la Nube, donde las personas solicitaban entrenamiento en áreas específicas, y luego el equipo lo negociaba con los proveedores.

Además de proveedores externos, Intel utilizó equipos internos para mostrar lo que habían logrado con la nube pública, para que otros equipos pudieran aprovechar ese conocimiento.

Los equipos de intermediarios de servicios en la nube dentro de las empresas pueden proporcionar una variedad de servicios y beneficios como seguridad y eficiencia de costos, especialmente a medida que los servicios de la nube pública maduran y crecen, y se vuelven más necesarios para las operaciones.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
