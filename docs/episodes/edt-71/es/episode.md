---
layout: posts
title: "Gobernanza de Datos Moderna"
number: 71
permalink: episode-EDT71-es
lang: es
nav_exclude: true
nav_order: 71
tags:
    - datagovernance
    - data
    - immuta
    - dataaccess
    - identitymanagement
    - ceo
    - technology
    - process

date: Wed Dec 01 2021 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Matthew Carroll

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquitecto Principal de Soluciones en Intel, continúa su discusión en profundidad sobre la realidad y el futuro de la gobernanza moderna de datos con Matthew Carroll, CEO de Immuta. En este episodio, discuten la clasificación de datos, políticas y gobernanza."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquitecto Principal de Soluciones en Intel, continúa su discusión en profundidad sobre la realidad y el futuro de la gobernanza moderna de datos con Matthew Carroll, CEO de Immuta. En este episodio, discuten la clasificación de datos, políticas y gobernanza."
---

<div>
{% include transistor.html id="068a1dff" title="#71 Modern Data Governance" %}

{% include youtube.html id="url" %}
</div>

---

En la gobernanza moderna de datos, la primera premisa es que debes separar la política de la plataforma.

El segundo es que no puede haber ninguna ontología. Si alguien intenta crear un superesquema de todo, es imposible, pero se necesita un esquema para aplicar una política. Entonces, si un usuario quiere combinar dos columnas, se necesita una nueva política. Los datos sensibles deben descubrirse, tanto a través de identificadores directos como indirectos. Los identificadores indirectos son más difíciles y se deben aplicar técnicas para mitigar el riesgo de ataques de enlace.

La tercera premisa es la introducción de una serie de técnicas de mejora de la privacidad como enmascaramiento, censura, autorización, etc.

Estas herramientas están automatizadas como parte de la gobernanza moderna de datos. Un ejemplo paralelo es cómo solías tener que ser un mago para eliminar los ojos rojos en una foto. Ahora, solo haces clic en un botón y los ojos rojos desaparecen. Es lo mismo en cuanto a la privacidad. Necesitamos ese botón fácil para encontrar automáticamente un identificador potencialmente indirecto donde haya un riesgo mayor que muy bajo de reidentificación.

Además de la privacidad, hay una miríada de otras cosas relacionadas con los datos que se deben automatizar antes de la clasificación. Aunque Immuta no se adentra en la transformación de datos y esos flujos de datos, ellos proporcionan una API y una interfaz de línea de comandos. Los ingenieros encargados de construir estas canalizaciones pueden hacer su trabajo, y Immuta les proporcionará las reglas, y la actualización de las reglas puede formar parte de la canalización. Ellos quieren ser un conducto hacia esa capa.

Hay algunos roles nuevos en este ámbito, como el administrador de datos y el ingeniero de gobernabilidad de datos, que están separados del ingeniero de datos. Y luego los usuarios de datos realmente son tres usuarios separados con necesidades diferentes.

Primero, hay científicos de datos que tienen habilidades especializadas y necesitan datos de una manera específica. A veces, necesitan herramientas específicas y un entorno de computación específico en algún lugar del mundo para lograr su misión.

Por otro lado, los ingenieros de datos e ingenieros analíticos, uno construyendo los procesos y otro manteniéndolos, necesitan un acceso rápido a una emergencia cuando algo falla. Lo ingresan en un proceso y lo entregan a alguien y verifican que esté actualizado.

Finalmente, están los gobernadores que están tratando de mantenerse al día con las regulaciones.

Estos usuarios tienen opiniones y necesidades muy diferentes en cuanto a gobernanza. Al aplicar una nueva gobernanza, lo más importante es tratar a estos grupos como partes interesadas separadas.

Si pensamos en todos estos roles de manera binaria, como ingenieros de datos, lo que ocurre es que se producen muchas reuniones, por lo que es imposible escalar. Necesitamos crear una relación simbiótica entre las operaciones de datos, la ciencia de datos, el análisis de datos y la gobernanza. Un ejemplo de modelo es Salesforce o ServiceNow, donde hay un flujo de trabajo completo de principio a fin y no es necesario tener reuniones. Esto sería verdaderas operaciones de datos.

Immuta tiene, filosóficamente, un enfoque basado en atributos en lugar de un enfoque basado en roles. El problema con un enfoque basado en roles es que se produce una sobrecarga a medida que inevitablemente se van añadiendo roles. Por ejemplo, una organización farmacéutica tenía más de 800,000 roles debido a que los roles nunca pueden ser eliminados debido a la necesidad de reproducir pruebas de medicamentos. La sobrecarga de roles puede convertirse rápidamente en un problema de escala.

El acceso basado en atributos es la clave para contrarrestar esto. En lugar de agregar constantemente roles, los usuarios tienen atributos específicos y consistentes. Por ejemplo, un atributo de un usuario podría ser que están etiquetados para que solo puedan ver su propio estado. Con el acceso basado en roles, cada estado, ya sea que lo puedan ver o no, tendría que ser escrito. Esta gestión moderna de identidad es muy escalable. El acceso por atributos simplifica la cantidad de políticas que deben ser escritas y ayuda con el rendimiento.

Las regulaciones globales modernas, como el GDPR, sin embargo, también requieren un propósito. Aquí es donde el acceso a los atributos se vuelve importante: ¿bajo qué propósitos puede operar cada persona? Bajo un EULA, los datos deben ser procesados por los usuarios solo por la razón declarada. De lo contrario, se necesita un análisis de riesgo antes de que los datos sean utilizados operativamente para la producción.

En este momento, estamos en el comienzo de la gobernanza de datos moderna. Actualmente, los usuarios toman una decisión binaria única sobre los datos, ya sea dar su consentimiento o no darlo. El futuro se encuentra en algún lugar intermedio: el consentimiento limitado. Por ejemplo, si una persona proporciona sus datos genómicos a una empresa como ancestry.com, ¿qué significa eso para su hijo en el futuro? El hijo no dio su consentimiento para que su material genético sea entregado y sea posiblemente examinado por, digamos, una compañía de seguros de salud para determinar el riesgo. En la gobernanza moderna de datos, Matt ve a los consumidores dando un consentimiento limitado, como permitir que una empresa solo analice el ADN para la genealogía y nada más.

El futuro debe basarse en el consentimiento y el acceso basado en el propósito, ya que en última instancia, los datos derivados impulsan conocimientos a medida que el aprendizaje automático en desarrollo incrusta datos en los algoritmos.

Para obtener más información sobre Immuta y cómo construir un programa de gobierno de datos, visita Immuta.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
