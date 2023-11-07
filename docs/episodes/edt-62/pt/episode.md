---
layout: posts
title: "Desmistificando 5G, Edge e AI"
number: 62
permalink: episode-EDT62-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 62
tags:
    - edge
    - compute
    - 5g
    - aiml
    - iot

date: Wed Aug 18 2021 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Arquiteto-Chefe de Soluções da Intel, discute as mudanças inovadoras que o 5G trará para a borda e a inteligência artificial com a Dra. Anna Scott, Arquiteta-Chefe de Borda da Intel."
video: "https://youtu.be/tjuYUh6bJJ8"
description: "Darren Pulsipher, Arquiteto-Chefe de Soluções da Intel, discute as mudanças inovadoras que o 5G trará para a borda e a inteligência artificial com a Dra. Anna Scott, Arquiteta-Chefe de Borda da Intel."
---

<div>
{% include transistor.html id="50847ff2" title="#62 Demystifying 5G, Edge and AI" %}

{% include youtube.html id="tjuYUh6bJJ8" %}
</div>

---

O background da Anna é no setor industrial e de manufatura em informação. Ela possui um doutorado em engenharia química, além de um MBA. Ela passou 15 anos trabalhando como engenheira de processo e design, posteriormente realizando trabalhos de startup e gerenciamento de engenharia. Ela está na Intel há pouco mais de seis anos, sendo os últimos dois anos e meio trabalhando na equipe do setor público, onde ela oferece suporte principalmente às atividades de IoT e edge da Intel, com um envolvimento cada vez maior na tecnologia 5G, já que o 5G, juntamente com a IA, está mudando drasticamente esse espaço.

## Transformação de rede fundamental para a infraestrutura 5G

No mundo industrial, IoT não era algo novo; era apenas com fio. Com os sistemas agora migrando para a comunicação sem fio, eles possuem o acoplamento próximo de TI e OT para converter análises, em vez de apenas ter um conjunto de dados específicos do processo em que OT está presente. Um conjunto diferente de sistemas agora integra isso ao negócio, então tudo isso está sendo reunido no mesmo espaço. Embora haja diferenças muito definidas nos casos de uso e arquiteturas no setor público, como militares e cidades inteligentes, há uma convergência comum na análise, aplicação e prazo para tomar melhores decisões empresariais.

Uma das principais razões pelas quais a Internet das Coisas (IoT) demorou tanto para se expandir além da indústria manufatureira e adentrar outras áreas é, principalmente, o alto custo da fiação. A segurança também tem sido um obstáculo.

5G está agora desencadeando o IoT e o mundo da beira (edge) devido à rentabilidade, especialmente do lado do consumidor. No entanto, quando se trata de infraestrutura crítica de negócios, é uma conversa diferente sobre como fazê-lo de uma maneira que proteja os dados. 5G será transformador, mas ainda não está acontecendo no lado comercial. Parte da lacuna é devido ao atraso entre a liberação das normas e a produção de hardware para aproveitar essas normas.

Para qualquer pessoa que tenha passado muito tempo com o 3GPP ou outros órgãos de normas de condução, esse cronograma não é inesperado. No momento, é possível implantar uma rede 5G, mas estamos na fase de testes em que precisamos demonstrar o valor do 5G. Precisamos mostrar novos casos de uso que não podem ser suportados pelo LTE ou pelo 4G.

## Múltiplos modelos de implantação 5G oferecem flexibilidade.

Por que não ficar apenas com o WiFi 6 em vez de usar o 5G? A resposta é complicada. Muitas das organizações de padronização que impulsionavam o 5G também impulsionavam o WiFi 6, então é uma tecnologia complementar. O diferencial está no equipamento, então você precisa conhecer os detalhes dos seus casos de uso para determinar qual seria mais eficiente em termos de custo. Por exemplo, o 5G é incrível, mas não seria o melhor colocar uma rede 5G em um navio de cruzeiro porque a sua penetração não seria adequada. O ambiente não é favorável a nenhum tipo de sinal sem fio, mas o WiFi 6 com pontos de acesso faz mais sentido.

O 5G é convincente, no entanto, por várias razões e pode fazer coisas que o 4G e o LTE não podem. Para realidade aumentada e virtual, você precisa de latência muito baixa e alta largura de banda para permitir casos de uso mais interativos, como reparo de equipamentos ou máquinas. Você precisa de um especialista remoto que esteja olhando para o problema e possa fazer streaming de vídeo e áudio com sobreposição de desenhos e capacidades que estão sendo gerenciadas a partir de um local central ou remoto que traz todo esse conhecimento e experiência diretamente até o ponto em que você está tentando trabalhar. Esse tipo de caso de uso não pode ser feito em uma rede LTE. A largura de banda desempenha um papel, mas a latência é a força motriz. Para não ficar doente enquanto usa um headset, é necessário ter latências muito baixas, sem atraso ou ter as coisas funcionando de forma assíncrona.

O mundo LTE e 4G mudou por causa do 5G devido à forma como eles gerenciaram o espectro. Uma área onde isso está mudando na indústria é que agora é possível para uma empresa obter uma licença prioritária para o espectro do CBRS e estabelecer sua própria rede privada, completamente separada das principais operadoras federais de telecomunicações. Por exemplo, um grande fabricante pode cobrir um espaço enorme de forma mais econômica com uma rede LTE privada do que com pontos de acesso. Também existem grandes benefícios, como se você quiser reconfigurar seu espaço e não quiser que todas as suas estações de trabalho sejam conectadas por fio, ou se você precisar mover peças enormes de metal, como a fuselagem de um avião, em seu espaço que possa interferir nos sinais Wi-Fi, você pode estabelecer uma infraestrutura portátil e não fixa às localizações com fio.

