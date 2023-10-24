---
layout: posts
title: "Enseignement à distance et apprentissage."
number: 11
permalink: episode-EDT11-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 11
tags:
    - remotelearning
    - compute
    - technology
    - people
    - edge
    - telelearning

date: Tue Aug 11 2020 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Erin Moseley
    - Grant Kelly

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, Erin Moseley, Sr. Account Exec pour l'Éducation chez Intel, et Grant Kelly, Solution Architect pour l'Éducation chez Intel, rejoignent Darren pour parler des défis de l'apprentissage à distance et de l'enseignement, ainsi que des changements massifs que les districts scolaires, les enseignants, les parents et les étudiants absorbent pendant la pandémie de Covid-19. Découvrez comment les étudiants et les enseignants se connectent avec de nouvelles technologies et de nouvelles méthodes d'apprentissage."
video: "https://youtu.be/b-PT-b0W4Q4"
description: "Dans cet épisode, Erin Moseley, Sr. Account Exec pour l'Éducation chez Intel, et Grant Kelly, Solution Architect pour l'Éducation chez Intel, rejoignent Darren pour parler des défis de l'apprentissage à distance et de l'enseignement, ainsi que des changements massifs que les districts scolaires, les enseignants, les parents et les étudiants absorbent pendant la pandémie de Covid-19. Découvrez comment les étudiants et les enseignants se connectent avec de nouvelles technologies et de nouvelles méthodes d'apprentissage."
---

<div>
{% include transistor.html id="e48d397d" title="#11 Distance Teaching and Learning" %}

{% include youtube.html id="b-PT-b0W4Q4" %}
</div>

---

## Considérations émergentes

Les enseignants, le personnel, les parents et les élèves sont tous confrontés à des défis différents dans le passage soudain à l'apprentissage à distance. Du côté informatique des districts scolaires, il y a tout un tas de considérations émergentes. Que devons-nous faire avec le scénario de l'appareil personnel (BYOD) provenant de réseaux à confiance zéro ? Comment protéger la vie privée et gérer la sécurité avec tous les différents nouveaux modes de communication entre les enseignants, le personnel, les parents et les élèves ? Comment maintenir une expérience en classe simplifiée et gérée ? Comment offrir un soutien lorsque la structure traditionnelle du service d'assistance n'existe pas ? De plus, nous ne pouvons pas oublier qu'il y a un aspect social important qui doit garantir une expérience fluide. Un élève de troisième année distraité par des problèmes techniques lorsqu'il doit se connecter avec les enseignants et ses camarades aura une expérience d'apprentissage à distance réduite.

## Systèmes de services et plateformes pour l'éducation

Il y a toujours eu de la complexité avec les différentes couches de services et de plateformes, par exemple, la suite de productivité avec G Suite et Office 365. La question maintenant est ce que nous pouvons faire avec les systèmes de gestion de l'apprentissage dans cette approche en couches dans l'intégration du système d'information des étudiants ? Nous devons examiner comment nous exploitons nos capacités en termes de scalabilité. Nous devons considérer différentes solutions d'infrastructure en tant que service (IAAS) et de plateforme en tant que service (PAAS), les services de stockage, la confidentialité et la sécurité, et bien sûr, les plateformes sous-jacentes qui les soutiennent.

Auparavant, les outils de visioconférence et de collaboration avaient une utilisation limitée, peut-être pour inviter un conférencier, par exemple. Maintenant, cependant, ils sont très largement utilisés comme outils principaux et ont ajouté à la complexité du système.

## Options d'hébergement de service

Il existe deux modes principaux qui sont utilisés pour accéder aux services : l'appareil en tant que portail vers les services (logiciels, infrastructures ou plateformes), et l'appareil faisant partie du réseau interne. Auparavant, la plupart relevaient de la dernière catégorie, où il y avait des préoccupations limitées concernant des éléments tels que la mise à jour et la conformité aux politiques, car les appareils étaient constamment connectés aux sites internes de l'école, qu'il s'agisse d'appareils personnels ou appartenant au district. Maintenant, avec les différents types de connectivité, nous devons nous préoccuper de la scalabilité de la bande passante et de la manière dont nous la mettons en œuvre.

## Dispositif en tant que portail vers des services

Des plateformes telles que G Suite, Office 365 et celles dédiées à la visioconférence et à la collaboration posent problème car elles créent une dépendance envers un tiers. Les districts scolaires n'ont pas le contrôle sur la sécurité, la confidentialité et les performances. Il est important de reconnaître que la connexion à ces services de cloud est liée à l'hôte interne, qu'il s'agisse d'un cloud privé ou d'un centre de données local, qui offre des services sous-jacents tels que la gestion des identités, les systèmes d'information des étudiants, éventuellement le filtrage du contenu, etc. Les avantages, cependant, sont une diminution du trafic entrant vers le centre de données ainsi qu'une évolutivité et une facilité de gestion inhérentes.

