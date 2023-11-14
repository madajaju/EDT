---
layout: posts
title: "Telemetria na Nuvem"
number: 52
permalink: episode-EDT52-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 52
tags:
    - multicloud
    - optimization
    - workloadplacement

date: Mon Jun 07 2021 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto-chefe de Soluções da Intel, fala com Josh Hilliker, Diretor de Arquitetos de Soluções em Nuvem da Intel, sobre o uso de telemetria na nuvem para maximizar valor e eficiência."
video: "https://youtu.be/l6wZNe_mMfY"
description: "Darren Pulsipher, Arquiteto-chefe de Soluções da Intel, fala com Josh Hilliker, Diretor de Arquitetos de Soluções em Nuvem da Intel, sobre o uso de telemetria na nuvem para maximizar valor e eficiência."
---

<div>
{% include transistor.html id="a732fe89" title="#52 Telemetry in the Cloud" %}

{% include youtube.html id="l6wZNe_mMfY" %}
</div>

---

## Benefícios dos Arquitetos de Soluções em Nuvem (CSAs)

O papel do CSA está em alta na indústria atualmente, e a Intel tem contratado uma equipe de CSAs para fornecer valor aos seus clientes. Os CSAs podem ajudar os clientes a evitar a mentalidade de "levantar e transferir" que leva a custos desnecessariamente altos. Esses novos CSAs trazem uma perspectiva externa e se conectam com a comunidade maior de CSAs para resolver problemas.

## Fases da Telemetria

A telemetria na nuvem não deve ser relegada ao provedor de serviços em nuvem. Por exemplo, a Amazon Web Services (AWS) teve uma grande interrupção na Costa Leste em novembro passado e suas ferramentas não estavam notificando, então muitos clientes não tinham ideia de que estavam fora do ar. As organizações precisam de sua própria telemetria para monitoramento.

A primeira fase é sem monitoramento na nuvem. A segunda fase é a exposição da telemetria, onde você entende o que está obtendo, por exemplo, CPU, memória e rede, mas é de nível superficial. A próxima fase é o monitoramento e ação, onde você recebe notificações sobre lentidões, taxas de transação, taxas de resposta, etc. A próxima fase é mais abaixo na pilha, onde a nuvem inteligente moderna controla e prevê para remediação. Por último, há a automação completa. É onde as coisas estão operando por conta própria, ouvindo, respondendo e depois informando posteriormente.

Um exemplo de automação completa seria um centro de dados que controla um sistema HVAC, detectando e reduzindo ou aumentando a temperatura em diferentes partes de um prédio. Para cargas de trabalho, uma nuvem inteligente pode mover as cargas de trabalho para maximizar o valor em capacidade e desempenho.

## Abordagens Atuais e Limitações

Muitas vezes, no entanto, os clientes de provedores de serviços de nuvem negligenciam a automação na camada de infraestrutura e esquecem da camada de carga de trabalho. Os clientes precisam de informações além das informações essenciais; eles precisam de telemetria profunda e detalhada para saber o que realmente está acontecendo. É um erro confiar que o provedor de serviços em nuvem tenha seus melhores interesses em mente em relação à telemetria, e isso pode resultar em altos custos.

Algumas empresas provedoras de serviços em nuvem estão se abrindo mais. Atualmente, a AWS está revolucionando o jogo com a telemetria que eles estão fornecendo. Esperançosamente, outros seguirão o exemplo.

## Vamos coletar a telemetria correta...

Escolher as instâncias corretas faz diferença. Nem todos os núcleos são iguais; diferentes núcleos são usados ​​para coisas diferentes, e é importante entender quais são para obter o melhor desempenho e preço.

Que tipo de informação você pode coletar? O design do produto da Intel inclui unidades de monitoramento de desempenho (PMUs). Estes são contadores em nível inferior e fornecem informações sobre transações, atrasos, latência e gargalos. Existem três tipos diferentes de PMUs: núcleo, fora do núcleo e sem núcleo. Essas PMUs coletam informações sobre CPI, utilização, frequência e TMAM. Todos esses dados estão disponíveis utilizando a AWS.

Usando métricas, a telemetria real é uma ferramenta para ajudá-lo a otimizar suas cargas de trabalho. Você pode comparar como sua carga de trabalho está sendo executada em seu próprio data center, por exemplo, com a AWS nessas instâncias, e rodar métricas para descobrir em qual plataforma as cargas de trabalho devem ser hospedadas.

## Relevância de TI

Adicionar telemetria ao benchmarking é uma solução definitiva. Com o benchmarking, você pode conhecer sua produção, e com a telemetria, você pode analisar CPI, utilização e frequência, e ter um painel completo do que está acontecendo. Você deseja fazer a mesma coisa na nuvem, em vez de apenas colocar cargas de trabalho em uma instância aparentemente mais barata.

Profissionais de TI não devem temer perder seus empregos porque as coisas estão migrando para a nuvem. Em vez disso, eles devem transferir suas habilidades para aprender sobre telemetria de benchmarking, em vez de ter uma mentalidade de levantar e transferir. Tornar-se proficiente na utilização da nuvem também envolve o uso de recursos nativos da nuvem, como o Kubernetes e os containers. A telemetria também funciona nessas áreas. Com o C advisor da Intel, é possível obter uma telemetria rica, como dados de núcleo e dados fora do núcleo de seus containers.

Embora seja um pouco intimidador quando você olha para tudo o que é possível na nuvem, começar pequeno é a melhor opção. Analise as aplicações corretas com base no risco. Catalogue suas aplicações, avalie a hierarquização das aplicações e, em seguida, comece a transferi-las para a nuvem em pedaços consideráveis de funções e aplicativos semelhantes. Conforme você explora novos serviços e aprende novas aplicações, considere a arquitetura por trás delas e faça as perguntas corretas para se tornar um arquiteto técnico mais informado.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
