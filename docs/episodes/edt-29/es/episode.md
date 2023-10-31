---
layout: posts
title: "Base de datos de hiperescala de próxima generación - Aerospike"
number: 29
permalink: episode-EDT29-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 29
tags:
    - aerospike
    - database
    - ingestion
    - optane
    - data
    - technology
    - pmem

date: Wed Nov 11 2020 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Tim Faulkes

img: thumbnail.png
image: thumbnail.png
summary: "Las bases de datos están mostrando su antigüedad, todavía tardan un poco en obtener resultados. Aerospike, con la ayuda de la tecnología de Intel (Optane), logra romper con la velocidad, el volumen y la baja latencia. Tim Faulkes, Vicepresidente de Arquitectura de Soluciones en Aerospike, se une a Darren Pulsipher, Arquitecto Principal de Soluciones en Intel, para discutir los beneficios de la tecnología de Aerospike."
video: "https://youtu.be/btMNND3AH7Q"
description: "Las bases de datos están mostrando su antigüedad, todavía tardan un poco en obtener resultados. Aerospike, con la ayuda de la tecnología de Intel (Optane), logra romper con la velocidad, el volumen y la baja latencia. Tim Faulkes, Vicepresidente de Arquitectura de Soluciones en Aerospike, se une a Darren Pulsipher, Arquitecto Principal de Soluciones en Intel, para discutir los beneficios de la tecnología de Aerospike."
---

<div>
{% include transistor.html id="1280ea95" title="#29 Next-Generation Hyperscale Database - Aerospike" %}

{% include youtube.html id="btMNND3AH7Q" %}
</div>

---

## Base de datos hiperescala de próxima generación

Las bases de datos muestran su antigüedad, aún tardan un poco en obtener resultados. Aerospike, con la ayuda de la tecnología de Intel, logra romper barreras con rapidez, volumen y baja latencia. Tim Faulkes, Vicepresidente de Arquitectura de Soluciones en Aerospike, se une a Darren en este episodio para discutir los beneficios de su tecnología.

## NoSQL - Un mercado emergente con múltiples tecnologías

Aerospike fue creado en 2009, con las primeras implementaciones de producción en 2011. Los cofundadores estaban conscientes de los desafíos que se avecinaban. Construyeron la arquitectura desde cero con la premisa de que sería confiable, de escala empresarial, nunca se caería y sería capaz de manejar ingestas masivas de datos. La arquitectura de Aerospike dependía en gran medida de las SSD, ya fueran unidades NVMe en las encarnaciones modernas o unidades SATA SAS. Ambas estaban en sus etapas iniciales, por lo que los fundadores se anticiparon a la dirección del mercado. Dependieron de esos dispositivos para obtener velocidad, y es por eso que la tecnología de Intel fue tan importante. Desde entonces, otras tecnologías de Intel, como la memoria persistente, han facilitado mucho las cosas.

## Índices en DRAM, Datos en SSD

Aerospike se acerca a las bases de datos de manera diferente. Los SSD no son un disco duro más rápido. Un disco duro tiene sectores físicos y cabezales y cosas que debe mover para leer datos. Un SSD puede leer rápidamente miles de piezas de datos en paralelo. No funciona bien en discos rotativos, pero con NVMe/SSD, funciona increíblemente rápido. Nadie tiene el mismo tipo de rendimiento, ni siquiera una base de datos en memoria.

La arquitectura única está diseñada para un alto volumen, alto rendimiento y una latencia muy baja. Por ejemplo, algunos clientes realizan regularmente 20 millones de transacciones por segundo. Algunos llegan a utilizar petabytes de datos. Por lo general, los clientes utilizan hardware bastante sofisticado, pero el tiempo de ida y vuelta es crítico. A Aerospike le toma alrededor de 200 microsegundos buscar una pieza de datos y devolverla al cliente, no décimas o centésimas de segundo. Cuando necesitas obtener una gran cantidad de datos rápidamente, como en la detección de fraudes, o si estás ingresando una gran cantidad de datos, como en el IoT, vehículos autónomos, lecturas de sensores o dispositivos médicos, Aerospike puede realizar esos millones de transacciones por segundo en lecturas y escrituras. No necesitas ponerlo en un bus de mensajes y luego permitir que la base de datos notifique a los sistemas aguas abajo a través del bus de mensajes que tiene los datos. Ya está persistente.

