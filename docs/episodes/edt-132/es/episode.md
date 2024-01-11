---
layout: posts
title: "Administración de BareMetal definido por software"
number: 132
permalink: episode-EDT132-es
has_children: false
lang: es
nav_exclude: true
parent: Episodios
grand_parent: Español
nav_order: 132
tags:
    - metify
    - sdi
    - technology
    - baremetal
    - heterogeneouscompute
    - compute

date: Wed Apr 05 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Ian Evans
    - Mike Wagner

img: thumbnail.png
image: thumbnail.png
summary: "En este episodio, Darren entrevista a los fundadores de Metify, Ian Evans y Mike Wagner, sobre su enfoque único de gestión de infraestructura definida por software en metal desnudo utilizando el estándar Redfish."
video: "https://youtu.be/url"
description: "En este episodio, Darren entrevista a los fundadores de Metify, Ian Evans y Mike Wagner, sobre su enfoque único de gestión de infraestructura definida por software en metal desnudo utilizando el estándar Redfish."
---

<div>
{% include transistor.html id="dd6ccded" title="#132 Software Defined BareMetal Management" %}

{% include youtube.html id="url" %}
</div>

---

Con más de dos décadas de experiencia en el espacio de los centros de datos, Ian comparte sus ideas sobre la optimización de la infraestructura, la automatización de la gestión de servidores y la simplificación de los diferentes componentes en un centro de datos. Por otro lado, Mike, quien trabajó previamente con IBM y Red Hat, se enfoca en la venta consultiva y en ventas lideradas por canales para comprender mejor los problemas y patrones de las empresas en la operación de sus centros de datos. Juntos, crearon Metify en 2020 para proporcionar soluciones de automatización para gestionar servidores, almacenamiento y dispositivos de red en centros de datos, a pesar del aumento de los servicios de nube pública como RWC Azure y GCP.

## Automatización del centro de datos

Automatizar la gestión del centro de datos puede acercar la gestión local a una experiencia de nube pública al tiempo que reduce costos. Uno de los elementos vitales de esta transformación es la estandarización y los estándares abiertos como la especificación redfish de DMCA que hacen posible esta automatización. La ubicuidad de esta especificación en placas base de clase empresarial la hace accesible para todos los actores que deseen integrarla. Las presiones financieras y la demanda de los usuarios son esenciales para impulsar a los OEM a implementar estos estándares abiertos. En general, la automatización y la estandarización pueden ayudar a los centros de datos a competir con los proveedores de servicios en la nube en términos de costos operativos mientras mejoran las capacidades de gestión de servidores.

La eficiencia del centro de datos se puede mejorar utilizando herramientas que permiten la automatización e integración con marcos estándar. Los proveedores de hardware enfrentan presión debido a la comoditización de la tecnología, por lo que deben diferenciarse ofreciendo servidores de caja blanca similares pero de menor escala. Metify proporciona una única interfaz para gestionar dispositivos de cualquier fabricante, siempre que estén habilitados para BMC y cumplan con la especificación Redfish. Existen estándares emergentes para gestionar dispositivos pequeños a través de Redfish, pero la pregunta sigue siendo hasta qué punto se extiende la extensibilidad a las partes de la pila específicas de la red.

## Nube híbrida

El surgimiento de estrategias de nube híbrida impulsa la forma en que las empresas gestionan sus centros de datos, la periferia y los entornos de nube. El crecimiento de la nube pública es significativo; sin embargo, también hay un crecimiento masivo en los espacios de nube privada. Metify proporciona una experiencia más similar a la nube desde el punto de vista de las operaciones, permitiendo a los administradores de sistemas gestionar su periferia, centro de datos o múltiples centros de datos mediante una API estándar. Mantener las API abiertas y estandarizadas es esencial para que los clientes utilicen herramientas de gestión familiares como TerraForm y Ansible. Las tecnologías de nube híbrida permiten a las empresas optimizar costos, gobernabilidad, seguridad y eficiencia.

Uno de los peligros de un estándar abierto puede ser vulnerable a violaciones de seguridad sin medidas adecuadas de comando y control. Metify aborda este problema colocando audibilidad, autorización, acceso y controles a los estándares abiertos para proporcionar un enfoque sistemático para administrar el hardware heterogéneo en bruto. El producto de Metify se enfoca en proporcionar un nivel de control para prevenir incidentes indeseables, y se integran con herramientas de gestión de flujo de trabajo para la automatización.

## BareMetal SDI

Muchas tecnologías modernas de centro de datos dependen de la virtualización como base de su plano de control de gestión. Sin embargo, la gestión de hardware en bruto sigue siendo una tarea tradicional y manualmente intensiva. Este enfoque único para la infraestructura de nube privada no depende de la virtualización. En su lugar, utiliza el enfoque de infraestructura definida por software para la gestión de hardware en bruto, lo que permite una combinación de hardware en bruto, máquinas virtuales y contenedores. Este enfoque permite a los administradores de sistemas gestionar de manera más efectiva la infraestructura subyacente y brindar una experiencia similar a la nube sin fricciones. Este enfoque puede admitir entornos informáticos heterogéneos, donde se pueden aprovechar CPU, GPU, FPGA, VPU y NPUs para múltiples flujos de trabajo. Con Redfish y una extensión del esquema, Metify puede controlar fácilmente nuevos dispositivos, y ven el ecosistema en expansión como algo increíblemente valioso para el desarrollo de productos.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
