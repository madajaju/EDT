---
layout: posts
title: "Los beneficios de las bases de datos gráficas"
number: 97
permalink: episode-EDT97-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 97
tags:
    - data
    - graphdb
    - katanagraph

date: Wed Jul 27 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Madi Ahmadi

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Arquitecto Principal de Soluciones de Intel, el Dr. Hadi Ahmadi, Director de Arquitectura de Soluciones de Katana Graph, discuten los beneficios de las bases de datos de gráficos."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquitecto Principal de Soluciones de Intel, el Dr. Hadi Ahmadi, Director de Arquitectura de Soluciones de Katana Graph, discuten los beneficios de las bases de datos de gráficos."
---

<div>
{% include transistor.html id="c81eaabc" title="#97 The Benefits of Graph Databses" %}

{% include youtube.html id="url" %}
</div>

---

Hadi obtuvo su doctorado en ciencias de la computación en 2012 e investigó la criptografía y la seguridad de la información en redes. Trabajó en el ámbito académico durante algunos años y luego se trasladó a la industria, enfocándose en diferentes aspectos de las soluciones de seguridad, incluyendo la gestión de identidad y acceso. Comenzó a aprender más sobre la modelización de grafos en 2015 y se dio cuenta de cómo la modelización de datos en grafos podría resolver algunos de los problemas emocionantes y complejos en su campo de estudio.

En las bases de datos de grafos, un grafo no se refiere a gráficos o interfaces gráficas, sino a una forma de estructurar los datos a nivel de almacenamiento para que puedan ser recuperados y procesados para algunos problemas complejos, especialmente si los datos están interconectados. El grafo ofrece muchos beneficios y puede complementar las estructuras o soluciones de datos existentes, como los modelos de bases de datos relacionales o el almacenamiento de objetos.

La principal diferencia entre las bases de datos gráficas y las bases de datos relacionales es que, si bien ambas se tratan de relaciones, las bases de datos relacionales llevan las relaciones al nivel de metadatos y esquema, mientras que las bases de datos gráficas se centran en las relaciones basadas en los datos. En otras palabras, en las bases de datos relacionales se relacionan columnas de tablas. Para introducir una nueva relación, es necesario cambiar el esquema. El gráfico proporciona una infraestructura sin esquema en la que se puede agregar más estructura a los datos pero mantener la flexibilidad para poder procesar cualquier dato no estructurado.

La mitad de los datos del mundo se ha creado en los últimos años, recopilados de muchas fuentes diferentes, pero menos del dos por ciento ha sido analizado, la mayoría de los cuales son datos estructurados. Los datos se están recopilando, pero la información es insuficiente para su procesamiento. Debe haber una forma de agregar de manera flexible un poco de estructura que sea lo suficientemente dinámica como para cambiar si hay incertidumbre pero aún así beneficiarse de la computación avanzada optimizada. El gráfico es una excelente manera de hacer esto.

Si estás intentando trabajar con datos correlacionados o interconectados, en contraposición, por ejemplo, a datos aislados con valores críticos, un gráfico ofrecerá beneficios debido a las relaciones. Casi todas las industrias pueden beneficiarse porque los datos no estructurados suelen provenir de diversas fuentes y de naturalezas múltiples.

Un ejemplo serían las soluciones de ciberseguridad. Hay datos de registros y registros de auditoría de los entornos de red, la infraestructura de la nube, los hosts en los endpoint, etc. Los datos provienen de diferentes fuentes, como directorios o archivos de registro en bruto. Sería beneficioso correlacionar los datos, por ejemplo, porque típicamente, una identidad o un usuario que podría ser parte de un registro del sistema de gestión de identidades podría ser el mismo usuario que activa un proceso en una computadora portátil, como descargar un adjunto de un correo electrónico. Al analizar esos patrones, se puede utilizar esta relación correlativa para obtener una visión más amplia. En otras palabras, no importa cómo o de dónde provengan los datos, pero proporcionar este vínculo conduce a aprender sobre cada registro al observarlos en contexto.

Un beneficio es que no hay problemas de transformación de datos, por lo que esto aumenta la velocidad. Esto también reduce los requisitos de almacenamiento.

