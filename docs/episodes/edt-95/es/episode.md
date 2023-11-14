---
layout: posts
title: "Requisitos para arquitecturas de borde a nube"
number: 95
permalink: episode-EDT95-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 95
tags:
    - data
    - edge
    - compute
    - cybersecurity

date: Mon Jul 11 2022 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquitecto Principal de Soluciones de Intel, y la Dra. Anna Scott, Arquitecta Principal de Edge, Sector Público, discuten los requisitos esenciales para las arquitecturas de servicios desde el borde hasta la nube."
video: "https://youtu.be/wBPm1KcrhWg"
description: "Darren Pulsipher, Arquitecto Principal de Soluciones de Intel, y la Dra. Anna Scott, Arquitecta Principal de Edge, Sector Público, discuten los requisitos esenciales para las arquitecturas de servicios desde el borde hasta la nube."
---

<div>
{% include transistor.html id="6279b2d2" title="#95 Requirements for Edge to Cloud Architectures" %}

{% include youtube.html id="wBPm1KcrhWg" %}
</div>

---

Anna recientemente lideró un esfuerzo para escribir un documento técnico sobre las arquitecturas de servicios de borde a nube. Borde a nube engloba todos los aspectos importantes de la tecnología en los que Intel se preocupa: IA, borde, nube y conectividad de red. El propósito era reunir a expertos en estas áreas para discutir cómo Intel aborda las arquitecturas de borde a nube y cómo estas arquitecturas se pueden conectar de vuelta a la nube. El enfoque estaba en los elementos que importan en lugar de la tecnología actual que aborda los problemas. Esto proporcionaría un marco para hablar y buscar las desconexiones. Una revelación interesante fue que los profesionales de TI, las tecnologías operativas y de red hablan diferentes lenguajes técnicos con diferentes taxonomías, entre otros desafíos.

Una lección de estas discusiones fue que las comunicaciones son hiperfundamentales y se debe tener un conocimiento sólido de tus comunicaciones, especialmente en el borde. Esto dicta cuánta computación debe ser local y con qué frecuencia puedes confiar en la nube. En el sector público, la complejidad adicional de los casos de uso debe mantener la funcionalidad cuando existen condiciones de negación, interrupción, intermitencia y limitación (DDIL por sus siglas en inglés). Necesitamos replantear estas arquitecturas en la conectividad en la nube basándonos en esas limitaciones.

Comunicaciones y conectividad son la diferencia más significativa entre una arquitectura en la nube, una infraestructura de servicio y el borde. Muchas herramientas actuales asumen incorrectamente una conectividad constante; si algo no está conectado, está muerto. Ese no es el caso en el borde. Es evidente en organizaciones del borde como el ejército. Aún así, incluso en industrias como la telemedicina, tienes que asumir que no habrá una buena conectividad, por ejemplo, en un escenario de uso de telemedicina donde podrías depender del WiFi del hogar del paciente. El espacio industrial tiene requisitos similares. Algunos no pueden estar sin conexión debido a controles críticos para maquinaria o procesos específicos.

Entonces, ¿cómo puedes tener cálculo centrado en el borde que mantenga toda la funcionalidad crítica con conectividad de regreso a la nube de manera intermitente en esencia? Existen arquitecturas para esto, pero aún queda mucho por hacer para tener operaciones sin inconvenientes cuando la conectividad podría no ser continua. ¿Qué se puede seguir haciendo y qué sucede cuando todo se restaura? Habrá una desconexión con lo que ha estado sucediendo con los datos. Se vuelve complejo cuando tienes que sincronizar todos estos datos a gran escala, tal vez con miles de dispositivos en el borde.

## Seguridad

La seguridad en el borde es otra área en la que siempre hay más trabajo por hacer. Medidas de seguridad tradicionales como la autenticación siguen siendo de vital importancia, pero los dispositivos representan una gran superficie de ataque y su seguridad física es un problema distinto. La seguridad de las laptops tiende a ser sólida y esas medidas deben aplicarse también a otros dispositivos del borde. Los nuevos avances de la inteligencia artificial ayudarán a determinar si los dispositivos se encuentran en la ubicación correcta y detectar anomalías en, por ejemplo, diez mil dispositivos.

