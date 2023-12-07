---
layout: posts
title: "Cas d'utilisation pratique de la mémoire persistante Optane"
number: 51
permalink: episode-EDT51-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 51
tags:
    - dataarchitecture
    - memverge
    - pmem
    - optane
    - technology
    - data

date: Wed Jun 02 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Chief Solution Architect, Intel, parle à Charles Fan, PDG de MemVerge, des cas d'utilisation de leur logiciel qui utilise la mémoire persistante Intel Optane de manière innovante, en supprimant le goulot d'étranglement entre la mémoire et le stockage."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solution Architect, Intel, parle à Charles Fan, PDG de MemVerge, des cas d'utilisation de leur logiciel qui utilise la mémoire persistante Intel Optane de manière innovante, en supprimant le goulot d'étranglement entre la mémoire et le stockage."
---

<div>
{% include transistor.html id="442f5ddb" title="#51 Practical Optane Persistent Memory Use Cases" %}

{% include youtube.html id="url" %}
</div>

---

MemVerge a livré la première version de leur logiciel en septembre 2020, et malgré la pandémie, qui a ralenti la sensibilisation des clients à la nouvelle technologie, un bon modèle de cas d'utilisation est apparu.

## Réduction des coûts des fournisseurs de services cloud

La principale mesure pour un opérateur de service de cloud est combien de machines virtuelles (VM) ils peuvent fournir à leurs clients, et à quel coût. La taille de la mémoire sur les serveurs devient le goulot d'étranglement qui limite le nombre de VM qu'ils peuvent allouer par serveur, restreignant ainsi la baisse possible de leur prix par VM.

Le logiciel MemVerge avec Optane offre une quantité plus importante de mémoire par serveur, allouant un nombre plus important de machines virtuelles (VM), réduisant ainsi le coût par VM et augmentant la compétitivité des fournisseurs de services cloud. Le coût par VM pourrait être trois fois moins cher.

## Fiabilité avec de grandes bases de données en mémoire

Les clients financiers tels que les bourses, les banques et les fonds communs de placement utilisent beaucoup de bases de données en mémoire et d'applications en mémoire. En plus d'augmenter leur mémoire pour pouvoir avoir plus d'instances par serveur, MemVerge résout les problèmes de disponibilité des bases de données en mémoire. Si les données ne sont pas constamment enregistrées sur le stockage, mais restent simplement en mémoire, toutes les données intraday sont perdues en cas de crash. Cela est catastrophique. Même si toutes les transactions ont été enregistrées, il faut rejouer le journal pour récupérer la base de données, ce qui prend de nombreuses minutes, voire des heures, pour se remettre.

MemVerge propose un nouveau service de données qui dispose d'une capture instantanée en mémoire. Il persiste l'état de la base de données sur Optane, ce qui est beaucoup plus rapide que la persistance sur le stockage. En cas de panne, vous disposez de la dernière capture instantanée en mémoire persistante et vous pouvez récupérer à partir de celle-ci. La récupération ne prend qu'une minute ou deux, ce qui représente une amélioration de 60 à 100 fois.

## Réduction du séquençage génomique par instantané de mémoire.

Dans le domaine de la génomique, le logiciel MemVerge en combinaison avec Optane augmente la productivité de manière exponentielle. Dans un flux de travail d'analyse de données à plusieurs étapes, une mémoire plus grande signifie plus de parallélisme du pipeline et du traitement, ce qui rend l'ensemble du processus plus rapide. La fonctionnalité de capture d'écran est également pratique ici. Si une organisation réalise, par exemple, des recherches sur le cancer ou le COVID, et qu'elle doit effectuer des séquences d'ADN ou d'ARN, elle doit passer par environ 50 étapes de traitement. Chaque étape peut prendre des heures et ils doivent enregistrer une sauvegarde de l'état des résultats de calcul intermédiaires pour plusieurs raisons : d'abord, pour réexécuter ou reproduire les résultats, et ensuite, pour comparer les résultats s'ils modifient certaines données. Les points de contrôle sont enregistrés sur le stockage, ce qui prend entre cinq et 30 minutes. Dans de nombreux cas, cela peut être plus chronophage que le calcul lui-même. Ainsi, si un travail prend 24 heures, ils peuvent utiliser huit heures pour le calcul et 16 heures uniquement pour effectuer ces tâches d'E/S en sauvegardant ces états intermédiaires.

Plutôt que d'effectuer des entrées/sorties (IO), MemVerge utilise un instantané après chaque étape et le capture sur une mémoire persistante Optane. Au lieu de 16 heures d'entrées/sorties, ce processus peut prendre une minute. C'est la nouvelle façon de faire des entrées/sorties ; vous n'avez pas besoin de réaliser la sérialisation ou la désérialisation pour ouvrir un fichier, lire, écrire, etc. Tout ce que vous avez à faire est de prendre un instantané.

Bien que cela nécessite beaucoup de mémoire, avec MemVerge, la mémoire est plus grande qu'auparavant et elle continuera à s'améliorer à mesure qu'Intel innove. Deux autres fonctionnalités aident à résoudre ce problème. Premièrement, des instantanés sont pris périodiquement sans créer de copies complètes de l'état de la mémoire ; ils ne sont que des pages de changement, ce qui minimise l'utilisation supplémentaire de la mémoire. Deuxièmement, MemVerge peut conserver jusqu'à 256 couches d'instantanés en mémoire, mais en même temps, vous pouvez exporter ces instantanés vers des serveurs de stockage ou vos propres systèmes de stockage. Cela se fait sans interruption ni impact sur votre application en cours d'exécution.

Essentiellement, vous créez un enregistreur de mémoire car au lieu de ne faire fonctionner votre application que vers l'avant, vous pouvez aussi la faire fonctionner vers l'arrière presque instantanément. C'est une nouvelle expérience.

La génomique n'est que le premier exemple parmi de nombreuses charges de travail qui pourraient bénéficier de cette technologie.

Puisque MemVerge est une startup, ils se concentrent étroitement sur trois domaines : les fournisseurs de services cloud, les applications financières à grande mémoire, les travaux de génomique et de pipeline de science des données connexes. Ces cas d'utilisation démontrent tous la puissance de la combinaison de la mémoire persistante Optane et du logiciel MemVerge.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
