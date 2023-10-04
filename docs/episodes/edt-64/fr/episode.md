---
layout: posts
title: "Suivre et sécuriser le passage du Bit de l'Edge vers le Cloud"
number: 64
permalink: episode-EDT64-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 64
tags:
    - edge
    - compute
    - multicloud
    - cybersecurity

date: Wed Sep 01 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Greg Clifton
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Architecte Principal des Solutions chez Intel, discute du suivi du bit avec Greg Clifton, Directeur du Département de la Défense et du Renseignement chez Intel, lors d'un suivi de l'épisode n°2, ainsi que Steve Orrin, CTO Fédéral chez Intel, qui apporte son expertise en matière de sécurité dans des environnements complexes de l'edge jusqu'au cloud."
video: "https://youtu.be/aIwxVkw0k0o"
description: "Darren Pulsipher, Architecte Principal des Solutions chez Intel, discute du suivi du bit avec Greg Clifton, Directeur du Département de la Défense et du Renseignement chez Intel, lors d'un suivi de l'épisode n°2, ainsi que Steve Orrin, CTO Fédéral chez Intel, qui apporte son expertise en matière de sécurité dans des environnements complexes de l'edge jusqu'au cloud."
---

<div>
{% include transistor.html id="24225e6c" title="#64 Follow and Secure the Bit Edge to Cloud" %}

{% include youtube.html id="aIwxVkw0k0o" %}
</div>

---

Dans l'épisode #2, Greg a expliqué les questions complexes de collecte, de déplacement et d'analyse des données dans un environnement du Département de la Défense (DoD) qui inclut des dispositifs périphériques sur des navires, des avions et même des combattants, ainsi que la nécessité de déplacer et d'analyser rapidement ces données pour des décisions opportunes et exploitables. Le rôle d'Intel est d'aider à réduire les cycles de processus et à soulager les goulots d'étranglement dans le flux de données avec son portefeuille technologique. Tout cela consiste à faire correspondre la technologie à la mission.

Une tendance récente en architecture consiste à déplacer le calcul, le traitement et l'intelligence en avant afin de rencontrer les données plutôt que de déplacer les données vers l'arrière. Cette adaptation offre la meilleure capacité à obtenir des réponses en temps réel et de l'intelligence. Cette approche représente un modèle opérationnel différent qui soulève des questions complexes.

## Matériel hétérogène

Dans l'infrastructure fondamentale, comment fournissez-vous les capacités de calcul, de stockage, de mémoire et de réseau nécessaires pour stimuler l'analyse en périphérie et les traitements là où vous en avez besoin ? Comment gérez-vous ces applications et ces données ? Comment introduisez-vous la qualité et la curation des données au niveau supérieur de la chaîne ? La sécurité est une composante fondamentale de toute infrastructure, et maintenant, les données doivent être protégées jusqu'à la périphérie.

L'industrie doit passer à du calcul plus hétérogène afin que le logiciel sous-jacent puisse s'exécuter sur différentes plateformes matérielles, de sorte que vous ne vous retrouviez pas bloqué dans un logiciel ou un ensemble matériel spécifique. Une partie de la beauté de ce qu'Intel a fait depuis des années est de fournir une portabilité logicielle : le cadre ouvert, x86 et d'autres systèmes sous-jacents.

Un facteur important dans la façon dont Intel développe ses capacités est de comprendre la charge de travail et le flux de données plutôt que de se concentrer sur la modernisation, comme le fait de mettre les choses dans le cloud. Il ne s'agit pas de la façon dont vous procurez les technologies de l'information (cloud ou sur site) mais d'optimiser le flux d'activité de l'entreprise afin de tirer parti de la façon dont les données circulent et de ce qu'elles font réellement.

## DevOps à la rescousse

