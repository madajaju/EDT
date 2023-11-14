---
layout: posts
title: "Obsessão Ilógica com Lógica."
number: 13
permalink: episode-EDT13-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 13
tags:
    - data
    - organizationalchange
    - people

date: Wed Aug 12 2020 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Andrew Padilla

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Líder de pensamento Andrew Padilla, da Datacequia, vislumbra novos avanços na gestão de dados e colaboração que permitiriam que os dados evoluíssem da mesma forma que o software em termos de visibilidade, acessibilidade, usabilidade e portabilidade. Ele descreve como uma infraestrutura componível abordaria as preocupações tanto de engenheiros de software quanto de cientistas de dados."
video: "https://youtu.be/F1hfANcSQj4"
description: "Líder de pensamento Andrew Padilla, da Datacequia, vislumbra novos avanços na gestão de dados e colaboração que permitiriam que os dados evoluíssem da mesma forma que o software em termos de visibilidade, acessibilidade, usabilidade e portabilidade. Ele descreve como uma infraestrutura componível abordaria as preocupações tanto de engenheiros de software quanto de cientistas de dados."
---

<div>
{% include transistor.html id="4272c3a1" title="#13 Illogical Obsession with Logic" %}

{% include youtube.html id="F1hfANcSQj4" %}
</div>

---

## Uma Contraposição de Preocupações <h2>

Nos últimos dez anos, os profissionais de dados aumentaram drasticamente sua capacidade de tornar o software visível, acessível, utilizável e portátil, mas, no que diz respeito aos dados, não houve avanço equivalente. Isso é algo que tanto os profissionais de software quanto os de dados devem considerar. Quais são as preocupações de cada lado? O que podemos aprender um com o outro? Atualmente, os dois lados são diametralmente opostos em muitos aspectos.

No lado da engenharia de software, a lógica de negócio é a principal preocupação. Para ter interfaces coerentes, os engenheiros escondem os detalhes. Os dados são vistos como uma saída. Por outro lado, os cientistas de dados estão mais preocupados com o contexto dessas saídas e construções de dados: os metadados. Por exemplo, a linhagem dos dados é importante para um cientista de dados ver como as coisas mudam ao longo do tempo, enquanto um engenheiro de software tentaria esconder esses detalhes para evitar problemas como variabilidade e erros.

Tratar o desenvolvimento de dados e metadados como uma disciplina própria, e não no contexto de como fazemos atualmente o software, poderia ajudar na expansão da indústria. Em outras palavras, precisamos buscar construir uma infraestrutura componível que leve em consideração as preocupações de ambos os lados.

Um exemplo de como estamos lidando atualmente com os problemas de metadados em uma empresa ilustra essa ideia. Hoje, temos sistemas centralizados de gerenciamento de metadados. Queremos saber onde estão todos os nossos dados: quem, onde, por quê e como. Capturar o que as pessoas estão fazendo e inseri-lo em um sistema centralizado é uma maneira muito software de fazer as coisas. Se permitirmos que os dados cresçam por si só, podemos adotar o que os desenvolvedores de software fazem, mas em um contexto de dados. Poderíamos construir um ecossistema maior se, em vez de tanto esforço individual em ambos os lados, colocássemos tudo em um repositório sincronizado e centralizado e permitíssemos que os desenvolvedores de dados desenvolvessem como os engenheiros de software fazem. Poderíamos construir e curar como empreendimentos privados, mas então compartilhar essas curadorias com os outros. Semelhante à mudança no gerenciamento de configuração nas décadas de 1990 e 2000, de um local centralizado para um sistema mais distribuído, o compartilhamento poderia acontecer de forma mais fácil e fluida.

## Conhecimento Digital DNA <h2>

O conhecimento digital que temos depende tanto da lógica quanto dos dados. O software e os dados compartilham os mesmos elementos básicos e, à medida que avançamos no conhecimento, existem fortes relações entre os dois. O que diverge é que temos a infraestrutura e as ferramentas para desenvolver o lado do software, implementá-lo e torná-lo visível, acessível e utilizável. Como não pensamos da mesma forma no lado dos dados, estamos limitados nessas áreas. Por exemplo, uma forma antiga de pensar é quando cientistas de dados realizam análises avançadas e aprendizado de máquina a partir de seus dados, obtendo informações valiosas, mas não há um mecanismo repetível, limitando seu uso.

