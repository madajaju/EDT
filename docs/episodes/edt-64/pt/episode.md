---
layout: posts
title: "Seguir e Proteger a Conexão de Ponta a Nuvem"
number: 64
permalink: episode-EDT64-pt
lang: pt
nav_exclude: true
nav_order: 64
tags:
    - employeengagement
    - devops
    - oneapi
    - edgecomputing
    - security
    - microservices
    - zerotrust
    - cybersecurity
    - moderncomputing
    - changemanagement
    - organizationalculture

date: 2021-09-02T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Greg Clifton
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto-chefe de Soluções, Intel, fala sobre acompanhar o episódio com Greg Clifton, Diretor, Departamento de Defesa e Inteligência, Intel, em uma continuação do episódio #2, juntamente com Steve Orrin, CTO Federal, Intel, que empresta sua experiência em segurança em ambientes complexos de borda para nuvem."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquiteto-chefe de Soluções, Intel, fala sobre acompanhar o episódio com Greg Clifton, Diretor, Departamento de Defesa e Inteligência, Intel, em uma continuação do episódio #2, juntamente com Steve Orrin, CTO Federal, Intel, que empresta sua experiência em segurança em ambientes complexos de borda para nuvem."
---

<div>
{% include transistor.html id="24225e6c" title="#64 Follow and Secure the Bit Edge to Cloud" %}

{% include youtube.html id="url" %}
</div>

---

No episódio nº 2, Greg explicou as complexas questões de coleta, movimentação e análise de dados em um ambiente do Departamento de Defesa (DOD) que inclui dispositivos de borda em navios, aviões e até mesmo combatentes e a necessidade de movimentar e analisar esses dados rapidamente para decisões oportunas e acionáveis. O papel da Intel é ajudar a encurtar os ciclos do processo e aliviar gargalos no fluxo de dados com seu portfólio de tecnologia. Tudo se resume em combinar tecnologia com a missão.

Uma tendência recente na arquitetura é mover o cálculo, processamento e inteligência para frente, de forma a encontrar os dados, ao invés de mover os dados para a parte de trás. Esse ajuste oferece a melhor capacidade para obter respostas e inteligência em tempo real. Essa abordagem é um modelo operacional diferente, com questões desafiadoras.

## Hardware heterogêneo

Na infraestrutura fundamental, como você disponibiliza o correto cálculo, armazenamento, memória e capacidades de rede para impulsionar análises na borda e processar onde você precisa? Como você gerencia essas aplicações e dados? Como você introduz qualidade e curadoria de dados mais adiante na cadeia alimentar? Segurança é uma parte fundamental de qualquer infraestrutura, e agora, os dados devem ser protegidos desde a borda.

A indústria precisa chegar a uma computação mais heterogênea para que o software subjacente possa ser executado em várias plataformas de hardware, de modo que você não fique preso a um software ou conjunto de hardware específico. Parte da beleza do que a Intel tem feito há anos é fornecer portabilidade de software: a estrutura aberta, x86 e outros sistemas subjacentes.

Um fator importante no desenvolvimento das capacidades da Intel é entender a carga de trabalho e o fluxo de dados, em vez de focar na modernização, como colocar coisas na nuvem. Não se trata de como você adquire a TI (nuvem ou local) mas otimizar o fluxo de negócios para aproveitar como os dados fluem e o que eles realmente estão fazendo.

## DevOps para o resgate

Outro aspecto crítico dessas novas soluções é o tempo de implantação. O DevOps tornou-se cada vez mais importante em toda a DOD, e os esforços para desenvolver plataformas comuns de DevOps aumentaram dramaticamente. Para escrever código uma vez e executar em qualquer lugar (nuvem, local ou na borda), as organizações usam o chipset x86 e o oneAPI da Intel para implantar serviços complexos em todo o ecossistema completo. Por exemplo, o oneAPI permite que os desenvolvedores escrevam trabalhos complexos de análise ou IA que são executados em uma GPU, uma CPU ou até mesmo em FPGAs com a mesma base de código. Os desenvolvedores podem então testar esses sistemas complexos em seu centro de dados, assegurando que se comportarão da mesma forma quando implantados no campo, diminuindo o tempo de implantação.

Ser capaz de aproveitar uma combinação de um ambiente DevOps flexível, que utiliza a conteinerização e frameworks de software como o oneAPI, proporciona aos programadores a abstração de que precisam, mas com otimizações de hardware/software incorporadas. Uma distinção chave aqui é que descobrimos uma forma de aproveitar todo o poder do hardware e otimizar o software para que um aplicativo ainda possa ter melhorias de desempenho e aproveitar hardware especializado.

O ecossistema de contêineres fornece abstração no nível do sistema, para que as coisas não precisem ser codificadas diretamente. Ele proporciona a capacidade de escalonar para cima ou para baixo com base na carga de serviço e capacidade. Por exemplo, se uma capacidade é executada na borda, em um centro de dados portátil ou de volta para a nuvem, e você perder conectividade ou um recurso, ainda é possível executar a missão. Essa conectividade intermitente é vital em um ambiente DOD.

## Soluções Edge

