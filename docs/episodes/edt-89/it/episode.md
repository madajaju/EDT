---
layout: posts
title: "Futuro della memoria di grandi dimensioni e CXL"
number: 89
permalink: episode-EDT89-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 89
tags:
    - bigmemory
    - memverge
    - optane
    - technology
    - data
    - compute
    - pmem
    - cxl
    - ceo

date: Wed Jun 01 2022 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Charles Fan

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Chief Solutions Architect di Intel, parla con Charles Fan, CEO di MemVerge, riguardo a come la rivoluzione di CXL e il software di MemVerge rappresentino il futuro della memoria enorme."
video: "https://youtu.be/1TUCZjI4yns"
description: "Darren Pulsipher, Chief Solutions Architect di Intel, parla con Charles Fan, CEO di MemVerge, riguardo a come la rivoluzione di CXL e il software di MemVerge rappresentino il futuro della memoria enorme."
---

<div>
{% include transistor.html id="536490f3" title="#89 Future of Big Memory and CXL" %}

{% include youtube.html id="1TUCZjI4yns" %}
</div>

---

Uno sviluppo entusiasmante nella memoria è CXL (Compute Express Link). Un ecosistema robusto è in fase di sviluppo dal lato host, con Intel e altri che supportano CXL 1.1 nelle loro piattaforme di prossima generazione, come Sapphire Rapids. Coloro che operano sul lato della memoria, inclusa la quarta generazione di Intel Optane, saranno su CXL. Intel è uno dei membri guida di un forte consorzio CXL che ha promosso lo standard. CLX 2.0 è già stato definito, con capacità aggiuntive, tra cui l'esternalizzazione e il commutamento di CXL, e il 3.0 è in fase di sviluppo, il quale standardizzerà come CXL può essere fornito e condiviso.

Ci saranno nuovi prodotti in arrivo da Samsung, Micron e SK-Hynix con capacità CXL. Inoltre, ci sono nuovi interconnettori che stanno venendo sviluppati e che potenzialmente possono collegare la memoria con il tessuto, in modo da avere una memoria abilitata per il tessuto che può essere condivisa tra più server.

La tecnologia CXL è un cambio di gioco. Un nuovo protocollo di memoria funziona sulla standard PCIe generazione cinque e successive. Poiché consente di mettere la memoria su PCIe, non solo può essere all'interno della scatola, ma in futuro, con l'interruttore PCIe, la memoria sulla tessitura diventerà componibile e condivisibile. Il primo prodotto CXL sarà disponibile entro la fine dell'anno.

MemVerge ha già un controller di memoria definito dal software, e CXL ha aperto un mondo completamente nuovo per il software. CXL è per la memoria quello che il canale a fibra è per lo storage. È come una rete di area di memoria anziché una rete di archiviazione. È possibile accedere direttamente alla memoria con CXL e bypassare completamente la CPU.

CXL sarà molto più veloce rispetto alle precedenti tecnologie di interconnessione. Avrà una latenza di 100 o 200 nanosecondi. Qui è dove aumentano l'utilizzo, la gestibilità e l'agilità. Ci sarà una maggiore disponibilità e produttività nell'uso della memoria. Inoltre, sarà possibile allocare memoria in modo dinamico; potrai allocare secondo necessità, e non è necessario che si adatti alla scatola del server. Teoricamente, avrai sempre abbastanza memoria per qualsiasi attività tu debba svolgere.

Con la tecnologia di snapshot di MemVerge, i tuoi dati sono protetti e persistenti allo stesso modo. Ciò diventa ancor più importante man mano che la memoria diventa più grande. Se la perdi, diventa più difficile ricostruirla.

Per far decollare il CXL, tre cose devono essere in atto. Sul fronte hardware, i leader dell'hardware più vecchio devono essere a bordo ed abbracciare gli stessi standard. Questo è accaduto l'anno scorso, quindi c'è uno standard unico che tutti supportano. In secondo luogo, non è necessario modificare la propria applicazione per utilizzare il CXL, proprio come le reti di archiviazione. In terzo luogo, dal punto di vista del database, non si dovrebbe dover riscrivere nulla. Ciò può avvenire tra ciò che gli standard forniscono, ciò che il sistema operativo supporta e il software MemVerge che può effettuare un'auto-tiering tra la memoria DDR e la memoria CXL.

MemVerge può offrire quel livello di astrazione. È essenzialmente una virtualizzazione della memoria. La memoria definita dal software gestisce l'effettivo posizionamento della memoria fisica.

MemVerge rende la grande memoria trasparente all'applicazione in modo che i programmatori possano sfruttare una capacità superiore e non rimanere mai senza memoria. Successivamente, c'è la protezione dei dati. MemVerge ha sviluppato un servizio di snapshot in memoria che può catturare l'intero stato di un'applicazione in memoria, e tale stato è immutabile. Può essere ripristinato in qualsiasi momento, ovunque. Ci sono molti casi d'uso con questo, come la mitigazione del ransomware e la diminuzione dei tempi di ciclo nella ricerca genomica.

La funzione di snapshot non è solo utile perché consente di catturare in modo rapido e facile una pipeline in esecuzione, consentendo di tornare indietro e recuperare in qualsiasi momento, ma può anche aiutare a risparmiare denaro quando si utilizzano servizi cloud. I principali fornitori di servizi offrono istanze spot che hanno uno sconto dal prezzo richiesto del 70-90%, ma c'è un'importante condizione: possono riprenderselo in qualsiasi momento con un preavviso di soli 30 secondi o due minuti. Questo non è un tempo sufficiente per risolvere il problema, soprattutto se ci sono molti dati in memoria, quindi non è stato utile per molti carichi di lavoro. Con la capacità di snapshot di MemVerge, è possibile fare snapshot periodici del carico di lavoro in esecuzione su qualsiasi istanza. Se l'istanza spot viene rimossa, si ha un'immagine di backup da recuperare e continuare l'esecuzione. È un'assicurazione che consente di utilizzare il servizio a basso costo con protezione.

Dal momento che stai facendo una copia di non solo un'applicazione ma dell'intero contenitore o istanza, puoi riattivarla ovunque, on-premises, nella stessa piattaforma cloud o in un'altra cloud. Ciò ti offre la massima mobilità e resilienza nelle tue operazioni, anche nel caso di un'interruzione del servizio cloud principale. Questa tecnologia offre molte possibilità interessanti.

La rivoluzione CXL e il software MemVerge Memory Machine sono potenti combinazioni per possibilità che cambiano il gioco.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
