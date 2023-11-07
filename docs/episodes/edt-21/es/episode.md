---
layout: posts
title: "Controlador de memoria definida por software de gran capacidad"
number: 21
permalink: episode-EDT21-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 21
tags:
    - bigmemory
    - edge
    - compute
    - technology
    - memverge
    - optane
    - pmem
    - data

date: Sun Sep 13 2020 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Charles Fan

img: thumbnail.png
image: thumbnail.png
summary: "Charles Fan, CEO de MemVerge, habla con Darren Pulsipher, Arquitecto Jefe de Soluciones, Sector Público, Intel, sobre su nueva tecnología, los controladores de memoria definidos por software Big Memory. La tecnología utiliza la memoria persistente Intel 3D XPoint Optane para cerrar eficientemente la brecha entre las arquitecturas actuales y futuras, al mismo tiempo que proporciona una mayor capacidad, menor costo y persistencia."
video: "https://youtu.be/LTMWXuu59Po"
description: "Charles Fan, CEO de MemVerge, habla con Darren Pulsipher, Arquitecto Jefe de Soluciones, Sector Público, Intel, sobre su nueva tecnología, los controladores de memoria definidos por software Big Memory. La tecnología utiliza la memoria persistente Intel 3D XPoint Optane para cerrar eficientemente la brecha entre las arquitecturas actuales y futuras, al mismo tiempo que proporciona una mayor capacidad, menor costo y persistencia."
---

<div>
{% include transistor.html id="0458954e" title="#21 Big Memory Software Defined Memory Controller" %}

{% include youtube.html id="LTMWXuu59Po" %}
</div>

---

La tecnología de memoria persistente 3D XPoint Optane de Intel revolucionó el juego para MemVerge, permitiéndoles desarrollar una memoria definida por software, la cual describen como la expresión del poder de Optane PMEM.

## La mejor manera de usar PMEM

MemVerge desarrolló el software Big Memory para satisfacer una creciente demanda de aplicaciones y empresas para procesar datos a volúmenes y velocidades cada vez más altos. Se necesitan más aplicaciones en tiempo real que ofrezcan información y acciones instantáneas a partir de los datos. Esto requiere una nueva infraestructura centrada en la memoria para cumplir con los requisitos de latencia.

Aplicaciones que utilizan inteligencia artificial, aprendizaje automático o análisis de datos en tiempo real de grandes dimensiones, por ejemplo, suelen utilizar DRAM. Aunque DRAM tiene una latencia a nivel de nanosegundos y ofrece una capacidad y capacidad agradable, tiene limitaciones físicas como la densidad de memoria y cuánto se puede ajustar en un servidor. También es relativamente costoso. Lo más importante es que es volátil y, a medida que los datos crecen, la volatilidad de la memoria se convierte en una restricción. PMEM elimina estos cuellos de botella porque se puede tener una capacidad mayor, un costo menor y persistencia.

Un beneficio importante es que las empresas no necesitan reescribir sus aplicaciones para utilizar la tecnología de MemVerge. La compañía estaba buscando la mejor manera de usar la persistencia, y la respuesta fue proporcionar la menor interrupción a los paradigmas de programación. Cuando Optane PMEM se convirtió en una forma de memoria disponible, esto fue una oportunidad para desarrollar software valioso como parte de la solución.

## Memoria Definida por Software

Hay una transformación de datos ocurriendo. Desde una perspectiva de hardware, en los próximos diez años, podría haber un mundo más heterogéneo tanto en computación como en elementos de memoria. Surgirá una nueva estructura, como CXL, que conecta entre estos elementos. El mayor desafío será lograr que el ecosistema de aplicaciones se mueva. Se necesita una capa de software para procesarlo en piezas consumibles y componibles que faciliten la digestión de la aplicación. La memoria definida por software de MemVerge será un componente importante en este espacio.

