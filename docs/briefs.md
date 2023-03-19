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

{% assign sortedPages = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'brief' | where: 'lang': 'en' %}
{% for page in sortedPages limit:5 %}
{% 
<div style="display:flex;">
<p class="episode">
    <a href="{{ page.url }}">{{ page.title }}</a><br>
</p>
</div>
{% endfor %}
