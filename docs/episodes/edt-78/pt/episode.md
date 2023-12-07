---
layout: posts
title: "Entendendo o Modelo de Segurança de Responsabilidade Compartilhada."
number: 78
permalink: episode-EDT78-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 78
tags:
    - multicloud
    - compute
    - cybersecurity
    - sharedresponsibility
    - cloudsecurity
    - cloud
    - technology
    - process

date: Wed Feb 23 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto-Chefe de Soluções da Intel, explica os modelos de segurança de responsabilidade compartilhada. Quem é responsável pela segurança pode se tornar incerto na nuvem; a responsabilidade depende dos modelos de entrega de serviços em nuvem e de outros fatores."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquiteto-Chefe de Soluções da Intel, explica os modelos de segurança de responsabilidade compartilhada. Quem é responsável pela segurança pode se tornar incerto na nuvem; a responsabilidade depende dos modelos de entrega de serviços em nuvem e de outros fatores."
---

<div>
{% include transistor.html id="975c761c" title="#78 Understanding the Shared Responsibility Security Model" %}

{% include youtube.html id="url" %}
</div>

---

## Segurança na Nuvem

A maioria das pessoas entende a responsabilidade da segurança no local, mas a responsabilidade se torna menos clara na nuvem. Se os dados estão protegidos na nuvem, como eles estão protegidos? Quem é responsável por essa segurança? E quanto à atualização das máquinas?

Recentemente, os provedores de serviços em nuvem começaram a oferecer ainda mais serviços, então existem vários modelos. Às vezes, a segurança acaba se perdendo no meio.

## Áreas de segurança

Existem quatro áreas principais de segurança que precisamos entender.

## Físico

A segurança física é a parte fácil de reconhecer. Os provedores de serviços em nuvem são responsáveis pela segurança física de seus centros de dados, e você é responsável pela segurança física de seus próprios centros de dados. Além disso, você deve garantir a segurança do seu espaço físico. Se você é um fabricante, por exemplo, deve garantir a segurança das máquinas dentro de sua área. Um ataque recente ocorreu por meio do sistema HVAC que estava conectado à rede de uma organização.

## Infraestrutura

A segurança da infraestrutura não é o aspecto físico, mas sim o próprio hardware. Os switches da sua rede possuem os patches e atualizações de segurança corretos? Os dispositivos de armazenamento e unidades estão sendo atualizados? Estão sendo protegidos? A infraestrutura pode entrar em áreas cinzentas com os provedores de serviços na nuvem, então você deve saber quem é responsável por quê e em quais circunstâncias.

## Aplicação

Para segurança de aplicativos, é preciso saber quem tem acesso a um aplicativo e se ele está sendo atualizado com os patches de segurança corretos.

## Data

Proteger seus dados é uma das coisas mais importantes que você deve fazer. Os dados podem, na verdade, ser usados como arma em um ataque de ransomware, onde os invasores os roubam ou os criptografam. Também estão sendo usados como uma vantagem competitiva poderosa em diferentes organizações. Você deve saber onde seus dados estão e como protegê-los.

## Modelos de Entrega de Serviço em Nuvem

Existem três modelos básicos de entrega em nuvem. Diferentes modelos são criados o tempo todo, mas os três principais são Infraestrutura como Serviço (IAAS), Plataforma como Serviço (PAAS) e Software como Serviço (SAAS). Vamos categorizar tudo o mais como X como Serviço (XAAS).

## Infraestrutura como Serviço

IAAS é quando você está alugando de um provedor de serviços em nuvem. Isso envolve máquinas virtuais e redes virtuais, como armazenamento, processamento e rede. Também estamos começando a ver coisas interessantes com aceleradores, como GPUs ou até mesmo processadores neuromórficos. IAAS é onde você executa suas aplicações.

## Plataforma como Serviço

A próxima camada acima da pilha é PAAS. Aqui é onde você obtém um certo framework, como o Kubernetes, para executar as coisas. O VMware funcionando em cima do IAAS é PAAS. Pipelines CICD como serviço possuem muitas ferramentas que se encaixam nesse espaço. PAAS permite que você construa e implemente novos serviços em cima dessa plataforma, para que você possa facilmente implantar e gerenciar sistemas grandes que são construídos em cima do IAAS.

## Software como serviço

Próximo é SAAS. Este é um software específico que é gerenciado pelo provedor de software ou pelo provedor de serviços em nuvem, ou pode ser uma oferta de SAAS de terceiros para outra pessoa. O importante com o SAAS é que eles são responsáveis pela segurança do aplicativo. Eles gerenciam o tempo de atividade e todas as áreas gerenciais, como confiabilidade, segurança e integridade. Muitos dos programas de SAAS são construídos em cima de plataformas PAAS.

## X como serviço

