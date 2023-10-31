---
layout: posts
title: "Dados resilientes em comunicações disruptivas"
number: 136
permalink: episode-EDT136-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 136
tags:
    - sabr
    - ddil
    - technology
    - edge
    - process
    - devops
    - security

date: Mon May 01 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "Neste episódio de podcast, Darren Pulsipher, arquiteto-chefe de soluções da Intel para o setor público, é entrevistado pela convidada Dr. Anna Scott sobre dados resilientes com comunicações disruptivas."
video: "https://youtu.be/XhtXz6hx9AY"
description: "Neste episódio de podcast, Darren Pulsipher, arquiteto-chefe de soluções da Intel para o setor público, é entrevistado pela convidada Dr. Anna Scott sobre dados resilientes com comunicações disruptivas."
---

<div>
{% include transistor.html id="a2a806f7" title="#136 Resilient Data in Disruptive Comms" %}

{% include youtube.html id="XhtXz6hx9AY" %}
</div>

---

Neste episódio de podcast, Darren Pulsipher, arquiteto principal de soluções da Intel para o setor público, é entrevistado pela apresentadora convidada Dra. Anna Scott sobre dados resilientes com comunicações disruptivas. A discussão é centrada em gerenciar dados de forma segura e eficiente em ambientes com largura de banda limitada e serviço interrompido, possibilitando inteligência artificial e análise de dados complexos na ponta. Darren fala sobre sua experiência trabalhando na nuvem de carros conectados da Toyota como base para resolver esse problema e como arquiteturas comuns de gerenciamento de dados foram utilizadas para criar uma solução. A revelação gradual dos desafios do cliente ajudou a identificar padrões de design que abriram caminho para uma solução bem-sucedida.

Apesar da conectividade intermitente e dos nós de borda dinâmicos, o processo de design de arquitetura para realizar análise de borda é complexo e difícil de articular, por isso eles adotaram uma abordagem iterativa. Primeiro, eles consideraram uma solução que traria todos os dados para um único local para análise, mas acharam impraticável devido ao grande volume de dados na borda. Mover as aplicações para a borda parecia promissor até que o cliente solicitou análises agregadas em toda a borda. Após explorar padrões de design, eles decidiram usar o padrão de design de fluxo de dados com um hub de publicação e assinatura para criar fluxos de dados dinamicamente para consumidores e produtores. Embora esta abordagem utilizasse raízes bem estabelecidas em TI, o cliente inicialmente tinha preocupações com a alocação de tópicos.

No passado, Darren tinha que criar antecipadamente um ecossistema PubSubHub e estar familiarizado com todos os seus componentes. No entanto, configurar fluxos de dados com o Kafka ou o Apache Pulse era desafiador, e configurar a segurança era ainda mais difícil. Utilizando sua experiência em DevSecOps para desenvolver uma solução que agrupa definições de fluxo de dados, definições de entrada e saída e transformações de dados em um pacote consumível pelo pipeline. Esse pacote cria automaticamente fluxos de dados no PubSubHub e configura todas as medidas de segurança necessárias. O resultado simplificou a complexidade, pois os desenvolvedores só precisavam se concentrar em algoritmos ou modelos de IA, enquanto todo o resto era cuidado de forma genérica. A abordagem iterativa com os clientes ajudou a modificar arquiteturas e implementações ao longo do caminho.

O desafio principal com esse tipo de arquitetura é trabalhar com recursos limitados, como ter acesso a apenas dois núcleos e 2 gigabytes de RAM. Quanta capacidade de processamento de dados pode ser alcançada na borda com recursos limitados? Uma das restrições com as quais a equipe de arquitetura precisava trabalhar era tornar o gerenciador de fluxo SABR e as medidas de segurança o mais compacto possível. Darren reduziu o código para o mínimo absoluto e eliminou pacotes desnecessários de terceiros. O objetivo era criar um gerenciador de fluxo leve que pudesse ser executado na borda e ser portátil em diferentes ambientes. A arquitetura resultante Saber era escalável e adaptável, capaz de ser executada desde um smartwatch até um servidor Xeon grande.

Darren e Anna discutem as dificuldades de atualizar os modelos de IA em um ecossistema distribuído com inúmeras instâncias das mesmas análises em execução. Para resolver esse problema, a SABR criou um fluxo de dados de aprendizado que conecta todas as instâncias das mesmas análises e lida com comunicações intermitentes, armazenamento em cache e envio de deltas para atualizar os modelos. Eles também desenvolveram um sistema de canal de dados usando o padrão de design de estratégia de política, permitindo diferentes canais com níveis variados de dados a serem enviados com base em regras definidas pela política. Essa abordagem permite uma transmissão de dados mais eficiente, reduzindo a quantidade de dados processados ​​e aumentando a precisão dos modelos de IA.

A seguir está como operar no ambiente DDIL, priorizando o envio de dados, enviando primeiro resumos e dados históricos antes dos dados em tempo real. É importante definir as expectativas do sistema e as políticas de comunicação antecipadamente para garantir consistência em todo o ecossistema. Um processo de criação e ativação de políticas fácil de usar, configurado com JSON e baseado em JavaScript, que elimina a duplicação de esforços e promove o reuso. A arquitetura possui a capacidade de adicionar rapidamente novas funcionalidades aproveitando os sabers existentes e as transformações de dados.

O último é a resiliência do sistema ao se recuperar dinamicamente de interrupções no sistema. O potencial de uso dinâmico e flexível da rede SABR. Mesmo que um nó apresente uma queda, é possível mover um SABR para outra caixa e ainda receber todas as fontes de dados. Também é possível utilizar computação antiga executando um SABR extremamente leve em um sistema antigo que coleta e transmite dados para a rede SABR. A importância da segurança não deve ser ignorada. Todos os fluxos de dados são criptografados e processos são estabelecidos para estabelecer a confiabilidade e a autenticação dos SABRs, a fim de prevenir a falsificação e a espionagem de dados. No geral, a rede SABR oferece uma solução promissora para processamento de dados na borda com flexibilidade e segurança.

A aprendizagem-chave é a abordagem arquitetônica iterativa que a equipe usou para descobrir os casos de uso e os pontos problemáticos que os usuários finais estavam enfrentando. Ao simular a arquitetura, eles conseguiram encontrar falhas nela e obter feedback do cliente. Além disso, a utilização de padrões de design foi essencial para acelerar a abordagem arquitetônica. O uso de abstração também proporcionou a capacidade de trocar diferentes tecnologias ao longo do processo arquitetônico. Darren acredita que essa abordagem tornou fácil criar soluções que são fáceis de usar e aproveitar o conhecimento atual dos clientes.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