## Desarrollo de aplicaciones

En el desarrollo de aplicaciones, los desarrolladores deben entender el entorno único en el borde y desarrollarlos sin necesidad de reprogramar o incorporar nuevos middleware para ejecutarse en el borde. Las aplicaciones deben ser capaces de ejecutarse con limitaciones de computación, energía y conectividad. Además, el borde puede estar en una nueva configuración de cómputo distribuido y la aplicación debe ser diseñada para funcionar en una red de malla con cómputo altamente distribuido. Desacoplar la aplicación del hardware es un cambio significativo y se está volviendo más genérico y menos específico. Sin embargo, todo el diálogo se está moviendo hacia la obtención de datos desde cualquier lugar y su uso en cualquier lugar.

## Gestión de datos

El volumen de datos generado y recopilado en el borde es tan grande que no tiene sentido enviar todos esos datos a un centro de datos para que sean procesados. Una de las razones es el costo. En los Estados Unidos, una red privada 5G puede ser rentable para estas enormes cantidades de datos, pero el costo sería prohibitivo para la mayoría de las organizaciones sin una red privada 5G.

El otro problema es que la mayoría de los datos no son útiles. Por ejemplo, al monitorear dispositivos o aplicaciones, la mayoría de los datos indican que todo está funcionando correctamente cuando solo te importan los eventos que sugieren que las cosas no están bien. Los algoritmos de IA se aplican en el borde, disminuyendo la cantidad de datos irrelevantes enviados de vuelta a la nube para su procesamiento.

El modo de operación tradicional para la gestión de datos, copiar todo al centro de datos y ejecutar análisis allí, no funciona bien para el edge. Empujar aplicaciones hacia el edge tampoco siempre funciona. Intel ha identificado algunas otras arquitecturas de datos o operaciones de datos. Una se llama intercambio de datos, donde hay una combinación de mover datos en enclaves seguros solo después de haber sido analizados en el edge, como el procesamiento en lotes. La otra se llama flujos de datos inteligentes, donde SADE y SABR entran en juego. Los datos solo se mueven basados en reglas y se transmiten. Funciona en entornos DDIL porque puede determinar los entornos operativos actuales y ajustarse.

## Gestión

Los sistemas deben ser diseñados de tal manera que puedan ser mantenidos. No puedes desplegar diez mil dispositivos y luego enviar regularmente a un pequeño ejército de personas para verificarlos. Tradicionalmente, la tecnología de la información ha sido cautelosa al no querer actualizar un sistema que funcione. Sin embargo, no tiene sentido dejar los sistemas solos, especialmente con el temor de ataques de ransomware en las redes OT. Los sistemas deben ser arquitectónicamente diseñados de manera que permitan mantener todo fácilmente actualizado y tengan la capacidad de hacer frente al entorno de seguridad.

## Disponibilidad

Especialmente en campos críticos como el militar o la atención médica, es importante diseñar sistemas con suficiente redundancia; es más bien un enfoque de sistemas. Si los componentes individuales fallan, aún se debe cumplir el objetivo final. Eso es muy diferente a lo que sucede en la nube, donde se trata de mantener la infraestructura en funcionamiento.

La tecnología aún no está del todo desarrollada, pero está en el radar diseñar para múltiples redes. Si, por ejemplo, utilizas preferentemente el WiFi 6 y este falla, el sistema puede usar 4G u otra red disponible. Tanto la red como el procesamiento deben ser sólidos. Una operación independiente sin conexión a red es frágil. Si optas por las conexiones cableadas, obtienes limitaciones más altas pero pierdes tus aplicaciones móviles.

Puede encontrar el documento blanco "Requisitos esenciales para las arquitecturas de servicios de borde a nube" para obtener más información en embracingdigital.org o intel.org.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
