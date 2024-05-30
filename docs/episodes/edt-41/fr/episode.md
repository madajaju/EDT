---
layout: posts
title: "L'art obscur de DevOps"
number: 41
permalink: episode-EDT41-fr
lang: fr
nav_exclude: true
nav_order: 41
tags:
    - devsecops
    - devops
    - automation
    - advancedcommunications
    - multicloud
    - process
    - technology
    - policy

date: Tue Mar 09 2021 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, architecte en chef des solutions, secteur public, chez Intel, définit les termes courants de DevOps et explique comment DevOps s'intègre dans votre organisation."
video: "https://youtu.be/url"
description: "Darren Pulsipher, architecte en chef des solutions, secteur public, chez Intel, définit les termes courants de DevOps et explique comment DevOps s'intègre dans votre organisation."
---

<div>
{% include transistor.html id="b4fe3ea1" title="#41 The Black Art of DevOps" %}

{% include youtube.html id="url" %}
</div>

---

Jetons un coup d'œil à la place de DevOps dans votre infrastructure.

Au bas d'une pile normale, nous avons une couche physique qui peut signifier un nuage, un centre de données, des appareils d'IoT ou une infrastructure héritée.

De plus, il y a généralement une infrastructure définie par logiciel qui dissocie la complexité de la gestion des composants matériels individuels.

Ensuite se trouve une couche de gestion des services, qui comprend la virtualisation de l'écosystème des conteneurs et une couche de gestion des informations distribuées, qui comprend le plan de données, les data lakes et tout ce qui gère vos données.

Ensuite vient la couche d'application. Les développeurs d'applications utilisent les services à l'intérieur des couches d'application. Juste à l'interface entre la couche d'application et le plan de gestion des données et la gestion des services se trouvent les outils SecDevOps ou DevOps. Ces outils incluent des aspects de sécurité et d'identité qui offrent une manière sécurisée d'intégrer et de déployer en continu vos produits.

## Couche Application / Charge de travail

En tête de la couche d'application et de la charge de travail qui alimente le SecDevOps se trouvent trois types de charges de travail : les charges de travail déclenchées par des événements, les charges de travail procédurales et une combinaison des deux, qui sont des charges de travail pilotées par GUI ou UI.

Un exemple simple d'une charge de travail pilotée par des événements serait qu'une commande d'achat arrive dans votre système, provoquant d'autres actions. Il peut y avoir des étapes séquentielles ou parallèles, une interaction avec les humains, de l'automatisation et une interaction avec plusieurs applications ou sous-systèmes différents au sein de l'entreprise.

De nombreux outils d'automatisation de la charge de travail sont disponibles. Certains sont programmés tandis que d'autres utilisent l'automatisation des processus robotiques, qui sont davantage basés sur l'interface graphique (GUI) et l'interface utilisateur (UI). Ces outils travaillent sur l'automatisation des services sous-jacents, donc les charges de travail orientent l'interaction des services.

Les services se répartissent traditionnellement en trois grandes catégories : les applications, telles que des produits prêts à l'emploi comme Word ou une application SAP ; les services complexes, qui sont construits dans un but spécifique, comme une pile MEAN avec Mongo ; et les services simples, qui font une seule chose, par exemple MongoDB qui stocke la base de données.

Il existe une nouvelle catégorie en raison de la croissance de l'IA et de l'apprentissage automatique. Beaucoup de services ne font pas grand-chose sans un modèle qui lui est attaché, donc nous avons ajouté des modèles d'IA à la couche de service, que nous traitons de la même manière qu'un simple service.

## Journée d'un développeur dans la vie.

Après avoir compris les charges de travail et les services, nous pouvons examiner ce que fait généralement un développeur.

Un développeur écrira du code sur sa station de travail et effectuera quelques tests de fonctionnalités. Ensuite, il vérifie le code sur GitHub, par exemple, et une chaîne d'intégration et de livraison continues (CICD) se déclenche. Elle effectue des vérifications de sécurité sur le code, peut-être du lint, de l'analyse statique et de l'analyse dynamique.

