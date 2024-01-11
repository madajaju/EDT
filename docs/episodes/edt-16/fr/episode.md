---
layout: posts
title: "Réduire la congestion d'ingestion avec Intel Optane DCPMM"
number: 16
permalink: episode-EDT16-fr
has_children: false
lang: fr
nav_exclude: true
parent: Épisodes
grand_parent: Français
nav_order: 16
tags:

date: Mon Aug 24 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, Darren parle de la diminution de la congestion d'ingestion en utilisant la mémoire persistante Optane DC d'Intel et de l'expérience qu'il a menée avec des résultats surprenants. Cela pourrait bien changer notre manière de penser à la programmation à l'avenir."
video: "https://youtu.be/url"
description: "Dans cet épisode, Darren parle de la diminution de la congestion d'ingestion en utilisant la mémoire persistante Optane DC d'Intel et de l'expérience qu'il a menée avec des résultats surprenants. Cela pourrait bien changer notre manière de penser à la programmation à l'avenir."
---

<div>
{% include transistor.html id="7ca179aa" title="#16 Decreasing Ingestion Congestion with Intel Optane DCPMM" %}

{% include youtube.html id="url" %}
</div>

---

## Détails de la pile de services

Un client de l'industrie automobile avait du mal à obtenir efficacement des informations de leurs voitures et de les transférer vers leur centre de données afin de pouvoir effectuer de l'apprentissage automatique et des analyses. Des recherches ont été menées dans ce domaine, mais seulement pour un petit nombre de voitures, pas les centaines de millions de voitures du client. Lorsque j'ai examiné l'ensemble de leur pile de services et la façon dont tout arrivait au centre de données, l'ingestion des données est devenue le problème clair: Comment puis-je ingérer autant de données, et comment le faire rapidement ?

## Présentation générale de l'architecture Kafka à haut niveau

Le client souhaitait utiliser Kafka pour leur ingestion. Kafka est un courtier qui peut bien se mettre à l'échelle, et la clé est qu'il peut gérer plusieurs producteurs, différents consommateurs et beaucoup de données. Utiliser plusieurs courtiers Kafka pour placer et transférer les données dans les endroits les plus appropriés offre une grande flexibilité.

Kafka, cependant, a été principalement conçu pour des tailles de message d'environ un à 10 kilo-octets et les données du client étaient d'environ 240 kilo-octets par voiture. Il existe des solutions de contournement, mais je voulais transférer l'intégralité du message de 240 kilo-octets dans le bus Kafka afin de pouvoir le déplacer selon mes besoins.

## Pratiques optimales de performance

J'ai examiné les meilleures pratiques de performance des autres personnes travaillant avec Kafka pour voir si je pouvais les adapter aux besoins de mon client. Augmenter la taille du tampon pour pouvoir stocker le message en entier est une solution d'ajustement fine, tout comme la gestion de la taille des lots pour des performances optimales. Une autre pratique courante consiste à disperser les journaux. La flexibilité de Kafka me permettrait de placer les données dans différents sujets. Je peux diviser ces sujets en plusieurs partitions et les répartir sur plusieurs disques. La question est donc de savoir sur combien de disques je répartis les journaux de Kafka. De plus, je souhaite les disques les plus rapides possibles.

Un exemple que j'ai examiné était LinkedIn. Leurs chiffres publiés il y a un an indiquent qu'ils peuvent traiter 13 millions de messages par seconde, soit 2,7 gigaoctets par seconde. Ils affirment avoir environ 1 100 courtiers Kafka et plus de 60 sur un cluster, ce qui représente une configuration plutôt importante.

## Espace automobile

