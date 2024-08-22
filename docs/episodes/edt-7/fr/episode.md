---
layout: posts
title: "Sécurisation du travailleur à distance"
number: 7
permalink: episode-EDT7-fr
lang: fr
nav_exclude: true
nav_order: 7
tags:
    - datasecurity
    - cybersecurity
    - vdi
    - zerotrust

date: 2020-07-14T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Avec l'énorme changement de personnes travaillant désormais à domicile au lieu du bureau, la sécurité est une préoccupation croissante pour de nombreuses organisations informatiques. Dans cet épisode, Steve Orrin, directeur technique de Intel Federal, et Darren discutent des menaces de sécurité et des solutions pour aider à sécuriser votre télétravailleur et les centres de données de l'entreprise."
video: "https://youtu.be/Fjez8L0h2M4"
description: "Avec l'énorme changement de personnes travaillant désormais à domicile au lieu du bureau, la sécurité est une préoccupation croissante pour de nombreuses organisations informatiques. Dans cet épisode, Steve Orrin, directeur technique de Intel Federal, et Darren discutent des menaces de sécurité et des solutions pour aider à sécuriser votre télétravailleur et les centres de données de l'entreprise."
---

<div>
{% include transistor.html id="edt7" title="#7 Securing the Teleworker" %}

{% include youtube.html id="Fjez8L0h2M4" %}
</div>

---

## Modes d'opération pour les télétravailleurs.

Les modes de fonctionnement du télétravail ne sont pas nouveaux, que ce soit l'utilisation d'un appareil comme terminal (VDI), faisant partie du réseau interne, ou comme portail vers des services/logiciels (SAAS) ; ce qui est nouveau, c'est le nombre élevé d'employés, de sous-traitants et de partenaires utilisant désormais les environnements existants pour effectuer leur travail principal, plutôt qu'un nombre restreint et gérable. La sécurité est un défi dans tous ces modes de fonctionnement. Les organisations doivent déterminer la meilleure façon de déployer leurs capacités existantes pour sécuriser et protéger l'accès, les données, les appareils et les utilisateurs.

## Menaces du télétravail

Certaines des menaces pour la sécurité sont celles qui ont toujours été présentes avec le télétravail : la sécurité de l'appareil final et des données, le point d'accès et l'accès aux services de l'entreprise. Cependant, en s'adaptant à l'environnement du COVID-19, de nouveaux problèmes sont apparus en raison du grand nombre de personnes qui télétravaillent maintenant et de la course folle pour les rendre possibles.

Un problème est la présence de travailleurs à domicile dans des environnements non sécurisés, sur des réseaux qui n'ont jamais été prévus pour être utilisés en dehors de l'entreprise. Cela entraîne des attaques ciblées de phishing et de logiciels malveillants. Un autre problème est l'introduction de nouveaux outils, tels que ceux utilisés pour la collaboration et les visioconférences, qui peuvent exposer votre entreprise et vos données à des attaques et une utilisation malveillante. Essentiellement, il y a maintenant une plus grande surface d'attaque, beaucoup plus importante que ce que la plupart des organisations avaient initialement prévu, et de nouveaux environnements qui n'étaient pas prévus dans le plan d'origine.

## Solutions pour sécuriser le travailleur à distance

## Apportez votre propre appareil (BYOD)

L'un des problèmes les plus difficiles à gérer est lorsque les travailleurs utilisent leurs propres appareils. Le défi clé est que ces appareils ne sont pas gérés, sans tous les agents de sécurité en cours d'exécution et gérés par l'informatique ; l'appareil est possédé et géré par l'utilisateur. Vous pouvez avoir la possibilité de charger quelques agents ou d'appliquer certaines politiques, mais il y a seulement tant que vous pouvez faire sans entraver l'utilisation de l'appareil par le travailleur en tant qu'appareil personnel. Alors, comment sécuriser un utilisateur avec un BYOD ?

Assurez-vous que ces bases sont en place : Poussez les derniers correctifs comme une exigence, appliquez un bon contrôle d'accès à votre entreprise et à vos services, mettez en place une authentification à facteurs multiples, et entourez vos actifs des bonnes protections telles que la gestion des droits d'entreprise pour le contrôle d'accès aux données et imposez un contrôle d'accès basé sur des politiques au niveau des points d'accès finaux.

