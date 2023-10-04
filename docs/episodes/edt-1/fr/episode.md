---
layout: posts
title: "Histoire de l'architecture centrée sur les données"
number: 1
permalink: episode-EDT1-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 1
tags:
    - dataarchitecture
    - softwaredeveloper
    - microservice
    - container
    - virtualization
    - technology
    - compute
    - data

date: Thu May 07 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.bmp
image: thumbnail.bmp
summary: "Dans cet épisode, Darren parle de l'histoire des applications et de comment les changements récents, principalement dus à l'afflux de données provenant de l'Internet des objets, affectent les architectures centrées sur les données. L'infrastructure est prête, mais nous n'avons pas encore de moyen adapté pour gérer toutes nos données. Trois éléments doivent changer pour faciliter ce processus : les personnes (organisation), les processus (opérations) et l'architecture (technologie). Darren se concentre sur l'architecture, où les données et le traitement sont répartis sur des milliers de périphériques et à travers des clouds publics et privés."
video: "https://youtu.be/SZyyG2AGM6g"
description: "Dans cet épisode, Darren parle de l'histoire des applications et de comment les changements récents, principalement dus à l'afflux de données provenant de l'Internet des objets, affectent les architectures centrées sur les données. L'infrastructure est prête, mais nous n'avons pas encore de moyen adapté pour gérer toutes nos données. Trois éléments doivent changer pour faciliter ce processus : les personnes (organisation), les processus (opérations) et l'architecture (technologie). Darren se concentre sur l'architecture, où les données et le traitement sont répartis sur des milliers de périphériques et à travers des clouds publics et privés."
---

<div>
{% include transistor.html id="7dda1ee9" title="#1 History of Data Centric Architecture" %}

{% include youtube.html id="SZyyG2AGM6g" %}
</div>

---

Dans cet épisode, Darren parle de l'histoire des applications et des récents changements, principalement dus à l'assaut.

La collecte de données provenant de l'Internet des objets affecte les architectures axées sur les données. L'infrastructure est prête, mais nous ne

Nous n'avons pas encore trouvé un moyen adapté de gérer toutes nos données. Trois éléments doivent être modifiés pour faciliter ce processus :

is stored and processed.

et sont répartis sur des milliers d'appareils aux extrémités et à travers des nuages publics et privés.

## Stacks matériels-logiciels conçus spécifiquement

La façon dont nous déployons aujourd'hui des applications pour les missions n'a pas changé de manière significative depuis trente ans. Une architecture de référence.

Translate the following to French: cela a une application et une pile d'applications construite sur un matériel spécifique, avec un calcul et un stockage connectés à un.

Réseau. Ce modèle a bien fonctionné pendant longtemps, et en fait, environ un quart des applications sont toujours déployées.

matériel spécifiquement conçu, mais il n'est pas optimal aujourd'hui. La technologie évolue trop rapidement pour ce modèle; des décalages se produisent.

d'autres systèmes


d'autres applications.

## Architectures de virtualisation

Environ 20 à 25 ans auparavant, la virtualisation matérielle a commencé à résoudre certains de ces problèmes en permettant le déploiement de.

applications for five separate machines, users now only needed to purchase one set of applications for their single machine.

machines plus petites, une pièce de matériel plus grande pourrait être utilisée, non seulement pour les calculs, mais aussi pour le stockage virtuel et le réseau.

fonctions tout autant, conduisant à une meilleure rentabilité. Comme pour tout développement, cela a soulevé de nouvelles problématiques.

Préoccupations croissantes en matière de sécurité et "voisins bruyants", ce qui signifie qu'une application perturbe les performances d'une autre.

à cause de l'utilisation de la bande passante d'E/S, du réseau, du stockage, etc.

## Architectures cloud

À partir du début des années 2000, la technologie du cloud a décollé. Nous pouvions désormais partager entre plusieurs organisations. Où la virtualisation

Création de l'abstraction du matériel, la technologie de cloud a créé l'abstraction des opérations, facilitant ainsi la gestion de multiples.

distribute machines quickly at scale.

d'utilisation des ressources de calcul, de stockage et de réseau. D'autres avantages incluent une diminution des coûts d'investissement (CapEx) et de fonctionnement (OpEx), grâce à une utilisation moindre.

solde prennent jusqu'à 75 % de réduction.

gouvernement lors du recensement. Avec l'avancement de cette technologie, les problèmes de sécurité et de voisins bruyants.

private clouds.

traduction :

Les clouds privés. Même avec ces inquiétudes, cependant, les avantages surpassent largement les inconvénients dans la plupart des cas.

## Architectures de Service et de Conteneur

La technologie de la conteneurisation a été réinventée au cours des cinq à six dernières années. Docker a créé une

