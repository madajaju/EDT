---
layout: posts
title: "Comprender el Modelo de Seguridad de Responsabilidad Compartida."
number: 78
permalink: episode-EDT78-es
has_children: false
lang: es
nav_exclude: true
parent: Episodios
grand_parent: Español
nav_order: 78
tags:
    - multicloud
    - compute
    - cybersecurity
    - sharedresponsibility
    - cloudsecurity
    - cloud
    - technology
    - process

date: Wed Feb 23 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquitecto Principal de Soluciones, Intel, explica los modelos de seguridad de responsabilidad compartida. Quién es responsable de la seguridad puede volverse confuso en la nube; la responsabilidad depende de los modelos de entrega de servicios en la nube y otros factores."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquitecto Principal de Soluciones, Intel, explica los modelos de seguridad de responsabilidad compartida. Quién es responsable de la seguridad puede volverse confuso en la nube; la responsabilidad depende de los modelos de entrega de servicios en la nube y otros factores."
---

<div>
{% include transistor.html id="975c761c" title="#78 Understanding the Shared Responsibility Security Model" %}

{% include youtube.html id="url" %}
</div>

---

## Seguridad en la nube

La mayoría de las personas entiende la responsabilidad de la seguridad en el sitio, pero la responsabilidad se vuelve más confusa en la nube. Si los datos están protegidos en la nube, ¿cómo se protegen? ¿Quién es responsable de esa seguridad? ¿Y qué pasa con la instalación de parches en las máquinas?

Recientemente, los proveedores de servicios en la nube han comenzado a ofrecer aún más servicios, por lo que existen múltiples modelos. A veces, la seguridad termina perdiéndose en el medio.

## Áreas de seguridad

Hay cuatro áreas principales de seguridad que debemos entender.

## Físico

La seguridad física es la parte fácil de reconocer. Los proveedores de servicios en la nube son responsables de la seguridad física de sus centros de datos, y tú eres responsable de la seguridad física de tus propios centros de datos. Además, debes asegurar tu espacio físico. Si eres un fabricante, por ejemplo, debes asegurar las máquinas dentro de tu área. Recientemente, se produjo un hackeo a través del sistema de climatización que estaba conectado a la red de una organización.

## Infraestructura

La seguridad de la infraestructura no es el aspecto físico en sí, sino el propio hardware. ¿Tus interruptores de red tienen los parches de seguridad y actualizaciones correctas? ¿Se están actualizando los dispositivos de manejo y almacenamiento? ¿Están siendo protegidos? La infraestructura puede entrar en áreas grises con los proveedores de servicios en la nube, por lo que debes saber quién es responsable de qué y en qué circunstancias.

## Aplicación

Para la seguridad de la aplicación, debes saber quién tiene acceso a una aplicación y si se está actualizando con los parches de seguridad correctos.

## Datos

Proteger tus datos es una de las cosas más importantes que debes hacer. Los datos realmente pueden ser utilizados como una arma en un ataque de ransomware donde los atacantes los toman o los encriptan. También se están utilizando para obtener ventajas competitivas poderosas en diferentes organizaciones. Debes saber dónde están tus datos y cómo protegerlos.

## Modelos de entrega de servicios en la nube

Hay tres modelos básicos de entrega de servicios en la nube. Constantemente se crean diferentes modelos, pero los tres más importantes son Infraestructura como Servicio (IAAS), Plataforma como Servicio (PAAS) y Software como Servicio (SAAS). Categorizaremos todo lo demás como X como Servicio (XAAS).

## Infraestructura como Servicio

IAAS es cuando estás arrendando de un proveedor de servicios en la nube. Esto se refiere a máquinas virtuales y redes virtuales, incluyendo almacenamiento, cálculo y red. También estamos empezando a ver cosas interesantes con aceleradores, como GPUs o incluso procesadores neuromórficos. IAAS es donde ejecutas tus aplicaciones.

## Plataforma como Servicio

La siguiente capa en la pila es PAAS. Aquí es donde obtienes un marco específico como Kubernetes para ejecutar cosas. VMware funcionando sobre IAAS es PAAS. Las tuberías de CICD como servicio tienen muchas herramientas que se ajustan a este espacio. PAAS te permite construir e implementar nuevos servicios sobre esta plataforma para que puedas desplegar y administrar fácilmente sistemas grandes construidos sobre IAAS.

## Software como Servicio

A continuación viene SAAS. Este es un software específico que es administrado por el proveedor de software o el proveedor de servicios en la nube, o podría ser un servicio de terceros que ofrece SAAS para otra persona. La clave con SAAS es que son responsables de la seguridad de la aplicación. Ellos gestionan el tiempo de actividad y todas las áreas gerenciales como confiabilidad, seguridad e integridad. Muchos de los programas SAAS están construidos sobre plataformas PAAS.