A segurança é uma preocupação central para qualquer organização. Embora o 5G não tenha sido desenvolvido com a segurança em mente, o 6G será. Felizmente, com as capacidades do 5G, podemos fazer muito em torno da rede de confiança zero e de outras medidas de segurança que irão instilar confiança nos clientes sobre como seus dados estão sendo transmitidos através das redes.

As normas 5G mudaram o problema de alguns anos atrás, quando a infraestrutura sem fio existia em hardware e software proprietários, com um espectro licenciado que apenas algumas empresas podiam pagar. A rede definida por software permite que a infraestrutura de rede seja hospedada em hardware comum e disponível no mercado. Não há necessidade de hardware especializado como nas gerações anteriores. Isso também está acontecendo no lado do LTE, por exemplo, ao disponibilizar o espectro CBRS e se afastar do hardware e software proprietários.

A Intel dedica muito tempo trabalhando com disruptores que estão utilizando nossa arquitetura de referência FlexRAN. A arquitetura FlexRAN se torna a base para ajudar a disseminação de tecnologia disruptiva no novo mercado 5G, pois ela fornece uma pilha de software 5G rodando em hardware comum e disponível no mercado, onde antes era necessário hardware proprietário. Agora existe um espaço com muito mais abertura e portabilidade, e o custo de entrada é muito mais barato do que costumava ser. Não são mais apenas algumas empresas controlando tudo. A Intel e outras estão tentando abrir tudo e aproveitar os padrões abertos para apoiar todos esses disruptores e mudar toda a dinâmica.

## Espectro 5G e Regulação para as Redes do Amanhã

Com conectividade aprimorada, baixa latência e alta largura de banda, muitos novos casos de uso estarão disponíveis. Como o 5G será monetizado é o que está mudando no mercado. Por exemplo, um provedor de serviço em nuvem junto com uma operadora de telefonia podem fornecer serviços melhores para seus clientes porque não estão mais isolados. Eles são um esforço comercial combinado do que realmente importa: qualidade e priorização. Outra maneira de ver isso é que provedores de serviços em nuvem estão adquirindo capacidades que vão abrir funcionalidades de rede da mesma forma que as operadoras de telefonia estão explorando o que podem fazer no lado da nuvem. Novamente, isso ocorre porque o isolamento foi quebrado; o canal de dados não é mais um conjunto de serviços.

Não está claro como tudo isso vai acontecer, exceto que está redefinindo o tipo de trabalho que você pode fazer por causa da acessibilidade aos dados e onde essas cargas de trabalho vão ser hospedadas. Existe um grande valor em ir do edge para a nuvem de forma transparente e fazê-lo de acordo com a necessidade do cliente, o que agora é possível.

## Um novo paradigma de computação suporta novas demandas de dados.

O 5G está desencadeando muitos modelos arquitetônicos diferentes. Por exemplo, ele oferece duas opções de arquiteturas para IA, enquanto antes havia apenas uma com limitações.

Sem a alta largura de banda fornecida pelo 5G, a IA estava limitada a inferências nos dispositivos de borda, o que exigia enviar os modelos de IA para esses dispositivos. Essa restrição complicada aumentou o ciclo de desenvolvimento e implantação da IA e limitou o número de cargas de trabalho de IA que podem ser aproveitadas na borda. Com o aumento da largura de banda, grandes fluxos de dados de câmeras ou sensores podem ser enviados de volta para um centro de dados, o que permite executar várias cargas de trabalho de IA e possibilita a aprendizagem contínua da IA. Isso dá às organizações a oportunidade de executar tanto inferências na borda quanto melhorar a aprendizagem profunda exigida pelas demandas sempre mutáveis de dados de tantas organizações.

Com AR, por exemplo, 5G significa que os fones de ouvido podem ser móveis em vez de conectados com as mesmas capacidades, pois o 5G permite o compartilhamento de conjuntos de dados maiores em um mundo sem conexão. As barreiras tradicionais dos centros de dados estão sendo quebradas.

Se você não tem muito suporte técnico ou conhecimento detalhado sobre como manter seus sistemas funcionando, você pode executar tudo na nuvem. Se você não quer seus dados na nuvem, você pode fazer uma versão que está localizada internamente em uma rede privada que lhe oferece todo tipo de funcionalidade para agregar e correlacionar dados, fornecendo um entendimento em alto nível do que está acontecendo em seu sistema de maneira segura e econômica.

Basicamente, seus dados agora podem residir na borda, na nuvem, localmente ou no que a Cisco chama de neblina. Não importa mais onde sua aplicação é executada, assim você pode usar o modelo mais econômico. Em espaços industriais, por exemplo, há economias enormes em não ter um componente de cabeamento rígido, ou usando uma estrutura LTE privada em vez de pontos de acesso WiFi. A redução desses tipos de custos levará à capacidade de ter dados super ricos. Essas barreiras de custo e conectividade física são o que estava faltando para que a IoT decolasse como todos previam.

Anna prevê que, para aplicações não controladas, os próximos dois anos serão diferentes devido ao 5G. Um exemplo simples é que na indústria, alguém poderia levar seu PC regular para fora do escritório e para o chão de fábrica e ser capaz de fazer tudo lá. O 5G mudará o que é possível em relação aos controles e ao controle de robôs e máquinas por meio de uma rede wireless nos próximos cinco anos. O próximo nível de transformação será que você poderá realizar o controle através de uma rede wireless e fazê-lo com segurança e eficácia, sem colocar ninguém em risco. Isso exigirá muita validação e revisão rigorosa, mas está no horizonte.

Também será empolgante ver o que seu provedor de serviços em nuvem favorito e sua operadora de telefonia irão fazer juntos para mudar o que é possível do ponto de vista dos serviços.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
