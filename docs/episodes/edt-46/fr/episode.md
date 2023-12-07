---
layout: posts
title: "Sécurisation de votre Pipeline DevOps"
number: 46
permalink: episode-EDT46-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 46
tags:
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - zerotrustarchitecture

date: Wed Apr 07 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Dans la deuxième partie de cet épisode, Darren Pulsipher, architecte en chef des solutions chez Intel, donne des conseils pratiques pour sécuriser chaque étape du pipeline DevOps, y compris la protection du matériel et des piles logicielles avec une racine de confiance matérielle, le balayage de sécurité, les conteneurs/VM attestés et chiffrés, et plus encore."
video: "https://youtu.be/url"
description: "Dans la deuxième partie de cet épisode, Darren Pulsipher, architecte en chef des solutions chez Intel, donne des conseils pratiques pour sécuriser chaque étape du pipeline DevOps, y compris la protection du matériel et des piles logicielles avec une racine de confiance matérielle, le balayage de sécurité, les conteneurs/VM attestés et chiffrés, et plus encore."
---

<div>
{% include transistor.html id="3abb647c" title="#46 Securing your DevOps Pipeline" %}

{% include youtube.html id="url" %}
</div>

---

## Les vecteurs d'attaque

De nombreuses attaques se produisent au niveau des individus. Certaines des attaques insidieuses les plus récentes se sont concentrées sur le hameçonnage et l'ingénierie sociale sur des individus travaillant dans le domaine du DevOps. Nous devons mieux former les personnes à tous les niveaux. Dans un cas, c'était un stagiaire ayant accès aux clés qui a cédé à un plan malveillant.

Un autre vecteur est la technologie : les attaques traditionnelles de déni de service, les attaques par injection SQL ou les attaques de débordement de mémoire tampon. Les derniers incidents utilisent à la fois des personnes et de la technologie pour attaquer le processus. Ils sont insidieux car ils se produisent autour du processus de construction et peuvent être très difficiles à détecter. Ils peuvent également propager un code malveillant à travers vos clients. Pour instaurer la confiance des clients, les organisations doivent avoir une stratégie pour sécuriser le pipeline d'approvisionnement.

## Sécurité du pipeline

Toutes les chaînes de construction ne sont pas les mêmes, mais en général, elles se composent de quatre étapes avec des environnements : développement, construction, test et production. Ces étapes peuvent être facilement divisées en plusieurs étapes en fonction du type de produit que vous êtes en train de développer, mais les environnements correspondent à ces différentes étapes.

Nous devons examiner l'ensemble du processus, ce qui inclut les logiciels, le matériel et les processus, et adopter une approche différente plutôt que de se concentrer uniquement sur l'infrastructure, que la plupart ont fait avec succès.

## Hôte et sécurité de l'infrastructure

Au bas de la pile, vous devez sécuriser le matériel dans l'environnement de développement et de construction. L'environnement de test sera un peu différent car vous pouvez vouloir exécuter des tests qui impliquent l'injection de code malveillant. Les environnements de production sont généralement bien sécurisés, surtout maintenant que de plus en plus d'entreprises proposent des logiciels en tant que service (SaaS). Dans les environnements de production et de construction, vous devez prendre toutes les mesures de sécurité typiques que vous prendriez dans des environnements de production ou de SaaS.

Il y a trois éléments clés dans ces environnements. Le premier est la détection. La détection et la remédiation sont des mesures de sécurité bien connues utilisant des journaux de service qui utilisent une plate-forme telle que Splunk pour trouver tout ce qui sort de l'ordinaire. Assurez-vous de le faire non seulement dans les environnements de développement, mais aussi dans les environnements de construction et de production.

Gardez à l'esprit que dans l'environnement de test, vous aurez besoin de plusieurs environnements de test, certains plus sécurisés que d'autres du côté de la détection, car vous souhaitez injecter un code erroné dans vos tests. Ne répandez pas simplement la sécurité uniformément sur tous les environnements ; les profils de sécurité peuvent être différents pour chaque environnement.

La prévention est la deuxième clé. Cela signifie être intelligent avec le matériel, s'assurer que les choses sont correctement corrigées, avoir les bonnes mises à jour de sécurité et le faire de manière automatisée. Cela devrait se produire dans tous les environnements, y compris l'environnement de test, et surtout lors de la construction et de la production.

La troisième clé fait partie de la prévention : il s'agit de la racine matérielle de confiance. Une chaîne de confiance peut être établie à partir du matériel, en passant par les sections de démarrage du micrologiciel, jusqu'aux hyperviseurs et aux systèmes d'exploitation. La racine de confiance peut être implémentée dans les environnements de développement, de construction, de test et de production. Cela peut inclure des conteneurs sécurisés et des machines virtuelles sécurisées. Par exemple, j'aime stocker mes clés de chiffrement et de hachage dans du matériel tel qu'un module TPM, et également avec l'extension Secure Guard d'Intel. Même si quelqu'un parvient à accéder à la machine, il ne pourra pas voler ces clés.

