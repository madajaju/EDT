---
layout: posts
title: "Usando dados como um recurso estratégico"
number: 19
permalink: episode-EDT19-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 19
tags:
    - dataarchitecture
    - data
    - datastrategy
    - people
    - process

date: Mon Sep 07 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Neste episódio, Darren Pulsipher, Arquiteto Chefe de Soluções da Intel para o Setor Público, explora como as organizações podem passar de simplesmente acumular dados para usá-los como um ativo estratégico."
video: "https://youtu.be/TNIK5d9oM4A"
description: "Neste episódio, Darren Pulsipher, Arquiteto Chefe de Soluções da Intel para o Setor Público, explora como as organizações podem passar de simplesmente acumular dados para usá-los como um ativo estratégico."
---

<div>
{% include transistor.html id="f15f756b" title="#19 Using Data as a Strategic Asset" %}

{% include youtube.html id="TNIK5d9oM4A" %}
</div>

---

Assim como algumas pessoas acumulam coisas em suas casas, com medo de jogar algo fora, as organizações também podem acumular dados. Por exemplo, minha pasta de emails tem 8 gigabytes. Eu sei que

Não precisa ser tão grande, mas eu guardo coisas no caso de eu precisar delas. Agora multiplique isso pelo número de funcionários. Na Intel, temos cem mil funcionários. Imagine a quantidade de dados que estamos armazenando, apenas em emails, quando fazemos backups. Adicione bancos de dados estruturados e não estruturados, apresentações, planilhas, etc... e fica claro que simplesmente armazenar tudo não é uma estratégia ótima.

## Estatísticas de dados

Vamos analisar as estatísticas que mostram por que essa é uma estratégia ruim. Aproximadamente 80% do tempo dos cientistas de dados é gasto na limpeza dos dados antes de poderem utilizá-los. Menos de 50% dos dados estruturados estão sendo utilizados, e menos de 1% dos dados não estruturados podem ser analisados. Portanto, todos esses dados estão sendo acumulados, mas as organizações, em sua maioria, não os estão utilizando. Outra questão é quem tem acesso a todos esses dados armazenados. É alarmante que 70% dos funcionários tenham acesso a dados que provavelmente não deveriam ter. Assim como as pilhas desorganizadas de um acumulador criam riscos de incêndio em casa, pilhas desorganizadas de dados criam riscos de segurança em uma organização.

## Explosão de dados

O que podemos fazer sobre esse problema? Primeiro, precisamos entender por que há uma explosão tão grande de dados. Com o IoT, tudo está conectado, e temos processamento de dados acontecendo em diversos lugares. O volume de dados que está sendo gerado é incrível. Isso é agravado por questões regulatórias; é difícil saber o que podemos descartar e o que não podemos. Enchemos nosso armazenamento e então compramos mais. A tecnologia basicamente possibilita que acumulemos dados. Precisamos analisar o que podemos fazer de forma diferente.

## Por que guardamos tantas coisas

Especialistas dizem que as pessoas acumulam coisas porque acreditam que um item será útil ou valioso no futuro, possui valor sentimental, é único e insubstituível, ou é uma pechincha grande demais para jogar fora. Essas mesmas ideias se aplicam ao acúmulo de dados. Por exemplo, por que eu tenho uma das primeiras apresentações que já fiz? Está armazenada em um disco e está na nuvem. Eu a vejo talvez uma vez por ano, mas não tenho nenhum motivo real além do valor sentimental para mantê-la. Uma organização é composta por indivíduos com esses comportamentos, e em todos os níveis diferentes de acumulação de dados, há medo de se livrar deles.

## Tornando-se centrado em dados.

Como seria tornar-se uma empresa orientada a dados em vez de uma empresa de armazenamento? Aqui está um processo em quatro etapas para se tornar uma organização orientada a dados.

## Fundação Organizacional

O primeiro passo é criar uma base organizacional centrada em dados. Existem quatro atores-chave com papéis distintos.

Chefe de Dados: O trabalho do chefe de dados é definir estratégias e governança sobre a gestão de dados e a geração de informações valiosas para os negócios. Essa função é diferente daquela do chefe de informações, que se concentra na infraestrutura em vez das informações em si. Esse é um trabalho difícil, pois o chefe de dados está envolvido em mudanças culturais. Eles tentam evitar que as pessoas acumulem dados e, em vez disso, os utilizem para criar valor real para os negócios.

Cientista de Dados: Cientistas de dados desenvolvem modelos e projetos encontrando padrões nos dados e usando análises preditivas. Os esforços dos cientistas de dados podem se tornar simplesmente um experimento científico pontual, no entanto, a menos que a informação seja operacionalizada.

