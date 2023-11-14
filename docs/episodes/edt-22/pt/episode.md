---
layout: posts
title: "Um argumento para Multi-Hybrid Cloud"
number: 22
permalink: episode-EDT22-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 22
tags:

date: Tue Sep 22 2020 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher descreve por que um Arquiteto de Nuvem Multi-Híbrida pode estar presente no seu Data Center. A maioria das organizações já possui todos os ingredientes necessários. Elas só precisam saber como eles se encaixam juntos."
video: "https://youtu.be/1cISpr_FNFM"
description: "Darren Pulsipher descreve por que um Arquiteto de Nuvem Multi-Híbrida pode estar presente no seu Data Center. A maioria das organizações já possui todos os ingredientes necessários. Elas só precisam saber como eles se encaixam juntos."
---

<div>
{% include transistor.html id="e22edf51" title="#22 An Argument for Multi-Hybrid Cloud" %}

{% include youtube.html id="1cISpr_FNFM" %}
</div>

---

## Ambiente atual de nuvem

Nos últimos cinco anos, houve uma mudança fundamental no ambiente de TI. O crescimento contínuo da Nuvem Pública e o surgimento de opções de Nuvem Privada deixaram muitos CIOs e departamentos de TI correndo atrás. No mercado competitivo de hoje, muitas equipes de desenvolvimento precisam se mover mais rápido do que a maioria dos departamentos de TI pode entregar. As equipes de desenvolvimento descobriram que Nuvens Públicas como AWS, GCE e Azure são uma opção viável para o antigo estilo de "TI caseira" "debaixo da mesa". Os provedores de nuvem pública tornaram fácil e rápido criar nova infraestrutura. Não há mais espera por várias aprovações técnicas e comerciais, espaço físico no data center e problemas de fornecimento de fornecedores. Agora, em questão de minutos, uma equipe de desenvolvimento pode ter toda a infraestrutura necessária para seu novo projeto.

Antes da nuvem pública, os CIO(s) podiam facilmente "andar ao redor" dos cubículos e contar o número de máquinas de "TI caseiro" que estavam funcionando debaixo das mesas das pessoas. Com as máquinas físicas não mais visíveis para os departamentos de TI, torna-se impossível identificar equipes e a infraestrutura de seus projetos. Muitas nuvens públicas deram às organizações a capacidade de consolidar a contabilidade de todas as contas de domínios específicos, mas a visibilidade sobre o que está em execução e quem está trabalhando na infraestrutura ainda é algo um tanto quanto difícil de encontrar. Muitas vezes, esses projetos "rebeldes" se tornam visíveis quando ocorre a produção de projetos e é necessário colocá-los em uma infraestrutura segura da empresa. Políticas de segurança, privacidade e regulamentação podem tornar a "produção" de projetos quase impossível. Especialmente, se os desenvolvedores tiverem vinculado de forma estreita suas aplicações à infraestrutura de nuvem.

Departamentos de TI com pensamento avançado estão fazendo o seu melhor para capturar o "cottage IT" ao trabalhar com Nuvens Públicas e ISVs para implementar "portais da empresa" nas Nuvens. Colocar um portal de passagem é um bom começo para capturar projetos que usam infraestrutura, mas muitas organizações acham que apenas um portal deixa as equipes de desenvolvimento querendo mais. Nos últimos anos, tenho trabalhado com muitas dessas organizações para identificar casos de uso, arquiteturas e tecnologias que ajudam a desenvolver esses portais aprimorados, que chamamos de "Multi-Clouds Híbridas" (MCH). Tipicamente, três principais tecnologias são integradas para construir essas MCHs. Plataformas de Gerenciamento de Nuvem (CMP), Frameworks de Automação e ferramentas de Plataforma como Serviço (PaaS).

## Plataforma de Gerenciamento em Nuvem (CMP)

As plataformas de gerenciamento em nuvem têm como principal responsabilidade gerenciar múltiplas nuvens heterogêneas, tanto públicas quanto privadas. Elas oferecem aos usuários finais a capacidade de gerenciar várias nuvens e sua infraestrutura a partir de uma única interface comum. Essas plataformas são geralmente idealizadas com os administradores de nuvem em mente. Embora o enfoque principal das ferramentas de plataforma de gerenciamento em nuvem seja gerenciar múltiplas nuvens, muitas delas possuem recursos adicionais de PAAS (Plataforma como Serviço) e estruturas de automação, ou pelo menos possuem uma arquitetura de plug-in para suportar essas funcionalidades.

## Casos de Uso abordados.

Gerenciando Nuvens Públicas

Gerenciando Nuvens Privadas

Gerenciando identidades na nuvem

Gerenciando infraestrutura em várias nuvens.

## Estruturas de Automação

Os principais responsáveis do Automation Framework são automatizar o desdobramento, gerenciamento e atualização de pilhas de software na infraestrutura. O Automation Framework surgiu da comunidade DevOps e geralmente tem como foco processos repetíveis. Muitas dessas ferramentas incluem linguagens de script que permitem aos engenheiros de DevOps gerenciar e configurar software e serviços de forma repetida. Muitas equipes de DevOps têm bastante conhecimento dessas ferramentas.

## Casos de uso abordados

Implantar software em infraestrutura

Gerenciar software em infraestrutura

Atualizar Software e Serviços

## Plataforma como Serviço (PAAS)

A Plataforma como Serviço é principalmente responsável por oferecer um único portal para reutilizar plataformas e implantá-las na infraestrutura. As ferramentas PaaS geralmente são altamente opinativas, levando em consideração o desenvolvedor, o que pode levar a configurações de infraestrutura inflexíveis. Muitas dessas ferramentas possuem um portal na web que permite aos desenvolvedores selecionar serviços e implantá-los na infraestrutura.

## Casos de uso abordados

Implantar/Gerenciar Serviços/Aplicações

Gerenciar Catálogo de Serviços

Desenvolver novos serviços/aplicações

## A convergência cria o Hybrid Multi-Cloud (MHC)

Porque nenhuma ferramenta possui todos os casos de uso necessários para gerenciar nuvens, aplicativos, infraestrutura e serviços, as equipes gastam vários "anos de trabalho" instalando, configurando e integrando esses três conjuntos de ferramentas juntos. Isso levou ao surgimento de tecnologias que integram essas ferramentas, incluindo novas ofertas de produtos e novos recursos em produtos atualmente disponíveis.

Muitos produtos da CMP estão incluindo PaaS e estruturas de automação em suas soluções. As ferramentas de PaaS estão agora gerenciando várias nuvens. As estruturas de automação estão começando a oferecer portais da web e conectividade para várias nuvens. Muitas das ferramentas estão migrando para a visão Híbrida Multi-Nuvem. Ao decidir qual(is) ferramenta(s) usar, é importante lembrar das bases da ferramenta.

## Implementando uma solução

O ecossistema híbrido e multi-nuvem ainda é relativamente novo e ainda requer algumas integrações complexas entre as ferramentas. Há algumas ferramentas que estão começando a fornecer soluções completas prontas para uso, mas ainda com sua visão particular do mundo. Como o ecossistema é incipiente, existem muitos players e opções. O tempo dirá quem ganhará esse espaço. Por enquanto, será interessante observar a convergência e consolidação das ferramentas enquanto suas funcionalidades amadurecem.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
