---
layout: posts
title: "Modèle de maturité en gestion de l'information"
number: 4
permalink: episode-EDT4-fr
lang: fr
nav_exclude: true
nav_order: 4
tags:
    - dataarchitecture
    - generativeai
    - zerotrust

date: 2020-06-30T00:00:00.000Z
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, nous parlerons du Modèle de maturité de la gestion de l'information et de la manière dont nous pouvons utiliser ce modèle pour aider nos organisations à avancer. Ce modèle peut vous aider à identifier où se situe votre organisation et où elle se dirige dans sa stratégie de gestion de l'information, en fin de compte, en tirant le maximum de valeur commerciale de vos données."
video: "https://youtu.be/url"
description: "Dans cet épisode, nous parlerons du Modèle de maturité de la gestion de l'information et de la manière dont nous pouvons utiliser ce modèle pour aider nos organisations à avancer. Ce modèle peut vous aider à identifier où se situe votre organisation et où elle se dirige dans sa stratégie de gestion de l'information, en fin de compte, en tirant le maximum de valeur commerciale de vos données."
---

<div>
{% include transistor.html id="b3684303" title="#4 Information Management Maturity Model" %}

{% include youtube.html id="url" %}
</div>

---

Développer une stratégie de données peut être difficile, surtout si l'état de la gestion des informations de votre entreprise ou sa trajectoire est peu clair. Ce modèle de maturité de la gestion des informations aide les directeurs des données (CDO) et les directeurs informatiques (CIO) à identifier leur position dans leur parcours de gestion des informations, ainsi que leur trajectoire. Cette carte peut aider les organisations à orienter leur amélioration continue et leur progression vers une organisation de données ultime leur permettant de tirer le maximum de valeur commerciale de leurs données.

Le modèle représente une série de phases, allant de la moins mature à la plus mature : Standardisé, Géré, Régi, Optimisé et Innovation. Bien souvent, une organisation peut évoluer simultanément dans plusieurs phases. Vous pouvez déterminer où la majorité de votre organisation opère, puis identifier les pionniers qui devraient être plus avancés en matière de maturité. Utilisez ces pionniers pour expérimenter ou prototyper de nouveaux processus, technologies ou structures organisationnelles.

## Phase standardisée

La phase standardisée comporte trois sous-phases : basique, centralisée et simplifiée. La plupart des organisations se situent quelque part dans cette phase de maturité, donc examinez les comportements, la technologie et les processus dans votre organisation afin de déterminer où votre organisation pourrait se situer.

## Basique

Presque toutes les organisations s'adaptent à cette phase, au moins partiellement. Ici, les données sont utilisées uniquement de manière réactive et ad hoc. De plus, presque toutes les données collectées sont stockées selon des intervalles de temps prédéterminés, souvent indéfiniment. Les entreprises dans cette phase de base n'effacent pas les données de peur de manquer des informations critiques à l'avenir. Par exemple, nous travaillions récemment avec une entreprise qui possède des sauvegardes d'e-mails depuis 30 ans, soit environ 12-10 téraoctets, qu'elle a peur de supprimer. Cette pratique n'est pas rare.

Ces attributs décrivent le mieux cette phase :

Gestion par réaction

Données non répertoriées

* Stockez tout partout.

## Centralisé (Collecte de données centralisée)

Alors que les organisations commencent à évaluer leur stratégie de données, elles commencent par centraliser leur stockage dans des solutions de stockage de big data. Cette approche se présente sous la forme de stockage cloud ou d'appareils de big data sur site. Une fois les données collectées dans un emplacement centralisé, la technologie de data warehouse permet d'effectuer des analyses commerciales basiques pour obtenir des informations exploitables. La plupart du temps, ces données sont utilisées pour résoudre des problèmes liés aux clients, à la chaîne d'approvisionnement, au développement de produits ou à tout autre domaine de votre organisation où les données sont générées et collectées.

Ces attributs décrivent le mieux cette phase :

Gestion par réaction

Collecte de données de base

Entrepôts de données

* Stockage de données massives

Analyse de base des mégadonnées (?)

## Traduire en français : Simplifié

À mesure que le nombre de sources de données augmente, les entreprises commencent à former des organisations qui se concentrent sur la stratégie, l'organisation et la gouvernance des données. Ce changement commence par le bureau d'un Chief Data Officer (CDO). Il y a des débats sur la question de savoir si le CDO doit relever du PDG ou du DSI. Ne vous attardez pas sur l'emplacement exact dans l'organisation. L'important est d'établir une organisation axée sur les données et de mettre en place un plan de normalisation des données. La normalisation permet de corréler différentes sources de données pour obtenir de nouvelles informations sur la situation dans l'ensemble de votre entreprise. Notez qu'en l'absence de normalisation, les données restent cloisonnées et ne sont accessibles qu'en partie. Un autre attribut clé de cette phase est la nécessité d'élaborer un plan pour gérer le volume massif de données collectées. En raison de l'augmentation du volume et du coût de stockage de ces données, le stockage à niveaux devient important. Bien qu'il soit presque impossible de connaître la meilleure façon de gérer le stockage des données aux premiers stades, nous recommandons d'utiliser les meilleures informations disponibles pour élaborer des plans rationnels de stockage des données, en précisant que cela devra être examiné et amélioré une fois que les données seront utilisées.

Ces attributs décrivent le mieux cette phase.

