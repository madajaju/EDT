---
layout: posts
title: "Comprendiendo los problemas desde Edge hasta el centro de datos"
number: 58
permalink: episode-EDT58-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 58
tags:
    - data
    - edge
    - compute
    - edgemere
    - edgetocloud
    - cybersecurity
    - technology
    - process

date: Wed Jul 21 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquitecto Principal de Soluciones en Intel, describe los problemas comunes en las arquitecturas desde el borde hasta el centro de datos que ha observado y discutido con clientes en el sector público. Presenta una arquitectura ideal para resolver estos problemas."
video: "https://youtu.be/CVeyd3pZTkA"
description: "Darren Pulsipher, Arquitecto Principal de Soluciones en Intel, describe los problemas comunes en las arquitecturas desde el borde hasta el centro de datos que ha observado y discutido con clientes en el sector público. Presenta una arquitectura ideal para resolver estos problemas."
---

<div>
{% include transistor.html id="51a240b0" title="#58 Understanding Edge to Data Center Problems" %}

{% include youtube.html id="CVeyd3pZTkA" %}
</div>

---

## Integración de misión

Hay muchas partes móviles al implementar capacidades en misiones, especialmente en el Departamento de Defensa, pero también en hospitales de Asuntos de Veteranos, Seguridad Nacional, la FDA y FEMA, por ejemplo, y regresando los datos de dispositivos periféricos a estaciones terrestres y centros de datos regionales y empresariales. Los datos deben ser utilizables y confiables para flujos analíticos importantes en los procesos de inteligencia artificial y llegar a manos de analistas para tomar decisiones basadas en los datos en bruto.

## Controladores para Edge: Latencia, Ancho de banda, Seguridad, Conectividad

Parte del puzzle es que los dispositivos periféricos se han vuelto más sofisticados y están recopilando más datos de los que podríamos enviar a través de 5G. Las esperanzas de que 5G conquistara todos los datos y los hiciera disponibles de forma transparente en el centro de datos nunca se materializaron con los avances de los dispositivos IoT.

Una de las arquitecturas originales en torno a IoT fue desarrollada por Cisco, llamada "fog". La idea del fog consistía en que el centro de datos conectaba el fog con los dispositivos periféricos, de manera que parte del procesamiento y la conectividad se realizaba allí. Si la conectividad de red es confiable y constante, esto funciona bien con suficiente ancho de banda. Sin embargo, la cantidad de datos generada actualmente en el borde por estas organizaciones supera cualquier cantidad de ancho de banda disponible.

Con la IoT, solo se traslada una parte de los datos al centro de datos, por lo que en general, el valor de los datos solo ocurre cuando se analizan allí. El problema es que el centro de datos no puede almacenar y procesar todos los grandes datos. Incluso al enviarlos a la nube, no se resuelve el problema, ya que la nube no puede procesar todos los datos que se encuentran en el borde. Por lo tanto, queremos alejarnos de enviar todos los datos al centro de datos para recolectar el valor y, en cambio, acercar el valor de los datos lo más posible al borde, disminuyendo la cantidad de volumen de datos que regresa al centro de datos.

Por supuesto, no todos los datos se pueden enviar directamente al borde; tiene que haber correlación entre los diferentes dispositivos periféricos. El valor debe estar en un lugar más centralizado, no necesariamente en el centro de datos central, sino tal vez en uno de estos nieblas intermedias o centros de datos regionales. La clave está en mover los datos de manera inteligente y acercar el valor de los datos lo más posible al borde de una manera repetible y sostenible. Al hacerlo, podemos reaccionar mucho más rápidamente en el borde.

## Capa Física Común

Para superar algunos de estos problemas, primero necesitamos una capa física común. Esto significa que es común desde el centro de datos a través de las capas de niebla hasta los dispositivos periféricos; hay una forma de administrar y controlar los dispositivos y obtener ayuda de ellos de manera confiable y común. Esto no necesariamente significa la misma máquina, sino un dispositivo mínimo viable con una interfaz común. Otro beneficio de la capa física común es que si escribe código para una aplicación, puede ejecutarse en cualquier lugar de este ecosistema. Intel tiene una excelente tecnología para esto, como oneAPI, que hace gran parte del trabajo para que pueda escribir código una vez, compilar los binarios para los diferentes tipos de dispositivos, enviarlos a la capa física común y que se ejecute correctamente. En resumen, los beneficios son un modelo operativo común, un modelo de seguridad común y un modo de operación de escribir una vez y ejecutar en cualquier lugar.

