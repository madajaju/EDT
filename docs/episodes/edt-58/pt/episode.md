---
layout: posts
title: "Compreensão dos Problemas da Borda ao Data Center"
number: 58
permalink: episode-EDT58-pt
lang: pt
nav_exclude: true
nav_order: 58
tags:
    - 5g
    - iot
    - edgecomputing
    - cybersecurity
    - datamanagement
    - cloudcomputing
    - multicloud
    - zerotrust
    - technology
    - process
    - policy

date: 2021-07-22T00:00:00.000Z
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto-chefe de Soluções, Intel, descreve os problemas comuns em arquiteturas de borda para data center que ele observou e discutiu com clientes do setor público. Ele apresenta a arquitetura ideal para resolver essas questões."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquiteto-chefe de Soluções, Intel, descreve os problemas comuns em arquiteturas de borda para data center que ele observou e discutiu com clientes do setor público. Ele apresenta a arquitetura ideal para resolver essas questões."
---

<div>
{% include transistor.html id="51a240b0" title="#58 Understanding Edge to Data Center Problems" %}

{% include youtube.html id="url" %}
</div>

---

## Integração de Missão

Existem muitas partes móveis ao colocar capacidades em missão, especialmente no Departamento de Defesa, mas também nos hospitais de Assuntos de Veteranos, Segurança Interna, FDA e FEMA, por exemplo, e transferir os dados de dispositivos de borda de volta para estações terrestres e centros de dados regionais e corporativos. Os dados precisam ser utilizáveis ​​e confiáveis ​​para grandes fluxos de análises em fluxos de trabalho de IA e nas mãos dos analistas para tomar decisões com base nos dados brutos.

## Controladores para o Edge: Latência, Largura de Banda, Segurança, Conectividade

Parte do quebra-cabeça é que os dispositivos de ponta se tornaram mais sofisticados e estão reunindo mais dados do que jamais poderíamos enviar para o 5G. As esperanças de que o 5G conquistasse todos os dados e os tornasse perfeitamente disponíveis para o datacenter nunca se concretizaram com os avanços dos dispositivos de IoT.

Uma das arquiteturas originais em torno da IoT foi desenvolvida pela Cisco, chamada de "neblina" (fog, em inglês). A ideia da neblina era que o datacenter conectasse a neblina aos dispositivos de borda, para que parte do processamento e conectividade ocorressem ali. Se a conectividade de rede for confiável e consistente, isso funciona bem, desde que haja largura de banda suficiente. No entanto, a quantidade de dados gerados atualmente nas bordas por essas organizações supera qualquer quantidade de largura de banda disponível.

Com IoT, apenas uma parte dos dados é movida para o centro de dados, então, geralmente, o valor dos dados só ocorre quando eles são analisados lá. O problema é que o centro de dados não consegue armazenar e processar todos os grandes conjuntos de dados. Mesmo enviando para a nuvem, o problema não é resolvido, já que a nuvem não consegue processar todos os dados que estão na ponta. Portanto, queremos deixar de enviar todos os dados para o centro de dados para coletar o valor, e em vez disso, enviar o valor dos dados o mais próximo possível da ponta, diminuindo a quantidade de dados que retornam para o centro de dados.

Claro, nem todos os dados podem ser transferidos para a borda; deve haver uma correlação entre diferentes dispositivos de borda. O valor precisa estar em um lugar mais centralizado, não necessariamente no centro de dados central, mas talvez em uma dessas névoas intermediárias ou centros de dados regionais. A chave é mover dados de forma inteligente e empurrar o valor dos dados o mais próximo possível da borda de maneira repetitiva e sustentável. Ao fazer isso, podemos reagir muito mais rapidamente à borda.

## Camada física comum

Para superar alguns desses problemas, primeiro precisamos de uma camada física comum. Isso significa que é comum desde o datacenter até as camadas de neblina até os dispositivos periféricos; há um modo de gerenciar e controlar os dispositivos e obter ajuda deles de maneira confiável e comum. Isso não necessariamente significa a mesma máquina, mas um dispositivo mínimo viável com uma interface comum. Outra vantagem da camada física comum é que, se você escrever código para um aplicativo, ele pode ser executado em qualquer lugar nesse ecossistema. A Intel possui algumas ótimas tecnologias para isso, como o oneAPI, que realiza grande parte do trabalho para que você possa escrever o código uma vez, compilar os binários para os diferentes tipos de dispositivos, enviá-lo para a camada física comum e ele será executado adequadamente. Em resumo, os benefícios são um modelo operacional comum, um modelo de segurança comum e um modo de operação de escrever uma vez e executar em qualquer lugar.

