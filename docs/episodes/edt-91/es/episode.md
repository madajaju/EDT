---
layout: posts
title: "Luchando contra el Adversario Cibernético asegurando tu Cadena de Suministro de Software."
number: 91
permalink: episode-EDT91-es
lang: es
nav_exclude: true
nav_order: 91
tags:
    - cybersecurity
    - datamanagement
    - iot
    - sbom
    - transparency
    - zerotrust
    - technology
    - policy

date: Wed Jun 08 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Eric Greenwald

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquitecto Principal de Soluciones de Intel, y Eric Greenwald, Consejero General de Finite State, hablan sobre asegurar la cadena de suministro de software."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquitecto Principal de Soluciones de Intel, y Eric Greenwald, Consejero General de Finite State, hablan sobre asegurar la cadena de suministro de software."
---

<div>
{% include transistor.html id="d4b56c70" title="#91 Fighting the Cyber Adversary by Securing your Software Supply Chain" %}

{% include youtube.html id="url" %}
</div>

---

Darren y Eric Greenwald, Asesor Jurídico General de Finite State, discuten la seguridad de la cadena de suministro de software en este episodio.

Finite State se enfoca en encontrar vulnerabilidades en el firmware, más comúnmente en software de terceros que podrían ya haber tenido vulnerabilidades existentes, antes de incorporarlo en sus dispositivos. Finite State se especializa principalmente en dispositivos de Internet de las cosas industriales, dispositivos médicos, automóviles y productos electrónicos de consumo.

Durante siete años antes de unirse a Finite State, Eric trabajó como abogado en el sector privado, enfocándose en pruebas de seguridad e identificación de vulnerabilidades para empresas de ciberseguridad. Antes de eso, trabajó en el gobierno en áreas de ciberseguridad y seguridad nacional, para el FBI y la CIA, y como consejero principal del Comité de Inteligencia de la Cámara de Representantes. Su trabajo en el gobierno culminó cuando se convirtió en el Director Principal de Ciberseguridad en el Consejo de Seguridad Nacional de la Casa Blanca.

Eric cree que parte de la razón por la cual ahora hay un énfasis en asegurar la cadena de suministro es que la amenaza ha evolucionado. La naturaleza cada vez más compleja del software, incluyendo que muchos componentes tienen vulnerabilidades cuando son creados por primera vez y solo se descubren con el tiempo, hace más difícil encontrar dispositivos construidos a través de la cadena de suministro de software. Además, recientes ataques de alto perfil a través de una violación en la cadena de suministro de software, como el caso de SolarWinds, han hecho que las personas estén más conscientes del peligro.

En el ataque de SolarWinds, el perpetrador tuvo paciencia, no causando inmediatamente caos sino esperando un año mientras se filtraba a través de redes informáticas estadounidenses, cultivando acceso e información. Esa paciencia es probablemente la diferencia más significativa entre un ataque estatal y uno criminal. A veces, los ataques criminales pacientes están más enfocados en obtener un retorno financiero de inversión, mientras que los detrás de un ataque estatal están dispuestos a pasar años desarrollando su acceso a la inteligencia. Sin embargo, en ambos casos, los ataques se están volviendo más sofisticados y están mucho mejor posicionados para aprovechar ventajas devastadoras de la complejidad de la cadena de suministro.

Para combatir estos ataques, están surgiendo nuevas regulaciones. La administración de Biden emitió la orden ejecutiva 14028 en mayo de 2021, que tiene dos puntos principales: desarrollo seguro de software y lista de materiales de software (SBOM, por sus siglas en inglés). La orden ejecutiva solo se aplica a la adquisición gubernamental, pero es probable que la industria privada la siga.

Los detalles y recomendaciones técnicas para el desarrollo seguro de software aún están siendo trabajados. Sin embargo, parte de ello sería que los proveedores de software al gobierno tendrían que proporcionar un SBOM. El primer borrador de legislación para SBOMS salió en 2014, por lo que los estándares para producirlos se han vuelto más maduros y desarrollados. Un SBOM es esencialmente una lista de componentes de software que se utilizaron en un producto de software, no muy diferente a una lista de ingredientes en un producto alimenticio. Esto ofrece transparencia en la cadena de suministro, que es esencial para evaluar vulnerabilidades o para poder identificar una vulnerabilidad que se descubra en una fecha posterior.

Un excelente ejemplo de esto es lo que sucedió con Log4j. Cuando se descubrió esa vulnerabilidad, muchas empresas no tenían idea si la tenían en su sistema. No sería una varita mágica, pero un SBOM permitiría a las empresas descubrir más fácilmente si tienen el componente de software problemático en su sistema y actuar más rápidamente para implementar un parche.

Los argumentos en contra de publicar SBOMs son que proporcionarán una guía para los atacantes y revelarán información propietaria. Si bien estas son preocupaciones legítimas que deben ser discutidas, el Departamento de Comercio y el Departamento de Seguridad Nacional mantienen un beneficio mucho más significativo para los defensores al tener transparencia que cualquier ventaja otorgada a los atacantes. Existen proyectos de ley bipartidistas que apoyan a los SBOMs. Hay formas de reducir el riesgo de que los SBOMs caigan en manos equivocadas, como contratos seguros o no fungibles. Los debates sobre estas preocupaciones continuarán en el sector público, y más empresas los adoptarán.

Esta legislación está ocurriendo porque la FDA ha sugerido que los fabricantes de dispositivos médicos incorporen los SBOM como parte del proceso de revisión, por lo que los SBOM están ganando impulso entre estos fabricantes. El mundo físico se ve cada vez más afectado por el software en los dispositivos médicos y sistemas integrados, como los sistemas de control de plantas de energía, sistemas de climatización, controles de aeropuertos, etc., por lo que los sistemas operativos están en riesgo, con consecuencias más significativas que los ataques al sistema empresarial.

Una dificultad para los profesionales de OT es que muchos de los componentes industriales son más antiguos y no han sido actualizados necesariamente. Aun así, los hackers son reacios a conectarse a internet y actualizar porque así es como los hackers ingresan. La mejor respuesta a este problema es intentar obtener transparencia de los componentes en la pila, escanear el sistema y los dispositivos que forman parte de la red OT, y realizar ingeniería inversa y descompilación para comprender los detalles. Básicamente, necesitas crear tu SBOM y evaluar dónde se encuentran las vulnerabilidades.

Esta es el área principal de trabajo para Finite State. Ellos analizan los sistemas y dispositivos. Tienen una plataforma que automatiza el análisis del código incrustado, proporciona una lista de las vulnerabilidades e identifica y agrupa las vulnerabilidades de mayor prioridad. A veces se puede eliminar toda una categoría de vulnerabilidad con una sola corrección. Crear el SBOM por sí mismo, entonces, no es suficiente. Debe estar vinculado a un sistema de gestión de riesgos para analizar y clasificar las numerosas vulnerabilidades. Encontrar los riesgos de mayor prioridad es un proceso complejo y Finite State puede ayudar a los equipos de seguridad a priorizar sus acciones para proteger sus sistemas.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
