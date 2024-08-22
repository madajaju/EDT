---
layout: posts
title: "I benefici dei database a grafo"
number: 97
permalink: episode-EDT97-it
lang: it
nav_exclude: true
nav_order: 97
tags:
    - datavisualization
    - datamodeling
    - cybersecurity
    - dataanalysis
    - datamanagement
    - multicloud
    - zerotrust

date: 2022-07-28T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Hadi Ahmadi

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Chief Solutions Architect, Intel e il Dr. Hadi Ahmadi, Direttore dell'Architettura delle Soluzioni di Katana Graph discutono i vantaggi dei database a grafo."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solutions Architect, Intel e il Dr. Hadi Ahmadi, Direttore dell'Architettura delle Soluzioni di Katana Graph discutono i vantaggi dei database a grafo."
---

<div>
{% include transistor.html id="c81eaabc" title="#97 The Benefits of Graph Databses" %}

{% include youtube.html id="url" %}
</div>

---

Hadi ha conseguito il suo dottorato in informatica nel 2012 e ha approfondito la ricerca sulla crittografia e la sicurezza delle informazioni di rete. Ha lavorato nel mondo accademico per alcuni anni e poi è passato all'industria, concentrandosi su diversi aspetti delle soluzioni di sicurezza, tra cui la gestione delle identità e degli accessi. Nel 2015 ha iniziato a studiare il modellamento di grafi e si è reso conto di come il modellamento dei dati a grafo potesse risolvere alcuni dei problemi affascinanti e complessi nel suo campo di studio.

Nei database a grafo, un grafo non significa grafici o interfacce grafiche, ma è un modo per strutturare i dati a livello di archiviazione in modo che possano essere recuperati e elaborati per risolvere problemi complessi, specialmente se i dati sono interconnessi. Il grafo offre molti vantaggi e può integrarsi con le strutture dati o le soluzioni esistenti, come i modelli di database relazionali o l'archiviazione degli oggetti.

La differenza principale tra i database grafici e i database relazionali è che, sebbene entrambi si occupino di relazioni, i database relazionali portano le relazioni al livello dei metadati e dello schema, mentre i database grafici si basano sulle relazioni guidate dai dati. In altre parole, nei database relazionali si mettono in relazione le colonne delle tabelle. Per introdurre una nuova relazione, è necessario modificare lo schema. Il grafico fornisce un'infrastruttura senza schema in cui è possibile aggiungere una maggiore struttura ai dati ma rimanere comunque flessibili per poter acquisire qualsiasi dato non strutturato.

La metà dei dati del mondo è stata creata negli ultimi anni, raccolti da molte fonti diverse, ma meno del due percento è stato analizzato, la maggior parte dei quali sono dati strutturati. I dati vengono raccolti, ma le informazioni sono insufficienti per l'elaborazione. Deve esserci un modo per aggiungere in modo flessibile un po' di struttura che sia sufficientemente dinamica da poter cambiare in caso di incertezza, ma che consenta comunque di beneficiare del calcolo avanzato ottimizzato. Il grafico è un ottimo modo per farlo.

Se stai cercando di lavorare con dati correlati o interconnessi, rispetto ad esempio a dati isolati con valori critici, un grafico offrirà vantaggi grazie alle relazioni. Quasi ogni settore può trarne beneficio perché i dati non strutturati provengono solitamente da varie fonti e di diverse nature.

Un esempio sarebbero le soluzioni per la sicurezza informatica. Ci sono dati provenienti dai log e dai treni di controllo degli ambienti di rete, dalle infrastrutture cloud, dagli host terminali, eccetera. I dati provengono da diverse fonti, come ad esempio directory o file di log grezzi. Sarebbe utile correlare i dati, ad esempio, perché tipicamente un'identità o un utente che potrebbe far parte di un log del sistema di gestione dell'identità potrebbe essere lo stesso utente che attiva un processo su un laptop, come ad esempio il download di un allegato da una email. Analizzando questi schemi, è possibile utilizzare questa correlazione per ottenere maggiori informazioni. In altre parole, non importa come o da dove provengano i dati, ma fornendo questo collegamento si può imparare qualcosa su ogni record osservandoli nel contesto.

Un vantaggio è che non ci sono problemi di trasformazione dei dati, quindi ciò aumenta la velocità. Questo riduce anche i requisiti di archiviazione.

