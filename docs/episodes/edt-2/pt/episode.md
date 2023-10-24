---
layout: posts
title: "Segue o Bit"
number: 2
permalink: episode-EDT2-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 2
tags:
    - iot
    - dod
    - edge
    - technology
    - data
    - cybersecurity

date: Wed Jun 17 2020 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Neste episódio, Darren entrevista Greg Clifton, Diretor do Departamento de Defesa (DOD) e Inteligência da Intel Corp. Eles discutem os desafios do gerenciamento de dados em um sistema complexo que abrange várias nuvens, centros de dados corporativos, centros de dados regionais e margem tática. Ouça Darren e Greg seguindo um pouco de dados desde a sua coleta e jornada por esse ecossistema até a produção de informações acionáveis para analistas e combatentes. Ouça Darren e Greg discutindo alguns dos obstáculos nesse ambiente amplo e circular e soluções para ajudar a fornecer informações acionáveis para os analistas e de volta aos combatentes."
video: "https://youtu.be/N6WTErcBjrM"
description: "Neste episódio, Darren entrevista Greg Clifton, Diretor do Departamento de Defesa (DOD) e Inteligência da Intel Corp. Eles discutem os desafios do gerenciamento de dados em um sistema complexo que abrange várias nuvens, centros de dados corporativos, centros de dados regionais e margem tática. Ouça Darren e Greg seguindo um pouco de dados desde a sua coleta e jornada por esse ecossistema até a produção de informações acionáveis para analistas e combatentes. Ouça Darren e Greg discutindo alguns dos obstáculos nesse ambiente amplo e circular e soluções para ajudar a fornecer informações acionáveis para os analistas e de volta aos combatentes."
---

<div>
{% include transistor.html id="caf42ad5" title="#2 Follow the Bit" %}

{% include youtube.html id="N6WTErcBjrM" %}
</div>

---

## Internet das Coisas é o Começo

A implementação generalizada da Internet das Coisas (IoT) tem levado mais tempo do que a indústria esperava. Muitos culpam os atrasos na adoção e implantação do 5G em todo o mundo, mas há outro problema que tem desacelerado o desenvolvimento de sistemas robustos de IoT: o gerenciamento da complexidade. À medida que os dados se movem pelo sistema, passando pela borda, borda agregada, rede, centro de dados e nuvem, garantir a segurança dos dados é uma preocupação importante, uma vez que a superfície de ataque aumenta à medida que ele sai do data center tradicional. Existem soluções pontuais que ajudam a melhorar esses problemas, mas ainda não há uma arquitetura de solução completa que resolva todos os problemas com esse data center sem paredes.

## Complexidade do ambiente do Departamento de Defesa

A IoT já é complexa e o DOD aumenta a complexidade devido aos tipos de produtores e consumidores dos dados. No lado do produtor, sensores são conectados a satélites, aeronaves, navios e veículos; até mesmo os soldados em combate são praticamente centros de dados ambulantes. A quantidade de dados que esses dispositivos produzem pode sobrecarregar uma rede. O número de dispositivos heterogêneos pode tornar sua gestão quase impossível, especialmente quando os dispositivos utilizam diferentes protocolos e possuem diferentes níveis de classificação. Em outras palavras, coletar os dados não é o problema; o desafio está em disponibilizá-los de forma útil e rápida para aqueles que tomam as decisões.

Além disso, a conectividade pode ser problemática com dispositivos de borda. Ambientes hostis onde a conectividade de rede para um centro de dados é inexistente ou instável podem atrasar os dados. Isso significa que uma solução nesse espaço deve funcionar nos modos de operação conectado e desconectado. A velocidade de entrega é um fator-chave de sucesso; vidas podem estar em risco se as decisões baseadas nos dados forem atrasadas.

## Estrutura comum para Aplicações, Dados e Segurança.

Obviamente, precisamos de soluções para esses problemas. De suma importância é ter um framework comum para gerenciar a complexidade dessas novas arquiteturas de TI que estão além das paredes tradicionais dos centros de dados. O framework precisa abordar a gestão de aplicativos, dados e segurança. Precisamos ser capazes de implantar aplicativos portáteis e reutilizáveis ​​em qualquer lugar do sistema, do dispositivo à nuvem: a doutrina de "escrever uma vez, executar em qualquer lugar". Isso nos dá a capacidade de desenvolver, testar e implantar aplicativos rapidamente, sem precisar configurar todas as permutações de configurações de hardware no ecossistema. O uso de ferramentas no ecossistema de contêineres deve ajudar com isso. Ferramentas baseadas em Kubernetes (K8s) são uma boa opção, pois se tornaram o padrão de fato na comunidade DevOps.

Gerenciar aplicativos em isolamento, no entanto, não é suficiente. Todos os aplicativos precisam de dados de alguma forma, portanto, entender onde os dados estão, para onde estão indo e como estão classificados é fundamental para soluções bem-sucedidas. Precisamos de um ambiente operacional comum para gerenciar e governar as diferentes classes de dados, como domínios, limites de segurança, governança, gerenciamento do ciclo de vida dos dados e localização dos dados. Um ambiente operacional comum aumenta a flexibilidade e a velocidade de implantação de aplicativos.

Um framework comum de segurança também é necessário. A questão crucial é como proteger seus dados em todas as suas formas e ainda compartilhá-los? Existem soluções atuais de hardware e software e uma progressão contínua nessa área. Soluções básicas de segurança, como criptografia, devem ser fundamentais. Claro, isso requer o motor de armazenamento e capacidade adequado. Outra preocupação é a entrada de dados errôneos ou maliciosos no sistema. Estabelecer uma raiz de confiança como base também é necessário nesse vasto ecossistema.

## Processamento na borda, datacenter e nuvem

Onde a Intel entra em jogo nesse ambiente? Podemos ajudar a fornecer a infraestrutura subjacente que suporta esses sistemas em desempenho e energia. Seja processando informações do sensor na borda em um ambiente de baixa potência (pense em designs Atom e ASIC personalizados), ou fazendo treinamento de Inteligência Artificial ou inferência em seu centro de dados (Xeon e computação neuromórfica), a Intel possui um processador que pode ajudar a converter dados brutos em informações valiosas e acionáveis, o principal componente nesse ambiente complexo e voltado para missões.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
