---
layout: posts
title: "Intelligence artificielle et sécurité"
number: 85
permalink: episode-EDT85-fr
lang: fr
nav_exclude: true
nav_order: 85
tags:
    - aiml
    - cybersecurity
    - devops
    - compute
    - technology
    - process

date: Wed May 04 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, Darren aborde les aspects de données de l'intelligence artificielle (IA) et l'importance de sécuriser ces données."
video: "https://youtu.be/url"
description: "Dans cet épisode, Darren aborde les aspects de données de l'intelligence artificielle (IA) et l'importance de sécuriser ces données."
---

<div>
{% include transistor.html id="ffe877ee" title="#85 Artificial Intelligence and Security" %}

{% include youtube.html id="url" %}
</div>

---

## Échecs de l'IA

Récemment, Darren a demandé à une classe d'étudiants du lycée et de l'université étudiant l'IA de trouver des échecs en matière d'IA. Ils ont trouvé des exemples tels que Microsoft Tay, un chatbot qui apprenait la conversation décontractée à partir de Twitter et qui, en moins de 24 heures, proférait des commentaires racistes et misogynes basés sur la manipulation de fils Twitter. Un autre exemple était un système de suivi de balle du club de football d'Inverness qui devait suivre un ballon de soccer mais qui a suivi la tête chauve d'un arbitre à la place. Plus grave encore, il y a eu une mort lorsqu'un véhicule autonome d'Uber n'a pas reconnu un piéton en dehors d'un passage pour piétons et n'a pas réussi à s'arrêter.

## Déploiement des solutions

Tous ces échecs d'IA étaient liés aux données. Lors du déploiement de solutions d'IA, vous devez vous poser des questions cruciales : Où est-ce que je fais mes inférences ? Est-ce que le point d'extrémité est sécurisé ? Si vous effectuez toutes vos inférences au point d'extrémité, par exemple la détection d'objets avec une caméra, vous devez vous assurer que c'est sécurisé ; personne ne devrait pouvoir manipuler les données, la caméra ou le modèle.

Une autre question est la suivante : qu'est-ce qui va être déployé ? Est-ce que je déploie un réseau neuronal ou un algorithme sur le terrain, ou est-ce que je me contente de transmettre des données de retour du terrain vers un centre de données pour y effectuer l'inférence ? De plus, lorsque l'IA est opérationnalisée, il faut se demander à quelle fréquence les modèles ou les algorithmes seront mis à jour.

## Pipeline d'IA

Le processus de développement, d'entraînement, de test, de déploiement et d'inférence de l'IA nécessite trois choses : l'application, le modèle et les données. Ces trois éléments doivent migrer ensemble à travers le pipeline et être protégés simultanément. Il est nécessaire de s'assurer que les données de production ne sont pas manipulées même lors de la production.

## Les menaces de sécurité de l'IA

Les menaces pour l'IA sont importantes, qu'il s'agisse d'espionnage, de sabotage ou de fraude, car la surface d'attaque est vaste.

## Les attaques

D'abord, viennent les modèles. Un modèle peut être manipulé, par exemple en plaçant des autocollants noirs et blancs sur les panneaux d'arrêt pour qu'ils ne soient pas reconnus en tant que tels, ou en perturbant la détection de correspondance de motifs pour que les attaques restent indétectées. Les modèles doivent être protégés non seulement pendant l'entraînement, mais aussi pendant les tests, le déploiement et l'inférence. Le chiffrement, le contrôle d'accès, ainsi que le contrôle des modèles et des versions sont essentiels, tout comme dans le développement d'une application.

Les données de formation et les données de production de la source doivent également être protégées contre toute manipulation.

## Les différents types d'attaques

Un document du Centre Belfer classe les menaces sur un axe de format et un axe de visibilité. L'axe de format va de physique à numérique. L'axe de visibilité va de perceptible à imperceptible.

## Attaques physiques

Les attaques physiques peuvent modifier des éléments physiques tels que l'autocollant sur le panneau d'arrêt. Ces attaques étaient évidentes dès les débuts de la conduite autonome et de la reconnaissance faciale. Nous devons améliorer la formation des algorithmes d'IA pour ces attaques en utilisant l'apprentissage renforcé et les techniques d'apprentissage de cas négatifs.

## Attaques numériques

Les attaques numériques sont plus difficiles à détecter car elles ne sont pas visibles. Une attaque peut être du bruit blanc injecté dans le flux de données pour perturber l'algorithme. Ces attaques sont difficiles à combattre à moins que l'inférence ne soit effectuée en périphérie ou que la détection de schémas ne soit déployée. Pour cette raison, il est essentiel de savoir d'où proviennent les données sources, aussi bien lors de l'entraînement, des tests que de la production.

## Identifier les sources de données

Les sources de données doivent être vérifiées et testées à partir de sources de données publiques. Les données open-source ne sont pas bien protégées. Envisagez de créer vos propres sources de données afin d'avoir un plus grand contrôle. Si vous utilisez une source de données partagée, utilisez un système de contrôle de version tel que GitHub ou GitLab pour vérifier la cohérence. Les données de test nécessitent également un contrôle de version, un contrôle d'accès et d'autres mesures de sécurité, tout comme vous le faites généralement dans un pipeline DevOps.

La dernière partie, la plus difficile, consiste à protéger les données de production. Rapprocher l'inférence des données est un bon début. Beaucoup de spéculation peut être faite dès le bord avec le traitement neuromorphique et même les jeux d'instructions dans les processeurs Intel pour réduire le risque de manipulation des données pendant le transport. Au lieu de cela, vous pouvez chiffrer les données et les renvoyer au centre de données.

Protéger et gérer les données / Sécuriser le pipeline de l'IA.

Une fois que vous avez identifié toutes vos sources de données, il existe trois aspects essentiels pour la protection : le contrôle, la sécurité et le chiffrement.

Le premier est le contrôle. Vous devriez avoir un contrôle de version, des bibliothèques protégées, ainsi qu'une sauvegarde et une restauration en cas de fichiers de données corrompus. Ce sont des pratiques de sécurité standard que l'IA devrait appliquer, puisqu'elles sont utilisées dans le développement d'applications.

La sécurité devrait inclure une autorisation d'accès, même certains concepts de confiance zéro tels que donner accès aux personnes qui en ont besoin seulement pendant une courte durée. Assurez-vous que les modèles ne sont pas manipulés et veillez à ce qu'ils soient liés à des applications spécifiques.

Les données doivent être cryptées au repos, en transit et à l'utilisation. Dans le passé, cela était coûteux en termes d'utilisation du processeur et de temps, mais désormais une grande partie du cryptage est réalisée directement dans le silicone et est très rapide avec un minimum, voire aucune perte de performance.

## Appel à l'action

Les données sont la clé du succès et de la sécurité de l'IA, il est donc crucial de les protéger et d'utiliser les meilleures pratiques en matière de sécurité dès le départ. Opérationnalisez les pipelines pour éviter que les humains ne soient impliqués quotidiennement dans le déploiement et les tests des algorithmes d'IA. Automatisez autant que possible et intégrez la sécurité dans le pipeline DevOps de l'IA pour protéger vos données sources, votre modèle et votre application.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