particular, will benefit from this smoother experience as it allows for faster development and deployment of applications.

45. Particulier, a adopté cette technologie car elle est cohérente sur plusieurs environnements. La couche de gestion des services.

avec la conteneurisation des applications et des microservices, la priorité est donnée aux applications et elles sont associées à

matériel générique virtualisé qui a été abstrait. Nous avons maintenant un déploiement automatique sur plusieurs clouds.

Nous avons optimisé OpEx et également CapEx sur la pile d'applications et la couche de service. La tolérance aux fautes est automatisée et

the following to French: il est beaucoup plus facile de s'intégrer avec les réseaux superposés, s'intégrer à travers plusieurs clouds, créer des pare-feu, faire...

micro-segmentation etc… tout via un logiciel.

La sécurité, cependant, est une préoccupation principale. Étant donné que les conteneurs sont faciles à déployer dans plusieurs environnements, il est

il est important de se concentrer sur la sécurité "intégrée" au déploiement. De plus, il y a une augmentation de la complexité.

nous sommes passés d'une architecture à trois niveaux à une architecture à plusieurs niveaux, voire même à une architecture de microservices avec des dizaines de.

Les services travaillent ensemble. Un autre problème est l'endroit et la manière dont les données sont stockées et gérées. Concernant la gestion des services

Translate the following to French: "layer, le stockage est un conteneur générique, qui ne gère pas les données elle-même."

## Architectures de l'Internet des objets

Now, when Internet of Things (IoT) is added to this ecosystem, the increased volume of data is spread across hundreds or thousands of connected devices, further fueling the need for advanced data storage and processing capabilities.

devices have limited processing power and memory, which can make them vulnerable to cyber attacks. Therefore, it is important to implement robust security measures to protect these devices and the data they collect.

Les dispositifs sont accessibles au public. Par exemple, quelqu'un pourrait manipuler une lampe intelligente de la ville, un signal de circulation intelligent.

Translate the following to French: un drone, ou une caméra de sécurité. La complexité des différents appareils, leur nombre et leurs emplacements, ainsi que l'immensité.

La quantité de données est énorme.

## Architectures de gestion des données et des informations

Comment pouvons-nous faire face à ces problèmes ? Les organisations sont déjà en train de s'adapter pour gérer cette complexité avec de nouvelles organisations.

et des postes trompeurs sur les cas d'utilisation de la gestion des données. Auparavant, il n'y avait aucun endroit pour gérer ces cas d'utilisation, donc

les différents niveaux de gestion de l'information distribuée.

can provide seamless integration and scalability.

peuvent allouer dynamiquement des services et des applications près des données, ou vice versa. Les réglementations et la taille importante des données.

peut limiter la capacité de déplacer des données vers des emplacements centraux, comme nous l'avons traditionnellement fait. Avec cette nouvelle architecture,

Plusieurs modes de fonctionnement peuvent être utilisés, y compris l'analyse désagrégée, le déplacement des données et le déplacement des applications.

Une fois de plus, avec cette architecture étendue, la sécurité est d'une importance capitale. La sécurité doit être traitée comme un aspect commun.

à travers toutes les couches. Sécurité de l'identité, c'est-à-dire l'accès, l'autorisation et l'authentification des individus, de l'IoT.

Les appareils, les applications, les services, et même les données sont essentiels. La gestion de l'identité inclut le chiffrement des données de confiance.

et appareils.

## Conclusion-->Conclusion

translate: Toute cette architecture ensemble est appelée l'architecture Edgemere. Beaucoup des éléments existent déjà ; il nous faut

have advanced technologies that can help organizations optimize how they work together. DIML is a recently developed system that allows for distributed information management. This technology enables seamless collaboration and communication between different departments and teams within an organization. Fortunately, we have made significant progress in developing DIML, and it is now ready to be implemented in various industries. DIML optimizes how information is shared, accessed, and stored, ultimately enhancing productivity and efficiency.

commencent à voir des start-ups et des entreprises plus établies développer les cas d'utilisation et les éléments architecturaux.

dans cette couche

work together to provide a seamless user experience.

s'emboîter

Intel s'intègre dans cet écosystème en fournissant l'élément clé d'une couche physique commune pour contrôler et gérer l'ensemble de vos.

utiliser toutes vos ressources, que ce soit un appareil IOT, dans le centre de données ou dans un endroit distant. Nous rendons cela possible pour vous.

Déplacer efficacement les données, les stocker de manière efficace et tout traiter. Que ce soit avec les processeurs Xeon hautement performants.

Que ce soit pour l'informatique de pointe, l'inférence ou l'IA à basse puissance, Intel dispose d'une gamme complète de matériel physique.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
