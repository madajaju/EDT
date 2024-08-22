---
layout: posts
title: "El Nacimiento de las Plataformas de Inteligencia de Gráficos"
number: 106
permalink: episode-EDT106-es
lang: es
nav_exclude: true
nav_order: 106
tags:
    - datagovernance

date: 2022-09-20T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Greg Steck

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Arquitecto Principal de Soluciones de Intel para el sector público, y Greg Steck, Director Senior de Soluciones Industriales de Katana Graph, hablan sobre los beneficios de la plataforma de inteligencia de grafos de Katana."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquitecto Principal de Soluciones de Intel para el sector público, y Greg Steck, Director Senior de Soluciones Industriales de Katana Graph, hablan sobre los beneficios de la plataforma de inteligencia de grafos de Katana."
---

<div>
{% include transistor.html id="5fdeafa4" title="#106 The Birth of Graph Intelligence Platforms" %}

{% include youtube.html id="url" %}
</div>

---

Greg comenzó su carrera en un banco de inversiones en riesgo crediticio cuando comenzaron a implementar pruebas de estrés CCAR. Después de estar muy involucrado en eso durante algún tiempo, comenzó a trabajar como consultor y se familiarizó con los gráficos mientras realizaba validación de modelos de riesgo crediticio. Vio cómo los gráficos podían aprovecharse para muchos tipos diferentes de análisis y tenían beneficios en la gestión de datos y el aprendizaje automático, especialmente en la modelización de crédito. A partir de ahí, encontró su camino hacia Katana.

Los analistas de datos y los científicos de datos luchan constantemente por integrar diferentes conjuntos de datos. Greg se sintió atraído por los gráficos porque, después de que le introdujeran el RDF, un formato de grafo de conocimiento semántico, tenía sentido intuitivo cómo se podrían combinar y estructurar los datos como un grafo.

Con las soluciones gráficas existentes, los analistas tenían dificultades para escalar sus soluciones porque gran parte de sus datos eran muy grandes. Katana Graph desarrolló la capacidad de escalar y también enfocarse en el aprendizaje automático.

Al comienzo de las bases de datos gráficas, grandes empresas como Amazon y Facebook construyeron bases de datos gráficas internamente, realizando su modelado y aprendizaje automático. Luego surgieron versiones de consumo de plataformas como Neo4j y TigerGraph para casos de uso general. El desafío era que se centraban en la base de datos y no tanto en el análisis y el aprendizaje automático, los procesos y la computación gráfica real. Estaban limitados a ser una especie de almacén de datos, enfocándose en la ingestión y las operaciones CRUD y no tanto en los datos.

Hay tres tipos diferentes de dominios de computación gráfica. El primero es la consulta gráfica, la base de datos gráfica y las operaciones CRUD. El segundo es el análisis y la minería de gráficos con PageRank o algoritmos de agrupamiento, que están ganando popularidad. La tercera área es la inteligencia artificial y el aprendizaje automático de gráficos. Aquí es donde entran en juego las redes neuronales gráficas. Hay soluciones específicas que resolverán partes específicas de esos dominios, pero Katana Graph se encuentra en la intersección de ellos.

Cada una de las tres plataformas es importante. Para hacer aprendizaje automático, necesitas los otros dos dominios. Cuando los datos son ingestados por primera vez, deben pasar por muchas transformaciones para prepararlos para el aprendizaje automático, por lo que si no tienes todo esto en una solución, el flujo de datos será lento, enviando los datos hacia afuera y volviéndolos a ingresar. Es más eficiente iterar rápidamente en todo el flujo de trabajo. También reduce el riesgo de perder datos porque estás disminuyendo la cantidad de veces que transformas los datos.

Además, dado que Katana Graph es una plataforma nativa en la nube, puedes pausar, guardar un punto de control, cerrar el clúster y volver a iniciarlo más tarde, justo donde lo dejaste.

Una buena demostración es para la detección de fraude con un conjunto de datos de transacciones de Bitcoin. La plataforma ingiere los datos, que están estructurados, de modo que las billeteras de Bitcoin son los nodos en el gráfico, y luego las conexiones entre ellas son las transacciones. Es un gráfico simple. La idea es predecir si una billetera de Bitcoin es fraudulenta. Las billeteras ilícitas para el lavado de dinero, el tráfico de drogas, etc., han sido etiquetadas. Cuando se crea una nueva cuenta, la tarea consiste en predecir si es fraudulenta. La parte desafiante, entonces, es hacer algún preprocesamiento con las características numéricas de las cuentas. Se ha diseñado un conjunto de APIs para abordar ese problema. Todas las cosas que los científicos de datos hacen para preparar sus características se hacen aquí. A partir de ahí, el gráfico está listo para ser introducido en el modelo de aprendizaje automático, donde se entrena y, luego, utilizando redes neuronales, se puede aprender cómo clasificar las cuentas.

Un beneficio de la plataforma es que los científicos de datos e ingenieros pueden trabajar desde una sola plataforma en lugar de juntar las piezas.

Otro beneficio es el costo total de propiedad. A diferencia de otras plataformas, no es necesario mantener la base de datos gráfica en funcionamiento todo el tiempo. Dado que los oleoductos de Katana Graph están diseñados con una separación de almacenamiento y computación, puedes crear fácilmente un clúster, realizar algún procesamiento por lotes de antemano, luego ejecutar inferencias en un sistema separado y aún aprovechar lo que se generó en el gráfico.

Katana Graph también es más rápido con conjuntos de datos grandes porque no carga todos los datos de antemano, sino que tiene una forma innovadora y dinámica de cargar los datos a medida que los necesitas mientras trabajas en el flujo de trabajo.

Las análisis básicas son mucho más fáciles en la base de datos de gráficos que en una base de datos relacional. Si tienes diez conjuntos de datos diferentes, puede resultar complicado y propenso a errores para un analista entender cómo unirlos para escribir una consulta en una base de datos relacional. Con un gráfico, tienes un modelo singular, ya predefinido y construido, por lo que las preguntas serán mucho más fáciles porque los datos ya están conectados. Puedes ver intuitivamente cómo la información está relacionada.

Una de las nuevas características de Katana es un importador de marcos de datos Dash. Dash es una plataforma común que los científicos de datos utilizan para procesar en paralelo marcos de datos. Los científicos de datos pueden trabajar con el marco de datos que ya están utilizando e ingestarlo directamente en Katana Graph para una experiencia fluida y simplificada.

DevOps es una gran parte de lo que Katana está tratando de facilitar con su plataforma. Se integran fácilmente en los pipelines de aprendizaje existentes. Cuando se ejecutan las redes neuronales gráficas, se pueden exportar los embeddings. Estas características que genera un gráfico pueden ir hacia abajo en un proceso de aprendizaje automático. Por lo tanto, la integración se vuelve mucho más simple y más fácil de operativizar y poner en producción.

Durante los próximos cinco años, Greg imagina que las organizaciones, como los bancos, tendrán repositorios centralizados para analizar datos de clientes, marketing o crédito con múltiples propósitos. La salida de los modelos de aprendizaje automático se podría utilizar tanto para evaluar el riesgo crediticio como para la detección de fraudes, por ejemplo. En lugar de utilizar conjuntos de datos aislados con mucha replicación y duplicación entre ellos, habría un modelo común sincronizado dentro de un gráfico.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
