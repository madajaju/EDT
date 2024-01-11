---
layout: posts
title: "Avantages de l'architecture multi-cloud"
number: 3
permalink: episode-EDT3-fr
has_children: false
lang: fr
nav_exclude: true
parent: Épisodes
grand_parent: Français
nav_order: 3
tags:
    - multicloud

date: Mon Jun 22 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Une architecture cloud multi-hybride permet aux organisations de tirer parti des avantages des clouds privés et publics, optimisant ainsi les ressources et l'efficacité des coûts. Ce modèle présente cinq principaux avantages : agilité, flexibilité, performances prédictives, sécurité et conformité, et efficacité."
video: "https://youtu.be/14mcgaHLoPU"
description: "Une architecture cloud multi-hybride permet aux organisations de tirer parti des avantages des clouds privés et publics, optimisant ainsi les ressources et l'efficacité des coûts. Ce modèle présente cinq principaux avantages : agilité, flexibilité, performances prédictives, sécurité et conformité, et efficacité."
---

<div>
{% include transistor.html id="f87aa67c" title="#3 Benefits of Multi-Cloud Architecture" %}

{% include youtube.html id="14mcgaHLoPU" %}
</div>

---

## Agilité

L'agilité est la capacité de se déplacer rapidement pour s'adapter aux conditions changeantes des nouvelles technologies, des nouvelles applications et des nouvelles menaces telles que la sécurité et la concurrence. Un modèle multi-hybride permet de déplacer des éléments entre des nuages privés et publics, voire même de l'infrastructure héritée vers les nuages. Il peut être tentant pour les équipes de développement d'utiliser initialement le nuage public dans le cadre de délais serrés car elles peuvent rapidement mettre en place et désactiver l'infrastructure, mais il peut y avoir des problèmes d'intégration dans les dernières étapes du déploiement des applications dans le produit. Cela peut entraîner des retards coûteux. En utilisant le modèle multi-hybride, bon nombre de ces points d'intégration sont exposés tôt à l'équipe de développement. Le développement d'applications utilise cela pour échouer rapidement et tôt dans le processus de développement.

## Flexibilité

La flexibilité dans l'infrastructure est un proche parent de l'agilité. Alors que l'agilité est la capacité de se déplacer rapidement, la flexibilité est la capacité de changer. Pour une flexibilité maximale, les développeurs ont besoin de la capacité de déployer une application n'importe où, que ce soit dans un cloud privé ou public, ou sur des infrastructures héritées, sans être contraints par les services ou l'infrastructure d'un seul cloud.

En déployant une plateforme de gestion infonuagique (CPM) dans une architecture multi-hybride, les charges de travail peuvent être facilement redirigées vers différents nuages selon le coût, la sécurité et la fiabilité.

Un exemple des conséquences du manque de flexibilité est la décision précoce de Netflix d'utiliser uniquement un fournisseur de services cloud. Ce cloud public a connu un problème d'infrastructure qui a entraîné une période d'indisponibilité, et Netflix n'a pas pu diffuser pendant plusieurs heures sur la côte est des États-Unis. Après cette catastrophe, Netflix a mis en place une solution multi-cloud afin de pouvoir rapidement migrer vers un autre cloud en cas de problème. De plus, ils sont maintenant capables de se déplacer là où cela est le plus logique à tout moment en fonction du coût, de la sécurité et de la fiabilité.

Les applications d'un cloud multi-hybride sont la portabilité et la flexibilité opérationnelle. En ne dépendant pas de la façon de fonctionner d'un seul cloud, les développeurs écriront du code qui pourra aisément être transporté entre les différents clouds. De plus, vous aurez la flexibilité opérationnelle nécessaire pour déplacer les charges de travail entre les clouds afin d'offrir à vos clients ce qu'ils souhaitent de manière sécurisée, économique et fiable.

## Performance prédictive

Les clouds publics sont souvent assortis d'un prix : les "voisins bruyants", qui peuvent avoir un impact sur les performances prédictives ou la qualité de service (QoS).

Lorsque vous utilisez un cloud public, vous ne savez souvent pas ce que font ou qui d'autre utilise la même machine, la même baie de stockage ou le même réseau que vous. Pour certaines charges de travail, cela ne pose pas de problème. Cependant, si vous avez une application pour laquelle vous avez besoin de performances prédictives, la présence de voisins bruyants ou de personnes qui monopolisent la bande passante, les entrées/sorties sur disque, le processeur et autres ressources peut interférer avec les résultats de qualité de service dont vous avez besoin.

