---
layout: posts
title: "Dati resilienti nelle comunicazioni disruptive"
number: 136
permalink: episode-EDT136-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 136
tags:
    - sabr
    - ddil
    - technology
    - edge
    - process
    - devops
    - security

date: Mon May 01 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "In questo episodio di podcast, Darren Pulsipher, architetto delle soluzioni principale di Intel per il settore pubblico, viene intervistato dalla conduttrice ospite Dr. Anna Scott sulla resilienza dei dati con le comunicazioni disruptive."
video: "https://youtu.be/XhtXz6hx9AY"
description: "In questo episodio di podcast, Darren Pulsipher, architetto delle soluzioni principale di Intel per il settore pubblico, viene intervistato dalla conduttrice ospite Dr. Anna Scott sulla resilienza dei dati con le comunicazioni disruptive."
---

<div>
{% include transistor.html id="a2a806f7" title="#136 Resilient Data in Disruptive Comms" %}

{% include youtube.html id="XhtXz6hx9AY" %}
</div>

---

In questo episodio del podcast, Darren Pulsipher, chief solution architect del settore pubblico di Intel, viene intervistato dalla conduttrice ospite, la dottoressa Anna Scott, sul tema dei dati resilienti con le comunicazioni disruptive. La discussione si incentra sulla gestione sicura ed efficiente dei dati in ambienti con banda limitata e servizio interrotto, consentendo l'intelligenza artificiale e l'analisi complessa dei dati in periferia. Darren parla della sua esperienza lavorando sul cloud dei veicoli connessi di Toyota come base per risolvere questo problema e di come siano stati utilizzati gli architetti comuni di gestione dei dati per creare una soluzione. La graduale rivelazione delle sfide da parte del cliente ha contribuito a identificare schemi progettuali che hanno aperto l'architettura per una soluzione di successo.

Nonostante la connettività intermittente e i nodi di bordo dinamici, il processo di progettazione dell'architettura per eseguire l'analisi dei dati di bordo è complesso e difficile da esporre, quindi hanno adottato un approccio iterativo. Inizialmente hanno considerato una soluzione che avrebbe portato tutti i dati in un unico luogo per l'analisi, ma hanno riscontrato che risultava impraticabile a causa del volume di dati. Spostare le applicazioni verso il bordo sembrava promettente finché il cliente non ha richiesto l'analisi aggregata su tutto il bordo. Dopo aver esplorato modelli di progettazione, hanno scelto di utilizzare il modello di progettazione a flusso di dati con un hub di pubblicazione e sottoscrizione per creare flussi di dati in modo dinamico per consumatori e produttori. Nonostante questo approccio si basasse su fondamenta consolidate nell'ambito IT, il cliente inizialmente aveva preoccupazioni riguardo all'allocazione degli argomenti.

In passato, Darren doveva creare in anticipo un ecosistema PubSubHub e essere familiare con tutti i suoi componenti. Tuttavia, configurare flussi di dati con Kafka o Apache Pulse era una sfida, e configurare la sicurezza era ancora più difficile. Utilizzando la loro esperienza in DevSecOps per ideare una soluzione che racchiude definizioni di flussi di dati, definizioni di input e output e trasformazioni di dati in un pacchetto consumabile dalla pipeline. Questo pacchetto crea automaticamente flussi di dati in PubSubHub e configura tutte le misure di sicurezza necessarie. Il risultato semplifica la complessità poiché gli sviluppatori devono solo concentrarsi su algoritmi o modelli di intelligenza artificiale, mentre tutto il resto viene gestito in modo generico. L'approccio iterativo con i clienti ha aiutato a modificare architetture e implementazioni lungo il percorso.

La sfida principale con questo tipo di architettura è lavorare con risorse limitate, come ad esempio avere accesso solo a due core e 2 gigabyte di RAM. Quanta elaborazione dei dati può avvenire al limite delle risorse? Uno dei vincoli su cui il team di architettura ha dovuto lavorare riguardava la riduzione al minimo del gestore di flusso SABR e delle misure di sicurezza. Darren ha ridotto il codice al minimo indispensabile ed eliminato pacchetti terzi non necessari. L'obiettivo era creare un gestore di flusso leggero che potesse essere eseguito al limite delle risorse e portabile su diversi ambienti. L'architettura di Saber risultante era scalabile e adattabile, in grado di funzionare sia su un orologio smart che su un grande server Xeon.

Darren e Anna discutono delle difficoltà nell'aggiornare i modelli di intelligenza artificiale in un ecosistema distribuito con numerose istanze delle stesse analisi in esecuzione. Per risolvere questo problema, SABR ha creato uno stream di dati di apprendimento che connette tutte le istanze delle stesse analisi e si occupa di comunicazioni intermittenti, caching e invio dei delta per aggiornare i modelli. Hanno inoltre sviluppato un sistema di canali di dati utilizzando il design pattern di strategia di politica, consentendo l'invio di diversi canali con livelli di dati variabili in base a regole definite dalla politica. Questo approccio permette una trasmissione dei dati più efficiente, riducendo la quantità di dati elaborati e aumentando l'accuratezza dei modelli di intelligenza artificiale.

Il prossimo passo è capire come operare nell'ambiente DDIL dando priorità all'invio di dati inviando prima dei riepiloghi e dati storici prima dei dati in tempo reale. È importante definire le aspettative del sistema e le politiche di comunicazione fin dall'inizio per garantire coerenza nell'ecosistema. Un processo di creazione e attivazione delle politiche semplice da usare, configurato in JSON e basato su JavaScript, che elimina la duplicazione degli sforzi e favorisce il riutilizzo. L'architettura ha la capacità di aggiungere rapidamente nuove funzionalità sfruttando le frecce e le trasformazioni dei dati esistenti.

L'ultimo elemento è la resilienza del sistema nel recuperare dinamicamente dai guasti del sistema. Potenzialità di utilizzo dinamico e flessibile della rete SABR. Anche se un nodo va giù, è possibile spostare un SABR su un'altra macchina e continuare a ricevere tutti i flussi di dati. È anche possibile utilizzare elaborazioni obsolete eseguendo un SABR molto leggero su un vecchio sistema che raccoglie e passa i dati attraverso la rete SABR. Non va sottovalutata l'importanza della sicurezza. Tutti i flussi di dati sono crittografati e vengono impostati processi per stabilire la fiducia e l'attestazione dei SABR al fine di prevenire il falsificare e lo spionaggio dei dati. Complessivamente, la rete SABR offre una soluzione promettente per l'elaborazione dei dati al limite con flessibilità e sicurezza.

La chiave dell'apprendimento è l'approccio architettonico iterativo che il team ha utilizzato per scoprire i casi d'uso e i punti critici che gli utenti finali stavano affrontando. Simulando l'architettura, sono riusciti a individuare le lacune e ottenere un feedback dai clienti. Inoltre, l'utilizzo dei pattern di progettazione è stato fondamentale per accelerare l'approccio architettonico. L'uso dell'astrazione ha inoltre fornito la possibilità di sostituire diverse tecnologie durante il processo architettonico. Darren crede che questo approccio abbia reso facile creare soluzioni facili da usare e sfruttare la conoscenza attuale dei clienti.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
