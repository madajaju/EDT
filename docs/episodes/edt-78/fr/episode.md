---
layout: posts
title: "Compréhension du modèle de sécurité de responsabilité partagée"
number: 78
permalink: episode-EDT78-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 78
tags:
    - multicloud
    - compute
    - cybersecurity
    - sharedresponsibility
    - cloudsecurity
    - cloud
    - technology
    - process

date: Wed Feb 23 2022 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, architecte principal des solutions, Intel, explique les modèles de sécurité de responsabilité partagée. La responsabilité de la sécurité peut devenir trouble dans le cloud ; la responsabilité dépend des modèles de prestation de services cloud et d'autres facteurs."
video: "https://youtu.be/NY3Ct___1w8"
description: "Darren Pulsipher, architecte principal des solutions, Intel, explique les modèles de sécurité de responsabilité partagée. La responsabilité de la sécurité peut devenir trouble dans le cloud ; la responsabilité dépend des modèles de prestation de services cloud et d'autres facteurs."
---

<div>
{% include transistor.html id="975c761c" title="#78 Understanding the Shared Responsibility Security Model" %}

{% include youtube.html id="NY3Ct___1w8" %}
</div>

---

## Sécurité dans le Cloud

La plupart des gens comprennent la responsabilité de la sécurité sur site, mais la responsabilité devient plus floue dans le cloud. Si les données sont protégées dans le cloud, comment sont-elles protégées ? Qui est responsable de cette sécurité ? Que dire de la mise à jour des machines ?

Récemment, les fournisseurs de services cloud ont commencé à proposer encore plus de services, il y a donc plusieurs modèles. Parfois, la sécurité finit par se perdre au milieu.

## Zones de sécurité

Il y a quatre domaines majeurs de sécurité que nous devons comprendre.

## Physique

La sécurité physique est la partie facile à reconnaître. Les fournisseurs de services cloud sont responsables de la sécurité physique de leurs centres de données, et vous êtes responsable de la sécurité physique de vos propres centres de données. De plus, vous devez sécuriser votre espace physique. Si vous êtes un fabricant, par exemple, vous devez sécuriser les machines à l'intérieur de votre zone. Une récente intrusion a été réalisée via le système de CVC (Chauffage, Ventilation et Climatisation) qui était connecté au réseau d'une organisation.

## Infrastructure is translated to French as "l'infrastructure".

La sécurité de l'infrastructure n'est pas l'aspect physique, mais le hardware lui-même. Est-ce que vos commutateurs réseau disposent des bons correctifs et mises à jour de sécurité? Les lecteurs et dispositifs de stockage sont-ils mis à jour? Sont-ils protégés? L'infrastructure peut tomber dans des zones grises avec les fournisseurs de services de cloud, donc vous devez savoir qui est responsable de quoi et dans quelles circonstances.

## Translate the following to French: Application

French Translation:   Application

Pour la sécurité de l'application, il est nécessaire de savoir qui a accès à l'application et si elle est mise à jour avec les bons correctifs de sécurité.

## Les données

Protéger vos données est l'une des choses les plus importantes que vous devez faire. Les données peuvent être utilisées comme une arme lors d'une attaque par ransomware, où les attaquants les prennent ou les chiffrent. Elles sont également utilisées pour obtenir des avantages concurrentiels puissants au sein de différentes organisations. Vous devez savoir où se trouvent vos données et comment les protéger.

## Les modèles de prestation de services cloud

Il existe trois modèles de livraison de base dans le cloud. Différents modèles sont créés tout le temps, mais les trois principaux sont l'Infrastructure en tant que Service (IAAS), la Plateforme en tant que Service (PAAS) et le Logiciel en tant que Service (SAAS). Nous catégoriserons tout le reste comme X en tant que Service (XAAS).

## Infrastructure en tant que Service

IAAS est le fait de louer auprès d'un fournisseur de services cloud. Cela concerne les machines virtuelles et les réseaux virtuels, donc le stockage, le calcul et le réseau. Nous commençons également à voir des choses intéressantes avec des accélérateurs tels que les GPU, voire même les processeurs neuromorphiques. IAAS est l'endroit où vous exécutez vos applications.

## Plateforme en tant que service

La prochaine couche de la pile est PAAS. C'est là que vous obtenez un certain framework comme Kubernetes pour exécuter des choses. VMware fonctionnant au-dessus de l'IAAS est PAAS. Les pipelines CICD en tant que service proposent de nombreux outils qui s'insèrent dans cet espace. PAAS vous permet de construire et déployer de nouveaux services sur cette plateforme afin de pouvoir facilement déployer et gérer des systèmes volumineux qui sont construits au-dessus de l'IAAS.

## Logiciel en tant que service

Le prochain est SAAS. Il s'agit d'un logiciel spécifique qui est géré par le fournisseur de logiciels ou le fournisseur de services cloud, ou cela pourrait être une offre de SAAS proposée par un tiers pour quelqu'un d'autre. L'élément clé avec SAAS est qu'ils sont responsables de la sécurité de l'application. Ils assurent la disponibilité et gèrent tous les domaines de gestion tels que la fiabilité, la sécurité et l'intégrité. Beaucoup des programmes SAAS sont construits sur des plateformes PAAS.

