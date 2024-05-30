---
layout: posts
title: "A Arte Negra de DevOps"
number: 41
permalink: episode-EDT41-pt
lang: pt
nav_exclude: true
nav_order: 41
tags:
    - devsecops
    - devops
    - automation
    - advancedcommunications
    - multicloud
    - process
    - technology
    - policy

date: Tue Mar 09 2021 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto Chefe de Soluções, Setor Público, Intel, define termos comuns de DevOps e explica onde o DevOps se encaixa em sua organização."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquiteto Chefe de Soluções, Setor Público, Intel, define termos comuns de DevOps e explica onde o DevOps se encaixa em sua organização."
---

<div>
{% include transistor.html id="b4fe3ea1" title="#41 The Black Art of DevOps" %}

{% include youtube.html id="url" %}
</div>

---

Vamos dar uma olhada em como o DevOps se encaixa na sua infraestrutura.

No fundo de uma pilha normal, temos uma camada física que pode significar uma nuvem, centro de dados, dispositivos IOT ou infraestrutura legada.

Além disso, geralmente há uma infraestrutura definida por software que abstrai a complexidade de gerenciar as peças individuais de hardware.

A seguir está uma camada de gerenciamento de serviços, que inclui a virtualização do ecossistema de contêineres, bem como uma camada de gerenciamento de informações distribuídas, que inclui a infraestrutura de dados, lagos de dados e tudo o que gerencia seus dados.

Em seguida vem a camada de aplicação. Os desenvolvedores de aplicativo utilizam os serviços dentro das camadas de aplicação. Logo na interface entre a camada de aplicação e o plano de gerenciamento de dados e gerenciamento de serviços estão as ferramentas SecDevOps ou DevOps. Essas ferramentas incluem aspectos de segurança e identidade que proporcionam uma forma segura de integrar e implantar continuamente seus produtos.

## Camada de Aplicação / Carga de Trabalho

No topo da camada de aplicação e carga de trabalho que alimenta o SecDevOps, existem três tipos de carga de trabalho: cargas de trabalho dependentes de eventos, cargas de trabalho procedurais e uma combinação dos dois, que são cargas de trabalho guiadas por GUI ou UI.

Um exemplo simples de carga de trabalho orientada a eventos seria quando um pedido de compra chega ao seu sistema, causando outras ações. Pode haver etapas sequenciais ou paralelas, interação com seres humanos, automação e interação com diversas aplicações ou subsistemas dentro da empresa.

Muitas ferramentas de automação de carga de trabalho estão disponíveis. Algumas são scriptadas e outras usam automação de processos robóticos, que são mais orientadas por GUI (Interface Gráfica do Usuário) e IU (Interface do Usuário). Essas ferramentas trabalham na automatização dos serviços subjacentes, então as cargas de trabalho direcionam a interação do serviço.

Os serviços tradicionalmente se enquadram em três principais categorias: aplicações, como produtos prontos para uso como o Word ou um aplicativo SAP; serviços complexos, que são projetados para um propósito específico, como uma pilha MEAN com Mongo; e serviços simples, que executam apenas uma função, como o MongoDB, que armazena o banco de dados.

Há uma nova categoria devido ao crescimento de IA e ML. Muitos serviços não fazem muito sem um modelo associado, então adicionamos modelos de IA à camada de serviço, que tratamos da mesma forma que um serviço simples.

## Dia do Desenvolvedor na Vida

Depois de compreendermos as cargas de trabalho e os serviços, podemos analisar o que um desenvolvedor normalmente faz.

Um desenvolvedor escreverá algum código em sua estação de trabalho e executará alguns testes de funcionalidade. Em seguida, ele verificará o código no GitHub, por exemplo, e um pipeline de integração contínua e entrega contínua (CICD) será iniciado. Ele executa verificações de segurança no código, talvez lintagem, análise estática e análise dinâmica.

Uma vez que passa por esses testes, geralmente é verificado em um ramo de integração onde outras pessoas da equipe de desenvolvimento pegam os dados, os desenvolvem e integram seu código com o código do desenvolvedor. Em seguida, quando passa pelos testes deles, é enviado para uma etapa de teste. Uma vez concluída essa etapa, será colocado em produção.

Este é um pipeline de CICD típico, que existe há décadas. Ao longo dos anos, as diferentes formas de descrever pipelines foram consolidadas e padronizadas, limitando complexidades e erros.

## Pilha DevSecOps

O pipeline é apenas um elemento de um conjunto SecDevOps.

Outros elementos necessários incluem um registro e um repositório. Pense neles como repositórios versionados para armazenar artefatos gerados durante o pipeline de CI/CD, de modo que eles estejam facilmente disponíveis para serem usados repetidamente.

Outro elemento importante é um framework de automação. Isso ajuda a aliviar o trabalho humano de executar tarefas como verificações de segurança ou promover compilações de uma etapa para outra. As ferramentas de automação são maduras e treinamento está disponível, então um bom framework de automação deve ser fundamental.

Embora a gestão do ambiente geralmente evolua organicamente ao longo do tempo, faz sentido gerenciar e projetar os ambientes adequadamente para obter mais confiabilidade e repetibilidade.

Um elemento fundamental por trás de tudo isso é um perfil de segurança. Você deve ter a capacidade de definir perfis de segurança, para que possam ser usados em vários ambientes e em várias pilhas de aplicativos.

## Registos / Repositórios

