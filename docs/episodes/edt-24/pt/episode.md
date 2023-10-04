---
layout: posts
title: "Estratégia Digital e Arquitetura de Dados"
number: 24
permalink: episode-EDT24-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 24
tags:
    - data
    - dataarchitecture
    - aiops
    - secops
    - devsecops
    - devops
    - compute
    - technology
    - process

date: Tue Oct 06 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto-Chefe de Soluções, Setor Público, Intel, descreve a estratégia digital e a arquitetura para transformar efetivamente sua organização. Ele explica como os elementos organizacionais, procedimentais e tecnológicos devem ser equilibrados para funcionar de forma eficiente em direção a uma arquitetura comum e ideal que apoie uma visão unificada."
video: "https://youtu.be/fA8CWzRDZHM"
description: "Darren Pulsipher, Arquiteto-Chefe de Soluções, Setor Público, Intel, descreve a estratégia digital e a arquitetura para transformar efetivamente sua organização. Ele explica como os elementos organizacionais, procedimentais e tecnológicos devem ser equilibrados para funcionar de forma eficiente em direção a uma arquitetura comum e ideal que apoie uma visão unificada."
---

<div>
{% include transistor.html id="0f3c3117" title="#24 Digital Strategy and Data Architecture" %}

{% include youtube.html id="fA8CWzRDZHM" %}
</div>

---

Ter um plano para a transformação digital da sua organização é fundamental para evitar se perder no labirinto de apenas seguir com as últimas e melhores tecnologias e processos. Essa estratégia ao acaso fará com que a sua transformação digital fracasse. Um plano, ou um roteiro, desde onde a sua organização está atualmente até onde você deseja chegar é a parte mais importante de uma transformação efetiva.

Os três elementos-chave que devem ser coordenados e equilibrados no seu plano são organizacional, procedimental e tecnológico.

## Divisões Organizacionais

Para entender a mudança organizacional, vamos primeiro analisar os grupos comuns na maioria das organizações.

## Desenvolvimento

Este grupo é a sua equipe diurna; eles estão desenvolvendo novos produtos. Os processos da equipe de desenvolvimento são bem conhecidos e maduros. Eles se concentram no trabalho de desenvolvimento, teste e lançamento do produto em produção. Quase toda equipe utiliza algum tipo de técnica Ágil ou de iteração rápida.

## IT - Tecnologia da Informação

O objetivo da equipe de TI é otimizar a infraestrutura em termos de custo e eficiência. Eles garantem que a infraestrutura seja confiável e tenha controle e segurança incorporados. Principalmente, eles avaliam computação, armazenamento, rede, conformidade e custos.

## Segurança

O papel da segurança tornou-se cada vez mais importante nos últimos anos, e ainda mais recentemente, com os funcionários trabalhando em casa devido à COVID-19. A equipe de segurança concentra-se principalmente em garantir a propriedade intelectual, os dados e a infraestrutura. As ferramentas comuns são gestão de identidade, proteção, detecção e remediação. Entender como essas ferramentas funcionam em um nível mais alto é importante para a mudança organizacional.

## Data

Este novo grupo, que anteriormente poderia ter sido um estatístico ou matemático que fazia mineração de dados, está agora ganhando força com a chegada dos chefes de dados e das organizações construídas ao redor deles. Eles se concentram em analisar, categorizar e entregar valor real a partir dos seus dados. Seja a sua organização na área de manufatura ou serviços, ou se você está tentando capturar novos clientes ou economizar dinheiro, existem muitas áreas onde cientistas de dados podem fornecer valor.

## Reunindo os Grupos

Para realizar uma mudança digital eficaz, todos esses grupos precisam ter uma compreensão mútua do que cada um traz para a mesa e uma visão unificada. Você não quer que seus cientistas de dados explorem dados que não têm valor para o desenvolvimento ou TI. Você não quer que sua equipe de segurança restrinja tudo tão rigidamente que a equipe de desenvolvimento não consiga concluir seu trabalho. Entre os grupos, deve haver estratégias, processos e arquiteturas comuns.

Embora objetivos e resultados comuns sejam o ideal, existem obstáculos a serem superados. Uma das áreas mais difíceis na mudança organizacional é a quebra de comunicação nas fronteiras. Algumas organizações criaram novos grupos para suavizar as diferenças entre os grupos. Por exemplo, entre segurança e TI, poderia haver um Sec Ops ou Sec Dev Ops, onde eles automatizam as políticas e procedimentos provenientes da equipe de segurança. Outro exemplo seria uma equipe de desenvolvimento de dados, que são desenvolvedores que trabalham com cientistas de dados para fornecer processos mais repetíveis através do desenvolvimento de aplicativos ou integração de ferramentas e aplicativos. Arquiteturas comuns em conjuntos comuns de ferramentas com as quais todos os grupos podem contar tornam o processo e as mudanças muito mais fáceis.

## O Sistema Perfeito

Como seria uma arquitetura comum? Uma versão utópica não existe hoje, mas podemos analisar os elementos e talvez construir algo em direção a esse ideal.

