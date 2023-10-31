---
layout: posts
title: "El apagón de AWS de noviembre de 2020"
number: 33
permalink: episode-EDT33-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 33
tags:
    - aws
    - cloudoutage
    - compute
    - csp
    - cloud
    - process
    - cloudreliability
    - multicloud
    - reliability

date: Mon Dec 14 2020 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquitecto Principal de Soluciones del Sector Público en Intel, habla sobre las lecciones aprendidas de la interrupción de AWS en noviembre de 2020 y soluciones preventivas para navegar por dichas interrupciones."
video: "https://youtu.be/KQH85zaVUe0"
description: "Darren Pulsipher, Arquitecto Principal de Soluciones del Sector Público en Intel, habla sobre las lecciones aprendidas de la interrupción de AWS en noviembre de 2020 y soluciones preventivas para navegar por dichas interrupciones."
---

<div>
{% include transistor.html id="e81503fc" title="#33 The AWS Outage of Nov 2020" %}

{% include youtube.html id="KQH85zaVUe0" %}
</div>

---

## Lo que aprendimos del apagón de AWS.

Amazon Web Services (AWS) sufrió un importante tiempo de inactividad en un momento inoportuno: el día antes del Día de Acción de Gracias en 2020. Dado que publicaron los registros de su servicio, resulta interesante revisarlos para ver qué sucedió y qué podemos aprender.

## Cronología del Corte de Servicio de AWS

El miércoles 25 de noviembre de 2020, alrededor de las 3:00 am PST, AWS estaba actualizando la región Este, agregando servidores para aumentar la capacidad de Kinesis. Kinesis es un servicio de IA popular que realiza coincidencias de patrones en archivos de registro y archivos de video. Aproximadamente una hora y media después de la actualización, las alarmas del servidor comenzaron a mostrar errores en los registros de Kinesis. Bastante rápido, para las 8 am, identificaron inicialmente un par de posibles causantes en los servicios de front-end. Kinesis tiene varios servicios más pequeños, un grupo de servicios de front-end y un grupo de servicios de back-end. De acuerdo con la arquitectura del sistema, cada vez que un servicio de back-end se está ejecutando, se dispara un hilo en el front-end. Uno de los problemas fue que el front-end alcanzó el umbral de hilos a medida que se añadían servidores al back-end durante la actualización. Una vez que determinaron este problema, realizaron una solución temporal con actualizaciones (parches) para el sistema operativo y Kinesis volvió a estar en línea alrededor de las 10:30 pm y totalmente restaurado para la 1:15 am del 26 de noviembre. En total, Kinesis no estuvo completamente operativo durante 21 horas y, aunque no todos utilizan esta herramienta de IA, el impacto fue amplio.

## Kinesis Impact would be translated to Spanish as "Impacto de la cinética".

Varios otros servicios de Amazon utilizan Kinesis, como Amazon Cognito y CloudWatch, y sufrieron diferentes grados de interrupción. Cognito estuvo sobrecargado hasta aproximadamente las 2 pm; CloudWatch estuvo fuera de servicio hasta aproximadamente las 10 pm. En un efecto dominó, servicios dependientes de CloudWatch como Lambda y EventBridge también estuvieron inactivos. Dado que EventBridge no estaba disponible, los servicios de contenedor LCS y LKS también se vieron afectados.

Las interrupciones solo ocurrieron en la región Este, y AWS rápidamente agregó capacidad en otras regiones para evitar que Kinesis fallara de manera similar. Pero durante la interrupción, los usuarios en la región Este se encontraron con un problema desconcertante, ya que sus paneles de servicios y paneles de servicios personales no estaban recibiendo información y mostraban falsos positivos. Por lo tanto, hubo muchas otras organizaciones de tecnología de la información investigando los problemas ya que no estaban recibiendo la información correcta. Sorprendentemente, AWS ha sido transparente sobre todo el incidente, por lo que es una gran experiencia de aprendizaje.

## Lecciones aprendidas

Una de las primeras lecciones es que las operaciones simples en la infraestructura, como aumentar la capacidad, deben ser comprendidas y planificadas. Obviamente, AWS no solo realizó mejoras sin pensarlo, pero no comprendieron completamente el impacto. Incluso si una operación parece rutinaria, siempre es una buena idea llevar las cosas al límite en un entorno de prueba durante las actualizaciones, aunque lleve más tiempo. Esto es especialmente importante con los servicios críticos para otros servicios principales dependientes.

