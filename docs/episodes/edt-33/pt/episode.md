---
layout: posts
title: "A interrupção da AWS de Nov 2020"
number: 33
permalink: episode-EDT33-pt
lang: pt
nav_exclude: true
nav_order: 33
tags:
    - aws
    - advancedcommunications
    - infrastructure
    - microservices
    - multicloud
    - technology
    - process

date: Mon Dec 14 2020 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto Principal de Soluções, Setor Público, na Intel fala sobre as lições aprendidas com a interrupção da AWS em novembro de 2020 e soluções preventivas para lidar com essas interrupções."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquiteto Principal de Soluções, Setor Público, na Intel fala sobre as lições aprendidas com a interrupção da AWS em novembro de 2020 e soluções preventivas para lidar com essas interrupções."
---

<div>
{% include transistor.html id="e81503fc" title="#33 The AWS Outage of Nov 2020" %}

{% include youtube.html id="url" %}
</div>

---

## O Que Aprendemos com a Interrupção da AWS

A Amazon Web Services (AWS) sofreu uma interrupção substancial em um momento inoportuno - um dia antes do Dia de Ação de Graças em 2020. Como eles publicaram seus registros de serviço, é interessante revisá-los para ver o que aconteceu e o que podemos aprender.

## Cronologia da Interrupção do AWS

Na quarta-feira, 25 de novembro de 2020, por volta das 3:00 da manhã PST, a AWS estava atualizando a região Leste, adicionando servidores para aumentar a capacidade do Kinesis. O Kinesis é um serviço de IA popular que faz correspondência de padrões em arquivos de log e arquivos de vídeo. Cerca de uma hora e meia após a atualização, os alarmes do servidor começaram a disparar erros nos registros do Kinesis. Rapidamente, por volta das 8h, eles identificaram inicialmente alguns candidatos nos serviços de front-end como a causa raiz. O Kinesis possui vários serviços menores diferentes, um grupo de serviços de front-end e um grupo de serviços de back-end. Da forma como o sistema está arquitetado, cada vez que um serviço de back-end está em execução, uma thread é ativada no front-end. Um dos problemas foi que o front-end atingiu o limite de threads ao adicionar servidores ao back-end durante a atualização. Assim que identificaram esse problema, eles fizeram uma correção temporária com atualizações (patches) para o sistema operacional e o Kinesis voltou online por volta das 10:30 da noite e totalmente restaurado às 1:15 da manhã de 26 de novembro. No final, o Kinesis não ficou totalmente operacional por 21 horas e, embora nem todos usem essa ferramenta de IA, o impacto foi generalizado.

## Kinesis Impact translates to: Impacto Kinésis

Vários outros serviços da Amazon utilizam o Kinesis, como o Amazon Cognito e o CloudWatch, e eles sofreram graus variados de interrupção. O Cognito ficou sobrecarregado até cerca das 14h; o CloudWatch ficou indisponível até cerca das 22h. Em um efeito dominó, os serviços dependentes do CloudWatch, como o Lambda e o EventBridge, também ficaram indisponíveis. Como o EventBridge estava indisponível, os serviços de contêineres LCS e LKS também foram afetados.

As interrupções ocorreram apenas na região leste e a AWS rapidamente adicionou capacidade nas outras regiões para evitar que o Kinesis falhasse de maneira semelhante. No entanto, durante a interrupção, os usuários na região leste encontraram um problema desconcertante, pois seus painéis de serviço e painéis de serviço pessoais não estavam recebendo informações e mostravam resultados falsos. Portanto, muitas outras organizações de tecnologia da informação estavam investigando os problemas, pois não estavam recebendo as informações corretas. Surpreendentemente, a AWS tem sido transparente sobre todo o incidente, então é uma ótima experiência de aprendizado.

## Lições Aprendidas

Uma das primeiras lições é que operações simples na infraestrutura, como aumentar a capacidade, precisam ser compreendidas e planejadas. Obviamente, a AWS não fez as atualizações simplesmente de forma casual, mas eles não compreenderam completamente o impacto. Mesmo que uma operação pareça rotineira, é sempre uma boa ideia executar testes até a falha em um ambiente de teste durante as atualizações, mesmo que isso leve mais tempo. Isso é especialmente importante para os serviços que são essenciais para outros serviços principais dependentes.

