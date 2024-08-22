---
layout: posts
title: "La aparición de la Red Global de Datos"
number: 98
permalink: episode-EDT98-es
lang: es
nav_exclude: true
nav_order: 98
tags:
    - macrometa
    - businessprocessmanagement
    - multicloud

date: 2022-08-04T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Chetan Venkatesh

img: thumbnail.jpeg
image: thumbnail.jpeg
summary: "En este episodio, Darren rememora con Chetan Venkatesh, CEO de MacroMeta. Venkatesh tiene una larga trayectoria en gestión de datos desde los primeros días de la Computación en Red y ha fundado MacroMeta para abordar la gestión de datos en los bordes dispersos globalmente, centros de datos y nubes."
video: "https://youtu.be/url"
description: "En este episodio, Darren rememora con Chetan Venkatesh, CEO de MacroMeta. Venkatesh tiene una larga trayectoria en gestión de datos desde los primeros días de la Computación en Red y ha fundado MacroMeta para abordar la gestión de datos en los bordes dispersos globalmente, centros de datos y nubes."
---

<div>
{% include transistor.html id="140001aa" title="#98 The Emergence of the Global Data Network" %}

{% include youtube.html id="url" %}
</div>

---

Chetan es un ingeniero convertido en especialista en operaciones y startups (Macrometa es su cuarta startup). Él dice que ha estado trabajando en el mismo problema de tratar con datos distribuidos y reducir la latencia durante veinte años.

Los datos ya no están solo en un centro de datos, sino en todas partes: en la nube, en la periferia y en los portátiles de las personas. Gestionar todo eso de manera efectiva es un desafío.

Hace aproximadamente diez años, Marc Andreessen dijo que el software está devorando el mundo. En este punto, el software se ha comido todo y ha convertido toda clase de limitaciones y barreras en oportunidades. La computación en múltiples hilos es una de las barreras que ha caído con la nube. Se pueden construir aplicaciones que se ejecuten simultáneamente en diferentes partes del mundo. Paralelamente, se está produciendo un movimiento de desarrolladores para hacer todo tan simple como debe ser para la persona promedio en ciencias de la computación. Así que por un lado tenemos una sofisticada evolución tecnológica y por otro lado, un movimiento hacia la simplicidad.

Arquitecturas como Jamstack permiten que la computación distribuida ocurra a gran escala con una gran simplicidad, pero todavía hay una vasta frontera por descubrir y conquistar. La oportunidad de una expansión extendida ahora está en el borde. La gestión de datos distribuidos y el borde son dos caras de la misma moneda.

Un gran problema es que algunos desarrollos de software se están moviendo hacia la funcionalidad como un servicio que ignora los datos. Además, existe la percepción de que los datos son ubicuos, pero gran parte de los dispositivos periféricos no siempre están conectados. No hay garantía de que una aplicación tenga acceso a todos los datos. Las redes ya no están centralizadas; la noción de microservicios sin estado surgió de la movida hacia la nube. Esta falta de estado puede convertirse en una barrera enorme. Por eso, arquitecturas como Jamstack y funciones sin servidor tratan los datos como un tema periférico en lugar de un problema central.

Las estructuras de datos sin estado son simples. Tienes un lugar específico donde guardas tus datos, y luego vuelves a un estado sin estado. Las estructuras de datos con estado requieren infraestructuras robustas con estructuras de datos más complejas porque soportan la aplicación a medida que emite constantemente su estado. A medida que nos adentramos en un mundo de datos de transmisión en tiempo real en el que el estado se emite constantemente desde algún lugar del ecosistema, la infraestructura se vuelve compleja y difícil de gestionar porque no están diseñadas arquitectónicamente. Ahí es donde entra Macrometa. Han construido una nueva plataforma para este estado activo continuo en tiempo real a escala de exabytes.

