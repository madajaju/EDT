---
layout: posts
title: "Sfruttando i Datacenter Virtuali con Verge.io"
number: 96
permalink: episode-EDT96-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 96
tags:
    - privatecloud
    - cloud
    - compute
    - technology
    - sdi
    - virtualdatacenter
    - vergeio

date: Wed Jul 20 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Aaron Reid
    - Chris Lehman

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect di Intel, Aaron Reid, Principal Systems Engineer di https://www.verge.io/ e Chris Lehman, Senior VP of Sales, discutono casi d'uso per il software del data center virtuale di Verge.io."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solutions Architect di Intel, Aaron Reid, Principal Systems Engineer di https://www.verge.io/ e Chris Lehman, Senior VP of Sales, discutono casi d'uso per il software del data center virtuale di Verge.io."
---

<div>
{% include transistor.html id="dd535cf2" title="#96 Leveraging Virtual Datacenters with Verge.io" %}

{% include youtube.html id="url" %}
</div>

---

Aaron è nel settore dell'informatica da oltre 20 anni. È un ingegnere pre-vendita, il che significa che parla con i clienti del valore e delle caratteristiche di Verge.io e li aiuta a definire le loro esigenze.

Chris è il responsabile delle vendite presso Verge.io con 25 anni di esperienza in aziende di software tecnologico. Descrive Verge.io come un'azienda con una feroce concentrazione sulla soddisfazione del cliente e sul successo del software.

Il termine "centro dati virtuale" è per semplicità. La piattaforma è multi-tenant, quindi ci sono tenant indipendenti e nidificati con tutte le risorse richieste all'interno di un centro dati, dalla CPU alla memoria allo storage alla rete, e vengono mantenuti isolati. Tuttavia, allo stesso tempo, è possibile crearli su richiesta. Proprio come è possibile creare una macchina virtuale su richiesta, spesso con un modello predefinito, è possibile fare la stessa cosa con un tenant che racchiude tutto nel centro dati virtuale. È possibile crearli tramite un motore di ricette o da zero. È possibile clonarli o prendere un'istantanea di uno di questi tenant facilmente.

Questi data center virtuali possono essere grandi e complessi. Il cliente più grande di Verge.io gestisce oltre 60 nodi e tenant multipli nel loro ambiente. Le uniche restrizioni sono ciò che è integrato nel cluster Verge.io sul retro. Ad esempio, supponiamo che tu abbia quattro terabyte di memoria e 100 terabyte di storage, e 64 core nella tua CPU. Potresti assegnare tutte queste risorse a quel tenant, dividerle come preferisci, a metà o a terzi, e costruire i tenant in questo modo.

Se, per esempio, allocassi alcuni nodi allo sviluppo, alcuni al test e il resto alla produzione, sarebbero diversi tenant e potresti creare istantanee tra di essi e passare alla produzione. In questo caso, potresti persino avere più ambienti di produzione con aggiornamenti blue-green.

Molti dei clienti di Verge.io sono fornitori di servizi gestiti. Utilizzano la multi-tenancy per i loro clienti finali e, con ciò, dedicano ambienti sicuri di zero trust. I clienti possono avere il proprio ambiente cloud e possono provvedere a carichi di lavoro virtuali secondo necessità.

Ci sono anche casi d'uso significativi per i clienti IT di tipo enterprise che desiderano, ad esempio, ambienti di sviluppo e test di tipo blue-green o ambienti diversi con requisiti di conformità alla sicurezza diversi come SOX o HIPAA. Verge.io ha diversi clienti delle grandi istituzioni educative che stanno effettuando delle ricerche conformi. Certificano il loro cluster una sola volta; poi, possono fornire un ambiente di ricerca conforme a uno dei loro ricercatori in meno di un'ora. In passato, poteva richiedere mesi per essere operativi in un ambiente conforme.

Per gli aggiornamenti, sebbene gli utenti debbano utilizzare strumenti a livello di applicazione o all'interno dei carichi di lavoro VM, la "ricetta" dell'ambiente per cose come le regole del firewall o le impostazioni di configurazione su come vengono mappate le risorse per i carichi di lavoro può essere aggiornata in modo del tutto fluido. È anche possibile prendere una macchina virtuale in un ambiente in esecuzione con una nuova conformità e spostarla in un nuovo ambiente.

Verge.io è utile anche per la sicurezza. Una delle più grandi società di quant in Europa è un buon caso d'uso della sicurezza. Scattano una foto di tutto il loro ambiente e quindi conducono esercitazioni tra squadre red e blue, cercando vulnerabilità di sicurezza, verificando patch, ecc.

VDI può essere eseguito nell'ambiente. Verge.io collabora con un'azienda per il supporto VDI. Verge.io controlla le risorse, la CPU e la memoria. Supportano anche la GPU e il collegamento diretto alla GPU fisica. Questo è un caso d'uso importante per alcuni clienti, specialmente nel settore ingegneristico o nel carico di lavoro petrolifero e del gas. La GPU virtuale permette un'economia favorevole perché il costo viene ripartito tra più utenti.

Una perfetta soluzione per Verge.io sono i casi d'uso in periferia. Un esempio tipico è il punto vendita. Se un cliente al dettaglio ha cento negozi, potrebbe aver bisogno di due o tre applicazioni VM di VM in ogni negozio. Poiché Verge.io ha una piccola impronta hardware, una volta che hai almeno due server, puoi metterli nel data center del caso in periferia e creare queste VM. Inoltre, grazie alle funzioni di snapshot e replica, queste configurazioni possono essere copiate e incollate in tutti gli ambienti diversi. Puoi aggiornare le ultime configurazioni in tutti loro, non solo le patch del sistema operativo ma anche le regole del firewall.

Un futuro spazio entusiasmante per Verge.io è rappresentato dai sistemi di guida automatica a causa del volume di dati. Molti produttori stanno testando i veicoli in siti remoti e spedendo fisicamente i dischi rigidi. Immagina se i dati potessero essere elaborati in loco, completamente ridondanti con i costi allettanti ad essi associati, poi i dati potrebbero essere trasportati su un'ampia area invece che su un disco e un camion.

Per ulteriori informazioni su Verge.io, visita http://verge.io.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
