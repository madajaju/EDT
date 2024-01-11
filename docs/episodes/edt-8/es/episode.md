---
layout: posts
title: "Asegurando al teletrabajador Parte 2."
number: 8
permalink: episode-EDT8-es
lang: es
nav_exclude: true
nav_order: 8
tags:

date: Mon Jul 20 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Con muchos empleados trabajando desde casa ahora, ¿cómo te aseguras de que estén trabajando de manera segura pero aún así les das la flexibilidad que necesitan para completar sus tareas? En este episodio, Darren y el invitado especial Steve Orrin, CTO de Intel Federal, discuten cómo aprovechar la tecnología de Intel para ayudar de manera efectiva a proteger al teletrabajador."
video: "https://youtu.be/2PazR1MX2wc"
description: "Con muchos empleados trabajando desde casa ahora, ¿cómo te aseguras de que estén trabajando de manera segura pero aún así les das la flexibilidad que necesitan para completar sus tareas? En este episodio, Darren y el invitado especial Steve Orrin, CTO de Intel Federal, discuten cómo aprovechar la tecnología de Intel para ayudar de manera efectiva a proteger al teletrabajador."
---

<div>
{% include transistor.html id="5fc292e0" title="#8 Securing the Teleworker Part 2" %}

{% include youtube.html id="2PazR1MX2wc" %}
</div>

---

## Tecnologías para asegurar al trabajador remoto.

La seguridad en el lado del cliente comienza y termina con la capacidad de verificar al cliente mediante un arranque seguro. Intel ha proporcionado esta tecnología en los sistemas de nuestros clientes durante años con Secure Boot con Trusted Execution Technology (TXT) y, más recientemente, BootGuard (BtG). En las plataformas más recientes, tenemos Intel Hardware Shield, un conjunto de tecnologías que aseguran el sistema en su nivel más bajo, en el firmware y el nivel del BIOS. Así es como un sistema de control de acceso empresarial puede verificar que un cliente se haya iniciado de manera segura y tenga el firmware correcto y los controles de seguridad correctos antes de acceder a la empresa.

Intel también ha realizado mucho trabajo a lo largo de los años para ayudar a las organizaciones a proteger mejor sus datos. Además, hemos permitido que el cliente active el cifrado en todas partes sin afectar al rendimiento. Hemos estado implementando nuevas instrucciones en casi todas las generaciones de nuestros productos, agregando nuevas capacidades para asegurar al teletrabajador.

Nuestro otro enfoque ha sido proteger las aplicaciones y sus datos en uso. Aquí es donde entran en juego las Extensiones de Intel Software Guard (SGX, por sus siglas en inglés). Esto brinda a las organizaciones la capacidad de colocar partes clave de las aplicaciones y datos importantes en recintos de memoria seguros y encriptados. Con el teletrabajo, esto significa que puedes implementar aplicaciones en entornos no confiables y mantener un alto nivel de seguridad.

Además, la nueva tecnología que Intel ha introducido en la categoría de detección de amenazas permite a las organizaciones obtener una visibilidad profunda en las operaciones de la plataforma para monitorear las amenazas; ningún malware puede ocultarse. Estas tecnologías están revolucionando la forma en que detectamos malware utilizando el aprendizaje automático y la inteligencia artificial.

## Tecnologías de centro de datos para asegurar al teletrabajador.

Incluso si has asegurado a los clientes, también debes asegurar el centro de datos. Ambos lados deben ser protegidos porque tu sistema es tan seguro como el eslabón más débil. Muchas de las técnicas para asegurar al teletrabajador son similares a las utilizadas para asegurar tu empresa: arranque seguro, seguridad de la virtualización y controles de aislamiento. Nuevamente, tecnologías como Intel TXT y BootGuard te permiten arrancar de forma segura esas plataformas y los activos del centro de datos y la nube. Más recientemente, hemos presentado la tecnología Intel Select Solutions for Hardened Security, que integra muchas de las tecnologías de seguridad de Intel en una plataforma única que está habilitada de forma predeterminada.

