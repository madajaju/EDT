---
layout: posts
title: "Nem todos os núcleos são iguais"
number: 45
permalink: episode-EDT45-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 45
tags:
    - multicloud
    - compute
    - optimization
    - workloadplacement
    - workload
    - migration
    - process
    - cloudinstance

date: Tue Mar 30 2021 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Steven Holt

img: thumbnail.png
image: thumbnail.png
summary: "Neste episódio, Darren Pulsipher, Arquiteto-chefe de Soluções, Intel, e Stephen Holt, Arquiteto de Soluções em Nuvem, Intel, discutem otimização de nuvem e estudos que mostram que os núcleos têm desempenhos diferentes para várias cargas de trabalho."
video: "https://youtu.be/ZqdpCTp5yTY"
description: "Neste episódio, Darren Pulsipher, Arquiteto-chefe de Soluções, Intel, e Stephen Holt, Arquiteto de Soluções em Nuvem, Intel, discutem otimização de nuvem e estudos que mostram que os núcleos têm desempenhos diferentes para várias cargas de trabalho."
---

<div>
{% include transistor.html id="cd1f0343" title="#45 Not All Cores are Equal" %}

{% include youtube.html id="ZqdpCTp5yTY" %}
</div>

---

A Intel tem contratado arquitetos de soluções em nuvem para ajudar os clientes a migrarem de forma inteligente para as instâncias de nuvem certas para suas cargas de trabalho. Stephen recentemente entrou para a Intel e possui uma longa experiência em bancos de dados em geral, com os últimos sete ou oito anos focados na nuvem, aproveitando seus recursos para os clientes.

Alguns dos aspectos mais difíceis com os quais o Stephen se deparou ao ajudar os clientes a migrarem para a nuvem são os preços e as expectativas da mudança. Fornecedores de serviços em nuvem frequentemente afirmam que os clientes economizarão dinheiro ao migrarem para a nuvem, mas isso nem sempre é verdade.

Uma razão é que há uma mudança constante no mercado de provedores de serviços em nuvem em relação a recursos, funcionalidades e habilidades. Outra razão é a ignorância, por exemplo, acreditar que um VCP central é o mesmo em todos os lugares. Migrar com a mentalidade de "levantar e transferir" também pode ser muito caro. A otimização é fundamental para uma migração inteligente para a nuvem.

Para diminuir os custos e potencialmente economizar uma grande quantidade de dinheiro, você deve escolher as instâncias certas para as performances certas. Nem todos os núcleos, ou CPUs virtuais, são iguais. Dentro da AWS, eles têm o M4, o Broadwell da Intel e o M5, que é uma mistura de Cascade Lake e Skylake, e várias cargas de trabalho podem se beneficiar dessas plataformas de maneiras muito diferentes.

## Desempenho do CoreMark

O CoreMark é um aplicativo de única execução que testa movimentos de registros e somas simples para qualquer número de CPUs. Ao longo de três gerações de processadores Intel, Broadwell, Skylake e Cascade Lake, este teste mostra pouca diferença entre eles. Essa informação tem sido usada erroneamente para orientar as decisões dos clientes, pois o teste não é uma forma eficaz de medir as diferenças nos próprios processos. Pode haver diferenças enormes no desempenho com cargas de trabalho diferentes.

## Banco de Dados de Desempenho WL

Stephen realizou testes digitais em cargas de trabalho reais, concentrando-se em bancos de dados de código aberto. O ambiente Cascade Lake foi três vezes melhor do que o ambiente Broadwell para código aberto, o que faz sentido dado os avanços em velocidade e no acesso de baixa latência das melhorias incorporadas no chip. Portanto, subir duas gerações resulta em um desempenho duas a três vezes melhor nessas cargas de trabalho.

A carga de trabalho e o núcleo devem ser considerados juntos. Por exemplo, um cliente pode ser tentado a mudar para uma VCPU que a Amazon diz que é 10% mais barata. A AWS pode, no entanto, agrupar núcleos nesses processadores e agora você está se movendo de um ambiente onde você é um dos 48 máquinas virtuais em uma caixa para um onde existem 128 máquinas virtuais; seu acesso à memória é limitado e você pode ter 60% menos desempenho para uma economia de 10%.

Organizações frequentemente acreditam que, se terceirizarem para a nuvem, elas não precisam mais de um arquiteto de sistemas. É verdade que os arquitetos não estão mais instalando fisicamente e configurando máquinas, mas agora eles o fazem virtualmente e precisam entender quais são as diferentes capacidades que as instâncias oferecem para diferentes cargas de trabalho.

A Intel está trabalhando em uma ferramenta para mostrar quais cargas de trabalho funcionam melhor em quais instâncias. Enquanto isso, a Intel possui algumas diretrizes gerais e arquitetos de soluções em nuvem para ajudar a orientar os clientes.

Além disso, muitos testes são importantes para entender onde colocar as cargas de trabalho, mas também é importante testar e avaliar para validar que você está obtendo o que espera de um provedor.

## Desempenho do Banco de Dados WL - Não NVMe

A Intel realizou alguns testes em cargas de trabalho em instalações novas em uma instância fixa de 64 núcleos e 64 VCPU. Após obter o número inicial, outra instância foi iniciada e o mesmo teste foi executado novamente. Os resultados variaram drasticamente a cada vez do mesmo teste. Isso pode ocorrer devido a uma mistura de processos oferecidos em um determinado nível de camada, ou pode haver alguma distância e latência adicional para os anexos de armazenamento em bloco, por exemplo, ou até mesmo vizinhos ruidosos. Portanto, vale a pena testar para garantir que o sistema atenda às expectativas.

Em resumo, para obter o melhor valor da nuvem, você precisa se educar, testar os sistemas e aproveitar a ajuda disponível.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
