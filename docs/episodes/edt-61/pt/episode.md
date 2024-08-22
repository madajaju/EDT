---
layout: posts
title: "Violação de dados e cadeia de suprimentos segura"
number: 61
permalink: episode-EDT61-pt
lang: pt
nav_exclude: true
nav_order: 61
tags:
    - supplychain
    - encryption
    - databreaches
    - zerotrust
    - opensourcesecurity
    - networksecurity
    - cybersecurity
    - people
    - process
    - policy
    - technology

date: 2021-08-12T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto Principal de Soluções da Intel, discute violações de dados e cadeia de suprimentos segura com o convidado frequente Steve Orrin, CTO da Intel Federal."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquiteto Principal de Soluções da Intel, discute violações de dados e cadeia de suprimentos segura com o convidado frequente Steve Orrin, CTO da Intel Federal."
---

<div>
{% include transistor.html id="2462e3fe" title="#61 Data Breaches & Secure Supply Chain" %}

{% include youtube.html id="url" %}
</div>

---

Além dos ataques de alto perfil na cadeia de suprimentos, como o incidente com a SolarWinds, existem outros ataques menos conhecidos que são igualmente problemáticos.

## Cadeia de Suprimentos Segura

Um exemplo é a extensão The Great Suspender para o Chrome, uma ferramenta para garantir que a memória seja usada corretamente em aplicativos do Chrome, com cerca de dois milhões de usuários. Os fundadores dessa ferramenta de código aberto venderam sua empresa para uma organização por milhões de dólares sem realizar a devida diligência. O comprador acabou sendo um grupo de crime organizado que transformou a ferramenta em malware e spyware.

Não houve um ataque no sentido de que eles não invadiram a empresa original, mas a compraram e fizeram o que quiseram com o código. O que um dia foi um produto legítimo tornou-se ilegítimo no dia seguinte. Nenhum protocolo de segurança resolveria esse problema. Agora, as empresas precisam verificar seus fornecedores e terceiros que as apoiam.

O código aberto é uma bênção e uma maldição. A bênção é que, uma vez que é de código aberto, você tem acesso à fonte e pode analisá-la à vontade. A maldição é que ninguém tem tempo, energia ou expertise para investigar minuciosamente cada trecho de código aberto que está sendo utilizado. Códigos vulneráveis a malware, mesmo que não intencionais, podem ser introduzidos caso não sejam detectados pela comunidade, e às vezes isso não acontece por muito tempo.

Existem duas coisas que poderiam mitigar esse problema: uma é que o código poderia passar por uma ferramenta de análise de código-fonte e poderia haver um sistema de classificação para os contribuidores de código cujo código consistentemente vem com menos vulnerabilidades ou bugs. Terceiros fornecedores fariam principalmente esse trabalho. Em segundo lugar, já existem algumas startups bem estabelecidas no espaço de verificação de produtos de código aberto para mostrar quais objetos em um repositório são confiáveis e quais ainda não são confiáveis.

Os atuais scans de vulnerabilidade em código aberto são um controle, mas esse tipo de segurança por si só não é suficiente. É necessário combiná-lo com controles adicionais antes de implementá-lo em toda a sua organização.

## Violações de dados

Além de ransomware e ataques à cadeia de suprimentos, violações de dados são um problema comum. Em 2020, houve 1,8 trilhão de dólares em violações de dados extraídos em 7,8 bilhões de registros de dados. Uma violação no McDonald's, por exemplo, comprometeu dados de clientes, parceiros e internos.

## Criptografia

A primeira parte da solução é ter melhores ferramentas de segurança em dados e infraestrutura. Criptografar o acesso e incorporar a negação padrão, para que mesmo que alguém entre pela porta da frente, eles não tenham acesso a tudo, é crucial. Os dados também precisam ser criptografados dentro da organização, não apenas o que é exposto na nuvem ou o que você envia externamente. Qualquer dado que atravessa sua rede, assim como os dados em repouso, devem ser criptografados.

A criptografia tem um custo, mas nos dispositivos modernos há aceleração incorporada que elimina a penalidade. Agora você pode habilitar a criptografia em toda a sua organização sem impacto no desempenho.

## Segmentação

Outra parte são enclaves, ou segmentação. Um dos desafios em ambientes corporativos de rede é que, mais uma vez, se alguém entrar pela porta, é livre acesso se tudo estiver conectado. Houve recentemente um movimento para separar o desenvolvimento e movê-lo para sua própria rede, e isso é um começo, mas é apenas a ponta do iceberg. A segmentação da rede deve ser em toda a organização. Você ainda pode ter comunicação transversal, mas estará sujeito a um conjunto de regras e ajudará a limitar o impacto. Por exemplo, se sua central de atendimento for atacada, seus sistemas de RH não serão comprometidos ao mesmo tempo.

A microsegmentação era uma palavra da moda cinco anos atrás, mas precisa acontecer agora. Existem ótimas ferramentas disponíveis para ajudar com isso, como ecossistemas de contêineres, onde você pode implantar um aplicativo e ele está em sua própria rede com seu próprio firewall.

Implementar credenciais de autenticação adequadas também precisa acontecer agora. A autenticação de múltiplos fatores é necessária, assim como a autenticação de entidades. Muitas ferramentas são automatizadas e possuem processos automatizados, portanto, as entidades, não apenas as pessoas, devem ter credenciais adequadas.

## Zero Trust: Confiança Zero

Traduza para o português: A abordagem Zero Trust amadureceu ao ponto de que deve ser implementada, e alguns dos princípios fundamentais, como negação padrão e não confiar em ninguém, são essenciais. A tecnologia alcançou o nível necessário para implantar esses tipos de conceitos.

Os desenvolvedores podem se preocupar com essas ferramentas de segurança retardando o processo, mas existem maneiras de construir a arquitetura para amenizar esse problema. Por exemplo, se você é um desenvolvedor e possui credenciais e acesso adequados, deveria ser capaz de acessar as coisas de que precisa quando precisar delas e perder o acesso depois de terminar, em vez de ter uma credencial que lhe concede acesso a tudo o tempo todo. A ideia de confiança zero não é que a empresa não confie no desenvolvedor, mas sim que o acesso é para o momento certo, não apenas acesso total se um ator mal-intencionado roubar a credencial.

Nenhuma indústria pode se dar ao luxo de ignorar os riscos atuais. Toda organização deve olhar para a segurança de forma diferente e implementar segurança em toda a organização e arquitetura.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
