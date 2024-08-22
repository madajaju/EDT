---
layout: posts
title: "Storia dell'architettura centrata sui dati"
number: 1
permalink: episode-EDT1-it
lang: it
nav_exclude: true
nav_order: 1
tags:
    - moderncomputing
    - cloudtechnology
    - virtualization
    - datamanagement
    - multicloud
    - technology

date: 2020-05-08T00:00:00.000Z
guests:
    - Darren W Pulsipher

img: thumbnail.bmp
image: thumbnail.bmp
summary: "In questo episodio, Darren parla della storia delle applicazioni e di come i recenti cambiamenti, principalmente dovuti all'afflusso di dati provenienti dall'Internet delle cose, stiano influenzando le architetture incentrate sui dati. L'infrastruttura è pronta, ma non abbiamo ancora un modo adatto per gestire tutti i nostri dati. Ci sono tre elementi che devono cambiare per facilitare questo processo: le persone (organizzazione), il processo (operazione) e l'architettura (tecnologia). Darren si concentra sull'architettura in cui i dati e il calcolo sono distribuiti su migliaia di dispositivi periferici e su cloud pubblici e privati."
video: "https://youtu.be/SZyyG2AGM6g"
description: "In questo episodio, Darren parla della storia delle applicazioni e di come i recenti cambiamenti, principalmente dovuti all'afflusso di dati provenienti dall'Internet delle cose, stiano influenzando le architetture incentrate sui dati. L'infrastruttura è pronta, ma non abbiamo ancora un modo adatto per gestire tutti i nostri dati. Ci sono tre elementi che devono cambiare per facilitare questo processo: le persone (organizzazione), il processo (operazione) e l'architettura (tecnologia). Darren si concentra sull'architettura in cui i dati e il calcolo sono distribuiti su migliaia di dispositivi periferici e su cloud pubblici e privati."
---

<div>
{% include transistor.html id="7dda1ee9" title="#1 History of Data Centric Architecture" %}

{% include youtube.html id="SZyyG2AGM6g" %}
</div>

---

In questo episodio, Darren parla della storia delle applicazioni e di come recenti cambiamenti, principalmente a causa dell'attacco continuo,

d have the systems and processes in place to effectively manage and make sense of all the data being generated. This influx of data is overwhelming traditional data management methods and requires new approaches and technologies to handle it efficiently.

One significant challenge is the sheer volume of data being produced. With billions of devices connected to the internet, each continuously collecting and transmitting data, the amount of information being generated is unprecedented. Traditional database systems struggle to handle such large quantities of data, leading to issues of scalability, performance, and data quality.

Another challenge is the variety of data being generated. Internet of Things devices generate data in various formats, including structured, semi-structured, and unstructured data. This diversity makes it difficult to integrate and analyze the data effectively, as traditional database systems are designed to handle structured data only.

Furthermore, the velocity at which data is generated poses a challenge. IoT devices generate and transmit data in real-time, requiring timely processing and analysis to derive meaningful insights. Traditional batch processing methods, commonly used in data-centric architectures, are not sufficient for handling real-time data streams.

To address these challenges, new technologies and approaches are emerging. For instance, distributed and scalable data processing frameworks like Apache Hadoop and Spark enable the parallel processing of large datasets across multiple nodes, improving scalability and performance. Streaming platforms, such as Apache Kafka, allow real-time processing and analysis of data streams.

Additionally, advanced analytics techniques, such as machine learning and artificial intelligence, can help derive valuable insights from the massive amounts of IoT data. These techniques can identify patterns, predict future events, and automate decision-making processes, enabling organizations to leverage the full potential of IoT data.

In conclusion, the Internet of Things is revolutionizing data-centric architectures, but also posing challenges in terms of data volume, variety, and velocity. To effectively manage and make sense of IoT data, organizations need to adopt new technologies and approaches that can handle the scale, diversity, and real-time nature of this data.

Ancora non abbiamo un modo adatto per gestire tutti i nostri dati. Ci sono tre elementi che devono essere modificati per facilitare questo processo:

