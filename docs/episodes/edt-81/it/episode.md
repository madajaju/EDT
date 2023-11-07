---
layout: posts
title: "Programmazione eterogenea con OneAPI"
number: 81
permalink: episode-EDT81-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 81
tags:
    - cpu
    - fpga
    - gpu
    - heterogeneousprogramming
    - npu
    - oneapi
    - compute
    - technology
    - process

date: Wed Mar 23 2022 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - James Reinders

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect di Intel, discute delle capacità e del futuro di OneAPI, un modello di programmazione unificato, aperto e basato su standard che offre un'esperienza comune agli sviluppatori attraverso le architetture degli acceleratori, con James Reinders, Chief Evangelist di OneAPI di Intel."
video: "https://youtu.be/YDa_EeOzFzc"
description: "Darren Pulsipher, Chief Solution Architect di Intel, discute delle capacità e del futuro di OneAPI, un modello di programmazione unificato, aperto e basato su standard che offre un'esperienza comune agli sviluppatori attraverso le architetture degli acceleratori, con James Reinders, Chief Evangelist di OneAPI di Intel."
---

<div>
{% include transistor.html id="28fb34d4" title="#81 Heterogeneous Programming with OneAPI" %}

{% include youtube.html id="YDa_EeOzFzc" %}
</div>

---

L'obiettivo di oneAPI è aiutare ad astrarre l'enorme diversità che sta emergendo nel campo dell'hardware, in modo che gli ingegneri del software possano sfruttarla più in alto nella pila e ottenere il massimo dall'hardware. James, un ingegnere del software che lavora anche a stretto contatto con l'hardware, è entusiasta di ciò che oneAPI può contribuire alla luce della tendenza al calcolo eterogeneo.

La parola eterogeneo qui significa fondamentalmente che ci sono dispositivi diversi in un sistema che possono eseguire calcoli, ma non eseguono lo stesso insieme di istruzioni. Ad esempio, la CPU ha un modo di eseguire le istruzioni e la GPU ne ha uno diverso. FPGA, altre ASIC e dispositivi specializzati hanno ognuno modi diversi di essere programmati. Approfittare di tutti questi è l'obiettivo.

John Hennessy e David Patterson, leader nel campo dell'architettura informatica, lo hanno definito la nuova era d'oro dell'architettura informatica. Per gli architetti informatici, è un momento straordinario per progettare dispositivi specializzati di ogni tipo per migliorare le performance in specifici domini, ma per i programmatori può essere difficile e persino spaventoso a causa della complessità. Ed è qui che entra in gioco l'iniziativa oneAPI e i prodotti oneAPI.

Il nome, oneAPI, è sia un'iniziativa con una specifica sia un'implementazione. L'iniziativa è un concetto semplice: gli sviluppatori di software dovrebbero avere la libertà di utilizzare qualsiasi dispositivo desiderino con piena performance e il loro codice dovrebbe preservare il suo valore; non dovrebbero dover riscrivere per ogni nuovo dispositivo. Queste caratteristiche possono essere applicate a compilatori, librerie, debugger e qualsiasi tipo di strumento.

Un gran numero di software per implementare specifiche particolari è stato aperto come open-source. Molti di essi provengono da Intel, ma poi Intel li rende disponibili anche come toolkit scaricabili che sono già precompilati e pronti all'uso per supportare l'hardware Intel. Altri fornitori che creano parti di oneAPI hanno le proprie implementazioni, quindi tutti collaborano sulle specifiche ma ognuno può creare un supporto per il proprio hardware in un modo aperto e multivendor.

L'obiettivo principale è scrivere il codice una volta e farlo funzionare bene ovunque. Tuttavia, si tratta di un problema complesso che richiederà del tuning delle prestazioni. Ad esempio, se un algoritmo funziona bene su una GPU, funzionerà in modo simile su qualsiasi altra GPU. Se si passa l'algoritmo a un FPGA, è possibile massimizzare il riutilizzo del programma, ma si ha la possibilità di ricodificare parti dell'algoritmo affinché funzioni altrettanto bene. Si tratta di un approccio complesso che consente di sfruttare l'hardware con diversi gradi di riscritture isolate, si spera.

Puoi creare un solo codice per dispositivi diversi. Ci sono approcci di runtime ancora più sofisticati che ti consentono di rilevare ciò che è presente ed eseguire diverse parti di codice in modo da poter effettivamente avere un codice sorgente comune che decide dinamicamente. Puoi applicare un programma di distribuzione e può capire cosa c'è nel tuo computer e usarlo dinamicamente anziché chiedere all'utente di eseguire un binario diverso a seconda del computer su cui ti trovi.

