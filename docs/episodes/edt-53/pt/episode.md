---
layout: posts
title: "DevOps com velocidade ao mesmo tempo que reduz o risco."
number: 53
permalink: episode-EDT53-pt
lang: pt
nav_exclude: true
nav_order: 53
tags:
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - multicloud

date: Mon Jun 14 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Neste episódio, Robert Boule, Chefe de Engenharia de Soluções na OpsMx, junta-se a Darren para falar sobre como melhorar a velocidade sem aumentar o risco no processo DevOps. As três áreas-chave a equilibrar na entrega de software são velocidade, risco e qualidade. A maioria consegue gerenciar uma ou duas dessas coisas, mas adicionar a terceira pode se tornar difícil. Por exemplo, você pode ser capaz de entregar com velocidade porque possui um ótimo sistema de entrega contínua (cd), mas uma vez que você introduz verificações de conformidade e políticas, você enfrenta um desafio. Você para e verifica essas coisas, ou talvez importe alguns resultados de outra ferramenta? De repente, sua velocidade sofre."
video: "https://youtu.be/url"
description: "Neste episódio, Robert Boule, Chefe de Engenharia de Soluções na OpsMx, junta-se a Darren para falar sobre como melhorar a velocidade sem aumentar o risco no processo DevOps. As três áreas-chave a equilibrar na entrega de software são velocidade, risco e qualidade. A maioria consegue gerenciar uma ou duas dessas coisas, mas adicionar a terceira pode se tornar difícil. Por exemplo, você pode ser capaz de entregar com velocidade porque possui um ótimo sistema de entrega contínua (cd), mas uma vez que você introduz verificações de conformidade e políticas, você enfrenta um desafio. Você para e verifica essas coisas, ou talvez importe alguns resultados de outra ferramenta? De repente, sua velocidade sofre."
---

<div>
{% include transistor.html id="9eb5fd35" title="#53 DevOps with Speed While Reducing Risk" %}

{% include youtube.html id="url" %}
</div>

---

As três principais áreas-chave a equilibrar na entrega de software são velocidade, risco e qualidade. A maioria consegue gerenciar uma ou duas dessas coisas, mas adicionar a terceira pode se tornar difícil. Por exemplo, você pode conseguir entregar com velocidade porque possui um ótimo sistema de cd, mas uma vez que você introduce verificações de conformidade e políticas, você se depara com um desafio. Você para e verifica essas coisas ou talvez ingira alguns resultados de outra ferramenta? De repente, sua velocidade sofre.

OpsMx está trabalhando para ajudar as pessoas a automatizarem esses pontos de decisão. A automação é a coisa mais importante para manter a velocidade alta enquanto aumenta os outros dois pilares, risco e qualidade.

## Solução OpsMx: Entrega de Software Totalmente Automatizada

A automação funciona como uma agregação de dados, ao obter resultados das várias ferramentas na cadeia de ferramentas e, em seguida, possui um mecanismo como um gerenciador de políticas que fornece resultados esperados em marcas de verificação de ferramentas como o BlackDuck. Se parecer correto, o processo não é interrompido, como acontece atualmente, para uma verificação humana.

## A entrega mais rápida de aplicativos aumenta as taxas de falha.

A velocidade de entrega de aplicativos passou de semanal ou mensal para por hora, acrescentando pressão para produzir rapidamente. À medida que você tenta aumentar a velocidade, no entanto, pode começar a perder algum controle sobre a qualidade, talvez ignorando algumas verificações de risco. O resultado líquido é que quanto mais rápido você tentar se mover, mais propenso estará a ter falhas.

## Pontos de atrito e espaços de problemas

Com o uso estratégico da automação, você tem a capacidade de aumentar a velocidade sem assumir riscos. A verificação contínua pode reduzir um esforço de três ou quatro horas para cinco ou dez segundos. Em vez de usar mão de obra humana para analisar logs em busca de comportamento anômalo que possa ter passado por uma verificação de aprovação/reprovação binária, a verificação contínua pode fazer isso automaticamente, permitindo que as pessoas se concentrem apenas nos casos excepcionais.

## O que significa automação nesse contexto?

A próxima peça está utilizando as ferramentas exigidas pela equipe de segurança e conformidade, como o BlackDuck. Com a automatização, você não precisa interromper o pipeline para ter alguém interpretando os resultados antes de continuar, pois isso acontecerá automaticamente.

As outras partes são políticas em um nível mais elevado, se você estiver em uma indústria regulamentada com mais verificações, ou algo tão simples como um varejista, por exemplo, que não quer lançar um novo software duas semanas antes do Natal. Essas verificações podem ser automatizadas para eliminar a necessidade de aprovação humana, permitindo que o fluxo do pipeline continue caso não haja exceções. A ideia é remover o máximo possível de barreiras humanas para permitir que o pipeline flua.

O conjunto principal de automações de controle e políticas são reutilizáveis entre pipelines; você só precisa personalizar ou criar aqueles específicos para os critérios do seu ciclo de lançamento.

## Solução OpsMx: Entrega de Software Totalmente Automatizada.

OpsMx oferece a capacidade de criar esses pipelines e automações de análise de logs. Spinnaker é a ferramenta atual, mas a visão da OpsMx é ser o mais agnóstico possível em relação ao cd, permitindo o uso de todas as ferramentas de cd, como Jenkins e Microsoft Azure. OpsMx aproveita a parte de cd para a automação, mas está acima disso ajudando a tomar decisões automatizadas.

Uma parte crescente da ferramenta é o aprendizado de máquina para ajudar a entender o que é considerado como base para uma aplicação específica em comparação com o que é um comportamento anômalo. Também há um modelo de aprendizado supervisionado, onde um profissional de DevOps, um engenheiro ou um proprietário de produto pode especificar um comportamento anômalo como esperado no contexto da aplicação.

O sistema também permite a auditabilidade. Qualquer alteração ou exceção é documentada. Existe um histórico completo de auditoria de tudo o que acontece, desde quem aprovou uma exceção até qual artefato foi implantado e qual imagem base foi usada. Esteja o sistema em execução na nuvem ou localmente, é possível visualizar toda a linha de produção como uma entidade única.

Outro aspecto da visibilidade que o OpsMx oferece é um tipo de mapa de onde está implantado, como por exemplo, a série de microserviços que estão atualmente no QA, o que está em determinados estágios ou o que está em produção e, em seguida, para qualquer uma dessas coisas, você pode aprofundar e obter uma visão histórica. Você pode clicar em qualquer lançamento e todas as informações de auditoria estão ao alcance dos seus dedos.

Além disso, a próxima fronteira em que a OpsMx está trabalhando é a eficácia dos artefatos que estão sendo capturados para que a cadeia de suprimentos, ou linhagem, seja transparente.

OpsMx está agora usando uma tecnologia baseada em agentes que pode interagir com, por exemplo, recursos que estão atrás do seu firewall. O agente atua como um proxy para a camada de inteligência, permitindo que os dados sejam coletados lá. Não há preocupações com a abertura ou exposição de portas de firewall. Funciona da mesma forma com os provedores de nuvem: o agente pode ser implantado dentro da VPC e você não precisa mais correr o risco de colocar chaves e segredos em um aplicativo baseado em nuvem. O agente simplesmente atua como um proxy, garantindo que a parte autorizada permaneça sempre dentro da VPC, assegurando a forma como as informações são coletadas.

Com essa nova direção, a indústria DevOps como um todo está prestes a passar por uma reviravolta em relação à segurança e auditabilidade.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
