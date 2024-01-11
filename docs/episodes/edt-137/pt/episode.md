---
layout: posts
title: "Renascimento da Nuvem Privada"
number: 137
permalink: episode-EDT137-pt
has_children: false
lang: pt
nav_exclude: true
parent: Episodi
grand_parent: Português
nav_order: 137
tags:
    - cloud
    - computing
    - greenlake
    - hpe
    - multicloud
    - hybridcloud
    - technology

date: Tue May 09 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Sam Ceccola

img: thumbnail.png
image: thumbnail.png
summary: "Neste episódio, Darren entrevista Sam Ceccola, CTO da DOD para HPE, sobre os novos modelos de negócios e tecnologia que estão mudando a forma como as organizações consomem a nuvem híbrida."
video: "https://youtu.be/url"
description: "Neste episódio, Darren entrevista Sam Ceccola, CTO da DOD para HPE, sobre os novos modelos de negócios e tecnologia que estão mudando a forma como as organizações consomem a nuvem híbrida."
---

<div>
{% include transistor.html id="fcf7bb68" title="#137 Rebirth of the Private Cloud" %}

{% include youtube.html id="url" %}
</div>

---

Houve uma tendência em direção à repatriação no setor comercial, onde empresas estão trazendo cargas de trabalho e máquinas virtuais de volta de ambientes de nuvem pública devido a motivos financeiros, como taxas de egresso e orçamento para cargas de trabalho em hiperscalers. Preocupações com a soberania de dados, segurança, desempenho e latência também levaram mais empresas a se afastarem da nuvem pública e voltarem para tecnologias de nuvem privada. Apesar dessa mudança, muitas promessas da nuvem foram cumpridas para fornecer facilidade de uso, elasticidade e precificação baseada em consumo. Para facilitar a transição entre nuvens, a nuvem privada deve oferecer facilidade de uso, portabilidade de cargas de trabalho e novos modelos de precificação baseados em consumo, tão solicitados nas nuvens públicas.

## Controle de custos

Sam Ceccola, o CTO DoD da HPE, acredita que é essencial entender os riscos e desafios associados a cada tecnologia de nuvem privada, pública e híbrida. E projetar soluções que aproveitem a força de cada tecnologia. É aqui que entra a oferta de produção da HPE, o GreenLake. O modelo de aquisição de serviços baseado no consumo do GreenLake foi implementado pela primeira vez em 2005 e desde então evoluiu para incluir um portal de autoatendimento para gerenciar vários ambientes de nuvem privada e pública. O GreenLake oferece aos clientes a capacidade de implantar recursos adicionais através da fronteira entre a nuvem privada e pública sob demanda. Ele também gerencia e visualiza custos complexos, como cobranças de egresso e orçamentação para carga de trabalho em escala hiper.

## Gestão de Dados

Outra preocupação importante para a maioria dos consumidores de nuvens públicas é o gerenciamento de dados, governança e soberania. Sem uma estratégia de dados coesa, muitas organizações são sobrecarregadas com os custos de saída de dados ao mover dados para dentro e para fora das nuvens públicas. Existem várias abordagens diferentes para gerenciar dados através de fronteiras de nuvem. A HPE utiliza uma abordagem de armazenamento adjacente à nuvem que reduz a quantidade de dados movidos para a nuvem ao mínimo. O armazenamento adjacente à nuvem do GreenLake mantém os dados no local, enquanto executa cargas de trabalho de computação na nuvem. Essa abordagem garante a soberania dos dados e reduz os custos de saída de dados e os problemas de latência associados à movimentação de grandes quantidades de dados entre nuvens.

## Portabilidade.

Outro aspecto chave das arquiteturas de nuvem multi-híbrida é a capacidade de mover facilmente as cargas de trabalho entre as nuvens. Algumas organizações migraram para arquiteturas de microsserviços baseadas em contêineres sem estado para fornecer a flexibilidade e portabilidade das cargas de trabalho. No entanto, nem todas as cargas de trabalho podem ser facilmente containerizadas, especialmente aquelas que possuem aplicativos que contêm estado. Nesses casos, máquinas virtuais são usadas para permitir a movimentação de aplicativos de uma nuvem para outra. Mover VMs entre nuvens pode ser problemático, pois os provedores de serviços em nuvem utilizam hipervisores e CPUs diferentes que podem não ser completamente compatíveis. Compreender as limitações dessas migrações é fundamental na decisão de compra de hardware, tanto virtualizado quanto não virtualizado.

## Segurança

A GreenLake não limita os clientes a implantação no local, pois permite que eles provisionem cargas de trabalho em diversos ambientes de nuvem, incluindo Amazon, Google e Azure. Além disso, o GreenLake suporta cargas de trabalho híbridas reais, onde uma carga de trabalho pode ser executada tanto no local quanto em ambientes de nuvem de hiperscala simultaneamente. Executar cargas de trabalho em diferentes limites de nuvem pode causar exposição adicional a ataques cibernéticos. Compreender os modelos de segurança das diferentes tecnologias de nuvem pública e privada pode ser uma tarefa assustadora e aumenta o capital humano necessário para arquitetar e gerenciar efetivamente uma posição de segurança sólida. A plataforma GreenLake lida com a segurança por meio de seu mecanismo de segurança agnóstico, Security Central, que suporta atestação multi-nuvem e arquiteturas de confiança-zero para nuvens independentes, gerenciando a complexidade e integração dos modelos de segurança.

Projetar uma solução de nuvem multi-híbrida é complexo e requer o entendimento das tecnologias de nuvem privada e pública, suas limitações e suas vantagens. Felizmente, existem organizações como a HPE que têm trabalhado com arquiteturas de nuvem multi-híbridas há vários anos e aprenderam os detalhes da gestão eficaz das cargas de trabalho nesse novo ambiente flexível.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
