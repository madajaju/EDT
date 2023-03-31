---
layout: default
title: Española
has_children: true
parent: Weekly Briefs
ref: española
lang: es
child_nav_order: reversed
---

# Noticias semanales 

<div>
<iframe width="100%" height="390" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/abrazando-lo-digital-esta-semana/playlist"></iframe>
</div>

##  Noticias semanales Blogs

<ul>
{% assign sortedPages = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'brief' | where: 'lang', 'es' %}
{% for page in sortedPages limit:5 %}
    <li><a href="{{ page.url }}">{{ page.title }}</a> - {{ page.tags | join: ', ' }} </li>
{% endfor %}
</ul>
