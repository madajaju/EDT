---
layout: posts
title: "Estrategia Digital y Arquitectura de Datos"
number: 24
permalink: episode-EDT24-es
has_children: false
lang: es
nav_exclude: true
parent: Episodios
grand_parent: Español
nav_order: 24
tags:
    - data
    - dataarchitecture
    - aiops
    - secops
    - devsecops
    - devops
    - compute
    - technology
    - process

date: Tue Oct 06 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, arquitecto principal de soluciones, sector público, de Intel, describe la estrategia digital y la arquitectura para transformar eficazmente tu organización. Explica cómo los elementos organizativos, procedimentales y tecnológicos deben equilibrarse para trabajar de manera eficiente hacia una arquitectura común e ideal que respalde una visión unificada."
video: "https://youtu.be/url"
description: "Darren Pulsipher, arquitecto principal de soluciones, sector público, de Intel, describe la estrategia digital y la arquitectura para transformar eficazmente tu organización. Explica cómo los elementos organizativos, procedimentales y tecnológicos deben equilibrarse para trabajar de manera eficiente hacia una arquitectura común e ideal que respalde una visión unificada."
---

<div>
{% include transistor.html id="0f3c3117" title="#24 Digital Strategy and Data Architecture" %}

{% include youtube.html id="url" %}
</div>

---

Tener un plan para la transformación digital de su organización es crucial para evitar perderse en el laberinto de simplemente seguir con las últimas y mejores tecnologías y procesos. Esta estrategia caótica hará que su transformación digital fracase. Un plan, o un mapa de ruta, desde donde se encuentra actualmente su organización hasta donde quiere llegar, es la parte más importante de una transformación efectiva.

Los tres elementos clave que deben estar coordinados y equilibrados en tu plan son organizacional, procedimental y tecnológico.

## Divisiones organizacionales

Para entender el cambio organizacional, primero veamos los grupos comunes en la mayoría de las organizaciones.

## Desarrollo

Este grupo es tu equipo del día; están desarrollando nuevos productos. Los procesos del equipo de desarrollo son bien conocidos y maduros. Se centran en el trabajo de desarrollo, pruebas y llevar el producto a producción. Casi todos los equipos utilizan algún tipo de técnica ágil o de iteración rápida.

## Traduce lo siguiente al español: IT.

El objetivo del equipo de TI es optimizar la infraestructura en cuanto a costos y eficiencia. Se aseguran de que la infraestructura sea confiable y tenga controles de seguridad incorporados. Principalmente, se enfocan en computación, almacenamiento, red, cumplimiento normativo y costos.

## Seguridad

El papel de la seguridad se ha vuelto cada vez más importante en los últimos años, incluso más recientemente con los empleados trabajando desde casa debido a COVID-19. El equipo de seguridad se enfoca principalmente en asegurar la propiedad intelectual, los datos y la infraestructura. Las herramientas comunes son la gestión de identidad, la protección, la detección y la mitigación. Comprender cómo funcionan estas herramientas a un nivel alto es importante para su cambio organizacional.

## Datos

Este grupo más nuevo, que anteriormente podría haber sido un estadístico o matemático que realizaba minería de datos, ahora se está afianzando con la llegada de los directores de datos principales y las organizaciones construidas alrededor de ellos. Se enfocan en analizar, categorizar y ofrecer un valor real a partir de sus datos. Ya sea que su organización esté en el sector manufacturero o de servicios, o si está tratando de captar nuevos clientes o ahorrar dinero, hay muchas áreas donde los científicos de datos pueden brindar valor.

## Uniendo a los Grupos

Para llevar a cabo un cambio digital efectivo, todos estos grupos necesitan tener un entendimiento mutuo de lo que cada uno aporta y una visión unificada. No quieres que tus científicos de datos estén explorando datos que no tengan valor para el desarrollo o la tecnología de la información. No deseas que tu equipo de seguridad restrinja todo de manera tan estricta que el equipo de desarrollo no pueda completar su trabajo. Entre los grupos, deben existir estrategias, procesos y arquitecturas comunes.

Aunque los objetivos y los resultados comunes son ideales, hay obstáculos que superar. Una de las áreas más difíciles en el cambio organizacional es la falta de comunicación en los límites. Algunas organizaciones han creado nuevos grupos para suavizar las divisiones entre los grupos. Por ejemplo, entre seguridad y tecnología de la información, podría haber un Sec Ops o Sec Dev Ops donde se automatizan las políticas y procedimientos que surgen del equipo de seguridad. Otro ejemplo podría ser un equipo de Data Dev, compuesto por desarrolladores que trabajan con los científicos de datos para proporcionar procesos más repetibles a través del desarrollo de aplicaciones o la integración de herramientas y aplicaciones. Arquitecturas comunes y conjuntos de herramientas comunes en los que todos los grupos pueden confiar facilitan mucho el proceso y los cambios.

## El Sistema Perfecto

¿Cómo se vería una arquitectura común? Una versión utópica no existe en la actualidad, pero podemos observar los elementos y quizás construir algo hacia este ideal.

