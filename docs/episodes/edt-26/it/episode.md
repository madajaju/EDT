---
layout: posts
title: "Soluzioni dati Multi Cloud con Hammerspace"
number: 26
permalink: episode-EDT26-it
lang: it
nav_exclude: true
nav_order: 26
tags:
    - hammerspace
    - data
    - technology
    - dataarchitecture
    - multicloud
    - compute
    - multihybridcloud
    - datamesh

date: Wed Oct 21 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Johan Ballin

img: thumbnail.png
image: thumbnail.png
summary: "Johan Ballin, Direttore Marketing Tecnico presso Hammerspace, e Darren Pulsipher, Solution Architect Capo, Settore Pubblico, presso Intel, discutono della tecnologia di cloud ibrido di Hammerspace che libera i dati dall'infrastruttura di archiviazione, fornendo portabilità e prestazioni dei dati."
video: "https://youtu.be/url"
description: "Johan Ballin, Direttore Marketing Tecnico presso Hammerspace, e Darren Pulsipher, Solution Architect Capo, Settore Pubblico, presso Intel, discutono della tecnologia di cloud ibrido di Hammerspace che libera i dati dall'infrastruttura di archiviazione, fornendo portabilità e prestazioni dei dati."
---

<div>
{% include transistor.html id="301a5c10" title="#26 Multi Cloud Data Solutions with Hammerspace" %}

{% include youtube.html id="url" %}
</div>

---

L'archiviazione è pronta per la sconvolgimento. Attualmente, la gestione dei dati avviene in modo ingombrante, procedurale e spesso manuale e incline agli errori. Hammerspace è stata fondata per risolvere questo problema astrayendo i dati dall'infrastruttura di archiviazione.

## Immagina per un attimo...

...se i tuoi dati fossero separati dall'infrastruttura di archiviazione. Liberi dai limiti imposti dai sistemi di archiviazione attuali, gli utenti potrebbero gestire e proteggere i propri dati in autonomia, modificare istantaneamente il profilo dei costi e accedere ai dati da qualsiasi punto dell'infrastruttura. L'archiviazione definita dal software potrebbe garantire prestazioni scalabili su richiesta e consentire lo sviluppo di carichi di lavoro moderni come Kubernetes su qualsiasi infrastruttura sottostante, ovunque essa sia.

## La sfida

Le applicazioni sono diventate portatili, ma i dati sono ancora segregati. La sfida consiste nel fatto che le prestazioni, l'affidabilità e la gestibilità ne soffrono tutte a causa del problema della segregazione. La soluzione consiste nel liberare i dati dalle limitazioni dell'infrastruttura sottostante. Hammerspace fa ciò attraverso la disgregazione dei metadati, assimilando le parti costituenti più piccole per rendere i dati portatili.

## Scollegare i dati dallo storage

Con questa tecnologia, le tue app dispongono di dati su richiesta ovunque tu sia. Hai un controllo indipendente, piani di dati e uno spazio dei nomi globale e un sistema di archiviazione che si estende su più centri dati e cloud. Lo storage è orchestrato; i dati sono completamente automatizzati e sfruttano una gestione dei dati autonoma dichiarativa. In altre parole, separa il "come" dal "cosa", dichiarando lo stato finale desiderato senza dover delineare ogni dettaglio su come arrivarci.

## Architettura Hammerspace

Il sistema consente di operare a livello di file in modo granulare, fornisce servizi di dati di classe enterprise come snapshot e cloni, e si sposta facilmente su una scala massiva da un data center all'altro, da un data center al cloud e poi di nuovo dal data center alla dispersione in uno scenario di multi-hybrid cloud.

## L'archiviazione tradizionale non è in grado di superare le sfide moderne.

L'archiviazione legacy non scala in modo sufficiente, neanche con soluzioni di scalabilità orizzontale, su cloud o su scala planetaria, perché anche quei cluster diventano silos, lasciandoti a volte bloccato con dati che non possono essere correlati ed analizzati. L'archiviazione tradizionale ha anche difficoltà a scalare capacità e prestazioni in modo indipendente.

