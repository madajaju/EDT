---
layout: posts
title: "L'emergere della rete globale di dati"
number: 98
permalink: episode-EDT98-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 98
tags:
    - dataarchitecture
    - datamanagement
    - data
    - technology
    - cloud
    - globaldatanetwork
    - macrometa
    - multicloud
    - datamesh

date: Wed Aug 03 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Chetan Venkatesh

img: thumbnail.jpeg
image: thumbnail.jpeg
summary: "In questo episodio, Darren ripensa con Chetan Venkatesh, CEO di MacroMeta. Venkatesh ha una lunga esperienza nella gestione dei dati sin dai primi giorni del Grid Computing e ha avviato MacroMeta per affrontare la gestione dei dati in tutto il mondo, dalle estremità globalmente disperse ai data center e cloud."
video: "https://youtu.be/url"
description: "In questo episodio, Darren ripensa con Chetan Venkatesh, CEO di MacroMeta. Venkatesh ha una lunga esperienza nella gestione dei dati sin dai primi giorni del Grid Computing e ha avviato MacroMeta per affrontare la gestione dei dati in tutto il mondo, dalle estremità globalmente disperse ai data center e cloud."
---

<div>
{% include transistor.html id="140001aa" title="#98 The Emergence of the Global Data Network" %}

{% include youtube.html id="url" %}
</div>

---

Chetan è un ingegnere trasformato in un esperto operativo e di start-up (Macrometa è la sua quarta start-up). Afferma di aver lavorato sullo stesso problema di gestione dei dati distribuiti e riduzione della latenza per vent'anni.

I dati non sono più presenti solo in un data center, ma ovunque: nel cloud, sul terreno e sui laptop delle persone. Gestire tutto questo in modo efficace è una sfida.

 Circa dieci anni fa, Marc Andreessen disse che il software sta mangiando il mondo. A questo punto, il software ha mangiato tutto e trasformato ogni tipo di vincolo e barriera in opportunità. Il calcolo multithreading è una delle barriere che è caduta con il cloud. È possibile creare applicazioni che girano contemporaneamente in diverse parti del mondo. In parallelo, sta avvenendo un movimento degli sviluppatori per semplificare tutto quanto necessario per la persona media che si occupa di informatica. Quindi, da un lato, c'è una sofisticata evoluzione tecnologica e, dall'altro lato, un movimento di semplicità.

Tradurre in italiano:

Le architetture come Jamstack permettono l'esecuzione di calcoli distribuiti su larga scala con grande semplicità, ma c'è ancora una vasta frontiera da scoprire e conquistare. L'opportunità di uno sfruttamento estensivo del territorio si trova ora all'orlo. La gestione dei dati distribuiti e il concetto di edge (bordo) sono due facce della stessa medaglia.

Un grande problema è che alcune sviluppo software si sta spostando verso la funzione come un servizio che ignora i dati. Inoltre, c'è la percezione che i dati siano ubiqui, ma gran parte del margine non è sempre connesso. Non c'è alcuna garanzia che un'applicazione abbia accesso a tutti i dati. Le reti non sono più centralizzate; l'idea di microservizi senza stato è emersa dal movimento cloud. Questa mancanza di stato può diventare un enorme ostacolo. È per questo che architetture come Jamstack e le funzioni serverless trattano i dati come un problema periferico anziché fondamentale.

Le strutture dati senza stato sono semplici. Hai un luogo specifico in cui archivi i tuoi dati, dopodiché passi nuovamente a uno stato senza stato. Le strutture dati con stato richiedono infrastrutture robuste con strutture dati più complesse poiché supportano l'applicazione durante l'emissione continua dello stato. Man mano che ci muoviamo in un mondo di dati in streaming in tempo reale, in cui lo stato viene costantemente emesso da qualche parte nell'ecosistema, l'infrastruttura diventa complessa e difficile da gestire perché non è progettata in modo adeguato. Ecco dove entra in gioco Macrometa. Hanno creato una nuova piattaforma per questo stato attivo continuo in tempo reale a scala di exabyte.

