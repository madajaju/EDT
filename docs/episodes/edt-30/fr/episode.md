---
layout: posts
title: "Portabilité de l'application avec OneAPI"
number: 30
permalink: episode-EDT30-fr
lang: fr
nav_exclude: true
nav_order: 30
tags:
    - oneapi
    - intel
    - edgecomputing
    - technology

date: Mon Nov 16 2020 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Avec oneAPI, Intel a créé un environnement logiciel unifié destiné au développement, axé sur le traitement des données. Gretchen Stewart, scientifique en chef des données du secteur public chez Intel, discute de cette technologie avec Darren Pulsipher, architecte principal des solutions chez Intel, qui élimine le besoin d'utiliser un langage différent pour différentes architectures."
video: "https://youtu.be/url"
description: "Avec oneAPI, Intel a créé un environnement logiciel unifié destiné au développement, axé sur le traitement des données. Gretchen Stewart, scientifique en chef des données du secteur public chez Intel, discute de cette technologie avec Darren Pulsipher, architecte principal des solutions chez Intel, qui élimine le besoin d'utiliser un langage différent pour différentes architectures."
---

<div>
{% include transistor.html id="3d30cd84" title="#30 Application Portability with OneAPI" %}

{% include youtube.html id="url" %}
</div>

---

Avec oneAPI, Intel a créé un environnement logiciel unifié pour le développement, axé sur le traitement des données. Il s'agit d'une programmation parallèle basée sur un code source C++ open source. De multiples types de bibliothèques, tels que les bibliothèques MKL, DNN d'Intel et d'autres sources ouvertes, font partie de la trousse d'outils oneAPI, ainsi que des accessoires tels qu'un traducteur CUDA. Vous pouvez développer des logiciels avec oneAPI, puis les orienter vers différentes bibliothèques en fonction de vos besoins. Il a éliminé la complexité d'apprendre une langue différente pour différentes architectures.

## Initiative de l'industrie oneAPI - Alternative à une solution unique de fournisseur

Fondamentalement, un ingénieur logiciel peut écrire du code une fois et il s'exécutera sur différents processeurs : CPU, GPU, FPGA, NPU et VPU. Selon l'architecture et les bibliothèques que vous utilisez, il pourrait être nécessaire de recompiler, mais aucune réécriture de code n'est requise.

## Bibliothèques d'API puissantes

Cette version n'est que la première étape ; Intel et d'autres continueront à concevoir en ajoutant des accélérateurs d'IA, par exemple. L'idée est de faire évoluer cela pour offrir aux développeurs beaucoup plus de flexibilité, et cette abstraction permettra à de nombreuses personnes de pouvoir concevoir et coder plus simplement, notamment dans le domaine de la science des données et de l'IA.

Pratiquement parlant, un ingénieur logiciel pourrait écrire quelque chose sur son ordinateur portable, l'essayer là-bas, puis utiliser ce même code et l'exécuter sur un cloud entièrement chargé de processeurs neuronaux, de GPU ou de FPGA. Cela pourrait être particulièrement utile dans le secteur public où les ingénieurs écrivent des applications spéciales qui fonctionnent en périphérie, peut-être avec un FPGA. Ils n'auront pas besoin d'avoir un environnement complet pour effectuer leur travail.

Un autre aspect excitant est que une fois qu'Intel intègre l'apprentissage automatique dans le système, oneAPI pourrait parcourir le code et spécifier quelles parties seraient mieux adaptées aux différents processeurs. Il enverrait le code aux bons endroits pour obtenir la meilleure vitesse et performance.

## Initiative de l'industrie oneAPI - Alternative à une solution d'un seul fournisseur

Il existe de nombreux cadres d'IA, mais oneAPI permet de migrer tout type de code d'une solution propriétaire vers un langage de programmation open-source. Il est basé sur SYCL et développé au sein d'un consortium industriel appelé Khronos group, c'est donc un type de cadre de développement.

## Des bibliothèques d'API puissantes

OneAPI dispose de vingt à trente bibliothèques telles que MKL, des bibliothèques pour les réseaux neuronaux et l'apprentissage automatique, open CNN ou DNN. Toutes sont ouvertes et font partie du consortium plus large.

De plus, Intel est en train d'intégrer le framework tensorflow et ses bibliothèques dans oneAPI. De nombreux frameworks ont déjà été optimisés par Intel et ils sont incorporés ou utilisent les mêmes bibliothèques, de sorte que les utilisateurs peuvent les utiliser ou les développer davantage.

## Ressources

Intel a rendu oneAPI généralement disponible au début de novembre 2020, et cela a été l'un des temps forts de la convention virtuelle Super Computing du 17 au 19 novembre.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
