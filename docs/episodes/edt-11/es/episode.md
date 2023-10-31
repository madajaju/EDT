---
layout: posts
title: "Enseñanza y Aprendizaje a Distancia"
number: 11
permalink: episode-EDT11-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 11
tags:
    - remotelearning
    - compute
    - technology
    - people
    - edge
    - telelearning

date: Tue Aug 11 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Erin Moseley
    - Grant Kelly

img: thumbnail.png
image: thumbnail.png
summary: "En este episodio, Erin Moseley, Ejecutiva de Cuentas Sr. para Educación en Intel, y Grant Kelly, Arquitecto de Soluciones para Educación en Intel, se unen a Darren para hablar sobre los desafíos del aprendizaje y enseñanza a distancia y los cambios abrumadores que los distritos escolares, maestros, padres y estudiantes están enfrentando durante la pandemia de Covid-19. Descubre cómo los estudiantes y maestros se están conectando con nuevas tecnologías y formas de aprendizaje."
video: "https://youtu.be/b-PT-b0W4Q4"
description: "En este episodio, Erin Moseley, Ejecutiva de Cuentas Sr. para Educación en Intel, y Grant Kelly, Arquitecto de Soluciones para Educación en Intel, se unen a Darren para hablar sobre los desafíos del aprendizaje y enseñanza a distancia y los cambios abrumadores que los distritos escolares, maestros, padres y estudiantes están enfrentando durante la pandemia de Covid-19. Descubre cómo los estudiantes y maestros se están conectando con nuevas tecnologías y formas de aprendizaje."
---

<div>
{% include transistor.html id="e48d397d" title="#11 Distance Teaching and Learning" %}

{% include youtube.html id="b-PT-b0W4Q4" %}
</div>

---

## Consideraciones emergentes

Los profesores, el personal, los padres y los estudiantes enfrentan diversos desafíos en el cambio repentino al aprendizaje a distancia. En el ámbito de la tecnología de la información para los distritos escolares, hay una serie de consideraciones emergentes. ¿Qué hacemos con el escenario de traer su propio dispositivo (BYOD) proveniente de redes de confianza cero? ¿Cómo protegemos la privacidad y gestionamos la seguridad con todos los nuevos modos de comunicación entre profesores, personal, padres y estudiantes? ¿Cómo mantenemos una experiencia de clase fluida y gestionada? ¿Cómo ofrecemos apoyo cuando no existe una estructura de servicio de ayuda tradicional? Además, no podemos olvidar que existe un aspecto social importante que debe impulsar una experiencia sin problemas. Un estudiante de tercer grado distraído por problemas técnicos cuando necesitan conectarse con profesores y compañeros tendrá una experiencia de aprendizaje a distancia disminuida.

## Sistemas de servicios y plataformas para educación.

Siempre ha existido complejidad con todas las diferentes capas de servicios y plataformas, por ejemplo, el conjunto de productividad con G Suite y Office 365. La pregunta ahora es qué podemos hacer con los sistemas de gestión del aprendizaje en este enfoque en capas en la integración del sistema de información estudiantil. Debemos analizar cómo estamos aprovechando nuestras capacidades en cuanto a escalabilidad. Debemos considerar diferentes soluciones de infraestructura como servicio (IAAS) y plataforma como servicio (PAAS), servicios de almacenamiento, privacidad y seguridad, y, por supuesto, las plataformas subyacentes que impulsan todo esto.

Anteriormente, las herramientas de conferencias y colaboración tenían un uso limitado, tal vez para incluir a un orador invitado, por ejemplo. Sin embargo, ahora se utilizan ampliamente como herramientas principales y han añadido complejidad al sistema.

## Opciones de alojamiento de servicio

Hay dos modos principales que se utilizan para acceder a los servicios: el dispositivo como un portal para los servicios (software, infraestructura o plataforma) y el dispositivo como parte de la red interna. Anteriormente, la mayoría caía bajo la última categoría, donde había preocupaciones limitadas acerca de cosas como la actualización y el cumplimiento de políticas porque los dispositivos se encontraban constantemente conectados a los sitios internos de la escuela, independientemente de si eran dispositivos traídos por el alumno o pertenecientes al distrito. Ahora, con los diferentes tipos de conectividad, debemos preocuparnos por la escalabilidad del ancho de banda y cómo implementarlo.

## Dispositivo como Portal de Servicios.

Plataformas como G Suite, Office 365 y aquellas para la videoconferencia y colaboración son una preocupación, ya que crean dependencia en un tercero. Los distritos escolares no tienen control sobre la seguridad, privacidad y rendimiento. Es importante reconocer que la conexión a estos servicios en la nube se conecta de vuelta al host interno, ya sea un nube privada o un centro de datos físico, que tiene servicios subyacentes de gestión de identidad, sistemas de información de estudiantes, posibles filtros de contenido, etc. Sin embargo, los beneficios son una disminución del tráfico de entrada al centro de datos y una escalabilidad y gestionabilidad inherentes.

