---
layout: posts
title: "Programação Heterogênea com OneAPI"
number: 81
permalink: episode-EDT81-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 81
tags:
    - cpu
    - fpga
    - gpu
    - heterogeneousprogramming
    - npu
    - oneapi
    - compute
    - technology
    - process

date: Wed Mar 23 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - James Reinders

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto Principal de Soluções da Intel, discute as capacidades e o futuro do OneAPI, um modelo de programação unificado, aberto e baseado em padrões, que oferece uma experiência de desenvolvimento comum em arquiteturas de aceleradores, com o Evangelista-Chefe do OneAPI da Intel, James Reinders."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquiteto Principal de Soluções da Intel, discute as capacidades e o futuro do OneAPI, um modelo de programação unificado, aberto e baseado em padrões, que oferece uma experiência de desenvolvimento comum em arquiteturas de aceleradores, com o Evangelista-Chefe do OneAPI da Intel, James Reinders."
---

<div>
{% include transistor.html id="28fb34d4" title="#81 Heterogeneous Programming with OneAPI" %}

{% include youtube.html id="url" %}
</div>

---

O objetivo do oneAPI é ajudar a abstrair a enorme diversidade que está surgindo em hardware, para que os engenheiros de software possam aproveitá-la em níveis mais altos na pilha e obter o máximo desempenho do hardware. James, um engenheiro de software que também trabalha em proximidade com o hardware, adora o que o oneAPI pode contribuir em vista do crescente uso da computação heterogênea.

A palavra heterogêneo aqui basicamente significa que existem diferentes dispositivos em um sistema que podem realizar cálculos, mas eles não executam o mesmo conjunto de instruções. Por exemplo, a CPU tem uma maneira de executar instruções e a GPU tem uma maneira diferente. FPGA, outros ASICs e dispositivos especializados têm diferentes maneiras de serem programados. Aproveitar todos esses é o objetivo.

John Hennessy e David Patterson, líderes no campo da arquitetura de computadores, chamaram isso de nova era de ouro da arquitetura de computadores. Para arquitetos de computadores, é um momento incrível para projetar todo tipo de dispositivos especializados para fazer coisas melhores para domínios específicos, mas para programadores, pode ser difícil e até assustador devido à complexidade. É aqui que entra a iniciativa oneAPI e os produtos oneAPI.

O nome, oneAPI, é tanto uma iniciativa com uma especificação quanto uma implementação. A iniciativa é um conceito simples: os desenvolvedores de software devem ter a liberdade de usar qualquer dispositivo que desejem com desempenho total, e sua codificação deve preservar seu valor; eles não devem ter que reescrever para cada novo dispositivo. Essas qualidades podem ser aplicadas a compiladores, bibliotecas, depuradores e qualquer tipo de ferramenta.

Uma grande quantidade de software para implementar certas especificações foi disponibilizada como open source. Muito disso é originado da Intel, mas também a Intel disponibiliza como pacotes de ferramentas para download, que já estão pré-construídos e prontos para serem utilizados, oferecendo suporte ao hardware da Intel. Outros fornecedores que participam da criação do oneAPI têm suas próprias implementações, então todos trabalham juntos nas especificações, mas cada um cria suporte para seu próprio hardware de forma aberta e multifornecedor.

O objetivo em alto nível é escrever o código uma vez e que ele funcione bem em qualquer lugar. No entanto, trata-se de um problema complexo que exigirá ajustes de desempenho. Por exemplo, se um algoritmo estiver funcionando bem em uma GPU, ele funcionará em praticamente qualquer GPU de maneira similar. Se você trocar o algoritmo para ser executado em um FPGA, é possível maximizar o reuso do seu programa, mas você tem a opção de reescrever partes do algoritmo para que ele funcione bem. É uma abordagem complexa que oferece a capacidade de aproveitar qualquer hardware com diferentes graus de reescritas esperançosamente muito isoladas.

Você pode construir um código para diferentes dispositivos. Existem abordagens de tempo de execução ainda mais sofisticadas que permitem detectar o que está presente e executar diferentes trechos de código, para que você possa ter um código fonte comum que decide dinamicamente. Você pode aplicar um programa de implantação e ele pode descobrir o que está em sua máquina e usá-lo de forma dinâmica, em vez de solicitar ao usuário que execute um binário diferente, dependendo da máquina em que está.

