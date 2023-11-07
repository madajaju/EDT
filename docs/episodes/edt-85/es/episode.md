---
layout: posts
title: "Inteligencia Artificial y Seguridad"
number: 85
permalink: episode-EDT85-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 85
tags:
    - aiml
    - cybersecurity
    - devops
    - compute
    - technology
    - process

date: Wed May 04 2022 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "En este episodio, Darren discute los aspectos de los datos sobre inteligencia artificial (IA) y la importancia de asegurar esos datos."
video: "https://youtu.be/NVcBCPpJ4rY"
description: "En este episodio, Darren discute los aspectos de los datos sobre inteligencia artificial (IA) y la importancia de asegurar esos datos."
---

<div>
{% include transistor.html id="ffe877ee" title="#85 Artificial Intelligence and Security" %}

{% include youtube.html id="NVcBCPpJ4rY" %}
</div>

---

## Fracasos de IA

Recientemente, Darren pidió a una clase de estudiantes de secundaria y universidad que estudian inteligencia artificial que encontraran fallas en la IA. Encontraron ejemplos como Microsoft Tay, un chatbot que aprendió conversación informal de Twitter y, en menos de 24 horas, estaba haciendo comentarios racistas y misóginos basados en la manipulación de los feeds de Twitter. Otro ejemplo fue un sistema de seguimiento de pelota del Club de Fútbol Inverness que debía seguir una pelota de fútbol, pero en su lugar siguió la cabeza calva de un árbitro. Más grave fue un accidente fatal cuando un vehículo autónomo de Uber no reconoció a un peatón fuera de un cruce peatonal y no logró detenerse.

## Desplegando soluciones

Todos estos fracasos de IA tenían que ver con los datos. Al implementar soluciones de IA, debes hacerte preguntas críticas: ¿Dónde estoy realizando mi inferencia? ¿Está seguro el punto final? Si estás realizando toda tu inferencia en el punto final, tal vez con detección de objetos mediante una cámara, por ejemplo, debes asegurarte de que sea seguro; nadie debería poder manipular los datos, la cámara o el modelo.

Otra pregunta es, ¿qué se va a implementar? ¿Estoy implementando una red neural o algoritmo en el perímetro, o simplemente estoy transmitiendo datos desde el perímetro hacia un centro de datos para hacer la inferencia ahí? Además, cuando se opera la IA, debes preguntarte qué tan seguido se actualizarán los modelos o algoritmos.

## Tubería de IA

El proceso de desarrollo, entrenamiento, prueba, implementación e inferencia de IA necesita tres elementos: la aplicación, el modelo y los datos. Esos tres elementos deben migrar juntos a través del proceso y estar protegidos de manera concurrente. Necesitas asegurarte de que los datos de producción no sean manipulados incluso durante la producción.

## Amenazas de seguridad de la IA

Las amenazas para la inteligencia artificial (IA) son significativas, ya sea que se trate de espionaje, sabotaje o fraude, debido a que la superficie de ataque es amplia.

## Ataques

Primero están los modelos. Un modelo puede ser manipulado, como alguien poniendo pegatinas en blanco y negro en las señales de alto para que no sean reconocidas como tales o alguien interfiriendo con la detección de coincidencia de patrones, de modo que los ataques pasen desapercibidos. Los modelos no solo deben ser protegidos durante el entrenamiento, sino también durante las pruebas, implementación e inferencia. El cifrado, el control de acceso y el control de modelo y versión son críticos, al igual que lo serían al desarrollar una aplicación.

Los datos de entrenamiento y producción de origen también deben estar protegidos contra la manipulación.

## Tipos de ataques

Un documento del Centro Belfer clasifica las amenazas en un eje de formato y un eje de visibilidad. El eje de formato va desde físico hasta digital. El eje de visibilidad va desde perceptible hasta imperceptible.

## Ataques físicos

Los ataques físicos pueden alterar objetos físicos como la etiqueta en la señal de pare. Estos ataques fueron evidentes desde el principio en los sistemas de conducción autónoma y el reconocimiento facial. Necesitamos un mejor entrenamiento de los algoritmos de IA para estos ataques, utilizando técnicas de aprendizaje reforzado y aprendizaje de casos negativos.

## Ataques digitales

Los ataques digitales son más difíciles de detectar ya que no son visibles. Un ataque podría ser ruido blanco inyectado en el flujo de datos para confundir al algoritmo. Estos ataques son difíciles de combatir a menos que se realice inferencia en el borde o se implemente la detección de patrones. Por esta razón, es esencial saber de dónde provienen los datos fuente, tanto en el entrenamiento, la prueba y la producción de datos.

## Identifique las fuentes de datos.

Las fuentes de datos deben ser verificadas y probadas a partir de fuentes de datos públicas. Los datos de código abierto no están bien protegidos. Considera la posibilidad de generar fuentes de datos para tener un mayor control. Si utilizas una fuente de datos compartida, utiliza un sistema de control de versiones como GitHub o GitLab para verificar la consistencia. Los datos de prueba también necesitan control de versión, control de acceso y otras medidas de seguridad, tal como sueles hacerlo en un flujo de trabajo de DevOps.

La última parte, la más desafiante, consiste en proteger los datos de producción. Hacer la inferencia lo más cerca posible de los datos es un buen comienzo. Muchas especulaciones pueden realizarse directamente en el borde con el procesamiento neuromórfico e incluso conjuntos de instrucciones en los procesadores Intel para reducir el riesgo de manipulación de datos durante el transporte. En cambio, puedes encriptar los datos y enviarlos de vuelta al centro de datos.

Proteger y gestionar datos / Seguridad en el proceso de IA

Una vez que hayas identificado todas tus fuentes de datos, hay tres aspectos críticos para la protección: control, seguridad y encriptación.

Lo primero es tener control. Deberías tener control de versiones, bibliotecas protegidas y realizar copias de seguridad y restauraciones en caso de archivos de datos dañados. Estas son prácticas estándar de seguridad que la inteligencia artificial debería implementar, al igual que en el desarrollo de aplicaciones.

La seguridad debe incluir autorización de acceso, incluso algunos conceptos de confianza cero como otorgar acceso a las personas que lo necesitan por un corto tiempo. Asegúrese de que los modelos no estén siendo manipulados y asegúrese de que estén vinculados a aplicaciones específicas.

Los datos deberían ser encriptados en reposo, en tránsito y en uso. En el pasado, esto solía ser costoso en cuanto a la utilización de la CPU y el tiempo, pero ahora gran parte de la encriptación se realiza en silicio y es muy rápida, con un mínimo o nulo retraso en el rendimiento.

## Llamado a la Acción

Los datos son clave para lograr el éxito y la seguridad de la IA, por lo tanto, protégelos y utiliza las mejores prácticas de seguridad desde el principio. Operacionaliza las canalizaciones para eliminar a los humanos de la rutina diaria de implementar y probar algoritmos de IA. Automatiza tanto como sea posible e incorpora seguridad en la canalización de AI DevOps para proteger tus datos fuente, modelo y aplicación.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
