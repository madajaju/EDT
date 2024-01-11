---
layout: posts
title: "Securizzare il flusso di lavoro DevOps = SecDevOps"
number: 42
permalink: episode-EDT42-it
has_children: false
lang: it
nav_exclude: true
parent: Episódios
grand_parent: Italiano
nav_order: 42
tags:
    - cybersecurity
    - devops
    - compute
    - process
    - technology
    - multicloud
    - devsecops

date: Sun Mar 14 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.jpg
image: thumbnail.jpg
summary: "In questo episodio, Darren Pulsipher, Chief Solution Architect presso Intel, e Steve Orrin, CTO di Intel, Federal, discutono perché e come il pipeline DevOps deve essere protetto. L'unico modo per fornire codice solido, resiliente e sicuro è se la sicurezza è integrata, e prima si fa meglio è."
video: "https://youtu.be/url"
description: "In questo episodio, Darren Pulsipher, Chief Solution Architect presso Intel, e Steve Orrin, CTO di Intel, Federal, discutono perché e come il pipeline DevOps deve essere protetto. L'unico modo per fornire codice solido, resiliente e sicuro è se la sicurezza è integrata, e prima si fa meglio è."
---

<div>
{% include transistor.html id="2fd54175" title="#42 Securing the DevOps Pipeline = SecDevOps" %}

{% include youtube.html id="url" %}
</div>

---

Uno studio di oltre 20 anni fa sul ritorno degli investimenti in sicurezza ha dimostrato che più la sicurezza viene integrata nel ciclo di sviluppo, più è conveniente rispetto all'attesa fino alla fine del ciclo. Nonostante sappiamo questo da due decenni, è ancora un lavoro in corso.

La maggior parte delle aziende di sviluppo includono la sicurezza come parte del loro processo di sviluppo complessivo, quindi ci sono stati molti progressi, ma è un percorso, non una corsa veloce. Si tratta di comprendere tutti i diversi punti di esposizione e debolezze e di essere in grado di offrire i giusti processi di sicurezza per risolvere tali problemi.

## I Vettori di Attacco

Spesso le persone pensano agli attacchi come vulnerabilità degli dipendenti o dei pacchetti, per esempio, e dimenticano la parte del processo della storia. Sul lato operativo c'è il tempo impiegato per chiudere una vulnerabilità. Dall'altro lato c'è lo sviluppo e la distribuzione dei prodotti. Lungo quella catena ci sono vari punti di rottura, e di recente sono stati sfruttati nelle fasi più avanzate del processo di costruzione. Per quanto riguarda i clienti, il codice che è stato aggiornato era legittimo perché proveniva direttamente dalla fonte. Quindi dobbiamo pensare attentamente a dove inserire la sicurezza nel processo.

## Sicurezza Incorporata...

Agile, CI/CD, DevOps, …Dove si trova la sicurezza?

Mentre tendiamo a considerare la necessità di sicurezza durante le transizioni dallo sviluppatore al controllo di qualità e dal controllo di qualità alle operazioni o implementazione, la sicurezza dovrebbe essere realmente integrata nell'intero ciclo di sviluppo, non solo in alcuni punti di controllo. L'approccio dovrebbe essere la sicurezza continua.

## Sicurezza Incorporata...

Rendere la sicurezza parte di ogni fase.

La sicurezza continua è una sfida. La maggior parte degli sviluppatori e dei professionisti del controllo qualità non hanno una formazione specifica in sicurezza; questa è una battaglia difficile da combattere. Nel settore, si è provato questo approccio nei primi anni 2000, ma ci sono stati tre problemi. Prima di tutto, il turnover è troppo alto. In secondo luogo, il panorama della sicurezza cambia troppo rapidamente per tenerli aggiornati e, terzo, dato che non è il loro lavoro principale, il comportamento corretto non viene incentivato.

Come integrare quindi la sicurezza nel processo, automatizzare le cose chiave che vogliamo fare e lasciare spazio agli sviluppatori affinché possano svolgere il loro lavoro, che consiste nel costruire, testare e implementare il codice? Il processo di sicurezza può davvero risplendere inserendolo in quelle automazioni che già stai facendo in DevOps, come i test unitari automatizzati, i test di qualità e regressione automatizzati, la creazione automatizzata e l'implementazione automatizzata. Questo non risolverà tutti i problemi, ma alzerà significativamente il livello in modo che tu possa concentrarti sulle sfide difficili legate alla sicurezza.

## Sicurezza integrata...

Significa che la sicurezza è integrata, non è un singolo passo o stage.

Alcuni strumenti comuni forniscono già una certa sicurezza automatizzata che evidenzia le vulnerabilità. Ad esempio, GitHub effettuerà controlli di sicurezza sui progetti che utilizzano codice Node.js e tutti i pacchetti inclusi. Questo può essere utile, ma è troppo tardi; la sicurezza dovrebbe essere integrata nel processo di sviluppo prima di sottoporlo a verifica.

## Sicurezza integrata…?

## Come possiamo arrivarci?

Le attuali violazioni della sicurezza mettono in evidenza che la sicurezza deve essere inserita in ogni fase del processo, compreso tra la creazione e la produzione e subito prima dell'esecuzione dello script per creare l'applicazione. Oltre a introdurre la sicurezza nel processo di creazione, dobbiamo proteggere il processo di creazione stesso; è stata una falla aperta per molto tempo.

