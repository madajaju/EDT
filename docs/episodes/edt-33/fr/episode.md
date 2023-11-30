---
layout: posts
title: "La panne d'AWS de novembre 2020"
number: 33
permalink: episode-EDT33-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 33
tags:
    - aws
    - cloudoutage
    - compute
    - csp
    - cloud
    - process
    - cloudreliability
    - multicloud
    - reliability

date: Mon Dec 14 2020 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, architecte principal des solutions, secteur public, chez Intel, parle des enseignements tirés de la panne d'AWS en novembre 2020 et des solutions préventives pour naviguer lors de telles pannes."
video: "https://youtu.be/KQH85zaVUe0"
description: "Darren Pulsipher, architecte principal des solutions, secteur public, chez Intel, parle des enseignements tirés de la panne d'AWS en novembre 2020 et des solutions préventives pour naviguer lors de telles pannes."
---

<div>
{% include transistor.html id="e81503fc" title="#33 The AWS Outage of Nov 2020" %}

{% include youtube.html id="KQH85zaVUe0" %}
</div>

---

## Ce que nous avons appris de la panne d'AWS.

Amazon Web Services (AWS) a subi une panne importante au moment le moins opportun - la veille de Thanksgiving en 2020. Comme ils ont publié leurs journaux de service, il est intéressant de les examiner pour voir ce qui s'est passé et ce que nous pouvons apprendre.

## Chronologie de la panne AWS

Le mercredi 25 novembre 2020, vers 3h00 du matin (heure du Pacifique), AWS procédait à une mise à jour de la région Est en ajoutant des serveurs pour augmenter la capacité de Kinesis. Kinesis est un service d'IA populaire qui effectue des correspondances de motifs sur les fichiers journaux et les fichiers vidéo. Environ une heure et demie après le début de la mise à niveau, les alarmes serveur ont commencé à signaler des erreurs dans les enregistrements Kinesis. Assez rapidement, vers 8 heures du matin, ils ont initialement identifié quelques candidats parmi les services frontaux comme étant la cause principale. Kinesis possède plusieurs services plus petits, un groupe de services frontaux et un groupe de services back-end. Conformément à l'architecture du système, chaque fois qu'un service back-end est en cours d'exécution, un thread est lancé depuis le front-end. Un des problèmes était que le front-end atteignait le seuil du nombre de threads alors qu'ils ajoutaient des serveurs au back-end pendant la mise à niveau. Une fois ce problème identifié, ils ont effectué une correction temporaire avec des mises à jour (correctifs) du système d'exploitation et Kinesis était à nouveau en ligne vers 22h30 et entièrement rétabli vers 1h15 le 26 novembre. Au total, Kinesis n'était pas pleinement opérationnel pendant 21 heures, et bien que tout le monde n'utilise pas cet outil d'IA, l'impact a été étendu.

## Kinesis Impact translates to "Impact Kinesis" in French.

Plusieurs autres services d'Amazon utilisent Kinesis, tels que Amazon Cognito et CloudWatch, et ont connu divers degrés de perturbation. Cognito a été surchargé jusqu'à environ 14 heures ; CloudWatch a été hors service jusqu'à environ 22 heures. Dans un effet domino, les services dépendants de CloudWatch, tels que Lambda et EventBridge, étaient également hors service. Étant donné que EventBridge n'était pas disponible, les services de conteneurs LCS et LKS ont également été affectés.

Les pannes ne se sont produites que dans la région Est et AWS a rapidement ajouté de la capacité dans les autres régions pour éviter une défaillance similaire de Kinesis. Mais pendant la panne, les utilisateurs de la région Est ont rencontré un problème déconcertant, car leur tableau de bord de service et leurs tableaux de bord personnels ne recevaient pas d'informations et affichaient des faux positifs. Ainsi, de nombreuses autres organisations informatiques ont enquêté sur les problèmes car elles ne recevaient pas les bonnes informations. Étonnamment, AWS a été ouvert sur toute l'incident, donc c'est une excellente expérience d'apprentissage.

## Leçons Apprises

L'une des premières leçons est que les opérations simples sur l'infrastructure, telles que l'augmentation de capacité, doivent être comprises et planifiées. Évidemment, AWS n'a pas simplement effectué ces mises à niveau sans réfléchir, mais ils n'ont pas complètement compris l'impact. Même si une opération semble routinière, il est toujours conseillé de laisser les choses échouer dans un environnement de test lors des mises à niveau, même si cela prend plus de temps. Cela est particulièrement important pour les services essentiels aux autres services principaux dépendants.

