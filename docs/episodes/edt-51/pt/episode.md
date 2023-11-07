---
layout: posts
title: "Casos práticos de uso da Memória Persistente Optane"
number: 51
permalink: episode-EDT51-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 51
tags:
    - dataarchitecture
    - memverge
    - pmem
    - optane
    - technology
    - data

date: Wed Jun 02 2021 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Arquiteto Chefe de Soluções da Intel, conversa com Charles Fan, CEO da MemVerge, sobre casos de uso com seu software que utiliza a memória persistente Intel Optane de forma inovadora, removendo o gargalo entre memória e armazenamento."
video: "https://youtu.be/nTy8yXORkOw"
description: "Darren Pulsipher, Arquiteto Chefe de Soluções da Intel, conversa com Charles Fan, CEO da MemVerge, sobre casos de uso com seu software que utiliza a memória persistente Intel Optane de forma inovadora, removendo o gargalo entre memória e armazenamento."
---

<div>
{% include transistor.html id="442f5ddb" title="#51 Practical Optane Persistent Memory Use Cases" %}

{% include youtube.html id="nTy8yXORkOw" %}
</div>

---

A MemVerge enviou a primeira versão de seu software em setembro de 2020 e, apesar da pandemia, que dificultou a educação dos clientes sobre a nova tecnologia, estabeleceu-se um bom padrão de casos de uso.

## Redução de custos dos provedores de serviços em nuvem

A métrica chave para um operador de serviço em nuvem é quantas VMs eles podem entregar aos seus clientes e a que custo. O tamanho da memória nos servidores se torna o gargalo de quantas VMs eles podem alocar por servidor, limitando o quão baixo o preço por VM pode ser.

O software MemVerge com Optane proporciona uma maior quantidade de memória por servidor, alocando um maior número de máquinas virtuais (VMs), reduzindo assim o custo por VM e aumentando a competitividade dos provedores de serviços em nuvem. O custo por VM pode ser três vezes mais barato.

## Confiabilidade com Bases de Dados de Grande Capacidade de Memória

Clientes financeiros como bolsas de valores, bancos e fundos mútuos utilizam muitos bancos de dados em memória e aplicativos em memória. Além de aumentar o tamanho da memória para poder ter mais instâncias por servidor, a MemVerge resolve os desafios de disponibilidade dos bancos de dados em memória. Se os dados não estiverem sendo persistidos no armazenamento o tempo todo, mas apenas permanecerem na memória, todos os dados intra dia são perdidos em caso de falha. Isso é catastrófico. Mesmo que você tenha registrado todas as transações, é necessário reproduzir o log para recuperar o banco de dados, o que leva muitos minutos ou até horas para se recuperar.

MemVerge oferece um novo serviço de dados que tem snapshot em memória. Ele persiste o estado do banco de dados para a Optane, que é muito mais rápido do que persistir em armazenamento. Se ocorrer um crash, você tem o último snapshot capturado na memória persistente e pode se recuperar a partir dele. A recuperação leva apenas um minuto ou dois, então é uma melhoria de 60 a 100 vezes.

## Redução do Sequenciamento Genômico Através do Instantâneo de Memória

Na área da genômica, o software MemVerge em combinação com Optane aumenta a produtividade exponencialmente. Em um fluxo de trabalho de análise de dados em várias etapas, uma memória maior significa mais paralelismo do pipeline e processamento, tornando todo o processo mais rápido. O snapshot é útil aqui também. Se uma organização está realizando, por exemplo, pesquisa sobre câncer ou COVID e precisa fazer sequências de DNA ou RNA, eles precisam passar por cerca de 50 etapas de processamento. Cada etapa pode levar horas e eles precisam fazer um checkpoint do estado dos resultados de computação intermediária por alguns motivos: primeiro, para refazer ou reproduzir os resultados e segundo, para comparar os resultados se modificarem alguns dados. Os checkpoints são salvos no armazenamento e isso leva de cinco a 30 minutos. Em muitos casos, isso pode levar mais tempo do que o próprio cálculo. Portanto, se um trabalho leva 24 horas, eles podem usar oito horas para o cálculo e 16 horas apenas para executar esses trabalhos de E/S, salvando esses estados intermediários.

Em vez de fazer IO, o MemVerge usa um instantâneo após cada estágio e captura-o na memória persistente Optane. Em vez de 16 horas de IO, esse processo pode levar um minuto. É a nova forma de fazer IO; você não precisa fazer a serialização ou deserialização para abrir um arquivo, ler, escrever, etc. Tudo que você precisa fazer é tirar um instantâneo.

Embora isso demande muita memória, com o MemVerge, a memória é maior do que antes e continuará a melhorar à medida que a Intel inova. Duas outras características ajudam nessa questão. Primeiro, instantâneos são tirados periodicamente sem criar cópias completas do estado da memória; eles são apenas as páginas de mudança, reduzindo assim o uso extra de memória. Segundo, o MemVerge pode manter até 256 camadas de instantâneos na memória, mas ao mesmo tempo, você pode exportar esses instantâneos para servidores de armazenamento ou seus próprios sistemas de armazenamento. Isso é feito sem interromper ou afetar a aplicação em execução.

Basicamente, você está criando um DVR de memória porque, em vez de apenas executar o seu aplicativo para frente, você também pode executá-lo para trás instantaneamente. É uma nova experiência.

Genômica é apenas o primeiro exemplo de muitas cargas de trabalho que poderiam se beneficiar dessa tecnologia.

Como a MemVerge é uma startup, eles estão focando estreitamente em três áreas de provedores de serviços em nuvem, aplicativos financeiros com grande capacidade de memória, genômica e trabalhos de pipeline de ciência de dados relacionados, mas todos esses casos de uso comprovam o poder da combinação de memória persistente Optane e software da MemVerge.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
