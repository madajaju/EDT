---
layout: posts
title: "Sécurité du contrôleur de réseau avec Elisity"
number: 101
permalink: episode-EDT101-fr
lang: fr
nav_exclude: true
nav_order: 101
tags:
    - networksecurity
    - ot
    - iot
    - microsegmentation
    - zerotrust
    - cybersecurity
    - advancedcommunications
    - technology
    - policy

date: Mon Aug 22 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Dan Demers
    - Dana Yanch

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, responsable des solutions chez Intel pour le secteur public, interviewe les experts en sécurité réseau Dana Yanch et Dan Demers d'Elisity sur les techniques de sécurité du contrôleur réseau et les architectures de confiance zéro."
video: "https://youtu.be/url"
description: "Darren Pulsipher, responsable des solutions chez Intel pour le secteur public, interviewe les experts en sécurité réseau Dana Yanch et Dan Demers d'Elisity sur les techniques de sécurité du contrôleur réseau et les architectures de confiance zéro."
---

<div>
{% include transistor.html id="d4feba70" title="#101 Network Controller Security with Elisity" %}

{% include youtube.html id="url" %}
</div>

---

Dana travaille dans le domaine du réseau avancé depuis les 15 dernières années. Il a travaillé avec les réseaux définis par logiciel et les réseaux étendus, en se concentrant pendant un certain temps sur le monde du SD-WAN. Ensuite, il a travaillé avec le cloud, mais est revenu à ses racines en se spécialisant dans la sécurité réseau chez Elisity.

Dan a travaillé principalement dans le domaine des réseaux, mais il a commencé avec des services avancés chez Cisco et a également travaillé dans le secteur pétrolier et gazier à Houston. Il s'est ensuite orienté vers l'espace SASE SD-WAN, où il a collaboré avec Dana. À présent, il se concentre sur la sécurité réseau ainsi que sur la sécurité définie par logiciel. Dan affirme que le terme est cependant insaisissable car la technologie repose sur la micro-segmentation par l'identité.

La façon traditionnelle de créer une micro-segmentation à travers des VLAN et des pare-feu n'est plus suffisante. Depuis 15 ans, la sécurité réseau s'est concentrée sur le renforcement du périmètre du réseau. Il est toujours essentiel de créer un mur impénétrable autour de l'entreprise, et les pare-feu font un travail incroyable pour empêcher les personnes d'accéder au réseau. Mais la majeure partie de l'intérieur du réseau, où il y a eu une explosion des nouvelles exigences de connectivité en raison de l'IoT et de l'OT, est une zone de non-droit une fois qu'un utilisateur est à l'intérieur. Étant donné que le mur extérieur est robuste, toute personne à l'intérieur est souvent considérée comme un utilisateur légitime ou de confiance.

La réalité est que la plupart des attaques actuelles se produisent à l'intérieur du réseau grâce à des utilisateurs, des appareils et des applications de confiance exploités.

Il existe de nombreuses raisons pour lesquelles l'utilisation de VLAN, d'ACL IP, de pare-feu et de méthodes traditionnelles de segmentation ne fonctionne pas aujourd'hui pour la sécurité des mouvements latéraux. Elles peuvent fonctionner dans des environnements statiques à petite échelle. Elles fonctionnent très bien pour le bord du réseau et des endroits spécifiques tels que les goulots d'étranglement ou les points d'agrégation, mais il existe trois raisons courantes pour lesquelles elles ne sont plus idéales.

Tout d'abord, la scalabilité et l'efficacité opérationnelle des méthodes traditionnelles sont discutables. La gestion des VLAN, des ACL IP et des pare-feu dans de grandes entreprises se fait manuellement. Ce n'est pas une architecture distribuée définie par logiciel, mais cela nécessite une configuration boîte par boîte, ligne par ligne. Ils ne sont pas dynamiques ni réactifs à quoi que ce soit sur le réseau. Leur utilisation crée également un réseau en forme de gruyère rempli de trous aléatoires. Les utilisateurs, en particulier les opérateurs de réseaux, représentent souvent le risque le plus important pour un système. Ils peuvent, par exemple, ouvrir un VLAN ou modifier une pièce pour effectuer un test rapide, mais ne pas annuler par la suite cette modification.

Un autre exemple est qu'un VLAN commencera par un cas d'utilisation et s'étendra progressivement à d'autres cas d'utilisation. Soudainement, ce qui était un VLAN de dix appareils en compte désormais soixante. Dans le monde de l'OT, il pourrait y avoir six ou sept processus différents qui s'y exécutent car il s'agit du LAN de confiance. Pourtant, souvent, ces environnements se développent lentement et ne sont pas documentés, donc le risque passe inaperçu.

Le deuxième problème est que les VLAN et les pare-feu sont intrinsèquement mal placés dans le réseau pour fournir une sécurité de déplacement latéral. Si vous êtes dans le même VLAN qu'un autre appareil, utilisateur ou application, ce canal de communication est ouvert même s'il n'est pas nécessaire. Les pare-feu ne sont généralement pas déployés à un endroit stratégique où ils peuvent gérer le niveau d'accès au déplacement latéral. Vous devez acheminer le trafic vers un pare-feu et le renvoyer, ce qui est inefficace. Ensuite, vous avez un goulot d'étranglement.

Les mauvais acteurs cherchent à exploiter les réseaux pour obtenir des résultats qui ne correspondent pas à leur fonctionnement prévu. Par exemple, si un utilisateur est dans une VLAN et qu'un processus s'exécute dans un cas d'utilisation, rien ne les empêche de passer du port 3 au port 32 dans la même VLAN. Souvent, les gens conçoivent la sécurité en fonction de l'utilisation prévue plutôt que de la manière dont elle pourrait être utilisée. Il est courant, par exemple, que les développeurs de logiciels sautent de ports pour travailler efficacement, mais cela est dangereux car cela les rend vulnérables. Personne ne peut placer des centaines ou des milliers de pare-feu sur tout le périmètre d'accès. Ce serait financièrement restrictif et impossible à gérer.

Le troisième problème est que ces solutions de segmentation héritées ne tiennent pas compte de l'identité, du contexte ou du comportement de l'actif connecté au réseau. Il s'agit d'une topologie rigide centrée sur le réseau qui offre certaines mesures de sécurité essentielles. Mais une adresse IP ne dit rien sur la légitimité de l'actif et du réseau auquel il est attaché. Comment pouvez-vous sécuriser dynamiquement ce réseau lorsque vous ne savez pas ce qui s'y connecte ? Vous ne pouvez pas établir de politique en premier lieu sans aucune granularité ; traiter tous les appareils de manière égale ne fonctionne pas maintenant.

Même s'il y a une analyse du type de trafic, cela se produit généralement à plusieurs niveaux supérieurs, ce qui signifie que vous êtes maintenant exposé. Toute mesure de mise en application peut ou non être en mesure de protéger pleinement l'infrastructure.

Cette capacité de détection a toujours de la valeur, même s'il n'y a aucune protection. Cependant, la capacité d'arrêter quelque chose qui aurait pu se produire juste au bord, aussi près que possible de l'actif, est une meilleure solution.

Découvrez le prochain épisode de cette série [ici](episode-EDT101).



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
