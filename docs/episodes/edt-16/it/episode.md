---
layout: posts
title: "Ridurre la congestione di ingestione con Intel Optane DCPMM"
number: 16
permalink: episode-EDT16-it
lang: it
nav_exclude: true
nav_order: 16
tags:
    - datamanagement
    - analytics
    - multicloud
    - process
    - technology

date: 2020-08-25T00:00:00.000Z
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "In questo episodio, Darren parla della diminuzione della congestione dell'ingestione utilizzando la memoria persistente Optane DC di Intel e dell'esperimento da lui condotto con risultati sorprendenti. Potrebbe cambiare il modo in cui pensiamo alla programmazione in futuro."
video: "https://youtu.be/url"
description: "In questo episodio, Darren parla della diminuzione della congestione dell'ingestione utilizzando la memoria persistente Optane DC di Intel e dell'esperimento da lui condotto con risultati sorprendenti. Potrebbe cambiare il modo in cui pensiamo alla programmazione in futuro."
---

<div>
{% include transistor.html id="7ca179aa" title="#16 Decreasing Ingestion Congestion with Intel Optane DCPMM" %}

{% include youtube.html id="url" %}
</div>

---

## Dettagli sullo stack di servizi

Un cliente nel settore automobilistico stava avendo difficoltà nel riuscire ad ottenere in modo efficace informazioni dalle proprie auto e trasferirle nel loro data center in modo da poter effettuare apprendimento automatico e analisi dati. In questa area è stata condotta una ricerca, ma solo per un numero limitato di auto, non per i cento milioni di auto del cliente. Quando ho esaminato l'intera struttura del loro servizio e come tutto arrivava al data center, è emerso che l'ingestione dei dati era il problema principale: come posso assimilare così tanti dati e come posso farlo velocemente?

## Panoramica dell'architettura Kafka a livello superiore.

Il cliente voleva utilizzare Kafka per l'ingestione dei dati. Kafka è un intermediario che può scalare bene e la sua caratteristica principale è quella di poter gestire diversi produttori, consumatori differenti e una grande quantità di dati. Utilizzare diversi intermediari Kafka per posizionare e inviare dati nei luoghi più appropriati offre una grande flessibilità.

Kafka, tuttavia, è stato principalmente progettato per dimensioni dei messaggi di circa uno a 10 kilobytes e i dati del cliente erano di circa 240 kilobytes per automobile. Ci sono soluzioni alternative, ma volevo portare l'intero messaggio di 240 kilobytes nel bus di Kafka in modo da poterlo spostare come necessario.

## Pratiche ottimali per le performance

Ho analizzato le migliori pratiche di performance di coloro che lavorano con Kafka per vedere se potevo adattarle alle esigenze del mio cliente. Aumentare la dimensione del buffer per ospitare l'intero messaggio è una soluzione di fine-tuning, insieme alla gestione delle dimensioni dei batch per prestazioni ottimali. Un'altra pratica di successo è distribuire i log. La flessibilità di Kafka mi consentirebbe di inserire i dati in diversi argomenti. Posso suddividere gli argomenti in diverse partizioni che posso distribuire su più unità. La domanda è, dunque, su quante unità sto distribuendo i log di Kafka? Inoltre, desidero le unità più veloci possibili.

Un esempio che ho esaminato è LinkedIn. I numeri pubblicati da loro di un anno fa indicano che possono gestire 13 milioni di messaggi al secondo, o 2,7 gigabyte al secondo. Dicono di avere circa 1.100 broker Kafka e più di 60 su un cluster, quindi si tratta di una configurazione abbastanza grande.

## Spazio automobilistico

Se guardo i numeri grezzi del cliente (1,6 milioni di messaggi al secondo e 800 gigabyte al secondo) e li confronto con LinkedIn, che probabilmente non è ottimizzato per 240 kilobyte, ottengo 44.000 broker. Se lo ottimizzassi, potrei probabilmente ridurli a 4.400 broker, che sono ancora 240 cluster. È un enorme quantità di macchine, quindi ho dovuto trovare un modo per rendere le cose più veloci. Con ulteriori ottimizzazioni, potrei probabilmente ridurlo a 400-500 broker, ma volevo vedere cos'altro potevo fare.

## Intel Optane DC Persistent Memory: 
Memoria persistente Intel Optane DC

Ho esaminato la nostra memoria persistente Optane. Si adatta al formato DDR4, quindi si posiziona direttamente sul bus DDR4. Arriva fino a moduli da 512 gigabyte, quindi in un server a due socket posso avere sei terabyte di memoria persistente. Volevo trovare un modo per sfruttare questa tecnologia altamente affidabile con ottime funzionalità come la crittografia hardware integrata per aiutarmi a risolvere questo problema.

## Supporto per la Variazione di Applicazioni

Ci sono due modalità di funzionamento con questa Memoria Optane: modalità app diretta e modalità memoria. La modalità memoria è semplice. Utilizza la memoria persistente come una normale RAM perché è più economica rispetto alla normale DDR4. Non è esattamente la stessa cosa della DDR4, ma è abbastanza simile al punto che nella maggior parte delle applicazioni non si nota alcuna differenza. Nella modalità app diretta, è possibile scrivere direttamente dalla tua applicazione nella memoria persistente. In questo modo, non è necessario convertire e decodificare le strutture dati e trasmetterle come flusso; posso semplicemente inserirle nella memoria persistente. Posso anche montare la modalità app diretta come un sistema di file, in modo che sia sul bus di memoria, molto più veloce rispetto al bus di I/O. Ora, cosa posso fare con questa memoria?

## Utilizzando il kernel Linux

