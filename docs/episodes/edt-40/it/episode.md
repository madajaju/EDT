---
layout: posts
title: "Ricerca Medica Collaborativa con Elaborazione dei Dati Riservata"
number: 40
permalink: episode-EDT40-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 40
tags:
    - confidentialcomputing
    - cybersecurity
    - distributedanalytics
    - sgx
    - healthcare
    - data
    - technology
    - edge

date: Tue Feb 23 2021 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Nick Bhadange

img: thumbnail.png
image: thumbnail.png
summary: "Abbattete le barriere per accelerare la ricerca medica per la cura del cancro con il calcolo confidenziale. Nick Bhadange, Technology Specialist, AI-Vets e Darren Pulsipher, Chief Solution Architect, Settore Pubblico, Intel, discutono la necessità di calcolo confidenziale nel settore sanitario e i potenziali vantaggi attraverso casi d'uso."
video: "https://youtu.be/url"
description: "Abbattete le barriere per accelerare la ricerca medica per la cura del cancro con il calcolo confidenziale. Nick Bhadange, Technology Specialist, AI-Vets e Darren Pulsipher, Chief Solution Architect, Settore Pubblico, Intel, discutono la necessità di calcolo confidenziale nel settore sanitario e i potenziali vantaggi attraverso casi d'uso."
---

<div>
{% include transistor.html id="558eb1c5" title="#40 Collaborative Medical Research with Confidential Computing" %}

{% include youtube.html id="url" %}
</div>

---

## Perché abbiamo bisogno della elaborazione riservata?

L'infrastruttura informatica attuale è costruita con un'enfasi sulla condivisione e l'apertura: internet è gratuito e i dati dovrebbero essere gratuiti. Questo è stato un problema per quanto riguarda la sicurezza. Abbiamo implementato alcune soluzioni che funzionano bene; sappiamo come crittografare i dati quando vengono archiviati e quando sono in transito. Nonostante ciò, i dati possono essere attaccati in vari modi mentre vengono letti, analizzati e utilizzati.

I dati sensibili rimangono vulnerabili, che si tratti di dati finanziari, medici o di posizione, sia dal punto di vista della visibilità che dell'integrità dei dati.

Nel trattare i dati nel settore sanitario, vi sono strati aggiuntivi di complessità. Esistono molte norme e regolamenti, come l'HIPAA, e ogni stato ha le proprie norme riguardanti i dati medici. Nonostante la complessità e il numero di parti coinvolte, la computazione confidenziale è possibile, permettendo di condividere dati tra parti che per loro natura non si fidano l'una dell'altra.

Per riservatezza, dobbiamo considerare alcuni diversi fattori: l'integrità dei dati, la riservatezza dei dati e l'integrità del codice.

## Problemi critici di privacy e sicurezza dei dati.

I record sanitari di un individuo, specialmente negli Stati Uniti, sono dispersi ovunque tra medici, specialisti, laboratori e ospedali. La maggior parte delle persone non ha un facile accesso ai propri record; è quasi impossibile creare una visione completa della propria salute. Il computing confidenziale può aiutare a superare queste barriere.

Prima di tutto, può garantire che qualsiasi dato che condividi sia protetto dalla prospettiva dell'integrità dei dati; non sarà modificato da nessuno. Può essere confidenziale, ovvero tokenizzato o crittografato, ma può comunque essere utilizzato per calcoli. Ad esempio, se una parte desidera effettuare analisi su alcuni dati, non è necessario conoscere informazioni come nomi, date di nascita o numeri di previdenza sociale. Quindi, se quelle parti dei dati possono essere tokenizzate o crittografate, possono essere condivise per l'analisi a condizione che l'altra parte sia affidabile.

Questo è il punto in cui le misure di sicurezza come l'attestazione giocano un ruolo, in modo che le parti possano dimostrare la propria identità. E quell'attestazione può essere legata fino al livello dell'hardware, agli ambienti di esecuzione affidabili che l'hardware fornisce. In questo modo, non ci si limita a fidarsi del trasporto e del punto finale, ci si fida anche dell'applicazione e di come utilizzerà i dati.

Ci sono due approcci di base a questo riguardo. Il primo è l'SDK dell'applicazione, il che significa che lo sviluppatore può decidere come suddividere il proprio codice in componenti affidabili e non affidabili. L'altro approccio è quello di avere un sistema di crittografia in esecuzione che può essere costruito su di un ambiente di esecuzione affidabile, riducendo al minimo l'effort richiesto per convertire un'applicazione esistente in qualcosa che può essere eseguito in quell'ambiente.

Con un ambiente di esecuzione affidabile basato su hardware che protegge le applicazioni e i dati in uso, diventa molto difficile per un attore non autorizzato, anche se ha accesso fisico all'hardware, privilegi di root o diritti di amministratore all'ipervisore, accedere all'applicazione protetta e ai dati. Il paradigma del calcolo confidenziale mira a consentire l'eliminazione del provider di cloud anche dalla base di calcolo affidabile. In questo modo, solo l'hardware e l'applicazione stessa protetta si trovano all'interno del perimetro di attacco.

Questi ambienti informatici consentono ai CSP (Cloud Service Providers) di sfruttare al meglio ciò che l'hardware può offrire e la migliore sicurezza possibile, su cui l'utente finale ha il pieno controllo. Ogni parte può determinare le proprie politiche e le gerarchie delle politiche, come quelle statali e federali, e ogni fornitore di informazioni può decidere quali politiche applicare e a chi.

