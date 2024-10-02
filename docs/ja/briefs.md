---
layout: default
title: 週刊ニュース
parent: 日本語
has_children: true
lang: ja
nav_order: 2
child_nav_order: reversed
---

# 週刊ニュース

私たちはデジタル革命の真っ只中にいます。この期間中、全ての誇大広告をフィルタリングし、何が機能するのか、2年後にも有効であるものは何か、そして組織に貢献するものは何かを見極めるのは難しいかもしれません。多くのIT組織は、混乱するメッセージや相反する技術に対処するのに苦労しています。私たちは、組織がノイズをフィルタリングし、デジタルトランスフォーメーションを受け入れるのを支援します。デジタルトランスフォーメーションの世界は絶えず変化しており、今日何が実現可能であるかを知る必要があります。最新のサイバーセキュリティ、高度通信、データ管理、人工知能、エッジ、そしてクラウドコンピューティングのニュースを週刊のポッドキャストでお聞きください。

<style>
/* 並んだ二つの等しい列を作成 */
.column {
  float: left;
  width: 49%;
  padding: 10px;
}

/* 列の後に浮動小数点をクリア */
.row:after {
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

{% assign spages = site.pages | where: "layout", "brief" | where: "lang", "ja" | sort: "nav_order" | reverse %}
{% for spage in spages %}
<div style="display: flex;">
    <p class="episode">
    <img class="thumbnail" src="../../{{ spage.path | remove: spage.name }}/{{ spage.img }}" width="100" height="100">
    <a href="{{ spage.url }}">{{ spage.number}} - {{ spage.title }}</a><br>
    {{ spage.summary }}
    </p>
</div>
{% endfor %}