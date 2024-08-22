---
layout: posts
title: "Destruindo a Complexidade das Camadas de Armazenamento"
number: 20
permalink: episode-EDT20-pt
lang: pt
nav_exclude: true
nav_order: 20
tags:
    - storage
    - vastdata
    - datamanagement
    - hpc
    - technology

date: 2020-09-09T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Randy Hayes

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Randy Hayes, da VAST Data, e Darren Pulsipher, Arquiteto Chefe de Soluções, Setor Público, da Intel, discutem a inovadora arquitetura de armazenamento da VAST Data que elimina a necessidade de camadas utilizando NVMe over Fabrics, QLC Flash e Optane 3D XPoint."
video: "https://youtu.be/url"
description: "Randy Hayes, da VAST Data, e Darren Pulsipher, Arquiteto Chefe de Soluções, Setor Público, da Intel, discutem a inovadora arquitetura de armazenamento da VAST Data que elimina a necessidade de camadas utilizando NVMe over Fabrics, QLC Flash e Optane 3D XPoint."
---

<div>
{% include transistor.html id="a3a3329f" title="#20 Destroying the Complexity of Storage Tiers" %}

{% include youtube.html id="url" %}
</div>

---

## Trinta anos de complexidade de armazenamento

O armazenamento pode ser um conceito antigo, mas a VAST Data alcançou o status de unicórnio em pouco mais de um ano, a partir do envio de receitas. A VAST substituiu a antiga arquitetura de sistemas de armazenamento em várias camadas por um sistema único e monolítico, que é rápido e econômico. As soluções da VAST também eliminam o problema de sistemas de armazenamento grandes e confusos, que consistem em diferentes sistemas de arquivos e arquiteturas diferentes.

## Uma Fundação para uma Nova Arquitetura

O fundador da VAST estava olhando para o armazenamento de uma perspectiva totalmente nova. Ele descobriu que os clientes não necessariamente precisavam de mais desempenho do Flash, mas sim de suporte para armazenamento de arquivos e objetos a um custo mais baixo. Ele aproveitou três tecnologias que não existiam antes de 2018. A primeira é o NVMe over Fabrics, que é usado como um tipo de SAN em escala hiper para conectar tudo com baixa latência. Em seguida, temos o Flash QLC, porque é barato e não possui partes móveis como os discos rígidos. A terceira é o Optane 3D XPoint da Intel. O Optane possui paridade de leitura e gravação e tem alta resistência a um preço razoável. Ao combinar essas três tecnologias, a VAST tem a capacidade de oferecer aos clientes o desempenho totalmente em Flash, mas a um preço comparável ao de um disco rígido. Isso elimina a necessidade de outras camadas que as organizações estão comprando porque são baratas.

## Apresentando o Vast Data Universal Storage

O sistema VAST é a primeira arquitetura desagregada, compartilhada em todos os aspectos. O que isso significa é que a lógica é desagregada do estado do sistema de arquivos. Em vez disso, o estado do sistema de arquivos vive em caixas de dados que contêm QLC Flash e Optane. O Optane é usado como um grande armazenamento de metadados. É multiuso, assim como o sistema, que é chamado de armazenamento universal. Com essas caixas, não há um único ponto de falha, então a capacidade é, teoricamente, ilimitada. (A VAST testou o sistema em cerca de 50 petabytes em um único sistema de arquivos.) Você pode aumentar a capacidade apenas adicionando servidores x86 baratos aos clusters. Por ser um sistema de arquivos paralelo, qualquer usuário pode acessar qualquer parte dos dados de qualquer um dos servidores como se estivesse diretamente conectado, então você pode continuar a expandir.

Você também pode aumentar o desempenho independentemente da capacidade. A única coisa que inibiria o desempenho do flash é a CPU, então, ao ter a capacidade de aumentar o número de CPUs no cluster de forma contínua, você pode aumentar o desempenho.

Um dos problemas que é resolvido com esta estrutura é a latência. Muitas organizações precisam de baixa latência para todos os seus dados. Como cada um desses servidores sem estado tem acesso a tudo, você tem acesso rápido a todos os dados.

## Arquitetura DASE: Conjuntos de servidores

Outra grande vantagem é que é fácil ajustar o armazenamento de uma organização. A natureza componível dos servidores sem estado e a ausência de comunicação entre eles permitem que você construa um cluster que melhor atenda às suas necessidades. Por exemplo, você pode segmentar suas caixas de controle com base em diferentes cargas de trabalho, mas todas podem acessar os mesmos dados.

Além disso, o sistema funciona bem com uma organização que precisa de diferentes camadas de classificação para acessar os dados. Você tem a capacidade de segregar o acesso dos usuários, criando várias zonas de acesso com endereços IP virtuais. Um dos desafios do NFS é que ele transmite basicamente para tudo. Se você limitar as transmissões a um subconjunto de endereços IP, você terá a capacidade de separar essas diferentes arquiteturas em sistemas distintos.

## Aplicativo de Pontes de Armazenamento Universal Eras

Esta não é apenas uma solução voltada para clusters de HPC; não é proibitiva em termos de custo. Muitas empresas estão usando o VAST primeiramente para backup, a fim de estabelecer confiança. Por exemplo, o Instituto Nacional do Câncer possui um arquivo de biblioteca de fitas e eles desejavam ter acesso às informações de forma mais rápida. Eles analisaram diferentes plataformas e o VAST surgiu com um preço mais baixo e é totalmente em Flash, o que é mais rápido do que o sistema NAS de produção deles. Portanto, a solução possui um preço atrativo e é útil para compartilhamento geral de arquivos e uma variedade de cargas de trabalho, como IA, análise de logs, Splunk, etc., não apenas para HPC. As soluções da VAST são simples de gerenciar e verdadeiramente universais.

A VAST é uma empresa jovem, mas ela possui várias instalações em agências governamentais, como o Instituto Nacional de Saúde e os Tri-labs do Departamento de Energia, onde é necessária uma performance completa para esses supercomputadores. Este é um sistema poderoso em alguns dos maiores ambientes de HPC do mundo, suportando aplicações críticas para a missão.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
