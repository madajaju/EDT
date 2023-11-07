---
layout: posts
title: "História da Arquitetura Orientada a Dados."
number: 1
permalink: episode-EDT1-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 1
tags:
    - dataarchitecture
    - softwaredeveloper
    - microservice
    - container
    - virtualization
    - technology
    - compute
    - data

date: Thu May 07 2020 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.bmp
image: thumbnail.bmp
summary: "Neste episódio, Darren fala sobre a história das aplicações e como as mudanças recentes, principalmente devido à quantidade de dados provenientes da Internet das Coisas, estão afetando as arquiteturas centradas em dados. A infraestrutura está pronta, mas ainda não temos uma maneira adequada de gerenciar todos os nossos dados. Existem três elementos que precisam mudar para facilitar esse processo: as pessoas (organização), o processo (operação) e a arquitetura (tecnologia). Darren se concentra na arquitetura em que os dados e o processamento estão distribuídos em milhares de dispositivos periféricos e em nuvens públicas e privadas."
video: "https://youtu.be/SZyyG2AGM6g"
description: "Neste episódio, Darren fala sobre a história das aplicações e como as mudanças recentes, principalmente devido à quantidade de dados provenientes da Internet das Coisas, estão afetando as arquiteturas centradas em dados. A infraestrutura está pronta, mas ainda não temos uma maneira adequada de gerenciar todos os nossos dados. Existem três elementos que precisam mudar para facilitar esse processo: as pessoas (organização), o processo (operação) e a arquitetura (tecnologia). Darren se concentra na arquitetura em que os dados e o processamento estão distribuídos em milhares de dispositivos periféricos e em nuvens públicas e privadas."
---

<div>
{% include transistor.html id="7dda1ee9" title="#1 History of Data Centric Architecture" %}

{% include youtube.html id="SZyyG2AGM6g" %}
</div>

---

Neste episódio, Darren fala sobre a história das aplicações e como mudanças recentes, principalmente devido ao avanço.

translate this sentence to Portuguese: "de dados da Internet das Coisas está afetando arquiteturas centradas em dados. A infraestrutura está pronta, mas nós não"

Ainda não temos uma maneira adequada de gerenciar todos os nossos dados. Existem três elementos que precisam ser alterados para facilitar esse processo:

is stored, processed, and transmitted.

e as computações estão distribuídas por milhares de dispositivos periféricos e entre nuvens públicas e privadas.

## Pilhas de hardware-software projetadas com finalidade específica

Como implantamos aplicativos para missões hoje em dia não mudou significativamente nos últimos trinta anos. Uma arquitetura de referência.

que possui uma aplicação e uma pilha de aplicativos construída em hardware específico, com computação e armazenamento conectados a

Tradução: rede. Este modelo funcionou bem por muito tempo e, na verdade, cerca de um quarto das aplicações ainda estão sendo implementadas.

hardware construído de propósito, mas não é ótimo hoje. A tecnologia se desenvolve muito rápido para esse modelo; ocorrem desvios.

além disso, há longos tempos de desenvolvimento, altos custos, uso limitado da tecnologia e falta de integração com

outras aplicações.

## Arquiteturas de virtualização

Há cerca de 20 a 25 anos, a virtualização de hardware começou a resolver alguns desses problemas com a capacidade de implementação.

Aplicações múltiplas em uma máquina. As aplicações não estavam mais presas a hardware específico. Em vez de comprar cinco.

máquinas menores, uma peça de hardware maior poderia ser usada, não apenas para computação, mas também para armazenamento virtual e rede.

funções também, levando a uma maior relação custo-eficácia. Como qualquer desenvolvimento, isso levantou algumas questões novas.

preocupações crescentes com segurança e "vizinhos barulhentos", significando que uma aplicação interfere no desempenho de outra.

devido ao uso excessivo de largura de banda de E/S, rede ou armazenamento, etc.

## Arquiteturas em Nuvem

No início dos anos 2000, a tecnologia em nuvem decolou. Agora podíamos compartilhar entre várias organizações. Onde a virtualização.

traduzir o seguinte para português: criou a abstração do hardware, a tecnologia em nuvem criou a abstração das operações, facilitando a gestão de múltiplas.

executar various virtual machines.

diminuição dos recursos de computação, armazenamento e rede. Outros benefícios incluem a redução dos custos de CapEx e OpEx, devido a menos.

Translate the following to Portuguese: hardware and manpower. It also gave bursting ability, for example, for retailers during the busy holiday season or the

governo durante o censo. Com a progressão dessa tecnologia, as questões de segurança e vizinhos barulhentos.

privado. Aumentou devido a vários inquilinos na mesma máquina. Outra preocupação são os custos de integração entre público e privado.

nuvens privadas. Mesmo com essas preocupações, no entanto, os benefícios superam em muito as desvantagens na maioria dos casos.

## Arquiteturas de Serviço e Contêiner.

