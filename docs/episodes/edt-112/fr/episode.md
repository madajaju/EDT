---
layout: posts
title: "Mythes de la migration vers le cloud "Lift and Shift""
number: 112
permalink: episode-EDT112-fr
lang: fr
nav_exclude: true
nav_order: 112
tags:
    - multicloud
    - cloudmigration
    - cloud
    - compute
    - process
    - technology

date: Mon Nov 14 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - John Evans

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Architecte Principal des Solutions, Secteur Public, Intel, et John Evans, Conseiller Principal en Technologie, WWT, discutent de cinq mythes sur la migration vers le cloud par transfert et déplacement."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Architecte Principal des Solutions, Secteur Public, Intel, et John Evans, Conseiller Principal en Technologie, WWT, discutent de cinq mythes sur la migration vers le cloud par transfert et déplacement."
---

<div>
{% include transistor.html id="cfd34037" title="#112 Myths of Lift and Shift Cloud Migration" %}

{% include youtube.html id="url" %}
</div>

---

John a commencé sa carrière dans la technologie au service d'assistance d'un important entrepreneur en défense il y a 20 ans. Au fur et à mesure de sa carrière, il s'est intéressé à la cybersécurité et à l'architecture d'entreprise. Il a travaillé en tant que sous-traitant pour l'Agence des systèmes d'information de la Défense (DISA), où il était l'architecte principal du cloud DISA du département de la Défense. Finalement, l'État du Maryland l'a appelé pour diriger les efforts de transformation numérique de l'État, y compris la migration vers le cloud. Cette migration a été la plus importante jamais réalisée dans l'éducation au niveau de l'État et local.

Après cela, il est passé au poste de directeur de la sécurité des systèmes d'information de l'État (CISO), supervisant les opérations de haut niveau, la sécurité et la gouvernance. Il a quitté le service gouvernemental et a rejoint WWT il y a environ trois ans. Il travaille principalement dans le domaine de l'éducation au niveau local et régional, bien qu'il apporte également son aide dans d'autres secteurs du secteur public.

## Mythe Un - Le cloud est moins cher.

Le cloud n'est pas nécessairement moins cher qu'un environnement sur site. Les applications héritées ont été développées pour un environnement sur site, donc il n'y a aucun problème avec l'auto-évolutivité. C'est un modèle basé sur la consommation, et il y a déjà des coûts engagés, tels que les serveurs. La plupart des produits destinés à aider les organisations à déplacer leurs applications vers le cloud ne supportent pas l'auto-évolutivité, donc lorsque ces applications sont contraintes d'être dans le cloud, elles doivent maintenant être provisionnées au maximum en tout temps, ce qui ne se traduit pas souvent par des économies de coûts. Il est probable que les clients paient plus qu'auparavant pour les mêmes fonctionnalités en interne.

Lorsque Darren travaillait avec le gouvernement canadien, ils ont déplacé une instance SAP dans le cloud. Elle était provisionnée au maximum, fonctionnant 24/7, et ils ont dépassé leur budget en seulement six mois. Lorsqu'ils ont découvert ce problème, ils l'ont allumée et éteinte chaque jour étant donné que l'instance n'avait pas besoin de fonctionner 24/7. Ils ont économisé beaucoup d'argent en la faisant fonctionner de 14 à 16h par jour.

L'accès doit être disponible en tout temps dans un département tel que la Santé et les Services sociaux, qui est généralement le plus important dans le budget informatique de l'État, mais il est possible de le réduire à une instance mineure pendant les heures de fermeture pour économiser de l'argent.

Les fournisseurs de services cloud (CSP) offrent désormais des services natifs de cloud qui sont réalisés par une application tierce ou un produit OEM pouvant offrir des fonctionnalités similaires à moindre coût. Cela ne fonctionnera pas avec tout, car certaines applications héritées ne sont pas développées pour tirer parti de certaines applications natives de cloud. Il est préférable de faire attention à ne pas se retrouver lié à un cloud spécifique. Par exemple, si vous utilisez des services propriétaires AWS, il pourrait être difficile de retirer une application et de passer à Azure, et vice versa.

John conseille aux organisations de se demander s'il est judicieux de passer dans le cloud. Ce n'est pas une bonne raison de passer au cloud simplement parce que vous pensez que vous devriez le faire. Vous pourriez vous retrouver avec des dépenses élevées et des supérieurs et des collaborateurs frustrés parce que la stratégie n'a pas été suffisamment réfléchie.

## Mythe Deux - Le Cloud Efface la Dette Technique

