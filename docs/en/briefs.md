---
layout: default
title: News Briefs
has_children: false
parent: English
nav_order: 2
lang: en
child_nav_order: reversed
---


<style>
/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 48%;
  padding: 9px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>



<img src="./en.jpeg" width="128" height="128"><br>


# Weekly Briefs

{% include subscribe_brief.html %}

We are in the throws of the digital revolution. During this time, it can be challenging to sift through all of the hype and find what works, what is still viable two years from now, and what contributes to your organization. Many IT organizations need help with confusing messages and conflicting technologies. We help organizations sort through the chatter and embrace digital transformation. The world of digital transformation is constantly changing, and you need to know what is viable today.  Listen to the podcast weekly for the latest news in cybersecurity, advanced communications, data management, artificial intelligence, edge, and cloud computing.


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

{% assign spages = site.pages | where: "layout", "brief" | where: "lang", "en" | sort: "nav_order" | reverse %}
{% for spage in spages %}
<div style="display: flex;">
    <p class="episode">
    <img class="thumbnail" src="../../{{ spage.path | remove: spage.name }}/{{ spage.img }}" width="100" height="100">
    <a href="{{ spage.url }}">{{ spage.number}} - {{ spage.title }}</a><br>
    {{ spage.summary }}
    </p>
</div>
{% endfor %}
