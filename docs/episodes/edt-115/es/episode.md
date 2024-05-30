---
layout: posts
title: "Bloqueo y Tacleo de Seguridad"
number: 115
permalink: episode-EDT115-es
lang: es
nav_exclude: true
nav_order: 115
tags:
    - cybersecurity
    - ransomware
    - userbehavioralanalytics
    - compliance
    - zerotrust
    - people
    - process
    - policy

date: Wed Nov 30 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - John Evans

img: thumbnail.png
image: thumbnail.png
summary: "En este episodio, Darren habla sobre ciberseguridad con el invitado recurrente John Evans, Asesor Tecnológico Principal en World Wide Technology (WWT)."
video: "https://youtu.be/url"
description: "En este episodio, Darren habla sobre ciberseguridad con el invitado recurrente John Evans, Asesor Tecnológico Principal en World Wide Technology (WWT)."
---

<div>
{% include transistor.html id="4c1b2203" title="#115 Blocking and Tackling of Security" %}

{% include youtube.html id="url" %}
</div>

---

Fundamental para toda seguridad cibernética es la higiene cibernética básica. Muchas compañías necesitan realizar estos aspectos básicos. Esto se evidencia por los titulares de noticias recientes que muestran un aumento en los ataques como los ataques de denegación de servicio, los cuales deberían ser fáciles de prevenir.

Desde su experiencia trabajando con la comunidad estatal, John cree que la mayoría de los ataques siguen una cadena típica de ejecución. La mayoría de los ataques que afectan a los gobiernos estatales y locales son resultado de protocolos de red expuestos o de phishing por correo electrónico. Estos son puntos de entrada atractivos para los hackers, y una vez que consiguen ingresar, las malas prácticas de parcheo son una causa típica que les permite establecerse y moverse lateralmente. Esto, combinado con políticas de contraseñas débiles o con una aplicación débil de las políticas de contraseñas y una incapacidad para recuperarse, puede llevar a un desastre.

En un incidente de ransomware ampliamente difundido en 2019, la organización afectada asumió que, dado que tenían la misma cantidad de datos en sus entornos de producción y respaldo, estaban seguros. Pero nunca habían probado sus respaldos o capacidades de recuperación, que resultaron ser deficientes. Una higiene básica cibernética podría haber prevenido este incidente.

Hay cuatro conceptos básicos esenciales en los que toda organización debería centrarse. En primer lugar, deben capacitar continuamente a las personas para evitar los ataques de phishing. Aunque la capacitación puede parecer repetitiva o tediosa, el hecho de que las personas caigan en estos engaños es una debilidad significativa para la organización. Ojalá, en un futuro no muy lejano, las contraseñas ya no sean necesarias.

En segundo lugar, deben configurar los firewalls de manera adecuada; el hecho de que los puertos de protocolo RTP o de red estén cerrados no significa que no haya un puerto abierto en un lugar menos destacado. La seguridad por la oscuridad no funciona.

Tercero, deben evitar políticas deficientes de parcheo, tanto con el cliente como con el servidor, tanto en los centros de datos como en la periferia. Muchas organizaciones tienen deudas técnicas y no pueden actualizar sus sistemas antiguos, por lo que aceptan las vulnerabilidades y riesgos porque no quieren invertir en una actualización.

Cuarto, deben tener la capacidad de recuperarse. ¿Solo porque sabes que puedes respaldar tus datos, puedes utilizarlos y recuperarte con el respaldo? La prueba es esencial.

Estas cuatro bases, junto con algunas otras, son suficientes para detener casi todos los ataques que llegan a organizaciones que no son objetivos regulares. Ese modelo no se aplica a las organizaciones que sufren ataques de naciones-estado; ellas ya están realizando todas estas medidas y necesitan medidas de seguridad adicionales.

