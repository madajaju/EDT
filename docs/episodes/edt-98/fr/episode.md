---
layout: posts
title: "L'Émergence du Réseau de Données Mondial"
number: 98
permalink: episode-EDT98-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 98
tags:
    - dataarchitecture
    - datamanagement
    - data
    - technology
    - cloud
    - globaldatanetwork
    - macrometa
    - multicloud
    - datamesh

date: Wed Aug 03 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Chetan Venkatesh

img: thumbnail.jpeg
image: thumbnail.jpeg
summary: "Dans cet épisode, Darren se remémore avec Chetan Venkatesh, PDG de MacroMeta. Venkatesh a une longue expérience de gestion des données depuis les premiers jours du calcul en grille et a lancé MacroMeta pour faire face à la gestion des données à travers les centres de données, le cloud et les sites dispersés à travers le monde."
video: "https://youtu.be/url"
description: "Dans cet épisode, Darren se remémore avec Chetan Venkatesh, PDG de MacroMeta. Venkatesh a une longue expérience de gestion des données depuis les premiers jours du calcul en grille et a lancé MacroMeta pour faire face à la gestion des données à travers les centres de données, le cloud et les sites dispersés à travers le monde."
---

<div>
{% include transistor.html id="140001aa" title="#98 The Emergence of the Global Data Network" %}

{% include youtube.html id="url" %}
</div>

---

Chetan est un ingénieur devenu spécialiste des opérations et des start-up (Macrometa étant sa quatrième start-up). Il affirme qu'il travaille sur le même problème de gestion des données distribuées et de réduction de la latence depuis vingt ans.

Les données ne sont plus seulement dans un centre de données mais partout : dans le cloud, en périphérie et sur les ordinateurs portables des gens. Gérer efficacement tout cela est un défi.

Il y a environ dix ans, Marc Andreessen a déclaré que le logiciel dévore le monde. À ce stade, le logiciel a tout dévoré et a transformé toutes sortes de contraintes et de barrières en opportunités. L'informatique multitâche est l'une des barrières qui s'est effondrée avec le cloud. Vous pouvez créer des applications qui s'exécutent simultanément dans différentes parties du monde. Un mouvement de développeurs se déroule en parallèle pour rendre tout aussi simple qu'il doit l'être pour la personne moyenne en informatique. Donc d'un côté, il y a une évolution technologique sophistiquée et de l'autre côté, un mouvement de simplicité.

Les architectures telles que Jamstack permettent à l'informatique distribuée de se produire à grande échelle avec une grande simplicité, mais il reste encore une vaste frontière à découvrir et à conquérir. L'opportunité d'une ruée vers des terres étendues se trouve désormais au bord. La gestion des données distribuées et le bord (ou l'edge) sont deux aspects d'une même réalité.

Un gros problème est que certains développements de logiciels deviennent des fonctionnalités en tant que service qui ignorent les données. De plus, il y a une perception selon laquelle les données sont omniprésentes, mais une grande partie de la périphérie n'est pas toujours connectée. Il n'y a aucune garantie qu'une application ait accès à toutes les données. Les réseaux ne sont plus centralisés ; la notion de microservices sans état est venue du mouvement Cloud. Ce caractère sans état peut devenir un énorme obstacle. C'est pourquoi des architectures telles que Jamstack et les fonctions sans serveur considèrent les données comme un problème périphérique plutôt que fondamental.

Les structures de données sans état sont simples. Vous avez un emplacement spécifique où vous enregistrez vos données, puis revenez à l'état sans état. Les structures de données étatiques nécessitent des infrastructures solides avec des structures de données plus complexes car elles prennent en charge l'application pendant qu'elle émet continuellement un état. Alors que nous progressons vers un monde de données en streaming en temps réel où l'état est constamment émis quelque part dans l'écosystème, l'infrastructure devient complexe et difficile à gérer car elle n'est pas conçue. C'est là que Macrometa intervient. Ils ont créé une nouvelle plateforme pour cet état actif continu en temps réel à l'échelle des exaoctets.

