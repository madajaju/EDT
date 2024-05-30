---
layout: posts
title: "Organisation de courtage dans le cloud Partie 2"
number: 57
permalink: episode-EDT57-fr
lang: fr
nav_exclude: true
nav_order: 57
tags:
    - crossfunctionalcollaboration
    - security
    - training
    - multicloud
    - zerotrust
    - cybersecurity

date: Wed Jul 14 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Dave Shrestha
    - Kevin Bleckmann

img: thumbnail.png
image: thumbnail.png
summary: "Dans la deuxième partie de cette série en deux parties, Darren Pulsipher, architecte en chef des solutions, ainsi que Dave Shrestha et Kevin Bleckman, architectes de solutions cloud d'Intel, discutent des avantages et des services d'une organisation de courtage de cloud."
video: "https://youtu.be/url"
description: "Dans la deuxième partie de cette série en deux parties, Darren Pulsipher, architecte en chef des solutions, ainsi que Dave Shrestha et Kevin Bleckman, architectes de solutions cloud d'Intel, discutent des avantages et des services d'une organisation de courtage de cloud."
---

<div>
{% include transistor.html id="3542904b" title="#57 Cloud Broker Organization Part 2" %}

{% include youtube.html id="url" %}
</div>

---

# Considérations pour la sélection du cloud

Il y a sept ans, lorsque Dave et Kevin ont commencé pour la première fois l'équipe de courtiers en nuage d'Intel, il y avait des différences significatives entre les fournisseurs de services de nuage en termes de disponibilité régionale, mais maintenant, avec la maturité, les différences sont moindres. Certains fournisseurs se spécialisent dans des domaines spécifiques tels que l'IA et l'apprentissage automatique ou les services de base de données gérées avancés, et il y a des facteurs de coût, mais ils sont plus similaires que différents. En général, les fournisseurs de cloud deviennent de plus en plus une commodité à mesure qu'ils mûrissent.

La sécurité est bonne et assez standard parmi les fournisseurs de cloud. Auparavant, Intel utilisait des produits de fournisseurs externes pour gérer la sécurité des services cloud. Les fournisseurs de cloud ont maintenant intégré une grande partie de cela dans leurs plates-formes, et Intel a basculé vers l'utilisation de composants intégrés supplémentaires. Il reste encore beaucoup de travail à faire dans cet espace. Dans certains cas, vous devrez toujours assurer vous-même la sécurité, mais les fournisseurs vont dans la bonne direction. L'utilisation d'outils intégrés n'est pas l'option la plus facile pour les nouvelles entreprises car elle n'est pas entièrement gérée, mais une fois que vous avez les compétences et la maturité nécessaires, au moins les outils sont fournis.

La gestion des coûts est toujours un art ; beaucoup de personnes sont choquées par leur première facture de cloud. Bien qu'il existe des outils intégrés, des conseillers et des calculateurs de cloud public pour aider, il y a des coûts cachés. Les frais d'entrée et de sortie sont probablement la première surprise, suivis par la surprovision. Intel a un optimiseur de cloud alimenté par Densify qui permet d'identifier les ressources surprovisionnées et de recommander, grâce à une analyse détaillée, les tailles et les familles d'instances les plus optimales.

Certaines charges de travail doivent rester sur site, en particulier pour les grandes entreprises comme Intel qui disposent d'un centre de données sur site important. L'équipe de courtage cloud dispose d'un outil interne appelé l'outil de cadre décisionnel qui peut aider à placer la charge de travail appropriée au bon endroit, et parfois sur site est la meilleure solution.

# Considération de la charge de travail pour le placement dans le cloud public

Sans outil pour prendre la décision, il y a cinq domaines à considérer.

*Sécurité: Assurez-vous de connaître les fournisseurs d'identité, le chiffrement, la conformité et les options de connexion unique. Ce sont les mêmes éléments avec lesquels vous traitez normalement en local. Au lieu d'avoir des outils séparés, il est préférable d'avoir des outils qui couvrent à la fois les environnements locaux et le cloud public, afin que vos équipes n'aient pas à réapprendre des outils séparés.

Confidentialité

Stabilité de la charge de travail

Affinité des données/gravité des données : Assurez-vous que votre fournisseur de services cloud est disponible dans les régions dont vous avez besoin. Certains fournisseurs de services cloud ont des zones de disponibilité, ou des centres de données, dans toutes leurs régions, tandis que d'autres n'en ont pas. De plus, s'il est nécessaire de connecter une charge de travail à de nombreux systèmes locaux, il n'est pas logique de placer cette charge de travail dans le cloud public.

Coût : Il existe toujours des différences de coût entre les fournisseurs de services de cloud public, surtout avec les instances de calcul importantes. Prenez également en compte les coûts de sortie de données.

## Comment vendre votre service de courtier cloud

L'adhésion au service de courtage cloud peut être difficile pour certains, comme les développeurs qui ont l'habitude d'avoir le contrôle et de créer des instances à leur guise. Il peut également y avoir des problèmes de croissance. Lorsque les employés d'Intel ont obtenu leurs comptes pour la première fois, ils se sont sentis incertains, et ensuite le service de sécurité de l'information envoyait des messages lorsqu'ils faisaient quelque chose de mal, et ils ne savaient pas nécessairement ce qu'ils avaient fait ni comment le corriger. À mesure que le service évoluait et se développait, ces problèmes se sont résolus d'eux-mêmes grâce à l'intervention de l'équipe et à l'utilisation de correctifs automatiques.

Les gens ont constaté que le service était finalement un avantage car il offrait un moyen rapide et facile d'accéder au cloud public avec tout le support dont ils avaient besoin. Après un certain temps, le service a commencé à se vendre par lui-même.

L'une des principales prestations que l'équipe offre est de servir de pont entre les partenaires commerciaux clients d'Intel et les groupes de sécurité de l'information afin de contrebalancer les politiques de sécurité excessivement agressives qui causent des tracas et une trop grande gestion des tickets. L'équipe offre l'équilibre nécessaire qui permet aux développeurs d'avoir suffisamment de liberté pour travailler dans un cadre sécurisé tout en respectant les exigences de sécurité. Les courtiers jouent essentiellement le rôle de médiateurs entre la sécurité de l'information et les développeurs.

L'équipe de courtiers Cloud propose également des formations en faisant venir les fournisseurs Cloud pour organiser des ateliers. Cet avantage a également été généré par le Centre d'Excellence Cloud, où les personnes ont demandé des formations dans des domaines spécifiques, puis l'équipe a négocié avec les fournisseurs.

En plus des fournisseurs externes, Intel a fait appel à des équipes internes pour mettre en avant ce qu'ils avaient réalisé avec le cloud public afin que d'autres équipes puissent bénéficier de ces connaissances.

Les équipes de courtage de cloud au sein des entreprises peuvent fournir une gamme de services et d'avantages tels que la sécurité et l'efficacité des coûts, surtout à mesure que les services de cloud public se développent et deviennent de plus en plus indispensables aux opérations.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
