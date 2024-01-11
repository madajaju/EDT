---
layout: posts
title: "Comprendere i problemi dalla periferia al data center."
number: 58
permalink: episode-EDT58-it
lang: it
nav_exclude: true
nav_order: 58
tags:
    - data
    - edge
    - compute
    - edgemere
    - edgetocloud
    - cybersecurity
    - technology
    - process

date: Wed Jul 21 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect di Intel, esamina i problemi comuni nelle architetture dal bordo al centro dati che ha osservato e discusso con i clienti del settore pubblico. Egli presenta l'architettura ideale per risolvere questi problemi."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solution Architect di Intel, esamina i problemi comuni nelle architetture dal bordo al centro dati che ha osservato e discusso con i clienti del settore pubblico. Egli presenta l'architettura ideale per risolvere questi problemi."
---

<div>
{% include transistor.html id="51a240b0" title="#58 Understanding Edge to Data Center Problems" %}

{% include youtube.html id="url" %}
</div>

---

## Integrazione nella Missione

Ci sono molte componenti in movimento quando si mettono in atto capacità in missione, specialmente nel Dipartimento della Difesa, ma anche negli ospedali degli Affari dei Veterani, nella Sicurezza Nazionale, nell'FDA e nella FEMA, ad esempio, e nel riportare i dati dai dispositivi sul campo alle stazioni di terra e ai data center regionali ed aziendali. I dati devono essere utilizzabili e affidabili per flussi di analisi complessi nei processi di intelligenza artificiale e devono giungere nelle mani degli analisti affinché possano prendere decisioni basate sui dati grezzi.

## This is the translation to Italian:
"Driver per Edge: Latenza, Larghezza di banda, Sicurezza, Connessione"

Parte del puzzle è che i dispositivi periferici sono diventati più sofisticati e stanno raccogliendo più dati di quanti potremmo mai inviare a 5G. Le speranze che il 5G conquistasse tutti i dati e li rendesse disponibili in modo fluido al datacenter non si sono mai concretizzate con gli sviluppi dei dispositivi IoT.

Uno degli architetture originali attorno all'IoT fu creata da Cisco, chiamata nebbia. L'idea della nebbia era che il datacenter connettesse la nebbia ai dispositivi periferici, in modo che parte dell'elaborazione e della connettività avvenisse lì. Se la connettività di rete è affidabile e costante, questo funziona bene con una larghezza di banda sufficiente. Tuttavia, la quantità di dati generata ora dalla periferia da queste organizzazioni supera qualsiasi quantità di larghezza di banda disponibile.

Con l'IoT, solo una porzione dei dati viene trasferita al data center, quindi in generale il valore dei dati si manifesta solo quando vengono analizzati lì. Il problema è che il data center non può archiviare e assorbire tutti i big data. Anche l'invio dei dati al cloud non risolve il problema, poiché il cloud non può consumare tutti i dati che si trovano sul bordo. Pertanto, vogliamo evitare di inviare tutti i dati al data center per raccogliere il valore e invece spingere il valore dei dati il più vicino possibile al bordo, riducendo la quantità di volume dei dati che ritorna al data center.

Naturalmente, non tutti i dati possono essere spinti verso il bordo; deve esserci una correlazione tra diversi dispositivi periferici. Il valore deve trovarsi in un luogo più centralizzato, non necessariamente nel datacenter centrale, ma magari in uno di questi nebbie intermedie o datacenter regionali. La chiave è spostare i dati in modo intelligente e spingere il valore dei dati il più vicino possibile al bordo in maniera ripetibile e sostenibile. Facendo così, possiamo reagire molto più rapidamente al bordo.

## Livello fisico comune.

Per superare alcuni di questi problemi, abbiamo prima bisogno di un livello fisico comune. Ciò significa che è comune dal data center attraverso i livelli di nebbia fino ai dispositivi periferici; c'è un modo per gestire e controllare i dispositivi e ottenere assistenza da essi in modo affidabile e comune. Questo non significa necessariamente la stessa macchina, ma un dispositivo minimale con un'interfaccia comune. Un altro vantaggio del livello fisico comune è che se scrivi codice per un'applicazione, può essere eseguito ovunque in questo ecosistema. Intel ha una tecnologia eccellente per questo, come ad esempio oneAPI, che fa molto del lavoro in modo che tu possa scrivere il codice una volta, compilare i binari per i diversi tipi di dispositivi, caricarlo nel livello fisico comune e farlo eseguire correttamente. In breve, i vantaggi sono un modello operativo comune, un modello di sicurezza comune e una modalità di funzionamento scrivi-una-volta-esegui-ovunque.

