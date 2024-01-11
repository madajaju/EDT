---
layout: posts
title: "Mitos da Migração de Nuvem Lift and Shift"
number: 112
permalink: episode-EDT112-pt
has_children: false
lang: pt
nav_exclude: true
parent: Episodi
grand_parent: Português
nav_order: 112
tags:
    - multicloud
    - cloudmigration
    - cloud
    - compute
    - process
    - technology

date: Mon Nov 14 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - John Evans

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect, Setor Público, Intel, e John Evans, Consultor Chefe de Tecnologia, WWT, discutem cinco mitos sobre a migração de nuvem lift and shift."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solutions Architect, Setor Público, Intel, e John Evans, Consultor Chefe de Tecnologia, WWT, discutem cinco mitos sobre a migração de nuvem lift and shift."
---

<div>
{% include transistor.html id="cfd34037" title="#112 Myths of Lift and Shift Cloud Migration" %}

{% include youtube.html id="url" %}
</div>

---

João começou sua carreira em tecnologia no help desk de um empreiteiro principal de defesa há 20 anos. À medida que sua carreira progredia, ele se envolveu com cibersegurança e arquitetura empresarial. Ele trabalhou como contratado para a Agência de Sistemas de Informação de Defesa (DISA), onde foi o arquiteto principal para a nuvem DISA do Departamento de Defesa. Eventualmente, o estado de Maryland o contratou para liderar os esforços de transformação digital para o estado, incluindo migração para a nuvem. Essa migração foi a maior já feita em educação estadual e local.

Depois disso, ele fez a transição para o cargo de Diretor de Segurança da Informação do Estado (CISO), supervisionando operações de alto nível, segurança e governança. Ele deixou o serviço público e ingressou na WWT há cerca de três anos. Ele trabalha principalmente na área de educação estadual e local, embora auxilie em outras áreas do setor público.

## Mito Um - A nuvem é mais barata

A nuvem não necessariamente é mais barata do que um ambiente local. As aplicações antigas foram desenvolvidas para o ambiente local, então não há problema com auto-scaling. É um modelo baseado em consumo, e já existem custos afundados, como os servidores. A maioria dos produtos feitos para auxiliar organizações a mover aplicações para a nuvem não suportam auto-scaling, então quando são forçados a usar a nuvem, eles têm que ser provisionados em sua capacidade máxima o tempo todo, o que geralmente não se traduz em economia de custos. É provável que os clientes estejam pagando mais do que pagavam pelas mesmas capacidades no ambiente local.

Quando Darren trabalhava com o governo canadense, eles moveram uma instância do SAP para a nuvem. Ela foi completamente provisionada, rodando 24/7, e eles ultrapassaram o orçamento em apenas seis meses. Quando descobriram esse problema, eles começaram a ligar e desligar a instância todos os dias, já que ela não precisava rodar 24/7. Eles economizaram muito dinheiro reduzindo para 14 a 16 horas por dia.

O acesso deve estar disponível o tempo todo em um departamento como o de Saúde e Serviços Humanos, que geralmente é o maior em um orçamento de TI do estado, mas é possível reduzi-lo para uma instância menor durante os horários de folga para economizar dinheiro.

Os Provedores de Serviços em Nuvem (CSP) agora oferecem serviços nativos em nuvem que estão sendo atendidos por um aplicativo de terceiros ou produto OEM que pode fornecer uma capacidade similar com economia de custos. Isso não funcionará para tudo, pois algumas aplicações legadas não são desenvolvidas para aproveitar algumas das aplicações nativas em nuvem. Seria melhor ter cuidado ao ficar preso a uma nuvem específica. Por exemplo, se você usar serviços AWS proprietários, pode ser desafiador extrair um aplicativo e movê-lo para o Azure e vice-versa.

John aconselha organizações a perguntar se faz sentido migrar para a nuvem. Não é uma boa razão para migrar para a nuvem apenas porque você acha que deveria. Você pode acabar com despesas elevadas e superiores e trabalhadores frustrados, pois a estratégia não foi completamente pensada.

## Mito Dois - A Nuvem Apaga Dívida Técnica