Gli schemi grafici e le strutture di database relazionali, in generale, sono compatibili. Ecco un esempio di rete sociale semplice: I tipi di nodi nel grafico assomigliano a tabelle. Quindi puoi avere un nodo chiamato "persona" e quindi una tabella chiamata "persona". Potresti avere un altro nodo chiamato "luogo" e collegare la persona a un luogo specifico. Puoi avere una tabella chiamata "luogo" e collegarli a chiavi esterne. Quindi hai questa relazione di amici. Un amico di una persona in un modello grafico è semplicemente un loop su se stesso. Questo ti permetterebbe di modellare tale schema. In un database relazionale, dovresti creare una nuova tabella chiamata "amici" e quindi connetterla. Quindi, anche a livello di schema, stai aggiungendo ridondanza e una certa struttura in cima ad essa. E se hai bisogno di aggiungere un nuovo concetto di amicizia o relazione, devi creare nuove tabelle, creando ridondanza e complessità.

Altri vantaggi dei grafici rispetto ai database relazionali sono i grafici sugli elementi, l'IA sui grafi e l'idea di modellare i dati in tempo reale per individuare modelli basati sulla connessione dei dati. È possibile ridurre il set di dati che stai cercando o analizzando grazie alle relazioni. Si sta utilizzando il potere dei dati per potenziare ulteriormente i dati stessi. Gli algoritmi in un database a grafo sono molto diversi rispetto a quelli dei database relazionali e sono più ottimizzati per raggiungere grandi set di dati più velocemente.

Uno dei limiti di un database grafico è che è difficile scalare. In un database relazionale, è facile suddividere una tabella e metterla su due server, ad esempio. I primi database grafici sono stati progettati per essere una soluzione unica, quindi se volevi scalare, avresti avuto bisogno di aggiungere più memoria e CPU.

Ora, se vuoi lavorare con petabyte di dati in grafici, vuoi scalare verticalmente il più possibile con tecnologie come le VM Intel, ma vuoi anche scalare orizzontalmente. Nuove tecnologie, come la piattaforma grafica di Katana, aiutano a risolvere questo problema di scalabilità con l'elaborazione distribuita. Puoi suddividere il problema in pezzi e far lavorare ognuno su una piccola parte del grafico per ottenere una soluzione finale. Katana ha dimostrato che puoi utilizzare 256 o più macchine per elaborare i dati, in modo da poter rapidamente gestire decine di terabyte di dati in memoria.

Un database di tipo grafo richiede un ecosistema simile a un database relazionale. Il grafo è leggermente più dinamico e flessibile. Se si desidera passare a una piattaforma di analisi grafica, che vada oltre i semplici database operativi, si potrebbe sfruttare altre cose come capacità di data warehousing e data lake. Memorizzazione e calcolo sarebbero separati, il che significa che le tecnologie di elaborazione del grafo che eseguono tutto in memoria non hanno bisogno di fare affidamento sulla memorizzazione collegata ai servizi in modo che sia possibile avere un servizio di memorizzazione diverso.

Katana utilizza lo storage degli oggetti e successivamente, quando vogliono elaborare, caricano opportunisticamente ciò che desiderano dal grafo alla memoria distribuita di tutte le macchine. I dati tornano immutabili allo storage, quindi se, ad esempio, distruggi l'intero cluster, non perdi nulla. Tutti i dati sono già presenti e archiviati. I database relazionali sono un campo più maturo, ma i database grafici stanno diventando sempre più supportati nell'ecosistema.

In base ai otto anni di esperienza di Hadi nel settore parlando con interlocutori e clienti, tutti vedono immediatamente il beneficio dei grafi nei database. Le limitazioni potrebbero essere la loro incapacità di tenere il passo con la scalabilità o i costi. Il lavoro di Katana e altre società di tecnologia a grafo è quello di rendere i grafi uno strumento più comune che i clienti possono utilizzare per varie attività e meno un lusso nel database. Ad esempio, Katana sta fornendo ai clienti soluzioni di gestione di identità basate su grafi e gestione di dati massivi.

Buoni casi d'uso dei grafi includono l'invenzione precoce di soluzioni grafiche specifiche per alcune aziende come LinkedIn e Facebook, che possiedono i loro grafi sociali. Attualmente, un'applicazione naturale si trova nel settore dell'e-commerce per i motori di raccomandazione. Trovare connessioni tra clienti, account, acquisti e altri comportamenti consente di fornire immediatamente migliori raccomandazioni agli acquirenti, in un modo che non può essere realizzato tramite interrogazioni di database relazionali.

Per saperne di più su Katana o su come contattare Hadi, vai su embracingdigital.org.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
