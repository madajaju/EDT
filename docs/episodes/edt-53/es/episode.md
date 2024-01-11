---
layout: posts
title: "DevOps con velocidad y reducción de riesgos"
number: 53
permalink: episode-EDT53-es
has_children: false
lang: es
nav_exclude: true
parent: Episodios
grand_parent: Español
nav_order: 53
tags:
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - multicloud

date: Mon Jun 14 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "En este episodio, Robert Boule, Jefe de Ingeniería de Soluciones en OpsMx, se une a Darren para hablar sobre cómo mejorar la velocidad sin aumentar el riesgo en el proceso de DevOps. Las tres áreas clave para equilibrar en la entrega de software son velocidad, riesgo y calidad. La mayoría puede gestionar una o dos de estas cosas, pero agregar la tercera puede volverse difícil. Por ejemplo, es posible que pueda entregar a alta velocidad debido a un excelente sistema de cd, pero una vez que introduce controles de cumplimiento y políticas, se enfrenta a un desafío. ¿Debería detenerse y verificar esas cosas, o tal vez obtener resultados de otra herramienta? De repente, su velocidad sufre."
video: "https://youtu.be/url"
description: "En este episodio, Robert Boule, Jefe de Ingeniería de Soluciones en OpsMx, se une a Darren para hablar sobre cómo mejorar la velocidad sin aumentar el riesgo en el proceso de DevOps. Las tres áreas clave para equilibrar en la entrega de software son velocidad, riesgo y calidad. La mayoría puede gestionar una o dos de estas cosas, pero agregar la tercera puede volverse difícil. Por ejemplo, es posible que pueda entregar a alta velocidad debido a un excelente sistema de cd, pero una vez que introduce controles de cumplimiento y políticas, se enfrenta a un desafío. ¿Debería detenerse y verificar esas cosas, o tal vez obtener resultados de otra herramienta? De repente, su velocidad sufre."
---

<div>
{% include transistor.html id="9eb5fd35" title="#53 DevOps with Speed While Reducing Risk" %}

{% include youtube.html id="url" %}
</div>

---

Las tres áreas clave a equilibrar en la entrega de software son velocidad, riesgo y calidad. La mayoría puede gestionar una o dos de estas cosas, pero añadir la tercera puede ser difícil. Por ejemplo, es posible que puedas entregar a gran velocidad gracias a un excelente sistema de entrega continua, pero una vez que introduces controles de cumplimiento y políticas, te enfrentas a un desafío. ¿Debes detenerte y verificar esas cosas, o tal vez importar algunos resultados de otra herramienta? De repente, tu velocidad se ve afectada.

OpsMx está trabajando para ayudar a las personas a automatizar esos puntos de decisión. La automatización es lo más importante para mantener la velocidad mientras se incrementan los otros dos pilares, riesgo y calidad.

## Solución de OpsMx: Entrega de Software Totalmente Automatizada.

La automatización funciona como una agregación de datos, mediante la recopilación de resultados de varias herramientas en la cadena de herramientas y luego tiene un mecanismo como un gestor de políticas que proporciona resultados esperados en marcas de verificación de herramientas como BlackDuck. Si parece correcto, el flujo de trabajo no se detiene, como lo hace actualmente, para una verificación humana.

## La entrega más rápida de aplicaciones aumenta las tasas de fallos.

La velocidad de entrega de aplicaciones ha pasado de semanal o mensual a cada hora, lo que añade presión para producir rápidamente. Sin embargo, al intentar aumentar la velocidad, podrías empezar a perder cierto control sobre la calidad, quizás saltando algunas de las comprobaciones de riesgo. El resultado neto es que cuanto más rápido intentas avanzar, más propenso eres a tener un fallo.

## Puntos de fricción y espacios problemáticos

