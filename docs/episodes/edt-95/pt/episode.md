---
layout: posts
title: "Requisitos para arquiteturas desde a borda até a nuvem."
number: 95
permalink: episode-EDT95-pt
lang: pt
nav_exclude: true
nav_order: 95
tags:
    - edgecomputing
    - cloudcomputing
    - datamanagement
    - itgovernance
    - security
    - multicloud
    - zerotrust
    - cybersecurity

date: 2022-07-12T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto Principal de Soluções da Intel, e Dra. Anna Scott, Arquiteta Principal de Borda de Setor Público, discutem os requisitos essenciais para arquiteturas de serviços da borda à nuvem."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Arquiteto Principal de Soluções da Intel, e Dra. Anna Scott, Arquiteta Principal de Borda de Setor Público, discutem os requisitos essenciais para arquiteturas de serviços da borda à nuvem."
---

<div>
{% include transistor.html id="6279b2d2" title="#95 Requirements for Edge to Cloud Architectures" %}

{% include youtube.html id="url" %}
</div>

---

Anna recentemente liderou um esforço para escrever um white paper sobre arquiteturas de serviço de borda para nuvem. A borda para a nuvem engloba todos os pontos altos da tecnologia que a Intel se preocupa: IA, borda, nuvem e conectividade de rede. O objetivo era reunir especialistas nessas áreas para discutir como a Intel aborda as arquiteturas de borda para nuvem e como essas arquiteturas podem se conectar à nuvem. O foco estava nos elementos que importam, em oposição à tecnologia atual que aborda as questões. Isso forneceria um quadro para falar sobre e procurar as desconexões. Uma revelação interessante foi que profissionais de TI, OT e redes falam linguagens técnicas diferentes com diferentes taxonomias, entre outros desafios.

Uma lição dessas discussões foi que as comunicações são hiper-críticas e deve haver um conhecimento sólido de suas comunicações, especialmente na borda. Isso determina quanta computação precisa ser local e com que frequência você pode contar com a nuvem. No setor público, a complexidade adicional dos casos de uso deve manter a funcionalidade mesmo em condições de negação, interrupção, intermitência e limitação (DDIL). Precisamos repensar essas arquiteturas na conectividade em nuvem com base nessas limitações.

Comunicações e conectividade são as diferenças mais significativas entre uma arquitetura em nuvem, infraestrutura de serviço e o edge. Muitas ferramentas atuais assumem incorretamente uma conectividade constante; se algo não estiver conectado, está inativo. Isso não ocorre no edge. Isso é evidente em organizações de edge, como o militar. Mesmo em setores como a telemedicina, é preciso assumir que não haverá boa conectividade, por exemplo, no caso de uso de telemedicina, onde você pode depender do WiFi residencial do paciente. O setor industrial tem requisitos semelhantes. Alguns não podem ficar offline devido a controles críticos para máquinas ou processos específicos.

Então, como você pode ter uma computação centrada na borda que mantém todas as funcionalidades críticas com conectividade de volta para a nuvem de forma essencialmente intermitente? Existem arquiteturas para isso, mas ainda há muito mais a ser feito para ter operações contínuas quando a conectividade pode não ser constante. O que você pode continuar fazendo e o que acontece quando tudo é restaurado? Haverá uma desconexão com o que vem acontecendo com os dados. Torna-se complexo quando você precisa sincronizar todos esses dados em escala, talvez com milhares de dispositivos de borda.

## Segurança

Segurança na borda é outra área em que sempre há mais trabalho a ser feito. Medidas de segurança tradicionais, como autenticação, ainda são extremamente importantes, mas os dispositivos representam uma grande superfície de ataque e sua segurança física é uma questão diferente. A segurança de laptops costuma ser sólida e essas medidas devem ser aplicadas a outros dispositivos na borda. Novos avanços em IA ajudarão a determinar se os dispositivos estão no local correto e a detectar anomalias em, digamos, dez mil dispositivos.

## Desenvolvimento de Aplicativos

Na criação de aplicações, os desenvolvedores devem compreender o ambiente exclusivo da borda e desenvolvê-las sem necessidade de reprogramação ou adoção de um novo middleware para ser executado na borda. As aplicações devem ser capazes de serem executadas com limitações de computação, energia e conectividade. Além disso, a borda pode estar em uma nova configuração de computação distribuída e a aplicação precisa ser projetada para ser executada em uma rede de malha com computação altamente distribuída. Desacoplar a aplicação do hardware é uma mudança significativa e está se tornando mais genérico e menos restrito. No entanto, todo o diálogo está caminhando para obter dados de qualquer lugar e utilizá-los em qualquer lugar.

## Gerenciamento de dados

O volume de dados gerado e coletado na borda é tão grande que não faz sentido enviar todos esses dados para um centro de dados para ser processado. Uma das razões é o custo. Nos Estados Unidos, uma rede privada 5G pode ser economicamente viável para essas enormes quantidades de dados, mas o custo seria proibitivo para a maioria das organizações sem 5G privado.

A outra questão é que a maior parte dos dados não é útil. Por exemplo, ao monitorar dispositivos ou aplicativos, a maioria dos dados indica que tudo está funcionando corretamente, quando o que realmente importa são os eventos que sugerem problemas. Algoritmos de IA são aplicados na borda, reduzindo a quantidade de dados irrelevantes enviados para a nuvem para processamento.

O modo de operação tradicional para a gestão de dados, copiando tudo para o centro de dados e executando análises lá, não funciona bem para a edge. Empurrar aplicativos para a edge nem sempre funciona também. A Intel identificou algumas outras arquiteturas de dados ou operações de dados. Uma delas é chamada de troca de dados, onde há uma combinação de movimentação de dados em ambientes seguros somente depois de serem analisados na edge, como processamento em lote. A outra é chamada de fluxos de dados inteligentes, onde SADE e SABR entram em jogo. Os dados são movidos apenas com base em regras e estão sendo transmitidos. Isso funciona em ambientes DDIL porque pode determinar os ambientes operacionais atuais e se ajustar.

## Gerenciabilidade

Os sistemas devem ser projetados de forma que possam ser mantidos. Você não pode implantar dez mil dispositivos e, em seguida, enviar regularmente um pequeno exército de pessoas para verificá-los. A área de TI sempre foi cautelosa em não querer atualizar um sistema em funcionamento. No entanto, não faz sentido deixar os sistemas sozinhos, especialmente com o medo de ataques de ransomware em redes OT. Os sistemas devem ser projetados de forma a manter tudo facilmente atualizado, a fim de lidar com o ambiente de segurança.

## Disponibilidade

Especialmente em áreas críticas como militar ou saúde, é importante projetar sistemas com redundância suficiente; é mais uma abordagem sistêmica. Se os componentes individuais falharem, ainda é necessário alcançar o objetivo final. Isso é muito diferente do que acontece na nuvem, onde se trata de manter a infraestrutura em funcionamento.

A tecnologia ainda não está completamente desenvolvida, mas está sendo considerada para projetar para várias redes. Se, por exemplo, você preferencialmente utilizar o WiFi 6 e ocorrer uma falha, o sistema pode utilizar o 4G ou outra rede disponível. A rede deve ser sólida, assim como o computador. Uma operação independente sem a parte da rede é frágil. Se você optar por conexões por cabo, terá limitações maiores e perderá seus aplicativos móveis.

Você pode encontrar o white paper "Requisitos Essenciais para Arquiteturas de Serviço Edge to Cloud" para mais informações em embracingdigital.org ou intel.org.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
