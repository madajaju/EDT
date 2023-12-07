---
layout: posts
title: "Violaciones de datos y cadena de suministro segura."
number: 61
permalink: episode-EDT61-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 61
tags:
    - datbreach
    - data
    - process
    - policy
    - cybersecurity
    - supplychain
    - securesupplychain

date: Wed Aug 11 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquitecto Jefe de Soluciones de Intel, discute las violaciones de datos y la cadena de suministro segura con el frecuente invitado Steve Orrin, CTO de Intel, Federal."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquitecto Jefe de Soluciones de Intel, discute las violaciones de datos y la cadena de suministro segura con el frecuente invitado Steve Orrin, CTO de Intel, Federal."
---

<div>
{% include transistor.html id="2462e3fe" title="#61 Data Breaches & Secure Supply Chain" %}

{% include youtube.html id="url" %}
</div>

---

Además de los ataques de alto perfil en la cadena de suministro, como el incidente con SolarWinds, hay otros ataques menos conocidos que son igualmente problemáticos.

## Cadena de suministro segura.

Un ejemplo es la extensión de Chrome The Great Suspender, una herramienta para asegurarse de que la memoria se utilice correctamente en las aplicaciones de Chrome, con aproximadamente dos millones de usuarios. Los fundadores de esta herramienta de código abierto vendieron su empresa a una organización por millones de dólares sin debida diligencia. Resultó que el comprador era un grupo de crimen organizado que convirtió la herramienta en malware y spyware.

No hubo un ataque en el sentido de que no hackearon a la compañía original, pero la compraron y hicieron lo que quisieron con el código. Lo que un día fue un producto legítimo al día siguiente se volvió ilegítimo. Ninguna cantidad de protocolo de seguridad habría solucionado ese problema. Ahora, las empresas necesitan evaluar a sus proveedores y a terceros que los apoyen.

El software de código abierto es una bendición y una maldición. La bendición es que, al ser de código abierto, tienes acceso a su código fuente y puedes revisarlo todo lo que quieras. La maldición radica en que nadie tiene el tiempo, la energía o el conocimiento para examinar exhaustivamente cada pieza de código abierto que utilizan. Incluso de manera no intencional, se pueden introducir códigos vulnerables a malware si no son detectados por la comunidad, y a veces eso no ocurre por mucho tiempo.

Hay dos cosas que podrían mitigar este problema: una es que el código se pueda pasar a través de una herramienta de análisis de código fuente y podría existir un sistema de calificación para los colaboradores cuyo código consistentemente presenta menos vulnerabilidades o errores. Los proveedores de terceros serían los responsables de hacer principalmente este trabajo. En segundo lugar, ya existen algunas nuevas empresas bien establecidas en el campo de verificación de productos de código abierto para mostrar qué objetos en un repositorio son confiables y cuáles aún no lo son.

Las exploraciones actuales de vulnerabilidad en código abierto son un control, pero ese tipo de seguridad por sí sola no es suficiente. Debe combinarse con controles adicionales antes de que se extienda por toda su organización.

## Violaciones de datos

Además de los ataques de ransomware y de la cadena de suministro, las filtraciones de datos son un problema común. En 2020, se produjeron extracciones de datos por valor de 1,8 billones de dólares en un total de 7,8 mil millones de registros de datos. Por ejemplo, una filtración en McDonald's comprometió datos de clientes, socios e internos.

## Encriptación

La primera parte de la solución es contar con mejores herramientas de seguridad en los datos y la infraestructura. Encriptar el acceso e incorporar la denegación por defecto es fundamental para que, aunque alguien entre por la puerta principal, no tenga acceso a todo. La información también debe ser encriptada dentro de la organización, no solo lo que se expone en la nube o lo que se envía externamente. Toda la información que atraviese su red, así como la información en reposo, debería estar encriptada.

La encriptación tiene un costo, pero en hardware moderno, existe una aceleración incorporada que obvia la penalización. Ahora puedes activar la encriptación en toda tu organización sin impacto en el rendimiento.

## Segmentación

Otra parte son los enclaves, o segmentación. Uno de los desafíos en los entornos corporativos de red es que, una vez más, si alguien entra por la puerta, tiene carta blanca si todo está conectado. Últimamente ha habido un movimiento para llevar el desarrollo y trasladarlo a su propia red, y eso es un comienzo, pero solo la punta del iceberg. La segmentación de redes debería ser en toda la organización. Aún puedes tener comunicación transversal, pero está sujeta a un conjunto de reglas y ayudará a limitar el impacto. Por ejemplo, si tu mesa de ayuda es atacada, tus sistemas de recursos humanos no serán comprometidos al mismo tiempo.

La microsegmentación fue una palabra de moda hace unos cinco años, pero ahora es necesario implementarla. Hay algunas herramientas excelentes disponibles para ayudar con esto, como los ecosistemas de contenedores donde se puede implementar una aplicación y esta estará en su propia red con su propio firewall.

Implementar adecuadamente las credenciales de autenticación también debe suceder ahora. La autenticación multifactor es necesaria, al igual que la autenticación de entidad. Muchas herramientas son automatizadas y tienen procesos automatizados, por lo que las entidades, no solo las personas, deben tener credenciales adecuadas.

## Cero Confianza

La confianza cero ha madurado hasta el punto en que debería implementarse, y algunos de los principios fundamentales como el rechazo predeterminado y no confiar en nadie son críticos. La tecnología ha alcanzado el despliegue de esos tipos de conceptos.

Los desarrolladores pueden preocuparse de que estas herramientas de seguridad ralenticen el proceso, pero hay formas de construir la arquitectura para minimizar este problema. Por ejemplo, si eres un desarrollador y tienes las credenciales y acceso adecuados, deberías poder acceder a las cosas que necesitas cuando las necesitas y perder el acceso después de terminar, en lugar de tener una credencial que te dé acceso a todo todo el tiempo. La idea de la confianza cero no es que la empresa no confíe en el desarrollador, sino que el acceso es para el momento adecuado, no solo un acceso general si un actor malintencionado roba la credencial.

Ninguna industria puede permitirse ignorar los riesgos actuales. Cada organización debe considerar la seguridad de manera diferente e implementarla en toda la organización y arquitectura.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
