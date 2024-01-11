---
layout: posts
title: "Requisiti per le Architetture Edge to Cloud"
number: 95
permalink: episode-EDT95-it
lang: it
nav_exclude: true
nav_order: 95
tags:
    - data
    - edge
    - compute
    - cybersecurity

date: Mon Jul 11 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect di Intel, e la Dr. Anna Scott, Chief Edge Architect del settore pubblico, discutono i requisiti essenziali per le architetture di servizi edge to cloud."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solutions Architect di Intel, e la Dr. Anna Scott, Chief Edge Architect del settore pubblico, discutono i requisiti essenziali per le architetture di servizi edge to cloud."
---

<div>
{% include transistor.html id="6279b2d2" title="#95 Requirements for Edge to Cloud Architectures" %}

{% include youtube.html id="url" %}
</div>

---

Anna ha recentemente guidato un'iniziativa per scrivere un white paper sulle architetture di servizi edge to cloud. Edge to cloud comprende tutti i punti salienti della tecnologia a cui Intel tiene: IA, edge, cloud e connettività di rete. Lo scopo era quello di riunire esperti in questi settori per discutere il modo in cui Intel affronta le architetture edge cloud e come queste architetture possono connettersi al cloud. L'attenzione era rivolta agli elementi che contano, a differenza della tecnologia attuale che affronta le problematiche. Questo avrebbe fornito un quadro per parlare e individuare le disconnessioni. Una rivelazione interessante è stata che gli addetti dell'IT, dell'OT e delle reti parlano lingue tecniche diverse con tassonomie diverse, tra le altre sfide.

Una lezione che si può trarre da queste discussioni è che le comunicazioni sono di vitale importanza, e è fondamentale avere una solida conoscenza delle tue comunicazioni, soprattutto ai margini. Questo determina quanto calcolo deve essere locale e quanto spesso ci si può affidare al cloud. Nel settore pubblico, la complessità aggiuntiva dei casi d'uso deve mantenere la funzionalità anche in presenza di condizioni di negazione, interruzione, intermittenza e limitazione (DDIL). Dobbiamo ripensare queste architetture di connettività cloud basandoci su tali limitazioni.

Le comunicazioni e la connettività sono la differenza più significativa tra un'architettura cloud, un'infrastruttura di servizio e il bordo. Molti attuali strumenti assumono erroneamente una connettività costante; se qualcosa non è connesso, è morto. Questo non è il caso sul bordo. È evidente in organizzazioni sul bordo come l'esercito. Tuttavia, anche in settori come la telemedicina, bisogna considerare la possibilità di una scarsa connettività, ad esempio, nel caso di utilizzo della telemedicina in cui si può dipendere dal WiFi domestico del paziente. Anche lo spazio industriale ha requisiti simili. Alcuni non possono essere offline a causa dei controlli critici per macchinari o processi specifici.

Quindi, come puoi avere un calcolo incentrato sul bordo che mantiene tutte le funzionalità critiche con connessione al cloud in modo essenzialmente intermittente? Esistono architetture per questo, ma c'è ancora molto da fare per avere operazioni senza interruzioni quando la connettività potrebbe non essere continua. Cosa puoi continuare a fare e cosa succede quando tutto viene ripristinato? Ci sarà uno scollegamento con ciò che è successo con i dati. Diventa complesso quando devi sincronizzare tutti questi dati su scala, magari con migliaia di dispositivi periferici.

## La sicurezza

La sicurezza sul bordo è un altro settore in cui c'è sempre più lavoro da fare. Le misure di sicurezza tradizionali come l'autenticazione sono ancora di fondamentale importanza, ma i dispositivi rappresentano una vasta superficie di attacco e la loro sicurezza fisica è un problema diverso. La sicurezza dei laptop tende ad essere solida e quelle stesse misure devono essere applicate agli altri dispositivi periferici. I nuovi sviluppi dell'intelligenza artificiale aiuteranno a determinare se i dispositivi si trovano nella posizione corretta e a individuare anomalie in uno degli, diciamo, diecimila dispositivi.