Con el uso estratégico de la automatización, tienes la capacidad de aumentar la velocidad sin correr riesgos. La verificación continua puede reducir una tarea de tres o cuatro horas a cinco o diez segundos. En lugar de utilizar mano de obra humana para examinar detalladamente los registros en busca de comportamientos anómalos que hayan pasado una verificación binaria de aprobado/fallido, la verificación continua puede hacer esto automáticamente, permitiendo que las personas se enfoquen solo en casos excepcionales.

## ¿Qué significa automatización en este contexto?

La siguiente pieza utiliza las herramientas requeridas por el equipo de seguridad y cumplimiento, como BlackDuck. Con la automatización, no es necesario detener el flujo de trabajo para que alguien interprete los resultados antes de continuar, porque eso sucederá automáticamente.

Las otras piezas son políticas a un nivel más alto, si te encuentras en una industria regulada con más controles, o algo tan simple como un minorista que, por ejemplo, no quiere lanzar nuevo software dos semanas antes de Navidad. Esos controles pueden ser automatizados para eliminar la necesidad de aprobación humana, permitiendo que el proceso continúe si no hay excepciones. La idea es eliminar tantas barreras humanas como sea posible para permitir que el proceso fluya.

El conjunto principal de automatizaciones de control y políticas son reutilizables en todos los pipelines; solo tienes que personalizar o crear aquellos para criterios específicos de tu ciclo de lanzamiento.

## Solución de OpsMx: Entrega de software totalmente automatizada.

OpsMx te brinda la capacidad de crear esos pipelines y las automatizaciones de análisis de registros. Spinnaker es la herramienta actual, pero la visión de OpsMx es ser lo más agnóstico de cd posible, permitiendo el uso de todas las herramientas de cd como Jenkins y Microsoft Azure. OpsMx aprovecha la parte de cd para la automatización, pero se encuentra por encima de eso para ayudar a tomar decisiones automatizadas.

Una parte creciente de la herramienta es el aprendizaje automático para ayudar a entender qué se considera como referencia para una aplicación en particular en comparación con un comportamiento anómalo. También existe un modelo de aprendizaje supervisado donde un profesional de DevOps, un ingeniero o propietario del producto pueden especificar un comportamiento anómalo como esperado en el contexto de la aplicación.

El sistema también permite la auditabilidad. Cualquier cambio o excepción queda documentado. Existe un seguimiento completo de auditoría de todo lo que ocurre, desde quién aprobó una excepción hasta qué artefacto se implementó y qué imagen base se utilizó. Ya sea que se ejecute en la nube o en las instalaciones, se puede ver todo el proceso como una entidad completa.

Otro aspecto de la visibilidad que OpsMx proporciona es una especie de mapa de lo que se implementa en dónde, como la serie de microservicios que actualmente están en el entorno de pruebas, lo que está en ciertas etapas o lo que está en producción, y luego, para cualquiera de esas cosas, puedes profundizar y obtener una vista histórica. Puedes hacer clic en cualquier versión específica y toda la información de auditoría estará al alcance de tu mano.

Además, la próxima frontera en la que OpsMx está trabajando es la eficacia de los artefactos que se están capturando, de modo que la cadena de suministro, o linaje, sea transparente.

OpsMx ahora está utilizando una tecnología basada en agentes que puede interactuar, por ejemplo, con recursos que se encuentran detrás de su firewall. El agente actúa como un proxy hacia la capa de inteligencia para que los datos puedan ser recopilados allí. No hay preocupación por abrir o exponer puertos de firewall. Funciona de la misma manera con los proveedores de nube: el agente se puede implementar dentro de la VPC y ya no es necesario arriesgarse a poner claves y secretos en una aplicación basada en la nube. El agente simplemente actúa como un proxy para que la pieza autorizada siempre permanezca dentro de la VPC, asegurando la forma en que se recopila la información.

Con esta nueva dirección, la industria de DevOps en su conjunto se enfrenta a un cambio radical en materia de seguridad y auditabilidad.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
