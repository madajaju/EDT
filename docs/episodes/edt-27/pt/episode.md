---
layout: posts
title: "Segurança de Hardware: Imprescindível para Transformar Dados."
number: 27
permalink: episode-EDT27-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 27
tags:
    - datagovernance
    - data
    - sgx
    - confidentialcomputing
    - cybersecurity
    - technology

date: Tue Oct 27 2020 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Jesse Schrater

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto de Soluções Chefe, Setor Público, da Intel, e Jesse Schrater, Gerente de Segurança, Grupo de Plataformas de Dados, da Intel, discutem o cenário atual de segurança e como o SGX da Intel e o ecossistema de parcerias oferecem uma solução testada e oportuna para dados em uso e outras preocupações de segurança."
video: "https://youtu.be/2F1AgMncBjs"
description: "Darren Pulsipher, Arquiteto de Soluções Chefe, Setor Público, da Intel, e Jesse Schrater, Gerente de Segurança, Grupo de Plataformas de Dados, da Intel, discutem o cenário atual de segurança e como o SGX da Intel e o ecossistema de parcerias oferecem uma solução testada e oportuna para dados em uso e outras preocupações de segurança."
---

<div>
{% include transistor.html id="360a1ce9" title="#27 Hardware Security: Imperative for Transforming Data" %}

{% include youtube.html id="2F1AgMncBjs" %}
</div>

---

## Paisagem de Segurança de Dados

O mundo se tornou incrivelmente conectado com todos os dispositivos, e isso está impulsionando um crescimento exponencial na quantidade de dados que precisamos gerenciar: quanto maior o volume, maior o risco. É um desafio, e aproveitar novas capacidades de computação como nuvem, análise de dados e computação de borda acrescenta uma complexidade adicional.

Existem três tendências principais em segurança: criptografar tudo, isolamento de carga de trabalho e uma cadeia de confiança. Essas três áreas são importantes para ajudar organizações a lidar com requisitos regulatórios crescentes para manter os dados protegidos.

Quando as organizações decidem realizar uma transformação digital, ou com um catalisador como a COVID-19 que exigiu trabalhadores remotos, por exemplo, a segurança precisa estar de mãos dadas para manter os controles de segurança e conformidade em vigor. Se você abordar a segurança ao longo do caminho com suas implementações e implementações, mais você será capaz de transformar a maneira como você faz negócios de forma sustentável.

## Proteger os dados ao longo de todo o seu ciclo de vida

Criptografar dados é importante em todas as suas fases. Historicamente, os invasores conseguiam acessar os dados diretamente pela rede. Depois que eles foram criptografados, começaram a invadir os centros de dados e extrair dados dos bancos de dados. Então começamos a criptografar o armazenamento. Ainda assim, os dados chegam a um ponto final, são integrados à memória e descriptografados, portanto, um ataque sofisticado que obtivesse acesso root poderia potencialmente manipular ou roubar os dados nesse ponto de processamento. Esse ataque aos dados em uso é a nova fronteira para os invasores e aqueles que defendem o espaço. A Intel possui algumas capacidades novas e inovadoras que estamos incorporando em nossos processadores para ajudar os proprietários de dados, os proprietários de aplicativos, os provedores de serviços e, basicamente, todo o ecossistema a fechar essas vulnerabilidades potenciais.

## Por que proteger dados em uso?

Em muitos casos, os atacantes estão usando escalonamento de privilégios nas camadas do sistema operacional ou do hipervisor. Eles podem estar vindo através de um sistema operacional convidado, um sistema operacional hospedeiro ou até mesmo acesso físico ao hardware do servidor. Os atacantes podem ser intrusões clássicas de malware de hackers, concorrentes de terceiros ou pessoas internas, como administradores ou administradores de sistemas em um provedor de serviços.

## Extensões de Guarda de Software Intel (Intel SGX)

A Intel incorporou uma nova tecnologia em nossos processadores chamada Intel Software Guard Extensions, ou SGX. Isso faz parte do paradigma de computação confidencial que está explodindo no mercado agora, à medida que as empresas tentam transformar seus dados e mantê-los privados. O SGX enfrenta esses novos tipos de ataques permitindo que o aplicativo fale diretamente com o processador na memória criptografada, contornando o sistema operacional, o Hypervisor e essencialmente tudo o mais no sistema. Portanto, mesmo que haja uma violação no seu sistema operacional, Hypervisor ou outras aplicações, os invasores não seriam capazes de acessar esses dados porque o próprio sistema operacional não tem visibilidade desses dados. Portanto, você não precisa confiar no provedor ou no restante da pilha do sistema porque essencialmente opera como se eles já estivessem comprometidos, e seu código e dados permanecerão confidenciais e inalterados; eles terão integridade.

