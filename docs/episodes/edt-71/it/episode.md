---
layout: posts
title: "Governance dei dati moderna"
number: 71
permalink: episode-EDT71-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 71
tags:
    - datagovernance
    - data
    - immuta
    - dataaccess
    - identitymanagement
    - ceo
    - technology
    - process

date: Wed Dec 01 2021 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Matthew Carroll

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect presso Intel, prosegue la sua approfondita discussione sulla realtà e sul futuro della moderna governance dei dati con Matthew Carroll, CEO di Immuta. In questo episodio, discutono di Classificazione dei Dati, Politiche e Governance."
video: "https://youtu.be/Qv8Y32qjaGA"
description: "Darren Pulsipher, Chief Solution Architect presso Intel, prosegue la sua approfondita discussione sulla realtà e sul futuro della moderna governance dei dati con Matthew Carroll, CEO di Immuta. In questo episodio, discutono di Classificazione dei Dati, Politiche e Governance."
---

<div>
{% include transistor.html id="068a1dff" title="#71 Modern Data Governance" %}

{% include youtube.html id="Qv8Y32qjaGA" %}
</div>

---

Nella moderna governance dei dati, la prima premessa è che è necessario separare la politica dalla piattaforma.

Il secondo è che non può esserci alcuna ontologia. Se qualcuno prova a creare uno schema universale di tutto, è impossibile, ma è necessario avere uno schema per applicare una politica. Quindi, se un utente desidera unire due colonne, è necessario avere una nuova politica. I dati sensibili devono essere scoperti, sia attraverso identificatori diretti che indiretti. Gli identificatori indiretti sono più difficili e devono essere applicate delle tecniche per mitigare il rischio di attacchi di collegamento.

La terza premessa è l'introduzione di una serie di tecniche per migliorare la privacy, come la mascheratura, la censura, l'autorizzazione, ecc.

Questi strumenti sono automatizzati come parte della moderna governance dei dati. Un esempio parallelo è come una volta si doveva essere maghi per rimuovere l'effetto occhi rossi da una foto. Ora, fai clic su un pulsante e l'effetto occhi rossi scompare. È la stessa cosa per la privacy. Abbiamo bisogno di quel semplice pulsante per trovare automaticamente un potenziale identificatore indiretto quando c'è un rischio di riesposizione superiore a molto basso.

Oltre alla privacy, ci sono una miriade di altre cose con i dati che dovrebbero essere automatizzate prima della classificazione. Sebbene Immuta non approfondisca la trasformazione dei dati e questi flussi di dati, forniscono un'API e un'interfaccia a riga di comando. Gli ingegneri che stanno costruendo queste pipeline possono fare il loro lavoro, e Immuta fornirà loro le regole, e l'aggiornamento delle regole può far parte della pipeline. Vogliono essere un condotto per quel livello.

Ci sono alcuni nuovi ruoli in quest'ambito come il responsabile dei dati e l'ingegnere della governance dei dati, che sono separati dall'ingegnere dei dati. E poi gli utenti dei dati sono veramente tre utenti separati con tre bisogni separati.

Prima di tutto, ci sono scienziati dei dati che hanno competenze specializzate e hanno bisogno dei dati in modo specifico. A volte hanno bisogno di strumenti specifici e di un ambiente di calcolo specifico in qualche parte del mondo per portare a termine la loro missione.

D'altra parte, gli ingegneri dei dati e gli ingegneri analitici, l'uno costruendo i flussi di lavoro e l'altro sostenendo i flussi di lavoro, hanno bisogno di accesso rapido a un sistema emergente quando qualcosa si rompe. Lo inseriscono in un flusso di lavoro e lo consegnano a qualcuno, controllando che sia aggiornato.

Infine, ci sono i governatori che stanno cercando di tenere il passo con le regole.

Questi utenti hanno tutte opinioni e esigenze molto diverse riguardo alla governance. Quando si applica una nuova governance, la cosa più importante è considerare questi gruppi come portatori di interessi separati.

Se si pensa a tutti questi ruoli in modo binario, come ingegneri dei dati, alla fine si verificano molte riunioni, quindi è impossibile scalare. Abbiamo bisogno di creare una relazione simbiotica tra operazioni dati, scienza dei dati, analisi dei dati e governance. Un modello di esempio è Salesforce o ServiceNow, dove c'è un intero flusso di lavoro dall'inizio alla fine e non sono necessarie riunioni. Questo sarebbe vero data ops.

Immuta ha, filosoficamente, un approccio basato sull'attributo piuttosto che basato sul ruolo. Il problema con un approccio basato sul ruolo è che si accumulano sovraccarichi man mano che si aggiungono inevitabilmente ruoli. Un'organizzazione farmaceutica, ad esempio, aveva oltre 800.000 ruoli perché i ruoli non possono mai essere eliminati a causa della necessità di riprodurre le prove sui farmaci. Il sovraccarico dei ruoli può diventare rapidamente un problema di scala.

L'accesso basato sugli attributi è la chiave per contrastare questo problema. Piuttosto che aggiungere costantemente ruoli, gli utenti hanno attributi specifici e coerenti. Ad esempio, un attributo di un utente potrebbe essere che sono contrassegnati in modo che possano vedere solo il proprio stato. Con l'accesso basato sui ruoli, ogni stato, che sia visibile o meno, dovrebbe essere scritto nel sistema. Questa moderna gestione dell'identità è molto scalabile. L'accesso basato sugli attributi semplifica il numero di politiche che devono essere redatte e aiuta con le prestazioni.

Traduci in italiano quanto seguente: Regolamentazioni globali moderne come il GDPR, tuttavia, richiedono anche uno scopo. Ecco dove diventa importante l'accesso agli attributi: a quali scopi può operare ogni persona? In base a un EULA, i dati devono essere elaborati dagli utenti solo per la ragione indicata. In caso contrario, è necessaria un'analisi del rischio durante il processo prima che i dati siano utilizzati operativamente per la produzione.

In questo momento, siamo all'inizio di una moderna gestione dei dati. Attualmente, gli utenti prendono una decisione binaria sulle informazioni, ovvero acconsentono o non acconsentono. Il futuro si trova da qualche parte a metà strada: consenso limitato. Ad esempio, se una persona fornisce i propri dati genomici a una società come ancestry.com, cosa significa per il loro figlio più avanti? Il bambino non ha dato il consenso per il proprio materiale genetico che potrebbe essere esaminato da, ad esempio, una compagnia di assicurazioni sanitarie per determinare il rischio. Nella moderna gestione dei dati, Matt vede i consumatori dando un consenso limitato, come permettere a una società di analizzare solo il DNA per l'ascendenza e nient'altro.

Il futuro deve riguardare il consenso e l'accesso basato sulla finalità perché alla fine, i dati derivati guidano le intuizioni, mentre lo sviluppo del machine learning incorpora i dati negli algoritmi.

Per saperne di più su Immuta e sulla creazione di un programma di governance dei dati, vai su Immuta.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
