---
layout: posts
title: "Governança Moderna de Dados"
number: 70
permalink: episode-EDT70-pt
lang: pt
nav_exclude: true
nav_order: 70
tags:
    - cloud
    - datamanagement
    - compliance
    - multicloud
    - policy
    - technology

date: 2021-11-25T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Matthew Carroll

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto Principal de Soluções da Intel, discute a realidade e o futuro da governança de dados moderna com Matthew Carroll, CEO da Immuta."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquiteto Principal de Soluções da Intel, discute a realidade e o futuro da governança de dados moderna com Matthew Carroll, CEO da Immuta."
---

<div>
{% include transistor.html id="752e2562" title="#70 Modern Data Governance" %}

{% include youtube.html id="url" %}
</div>

---

À medida que as organizações migram para a nuvem, a forma como pensamos sobre dados e como os utilizamos está mudando completamente; nos últimos cinco ou seis anos, toda a camada de infraestrutura mudou. O desempenho, a escala, as regras necessárias e o número de usuários que desejam combinar dados aumentaram exponencialmente. Gerenciar isso em escala não é trivial, e é onde a Immuta entra em cena.

Com o tempo, a indústria repensou o paradigma do armazenamento de dados. Anteriormente, cada equipe de dados construía produtos de dados em células isoladas e, em seguida, entregava a uma unidade de negócios. A unidade de negócios possuía seus dados apropriados que forneciam um serviço de qualidade a eles. Agora, de repente, queremos que qualquer pessoa possa combinar dados em toda a empresa: analistas de negócios, cientistas de dados, engenheiros de dados, etc. O número de usuários mudou, e não se trata mais de aplicativos de pesquisa; trata-se de transformar e construir fluxos de dados.

Isso é uma diferença que requer um nível de serviço, tempo e sofisticação diferentes, que nunca existiram antes. Torna-se ainda mais complexo quando se adiciona leis de privacidade, classificação de dados e regras e regulamentações em constante mudança.

O que a Immuta está tentando fazer é tornar possível para qualquer usuário combinar potencialmente qualquer conjunto de dados, interno ou externo à organização, para obter alguma compreensão. Tudo se trata de escala. A política precisa ser separada da plataforma para escalar a política para todos esses novos usuários e todas as diferentes combinações de dados. Segurança, privacidade e governança são ótimas, mas se você não conseguir fazer, ninguém fica satisfeito.

Uma lição que a Immuta aprendeu logo no início é que o proxy não funciona. É como tentar mover petabytes de dados por um canudo: eles se tornam um gargalo. É fácil culpar a camada intermediária sempre que há um problema, pois ela é sempre um gargalo, pois está entre as ferramentas e os dados. Esse é um problema clássico de middleware.

O segundo problema com esse paradigma de design é que, com a virtualização de dados clássica, funcionava porque havia um conjunto claro de dados. No entanto, quando existem petabytes de dados, a abordagem de "me dê tudo e nós vamos descobrir" se desfaz muito rapidamente devido ao tamanho bruto dos dados, além de todas as regras e políticas associadas a eles.

Na virtualização normal, é necessário incorporar nativamente na infraestrutura de computação em nuvem em Snowflake, em Synapse, etc. Em vez de colocar essa camada de abstração em cima dessas diferentes ferramentas, a camada de abstração está do lado da política.

A política é tão boa quanto a capacidade de auditá-la. É como uma cadeia de evidências. A chave é poder provar se este usuário está em conformidade ou não, em toda a infraestrutura de computação. Com a governança moderna de dados, a política está sendo escalonada internamente e unificando auditorias, devido ao nível de complexidade de tantas pessoas realizando diversas atividades com os dados. A auditoria da política deve ser drasticamente simplificada, caso contrário, é impossível determinar a conformidade.

Existem três tipos de políticas a serem consideradas: operacional, regulatória e contratual. Um exemplo de quão complicado tudo isso pode se tornar é olhar para uma empresa como a Cummins. Se eles modernizarem na nuvem, eles terão que considerar regulamentos para cada mercado. Para um de seus motores, e se eles tiverem que escrever uma regra personalizada para cada país em que estão, mas também para cada país em que não estão, porque esses países não devem ser capazes de vê-la? Isso não é escalável quando estamos falando de dezenas de milhares de fontes de dados para os esquemas, que estão mudando constantemente. Existem petabytes de dados de telemetria desses motores.

O que você gostaria de escrever é que você só pode ver os dados do país em que reside uma vez e, em seguida, se aplica em todos os lugares. Mas não é assim que é feito. Portanto, eles estariam escrevendo algo como 700 políticas para um objeto de dados, quando deveria ser apenas uma. Acompanhar todas as políticas e regulamentos em constante mudança para cada fonte de dados seria quase impossível. Você estaria sempre em desacordo.

Nunca foi tão fácil globalizar uma empresa como hoje, e os clientes da Immuta esperam que eles possam executar infraestrutura globalmente em qualquer nuvem. Eles devem ser capazes de mover seus dados para qualquer nuvem e estar em plena conformidade.

Immuta aplica regras aos dados por meio de tags em vez de usar os dados brutos, porque cada domínio possui sua própria terminologia sobre como classificar e falar sobre seus dados. Portanto, eles começaram a classificar e marcar de forma genérica para aplicar modelos conceituais gerais, como no caso do HIPAA. No entanto, esses modelos ainda não são infalíveis e há um longo caminho a percorrer.

A visão de Matt como CEO do Immuta é chegar a um estado em que domínios possam compartilhar suas políticas. Por exemplo, na área da saúde, há uma boa razão para que a Moderna e a Pfizer queiram trabalhar juntas. Poderia haver um acordo sobre como lidar com controles de dados do mundo real com a academia. Portanto, se houvesse uma política consistente que pudesse ser compartilhada e colaborada em uma nuvem de políticas conceituais, isso seria o certo a se fazer.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
