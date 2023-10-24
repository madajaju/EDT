---
layout: posts
title: "Distruggere la complessità dei livelli di archiviazione"
number: 20
permalink: episode-EDT20-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 20
tags:
    - data
    - optane
    - technology
    - storage
    - vastdata

date: Tue Sep 08 2020 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Randy Hayes

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Randy Hayes di VAST Data e Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, discutono dell'innovativa architettura di storage di VAST Data che elimina la necessità di livelli utilizzando NVMe over Fabrics, QLC Flash e 3D XPoint Optane."
video: "https://youtu.be/ZU6BDo0cFac"
description: "Randy Hayes di VAST Data e Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, discutono dell'innovativa architettura di storage di VAST Data che elimina la necessità di livelli utilizzando NVMe over Fabrics, QLC Flash e 3D XPoint Optane."
---

<div>
{% include transistor.html id="a3a3329f" title="#20 Destroying the Complexity of Storage Tiers" %}

{% include youtube.html id="ZU6BDo0cFac" %}
</div>

---

## Trent'anni di complessità di archiviazione

L'archiviazione potrebbe essere un concetto vecchio, ma VAST Data è diventata una startup di successo in poco più di un anno di vendite. VAST ha sostituito la vecchia architettura dei sistemi di archiviazione a più livelli con un unico sistema monolitico che è veloce ed economico. Le soluzioni VAST eliminano anche il problema dei grossi e disordinati sistemi di archiviazione composti da diversi sistemi di file e diverse architetture.

## Una Fondazione per una Nuova Architettura

Il fondatore di VAST stava analizzando lo storage da una prospettiva totalmente nuova. Ha scoperto che i clienti non avevano necessariamente bisogno di prestazioni superiori dal Flash, ma avevano bisogno di supporto per lo storage di file e oggetti a un costo inferiore. Ha sfruttato tre tecnologie che non esistevano prima del 2018. La prima è NVMe over Fabrics, che viene utilizzato come una sorta di SAN ad iperscala per collegare tutto insieme con bassa latenza. Successivamente c'è il QLC Flash, perché è economico e non ha parti in movimento come gli hard disk. La terza è l'Intel 3D XPoint Optane. Optane ha una parità di lettura-scrittura ed è molto resistente ad un prezzo ragionevole. Unendo queste tre tecnologie, VAST è in grado di offrire ai clienti prestazioni all-flash, ma a un prezzo paragonabile a quello di un hard disk. Elimina la necessità di altri livelli che le organizzazioni acquistano perché sono economici.

## Presentiamo il Vast Data Universal Storage

Il sistema VAST è la prima architettura scomposta e condivisa. Ciò significa che la logica è scomposta dallo stato del file system. Invece, lo stato del file system risiede in casse di dati che contengono QLC Flash e Optane. L'Optane viene utilizzato come un grande archivio di metadati. È multiuso, proprio come il sistema, che è marchiato come storage universale. Con queste casse, non c'è un singolo punto di errore, quindi la capacità è, teoricamente, illimitata. (VAST ha testato il sistema a circa 50 petabyte in un singolo file system.) Puoi aumentare la capacità semplicemente aggiungendo server x86 a basso costo ai cluster. Poiché si tratta di un file system parallelo, qualsiasi utente può accedere a qualsiasi parte dei dati da uno qualsiasi dei server come se fosse direttamente collegato, quindi puoi continuare a scalare.

Puoi anche aumentare le prestazioni indipendentemente dalla capacità. L'unica cosa che inibirebbe le prestazioni del flash è il processore, quindi avendo la possibilità di aumentare senza soluzione di continuità il numero di CPU nel cluster, puoi migliorare le prestazioni.

Uno dei problemi che viene risolto con questa struttura è la latenza. Molte organizzazioni necessitano di una bassa latenza per tutti i loro dati. Poiché ciascuno di questi server privi di stato ha accesso a tutto, si ha un accesso rapido a tutti i dati.

## DASE Architettura: Pool di server

Un altro grande vantaggio è che è facile ottimizzare lo spazio di archiviazione di un'organizzazione. La natura componibile dei server senza stato, e l'assenza di comunicazione tra di essi, ti dà la possibilità di costruire un cluster che si adatti meglio alle tue esigenze. Ad esempio, puoi segmentare le tue casse di controllo in base a diverse carichi di lavoro, ma possono tutti accedere agli stessi dati.

Inoltre, il sistema funziona bene con un'organizzazione che ha bisogno di diversi livelli di classificazione per accedere ai dati. Hai la possibilità di segregare ciò a cui gli utenti hanno accesso creando più zone di accesso con indirizzi IP virtuali. Una delle sfide con NFS è che trasmette in pratica a tutto. Se limiti le trasmissioni a un sottoinsieme di indirizzi IP, ti dà la possibilità di suddividere quelle diverse architetture in sistemi distinti.

## Applicazione Eras di Universal Storage Bridges

Questa non è solo una soluzione ideata per i cluster HPC; non è costosa. Molte aziende utilizzano VAST prima per il backup per stabilire la fiducia. Ad esempio, il National Cancer Institute ha un archivio di librerie a nastro e voleva essere in grado di accedere alle informazioni più velocemente. Hanno valutato diverse piattaforme e VAST è risultato più conveniente e dotato di un sistema All-Flash, più veloce del loro sistema di produzione NAS. Quindi la soluzione ha un buon rapporto qualità-prezzo ed è utile per la condivisione generale dei file e una varietà di carichi di lavoro, come l'IA, l'analisi dei log, Splunk, ecc., non solo per l'HPC. Le soluzioni VAST sono semplici da gestire e veramente universali.

VAST è una giovane azienda, ma ha diverse installazioni in agenzie governative come l'Istituto Nazionale della Salute e i Tri-labs del Dipartimento dell'Energia, dove è necessario un alto livello di prestazioni per questi supercomputer. Si tratta di un potente sistema in alcuni dei più grandi ambienti HPC al mondo, che supporta applicazioni mission-critical.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