Traiter ces données en streaming de manière active et dynamique représente un changement significatif pour de nombreux développeurs de logiciels. Depuis l'apparition des premières infrastructures cloud, puis des plateformes de big data, puis du data-as-a-service, l'industrie s'est efforcée d'ingérer, de traiter et d'analyser efficacement les données historiques. Mais nous vivons désormais dans un monde où les données sont sur un spectre plutôt que d'exister en tant que monolithe. Une qualité nouvellement appréciée est que les données ont des connaissances et une valeur périssables. Certaines données ont une durée de vie limitée. Les échelles de temps actuelles sont trop grandes pour utiliser les données de manière efficiente ; nous avons besoin de systèmes capables de communiquer efficacement en moins de 50 millisecondes et de réduire la surcharge cognitive pour les personnes qui interagissent avec ces systèmes.

La plupart des gens comprennent mal la latence : ce n'est pas quelque chose qui vous apporte de la joie, mais son absence vous contrarie. Par exemple, combien de temps une personne tolérera-t-elle une vidéo YouTube saccadée ou une diffusion lente sur Netflix ? Cinquante millisecondes pour une machine, c'est une éternité. Une machine peut accomplir un grand nombre de tâches en 50 millisecondes, donc la latence devient essentielle, surtout lorsqu'on considère la valeur périssable des données.

Un autre problème réside désormais dans le fait que, grâce au cloud, à l'interconnectivité et au système mondial, les start-ups deviennent des entreprises multinationales et les données deviennent sensibles à leur emplacement. Certaines données sont réglementées, certaines sont des données à caractère personnel qui ne peuvent pas être extraites dans certaines juridictions, etc. Un excellent exemple de ce problème est la réticence des Européens à ce que leurs données quittent leurs frontières, alors que la majeure partie de l'infrastructure cloud et des applications sont construites aux États-Unis.

Un troisième problème est que les données se trouvent à de nombreux endroits ; il existe des limites entre les systèmes, à la fois physiques et logiques. Les données peuvent être essentiellement statiques et rigides, nous avons donc besoin d'une infrastructure qui permettra aux données de se connecter et de circuler en temps réel avec cohérence et garanties d'ordonnancement. Plus important encore, cela crée une fongibilité pour être consommée rapidement de manières diverses.

Un problème supplémentaire est que les données contiennent beaucoup de bruit et il n'est pas logique de transférer des distances intercontinentales, en payant des frais de transfert, uniquement pour en perdre la majeure partie. Les données perdent de la valeur lorsqu'elles arrivent à leur destination. Il y a également un taux de rafraîchissement élevé, donc les systèmes travaillent souvent avec des données obsolètes.

Nous avons besoin de nouvelles méthodes pour résoudre ces types de problèmes de données distribuées. Chetan croit que les dix prochaines années appartiendront à ce domaine des sciences des données.

La première génération de solutions de données distribuées utilisait la transformation opérationnelle. Google Docs en est un excellent exemple. Cependant, la transformation opérationnelle nécessite une centralisation du contrôle, ce qui ne permet pas une bonne mise à l'échelle. Google a trouvé un moyen de mettre à l'échelle, mais cela ne s'applique pas aux développeurs moyens. Il n'y a peut-être que cinq entreprises dans le monde qui le comprennent à cette échelle, et une grande partie de ces connaissances est enfermée dans ces entreprises et leur technologie propriétaire.

Macrometa travaille avec la communauté et le milieu universitaire pour essayer de créer un nouveau corpus de connaissances, bien plus efficient que ces modèles centralisés, de manière totalement distributive.

Actuellement, il existe des infrastructures disponibles qui sont excellentes pour résoudre les problèmes historiques de type registre. Ils cherchent à se tourner vers des données en temps réel, mais leurs architectures ne sont pas fondamentalement faites pour cela. Ces nouveaux problèmes liés à la sensibilité temporelle et spatiale des données, à la valeur d'actionnement, aux taux de rafraîchissement, à la gravité des données et aux interférences de données nécessitent une nouvelle approche, une nouvelle infrastructure. Chetan appelle cela un système d'interaction plutôt qu'un système de registre car les systèmes d'interaction sont des réseaux de données, proches de l'endroit où vous créez et consommez des données, qui les filtrent et les enrichissent ensuite en ligne pour les acheminer vers leurs destinataires prévus. C'est une fonction de mise en réseau.

