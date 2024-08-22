---
layout: posts
title: "Gouvernance des données modernes"
number: 71
permalink: episode-EDT71-fr
lang: fr
nav_exclude: true
nav_order: 71
tags:
    - datamanagement
    - zerotrust
    - policy

date: 2021-12-02T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Matthew Carroll

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, architecte en chef des solutions chez Intel, poursuit sa discussion approfondie sur la réalité et l'avenir de la gouvernance moderne des données avec Matthew Carroll, PDG d'Immuta. Dans cet épisode, ils discutent de la Classification des données, des Politiques et de la Gouvernance."
video: "https://youtu.be/url"
description: "Darren Pulsipher, architecte en chef des solutions chez Intel, poursuit sa discussion approfondie sur la réalité et l'avenir de la gouvernance moderne des données avec Matthew Carroll, PDG d'Immuta. Dans cet épisode, ils discutent de la Classification des données, des Politiques et de la Gouvernance."
---

<div>
{% include transistor.html id="068a1dff" title="#71 Modern Data Governance" %}

{% include youtube.html id="url" %}
</div>

---

Dans la gouvernance des données modernes, la première hypothèse est qu'il faut séparer la politique de la plateforme.

Le deuxième point est qu'on ne peut pas avoir d'ontologie. Si quelqu'un essaie de créer un super schéma de tout, c'est impossible, mais il faut un schéma pour appliquer une politique. Donc, si un utilisateur veut joindre deux colonnes, il faut avoir une nouvelle politique. Les données sensibles doivent être découvertes, à la fois par des identifiants directs et indirects. Les identifiants indirects sont plus difficiles, et des techniques doivent être appliquées pour atténuer le risque d'attaques de liens.

La troisième prémisse est l'introduction d'une série de techniques améliorant la confidentialité telles que le masquage, la caviardage, l'autorisation, etc.

Ces outils sont automatisés dans le cadre de la gouvernance moderne des données. Un exemple parallèle est la façon dont vous aviez l'habitude d'être un sorcier pour supprimer les yeux rouges sur une photo. Maintenant, vous cliquez sur un bouton et les yeux rouges disparaissent. C'est la même chose en matière de confidentialité. Nous avons besoin de ce bouton facile pour trouver automatiquement un identifiant potentiellement indirect lorsque le risque de ré-identification est supérieur à très faible.

Mis à part la confidentialité, il y a une myriade d'autres choses avec les données qui devraient être automatisées avant leur classification. Bien que Immuta ne se penche pas sur la transformation des données et ces flux de données, ils fournissent une API et une interface en ligne de commande. Les ingénieurs qui construisent ces pipelines peuvent faire leur travail, et Immuta leur donne les règles, et la mise à jour des règles peut faire partie du pipeline. Ils veulent être un lien vers cette couche.

Il y a de nouveaux rôles dans cet domaine, tels que le data steward et le data governance engineer, qui sont séparés du data engineer. De plus, les utilisateurs de données sont vraiment trois utilisateurs distincts avec trois besoins différents.

Tout d'abord, il y a des data scientists qui ont des compétences spécialisées et ont besoin de données d'une manière spécifique. Parfois, ils ont besoin d'outils spécifiques et d'un environnement de calcul spécifique quelque part dans le monde pour accomplir leur mission.

D'autre part, les ingénieurs de données et les ingénieurs analytiques, dont l'un construit les pipelines et l'autre les maintient, ont besoin d'un accès rapide à une solution d'urgence lorsque quelque chose se casse. Ils l'intègrent dans un pipeline et le livrent à quelqu'un en vérifiant qu'il est à jour.

Finalement, il y a les gouverneurs qui cherchent à se conformer aux réglementations.

Ces utilisateurs ont tous des opinions et des besoins très différents en matière de gouvernance. Lors de l'application d'une nouvelle gouvernance, la chose la plus importante est de traiter ces groupes comme des parties prenantes distinctes.

Si vous pensez à tous ces rôles de manière binaire, en tant qu'ingénieurs de données, ce qui finit par se produire, c'est qu'il y a beaucoup de réunions, donc il est impossible de développer. Nous devons créer une relation symbiotique entre les opérations de données, la science des données, l'analyse des données et la gouvernance. Un modèle d'exemple est Salesforce ou ServiceNow, où il y a un flux de travail complet du début à la fin et aucune réunion n'est nécessaire. Cela serait une véritable opération des données.

Immuta a, philosophiquement, une approche basée sur les attributs plutôt qu'une approche basée sur les rôles. Le problème avec une approche basée sur les rôles est que vous augmentez le volume inévitablement en ajoutant constamment des rôles. Par exemple, une organisation pharmaceutique avait plus de 800 000 rôles, car les rôles ne peuvent jamais être supprimés en raison de la nécessité de reproduire des essais de médicaments. L'excès de rôles peut rapidement devenir un problème d'échelle.

L'accès basé sur les attributs est la clé pour contrer cela. Au lieu d'ajouter constamment des rôles, les utilisateurs ont des attributs spécifiques et cohérents. Par exemple, un attribut d'un utilisateur pourrait être qu'il est identifié de telle sorte qu'il ne peut voir que son propre état. Avec un accès basé sur les rôles, chaque état, qu'ils puissent le voir ou non, devrait être écrit. Cette gestion moderne de l'identité est très évolutive. L'accès aux attributs simplifie le nombre de politiques à rédiger et aide à améliorer les performances.

Les réglementations mondiales modernes telles que le RGPD, cependant, exigent également un but. C'est là que l'accès aux attributs devient important : quelles finalités chaque personne peut-elle exercer ? Selon une EULA, les données doivent être traitées par les utilisateurs uniquement pour la raison indiquée. Sinon, une analyse des risques doit être effectuée avant que les données soient opérationnellement utilisées à des fins de production.

En ce moment, nous sommes au début de la gouvernance moderne des données. Actuellement, les utilisateurs prennent une décision binaire unique concernant les données : consentement ou refus de consentement. L'avenir se situe quelque part au milieu : le consentement limité. Par exemple, si une personne confie ses données génomiques à une entreprise comme ancestry.com, qu'est-ce que cela signifie pour son enfant à l'avenir ? L'enfant n'a pas donné son consentement pour que son matériel génétique soit transmis et éventuellement examiné, disons, par une compagnie d'assurance santé pour déterminer les risques. Dans la gouvernance moderne des données, Matt voit les consommateurs donner un consentement limité, par exemple en autorisant une entreprise à analyser uniquement l'ADN pour des raisons généalogiques et rien d'autre.

Le futur doit être basé sur le consentement et l'accès basé sur l'objectif, car finalement, les données dérivées génèrent des connaissances, tandis que le développement de l'apprentissage automatique intègre les données dans les algorithmes.

Pour en savoir plus sur Immuta et la création d'un programme de gouvernance des données, rendez-vous sur Immuta.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
