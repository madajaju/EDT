---
layout: posts
title: "Il black out di AWS di novembre 2020."
number: 33
permalink: episode-EDT33-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 33
tags:
    - aws
    - cloudoutage
    - compute
    - csp
    - cloud
    - process
    - cloudreliability
    - multicloud
    - reliability

date: Mon Dec 14 2020 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Settore Pubblico, presso Intel parla delle lezioni apprese dall'interruzione di AWS nel novembre 2020 e delle soluzioni preventive per affrontare tali interruzioni."
video: "https://youtu.be/KQH85zaVUe0"
description: "Darren Pulsipher, Chief Solution Architect, Settore Pubblico, presso Intel parla delle lezioni apprese dall'interruzione di AWS nel novembre 2020 e delle soluzioni preventive per affrontare tali interruzioni."
---

<div>
{% include transistor.html id="e81503fc" title="#33 The AWS Outage of Nov 2020" %}

{% include youtube.html id="KQH85zaVUe0" %}
</div>

---

## Cosa abbiamo imparato dall'interruzione di AWS.

Amazon Web Services (AWS) ha subito un'importante interruzione al momento più inopportuno: il giorno prima del Ringraziamento nel 2020. Dato che hanno pubblicato i registri dei loro servizi, è interessante analizzarli per capire cosa è successo e cosa possiamo imparare.

## Cronologia dell'interruzione di AWS

Mercoledì 25 novembre 2020, intorno alle 3:00 del mattino, ora standard del Pacifico (PST), AWS stava aggiornando la regione Est, aggiungendo server per aumentare la capacità di Kinesis. Kinesis è un servizio AI popolare che esegue la ricerca di modelli nei file di log e nei file video. Circa un'ora e mezza dopo l'inizio dell'aggiornamento, le allerte del server hanno iniziato a segnalare errori nei record di Kinesis. Piuttosto rapidamente, verso le 8 del mattino, hanno inizialmente individuato un paio di possibili cause all'interno dei servizi front-end. Kinesis ha diversi servizi più piccoli, un gruppo di servizi front-end e un gruppo di servizi back-end. La modalità con cui è progettato il sistema fa sì che ogni volta che un servizio back-end è in esecuzione, un thread attiva il front-end. Uno dei problemi era che il front-end ha raggiunto la soglia dei thread a causa dell'aggiunta di server al back-end durante l'aggiornamento. Una volta che hanno identificato questo problema, hanno apportato una soluzione temporanea con aggiornamenti (patch) al sistema operativo e Kinesis è tornato online verso le 10:30 di sera, completamente ripristinato intorno all'1:15 del mattino del 26 novembre. Alla fine, Kinesis non ha funzionato pienamente per 21 ore e, sebbene non tutti utilizzino questo strumento AI, l'impatto è stato diffuso.

## Kinesis Impact = Impatto di Kinesis

Diversi altri servizi di Amazon utilizzano Kinesis, come Amazon Cognito e CloudWatch, e hanno subito varie interruzioni. Cognito è stato sovraccaricato fino alle 14:00 circa; CloudWatch è stato fuori servizio fino alle 22:00 circa. In un effetto domino, i servizi dipendenti da CloudWatch come Lambda ed EventBridge sono stati anche fuori servizio. Poiché EventBridge non era disponibile, i servizi container LCS e LKS sono stati anch'essi influenzati.

Le interruzioni sono avvenute solo nella regione Est e AWS ha tempestivamente aggiunto capacità nelle altre regioni per evitare che Kinesis fallisse in modo simile. Durante l'interruzione, gli utenti nella regione Est hanno riscontrato un problema perplesso, poiché il loro dashboard di servizio e i dashboard di servizio personali non ricevevano informazioni e mostravano falsi positivi. Quindi, ci sono state molte altre organizzazioni IT che hanno investigato sugli inconvenienti poiché non ricevevano le informazioni corrette. Sorprendentemente, AWS è stata aperta sull'intero incidente, quindi è stata una grande esperienza di apprendimento.

## Lezioni apprese

Una delle prime lezioni è che le operazioni semplici all'infrastruttura, come aumentare la capacità, devono essere comprese e pianificate. Ovviamente, AWS non ha solo effettuato gli aggiornamenti a caso, ma non ha compreso appieno l'impatto. Anche se un'operazione sembra routinaria, è sempre una buona idea testarla in un ambiente di prova fino alla sua completa disfunzione durante gli aggiornamenti, anche se richiede più tempo. Ciò è particolarmente importante con servizi critici per altri servizi dipendenti dal nucleo.