La replica è una tecnologia antica che porta alla proliferazione dei dati copiati. Invece di spostare le più piccole parti costituenti, si sta spostando l'intero carico utile. La gestione dei dati è spesso un dopo-pensiero; la gestione dei dati dovrebbe avere la priorità, non essere una questione secondaria.

Un problema che l'architettura di Hammerspace risolve è trovare facilmente le cose. La gestione delle versioni può portare a grandi problemi aziendali. Ad esempio, sia Airbus che Boeing si sono trovate di fronte a enormi problemi perché alcuni ingegneri non avevano le loro versioni più aggiornate. La soluzione consiste nell'orchestrare i dati.

## Orchestrazione dei dati

Orchestrazione, innanzitutto, è la decuplazione di tutti i diversi silos; i dati vengono trattati come un'unica risorsa. Hammerspace assimila le parti costituenti più piccole, i metadati, per creare, essenzialmente, un sistema di anti-gravità dei dati. Successivamente, implementano obiettivi come durabilità, disponibilità e snapshot, o azioni personalizzate definite tramite script di Hammerspace. Infine, i dati, che siano di tipo Kubernetes, NFS o SMB, diventano portabili e si integrano nel sistema.

Ciò che questo significa in pratica è che non è necessario recarsi in un altro silo per soddisfare un carico di lavoro specifico. I dati vengono consegnati dove desideri. Questa mobilità dei dati è fondamentale perché è in tempo reale; non si tratta di migrazione dei dati, che è perturbante e provoca tempi di inattività.

Per ridurre al minimo i costi di uscita costosi, i dati vengono deduplicati e compressi su base granulare dei file. Invece di spostare un volume fisso completo, è possibile selezionare i dati da trasferire in base a qualsiasi tipo di espressione come cartelle, tag di metadati o un descrittore del cliente. Ciò offre flessibilità e risparmio di costi.

## Architettura spazio di martelli

Nell'architettura Hammerspace, il file system globale ha tre componenti a livello superiore: il file system globale stesso, la presentazione front-end (NFS, CSI Driver e SMB) e Anvil all'interno del file system globale. Anvil è il componente di gestione dei metadati mentre DSX fornisce servizi di gestione dei metadati. Questi possono essere implementati come macchine virtuali, VMware, KBM o Hyper-V. Anvil è configurato a forma di A, quindi ce ne sono almeno due in ogni posizione. DSX può essere parallelizzato per migliorare le prestazioni, quindi è possibile avere un numero di questi in posizioni diverse per garantire prestazioni sufficienti. Possono essere facilmente ridimensionati verso il basso.

Nell'infrastruttura, l'archiviazione sottostante può essere il software defined storage proprietario di Hammerspace con disco direttamente collegato, NAS assimilato, qualsiasi cloud o qualsiasi combinazione. Questo sistema può anche essere scalato in modo orizzontale, in modo da poter aumentare le prestazioni e la capacità in modo indipendente. Seguendo il modello cloud, è anche elastico, quindi nel caso in cui ci siano cambiamenti nell'attività in quella particolare posizione, è possibile ridimensionare sia le prestazioni che la capacità per garantire che le applicazioni abbiano esattamente ciò di cui hanno bisogno in quella posizione. Tutto ciò rende l'architettura molto flessibile per supportare qualsiasi carico di lavoro delle applicazioni sul front end.

Un grande vantaggio di questa architettura flessibile è la capacità di assimilare dati che vengono memorizzati su dispositivi che non sono di tua proprietà, come NAS o nel cloud. Ciò semplifica lo spostamento dei dati. Ad esempio, se possiedi un NAS più vecchio e desideri migrare su un NAS più recente, non importa se sono dello stesso produttore o di produttori diversi. Hammerspace assimila i metadati e sposta i dati in modo del tutto trasparente alle applicazioni perché si tratta di una mobilità dei dati in tempo reale. Un altro significativo vantaggio è che non ci sono tempi di inattività durante lo spostamento dei dati.

Se vuoi provare questa tecnologia, vai su hammerspace.com e inizia con una prova gratuita con una licenza per un massimo di 10 terabyte messa in esercizio su Azure, AWS o Google Cloud.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
