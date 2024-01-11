---
layout: posts
title: "Un argomento a favore del cloud multi-ibrido"
number: 22
permalink: episode-EDT22-it
has_children: false
lang: it
nav_exclude: true
parent: Episódios
grand_parent: Italiano
nav_order: 22
tags:

date: Tue Sep 22 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher descrive perché un architetto di Multi-Hybrid Cloud potrebbe già essere nel tuo Data Center. La maggior parte delle organizzazioni ha già tutti gli ingredienti. Devono solo capire come si integrano tra loro."
video: "https://youtu.be/url"
description: "Darren Pulsipher descrive perché un architetto di Multi-Hybrid Cloud potrebbe già essere nel tuo Data Center. La maggior parte delle organizzazioni ha già tutti gli ingredienti. Devono solo capire come si integrano tra loro."
---

<div>
{% include transistor.html id="e22edf51" title="#22 An Argument for Multi-Hybrid Cloud" %}

{% include youtube.html id="url" %}
</div>

---

## Ambiente Cloud attuale.

Negli ultimi cinque anni, c'è stato un cambiamento fondamentale nell'ambiente IT. La crescita continua del Public Cloud e l'emergere delle opzioni Private Cloud hanno lasciato molti CIO e dipartimenti IT a cercare di recuperare il ritardo. Nel mercato competitivo di oggi, molti team di sviluppo devono muoversi più velocemente di quanto la maggior parte dei dipartimenti IT possa fornire. I team di sviluppo hanno trovato nei Public Cloud come AWS, GCE e Azure una valida opzione per l'ormai obsoleto "IT da tavolo" o "IT casalingo". I fornitori di cloud pubblico hanno reso facile e veloce "avviare" nuova infrastruttura. Non è più necessario aspettare l'approvazione tecnica e commerciale da più livelli, lo spazio fisico nel data center e i problemi di fornitura del venditore. Ora, in pochi minuti, un team di sviluppo può avere tutta l'infrastruttura di cui ha bisogno per il suo nuovo progetto.

Prima del Cloud Pubblico, i CIO(s) potevano facilmente "girare attorno" ai cubi e contare il numero di macchine "cottage IT" che giravano sotto le scrivanie delle persone. Con le macchine fisiche ormai invisibili per i dipartimenti IT, diventa impossibile identificare i team e le infrastrutture dei loro progetti. Molte piattaforme di cloud pubblico hanno dato alle organizzazioni la capacità di consolidare la contabilità di tutti gli account per specifici domini, ma la visibilità su cosa sta funzionando e su chi sta lavorando all'infrastruttura è ancora un po' come cercare un ago in un pagliaio. Molte volte questi progetti "fuorilegge" diventano visibili quando i progetti vengono prodotti e devono essere inseriti in un'infrastruttura protetta aziendale. Le politiche di sicurezza, privacy e regolamentazione possono rendere quasi impossibile la "produttività" dei progetti. Soprattutto se gli sviluppatori hanno strettamente accoppiato le loro applicazioni all'infrastruttura Cloud.

I dipartimenti IT orientati al futuro stanno facendo del loro meglio per acquisire il "cottage IT" lavorando con Cloud Pubblici e ISV per creare dei "portali aziendali" nel Cloud. Mettere in atto un portale di passaggio è un buon inizio per catturare progetti utilizzando infrastrutture, ma molte organizzazioni trovano che un semplice portale non soddisfi le esigenze dei team di sviluppo. Negli ultimi anni ho lavorato con molte di queste organizzazioni per identificare casi d'uso, architetture e tecnologie per aiutare nello sviluppo di questi portali potenziati che abbiamo chiamato "Hybrid Multi-Clouds" (MHC). Tipicamente, tre tecnologie principali vengono integrate insieme per costruire questi MHC. Piattaforme di Gestione del Cloud (CMP), Framework di Automazione e strumenti Platform as a Service (PaaS).

## Piattaforma di Gestione del Cloud (CMP)

La responsabilità principale delle piattaforme di gestione del cloud è gestire più cloud eterogenei, sia pubblici che privati. Offrono agli utenti finali la possibilità di gestire più cloud e le relative infrastrutture da un'unica interfaccia comune. Le CMP solitamente sono progettate con un'attenzione specifica agli amministratori di cloud. Sebbene lo strumento delle piattaforme di gestione del cloud si concentri principalmente sulla gestione di più cloud, molti strumenti hanno aggiunto funzionalità dai PAAS e dai framework di automazione, o hanno almeno un'architettura di plugin per supportarli.

## Utilizzo dei casi coperti.

Gestione di Cloud Pubblici

Gestire le Cloud Privati

Gestione delle identità cloud

Gestione dell'infrastruttura su più cloud.

## Framework di automazione

Il primario compito di Automation Frameworks è automatizzare il rilascio, la gestione e l'aggiornamento degli stack software sull'infrastruttura. Automation Frameworks sono nati dalla comunità DevOps e sono tipicamente focalizzati su processi ripetibili. Molti di questi strumenti includono linguaggi di scripting che consentono agli ingegneri DevOps di gestire e configurare in modo ripetibile software e servizi. Molte squadre DevOps sono esperte in questi strumenti.

## Casi d'uso coperti

Deploy software on infrastructure: Distribuire il software sull'infrastruttura.

Gestire software sull'infrastruttura.

Aggiornamento di software e servizi

## Piattaforma come servizio (PAAS)

La piattaforma come servizio (PaaS) è principalmente responsabile di fornire un unico portale per riutilizzare piattaforme e distribuirle su infrastrutture. Gli strumenti PaaS sono tipicamente altamente orientati verso lo sviluppatore, il che può portare a configurazioni di infrastruttura inflessibili. Molti di questi strumenti dispongono di un portale web che consente agli sviluppatori di selezionare i servizi e distribuirli nell'infrastruttura.

## Casi d'uso coperti.

* Deploy/Manage Services/Applications in Italian can be translated as:
* Distribuire/Gestire Servizi/Applicazioni

Gestire il Catalogo dei Servizi

Sviluppare nuovi servizi/applicazioni

## La convergenza crea il Multi-Cloud Ibrido (MHC)

Poiché nessun set di strumenti dispone di tutti i casi d'uso necessari per gestire nuvole, applicazioni, infrastrutture e servizi, i team impiegano diversi "anni uomo" per installare, configurare e integrare questi tre set di strumenti insieme. Ciò ha portato all'emergere di tecnologie che integrano questi strumenti, inclusi nuovi prodotti e nuove funzionalità nei prodotti attualmente disponibili.

Molti prodotti CMP stanno includendo PaaS e Framework di Automazione nelle loro soluzioni. Gli strumenti PaaS stanno ora gestendo più nuvole. I Framework di Automazione stanno cominciando ad offrire portali web e connettività a più nuvole. Molti degli strumenti si stanno spostando verso la visione Hybrid Multi-Cloud. Quando si valuta quale/e strumento/i utilizzare, è importante ricordare le radici dello strumento.

## Implementare una soluzione

L'ecosistema Hybrid Multi-Cloud è ancora abbastanza nuovo e richiede ancora alcune integrazioni complesse tra gli strumenti. Ci sono alcuni strumenti che stanno iniziando a offrire soluzioni complete pronte all'uso, ma ancora con la loro particolare visione del mondo. Poiché l'ecosistema è ancora in fase embrionale, ci sono molti attori e scelte. Il tempo dirà chi vincerà in questo settore. Per ora, sarà interessante osservare la convergenza e la consolidazione degli strumenti mentre le funzionalità si sviluppano.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
