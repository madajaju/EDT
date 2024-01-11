---
layout: posts
title: "Solutions de données Multi Cloud avec Hammerspace"
number: 26
permalink: episode-EDT26-fr
lang: fr
nav_exclude: true
nav_order: 26
tags:
    - hammerspace
    - data
    - technology
    - dataarchitecture
    - multicloud
    - compute
    - multihybridcloud
    - datamesh

date: Wed Oct 21 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Johan Ballin

img: thumbnail.png
image: thumbnail.png
summary: "Johan Ballin, directeur du marketing technique chez Hammerspace, et Darren Pulsipher, architecte de solutions en chef du secteur public chez Intel, discutent de la technologie de cloud hybride de Hammerspace qui libère les données de l'infrastructure de stockage, offrant ainsi une portabilité et des performances des données."
video: "https://youtu.be/url"
description: "Johan Ballin, directeur du marketing technique chez Hammerspace, et Darren Pulsipher, architecte de solutions en chef du secteur public chez Intel, discutent de la technologie de cloud hybride de Hammerspace qui libère les données de l'infrastructure de stockage, offrant ainsi une portabilité et des performances des données."
---

<div>
{% include transistor.html id="301a5c10" title="#26 Multi Cloud Data Solutions with Hammerspace" %}

{% include youtube.html id="url" %}
</div>

---

Le stockage est prêt à être perturbé. Actuellement, la gestion des données se fait de manière laborieuse, procédurale et souvent manuelle, ce qui entraîne souvent des erreurs. Hammerspace a été fondé pour résoudre ce problème en abstrayant les données de l'infrastructure de stockage.

## Imaginez, ne serait-ce qu'une seconde...

... si vos données étaient libérées de l'infrastructure de stockage. Affranchies des limitations imposées par les systèmes de stockage actuels, les utilisateurs pourraient gérer et protéger leurs données en libre-service, modifier instantanément le profil des coûts et accéder aux données depuis n'importe où sur l'infrastructure. Le stockage défini par logiciel pourrait augmenter les performances à la demande et déployer des charges de travail modernes telles que Kubernetes sur n'importe quelle infrastructure sous-jacente, où que ce soit.

## Le défi

Les applications sont devenues transportables, mais les données sont toujours cloisonnées. Le défi réside dans le fait que les performances, la fiabilité et la gestion sont toutes affectées à grande échelle à cause du problème de cloisonnement. La solution consiste à libérer les données des limitations de l'infrastructure sous-jacente. Hammerspace réalise cela grâce à la désagrégation des métadonnées, en assimilant les plus petites parties constituantes pour rendre les données transportables.

## Détacher les données du stockage.

Avec cette technologie, vos applications disposent de données à la demande, où que vous soyez. Vous avez un contrôle indépendant, des plans de données, un espace de noms mondial et un système de fichiers qui s'étend sur plusieurs centres de données et clouds. Le stockage est orchestré ; les données sont entièrement automatisées et exploitent une gestion déclarative autonome des données. En d'autres termes, cela sépare le "comment" du "quoi", en déclarant l'état final souhaité sans avoir besoin de détailler chaque aspect de la manière d'y parvenir.

## L'architecture d'Hammerspace

Le système vous permet de fonctionner au niveau granulaire des fichiers, fournit des services de données de classe entreprise tels que des instantanés et des clones, et se déplace facilement vers une échelle massive d'un centre de données à un autre, d'un centre de données vers le cloud, puis de nouveau vers un centre de données pour le disperser dans un scénario de cloud multi-hybride.

## Le stockage traditionnel ne parvient pas à relever les défis de la modernité.

L'héritage du stockage ne s'étend pas suffisamment, même avec des solutions d'expansion horizontale, en nuage ou à grande échelle, car même ces grappes deviennent des silos, laissant parfois des données qui ne peuvent pas être corrélées et analysées. Le stockage traditionnel a également du mal à augmenter la capacité et les performances indépendamment.

La réplication est une technologie ancienne qui entraîne une prolifération des données copiées. Au lieu de déplacer les plus petits éléments constitutifs, vous déplacez la charge utile dans son intégralité. La gestion des données est souvent reléguée au second plan ; la gestion des données doit avoir lieu en amont, et non en aval.

