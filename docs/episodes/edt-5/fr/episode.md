---
layout: posts
title: "Modèle de maturité de l'infrastructure"
number: 5
permalink: episode-EDT5-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 5
tags:
    - infrastructurematurity
    - compute
    - technology
    - sdi
    - cloud
    - multicloud

date: Thu Jul 23 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "La transformation numérique peut être difficile. De nombreuses organisations deviennent paralysées lorsqu'elles essaient de décrypter toutes les technologies qui leur sont présentées chaque jour. Dans ce parcours, comme dans tout autre, il est important d'avoir une carte. Dans cet épisode, Darren explique le Modèle de maturité de l'infrastructure pour aider les organisations à déterminer où elles se trouvent dans leur transformation numérique, où elles peuvent aller ensuite et comment y parvenir."
video: "https://youtu.be/ZMEXlPBn82o"
description: "La transformation numérique peut être difficile. De nombreuses organisations deviennent paralysées lorsqu'elles essaient de décrypter toutes les technologies qui leur sont présentées chaque jour. Dans ce parcours, comme dans tout autre, il est important d'avoir une carte. Dans cet épisode, Darren explique le Modèle de maturité de l'infrastructure pour aider les organisations à déterminer où elles se trouvent dans leur transformation numérique, où elles peuvent aller ensuite et comment y parvenir."
---

<div>
{% include transistor.html id="d5cf91e3" title="#5 Infrastructure Maturity Model" %}

{% include youtube.html id="ZMEXlPBn82o" %}
</div>

---

La transformation numérique peut être difficile. De nombreuses organisations deviennent paralysées lorsqu'elles essaient de décrypter toutes les technologies qui leur sont jetées chaque jour. Dans ce voyage, comme dans tout autre, il est important d'avoir une carte. Dans cet épisode, Darren explique le "Modèle de Maturité de l'Infrastructure" pour aider les organisations à découvrir où elles en sont dans leur transformation numérique, où elles peuvent aller ensuite et comment y parvenir.

## Phase standardisée

Presque toutes les organisations sont dans cette phase standardisée ou au-delà. Comprendre cette phase nous donne une référence pour commencer à parler des points communs que nous observons dans toutes les organisations.

## Basique

Le niveau de base est là où l'on trouve une infrastructure désorganisée et une gestion réactive. C'est particulièrement courant dans les start-ups où une organisation achète des services ou du matériel selon les besoins, en réaction aux événements plutôt que dans le cadre d'un plan global. Ici, nous voyons également des piles logicielles/matériel spécialement conçues. Une informatique amateur accrue fait également partie de cette phase de maturité.

## Centralisé

Dans ce niveau, l'infrastructure est centralisée. Les organisations achètent de la capacité plutôt que du matériel spécialement conçu. Les achats ne sont plus réactifs, mais font partie d'un plan à plus long terme. En général, l'organisation aura des configurations de serveur communes afin de pouvoir acheter en volume pour une efficacité en termes de coûts et une fiabilité accrues. L'informatique est plus centralisée et spécialisée, par exemple dans les réseaux, le stockage, le calcul et la sécurité.

## Simplifié

Au niveau simplifié, l'infrastructure est plus consolidée. Différents départements peuvent partager du matériel tel que des serveurs, du stockage et des réseaux. Les organisations obtiennent de meilleures performances lorsqu'elles passent des anciennes méthodes à de nouvelles méthodes de centralisation et de simplification. Les coûts d'exploitation diminuent à mesure que l'efficacité augmente.

## Phase virtualisée

La plupart des organisations aujourd'hui se trouvent au moins en partie dans la phase de virtualisation. C'est là que l'on trouve des configurations standard et des clouds privés.

La virtualisation du serveur donne la flexibilité d'exécuter des applications sur différentes machines et de les déplacer facilement d'une machine à une autre.

La virtualisation du stockage est un développement plus récent qui apporte des avantages similaires à la virtualisation des serveurs : une flexibilité pour des décisions plus dynamiques. Le stockage peut désormais s'étendre à l'ensemble de l'écosystème. Le stockage peut être provisionné pour une application spécifique, et ce stockage ainsi que l'application peuvent se déplacer au sein de l'infrastructure.

La virtualisation réseau, le dernier ajout, a été adoptée particulièrement par les fournisseurs de services Internet. Ils ont réalisé un investissement considérable en raison de l'efficacité de pouvoir effectuer des changements dynamiques dans le réseau à distance plutôt qu'à partir du matériel préalablement dédié à une fonction spécifique.

Toutes ces technologies de virtualisation sont liées dans les offres de l'espace cloud privé, qu'elles soient commerciales ou open source, souvent regroupées dans un seul endroit facile à gérer. Les organisations entrent dans cette phase et modifient également et consolident leur infrastructure informatique en passant d'une approche verticale à une approche transverse (NOTE : peut-on appeler cela une approche horizontale ?) en ce qui concerne les systèmes, les applications et les services, plutôt que le calcul, le stockage et le réseau.

## Phase automatisée

Dans la phase automatisée, les organisations peuvent provisionner automatiquement les infrastructures, ce qui permet de gagner du temps en éliminant les différentes couches de personnes et d'autorisations. Grâce à l'utilisation de portails en libre-service, un ingénieur ou un développeur de logiciels peut obtenir immédiatement les ressources dont il a besoin. Cette provision automatique permet également une automatisation basique des correctifs, des machines virtuelles, de la sécurité et de la conformité. Les TI ne sont désormais plus en mode réactif, mais en mode proactif. D'autres aspects précieux de cette phase incluent, par exemple, le démarrage automatique des infrastructures pour les applications en production et l'auto-guérison des applications.

## Phase orchestrée

À mesure que l'automatisation devient plus complexe, une phase orchestrée devient nécessaire. L'automatisation consiste à appliquer des actions sur une machine, alors que l'orchestration consiste à coordonner les actions se déroulant sur plusieurs machines ou même modalités (stockage, calcul, réseau) pour une application. De plus, les piles d'applications automatisées peuvent déployer plusieurs applications sur plusieurs serveurs différents. À cette phase, les organisations orchestrent également des services hybrides, par exemple, la gestion des ressources sur des clouds publics et privés. Les avantages de cette orchestration sont la réduction des coûts d'exploitation (OpEx), la réduction des coûts d'investissement (CapEx) et la réduction du temps de déploiement.

## Temps réel (gestion SLA) Phase

Pendant une phase en temps réel, les organisations sont dans une infrastructure d'accord de niveau de service. Au lieu d'applications, les organisations utilisent des services qui apportent de la valeur et qui lient tout ensemble. Les services partagés fonctionnent sur plusieurs nuages hybrides et même sur une infrastructure héritée. La mise en commun de l'infrastructure hybride, l'orchestration basée sur des politiques et l'orchestration basée sur des services optimisent l'infrastructure, la gestion des données et les services.

## Conclusion

Il est courant que différentes parties de votre organisation se trouvent à des phases différentes. Quelques groupes seront plus avancés que d'autres; c'est sain. De petits groupes pionniers peuvent échouer sans affecter l'ensemble de l'organisation, ou ils peuvent réaliser une percée et entraîner le reste de l'organisation avec eux. Très peu d'organisations sont passées à la phase la plus élevée sur la carte. La clé est de ne pas se décourager, mais d'utiliser la carte comme guide pour déterminer où vous en êtes et quels pourraient être les prochains pas pour votre organisation.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
