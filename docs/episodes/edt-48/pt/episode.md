---
layout: posts
title: "VAST Data Revisitado"
number: 48
permalink: episode-EDT48-pt
lang: pt
nav_exclude: true
nav_order: 48
tags:
    - vastdata
    - supplychainoptimization
    - flexibility
    - highperformancecomputing
    - multicloud
    - operationalefficiency

date: 2021-04-29T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Randy Hayes

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Neste episódio, Darren verifica com Randy Hayes, agora vice-presidente de Vendas para o setor público da VAST Data, seis meses após sua última conversa para ver como eles estão se saindo na indústria, o que há de novo na VAST e casos interessantes de uso. Seu novo produto, Gemini, oferece um modelo de negócios de armazenamento diferente."
video: "https://youtu.be/url"
description: "Neste episódio, Darren verifica com Randy Hayes, agora vice-presidente de Vendas para o setor público da VAST Data, seis meses após sua última conversa para ver como eles estão se saindo na indústria, o que há de novo na VAST e casos interessantes de uso. Seu novo produto, Gemini, oferece um modelo de negócios de armazenamento diferente."
---

<div>
{% include transistor.html id="d6fc5e00" title="#48 VAST Data Revisited" %}

{% include youtube.html id="url" %}
</div>

---

A VAST Data tem crescido rapidamente nos últimos seis meses, com uma equipe em expansão e vendas impressionantes, como cerca de 70 petabytes de armazenamento flash para o governo federal. Além do compartilhamento geral de arquivos com seus sistemas de armazenamento totalmente flash, eles têm casos de uso interessantes em áreas como sequenciamento de próxima geração, microscopia confocal e tarefas de simulação de túnel de vento.

A plataforma da empresa permite resolver problemas de leitura aleatória porque todos os dados estão em flash sem o custo exorbitante; a plataforma lida com um alto volume de dados com baixa latência.

## VAST Technology e unidades Intel Optane.

O VAST utiliza as unidades Optane da Intel para alcançar a paridade de leitura/escrita, entre outros benefícios. Como o Optane é uma memória persistente, não há problemas de coerência de cache e não há necessidade de DRAM, o que é uma grande vantagem arquitetônica para evitar falhas ou perda de dados. O custo total por usuário também é reduzido porque você não precisa comprar máquinas grandes com muita memória para armazenamento de arquivos se quiser mais velocidade. Essa camada é eliminada.

Escalabilidade e flexibilidade são duas outras vantagens, pois você pode adicionar mais caixas de dados (D boxes) sem afetar o desempenho, e elas são completamente compatíveis inclusive com múltiplas gerações de flash. Não há um único ponto de falha, e não há limite teórico; a VAST testou até 100 petabytes.

Você pode melhorar o desempenho adicionando caixas de cliente (caixas C), independentes das caixas D. Capacidade com flash é basicamente gratuita, mas você precisa expor esse flash com CPU. As caixas C são completamente estado-finas, então você pode aumentar ou diminuir seu tamanho instantaneamente. VAST garante tempo de atividade porque você tem acesso total a cada PCP na parte de trás.

Dependendo das necessidades de desempenho do cliente, pode haver diferentes números de caixas D e caixas C; por exemplo, um cliente pode não precisar de mais desempenho, mas sim de mais capacidade, então o cluster pode ter, por exemplo, 11 caixas C e 37 caixas D.

Se você tiver uma caixa C e uma caixa D, você terá cerca de 40 gigabytes por segundo de largura de banda, que é o modelo básico. Cada adição de uma caixa D adiciona mais 40 gigabytes de largura de banda. Uma caixa C não satura todos os IOPS, então se você adicionar outra caixa C, você pode obter 350.000 IOPS de uma caixa. Como o flash é limitado pela CPU, quanto mais CPUs você adicionar, mais permite que você aumente a escala.

## Novo Modelo de Negócio de Armazenamento

O novo produto da VAST Data, Gemini, permite aos clientes que precisam de alto desempenho sem muita capacidade licenciar apenas a quantidade de hardware necessária do fabricante contratado, resultando em economia de custos significativa. Os clientes podem aumentar e pagar pela capacidade conforme a necessidade, em vez de incorrer em um custo inicial para futuras necessidades de capacidade.

Do ponto de vista de OPEX, isso faz sentido para muitas empresas. Por exemplo, para um cliente, um sistema totalmente em flash de 30 petabytes que faz um terabyte e meio de largura de banda, o custo é menor do que o S3 de acesso pouco frequente da Amazon. Isso é apenas para um ano; olhando para frente, na verdade é menor do que o Glacier se você olhar para a forma como a Amazon cobra, por gig por mês. E há a flexibilidade de voltar para um modelo CAPEX se isso fizer mais sentido mais tarde.

É importante notar que a VAST está apresentando um appliance, não um armazenamento como serviço, o que pode se tornar um pesadelo de suporte devido a todas as variações de hardware e firmware, quais unidades você está dando suporte, quais interconexões, etc... resultando numa quantidade louca de complexidade. A VAST ainda está enviando as mesmas caixas e servidores; é apenas um modelo de negócio diferente que permite flexibilidade no consumo de armazenamento.

Algumas áreas interessantes onde o VAST pode ser útil é em pesquisas médicas, como patologia digital, que envolve uma quantidade astronômica de dados muitas vezes difíceis de serem acessados pelos pesquisadores porque estão em armazenamento barato e lento. A medicina de precisão com base na composição genética de uma pessoa também é uma possibilidade. Além disso, executar a IA em captura de pacotes pode ser útil na previsão de ataques de adversários avançados.

Outro caso de uso promissor é um cliente com todos os seus dados em um sistema de armazenamento VAST all-flash, em vez de na nuvem, mas realiza todo o processamento na nuvem, podendo trazer de volta apenas os resultados. Os resultados normalmente são muito pequenos, talvez alguns bytes de dados, e são baratos de serem recuperados. Esse tipo de modelo, por exemplo, pode gerar valor através de análises em dados antigos que estão atualmente apenas armazenados e são muito caros para serem movidos.

Há muita flexibilidade para adotar uma abordagem híbrida ou de múltiplas nuvens, onde você tem um sistema de armazenamento centralizado no local que pode ser acessado por vários provedores de nuvem.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
