---
layout: posts
title: "Pesquisa Médica Colaborativa com Computação Confidencial"
number: 40
permalink: episode-EDT40-pt
has_children: false
lang: pt
nav_exclude: true
parent: Episodi
grand_parent: Português
nav_order: 40
tags:
    - confidentialcomputing
    - cybersecurity
    - distributedanalytics
    - sgx
    - healthcare
    - data
    - technology
    - edge

date: Tue Feb 23 2021 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Nick Bhadange

img: thumbnail.png
image: thumbnail.png
summary: "Supere as barreiras para acelerar a pesquisa médica para a cura do câncer com a computação confidencial. Nick Bhadange, Especialista em Tecnologia, AI-Vets e Darren Pulsipher, Arquiteto Principal de Soluções, Setor Público, Intel, discutem a necessidade de computação confidencial na área da saúde e os benefícios potenciais por meio de casos de uso."
video: "https://youtu.be/url"
description: "Supere as barreiras para acelerar a pesquisa médica para a cura do câncer com a computação confidencial. Nick Bhadange, Especialista em Tecnologia, AI-Vets e Darren Pulsipher, Arquiteto Principal de Soluções, Setor Público, Intel, discutem a necessidade de computação confidencial na área da saúde e os benefícios potenciais por meio de casos de uso."
---

<div>
{% include transistor.html id="558eb1c5" title="#40 Collaborative Medical Research with Confidential Computing" %}

{% include youtube.html id="url" %}
</div>

---

## Por que precisamos de computação confidencial?

A infraestrutura computacional atual é construída com ênfase na partilha e abertura: a internet é gratuita e os dados devem ser gratuitos. Isso tem sido um problema quando se trata de segurança. Implementamos algumas soluções que funcionam bem, sabemos criptografar dados quando estão armazenados e quando estão em trânsito. Apesar disso, os dados podem ser atacados de várias formas enquanto estão sendo lidos, analisados e utilizados.

Dados sensíveis permanecem vulneráveis, seja financeiros, médicos ou de localização, tanto sob o ponto de vista de visibilidade quanto de integridade dos dados.

Ao lidar com dados na área da saúde, existem camadas adicionais de complexidade. Existem muitas regras e regulamentos, como o HIPAA, e cada estado possui suas próprias regulamentações sobre dados médicos também. Apesar da complexidade e do número de partes governantes, é possível ter computação confidencial, onde você tem a capacidade de compartilhar dados entre partes que, por natureza, não confiam umas nas outras.

Para confidencialidade, precisamos pensar em alguns fatores diferentes: integridade dos dados, confidencialidade dos dados e integridade do código.

## Problemas críticos de privacidade e segurança de dados

Traduzindo para o português: Os registros de saúde de um indivíduo, especialmente nos Estados Unidos, estão espalhados entre médicos, especialistas, laboratórios e hospitais. A maioria das pessoas não tem fácil acesso aos seus registros; é quase impossível criar uma imagem completa de sua própria saúde. A computação confidencial pode ajudar a superar essas barreiras.

Primeiramente, isso pode garantir que quaisquer dados que você compartilhe, você possa confiar que serão protegidos em termos de integridade dos dados; eles não serão modificados por ninguém. Eles podem ser confidenciais, ou seja, tokenizados ou criptografados, mas ainda podem ser utilizados para cálculos. Por exemplo, se uma parte deseja realizar análises em alguns dados, ela não precisa conhecer informações como nomes, datas de nascimento ou números de seguro social. Portanto, se essas partes dos dados puderem ser tokenizadas ou criptografadas, elas podem ser compartilhadas para análise, desde que a outra parte seja confiável.

Isso é onde medidas de segurança, como atestação, desempenham um papel, para que as partes possam comprovar sua identidade. E essa atestação pode estar vinculada ao nível de hardware até os ambientes de execução confiáveis que o hardware fornece. Dessa forma, você não está apenas confiando no transporte e no ponto final, mas também confiando no aplicativo e em como ele usará os dados.

Existem duas abordagens básicas para isso. A primeira é o SDK de aplicativo, o que significa que o desenvolvedor pode decidir como dividir seu código em componentes confiáveis ​​e não confiáveis. A outra abordagem é ter um sistema de criptografia em tempo de execução que pode ser construído em cima de um ambiente de execução confiável, minimizando o esforço necessário para converter um aplicativo atual em algo que possa ser executado nesse ambiente.

Com um ambiente de execução confiável baseado em hardware protegendo aplicativos e dados em uso, torna-se muito difícil para um ator não autorizado, mesmo que tenham acesso físico ao hardware, privilégios de root ou direitos de admin no hipervisor, obter acesso à aplicação protegida e aos dados. O paradigma de computação confidencial tem como objetivo permitir a remoção até mesmo do provedor de nuvem da base de computação confiável. Dessa forma, apenas o hardware e a própria aplicação protegida estão dentro do limite de ataque.

Esses ambientes de computação permitem aos CSPs aproveitar o melhor do que o hardware pode oferecer e a melhor segurança possível, sobre a qual o usuário final tem controle absoluto. Cada parte pode determinar suas próprias políticas e as hierarquias de políticas, como estaduais e federais, e cada provedor de informação pode determinar quais políticas se aplicam e a quem.

