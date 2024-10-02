---
layout: default
title: English
nav_order: 2
has_children: true
lang: en
---

# Embracing Digital Transformation

<style>
.collection {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}

.collection-item {
  width: 30%;
  padding: 10px;
  border: 0px solid #ccc;
  margin: 10px;
  text-align: center;
}

.collection-item a {
  text-decoration: none;
  color: #ffffff;
}

.collection-item img {
  width: 100%;
  height: auto;
}
</style>

<div class ="collection">
<div>
<p>
Embracing Digital Transformation has created three series of episodes where we have focused our conversations on the top
topics of the day. Check out these new series.
</p>

</div>
</div>


<div>
<div class="collection">
  <div class="collection-item">
    <a href="https://www.embracingdigital.org/collections/en/zerotrust.html">
      <img src="./ezt.png" width="128" height="128" alt="Embracing Zero Trust">
    </a>
  </div>
  <div class="collection-item">
    <a href="https://www.embracingdigital.org/collections/en/multihybridcloud.html">
      <img src="./emhc.png" width="175" height="128" alt="Embracing Multi-Hybrid Cloud">
    </a>
  </div>
  <div class="collection-item">
    <a href="https://www.embracingdigital.org/collections/en/generativeai.html">
      <img src="./egai.png" width="175" height="128" alt="Embracing Generative AI">
    </a>
  </div>
</div>
</div>

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
{% assign sortedEpisodes = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'posts' | where: 'lang', 'en' |
limit: 10 %}
{% assign sortedBriefs = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'brief' | where: 'lang', 'en' |
limit: 10 %}
{% assign latestEpisode = sortedEpisodes | first %}
{% assign latestBrief = sortedBriefs | first %}
<div class="toprow">
  <div class="topcolumn topleft" >
    <p> 
        Embracing Digital Transformation is a weekly podcast that is multicast on <a rehf="https://www.youtube.com/channel/UCveOcNne1kP_ZccC8kOZcDA">Youtube</a> and <a href="https://soundcloud.com/embracingdigital">SoundCloud</a>.
        Darren Pulsipher, Chief Solution Architect for Public Sector at Intel, investigates effective change leveraging
        people, process, policy and technology.
    </p>
    <p> 
       We are building a community of practitioners and strategist to talk about the challenges and successes of adopting Digital Transformation. Join the community by checking out the links below. 
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
        <img src="./en.jpeg" width="128" height="128"><br>
        <small>Weekly News Brief {{ latestBrief.title }}</small>
    </a><br>
  </div>
</div>

{% include subscribe_posts.html %}

<h1>Episodes</h1>
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
.episode:hover {
    background-color: #cceeff;
}
</style>