Affrontare questo flusso di dati in uno stato attivo e dinamico rappresenta un cambiamento significativo per molti sviluppatori di software. Dalle prime infrastrutture cloud, alle piattaforme di big data e ai servizi basati sui dati, l'industria è diventata efficiente nell'ingerire, elaborare ed analizzare dati storici. Ma ora ci troviamo in un mondo in cui i dati sono su un continuum invece di esistere come un monolite. Una qualità recentemente apprezzata è che i dati hanno insight e valore deperibili. Alcuni dati hanno una breve durata. Le scale di tempo attuali sono troppo grandi per utilizzare i dati in modo efficiente; abbiamo bisogno di sistemi che possano comunicare in modo efficiente entro 50 millisecondi e ridurre l'onere cognitivo per le persone che interagiscono con tali sistemi.

La maggior parte delle persone fraintende la latenza: non è qualcosa che ti porta gioia, ma la sua mancanza può renderti infastidito. Ad esempio, per quanto tempo qualcuno può tollerare un video di YouTube con scatti o uno show di Netflix che si carica lentamente? Cinquanta millisecondi per una macchina sono un'eternità. Una macchina può fare un vasto numero di cose in 50 millisecondi, quindi la latenza diventa essenziale, soprattutto quando si considera il valore deperibile dei dati.

Un'altra problematica riguarda ora, a causa del cloud, l'interconnessione e il sistema globale, le startup sono diventate aziende multinazionali, e i dati diventano sensibili alla posizione. Alcuni dati sono regolamentati, alcuni sono dati personali identificabili e non possono essere esfiltrati in determinate giurisdizioni, ecc. Un esempio eccellente di questo problema è rappresentato dal fatto che gli europei non vogliono che i loro dati lascino i loro confini, ma la maggior parte dell'infrastruttura cloud e delle applicazioni è costruita negli Stati Uniti.

Un terzo problema è che i dati si trovano in molti luoghi; ci sono confini tra i sistemi, sia fisici che logici. I dati possono essere essenzialmente statici e rigidi, quindi abbiamo bisogno di un'infrastruttura che permetta ai dati di connettersi e fluire in tempo reale con coerenza e garanzie di ordinamento. Il più importante è che crea fungibilità per essere consumato rapidamente in modi diversi.

Un problema aggiuntivo è che i dati presentano molto rumore e non ha senso trasferire distanze intercontinentali, pagando tariffe di trasferimento, solo per poì eliminarne la maggior parte. I dati perdono valore nel momento in cui arrivano a destinazione. Inoltre, vi è un alto tasso di aggiornamento, quindi i sistemi spesso operano su dati obsoleti.

Abbiamo bisogno di nuovi modi per risolvere questi tipi di problemi di dati distribuiti. Chetan crede che i prossimi dieci anni apparteranno a questa area delle scienze dei dati.

La prima generazione di soluzioni dati distribuite utilizzava la trasformazione operativa. Google Docs ne è un ottimo esempio. Tuttavia, la trasformazione operativa richiede una centralizzazione del controllo, quindi non scala bene. Google ha trovato un modo per scalare, ma questo non si applica al developer medio. Ci sono forse solo cinque aziende al mondo che lo capiscono a quella scala, e gran parte di questa conoscenza è intrappolata in quelle aziende e nella loro tecnologia proprietaria.

Macrometa sta lavorando con la comunità e l'accademia per cercare di creare un nuovo corpo di conoscenza, molto più efficiente rispetto a questi modelli centralizzati in modo completamente distributivo.

Attualmente, esistono infrastrutture disponibili che sono ottime per risolvere problemi storici di tipo sistema di registrazione. Stanno cercando di spostarsi verso dati in tempo reale, ma le loro architetture non sono fondamentalmente pensate per questo. Questi nuovi problemi con dati sensibili al tempo e alla posizione, valore di attuazione, velocità di aggiornamento, gravità dei dati e rumore dei dati richiedono un nuovo modo, una nuova infrastruttura. Chetan chiama questo un sistema di interazione anziché un sistema di registrazione perché i sistemi di interazione sono reti di dati, vicine al punto di origine e consumo dei dati, che poi filtrano e arricchiscono tutti i dati in linea e li instradano verso i destinatari previsti. È una funzione di rete.