Isso é emocionante porque, por muito tempo, engenheiros utilizaram uma pilha de software que era a melhor para a sua máquina. Hoje em dia, eles querem compilar um programa que possa usar dispositivos de vários fornecedores. O programa deve reagir a isso. Para que isso funcione, o compilador precisa ser capaz de gerar código para esses vários dispositivos de maneira confiável. É aí que entra em jogo a abertura.

Alguns vão argumentar que um sistema fechado terá um melhor desempenho, uma vez que as bibliotecas e a linguagem são ajustadas especificamente para as capacidades do hardware. Mas a questão é, como conseguir o melhor dos dois mundos? Se, por exemplo, houver uma implementação específica do fornecedor para uma biblioteca matemática, pode existir um programa comum. Grande parte do oneAPI não consiste em tentar reinventar o mundo inteiro, mas sim em tentar organizá-lo de forma a aproveitar o melhor em cada plataforma possível.

OneAPI tem as capacidades de mover memória e mover dados. Diferentes modelos de programação ficam acima de OneAPI, e é sua escolha o quanto você quer se envolver na gestão da memória. Mover dados ao redor é caro e consome energia, então você não pode evitar isso, mas OneAPI oferece as ferramentas para gerenciar isso consultando o sistema e permitindo que seu programa tome as decisões corretas e dinâmicas que proporcionarão a melhor performance.

A Intel tem décadas de experiência na construção de ferramentas para ajudar com ajuste e migração, além de compiladores altamente otimizados. O V2 ajudou a desenvolver a indústria em torno dos contadores de hardware em processadores, tornando-se a norma. Existem uma variedade de outras ferramentas de análise para fornecer feedback, desde a estrutura do seu programa até encontrar bloqueios e aplicações paralelas, até encontrar onde você precisa adicionar algumas travas. A Intel está disponibilizando todas essas ferramentas no formato oneAPI para serem mais versáteis do que apenas se trata de uma CPU.

Os primeiros grupos a adotar o oneAPI incluem a computação de alto desempenho (HPC). Com a explosão de novas ideias de arquitetura de computadores, haverá uma quantidade ainda maior de diversidade e inovação nesse espaço. Os códigos grandes que podem ajudar a resolver os maiores problemas de engenharia do mundo, ou por exemplo, resolver problemas farmacêuticos e avaliar novos medicamentos, exigem o hardware mais recente e avançado. Portanto, esse conceito de portabilidade de desempenho está ganhando destaque em laboratórios nacionais, universidades e centros de pesquisa.

O HPC de hoje são os servidores de departamento de amanhã, então a capacidade de usar diferentes hardwares requer que os engenheiros de software planejem e prestem atenção em quão portável é o código, porque o código não morre rapidamente; ele dura por décadas. Em alguns anos, os sistemas heterogêneos estarão presentes em todos os lugares, e agora é a hora de se educar sobre isso.

Os engenheiros de software não precisam programar em paralelo para usufruir do oneAPI. Trata-se de utilizar coisas que são abertas e com capacidade de vários fornecedores e várias arquiteturas. Mesmo os engenheiros que estão no topo da hierarquia devem entender o que está na pilha e do que ela é capaz em termos de portabilidade e portabilidade de desempenho.

A comunidade de IoT é outro grupo que tem estado à frente na programação em múltiplos dispositivos de computação heterogêneos e utilizando métodos diferentes para gerenciá-los. Suas capacidades de computação continuam a aumentar à medida que a tecnologia avança. Portanto, o oneAPI se aplica aqui e pode ajudar a formalizar ou padronizar coisas que foram inovadas primeiro no mundo embarcado.

A ideia de uma API passou de ser uma ideia louca sobre a qual apenas algumas pessoas estavam falando para agora cada vez mais pessoas reconhecerem que faz sentido e resolve problemas em sua organização.

O lugar mais simples para aprender sobre a iniciativa é no site oneapi.io. Para aprender sobre a implementação, clique na aba de implementação para encontrar links para as implementações Intel. Lá, você pode baixar diferentes pacotes de ferramentas. Procure pela Intel dev cloud para experimentar as ferramentas na nuvem gratuitamente, incluindo em diferentes hardwares. O site oneapi.io também oferece uma variedade de tutoriais e recursos.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
