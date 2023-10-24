---
layout: posts
title: "Banco de dados hipercala da próxima geração - Aerospike"
number: 29
permalink: episode-EDT29-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 29
tags:
    - aerospike
    - database
    - ingestion
    - optane
    - data
    - technology
    - pmem

date: Wed Nov 11 2020 19:00:00 GMT-0500 (Eastern Standard Time)
guests:
    - Darren W Pulsipher
    - Tim Faulkes

img: thumbnail.png
image: thumbnail.png
summary: "Bancos de dados estão mostrando sua idade, ainda levando algum tempo para obter resultados. O Aerospike, com a ajuda da tecnologia Intel (Optane), supera com velocidade, volume e baixa latência. Tim Faulkes, Vice-Presidente de Arquitetura de Soluções da Aerospike, se une a Darren Pulsipher, Arquiteto-Chefe de Soluções da Intel, para discutir os benefícios da tecnologia Aerospike."
video: "https://youtu.be/btMNND3AH7Q"
description: "Bancos de dados estão mostrando sua idade, ainda levando algum tempo para obter resultados. O Aerospike, com a ajuda da tecnologia Intel (Optane), supera com velocidade, volume e baixa latência. Tim Faulkes, Vice-Presidente de Arquitetura de Soluções da Aerospike, se une a Darren Pulsipher, Arquiteto-Chefe de Soluções da Intel, para discutir os benefícios da tecnologia Aerospike."
---

<div>
{% include transistor.html id="1280ea95" title="#29 Next-Generation Hyperscale Database - Aerospike" %}

{% include youtube.html id="btMNND3AH7Q" %}
</div>

---

## Próxima Geração de Banco de Dados Hiperescala

Os bancos de dados estão mostrando sua idade, ainda demoram um pouco para obter resultados. O Aerospike, com a ajuda da tecnologia da Intel, rompe com velocidade, volume e baixa latência. Tim Faulkes, Vice-Presidente de Arquitetura de Soluções da Aerospike, junta-se a Darren neste episódio para discutir os benefícios de sua tecnologia.

## NoSQL - Um mercado em crescimento com múltiplas tecnologias

A Aerospike foi criada em 2009, com as primeiras implantações de produção em 2011. Os fundadores estavam cientes dos desafios futuros. Eles construíram a arquitetura do zero com o objetivo de que ela fosse confiável, dimensionável para empresas, jamais sair do ar e capaz de lidar com ingestão maciça de dados. A arquitetura da Aerospike dependia muito de SSDs, tanto de unidades NVMe nas encarnações modernas, quanto de unidades SATA SAS. Ambos estavam em seus estágios iniciais, então os fundadores foram visionários em relação ao futuro do mercado. Eles dependiam desses dispositivos para obter velocidade, e é por isso que a tecnologia Intel era tão importante. Desde então, outras tecnologias da Intel, como a memória persistente, tornaram as coisas muito mais fáceis.

## Índices em DRAM, Dados em SSD

A abordagem da Aerospike para bancos de dados é diferente. Os SSDs não são simplesmente discos rígidos mais rápidos. Um disco rígido possui setores físicos e cabeças e elementos que precisam ser movidos para ler dados. Um SSD pode ler rapidamente milhares de peças de dados em paralelo. Ele não funciona bem em discos rotacionais, mas com NVMe/SSD, funciona extremamente rápido. Ninguém tem o mesmo tipo de desempenho, nem mesmo um banco de dados em memória.

A arquitetura única é projetada para alto volume, alto rendimento e latência muito baixa. Por exemplo, alguns clientes realizam regularmente 20 milhões de transações por segundo. Alguns estão chegando a petabytes de dados. Tipicamente, os clientes executam em hardware bastante bom, mas o tempo de ida e volta é crucial. Leva cerca de 200 microssegundos para o Aerospike pesquisar um dado e trazê-lo de volta para o cliente, não dezenas ou centenas de milissegundos. Quando você precisa de uma grande quantidade de dados rapidamente, como na detecção de fraudes, ou se está ingestando muitos dados, como em IoT, veículos autônomos, leituras de sensores ou dispositivos médicos, o Aerospike pode realizar milhões de transações por segundo em leituras e escritas. Você não precisa colocá-lo em um barramento de mensagens e em seguida, permitir que o banco de dados notifique os sistemas downstream via barramento de mensagens que ele tem os dados. Eles já são persistentes.

