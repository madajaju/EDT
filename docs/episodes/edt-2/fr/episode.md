---
layout: posts
title: "Suivez le Bit"
number: 2
permalink: episode-EDT2-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 2
tags:
    - iot
    - dod
    - edge
    - technology
    - data
    - cybersecurity

date: Wed Jun 17 2020 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, Darren interviewe Greg Clifton, directeur du Département de la Défense (DOD) et du Renseignement pour Intel Corp. Ils discutent des défis de la gestion des données dans un système complexe qui s'étend sur plusieurs clouds, centres de données d'entreprise, centres de données régionaux et tactiques. Écoutez Darren et Greg suivre un peu de données depuis leur collecte et leur parcours à travers cet écosystème jusqu'à la production d'informations exploitables pour les analystes et les combattants. Écoutez Darren et Greg discuter de certains des obstacles de cet environnement circulaire et des solutions pour aider à fournir des informations exploitables aux analystes et les transmettre aux combattants."
video: "https://youtu.be/N6WTErcBjrM"
description: "Dans cet épisode, Darren interviewe Greg Clifton, directeur du Département de la Défense (DOD) et du Renseignement pour Intel Corp. Ils discutent des défis de la gestion des données dans un système complexe qui s'étend sur plusieurs clouds, centres de données d'entreprise, centres de données régionaux et tactiques. Écoutez Darren et Greg suivre un peu de données depuis leur collecte et leur parcours à travers cet écosystème jusqu'à la production d'informations exploitables pour les analystes et les combattants. Écoutez Darren et Greg discuter de certains des obstacles de cet environnement circulaire et des solutions pour aider à fournir des informations exploitables aux analystes et les transmettre aux combattants."
---

<div>
{% include transistor.html id="caf42ad5" title="#2 Follow the Bit" %}

{% include youtube.html id="N6WTErcBjrM" %}
</div>

---

## Internet des Objets est le commencement

La mise en œuvre généralisée de l'Internet des objets (IoT) prend plus de temps que prévu par l'industrie. Beaucoup mettent les retards sur le compte de l'adoption et du déploiement de la 5G dans le monde, mais il existe un autre problème qui ralentit le déploiement de systèmes IoT robustes : la gestion de la complexité. Au fur et à mesure que les données se déplacent du bord, de l'agrégation bord, du réseau, du centre de données et du cloud, la sécurisation des données est une préoccupation majeure car la surface d'attaque augmente lorsqu'elle sort du centre de données traditionnel. Il existe des solutions ponctuelles qui aident à résoudre ces problèmes, mais il n'existe pas encore d'architecture de solution complète qui résolve tous les problèmes de ce centre de données sans murs.

## Complexité de l'environnement du DoD

L'IoT est déjà complexe, et le DOD augmente cette complexité en raison des types de producteurs et de consommateurs des données. Du côté des producteurs, des capteurs sont attachés aux satellites, aux avions, aux navires et aux véhicules ; même les combattants eux-mêmes constituent essentiellement des centres de données ambulants. La quantité de données produites par ces appareils périphériques peut submerger un réseau. Le nombre d'appareils hétérogènes peut rendre leur gestion presque impossible, surtout lorsque les appareils communiquent avec différents protocoles et ont différents niveaux de classification. En d'autres termes, collecter les données n'est pas le problème ; le problème réside dans le fait de les mettre rapidement entre les mains de ceux qui prennent les décisions, dans un format utile.

De plus, la connectivité peut poser problème avec les appareils périphériques. Les environnements hostiles où la connectivité réseau avec un centre de données est inexistante, voire peu fiable, peuvent entraîner des retards dans la transmission des données. Cela signifie qu'une solution dans ce domaine doit fonctionner en modes connecté et déconnecté. La vitesse de livraison est un facteur clé de réussite ; des vies peuvent être en jeu si les décisions basées sur les données sont retardées.

## Cadre commun pour les applications, les données et la sécurité

Évidemment, nous avons besoin de solutions à ces problèmes. D'une importance primordiale est un cadre commun pour gérer la complexité de ces nouvelles architectures informatiques qui se trouvent en dehors des murs traditionnels du centre de données. Le cadre doit aborder la gestion des applications, des données et de la sécurité. Nous devons être capables de déployer des applications portables et réutilisables n'importe où dans le système, de l'extrémité au cloud : la doctrine du "écrire une fois, exécuter n'importe où". Cela nous donne la possibilité de développer, tester et déployer rapidement des applications sans avoir à configurer toutes les permutations de configurations matérielles dans l'écosystème. L'utilisation d'outils de l'écosystème des conteneurs devrait aider à cela. Les outils basés sur Kubernetes (K8s) sont un bon choix car ils sont devenus la norme de facto dans la communauté DevOps.

Gérer les applications de manière isolée ne suffit pas. Toutes les applications ont besoin de données d'une certaine manière, il est donc essentiel de comprendre où se trouvent les données, où elles vont et comment elles sont classées pour trouver des solutions efficaces. Nous avons besoin d'un environnement d'exploitation commun pour gérer et superviser les différentes catégories de données telles que les domaines, les limites de sécurité, la gouvernance, la gestion du cycle de vie des données et leur localisation. Un environnement d'exploitation commun accroît la flexibilité et la rapidité de déploiement des applications.

Un cadre commun de sécurité est également nécessaire. La question cruciale est de savoir comment sécuriser vos données sous toutes leurs formes tout en les partageant. Il existe actuellement des solutions matérielles et logicielles, ainsi qu'une progression continue dans ce domaine. Des solutions de sécurité de base telles que le chiffrement devraient constituer des fondations solides. Bien sûr, cela nécessite le bon moteur de stockage et de capacité sous-jacente. Une autre préoccupation concerne l'entrée de données erronées ou malveillantes dans le système. Établir une racine de confiance en tant que fondation est également nécessaire dans cet vaste écosystème.

## Traitement à la périphérie, centre de données et cloud

Où intervient Intel dans cet environnement ? Nous pouvons aider à fournir l'infrastructure sous-jacente qui soutient ces systèmes en termes de performances et de consommation d'énergie. Que vous traitiez des informations de capteurs en périphérie dans un environnement à faible consommation d'énergie (pensez à Atom et aux conceptions de circuits intégrés spécifiques), ou que vous effectuiez la formation ou l'inférence de l'intelligence artificielle dans votre centre de données (Xeon et calcul neuromorphique), Intel dispose d'un processeur capable de convertir les données brutes en informations précieuses et exploitables, le composant clé de cet environnement complexe axé sur la mission.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