## Infraestrutura Definida por Software

A SDI (Infraestrutura Definida por Software) se aplica ao datacenter em nuvens privadas e públicas com suas APIs definidas por software. Com a SDI na borda, obtemos maneiras comuns de mover dados. Podemos provisionar recursos na borda do datacenter a qualquer momento e podemos mover dados dessa forma de maneira mais integrada.

## Camada de Gestão de Informações Distribuídas

Precisamos ser mais inteligentes na gestão e classificação de dados, movendo os dados apenas para onde serão processados, seja na borda, em um datacenter regional ou na nuvem. Aspectos importantes são catalogar e reutilizar dados e se adequar às exigências de conformidade e segurança. O benefício dessa camada de gerenciamento de informações distribuídas é que você está enviando menos dados para o datacenter, movendo menos dados e proporcionando valor à borda.

## Camada de Gerenciamento de Serviço

Para realmente fazer com que o valor seja transmitido para a borda, precisamos ser capazes de implantar aplicativos na borda. É aqui que entra uma camada de gerenciamento de serviços, ou ecossistema de contêineres. Isso permite o envio de microserviços para a borda, a névoa, o datacenter ou a nuvem de maneira repetível e confiável. Se um datacenter regional, por exemplo, parar de funcionar, você não precisa depender dele para que a malha de serviços continue operando.

## Camada de Serviço de Aplicação

Uma camada de serviço de aplicação coordena as diferentes aplicações para que seja possível criar fluxos de trabalho que gerem o verdadeiro valor comercial a partir dos dados. Apenas mover os dados ou processá-los através de um Motor de Análise não é o suficiente. Os dados devem ser transferidos do Motor de Análise para uma estação de trabalho de analista. Algumas ferramentas nesta camada incluem automação de processos robóticos e pipelines de DevOps. É também onde é possível aplicar segurança e conformidade na camada de aplicação.

## Segurança e camadas de identidade.

O aspecto-chave da camada de identidade é estabelecer confiança entre entidades que estão devidamente identificadas. Devemos entender quem está acessando o quê e quais dispositivos estão acessando quais dados, em que momento e onde. A identidade vai além do usuário típico e abrange a identidade de aplicativos, dispositivos de borda, de névoa, de datacenters e de nuvem.

O irmão gêmeo da identidade é a segurança. Aqui temos detecção, remediação, criptografia e estabelecimento da raiz da confiança. Isso resulta em confiabilidade, dados confiáveis e conformidade. Agora, dados inteligentes podem ser enviados às bordas e depois populados no centro de dados, mas você não está movendo grandes quantidades de dados brutos, apenas o necessário de maneira segura.

## Visão de Alto Nível.

Para ter uma arquitetura bem-sucedida do edge para a nuvem, que seja repetível, todos esses elementos diferentes são necessários. Já vimos algumas organizações construírem uma arquitetura do edge para a nuvem especificamente projetada e, quando elas implantam uma nova capacidade nesse ambiente, ficam presas. Por exemplo, se eles codificarem os dados residindo no edge porque sempre irão processar no edge, ou no datacenter para um aplicativo que sempre processa no datacenter, isso resulta em rigidez. Isso também aumenta o tempo necessário para implantar novas capacidades, talvez anos em vez de meses. Se tirarmos as lições aprendidas com as implantações de aplicativos do edge para a nuvem repetidamente e começarmos a generalizar, rapidamente descobriremos que elas se encaixam em uma das camadas que identificamos.

Para obter mais informações, consulte este artigo (inserir link) sobre a visão de alto nível dessa arquitetura de borda para nuvem. Não estamos prescrevendo o que cabe nessas caixas, mas a chave é entender os casos de uso que eles abrangem. Temos ideias sobre o que está em cada uma das camadas e estamos desenvolvendo ecossistemas para atender às necessidades exclusivas da sua organização dentro dessas camadas.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
