---
layout: posts
title: "Gobernanza de Datos Moderna"
number: 70
permalink: episode-EDT70-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 70
tags:
    - datagovernance
    - immuta
    - dataaccess
    - identitymanagement
    - cybersecurity
    - data
    - technology

date: Wed Nov 24 2021 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Matthew Carroll

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, arquitecto principal de soluciones de Intel, discute la realidad y futuro de la gobernanza de datos moderna con Matthew Carroll, CEO de Immuta."
video: "https://youtu.be/Y-mBQoKQvHM"
description: "Darren Pulsipher, arquitecto principal de soluciones de Intel, discute la realidad y futuro de la gobernanza de datos moderna con Matthew Carroll, CEO de Immuta."
---

<div>
{% include transistor.html id="752e2562" title="#70 Modern Data Governance" %}

{% include youtube.html id="Y-mBQoKQvHM" %}
</div>

---

A medida que las organizaciones migran a la nube, la forma en que pensamos sobre los datos y la forma en que pensamos en utilizar los datos está cambiando por completo; en los últimos cinco o seis años, toda la capa de infraestructura ha cambiado. El rendimiento, la escala, las reglas necesarias y el número de usuarios que desean combinar datos han aumentado exponencialmente. Gestionar eso a gran escala no es trivial y ahí es donde entra Immuta.

Con el tiempo, la industria ha replanteado el paradigma del almacenamiento de datos. Anteriormente, cada equipo de datos construía productos de datos en un silo y luego los entregaba a una unidad de negocio. La unidad de negocio tendría sus datos apropiados que les brindaban un servicio de calidad. Ahora, de repente, queremos que cualquier persona pueda combinar datos en toda la empresa: analistas de negocios, científicos de datos, ingenieros de datos, etc. El número de usuarios ha cambiado y no se trata de aplicaciones de búsqueda; se trata de transformar y generar flujos de datos.

Esa es una diferencia que requiere un nivel diferente de calidad de servicio, tiempo y nivel de sofisticación que nunca antes había existido. Se vuelve aún más complejo cuando se añaden las leyes de privacidad, la clasificación de datos y las normativas siempre cambiantes.

Lo que Immuta intenta hacer es hacer posible que cualquier usuario combine potencialmente cualquier conjunto de datos, internos o externos a la organización, para obtener alguna perspectiva. Todo se trata de escala. La política debe separarse de la plataforma para escalar la política para todos estos nuevos usuarios y todas las diferentes combinaciones de datos. La seguridad, la privacidad y el gobierno son importantes, pero si no puedes funcionar, nadie está feliz.

Una lección que Immuta aprendió desde temprano es que el proxy no funcionaría. Es como tratar de mover petabytes de datos a través de una pajita: se convierten en el cuello de botella. Es fácil culpar al middleware siempre que hay un problema debido a que siempre son un cuello de botella, ya que están entre las herramientas y los datos. Este es un problema clásico del middleware.

El segundo problema con ese paradigma de diseño es que con la virtualización clásica de datos, funcionaba porque había un conjunto claro de datos. Sin embargo, cuando hay petabytes de datos, el enfoque de dármelo todo y lo resolveremos se desmorona muy rápidamente debido al tamaño enorme de los datos, así como a todas las reglas y políticas que lo rodean.

En la virtualización normal, tienes que incrustarte nativamente en la infraestructura informática en la nube en Snowflake, en Synapse, etc. En lugar de poner esta capa de abstracción encima de estas diferentes herramientas, la capa de abstracción está en el lado de la política.

La política es tan buena como la capacidad de auditarla. Es como una cadena de evidencia. La clave está en poder demostrar si este usuario cumplió o no cumplió con la infraestructura informática. Con la gobernanza moderna de datos, se escala la política internamente y se unifican las auditorías debido al nivel de complejidad de las muchas actividades que las personas realizan con los datos. La auditoría de la política debe simplificarse drásticamente, de lo contrario, es imposible determinar el cumplimiento.

Hay tres tipos de políticas para considerar: operativas, regulatorias y contractuales. Un ejemplo de lo complicado que puede volverse todo esto es observar una empresa como Cummins. Si se modernizan en la nube, deben considerar las regulaciones de cada mercado. Para uno de sus motores, ¿qué sucede si tienen que escribir una regla personalizada para cada país en el que están, pero también para cada país en el que no están, porque esos países no deberían poder verlo? Eso no es escalable cuando se habla de decenas de miles de fuentes de datos para los esquemas, que están en constante cambio. Hay petabytes de telemetría de estos motores.

Lo que querrías escribir es que solo puedes ver los datos del país donde resides una vez, y luego se aplican en todas partes. Pero no se hace así. Entonces estarían escribiendo algo como 700 políticas para un objeto de datos, cuando debería ser solo una. Mantenerse al día con todas las políticas y regulaciones cambiantes para cada fuente de datos sería casi imposible. Estarías incumpliendo constantemente.

Nunca ha sido más fácil globalizar una empresa que hoy en día, y los clientes de Immuta esperan que puedan ejecutar infraestructura a nivel mundial en cualquier nube. Deberían poder trasladar sus datos a cualquier nube y cumplir completamente con las regulaciones.

Immuta aplica reglas a los datos a través de etiquetas en lugar de utilizar los datos sin procesar, porque cada dominio tiene su propio argot sobre cómo clasifican y hablan de sus datos. Por lo tanto, han empezado a clasificar y etiquetar de manera genérica para aplicar plantillas de conceptos generales, como en el caso de HIPAA. Sin embargo, estas plantillas todavía no son infalibles y queda un largo camino por recorrer.

La visión de Matt como CEO de Immuta es llegar a un estado en el que los dominios puedan compartir sus políticas. Por ejemplo, en el ámbito de la salud, hay una buena razón por la cual Moderna y Pfizer querrían trabajar juntas. Podría haber un acuerdo sobre cómo manejar los controles de datos del mundo real con la academia. Entonces, si hubiera una política consistente que pudiera ser compartida y creada de manera colaborativa en una nube de políticas conceptuales, sería lo correcto.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