El autoservicio es fundamental. Por ejemplo, si un científico de datos necesita más almacenamiento para datos, no tendría que llamar al departamento de TI y llenar un montón de formularios, sino utilizar un portal de autoservicio que ahorra tiempo y que entregue el almacenamiento. Por supuesto, el portal estará basado en políticas, para que el equipo de seguridad pueda estar tranquilo de que los datos confidenciales que el científico coloca en una unidad están encriptados y el control de acceso es automático.

Otra característica ideal sería que el sistema sea autoreparador y basado en datos. Si las máquinas se infectaran, por ejemplo, automáticamente serían puestas en cuarentena y las cargas de trabajo se trasladarían a otra área en el centro de datos o a la nube pública. Nuevamente, el departamento de TI tendría que establecer políticas y supervisar los procesos, pero el sistema sería en su mayoría automático. El sistema no solo debería ser automático, sino también inteligente, aprendiendo de la experiencia y volviéndose más eficiente.

Podemos obtener algunos elementos de este sistema utópico hoy en día con productos disponibles en el mercado al integrarlos y lograr que todos los utilicen. Analicemos lo que cada organización desearía de esta arquitectura.

## Arquitectura de TI (nube multi-híbrida)

IT es responsable de la infraestructura subyacente y la información de datos en la organización. Si IT pudiera establecer una base sólida, todos los demás podrían construir sobre ella. IT necesita pasar a una solución de nube multi-híbrida para que la infraestructura pueda ser orquestada fácilmente según sea necesario, con flexibilidad basada en políticas. Siempre hay un compromiso entre costo y confiabilidad, pero tienes opciones. Una capa de infraestructura definida por software permite la orquestación de cómputo, almacenamiento, red, seguridad y ahora incluso cosas nuevas como memoria y aceleradores. La base de la nube multi-híbrida es un aspecto clave de su arquitectura común.

## Arquitectura de seguridad

El equipo de seguridad agregaría a este sistema y lo haría lo más automatizado posible. El primero sería el aspecto de identidad. Esto significa que no solo puedes identificar a los usuarios, sino también a la infraestructura, aplicaciones y servicios, para que todo tenga una identidad. Esas identidades pueden estar vinculadas a autorizaciones y accesos específicos para asegurarse de que todo esté autenticado. En el lado de la seguridad, se desea encriptación y solución de problemas. Idealmente, se podría establecer una raíz de confianza para que todo en el ecosistema, tanto en aplicaciones y servicios, como en el firmware y BIOS de las máquinas, sea confiable.

## Arquitectura de desarrollo

Los desarrolladores pueden preocuparse de que todo este proceso pueda ralentizar el desarrollo, por lo que debe suceder de forma casi automática. La mayoría de los desarrolladores ahora se centran en componentes reutilizables que pueden ser probados para asegurarse de que son seguros. Hacen esto a través de ecosistemas en contenedores como Kubernetes, Docker o Mesos. La seguridad puede ser integrada en el ciclo de vida del desarrollo en el paso de implementación antes de pasar con éxito a la producción. Encima de la capa de servicio hay una capa de aplicación donde los desarrolladores pueden aprovechar los flujos de trabajo. Estos flujos de trabajo pueden ser flujos de trabajo de desarrollo como CI/CD o flujos de trabajo empresariales a través de herramientas de automatización como la Automatización de Procesos Robóticos. Tener tanto la capa de servicio como la capa de aplicación son elementos clave en esta arquitectura utópica.

## Arquitectura de Datos

Con datos dispersos en varios ecosistemas, nubes públicas e incluso en el borde, necesitamos una mejor forma de gestionar datos para los científicos de datos y desarrolladores de aplicaciones. Extraer los datos del almacenamiento es uno de los elementos importantes aquí. Con esta estructura, puedes orquestar datos en toda la extensa infraestructura y solo vincular esos datos a las aplicaciones y servicios donde se necesitan. Los datos podrían abstraerse para llegar a la infraestructura en el mejor lugar durante ese período de tiempo, ya sea en el borde, en el centro de datos o procesados en varios lugares diferentes para réplicas de aplicaciones. La seguridad sería necesaria para proteger los datos, ya que los datos son la razón de ser de la infraestructura en primer lugar. Algunas empresas emergentes están incursionando en este espacio para tomar el control de la capa de gestión de datos.

Esta arquitectura utópica, con su multitud de partes móviles, se llama arquitectura Edgemere. Estamos tratando de ver cómo todas estas partes encajan juntas para ayudar a las organizaciones a acelerar su transformación digital. Necesitamos entender lo que cada organización necesita, cuáles son sus casos de uso y cuáles son las similitudes entre los grupos, para desarrollar una arquitectura en la que toda la organización pueda trabajar.

La función de su organización es eliminar las barreras entre los grupos, desarrollar una visión común de dónde desea estar en términos organizativos, procedimentales y arquitectónicos, y elaborar un plan de acción sobre cómo llegar a ese lugar.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
