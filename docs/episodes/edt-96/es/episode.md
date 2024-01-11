---
layout: posts
title: "Aprovechando los Centros de Datos Virtuales con Verge.io."
number: 96
permalink: episode-EDT96-es
lang: es
nav_exclude: true
nav_order: 96
tags:
    - privatecloud
    - cloud
    - compute
    - technology
    - sdi
    - virtualdatacenter
    - vergeio

date: Wed Jul 20 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Aaron Reid
    - Chris Lehman

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, arquitecto principal de soluciones de Intel, y Aaron Reid, ingeniero principal de sistemas de https://www.verge.io/ y Chris Lehman, vicepresidente senior de ventas, discuten casos de uso para el software de centro de datos virtual de Verge.io."
video: "https://youtu.be/url"
description: "Darren Pulsipher, arquitecto principal de soluciones de Intel, y Aaron Reid, ingeniero principal de sistemas de https://www.verge.io/ y Chris Lehman, vicepresidente senior de ventas, discuten casos de uso para el software de centro de datos virtual de Verge.io."
---

<div>
{% include transistor.html id="dd535cf2" title="#96 Leveraging Virtual Datacenters with Verge.io" %}

{% include youtube.html id="url" %}
</div>

---

Aaron ha estado en el área de TI durante más de 20 años. Es un ingeniero preventa, lo que significa que habla con los clientes sobre el valor y características de Verge.io y les ayuda a definir sus requisitos.

Chris es el jefe de ventas en Verge.io con 25 años de experiencia en empresas de software tecnológico. Él describe a Verge.io como una empresa con un enfoque maniático en la satisfacción y éxito del cliente con el software.

El término "centro de datos virtual" es para simplificar. La plataforma es multiinquilino, por lo que hay inquilinos anidados independientes con todos los recursos requeridos dentro de un centro de datos, desde CPU hasta memoria, almacenamiento y redes, y están aislados. Aun así, al mismo tiempo, puedes construirlos bajo demanda. Al igual que puedes crear una VM bajo demanda, a menudo con una plantilla, puedes hacer lo mismo con un inquilino en el que encapsula todo en el centro de datos virtual. Puedes construirlo a través de un motor de recetas o desde cero. Puedes clonar fácilmente o tomar una instantánea de uno de esos inquilinos.

Estos centros de datos virtuales pueden ser grandes y complejos. El cliente más grande de Verge.io utiliza más de 60 nodos y múltiples inquilinos en su entorno. Las únicas restricciones son las que están incorporadas en el clúster de backend de Verge.io. Por ejemplo, supongamos que tienes cuatro terabytes de memoria, 100 terabytes de almacenamiento y 64 núcleos en tu CPU. Podrías asignar todos esos recursos a ese inquilino, dividirlo como desees, en la mitad o en tercios, y construir los inquilinos de esa manera.

Si, por ejemplo, asignas algunos nodos al desarrollo, algunos a la prueba y el resto a la producción, serían inquilinos diferentes, y puedes hacer instantáneas entre ellos y pasarlos a producción. En este caso, incluso puedes tener varios entornos de producción con actualizaciones en azul-verde.

Muchos de los clientes de Verge.io son proveedores de servicios gestionados. Utilizan multi-tenencia para sus clientes finales y, con eso, dedican entornos seguros de confianza cero. Los clientes pueden tener su entorno en la nube y pueden aprovisionar cargas de trabajo virtuales según sea necesario.

También hay casos de uso significativos para clientes de TI corporativos que desean, por ejemplo, entornos de desarrollo y prueba azul-verde o donde pueden tener diferentes entornos con diferentes requisitos de cumplimiento de seguridad como SOX o HIPAA. Verge.io tiene varios clientes grandes de instituciones educativas que están realizando investigaciones cumplientes. Certifican su clúster una sola vez; luego, pueden entregar un entorno de investigación cumpliente a uno de sus investigadores en menos de una hora. Anteriormente, podía llevar meses ponerse en marcha en un entorno cumpliente.

Para las actualizaciones, aunque los usuarios deben utilizar herramientas a nivel de aplicación o dentro de las cargas de trabajo de las máquinas virtuales, la "receta" del entorno, como las reglas de firewall o la configuración de cómo se asignan los recursos a las cargas de trabajo, se puede actualizar de manera fluida. También puedes llevar una máquina virtual en un entorno en ejecución con un nuevo cumplimiento y trasladarla a un nuevo entorno.

Verge.io también es útil para la seguridad. Una de las firmas cuantitativas más grandes de Europa es un buen caso de uso en seguridad. Ellos toman una foto de todo su entorno y luego realizan simulaciones de ataques (equipo rojo y equipo azul) en busca de vulnerabilidades de seguridad, verificando parches, etc.

VDI puede funcionar en el entorno. Verge.io se asocia con una empresa para brindar soporte de VDI. Verge.io controla los recursos, la CPU y la memoria. También admiten GPU y pasarela y GPU física. Este es un caso de uso importante para algunos clientes, especialmente en cargas de trabajo de ingeniería o petróleo y gas. La GPU virtual ofrece economías favorables porque el costo se distribuye entre varios usuarios.

Un ajuste perfecto para Verge.io son los casos de uso en el borde. Un ejemplo típico es el punto de venta. Si un cliente de venta al por menor tiene cien tiendas, podría necesitar dos o tres aplicaciones de máquinas virtuales (VMs) en cada tienda. Dado que Verge.io ocupa poco espacio en hardware, una vez que tengas al menos dos servidores, puedes colocarlos en el centro de datos del caso de uso en el borde y crear esas VMs. Luego, con las funciones de instantáneas y replicaciones, esas configuraciones se pueden copiar y pegar en todos los entornos diferentes. Puedes actualizar las últimas configuraciones en todos ellos, no solo los parches del sistema operativo, sino también las reglas de firewall.

Un emocionante futuro espacio para Verge.io está en los sistemas de conducción automatizada debido al volumen de datos. Muchos proveedores están probando los vehículos en sitios remotos y enviando físicamente los discos duros. Imagina si los datos pudieran procesarse en el sitio, completamente redundantes con los costos convincentes asociados a ello, entonces los datos podrían transportarse en un área amplia en lugar de un disco y un camión.

Para obtener más información sobre Verge.io, visita http://verge.io.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
