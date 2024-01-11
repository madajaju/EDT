---
layout: default
title: Episodios
parent: Español
has_children: true
lang: es
nav_order: 3
child_nav_order: reversed
---

# Episodios 

{% assign spages = site.pages | where: "layout", "posts" | where: "lang", "es" | sort: "nav_order" | reverse %}
{% for spage in spages %}
<div style="display: flex;">
    <p class="episode">
    <img class="thumbnail" src="../../{{ spage.path | remove: spage.name }}/{{ spage.img }}" width="100" height="100">
    <a href="{{ spage.url }}">{{ spage.number}} - {{ spage.title }}</a><br>
    {{ spage.summary }}
    </p>
</div>
{% endfor %}
