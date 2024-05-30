---
layout: posts
title: "Investigación médica colaborativa con cómputo confidencial"
number: 40
permalink: episode-EDT40-es
lang: es
nav_exclude: true
nav_order: 40
tags:
    - confidentialcomputing
    - healthcare
    - dataprivacy
    - dataintegrity
    - dataanalysis
    - moderncomputing
    - encryption
    - datasecurity
    - zerotrust
    - multicloud
    - cybersecurity
    - technology
    - policy

date: Tue Feb 23 2021 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Nick Bhadange

img: thumbnail.png
image: thumbnail.png
summary: "Romper las barreras para acelerar la investigación médica para la cura del cáncer con la computación confidencial. Nick Bhadange, Especialista en Tecnología, AI-Vets, y Darren Pulsipher, Arquitecto de Soluciones Principal, Sector Público, Intel, discuten la necesidad de la computación confidencial en la atención médica y los posibles beneficios a través de casos de uso."
video: "https://youtu.be/url"
description: "Romper las barreras para acelerar la investigación médica para la cura del cáncer con la computación confidencial. Nick Bhadange, Especialista en Tecnología, AI-Vets, y Darren Pulsipher, Arquitecto de Soluciones Principal, Sector Público, Intel, discuten la necesidad de la computación confidencial en la atención médica y los posibles beneficios a través de casos de uso."
---

<div>
{% include transistor.html id="558eb1c5" title="#40 Collaborative Medical Research with Confidential Computing" %}

{% include youtube.html id="url" %}
</div>

---

## ¿Por qué necesitamos la computación confidencial?

La infraestructura informática actual se construye con énfasis en el intercambio y la apertura: internet es gratuito y los datos deberían serlo también. Esto ha sido un problema en cuanto a la seguridad. Hemos implementado algunas soluciones que funcionan bien; sabemos encriptar los datos cuando están almacenados y cuando están en tránsito. A pesar de eso, los datos pueden ser atacados de diversas formas mientras se están leyendo, analizando y utilizando.

Los datos sensibles siguen siendo vulnerables, ya sea datos financieros, médicos o de ubicación, tanto desde un punto de vista de visibilidad como de integridad de datos.

Al tratar con datos en el sector de la salud, existen capas adicionales de complejidad. Hay muchas reglas y regulaciones como la HIPAA, y cada estado también tiene sus propias regulaciones en torno a los datos médicos. A pesar de la complejidad y del número de entidades reguladoras, es posible llevar a cabo la computación confidencial, donde tienes la capacidad de compartir datos entre partes que inherentemente no confían entre sí.

Por confidencialidad, necesitamos pensar en algunos factores diferentes: integridad de los datos, confidencialidad de los datos e integridad del código.

## Problemas críticos de privacidad y seguridad de datos.

Los registros de atención médica de una persona, especialmente en Estados Unidos, están dispersos en todas partes entre médicos, especialistas, laboratorios y hospitales. La mayoría de las personas no tienen un acceso fácil a sus registros; es casi imposible crear una imagen completa de tu propia salud. La computación confidencial puede ayudar a derribar estas barreras.

En primer lugar, puede asegurar que cualquier dato que compartas, puedes confiar en que estará protegido desde el punto de vista de la integridad de los datos; no será modificado por nadie. Puede ser confidencial, lo que significa que se tokenizará o encriptará, pero aún así se puede utilizar para realizar cálculos. Por ejemplo, si una parte desea realizar análisis en algunos datos, no necesita conocer información como nombres, fechas de nacimiento o números de seguridad social. Entonces, si esas partes de los datos pueden ser tokenizadas o encriptadas, se pueden compartir para su análisis siempre y cuando la otra parte sea de confianza.

Esto es donde las medidas de seguridad como la certificación juegan un papel, para que las partes puedan demostrar su identidad. Y esa certificación puede estar ligada hasta el nivel del hardware en los entornos de ejecución confiables que proporciona el hardware. De esta manera, no solo confías en el transporte y el punto final, sino también en la aplicación y cómo utilizará los datos.

Hay dos enfoques básicos para esto. Primero está el kit de desarrollo de aplicaciones (SDK, por sus siglas en inglés), lo que significa que el desarrollador puede decidir cómo dividir su código en componentes confiables y no confiables. El otro enfoque es tener un sistema de encriptación en tiempo de ejecución que se puede construir sobre un entorno de ejecución confiable, minimizando el esfuerzo requerido para convertir una aplicación actual en algo que pueda funcionar en ese entorno.

Con un entorno de ejecución confiable basado en hardware que protege las aplicaciones y los datos en uso, se vuelve muy difícil para un actor no autorizado, incluso si tienen acceso físico al hardware, privilegios de root o derechos de administrador del hipervisor, acceder a la aplicación protegida y los datos. El paradigma de cómputo confidencial tiene como objetivo permitir la eliminación incluso del proveedor de la nube de la base de cómputo confiable. De esa manera, solo el hardware y la aplicación protegida están dentro del límite de ataque.

Estos entornos informáticos permiten a los proveedores de servicios en la nube aprovechar al máximo las capacidades del hardware y la mejor seguridad posible, sobre la cual el usuario final tiene control absoluto. Cada parte puede determinar sus propias políticas y las jerarquías de políticas, como las estatales y federales, y cada proveedor de información puede determinar qué políticas se aplican y a quién.