## Studio clinico di evidenza del mondo reale

Unire tutti i dati e dargli un senso è una grande sfida nell'industria sanitaria. Il numero delle impostazioni di privacy e di condivisione dei dati che sono in atto tra i diversi fornitori, dispositivi, posizioni geografiche, ecc. rende attualmente impossibile ciò.

AI-Vets, Intel e alcuni partner stanno lavorando insieme a questo problema. L'architettura brillantemente semplice consente l'utilizzo in ambienti disparati, tipi di dati e politiche, ma è in grado di eseguire analisi centralizzate.

Un esempio della nostra implementazione è una piccola prova di concetto: Come si analizza tra diverse parti come ospedali, ambienti di ricerca e laboratori, ognuno con i propri dati e trial che potrebbero essere in corso in un ambiente clinico? Ad esempio, come possiamo trovare una correlazione tra le persone che assumono il farmaco X, ad esempio per il diabete, e hanno la condizione Y, ad esempio il cancro, quando il farmaco X non ha nulla a che fare con il trattamento della condizione Y? Questi due set di dati non sarebbero nello stesso luogo perché sono gestiti da diversi fornitori.

Se tuttavia i fornitori facessero parte di un ecosistema in cui potessero determinare le politiche da applicare al proprio punto finale, potremmo avere un'applicazione centralizzata, un portale centrale per la ricerca, che ha connessioni a questi punti finali. Ci sarebbe una gestione delle chiavi e attestazione di terze parti per verificare le credenziali e le autorizzazioni reciproche, in modo che tutte le parti possano fidarsi l'una dell'altra.

Quello è un aspetto della fiducia, ma dobbiamo anche proteggere i dati che verranno estratti, interrogati e trasmessi. Per conseguire questo, possiamo gestire i dati e le applicazioni all'interno di enclave sicure e crittografate. I dati vengono gestiti utilizzando le politiche impostate da ciascun utente, come l'oscuramento delle date di nascita, i numeri di previdenza sociale, ecc. Queste informazioni possono essere tokenizzate in modo che diventino spazzatura completa nelle mani non autorizzate.

Il portale centrale può eseguire una query che si estende su più endpoint e unisce diversi tipi di dati nel suo sistema in esecuzione e ne effettua un'analisi. Quindi, invece di dover caricare tutto in un data lake e poi fare l'analisi, viene fatto in tempo reale. Non c'è attesa che i dati vengano pubblicati o puliti prima applicando tutte quelle politiche; accade dinamicamente e al volo.

Questo permette di ottenere notevoli intuizioni. Durante la pandemia, ad esempio, se dovessimo aspettare ogni giorno per ottenere i dati e eseguire analisi complesse su di essi, sarebbe difficile. Se fossimo in grado di accedere a dati in tempo reale provenienti da tutti questi diversi sistemi in tutto il paese e nel mondo, ma allo stesso tempo condividerli in modo sicuro, potremmo arrivare a intuizioni uniche che altrimenti non sarebbero possibili.

Abbiamo già visto ciò in alcuni casi di studio per siti clinici che abbiamo fatto con il nostro partner Fortanix. Hanno una linea di prodotti che rende facile per diverse entità definire le loro politiche in un ambiente di calcolo confidenziale, verificare le identità reciproche e gestire chiavi e fiducie. Il concetto di ambienti di esecuzione affidabili è presente da tempo ed è diventato di uso comune, quindi è diventato più facile sfruttarlo. I casi d'uso per questo sono fantastici.

## Rilevazione automatica del COVID-19 da immagini radiografiche del torace

In alcuni casi d'uso, non è solo necessario proteggere i dati, ma anche la proprietà intellettuale associata ad alcuni algoritmi specializzati. Ad esempio, per rilevare automaticamente il COVID dalle immagini a raggi X, potrebbero esserci dati radiologici, dati del paziente e potrebbe esserci un algoritmo proprietario per l'analisi. Le enclave possono proteggere sia i dati che le applicazioni da occhi indiscreti.

La zona sicura protegge anche le altre macchine nella rete perché se qualcuno inviasse qualcosa di losco verso i nodi finali, il sistema di gestione delle chiavi ne impedirebbe lo scambio poiché non è correttamente attestato. Le parti scelgono esattamente con quali fonti di dati la zona sicura può comunicare ed è bloccata sia per ciò che entra che per ciò che esce.

## Registri sanitari elettronici (eHR)

I record sanitari sono un grande caos negli Stati Uniti, con accordi HIPAA cartacei non applicabili, ecc., e tutto è sparpagliato tra diverse entità. Un caso d'uso che potrebbe essere un buon modello da seguire è quello del governo tedesco. Hanno stabilito che i dati sanitari devono essere conservati in registri elettronici e le applicazioni devono essere implementate in ambienti di esecuzione affidabili. Il paziente è l'utente finale e determina quali dati sono disponibili e per chi.

Quel livello di dettaglio in termini di ciò che è disponibile per l'utente finale è enorme. E non solo tutti quei dati sono raccolti e condivisi dai diversi sistemi, sono in enclave sicure, quindi sono completamente protetti dal mondo esterno. Se qualcuno non autorizzato riuscisse ad accedere ai dati stessi, sarebbero completamente privi di significato.

Questi ambienti di esecuzione affidabili sono il primo passo nella direzione di controlli facilmente comprensibili e facilmente applicabili.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
