---
layout: posts
title: "Sécuriser le télétravailleur Partie 2"
number: 8
permalink: episode-EDT8-fr
lang: fr
nav_exclude: true
nav_order: 8
tags:
    - policy
    - security
    - intel
    - zerotrust
    - multicloud
    - cybersecurity

date: Mon Jul 20 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Avec de nombreux employés travaillant désormais depuis leur domicile, comment vous assurez-vous qu'ils travaillent de manière sécurisée tout en leur offrant la flexibilité dont ils ont besoin pour accomplir leur travail ? Dans cet épisode, Darren et l'invité spécial Steve Orrin, CTO d'Intel Federal, discutent de la manière de tirer parti de la technologie Intel pour aider efficacement à sécuriser le télétravailleur."
video: "https://youtu.be/2PazR1MX2wc"
description: "Avec de nombreux employés travaillant désormais depuis leur domicile, comment vous assurez-vous qu'ils travaillent de manière sécurisée tout en leur offrant la flexibilité dont ils ont besoin pour accomplir leur travail ? Dans cet épisode, Darren et l'invité spécial Steve Orrin, CTO d'Intel Federal, discutent de la manière de tirer parti de la technologie Intel pour aider efficacement à sécuriser le télétravailleur."
---

<div>
{% include transistor.html id="5fc292e0" title="#8 Securing the Teleworker Part 2" %}

{% include youtube.html id="2PazR1MX2wc" %}
</div>

---

## Technologies pour la sécurisation du télétravailleur par le client

La sécurité du côté client commence et se termine par la capacité de vérifier le client grâce à un démarrage sécurisé. Intel propose cette technologie depuis des années dans les systèmes de nos clients avec le démarrage sécurisé avec la technologie d'exécution fiable (TXT), et plus récemment, BootGuard (BtG). Sur les plates-formes les plus récentes, nous avons Intel Hardware Shield, un ensemble de technologies qui sécurisent le système à son niveau le plus bas, au niveau du micrologiciel et du BIOS. C'est ainsi qu'un système de contrôle d'accès d'entreprise peut vérifier qu'un client démarre de manière sécurisée et dispose du micrologiciel correct ainsi que des contrôles de sécurité appropriés avant de lui accorder l'accès à l'entreprise.

Intel a également fait beaucoup de travail au fil des années pour aider les organisations à mieux protéger leurs données. De plus, nous avons permis au client d'activer le chiffrement partout sans impact sur les performances. Nous avons mis en œuvre de nouvelles instructions dans presque chaque génération de nos produits, ajoutant de nouvelles capacités pour sécuriser le travailleur à distance.

Notre autre priorité a été de protéger les applications et leurs données pendant leur utilisation. C'est là que les extensions Intel Software Guard (SGX) entrent en jeu. Cela donne aux organisations la possibilité de placer des parties clés des applications et des données importantes dans des enclaves de mémoire sécurisée et chiffrée. Avec le télétravail, cela signifie que vous pouvez déployer des applications dans des environnements non fiables tout en maintenant un niveau élevé de sécurité.

De plus, la nouvelle technologie qu'Intel a introduite dans la catégorie de détection des menaces permet aux organisations d'obtenir une visibilité approfondie sur les opérations de la plate-forme afin de surveiller les menaces ; aucun logiciel malveillant ne peut se cacher. Ces technologies révolutionnent la façon dont nous détectons les logiciels malveillants en utilisant l'apprentissage automatique et l'intelligence artificielle.

## Technologies de centre de données pour sécuriser les travailleurs à distance

Même si vous avez sécurisé les clients, vous devez également sécuriser le centre de données. Les deux côtés doivent être protégés car votre système n'est sécurisé que jusqu'au maillon le plus faible. Beaucoup des techniques pour sécuriser le télétravailleur sont similaires à la sécurisation de votre entreprise : le démarrage sécurisé, la sécurité de la virtualisation et les contrôles d'isolement. Encore une fois, des technologies comme Intel TXT et BootGuard vous permettent de démarrer en toute sécurité ces plates-formes et les actifs du centre de données et du cloud. Plus récemment, nous avons introduit une technologie, Intel Select Solutions for Hardened Security, qui intègre bon nombre des technologies de sécurité d'Intel dans une seule plate-forme activée par défaut.

