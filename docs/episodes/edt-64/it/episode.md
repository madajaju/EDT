---
layout: posts
title: "Segui e proteggi il margine di Bit verso il cloud"
number: 64
permalink: episode-EDT64-it
lang: it
nav_exclude: true
nav_order: 64
tags:
    - edge
    - compute
    - multicloud
    - cybersecurity

date: Wed Sep 01 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Greg Clifton
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect di Intel, discute in seguito alla puntata n. 2 con Greg Clifton, Director del Dipartimento della Difesa e dell'Intelligence di Intel, insieme a Steve Orrin, CTO per il settore federale di Intel, che mette a disposizione la sua competenza sulla sicurezza nei complessi ambienti di edge to cloud."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solution Architect di Intel, discute in seguito alla puntata n. 2 con Greg Clifton, Director del Dipartimento della Difesa e dell'Intelligence di Intel, insieme a Steve Orrin, CTO per il settore federale di Intel, che mette a disposizione la sua competenza sulla sicurezza nei complessi ambienti di edge to cloud."
---

<div>
{% include transistor.html id="24225e6c" title="#64 Follow and Secure the Bit Edge to Cloud" %}

{% include youtube.html id="url" %}
</div>

---

Nell'episodio n°2, Greg ha spiegato le complesse questioni relative alla raccolta, al trasferimento e all'analisi dei dati in un ambiente del Dipartimento della Difesa (DOD) che include dispositivi periferici su navi, aerei e persino combattenti e la necessità di trasferire e analizzare tali dati rapidamente per decisioni tempestive ed esaustive. Il ruolo di Intel è quello di aiutare a ridurre i cicli di processo e liberare i colli di bottiglia nel flusso di dati con il proprio portafoglio tecnologico. Si tratta di abbinare la tecnologia alla missione.

Un recente trend in architettura consiste nel spostare il calcolo, l'elaborazione e l'intelligenza in avanti per incontrare i dati, piuttosto che spostare i dati verso la parte posteriore. Questa modifica offre la migliore capacità per ottenere risposte in tempo reale e intelligenza. Questo approccio rappresenta un diverso modello operativo con domande stimolanti.

## Hardware eterogeneo

Nell'infrastruttura fondamentale, come fornite le capacità di calcolo, archiviazione, memoria e rete necessarie per guidare l'analisi al bordo e il processo dove ne avete bisogno? Come gestite queste applicazioni e i dati ad esse associati? Come introducete la qualità e la cura dei dati in modo più completo lungo la catena di fornitura? La sicurezza è un componente fondamentale di qualsiasi infrastruttura e ora i dati devono essere protetti fino al bordo.

L'industria deve passare a un calcolo più eterogeneo, in modo che il software sottostante possa funzionare su diverse piattaforme hardware, evitando di rimanere vincolati a un software o hardware specifico. Parte della bellezza di ciò che Intel ha fatto negli anni è fornire la portabilità del software: la struttura aperta, x86 e altri sistemi sottostanti.

Un fattore importante nello sviluppo delle capacità da parte di Intel è comprendere il carico di lavoro e il flusso dei dati, anziché concentrarsi sulla modernizzazione, come ad esempio spostare le cose nel cloud. Non si tratta di come si procure l'IT (nel cloud o in loco), ma di ottimizzare il flusso aziendale per trarre vantaggio dal modo in cui i dati si muovono e da ciò che realmente fanno.

## DevOps al Salvataggio

Un altro aspetto critico di queste nuove soluzioni è il tempo di distribuzione. Il DevOps è diventato sempre più importante in tutto il DOD, e gli sforzi per sviluppare piattaforme comuni di DevOps sono aumentati notevolmente. Per scrivere il codice una volta e farlo funzionare ovunque (cloud, in loco o al margine), le organizzazioni utilizzano il chipset x86 e l'oneAPI di Intel per distribuire servizi complessi in tutto l'ecosistema completo. Ad esempio, oneAPI consente agli sviluppatori di scrivere analisi complesse o lavori di intelligenza artificiale che vengono eseguiti su una GPU, una CPU o anche su FPGA con la stessa base di codice. Gli sviluppatori possono quindi testare questi sistemi complessi nel loro data center, assicurandosi che si comportino allo stesso modo quando vengono distribuiti sul campo, riducendo il tempo di distribuzione.

Essere in grado di sfruttare una combinazione di un ambiente DevOps flessibile, che utilizza la containerizzazione e i framework software come oneAPI, offre ai programmatori l'astrazione di cui hanno bisogno ma con ottimizzazioni hardware/software incorporate. Una distinzione fondamentale qui è che abbiamo trovato un modo per sfruttare tutta la potenza dell'hardware e ottimizzare il software in modo che un'applicazione possa ancora ottenere un miglioramento delle prestazioni e sfruttare l'hardware specializzato.

L'ecosistema di container fornisce un'astrazione a livello di sistema, quindi le cose non hanno bisogno di essere codificate duramente. Fornisce la capacità di aumentare o diminuire la scala in base al carico e alla capacità del servizio. Ad esempio, se una funzionalità viene eseguita sul margine, in un data center portatile o nuovamente nel cloud, e si perde la connettività o un asset, è comunque possibile portare a termine la missione. Questa connettività intermittente è essenziale in un ambiente DOD.

## Soluzioni Edge

