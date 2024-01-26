---
layout: default
title: Notícias Semanais
parent: Português
has_children: true
lang: pt
nav_order: 2
child_nav_order: reversed
---

# Notícias Semanais 

Estamos no meio da revolução digital. Durante esse período, pode ser desafiador filtrar todo o hype e descobrir o que funciona, o que ainda será viável daqui a dois anos e o que contribui para a sua organização. Muitas organizações de TI precisam de ajuda com mensagens confusas e tecnologias conflitantes. Nós ajudamos as organizações a filtrar o ruído e abraçar a transformação digital. O mundo da transformação digital está em constante mudança e você precisa saber o que é viável hoje. Ouça o podcast semanalmente para as últimas notícias em cibersegurança, comunicações avançadas, gerenciamento de dados, inteligência artificial, borda e computação em nuvem.

<style>
/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 49%;
  padding: 10px;
}

/* Clear floats after the columns */
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

{% assign spages = site.pages | where: "layout", "brief" | where: "lang", "pt" | sort: "nav_order" | reverse %}
{% for spage in spages %}
<div style="display: flex;">
    <p class="episode">
    <img class="thumbnail" src="../../{{ spage.path | remove: spage.name }}/{{ spage.img }}" width="100" height="100">
    <a href="{{ spage.url }}">{{ spage.number}} - {{ spage.title }}</a><br>
    {{ spage.summary }}
    </p>
</div>
{% endfor %}