Lidiar con estos datos en tiempo real y en un estado activo y dinámico es un cambio significativo para muchos desarrolladores de software. Desde que surgieron las primeras infraestructuras en la nube, luego las plataformas de big data y después los datos como servicio, la industria se ha vuelto eficiente en la ingestión, procesamiento y análisis de datos históricos. Pero ahora estamos en un mundo donde los datos existen en un espectro en lugar de como un monolito. Una cualidad apreciada ahora es que los datos tienen una visión y valor perecederos. Algunos datos tienen una vida útil breve. Las escalas de tiempo actuales son demasiado grandes para utilizar los datos eficientemente; necesitamos sistemas que se comuniquen de manera eficiente en 50 milisegundos y reduzcan la carga cognitiva de las personas que interactúan con esos sistemas.

La mayoría de las personas malinterpretan la latencia: no es algo que te brinde alegría, sino que la falta de ella te molesta. Por ejemplo, ¿cuánto tiempo tolerará alguien un video entrecortado de YouTube o un programa de Netflix que se carga lentamente? Cincuenta milisegundos para una máquina es una eternidad. Una máquina puede hacer una cantidad enorme de cosas en 50 milisegundos, por lo que la latencia se vuelve esencial, especialmente al considerar el valor perecedero de los datos.

Otro problema ahora es que, debido a la nube, la interconectividad y el sistema global, las startups son empresas multinacionales y los datos se vuelven sensibles a la ubicación. Algunos de los datos están regulados, algunos son PII y no pueden ser extraídos en ciertas jurisdicciones, etc. Un excelente ejemplo de este problema es cómo los europeos no quieren que sus datos salgan de sus fronteras, pero la mayor parte de la infraestructura de la nube y las aplicaciones están construidas aquí en Estados Unidos.

Un tercer problema es que los datos se encuentran en muchos lugares; existen límites entre sistemas, tanto físicos como lógicos. Los datos pueden ser esencialmente estáticos y rígidos, por lo que necesitamos infraestructura que permita que los datos se conecten y fluyan en tiempo real con consistencia y garantías de ordenamiento. Lo más importante es que crea fungibilidad para poder ser consumidos rápidamente de diversas formas.

Un problema adicional es que los datos tienen mucho ruido, y no tiene sentido enviar distancias intercontinentales, pagando tarifas de transferencia, solo para acabar eliminando la mayor parte. Los datos pierden valor en el momento en que llegan a su destino. También existe una alta tasa de actualización, por lo que los sistemas a menudo trabajan con datos obsoletos.

Necesitamos nuevas formas de resolver este tipo de problemas de datos distribuidos. Chetan cree que los próximos diez años pertenecerán a esta área de las ciencias de datos.

La primera generación de soluciones de datos distribuidos utilizaba la transformación operativa. Google Docs es un excelente ejemplo de eso. Sin embargo, la transformación operativa requiere centralización del control, por lo que no escala bien. Google ha encontrado una manera de escalar, pero eso no se generaliza al desarrollador promedio. Solo hay tal vez cinco compañías en el mundo que lo entienden a esa escala, y gran parte de ese conocimiento está cerrado en esas compañías y tecnología propietaria.

Macrometa está trabajando con la comunidad y la academia para intentar crear un nuevo cuerpo de conocimiento, mucho más eficiente que estos modelos centralizados de forma totalmente distribuida.

Actualmente, existen infraestructuras disponibles que son excelentes para resolver problemas históricos de tipo registro. Están tratando de avanzar hacia datos en tiempo real, pero sus arquitecturas no están diseñadas fundamentalmente para ello. Estos nuevos problemas con datos sensibles al tiempo y la ubicación, valor de actuación, tasas de actualización, gravedad de datos y ruido de datos requieren una nueva forma, una nueva infraestructura. Chetan lo llama un sistema de interacción en lugar de un sistema de registros, porque los sistemas de interacción son redes de datos, cerca de donde se origina y se consume datos, que luego filtran y enriquecen todo y lo dirigen a sus destinatarios previstos. Es una función de redes.

