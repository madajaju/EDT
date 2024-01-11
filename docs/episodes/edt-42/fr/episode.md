---
layout: posts
title: "Sécurisation du pipeline DevOps = SecDevOps"
number: 42
permalink: episode-EDT42-fr
lang: fr
nav_exclude: true
nav_order: 42
tags:
    - cybersecurity
    - devops
    - compute
    - process
    - technology
    - multicloud
    - devsecops

date: Sun Mar 14 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Dans cet épisode, Darren Pulsipher, architecte principal des solutions chez Intel, et Steve Orrin, CTO d'Intel Federal, discutent de la raison et de la manière dont le pipeline de DevOps doit être sécurisé. La seule façon de fournir un code solide, résilient et sécurisé est de l'intégrer dès le début, et plus tôt est mieux."
video: "https://youtu.be/url"
description: "Dans cet épisode, Darren Pulsipher, architecte principal des solutions chez Intel, et Steve Orrin, CTO d'Intel Federal, discutent de la raison et de la manière dont le pipeline de DevOps doit être sécurisé. La seule façon de fournir un code solide, résilient et sécurisé est de l'intégrer dès le début, et plus tôt est mieux."
---

<div>
{% include transistor.html id="2fd54175" title="#42 Securing the DevOps Pipeline = SecDevOps" %}

{% include youtube.html id="url" %}
</div>

---

Une étude datant de plus de 20 ans sur le rendement de l'investissement en matière de sécurité a démontré que plus la sécurité est intégrée tôt dans le cycle de développement, moins elle coûte que d'attendre la fin du cycle. Bien que nous le sachions depuis deux décennies, c'est encore un travail en cours.

La plupart des entreprises de développement intègrent la sécurité dans leur processus de développement global, donc il y a eu beaucoup de progrès, mais c'est un voyage, pas une course. Il s'agit de comprendre tous les différents points d'exposition et les faiblesses, et d'être en mesure de fournir les processus de sécurité adaptés à ces problèmes.

## Les vecteurs d'attaque

Bien souvent, les gens considèrent les attaques comme les vulnérabilités des employés ou des colis, par exemple, et oublient la partie du processus de l'histoire. Du côté opérationnel, il y a le temps nécessaire pour combler une vulnérabilité. De l'autre côté, il y a le développement et la livraison des produits. Il y a différents points d'arrêt le long de cette chaîne, et ceux-ci ont récemment été exploités dans les dernières étapes du processus de construction. En ce qui concerne les clients, le code qui a été mis à jour était légitime car il provenait directement de la source. Il est donc nécessaire de réfléchir attentivement à l'endroit où placer la sécurité dans le processus.

## Sécurité intégrée...

Agile, CI/CD, DevOps,...Where is Security?

Agile, CI/CD, DevOps,...Où se trouve la sécurité ?

Alors que nous avons tendance à considérer que la sécurité est nécessaire lors des transitions du développeur vers le QA, et du QA vers les opérations ou le déploiement, la sécurité devrait en réalité être intégrée dans l'ensemble du cycle de développement, et pas seulement à quelques points de contrôle. L'approche devrait être une sécurité continue.

## Sécurité intégrée...

Faites de la sécurité une partie intégrante de chaque phase.

La sécurité continue est un défi. La plupart des développeurs et des responsables de l'assurance qualité ne sont pas formés en sécurité ; c'est une bataille difficile. L'industrie a tenté cette approche au début des années 2000, mais s'est heurtée à trois problèmes. Premièrement, le taux de rotation est trop élevé. Deuxièmement, le paysage de la sécurité évolue trop rapidement pour les tenir à jour, et troisièmement, comme ce n'est pas leur travail quotidien, le bon comportement n'était pas incité.

Comment intégrons-nous alors la sécurité dans le processus, automatisons les principales tâches que nous voulons accomplir, et laissons les développeurs faire leur travail, qui consiste à concevoir, tester et déployer le code ? Le processus de sécurité peut vraiment briller en l'intégrant aux automatisations que vous utilisez déjà en DevOps, telles que les tests unitaires automatisés, les tests de qualité et de régression automatisés, la construction automatisée et le déploiement automatisé. Cela ne résoudra pas tous les problèmes, mais il élèvera considérablement le niveau afin que vous puissiez vous concentrer sur les défis complexes liés à la sécurité.

## Sécurité intégrée....

Signifie que la sécurité est intégrée, pas une simple étape ou étape.

Certains outils courants fournissent déjà une certaine sécurité automatisée qui met en évidence les vulnérabilités. Par exemple, GitHub effectuera des vérifications de sécurité sur les projets utilisant du code Node.js et tous les packages inclus. Cela peut être utile, mais c'est trop tard ; la sécurité devrait être intégrée dans le pipeline avant d'être vérifiée.

## La sécurité intégrée...?

## Comment y allons-nous?

Les violations de sécurité actuelles mettent en évidence que la sécurité doit être intégrée à chaque étape du processus, y compris entre la construction et la production, ainsi qu'avant l'exécution du script pour construire l'application. En plus d'injecter la sécurité dans le processus de construction, nous devons sécuriser le processus de construction lui-même ; cela a été une faille béante pendant longtemps.