Questa è emozionante perché, per molto tempo, gli ingegneri hanno utilizzato una pila software che era la migliore per la loro macchina. Oggi, vogliono compilare un programma che può utilizzare dispositivi da vari fornitori. Il programma dovrebbe reagire a questo. Affinché ciò funzioni, il compilatore deve essere in grado di generare codice per questi vari dispositivi in ​​modo affidabile. Qui entra in gioco l'apertura.

Alcuni sosterranno che un sistema chiuso otterrà prestazioni migliori poiché le librerie e il linguaggio sono ottimizzati specificamente per le capacità dell'hardware. Ma la domanda è, come si può ottenere il meglio di entrambi i mondi? Se, ad esempio, esiste una implementazione specifica del fornitore per una libreria matematica, può esserci un programma comune. Una grande parte di oneAPI non cerca di reinventare l'intero mondo, ma cerca di organizzarlo in modo da sfruttare al massimo il meglio su ogni piattaforma possibile.

OneAPI ha la capacità di spostare la memoria e i dati. Diversi modelli di programmazione si trovano sopra a OneAPI ed è tua scelta quanto vuoi essere coinvolto nella gestione della memoria. Spostare i dati è costoso e consuma energia, quindi non puoi evitarlo, ma OneAPI ti fornisce gli strumenti per gestirlo interrogando il sistema e consentendo al tuo programma, durante l'esecuzione, di prendere le decisioni dinamiche giuste che ti garantiranno la migliore performance.

Intel ha decenni di esperienza nella costruzione di strumenti per aiutare nella messa a punto e nella migrazione, e dispone di compilatori altamente ottimizzanti. V2 ha contribuito a far evolvere l'industria intorno ai contatori hardware sui processori, diventando la norma. Ci sono una varietà di altri strumenti di analisi per fornire feedback dalla struttura del tuo programma alla ricerca di deadlock e applicazioni parallele, per trovare dove è necessario aggiungere alcune protezioni. Intel sta rendendo tutti questi strumenti disponibili in stile oneAPI, per essere più versatili rispetto a essere solo per una CPU.

I primi gruppi ad adottare oneAPI includono il calcolo ad alte prestazioni (HPC). Con l'esplosione di nuove idee di architettura informatica, ci sarà un maggior livello di diversità e innovazione in questo settore. I grandi codici in grado di aiutare a risolvere i più grandi problemi di ingegneria del mondo, o ad esempio, risolvere problemi farmaceutici e valutare nuovi medicinali, richiedono hardware all'avanguardia. Quindi questo concetto di portabilità delle prestazioni è arrivato ai laboratori nazionali, alle università e ai centri di ricerca.

L'HPC di oggi è il server del dipartimento di domani, quindi la capacità di utilizzare hardware diversi richiede agli ingegneri del software di pianificare e prestare attenzione a quanto il codice sia portabile perché il codice non muore rapidamente; dura decenni. Tra pochi anni, i sistemi eterogenei toccheranno tutti e ora è il momento di informarsi a riguardo.

Gli ingegneri del software non hanno bisogno di programmare in parallelo per trarre vantaggio da oneAPI. Si tratta di utilizzare cose che sono aperte e capaci di funzionare con più venditori e più architetture. Anche gli ingegneri che sono al vertice della pila dovrebbero capire cosa c'è nella pila e cosa è in grado di fare in termini di portabilità e portabilità delle prestazioni.

La comunità IoT è un altro gruppo che è stato molto avanti nella programmazione su dispositivi di calcolo multipli ed eterogenei, utilizzando metodi diversi per gestirli. Le loro capacità di calcolo continuano ad aumentare man mano che la tecnologia avanza. Quindi, oneAPI è applicabile qui e può aiutare a formalizzare o standardizzare cose che sono state innovative per prime nel mondo degli embedded.

L'idea di una singola API è passata dall'essere una folle idea di cui parlavano solo poche persone, fino ad essere sempre più riconosciuta come sensata e risolutiva per i problemi della propria organizzazione.

Il luogo più semplice per apprendere dell'iniziativa è il sito web oneapi.io. Per apprendere dell'implementazione, clicca sulla scheda di implementazione per seguire un link che ti porterà alle implementazioni Intel. Lì, potrai scaricare i diversi toolkit. Cerca il cloud per sviluppatori Intel per provare gratuitamente gli strumenti nel cloud, inclusi su hardware diversi. Il sito web oneapi.io offre anche una varietà di tutorial e risorse.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
