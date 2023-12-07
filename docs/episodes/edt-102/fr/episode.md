---
layout: posts
title: "Micro-segmentation basée sur l'identité avec Elisity"
number: 102
permalink: episode-EDT102-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 102
tags:
    - microsegmentation
    - otsecurity
    - identitybasednetworking
    - cybersecurity
    - comms
    - technology
    - edge
    - sdn

date: Wed Aug 24 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Dana Yanch
    - Dan Demers

img: thumbnail.png
image: thumbnail.png
summary: "Dans la partie 2 de Sécurité avec Elisity, Darren discute des solutions de micro-segmentation basées sur l'identité avec Dana Yanch, Directrice du marketing technique, et Dan Demers, Architecte technique."
video: "https://youtu.be/url"
description: "Dans la partie 2 de Sécurité avec Elisity, Darren discute des solutions de micro-segmentation basées sur l'identité avec Dana Yanch, Directrice du marketing technique, et Dan Demers, Architecte technique."
---

<div>
{% include transistor.html id="f7d12ab8" title="#102 Identity-based Micro-segmentation with Elisity" %}

{% include youtube.html id="url" %}
</div>

---

Dans la deuxième partie de la sécurité avec Elisity, Darren discute des solutions de micro-segmentation basées sur l'identité avec Dana Yanch, Directrice du Marketing Technique, et Dan Demers, Architecte Technique.

L'approche d'Elisity en matière de sécurité des réseaux diffère des architectures traditionnelles par la manière dont elle est livrée, répartie sur le réseau et réalisée de manière efficace, offrant une valeur temporelle rapide. Ils se sont concentrés sur sa simplicité, son caractère intuitif et son efficacité maximale afin que tout secteur d'activité puisse tirer parti de cette technologie.

La clé de la technologie d'Elisity est la micro-segmentation, ce qui signifie la capacité d'isoler complètement tout utilisateur, appareil ou application, peu importe le type de réseau sur lequel il se trouve, où il est placé dans le réseau, ou s'il est géré ou non géré. En d'autres termes, il est flexible pour isoler un actif d'un autre sans restrictions imposées par l'architecture du réseau ou des concepts tels que les VLAN ou les VRF.

Les systèmes traditionnels de micro-segmentation qui nécessitent un remplacement matériel ou l'instanciation d'un appareil sur site peuvent prendre des mois voire des années pour être mis en place et fonctionner. Cependant, Elisity offre une fonctionnalité complète en moins d'une semaine en passant à une plateforme de micro-segmentation native du cloud et livrée via le cloud. Les plans de contrôle, de gestion et de politique complets sont entièrement livrés via le cloud, et le composant lié à votre réseau sur site est à 100 % logiciel. Vous n'avez pas besoin de modifier quoi que ce soit sur site, car il s'appuie sur votre infrastructure existante. Il s'échelonne bien, est facile à gérer et est distribué de manière dynamique.

Elisity propose également une solution sur site pour l'espace OT, où les organisations peuvent le garder derrière leur DMZ et couper tout accès.

La plateforme d'Elisity est un microservice dans le sens de la scalabilité horizontale. Vous pouvez commencer petit et ajouter 10 000 éléments au réseau et le faire évoluer avec vous, que ce soit sur site ou dans le cloud. Tout est entièrement automatisé sur l'ensemble du réseau. Il y a peu de friction et il est facile à gérer sur le long terme.

Une différence significative entre la plateforme d'Elisity et d'autres réseaux superposés est qu'Elisity traite le plan de contrôle et de politique plutôt que le plan de données. Elle peut appliquer le même niveau de granularité de sécurité réseau sans toucher aucun paquet. Elle indique dynamiquement au réseau qui peut communiquer avec qui en fonction des attributs et des identités trouvés sur le réseau.

Un triangle d'utilisateurs, d'applications et d'appareils est un excellent moyen de visualiser cela. À l'intérieur de ce triangle se trouvent toutes les lignes de communication entre les différents éléments. Elisity peut sécuriser chaque ligne, ou canal, entre les utilisateurs, les applications et les appareils avec une granularité optimale. Cela se produit au niveau du contrôle réseau. Dès que le trafic atteint la première extrémité, il est sécurisé.

La sécurité est essentielle au niveau du réseau et non au niveau de l'application, car il peut y avoir des dizaines de milliers de dispositifs dans votre réseau sur lesquels vous ne pouvez pas installer un agent ou les modifier, car ils ont des systèmes d'exploitation intégrés, des caméras, des lecteurs de badges et des personnes. Cela est particulièrement important du côté de l'OT.

Avec l'OT, l'accent est mis sur la disponibilité et l'intégrité. Les choses doivent continuer à fonctionner de manière sûre car le processus peut représenter une infrastructure critique. Cela diffère de l'informatique où l'on peut mettre en quarantaine et lancer une nouvelle instance en cas d'intrusion. L'OT nécessite une mentalité différente. Là où quelque chose peut exister en informatique pendant six mois ou un an, quelque chose en OT peut exister pendant 20 ans. Souvent, ces infrastructures sont entretenues ou mises à jour tous les quelques années, ou restent inactives jusqu'à un événement de panne. La sécurité implique de limiter la connectivité. Par exemple, si vous êtes dans un VLAN, cela ne signifie pas que vous devriez pouvoir communiquer avec un RTU, un capteur, un IHM ou un DCS qui se trouvent à un commutateur de distance. Dans la conception héritée, si ces éléments se trouvent sur le même VLAN, il n'y a pas de moyen efficace et flexible de les empêcher de se connecter.

Avec le système d'Elisity, vous définissez des politiques en fonction des regroupements d'éléments ou des attributs assignés aux ressources, plutôt que de passer en revue chaque élément individuellement. Cela peut être aussi simple que regrouper tous vos processus de telle sorte qu'ils ne puissent communiquer que du nord au sud, et non d'est en ouest, ou, par exemple, permettre aux responsables hiérarchiques de partager avec six ou sept types d'éléments. Deux ou trois politiques peuvent rapidement réduire votre surface d'attaque de 65 000 ports d'attaque potentiels à deux ou trois.

Un cas d'utilisation courant dans les réseaux de technologie opérationnelle (OT) est lorsque un fournisseur effectue une mise à jour sur un appareil, vous devez les laisser entrer et ils ont accès à l'ensemble de votre réseau. Avec Elisity, vous pouvez facilement leur donner un accès limité dans le temps et leur permettre d'interagir avec les actifs fixes.

Suppose you would like to know more about Elisity’s technology. In that case, many resources, including videos, white papers, and documents, explain how the solution works and how it could be applied within a week in your network at Elisity.com.

Supposons que vous souhaitez en savoir plus sur la technologie d'Elisity. Dans ce cas, de nombreuses ressources, notamment des vidéos, des livres blancs et des documents, expliquent comment la solution fonctionne et comment elle pourrait être appliquée dans votre réseau en une semaine sur Elisity.com.

Découvrez l'épisode précédent de cette série [ici](episode-EDT101).



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
