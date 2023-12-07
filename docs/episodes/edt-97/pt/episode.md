---
layout: posts
title: "Os Benefícios dos Bancos de Dados de Gráfico"
number: 97
permalink: episode-EDT97-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 97
tags:
    - data
    - graphdb
    - katanagraph

date: Wed Jul 27 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Madi Ahmadi

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Arquiteto Principal de Soluções, Intel, Dr. Hadi Ahmadi, Diretor de Arquitetura de Soluções, Katana Graph discutem os benefícios de bancos de dados de gráficos."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquiteto Principal de Soluções, Intel, Dr. Hadi Ahmadi, Diretor de Arquitetura de Soluções, Katana Graph discutem os benefícios de bancos de dados de gráficos."
---

<div>
{% include transistor.html id="c81eaabc" title="#97 The Benefits of Graph Databses" %}

{% include youtube.html id="url" %}
</div>

---

Hadi obteve seu Ph.D. em ciência da computação em 2012 e pesquisou criptografia e segurança da informação em redes. Ele trabalhou no meio acadêmico por alguns anos e depois ingressou na indústria, focado em diferentes aspectos de soluções de segurança, incluindo gestão de identidade e acesso. Ele começou a aprender mais sobre modelagem de gráficos em 2015 e percebeu como a modelagem de dados em gráficos poderia resolver alguns dos problemas interessantes e complexos em sua área de estudo.

Em bancos de dados de gráfico, um gráfico não significa gráficos ou interfaces gráficas, mas sim uma maneira de estruturar dados no nível de armazenamento para que possam ser recuperados e processados ​​para resolver problemas complexos, especialmente se os dados estiverem interconectados. O gráfico oferece muitos benefícios e pode complementar estruturas de dados ou soluções existentes, como modelos de banco de dados relacionais ou armazenamento de objetos.

A principal diferença entre os bancos de dados gráficos e os bancos de dados relacionais é que, embora ambos tratem de relacionamentos, os bancos de dados relacionais levam os relacionamentos para o nível de metadados e esquema, enquanto os bancos de dados gráficos são orientados por relacionamentos de dados. Em outras palavras, você está relacionando colunas de tabelas em bancos de dados relacionais. Para introduzir um novo relacionamento, é necessário alterar o esquema. O grafo fornece uma infraestrutura sem esquemas onde você pode adicionar mais estrutura em torno de seus dados, mas ainda ter flexibilidade para incorporar qualquer dado não estruturado.

Metade dos dados do mundo foi criada nos últimos anos, coletada de várias fontes diferentes, mas menos de dois por cento foi analisado, a maioria são dados estruturados. Os dados estão sendo coletados, porém as informações são insuficientes para processamento. Deve haver uma maneira de adicionar de forma flexível um pouco de estrutura que seja dinâmica o suficiente para mudar caso haja incerteza, mas ainda se beneficiar da computação otimizada avançada. O gráfico é uma excelente maneira de fazer isso.

Se você está tentando trabalhar com dados correlacionados ou interconectados, ao contrário, por exemplo, de dados isolados com valores críticos, um gráfico oferecerá benefícios por causa das relações. Quase todas as indústrias podem se beneficiar porque os dados não estruturados geralmente vêm de várias fontes e têm naturezas múltiplas.

Um exemplo seria soluções de segurança cibernética. Existem dados de registros e trens de auditoria dos ambientes de rede, infraestrutura de nuvem, hosts de endpoint, etc. Os dados vêm de diferentes fontes, como diretórios ou arquivos de log brutos. Seria benéfico correlacionar os dados, por exemplo, porque geralmente, uma identidade ou usuário que pode fazer parte de um registro do sistema de gerenciamento de identidade pode ser o mesmo usuário que dispara um processo em um laptop, como baixar um anexo de um e-mail. Ao analisar esses padrões, você pode usar essa ligação de correlação para obter mais insights. Em outras palavras, não importa como ou de onde vêm os dados, mas fornecer essa ligação leva a aprender sobre cada registro ao analisá-los em contexto.

Um benefício é que não há problemas de transformação de dados, portanto, isso aumenta a velocidade. Isso também diminui os requisitos de armazenamento.

