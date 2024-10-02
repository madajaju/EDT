---
layout: default
title: العربية
nav_order: 2
has_children: true
lang: ar
---

# احتضان التحول الرقمي

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

<div class="collection">
<div>
<p>
"احتضان التحول الرقمي" قد أنشأ ثلاث سلاسل من الحلقات حيث ركزنا محادثاتنا على أهم مواضيع اليوم. تحقق من هذه السلسلة الجديدة.
</p>
</div>
</div>

<div class="collection">
  <div class="collection-item">
    <a href="https://www.embracingdigital.org/collections/en/zerotrust.html">
      <img src="./ezt.png" width="128" height="128" alt="احتضان الثقة الصفرية">
    </a>
  </div>
  <div class="collection-item">
    <a href="https://www.embracingdigital.org/collections/en/multihybridcloud.html">
      <img src="./emhc.png" width="175" height="128" alt="احتضان السحابة الهجينة المتعددة">
    </a>
  </div>
  <div class="collection-item">
    <a href="https://www.embracingdigital.org/collections/en/generativeai.html">
      <img src="./egai.png" width="175" height="128" alt="احتضان الذكاء الاصطناعي التوليدي">
    </a>
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
{% assign sortedEpisodes = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'posts' | where: 'lang', 'ar' | limit: 10 %}
{% assign sortedBriefs = site.pages | sort: 'nav_order' | reverse | where: 'layout', 'brief' | where: 'lang', 'ar' | limit: 10 %}
{% assign latestEpisode = sortedEpisodes | first %}
{% assign latestBrief = sortedBriefs | first %}
<div class="toprow">
  <div class="topcolumn topleft">
    <p> 
        "احتضان التحول الرقمي" هو بودكاست أسبوعي يتم بثه على <a href="https://www.youtube.com/channel/UCveOcNne1kP_ZccC8kOZcDA">يوتيوب</a> و <a href="https://soundcloud.com/embracingdigital">ساوند كلاود</a>.
        دارين بولسيفر، المهندس الرئيسي للحلول للقطاع العام في إنتل، يحقق في التحول الفعّال مستخدمًا الناس والعمليات والسياسات والتكنولوجيا.
    </p>
    <p> 
        نحن نبني مجتمعاً من الممارسين والاستراتيجيين للحديث عن تحديات ونجاحات تبني التحول الرقمي. انضم إلى المجتمع من خلال التحقق من الروابط أدناه:
        <a href="https://www.youtube.com/channel/UCveOcNne1kP_ZccC8kOZcDA">يوتيوب</a>,
        <a href="https://soundcloud.com/embracingdigital">ساوند كلاود</a>,
        <a href="https://www.linkedin.com/company/embracing-digital-transformation/">مجموعة لينكدإن</a>,
        <a href="https://www.facebook.com/embracingdigital">فيسبوك</a>
    </p>
  </div>
  <div class="topcolumn topright">
    <a href="{{ latestEpisode.url }}">
        <img src="../{{ latestEpisode.path | remove: latestEpisode.name }}/{{ latestEpisode.img }}" width="128" height="128"><br>
        <small>{{ latestEpisode.number}} - {{ latestEpisode.title }}</small>
    </a><br>
    <a href="{{ latestBrief.url }}">
        <img src="./ar.jpeg" width="128" height="128"><br>
        <small>النشرة الإخبارية الأسبوعية {{ latestBrief.title }}</small>
    </a><br>
  </div>
</div>

{% include subscribe_posts.html %}

<h1>الحلقات</h1>
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