---
layout: posts
title: "Protéger les murs extérieurs de votre château avec des analyses de vulnérabilité."
number: 92
permalink: episode-EDT92-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 92
tags:
    - cybersecurity
    - endpointmanagement
    - vulnerability
    - cyberattack
    - iot
    - edge
    - censys

date: Wed Jun 15 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Matt Lembright

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, Darren parle à Matt Lembright, Directeur des Applications Fédérales chez Censys, de la manière dont Censys évalue la surface d'attaque des appareils connectés à Internet, permettant aux organisations d'éliminer les vulnérabilités."
video: "https://youtu.be/TzyCREPs7Wk"
description: "Dans cet épisode, Darren parle à Matt Lembright, Directeur des Applications Fédérales chez Censys, de la manière dont Censys évalue la surface d'attaque des appareils connectés à Internet, permettant aux organisations d'éliminer les vulnérabilités."
---

<div>
{% include transistor.html id="6fdf7422" title="#92 Protecting the Outer Walls of your Castle with Vulnerability Scans" %}

{% include youtube.html id="TzyCREPs7Wk" %}
</div>

---

Matt a passé huit ans en tant qu'officier du renseignement dans l'armée. Dans la dernière partie de son service, il a contribué à la création des forces de mission cybernétique dans le cadre du US Cyber Command. Après avoir terminé son service, il a travaillé avec Army Cyber et quelques startups avant de venir chez Censys.

Une évaluation typique des vulnérabilités nécessite de la part d'une organisation ce qui les intéresse, disons une liste de blocage d'adresses IP pour une analyse des vulnérabilités liées aux identifiants. Ensuite, ces vulnérabilités sont découvertes et peuvent être corrigées. Un scan Censys peut fournir une analyse étendue et approfondie d'Internet à partir d'informations de base telles qu'un domaine et quelques adresses IP, découvrant tout ce que possède l'organisation et surveillant en continu les mêmes agrégations et corrélations entre les ensembles de données. Par exemple, si le département marketing met en place un site web exposé sans TLS, Censys le détectera. Censys adopte une perspective externe pour savoir ce qui est accessible à un attaquant à n'importe quel moment de la journée.

Même si, par exemple, quelqu'un déploie une application dans le cloud, ne la place pas sur le domaine et utilise une sécurité d'obfuscation, Censys le détectera toujours s'il se trouve dans un environnement cloud appartenant à l'organisation. Les connecteurs cloud découvriront de nouvelles instances cloud qui apparaissent. Une certaine connexion, que ce soit des informations WHOIS ou DNS, doit corréler à certaines de ces instances. Censys continue à s'améliorer dans la détection de ces types d'instances.

L'analogie d'un château fonctionne bien ici. Une organisation ne veut pas seulement se fier à ce qu'elle peut voir en interne grâce aux caméras et sentinelles. Elle souhaite une patrouille de sécurité mobile pour repérer les menaces avant même qu'elles n'atteignent les murs du château. La patrouille peut observer le château de la même manière qu'un attaquant le ferait. Censys patrouille l'internet d'un point de vue externe, voyant les choses comme le ferait un potentiel pirate informatique.

Un outil que Censys étudie est JARM de Salesforce, un outil de reconnaissance active des empreintes TLS. Lorsque des éléments sont déployés qui ne correspondent pas aux empreintes sur un serveur spécifique, ils se démarqueront en tant qu'anomalies. Il est essentiel de rechercher des architectures qui devraient être dans une configuration spécifique mais ne le sont pas.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
