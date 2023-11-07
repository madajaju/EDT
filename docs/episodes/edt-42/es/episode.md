---
layout: posts
title: "Asegurando el flujo de trabajo de DevOps = SecDevOps"
number: 42
permalink: episode-EDT42-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 42
tags:
    - cybersecurity
    - devops
    - compute
    - process
    - technology
    - multicloud
    - devsecops

date: Sun Mar 14 2021 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.jpg
image: thumbnail.jpg
summary: "En este episodio, Darren Pulsipher, Arquitecto Principal de Soluciones en Intel, y Steve Orrin, CTO de Intel, Federal, discuten por qué y cómo se debe asegurar el pipeline de DevOps. La única forma de entregar un código sólido, resistente y seguro es si la seguridad se construye desde el principio, y cuanto antes mejor."
video: "https://youtu.be/U3XA7W5ToHc"
description: "En este episodio, Darren Pulsipher, Arquitecto Principal de Soluciones en Intel, y Steve Orrin, CTO de Intel, Federal, discuten por qué y cómo se debe asegurar el pipeline de DevOps. La única forma de entregar un código sólido, resistente y seguro es si la seguridad se construye desde el principio, y cuanto antes mejor."
---

<div>
{% include transistor.html id="2fd54175" title="#42 Securing the DevOps Pipeline = SecDevOps" %}

{% include youtube.html id="U3XA7W5ToHc" %}
</div>

---

Un estudio de hace más de 20 años sobre el retorno de la inversión en seguridad demostró que cuanto antes se implemente la seguridad en el ciclo de desarrollo, más barato es que esperar hasta el final del ciclo. Aunque hemos sabido esto durante dos décadas, aún es un trabajo en progreso.

La mayoría de las empresas de desarrollo tienen la seguridad como parte de su proceso global de desarrollo, por lo que ha habido mucho avance, pero es un viaje, no una carrera. Se trata de entender todos los diferentes puntos de exposición y debilidades y poder proporcionar los procesos de seguridad adecuados para esos problemas.

## Los Vectores de Ataque

A menudo las personas piensan en los ataques como vulnerabilidades de los empleados o paquetes, por ejemplo, y olvidan la parte del proceso de la historia. En el lado de la operación se encuentra el tiempo que se tarda en cerrar una vulnerabilidad. Por otro lado, está en el desarrollo y entrega de productos. Hay varios puntos de ruptura a lo largo de esa cadena, y esos han sido explotados recientemente en las últimas etapas del proceso de construcción. En cuanto a los clientes, el código que se actualizó era legítimo porque provenía directamente de la fuente. Por lo tanto, debemos pensar cuidadosamente dónde colocar la seguridad en el proceso.

## Seguridad Incorporada...

Ágil, CI/CD, DevOps, ... ¿Dónde está la seguridad?

Si bien solemos centrarnos en la necesidad de seguridad en las transiciones del desarrollador a QA y de QA a operaciones o implementación, la seguridad realmente debería estar incorporada en todo el ciclo de construcción, no solo en algunos puntos de control. El enfoque debería ser una seguridad continua.

## Seguridad incorporada...

Haz que la seguridad sea parte de cada fase

La seguridad continua es un desafío. La mayoría de los desarrolladores y profesionales de control de calidad no están capacitados en seguridad; esto es una batalla cuesta arriba. La industria intentó este enfoque en los primeros años 2000, pero se encontró con tres problemas. Primero, la rotación es demasiado alta. Segundo, el panorama de seguridad cambia demasiado rápido para mantenerse actualizados, y tercero, como no es su trabajo diario, no se incentiva el comportamiento correcto.

¿Cómo integramos la seguridad en el proceso, automatizamos las cosas clave que queremos hacer y nos apartamos del camino de los desarrolladores para que puedan hacer su trabajo, que es construir, probar e implementar el código? El proceso de seguridad realmente puede destacar al incorporarlo en esas automatizaciones que ya estás haciendo en DevOps, como pruebas unitarias automatizadas, pruebas automatizadas de calidad y regresión, construcción automatizada e implementación automatizada. Esto no resolverá todos los problemas, pero elevará significativamente el nivel para que puedas enfocarte en los desafíos difíciles relacionados con la seguridad.

## Seguridad incorporada...

Significa que la seguridad está incorporada, no es un solo paso o etapa.

Algunas herramientas comunes ya ofrecen seguridad automatizada que señala vulnerabilidades. Por ejemplo, GitHub realizará controles de seguridad en los proyectos que usen código Node.js y todos los paquetes incluidos. Esto puede ser útil, pero es demasiado tarde; la seguridad debería estar integrada en el proceso antes de que se compruebe.

## Seguridad incorporada...?

## ¿Cómo llegamos allí?

Las violaciones de seguridad actuales resaltan que la seguridad debe ser incorporada en cada etapa del proceso, incluyendo entre la construcción y la producción, y justo antes de que el script se ejecute para construir la aplicación. Además de inyectar seguridad en el proceso de construcción, necesitamos asegurar el propio proceso de construcción; ha sido un agujero enorme durante mucho tiempo.

