---
layout: posts
title: "Avenir de la mémoire élevée et CXL"
number: 89
permalink: episode-EDT89-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 89
tags:
    - bigmemory
    - memverge
    - optane
    - technology
    - data
    - compute
    - pmem
    - cxl
    - ceo

date: Wed Jun 01 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Charles Fan

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, architecte principal des solutions chez Intel, discute avec Charles Fan, PDG de MemVerge, de la façon dont la révolution CXL et le logiciel de MemVerge représentent l'avenir de la mémoire étendue."
video: "https://youtu.be/1TUCZjI4yns"
description: "Darren Pulsipher, architecte principal des solutions chez Intel, discute avec Charles Fan, PDG de MemVerge, de la façon dont la révolution CXL et le logiciel de MemVerge représentent l'avenir de la mémoire étendue."
---

<div>
{% include transistor.html id="536490f3" title="#89 Future of Big Memory and CXL" %}

{% include youtube.html id="1TUCZjI4yns" %}
</div>

---

Un développement passionnant dans la mémoire est le CXL (Compute Express Link). Un écosystème solide est en train d'être développé du côté hôte, avec le soutien d'Intel et d'autres acteurs pour le CXL 1.1 dans leurs plates-formes de prochaine génération, telles que Sapphire Rapids. Ceux du côté mémoire, y compris la quatrième génération d'Intel Optane, seront compatibles avec le CXL. Intel est un membre moteur d'un consortium CXL fort qui a participé à l'élaboration de la norme. CXL 2.0 a déjà été défini, avec des capacités supplémentaires, notamment l'externalisation et la commutation du CXL, et la version 3.0 est en cours de développement, ce qui permettra de standardiser la façon dont le CXL peut être provisionné et partagé.

Il y aura de nouveaux produits qui sortiront de Samsung, Micron et SK-Hynix avec des capacités CXL. De plus, de nouveaux interconnexions sont en cours de développement qui pourraient potentiellement connecter la mémoire avec le tissu, ce qui permettra d'avoir une mémoire compatible avec le tissu qui pourra être partagée entre plusieurs serveurs.

La technologie CXL est révolutionnaire. Un nouveau protocole de mémoire fonctionne sur le standard PCIe de cinquième génération et ultérieur. Étant donné qu'il permet de placer la mémoire sur PCIe, elle ne peut pas seulement être à l'intérieur de la boîte, mais à l'avenir, avec la commutation PCIe, la mémoire sur le tissu pourra devenir composable et partageable. Le premier produit CXL devrait être disponible d'ici la fin de l'année.

MemVerge dispose déjà d'un contrôleur de mémoire défini par logiciel et CXL a ouvert un tout nouveau monde pour le logiciel. CXL est à la mémoire ce que le canal à fibre est au stockage. C'est comme un réseau d'espaces mémoire plutôt qu'un réseau de stockage. Il est possible d'accéder directement à la mémoire avec CXL et contourner complètement le processeur.

CXL sera beaucoup plus rapide que les technologies d'interconnexion précédentes. Il aura une latence de 100 ou 200 nanosecondes. C'est là que l'utilisation, la gestion et l'agilité augmentent. Il y aura une disponibilité supérieure et une productivité accrue dans l'utilisation de la mémoire. De plus, vous pourrez allouer dynamiquement de la mémoire ; vous pouvez l'allouer selon vos besoins, et elle n'a pas besoin de s'adapter à la boîte du serveur. Théoriquement, vous aurez toujours suffisamment de mémoire pour tout ce dont vous avez besoin pour être actif.

Avec la technologie de snapshot de MemVerge, vos données sont protégées et persistantes. Cela devient d'autant plus important lorsque votre mémoire devient plus grande. Si vous la perdez, il est plus difficile de la reconstruire.

Pour que CXL décolle, trois éléments doivent être en place. Du côté du matériel, les principaux fabricants doivent adhérer aux mêmes normes. Cela s'est produit au cours de l'année dernière, il y a donc une norme unique que tout le monde supporte. Deuxièmement, vous n'avez pas besoin de modifier votre application pour utiliser CXL, tout comme les réseaux de stockage. Troisièmement, du point de vue de la base de données, vous ne devriez pas avoir à réécrire. Cela peut se produire entre ce que les normes fournissent, ce que le système d'exploitation prend en charge et le logiciel MemVerge qui peut faire de l'auto-affectation entre la mémoire DDR et la mémoire CXL.

MemVerge peut offrir cette couche d'abstraction. C'est essentiellement la virtualisation de la mémoire. La mémoire définie par logiciel gère l'emplacement réel de la mémoire physique.

MemVerge rend la mémoire vive transparente pour l'application afin que les programmeurs puissent utiliser une capacité plus importante et ne jamais manquer de mémoire. Ensuite, il y a la protection des données. MemVerge a développé un service de capture instantanée en mémoire qui peut enregistrer l'état complet d'une application en mémoire, et cet état est immuable. Il peut être récupéré à tout moment, n'importe où. Il y a de nombreux cas d'utilisation pour cela, tels que la médiation des rançongiciels et la réduction des délais de cycle dans la recherche en génomique.

La fonctionnalité de capture d'écran n'est pas seulement utile car elle peut rapidement et facilement capturer un pipeline en cours d'exécution, vous permettant de revenir en arrière et de récupérer à tout moment, mais elle peut également faire économiser de l'argent lors de l'utilisation de services cloud. Les principaux fournisseurs de services proposent des instances temporaires à des prix réduits de 70 à 90 % par rapport au prix demandé, mais il y a un piège : ils peuvent les reprendre à tout moment avec un préavis de seulement 30 secondes à deux minutes. Cela ne laisse pas suffisamment de temps pour réagir, surtout si vous avez beaucoup de données en mémoire, donc cela n'a pas été utile pour de nombreuses charges de travail. Avec la capacité de capture d'écran de MemVerge, vous pouvez prendre périodiquement des captures d'écran de votre charge de travail en cours d'exécution sur n'importe quelle instance. Si l'instance temporaire est retirée, vous disposez d'une image que vous pouvez récupérer et continuer à exécuter. C'est une assurance qui vous permet d'utiliser le service à faible coût en toute sécurité.

Puisque vous prenez une capture instantanée non seulement d'une application mais d'un conteneur ou d'une instance entière, vous pouvez le réinstaurer n'importe où, sur site, dans le même cloud ou dans un autre cloud. Cela vous offre une mobilité maximale et une résilience dans vos opérations, même en cas de panne majeure d'un service cloud. Cette technologie ouvre la porte à de nombreuses possibilités passionnantes.

La révolution CXL et le logiciel MemVerge Memory Machine sont des combinaisons puissantes pour des possibilités révolutionnaires.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
