---
layout: posts
title: "Automatisation de la gestion des processus métiers"
number: 114
permalink: episode-EDT114-fr
has_children: false
lang: fr
nav_exclude: true
parent: Épisodes
grand_parent: Français
nav_order: 114
tags:
    - compute
    - businessprocessmanagement
    - capitalbpm
    - bpm
    - automation
    - camunda
    - rpa

date: Tue Nov 22 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Max Young

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, architecte en chef des solutions du secteur public chez Intel, et Max Young, PDG de Capital BPM, discutent de l'opérationnalisation de la gestion des processus métier avec des programmes de modélisation."
video: "https://youtu.be/url"
description: "Darren Pulsipher, architecte en chef des solutions du secteur public chez Intel, et Max Young, PDG de Capital BPM, discutent de l'opérationnalisation de la gestion des processus métier avec des programmes de modélisation."
---

<div>
{% include transistor.html id="98cc2837" title="#114 Automating Business Process Management" %}

{% include youtube.html id="url" %}
</div>

---

La modélisation BMP rappelle à Darren lorsqu'il suivait des cours de dessin technique au lycée, et l'introduction d'AutoCAD et de ses systèmes de dessin assisté par ordinateur a changé la donne. Auparavant, ils devaient utiliser des pages et des pages de systèmes complexes et de diagrammes pour que les gens puissent construire, mais ils ne pouvaient pas tester le modèle pour s'assurer qu'il était correct. Grâce à la modélisation informatique, ils pouvaient exécuter des simulations pour éviter des problèmes tels que le passage de câbles électriques et de canalisations dans le même trou.

Ceci est similaire à des architectes utilisant PowerPoint pour montrer des processus d'affaires au lieu d'utiliser un outil de modélisation qui peut détecter les conflits et les problèmes dans ce que vous pensiez être le processus d'affaires.

Utiliser un outil de modélisation d'entreprise résout également un problème pratique en éliminant le temps perdu à réunir toutes les parties intéressées pour des réunions qui pourraient être plus productives. Au lieu de cela, vous pouvez mettre un modèle déployé entre les mains du client commercial et travailler avec lui à travers les étapes.

Après avoir articulé et modélisé les processus, vous pouvez choisir des points d'intégration qui peuvent être attachés à des interfaces RESTful pour obtenir des informations et les réinjecter. C'est ainsi que les processus métier peuvent s'intégrer aux microservices dans le cloud. Dans l'exemple du processus de recrutement, ces points pourraient être là où vous avez besoin d'une API pour invoquer des vérifications de l'historique professionnel ou du casier judiciaire. Les entrées seront des éléments tels que les numéros de sécurité sociale et les dates de naissance, et les sorties seront un booléen - les informations correspondent-elles ou non ? C'est ici que vous pouvez commencer à avoir cette conversation itérative.

Translatez ceci en français : ![image bpm](./bpm.png)

Il y a quelques étapes manuelles dans ce processus, et vous pouvez choisir celles à automatiser. Par exemple, si vous décidez qu'un entretien ne s'est pas bien déroulé, vous pouvez le renvoyer automatiquement au service des ressources humaines. Une fois que vous déploierez ce nouveau processus, vous pourrez revenir en arrière et consulter la version précédente si vous le souhaitez, de sorte que vous disposiez de deux versions concurrentes du logiciel qui fonctionnent et qui sont déployées dans le prototype.

Le modèle Camunda est un modèle natif, mais Capital BPM a développé ses propres applications qui aident à rationaliser une partie du travail et à soutenir différents rôles utilisateur.

Ce système est différent de la RPA car au lieu de capturer ce qu'un utilisateur fait avec des frappes clavier, un analyste d'affaires examine les processus et les étapes dans plusieurs départements. L'analyste observe le processus dans son ensemble, du haut vers le bas. Une RPA peut être intégrée à certaines étapes pour améliorer l'efficacité. Un exemple simple est que si un candidat à un emploi passe la vérification de l'historique professionnel et la vérification du casier judiciaire, il peut être transféré à un responsable RH senior; sinon, il est rejeté. Choisir des étapes spécifiques, ou des ensembles d'étapes, à automatiser est une approche itérative qui est utilisée avec succès dans le développement de logiciels depuis un certain temps.

Les RPAs peuvent changer la donne, mais ils sont tactiques et à court terme. Bien que ces gains à court terme puissent être rentables, il est nécessaire d'examiner l'ensemble du processus commercial afin de trouver des optimisations et les étapes à éliminer. L'histoire de la femme qui coupait toujours le rôti avant de le faire cuire parce que c'est ainsi que sa mère le faisait est comparable à certains processus d'entreprise. La femme a finalement demandé à sa mère pourquoi elle coupait le rôti et sa mère a répondu : "Pour qu'il rentre dans ma poêle." De nombreux processus d'entreprise existent simplement parce qu'ils ont toujours été réalisés de cette manière, et personne n'a pensé à remettre en question pourquoi.

Tester, simuler, déplacer des éléments et exécuter des processus de manière répétée dans le modeleur, autrement dit, tester de manière empirique, peut aider à éliminer cet excès de processus et ajouter une valeur significative. La visualisation et l'expérimentation sont des éléments clés de l'ensemble du processus.

Max souligne qu'il y a une fidélité entre le diagramme et l'exécution réelle. Les développeurs dessinent souvent des diagrammes comme point de départ. Pourtant, les graphiques disparaissent au fur et à mesure que le développement passe par différentes parties, donc ce que l'entreprise pense qu'il se passe et ce qui se passe réellement sont différents. Le diagramme et la réalité sont distincts. Dans ce type de modélisation, l'image est toujours une représentation précise de ce qui se passe. De plus, il est facile de voir et d'apporter des modifications pour amélioration.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