Los gráficos y las estructuras de bases de datos relacionales, en general, son compatibles. Aquí hay un ejemplo simplificado de una red social: Los tipos de nodos en el grafo se parecen a las tablas. Así que puedes tener un nodo llamado "persona" y luego una tabla llamada "persona". Podrías tener otro nodo llamado "ubicación" y conectar a la persona con una ubicación específica. Puedes tener una tabla llamada "ubicación" y conectarla mediante claves foráneas. Luego tienes esta relación de amigos. Un amigo de una persona en un modelo de grafo es solo un bucle en sí mismo. Eso te permitiría modelar ese esquema. En una base de datos relacional, necesitarías crear una nueva tabla llamada "amigos" y luego conectarla. Entonces, incluso a nivel de esquema, estás agregando redundancia y cierta estructura encima de ello. Y si necesitas agregar un nuevo concepto de amistad o relación, debes crear nuevas tablas, lo que genera redundancia y complejidad.

Otros beneficios de los gráficos frente a las bases de datos relacionales son los gráficos en elementos, la IA de gráficos y la idea de modelar los datos para encontrar patrones basados en cómo están conectados los datos. Puedes disminuir el conjunto de datos que estás buscando o analizando debido a las relaciones. Se utiliza el poder de los datos para potenciar aún más los datos. Los algoritmos en una base de datos de gráficos son muy diferentes a los de las bases de datos relacionales y están mejor optimizados para acceder más rápido a grandes conjuntos de datos.

Una de las desventajas de una base de datos de grafos es que es difícil de escalar. En una base de datos relacional, es fácil dividir una tabla y ponerla en dos servidores, por ejemplo. Las bases de datos de grafos anteriores fueron diseñadas para ser una solución única y completa, por lo que si deseabas escalar, necesitarías agregar más memoria y CPU.

Ahora, si deseas trabajar con petabytes de datos en gráficos, quieres escalar verticalmente tanto como sea posible con tecnología como las máquinas virtuales de Intel, pero también deseas escalar horizontalmente. Nuevas tecnologías, como la plataforma de gráficos de Katana, ayudan a resolver este problema de escalamiento con la computación distribuida. Puedes dividir o fragmentar el problema en piezas y hacer que cada una trabaje en una pequeña parte del gráfico para obtener una solución final. Katana ha demostrado que se pueden utilizar 256 máquinas o más para procesar datos, por lo que puedes tener rápidamente decenas de terabytes de datos en memoria.

Una base de datos gráfica requiere un ecosistema similar al de una base de datos relacional. El gráfico es un poco más dinámico y flexible. Si deseas pasar a una plataforma de análisis de gráficos, que va más allá de las bases de datos operativas, podrías aprovechar otras cosas como la capacidad de almacenamiento de datos y los lagos de datos. El almacenamiento y el procesamiento se harían por separado, lo que significa que las tecnologías de procesamiento de gráficos que realizan todo en la memoria no necesitan depender del almacenamiento adjunto a los servicios para que puedas tener un servicio de almacenamiento diferente.

Katana utiliza almacenamiento de objetos, y luego, cuando desean computar, cargan oportunamente lo que quieran del gráfico a la memoria distribuida de todas las máquinas. Los datos regresan inmutables al almacenamiento, por lo que si, por ejemplo, destruyes todo el clúster, no pierdes nada. Todos los datos ya están allí y almacenados. Las bases de datos relacionales son un campo más maduro, pero las bases de datos de gráficos están siendo cada vez más compatibles en el ecosistema.

Basado en los ocho años de experiencia de Hadi en el campo hablando con interesados y clientes, todos ven inmediatamente el beneficio de las bases de datos de gráficos. Las limitaciones podrían ser que no pueden mantenerse al día con la escalabilidad o el costo. El trabajo de Katana y otras compañías de tecnología de gráficos es convertir los gráficos en una herramienta más común que los clientes puedan usar para diversas tareas y menos un lujo en la base de datos. Por ejemplo, Katana proporciona a los clientes soluciones de identidad basadas en gráficos y administración masiva de datos.

Buenos casos de uso de los gráficos serían la temprana invención de soluciones gráficas específicas para algunas empresas como LinkedIn y Facebook, que tienen sus grafos sociales. Ahora, encajan perfectamente en el comercio electrónico para los motores de recomendación. Encontrar conexiones entre clientes, cuentas, compras y otros comportamientos permitirá realizar recomendaciones mejores de inmediato a los compradores de una manera que no puede hacerse con consultas a bases de datos relacionales.

Para obtener más información sobre Katana o cómo contactar a Hadi, ve a embracingdigital.org.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
