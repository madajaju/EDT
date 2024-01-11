---
layout: default
title: Noticias Semanales
has_children: true
parent: Español
nav_order: 2
lang: es
child_nav_order: reversed
---

# Noticias Semanales 

Estamos en plena revolución digital. Durante este tiempo, puede resultar desafiante filtrar toda la exageración y encontrar lo que funciona, lo que sigue siendo viable dentro de dos años y lo que contribuye a tu organización. Muchas organizaciones de TI necesitan ayuda con mensajes confusos y tecnologías contradictorias. Nosotros ayudamos a las organizaciones a separar el ruido y abrazar la transformación digital. El mundo de la transformación digital está en constante cambio y necesitas saber qué es viable hoy en día. Escucha nuestro podcast semanal para conocer las últimas noticias en ciberseguridad, comunicaciones avanzadas, gestión de datos, inteligencia artificial, edge y computación en la nube.

<style>
/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 49%;
  padding: 10px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>

<style>
.thumbnail {
    float: left;
    margin: 0 15px 0 0;
}
.episode {
    margin: 10px 0;
}
</style>

{% assign spages = site.pages | where: "layout", "brief" | where: "lang", "es" | sort: "nav_order" | reverse %}
{% for spage in spages %}
<div style="display: flex;">
    <p class="episode">
    <img class="thumbnail" src="../../{{ spage.path | remove: spage.name }}/{{ spage.img }}" width="100" height="100">
    <a href="{{ spage.url }}">{{ spage.number}} - {{ spage.title }}</a><br>
    {{ spage.summary }}
    </p>
</div>
{% endfor %}