Os gráficos e as estruturas de bancos de dados relacionais, em geral, são compatíveis. Aqui está um exemplo simplificado de uma rede social: Os tipos de nós no gráfico se parecem com tabelas. Então você pode ter um nó chamado "pessoa" e depois uma tabela chamada "pessoa". Você pode ter outro nó chamado "localização" e conectar a pessoa a uma localização específica. Você pode ter uma tabela chamada localização e conectá-la a chaves estrangeiras. Em seguida, você tem essa relação de amigos. Um amigo de uma pessoa em um modelo de gráfico é apenas um laço de retroalimentação. Isso permitiria que você modelasse esse esquema. Em um banco de dados relacional, você precisaria criar uma nova tabela chamada amigos e depois conectar. Portanto, mesmo em um nível de esquema, você está adicionando redundância e alguma estrutura por cima disso. E se você precisar adicionar um novo conceito de amizade ou relacionamento, precisará criar novas tabelas, aumentando a redundância e a complexidade.

Outros benefícios de gráficos em relação a bancos de dados relacionais são gráficos em elementos, inteligência artificial em gráficos e a ideia de modelar os dados agora para encontrar padrões com base em como os dados estão conectados. Você pode reduzir o conjunto de dados que está pesquisando ou analisando por causa das relações. Está utilizando o poder dos dados para potencializá-los ainda mais. Os algoritmos em um banco de dados gráfico são muito diferentes dos bancos de dados relacionais e são melhor otimizados para lidar com grandes conjuntos de dados com mais rapidez.

Uma das desvantagens de um banco de dados em gráfico é que é difícil de escalar. Em um banco de dados relacional, é fácil dividir uma tabela e colocá-la em dois servidores, por exemplo. Os primeiros bancos de dados em gráfico foram projetados para serem uma solução única, então, se você quisesse aumentar a escala, seria necessário adicionar mais memória e CPU.

Agora, se você deseja trabalhar com petabytes de dados em gráficos, deseja escalar verticalmente o máximo possível com tecnologia como as VMs Intel, mas também deseja escalar horizontalmente. Novas tecnologias, como a plataforma de gráficos da Katana, ajudam a resolver esse problema de escalabilidade com computação distribuída. Você pode dividir ou dividir o problema em partes e fazer com que cada uma trabalhe em uma pequena parte do gráfico para uma solução final. A Katana provou que você poderia usar 256 máquinas ou ainda mais para processar dados, assim você pode rapidamente ter dezenas de terabytes de dados na memória.

Um banco de dados de gráfico requer um ecossistema semelhante a um banco de dados relacional. O gráfico é um pouco mais dinâmico e flexível. Se você deseja migrar para uma plataforma de análise de gráficos, que vai além dos bancos de dados operacionais, você pode aproveitar outras coisas, como armazenamento de dados e capacidades de data lake. Armazenamento e computação seriam separados, ou seja, as tecnologias de processamento de gráficos que executam tudo na memória não precisam depender do armazenamento ligado aos serviços, para que você possa ter um serviço de armazenamento diferente.

Katana utiliza armazenamento de objetos e, em seguida, quando eles desejam computar, carregam de forma oportunista o que desejam do grafo para a memória distribuída de todas as máquinas. Os dados retornam imutáveis para o armazenamento, então se você, por exemplo, destruir todo o cluster, não perde nada. Todos os dados já estão lá e armazenados. Bancos de dados relacionais são uma área mais madura, mas os bancos de dados de grafo estão se tornando mais bem suportados no ecossistema.

Com base nos oito anos de experiência de Hadi no campo, conversando com os interessados e clientes, todos imediatamente reconhecem os benefícios dos bancos de dados de gráficos. As limitações podem ser que eles não conseguem acompanhar a escalabilidade ou o custo. O trabalho da Katana e de outras empresas de tecnologia de gráficos é tornar os gráficos mais uma ferramenta comum que os clientes possam usar para várias tarefas e menos um luxo no banco de dados. Por exemplo, a Katana está fornecendo aos clientes soluções de identidade baseadas em gráficos e gerenciamento maciço de dados.

Bons casos de uso de grafos seriam a invenção precoce de soluções de gráficos específicas para algumas empresas como o LinkedIn e o Facebook, que possuem seus próprios gráficos sociais. Agora, um encaixe natural está no comércio eletrônico para motores de recomendação. Encontrar conexões entre clientes, contas, compras e outros comportamentos possibilitará melhores recomendações imediatamente para os compradores de uma maneira que não pode ser feita com consultas a bancos de dados relacionais.

Para saber mais sobre a Katana ou como entrar em contato com o Hadi, acesse embracingdigital.org.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
