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

{% assign sortedPages = site.pages | sort: 'nav_order' | reverse %}
{% for page in sortedPages %}
{% if page.layout == "brief" && page.lang == "es" %}
<div style="display:flex;">
<p class="episode">
    <a href="{{ page.url }}">{{ page.title }}</a><br>
</p>
</div>
{% endif %}
{% endfor %}
