---
layout: posts
title: "Gestion du télétravail à pleine capacité"
number: 6
permalink: episode-EDT6-fr
lang: fr
nav_exclude: true
nav_order: 6
tags:
    - telework
    - remoteworker
    - vdi
    - mfa
    - cybersecurity
    - people
    - process

date: Thu Jul 23 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Tim Flynn
    - Pete Schmitz

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, Darren, Tim Flynn, retraité vice-amiral de la Marine, et Pete Schmitz, chargé de compte pour la Marine chez Intel, abordent la manière de gérer la croissance explosive des télétravailleurs due à la pandémie de Covid-19. Nous discutons des différents modes que les travailleurs peuvent utiliser pour travailler à distance tout en restant productifs : utilisation de l'appareil comme un terminal stupide, utilisation de l'appareil comme partie intégrante du réseau interne et utilisation de l'appareil comme un portail vers les services. Comprendre ces modes de fonctionnement peut aider à identifier les goulots d'étranglement qui peuvent entraver l'efficacité de votre équipe."
video: "https://youtu.be/-uQJGrcYnZ8"
description: "Dans cet épisode, Darren, Tim Flynn, retraité vice-amiral de la Marine, et Pete Schmitz, chargé de compte pour la Marine chez Intel, abordent la manière de gérer la croissance explosive des télétravailleurs due à la pandémie de Covid-19. Nous discutons des différents modes que les travailleurs peuvent utiliser pour travailler à distance tout en restant productifs : utilisation de l'appareil comme un terminal stupide, utilisation de l'appareil comme partie intégrante du réseau interne et utilisation de l'appareil comme un portail vers les services. Comprendre ces modes de fonctionnement peut aider à identifier les goulots d'étranglement qui peuvent entraver l'efficacité de votre équipe."
---

<div>
{% include transistor.html id="24d6e2c7" title="#6 Managing Telework at Capacity" %}

{% include youtube.html id="-uQJGrcYnZ8" %}
</div>

---

## Modes de fonctionnement des télétravailleurs

Les modes de fonctionnement que nous voyons les gens utiliser au sein du Département de la Défense et également dans le secteur privé sont les suivants :

Appareil en tant que terminal passif (VDI - Infrastructure de Bureau Virtuel)

* Appareil faisant partie du réseau interne (VPN - Réseau privé virtuel)

* Dispositif en tant que portail vers les services

La plupart des travailleurs utilisent plusieurs modes de fonctionnement, il est donc nécessaire de prendre en charge différents types à travers l'infrastructure.

## Appareil en tant que terminal passif

Dans ce mode, le travailleur exécute son bureau sur un serveur situé dans le centre de données et utilise son ordinateur portable pour se connecter au "bureau virtuel". Fondamentalement, il utilise son ordinateur portable ou un autre appareil comme un terminal "muet". Il y a quelques problèmes avec VDI, y compris la scalabilité, la congestion réseau, la latence et la redondance. En raison de ces problèmes, une session VDI peut être assez coûteuse. Cependant, parmi les trois options, VDI est la plus sécurisée.

## Dispositif faisant partie du réseau interne

Ce mode est probablement le plus courant. Le travailleur connecte son appareil au VPN afin de travailler sur le réseau comme s'il était connecté au bureau. Un avantage est la mobilité car les travailleurs peuvent se connecter à n'importe quel appareil tel qu'un téléphone, une tablette ou un ordinateur portable. Un autre avantage est qu'il peut y avoir différents segments de VPN pour différentes classifications de données. Un inconvénient est que les travailleurs doivent toujours être connectés pour pouvoir travailler. Et bien qu'il n'y ait pas autant de trafic réseau qu'avec un VDI, il y aura quand même une certaine congestion du réseau lorsque les données circulent.

## Appareil en tant que portail vers des services

De plus en plus de personnes s'orientent vers ce mode. Le travailleur utilise son appareil pour se connecter aux services dans le cloud, publics ou privés. Le principal service utilisé par les gens est Office 365, qui permet aux organisations d'utiliser des services cloud au lieu de leurs propres services, ou en combinaison avec eux. L'efficacité, la performance et la possibilité de travailler de manière déconnectée à certains moments sont des avantages. Les inconvénients incluent la dépendance à un tiers... (Je ne suis pas sûr comment finir cela - l'adoption/la migration et la sécurité)

