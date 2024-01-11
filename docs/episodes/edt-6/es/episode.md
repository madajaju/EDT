---
layout: posts
title: "Gestión del teletrabajo al máximo"
number: 6
permalink: episode-EDT6-es
lang: es
nav_exclude: true
nav_order: 6
tags:
    - telework
    - remoteworker
    - vdi
    - mfa
    - cybersecurity
    - people
    - process

date: Thu Jul 23 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Tim Flynn
    - Pete Schmitz

img: thumbnail.png
image: thumbnail.png
summary: "En este episodio, Darren, Tim Flynn, Retirado Contralmirante de la Armada, y Pete Schmitz, Ejecutivo de Cuentas de la Armada de Intel, hablan sobre cómo gestionar el crecimiento explosivo de los teletrabajadores debido a la pandemia de Covid-19. Discutimos los diferentes modos que los trabajadores pueden utilizar para trabajar de forma remota y seguir siendo productivos: el dispositivo como una terminal tonta, el dispositivo como parte de la red interna y el dispositivo como un portal a servicios. Comprender estos modos de operación puede ayudar a encontrar cuellos de botella que pueden obstaculizar la efectividad de su equipo."
video: "https://youtu.be/-uQJGrcYnZ8"
description: "En este episodio, Darren, Tim Flynn, Retirado Contralmirante de la Armada, y Pete Schmitz, Ejecutivo de Cuentas de la Armada de Intel, hablan sobre cómo gestionar el crecimiento explosivo de los teletrabajadores debido a la pandemia de Covid-19. Discutimos los diferentes modos que los trabajadores pueden utilizar para trabajar de forma remota y seguir siendo productivos: el dispositivo como una terminal tonta, el dispositivo como parte de la red interna y el dispositivo como un portal a servicios. Comprender estos modos de operación puede ayudar a encontrar cuellos de botella que pueden obstaculizar la efectividad de su equipo."
---

<div>
{% include transistor.html id="24d6e2c7" title="#6 Managing Telework at Capacity" %}

{% include youtube.html id="-uQJGrcYnZ8" %}
</div>

---

## Modos de operación de teletrabajo

Los modos de operación en los que vemos a las personas trabajar dentro del Departamento de Defensa y también en el sector privado son los siguientes:

Dispositivo como una terminal tonta (VDI - Infraestructura de Escritorio Virtual)

Dispositivo como parte de la red interna (VPN - Red Privada Virtual)

Dispositivo como un portal a los servicios

La mayoría de los trabajadores están utilizando múltiples modos de operación, por lo que se deben admitir diferentes tipos a través de la infraestructura.

## Dispositivo como una terminal tonta.

En este modo, el trabajador tiene su escritorio funcionando en un servidor en el centro de datos y utiliza su laptop para conectarse al "escritorio virtual". Básicamente utilizan su laptop u otro dispositivo como una terminal "tonta". Hay algunos problemas con VDI, incluyendo escalabilidad, congestión de red, latencia y redundancia. Debido a estos problemas, una sesión de VDI puede ser bastante costosa. Sin embargo, de las tres opciones, VDI es la más segura.

## Dispositivo como parte de la red interna.

Este modo es probablemente el más común. El trabajador conecta su dispositivo a la VPN para que pueda trabajar en la red como si estuviera conectado en la oficina. Uno de los beneficios es la movilidad, ya que los trabajadores pueden conectar cualquier dispositivo como un teléfono, una tableta o una computadora portátil. Otro beneficio es que puede haber segmentos diferentes de VPN para diferentes clasificaciones de datos. Una desventaja es que los trabajadores siempre tienen que estar conectados para poder trabajar. Y aunque no hay tanto tráfico de red como con un VDI, aún habrá algo de congestión de red a medida que los datos se mueven.

## Dispositivo como un portal a servicios.