Un autre aspect critique de ces nouvelles solutions est le temps de déploiement. DevOps est devenu de plus en plus important au sein du DOD, et les efforts pour développer des plates-formes DevOps communes ont considérablement augmenté. Pour écrire du code une seule fois et le faire fonctionner n'importe où (dans le cloud, sur site ou en périphérie), les organisations utilisent le jeu de puces x86 et l'outil oneAPI d'Intel pour déployer des services complexes à travers l'ensemble de l'écosystème. Par exemple, oneAPI permet aux développeurs d'écrire des tâches d'analyse ou d'intelligence artificielle complexes qui s'exécutent sur un GPU, un CPU ou même des FPGA avec la même base de code. Les développeurs peuvent ensuite tester ces systèmes complexes dans leur centre de données, en s'assurant qu'ils se comporteront de la même manière lorsqu'ils seront déployés sur le terrain, ce qui réduit le temps de déploiement.

Être en mesure de tirer parti d'une combinaison d'un environnement DevOps flexible, basé sur la conteneurisation et des frameworks logiciels tels que oneAPI, offre aux programmeurs l'abstraction dont ils ont besoin, tout en bénéficiant d'optimisations matérielles/logicielles intégrées. Une distinction majeure ici est que nous avons trouvé un moyen de tirer pleinement parti des capacités du matériel et d'optimiser le logiciel de sorte qu'une application puisse encore bénéficier d'une amélioration des performances et tirer parti du matériel spécialisé.

L'écosystème des conteneurs offre une abstraction au niveau du système, de sorte que les choses n'ont pas besoin d'être codées en dur. Il offre la possibilité de faire évoluer ou réduire la charge de service en fonction de la capacité. Par exemple, si une fonctionnalité s'exécute en périphérie, dans un centre de données portable ou dans le cloud, et que vous perdez la connectivité ou un élément, vous pouvez toujours mener à bien la mission. Cette connectivité intermittente est vitale dans un environnement du ministère de la Défense.

## Solutions Edge

Beaucoup de gens considèrent Intel comme un fournisseur de silicium ou de matériel, mais l'entreprise a développé des solutions et des architectures de référence dans l'écosystème allant du bord vers le cloud. Un exemple de progrès est une grille tactique navale où le traitement se fait en périphérie, sur les navires, les avions et à terre. Les applications doivent fonctionner sur tout l'écosystème, et cela ne peut pas être fait uniquement avec du matériel. Intel a mis à profit son silicium et ses fonctionnalités de sécurité, et en s'appuyant sur un écosystème de conteneurs, a produit des applications complexes avec plusieurs microservices qui peuvent fonctionner lorsque les actifs sont connectés ou déconnectés.

Un autre exemple d'architectures de bord est le suivi d'objets à travers des maillages de capteurs, même avec des lacunes dans le maillage de capteurs. En effectuant une fusion de capteurs, une fusion de données et des analyses interdomaines, vous pouvez suivre des objets à travers différentes scènes et différents types de capteurs, en redimensionnant pour créer une plateforme de capteurs mobiles capable d'effectuer des analyses et une fusion au niveau du bord. Vous pouvez ensuite transférer ces informations à un ensemble de nœuds distribués qui peuvent travailler en collaboration pour suivre un objet à travers tous ces différents capteurs existants.

Par exemple, si vous suivez un objet et qu'il se déplace entre les capteurs, vous le perdrez pendant un moment. Ce que permet cette intelligence, c'est de connecter ces deux flux et de suivre les zones aveugles. Cela fonctionne non seulement avec des types de capteurs homogènes, mais aussi avec plusieurs types de capteurs tels que les capteurs de mouvement, RF et infrarouges, donc si vous perdez la vidéo mais avez toujours une connexion RF, puis récupérez à nouveau la vidéo, vous pouvez montrer le chemin complet de l'objet. Dans le passé, ce type d'analyse nécessitait le transfert des données vers le centre de données pour traiter ces interactions complexes ; maintenant, nous pouvons le faire au niveau du maillage de capteurs grâce à des microservices en périphérie.

