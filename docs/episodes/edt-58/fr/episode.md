---
layout: posts
title: "Compréhension des problèmes de l'Edge jusqu'au centre de données."
number: 58
permalink: episode-EDT58-fr
lang: fr
nav_exclude: true
nav_order: 58
tags:
    - 5g
    - iot
    - edgecomputing
    - cybersecurity
    - datamanagement
    - cloudcomputing
    - multicloud
    - zerotrust
    - technology
    - process
    - policy

date: 2021-07-22T00:00:00.000Z
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, architecte en chef des solutions chez Intel, décrit les problèmes courants rencontrés dans les architectures allant des périphériques informatiques au centre de données, qu'il a observés et discutés avec des clients du secteur public. Il expose l'architecture idéale pour résoudre ces problèmes."
video: "https://youtu.be/url"
description: "Darren Pulsipher, architecte en chef des solutions chez Intel, décrit les problèmes courants rencontrés dans les architectures allant des périphériques informatiques au centre de données, qu'il a observés et discutés avec des clients du secteur public. Il expose l'architecture idéale pour résoudre ces problèmes."
---

<div>
{% include transistor.html id="51a240b0" title="#58 Understanding Edge to Data Center Problems" %}

{% include youtube.html id="url" %}
</div>

---

## Intégration de mission.

Il y a de nombreux éléments en mouvement lors de la mise en œuvre des capacités en mission, en particulier au sein du département de la Défense, mais également dans les hôpitaux des anciens combattants, la sécurité intérieure, l'Administration des denrées alimentaires et des médicaments (FDA) et l'Agence fédérale des situations d'urgence (FEMA), par exemple, et ramener les données des dispositifs périphériques sur les stations terrestres, ainsi que les centres de données régionaux et d'entreprise. Les données doivent être utilisables et fiables pour les flux d'analyse importants dans les flux de travail de l'IA et entre les mains des analystes pour prendre des décisions basées sur les données brutes.

## Pilotes pour Edge : Latence, Bande passante, Sécurité, Connectivité

Une partie du puzzle est que les appareils périphériques sont devenus plus sophistiqués et collectent plus de données que nous ne pourrions jamais leur envoyer via la technologie 5G. Les espoirs de voir la 5G conquérir toutes les données et les rendre disponibles de manière transparente au centre de données ne se sont jamais concrétisés avec les avancées des dispositifs IoT.

L'une des architectures originales autour de l'IoT était proposée par Cisco, appelée la brume. L'idée de la brume était que le centre de données connectait la brume aux appareils périphériques, de sorte que certaines opérations de traitement et de connectivité se déroulaient là-bas. Si la connectivité réseau est fiable et constante, cela fonctionne bien avec une bande passante suffisante. Cependant, la quantité de données générées actuellement en périphérie par ces organisations dépasse la quantité de bande passante disponible.

Avec l'IoT, seule une partie des données est déplacée vers le centre de données, de sorte que généralement, la valeur des données ne se produit que lorsqu'elles sont analysées là-bas. Le problème est que le centre de données ne peut pas stocker et absorber toutes les données massives. Même en les poussant dans le cloud, le problème n'est pas résolu car le cloud ne peut pas traiter toutes les données qui sont en attente au niveau de la source. Ainsi, nous voulons nous éloigner de l'envoi de toutes les données vers le centre de données pour collecter la valeur, et plutôt, rapprocher autant que possible la valeur des données de la source, réduisant ainsi la quantité de volume de données revenant au centre de données.

Bien sûr, toutes les données ne peuvent pas être descendues jusqu'au périphérique; il doit y avoir une corrélation entre différents appareils périphériques. La valeur doit se trouver dans un endroit plus centralisé, pas nécessairement dans le centre de données principal, mais peut-être dans l'un de ces brouillards intermédiaires ou centres de données régionaux. L'essentiel est de déplacer les données de manière intelligente et de pousser la valeur des données aussi près du périphérique que possible de manière répétable et durable. Ce faisant, nous pouvons réagir beaucoup plus rapidement au périphérique.

## Couche physique commune

Pour surmonter certains de ces problèmes, nous avons d'abord besoin d'une couche physique commune. Cela signifie que c'est commun depuis le centre de données à travers les couches de brouillard jusqu'aux appareils périphériques ; il y a une seule façon de gérer et de contrôler les appareils et d'obtenir de l'aide de leur part de manière fiable et commune. Cela ne signifie pas nécessairement la même machine, mais un appareil viable minimal avec une interface commune. Un autre avantage de la couche physique commune est que si vous écrivez du code pour une application, il peut s'exécuter n'importe où dans cet écosystème. Intel dispose d'une excellente technologie pour cela, comme oneAPI, qui fait une grande partie du travail afin que vous puissiez écrire du code une fois, compiler les binaires pour les différents types d'appareils, les pousser vers la couche physique commune et les exécuter de manière appropriée. En résumé, les avantages sont un modèle d'exploitation commun, un modèle de sécurité commun et un mode d'exploitation "écrire une fois, exécuter n'importe où".

