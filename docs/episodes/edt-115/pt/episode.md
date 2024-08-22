---
layout: posts
title: "Bloqueio e Tackle de Segurança"
number: 115
permalink: episode-EDT115-pt
lang: pt
nav_exclude: true
nav_order: 115
tags:
    - cybersecurity
    - ransomware
    - userbehavioralanalytics
    - compliance
    - zerotrust
    - people
    - process
    - policy

date: 2022-12-01T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - John Evans

img: thumbnail.png
image: thumbnail.png
summary: "Neste episódio, Darren fala sobre cibersegurança com o convidado de retorno John Evans, Conselheiro de Tecnologia Principal na World Wide Technology (WWT)."
video: "https://youtu.be/url"
description: "Neste episódio, Darren fala sobre cibersegurança com o convidado de retorno John Evans, Conselheiro de Tecnologia Principal na World Wide Technology (WWT)."
---

<div>
{% include transistor.html id="4c1b2203" title="#115 Blocking and Tackling of Security" %}

{% include youtube.html id="url" %}
</div>

---

Fundamental para todas as outras medidas de segurança cibernética está a higiene básica cibernética. Muitas empresas precisam adotar esses princípios básicos. Isso é evidenciado por manchetes recentes que mostram um aumento nos ataques, como os ataques de negação de serviço, que deveriam ser fáceis de prevenir.

Da sua experiência trabalhando com a comunidade governamental, John acredita que a maioria dos ataques segue uma típica cadeia de ataques. A maioria dos ataques direcionados aos governos estaduais e locais resultam de protocolos de rede expostos ou phishing por email. Esses são pontos de entrada atraentes para hackers e, uma vez dentro, práticas de atualização ruins são um culpado típico que os permite estabelecer uma posição e se movimentar lateralmente. Isso, combinado com políticas de senha fracas ou fraca aplicação das políticas de senha e incapacidade de recuperação, podem levar a um desastre.

Em um incidente de ransomware amplamente divulgado em 2019, a organização afetada assumiu que, como tinham a mesma quantidade de dados em seus ambientes de produção e backup, estavam seguros. Mas eles nunca testaram seus backups ou capacidades de recuperação, que acabaram sendo ruins. Medidas básicas de ciber-higiene poderiam ter evitado esse incidente.

Existem quatro fundamentos essenciais que toda organização deve se concentrar. Primeiramente, eles devem treinar repetidamente as pessoas para evitar golpes de phishing. O treinamento pode parecer repetitivo ou monótono, mas as pessoas sendo enganadas por esses esquemas é uma fraqueza significativa em uma organização. Esperançosamente, num futuro não tão distante, senhas não serão mais necessárias.

Segundo, eles devem configurar os firewalls adequadamente; apenas porque as portas do protocolo RTP ou de rede estão fechadas não significa que não haja uma porta aberta em um local menos proeminente. Segurança pela obscuridade não funciona.

Terceiro, eles devem evitar políticas de correção ruins, tanto com o cliente quanto com o servidor, nos centros de dados e nas bordas. Muitas organizações estão em dívida técnica e não conseguem atualizar seus sistemas antigos, então elas aceitam as vulnerabilidades e riscos porque não querem investir em uma atualização.

Quarto, eles devem ter a habilidade de se recuperar. Apenas porque você sabe que pode fazer backup dos seus dados, é possível usar e recuperar com o backup? Os testes são essenciais.

Esses quatro princípios básicos, juntamente com alguns outros, são suficientes para impedir quase todos os ataques direcionados a organizações que não são alvos regulares. Esse modelo não se aplica a organizações atacadas por nações-estado; elas já estão realizando todas essas ações e precisam de medidas de segurança adicionais.

Uma consideração para muitas organizações é a conformidade versus risco. Para algumas organizações estarem em conformidade, elas precisam atualizar máquinas antigas, aplicativos e processos, o que envolve um custo significativo. Para organizações com um sistema que não pode ser corrigido, pode ser adotada uma abordagem baseada em risco, ou seja, se algo acontecer ao sistema, custaria menos do que o custo de atualizá-lo. Claro, a opção segura seria fazer a atualização para estar em conformidade, mas a maioria das pessoas acredita que a abordagem baseada em risco é mais segura. Uma pequena empresa poderia adotar essa abordagem, mas organizações governamentais, por exemplo, têm requisitos regulatórios de conformidade.

Existem duas razões pelas quais uma organização pode optar pelo cumprimento, além de um mandato. Primeiro, é um botão fácil para muitas organizações que não entendem como medir ou priorizar riscos. O cumprimento é uma estrutura generalizada para se apoiar. No entanto, não é uma solução única, porque outra pessoa está priorizando riscos de maneira generalizada. Segundo, se algo terrível acontecer e você precisar, por exemplo, explicar isso ao conselho administrativo, você pode dizer que seguiu padrões aceitos.

Compliance é um pouco uma mentalidade dependente porque você não precisa fazer todas as avaliações de risco e descobrir o que precisa ser feito. Mas, por exemplo, um pequeno município sem um CISO poderia orientar um sysadmin a usar um framework de conformidade como um bom ponto de partida. Se não houver um CISO disponível, também há a opção de um CISO virtual de meio período para orientação. John faz isso para clientes, o que é um caminho viável para uma segurança melhor.

O conceito de confiança zero também considera um nível de garantia versus risco. Você precisa entender o risco de conceder acesso a alguém a um determinado sistema ou conjunto de dados e, em seguida, ter a garantia correspondente de que a pessoa é quem diz ser. O cerne da confiança zero é um alto nível de segurança que mitiga o risco.

A confiança zero não significa que tudo será bloqueado e que todos os processos serão lentos. Se, por exemplo, alguém quer entrar e ver os níveis de chuva, não é necessário um alto nível de garantia de que a pessoa esteja verificada. No entanto, se alguém quiser acessar as joias da coroa da sua organização, devem existir controles adicionais para verificar a identidade.

Correspondendo o nível de garantia com o nível de risco é desafiador; isso requer uma arquitetura de pontos de decisão. No exemplo do risco ao acessar um conjunto de dados, uma organização precisa saber o que é e categorizá-lo com base no risco. Para uma organização madura, isso pode ser difícil. John conhece uma organização do governo federal que levou mais de dois anos garantindo que seus dados fossem identificados, classificados e marcados corretamente antes de passar para qualquer tipo de arquitetura de ponto de decisão.

Identidade e dados são os dois pontos de partida para a confiança zero. Além disso, faz sentido evitar tentar e fazer tudo de uma vez. Começar com uma parte da organização pode ser a opção mais sensata, expandindo gradualmente para o restante da organização ao longo do tempo.

A identidade digital está se tornando mais sofisticada. John acredita que nossas transações no futuro serão principalmente baseadas em uma abordagem do tipo "zero-trust" (sem confiança). Por exemplo, se ele quiser transferir $10.000 de sua conta bancária para uma conta offshore, o banco deve ter certeza de que é ele e tratar essa transação como se alguém estivesse tentando acessar informações muito sensíveis e de alto risco. Se ele for à loja comprar uma xícara de café por um dólar, esse nível de garantia de que é ele comprando o café é desnecessário. Muitos desses princípios de "zero-trust" farão parte de nossas vidas cotidianas.

A análise comportamental do usuário também entrará em jogo. Assim como uma empresa de cartão de crédito levanta uma bandeira para compras incomuns, por exemplo, se um sistema sabe que John digita 20 palavras por minuto e de repente ele está digitando 100 palavras por minuto e tentando acessar informações confidenciais, isso é um alerta vermelho.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
