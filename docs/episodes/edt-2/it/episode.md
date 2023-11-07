---
layout: posts
title: "Segui il Bit"
number: 2
permalink: episode-EDT2-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 2
tags:
    - iot
    - dod
    - edge
    - technology
    - data
    - cybersecurity

date: Wed Jun 17 2020 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "In questo episodio, Darren intervista Greg Clifton, Direttore del Dipartimento della Difesa (DOD) e dell'Intelligence per Intel Corp. Discutono delle sfide della gestione dei dati in un sistema complesso che si estende su più cloud, centri dati aziendali, centri dati regionali e frontiere tattiche. Ascolta Darren e Greg seguire un po' di dati dalla loro raccolta e il loro percorso attraverso questo ecosistema fino alla produzione di informazioni utilizzabili per analisti e combattenti. Ascolta Darren e Greg discutere di alcuni ostacoli in questo grande ambiente circolare e soluzioni per aiutare a fornire informazioni utilizzabili agli analisti e nuovamente ai combattenti."
video: "https://youtu.be/N6WTErcBjrM"
description: "In questo episodio, Darren intervista Greg Clifton, Direttore del Dipartimento della Difesa (DOD) e dell'Intelligence per Intel Corp. Discutono delle sfide della gestione dei dati in un sistema complesso che si estende su più cloud, centri dati aziendali, centri dati regionali e frontiere tattiche. Ascolta Darren e Greg seguire un po' di dati dalla loro raccolta e il loro percorso attraverso questo ecosistema fino alla produzione di informazioni utilizzabili per analisti e combattenti. Ascolta Darren e Greg discutere di alcuni ostacoli in questo grande ambiente circolare e soluzioni per aiutare a fornire informazioni utilizzabili agli analisti e nuovamente ai combattenti."
---

<div>
{% include transistor.html id="caf42ad5" title="#2 Follow the Bit" %}

{% include youtube.html id="N6WTErcBjrM" %}
</div>

---

## Internet delle cose è l'inizio

L'implementazione diffusa dell'Internet delle cose (IoT) sta richiedendo più tempo del previsto dall'industria. Molti attribuiscono i ritardi all'adozione e alla diffusione del 5G in tutto il mondo, ma c'è anche un altro problema che ha rallentato la realizzazione di sistemi IoT robusti: la gestione della complessità. Con il movimento dei dati attraverso il sistema, dall'edge all'aggregated edge, alla rete, al data center e al cloud, la protezione dei dati rappresenta una grande preoccupazione poiché la superficie di attacco aumenta quando si sposta al di fuori del tradizionale data center. Ci sono soluzioni puntuali che aiutano a migliorare questi problemi, ma non c'è ancora un'architettura di soluzione completa che risolva tutti i problemi con questo data center senza muri.

## Complessità dell'ambiente del Dipartimento della Difesa

L'IoT è già complesso e il DOD aumenta la complessità a causa dei tipi di produttori e consumatori dei dati. Sul lato dei produttori, i sensori sono collegati a satelliti, aeromobili, navi e veicoli; persino i combattenti stessi sono fondamentalmente centri dati in movimento. La quantità di dati che questi dispositivi periferici producono può sovraccaricare una rete. Il numero di dispositivi eterogenei può sembrare quasi impossibile da gestire, specialmente quando i dispositivi comunicano con protocolli diversi e hanno diversi livelli di classificazione. In altre parole, raccogliere i dati non è il problema; il problema è farli arrivare rapidamente nelle mani di coloro che prendono le decisioni in un formato utile.

Inoltre, la connettività può essere problematica con i dispositivi di bordo. Ambienti ostili in cui la connettività di rete verso un centro dati è inesistente, o al massimo intermittente, possono ritardare i dati. Questo significa che una soluzione in questo settore deve funzionare sia in modalità connessa che disconnessa. La velocità di consegna è un fattore chiave di successo; vite possono essere in gioco se le decisioni basate sui dati vengono ritardate.

## Quadro comune per applicazioni, dati e sicurezza.

Ovviamente, abbiamo bisogno di soluzioni a questi problemi. Di importanza primaria è un quadro comune per gestire la complessità di queste nuove architetture IT che si trovano al di fuori dei tradizionali confini dei data center. Il quadro deve affrontare la gestione delle applicazioni, dei dati e della sicurezza. Dobbiamo essere in grado di distribuire applicazioni portatili e riutilizzabili ovunque nel sistema, dal bordo al cloud: la dottrina del "scrivi una volta, esegui ovunque". Questo ci consente di sviluppare, testare e distribuire rapidamente applicazioni senza dover configurare tutte le possibili combinazioni di configurazioni hardware nell'ecosistema. L'utilizzo di strumenti nell'ecosistema dei container dovrebbe aiutare in questo senso. Gli strumenti basati su Kubernetes (K8s) sono una buona scelta poiché sono diventati lo standard de facto nella community di DevOps.

Gestire le applicazioni in isolamento, tuttavia, non è sufficiente. Tutte le applicazioni necessitano di dati in qualche modo, quindi capire dove si trovano i dati, dove vanno e come vengono classificati è fondamentale per soluzioni di successo. Abbiamo bisogno di un ambiente operativo comune per gestire e governare le diverse classi di dati, come domini, confini di sicurezza, governance, gestione del ciclo di vita dei dati e località dei dati. Un ambiente operativo comune aumenta la flessibilità e la velocità di distribuzione delle applicazioni.

Un quadro comune di sicurezza è anche necessario. La domanda critica è come proteggere i dati in tutte le loro forme e ancora condividerli? Ci sono soluzioni hardware e software attuali e una continua evoluzione in questo campo. Soluzioni di sicurezza di base come la crittografia dovrebbero essere fondamentali. Naturalmente, ciò richiede il motore sottostante corretto per lo storage e la capacità. Un'altra preoccupazione è l'ingresso di dati errati o nefasti nel sistema. Stabilire una radice di fiducia come base è anche necessario in questo vasto ecosistema.

## Elaborazione al bordo, centro dati e cloud

Dove entra in gioco Intel in questo ambiente? Possiamo aiutare a fornire l'infrastruttura sottostante che supporta questi sistemi in termini di prestazioni e potenza. Che tu stia elaborando informazioni dei sensori sul bordo in un ambiente a basso consumo energetico (pensa a Atom e design ASIC personalizzati), o stai effettuando addestramento o inferenza di intelligenza artificiale nel tuo centro dati (Xeon e calcolo neuromorfico), Intel ha un processore che può aiutare a convertire i dati grezzi in informazioni preziose e azionabili, il componente chiave in questo complesso ambiente orientato alla missione.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
