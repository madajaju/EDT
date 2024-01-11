---
layout: posts
title: "Ensino à distância e aprendizagem"
number: 11
permalink: episode-EDT11-pt
lang: pt
nav_exclude: true
nav_order: 11
tags:
    - remotelearning
    - compute
    - technology
    - people
    - edge
    - telelearning

date: Tue Aug 11 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Erin Moseley
    - Grant Kelly

img: thumbnail.png
image: thumbnail.png
summary: "Neste episódio, Erin Moseley, Executiva de Contas Sênior para Educação na Intel, e Grant Kelly, Arquiteto de Soluções para Educação na Intel, juntam-se a Darren para falar sobre os desafios do ensino e aprendizagem a distância e as mudanças avassaladoras que as escolas, professores, pais e alunos estão absorvendo durante a pandemia da Covid-19. Descubra como estudantes e professores estão se conectando com novas tecnologias e formas de aprendizado."
video: "https://youtu.be/Yb1rXTCEIeQ"
description: "Neste episódio, Erin Moseley, Executiva de Contas Sênior para Educação na Intel, e Grant Kelly, Arquiteto de Soluções para Educação na Intel, juntam-se a Darren para falar sobre os desafios do ensino e aprendizagem a distância e as mudanças avassaladoras que as escolas, professores, pais e alunos estão absorvendo durante a pandemia da Covid-19. Descubra como estudantes e professores estão se conectando com novas tecnologias e formas de aprendizado."
---

<div>
{% include transistor.html id="e48d397d" title="#11 Distance Teaching and Learning" %}

{% include youtube.html id="Yb1rXTCEIeQ" %}
</div>

---

## Considerações Emergentes

Professores, funcionários, pais e estudantes estão enfrentando desafios diferentes na mudança repentina para o ensino à distância. No lado de TI das escolas, há uma série de considerações emergentes. O que fazemos com o cenário de trazer seu próprio dispositivo (BYOD) vindo de redes de confiança zero? Como proteger a privacidade e gerenciar a segurança com os diversos novos modos de comunicação entre professores, funcionários, pais e estudantes? Como manter uma experiência de sala de aula simplificada e gerenciada? Como oferecer suporte quando não existe uma estrutura tradicional de helpdesk? Além disso, não podemos esquecer que há um aspecto social importante que deve impulsionar uma experiência perfeita. Um aluno da terceira série sendo distraído por problemas técnicos quando precisa se conectar com professores e colegas terá uma experiência de aprendizado à distância reduzida.

## Sistemas, Serviços e Plataformas para a Educação

Sempre houve complexidade com todas as diferentes camadas de serviços e plataformas, por exemplo, a suíte de produtividade com G Suite e Office 365. A questão agora é o que podemos fazer com os sistemas de gerenciamento de aprendizagem nessa abordagem em camadas na integração do sistema de informações do aluno? Devemos analisar como estamos aproveitando nossas capacidades em relação à escalabilidade. Devemos considerar diferentes soluções de infraestrutura como serviço (IAAS) e plataforma como serviço (PAAS), serviços de armazenamento, privacidade e segurança, e, é claro, as plataformas subjacentes que impulsionam tudo isso.

Antes, as ferramentas de conferência e colaboração tinham uso limitado, talvez apenas para trazer um palestrante convidado, por exemplo. Agora, porém, estão sendo amplamente utilizadas como ferramentas principais e têm contribuído para a complexidade do sistema.

## Opções de Hospedagem de Serviços

Existem dois modos principais que são usados para acessar serviços: o dispositivo como um portal para serviços (software, infraestrutura ou plataforma), e o dispositivo como parte da rede interna. Anteriormente, a maioria se encaixava na última categoria, onde existem preocupações limitadas sobre coisas como atualizações e conformidade com políticas porque os dispositivos estão constantemente conectados aos sites internos da escola, independentemente se são propriedades do próprio distrito ou trazidos pelos próprios usuários (BYOD). Agora, com os diferentes tipos de conectividade, precisamos estar preocupados com a escalabilidade de largura de banda e como implementá-la.

## Dispositivo como um Portal para Serviços

Plataformas como G Suite, Office 365 e aquelas para conferência e colaboração são preocupantes porque criam dependência de uma terceira parte. Os distritos escolares não têm controle sobre segurança, privacidade e desempenho. É importante reconhecer que a conexão com esses serviços em nuvem se conecta de volta ao host interno, seja um nuvem privada ou um centro de dados local, que possui serviços subjacentes de gerenciamento de identidade, sistemas de informações do estudante, filtragem de conteúdo possível, etc. No entanto, os benefícios são a redução do tráfego de entrada para o centro de dados e escalabilidade e gerenciabilidade inerentes.