O autosserviço é essencial. Por exemplo, se um cientista de dados precisa de mais espaço de armazenamento para dados, eles não precisariam ligar para o setor de TI e preencher uma série de formulários etc..., mas sim usar um portal de autosserviço que economiza tempo e forneceria o espaço de armazenamento. Claro que o portal seria orientado por políticas, para que a equipe de segurança possa ter certeza de que os dados confidenciais que o cientista coloca em uma unidade estão criptografados e o controle de acesso é automático.

Outra característica ideal seria que o sistema seja auto-regenerativo e orientado por dados. Se as máquinas forem infectadas, por exemplo, elas seriam automaticamente colocadas em quarentena e as cargas de trabalho seriam migradas para outra área no centro de dados ou para a nuvem pública. Novamente, a TI teria que estabelecer políticas e monitorar processos, mas o sistema seria em grande parte automático. O sistema não deve ser apenas automático, mas também inteligente, aprendendo com experiências passadas e se tornando mais eficiente.

Podemos obter alguns elementos deste sistema utópico hoje em dia com produtos prontos para uso, integrando-os e fazendo com que todos os utilizem. Vamos analisar o que cada organização deseja desta arquitetura.

## Arquitetura de TI (Multi-Nuvem Híbrida)

A TI é responsável pela infraestrutura subjacente e pelas informações de dados na organização. Se a TI pudesse estabelecer uma base sólida, todos os outros poderiam construir em cima dela. A TI precisa migrar para uma solução de nuvem multi-híbrida para que a infraestrutura possa ser facilmente orquestrada conforme necessário, com flexibilidade baseada em política. Sempre há uma troca entre custo e confiabilidade, mas você tem opções. Uma camada de infraestrutura definida por software permite facilmente a orquestração de computação, armazenamento, rede, segurança e agora até coisas novas, como memória e aceleradores. A base de nuvem multi-híbrida é um aspecto-chave de sua arquitetura comum.

## Arquitetura de Segurança

A equipe de segurança adicionaria a este sistema e o tornaria o mais automatizado possível. O primeiro aspecto seria a identidade. Isso significa que não apenas é possível identificar usuários, mas também infraestrutura, aplicativos e serviços, para que tudo tenha uma identidade. Essas identidades podem estar vinculadas a autorizações e acessos específicos para garantir que tudo esteja autenticado. Em relação à segurança, é desejável ter criptografia e remediação quando houver problemas. Idealmente, seria possível estabelecer uma raiz de confiança para que tudo no ecossistema, tanto em aplicativos e serviços quanto em firmwares e BIOS das máquinas, seja confiável.

## Arquitetura de Desenvolvimento

Os desenvolvedores podem se preocupar que todo esse processo possa retardar o desenvolvimento, então ele precisa acontecer quase automaticamente. A maioria dos desenvolvedores agora está focada em componentes reutilizáveis ​​que podem ser testados para que eles saibam que estão seguros. Eles fazem isso por meio de ecossistemas em contêineres como Kubernetes, Docker ou Mesos. A segurança pode ser injetada no ciclo de vida do desenvolvimento na etapa de implantação antes de ser movida com sucesso para a produção. Acima da camada de serviço está uma camada de aplicação onde os desenvolvedores podem aproveitar os fluxos de trabalho. Esses fluxos de trabalho podem ser fluxos de trabalho de desenvolvimento como CI/CD ou fluxos de trabalho de negócios por meio de ferramentas de automação como Robotic Process Automation. Ter tanto a camada de serviço quanto a camada de aplicação são elementos-chave nesta arquitetura utópica.

## Arquitetura de Dados

Com dados dispersos por vários ecossistemas, nuvens públicas e até mesmo nas bordas, precisamos de uma forma melhor de gerenciar dados para cientistas de dados e desenvolvedores de aplicativos. Extrair dados do armazenamento é um dos elementos importantes aqui. Com essa estrutura, você pode orquestrar dados em toda a vasta infraestrutura e vincular esses dados apenas às aplicações e serviços onde são necessários. Os dados podem ser abstraídos para serem armazenados na melhor posição durante esse período de tempo, seja nas bordas, no centro de dados ou processados em vários locais diferentes para réplicas de aplicativos. A segurança seria necessária para proteger os dados, uma vez que os dados são o motivo da infraestrutura em primeiro lugar. Algumas empresas iniciantes estão competindo neste espaço para assumir o controle da camada de gerenciamento de dados.

Esta arquitetura utópica, com sua infinidade de partes móveis, é chamada de arquitetura Edgemere. Estamos tentando analisar como todas essas partes se encaixam para ajudar as organizações a acelerar sua transformação digital. Precisamos entender o que cada organização precisa, quais são seus casos de uso e quais são as semelhanças entre os grupos para desenvolver uma arquitetura na qual toda a organização possa trabalhar.

A parte da sua organização é romper as barreiras entre os grupos, desenvolver uma visão comum de onde você quer estar organizacionalmente, procedimentalmente e arquitetonicamente, e desenvolver uma rota para como chegar lá.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
