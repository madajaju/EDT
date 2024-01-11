---
layout: posts
title: "Computación Confidencial en DevSecOps"
number: 87
permalink: episode-EDT87-es
lang: es
nav_exclude: true
nav_order: 87
tags:
    - confidentialcomputing
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - sgx

date: Wed May 18 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Ofir Azoulay-Rozanes

img: thumbnail.png
image: thumbnail.png
summary: "En este episodio, Darren Pulsipher, Arquitecto Principal de Soluciones de Intel, y Ofir Azoulay-Rozanes, Director de Gestión de Productos de Anjuna, discuten las soluciones de Anjuna para la computación confidencial en el ciclo de vida del DevOps."
video: "https://youtu.be/url"
description: "En este episodio, Darren Pulsipher, Arquitecto Principal de Soluciones de Intel, y Ofir Azoulay-Rozanes, Director de Gestión de Productos de Anjuna, discuten las soluciones de Anjuna para la computación confidencial en el ciclo de vida del DevOps."
---

<div>
{% include transistor.html id="e31a9c3f" title="#87 Confidential Computing in DevSecOps" %}

{% include youtube.html id="url" %}
</div>

---

El software de Anjuna permite que las aplicaciones se ejecuten con la protección SGX de Intel y resuelve el problema de proteger los datos en uso. La misión de Anjuna es hacer que los recintos seguros sean lo más simples posible. Con el software de Anjuna, no es necesario cambiar nada en la aplicación; simplemente tómelo, ejecute en un recinto y la tecnología SGX funcionará sin problemas. El software funciona con cualquier aplicación, en cualquier nube y a cualquier escala.

La cadena de suministro global de software está siendo atacada. SolarWinds, en particular, fue un ataque a DevOps, y aunque ha habido ideas sobre cómo resolver el problema, aún no se ha asegurado completamente. La tecnología de Anjuna puede ser una solución sencilla. No es necesario rediseñar su software o cambiar metodologías. Se ejecutan en recintos seguros.

Cuando probó el software de Anjuna, Darren creó una pila utilizando Intel SGX en la base, Red Hat OpenShift, Anjuna para la parte de cómputo confidencial, y Vault de HashiCorp para almacenar un libro mayor seguro. Se sorprendió de lo rápido que la solución estaba funcionando en menos de una semana.

Darren llama a este proceso la línea de producción de DevSecOps fortalecida, aunque tiene muchas partes móviles. Ofir está de acuerdo con este término, ya que este proceso es un nuevo DevOps fortalecido con la tecnología de hardware SGX y el software de Anjuna.

La computación confidencial, o enclave seguro, resuelve el problema de proteger los datos. Cuando almacenamos datos en almacenamiento persistente, la solución para los datos en reposo ya está presente. También existe una solución para los datos en tránsito con TLS. La seguridad de los datos en uso aún no se ha resuelto porque cuando los datos están en uso, la aplicación necesita acceder a ellos desde la memoria de forma clara. No puede estar encriptado y en uso al mismo tiempo. Esto ha sido un bucle infinito de un problema. Si un actor malintencionado tiene acceso a una máquina donde se ejecuta la aplicación, un hackeo es tan simple como ingresar al dispositivo, identificar el proceso y crear un volcado de memoria. Obtendrán todos los secretos y datos confidenciales almacenados, y no están encriptados. Esto también incluiría las claves de encriptación para los datos en reposo y en transporte, ya que el software necesita usarlas para encriptar. El mal jugador tendrá las llaves del reino.

El problema se resuelve si ejecuta las diferentes aplicaciones en enclaves seguros. Incluso si alguien tuviera acceso a la máquina, no tendrían acceso a la memoria de cada aplicación. Esto no significa que no deba resolver vulnerabilidades, pero estará mucho menos estresado para corregirlas lo antes posible. Incluso si existen vulnerabilidades en el kernel, cuando algo se ejecuta en un enclave seguro, el kernel no puede acceder a su memoria.

El software de Anjuna se ejecuta en otras tecnologías basadas en hardware además de SGX. A diferencia de ejecutar encriptación en software, donde la disminución de rendimiento sería alta, Anjuna puede ajustar la configuración para ejecutar su aplicación con una disminución de rendimiento insignificante: menos del cinco por ciento.

Por lo tanto, es posible que aún no desees colocar todo en un enclave seguro, pero es el futuro para la seguridad.

Uno de los usos de una enclave segura es almacenar datos que abarcan diferentes pasos en la tubería DevOps en un libro mayor seguro. El libro mayor contiene todo lo que se incluyó en la compilación, claves de seguridad y valores hash utilizados para la verificación. Estos valores hash de verificación deben permanecer inalterados durante el ciclo, para que nadie pueda inyectar código, bibliotecas o binarios en el paquete que entregas. Todo debe ejecutarse en un contenedor en el mundo moderno.

Otro candidato para protección es una clave de firma. Sin las enclaves seguras, una vez que tienes un archivo binario listo, necesitas llevarlo a otra máquina en una habitación oscura a la que nadie tenga acceso. Pero tres personas con tres claves diferentes lo firman allí. Las enclaves seguras permiten acceder a esa clave de firma en tu entorno familiar, pero solo la enclave la puede acceder. Se basará en la identidad compleja del software que se ejecuta dentro de la enclave SGX, lo cual se implementa a través de la cita de acreditación. En otras palabras, puedes acreditar enclave a enclave. También puedes acreditar cosas que se ejecutan fuera de las enclaves. Te brinda la capacidad de confiar en el software que se ejecuta en otro lugar.

La compilación de binarios es otro uso. Uno de los grandes problemas en el Departamento de Defensa, por ejemplo, es que desean tener la garantía de que todo lo que se incluyó en la construcción se pueda rastrear hasta el desarrollador que lo escribió. Especialmente en sistemas integrados donde el software controla máquinas de millones de dólares que pueden matar o salvar vidas. Debe haber una trazabilidad completa para ayudar a garantizar la responsabilidad y que se haya realizado un desarrollo seguro.

Además de los ataques de volcado de memoria, otro problema de ataque que Anjuna resuelve es asegurarse de que en casos en los que se necesita acceder al núcleo, protegerá todo lo que necesita estar cubierto en esa interacción entre la enclave y el mundo exterior. También puede proteger contra el acceso al código y hacer que los secretos solo estén disponibles para la enclave. Además, si alguien logra acceder a una máquina, no podrán encontrar un certificado TLS en claro o la clave que se utiliza para encriptarlo.

Cada proveedor de servicios en la nube ofrece recintos seguros, y Anjuna los respalda a todos. También respaldan tecnologías locales. Además de la oferta principal, Anjuna también puede habilitar la capacidad de cifrar sus datos en reposo y en tránsito sin cambiar su software, incluso en aplicaciones heredadas o nuevas aplicaciones que no admiten cifrar cada archivo de datos.

Para obtener más información, visite anjuna.io, o consulte un white paper escrito por Darren y Ofir en embracingdigital.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
