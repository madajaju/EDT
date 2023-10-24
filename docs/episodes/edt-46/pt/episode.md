---
layout: posts
title: "Protegendo seu Pipeline de DevOps"
number: 46
permalink: episode-EDT46-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 46
tags:
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - zerotrustarchitecture

date: Wed Apr 07 2021 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Na segunda parte deste episódio, Darren Pulsipher, Arquiteto-chefe de Soluções da Intel, dá dicas práticas para garantir a segurança de cada etapa do pipeline do DevOps, incluindo a proteção do hardware e dos pilares de software com a raiz de confiança do hardware, escaneamento de segurança, containers/VMs atestados e criptografados, e muito mais."
video: "https://youtu.be/sf0VaCpQLVE"
description: "Na segunda parte deste episódio, Darren Pulsipher, Arquiteto-chefe de Soluções da Intel, dá dicas práticas para garantir a segurança de cada etapa do pipeline do DevOps, incluindo a proteção do hardware e dos pilares de software com a raiz de confiança do hardware, escaneamento de segurança, containers/VMs atestados e criptografados, e muito mais."
---

<div>
{% include transistor.html id="3abb647c" title="#46 Securing your DevOps Pipeline" %}

{% include youtube.html id="sf0VaCpQLVE" %}
</div>

---

## Os Vetores de Ataque

Muitos ataques ocorrem no nível das pessoas. Alguns dos ataques mais recentes e insidiosos têm se concentrado em phishing e engenharia social em indivíduos dentro do DevOps. Precisamos treinar as pessoas melhor em todos os níveis. Em um caso, foi um estagiário com acesso às chaves que sucumbiu a um esquema nefasto.

Outro vetor é a tecnologia: ataques tradicionais de negação de serviço, ataques de injeção de SQL ou ataques de estouro de buffer. Os incidentes mais recentes utilizam tanto pessoas como tecnologia para atacar o processo. Eles são insidiosos porque ocorrem durante o processo de construção e podem ser muito difíceis de detectar. Também podem propagar código malicioso para seus clientes. Para criar confiança nos clientes, as organizações devem ter uma estratégia para garantir a segurança do pipeline de suprimentos.

## Segurança de dutos

 Nem toda a pipeline de construção é igual, mas, de forma geral, ela consiste em quatro estágios com ambientes: desenvolvimento, construção, teste e produção. Esses estágios podem ser divididos em vários estágios, dependendo do tipo de produto que você está desenvolvendo, mas os ambientes estão ligados a esses diferentes estágios.

Precisamos analisar todo o processo, que inclui software, hardware e processos, e adotar uma abordagem diferente, em vez de apenas focar na infraestrutura, como a maioria tem feito de forma eficaz.

## Segurança de Hospedeiros e Infraestrutura

No fundo da pilha, é necessário garantir a segurança do hardware no ambiente de desenvolvimento e construção. O ambiente de teste será um pouco diferente porque você pode querer executar testes que envolvam a injeção de código malicioso. Os ambientes de produção geralmente são bem protegidos, especialmente agora que mais empresas estão oferecendo software como serviço. Nos ambientes de produção e construção, é necessário realizar todas as medidas de segurança típicas que você faria em ambientes de produção ou de software como serviço.

Existem três elementos-chave nesses ambientes. O primeiro é a detecção. A detecção e correção é uma medida de segurança bem conhecida que utiliza registros de serviço em uma plataforma como o Splunk para encontrar qualquer coisa fora do comum. Certifique-se de fazer isso não apenas em ambientes de desenvolvimento, mas também em ambientes de construção e produção.

Tenha em mente que no ambiente de teste, você precisará de vários ambientes de teste, alguns mais seguros do que outros no lado de detecção, uma vez que você deseja injetar código errôneo em seus testes. Não aplique apenas a mesma segurança a todos os ambientes; os perfis de segurança podem ser diferentes para cada ambiente.

A prevenção é a segunda chave. Isso significa ser inteligente com o hardware, garantir que as coisas sejam corrigidas adequadamente, ter as atualizações de segurança certas e fazê-lo de forma automatizada. Isso deve acontecer em todos os ambientes, incluindo o ambiente de testes, especialmente na construção e produção.

