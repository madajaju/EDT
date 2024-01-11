---
layout: posts
title: "Stratégie numérique et architecture des données"
number: 24
permalink: episode-EDT24-fr
lang: fr
nav_exclude: true
nav_order: 24
tags:
    - data
    - dataarchitecture
    - aiops
    - secops
    - devsecops
    - devops
    - compute
    - technology
    - process

date: Tue Oct 06 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, architecte principal des solutions, secteur public, Intel, expose la stratégie numérique et l'architecture pour transformer efficacement votre organisation. Il explique comment les éléments organisationnels, procéduraux et technologiques doivent être équilibrés pour travailler efficacement vers une architecture idéale commune afin de soutenir une vision unifiée."
video: "https://youtu.be/url"
description: "Darren Pulsipher, architecte principal des solutions, secteur public, Intel, expose la stratégie numérique et l'architecture pour transformer efficacement votre organisation. Il explique comment les éléments organisationnels, procéduraux et technologiques doivent être équilibrés pour travailler efficacement vers une architecture idéale commune afin de soutenir une vision unifiée."
---

<div>
{% include transistor.html id="0f3c3117" title="#24 Digital Strategy and Data Architecture" %}

{% include youtube.html id="url" %}
</div>

---

Avoir un plan pour la transformation numérique de votre organisation est essentiel pour éviter de vous perdre dans le labyrinthe consistant à adopter simplement les dernières technologies et processus les plus récents et les plus performants. Cette stratégie aléatoire conduira à un échec de votre transformation numérique. Un plan, ou une feuille de route, allant de l'endroit où se trouve actuellement votre organisation à l'endroit où vous souhaitez aboutir, est la partie la plus importante d'une transformation efficace.

Les trois éléments clés qui doivent être coordonnés et équilibrés dans votre plan sont organisationnels, procéduraux et technologiques.

## Divisions organisationnelles

Pour comprendre le changement organisationnel, commençons d'abord par examiner les groupes communs dans la plupart des organisations.

## Développement

Ce groupe est votre équipe du jour ; ils développent de nouveaux produits. Les processus de l'équipe de développement sont bien connus et matures. Ils se concentrent sur le travail de développement, les tests et la mise en production du produit. Presque toutes les équipes utilisent une sorte de technique Agile ou d'itération rapide.

## Traduisez ce qui suit en français : IT

L'objectif de l'équipe informatique est d'optimiser l'infrastructure en termes de coût et d'efficacité. Ils veillent à ce que l'infrastructure soit fiable et dispose de contrôles et de mesures de sécurité intégrés. Principalement, ils examinent les aspects de calcul, de stockage, de réseau, de conformité et de coût.

## Sécurité

Le rôle de la sécurité est devenu de plus en plus important ces dernières années, d'autant plus récemment avec les employés travaillant à domicile en raison du COVID-19. L'équipe de sécurité se concentre principalement sur la sécurisation de la propriété intellectuelle, des données et de l'infrastructure. Les outils couramment utilisés sont la gestion des identités, la protection, la détection et la correction. Comprendre comment ces outils fonctionnent à un niveau élevé est important pour votre changement organisationnel.

## Les données

Ce tout dernier groupe, qui aurait pu auparavant être un statisticien ou un mathématicien effectuant de l'exploration de données, prend désormais de l'importance avec l'émergence de directeurs des données et des organisations qui les entourent. Ils se concentrent sur l'analyse, la catégorisation et la création de valeur réelle à partir de vos données. Que votre organisation soit dans le secteur de la fabrication ou des services, ou que vous cherchiez à attirer de nouveaux clients ou à économiser de l'argent, il existe de nombreux domaines dans lesquels les scientifiques des données peuvent apporter de la valeur.

## Réunir les groupes

Pour effectuer un changement numérique efficace, tous ces groupes doivent avoir une compréhension mutuelle de ce que chacun apporte à la table et une vision unifiée. Vous ne voulez pas que vos scientifiques des données explorent des données qui n'ont aucune valeur pour le développement ou l'informatique. Vous ne voulez pas que votre équipe de sécurité verrouille tout si étroitement que l'équipe de développement ne peut pas accomplir son travail. Parmi les groupes, il doit y avoir des stratégies, des processus et des architectures communs.

Bien que les objectifs et les résultats communs soient l'idéal, il y a des obstacles à surmonter. L'un des domaines les plus difficiles dans le changement organisationnel est la rupture de communication aux frontières. Certaines organisations ont créé de nouveaux groupes pour lisser les relations entre les différents groupes. Par exemple, entre la sécurité et l'informatique, il pourrait y avoir une équipe Sec Ops ou Sec Dev Ops chargée d'automatiser les politiques et les procédures émanant de l'équipe de sécurité. Un autre exemple serait une équipe de développement de données, composée de développeurs collaborant avec les scientifiques des données pour fournir des processus plus reproductibles grâce au développement d'applications ou à l'intégration d'outils et d'applications. Des architectures communes et des ensembles d'outils communs sur lesquels tous les groupes peuvent compter facilitent grandement le processus et les changements.

## Le système parfait

À quoi ressemblerait une architecture commune ? Une version utopique n'existe pas aujourd'hui, mais nous pouvons examiner les éléments et peut-être construire quelque chose vers cet idéal.

