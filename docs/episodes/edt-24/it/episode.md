---
layout: posts
title: "Strategia digitale e architettura dei dati"
number: 24
permalink: episode-EDT24-it
has_children: false
lang: it
nav_exclude: true
parent: Episódios
grand_parent: Italiano
nav_order: 24
tags:
    - data
    - dataarchitecture
    - aiops
    - secops
    - devsecops
    - devops
    - compute
    - technology
    - process

date: Tue Oct 06 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect, Settore Pubblico, Intel delinea la strategia digitale e l'architettura per trasformare efficacemente la tua organizzazione. Spiega come gli elementi organizzativi, procedurali e tecnologici debbano essere bilanciati per lavorare in modo efficiente verso un'architettura comune ed ideale per supportare una visione unificata."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solutions Architect, Settore Pubblico, Intel delinea la strategia digitale e l'architettura per trasformare efficacemente la tua organizzazione. Spiega come gli elementi organizzativi, procedurali e tecnologici debbano essere bilanciati per lavorare in modo efficiente verso un'architettura comune ed ideale per supportare una visione unificata."
---

<div>
{% include transistor.html id="0f3c3117" title="#24 Digital Strategy and Data Architecture" %}

{% include youtube.html id="url" %}
</div>

---

Avere un piano per la trasformazione digitale della tua organizzazione è essenziale per evitare di perdersi nel labirinto dell'adozione indiscriminata delle più recenti e innovative tecnologie e processi. Questa strategia improvvisata farà sì che la tua trasformazione digitale naufraghi. Un piano, o una roadmap, che delinei il percorso dalla situazione attuale della tua organizzazione a quella desiderata, è la parte più importante di una trasformazione efficace.

I tre elementi chiave che devono essere coordinati e bilanciati nel tuo piano sono organizzativi, procedurali e tecnologici.

## Divisioni organizzative

Per comprendere il cambiamento organizzativo, analizziamo innanzitutto i gruppi comuni presenti nella maggior parte delle organizzazioni.

## Sviluppo

Questo gruppo è il tuo team diurno; stanno sviluppando nuovi prodotti. I processi del team di sviluppo sono ben conosciuti e maturi. Si concentrano sul lavoro di sviluppo, testing e spingere il prodotto in produzione. Quasi ogni team utilizza qualche tipo di tecnica Agile o di iterazione rapida.

## Translate the following to Italian: IT

Traduci quanto segue in italiano: IT

L'obiettivo del team IT è ottimizzare l'infrastruttura in termini di costo ed efficienza. Si assicurano che l'infrastruttura sia affidabile e abbia controlli di sicurezza integrati. Principalmente, si focalizzano sul calcolo, lo stoccaggio, la rete, la conformità e il costo.

## Sicurezza

Il ruolo della sicurezza è diventato sempre più importante negli ultimi anni, ancor di più recentemente con i dipendenti che lavorano da casa a causa del COVID-19. Il team di sicurezza si concentra principalmente sulla protezione della proprietà intellettuale, dei dati e delle infrastrutture. Gli strumenti comuni sono la gestione delle identità, la protezione, il rilevamento e la risoluzione dei problemi. Comprendere come funzionano questi strumenti a un livello più elevato è importante per il cambiamento organizzativo.

## Data can be translated to Italian as "Data".

Questo nuovo gruppo, che in precedenza poteva essere uno statistico o un matematico che faceva del data mining, sta prendendo piede con l'avvento di chief data officers e delle organizzazioni che si costruiscono attorno a loro. Si concentrano sull'analisi, la categorizzazione e la consegna di un valore reale dai tuoi dati. Che la tua organizzazione sia nel settore manifatturiero o dei servizi, o che tu stia cercando di acquisire nuovi clienti o risparmiare denaro, ci sono molte aree in cui i data scientist possono fornire valore.

## Portare insieme i gruppi

Per apportare un efficace cambiamento digitale, tutti questi gruppi devono avere una comprensione reciproca di ciò che ciascuno porta sul tavolo e una visione unificata. Non si desidera che i vostri scienziati dei dati esplorino dati che non hanno valore per lo sviluppo o l'IT. Non si desidera che il team di sicurezza blocchi tutto così sicuro che il team di sviluppo non possa completare il proprio lavoro. Tra i gruppi, devono esserci strategie, processi e architetture comuni.

Anche se gli obiettivi comuni e i risultati sono l'ideale, ci sono ostacoli da superare. Una delle aree più difficili nel cambiamento organizzativo è la rottura della comunicazione ai confini. Alcune organizzazioni hanno creato nuovi gruppi per attenuare i conflitti tra i vari gruppi. Ad esempio, tra sicurezza e IT, potrebbe esserci un team di Sec Ops o Sec Dev Ops dove si automatizzano le politiche e le procedure che emergono dal team di sicurezza. Un altro esempio potrebbe essere un team di Data Dev, che sono sviluppatori che lavorano con gli scienziati dei dati per fornire processi più ripetibili attraverso lo sviluppo di applicazioni o l'integrazione di strumenti e applicazioni. Architetture comuni e set di strumenti comuni su cui tutti i gruppi possono fare affidamento rendono il processo e i cambiamenti molto più facili.

## Il sistema perfetto

Come sarebbe un'architettura comune? Una versione utopica non esiste oggi, ma possiamo osservare gli elementi e forse costruire qualcosa verso questo ideale.