## X en tant que service

XAAS peut être n'importe quel nouveau service tel que l'intelligence artificielle, la gestion des appareils ou la détection de sécurité.

Comprendre ces différents modèles de livraison est important car les modèles de sécurité partagée des fournisseurs de services cloud sont basés sur le modèle de livraison.

## Cyber Domaines

Chacun des six piliers de la cybersécurité, tels qu'identifiés par Steve Warren, CTO chez Intel lors d'un podcast précédent, est important que vous soyez dans le cloud, sur site ou en périphérie. Les six piliers sont la détection des menaces, l'intelligence, l'analyse et l'orchestration ; la gestion des identités et des accès ; la sécurité des données et des applications ; la sécurité réseau ; la sécurité de la chaîne d'approvisionnement ; et la sécurité de l'hôte et du système. Ces six domaines s'intègrent dans le modèle de sécurité de responsabilité partagée que les fournisseurs de services cloud prônent.

## Matrice de sécurité de responsabilité partagée.

Cette responsabilité partagée est illustrée dans la matrice. Les techniques de livraison du modèle de service se trouvent sur l'axe vertical : SAAS, PAAS, IAAS et sur site. Si vous hébergez vous-même, tout ce qui est à l'extrême droite est de votre responsabilité.

Du côté d'IAAS, vous êtes entièrement responsable de la sécurité des données et des applications, ainsi que partiellement responsable de l'infrastructure, car vous devez toujours assurer le contrôle du réseau et du système d'exploitation. Le fournisseur de services cloud est responsable du réseau physique et de l'hébergement.

Sur la couche PAAS, vous êtes toujours responsable de la sécurité des données et partiellement responsable de la sécurité des applications, ainsi que de l'infrastructure d'identité et de répertoire. Il existe des outils disponibles pour vous aider dans ces domaines. Bien que vous soyez responsable des applications et de leurs plateformes, ils sont responsables des structures et des intergiciels qu'ils fournissent. Bien que la couche PAAS prenne en charge la plupart du système d'exploitation et vous fournisse certains outils de niveau supérieur, vous êtes toujours responsable de la configuration des contrôles réseau.

Haut dans la pile sur SAAS, même si vous utilisez le stockage en tant que service, les données en tant que service, ou un CRM tel que Salesforce, vous restez responsable de vos données car vous devez toujours concevoir et chiffrer vos sauvegardes et gérer les comptes et les identités.

Un point clé à travers les modèles est que vous êtes responsable de la sécurité de vos données ; il n'y a jamais de scénario où vous laissez toute votre sécurité aux fournisseurs de services cloud. Vous devez sauvegarder vos données et vous assurer que vous pouvez revenir en arrière en cas d'attaque de ransomware si vous utilisez le stockage d'objets, si vous gérez correctement vos accès et si vous utilisez des outils qui facilite cette tâche.

## Différentes approches de sécurité.

Chacun des trois principaux fournisseurs de services cloud adopte une approche différente en matière de sécurité, notamment en ce qui concerne la configuration réseau.

## AWS se traduit en français par "Amazon Web Services".

AWS se concentre sur la prévention. Lorsque vous démarrez une machine virtuelle, par défaut, aucun port n'est ouvert, vous devez donc créer des groupes de sécurité. AWS est le plus restrictif, utilisant IAM pour la gestion des identités. AWS est idéal pour les équipes de taille moyenne, mais il ne convient pas aussi bien aux organisations très grandes.

## Azure in French is "Azur".

Azure met davantage l'accent sur la facilité d'utilisation ; la sécurité est moins restrictive. Ils utilisent le concept de réseaux virtuels pour la sécurité, de sorte que toutes les machines virtuelles sur le même réseau virtuel peuvent communiquer entre elles sur ce réseau. Cela s'oppose au principe de la confiance zéro, il faut donc décider de ce qui est le plus important pour vous. Azure utilise Active Directory, donc si vous disposez déjà d'un Active Directory mature et important, c'est une bonne option pour la gestion des identités.

## Plateforme Google Cloud

Google Cloud Platform se concentre également sur la facilité d'utilisation, mais ils misent sur les machines virtuelles (VMs) et la sécurité du réseau. Vous pouvez avoir des profils qui verrouillent tout sur une VM ou vous pouvez avoir un profil qui les ouvre un peu plus. Ils se situent au milieu du spectre en termes de restrictivité. Bien qu'ils ne soient pas aussi robustes qu'AWS ou Active Directory, GCP dispose d'une bonne gestion des identités.

Les trois fournisseurs de services cloud proposent tous IAAS, PAAS, SAAS, Container as a Service, ainsi que divers XAAS. Vous devez évaluer le modèle de sécurité et comprendre les différences de chacun.

À certains égards, comprendre le modèle de sécurité de responsabilité partagée est plus difficile que simplement gérer les choses sur site. Maintenant, plus de parties prenantes sont impliquées et la complexité augmente. La clé réside dans la compréhension des modèles et l'utilisation des outils disponibles pour vous aider à gérer la sécurité sur plusieurs clouds.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