Una consideración para muchas organizaciones es el cumplimiento versus el riesgo. Para algunas organizaciones ser compatibles, necesitan actualizar máquinas antiguas, aplicaciones y procesos, lo cual implica un costo significativo. Para las organizaciones con un sistema que no se puede parchear, podrían tomar un enfoque basado en el riesgo, en el sentido de que si algo sucede con el sistema, costaría menos que actualizarlo. Por supuesto, lo más seguro sería actualizar para cumplir con los requisitos, pero la mayoría de las personas piensan que el enfoque basado en el riesgo es más seguro. Una pequeña empresa podría salirse con la suya con este enfoque, pero las organizaciones gubernamentales, por ejemplo, deben cumplir con regulaciones.

Hay dos razones por las cuales una organización puede elegir cumplir con las normas además de por un mandato. Primero, es una solución fácil para muchas organizaciones que no entienden cómo medir o priorizar el riesgo. El cumplimiento es un marco general al que pueden recurrir. Sin embargo, no es una solución única, ya que alguien más está priorizando los riesgos de manera generalizada.  En segundo lugar, si ocurre algo terrible y, por ejemplo, tienes que explicarlo a tu junta directiva, puedes decir que seguiste estándares aceptados.

El cumplimiento es un poco una mentalidad dependiente porque no tienes que hacer todas las evaluaciones de riesgo y descubrir qué se debe hacer. Pero, por ejemplo, un municipio pequeño sin un CISO podría dirigir a un administrador de sistemas a utilizar un marco de cumplimiento como punto de partida. Si no hay un CISO disponible, también existe la opción de un CISO virtual a tiempo parcial para recibir orientación. John hace esto para clientes, lo cual es un camino viable hacia una mejor seguridad.

El concepto de confianza cero también considera un nivel de garantía frente al riesgo. Debes entender el riesgo de conceder a alguien acceso a un sistema o conjunto de datos particular y luego tener una garantía correspondiente de que la persona es quien dice ser. El corazón de la confianza cero es un nivel alto de seguridad que reduce el riesgo.

El principio de confianza cero no significa que todo estará cerrado y ralentizará todos los procesos. Si, por ejemplo, alguien desea acceder y ver los niveles de lluvia, no se necesita un alto nivel de seguridad para verificar la identidad de la persona. Sin embargo, si alguien desea acceder a las joyas de la corona de su organización, deben existir controles adicionales para verificar la identidad.

I'll provide you with a translation in Spanish. Here it is:

"Coincidir el nivel de garantía con el nivel de riesgo es un desafío; requiere una arquitectura basada en puntos de decisión. En el ejemplo del riesgo que se tiene al acceder a un dato, una organización necesita saber qué es y categorizarlo según su nivel de riesgo. Para una organización madura, esto puede ser difícil. John conoce a una organización gubernamental federal que tardó más de dos años en asegurarse de que sus datos estuvieran identificados, clasificados y etiquetados correctamente antes de avanzar hacia cualquier tipo de arquitectura basada en puntos de decisión."

Identidad y datos son los dos puntos de partida para la confianza cero. Además, tiene sentido evitar intentar y hacer todo al mismo tiempo. Comenzar con una parte de la organización puede tener más sentido, expandiéndolo gradualmente al resto de la organización con el tiempo.

La identidad digital está volviéndose más sofisticada. John cree que nuestras transacciones en el futuro se basarán principalmente en un enfoque de tipo "cero confianza". Por ejemplo, si él quiere transferir $10,000 de su banco a una cuenta offshore, el banco debería asegurarse de que sea él y tratar esa transacción como si alguien intentara acceder a una información muy sensible y de alto riesgo. Si él va a la tienda a comprar una taza de café de un dólar, ese nivel de seguridad de que es él quien realiza la compra no es necesario. Muchos de estos principios de "cero confianza" se incorporarán en nuestra vida diaria.

Las analíticas del comportamiento del usuario también entrarán en juego. Tal como una compañía de tarjetas de crédito levantaría una alerta por compras inusuales, por ejemplo, si un sistema sabe que Juan escribe 20 palabras por minuto, y de repente empieza a escribir 100 palabras por minuto y trata de acceder a información sensible, se enciende una señal de alarma.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