is stored and how it is accessed.

e vengono distribuiti su migliaia di dispositivi periferici e tra cloud pubblici e privati.

## Hardware-software Stacks appositamente progettati

come si distribuiscono le applicazioni per le missioni oggi non è cambiato significativamente negli ultimi trent'anni. un'architettura di riferimento

che ha un'applicazione e uno stack di applicazioni costruito su hardware specifico, con calcolo e archiviazione collegati a

Rete. Questo modello ha funzionato bene per molto tempo e infatti, circa un quarto delle applicazioni ancora vengono implementate.

IT: Su hardware appositamente realizzato, ma non è ottimale oggi. La tecnologia si evolve troppo velocemente per questo modello; si verificano deragliamenti.

l'aggiunta, ci sono tempi di sviluppo lunghi, costi elevati, limitata riutilizzo della tecnologia, e mancanza di integrazione con

altri applicazioni.

## Architetture di virtualizzazione

Circa 20 - 25 anni fa, la virtualizzazione hardware ha iniziato a risolvere alcuni di questi problemi con la capacità di implementare.

applications, you could now have them all on one machine.

macchine più piccole, potrebbe essere utilizzato un solo pezzo di hardware più grande, non solo per il calcolo, ma anche per lo storage virtuale e la rete

funzioni anche, portando a una maggiore convenienza economica. Come con ogni sviluppo, ciò ha sollevato alcune nuove questioni.

Crescenti preoccupazioni per la sicurezza e "vicini rumorosi", significando un'applicazione che interferisce con le prestazioni di un'altra.

a causa dell'utilizzo eccessivo della banda IO, della rete o dello spazio di archiviazione, ecc..

## Le architetture delle nuvole

Negli anni 2000, la tecnologia del cloud decollò. Potevamo ora condividere tra più organizzazioni. Dove la virtualizzazione.

Traduzione: 
creata l'astrazione dell'hardware, la tecnologia cloud ha creato l'astrazione delle operazioni, rendendo più facile gestire più elementi

tradurre la seguente frase in italiano: Le macchine. L'idea architettonica del cloud ha creato "infrastrutture definite dal software", il che facilita il processo di attivazione e

Allocate le risorse di calcolo, archiviazione e rete a un livello inferiore. Altri vantaggi includono una diminuzione dei costi di investimento e di gestione operativa, grazie a minori

hardware e manodopera. Inoltre, ha fornito la capacità di esplosione, ad esempio, per i rivenditori durante la frenetica stagione delle vacanze o il

governo durante il censimento. Con il progresso di questa tecnologia, le questioni di sicurezza e vicini rumorosi

private clouds.

traduci in italiano: cloud privati. Anche con queste preoccupazioni, però, i vantaggi superano di gran lunga gli svantaggi nella maggior parte dei casi.

## Architetture di servizio e contenitore

Negli ultimi cinque-sei anni, abbiamo assistito alla reinvenzione di una vecchia tecnologia: la containerizzazione. Docker ha creato un nuovo modo di incapsulare e distribuire le applicazioni.

Modo più semplice per utilizzare la tecnologia dei container precedentemente ingombrante e difficoltosa da utilizzare. Sviluppatori di applicazioni, in

particolare, ha abbracciato questa tecnologia perché è coerente su più ambienti. Il livello di gestione del servizio.

con l'containerizzazione delle applicazioni e dei microservizi, si è più incentrati sulle applicazioni e si mappano quelle applicazioni a

hardware virtualizzato generico che è stato astratto. Ora abbiamo un rilascio automatico su più ambienti cloud.

we’ve implemented effective disaster recovery measures to ensure business continuity. Our team constantly monitors and tracks performance metrics to improve efficiency and enhance customer satisfaction.

È molto più facile integrarsi con reti sovrapposte, integrarsi su più cloud, creare firewall, fare...

micro-segmentazione, ecc... tutto tramite software.

Sicurezza, tuttavia, è una preoccupazione principale. Poiché i contenitori sono facili da implementare su più ambienti, è