Muchas empresas que realizan desarrollo interno están ahora prestando más atención a su proceso de construcción debido a las recientes violaciones de seguridad. Esto es bueno, pero no puede detenerse solo con estas reacciones impulsivas a cada ataque. Necesitamos pensar de manera holística y no esperar al próximo eslabón débil en la cadena.

Algunas formas prácticas de asegurar el proceso son tratar el servidor de construcción como un activo crítico en la infraestructura general y aplicar las mismas reglas y controles a ese servidor como lo haría para sus sistemas principales. Contar con credenciales adecuadas, asegurar el arranque del firmware, verificar el código, auditar y registrar el sistema, etc., a lo largo de su vida, luego se integra en el proceso de DevOps cuando alguien hace clic en el botón.

## Construido para durar

## De Soluciones a Servicios y Más Allá

Muchas personas no piensan en el propio script como un objetivo. No importa cuántos módulos buenos estén incluidos si el propio script no está protegido. Algunas formas de proteger el script son ejecutando un checksum, y este debería ser versionado, verificado y firmado. Esto añade complejidad para DevOps, pero existen herramientas que pueden ayudar.

## Construye una vez, despliega en todas partes.

Al igual que automatizamos el proceso de desarrollo, podemos incorporar la automatización para implementar estos controles y verificaciones. La automatización previene que otra persona pueda interferir potencialmente con tus construcciones, pero también queremos asegurarnos de que haya una persona que reciba los resultados y verifique las auditorías.

Las herramientas que ya estás utilizando se pueden ampliar para agregar automatización de seguridad y comprobaciones, como las que se hacen para la integración continua del desarrollo ágil o herramientas de automatización en el mundo de Linux.

Las organizaciones también pueden distribuir a su personal de seguridad en los equipos de desarrollo de negocios, de modo que cuando las cosas salgan mal, los expertos en seguridad ya estén integrados en el proceso. Dos lugares en los que debes asegurarte de tener personal de seguridad son en la infraestructura para respaldar, por ejemplo, tu proceso ágil, y en la gestión de productos para obtener los requisitos de seguridad antes de llegar siquiera a un desarrollador.

Siempre hay escasez de personal capacitado y capaz en seguridad y también de financiamiento para contratar a las personas adecuadas debido a la alta demanda. Algunas opciones son capacitar a las personas que ya tienes y proporcionarles las herramientas necesarias. No necesitas un experto en criptografía en cada paso del proceso. Otra posibilidad es en lugar de tener a cada programador responsable de codificar autenticación, credenciales y protocolos en una construcción segura en una biblioteca de infraestructura, tener un equipo que construya módulos en tus lenguajes y entornos que realicen todas las funciones de seguridad. El programador puede utilizar el módulo y este se encarga del trabajo difícil. De esta manera, construyes una vez y despliegas en todas partes.

Estamos viendo cómo las empresas ofrecen herramientas de seguridad SaaS, servicios basados en la nube que pueden ser utilizados para tu aplicación y entorno de ejecución. Este es un gran paso en el proceso. Hay empresas que proporcionan puntos de inyección de seguridad, como la seguridad de la aplicación en un entorno de estilo rápido. Estas comprobaciones de la aplicación, como la desinfección de entradas y la validación de entradas, se pueden integrar en tu entorno funcional, pero eso aún está esperando hasta el final. Recuerda que cuanto antes comiences con la seguridad en el proceso, más barato y menos doloroso será.

Todo esto, por supuesto, requiere más trabajo de integración. Los desarrolladores pueden ser cautelosos con el trabajo implicado, pero si existe un marco de trabajo con seguridad incorporada (y hay prototipos como Ruby on Rails y ciertas infraestructuras en la nube), puede ahorrar muchas horas. Aún así, debes asegurarte de no depender únicamente de la plataforma para la seguridad, ya que podría ser un punto único de fallo.

## La automatización te liberará.

Las violaciones de seguridad en los últimos seis meses han sido profundas. Aquí hay algunos puntos clave de consejo.

La seguridad debe ser integral en todo el ciclo de vida, desde los requisitos hasta adelante. La seguridad debe estar presente en el ciclo de DevOps en sí mismo, no solo en la codificación y prueba, sino también en la infraestructura que impulsa ese proceso.

Al construir herramientas y objetos de seguridad a través de módulos, construye una vez, hazlo modular y despliégalo en todas partes.

Aproveche los servicios que le permitan confiar en la experiencia de otra persona para aumentar su propio equipo de seguridad cibernética, que está desfinanciado.

La automatización te liberará. Automatiza todo lo que puedas para hacer la seguridad más fácil y rápida, y reducir la fricción para tus desarrolladores y probadores. Con la automatización, puedes eliminar el 80 por ciento de lo que llamamos "tonterías" y usar tus recursos limitados en resolver los problemas difíciles.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