## Estudio clínico de evidencia del mundo real

Reunir todos los datos y darles sentido es un gran desafío en la industria de la salud. La cantidad de configuraciones de privacidad y compartición de datos que están en funcionamiento entre diferentes proveedores, dispositivos, ubicaciones geográficas, etc., lo hacen actualmente imposible.

AI-Vets, Intel y algunos socios están trabajando juntos en este problema. La arquitectura brillantemente simple permite su uso en entornos dispares, tipos de datos y políticas, aún pudiendo realizar análisis centralizados.

Un ejemplo de nuestra implementación es una pequeña prueba de concepto: ¿Cómo se analiza entre múltiples partes como hospitales, entornos de investigación y laboratorios, cada uno con sus propios datos y ensayos que pueden estar llevando a cabo en un entorno clínico? Por ejemplo, ¿cómo podemos encontrar alguna correlación entre las personas que toman el medicamento X, digamos para la diabetes, y tienen la condición Y, digamos cáncer, cuando el medicamento X no tiene nada que ver con el tratamiento de la condición Y? Estos dos conjuntos de datos no estarían en el mismo lugar porque son manejados por diferentes proveedores.

Si, sin embargo, los proveedores formaran parte de un ecosistema donde pudieran determinar qué políticas desean aplicar en su punto final, podríamos tener una aplicación centralizada, un portal de investigación central, que tenga conexiones con estos puntos finales. Habría una gestión de claves y acreditación de terceros para verificar las credenciales y autorizaciones mutuas, de modo que todas las partes puedan confiar unas en otras.

Ese es un aspecto de la confianza, pero también debemos proteger los datos que se extraerán, consultarán y transmitirán. Para lograr esto, podemos gestionar los datos y aplicaciones dentro de recintos seguros y encriptados. Los datos se manejan utilizando las políticas que establece cada usuario, como la obfuscación de fechas de cumpleaños, números de seguridad social, etc. Esta información puede ser tokenizada, de modo que se convierte en basura completa en manos no autorizadas.

El portal central puede realizar una consulta que abarca múltiples puntos finales y combina diferentes tipos de datos en su sistema de tiempo de ejecución y realiza un análisis sobre eso. Por lo tanto, en lugar de tener que extraer todo en un lago de datos y luego realizar el análisis, se hace en tiempo real. No hay que esperar a que los datos se publiquen o se limpien primero aplicando todas esas políticas; esto sucede de forma dinámica y sobre la marcha.

Esto permite obtener ideas tremendas. Durante la pandemia, por ejemplo, si tuviéramos que esperar todos los días para obtener los datos y realizar análisis complejos en ellos, sería difícil. Si pudiéramos acceder a datos en tiempo real de todos estos diferentes sistemas en todo el país y el mundo, y aún así poder compartirlo de manera segura, podríamos obtener ideas únicas que de otra manera no serían posibles.

Ya hemos visto esto en algunas POCs para sitios de clínicos que hicimos con nuestro socio Fortanix. Tienen una línea de productos que facilita que diferentes entidades definan sus políticas en un entorno de computación confidencial y verifiquen las identidades entre sí, así como gestionen claves y confianzas. El concepto de entornos seguros de ejecución ha existido durante algún tiempo, y se ha vuelto popular, por lo que es más fácil de aprovechar. Los casos de uso para esto son fantásticos.

## Detección automatizada de COVID-19 a partir de imágenes de rayos X del pecho.

En algunos casos de uso, no solo es necesario asegurar los datos, sino también la propiedad intelectual asociada a algunos algoritmos especializados. Por ejemplo, para detectar automáticamente el COVID a partir de imágenes de rayos X, se manejarían datos radiológicos, datos del paciente y posiblemente un algoritmo patentado para realizar el análisis. Las enclaves pueden proteger tanto los datos como las aplicaciones de miradas indiscretas.

La enclave segura también protege las otras máquinas en la red porque si alguien envía algo malicioso hacia los nodos finales, el sistema de gestión de claves lo impediría ser intercambiado debido a que no está debidamente confirmado. Las partes eligen exactamente a qué fuentes de datos puede acceder la enclave y está completamente bloqueada, tanto en lo que entra como en lo que sale.

## Registros electrónicos de salud (eHR)

Los registros de salud son un gran desorden en Estados Unidos, con acuerdos en papel HIPAA no ejecutables, etc., y todo se encuentra disperso en diferentes entidades. Un caso de uso que puede ser un buen modelo a seguir es el del gobierno alemán. Han ordenado que los datos de atención médica deben almacenarse en registros electrónicos de salud, y esas aplicaciones deben implementarse en entornos de ejecución confiables. El paciente es el usuario final y determina qué datos están disponibles y para quién.

Ese nivel de detalle en términos de lo que está disponible para el usuario final es tremendo. Y no solo se recopilan y comparten todos esos datos de los diferentes sistemas, sino que están enclaustrados seguros, por lo que están completamente protegidos del mundo exterior. Si alguien no autorizado lograra acceder a los datos en sí, serían completamente insignificantes.

Estos entornos de ejecución confiables son el primer paso en la dirección hacia controles que son fácilmente comprensibles y fácilmente aplicables.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
