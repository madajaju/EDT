---
layout: posts
title: "Insegnamento a Distanza e Apprendimento"
number: 11
permalink: episode-EDT11-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 11
tags:
    - remotelearning
    - compute
    - technology
    - people
    - edge
    - telelearning

date: Tue Aug 11 2020 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Erin Moseley
    - Grant Kelly

img: thumbnail.png
image: thumbnail.png
summary: "In questo episodio, Erin Moseley, Senior Account Exec per l'Educazione presso Intel, e Grant Kelly, Architetto delle Soluzioni per l'Educazione presso Intel, si uniscono a Darren per parlare delle sfide dell'apprendimento a distanza e dell'insegnamento e dei cambiamenti travolgenti che i distretti scolastici, gli insegnanti, i genitori e gli studenti stanno affrontando durante la pandemia da Covid-19. Scopri come gli studenti e gli insegnanti si stanno collegando con nuove tecnologie e modalità di apprendimento."
video: "https://youtu.be/Yb1rXTCEIeQ"
description: "In questo episodio, Erin Moseley, Senior Account Exec per l'Educazione presso Intel, e Grant Kelly, Architetto delle Soluzioni per l'Educazione presso Intel, si uniscono a Darren per parlare delle sfide dell'apprendimento a distanza e dell'insegnamento e dei cambiamenti travolgenti che i distretti scolastici, gli insegnanti, i genitori e gli studenti stanno affrontando durante la pandemia da Covid-19. Scopri come gli studenti e gli insegnanti si stanno collegando con nuove tecnologie e modalità di apprendimento."
---

<div>
{% include transistor.html id="e48d397d" title="#11 Distance Teaching and Learning" %}

{% include youtube.html id="Yb1rXTCEIeQ" %}
</div>

---

## Considerazioni emergenti

Insegnanti, personale, genitori e studenti si trovano di fronte a sfide diverse nel passaggio improvviso all'apprendimento a distanza. Sul lato informatico per i distretti scolastici, si pongono una serie di considerazioni emergenti. Cosa facciamo con lo scenario del bring your own device (BYOD) che proviene da reti a fiducia zero? Come proteggiamo la privacy e gestiamo la sicurezza con tutte le nuove modalità di comunicazione tra insegnanti, personale, genitori e studenti? Come manteniamo un'esperienza di classe gestita in modo efficiente? Come offriamo supporto quando non esiste una struttura di helpdesk tradizionale? Inoltre, non possiamo dimenticare che c'è un aspetto sociale importante che deve guidare un'esperienza senza soluzione di continuità. Un alunno di terza elementare distratto da problemi tecnici quando ha bisogno di collegarsi con insegnanti e compagni avrà un'esperienza di apprendimento a distanza ridotta.

## Servizi di Sistemi, Servizi e Piattaforme per l'Istruzione

Ci è sempre stata complessità con tutti i livelli diversi di servizi e piattaforme, ad esempio, il pacchetto di produttività con G Suite e Office 365. La domanda ora è cosa possiamo fare con i sistemi di gestione dell'apprendimento in questo approccio strutturato nell'integrazione del sistema di informazioni degli studenti? Dobbiamo considerare come stiamo sfruttando le nostre capacità in termini di scalabilità. Dobbiamo prendere in considerazione diverse soluzioni di infrastruttura come servizio (IAAS) e piattaforma come servizio (PAAS), servizi di archiviazione, privacy e sicurezza, e, ovviamente, le piattaforme sottostanti che guidano tutto ciò.

Precedentemente, gli strumenti di conferenza e collaborazione avevano un uso limitato, forse per portare un relatore ospite, ad esempio. Ora, tuttavia, vengono utilizzati pesantemente come strumenti primari e hanno contribuito alla complessità del sistema.

## Opzioni di hosting del servizio

Ci sono due modalità principali utilizzate per accedere ai servizi: il dispositivo come porta di accesso ai servizi (software, infrastruttura o piattaforma) e il dispositivo come parte della rete interna. In precedenza, la maggior parte rientrava nella seconda categoria, dove c'erano limitate preoccupazioni riguardo a questioni come la patching e la conformità alle politiche perché i dispositivi erano costantemente connessi ai siti scolastici interni, indipendentemente che fossero dispositivi portati da casa o asset di proprietà del distretto. Ora, con i diversi tipi di connettività, dobbiamo preoccuparci della scalabilità della larghezza di banda e di come implementarla.

## Dispositivo come Portale ai Servizi

Piattaforme come G Suite, Office 365 e quelle per videoconferenze e collaborazione rappresentano una preoccupazione perché creano dipendenza da un terzo soggetto. I distretti scolastici non hanno controllo sulla sicurezza, la privacy e le prestazioni. È importante riconoscere che la connessione a questi servizi cloud si collega all'host interno, che sia un cloud privato o un data center in loco, che ha servizi sottostanti di gestione dell'identità, sistemi informativi degli studenti, possibile filtraggio dei contenuti, ecc. I vantaggi, tuttavia, sono una riduzione del traffico in entrata nel data center e la scalabilità e gestibilità intrinseca.

