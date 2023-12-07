---
layout: posts
title: "DevOps con velocità riducendo il rischio"
number: 53
permalink: episode-EDT53-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 53
tags:
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - multicloud

date: Mon Jun 14 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "In questo episodio, Robert Boule, responsabile della Solution Engineering presso OpsMx, si unisce a Darren per parlare del miglioramento della velocità senza aumentare il rischio nel processo di DevOps. Le tre aree chiave da bilanciare nella consegna del software sono la velocità, il rischio e la qualità. La maggior parte può gestire una o due di queste cose, ma l'aggiunta della terza può diventare difficile. Ad esempio, potresti essere in grado di consegnare a velocità perché hai un ottimo sistema di continua distribuzione, ma una volta che introduci controlli di conformità e di politica, ti trovi di fronte a una sfida. Ti fermi e controlli queste cose, o forse acquisisci alcuni risultati da un altro strumento? Improvvisamente, la tua velocità ne risente."
video: "https://youtu.be/url"
description: "In questo episodio, Robert Boule, responsabile della Solution Engineering presso OpsMx, si unisce a Darren per parlare del miglioramento della velocità senza aumentare il rischio nel processo di DevOps. Le tre aree chiave da bilanciare nella consegna del software sono la velocità, il rischio e la qualità. La maggior parte può gestire una o due di queste cose, ma l'aggiunta della terza può diventare difficile. Ad esempio, potresti essere in grado di consegnare a velocità perché hai un ottimo sistema di continua distribuzione, ma una volta che introduci controlli di conformità e di politica, ti trovi di fronte a una sfida. Ti fermi e controlli queste cose, o forse acquisisci alcuni risultati da un altro strumento? Improvvisamente, la tua velocità ne risente."
---

<div>
{% include transistor.html id="9eb5fd35" title="#53 DevOps with Speed While Reducing Risk" %}

{% include youtube.html id="url" %}
</div>

---

Le tre aree chiave da equilibrare nella consegna del software sono la velocità, il rischio e la qualità. La maggior parte può gestire una o due di queste cose, ma aggiungere la terza può diventare difficile. Ad esempio, potresti essere in grado di consegnare a una buona velocità perché hai un ottimo sistema di integrazione continua, ma una volta introdotte le verifiche di conformità e di policy, ti trovi di fronte a una sfida. Devi interrompere e controllare queste cose, oppure forse importare alcuni risultati da un altro strumento? Improvvisamente, la tua velocità ne risente.

OpsMx sta lavorando per aiutare le persone a automatizzare quei punti decisionali. L'automazione è la cosa più importante per mantenere l'accelerazione mentre si aumentano gli altri due pilastri, il rischio e la qualità.

## Soluzione OpsMx: consegna software completamente automatizzata

La automazione funziona come aggregazione dati, raccogliendo risultati dalle varie strumenti della catena degli strumenti e poi disponendo di un meccanismo come un gestore di politiche che fornisce risultati attesi sui segni di spunta degli strumenti come BlackDuck. Se sembra corretto, il flusso di lavoro non si interrompe, come avviene attualmente, per un controllo umano.

## La consegna più veloce delle applicazioni aumenta i tassi di fallimento.

La velocità di consegna delle applicazioni è passata da settimanale o mensile a ogni ora, aggiungendo pressione per produrre rapidamente. Quando si cerca di aumentare la velocità, tuttavia, si potrebbe iniziare a perdere un po' del controllo sulla qualità, magari saltando alcuni controlli di rischio. Il risultato netto è che più si cerca di muoversi velocemente, più si è inclini a commettere errori.

## Punti di attrito e spazi problematici

Con un uso strategico dell'automazione, hai la possibilità di aumentare la velocità senza correre rischi. La verifica continua può ridurre un'attività di tre o quattro ore a cinque o dieci secondi. Invece di utilizzare mano d'opera umana per analizzare i registri alla ricerca di comportamenti anomali che potrebbero essersi verificati dopo un controllo binario di passaggio/fallimento, la verifica continua può farlo automaticamente, permettendo alle persone di occuparsi solo dei casi eccezionali.

