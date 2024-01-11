---
layout: posts
title: "VAST Data révisé"
number: 48
permalink: episode-EDT48-fr
has_children: false
lang: fr
nav_exclude: true
parent: Épisodes
grand_parent: Français
nav_order: 48
tags:
    - dataarchitecture
    - data
    - optane
    - technology
    - vastdata

date: Wed Apr 28 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Randy Hayes

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Dans cet épisode, Darren prend des nouvelles de Randy Hayes, désormais VP des ventes pour le secteur public de VAST Data, six mois après leur dernière conversation pour voir comment ils se portent dans l'industrie, ce qu'il y a de nouveau chez VAST, et des cas d'utilisation intéressants. Leur nouveau produit, Gemini, propose un modèle d'entreprise de stockage différent."
video: "https://youtu.be/url"
description: "Dans cet épisode, Darren prend des nouvelles de Randy Hayes, désormais VP des ventes pour le secteur public de VAST Data, six mois après leur dernière conversation pour voir comment ils se portent dans l'industrie, ce qu'il y a de nouveau chez VAST, et des cas d'utilisation intéressants. Leur nouveau produit, Gemini, propose un modèle d'entreprise de stockage différent."
---

<div>
{% include transistor.html id="d6fc5e00" title="#48 VAST Data Revisited" %}

{% include youtube.html id="url" %}
</div>

---

VAST Data a connu une croissance fulgurante au cours des six derniers mois, avec une équipe en expansion et des ventes impressionnantes, telles que près de 70 pétaoctets de stockage flash fournis au gouvernement fédéral. En plus du partage de fichiers général avec leurs systèmes de stockage tout-flash, ils ont des cas d'utilisation intéressants dans des domaines tels que le séquençage de nouvelle génération, la microscopie confocale et la simulation en soufflerie.

La plateforme de l'entreprise permet de résoudre des problèmes de lecture aléatoire car toutes les données sont stockées sur la mémoire flash sans coût exorbitant ; la plateforme gère un volume élevé de données avec une faible latence.

## Technologie VAST et disques Intel Optane

VAST utilise les disques Intel Optane pour atteindre la parité lecture/écriture, entre autres avantages. Étant donné qu'Optane est une mémoire persistante, il n'y a pas de problèmes de cohérence de cache et il n'y a pas besoin de RAM, ce qui est un avantage architectural considérable pour éviter une défaillance ou une perte de données. Le coût total par utilisateur est également réduit car vous n'avez pas besoin d'acheter de gros machines avec beaucoup de mémoire pour le stockage de fichiers si vous souhaitez une vitesse supérieure. Cette catégorie est éliminée.

L'évolutivité et la flexibilité sont deux autres avantages, car vous pouvez ajouter davantage de boîtiers de données (boîtiers D) sans affecter les performances, et ils sont entièrement compatibles même avec plusieurs générations de flash. Il n'y a pas de point de défaillance unique, et il n'y a pas de limite théorique ; VAST a testé jusqu'à 100 pétaoctets.

Vous pouvez améliorer les performances en ajoutant des boîtes client (C boxes), indépendamment des boîtes D (D boxes). La capacité avec la mémoire flash est essentiellement gratuite, mais vous devez exposer cette mémoire flash avec le CPU. Les boîtes C sont totalement dépourvues d'état, vous pouvez donc les agrandir ou les réduire à la volée. VAST garantit une disponibilité maximale car vous avez un accès complet à chaque PCP à l'arrière-plan.

Selon les exigences de performance du client, il peut y avoir différents nombres de boîtiers D et de boîtiers C ; par exemple, un client peut ne pas avoir besoin de performance supplémentaire, mais d'une capacité supplémentaire, donc le cluster peut avoir, disons, 11 boîtiers C et 37 boîtiers D.

Si vous avez une boîte C et une boîte D, vous disposez d'environ 40 gigaoctets par seconde de bande passante, ce qui est le modèle de base. Chaque ajout d'une boîte D ajoute encore 40 gigaoctets de bande passante. Une seule boîte C ne sature pas toutes les IOPS, donc si vous ajoutez une autre boîte C, vous pouvez obtenir 350 000 IOPS à partir d'une boîte. Comme le flash est limité par le processeur, plus vous ajoutez de processeurs, plus cela vous permet de mettre à l'échelle.

## Nouveau modèle d'entreprise de stockage

Le nouveau produit de VAST Data, Gemini, permet aux clients ayant besoin d'une performance élevée sans grande capacité de ne souscrire qu'à la quantité de matériel dont ils ont besoin auprès de leur fabricant de contrat, ce qui entraîne d'énormes économies de coûts. Les clients peuvent augmenter leur capacité et la payer au fur et à mesure de leurs besoins, plutôt que de supporter un coût initial pour les futures capacités nécessaires.

D'un point de vue OPEX, cela a du sens pour de nombreuses entreprises. Par exemple, pour un client, un système tout-flash de 30 pétaoctets qui génère un téraoctet et demi de bande passante, le coût est inférieur à S3 d'Amazon pour un accès peu fréquent. Cela concerne seulement une année ; à l'avenir, cela devient en réalité moins cher que Glacier si on le considère selon la façon dont Amazon facture, par giga par mois. De plus, il y a la possibilité de passer à un modèle CAPEX si cela semble plus judicieux ultérieurement.

Il est important de noter que VAST présente un appareil, et non pas un service de stockage, ce qui peut poser des problèmes de support en raison des variations de matériel et de firmware, des différents types de disques pris en charge, des interconnexions, etc. Cela entraîne une complexité folle. VAST continue d'expédier les mêmes boîtiers et serveurs ; il s'agit simplement d'un modèle économique différent permettant de consommer le stockage de manière flexible.

Certaines zones intéressantes où VAST pourrait être utile sont dans la recherche médicale, tel que la pathologie numérique avec une quantité astronomique de données souvent difficiles pour les chercheurs à accéder car elles sont stockées sur des équipements bon marché et lents. La médecine de précision basée sur le patrimoine génétique d'une personne est également une possibilité. De plus, l'utilisation de l'intelligence artificielle sur les captures de paquets pourrait être utile pour prédire les attaques d'adversaires avancés.

Un autre cas d'utilisation prometteur est un client ayant toutes ses données dans un système de stockage VAST entièrement flash, plutôt que dans le cloud, mais effectuant tous leurs calculs dans le cloud, ramenant peut-être seulement les résultats. Les résultats sont généralement très petits, peut-être quelques octets de données, et sont peu coûteux à extraire. Ce type de modèle, par exemple, pourrait générer de la valeur en effectuant des analyses sur des anciennes données qui sont actuellement simplement stockées et qui seraient trop coûteuses à déplacer.

Il existe beaucoup de flexibilité pour adopter une approche hybride ou multicloud, où vous disposez d'un système de stockage centralisé sur site accessible via plusieurs fournisseurs de cloud.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
