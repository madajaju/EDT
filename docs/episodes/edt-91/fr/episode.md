---
layout: posts
title: "Combattre l'adversaire cyber en sécurisant votre chaîne d'approvisionnement logicielle"
number: 91
permalink: episode-EDT91-fr
has_children: false
lang: fr
nav_exclude: true
parent: Épisodes
grand_parent: Français
nav_order: 91
tags:
    - cybersecurity
    - devsecops
    - sbom
    - securesupplychain
    - policy
    - process
    - compute

date: Wed Jun 08 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Eric Greenwald

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, architecte en chef des solutions chez Intel, et Eric Greenwald, avocat général de Finite State, abordent la sécurité de la chaîne d'approvisionnement logicielle."
video: "https://youtu.be/url"
description: "Darren Pulsipher, architecte en chef des solutions chez Intel, et Eric Greenwald, avocat général de Finite State, abordent la sécurité de la chaîne d'approvisionnement logicielle."
---

<div>
{% include transistor.html id="d4b56c70" title="#91 Fighting the Cyber Adversary by Securing your Software Supply Chain" %}

{% include youtube.html id="url" %}
</div>

---

Darren et Eric Greenwald, Conseiller juridique général de Finite State, discutent de la sécurisation de la chaîne d'approvisionnement logicielle dans cet épisode.

L'État Fini se concentre sur la recherche de vulnérabilités dans les micrologiciels, le plus souvent des logiciels provenant de tiers qui pourraient déjà comporter des vulnérabilités existantes, avant de les intégrer dans leurs appareils. L'État Fini se concentre principalement sur les dispositifs IoT industriels, les dispositifs médicaux, les automobiles et l'électronique grand public.

Pendant sept ans avant de rejoindre Finite State, Eric a travaillé en tant qu'avocat dans le secteur privé, se concentrant sur les tests de sécurité et l'identification des vulnérabilités pour les entreprises de cybersécurité. Avant cela, il a travaillé dans le domaine de la cybersécurité et de la sécurité nationale au sein du gouvernement, pour le FBI et la CIA, et en tant que conseiller principal pour le Comité du Renseignement de la Chambre des représentants. Son travail gouvernemental a culminé lorsqu'il est devenu le directeur principal de la cybersécurité au Conseil de sécurité nationale de la Maison Blanche.

Eric croit que l'une des raisons pour lesquelles il y a désormais une insistance sur la sécurisation de la chaîne d'approvisionnement est que la menace a évolué. La nature de plus en plus complexe des logiciels, y compris le fait que de nombreux composants ont des vulnérabilités lorsqu'ils sont créés et ne sont découverts que plus tard, rend plus difficile la recherche de dispositifs construits via la chaîne d'approvisionnement logicielle. De plus, les récentes attaques très médiatisées via une violation de la chaîne d'approvisionnement logicielle, telles que SolarWinds, ont rendu les gens plus conscients du danger.

Dans l'attaque SolarWinds, l'auteur a fait preuve de patience, ne causant pas immédiatement de chaos mais attendant un an tout en se baladant à travers les réseaux informatiques américains, cultivant l'accès et les informations. Cette patience est probablement la différence la plus significative entre une attaque nationale et une attaque criminelle. Alors que les attaques criminelles patientes sont parfois plus axées sur un retour sur investissement financier, ceux qui sont derrière une attaque étatique sont prêts à passer des années pour développer leur accès aux renseignements. Cependant, dans les deux cas, les attaques deviennent plus sophistiquées et sont beaucoup mieux placées pour profiter de manière dévastatrice de la complexité de la chaîne d'approvisionnement.

Pour combattre ces attaques, de nouvelles réglementations sont en train d'émerger. L'administration Biden a émis l'ordre exécutif 14028 en mai 2021, qui comporte deux points principaux : le développement sécurisé de logiciels et une liste des composants logiciels (SBOM). L'ordre exécutif ne s'adresse qu'aux marchés publics, mais il est probable que l'industrie privée le suive.