Uma vez que essa perspectiva seja reconhecida tanto pela comunidade de dados quanto pela comunidade de software, podemos adotar uma abordagem diferente usando os sucessos do desenvolvimento de software para dados. Em vez de aplicar as experiências pessoais e preconceitos do software em geral, podemos observar como os dados operam, como são semelhantes, mas têm suas próprias preocupações. Uma analogia seria levar sua família para a Disneyland. As experiências e interações lá representam a dinâmica do software. Você poderia transferir as experiências para o lado dos dados. Mas imagine no mundo real se você tivesse que deixar essa experiência na porta e, quando voltasse para casa, não soubesse nada sobre ela. Esse é o problema. Toda vez que vamos para um sistema ou ecossistema diferente, reinventamos um novo mundo e não temos consciência dos outros mundos que tivemos que deixar para trás. Se fosse possível compartilhar a experiência ou levá-la conosco, descobriríamos que teríamos uma infraestrutura de conhecimento muito mais vibrante. Então, da próxima vez que você visitar a Disneyland, com base em sua experiência, saberá qual é o melhor horário do dia, como verificar os tempos de espera, etc. Sem a experiência de trabalhar com os dados em conjunto com o aplicativo, é quase como começar do zero toda vez.

Um exemplo real é a amnésia que ocorre em sistemas como os de cuidados de saúde, onde um profissional de dados cria uma integração do zero e, alguns anos depois, outra pessoa precisa fazer o mesmo. Se pudermos estabelecer melhores relações com os dados por meio de mapeamento, reutilização e aumento da eficiência. Por exemplo, por que temos tantas noções de uma pessoa em termos de modelagem? Claro que o contexto importa, mas por que não podemos ver as diferentes variantes de uma pessoa e então ser capazes de mapeá-las? No sistema de saúde VA, eles têm vários sistemas onde um paciente significa algo diferente em cada um. O mapeamento forneceria um terreno comum, mas permitiria alterações dependendo do contexto, desde que a operação de mapeamento fosse visível. Então poderíamos avançar com diferentes tipos de casos de uso e reutilização.

Uma grande lacuna é que conseguimos operacionalizar logicamente o K8s de forma eficaz, mas um serviço equivalente não existe para dados. Embora exista uma medida paliativa com o S3, não é a resposta. Existe uma grande necessidade em todas as indústrias por um serviço similar ao K8s que aborde dados. A necessidade de colaboração é importante aqui. É claro que os profissionais de dados querem adicionar valor à sua organização, mas uma parte disso depende de uma comunidade.

## Fechando as Lacunas <h2>

O nome da empresa Datacequias é baseado nas acequias do Novo México, que servem como exemplo do tipo de colaboração necessária para os dados. O Novo México é uma região árida, então, há anos, para tornar a terra fértil, as pessoas construíram uma série de valas de irrigação chamadas acequias. Ninguém as possuía, mas eles as construíram, administraram e mantiveram por necessidade e pelo bem comum. O ambiente inóspito no mundo dos dados geralmente envolve restrições orçamentárias e posse de dados, mas uma curadoria de dados baseada na comunidade seria benéfica para todos, assim como as acequias beneficiaram a todos.

Imagine se os profissionais de dados pudessem bifurcar um conjunto de dados em qualquer repositório central. Eles poderiam gerenciá-lo e evoluí-lo de acordo com suas próprias necessidades. Se houver uma mudança no repositório central gerenciado por um órgão padrão, eles poderiam incorporar essas mudanças imediatamente ou optar por não fazê-lo. De qualquer forma, eles teriam a linhagem de volta à fonte original. Hoje, quando usamos um ativo que está fora da empresa, fazemos uma cópia dele que permanece no tempo. Isso requer o rastreamento manual e gerenciamento das atualizações. Com um repositório central, todos poderiam co-criar, colaborar e criar comunidades com fundamentos comuns e linhagem visível.

Isso é apenas a ponta do iceberg em uma mudança fundamental na indústria para tornar os dados mais valiosos para sua organização. Para obter mais informações sobre Andrew Padilla e Datacequia, visite datacequia.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
