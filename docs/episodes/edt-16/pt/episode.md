---
layout: posts
title: "Reduzindo a congestão de ingestão com o Intel Optane DCPMM"
number: 16
permalink: episode-EDT16-pt
has_children: false
lang: pt
nav_exclude: true
parent: Episodi
grand_parent: Português
nav_order: 16
tags:

date: Mon Aug 24 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Neste episódio, Darren fala sobre diminuir a congestão de ingestão usando a Memória Persistente Optane DC da Intel e o experimento que ele conduziu com resultados surpreendentes. Isso pode mudar a maneira como pensamos sobre programação no futuro."
video: "https://youtu.be/url"
description: "Neste episódio, Darren fala sobre diminuir a congestão de ingestão usando a Memória Persistente Optane DC da Intel e o experimento que ele conduziu com resultados surpreendentes. Isso pode mudar a maneira como pensamos sobre programação no futuro."
---

<div>
{% include transistor.html id="7ca179aa" title="#16 Decreasing Ingestion Congestion with Intel Optane DCPMM" %}

{% include youtube.html id="url" %}
</div>

---

## Detalhes da Pilha de Serviços.

Um cliente na indústria automotiva estava tendo dificuldades para obter efetivamente informações de seus carros e transferi-las para seu centro de dados, a fim de realizar aprendizado de máquina e análises. Houve pesquisas nessa área, mas apenas para um pequeno número de carros, não para os cem milhões de carros do cliente. Quando examinei toda a pilha de serviços deles e como tudo estava sendo transferido para o centro de dados, a ingestão de dados tornou-se o problema claro: Como faço para absorver tantos dados e como faço isso rapidamente?

## Visão geral da arquitetura de alto nível do Kafka.

O cliente queria usar o Kafka para sua ingestão. O Kafka é um corretor que pode ser dimensionado facilmente e a chave é que ele pode lidar com diversos produtores, consumidores diferentes e muitos dados. Utilizar vários corretores do Kafka para colocar e receber dados nos lugares mais apropriados oferece grande flexibilidade.

Kafka, no entanto, foi projetado principalmente para tamanhos de mensagem de cerca de um a 10 quilobytes e os dados do cliente eram aproximadamente 240 quilobytes por carro. Existem soluções alternativas, mas eu queria trazer a mensagem completa de 240 quilobytes para o barramento do Kafka para que pudesse movê-la conforme necessário.

## Práticas recomendadas de desempenho.

Eu examinei as melhores práticas de desempenho de outras pessoas que trabalham com Kafka para ver se eu poderia dimensioná-lo para o meu cliente. Aumentar o tamanho do buffer para acomodar a mensagem inteira é uma solução de ajuste fino, juntamente com o gerenciamento do tamanho do lote para um desempenho ideal. Outra prática bem-sucedida é espalhar os logs. A flexibilidade do Kafka me permitiria colocar os dados em tópicos diferentes. Eu posso dividir os tópicos em várias partições que eu posso distribuir em várias unidades. A pergunta é, então, em quantas unidades estou distribuindo os logs do Kafka? Além disso, eu quero as unidades mais rápidas possíveis.

Um exemplo que examinei foi o LinkedIn. Os números publicados por eles há um ano atrás são de que eles podem lidar com 13 milhões de mensagens por segundo, ou 2,7 gigabytes por segundo. Eles afirmam ter cerca de 1.100 corretores Kafka e mais de 60 em um cluster, então essa é uma configuração bastante grande.

## Espaço Automotivo

Se eu observar os números brutos do cliente (1,6 milhão de mensagens por segundo e 800 gigabytes por segundo) e compará-los com o LinkedIn, que provavelmente não está otimizado para 240 kilobytes, chego a 44.000 corretores. Se eu otimizá-lo, provavelmente poderia chegar a 4.400 corretores, o que ainda seriam 240 clusters. Essa é uma quantidade enorme de máquinas, então eu tive que encontrar uma forma de tornar as coisas mais rápidas. Com mais otimização, provavelmente poderia reduzir para 400 ou 500 corretores, mas eu queria ver o que mais eu poderia fazer.

## Intel Optane DC Persistent Memory

Memória Persistente Intel Optane DC

Eu olhei para nossa Memória Persistente Optane. Ela se encaixa em um formato DDR4, então ela fica diretamente no barramento DDR4. Ela suporta módulos de até 512 gigabytes, então em um servidor de dois soquetes, posso ter seis terabytes de memória persistente. Eu queria encontrar uma maneira de aproveitar essa tecnologia altamente confiável com ótimos recursos, como criptografia de hardware incorporada, para me ajudar a resolver esse problema.

## Suporte para uma ampla variedade de aplicações.

Existem dois modos de operação com este Optane Memory: modo de aplicativo direto e modo de memória. O modo de memória é simples. Ele utiliza a memória persistente como RAM normal, pois é mais barato que o DDR4 normal. Não é o mesmo que DDR4, mas é próximo o suficiente para que na maioria das aplicações, você não consiga perceber a diferença. No modo de aplicativo direto, você pode realmente escrever do seu programa diretamente na memória persistente. Dessa forma, eu não preciso manipular e descomprimir estruturas de dados e transmiti-las; eu posso simplesmente inseri-las na memória persistente. Eu também posso montar o modo de aplicativo direto como um sistema de arquivos, para que ele esteja no barramento de memória, que é muito mais rápido do que no barramento de I/O. Agora, o que posso fazer com essa memória?