Muitas pessoas pensam na Intel como uma provedora de silício ou hardware, mas a empresa desenvolveu soluções e arquiteturas de referência no ecossistema da borda para a nuvem. Um exemplo de progresso é uma grade tática naval onde o processamento ocorre na borda, em navios, aeronaves e na costa. As aplicações precisam ser executadas em todo o ecossistema, e isso não pode ser feito apenas com hardware. A Intel aproveitou seus recursos de silício e segurança e, construindo em cima de um ecossistema de contêineres, produziu aplicações complexas com vários microsserviços que podem ser executados quando houver ativos conectados e desconectados.

Outro exemplo de arquiteturas de borda é rastrear objetos através de malhas de sensores, mesmo com lacunas na malha de sensores. Ao realizar a fusão de sensores, fusão de dados e análise entre domínios, é possível rastrear objetos em diferentes cenas e diferentes tipos de sensores, ampliando e reduzindo a escala para criar uma plataforma de sensor móvel que possa realizar análises e fusões de detecção de borda. Em seguida, também pode ser transferido para um conjunto distribuído de nós que podem trabalhar em conjunto para rastrear um objeto em todos esses diferentes sensores existentes.

Por exemplo, se você está rastreando um objeto e ele se move entre sensores, você o perderá por um momento. O que essa inteligência permite que você faça é conectar esses dois feeds e rastrear os pontos cegos. Isso não apenas funciona com tipos de sensores homogêneos, mas também pode funcionar com vários tipos de sensores, como sensores de movimento, RF e IR. Portanto, se você perder o vídeo, mas ainda tiver um RF e depois retomar o vídeo, poderá mostrar o caminho completo do objeto. No passado, esse tipo de análise exigia mover dados para o centro de dados para processar essas interações complexas; agora, podemos fazer isso na borda da malha de sensores por meio de microsserviços na borda.

## Flexibilidade de Implantação

Uma abordagem vantajosa é construir uma vez e utilizar a mesma arquitetura e software para diferentes missões com requisitos analíticos. Alguns locais onde a computação pesada está na borda podem expandir e aproveitar ao máximo as capacidades de hardware. Outras plataformas podem ter capacidades de computação limitadas e podem executar microserviços menores, fornecendo apenas uma parte da solução completa. Novas capacidades e serviços de missão podem ser implantados rapidamente construindo esses microserviços uma vez para múltiplos casos de uso.

## Segurança na Borda

A complexidade às vezes é o pior inimigo da segurança, mas os princípios fundamentais de segurança também podem proteger dados e aplicativos na borda. Em vez da abordagem antiga de proteger o servidor e esperar que tudo fique lá, é essencial entender para onde os dados fluem e todos os lugares onde eles existem, protegendo-os, não importa em que estão sendo executados. Abordagens baseadas em riscos e conceitos como confiança zero ganharam destaque porque adotam uma visão independente dos sistemas de segurança.

Resumidamente, zero trust significa negação padrão. Ninguém entra a menos que precise e apenas pelo tempo necessário para a ação necessária. Quando os controles de acesso temporais são combinados com uma abordagem baseada em risco para proteger os dados ao longo de seu ciclo de vida, o resultado é a capacidade de proteger os dados independentemente de onde eles estejam e quem esteja acessando. Essa técnica é uma das formas de garantir a segurança desses ambientes altamente complexos.

A ação prática a ser tomada nesses ecossistemas é aplicar uma política que alavanque controles que atendam ao risco de um determinado sistema em um determinado momento e, em seguida, monitorá-los e atualizá-los continuamente em tempo real para enfrentar o mundo de ameaças cibernéticas em constante mudança. Utilize os controles técnicos que as capacidades de hardware e software já proporcionam, tais como o Secure Boot, a raiz de confiança no hardware com módulos TPM ou chaves de armazenamento SGX, criptografia, etc.

Não existe uma solução milagrosa que possa ser comprada para fornecer uma solução de segurança final nesses ecossistemas complexos. Trata-se de criar e aplicar políticas de segurança conforme as ameaças evoluem e implementá-las em grande escala, aproveitando hardware, software e processos necessários para proteger o dado à medida que ele flui desde a borda até todo o ecossistema.

O framework DevOps fornece mecanismos eficazes para lidar com a segurança em todos os ativos do ecossistema. Os contêineres devem ser preenchidos com instrumentação para impor os controles e políticas de segurança. A segurança deve ser incorporada ao próprio processo DevOps, porque se você depender do desenvolvedor para implementar a segurança, cada um fará isso de maneira um pouco diferente, aumentando a complexidade e a variabilidade no sistema. O desenvolvedor deve ter as capacidades e as restrições sobre as quais deve desenvolver.

Os desenvolvedores ainda terão que realizar trabalhos de segurança, como garantir que utilizem ferramentas de segurança adequadas para o ambiente de ameaças específico, mas o trabalho pesado, a complexidade, deve ser abstraído na arquitetura do DevOps.

Uma das áreas críticas em um ambiente teatral complexo é o gerenciamento de dispositivos de borda, como monitoramento e atualização de firmware. Garantir que esses dispositivos sejam seguros para poderem oferecer suporte à segurança de dados e aos perfis e políticas implementados nos sistemas em grande escala exigirá inovação. É por isso que o ecossistema está crescendo atualmente: para enfrentar esse desafio.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