Mientras tanto, MemVerge está construyendo un puente entre los paradigmas actuales y futuros. La memoria definida por software de MemVerge ofrece SLA y QLS dinámicos, resistencia, persistencia de aplicaciones, eficiencia y rendimiento. Estas son todas cosas que normalmente se obtienen con una red de almacenamiento definida por software, pero ahora se pueden obtener con memoria de menor latencia y velocidad extremadamente rápida.

## Rendimiento en Memory Machine

Dos importantes propiedades intelectuales de MEMVerge están en juego. El primero es una capa de virtualización de software que optimiza el rendimiento de la memoria, la combinación de PMEM y DRAM, que es muy cercana al rendimiento de DRAM. Cada carga de trabajo tiene perfiles de rendimiento diferentes que se pueden ajustar finamente mezclando PMEM y DRAM en diferentes proporciones. Este ajuste fino de PMEM y DRAM brinda a los desarrolladores de aplicaciones y profesionales de TI la capacidad de ajustar la memoria a sus aplicaciones en lugar de toda la máquina. En lugar de configurar las proporciones existentes de DRAM y PMEM para toda la máquina, ahora puede cambiar dinámicamente las proporciones de PMEM y DRAM según la carga de trabajo e incluso superar el rendimiento de nivel DRAM.

## Instantánea de ZeroIO (Persistencia de datos de aplicación)

El segundo de estos inventos es las instantáneas de memoria o ZeroIO. Puede persistir aplicaciones transitorias existentes sin necesidad de reescribir nada. Funciona sobre la memoria definida por software, que es un servicio de memoria volátil. Aunque la PMEM subyacente es persistente, se necesita memoria volátil para evitar alterar las aplicaciones existentes. La persistencia se aprovecha proporcionando al operador de la aplicación una interfaz gráfica de usuario y CI para gestionar las instantáneas. Existe una capacidad de instantánea, por lo que puedes capturar instantáneamente el estado de una aplicación completa. Luego, esa aplicación puede recuperarse en cualquier momento en el futuro.

Esto hace que tu memoria no solo sea persistente, sino también altamente disponible. Después de un fallo, puedes hacer una recuperación instantánea. Si cometes un error en la base de datos, puedes volver atrás hasta un punto anterior. También puedes clonar sobre la foto instantánea, por lo que puedes crear nuevas instancias de una aplicación sin replicar físicamente la memoria. Así puedes crear múltiples procesos independientes que mapean los espacios de memoria lógica al mismo espacio físico de memoria. Esto no solo ahorra memoria, sino que hace que el proceso de creación de clones sea instantáneo. Esta nueva tecnología hace posible muchas cosas que antes eran imposibles.

No hay cambios arquitectónicos en tu programa, pero cuando necesites persistir algo, simplemente puedes tomar una instantánea. Esto no cambia el modelo familiar de programación, pero acelera enormemente la E/S. Otra gran característica es que las instantáneas se convierten en objetos manejables, por lo que se pueden transportar a cualquier lugar donde se pueda reiniciar la aplicación. Además, la migración en vivo se puede habilitar en ciertos escenarios también.

## Casos de uso habilitados para el futuro

Para un vistazo previo al futuro, MemVerge planea lanzar una versión 2.0 en aproximadamente un año que incluirá un SDK. Además de utilizarlo como una capa de memoria transparente, los nuevos desarrolladores de aplicaciones tendrán una nueva forma de persistir sus datos. Esto facilitará el desarrollo de aplicaciones, así como la modificación de aplicaciones existentes.

Con el SDK, los desarrolladores podrán hacer una captura instantánea de segmentos de la memoria de la aplicación o del perfil completo de la memoria, lo que les dará la capacidad de persistir la memoria con las tecnologías de ORM o mapeo de memoria incómodas que existen hoy en día.

En asociación con Intel, MemVerge lanzará la primera versión de su producto con la memoria definida por software y la capacidad de instantáneas para disponibilidad general el 23 de septiembre de 2020.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
