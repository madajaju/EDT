---
layout: posts
title: "Base de données hyperscale de nouvelle génération - Aerospike"
number: 29
permalink: episode-EDT29-fr
lang: fr
nav_exclude: true
nav_order: 29
tags:
    - database
    - datamanagement
    - aerospike
    - iot
    - technology

date: 2020-11-12T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Tim Faulkes

img: thumbnail.png
image: thumbnail.png
summary: "Les bases de données montrent leur âge, mettant encore du temps à obtenir des résultats. Aerospike, avec l'aide de la technologie Intel (Optane), réalise une percée en termes de vitesse, de volume et de faible latence. Tim Faulkes, vice-président de l'architecture des solutions chez Aerospike, rejoint Darren Pulsipher, architecte principal des solutions chez Intel, pour discuter des avantages de la technologie Aerospike."
video: "https://youtu.be/url"
description: "Les bases de données montrent leur âge, mettant encore du temps à obtenir des résultats. Aerospike, avec l'aide de la technologie Intel (Optane), réalise une percée en termes de vitesse, de volume et de faible latence. Tim Faulkes, vice-président de l'architecture des solutions chez Aerospike, rejoint Darren Pulsipher, architecte principal des solutions chez Intel, pour discuter des avantages de la technologie Aerospike."
---

<div>
{% include transistor.html id="1280ea95" title="#29 Next-Generation Hyperscale Database - Aerospike" %}

{% include youtube.html id="url" %}
</div>

---

## Base de données hyperscale de nouvelle génération

Les bases de données montrent leur ancienneté, prenant toujours du temps pour obtenir des résultats. Aerospike, avec l'aide de la technologie Intel, fait une percée en termes de vitesse, de volume et de faible latence. Tim Faulkes, Vice-Président de l'Architecture des Solutions chez Aerospike, rejoint Darren dans cet épisode pour discuter des avantages de leur technologie.

## NoSQL - Un marché émergent avec plusieurs technologies

Aerospike a été créé en 2009, avec les premières mises en œuvre de production en 2011. Les cofondateurs étaient conscients des défis à venir. Ils ont construit l'architecture à partir de zéro en prévoyant qu'elle serait fiable, à l'échelle de l'entreprise, ne jamais tomber en panne et capable de gérer des ingestions massives de données. L'architecture d'Aerospike reposait fortement sur les SSD, qu'il s'agisse de lecteurs NVMe dans les incantations modernes ou de lecteurs SATA SAS. Les deux étaient encore à leurs balbutiements, donc les fondateurs étaient visionnaires quant à l'évolution du marché. Ils comptaient sur ces dispositifs pour obtenir de la vitesse, c'est pourquoi la technologie Intel était si importante. Depuis lors, d'autres technologies d'Intel, telles que la mémoire persistante, ont considérablement facilité les choses.

## Index en DRAM, Données sur SSD

Aerospike aborde les bases de données différemment. Les SSD ne sont pas simplement des disques durs plus rapides. Un disque dur possède des secteurs physiques, des têtes et d'autres composants qui doivent se déplacer pour lire des données. Un SSD peut rapidement lire des milliers de morceaux de données en parallèle. Il ne fonctionne pas bien avec les disques rotatifs, mais avec NVMe/SSD, il fonctionne de manière extrêmement rapide. Personne n'a les mêmes performances, même pas les bases de données en mémoire.

L'architecture unique est conçue pour un volume élevé, un débit élevé et une latence très faible. Par exemple, certains clients effectuent régulièrement 20 millions de transactions par seconde. Certains atteignent des petabytes de données. En général, les clients utilisent du matériel de qualité mais le temps de réponse aller-retour est critique. Il faut environ 200 microsecondes à Aerospike pour rechercher une donnée et la ramener au client, et non pas des dizaines ou des centaines de millisecondes. Lorsque vous avez besoin d'une grande quantité de données rapidement, comme dans la détection de fraude, ou si vous ingérez beaucoup de données, comme dans l'IoT, les véhicules autonomes, la lecture de capteurs ou les dispositifs médicaux, Aerospike peut effectuer des millions de transactions par seconde en lecture et en écriture. Vous n'avez pas besoin de l'envoyer dans un bus de messages et de laisser ensuite la base de données notifier les systèmes en aval via le bus de messages qu'elle a reçu les données. Elles sont déjà persistantes.

