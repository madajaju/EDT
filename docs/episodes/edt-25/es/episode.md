---
layout: posts
title: "Operacionalización de los flujos de datos"
number: 25
permalink: episode-EDT25-es
lang: es
nav_exclude: true
nav_order: 25
tags:
    - dataarchitecture
    - datacentric
    - data
    - datamesh
    - datapipeline
    - technology
    - people

date: Tue Oct 13 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Sarah Kalicin

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquitecto Jefe de Soluciones, Sector Público, Intel, conversa con Sarah Kalicin, Científica de Datos Principal, Intel, acerca de la operacionalización del flujo de datos de su organización. Se requiere un esfuerzo en equipo para modelar, monitorear y producir una fuente continua de información valiosa. Este es el último episodio de la serie de Cómo impulsar la Transformación Organizativa para Convertirse en una Empresa Centrada en los Datos."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquitecto Jefe de Soluciones, Sector Público, Intel, conversa con Sarah Kalicin, Científica de Datos Principal, Intel, acerca de la operacionalización del flujo de datos de su organización. Se requiere un esfuerzo en equipo para modelar, monitorear y producir una fuente continua de información valiosa. Este es el último episodio de la serie de Cómo impulsar la Transformación Organizativa para Convertirse en una Empresa Centrada en los Datos."
---

<div>
{% include transistor.html id="cb72bda4" title="#25 Operationalizing Data Pipelines" %}

{% include youtube.html id="url" %}
</div>

---

Para el episodio final de esta serie, Darren habla con Sarah Kalicin, Científica de Datos Principal en Intel, sobre la operacionalización de tu tubería de datos. Discuten cómo, una vez que tienes tus conocimientos sobre datos, puedes convertirlos de un experimento científico único en una fuente continua de información.

## ¿Cómo operativizar los conocimientos analíticos?

Lo primero que debes entender sobre la canalización de datos es que no es como un sistema eléctrico cerrado que puedes configurar, alejarte y luego, seis meses después, encender un interruptor y saber que la bombilla se iluminará. Una canalización de datos es diferente en el sentido de que los datos son variables; pueden cambiar o degradarse, por ejemplo, por lo que no necesariamente serás recompensado con la iluminación de la bombilla en algún momento, o en este caso, la información que estás buscando. Siempre debes pensar en lo que puede salir mal en el sistema y cómo corregir estos cortocircuitos.

La detección de anomalías es una parte integral del proceso. No se puede planificar todo, por lo que al menos necesitas ser capaz de detectar cuando algo ha ocurrido que está fuera de los límites del análisis original. Un ejemplo es la crisis del COVID, un evento impredecible que causó patrones muy distintos a la norma en muchos sistemas. Otro ejemplo sería una empresa que produce widgets. Para saber cuántos widgets producir, el proceso de datos incluye la demanda de los clientes, la oferta actual y la pérdida de rendimiento. Estos pueden ser bastante estables a lo largo del tiempo, pero podría haber, por ejemplo, un evento de relaciones públicas que haga que la demanda de los clientes se dispare. Eso podría tener un gran impacto en los modelos. El aprendizaje automático y el aprendizaje profundo analizan patrones familiares, y si nunca han visto esos patrones antes, los modelos fallarán o se degradarán. Debes mantenerte siempre al borde del descubrimiento.

La única manera de mantenerse en la vanguardia de los descubrimientos es automatizar tus tuberías de datos para tener acceso oportuno a la información. Esta es la ventaja competitiva: datos actuales y perspicaces que pueden ayudarte a resolver rápidamente tus preguntas.

Los equipos de tecnología de la información (TI) y de datos necesitan colaborar en la automatización y determinar qué debe ser automatizado para los datos entrantes, así como en la gestión de cualquier cambio en el modelo que los científicos de datos deseen hacer, para que pueda ser fácilmente integrado de nuevo en el flujo de trabajo.

## Despliegue de circuitos cortocircuitados

Hay dos tipos de controles que pueden evitar cortocircuitos en la implementación: los controles del sistema analítico y los controles organizativos.

