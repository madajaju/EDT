---
layout: posts
title: "Operazionalizzazione della gestione dei processi aziendali"
number: 113
permalink: episode-EDT113-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 113
tags:
    - bpm
    - automation
    - compute
    - management
    - camunda
    - capitalbpm
    - rpa

date: Thu Nov 17 2022 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Max Young

img: thumbnail.png
image: thumbnail.png
summary: "In questo episodio, Darren discute la gestione dei processi aziendali e l'automazione con Max Young, CEO di Capital BPM."
video: "https://youtu.be/bIJRyJxSGvE"
description: "In questo episodio, Darren discute la gestione dei processi aziendali e l'automazione con Max Young, CEO di Capital BPM."
---

<div>
{% include transistor.html id="a05071ff" title="#113 Operationalizing Business Process Management" %}

{% include youtube.html id="bIJRyJxSGvE" %}
</div>

---

Max si definisce un "accademico fallito" perché ha abbandonato il suo dottorato in matematica, specializzato in topologia, per studiare informatica. Ha ottenuto una laurea triennale e una laurea magistrale, specializzandosi in intelligenza artificiale. In seguito ha lavorato nella gestione dei processi aziendali (BPM), iniziando presso Lombardi, che è stata successivamente venduta a IBM, e alcuni altri fornitori nel settore BPM. Dieci anni fa, ha preso una decisione importante insieme ad alcuni amici e ha fondato Capital BPM.

Max ha scelto di concentrarsi sul BPM per due motivi. In primo luogo, ha sempre apprezzato gli algoritmi perché offrono un approccio sistematico alla risoluzione dei problemi complessi. Gli algoritmi gli danno un senso di sicurezza anche durante situazioni difficili.

Secondo, gli piace ciò che viene chiamato trasformazioni nella matematica. Ad esempio, se hai una forma brutta con molti angoli che è difficile da misurare, la trasformeresti in, diciamo, un rettangolo e quindi applicheresti tutte le teorie sulla misura del rettangolo, la misureresti e tradurresti la risposta nella forma originale. Allo stesso modo, in BPM, puoi portare un problema in un dominio in cui può essere facilmente risolto. Piuttosto che trasformare un problema in un problema micro con complicate dichiarazioni F nidificate che sono difficili da mantenere, puoi trasformarlo in un problema appiattito che puoi vedere ed attaccare per fasi.

Questo processo è simile al far zoom su Google Maps per capire dove hai bisogno di concentrare l'attenzione e poi fare zoom indietro per vedere come questo si inserisce nel quadro generale. Il cuore dell'architettura aziendale è la capacità di fare zoom avanti e indietro per assicurarsi che la linea che stai tracciando sia ancora valida.

Max paragona il suo amore per il BPM nel mondo dell'informatica alle arti marziali, che ha studiato fin da quando aveva sei anni. Dice che ci sono arti marziali pratiche, come il judo e il muay thai, e altre più esoteriche, come il tai chi. Gli piacciono le arti marziali pragmatiche perché risolvono problemi del mondo reale. Non si mette più in rissa, ma, ad esempio, le sue competenze di judo lo aiutano quando scivola e cade. Il BPM è pragmatico perché è la chiave per risolvere un problema aziendale. Crede che ci sia un vero valore nell'utilizzare tutte le teorie che ha imparato a scuola e renderle subordinate nella creazione di una piattaforma aziendale che permette alle persone di risolvere in modo più efficiente e coerente i problemi quotidiani, offrendo così alle persone e alla comunità più opportunità.

Questa è una parte dell'informatica che può essere collegata a come le persone lavorano. Le cose possono essere automatizzate per ridurre la quantità di compiti ripetitivi e monotoni, in modo che le persone possano concentrarsi su cose più importanti. Le persone temono che l'automazione inghiotta i lavori di tutti i giorni, ma invece rimuove la fatica e libera tempo per lavori più critici. Può anche creare nuovi posti di lavoro. Le stesse paure esistevano quando furono introdotti i computer automatizzati di Ford, ma alla fine crearono nuove industrie. Il BPM dovrebbe essere completamente abbracciato anziché temuto.

Il modo migliore per iniziare a operazionalizzare i processi è utilizzare il metodo scientifico per articolare il problema. Nella gestione dei processi aziendali, si disegnano immagini tramite un modello di processo aziendale. Max apprezza il Camunda Business Process Modeler, che è scaricabile gratuitamente con solo un po' di notazione da imparare. Nel programma di modellazione, si disegnano passaggi che articolano i diversi sistemi e come funzionano.

In un processo di selezione, ad esempio, si inizia con un gruppo che definisce le parti interessate, come il candidato, il responsabile IT e l'HR. All'interno del gruppo ci sono "corsie di nuoto", ognuna delle quali contiene un attore che può compiere azioni. Puoi pensarle come gruppi LDAP. Poi si inizia a delineare il processo aziendale: prima il candidato presenta la candidatura per il lavoro, poi l'HR potrebbe fare una revisione, quindi il responsabile IT farà una revisione. Le decisioni approvate vengono annotate lungo il percorso. Dopo che i passaggi significativi di alto livello sono presenti nel modello, è possibile scendere nei dettagli riguardanti processi più articolati e sfumati, come un'intervista divisa in una parte tecnica e una manageriale.

Traduci il seguente in italiano: ![Immagine bmp](./bpm.png)

Il programma di modellazione genera XML dietro le quinte mentre si disegnano tutti questi diagrammi. Questo XML è interpretabile durante l'esecuzione da macchine BPM; mentre si disegna il diagramma, può diventare un processo eseguibile.

L'elemento umano è ancora presente in questo ciclo, ma l'utilizzo di un sistema di BPM come questo rende chiaro dove i processi possono essere automatizzati, come ad esempio controllare la storia lavorativa o effettuare un controllo dei precedenti penali. Questo modello consente anche flessibilità e sperimentazione. Ad esempio, supponiamo che l'esperto del settore affermi di non voler eseguire contemporaneamente un controllo del lavoro e un controllo del record penale perché il controllo del record penale è costoso, mentre quello del lavoro è economico. In tal caso, è facile apportare una modifica spostando il controllo del lavoro iniziale e richiedendo una decisione prima del controllo del record penale. Man mano che vengono apportate modifiche, si costruisce un consenso e una storia vera che diventa progressivamente più vera quanto più si sperimenta.

Mentre l'utensile sembra essere uno strumento per disegnare, è un utensile di modellazione che ti consente di disegnare immagini e simulare sul retro. Quindi puoi eseguire questo processo e vedere tutti i diversi punti decisionali e dove conducono. Il modello ti dirà anche che non puoi implementare se non hai fatto qualcosa correttamente.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
