---
layout: posts
title: "Elastic Search e Intel Optane DCPMM"
number: 17
permalink: episode-EDT17-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 17
tags:

date: Sun Aug 30 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher mostra como ele aumentou o desempenho do Elasticsearch usando a Memória Persistente Optane da Intel no modo 100 por cento de aplicação direta. Seus testes mostram um aumento incrível de desempenho de 2x. Ao duplicar a capacidade de throughput, você pode diminuir significativamente o número de servidores em seu cluster Elasticsearch."
video: "https://youtu.be/R5TUrX4BcD8"
description: "Darren Pulsipher mostra como ele aumentou o desempenho do Elasticsearch usando a Memória Persistente Optane da Intel no modo 100 por cento de aplicação direta. Seus testes mostram um aumento incrível de desempenho de 2x. Ao duplicar a capacidade de throughput, você pode diminuir significativamente o número de servidores em seu cluster Elasticsearch."
---

<div>
{% include transistor.html id="77870513" title="#17 Elastic Search & Intel Optane DCPMM" %}

{% include youtube.html id="R5TUrX4BcD8" %}
</div>

---

Recentemente, realizei alguns testes com a nova tecnologia da Intel chamada Memória Persistente Optane DC (PMEM) com o Kafka. Ao utilizar o Optane de uma maneira não-tradicional, montado como um sistema de arquivos, consegui obter uma melhoria significativa no throughput. Confira meu podcast sobre isso aqui. (você pode colocar um link aqui?) Eu tentei fazer a mesma coisa com o Elasticsearch para ver se conseguiria alcançar uma melhoria de desempenho semelhante.

O Elasticsearch é um mecanismo de busca e análise altamente escalável que permite a distribuição de dados em vários nós para expandir a solução e suportar quantidades substanciais de dados. Em outras palavras, é um gerenciador de metadados distribuído, usado principalmente para análise de logs. O próprio Elastic é uma ótima ferramenta para normalizar dados no formato JSON. Posso enviar qualquer tipo de dado para o Elastic e ele pode se estender por um cluster distribuído. Não é um barramento de mensagens como o Kafka, mas sim indexa os dados que estão sendo recebidos. Como o Elastic armazena esses dados em unidades de armazenamento, percebi que poderia usar o PMEM da mesma forma que fiz com o Kafka.

## Traduza o seguinte para o português: Intel Optane DC Persistent Memory

A Memória Persistente Intel Optane DC está disponível no formato DDR4, portanto, se encaixa perfeitamente no seu servidor em um slot de memória DDR4. Os módulos estão disponíveis em capacidades de 128, 256 e 512 gigabytes, então em um sistema de dois soquetes, posso ter 6 terabytes de PMEM. Uma característica importante é que o hardware é criptografado e vinculado à sua CPU com essa criptografia, portanto, é seguro e altamente confiável. Já está sendo usado para fazer algumas mudanças profundas na forma como é usado em ferramentas em muitos bancos de dados, como na plataforma Exadata da Oracle e no SAP HANA.

## Suporte para uma Ampla Gama de Aplicações

Existem várias maneiras de usar essa tecnologia:

A primeira é o modo de memória, que amplia a capacidade de uma servidor. Ele utiliza o PMEM assim como a memória normal. A memória DDR4 atua como um cache para o PMEM. Neste modo, a velocidade é comparável à DDR4; na maioria das aplicações, você não verá uma mudança.

O segundo modo é o modo de aplicativo direto. No modo de aplicativo direto, posso escrever um aplicativo para que ele escreva diretamente em PMEM, ignorando etapas demoradas.

O terceiro modo utiliza o modo de aplicativo direto para criar um sistema de arquivos de memória não volátil que fica diretamente no barramento de memória, o qual é muitas vezes mais rápido do que o barramento NVMe ou até mesmo o barramento SATA.

Usando esse terceiro modo, tive que aprender um pouco sobre a arquitetura do Elastic para descobrir quais partes eu deveria executar neste sistema de arquivos ultra-rápido e quais deveria deixar onde estão. Também queria saber se poderia fazer essas alterações apenas com o arquivo de configuração.

