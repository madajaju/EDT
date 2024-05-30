---
layout: posts
title: "Protegendo o Teletrabalhador Parte 2"
number: 8
permalink: episode-EDT8-pt
lang: pt
nav_exclude: true
nav_order: 8
tags:
    - policy
    - security
    - intel
    - zerotrust
    - multicloud
    - cybersecurity

date: Mon Jul 20 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Com muitos funcionários trabalhando em casa agora, como você se certifica de que eles estão trabalhando com segurança e ainda lhes dá a flexibilidade necessária para concluir seus trabalhos? Neste episódio, Darren e convidado especial Steve Orrin, CTO da Intel Federal, discutem como aproveitar a tecnologia Intel para ajudar efetivamente a garantir a segurança do teletrabalhador."
video: "https://youtu.be/2PazR1MX2wc"
description: "Com muitos funcionários trabalhando em casa agora, como você se certifica de que eles estão trabalhando com segurança e ainda lhes dá a flexibilidade necessária para concluir seus trabalhos? Neste episódio, Darren e convidado especial Steve Orrin, CTO da Intel Federal, discutem como aproveitar a tecnologia Intel para ajudar efetivamente a garantir a segurança do teletrabalhador."
---

<div>
{% include transistor.html id="5fc292e0" title="#8 Securing the Teleworker Part 2" %}

{% include youtube.html id="2PazR1MX2wc" %}
</div>

---

## Tecnologias de Cliente para Segurança do Trabalhador Remoto

A segurança no lado do cliente começa e termina com a capacidade de verificar o cliente com uma inicialização segura. A Intel tem fornecido essa tecnologia em nossos sistemas de clientes há anos com o Secure Boot com a Trusted Execution Technology (TXT) e, mais recentemente, o BootGuard (BtG). Nas plataformas mais recentes, temos o Intel Hardware Shield, um conjunto de tecnologias que garantem a segurança do sistema em seu nível mais baixo, no firmware e nível do BIOS. É assim que um sistema de controle de acesso empresarial pode verificar se um cliente foi inicializado com segurança e se possui o firmware correto e os controles de segurança corretos antes de ter acesso à empresa.

A Intel também tem feito muito trabalho ao longo dos anos para ajudar organizações a proteger melhor seus dados. Além disso, permitimos que o cliente ative a criptografia em todos os lugares sem impacto no desempenho. Estamos implementando novas instruções em quase todas as gerações de nossos produtos, adicionando novas capacidades para garantir a segurança do teletrabalhador.

Nosso outro foco tem sido proteger as aplicações e seus dados em uso. É aqui que entram em cena as Extensões de Guarda de Software da Intel (SGX, na sigla em inglês). Isso permite que as organizações coloquem partes-chave das aplicações e dados importantes em ambientes de memória segura e criptografada. Com o teletrabalho, isso significa que você pode implantar aplicações em ambientes não confiáveis e ainda manter um alto nível de segurança.

Além disso, a nova tecnologia que a Intel introduziu na categoria de detecção de ameaças permite que as organizações obtenham uma visibilidade profunda das operações da plataforma para monitorar ameaças; nenhum malware pode se esconder. Essas tecnologias estão revolucionando a forma como detectamos malware usando aprendizado de máquina e inteligência artificial.

## Tecnologias de centro de dados para garantir a segurança do teletrabalhador.

Mesmo se você tiver garantido os clientes, você também deve garantir o centro de dados. Ambos os lados devem ser protegidos porque seu sistema é tão seguro quanto o elo mais fraco. Muitas das técnicas para garantir o teletrabalhador são semelhantes às de garantir sua empresa: inicialização segura, segurança de virtualização e controles de isolamento. Novamente, tecnologias como Intel TXT e BootGuard permitem que você inicialize com segurança essas plataformas e ativos do centro de dados e da nuvem. Mais recentemente, introduzimos a tecnologia Intel Select Solutions for Hardened Security, que integra muitas das tecnologias de segurança da Intel em uma única plataforma que é ativada por padrão.

Você precisa ser capaz de proteger seus dados em escala, ou seja, ter a capacidade de usar todas as suas ferramentas de segurança sem afetar negativamente o desempenho. As ferramentas de criptografia acelerada por hardware da Intel (SHA, AES-2X, VPMADD52) tornam isso possível. As novas instruções e tecnologias QuickAssist da Intel são especificamente voltadas para as exigências de criptografia em escala empresarial e em nuvem.

Finalmente, como você monitora a inteligência de ameaças e realiza auditorias em grande escala? A Arquitetura da Plataforma de Inteligência Cibernética da Intel (FPGA, DCPMM, Optane SSD) utiliza tecnologias de computação, armazenamento e memória de alto desempenho para dimensionar a plataforma de inteligência cibernética, mesmo com o acréscimo do maior peso da segurança externa com os trabalhadores remotos.

## Soluções de curto prazo

A educação do funcionário é a primeira linha para controlar as ameaças de segurança do teletrabalho. Orientação em segurança residencial e treinamento em segurança, ou reforço do treinamento anterior em áreas como acesso adequado aos dados, são cruciais. Seja pró-ativo com atualizações, empurrando as atualizações e exigindo que os usuários atualizem seus dispositivos. Se você tiver controle de acesso empresarial, soluções de ERM/DRM e DLP, ligue-os e expanda-os. Reavalie suas políticas para garantir que estejam de acordo com a nova realidade dos teletrabalhadores. Para conexões web, ative o TLS e garanta que esteja sendo aplicado. Utilize autenticação de dois fatores. A maioria das organizações pode pensar que não possuem infraestrutura para implantar isso, mas há uma variedade de fornecedores que podem ajudar nessa área sem exigir que você implante uma grande quantidade de infraestrutura nova.

Muitas soluções são simplesmente higiene padrão: Certifique-se de que os agentes de segurança do seu ponto final estejam ativados e atualizados. Gerencie e aplique políticas de segurança para os diferentes tipos de dispositivos de usuário. Ative a criptografia de disco completo.

As organizações devem entender que os teletrabalhadores estão operando em um ambiente onde a probabilidade de um dispositivo ser usado por outras pessoas em várias circunstâncias é alta. Bons controles de segurança, principalmente a educação dos funcionários, podem contornar problemas e permitir que os funcionários operem sem impactos negativos.

## Soluções de longo prazo

Um plano de longo prazo para a segurança em um ambiente com funcionários remotos é agora necessário, seja para uma mudança permanente para mais trabalhadores remotos ou para lidar com outra pandemia ou situação similar. Existem várias medidas que as organizações devem tomar agora para apoiar essa realidade no futuro.

Uma das melhores práticas é implementar políticas de confiança zero. Isso reduz a dependência de confiar em todos os aspectos de usuários e clientes que chegam. Além disso, a autenticação multifator com usuários e dispositivos deve se tornar padrão em toda a organização. Para aqueles que ainda não adotaram o controle de acesso a dados baseado em ERM e políticas, agora é a hora de fazê-lo para proteger os dados tanto no local quanto fora dele. Implementar soluções de segurança em pilha profunda, em vez de apenas no nível de aplicação ou rede, é importante. Isso inclui boot seguro com atestação, virtualização e segurança de contenção, além de segurança e monitoramento de firmware. É importante estender a auditoria, a inteligência de ameaças e o monitoramento para ambientes de trabalho remoto, apesar da resistência dos usuários que não desejam mais monitoramento em seus sistemas. Também considere estender a segurança além do dispositivo nos locais de trabalho remoto sempre que possível, como dispositivos e redes gerenciados.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
