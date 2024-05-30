---
layout: posts
title: "Un argument en faveur d'une approche holistique de la sécurité des infrastructures critiques."
number: 116
permalink: episode-EDT116-fr
lang: fr
nav_exclude: true
nav_order: 116
tags:
    - networksecurity
    - cybersecurity
    - people
    - process
    - policy

date: Wed Dec 14 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, Darren parle de la convergence de la cybersécurité des technologies opérationnelles et informatiques avec l'expert en sécurité Steve Orrin et l'expert en technologies opérationnelles industrielles, le Dr Anna Scott."
video: "https://youtu.be/url"
description: "Dans cet épisode, Darren parle de la convergence de la cybersécurité des technologies opérationnelles et informatiques avec l'expert en sécurité Steve Orrin et l'expert en technologies opérationnelles industrielles, le Dr Anna Scott."
---

<div>
{% include transistor.html id="b7873e57" title="#116 An Argument for a Holistic approach to Critical Infrastructure Security" %}

{% include youtube.html id="url" %}
</div>

---

## Il y a une réelle menace pour les Infrastructures Critiques.

Selon le Dr Scott, les organisations d'ergothérapie utilisent toujours le modèle traditionnel de Purdue, qui exploite des réseaux isolés par air-gap et pare-feu. Cependant, ce modèle commence à s'effondrer à mesure que les réseaux informatiques et les réseaux OT convergent. Les entreprises cherchent à obtenir une meilleure compréhension de ce qui se passe dans leur infrastructure opérationnelle. Par conséquent, elles créent des brèches dans les réseaux auparavant bien isolés, les exposant ainsi à des menaces cybernétiques. De plus, les cybercriminels trouvent des moyens de contourner les réseaux isolés par air-gap et pare-feu.

Steve soutient que l'exploitation des meilleures pratiques en matière de technologies de l'information (IT) peut être bénéfique, mais les professionnels en technologie opérationnelle (OT) et les professionnels en technologies de l'information ont des moteurs de motivation et des modèles de fonctionnement différents. Il est toujours judicieux de continuer à isoler votre réseau, mais cela devrait être l'une des nombreuses stratégies utilisées pour protéger la cybersécurité de l'infrastructure critique. La sécurité en OT devrait s'inspirer des meilleures pratiques en cybersécurité de l'IT pour des idées visant à améliorer leurs réseaux et leur infrastructure.

## Différences entre l'informatique (IT) et le système opérationnel (OT) entravant les meilleures pratiques.

Les systèmes informatiques sont traditionnellement mis à jour rapidement ou de manière continue en fonction des profils de sécurité. L'un des outils principaux pour améliorer la sécurité est l'hygiène de base de la sécurité grâce à la mise à jour (patching) des systèmes d'exploitation, du micrologiciel (firmware) et des logiciels dans l'infrastructure informatique. Cependant, comme le souligne le Dr Scott, les systèmes OT (Opérationnels) qui gèrent les infrastructures critiques ne peuvent pas subir d'interruption de service, et la fenêtre de mise à jour de ces systèmes est mesurée en années, et non en jours. Il n'est pas rare que les dispositifs de l'infrastructure OT fonctionnent pendant 5 à 10 ans sans interruption, ce qui signifie aucune mise à jour via les correctifs (patch).

Par exemple, dans l'industrie pétrolière et gazière, les raffineries fonctionnent en continu pendant quatre à cinq ans, ont une période d'arrêt de une à trois semaines pour des mises à niveau, puis fonctionnent à nouveau pendant quatre à cinq ans. Ces modèles d'exploitation ne sont pas propices aux mises à jour permanentes de sécurité traditionnellement utilisées par les organisations informatiques. Cependant, Steve développe de nombreux autres outils de cybersécurité qui devraient être mis à profit lorsque les correctifs de cybersécurité ne peuvent pas être appliqués aux dispositifs existants en raison de leur infrastructure de contrôle critique.

## Meilleure pratique d'évaluation des risques

La meilleure pratique principale en matière de cybersécurité est l'évaluation des risques. Même si la réparation des risques peut être différente, le processus d'évaluation des risques peut être utilisé de manière égale dans les environnements OT (technologies opérationnelles) et ses environnements. Steve affirme que la première étape du processus d'évaluation des risques consiste à obtenir un inventaire complet des équipements matériels, des micrologiciels et des logiciels dans votre environnement OT. Cette première étape est essentielle pour évaluer votre position face aux menaces cybernétiques et évaluer les risques que votre organisation est prête à prendre. La prochaine étape consiste à évaluer les CVE (vulnérabilités et expositions communes) par rapport à votre inventaire connu.

Il est essentiel de reconnaître que c'est un processus continu et non ponctuel ou périodique. Certains professionnels en sécurité opérationnelle ont argumenté que leurs environnements de sécurité opérationnelle sont statiques et ne nécessitent pas d'évaluation continue des risques. Cependant, Steve souligne que même si les environnements de sécurité opérationnelle peuvent être fixes, l'environnement des menaces change constamment et les facteurs commerciaux peuvent modifier la position de risque de l'organisation. Par conséquent, une évaluation continue des risques doit être réalisée pour protéger les infrastructures critiques des cybercriminels.

## Traiter avec des fournisseurs OT

Un autre facteur intéressant dans l'infrastructure OT est le modèle de sécurité partagée avec les fournisseurs de dispositifs. Dans de nombreux cas, ces dispositifs intégrés contrôlant une infrastructure critique de plusieurs millions de dollars sont gérés par le fournisseur, et non par le professionnel de l'OT. Le fournisseur peut uniquement effectuer des correctifs et des mises à jour de sécurité informatique sur les dispositifs. Cela peut parfois entraîner des vulnérabilités dans votre environnement OT, augmentant ainsi le risque d'infiltration cybernétique. Steve apporte des outils supplémentaires de cybersécurité pour aider à protéger les actifs qui ne peuvent pas être corrigés à l'aide de correctifs de sécurité informatique critiques, notamment en isolant davantage les dispositifs affectés, en déployant des dispositifs de surveillance et en intégrant des modèles de conception de type "canary" dans l'infrastructure OT. Ces outils peuvent aider à protéger et à isoler le dispositif pour prévenir la propagation et l'accès aux actifs compromis.

## Que faire lorsque vous êtes compromis

Alors que faites-vous lorsque vous avez une infrastructure critique qui a été compromis ? Est-ce que l'organisation peut gérer la fermeture de l'infrastructure infectée ? Quels sont les plans de continuité d'activité en place en cas de situations dangereuses ? Est-ce que cela peut être utilisé également lorsqu'un événement de cybersécurité se produit ?

L'élément clé ici est d'isoler l'infection aussi rapidement que possible afin de minimiser l'impact sur l'infrastructure critique. Je réduis l'effet sur la fiabilité opérationnelle de l'infrastructure nécessaire. L'objectif est de réduire l'impact et protéger la sécurité des personnes et de l'infrastructure concernée.

## Découvrez-en plus

Continuez à chercher plus de podcasts sur la cybersécurité des systèmes OT. De plus, un livre blanc décrit les défis de la convergence des environnements de cybersécurité des systèmes OT et IT.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
