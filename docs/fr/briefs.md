---
layout: default
title: Nouvelles Hebdomadaires
has_children: true
parent: Français
nav_order: 2
lang: fr
child_nav_order: reversed
---

# Nouvelles hebdomadaires

Ci troviamo nel pieno della rivoluzione digitale. Durante questo periodo, può essere difficile districarsi tra tutte le promesse e scoprire cosa funziona, cosa sarà ancora valido fra due anni e cosa contribuisce alla tua organizzazione. Molte organizzazioni IT hanno bisogno di aiuto per comprendere messaggi confusi e tecnologie in conflitto. Noi aiutiamo le organizzazioni a fare chiarezza e abbracciare la trasformazione digitale. Il mondo della trasformazione digitale è in continua evoluzione e devi sapere cosa è fattibile oggi. Ascolta il nostro podcast settimanale per le ultime notizie sulla sicurezza informatica, le comunicazioni avanzate, la gestione dei dati, l'intelligenza artificiale, il cloud computing e la tecnologia edge.

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
.episode:hover {
    background-color: #cceeff;
}
</style>
{% assign spages = site.pages | where: "layout", "brief" | where: "lang", "fr" | sort: "nav_order" | reverse %}
{% for spage in spages %}
<div style="display: flex;">
    <p class="episode">
    <img class="thumbnail" src="../../{{ spage.path | remove: spage.name }}/{{ spage.img }}" width="100" height="100">
    <a href="{{ spage.url }}">{{ spage.number}} - {{ spage.title }}</a><br>
    {{ spage.summary }}
    </p>
</div>
{% endfor %}
