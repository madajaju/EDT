---
layout: posts
title: "Programmation hétérogène avec OneAPI"
number: 81
permalink: episode-EDT81-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 81
tags:
    - cpu
    - fpga
    - gpu
    - heterogeneousprogramming
    - npu
    - oneapi
    - compute
    - technology
    - process

date: Wed Mar 23 2022 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - James Reinders

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, architecte en chef des solutions chez Intel, discute des capacités et de l'avenir de OneAPI, un modèle de programmation unifié intersectoriel, ouvert et basé sur des normes, qui offre une expérience de développement commune sur différentes architectures d'accélérateurs, avec James Reinders, évangéliste en chef de OneAPI chez Intel."
video: "https://youtu.be/YDa_EeOzFzc"
description: "Darren Pulsipher, architecte en chef des solutions chez Intel, discute des capacités et de l'avenir de OneAPI, un modèle de programmation unifié intersectoriel, ouvert et basé sur des normes, qui offre une expérience de développement commune sur différentes architectures d'accélérateurs, avec James Reinders, évangéliste en chef de OneAPI chez Intel."
---

<div>
{% include transistor.html id="28fb34d4" title="#81 Heterogeneous Programming with OneAPI" %}

{% include youtube.html id="YDa_EeOzFzc" %}
</div>

---

L'objectif de oneAPI est d'aider à abstraire l'énorme diversité qui arrive en matière de matériel, afin que les ingénieurs en logiciel puissent en tirer parti plus haut dans la pile et tirer le meilleur parti du matériel. James, un ingénieur logiciel qui travaille également en étroite collaboration avec le matériel, aime ce que oneAPI peut apporter compte tenu de la tendance à la multiplication des traitements hétérogènes.

Le mot hétérogène signifie essentiellement qu'il existe différents dispositifs dans un système qui peuvent effectuer des calculs, mais ils n'exécutent pas le même ensemble d'instructions. Par exemple, le CPU a une façon d'exécuter les instructions et le GPU a une façon différente. Les FPGA, les autres ASIC et les appareils spécialisés ont chacun des façons différentes d'être programmés. L'objectif est de tirer parti de tous ces dispositifs.

John Hennessy et David Patterson, leaders dans le domaine de l'architecture informatique, l'ont qualifié de nouvel âge d'or de l'architecture informatique. Pour les architectes informatiques, c'est une période incroyable pour concevoir toutes sortes de dispositifs spécialisés afin de réaliser des performances accrues dans des domaines spécifiques, mais pour les programmeurs, cela peut être difficile, voire effrayant en raison de la complexité. C'est ici que l'initiative oneAPI et les produits oneAPI interviennent.

Le nom, oneAPI, est à la fois une initiative avec une spécification et une mise en œuvre. L'initiative est un concept simple : les développeurs de logiciels devraient avoir la liberté d'utiliser n'importe quel appareil qu'ils souhaitent avec des performances optimales, et leur codage devrait préserver sa valeur ; ils ne devraient pas avoir à réécrire pour chaque nouvel appareil. Ces qualités peuvent être appliquées aux compilateurs, bibliothèques, débogueurs et tout type d'outil.

Une grande quantité de logiciels pour mettre en œuvre certaines spécifications ont été rendus open source. Une grande partie de ceux-ci provient d'Intel, mais Intel les met également à disposition sous forme de kits d'outils téléchargeables, déjà préconstruits et prêts à l'emploi pour prendre en charge le matériel Intel. D'autres fournisseurs qui participent à la création de parties de la oneAPI ont leurs propres implémentations. Ainsi, tous se réunissent sur les spécifications, mais chacun crée son propre support pour son matériel dans un format multi-fournisseur ouvert.

L'objectif principal est d'écrire du code une fois et qu'il fonctionne bien partout. Cependant, c'est un problème complexe qui nécessitera quelques réglages de performance. Par exemple, si un algorithme fonctionne bien sur un GPU, il fonctionnera également sur presque n'importe quel autre GPU. Si vous passez l'algorithme à une puce FPGA, vous pouvez maximiser la réutilisation de votre programme, mais vous avez la possibilité de recoder certaines parties de l'algorithme pour qu'il fonctionne également bien. C'est une approche complexe qui vous donne la possibilité de tirer parti de n'importe quel matériel avec des degrés d'écriture isolée, idéalement très distincts.

Vous pouvez construire un code unique pour différents appareils. Il existe même des approches d'exécution plus sophistiquées qui vous permettent de détecter ce qui est présent et d'exécuter différents morceaux de code, de sorte que vous pouvez réellement avoir un code source commun qui décide dynamiquement. Vous pouvez appliquer un programme de déploiement et il peut déterminer ce qui se trouve sur votre machine et l'utiliser de manière dynamique plutôt que de demander à l'utilisateur d'exécuter une binaire différente en fonction de la machine sur laquelle vous vous trouvez.