Le passage dans le cloud ne permet pas d'éliminer la dette technique dans presque tous les cas. Il expose et accélère cette dette. Vous trouverez des points d'exposition si vous prenez quelque chose qui fonctionne depuis 30 ans et le déplacez vers un nouvel environnement. La partie de l'accélération est que vous avez désormais plus de dette technique à laquelle vous devez vous préoccuper puisqu'elle est exposée.

La dette technique signifie que vos systèmes sont en retard par rapport à ce qu'ils devraient être. Par exemple, lorsque John a commencé à travailler pour Maryland, certains systèmes fonctionnaient encore sur des écrans verts. Il était facile pour les employés actuels de s'y retrouver, mais il était difficile pour les nouveaux utilisateurs de s'adapter. Bien que le système ait fonctionné pendant de nombreuses années, l'inconvénient de cette dette technique réside dans la quantité de formation nécessaire et la fidélisation des employés. Les générations plus récentes qui entrent sur le marché du travail, compétentes sur les dernières tendances et évolutions, ne veulent pas avoir affaire à des applications obsolètes.

La dette technique signifie également des problèmes de sécurité. Si une application héritée n'a pas été mise à jour, il se peut que vous ne puissiez pas appliquer de correctifs de peur de la rendre inopérante. Cela crée des vulnérabilités de sécurité que vous devez accepter jusqu'à ce que vous vous débarrassiez du cycle de dette technique.

Une réaction courante dans une organisation est d'ajouter un peu de code supplémentaire lorsque cela est nécessaire pour adapter, par exemple, un changement de règle d'une législature d'État. Cela ne résout pas un problème; au contraire, le système se retrouve avec beaucoup de code spaghetti, rendant impossible de recréer le système pour une mise à jour. L'un des concepts dans le cloud consiste à diviser votre système en modules ou microservices, mais le code spaghetti ne permet pas cela car vous ne pouvez pas simplement en retirer une partie.

Cela rend les organisations encore plus réticentes à se moderniser, car elles ont fait les choses de la mauvaise manière pendant toutes ces années. Lorsque quelque chose se casse et devient le moteur de ce changement, cela devient encore plus difficile.

Parfois, il peut être judicieux d'abandonner l'ancien système et repartir de zéro. Cela est coûteux et vous devez avoir le nouveau système avant de jeter l'ancien. Pour certaines organisations, cependant, telles que les États, qui peuvent obtenir des financements fédéraux pour des départements tels que la Santé et les Services sociaux, cela pourrait être le meilleur choix. Dans une situation comme celle-ci, vous pouvez également évaluer l'avantage de la réutilisabilité, tels que les modèles et les structures de gouvernance pour d'autres départements.

## Mythe Trois - Le Cloud est sécurisé

Passer dans le cloud ne rend pas nécessairement la sécurisation des applications plus facile, même si vous n'avez pas à vous préoccuper de la sécurité physique ou des hyperviseurs, par exemple. Les fournisseurs de services cloud utilisent un modèle de responsabilité partagée sous différentes formes. Vous devez comprendre ce dont vous êtes responsable avec chaque fournisseur et ce dont ils sont responsables. Cela ne change pas seulement avec le fournisseur, mais aussi avec les services que vous consommez. Cela peut rendre la sécurité plus complexe pour vos équipes de sécurité car elles doivent rester au courant de toutes les variations différentes entre les fournisseurs et les services.

## Mythe Quatre - Le Cloud est facile

La migration vers le cloud est complexe. En réalité, il est plus facile de tout exécuter dans votre propre centre de données, non connecté à internet. La sécurité est simple de cette manière, et les modèles de coûts sont simples. Cependant, vous ne pouvez pas grandir. Vous ne pouvez pas fournir des services à vos administrés ou clients et vous ne pouvez pas répondre aux besoins de votre mission, entre autres problèmes. Le monde est complexe et la migration vers le cloud est compliquée.

## Mythe cinq - il n'est pas nécessaire d'acquérir de nouvelles compétences.

Un fossé de connaissance peut également accentuer les points de douleur liés à cette complexité. Les développeurs de logiciels et autres spécialistes de l'informatique doivent changer leur façon de penser à l'informatique en nuage, en particulier en ce qui concerne la sécurité. Par exemple, les développeurs de logiciels ne devraient pas créer des instances dans le cloud où bon leur semble ou télécharger des choses depuis GitHub ou d'autres référentiels, en récupérant des bibliothèques pour faire fonctionner les choses. Cela ouvre toutes les règles du pare-feu car ils peuvent ne pas choisir correctement. Des garde-fous doivent être mis en place lors du passage au cloud, ce qui nécessite un changement. Travailler dans le cloud nécessite un ensemble de compétences et une mentalité différents. Plus important encore, vous devez trouver de meilleures façons de gérer la sécurité face à des rançongiciels sophistiqués et à des cyberattaques.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
