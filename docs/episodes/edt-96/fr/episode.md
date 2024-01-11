---
layout: posts
title: "Exploiter les centres de données virtuels avec Verge.io"
number: 96
permalink: episode-EDT96-fr
has_children: false
lang: fr
nav_exclude: true
parent: Épisodes
grand_parent: Français
nav_order: 96
tags:
    - privatecloud
    - cloud
    - compute
    - technology
    - sdi
    - virtualdatacenter
    - vergeio

date: Wed Jul 20 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Aaron Reid
    - Chris Lehman

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, architecte principal des solutions chez Intel, et Aaron Reid, ingénieur principal des systèmes chez https://www.verge.io/, ainsi que Chris Lehman, vice-président principal des ventes, discutent des cas d'utilisation du logiciel de centre de données virtuel de Verge.io."
video: "https://youtu.be/url"
description: "Darren Pulsipher, architecte principal des solutions chez Intel, et Aaron Reid, ingénieur principal des systèmes chez https://www.verge.io/, ainsi que Chris Lehman, vice-président principal des ventes, discutent des cas d'utilisation du logiciel de centre de données virtuel de Verge.io."
---

<div>
{% include transistor.html id="dd535cf2" title="#96 Leveraging Virtual Datacenters with Verge.io" %}

{% include youtube.html id="url" %}
</div>

---

Aaron travaille dans le domaine de l'informatique depuis plus de 20 ans. Il est ingénieur prévente, ce qui signifie qu'il discute avec les clients de la valeur et des fonctionnalités de Verge.io et les aide à définir leurs besoins.

Chris est le responsable des ventes chez Verge.io avec 25 ans d'expérience dans les sociétés de logiciels technologiques. Il décrit Verge.io comme ayant une concentration maniaque sur la satisfaction des clients et le succès avec le logiciel.

Le terme "centre de données virtuel" est utilisé pour simplifier. La plateforme est multi-locataire, donc il y a des locataires autonomes imbriqués avec toutes les ressources requises à l'intérieur d'un centre de données, de l'unité centrale à la mémoire en passant par le stockage et le réseau, et tout cela est isolé. Cependant, en même temps, vous pouvez construire ceux-ci à la demande. Tout comme vous pouvez créer une machine virtuelle à la demande, souvent avec un modèle, vous pouvez faire la même chose avec un locataire où tout est encapsulé dans le centre de données virtuel. Vous pouvez construire à partir d'un moteur de recettes ou à partir de rien. Vous pouvez facilement cloner ou prendre une capture instantanée d'un de ces locataires.

Ces centres de données virtuels peuvent être grands et complexes. Le plus grand client de Verge.io gère plus de 60 nœuds et plusieurs locataires dans son environnement. Les seules restrictions sont celles intégrées dans le cluster Verge.io en coulisses. Par exemple, supposons que vous disposiez de quatre téraoctets de mémoire, de 100 téraoctets de stockage et de 64 cœurs dans votre processeur. Vous pourriez attribuer toutes ces ressources à ce locataire, le diviser comme vous le souhaitez, en moitiés ou en tiers, et construire les locataires de cette manière.

Si, par exemple, vous avez attribué certains nœuds au développement, certains à des tests et le reste à la production, ils seraient différents locataires et vous pourriez effectuer une capture d'écran entre eux et passer en production. Dans ce cas, vous pouvez même avoir plusieurs environnements de production avec des mises à jour en mode bleu-vert.

Beaucoup des clients de Verge.io sont des fournisseurs de services gérés. Ils utilisent la multi-tenancy pour leurs clients finaux et, avec cela, dédient des environnements sécurisés de confiance zéro. Les clients peuvent avoir leur environnement de cloud, et ils peuvent provisionner des charges de travail virtuelles selon leurs besoins.

Il existe également des cas d'utilisation importants pour les clients de type informatique d'entreprise qui souhaitent, par exemple, des environnements de développement et de test en mode bleu-vert ou qui peuvent avoir différents environnements avec différentes exigences de conformité en matière de sécurité telles que SOX ou HIPAA. Verge.io compte plusieurs clients issus d'institutions d'enseignement supérieur qui mènent des recherches conformes. Ils certifient leur grappe une seule fois; ensuite, ils peuvent fournir un environnement de recherche conforme à l'un de leurs chercheurs en moins d'une heure. Auparavant, cela pouvait prendre des mois pour être opérationnel dans un environnement conforme.

Pour les mises à jour, bien que les utilisateurs doivent utiliser des outils au niveau de l'application ou à l'intérieur des charges de travail de la machine virtuelle, la "recette" de l'environnement pour des éléments tels que les règles du pare-feu ou les paramètres de configuration sur la manière dont les ressources sont attribuées aux charges de travail peuvent être mis à jour de manière transparente. Vous pouvez également prendre une machine virtuelle dans un environnement en cours d'exécution avec une nouvelle conformité et la transférer vers un nouvel environnement.

Verge.io est également utile pour la sécurité. Une des plus grandes sociétés de quant en Europe constitue un bon exemple d'utilisation en matière de sécurité. Ils prennent une photo de tout leur environnement, puis réalisent des exercices d'équipe rouge et bleue contre celle-ci, cherchant des vulnérabilités de sécurité, vérifiant les correctifs, etc.

VDI peut fonctionner dans l'environnement. Verge.io collabore avec une entreprise pour le support VDI. Verge.io contrôle les ressources, le CPU et la mémoire. Ils prennent également en charge le GPU, le GPU passthrough et le GPU physique. C'est un cas d'utilisation important pour certains clients, notamment dans les travaux d'ingénierie ou les charges de travail pétrolières et gazières. Le GPU virtuel permet une économie favorable car les coûts sont répartis entre plusieurs utilisateurs.

Un ajustement parfait pour Verge.io serait les cas d'utilisation de bord. Un exemple typique est le point de vente. Si un client de vente au détail possède une centaine de magasins, il peut avoir besoin de deux ou trois applications de machines virtuelles (VM) dans chaque magasin. Étant donné que Verge.io a une empreinte matérielle réduite, une fois que vous avez au moins deux serveurs, vous pouvez les placer dans le centre de données du cas d'utilisation de bord et créer ces VM. Ensuite, avec les fonctionnalités de capture instantanée et de réplication, ces configurations peuvent être copiées et collées dans tous les environnements différents. Vous pouvez mettre à jour les dernières configurations sur tous, pas seulement les correctifs du système d'exploitation, mais aussi les règles de pare-feu.

Un excitant futur domaine pour Verge.io réside dans les systèmes de conduite automatisée en raison du volume de données. De nombreux fournisseurs testent les véhicules sur des sites éloignés et expédient physiquement les disques durs. Imaginez si les données pouvaient être traitées sur place, entièrement redondantes, avec les coûts attrayants qui y sont associés, puis transportées dans une zone étendue plutôt que sur un disque et un camion.

Pour plus d'informations sur Verge.io, visitez http://verge.io.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