Une fois qu'il a passé ces tests, il sera généralement intégré à une branche d'intégration où les autres membres de l'équipe de développement récupèrent les données, les développent et intègrent leur code avec le code du développeur. Ensuite, une fois qu'il a passé leurs tests, il est déployé dans une étape de test. Une fois cette étape franchie, il passera en production.

Ceci est un pipeline CICD typique, qui existe depuis des décennies. Au fil des années, les différentes façons de décrire les pipelines ont été consolidées et normalisées, ce qui limite les complexités et les erreurs.

## Pile DevSecOps

Le pipeline n'est qu'un élément d'une pile SecDevOps.

D'autres éléments nécessaires incluent un registre et un référentiel. Pensez à ceux-ci comme des référentiels versionnés pour stocker les artefacts générés pendant le pipeline CICD afin qu'ils soient facilement disponibles pour être utilisés encore et encore.

Un autre élément important est un cadre d'automatisation. Cela aide à alléger le travail humain d'exécution de tâches telles que les vérifications de sécurité ou la promotion de constructions d'une étape à une autre. Les outils pour l'automatisation sont matures et la formation est disponible, donc un bon cadre d'automatisation devrait être fondamental.

Bien que la gestion de l'environnement se développe souvent de manière organique au fil du temps, il est logique de gérer et d'organiser les environnements de manière appropriée pour obtenir plus de fiabilité et de reproductibilité.

Un élément clé en dessous de tout cela est un profil de sécurité. Vous devriez être en mesure d'avoir la capacité de définir des profils de sécurité, afin qu'ils puissent être utilisés dans plusieurs environnements et dans plusieurs piles d'applications.

## Registres / Dépôts

Il y a généralement au moins deux types différents de dépôts. Le premier est un dépôt de mise en scène, où vous pouvez générer des images (une collecte de tout le code nécessaire pour lancer un conteneur, par exemple), et stocker des choses comme des clés d'identification et des clés secrètes. Ce dépôt contient tout ce dont vous avez besoin pour déplacer les éléments en production. Certaines organisations peuvent avoir plusieurs dépôts de mise en scène car différents éléments passent par différentes étapes de maturité jusqu'à ce qu'ils atteignent le dépôt de production. Vous voulez être en mesure de revenir aux versions précédentes si nécessaire.

Dans la production, ou le référentiel doré, les images sont verrouillées, authentifiées et chiffrées. Seuls les éléments présents dans le référentiel doré sont déplacés vers la production.

## Stages translated to French is "Stages".

La meilleure façon de penser aux étapes dans le pipeline CICD est que chaque étape fonctionne dans un seul environnement. Par exemple, dans une étape de construction, il existe un environnement de construction isolé avec des politiques. Ce n'est que lorsque toutes les étapes de cette étape sont accomplies que les choses peuvent passer à la prochaine étape. Cela évite de gaspiller des ressources avec des constructions et des exécutions parallèles qui peuvent éventuellement échouer. En même temps, il est préférable de ne pas avoir autant d'étapes qu'elles entravent le progrès, donc un plan soigneux et défini est important.

## Étapes

À l'intérieur des étapes se trouvent des étapes où le travail est réellement effectué. Dans la construction et le test de logiciels, les étapes peuvent être exécutées en parallèle ou en séquence ; il existe de nombreux outils qui vous permettent de définir ces opérations. Bien que certains aient une interface graphique pour cela, la plupart des développeurs préfèrent un format textuel car il permet le contrôle de version du pipeline et des étapes, permettant ainsi des vérifications de sécurité contre le pipeline.

## Pipeline

Avec des étapes et des étapes définies, vous avez un vrai pipeline. Au lieu de définir un seul pipeline pour toutes vos applications, ce qui échoue généralement car il devient excessivement complexe avec de nombreuses conditions ou trop restrictif, je recommande d'utiliser des pipelines modèles et de les modifier si nécessaire, en veillant à respecter les normes de conformité et les réglementations. Il est important d'établir un pipeline approprié dès le début d'un projet, tout comme la flexibilité au fur et à mesure de l'avancement du projet.

