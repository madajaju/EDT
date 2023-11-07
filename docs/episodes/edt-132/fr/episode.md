---
layout: posts
title: "Gestion BareMetal définie par logiciel"
number: 132
permalink: episode-EDT132-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 132
tags:
    - metify
    - sdi
    - technology
    - baremetal
    - heterogeneouscompute
    - compute

date: Wed Apr 05 2023 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Ian Evans
    - Mike Wagner

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, Darren interviewe les fondateurs de Metify, Ian Evans et Mike Wagner, à propos de leur approche unique de gestion de l'infrastructure définie par logiciel "bare metal" en utilisant la norme Redfish."
video: "https://youtu.be/ecB9dPexjIM"
description: "Dans cet épisode, Darren interviewe les fondateurs de Metify, Ian Evans et Mike Wagner, à propos de leur approche unique de gestion de l'infrastructure définie par logiciel "bare metal" en utilisant la norme Redfish."
---

<div>
{% include transistor.html id="dd6ccded" title="#132 Software Defined BareMetal Management" %}

{% include youtube.html id="ecB9dPexjIM" %}
</div>

---

Avec plus de deux décennies d'expérience dans le domaine des centres de données, Ian partage ses connaissances sur l'optimisation de l'infrastructure, l'automatisation de la gestion des serveurs et la rationalisation des différents composants d'un centre de données. De son côté, Mike, qui a travaillé précédemment chez IBM et Red Hat, se concentre sur la vente consultative et les ventes dirigées par les canaux pour mieux comprendre les problèmes et les tendances des entreprises dans l'exploitation de leurs centres de données. Ensemble, ils ont créé Metify en 2020 pour fournir des solutions d'automatisation pour la gestion des serveurs, du stockage et des appareils réseau dans les centres de données, malgré l'essor des services de cloud public tels que RWC Azure et GCP.

## Automatisation du centre de données

Automatiser la gestion d'un centre de données peut rapprocher la gestion sur site de l'expérience d'un cloud public tout en réduisant les coûts. L'un des éléments essentiels de cette transformation est la standardisation et l'utilisation de normes ouvertes comme la spécification Redfish DMCA pour rendre cette automatisation possible. L'ubiquité de cette spécification sur les cartes mères de classe entreprise la rend accessible à tous les acteurs pour s'y intégrer. Les pressions financières et la demande des utilisateurs sont essentielles pour pousser les fabricants d'équipements d'origine à mettre en œuvre ces normes ouvertes. Dans l'ensemble, l'automatisation et la standardisation peuvent aider les centres de données à concurrencer les fournisseurs de services cloud en termes de coûts opérationnels tout en améliorant les capacités de gestion des serveurs.

L'efficacité du centre de données peut être améliorée en utilisant des outils qui permettent l'automatisation et l'intégration avec des frameworks standard. Les fournisseurs de matériel font face à une pression due à la banalisation de la technologie, ils doivent donc se différencier en offrant des serveurs similaires en boîtier blanc à plus petite échelle. Metify offre une interface unique pour gérer les appareils de n'importe quel fabricant, tant qu'ils sont compatibles avec BMC et respectent les spécifications Redfish. Il existe des normes émergentes pour gérer les petits appareils via Redfish ; la question demeure sur jusqu'où l'extensibilité descend dans les parties spécifiques au réseau de la pile technologique.

## Cloud hybride

La montée en puissance des stratégies de cloud hybride guide la manière dont les entreprises gèrent leurs centres de données, leurs environnements de périphérie et de cloud. La croissance du cloud public est significative ; cependant, il y a une croissance massive dans les espaces de cloud privé. Metify offre une expérience similaire au cloud du point de vue des opérations, permettant aux administrateurs système de gérer leur périphérie, leur centre de données ou plusieurs centres de données via une API standardisée. Maintenir les API ouvertes et normalisées est essentiel pour que les clients puissent utiliser des outils de gestion familiers tels que TerraForm et Ansible. Les technologies de cloud hybride permettent aux entreprises d'optimiser les coûts, la gouvernance, la sécurité et l'efficacité.

L'un des dangers d'une norme ouverte peut être sa vulnérabilité aux atteintes à la sécurité sans les mesures de commande et de contrôle appropriées. Metify aborde ce problème en mettant en place une approche systémique pour gérer le matériel nu à travers des matériels hétérogènes en intégrant l'audibilité, l'autorisation, l'accès et les contrôles aux normes ouvertes. Le produit de Metify se concentre sur la fourniture d'un niveau de contrôle pour prévenir les incidents indésirables, et ils s'intègrent avec des outils de gestion de flux de travail pour l'automatisation.

## BareMetal SDI se traduit en français par "SDI natif".

De nombreuses technologies de centres de données modernes reposent sur la virtualisation comme base de leur plan de contrôle de gestion. Cependant, la gestion des infrastructures dédiées reste une tâche traditionnelle nécessitant beaucoup de travail manuel. Cette approche unique de l'infrastructure de cloud privé ne repose pas sur la virtualisation. Au lieu de cela, elle utilise une approche d'infrastructure définie par logiciel pour la gestion des infrastructures dédiées, permettant un mélange d'infrastructures dédiées, de machines virtuelles (VM) et de conteneurs. Cette approche permet aux administrateurs système de gérer l'infrastructure sous-jacente de manière plus efficace et de fournir une expérience cloud sans friction. Elle peut prendre en charge des environnements informatiques hétérogènes, où les processeurs (CPU), les processeurs graphiques (GPU), les processeurs de flux programmable (FPGA), les processeurs vidéo programmables (VPU) et les processeurs réseau programmables (NPU) peuvent être exploités pour plusieurs flux de travail. Avec Redfish et une extension du schéma, Metify peut facilement contrôler de nouveaux appareils, et ils considèrent l'écosystème en expansion comme extrêmement précieux pour le développement de produits.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
