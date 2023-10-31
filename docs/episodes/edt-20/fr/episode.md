---
layout: posts
title: "Détruire la complexité des niveaux de stockage."
number: 20
permalink: episode-EDT20-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 20
tags:
    - data
    - optane
    - technology
    - storage
    - vastdata

date: Tue Sep 08 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Randy Hayes

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Randy Hayes de VAST Data et Darren Pulsipher, Architecte Principal des Solutions pour le Secteur Public chez Intel, discutent de l'architecture de stockage innovante de VAST Data qui élimine le besoin de niveaux en utilisant NVMe over Fabrics, QLC Flash et 3D XPoint Optane."
video: "https://youtu.be/ZU6BDo0cFac"
description: "Randy Hayes de VAST Data et Darren Pulsipher, Architecte Principal des Solutions pour le Secteur Public chez Intel, discutent de l'architecture de stockage innovante de VAST Data qui élimine le besoin de niveaux en utilisant NVMe over Fabrics, QLC Flash et 3D XPoint Optane."
---

<div>
{% include transistor.html id="a3a3329f" title="#20 Destroying the Complexity of Storage Tiers" %}

{% include youtube.html id="ZU6BDo0cFac" %}
</div>

---

## Trente ans de complexité de stockage

Le stockage peut être un vieux concept, mais VAST Data a atteint le statut de licorne en seulement un peu plus d'un an de livraisons de revenus. VAST a remplacé l'ancienne architecture des systèmes de stockage à plusieurs niveaux par un système unique et monolithique, rapide et rentable. Les solutions VAST éliminent également le problème des systèmes de stockage volumineux et chaotiques constitués de différents systèmes de fichiers et architectures différentes.

## Une fondation pour une nouvelle architecture

Le fondateur de VAST examinait le stockage avec une perspective vierge. Il a constaté que les clients n'avaient pas nécessairement besoin de meilleures performances de la part des Flash, mais qu'ils avaient besoin d'un support de stockage de fichiers et d'objets à moindre coût. Il a tiré parti de trois technologies qui n'existaient pas avant 2018. Premièrement, le NVMe sur Fabrics, utilisé comme un type de SAN hyperscale pour connecter tout ensemble avec une latence réduite. Ensuite, le flash QLC, car il est peu coûteux et n'a pas de pièces mobiles comme les disques durs. Troisièmement, l'Optane 3D XPoint d'Intel. L'Optane offre une parité en lecture-écriture et une endurance élevée à un prix raisonnable. La combinaison de ces trois technologies permet à VAST de fournir des performances tout flash, mais à un prix comparable à celui d'un disque dur. Cela élimine le besoin d'autres niveaux que les organisations achètent parce qu'ils sont bon marché.

## Présentation de Vast Data Universal Storage

Le système VAST est la première architecture de tout partager désagrégée. Cela signifie que la logique est désagrégée de l'état du système de fichiers. Au lieu de cela, l'état du système de fichiers réside dans des boîtes de données contenant du Flash QLC et de l'Optane. L'Optane est utilisé comme un grand magasin de métadonnées. Il est polyvalent, tout comme le système, qui est commercialisé sous le nom de stockage universel. Avec ces boîtes, il n'y a pas de point de défaillance unique, donc la capacité est, théoriquement, illimitée. (VAST a testé le système à environ 50 pétaoctets dans un seul système de fichiers.) Vous pouvez augmenter la capacité simplement en ajoutant des serveurs x86 bon marché dans les clusters. Parce que c'est un système de fichiers parallèle, n'importe quel utilisateur peut accéder à n'importe quelle partie des données depuis n'importe lequel des serveurs comme s'il était connecté directement, vous pouvez donc continuer à évoluer.

Vous pouvez également augmenter les performances indépendamment de la capacité. La seule chose qui limiterait les performances du flash est le CPU, donc en ayant la possibilité d'augmenter de manière transparente le nombre de CPUs dans le cluster, vous pouvez améliorer les performances.

L'un des problèmes résolus avec cette structure est la latence. De nombreuses organisations ont besoin d'une faible latence pour l'ensemble de leurs données. Étant donné que chacun de ces serveurs sans état a accès à l'ensemble des données, vous disposez d'un accès rapide à l'ensemble des données.

## Architecture DASE : Pools de serveurs

Un autre grand avantage est qu'il est facile d'ajuster précisément le stockage d'une organisation. La nature modulable des serveurs sans état, ainsi que l'absence de communication entre eux, vous permettent de construire un cluster parfaitement adapté à vos besoins. Par exemple, vous pouvez segmenter vos boîtiers de contrôle en fonction de différentes charges de travail, mais ils peuvent tous accéder aux mêmes données.

De plus, le système fonctionne bien avec une organisation qui a besoin de différentes couches de classification pour accéder aux données. Vous avez la possibilité de séparer l'accès des utilisateurs en créant plusieurs zones d'accès avec des adresses IP virtuelles. Un des problèmes avec NFS est qu'il diffuse essentiellement à tout le monde. Si vous limitez les diffusions à un sous-ensemble d'adresses IP, cela vous donne la possibilité de découper ces différentes architectures en systèmes distincts.

## Application des Ponts de Stockage Universels Éras

Ce n'est pas seulement une solution destinée aux clusters HPC; elle n'est pas coûteuse. De nombreuses entreprises utilisent d'abord VAST pour la sauvegarde afin d'établir la confiance. Par exemple, l'Institut national du cancer dispose d'une bibliothèque d'archives sur bande, et ils souhaitaient pouvoir accéder plus rapidement aux informations. Ils ont examiné différentes plateformes, et VAST est apparu avec un prix plus bas, et entièrement Flash, ce qui est plus rapide que leur système de stockage NAS de production. Ainsi, la solution offre un bon rapport qualité-prix et elle est utile pour le partage général de fichiers et une variété de charges de travail, telles que l'IA, l'analyse des journaux, Splunk, etc., pas seulement pour les clusters HPC. Les solutions VAST sont faciles à gérer et vraiment universelles.

VAST est une jeune entreprise, mais elle possède plusieurs installations au sein d'agences gouvernementales telles que le National Institute of Health et les Tri-labs du Département de l'Énergie, où des performances maximales sont nécessaires pour ces superordinateurs. Il s'agit d'un système puissant dans certains des plus grands environnements HPC du monde, qui prend en charge des applications critiques pour la mission.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
