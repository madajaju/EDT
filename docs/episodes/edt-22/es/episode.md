---
layout: posts
title: "Un argumento a favor del Multi-Hybrid Cloud"
number: 22
permalink: episode-EDT22-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 22
tags:

date: Tue Sep 22 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher describe por qué un Arquitecto de Nube Multi-Híbrida puede estar presente en tu Centro de Datos. La mayoría de las organizaciones ya tienen todos los ingredientes. Solo necesitan saber cómo encajan juntos."
video: "https://youtu.be/1cISpr_FNFM"
description: "Darren Pulsipher describe por qué un Arquitecto de Nube Multi-Híbrida puede estar presente en tu Centro de Datos. La mayoría de las organizaciones ya tienen todos los ingredientes. Solo necesitan saber cómo encajan juntos."
---

<div>
{% include transistor.html id="e22edf51" title="#22 An Argument for Multi-Hybrid Cloud" %}

{% include youtube.html id="1cISpr_FNFM" %}
</div>

---

## Entorno de nube actual.

En los últimos cinco años, ha habido un cambio fundamental en el entorno de IT. El crecimiento continuo de la Nube Pública y la aparición de opciones de Nube Privada han dejado a muchos CIO(s) y departamentos de IT en una situación de desventaja. En el mercado competitivo de hoy en día, muchos equipos de desarrollo necesitan moverse más rápido de lo que la mayoría de los departamentos de IT pueden entregar. Los equipos de desarrollo han encontrado en las Nubes Públicas como AWS, GCE y Azure una opción viable para el antiguo estilo de "IT casero" "debajo del escritorio". Los proveedores de nube pública han facilitado y acelerado la creación de nueva infraestructura. Ya no es necesario esperar aprobaciones técnicas y comerciales en varios niveles, espacio físico en el centro de datos y problemas de suministro del proveedor. Ahora, en cuestión de minutos, un equipo de desarrollo puede tener toda la infraestructura que necesita para su nuevo proyecto.

Antes de la Nube Pública, los CIO(s) podían "caminar alrededor" de los cubículos y contar la cantidad de máquinas de "TI casera" que estaban funcionando debajo de los escritorios de las personas. Con las máquinas físicas ya no visibles para los departamentos de TI, es imposible identificar los equipos y las infraestructuras de sus proyectos. Muchas nubes públicas han dado a las organizaciones la capacidad de consolidar la contabilidad de todas las cuentas de dominios específicos, pero la visibilidad de lo que se está ejecutando y quién está trabajando en la infraestructura sigue siendo algo así como una "búsqueda del tesoro". Muchas veces, estos proyectos "rebeldes" se hacen visibles cuando los proyectos se convierten en productos y necesitan ser incluidos en una infraestructura segura de la empresa. Las políticas de seguridad, privacidad y regulación pueden hacer que la "productización" de los proyectos sea casi imposible. Especialmente si los desarrolladores han acoplado estrechamente sus aplicaciones a la infraestructura en la Nube.

Los departamentos de TI con visión de futuro están haciendo todo lo posible por captar la "TI de tipo cabaña" trabajando con nubes públicas y proveedores de software independientes para implementar "portales de la empresa" en las nubes. Establecer un portal de paso es un buen comienzo para capturar proyectos utilizando infraestructura, pero muchas organizaciones encuentran que solo un portal deja a los equipos de desarrollo queriendo más. En los últimos años, he estado trabajando con muchas de estas organizaciones para identificar casos de uso, arquitecturas y tecnologías que ayuden a desarrollar estos portales aumentados que llamamos "Multi-Nubes Híbridas" (MHC). Por lo general, se integran tres tecnologías principales para construir estos MHC: Plataformas de Gestión en la Nube (CMP), Marcos de Automatización y Herramientas de Plataforma como Servicio (PaaS).

## Plataforma de Gestión en la Nube (CMP)

La responsabilidad principal de las plataformas de gestión en la nube es administrar múltiples nubes heterogéneas tanto públicas como privadas. Permiten a los usuarios finales gestionar múltiples nubes e infraestructuras desde una sola interfaz común. Las CMPs suelen estar diseñadas pensando en los administradores de la nube. Aunque las herramientas de las plataformas de gestión en la nube se enfocan principalmente en la gestión de múltiples nubes, muchas de ellas también cuentan con características adicionales de PAAS y marcos de automatización, o al menos tienen una arquitectura de complementos para respaldar estas funcionalidades.

## Casos de uso cubiertos

Gestionando las Nubes Públicas.

Gestionando Nubes Privadas

Gestionando identidades en la nube

Gestionando la infraestructura en múltiples nubes.

## Marcos de automatización

El principal objetivo de los marcos de automatización es automatizar la implementación, gestión y actualización de pilas de software en una infraestructura. Estos marcos de automatización surgieron de la comunidad de DevOps y suelen centrarse en procesos repetibles. Muchas de estas herramientas incluyen lenguajes de secuencias de comandos que permiten a los ingenieros de DevOps gestionar y configurar software y servicios de manera repetible. Muchos equipos de DevOps están bien versados en estas herramientas.

## Casos de uso cubiertos

Implementar software en infraestructura

Gestionar software en la infraestructura.

Actualizar el software y los servicios.

## Plataforma como servicio (PAAS)

Plataforma como Servicio es principalmente responsable de proporcionar un portal único para reutilizar plataformas y desplegarlas en la infraestructura. Las herramientas PaaS suelen estar altamente orientadas al Desarrollador. Lo cual puede llevar a configuraciones de infraestructura inflexibles. Muchas de estas herramientas tienen un portal web que brinda a los desarrolladores la capacidad de seleccionar servicios y desplegarlos en la infraestructura.

## Casos de uso cubiertos

Desplegar/Gestionar Servicios/Aplicaciones

Gestionar el Catálogo de Servicios.

Desarrollar nuevos servicios/aplicaciones

## La convergencia crea la Multi-Nube Híbrida (MHC)

Debido a que no existe un conjunto de herramientas que cuente con todos los casos de uso necesarios para gestionar nubes, aplicaciones, infraestructura y servicios, los equipos emplean varios "años de trabajo humano" instalando, configurando e integrando estos tres conjuntos de herramientas juntos. Esto ha llevado al surgimiento de tecnologías que integran estas herramientas, incluyendo nuevas ofertas de productos y nuevas funciones en productos actualmente disponibles.

Muchos productos de CMP están incluyendo herramientas PaaS y marcos de automatización en sus soluciones. Las herramientas PaaS ahora están gestionando múltiples nubes. Los marcos de automatización están comenzando a ofrecer portales web y conectividad a múltiples nubes. Muchas de las herramientas se están moviendo hacia la visión híbrida de multi-nube. Al elegir qué herramienta(s) utilizar, es importante recordar las raíces de la herramienta.

## Implementando una solución.

El ecosistema híbrido de múltiples nubes todavía es bastante nuevo y aún requiere algunas integraciones complejas entre las herramientas. Hay algunas herramientas que están empezando a ofrecer soluciones completas de forma predeterminada, pero aún con su visión particular del mundo. Debido a que el ecosistema es incipiente, hay muchos actores y opciones. El tiempo dirá quién ganará este espacio. Por ahora, será interesante observar cómo las herramientas convergen y se consolidan mientras las características maduran.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