El control del sistema analítico consiste en poner en funcionamiento los modelos que has entrenado, alimentando los datos para responder fácilmente a tus preguntas. Estos modelos desplegados deben ser moderados para verificar la exactitud de los datos. Muchas cosas pueden afectar negativamente los datos, como cambios ambientales, calibración de máquinas, problemas de distribución, y así sucesivamente.

Esto no es tan diferente del mundo del desarrollo de software donde los cambios pueden afectar las predicciones. El departamento de IT está familiarizado con el proceso de realizar pruebas para asegurarse de que sus modelos o aplicaciones se estén ejecutando de acuerdo con las pautas establecidas, por lo que los desarrolladores de operaciones y los científicos de datos deben aprovechar estos recursos y conocimientos. No es necesario inventar ningún proceso nuevo, sino que los grupos deben combinar recursos para configurarse para el éxito.

Los controles organizativos se remontan a tener una base organizativa que se compromete a ser centrada en los datos y proporcionar las personas adecuadas y los recursos necesarios para trabajar juntos por objetivos comunes. La mejor oportunidad para obtener una operacionalización es cuando hay colaboración, confianza, comprensión de las necesidades y retroalimentación entre los grupos de la organización.

Los bucles de retroalimentación son críticos en este proceso. Por ejemplo, los especialistas en el tema pueden proporcionar información sobre la dinámica del mercado para que los científicos de datos puedan monitorear el modelo en busca de estos cambios en los datos. Si un modelo va a ser utilizado a lo largo del tiempo, constantemente necesitará ser iterado y mejorado.

Los consumidores de los datos deberían tener un panel de control que les brinde información y les permita analizar por qué algo parece un poco fuera de lugar. Cuanto más puedan investigar o plantear lo que necesita ser investigado, más empoderada será su organización.

## Tubería

Una clave desde el lado de IT para operacionalizar la canalización de datos es utilizar un control de versiones como GitHub para tener acceso a versiones anteriores de tu modelo. También es importante poder almacenar los datos que crearon el modelo y otros datos históricos con fines de auditoría. Quieres poder analizar los patrones y ver cómo un determinado atributo cambió o afectó al modelo. También puedes alimentar datos históricos en tus nuevos modelos para ver cuánto afecta a tus datos actuales.

Por ejemplo, algunos sistemas tendrán una imagen sesgada con un gran número de personas trabajando desde casa durante la COVID. Un caso en punto es la Marina. Desde la COVID, el 95% de sus trabajadores de IT están trabajando a distancia, y su productividad ha aumentado un 35%. A partir de ese único dato, se podría decir que todos van a trabajar desde casa a partir de ahora. ¿Seguirás obteniendo un aumento del 35%, o si la gente vuelve a la oficina, verás una disminución del 35%? Obviamente, ese único dato no es necesariamente suficiente para predecir la productividad real.

Otra herramienta que el departamento de Tecnología de la Información puede ofrecer es la integración y despliegue continuo. A través del uso de Jenkins, GitHub Actions u otra herramienta similar, al trabajar en un modelo, se pueden ejecutar automáticamente pruebas contra el modelo con tus datos o generar datos falsos sobre la marcha.

Las personas de TI y los científicos de datos necesitan colaborar en qué y cómo monitorear la salida de los modelos. TI puede monitorear la salida automáticamente, y también pueden monitorear cómo están funcionando los modelos en la infraestructura. Un ejemplo es que TI, con la implementación automatizada de integración continua, puede alertar rápidamente a los científicos de datos cuando un modelo está tardando más de lo normal para evitar que se salga de control. Si TI está comprometido en la creación de valor de datos, lo cual generalmente ha faltado en la industria en general, el proceso será más fácil y coherente para todos.

Otro aspecto a tener en cuenta es el diseño de experimentos, ya que las interacciones entre variables y características también son importantes. Los expertos en la materia pueden ayudar a determinar cuáles son las interacciones potenciales, y se pueden modelar para comprender qué variabilidad se puede esperar.

Es emocionante que un científico de datos pueda tomar material sin procesar y convertirlo en conocimiento. Sin embargo, se necesita un equipo. Cuanto más todos en tu organización puedan aprender unos de otros en un entorno de equipo, más cosas maravillosas pueden suceder.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