## Infraestructura Definida por Software

SDI se aplica al centro de datos en nubes privadas y públicas con sus APIs definidas por software. Con SDI en el borde, obtenemos formas comunes de mover datos. Podemos provisionar recursos en el borde en el centro de datos en cualquier momento, y podemos mover datos de esta manera de manera más fluida.

## Capa de Gestión de Información Distribuida

Necesitamos ser más inteligentes en la gestión y clasificación de datos, moviendo los datos solamente donde van a ser procesados, ya sea en el borde, en un centro de datos regional o en la nube. Aspectos importantes son la catalogación y reutilización de datos, y cumplir con los requisitos de seguridad y cumplimiento normativo. El beneficio de esta capa de gestión de información distribuida es que se envía menos datos al centro de datos, se mueve menos información, y se lleva el valor hacia el borde.

## Capa de Gestión de Servicios

Para realmente llevar el valor hasta el extremo, necesitamos poder implementar aplicaciones en el extremo. Ahí es donde entra en juego una capa de gestión de servicios, o un ecosistema de contenedores. Esto permite enviar microservicios al extremo, a la niebla, al centro de datos o a la nube de manera repetible y confiable. Por ejemplo, si un centro de datos regional falla, no tienes que depender de él para que la malla de servicios siga funcionando.

## Capa de Servicio de Aplicación

Una capa de servicios de aplicación coordina las diferentes aplicaciones para que puedas crear flujos de trabajo que generen el verdadero valor comercial a partir de los datos. Simplemente mover los datos o ejecutarlos a través de un Motor de Analítica no es suficiente. Los datos deben moverse desde el Motor de Analítica a una estación de trabajo del analista. Algunas herramientas en esta capa serían la automatización de procesos robóticos y los pipelines de DevOps. Aquí también es donde puedes aplicar seguridad y cumplimiento en la capa de aplicación.

## Seguridad y capas de identidad

El aspecto clave de la capa de identidad es establecer confianza entre entidades que están debidamente identificadas. Debemos comprender quién está accediendo a qué y qué dispositivos están accediendo a qué datos, en qué momento y dónde. La identidad se lleva más allá del usuario típico y se extiende a la identidad de aplicaciones, dispositivos en el borde, niebla, centros de datos y nube.

El gemelo de la identidad es la seguridad. Aquí tenemos detección, remedio, encriptación y establecimiento de la raíz de confianza. Esto resulta en confiabilidad, datos confiables y cumplimiento. Ahora, los datos inteligentes pueden ser enviados al borde, y luego ser transmitidos al centro de datos, pero no se está trasladando cantidades masivas de datos sin procesar, solo lo necesario de una manera segura.

## Vista de alto nivel

Para tener una arquitectura exitosa de borde a la nube que sea repetible, todos estos diferentes elementos son necesarios. Hemos visto que algunas organizaciones construyen una arquitectura específica de borde a la nube y cuando despliegan una nueva capacidad en ese entorno, quedan atascadas. Por ejemplo, si codifican de manera fija los datos que residen en el borde porque siempre los procesarán en el borde, o en el centro de datos para una aplicación que siempre se procesa en el centro de datos, esto resulta en rigidez. También aumenta el tiempo necesario para implementar nuevas capacidades, quizás años en lugar de meses. Si tomamos los aprendizajes de despliegues de aplicaciones de borde a la nube una y otra vez y comenzamos a generalizar, rápidamente descubrimos que caen en una de las capas que hemos identificado.

Para obtener más información, consulta este documento (incluye enlace) sobre la descripción general de alto nivel de esta arquitectura de borde a nube. No somos prescriptivos en cuanto a lo que encaja en esas cajas, pero lo importante es comprender los casos de uso que abarcan. Tenemos ideas sobre lo que hay en cada una de las capas, y estamos desarrollando los ecosistemas para adaptarnos a las necesidades únicas de tu organización dentro de las capas.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
