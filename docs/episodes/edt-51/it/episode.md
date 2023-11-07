---
layout: posts
title: "Casi d'uso pratici per l'utilizzo della memoria persistente Optane"
number: 51
permalink: episode-EDT51-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 51
tags:
    - dataarchitecture
    - memverge
    - pmem
    - optane
    - technology
    - data

date: Wed Jun 02 2021 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Chief Solution Architect di Intel, parla con Charles Fan, CEO di MemVerge, dei casi di utilizzo del loro software che sfrutta in modo innovativo la memoria persistente Optane di Intel, rimuovendo il collo di bottiglia tra memoria e storage."
video: "https://youtu.be/nTy8yXORkOw"
description: "Darren Pulsipher, Chief Solution Architect di Intel, parla con Charles Fan, CEO di MemVerge, dei casi di utilizzo del loro software che sfrutta in modo innovativo la memoria persistente Optane di Intel, rimuovendo il collo di bottiglia tra memoria e storage."
---

<div>
{% include transistor.html id="442f5ddb" title="#51 Practical Optane Persistent Memory Use Cases" %}

{% include youtube.html id="nTy8yXORkOw" %}
</div>

---

MemVerge ha spedito la prima versione del loro software nel settembre 2020 e, nonostante la pandemia, che ha rallentato l'educazione dei clienti sulla nuova tecnologia, è emerso un buon modello di casi d'uso.

## Riduzione dei costi per i fornitori di servizi cloud.

La metrica chiave per un operatore di servizi cloud è quante macchine virtuali riescono a fornire ai propri clienti e a quale costo. La dimensione della memoria sui server diventa il punto di restrizione su quante macchine virtuali possono allocare per server, limitando quanto basso possa scendere il loro costo per macchina virtuale.

Il software MemVerge con Optane fornisce una quantità maggiore di memoria per server, allocando un numero maggiore di VM, riducendo così il costo per VM e aumentando la competitività dei fornitori di servizi cloud. Il costo per VM potrebbe essere tre volte più economico.

## Affidabilità con grandi basi di dati di memoria.

I clienti finanziari come le borse, le banche e i fondi comuni utilizzano molti database in memoria e applicazioni in-memory. Oltre ad aumentare la memoria in modo da poter avere più istanze per server, MemVerge risolve anche i problemi di disponibilità dei database in memoria. Se i dati non vengono continuamente salvati su storage, ma rimangono solo in memoria, tutti i dati intraday vengono persi in caso di crash. Questo è catastrofico. Anche se hai registrato tutte le transazioni, devi riprodurre il log per recuperare il database, il che richiede molti minuti o addirittura ore per il recupero.

MemVerge offre un nuovo servizio dati che dispone di snapshot in memoria. Persiste lo stato del database su Optane, che è molto più veloce rispetto alla persistenza su supporto di memorizzazione. In caso di un crash, avrai l'ultima immagine istantanea catturata sulla memoria persistente e potrai recuperare da quella. Il ripristino richiede solo uno o due minuti, quindi si tratta di un miglioramento del 60 al 100 volte.

## Riduzione del sequenziamento genomico attraverso istantanee di memoria

Nell'ambito della genomica, il software MemVerge in combinazione con Optane aumenta la produttività in modo esponenziale. In un flusso di lavoro multistadio di analisi dei dati, una memoria più ampia significa una maggiore parallelismo del processo e del pipeline, rendendo l'intero processo più veloce. In questo caso, lo snapshot è anche molto utile. Se un'organizzazione sta svolgendo, ad esempio, ricerche sul cancro o sul COVID, e ha bisogno di effettuare sequenze di DNA o RNA, è necessario passare attraverso circa 50 fasi di elaborazione. Ogni fase potrebbe richiedere ore e devono prendere un checkpoint dello stato dei risultati intermedi della computazione per diverse ragioni: prima, ripetere o riprodurre i risultati e, seconda, confrontare i risultati se vengono modificati alcuni dati. I checkpoint vengono salvati nello storage e questo richiede da cinque a 30 minuti. In molti casi, questo può richiedere più tempo rispetto al calcolo effettivo. Quindi, se un lavoro richiede 24 ore, potrebbero impiegare otto ore per il calcolo e 16 ore solo per eseguire questi processi di IO salvando gli stati intermedi.

Invece di eseguire IO, MemVerge utilizza un'istantanea dopo ogni fase e la registra nella memoria persistente Optane. Invece di 16 ore di IO, questo processo può richiedere un minuto. È il nuovo modo di fare IO; non è necessario eseguire la serializzazione o la deserializzazione per aprire un file, leggere, scrivere, ecc. Tutto ciò che devi fare è fare un'istantanea.

Anche se ciò richiede molta memoria, con MemVerge la memoria è più ampia rispetto a prima e continuerà a migliorare man mano che Intel innova. Due altre funzionalità aiutano con questo problema. In primo luogo, vengono effettuati snapshot periodicamente senza creare copie complete dello stato della memoria; sono solo le pagine di modifiche, quindi l'uso aggiuntivo di memoria viene minimizzato. In secondo luogo, MemVerge può conservare fino a 256 livelli di snapshot in memoria, ma allo stesso tempo puoi esportare questi snapshot dalla memoria a server di archiviazione o ai tuoi sistemi di archiviazione. Ciò avviene senza interrompere o influire sull'applicazione in esecuzione.

Fondamentalmente, stai creando un DVR di memoria perché invece di eseguire solo la tua applicazione in avanti, puoi anche eseguirla all'indietro quasi istantaneamente. È una nuova esperienza.

La genomica è solo il primo esempio di molti carichi di lavoro che potrebbero trarre vantaggio da questa tecnologia.

Poiché MemVerge è una startup, si sta concentrando strettamente su tre settori: fornitori di servizi cloud, applicazioni finanziarie con memoria di grandi dimensioni, genomica e lavori correlati di data science pipeline, ma tutti questi casi d'uso dimostrano il potere della combinazione di memoria persistente Optane e software MemVerge.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