## Impulsionando Inovação Líder na Indústria em todo o Mundo

Quais são os casos de uso ideais para o Aerospike? Existem mercados óbvios, como o já mencionado Internet das Coisas (IoT), detecção de fraudes e dados de sensores, mas é um mercado emergente. O Aerospike começou na tecnologia de publicidade, onde a recuperação de dados deve ser feita em milissegundos ou mais rápido. É aí que o bom desempenho foi testado em grande escala.

Indústrias adicionais em que o Aerospike pode ser útil são diversas. Um exemplo é uma grande empresa de telecomunicações na Índia. A infraestrutura lá nem sempre é confiável e, às vezes, as chamadas são perdidas. Essa empresa, com a tecnologia Aerospike, pode identificar em tempo real que uma chamada foi perdida e eles podem entrar em contato imediatamente e oferecer ao cliente créditos ou outras compensações para manter a satisfação do cliente.

## Regulação em Tempo Real de Pagamentos Imediatos.

Uma nova área na qual a Aerospike tem se envolvido intensamente é o pagamento digital em tempo real. Isso não requer especificamente uma grande quantidade de dados ou alta taxa de transferência, mas o que essas empresas precisam é de consistência absoluta e disponibilidade absoluta, mesmo diante, por exemplo, da perda de um centro de dados.

O chão de fábrica também é um mercado emergente para a tecnologia Aerospike em coisas como a fabricação de semicondutores, onde é usada para armazenar dados de sensores para fornecer análises em tempo real. O Aerospike se destaca em qualquer indústria onde haja muitos dados e você precise deles rapidamente.

## Desempenho em Escala - Resultados de Teste de Terceiros Independentes

Existem muitos bancos de dados com boa tecnologia disponíveis, mas há desafios de escala. Tome o Redis, por exemplo. Por armazenar todas as informações na memória, não é possível chegar a dez terabytes sem um custo significativo, quanto mais centenas de terabytes ou petabytes. Já o Aerospike armazena as informações em SSDs, a diferença de tempo entre buscar dados em um SSD e na memória é de cerca de 100 microssegundos. Na escala de petabytes, o Aerospike substitui tecnologias mais antigas, como o Cassandra, que escala muito bem, mas falta velocidade.

## Custo total de propriedade

Além disso, comparado a essas tecnologias, as pessoas economizam muito dinheiro ao adotar o Aerospike, pois o número de nós diminui drasticamente devido à arquitetura única. As economias ocorrem não apenas no investimento inicial, mas também nas despesas operacionais, pois há menos máquinas para supervisionar.

A Aerospike colapsou alguns dos níveis tradicionais na arquitetura. Frequentemente, sistemas legados terão caches extras na frente para acelerá-los. Isso introduz complexidade. Aerospike não precisa de um cache. Não há uma grande quantidade de DRAM. Ele depende da velocidade dos SSDs e da tecnologia subjacente para obter o desempenho do armazenamento bruto sem um cache. Como os níveis de cache e armazenamento estão colapsados, a solução é simplificada, o que significa confiabilidade e velocidade incorporadas.

## Exemplo de Implantação Continental

A consistência em múltiplas áreas geográficas é também um benefício importante da tecnologia. A arquitetura moderna requer baixa latência, o que geralmente significa que existem vários clusters H onde os dados estão próximos ao usuário. Caso contrário, a velocidade da luz se torna um fator. O Aerospike pode fazer com que todos os clusters H se comuniquem entre si, então se um registro é alterado em um cluster, ele será propagado automaticamente para os outros clusters, de forma assíncrona. No entanto, em alguns casos, como pagamentos digitais, deve haver uma forte consistência entre os clusters, então eles podem querer replicar os dados de forma síncrona. Eles preferem ler a partir da cópia local dos dados. As leituras se tornam muito rápidas; as escritas são afetadas pela velocidade da luz, mas garantem a consistência em distâncias geográficas. Portanto, isso não é resolução de conflito, é evitar conflitos. Ser capaz de espalhar essas escritas de forte consistência ao redor do mundo e talvez ter múltiplos sistemas de registros tem um enorme potencial e valor.

