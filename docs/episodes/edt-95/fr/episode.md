---
layout: posts
title: "Exigences pour les architectures Edge vers Cloud"
number: 95
permalink: episode-EDT95-fr
lang: fr
nav_exclude: true
nav_order: 95
tags:
    - edgecomputing
    - cloudcomputing
    - datamanagement
    - itgovernance
    - security
    - multicloud
    - zerotrust
    - cybersecurity

date: Mon Jul 11 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, architecte en chef des solutions, et le Dr Anna Scott, architecte en chef Edge, secteur public, discutent des exigences essentielles pour les architectures de services du bord au cloud d'Intel."
video: "https://youtu.be/url"
description: "Darren Pulsipher, architecte en chef des solutions, et le Dr Anna Scott, architecte en chef Edge, secteur public, discutent des exigences essentielles pour les architectures de services du bord au cloud d'Intel."
---

<div>
{% include transistor.html id="6279b2d2" title="#95 Requirements for Edge to Cloud Architectures" %}

{% include youtube.html id="url" %}
</div>

---

Anna a récemment dirigé un effort visant à rédiger un livre blanc sur les architectures de service de bord à cloud. De la bordure au cloud englobe tous les points forts de la technologie qui concernent Intel : l'IA, la bordure, le cloud et la connectivité réseau. Le but était de rassembler des experts dans ces domaines pour discuter de la manière dont Intel aborde les architectures de cloud de bord et de la façon dont ces architectures peuvent toutes se connecter au cloud. L'accent était mis sur les éléments importants plutôt que sur la technologie actuelle qui résout les problèmes. Cela fournirait un cadre pour discuter et rechercher les désaccords. Une révélation intéressante était que les professionnels de l'informatique, de l'automatisation industrielle et des réseaux parlent des langages techniques différents avec des taxonomies différentes, entre autres défis.

Une leçon tirée de ces discussions est que les communications sont d'une importance vitale, et il est crucial de bien connaître vos communications, surtout en périphérie. Cela détermine la quantité de calculs qui doivent être effectués localement et à quelle fréquence vous pouvez compter sur le cloud. Dans le secteur public, la complexité supplémentaire des cas d'utilisation doit maintenir la fonctionnalité même en cas de conditions de refus, de perturbation, d'interruption et de limitation (DDIL). Nous devons repenser ces architectures de connectivité cloud en fonction de ces limitations.

La communication et la connectivité constituent la différence la plus significative entre une architecture de cloud, une infrastructure de services et l'edge. De nombreux outils actuels supposent à tort une connectivité constante ; si quelque chose n'est pas connecté, c'est mort. Ce n'est pas le cas pour l'edge. C'est évident dans des organisations edge telles que l'armée. Pourtant, même dans des industries telles que la télémédecine, il faut supposer qu'il n'y aura pas de bonne connectivité, par exemple, dans le cas d'utilisation de la télémédecine où vous pourriez dépendre du WiFi domestique du patient. L'industrie a des exigences similaires. Certains ne peuvent pas être hors ligne en raison des contrôles critiques pour des machines ou des processus spécifiques.

Alors, comment pouvez-vous avoir une informatique centrée sur l'edge qui maintient toutes les fonctionnalités critiques avec une connectivité intermittente vers le cloud ? Il existe des architectures pour cela, mais il reste encore beaucoup à faire pour avoir des opérations sans interruption lorsque la connectivité n'est pas continue. Que pouvez-vous continuer à faire et que se passe-t-il lorsque tout est restauré ? Il y aura une déconnexion avec ce qui s'est passé avec les données. Cela devient complexe lorsque vous devez synchroniser toutes ces données à grande échelle, peut-être avec des milliers d'appareils edge.

## Sécurité

La sécurité en périphérie est un autre domaine où il y a toujours plus de travail à faire. Les mesures de sécurité traditionnelles telles que l'authentification restent d'une importance capitale, mais les appareils constituent une surface d'attaque considérable, et leur sécurité physique est une question différente. La sécurité des ordinateurs portables tend à être solide, et ces mesures doivent être appliquées aux autres appareils en périphérie. Les nouvelles avancées de l'intelligence artificielle aideront à déterminer si les appareils sont à l'endroit où ils devraient être et à détecter les anomalies parmi, disons, dix mille appareils.

