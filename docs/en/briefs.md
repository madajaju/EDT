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

{% assign sortedPages = site.pages | sort: 'nav_order' | reverse %}
{% for page in sortedPages %}
{% if page.layout == "brief" && page.lang == "en" %}
<div style="display:flex;">
<p class="episode">
    <a href="{{ page.url }}">{{ page.title }}</a><br>
</p>
</div>
{% endif %}
{% endfor %}