## Cosa significa automazione in questo contesto?

Il prossimo pezzo utilizza gli strumenti richiesti dal team di sicurezza e conformità, come BlackDuck. Con l'automazione, non è necessario interrompere il flusso di lavoro per far interpretare i risultati a qualcuno prima di continuare, perché ciò avverrà automaticamente.

Gli altri pezzi sono regole ad un livello superiore se sei in un settore regolamentato con più controlli, o qualcosa di semplice come un rivenditore che, ad esempio, non vuole rilasciare nuovi software due settimane prima di Natale. Questi controlli possono essere automatizzati per eliminare la necessità di approvazione umana, permettendo al flusso del processo di continuare se non ci sono eccezioni. L'idea è quella di rimuovere il maggior numero possibile di ostacoli umani per consentire al processo di continuare ininterrottamente.

Il set principale di automazioni di controllo e politiche è riutilizzabile tra i flussi di lavoro; è necessario solo personalizzare o crearne uno per i criteri specifici del tuo ciclo di rilascio.

## Soluzione OpsMx: Consegna software completamente automatizzata.

OpsMx ti dà la possibilità di creare quelle pipeline e le automazioni di analisi dei registri. Spinnaker è lo strumento attuale, ma la visione di OpsMx è essere il più possibile agnostico rispetto a cd, consentendo l'uso di tutti gli strumenti cd come Jenkins e Microsoft Azure. OpsMx sfrutta la parte di cd per l'automazione, ma si posiziona sopra di essa per aiutare a prendere decisioni automatizzate.

Una parte sempre più importante dello strumento è l'apprendimento automatico per aiutare a comprendere qual è il valore di base per una determinata applicazione rispetto a un comportamento anomalo. Vi è inoltre un modello di apprendimento supervisionato in cui un professionista DevOps, un ingegnere o un responsabile del prodotto può specificare il comportamento anomalo come atteso nel contesto dell'applicazione.

Il sistema consente anche l'auditabilità. Ogni modifica o eccezione viene documentata. Esiste un tracciato di audit completo di tutto ciò che accade, dall'autorizzazione di un'eccezione all'implementazione di un artefatto e all'uso di un'immagine di base. Sia che venga eseguito nel cloud che in loco, è possibile visualizzare l'intero flusso di lavoro come un'entità unica.

Un altro aspetto della visibilità fornita da OpsMx è una sorta di mappa di ciò che viene implementato e dove, come ad esempio la serie di microservizi che attualmente si trovano nel QA, ciò che è in determinate fasi o ciò che è in produzione, per poi, per ognuno di questi elementi, poter approfondire e ottenere una visione storica. È possibile fare clic su qualsiasi versione specifica e tutte le informazioni di audit sono immediate a portata di mano.

Inoltre, la prossima frontiera su cui OpsMx sta lavorando è l'efficacia degli artefatti che vengono acquisiti, in modo che la catena di approvvigionamento, o lineage, sia trasparente.

OpsMx sta ora utilizzando una tecnologia basata su agenti che può interagire, ad esempio, con risorse che si trovano dietro il tuo firewall. L'agente agisce come un proxy per il livello di intelligenza in modo che i dati possano essere raccolti lì. Non ci sono preoccupazioni per l'apertura o l'esposizione delle porte del firewall. Funziona allo stesso modo con i fornitori di cloud: l'agente può essere distribuito all'interno della VPC e non è più necessario rischiare di inserire chiavi e segreti in un'applicazione basata su cloud. L'agente agisce semplicemente come un proxy in modo che il pezzo autorizzato rimanga sempre all'interno della VPC, garantendo la sicurezza del modo in cui vengono raccolte le informazioni.

Con questa nuova direzione, l'intera industria DevOps sarà coinvolta in un rimescolamento in termini di sicurezza e auditabilità.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
