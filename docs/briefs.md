---
layout: default
title: Weekly Briefs
has_children: true
child_nav_order: reversed
---

# Digital Transformation This Week

<div>
<iframe width="100%" height="390" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/embracing-digital-this-week/playlist"></iframe>
</div>

<ul>
{% assign sortedPages = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'brief' | where: 'lang': 'en' %}
{% for page in sortedPages limit:5 %}
    <li><a href="{{ page.url }}">{{ page.title }}</a> - Weekly Brief about {{ page.tags | join: ',' }} </li>
{% endfor %}
</ul>
