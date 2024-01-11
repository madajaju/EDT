---
layout: posts
title: "Database di hyperscale di prossima generazione - Aerospike"
number: 29
permalink: episode-EDT29-it
has_children: false
lang: it
nav_exclude: true
parent: Episódios
grand_parent: Italiano
nav_order: 29
tags:
    - aerospike
    - database
    - ingestion
    - optane
    - data
    - technology
    - pmem

date: Wed Nov 11 2020 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Tim Faulkes

img: thumbnail.png
image: thumbnail.png
summary: "I database stanno mostrando la loro età, ci vuole ancora del tempo per ottenere risultati. Aerospike, con l'aiuto della tecnologia Intel (Optane), si fa strada con velocità, capacità e bassa latenza. Tim Faulkes, Vice Presidente dell'Architettura delle Soluzioni presso Aerospike, si unisce a Darren Pulsipher, Chief Solutions Architect di Intel, per discutere i vantaggi della tecnologia Aerospike."
video: "https://youtu.be/url"
description: "I database stanno mostrando la loro età, ci vuole ancora del tempo per ottenere risultati. Aerospike, con l'aiuto della tecnologia Intel (Optane), si fa strada con velocità, capacità e bassa latenza. Tim Faulkes, Vice Presidente dell'Architettura delle Soluzioni presso Aerospike, si unisce a Darren Pulsipher, Chief Solutions Architect di Intel, per discutere i vantaggi della tecnologia Aerospike."
---

<div>
{% include transistor.html id="1280ea95" title="#29 Next-Generation Hyperscale Database - Aerospike" %}

{% include youtube.html id="url" %}
</div>

---

## Prossima generazione di database iperscalabili.

I database stanno mostrando la loro età, impiegando ancora del tempo per ottenere risultati. Aerospike, con l'aiuto della tecnologia Intel, spicca per velocità, volume e bassa latenza. Tim Faulkes, Vice Presidente dell'Architettura delle Soluzioni presso Aerospike, si unisce a Darren in questo episodio per discutere i vantaggi della loro tecnologia.

## NoSQL - Un mercato emergente con molteplici tecnologie

Aerospike è stato creato nel 2009, con le prime implementazioni di produzione nel 2011. I cofondatori erano consapevoli delle sfide future. Hanno costruito l'architettura partendo da zero con la premessa che fosse affidabile, di scala enterprise, mai inarrestabile e in grado di gestire l'ingestione massiva di dati. L'architettura di Aerospike si basava molto sugli SSD, che fossero unità NVMe nelle moderne incarnazioni o unità SATA SAS. Entrambi erano ancora in fase embrionale, quindi i fondatori avevano una visione proattiva rispetto a dove andava il mercato. Si affidavano a quei dispositivi per ottenere la velocità, ed ecco perché la tecnologia Intel era così importante. Da allora, altre tecnologie Intel, come la memoria persistente, hanno reso le cose molto più facili.

## Indici nella RAM, Dati su SSD

Aerospike si avvicina ai database in modo diverso. Gli SSD non sono un disco rigido più veloce. Un disco rigido ha settori fisici e teste e cose che deve muovere per leggere i dati. Un SSD può leggere rapidamente migliaia di pezzi di dati in parallelo. Non funziona bene su unità rotazionali, ma con NVMe/SSD, funziona in modo velocissimo. Nessuno ha la stessa sorta di prestazioni, nemmeno un database in memoria.

L'architettura unica è progettata per un alto volume, un elevato throughput e una latenza molto bassa. Ad esempio, alcuni clienti effettuano regolarmente 20 milioni di transazioni al secondo. Alcuni arrivano fino ai petabyte di dati. Di solito, i clienti operano su hardware abbastanza buono, ma il tempo di andata e ritorno è fondamentale. Aerospike impiega circa 200 microsecondi per cercare un pezzo di dati e riportarlo al cliente, non decine o centinaia di millisecondi. Quando hai bisogno di molte informazioni velocemente, come nella rilevazione delle frodi, o se stai acquisendo molti dati, come nell'IoT, veicoli autonomi, letture dei sensori o dispositivi medici, Aerospike può eseguire milioni di transazioni al secondo tra letture e scritture. Non è necessario inserirlo in un bus di messaggi e quindi consentire al database di notificare i sistemi downstream tramite il bus di messaggi che ha i dati. È già persistente.

