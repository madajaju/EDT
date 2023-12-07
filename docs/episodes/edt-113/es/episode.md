---
layout: posts
title: "Operacionalizar la Gestión de Procesos de Negocios"
number: 113
permalink: episode-EDT113-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 113
tags:
    - bpm
    - automation
    - compute
    - management
    - camunda
    - capitalbpm
    - rpa

date: Thu Nov 17 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Max Young

img: thumbnail.png
image: thumbnail.png
summary: "En este episodio, Darren discute la gestión de procesos de negocio y la automatización con Max Young, CEO de Capital BPM."
video: "https://youtu.be/url"
description: "En este episodio, Darren discute la gestión de procesos de negocio y la automatización con Max Young, CEO de Capital BPM."
---

<div>
{% include transistor.html id="a05071ff" title="#113 Operationalizing Business Process Management" %}

{% include youtube.html id="url" %}
</div>

---

Max se autodenomina un "académico fracasado" porque abandonó su doctorado en matemáticas, especializado en topología, para estudiar ciencias de la computación. Obtuvo una licenciatura y una maestría, especializándose en IA. Luego trabajó en gestión de procesos empresariales (BPM), comenzando en Lombardi, que fue vendida a IBM, y en algunos otros proveedores en el espacio BPM. Hace diez años, se arriesgó junto con amigos y fundó Capital BPM.

Max decidió enfocarse en BPM por dos razones. Primero, siempre le han gustado los algoritmos porque proporcionan un enfoque sistemático para resolver problemas complejos. Los algoritmos le brindan una sensación de seguridad durante situaciones complicadas.

En segundo lugar, le gusta lo que se llama transformaciones en matemáticas. Por ejemplo, si tienes una forma fea con muchas esquinas que es difícil de medir, la transformarías en, digamos, un rectángulo y luego aplicarías todas las teorías alrededor de la medida de rectángulos, la medirías y luego traducirías la respuesta de regreso a la forma original. De la misma manera, en BPM, puedes llevar un problema a un dominio donde pueda ser fácilmente resuelto. En lugar de convertir un problema en un problema micro con complicadas declaraciones F anidadas que son difíciles de mantener, lo puedes transformar en un problema aplastado que puedas ver y atacar en etapas.

Este proceso es como hacer zoom en Google Maps para ver dónde necesitas concentrarte y luego hacer zoom de vuelta para ver cómo eso encaja en la imagen general. El corazón de la arquitectura empresarial es la capacidad de acercar y alejar para asegurarse de que la línea que estás trazando aún sea válida.

Max compara su afición por el BPM en el mundo de la informática con las artes marciales, las cuales ha estudiado desde los seis años. Dice que hay artes marciales prácticas, como el judo y el muay thai, y otras más esotéricas, como el tai chi. Le gustan las artes marciales pragmáticas porque resuelven problemas del mundo real. Ya no se mete en peleas a puñetazos, pero, por ejemplo, sus habilidades en judo le ayudan cuando resbala y se cae. El BPM es pragmático en el sentido de que es la clave para resolver un problema empresarial. Él cree que hay un valor real en utilizar todas las teorías que aprendió en la escuela y hacerlas subordinadas en la creación de una plataforma empresarial que permita a las personas resolver de manera más eficiente y constante problemas cotidianos, brindando así más oportunidades a las personas y a la comunidad.

Esta es una área de la ciencia de la computación que se puede aplicar a cómo las personas trabajan. Las cosas pueden ser automatizadas para reducir la cantidad de tareas repetitivas y mundanas, de modo que puedan centrarse en cosas más importantes. Las personas se preocupan de que la automatización se lleve los trabajos cotidianos, pero en cambio, elimina la tediosidad y libera tiempo para trabajos más críticos. También puede crear empleos. Estos mismos temores existieron cuando se introdujeron los ordenadores automatizados de Ford, pero finalmente crearon nuevas industrias. Se debe abrazar completamente BPM en lugar de temerlo.

La mejor manera de comenzar a operativizar los procesos es utilizar el método científico de articular el problema. En la gestión de procesos empresariales, se dibujan imágenes a través de un modelador de procesos empresariales. A Max le gusta el modelador de procesos empresariales de Camunda, que se puede descargar de forma gratuita con solo aprender un poco de notación. En el programa de modelado, se dibujan pasos que articulan los diferentes sistemas y cómo funcionan.

En un proceso de contratación, por ejemplo, se comienza con un grupo que involucra a las partes interesadas, como el candidato, el gerente de IT y el departamento de recursos humanos. Dentro del grupo hay "carriles de natación", cada uno conteniendo a un jugador que puede realizar acciones. Puedes pensar en ellos como grupos LDAP. Luego, se comienza a establecer el proceso empresarial: primero, un candidato solicita el trabajo, luego recursos humanos puede realizar una revisión y posteriormente un gerente de IT revisaría. Las decisiones aprobadas se registran a lo largo del camino. Después de que los pasos principales y significativos se encuentren en el modelo, se pueden detallar procesos más articulados y sutiles, como una entrevista dividida en una sección técnica y otra de gestión.

Traduce lo siguiente al español: ![imagen bmp](./bpm.png)

El programa de modelado genera XML en segundo plano mientras dibujas todos estos diagramas. Este XML es interpretable en tiempo de ejecución por las máquinas BPM; mientras dibujas el diagrama, puede convertirse en un proceso ejecutable.

El elemento humano todavía está presente en este ciclo, pero utilizar un sistema BPM como este permite identificar claramente dónde se pueden automatizar los procesos, como verificar el historial laboral o realizar una verificación de antecedentes penales. El modelo también permite flexibilidad y experimentación. Por ejemplo, supongamos que el experto en la materia menciona que no desea ejecutar una verificación de antecedentes penales y laborales simultáneamente porque la verificación de antecedentes penales es costosa y la verificación laboral es económica. En ese caso, es fácil cambiar para realizar primero la verificación laboral y requerir una decisión antes de la verificación de antecedentes penales. A medida que se realizan cambios, se genera consenso y una historia real que se vuelve progresivamente más verdadera a medida que se experimenta.

Si bien la herramienta parece ser una herramienta de dibujo, en realidad es una herramienta de modelado que te permite dibujar imágenes y simularlas en el backend. Por lo tanto, puedes ejecutar este proceso y ver todos los diferentes puntos de decisión y a dónde te llevan. El modelo también te indicará que no puedes implementar si no has hecho algo correctamente.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