Macrometa a construit des processeurs réseau qui déplacent les données - un réseau mondial de données. Il s'agit d'un système d'API sans serveur où les développeurs consomment simplement des API pour résoudre des problèmes de données actives et opérationnelles en temps réel. Macrometa est un réseau mondial de données dans la topologie d'un CDM, mais avec une plateforme de données similaire à Snowflake qui produit des primitives de données riches pour traiter des valeurs de données actives et opérationnelles en temps réel.

Vous pouvez intégrer des outils analytiques dans le réseau mondial de données et déployer l'analytique près de l'endroit où les données sont générées ou nécessaires. Tout comme Amazon a fondamentalement modifié la distribution commerciale grâce à une architecture et des algorithmes de pointe pour maintenir les entrepôts locaux optimisés en vue des expéditions nocturnes, Macrometa a fait de même pour les données. Ils rapprochent les données et les calculs sur ces données, ce qui permet de les exécuter en millisecondes. Cette capacité à créer des boucles d'informations en temps réel est un puissant facilitateur. Par exemple, les petits détaillants peuvent utiliser les stocks de leurs magasins locaux dans leur commerce électronique sans se surendetter pour concurrencer Amazon.

Un excellent cas d'utilisation de la plateforme de Macrometa se trouve dans la cybersécurité. Certains clients remplacent leurs modèles de données centralisés afin de profiter de la latence réduite, leur permettant de bloquer les menaces en temps réel.

Le réseau mondial de données est une couche de transformation entre vos sources et destinataires de données avec les consommateurs et éditeurs. Il est composé de trois éléments technologiques. Le premier est le maillage mondial des données, qui est la couche d'intégration pour les données. Le deuxième est un tissu informatique mondial qui vous permet d'orchestrer les données et la logique métier sous forme de fonctions et de conteneurs à l'échelle mondiale. Le troisième élément est un tissu mondial de confidentialité : comment sécuriser les données et se conformer aux différents régimes et réglementations en matière de données qui affectent la transmission ou le stockage de vos données.

Le maillage mondial des données est une manière d'intégrer rapidement et facilement des données provenant de différents systèmes, qu'ils soient physiques ou logiques. Tout est incorporé et circule avec cohérence et garanties d'ordre. La valeur la plus significative de ce maillage est qu'il rend les données fongibles et consommables en vous permettant de mettre rapidement des API sur les données. Cela peut être fait en quelques heures, comparé aux mois habituellement nécessaires. Le réseau mondial de données est conçu pour des milliards d'événements par seconde, ce qui lui permet de déplacer des données à grande échelle avec une réduction de coûts de 90% par rapport au cloud.

Le tissu informatique mondial apporte une logique métier et une orchestration pour rapprocher le traitement de vos données de leur origine ou de leur consommation. C'est le schéma anti-cloud. Macrometa déplacera de manière chirurgicale et dynamique ces microservices qui doivent se conformer aux réglementations sur les données, par exemple, aux bons endroits pour l'exécution.

La dernière pièce est la protection des données. Il s'agit d'un problème complexe et les réponses que nous avons aujourd'hui, par exemple, l'ouverture d'un silo séparé pour cette géographie spécifique afin de respecter les particularités à chaque fois que vous lancez une instance sur votre application, ne sont pas bonnes. La plateforme de Macrometa dispose d'un réseau de données qui intègre déjà et fait circuler vos données à travers toutes les frontières, ainsi que des fonctions de calcul et d'ingestion de données sans limites. Maintenant, elle peut créer des frontières logiques et assigner des données à des régions spécifiques pour les protéger. Ils peuvent définir des affinités et des politiques concernant la façon dont les données vivent et se répliquent dans une région, par exemple s'il faut les anonymiser lorsqu'elles sont copiées hors de la région.

La technologie de Macrometa permet des cas d'utilisation impossibles à réaliser dans le cloud car les infrastructures cloud sont trop éloignées ou trop lentes. Macrometa a mis en place une infrastructure pour résoudre les problèmes de données en temps réel et les transformer en opportunités plutôt qu'en défis. Pour en savoir plus sur Macrometa, rendez-vous sur macrometa.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