Le libre-service est un must. Par exemple, si un data scientist a besoin de plus d'espace de stockage pour des données, il n'aurait pas à appeler le service informatique et remplir une multitude de formulaires, mais plutôt utiliser un portail de libre-service qui permettrait de gagner du temps et qui fournirait l'espace de stockage. Bien sûr, le portail serait régi par des politiques, de sorte que l'équipe de sécurité puisse être assurée que les données confidentielles que le scientifique dépose dans un lecteur sont chiffrées et que le contrôle d'accès est automatique.

Une autre fonctionnalité idéale serait que le système soit auto-régénérant et axé sur les données. Si les machines étaient infectées, par exemple, elles seraient automatiquement mises en quarantaine et les charges de travail migreraient vers une autre zone dans le centre de données ou vers le cloud public. Encore une fois, le service informatique devrait établir des politiques et surveiller les processus, mais le système serait principalement automatique. Le système ne devrait pas seulement être automatique, mais intelligent, apprenant de l'expérience et devenant plus efficace.

Nous pouvons obtenir certains éléments de ce système utopique dès aujourd'hui avec des produits prêts à l'emploi en les intégrant et en les faisant utiliser par tout le monde. Voyons ce que chaque organisation voudrait de cette architecture.

## Architecture informatique (multi-hybrid clouds)

L'informatique est responsable de l'infrastructure sous-jacente et des informations de données au sein de l'organisation. Si l'informatique pouvait établir une base solide, tout le monde pourrait la développer. L'informatique doit passer à une solution de cloud multi-hybride afin que l'infrastructure puisse être facilement orchestrée selon les besoins, avec une flexibilité basée sur la politique. Il y a toujours un compromis entre coût et fiabilité, mais vous avez des options. Une couche d'infrastructure définie par logiciel permet facilement l'orchestration du calcul, du stockage, du réseau, de la sécurité, et maintenant même de nouvelles choses comme la mémoire et les accélérateurs. La fondation multi-hybride du cloud est un aspect clé de votre architecture commune.

## Architecture de sécurité

L'équipe de sécurité ajouterait à ce système et le rendrait aussi automatisé que possible. La première chose serait l'aspect de l'identité. Cela signifie que non seulement vous pouvez identifier les utilisateurs, mais aussi l'infrastructure, les applications et les services afin que tout ait une identité. Ces identités peuvent être liées à des autorisations et des accès spécifiques pour s'assurer que tout est authentifié. Du côté de la sécurité, vous souhaitez du chiffrement et des mesures correctives lorsque des problèmes surviennent. Idéalement, vous pourriez établir une racine de confiance afin que tout dans l'écosystème, aussi bien dans les applications que dans les services, jusqu'au micrologiciel et au BIOS des machines, soit digne de confiance.

## Architecture de développement

Les développeurs peuvent craindre que tout ce processus puisse ralentir le développement, donc il doit se dérouler presque automatiquement. La plupart des développeurs se concentrent maintenant sur des composants réutilisables pouvant être testés pour assurer leur sécurité. Ils le font à travers des écosystèmes sur des conteneurs tels que Kubernetes, Docker ou Mesos. La sécurité peut être intégrée au cycle de développement à l'étape de déploiement avant de passer avec succès à la production. Au-dessus de la couche de services se trouve une couche d'application où les développeurs peuvent tirer parti des flux de travail. Ces flux de travail peuvent être des flux de travail de développement tels que CI/CD ou des flux de travail métier grâce à des outils d'automatisation tels que Robotic Process Automation. Avoir à la fois la couche de services et la couche d'application sont des éléments clés de cette architecture utopique.

## Architecture des données

Avec des données dispersées à travers plusieurs écosystèmes, des nuages publics et même en périphérie, nous avons besoin d'une meilleure façon de gérer les données pour les scientifiques des données et les développeurs d'applications. Extraire les données du stockage est l'un des éléments importants ici. Avec cette structure, vous pouvez orchestrer les données à travers l'immense infrastructure et les lier uniquement aux applications et services où elles sont nécessaires. Les données pourraient être abstraites pour atterrir sur l'infrastructure au meilleur endroit pendant cette période de temps, que ce soit en périphérie, dans le centre de données ou traitées dans plusieurs endroits différents pour des répliques d'applications. La sécurité serait nécessaire pour verrouiller les données, puisque les données sont la raison même de l'existence de l'infrastructure. Certaines start-up se lancent maintenant dans cet espace pour prendre le contrôle de la couche de gestion des données.

Cette architecture utopique, avec sa myriade de parties mobiles, est appelée l'architecture Edgemere. Nous essayons de voir comment toutes ces parties s'emboîtent pour aider les organisations à accélérer leur transformation numérique. Nous devons comprendre les besoins de chaque organisation, quels sont leurs cas d'utilisation, et quelles sont les similarités entre les groupes afin de concevoir une architecture dans laquelle toute l'organisation peut travailler.

La mission de votre organisation est de faire tomber les barrières entre les groupes, de développer une vision commune de là où vous souhaitez être en termes d'organisation, de procédures et d'architecture, et de mettre en place une feuille de route pour y parvenir.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
