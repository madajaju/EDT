---
layout: posts
title: "Segurança do Controlador de Rede com Elisity"
number: 101
permalink: episode-EDT101-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 101
tags:
    - networksecurity
    - cybersecurity
    - elisity
    - comms
    - technology
    - process

date: Mon Aug 22 2022 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Dan Demers
    - Dana Yanch

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto Chefe de Soluções da Intel para o Setor Público, entrevista os especialistas em segurança de rede Dana Yanch e Dan Demers da Elisity sobre técnicas de segurança do controlador de rede e arquiteturas de confiança zero."
video: "https://youtu.be/st0HrHNmEUI"
description: "Darren Pulsipher, Arquiteto Chefe de Soluções da Intel para o Setor Público, entrevista os especialistas em segurança de rede Dana Yanch e Dan Demers da Elisity sobre técnicas de segurança do controlador de rede e arquiteturas de confiança zero."
---

<div>
{% include transistor.html id="d4feba70" title="#101 Network Controller Security with Elisity" %}

{% include youtube.html id="st0HrHNmEUI" %}
</div>

---

Dana tem trabalhado em redes avançadas há 15 anos. Ele trabalhou com rede definida por software e rede de área ampla, e concentrou-se no mundo da SD-WAN por um tempo. Em seguida, trabalhou com nuvem, mas voltou às suas raízes com segurança de rede na Elisity.

Dan trabalhou principalmente em redes, mas começou com serviços avançados na Cisco e fez algum trabalho com petróleo e gás em Houston. Ele então se mudou para o espaço SASE SD-WAN, onde trabalhou com Dana. Agora, ele está focado em segurança de rede, assim como segurança definida por software. Dan diz que o termo, no entanto, é elusivo porque a tecnologia é microsegmentação por meio da identidade.

A maneira tradicional de criar micro-segmentação através de VLANs e firewalls já não é suficiente. Por 15 anos, a segurança de rede tem se concentrado em fortalecer o perímetro da rede. Criar uma parede impenetrável em torno de uma empresa ainda é essencial, e os firewalls fazem um trabalho incrível em manter as pessoas fora da rede. No entanto, a maior parte da rede, onde houve uma explosão de novos requisitos de conectividade devido à IoT e à OT, é uma zona franca assim que um usuário está dentro. Como a parede externa é robusta, qualquer pessoa dentro geralmente é considerada um usuário legítimo ou confiável.

A realidade é que a maioria dos ataques atuais estão acontecendo dentro da rede através de usuários confiáveis, dispositivos e aplicativos explorados.

Existem muitas razões pelas quais a utilização de VLANs, ACLs de IP, firewalls e métodos tradicionais de segmentação não funcionam hoje em dia para a segurança de movimentação lateral. Eles podem funcionar em ambientes estáticos em pequena escala. Eles funcionam muito bem na borda da rede e em lugares específicos, como gargalos ou pontos de agregação, mas existem três razões comuns pelas quais eles não são mais ideais.

Primeiro, a escalabilidade e eficiência operacional dos métodos tradicionais são questionáveis. Gerenciar VLANs, IP ACLs e firewalls em grandes empresas é feito manualmente. Não se trata de uma arquitetura de rede definida por software distribuída, mas sim de uma configuração caixa por caixa, linha por linha. Eles não são dinâmicos ou responsivos a qualquer coisa na rede. Seu uso também cria uma rede cheia de buracos aleatórios. Os usuários, especialmente os operadores de redes, muitas vezes representam o maior risco para um sistema. Por exemplo, eles podem abrir uma VLAN ou alterar uma parte para fazer um teste rápido, mas depois não desfazem a alteração.

Outro exemplo é que uma VLAN começará com um caso de uso e lentamente se expandirá para outros casos de uso. De repente, o que era uma VLAN de dez dispositivos agora possui 60 dispositivos. No mundo da OT (Tecnologia de Operação), pode ter seis ou sete processos diferentes sendo executados nela pois era a LAN confiável. No entanto, muitas vezes esses ambientes crescem lentamente e não são documentados, então o risco passa despercebido.

O segundo problema é que VLANs e firewalls estão inherentemente no lugar errado na rede para fornecer segurança de movimento lateral. Se você estiver na mesma VLAN que outro dispositivo, usuário ou aplicativo, esse canal de comunicação estará aberto mesmo que não precise estar. Firewalls não são normalmente implantados em um local estratégico onde podem lidar com o nível de acesso de movimento lateral. É necessário direcionar o tráfego para um firewall e retorná-lo, o que é ineficiente. Então você tem um gargalo.

Attores mal-intencionados estão examinando redes para ver como podem distorcê-las para obter algum resultado, não como elas deveriam ou foram planejadas para funcionar. Por exemplo, se um usuário está em uma VLAN e um processo está sendo executado dentro de um caso de uso, não há nada que os impeça de ir da porta 3 para a porta 32 na mesma VLAN. Muitas vezes, as pessoas projetam a segurança em torno do uso pretendido, em vez de como ela poderia ser usada. É comum, por exemplo, que desenvolvedores de software pulem portas para trabalhar de forma eficiente, mas isso é perigoso porque os deixa vulneráveis. Ninguém pode colocar centenas ou milhares de firewalls em toda a borda de acesso. Isso seria fiscalmente restritivo e impossível de gerenciar.

O terceiro problema é que essas soluções de segmentação legadas não consideram a identidade, contexto ou comportamento do ativo conectado à rede. É uma topologia rígida e centrada na rede que fornece algumas medidas de segurança essenciais. Mas um endereço IP não diz nada sobre a legitimidade do ativo e da rede à qual está conectado. Então, como você pode garantir dinamicamente a segurança dessa rede quando não sabe o que está se conectando a ela? Você não pode criar uma política inexistente sem nenhuma granularidade; tratando todos os dispositivos como iguais não funciona.

Mesmo que haja uma análise do tipo de tráfego, geralmente ocorre várias etapas acima, o que significa que você está exposto agora. Qualquer aplicação da lei pode ou não ser capaz de proteger totalmente a infraestrutura.

Esta capacidade de deteção ainda tem valor, mesmo que não haja proteção. Ainda assim, a capacidade de impedir algo que poderia ter acontecido bem na borda, o mais próximo possível do ativo, é uma solução melhor.

Confira o próximo episódio desta série [aqui] (episódio-EDT101).



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