Si je regarde les chiffres bruts du client (1,6 million de messages par seconde et 800 gigaoctets par seconde) et que je les compare à LinkedIn, qui n'est probablement pas optimisé pour 240 kilooctets, j'obtiens 44 000 courtiers. Si je l'optimisais, je pourrais probablement réduire ce nombre à 4 400 courtiers, ce qui reste 240 clusters. C'est un nombre énorme de machines, donc j'ai dû trouver un moyen de rendre les choses plus rapides. Avec une optimisation supplémentaire, je pourrais probablement le réduire à 400 à 500 courtiers, mais je voulais voir ce que je pouvais faire d'autre.

## Intel Optane DC Persistent Memory

Mémoire persistante Intel Optane DC

J'ai examiné notre Optane Persistent Memory. Il s'intègre au format DDR4, donc il se trouve directement sur le bus DDR4. Il peut atteindre des modules de 512 gigaoctets, donc dans un serveur à deux sockets, je peux disposer de six téraoctets de mémoire persistante. Je voulais trouver un moyen d'exploiter cette technologie extrêmement fiable avec des fonctionnalités avancées telles que le chiffrement matériel intégré pour m'aider à résoudre ce problème.

## Soutien à la variété des applications

Il existe deux modes de fonctionnement avec cette mémoire Optane: le mode d'application directe et le mode mémoire. Le mode mémoire est simple. Il utilise la mémoire persistante comme une RAM normale car c'est moins cher que la DDR4 normale. Ce n'est pas exactement la même chose que la DDR4, mais c'est assez proche pour que dans la plupart des applications, on ne puisse pas voir de différence. En mode d'application directe, vous pouvez réellement écrire depuis votre programme directement dans la mémoire persistante. De cette façon, je n'ai pas besoin de marshalliser et démarshaser les structures de données et de les diffuser en continu; je peux simplement les pousser dans la mémoire persistante. Je peux également monter le mode d'application directe en tant que système de fichiers, ce qui est beaucoup plus rapide que sur le bus d'E/S. Maintenant, que puis-je faire avec cette mémoire?

## Utilisation du noyau Linux

Il existe deux outils principaux disponibles en utilisant le noyau Linux : ndctl et ipmctl. Ndctl est un contrôleur de périphérique de mémoire non volatile, et puis il y a IPM, le contrôleur de la mémoire persistante Intel, qui me permet de manipuler et de contrôler cette mémoire persistante. Je peux le configurer en mode mémoire ou en mode d'application directe. J'ai dû apprendre un peu sur ces outils et comment ils fonctionnent.

## Approche d'ingestion

Ma première pensée a été que si je donnais à Kafka beaucoup plus de mémoire avec de grandes tailles de tampon, il devrait fonctionner beaucoup plus rapidement. Les modifications de code dans la configuration seraient inutiles ou minimes. Une autre option était de changer Kafka pour écrire dans une mémoire persistante plutôt que d'écrire dans un système de fichiers, en contournant le disque dur. La dernière chose que j'ai examinée était la création d'un système de fichiers persistant utilisant une mémoire persistante, puis de placer les journaux de Kafka sur ce nouveau système de fichiers.

La plus facile des trois options était la première - plus de mémoire. J'ai exécuté toutes mes tâches avec plus de mémoire et il n'y a eu aucun changement de performance. La raison en est qu'à un moment donné, mes tampons se sont remplis et j'ai dû les transférer vers un disque. Au final, tout devait passer par les journaux Kafka, ce qui constituait mon goulot d'étranglement.

La deuxième option implique la réécriture du code et l'attente des approbations, alors j'ai sauté à la troisième option. Les résultats de cette expérience, où j'ai dirigé les journaux vers ce nouveau système de fichiers ultra-rapide, étaient fascinants. Jetons un coup d'œil au processus et aux résultats.

## Contraintes de test

Pour éliminer les obstacles à la performance des tests, j'ai exclu le réseau de l'équation en exécutant mon test sur la même machine que celle sur laquelle était mon courtier. De plus, j'ai d'abord exécuté uniquement les producteurs, puis uniquement les consommateurs, puis un mélange des deux, afin de pouvoir évaluer les différences. Mon objectif n'était pas de regarder l'amélioration totale de la production, mais de voir si ce disque aurait vraiment un impact sur un courtier individuel.

