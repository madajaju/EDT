---
layout: posts
title: "Renaissance du Cloud privé"
number: 137
permalink: episode-EDT137-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 137
tags:
    - cloud
    - computing
    - greenlake
    - hpe
    - multicloud
    - hybridcloud
    - technology

date: Tue May 09 2023 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Sam Ceccola

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, Darren interviewe Sam Ceccola, CTO de la DOD pour HPE, à propos des nouveaux modèles commerciaux et technologiques qui modifient la manière dont les organisations consomment le cloud hybride."
video: "https://youtu.be/ca8WFpYQLss"
description: "Dans cet épisode, Darren interviewe Sam Ceccola, CTO de la DOD pour HPE, à propos des nouveaux modèles commerciaux et technologiques qui modifient la manière dont les organisations consomment le cloud hybride."
---

<div>
{% include transistor.html id="fcf7bb68" title="#137 Rebirth of the Private Cloud" %}

{% include youtube.html id="ca8WFpYQLss" %}
</div>

---

Il y a eu une tendance vers la rapatriement dans le secteur commercial, où les entreprises ramènent les charges de travail et les machines virtuelles des environnements de cloud public pour des raisons financières telles que les frais de sortie et la budgétisation des charges de travail à hyper-échelle. La souveraineté des données, les problèmes de sécurité, les performances et les problèmes de latence ont également conduit de nombreuses entreprises à s'éloigner du cloud public et à revenir aux technologies de cloud privé. Malgré ce changement, de nombreuses promesses du cloud ont été tenues pour garantir la facilité d'utilisation, l'élasticité et la tarification basée sur la consommation. Afin de faciliter la transition entre les clouds, le cloud privé doit offrir une facilité d'utilisation, la portabilité des charges de travail et de nouveaux modèles de tarification basés sur la consommation, très demandés par les clouds publics.

## Contrôle des coûts

Sam Ceccola, le CTO de HPE DoD, estime qu'il est essentiel de comprendre les risques et les défis associés à chaque technologie de cloud privé, public et hybride. Et de concevoir des solutions qui tirent parti des points forts de chaque technologie. C'est là que l'offre de production de HPE, GreenLake, entre en jeu. Le modèle d'approvisionnement en services basé sur la consommation de GreenLake a été mis en œuvre pour la première fois en 2005 et a depuis évolué pour inclure un portail en libre-service permettant de gérer plusieurs environnements cloud privés et publics. GreenLake offre aux clients la possibilité de déployer des ressources supplémentaires à la demande, à travers la frontière du cloud privé/public. Il gère également et visualise des coûts complexes, tels que les frais de sortie de données et l'établissement de budgets pour les charges de travail à grande échelle.

## Gestion des données

Une autre préoccupation majeure pour la plupart des consommateurs de services de cloud public est la gestion des données, la gouvernance et la souveraineté. Sans une stratégie de données cohérente, de nombreuses organisations sont lourdement chargées de frais de sortie de données lorsqu'elles déplacent des données vers ou depuis le cloud public. Il existe plusieurs approches différentes pour gérer les données entre les frontières des nuages. HPE adopte une approche de stockage adjacent au cloud qui réduit au minimum la quantité de données déplacées vers le cloud. Le stockage adjacent au cloud de GreenLake permet de maintenir les données sur site tout en exécutant les charges de travail de calcul dans le cloud. Cette approche garantit la souveraineté des données, réduit les coûts de sortie et les problèmes de latence associés au déplacement de grandes quantités de données entre les clouds.

## Portabilité

Un autre aspect clé des architectures de cloud hybride multiplateforme est la capacité de déplacer facilement les charges de travail entre les différents clouds. Certaines organisations ont adopté des architectures de microservices basées sur des conteneurs sans état pour offrir la flexibilité et la portabilité des charges de travail. Cependant, toutes les charges de travail ne peuvent pas être facilement conteneurisées, en particulier celles qui contiennent des applications avec un état. Dans ces cas, des machines virtuelles sont utilisées pour permettre le déplacement des applications d'un cloud à un autre. Le déplacement de machines virtuelles entre différents clouds peut poser problème car les fournisseurs de services cloud utilisent des hyperviseurs et des processeurs différents qui peuvent ne pas être entièrement compatibles. Comprendre les limitations de ces migrations est essentiel lors de la prise de décision d'achat de matériel, qu'il soit virtualisé ou non-virtualisé.

## Sécurité

GreenLake ne limite pas les clients au déploiement sur site, car il leur permet de provisionner des charges de travail dans différents environnements cloud, notamment Amazon, Google et Azure. De plus, GreenLake prend en charge les charges de travail hybrides authentiques, où une charge de travail peut s'exécuter à la fois sur site et dans des environnements cloud à grande échelle simultanément. L'exécution de charges de travail à travers les limites du cloud peut entraîner une exposition supplémentaire aux cyberattaques. Comprendre les modèles de sécurité des différentes technologies cloud publiques et privées peut être une tâche complexe et augmente les ressources humaines nécessaires pour concevoir et gérer efficacement une position de sécurité solide. La plate-forme GreenLake gère la sécurité grâce à son moteur de sécurité agnostique, Security Central, qui prend en charge l'attestation multi-cloud et les architectures de confiance zéro pour les clouds indépendants, en gérant la complexité et l'intégration des modèles de sécurité.

Architecturer une solution cloud multi-hybride n'est pas une tâche simple et nécessite une compréhension des technologies cloud privées et publiques, de leurs limites et de leurs forces. Heureusement, il existe des organisations telles que HPE qui travaillent avec des architectures cloud multi-hybrides depuis plusieurs années et qui ont appris les tenants et les aboutissants d'une gestion efficace des charges de travail dans cet environnement flexible.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
