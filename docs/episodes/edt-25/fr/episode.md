---
layout: posts
title: "Opérationnalisation des pipelines de données"
number: 25
permalink: episode-EDT25-fr
lang: fr
nav_exclude: true
nav_order: 25
tags:
    - dataarchitecture
    - datacentric
    - data
    - datamesh
    - datapipeline
    - technology
    - people

date: Tue Oct 13 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Sarah Kalicin

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, architecte en chef des solutions, secteur public, chez Intel, parle avec Sarah Kalicin, data scientist en chef, Intel, à propos de l'opérationnalisation du pipeline de données de votre organisation. Cela nécessite un effort d'équipe pour modéliser, surveiller et produire une source continue d'informations précieuses. Il s'agit du dernier épisode de la série Démarrer votre transformation organisationnelle pour devenir centrée sur les données."
video: "https://youtu.be/url"
description: "Darren Pulsipher, architecte en chef des solutions, secteur public, chez Intel, parle avec Sarah Kalicin, data scientist en chef, Intel, à propos de l'opérationnalisation du pipeline de données de votre organisation. Cela nécessite un effort d'équipe pour modéliser, surveiller et produire une source continue d'informations précieuses. Il s'agit du dernier épisode de la série Démarrer votre transformation organisationnelle pour devenir centrée sur les données."
---

<div>
{% include transistor.html id="cb72bda4" title="#25 Operationalizing Data Pipelines" %}

{% include youtube.html id="url" %}
</div>

---

Pour le dernier épisode de cette série, Darren s'entretient avec Sarah Kalicin, Lead Data Scientist chez Intel, sur l'opérationnalisation de votre pipeline de données. Ils discutent de la manière dont, une fois que vous avez vos analyses de données, vous pouvez les transformer d'une expérience scientifique ponctuelle en une source d'informations continue.

## Comment opérationnalisons-nous les informations issues de l'analyse ?

La première chose à comprendre concernant la chaîne de traitement des données est qu'elle ne fonctionne pas comme un système électrique fermé que l'on peut mettre en place, laisser de côté et, six mois plus tard, actionner un interrupteur en sachant que l'ampoule s'allumera. Une chaîne de traitement des données est différente dans le sens où les données sont variables ; elles peuvent changer ou se dégrader, par exemple. Vous ne serez donc pas forcément récompensé par l'allumage de l'ampoule à n'importe quel moment, ou dans ce cas, par la découverte des insights que vous recherchez. Vous devez constamment penser à ce qui peut mal se passer dans le système et comment corriger ces courts-circuits.

La détection des anomalies est une partie intégrante du processus. On ne peut pas prévoir toutes les situations, il est donc nécessaire au moins de pouvoir constater lorsqu'un événement se produit en dehors des limites des analyses initiales. Un exemple est la crise du COVID, un événement imprévisible qui a provoqué des schémas largement hors normes pour de nombreux systèmes. Un autre exemple serait une entreprise produisant des widgets. Afin de savoir combien de widgets produire, le processus de données contient la demande des clients, l'offre actuelle et les pertes de rendement. Ces éléments peuvent être relativement stables avec le temps, mais il pourrait par exemple y avoir un événement de relations publiques qui provoque une explosion de la demande des clients. Cela pourrait avoir un impact considérable sur les modèles. L'apprentissage automatique et l'apprentissage profond analysent les modèles familiers, et s'ils ne les ont jamais rencontrés auparavant, les modèles vont échouer ou se dégrader. Il faut rester à la pointe de la découverte.

La seule façon de rester à la pointe de la découverte est d'automatiser vos pipelines de données pour un accès rapide aux informations. C'est l'avantage concurrentiel: des données actuelles et pertinentes qui peuvent vous aider à résoudre rapidement vos questions.

Les équipes informatiques et les équipes de données doivent collaborer sur l'automatisation et déterminer ce qui doit être automatisé pour les données entrantes, ainsi que sur la gestion de toutes les modifications apportées au modèle que les scientifiques des données souhaitent effectuer, afin de les intégrer facilement dans le flux de travail.

## Déploiement court-circuite

Il existe deux types de contrôles qui peuvent prévenir les courts-circuits lors du déploiement : les contrôles du système analytique et les contrôles organisationnels.

Le contrôle du système analytique consiste à mettre en œuvre les modèles que vous avez entraînés, en faisant passer les données afin de répondre facilement à vos questions. Ces modèles déployés doivent être régulièrement vérifiés pour garantir l'exactitude des données. De nombreux facteurs peuvent affecter négativement les données, tels que les changements environnementaux, l'étalonnage de la machine, les problèmes de distribution, et ainsi de suite.

