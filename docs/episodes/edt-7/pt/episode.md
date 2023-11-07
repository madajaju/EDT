---
layout: posts
title: "Garantindo a segurança do trabalhador remoto"
number: 7
permalink: episode-EDT7-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 7
tags:

date: Mon Jul 13 2020 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Com a enorme mudança de pessoas que agora trabalham em casa em vez do escritório, a segurança é uma preocupação crescente para muitas organizações de TI. Neste episódio, Steve Orrin, CTO da Intel Federal, e Darren discutem as ameaças de segurança e soluções para ajudar a proteger seu teletrabalhador e os centros de dados corporativos."
video: "https://youtu.be/Fjez8L0h2M4"
description: "Com a enorme mudança de pessoas que agora trabalham em casa em vez do escritório, a segurança é uma preocupação crescente para muitas organizações de TI. Neste episódio, Steve Orrin, CTO da Intel Federal, e Darren discutem as ameaças de segurança e soluções para ajudar a proteger seu teletrabalhador e os centros de dados corporativos."
---

<div>
{% include transistor.html id="edt7" title="#7 Securing the Teleworker" %}

{% include youtube.html id="Fjez8L0h2M4" %}
</div>

---

## Modos de operação de teletrabalho <h2>

Os modos de operação de teletrabalho não são novos, seja usando um dispositivo como terminal (VDI), parte da rede interna ou como um portal para serviços/software (SAAS); o que é novo é o grande volume de funcionários, contratados e parceiros que agora estão usando os ambientes existentes para realizar seu trabalho principal, ao invés de apenas um número limitado e gerenciável. A segurança é um desafio em todos esses modos de operação. As organizações precisam descobrir a melhor forma de implantar suas capacidades existentes para garantir e proteger o acesso, os dados, os dispositivos e os usuários.

## Ameaças do Teletrabalho

Alguns dos riscos de segurança são aqueles que sempre estiveram presentes no teletrabalho: segurança do dispositivo final e dos dados, ponto de acesso e acesso aos serviços corporativos. No entanto, ao se adaptar ao ambiente do COVID-19, surgiram novos problemas devido ao grande número de pessoas que agora trabalham em casa e à pressa em habilitá-las.

Uma questão é trabalhadores em casa em ambientes inseguros em redes que nunca foram destinadas a serem usadas fora da corporação. Isso leva a ataques direcionados de phishing e malware. Outro problema é a introdução de novas ferramentas, como aquelas de colaboração e videoconferência que podem expor sua empresa e dados a ataques e uso malicioso. Basicamente, agora há uma área de superfície de ataque aumentada, muito maior do que a maioria das organizações inicialmente planejou, e novos ambientes que nunca fizeram parte do plano original.

## Soluções para garantir a segurança do trabalhador remoto

## Traga seu próprio dispositivo (BYOD).

Um dos problemas mais difíceis de lidar é quando os trabalhadores usam seus próprios dispositivos. O desafio chave é que esses dispositivos não são gerenciados, sem todos os agentes de segurança em execução e gerenciados pelo departamento de TI; o dispositivo é de propriedade e gerenciado pelo usuário. Você pode ter a capacidade de instalar alguns agentes ou ter alguma aplicação de política, mas há apenas tanto que você pode fazer sem impedir que o trabalhador o utilize como um dispositivo pessoal. Então, como você pode proteger um usuário com um BYOD?

Certifique-se de que esses fundamentos estejam em vigor: Aplique os patches mais recentes como requisito, imponha um bom controle de acesso à sua empresa e serviços, implemente autenticação de múltiplos fatores e proteja seus ativos com as devidas proteções, como gerenciamento de direitos empresariais para controle de acesso aos dados e imponha controle de acesso baseado em políticas nos pontos finais.

Outra opção para reduzir seu risco pode ser limitar o acesso direto aos serviços da empresa e fazer com que os usuários trabalhem em um ambiente SASS.

## Pontos Finais e Ambientes Não Seguros

A melhor solução para muitos desses problemas seria um cliente empresarial robusto, mas ainda há riscos envolvidos. Os trabalhadores estão utilizando um dispositivo que é uma extensão gerenciada da rede empresarial. A segurança pode ser implementada com inicialização segura, criptografia de disco completo, proteção de dados, firewalls locais e aplicação de boas práticas de atualização. No entanto, o risco surge porque muitas organizações já possuem trabalhadores remotos, como vendedores ou engenheiros de campo, que podem não ter o mesmo nível de segurança dos trabalhadores que nunca foram destinados a sair do prédio, como os departamentos financeiro e de recursos humanos.

As organizações devem estar vigilantes para garantir que todos os trabalhadores tenham agora a mesma segurança, ou até adicionar camadas extras que os trabalhadores precisam para trabalhar remotamente em redes não seguras. A autenticação de múltiplos fatores agora deve ser um requisito, e a aplicação da política de ponto final e a gestão dos direitos empresariais são agora mais importantes do que nunca.

Estamos vendo inovações nessa área, como um cliente que está fornecendo aos novos funcionários não apenas laptops, mas também um roteador gerenciado para evitar redes não seguras.

## Sistemas de VDI e Serviços de Nuvem

Implementar segurança para sistemas VDI e serviços em nuvem inclui os conceitos básicos de segurança: proteção de dados, segurança de virtualização tanto para o centro de dados da empresa quanto nos pontos de acesso, segurança de aplicativos, inicializações seguras, aplicação de patches e criptografia de rede. A chave está em realizar uma pesquisa precisa sobre a empresa e os serviços em nuvem que estão sendo implantados para seus funcionários, garantindo que todos estejam igualmente protegidos. Cada aplicativo, mesmo aqueles que não são essenciais, pode ser um ponto de ataque potencial.

## Clientes como Serviço

Os clientes do SASS utilizam serviços na nuvem e também utilizam aplicativos em seus clientes ricos, portanto, existem algumas questões de segurança adicionais com que se preocupar. Deve haver uma proteção adequada aos dados no gerenciamento de direitos empresariais (ERM) para o acesso aos dados por meio dos serviços em nuvem e de volta ao centro de dados. A proteção em ambos os lados é crítica. O acesso dos clientes aos serviços em nuvem deve ser protegido por autenticação multifatorial e criptografia de rede. O acesso dos serviços em nuvem ao data center privado da empresa e aos recursos empresariais também deve ser protegido nas camadas de acesso à rede, dados e aplicativos. Compreender como os clientes estão utilizando os serviços e quais dados estão acessando é onde as decisões do ERM entram em jogo.

## Mau uso e abuso de Insiders<h3>

A TI deve utilizar diversos métodos para gerenciar a ameaça e risco de erros, mau uso e ações maliciosas de insiders. O controle de acesso baseado em políticas e a aplicação das mesmas, desde as aplicações até os dados, em nível empresarial e de nuvem é importante para evitar o mau uso e abuso de usuários já autenticados. A principal defesa que a TI possui é a auditoria e monitoramento da inteligência de ameaças. Gerenciar essa informação em toda a empresa e na nuvem ao longo de um longo período de tempo pode ser muito eficaz na detecção de comportamentos aberrantes.

Não há dúvida de que agora temos que pensar de forma diferente nas questões de segurança com o teletrabalho. Nossas principais recomendações são, em primeiro lugar, implementar a tecnologia que você vem testando; em segundo lugar, educar seus usuários; e em terceiro lugar, ativar a autenticação de dois fatores e proteger seus dados em grande escala. Se conseguirmos fazer essas três coisas, podemos reduzir o risco e estar melhor preparados para o futuro.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
