---
layout: default
title: Deutsch
has_children: true
parent: Weekly Briefs
ref: Deutsch
lang: de
child_nav_order: reversed
---

# Wöchentliche Nachrichten

TBD

## Wöchentliche Nachrichten Blogs

<ul>
{% assign sortedPages = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'brief' | where: 'lang': 'fr' %}
{% for page in sortedPages limit:5 %}
    <li><a href="{{ page.url }}">{{ page.title }}</a> - {{ page.tags | join: ', ' }} </li>
{% endfor %}
</ul>