XAAS pode ser qualquer novo serviço, como inteligência artificial, gerenciamento de dispositivos ou detecção de segurança.

Compreender esses diferentes modelos de entrega é importante porque os modelos de segurança compartilhados dos provedores de serviços em nuvem são baseados no modelo de entrega.

## Domínios cibernéticos

Cada um dos seis pilares da segurança cibernética, como identificados por Steve Warren, CTO da Intel em um podcast anterior, é importante, quer você esteja na nuvem, no local ou na borda. Os seis pilares são detecção de ameaças, inteligência, análise e orquestração; gerenciamento de identidade e acesso; segurança de dados e aplicativos; segurança de rede; segurança da cadeia de suprimentos; e segurança de hospedeiros e sistemas. Todos esses seis domínios se encaixam no modelo de segurança de responsabilidade compartilhada que os provedores de serviços em nuvem estão defendendo.

## Matriz de Segurança de Responsabilidade Compartilhada

Essa responsabilidade compartilhada é ilustrada na matriz. As técnicas de entrega do modelo de serviço estão no eixo vertical: SAAS, PAAS, IAAS e on-prem. Se você estiver hospedando por conta própria, tudo à extrema direita é de sua responsabilidade.

Do lado do IAAS, você é totalmente responsável pela segurança dos dados e das aplicações, e metade responsável pela infraestrutura, pois você ainda é responsável pelo controle de rede e sistema operacional. O provedor de serviços em nuvem é responsável pela rede física e pelo hospedeiro.

Na camada do PAAS, você ainda é responsável pela segurança dos dados e tem meia responsabilidade pela segurança do aplicativo, identidade e infraestrutura de diretório. Existem algumas ferramentas disponíveis para ajudar nessas áreas. Embora você seja responsável pelos aplicativos e suas plataformas, eles são responsáveis pelos frameworks e middleware que estão sendo fornecidos. Embora a maioria do sistema operacional seja cuidada pela camada do PAAS e eles forneçam algumas ferramentas de nível superior, você ainda é responsável por configurar os controles de rede.

Até o topo da pilha em SAAS, mesmo que você esteja utilizando armazenamento como serviço, dados como serviço ou um CRM como o Salesforce, você ainda é responsável pelos seus dados, pois ainda precisa projetar e criptografar seus backups e gerenciar contas e identidades.

Um ponto-chave em todos os modelos é que você é responsável pela segurança dos seus dados; nunca há um cenário em que você deixe toda a segurança nas mãos dos provedores de serviços em nuvem. Você deve fazer o backup e perguntar se está usando armazenamento de objeto para poder reverter um ataque de ransomware, se está mantendo corretamente o gerenciamento de acesso e se está utilizando ferramentas que facilitam esse processo.

## Diferentes Abordagens para Segurança

Cada um dos três principais provedores de serviços em nuvem adota uma abordagem diferente quanto à segurança, especialmente em relação à configuração de rede.

## As seguintes: AWS

A AWS foca na prevenção. Quando você cria uma VM, a configuração padrão é não ter nenhuma porta aberta, então você precisa criar grupos de segurança. A AWS é a mais restritiva, utilizando IAM para gerenciamento de identidade. A AWS é ótima para equipes de médio porte, mas não se sai tão bem para organizações muito grandes.

## Azure

Azure se concentra mais na facilidade de uso; a segurança é menos restritiva. Eles utilizam o conceito de redes virtuais para a segurança, então todas as Máquinas Virtuais (VMs) na mesma rede virtual podem se comunicar entre si nessa rede. Isso é o oposto da abordagem de confiança zero, então você precisa decidir o que é mais importante para você. O Azure utiliza o Active Directory, então se você já possui um Active Directory maduro e substancial, essa é uma boa forma de gerenciamento de identidade.

## Google Cloud Platform

A Google Cloud Platform também se concentra na facilidade de uso, mas eles apostam em máquinas virtuais (VMs) e segurança de rede. Você pode ter perfis que restringem totalmente tudo em uma VM, ou pode ter um perfil que abre um pouco mais. Eles estão no meio do caminho em termos de restrições. Embora não seja tão robusto quanto AWS ou Active Directory, o GCP possui um bom gerenciamento de identidade.

Todos os três provedores de serviços em nuvem oferecem IAAS, PAAS, SAAS, Contêiner como Serviço e uma variedade de XAAS. Você deve avaliar o modelo de segurança e entender as diferenças em cada um.

Em alguns aspectos, entender o modelo de segurança de responsabilidade compartilhada é mais difícil do que apenas executar as coisas localmente, pois agora há mais participantes envolvidos e a complexidade aumenta. A chave está em compreender os modelos e utilizar as ferramentas disponíveis para ajudar a gerenciar a segurança em várias nuvens.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
