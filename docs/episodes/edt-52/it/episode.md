---
layout: posts
title: "Telemetria nel Cloud"
number: 52
permalink: episode-EDT52-it
lang: it
nav_exclude: true
nav_order: 52
tags:
    - cloud
    - data_management
    - aws
    - automation
    - multicloud
    - cybersecurity
    - technology
    - process

date: Mon Jun 07 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Intel, parla con Josh Hilliker, Direttore degli Architetti di Soluzioni Cloud presso Intel, sull'utilizzo della telemetria nel cloud per massimizzare valore ed efficienza."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solution Architect, Intel, parla con Josh Hilliker, Direttore degli Architetti di Soluzioni Cloud presso Intel, sull'utilizzo della telemetria nel cloud per massimizzare valore ed efficienza."
---

<div>
{% include transistor.html id="a732fe89" title="#52 Telemetry in the Cloud" %}

{% include youtube.html id="url" %}
</div>

---

## Benefici degli architetti delle soluzioni cloud (CSAs)

Il ruolo di CSA è molto richiesto nell'industria al momento, e Intel ha assunto un team di CSA per offrire valore ai loro clienti. I CSA possono aiutare i clienti ad evitare la mentalità del "lift and shift" che porta a costi eccessivamente alti. Questi nuovi CSA portano una prospettiva esterna e si collegano alla più grande comunità di CSA per risolvere problemi.

## Fasi della telemetria

La telemetria nel cloud non dovrebbe essere relegata al tuo fornitore di servizi cloud. Ad esempio, Amazon Web Services (AWS) ha avuto un'importante interruzione sulla costa orientale lo scorso novembre, e i loro strumenti non stavano segnalando, quindi molti clienti non avevano idea che fossero inattivi. Le organizzazioni hanno bisogno della propria telemetria per il monitoraggio.

La prima fase è la mancanza di monitoraggio nel cloud. La seconda fase è l'esposizione del telecontrollo in cui si comprende quello che si sta ottenendo, ad esempio CPU, memoria e rete, ma è a livello superficiale. La fase successiva è il monitoraggio e l'azione, in cui si ricevono notifiche sugli rallentamenti, i tassi di transazione, i tempi di risposta eccetera. La fase successiva è ancora più a fondo nel sistema in cui il moderno cloud intelligente controlla e prevede per la soluzione di eventuali problemi. Infine c'è l'automazione completa. Questo è dove le cose operano da sole, ascoltando, rispondendo e informando successivamente.

Un esempio di automazione completa sarebbe un centro dati che controlla un sistema HVAC, rilevando e riducendo o aumentando la temperatura in diverse parti di un edificio. Per i carichi di lavoro, un cloud intelligente può spostare i carichi di lavoro in modo da massimizzare il valore in capacità e prestazioni.

## Approcci attuali e limitazioni attuali.

Molte volte, tuttavia, i clienti dei fornitori di servizi cloud relegano l'automazione al livello infrastrutturale e dimenticano il livello del carico di lavoro. I clienti hanno bisogno di informazioni oltre ai soli dati essenziali; hanno bisogno di telemetria approfondita e ricca per sapere cosa sta realmente accadendo. È un errore fare affidamento sul fornitore di servizi cloud per avere i tuoi migliori interessi a cuore riguardo alla telemetria, e questo può manifestarsi in costi elevati.

Alcuni fornitori di servizi cloud si stanno aprendo di più. Attualmente AWS sta rivoluzionando il settore con la telemetria che forniscono. Speriamo che anche gli altri prendano esempio.

## Raccogliamo le Telemetrie Corrette...

Scegliere le istanze corrette è importante. Non tutti i core sono uguali; diversi core vengono utilizzati per scopi diversi ed è importante capire quali sono per ottenere le migliori prestazioni e il miglior prezzo.

Che tipo di informazioni puoi raccogliere? Il design del prodotto di Intel include unità di monitoraggio delle prestazioni (PMU). Queste sono contatori a livello inferiore e forniscono informazioni su transazioni, ritardi, latenza e punti critici. Ci sono tre diverse categorie di PMU: core, off core e uncore. Questi PMU raccolgono informazioni su CPI, utilizzo, frequenza e TMAM. Tutti questi dati sono accessibili tramite AWS.

Utilizzando metriche e telemetria reale, è uno strumento che ti aiuta ad ottimizzare i tuoi carichi di lavoro. Potresti confrontare come il tuo carico di lavoro si sta svolgendo nel tuo centro dati, ad esempio, con AWS in queste istanze, e utilizzare le metriche per scoprire su quale piattaforma i carichi di lavoro dovrebbero atterrare.

## Rilevanza nell'IT

Stratificare la telemetria con il benchmarking è una soluzione definitiva. Con il benchmarking, puoi conoscere il tuo output, e con la telemetria, puoi esaminare il CPI, l'utilizzo e la frequenza, e hai il quadro completo di ciò che sta accadendo. Vuoi fare lo stesso nel cloud, invece di semplicemente caricare i carichi di lavoro su un'istanza apparentemente più economica.

I professionisti dell'IT non dovrebbero temere di perdere il loro lavoro perché le cose si stanno spostando verso il cloud. Invece, dovrebbero trasferire le loro competenze per imparare a utilizzare il rilevamento dei parametri di riferimento anziché avere una mentalità di spostamento semplice e diretto. Diventare competenti nell'utilizzo del cloud implica anche l'uso delle funzionalità native del cloud come Kubernetes e i contenitori. Anche il rilevamento dei parametri di riferimento funziona in queste aree. Con l'advisor C di Intel, è possibile ottenere dati ricchi di telemetria come i dati relativi al core e all'esterno del core dai propri contenitori.

Anche se può sembrare un po' intimidatorio quando si considera tutto ciò che è possibile nel cloud, iniziare con piccoli passi è la scelta migliore. Guarda le applicazioni più adatte in base al rischio. Cataloga le tue app, valuta la suddivisione delle applicazioni per livelli e inizia a spostarle nel cloud in porzioni di dimensioni importanti, raggruppando funzioni e app simili. Mentre esplori nuovi servizi e impari nuove applicazioni, prendi in considerazione l'architettura che sta dietro di esse e poni le domande giuste in modo da diventare un architetto tecnico più informato.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
