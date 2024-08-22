---
layout: posts
title: "Grande Memoria Controller di Memoria Definita dal Software"
number: 21
permalink: episode-EDT21-it
lang: it
nav_exclude: true
nav_order: 21
tags:
    - datamanagement
    - memverge
    - dataanalytics
    - technology
    - process
    - people

date: 2020-09-14T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Charles Fan

img: thumbnail.png
image: thumbnail.png
summary: "Charles Fan, CEO di MemVerge, parla con Darren Pulsipher, Chief Solutions Architect, Settore Pubblico, Intel, sulla loro nuova tecnologia, i controller di memoria software-defined Big Memory. La tecnologia utilizza la memoria persistente Intel 3D XPoint Optane per colmare efficientemente il divario tra le architetture attuali e future, offrendo una capacità maggiore, costi più bassi e persistenza."
video: "https://youtu.be/url"
description: "Charles Fan, CEO di MemVerge, parla con Darren Pulsipher, Chief Solutions Architect, Settore Pubblico, Intel, sulla loro nuova tecnologia, i controller di memoria software-defined Big Memory. La tecnologia utilizza la memoria persistente Intel 3D XPoint Optane per colmare efficientemente il divario tra le architetture attuali e future, offrendo una capacità maggiore, costi più bassi e persistenza."
---

<div>
{% include transistor.html id="0458954e" title="#21 Big Memory Software Defined Memory Controller" %}

{% include youtube.html id="url" %}
</div>

---

La tecnologia di memoria persistente Optane 3D XPoint di Intel è stata una rivoluzione per MemVerge, consentendo loro di sviluppare una memoria definita dal software, che descrivono come esprimere la potenza di Optane PMEM.

## Il modo migliore per utilizzare la PMEM

MemVerge ha sviluppato il software Big Memory per soddisfare una crescente domanda da parte di applicazioni e aziende di elaborare dati a un volume e velocità sempre più elevati. Le applicazioni in tempo reale necessitano di insight e azioni immediate dai dati. Ciò richiede un'infrastruttura centrata sulla memoria per soddisfare le esigenze di latenza.

Le applicazioni che impiegano l'intelligenza artificiale, il machine learning o l'analisi dei dati in tempo reale su grandi quantità di dati, ad esempio, di solito utilizzano la DRAM. Anche se la DRAM ha una latenza di nanosecondo e offre capacità e prestazioni notevoli, ha limitazioni fisiche come la densità di memoria e la quantità che è possibile inserire in un server. È anche relativamente costosa. Più importante ancora, è volatile e, man mano che i dati diventano più grandi, la volatilità della memoria diventa un vincolo. PMEM rimuove questi vincoli perché consente di avere una capacità maggiore, costi inferiori e persistenza.

Un importante vantaggio è che le aziende non hanno bisogno di riscrivere le loro applicazioni per utilizzare la tecnologia di MemVerge. L'azienda stava cercando il modo migliore per utilizzare la persistenza e la risposta è stata quella di offrire la minor interruzione ai paradigmi di programmazione. Quando Optane PMEM è diventato disponibile come formato di memoria, è stata un'opportunità per sviluppare software prezioso come parte della soluzione.

## Memoria definita dal software.

C'è una trasformazione dei dati in corso. Dal punto di vista hardware, nei prossimi dieci anni ci sarà probabilmente un mondo più eterogeneo, sia nei calcoli che negli elementi di memoria. Emargerà una nuova tessitura, come CXL, che collega questi elementi. La sfida più grande sarà far muovere l'ecosistema delle applicazioni. È necessario uno strato software per elaborarlo in parti consumabili e componibili che facilitino l'assimilazione dell'applicazione. La memoria definita dal software di MemVerge sarà un componente importante in questo ambito.

Nel frattempo, MemVerge sta costruendo un ponte tra i paradigmi attuali e futuri. La Memoria definita dal software di MemVerge porta SLA dinamiche e QLS, resilienza, persistenza delle applicazioni, efficienza e prestazioni. Queste sono tutte cose che normalmente si ottengono con una rete di archiviazione definita dal software, ma ora si possono ottenere con la memoria con una latenza inferiore e una velocità altissima.