## Impulsando la innovación líder en la industria alrededor del mundo

¿Cuáles son los casos de uso ideales para Aerospike? Hay mercados obvios como el Internet de las cosas (IoT), detección de fraudes y datos de sensores, pero es un mercado emergente. Aerospike comenzó en la tecnología publicitaria, donde la recuperación de datos debe hacerse en milisegundos o menos. Aquí es donde su buen rendimiento fue sometido a pruebas a gran escala.

Las industrias adicionales donde Aerospike puede resultar útil son diversas. Un ejemplo es una gran compañía de telecomunicaciones en India. La infraestructura allí no siempre es confiable y a veces se interrumpen las llamadas. Esta empresa, con la tecnología de Aerospike, puede detectar en tiempo real cuando una llamada se interrumpe y pueden contactar inmediatamente al cliente para ofrecerle créditos u otra compensación para mantener su satisfacción.

## Liquidación en tiempo real de pagos instantáneos.

Una nueva área en la que Aerospike se ha involucrado intensamente es los pagos digitales en tiempo real. Esta no requiere específicamente una gran cantidad de datos o altos requisitos de rendimiento, pero lo que estas empresas necesitan es consistencia absoluta y disponibilidad absoluta, incluso en caso de perder un centro de datos.

La planta de fabricación también es un mercado emergente para la tecnología de Aerospike en cosas como la fabricación de semiconductores, donde se utiliza para almacenar datos de sensores y proporcionar análisis en tiempo real. Aerospike se destaca en cualquier industria donde haya una gran cantidad de datos y se necesiten rápidamente.

## Rendimiento a escala - Resultados de pruebas independientes de terceros.

Hay muchas bases de datos con buena tecnología disponibles, pero hay desafíos a gran escala. Tomemos Redis, por ejemplo. Debido a que almacena toda su información en memoria, no se puede llegar a diez terabytes sin un costo significativo, mucho menos a cientos de terabytes o petabytes. Como Aerospike almacena la información en SSD, la diferencia de tiempo entre buscar datos en SSD y memoria es de aproximadamente 100 microsegundos. A lo largo de la escala de petabytes, Aerospike reemplaza tecnologías antiguas como Cassandra, que se escala muy bien pero carece de velocidad.

## Costo Total de Propiedad

Además, en comparación con esas tecnologías, las personas ahorran mucho dinero al cambiarse a Aerospike debido a que la cantidad de nodos disminuye drásticamente debido a su arquitectura única. El ahorro no solo está en el gasto de capital, sino también en el gasto operativo, ya que hay menos máquinas que supervisar.

Aerospike ha colapsado algunos de los niveles tradicionales en la arquitectura. A menudo, los sistemas heredados tienen una caché adicional delante de él para acelerarlo. Esto introduce complejidad. Aerospike no necesita una caché. No hay una gran cantidad de DRAM. Se basa en la velocidad de los SSD y la tecnología subyacente para obtener el rendimiento del almacenamiento en bruto sin una caché. Dado que la caché y los niveles de almacenamiento están colapsados, la solución se simplifica, lo que significa confiabilidad y velocidad incorporadas.

## Ejemplo de Despliegue Continental

La consistencia en múltiples áreas geográficas es también un beneficio importante de la tecnología. La arquitectura moderna requiere baja latencia, lo que generalmente significa que hay un montón de grupos de H en los que los datos están cerca del usuario. De lo contrario, la velocidad de la luz se convierte en un factor. Aerospike puede hacer que todos los grupos de H se comuniquen entre sí, por lo que si se cambia un registro en un grupo, se propagará automáticamente a los demás grupos de manera asíncrona. Sin embargo, con algunos usos, como los pagos digitales, debe haber una fuerte consistencia entre los grupos, por lo que podrían optar por replicar los datos de manera síncrona en su lugar. Preferirían leer desde la copia local de los datos. Las lecturas se vuelven muy rápidas; las escrituras se ven afectadas por la velocidad de la luz, pero garantizan consistencia en distancias geográficas. Entonces, esto no es una resolución de conflictos, es una forma de evitar conflictos. Tener la capacidad de distribuir esas escrituras de alta consistencia en todo el mundo y tener múltiples sistemas de registro tiene un enorme potencial y valor.