Además, las arquitecturas de servicio o microservicio deben comprender todo su árbol de dependencia de servicios para poder solucionar problemas cuando haya interrupciones. Además, es importante estar tan poco acoplado a una dependencia como sea posible e incluir programación defensiva con microservicios para evitar el efecto dominó que ocurrió en este caso.

Otro problema a tener en cuenta son las dependencias circulares. Si, en una cadena de microservicios que dependen entre sí, uno tiene un contratiempo, todo puede detenerse por completo, consumiendo recursos y sin lograr nada.

Al desarrollar microservicios, ten en cuenta que no siempre tendrás conectividad con los servicios de los que dependes. Escribir programas que puedan funcionar en un estado degradado, o al menos indicar que un servicio no está funcionando, puede ahorrar tiempo y problemas. En esta interrupción, recuerda que los paneles de control seguían funcionando en verde aunque no se recibía nueva información.

## ¿Quién manejó mejor la interrupción del servicio?

Muchas empresas se vieron afectadas por la interrupción de AWS, incluyendo algunas propiedad de Amazon mismo. Algunas atravesaron la interrupción sin problemas, casi indemnes, mientras que otras tuvieron más dificultades para recuperarse. Aquellas que pudieron adaptarse rápidamente tenían una estrategia de nube híbrida múltiple, por lo que contaban con nubes alternativas como respaldo. Algunas utilizaron una región diferente de AWS, mientras que otras utilizaron Google o Azure, e incluso algunas volvieron a sus propios centros de datos o sitios web externos. Al menos, los sitios web mostraban un mensaje de que estaban experimentando problemas en lugar de un error 404.

Las empresas que no estaban utilizando algunos de los servicios especializados de Amazon también tuvieron un mejor desempeño. Por ejemplo, las ofertas de contenedores administrados EKS y ECS, así como Lambda, se vieron gravemente afectadas y estuvieron inactivas durante un período de tiempo considerable, por lo que aquellos que dependían de estos servicios se quedaron sin opciones.

Durante la interrupción, los servicios de escalado automático no funcionaban correctamente, por lo que cualquier empresa que tuviera mucho tráfico en ese momento tuvo que averiguar qué estaba sucediendo y escalar los servicios manualmente. Esto fue un problema mayor de lo que normalmente sería, ya que era el día antes del Día de Acción de Gracias, un momento en el que muchos consumidores viajan y compran en línea. Por ejemplo, Etsy se mantuvo activo, pero no pudieron escalar tanto como lo harían normalmente, lo que llevó a una disminución en las ventas.

Las empresas que tienen su propio monitoreo externo también tuvieron un mejor desempeño. Incluso algunas alertaron a AWS sobre las interrupciones. No dependían únicamente del tablero de salud de AWS, sino que tenían su propio monitoreo en sus servidores.

¿Cuál es la lección principal que debemos aprender de esto? Las organizaciones deben apropiarse de sus recursos en la nube, al igual que cualquier servicio público. Así como tener un generador de respaldo para la electricidad que garantice la continuidad del negocio en caso de un corte de energía, las empresas deben seguir las mejores prácticas para los servicios en la nube. Esto significa tener una nube de respaldo que pueda mantener el funcionamiento, incluso con capacidad reducida, es esencial para resistir una tormenta como el fallo de AWS.

## Recursos

Traduce lo siguiente al español: * https://aws.amazon.com/message/11201/

https://aws.amazon.com/message/11201/ no se puede traducir directamente, ya que es una URL específica que contiene información sobre el sitio web de Amazon Web Services (AWS) y un mensaje. Para traducir el contenido de la página a la que se accede a través del enlace proporcionado, deberías utilizar un traductor en línea y copiar y pegar el texto dentro del sitio de traducción.

Enlace: https://www.theverge.com/2020/11/25/21719396/amazon-web-services-aws-outage-down-internet

Traducción: El servicio de Amazon Web Services (AWS) sufre una interrupción que deja sin conexión a Internet.

https://www.zdnet.com/article/amazon-heres-what-caused-major-aws-outage-last-week-apologies

Aquí está lo que causó la importante interrupción del servicio de AWS la semana pasada: disculpas.

https://www.wsj.com/articles/amazon-web-services-hit-by-outage-11606326714

Amazon Web Services afectado por una interrupción

https://www.washingtonpost.com/technology/2020/11/28/amazon-outage-explained

Explicación de la interrupción de Amazon



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