Cela n'est pas si différent du monde du développement de logiciels où les changements peuvent affecter les prédictions. Le département informatique est familier avec le processus d'exécution de tests pour s'assurer que leurs modèles ou applications fonctionnent conformément aux directives établies, donc les développeurs opérationnels et les scientifiques des données devraient profiter de ces ressources et connaissances. Il n'est pas nécessaire d'inventer de nouveaux processus, mais plutôt, les groupes devraient fusionner leurs ressources pour se préparer à la réussite.

Les contrôles organisationnels remontent à la nécessité d'avoir une base organisationnelle engagée dans une approche centrée sur les données, et fournissant les bonnes personnes et ressources pour travailler ensemble en vue d'objectifs communs. La meilleure chance d'obtenir l'opérationnalisation est lorsqu'il y a collaboration, confiance, compréhension des besoins et boucles de rétroaction entre les groupes de l'organisation.

Les boucles de rétroaction sont essentielles dans ce processus. Par exemple, les spécialistes du sujet peuvent fournir des informations sur la dynamique du marché afin que les scientifiques des données puissent surveiller le modèle pour détecter ces changements dans les données. Si un modèle est destiné à être utilisé sur une longue période, il devra constamment être itéré et amélioré.

Les consommateurs des données devraient disposer d'un tableau de bord qui leur fournit des informations et leur permet de comprendre pourquoi quelque chose semble un peu étrange. Plus ils peuvent enquêter ou soulever ce qui doit être investigué, plus votre organisation sera habilitée.

## Pipeline translates to "oléoduc" in French.

Une clé du côté informatique pour opérationnaliser le pipeline de données consiste à utiliser un contrôle de version tel que GitHub afin de pouvoir accéder aux versions précédentes de votre modèle. Dans un but d'audit, il est également important de pouvoir stocker les données ayant servi à créer le modèle ainsi que d'autres données historiques. Vous souhaitez être en mesure d'observer les tendances et de voir comment une certaine caractéristique a évolué ou a impacté le modèle. Vous pouvez également intégrer des données historiques à vos nouveaux modèles pour évaluer leur impact sur vos données actuelles.

Par exemple, certains systèmes auront une image déformée avec un grand nombre de personnes travaillant à domicile pendant la COVID. Un cas concret est la Marine. Depuis la COVID, 95% de leurs employés en informatique sont en télétravail, et leur productivité a augmenté de 35%. À partir de ce seul élément de données, on pourrait dire que tout le monde va travailler à domicile à partir de maintenant. Continuerez-vous à bénéficier d'une augmentation de 35%, ou si les gens reviennent au bureau, verrez-vous une diminution de 35% ? De toute évidence, cet unique élément de données n'est pas forcément suffisant pour prédire la productivité réelle.

Un autre outil que l'informatique peut offrir est l'intégration et le déploiement continus. En utilisant Jenkins ou GitHub Actions ou un outil similaire lors du travail sur un modèle, vous pouvez automatiquement exécuter des tests sur votre modèle avec vos données ou générer des données factices en cours d'exécution.

Les informaticiens et les data scientists doivent collaborer sur ce qu'il faut surveiller et comment surveiller les résultats des modèles. Les informaticiens peuvent surveiller automatiquement les résultats, ainsi que la performance des modèles dans l'infrastructure. Par exemple, grâce à un déploiement automatisé de l'intégration continue, les informaticiens peuvent rapidement alerter les data scientists lorsque le temps d'exécution d'un modèle dépasse la norme pour éviter qu'il ne devienne incontrôlable. Si les informaticiens s'investissent dans la création de valeur des données, ce qui a généralement fait défaut dans l'industrie dans son ensemble, le processus sera plus facile et plus cohérent pour tout le monde.

Un autre aspect à prendre en compte est la conception des expériences car les interactions entre variables et caractéristiques sont également importantes. Les experts du domaine peuvent aider à déterminer quelles peuvent être les interactions potentielles et vous pouvez les modéliser pour mieux comprendre les variations qui peuvent être attendues.

C'est passionnant qu'un scientifique des données puisse prendre des données brutes et en tirer des enseignements. Cependant, cela nécessite une équipe. Plus tout le monde dans votre organisation peut apprendre les uns des autres dans un environnement d'équipe, plus de grandes choses peuvent se produire.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
