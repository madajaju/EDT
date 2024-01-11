---
layout: posts
title: "Gouvernance des données modernes"
number: 70
permalink: episode-EDT70-fr
has_children: false
lang: fr
nav_exclude: true
parent: Épisodes
grand_parent: Français
nav_order: 70
tags:
    - datagovernance
    - immuta
    - dataaccess
    - identitymanagement
    - cybersecurity
    - data
    - technology

date: Wed Nov 24 2021 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Matthew Carroll

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, architecte en chef de solutions chez Intel, discute de la réalité et de l'avenir de la gouvernance moderne des données avec Matthew Carroll, PDG d'Immuta."
video: "https://youtu.be/url"
description: "Darren Pulsipher, architecte en chef de solutions chez Intel, discute de la réalité et de l'avenir de la gouvernance moderne des données avec Matthew Carroll, PDG d'Immuta."
---

<div>
{% include transistor.html id="752e2562" title="#70 Modern Data Governance" %}

{% include youtube.html id="url" %}
</div>

---

Alors que les organisations migrent vers le cloud, la manière dont nous pensons les données et dont nous les utilisons change complètement ; au cours des cinq ou six dernières années, l'ensemble de l'infrastructure technique a changé. Les performances, l'échelle, les règles nécessaires et le nombre d'utilisateurs souhaitant combiner des données ont augmenté de façon exponentielle. Gérer tout cela à grande échelle n'est pas anodin, et c'est là qu'intervient Immuta.

Au fil du temps, l'industrie a repensé le paradigme du stockage des données. Auparavant, chaque équipe de données construisait des produits de données dans un silo, puis les livrait à une unité commerciale. L'unité commerciale disposait de données appropriées qui lui fournissaient un service de qualité. Maintenant, soudainement, nous voulons que n'importe qui puisse combiner des données sur l'ensemble de l'entreprise : analystes commerciaux, scientifiques des données, ingénieurs des données, etc. Le nombre d'utilisateurs a changé, et il ne s'agit pas d'applications de recherche ; il s'agit de la transformation et des pipelines de données.

C'est une différence qui nécessite une qualité de service différente, du temps et un niveau de sophistication qui n'existait jamais auparavant. Cela devient encore plus complexe lorsque l'on ajoute les lois sur la vie privée, la classification des données et les règles et réglementations en constante évolution.

Ce que cherche à faire Immuta, c'est rendre possible à tout utilisateur de potentiellement combiner n'importe quel jeu de données, interne ou externe à l'organisation, afin d'en obtenir des informations. Tout dépend de l'échelle. Les politiques doivent être séparées de la plateforme pour pouvoir appliquer une politique adaptée à tous ces nouveaux utilisateurs et à toutes les combinaisons de données différentes. La sécurité, la confidentialité et la gouvernance sont essentielles, mais si on ne peut pas les exécuter, personne n'est satisfait.

Une leçon qu'Immuta a apprise très tôt est que le proxy ne fonctionnera pas. C'est comme essayer de déplacer des pétaoctets de données à travers une paille : ils deviennent le goulot d'étranglement. Il est facile de blâmer les intergiciels lorsqu'il y a un problème car ils sont toujours un goulot d'étranglement, étant donné qu'ils se trouvent entre les outils et les données. Il s'agit d'un problème classique des intergiciels.

Le deuxième problème avec ce paradigme de conception est qu'avec la virtualisation classique des données, cela fonctionnait car il y avait un ensemble clair de données. Cependant, lorsque nous parlons de pétaoctets de données, l'approche "donnez-moi tout et nous trouverons une solution" s'effondre très rapidement en raison de la taille immense des données ainsi que de toutes les règles et politiques qui les entourent.

Dans la virtualisation normale, il faut intégrer nativement dans l'infrastructure de calcul en nuage de Snowflake, de Synapse, etc. Au lieu de mettre cette couche d'abstraction au-dessus de ces différents outils, la couche d'abstraction se trouve du côté des politiques.

La politique n'est aussi bonne que sa capacité à être vérifiée. C'est comme une chaîne de preuves. L'essentiel est de pouvoir prouver si cet utilisateur a respecté ou non la politique à travers l'infrastructure informatique. Avec une gouvernance moderne des données, on fait évoluer la politique à l'intérieur et on unifie les audits en raison du niveau de complexité de nombreuses personnes qui font tant de choses avec les données. L'audit de la politique doit être considérablement simplifié, sinon il est impossible de déterminer la conformité.

Il existe trois types de politiques à prendre en compte : opérationnelle, réglementaire et contractuelle. Un exemple de la complexité que cela peut entraîner est de regarder une entreprise telle que Cummins. S'ils se modernisent dans le cloud, ils doivent prendre en compte les réglementations pour chaque marché. Pour l'un de leurs moteurs, que se passerait-il s'ils devaient rédiger une règle personnalisée pour chaque pays dans lequel ils se trouvent, mais aussi pour chaque pays dans lequel ils ne se trouvent pas, car ces pays ne devraient pas pouvoir la consulter ? Cela n'est pas évolutif lorsque l'on parle de dizaines de milliers de sources de données pour les schémas, qui changent constamment. Il y a des pétaoctets de télémétrie provenant de ces moteurs.

Ce que vous voudriez écrire, c'est que vous ne pouvez voir les données que pour le pays où vous résidez une seule fois, puis cela s'applique partout. Mais ce n'est pas ainsi que cela se fait. Ils écriraient donc quelque chose comme 700 politiques pour un objet de données, alors qu'il ne devrait y en avoir qu'une seule. Suivre toutes les politiques et réglementations changeantes pour chaque source de données serait presque impossible. Vous seriez constamment hors conformité.

Il n'a jamais été aussi facile de mondialiser une entreprise qu'aujourd'hui, et les clients d'Immuta s'attendent à ce qu'ils puissent faire fonctionner leur infrastructure à l'échelle mondiale sur n'importe quel cloud. Ils devraient être en mesure de déplacer leurs données vers n'importe quel cloud et être en conformité totale.

Immuta applique des règles aux données par le biais de balises plutôt que d'utiliser les données brutes car chaque domaine a son propre jargon pour classer et parler de ses données. Ils ont donc commencé à classer et à baliser de manière générique en utilisant des modèles de concepts généraux, tels que pour la loi HIPAA. Cependant, ces modèles ne sont pas encore infaillibles et il reste encore beaucoup à faire.

La vision de Matt en tant que PDG d'Immuta est d'atteindre un état où les domaines peuvent partager leurs politiques. Par exemple, dans le domaine de la santé, il existe une bonne raison pour laquelle Moderna et Pfizer souhaiteraient travailler ensemble. Il pourrait y avoir un accord sur la manière de gérer les contrôles des données du monde réel avec le milieu universitaire. Donc, s'il existait une politique cohérente pouvant être partagée et co-créée dans un nuage de politiques conceptuelles, ce serait la bonne chose à faire.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
