---
layout: default
title: Überblick
lang: de
nav_order: 1
---
<script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=63d884dcaa39f90012ccb778&product=inline-share-buttons' async='async'></script>

# Umarmung der Digitalen Transformation

<style>
.topcolumn {
float: left;
padding: 10px;
}

.topleft {
width: 65%;
}

.topright {
width: 35%;
}

/* Clear floats after the columns */
.toprow:after {
content: "";
display: table;
clear: both;
}
</style>
{% assign sortedEpisodes = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'posts' | where: 'lang': 'de' | limit: 10 %}
{% assign sortedBriefs = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'brief' | where: 'lang': 'de' | limit: 10 %}
{% assign latestEpisode = sortedEpisodes | first %}
{% assign latestBrief = sortedBriefs | first %}
<div class="toprow">
  <div class="topcolumn topleft" >
    <p> 
        "Embracing Digital Transformation" ist ein wöchentlicher Podcast, der auf <a href="https://www.youtube.com/channel/UCveOcNne1kP_ZccC8kOZcDA">Youtube</a> und <a href="https://soundcloud.com/embracingdigital">SoundCloud</a> multicast wird. Darren Pulsipher, Chief Solution Architect für den öffentlichen Sektor bei Intel, untersucht effektive Veränderungen unter Einbeziehung von Menschen, Prozessen, Richtlinien und Technologie.
    </p>
    <p> 
        Wir bauen eine Gemeinschaft von Fachleuten und Strategen auf, um über die Herausforderungen und Erfolge der Einführung der digitalen Transformation zu sprechen. Treten Sie der Community bei, indem Sie die unten stehenden Links überprüfen.
        <a href="https://www.youtube.com/channel/UCveOcNne1kP_ZccC8kOZcDA">Youtube</a>,
        <a href="https://soundcloud.com/embracingdigital">SoundCloud</a>,
        <a href="https://www.linkedin.com/company/embracing-digital-transformation/">LinkedIn Group</a>,
        <a href="https://www.facebook.com/embracingdigital">Facebook </a>
    </p>
  </div>
  <div class="topcolumn topright" >
    <a href="{{ latestEpisode.url }}">
        <img src="../{{ latestEpisode.path | remove: latestEpisode.name }}/{{ latestEpisode.img }}" width="128" height="128"><br>
        <small>{{ latestEpisode.number}} - {{ latestEpisode.title }}</small>
    </a><br>
    <a href="{{ latestBrief.url }}">
        <img src="../../EDTW.png" width="128" height="128"><br>
        <small>Nachrichtenübersicht {{ latestBrief.title }}</small>
    </a><br>
  </div>
</div>
<!-- ShareThis BEGIN --><div class="sharethis-inline-share-buttons"></div><!-- ShareThis END -->

<h1>Folge</h1>
{% for page in sortedEpisodes %}
{% if page.number %}
<div style="display:flex;">
<p class="episode">
    <img class="thumbnail" src="../{{ page.path | remove: page.name }}/{{ page.img }}" width="128" height="128">
    <a href="{{ page.url }}">{{ page.number}} - {{ page.title }}</a><br>
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
