---
layout: posts
title: "Soluções de Dados Multi Nuvem com Hammerspace"
number: 26
permalink: episode-EDT26-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 26
tags:
    - hammerspace
    - data
    - technology
    - dataarchitecture
    - multicloud
    - compute
    - multihybridcloud
    - datamesh

date: Wed Oct 21 2020 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Johan Ballin

img: thumbnail.png
image: thumbnail.png
summary: "Johan Ballin, Diretor de Marketing Técnico da Hammerspace, e Darren Pulsipher, Arquiteto Principal de Soluções, Setor Público, da Intel, discutem a tecnologia de nuvem híbrida da Hammerspace que desvincula os dados da infraestrutura de armazenamento, proporcionando portabilidade e desempenho dos dados."
video: "https://youtu.be/9bLpCtVq9CM"
description: "Johan Ballin, Diretor de Marketing Técnico da Hammerspace, e Darren Pulsipher, Arquiteto Principal de Soluções, Setor Público, da Intel, discutem a tecnologia de nuvem híbrida da Hammerspace que desvincula os dados da infraestrutura de armazenamento, proporcionando portabilidade e desempenho dos dados."
---

<div>
{% include transistor.html id="301a5c10" title="#26 Multi Cloud Data Solutions with Hammerspace" %}

{% include youtube.html id="9bLpCtVq9CM" %}
</div>

---

Armazenamento está maduro para a interrupção. Atualmente, a gestão de dados é feita de maneira complicada, procedimental e muitas vezes manual e propensa a erros. A Hammerspace foi fundada para resolver esse problema, abstraindo dados da infraestrutura de armazenamento.

## Imagine por um segundo....

…se seus dados fossem desvinculados da infraestrutura de armazenamento. Livres das limitações impostas pelos sistemas de armazenamento atuais, os usuários poderiam gerenciar e proteger seus próprios dados, alterar o perfil de custo instantaneamente e acessar dados de qualquer lugar na infraestrutura. O armazenamento definido por software poderia expandir o desempenho conforme necessário e implantar cargas de trabalho modernas, como o Kubernetes, em qualquer infraestrutura subjacente em qualquer lugar.

## O Desafio

As aplicações tornaram-se portáteis, mas os dados ainda estão isolados. O desafio é que o desempenho, a confiabilidade e a gerenciabilidade sofrem em larga escala devido ao problema de isolamento. A solução é liberar os dados das limitações da infraestrutura subjacente. O Hammerspace faz isso por meio da dissociação de metadados, assimilando as partes constituintes menores para tornar os dados portáteis.

## Desvincule os Dados do Armazenamento

Com esta tecnologia, seus aplicativos possuem dados sob demanda onde quer que você esteja. Você tem controle independente, planos de dados e um namespace e sistema de arquivo global que abrange vários data centers e nuvens. O armazenamento é orquestrado; os dados são totalmente automatizados e aproveitam o gerenciamento declarativo autônomo de dados. Em outras palavras, separa o "como" do "o que", declarando o estado final desejado sem precisar detalhar todos os detalhes de como chegar lá.

## Arquitetura do Espaço Martelo

O sistema permite que você opere em um nível granular de arquivos, proporciona serviços de dados de classe empresarial, como snapshots e clones, e permite fácil escalabilidade de um data center para outro, de um data center para a nuvem e vice-versa, dispersando-o em um cenário de nuvem multi-híbrida.

## O armazenamento legado não consegue superar os desafios modernos.

O armazenamento legado não escala de forma suficiente, mesmo com soluções de aumento de escala horizontal, em nuvem ou dimensionamento planetário, porque até mesmo esses clusters se tornam silos, deixando às vezes você preso com dados que não podem ser correlacionados e analisados. O armazenamento tradicional também tem dificuldades em escalar capacidade e desempenho de forma independente.

