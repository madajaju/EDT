---
layout: posts
title: "Sécurité matérielle : un impératif pour transformer les données."
number: 27
permalink: episode-EDT27-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 27
tags:
    - datagovernance
    - data
    - sgx
    - confidentialcomputing
    - cybersecurity
    - technology

date: Tue Oct 27 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Jesse Schrater

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, architecte principal des solutions, secteur public, Intel, et Jesse Schrater, responsable de la sécurité, groupe des plateformes de données, Intel, discutent du paysage actuel de la sécurité et de la manière dont SGX d'Intel et l'écosystème de partenaires offrent une solution éprouvée et opportune pour les données en cours d'utilisation et d'autres préoccupations en matière de sécurité."
video: "https://youtu.be/2F1AgMncBjs"
description: "Darren Pulsipher, architecte principal des solutions, secteur public, Intel, et Jesse Schrater, responsable de la sécurité, groupe des plateformes de données, Intel, discutent du paysage actuel de la sécurité et de la manière dont SGX d'Intel et l'écosystème de partenaires offrent une solution éprouvée et opportune pour les données en cours d'utilisation et d'autres préoccupations en matière de sécurité."
---

<div>
{% include transistor.html id="360a1ce9" title="#27 Hardware Security: Imperative for Transforming Data" %}

{% include youtube.html id="2F1AgMncBjs" %}
</div>

---

## Paysage de sécurité des données

Le monde est devenu incroyablement connecté avec tous les appareils, ce qui provoque une croissance exponentielle de la quantité de données que nous devons gérer : plus il y a de volume, plus il y a de risque. C'est un défi, et l'utilisation de nouvelles capacités informatiques telles que le cloud, l'analyse et l'informatique périphérique entraîne une complexité supplémentaire.

Il existe trois principales tendances en matière de sécurité : l'encryption de tout, l'isolation de la charge de travail et une chaîne de confiance. Ces trois domaines sont importants pour aider les organisations à faire face aux exigences réglementaires croissantes visant à protéger les données.

Lorsque les organisations décident de faire une transformation digitale, ou avec un catalyseur tel que COVID 19 qui nécessite des travailleurs à distance, par exemple, la sécurité doit aller de pair pour maintenir les contrôles de sécurité et la conformité en place. Si vous abordez la sécurité tout au long de vos déploiements et mises en œuvre, plus vous serez en mesure de transformer la façon dont vous menez vos affaires de manière durable.

## Protéger les données tout au long de leur cycle de vie

Chiffrer les données est important à travers toutes ses phases. Historiquement, les attaquants pouvaient accéder aux données directement à travers le réseau. Une fois que cela est devenu crypté, ils ont commencé à pirater les centres de données et à extraire les données des bases de données. Nous avons donc commencé à chiffrer le stockage. Cependant, les données arrivent à un point final et sont extraites en mémoire et déchiffrées, ce qui signifie qu'une attaque sophistiquée qui pourrait obtenir un accès root pourrait potentiellement saisir ou manipuler les données à ce stade de traitement. Cette attaque sur les données en cours d'utilisation est la nouvelle frontière pour les attaquants et pour ceux qui défendent cet espace. Intel dispose de capacités nouvelles et innovantes que nous intégrons dans nos processeurs pour aider les propriétaires de données, les propriétaires d'applications, les fournisseurs de services et essentiellement tout l'écosystème à combler ces vulnérabilités potentielles.

## Pourquoi protéger les données en cours d'utilisation ?

Dans de nombreux cas, les attaquants utilisent des élévations de privilèges au niveau du système d'exploitation ou de l'hyperviseur. Ils peuvent provenir d'un système d'exploitation invité, d'un système d'exploitation hôte ou même d'un accès physique au serveur. Les attaquants peuvent être des pirates classiques utilisant des malwares, des concurrents tiers ou des initiés tels qu'un administrateur ou un administrateur système chez un fournisseur de services.

## Intel Software Guard Extensions (Intel SGX) : Extensions de protection de logiciel Intel (Intel SGX)

Intel a intégré une nouvelle technologie dans nos processeurs appelée Intel Software Guard Extensions, ou SGX. Cela fait partie du paradigme de l'informatique confidentielle qui est en plein essor sur le marché en ce moment, car les entreprises essaient de transformer leurs données et de les garder privées. SGX répond à ces nouveaux types d'attaques en permettant à l'application de communiquer directement avec le processeur dans la mémoire chiffrée, contournant le système d'exploitation, l'hyperviseur et essentiellement tout le reste du système. Ainsi, même en cas de violation de votre système d'exploitation, de l'hyperviseur ou d'autres applications, les attaquants ne pourraient pas accéder à ces données car le système d'exploitation lui-même n'a pas la visibilité sur ces données. Par conséquent, vous n'avez pas besoin de faire confiance au fournisseur ou au reste de la pile système car vous opérez essentiellement comme si ils étaient déjà compromis, et votre code et vos données restent confidentiels et intacts; ils conservent leur intégrité.

