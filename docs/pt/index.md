---
layout: default
title: Português
has_children: true
nav_order: 1
lang: pt
---

# Abraçando a Transformação Digital

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
{% assign sortedEpisodes = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'posts' | where: 'lang', 'pt' | limit: 10 %}
{% assign sortedBriefs = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'brief' | where: 'lang', 'pt' | limit: 10 %}
{% assign latestEpisode = sortedEpisodes | first %}
{% assign latestBrief = sortedBriefs | first %}
<div class="toprow">
  <div class="topcolumn topleft" >
    <p> 
        "Embracing Digital Transformation" é um podcast semanal que é transmitido em várias plataformas, como <a href="https://www.youtube.com/channel/UCveOcNne1kP_ZccC8kOZcDA">Youtube</a> e <a href="https://soundcloud.com/embracingdigital">SoundCloud</a>. Darren Pulsipher, Arquiteto Principal de Soluções para o Setor Público na Intel, investiga a mudança efetiva utilizando pessoas, processos, políticas e tecnologia.
    </p>
    <p> 
        Estamos construindo uma comunidade de profissionais e estrategistas para discutir os desafios e sucessos da adoção da Transformação Digital. Junte-se à comunidade conferindo os links abaixo:
        <a href="https://www.youtube.com/channel/UCveOcNne1kP_ZccC8kOZcDA">Youtube</a>,
        <a href="https://soundcloud.com/embracingdigital">SoundCloud</a>,
        <a href="https://www.linkedin.com/company/embracing-digital-transformation/">LinkedIn Group</a>,
        <a href="https://www.facebook.com/embracingdigital">Facebook </a>
        <a href="https://www.intel.com/content/www/us/en/government/embracing-digital-transformation-overview.html">Intel Blog Site</a>
    </p>
  </div>
  <div class="topcolumn topright" >
    <a href="{{ latestEpisode.url }}">
        <img src="{{ latestEpisode.path | remove: latestEpisode.name }}/{{ latestEpisode.img }}" width="128" height="128"><br>
        <small>{{ latestEpisode.number}} - {{ latestEpisode.title }}</small>
    </a><br>
    <a href="{{ latestBrief.url }}">
        <img src="./EDTW.png" width="128" height="128"><br>
        <small>Weekly News Brief {{ latestBrief.title }}</small>
    </a><br>
  </div>
</div>

<h1>Episódios</h1>
{% for page in sortedEpisodes %}
{% if page.number %}
<div style="display:flex;">
<p class="episode">
    <img class="thumbnail" src="{{ page.path | remove: page.name }}/{{ page.img }}" width="128" height="128">
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
