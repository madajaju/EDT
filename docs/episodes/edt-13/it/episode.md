---
layout: posts
title: "Fissazione Illogica con la Logica"
number: 13
permalink: episode-EDT13-it
lang: it
nav_exclude: true
nav_order: 13
tags:
    - datalineage
    - multicloud

date: Wed Aug 12 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Andrew Padilla

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Il thought leader Andrew Padilla di Datacequia immagina nuovi sviluppi nella gestione dei dati e nella collaborazione che consentirebbero ai dati di avanzare come il software in termini di visibilità, accessibilità, usabilità e portabilità. Egli illustra come un'infrastruttura componibile potrebbe affrontare le preoccupazioni degli ingegneri del software e dei data scientist."
video: "https://youtu.be/url"
description: "Il thought leader Andrew Padilla di Datacequia immagina nuovi sviluppi nella gestione dei dati e nella collaborazione che consentirebbero ai dati di avanzare come il software in termini di visibilità, accessibilità, usabilità e portabilità. Egli illustra come un'infrastruttura componibile potrebbe affrontare le preoccupazioni degli ingegneri del software e dei data scientist."
---

<div>
{% include transistor.html id="4272c3a1" title="#13 Illogical Obsession with Logic" %}

{% include youtube.html id="url" %}
</div>

---

## Un Contrasto di Progetti <h2>

Negli ultimi dieci anni, i professionisti dei dati hanno fatto progressi straordinari nel rendere il software visibile, accessibile, utilizzabile e portabile, ma sul lato dei dati non ci sono stati altrettanti avanzamenti. Questo è qualcosa su cui sia i professionisti del software che quelli dei dati dovrebbero riflettere. Quali sono le preoccupazioni di ciascuna parte? Cosa possiamo imparare l'uno dall'altro? Attualmente, le due parti sono diametralmente opposte in molti aspetti.

Dal lato dell'ingegneria del software, la logica aziendale è la preoccupazione principale. Al fine di ottenere interfacce coerenti, gli ingegneri nascondono i dettagli. I dati vengono considerati come un output. Al contrario, i data scientist sono più interessati al contesto di questi output e alle strutture dati: i metadati. Ad esempio, la genealogia dei dati è importante per un data scientist per vedere come le cose cambiano nel tempo, mentre un ingegnere del software cercherebbe di nascondere questi dettagli per evitare problemi come la variabilità e i bug.

Trattare lo sviluppo dei dati e dei metadati come una disciplina a sé stante, e non nel contesto di come facciamo attualmente software, potrebbe aiutare l'industria a crescere. In altre parole, dobbiamo considerare la costruzione di un'infrastruttura componibile che tenga conto delle preoccupazioni di entrambe le parti.

Un esempio di come stiamo affrontando attualmente le questioni relative ai metadati nell'ambito aziendale illustra questa idea. Oggi abbiamo sistemi centralizzati di gestione dei metadati. Vogliamo sapere dove si trovano tutti i nostri dati: chi, dove, perché e come. Catturare ciò che le persone stanno facendo e inserirlo in un sistema centralizzato è molto un modo di fare software. Se lasciassimo crescere i dati per conto proprio, potremmo adottare ciò che fanno gli sviluppatori di software, ma in un contesto dati. Potremmo costruire un ecosistema più ampio se, invece di tanti sforzi privati da entrambe le parti, mettessimo tutto in un repository sincronizzato e centralizzato e consentissimo ai data developer di sviluppare come fanno gli ingegneri del software. Potremmo costruire e curare come sforzi privati, ma poi condividere quelle curazioni con gli altri. Similmente allo spostamento della gestione delle configurazioni negli anni '90 e 2000 da un luogo centralizzato a un sistema più distribuito, la condivisione potrebbe avvenire in modo più facile e fluido.

## Conoscenza digitale DNA

La conoscenza digitale che possediamo dipende sia dalla logica che dai dati. Il software e i dati condividono le stesse primitive e, man mano che ci spostiamo verso l'alto nello stack della conoscenza, ci sono forti relazioni tra i due. Quello che diverge è che abbiamo l'infrastruttura e gli strumenti per sviluppare il lato software, implementarlo e renderlo visibile, accessibile e utilizzabile. Poiché non consideriamo il lato dei dati allo stesso modo, siamo limitati in queste aree. Ad esempio, un vecchio modo di vederlo è quando gli scienziati dei dati effettuano analisi approfondite, intelligenza artificiale e apprendimento dai loro dati e ottengono informazioni preziose, ma non c'è un meccanismo ripetibile che ne limita l'uso.

