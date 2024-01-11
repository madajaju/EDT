---
layout: posts
title: "Microsegmentação baseada em identidade com Elisity"
number: 102
permalink: episode-EDT102-pt
has_children: false
lang: pt
nav_exclude: true
parent: Episodi
grand_parent: Português
nav_order: 102
tags:
    - microsegmentation
    - otsecurity
    - identitybasednetworking
    - cybersecurity
    - comms
    - technology
    - edge
    - sdn

date: Wed Aug 24 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Dana Yanch
    - Dan Demers

img: thumbnail.png
image: thumbnail.png
summary: "Na parte 2 de Segurança com Elisity, Darren discute soluções de microssegmentação baseada em identidade com Dana Yanch, Diretora de Marketing Técnico, e Dan Demers, Arquiteto Técnico."
video: "https://youtu.be/url"
description: "Na parte 2 de Segurança com Elisity, Darren discute soluções de microssegmentação baseada em identidade com Dana Yanch, Diretora de Marketing Técnico, e Dan Demers, Arquiteto Técnico."
---

<div>
{% include transistor.html id="f7d12ab8" title="#102 Identity-based Micro-segmentation with Elisity" %}

{% include youtube.html id="url" %}
</div>

---

Na parte 2 de Segurança com Elisity, Darren discute soluções de microsegmentação baseada em identidade com Dana Yanch, Diretora de Marketing Técnico, e Dan Demers, Arquiteto Técnico.

A abordagem da Elisity à segurança de rede difere das arquiteturas tradicionais pela forma como é entregue, distribuída pela rede e feita de maneira eficiente, fornecendo um valor de tempo rápido. Eles têm se concentrado em torná-la o mais simples, intuitiva e eficaz possível, para que qualquer segmento da indústria possa aproveitar a tecnologia.

A chave para a tecnologia da Elisity é a microsegmentação, o que significa a capacidade de isolar completamente qualquer usuário, dispositivo ou aplicativo, não importa o tipo de rede em que esteja, onde esteja localizado na rede ou se é gerenciado ou não gerenciado. Em outras palavras, é flexível para isolar um ativo do outro, sem restrições impostas pela arquitetura de rede ou construções como VLANs ou VRFs.

Sistemas tradicionais de micro-segmentação, que exigem a substituição de hardware ou a instanciação de um dispositivo local, podem levar meses ou anos para serem implementados e executados. No entanto, a Elisity oferece funcionalidade completa em uma semana, ao adotar uma plataforma de micro-segmentação nativa em nuvem e entregue na nuvem. Todos os controles de gerenciamento e políticas são totalmente entregues na nuvem, e o componente que se conecta à sua rede local é 100% software. Você não precisa alterar nada em seu ambiente local, pois ele opera em cima da sua infraestrutura existente. Ele escala bem, é fácil de gerenciar e é distribuído dinamicamente.

Elisity também oferece uma solução localizada para o espaço OT, onde as organizações podem mantê-la atrás de sua DMZ e cortar todo o acesso.

A plataforma da Elisity é um serviço micro no sentido da escalabilidade horizontal. Você pode começar pequeno e adicionar 10.000 coisas à rede e dimensionar com você, seja localmente ou na nuvem. É completamente automatizada em toda a rede. Há pouco atrito e é fácil de gerenciar a longo prazo.

Uma diferença significativa entre a plataforma da Elisity e outras redes overlay é que a Elisity lida com o plano de controle e política em vez do plano de dados. Ela pode aplicar o mesmo nível de granularidade de segurança de rede sem tocar em nenhum pacote. Ela informa dinamicamente à rede quem pode falar com quem com base nos atributos e identidades encontrados na rede.

Um triângulo de usuários, aplicativos e dispositivos é uma excelente forma de visualizar isso. Dentro desse triângulo estão todas as linhas de comunicação entre eles se conectando. A Elisity pode proteger cada linha, ou canal, entre usuários, aplicativos e dispositivos com granularidade. Isso ocorre na camada de controle de rede. No momento em que o tráfego atinge a primeira aresta, ele está sendo protegido.

A segurança é essencial na camada de rede e não na camada de aplicação porque pode haver dezenas de milhares de dispositivos em sua rede nos quais você não pode instalar um agente ou modificar, já que possuem sistemas operacionais incorporados, câmeras, leitores de crachá e pessoas. Isso é especialmente importante no lado de OT.

Com a OT, o foco está na disponibilidade e integridade. As coisas precisam continuar funcionando de forma segura, pois o processo pode representar uma infraestrutura crítica. Isso é diferente da TI, onde é possível isolar e iniciar uma nova instância se houver uma intrusão. A OT é uma mentalidade diferente. Enquanto algo pode existir na TI por seis meses ou um ano, algo na OT pode existir por 20 anos. Muitas vezes, essas infraestruturas são mantidas ou atualizadas a cada poucos anos ou ficam inativas até ocorrer um evento de falha. A segurança equivale a restringir a conectividade. Por exemplo, se você estiver em uma VLAN, isso não significa que você deve estar se comunicando com um RTU, um sensor, um HMI ou um DCS que estejam apenas um switch de distância. No design legado, se essas coisas estiverem na mesma VLAN, não há uma maneira eficiente e flexível de impedi-las de se conectar.

Com o sistema da Elisity, você estabelece políticas com base em coisas que agrupam atributos associados aos ativos, em vez de passar item por item. Isso pode ser tão simples como agrupar todos os seus processos para que possam se comunicar apenas no sentido norte/sul, e não leste/oeste, ou, por exemplo, permitir que gerentes de linha compartilhem com seis ou sete tipos de coisas. Duas ou três políticas podem reduzir rapidamente sua superfície de ataque de 65.000 portas de ataque potenciais para duas ou três.

Um caso de uso comum em redes de OT é quando um fornecedor realiza uma atualização em um dispositivo, é necessário permitir que eles entrem e tenham acesso a toda a rede. Com a Elisity, você pode facilmente dar a eles acesso por um tempo limitado e permitir que eles interfiram em ativos fixos.

Suponha que você queira saber mais sobre a tecnologia da Elisity. Nesse caso, muitos recursos, incluindo vídeos, white papers e documentos, explicam como a solução funciona e como ela poderia ser aplicada em uma semana na sua rede em Elisity.com.

Confira o episódio anterior desta série [aqui](episode-EDT101).



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
