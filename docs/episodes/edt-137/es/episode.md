---
layout: posts
title: "Renacimiento de la Nube Privada"
number: 137
permalink: episode-EDT137-es
lang: es
nav_exclude: true
nav_order: 137
tags:
    - cloud
    - computing
    - greenlake
    - hpe
    - multicloud
    - hybridcloud
    - technology

date: Tue May 09 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Sam Ceccola

img: thumbnail.png
image: thumbnail.png
summary: "En este episodio, Darren entrevista a Sam Ceccola, CTO de DOD para HPE, sobre los nuevos modelos de negocio y tecnología que están cambiando la forma en que las organizaciones consumen la nube híbrida."
video: "https://youtu.be/url"
description: "En este episodio, Darren entrevista a Sam Ceccola, CTO de DOD para HPE, sobre los nuevos modelos de negocio y tecnología que están cambiando la forma en que las organizaciones consumen la nube híbrida."
---

<div>
{% include transistor.html id="fcf7bb68" title="#137 Rebirth of the Private Cloud" %}

{% include youtube.html id="url" %}
</div>

---

Ha habido una tendencia hacia la repatriación en el sector comercial, donde las empresas están trayendo cargas de trabajo y máquinas virtuales de vuelta de entornos de nube pública debido a razones financieras como los cargos de salida y la planificación presupuestaria para las cargas de trabajo hiperscaladas. La soberanía de los datos, las preocupaciones de seguridad, el rendimiento y los problemas de latencia también han llevado a más empresas a alejarse de la nube pública y volver a las tecnologías de nube privada. A pesar de este cambio, muchas promesas de la nube se han cumplido para proporcionar facilidad de uso, elasticidad y precios basados en el consumo. Con el fin de facilitar la transición entre nubes, la nube privada debe ofrecer facilidad de uso, portabilidad de cargas de trabajo y nuevos modelos de precios basados en el consumo que son muy demandados en las nubes públicas.

## Control de Costos

Sam Ceccola, el CTO de HPE DoD, cree que es esencial comprender los riesgos y desafíos asociados con cada tecnología de nube privada, pública e híbrida. Y diseñar soluciones que aprovechen las fortalezas de cada tecnología. Aquí es donde entra en juego la oferta de producción de HPE, GreenLake. El modelo de contratación basado en consumo de servicios de GreenLake fue implementado por primera vez en 2005 y desde entonces ha evolucionado para incluir un portal de autoservicio para gestionar múltiples entornos de nube privada y pública. GreenLake permite a los clientes implementar recursos adicionales a través de la frontera de nube privada/pública según la demanda. También gestiona y visualiza costos complejos, como los cargos de salida y la presupuestación para cargas de trabajo a gran escala.

## Gestión de datos

Otra preocupación importante para la mayoría de los consumidores de nubes públicas es la gestión de datos, el gobierno y la soberanía. Sin una estrategia de datos cohesiva, muchas organizaciones se ven muy cargadas con los costos de egreso de datos al mover datos dentro y fuera de las nubes públicas. Existen varios enfoques diferentes para gestionar datos a través de los límites de la nube. HPE utiliza un enfoque de almacenamiento adyacente a la nube que reduce al mínimo la cantidad de datos que se mueven a la nube. El almacenamiento adyacente a la nube de GreenLake mantiene los datos en las instalaciones mientras se ejecutan cargas de trabajo de computación en la nube. Este enfoque garantiza la soberanía de los datos y reduce los costos de egreso y los problemas de latencia asociados con el movimiento de grandes cantidades de datos entre nubes.

## Portabilidad

Otro aspecto clave de las arquitecturas de multi-nube híbrida es la capacidad de mover fácilmente las cargas de trabajo entre nubes. Algunas organizaciones han optado por arquitecturas de microservicios basadas en contenedores sin estado para proporcionar la flexibilidad y portabilidad de las cargas de trabajo. Sin embargo, no todas las cargas de trabajo pueden ser fácilmente contenerizadas, especialmente aquellas que contienen aplicaciones con estado. En estos casos, se utilizan máquinas virtuales para permitir la movilidad de las aplicaciones de una nube a otra. Mover máquinas virtuales entre nubes puede ser problemático, ya que los proveedores de servicios en la nube utilizan hipervisores y CPUs diferentes que pueden no ser completamente compatibles. Comprender las limitaciones de estas migraciones es fundamental en las decisiones de compra de hardware tanto virtualizado como no virtualizado.

## Seguridad

GreenLake no limita a los clientes a la implementación en el sitio, ya que les permite aprovisionar cargas de trabajo en varios entornos de nube, incluyendo Amazon, Google y Azure. Además, GreenLake admite cargas de trabajo híbridas reales, donde una carga de trabajo puede ejecutarse tanto en el sitio como en entornos de nube hipescalares simultáneamente. La ejecución de cargas de trabajo a través de los límites de las nubes puede aumentar la exposición a los ataques cibernéticos. Comprender los modelos de seguridad de las diferentes tecnologías de nube pública y privada puede ser una tarea desalentadora y aumenta el capital humano necesario para diseñar y gestionar de manera efectiva una posición de seguridad sólida. La plataforma GreenLake maneja la seguridad a través de su motor de seguridad agnóstico, Security Central, que soporta la acreditación multinuebla y las arquitecturas de confianza cero para nubes independientes, gestionando la complejidad e integración de los modelos de seguridad.

Arquitecturar una solución de nube multi-híbrida no es trivial y requiere comprensión de las tecnologías de nubes privadas y públicas, sus limitaciones y sus fortalezas. Afortunadamente, existen organizaciones como HPE que han estado trabajando con arquitecturas de nube multi-híbrida durante varios años y han aprendido los entresijos de la gestión efectiva de cargas de trabajo en este nuevo entorno flexible.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