Molte aziende che fanno sviluppo interno stanno ora esaminando più attentamente il loro processo di building a causa delle recenti violazioni. Questo è positivo, ma non può fermarsi a queste reazioni istintive ad ogni attacco. Dobbiamo pensare in modo olistico e non aspettare il prossimo punto debole nella catena.

Alcuni modi pratici per garantire la sicurezza del processo consistono nel considerare il server di compilazione come un elemento critico nell'infrastruttura complessiva e applicare le stesse regole e controlli a tale server come si farebbe per i sistemi principali. Acquisire credenziali adeguate, avviare in modo sicuro il firmware, verificare il codice, effettuare audit e registrare il sistema, ecc... durante tutto il suo ciclo di vita è quindi integrato nel processo DevOps quando qualcuno preme il pulsante.

## Costruito per durare

## Dalle soluzioni ai servizi e oltre.

Molte persone non pensano allo script stesso come obiettivo. Non importa quanti buoni moduli siano inclusi se lo script stesso non è protetto. Alcuni modi per proteggere lo script sono eseguire un checksum, che dovrebbe poi essere versionato, controllato e firmato. Questo aggiunge complessità per i DevOps, ma ci sono strumenti che possono aiutare.

## Costruisci una volta, distribuisci ovunque

Proprio come automatizziamo il processo di sviluppo, possiamo integrare l'automazione per implementare questi controlli e verifiche. L'automazione impedisce ad un'altra persona di intaccare potenzialmente le tue creazioni, ma vogliamo anche assicurarci che ci sia una persona umana che riceva i risultati e verifichi gli audit.

Gli strumenti che stai già utilizzando possono essere estesi per aggiungere l'automazione della sicurezza e controlli come quelli necessari per lo sviluppo continuo dell'integrazione nell'ambito del ciclo Agile, oppure strumenti di automazione nel mondo Linux.

Le organizzazioni possono anche distribuire il proprio personale di sicurezza all'interno dei team di sviluppo aziendale, in modo che quando le cose vadano storte, le persone di sicurezza siano già coinvolte nel processo. Due luoghi in cui è importante avere persone di sicurezza sono l'infrastruttura per supportare, ad esempio, il vostro processo Agile, e la gestione dei prodotti per ottenere requisiti di sicurezza per la fase di definizione dei requisiti del prodotto prima che arrivi persino a uno sviluppatore.

C'è sempre una carenza di personale addestrato e capace nella sicurezza, così come di fondi per assumere le persone giuste a causa dell'elevata domanda. Alcune opzioni sono formare le persone che già hai e fornire loro gli strumenti necessari. Non hai bisogno di un esperto di crittografia ad ogni passaggio del processo. Un'altra possibilità è invece di far sì che ogni programmatore sia responsabile della codifica dell'autenticazione, delle credenziali e del protocollo in una libreria di infrastruttura sicura, avere un team che costruisca moduli nei tuoi linguaggi e ambienti che svolgano tutte le funzioni di sicurezza. Il programmatore può richiamare il modulo e gestisce il lavoro difficile. In questo modo, costruisci una sola volta e distribuisci ovunque.

Stiamo vedendo aziende fornire strumenti di sicurezza SaaS, servizi basati su cloud che possono essere consumati per la tua applicazione e l'ambiente di esecuzione. Questo è un grande passo nel processo. Ci sono aziende che forniscono punti di iniezione di sicurezza come la sicurezza delle applicazioni in un ambiente di stile veloce. Questi controlli delle applicazioni, come la sanificazione degli input e la convalida degli input, possono essere incorporati nel tuo ambiente funzionale, ma questo è ancora in attesa alla fine. Ricorda che più presto inizi la sicurezza nel processo, più economico e meno doloroso diventa.

Tutto ciò richiede, naturalmente, ulteriori lavori di integrazione. Gli sviluppatori possono essere cauti riguardo al lavoro coinvolto, ma se esiste un framework con sicurezza integrata (e ci sono prototipi come Ruby on Rails e alcune infrastrutture cloud), può risparmiare molte ore. Tuttavia, devi comunque assicurarti di non affidarti solo alla piattaforma per la sicurezza, poiché potrebbe rappresentare un singolo punto di fallimento.

## L'automazione ti renderà libero

Le violazioni della sicurezza degli ultimi sei mesi sono state profonde. Ecco alcuni punti chiave di consigli:

La sicurezza dovrebbe essere parte integrante dell'intero ciclo di vita, a partire dai requisiti. La sicurezza deve essere presente nel ciclo DevOps stesso, non solo nel codice e nei test, ma anche nell'infrastruttura che guida quel processo.

Quando si creano strumenti di sicurezza e oggetti attraverso moduli, costruiscili una volta, rendili modulari e distribuiscili ovunque.

Utilizza servizi che ti permettono di fare affidamento sull'esperienza di qualcun altro per potenziare il tuo team di cybersicurezza con budget limitato.

L'automazione ti renderà libero/a. Automatizza il più possibile per rendere la sicurezza più facile e veloce e ridurre le frizioni per i tuoi sviluppatori e tester. Con l'automazione, puoi eliminare l'80% di ciò che chiamiamo "roba stupida" in modo da poter concentrare le tue risorse limitate sui problemi difficili.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