A replicação é uma tecnologia antiga que leva à disseminação de cópias de dados. Em vez de mover as partes constituintes menores, você está movendo toda a carga. O gerenciamento de dados frequentemente é negligenciado; o gerenciamento de dados pertence à frente, não ao final.

Um problema que a arquitetura Hammerspace resolve é encontrar coisas facilmente. A versionamento pode levar a grandes problemas de negócios. Por exemplo, tanto a Airbus quanto a Boeing enfrentaram problemas enormes porque alguns engenheiros não tinham suas versões mais atualizadas. A solução é orquestrar os dados.

## Orquestração de Dados.

Orquestração, primeiramente, é o desacoplamento de todos os silos diferentes; os dados são tratados como um único conjunto. O Hammerspace assimila as partes constituintes menores, os metadados, para criar, essencialmente, um sistema de antigravidade de dados. Em seguida, eles implementam objetivos como durabilidade, disponibilidade e snapshots, ou ações personalizadas definidas que podem ser realizadas por meio do script do Hammerspace. Por fim, os dados, seja Kubernetes, NFS ou SMB, se tornam portáteis e se integram ao sistema.

O que isso significa na prática é que você não precisa ir a outro silo para atender a uma carga de trabalho específica. Os dados são entregues onde você desejar. Essa mobilidade de dados é fundamental porque é em tempo real, não se trata de migração de dados, que é disruptiva e causa tempo de inatividade.

Para minimizar os custos caros de saída, os dados são deduplicados e comprimidos em uma base de arquivo granular. Em vez de mover um volume fixo inteiro, você pode selecionar os dados que deseja mover com base em qualquer tipo de expressão, como pastas, etiquetas de metadados ou um descritor do cliente. Isso oferece flexibilidade e economia de custos.

## Arquitetura Hammerspace

Na arquitetura Hammerspace, o sistema de arquivos global possui três componentes em um nível mais alto: o próprio sistema de arquivos global, a apresentação da interface (NFS, CSI Driver e SMB) e o Anvil dentro do sistema de arquivos global. O Anvil é o componente de gerenciamento de metadados e o DSX, que fornece serviços de gerenciamento de metadados. Esses podem ser implementados como máquinas virtuais, VMware, KBM ou Hyper-V. O Anvil está em uma configuração em forma de A, então existem pelo menos dois deles em cada local. O DSX pode ser paralelizado para aumentar o desempenho, portanto, você pode ter vários deles em diferentes locais para garantir que tenha desempenho suficiente. Eles podem ser facilmente escalados para baixo.

Na parte de trás, o armazenamento subjacente pode ser o próprio armazenamento definido por software da Hammerspace, com disco diretamente conectado, NAS assimilado, qualquer nuvem ou qualquer combinação. Isso também pode ser escalado horizontalmente, permitindo escalar o desempenho e a capacidade independentemente. Seguindo o modelo de nuvem, também é elástico, então, caso os negócios mudem naquela localização específica, é possível reduzir tanto o desempenho quanto a capacidade para garantir que as aplicações tenham apenas o necessário naquela localização. Isso resulta em uma arquitetura muito flexível para atender a qualquer carga de trabalho de aplicação na frente.

Uma grande vantagem desta arquitetura flexível é a capacidade de assimilar dados que estão armazenados em dispositivos que não são seus, como NAS ou na nuvem. Isso simplifica o processo de mover os dados. Por exemplo, se você tem um NAS mais antigo e deseja migrar para um NAS mais novo, não importa se são do mesmo fabricante ou de fabricantes diferentes. O Hammerspace assimila os metadados e move os dados por trás, de forma completamente transparente para as aplicações, pois é uma mobilidade de dados em tempo real. Outra vantagem significativa é que não há tempo de inatividade ao mover os dados.

Se você gostaria de experimentar esta tecnologia, vá para hammerspace.com e comece com um teste gratuito com uma licença de até 10 terabytes implantados no Azure, AWS ou Google Cloud.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