Macrometa ha costruito processori di rete che spostano i dati in giro - una rete globale di dati. Si tratta di un sistema API senza server in cui gli sviluppatori consumano semplicemente API per risolvere problemi di dati attivi e operativi in tempo reale. Macrometa è una rete globale di dati nella topologia di un CDM, ma con una piattaforma dati simile a Snowflake che produce strutture dati complesse per gestire valori di dati attivi e operativi in tempo reale.

È possibile integrare strumenti analitici nella rete dati globale e distribuire l'analisi vicino al punto in cui i dati vengono generati o richiesti. Proprio come Amazon ha cambiato radicalmente la distribuzione al dettaglio con un'architettura periferica e algoritmi per mantenere i magazzini locali ottimamente forniti per le spedizioni notturne, Macrometa ha fatto lo stesso per i dati. Stanno avvicinando molto i dati e i calcoli su tali dati e permettendo che avvengano in millisecondi. Questa capacità di creare cicli di informazioni in tempo reale è un potente facilitatore. Ad esempio, i piccoli rivenditori possono utilizzare l'inventario del negozio locale nel loro commercio elettronico senza sovrasottoscriversi per competere con Amazon.

Un ottimo caso d'uso per la piattaforma Macrometa è nella sicurezza informatica. Alcuni clienti stanno eliminando i loro modelli dati centralizzati per sfruttare la latenza inferiore, in modo da poter bloccare le minacce in tempo reale.

La rete dati globale è uno strato di trasformazione tra le tue fonti di dati e i riceventi insieme ai consumatori e ai produttori. È composta da tre componenti tecnologiche. La prima è la trama dei dati globali, che rappresenta lo strato di integrazione per i dati. La seconda è un tessuto di calcolo globale che ti consente di orchestrare dati e logiche aziendali sotto forma di funzioni e contenitori a livello globale. La terza componente è un tessuto globale per la privacy: come proteggere i dati e conformarsi alle diverse normative e regolamentazioni che influiscono sulla trasmissione o sullo stoccaggio dei dati.

La global data mesh è un modo per integrare rapidamente e facilmente i dati provenienti da sistemi diversi attraverso confini, sia fisici che logici. Tutto ciò viene incorporato e fluisce con coerenza e garanzie di ordinamento. Il valore più significativo di questa rete è che rende i dati fungibili e utilizzabili consentendoti di creare API sui dati velocemente. Questo può essere fatto in poche ore rispetto ai mesi solitamente richiesti. La rete globale di dati è progettata per trilioni di eventi al secondo in modo da poter spostare dati su vasta scala al 90 percento di costo inferiore rispetto al cloud.

La struttura informatica globale porta la logica aziendale e l'orchestrazione per spostare l'elaborazione più vicino al punto in cui i tuoi dati si originano o vengono consumati. Questo è il modello anti-cloud. Macrometa sposterà in modo chirurgico e dinamico quei microservizi che devono rispettare le regole dei dati, ad esempio, nei luoghi appropriati per l'esecuzione.

L'ultimo pezzo è la protezione dei dati. Si tratta di un problema complesso e le risposte che abbiamo oggi, ad esempio, aprire un silo separato per quella particolare area geografica al fine di rispettare le specificità ogni volta che viene avviata un'istanza sulla tua app, non sono buone. La piattaforma di Macrometa ha una rete dati che sta già integrando e facendo fluire i tuoi dati attraverso tutti i confini, insieme a funzioni di calcolo e ingestione dei dati senza restrizioni. Ora può creare limiti logici e mettere i dati in specifiche regioni per proteggere i dati. Possono impostare affinità e politiche su come i dati risiedono e vengono replicati in una regione, ad esempio se devono essere anonimizzati quando vengono copiati al di fuori della regione.

La tecnologia di Macrometa consente casi d'uso che sono impossibili da realizzare nel cloud perché le nuvole sono troppo lontane o troppo lente. Macrometa ha costruito l'infrastruttura per risolvere i problemi di dati in tempo reale e trasformarli in opportunità anziché in sfide. Per saperne di più su Macrometa, vai su macrometa.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
