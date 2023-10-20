---
layout: default
title: Italiano
has_children: true
nav_order: 5
lang: it
---

# Abbracciando la Trasformazione Digitale

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
{% assign sortedEpisodes = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'posts' | where: 'lang', 'it' %}
{% assign sortedBriefs = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'brief' | where: 'lang', 'it' %}
{% assign latestEpisode = sortedEpisodes | first %}
{% assign latestBrief = sortedBriefs | first %}
<div class="toprow">
  <div class="topcolumn topleft" >
    <p> 
        "Embracing Digital Transformation" è un podcast settimanale che viene trasmesso in multicast su <a href="https://www.youtube.com/channel/UCveOcNne1kP_ZccC8kOZcDA">Youtube</a> e <a href="https://soundcloud.com/embracingdigital">SoundCloud</a>.
        Darren Pulsipher, Chief Solution Architect per il Settore Pubblico presso Intel, indaga sul cambiamento efficace che sfrutta persone, processi, politiche e tecnologia.
    </p>
    <p> 
       Stiamo costruendo una comunità di professionisti e strategisti per discutere delle sfide e dei successi nell'adozione della Trasformazione Digitale. Unisciti alla comunità visitando i link qui di seguito. 
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
        <small>Weekly News Brief {{ latestBrief.title }}</small>
    </a><br>
  </div>
</div>

<h1>Episodi</h1>
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
