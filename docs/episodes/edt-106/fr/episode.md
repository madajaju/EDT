---
layout: posts
title: "La naissance des plates-formes d'intelligence graphique."
number: 106
permalink: episode-EDT106-fr
lang: fr
nav_exclude: true
nav_order: 106
tags:
    - datagovernance

date: 2022-09-20T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Greg Steck

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, architecte en chef des solutions du secteur public chez Intel, et Greg Steck, directeur principal des solutions sectorielles chez Katana Graph, discutent des avantages de la plateforme d'intelligence graphique de Katana."
video: "https://youtu.be/url"
description: "Darren Pulsipher, architecte en chef des solutions du secteur public chez Intel, et Greg Steck, directeur principal des solutions sectorielles chez Katana Graph, discutent des avantages de la plateforme d'intelligence graphique de Katana."
---

<div>
{% include transistor.html id="5fdeafa4" title="#106 The Birth of Graph Intelligence Platforms" %}

{% include youtube.html id="url" %}
</div>

---

Greg a commencé sa carrière dans une banque d'investissement en tant que responsable du risque de crédit, au moment où ils ont commencé à mettre en œuvre les tests de résistance CCAR. Après avoir été fortement impliqué dans cette activité pendant un certain temps, il a commencé à faire du conseil et a découvert les graphiques lors de la validation des modèles de risque de crédit. Il a remarqué comment les graphiques pouvaient être exploités pour de nombreuses analyses différentes et présentaient des avantages dans la gestion des données et l'apprentissage automatique, en particulier dans la modélisation de crédit. C'est ainsi qu'il a découvert Katana.

Les analystes et les scientifiques des données luttent constamment pour intégrer différents ensembles de données. Greg a été attiré par les graphiques car, après avoir été introduit à RDF, un format de graphe de connaissances sémantiques, il était évident de comprendre comment les données pourraient être combinées et structurées en tant que graphe.

Avec les solutions graphiques existantes, les analystes rencontraient des difficultés pour adapter leurs solutions, car une grande partie de leurs données étaient trop volumineuses. Katana Graph a développé la capacité de s'adapter à l'échelle et de se concentrer également sur l'apprentissage automatique.

Au début des bases de données de type graphique, les grandes entreprises telles qu'Amazon et Facebook ont construit en interne leurs propres bases de données graphiques, effectuant leur modélisation et leur apprentissage automatique. Puis vinrent les versions grand public de plateformes telles que Neo4j et TigerGraph, destinées à des cas d'utilisation généraux. Le défi résidait dans le fait qu'elles étaient centrées sur la base de données et moins sur l'analyse et l'apprentissage automatique, les processus et les calculs graphiques réels. Elles étaient limitées à être une sorte de magasin de données, axées sur l'ingestion et les opérations CRUD, et moins sur les données elles-mêmes.

Il existe trois types différents de domaines informatiques de graphes. Le premier est la requête graphique, la base de données graphique et les opérations CRUD. Le deuxième concerne l'analyse et l'exploration de graphes avec des algorithmes tels que PageRank ou le clustering, qui gagnent en popularité. Le troisième domaine concerne l'IA et l'apprentissage automatique de graphes. C'est là que les réseaux de neurones graphiques interviennent. Il existe des solutions ponctuelles qui résoudront des parties spécifiques de ces domaines, mais Katana Graph se situe à l'intersection de ces derniers.

Chacune des trois plateformes est importante. Pour faire de l'apprentissage automatique, vous avez besoin des deux autres domaines. Lorsque les données sont d'abord ingérées, elles doivent subir de nombreuses transformations pour les préparer à l'apprentissage automatique, donc si vous n'avez pas tout cela dans une seule solution, le pipeline sera lent, envoyant les données à l'extérieur et les rapatriant. Il est plus efficace d'itérer rapidement sur l'ensemble du pipeline. Cela réduit également le risque de perte de données car vous diminuez le nombre de fois où vous transformez les données.

