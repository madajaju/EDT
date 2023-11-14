---
layout: posts
title: "Obsesión ilógica con la lógica"
number: 13
permalink: episode-EDT13-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 13
tags:
    - data
    - organizationalchange
    - people

date: Wed Aug 12 2020 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Andrew Padilla

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Líder de pensamiento Andrew Padilla de Datacequia visualiza nuevos avances en la gestión de datos y colaboración que permitirían que los datos avancen de la misma forma que lo ha hecho el software en cuanto a visibilidad, accesibilidad, usabilidad y portabilidad. Explica cómo una infraestructura componible abordaría las preocupaciones tanto de los ingenieros de software como de los científicos de datos."
video: "https://youtu.be/F1hfANcSQj4"
description: "Líder de pensamiento Andrew Padilla de Datacequia visualiza nuevos avances en la gestión de datos y colaboración que permitirían que los datos avancen de la misma forma que lo ha hecho el software en cuanto a visibilidad, accesibilidad, usabilidad y portabilidad. Explica cómo una infraestructura componible abordaría las preocupaciones tanto de los ingenieros de software como de los científicos de datos."
---

<div>
{% include transistor.html id="4272c3a1" title="#13 Illogical Obsession with Logic" %}

{% include youtube.html id="F1hfANcSQj4" %}
</div>

---

## Una Contraposición de Preocupaciones.

En los últimos diez años, los profesionales de datos han experimentado un crecimiento exponencial en su capacidad para hacer que el software sea visible, accesible, utilizable y portable, pero en el ámbito de los datos no ha habido un avance tan significativo. Esto es algo en lo que tanto los profesionales del software como los de datos deberían pensar. ¿Cuáles son las preocupaciones de cada lado? ¿Qué podemos aprender el uno del otro? Actualmente, ambos lados están diametralmente opuestos en muchos aspectos.

En el lado de la ingeniería de software, la lógica de negocio es la principal preocupación. Para tener interfaces consistentes, los ingenieros ocultan los detalles. Los datos se ven como una salida. Por otro lado, los científicos de datos se preocupan más por el contexto de estas salidas y construcciones de datos: los metadatos. Por ejemplo, la genealogía de los datos es importante para un científico de datos para ver cómo las cosas cambian con el tiempo, mientras que un ingeniero de software trataría de ocultar estos detalles para evitar problemas como la variabilidad y los errores.

Tratar el desarrollo de datos y metadatos como una disciplina por sí misma, y no en el contexto de cómo actualmente hacemos software, podría ayudar a que la industria crezca. En otras palabras, necesitamos analizar la construcción de una infraestructura componible que tenga en cuenta las preocupaciones de ambos lados.

Un ejemplo de cómo estamos lidiando actualmente con los problemas de metadatos en la empresa ilustra esta idea. Hoy en día, tenemos sistemas centralizados de gestión de metadatos. Queremos saber dónde están todos nuestros datos: quién, dónde, por qué y cómo. Capturar lo que las personas están haciendo y enviarlo a un sistema centralizado es muy propio de la manera de hacer las cosas en el ámbito del software. Si dejamos que los datos crezcan por derecho propio, podríamos adoptar lo que los desarrolladores de software hacen, pero en un contexto de datos. Podríamos construir un ecosistema más grande si, en lugar de tanto esfuerzo privado en ambas partes, lo ponemos todo en un repositorio sincronizado y centralizado y permitimos a los desarrolladores de datos desarrollar como lo hacen los ingenieros de software. Podríamos construir y curar como esfuerzos privados, pero luego compartir esas curaciones con otros. Al igual que el cambio en la gestión de configuración en las décadas de 1990 y 2000, de un lugar centralizado a un sistema más distribuido, el compartir podría suceder de manera más fácil y fluida.

## Conocimiento Digital DNA <h2>

El conocimiento digital que tenemos depende tanto de la lógica como de los datos. El software y los datos comparten los mismos elementos básicos, y a medida que avanzamos en la jerarquía hacia el conocimiento, existen relaciones sólidas entre ambos. Lo que diverge es que tenemos la infraestructura y las herramientas para desarrollar el lado del software, desplegarlo y hacerlo visible, accesible y utilizable. Dado que no pensamos de la misma manera en el lado de los datos, estamos limitados en estas áreas. Por ejemplo, una forma antigua de verlo es cuando los científicos de datos realizan análisis y aprendizaje de IA a partir de sus datos y obtienen información valiosa, pero no hay un mecanismo repetible que limite su uso.