è importante concentrarsi sulla sicurezza che è "integrata" nella distribuzione. Inoltre, c'è un aumento della complessità. Qui,

Ci siamo allontanati da un'architettura a tre livelli verso un'architettura a più livelli o addirittura a microservizi con dozzine di.

Lavoro dei servizi in collaborazione. Un altro problema riguarda dove e come i dati vengono archiviati e gestiti. Sulla gestione del servizio.

Traduci in italiano: layer, lo storage è un contenitore generico, che non gestisce i dati stessi.

## Architetture dell'Internet delle cose

Ora, quando l'Internet delle cose (IoT) viene aggiunto a questo ecosistema, il volume di dati aumentato si distribuisce su centinaia o

devices can connect directly to the internet, making them vulnerable to hacking and cyber attacks.

I dispositivi sono accessibili al pubblico. Ad esempio, qualcuno potrebbe manipolare una luce smart della città, un segnale di traffico smart.

potenza delle nuove tecnologie, sono diventati strumenti essenziali per la sicurezza e il monitoraggio. Un drone, o telecamera di sicurezza, possono fornire un'ampia copertura di sorveglianza e rilevamento delle minacce. La complessità dei diversi dispositivi, il loro numero e le loro ubicazioni, insieme all'immensa potenza delle nuove tecnologie, sono elementi chiave per garantire la sicurezza in diverse situazioni.

La quantità di dati è enorme.

## Architetture di gestione dei dati e delle informazioni

Come possiamo lavorare attraverso questi problemi? Le organizzazioni stanno già cambiando per affrontare questa complessità con nuove organizzazioni.

e posizioni ingannando sulla gestione dei casi d'uso dei dati. In precedenza, non c'era un luogo dove gestire questi casi d'uso.

Abbiamo creato un nuovo livello chiave chiamato livello di gestione delle informazioni distribuite. Questo livello gestisce i dati su tutti i

Il IoT, Legacy e le nuvole pubbliche e private. Esso combina i dati con gli stack di applicazioni e gli stack di servizi, quindi...

Possono allocare dinamicamente servizi e applicazioni vicino ai dati, o viceversa. Regolamentazioni e pura quantità di dati.

possono limitare la capacità di spostare i dati verso posizioni centrali, come abbiamo fatto tradizionalmente. Con questa nuova architettura,

Sono disponibili diversi modi di operare, tra cui l'analisi disaggregata, lo spostamento dei dati e lo spostamento delle applicazioni.

Ancora una volta, con questa architettura ampliata, la sicurezza è di importanza primaria. La sicurezza deve essere gestita come un aspetto comune.

Attraverso tutti gli strati. Sicurezza dell'identità, che significa accesso, autorizzazione e autenticazione delle persone, Internet delle cose (IoT).

dispositivi, applicazioni, servizi e persino dati sono fondamentali. La gestione dell'identità include la crittografia per dati affidabili.

e dispositivi.

## Conclusione

translate and incorporate them into a unified project.

ottimizzano come lavorano insieme. La più recente area è il livello di gestione delle informazioni distribuite (DIML). Fortunatamente, noi

Stiamo iniziando a vedere start-up e aziende più consolidate sviluppare casi d'uso e elementi architettonici.

in questo strato.

L'architettura di Edgemere aiuta a identificare le parti fondamentali in movimento di un moderno sistema digitalmente trasformato e come sono tutte collegate.

si adattano insieme.

Intel si inserisce in questo ecosistema fornendo l'elemento chiave di un livello fisico comune per controllare e gestire tutto il tuo.

risorse, che si tratti di un dispositivo IoT, nel centro dati o in una posizione remota. Facciamo in modo che tu possa

Sposta i dati in modo efficiente, memorizzali in modo efficace e elabora tutto. Che si tratti dei processori Xeon ad alta

Fine, che si tratti di inferenza o intelligenza artificiale in loco a bassissimo consumo energetico, Intel dispone di un'intera gamma di hardware fisico.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
