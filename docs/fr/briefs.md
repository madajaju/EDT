---
layout: default
title: Français
has_children: true
ref: français
parent: Weekly Briefs
lang: fr
child_nav_order: reversed
---

# Nouvelles hebdomadaires

TBD

##  Nouvelles hebdomadaires Blogs

<ul>
{% assign sortedPages = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'brief' | where: 'lang', 'fr' %}
{% for page in sortedPages limit:5 %}
    <li><a href="{{ page.url }}">{{ page.title }}</a> - {{ page.tags | join: ', ' }} </li>
{% endfor %}
</ul>
