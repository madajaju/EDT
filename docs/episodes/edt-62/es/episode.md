---
layout: posts
title: "Desmitificando 5G, Edge y AI"
number: 62
permalink: episode-EDT62-es
has_children: false
lang: es
parent: Episodios
grand_parent: Español
nav_order: 62
tags:
    - edge
    - compute
    - 5g
    - aiml
    - iot

date: Wed Aug 18 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Arquitecto Jefe de Soluciones, Intel, habla sobre los cambios innovadores que el 5G traerá al borde y a la inteligencia artificial junto con la Dra. Anna Scott, Arquitecta Jefe de Borde, Intel."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquitecto Jefe de Soluciones, Intel, habla sobre los cambios innovadores que el 5G traerá al borde y a la inteligencia artificial junto con la Dra. Anna Scott, Arquitecta Jefe de Borde, Intel."
---

<div>
{% include transistor.html id="50847ff2" title="#62 Demystifying 5G, Edge and AI" %}

{% include youtube.html id="url" %}
</div>

---

El historial de Anna está en el sector industrial y manufacturero de la información. Tiene un doctorado en ingeniería química, así como un MBA. Pasó 15 años trabajando como ingeniera de procesos y diseño, luego se dedicó al trabajo de inicio y la gestión de ingeniería. Ha estado en Intel durante poco más de seis años, los últimos dos y medio trabajando en el equipo del sector público donde apoya principalmente las actividades de IoT y Edge de Intel, con una participación cada vez mayor en 5G debido a que el 5G, junto con la IA, está cambiando drásticamente ese espacio.

## Transformación de red fundamental para la infraestructura 5G.

En el mundo industrial, el IoT no era nada nuevo, simplemente estaba conectado por cable. Con los sistemas ahora pasando a inalámbricos, se tiene la estrecha unión de IT más OT para convertir análisis, en lugar de solo tener un conjunto de datos de proceso específicos de ese mundo OT. Ahora se unen diferentes conjuntos de sistemas con el negocio, por lo que todo esto se está integrando en el mismo espacio. Aunque hay diferencias muy definidas en casos de uso y arquitecturas en el sector público, como el militar y las ciudades inteligentes, existe una convergencia común en el análisis, aplicación y período de tiempo para tomar mejores decisiones empresariales.

Una de las razones por las cuales el IoT ha tardado tanto en expandirse más allá de la fabricación y en llegar a otras áreas es principalmente el costo de enlace físico. La seguridad también ha sido un obstáculo.

5G ahora está desatando el Internet de las cosas (IoT) y el mundo de la periferia (edge), debido a su efectividad en costos, especialmente en el lado del consumidor. Sin embargo, cuando se trata de la infraestructura empresarial crítica, la conversación es diferente sobre cómo hacerlo de una manera que proteja los datos. 5G será transformador, pero aún no está sucediendo en el lado comercial. Parte de la brecha se debe al retraso entre la publicación de los estándares y la producción del hardware necesario para aprovechar esos estándares.

Para cualquiera que haya pasado mucho tiempo con 3GPP u otros organismos de estándares de conducción, este cronograma no es inesperado. En este momento puedes implementar una red 5G, pero estamos en la etapa de realizar bancos de pruebas donde tenemos que demostrar el valor de 5G. Necesitamos mostrar nuevos casos de uso que no pueden ser respaldados por LTE o por 4G.

## Múltiples modelos de implementación 5G ofrecen flexibilidad.

¿Por qué no quedarse simplemente con WiFi 6 en lugar de utilizar 5G? La respuesta es complicada. Muchas de las organizaciones de estándares que impulsaban el 5G también impulsaban el WiFi 6, por lo que es una tecnología complementaria. La diferencia está en el equipo, por lo que necesitas conocer los detalles de tus casos de uso para determinar cuál sería más rentable. Por ejemplo, el 5G es impresionante, pero no sería lo mejor poner una red 5G en un crucero porque la penetración no sería suficiente. El entorno no es favorable para ningún tipo de señal inalámbrica, pero el WiFi 6 con puntos de acceso tiene más sentido.

