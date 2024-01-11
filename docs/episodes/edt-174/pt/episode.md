---
layout: posts
title: "Aplicativo Zero Trust com Computação Confidencial"
number: 174
permalink: episode-EDT174-pt
lang: pt
nav_exclude: true
nav_order: 174
tags:
    - confidentialcomputing
    - encryptingdata
    - datasecurity
    - sgx
    - fortanix
    - datasecuritymanager
    - globalkeymanagement
    - encryptionkeys
    - databaseencryption
    - datasecurityplatform
    - truetrustapplications
    - confidentialcomputingmanager
    - onprem
    - privatecloud
    - publiccloud
    - zerotrust
    - futureofconfidentialcomputing
    - distributedanalytics
    - zta
    - cybersecurity

date: Thu Nov 16 2023 00:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Patrick Conte
    - Darren W Pulsipher

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Neste episódio, Darren entrevista Patrick Conte da Fortanix sobre como aproveitar a computação confidencial na segurança de aplicações em arquiteturas de confiança zero."
video: "https://youtu.be/UWYLz_a9CsE"
description: "Neste episódio, Darren entrevista Patrick Conte da Fortanix sobre como aproveitar a computação confidencial na segurança de aplicações em arquiteturas de confiança zero."
---

<div>
{% include transistor.html id="a2bed64b" title="#174 Zero Trust Application with Confidential Computing" %}

{% include youtube.html id="UWYLz_a9CsE" %}
</div>

---

## A Evolução da Computação Confidencial

O computação confidencial permite criptografar dados não apenas em repouso e em trânsito, mas também enquanto estão ativamente em uso. Isso protege contra ataques mesmo que um invasor obtenha acesso root, já que despejos de memória mostrarão apenas dados criptografados inúteis. A tecnologia Software Guard Extensions (SGX) da Intel fornece uma base baseada em hardware para a computação confidencial. A Fortanix se baseia no SGX e em avanços relacionados da Intel para tornar a computação confidencial acessível e fácil de usar.

Uma oferta central da Fortanix é a sua plataforma Data Security Manager. Esta substitui soluções de criptografia de hardware construídas para fins específicos por criptografia de software alimentada por enclaves SGX. O Data Security Manager permite funções criptográficas avançadas como o gerenciamento de chaves global para milhões de chaves de criptografia, tudo a partir de um console unificado. Ele também pode lidar com criptografia de banco de dados, gerenciamento de certificados e outras necessidades críticas de proteção de dados. Essa abordagem definida por software representa o futuro da segurança de dados.

## Habilitando Aplicações de Verdadeira Confiança Zero

Computação confidencial tem implicações além da simples segurança de dados. Também permite anexar perfis de segurança diretamente às próprias aplicações, de modo que a segurança viaje com a aplicação, independentemente de onde seja executada. A Fortanix analisa as aplicações para avaliar se elas podem ser executadas de forma perfeita em enclaves SGX. Se forem necessárias modificações, eles fornecem orientações sobre como reescrever partes em linguagens amigáveis para o enclave, como Python.

A solução do Gerenciador de Computação Confidencial da Fortanix orquestra aplicativos criptografados em diferentes ambientes, como locais, nuvem privada e nuvem pública. Este motor de orquestração alcançou confiança zero não apenas para dados sensíveis, mas também para aplicativos de missão crítica. As cargas de trabalho podem ser deslocadas dinamicamente para diferentes ambientes habilitados para SGX conforme necessário, mantendo a segurança de ponta a ponta.

## O Futuro da Computação Confidencial

Há muitos casos de uso potencialmente empolgantes para a computação confidencial, como a execução de análises distribuídas em colaboração dentro de enclaves seguros isolados. Embora antigamente havia penalidades substanciais de desempenho, melhorias da Intel e da Fortanix agora reduziram a sobrecarga para porcentagens de um dígito na maioria dos casos. A adoção está crescendo rapidamente na saúde, governo, finanças e outras indústrias para proteger algoritmos valiosos e cargas de trabalho regulamentadas. À medida que a computação confidencial se torna mais onipresente e acessível, ela formará um pilar fundamental das modernas arquiteturas de confiança zero.

## Conclusão

Este perspicaz podcast fornece uma visão provocadora de como a computação confidencial pode permitir verdadeiras aplicações de confiança zero. A capacidade de criptografar dados em uso e anexar perfis de segurança às aplicações abre novas e intrigantes possibilidades para proteção de dados de ponta a ponta e segurança de aplicações em ambientes dinâmicos. À medida que as ameaças se tornam mais sofisticadas, a computação confidencial só aumentará em importância estratégica.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
