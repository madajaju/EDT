---
layout: posts
title: "Benefícios da Arquitetura Multi-Cloud"
number: 3
permalink: episode-EDT3-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 3
tags:
    - multicloud

date: Mon Jun 22 2020 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Uma arquitetura de nuvem multi-híbrida permite às organizações aproveitar os benefícios tanto das nuvens privadas quanto das públicas, otimizando recursos e eficiência de custos. Esse modelo possui cinco principais vantagens: agilidade, flexibilidade, desempenho preditivo, segurança e conformidade, e eficiência."
video: "https://youtu.be/14mcgaHLoPU"
description: "Uma arquitetura de nuvem multi-híbrida permite às organizações aproveitar os benefícios tanto das nuvens privadas quanto das públicas, otimizando recursos e eficiência de custos. Esse modelo possui cinco principais vantagens: agilidade, flexibilidade, desempenho preditivo, segurança e conformidade, e eficiência."
---

<div>
{% include transistor.html id="f87aa67c" title="#3 Benefits of Multi-Cloud Architecture" %}

{% include youtube.html id="14mcgaHLoPU" %}
</div>

---

## Agilidade

Agilidade é a capacidade de mover-se rapidamente para se adaptar às condições em constante mudança de novas tecnologias, novas aplicações e novas ameaças, como segurança e concorrência. Um modelo multi-híbrido permite a capacidade de mover coisas entre nuvens privadas e públicas, ou até mesmo de infraestrutura legada para nuvens. Pode ser tentador para equipes de desenvolvimento utilizar inicialmente a nuvem pública sob prazos apertados porque eles podem rapidamente criar e destruir infraestrutura, mas podem haver problemas de integração nas fases finais de implantação das aplicações no produto. Isso pode resultar em atrasos custosos. Ao usar o modelo multi-híbrido, muitos desses pontos de integração são expostos à equipe de desenvolvimento antecipadamente. O desenvolvimento de aplicações utiliza isso para falhar rápido e cedo no processo de desenvolvimento.

## Flexibilidade

A flexibilidade na infraestrutura é um parente próximo da agilidade. Enquanto a agilidade é a capacidade de mover-se rapidamente, a flexibilidade é a capacidade de mudança. Para obter máxima flexibilidade, os desenvolvedores precisam ter a capacidade de implantar um aplicativo em qualquer lugar, seja em nuvens privadas ou públicas, ou em infraestruturas antigas, sem ficarem presos a nenhum serviço ou infraestrutura específica de uma nuvem.

Ao implantar uma plataforma de gerenciamento em nuvem (CPM) em uma arquitetura multi-híbrida, as cargas de trabalho podem ser facilmente redirecionadas para diferentes nuvens de acordo com custo, segurança e confiabilidade.

Um exemplo das consequências da falta de flexibilidade é a decisão precoce da Netflix de utilizar apenas um provedor de serviço em nuvem. Essa nuvem pública teve um problema de infraestrutura que resultou em tempo de inatividade, e a Netflix não conseguiu transmitir por várias horas na costa leste dos Estados Unidos. Após esse desastre, a Netflix implementou uma solução de multi-nuvem para que eles possam migrar rapidamente para outra nuvem em caso de problemas. Além disso, eles agora têm a capacidade de se mover para onde for mais sensato a qualquer momento, levando em consideração custo, segurança e confiabilidade.

As aplicações de uma nuvem multi-híbrida são portabilidade e flexibilidade operacional. Ao não ficar preso à forma como uma única nuvem faz as coisas, os desenvolvedores poderão escrever código que pode ser facilmente transportado entre nuvens. Além disso, você terá a flexibilidade operacional para mover cargas de trabalho entre nuvens, oferecendo aos seus clientes o que eles desejam de maneira segura, econômica e confiável.

## Desempenho Preditivo

As nuvens públicas frequentemente vêm com um preço: "vizinhos barulhentos", que podem afetar o desempenho preditivo ou a Qualidade de Serviço (QoS).

Ao utilizar uma nuvem pública, muitas vezes você não sabe o que ou quem mais está sendo executado na mesma máquina, conjunto de armazenamento ou rede que você. Para algumas cargas de trabalho, isso não é um problema. No entanto, se você tiver um aplicativo em que precise de desempenho mais previsível, vizinhos barulhentos ou aqueles que monopolizam largura de banda, E/S de disco, CPU e outros recursos podem atrapalhar os resultados de QoS que você precisa.

