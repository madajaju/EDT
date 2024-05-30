---
layout: posts
title: "Les avantages des bases de données graphiques"
number: 97
permalink: episode-EDT97-fr
lang: fr
nav_exclude: true
nav_order: 97
tags:
    - datavisualization
    - datamodeling
    - cybersecurity
    - dataanalysis
    - datamanagement
    - multicloud
    - zerotrust

date: Wed Jul 27 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Madi Ahmadi

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Architecte principal des solutions, Intel, et Dr. Hadi Ahmadi, Directeur de l'architecture des solutions chez Katana Graph, discutent des avantages des bases de données graphiques."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Architecte principal des solutions, Intel, et Dr. Hadi Ahmadi, Directeur de l'architecture des solutions chez Katana Graph, discutent des avantages des bases de données graphiques."
---

<div>
{% include transistor.html id="c81eaabc" title="#97 The Benefits of Graph Databses" %}

{% include youtube.html id="url" %}
</div>

---

Hadi a obtenu son doctorat en informatique en 2012 et a effectué des recherches en cryptographie et en sécurité des informations réseau. Il a travaillé dans le milieu universitaire pendant quelques années, puis est passé à l'industrie en se concentrant sur différents aspects des solutions de sécurité, notamment la gestion des identités et des accès. En 2015, il a commencé à en apprendre davantage sur la modélisation de graphes et a réalisé comment la modélisation de données par les graphes pouvait résoudre certains des problèmes passionnants et complexes dans son domaine d'étude.

Dans les bases de données graphiques, un graphe ne signifie pas des tableaux ou des interfaces graphiques, mais une façon de structurer les données au niveau du stockage afin qu'elles puissent être récupérées et traitées pour résoudre des problèmes complexes, surtout si les données sont interconnectées. Le graphe offre de nombreux avantages et peut compléter les structures de données ou les solutions existantes, telles que les modèles de bases de données relationnelles ou le stockage d'objets.

La principale différence entre les bases de données graphiques et relationnelles est que, bien que les deux concernent les relations, les bases de données relationnelles déplacent les relations vers le niveau métadonnées et schéma, tandis que les bases de données graphiques se basent sur les relations basées sur les données. En d'autres termes, dans les bases de données relationnelles, vous reliez les colonnes des tables. Pour introduire une nouvelle relation, vous devez modifier votre schéma. Le graphique offre une infrastructure sans schéma où vous pouvez ajouter plus de structure à vos données tout en restant flexible pour pouvoir ingérer n'importe quelle donnée non structurée.

La moitié des données mondiales a été créée au cours des dernières années, collectées à partir de nombreuses sources différentes, mais moins de deux pour cent ont été analysées, dont la plupart sont des données structurées. Les données sont collectées, mais les informations sont insuffisantes pour être traitées. Il doit exister un moyen d'ajouter de manière flexible une structure dynamique qui puisse changer si vous êtes incertain mais bénéficier quand même du calcul optimisé avancé. Le graphique est un excellent moyen de le faire.

Si vous essayez de travailler avec des données corrélées ou interconnectées, par opposition aux données isolées avec des valeurs critiques, un graphique offrira des avantages en raison des relations. Presque toutes les industries peuvent en bénéficier car les données non structurées proviennent généralement de diverses sources et de natures multiples.

Un exemple serait les solutions de cybersécurité. Il y a des données provenant des journaux et des trains d'audit des environnements réseau, de l'infrastructure cloud, des hôtes de terminaux, etc. Les données proviennent de différentes sources, telles que des répertoires ou des fichiers journaux bruts. Il serait bénéfique de corréler les données, par exemple, car généralement, une identité ou un utilisateur qui pourrait faire partie d'un journal du système de gestion des identités pourrait être le même utilisateur qui déclenche un processus sur un ordinateur portable, tel que le téléchargement d'une pièce jointe à partir d'un e-mail. En analysant ces patterns, vous pouvez utiliser ce lien de corrélation pour obtenir plus d'informations. En d'autres termes, peu importe comment ou d'où proviennent les données, mais fournir ce lien conduit à apprendre sur chaque enregistrement en les examinant dans leur contexte.

Un avantage est qu'il n'y a pas de problème de transformation des données, ce qui augmente la vitesse. Cela réduit également les exigences de stockage.