## Alimentant l'innovation de premier plan dans le monde entier

Quels sont les cas d'utilisation privilégiés pour Aerospike ? Il y a des marchés évidents tels que l'IoT, la détection de fraude et les données des capteurs, mais c'est un marché émergent. Aerospike a commencé dans la technologie de la publicité, où la récupération des données doit être effectuée en millisecondes ou moins. C'est là que les bonnes performances ont été mises à l'épreuve à grande échelle.

Les industries supplémentaires où Aerospike peut être utile sont variées. Un exemple est une grande société de télécommunications en Inde. L'infrastructure là-bas n'est pas toujours fiable et parfois les appels sont interrompus. Cette entreprise, grâce à la technologie Aerospike, peut détecter en temps réel qu'un appel a été interrompu et peut immédiatement contacter le client pour lui offrir des crédits ou d'autres compensations afin de maintenir sa satisfaction.

## Règlement en temps réel des paiements instantanés

Une nouvelle zone dans laquelle Aerospike s'est fortement impliqué est celle des paiements numériques en temps réel. Cela ne nécessite pas spécifiquement une grande quantité de données ni des exigences de débit élevées, mais ce dont ces entreprises ont besoin, c'est d'une cohérence absolue et d'une disponibilité absolue, même en cas, par exemple, de perte d'un centre de données.

Le plancher de fabrication est également un marché émergent pour la technologie Aerospike dans des domaines tels que la fabrication de semi-conducteurs, où elle est utilisée pour stocker des données de capteurs afin de fournir des analyses en temps réel. Aerospike brille dans n'importe quelle industrie où il y a beaucoup de données et où vous en avez besoin rapidement.

## Performance à grande échelle - Résultats de tests indépendants de tiers.

Il existe de nombreuses bases de données dotées d'une bonne technologie, mais elles sont confrontées à des défis d'échelle. Prenons Redis, par exemple. Étant donné qu'il stocke toutes ses informations en mémoire, il n'est pas possible d'atteindre dix téraoctets sans coûts significatifs, sans parler de centaines de téraoctets ou même de pétaoctets. En revanche, Aerospike stocke les informations sur des SSD, ce qui implique une différence de temps d'environ 100 microsecondes lors de la recherche de données. À l'échelle des pétaoctets, Aerospike remplace des technologies plus anciennes telles que Cassandra, qui se distingue par son évolutivité, mais manque de vitesse.

## Coût total de possession

De plus, par rapport à ces technologies, les gens économisent beaucoup d'argent en passant à Aerospike car le nombre de nœuds diminue considérablement en raison de son architecture unique. Les économies se font non seulement sur les dépenses en capital (capex), mais aussi sur les dépenses opérationnelles (opex) car il y a moins de machines à superviser.

Aerospike a effondré certaines des couches traditionnelles de l'architecture. Souvent, les systèmes hérités ont un cache supplémentaire devant eux pour accélérer les performances. Cela introduit de la complexité. Aerospike n'a pas besoin d'un cache. Il n'y a pas une grande quantité de mémoire DRAM. Il repose sur la vitesse des SSD et de la technologie sous-jacente pour obtenir des performances de stockage brut sans cache. Étant donné que les couches de cache et de stockage sont effacées, la solution est simplifiée, ce qui signifie une fiabilité et une vitesse intégrées.

## Exemple de déploiement continental

La cohérence dans plusieurs zones géographiques est également un avantage important de la technologie. L'architecture moderne nécessite une faible latence, ce qui signifie généralement qu'il existe plusieurs clusters basés sur H où les données sont proches de l'utilisateur. Sinon, la vitesse de la lumière devient un facteur. Aerospike peut faire en sorte que tous les clusters basés sur H communiquent les uns avec les autres, de sorte que si un enregistrement est modifié dans un cluster, il se propagera automatiquement aux autres clusters, de manière asynchrone. Cependant, dans certains cas, tels que les paiements numériques, il doit y avoir une forte cohérence entre les clusters, donc ils préféreraient plutôt répliquer les données de manière synchrone. Ils préfèreraient lire à partir de la copie locale des données. Les lectures deviennent très rapides ; les écritures sont affectées par la vitesse de la lumière, mais elles garantissent une cohérence sur de grandes distances géographiques. Donc, il ne s'agit pas de résolution de conflit, mais d'évitement de conflit. Pouvoir répartir ces écritures de cohérence forte à travers le monde et peut-être avoir plusieurs systèmes d'enregistrement présente un énorme potentiel et une énorme valeur.