## Obstacles émergents

Les goulots d'étranglement ont émergé à mesure que le nombre de personnes travaillant à domicile est passé de 15 % à plus de 85 % ciblés. Pour les deux premiers modes d'opération, la scalabilité du VPN peut constituer un goulot d'étranglement majeur. La bande passante limitée est également une grande source de goulots d'étranglement. Une solution à ces problèmes consiste à exploiter des services cloud pour atténuer la pression. Au niveau humain, les opérations informatiques et les bureaux d'aide sont submergés car les travailleurs se connectent depuis leur domicile pour la première fois.

## Évolutivité des VPN

Il existe plusieurs solutions à court terme pour aider à atténuer ces goulots d'étranglement. La priorité donnée à l'accès des utilisateurs peut être efficace, que ce soit en fonction des horaires ou de la priorité de la mission. Il est également nécessaire de former les employés à s'adapter à cet environnement.

Pour garantir la mise à l'échelle à long terme, les organisations devraient migrer vers des solutions SaaS en utilisant des ordinateurs portables en mode portail.

## Bande passante vers les sites.

Une des meilleures choses que les organisations peuvent faire à court terme est de déterminer combien d'utilisateurs VDI vous avez actuellement et de voir si vous pouvez les faire travailler sur le réseau ou dans le mode de fonctionnement des outils de collaboration. Cela réduira considérablement la charge sur la bande passante. Vous devrez peut-être également augmenter les capacités de votre réseau après avoir évalué comment vos utilisateurs distants travaillent. L'éducation est, encore une fois, une partie essentielle de cette transition afin que les travailleurs utilisent les meilleures pratiques, par exemple en se déconnectant du VPN lorsqu'ils ne l'utilisent pas et en configurant les outils de sauvegarde pour fonctionner pendant les heures creuses. À long terme, nous suggérons une architecture cloud multi-hybride qui vous donne la possibilité d'exploiter les fournisseurs de services cloud pour la bande passante du réseau et la capacité de rafale, tout en optimisant les coûts et les capacités.

## Services d'hébergement évolutifs

Pour faciliter la mise en œuvre d'architectures évolutives à court terme, il existe plusieurs références intéressantes, notamment Outlook Web Access (OWA) et les architectures de référence VDI.

Encore une fois, à long terme, nous vous recommandons de passer à une infrastructure de cloud hybride multiplateforme pour l'élasticité, la capacité, les performances prédictives, la conformité et la sécurité.

## Opérations informatiques

Comment pouvons-nous renforcer l'équipe du service d'assistance qui est probablement submergée ? Une idée consiste à mettre en place des FAQ en ligne pour faciliter la référence des travailleurs. Les solutions contribuées par la communauté des utilisateurs et modérées par l'équipe informatique peuvent également être utiles. Idéalement, les organisations devraient utiliser un système de gestion des tickets pour identifier les goulots d'étranglement et optimiser les processus. De plus, tout ce qui peut être automatisé pour éviter les tâches répétitives devrait l'être grâce, par exemple, à l'automatisation des processus robotiques (RPA) ou à des scripts supplémentaires. Une solution à plus long terme pourrait consister en la mise en place de chatbots IA en tant que service d'assistance informatique en libre-service. Ils permettent de réduire rapidement les solutions en ligne en utilisant des mots-clés ou de recommander un contact.

## Conclusion

Finalement, Intel souhaite voir les organisations réussir pendant cette période difficile où les travailleurs passent du bureau au travail à distance et font face à beaucoup de stress. Intel peut aider l'industrie, le gouvernement et les secteurs publics. Nous avons du silicium qui fonctionne dans tous ces domaines. Nous avons des partenaires qui fournissent des solutions matérielles et logicielles, et bien sûr, nous vendons des PC et des appareils clients qui permettent aux travailleurs à distance d'être opérationnels.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
