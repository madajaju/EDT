---
layout: posts
title: "Application Zéro Confiance avec Calcul Confidentiel"
number: 174
permalink: episode-EDT174-fr
lang: fr
nav_exclude: true
nav_order: 174
tags:
    - confidentialcomputing
    - encryptingdata
    - datasecurity
    - sgx
    - fortanix
    - datasecuritymanager
    - globalkeymanagement
    - encryptionkeys
    - databaseencryption
    - datasecurityplatform
    - truetrustapplications
    - confidentialcomputingmanager
    - onprem
    - privatecloud
    - publiccloud
    - zerotrust
    - futureofconfidentialcomputing
    - distributedanalytics
    - zta
    - cybersecurity

date: Thu Nov 16 2023 00:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Patrick Conte
    - Darren W Pulsipher

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Dans cet épisode, Darren interviewe Patrick Conte de Fortanix à propos de l'exploitation de l'informatique confidentielle pour sécuriser les applications dans les architectures à confiance zéro."
video: "https://youtu.be/UWYLz_a9CsE"
description: "Dans cet épisode, Darren interviewe Patrick Conte de Fortanix à propos de l'exploitation de l'informatique confidentielle pour sécuriser les applications dans les architectures à confiance zéro."
---

<div>
{% include transistor.html id="a2bed64b" title="#174 Zero Trust Application with Confidential Computing" %}

{% include youtube.html id="UWYLz_a9CsE" %}
</div>

---

## L'évolution de l'informatique confidentielle

Le calcul confidentiel permet de crypter les données non seulement au repos et en transit, mais aussi lorsqu'elles sont activement en cours d'utilisation. Cela protège contre les attaques même si un attaquant obtient un accès root, car les dumps de mémoire ne montreront que des données cryptées inutiles. La technologie Software Guard Extensions (SGX) d'Intel fournit une base matérielle pour le calcul confidentiel. Fortanix s'appuie sur SGX et les avancées connexes d'Intel pour rendre le calcul confidentiel accessible et facile à utiliser.

Une offre clé de Fortanix est leur plateforme de gestion de la sécurité des données. Celle-ci remplace les solutions d'encryption matérielles dédiées par une encryption logicielle alimentée par les enclaves SGX. Le gestionnaire de la sécurité des données permet des fonctions crypto avancées comme la gestion de clés mondiales pour des millions de clés de cryptage, le tout à partir d'une console unifiée. Il peut également gérer l'encryption de bases de données, la gestion des certificats et d'autres besoins critiques de protection des données. Cette approche définie par logiciel représente l'avenir de la sécurité des données.

## Activation de véritables applications Zero Trust

L'informatique confidentielle a des implications bien au-delà de la simple sécurité des données. Elle permet également d'attacher directement des profils de sécurité aux applications elles-mêmes, de sorte que la sécurité se déplace avec l'application, quel que soit l'endroit où elle fonctionne. Fortanix analyse les applications pour évaluer si elles peuvent fonctionner de manière transparente dans les enclaves SGX. Si des modifications sont nécessaires, ils fournissent des conseils sur la réécriture de certaines parties dans des langues conviviales pour les enclaves, comme Python.

La solution Confidential Computing Manager de Fortanix orchestre les applications chiffrées à travers différents environnements tels que sur site, cloud privé et cloud public. Ce moteur d'orchestration a atteint une méfiance totale non seulement pour les données sensibles, mais aussi pour les applications critiques. Les charges de travail peuvent être déplacées de manière dynamique vers différents environnements activés SGX au besoin tout en maintenant la sécurité de bout en bout.

## L'Avenir de l'Informatique Confidentielle

Il existe de nombreux cas d'utilisation potentiels passionnants pour l'informatique confidentielle, comme l'exécution d'analyses distribuées de manière collaborative au sein d'enclaves sécurisées isolées. Alors qu'il y avait auparavant des pénalités de performance substantielles, les améliorations apportées par Intel et Fortanix ont maintenant réduit les frais généraux à des pourcentages à un chiffre dans la plupart des cas. L'adoption croît rapidement dans les secteurs de la santé, du gouvernement, de la finance et d'autres industries pour protéger les algorithmes précieux et les charges de travail réglementées. À mesure que l'informatique confidentielle devient plus omniprésente et accessible, elle constituera un pilier fondamental des architectures modernes de confiance zéro.

## Conclusion

Ce podcast perspicace offre un aperçu stimulant de la manière dont l'informatique confidentielle peut permettre de véritables applications à zéro confiance. La capacité à crypter les données en cours d'utilisation et à rattacher des profils de sécurité aux applications ouvre de nouvelles possibilitités intrigantes pour la protection des données de bout en bout et la sécurité des applications dans des environnements dynamiques. À mesure que les menaces se sophistiquent, l'informatique confidentielle ne fera qu'accroître son importance stratégique.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
