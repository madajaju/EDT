---
layout: default
title: Episodes
parent: English
lang: en
nav_order: 3
has_children: true
child_nav_order: reversed
---

# Episodes

{% assign spages = site.pages | where: "layout", "posts" | where "lang", "en" | sort: "nav_order" %}
{% for spage in spages %}
<div style="display: flex;">
    <p class="episode">
    <img class="thumbnail" src="../../{{ spage.path | remove: spage.name }}/{{ spage.img }}" width="128" height="128">
    <a href="{{ spage.url }}">{{ spage.number}} - {{ spage.title }}</a><br>
    {{ spage.summary }}
    </p>
</div>
{% endfor %}
