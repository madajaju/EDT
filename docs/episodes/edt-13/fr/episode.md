---
layout: posts
title: "Obsession illogique avec la logique"
number: 13
permalink: episode-EDT13-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 13
tags:
    - data
    - organizationalchange
    - people

date: Wed Aug 12 2020 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Andrew Padilla

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Le leader d'opinion Andrew Padilla de Datacequia envisage de nouveaux développements dans la gestion des données et la collaboration, qui permettraient aux données de progresser, tout comme le logiciel, en termes de visibilité, d'accessibilité, d'utilisabilité et de portabilité. Il explique comment une infrastructure composable répondrait aux préoccupations des ingénieurs logiciels et des scientifiques des données."
video: "https://youtu.be/F1hfANcSQj4"
description: "Le leader d'opinion Andrew Padilla de Datacequia envisage de nouveaux développements dans la gestion des données et la collaboration, qui permettraient aux données de progresser, tout comme le logiciel, en termes de visibilité, d'accessibilité, d'utilisabilité et de portabilité. Il explique comment une infrastructure composable répondrait aux préoccupations des ingénieurs logiciels et des scientifiques des données."
---

<div>
{% include transistor.html id="4272c3a1" title="#13 Illogical Obsession with Logic" %}

{% include youtube.html id="F1hfANcSQj4" %}
</div>

---

## Une Contraste de Préoccupations <h2>

Au cours des dix dernières années, les professionnels des données ont connu une explosion de leur capacité à rendre les logiciels visibles, accessibles, utilisables et portables, mais du côté des données, il n'y a pas eu autant de progrès. C'est quelque chose à laquelle les professionnels des logiciels et des données devraient réfléchir. Quelles sont les préoccupations de chaque côté ? Que pouvons-nous apprendre les uns des autres ? Actuellement, les deux côtés sont diamétralement opposés sur de nombreux points.

Du côté de l'ingénierie logicielle, la logique métier est la principale préoccupation. Afin d'avoir des interfaces cohérentes, les ingénieurs dissimulent les détails. Les données sont perçues comme une sortie. En revanche, les scientifiques des données sont plus préoccupés par le contexte de ces sorties et des constructions de données : les métadonnées. Par exemple, la filiation des données est importante pour un scientifique des données afin de voir comment les choses changent au fil du temps, alors qu'un ingénieur logiciel chercherait à dissimuler ces détails pour éviter des problèmes tels que la variabilité et les bugs.

Traiter le développement des données et des métadonnées comme une discipline à part entière, et non dans le contexte de la façon dont nous faisons actuellement des logiciels, pourrait aider l'industrie à se développer. En d'autres termes, nous devons envisager de construire une infrastructure composable qui prend en compte les préoccupations des deux côtés.

Un exemple de la façon dont nous traitons actuellement les problèmes de métadonnées dans les entreprises illustre cette idée. Aujourd'hui, nous disposons de systèmes de gestion centralisée des métadonnées. Nous voulons savoir où se trouvent toutes nos données : qui, où, pourquoi et comment. Capturer ce que les gens font et le pousser dans un système centralisé est une manière très logicielle de faire les choses. Si nous laissons les données se développer d'elles-mêmes, nous pourrions adopter ce que font les développeurs de logiciels, mais dans un contexte de données. Nous pourrions construire un écosystème plus vaste si, au lieu de tant d'efforts privés des deux côtés, nous mettions tout dans un référentiel synchronisé et centralisé et permettions aux développeurs de données de travailler comme le font les ingénieurs logiciels. Nous pourrions construire et organiser des efforts privés, puis partager ces améliorations avec d'autres. De manière similaire au changement de gestion de configuration dans les années 1990 et 2000, d'un endroit centralisé à un système plus distribué, le partage pourrait se faire plus facilement et fluidement.

## ADN de connaissances numériques <h2>

La connaissance numérique que nous avons dépend à la fois de la logique et des données. Le logiciel et les données partagent les mêmes primitives, et à mesure que nous progressons dans la pile vers la connaissance, il existe des relations étroites entre les deux. Ce qui diverge, c'est que nous disposons de l'infrastructure et des outils pour développer le côté logiciel, le déployer et le rendre visible, accessible et utilisable. Puisque nous ne considérons pas le côté des données de la même manière, nous sommes limités dans ces domaines. Par exemple, une ancienne approche consiste à ce que les scientifiques des données effectuent de grandes analyses, de l'IA et de l'apprentissage sur leurs données et obtiennent des informations précieuses, mais il n'existe aucun mécanisme répétable, limitant son utilisation.

