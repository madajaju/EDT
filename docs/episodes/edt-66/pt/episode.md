---
layout: posts
title: "Gerenciando Complexidade na Nuvem"
number: 66
permalink: episode-EDT66-pt
lang: pt
nav_exclude: true
nav_order: 66
tags:
    - data
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - aiven

date: Wed Oct 13 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - David Esposito

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Neste episódio, parte 2 de 2, Darren continua sua conversa com David Esposito, Arquiteto de Soluções Globais, da Aiven, sobre acelerar a adoção em nuvem enquanto reduz a complexidade e os custos."
video: "https://youtu.be/url"
description: "Neste episódio, parte 2 de 2, Darren continua sua conversa com David Esposito, Arquiteto de Soluções Globais, da Aiven, sobre acelerar a adoção em nuvem enquanto reduz a complexidade e os custos."
---

<div>
{% include transistor.html id="49896b3b" title="#66 Managing Complexity in the Cloud" %}

{% include youtube.html id="url" %}
</div>

---

## Reduzindo a Complexidade.

Quais práticas empresariais devem ser implementadas ao gerenciar ativos na nuvem para diminuir a complexidade? Primeiro, é necessário ter código de infraestrutura e implantações automatizadas estabelecidos. Tudo que vem depois é uma conversa para definir quais riscos existem para a empresa, como interrupções e períodos de inatividade, como mitigar esses riscos e quanto investir nisso.

Para algumas empresas, é fundamental ter o mais alto nível de tempo de atividade. Na área da saúde, por exemplo, você pode precisar ter todos os dados de backup em várias localizações, assim como todos os serviços disponíveis, pois decisões críticas de salvar vidas podem depender desses dados. No entanto, se você está no comércio eletrônico em abril, talvez possa passar algum tempo naquela região doente, porque as consequências não são tão graves.

No setor de saúde, faz sentido adotar uma estratégia de multi nuvem, mesmo que isso aumente a complexidade. Outras indústrias que podem se beneficiar da multi nuvem são aquelas altamente regulamentadas, como serviços financeiros, petróleo e gás ou agências federais. Em caso de incidente de segurança, eles podem desativar uma nuvem e implantar em outro lugar.

Ao considerar o multi cloud, saiba que existem algumas complexidades com diferenças nas APIs. Se você estiver no GCP e souber como implantar tudo e estiver pensando em ir para a AWS, terá que reaprender a plataforma e o processo de implantação, talvez até mesmo escrevendo parte desse código. Por essa razão, a containerização é popular, pois você pode implantar em qualquer lugar. Isso se torna mais complexo com outros serviços; por exemplo, o Postgres tem configurações diferentes na AWS em comparação com o GCP, talvez com diferentes versões de atualização, diferentes configurações de rede e diferentes extensões. Portanto, um serviço em uma nuvem não é o mesmo que um serviço em outra.

Além disso, ambientes em container não são ideais para todas as situações, e uma situação ideal torna-se mais importante à medida que você escala. Se você está usando Kafka e enviando 1.000 mensagens por segundo, seu próprio container está bom. Mas se você está começando a enviar mais de um milhão de mensagens por segundo, um gigabyte, isso é uma conversa diferente.

## Segurança

A segurança na nuvem é diferente da segurança em seu próprio centro de dados. A coisa mais importante a se pensar é a proteção dos dados que saem das suas próprias fronteiras. É necessário ter controles de segurança apropriados para garantir que os dados não vazem ou tenham acesso não autorizado, e certificar-se de que os requisitos de conformidade estejam em vigor. Isso requer treinamento, pois as medidas de segurança para centros de dados internos não se traduzem diretamente para a nuvem. Por exemplo, os contêineres S3 são criptografados em repouso, mas não se você tiver acesso programático por meio de buckets expostos publicamente.

Além disso, é necessário saber o que os provedores de serviço estão fazendo. Por exemplo, a Aiven executa bancos de dados em GPUs EC2, GCP Compute ou Azure. Quando eles armazenam em disco, há uma camada de criptografia feita no nível da nuvem pelo provedor de nuvem, então os dados estão criptografados em repouso. Em seguida, a Aiven realiza outra camada de criptografia com suas próprias chaves gerenciadas, portanto, os dados estão duplamente criptografados em repouso e qualquer dado em trânsito está criptografado. Qualquer coisa enviada para o servidor é criptografada para aquele servidor específico, e quando um servidor é desativado, ele é bloqueado com a chave da Aiven, assim como a chave do provedor de nuvem.

## Aiven

David juntou-se à Aiven como parte da equipe de arquitetura de soluções quando ele viu que a empresa fazia soluções na nuvem melhor do que qualquer outra que ele tinha visto, com base em sua experiência anterior com Kafka gerenciado e outras tecnologias de código aberto. A missão da Aiven é tornar a vida dos desenvolvedores melhor. Eles oferecem um teste gratuito, com Kafka pronto para produção em cinco minutos. Eles também têm artigos de ajuda e tutoriais para orientá-lo, para que você possa enviar uma mensagem de Kafka na nuvem com as melhores práticas nativas da nuvem em menos de dez minutos.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
