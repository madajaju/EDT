---
layout: posts
title: "Données résilientes dans les communications perturbatrices"
number: 136
permalink: episode-EDT136-fr
has_children: false
lang: fr
nav_exclude: true
parent: Épisodes
grand_parent: Français
nav_order: 136
tags:
    - sabr
    - ddil
    - technology
    - edge
    - process
    - devops
    - security

date: Mon May 01 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode de podcast, Darren Pulsipher, architecte en chef de solutions d'Intel pour le secteur public, est interviewé par la présentatrice invitée, le Dr Anna Scott, sur les données résilientes avec les communications perturbatrices."
video: "https://youtu.be/url"
description: "Dans cet épisode de podcast, Darren Pulsipher, architecte en chef de solutions d'Intel pour le secteur public, est interviewé par la présentatrice invitée, le Dr Anna Scott, sur les données résilientes avec les communications perturbatrices."
---

<div>
{% include transistor.html id="a2a806f7" title="#136 Resilient Data in Disruptive Comms" %}

{% include youtube.html id="url" %}
</div>

---

Dans cet épisode de podcast, Darren Pulsipher, architecte principal des solutions chez Intel pour le secteur public, est interviewé par l'invitée Dr Anna Scott sur les données résilientes et les communications perturbatrices. La discussion porte sur la gestion sécurisée et efficace des données dans des environnements présentant une bande passante limitée et un service perturbé, permettant ainsi l'intelligence artificielle et l'analyse complexe des données en périphérie. Darren parle de son expérience de travail sur le cloud des voitures connectées de Toyota comme base pour résoudre ce problème, et comment des architectures de gestion de données courantes ont été utilisées pour créer une solution. La révélation graduelle des défis du client a permis d'identifier des schémas de conception qui ont ouvert la voie à une solution réussie.

Malgré une connectivité intermittente et des nœuds de bord dynamiques, le processus de conception de l'architecture pour effectuer l'analyse de bord est complexe et difficile à articuler, ils ont donc adopté une approche itérative. D'abord, ils ont envisagé une solution qui regrouperait toutes les données en un seul endroit pour l'analyse, mais ont constaté que cela était impraticable en raison du volume important de données sur le bord. Le déplacement des applications vers le bord semblait prometteur jusqu'à ce que le client demande une analyse agrégée sur l'ensemble du réseau. Après avoir exploré les modèles de conception, ils ont opté pour l'utilisation du modèle de conception du flux de données avec un hub de publication et d'abonnement pour créer des flux de données dynamiques pour les consommateurs et les producteurs. Bien que cette approche utilise des bases établies dans les technologies de l'information, le client avait initialement des préoccupations concernant l'allocation des sujets.

Dans le passé, Darren devait créer un écosystème PubSubHub à l'avance et être familiarisé avec tous ses composants. Cependant, la mise en place de flux de données avec Kafka ou Apache Pulse était difficile, et la configuration de la sécurité était encore plus difficile. En utilisant leurs connaissances en DevSecOps pour concevoir une solution qui regroupe les définitions des flux de données, les définitions d'entrée et de sortie, ainsi que les transformations de données dans un package consommable par le pipeline. Ce package crée automatiquement des flux de données dans PubSubHub et met en place toutes les mesures de sécurité nécessaires. Le résultat a simplifié la complexité, car les développeurs n'avaient besoin de se concentrer que sur les algorithmes ou les modèles d'IA, tandis que tout le reste était pris en charge de manière générique. L'approche itérative avec les clients a permis de modifier les architectures et les implémentations en cours de route.

Le défi principal avec ce type d'architecture est de travailler avec des ressources limitées, telles que seulement deux cœurs et 2 gigaoctets de RAM. Quelle quantité de traitement des données peut être effectuée à la lisière avec des ressources limitées ? Une des contraintes sur lequel l'équipe d'architecture a dû travailler était de rendre le gestionnaire de flux SABR et les mesures de sécurité aussi petits que possible. Darren a simplifié le code au strict minimum et a éliminé les packages tiers inutiles. L'objectif était de créer un gestionnaire de flux léger qui puisse fonctionner à la lisière et être portable dans différents environnements. L'architecture Saber résultante était évolutive et adaptable, capable de fonctionner aussi bien sur une montre connectée que sur un grand serveur Xeon.

Darren et Anna discutent des difficultés de la mise à jour des modèles d'IA dans un écosystème distribué avec de nombreuses instances des mêmes analyses en cours d'exécution. Pour résoudre ce problème, SABR a créé un flux de données d'apprentissage qui connecte toutes les instances des mêmes analyses et gère les communications intermittentes, la mise en cache et l'envoi des modifications pour mettre à jour les modèles. Ils ont également développé un système de canal de données utilisant le modèle de conception de stratégie de politique, ce qui permet l'envoi de différents canaux avec des niveaux de données variables basés sur des règles définies par la politique. Cette approche permet une transmission de données plus efficace, réduisant la quantité de données traitées et augmentant la précision des modèles d'IA.

La prochaine étape consiste à opérer dans l'environnement de DDIL en priorisant l'envoi de données en commençant par envoyer des résumés et des données historiques avant les données en temps réel. Il est important de définir les attentes du système et les politiques de communication dès le départ pour garantir la cohérence dans l'écosystème. Un processus de création et d'activation de politiques facile à utiliser, configuré en JSON et basé sur JavaScript, qui élimine la duplication des efforts et favorise la réutilisation. L'architecture a la capacité d'ajouter rapidement de nouvelles fonctionnalités en exploitant les sabres et les transformations de données existants.

Le dernier avantage est la résilience du système en se rétablissant dynamiquement des pannes du système. Il y a un potentiel d'utilisation dynamique et flexible du réseau SABR. Même si un nœud tombe en panne, il est possible de déplacer un SABR vers un autre boîtier et de continuer à recevoir toutes les flux de données. Il est également possible d'utiliser l'informatique héritée en exécutant un SABR très léger sur un vieux système qui collecte et transmet des données vers le réseau SABR. L'importance de la sécurité ne doit pas être négligée. Toutes les flux de données sont cryptées et des processus sont mis en place pour établir la confiance et l'attestation des SABR afin de prévenir le spoofing et l'espionnage des données. Globalement, le réseau SABR offre une solution prometteuse pour le traitement des données en périphérie avec flexibilité et sécurité.

La clé de l'apprentissage réside dans l'approche architecturale itérative que l'équipe a utilisée pour découvrir les cas d'utilisation et les problèmes rencontrés par les utilisateurs finaux. En simulant l'architecture, ils ont pu identifier ses lacunes et obtenir des retours clients. De plus, l'utilisation de modèles de conception était essentielle pour accélérer l'approche architecturale. L'emploi de l'abstraction a également permis de remplacer différentes technologies tout au long du processus architectural. Darren est convaincu que cette approche facilite la création de solutions simples à utiliser et profitant des connaissances actuelles des clients.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