## Environnements

Au lieu de créer des environnements ad hoc, il est préférable de les créer dès le départ avec intention. Le DevOps ou le SecDevOps peuvent injecter des politiques de sécurité et de conformité dans l'ensemble des différents projets, garantissant ainsi la sécurité.

## Service Stack can be translated to French as "Pile de services".

Jetons un coup d'œil à la façon dont les développeurs travaillent, ce qui concerne les services de nos jours. Même si les développeurs travaillent sur une application monolithique, ils ont tendance à regrouper leur travail en unités fonctionnelles telles que des bases de données, des nœuds de logique métier ou des couches de transport. Par exemple, en utilisant un service simple tel que MongoDB. Lorsqu'un développeur exécute ce conteneur sur son ordinateur portable, cela lui permet d'obtenir la fonctionnalité attendue pour stocker des données de manière non SQL dans un document. Sur l'ordinateur portable, il se peut que ce soit le seul conteneur en cours d'exécution.

Dans un environnement de test ou de développement, il peut y avoir plusieurs instances de ce service en cours d'exécution, et le développeur peut déployer un cluster de services MongoDB et les connecter ensemble pour un test. Le service reste un service Mongo DB, mais son comportement change en fonction de l'environnement dans lequel il se trouve. L'objectif des développeurs est d'écrire du code et de le vérifier par rapport au service MongoDB sur leurs ordinateurs portables pour garantir qu'il fonctionnera correctement en production.

Un service simple tel que MongoDB est nécessaire, mais en soi, pas très utile. Des services complexes tels que les piles LAMP ou les piles MEAN sont plus importants. Ce sont plusieurs services qui fonctionnent ensemble, agissant essentiellement comme un seul service. Rassemblés, ils déploient un service complexe sur un ordinateur portable et il y a deux ou trois conteneurs de service simples qui tournent, fournissant aux développeurs les fonctionnalités nécessaires pour vérifier leur code.

Une fois que le code est validé, il déclenche le processus de développement où le développeur s'intègre avec d'autres personnes. Le même service complexe peut adopter une toute autre façon de fonctionner. De nombreuses politiques de sécurité peuvent être associées à ce service complexe pour garantir sa sécurité, sa fiabilité et sa résilience.

## Définitions de service/application

Il est important de comprendre les concepts de services simples et complexes car les développeurs de logiciels doivent définir comment les faire fonctionner. Il existe quelques définitions. L'une d'entre elles est appelée définition d'image. Elles sont fréquemment utilisées dans le monde des conteneurs, appelées images Docker. Le fichier Docker définit ce qui se trouve dans cette image. Cela est considéré comme un conteneur simple en lui-même, bien que les gens commencent à utiliser des conteneurs pour des choses complexes.

Dans les définitions de service, nous pouvons inclure plusieurs définitions d'imagines, par exemple Docker Compose, les opérateurs Kubernetes, les graphiques Helm, Terraform, et même CNAB. Ce sont des outils qui vous permettent de définir un service. Un service est plus qu'un simple conteneur ; c'est l'environnement dans lequel le conteneur s'exécute. Il peut inclure des définitions de réseau, de connectivité de volume, voire même des politiques de déploiement. Une "définition de service" complète comprend des définitions d'image, de configuration et de provisionnement.

## Mettre tout cela ensemble.

Lorsqu'un développeur crée un nouveau service, il ne se contente pas de développer le code de l'image ; il définit également l'environnement ou la configuration dans lequel il doit s'exécuter. C'est là que l'enchevêtrement de votre environnement et de la définition du service peut se rejoindre. Au moment de l'exécution, cela produira l'environnement nécessaire pour que le conteneur s'exécute de manière efficace et répétable, de sorte que vous puissiez facilement déplacer le code de l'exécution sur un ordinateur de bureau à l'exécution en production complète le plus rapidement possible.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