Necesitas poder proteger tus datos a gran escala, lo que significa tener la capacidad de utilizar todas tus herramientas de seguridad sin afectar negativamente el rendimiento. Las herramientas de encriptación acelerada por hardware de Intel (SHA, AES-2X, VPMADD52) hacen esto posible. Las nuevas instrucciones de Intel y las tecnologías QuickAssist están diseñadas específicamente para las necesidades de encriptación a escala empresarial y en la nube.

Finalmente, ¿cómo supervisas la inteligencia de amenazas y realizas auditorías a gran escala? La Arquitectura de la Plataforma de Inteligencia Cibernética (FPGA, DCPMM, Optane SSD) utiliza tecnologías de computación, almacenamiento y memoria de alto rendimiento para escalar la plataforma de inteligencia cibernética, incluso con la carga adicional de seguridad externa con teletrabajadores.

## Soluciones a corto plazo.

La educación de los empleados es la primera línea para frenar las amenazas de seguridad del teletrabajo. La orientación en seguridad doméstica y la capacitación en seguridad, o el refuerzo de la capacitación previa en áreas como el acceso adecuado a los datos, son cruciales. Sea proactivo con las actualizaciones de software mediante la instalación y requisito de parches en los dispositivos de los usuarios. Si tiene control de acceso empresarial, soluciones ERM/DRM y DLP, actívelos y amplíelos. Revalúe sus políticas para asegurarse de que se ajusten a la nueva realidad de los teletrabajadores. Para las conexiones web, active el TLS y asegúrese de que se aplique. La autenticación de dos factores debe ser aprovechada. La mayoría de las organizaciones pueden pensar que no tienen la infraestructura para implementar esto, pero existen diversos proveedores que pueden ayudar en esta área sin requerir desplegar una gran cantidad de infraestructura nueva.

Muchas soluciones son simplemente higiene estándar: asegúrese de que sus agentes de seguridad del punto final estén habilitados y actualizados. Administre y haga cumplir políticas de seguridad para los diferentes tipos de dispositivos de usuario. Habilite el cifrado de disco completo.

Las organizaciones deben entender que los teletrabajadores operan en un entorno donde es probable que otros utilicen el dispositivo en diferentes circunstancias. Buenos controles de seguridad, especialmente la educación de los empleados, pueden evitar problemas y permitir que los empleados trabajen sin impactos negativos.

## Soluciones a largo plazo.

Un plan a largo plazo para la seguridad en un entorno con trabajadores remotos es ahora necesario, ya sea para un cambio permanente hacia más trabajadores a distancia o para enfrentar otra pandemia o situación similar. Hay varios pasos que las organizaciones deben tomar ahora para apoyar esta realidad en el futuro.

Una de las mejores prácticas es implementar políticas de confianza cero. Esto reduce la dependencia de tener que confiar en todos los aspectos de los usuarios y clientes que ingresan. Además, la autenticación multifactor con usuarios y dispositivos debería convertirse en estándar en toda la organización. Para aquellos que aún no han adoptado ERM y el control de acceso a datos basado en políticas, ahora es el momento de hacerlo para proteger los datos tanto fuera como dentro del lugar de trabajo. Es importante implementar soluciones de seguridad en múltiples capas en lugar de solo a nivel de aplicación o de red. Esto incluye el inicio seguro con certificación, la virtualización y la seguridad de contención, y la seguridad y monitorización del firmware. Es importante ampliar la auditoría, la inteligencia de amenazas y la monitorización a los entornos de teletrabajo, a pesar de la resistencia de los usuarios que no desean una mayor monitorización en sus sistemas. También se debe considerar ampliar la seguridad más allá del dispositivo en las ubicaciones de teletrabajo siempre que sea posible, como en dispositivos y redes gestionadas.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