## Dispositivo como parte de la red/nube privada

Implementar una red privada virtual (VPN) es una idea nueva para la mayoría de los distritos escolares. Las empresas han estado utilizando VPNs desde hace algún tiempo, y los distritos escolares pueden tener que seguir su ejemplo para satisfacer las nuevas necesidades del aprendizaje a distancia. Algunos inconvenientes de una VPN son la congestión de la red, la escalabilidad y el tráfico de redes de confianza cero. El principal beneficio es que funciona como una extensión de la red interna, por lo que la gestión de seguridad y la encriptación del tráfico se extienden a los clientes de VPN. La accesibilidad a todos los servicios necesarios internamente es otro gran beneficio.

## Emergentes cuellos de botella

Los cuellos de botella se ven diferentes para el aprendizaje a distancia. Para las empresas, cuando la fuerza laboral se volvió virtual, se esperaba una carga VPN del 10%. Para la educación, ese número será significativamente mayor, creando un posible cuello de botella de VPN. La escalabilidad de los servicios de alojamiento es otra área a considerar. Incluso si los servicios se encuentran en una nube pública, se conectan a una nube privada o a un centro de datos local para cosas como SSO, información del estudiante, tráfico e incluso filtrado de contenido. El ancho de banda dedicado de acceso a internet, así como la forma en que se maneja la transferencia de banda ancha en el centro de datos, son consideraciones importantes.

El acceso a un componente de mesa de ayuda también debe ser escalable para evitar cuellos de botella.

La preocupación principal de los distritos escolares en la actualidad, sin embargo, es lograr que todos sus estudiantes tengan acceso. Para algunos estudiantes, hay un cuello de botella simplemente para acceder a Internet en casa. Cuando este problema se suma a todas las diferentes capas, los cuellos de botella emergentes se vuelven muy complejos.

Para enfrentar estos posibles problemas, los distritos escolares deben tomar el tiempo y los recursos necesarios para crear una sólida arquitectura que sea resistente en lugar de construir un desorden apresurado de espaguetis.

## Escalabilidad<h3>

Históricamente, los distritos escolares han escalado en el centro de datos y han escalado algunos de esos servicios a los sitios escolares. Entonces, la arquitectura generalmente existe en términos de acomodar la agregación de docentes, personal y estudiantes para cosas como autenticación, gestión de parches, distribución de software, etc. Ahora que la expansión se maneja en el aula virtual, nos lleva de vuelta a escalar servicios en el centro de datos.

## Encontrando el equilibrio

Antes, solo estaban en juego los dos factores de on-prem en la oficina central del centro de datos y los enlaces de LAN a los sitios escolares. Ahora hay un factor adicional de acomodar todas las aulas virtuales, es decir, cada sala de estar de los estudiantes y profesores. ¿Cómo lo acomodamos? Se reduce al concepto principal de encontrar el equilibrio entre lo que necesitas para tu distrito escolar. Cada distrito es diferente en tamaño y alfabetización tecnológica, y hay muchas partes móviles.

## Abordando cuellos de botella

¿Qué puede hacer Intel para ayudar a resolver los cuellos de botella que hemos identificado?

Gestión de endpoints y seguridad de endpoints es donde entra en juego el servicio de asistencia técnica de TI. Estamos explorando formas de poder ofrecer soporte de manera remota en lugar de realizar visitas regulares a los sitios escolares.

Podemos analizar el centro de datos y la infraestructura y desarrollar una estrategia que nos permita escalar la red definida por software y la infraestructura. Además, también podemos integrar el aumento en la nube de infraestructura como servicio, todo teniendo en cuenta los patrones de tráfico.

## Componentes Intel para abordar cuellos de botella

Intel puede ayudar en tres principales categorías: computación, almacenamiento y red. Cuando analizamos el fortalecimiento de la infraestructura definida por software y las consideraciones importantes, gira en torno a ese equipo informático con procesadores de Intel, productos de almacenamiento y capacidades de red. En lugar de estar limitados por interfaces físicas y dispositivos, la infraestructura definida por software puede escalar y añadir otros recursos de computación, almacenamiento y red. Nadie sabe a ciencia cierta cómo será el panorama cuando regresemos a la escuela, y esta infraestructura definida por software es dinámica y proporcionará la mayor flexibilidad.

Hay muchas opciones para que los distritos escolares construyan un entorno viable y seguro para el aprendizaje a distancia. Aunque tocamos los temas de privacidad y amenazas de seguridad y soluciones en este episodio, la próxima vez profundizaremos en estos temas importantes.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
