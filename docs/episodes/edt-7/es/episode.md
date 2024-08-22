---
layout: posts
title: "Asegurando al trabajador remoto."
number: 7
permalink: episode-EDT7-es
lang: es
nav_exclude: true
nav_order: 7
tags:
    - datasecurity
    - cybersecurity
    - vdi
    - zerotrust

date: 2020-07-14T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Con el gran cambio de las personas que ahora trabajan desde casa en lugar de la oficina, la seguridad es una preocupación creciente para muchas organizaciones de TI. En este episodio, Steve Orrin, CTO de Intel Federal, y Darren discuten las amenazas de seguridad y soluciones para ayudar a proteger a los trabajadores remotos y los centros de datos empresariales."
video: "https://youtu.be/Fjez8L0h2M4"
description: "Con el gran cambio de las personas que ahora trabajan desde casa en lugar de la oficina, la seguridad es una preocupación creciente para muchas organizaciones de TI. En este episodio, Steve Orrin, CTO de Intel Federal, y Darren discuten las amenazas de seguridad y soluciones para ayudar a proteger a los trabajadores remotos y los centros de datos empresariales."
---

<div>
{% include transistor.html id="edt7" title="#7 Securing the Teleworker" %}

{% include youtube.html id="Fjez8L0h2M4" %}
</div>

---

## Modos de operación del trabajador remoto

Los modos de operación de teletrabajo no son nuevos, ya sea utilizando un dispositivo como terminal (VDI), parte de la red interna o como un portal para servicios/software (SAAS); lo nuevo es el gran volumen de empleados, contratistas y socios que ahora utilizan entornos existentes para realizar su trabajo principal, en lugar de unos pocos seleccionados y manejables. La seguridad es un desafío en todos estos modos de operación. Las organizaciones necesitan encontrar la mejor manera de desplegar sus capacidades existentes para asegurar y proteger el acceso, los datos, los dispositivos y los usuarios.

## Amenazas del teletrabajo:

Algunas de las amenazas de seguridad son aquellas que siempre han estado presentes con el teletrabajo: la seguridad del dispositivo final y los datos, el punto de acceso y el acceso a los servicios empresariales. Sin embargo, al adaptarse al entorno del COVID-19, han surgido nuevos problemas debido al gran número de personas que ahora teletrabajan y la prisa por habilitarlos.

Un problema es que los trabajadores se encuentran en casa, en entornos no seguros, en redes que nunca fueron destinadas a ser utilizadas fuera de la corporación. Esto lleva a ataques de phishing y malware dirigidos. Otro problema es la introducción de nuevas herramientas, como aquellas para la colaboración y videoconferencia, que pueden exponer a su empresa y datos a ataques y uso malicioso. Básicamente, ahora existe un área de superficie de ataque más amplia, mucho más grande de lo que la mayoría de las organizaciones inicialmente planearon, y nuevos entornos que nunca formaron parte del plan original.

## Soluciones para asegurar al trabajador remoto

## Trae tu propio dispositivo (BYOD)

Uno de los problemas más difíciles de abordar es cuando los trabajadores usan sus propios dispositivos. El desafío principal es que estos son dispositivos no gestionados sin todos los agentes de seguridad en funcionamiento y gestionados por TI; el dispositivo es propiedad y está gestionado por el usuario. Es posible que tengas la capacidad de cargar unos cuantos agentes o hacer cumplir algunas políticas, pero solo hay tanto que puedes hacer sin dificultar al trabajador al utilizarlo como un dispositivo personal. Entonces, ¿cómo puedes asegurar a un usuario con un BYOD?

Asegúrate de que estos fundamentos estén en su lugar: Aplica los últimos parches como requisito, impón un buen control de acceso a tu empresa y servicios, implementa autenticación multifactor, y rodea tus activos con las protecciones adecuadas, como la gestión de derechos empresariales para el control de acceso a los datos y la imposición de control de acceso basado en políticas en los puntos finales.

