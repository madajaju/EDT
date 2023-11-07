---
layout: posts
title: "Un argument en faveur du Cloud Multi-Hybride."
number: 22
permalink: episode-EDT22-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 22
tags:

date: Tue Sep 22 2020 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher décrit pourquoi un Architecte Multi-Hybrid Cloud pourrait déjà être dans votre centre de données. La plupart des organisations ont déjà tous les ingrédients. Ils ont juste besoin de savoir comment ils s'assemblent."
video: "https://youtu.be/1cISpr_FNFM"
description: "Darren Pulsipher décrit pourquoi un Architecte Multi-Hybrid Cloud pourrait déjà être dans votre centre de données. La plupart des organisations ont déjà tous les ingrédients. Ils ont juste besoin de savoir comment ils s'assemblent."
---

<div>
{% include transistor.html id="e22edf51" title="#22 An Argument for Multi-Hybrid Cloud" %}

{% include youtube.html id="1cISpr_FNFM" %}
</div>

---

## Environnement Cloud actuel

Au cours des cinq dernières années, il y a eu un changement fondamental dans l'environnement informatique. La croissance continue du Cloud Public et l'émergence d'options de Cloud Privé ont laissé de nombreux DSI et services informatiques en retard. Dans le marché compétitif d'aujourd'hui, de nombreuses équipes de développement doivent avancer plus rapidement que ce que la plupart des services informatiques peuvent fournir. Les équipes de développement ont trouvé dans les Clouds Publics tels que AWS, GCE et Azure une option viable pour la "IT maison" à l'ancienne. Les fournisseurs de cloud public ont rendu la création de nouvelles infrastructures facile et rapide. Plus besoin d'attendre plusieurs niveaux d'approbations techniques et commerciales, d'espace physique dans le centre de données et de problèmes d'approvisionnement fournisseur. Maintenant, en quelques minutes seulement, une équipe de développement peut disposer de toute l'infrastructure dont elle a besoin pour son nouveau projet.

Avant que les directeurs informatiques du Cloud public ne puissent facilement "se promener" autour des cubes et compter le nombre de machines "IT de chalet" qui fonctionnaient sous les bureaux des gens. Avec les machines physiques invisibles pour les services informatiques, il est impossible d'identifier les équipes et les infrastructures de leurs projets. De nombreux Cloud publics ont donné aux organisations la possibilité de consolider la comptabilité de tous les comptes pour des domaines spécifiques, mais la visibilité sur ce qui est en cours d'exécution et qui travaille sur l'infrastructure est encore en quelque sorte une "chasse aux trésors". Souvent, ces projets "rouge" deviennent visibles lorsque les projets sont produits et doivent être intégrés dans une infrastructure sécurisée de l'entreprise. La sécurité, la confidentialité et les politiques réglementaires peuvent rendre la "production" de projets presque impossible. Surtout si les développeurs ont étroitement lié leurs applications à l'infrastructure Cloud.

Les départements informatiques visionnaires font de leur mieux pour capturer le "IT des chalets" en travaillant avec les Clouds publics et les fournisseurs de logiciels indépendants (ISV) pour créer des "portails d'entreprise" dans le Cloud. Mettre en place un portail de passage est un bon début pour capturer les projets utilisant l'infrastructure, mais de nombreuses organisations constatent que le simple portail laisse les équipes de développement insatisfaites. Au cours des dernières années, j'ai travaillé avec de nombreuses de ces organisations pour identifier des cas d'utilisation, des architectures et des technologies afin d'aider à développer ces portails augmentés que nous appelons "Hybrid Multi-Clouds" (MHC). En général, trois grandes technologies sont intégrées pour construire ces MHC. Les plateformes de gestion de Cloud (CMP), les cadres d'automatisation et les outils de Plateforme en tant que Service (PaaS).

## Plateforme de gestion du cloud (CMP)

La responsabilité principale des plateformes de gestion de cloud est de gérer plusieurs cloud hétérogènes, à la fois publics et privés. Elles offrent aux utilisateurs finaux la possibilité de gérer plusieurs clouds et leur infrastructure à partir d'une interface commune. Les CPPs ont généralement pour objectif de faciliter la tâche des administrateurs de cloud. Bien que les outils de la plateforme de gestion de cloud se concentrent principalement sur la gestion de plusieurs cloud, de nombreux outils disposent également de fonctionnalités issues des plateformes en tant que service (PAAS) et des frameworks d'automatisation, ou au minimum, disposent d'une architecture de plug-in pour les prendre en charge.

## Cas d'utilisation couverts

Gérer les clouds publics

Gestion des clouds privés

Gestion des identités sur le cloud.

Gérer l'infrastructure sur plusieurs clouds.

## Cadres d'automatisation

Les principaux responsabilités des Automation Frameworks sont d'automatiser le déploiement, la gestion et la mise à jour des piles logicielles sur l'infrastructure. Les Automation Frameworks sont issus de la communauté DevOps et se concentrent généralement sur des processus répétables. Beaucoup de ces outils incluent des langages de script permettant aux ingénieurs DevOps de gérer et de configurer de manière répétable les logiciels et les services. De nombreuses équipes DevOps sont très compétentes dans l'utilisation de ces outils.

## Cas d'utilisation couverts

Déployer le logiciel sur l'infrastructure

Gérer les logiciels sur l'infrastructure

Améliorer les logiciels et les services

## Plateforme en tant que Service (PAAS)

La plateforme en tant que service est principalement responsable de fournir un portail unique pour réutiliser des plateformes et les déployer sur l'infrastructure. Les outils PaaS sont généralement très orientés vers le développeur, ce qui peut entraîner des configurations d'infrastructure inflexibles. Beaucoup de ces outils ont un portail web qui permet aux développeurs de sélectionner des services et de les déployer dans l'infrastructure.

## Scénarios d'utilisation couverts.

Déployer / Gérer des services / applications

Gérer le catalogue de services

Développer de nouveaux services/applications.

## La convergence crée le Multi-Cloud Hybride (MCH).

Parce qu'aucun ensemble d'outils ne possède tous les cas d'utilisation nécessaires pour gérer les clouds, les applications, l'infrastructure et les services, les équipes passent plusieurs années d'effort à installer, configurer et intégrer ces trois ensembles d'outils ensemble. Cela a conduit à l'émergence de technologies qui intègrent ces outils, y compris de nouvelles offres de produits et de nouvelles fonctionnalités dans les produits actuellement disponibles.

De nombreux produits CMP incluent des PaaS et des cadres d'automatisation dans leurs solutions. Les outils PaaS gèrent désormais plusieurs clouds. Les cadres d'automatisation commencent à offrir des portails web et une connectivité à plusieurs clouds. Beaucoup d'outils adoptent la vision d'un Hybrid Multi-Cloud. Lorsque l'on choisit quel(s) outil(s) utiliser, il est important de se rappeler les fondements de l'outil.

## Déploiement d'une solution

L'écosystème Hybrid Multi-Cloud est encore assez récent et nécessite encore quelques intégrations approfondies entre les outils. Certains outils commencent à proposer des solutions prêtes à l'emploi et complètes, mais avec leur propre vision du monde. Étant donné que l'écosystème est émergent, il y a de nombreux acteurs et choix possibles. Le temps dira qui remportera cette place. Pour l'instant, il sera intéressant de voir les outils converger et se consolider pendant que les fonctionnalités se développent.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
