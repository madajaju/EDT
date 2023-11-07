---
layout: posts
title: "Gestione bare metal definita dal software"
number: 132
permalink: episode-EDT132-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 132
tags:
    - metify
    - sdi
    - technology
    - baremetal
    - heterogeneouscompute
    - compute

date: Wed Apr 05 2023 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Ian Evans
    - Mike Wagner

img: thumbnail.png
image: thumbnail.png
summary: "In questo episodio, Darren intervista i fondatori di Metify, Ian Evans e Mike Wagner, riguardo al loro approccio unico alla gestione dell'infrastruttura software-defined bare metal utilizzando lo standard Redfish."
video: "https://youtu.be/ecB9dPexjIM"
description: "In questo episodio, Darren intervista i fondatori di Metify, Ian Evans e Mike Wagner, riguardo al loro approccio unico alla gestione dell'infrastruttura software-defined bare metal utilizzando lo standard Redfish."
---

<div>
{% include transistor.html id="dd6ccded" title="#132 Software Defined BareMetal Management" %}

{% include youtube.html id="ecB9dPexjIM" %}
</div>

---

Con oltre due decenni di esperienza nel settore dei data center, Ian condivide le sue conoscenze sull'ottimizzazione dell'infrastruttura, l'automatizzazione della gestione dei server e la razionalizzazione dei diversi componenti di un data center. D'altra parte, Mike, che ha lavorato precedentemente con IBM e Red Hat, si concentra sulla consulenza vendite e sulle vendite guidate dai canali per comprendere meglio i problemi e i modelli delle aziende nel gestire i loro data center. Insieme, nel 2020 hanno creato Metify per fornire soluzioni di automazione per la gestione di server, storage e dispositivi di rete nei data center, nonostante la crescita dei servizi cloud pubblici come RWC Azure e GCP.

## Automazione del data center

Automatizzare la gestione del data center può avvicinare la gestione on-premise all'esperienza di un cloud pubblico, riducendo i costi. Uno degli elementi vitali di questa trasformazione è la standardizzazione e gli standard aperti come la specifica DMCA redfish per rendere possibile questa automazione. L'ubiquità di questa specifica su schede madri di classe enterprise ne ha reso l'integrazione accessibile a tutti i player del settore. Le pressioni finanziarie e le richieste degli utenti sono fondamentali nel guidare i produttori OEM verso l'implementazione di questi standard aperti. Nel complesso, l'automazione e la standardizzazione possono aiutare i data center a competere con i fornitori di servizi cloud sui costi operativi, migliorando al contempo le capacità di gestione del server.

L'efficienza del datacenter può essere migliorata utilizzando strumenti che consentono l'automazione e l'integrazione con i framework standard. I fornitori hardware affrontano la pressione dovuta alla commoditizzazione della tecnologia e devono differenziarsi offrendo server white box simili ma in scala ridotta. Metify fornisce una singola interfaccia per gestire i dispositivi di qualsiasi produttore purché siano abilitati BMC e rispettino la specifica Redfish. Ci sono standard emergenti per gestire piccoli dispositivi tramite Redfish; la domanda rimane fino a che punto l'estendibilità arriva alle parti specifiche di networking dello stack.

## Cloud ibrido

L'aumento delle strategie di cloud ibrido guida il modo in cui le aziende gestiscono i loro data center, i punti di rete e gli ambienti cloud. La crescita del cloud pubblico è significativa; tuttavia, vi è una massiccia crescita negli spazi del cloud privato. Metify offre un'esperienza simile a quella del cloud dal punto di vista operativo, consentendo agli amministratori di sistema di gestire il loro punto di rete, il data center o più data center tramite un'API standard. Mantenere le API aperte e standardizzate è essenziale affinché i clienti possano utilizzare strumenti di gestione familiari come TerraForm e Ansible. Le tecnologie di cloud ibrido consentono alle aziende di ottimizzare costi, governance, sicurezza ed efficienza.

Uno dei pericoli di uno standard aperto può essere la vulnerabilità a violazioni della sicurezza senza adeguate misure di comando e controllo. Metify affronta questo problema posizionando auditabilità, autorizzazione, accesso e controlli sugli standard aperti per fornire un approccio sistematico alla gestione del bare metal su hardware eterogeneo. Il prodotto di Metify si concentra nel fornire un livello di controllo per prevenire incidenti indesiderati e si integra con strumenti di gestione dei flussi di lavoro per l'automazione.

## BareMetal SDI: Rete BareMetal

Molte moderne tecnologie dei data center si basano sulla virtualizzazione come fondamento del loro piano di controllo della gestione. Tuttavia, la gestione del bare metal rimane un compito tradizionale, manualmente intensivo. Questo approccio unico all'infrastruttura del cloud privato non si basa sulla virtualizzazione. Invece, utilizza l'approccio dell'infrastruttura definita dal software per la gestione del bare metal, consentendo una combinazione di bare metal, VM e container. Questo approccio consente agli amministratori di sistema di gestire l'infrastruttura sottostante in modo più efficace e di fornire un'esperienza cloud senza attriti. Questo approccio può supportare ambienti di elaborazione eterogenei, in cui la CPU, la GPU, la FPGA, la VPU e le NPU possono essere utilizzate per più flussi di lavoro. Con Redfish e un'estensione dello schema, Metify può facilmente controllare nuovi dispositivi e vedono l'ecosistema in espansione come incredibilmente prezioso per lo sviluppo di prodotti.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