Engenheiro de Dados: É aqui que os engenheiros de dados entram em ação. Eles gerenciam os pipelines de dados e operacionalizam análises. À medida que novos dados são recebidos, novas informações são geradas sem precisar começar do zero a cada vez.

Data Steward: O data steward gerencia a governança e o acesso aos ativos de dados, garantindo que as pessoas certas tenham o acesso certo no momento certo.

Com uma organização que inclui esses quatro papéis, a próxima grande questão é se centralizar ou distribuir as operações. Por exemplo, talvez a gestão matricial distribuída já esteja funcionando em sua grande organização, mas uma organização menor pode precisar de mais rigidez e se beneficiar de uma estrutura mais centralizada.

## Coleta e Preparação de Dados

Um artigo da Harvard Business Review usa efetivamente uma analogia esportiva para descrever duas estratégias de catalogação de dados: defesa e ataque. Na defesa, o objetivo é proteger os dados. No ataque, o objetivo é avançar rapidamente para marcar pontos.

## Defesa e Ataque de Dados

Com uma estratégia defensiva, a organização está principalmente focada em segurança de dados, governança e conformidade. Proteger os dados é fundamental. A principal atividade de dados estará centrada em extração, padronização, gerenciamento de armazenamento e gerenciamento de acesso. Tipicamente, esta estratégia usará uma organização mais centralizada e utilizará uma única fonte de verdade.

Com uma estratégia ofensiva, a organização está principalmente focada em agir rapidamente para melhorar sua posição competitiva e obter o máximo de lucratividade possível. As atividades de dados se concentrarão em extração, modelagem, visualização, transformação e enriquecimento.

Esta estratégia exigirá mais flexibilidade, o que significa uma organização mais distribuída com múltiplas versões da verdade.

Compreender como usar os dados com base na estratégia é importante. Frequentemente, as organizações ficam indecisas e isso pode ser confuso. Embora todas as organizações precisem ser capazes de se defender e atacar, elas devem escolher uma estratégia em vez de tentar fazer as duas coisas, assim como jogadores de futebol em nível profissional não jogam dos dois lados da bola.

## Análise de Insight

Existe uma curva de maturidade organizacional para a análise e construção de insights a partir dos seus dados. A chave é entender onde sua organização está atualmente posicionada e quais são os próximos passos para subir na curva.

Na etapa de análise descritiva, você está apenas tentando descobrir o que está acontecendo. No passo de diagnóstico, você está descobrindo por que algo aconteceu. No passo de previsão, você pode prever o que acontecerá no futuro com base em dados históricos. Aqui é onde muitas organizações se esforçam para estar, mas os dois primeiros passos devem ser alcançados primeiro. Acima da previsão está o prescritivo, onde você pode entender por que algo acontecerá e guiar a organização de acordo com as expectativas. No topo dos passos está a perspicácia analítica, ou visão de futuro, onde você está fazendo as coisas acontecerem, até progredindo além do prescrito.

Uma razão pela qual é importante entender onde sua organização está atualmente é porque existem ferramentas específicas para cada fase. Por exemplo, você não quer ficar preso a um projeto de IA que esteja utilizando algoritmos prescritivos, ou até mesmo preditivos, quando sua organização ainda está na etapa descritiva.

## Operacionalize isso

Para alcançar o objetivo de operacionalização, ou seja, tornar um processo repetitivo, existem três elementos-chave: uma infraestrutura centrada em dados, pipelines de dados e fluxo de negócios.

A infraestrutura centrada em dados permite que você saiba onde todos os seus dados estão e o que há nesses dados por meio de várias ferramentas, como um gerenciador de metadados como o elastic search ou catálogos e repositórios de metadados. Os pipelines de dados possuem ótimas ferramentas para permitir o processo, desde a ingestão até a análise e a ação. Uma estratégia defensiva ou ofensiva determinará quais ferramentas você usará em seu pipeline. O último elemento, o fluxo de negócios, é onde o entendimento dos negócios sobre seus dados e processos permitirá a implantação de um processo de melhoria contínua para garantir insights repetíveis e valiosos.

## Chamada para ação

Primeiro, desenvolva uma estratégia de dados. Organize-se e descubra onde estão todos os seus dados e catalogue-os. Decida por uma estratégia defensiva ou ofensiva e, em seguida, tome suas medidas de análise de insight uma de cada vez, utilizando as ferramentas corretas. Mais importante ainda, operacionalize seus insights para obter o melhor valor comercial.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
