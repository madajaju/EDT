---
layout: posts
title: "Asegurando tu canal de DevOps"
number: 46
permalink: episode-EDT46-es
has_children: false
lang: es
nav_exclude: true
parent: Episodios
grand_parent: Español
nav_order: 46
tags:
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - zerotrustarchitecture

date: Wed Apr 07 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "En la segunda parte de este episodio, Darren Pulsipher, Arquitecto Jefe de Soluciones de Intel, brinda consejos prácticos para asegurar cada etapa del pipeline de DevOps, incluyendo la protección del hardware y las pilas de software con la raíz de confianza hardware, el escaneo de seguridad, los contenedores/máquinas virtuales atestadas y encriptadas, y más."
video: "https://youtu.be/url"
description: "En la segunda parte de este episodio, Darren Pulsipher, Arquitecto Jefe de Soluciones de Intel, brinda consejos prácticos para asegurar cada etapa del pipeline de DevOps, incluyendo la protección del hardware y las pilas de software con la raíz de confianza hardware, el escaneo de seguridad, los contenedores/máquinas virtuales atestadas y encriptadas, y más."
---

<div>
{% include transistor.html id="3abb647c" title="#46 Securing your DevOps Pipeline" %}

{% include youtube.html id="url" %}
</div>

---

## Los vectores de ataque

Muchos ataques ocurren a nivel de las personas. Algunos de los ataques más recientes y insidiosos se han centrado en el phishing y la ingeniería social en individuos dentro de DevOps. Necesitamos entrenar a las personas mejor en todos los niveles. En un caso, fue un pasante con acceso a las llaves quien cayó en un plan nefasto.

Otro vector es la tecnología: ataques de denegación de servicio tradicionales, ataques de inyección SQL o ataques de desbordamiento de búfer. Los incidentes más recientes utilizan tanto a las personas como a la tecnología para atacar el proceso. Son insidiosos porque ocurren alrededor del proceso de construcción y pueden ser muy difíciles de encontrar. También pueden propagar código malicioso a través de tus clientes. Para infundir confianza en los clientes, las organizaciones deben tener una estrategia para asegurar la cadena de suministro.

## Seguridad del oleoducto

No todas las tuberías de construcción son iguales, pero en general, constan de cuatro etapas con entornos: desarrollo, construcción, prueba y producción. Estas etapas se pueden desglosar fácilmente en múltiples etapas dependiendo del tipo de producto que estés desarrollando, pero los entornos se vinculan a esas diferentes etapas.

Necesitamos analizar todo el proceso, que incluye software, hardware y procesos, y tomar un enfoque diferente en lugar de solo enfocarnos en infraestructura, como lo han hecho la mayoría de manera efectiva.

## Seguridad del anfitrión y la infraestructura

En la parte inferior de la pila, necesitas asegurar el hardware en el entorno de desarrollo y construcción. El entorno de pruebas será un poco diferente porque es posible que desees ejecutar pruebas que involucren la inyección de código malicioso. Los entornos de producción suelen estar bien protegidos, especialmente ahora que más empresas ofrecen software como servicio. En los entornos de producción y construcción, debes llevar a cabo todas las medidas de seguridad típicas que harías en entornos de producción o SaaS.

Hay tres elementos clave en estos entornos. El primero es la detección. La detección y corrección es una medida de seguridad bien conocida que utiliza registros de servicio que utilizan una plataforma como Splunk para encontrar cualquier cosa fuera de lo común. Asegúrate de hacer esto no solo en entornos de desarrollo, sino también en construcción y producción.

Ten en cuenta que en el entorno de prueba, necesitarás múltiples entornos de prueba, algunos más seguros que otros en el lado de la detección, ya que deseas inyectar código erróneo en tus pruebas. No apliques la misma seguridad en todos los entornos; los perfiles de seguridad pueden ser diferentes para cada entorno.

La prevención es la segunda clave. Esto significa ser inteligente con el hardware, asegurarse de que las cosas estén correctamente actualizadas, tener las actualizaciones adecuadas de seguridad y hacerlo de manera automatizada. Esto debería ocurrir en todos los entornos, incluyendo el entorno de pruebas, y especialmente en el desarrollo y en producción.

La tercera clave es parte de la prevención: el hardware de raíz confiable. Se puede establecer una cadena de confianza desde el hardware, a través de las secciones de inicio del firmware, hasta los hipervisores y sistemas operativos. La raíz de confianza se puede llevar a los entornos de desarrollo, construcción, prueba y producción. Esto puede incluir contenedores seguros y máquinas virtuales seguras. Por ejemplo, me gusta almacenar mis claves de encriptación y hash en hardware como un módulo TPM y luego también con la extensión Secure Guard de Intel. Incluso si alguien ingresara a la máquina, no podrían robar esas claves.

