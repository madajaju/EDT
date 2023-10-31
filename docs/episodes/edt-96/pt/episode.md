---
layout: posts
title: "Aproveitando os Datacenters Virtuais com Verge.io"
number: 96
permalink: episode-EDT96-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 96
tags:
    - privatecloud
    - cloud
    - compute
    - technology
    - sdi
    - virtualdatacenter
    - vergeio

date: Wed Jul 20 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Aaron Reid
    - Chris Lehman

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, arquiteto-chefe de soluções da Intel, e Aaron Reid, engenheiro principal de sistemas da https://www.verge.io/, junto com Chris Lehman, vice-presidente sênior de vendas, discutem casos de uso para o software de data center virtual da Verge.io."
video: "https://youtu.be/oYZH273nhUU"
description: "Darren Pulsipher, arquiteto-chefe de soluções da Intel, e Aaron Reid, engenheiro principal de sistemas da https://www.verge.io/, junto com Chris Lehman, vice-presidente sênior de vendas, discutem casos de uso para o software de data center virtual da Verge.io."
---

<div>
{% include transistor.html id="dd535cf2" title="#96 Leveraging Virtual Datacenters with Verge.io" %}

{% include youtube.html id="oYZH273nhUU" %}
</div>

---

Aaron tem mais de 20 anos de experiência em TI. Ele é um engenheiro de pré-vendas, o que significa que ele conversa com os clientes sobre o valor e os recursos do Verge.io e os ajuda a definir suas necessidades.

Chris é o chefe de vendas na Verge.io com 25 anos de experiência em empresas de software de tecnologia. Ele descreve a Verge.io como tendo um foco maníaco na satisfação e sucesso do cliente com o software.

O termo "centro de dados virtual" é usado para simplificar. A plataforma é multi-inquilino, portanto, existem inquilinos independentes e aninhados com todos os recursos necessários dentro de um centro de dados, desde CPU até memória, armazenamento e rede, e eles são isolados. Ao mesmo tempo, é possível construir isso sob demanda. Assim como é possível criar uma VM sob demanda, muitas vezes com um modelo, é possível fazer o mesmo com um inquilino onde ele encapsula tudo no centro de dados virtual. É possível construir através de um mecanismo de receita ou do zero. É fácil clonar ou tirar uma captura de um desses inquilinos.

Esses data centers virtuais podem ser grandes e complexos. O maior cliente da Verge.io opera com mais de 60 nós e vários inquilinos em seu ambiente. As únicas restrições são as que estão incorporadas no cluster Verge.io de backend. Por exemplo, suponha que você tenha quatro terabytes de memória, 100 terabytes de armazenamento e 64 núcleos de CPU. Você pode designar todos esses recursos para esse inquilino, dividir como desejar, em metade ou terços, e construir os inquilinos dessa forma.

Se, por exemplo, você alocou alguns nós para o desenvolvimento, alguns para teste e o restante para produção, eles seriam inquilinos diferentes e você pode tirar uma foto instantânea entre eles e movê-los para produção. Nesse caso, você pode até ter vários ambientes de produção com atualizações azul-verde.

Muitos dos clientes da Verge.io são provedores de serviços gerenciados. Eles utilizam a multi-tenancy para seus clientes finais e, com isso, dedicam ambientes seguros de confiança zero. Os clientes podem ter seu próprio ambiente de nuvem e podem provisionar trabalhos virtuais conforme necessário.

Existem também casos de uso significativos para clientes de TI do tipo empresarial que desejam, por exemplo, ambientes de desenvolvimento e teste azuis-verdes ou que possam ter diferentes ambientes com diferentes requisitos de conformidade de segurança, como SOX ou HIPAA. A Verge.io possui vários clientes de instituições educacionais de grande porte que estão realizando pesquisas em conformidade. Eles certificam seu cluster uma única vez; em seguida, podem fornecer um ambiente de pesquisa em conformidade para um de seus pesquisadores em menos de uma hora. Anteriormente, poderia levar meses para iniciar e criar um ambiente em conformidade.

Para atualizações, embora os usuários devam usar ferramentas no nível da aplicação ou dentro das cargas de trabalho da VM, o "conjunto de instruções" do ambiente, para coisas como regras de firewall ou configurações de como os recursos são mapeados para as cargas de trabalho, pode ser atualizado sem problemas. Você também pode levar uma VM em um ambiente em execução com conformidade atualizada e movê-la para um novo ambiente.

Verge.io também é útil para segurança. Uma das maiores empresas de quant na Europa é um bom exemplo de uso de segurança. Eles tiram uma foto de todo o seu ambiente e, em seguida, realizam exercícios de equipe de ataque e defesa, procurando por vulnerabilidades de segurança, verificando patches, etc.

O VDI pode ser executado no ambiente. Verge.io faz parceria com uma empresa para suporte de VDI. Verge.io controla os recursos, a CPU e a memória. Eles também fornecem suporte para GPU e GPU passthrough, além de GPU física. Este é um caso de uso importante para alguns clientes, especialmente em cargas de trabalho de engenharia ou petróleo e gás. A GPU virtual proporciona economia favorável, pois o custo é distribuído entre vários usuários.

Um ajuste perfeito para a Verge.io são os casos de uso de borda. Um exemplo típico é o ponto de venda. Se um cliente varejista tem cem lojas, ele pode precisar de duas ou três aplicações de máquinas virtuais (VMs) em cada loja. Como a Verge.io tem uma pegada de hardware pequena, uma vez que você tenha pelo menos dois servidores, você pode colocá-los no centro de dados de casos de uso de borda e construir essas VMs. E então, com os recursos de snapshot e replicação, essas configurações podem ser copiadas e coladas em todos os ambientes diferentes. Você pode atualizar as configurações mais recentes em todos eles, não apenas os patches do sistema operacional, mas também as regras de firewall.

Um futuro emocionante para a Verge.io está nos sistemas de direção automatizada devido ao volume de dados. Muitos fornecedores estão testando os veículos em locais remotos e enviando fisicamente os discos rígidos. Imagine se os dados pudessem ser processados no local, totalmente redundantes, com custos atrativos associados a isso, então os dados poderiam ser transportados em uma área ampla em vez de um disco e um caminhão.

Para obter mais informações sobre o Verge.io, visite http://verge.io.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
