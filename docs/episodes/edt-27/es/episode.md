---
layout: posts
title: "Seguridad de Hardware: Imperativo para Transformar Datos."
number: 27
permalink: episode-EDT27-es
lang: es
nav_exclude: true
nav_order: 27
tags:
    - attackers
    - encryption
    - compliance
    - zerotrust
    - cybersecurity
    - technology
    - policy

date: Tue Oct 27 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Jesse Schrater

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquitecto Principal de Soluciones, Sector Público, Intel, y Jesse Schrater, Gerente de Seguridad, Grupo de Plataformas de Datos, Intel, discuten el panorama actual de seguridad y cómo la tecnología SGX de Intel y su ecosistema de colaboradores ofrecen una solución oportuna y probada para los datos en uso y otras preocupaciones de seguridad."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquitecto Principal de Soluciones, Sector Público, Intel, y Jesse Schrater, Gerente de Seguridad, Grupo de Plataformas de Datos, Intel, discuten el panorama actual de seguridad y cómo la tecnología SGX de Intel y su ecosistema de colaboradores ofrecen una solución oportuna y probada para los datos en uso y otras preocupaciones de seguridad."
---

<div>
{% include transistor.html id="360a1ce9" title="#27 Hardware Security: Imperative for Transforming Data" %}

{% include youtube.html id="url" %}
</div>

---

## Paisaje de seguridad de datos.

El mundo se ha vuelto increíblemente conectado con todos los dispositivos, y esto está impulsando un crecimiento exponencial en la cantidad de datos que necesitamos gestionar: cuanto más volumen, más riesgo. Es un desafío, y aprovechar nuevas capacidades informáticas como la nube, el análisis de datos y la informática perimetral añade complejidad adicional.

Hay tres tendencias principales en seguridad: cifrar todo, aislar la carga de trabajo y una cadena de confianza. Estas tres áreas son importantes para ayudar a las organizaciones a cumplir con los crecientes requisitos regulatorios para mantener protegidos los datos.

Cuando las organizaciones deciden llevar a cabo una transformación digital, o se ven obligadas a adoptarla debido a un catalizador como el COVID-19 que requiere trabajadores remotos, por ejemplo, la seguridad debe ir de la mano para mantener los controles y el cumplimiento de seguridad en su lugar. Si abordas la seguridad a lo largo del proceso de implementación, podrás transformar la forma en la que haces negocios de manera sostenible.

## Protege los datos a lo largo de su ciclo de vida

Cifrar datos es importante en todas sus fases. Históricamente, los atacantes podían acceder a los datos directamente a través de la red. Después de que estos se cifraran, empezaron a irrumpir en los centros de datos y extraer datos de las bases de datos. Por eso, comenzamos a cifrar el almacenamiento. Aun así, los datos llegan a un punto final y se cargan en la memoria y se descifran, por lo que un ataque sofisticado que pudiera obtener acceso de root podría potencialmente robar o manipular los datos en ese punto de procesamiento. Este ataque a los datos en uso es la nueva frontera para los atacantes y para aquellos que defienden el espacio. Intel tiene algunas capacidades nuevas emocionantes e innovadoras que estamos incorporando en nuestros procesadores para ayudar a los propietarios de datos, los propietarios de aplicaciones, los proveedores de servicios y, básicamente, a todo el ecosistema a cerrar esas posibles vulnerabilidades.

## ¿Por qué proteger los datos en uso?

En muchos casos, los atacantes están utilizando escaladas de privilegios en el sistema operativo o en las capas del hipervisor. Podrían estar ingresando a través de un sistema operativo invitado, un sistema operativo host o incluso mediante acceso físico al hardware del servidor. Los atacantes podrían ser hackeadores clásicos con malware, competidores de terceros o incluso personal interno como administradores o administradores del sistema en un proveedor de servicios.

## Extensiones de Guardia de Software de Intel (Intel SGX)

Intel ha incorporado una nueva tecnología en nuestros procesadores llamada Intel Software Guard Extensions, o SGX. Esto es parte del paradigma de informática confidencial que está en auge en el mercado actualmente, ya que las empresas están tratando de transformar sus datos y mantenerlos privados. SGX aborda estos nuevos tipos de ataques al permitir que la aplicación se comunique directamente con el procesador en la memoria cifrada, eludiendo el sistema operativo, el hipervisor y prácticamente todo lo demás en el sistema. Por lo tanto, incluso si hubiera una brecha en su sistema operativo, hipervisor u otras aplicaciones, los atacantes no podrían acceder a esos datos porque el propio sistema operativo no tiene visibilidad de esos datos. Por lo tanto, no es necesario confiar en el proveedor ni en el resto de la pila del sistema porque básicamente se opera como si ya estuvieran comprometidos, y su código y datos permanecerán confidenciales e inalterados; tendrán integridad.