## Première approche 50/50

La première chose que j'ai faite a été de prendre la moitié de ma mémoire persistante et de la mettre en mode app direct, puis de la convertir en système de fichiers. J'ai laissé l'autre moitié en tant que mémoire. J'ai utilisé les commandes ndctl et ipmctl et créé des espaces de noms. J'ai monté ces systèmes de fichiers et exécuté mon test.

## Modifier la taille du message

J'ai exécuté les tests sur plusieurs tailles de messages différentes. Je m'attendais à certaines optimisations, principalement pour 1 kilo-octet. J'ai constaté que j'obtenais des performances de plus en plus élevées jusqu'à environ 10 producteurs. Au-delà de 10 producteurs, j'ai commencé à saturer le bus et à observer une certaine variabilité. Cela me dit que j'avais mis en cache des éléments. Je peux maintenant comparer ces chiffres à ce que j'ai exécuté auparavant uniquement sur un lecteur SATA pour les journaux Kafka. J'ai également essayé nos lecteurs Optane NVMe pour les journaux.

## Comparaison des technologies

Jetons un coup d'œil aux différences. Pour 240 kilo-octets, avec un disque SATA normal, c'est plutôt plat. J'ai obtenu une légère amélioration, puis ça a diminué à mesure que le nombre de producteurs augmentait. Avec le disque Optane NVMe, j'ai eu un pic impressionnant, presque deux fois plus rapide qu'un disque SATA, ce à quoi je m'attendais car c'est un bus NVMe au lieu d'un bus SATA. Le Pmem est presque cinq fois plus rapide qu'un disque SATA et deux fois et demie plus rapide que le disque Optane NVMe. C'est parce que j'utilise un bus de mémoire au lieu du bus SATA ou NVMe.

## Optimisation supplémentaire (100% directement dans l'application)

Cela fonctionnait rapidement et je remplissais rapidement ce disque temporaire de 750 Go. Comme j'avais besoin de prolonger un peu le test, je suis retourné et j'ai reconfiguré ma machine pour passer en mode d'application directe à 100 pour cent, afin de pouvoir prendre maintenant l'intégralité des 1,5 téraoctets.

## PMEM optimisé et 100% App Direct

Après avoir fait cela et exécuté les mêmes tests, j'ai obtenu un résultat surprenant. J'ai pu ajouter plus de producteurs et mon débit a augmenté d'environ deux ou trois fois de plus. Maintenant, il est entre 12 et 15 fois plus rapide qu'un disque SATA avec 25 à 30 producteurs et une taille de message de 240 kilooctets. C'est incroyable et cela réduirait considérablement le besoin de nos clients en termes de courtiers, de rangées et de machines. J'ai fait le test plusieurs fois car je ne croyais pas les résultats que j'obtenais. J'ai appelé l'un de nos architectes qui a conçu cette technologie et j'ai appris qu'une des raisons de l'augmentation de la vitesse était que lorsque j'utilisais une partie de la mémoire persistante comme mémoire, les données devaient passer par deux ou trois sauts qui ne sont pas nécessaires en mode app direct. Cela crée moins de contention sur le bus de la mémoire et le débit a augmenté de manière spectaculaire.

## Appel à l'action

Le résultat final est que j'ai pu utiliser Kafka avec la mémoire persistante Optane DC comme un système de fichiers ultra-rapide pour obtenir d'importantes améliorations de débit à la fois pour les producteurs et les consommateurs. Un courtier unique peut gérer 15 fois plus de messages et de débit qu'auparavant, réduisant ainsi le nombre de serveurs nécessaires pour gérer des architectures système larges et complexes. Il est temps d'évaluer votre architecture actuelle et de voir si cela serait bénéfique pour votre organisation.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
