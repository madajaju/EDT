---
layout: posts
title: "Gestão de Dados Moderna"
number: 71
permalink: episode-EDT71-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 71
tags:
    - datagovernance
    - data
    - immuta
    - dataaccess
    - identitymanagement
    - ceo
    - technology
    - process

date: Wed Dec 01 2021 19:00:00 GMT-0500 (Eastern Standard Time)
guests:
    - Darren W Pulsipher
    - Matthew Carroll

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto Chefe de Soluções na Intel, continua sua discussão aprofundada sobre a realidade e o futuro da governança de dados moderna com Matthew Carroll, CEO da Immuta. Neste episódio, eles discutem a Classificação de Dados, Políticas e Governança."
video: "https://youtu.be/Qv8Y32qjaGA"
description: "Darren Pulsipher, Arquiteto Chefe de Soluções na Intel, continua sua discussão aprofundada sobre a realidade e o futuro da governança de dados moderna com Matthew Carroll, CEO da Immuta. Neste episódio, eles discutem a Classificação de Dados, Políticas e Governança."
---

<div>
{% include transistor.html id="068a1dff" title="#71 Modern Data Governance" %}

{% include youtube.html id="Qv8Y32qjaGA" %}
</div>

---

Na governança de dados moderna, a primeira premissa é que você precisa separar a política da plataforma.

O segundo é que não pode haver ontologia. Se alguém tentar criar um super esquema de tudo, é impossível, mas você precisa de um esquema para aplicar políticas. Portanto, se um usuário deseja juntar duas colunas, é preciso ter uma nova política. Os dados sensíveis devem ser descobertos, tanto por meio de identificadores diretos quanto indiretos. Identificadores indiretos são mais difíceis, e técnicas devem ser aplicadas para mitigar o risco de ataques de vínculo.

A terceira premissa é a introdução de uma série de técnicas que aprimoram a privacidade, como mascaramento, censura, autorização, etc.

Tradução para o português: Essas ferramentas são automatizadas como parte da governança moderna de dados. Um exemplo paralelo é como você costumava precisar ser um mago para remover olhos vermelhos em uma foto. Agora, você clica em um botão e os olhos vermelhos desaparecem. É a mesma coisa em relação à privacidade. Precisamos desse botão fácil para automaticamente encontrar um potencial identificador indireto quando há risco maior do que muito baixo de reidentificação.

Além da privacidade, há uma infinidade de outras coisas com dados que devem ser automatizadas antes da classificação. Embora a Immuta não aprofunde a transformação de dados e esses fluxos de dados, eles fornecem uma API e interface de linha de comando. Os engenheiros que estão construindo esses pipelines podem fazer seu trabalho, e a Immuta irá informá-los sobre as regras, e a atualização das regras pode fazer parte do pipeline. Eles querem ser um condutor para essa camada.

Existem alguns novos papéis neste campo, como "data steward" e "data governance engineer", que são segregados do "data engineer". E então os usuários de dados são realmente três usuários separados com três necessidades separadas.

Primeiro, existem cientistas de dados que possuem habilidades especializadas e precisam de dados de uma forma específica. Às vezes, eles precisam de ferramentas específicas e um ambiente de computação específico em algum lugar do mundo para cumprir sua missão.

Por outro lado, os engenheiros de dados e os engenheiros analíticos, um construindo os pipelines e outro sustentando os pipelines, precisam de acesso rápido a uma solução emergencial quando algo quebra. Eles alimentam isso em um pipeline e entregam para alguém, verificando se está atualizado.

Finalmente, há os governadores que estão tentando acompanhar as regulamentações.

Esses usuários têm opiniões e necessidades muito diferentes em relação à governança. Ao aplicar uma nova governança, a coisa mais importante é tratar esses grupos como partes interessadas separadas.

Se você pensa em todos esses papéis de uma maneira binária, como engenheiros de dados, o que acaba acontecendo é que há muitas reuniões, então é impossível escalar. Precisamos criar uma relação simbiótica entre operações de dados, ciência de dados, análise de dados e governança. Um modelo de exemplo é o Salesforce ou o ServiceNow, onde há todo um fluxo de trabalho do início ao fim e não é necessário realizar reuniões. Isso seria verdadeiras operações de dados.

Immuta tem, filosoficamente, uma abordagem baseada em atributos em vez de uma abordagem baseada em funções. O problema com uma abordagem baseada em funções é que você acaba acumulando excesso de funções à medida que adiciona mais. Uma organização farmacêutica, por exemplo, tinha mais de 800.000 funções porque as funções nunca podem ser excluídas devido à necessidade de reproduzir ensaios de medicamentos. O excesso de funções pode se tornar rapidamente um problema de escala.

Acesso baseado em atributos é a chave para combater isso. Em vez de adicionar constantemente funções, os usuários possuem atributos específicos e consistentes. Por exemplo, um atributo de um usuário pode ser que eles estão marcados para que possam ver apenas seu próprio estado. Com acesso baseado em funções, todos os estados, independentemente de se podem ser visualizados ou não, teriam que ser escritos. Essa moderna gestão de identidade é altamente escalonável. O acesso por atributo simplifica o número de políticas que precisam ser escritas e ajuda no desempenho.

Traduza o seguinte para o português: Regulamentações globais modernas, como o GDPR, no entanto, também exigem um propósito. É aqui que o acesso a atributos se torna importante: quais propósitos cada pessoa pode operar? Sob um EULA, os dados devem ser processados apenas pelos usuários para a razão declarada. Caso contrário, é necessário fazer uma análise de risco antes que os dados sejam usados operacionalmente para produção.

Neste momento, estamos no início da governança moderna de dados. Atualmente, os usuários tomam uma decisão binária única em relação aos dados, seja consentimento ou não consentimento. O futuro está em algum lugar no meio: consentimento limitado. Por exemplo, se uma pessoa fornecer seus dados genômicos para uma empresa como a ancestry.com, o que isso significa para seu filho no futuro? A criança não deu consentimento para que seu material genético fosse repassado e possivelmente examinado por uma empresa de seguros de saúde para determinar riscos. Na governança moderna de dados, Matt vê os consumidores fornecendo consentimento limitado, como permitir que uma empresa analise apenas o DNA para ancestralidade e mais nada.

O futuro tem que se basear em consentimento e acesso com base em propósito, porque, em última análise, os dados derivados impulsionam os insights, à medida que o aprendizado de máquina em desenvolvimento incorpora dados nos algoritmos.

Para saber mais sobre a Immuta e como construir um programa de governança de dados, acesse Immuta.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
