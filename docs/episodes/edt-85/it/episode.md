---
layout: posts
title: "Intelligenza Artificiale e Sicurezza."
number: 85
permalink: episode-EDT85-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 85
tags:
    - aiml
    - cybersecurity
    - devops
    - compute
    - technology
    - process

date: Wed May 04 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "In questa puntata, Darren discute degli aspetti dati dell'intelligenza artificiale (AI) e dell'importanza di proteggere tali dati."
video: "https://youtu.be/url"
description: "In questa puntata, Darren discute degli aspetti dati dell'intelligenza artificiale (AI) e dell'importanza di proteggere tali dati."
---

<div>
{% include transistor.html id="ffe877ee" title="#85 Artificial Intelligence and Security" %}

{% include youtube.html id="url" %}
</div>

---

## Fallimenti dell'Intelligenza Artificiale

Di recente, Darren ha chiesto a una classe di studenti delle scuole superiori e dell'università che studiavano l'IA di trovare dei fallimenti dell'IA. Hanno trovato esempi come Microsoft Tay, un chatbot che ha imparato conversazioni informali da Twitter e, entro 24 ore, stava esprimendo commenti razzisti e misogini basati sulla manipolazione dei feed di Twitter. Un altro esempio è stato un sistema di tracciamento della palla dell'Inverness Football Club che doveva tracciare un pallone da calcio ma invece ha seguito la testa calva di un arbitro. Più grave è stato un incidente mortale quando un veicolo autonomo di Uber non ha riconosciuto un pedone al di fuori di un attraversamento pedonale e non è riuscito a fermarsi.

## Implementazione di soluzioni

Tutti questi fallimenti dell'intelligenza artificiale erano legati ai dati. Quando si implementano soluzioni di intelligenza artificiale, è necessario porsi domande critiche: Dove sto effettuando il mio ragionamento? L'endpoint è sicuro? Se si sta effettuando tutto il ragionamento nell'endpoint, ad esempio attraverso la rilevazione oggetti tramite una telecamera, è importante assicurarsi che sia sicuro; nessuno dovrebbe essere in grado di manipolare i dati, la telecamera o il modello.

Un'altra domanda è, cosa verrà implementato? Sto implementando una rete neurale o un algoritmo sul campo, o semplicemente sto trasmettendo i dati dal campo a un centro dati per effettuare l'inferenza lì? Inoltre, quando l'IA viene operazionalizzata, è necessario chiedersi con quale frequenza i modelli o gli algoritmi verranno aggiornati.

## Alveare Intelligente

Il flusso di lavoro per lo sviluppo, l'addestramento, il testing, il deployment e le inferenze dell'AI ha bisogno di tre elementi: l'applicazione, il modello e i dati. Questi tre elementi devono migrare nel flusso di lavoro insieme e essere protetti contemporaneamente. È necessario assicurarsi che i dati di produzione non vengano manipolati neppure durante la fase di produzione.

## Minacce di sicurezza AI.

Le minacce per l'AI sono significative, che siano spionaggio, sabotaggio o frodi perché la superficie di attacco è ampia.

## Gli attacchi

Prima vengono i modelli. Un modello può essere manipolato, ad esempio qualcuno che mette adesivi bianchi e neri sui segnali di stop in modo che non vengano riconosciuti come tali o qualcuno che modifica la rilevazione di modelli per attuare attacchi indetecti. I modelli devono essere protetti non solo durante l'addestramento, ma anche durante il testing, la distribuzione e l'inferenza. Critici sono la crittografia, il controllo degli accessi e il controllo dei modelli e delle versioni, proprio come nella sviluppo di un'applicazione.

I dati di formazione e produzione di origine devono anche essere protetti dalla manipolazione.

## Tipi di attacchi

Un articolo del Belfer Center colloca le minacce su un asse del formato e un asse della visibilità. L'asse del formato varia dal fisico al digitale. L'asse della visibilità va dal percettibile all'impercettibile.

## Attacchi fisici

Gli attacchi fisici possono alterare oggetti fisici come l'adesivo sul segnale di stop. Questi attacchi sono stati evidenti fin dall'inizio con la guida autonoma e il riconoscimento facciale. Abbiamo bisogno di una migliore formazione degli algoritmi di intelligenza artificiale per contrastare questi attacchi, utilizzando tecniche di apprendimento rinforzato e di apprendimento di casi negativi.

## Attacchi digitali

Gli attacchi digitali sono più difficili da rilevare poiché non sono visibili. Un attacco potrebbe essere un rumore bianco iniettato nel flusso di dati per confondere l'algoritmo. Questi attacchi sono difficili da contrastare a meno che non venga condotta un'inferenza al margine o venga utilizzata la rilevazione dei modelli. Per questo motivo, è essenziale sapere da dove provengono i dati di origine, sia nell'addestramento, nei test che nella produzione dei dati.

## Identificare le fonti di dati

Le fonti di dati devono essere verificate e testate attraverso fonti di dati pubbliche. I dati open-source non sono ben protetti. Valuta la possibilità di generare fonti di dati in modo da avere maggiore controllo. Se utilizzi una fonte di dati condivisa, utilizza un sistema di controllo delle versioni come GitHub o GitLab per garantire coerenza. Anche i dati di test hanno bisogno di un controllo delle versioni, del controllo degli accessi e di altre misure di sicurezza, proprio come fai di solito in un flusso di lavoro DevOps.

L'ultima e più impegnativa parte è proteggere i dati di produzione. Avvicinarsi il più possibile ai dati durante la deduzione è un buon inizio. Molte speculazioni possono essere fatte direttamente sul bordo con elaborazione neuromorfica e persino con set di istruzioni nei processori Intel per ridurre il rischio di manipolazione dei dati durante il trasporto. Invece, è possibile crittografare i dati e inviarli al centro di dati.

Proteggere e gestire i dati / Sicurezza del flusso di intelligenza artificiale.

Una volta identificate tutte le fonti dei tuoi dati, ci sono tre aspetti fondamentali per la protezione: controllo, sicurezza e crittografia.

La prima cosa è il controllo. Dovresti avere un controllo di versione, librerie protette e un backup e ripristino in caso di file di dati corrotti. Queste sono pratiche standard di buona sicurezza che l'IA dovrebbe adottare come nel caso dello sviluppo di app.

La sicurezza dovrebbe includere l'autorizzazione di accesso, anche alcuni concetti di "zero trust" come dare accesso alle persone che ne hanno bisogno solo per un breve periodo di tempo. Assicurarsi che i modelli non vengano manipolati e che siano vincolati a specifiche applicazioni.

I dati devono essere criptati durante il riposo, durante il trasferimento e durante l'utilizzo. In passato, ciò era costoso in termini di utilizzo della CPU e di tempo, ma ora gran parte della crittografia avviene nel silicio ed è molto veloce con un minimo o nullo ritardo delle prestazioni.

## Chiamata all'azione

I dati sono fondamentali per rendere l'IA di successo e sicura, quindi proteggili e utilizza fin da subito le migliori pratiche sulla sicurezza. Operazionalizza i flussi di lavoro per liberare gli esseri umani dalla monotonia quotidiana del rilascio e del test degli algoritmi di intelligenza artificiale. Automatizza il più possibile e inserisci la sicurezza nel percorso DevOps dell'IA per proteggere i tuoi dati di origine, il modello e l'applicazione.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
