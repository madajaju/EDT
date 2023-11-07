---
layout: posts
title: "Vantaggi dell'architettura Multi-Cloud"
number: 3
permalink: episode-EDT3-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 3
tags:
    - multicloud

date: Mon Jun 22 2020 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Un'architettura cloud multi-ibrido consente alle organizzazioni di sfruttare i vantaggi sia dei cloud privati che pubblici, ottimizzando risorse ed efficienza dei costi. Questo modello presenta cinque principali vantaggi: agilità, flessibilità, prestazioni predittive, sicurezza e conformità ed efficienza."
video: "https://youtu.be/14mcgaHLoPU"
description: "Un'architettura cloud multi-ibrido consente alle organizzazioni di sfruttare i vantaggi sia dei cloud privati che pubblici, ottimizzando risorse ed efficienza dei costi. Questo modello presenta cinque principali vantaggi: agilità, flessibilità, prestazioni predittive, sicurezza e conformità ed efficienza."
---

<div>
{% include transistor.html id="f87aa67c" title="#3 Benefits of Multi-Cloud Architecture" %}

{% include youtube.html id="14mcgaHLoPU" %}
</div>

---

## Agilità

L'agilità è la capacità di muoversi rapidamente per adattarsi alle condizioni mutevoli delle nuove tecnologie, nuove applicazioni e nuove minacce come la sicurezza e la concorrenza. Un modello multi-ibrido consente la possibilità di spostare le cose tra cloud privati e pubblici, o anche dall'infrastruttura legacy ai cloud. Potrebbe essere allettante per i team di sviluppo utilizzare inizialmente il cloud pubblico sotto scadenze rigorose perché possono velocemente creare e disattivare l'infrastruttura, ma possono esserci problemi di integrazione nelle fasi finali di implementazione delle applicazioni nel prodotto. Questo può causare ritardi costosi. Utilizzando il modello multi-ibrido, molti di questi punti di integrazione vengono esposti al team di sviluppo in anticipo. Lo sviluppo delle applicazioni utilizza questo per fallire velocemente e in anticipo nel processo di sviluppo.

## Flessibilità

La flessibilità dell'infrastruttura è un parente stretto dell'agilità. Mentre l'agilità è la capacità di muoversi rapidamente, la flessibilità è la capacità di cambiare. Per ottenere la massima flessibilità, gli sviluppatori hanno bisogno della capacità di distribuire un'applicazione ovunque, sia su cloud privati o pubblici che su infrastrutture legacy, senza essere vincolati al servizio o all'infrastruttura di un singolo cloud.

Implementando una piattaforma di gestione del cloud (CPM) in un'architettura multi-ibrida, i carichi di lavoro possono essere facilmente indirizzati su cloud diversi in base al costo, alla sicurezza e alla affidabilità.

Un esempio delle conseguenze della mancanza di flessibilità è la decisione iniziale di Netflix di utilizzare solo un fornitore di servizi cloud. Questo cloud pubblico ha avuto un problema di infrastruttura che ha causato un'interruzione del servizio, e Netflix non è stata in grado di trasmettere per diverse ore sulla costa orientale degli Stati Uniti. Dopo quel disastro, Netflix ha implementato una soluzione multi-cloud in modo da poter migrare rapidamente su un altro cloud in caso di problemi. Inoltre, sono ora in grado di spostarsi dove ha più senso in qualsiasi momento in base a costi, sicurezza e affidabilità.

Le applicazioni di un cloud multi-ibrido sono la portabilità e la flessibilità operativa. Non essendo legati al modo di fare delle singole piattaforme di cloud, gli sviluppatori scriveranno codice che può essere facilmente trasportato tra diversi cloud. Inoltre, avrai la flessibilità operativa di spostare carichi di lavoro tra i diversi cloud per offrire ai tuoi clienti ciò che desiderano in modo sicuro, attento ai costi e affidabile.

## Prestazione predittiva

Le nuvole pubbliche spesso hanno un prezzo: "vicini rumorosi", che possono influire sulle prestazioni predictive o sulla qualità del servizio (QoS).

Quando si utilizza un cloud pubblico, molte volte non si sa cosa o chi altro sta utilizzando la stessa macchina, array di storage o rete come te. Per alcuni carichi di lavoro, questo non è un problema. Tuttavia, se hai un'applicazione in cui hai bisogno di prestazioni prevedibili, vicini rumorosi o coloro che monopolizzano la larghezza di banda, l'I/O del disco, la CPU e altre risorse possono interferire con i risultati di QoS di cui hai bisogno.

