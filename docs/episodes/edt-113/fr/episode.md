---
layout: posts
title: "Opérationnaliser la gestion des processus métier"
number: 113
permalink: episode-EDT113-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 113
tags:
    - bpm
    - automation
    - compute
    - management
    - camunda
    - capitalbpm
    - rpa

date: Thu Nov 17 2022 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Max Young

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, Darren discute de la gestion des processus métier et de l'automatisation avec Max Young, PDG de Capital BPM."
video: "https://youtu.be/bIJRyJxSGvE"
description: "Dans cet épisode, Darren discute de la gestion des processus métier et de l'automatisation avec Max Young, PDG de Capital BPM."
---

<div>
{% include transistor.html id="a05071ff" title="#113 Operationalizing Business Process Management" %}

{% include youtube.html id="bIJRyJxSGvE" %}
</div>

---

Max se qualifie lui-même de « chercheur raté » car il a abandonné son doctorat en mathématiques, spécialisé en topologie, pour étudier l'informatique. Il a obtenu une licence et une maîtrise, se spécialisant en intelligence artificielle. Ensuite, il a travaillé dans la gestion des processus métiers (BPM), commençant chez Lombardi, qui a été vendue à IBM, ainsi que chez d'autres fournisseurs dans le domaine du BPM. Il y a dix ans, il a pris un risque avec des amis et a fondé Capital BPM.

Max a choisi de se concentrer sur BPM pour deux raisons. Tout d'abord, il a toujours aimé les algorithmes car ils offrent une approche systématique pour résoudre des problèmes complexes. Les algorithmes lui procurent un sentiment de sécurité lors de situations folles.

Deuxièmement, il aime ce qu'on appelle les transformations en mathématiques. Par exemple, si vous avez une forme laide avec de nombreux coins difficiles à mesurer, vous la transformeriez en, disons, un rectangle, puis appliqueriez toutes les théories autour de la mesure des rectangles, la mesureriez et traduiriez la réponse à la forme originale. De la même manière, en BPM, vous pouvez prendre un problème dans un domaine où il peut être facilement résolu. Au lieu de faire d'un problème un micro-problème avec des déclarations F imbriquées compliquées qui sont difficiles à maintenir, vous pouvez le transformer en un problème aplati que vous pouvez voir et attaquer par étapes.

Ce processus consiste à zoomer sur Google Maps pour voir où vous avez besoin d'une concentration accrue, puis à zoomer à nouveau pour voir comment cela s'inscrit dans la vision d'ensemble. Le cœur de l'architecture d'entreprise réside dans la capacité de zoomer avant et arrière pour s'assurer que la ligne que vous tracez reste valide.

Max compare son amour pour le BPM dans le domaine de l'informatique aux arts martiaux, qu'il étudie depuis l'âge de six ans. Il affirme qu'il y a des arts martiaux pratiques, tels que le judo et le muay thaï, et des arts plus ésotériques, comme le tai-chi. Il aime les arts martiaux pragmatiques car ils résolvent des problèmes concrets. Il ne se bat plus à mains nues, mais, par exemple, ses compétences en judo lui sont utiles lorsqu'il glisse et tombe. Le BPM est pragmatique car il est la clé pour résoudre un problème commercial. Il croit qu'il y a une véritable valeur à utiliser toutes les théories qu'il a apprises à l'école et à les rendre subordonnées dans la création d'une plateforme commerciale qui permet aux gens de résoudre de manière plus efficace et constante les problèmes quotidiens, offrant ainsi aux individus et à la communauté plus d'opportunités.

C'est un domaine de l'informatique qui peut être lié à la façon dont les gens travaillent. Les choses peuvent être automatisées pour réduire la quantité de tâches répétitives et monotones afin qu'ils puissent se concentrer sur des choses plus importantes. Les gens craignent que l'automatisation ne dévore les emplois de tous les jours, mais en réalité, elle élimine les corvées et libère du temps pour un travail plus critique. Elle peut également créer des emplois. Les mêmes craintes existaient lorsque Ford a introduit les ordinateurs automatisés, mais ils ont finalement créé de nouvelles industries. Le BPM devrait être pleinement adopté plutôt que redouté.

La meilleure façon de commencer à opérationnaliser les processus est d'utiliser la méthode scientifique pour articuler le problème. En gestion des processus d'affaires, vous dessinez des schémas à l'aide d'un modélisateur de processus d'affaires. Max aime le modélisateur de processus d'affaires Camunda, qui est téléchargeable gratuitement avec juste un peu de notation à apprendre. Dans le programme de modélisation, vous dessinez des étapes qui articulent les différents systèmes et comment ils fonctionnent.

Dans un processus de recrutement, par exemple, vous commencez par un groupe qui définit les parties intéressées, comme le candidat, le responsable informatique et les ressources humaines. À l'intérieur de ce groupe se trouvent des "couloirs de nage", chaque couloir contenant un acteur capable de réaliser des actions. Vous pouvez les considérer comme des groupes LDAP. Ensuite, vous commencez à mettre en place votre processus métier : d'abord, un candidat postule pour le poste, ensuite les ressources humaines peuvent procéder à une évaluation, puis un responsable informatique effectuera une revue. Les décisions approuvées sont notées tout au long du processus. Une fois que les étapes principales et significatives sont intégrées dans le modèle, vous pouvez entrer dans les détails des processus plus élaborés et nuancés, comme un entretien divisé en deux, l'un pour les aspects techniques et l'autre pour la gestion.

Traduisez ce qui suit en français : ![image BMP](./bpm.png)

Le programme de modélisation génère du XML en arrière-plan pendant que vous dessinez tous ces diagrammes. Ce XML est interprétable en temps d'exécution par les machines BPM ; pendant que vous dessinez le diagramme, il peut devenir un processus exécutable.

L'élément humain est toujours présent dans cette boucle, mais l'utilisation d'un système BPM comme celui-ci permet de déterminer clairement les processus pouvant être automatisés, tels que la vérification de l'historique professionnel ou l'exécution d'une vérification des antécédents criminels. Ce modèle permet également la flexibilité et l'expérimentation. Par exemple, supposons que l'expert en la matière déclare qu'il ne souhaite pas exécuter simultanément une vérification d'emploi et une vérification des antécédents criminels, car cette dernière est coûteuse et la première est bon marché. Dans ce cas, il est facile de faire passer la vérification d'emploi en premier et d'exiger une décision avant la vérification des antécédents criminels. Au fur et à mesure des modifications apportées, vous établissez un consensus et une histoire réelle qui deviennent de plus en plus véridiques à mesure que vous expérimentez.

Bien que l'outil ressemble à un outil de dessin, il s'agit en réalité d'un outil de modélisation qui vous permet de dessiner des images et de les simuler en arrière-plan. Vous pouvez donc exécuter ce processus et voir tous les différents points de décision et où ils mènent. Le modèle vous indiquera également que vous ne pouvez pas le déployer si vous n'avez pas fait quelque chose correctement.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