## Usando o Linux Kernel

Primeiro, tive que aprender a usar os comandos do kernel do Linux para manipular essa PMEM.

Com o comando de controle de memória persistente da Intel (ipmctl), descobri que posso configurar e gerenciar o PMEM para alocá-lo para executar no modo de memória, modo direto de aplicativo ou um percentual no modo de memória.

O outro comando é o controle do dispositivo de memória não volátil (ndctl). Isso me permite criar espaços de nomes e regiões nessa PMEM que criei, para que eu possa montar essa região como um dispositivo. Em seguida, posso montar esse dispositivo como um sistema de arquivos.

## Teste de Desempenho do ESRally

Encontrei o ESRally, uma ferramenta de benchmark, para usar nos meus testes. Na primeira vez que configurei o teste, executei o ESRally a partir do meu disco SATA normal, onde o Elastic estava executando tudo a partir do disco PMEM. Obtive alguma melhoria de desempenho, mas o que descobri foi que, como estava transmitindo dados do disco SATA armazenados no meu ESRally, estava limitado pela velocidade com que podia inserir dados no Elasticsearch. Portanto, não era o Elastic que estava diminuindo a velocidade, era o ESRally porque meu disco SATA era muito mais lento que o meu disco PMEM. Mudei o ESRally para o disco PMEM. Isso melhorou o desempenho e obtive resultados interessantes.

## Testando restrições

Para ver quais seriam os efeitos deste disco PMEM ultra-rápido no Elastic, executei o teste em uma máquina. Isso removeu a variabilidade de rede, o que eliminou gargalos de rede como um fator limitante. Reduzi a comunicação entre serviços, o que diminuiu os gargalos de réplica, e executei todas as consultas em PMEMs, o que eliminou a variabilidade do disco SATA.

## Desempenho Ótimo (100%) App Direto

Primeiro, aloquei toda a PMEM para o modo de acesso direto do aplicativo, para que eu pudesse montar tudo como um sistema de arquivos. Usei DIMMS de 128 gigabytes, então eu tinha um drive com 1,5 terabytes disponíveis. Eu sabia, a partir dos meus testes anteriores com Kafka, que obtenho melhor desempenho com o modo de acesso direto do aplicativo em 100% em comparação com 50%.

Taxa de transferência média (deve ser Throughput - pode ser necessário alterar no slide) docs/seg

Usando as estatísticas do ESRally, obtive a taxa de transferência média de documentos por segundo em comparação ao número de corridas concorrentes que estava executando ao mesmo tempo com produtores e consumidores. Observei números promissores com a unidade de disco SATA, comparáveis a outros testes publicados. Com a unidade de disco PMEM, consegui processar quase o dobro de documentos por segundo. Isso é incrível, considerando que não houve alterações no código, apenas uma mudança de configuração.

## Tempo de Resposta do Serviço

O outro resultado foi o tempo de resposta às funções. Como esperado, à medida que o número de corridas simultâneas aumenta, o tempo de resposta a essas consultas ou funções também aumenta. Mas com o PMEM, o tempo de resposta é quase duas vezes mais rápido. A partir deste teste simples, aprendi que onde você armazena os dados que o Elasticsearch precisa (PMEM ou SATA) afeta o tempo de resposta.

## Conclusão

Usar o Optane Persistent Memory no modo de sistema de arquivos para aumentar o desempenho e reduzir os custos dos servidores Elasticsearch requer mudanças mínimas na configuração de hardware e software e não exige alterações no Elasticsearch ou em aplicativos subjacentes. Dobrar a capacidade de processamento do Elasticsearch significa que você pode diminuir o número total de servidores em seu cluster do Elasticsearch, reduzindo o custo total de propriedade.

## Para mais informações.

Para obter informações mais detalhadas, acesse o link no podcast para o documento que criamos em resposta a esses resultados de teste. Você também pode entrar em contato comigo pelo e-mail darren.w.pulsipher@intel.com ou no LinkedIn @darrenpulsipher.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
