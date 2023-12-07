---
layout: posts
title: "Gérer les risques face aux ransomwares"
number: 60
permalink: episode-EDT60-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 60
tags:
    - cybersecurity
    - ransomware
    - riskmanagement
    - process

date: Wed Aug 04 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, première partie sur deux, Darren discute des tendances en matière de sécurité avec Steve Orrin, invité régulier et CTO d'Intel, Fédéral. Au cours de l'année écoulée, on a constaté une augmentation du nombre et de la sophistication des cyberattaques. Les trois domaines clés des attaques récurrentes sont les rançongiciels, les attaques de la chaîne logistique et les violations de données."
video: "https://youtu.be/url"
description: "Dans cet épisode, première partie sur deux, Darren discute des tendances en matière de sécurité avec Steve Orrin, invité régulier et CTO d'Intel, Fédéral. Au cours de l'année écoulée, on a constaté une augmentation du nombre et de la sophistication des cyberattaques. Les trois domaines clés des attaques récurrentes sont les rançongiciels, les attaques de la chaîne logistique et les violations de données."
---

<div>
{% include transistor.html id="8b0a716a" title="#60 Managing Risk in the Face of Ransomware" %}

{% include youtube.html id="url" %}
</div>

---

Au cours de l'année écoulée, le nombre et la sophistication des cyberattaques ont augmenté. Les trois principaux domaines d'attaques récurrentes sont les rançongiciels, les attaques sur la chaîne logistique et les violations de données.

Les attaques sont devenues plus sophistiquées pour plusieurs raisons. Tout d'abord, à mesure que la sécurité s'améliore, l'adversaire doit continuer à s'améliorer également. Les criminels organisés, les acteurs des États-nations et autres agents de menace reconnaissent qu'il faut plus de sophistication pour compromettre et contrecarrer les contrôles de sécurité. Tout comme les organisations ont des processus de cycle de vie de développement logiciel, la communauté de logiciels malveillants en a aussi. Ils disposent d'outils et de cadres sur lesquels ils se basent et de bons processus pour intégrer la qualité dans leurs systèmes. Différents acteurs achètent, vendent et empruntent du code. Ils apprennent les uns des autres et partagent des informations sur le web sombre. Ils ne sont pas seulement des équipes de pirates désorganisées ; ils fonctionnent davantage comme des entreprises.

Ces agents de menace font partie d'une industrie qui pèse plus d'un milliard de dollars. L'argent important alimente le besoin de maturité. Nous ne pouvons plus simplement ajouter la sécurité ; elle doit être intégrée, et intégrée partout, non seulement dans les produits, mais aussi dans l'infrastructure et les processus. C'était l'une des leçons de SolarWinds : même si vous créez un bon produit, l'infrastructure qui le soutient peut être vulnérable.

Les récentes attaques montrent que personne n'est à l'abri. Souvent, les organisations supposent à tort qu'elles sont en sécurité car elles ne font pas partie des services financiers, du gouvernement ou d'autres industries à haute valeur ajoutée. Cependant, les attaques récentes contre des entreprises telles que JBS Foods, McDonald's et Audi ont montré que personne n'est à l'abri. Les entreprises, quel que soit leur produit, dépendent de leur infrastructure numérique pour fonctionner correctement ; l'attaque contre JBS Foods a paralysé la plus grande industrie de transformation de viande au monde.

Aucun élément ne peut servir de solution miracle pour prévenir ces attaques. Il y a de l'espoir, mais cela demande beaucoup de travail. Une organisation doit avoir la diligence d'appliquer les bons indicateurs de risque pour mettre en place une sécurité correcte. Si vous ne comprenez pas votre propre risque, aucun nombre de contrôles de sécurité ne pourra fonctionner car vous ne saurez pas si vous les appliquez au bon endroit.

