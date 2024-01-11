---
layout: posts
title: "Enfrentando o Inimigo Cibernético ao Proteger sua Cadeia de Suprimentos de Software."
number: 91
permalink: episode-EDT91-pt
lang: pt
nav_exclude: true
nav_order: 91
tags:
    - cybersecurity
    - devsecops
    - sbom
    - securesupplychain
    - policy
    - process
    - compute

date: Wed Jun 08 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Eric Greenwald

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto-Chefe de Soluções da Intel, e Eric Greenwald, Consultor Jurídico Geral da Finite State, falam sobre a segurança da cadeia de suprimentos de software."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquiteto-Chefe de Soluções da Intel, e Eric Greenwald, Consultor Jurídico Geral da Finite State, falam sobre a segurança da cadeia de suprimentos de software."
---

<div>
{% include transistor.html id="d4b56c70" title="#91 Fighting the Cyber Adversary by Securing your Software Supply Chain" %}

{% include youtube.html id="url" %}
</div>

---

Darren e Eric Greenwald, Conselheiro Geral da Finite State, discutem a segurança da cadeia de suprimentos de software neste episódio.

Finite State concentra-se em encontrar vulnerabilidades no firmware, mais frequentemente em software de terceiros que possam já ter vulnerabilidades existentes, antes de incorporá-lo em seus dispositivos. Finite State concentra-se principalmente em dispositivos de IoT industrial, dispositivos médicos, automóveis e eletrônicos de consumo.

Por sete anos antes de se juntar à Finite State, Eric trabalhou como advogado no setor privado, concentrando-se em testes de segurança e identificação de vulnerabilidades para empresas de cibersegurança. Antes disso, ele trabalhou no governo com segurança cibernética e segurança nacional, para o FBI e CIA, e como conselheiro-chefe do Comitê de Inteligência da Câmara dos Representantes. Seu trabalho governamental culminou quando ele se tornou o Diretor Sênior de Cibersegurança no Conselho de Segurança Nacional, na Casa Branca.

Eric acredita que parte da razão pela qual há agora um foco na segurança da cadeia de suprimentos é que a ameaça evoluiu. A natureza cada vez mais complexa do software, incluindo o fato de que muitos componentes possuem vulnerabilidades quando são criados pela primeira vez e apenas descobertas ao longo do tempo, torna mais difícil encontrar dispositivos construídos através da cadeia de suprimentos de software. Além disso, ataques recentes de alto perfil através de uma violação na cadeia de suprimentos de software, como o SolarWinds, têm feito as pessoas ficarem mais conscientes do perigo.

No ataque SolarWinds, o perpetrador teve paciência, não causando imediatamente o caos, mas aguardando um ano enquanto percorria as redes de computadores americanas, cultivando acesso e informações. Essa paciência é provavelmente a diferença mais significativa entre um ataque de estado e um ataque criminoso. Enquanto os ataques criminosos pacientes às vezes estão mais focados em um retorno financeiro do investimento, aqueles por trás de um ataque de estado estão dispostos a levar anos para desenvolver seu acesso à inteligência. No entanto, com ambos, os ataques estão se tornando mais sofisticados e estão em uma posição muito melhor para tirar vantagem devastadora da complexidade da cadeia de suprimentos.

Para combater esses ataques, estão surgindo novas regulamentações. A administração Biden emitiu a ordem executiva 14028 em maio de 2021, que possui dois pontos principais: desenvolvimento seguro de software e lista de materiais de software (SBOM). A ordem executiva é direcionada apenas às compras governamentais, mas a indústria privada provavelmente irá segui-la.

Os detalhes e recomendações técnicas para o desenvolvimento seguro de software ainda estão sendo elaborados. No entanto, parte disso seria que os fornecedores de software para o governo teriam que fornecer um SBOM (Lista de Materiais de Software). O primeiro projeto de lei para SBOMs foi lançado em 2014, portanto, as normas para sua produção se tornaram mais maduras e desenvolvidas. Um SBOM é essencialmente uma lista de componentes de software que foram utilizados em um produto de software, não muito diferente de uma lista de ingredientes em um produto alimentício. Isso oferece transparência na cadeia de suprimentos, o que é essencial para avaliar vulnerabilidades ou poder identificar uma vulnerabilidade que seja descoberta posteriormente.

Um excelente exemplo disso é o que aconteceu com o Log4j. Quando essa vulnerabilidade foi descoberta, muitas empresas não tinham ideia se a tinham em sua pilha. Não seria uma varinha mágica, mas um SBOM permitiria às empresas descobrir mais facilmente se têm o componente de software problemático em seu sistema e agir mais rapidamente para implementar um patch.

Os argumentos contra a publicação de SBOMs são de que fornecerão um roteiro para os atacantes e revelarão informações proprietárias. Embora essas sejam preocupações legítimas e que devem ser discutidas, o Departamento de Comércio e o Departamento de Segurança Interna afirmam que a transparência proporciona benefícios significativos aos defensores em relação a qualquer vantagem concedida aos atacantes. Existem projetos de lei bipartidários em apoio aos SBOMs. Existem maneiras de reduzir o risco de os SBOMs caírem nas mãos erradas, como contratos seguros ou não fungíveis. Os debates sobre essas preocupações continuarão no setor público, e mais empresas irão adotá-los.

Esta legislação está ocorrendo porque a FDA sugeriu que os fabricantes de dispositivos médicos incorporem SBOMs como parte do processo de análise, então os SBOMs estão ganhando impulso desses fabricantes. O mundo físico está se tornando cada vez mais afetado pelo software em dispositivos médicos e sistemas incorporados, como sistemas de controle para usinas de energia, sistemas de HVAC, controles de aeroporto, etc., então os sistemas operacionais estão em risco, com consequências mais significativas do que ataques a sistemas empresariais.

Uma dificuldade para os profissionais de OT é que muitos dos componentes industriais são mais antigos e nem sempre foram atualizados. Ainda assim, os hackers relutam em se conectar à internet e atualizar porque é assim que os hackers entram. A melhor resposta para esse problema é tentar obter transparência dos componentes no sistema, escanear o sistema e os dispositivos que fazem parte da rede OT e fazer engenharia reversa e descompilação para entender os detalhes. Essencialmente, é preciso criar seu SBOM (Software Bill of Materials) e avaliar onde estão as vulnerabilidades.

Esta é a área principal de trabalho da Finite State. Eles analisam os sistemas e dispositivos e fazem uma análise. Eles possuem uma plataforma que automatiza a análise do código incorporado, fornece uma leitura das vulnerabilidades e identifica e agrupa as vulnerabilidades de maior prioridade. Às vezes, é possível resolver toda uma categoria de vulnerabilidade com uma única correção. Criar o SBOM por si só, então, não é o bastante. Ele deve ser integrado a um sistema de gerenciamento de risco para filtrar e classificar as várias vulnerabilidades. Encontrar os riscos de maior prioridade é um processo complexo, e a Finite State pode ajudar as equipes de segurança a priorizar suas ações para proteger seus sistemas.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
