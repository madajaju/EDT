---
layout: posts
title: "Inteligência Artificial e Segurança"
number: 85
permalink: episode-EDT85-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 85
tags:
    - aiml
    - cybersecurity
    - devops
    - compute
    - technology
    - process

date: Wed May 04 2022 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Neste episódio, Darren discute os aspectos de dados da inteligência artificial (IA) e a importância de proteger esses dados."
video: "https://youtu.be/NVcBCPpJ4rY"
description: "Neste episódio, Darren discute os aspectos de dados da inteligência artificial (IA) e a importância de proteger esses dados."
---

<div>
{% include transistor.html id="ffe877ee" title="#85 Artificial Intelligence and Security" %}

{% include youtube.html id="NVcBCPpJ4rY" %}
</div>

---

## Falhas de IA

Recentemente, Darren pediu a uma turma de estudantes do ensino médio e da faculdade que estavam estudando IA para encontrar falhas na IA. Eles encontraram exemplos como o Microsoft Tay, um chatbot que aprendeu conversação casual a partir do Twitter e, dentro de 24 horas, estava proferindo comentários racistas e misóginos com base em manipulação de feeds do Twitter. Outro exemplo foi um sistema de rastreamento de bola do Inverness Football Club que deveria rastrear uma bola de futebol, mas acabou rastreando a cabeça de um árbitro calvo ao invés disso. Mais grave foi um acidente fatal quando um veículo autônomo da Uber não reconheceu um pedestre fora da faixa de pedestres e falhou em parar.

## Implantando soluções

Todos esses fracassos de IA têm a ver com dados. Ao implantar soluções de IA, você deve se fazer perguntas críticas: Onde estou fazendo minha inferência? O ponto final é seguro? Se você estiver fazendo todas as suas inferências no ponto final, talvez com detecção de objetos por meio de uma câmera, por exemplo, é preciso garantir que seja seguro; ninguém deve ser capaz de manipular os dados, a câmera ou o modelo.

Outra pergunta é, o que vai ser implantado? Vou implantar uma rede neural ou algoritmo na ponta, ou apenas transmitir os dados de volta da ponta para um centro de dados para fazer a inferência lá? Além disso, quando a IA for operacionalizada, você precisa perguntar com que frequência os modelos ou algoritmos serão atualizados.

## Pipeline de IA

O pipeline para o desenvolvimento de IA, treinamento, teste, implementação e inferência requer três coisas: a aplicação, o modelo e os dados. Essas três coisas devem migrar juntas pelo pipeline e serem protegidas simultaneamente. É necessário garantir que os dados de produção não sejam manipulados, mesmo durante a produção.

## Ameaças de segurança de IA

As ameaças para a IA são significativas, seja por espionagem, sabotagem ou fraude, porque a superfície de ataque é ampla.

## Ataques

Primeiro estão os modelos. Um modelo pode ser manipulado, como alguém colocando adesivos pretos e brancos em placas de pare para que elas não sejam reconhecidas como tal, ou alguém mexendo com detecção de correspondência de padrões, para que os ataques fiquem indetectáveis. Os modelos devem ser protegidos não apenas durante o treinamento, mas também durante os testes, implantação e inferência. Criptografia, controle de acesso e controle de modelo e versão são essenciais, assim como seriam no desenvolvimento de um aplicativo.

Os dados de treinamento e produção da fonte também devem ser protegidos contra manipulação.

## Tipos de Ataques

Um artigo do Belfer Center coloca as ameaças em um eixo de formato e um eixo de visibilidade. O eixo de formato varia do físico ao digital. O eixo de visibilidade varia de perceptível a imperceptível.

## Ataques físicos

Ataques físicos podem alterar itens físicos, como o adesivo na placa de pare. Esses ataques foram evidentes desde cedo com a condução autônoma e o reconhecimento facial. Precisamos de um melhor treinamento dos algoritmos de IA para esses ataques, utilizando técnicas de aprendizado reforçado e aprendizado de casos negativos.

## Ataques Digitais

Os ataques digitais são mais difíceis de detectar, pois não são visíveis. Um ataque poderia ser ruído branco injetado no fluxo de dados para perturbar o algoritmo. Esses ataques são difíceis de combater, a menos que a inferência seja realizada na borda ou a detecção de padrões seja implantada. Por esse motivo, é essencial saber de onde os dados de origem estão vindo, tanto nos dados de treinamento, teste e produção de origem.

## Identificar as Fontes de Dados

As fontes de dados devem ser verificadas e testadas a partir de fontes de dados públicas. Os dados de código aberto não são bem protegidos. Considere a possibilidade de gerar fontes de dados, para ter mais controle. Se você usar uma fonte de dados compartilhada, utilize um sistema de controle de versão, como o GitHub ou o GitLab, para verificar a consistência. Os dados de teste também precisam de controle de versão, controle de acesso e outras medidas de segurança, assim como normalmente são feitos em um pipeline de DevOps.

A última parte, mais desafiadora, é proteger os dados de produção. Fazer a inferência o mais próximo possível dos dados é um bom começo. Muitas especulações podem ser feitas logo na borda com processamento neuromórfico e até conjuntos de instruções nos processadores Intel para reduzir o risco de manipulação dos dados durante o transporte. Em vez disso, você pode criptografar os dados e enviá-los de volta para o centro de dados.

Proteger e Gerenciar Dados / Pipe de IA Seguro.

Depois de identificar todas as suas fontes de dados, existem três aspectos críticos para proteção: controle, segurança e criptografia.

O primeiro é o controle. Você deveria ter controle de versões, bibliotecas protegidas, e backup e restauração em caso de arquivos de dados corrompidos. Essas são práticas de segurança padrão e essenciais que a IA deve adotar, assim como acontece no desenvolvimento de aplicativos.

A segurança deve incluir a autorização de acesso, até mesmo alguns conceitos de confiança zero, como fornecer acesso a pessoas que o necessitam apenas por um curto período de tempo. Certifique-se de que os modelos não estejam sendo manipulados e garanta que estejam vinculados a aplicativos específicos.

Os dados devem ser criptografados em repouso, em trânsito e em uso. No passado, isso era caro em termos de utilização da CPU e tempo, mas agora grande parte da criptografia está embutida no silício e é muito rápida, com mínimo ou nenhum atraso de desempenho.

## Chamada para Ação

A data é fundamental para tornar a IA bem-sucedida e segura, portanto, proteja-a e utilize as melhores práticas imediatamente em termos de segurança. Opere pipelines para eliminar a necessidade humana de implantar e testar algoritmos de IA diariamente. Automatize o máximo possível e injete segurança no pipeline de IA DevOps para proteger seus dados de origem, modelo e aplicação.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