Vous devez être en mesure de protéger vos données à grande échelle, ce qui signifie être capable d'utiliser tous vos outils de sécurité sans affecter négativement les performances. Les outils de cryptage accéléré par matériel d'Intel (SHA, AES-2X, VPMADD52) rendent cela possible. Les nouvelles instructions et technologies QuickAssist d'Intel sont spécifiquement adaptées aux besoins de cryptage à grande échelle des entreprises et des services cloud.

En fin de compte, comment surveillez-vous l'intelligence des menaces et effectuez-vous des audits à grande échelle ? L'architecture de la plateforme d'intelligence cybernétique d'Intel (FPGA, DCPMM, Optane SSD) utilise des technologies de calcul, de stockage et de mémoire haute performance pour agrandir la plateforme d'intelligence cybernétique, même avec le fardeau supplémentaire d'une sécurité externe accrue avec les télétravailleurs.

## Solutions à court terme

La formation des employés est la première ligne de défense contre les menaces de sécurité liées au télétravail. Il est essentiel de fournir des conseils sur la sécurité à domicile, ainsi que de dispenser une formation en sécurité ou de renforcer la formation précédente dans des domaines tels que l'accès approprié aux données. Soyez proactif en ce qui concerne les correctifs en les diffusant et en exigeant des utilisateurs qu'ils mettent à jour leurs appareils. Si vous disposez d'un contrôle d'accès d'entreprise, de solutions ERM/DRM et de DLP, activez-les et étendez-les. Réévaluez vos politiques pour vous assurer qu'elles répondent à la nouvelle réalité des télétravailleurs. Pour les connexions Web, activez le protocole TLS et assurez-vous qu'il soit appliqué. L'authentification à deux facteurs doit être utilisée. La plupart des organisations pensent peut-être ne pas avoir l'infrastructure nécessaire pour mettre en œuvre cela, mais il existe plusieurs fournisseurs qui peuvent vous aider dans ce domaine sans nécessiter le déploiement d'une grande quantité de nouvelles infrastructures.

De nombreuses solutions sont simplement des mesures d'hygiène standard : Assurez-vous que vos agents de sécurité du point final sont activés et à jour. Gérez et appliquez des politiques de sécurité pour les différents types d'appareils utilisés par les utilisateurs. Activez le chiffrement du disque dur complet.

Les organisations doivent comprendre que les télétravailleurs évoluent dans un environnement où la probabilité qu'un appareil soit utilisé par d'autres dans différentes circonstances est élevée. De bonnes mesures de sécurité, en particulier l'éducation des employés, peuvent contourner les problèmes et permettre aux employés de travailler sans impacts négatifs.

## Solutions à long terme

Un plan à long terme pour la sécurité dans un environnement avec des télétravailleurs est désormais nécessaire, que ce soit pour une transition permanente vers davantage de travailleurs à distance ou pour faire face à une autre pandémie ou situation similaire. Il y a plusieurs étapes que les organisations devraient prendre dès maintenant afin de soutenir cette réalité dans le futur.

Une des meilleures pratiques est de mettre en place des politiques de confiance zéro. Cela réduit la dépendance envers la nécessité de faire confiance à tous les aspects des utilisateurs et des clients qui arrivent. En plus de cela, l'authentification à plusieurs facteurs avec les utilisateurs et les appareils devrait devenir une norme dans toute l'organisation. Pour ceux qui n'ont pas adopté la gestion des risques de l'entreprise (ERM) et le contrôle d'accès aux données basé sur les politiques, c'est maintenant le moment de le faire pour protéger les données à la fois hors site et sur site. Il est important de mettre en œuvre des solutions de sécurité complètes plutôt qu'au niveau de l'application ou du réseau. Cela inclut le démarrage sécurisé avec attestation, la virtualisation et la sécurité par conteneur, ainsi que la sécurité et la surveillance du micrologiciel. Il est important d'étendre l'audit, la veille des menaces et la surveillance aux environnements de télétravail, malgré les réticences des utilisateurs qui ne veulent pas être davantage surveillés sur leurs systèmes. Il convient également de considérer l'extension de la sécurité au-delà de l'appareil dans les lieux de télétravail chaque fois que cela est possible, par exemple avec les appareils et les réseaux gérés.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