## Alimentando l'innovazione di punta nel settore in tutto il mondo

Quali sono i casi d'uso ideali per Aerospike? Ci sono mercati evidenti come l'IoT, la rilevazione delle frodi e i dati dei sensori, ma è un mercato in crescita. Aerospike è nato nella tecnologia pubblicitaria, dove il recupero dei dati deve avvenire in millisecondi o meno. È qui che le buone prestazioni sono state testate con successo su larga scala.

Ulteriori settori in cui Aerospike può essere utile sono vari. Un esempio è una grande azienda di telecomunicazioni in India. Lì, l'infrastruttura non è sempre affidabile e talvolta le chiamate vengono interrotte. Questa azienda, grazie alla tecnologia di Aerospike, può rilevare in tempo reale quando una chiamata viene interrotta e può immediatamente contattare il cliente per offrire crediti o altre forme di compensazione al fine di mantenere la soddisfazione del cliente.

## Regolamento in tempo reale dei pagamenti istantanei.

Un nuovo settore in cui Aerospike si è ampiamente impegnata è quello dei pagamenti digitali in tempo reale. Questo settore non richiede necessariamente molte informazioni o un'elevata capacità di elaborazione, ma ciò di cui queste aziende hanno bisogno è una coerenza e una disponibilità assolute, anche in caso di eventi come la perdita di un centro dati.

Il pavimento di produzione è anche un mercato emergente per la tecnologia Aerospike in settori come la produzione di semiconduttori, dove viene utilizzato per memorizzare dati dei sensori al fine di fornire analisi in tempo reale. Aerospike si distingue in qualsiasi settore in cui ci sia una grande quantità di dati e si necessiti di ottenerli velocemente.

## Performance a livello Quick synthesis – Risultati dei test indipendenti di terze parti.

Ci sono molti database con una buona tecnologia disponibili, ma ci sono sfide legate alla scala. Prendiamo Redis, ad esempio. Poiché memorizza tutte le sue informazioni in memoria, non puoi raggiungere i dieci terabyte senza costi significativi, figuriamoci centinaia di terabyte o petabyte. Dato che Aerospike archivia le informazioni su SSD, la differenza di tempo nel cercare dati su SSD e memoria è di circa 100 microsecondi. Nella scala dei petabyte, Aerospike sostituisce tecnologie più vecchie come Cassandra, che scala molto bene ma manca di velocità.

## Costo totale di proprietà

Inoltre, rispetto a quelle tecnologie, le persone risparmiano molti soldi passando ad Aerospike perché il numero di nodi diminuisce drasticamente a causa dell'architettura unica. Il risparmio avviene non solo in termini di capitale, ma anche in termini di spese operative poiché ci sono meno macchine da supervisionare.

Aerospike ha eliminato alcuni dei livelli tradizionali nell'architettura. Spesso i sistemi legacy avranno una cache aggiuntiva davanti ad esso per accelerarlo. Questo introduce complessità. Aerospike non ha bisogno di una cache. Non c'è una grande quantità di DRAM. Si affida alla velocità degli SSD e alla tecnologia sottostante per ottenere le prestazioni dello storage grezzo senza una cache. Poiché i livelli di cache e di storage sono stati eliminati, la soluzione è semplificata, il che significa affidabilità e velocità integrate.

## Esempio di distribuzione continentale

La coerenza tra diverse aree geografiche è anche un beneficio importante della tecnologia. L'architettura moderna richiede una bassa latenza, il che significa tipicamente che ci sono un gruppo di cluster basati su H in cui i dati si trovano vicino all'utente. Altrimenti, la velocità della luce diventa un fattore. Aerospike può far comunicare tra loro tutti i cluster basati su H, quindi se un record viene modificato in un cluster, si propagherà automaticamente agli altri cluster in modo asincrono. Tuttavia, alcune applicazioni, come i pagamenti digitali, richiedono una forte coerenza tra i cluster, quindi potrebbero voler replicare i dati in modo sincrono. Preferiscono leggere dalla copia locale dei dati. Le letture diventano molto veloci; le scritture sono affette dalla velocità della luce, ma garantiscono la coerenza attraverso le distanze geografiche. Quindi, non si tratta di risoluzione dei conflitti, ma di evitare i conflitti. Avere la possibilità di diffondere tali scritture di forte coerenza in tutto il mondo e forse avere più sistemi di registrazione ha un enorme potenziale e valore.