Une autre option pour réduire votre risque peut être de limiter l'accès direct aux services de l'entreprise et de faire travailler les utilisateurs dans un environnement SASS.

## Points de terminaison et environnements non sécurisés

La meilleure solution pour bon nombre de ces problèmes serait un client riche d'entreprise, mais il reste néanmoins des risques. Les travailleurs utilisent un appareil qui est une extension gérée du réseau de l'entreprise. La sécurité peut être mise en place avec un démarrage sécurisé, un chiffrement du disque complet, une protection des données, des pare-feu locaux et l'application de bonnes pratiques de mise à jour. Cependant, le risque réside dans le fait que de nombreuses organisations ont déjà des travailleurs à distance en place, tels que des commerciaux ou des ingénieurs sur le terrain, qui pourraient ne pas bénéficier du même niveau de sécurité que les travailleurs qui n'étaient pas censés quitter le bâtiment, tels que les services financiers et les ressources humaines.

Les organisations doivent être vigilantes pour s'assurer que tous les travailleurs disposent désormais de la même sécurité, voire ajouter des couches supplémentaires que les travailleurs doivent utiliser pour travailler à distance sur des réseaux non sécurisés. L'authentification à plusieurs facteurs devrait désormais être une exigence, et l'application des politiques de terminaux et la gestion des droits d'entreprise sont désormais plus importants que jamais.

Nous observons des innovations dans ce domaine, comme un client qui fournit non seulement des ordinateurs portables aux nouveaux employés, mais également un routeur géré pour éviter les réseaux non sécurisés.

## Systèmes VDI et services Cloud

Mettre en œuvre la sécurité pour les systèmes VDI et les services cloud comprend les bases de la sécurité : protections des données, sécurité de la virtualisation pour le centre de données de l'entreprise et les points d'accès, sécurité des applications, démarrages sécurisés, correction des failles et chiffrement du réseau. La clé est de réaliser une enquête précise sur l'entreprise et les services cloud déployés auprès de vos employés et de s'assurer qu'ils sont tous sécurisés de la même manière. Chaque application, même celles qui ne sont pas critiques, représente un point d'attaque potentiel.

## En tant que service aux clients.

Les clients SASS utilisent des services dans le cloud et utilisent également des applications sur leur client riche, ce qui pose quelques problèmes de sécurité supplémentaires à prendre en compte. Il devrait y avoir une protection appropriée des données dans la gestion des droits d'entreprise (ERM) pour l'accès aux données via les services cloud et de retour vers le centre de données. La protection des deux côtés est primordiale. L'accès des clients aux services cloud devrait être protégé par une authentification multi-facteurs et un chiffrement réseau. L'accès des services cloud au cloud privé du centre de données de l'entreprise et aux ressources de l'entreprise devrait également être protégé au niveau du réseau, de l'accès aux données et des applications. Comprendre comment les clients utilisent les services et quelles données ils consultent est là que les décisions d'ERM entrent en jeu.

## Mauvaise utilisation et abus d'insiders

L'informatique devrait utiliser une variété de méthodes pour gérer la menace et le risque d'erreurs, d'utilisation abusive et d'actions malveillantes des membres internes. Le contrôle d'accès basé sur les politiques et l'application de mesures de sécurité depuis les applications jusqu'aux données, tant au niveau de l'entreprise que du cloud, sont importants pour contrer les utilisateurs déjà authentifiés qui abusent ou utilisent de manière abusive les systèmes. La principale défense dont dispose l'informatique est la collecte de données et la surveillance du renseignement sur les menaces. La gestion de ces informations dans l'ensemble de l'entreprise et du cloud sur une longue période peut être très efficace pour détecter les comportements aberrants.

Il ne fait aucun doute que nous devons maintenant penser différemment aux problèmes de sécurité liés au télétravail. Nos principales recommandations sont les suivantes : premièrement, déployez la technologie que vous avez expérimentée ; deuxièmement, éduquez vos utilisateurs ; et troisièmement, activez l'authentification à deux facteurs et protégez vos données à grande échelle. Si nous pouvons faire ces trois choses, nous pouvons réduire les risques et être mieux préparés pour l'avenir.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
