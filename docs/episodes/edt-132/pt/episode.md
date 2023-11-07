---
layout: posts
title: "Gerenciamento de BareMetal Definido por Software"
number: 132
permalink: episode-EDT132-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 132
tags:
    - metify
    - sdi
    - technology
    - baremetal
    - heterogeneouscompute
    - compute

date: Wed Apr 05 2023 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Ian Evans
    - Mike Wagner

img: thumbnail.png
image: thumbnail.png
summary: "Neste episódio, Darren entrevista os fundadores da Metify, Ian Evans e Mike Wagner, sobre sua abordagem exclusiva para o gerenciamento de infraestrutura de software definido de metal nu usando o padrão Redfish."
video: "https://youtu.be/ecB9dPexjIM"
description: "Neste episódio, Darren entrevista os fundadores da Metify, Ian Evans e Mike Wagner, sobre sua abordagem exclusiva para o gerenciamento de infraestrutura de software definido de metal nu usando o padrão Redfish."
---

<div>
{% include transistor.html id="dd6ccded" title="#132 Software Defined BareMetal Management" %}

{% include youtube.html id="ecB9dPexjIM" %}
</div>

---

Com mais de duas décadas de experiência no espaço do data center, Ian compartilha seus conhecimentos sobre otimização de infraestrutura, automação de gerenciamento de servidores e simplificação de diferentes componentes em um data center. Por outro lado, Mike, que anteriormente trabalhou na IBM e na Red Hat, concentra-se em vendas consultivas e lideradas por canal para entender melhor os problemas e padrões das empresas na operação de seus data centers. Juntos, eles criaram o Metify em 2020 para fornecer soluções de automação para gerenciar servidores, armazenamento e dispositivos de rede em data centers, apesar do surgimento de serviços de nuvem pública como RWC Azure e GCP.

## Automatização do Datacenter

Automatizar a gestão do data center pode aproximar a gestão em local físico de uma experiência em nuvem pública, ao mesmo tempo em que reduz os custos. Um dos elementos vitais dessa transformação é a padronização e a utilização de padrões abertos, como a especificação DMCA Redfish, para tornar essa automação possível. A ubiqüidade dessa especificação em placas-mãe de classe empresarial a tornou acessível para todos os envolvidos integrarem-se a ela. As pressões financeiras e a demanda dos usuários são essenciais para impulsionar os OEMs a implementarem esses padrões abertos. No geral, a automação e a padronização podem ajudar os data centers a competir com provedores de serviços em nuvem em termos de custos operacionais, ao mesmo tempo em que melhoram as capacidades de gerenciamento de servidores.

A eficiência do datacenter pode ser melhorada usando ferramentas que permitem automação e integração com estruturas padrão. Os fornecedores de hardware enfrentam pressão devido à comoditização da tecnologia, então eles devem se diferenciar oferecendo servidores white box, similarmente reduzidos. A Metify fornece uma única interface para gerenciar dispositivos de qualquer fabricante, desde que estejam habilitados com BMC e sigam a especificação Redfish. Existem padrões emergentes para gerenciar dispositivos pequenos através do redfish; a questão permanece sobre até que ponto a extensibilidade alcança as partes específicas de rede na pilha.

## Nuvem Híbrida

A ascensão das estratégias de nuvem híbrida impulsiona a forma como as empresas gerenciam seus data centers, bordas e ambientes de nuvem. O crescimento da nuvem pública é significativo; no entanto, há um enorme crescimento nos espaços de nuvem privada. O Metify oferece uma experiência mais semelhante à nuvem do ponto de vista operacional, permitindo que os administradores de sistemas gerenciem sua borda, data center ou vários data centers através de uma API padrão. Manter APIs abertas e padronizadas é essencial para que os clientes usem ferramentas de gerenciamento familiares como TerraForm e Ansible. As tecnologias de nuvem híbrida permitem que as empresas otimizem custos, governança, segurança e eficiência.

Um dos perigos de um padrão aberto pode ser vulnerável a violações de segurança sem as medidas adequadas de comando e controle. A Metify aborda esse problema ao colocar auditabilidade, autorização, acesso e controles nos padrões abertos para oferecer uma abordagem sistêmica para gerenciar diretamente o metal em hardware heterogêneo. O produto da Metify se concentra em fornecer um nível de controle para evitar incidentes indesejáveis e eles se integram a ferramentas de gerenciamento de fluxo de trabalho para automação.

## BareMetal SDI: 
BareMetal SDI

Muitas tecnologias modernas de centros de dados dependem da virtualização como base de seu plano de controle de gerenciamento. No entanto, o gerenciamento de metal nu permanece uma tarefa tradicional e intensiva em trabalho manual. Essa abordagem única para infraestrutura de nuvem privada não depende da virtualização. Em vez disso, ela utiliza a abordagem de infraestrutura definida por software para gerenciamento de metal nu, permitindo uma combinação de metal nu, máquinas virtuais e contêineres. Essa abordagem permite que os administradores de sistema gerenciem a infraestrutura subjacente de forma mais eficaz e forneçam uma experiência na nuvem sem atritos. Essa abordagem pode suportar ambientes de computação heterogêneos, nos quais CPU, GPU, FPGA, VPU e NPUs podem ser aproveitados para vários fluxos de trabalho. Com o Redfish e uma extensão do esquema, o Metify pode controlar facilmente novos dispositivos e eles veem o ecossistema em expansão como incrivelmente valioso para o desenvolvimento de produtos.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