Un problème que l'architecture Hammerspace résout est de trouver facilement des choses. La versionnage peut causer de gros problèmes commerciaux. Par exemple, Airbus et Boeing ont tous deux rencontré d'énormes problèmes car certains ingénieurs n'avaient pas leurs versions les plus à jour. La solution consiste à orchestrer les données.

## Orchestration des données

Orchestration, tout d'abord, consiste à découpler tous les différents silos ; les données sont traitées comme une seule entité. Hammerspace assimile les plus petites parties constitutives, les métadonnées, pour créer, essentiellement, un système anti-gravité des données. Ensuite, ils mettent en œuvre des objectifs tels que la durabilité, la disponibilité et les instantanés, ou des actions personnalisées définies qui peuvent être effectuées grâce à un script Hammer. Enfin, les données, qu'il s'agisse de Kubernetes, de NFS ou de SMB, deviennent portables et s'intègrent au système.

Ce que cela signifie concrètement, c'est que vous n'avez pas besoin de vous rendre dans un autre silo pour prendre en charge une charge de travail particulière. Les données sont livrées là où vous le souhaitez. Cette mobilité des données est essentielle car elle est en temps réel ; il ne s'agit pas d'une migration de données, qui est perturbatrice et entraîne une période d'arrêt.

Pour minimiser les coûts élevés de sortie, les données sont dédupliquées et compressées sur une base granulaire de fichiers. Au lieu de déplacer un volume fixe complet, vous pouvez sélectionner les données que vous souhaitez déplacer en fonction de toute expression telle que les dossiers, les balises de métadonnées ou un descripteur client. Cela offre de la flexibilité et des économies de coûts.

## Architecture de l'espace martelage

Dans l'architecture Hammerspace, le système de fichiers global se compose de trois composants, du point de vue élevé : le système de fichiers global lui-même, la présentation de l'interface utilisateur (NFS, CSI Driver et SMB), et Anvil au sein du système de fichiers global. Anvil est le composant de gestion des métadonnées et DSX, qui fournit des services de gestion des métadonnées. Ces éléments peuvent être mis en œuvre en tant que machines virtuelles, VMware, KBM ou Hyper-V. Anvil est configuré en forme de A, il y en a donc au moins deux à chaque emplacement. DSX peut être parallélisé pour augmenter les performances, de sorte que vous pouvez en avoir plusieurs à différents emplacements pour garantir des performances suffisantes. Ils peuvent être facilement redimensionnés à la baisse.

À l'arrière-plan, le stockage sous-jacent peut être le stockage défini par logiciel propre à Hammerspace avec des disques directement attachés, un NAS assimilé, un cloud quelconque, ou toute combinaison de ces options. Cela peut également être mis à l'échelle horizontalement, permettant ainsi d'ajuster les performances et la capacité de manière indépendante. Suivant le modèle du cloud, il est également élastique : si les besoins de l'entreprise changent à cet endroit précis, il est possible de réduire les performances ainsi que la capacité pour s'assurer que les applications disposent exactement de ce dont elles ont besoin. Tout cela offre une architecture très flexible pour répondre à n'importe quelle charge de travail d'application à l'avant-plan.

Un grand avantage de cette architecture flexible est la capacité d'assimiler des données qui sont stockées sur des appareils qui ne vous appartiennent pas, tels que des NAS ou dans le cloud. Cela simplifie le transfert des données. Par exemple, si vous avez un ancien NAS et que vous souhaitez migrer vers un nouveau NAS, peu importe s'il s'agit du même fournisseur ou de différents fournisseurs. Hammerspace assimile les métadonnées et déplace les données en arrière-plan de manière complètement transparente pour les applications, car il s'agit d'une mobilité de données en direct. Un autre avantage significatif est qu'il n'y a aucune interruption lors du déplacement des données.

Si vous souhaitez essayer cette technologie, rendez-vous sur hammerspace.com et commencez avec un essai gratuit incluant une licence pour jusqu'à 10 téraoctets déployés dans Azure, AWS ou Google Cloud.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
