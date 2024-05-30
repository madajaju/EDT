---
layout: posts
title: "VAST Data Rivisitato"
number: 48
permalink: episode-EDT48-it
lang: it
nav_exclude: true
nav_order: 48
tags:
    - vastdata
    - supplychainoptimization
    - flexibility
    - highperformancecomputing
    - multicloud
    - operationalefficiency

date: Wed Apr 28 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Randy Hayes

img: thumbnail.jpg
image: thumbnail.jpg
summary: "In questo episodio, Darren fa il punto con Randy Hayes, attualmente VP delle vendite per il settore pubblico di VAST Data, sei mesi dopo l'ultima conversazione per vedere come stanno nel settore, cosa c'è di nuovo in VAST, e casi d'uso interessanti. Il loro nuovo prodotto, Gemini, offre un modello di business di archiviazione diverso."
video: "https://youtu.be/url"
description: "In questo episodio, Darren fa il punto con Randy Hayes, attualmente VP delle vendite per il settore pubblico di VAST Data, sei mesi dopo l'ultima conversazione per vedere come stanno nel settore, cosa c'è di nuovo in VAST, e casi d'uso interessanti. Il loro nuovo prodotto, Gemini, offre un modello di business di archiviazione diverso."
---

<div>
{% include transistor.html id="d6fc5e00" title="#48 VAST Data Revisited" %}

{% include youtube.html id="url" %}
</div>

---

VAST Data è cresciuta rapidamente negli ultimi sei mesi, con un team in espansione e impressionanti vendite come circa 70 petabyte di storage flash al governo federale. Oltre alla condivisione generale di file con i loro sistemi di storage all-flash, hanno interessanti casi d'uso in settori come il sequenziamento di prossima generazione, la microscopia confocale e i carichi di lavoro di simulazione del tunnel del vento.

La piattaforma dell'azienda consente di risolvere problemi di lettura casuale perché tutti i dati si trovano su flash senza costi esorbitanti; la piattaforma gestisce un volume elevato di dati con bassa latenza.

## Tecnologia VAST e drive Intel Optane

VAST utilizza le unità Optane di Intel per ottenere una parità di lettura e scrittura, tra gli altri vantaggi. Poiché Optane è una memoria persistente, non ci sono problemi di coerenza della cache e non c'è bisogno di DRAM, il che rappresenta un grande vantaggio architettonico per evitare un guasto o una perdita di dati. Il costo totale per utente diminuisce anche perché non è necessario acquistare grandi macchine con molta memoria per lo storage dei file se si desidera più velocità. Quel livello viene eliminato.

Scalabilità e flessibilità sono due altri vantaggi, poiché è possibile aggiungere ulteriori casse dati (casse D) senza influire sulle prestazioni, e sono completamente compatibili anche con diverse generazioni di flash. Non esiste un singolo punto di errore e non c'è un limite teorico; VAST ha testato fino a 100 petabyte.

Puoi migliorare le prestazioni aggiungendo delle caselle client (C boxes), indipendenti dalle caselle D. Capacità con flash è praticamente gratuita, ma devi esporre quel flash con la CPU. Le caselle C sono totalmente prive di stato, quindi puoi espanderle o ridurle in modo dinamico. VAST garantisce un tempo di attività perché hai pieno accesso a ogni PCP sul retro.

A seconda delle esigenze di performance del cliente, possono esserci diversi numeri di box D e box C; ad esempio, un cliente potrebbe non avere bisogno di ulteriori performance, ma di maggiore capacità, quindi il cluster potrebbe avere, diciamo, 11 box C e 37 box D.

Se hai una scatola C e una scatola D, disponi di circa 40 gigabyte al secondo di larghezza di banda, che è il modello base. Ogni aggiunta di una scatola D aggiunge altri 40 gigabyte di larghezza di banda. Una scatola C non satura tutti gli IOPS, quindi se aggiungi un'altra scatola C puoi ottenere 350.000 IOPS da una scatola. Poiché il flash è vincolato dalla CPU, più CPU aggiungi, più ti consente di scalare.

## Nuovo modello di business per lo storage

Il nuovo prodotto di VAST Data, Gemini, consente ai clienti che necessitano di elevate prestazioni senza molta capacità di licenziare solo la quantità di hardware necessaria dal loro produttore di contratti, il che comporta un enorme risparmio di costi. I clienti possono aumentare e pagare la capacità man mano che ne hanno bisogno, anziché sostenere un costo iniziale per le future esigenze di capacità.

Dal punto di vista dell'OPEX, questo ha senso per molte aziende. Ad esempio, per un cliente, un sistema all-flash da 30 petabyte che gestisce un terabyte e mezzo di larghezza di banda, il costo è inferiore a S3 di Amazon per l'accesso poco frequente. Questo è solo per un anno; guardando avanti, è effettivamente inferiore a Glacier se consideriamo il modo in cui Amazon addebita, per gigabyte al mese. E c'è la flessibilità di tornare a un modello CAPEX se ciò ha più senso in seguito.

È importante notare che VAST sta presentando un'appliance, non uno storage come servizio, il che può essere un incubo di supporto a causa di tutte le variazioni hardware e firmware, dei supporti che si stanno utilizzando, delle interconnessioni, ecc... il che porta ad un'enorme complessità. VAST sta ancora spedendo le stesse scatole e server; è solo un modello di business diverso per consentire flessibilità nel consumo dello storage.

Alcune aree interessanti in cui VAST potrebbe essere utile sono nella ricerca medica, come ad esempio la patologia digitale, che comporta un'enorme quantità di dati spesso difficile da accessare per i ricercatori poiché memorizzati su supporti economici e lenti. Un'altra possibilità è la medicina di precisione basata sul patrimonio genetico di una persona. Inoltre, l'utilizzo di intelligenza artificiale per analizzare le acquisizioni di pacchetti potrebbe essere utile per prevedere attacchi da parte di avversari avanzati.

Un altro caso d'uso promettente è un cliente con tutti i propri dati memorizzati in un sistema di archiviazione flash VAST invece che nel cloud, ma esegue tutte le proprie elaborazioni nel cloud, magari riportando solo i risultati. I risultati sono tipicamente molto piccoli, forse un paio di byte di dati, e l'estrazione è a basso costo. Questo tipo di modello, ad esempio, potrebbe generare valore tramite analisi su dati obsoleti attualmente solo immagazzinati e troppo costosi da spostare.

C'è molta flessibilità nel fare un approccio ibrido o multi-cloud in cui si ha un sistema di archiviazione centralizzato in loco che può essere accessibile tramite più fornitori di cloud.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