C'est excitant car, pendant longtemps, les ingénieurs utilisaient une pile de logiciels qui était la meilleure pour leur machine. De nos jours, ils veulent pouvoir compiler un programme qui peut utiliser des dispositifs de plusieurs fabricants. Le programme doit s'adapter à cela. Pour que cela fonctionne, le compilateur doit être capable de générer du code pour ces différents dispositifs de manière fiable. C'est là que l'ouverture entre en jeu.

Certains soutiendront qu'un système fermé offrira de meilleures performances car les bibliothèques et le langage sont adaptés spécifiquement aux capacités matérielles. Mais la question est de savoir comment obtenir le meilleur des deux mondes ? Par exemple, s'il existe une implémentation spécifique au fournisseur pour une bibliothèque mathématique, il peut y avoir un programme commun. Une grande partie de oneAPI ne consiste pas à réinventer le monde entier, mais à l'organiser de manière à tirer parti du meilleur sur chaque plateforme possible.

OneAPI a les capacités de déplacer la mémoire et de déplacer les données. Différents modèles de programmation reposent sur OneAPI et c'est à vous de décider dans quelle mesure vous souhaitez vous impliquer dans la gestion de la mémoire. Déplacer les données est coûteux et consomme de l'énergie, donc vous ne pouvez pas y échapper, mais OneAPI vous donne les outils pour gérer cela en interrogeant le système et en permettant à votre programme d'effectuer les bonnes décisions dynamiques qui vous donneront les meilleures performances.

Intel a des décennies d'expérience dans la construction d'outils pour aider à l'optimisation et à la migration, et dispose de compilateurs hautement optimisants. V2 a contribué à faire évoluer l'industrie en rendant les compteurs matériels sur les processeurs la norme. Il existe toute une gamme d'autres outils d'analyse pour fournir des commentaires sur la structure de votre programme, trouver des blocages et des applications parallèles, et déterminer où vous devez ajouter des verrous. Intel met tous ces outils à disposition de manière "oneAPI" pour plus de polyvalence, au-delà de la simple utilisation d'un CPU.

Les premiers groupes à adopter oneAPI sont ceux travaillant dans le domaine de l'informatique haute performance (HPC). Avec l'explosion de nouvelles idées architecturales en informatique, il y aura une quantité encore plus grande de diversité et d'innovation dans ce domaine. Les codes complexes capables de résoudre les plus grands problèmes d'ingénierie au monde, ou par exemple, de résoudre des problèmes pharmaceutiques et d'évaluer de nouveaux médicaments, nécessitent les matériels les plus récents et performants. Ainsi, ce concept de portabilité des performances est en train de se diffuser dans les laboratoires nationaux, les universités et les centres de recherche.

L'HPC d'aujourd'hui sera les serveurs de département de demain, donc la capacité à utiliser différents matériels nécessite aux ingénieurs logiciels de planifier et de prêter attention à la portabilité du code, car le code ne meurt pas rapidement ; il dure pendant des décennies. Dans quelques années, les systèmes hétérogènes toucheront tout le monde, c'est donc le moment de s'informer à ce sujet.

Les ingénieurs en logiciel n'ont pas besoin de programmer en parallèle pour tirer parti de oneAPI. Il s'agit d'utiliser des éléments qui sont ouverts et compatibles avec plusieurs fournisseurs et plusieurs architectures. Même les ingénieurs qui sont au sommet de la pile doivent comprendre ce qui se trouve dans la pile et ce dont elle est capable en termes de portabilité et de portabilité des performances.

La communauté de l'IoT est un autre groupe qui a été en avance dans la programmation sur de multiples dispositifs de calcul hétérogènes et l'utilisation de différentes méthodes pour les gérer. Leurs capacités de calcul continuent de croître à mesure que la technologie avance. Ainsi, oneAPI s'applique ici et peut aider à formaliser ou standardiser les choses qui ont été d'abord innovées dans le monde de l'embarqué.

L'idée d'une seule API est passée d'une idée folle dont seules quelques personnes parlaient à une idée de plus en plus reconnue, faisant sens et résolvant les problèmes dans leur organisation.

L'endroit le plus simple pour en apprendre davantage sur l'initiative se trouve sur le site oneapi.io. Pour en savoir plus sur la mise en œuvre, cliquez sur l'onglet "Implémentation" pour obtenir un lien vers les mises en œuvre Intel. Vous pouvez y télécharger différents kits d'outils. Recherchez le "Intel dev cloud" pour essayer gratuitement les outils dans le cloud, y compris sur différents matériels. Le site oneapi.io propose également une variété de didacticiels et de ressources.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