Intel essaie de faire en sorte que vous ayez à faire confiance au plus petit nombre possible de composants. SGX va plus loin sur cette voie pour le centre de données que tout ce que nous avons vu jusqu'à présent. Tout ce à quoi vous devez faire confiance, c'est votre propre application et le processeur lui-même.

SGX offre une capacité puissante aux entreprises telles que les fournisseurs de services cloud, qui peuvent dire à leurs clients que ni eux, ni le gouvernement, par exemple, ne pourraient accéder à leurs données même s'ils le voulaient.

## Intel SGX en action

SGX est déjà largement utilisé par les fournisseurs de services cloud et les éditeurs de logiciels, mais d'une certaine manière, nous en sommes encore au début. Bien que cette technologie existe depuis plusieurs années, nous avons développé des écosystèmes et nous apportons de nouvelles fonctionnalités dans nos prochains processeurs Xeon Ice Lake de troisième génération. Cela étendra ses capacités, sa capacité à s'adapter à de lourdes charges de travail d'entreprise et lui permettra de protéger des portions de mémoire beaucoup plus importantes avec de meilleures performances, et ce, dans un centre de données grand public beaucoup plus étendu.

Intel est l'un des membres fondateurs du Consortium de calcul confidentiel, qui fait partie de la Fondation Linux. La plupart des grands fournisseurs de services cloud, de nombreux fournisseurs de logiciels et même nos concurrents en silicium travaillent ensemble sur ce type de solutions d'environnement d'exécution sécurisé et établissent des normes pour gérer cette capacité. Nous sensibilisons également sur la nécessité et la valeur commerciale du calcul confidentiel.

## Écosystème de partenaires logiciels Intel SGX

SGX offre de nombreuses options d'utilisation en fonction de ce que recherche le propriétaire des données. Si un client souhaite avoir le plus haut niveau de contrôle, SGX va leur permettre de le faire. En fait, ils peuvent essentiellement simplifier leur application en gardant seulement les données codées qu'ils veulent isoler du reste du système, voire même seulement une partie de cette application. Cependant, ce scénario nécessite qu'ils écrivent l'application à cette fin. Dans l'écosystème, il existe des ressources en open source qui rendent ce type de développement beaucoup plus facile, et cela ne cesse de s'étendre.

De l'autre côté se trouve une migration rapide et directe. Vous pouvez prendre votre application et la déposer dans un environnement plus sécurisé. L'écosystème répond en créant des conteneurs sensibles à SGX. Vous pourriez déposer votre application non modifiée dans cet environnement où elle serait la seule à fonctionner, de sorte que l'application elle-même pense qu'elle s'exécute dans son environnement d'origine.

Nos partenaires de l'écosystème ont réalisé de nombreux progrès dans ce domaine grâce à des éléments tels que Fortanix, Graphene et Scone. Certains sont open source et d'autres sont propriétaires, mais tous sont livrés avec tous les services intégrés. Par exemple, Microsoft Azure Confidential Computing offre toute la gamme, des solutions de migration et de déploiement avec SGX jusqu'aux kits de développement logiciel qui vous permettent de développer votre application directement pour celle-ci et de la déployer dans leur environnement, ce qui vous dispense même de gérer le matériel. Il existe un ensemble complet d'options, de sorte que personne ne devrait craindre les complexités de SGX. Les clients doivent également avoir confiance que des éléments sensibles tels que les algorithmes d'apprentissage automatique ou les clés de chiffrement seront traités avec un niveau de protection très granulaire.

## Confidential Computing: Un bouleversement dans la sécurité

SGX est là depuis un certain temps, et nous avons travaillé pour l'étendre. Il a été testé et mis à l'épreuve, avec des centaines d'articles de recherche et un durcissement au fil du temps grâce aux mises à jour. Il a l'avantage de ne pas être la nouvelle arrivée sur le marché, mais plutôt une solution fondamentale qui est introduite dans le courant dominant avec Ice Lake. Il ne se concentre plus sur de petites zones sensibles, mais est maintenant prêt pour les grandes choses.

Le gouvernement, les services financiers et les soins de santé font partie des secteurs qui ont rapidement reconnu l'intérêt de SGX car ils ont de nombreuses attentes réglementaires et exigences en matière de confidentialité, tout en cherchant à partager des données et à mettre en œuvre des innovations avec plusieurs parties. Les entreprises sont confrontées à des situations similaires, par exemple, si elles souhaitent passer au cloud public mais ne font pas confiance à ce dernier pour protéger leurs données sensibles. Avec SGX, elles n'ont pas besoin de faire confiance au fournisseur.

Intel vient de faire une grande annonce ce mois-ci et nous ouvrons vraiment grand les portes sur les choses à venir. Un excellent point de départ est intel.com/sgx pour les témoignages et une exploration approfondie des informations. Les clients devraient rechercher les partenaires de l'écosystème tels que Azure et Fortanix. Un autre endroit pour obtenir des informations est le Consortium pour le calcul confidentiel en raison du nombre de personnes travaillant dans cet espace.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
