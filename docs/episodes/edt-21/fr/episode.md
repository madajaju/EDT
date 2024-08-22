---
layout: posts
title: "Contrôleur de mémoire défini par logiciel à grande capacité."
number: 21
permalink: episode-EDT21-fr
lang: fr
nav_exclude: true
nav_order: 21
tags:
    - datamanagement
    - memverge
    - dataanalytics
    - technology
    - process
    - people

date: 2020-09-14T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Charles Fan

img: thumbnail.png
image: thumbnail.png
summary: "Charles Fan, PDG de MemVerge, discute avec Darren Pulsipher, architecte en chef des solutions pour le secteur public chez Intel, de leur nouvelle technologie, les contrôleurs de mémoire définis par logiciel Big Memory. La technologie utilise la mémoire persistante Intel 3D XPoint Optane pour combler efficacement le fossé entre les architectures actuelles et futures, tout en offrant une plus grande capacité, des coûts plus bas et la persistance."
video: "https://youtu.be/url"
description: "Charles Fan, PDG de MemVerge, discute avec Darren Pulsipher, architecte en chef des solutions pour le secteur public chez Intel, de leur nouvelle technologie, les contrôleurs de mémoire définis par logiciel Big Memory. La technologie utilise la mémoire persistante Intel 3D XPoint Optane pour combler efficacement le fossé entre les architectures actuelles et futures, tout en offrant une plus grande capacité, des coûts plus bas et la persistance."
---

<div>
{% include transistor.html id="0458954e" title="#21 Big Memory Software Defined Memory Controller" %}

{% include youtube.html id="url" %}
</div>

---

La technologie de mémoire persistante 3D XPoint Optane d'Intel a révolutionné le jeu pour MemVerge, en leur permettant de développer une mémoire définie par logiciel, qu'ils décrivent comme exprimant la puissance d'Optane PMEM.

## La meilleure façon d'utiliser la PMEM

MemVerge a développé un logiciel de "Big Memory" pour répondre à une demande croissante des applications et des entreprises de traiter des données à un volume et une vitesse toujours plus élevés. Les applications en temps réel nécessitent davantage d'informations et d'actions instantanées à partir des données. Cela nécessite une nouvelle infrastructure centrée sur la mémoire pour répondre aux exigences de latence.

Les applications qui utilisent l'IA, l'apprentissage automatique ou l'analyse en temps réel de gros volumes de données utilisent généralement de la DRAM. Bien que la DRAM ait une latence de l'ordre de la nanoseconde et offre une capacité et une performance agréables, elle présente des limites physiques telles que la densité de mémoire et la quantité de mémoire pouvant être intégrée dans un serveur. Elle est également relativement coûteuse. Plus important encore, elle est volatile et, à mesure que les données deviennent plus importantes, la volatilité de la mémoire devient une contrainte. PMEM élimine ces goulots d'étranglement car il permet d'avoir une capacité plus importante, à moindre coût et avec une persistance.

Un avantage important est que les entreprises n'ont pas besoin de réécrire leurs applications pour utiliser la technologie de MemVerge. La société recherchait le meilleur moyen d'utiliser la persistance, et la réponse a été de fournir le moins de perturbations aux paradigmes de programmation. Lorsque Optane PMEM est devenu disponible en tant que facteur de forme de mémoire, cela a été une occasion de développer un logiciel précieux dans le cadre de la solution.

## Mémoire définie par logiciel

Il y a une transformation des données en cours. D'un point de vue matériel, au cours des dix prochaines années, il y aura peut-être un monde plus hétérogène, tant au niveau du calcul que des éléments de mémoire. Un nouveau tissu émergera, tel que CXL, qui connecte ces éléments. Le plus grand défi sera de faire bouger l'écosystème des applications. Une couche logicielle est nécessaire pour le décortiquer en morceaux consommables et composables qui facilitent la digestion de l'application. La mémoire définie par logiciel de MemVerge sera un composant important dans cet espace.