## Développement d'application

Dans la création d'applications, les développeurs doivent comprendre l'environnement unique de l'edge et les développer sans avoir besoin de reprogrammer ou d'introduire de nouveaux intergiciels pour fonctionner en edge. Les applications doivent être capables de s'exécuter avec des limitations en termes de calcul, d'énergie et de connectivité. De plus, l'edge peut être dans une nouvelle configuration de calcul distribué, et l'application doit être conçue pour fonctionner sur un réseau maillé avec une distribution de calcul très élevée. Le détachement de l'application du matériel représente un changement important, devenant plus générique et moins spécifiquement conçu. Cependant, l'ensemble du dialogue se dirige vers l'obtention des données de n'importe où et leur utilisation n'importe où.

## Gestion des données

Le volume de données générées et collectées en périphérie est si énorme qu'il n'est pas logique d'envoyer toutes ces données vers un centre de données pour être traitées. Une des raisons est le coût. Aux États-Unis, un réseau privé 5G peut être rentable pour de telles quantités de données, mais le coût serait prohibitif pour la plupart des organisations sans réseau 5G privé.

L'autre problème est que la plupart des données sont inutiles. Par exemple, lors de la surveillance des appareils ou applications, la plupart des données indiquent que tout fonctionne correctement alors que vous vous souciez uniquement des événements suggérant que quelque chose ne va pas. Des algorithmes d'IA sont appliqués en périphérie, réduisant la quantité de données non pertinentes renvoyées vers le cloud pour traitement.

Le mode de fonctionnement traditionnel pour la gestion des données, consistant à tout copier vers le centre de données et à exécuter les analyses là-bas, ne fonctionne pas bien pour le périphérique. Pousser les applications vers le périphérique ne fonctionne pas toujours non plus. Intel a identifié quelques autres architectures de données ou d'opérations de données. L'une d'entre elles s'appelle l'échange de données, où il y a une combinaison de déplacement des données dans des enclaves sécurisées seulement après leur analyse en périphérie, comme dans le traitement par lots. L'autre s'appelle les flux de données intelligents, où SADE et SABR entrent en jeu. Les données sont déplacées uniquement en fonction de règles, et elles sont diffusées en continu. Cela fonctionne dans les environnements DDIL car il peut déterminer les environnements d'exploitation actuels et s'adapter.

## Gestionabilité

Les systèmes doivent être conçus de manière à pouvoir être entretenus. On ne peut pas déployer dix mille appareils, puis envoyer régulièrement une petite armée de personnes pour les vérifier. Les services informatiques ont traditionnellement été prudents en ce qui concerne la mise à niveau d'un système fonctionnel. Pourtant, il est illogique de laisser les systèmes tels quels, surtout compte tenu des craintes d'attaques de ransomware sur les réseaux OT. Les systèmes doivent être conçus de manière à permettre une mise à jour facile de l'ensemble pour faire face à l'environnement de sécurité de manière robuste.

## Disponibilité

Surtout dans des domaines critiques tels que l'armée ou les soins de santé, il est important de concevoir des systèmes avec une redondance suffisante ; c'est davantage une approche systémique. Si les composants individuels échouent, l'objectif final doit quand même être atteint. C'est très différent de ce qui se passe dans le cloud, où il s'agit de maintenir l'infrastructure opérationnelle.

La technologie n'est pas encore tout à fait prête, mais elle est prise en compte pour être conçue pour plusieurs réseaux. Par exemple, si vous privilégiez l'utilisation du WiFi 6 et que cela échoue, le système peut utiliser le 4G ou un autre réseau disponible. Le réseau doit être solide tout comme le calcul. Une opération autonome sans le côté réseau est fragile. Si vous optez pour des coûts avec connexion filaire, vous avez des limitations plus élevées et vous perdez vos applications mobiles.

Vous pouvez trouver le livre blanc "Exigences essentielles pour les architectures de services Edge to Cloud" pour plus d'informations sur embracingdigital.org ou intel.org.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
