---
layout: posts
title: "El futuro de la gran memoria y CXL."
number: 89
permalink: episode-EDT89-es
lang: es
nav_exclude: true
nav_order: 89
tags:
    - cxl
    - moderncomputing
    - technology
    - process

date: 2022-06-02T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Charles Fan

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Arquitecto Jefe de Soluciones de Intel, habla con Charles Fan, CEO de MemVerge, sobre cómo la revolución CXL y el software de MemVerge son el futuro de la memoria grande."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquitecto Jefe de Soluciones de Intel, habla con Charles Fan, CEO de MemVerge, sobre cómo la revolución CXL y el software de MemVerge son el futuro de la memoria grande."
---

<div>
{% include transistor.html id="536490f3" title="#89 Future of Big Memory and CXL" %}

{% include youtube.html id="url" %}
</div>

---

Un emocionante avance en la memoria es CXL (Compute Express Link). Se está desarrollando un robusto ecosistema desde el lado del host, con Intel y otros apoyando CXL 1.1 en sus plataformas de próxima generación, como Sapphire Rapids. Aquellos del lado de la memoria, incluyendo la Intel Optane de cuarta generación, estarán en CXL. Intel es uno de los miembros impulsores de un sólido consorcio CXL que ha estado impulsando el estándar. CLX 2.0 ya ha sido definido, con capacidades adicionales, incluyendo la externalización y conmutación de CXL, y 3.0 está en proceso, lo cual estandarizará cómo se puede aprovisionar y compartir CXL.

Habrá nuevos productos provenientes de Samsung, Micron y SK-Hynix con capacidades de CXL. Además, se están desarrollando nuevas interconexiones que pueden conectar potencialmente la memoria con la tela, lo que permitirá tener una memoria habilitada para la tela que se puede compartir entre múltiples servidores.

La tecnología CXL es un cambio de juego. Un nuevo protocolo de memoria se ejecuta sobre PCIe generación cinco y posteriores. Ya que te permite colocar memoria en PCIe, no solo puede estar dentro de la caja, sino que en el futuro, con el uso de conmutación PCIe, la memoria en el tejido puede volverse componible y compartible. El primer producto CXL saldrá al mercado para finales de año.

MemVerge ya cuenta con un controlador de memoria definida por software, y CXL abrió un mundo completamente nuevo para el software. CXL es para la memoria lo que el canal de fibra es para el almacenamiento. Es como una red de área de memoria en lugar de una red de almacenamiento. Es posible acceder directamente a la memoria con CXL y omitir por completo a la CPU.

CXL será mucho más rápido que las tecnologías de interconexión anteriores. Tendrá 100 o 200 nanosegundos de latencia. Aquí es donde aumenta la utilización, la gestionabilidad y la agilidad. Habrá mayor disponibilidad y productividad en el uso de memoria. Además, podrás asignar memoria de forma dinámica; puedes asignarla según sea necesario y no necesariamente tiene que ajustarse en la caja del servidor. Teóricamente, siempre tendrás suficiente memoria para lo que necesites estar activo.

Con la tecnología de instantáneas de MemVerge, sus datos están protegidos y persistentes también. Esto se vuelve más importante a medida que su memoria se vuelve más grande. Si la pierde, es más difícil reconstruirla.

Para que CXL despegue, se necesitan tres cosas en su lugar. En el aspecto de hardware, los líderes de hardware más antiguos deben estar de acuerdo y adoptar los mismos estándares. Eso ha sucedido este último año, por lo que hay un estándar único que todos están respaldando. En segundo lugar, no es necesario cambiar su aplicación para usar CXL, al igual que las redes de área de almacenamiento. En tercer lugar, desde el punto de vista de la base de datos, no debería ser necesario reescribir. Esto puede ocurrir mediante la compatibilidad entre los estándares y lo que el sistema operativo y el software de MemVerge admiten, que pueden realizar la gestión automática entre la memoria DDR y la memoria CXL.

MemVerge puede ofrecer esa capa de abstracción. Esencialmente, es una virtualización de memoria. La memoria definida por software maneja la ubicación real de la memoria física.

MemVerge hace que la memoria grande sea transparente para la aplicación, de modo que los programadores pueden aprovechar la capacidad superior y nunca quedarse sin memoria. A continuación, está la protección de datos. MemVerge ha desarrollado un servicio de instantánea en memoria que puede capturar todo el estado de una aplicación en memoria, y ese estado es inmutable. Puede ser recuperado en cualquier momento y en cualquier lugar. Hay muchos casos de uso con esto, como la mediación de ransomware y la reducción de los tiempos de ciclo en la investigación genómica.

La función de captura instantánea no solo es útil porque puede capturar rápidamente y fácilmente un pipeline en ejecución, lo que le permite volver atrás y recuperarse en cualquier momento, sino que también puede ahorrar dinero al usar servicios en la nube. Los principales proveedores de servicios tienen instancias momentáneas que tienen un descuento del 70-90% sobre el precio de demanda, pero hay un inconveniente: pueden retirarlas en cualquier momento con solo 30 segundos a dos minutos de aviso. Esto no es suficiente tiempo para hacer frente a eso, especialmente si tienes muchos datos en la memoria, por lo que no ha sido útil para muchas cargas de trabajo. Con la capacidad de captura instantánea de MemVerge, puedes tomar instantáneas periódicas de tu carga de trabajo en ejecución en cualquier instancia. Si te quitan la instancia momentánea, tienes una imagen que puedes recuperar y seguir ejecutando. Es un seguro que te permite utilizar el servicio de bajo costo con protección.

Dado que estás tomando una instantánea no solo de una aplicación, sino de todo un contenedor o instancia, puedes reinstituirlo en cualquier lugar, en las instalaciones, en la misma nube o en otra nube. Esto te brinda la máxima movilidad y resistencia en tus operaciones, incluso en caso de una interrupción importante del servicio en la nube. Esta tecnología se presta a muchas posibilidades emocionantes.

La revolución CXL y el software MemVerge Memory Machine son combinaciones potentes para posibilidades transformadoras en el campo de los videojuegos.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
