---
layout: posts
title: "Portabilità dell'applicazione con OneAPI"
number: 30
permalink: episode-EDT30-it
has_children: false
lang: it
nav_exclude: true
parent: Episódios
grand_parent: Italiano
nav_order: 30
tags:
    - aiml
    - devops
    - compute
    - technology
    - process
    - oneapi
    - aiops
    - developer
    - people

date: Mon Nov 16 2020 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Con oneAPI, Intel ha creato un ambiente unificato per lo sviluppo software, incentrato sul processing dei dati. Gretchen Stewart, Chief Data Scientist, Public Sector, Intel, discute questa tecnologia con Darren Pulsipher, Chief Solution Architect, Intel, che elimina la necessità di utilizzare un linguaggio diverso per architetture diverse."
video: "https://youtu.be/url"
description: "Con oneAPI, Intel ha creato un ambiente unificato per lo sviluppo software, incentrato sul processing dei dati. Gretchen Stewart, Chief Data Scientist, Public Sector, Intel, discute questa tecnologia con Darren Pulsipher, Chief Solution Architect, Intel, che elimina la necessità di utilizzare un linguaggio diverso per architetture diverse."
---

<div>
{% include transistor.html id="3d30cd84" title="#30 Application Portability with OneAPI" %}

{% include youtube.html id="url" %}
</div>

---

Con oneAPI, Intel ha creato un ambiente software unificato per lo sviluppo, orientato al trattamento dei dati. Si tratta di programmazione parallela dei dati basata su un C++ open source. Diverse tipologie di librerie come MKL, DNN di Intel e altre open source fanno parte del kit di strumenti oneAPI, insieme ad accessori come un traduttore CUDA. Puoi sviluppare software in oneAPI e poi puntarlo alle diverse librerie a seconda di ciò che stai facendo. Ha eliminato la complessità di imparare un linguaggio diverso per diverse architetture.

## Iniziativa Industriale oneAPI - Alternativa alla Soluzione di un Unico Fornitore

Fondamentalmente, un ingegnere del software può scrivere il codice una volta e questo verrà eseguito su diversi processori: CPU, GPU, FPGA, NPU e VPU. A seconda dell'architettura e delle librerie che si stanno utilizzando, potrebbe essere necessaria una ricompilazione, ma non saranno richieste riscritture del codice.

## Potenti librerie di API

Questa versione è solo il primo passo; Intel e altri continueranno a progettare con l'aggiunta di acceleratori per l'intelligenza artificiale, ad esempio. L'idea è che evolverà per offrire agli sviluppatori molta più flessibilità, e che l'astrazione consentirà a molte persone di poter progettare e codificare in modo più semplice, soprattutto dal punto di vista della scienza dei dati e dell'intelligenza artificiale.

Dal punto di vista pratico, uno sviluppatore di software potrebbe scrivere qualcosa sul proprio laptop, provarlo lì, e poi utilizzare lo stesso codice eseguendolo su un cloud completamente equipaggiato con processori neurali, GPU o FPGA. Questo potrebbe essere particolarmente utile nel settore pubblico, dove gli ingegneri stanno scrivendo app speciali che processano in situazioni limite, magari con un FPGA. Non sarà necessario avere un ambiente completo per svolgere il proprio lavoro.

Un altro aspetto interessante è che una volta che Intel incorpora l'apprendimento automatico, oneAPI può analizzare il codice e specificare quali porzioni sarebbero migliori su processori diversi. Esso distribuirebbe il codice nei luoghi corretti per ottenere la massima velocità e prestazioni.

## Iniziativa Industriale oneAPI - Alternativa alla Soluzione Monofornitore

Ci sono molti framework di intelligenza artificiale là fuori, ma oneAPI permette la migrazione di qualsiasi tipo di codice da un linguaggio proprietario a un linguaggio di programmazione open-source. Si basa su SYCL e viene sviluppato sotto il consorzio dell'intera industria chiamato Khronos Group, quindi è una sorta di framework di sviluppo.

## Librerie API potenti

OneAPI ha venti-trenta librerie come MKL, librerie per reti neurali e apprendimento automatico, open CNN o DNN. Tutte sono aperte e fanno parte del consorzio più ampio.

Inoltre, Intel sta procedendo con l'aggiunta del framework TensorFlow e delle relative librerie in oneAPI. Molti framework sono già stati ottimizzati da Intel e vengono incorporati o utilizzano le stesse librerie in modo che gli utenti possano utilizzarle o ampliarle.

## Risorse

Intel ha reso disponibile generalmente oneAPI all'inizio di novembre 2020 ed è stato uno dei momenti salienti della convention virtuale Super Computing dal 17 al 19 novembre.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