## Infrastructure Définie par Logiciel

SDI s'applique au centre de données dans les clouds privés et publics avec leurs APIs définies par logiciel. Avec SDI à la périphérie, nous obtenons des moyens communs de déplacer des données. Nous pouvons provisionner des ressources à la périphérie dans le centre de données à tout moment, et nous pouvons déplacer des données de cette manière de manière plus fluide.

## Couche de gestion d'information distribuée

Nous devons être plus intelligents en matière de gestion et de classification des données, en déplaçant les données uniquement là où elles seront traitées, que ce soit en périphérie, dans un centre de données régional ou dans le cloud. Les aspects importants sont le catalogage et la réutilisation des données, ainsi que l'intégration des exigences de conformité et de sécurité. L'avantage de cette couche de gestion de l'information distribuée est que vous transférez moins de données vers le centre de données, déplacez moins de données et valorisez davantage la périphérie.

## Couche de gestion des services

Afin de véritablement étendre la valeur jusqu'au bord, nous devons être en mesure de déployer des applications jusqu'au bord. C'est là qu'intervient une couche de gestion de services, ou un écosystème de conteneurs. Cela permet de déployer des microservices de manière reproductible et fiable jusqu'au bord, dans le brouillard, dans le centre de données ou dans le cloud. Par exemple, si un centre de données régional tombe en panne, vous n'avez pas à compter uniquement sur celui-ci pour que la grille de services continue de fonctionner.

## Couche de service d'application

Un niveau de service d'application coordonne les différentes applications afin que vous puissiez créer des flux de travail qui génèrent une réelle valeur commerciale à partir des données. Se contenter de déplacer les données ou de les faire passer à travers un moteur d'analyse ne suffit pas. Les données doivent passer du moteur d'analyse à une station de travail pour analyste. Certains outils de cette couche pourraient être l'automatisation des processus robotiques et les pipelines DevOps. C'est également ici que vous pouvez imposer la sécurité et la conformité au niveau de l'application.

## Sécurité et couches d'identité

L'aspect clé de la couche d'identité est d'établir la confiance entre les entités qui sont correctement identifiées. Nous devons comprendre qui accède à quoi et quels appareils accèdent à quelles données, quand, et où. L'identité est étendue au-delà de l'utilisateur typique et englobe l'identité des applications, des données, des appareils périphériques, de la brume (fog), des centres de données et du cloud.

Le jumeau de l'identité est la sécurité. Ici, nous avons la détection, la remédiation, le chiffrement et l'établissement de la racine de confiance. Cela résulte en fiabilité, données fiables et conformité. Maintenant, les données intelligentes peuvent être envoyées vers la périphérie, puis remontées jusqu'au centre de données, mais vous ne déplacez pas de grandes quantités de données brutes, seulement ce dont vous avez besoin de manière sécurisée.

## Aperçu global

Pour avoir une architecture edge to cloud réussie et répétable, tous ces différents éléments sont nécessaires. Nous avons constaté que certaines organisations construisent une architecture edge to cloud spécifique, mais se retrouvent bloquées lorsqu'elles déploient une nouvelle fonctionnalité dans ce domaine. Par exemple, si elles codent en dur les données résidant dans le edge car elles seront toujours traitées dans le edge, ou dans le centre de données pour une application toujours traitée dans le centre de données, cela entraîne une rigidité. Cela augmente également le temps nécessaire pour déployer de nouvelles fonctionnalités, peut-être des années au lieu de mois. Si nous tirons les enseignements des déploiements d'applications edge to cloud à maintes reprises et commençons à généraliser, nous constatons rapidement qu'ils s'inscrivent dans l'une des couches que nous avons identifiées.

Pour plus d'informations, consultez cet article (incluez le lien) sur la vue d'ensemble de cette architecture de l'edge au cloud. Nous ne prescrivons pas ce qui convient à ces boîtes, mais l'essentiel est de comprendre les cas d'utilisation qu'elles englobent. Nous avons des idées sur ce qui se trouve dans chaque couche et nous mettons en place des écosystèmes pour répondre aux besoins uniques de votre organisation dans ces couches.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