De plus, puisque Katana Graph est une plate-forme nativement cloud, vous pouvez mettre en pause, sauvegarder un point de contrôle, réduire le cluster et le relancer ultérieurement exactement où vous vous êtes arrêté.

Une bonne démonstration consiste à détecter les fraudes avec un ensemble de données de transactions Bitcoin. La plateforme ingère les données, qui sont structurées, de sorte que les portefeuilles Bitcoin soient les nœuds du graphe, et les transactions entre eux les arêtes. C'est un graphe simple. L'idée est de prédire si un portefeuille Bitcoin est frauduleux. Les portefeuilles illicites liés au blanchiment d'argent, au trafic de drogue, etc. ont été étiquetés. Lorsqu'un nouveau compte arrive, la tâche consiste à prédire s'il est frauduleux. La partie difficile consiste alors à pré-traiter les caractéristiques numériques des comptes. Un ensemble d'API a été conçu pour résoudre ce problème. Toutes les étapes que les scientifiques des données effectuent pour préparer leurs caractéristiques sont réalisées ici. À partir de là, le graphe est prêt à être intégré dans le modèle d'apprentissage automatique, où il est entraîné, puis, en utilisant des réseaux neuronaux, on peut apprendre à classer les comptes.

Un avantage de la plateforme est que les scientifiques des données et les ingénieurs peuvent travailler à partir d'une même plateforme au lieu de rassembler les éléments ensemble.

Un autre avantage est le coût total de possession. Contrairement à d'autres plateformes, vous n'avez pas besoin de maintenir la base de données graphique en marche tout le temps. Étant donné que les pipelines Katana Graph sont conçus avec une séparation du stockage et du calcul, vous pouvez facilement créer un cluster, effectuer un traitement par lot au préalable, puis exécuter une inférence dans un système distinct tout en exploitant ce qui a été généré dans le graphe.

Katana Graph est également plus rapide avec de grands ensembles de données car il ne charge pas toutes les données au préalable, mais dispose d'une manière innovante et dynamique de charger les données au fur et à mesure que vous en avez besoin lorsque vous travaillez dans le pipeline.

Les analyses de base sont bien plus faciles sur une base de données graphique plutôt que sur une base de données relationnelle. Si vous disposez de dix ensembles de données différents, il peut être fastidieux et sujet aux erreurs pour un analyste de déterminer comment les joindre pour rédiger une requête dans une base de données relationnelle. Avec un graphique, vous disposez d'un modèle unique, déjà prédéfini et construit, de sorte que les questions seront bien plus faciles car les données sont déjà connectées. Vous pouvez intuitivement voir comment les informations sont liées.

L'une des nouvelles fonctionnalités de Katana est l'importateur de cadres de données Dash. Dash est un cadre communément utilisé par les scientifiques des données pour le traitement parallèle de cadres de données. Les scientifiques des données peuvent travailler avec le cadre de données qu'ils utilisent déjà et l'ingérer directement dans Katana Graph pour une expérience fluide et simplifiée.

Le DevOps est une grande partie de ce que Katana essaie de faciliter avec leur plateforme. Ils s'intègrent facilement aux pipelines d'apprentissage existants. Lorsque les réseaux neuronaux graphiques sont exécutés, les embeddings peuvent être exportés. Ces caractéristiques qu'un graphe génère peuvent être utilisées par un processus d'apprentissage automatique en aval. Ainsi, l'intégration devient beaucoup plus simple et plus facile à opérationnaliser et à mettre en production.

Au cours des cinq prochaines années, Greg envisage que des organisations telles que les banques disposent de référentiels centralisés permettant d'analyser les données clients, de marketing ou de crédit à des fins multiples. Les résultats obtenus à partir des modèles d'apprentissage automatique pourraient être utilisés à la fois pour évaluer les risques de crédit et détecter les fraudes, par exemple. Au lieu d'utiliser des ensembles de données cloisonnés avec beaucoup de réplications et de redondances entre eux, il existerait un modèle commun synchronisé au sein d'un graphique.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