Inoltre, le architetture di servizio o micro-servizio devono comprendere l'intera struttura di dipendenza dei servizi in modo da poter risolvere i problemi quando si verificano interruzioni. È anche importante essere il più possibile disaccoppiati dalle dipendenze e includere la programmazione difensiva con i microservizi per evitare l'effetto domino che si è verificato in questo caso.

Un altro problema da tenere d'occhio sono le dipendenze circolari. Se, in una catena di microservizi che dipendono tra loro, uno riscontra un problema, tutto può fermarsi bruscamente, consumando risorse e non ottenendo risultati.

Quando sviluppi micro servizi, tieni presente che non avrai sempre connettività ai servizi di cui dipendi. Scrivere programmi che possano funzionare in uno stato degradato, o almeno indicare che un servizio non sta funzionando, può risparmiare tempo e problemi. In questo caso di interruzione, ricorda che i pannelli di controllo erano verdi nonostante non arrivasse alcuna nuova informazione.

## Chi ha gestito al meglio l'interruzione

Molte aziende sono state colpite dal disservizio di AWS, incluso alcune di proprietà stessa di Amazon. Alcune sono riuscite a superare agevolmente il disservizio, mentre altre hanno avuto più difficoltà nel riprendersi. Coloro che sono stati in grado di adattarsi velocemente avevano una strategia di cloud multi-ibrido, quindi avevano cloud alternativi come backup. Alcuni hanno utilizzato una diversa regione di AWS, mentre altri hanno utilizzato Google o Azure, e alcuni addirittura hanno fatto ritorno ai loro centri dati o siti web esterni. Almeno i siti web hanno mostrato un messaggio che stavano attualmente riscontrando problemi, invece di un errore 404.

Le aziende che non utilizzavano alcuni dei servizi specializzati di Amazon hanno ottenuto risultati migliori. Ad esempio, le offerte di container gestiti EKS ed ECS e Lambda sono state colpite duramente e sono state inattive per un periodo di tempo notevole, quindi coloro che dipendevano da questi servizi sono rimasti senza opzioni.

Durante il black out, i servizi di auto scaling non funzionavano correttamente, quindi qualsiasi azienda che aveva molto traffico in quel momento doveva capire cosa stesse succedendo e scalare i servizi manualmente. Questo era un problema più grande di quanto possa essere normalmente poiché era il giorno prima del Ringraziamento, un momento in cui molti consumatori sono in viaggio e fanno acquisti online. Ad esempio, Etsy è rimasta attiva, ma non potevano scalare come avrebbero normalmente fatto, il che ha portato a una diminuzione delle vendite.

Le aziende che hanno un proprio monitoraggio esterno hanno ottenuto risultati migliori. Alcune di esse hanno persino avvisato AWS dei disservizi. Non erano dipendenti solo dalla dashboard di salute di AWS, ma avevano il proprio monitoraggio in esecuzione sui loro server.

Qual è la lezione principale che dovremmo imparare da questo? Le organizzazioni dovrebbero prendere in carico le proprie risorse cloud, proprio come farebbero con qualsiasi servizio pubblico. Come per avere un generatore di backup per l'elettricità per garantire la continuazione delle attività in caso di interruzione, le aziende dovrebbero utilizzare le stesse best practice per i servizi cloud. Ciò significa che avere una nuvola di backup che può mantenerti operativo, anche a capacità ridotte, è essenziale per superare una tempesta come l'interruzione di AWS.

## Risorse

* https://aws.amazon.com/message/11201/
* https://aws.amazon.com/message/11201/

* https://aws.amazon.com/message/11201/

Tradurre in italiano il seguente testo: * https://www.theverge.com/2020/11/25/21719396/amazon-web-services-aws-outage-down-internet

Non è possibile tradurre testo da un URL. Si prega di fornire un testo specifico da tradurre.

Ecco cosa ha causato il grande black out di AWS la scorsa settimana, scuse.

Amazon Web Services colpito da un'interruzione del servizio.

Traduci il seguente testo in italiano: *https://www.washingtonpost.com/technology/2020/11/28/amazon-outage-explained

Spiegazione dell'interruzione di Amazon



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
