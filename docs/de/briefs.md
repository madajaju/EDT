---
layout: default
title: Wöchentliche Nachrichten
has_children: true
parent: Deutsch
lang: de
child_nav_order: reversed
nav_order: 2
---

<style>
/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 48%;
  padding: 9px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>



<img src="./de.jpeg" width="128" height="128">

{% include subscribe_brief.html %}

# Wöchentliche Nachrichten

Wir befinden uns mitten in der digitalen Revolution. In dieser Zeit kann es herausfordernd sein, zwischen all dem Hype herauszufiltern, was funktioniert, was auch noch in zwei Jahren relevant ist und was zu Ihrer Organisation beiträgt. Viele IT-Organisationen benötigen Unterstützung bei verwirrenden Botschaften und widersprüchlichen Technologien. Wir helfen Organisationen dabei, den Rummel zu sortieren und die digitale Transformation zu begrüßen. Die Welt der digitalen Transformation verändert sich ständig, und Sie müssen wissen, was heute machbar ist. Hören Sie unseren wöchentlichen Podcast, um die neuesten Nachrichten aus den Bereichen Cybersicherheit, fortschrittliche Kommunikation, Datenmanagement, künstliche Intelligenz, Edge-Computing und Cloud Computing zu erfahren.

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

{% assign spages = site.pages | where: "layout", "brief" | where: "lang", "de" | sort: "nav_order" | reverse %}
{% for spage in spages %}
<div style="display: flex;">
    <p class="episode">
    <img class="thumbnail" src="../../{{ spage.path | remove: spage.name }}/{{ spage.img }}" width="100" height="100">
    <a href="{{ spage.url }}">{{ spage.number}} - {{ spage.title }}</a><br>
    {{ spage.summary }}
    </p>
</div>
{% endfor %}