En attendant, MemVerge est en train de construire un pont entre les paradigmes actuels et futurs. La mémoire définie par logiciel de MemVerge apporte une SLA et une QLS dynamiques, une résilience, une persistance d'application, une efficacité et des performances. Ce sont toutes des choses que vous obtenez normalement avec un réseau de stockage défini par logiciel, mais vous pouvez maintenant les obtenir avec une mémoire à latence réduite et une vitesse extrêmement rapide.

## Performance sur la machine de mémoire

Deux importantes propriétés intellectuelles de MEMVerge sont en jeu. La première est une couche de virtualisation logicielle qui optimise les performances de la mémoire - la combinaison de PMEM et de DRAM - qui est très proche des performances de la DRAM. Chaque charge de travail a des profils de performance différents qui peuvent être affinés en mélangeant le PMEM et la DRAM à des ratios différents. Cet affinage du PMEM et de la DRAM donne aux développeurs d'applications et aux professionnels de l'informatique la possibilité d'ajuster la mémoire pour leurs applications, plutôt que pour l'ensemble de la machine. Au lieu de configurer les ratios existants de DRAM et de PMEM pour l'ensemble de la machine, vous pouvez désormais changer dynamiquement les ratios de PMEM et de DRAM en fonction de la charge de travail, et même dépasser les performances de la DRAM.

## Instantané ZeroIO (persistance des données de l'application)

Le deuxième de ces inventions est la capture d'écran de la mémoire ou ZeroIO. Cela permet de persister les applications transitoires existantes sans aucune réécriture. Il fonctionne par-dessus la mémoire définie par logiciel, qui est un service de mémoire volatile. Bien que le PMEM sous-jacent soit persistant, une mémoire volatile est nécessaire pour éviter de casser les applications existantes. La persistance est utilisée en fournissant à l'opérateur de l'application une interface utilisateur graphique (GUI) et une CI pour gérer les captures d'écran. Il y a une fonctionnalité de capture d'écran, vous pouvez donc capturer instantanément l'état d'une application entière. Ensuite, cette application peut être récupérée à tout moment dans le futur.

Cela rend votre mémoire non seulement persistante, mais également hautement disponible. Après un crash, vous pouvez effectuer une récupération instantanée. Si vous faites une erreur dans la base de données, vous pouvez revenir à un point précédent. Vous pouvez également cloner sur la base du snapshot, de sorte que vous pouvez créer de nouvelles instances d'une application sans répliquer physiquement la mémoire. Ainsi, vous pouvez créer de multiples processus indépendants avec des espaces mémoire logiques qui se mappent sur le même espace mémoire physique. Cela permet non seulement d'économiser de la mémoire, mais rend également le processus de création de clones instantané. Cette nouvelle technologie rend possibles de nombreuses choses qui étaient impossibles auparavant.

Il n'y a pas de changements architecturaux dans votre programme, mais lorsque vous devez persister quelque chose, vous pouvez simplement le prendre en instantané. Cela ne modifie pas le modèle de programmation familier, mais accélère considérablement les E/S. Une autre excellente fonctionnalité est que les instantanés deviennent des objets gérables, vous pouvez donc les transporter n'importe où où vous pouvez redémarrer l'application. La migration en direct peut également être activée dans certains scénarios.

## Cas d'utilisation activés par le futur

Pour un aperçu de l'avenir, MemVerge prévoit une version 2.0 dans environ un an qui comprendra un SDK. En plus de l'utiliser en tant que couche de mémoire transparente, les nouveaux développeurs d'applications auront une nouvelle façon de persister leurs données. Cela facilitera le développement d'applications, ainsi que la modification des applications existantes.

Avec le SDK, les développeurs pourront capturer des segments de la mémoire de l'application ou le profil de mémoire complet, donnant ainsi à l'application développeur la capacité de persister la mémoire avec les technologies encombrantes d'ORM ou de mappage de mémoire d'aujourd'hui.

En partenariat avec Intel, MemVerge lancera la première version de leur produit avec la mémoire définie par logiciel et les capacités instantanées pour une disponibilité générale le 23 septembre 2020.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