## Estudo clínico de Evidências do Mundo Real

Reunir todos os dados e dar sentido a eles é um grande desafio na indústria da saúde. O número de configurações de privacidade e compartilhamento de dados que existem entre os diferentes provedores, dispositivos, localizações geográficas, etc., torna isso atualmente impossível.

A AI-Vets, a Intel e alguns parceiros estão trabalhando juntos nesse problema. A arquitetura brilhantemente simples permite o uso em diferentes ambientes, tipos de dados e políticas, mas é capaz de realizar análises centralizadas.

Um exemplo da nossa implementação é uma pequena prova de conceito: Como você analisa através de várias partes, como hospitais, ambientes de pesquisa e laboratórios, cada um com seus próprios dados e estudos que podem estar acontecendo em um ambiente clínico? Por exemplo, como podemos encontrar qualquer correlação entre pessoas que tomam o medicamento X, digamos para diabetes, e têm a condição Y, digamos câncer, quando o medicamento X não tem nada a ver com o tratamento da condição Y? Esses dois conjuntos de dados não estariam no mesmo lugar, pois são tratados por provedores diferentes.

Se, no entanto, os provedores fizessem parte de um ecossistema onde pudessem determinar quais políticas desejam aplicar em seu ponto final, poderíamos ter um aplicativo centralizado, um portal central de pesquisa, que tem conexões com esses pontos finais. Haveria gerenciamento de chaves e atestação de terceiros para verificar as credenciais e autorizações um do outro, para que todas as partes possam confiar umas nas outras.

Esse é um aspecto da confiança, mas também precisamos proteger os dados que serão extraídos, consultados e transmitidos. Para isso, podemos gerenciar dados e aplicativos dentro de enclaves seguros e criptografados. Os dados são manipulados de acordo com as políticas estabelecidas por cada usuário, como a obfuscação de datas de nascimento, números de seguro social, etc. Essas informações podem ser tokenizadas, transformando-se em completo lixo nas mãos não autorizadas.

O portal central pode realizar uma consulta que abrange vários pontos de extremidade e combina diferentes tipos de dados em seu sistema em tempo de execução, fazendo uma análise sobre isso. Portanto, em vez de ter que trazer tudo para um repositório de dados e depois fazer a análise, isso é feito em tempo real. Não há espera para que os dados sejam publicados ou limpos primeiro, aplicando todas essas políticas; isso acontece de forma dinâmica e instantânea.

Isso permite insights tremendos. Durante a pandemia, por exemplo, se tivéssemos que esperar todos os dias para obter os dados e realizar análises complexas, seria difícil. Se fôssemos capazes de utilizar dados em tempo real de todos esses diferentes sistemas em todo o país e ao redor do mundo, mas ainda assim compartilhá-los de forma segura, poderíamos chegar a insights únicos que não seriam possíveis de outra forma.

Já vimos isso em alguns testes de conceito (POCs) para sites de clínicas que fizemos com nosso parceiro Fortanix. Eles possuem uma linha de produtos que facilita para diferentes entidades definirem suas políticas em um ambiente de computação confidencial, verificar as identidades umas das outras e gerenciar chaves e confianças. O conceito de ambientes de execução confiáveis existe há algum tempo e se tornou popular, tornando mais fácil aproveitar. Os casos de uso para isso são fantásticos.

## Detecção automatizada de COVID-19 a partir de imagens de raio-x do tórax.

Em alguns casos de uso, não se trata apenas dos dados que precisam ser seguros, mas também da propriedade intelectual associada a alguns algoritmos especializados. Por exemplo, para detectar automaticamente a COVID em imagens de raio-X, podem existir dados radiológicos, dados do paciente e também um algoritmo proprietário para realizar a análise. As regiões confidenciais podem proteger tanto os dados quanto as aplicações de olhares curiosos.

A área segura também protege as outras máquinas na rede, porque se alguém empurrasse algo malicioso para os nós finais, o sistema de gerenciamento de chaves impediria que fosse trocado, pois não está corretamente atestado. As partes escolhem exatamente quais fontes de dados a área segura pode se comunicar e ela está bloqueada, tanto para o que entra quanto para o que sai.

## Registros Eletrônicos de Saúde (eHR)

Os registros de saúde são uma bagunça enorme nos Estados Unidos, com acordos HIPAA em papel não aplicáveis, etc., e tudo espalhado por diferentes entidades. Um caso de uso que pode ser um bom modelo para nós seguir é do governo alemão. Eles fizeram uma determinação de que os dados de cuidados de saúde devem ser armazenados em registros eletrônicos de saúde e essas aplicações devem ser implantadas em ambientes de execução confiáveis. O paciente é o usuário final e determina quais dados estão disponíveis e para quem.

Esse nível de granularidade em termos do que está disponível para o usuário final é tremendo. E não somente todos esses dados são coletados e compartilhados pelos diferentes sistemas, eles estão em áreas seguras, completamente protegidos do mundo exterior. Se alguém não autorizado tiver acesso aos dados, eles seriam completamente sem sentido.

Estes ambientes de execução confiáveis são o primeiro passo na direção de controles que são facilmente compreensíveis e facilmente aplicáveis.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
