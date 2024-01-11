---
layout: posts
title: "Sécuriser votre château avec la confiance zéro."
number: 84
permalink: episode-EDT84-fr
has_children: false
lang: fr
nav_exclude: true
parent: Épisodes
grand_parent: Français
nav_order: 84
tags:
    - cybersecurity
    - zerotrust

date: Sat Aug 20 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin
    - Cameron Chehreh

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, Darren discute de la sécurité de confiance zéro avec Steve Orrin d'Intel, CTO du secteur public, et Cameron Chehreh, vice-président-directeur général du secteur public."
video: "https://youtu.be/url"
description: "Dans cet épisode, Darren discute de la sécurité de confiance zéro avec Steve Orrin d'Intel, CTO du secteur public, et Cameron Chehreh, vice-président-directeur général du secteur public."
---

<div>
{% include transistor.html id="e3f35ec7" title="#84 Securing Your Castle with Zero-Trust" %}

{% include youtube.html id="url" %}
</div>

---

Le vieux modèle de sécurité pourrait être comparé à un château, avec des gardes le long du chemin et un fossé entourant le château. Toutes les joyaux de la couronne, dans ce cas, les données, seraient centralisés et gérés à l'intérieur du château. L'émergence du zéro confiance a créé un nouveau cadre.

La plus grande menace pour les données est l'utilisateur final, donc la stratégie numéro un est un cadre qui commence en périphérie avec des piliers d'excellence et des protections internes. Cette nouvelle façon de penser permet aux organisations d'impliquer leur mission et leurs partenaires commerciaux de manière concrète dans la conversation.

Le style de pensée ancien était davantage basé sur une approche à coque dure, avec des protections et des contrôles dans les zones vulnérables. Une partie clé de l'architecture de confiance zéro est une approche basée sur les risques, qui est plus dynamique et repose sur deux éléments : ce qui a fonctionné et ce qui n'a pas fonctionné dans le passé. Donc, si les attaquants sont entrés par la porte gauche la dernière fois, vous renforcerez bien entendu la défense à cet endroit, mais vous en tirerez également des enseignements pour renforcer d'autres endroits en fonction de la nouvelle compréhension de comment cela s'est produit. Une approche basée sur les risques ne se contente pas de résoudre le problème de la dernière attaque, mais anticipe et applique les bonnes mesures de protection pour les menaces actuelles et futures dans l'entreprise.

Une partie de l'approche basée sur les risques consiste à comprendre l'écosystème. Les clients, les partenaires et les utilisateurs font tous partie du calcul de sécurité. La vieille approche à coquille dure ne fonctionne pas. Tout comme un château a des personnes et des provisions qui entrent et sortent, et que les richesses peuvent être situées à divers endroits du royaume, la confiance zéro va encore plus loin en prenant en compte toutes les entrées et sorties de données ou les personnes qui y accèdent.

Traditionnellement, quelqu'un pouvait accéder au château de l'entreprise avec une seule connexion. Il existe plusieurs principes de la confiance zéro, mais les deux bases sont le refus par défaut et la surveillance et l'autorisation continues. La confiance n'est pas automatiquement acquise, et elle n'est pas permanente. Par exemple, si un invité entre dans le château, il est validé à la réception et on lui demande sa raison de visite. Il peut se voir accorder l'accès pour rendre visite à une personne dans une chambre donnée pendant un certain laps de temps, et il sera accompagné lors de ses déplacements. On surveillera également ce qu'il apporte et emporte lors de sa visite.

Zero-trust s'applique à l'accès dans tous les endroits : centres de données, clouds, périphériques, environnements professionnels, etc.... Il est axé sur les données et l'accès, associé à une approche fondée sur les risques. Il doit y avoir une stratégie plus développée. L'approche basée sur la confiance zéro résultante ne rejette pas ce qui a bien fonctionné auparavant, mais combine les bons processus, principes et technologies et ajoute un élément temporel.

Cet nouvel élément n'est pas aussi difficile que cela a souvent été décrit, mais c'est un problème à la fois de processus et culturel qui peut être délicat.

De nombreux développeurs ont peur qu'une architecture de confiance zéro les ralentisse, mais les experts en sécurité et les développeurs doivent travailler en partenariat pour surmonter cette perception. Un exemple concret est Log4j. Il y a six mois, les développeurs pouvaient le télécharger sans problème, mais maintenant l'environnement de menace a changé. Sans une approche basée sur les risques, un développeur pourrait télécharger Log4j jusqu'à ce que quelqu'un du service de sécurité intervienne et le bloque. Avec une approche basée sur les risques, en plus des approches d'accès, Log4j ne serait pas disponible et une alternative serait proposée. Un autre exemple serait lorsque Log4j est déjà intégré dans un produit, l'évaluation dynamique de confiance pourrait mettre en place des contrôles supplémentaires plutôt que de le bloquer complètement. Il s'agit des deux côtés du calcul en jeu.

Ce partenariat est semblable à la formation croisée et au partage d'informations qui sont nécessaires pour intégrer la sécurité dans le processus de développement. Pendant la construction et les tests d'un produit, la sécurité surveille également et évalue les risques à la fois pour les entités avec lesquelles vous travaillez et pour les vulnérabilités du produit en temps réel. Adopter une approche basée sur les risques dans ce processus permet de tirer parti de l'intelligence qui aborde directement bon nombre des difficultés que nous percevons.

Quelle est la première étape pour les CISOs, les CIOs ou les CTOs pour initier la confiance zéro ? Cameron suggère d'abandonner le "geekspeak" et de communiquer en anglais courant. Lancer l'initiative peut être un défi car les dirigeants travaillent généralement avec un résultat ou un objectif en tête. La confiance zéro n'a pas d'objectif défini vers lequel travailler, à part la création d'un environnement avec une assurance accrue pour les utilisateurs. Il existe bien sûr des indicateurs de performance clés et d'autres mesures pour montrer une sécurité renforcée, mais c'est un voyage, pas une destination. Il insiste également sur le financement continu ; ne pas intégrer le budget cybersécurité dans le budget informatique. Il doit être séparé et distinct.

Le meilleur endroit pour trouver des informations de haut niveau avec des conseils pratiques est la publication SP 800-207 du NIST. Elle expose également les cinq piliers de la confiance, qui constituent de bons points de départ.

Un aspect fondamental et premier consiste à disposer d'un bon inventaire des actifs à protéger, tels que les sources de données, les bases de données, les processus métier et les applications de transaction. Fondamentalement, il est important de définir le périmètre de votre château. Il est primordial de ne pas seulement penser à ce que vous possédez, mais également à ce dont vous dépendez, comme l'environnement SAAS, l'infrastructure cloud et les outils tiers.

L'image plus grande consiste à connaître votre chaîne de valeur. Ce n'est pas seulement ce qui se trouve dans votre château, mais aussi comment vous gagnez de l'argent, comment cet argent est distribué, à qui vous payez et vos fournisseurs. Chacun est une pièce essentielle de la chaîne.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
