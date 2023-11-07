---
layout: posts
title: "A Emergência da Rede de Dados Global"
number: 98
permalink: episode-EDT98-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 98
tags:
    - dataarchitecture
    - datamanagement
    - data
    - technology
    - cloud
    - globaldatanetwork
    - macrometa
    - multicloud
    - datamesh

date: Wed Aug 03 2022 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Chetan Venkatesh

img: thumbnail.jpeg
image: thumbnail.jpeg
summary: "Neste episódio, Darren relembra com Chetan Venkatesh, CEO da MacroMeta. Venkatesh possui uma longa história em gerenciamento de dados desde os primeiros dias da Grid Computing e iniciou a MacroMeta para lidar com o gerenciamento de dados nas bordas geograficamente dispersas, centros de dados e nuvens."
video: "https://youtu.be/9PKbVk-VvZo"
description: "Neste episódio, Darren relembra com Chetan Venkatesh, CEO da MacroMeta. Venkatesh possui uma longa história em gerenciamento de dados desde os primeiros dias da Grid Computing e iniciou a MacroMeta para lidar com o gerenciamento de dados nas bordas geograficamente dispersas, centros de dados e nuvens."
---

<div>
{% include transistor.html id="140001aa" title="#98 The Emergence of the Global Data Network" %}

{% include youtube.html id="9PKbVk-VvZo" %}
</div>

---

Chetan é um engenheiro que se tornou especialista em operações e start-ups (Macrometa é sua quarta start-up). Ele diz que tem trabalhado no mesmo problema de lidar com dados distribuídos e reduzir a latência por vinte anos.

Os dados não estão mais apenas em um centro de dados, mas em todos os lugares: na nuvem, na borda e nos laptops das pessoas. Gerenciar tudo isso de forma eficaz é um desafio.

Cerca de dez anos atrás, Marc Andreessen disse que o software está devorando o mundo. Neste ponto, o software engoliu tudo e transformou todo tipo de restrição e barreira em oportunidades. A computação multithreading é uma das barreiras que foi superada com a nuvem. É possível construir aplicativos que funcionam em diferentes partes do mundo simultaneamente. Um movimento de desenvolvedores está acontecendo em paralelo para tornar tudo o mais simples possível para um profissional de ciência da computação médio. Portanto, de um lado temos uma sofisticada evolução tecnológica e, do outro lado, um movimento em direção à simplicidade.

Arquiteturas como Jamstack permitem que a computação distribuída ocorra em grande escala com muita simplicidade, mas ainda há uma vasta fronteira a ser descoberta e explorada. A oportunidade de expansão de terras extensas está agora na borda. O gerenciamento de dados distribuídos e a borda são duas faces da mesma moeda.

Um grande problema é que parte do desenvolvimento de software está se movendo para funcionar como um serviço que ignora os dados. Além disso, existe a percepção de que os dados são ubíquos, mas grande parte das bordas não está sempre conectada. Não há garantia de que um aplicativo tenha acesso a todos os dados. As redes não estão mais centralizadas; a ideia de microsserviços sem estado surgiu do movimento da nuvem. Essa falta de estado pode se tornar uma barreira enorme. É por isso que arquiteturas como o Jamstack e funções serverless tratam os dados como uma questão periférica, e não central.

As estruturas de dados sem estado são simples. Você tem um lugar específico onde deve registrar seus dados e, em seguida, continuar com o estado sem estado novamente. As estruturas de dados com estado requerem infraestruturas robustas com estruturas de dados mais complexas, pois elas oferecem suporte à aplicação à medida que ela emite constantemente seu estado. À medida que avançamos para um mundo de dados em tempo real em que o estado é constantemente emitido de algum lugar no ecossistema, a infraestrutura se torna complexa e difícil de gerenciar porque não são projetadas para isso. É aí que entra a Macrometa. Eles construíram uma nova plataforma para esse estado ativo, contínuo e em tempo real em uma escala de exabyte.

