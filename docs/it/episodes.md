---
layout: default
title: Episodi
parent: Italiano
lang: it
nav_order: 3
has_children: true
child_nav_order: reversed
---

# Episodi

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
{% assign spages = site.pages | where: "layout", "posts" | where: "lang", "it" | sort: "nav_order" | reverse %}
{% for spage in spages %}
<div style="display: flex;">
    <p class="episode">
    <img class="thumbnail" src="../../{{ spage.path | remove: spage.name }}/{{ spage.img }}" width="100" height="100">
    <a href="{{ spage.url }}">{{ spage.number}} - {{ spage.title }}</a><br>
    {{ spage.summary }}
    </p>
</div>
{% endfor %}
