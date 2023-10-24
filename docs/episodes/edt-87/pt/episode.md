---
layout: posts
title: "Computação confidencial em DevSecOps"
number: 87
permalink: episode-EDT87-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
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

date: Wed May 18 2022 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Ofir Azoulay-Rozanes

img: thumbnail.png
image: thumbnail.png
summary: "Neste episódio, Darren Pulsipher, Arquiteto Chefe de Soluções, Intel, e Ofir Azoulay-Rozanes, Diretor de Gerenciamento de Produtos, Anjuna, discutem as soluções da Anjuna para computação confidencial no ciclo de vida do DevOps."
video: "https://youtu.be/hp1mK4AKGTQ"
description: "Neste episódio, Darren Pulsipher, Arquiteto Chefe de Soluções, Intel, e Ofir Azoulay-Rozanes, Diretor de Gerenciamento de Produtos, Anjuna, discutem as soluções da Anjuna para computação confidencial no ciclo de vida do DevOps."
---

<div>
{% include transistor.html id="e31a9c3f" title="#87 Confidential Computing in DevSecOps" %}

{% include youtube.html id="hp1mK4AKGTQ" %}
</div>

---

O software da Anjuna possibilita que aplicações rodem com a proteção SGX da Intel e resolve o problema de proteger dados em uso. A missão da Anjuna é tornar enclaves seguros o mais simples possível. Com o software da Anjuna, não há necessidade de alterar nada na aplicação; apenas pegue-a, execute-a em um enclave, e a tecnologia SGX funcionará automaticamente. O software funciona com qualquer aplicativo, em qualquer nuvem, em qualquer escala.

A cadeia global de fornecimento de software está sendo atacada. SolarWinds, em particular, foi um ataque ao DevOps, e embora tenham surgido ideias sobre como resolver o problema, ainda não foi resolvido definitivamente. A tecnologia Anjuna pode ser uma solução simples. Não há necessidade de redesenhar seu software ou mudar metodologias. Você os executa em compartimentos de segurança.

Ao experimentar o software da Anjuna, Darren criou uma pilha usando Intel SGX na base, Red Hat OpenShift, Anjuna para a parte de computação confidencial e o Vault da HashiCorp para armazenar um livro-razão seguro. Ele ficou chocado com o quão rápido a solução estava funcionando em menos de uma semana.

Darren chama esse processo de "pipeline do hardened DevSecOps", apesar de ter várias partes móveis. Ofir concorda com essa terminologia, pois esse processo é um novo DevOps hardened com a tecnologia de hardware SGX com o software da Anjuna.

A computação confidencial, ou enclave seguro, resolve o problema de proteger dados. Quando você armazena dados em armazenamento persistente, a solução para dados em repouso já está presente. Também há uma solução para dados em trânsito com TLS. A segurança de dados em uso ainda não foi resolvida, pois quando os dados estão em uso, a aplicação precisa acessá-los em memória sem criptografia. Não é possível que estejam ambos criptografados e em uso ao mesmo tempo. Isso tem sido um problema sem fim. Se um ator mal-intencionado tem acesso a uma máquina onde a aplicação está sendo executada, um ataque é tão simples quanto entrar pelo dispositivo, identificar o processo e criar um despejo de memória. Eles obterão todos os segredos e dados confidenciais do arquivo, que não estão criptografados. Isso também incluiria as chaves de criptografia para dados em repouso e em trânsito, pois o software precisa usá-las para criptografar. O jogador ruim terá as chaves do reino.

O problema é resolvido se você executar as diferentes aplicações em enclaves seguros. Mesmo que alguém tenha acesso à máquina, eles não teriam acesso à memória de cada aplicação. Isso não significa que você não precisa resolver vulnerabilidades, mas você estará menos estressado para corrigi-las o mais rápido possível. Mesmo que haja vulnerabilidades no kernel, quando algo é executado em um enclave seguro, o kernel não pode acessar sua memória.

A software Anjuna é executada em outras tecnologias baseadas em hardware, assim como SGX. Ao contrário da execução de criptografia em software, onde o impacto no desempenho seria alto, a Anjuna pode ajustar a configuração para executar o seu aplicativo com um impacto no desempenho negligenciável: menos de cinco por cento.

Portanto, talvez você não queira colocar tudo em um enclave seguro já, mas esse é o futuro da segurança.

Um dos usos de uma enclave segura é armazenar dados que atravessam diferentes etapas no pipeline de DevOps em um livro-razão seguro. O livro-razão contém tudo o que foi incluído na construção, chaves de segurança e valores de hash utilizados para verificação. Esses valores de hash de verificação devem permanecer inalterados durante o ciclo para que ninguém possa injetar código, bibliotecas ou binários no pacote que você entrega. Tudo deve ser executado em um contêiner no mundo moderno.

Outro candidato para proteção é uma chave de assinatura. Sem ambientes seguros, uma vez que você tenha um binário pronto, é preciso levá-lo para outra máquina em uma sala escura à qual ninguém tenha acesso. Mas três pessoas com três chaves diferentes assinam lá. Ambientes seguros permitem acesso àquela chave de assinatura em seu ambiente familiar, mas apenas o enclave a acessará. Isso será baseado na identidade complexa do software em execução dentro do enclave SGX, que é implementada através da cota de atestação. Em outras palavras, você pode atestar enclave para enclave. Você também pode atestar coisas que são executadas fora dos enclaves. Isso lhe dá a capacidade de confiar em software que é executado em outro lugar.

A compilação de binários é outro uso. Um dos grandes problemas no Departamento de Defesa, por exemplo, é que eles querem ter certeza de que tudo o que foi incluído na compilação possa ser rastreado até o desenvolvedor que o escreveu. Especialmente em sistemas embarcados, onde o software controla máquinas que valem milhões de dólares e podem matar pessoas ou salvar vidas. Deve haver rastreabilidade completa para ajudar a garantir responsabilidade e que o desenvolvimento seguro tenha sido realizado.

Além dos ataques de despejo de memória, outro problema de ataque que a Anjuna resolve é garantir que, em casos em que você precisa acessar o kernel, ele proteja o que precisa ser coberto nessa interação entre a enclave e o mundo exterior. Também pode proteger contra o acesso ao código e tornar segredos disponíveis apenas para a enclave. Além disso, se alguém entrar em uma máquina, não poderá encontrar um certificado TLS em texto claro ou a chave usada para criptografá-lo.

Cada provedor de serviço em nuvem oferece enclaves seguros, e a Anjuna os suporta todos. Eles também suportam tecnologias no local. Além da oferta principal, a Anjuna também pode permitir a capacidade de criptografar seus dados em repouso e em trânsito sem alterar seu software, mesmo em aplicativos legados ou novos aplicativos que não suportam criptografar todos os arquivos de dados.

Para mais informações, visite anjuna.io, ou confira um white paper escrito por Darren e Ofir em embracingdigital.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