Lidar com esses dados em streaming em um estado ativo e dinâmico é uma mudança significativa para muitos desenvolvedores de software. Desde que as primeiras infraestruturas em nuvem surgiram, seguidas por plataformas de big data e serviços de dados, a indústria se tornou eficiente em absorver, processar e analisar dados históricos. Mas agora, estamos em um mundo onde os dados estão em um espectro, em vez de existir como um monólito. Uma qualidade recém-apreciada é que os dados têm insights e valor perecíveis. Alguns dados têm uma vida útil breve. As escalas de tempo atuais são muito grandes para usar dados de forma eficiente; precisamos de sistemas que comuniquem eficientemente em até 50 milissegundos e reduzam o esforço cognitivo para as pessoas que interagem com esses sistemas.

A maioria das pessoas entende mal a latência: não é algo que traz alegria, mas sim a sua falta que causa frustração. Por exemplo, por quanto tempo alguém tolerará um vídeo do YouTube com travamentos ou um show da Netflix com carregamento lento? Cinquenta milissegundos para uma máquina é uma eternidade. Uma máquina pode realizar uma enorme quantidade de coisas em 50 milissegundos, então a latência se torna essencial, especialmente ao considerar o valor perecível dos dados.

Outra questão agora é que, devido à nuvem, interconectividade e ao sistema global, as startups se tornaram empresas multinacionais, e os dados se tornaram sensíveis à localização. Alguns dados são regulados, outros são informações de identificação pessoal (PII) e não podem ser expatriados em certas jurisdições, etc. Um excelente exemplo desse problema é como os europeus não querem que seus dados saiam de suas fronteiras, mas grande parte da infraestrutura de nuvem e das aplicações estão aqui nos Estados Unidos.

Um terceiro problema é que os dados estão armazenados em muitos lugares; existem limites entre sistemas, físicos e lógicos. Os dados podem ser essencialmente estáticos e rígidos, então precisamos de uma infraestrutura que permita que os dados se conectem e fluam em tempo real, com consistência e garantias de ordenação. Mais importante ainda, isso cria fungibilidade para ser consumido rapidamente de maneiras diversas.

Um problema adicional é que os dados contêm muitos ruídos, e não faz sentido transferir grandes distâncias intercontinentais, pagando taxas de transferência, apenas para depois descartar a maior parte deles. Os dados perdem valor até chegarem ao seu destino. Além disso, há uma alta taxa de atualização, então os sistemas frequentemente trabalham com dados desatualizados.

Precisamos de novas formas de resolver esses tipos de problemas de dados distribuídos. Chetan acredita que os próximos dez anos pertencerão a essa área das ciências de dados.

A primeira geração de soluções de dados distribuídos utilizou a transformação operacional. O Google Docs é um excelente exemplo disso. No entanto, a transformação operacional requer centralização do controle, portanto, não escala bem. O Google encontrou uma maneira de escalar, mas isso não é generalizado para o desenvolvedor médio. Talvez haja apenas cinco empresas no mundo que o entendem nessa escala, e grande parte desse conhecimento está restrito a essas empresas e tecnologia proprietária.

A Macrometa está trabalhando com a comunidade e a academia para tentar criar um novo corpo de conhecimento, muito mais eficiente do que esses modelos centralizados, de forma completamente distribuída.

Atualmente, existem infraestruturas disponíveis que são excelentes em resolver problemas históricos do tipo sistema de registro. Elas estão tentando seguir em direção aos dados em tempo real, mas suas arquiteturas não são fundamentalmente feitas para isso. Esses novos problemas com dados sensíveis ao tempo e localização, valor de atuação, taxas de atualização, gravidade de dados e ruído de dados requerem uma nova maneira, uma nova infraestrutura. Chetan chama isso de sistema de interação, em vez de sistema de registro, porque sistemas de interação são redes de dados, próximas de onde você origina e consome dados, que então filtram e enriquecem todos eles em linha e roteiam para seus destinatários pretendidos. É uma função de rede.