## Software Defined Infrastructure: Infrastruttura Definita dal Software

SDI si applica al datacenter nelle nuvole private e pubbliche con le loro API definite dal software. Con SDI nel margine, otteniamo modi comuni di spostare i dati. Possiamo allocare risorse nel margine nel datacenter in qualsiasi momento e possiamo spostare i dati in questo modo in modo più fluido.

## Livello di gestione delle informazioni distribuite

Dobbiamo essere più intelligenti nel gestire e classificare i dati, spostando i dati solo dove verranno elaborati, che sia sul bordo, in un datacenter regionale o nel cloud. Aspetti importanti sono la catalogazione e il riutilizzo dei dati, oltre a rispettare i requisiti di conformità e sicurezza. Il vantaggio di questa distribuzione della gestione delle informazioni è che si inviano meno dati al datacenter, si spostano meno dati e si crea valore sul bordo.

## Livello di gestione del servizio

Al fine di realmente spingere il valore fino al limite, abbiamo bisogno di poter distribuire le applicazioni fino al limite. È qui che entra in gioco uno strato di gestione del servizio, o un ecosistema di contenitori. Ciò consente di spingere i microservizi fino al limite, alla nebbia, al datacenter o al cloud in modo ripetibile e affidabile. Se, ad esempio, un datacenter regionale si blocca, non è necessario dipendere da esso per continuare a utilizzare il service mesh.

## Livello di servizio dell'applicazione

Uno strato di servizio di applicazione coordina le diverse applicazioni in modo tale da poter creare flussi di lavoro che generano il vero valore commerciale dai dati. Semplicemente spostare i dati o farli passare attraverso un motore di analisi non è sufficiente. I dati devono passare dal motore di analisi a una postazione di lavoro dell'analista. Alcuni strumenti in questo strato potrebbero essere l'automazione dei processi robotici e le pipeline DevOps. È anche qui che è possibile applicare la sicurezza e la conformità a livello di applicazione.

## Sicurezza e livelli di identità

L'aspetto chiave dello strato dell'identità è quello di creare fiducia tra le entità che sono correttamente identificate. Dobbiamo capire chi sta accedendo a cosa e quali dispositivi stanno accedendo a quali dati, in quale momento e dove. L'identità va oltre il tipico utente e coinvolge l'identità delle applicazioni, dei dispositivi edge, della nebbia, dei data center e del cloud.

Il gemello dell'identità è la sicurezza. Qui abbiamo rilevamento, rimedio, cifratura ed esecuzione dell'autenticazione di fiducia. Questo porta a affidabilità, dati fidati e conformità. Ora, i dati intelligenti possono essere inviati all'estremità che poi vengono popolati fino al data center, ma non stai spostando enormi quantità di dati grezzi, solo ciò di cui hai bisogno in modo sicuro.

## Vista ad alto livello

Per avere un'architettura edge to cloud di successo e ripetibile, sono necessi tutti questi diversi elementi. Abbiamo visto alcune organizzazioni costruire un'architettura edge to cloud specifica per uno scopo, e quando implementano una nuova funzionalità in quel contesto, rimangono bloccate. Ad esempio, se codificano duramente i dati che risiedono nell'edge perché saranno sempre elaborati nell'edge, o nel datacenter per un'applicazione che viene sempre elaborata nel datacenter, ciò comporta rigidità. Ciò aumenta anche il tempo necessario per implementare nuove funzionalità, forse anni invece di mesi. Se prendiamo gli apprendimenti dai rilasci delle applicazioni in edge to cloud volta dopo volta e iniziamo a generalizzarli, scopriamo rapidamente che rientrano in uno dei livelli che abbiamo identificato.

Per ulteriori informazioni, consulta questo articolo (includi il link) riguardo alla visione ad alto livello di questa architettura di edge to cloud. Non siamo prescrittivi su cosa inserire in quelle caselle, ma la chiave è capire i casi d'uso che abbracciano. Abbiamo idee su cosa è presente in ciascuno degli strati e stiamo sviluppando ecosistemi per soddisfare le esigenze uniche della tua organizzazione all'interno degli strati.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