Más personas se están moviendo hacia este modo. El trabajador utiliza su dispositivo para conectarse a servicios en la nube, públicos o privados. El servicio principal que las personas están utilizando es Office 365, que permite a las organizaciones utilizar servicios en la nube en lugar de, o junto con, sus propios servicios. Eficiencia, rendimiento y la capacidad de trabajar desconectado en ocasiones son beneficios. Los inconvenientes incluyen depender de un tercero... (no estoy seguro/a cómo terminar esto - adopción/migración y seguridad)

## Emerging Bottlenecks 
Cuellos de botella emergentes

Los cuellos de botella han surgido a medida que el número de personas que trabajan desde casa ha aumentado del 15% al objetivo de más del 85%. Para los primeros dos modos de funcionamiento, la escalabilidad de VPN puede ser un cuello de botella importante. El ancho de banda limitado también es una gran fuente de cuellos de botella. Una solución para estos problemas es aprovechar los servicios en la nube para aliviar la presión. A nivel humano, las operaciones de TI y los servicios de asistencia están abrumados ya que los trabajadores se conectan desde casa por primera vez.

## Escalabilidad de VPN

Hay varias soluciones a corto plazo para ayudar a aliviar estos cuellos de botella. Priorizar el acceso de los usuarios puede ser efectivo, ya sea en función de horarios o prioridad de la misión. Es necesario educar a los empleados sobre cómo adaptarse a este entorno.

Para una escalabilidad a largo plazo, las organizaciones deberían migrar hacia soluciones SaaS utilizando computadoras portátiles como modo de portal.

## Ancho de banda a Sitios

Una de las mejores cosas que las organizaciones pueden hacer a corto plazo es averiguar cuántos usuarios de VDI tienen actualmente y ver si pueden moverlos a trabajar en la red o en modo de operación con herramientas de colaboración. Esto reducirá drásticamente la carga en el ancho de banda. Es posible que también deba aumentar las capacidades de su red después de evaluar cómo trabajan sus usuarios remotos. La educación es, una vez más, una parte esencial de este cambio para que los trabajadores utilicen las mejores prácticas, por ejemplo, desconectarse de la VPN cuando no la estén utilizando y configurar herramientas de respaldo para que funcionen fuera del horario laboral. A largo plazo, sugerimos una arquitectura de nube híbrida múltiple que le brinde la capacidad de aprovechar los proveedores de servicios en la nube para el ancho de banda de la red y la capacidad de explosión, y optimizar los costos y la capacidad.

## Escalabilidad de servicios alojados

Para ayudar en la implementación de arquitecturas escalables con fines a corto plazo, existen varias referencias excelentes, incluyendo las arquitecturas de referencia de Outlook Web Access (OWA) y VDI.

De nuevo, a largo plazo, recomendamos migrar a una infraestructura de nube híbrida múltiple para lograr elasticidad, capacidad, rendimiento predictivo, cumplimiento y seguridad.

## Operaciones de TI

¿Cómo podemos escalar al equipo de la mesa de ayuda que probablemente esté abrumado? Una idea es tener preguntas frecuentes en línea para facilitar la referencia de los trabajadores. Las soluciones contribuidas por la comunidad de usuarios y moderadas por el departamento de TI también pueden ser útiles. Idealmente, las organizaciones deberían utilizar un sistema de gestión de tickets para identificar cuellos de botella y agilizar los procesos. Además, todo lo que se pueda automatizar para evitar tareas repetitivas debería ser automatizado a través de la automatización de procesos robóticos (RPA) o scripts adicionales, por ejemplo. Una solución a largo plazo podría ser la implementación de Chat Bots de IA como una mesa de ayuda de autoservicio de TI. Rápidamente pueden reducir las soluciones en línea utilizando palabras clave o recomendar el contacto.

## Traducción: Conclusión

En última instancia, Intel desea ver que las organizaciones tengan éxito durante este momento difícil en el que los trabajadores están cambiando de la oficina al trabajo remoto y lidiando con mucho estrés. Intel puede ayudar a la industria, al gobierno y a los sectores públicos. Tenemos silicio que funciona en todos estos aspectos. Contamos con socios que ofrecen soluciones de hardware y software, y por supuesto, vendemos PCs y dispositivos para clientes que permiten a los trabajadores remotos.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