## Flexibilité de déploiement

Une approche avantageuse consiste à construire une fois et à utiliser la même architecture et le même logiciel pour différentes missions avec une exigence analytique. Certains endroits où le calcul intensif se trouve en périphérie peuvent être mis à l'échelle et tirer pleinement parti des capacités matérielles. D'autres plateformes peuvent avoir des capacités de calcul limitées et peuvent exécuter de plus petits microservices ne fournissant qu'une partie de la solution complète. De nouvelles capacités de mission et des services peuvent être déployés rapidement en construisant ces microservices une seule fois pour plusieurs cas d'utilisation.

## Sécurité en périphérie

La complexité est parfois le pire ennemi de la sécurité, mais les principes fondamentaux de sécurité peuvent également sécuriser les données et les applications en périphérie. Plutôt que d'adopter l'ancienne approche de protéger le serveur en espérant que tout reste là, il est essentiel de comprendre où les données circulent et tous les endroits où elles se trouvent, en les protégeant, peu importe l'environnement dans lequel elles s'exécutent. Les approches basées sur les risques et les concepts tels que la confiance zéro ont pris de l'ampleur car ils adoptent une vision indépendante des systèmes en matière de sécurité.

Réduit à l'essentiel, la confiance zéro signifie le refus par défaut. Personne n'est autorisé à entrer à moins d'en avoir besoin, et seulement pour la durée de l'action nécessaire. Lorsque les contrôles d'accès temporels sont associés à une approche basée sur les risques pour protéger les données tout au long de leur cycle de vie, on obtient la capacité de protéger les données, peu importe où elles se trouvent et qui y accède. Cette technique est l'un des moyens de sécuriser ces environnements hautement complexes.

L'action pratique à prendre dans ces écosystèmes consiste à appliquer une politique qui exploite des contrôles répondant au niveau de risque d'un système donné à un moment donné, puis à les surveiller et les mettre à jour en temps réel pour faire face au monde cybermenaçant en perpétuelle évolution. Utilisez les contrôles techniques que les capacités matérielles et logicielles fournissent déjà, tels que le démarrage sécurisé, la racine de confiance matérielle avec les modules TPM ou les clés de stockage SGX, le chiffrement, etc.

Il n'existe pas de solution miracle que vous pouvez acheter pour fournir une solution de sécurité complète dans ces écosystèmes complexes. Il s'agit de créer et d'appliquer des politiques de sécurité à mesure que les menaces évoluent, et de les déployer à grande échelle en tirant parti du matériel, des logiciels et des processus nécessaires pour sécuriser les données à mesure qu'elles circulent de l'extrémité de l'écosystème jusqu'au bout.

Le cadre DevOps fournit des mécanismes efficaces pour gérer la sécurité de tous les actifs de l'écosystème. Les conteneurs doivent être équipés d'instruments pour appliquer les contrôles de sécurité et les politiques. La sécurité doit être intégrée au processus DevOps lui-même car si vous comptez sur le développeur pour mettre en œuvre la sécurité, chacun le fera légèrement différemment, augmentant ainsi la complexité et la variabilité du système. Le développeur doit avoir les capacités et les contraintes sur lesquelles il doit se baser pour développer.

Les développeurs devront toujours effectuer des travaux de sécurité, tels que s'assurer qu'ils utilisent des outils de sécurité adaptés à l'environnement de menace particulier, mais le travail intensif, la complexité, devrait être abstraite dans l'architecture DevOps.

L'une des zones critiques dans un environnement de théâtre complexe est la gestion des périphériques de bord, tels que la surveillance et la mise à jour du micrologiciel. S'assurer que ces appareils sont sécurisés afin de pouvoir prendre en charge la sécurité des données et les profils et politiques déployés dans les systèmes à grande échelle va nécessiter de l'innovation. C'est pourquoi l'écosystème se développe actuellement : pour relever ce défi.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
