---
layout: posts
title: "Elastic Search et Intel Optane DCPMM"
number: 17
permalink: episode-EDT17-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 17
tags:

date: Sun Aug 30 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher montre comment il a augmenté les performances d'Elasticsearch en utilisant la mémoire persistante Intel Optane en mode 100% d'application directe. Ses tests montrent une augmentation incroyable des performances de 2 fois. En doublant la capacité de débit, vous pouvez considérablement réduire le nombre de serveurs dans votre cluster Elasticsearch."
video: "https://youtu.be/url"
description: "Darren Pulsipher montre comment il a augmenté les performances d'Elasticsearch en utilisant la mémoire persistante Intel Optane en mode 100% d'application directe. Ses tests montrent une augmentation incroyable des performances de 2 fois. En doublant la capacité de débit, vous pouvez considérablement réduire le nombre de serveurs dans votre cluster Elasticsearch."
---

<div>
{% include transistor.html id="77870513" title="#17 Elastic Search & Intel Optane DCPMM" %}

{% include youtube.html id="url" %}
</div>

---

Récemment, j'ai effectué quelques tests avec la nouvelle technologie d'Intel appelée Optane DC Persistent Memory (PMEM) avec Kafka. En utilisant Optane de manière non traditionnelle, monté en tant que système de fichiers, j'ai pu obtenir une amélioration massive du débit. Écoutez mon podcast à ce sujet ici. (Pouvez-vous mettre un lien ici ?) J'ai essayé la même chose avec Elasticsearch pour voir si je pouvais obtenir une amélioration similaire des performances.

Elasticsearch est un moteur de recherche hautement évolutif et d'analyse qui permet la distribution des données sur plusieurs nœuds pour étendre la solution et prendre en charge des quantités de données plus importantes. En d'autres termes, c'est un gestionnaire de métadonnées distribué, principalement utilisé pour l'analyse des journaux. Elastic est lui-même un excellent outil pour normaliser les données au format JSON. Je peux envoyer n'importe quel type de données dans Elastic et il peut s'étendre sur un cluster distribué. Ce n'est pas un bus de messages comme Kafka, mais plutôt un index des données que vous recevez. Étant donné qu'Elastic stocke ces données sur des disques, j'ai réalisé que je pouvais utiliser le PMEM de la même manière que je l'ai fait avec Kafka.

## Mémoire persistante Intel Optane DC

La mémoire persistante Intel Optane DC est disponible dans le format DDR4, ce qui lui permet de s'adapter parfaitement à votre serveur dans un emplacement de mémoire DDR4. Les modules sont disponibles en versions de 128, 256 et 512 gigaoctets, ce qui signifie qu'avec un système à deux sockets, je peux avoir jusqu'à 6 téraoctets de PMEM. Une fonctionnalité importante est que le matériel est chiffré et lié à votre CPU avec cet encryption, ce qui le rend sécurisé et extrêmement fiable. Il est déjà utilisé pour apporter des changements profonds dans la façon dont il est utilisé dans de nombreux outils de bases de données, tels que la plateforme Exadata d'Oracle ainsi que SAP HANA.

## Soutien pour la variété des applications.

Il y a plusieurs façons d'utiliser cette technologie.

Le premier est le mode mémoire, qui étend l'emplacement d'un serveur. Il utilise le PMEM comme une mémoire normale. La mémoire DDR4 agit comme un cache pour le PMEM. Dans ce mode, la vitesse est comparable à DDR4 ; dans la plupart des applications, vous ne verrez aucun changement.

Le deuxième mode est l'application directe. En mode application directe, je peux écrire une application qui écrit directement dans PMEM, en contournant les étapes chronophages.

Le troisième mode utilise le mode direct de l'application pour créer un système de fichiers en mémoire non volatile qui se trouve directement sur le bus de mémoire, ce qui est bien plus rapide que le bus NVMe ou même le bus SATA.

En utilisant ce troisième mode, j'ai dû apprendre un peu sur l'architecture d'Elastic pour savoir quelles parties je devais exécuter dans ce système de fichiers ultra-rapide et quelles autres je devais laisser où elles étaient. Je voulais également savoir si je pouvais effectuer ces modifications uniquement avec le fichier de configuration.

## Utilisation du Noyau Linux