## Appareil en tant que partie du réseau/Cloud privé

Mettre en place un réseau privé virtuel (VPN) est une nouvelle idée pour la plupart des districts scolaires. Les entreprises utilisent les VPN depuis un certain temps déjà et les districts scolaires devront peut-être emboîter le pas pour répondre aux nouveaux besoins de l'apprentissage à distance. Quelques inconvénients d'un VPN sont la congestion du réseau, la scalabilité et le trafic provenant de réseaux à confiance zéro. Le principal avantage est qu'il fonctionne comme une extension du réseau interne, ce qui permet d'étendre la gestion de la sécurité et le chiffrement du trafic aux clients VPN. Un autre grand avantage est l'accessibilité à tous les services nécessaires en interne.

## Contraintes émergentes<h2>

Les goulots d'étranglement sont différents pour l'apprentissage à distance. Pour les entreprises, lorsque la main-d'œuvre est passée en virtuel, un taux prévu était d'environ 10% de charge VPN. Pour l'éducation, ce chiffre sera considérablement plus élevé, créant un possible goulot d'étranglement VPN. La scalabilité des services hébergés est un autre domaine à considérer. Même si les services se trouvent dans un cloud public, ils se connectent à un cloud privé ou à un centre de données sur site pour des choses telles que l'authentification unique, les informations sur les étudiants, le trafic et même le filtrage de contenu. La bande passante d'accès Internet dédiée, ainsi que la gestion de la transmission de bande passante dans le centre de données, sont des considérations importantes.

L'accès à un composant de service d'assistance doit également être scalable pour éviter les goulots d'étranglement.

La principale préoccupation des districts scolaires actuellement, cependant, est de donner accès à tous leurs élèves. Pour certains élèves, il y a un goulot d'étranglement simplement pour se connecter à Internet à la maison. Lorsque ce problème s'ajoute à toutes les différentes couches, les goulets d'étranglement émergents deviennent très complexes.

Pour lutter contre ces problèmes potentiels, les districts scolaires doivent prendre le temps et les ressources nécessaires pour créer une architecture solide qui sera résiliente plutôt que de construire un fouillis improvisé.

## Scalabilité

Historiquement, les districts scolaires se sont développés dans le centre de données et ont étendu certains de ces services aux sites scolaires. Ainsi, l'architecture existe généralement pour accueillir l'agrégation du corps professoral, du personnel et des étudiants pour des choses comme l'authentification, la gestion des correctifs, la distribution de logiciels, etc. Maintenant que l'extension se fait dans la salle de classe virtuelle, cela nous ramène à la mise à l'échelle des services dans le centre de données.

## Trouver l'équilibre

Auparavant, seuls les deux facteurs d'on-prem dans le centre de données du bureau central et les liens LAN vers les sites scolaires étaient en jeu. Maintenant, il y a un facteur supplémentaire, celui d'accueillir toutes les salles de classe virtuelles, c'est-à-dire le salon de chaque élève et professeur. Comment pouvons-nous nous adapter à cela ? Tout dépend du concept principal de trouver l'équilibre entre ce dont vous avez besoin pour votre district scolaire. Chaque district est différent en termes de taille et de maîtrise de la technologie, et il y a de nombreux éléments en mouvement.

## Résolution des goulots d'étranglement.

Que peut Intel faire pour aider à résoudre ces goulots d'étranglement que nous avons identifiés ?

La gestion des points de terminaison et la sécurité des points de terminaison sont là où le service d'assistance informatique intervient. Nous cherchons des moyens de pouvoir offrir une assistance à distance plutôt que des visites régulières sur les sites scolaires.

Nous pouvons examiner le centre de données et l'infrastructure et élaborer une stratégie qui nous permettra de mettre en échelle le logiciel défini par réseau et l'infrastructure. De plus, nous pouvons également intégrer une explosion de cloud d'infrastructure en tant que service, tout en tenant compte des schémas de trafic.

## Composants Intel pour résoudre les goulots d'étranglement

Intel peut aider dans trois grandes catégories : calcul, stockage et réseau. Lorsque nous examinons le renforcement de l'infrastructure définie par logiciel et les considérations importantes, cela tourne autour de cet ordinateur avec des processeurs Intel, des produits de stockage et des capacités réseau. Plutôt que d'être liée et limitée par des interfaces physiques et des appareils, l'infrastructure définie par logiciel peut se développer et intégrer d'autres ressources de calcul, de stockage et de réseau. Personne ne sait exactement quel sera le paysage lorsque nous retournerons à l'école, et cette infrastructure définie par logiciel est dynamique et offrira la plus grande flexibilité.

Il existe de nombreuses options pour les districts scolaires afin de construire un environnement viable et sécurisé pour l'apprentissage à distance. Bien que nous ayons abordé les sujets de la confidentialité et des menaces et solutions de sécurité dans cet épisode, la prochaine fois nous plongerons profondément dans ces sujets importants.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
