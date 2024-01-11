---
layout: posts
title: "Elastic Search e Intel Optane DCPMM"
number: 17
permalink: episode-EDT17-it
has_children: false
lang: it
nav_exclude: true
parent: Episódios
grand_parent: Italiano
nav_order: 17
tags:

date: Sun Aug 30 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher mostra come ha aumentato le prestazioni di Elasticsearch utilizzando la memoria persistente Optane di Intel in modalità 100% app direct. I suoi test mostrano un incredibile aumento delle prestazioni del 2x. Raddoppiando la capacità di throughput, è possibile ridurre notevolmente il numero di server nel cluster Elasticsearch."
video: "https://youtu.be/url"
description: "Darren Pulsipher mostra come ha aumentato le prestazioni di Elasticsearch utilizzando la memoria persistente Optane di Intel in modalità 100% app direct. I suoi test mostrano un incredibile aumento delle prestazioni del 2x. Raddoppiando la capacità di throughput, è possibile ridurre notevolmente il numero di server nel cluster Elasticsearch."
---

<div>
{% include transistor.html id="77870513" title="#17 Elastic Search & Intel Optane DCPMM" %}

{% include youtube.html id="url" %}
</div>

---

Di recente, ho effettuato alcuni test con la nuova tecnologia di Intel chiamata Optane DC Persistent Memory (PMEM) con Kafka. Utilizzando Optane in modo non tradizionale, montato come un sistema di file, sono riuscito a ottenere un notevole miglioramento nella velocità di trasferimento dei dati. Dai un'occhiata al mio podcast su questo argomento qui. (puoi mettere un link qui?). Ho provato la stessa cosa con Elasticsearch per vedere se potevo ottenere un miglioramento simile delle prestazioni.

Elasticsearch è un motore di ricerca e analisi altamente scalabile che consente di distribuire i dati su più nodi per espandere la soluzione e supportare quantità di dati più consistenti. In altre parole, è un gestore distribuito dei metadati, utilizzato principalmente per l'analisi dei log. Elastic stesso è un ottimo strumento per normalizzare i dati nel formato JSON. Posso inviare qualsiasi tipo di dati in Elastic e posso estenderlo su un cluster distribuito. Non è un bus di messaggi come Kafka, ma invece indicizza i dati che arrivano. Dal momento che Elastic memorizza questi dati su drive, ho realizzato che potevo utilizzare PMEM allo stesso modo in cui ero abituato a fare con Kafka.

## Intel Optane DC Persistent Memory è una tecnologia di memoria avanzata sviluppata da Intel.

Intel Optane DC Persistent Memory viene fornito nel formato DDR4, quindi si adatta perfettamente al tuo server in uno slot di memoria DDR4. I moduli sono disponibili in capacità di 128, 256 e 512 gigabyte, quindi in un sistema a due socket posso avere 6 terabyte di PMEM. Una caratteristica importante è che l'hardware è crittografato e collegato alla tua CPU con quella crittografia, quindi è sicuro ed estremamente affidabile. È già utilizzato per apportare profonde modifiche nel modo in cui viene utilizzato in molti database, come nella piattaforma Exadata di Oracle e SAP HANA.

## Supporto per la Varie Applicazioni

Ci sono diversi modi per utilizzare questa tecnologia.

Il primo è la modalità di memoria, che estende l'area di memoria di un server. Utilizza la PMEM proprio come una memoria normale. La memoria DDR4 funge da cache per la PMEM. In questa modalità, la velocità è paragonabile a quella della DDR4; nella maggior parte delle applicazioni, non vedrai alcuna differenza.

La seconda modalità è l'app diretta. In modalità app diretta, posso scrivere un'applicazione in modo che scriva direttamente nella PMEM, evitando passaggi che richiedono molto tempo.

Il terzo modo consiste nell'utilizzare la modalità "app direct" per creare un sistema di file di memoria non volatile che si trova direttamente sul bus di memoria, il quale è molte volte più veloce del bus NVMe o persino del bus SATA.

Utilizzando questa terza modalità, ho dovuto imparare un po' sull'architettura di Elastic per capire quali parti dovrei eseguire in questo file system ultra-veloce e quali lasciare dove sono. Volevo anche sapere se potevo apportare tali modifiche solo tramite il file di configurazione.