A Intel está tentando fazer com que você precise confiar no menor número possível de componentes. SGX vai mais longe nesse caminho para o centro de dados do que qualquer outra coisa que já vimos. Tudo que você precisa confiar é na sua própria aplicação e no próprio processador.

A SGX oferece uma capacidade poderosa para empresas como provedores de serviços em nuvem, que podem dizer a seus clientes que eles, ou o governo, por exemplo, não poderiam ter acesso aos seus dados, mesmo se quisessem fazê-lo.

## Intel SGX em Ação

A SGX já está sendo amplamente utilizada por provedores de serviços em nuvem e fornecedores de software, mas de certa forma, estamos apenas começando. Embora essa tecnologia esteja disponível há alguns anos, construímos ecossistemas e estamos trazendo novas capacidades em nossos futuros processadores Xeon Ice Lake de terceira geração. Isso irá expandir suas capacidades, sua capacidade de escalonar para cargas de trabalho empresariais de grande porte e será capaz de proteger partes muito maiores da memória com melhor desempenho e em todo um espectro muito mais amplo no centro de dados mainstream.

A Intel é um dos membros fundadores do Consórcio de Computação Confidencial, que faz parte da fundação Linux. A maioria dos grandes provedores de serviços em nuvem, muitos provedores de software e até mesmo nossos concorrentes de silício estão trabalhando juntos nessas soluções de ambiente de execução confiável e estabelecendo padrões para lidar com esse tipo de capacidade. Também estamos aumentando a conscientização sobre a necessidade e o valor comercial da computação confidencial.

## Ecosistema de Parceiros de Software Intel SGX

A SGX oferece muitas opções de uso, dependendo do que o proprietário dos dados procura. Se um cliente deseja o nível mais detalhado de controle, a SGX permitirá que eles façam isso. Na verdade, eles podem essencialmente reduzir sua aplicação apenas aos dados codificados que desejam manter isolados do restante do sistema, ou mesmo apenas uma parte dessa aplicação. No entanto, esse cenário requer que eles escrevam a aplicação com esse propósito. No ecossistema, existem recursos de código aberto que estão tornando esse tipo de desenvolvimento muito mais fácil, e está sempre expandindo.

Do outro lado está um movimento rápido de transferência direta. Você pode levar sua aplicação e inseri-la em um ambiente mais seguro. O ecossistema está respondendo e criando containers com consciência SGX. Você pode inserir sua aplicação sem modificações nesse ambiente, onde ela será a única coisa em execução, assim a própria aplicação pensa que está rodando em seu ambiente nativo.

Nossos parceiros de ecossistema têm feito muito progresso nessa área com coisas como Fortanix, Graphene e Scone. Alguns são de código aberto e outros são proprietários, mas vêm com todos os serviços já incluídos. Por exemplo, o Microsoft Azure Confidential Computing oferece toda a gama de soluções de lift and shift com SGX, até SDKs que permitem desenvolver sua aplicação diretamente para ele e implantá-lo em seu ambiente para que você nem precise gerenciar o hardware. Há um conjunto completo de opções, então ninguém deve ter medo das complexidades do SGX. Os clientes também devem ter confiança de que materiais sensíveis, como algoritmos de aprendizado de máquina ou chaves de criptografia, serão tratados com um nível de proteção muito granular.

## Computação confidencial: uma mudança revolucionária na segurança.

A SGX tem estado por aí há algum tempo e temos trabalhado para expandi-la. Ela foi testada e submetida a diversos desafios, com centenas de artigos de pesquisa e atualizações ao longo do tempo. Ela tem a vantagem de não ser a novidade do momento, mas sim uma solução fundamental que está sendo introduzida no mainstream com o Ice Lake. Não está mais focada em áreas pequenas e sensíveis, mas está pronta para enfrentar grandes desafios agora.

Governo, serviços financeiros e assistência médica são algumas das indústrias que perceberam o atrativo da SGX desde cedo, pois possuem muitas expectativas regulatórias e requisitos de privacidade, mas estão tentando compartilhar dados e realizar atividades inovadoras com várias partes. Empresas também enfrentam situações semelhantes, por exemplo, quando desejam migrar para a nuvem pública, mas não confiam nela para proteger seus dados sensíveis. Com a SGX, elas não precisam confiar no provedor.

A Intel acabou de fazer um grande anúncio este mês e estamos realmente abrindo todas as portas para o que está por vir. Um ótimo lugar para começar é intel.com/sgx para depoimentos e uma exploração mais aprofundada das informações. Os clientes devem procurar pelos parceiros do ecossistema, como Azure e Fortanix. Outro lugar para obter informações é o Confidential Computing Consortium, devido ao número de pessoas trabalhando nesse espaço.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
