---
layout: posts
title: "Collaborative DevSecOps"
number: 88
permalink: episode-EDT88-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 88
tags:
    - cybersecurity
    - devsecops
    - rpa
    - technology
    - compute
    - zerotrust
    - zta

date: Mon May 23 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Mike Fraser
    - Callen Sapien

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, Darren discute avec Callen Sapien de Sophos, directeur de la gestion des produits chez Sophos Factory, et Mike Fraser, vice-président de DevSecOps, de leur produit qui permet une collaboration véritablement collaborative en SecDevOps."
video: "https://youtu.be/url"
description: "Dans cet épisode, Darren discute avec Callen Sapien de Sophos, directeur de la gestion des produits chez Sophos Factory, et Mike Fraser, vice-président de DevSecOps, de leur produit qui permet une collaboration véritablement collaborative en SecDevOps."
---

<div>
{% include transistor.html id="7c72a8c7" title="#88 Collaborative DevSecOps" %}

{% include youtube.html id="url" %}
</div>

---

L'expérience de Mike en tant qu'ingénieur en cybersécurité dans l'armée de l'air, puis en travaillant dans le développement, la sécurité, les opérations et les services gérés, l'a amené à un objectif de création d'un produit pouvant favoriser la collaboration pour construire une automatisation moderne autour de ce qu'il appelle l'IT en tant que code. Il voulait aborder le DevSecOps de manière globale, en rassemblant tout le monde.

Son produit résultant, Sophos Factory, crée des solutions modernes autour de blocs de construction avec des fonctionnalités, des fonctionnalités et une expérience utilisateur qui peuvent être utilisées sur l'ensemble du spectre des talents techniques. Ce fut un problème complexe à résoudre, y compris des personnes travaillant visuellement, des développeurs qui codent, etc.… Il devait également combler le fossé entre le matériel et le logiciel, en utilisant un processus agile entre les équipes.

Sophos Factory n'est pas seulement un pipeline CI/CD. C'est une petite partie du système global, qui fonctionne de bout en bout depuis le développement, la sécurité, les opérations et le déploiement, avec des fonctionnalités telles qu'un constructeur visuel, un DSL et une prise en charge de tout le contenu dans son format d'origine. Il s'intègre également aux systèmes existants. Il rassemble toutes les différentes équipes et les différents outils qu'elles utilisent, donc il va bien au-delà de la simple création d'un pipeline ou de l'automatisation.

Les utilisateurs individuels se voient présenter les éléments avec lesquels ils sont familiers, mais tous avec la même interface. Par exemple, un ensemble de scripts peut être créé à partir d'un format visuel. Une personne chargée de la sécurité peut utiliser la même interface avec les outils et les artefacts auxquels elle s'attend. Un développeur à stack complet ou un ingénieur DevOps peut intégrer et créer tous les artefacts d'une manière que les autres équipes peuvent utiliser. Il ne s'agit pas de la création d'un pipeline pour un élément d'automatisation, mais d'un tissu interconnecté entre des systèmes disparates.

L'intégration signifie le mouvement des données, mais cela signifie aussi des actions. Par exemple, supposons que quelqu'un utilise Jira du côté programmation, ServiceNow du côté opérations informatiques, et une fonction de réponse aux incidents du côté sécurité. Dans ce cas, vous pouvez intégrer toutes ces parties et envoyer quelque chose sur Slack, afin que tout le monde ait une visibilité et puisse répondre quasiment en temps réel.

Sophos Factory empaquette des modules dans des pipelines pour assurer leur réutilisation, ce qui en fait des éléments constitutifs. Ils peuvent être construits autour de divers cas d'utilisation, mais l'objectif est de créer quelque chose qui puisse être utilisé encore et encore. Par exemple, supposons que vous utilisiez ServiceNow et que vous souhaitiez créer un ticket. Dans ce cas, vous l'utilisez dans différents autres cas d'utilisation liés à l'automatisation réseau, à l'automatisation de l'infrastructure, au cloud, à la sécurité native, etc. Il s'agit de créer une solution plutôt que de simplement automatiser ces éléments ensemble. Le dernier élément est la pérennité future, pas seulement la répétabilité. Vous pouvez ajouter ou soustraire des éléments du pipeline global, ce qui n'est pas possible avec le matériel mais également très difficile avec les systèmes existants tels que les systèmes CI/CD conçus pour la mise en production de logiciels, pas pour la construction globale d'une solution et le maintien du cycle de vie dans le temps.

Avec la technologie Sophos Factory, vous pouvez regrouper différents outils pour respecter les normes telles que CIF ou NIST 853 et les rendre disponibles sous forme de pipelines à faible code ou sans code. Sophos Factory se distingue des autres technologies d'automatisation grâce au partage via des catalogues de solutions. Vous pouvez publier des blocs de construction d'automatisation, des solutions complètes ou consommer l'automatisation créée par d'autres équipes. Cela crée une quantité considérable de flexibilité.

Le contrôle de version est intégré aux pipelines et aux catalogues de solutions. Si vous utilisez un pipeline de solution à partir d'un enregistrement publié par quelqu'un d'autre, vous pouvez le configurer à la version de votre choix ou tirer la dernière version pour obtenir toutes les mises à jour. L'ABAC fait également partie du système au cas où vous voudriez limiter l'accès à certaines utilisateurs, par exemple, en lecture seule. Grâce à l'interopérabilité de Sophos Factory, vous pouvez également intégrer des outils de numérisation pour maintenir une visibilité dans le pipeline. Vous pouvez également exécuter différents canaux autour des outils de politique.

Sophos Factory tisse ensemble les flux de sécurité et d'informatique, créant un excellent point d'intégration parmi les trois têtes du monstre de Dev, Sec et Ops.

Pour améliorer la sécurité, Sophos Factory dispose d'un produit de confiance zéro et d'attestation, mais ils travaillent également avec d'autres produits de sécurité tels que HashiCorp Console. La capacité de confiance zéro et d'attestation est l'évolution naturelle pour authentifier entre différents systèmes. Au lieu des identifiants statiques, il existe maintenant de meilleures façons de communiquer et de partager l'attestation de manière sécurisée avec les autres.

L'usine Sophos dispose d'un système d'habilitation intégré pour la gestion des clés, et il prend en charge Vault de HashiCorp ainsi que des modèles natifs du cloud. Ils peuvent également aider à la construction de services de gestion critiques intégrés au cloud et emballés autour d'un pipeline. Il n'y a pas seulement une variable d'habilitation lors de l'exécution, mais aussi une étape d'habilitation qui n'est évaluée qu'à l'exécution. Ils peuvent se superposer à ces outils de sécurité, devenant ainsi naturellement une partie de votre solution de construction.

Sophos Factory se situe dans l'espace de la RPA, mais elle va bien au-delà d'un simple exécutant de RPA typique. Ils sont techniquement en RPA car, même si les humains sont toujours impliqués dans la réalisation des tâches, les machines sont utilisées pour automatiser le processus. Les clients cherchent des moyens de mettre à l'échelle et d'obtenir de la valeur à partir des achats IT de manière sécurisée. Sophos Factory encourage le développement des compétences techniques et donne aux employés un accès à des ensembles d'outils, afin d'en tirer davantage et ce, de manière sécurisée.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