La clé est de commencer avec le bon ensemble de politiques et de risques pour votre organisation. Une étape fondamentale consiste à refuser toutes les demandes d'accès jusqu'à ce qu'elles soient prouvées dignes, même si votre organisation n'a pas encore pleinement compris comment déployer une architecture de confiance zéro. Cela signifie qu'il y a une porte à chaque entrée, plutôt qu'une clé principale pour tout ce qui se trouve à l'intérieur. Le refus par défaut est un principe fondamental de la confiance zéro.

Si la force d'une entreprise n'est pas dans la cybersécurité, ou si les fonds ne sont pas disponibles pour une équipe interne suffisante, il existe de nombreuses ressources pour aider. Les fournisseurs de services de sécurité gérés (MSP) sont une bonne option, mais il devrait toujours y avoir au moins un expert en interne : un directeur de la sécurité. Cette personne possède le contexte local de l'expérience dans le domaine pour travailler avec le MSP et apporter cette connaissance et la propager dans toute l'organisation. Le MSP gère vos outils de sécurité et configurations, mais vous avez besoin de quelqu'un pour transmettre la sagesse en matière de sécurité aux unités commerciales et informatiques. À la lumière des récentes attaques, une équipe de sécurité n'est pas facultative.

Chaque entreprise devrait avoir un plan en place pour une attaque de ransomware. Ce n'est pas le moment de le mettre en place une fois que cela s'est déjà produit. Une base essentielle est de sauvegarder régulièrement vos données. Conservez des copies impeccables des données, des systèmes, des applications et des configurations dans un environnement de stockage hors ligne et hors bande. Six mois de données de sauvegarde propres sont importantes car parfois, un ransomware peut se trouver dans les sauvegardes avant d'être détecté. De plus, assurez-vous que les plateformes ou les serveurs nécessaires pour exécuter votre base de données soient disponibles hors ligne, afin que vous puissiez les mettre en service en cas de basculement ou de modèle de redondance.

C'est essentiellement la planification de la continuité des activités. Tout comme une organisation aurait un plan de continuité en cas de catastrophe physique telle qu'une inondation ou une panne de courant, il devrait également y avoir un plan pour continuer avec les applications d'entreprise critiques afin de reprendre au moins partiellement leur fonctionnement pendant que le problème est résolu.

Un moyen d'accomplir cette redondance est d'être en mesure de se connecter rapidement au cloud lorsque cela est nécessaire, en maintenant les ressources cloud dans un état impeccable, voire même chez un autre fournisseur de services cloud. Une autre étape consiste à avoir un canari dans la mine. Cela signifie déployer des systèmes à travers toute l'entreprise dotés de capteurs extrêmement sensibles. Afin d'éviter les problèmes de performance, de stockage et de vitesse, vous pouvez les déployer dans des endroits stratégiques plutôt que sur l'ensemble du système, afin qu'ils servent de signaux d'avertissement précoces.

Créer un plan à l'avance aidera également à relever le défi de savoir quoi faire au moment de la crise, que ce soit de payer la rançon ou d'appeler le FBI. Le plan devrait être sur papier et impliquer non seulement vos experts techniques, mais aussi vos avocats, PDG, directeurs financiers, etc., et tout le monde devrait y avoir accès. Vous devriez savoir comment acheter des bitcoins et avoir les numéros des bureaux locaux du FBI ainsi que d'autres informations. Mettez en pratique le plan comme un exercice pour vérifier s'il fonctionne, tout comme vous le feriez pour un plan de reprise après sinistre ou de continuité d'activité.

Certaines industries peuvent penser qu'elles sont en sécurité si elles maintiennent séparées leur technologie opérationnelle (OT) et leur technologie de l'information (TI), mais elles ne sont pas réellement séparées. Par exemple, une chaîne de production peut être exploitée avec des machines informatiques, mais une grande partie de ce qui entraîne la chaîne d'approvisionnement, la logistique et l'organisation générale repose sur des systèmes informatiques. Si ces systèmes tombent en panne, rien n'entre ni ne sort. Les systèmes informatiques sont essentiels à la mission et l'apprentissage des attaques récentes nous montre que nous dépendons de la technologie numérique pour toutes nos entreprises.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