Ci sono due strumenti principali disponibili utilizzando il kernel Linux: ndctl e ipmctl. Ndctl è un controller per dispositivi di memoria non volatile, mentre c'è anche IPM, il controller di memoria persistente Intel, che mi permette di manipolare e controllare questa memoria persistente. Posso configurarla in modalità memoria o modalità app diretta. Ho dovuto imparare un po' su questi strumenti e come funzionano.

## Approccio di ingestione

Il mio primo pensiero è stato che se avessi dato a Kafka molta più memoria con dimensioni di buffer grandi, avrebbe dovuto funzionare molto più velocemente. I cambiamenti del codice nella configurazione sarebbero stati superflui o minimi. Un'altra opzione era cambiare Kafka in modo da scrivere sulla memoria persistente anziché sul file system, aggirando l'hard disk. L'ultima cosa che ho esaminato è stata la creazione di un file system persistente utilizzando la memoria persistente e quindi mettendo i log di Kafka su questo nuovo file system.

La opzione più semplice tra le tre era la prima: più memoria. Ho eseguito tutti i miei compiti con più memoria e non c'è stata alcuna variazione delle prestazioni. I motivi sono che alla fine i miei buffer si sono riempiti e ho dovuto trasferire i dati su un'unità esterna. Alla fine tutto doveva passare per i log di Kafka, che erano il mio collo di bottiglia.

La seconda opzione prevede la riscrittura del codice e l'attesa delle approvazioni, quindi sono passato alla terza opzione. I risultati di questo esperimento, in cui ho indirizzato i log a questo nuovo file system ultra veloce, sono stati affascinanti. Diamo uno sguardo al processo e ai risultati.

## Test dei vincoli

Per eliminare gli ostacoli alla valutazione delle prestazioni, ho escluso il network dall'equazione facendo girare il mio test sulla stessa macchina su cui era presente il mio broker. Inoltre, ho eseguito solo i produttori, poi solo i consumatori, e infine una combinazione dei due, in modo da poter valutare le differenze. Il mio obiettivo non era quello di valutare il miglioramento totale della produzione, ma di analizzare singolarmente il broker per capire se questo drive avrebbe davvero fatto la differenza.

## Primo Approccio 50/50

La prima cosa che ho fatto è stata prendere la metà della mia memoria persistente in modalità diretta dell'app e trasformarla in un sistema di file. Ho lasciato l'altra metà come memoria. Ho utilizzato i comandi ndctl e ipmctl e creato spazi di nomi. Ho montato questi sistemi di file e ho eseguito il mio test.

## Cambiare la dimensione del messaggio

Ho eseguito i test su diverse dimensioni di messaggio. Mi aspettavo alcune ottimizzazioni, soprattutto per 1 kilobyte. Ho notato che ottenivo prestazioni sempre migliori fino a circa 10 produttori. Oltre i 10 produttori, ho iniziato a saturare il bus e ho ottenuto qualche variabilità. Questo mi indica che stavo memorizzando le cose nella cache. Ora potrei confrontare questi numeri con quelli ottenuti precedentemente con un solo disco SATA per i registri Kafka. Ho provato anche i nostri dischi Optane NVMe per i registri.

## Confronto tecnologico

Diamo un'occhiata alle differenze. Per 240 kilobyte, con un normale disco SATA, è piuttosto piatto. Ho ottenuto un certo miglioramento, e poi è diminuito man mano che il numero di produttori aumentava. Con il disco Optane NVMe, ho ottenuto un bel picco, quasi due volte più veloce di un disco SATA, il che è quello che mi aspettavo dato che è un bus NVMe invece di un bus SATA. Il Pmem è quasi cinque volte più veloce di un disco SATA e due volte e mezzo più veloce del disco Optane NVMe. Questo perché sto usando un bus di memoria invece del bus SATA o NVMe.

## Ottimizzazione aggiuntiva (100% diretto all'app)

Questo stava funzionando velocemente e stavo rapidamente riempiendo questo disco temporaneo da 750 GB. Siccome avevo bisogno di far durare il test un po' più a lungo, sono tornato indietro e ho riconfigurato la mia macchina per eseguire una modalità di applicazione diretta al 100 percento in modo da poter ora prendere l'intero terabyte e mezzo (1.5 terabyte).

## Ottimizzato PMEM e App Direct al 100%.

Dopo aver fatto ciò e aver eseguito gli stessi test, ho ottenuto un risultato sorprendente. Ho potuto aggiungere più produttori e la mia capacità di trasmissione è aumentata di quasi altre due o tre volte. Ora è tra 12 e 15 volte più veloce di un disco SATA con 25-30 produttori e una dimensione dei messaggi di 240 kilobyte. Questo è incredibile e ridurrebbe notevolmente la necessità dei miei clienti di utilizzare così tanti broker, righe e righe di macchine. Ho eseguito il test diverse volte perché non credevo ai risultati che stavo ottenendo. Ho chiamato uno dei nostri architetti che ha progettato questa tecnologia e ho appreso che una delle ragioni per l'aumento della velocità è che, quando usavo parte della memoria persistente come memoria, i dati dovevano passare attraverso due o tre salti non necessari con l'app direct mode. Ciò crea meno contesa sul bus di memoria e la capacità di trasmissione è aumentata in modo significativo.

## Chiamata all'azione

Il risultato finale è che sono stato in grado di utilizzare Kafka con Optane DC Persistent Memory come un sistema di file ultra-veloce per ottenere notevoli miglioramenti nella velocità di throughput sia per i produttori che per i consumatori. Un singolo broker può gestire fino a 15 volte più messaggi e throughput rispetto a prima, diminuendo il numero di server necessari per gestire architetture di sistemi grandi e complesse. È ora di valutare la tua attuale architettura e vedere se questo potrebbe beneficiare la tua organizzazione.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