## Aerospike Connect per Spark

Ad esempio, Aerospike attualmente si interfaccia con Spark, una tecnologia di analisi che richiede che i suoi dati siano in memoria. Caricando i dati da Aerospike, il data frame di Spark può elaborare decine o centinaia di terabyte con enormi risparmi di costi e velocità. L'integrazione con altre strumenti di intelligenza artificiale è una delle forze trainanti che apriranno delle porte interessanti.

Ottenere i dati in Aerospike è semplice e diretto. Poiché le applicazioni hanno uno strato API come la maggior parte dei database, Aerospike può acquisire dati da fonti standard del settore come Kafka e Janus. La capacità bidirezionale di comunicare con i bus dei messaggi ha senso perché non solo Aerospike può acquisire dati da queste fonti, ma può anche emetterli. Se Aerospike è una fonte di verità quando si scrive un record, è possibile inviarlo a sistemi successivi.

## Aerospike Connect per Kafka.

Se vuoi utilizzare Aerospike per l'ingestione invece di un motore di ingestione sul front end, Aerospike può determinare se desidera suddividere i dati o mantenerli nello stesso formato e semplicemente inserirli in Aerospike. Con il suo framework di plug-in, è una chiamata API. Quando i dati vengono archiviati, un message bus può essere notificato per l'elaborazione a valle. Questo elimina uno dei passaggi di ingestione e aumenta la throughput totale.

La scalabilità verso migliaia di client è possibile grazie al modo in cui il client Aerospike è progettato come multithreading per scalare su un solo processo e assorbire una grande quantità di dati in quel modo. Il client è intelligente per ragioni di velocità. Ogni record passa direttamente dal client al nodo che possiede quel pezzo di dati. Non ci sono intermediari di sorta. Ciò significa che il client deve conoscere tutti i nodi, quindi ci sono limiti di connessione finiti, rendendo impraticabili centinaia di migliaia di client.

## Esempio di Deployment Continentale

Se, tuttavia, hai centinaia di migliaia di clienti, è perché hai una popolazione distribuita globalmente. Se parlassero ad un singolo cluster, la velocità della luce diventerebbe un grosso problema. Ci sono modi per creare cluster più piccoli basati sugli edge che condividono informazioni oppure parlano con un sistema centrale in un modello di concentratore e raggi, quindi è possibile farlo.

## Aerospike è un database per applicazioni di sistema di record

All'interno del mondo dei dati in movimento, entrano in gioco diversi livelli di privacy e standard come il GDPR e il CCPA, quindi i clienti devono conoscere l'origine dei dati. Aerospike ha la flessibilità di analizzare i dati in modo dettagliato e, in base al contenuto, sapere quando e dove possono essere inviati. Questo fa parte della configurazione di spedizione dati di Aerospike che è trasparente per l'applicazione. Non è necessario modificare nulla nelle applicazioni, solo nella configurazione.

Aerospike si assicura anche che i dati siano sicuri. Proprio come tutti i database di livello enterprise, Aerospike supporta la crittografia sia inattiva che in transito e l'integrazione della sicurezza di cose come Hashicorp Vault. Può essere, ed è utilizzato, come un sistema di registrazione.

Un obiettivo fondamentale in Aerospike è utilizzare le ultime innovazioni e tecnologie per il successo dei clienti. Ad esempio, quando Intel ha introdotto PMem, lo hanno utilizzato in modalità app diretta per sfruttarne appieno le capacità. Ciò significa che per un aggiornamento graduale su, diciamo, un petabyte di informazioni, il tempo richiesto è ridotto. Aerospike detiene quel petabyte forse su 50 o 60 nodi invece di migliaia di nodi, e quando un nodo viene spento, non è necessario ricostruirlo, quindi il tempo di riavvio è molto veloce.

In generale, Aerospike offre sicurezza, alta disponibilità, velocità, bassa latenza, scalabilità, coerenza e bassi costi di proprietà.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
