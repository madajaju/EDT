---
layout: posts
title: "DevOps avec rapidité tout en réduisant les risques"
number: 53
permalink: episode-EDT53-fr
lang: fr
nav_exclude: true
nav_order: 53
tags:
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - multicloud

date: Mon Jun 14 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, Robert Boule, responsable de l'ingénierie des solutions chez OpsMx, rejoint Darren pour parler d'améliorer la vitesse sans augmenter le risque dans le processus DevOps. Les trois domaines clés à équilibrer dans la livraison de logiciels sont la vitesse, le risque et la qualité. La plupart des gens peuvent gérer un ou deux de ces éléments, mais ajouter le troisième peut être difficile. Par exemple, vous pourriez être capable de livrer à une bonne vitesse parce que vous avez un excellent système de déploiements continus, mais une fois que vous introduisez des contrôles de conformité et de politique, vous êtes confronté à un défi. Est-ce que vous vous arrêtez et vérifiez ces choses, ou peut-être importez-vous des résultats d'un autre outil ? Soudainement, votre vitesse en souffre."
video: "https://youtu.be/url"
description: "Dans cet épisode, Robert Boule, responsable de l'ingénierie des solutions chez OpsMx, rejoint Darren pour parler d'améliorer la vitesse sans augmenter le risque dans le processus DevOps. Les trois domaines clés à équilibrer dans la livraison de logiciels sont la vitesse, le risque et la qualité. La plupart des gens peuvent gérer un ou deux de ces éléments, mais ajouter le troisième peut être difficile. Par exemple, vous pourriez être capable de livrer à une bonne vitesse parce que vous avez un excellent système de déploiements continus, mais une fois que vous introduisez des contrôles de conformité et de politique, vous êtes confronté à un défi. Est-ce que vous vous arrêtez et vérifiez ces choses, ou peut-être importez-vous des résultats d'un autre outil ? Soudainement, votre vitesse en souffre."
---

<div>
{% include transistor.html id="9eb5fd35" title="#53 DevOps with Speed While Reducing Risk" %}

{% include youtube.html id="url" %}
</div>

---

Les trois domaines clés à équilibrer dans la livraison de logiciels sont la vélocité, le risque et la qualité. La plupart peuvent gérer un ou deux de ces aspects, mais ajouter le troisième peut devenir difficile. Par exemple, vous pourriez être en mesure de livrer à une certaine vélocité grâce à un excellent système de déploiement continu (CD), mais une fois que vous introduisez des vérifications de conformité et de politique, vous êtes confronté à un défi. Faut-il s'arrêter et effectuer ces vérifications, ou peut-être intégrer des résultats provenant d'un autre outil ? Soudainement, votre vélocité en souffre.

OpsMx travaille pour aider les gens à automatiser ces points de décision. L'automatisation est l'élément le plus important pour maintenir la vélocité tout en augmentant les deux autres piliers, le risque et la qualité.

## Solution OpsMx : Livraison de logiciels entièrement automatisée.

La automatisation fonctionne comme une agrégation de données, en récupérant les résultats des différents outils de la chaîne d'outils, puis en ayant un mécanisme comme un gestionnaire de politique qui fournit des résultats attendus sur les coches des outils tels que BlackDuck. Si cela semble correct, le pipeline ne s'arrête pas, comme c'est actuellement le cas, pour une vérification humaine.

## Une livraison plus rapide des applications augmente les taux d'échec.

La vitesse de livraison des applications est passée de hebdomadaire ou mensuelle à horaire, ajoutant une pression pour produire rapidement. Cependant, lorsque vous essayez d'augmenter la vitesse, vous pourriez commencer à perdre le contrôle de la qualité, peut-être en sautant certaines vérifications de risques. Le résultat net est que plus vous essayez de vous déplacer rapidement, plus vous êtes susceptible de rencontrer une défaillance.

## Points de friction et espaces problématiques