Intel está tratando de hacer que tengas que confiar en el menor número de componentes posible. SGX va más allá en ese camino para el centro de datos que cualquier otra cosa que hayamos visto. Lo único en lo que tienes que confiar es en tu propia aplicación y en el propio procesador.

SGX ofrece una capacidad poderosa para empresas como proveedores de servicios en la nube, quienes pueden decirle a sus clientes que ellos, o el gobierno, por ejemplo, no podrían acceder a sus datos aunque quisieran hacerlo.

## Intel SGX en Acción

SGX ya es ampliamente utilizado por proveedores de servicios en la nube y vendedores de software, pero de alguna manera, apenas estamos comenzando. Aunque esta tecnología ha estado disponible durante varios años, hemos creado ecosistemas y estamos incorporando nuevas capacidades en nuestros próximos procesadores Xeon Ice Lake de tercera generación. Esto ampliará sus capacidades, su capacidad para escalar cargas de trabajo empresariales grandes y podrá proteger porciones de memoria mucho más grandes con un mejor rendimiento y en un rango mucho más amplio en los centros de datos mainstream.

Intel es uno de los miembros fundadores del Consorcio de Computación Confidencial, que forma parte de la Fundación Linux. La mayoría de los grandes proveedores de servicios en la nube, muchos proveedores de software e incluso nuestros competidores en el ámbito de la tecnología de silicio están trabajando juntos en este tipo de soluciones de entornos de ejecución confiables y estableciendo estándares para manejar este tipo de capacidades. También estamos creando conciencia sobre la necesidad y el valor empresarial de la computación confidencial.

## Ecosistema de socios de software Intel SGX

SGX ofrece muchas opciones de uso dependiendo de lo que esté buscando el propietario de los datos. Si un cliente desea el nivel más detallado de control, SGX les permitirá hacerlo. De hecho, pueden reducir su aplicación esencialmente solo a los datos codificados que desean mantener aislados del resto del sistema o incluso solo a una parte de esa aplicación. Sin embargo, este escenario requiere que escriban la aplicación con ese propósito. En el ecosistema, existen recursos de código abierto que facilitan mucho este tipo de desarrollo y siempre se está expandiendo.

En el otro lado está la migración rápida "lift and shift". Puedes tomar tu aplicación y colocarla en un entorno más seguro. El ecosistema está respondiendo y creando contenedores con enfoque en SGX. Podrías colocar tu aplicación sin modificaciones en ese entorno donde sería lo único en funcionamiento, por lo que la aplicación misma creería que se está ejecutando en su entorno nativo.

Nuestros socios del ecosistema han avanzado mucho en este espacio con cosas como Fortanix, Graphene y Scone. Algunos son de código abierto y otros son propietarios, pero vienen con todos los servicios incorporados. Por ejemplo, Microsoft Azure Confidential Computing ofrece toda la gama, desde soluciones de traslado y adaptación con SGX hasta SDK que te permiten desarrollar directamente tu aplicación para él y desplegarla en su entorno para que ni siquiera tengas que gestionar el hardware. Hay un conjunto completo de opciones, por lo que nadie debería temer las complejidades de SGX. Los clientes también deben tener la confianza de que material sensible como algoritmos de aprendizaje automático o claves de cifrado serán manejados con un nivel muy granular de protección.

## Computación Confidencial: Un Cambio de Juego en la Seguridad

SGX ha estado ahí durante algún tiempo y hemos estado trabajando para expandirlo. Se ha probado y ha sido sometido a pruebas intensivas, con cientos de documentos de investigación y fortalecido con actualizaciones a lo largo del tiempo. Tiene la ventaja de no ser el novato en el vecindario, sino una solución fundamental que está siendo llevada al gran público con Ice Lake. Ya no se enfoca en áreas pequeñas y sensibles, sino que ahora está listo para cosas más grandes.

El gobierno, los servicios financieros y la atención médica son algunas de las industrias que desde el principio vieron el atractivo de SGX porque tienen muchas expectativas regulatorias y requisitos de privacidad, sin embargo, intentan compartir datos y realizar actividades innovadoras con múltiples partes. Las empresas tienen situaciones similares, por ejemplo, si desean migrar a la nube pública pero no confían en que proteja sus datos sensibles. Con SGX, no necesitan confiar en el proveedor.

Intel acaba de hacer un gran anuncio este mes y realmente estamos abriendo las puertas a las cosas que se avecinan. Un buen lugar para comenzar es intel.com/sgx para testimonios y una exploración más profunda de la información. Los clientes deben buscar socios del ecosistema como Azure y Fortanix. Otro lugar para obtener información es el Consorcio de Informática Confidencial debido a la cantidad de personas que trabajan en ese ámbito.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
