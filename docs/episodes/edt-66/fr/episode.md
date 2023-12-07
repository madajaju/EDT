---
layout: posts
title: "Gérer la complexité dans le Cloud"
number: 66
permalink: episode-EDT66-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 66
tags:
    - data
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - aiven

date: Wed Oct 13 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - David Esposito

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Dans cet épisode, partie 2 sur 2, Darren poursuit sa conversation avec David Esposito, architecte de solution mondial chez Aiven, sur l'accélération de l'adoption du cloud tout en réduisant la complexité et les coûts."
video: "https://youtu.be/url"
description: "Dans cet épisode, partie 2 sur 2, Darren poursuit sa conversation avec David Esposito, architecte de solution mondial chez Aiven, sur l'accélération de l'adoption du cloud tout en réduisant la complexité et les coûts."
---

<div>
{% include transistor.html id="49896b3b" title="#66 Managing Complexity in the Cloud" %}

{% include youtube.html id="url" %}
</div>

---

## Réduire la complexité

Quelles pratiques commerciales doivent être mises en place pour gérer les actifs cloud et réduire la complexité ? Tout d'abord, il faut avoir un code d'infrastructure et des déploiements automatisés. Tout ce qui suit est une conversation pour définir les risques pour l'entreprise, tels que les pannes et les temps d'arrêt, comment atténuer ces risques et combien investir dans cela.

Pour certaines entreprises, il est essentiel d'avoir le plus haut niveau de disponibilité. Dans le secteur de la santé, par exemple, il peut être nécessaire de sauvegarder toutes les données dans plusieurs endroits et de rendre tous les services disponibles, car des décisions critiques et vitales peuvent être basées sur ces données. Cependant, si vous êtes dans le commerce électronique en avril, vous pouvez peut-être consacrer un peu de temps à cette région en difficulté car les conséquences ne sont pas aussi graves.

Dans le domaine de la santé, il est logique d'adopter le multi-cloud, même si cela accroît la complexité. D'autres secteurs qui peuvent bénéficier du multi-cloud sont ceux qui sont fortement réglementés, tels que les services financiers, le pétrole et le gaz ou les agences fédérales. En cas d'incident de sécurité, ils peuvent fermer un cloud et le déployer ailleurs.

Lorsque vous considérez le multi-cloud, sachez qu'il y a des complexités liées aux différences d'API. Si vous utilisez GCP et que vous savez comment déployer tout et envisagez de passer à AWS, vous devez réapprendre la plateforme et le processus de déploiement, voire même écrire une partie de ce code. C'est pourquoi la conteneurisation est populaire, car vous pouvez déployer n'importe où. Cependant, cela devient plus complexe avec d'autres services ; par exemple, les configurations de Postgres diffèrent entre AWS et GCP, peut-être avec des versions de correction différentes, des configurations réseau différentes et des extensions différentes. Ainsi, un service sur un cloud n'est pas le même que les services sur un autre.

De plus, les environnements conteneurisés ne sont pas idéaux pour toutes les situations, et une situation idéale devient plus importante à mesure que vous augmentez l'échelle. Si vous utilisez Kafka et traitez 1 000 messages par seconde, votre propre conteneur convient. Mais si vous commencez à gérer plus d'un million de messages par seconde, un gigaoctet, c'est une autre histoire.

## Sécurité

La sécurité dans le cloud est une bête différente de la sécurité dans votre propre centre de données. La chose la plus importante à prendre en compte est la sortie des données de vos propres murs. Vous devez avoir des contrôles de sécurité appropriés en place pour éviter les fuites ou tout accès non autorisé aux données, et vous assurer que les exigences de conformité sont respectées. Cela nécessite une formation car les mesures de sécurité pour les centres de données sur site ne se traduisent pas directement dans le cloud. Par exemple, les conteneurs S3 sont chiffrés au repos, mais pas si vous avez un accès programmable via des compartiments exposés publiquement.

De plus, vous devez savoir ce que font les fournisseurs de services. Par exemple, Aiven exécute des bases de données sur les GPU EC2, GCP Compute ou Azure. Lorsqu'ils stockent sur le disque, il y a un niveau de chiffrement réalisé au niveau du cloud par le fournisseur de cloud, de sorte que les données sont chiffrées au repos. Ensuite, Aiven ajoute une autre couche de chiffrement avec leurs propres clés gérées, donc les données sont doublement chiffrées au repos, et toutes les données en transit sont chiffrées. Tout ce qui est envoyé au serveur est chiffré pour ce serveur particulier, et lorsqu'un serveur est désactivé, il est verrouillé avec la clé d'Aiven ainsi qu'avec la clé du fournisseur de cloud.

## Aiven translation in French: Aiven.

David a rejoint Aiven en tant que membre de l'équipe d'architecture des solutions lorsqu'il a constaté que l'entreprise proposait de meilleures solutions cloud que quiconque qu'il avait rencontré, en se basant sur son expérience précédente avec Kafka géré et d'autres technologies open source. La mission d'Aiven est d'améliorer la vie des développeurs. Ils offrent un essai gratuit, avec Kafka prêt pour la production en cinq minutes. Ils disposent également d'articles d'aide et de tutoriels pour vous guider, de sorte que vous puissiez envoyer un message Kafka dans le cloud en utilisant les meilleures pratiques cloud-native en moins de dix minutes.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
