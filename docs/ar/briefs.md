---
layout: default
title: النشرات الإخبارية
has_children: false
parent: العربية
nav_order: 2
lang: ar
child_nav_order: reversed
---

<style>
/* إنشاء عمودين متساويين يطفوان بجانب بعضهما البعض */
.column {
  float: left;
  width: 48%;
  padding: 9px;
}

/* مسح التعويم بعد الأعمدة */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>

<img src="./ar.jpeg" width="128" height="128"><br>

# النشرات الأسبوعية

{% include subscribe_brief.html %}

نحن في خضم الثورة الرقمية. خلال هذا الوقت، قد يكون من الصعب الفرز بين كل الضجة والعثور على ما يعمل، وما سيكون صالحًا بعد عامين، وما يساهم في مؤسستك. تحتاج العديد من منظمات تكنولوجيا المعلومات إلى مساعدة في التعامل مع الرسائل المربكة والتكنولوجيات المتضاربة. نحن نساعد المنظمات على تصفية الثرثرة واحتضان التحول الرقمي. عالم التحول الرقمي يتغير باستمرار، وتحتاج إلى معرفة ما هو صالح اليوم. استمع إلى البودكاست الأسبوعي للحصول على آخر الأخبار في الأمن السيبراني، والاتصالات المتقدمة، وإدارة البيانات، والذكاء الاصطناعي، والحوسبة الطرفية والسحابية.

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