L'auto-servizio è indispensabile. Ad esempio, se un data scientist ha bisogno di più spazio di archiviazione per i dati, non dovrà chiamare il reparto IT e compilare una serie di moduli, ma potrà utilizzare invece un pratico portale di auto-servizio che fornirà lo spazio di archiviazione richiesto, risparmiando tempo. Naturalmente, il portale sarà gestito secondo le politiche aziendali, in modo che il team di sicurezza possa stare tranquillo, sapendo che i dati confidenziali inseriti dallo scienziato saranno crittografati e che il controllo degli accessi sarà automatico.

Un'altra caratteristica ideale sarebbe che il sistema sia auto-riparante e basato sui dati. Se le macchine venissero infettate, ad esempio, verrebbero automaticamente messe in quarantena e i carichi di lavoro verrebbero migrati in un'altra area nel data center o nel cloud pubblico. Ancora una volta, l'IT dovrebbe stabilire le politiche e monitorare i processi, ma il sistema sarebbe per lo più automatico. Il sistema non dovrebbe essere solo automatico, ma anche intelligente, imparando dall'esperienza e diventando sempre più efficiente.

Possiamo ottenere alcuni elementi di questo sistema utopico oggi con prodotti pronti all'uso integrandoli e convincendo tutti ad utilizzarli. Analizziamo cosa desidererebbe ciascuna organizzazione da questa architettura.

## Architettura IT (Multi-Hybrid Cloud)

IT è responsabile dell'infrastruttura di base e delle informazioni sui dati all'interno dell'organizzazione. Se l'IT potesse stabilire una base solida come una roccia, tutti gli altri potrebbero costruire sopra di essa. L'IT ha bisogno di passare a una soluzione di cloud multi-ibrido in modo che l'infrastruttura possa essere facilmente orchestrata secondo necessità, con flessibilità basata sulle politiche. C'è sempre un compromesso tra costo e affidabilità, ma hai delle opzioni. Uno strato di infrastruttura definito dal software consente facilmente l'orchestrazione di calcolo, archiviazione, rete, sicurezza e ora anche nuovi elementi come memoria e acceleratori. La fondazione multi-ibrido di cloud è un aspetto chiave della tua architettura comune.

## Architettura della sicurezza

Il team di sicurezza aggiungerà a questo sistema e lo renderà il più automatizzato possibile. Il primo sarebbe l'aspetto dell'identità. Questo significa che non solo puoi identificare gli utenti, ma anche l'infrastruttura, le applicazioni e i servizi in modo che tutto abbia un'identità. Queste identità possono essere legate a autorizzazioni specifiche e accessi per assicurarsi che tutto sia autenticato. Dal lato della sicurezza, si desidera crittografia e rimedio quando ci sono problemi. Idealmente, si potrebbe stabilire una radice di fiducia in modo che tutto nell'ecosistema, sia nelle applicazioni e nei servizi, sia fino ai firmware e al BIOS nelle macchine, sia fidato.

## Architettura dello sviluppo

I developer potrebbero preoccuparsi del fatto che tutto questo processo possa rallentare lo sviluppo, quindi è necessario che avvenga in modo pressoché automatico. La maggior parte dei developer ora si concentra su componenti riutilizzabili che possono essere testate in modo da garantirne la sicurezza. Fanno ciò attraverso ecosistemi su contenitori come Kubernetes, Docker o Mesos. La sicurezza può essere integrata nel ciclo di sviluppo nella fase di distribuzione prima di passare con successo alla produzione. Sopra al livello di servizio c'è un livello di applicazione in cui i developer possono sfruttare i flussi di lavoro. Questi flussi di lavoro possono essere flussi di lavoro di sviluppo come CI/CD o flussi di lavoro aziendali attraverso strumenti di automazione come l'automazione dei processi robotizzati. Avere sia il livello di servizio che il livello di applicazione sono elementi chiave in questa architettura utopica.

## Architettura dei dati

Con dati sparsi su diversi ecosistemi, cloud pubblici e persino in periferia, abbiamo bisogno di un modo migliore per gestire i dati per gli scienziati dei dati e i sviluppatori di applicazioni. Estrarre i dati dallo storage è uno degli elementi importanti qui. Con questa struttura, puoi orchestrare i dati su tutta l'ampia infrastruttura e collegare quei dati solo alle applicazioni e ai servizi dove sono necessari. I dati potrebbero essere astratti per atterrare sull'infrastruttura nel posto migliore durante quel periodo di tempo, che sia in periferia, nel data center o elaborato in diversi luoghi per le repliche dell'applicazione. La sicurezza sarebbe necessaria per proteggere i dati, poiché i dati sono il motivo dell'infrastruttura in primo luogo. Alcune start-up sono ora in questo settore, per prendere il controllo del livello di gestione dei dati.

Questa architettura utopica, con la sua miriade di componenti in movimento, viene chiamata architettura Edgemere. Stiamo cercando di capire come tutte queste parti si combinano per aiutare le organizzazioni ad accelerare la loro trasformazione digitale. Abbiamo bisogno di capire cosa ogni organizzazione ha bisogno, quali sono i loro casi d'uso e quali sono le somiglianze tra i gruppi per creare un'architettura in cui l'intera organizzazione possa lavorare.

Il compito della vostra organizzazione è rompere le barriere tra i gruppi, sviluppare una visione comune di dove desiderate essere dal punto di vista organizzativo, procedurale ed architettonico e sviluppare una roadmap su come raggiungerlo.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