A terceira chave faz parte da prevenção: raiz de confiança de hardware. Uma cadeia de confiança pode ser estabelecida a partir do hardware, passando pelas seções de inicialização do firmware, até os hipervisores e sistemas operacionais. A raiz de confiança pode ser levada para os ambientes de desenvolvimento, construção, teste e produção. Isso pode incluir contêineres seguros e máquinas virtuais seguras. Por exemplo, gosto de armazenar minhas chaves de criptografia e hash em hardware, como um módulo TPM, e também com a extensão Secure Guard da Intel. Mesmo que alguém acesse a máquina, eles não conseguirão roubar essas chaves.

## Executáveis confiáveis.

Configurar executáveis confiáveis é o próximo passo. Isso significa que você pode executar verificações de segurança contra o código que está verificado e compilado e, em seguida, verificar o hash com essas alterações. Se algo foi injetado na base de código, você pode detectá-lo, já que não deve haver nenhuma alteração no código durante o processo de compilação.

Em uma nova etapa de verificações de segurança, você pode realizar análise estática no código ou análise dinâmica no código ou violações de segurança. Existem algumas ótimas ferramentas que você pode facilmente integrar à sua típica cadeia DevOps, seja utilizando o Jenkins ou fluxos de trabalho do GitHub, por exemplo.

Uma vez que um executável é construído, crie o hash imediatamente, e esse hash deve ser versionado junto com o executável; ele deve permanecer o executável que passa por todos os testes e é colocado em produção. Esse hash garantirá que nada tenha sido adulterado.

## Imagens comprovadas e seguras

Normalmente, existem vários repositórios, ou executáveis, para usar para o código. O hash que é criado durante a compilação agora está no registro e você pode atestar isso. Você pode protegê-los nas imagens para que não possam ser modificados. Se alguém precisar voltar e fazer uma pequena alteração, digamos, em uma etiqueta ou metadados, é importante não fazer a alteração e atribuir o mesmo número de versão. É melhor passar por todo o ciclo novamente, mesmo que leve mais tempo do que ter processos manuais mexendo com seus binários.

Agora, você pode pegar o mesmo arquivo binário que você executou todos os testes e enviá-lo para produção. Neste ponto, é um erro reconstruir o código-fonte. É melhor enviar a versão original para o repositório de produção, também conhecido como repositório golden. Este repositório é o único lugar de onde imagens, binários, ou Máquinas Virtuais (VMs), por exemplo, devem ser obtidos. Todas as imagens devem ser notarizadas e atestadas. Se você tiver VMs confidenciais ou aplicativos, ou quiser garantir que eles sejam executados apenas em hardware específico, pode fazer esse tipo de restrição. Você pode criptografar as VMs, contêineres, ou até mesmo binários e trancá-los com a chave armazenada em seus sistemas de construção e produção.

## Injetando Ferramentas de Segurança

As ferramentas de segurança devem ser integradas ao processo de construção. Em vez de utilizar bibliotecas de segurança de código aberto ou recriar as que já existem, seus engenheiros de segurança devem se envolver para que possam escolher ferramentas que possam ser facilmente consumidas e reutilizadas pelas equipes de desenvolvimento. Um bom exemplo é a autenticação básica: login do usuário. Deve haver uma biblioteca comum em vez de cada aplicação possuir a sua própria.

É importante tratar essas bibliotecas de segurança e ferramentas da mesma forma que você trataria qualquer outro programa de desenvolvimento de software que está compartilhando em toda a sua organização. Compartilhar irá diminuir o tempo e aumentar a segurança em todo o seu ecossistema.

## Construa uma vez, implante segurança em todos os lugares.

Depois de estabelecer suas equipes de segurança de desenvolvimento, certifique-se de injetar as políticas e ferramentas em todos os seus produtos e ambientes. Hoje em dia, existem excelentes tecnologias que permitem gerenciar vários ambientes. Portanto, quando uma nova aplicação é criada, ela é criada em um perfil de segurança com suas próprias imagens de VM ou containers como base que as equipes de desenvolvimento estão utilizando. Ao configurar a segurança em suas VMs ou containers nas imagens de base, você obtém conformidade de segurança instantânea em diferentes ambientes. Também é possível integrar com ferramentas de segurança, para que, se encontrar algo incomum na aplicação, possa notificar as ferramentas de segurança. Não tente criar ferramentas de segurança que abordem cem por cento dos casos, porque você nunca as terminará; vá para oitenta por cento como uma base sólida e crie-as para que os desenvolvedores de aplicativos possam inovar os vinte por cento restantes, se necessário, em conjunto com sua equipe de segurança.

Um último conselho importante é automatizar tudo o que você puder, especialmente no pipeline de DevOps, para evitar injeções maliciosas. Proteja seu pipeline; proteja seu processo.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