5G es convincente, sin embargo, por varias razones y puede hacer cosas que 4G y LTE no pueden. Para realidad aumentada y realidad virtual, necesitas una latencia muy baja y un ancho de banda alto para permitir casos de uso más interactivos, por ejemplo, reparación de equipos o máquinas. Necesitas un experto remoto que esté mirando un problema y pueda hacer transmisión de video y audio con superposición de dibujos y capacidades que se estén gestionando desde una ubicación central o remota que esté llevando todo ese conocimiento y experiencia directamente al punto en el que estás intentando trabajar. Ese tipo de caso de uso no se puede realizar a través de una red LTE. El ancho de banda juega un papel, pero la latencia es la fuerza impulsora. Para no enfermarse mientras se usa un auricular, debes tener latencias realmente bajas sin retraso o hacer que las cosas sean asíncronas.

El mundo LTE y 4G ha cambiado debido al 5G debido a cómo se ha gestionado el espectro. Un área donde esto está cambiando en la industria es que ahora es posible para una empresa obtener una licencia prioritaria para el espectro CBRS y establecer su propia red privada, completamente separada de las principales empresas de telecomunicaciones federales. Por ejemplo, un gran fabricante puede cubrir un espacio enorme de manera más rentable con una red LTE privada que con puntos de acceso. También existen grandes beneficios, como si desea reconfigurar su espacio y no desea que todas sus estaciones de trabajo estén conectadas por cable, o si tiene que mover piezas enormes de metal, como el fuselaje de un avión, en su espacio que podrían interferir con las señales WiFi, puede establecer la infraestructura para que sea portátil y no esté fija en ubicaciones con cableado.

La seguridad es una preocupación fundamental para cualquier organización. Aunque no se escribió el 5G teniendo en cuenta la seguridad, el 6G sí lo hará. Afortunadamente, con las capacidades del 5G, podemos hacer mucho en torno a la red de confianza cero y otras medidas de seguridad que infundirán confianza a los clientes sobre cómo sus datos se están trasladando a través de las redes.

Los estándares de 5G han cambiado el problema de hace unos años cuando la infraestructura inalámbrica existía en hardware y software propietario, con un espectro licenciado que solo unas pocas empresas podían permitirse. La red definida por software permite tener la capacidad de alojar la infraestructura de red en hardware común y disponible en tiendas. No hay necesidad de hardware especializado como en generaciones anteriores. Esto también está sucediendo en el lado de LTE, por ejemplo, al hacer disponible el espectro CBRS y alejarse del hardware y software propietario.

Intel pasa mucho tiempo trabajando con disruptores que están utilizando nuestra arquitectura de referencia FlexRAN. La arquitectura FlexRAN se convierte en la base para ayudar a proliferar la tecnología disruptiva en el nuevo mercado 5G porque proporciona una pila de software 5G que se ejecuta en hardware común y disponible en el mercado, donde antes se requería hardware propietario. Ahora hay un espacio con mucha más apertura y portabilidad, y el costo de entrada es mucho más barato que antes. Ya no son solo unas pocas empresas las que controlan todo. Intel y otros están tratando de abrirlo todo y aprovechar los estándares abiertos para apoyar a todos estos disruptores y cambiar toda la dinámica.

## 5G Espectro y Regulación para las Redes del Mañana.

Con una conectividad mejorada, baja latencia y alta capacidad de banda ancha, muchos nuevos casos de uso estarán disponibles. Cómo se monetizará el 5G es lo que está cambiando en todo el mercado. Por ejemplo, un proveedor de servicios en la nube junto con una empresa de telecomunicaciones pueden proporcionar mejores servicios a sus clientes porque ya no están aislados. Son un esfuerzo empresarial conjunto de lo que realmente importa: calidad y priorización. Otra forma de ver esto es que los proveedores de servicios en la nube están adquiriendo capacidades que van a abrir funcionalidades de red de la misma manera que las empresas de telecomunicaciones están explorando lo que pueden hacer en el lado de la nube. Nuevamente, esto se debe a que el aislamiento se ha derribado; el conducto de datos ya no es un conjunto de servicios.