De plus, les architectures de service ou de micro-service doivent comprendre leur arborescence de dépendance complète afin de pouvoir résoudre les problèmes lorsqu'il y a des pannes. De plus, il est important d'être aussi peu couplé que possible à une dépendance et d'inclure une programmation défensive avec les microservices afin d'éviter l'effet domino qui s'est produit dans ce cas.

Un autre problème à surveiller est les dépendances circulaires. Si, dans une chaîne de microservices qui dépendent les uns des autres, l'un d'eux rencontre un problème, tout peut s'arrêter brusquement, consommant des ressources et ne réalisant rien.

Lors du développement de microservices, gardez à l'esprit que vous n'aurez pas toujours la connectivité aux services dont vous dépendez. Écrire des programmes qui peuvent fonctionner dans un état dégradé, ou du moins indiquer qu'un service ne fonctionne pas, peut faire gagner du temps et des problèmes. Lors de cette panne, rappelez-vous que les tableaux de bord étaient en cours d'exécution en vert même si aucune nouvelle information n'arrivait.

## Qui a géré le mieux la panne ?

De nombreuses sociétés ont été affectées par la panne d'AWS, y compris certaines appartenant à Amazon elle-même. Certaines ont traversé la panne sans difficulté, presque indemnes, tandis que d'autres ont eu plus de mal à récupérer. Ceux qui ont pu s'adapter rapidement avaient une stratégie de cloud hybride multiple, donc ils avaient des clouds alternatifs en tant que sauvegarde. Certains ont utilisé une région différente d'AWS, tandis que d'autres ont utilisé Google ou Azure, et certains sont même revenus à leurs propres data centers ou sites web externes. Au minimum, les sites web affichaient un message indiquant qu'ils rencontraient actuellement des problèmes, plutôt qu'une erreur 404.

Les entreprises qui n'utilisaient pas certains des services spécialisés d'Amazon se sont également mieux débrouillées. Par exemple, les offres de conteneurs gérés EKS et ECS ainsi que Lambda ont été durement touchées et ont été indisponibles pendant une période importante, ce qui signifie que ceux qui dépendaient de ces services étaient sans options.

Pendant la panne, les services d'auto-scaling ne fonctionnaient pas correctement, donc toute entreprise qui avait beaucoup de trafic à ce moment-là devait découvrir ce qui se passait et augmenter manuellement les services. C'était un problème plus important que d'habitude, car c'était la veille de Thanksgiving, un moment où de nombreux consommateurs voyagent et achètent en ligne. Par exemple, Etsy est resté en ligne, mais ils ne pouvaient pas se développer autant qu'ils le feraient normalement, ce qui a entraîné une baisse des ventes.

Les entreprises qui ont leur propre surveillance externe se sont également mieux débrouillées. Certaines ont même alerté AWS des pannes. Elles ne dépendaient pas uniquement du tableau de bord de santé d'AWS, mais disposaient de leur propre surveillance en cours sur leurs serveurs.

Quelle est la principale leçon que nous devrions tirer de cela ? Les organisations devraient prendre en charge leurs ressources cloud, tout comme n'importe quel service public. Tout comme avoir un générateur de secours pour l'électricité afin d'assurer la continuité des activités en cas de panne, les entreprises devraient appliquer les mêmes meilleures pratiques pour les services cloud. Cela signifie qu'avoir un cloud de secours qui peut vous permettre de continuer à fonctionner, même avec une capacité réduite, est essentiel pour faire face à une tempête telle que la panne d'AWS.

## Ressources

Voici la traduction en français : * https://aws.amazon.com/message/11201/

https://www.theverge.com/2020/11/25/21719396/amazon-web-services-aws-outage-down-internet

Veuillez traduire ce qui suit en français : *

Voici ce qui a causé une importante panne du service AWS d'Amazon la semaine dernière. Nous présentons nos excuses.

Amazon Web Services touché par une panne

Voici la traduction en français : 

* https://www.washingtonpost.com/technology/2020/11/28/amazon-outage-explained
Traduction : Explication de la panne d'Amazon



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