Les graphes et les structures de base de données relationnelles sont généralement compatibles. Voici un exemple simpliste de réseau social : Les types de nœuds dans le graphe ressemblent à des tables. Ainsi, vous pouvez avoir un nœud appelé "personne" et ensuite une table appelée "personne". Vous pouvez avoir un autre nœud appelé "lieu" et connecter la personne à un lieu spécifique. Vous pouvez avoir une table appelée "lieu" et les connecter à des clés étrangères. Ensuite, vous avez cette relation d'amis. Un ami d'une personne dans un modèle de grappe est simplement une boucle de rétroaction. Cela vous permettrait de modéliser ce schéma. Dans une base de données relationnelle, vous devriez créer une nouvelle table appelée "amis" et ensuite la connecter. Ainsi, même au niveau du schéma, vous ajoutez de la redondance et une certaine structure par-dessus. Et si vous avez besoin d'ajouter un nouveau concept d'amitié ou de relation, vous devez créer de nouvelles tables, créant ainsi de la redondance et de la complexité.

D'autres avantages des graphiques par rapport aux bases de données relationnelles sont les graphiques basés sur des éléments, l'IA graphique et l'idée de modéliser maintenant les données pour trouver des motifs en fonction de la façon dont les données sont connectées. Vous pouvez réduire l'ensemble de données que vous recherchez ou analysez en raison des relations. Cela utilise la puissance des données pour renforcer encore davantage les données. Les algorithmes dans une base de données graphique sont très différents de ceux des bases de données relationnelles et sont mieux optimisés pour accéder plus rapidement à de grands ensembles de données.

L'un des inconvénients d'une base de données graphes est qu'elle est difficile à mettre à l'échelle. Dans une base de données relationnelle, il est facile de diviser une table et de la répartir sur deux serveurs, par exemple. Les premières bases de données graphes ont été conçues comme une solution unique en son genre, donc si vous vouliez accroître l'échelle, vous devriez ajouter davantage de mémoire et de CPU.

Maintenant, si vous souhaitez travailler avec des pétaoctets de données sous forme de graphiques, vous voulez mettre à l'échelle verticalement autant que possible avec des technologies telles que les machines virtuelles Intel, mais vous voulez également mettre à l'échelle horizontalement. De nouvelles technologies, comme la plateforme graphique de Katana, aident à résoudre ce problème d'échelle grâce au calcul distribué. Vous pouvez diviser ou découper le problème en morceaux et faire travailler chacun sur une petite partie du graphique pour obtenir une solution finale. Katana a démontré que vous pouviez utiliser 256 machines ou plus pour traiter les données, vous permettant ainsi d'obtenir rapidement des dizaines de téraoctets de données en mémoire.

Une base de données à graphes nécessite un écosystème similaire à celui d'une base de données relationnelle. Le graphe est un peu plus dynamique et flexible. Si vous souhaitez passer à une plateforme d'analyse de graphe, qui va au-delà des simples bases de données opérationnelles, vous pouvez profiter d'autres fonctionnalités telles que le data warehousing et les capacités de data lake. Le stockage et le calcul seraient séparés, ce qui signifie que les technologies de traitement de graphes qui effectuent toutes les opérations en mémoire n'ont pas besoin de dépendre du stockage attaché aux services, vous permettant ainsi d'avoir un service de stockage différent.

Katana utilise le stockage d'objets, puis lorsqu'ils veulent effectuer des calculs, ils chargent de manière opportuniste ce qu'ils veulent du graphe dans la mémoire distribuée de toutes les machines. Les données retournent de manière immuable vers le stockage, donc si, par exemple, vous détruisez l'ensemble du cluster, vous ne perdez rien. Toutes les données sont déjà présentes et entreposées. Les bases de données relationnelles sont un domaine plus mature, mais les bases de données graphiques bénéficient d'un soutien croissant dans l'écosystème.

Sur la base des huit années d'expérience de Hadi sur le terrain à parler aux parties prenantes et aux clients, tous voient immédiatement les avantages des bases de données graphiques. Les limitations pourraient être qu'elles ne peuvent pas suivre l'évolutivité ou les dépenses. Le travail de Katana et d'autres sociétés de technologie graphique vise à faire des graphiques un outil plus courant que les clients peuvent utiliser pour diverses tâches et moins un luxe dans la base de données. Par exemple, Katana fournit aux clients des solutions de gestion des identités basées sur les graphiques et de gestion des données massives.

De bons cas d'utilisation des graphes seraient la création précoce de solutions de graphes spécifiques à certaines entreprises telles que LinkedIn et Facebook, qui possèdent leurs graphes sociaux. Aujourd'hui, une application naturelle se trouve dans le domaine du commerce électronique pour les moteurs de recommandation. Trouver des liens entre les clients, les comptes, les achats et d'autres comportements permettra de proposer immédiatement de meilleures recommandations aux acheteurs, d'une manière qui ne peut être réalisée avec des requêtes de base de données relationnelle.

Pour en savoir plus sur Katana ou comment contacter Hadi, rendez-vous sur embracingdigital.org.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