A Macrometa construiu processadores de rede que estão movendo os dados por aí - uma rede global de dados. É um sistema de API sem servidor onde os desenvolvedores simplesmente consomem APIs para resolver problemas de dados ativos e operacionais em tempo real. A Macrometa é uma rede global de dados na topologia de um CDM, mas com uma plataforma de dados como o Snowflake que produz elementos de dados ricos para lidar com valores de dados ativos e operacionais em tempo real.

Você pode integrar ferramentas analíticas na rede global de dados e implantar análises perto de onde os dados são gerados ou necessários. Assim como a Amazon mudou fundamentalmente a distribuição varejista com arquitetura local e algoritmos para manter os armazéns locais otimizados para envios durante a noite, a Macrometa fez o mesmo com os dados. Eles estão aproximando os dados e a computação nesses dados, permitindo que isso aconteça em milissegundos. Essa capacidade de criar loops de informações em tempo real é um habilitador poderoso. Por exemplo, pequenos varejistas podem usar o inventário da loja local em seu comércio eletrônico sem se comprometer demais para competir com a Amazon.

Um ótimo caso de uso para a plataforma Macrometa é na cibersegurança. Alguns clientes estão substituindo seus modelos de dados centralizados para aproveitar a latência reduzida, permitindo bloquear ameaças em tempo real.

A rede mundial de dados é uma camada de transformação entre suas fontes e receptores de dados com os consumidores e publicadores. Ela é composta por três elementos tecnológicos. O primeiro é a malha global de dados, que é a camada de integração para dados. O segundo é um tecido global de computação que permite orquestrar dados e lógica de negócios na forma de funções e contêineres globalmente. A terceira peça é um tecido global de privacidade: como garantir a segurança dos dados e cumprir diferentes regimes e regulamentações de dados que afetam se seus dados estão sendo transmitidos ou armazenados.

A malha global de dados é uma maneira de integrar rapidamente e facilmente dados de diferentes sistemas, independentemente de suas fronteiras, sejam físicas ou lógicas. Tudo é incorporado e flui com consistência e garantias de ordenação. O valor mais significativo dessa malha é que ela torna os dados fungíveis e consumíveis, permitindo que você coloque APIs nos dados rapidamente. Isso pode ser feito em algumas horas, em comparação com o tempo usual de meses. A rede global de dados é projetada para trilhões de eventos por segundo, de forma que possa movimentar dados em escalas imensas a um custo 90% menor do que a nuvem.

A estrutura global de computação traz lógica empresarial e orquestração para aproximar o processamento de seus dados ao local onde eles têm origem ou são consumidos. Esse é o padrão anti-nuvem. A Macrometa vai mover cirurgicamente e de forma dinâmica esses microsserviços que precisam cumprir regulamentações de dados, por exemplo, para os locais corretos de execução.

A última peça é a proteção de dados. Este é um problema complexo e as respostas que temos hoje, por exemplo, abrir um silo separado para aquela geolocalização específica a fim de cumprir com particulares todas as vezes que inicializar uma instância em seu aplicativo, não são boas. A plataforma da Macrometa possui uma rede de dados que já integra e faz com que seus dados fluam através de todas as fronteiras, juntamente com funções de computação e ingestão de dados sem limites. Agora, ela pode criar fronteiras lógicas e fixar dados em regiões específicas para proteção de dados. Eles podem definir afinidades e políticas sobre como os dados vivem e se replicam em uma região, como por exemplo, se eles devem ser anonimizados quando copiados para fora da região.

A tecnologia da Macrometa permite casos de uso que são impossíveis de serem realizados na nuvem, pois as nuvens estão muito distantes ou são muito lentas. A Macrometa construiu a infraestrutura para resolver problemas de dados em tempo real e transformá-los em oportunidades, em vez de desafios. Para mais informações sobre a Macrometa, acesse macrometa.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
