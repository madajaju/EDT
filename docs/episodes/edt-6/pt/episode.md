---
layout: posts
title: "Gerenciando o teletrabalho em sua capacidade total"
number: 6
permalink: episode-EDT6-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 6
tags:
    - telework
    - remoteworker
    - vdi
    - mfa
    - cybersecurity
    - people
    - process

date: Thu Jul 23 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Tim Flynn
    - Pete Schmitz

img: thumbnail.png
image: thumbnail.png
summary: "Neste episódio, Darren, Tim Flynn, Almirante reformado da Marinha, e Pete Schmitz, Executivo de Contas da Marinha da Intel, falam sobre como gerenciar o crescimento explosivo de trabalhadores remotos devido à pandemia de Covid-19. Discutimos os diferentes modos que os trabalhadores podem usar para trabalhar remotamente e ainda assim serem produtivos: dispositivo como um terminal burro, dispositivo como parte da rede interna e dispositivo como um portal para serviços. Compreender esses modos de operação pode ajudar a encontrar gargalos que podem prejudicar a eficácia da sua equipe."
video: "https://youtu.be/-uQJGrcYnZ8"
description: "Neste episódio, Darren, Tim Flynn, Almirante reformado da Marinha, e Pete Schmitz, Executivo de Contas da Marinha da Intel, falam sobre como gerenciar o crescimento explosivo de trabalhadores remotos devido à pandemia de Covid-19. Discutimos os diferentes modos que os trabalhadores podem usar para trabalhar remotamente e ainda assim serem produtivos: dispositivo como um terminal burro, dispositivo como parte da rede interna e dispositivo como um portal para serviços. Compreender esses modos de operação pode ajudar a encontrar gargalos que podem prejudicar a eficácia da sua equipe."
---

<div>
{% include transistor.html id="24d6e2c7" title="#6 Managing Telework at Capacity" %}

{% include youtube.html id="-uQJGrcYnZ8" %}
</div>

---

## Modos de Operação do Teletrabalho

Os modos de operação que vemos as pessoas trabalhando dentro do Departamento de Defesa e também no setor privado são os seguintes:

Dispositivo como terminal burro (VDI - Infraestrutura de Desktop Virtual)

* Dispositivo como parte da rede interna (VPN - Rede Privada Virtual)

Dispositivo como um portal para serviços

A maioria dos trabalhadores está utilizando vários modos de operação, portanto, diferentes tipos devem ser suportados através da infraestrutura.

## Dispositivo como um terminal burro.

Neste modo, o trabalhador tem seu desktop executando em um servidor no centro de dados e utiliza seu laptop para se conectar ao "desktop virtual". Basicamente, eles utilizam o laptop ou outro dispositivo como um terminal "burro". Existem alguns problemas com o VDI, incluindo escalabilidade, congestionamento de rede, latência e redundância. Devido a esses problemas, uma sessão de VDI pode ser bastante cara. No entanto, das três opções, o VDI é o mais seguro.

## Dispositivo como parte da rede interna.

Este modo é provavelmente o mais comum. O trabalhador conecta seu dispositivo à VPN para que possa trabalhar na rede como se estivesse conectado no escritório. Um benefício é a mobilidade, pois os trabalhadores podem conectar qualquer dispositivo, como um telefone, tablet ou laptop. Outro benefício é que pode haver diferentes segmentos de VPN para diferentes classificações de dados. Uma desvantagem é que os trabalhadores sempre precisam estar conectados para poder trabalhar. E embora não haja tanto tráfego de rede quanto em um VDI, ainda haverá algum congestionamento de rede à medida que os dados se movem.

## Dispositivo como um portal para serviços

Mais pessoas estão se movendo em direção a esse modelo. O trabalhador usa seu dispositivo para se conectar a serviços na nuvem, públicos ou privados. O principal serviço que as pessoas estão usando é o Office 365, que permite que as organizações usem serviços em nuvem em vez dos seus próprios serviços, ou em conjunto com eles. Eficiência, desempenho e a capacidade de trabalhar desconectado em alguns momentos são benefícios. As desvantagens incluem a dependência de um terceiro... (Não tenho certeza de como terminar isso - adoção/migração e segurança)

## Emergentes gargalos

Os gargalos têm surgido à medida que o número de pessoas que trabalham em casa aumenta de 15% para mais de 85%. Para os dois primeiros modos de operação, a escalabilidade da VPN pode ser um grande gargalo. Largura de banda limitada também é uma grande fonte de gargalos. Uma solução para esses problemas é aproveitar os serviços em nuvem para aliviar a pressão. Em nível humano, as operações de TI e os serviços de suporte estão sendo sobrecarregados, já que os trabalhadores estão se conectando de casa pela primeira vez.

## Escalabilidade de VPN

Existem várias soluções de curto prazo para ajudar a aliviar esses gargalos. Priorizar o acesso do usuário pode ser eficaz, seja com base em horários ou prioridade da missão. A educação dos funcionários sobre a adaptação a esse ambiente é necessária.

Para escalabilidade de longo prazo, as organizações devem migrar para soluções SaaS utilizando laptops como modo de portal.

## Largura de Banda para Sites

Uma das melhores coisas que as organizações podem fazer no curto prazo é descobrir quantos usuários VDI você atualmente possui e ver se é possível movê-los para trabalhar na rede ou no modo de operação de ferramentas de colaboração. Isso reduzirá drasticamente a carga na largura de banda. Você também pode precisar aumentar as capacidades da sua rede após avaliar como seus usuários remotos estão trabalhando. A educação é, mais uma vez, uma parte essencial dessa mudança, para que os trabalhadores utilizem as melhores práticas, como desconectar da VPN quando não estiverem usando e configurar ferramentas de backup para operar durante os horários de menor uso. No longo prazo, sugerimos uma arquitetura de nuvem multi-híbrida que lhe dê a capacidade de aproveitar os provedores de serviços em nuvem para largura de banda de rede e capacidade de aumento, otimizando também custo e capacidade.

## Escalabilidade de Serviços Hospedados

Para auxiliar na implementação de arquiteturas escaláveis para fins de curto prazo, existem diversas ótimas referências, incluindo as arquiteturas de referência do Outlook Web Access (OWA) e VDI.

Novamente, a longo prazo, recomendamos migrar para uma infraestrutura de nuvem híbrida múltipla para elasticidade, capacidade, desempenho preditivo, conformidade e segurança.

## Operações de TI

Como podemos expandir a equipe do help desk que provavelmente está sobrecarregada? Uma ideia é ter FAQs online para referência fácil dos trabalhadores. Soluções contribuídas pela comunidade de usuários que são moderadas pela equipe de TI também podem ser úteis. Idealmente, as organizações deveriam estar utilizando um sistema de gerenciamento de tickets para identificar gargalos e otimizar processos. Além disso, qualquer tarefa que possa ser automatizada para evitar tarefas repetitivas deve ser automatizada através, por exemplo, da automação de processos robóticos (RPA) ou scripting adicional. Uma solução a longo prazo poderia ser a implementação de Chat Bots de IA como um serviço de autoatendimento para o help desk de TI. Eles rapidamente filtram soluções online usando palavras-chave ou recomendam contato.

## Conclusão

No final das contas, a Intel deseja ver as organizações sendo bem-sucedidas durante este momento difícil em que os trabalhadores estão migrando do escritório para o trabalho remoto e lidando com muito estresse. A Intel pode ajudar a indústria, o governo e os setores públicos. Temos silício que funciona em todos esses aspectos. Temos parceiros que fornecem soluções de hardware e software e, é claro, vendemos PCs e dispositivos para clientes que possibilitam o trabalho remoto.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
