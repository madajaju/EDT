---
layout: posts
title: "Controlador de memória definida por software de grande capacidade"
number: 21
permalink: episode-EDT21-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 21
tags:
    - bigmemory
    - edge
    - compute
    - technology
    - memverge
    - optane
    - pmem
    - data

date: Sun Sep 13 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Charles Fan

img: thumbnail.png
image: thumbnail.png
summary: "Charles Fan, CEO da MemVerge, conversa com Darren Pulsipher, Arquiteto-Chefe de Soluções, Setor Público, da Intel, sobre sua nova tecnologia, Big Memory - controladores de memória definidos por software. A tecnologia utiliza a memória persistente Intel 3D XPoint Optane para preencher eficientemente a lacuna entre arquiteturas atuais e futuras, fornecendo maior capacidade, menor custo e persistência."
video: "https://youtu.be/url"
description: "Charles Fan, CEO da MemVerge, conversa com Darren Pulsipher, Arquiteto-Chefe de Soluções, Setor Público, da Intel, sobre sua nova tecnologia, Big Memory - controladores de memória definidos por software. A tecnologia utiliza a memória persistente Intel 3D XPoint Optane para preencher eficientemente a lacuna entre arquiteturas atuais e futuras, fornecendo maior capacidade, menor custo e persistência."
---

<div>
{% include transistor.html id="0458954e" title="#21 Big Memory Software Defined Memory Controller" %}

{% include youtube.html id="url" %}
</div>

---

A tecnologia de memória persistente Optane 3D XPoint da Intel revolucionou a MemVerge, permitindo-lhes desenvolver uma memória definida por software, que eles descrevem como expressando o poder do Optane PMEM.

## A melhor forma de usar a PMEM

A MemVerge desenvolveu um software de Big Memory para atender à crescente demanda de aplicativos e empresas em processar dados em volumes e velocidades cada vez maiores. Mais aplicativos em tempo real necessitam de insights e ações instantâneas a partir dos dados. Isso requer uma nova infraestrutura orientada à memória para atender aos requisitos de latência.

Aplicações que utilizam AI, aprendizado de máquina ou análise de dados em tempo real de big data, por exemplo, geralmente usam DRAM. Embora a DRAM tenha uma latência em nível de nanossegundos e ofereça boa capacidade e desempenho, ela possui limitações físicas como densidade de memória e a quantidade que pode ser armazenada em um servidor. Além disso, é relativamente cara. Mais importante, é volátil e, à medida que os dados aumentam, a volatilidade da memória se torna uma restrição. PMEM supera essas limitações, pois permite ter maior capacidade, custo mais baixo e persistência.

Um benefício importante é que as empresas não precisam reescrever suas aplicações para usar a tecnologia da MemVerge. A empresa estava procurando a melhor maneira de usar a persistência, e a resposta foi fornecer o mínimo de interrupção aos paradigmas de programação. Quando o Optane PMEM se tornou disponível como formato de memória, isso foi uma oportunidade para desenvolver software valioso como parte da solução.

## Software Defined Memory: Memória Definida por Software

Há uma transformação de dados em andamento. Do ponto de vista de hardware, nos próximos dez anos, provavelmente haverá um mundo mais heterogêneo, tanto em termos de computação quanto de elementos de memória. Surgirá um novo tecido, como o CXL, que conectará esses elementos. O maior desafio será fazer com que o ecossistema de aplicativos se movimente. É necessário uma camada de software para transformá-lo em partes consumíveis e componíveis, o que tornará mais fácil para o aplicativo assimilar. A memória definida por software da MemVerge será um componente importante nesse espaço.

Enquanto isso, a MemVerge está construindo uma ponte entre os paradigmas atuais e futuros. A Memória definida por software da MemVerge traz SLA e QLS dinâmicos, resiliência, persistência de aplicativos, eficiência e desempenho. Essas são todas coisas que normalmente você obtém em uma rede de armazenamento definido por software, mas agora pode obter com a memória, com latência mais baixa e velocidade incrivelmente rápida.

## Desempenho na Máquina de Memória

Duas importantes propriedades intelectuais da MEMVerge estão em jogo. A primeira é uma camada de virtualização de software que otimiza o desempenho da memória - a combinação de PMEM e DRAM - que é muito próxima do desempenho da DRAM. Cada carga de trabalho possui perfis de desempenho diferentes que podem ser ajustados finamente misturando PMEM e DRAM em diferentes proporções. Esse ajuste fino de PMEM e DRAM proporciona aos desenvolvedores de aplicativos e profissionais de TI a capacidade de ajustar a memória de suas aplicações em vez de ajustá-la para toda a máquina. Em vez de configurar as proporções existentes de DRAM e PMEM para toda a máquina, agora é possível alterar dinamicamente as proporções de PMEM e DRAM dependendo da carga de trabalho e até mesmo superar o desempenho da DRAM.

## ZeroIO Instantâneo (Persistência de Dados da Aplicação)

O segundo desses inventos são os instantâneos de memória ou ZeroIO. Ele pode persistir aplicativos transitórios existentes sem a necessidade de quaisquer reescritas. Funciona em cima da memória definida por software, que é um serviço de memória volátil. Mesmo que o PMEM subjacente seja persistente, é necessário ter uma memória volátil para evitar a interrupção de aplicativos existentes. A persistência é aproveitada através do fornecimento de uma interface gráfica ao operador da aplicação e CI para gerenciar os instantâneos. Existe uma funcionalidade de instantâneo, então você pode capturar instantaneamente o estado de um aplicativo inteiro. Em seguida, esse aplicativo pode ser recuperado a qualquer momento no futuro.

Isso torna sua memória não apenas persistente, mas altamente disponível. Após uma falha, você pode realizar uma recuperação instantânea. Se você cometer um erro no banco de dados, pode voltar a um ponto anterior. Você também pode clonar em cima do instantâneo, criando novas instâncias de um aplicativo sem replicar fisicamente a memória. Assim, você pode criar vários processos independentes e os espaços de memória lógica mapeando para o mesmo espaço físico de memória. Isso não apenas economiza memória, mas torna o processo de criação de clones instantâneo. Essa nova tecnologia torna muitas coisas que antes eram impossíveis possíveis.

Não há alterações arquitetônicas no seu programa, mas quando você precisa persistir algo, pode simplesmente fazer um snapshot disso. Isso não altera o modelo familiar de programação, mas acelera muito a entrada/saída de dados. Outro ótimo recurso é que os snapshots se tornam objetos gerenciáveis, então podem ser transportados para qualquer lugar onde você possa reiniciar a aplicação. A migração em tempo real também pode ser habilitada em determinados cenários.

## Casos de uso habilitados para o futuro.

Para uma espiada no futuro, a MemVerge está planejando uma versão 2.0 em cerca de um ano que terá um SDK. Além de usá-lo como uma camada de memória transparente, novos desenvolvedores de aplicativos terão uma nova forma de persistir seus dados. Isso facilitará o desenvolvimento de aplicativos, assim como a modificação de aplicativos existentes.

Com o SDK, os desenvolvedores serão capazes de capturar segmentos da memória do aplicativo ou o perfil completo da memória, proporcionando ao desenvolvedor de aplicativos a capacidade de persistir a memória com as tecnologias de ORM ou mapeamento de memória complicadas de hoje.

Em parceria com a Intel, a MemVerge lançará a primeira versão de seu produto com a memória definida por software e as capacidades de snapshot para disponibilidade geral em 23 de setembro de 2020.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