Une fois que cette perspective est reconnue à la fois par la communauté des données et des logiciels, nous pouvons adopter une approche différente en utilisant les succès du développement logiciel pour les données. Au lieu d'appliquer les expériences personnelles et les préjugés des logiciels en général, nous pouvons examiner comment les données fonctionnent, comment elles sont similaires mais ont leurs propres problèmes. Une analogie serait d'emmener votre famille à Disneyland. Les expériences et les interactions là-bas représentent la dynamique des logiciels. Vous pourriez orienter les expériences vers le côté des données. Mais imaginez dans le monde réel si vous deviez laisser cette expérience de côté et que lorsque vous rentriez chez vous, vous ne saviez rien à ce sujet. Voilà le problème. Chaque fois que nous passons à un système ou à un écosystème différent, nous recréons un nouveau monde et ignorons les autres mondes que nous avons dû laisser derrière nous. Si nous pouvions partager l'expérience ou l'emporter avec nous, nous constaterions que nous aurions une infrastructure de connaissances beaucoup plus dynamique. Ainsi, la prochaine fois que vous visiterez Disneyland, en fonction de votre expérience, vous saurez quel moment de la journée est le meilleur, comment vérifier les temps d'attente, etc. Sans l'expérience de travailler avec les données en conjonction avec l'application, c'est presque comme recommencer à zéro à chaque fois.

Un exemple concret est l'amnésie qui se produit dans des systèmes tels que ceux du secteur de la santé, où un professionnel des données crée une intégration à partir de zéro, puis quelques années plus tard, quelqu'un d'autre doit faire la même chose. Si nous pouvons établir de meilleures relations avec les données grâce à la cartographie, la réutilisabilité et l'efficacité augmentent. Par exemple, pourquoi avons-nous autant de notions d'une personne en termes de modélisation ? Bien sûr, le contexte est important, mais pourquoi ne pouvons-nous pas voir les différentes variantes d'une personne et être ensuite en mesure de les cartographier ? Dans le système de soins de santé de l'Administration des anciens combattants, ils ont plusieurs systèmes où un patient signifie quelque chose de différent dans chacun d'entre eux. La cartographie offrirait un terrain commun, mais permettrait également des changements en fonction du contexte, tant que l'opération de cartographie était visible. Nous pourrions alors avancer avec différents types de cas d'utilisation et de réutilisabilité.

Un grand obstacle est que nous avons réussi à opérationnaliser efficacement la logique avec K8s, mais un service équivalent n'existe pas pour les données. Bien qu'il existe une solution temporaire avec S3, ce n'est pas la réponse. Il y a un grand besoin dans tous les secteurs d'une solution similaire à K8s qui traite des données. La nécessité de collaboration est importante ici. Bien sûr, les professionnels des données souhaitent apporter de la valeur à leur organisation, mais une certaine partie dépend de la communauté.

## Fermeture des écarts <h2>

Le nom de la société Datacequias est basé sur les acequias au Nouveau-Mexique, qui servent d'exemple du type de collaboration nécessaire pour les données. Le Nouveau-Mexique est une région aride, donc il y a des années, pour rendre la terre fertile, les habitants ont construit une série de canaux d'irrigation appelés acequias. Personne ne les possédait, mais ils les ont construits, gérés et entretenus par nécessité et pour le bien commun. L'environnement hostile dans le monde des données est généralement caractérisé par les budgets et la possession des données, mais une curation des données plus axée sur la communauté serait bénéfique pour tous, tout comme les acequias ont profité à tous.

Imaginez si les professionnels des données pouvaient dériver un ensemble de données à partir de n'importe quel référentiel central. Ils pourraient le gérer et le faire évoluer selon leurs besoins. En cas de changement dans le référentiel central géré par un organisme standard, ils pourraient incorporer immédiatement ces changements, ou choisir de ne pas le faire. Dans tous les cas, ils auraient l'origine de la source originale. Aujourd'hui, lorsque nous utilisons une ressource qui est en dehors de l'entreprise, nous en faisons une copie figée dans le temps. Cela nécessite un suivi manuel et une gestion des mises à jour. Avec un référentiel central, tous pourraient co-créer, collaborer et former des communautés reposant sur des bases communes et une généalogie visible.

Ceci n'est que la partie visible de l'iceberg d'un changement fondamental dans l'industrie visant à rendre les données plus précieuses pour votre organisation. Pour plus d'informations sur Andrew Padilla et Datacequia, visitez datacequia.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