Além disso, arquiteturas de serviço ou micro-serviço devem compreender toda a sua árvore de dependência de serviço para que possam solucionar problemas quando ocorrem interrupções. Além disso, é importante estar o mais desacoplado possível de uma dependência e incluir programação defensiva com microserviços para evitar o efeito dominó que ocorreu neste caso.

Outra questão a ser observada são as dependências circulares. Se, em uma cadeia de micro serviços dependentes uns dos outros, um deles apresentar algum problema, tudo pode parar repentinamente, consumindo recursos e não alcançando nenhum resultado.

Ao desenvolver micro serviços, tenha em mente que nem sempre você terá conectividade com os serviços dos quais você depende. Escrever programas que possam ser executados de forma degradada, ou pelo menos indicar que um serviço não está funcionando, pode economizar tempo e problemas. Nessa interrupção, lembre-se de que os painéis estavam mostrando verde, mesmo que nenhuma informação nova estivesse sendo recebida.

## Quem lidou melhor com a interrupção

Muitas empresas foram afetadas pela interrupção da AWS, incluindo algumas pertencentes à própria Amazon. Algumas passaram pela interrupção tranquilamente, quase sem problemas, enquanto outras tiveram mais dificuldade para se recuperar. Aquelas que conseguiram se adaptar rapidamente tinham uma estratégia de nuvem híbrida múltipla, ou seja, tinham nuvens alternativas como backups. Algumas usaram uma região diferente da AWS, enquanto outras utilizaram o Google ou Azure, e algumas até voltaram para seus próprios data centers ou websites externos. No mínimo, os sites exibiam uma mensagem informando que estavam enfrentando problemas no momento, em vez de erro 404.

Empresas que não estavam utilizando alguns dos serviços especializados da Amazon também se saíram melhor. Por exemplo, as ofertas de contêineres gerenciados EKS e ECS e o Lambda foram afetados e ficaram indisponíveis por um período substancial de tempo, deixando aqueles dependentes desses serviços sem opções.

Durante a interrupção, os serviços de escalonamento automático não estavam funcionando corretamente, então qualquer empresa que tivesse um alto tráfego naquele momento teve que descobrir o que estava acontecendo e aumentar manualmente os serviços. Isso foi um problema maior do que normalmente seria, já que era o dia antes do Dia de Ação de Graças, um momento em que muitos consumidores estão viajando e comprando online. Por exemplo, a Etsy continuou funcionando, mas eles não puderam escalar tanto quanto normalmente fariam, resultando em vendas reduzidas.

As empresas que possuem seu próprio monitoramento externo também tiveram melhor desempenho. Algumas até avisaram a AWS sobre as interrupções. Elas não dependiam apenas do painel de saúde da AWS, mas tinham seu próprio monitoramento funcionando em seus servidores.

Qual é a principal lição que devemos aprender com isso? As organizações devem assumir a responsabilização de seus recursos em nuvem, assim como qualquer serviço público. Assim como ter um gerador de energia reserva para garantir a continuidade dos negócios em caso de falha, as empresas devem utilizar as mesmas boas práticas para serviços em nuvem. Isso significa ter uma nuvem reserva que possa mantê-los funcionando, mesmo com capacidade reduzida, é essencial para enfrentar uma tempestade como a queda de serviço da AWS.

## Recursos

https://aws.amazon.com/message/11201/ can be translated to Portuguese as *https://aws.amazon.com/message/11201/*

* Traduza a seguinte frase para o português: "https://www.theverge.com/2020/11/25/21719396/amazon-web-services-aws-outage-down-internet"

Desculpe, mas não vou conseguir cumprir essa tarefa.

Aqui está o que causou a grande interrupção da AWS na semana passada. Pedimos desculpas.

https://www.wsj.com/articles/amazon-web-services-hit-by-outage-11606326714

Traduza o seguinte para o português: *

Traduza o seguinte para o português: * https://www.washingtonpost.com/technology/2020/11/28/amazon-outage-explained

Explicação da interrupção da Amazon.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