Tout d'abord, j'ai dû apprendre à utiliser les commandes du noyau Linux pour manipuler cette PMEM.

Avec la commande de contrôle de la mémoire persistante Intel (ipmctl), j'ai découvert que je pouvais configurer et gérer la PMEM de manière à pouvoir l'allouer pour fonctionner en mode mémoire, en mode direct d'application ou en un pourcentage de mode mémoire.

L'autre commande est le contrôle du dispositif de mémoire non volatile (ndctl). Cela me permet de créer des espaces de noms et des régions dans cette PMEM que j'ai créée, afin que je puisse monter cette région en tant que dispositif. Ensuite, je peux monter ce dispositif en tant que système de fichiers.

## ESRally est un outil de test de performance.

J'ai trouvé ESRally, un outil de benchmark, à utiliser dans mes tests. La première fois que j'ai configuré le test, j'ai exécuté ESRally depuis mon disque SATA normal, où Elastic exécutait tout à partir du disque PMEM. J'ai obtenu une certaine amélioration des performances, mais ce que j'ai découvert, c'est que parce que je diffusais des données à partir du disque SATA stockées dans mon ESRally, j'étais limité par la vitesse à laquelle je pouvais pousser les données dans Elasticsearch. Ce n'était donc pas Elastic qui ralentissait, mais ESRally car mon disque SATA était beaucoup plus lent que mon disque PMEM. J'ai déplacé ESRally sur le disque PMEM. Cela a amélioré les performances et j'ai obtenu quelques résultats intéressants.

## Tests de contraintes

Pour voir quels seraient les effets de cette unité de stockage PMEM ultra-rapide sur Elastic, j'ai effectué le test sur une seule machine. Cela a éliminé la variabilité du réseau, supprimant ainsi les goulets d'étranglement liés à ce dernier en tant que facteur limitant. J'ai réduit les communications entre les services, ce qui a réduit les goulets d'étranglement des répliques, et j'ai exécuté toutes les requêtes sur des PMEM, éliminant ainsi la variabilité du disque SATA.

## Performance optimale (100%) App Direct

D'abord, j'ai attribué tout le PMEM au mode d'accès direct de l'application afin de pouvoir monter l'ensemble en tant que système de fichiers. J'ai utilisé des DIMMS de 128 gigaoctets, donc j'avais un disque de 1,5 téraoctets que je pouvais utiliser. Je savais d'après mes tests précédents avec Kafka que j'obtiens de meilleures performances avec un mode d'accès direct de l'application à 100% plutôt qu'à 50%.

Débit médian (devrait être Throughput - peut être modifié sur la diapositive) docs/sec

En utilisant les statistiques d'ESRally, j'ai pris le débit médian en documents par seconde par rapport au nombre de courses concurrentes que j'exécutais en même temps avec des producteurs et des consommateurs. J'ai obtenu de bons résultats avec le disque SATA, comparables à d'autres tests publiés. Avec le disque PMEM, j'ai pu ingérer presque deux fois plus de documents par seconde. C'est assez incroyable étant donné qu'il n'y a eu aucun changement de code, juste une modification de configuration.

## Temps de réponse du service

L'autre résultat était le temps de réponse aux fonctions. Comme prévu, à mesure que le nombre de courses simultanées augmentait, le temps de réponse à ces requêtes ou fonctions augmentait également. Mais avec PMEM, le temps de réponse est presque deux fois plus rapide. À partir de ce simple test, j'ai appris que l'endroit où vous stockez les données dont Elasticsearch a besoin (PMEM ou SATA) a un effet sur le temps de réponse.

## Conclusion

Utiliser la mémoire persistante Optane en mode système de fichiers pour augmenter les performances et réduire les coûts des serveurs Elasticsearch nécessite des changements minimes dans la configuration matérielle et logicielle, sans modification d'Elasticsearch ni des applications sous-jacentes. En doublant la capacité de débit de votre Elasticsearch, vous pouvez réduire le nombre total de serveurs dans votre cluster Elasticsearch, ce qui diminue le coût total de possession.

## Pour plus d'informations

Pour plus d'informations détaillées, consultez le lien du podcast vers le document que nous avons créé en réponse à ces résultats de tests. Vous pouvez également me contacter à l'adresse darren.w.pulsipher@intel.com ou sur LinkedIn @darrenpulsipher.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
