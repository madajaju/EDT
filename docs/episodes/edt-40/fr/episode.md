---
layout: posts
title: "Recherche médicale collaborative avec confidentialité informatique."
number: 40
permalink: episode-EDT40-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 40
tags:
    - confidentialcomputing
    - cybersecurity
    - distributedanalytics
    - sgx
    - healthcare
    - data
    - technology
    - edge

date: Tue Feb 23 2021 19:00:00 GMT-0500 (Eastern Standard Time)
guests:
    - Darren W Pulsipher
    - Nick Bhadange

img: thumbnail.png
image: thumbnail.png
summary: "Abattre les barrières pour accélérer la recherche médicale pour la cure du cancer grâce à l'informatique confidentielle. Nick Bhadange, spécialiste en technologie, AI-Vets, et Darren Pulsipher, architecte principal des solutions pour le secteur public chez Intel, discutent du besoin d'informatique confidentielle dans le domaine de la santé et des avantages potentiels par le biais de cas d'utilisation."
video: "https://youtu.be/owwhD3g7xRE"
description: "Abattre les barrières pour accélérer la recherche médicale pour la cure du cancer grâce à l'informatique confidentielle. Nick Bhadange, spécialiste en technologie, AI-Vets, et Darren Pulsipher, architecte principal des solutions pour le secteur public chez Intel, discutent du besoin d'informatique confidentielle dans le domaine de la santé et des avantages potentiels par le biais de cas d'utilisation."
---

<div>
{% include transistor.html id="558eb1c5" title="#40 Collaborative Medical Research with Confidential Computing" %}

{% include youtube.html id="owwhD3g7xRE" %}
</div>

---

## Pourquoi avons-nous besoin de calcul confidentiel ?

L'infrastructure informatique actuelle est construite autour de la notion de partage et d'ouverture : Internet est gratuit et les données devraient l'être aussi. Cela pose un problème en termes de sécurité. Nous avons mis en place certaines solutions qui fonctionnent bien ; nous savons chiffrer les données lorsqu'elles sont stockées et lorsqu'elles sont en transit. Malgré cela, les données peuvent être attaquées de différentes manières lorsqu'elles sont lues, analysées et utilisées.

Les données sensibles restent vulnérables, qu'il s'agisse de données financières, médicales ou de localisation, tant du point de vue de la visibilité que de l'intégrité des données.

Dans le traitement des données en matière de santé, il existe des niveaux de complexité supplémentaires. Il y a de nombreuses règles et réglementations telles que la HIPAA, et chaque état possède également ses propres réglementations concernant les données médicales. Malgré la complexité et le nombre de parties prenantes, le calcul confidentiel est possible lorsque vous avez la possibilité de partager des données entre des parties qui ne se font pas confiance intrinsèquement.

Pour la confidentialité, nous devons prendre en compte plusieurs facteurs différents : l'intégrité des données, la confidentialité des données et l'intégrité du code.

## Problèmes critiques de confidentialité et de sécurité des données.

Les dossiers médicaux d'un individu, notamment aux États-Unis, sont dispersés partout parmi les médecins, spécialistes, laboratoires et hôpitaux. La plupart des gens n'ont pas un accès facile à leurs dossiers ; il est pratiquement impossible de créer une image complète de sa propre santé. L'informatique confidentielle peut aider à briser ces barrières.

Tout d'abord, cela peut garantir que quelle que soit la donnée que vous partagez, vous pouvez avoir confiance qu'elle sera protégée du point de vue de l'intégrité des données ; elle ne sera pas modifiée par qui que ce soit. Elle peut être confidentielle, c'est-à-dire tokenisée ou chiffrée, mais elle peut toujours être utilisée pour le calcul. Par exemple, si une partie souhaite effectuer des analyses sur certaines données, elle n'a pas besoin de connaître des informations telles que les noms, les dates de naissance ou les numéros de sécurité sociale. Donc, si ces parties des données peuvent être tokenisées ou chiffrées, elles peuvent être partagées pour l'analyse tant que l'autre partie est digne de confiance.

C'est là que des mesures de sécurité telles que l'attestation jouent un rôle, de sorte que les parties puissent prouver leur identité. Et cette attestation peut être liée jusqu'au niveau matériel aux environnements d'exécution de confiance fournis par le matériel. De cette manière, vous ne faites pas seulement confiance au transport et au point de terminaison, mais vous faites également confiance à l'application et à la manière dont elle utilisera les données.

Il existe deux approches de base pour cela. La première est un Kit de développement logiciel d'application (SDK), ce qui signifie que le développeur peut décider comment partitionner son code en composants fiables et non fiables. L'autre approche consiste à avoir un système de chiffrement en temps d'exécution qui peut être construit au-dessus d'un environnement d'exécution fiable, réduisant ainsi les efforts nécessaires pour convertir une application actuelle en quelque chose qui peut fonctionner dans cet environnement.

Avec un environnement d'exécution de confiance basé sur le matériel protégeant les applications et les données en cours d'utilisation, il devient très difficile pour un acteur non autorisé, même s'il a accès physique au matériel, des privilèges root ou des droits administrateur pour l'hyperviseur, d'accéder à l'application et aux données protégées. Le paradigme de l'informatique confidentielle vise à permettre l'élimination même du fournisseur de cloud de la base de calcul de confiance. De cette façon, seul le matériel et l'application protégée elle-même se trouvent à l'intérieur de la zone d'attaque.

Ces environnements informatiques permettent aux CSP de tirer parti du meilleur que le matériel peut offrir et de la meilleure sécurité possible, sur laquelle l'utilisateur final a un contrôle absolu. Chaque partie peut déterminer ses propres politiques et les hiérarchies de politiques telles que l'État et le gouvernement fédéral, et chaque fournisseur d'informations peut déterminer quelles politiques s'appliquent et à qui.