Otra opción para reducir su riesgo podría ser limitar el acceso directo a los servicios empresariales y hacer que los usuarios trabajen en un entorno de SASS.

## Puntos Finales y Entornos Inseguros

La mejor solución para muchos de estos problemas sería un cliente rico empresarial, pero aún hay riesgo involucrado. Los trabajadores están usando un dispositivo que es una extensión administrada de la red empresarial. La seguridad puede estar presente con un inicio seguro, cifrado de disco completo, protección de datos, cortafuegos locales y aplicación de buenas actualizaciones. Sin embargo, el riesgo surge porque muchas organizaciones ya tienen trabajadores remotos, como vendedores o ingenieros de campo, que pueden no tener el mismo nivel de seguridad que los trabajadores que nunca debieron salir del edificio, como finanzas y recursos humanos.

Las organizaciones deben estar vigilantes para asegurarse de que todos los trabajadores ahora tengan la misma seguridad, o incluso agregando capas adicionales que los trabajadores necesitan para trabajar de forma remota en redes no seguras. La autenticación de múltiples factores ahora debería ser un requisito, y la supervisión de políticas de punto final y la gestión de derechos empresariales son ahora más importantes que nunca.

Estamos viendo innovaciones en esta área, como un cliente que está proporcionando a los nuevos empleados no solo laptops, sino también un enrutador gestionado para evitar redes no seguras.

## Sistemas de VDI y Servicios en la Nube.

La implementación de seguridad para los sistemas de VDI y los servicios en la nube incluye los conceptos básicos de seguridad: protección de datos, seguridad de virtualización tanto en el centro de datos empresarial como en los puntos de acceso, seguridad de aplicaciones, arranques seguros, parcheo y encriptación de redes. La clave está en realizar un estudio preciso de la empresa y los servicios en la nube que se están implementando para sus trabajadores y asegurarse de que todos estén protegidos de igual manera. Cada aplicación, incluso aquellas que no son críticas para la misión, representa un punto potencial de ataque.

## Clientes como Servicio

Los clientes de SASS utilizan servicios en la nube y también utilizan aplicaciones en sus clientes ricos, por lo que existen algunos problemas de seguridad adicionales de los que preocuparse. Debe haber una protección adecuada de datos en la gestión de derechos empresariales (ERM, por sus siglas en inglés) para el acceso a los datos a través de los servicios en la nube y de vuelta al centro de datos. La protección en ambos lados es fundamental. El acceso del cliente a los servicios en la nube debe estar protegido mediante autenticación multifactor y cifrado de red. El acceso del servicio en la nube al centro de datos privado y a los recursos empresariales también debe estar protegido en las capas de acceso a la red, los datos y las aplicaciones. Comprender cómo los clientes están utilizando los servicios y qué datos están accediendo es donde entran en juego las decisiones de ERM.

## Uso indebido y abuso por parte de los empleados internos

La IT debería utilizar una variedad de métodos para gestionar la amenaza y el riesgo de errores, uso indebido y acciones maliciosas de los empleados internos. El control de acceso basado en políticas y la aplicación de normas desde las aplicaciones hasta los datos, tanto a nivel empresarial como en la nube, son importantes para evitar el mal uso y abuso de los usuarios que ya están autenticados. La principal defensa que tiene la IT es la auditoría y el monitoreo de la inteligencia de amenazas. Gestionar esta información en toda la empresa y la nube durante un largo período de tiempo puede ser muy efectivo para detectar comportamientos aberrantes.

No hay duda de que debemos pensar de manera diferente ahora sobre los problemas de seguridad con el teletrabajo. Nuestras principales recomendaciones son primero, implementar la tecnología que has estado probando; segundo, educar a tus usuarios; y tercero, activar la autenticación de dos factores y proteger tus datos a gran escala. Si podemos hacer estas tres cosas, podemos reducir el riesgo y estar mejor preparados para el futuro.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