## Aerospike Connect pour Spark

Par exemple, Aerospike est actuellement compatible avec Spark, une technologie analytique qui nécessite que ses données soient en mémoire. En chargeant les données depuis Aerospike, le cadre de données Spark peut traiter des dizaines ou des centaines de téraoctets avec des économies de coûts énormes et une grande rapidité. L'intégration avec d'autres outils d'IA est l'une des forces motrices qui ouvrira des perspectives passionnantes.

Obtenir des données dans Aerospike est simple et direct. Étant donné que les applications disposent d'une couche d'API comme la plupart des bases de données, Aerospike peut ingérer à partir de sources standard de l'industrie telles que Kafka et Janus. La capacité bidirectionnelle de communiquer avec des bus de messages est logique, car non seulement Aerospike peut ingérer des données à partir de ces sources, mais il peut également les éjecter. Si Aerospike est une source de vérité lorsque vous écrivez un enregistrement, vous pouvez le pousser vers des systèmes en aval.

## Aerospike Connect for Kafka se traduit en français par : Aerospike Connect pour Kafka.

Si vous souhaitez utiliser Aerospike pour l'ingestion plutôt qu'un moteur d'ingestion en amont, Aerospike peut décider s'il veut diviser les données ou les conserver dans le même format et les placer simplement dans Aerospike; Avec son framework de plugins, c'est un appel API. Lorsque les données sont stockées, un bus de messages peut être notifié pour le traitement aval. Cela élimine une des étapes d'ingestion et augmente le débit total.

La mise à l'échelle pour des milliers de clients est possible grâce à la conception du client Aerospike en tant que multithread, qui permet de s'étendre sur un processus et d'absorber une grande quantité de données. Le client est intelligent dans un souci de rapidité. Tout enregistrement est envoyé directement du client au nœud qui détient cette partie de données. Il n'y a aucun intermédiaire de ce genre. Cela signifie que le client doit connaître tous les nœuds, donc il existe des limites de connexion finies, rendant impraticable des centaines de milliers de clients.

## Exemple de déploiement continental

Si, toutefois, vous avez des centaines de milliers de clients, c'est parce que vous avez une population répartie à l'échelle mondiale. S'ils parlaient à un seul groupe, la vitesse de la lumière deviendrait un gros problème. Il existe des moyens de configurer de plus petits groupes basés aux extrémités qui partagent des informations ou qui parlent à un système central plus en mode d'hub et de rayons, donc c'est faisable.

## Aerospike est une base de données pour les applications du système d'enregistrement

À mesure que les données se déplacent dans le monde, différents niveaux de confidentialité entrent en jeu et des normes telles que le RGPD et le CCPA doivent être respectées, de sorte que les clients doivent connaître l'origine des données. Aerospike possède la flexibilité nécessaire pour examiner les données de manière détaillée et, en fonction du contenu des données, savoir quand et où elles peuvent être expédiées. Cela fait partie de la configuration de l'expédition des données d'Aerospike, qui est transparente pour l'application. Vous n'avez pas besoin de modifier quoi que ce soit dans les applications, uniquement dans la configuration.

Aerospike s'assure également que les données sont sécurisées. Tout comme toutes les bases de données de niveau entreprise, Aerospike prend en charge le chiffrement au repos et en transit, ainsi que l'intégration de la sécurité à des éléments tels que Hashicorp Vault. Il peut être utilisé et est utilisé comme système d'enregistrement.

Un objectif fondamental chez Aerospike est d'utiliser les dernières innovations et technologies pour le succès des clients. Par exemple, lorsque Intel a lancé PMem, ils l'ont utilisé en mode app direct pour exploiter pleinement ses capacités. Cela signifie que lors d'une mise à jour progressive sur, disons, un pétaoctet d'informations, le temps requis est court. Aerospike stocke ce pétaoctet peut-être dans 50 ou 60 nœuds au lieu de milliers de nœuds, et lorsqu'un nœud est arrêté, il n'a pas besoin d'être reconstruit, donc le temps de redémarrage est très rapide.

Dans l'ensemble, Aerospike offre la sécurité, la haute disponibilité, la rapidité, la faible latence, la scalabilité, la cohérence et un faible coût de possession.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