Gestion prédictive des données (début d'une organisation centrée sur les données)

* Normalisation des données

Stockage en niveaux centralisé

## Gérés (profils de données standard)

Dans la phase de Gestion, les organisations ont formalisé leur organisation en matière de données ; les scientifiques des données, les gestionnaires des données et les ingénieurs des données font maintenant partie de l'équipe et ont des rôles et des responsabilités définis. La gestion des métadonnées devient un facteur clé de succès à cette phase, et plusieurs applications peuvent désormais tirer parti des données de l'entreprise. Le passage d'un entrepôt de données à un lac de données permet une plus grande agilité dans le développement d'applications centrées sur les données. La virtualisation du stockage des données permet une solution de stockage plus efficace et dynamique. Les analyses des données peuvent désormais s'exécuter sur des ensembles de données provenant de sources et de départements multiples de l'entreprise.

Ces attributs décrivent le mieux cette phase.

Gestion organisée des données (Organisation des données en place avec identification des rôles clés)

Gestion des métadonnées

* Linéage des données

* Lac de données

Analyse des mégadonnées

Stockage défini par logiciel (virtualisation du stockage)

## Gouverné

La phase gouvernée est principalement atteinte lorsque une organisation adopte une approche centralisée des données et parvient à une approche holistique pour les gouverner et les sécuriser. Le CDO travaille étroitement avec le CSO (Chef de la Sécurité) pour garantir que les stratégies de données et de sécurité fonctionnent ensemble pour protéger les données précieuses de l'entreprise tout en les rendant accessibles pour l'analyse. Les données sont classifiées dans différents compartiments en fonction de leur criticité, de leur caractère secret ou de leur importance. La conformité dictée par les réglementations est automatisée et appliquée à l'ensemble des données de l'organisation. La visibilité accrue sur l'utilisation des données et la sécurité augmente grâce aux stratégies conjointes de données et de sécurité ainsi qu'aux plans tactiques. L'intelligence artificielle de base est largement utilisée dans l'organisation et les décisions commerciales sont déduites des données. Les données peuvent désormais être collectées et répertoriées dans toute l'entreprise, y compris les appareils Internet des Objets (IoT) sur les actifs physiques de l'entreprise.

Ces attributs décrivent le mieux cette phase.

* Classification des données

* Conformité des données

Sécurité des données

Intelligence artificielle de base

* Virtualisation de données distribuée / IoT

## Optimisé

Alors que la collecte de données des organisations continue d'augmenter, elles doivent trouver des moyens d'automatiser et d'améliorer en continu leurs processus pour gagner en efficacité. L'automatisation des processus de données est l'objectif principal de la phase optimisée. Plus précisément, l'automatisation de l'annotation et du marquage des métadonnées permet de réduire le temps nécessaire pour valoriser les données. Les données sont devenues trop volumineuses pour être centralisées en un seul endroit, et une architecture de "lac de données distribué" émerge comme la manière optimale de gérer les données. L'apprentissage automatique joue un rôle clé à ce stade en commençant à fournir des informations aux décideurs pour les aider à optimiser les opérations et la valeur de l'entreprise. Les applications et les données sont déployées sur des infrastructures réseau, de stockage et de calcul en fonction des informations historiques et des modèles d'intelligence artificielle.

Ces attributs décrivent le mieux cette phase.

Étiquetage méta automatisé

* Lac de données distribué

Inférence de données / ML

Infrastructure pilotée par les données

## Innovation

L'organisation ultime se trouve dans la phase d'Innovation. Elle n'est pas seulement pilotée par les données, mais crée de nouveaux produits, offres et services basés sur les enseignements tirés des données internes et externes à leur organisation. Cette phase est celle où l'IA/ML offre des avantages inestimables. Il y a trois sous-phases dans l'Innovation : l'observation, la prescription et la prospective.

## Perspicacité

L'anticipation est une prise de décision basée sur les données, en fonction de ce que vous pouvez observer qui se passe réellement dans votre écosystème, par exemple, dans votre chaîne d'approvisionnement, le développement de produits ou la fabrication.

## Prescriptive: Prescriptif

Alors que l'aperçu est précieux, il nécessite une interaction humaine, une compréhension et une intuition. Au niveau suivant, prescriptif, votre intelligence artificielle suggère ce que vous devriez faire en se basant sur l'aperçu. Cela peut jouer un rôle important dans toute votre organisation, car les décisions sont basées sur les données, depuis la chaîne d'approvisionnement jusqu'à l'acquisition de clients.

## Foresight in French is "prévoyance".

À cette étape cruciale, les données aident réellement à créer l'avenir. Par exemple, la prévoyance permettrait à une organisation informatique de projeter la capacité dont elle aura besoin à l'avenir en se basant sur les normes historiques et même sur des facteurs tels que l'évolution des conditions avec ses concurrents. La prévoyance nécessite beaucoup de données et la formation de modèles, mais conduit à l'objectif ultime de l'entreprise en temps réel.

Ces attributs décrivent le mieux cette phase :

* Perspicacité (décisions basées sur les données)

Prescriptif (entreprise basée sur les données)

Prévoyance (créer l'avenir)

Apprentissage profond

Entreprise en temps réel

## Conclusion

Il est fréquent de se sentir coincé dans une phase et submergé par la quantité de changements nécessaires pour passer à une nouvelle phase de maturité. Chaque pas en avant est cependant précieux. Par exemple, peut-être êtes-vous dans une phase Centralisée et pouvez-vous envisager la gestion des métadonnées. Y a-t-il une opportunité de passer au-delà de la simple nettoyage des données et de les augmenter également ? Ce type de pensée progressive vous fera avancer dans la chaîne de maturité en matière de gestion de vos informations.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
