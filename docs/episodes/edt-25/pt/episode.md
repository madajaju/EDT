---
layout: posts
title: "Operacionalizando pipelines de dados"
number: 25
permalink: episode-EDT25-pt
lang: pt
nav_exclude: true
nav_order: 25
tags:
    - deeplearning
    - automation
    - collaboration
    - multicloud

date: 2020-10-14T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Sarah Kalicin

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto Chefe de Soluções, Setor Público, Intel, conversa com Sarah Kalicin, Cientista de Dados Líder, Intel, sobre a operacionalização do pipeline de dados da sua organização. É necessário um esforço em equipe para modelar, monitorar e produzir uma fonte contínua de informações valiosas. Este é o episódio final da série Iniciando sua Transformação Organizacional para se Tornar Centrado em Dados."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquiteto Chefe de Soluções, Setor Público, Intel, conversa com Sarah Kalicin, Cientista de Dados Líder, Intel, sobre a operacionalização do pipeline de dados da sua organização. É necessário um esforço em equipe para modelar, monitorar e produzir uma fonte contínua de informações valiosas. Este é o episódio final da série Iniciando sua Transformação Organizacional para se Tornar Centrado em Dados."
---

<div>
{% include transistor.html id="cb72bda4" title="#25 Operationalizing Data Pipelines" %}

{% include youtube.html id="url" %}
</div>

---

Para o episódio final desta série, Darren fala com Sarah Kalicin, Cientista de Dados Líder da Intel, sobre como operacionalizar seu pipeline de dados. Eles discutem como, uma vez que você tenha as informações de seus dados, você pode transformá-los de um experimento científico único em uma fonte contínua de informação.

## Como operacionalizamos as ideias dos insights analíticos?

A primeira coisa a entender sobre o pipeline de dados é que não é como um sistema elétrico fechado que você pode configurar, deixar de lado e, seis meses depois, ligar um interruptor e saber que a lâmpada acenderá. Um pipeline de dados é diferente porque os dados são variáveis; eles podem mudar ou degradar, por exemplo, então você não necessariamente será recompensado com a lâmpada acendendo em algum momento, ou neste caso, a visão que você está procurando. Você sempre tem que pensar no que pode dar errado no sistema e como corrigir esses curtos-circuitos.

Detectar anomalias é uma parte integral do pipeline. Não é possível planejar tudo, então você precisa pelo menos ser capaz de ver quando algo aconteceu fora dos limites da análise original. Um exemplo é a crise da COVID, um evento imprevisível que causou padrões bem fora do normal para muitos sistemas. Outro exemplo seria uma empresa que produz widgets. Para saber quantos widgets produzir, o pipeline de dados contém a demanda dos clientes, o suprimento atual e a perda de rendimento. Eles podem ser bastante estáveis ao longo do tempo, mas pode haver, por exemplo, um evento de relações públicas que faça com que a demanda dos clientes exploda. Isso pode ter um grande impacto nos modelos. Aprendizado de máquina e aprendizado profundo analisam padrões conhecidos e, se nunca tiverem visto esses padrões antes, os modelos vão falhar ou degradar. Você precisa se manter à beira da descoberta.

A única maneira de se manter no limite da descoberta é ter suas linhas de dados automatizadas para acesso oportuno à informação. Essa é a vantagem competitiva: dados atuais e perspicazes que podem ajudá-lo a resolver suas perguntas rapidamente.

As equipes de TI e de dados precisam colaborar na automação e determinar o que deve ser automatizado para os dados recebidos, bem como gerenciar quaisquer alterações no modelo que os cientistas de dados desejam fazer, para que possa ser facilmente integrado novamente ao fluxo de trabalho.

## Implantação de Curto Circuito

Existem dois tipos de controles que podem prevenir curtos-circuitos de implantação: controles do sistema analítico e controles organizacionais.

O controle do sistema analítico consiste em utilizar os modelos que você treinou para trabalhar, alimentando os dados para responder facilmente às suas perguntas. Esses modelos implantados devem ser moderados para verificar a precisão dos dados. Muitas coisas podem afetar adversamente os dados, como mudanças ambientais, calibração de máquinas, problemas de distribuição, entre outros.

