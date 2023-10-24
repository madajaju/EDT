---
layout: posts
title: "Gestione della complessità nel Cloud"
number: 66
permalink: episode-EDT66-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 66
tags:
    - data
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - aiven

date: Wed Oct 13 2021 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - David Esposito

img: thumbnail.jpg
image: thumbnail.jpg
summary: "In questo episodio, parte 2 su 2, Darren continua la sua conversazione con David Esposito, Global Solution Architect di Aiven, riguardo all'accelerazione dell'adozione del cloud, riducendo complessità e costi."
video: "https://youtu.be/OIIPkoZHKiw"
description: "In questo episodio, parte 2 su 2, Darren continua la sua conversazione con David Esposito, Global Solution Architect di Aiven, riguardo all'accelerazione dell'adozione del cloud, riducendo complessità e costi."
---

<div>
{% include transistor.html id="49896b3b" title="#66 Managing Complexity in the Cloud" %}

{% include youtube.html id="OIIPkoZHKiw" %}
</div>

---

## Ridurre la complessità

Quali pratiche aziendali dovrebbero essere implementate per gestire gli asset cloud e ridurre la complessità? In primo luogo, è necessario disporre di codice di infrastruttura e di distribuzioni automatizzate. Tutto ciò che segue è una conversazione per definire quali rischi ci sono per l'azienda, come mitigare questi rischi e quanto investire in questo ambito.

Per alcune aziende, è fondamentale avere il massimo livello di disponibilità del servizio. Nel settore sanitario, ad esempio, potrebbe essere necessario avere i dati di backup in molteplici siti e tutti i servizi disponibili, poiché decisioni critiche per salvare vite potrebbero basarsi su tali dati. Ma se si opera nel settore dell'e-commerce in aprile, forse si può dedicare del tempo a quella regione malata perché le conseguenze non sono così gravi.

Nell'ambito dell'assistenza sanitaria, ha senso optare per il multi cloud anche se aumenta la complessità. Altre industrie che possono trarre vantaggio dal multi cloud sono quelle altamente regolamentate come i servizi finanziari, il settore petrolifero e del gas o le agenzie federali. In caso di incidente di sicurezza, possono disattivare uno e riattivarlo altrove.

Quando si considera il multi-cloud, si deve tenere presente che ci sono alcune complessità legate alle differenze delle API. Se ti trovi su GCP e sai come distribuire tutto e stai pensando di passare ad AWS, devi riapprendere la piattaforma e il processo di distribuzione, magari anche scrivendo parte di quel codice. Per questa ragione, la containerizzazione è popolare perché consente di distribuire ovunque. Diventa però più complesso con altri servizi; ad esempio, Postgres ha diverse configurazioni su AWS rispetto a GCP, forse con diverse versioni di patch, differenti impostazioni di rete e differenti estensioni. Quindi, un servizio su un cloud non è uguale ai servizi su un altro.

Inoltre, gli ambienti containerizzati non sono ideali per ogni situazione, e una situazione ideale diventa ancora più importante man mano che si scala. Se stai utilizzando Kafka e invii 1.000 messaggi al secondo, il proprio container va bene. Ma se inizi a inviare oltre un milione di messaggi al secondo, un gigabyte, allora si tratta di una conversazione diversa.

## Sicurezza

La sicurezza nel cloud è una bestia diversa rispetto alla sicurezza nel proprio data center. La cosa più importante da considerare è il flusso dei dati al di fuori delle proprie mura. È necessario avere controlli di sicurezza adeguati per garantire che i dati non fuoriescano o subiscano accessi non autorizzati, oltre ad assicurarsi che ci siano requisiti di conformità. Questo richiede formazione perché le misure di sicurezza per i data center in loco non si traducono direttamente nel cloud. Ad esempio, i contenitori S3 sono criptati a riposo, ma non se si ha accesso programmatico attraverso bucket esposti pubblicamente.

Inoltre, è necessario sapere cosa fanno i fornitori di servizi. Ad esempio, Aiven esegue database su GPU EC2, GCP Compute o Azure. Quando archiviano i dati su disco, c'è un livello di crittografia effettuato dal fornitore di cloud, quindi i dati sono crittografati a riposo. Successivamente, Aiven applica un ulteriore livello di crittografia con le proprie chiavi gestite, quindi i dati sono criptati a doppio livello a riposo e tutti i dati in transito sono crittografati. Tutto ciò che viene inviato al server è crittografato per quel server specifico e quando un server viene dismesso, viene bloccato con la chiave di Aiven e la chiave del fornitore di cloud.

## Aiven

David si è unito ad Aiven come parte del team di architettura delle soluzioni quando ha visto che l'azienda offriva soluzioni cloud migliori di chiunque altro avesse visto, basandosi sulla sua precedente esperienza con Kafka gestito e altre tecnologie open source. La missione di Aiven è di rendere migliore la vita degli sviluppatori. Offrono una prova gratuita, con Kafka pronto per la produzione in soli cinque minuti. Hanno anche articoli di aiuto e tutorial per guidarti, quindi puoi inviare un messaggio Kafka nel cloud con le migliori pratiche native per il cloud in meno di dieci minuti.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
