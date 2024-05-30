---
layout: posts
title: "Chemin d'attaque cybernétique prédictif avec XM Cyber."
number: 99
permalink: episode-EDT99-fr
lang: fr
nav_exclude: true
nav_order: 99
tags:
    - cybersecurity
    - attackpaths
    - zerotrust
    - people
    - process
    - policy
    - technology

date: Mon Aug 08 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Paul Giorgi

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, architecte principal des solutions chez Intel, et Paul Giorgi, directeur de l'ingénierie des ventes chez XM Cyber, discutent de la façon dont la technologie de XM Cyber peut aider les organisations à découvrir les chemins d'attaque et à réduire les risques."
video: "https://youtu.be/url"
description: "Darren Pulsipher, architecte principal des solutions chez Intel, et Paul Giorgi, directeur de l'ingénierie des ventes chez XM Cyber, discutent de la façon dont la technologie de XM Cyber peut aider les organisations à découvrir les chemins d'attaque et à réduire les risques."
---

<div>
{% include transistor.html id="60eaf764" title="#99 Precog Cyber Attack PAth with XM Cyber" %}

{% include youtube.html id="url" %}
</div>

---

Paul est dans le domaine de la sécurité depuis la fin des années 90, commençant par travailler sur des projets pour le Département de la Sécurité Intérieure et le Département de la Défense. En 2005, il a rejoint Fishnet Security en tant qu'ingénieur commercial et il est depuis impliqué dans l'ingénierie commerciale. Il a rejoint XM Cyber pour se concentrer sur la simulation des violations et des attaques.

Plutôt que la cybersécurité traditionnelle, qui implique la détection, la remédiation et la prévention, XM Cyber est prédictive. Une bonne description serait qu'il s'agit d'une simulation précognitive. XM Cyber crée des incidents imaginaires afin de vous fournir un aperçu de la façon dont vos outils pourraient les gérer et comment vous pourriez travailler pour remédier à des points d'obstruction spécifiques. L'idée est de faire tout cela avant les tests d'intrusion. Vous pouvez corriger les problèmes aujourd'hui, en voir l'impact demain, puis augmenter et améliorer continuellement votre sécurité.

Google Maps est une bonne analogie pour expliquer comment fonctionne XM Cyber. Lorsque vous souhaitez vous rendre d'un endroit à un autre, Google Maps vous indique tous les itinéraires possibles pour y arriver, en évitant les péages, en choisissant le trajet le plus direct, etc... XM Cyber fait la même chose, mais avec une simulation d'attaque. Par exemple, supposez que vous disposiez d'un compte utilisateur actif compromis dans un annuaire. Dans ce cas, XM Cyber vous montrera les six étapes nécessaires pour atteindre un contrôleur de domaine local et compromettre cette ressource critique. Il vous montrera également toutes les routes possibles entre ces deux points.

Un cas d'utilisation pour cela est que vous pouvez permettre à une équipe rouge d'être super efficace avec ces informations car ils n'ont pas besoin de chercher et d'essayer de faire des découvertes. Cela peut également aider la section bleue, en leur permettant de prioriser les remédiations sur les points d'étranglement. Par exemple, s'il y a 400 chemins d'attaque allant tous vers différentes zones dans votre DMZ, mais que ces 400 chemins semblent tous devoir exploiter cette entité pour que le chemin se réalise, alors vous pouvez résoudre ce seul problème et détruire les 400 chemins. Les équipes bleues peuvent verrouiller ces points d'étranglement qui pourraient permettre à l'attaquant d'agir.

Un domaine que XM Cyber analyse est la gestion des identités, non seulement dans le centre de données, mais aussi dans le cloud. Parfois, les chemins d'attaque peuvent comporter dix étapes, mais neuf de ces étapes navigueront dans le monde des identités. Par exemple, vous pourriez avoir des permissions pour votre compte d'administrateur, et ensuite ce compte d'administrateur pourrait avoir des permissions supplémentaires. Effectuez six ou sept ajustements de différentes permissions ou réinitialisez des mots de passe et déploiez des GPOs. Vous pourriez parcourir neuf étapes depuis un compte utilisateur standard jusqu'à un administrateur de domaine en exploitant l'annuaire actif.

En plus de l'identité, XM Cyber examine plus d'une centaine d'entités telles que des machines, des compartiments S3 et des clés SSH. Ces différentes entités peuvent être combinées pour créer un chemin d'attaque. Parfois, cela devient très complexe. Par exemple, une attaque pourrait commencer sur site, passer par Azure, profiter d'Intune, puis revenir compromettre une autre machine permettant une transition vers GCP. Une fois que les attaquants sont dans l'environnement de GCP, ils peuvent profiter de la confiance ou des autorisations entre AWS et GCP pour compromettre AWS. XM Cyber examine tous les différents types d'entités dans des environnements disparates et les connecte pour évaluer ces chemins autour de la façon dont chaque entité joue de manière holistique avec le risque pour toutes les autres.

Il existe deux façons dont XM Cyber se engage avec les clients. La première consiste en une découverte de haut niveau pour évaluer l'environnement, mettre en évidence les vulnérabilités et mesurer comment un attaquant peut exposer de nouvelles vulnérabilités pour mettre en danger les actifs critiques. La deuxième consiste en une évaluation ciblée d'un scénario spécifique qui préoccupe le client. Ces engagements ne se limitent pas à une simple analyse statique des entités. Ils sont dynamiques car ils examinent le trafic et d'autres motifs.

Un cas d'utilisation ciblé typique consiste à déterminer si l'OT est l'actif critique ou le point d'intrusion. XM Cyber joue des scénarios tels que si une machine dans les ressources humaines est le point d'intrusion, existe-t-il un risque pour ce contrôleur logique programmable (PLC) situé dans l'environnement SCADA qui contrôle les interrupteurs de pression pouvant couper l'électricité d'une municipalité. C'est un cas d'utilisation réel que XM Cyber peut simuler. Ce type d'information est essentiel dans un monde où l'OT n'est plus isolé mais connecté aux réseaux.

XM Cyber est une solution SaaS plutôt qu'une solution sur site, ce qui leur permet de rester dynamiques et de fournir le meilleur service. Il peut être effrayant de penser qu'un objet dans le cloud possède toutes vos techniques d'attaque. Cependant, XM Cyber fait beaucoup de travail pour garantir que les données sont complètement isolées, conformes à SOC 2, entre autres certifications, et qu'il n'y a pas de multi-locataires. Ils ne collectent pas non plus de données sensibles. Les informations sensibles sont hachées, et seule une partie est envoyée dans le cloud. Ils n'ont pas besoin de posséder de données réelles.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