Isso não é tão diferente do mundo do desenvolvimento de software onde as mudanças podem afetar as previsões. O departamento de TI está familiarizado com o processo de execução de testes para garantir que seus modelos ou aplicativos estejam funcionando de acordo com as diretrizes estabelecidas, portanto, os DevOps e cientistas de dados devem aproveitar esses recursos e conhecimentos. Não há necessidade de inventar nenhum novo processo, mas, em vez disso, os grupos devem combinar recursos para se prepararem para o sucesso.

Os controles organizacionais remontam a ter uma base organizacional comprometida em ser centrada em dados e fornecer as pessoas e os recursos adequados para trabalhar juntos em prol de objetivos comuns. A melhor chance de obter a operacionalização ocorre quando há colaboração, confiança, compreensão das necessidades e ciclos de feedback entre os grupos da organização.

Os circuitos de feedback são essenciais neste processo. Por exemplo, especialistas em determinada área podem fornecer informações sobre a dinâmica do mercado para que os cientistas de dados possam monitorar o modelo em relação a essas mudanças nos dados. Se um modelo for utilizado ao longo do tempo, ele precisará constantemente passar por iterações e melhorias.

Os consumidores dos dados devem ter um painel que lhes forneça informações e permita investigar o motivo de algo parecer um pouco estranho. Quanto mais eles puderem investigar ou levantar questões que precisam ser investigadas, mais capacitada sua organização estará.

## Tubulação

Uma chave do lado de TI para ajudar a operacionalizar o pipeline de dados é usar um controle de versão como o GitHub, para que você possa ter acesso a versões anteriores do seu modelo. Para fins de auditoria, a capacidade de armazenar os dados que criaram o modelo e outros dados históricos também é importante. Você deseja poder analisar os padrões e ver como determinada característica mudou ou impactou o modelo. Você também pode inserir dados históricos em seus novos modelos para ver o quanto eles afetam seus dados atuais.

Por exemplo, alguns sistemas terão uma imagem distorcida com um grande número de pessoas trabalhando em casa durante a COVID. Um caso em questão é a Marinha. Desde a COVID, 95% de seus trabalhadores de TI estão trabalhando remotamente, e sua produtividade aumentou 35%. A partir desse único ponto de dados, poderíamos dizer que todos irão trabalhar em casa a partir de agora. Você continuará a ter um aumento de 35%, ou se as pessoas voltarem ao escritório, verá uma diminuição de 35%? Obviamente, esse único ponto de dados não é necessariamente suficiente para prever a produtividade real.

Outra ferramenta que a área de TI pode oferecer é a integração e implantação contínua. Ao usar o Jenkins, o GitHub Actions ou uma ferramenta similar ao trabalhar em um modelo, você pode executar automaticamente testes em seu modelo com seus dados ou gerar dados falsos instantaneamente.

As pessoas de TI e os cientistas de dados precisam colaborar sobre o que e como monitorar a saída dos modelos. A TI pode monitorar a saída automaticamente e também pode monitorar o desempenho dos modelos na infraestrutura. Um exemplo é que a TI, com a implantação automática de integração contínua, pode alertar rapidamente os cientistas de dados quando um modelo está levando mais tempo do que o normal para evitar que ele saia do controle. Se a TI estiver investida na criação de valor dos dados, o que geralmente tem sido ausente na indústria como um todo, o processo será mais fácil e coerente para todos.

Outro aspecto a ser considerado é o desenho dos experimentos, pois as interações entre variáveis e características também são importantes. Os especialistas no assunto podem ajudar a determinar quais são as interações potenciais, e você pode modelá-las para auxiliar na compreensão da variabilidade esperada.

É empolgante que um cientista de dados possa transformar matéria-prima em insights. No entanto, isso requer uma equipe. Quanto mais todos na sua organização puderem aprender uns com os outros em um ambiente de equipe, mais coisas incríveis podem acontecer.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