## Aerospike Connect para Spark.

Por exemplo, atualmente, o Aerospike se integra ao Spark, uma tecnologia analítica que requer que seus dados estejam em memória. Ao carregar os dados do Aerospike, o quadro de dados do Spark pode processar dezenas ou centenas de terabytes com enormes economias de custo e velocidade. A integração com outras ferramentas de IA é uma das forças motrizes que abrirão algumas portas emocionantes.

Obter dados no Aerospike é simples e direto. Como as aplicações possuem uma camada de API como a maioria dos bancos de dados, o Aerospike pode receber dados de fontes padrão do setor, como Kafka e Janus. A capacidade bidirecional de se comunicar com barramentos de mensagens faz sentido, porque o Aerospike não só pode receber dados dessas fontes, mas também enviá-los. Se o Aerospike é uma fonte confiável quando você grava um registro, você pode enviá-lo para sistemas downstream.

## Aerospike Connect for Kafka: Conexão Aerospike para Kafka

Se você deseja usar o Aerospike para ingestão em vez de um mecanismo de ingestão na frente, o Aerospike pode determinar se quer fragmentar os dados ou mantê-los no mesmo formato e apenas colocá-los no Aerospike; Com sua estrutura de plug-in, é uma chamada de API. Quando os dados são armazenados, um barramento de mensagens pode ser notificado para processamento posterior. Isso elimina uma das etapas de ingestão e aumenta o rendimento total.

Escalar para milhares de clientes é possível devido à forma como o cliente Aerospike é projetado como multithreaded para escalar em um único processo e ingestar uma grande quantidade de dados com isso. O cliente é inteligente para aumentar a velocidade. Qualquer registro vai diretamente do cliente para o nó que possui essa parte de dados. Não há intermediários desse tipo. Isso significa que o cliente deve conhecer todos os nós, portanto, existem limites de conexão finitos, tornando impraticável centenas de milhares de clientes.

## Exemplo de Implementação Continental

Se, no entanto, você tiver centenas de milhares de clientes, é porque você possui uma população distribuída globalmente. Se eles estivessem se comunicando com apenas um grupo, a velocidade da luz se tornaria um grande problema. Existem maneiras de configurar clusters menores baseados nas bordas que compartilham informações ou se comunicam com um sistema de registro em um modelo de hub e falou, então é possível de ser feito.

## Aerospike é um banco de dados para aplicações de sistema de registro.

À medida que os dados se movem pelo mundo, diferentes camadas de privacidade entram em jogo e padrões como GDPR e CCPA, fazendo com que os clientes tenham que conhecer a origem dos dados. O Aerospike tem a flexibilidade de analisar os dados com granularidade e, com base no conteúdo dos dados, saber quando e onde podem ser enviados. Isso faz parte da configuração de envio de dados do Aerospike, que é transparente na aplicação. Você não precisa alterar nada nas aplicações, apenas na configuração.

A Aerospike também garante que os dados estejam seguros. Assim como em todos os bancos de dados de alta capacidade empresarial, o Aerospike suporta criptografia em repouso e em trânsito, e integração de segurança com coisas como o Hashicorp Vault. Ele pode ser, e está sendo usado, como um sistema de registro.

Um objetivo fundamental na Aerospike é usar as últimas inovações e tecnologias para o sucesso dos clientes. Por exemplo, quando a Intel lançou o PMem, eles o usaram no modo direto do aplicativo para aproveitar todas as suas capacidades. Isso significa que, para uma atualização contínua em, digamos, um petabyte de informações, o tempo necessário é pequeno. A Aerospike armazena esse petabyte em cerca de 50 ou 60 nós, em vez de milhares de nós, e quando um nó é desligado, não é necessário reconstruí-lo, portanto, o tempo de reinicialização é muito rápido.

No geral, o Aerospike oferece segurança, alta disponibilidade, velocidade, baixa latência, escalabilidade, consistência e baixo custo de propriedade.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