## Utilizzando il kernel Linux

Prima, ho dovuto imparare come utilizzare i comandi del kernel Linux per manipolare questa PMEM.

Con il comando di controllo della memoria persistente Intel (ipmctl), ho scoperto di poter configurare e gestire la PMEM in modo da poterlo allocare per eseguire la modalità di memoria, la modalità di app diretta o una percentuale in modalità di memoria.

L'altro comando è il controllo del dispositivo di memoria non volatile (ndctl). Questo mi permette di creare namespace e regioni nella PMEM che ho creato, in modo da poter montare quella regione come dispositivo. Successivamente, posso montare quel dispositivo come un filesystem.

## ESRally Test di performance

Ho trovato ESRally, uno strumento di benchmark, da utilizzare nei miei test. La prima volta che ho configurato il test, ho eseguito ESRally dal mio normale disco SATA, dove Elastic stava eseguendo tutto dal disco PMEM. Ho ottenuto un certo miglioramento delle prestazioni, ma ho scoperto che a causa del trasferimento dei dati dal disco SATA memorizzati nel mio ESRally, ero limitato dalla velocità con cui potevo inviare dati a Elasticsearch. Quindi non era Elastic che rallentava, era ESRally perché il mio disco SATA era molto più lento del mio disco PMEM. Ho trasferito ESRally sul disco PMEM. Questo ha migliorato le prestazioni e ho ottenuto alcuni risultati interessanti.

## Test delle limitazioni

Per vedere quali sarebbero gli effetti di questo drive PMEM ultra-veloce su Elastic, ho eseguito il test su una macchina. Ciò ha eliminato la variabilità di rete eliminando i colli di bottiglia di rete come fattore limitante. Ho ridotto la comunicazione tra i servizi, che ha ridotto i colli di bottiglia delle repliche, e ho eseguito tutte le richieste su PMEM, eliminando la variabilità dell'unità SATA.

## Prestazione ottimale (100%) App Direct

Prima, ho allocato tutta la memoria PMEM in modalità "app direct" in modo da poter montare l'intera cosa come un sistema di file. Ho utilizzato DIMM da 128 gigabyte, quindi avevo un disco da 1,5 terabyte che potevo utilizzare. Sapevo dalla mia precedente prova con Kafka che ottengo migliori prestazioni con la modalità "app direct" al 100% piuttosto che al 50%.

Mediana di velocità (dovrebbe essere Throughput - potresti voler modificare nella diapositiva) documenti/sec

Utilizzando le statistiche di ESRally, ho preso la mediana del throughput dei documenti al secondo in confronto al numero di gare concorrenti che stavo eseguendo contemporaneamente con produttori e consumatori. Ho ottenuto dei buoni risultati con l'unità SATA, paragonabili ad altri test pubblicati. Con l'unità PMEM, sono riuscito ad inglobare quasi il doppio dei documenti al secondo. Questo è davvero incredibile considerando che non sono stati apportati cambiamenti al codice, solo una modifica di configurazione.

## Tempo di risposta del servizio

L'altro risultato erano i tempi di risposta alle funzioni. Come previsto, all'aumentare del numero di gare concorrenti in esecuzione contemporaneamente, il tempo di risposta per quelle query o funzioni aumenta. Ma con il PMEM, il tempo di risposta è quasi il doppio più rapido. Da questo semplice test, ho capito che il luogo in cui memorizzi i dati necessari a Elasticsearch (PMEM o SATA) influisce sul tempo di risposta.

## The translation of "Conclusion" to Italian is "Conclusioni".

Utilizzando Optane Persistent Memory in modalità file system per aumentare le prestazioni e ridurre i costi dei server Elasticsearch, sono necessari minimi cambiamenti nella configurazione hardware e software, senza apportare modifiche ad Elasticsearch o alle applicazioni sottostanti. Raddoppiando la capacità di throughput di Elasticsearch, è possibile ridurre il numero totale di server nel cluster Elasticsearch, riducendo così il costo totale di proprietà.

## Per ulteriori informazioni

Per informazioni più dettagliate, consulta il link nel podcast al documento che abbiamo creato in risposta a questi risultati dei test. Puoi anche contattarmi all'indirizzo darren.w.pulsipher@intel.com o su LinkedIn @darrenpulsipher.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
