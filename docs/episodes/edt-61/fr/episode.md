---
layout: posts
title: "Violations de données et chaîne d'approvisionnement sécurisée"
number: 61
permalink: episode-EDT61-fr
has_children: false
lang: fr
nav_exclude: true
parent: Épisodes
grand_parent: Français
nav_order: 61
tags:
    - datbreach
    - data
    - process
    - policy
    - cybersecurity
    - supplychain
    - securesupplychain

date: Wed Aug 11 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect d'Intel, aborde les violations de données et la chaîne d'approvisionnement sécurisée avec l'invité régulier Steve Orrin, CTO d'Intel, pour le secteur fédéral."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solution Architect d'Intel, aborde les violations de données et la chaîne d'approvisionnement sécurisée avec l'invité régulier Steve Orrin, CTO d'Intel, pour le secteur fédéral."
---

<div>
{% include transistor.html id="2462e3fe" title="#61 Data Breaches & Secure Supply Chain" %}

{% include youtube.html id="url" %}
</div>

---

En plus des attaques médiatisées dans la chaîne d'approvisionnement, comme l'incident avec SolarWinds, il existe d'autres attaques moins connues qui posent tout autant problème.

## Chaîne d'approvisionnement sécurisée

Un exemple est l'extension Chrome The Great Suspender, un outil permettant de s'assurer que la mémoire est utilisée correctement dans les applications Chrome, avec environ deux millions d'utilisateurs. Les fondateurs de cet outil en open source ont vendu leur entreprise à une organisation pour des millions de dollars sans faire preuve de diligence raisonnable. Il s'est avéré que l'acheteur était un groupe criminel organisé qui a ensuite transformé l'outil en logiciel malveillant et en logiciel espion.

Il n'y a pas eu d'attaque au sens où ils n'ont pas piraté l'entreprise originale, mais ils l'ont achetée et ont fait ce qu'ils voulaient avec le code. Ce qui était autrefois un produit légitime est devenu illégitime du jour au lendemain. Aucun protocole de sécurité n'aurait pu résoudre ce problème. Les entreprises doivent désormais vérifier leurs fournisseurs et les tiers qui les soutiennent.

Le logiciel libre est à la fois une bénédiction et une malédiction. La bénédiction réside dans le fait que, puisqu'il est libre, vous avez accès au code source et pouvez le passer en revue autant que vous le souhaitez. La malédiction est que personne n'a le temps, l'énergie ou l'expertise nécessaire pour examiner en détail chaque morceau de code libre qu'ils utilisent. Des codes vulnérables aux logiciels malveillants, même accidentels, peuvent être introduits s'ils ne sont pas détectés par la communauté, et parfois cela ne se produit pas pendant longtemps.

Il existe deux choses qui pourraient atténuer ce problème : premièrement, le code pourrait être soumis à un outil d'analyse de code source, et il pourrait y avoir un système de notation pour les contributeurs de code dont le code présente systématiquement moins de vulnérabilités ou de bugs. Ce travail serait principalement effectué par des fournisseurs tiers. Deuxièmement, il existe déjà des startups bien établies dans le secteur de la vérification des produits open source afin de montrer quels objets d'un dépôt sont considérés comme fiables et lesquels ne le sont pas encore.

Les analyses de vulnérabilités actuelles dans les logiciels libres représentent un seul contrôle, mais ce type de sécurité seul n'est pas suffisant. Il doit être combiné avec des contrôles supplémentaires avant d'être utilisé dans toute votre organisation.

## Violations de données

En plus des ransomwares et des attaques sur la chaîne d'approvisionnement, les violations de données sont un problème courant. En 2020, il y a eu 1,8 billion de dollars de pertes dues à des violations de données, affectant 7,8 milliards d'enregistrements de données. Par exemple, une violation chez McDonald's a compromis les données des clients, des partenaires et internes.

## Chiffrement

La première partie de la solution consiste à disposer de meilleurs outils de sécurité pour les données et l'infrastructure. Chiffrer l'accès et incorporer le refus par défaut est essentiel afin que même si quelqu'un parvient à entrer par la porte d'entrée, il n'ait pas accès à tout. Les données doivent également être chiffrées à l'intérieur de l'organisation, non seulement celles qui sont exposées dans le cloud ou celles envoyées à l'extérieur. Toutes les données qui traversent votre réseau, ainsi que les données au repos, doivent être chiffrées.

Le chiffrement a un coût, mais sur du matériel moderne, il y a une accélération intégrée qui annule la pénalité. Vous pouvez désormais activer le chiffrement dans l'ensemble de votre organisation sans impact sur les performances.

## Segmentation

Une autre partie est les enclaves, ou la segmentation. L'un des défis dans les environnements d'entreprise en réseau est que encore une fois, si quelqu'un entre par la porte, il est libre de faire ce qu'il veut si tout est connecté. Il y a eu récemment un mouvement visant à prendre le développement et à le déplacer dans son propre réseau, et c'est un début, mais ce n'est que la partie visible de l'iceberg. La segmentation du réseau devrait être appliquée dans toute l'organisation. Vous pouvez toujours avoir des passerelles, mais elles doivent se conformer à un ensemble de règles et aideront à limiter les impacts. Par exemple, si votre service d'assistance est attaqué, vos systèmes RH ne seront pas compromis en même temps.

La micro-segmentation était un mot à la mode il y a cinq ans environ, mais elle doit se produire maintenant. Il y a d'excellents outils disponibles pour aider à cela, tels que les écosystèmes de conteneurs où vous pouvez déployer une application et elle se trouve dans son propre réseau avec son propre pare-feu.

Mettre en place des informations d'authentification appropriée doit également se faire maintenant. L'authentification à facteurs multiples est nécessaire, tout comme l'authentification des entités. De nombreux outils sont automatisés et disposent de processus automatisés, il est donc essentiel que les entités, pas seulement les personnes, disposent de justificatifs adéquats.

## Zéro confiance

La confiance zéro a atteint un stade de maturité où elle devrait être mise en œuvre, et certains des principes essentiels tels que le refus par défaut et la méfiance envers tous sont cruciaux. La technologie a rattrapé le déploiement de ces types de concepts.

Les développeurs peuvent s'inquiéter du ralentissement du processus causé par ces outils de sécurité, mais il existe des moyens de concevoir l'architecture pour atténuer ce problème. Par exemple, si vous êtes développeur et que vous disposez des identifiants et des accès appropriés, vous devriez être en mesure d'accéder aux éléments dont vous avez besoin lorsque vous en avez besoin, et de perdre cet accès une fois que vous avez terminé, plutôt que d'avoir des identifiants vous donnant accès à tout en permanence. L'idée de la confiance zéro n'est pas que l'entreprise ne fait pas confiance au développeur, mais que l'accès est accordé uniquement au bon moment, et non pas un accès généralisé si un acteur malveillant vole les identifiants.

Aucune industrie ne peut se permettre de négliger les risques actuels. Chaque organisation doit envisager la sécurité différemment et mettre en œuvre des mesures de sécurité à tous les niveaux de l'organisation et de l'architecture.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