Le nuvole private possono soffrire anche di vicini rumorosi, ma poiché possiedi l'infrastruttura e le applicazioni sono tue, hai la diretta possibilità di gestirli. Un vicino rumoroso sulla nuvola pubblica è come vivere in un condominio dove hai opzioni limitate per gestire i festaioli accanto. D'altro canto, i vicini rumorosi sulla tua nuvola privata sono come vivere in una casa con bambini indisciplinati che puoi immediatamente gestire limitando le risorse.

Una strategia di cloud ibrido ti offre la possibilità di mettere carichi di lavoro e applicazioni "sensibili" su cloud privati e altri carichi di lavoro e applicazioni su infrastrutture di cloud pubblico per efficienza dei costi e delle risorse. Molti strumenti ibridi ti permettono di caratterizzare i carichi di lavoro con requisiti di QoS per aiutare nella posizionamento automatico e ottimale dei carichi di lavoro su diverse infrastrutture di cloud.

## Sicurezza e conformità

Ci sono alcuni pericoli nel fare le cose in modo automatizzato sia nella nuvola pubblica che privata. Tuttavia, se la sicurezza è integrata nell'architettura multi-ibrida, questa automatizzazione diventa un vantaggio poiché significa che un profilo di sicurezza può essere imposto su tutti i tuoi asset di cloud, che siano privati o pubblici, oltre all'infrastruttura legacy. Questo profilo di sicurezza comune viene applicato ovunque e le applicazioni vengono distribuite in base a tali profili.

Ad esempio, in un cloud privato, se desideri un tipo specifico di sicurezza, come legare un'applicazione specifica a una determinata macchina che funziona solo in quel cloud privato, può facilmente diventare un requisito nel profilo di un sistema multi-ibrido.

In un sistema multi-ibrido, ci sono anche molti ottimi strumenti per la revisione e il monitoraggio della tua infrastruttura. Puoi non solo monitorare ciò che sta accadendo nel tuo cloud privato, ma anche nel cloud pubblico, il quale ti avviserà di eventuali attacchi dannosi che potrebbero potenzialmente infettare il tuo cloud privato o le risorse dell'infrastruttura legacy.

## Efficienza

Ci sono molte idee contrastanti sull'efficienza. Se osservi vari calcolatori di Costo Totale di Possesso (CTO), troverai diverse risposte su quale tra le nuvole private o pubbliche sia la più efficiente in termini di costo. Una soluzione multi-hybrid cloud può risolvere questo dilemma per la tua organizzazione attraverso una maggiore visibilità e una provisioning dinamica.

Con un'architettura multi-ibrida cloud e un orchestratore intelligente, il tuo orchestratore può utilizzare la telemetria dalle tue cloud private e pubbliche e dall'infrastruttura ereditaria per prendere decisioni ottimali su dove il carico di lavoro dovrebbe essere allocato attualmente e in futuro. Un altro vantaggio di questa visibilità è che puoi decidere se è efficiente far funzionare continuamente le applicazioni. Un esempio di questo è come abbiamo aiutato il sistema del governo canadese a funzionare in modo più efficiente riducendo i costi associati all'esecuzione di un'applicazione nella cloud pubblica quando nessuno la stava utilizzando. Invece di far funzionare un'applicazione specifica tutto il giorno, ora la eseguono per 18 ore, 5 giorni a settimana, in base all'utilizzo effettivo.

Questa visibilità ti aiuterà anche a identificare ed eliminare i carichi di lavoro e le applicazioni a fine vita (EOL), risparmiando così soldi veri. Per il cloud privato, ciò libera risorse che possono essere utilizzate per altri carichi di lavoro, aumentando la tua efficienza. Inoltre, i broker cloud nella CMP nell'architettura multi-ibrida cercheranno in giro il prezzo più basso mantenendo comunque la QoS per il carico di lavoro specifico. Questo riduce il costo complessivo dell'esecuzione del carico di lavoro e ti fornisce anche la visibilità sul costo effettivo dell'utilizzo di un determinato cloud pubblico o privato.

Visibilità dei costi su Cloud e infrastrutture Legacy.

Guidare carichi di lavoro e applicazioni ai costi più bassi mantenendo gli stessi accordi di livello di servizio.

Aumentare l'utilizzo dell'infrastruttura di cloud privato.

## Chiamata all'azione

Le architetture multi-hybrid cloud stanno dando ai CIO la capacità di anticipare le richieste dei loro clienti, ma ci sono ancora alcuni compiti impegnativi da svolgere. Costruire una strategia multi-hybrid cloud include cambiamenti organizzativi, comportamentali e tecnici che non possono avvenire da un giorno all'altro. Sviluppare una visione architettonica solida e una roadmap sono fondamentali per implementare una strategia multi-hybrid cloud che possa sfruttare i punti di forza dei multi-hybrid cloud e prevenire l'inefficienza dovuta alla "cosa brillante" del settore tecnico del momento.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