De nombreuses entreprises qui effectuent des développements internes examinent désormais de plus près leur processus de construction en raison des récentes violations de sécurité. C'est une bonne chose, mais cela ne peut pas se limiter à de telles réactions impétueuses à chaque attaque. Nous devons penser de manière holistique et ne pas attendre le prochain maillon faible de la chaîne.

Certaines façons pratiques de sécuriser le processus consistent à considérer le serveur de construction comme un actif critique dans l'infrastructure globale et à appliquer les mêmes règles et contrôles à ce serveur que pour vos systèmes principaux. Des informations d'identification appropriées, un démarrage sécurisé du micrologiciel, la vérification du code, une vérification et un suivi du système, etc... tout au long de sa durée de vie est ensuite intégré dans le processus DevOps lorsque quelqu'un clique sur le bouton.

## Construit pour durer

## Des solutions aux services et au-delà

De nombreuses personnes ne considèrent pas le script lui-même comme une cible. Peu importe combien de bons modules sont inclus si le script lui-même n'est pas protégé. Quelques façons de protéger le script consistent à exécuter un checksum et celui-ci devrait être versionné, vérifié et signé. Cela ajoute de la complexité pour les équipes de développement et d'exploitation (DevOps), mais il existe des outils qui peuvent aider.

## Construisez une fois, déployez partout

Tout comme nous automatisons le processus de développement, nous pouvons intégrer l'automatisation pour la mise en œuvre de ces contrôles et vérifications. L'automatisation empêche qu'une autre personne ne perturbe potentiellement vos constructions, mais nous voulons également nous assurer qu'un être humain reçoive les résultats et vérifie les audits.

Les outils que vous utilisez déjà peuvent être étendus pour ajouter l'automatisation de la sécurité et des vérifications, comme celles nécessaires pour une intégration continue du développement dans le cycle Agile, ou pour les outils d'automatisation dans le monde Linux.

Les organisations peuvent également répartir leur personnel de sécurité au sein des équipes de développement commercial afin que, lorsque des problèmes surviennent, les personnes chargées de la sécurité soient déjà intégrées dans le processus. Deux endroits où il est important de s'assurer d'avoir des personnes chargées de la sécurité sont dans l'infrastructure pour soutenir, par exemple, votre processus Agile, et dans la gestion des produits pour obtenir les exigences de sécurité lors de la phase de définition des exigences du produit avant même qu'il ne parvienne aux développeurs.

Il y a toujours une pénurie de personnel de sécurité suffisamment formé et compétent, ainsi que de financement pour engager les bonnes personnes en raison d'une forte demande. Quelques options consistent à former les personnes que vous avez déjà et à leur fournir les outils nécessaires. Vous n'avez pas besoin d'un expert en cryptographie à chaque étape du processus. Une autre possibilité est d'avoir une équipe qui construit des modules dans vos langages et vos environnements pour toutes les fonctions de sécurité au lieu d'avoir chaque développeur responsable de coder l'authentification, les identifiants et les protocoles dans une bibliothèque d'infrastructures sécurisée. Le développeur peut simplement utiliser le module et il s'occupe de tout le travail difficile. De cette façon, vous ne construisez qu'une seule fois et déploiyez partout.

Nous constatons que des entreprises proposent des outils de sécurité SaaS, des services basés sur le cloud qui peuvent être utilisés pour votre application et votre environnement d'exécution. C'est une grande avancée dans le processus. Il existe des entreprises qui proposent des points d'injection de sécurité tels que la sécurité des applications dans un environnement rapide. Ces contrôles d'application tels que la désinfection des entrées et la validation des entrées peuvent être intégrés à votre environnement fonctionnel, mais cela dépend encore de la fin. N'oubliez pas que plus tôt vous commencez à sécuriser le processus, plus cela devient bon marché et moins douloureux.

Tout ceci nécessite bien sûr davantage de travail d'intégration. Les développeurs peuvent se méfier du travail impliqué, mais si un framework avec une sécurité intégrée existe (et il en existe des prototypes tels que Ruby on Rails et certaines infrastructures cloud), cela peut épargner de nombreuses heures. Cependant, il faut toujours veiller à ne pas se fier uniquement à la plateforme pour la sécurité, car elle pourrait être un point de défaillance unique.

## L'automatisation vous libérera.

Les violations de sécurité au cours des six derniers mois ont été profondes. Voici quelques points clés de conseils :

La sécurité doit être intégrée dans l'ensemble du cycle de vie, en commençant par les exigences. La sécurité doit faire partie intégrante du cycle DevOps lui-même, pas seulement de la programmation et des tests, mais aussi de l'infrastructure qui soutient ce processus.

Lors de la construction d'outils et d'objets de sécurité à l'aide de modules, construisez une fois, faites-le modulaire et déployez partout.

Utilisez des services qui vous permettent de compter sur l'expertise de quelqu'un d'autre pour renforcer votre propre équipe de cybersécurité, qui manque de financement.

L'automatisation vous libérera. Automatisez autant que possible pour rendre la sécurité plus facile et plus rapide, et réduisez les frictions pour vos développeurs et testeurs. Grâce à l'automatisation, vous pouvez éliminer 80 % de ce que nous appelons les tâches bêtes, afin de consacrer vos ressources limitées aux problèmes complexes.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