## Sviluppo di applicazioni

Nella costruzione delle applicazioni, gli sviluppatori devono comprendere l'ambiente edge unico e svilupparle senza la necessità di riprogrammare o introdurre nuovi middleware per eseguirle sul bordo. Le applicazioni devono essere in grado di funzionare con limitazioni di calcolo, potenza e connettività. Inoltre, il bordo può trovarsi in un nuovo set di calcolo distribuito e l'applicazione deve essere progettata per funzionare su una rete mesh con un calcolo altamente distribuito. Separare l'applicazione dall'hardware è un cambiamento significativo e sta diventando sempre più generico e meno specifico. Tuttavia, l'intero dialogo sta procedendo verso l'ottenimento dei dati da ovunque e l'utilizzo di tali dati ovunque.

## Gestione dei dati

Il volume di dati generati e raccolti sul bordo è così grande che non ha senso inviare tutti questi dati a un centro dati per essere elaborati. Uno dei motivi è il costo. Negli Stati Uniti, una rete privata 5G può essere conveniente per queste enormi quantità di dati, ma il costo sarebbe proibitivo per la maggior parte delle organizzazioni senza una rete privata 5G.

L'altro problema è che la maggior parte dei dati non è utile. Ad esempio, quando si monitorano dispositivi o applicazioni, la maggior parte dei dati indica che tutto sta funzionando correttamente quando in realtà siamo interessati solo agli eventi che suggeriscono che le cose non vanno bene. Gli algoritmi di intelligenza artificiale vengono applicati sul campo, riducendo così la quantità di dati irrilevanti che vengono inviati al cloud per l'elaborazione.

La modalità tradizionale di gestione dei dati, copiando tutto nel data center e eseguendo l'analisi lì, non funziona bene per l'edge. Anche spingere le applicazioni fino all'edge non sempre funziona. Intel ha identificato alcune altre architetture dati o operazioni sui dati. Una si chiama scambio dati, dove c'è una combinazione di spostamento dei dati in enclave sicure solo dopo che sono stati analizzati sull'edge, come l'elaborazione batch. L'altra si chiama flussi di dati intelligenti, in cui entrano in gioco SADE e SABR. I dati vengono spostati solo in base a regole e vengono trasmessi in streaming. Funziona negli ambienti DDIL perché può determinare gli ambienti operativi correnti e adattarsi.

## Gestibilità

I sistemi devono essere progettati in modo tale da poter essere mantenuti. Non è possibile distribuire diecimila dispositivi e inviare regolarmente un piccolo esercito di persone per controllarli. In ambito IT si è sempre avuta cautela nel non voler aggiornare un sistema che funziona. Tuttavia, non ha senso lasciare i sistemi soli, soprattutto con la paura degli attacchi ransomware alle reti OT. I sistemi devono essere progettati in modo da poter essere facilmente aggiornati per avere la resistenza necessaria per affrontare l'ambiente di sicurezza.

## Disponibilità

In particolare in settori critici come quello militare o sanitario, è importante progettare sistemi con una sufficiente ridondanza; si tratta più di un approccio sistemico. Se singoli componenti falliscono, l'obiettivo finale deve comunque essere raggiunto. Questo è molto diverso da quanto accade nel cloud, dove si tratta di mantenere l'infrastruttura attiva.

La tecnologia non è ancora del tutto pronta, ma è presa in considerazione per la progettazione su reti multiple. Ad esempio, se preferisci utilizzare il WiFi 6 e fallisce, il sistema può utilizzare il 4G o un'altra rete disponibile. La rete deve essere solida così come il calcolo. Un'operazione indipendente senza la parte di rete è fragile. Se opti per costi cablati, ottieni limitazioni più elevate e perdi le tue applicazioni mobili.

Puoi trovare il white paper "Requisiti essenziali per le architetture dei servizi Edge to Cloud" per ulteriori informazioni su embracingdigital.org o intel.org.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
