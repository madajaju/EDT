---
layout: posts
title: "Futuro de Memória Grande e CXL"
number: 89
permalink: episode-EDT89-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 89
tags:
    - bigmemory
    - memverge
    - optane
    - technology
    - data
    - compute
    - pmem
    - cxl
    - ceo

date: Wed Jun 01 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Charles Fan

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Arquiteto Principal de Soluções da Intel, conversa com Charles Fan, CEO da MemVerge, sobre como a revolução do CXL e o software da MemVerge são o futuro da memória grande."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquiteto Principal de Soluções da Intel, conversa com Charles Fan, CEO da MemVerge, sobre como a revolução do CXL e o software da MemVerge são o futuro da memória grande."
---

<div>
{% include transistor.html id="536490f3" title="#89 Future of Big Memory and CXL" %}

{% include youtube.html id="url" %}
</div>

---

Um desenvolvimento empolgante na memória é o CXL (Compute Express Link). Um ecossistema robusto está sendo desenvolvido do lado do host, com a Intel e outros apoiando o CXL 1.1 em suas plataformas de próxima geração, como Sapphire Rapids. Aqueles do lado da memória, incluindo a Intel Optane de quarta geração, estarão no CXL. A Intel é um membro impulsionador do forte consórcio CXL que tem impulsionado o padrão. O CXL 2.0 já foi definido, com capacidades adicionais, incluindo a externalização e comutação do CXL, e o 3.0 está em processo, o que padronizará como o CXL pode ser provisionado e compartilhado.

Haverá novos produtos sendo lançados pela Samsung, Micron e SK-Hynix com capacidades CXL. Além disso, estão sendo desenvolvidas novas interconexões que podem potencialmente conectar a memória com o tecido, proporcionando uma memória habilitada para tecido que pode ser compartilhada entre vários servidores.

A tecnologia CXL é revolucionária. Um novo protocolo de memória funciona em cima do padrão PCIe de quinta geração em diante. Como permite colocar memória no PCIe, ela não precisa ficar apenas dentro da caixa, mas, no futuro, com a comutação PCIe, será possível tornar a memória na trama tornar-se componível e compartilhável. O primeiro produto CXL será lançado até o final do ano.

A MemVerge já possui um controlador de memória definido por software, e o CXL abriu um mundo completamente novo para o software. O CXL é para memória o que a fibra óptica é para armazenamento. É como uma rede de área de memória em vez de uma rede de armazenamento. É possível ir diretamente para a memória com o CXL e contornar completamente a CPU.

CXL será muito mais rápido do que as tecnologias de interconexão anteriores. Terá uma latência de 100 ou 200 nanossegundos. É aqui que a utilização, gerenciabilidade e agilidade aumentam. Haverá maior disponibilidade e produtividade no uso da memória. Além disso, será possível provisionar a memória de forma dinâmica; você pode provisionar conforme necessário e não precisa caber na caixa do servidor. Teoricamente, você sempre terá memória suficiente para o que precisar estar ativo.

Com a tecnologia de snapshot da MemVerge, seus dados estão protegidos e persistentes também. Isso se torna mais importante à medida que sua memória se torna maior. Se você a perder, será mais difícil reconstruí-la.

Para o CXL decolar, três coisas precisam estar em vigor. No lado do hardware, os líderes de hardware mais antigos precisam aderir e adotar os mesmos padrões. Isso aconteceu no ano passado, então há um único padrão que todos estão apoiando. Segundo, você não precisa alterar seu aplicativo para usar CXL, assim como redes de área de armazenamento. Terceiro, do ponto de vista de um banco de dados, você não deve precisar reescrevê-lo. Isso pode acontecer entre o que os padrões fornecem, o que o sistema operacional suporta e o software MemVerge, que faz a automação da movimentação de dados entre a memória DDR e a memória CXL.

A MemVerge pode fornecer essa camada de abstração. É essencialmente virtualização de memória. A memória definida por software lida com a localização real da memória física.

A MemVerge torna a memória ampliada transparente para a aplicação, permitindo que os programadores utilizem uma capacidade maior e nunca fiquem sem memória. Em seguida, temos a proteção de dados. A MemVerge desenvolveu um serviço de instantâneo em memória que pode capturar todo o estado de uma aplicação na memória e esse estado é imutável. Ele pode ser recuperado a qualquer momento e em qualquer lugar. Existem muitos casos de uso para isso, como mediação de ransomware e diminuição dos tempos de ciclo na pesquisa genômica.

A função de captura instantânea não é apenas útil porque pode capturar rapidamente e facilmente um pipeline em execução, permitindo que você volte atrás e se recupere a qualquer momento, mas também pode economizar dinheiro ao usar serviços em nuvem. Os principais provedores de serviços têm instâncias spot que têm desconto de 70-90% em relação ao preço regular, mas há uma pegadinha: eles podem recuperá-las a qualquer momento com apenas 30 segundos a dois minutos de aviso prévio. Isso não é tempo suficiente para lidar com isso, especialmente se você tiver muitos dados na memória, então isso não tem sido útil para muitas cargas de trabalho. Com a capacidade de captura instantânea do MemVerge, você pode fazer capturas periódicas da sua carga de trabalho em execução em qualquer instância. Se a instância spot for retirada, você tem uma imagem que pode recuperar e continuar executando. É um seguro que permite usar o serviço de baixo custo com proteção.

Como você está capturando uma imagem não apenas de um aplicativo, mas de um contêiner ou instância inteira, você pode reinstituí-lo em qualquer lugar, no local, na mesma nuvem ou em outra nuvem. Isso lhe oferece mobilidade e resiliência máximas em suas operações, mesmo no caso de uma grande interrupção do serviço em nuvem. Essa tecnologia oferece muitas possibilidades emocionantes.

A revolução CXL e o software MemVerge Memory Machine são combinações poderosas para possibilidades transformadoras.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