## Ejecutables de confianza

Configurar ejecutables confiables es el siguiente paso. Esto significa que puedes ejecutar verificaciones de seguridad contra el código que se comprueba y se compila, y luego hacer check-in del hash con esos cambios. Si se ha inyectado algo en la base de código, puedes detectarlo, ya que no debería haber cambios en el código durante el proceso de compilación.

En una nueva etapa de controles de seguridad, puedes ejecutar análisis estático en el código o análisis dinámico en el código o violaciones de seguridad. Hay algunas herramientas excelentes que puedes integrar fácilmente en tu tubería típica de DevOps, ya sea que estés utilizando Jenkins o flujos de trabajo de GitHub, por ejemplo.

Una vez que se ha generado un ejecutable, se debe crear inmediatamente el hash y ese hash debe ser versionado junto con el ejecutable; debe permanecer el ejecutable que pasa por todas las pruebas y se implementa en producción. Ese hash garantizará que nada ha sido manipulado.

## Imágenes atestadas y seguras

Normalmente, hay varios repositorios o ejecutables disponibles para usar en el código. El hash que se crea durante la compilación ahora se encuentra en el registro, y puedes certificarlos. Puedes asegurarte de que no se modifiquen al guardarlos en las imágenes. Si alguien necesita volver atrás y hacer un pequeño cambio, por ejemplo, una etiqueta o metadatos, es importante no realizar el cambio y asignarle el mismo número de versión. Es mejor pasar por el ciclo nuevamente, incluso si lleva más tiempo que realizar procesos manuales con tus binarios.

Ahora, puedes tomar ese mismo archivo binario en el que has ejecutado todas las pruebas y enviarlo a producción. En este punto, sería un error reconstruir el código fuente. Lo mejor es enviar la compilación original al repositorio de producción, también conocido como el repositorio "golden". Este repositorio es el único lugar desde donde deben obtenerse imágenes, binarios o máquinas virtuales, por ejemplo. Todas las imágenes deben ser notarizadas y confirmadas. Si tienes máquinas virtuales o aplicaciones confidenciales, o si deseas asegurarte de que se ejecuten solo en hardware específico, puedes aplicar ese tipo de restricciones. Puedes encriptar las máquinas virtuales, contenedores o incluso los binarios y bloquearlos con la llave que se encuentra almacenada en tus sistemas de compilación y producción.

## Inyectando herramientas de seguridad

Las herramientas de seguridad deben ser integradas en el proceso de construcción. En lugar de usar librerías de seguridad de código abierto o recrear las que ya existen, sus ingenieros de seguridad deben estar involucrados para que puedan elegir herramientas que puedan ser fácilmente utilizadas y reutilizadas por los equipos de desarrollo. Un buen ejemplo es la autenticación básica: inicio de sesión de usuario. Debería haber una librería común en lugar de que cada aplicación tenga la suya propia.

Es importante tratar estas bibliotecas y herramientas de seguridad de la misma manera que tratarías cualquier otro programa de desarrollo de software que compartas en toda tu organización. Compartirlos reducirá el tiempo y aumentará la seguridad en todo tu ecosistema.

## Construye una vez, despliega seguridad en todas partes.

Una vez que hayas establecido tus equipos de seguridad de desarrollo, asegúrate de inyectar las políticas y herramientas en todos tus productos y entornos. Existe una gran tecnología hoy en día que te permite gestionar múltiples entornos. Entonces, cuando se crea una nueva aplicación, se crea en un perfil de seguridad con tus propias imágenes de VM o contenedores como imágenes base que están utilizando los equipos de desarrollo. Al configurar la seguridad en tus VM o contenedores en tus imágenes base, obtienes una conformidad de seguridad instantánea en los diferentes entornos. También existe la posibilidad de integrarse con herramientas de seguridad, para que si encuentras algo inusual en la aplicación, puedas notificar a las herramientas de seguridad. No intentes crear herramientas de seguridad que cubran el cien por ciento de los casos, porque nunca las terminarás; apunta al ochenta por ciento como una base sólida y crea herramientas para que los desarrolladores de aplicaciones puedan innovar en el último veinte por ciento si es necesario, en conjunto con tu equipo de seguridad.

Un último consejo importante es automatizar todo lo que puedas, especialmente en el pipeline de DevOps para prevenir inyecciones maliciosas. Protege tu pipeline; protege tu proceso.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