## Usando o Kernel do Linux

Existem duas ferramentas principais disponíveis usando o kernel Linux: ndctl e ipmctl. Ndctl é um controlador de dispositivo de memória não volátil e depois temos o IPM, o controlador de Memória Persistente Intel, que me permite manipular e controlar essa memória persistente. Posso configurá-la no modo de memória ou no modo direto do aplicativo. Eu precisei aprender um pouco sobre essas ferramentas e como elas funcionam.

## Abordagem de Ingestão

Minha primeira ideia foi que se eu fornecesse a Kafka uma quantidade maior de memória com tamanhos de buffer grandes, ela deveria rodar muito mais rápido. Mudanças no código da configuração seriam desnecessárias ou mínimas. Outra opção seria mudar Kafka para escrever na memória persistente, em vez de escrever em um sistema de arquivos, contornando o disco rígido. A última coisa que eu analisei foi criar um sistema de arquivos persistente usando memória persistente e em seguida colocar os registros do Kafka nesse novo sistema de arquivos.

A opção mais fácil das três foi a primeira - mais memória. Eu executei todas as minhas tarefas com mais memória e não houve mudança de desempenho. Os motivos são porque eventualmente meus buffers ficaram cheios e eu tive que escrever para um disco. No final, tudo teve que ir para os registros do Kafka, que foi o gargalo.

A segunda opção envolve reescrever o código e esperar por aprovações, então pulei para a terceira opção. Os resultados desse experimento, onde apontei os registros para esse novo sistema de arquivos ultra-rápido, foram fascinantes. Vamos dar uma olhada no processo e nos resultados.

## Testando restrições

Para remover obstáculos aos testes de desempenho, eu eliminei a rede da equação ao executar meu teste na mesma máquina em que meu corretor estava. Além disso, eu executei apenas os produtores e depois apenas os consumidores, e só então misturei os dois, para que eu pudesse avaliar as diferenças. Meu objetivo não era observar uma melhoria total na produção, mas sim em um corretor individual para ver se esse recurso realmente faria diferença.

## Primeira abordagem 50/50

A primeira coisa que fiz foi colocar metade da minha memória persistente no modo direto do aplicativo e transformá-la em um sistema de arquivos. Deixei a outra metade como memória. Usei os comandos ndctl e ipmctl e criei namespaces. Monteis esses sistemas de arquivos e executei meu teste.

## Alterando o Tamanho da Mensagem

Executi os testes com diferentes tamanhos de mensagens. Eu estava esperando por certa otimização, principalmente para 1 kilobyte. Percebi que obtive um desempenho cada vez melhor até mais ou menos 10 produtores. Após 10 produtores, comecei a saturar o barramento e obter alguma variabilidade. Isso me mostra que eu estava fazendo cache das coisas. Agora, posso comparar esses números com o que executei antes em apenas um disco SATA para os registros do Kafka. Também testei nossas unidades Optane NVMe para os registros.

## Comparação de Tecnologia

Vamos dar uma olhada nas diferenças. Para 240 quilobytes, com um disco SATA normal, é bastante uniforme. Observei alguma melhoria e, depois, diminuiu à medida que o número de produtores aumentava. Com o disco Optane NVMe, obtive um pico agradável, quase duas vezes mais rápido que um disco SATA, o que eu esperava, já que se trata de um barramento NVMe em vez de um barramento SATA. O Pmem é quase cinco vezes mais rápido que um disco SATA e duas vezes e meia mais rápido que o disco Optane NVMe. Isso ocorre porque estou usando um barramento de memória em vez do barramento SATA ou NVMe.

## Otimização adicional (100% direto do aplicativo).

Isso estava rodando rápido e eu estava rapidamente preenchendo essa unidade temporária de 750 GB. Como eu precisava rodar o teste um pouco mais, voltei atrás e reconfigurei minha máquina para funcionar em um modo de aplicativo 100% direto, para que agora eu possa usar o total de 1,5 terabytes.

## PMEM otimizado e 100% App Direct

Depois de fazer isso e executar os mesmos testes, obtive um resultado surpreendente. Eu poderia adicionar mais produtores e minha taxa de transferência aumentou quase duas ou três vezes mais. Agora está entre 12 e 15 vezes mais rápido do que uma unidade SATA com 25-30 produtores e tamanho de mensagem de 240 kilobytes. Isso é incrível e reduziria muito a necessidade de tantos corretores, linhas e linhas de máquinas dos meus clientes. Executei o teste várias vezes porque não acreditava nos resultados que estava obtendo. Liguei para um dos nossos arquitetos que projetaram essa tecnologia e descobri que uma das razões para o aumento da velocidade foi quando eu estava usando parte da memória persistente como memória; os dados teriam que passar por dois ou três saltos que não são necessários com o modo de acesso direto ao aplicativo. Isso cria menos contenção no barramento de memória e a taxa de transferência aumenta drasticamente.

## Chamada para ação

O resultado final é que consegui usar Kafka com Memória Persistente Optane DC como um sistema de arquivos ultrarrápido para obter melhorias significativas no throughput tanto para produtores quanto para consumidores. Um único corretor pode lidar com 15 vezes mais mensagens e throughput do que antes, diminuindo o número de servidores necessários para lidar com arquiteturas de sistemas grandes e complexas. É hora de avaliar sua arquitetura atual e ver se isso seria benéfico para sua organização.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
