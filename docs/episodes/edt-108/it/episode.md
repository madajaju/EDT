---
layout: posts
title: "Storia delle Comunicazioni Avanzate"
number: 108
permalink: episode-EDT108-it
lang: it
nav_exclude: true
nav_order: 108
tags:
    - 5g
    - advancedcommunications
    - virtualization
    - multicloud
    - technology

date: Tue Oct 04 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Leland Brown
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "In questo episodio, Darren parla con i frequenti ospiti Intel Leland Brown, Ingegnere Principale: Direttore Tecnico delle Comunicazioni Avanzate, e la Dott.ssa Anna Scott, Architetto Capo per il Settore Pubblico, sulla storia delle comunicazioni avanzate."
video: "https://youtu.be/url"
description: "In questo episodio, Darren parla con i frequenti ospiti Intel Leland Brown, Ingegnere Principale: Direttore Tecnico delle Comunicazioni Avanzate, e la Dott.ssa Anna Scott, Architetto Capo per il Settore Pubblico, sulla storia delle comunicazioni avanzate."
---

<div>
{% include transistor.html id="a4e3ec11" title="#108 History of Advanced Communications" %}

{% include youtube.html id="url" %}
</div>

---

La prima generazione di tecnologia telefonica cellulare, il Sistema di Telefonia Mobile Avanzata (AMPS), fu sviluppata alla fine degli anni '70 e all'inizio degli anni '80. All'inizio degli anni '80, fare una chiamata dal proprio veicolo con un ingombrante telefono a sacca era un lusso. Il lusso di effettuare una chiamata da un dispositivo mobile divenne presto una necessità.

Negli anni '90, la tecnologia ha fatto progressi con lo sviluppo dello standard Global System for Mobile Communications (GSM), che descriveva i protocolli per la tecnologia 2G, diventata lo standard globale a metà degli anni 2010. La tecnologia 2G ha iniziato a trasformare il telefono cellulare in qualcosa di più di una semplice chiamata, aggiungendo la possibilità di inviare messaggi e persino giocare ai videogiochi.

3G è stato lanciato all'inizio degli anni 2000 e ha introdotto alcune capacità preliminari di trasferimento dati con internet, che è ancora nelle sue fasi iniziali. Il Wi-Fi non era ampiamente disponibile, ma potevi, ad esempio, accedere alla rete dati di un operatore collegando un telefono a un laptop. Potevi fare al massimo il minimo con velocità di modem o DSL.

Con il 4G, la tecnologia si è trasformata in uno standard unificato, convergendo CDMA e GSM in un unico standard LTE all'interno del Progetto Partnership di Terza Generazione (3GPP). Ogni operatore ha iniziato ad adottare questo standard comune. È stato in questo momento che la banda larga si è diffusa. Leland attribuisce l'avanzamento dell'economia degli anni 2010 al 4G, permettendo a società come Amazon, Netflix e Uber e piattaforme come YouTube, Google e Facebook di esistere e prosperare.

Leland parla del 5G in base a ciò che gli operatori hanno implementato. Il 4G e il 5G sono correlati perché fanno parte della stessa specifica di rilascio di linea. Il 4G LTE avanzato si conclude con il quattordicesimo, mentre il quindicesimo segna l'inizio dell'NR del 5G. In questa transizione, c'è un obiettivo aziendale e una strategia per adottare la nuova tecnologia come parte dello standard. L'obiettivo aziendale è che le aziende hanno già investito nelle loro reti 4G, quindi i componenti core evoluti del pacchetto e RAN delle reti 4G rimangono comunque in uso. Vengono aggiunti una scatola RAN 5G con una frequenza diversa ma ancora collegata al core 4G, chiamata non autonomo.

Darren chiarisce che il 4G è stato rivoluzionario perché ha sbloccato molte nuove cose e ha richiesto tutte nuove apparecchiature, mentre il 5G è più evolutivo perché ha aperto anche nuove cose. Tuttavia, la tecnologia sottostante si basa sullo stesso hardware e core.

Fa parte dell'interfaccia radio utilizzata dallo schema di modulazione fornito dal 5G, ma l'architettura è diversa; rispetto al 4G, è virtualizzata nel 5G e presenta caratteristiche più proprietarie. Ciò porta a molte capacità che diventano parte delle implementazioni del 5G.

Un esempio è un operatore che ha implementato una rete 4G posizionando una scatola RAN accanto a una vecchia scatola 3G. Molte aziende, come Sprint, hanno mantenuto le loro scatole 3G e la rete CDMA per anni. In realtà, il 4G era solo un'altra scatola accanto a una scatola 3G. Il 5G prende quella scatola proprietaria e dà la capacità di distribuire le funzioni di quella scatola su una rete virtualizzata. Una parte della banda base del 5G può ora essere definita dal software per scala in diverse aree rispetto a essere contenuta in un unico sito, scatola o posizione.

Questo significa che puoi aggiungere funzionalità alla tua rete senza sostituire l'hardware. Man mano che passi alle reti autonome, tuttavia, puoi utilizzare una rete 5G e fare qualcosa in loco. Ad esempio, supponiamo che tu abbia un grattacielo invece di dipendere dalla copertura di rete di un'antenna posizionata all'esterno, con un nucleo presso il gestore o una stazione di commutazione. In quel caso, puoi sviluppare una rete in loco creata all'interno di quell'edificio che diffonde copertura e servizi dati in tutto l'edificio.

Questa rete autonoma apre molte nuove possibilità e consente l'ingresso di nuovi attori. Inoltre, permette a organizzazioni come il governo federale e il Dipartimento della Difesa di adottare la tecnologia per i loro casi d'uso. Hanno maggiore flessibilità quando non dipendono fortemente dagli operatori di comunicazione.

Anna nota che oltre ai nuovi giocatori e alle nuove capacità in loco, c'è anche la possibilità di utilizzare lo spettro CBRS. Il modo in cui viene gestito è complesso, ma ci sono dei canali non prioritari che puoi utilizzare gratuitamente e dei canali prioritari, come lo spettro della Marina, che puoi acquistare se hai bisogno di evitare interruzioni. Alcuni stabilimenti di produzione estesi stanno utilizzando lo spettro CBRS, lavorando sia con un vettore primario che non addebita costi per l'uso, sia con un nuovo entrante che configurerà una rete autonoma in loco con CBRS. Questo è un modello molto diverso e ci sono vantaggi reali nella lunghezza d'onda e nella complessità dei sistemi che puoi configurare con il 5G rispetto al Wi-Fi.

Ci sono ancora alcuni vantaggi nel Wi-Fi, ma configurare una rete Wi-Fi robusta può essere complicato, soprattutto se stai spostando grandi pezzi di metallo. Se hai una configurazione stabile, ha senso optare per il Wi-Fi 6, specialmente se l'aspetto economico funziona.

La domanda guida il cambiamento; la maggior parte degli utenti finali si sente a proprio agio con il 4G sui propri dispositivi personali. Allora, perché passare al 5G? Il valore che il 5G porta non è necessariamente legato alle velocità di trasferimento dati più elevate e alla latenza ridotta; questi servizi vengono forniti su ampia scala perché è virtualizzato. Il 5G è molto più basato sul software rispetto al 4G, che si basa principalmente su hardware proprietari. Il 5G può essere virtualizzato in molte posizioni. Il portafoglio di frequenze è dinamico e è possibile utilizzare bande non licenziate, bande con licenza e FCC, quindi ci sono molte più opzioni.

Controlla la seconda parte di questa intervista [qui](episodio-EDT109).



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