## Étude clinique de preuves réelles

Rassembler toutes les données et leur donner un sens représente un grand défi dans l'industrie de la santé. Le nombre de paramètres de confidentialité et de partage de données mis en place entre les différents prestataires, les dispositifs, les localisations géographiques, etc. rend cela actuellement impossible.

AI-Vets, Intel et certains partenaires travaillent ensemble sur ce problème. L'architecture brillamment simple permet une utilisation dans des environnements disparates, des types de données et des politiques différentes, tout en étant capable d'effectuer une analyse centralisée.

Un exemple de notre mise en œuvre est une petite preuve de concept : Comment analyser à travers plusieurs parties telles que des hôpitaux, des environnements de recherche et des laboratoires, chacun avec leurs propres données et essais qu'ils peuvent mener dans un environnement clinique ? Par exemple, comment pouvons-nous trouver une corrélation entre les personnes prenant le médicament X, par exemple pour le diabète, et ayant la condition Y, par exemple le cancer, alors que le médicament X n'a rien à voir avec le traitement de la condition Y ? Ces deux ensembles de données ne seraient pas au même endroit car ils sont gérés par différents fournisseurs.

Si toutefois, les fournisseurs faisaient partie d'un écosystème où ils pourraient déterminer les politiques qu'ils souhaitent appliquer à leur point de terminaison, nous pourrions avoir une application centralisée, un portail de recherche central qui soit connecté à ces points de terminaison. Il y aurait une gestion des clés tierces et une attestation pour vérifier les informations d'identification et les autorisations mutuelles, de sorte que toutes les parties puissent se faire confiance.

C'est un aspect de la confiance, mais nous devons également protéger les données qui seront extraites, interrogées et transmises. Pour ce faire, nous pouvons gérer les données et les applications à l'intérieur d'enclaves sécurisées et chiffrées. Les données sont traitées en utilisant les politiques que chaque utilisateur définit, telles que l'obfuscation des dates de naissance, des numéros de sécurité sociale, etc. Ces informations peuvent être tokenisées, ce qui les rend complètement inutilisables entre des mains non autorisées.

Le portail central peut effectuer une requête qui s'étend sur plusieurs points d'extrémité et regroupe différents types de données dans son système d'exécution, puis effectue une analyse sur celles-ci. Ainsi, au lieu de devoir extraire toutes les données dans un lac de données pour ensuite réaliser une analyse, tout se fait en temps réel. Il n'y a pas d'attente pour la publication ou le nettoyage préalable des données en appliquant toutes ces règles ; cela se fait de manière dynamique et instantanée.

Cela permet d'obtenir des informations considérables. Pendant la pandémie, par exemple, s'il fallait attendre chaque jour pour obtenir les données et les analyser de manière complexe, ce serait difficile. Si nous pouvions accéder en temps réel aux données provenant de tous ces différents systèmes à travers le pays et le monde entier, tout en étant en mesure de les partager de manière sécurisée, nous pourrions obtenir des informations uniques qui ne seraient pas autrement possibles.

Nous avons déjà vu cela dans certains POC pour des sites cliniques que nous avons réalisés avec notre partenaire Fortanix. Ils disposent d'une gamme de produits qui permettent à différentes entités de définir leurs politiques dans un environnement de calcul confidentiel, de vérifier les identités les unes des autres et de gérer les clés et les confiances. Le concept d'environnements d'exécution fiables existe depuis un certain temps, et il est devenu courant, ce qui le rend plus facile à exploiter. Les cas d'utilisation pour cela sont fantastiques.

## Détection automatisée de la COVID-19 à partir d'images radiographiques thoraciques

Dans certains cas d'utilisation, il ne s'agit pas seulement de sécuriser les données, mais aussi de protéger la propriété intellectuelle associée à certains algorithmes spécialisés. Par exemple, pour détecter automatiquement la COVID à partir d'images radiographiques, il y aurait des données radiologiques, des données patient, et il pourrait y avoir un algorithme propriétaire pour effectuer l'analyse. Les enclaves peuvent protéger à la fois les données et les applications des regards indiscrets.

La zone sécurisée protège également les autres machines du réseau car si quelqu'un publie quelque chose de néfaste sur les nœuds finaux, le système de gestion des clés l'empêcherait d'être échangé car il n'est pas correctement attesté. Les parties choisissent précisément les sources de données avec lesquelles l'enclave peut communiquer et elle est verrouillée à la fois pour ce qui entre et ce qui sort.

## Dossiers de santé électroniques (DSE)

Les dossiers médicaux sont un véritable chaos aux États-Unis, avec des accords papier HIPAA inapplicables, etc., et tout est réparti entre différentes entités. Un exemple à suivre qui pourrait nous servir de bon modèle vient du gouvernement allemand. Ils ont ordonné que les données de santé doivent être stockées dans des dossiers médicaux électroniques, et ces applications doivent être déployées dans des environnements d'exécution de confiance. Le patient est l'utilisateur final et décide quelles données sont disponibles et pour qui.

Ce niveau de granularité en ce qui concerne ce qui est disponible pour l'utilisateur final est énorme. Et non seulement toutes ces données sont collectées et partagées à partir des différents systèmes, elles se trouvent dans des enclaves sécurisées, donc elles sont complètement sécurisées vis-à-vis du monde extérieur. Si quelqu'un non autorisé réussissait à accéder aux données elles-mêmes, elles seraient complètement dénuées de sens.

Ces environnements d'exécution sécurisés sont la première étape vers des contrôles qui sont facilement compréhensibles et facilement applicables.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