## Prestazioni sulla Memory Machine

Due importanti proprietà intellettuali di MEMVerge sono in gioco. La prima è un livello di virtualizzazione software che ottimizza le prestazioni della memoria - la combinazione di PMEM e DRAM - che è molto vicina alle prestazioni della DRAM. Ogni carico di lavoro ha profili prestazionali diversi che possono essere ottimizzati mescolando PMEM e DRAM a diverse proporzioni. Questa ottimizzazione della PMEM e DRAM offre agli sviluppatori di applicazioni e ai professionisti IT la capacità di regolare la memoria per le loro applicazioni anziché per l'intera macchina. Invece di configurare le proporzioni esistenti di DRAM e PMEM per l'intera macchina, ora è possibile cambiare dinamicamente le proporzioni di PMEM e DRAM in base al carico di lavoro, e persino superare le prestazioni della DRAM.

## ZeroIO Snapshot (Persisting Application Data) in Italian is:

ZeroIO Snapshot (Conservazione dei dati dell'applicazione)

Il secondo di questi inventi è rappresentato dai "memory snapshots" o ZeroIO. Esso consente di persistere le applicazioni transienti esistenti senza necessità di riscrivere il codice. Funziona in cima alla memoria definita dal software, che è un servizio di memoria volatile. Nonostante la PMEM sottostante sia persistente, la memoria volatile è necessaria per evitare di compromettere le applicazioni esistenti. La persistenza viene sfruttata attraverso l'offerta di un'interfaccia grafica (GUI) e CI (interfaccia a linea di comando) per la gestione degli snapshot. È possibile creare uno snapshot per catturare istantaneamente lo stato di un'intera applicazione. Quindi, tale applicazione può essere recuperata in qualsiasi momento futuro.

Questo rende la tua memoria non solo persistente, ma anche altamente disponibile. Dopo un crash, puoi fare un ripristino istantaneo. Se fai un errore nel database, puoi tornare indietro a un punto precedente. Puoi anche clonare oltre al punto di ripristino, quindi puoi creare nuove istanze di un'applicazione senza replicare fisicamente la memoria. Puoi quindi creare più processi indipendenti e gli spazi di memoria logica si mappano sullo stesso spazio di memoria fisica. Questo non solo risparmia memoria, ma rende anche istantaneo il processo di creazione di cloni. Questa nuova tecnologia rende possibili molte cose che prima erano impossibili.

Non ci sono modifiche architettoniche al tuo programma, ma quando hai bisogno di persistere qualcosa, puoi semplicemente fare una snapshot. Questo non cambia il modello familiare di programmazione, ma accelera notevolmente l'I/O. Un'altra grande caratteristica è che le snapshot diventano oggetti gestibili, quindi sono trasportabili ovunque tu possa riavviare l'applicazione. La migrazione in tempo reale può essere abilitata anche in determinati scenari.

## Casi d'uso abilitati per il futuro

Per uno sguardo furtivo al futuro, MemVerge sta pianificando una versione 2.0 tra circa un anno, che avrà un SDK. Oltre a utilizzarlo come uno strato di memoria trasparente, i nuovi sviluppatori di applicazioni avranno un nuovo modo di persistere i loro dati. Questo renderà lo sviluppo di applicazioni, così come la modifica delle applicazioni esistenti, più semplice.

Con l'SDK gli sviluppatori saranno in grado di catturare istantanee di segmenti della memoria dell'applicazione o dell'intero profilo di memoria, offrendo all'applicazione stessa la possibilità di memorizzare la memoria in modo persistente tramite le complesse tecnologie ORM o di mappatura di memoria attuali.

In collaborazione con Intel, MemVerge lancerà la prima versione del loro prodotto con la memoria definita dal software e le capacità di snapshot per la disponibilità generale il 23 settembre 2020.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