No está claro cómo va a terminar todo esto, excepto que está redefiniendo qué tipo de trabajo puedes hacer debido a la accesibilidad de los datos y dónde van a residir esas cargas de trabajo. Existe un enorme valor en trasladarse de la periferia a la nube de manera fluida y hacerlo de una manera basada en las necesidades del cliente, lo cual ahora es posible.

## Un nuevo paradigma informático respalda nuevas demandas de datos.

5G está desatando muchos modelos arquitectónicos diferentes. Por ejemplo, ofrece dos opciones de arquitectura para la inteligencia artificial, mientras que antes solo había una con limitaciones.

Sin el ancho de banda ofrecido por la tecnología 5G, la inteligencia artificial estaba limitada a la inferencia en dispositivos periféricos, lo que requería enviar los modelos de IA a esos dispositivos periféricos. Esta restricción engorrosa aumentaba el ciclo de desarrollo y despliegue de la IA, además de limitar la cantidad de cargas de trabajo de IA que se pueden aprovechar en el borde. Con un aumento en el ancho de banda, se pueden enviar grandes flujos de datos provenientes de cámaras o sensores a un centro de datos, lo que permite ejecutar múltiples cargas de trabajo de IA y facilita el aprendizaje continuo de la IA. Esto brinda a las organizaciones la oportunidad de realizar tanto inferencia en el borde como mejorar el aprendizaje profundo, necesario para cumplir con las demandas en constante cambio de los datos de tantas organizaciones.

Con AR, por ejemplo, 5G significa que los auriculares pueden ser móviles en lugar de estar conectados con las mismas capacidades, ya que el 5G permite compartir conjuntos de datos más grandes en un mundo sin ataduras. Los centros de datos tradicionales están siendo derribados.

Si no tienes mucho soporte técnico o conocimiento detallado de cómo mantener tus sistemas en funcionamiento, puedes ejecutarlo todo en la nube. Si no quieres que tus datos estén en la nube, puedes hacer una versión que esté en las instalaciones a través de una red privada que te brinde todo tipo de funcionalidades para agregar y correlacionar datos y proporcionar una comprensión de alto nivel de lo que está sucediendo en tu sistema de manera segura y rentable.

Básicamente, ahora tus datos pueden residir en el borde, en la nube, en las instalaciones o en lo que Cisco llama la niebla. Ya no importa dónde se ejecute tu aplicación, por lo que puedes utilizar el modelo más rentable. En espacios industriales, por ejemplo, hay grandes ahorros al no tener un componente de cableado fijo o al utilizar una estructura privada de LTE en lugar de puntos de acceso WiFi. Reducir este tipo de costos permitirá tener datos muy completos. Estas barreras de costos y conectividad física son lo que ha faltado para que IoT despegue de la forma en que todos predijeron.

Anna predice que en los próximos dos años, para las aplicaciones que no sean de control, será diferente debido a 5G. Un ejemplo simple es que en la industria, alguien podría sacar su PC regular de la oficina y llevarlo al suelo de la fábrica y poder hacer todo ahí. 5G cambiará lo que es posible en relación a los controles y a hacer el control de robots y máquinas a través de una red inalámbrica en los próximos cinco años. El siguiente nivel de transformación será poder hacer el control a través de una red inalámbrica y hacerlo de manera segura y efectiva, sin poner en riesgo a nadie. Esto requerirá mucha validación y rigurosidad en la revisión, pero está en el horizonte.

También será emocionante ver qué harán juntos tu proveedor de servicios en la nube y tu proveedor de telecomunicaciones para cambiar lo que es posible desde el punto de vista de los servicios.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
