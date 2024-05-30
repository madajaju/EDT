---
layout: posts
title: "O Nascimento das Plataformas de Inteligência de Gráficos"
number: 106
permalink: episode-EDT106-pt
lang: pt
nav_exclude: true
nav_order: 106
tags:
    - datagovernance

date: Mon Sep 19 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Greg Steck

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Arquiteto Chefe de Soluções do Setor Público da Intel, e Greg Steck, Diretor Sênior de Soluções Setoriais da Katana Graph, falam sobre os benefícios da plataforma de inteligência de gráficos da Katana."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquiteto Chefe de Soluções do Setor Público da Intel, e Greg Steck, Diretor Sênior de Soluções Setoriais da Katana Graph, falam sobre os benefícios da plataforma de inteligência de gráficos da Katana."
---

<div>
{% include transistor.html id="5fdeafa4" title="#106 The Birth of Graph Intelligence Platforms" %}

{% include youtube.html id="url" %}
</div>

---

Greg começou sua carreira em um banco de investimentos no gerenciamento de risco de crédito quando eles começaram a implementar testes de estresse CCAR. Depois de se envolver intensamente nesse trabalho por algum tempo, ele começou a trabalhar como consultor e foi apresentado aos gráficos durante a validação de modelos de risco de crédito. Ele percebeu como os gráficos podem ser utilizados em diversas análises e apresentam benefícios na gestão de dados e aprendizado de máquina, especialmente na modelagem de crédito. A partir daí, ele encontrou o seu caminho para a Katana.

Tradutores de dados e cientistas de dados estão constantemente lutando para integrar conjuntos de dados diferentes. Greg foi atraído para os gráficos porque, depois de ter sido introduzido ao RDF, um formato de grafo de conhecimento semântico, ele entendeu intuitivamente como os dados poderiam ser combinados e estruturados como um grafo.

Com soluções gráficas existentes, os analistas tinham dificuldade em dimensionar suas soluções porque grande parte dos seus dados era muito grande. O Katana Graph desenvolveu a capacidade de dimensionar e também de focar em aprendizado de máquina.

No início dos bancos de dados de gráficos, grandes empresas como Amazon e Facebook construíram bancos de dados de gráficos internamente, fazendo seu próprio modelo e aprendizado de máquina. Depois surgiram versões para consumidores de plataformas como Neo4j e TigerGraph para casos de uso gerais. O desafio era que elas eram centradas no banco de dados e não tanto na análise e no aprendizado de máquina, nos processos e na computação de gráficos reais. Elas estavam limitadas a serem uma espécie de armazenamento de dados, focando na ingestão e nas operações CRUD e não tanto nos dados.

Existem três tipos diferentes de domínios de computação de gráficos. O primeiro é a consulta de gráficos, o banco de dados de gráficos e as operações CRUD. O segundo é a análise de gráficos e a mineração com PageRank, ou algoritmos de clusterização, que estão se tornando populares. A terceira área é a inteligência artificial e aprendizado de máquina em gráficos. É nessa área que as redes neurais de gráficos entram em cena. Existem soluções pontuais que resolverão partes específicas desses domínios, mas o Katana Graph está no ponto de interseção deles.

Cada uma das três plataformas é importante. Para fazer aprendizado de máquina, você precisa dos outros dois domínios. Quando os dados são primeiramente inseridos, eles devem passar por várias transformações para serem preparados para o aprendizado de máquina, então se você não tiver tudo isso em uma única solução, o pipeline ficará lento, enviando os dados para fora e de volta. É mais eficiente iterar rapidamente em todo o pipeline. Isso também reduz o risco de perder dados, pois você está diminuindo o número de vezes que transforma os dados.

Além disso, uma vez que o Katana Graph é uma plataforma nativa da nuvem, você pode pausar, salvar um ponto de verificação, desligar o cluster e ligá-lo novamente mais tarde, exatamente onde parou.

Uma boa demonstração é para detecção de fraudes com um conjunto de dados de transações de Bitcoin. A plataforma ingere os dados, que são estruturados, então as carteiras de Bitcoin são os nós no gráfico, e as arestas entre elas são as transações. É um gráfico simples. A ideia é prever se uma carteira de Bitcoin é fraudulenta. As carteiras ilícitas para lavagem de dinheiro, tráfico de drogas, etc., foram rotuladas. Quando uma nova conta surge, a tarefa é prever se ela é fraudulenta. A parte desafiadora, então, é realizar algum pré-processamento com as características numéricas das contas. Um conjunto de APIs foi projetado para abordar esse problema. Todas as coisas que os cientistas de dados fazem para preparar suas características são feitas aqui. A partir daí, o gráfico está pronto para ser inserido no modelo de aprendizado de máquina, onde é treinado e, em seguida, usando redes neurais, você pode aprender como classificar as contas.

Um benefício da plataforma é que cientistas de dados e engenheiros podem trabalhar a partir de uma única plataforma, em vez de juntar as coisas.

Outro benefício é o custo total de propriedade. Ao contrário de outras plataformas, você não precisa manter o banco de dados de gráficos inteiro em funcionamento o tempo todo. Como os pipelines do Katana Graph são projetados com uma separação de armazenamento e computação, você pode facilmente iniciar um cluster, fazer algum processamento em lote antecipadamente e depois executar a inferência em um sistema separado e ainda aproveitar o que foi gerado no gráfico.

O Katana Graph também é mais rápido com grandes conjuntos de dados porque não carrega todos os dados de uma só vez, mas possui uma maneira inovadora e dinâmica de carregar os dados conforme você precisa, enquanto trabalha através da sequência de processamento.

As análises básicas são muito mais fáceis em um banco de dados gráfico do que em um banco de dados relacional. Se você tiver dez conjuntos de dados diferentes, pode ser complicado e propenso a erros para um analista descobrir como juntá-los para escrever uma consulta em um banco de dados relacional. Com um gráfico, você tem um modelo singular, já predefinido e construído, então as perguntas serão muito mais fáceis porque os dados já estão conectados. Você pode ver intuitivamente como as informações estão relacionadas.

Uma das novas funcionalidades da Katana é um importador de estrutura de dados Dash. Dash é um framework comum que cientistas de dados utilizam para processamento paralelo de estruturas de dados. Os cientistas de dados podem trabalhar com a estrutura de dados que já estão utilizando e importá-la diretamente para o Katana Graph, proporcionando uma experiência fluida e simplificada.

DevOps é uma grande parte do que Katana está tentando facilitar com sua plataforma. Eles se integram facilmente aos pipelines de aprendizado existentes. Quando as redes neurais gráficas são executadas, os embeddings podem ser exportados. Essas características que um grafo gera podem ir para jusante de um processo de aprendizado de máquina. Assim, a integração se torna muito mais simples e fácil de operacionalizar e colocar em produção.

Nos próximos cinco anos, Greg prevê que organizações como bancos terão repositórios centralizados para analisar dados de clientes, marketing ou crédito para múltiplos propósitos. A saída dos modelos de aprendizado de máquina poderá ser usada tanto para risco de crédito quanto para detecção de fraudes, por exemplo. Em vez de utilizar conjuntos de dados isolados com muita replicação e duplicação entre eles, haverá um modelo comum sincronizado dentro de um gráfico.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