Una vez que esta perspectiva sea reconocida tanto por la comunidad de datos como por la comunidad de software, podemos adoptar un enfoque diferente utilizando los éxitos del desarrollo de software para los datos. En lugar de aplicar las experiencias personales y los prejuicios del software en general, podemos observar cómo funcionan los datos, cómo son similares pero tienen sus propias preocupaciones. Una analogía sería llevar a tu familia a Disneyland. Las experiencias e interacciones allí representan la dinámica del software. Podrías dirigir las experiencias hacia el lado de los datos. Pero imagina en el mundo real si tuvieras que dejar esa experiencia en la puerta y, cuando llegaras a casa, no supieras nada al respecto. Ese es el problema. Cada vez que vamos a un sistema o ecosistema diferente, reinventamos un nuevo mundo y desconocemos los otros mundos que tuvimos que dejar en la puerta. Si pudiéramos compartir la experiencia o llevarla con nosotros, descubriríamos que tendríamos una infraestructura de conocimiento mucho más vibrante. Entonces, la próxima vez que visites Disneyland, basado en tu experiencia, sabrás qué hora del día es la mejor, cómo verificar los tiempos de espera, etc. Sin la experiencia de trabajar con los datos en conjunto con la aplicación, es casi como empezar desde cero cada vez.

Un ejemplo real es la amnesia que ocurre en sistemas como los de atención médica, donde un profesional de datos crea una integración desde cero, y luego unos años después alguien más tiene que hacer lo mismo. Si podemos establecer mejores relaciones con los datos a través de la mapeo, la reutilización y la eficiencia aumentan. Por ejemplo, ¿por qué tenemos tantas nociones de una persona en términos de modelado? Por supuesto, el contexto importa, pero ¿por qué no podemos ver las diferentes variantes de una persona y luego ser capaces de mapearlas? En el sistema de atención médica de la VA, tienen varios sistemas donde un paciente significa algo diferente en cada uno. El mapeo proporcionaría un terreno común, pero permitiría cambios dependiendo del contexto, siempre que la operación de mapeo fuera visible. Entonces podríamos avanzar con diferentes tipos de casos de uso y reutilización.

Una gran brecha es que hemos logrado una operacionalización efectiva de la lógica con K8s, pero no existe un servicio equivalente para los datos. Aunque existe una medida provisional con S3, no es la respuesta. Existe una gran necesidad en todas las industrias de un servicio similar a K8s que aborde los datos. La necesidad de colaboración es importante aquí. Por supuesto, los profesionales de datos desean agregar valor a su organización, pero una parte importante depende de una colectividad común.

## Cerrando las brechas <h2>

El nombre de la empresa Datacequias se basa en las acequias en Nuevo México, que sirve como ejemplo del tipo de colaboración que se necesita para los datos. Nuevo México es una región árida, por lo que hace años, para hacer fértil la tierra, la gente construyó una serie de canales de riego llamados acequias. Nadie era dueño de ellas, pero las construyeron, administraron y mantuvieron por necesidad y por el bien común. El entorno inhóspito en el mundo de los datos suele ser presupuestos y la propiedad de los datos, pero una curaduría de datos más orientada a la comunidad sería beneficiosa para todos, al igual que las acequias beneficiaron a todos.

Imagina si los profesionales de datos pudieran bifurcar un conjunto de datos en cualquier repositorio central. Podrían gestionarlo y desarrollarlo según sus propias necesidades. Si hay un cambio en el repositorio central que es administrado por un organismo estándar, podrían incorporar esos cambios de inmediato, o elegir no hacerlo. En cualquier caso, tendrían la relación con la fuente original. Hoy en día, cuando utilizamos un activo que está fuera de la empresa, hacemos una copia que permanece estática en el tiempo. Eso requiere un seguimiento manual y la gestión de las actualizaciones. Con un repositorio central, todos podrían co-crear, colaborar y crear comunidades con bases comunes y una línea de tiempo visible.

Esta es solo la punta del iceberg de lo que es un cambio fundamental en la industria para hacer que los datos sean más valiosos para tu organización. Para obtener más información sobre Andrew Padilla y Datacequia, visita datacequia.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