Migrar para a nuvem não elimina a dívida técnica em quase todos os casos. Ela expõe e acelera a dívida. Você encontrará pontos de exposição ao mover algo que está em funcionamento há 30 anos para um novo ambiente. A parte da aceleração é que agora você tem uma dívida técnica maior com a qual se preocupar, uma vez que ela está exposta.

Dívida técnica significa que você tem sistemas ficando para trás do que deveriam ser. Por exemplo, quando John começou a trabalhar para Maryland, alguns sistemas ainda estavam rodando em telas verdes. Era fácil para os funcionários atuais navegar, mas tinha uma curva de aprendizado íngreme para novos usuários. Embora o sistema estivesse funcionando há muitos anos, a desvantagem dessa dívida técnica é a quantidade de treinamento necessário e a retenção de funcionários. As gerações mais recentes que estão entrando no mercado de trabalho, e que possuem conhecimentos sobre as últimas tendências e desenvolvimentos, não querem lidar com aplicações legadas.

Dívida técnica também significa problemas de segurança. Se uma aplicação legada não foi atualizada, você pode não conseguir aplicar correções por medo de quebrá-la. Isso cria vulnerabilidades de segurança que você deve aceitar até sair do ciclo de dívida técnica.

Uma reação comum em uma organização é adicionar um pouco de código extra quando necessário para acomodar, por exemplo, uma mudança de regra de uma legislatura estadual. Isso não resolve um problema; em vez disso, o sistema acaba com um monte de código desorganizado, tornando impossível recriar o sistema para uma atualização. Um dos conceitos na nuvem é dividir o sistema em módulos ou microsserviços, mas o código desorganizado não permite isso, já que não é possível simplesmente remover uma parte dele.

Isso faz com que as organizações fiquem ainda mais relutantes em modernizar, porque elas têm feito as coisas da maneira errada por todos esses anos. Quando algo se quebra e se torna o ímpeto para essa mudança, fica ainda mais desafiador.

Às vezes, pode ser sensato descartar o antigo sistema e começar do zero. Isso é custoso, e você precisa ter o novo sistema antes de descartar o antigo. No entanto, para algumas organizações, como estados, que podem receber financiamento federal para departamentos como Saúde e Serviços Humanos, essa pode ser a melhor escolha. Em uma situação como essa, você também pode avaliar os benefícios da reutilização, como modelos e estruturas de governança para outros departamentos.

## Mito Três - A Nuvem é Segura

Mudar para a nuvem não necessariamente torna mais fácil garantir a segurança das aplicações, embora você não precise se preocupar com a segurança física ou hipervisores, por exemplo. Os provedores de nuvem possuem um modelo de responsabilidade compartilhada em várias formas. Você precisa entender pelo que é responsável com cada provedor e pelo que eles são responsáveis. Isso não muda apenas com o provedor, mas também com os serviços que você consome. Isso pode tornar a segurança mais complexa para suas equipes de segurança, pois elas precisam acompanhar todas as diferentes variações entre provedores e serviços.

## Mito Quatro - A Nuvem é Fácil

A migração para a nuvem é complexa. Na verdade, é mais fácil executar tudo em seu próprio data center, sem conexão com a internet. A segurança é fácil dessa maneira e os modelos de custo são simples. No entanto, você não pode crescer. Você não pode fornecer serviços aos seus constituintes ou clientes, e não pode satisfazer as necessidades da missão, entre outras questões. O mundo é complexo e a migração para a nuvem é complicada.

## Mito Cinco - Uma nova habilidade não é necessária.

Uma lacuna de conhecimento também pode aumentar os pontos problemáticos em torno dessa complexidade. Desenvolvedores de software e outros especialistas em TI devem mudar sua forma de pensar sobre computação na nuvem, especialmente em relação à segurança. Por exemplo, os desenvolvedores de software não devem criar instâncias na nuvem onde desejarem ou baixar coisas do GitHub ou de outros repositórios, pegando bibliotecas para fazer as coisas funcionarem. Isso abre todas as regras de firewall porque eles podem não escolher corretamente. Devem ser implementadas medidas de segurança ao mudar para a nuvem, o que exige mudança. Trabalhar na nuvem requer um conjunto de habilidades e uma mentalidade diferentes. Mais importante ainda, é preciso descobrir melhores maneiras de gerenciar a segurança com ransomware sofisticado e ataques cibernéticos.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