## Dispositivo como parte da Rede/Nuvem Privada

Implementar uma rede privada virtual (VPN) é uma ideia nova para a maioria dos distritos escolares. Empresas têm usado VPNs há algum tempo, e distritos escolares podem ter que seguir o mesmo caminho para atender às novas necessidades do ensino à distância. Algumas desvantagens de uma VPN são congestão de rede, escalabilidade e tráfego de redes de confiança zero. O principal benefício é que ela funciona como uma extensão da rede interna, então gerenciamento de segurança e criptografia de tráfego são estendidos aos clientes da VPN. Acessibilidade a todos os serviços necessários internamente é outro grande benefício.

## Emergência de gargalos.

Gargalos parecem diferentes para o ensino à distância. Para as empresas, quando a força de trabalho passou a ser virtual, a carga esperada em VPN era de cerca de 10%. Para a educação, esse número será significativamente maior, criando um possível gargalo na VPN. A escalabilidade de serviços hospedados é outra área de consideração. Mesmo que os serviços estejam em nuvem pública, eles se conectam de volta a uma nuvem privada ou centro de dados local para coisas como SSO, informações de alunos, tráfego e até mesmo filtragem de conteúdo. A largura de banda de acesso à internet dedicada, assim como a forma como o repasse de largura de banda no centro de dados é tratado, são considerações importantes.

O acesso a um componente de suporte também deve ser escalável para evitar gargalos.

A principal preocupação das redes escolares atualmente, no entanto, é garantir acesso a todos os seus alunos. Para alguns estudantes, há um gargalo apenas para acessar a internet em casa. Quando esse problema é adicionado a todas as diferentes camadas, os gargalos emergentes se tornam muito complexos.

Para combater esses problemas potenciais, os distritos escolares devem dedicar o tempo e os recursos necessários para criar uma arquitetura sólida que seja resiliente, em vez de construir uma bagunça de "espaguete" apressada.

## Escalabilidade

Historicamente, os distritos escolares ampliaram o centro de dados e descentralizaram alguns desses serviços para os locais das escolas. Portanto, a arquitetura geralmente existe para acomodar a agregação de professores, funcionários e alunos em termos de autenticação, gerenciamento de atualizações, distribuição de software, etc. Agora que a descentralização é realizada na sala de aula virtual, estamos voltando a ampliar os serviços no centro de dados.

## Encontrando o Equilíbrio

Anteriormente, apenas os dois fatores de on-prem no centro de dados da central e os links da LAN para os sites da escola estavam em jogo. Agora, há o fator adicional de acomodar todas as salas de aula virtuais, ou seja, a sala de estar de cada aluno e professor. Como podemos acomodar isso? Tudo se resume ao conceito primário de encontrar o equilíbrio do que você precisa para o seu distrito escolar. Cada distrito é diferente em tamanho e alfabetização tecnológica, e há muitas peças em movimento.

## Abordando gargalos

O que a Intel pode fazer para ajudar a resolver esses gargalos que identificamos?

Gerenciamento de ponto final e segurança de ponto final é onde a central de suporte de TI entra. Estamos procurando maneiras de oferecer suporte remotamente, em vez de visitas regulares aos locais escolares.

Podemos analisar o centro de dados e a infraestrutura e desenvolver uma estratégia que nos permitirá escalonar a rede e a infraestrutura definidas por software. Além disso, também podemos integrar algum burst de nuvem como serviço de infraestrutura, levando em consideração os padrões de tráfego.

## Componentes Intel para Solucionar Gargalos

A Intel pode ajudar em três categorias principais: computação, armazenamento e rede. Quando olhamos para o reforço da infraestrutura definida por software e as considerações importantes, gira em torno desse computador com processadores Intel, produtos de armazenamento e capacidades de rede. Em vez de estar ligada e limitada por interfaces físicas e dispositivos, a infraestrutura definida por software pode escalar e trazer outros recursos de computação, armazenamento e rede. Ninguém tem certeza de como será o cenário ao retornarmos à escola, e essa infraestrutura definida por software é dinâmica e proporcionará a maior flexibilidade.

Existem muitas opções para os distritos escolares construírem um ambiente viável e seguro para o ensino à distância. Embora tenhamos abordado os tópicos de privacidade e ameaças e soluções de segurança neste episódio, na próxima vez faremos uma análise mais detalhada desses tópicos importantes.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
