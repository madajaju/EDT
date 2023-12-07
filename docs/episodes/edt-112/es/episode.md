---
layout: posts
title: "Mitos de la migración a la nube de Lift and Shift"
number: 112
permalink: episode-EDT112-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 112
tags:
    - multicloud
    - cloudmigration
    - cloud
    - compute
    - process
    - technology

date: Mon Nov 14 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - John Evans

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquitecto Principal de Soluciones, Sector Público, Intel, y John Evans, Asesor Principal de Tecnología, WWT, discuten cinco mitos de migración de la nube "lift and shift"."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquitecto Principal de Soluciones, Sector Público, Intel, y John Evans, Asesor Principal de Tecnología, WWT, discuten cinco mitos de migración de la nube "lift and shift"."
---

<div>
{% include transistor.html id="cfd34037" title="#112 Myths of Lift and Shift Cloud Migration" %}

{% include youtube.html id="url" %}
</div>

---

John comenzó su carrera en tecnología en el servicio de atención al cliente de un importante contratista de defensa hace 20 años. A medida que avanzaba en su carrera, se adentró en la ciberseguridad y la arquitectura empresarial. Trabajó como contratista para la Agencia de Sistemas de Información de Defensa (DISA), donde fue el arquitecto principal de la nube DISA del Departamento de Defensa. Finalmente, el estado de Maryland lo contrató para liderar los esfuerzos de transformación digital del estado, incluida la migración a la nube. Esa migración fue la más grande que se haya realizado en la educación estatal y local.

Después de eso, pasó a ocupar el puesto de Oficial Principal de Seguridad de la Información (CISO) del estado, supervisando operaciones de alto nivel, seguridad y gobernabilidad. Abandonó el servicio gubernamental y se unió a WWT hace aproximadamente tres años. Trabaja principalmente en educación estatal y local, aunque también brinda ayuda en otras áreas del sector público.

## Mito Uno - La nube es más barata

La nube no es necesariamente más barata que un entorno local. Las aplicaciones heredadas fueron construidas para el entorno local, por lo que no hay problemas con la autoescalabilidad. Es un modelo basado en el consumo y ya existen costos hundidos, como los servidores. La mayoría de los productos diseñados para ayudar a las organizaciones a trasladar las aplicaciones a la nube no admiten la autoescalabilidad, por lo que cuando se ven obligados a utilizar la nube, ahora deben estar siempre provisionados al máximo, lo que no se traduce a menudo en ahorros de costos. Es probable que los clientes estén pagando más de lo que pagaban por las mismas capacidades en el entorno local.

Cuando Darren trabajaba con el gobierno canadiense, trasladaron una instancia de SAP a la nube. Estaba totalmente aprovisionada, funcionando las 24 horas del día, los 7 días de la semana, y agotaron su presupuesto en solo seis meses. Cuando descubrieron este problema, lo encendieron y apagaron todos los días, ya que la instancia no necesitaba estar en funcionamiento las 24 horas del día. Ahorraron mucho dinero al reducir el tiempo a 14-16 horas al día.

El acceso debe estar disponible en todo momento en un departamento como Salud y Servicios Humanos, que suele ser el más grande en el presupuesto de TI de un estado, pero es posible reducirlo a una instancia menor durante las horas no laborables para ahorrar dinero.

Los proveedores de servicios en la nube (CSP) ahora ofrecen servicios nativos de la nube que son cumplidos por una aplicación de terceros o un producto de OEM que puede proporcionar una capacidad similar con ahorro de costos. Esto no funcionará con todo, ya que algunas aplicaciones heredadas no están desarrolladas para aprovechar algunas de las aplicaciones nativas de la nube. Sería mejor tener cuidado al quedar atrapado en una nube específica. Por ejemplo, si utiliza servicios propietarios de AWS, podría ser difícil extraer una aplicación y trasladarla a Azure y viceversa.

John aconseja a las organizaciones preguntarse si tiene sentido mudarse a la nube. No es una buena razón mudarse a la nube solo porque pienses que deberías hacerlo. Podrías terminar con gastos elevados, y con superiores y trabajadores frustrados porque la estrategia no fue completamente analizada.

## Mito Dos - La Nube Borra la Deuda Técnica

