---
layout: default
title: English
has_children: true
parent: Weekly Briefs
ref: english
lang: en
child_nav_order: reversed
---

# Weekly Briefs

<div>
<iframe width="100%" height="390" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/embracing-digital-this-week/playlist"></iframe>
</div>

## Weekly Brief Blogs

<ul>
{% assign sortedPages = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'brief' | where: 'lang': 'en' %}
{% for page in sortedPages limit:5 %}
    <li><a href="{{ page.url }}">{{ page.title }}</a> - {{ page.tags | join: ', ' }} </li>
{% endfor %}
</ul>
