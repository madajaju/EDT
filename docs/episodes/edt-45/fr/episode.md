---
layout: posts
title: "Tous les cœurs ne sont pas égaux."
number: 45
permalink: episode-EDT45-fr
lang: fr
nav_exclude: true
nav_order: 45
tags:
    - datamanagement
    - multicloud
    - cybersecurity
    - people
    - process
    - technology

date: Tue Mar 30 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steven Holt

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, Darren Pulsipher, architecte en chef des solutions chez Intel, et Stephen Holt, architecte des solutions cloud chez Intel, discutent de l'optimisation du cloud et des études qui montrent que les cœurs ont des performances différentes selon les charges de travail."
video: "https://youtu.be/url"
description: "Dans cet épisode, Darren Pulsipher, architecte en chef des solutions chez Intel, et Stephen Holt, architecte des solutions cloud chez Intel, discutent de l'optimisation du cloud et des études qui montrent que les cœurs ont des performances différentes selon les charges de travail."
---

<div>
{% include transistor.html id="cd1f0343" title="#45 Not All Cores are Equal" %}

{% include youtube.html id="url" %}
</div>

---

Intel a engagé des architectes de solution cloud pour aider les clients à migrer intelligemment vers les instances cloud appropriées pour leurs charges de travail. Stephen vient récemment de rejoindre Intel et possède une longue expérience générale dans les bases de données, les sept ou huit dernières années étant principalement axées sur le cloud, en tirant parti de ses ressources pour les clients.

Certaines des difficultés les plus importantes auxquelles Stephen a été confronté en aidant les clients à migrer vers le cloud sont la tarification et les attentes liées à cette migration. Les fournisseurs de services cloud prétendent souvent que les clients économiseront de l'argent en passant au cloud, mais ce n'est souvent pas le cas.

Une raison est qu'il y a un changement constant dans le marché des fournisseurs de services cloud compétitifs en termes de fonctionnalités, de performances et de capacités. Une autre raison est l'ignorance, par exemple, le fait de croire qu'un VCP de base est identique pour tous les fournisseurs. Migrer avec une mentalité de "lift and shift" peut également être très coûteux. L'optimisation est essentielle pour une migration cloud intelligente.

Pour réduire les coûts et potentiellement économiser une grande quantité d'argent, vous devez choisir les instances adaptées aux performances requises. Tous les cœurs ou processeurs virtuels ne sont pas égaux. Au sein d'AWS, il existe les instances M4, basées sur l'architecture Broadwell d'Intel, et les instances M5, qui sont un mélange des architectures Cascade Lake et Skylake. Différentes charges de travail peuvent exploiter ces plates-formes de manière très différente.

## Performance CoreMark

CoreMark est une application à un seul thread qui teste les déplacements de registres et les additions simples pour n'importe quel nombre de processeurs. Sur trois générations de processeurs Intel, Broadwell, Skylake et Cascade Lake, ce test montre très peu de différence entre eux. Cette information a été utilisée de manière erronée pour orienter les décisions des clients, car le test n'est pas une méthode efficace pour mesurer les différences entre les processus eux-mêmes. Il peut y avoir d'énormes différences de performances avec différentes charges de travail.

## Base de données WL Performance

Stephen a effectué des tests numériques sur des charges de travail réelles, axées sur les bases de données open source. L'environnement Cascade Lake était trois fois meilleur que l'environnement Broadwell pour les applications open source, ce qui est logique compte tenu des avancées en termes de vitesse et des avancées intégrées qui exploitent l'accès à faible latence. Ainsi, le fait de passer à deux générations supérieures donne une performance deux à trois fois meilleure sur ces charges de travail.

La charge de travail et le noyau doivent être considérés ensemble. Par exemple, un client pourrait être tenté de passer à une VCPU que Amazon annonce comme étant 10% moins chère. AWS pourrait cependant regrouper des cœurs sur ces processeurs et vous vous retrouveriez maintenant dans un environnement où vous êtes l'une des 48 machines virtuelles sur une machine, passant à un environnement où il y a 128 machines virtuelles ; votre accès à la mémoire est limité et vous pourriez bénéficier de 60% de performances en moins pour une économie de 10%.

Les organisations croient souvent que si elles externalisent vers le cloud, elles n'ont plus besoin d'un architecte système. Il est vrai que les architectes ne s'occupent plus de l'installation physique des machines, mais ils le font désormais de manière virtuelle et doivent comprendre ce que différentes instances offrent pour différentes charges de travail.

Intel travaille sur un outil permettant de montrer quelles charges de travail s'exécutent le mieux sur quelles instances. En attendant, Intel dispose de directives générales et d'architectes de solutions cloud pour aider à guider les clients.

De plus, il est important de faire beaucoup de tests pour comprendre où placer les charges de travail, mais il est également important de tester et de comparer les performances pour valider que vous obtenez ce que vous attendez d'un fournisseur.

## Base de données WL Performance - Non NVMe

Intel a réalisé des tests sur des charges de travail lors d'installations fraîches sur une instance à 64 cœurs fixes et 64 VCPU. Après avoir obtenu le nombre initial, une autre instance a été instanciée et le même test a été exécuté à nouveau. Les résultats variaient considérablement à chaque fois pour le même test. Cela pourrait être dû au fait qu'il peut y avoir un mélange de processus proposés à un certain niveau de service, ou il peut y avoir une certaine distance et des latences supplémentaires pour les attaches de stockage en bloc, par exemple, ou même des voisins bruyants. Il est donc utile de tester pour s'assurer que le système répond aux attentes.

En résumé, pour tirer le meilleur parti du cloud, vous devez vous former, tester les systèmes et profiter de l'aide disponible.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
