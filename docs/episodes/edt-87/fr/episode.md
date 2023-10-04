---
layout: posts
title: "Calcul confidentiel en DevSecOps"
number: 87
permalink: episode-EDT87-fr
has_children: false
lang: fr
parent: Épisodes
grand_parent: Français
nav_order: 87
tags:
    - confidentialcomputing
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - sgx

date: Wed May 18 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Ofir Azoulay-Rozanes

img: thumbnail.png
image: thumbnail.png
summary: "Dans cet épisode, Darren Pulsipher, chef architecte des solutions chez Intel, et Ofir Azoulay-Rozanes, directeur de la gestion des produits chez Anjuna, discutent des solutions d'Anjuna pour la confidentialité des données dans le cycle de vie DevOps."
video: "https://youtu.be/hp1mK4AKGTQ"
description: "Dans cet épisode, Darren Pulsipher, chef architecte des solutions chez Intel, et Ofir Azoulay-Rozanes, directeur de la gestion des produits chez Anjuna, discutent des solutions d'Anjuna pour la confidentialité des données dans le cycle de vie DevOps."
---

<div>
{% include transistor.html id="e31a9c3f" title="#87 Confidential Computing in DevSecOps" %}

{% include youtube.html id="hp1mK4AKGTQ" %}
</div>

---

Le logiciel d'Anjuna permet aux applications de fonctionner avec la protection SGX d'Intel et résout le problème de la protection des données en cours d'utilisation. La mission d'Anjuna est de rendre les enclaves sécurisées aussi simples que possible. Avec le logiciel d'Anjuna, il n'est pas nécessaire de modifier quoi que ce soit dans l'application ; il suffit de la prendre, de l'exécuter dans une enclave et la technologie SGX fonctionnera immédiatement. Le logiciel fonctionne avec toutes les applications, sur n'importe quelle plateforme cloud et à n'importe quelle échelle.

La chaîne d'approvisionnement mondiale des logiciels est attaquée. SolarWinds, notamment, a été une attaque contre DevOps, et bien qu'il y ait eu des idées sur la façon de résoudre le problème, cela n'a pas encore été verrouillé. La technologie Anjuna peut être une solution facile. Il n'est pas nécessaire de réorganiser votre logiciel ou de changer de méthodologie. Vous les exécutez dans des enclaves sécurisées.

Lorsqu'il a essayé le logiciel d'Anjuna, Darren a créé une pile en utilisant Intel SGX en bas, Red Hat OpenShift, Anjuna pour la partie de calcul confidentiel, et HashiCorp's Vault pour stocker un registre sécurisé. Il a été choqué de voir à quel point la solution était rapidement mise en place et opérationnelle en moins d'une semaine.

Darren appelle ce processus le pipeline sécurisé de DevSecOps, bien qu'il soit composé de plusieurs éléments en mouvement. Ofir est d'accord avec cette terminologie, car ce processus est un nouvel DevOps renforcé avec la technologie matérielle SGX associée au logiciel d'Anjuna.

L'informatique confidentielle, ou enclave sécurisée, résout le problème de la protection des données. Lorsque vous stockez des données dans un stockage persistant, la solution pour les données au repos est déjà présente. Il existe également une solution pour les données en transit avec le protocole TLS. La sécurisation des données en cours d'utilisation n'a pas encore été résolue car lorsque les données sont en cours d'utilisation, l'application doit y accéder en mémoire en clair. Elles ne peuvent pas être simultanément chiffrées et utilisées. Cela pose un problème sans fin. Si un acteur malveillant a accès à une machine sur laquelle l'application est en cours d'exécution, une intrusion est aussi simple que de passer par le dispositif, d'identifier le processus et de créer une copie de la mémoire. Ils auront ainsi accès à tous les secrets et données confidentielles stockées, et celles-ci ne seront pas chiffrées. Cela inclurait également les clés de chiffrement des données au repos et en transit car le logiciel a besoin de les utiliser pour chiffrer les données. L'acteur malveillant aura accès aux clés du royaume.

