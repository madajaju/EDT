---
layout: posts
title: "Operacionalizando a Gestão de Processos de Negócio"
number: 113
permalink: episode-EDT113-pt
lang: pt
nav_exclude: true
nav_order: 113
tags:
    - moderncomputing
    - bpm
    - transformation
    - automation
    - enterprisearchitecture
    - multicloud
    - process

date: Thu Nov 17 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Max Young

img: thumbnail.png
image: thumbnail.png
summary: "Neste episódio, Darren discute gestão de processos de negócio e automação com Max Young, CEO da Capital BPM."
video: "https://youtu.be/url"
description: "Neste episódio, Darren discute gestão de processos de negócio e automação com Max Young, CEO da Capital BPM."
---

<div>
{% include transistor.html id="a05071ff" title="#113 Operationalizing Business Process Management" %}

{% include youtube.html id="url" %}
</div>

---

Max se autodenomina um "acadêmico fracassado" porque abandonou seu doutorado em matemática, especializando-se em topologia, para estudar ciência da computação. Ele obteve um diploma de graduação e um mestrado, especializando-se em IA. Em seguida, trabalhou em gerenciamento de processos de negócios (BPM), começando na Lombardi, que foi vendida para a IBM, e em outros fornecedores do espaço BPM. Há dez anos, ele deu um salto com amigos e fundou a Capital BPM.

Max escolheu focar em BPM por duas razões. Primeiro, ele sempre gostou de algoritmos porque eles fornecem uma abordagem sistemática para resolver problemas complexos. Algoritmos lhe dão uma sensação de segurança durante situações loucas.

Segundo, ele gosta do que é chamado de transformações em matemática. Por exemplo, se você tem uma forma feia com muitos cantos difíceis de medir, você poderia transformá-la em, digamos, um retângulo e depois aplicar todas as teorias em torno da medição de retângulos, medir e traduzir a resposta de volta para a forma original. Da mesma forma, em BPM, você pode levar um problema a um domínio onde ele pode ser facilmente resolvido. Em vez de transformar um problema em um problema micro com declarações F aninhadas complicadas de manter, você pode transformá-lo em um problema achatado que você pode ver e atacar em estágios.

Este processo é como aumentar o zoom no Google Maps para ver onde você precisa de foco concentrado e, em seguida, diminuir o zoom para ver como isso se encaixa na imagem completa. O cerne da arquitetura de empresas é a habilidade de ampliar e reduzir o zoom para garantir que a linha que você está traçando ainda seja válida.

Max compara seu gosto por BPM no mundo da ciência da computação às artes marciais, as quais ele estuda desde os seis anos de idade. Ele diz que existem artes marciais práticas, como judô e muay Thai, e outras mais esotéricas, como tai chi. Ele gosta das artes marciais pragmáticas porque elas solucionam problemas do mundo real. Ele não se envolve mais em brigas, mas, por exemplo, suas habilidades em judô o ajudam quando ele escorrega e cai. BPM é pragmático, pois é a chave para solucionar um problema de negócio. Ele acredita que há valor real em utilizar todas as teorias que aprendeu na escola e torná-las subordinadas na criação de uma plataforma de negócios que permita às pessoas solucionar de maneira mais eficiente e consistente os problemas do dia a dia, dando assim mais oportunidades às pessoas e à comunidade.

Esta é uma área da ciência da computação que pode ser ligada à forma como as pessoas trabalham. As coisas podem ser automatizadas para reduzir a quantidade de tarefas repetitivas e mundanas, para que elas possam se concentrar em coisas mais importantes. As pessoas se preocupam que a automação irá engolir empregos diários, mas, ao invés disso, ela remove o tédio e libera tempo para um trabalho mais crítico. Ela também pode criar empregos. Esses mesmos medos existiam quando os computadores automatizados da Ford foram introduzidos, mas, no final, eles criaram novas indústrias. O BPM deve ser completamente abraçado, em vez de temido.

A melhor maneira de começar a operacionalizar processos é utilizar o método científico de articular o problema. No gerenciamento de processos de negócio, você desenha imagens através de um modelador de processos de negócio. Max gosta do Modelador de Processos de Negócio Camunda, que pode ser baixado gratuitamente com apenas um pequeno aprendizado de notação. No programa de modelagem, você desenha etapas que articulam os diferentes sistemas e como eles funcionam.

Em um processo de contratação, por exemplo, você começa com um grupo que define as partes interessadas, como o candidato, o gerente de TI e o RH. Dentro do grupo estão "caminhos de natação", cada um contendo um participante que pode realizar ações. Você pode pensar neles como grupos LDAP. Em seguida, você começa a traçar o seu processo de negócios: primeiro, um candidato se candidata ao emprego, então o RH pode fazer uma revisão, em seguida, um gerente de TI fará uma revisão. Decisões aprovadas são registradas ao longo do caminho. Depois que os passos significativos de alto nível estão no modelo, você pode entrar em mais detalhes sobre processos mais articulados e nuances, como uma entrevista dividida, uma para aspectos técnicos e outra para gestão.

Translate the following to Portuguese: ![imagem bmp](./bpm.png)

O programa de modelagem gera XML nos bastidores à medida que você desenha todos esses diagramas. Esse XML pode ser interpretado em tempo de execução pelas máquinas BPM; enquanto você desenha o diagrama, ele pode se tornar um processo executável.

O elemento humano ainda está presente nesse ciclo, mas o uso de um sistema BPM como este torna claro onde os processos podem ser automatizados, como verificar histórico de empregos ou realizar uma verificação de antecedentes criminais. O modelo também permite flexibilidade e experimentação. Por exemplo, suponha que o especialista de assunto diga que eles não desejam executar uma verificação de histórico de empregos e uma verificação de antecedentes criminais simultaneamente, porque a verificação de antecedentes criminais é cara e a verificação de histórico de empregos é barata. Nesse caso, é fácil fazer a mudança para mover a verificação de histórico de empregos para primeiro e exigir uma decisão antes da verificação de antecedentes criminais. Conforme as mudanças são feitas, você constrói um consenso e uma história verdadeira que se torna progressivamente mais verdadeira quanto mais você experimenta.

Embora a ferramenta pareça uma ferramenta de desenho, na verdade ela é uma ferramenta de modelagem que permite que você desenhe imagens e as simule nos bastidores. Assim, você pode executar esse processo e visualizar todos os diferentes pontos de decisão e para onde eles levam. O modelo também lhe dirá que você não pode implantar se não tiver feito algo corretamente.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