Molte persone pensano a Intel come a un fornitore di silicio o hardware, ma l'azienda ha sviluppato soluzioni e architetture di riferimento nell'ecosistema dal bordo al cloud. Un esempio di progresso è una griglia tattica navale in cui l'elaborazione avviene sul bordo, su navi, aerei e a terra. Le applicazioni devono essere eseguite in tutto l'ecosistema e ciò non può essere fatto solo con l'hardware. Intel ha sfruttato il suo silicio e le sue funzionalità di sicurezza e, basandosi su un ecosistema di container, ha prodotto applicazioni complesse con diversi microservizi che possono essere eseguiti quando gli asset sono connessi o disconnessi.

Un altro esempio di architetture di bordo è il tracciamento degli oggetti attraverso reti di sensori, anche con spazi vuoti nella rete di sensori. Effettuando la fusione dei sensori, la fusione dei dati e l'analisi cross-dominio, è possibile tracciare gli oggetti attraverso diverse scene e diversi tipi di sensori, adattandosi per creare una piattaforma di sensori mobile che può eseguire analisi e fusione dei dati al bordo. Successivamente, può anche passare a un insieme distribuito di nodi che possono lavorare in modo coordinato per tracciare un oggetto attraverso tutti quei diversi sensori esistenti.

Ad esempio, se stai tracciando un oggetto e si sposta tra i sensori, lo perderai per un attimo. Ciò che questa intelligenza ti consente di fare è collegare questi due flussi e tracciare gli angoli morti. Questo non funziona solo con tipi di sensori omogenei, ma può funzionare anche con diversi tipi di sensori come movimento, RF e sensori IR. Quindi, se perdi il video ma hai ancora un segnale RF e poi riprendi di nuovo il video, puoi mostrare l'intero percorso dell'oggetto. In passato, per questo tipo di analisi era necessario trasferire i dati al centro dati per elaborare queste interazioni complesse; ora, possiamo farlo direttamente sul bordo della rete di sensori tramite microservizi.

## Flessibilità di distribuzione

Un approccio vantaggioso è costruire una volta e utilizzare la stessa architettura e software per diverse missioni con requisiti analitici. Alcuni luoghi in cui il calcolo ad alta intensità è al margine possono aumentare la scala e sfruttare appieno le capacità hardware. Altre piattaforme possono avere capacità di calcolo limitate e possono eseguire microservizi più piccoli che forniscono solo una parte della soluzione completa. Nuove capacità e servizi di missione possono essere rapidamente implementati costruendo questi microservizi una volta per più casi d'uso.

## Sicurezza al limite

La complessità è a volte il peggior nemico della sicurezza, ma i principi fondamentali della sicurezza possono anche proteggere i dati e le applicazioni esterne. Invece di adottare l'approccio tradizionale di proteggere il server e sperare che tutto rimanga lì, è essenziale capire dove fluiscono i dati e ogni luogo in cui esistono, proteggendoli indipendentemente da ciò su cui sono in esecuzione. I modelli basati sul rischio e concetti come il "zero trust" hanno guadagnato consensi perché offrono una prospettiva indipendente dai sistemi sulla sicurezza.

Semplificando, zero trust significa negare automaticamente. Nessuno può accedere se non ne ha bisogno, e solo per il periodo necessario all'azione. Quando i controlli di accesso temporaneo si uniscono a un approccio basato sul rischio per proteggere i dati durante tutto il loro ciclo di vita, il risultato è la capacità di proteggere i dati ovunque siano e chiunque li stia accedendo. Questa tecnica è uno dei modi per garantire la sicurezza di questi ambienti altamente complessi.

L'azione pratica da intraprendere in questi ecosistemi è applicare una politica che sfrutti i controlli che soddisfano il rischio di un determinato sistema in un determinato momento, e poi monitorarli e aggiornarli continuamente in tempo reale per far fronte al mondo dei cyber-attacchi in continua evoluzione. Utilizzare i controlli tecnici che l'hardware e le capacità del software già forniscono, come Secure Boot, radice di fiducia hardware con moduli TPM o chiavi di archiviazione SGX, crittografia, ecc.

Non esiste una soluzione miracolosa che si possa acquistare per fornire una soluzione di sicurezza completa in questi ecosistemi complessi. Si tratta di creare e applicare politiche di sicurezza man mano che le minacce si evolvono e di implementarle su larga scala, sfruttando hardware, software e processi necessari per proteggere il flusso dei dati dalla periferia fino all'intero ecosistema.

Il framework DevOps fornisce meccanismi efficaci per gestire la sicurezza su tutti gli asset nell'ecosistema. I contenitori dovrebbero essere popolati con strumentazione per applicare i controlli e le politiche di sicurezza. La sicurezza deve essere incorporata nel processo DevOps stesso, perché se si affida al programmatore l'implementazione della sicurezza, ognuno la farà in modo leggermente diverso, aumentando la complessità e la variabilità nel sistema. Il programmatore deve avere le capacità e i vincoli su cui deve sviluppare.

Gli sviluppatori dovranno comunque svolgere il lavoro di sicurezza, come assicurarsi di utilizzare strumenti di sicurezza adatti all'ambiente minaccioso specifico, ma il peso maggiore, la complessità, dovrebbe essere astratto nell'architettura DevOps.

Una delle aree critiche in un ambiente teatrale complesso è la gestione dei dispositivi periferici, come il monitoraggio e l'aggiornamento del firmware. Garantire la sicurezza di tali dispositivi al fine di poter supportare la sicurezza dei dati e i profili e le politiche implementate nei sistemi su larga scala richiederà innovazione. Ecco perché attualmente l'ecosistema sta crescendo molto: per affrontare tale sfida.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