Una volta che questa prospettiva viene riconosciuta sia dalla comunità dei dati che dalla comunità del software, possiamo adottare un approccio diverso utilizzando i successi dello sviluppo del software per i dati. Invece di applicare le esperienze personali e i pregiudizi del software in generale, possiamo osservare come i dati operano, come sono simili ma hanno le loro preoccupazioni. Un'analisi sarebbe portare la tua famiglia a Disneyland. Le esperienze e le interazioni là rappresentano la dinamicità del software. Potresti trarre esperienze verso il lato dei dati. Ma immagina nel mondo reale se dovessi lasciare queste esperienze alla porta, e quando tornassi a casa non sapessi niente al riguardo. Questo è il problema. Ogni volta che andiamo in un sistema o ecosistema diverso, reinventiamo un nuovo mondo e non siamo consapevoli degli altri mondi che abbiamo dovuto lasciare alla porta. Se potessimo condividere l'esperienza o portarla con noi, scopriremmo di avere un'infrastruttura di conoscenza molto più vibrante. Quindi, la prossima volta che visiti Disneyland, in base alla tua esperienza, saprai qual è il momento migliore della giornata, come controllare i tempi di attesa, ecc... Senza l'esperienza di lavorare con i dati in concomitanza con l'applicazione, è quasi come ricominciare da zero ogni volta.

Un esempio concreto è l'amnesia che si verifica nei sistemi come quelli dell'assistenza sanitaria, in cui un professionista dei dati crea un'integrazione da zero e, dopo qualche anno, qualcun altro deve fare la stessa cosa. Se riusciamo a stabilire migliori relazioni con i dati attraverso il mappaggio, aumentano la riutilizzabilità e l'efficienza. Ad esempio, perché abbiamo così tante nozioni di persona in termini di modellazione? Certo, il contesto conta, ma perché non possiamo vedere le diverse varianti di una persona e poi riuscire a mapparle? Nel sistema sanitario VA, ci sono diversi sistemi in cui un paziente ha un significato diverso in ognuno di essi. Il mappaggio fornirebbe un punto di riferimento comune, ma permetterebbe cambiamenti a seconda del contesto, purché l'operazione di mappatura fosse visibile. In questo modo potremmo procedere con diversi tipi di casi d'uso e riutilizzabilità.

Uno dei grandi divari è che abbiamo raggiunto una operazionalizzazione efficace della logica con K8s, ma un servizio equivalente non esiste per i dati. Nonostante ci sia una misura tampone con S3, non è la risposta. C'è una grande necessità in tutti i settori di un servizio simile a K8s che si occupi dei dati. La necessità di collaborazione è importante qui. Naturalmente, i professionisti dei dati vogliono apportare valore alla propria organizzazione, ma una certa parte dipende da una comunanza.

## Chiudere le lacune <h2>

Il nome dell'azienda Datacequias si basa sulle acequias in Nuovo Messico, che servono come esempio del tipo di collaborazione necessaria per i dati. Il Nuovo Messico è una regione arida, quindi anni fa, per rendere fertile il terreno, la gente ha costruito una serie di canali di irrigazione chiamati acequias. Nessuno li possedeva, ma li costruirono, li gestirono e li mantennero per necessità e per il bene comune. L'ambiente ostile nel mondo dei dati sono tipicamente i budget e la proprietà dei dati, ma una cura dei dati più basata sulla comunità sarebbe vantaggiosa per tutti, proprio come le acequias hanno beneficiato tutti.

Immagina se i professionisti dei dati potessero biforcarsi un set di dati in qualsiasi repository centrale. Potrebbero gestirlo e svilupparlo per le proprie esigenze. Se ci fosse un cambiamento nel repository centrale gestito da un organismo standard, potrebbero incorporare tali modifiche immediatamente o scegliere di non farlo. In ogni caso, avrebbero la genealogia dalla fonte originale. Oggi, quando usiamo un elemento che cade al di fuori dell'azienda, ne facciamo una copia che rimane immutata nel tempo. Questo richiede il tracciamento manuale e la gestione degli aggiornamenti. Con un repository centrale, tutti potrebbero co-creare, collaborare e creare comunità con fondamenta comuni e genealogia visibile.

Questo è solo la punta dell'iceberg di ciò che rappresenta un cambiamento fondamentale nell'industria per rendere i dati più preziosi per la tua organizzazione. Per ulteriori informazioni su Andrew Padilla e Datacequia, visita datacequia.com



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
