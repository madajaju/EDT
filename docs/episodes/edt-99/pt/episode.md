---
layout: posts
title: "Caminho de Ataque Cibernético com Precognição da XM Cyber."
number: 99
permalink: episode-EDT99-pt
has_children: false
lang: pt
parent: Episodi
grand_parent: Português
nav_order: 99
tags:
    - aiml
    - cybersecurity
    - xmcyber
    - technology
    - process

date: Mon Aug 08 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Paul Giorgi

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Arquiteto Chefe de Soluções, e Paul Giorgi, Diretor de Engenharia de Vendas, da Intel, discutem como a tecnologia da XM Cyber pode ajudar as organizações a descobrir caminhos de ataque e reduzir riscos."
video: "https://youtu.be/G9PfJdHZi08"
description: "Darren Pulsipher, Arquiteto Chefe de Soluções, e Paul Giorgi, Diretor de Engenharia de Vendas, da Intel, discutem como a tecnologia da XM Cyber pode ajudar as organizações a descobrir caminhos de ataque e reduzir riscos."
---

<div>
{% include transistor.html id="60eaf764" title="#99 Precog Cyber Attack PAth with XM Cyber" %}

{% include youtube.html id="G9PfJdHZi08" %}
</div>

---

Paul está na área de segurança desde o final dos anos noventa, começando fazendo projetos para o Departamento de Segurança Interna e o Departamento de Defesa. Em 2005, ele ingressou na Fishnet Security como engenheiro de vendas e tem se envolvido nessa área desde então. Ele se juntou à XM Cyber para se concentrar na simulação de violações e ataques.

Em vez da segurança cibernética tradicional, que é detecção, remediação e prevenção, a XM Cyber é preditiva. Uma boa descrição é que ela é uma simulação de precognição. A XM Cyber cria incidentes imaginativos para fornecer uma visão de como suas ferramentas poderiam lidar com eles e como você poderia trabalhar para remediar pontos de estrangulamento específicos. A ideia é fazer tudo isso antes dos testes de penetração. Você pode corrigir coisas hoje, ver o impacto amanhã e, em seguida, aumentar e melhorar continuamente a sua segurança.

O Google Maps é uma boa analogia para explicar como a XM Cyber funciona. Quando você deseja ir de um lugar para outro, o Google Maps irá mostrar todas as formas de chegar lá, evitando pedágios, oferecendo a rota mais direta, etc. A XM Cyber faz a mesma coisa, mas com uma simulação de ataques. Por exemplo, suponha que você tenha uma conta de usuário ativa comprometida no Active Directory. Nesse caso, ela mostrará os seis passos necessários para chegar a um controlador de domínio local e comprometer esse ativo crítico. Também mostrará todas as rotas diferentes entre esses dois pontos.

Um caso de uso para isso é que você pode habilitar uma equipe de ataque (red team) a ser super eficiente com essas informações, pois eles não precisam ficar procurando e tentando fazer descobertas. Isso também pode ajudar a equipe de defesa (blue team), permitindo que eles priorizem as correções nos pontos de estrangulamento. Por exemplo, se houver 400 caminhos de ataque, todos indo para diferentes áreas na sua DMZ, mas todos os 400 parecem ter que utilizar essa única entidade para tornar esse caminho possível, você pode corrigir esse único problema e destruir os 400 caminhos. As equipes de defesa podem bloquear esses pontos de estrangulamento que podem permitir ao atacante obter acesso.

Uma área que a XM Cyber analisa é o gerenciamento de identidade, não apenas no data center, mas também na nuvem. Às vezes, os caminhos de ataque terão dez etapas, mas nove delas serão navegando pelo mundo da identidade. Por exemplo, você pode ter permissões para sua conta de administrador e, em seguida, essa conta de administrador pode ter permissões adicionais. Você pode fazer seis ou sete etapas ajustando diferentes permissões ou redefinindo senhas e implantando GPOs. Você pode dar nove passos de uma conta de usuário padrão para o administrador do domínio aproveitando o diretório ativo.

Além da identidade, a XM Cyber analisa mais de cem entidades como máquinas, buckets S3 e chaves SSH. Essas diferentes entidades podem ser combinadas para criar um caminho de ataque. Às vezes, isso se torna muito complexo. Por exemplo, um ataque pode começar no local, ir para o Azure, aproveitar o Intune e depois retornar para comprometer outra máquina que permite uma transição para o GCP. Uma vez que os invasores estão no ambiente do GCP, eles podem aproveitar a confiança ou permissão entre a AWS e o GCP para comprometer a AWS. A XM Cyber analisa todos os diferentes tipos de entidades em ambientes distintos e os conecta para avaliar esses caminhos em torno de como cada entidade joga de forma global em relação ao risco de todas as outras.

Existem duas formas pelas quais a XM Cyber interage com os clientes. A primeira é uma descoberta em alto nível para avaliar o ambiente, expor vulnerabilidades e medir como um invasor pode expor novas vulnerabilidades para colocar ativos críticos em risco. A segunda é uma avaliação direcionada de um cenário específico que preocupa o cliente. Esses compromissos não se limitam apenas à análise estática de entidades. Eles são dinâmicos porque observam o tráfego e outros padrões.

Um caso de uso típico direcionado é determinar se a OT é o ativo crítico ou o ponto de violação. A XM Cyber simula cenários, como por exemplo, se uma máquina no setor de Recursos Humanos é o ponto de violação, existe algum risco para esse PLC que está no ambiente SCADA controlando interruptores de pressão que podem desligar a eletricidade para um município. Esse é um caso de uso real que a XM Cyber pode simular. Esse tipo de informação é crucial em um mundo onde a OT não está mais isolada, mas conectada às redes.

A XM Cyber é uma solução SaaS em vez de uma solução local, para que possa se manter dinâmica e fornecer o melhor serviço. Pode ser assustador pensar que algo na nuvem tem todas as suas técnicas de ataque. No entanto, a XM Cyber realiza bastante trabalho para garantir que os dados estejam completamente isolados, em conformidade com SOC 2, entre outras certificações, e não há multi-inquilinato. Além disso, eles não coletam informações sensíveis. As informações sensíveis são hashadas e apenas uma parte é enviada para a nuvem. Eles não precisam ter os dados reais.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
