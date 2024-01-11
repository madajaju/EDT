---
layout: posts
title: "Garantindo o Pipeline de DevOps = SecDevOps"
number: 42
permalink: episode-EDT42-pt
lang: pt
nav_exclude: true
nav_order: 42
tags:
    - cybersecurity
    - devops
    - compute
    - process
    - technology
    - multicloud
    - devsecops

date: Sun Mar 14 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Neste episódio, Darren Pulsipher, Arquiteto de Soluções Chefe na Intel, e Steve Orrin, CTO da Intel Federal, discutem por que e como o pipeline DevOps deve ser protegido. A única maneira de fornecer código sólido, resiliente e seguro é se a segurança estiver incorporada, e quanto mais cedo melhor."
video: "https://youtu.be/url"
description: "Neste episódio, Darren Pulsipher, Arquiteto de Soluções Chefe na Intel, e Steve Orrin, CTO da Intel Federal, discutem por que e como o pipeline DevOps deve ser protegido. A única maneira de fornecer código sólido, resiliente e seguro é se a segurança estiver incorporada, e quanto mais cedo melhor."
---

<div>
{% include transistor.html id="2fd54175" title="#42 Securing the DevOps Pipeline = SecDevOps" %}

{% include youtube.html id="url" %}
</div>

---

Um estudo realizado há mais de 20 anos sobre o retorno do investimento em segurança demonstrou que quanto mais cedo a segurança for incorporada ao ciclo de desenvolvimento, mais barato é em comparação com esperar até o final do ciclo. Apesar de sabermos disso há duas décadas, ainda é um trabalho em andamento.

A maioria das empresas de desenvolvimento têm a segurança como parte do seu processo geral de desenvolvimento, por isso tem havido muitos avanços, mas é uma jornada, não uma corrida. Trata-se de compreender todos os diferentes pontos de exposição e fraquezas e ser capaz de fornecer os processos de segurança adequados para esses problemas.

## Os Vetores de Ataque

Muitas vezes, as pessoas pensam em ataques como vulnerabilidades dos funcionários ou pacotes, por exemplo, e esquecem a parte do processo da história. No lado operacional, está o tempo que leva para fechar uma vulnerabilidade. Do outro lado está o desenvolvimento e entrega de produtos. Existem vários pontos de ruptura ao longo dessa cadeia, os quais têm sido explorados recentemente nas últimas etapas do processo de construção. No que diz respeito aos clientes, o código que foi atualizado era legítimo porque veio diretamente da fonte. Portanto, precisamos pensar cuidadosamente onde colocar a segurança no processo.

## Segurança Incorporada...

Ágil, CI/CD, DevOps... Onde está a segurança?

Embora tendamos a buscar segurança nas transições do desenvolvedor para QA e de QA para operações ou implantação, a segurança deveria ser realmente inserida em todo o ciclo de construção, não apenas em alguns pontos de verificação. A abordagem deveria ser segurança contínua.

## Segurança Incorporada…

Faça da segurança parte de cada fase

A segurança contínua é desafiadora. A maioria dos desenvolvedores e QA não possui treinamento em segurança; esta é uma batalha difícil. A indústria tentou essa abordagem no início dos anos 2000, mas encontrou três problemas. Primeiro, a rotatividade é muito alta. Segundo, o panorama da segurança muda muito rapidamente para mantê-los atualizados, e terceiro, como não é sua tarefa diária, o comportamento adequado não foi incentivado.

Como, então, integrar a segurança ao processo, automatizar as principais tarefas que queremos fazer e deixar os desenvolvedores livres para desempenhar suas funções, que é construir, testar e implantar o código? O processo de segurança realmente se destaca ao integrá-lo às automações já existentes no DevOps, como testes unitários automatizados, testes automatizados de qualidade e regressão, construção automatizada e implantação automatizada. Isso não resolverá todos os problemas, mas elevará significativamente o nível, permitindo que você se concentre nos desafios mais difíceis relacionados à segurança.

## Segurança Incorporada....

Significa que a segurança está incorporada, não é um único passo ou estágio.

Algumas ferramentas comuns já fornecem segurança automatizada que aponta vulnerabilidades. Por exemplo, o GitHub executará verificações de segurança em projetos usando código Node.js e todos os pacotes incluídos. Isso pode ser útil, mas é tarde demais; a segurança deve estar incorporada ao pipeline antes de ser verificada.

## Segurança integrada...?

## Como podemos chegar lá?

As violações de segurança atuais destacam que a segurança deve ser inserida em cada etapa do processo, incluindo entre a construção e a produção, e logo antes da execução do script para construir o aplicativo. Além de inserir segurança no processo de construção, precisamos proteger o próprio processo de construção; tem sido uma brecha enorme por um longo tempo.