Nos últimos cinco a seis anos, vimos a reinvenção de uma tecnologia antiga: a containerização. O Docker criou uma plataforma que revolucionou a maneira como os aplicativos são desenvolvidos, empacotados e implantados. Os contêineres permitem que os desenvolvedores isolem seus aplicativos em ambientes consistentes e portáteis, garantindo que funcionem perfeitamente em qualquer infraestrutura. Além disso, a tecnologia de contêiner simplifica o processo de implantação e escalabilidade, permitindo que as empresas respondam rapidamente às demandas dos clientes. Essa inovação transformou o desenvolvimento de software e continua a moldar o futuro da computação.

geral, procuram uma maneira mais fácil de utilizar a tecnologia de contêiner, que antes era difícil de usar e complicada.

Translate the following to Portuguese: particular, embraced this technology because it is consistent across multiple environments. The service management layer

Traduza o seguinte para o português: em particular, adotou esta tecnologia porque é consistente em vários ambientes. A camada de gerenciamento de serviços

com a containerização de aplicações e microsserviços, o foco está mais voltado para a aplicação e mapeia essas aplicações para...

hardware genérico virtualizado que foi abstraído. Agora temos implantação automática em várias nuvens

we’ve implemented redundancy measures to ensure continuous operations and minimize downtime.

translations, and deploy security policies using a single platform.

micro-segmentação etc ... tudo por meio de software.

Segurança, no entanto, é uma preocupação principal. Como os contêineres são fáceis de implantar em vários ambientes, eles são susceptíveis de terem vulnerabilidades que precisam ser abordadas. Além disso, é importante garantir que os contêineres sejam protegidos contra ataques e que todas as medidas necessárias sejam tomadas para manter a integridade e confidencialidade dos dados.

é importante focar na segurança que é "integrada" à implantação. Além disso, há um aumento na complexidade. Aqui,

Nós nos afastamos de uma arquitetura de três camadas para uma arquitetura multi-camadas ou até mesmo uma arquitetura de micro-serviços com dezenas de

working together. Outro problema é onde e como os dados são armazenados e gerenciados. No gerenciamento do serviço.

tradução: camada, armazenamento é um recipiente genérico, que não gerencia os próprios dados.

## Arquiteturas da Internet das Coisas

Agora, quando a Internet das Coisas (IoT) é adicionada a esse ecossistema, o aumento no volume de dados é distribuído entre centenas ou

devices have limited security protocols, making them vulnerable to cyber threats. Additionally, the sheer volume of devices can overwhelm network resources, causing performance issues. To mitigate these risks, it is important to implement robust security measures and manage network traffic effectively.

Os dispositivos são acessíveis pelo público. Por exemplo, alguém poderia adulterar uma luz de uma cidade inteligente, um semáforo inteligente,

Um drone, ou câmera de segurança. A complexidade dos diferentes dispositivos, sua quantidade e localizações, juntamente com o imenso

quantidade de dados, é enorme.

## Arquiteturas de Gerenciamento de Dados e Informações

Como lidamos com essas questões? As organizações já estão se adaptando para lidar com essa complexidade com novas organizações.

e as posições no gerenciamento de dados. Anteriormente, não havia um lugar para esses casos de uso serem gerenciados, então...

Criamos uma nova camada chave chamada camada de gestão de informações distribuídas. Esta camada gerencia dados em todos os sistemas.

can provide seamless connectivity and integration across different platforms.

pode alocar dinamicamente serviços e aplicativos próximos aos dados, ou vice-versa. Regulamentações e o tamanho considerável dos dados

pode limitar a capacidade de movimentar dados para locais centrais, como fazíamos tradicionalmente. Com essa nova arquitetura,

vários modos de operação podem ser utilizados, incluindo análise desagregada, movimentação de dados e movimentação de aplicativos.

Mais uma vez, com esta arquitetura expandida, a segurança é de suma importância. A segurança precisa ser executada como um aspecto comum.

Através de todas as camadas. Segurança de identidade, o que significa acesso, autorização e autenticação de indivíduos, IOT.

Dispositivos, aplicativos, serviços e até mesmo dados são elementos fundamentais. A gestão de identidade inclui criptografia para dados confiáveis.

e dispositivos.

## Conclusão

translate the remaining pieces and fit them together. Once complete, the Edgemere architecture will be a cohesive and efficient system.

have already gone through the process of optimizing how all the different layers of our system work together. However, we still need to focus on optimizing the DIML, as it is the most recent addition to our infrastructure.

Estamos começando a ver start-ups e empresas mais estabelecidas desenvolvendo os casos de uso e os elementos arquitetônicos.

nesta camada.

A arquitetura Edgemere ajuda a identificar as principais partes móveis de um sistema moderno transformado digitalmente e como elas se relacionam.

encaixar

A Intel se encaixa nesse ecossistema fornecendo o elemento-chave de uma camada física comum para controlar e gerenciar todos os seus sistemas.

acessar recursos, seja um dispositivo de Internet das Coisas (IoT), em um centro de dados ou em um local remoto. Nós tornamos possível para você acessar esses recursos.

mover os dados de forma eficiente, armazená-los de maneira eficaz e processar tudo. Sejam os processadores Xeon de alto

Traduza o seguinte para o português: seja para fins de inferência ou IA na borda com consumo de energia muito baixo, a Intel possui uma pilha completa de hardware físico.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
