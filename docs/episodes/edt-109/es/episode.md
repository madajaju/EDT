---
layout: posts
title: "Avanzando las operaciones con 5G"
number: 109
permalink: episode-EDT109-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 109
tags:
    - 5g
    - comms
    - wifi6

date: Mon Oct 05 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Leeland Brown
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, arquitecto principal de soluciones de Intel, Leland Brown, ingeniero principal: director técnico de comunicaciones avanzadas, y la Dra. Anna Scott, arquitecta principal de borde para el sector público, hablan sobre la historia de las comunicaciones avanzadas y los casos de uso futuro con 5G. Parte dos de dos."
video: "https://youtu.be/ZHyeXrkxQhA"
description: "Darren Pulsipher, arquitecto principal de soluciones de Intel, Leland Brown, ingeniero principal: director técnico de comunicaciones avanzadas, y la Dra. Anna Scott, arquitecta principal de borde para el sector público, hablan sobre la historia de las comunicaciones avanzadas y los casos de uso futuro con 5G. Parte dos de dos."
---

<div>
{% include transistor.html id="b613bc52" title="#109 Advancing Operations with 5G" %}

{% include youtube.html id="ZHyeXrkxQhA" %}
</div>

---

5G abre muchas capacidades. Ahora puedes configurar redes privadas, las cuales están definidas por software para que puedas añadir más funcionalidad a tu red. ¿Hacia dónde nos lleva esta tecnología habilitadora?

Anna dice que aunque todavía estamos en los primeros días desde el punto de vista de ancho de banda y latencia, hay verdaderas ventajas en 5G, como la apertura del espectro, como CBRS, la capacidad de aprovechar el equipo de usuario existente y la capacidad de los clientes de tener acceso móvil.

Un caso de uso que no es emocionante pero que tiene vastas repercusiones es que puedes llevar tu laptop al piso de la fábrica y usarlo para una conectividad completa. En lugar de salir al piso de la fábrica con una libreta y papel y transferir la información de regreso a la oficina, puedes converger los dos entornos. Los estándares de 5G permiten esto, pero no necesariamente requieren una implementación completa de 5G.

Una evolución que está ocurriendo es la capacidad de transmitir video de alta definición desde una cámara inalámbrica a través de 5G y tener una latencia lo suficientemente baja como para poder hacer análisis en tiempo real. Actualmente, no muchas cámaras 5G pueden operar en ese entorno, por lo que a menudo se conectan por cable cerca de la informática de borde acoplada para obtener ese aspecto en tiempo real, pero pronto llegará esta opción de transmisión ventajosa.

Otro ejemplo de una ventaja del 5G es utilizar de 10 a 20 auriculares de realidad aumentada en lugar de uno o dos con Wi-Fi. El punto clave es el MEC (Cómputo en el Borde Móvil) que brinda la capacidad de tener las aplicaciones in situ en lugar de tener que regresar al interruptor o al núcleo del proveedor y tener ese tiempo de RAN.

Comprender cómo se despliegan las frecuencias es esencial en casos de uso, ya que algunos operadores han desplegado mmWave a pesar de los desafíos; las frecuencias n41 y n42 reaccionan de manera diferente en el mundo real. Por lo tanto, en implementaciones en el lugar, la MEC y el diseño de RF son extremadamente importantes.

Un caso de uso convincente para 5G fuera de la fábrica es utilizar drones en respuestas de emergencia. Un precursor temprano a la eventual capacidad de traer drones y evaluar un área dañada es conectar los drones, entender una misión para realizar un sobrevuelo y luego recopilar todos esos datos. Aunque no podemos transmitir video en vivo desde múltiples drones y unirlo, estamos cerca de recopilar, combinar y analizar esos datos, aunque no en tiempo real todavía.

Otro caso de uso es utilizar 5G, IA, modelado, simulación y cómputo en el borde para la capacitación en diversas industrias, incluyendo el Departamento de Defensa. Existe una gran ventaja en crear una simulación de entrenamiento realista sin poner a la persona en peligro o gastar grandes cantidades de dinero en entrenamiento en vivo.

Aunque el 5G permite este tipo de caso de uso, mucho depende de que el 5G se conecte a un MEC en lugar de que el 5G vaya a la nube. La física entra en juego. Se necesita una latencia extremadamente baja, por lo que no se puede tener una arquitectura que vaya desde unos auriculares hasta la nube, luego hacia un MEC y finalmente hacia la visualización. Debe ir desde los auriculares al MEC, donde ocurre el procesamiento en tiempo real. Luego se puede compartir datos a través de la nube para una experiencia en tiempo real.

También existe la capacidad de entrelazar o agrupar los MECs juntos, de modo que los datos nunca tengan que ir a la nube. Los MECs pueden realizar todo el procesamiento y análisis en el interruptor. Esto podría permitir avances como edificios y ciudades inteligentes. Este tipo de tecnología habilitada para 5G es la tormenta perfecta para cambios considerables en la industria.

Leland señala que la historia de las nuevas redes es la computación distribuida. Todo está conectado a través de la conectividad inalámbrica, pero los puntos de cálculo están dispersos por el paisaje, donde las aplicaciones se encuentran en el borde y permiten los casos de uso. A donde nos dirigimos es hacia el cálculo inalámbrico uno a uno.

¿Qué papel juega Intel en el 5G? Va mucho más allá de solo proporcionar chips. Dado que el 5G está diseñado por software, Intel ha permitido que el ecosistema construya o diseñe encima de su L15. Al pasar de 4G a 5G, Intel tomó el bloque funcional del RAN, llamado FlexRan, y permitió a las empresas diseñar sus arquitecturas de banda base y virtualizarlas. Escribir la arquitectura de referencia de FlexRan facilitó mucho que los nuevos participantes lo adoptaran como punto de partida.

En el aspecto del hardware, Intel dedicó muchos ciclos para asegurarse de que el hardware común y disponible comercialmente funcionara bien para respaldar todos los grupos básicos, las aplicaciones RAN y los servidores. Los nuevos sistemas que se obtienen al alejarse de los sistemas propietarios deben contar con el apoyo fácil por parte del mismo tipo de servidor que funciona en la nube y en el centro de datos, ya que ahora se tiene la escala y la ventaja de costos.

Esto reducirá los precios y promoverá más innovación en la industria.

Echa un vistazo a la primera parte de esta entrevista [aquí](episodio-EDT108).



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
