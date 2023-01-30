---
layout: default
title: Overview
nav_order: 1
---

# Embracing Digital Transformation

Embracing Digital Transformation is a weekly podcast that is multicast on <a rehf="https://www.youtube.com/channel/UCveOcNne1kP_ZccC8kOZcDA">Youtube</a> and <a href="https://soundcloud.com/embracingdigital">SoundCloud</a>.
Darren Pulsipher, Chief Solution Architect for Public Sector at Intel, investigates effective change leveraging
people, process, policy and technology.

We are building a community of practitioners and strategist to talk about the challenges and successes of adopting
Digital Transformation. Join the community by checking out the links below.
<a href="https://www.youtube.com/channel/UCveOcNne1kP_ZccC8kOZcDA">Youtube</a>,
<a href="https://soundcloud.com/embracingdigital">SoundCloud</a>,
<a href="https://www.linkedin.com/company/embracing-digital-transformation/">LinkedIn Group</a>,
<a href="https://www.facebook.com/embracingdigital">Facebook </a>
<a href="https://www.intel.com/content/www/us/en/government/embracing-digital-transformation-overview.html">Intel Blog Site</a>

<h1>Episodes</h1>
{% assign sortedPages = site.pages | sort: 'nav_order' | reverse %}
{% for page in sortedPages %}
{% if page.number %}
<div style="display:flex;">
<p class="episode">
    <img class="thumbnail" src="{{ page.path | remove: page.name }}/{{ page.img }}" width="128" height="128">
    <a href="/EmbracingDigitalTransformation/{{ page.url }}">{{ page.number}} - {{ page.title }}</a><br>
    {{ page.summary }}
</p>
</div>
{% endif %}
{% endfor %}

<style>
.thumbnail {
    float: left;
    margin: 0 15px 0 0;
}
.episode {
    margin: 10px 0;
}
</style>