Avec une utilisation stratégique de l'automatisation, vous avez la capacité d'augmenter la vitesse sans prendre de risques. La vérification continue peut réduire une tâche de trois ou quatre heures à cinq ou dix secondes. Au lieu d'utiliser du travail humain pour analyser les journaux à la recherche de comportements anormaux qui auraient pu passer un contrôle binaire réussi/échoué, la vérification continue peut le faire automatiquement, permettant aux personnes de se concentrer uniquement sur les cas exceptionnels.

## Que signifie l'automatisation dans ce contexte?

La pièce suivante utilise les outils requis par l'équipe de sécurité et de conformité, tels que BlackDuck. Grâce à l'automatisation, il n'est pas nécessaire d'arrêter le processus pour demander à quelqu'un d'interpréter les résultats avant de continuer car cela se fera automatiquement.

Les autres pièces sont des politiques à un niveau supérieur si vous êtes dans une industrie réglementée avec plus de vérifications, ou quelque chose d'aussi simple qu'un détaillant qui, par exemple, ne souhaite pas publier de nouveaux logiciels deux semaines avant Noël. Ces vérifications peuvent être automatisées pour éliminer le besoin d'approbation humaine, permettant ainsi à l'ensemble du processus de se poursuivre s'il n'y a pas d'exceptions. L'idée est de supprimer autant de portes humaines que possible pour permettre au processus de s'écouler.

Le jeu principal d'automatisations de contrôle et de politiques est réutilisable à travers les pipelines ; vous n'avez qu'à personnaliser ou en créer pour les critères spécifiques à votre cycle de publication.

## Solution OpsMx : Livraison de logiciel entièrement automatisée

OpsMx vous donne la possibilité de créer ces pipelines et les automatisations d'analyse des journaux. Spinnaker est l'outil actuel, mais la vision d'OpsMx est d'être aussi agnostique que possible en matière de déploiement continu (cd), permettant l'utilisation de tous les outils de cd tels que Jenkins et Microsoft Azure. OpsMx utilise la partie cd pour l'automatisation, mais se situe au-dessus de cela pour aider à prendre des décisions automatisées.

Une partie croissante de l'outil est l'apprentissage automatique pour aider à comprendre ce qui est considéré comme une référence pour une application particulière par rapport à un comportement anormal. Il existe également un modèle d'apprentissage supervisé où un professionnel DevOps, un ingénieur ou un propriétaire de produit peut spécifier le comportement anormal attendu dans le contexte de l'application.

Le système permet également une traçabilité. Toute modification ou exception est documentée. Il existe une piste de vérification complète de tout ce qui se passe, depuis l'approbation d'une exception par qui que ce soit, jusqu'au déploiement de l'artefact utilisé et à l'image de base utilisée. Que cela soit exécuté sur le cloud ou sur site, vous pouvez voir l'ensemble du processus comme une entité unique.

Un autre aspect de la visibilité fournie par OpsMx est une sorte de carte de ce qui est déployé où, telle que la série de microservices actuellement en cours de test qualité, ce qui se trouve dans certaines étapes, ou ce qui est en production, et ensuite pour chacun de ces éléments, vous pouvez approfondir et obtenir une vue historique. Vous pouvez cliquer sur n'importe quelle version donnée et toutes les informations d'audit sont immédiatement accessibles.

De plus, le prochain objectif sur lequel OpsMx travaille est l'efficacité des artefacts qui sont capturés afin que la chaîne d'approvisionnement, ou la lignée, soit transparente.

OpsMx utilise désormais une technologie basée sur un agent qui peut interagir avec, par exemple, des ressources situées derrière votre pare-feu. L'agent agit comme un proxy vers la couche d'intelligence afin que les données puissent y être collectées. Il n'y a pas de soucis à avoir concernant l'ouverture ou l'exposition des ports du pare-feu. Cela fonctionne de la même manière avec les fournisseurs de cloud : l'agent peut être déployé à l'intérieur du VPC et vous n'avez plus à risquer de mettre des clés et des secrets dans une application basée sur le cloud. L'agent agit simplement comme un proxy de sorte que la partie autorisée reste toujours à l'intérieur du VPC, sécurisant ainsi la manière dont les informations sont collectées.

Avec cette nouvelle orientation, l'industrie du DevOps dans son ensemble va subir une refonte en matière de sécurité et d'auditabilité.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