Mudarse a la nube no elimina la deuda técnica en casi ningún caso. Expone y acelera la deuda. Encontrarás puntos de exposición si tomas algo que ha estado funcionando durante 30 años y lo trasladas a un nuevo entorno. La parte de aceleración es que ahora tienes más deuda técnica de la que preocuparte, ahora que está expuesta.

La deuda técnica significa que tienes sistemas que se están quedando atrás de lo que deberían ser. Por ejemplo, cuando John comenzó a trabajar en Maryland, algunos sistemas aún funcionaban en pantallas verdes. Era fácil de usar para los empleados actuales, pero representaba una curva de aprendizaje empinada para los nuevos usuarios. Aunque el sistema había estado funcionando durante muchos años, el inconveniente de esta deuda técnica es la cantidad de capacitación necesaria y la retención de empleados. Las generaciones más recientes que ingresan a la fuerza laboral, y que están familiarizadas con las últimas tendencias y desarrollos, no quieren lidiar con aplicaciones heredadas.

La deuda técnica también implica problemas de seguridad. Si una aplicación heredada no ha sido actualizada, es posible que no puedas aplicar parches por miedo a que se rompa. Esto crea vulnerabilidades de seguridad que debes aceptar hasta que salgas del ciclo de deuda técnica.

Una reacción común en una organización es añadir un poco de código extra cuando sea necesario para adaptarse, por ejemplo, a un cambio en la legislatura estatal. Esto no soluciona un problema; en cambio, el sistema termina con mucho código enredado, lo que lo hace imposible recrear el sistema para una actualización. Uno de los conceptos en la nube es descomponer tu sistema en módulos o microservicios, pero el código enredado no permite esto, ya que no puedes simplemente sacar una parte de él.

Esto hace que las organizaciones sean aún más reacias a modernizarse porque han estado haciendo las cosas de manera incorrecta durante todos estos años. Cuando algo se rompe y se convierte en el incentivo para este cambio, resulta aún más desafiante.

A veces puede tener sentido desechar el antiguo sistema y comenzar desde cero. Esto es costoso y debes tener el nuevo sistema antes de descartar el antiguo sistema. Sin embargo, para algunas organizaciones, como los estados, que pueden obtener financiamiento federal para departamentos como Salud y Servicios Humanos, podría ser la mejor opción. En una situación como esta, también puedes evaluar el beneficio de la reutilización, como plantillas y estructuras de gobierno para otros departamentos.

## Mito Tres - La Nube es Segura

Mudarse a la nube no necesariamente facilita la seguridad de las aplicaciones, aunque no tienes que preocuparte por la seguridad física o los hipervisores, por ejemplo. Los proveedores de la nube tienen un modelo de responsabilidad compartida en varias formas. Debes entender qué eres responsable con cada proveedor y qué son responsables ellos. No solo cambia con el proveedor, sino también con los servicios que consumes. Esto puede hacer que la seguridad sea más compleja para tus equipos de seguridad, ya que deben estar al tanto de todas las diferentes variaciones entre proveedores y servicios.

## Mito Cuatro - La Nube es Fácil

La migración a la nube es compleja. De hecho, es más fácil ejecutar todo en su propio centro de datos, no conectado a Internet. La seguridad es más sencilla de esta forma y los modelos de costos son simples. Sin embargo, no puedes crecer. No puedes proporcionar servicios a tus constituyentes o clientes y no puedes satisfacer las necesidades de tu misión, entre otros problemas. El mundo es complejo y la migración a la nube es complicada.

## Mito Cinco: No es necesario adquirir nuevas habilidades.

Una brecha de conocimiento también puede contribuir a los puntos de dolor en torno a esa complejidad. Los desarrolladores de software y otros especialistas en TI deben cambiar la forma en que piensan sobre la informática en la nube, especialmente en lo que respecta a la seguridad. Por ejemplo, los desarrolladores de software no deberían estar creando instancias en la nube donde quieran o descargando cosas de GitHub u otros repositorios, tomando bibliotecas para que funcionen las cosas. Esto abre todas las reglas del firewall porque pueden no elegir correctamente. Se deben implementar barreras de protección al mudarse a la nube, lo cual requiere cambios. Trabajar en la nube requiere un conjunto de habilidades y una mentalidad diferentes. Lo más importante es que debes encontrar mejores formas de gestionar la seguridad con ransomware sofisticado y ataques cibernéticos.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