## Aerospike Connect for Spark se traduce al español como Conexión de Aerospike para Spark.

Por ejemplo, Aerospike actualmente se integra con Spark, una tecnología analítica que requiere que sus datos estén en memoria. Al cargar los datos desde Aerospike, el marco de datos de Spark puede procesar decenas o cientos de terabytes con enormes ahorros de costos y velocidad. La integración con otras herramientas de IA es una fuerza impulsora que abrirá algunas puertas emocionantes.

Obtener datos en Aerospike es simple y directo. Dado que las aplicaciones tienen una capa de API como la mayoría de las bases de datos, Aerospike puede recibir datos de fuentes estándar de la industria como Kafka y Janus. La capacidad bidireccional de comunicarse con buses de mensajes tiene sentido, porque no solo Aerospike puede recibir datos de estas fuentes, sino también enviarlos. Si Aerospike es la fuente de verdad cuando escribes un registro, puedes enviarlo a sistemas aguas abajo.

## Aerospike Connect para Kafka

Si desea utilizar Aerospike para la ingestión en lugar de un motor de ingestión en el front-end, Aerospike puede determinar si desea descomponer los datos o mantenerlos en el mismo formato y simplemente colocarlos en Aerospike; Con su marco de complementos, es una llamada de API. Cuando los datos se almacenan, se puede notificar a un bus de mensajes para el procesamiento posterior. Esto elimina uno de los pasos de ingestión y aumenta el rendimiento total.

Escalar a miles de clientes es posible debido a la forma en que el cliente de Aerospike está diseñado como multi-threaded para escalar en un solo proceso y asimilar una gran cantidad de datos con eso. El cliente es inteligente en aras de la velocidad. Cualquier registro se envía directamente desde el cliente al nodo que posee esa pieza de datos. No hay intermediarios de ningún tipo. Esto significa que el cliente debe conocer todos los nodos, por lo que existen límites de conexión finitos, lo que hace que cientos de miles de clientes sean impracticables.

## Ejemplo de despliegue continental

Si, sin embargo, tienes cientos de miles de clientes, es porque tienes una población distribuida a nivel mundial. Si estuvieran hablando con un solo grupo, la velocidad de la luz se convierte en un gran problema. Existen formas de configurar grupos más pequeños en los bordes que comparten información, o que se comunican con un sistema central de registro en un modelo de concentrador y distribuidores, por lo que se puede hacer.

## Aerospike es una base de datos para aplicaciones de registro del sistema.

A medida que los datos se mueven por el mundo, diversas capas de privacidad entran en juego y se aplican estándares como el GDPR y el CCPA, por lo que los clientes deben conocer el origen de los datos. Aerospike tiene la flexibilidad de examinar los datos de forma minuciosa y, en función del contenido de los datos, saber cuándo y dónde se pueden enviar. Esto forma parte de la configuración de envío de datos de Aerospike que es transparente para la aplicación. No es necesario cambiar nada en las aplicaciones, solo en la configuración.

Aerospike también se asegura de que los datos estén seguros. Al igual que todas las bases de datos de alta capacidad empresarial, Aerospike admite encriptación en reposo y en tránsito, así como la integración de seguridad de elementos como Hashicorp Vault. Se puede utilizar y se utiliza como un sistema de registro.

Un objetivo fundamental en Aerospike es utilizar las últimas innovaciones y tecnología para el éxito de los clientes. Por ejemplo, cuando Intel lanzó PMem, lo utilizaron en modo de acceso directo a la aplicación para aprovechar al máximo sus capacidades. Esto significa que para una actualización continua, digamos, de un petabyte de información, el tiempo que lleva es reducido. Aerospike almacena ese petabyte en tal vez 50 o 60 nodos en lugar de miles de nodos, y cuando un nodo se apaga, no es necesario reconstruirlo, por lo que el tiempo de reinicio es muy rápido.

En general, Aerospike ofrece seguridad, alta disponibilidad, velocidad, baja latencia, escalabilidad, consistencia y bajo costo de propiedad.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