## Exécutables de confiance

La mise en place d'exécutables de confiance est l'étape suivante. Cela signifie que vous pouvez effectuer des vérifications de sécurité sur le code qui est validé et construit, puis enregistrer la somme de contrôle avec ces modifications. Si quelque chose a été injecté dans la base de code, vous pouvez le détecter, car il ne devrait pas y avoir de modifications apportées au code pendant le processus de construction.

Dans une nouvelle phase de contrôles de sécurité, vous pouvez effectuer une analyse statique du code ou une analyse dynamique du code ou des violations de sécurité. Il existe d'excellents outils que vous pouvez facilement intégrer dans votre pipeline DevOps habituel, que vous utilisiez Jenkins ou les workflows GitHub, par exemple.

Une fois qu'un exécutable est construit, créez immédiatement le hachage et ce hachage doit être versionné avec l'exécutable ; il doit rester l'exécutable qui passe tous les tests et est poussé en production. Ce hachage garantira qu'aucune altération n'a été effectuée.

## Images attestées et sécurisées.

Typiquement, il existe plusieurs référentiels ou exécutables à utiliser pour le code. Le hash qui est créé lors de la construction est maintenant dans le registre, et vous pouvez les attester. Vous pouvez sécuriser ceux-ci dans les images afin qu'ils ne puissent pas être modifiés. Si quelqu'un doit revenir en arrière et effectuer une petite modification, par exemple, un libellé ou des métadonnées, il est important de ne pas effectuer la modification et lui attribuer le même numéro de version. Il vaut mieux passer à nouveau par le cycle, même si cela prend plus de temps que de manipuler manuellement vos binaires.

Maintenant, vous pouvez prendre ce même binaire sur lequel vous avez effectué tous les tests et le pousser en production. À ce stade, reconstruire le code source serait une erreur. Il est préférable de pousser la construction initiale dans le référentiel de production, également appelé référentiel d'or. Ce référentiel est le seul endroit à partir duquel les images, les binaires ou les machines virtuelles, par exemple, doivent être récupérés. Toutes les images doivent être notariées et attestées. Si vous disposez de machines virtuelles ou d'applications confidentielles, ou si vous souhaitez vous assurer qu'elles ne se retrouvent que sur certaines plates-formes matérielles, vous pouvez appliquer ce type de restrictions. Vous pouvez chiffrer les machines virtuelles, les conteneurs ou même les binaires et les verrouiller avec la clé stockée dans vos systèmes de construction et de production.

## Injecter des outils de sécurité

Les outils de sécurité doivent être intégrés dans le processus de construction. Au lieu d'utiliser des bibliothèques de sécurité open source ou de recréer celles qui existent déjà, vos ingénieurs en sécurité devraient être impliqués afin qu'ils puissent choisir des outils qui peuvent être facilement utilisés et réutilisés par les équipes de développement. Un bon exemple est l'authentification de base : la connexion de l'utilisateur. Il devrait y avoir une bibliothèque commune plutôt que chaque application ayant la sienne.

Il est important de traiter ces bibliothèques de sécurité et outils de la même manière que vous traiteriez tout autre programme de développement logiciel que vous partagez au sein de votre organisation. Le partage réduira le temps et renforcera la sécurité de l'ensemble de votre écosystème.

## Construisez une fois, déployez la sécurité partout

Une fois que vous avez établi vos équipes de sécurité du développement, assurez-vous d'injecter les politiques et les outils dans tous vos produits et environnements. Une technologie géniale existe aujourd'hui qui vous permet de gérer plusieurs environnements. Donc, lorsque une nouvelle application est lancée, elle est lancée dans un profil de sécurité avec vos propres images VM ou de conteneurs en tant qu'images de base utilisées par les équipes de développement. En configurant la sécurité dans vos VM ou conteneurs dans vos images de base, vous obtenez une conformité de sécurité instantanée dans les différents environnements. Il est également possible de l'intégrer avec les outils de sécurité, de sorte que si vous trouvez quelque chose d'inhabituel dans l'application, vous pouvez notifier les outils de sécurité. Ne cherchez pas à créer des outils de sécurité qui gèrent cent pour cent des cas, car vous ne les finirez jamais; visez plutôt quatre-vingts pour cent comme une base solide et laissez les développeurs d'applications innover les vingt pour cent restants si nécessaire, en collaboration avec votre équipe de sécurité.

Un dernier conseil important est d'automatiser tout ce que vous pouvez, notamment dans le pipeline DevOps, afin de prévenir les injections malveillantes. Protégez votre pipeline ; protégez votre processus.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
