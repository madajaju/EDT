---
layout: posts
title: "Faire progresser les opérations avec la 5G"
number: 109
permalink: episode-EDT109-fr
lang: fr
nav_exclude: true
nav_order: 109
tags:
    - 5g
    - comms
    - wifi6

date: Mon Oct 05 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Leeland Brown
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, architecte principal des solutions d'Intel; Leland Brown, ingénieur principal: Directeur technique des communications avancées; et le Dr Anna Scott, architecte principal de la périphérie pour le secteur public, discutent de l'histoire des communications avancées et des cas d'utilisation future avec la 5G. Partie deux de deux."
video: "https://youtu.be/url"
description: "Darren Pulsipher, architecte principal des solutions d'Intel; Leland Brown, ingénieur principal: Directeur technique des communications avancées; et le Dr Anna Scott, architecte principal de la périphérie pour le secteur public, discutent de l'histoire des communications avancées et des cas d'utilisation future avec la 5G. Partie deux de deux."
---

<div>
{% include transistor.html id="b613bc52" title="#109 Advancing Operations with 5G" %}

{% include youtube.html id="url" %}
</div>

---

La 5G ouvre de nombreuses possibilités. Vous pouvez désormais mettre en place des réseaux privés, qui sont définis par logiciel, afin de pouvoir ajouter davantage de fonctionnalités à votre réseau. Où cette technologie facilitatrice nous mène-t-elle ?

Anna dit que même s'il est encore tôt du point de vue de la bande passante et de la latence, il y a de réels avantages à la 5G, tels que l'ouverture du spectre comme le CBRS, la possibilité de tirer parti de l'équipement utilisateur existant et la possibilité pour les clients d'avoir un accès mobile.

Un cas d'utilisation qui n'est pas séduisant mais qui a de vastes répercussions est que vous pouvez emmener votre ordinateur portable sur le sol de l'usine et l'utiliser pour une connectivité complète. Au lieu d'aller sur le sol de l'usine avec un bloc-notes et un stylo et de transférer les informations au bureau, vous pouvez fusionner les deux environnements. Les normes 5G permettent cela, mais ce n'est pas nécessairement un déploiement complet de la 5G.

Une évolution qui est en train de se produire est la capacité de diffuser en continu des vidéos haute définition à partir d'une caméra sans fil via la technologie 5G et d'avoir une latence suffisamment faible pour pouvoir effectuer des analyses en temps réel. Actuellement, peu de caméras 5G peuvent fonctionner dans cet environnement, c'est pourquoi les caméras sont souvent câblées à proximité d'un calcul en périphérie couplé pour obtenir cet aspect en temps réel. Cependant, cette option de diffusion avantageuse sera bientôt disponible.

Un autre exemple d'avantage de la 5G est l'utilisation de 10 à 20 casques AR au lieu d'un ou deux avec le Wi-Fi. Le point clé est le MEC (Mobile Edge Compute) qui permet d'avoir les applications sur site plutôt que de devoir retourner au commutateur ou au cœur du fournisseur et avoir ce temps de RAN.

Comprendre comment les fréquences sont déployées est essentiel dans les cas d'utilisation, car certains opérateurs ont déployé la fréquence millimétrique malgré les défis ; les fréquences n41 et n42 réagissent différemment dans le monde réel. Ainsi, dans les déploiements sur site, le MEC et la conception RF sont extrêmement importants.

Un cas d'utilisation convaincant pour la 5G en dehors de l'usine est l'utilisation de drones lors des interventions d'urgence. Un prédécesseur précoce de la capacité future à déployer des drones et à évaluer une zone endommagée consiste à connecter les drones, à comprendre la mission pour effectuer une surveillance aérienne, puis à regrouper toutes ces données. Bien que nous ne soyons pas encore en mesure de diffuser en direct des vidéos provenant de plusieurs drones et de les assembler, nous sommes proches de collecter, de combiner et d'analyser ces données, mais pas encore en temps réel.

Un autre cas d'utilisation consiste à utiliser la 5G, l'intelligence artificielle, la modélisation, la simulation et le calcul en périphérie pour la formation dans de nombreuses industries, y compris le ministère de la Défense. Il y a un énorme avantage à créer une simulation d'entraînement réaliste sans mettre la personne en danger ou dépenser des sommes massives d'argent pour une formation en direct.

Autant que la 5G permette ce genre de cas d'utilisation, tout dépend de la connexion de la 5G à un centre de calcul à la périphérie (MEC) au lieu de la 5G qui se connecte directement au cloud. La physique entre en jeu. Vous avez besoin d'une latence extrêmement faible, donc vous ne pouvez pas avoir une architecture qui va d'un casque à réalité virtuelle au cloud, puis vers un MEC, et enfin vers la visualisation. Il doit aller du casque à réalité virtuelle au MEC, où le traitement en temps réel se produit. Ensuite, vous pouvez partager les données via le cloud pour une expérience en temps réel.

Il est également possible de relier ou de regrouper les MEC entre eux, de sorte que les données n'aient jamais besoin d'aller dans le cloud. Les MEC peuvent effectuer tous les traitements et les analyses directement sur le switch. Cela pourrait permettre des avancées telles que les bâtiments et les villes intelligentes. Ce genre de technologie permettant la 5G est un véritable tremplin pour des changements considérables dans l'industrie.

Leland souligne que l'histoire des nouveaux réseaux est l'informatique distribuée. Tout est connecté grâce à la connectivité sans fil, mais les points de calcul sont répartis à travers le paysage, où les applications se trouvent en périphérie et permettent les cas d'utilisation. Ce vers quoi nous nous dirigeons, c'est le calcul sans fil un-à-un.

Quel rôle joue Intel dans la 5G ? Cela va bien au-delà de simplement fournir des puces. Étant donné que la 5G est une conception logicielle, Intel a permis à l'écosystème de construire ou de concevoir en utilisant sa technologie L15. Lors de la transition de la 4G à la 5G, Intel a pris le bloc fonctionnel du réseau d'accès radio (RAN), appelé FlexRan, et a permis aux entreprises de concevoir leurs architectures de bande de base et de les virtualiser. L'écriture de l'architecture de référence FlexRan a grandement facilité la tâche aux nouveaux entrants en leur fournissant un point de départ solide.

Du côté matériel, Intel a consacré de nombreux cycles pour s'assurer que le matériel commercial disponible sur étagère fonctionnerait bien pour prendre en charge tous les bandes de base, les applications RAN et les serveurs. Les nouveaux systèmes qui sont utilisés en abandonnant les systèmes propriétaires doivent pouvoir être facilement pris en charge par le même type de serveur utilisé dans le cloud et le centre de données, car désormais vous bénéficiez d'une mise à l'échelle et d'un avantage économique.

Cela fera baisser les prix et stimulera davantage l'innovation dans l'industrie.

Découvrez la première partie de cette interview [ici](episode-EDT108).



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