## Dispositivo come parte della rete/cloud privato

Implementare una rete virtuale privata (VPN) è una nuova idea per la maggior parte dei distretti scolastici. Le aziende usano da tempo le VPN e i distretti scolastici potrebbero dover fare altrettanto per soddisfare le nuove esigenze dell'apprendimento a distanza. Alcuni svantaggi di una VPN sono la congestione di rete, la scalabilità e il traffico proveniente da reti a "zero trust". Il principale vantaggio è che funziona come un'estensione della rete interna, quindi la gestione della sicurezza e la crittografia del traffico sono estese anche ai client VPN. Un altro grande vantaggio è l'accessibilità a tutti i servizi necessari internamente.

## Sfide emergenti

I bottleneck per l'apprendimento a distanza sono diversi. Per le aziende, quando la forza lavoro è diventata virtuale, ci si aspettava un carico VPN del 10%. Per l'istruzione, quel numero sarà significativamente più alto, creando un possibile collo di bottiglia VPN. La scalabilità dei servizi ospitati è un'altra area da considerare. Anche se i servizi sono presenti su un cloud pubblico, si collegano a un cloud privato o a un data center locale per cose come SSO, informazioni degli studenti, traffico e persino filtraggio dei contenuti. La larghezza di banda dedicata per l'accesso a Internet, così come la gestione del collegamento della larghezza di banda nel data center, sono importanti considerazioni.

L'accesso a un componente di assistenza deve essere anche scalabile per evitare congestioni.

La preoccupazione principale dei distretti scolastici attualmente, tuttavia, è garantire l'accesso a tutti i loro studenti. Per alcuni studenti, c'è un collo di bottiglia nel semplice accesso a Internet da casa. Quando questo problema si aggiunge a tutti i diversi livelli, i collo di bottiglia emergenti diventano molto complessi.

Per contrastare questi potenziali problemi, i distretti scolastici devono dedicare il tempo e le risorse necessarie per creare un'architettura solida che sia resiliente, invece di costruire in modo precipitoso un groviglio di spaghetti.

## Scalabilità

Storicamente, i distretti scolastici hanno aumentato le dimensioni del centro dati e distribuito alcuni di quei servizi nei siti scolastici. Quindi l'architettura esiste generalmente per permettere l'aggregazione di corpo docente, personale e studenti per questioni come autenticazione, gestione dei patch, distribuzione di software, ecc. Ora che l'espansione delle dimensioni avviene nella classe virtuale, ci porta nuovamente verso l'aumento dei servizi nel centro dati.

## Trovare l'equilibrio

In precedenza, erano considerati solo i due fattori di on-prem nel centro dati principale e i collegamenti LAN ai siti scolastici. Ora c'è un fattore aggiuntivo nell'adattamento di tutte le aule virtuali, ovvero il salotto di ogni studente e insegnante. Come possiamo adattarci a ciò? In definitiva, si tratta del concetto principale di trovare l'equilibrio tra ciò di cui hai bisogno per il tuo distretto scolastico. Ogni distretto è diverso per dimensione e alfabetizzazione tecnologica, e ci sono molti aspetti in evoluzione.

## Risolvere i punti critici

Cosa può Intel fare per aiutare a risolvere questi ostacoli che abbiamo identificato?

La gestione dei dispositivi finali e la sicurezza dei dispositivi finali è il punto in cui interviene il servizio di assistenza informatica. Stiamo cercando modi per offrire supporto in remoto anziché con visite regolari sul luogo della scuola.

Possiamo analizzare il centro dati e l'infrastruttura e sviluppare una strategia che ci permetterà di espandere la rete e l'infrastruttura definita dal software. Inoltre, possiamo anche integrare un cloud bursting di infrastruttura come servizio, tenendo conto dei modelli di traffico.

## Componenti Intel per affrontare i collo di bottiglia

Intel può aiutare in tre categorie principali: calcolo, archiviazione e rete. Quando consideriamo il rafforzamento dell'infrastruttura definita dal software e le importanti considerazioni, ruota attorno a quel computer con processori Intel, prodotti di archiviazione e capacità di rete. Piuttosto che essere legato e limitato dalle interfacce fisiche e dagli apparecchi, l'infrastruttura definita dal software può scalare e incorporare altre risorse di calcolo, archiviazione e rete. Nessuno è certo di quali saranno le prospettive quando torneremo a scuola, e questa infrastruttura definita dal software è dinamica e offrirà la massima flessibilità.

Ci sono molte opzioni per i distretti scolastici per costruire un ambiente funzionale e sicuro per l'apprendimento a distanza. Sebbene abbiamo affrontato i temi della privacy e delle minacce alla sicurezza e le relative soluzioni in questa puntata, la prossima volta approfondiremo questi importanti argomenti.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
