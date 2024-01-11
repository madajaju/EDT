---
layout: posts
title: "Historia de las comunicaciones avanzadas."
number: 108
permalink: episode-EDT108-es
has_children: false
lang: es
nav_exclude: true
parent: Episodios
grand_parent: Español
nav_order: 108
tags:
    - 5g
    - cellphone
    - comms
    - wifi6

date: Tue Oct 04 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Leeland Brown
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "En este episodio, Darren conversa con los frecuentes invitados de Intel, Leland Brown, Ingeniero Principal: Director Técnico de Comunicaciones Avanzadas, y la Dra. Anna Scott, Arquitecta Principal de Borde para el Sector Público, acerca de la historia de las comunicaciones avanzadas."
video: "https://youtu.be/url"
description: "En este episodio, Darren conversa con los frecuentes invitados de Intel, Leland Brown, Ingeniero Principal: Director Técnico de Comunicaciones Avanzadas, y la Dra. Anna Scott, Arquitecta Principal de Borde para el Sector Público, acerca de la historia de las comunicaciones avanzadas."
---

<div>
{% include transistor.html id="a4e3ec11" title="#108 History of Advanced Communications" %}

{% include youtube.html id="url" %}
</div>

---

La primera generación de tecnología de teléfonos celulares, el Sistema Avanzado de Telefonía Móvil (AMPS, por sus siglas en inglés), se desarrolló a fines de los años 70 y principios de los años 80. A principios de los años 80, hacer una llamada desde tu automóvil con un teléfono de bolsa voluminoso era un lujo. El lujo de hacer una llamada desde un dispositivo móvil pronto se convirtió en una necesidad.

En la década de los 90, la tecnología avanzó a medida que se desarrollaba el estándar del Sistema Global para las Comunicaciones Móviles (GSM) para describir los protocolos de 2G, que se convirtió en el estándar global a mediados de la década del 2010. El 2G comenzó a convertir el teléfono móvil en algo con más capacidades que simplemente hacer llamadas, añadiendo mensajes de texto e incluso juegos.

3G se lanzó a principios de los años 2000 y trajo consigo algunas capacidades incipientes de datos con internet, que todavía se encontraba en sus etapas iniciales. El Wi-Fi no estaba ampliamente disponible, pero podías, por ejemplo, acceder a la red de datos de un operador conectando un teléfono a una laptop. Podías hacer lo mínimo, por supuesto, con velocidades de módem o DSL.

Con 4G, la tecnología pasó a ser un estándar unificado, fusionando CDMA y GSM en un LTE bajo el Proyecto de Asociación de Tercera Generación (3GPP). Cada operador empezó a adoptar este estándar común. Fue entonces cuando la banda ancha se expandió. Leland atribuye el avance económico de la década del 2010 al 4G, permitiendo que existan y prosperen empresas como Amazon, Netflix y Uber, y plataformas como YouTube, Google y Facebook.

Leland habla sobre 5G en términos de lo que las compañías han implementado. 4G y 5G están relacionados porque son parte de la misma línea de especificaciones. Catorce termina lo que llamamos 4G LTE avanzado. Quince comienza con 5G NR. En esta transición, hay un objetivo comercial y una estrategia para adoptar la nueva tecnología como parte del estándar. El objetivo comercial es que las compañías ya han invertido en sus redes 4G, por lo que los componentes actuales del núcleo de paquetes evolucionado (evolved packet core) y RAN de las redes 4G todavía están en su lugar. Agregan una caja RAN 5G con una frecuencia diferente, pero aún está conectada al núcleo 4G, lo que se llama no autónomo.

Darren aclara que el 4G fue revolucionario porque desbloqueó muchas cosas nuevas y requirió todo equipo nuevo, mientras que el 5G es más evolutivo porque también abrió cosas nuevas. Sin embargo, la tecnología subyacente se basa en el mismo hardware y núcleo.

Es parte del esquema de modulación que proporciona el 5G en la interfaz aérea, pero la arquitectura es diferente; está virtualizada en el 5G en comparación a ser más propietaria en el 4G. Eso lleva a que muchas capacidades se conviertan en parte de las implementaciones de 5G.

Un ejemplo es cuando un operador desplegó una red 4G colocando una caja de RAN al lado de una antigua caja 3G. Muchas compañías, como Sprint, mantuvieron sus cajas 3G y su red CDMA durante años. En realidad, el 4G era simplemente otra caja colocada al lado de la caja 3G. El 5G toma esa caja propietaria y brinda la capacidad de distribuir las funciones de esa caja a través de una red virtualizada. Parte de la banda base del 5G ahora puede ser definida por software a escala en varias áreas en comparación con estar contenida en un único sitio, caja o ubicación.

Esto significa que puedes agregar funcionalidad a tu red sin reemplazar hardware. A medida que te adentras en redes independientes, sin embargo, puedes tomar una red 5G y hacer algo localmente. Por ejemplo, supongamos que tienes un rascacielos en lugar de depender de la cobertura de red de una antena ubicada afuera con un núcleo en la empresa de telefonía o en una estación de conmutación. En ese caso, puedes desarrollar una red in situ construida dentro de ese edificio que expande la cobertura y los servicios de datos a lo largo de él.

Esta red independiente abre muchas capacidades nuevas y permite nuevos actores. También permite que organizaciones como el gobierno federal y el Departamento de Defensa adopten la tecnología para sus casos de uso. Tienen más flexibilidad cuando no dependen altamente de los proveedores de servicios.

Anna señala que además de nuevos jugadores y nuevas capacidades locales, también existe la posibilidad de utilizar el espectro CBRS. La forma en que se maneja es compleja, pero existe una opción sin prioridad que se puede utilizar de forma gratuita, y una opción con prioridad, el espectro de la Marina, que puedes comprar si no necesitas interrupciones. Algunas instalaciones de fabricación extensas están utilizando el espectro CBRS, ya sea trabajando con un transportista principal que no cobra por el alcance o trabajando con un nuevo participante que creará una red independiente en el lugar con CBRS. Este es un modelo muy diferente y existen ventajas reales en la longitud de onda y la complejidad de los sistemas que se pueden configurar con 5G en comparación con el Wi-Fi.

Todavía hay algunas ventajas de Wi-Fi, pero configurar una red Wi-Fi robusta puede ser un desafío, especialmente si estás moviendo grandes piezas de metal alrededor. Si tienes una configuración establecida, tiene sentido optar por Wi-Fi 6, especialmente si la economía lo permite.

La demanda impulsa el cambio; la mayoría de los usuarios finales se sienten cómodos con el 4G en sus dispositivos personales. Entonces, ¿por qué pasar al 5G? El valor que aporta el 5G no está necesariamente en las tasas de datos más altas y la menor latencia; esos servicios se brindan a gran escala porque están virtualizados. El 5G es intensivo en software en comparación con el 4G, que se basa más en cajas patentadas y en hardware. El 5G se puede virtualizar en varias posiciones. El portafolio de frecuencias es dinámico y se pueden utilizar bandas sin licencia, bandas con licencia y CBRS, por lo que hay muchas más opciones.

Echa un vistazo a la segunda parte de esta entrevista [aquí](episodio-EDT109).



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