Macrometa ha construido procesadores de red que están moviendo los datos alrededor - una red global de datos. Es un sistema de API sin servidor donde los desarrolladores simplemente consumen API para resolver problemas de datos activos y operativos en tiempo real. Macrometa es una red global de datos en la topología de un CDM, pero con una plataforma de datos como Snowflake que produce primitivas de datos ricas para manejar valores de datos activos y operativos en tiempo real.

Puedes integrar herramientas analíticas en la red de datos global y desplegar el análisis cerca de donde se genera o se requiere los datos. Así como Amazon cambió fundamentalmente la distribución minorista con arquitectura y algoritmos periféricos para mantener los almacenes locales óptimamente abastecidos para los envíos nocturnos, Macrometa ha hecho lo mismo para los datos. Están acercando los datos y la computación a esos datos mucho más cerca y permitiendo que suceda en milisegundos. Esta capacidad de crear bucles de información en tiempo real es un habilitador poderoso. Por ejemplo, los pequeños minoristas pueden utilizar el inventario local de su tienda en su comercio electrónico sin sobreabastecerse para competir con Amazon.

Un gran caso de uso para la plataforma Macrometa es en ciberseguridad. Algunos clientes están eliminando sus modelos de datos centralizados para aprovechar la menor latencia y poder bloquear amenazas en tiempo real.

La red global de datos es una capa de transformación entre tus fuentes y receptores de datos con los consumidores y publicadores. Está compuesta por tres elementos tecnológicos. El primero es el entramado global de datos, que es la capa de integración para los datos. El segundo es una infraestructura global de cómputo que te permite orquestar datos y lógica empresarial en forma de funciones y contenedores a nivel mundial. El tercer elemento es un entramado global de privacidad: cómo proteger los datos y cumplir con diferentes regímenes y regulaciones que afectan si tus datos se están transmitiendo o almacenando.

La malla global de datos es una forma de integrar rápidamente y fácilmente datos de diferentes sistemas a través de límites, ya sean físicos o lógicos. Todo esto se incorpora y fluye con consistencia y garantías de orden. El valor más significativo de esta malla es que hace que los datos sean fungibles y consumibles al permitirte poner APIs en los datos rápidamente. Esto se puede hacer en unas pocas horas en comparación con lo que usualmente toma meses. La red global de datos está diseñada para billones de eventos por segundo, de modo que puede mover datos a escala masiva a un costo un 90 por ciento menor que la nube.

La tela global de cómputo lleva la lógica empresarial y la orquestación para acercar su procesamiento a donde sus datos se originan o se consumen. Este es el patrón anti-nube. Macrometa moverá quirúrgica y dinámicamente aquellos microservicios que necesiten cumplir con regulaciones de datos, por ejemplo, a los lugares correctos para su ejecución.

La última pieza es la protección de datos. Este es un problema complejo y las respuestas que tenemos hoy en día, por ejemplo, abrir un silo separado para esa geolocalización en particular para cumplir con los requisitos cada vez que inicia una instancia en su aplicación, no son buenas. La plataforma de Macrometa tiene una red de datos que ya está integrando y haciendo que sus datos fluyan a través de todos los límites, junto con funciones de cálculo y la ingestión de datos sin limitaciones. Ahora, puede crear límites lógicos y anclar datos a regiones específicas para protegerlos. Pueden establecer afinidades y políticas sobre cómo los datos viven y se replican en una región, como si deberían ser anonimizados cuando se copian fuera de la región.

La tecnología de Macrometa permite casos de uso que son imposibles de realizar en la nube porque las nubes están demasiado lejos o son demasiado lentas. Macrometa ha construido la infraestructura para resolver problemas de datos en tiempo real y convertirlos en oportunidades en lugar de desafíos. Para obtener más información sobre Macrometa, visita macrometa.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
