---
layout: posts
title: "Télémétrie dans le Cloud"
number: 52
permalink: episode-EDT52-fr
lang: fr
nav_exclude: true
nav_order: 52
tags:
    - cloud
    - data_management
    - aws
    - automation
    - multicloud
    - cybersecurity
    - technology
    - process

date: Mon Jun 07 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Intel, parle à Josh Hilliker, Directeur des architectes de solutions cloud chez Intel, de l'utilisation de la télémétrie dans le cloud pour maximiser la valeur et l'efficacité."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solution Architect, Intel, parle à Josh Hilliker, Directeur des architectes de solutions cloud chez Intel, de l'utilisation de la télémétrie dans le cloud pour maximiser la valeur et l'efficacité."
---

<div>
{% include transistor.html id="a732fe89" title="#52 Telemetry in the Cloud" %}

{% include youtube.html id="url" %}
</div>

---

## Avantages des architectes de solutions cloud (CSAs)

Le rôle de CSA est très demandé dans l'industrie en ce moment, et Intel embauche une équipe de CSA pour apporter de la valeur à leurs clients. Les CSA peuvent aider les clients à éviter la mentalité de transfert direct qui entraîne des coûts inutilement élevés. Ces nouveaux CSA apportent une perspective externe et se connectent avec la communauté plus large des CSA pour résoudre les problèmes.

## Phases de télémétrie.

La télémétrie dans le cloud ne devrait pas être reléguée à votre fournisseur de services cloud. Par exemple, Amazon Web Services (AWS) a connu une panne majeure sur la côte Est en novembre dernier et leurs outils ne fournissaient pas de rapports, de sorte que de nombreux clients ne savaient même pas qu'ils étaient hors service. Les organisations ont besoin de leur propre télémétrie pour la surveillance.

La première phase consiste à ne pas surveiller dans le cloud. La deuxième phase consiste à exposer la télémétrie où vous comprenez ce que vous obtenez, par exemple, le processeur, la mémoire et le réseau, mais c'est à un niveau superficiel. La phase suivante est la surveillance et l'action, où vous recevez des notifications sur les ralentissements, les taux de transactions, les taux de réponse, etc. La phase suivante est plus avancée dans la pile où le cloud intelligent moderne contrôle et prédit pour la résolution des problèmes. Enfin, il y a l'automatisation complète. C'est là que les choses fonctionnent par elles-mêmes, écoutent, réagissent, puis informent par la suite.

Un exemple d'automatisation complète serait un centre de données qui contrôle un système de chauffage, ventilation et climatisation (CVC), détectant et réduisant ou augmentant la température dans différentes parties d'un bâtiment. Pour les charges de travail, un cloud intelligent peut déplacer les charges de travail afin de maximiser la valeur en termes de capacité et de performance.

## Approches actuelles et limitations

De nombreuses fois, cependant, les clients des prestataires de services cloud relèguent l'automatisation au niveau de l'infrastructure et oublient la couche de charge de travail. Les clients ont besoin d'informations au-delà des seules données essentielles; ils ont besoin d'une télémétrie approfondie et riche pour savoir ce qui se passe réellement. Il est une erreur de compter sur le prestataire de services cloud pour avoir votre intérêt supérieur à l'esprit en ce qui concerne la télémétrie, et cela peut se traduire par des coûts élevés.

Certains prestataires de services cloud s'ouvrent de plus en plus. Actuellement, AWS est un véritable changeur de jeu dans la télémétrie qu'ils fournissent. Espérons que d'autres emboîteront le pas.

## Collectons les bonnes télémétries...

Choisir les bonnes instances est important. Tous les cœurs ne sont pas créés égaux ; différents cœurs sont utilisés pour différentes tâches, et il est important de comprendre ce qu'ils sont pour obtenir les meilleures performances et le meilleur prix.

Quel type d'informations pouvez-vous collecter ? La conception de produit d'Intel inclut des unités de surveillance des performances (PMU). Ce sont des compteurs de sous-niveau qui fournissent des informations sur les transactions, les retards, la latence et les goulots d'étranglement. Il existe trois camps différents dans les PMUs : le cœur, hors du cœur et non lié. Ces PMUs collectent des informations sur le CPI, l'utilisation, la fréquence et TMAM. Toutes ces données sont disponibles via AWS.

En utilisant des métriques, la télémétrie réelle est un outil pour vous aider à optimiser vos charges de travail. Vous pourriez comparer comment vos charges de travail fonctionnent dans votre propre centre de données, par exemple, à AWS dans ces cas, et exécuter des métriques pour déterminer sur quelle plateforme les charges de travail devraient être hébergées.

## La pertinence de l'informatique

Superposer la télémétrie avec le benchmarking est une solution ultime. Grâce au benchmarking, vous pouvez connaître votre rendement, et grâce à la télémétrie, vous pouvez examiner l'IPC, l'utilisation, la fréquence et avoir un tableau de bord complet de ce qui se passe. Vous souhaitez faire la même chose dans le cloud, plutôt que de simplement déposer des charges de travail sur une instance apparemment moins chère.

Les professionnels de l'informatique ne devraient pas craindre de perdre leur emploi car les choses se déplacent vers le cloud. Au lieu de cela, ils devraient transférer leurs compétences pour apprendre le benchmarking de télémétrie plutôt que d'avoir une mentalité de déplacement pur et simple. Devenir compétent dans l'utilisation du cloud implique également l'utilisation de fonctionnalités spécifiques au cloud telles que Kubernetes et les conteneurs. La télémétrie fonctionne également dans ces domaines. Avec l'outil Intel's C Advisor, vous pouvez obtenir une télémétrie détaillée telle que les données de base et hors base de vos conteneurs.

Bien que cela puisse sembler un peu intimidant lorsque l'on regarde tout ce qui est possible dans le cloud, il est préférable de commencer petit. Examinez les bonnes applications en fonction des risques. Cataloguez vos applications, examinez la hiérarchisation des applications, puis commencez à les déplacer vers le cloud en regroupant des fonctions et des applications similaires. En découvrant de nouveaux services et en apprenant de nouvelles applications, considérez l'architecture qui les soutient et posez les bonnes questions afin de devenir un architecte technique plus informé.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
