---
layout: default
title: Overview
nav_order: 1
has_children: true
lang: en
---
<script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=63d884dcaa39f90012ccb778&product=inline-share-buttons' async='async'></script>

# Embracing Digital Transformation

Darren has just unveiled his latest masterpiece, a captivating 12-part series titled "Embracing Generative AI." In this groundbreaking podcast, "Embracing Digital Transformation" delves deep into the realm of generative AI, featuring insightful discussions with practitioners, educators, and the brilliant minds driving this technological marvel.
Discover the future of AI as you've never seen it before. Don't miss out – tune in now! [Check it out here.](https://youtube.com/playlist?list=PLj-81kG3zG5ZCywsu4opHm2FBrWy5ilMH&si=UvRPLAdzD2LXFNo4)

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
{% assign sortedEpisodes = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'posts' %}
{% assign sortedBriefs = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'brief' | where: 'lang': 'en' %}
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
<!-- ShareThis BEGIN --><div class="sharethis-inline-share-buttons"></div><!-- ShareThis END -->

{% include subscribe_posts.html %}

<h1>Episodes</h1>
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
