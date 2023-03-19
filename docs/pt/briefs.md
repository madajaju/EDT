---
layout: default
title: Português
has_children: true
ref: português 
parent: Weekly Briefs
lang: pt
child_nav_order: reversed
---

# Notícias Semanais 

TBD

## Notícias Semanais Blogs
<ul>
{% assign sortedPages = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'brief' | where: 'lang': 'pt' %}
{% for page in sortedPages limit:5 %}
    <li><a href="{{ page.url }}">{{ page.title }}</a> - {{ page.tags | join: ', ' }} </li>
{% endfor %}
</ul>
