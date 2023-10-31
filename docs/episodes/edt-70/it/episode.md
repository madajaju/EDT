---
layout: posts
title: "Governance dei dati moderna"
number: 70
permalink: episode-EDT70-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 70
tags:
    - datagovernance
    - immuta
    - dataaccess
    - identitymanagement
    - cybersecurity
    - data
    - technology

date: Wed Nov 24 2021 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Matthew Carroll

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect di Intel, discute della realtà e del futuro del governo dei dati moderno con Matthew Carroll, CEO di Immuta."
video: "https://youtu.be/Y-mBQoKQvHM"
description: "Darren Pulsipher, Chief Solution Architect di Intel, discute della realtà e del futuro del governo dei dati moderno con Matthew Carroll, CEO di Immuta."
---

<div>
{% include transistor.html id="752e2562" title="#70 Modern Data Governance" %}

{% include youtube.html id="Y-mBQoKQvHM" %}
</div>

---

Man mano che le organizzazioni migrano verso il cloud, il modo in cui pensiamo ai dati e al loro utilizzo sta cambiando completamente; negli ultimi cinque o sei anni, l'intero strato infrastrutturale è cambiato. Le necessarie prestazioni, scala, regole e il numero di utenti che desiderano combinare i dati sono aumentati in modo esponenziale. Gestire tutto ciò su larga scala non è un compito banale, ed è qui che entra in gioco Immuta.

Col tempo, l'industria ha ripensato il paradigma dell'archiviazione dei dati. In passato, ogni team di dati costruiva prodotti dati in modo isolato, per poi consegnarli a una unità aziendale. L'unità aziendale avrebbe avuto i suoi dati appropriati che fornivano un servizio di qualità a loro. Ora, all'improvviso, vogliamo che chiunque possa combinare i dati in tutta l'azienda: analisti aziendali, scienziati dei dati, ingegneri dei dati, ecc. Il numero di utenti è cambiato, e non si tratta più di applicazioni di ricerca; si tratta di trasformare e di flussi di dati.

Questa è una differenza che richiede una diversa qualità di servizio, tempo e livello di sofisticazione che non sono mai esistiti prima. Diventa ancora più complesso quando si aggiungono leggi sulla privacy, classificazione dei dati e le regole e i regolamenti in continua evoluzione.

Ciò che Immuta sta cercando di fare è rendere possibile per qualsiasi utente combinare potenzialmente qualsiasi set di dati, interno o esterno all'organizzazione, per ottenere delle intuizioni. È tutto una questione di scala. La politica deve essere separata dalla piattaforma per scalare la politica per tutti questi nuovi utenti e per tutte le diverse combinazioni di dati. Sicurezza, privacy e governance sono importanti, ma se non si riesce a eseguire, nessuno sarà contento.

Una lezione che Immuta ha imparato fin da subito è che il proxy non funziona. È come cercare di spostare petabyte di dati attraverso una cannuccia: diventano un collo di bottiglia. È facile incolpare il middleware ogni volta che c'è un problema perché sono sempre il collo di bottiglia tra gli strumenti e i dati. Questo è un problema classico del middleware.

Il secondo problema di quel paradigma di progettazione è che, con la virtualizzazione dei dati classici, funzionava perché c'era un chiaro insieme di dati. Tuttavia, quando ci sono petabyte di dati, l'approccio "dammelo tutto e lo sistemeremo" si rompe molto rapidamente a causa delle dimensioni stesse dei dati, nonché di tutte le regole e politiche ad esso associate.

Nella virtualizzazione normale, devi incorporarti nativamente nell'infrastruttura di calcolo cloud in Snowflake, in Synapse, ecc. Invece di mettere questa fascia di astrazione sopra questi diversi strumenti, la fascia di astrazione si trova sul lato delle politiche.

La politica è valida solo quanto la capacità di metterla sotto esame. È come una catena di prove. La chiave è poter dimostrare che l'utente si è attenuto o non si è attenuto all'infrastruttura informatica. Con la moderna governance dei dati, si sta scalando la politica interna ed unificando le verifiche a causa del livello di complessità del fatto che molte persone stanno eseguendo così tante azioni con i dati. La verifica della politica deve essere drasticamente semplificata o altrimenti risulta impossibile determinare l'aderenza.

Esistono tre tipi di politiche da considerare: operative, regolamentari e contrattuali. Un esempio di quanto tutto ciò possa diventare complicato è guardare a un'azienda come Cummins. Se si modernizzano nel cloud, devono considerare le regolamentazioni per ogni mercato. Per uno dei loro motori, cosa succede se devono scrivere una regola personalizzata per ogni paese in cui si trovano, ma anche per ogni paese in cui non si trovano, perché quei paesi non dovrebbero essere in grado di vederlo? Questo non è scalabile quando si parla di decine di migliaia di fonti di dati per gli schemi, che sono in continuo cambiamento. Ci sono petabyte di telemetria provenienti da questi motori.

Ciò che vorresti scrivere è che puoi vedere i dati solo una volta per il paese in cui risiedi e poi si applicano ovunque. Ma non è così che viene fatto. Quindi scriverebbero circa 700 politiche per un oggetto dati, quando dovrebbe essere solo una. Seguire tutte le politiche e le normative che cambiano per ogni fonte dati sarebbe quasi impossibile. Saresti fuori conformità tutto il tempo.

Non è mai stato così facile globalizzare un'azienda come oggi, e i clienti di Immuta si aspettano che essa sia in grado di gestire infrastrutture a livello globale su qualsiasi cloud. Dovrebbero essere in grado di spostare i loro dati su qualsiasi cloud e essere completamente conformi alle normative.

Immuta applica regole ai dati tramite etichette anziché utilizzare i dati grezzi perché ogni dominio ha il proprio gergo per classificare e parlare dei propri dati. Perciò hanno iniziato a classificare e etichettare in modo generico per applicare modelli concettuali generali, come per HIPAA. Tuttavia, questi modelli non sono ancora infallibili e c'è ancora molta strada da fare.

La visione di Matt come CEO di Immuta è arrivare a uno stato in cui i domini possono condividere le loro politiche. Ad esempio, nel settore sanitario, c'è una buona ragione per cui Moderna e Pfizer vorrebbero lavorare insieme. Potrebbe esserci un accordo su come gestire i controlli sui dati del mondo reale con l'ambito accademico. Quindi, se ci fosse una politica coerente che potesse essere condivisa e generata dal crowd in un "concept policy cloud", sarebbe la cosa giusta da fare.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