Le problème est résolu si vous exécutez les différentes applications dans des enclaves sécurisées. Même si quelqu'un parvient à accéder à la machine, il n'aura pas accès à la mémoire de chaque application. Cela ne signifie pas que vous n'avez pas à résoudre les vulnérabilités, mais vous êtes beaucoup moins stressé pour les résoudre le plus rapidement possible. Même s'il existe des vulnérabilités du noyau, lorsque quelque chose s'exécute dans une enclave sécurisée, le noyau ne peut pas accéder à sa mémoire.

Le logiciel Anjuna fonctionne sur d'autres technologies matérielles en plus de SGX. Contrairement à l'exécution du chiffrement en logiciel, où l'impact sur les performances serait élevé, Anjuna peut ajuster finement la configuration pour exécuter votre application avec un impact négligeable sur les performances : moins de cinq pour cent.

Donc, vous ne voudrez peut-être pas tout mettre dans une enclave sécurisée pour le moment, mais c'est l'avenir de la sécurité.

L'un des usages d'une enclave sécurisée est de stocker des données qui couvrent différentes étapes du pipeline DevOps dans un registre sécurisé. Le registre contient toutes les informations liées à la construction, les clés de sécurité et les valeurs de hachage utilisées pour la vérification. Ces valeurs de hachage de vérification doivent rester inchangées tout au long du cycle afin que personne ne puisse injecter de code, de bibliothèques ou de binaires dans le package que vous livrez. Tout devrait s'exécuter dans un conteneur dans le monde moderne.

Un autre candidat à la protection est une clé de signature. Sans des enclaves sécurisées, une fois que vous avez un fichier binaire prêt, vous devez le transférer vers une autre machine dans une pièce sombre à laquelle personne n'a accès. Mais trois personnes avec trois clés différentes le signent là-bas. Les enclaves sécurisées permettent d'accéder à cette clé de signature dans votre environnement familier, mais seule l'enclave y aura accès. Cela sera basé sur l'identité complexe du logiciel en cours d'exécution à l'intérieur de l'enclave SGX, qui est mise en œuvre via la citation d'attestation. En d'autres termes, vous pouvez attester une enclave vers une autre enclave. Vous pouvez également attester des éléments qui s'exécutent en dehors des enclaves. Cela vous donne la possibilité de faire confiance à un logiciel qui s'exécute ailleurs.

La compilation des binaires est une autre utilisation. L'un des grands problèmes au sein du Département de la Défense, par exemple, est qu'ils veulent être assurés que tout ce qui a été intégré à la construction peut être retracé jusqu'au développeur qui l'a écrit. Surtout dans les systèmes embarqués, où le logiciel contrôle des machines valant des millions de dollars qui peuvent tuer des gens ou sauver des vies. Il doit y avoir une traçabilité complète pour aider à garantir la responsabilité et le bon déroulement du développement sécurisé.

En plus des attaques par vidage de mémoire, un autre problème d'attaque que Anjuna résout est de s'assurer que dans les cas où vous avez besoin d'accéder au noyau, il protégera tout ce qui doit être couvert dans cette interaction entre l'enclave et le monde extérieur. Il peut également protéger contre l'accès au code et rendre les secrets uniquement disponibles pour l'enclave. De plus, si quelqu'un pénètre dans une machine, il ne pourra pas trouver un certificat TLS en clair ou la clé utilisée pour l'encrypter.

Chaque fournisseur de services cloud propose des enclaves sécurisées, et Anjuna les prend tous en charge. Ils prennent également en charge les technologies locales. En plus de l'offre principale, Anjuna peut également permettre la capacité de chiffrer vos données au repos et en transit sans modifier votre logiciel, même dans les applications héritées ou les nouvelles applications qui ne prennent pas en charge le chiffrement de chaque fichier de données.

Pour plus d'informations, visitez anjuna.io, ou consultez un livre blanc rédigé par Darren et Ofir sur embracingdigital.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