Les détails et recommandations techniques concernant le développement sécurisé de logiciels sont encore en cours d'élaboration. Cependant, une partie de ces recommandations stipule que les fournisseurs de logiciels destinés au gouvernement doivent fournir un SBOM (Software Bill of Materials). Le premier projet de loi relatif aux SBOM a été publié en 2014, ce qui a permis le développement de normes plus matures. Un SBOM est essentiellement une liste des composants logiciels utilisés dans un produit logiciel, pas si différente d'une liste d'ingrédients sur un produit alimentaire. Cela offre une transparence dans la chaîne d'approvisionnement, ce qui est essentiel pour évaluer les vulnérabilités ou pour pouvoir identifier une vulnérabilité découverte ultérieurement.

Un excellent exemple de cela est ce qui s'est passé avec Log4j. Lorsque cette vulnérabilité a été découverte, de nombreuses entreprises ne savaient pas si elles l'avaient dans leur pile. Ce ne serait pas une formule magique, mais un SBOM permettrait aux entreprises de découvrir plus facilement si elles ont le composant logiciel problématique dans leur système et d'agir plus rapidement pour mettre en place un correctif.

Les arguments contre la publication des SBOM (Software Bill of Materials) sont qu'ils fourniront une feuille de route pour les attaquants et révéleront des informations exclusives. Bien que ces préoccupations soient légitimes et doivent être discutées, le Département du Commerce et le Département de la Sécurité intérieure considèrent qu'il est bien plus avantageux pour les défenseurs d'avoir de la transparence que de donner un quelconque avantage aux attaquants. Il existe des projets de loi bipartisans en faveur des SBOMs. Il existe des moyens de réduire le risque que les SBOMs tombent entre de mauvaises mains, tels que des contrats sécurisés ou non fongibles. Les débats sur ces préoccupations se poursuivront dans le secteur public et de plus en plus d'entreprises les adopteront.

Cette législation est en train de se produire car la FDA a suggéré que les fabricants d'appareils médicaux intègrent des SBOM dans le processus d'examen, de sorte que les SBOM gagnent du terrain auprès de ces fabricants. Le monde physique est de plus en plus affecté par les logiciels dans les appareils médicaux, ainsi que par des systèmes intégrés tels que les systèmes de contrôle des centrales électriques, les systèmes de chauffage, de ventilation et de climatisation, les commandes d'aéroport, etc. Par conséquent, les systèmes opérationnels sont en danger, avec des conséquences beaucoup plus importantes que les attaques sur les systèmes d'entreprise.

La difficulté pour les professionnels de la technologie opérationnelle (TO) est que bon nombre des composants industriels sont plus anciens et n'ont pas nécessairement été mis à jour. Néanmoins, les pirates informatiques hésitent à se connecter à Internet et à effectuer des mises à jour, car c'est ainsi qu'ils parviennent à s'introduire. La meilleure solution à ce problème est d'essayer d'accéder à la transparence des composants dans la pile, de scanner le système et les appareils faisant partie du réseau TO, et de procéder à une rétro-ingénierie et à une décompilation pour en comprendre les détails. Fondamentalement, vous devez créer votre SBOM (bill of materials) et évaluer les vulnérabilités.

Ceci est le domaine principal de travail de Finite State. Ils examinent les systèmes et les appareils et effectuent une analyse. Ils disposent d'une plateforme qui automatise l'analyse du code intégré, fournit une lecture des vulnérabilités et identifie et regroupe les vulnérabilités les plus prioritaires. Parfois, il est possible d'éliminer toute une catégorie de vulnérabilité grâce à une seule correction. La création du SBOM en soi n'est donc pas suffisante. Il doit être intégré à un système de gestion des risques pour trier et filtrer les nombreuses vulnérabilités. Trouver les risques les plus prioritaires est un processus complexe, et Finite State peut aider les équipes de sécurité à hiérarchiser leurs actions pour protéger leurs systèmes.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
