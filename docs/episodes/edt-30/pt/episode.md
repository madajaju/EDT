---
layout: posts
title: "Portabilidade de aplicativos com OneAPI."
number: 30
permalink: episode-EDT30-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 30
tags:
    - aiml
    - devops
    - compute
    - technology
    - process
    - oneapi
    - aiops
    - developer
    - people

date: Mon Nov 16 2020 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Com umAPI, a Intel criou um ambiente de software unificado para desenvolvimento, voltado para o processamento de dados. Gretchen Stewart, Cientista Chefe de Dados, Setor Público, Intel, discute essa tecnologia com Darren Pulsipher, Arquiteto de Soluções Chefe, Intel, que elimina a necessidade de usar uma linguagem diferente para arquiteturas diferentes."
video: "https://youtu.be/url"
description: "Com umAPI, a Intel criou um ambiente de software unificado para desenvolvimento, voltado para o processamento de dados. Gretchen Stewart, Cientista Chefe de Dados, Setor Público, Intel, discute essa tecnologia com Darren Pulsipher, Arquiteto de Soluções Chefe, Intel, que elimina a necessidade de usar uma linguagem diferente para arquiteturas diferentes."
---

<div>
{% include transistor.html id="3d30cd84" title="#30 Application Portability with OneAPI" %}

{% include youtube.html id="url" %}
</div>

---

Com o oneAPI, a Intel criou um ambiente de software unificado para desenvolvimento, voltado para o processamento de dados. É uma programação paralela de dados baseada em um código-fonte aberto C++. Vários tipos de bibliotecas, como a MKL, DNN da Intel e outras de código aberto, fazem parte do conjunto de ferramentas oneAPI, juntamente com acessórios como um tradutor CUDA. É possível desenvolver software no oneAPI e, em seguida, direcioná-lo para as diferentes bibliotecas, dependendo do que você está fazendo. Ele removeu a complexidade de aprender uma linguagem diferente para diferentes arquiteturas.

## Iniciativa da Indústria oneAPI - Alternativa à Solução de Único Fornecedor

Basicamente, um engenheiro de software pode escrever código uma vez e ele será executado em diferentes processadores: CPU, GPU, FPGA, NPU e VPU. Dependendo da arquitetura e bibliotecas que você está usando, pode ser necessário recompilar, mas não são necessárias reescritas de código.

## Bibliotecas de API poderosas

Esta versão é apenas o primeiro passo; A Intel e outras continuarão a projetar com a adição de aceleradores de IA, por exemplo. A ideia é que ela evolua para dar aos desenvolvedores uma flexibilidade muito maior e que a abstração permita que muitas pessoas possam projetar e codificar de forma mais simples, especialmente do ponto de vista da ciência de dados e IA.

Falando praticamente, um engenheiro de software poderia escrever algo em seu laptop, testá-lo lá e depois usar o mesmo código e executá-lo em uma nuvem totalmente equipada com processadores neurais, GPUs ou FPGAs. Isso poderia ser especialmente útil no setor público, onde os engenheiros estão escrevendo aplicativos especiais que processam na borda, talvez com um FPGA. Eles não precisarão ter um ambiente completo para realizar seu trabalho.

Outro aspecto empolgante é que, uma vez que a Intel incorporar a aprendizagem de máquina, o oneAPI poderá analisar o código e especificar quais partes seriam melhores em diferentes processadores. Isso direcionaria o código para os lugares adequados para obter a melhor velocidade e desempenho.

## Iniciativa da Indústria oneAPI - Alternativa à Solução de Único Fornecedor

Existem muitos frameworks de IA por aí, mas o oneAPI permite a migração de qualquer tipo de código de algo proprietário para uma linguagem de programação de código aberto. Ele é baseado em SYCL e desenvolvido sob um consórcio da indústria chamado Khronos Group, então é uma espécie de framework de desenvolvimento.

## Bibliotecas API poderosas

OneAPI possui de vinte a trinta bibliotecas como MKL, bibliotecas para redes neurais e aprendizado de máquina, CNN ou DNN abertos. Todas são abertas, partes do consórcio maior.

Além disso, a Intel está no processo de adicionar o framework TensorFlow e suas bibliotecas ao oneAPI. Muitos frameworks já foram otimizados pela Intel e estão sendo incorporados ou utilizando as mesmas bibliotecas, de forma que os usuários possam utilizá-los ou desenvolver com base neles.

## Recursos

A Intel tornou o oneAPI amplamente disponível no início de novembro de 2020, e isso foi um destaque da convenção virtual Super Computing, ocorrida em 17 a 19 de novembro.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