As nuvens privadas também podem sofrer com vizinhos barulhentos, mas já que você é dono da infraestrutura e as aplicações são suas, você tem a habilidade direta de gerenciá-las. Um vizinho barulhento na nuvem pública é como viver em um prédio de apartamentos onde você tem opções limitadas para lidar com os festeiros ao lado. Por outro lado, vizinhos barulhentos em sua nuvem privada são como viver em uma casa com crianças indisciplinadas que você pode imediatamente gerenciar restringindo recursos.

Uma estratégia de nuvem híbrida lhe dá a capacidade de colocar cargas de trabalho e aplicativos "sensíveis" em nuvens privadas e outras cargas de trabalho e aplicativos em infraestruturas de nuvem pública para eficiência de custo e recursos. Muitas ferramentas híbridas lhe dão a capacidade de caracterizar cargas de trabalho com requisitos de QoS para auxiliar no posicionamento automático e ideal das cargas de trabalho em diferentes infraestruturas de nuvem.

## Segurança e conformidade

Existem alguns perigos ao fazer coisas de forma automatizada nas nuvens públicas e privadas. No entanto, se a segurança for incorporada à arquitetura multi-híbrida, essa automação se torna um benefício, pois significa que um perfil de segurança pode ser imposto a todos os ativos em nuvem, sejam eles privados ou públicos, além da infraestrutura legada. Esse perfil de segurança comum é aplicado em todos os lugares e as aplicações são implantadas com base nesses perfis.

Por exemplo, em uma nuvem privada, se você deseja um tipo específico de segurança, como vincular uma certa aplicação a uma determinada máquina que só é executada nessa nuvem privada, isso pode facilmente ser um requisito no perfil de um sistema híbrido-múltiplo.

Em um sistema multi-híbrido, também existem muitas ótimas ferramentas para auditoria e monitoramento da sua infraestrutura. Você não pode apenas monitorar o que está acontecendo na sua nuvem privada, mas também na nuvem pública, o que o alertará para ataques maliciosos que poderiam potencialmente infectar sua nuvem privada ou ativos de infraestrutura legada.

## Eficiência

Existem muitas ideias conflitantes sobre eficiência. Se você observar vários calculadores de custo total de propriedade (TCO), encontrará respostas diferentes sobre se as nuvens privadas ou públicas são mais eficientes em termos de custo. Uma solução de nuvem multi-híbrida pode resolver esse dilema para sua organização por meio de maior visibilidade e provisionamento dinâmico.

Com uma arquitetura de nuvem híbrida multi-híbrida e um orquestrador inteligente, seu orquestrador pode usar telemetria de suas nuvens privada e pública e infraestrutura legada para tomar decisões ótimas sobre onde a carga de trabalho deve ser executada atualmente e no futuro. Outra vantagem dessa visibilidade é que você pode decidir se é eficiente executar aplicativos continuamente. Um exemplo disso é como ajudamos o sistema do governo canadense a funcionar de forma mais eficiente, reduzindo os custos associados à execução de um aplicativo na nuvem pública quando ninguém estava usando. Em vez de executar um aplicativo específico o tempo todo, agora eles o executam por 18 horas, 5 dias por semana, de acordo com o uso real.

Esta visibilidade também ajudará a identificar e eliminar cargas de trabalho e aplicações no final da vida útil (EOL), o que irá economizar dinheiro real. Para a nuvem privada, isso libera recursos que podem ser utilizados para outras cargas de trabalho, aumentando assim a eficiência. Além disso, os intermediários de nuvem na CMP em arquitetura multi-híbrida basicamente pesquisam o preço mais baixo mantendo a QoS para a carga de trabalho específica. Isso diminui o custo geral de execução da carga de trabalho e também oferece visibilidade do custo real de uso de uma nuvem pública ou privada específica.

Visibilidade nos custos em todas as nuvens e infraestrutura legada

Impulsionar carga de trabalho e aplicativos para os custos mais baixos, mantendo os mesmo níveis de acordos de nível de serviço.

Aumentar a utilização da infraestrutura de nuvem privada.

## Chamada à Ação

As arquiteturas de nuvem multi-híbridas estão dando aos CIOs a capacidade de antecipar as demandas de seus clientes, mas ainda há trabalho árduo que deve ser feito. Construir uma estratégia de nuvem multi-híbrida inclui mudanças organizacionais, comportamentais e técnicas que não podem acontecer da noite para o dia. Desenvolver uma visão arquitetônica sólida e um plano de ação são essenciais para implementar uma estratégia de nuvem multi-híbrida que possa aproveitar as forças das nuvens multi-híbridas e evitar a ineficiência do "objeto brilhante do mês" das indústrias técnicas.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
