---
layout: default
title: 日本語
has_children: true
nav_order: 1
lang: ja
---

# デジタルトランスフォーメーションを受け入れる

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

{% assign sortedEpisodes = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'posts' | where: 'lang', 'ja' | limit: 10 %}
{% assign sortedBriefs = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'brief' | where: 'lang', 'ja' | limit: 10 %}
{% assign latestEpisode = sortedEpisodes | first %}
{% assign latestBrief = sortedBriefs | first %}
<div class="toprow">
  <div class="topcolumn topleft">
    <p> 
        "デジタルトランスフォーメーションを受け入れる"は、<a href="https://www.youtube.com/channel/UCveOcNne1kP_ZccC8kOZcDA">YouTube</a>や<a href="https://soundcloud.com/embracingdigital">SoundCloud</a>などのプラットフォームで毎週放送されるポッドキャストです。インテルの公共部門主任ソリューションアーキテクト、ダレン・パルシファーは、人々、プロセス、ポリシー、テクノロジーを活用した効果的な変革を探求します。
    </p>
    <p> 
        私たちは、デジタルトランスフォーメーションの採用における課題と成功について議論する専門家や戦略家のコミュニティを構築しています。以下のリンクからコミュニティに参加してください：
        <a href="https://www.youtube.com/channel/UCveOcNne1kP_ZccC8kOZcDA">YouTube</a>、
        <a href="https://soundcloud.com/embracingdigital">SoundCloud</a>、
        <a href="https://www.linkedin.com/company/embracing-digital-transformation/">LinkedIn Group</a>、
        <a href="https://www.facebook.com/embracingdigital">Facebook </a>、
        <a href="https://www.intel.com/content/www/us/en/government/embracing-digital-transformation-overview.html">Intel Blog Site</a>
    </p>
  </div>
  <div class="topcolumn topright">
    <a href="{{ latestEpisode.url }}">
        <img src="{{ latestEpisode.path | remove: latestEpisode.name }}/{{ latestEpisode.img }}" width="128" height="128"><br>
        <small>{{ latestEpisode.number}} - {{ latestEpisode.title }}</small>
    </a><br>
    <a href="{{ latestBrief.url }}">
        <img src="./ja.jpeg" width="128" height="128"><br>
        <small>週間ニュースブリーフ {{ latestBrief.title }}</small>
    </a><br>
  </div>
</div>

<h1>エピソード</h1>
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