Les clouds privés peuvent également souffrir de voisins bruyants, mais étant donné que vous possédez l'infrastructure et que les applications vous appartiennent, vous avez la possibilité directe de les gérer. Un voisin bruyant sur le cloud public, c'est comme vivre dans un immeuble où vous avez des options limitées pour faire face à des fêtards à côté. En revanche, des voisins bruyants sur votre cloud privé, c'est comme vivre dans une maison avec des enfants indisciplinés que vous pouvez immédiatement gérer en limitant les ressources.

Une stratégie de cloud hybride vous donne la possibilité de placer des charges de travail et des applications "sensibles" sur des clouds privés et d'autres charges de travail et applications sur une infrastructure de cloud public pour une efficacité en termes de coûts et de ressources. De nombreux outils hybrides vous permettent de caractériser les charges de travail avec des exigences de qualité de service (QoS) pour faciliter le placement automatique et optimal des charges de travail sur différentes infrastructures de cloud.

## Sécurité et conformité

Il y a certains dangers liés à l'automatisation des opérations dans les nuages publics et privés. Cependant, si la sécurité est intégrée à l'architecture multi-hybride, cette automatisation devient un avantage car cela permet d'imposer un profil de sécurité sur l'ensemble de vos ressources dans le cloud, qu'elles soient privées ou publiques, en plus de l'infrastructure héritée. Ce profil de sécurité commun est appliqué partout et les applications sont déployées en fonction de ces profils.

Par exemple, dans un cloud privé, si vous souhaitez obtenir un type spécifique de sécurité, tel que lier une certaine application à une certaine machine qui fonctionne uniquement dans ce cloud privé, cela peut facilement être une exigence dans le profil d'un système multi-hybride.

Dans un système multi-hybride, il existe également de nombreux outils performants pour l'audit et la surveillance de votre infrastructure. Vous pouvez non seulement surveiller ce qui se passe dans votre cloud privé, mais aussi dans le cloud public, ce qui vous alertera sur les attaques malveillantes qui pourraient potentiellement infecter votre cloud privé ou vos actifs d'infrastructure héritée.

## L'efficacité

Il y a de nombreuses idées contradictoires sur l'efficacité. Si vous consultez différents calculateurs de coût total de possession (TCO), vous trouverez des réponses différentes quant à savoir si les clouds privés ou publics sont les plus rentables. Une solution multi-hybride de cloud peut résoudre ce dilemme pour votre organisation grâce à une visibilité accrue et une provision dynamique.

Avec une architecture de cloud multi-hybride et un orchestrateur intelligent, votre orchestrateur peut utiliser la télémétrie de vos clouds privés et publics ainsi que de votre infrastructure héritée pour prendre des décisions optimales sur l'emplacement actuel et futur de la charge de travail. Un autre avantage de cette visibilité est que vous pouvez décider si l'exécution continue des applications est efficace. Un exemple de cela est la façon dont nous avons aidé le système du gouvernement canadien à fonctionner plus efficacement en réduisant les coûts liés à l'exécution d'une application dans le cloud public lorsqu'elle n'était pas utilisée. Au lieu de faire fonctionner une application spécifique en continu, ils la font maintenant fonctionner pendant 18 heures, 5 jours par semaine, selon l'utilisation réelle.

Cette visibilité vous aidera également à identifier et éliminer les charges de travail et les applications en fin de vie (EOL), ce qui permettra d'économiser de l'argent réel. Pour le cloud privé, cela libère des ressources qui peuvent être utilisées pour d'autres charges de travail, ce qui augmente votre efficacité. De plus, les courtiers cloud dans le CMP de l'architecture multi-hybride chercheront essentiellement le prix le plus bas tout en maintenant la QoS pour la charge de travail spécifique. Cela réduit le coût global de l'exécution de la charge de travail et vous donne également une visibilité sur le coût réel de l'utilisation d'un cloud public ou privé spécifique.

* Visibilité des coûts au sein des infrastructures Cloud et Legacy

Faire fonctionner les charges de travail et les applications avec les coûts les plus bas tout en maintenant les mêmes accords de niveau de service.

Stimuler une utilisation accrue de l'infrastructure de cloud privé.

## Appel à l'action

Les architectures multi-hybrides du cloud permettent aux directeurs informatiques de répondre aux exigences de leurs clients, mais il reste encore quelques tâches ardues à accomplir. Élaborer une stratégie de cloud multi-hybride implique des changements organisationnels, comportementaux et techniques qui ne peuvent pas se faire du jour au lendemain. Développer une vision architecturale solide et une feuille de route sont essentiels pour déployer une stratégie de cloud multi-hybride qui puisse tirer parti des points forts des clouds multi-hybrides et éviter l'inefficacité provoquée par l'attrait éphémère des nouvelles technologies dans l'industrie.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