## X como servicio

XAAS puede ser cualquier nuevo servicio, como inteligencia artificial, gestión de dispositivos o detección de seguridad.

Entender estos diferentes modelos de entrega es importante porque los modelos de seguridad compartida de los proveedores de servicios en la nube se basan en el modelo de entrega.

## Dominios cibernéticos

Cada uno de los seis pilares de ciberseguridad, identificados por Steve Warren, CTO en Intel en un podcast anterior, es importante tanto si estás en la nube, en locaciones locales o en el borde. Los seis pilares son la detección de amenazas, inteligencia, análisis y orquestación; gestión de identidad y acceso; seguridad de datos y aplicaciones; seguridad de red; seguridad de la cadena de suministro; y seguridad de host y sistema. Los seis de estos dominios encajan en el modelo de seguridad de responsabilidad compartida que los proveedores de servicios en la nube están promoviendo.

## Matriz de seguridad de responsabilidad compartida

Esta responsabilidad compartida se ilustra en la matriz. Las técnicas de entrega del modelo de servicio están en el eje vertical: SAAS, PAAS, IAAS y en-prem. Si estás alojando tú mismo, todo lo que está en el extremo derecho es tu propia responsabilidad.

En el lado del IAAS, eres completamente responsable de la seguridad de los datos y aplicaciones, y eres medio responsable de la infraestructura, ya que aún debes encargarte del control de la red y del sistema operativo. El proveedor de servicios en la nube es responsable de la red física y del host.

En la capa PAAS, todavía eres responsable de la seguridad de datos y parcialmente responsable de la seguridad de la aplicación y la infraestructura de identidad y directorio. Hay algunas herramientas disponibles para ayudar en estas áreas. Aunque eres responsable de las aplicaciones y sus plataformas, ellos son responsables de los marcos de trabajo y middleware que proporcionan. Aunque la mayoría del sistema operativo será atendido por la capa PAAS y te ofrecen algunas herramientas de nivel superior, todavía eres responsable de configurar los controles de red.

Up the stack en SAAS, incluso si estás utilizando almacenamiento como servicio, datos como servicio o CRM como Salesforce, aún eres responsable de tus datos porque todavía necesitas diseñar y encriptar tus copias de respaldo y gestionar cuentas e identidades.

Un punto clave en todos los modelos es que eres responsable de la seguridad de tus datos; nunca existe un escenario en el cual delegues toda tu seguridad a los proveedores de servicios en la nube. Debes hacer copias de respaldo y preguntarte si estás utilizando almacenamiento de objetos para poder revertir un ataque de ransomware, si estás manteniendo correctamente la gestión de acceso y si estás utilizando herramientas que faciliten este proceso.

## Diferentes enfoques hacia la seguridad.

Cada uno de los tres principales proveedores de servicios en la nube adopta un enfoque diferente en cuanto a seguridad, específicamente en relación a la configuración de redes.

## AWS en español significa Amazon Web Services.

AWS se enfoca en la prevención. Cuando inicias una VM, por defecto no hay puertos abiertos, por lo que debes crear grupos de seguridad. AWS es el más restrictivo, utilizando IAM para la gestión de identidad. AWS es genial para equipos de tamaño mediano, pero no funciona tan bien para organizaciones muy grandes.

## Azure: Azul

Azure se enfoca más en la facilidad de uso; la seguridad es menos restrictiva. Utilizan el concepto de redes virtuales para la seguridad, por lo que todas las máquinas virtuales en la misma red virtual pueden comunicarse entre sí en esa red. Esto es lo opuesto a la confianza cero, por lo que debes decidir qué es más importante para ti. Azure utiliza Active Directory, por lo que si ya tienes un Directorio Activo maduro y sólido, esa es una buena forma de gestionar las identidades.

## Plataforma de Google Cloud

Google Cloud Platform también se enfoca en la facilidad de uso, pero apuestan por las máquinas virtuales y la seguridad de la red. Puedes tener perfiles que restrinjan todo en una máquina virtual o puedes tener un perfil que lo abra un poco más. Están en un punto intermedio en cuanto a la restricción. Aunque no tan sólido como AWS o Active Directory, GCP tiene un buen manejo de identidad.

Todos estos proveedores de servicios en la nube ofrecen IAAS, PAAS, SAAS, Contenedor como servicio y una variedad de XAAS. Debes evaluar el modelo de seguridad y comprender las diferencias en cada uno.

En ciertos aspectos, entender el modelo de seguridad de responsabilidad compartida es más difícil que simplemente ejecutar las cosas localmente porque ahora hay más actores involucrados y la complejidad aumenta. La clave está en entender los modelos y utilizar las herramientas disponibles para ayudarte a gestionar la seguridad en múltiples nubes.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