Normalmente existem pelo menos dois tipos diferentes de repositórios. O primeiro é um repositório de estágio, onde você pode gerar imagens (um conjunto de todo o código necessário para criar um contêiner, por exemplo) e armazenar coisas como chaves de identidade e segredos. Este repositório contém tudo o que você precisa para mover as coisas para produção. Algumas organizações podem ter vários repositórios de estágio, conforme diferentes elementos passam por diferentes estágios de maturidade até chegarem ao repositório de produção. Você deseja poder voltar a versões anteriores, se necessário.

Na produção, ou repositório dourado, as imagens são bloqueadas, notarizadas e criptografadas. Apenas coisas no repositório dourado são movidas para produção.

## Etapas

A melhor forma de pensar nas etapas do pipeline CICD é que cada etapa funciona em um único ambiente. Por exemplo, em uma etapa de construção, há um ambiente de construção isolado com políticas. Somente quando todas as etapas dessa etapa forem concluídas, as coisas podem avançar para a próxima etapa. Isso evita o consumo excessivo de recursos com construções paralelas e execuções que podem acabar falhando. Ao mesmo tempo, é melhor não ter tantas etapas que atrapalhem o progresso, portanto um plano cuidadoso e definido é importante.

## Passos

Dentro das etapas estão os passos onde o trabalho realmente é realizado. Ao criar e testar software, os passos podem ser executados em paralelo ou sequencialmente; existem muitas ferramentas que permitem definir essas operações. Embora algumas tenham uma interface gráfica para isso, a maioria dos desenvolvedores prefere um formato textual, pois isso permite o controle de versão do fluxo de trabalho e dos passos, permitindo verificações de segurança no fluxo de trabalho.

## O seguinte é traduzido para o português: Pipeline

Com etapas e etapas definidas, você tem um pipeline real. Em vez de definir um pipeline para todas as suas aplicações, o que normalmente falha porque se torna excessivamente complexo com muitas condições ou muito restritivo, eu recomendo usar pipelines de modelo e modificá-los conforme necessário, garantindo que eles estejam em conformidade com padrões e regulamentações. Estabelecer um pipeline adequado no início de um projeto é importante, assim como a flexibilidade à medida que o projeto avança.

## Ambientes.

Em vez de criar ambientes improvisados, é melhor criá-los com intenção desde o início. O DevOps ou SecDevOps pode injetar políticas de segurança e conformidade em todos os projetos diferentes, garantindo assim a segurança.

## Service Stack: Pilha de Serviços

Vamos analisar como os desenvolvedores trabalham, o que está nos serviços hoje em dia. Mesmo que os desenvolvedores estejam trabalhando em uma aplicação monolítica, eles tendem a agrupar seu trabalho em unidades funcionais, como bancos de dados, nós de lógica de negócios ou camadas de transporte. Por exemplo, usando um serviço simples como o MongoDB. Quando um desenvolvedor executa esse contêiner em seu laptop, ele fornece a funcionalidade esperada para armazenar dados de forma não SQL em um documento. No laptop, pode ser o único contêiner em execução.

Em um ambiente de teste ou desenvolvimento, pode haver várias instâncias desse serviço em execução, e o desenvolvedor pode implantar um cluster de serviços MongoDB e conectá-los para teste. O serviço ainda é um serviço do Mongo DB, mas seu comportamento muda com base no ambiente em que está. O objetivo dos desenvolvedores é escrever código e verificá-lo no serviço MongoDB de seus laptops para garantir que ele será executado corretamente na produção.

Um serviço simples como o MongoDB é necessário, mas por si só, não é muito útil. Serviços complexos como pilhas LAMP ou pilhas MEAN são mais importantes. Estes são vários serviços que funcionam juntos, atuando basicamente como um único serviço. Ao serem agrupados, isso implanta um serviço complexo em um laptop e existem dois ou três contêineres de serviço simples em execução, fornecendo aos desenvolvedores a funcionalidade necessária para fazer o check-in de seu código.

Depois que o código é verificado, ele se inicia no pipeline de desenvolvimento, onde o desenvolvedor está integrando com outras pessoas. O mesmo serviço complexo pode adotar uma maneira completamente diferente de fazer as coisas. Muitas políticas de segurança podem ser atribuídas a esse serviço complexo para ajudar a garantir que seja seguro, confiável e resiliente.

## Definições de Serviço/Aplicação

É importante entender os conceitos de serviços simples e complexos porque os desenvolvedores de software precisam definir como fazê-los funcionar. Existem algumas definições. Uma delas é chamada de definição de imagem. Elas são frequentemente no mundo do container, chamadas de imagens Docker. O arquivo Docker define o que há nessa imagem. Isso é considerado um contêiner simples por si só, embora as pessoas estejam começando a usar contêineres para coisas complexas.

Dentro das definições de serviço, podemos incluir várias definições de imagem, como por exemplo, Docker Compose, Kubernetes Operators, Helm Charts, Terraform e até mesmo CNAB. Essas são ferramentas que permitem definir um serviço. Um serviço é mais do que apenas o contêiner; é o ambiente no qual o contêiner está sendo executado. Pode incluir definições de rede, conectividade de volume ou até mesmo políticas de implantação. Uma "definição de serviço" completa possui definições de imagem, configuração e provisionamento.

## Colocando tudo junto

Quando um desenvolvedor está criando um novo serviço, ele não apenas está desenvolvendo o código para a imagem; ele também está definindo o ambiente, ou configuração, no qual ele precisa ser executado. É aqui que o ambiente e a definição do serviço se encontram. Na execução, ele produzirá o ambiente necessário para que o contêiner seja executado de forma eficiente e repetível, para que você possa mover facilmente o código de execução em uma área de trabalho para execução em produção completa o mais rápido possível.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