Muitas empresas que fazem desenvolvimento interno estão agora analisando mais de perto seu processo de construção por causa das recentes violações. Isso é bom, mas não pode parar com essas reações impulsivas a cada ataque. Precisamos pensar de forma holística e não esperar pelo próximo elo fraco na cadeia.

Algumas maneiras práticas de garantir a segurança do processo são tratar o servidor de construção como um ativo crítico na infraestrutura geral e aplicar as mesmas regras e controles a esse servidor como você faria para seus sistemas principais. Credenciais adequadas, inicialização segura do firmware, verificação de código, auditoria e registro do sistema, etc... durante toda sua vida, então construindo no processo de DevOps quando alguém clica no botão.

## Construído para Durar

## Das Soluções para os Serviços e Além

Muitas pessoas não consideram o próprio script como um alvo. Não importa quantos bons módulos estejam incluídos se o script em si não estiver protegido. Algumas maneiras de proteger o script é executar um checksum e ele deve ser versionado, verificado e assinado. Isso adiciona complexidade para a equipe de DevOps, mas há ferramentas que podem ajudar.

## Construa uma vez, implemente em todos os lugares.

Assim como automatizamos o processo de desenvolvimento, podemos incluir a automação para implementar esses controles e verificações. A automação impede que outra pessoa potencialmente interfira em suas construções, mas também queremos garantir que um humano esteja recebendo os resultados e verificando auditorias.

As ferramentas que você já está usando podem ser ampliadas para adicionar automação de segurança e verificações, como aquelas para realizar integração contínua no ciclo ágil de desenvolvimento, ou ferramentas de automação no mundo Linux.

As organizações também podem distribuir seus profissionais de segurança entre as equipes de desenvolvimento de negócios, para que, quando algo der errado, os profissionais de segurança já estejam inseridos no processo. Dois locais onde você deseja garantir a presença de profissionais de segurança são na infraestrutura de suporte, por exemplo, para o seu processo Ágil, e na gestão de produtos, para obter requisitos de segurança durante a fase de definição dos requisitos do produto, antes mesmo de chegar aos desenvolvedores.

Sempre há escassez de pessoas de segurança treinadas e capacitadas o suficiente e também falta de financiamento para contratar as pessoas certas devido à alta demanda. Algumas opções são treinar as pessoas que você já tem e fornecer as ferramentas necessárias. Não é preciso ter um especialista em criptografia em cada etapa do processo. Outra possibilidade é, em vez de fazer com que cada programador seja responsável pela codificação de autenticação, credenciais e protocolos em uma construção segura em uma biblioteca de infraestrutura, ter uma equipe construir módulos em suas linguagens e ambientes que realizem todas as funções de segurança. O programador pode usar o módulo e ele cuidará do trabalho difícil. Dessa forma, você constrói uma vez e implanta em todos os lugares.

Estamos vendo empresas fornecerem ferramentas de segurança SaaS, serviços baseados em nuvem que podem ser consumidos para sua aplicação e seu ambiente de execução. Isso é um grande avanço no processo. Existem empresas que fornecem pontos de injeção de segurança, como segurança de aplicativos em um ambiente de estilo rápido. Essas verificações de aplicativos, como higienização de entrada e validação de entrada, podem ser incorporadas ao seu ambiente de funcionalismo, mas isso ainda está esperando até o final. Lembre-se de que quanto mais cedo você começar a segurança no processo, mais barato e menos doloroso será.

Tudo isso, é claro, requer mais trabalho de integração. Os desenvolvedores podem ficar cautelosos com o trabalho envolvido, mas se existir um framework com segurança incorporada (e existem protótipos como o Ruby on Rails e certas infraestruturas de nuvem), ele pode economizar muitas horas. No entanto, você ainda precisa garantir que não dependa apenas da plataforma para a segurança, pois ela pode ser um ponto único de falha.

## Automatização te libertará.

As violações de segurança nos últimos seis meses têm sido profundas. Aqui estão alguns pontos-chave de conselho:

A segurança deve ser integral em todo o ciclo de vida, desde os requisitos em diante. A segurança deve estar presente no próprio ciclo DevOps, não apenas na codificação e no teste, mas também na infraestrutura que impulsiona esse processo.

Quando construir ferramentas de segurança e objetos por meio de módulos, construa uma vez, torne modular e implante em todos os lugares.

Aproveite serviços que permitem que você conte com a experiência de outra pessoa para complementar sua própria equipe cibernética com poucos recursos.

A automação te libertará. Automatize o máximo possível para tornar a segurança mais fácil e rápida e reduzir o atrito para seus desenvolvedores e testadores. Com a automação, você pode eliminar 80 por cento do que chamamos de coisas bobas, para que possa gastar seus recursos limitados com os problemas difíceis.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
