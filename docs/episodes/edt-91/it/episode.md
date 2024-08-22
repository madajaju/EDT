---
layout: posts
title: "Combattere l'avversario cibernetico mediante la sicurezza della catena di approvvigionamento del software"
number: 91
permalink: episode-EDT91-it
lang: it
nav_exclude: true
nav_order: 91
tags:
    - cybersecurity
    - datamanagement
    - iot
    - sbom
    - transparency
    - zerotrust
    - technology
    - policy

date: 2022-06-09T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Eric Greenwald

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect, Intel, e Eric Greenwald, Consigliere Generale di Finite State, parlano di sicurezza della catena di approvvigionamento del software."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solutions Architect, Intel, e Eric Greenwald, Consigliere Generale di Finite State, parlano di sicurezza della catena di approvvigionamento del software."
---

<div>
{% include transistor.html id="d4b56c70" title="#91 Fighting the Cyber Adversary by Securing your Software Supply Chain" %}

{% include youtube.html id="url" %}
</div>

---

Darren e Eric Greenwald, Consulenti Generali di Finite State, discutono della sicurezza della catena di approvvigionamento del software in questo episodio.

Finite State si concentra sulla ricerca di vulnerabilità nel firmware, più spesso il software di terze parti che potrebbero già presentare vulnerabilità esistenti, prima di integrarlo nel loro dispositivo. Finite State si concentra principalmente su dispositivi IoT industriali, dispositivi medici, automobili ed elettronica di consumo.

Per sette anni prima di unirsi a Finite State, Eric ha lavorato come avvocato nel settore privato, concentrandosi sui test di sicurezza e l'individuazione delle vulnerabilità per le aziende di cybersecurity. Prima di ciò, ha lavorato nel governo con la cybersecurity e la sicurezza nazionale, per l'FBI e la CIA, e come consigliere capo per il Comitato di Intelligence della Camera. Il suo lavoro governativo ha raggiunto l'apice quando è diventato Direttore Senior per la Cybersecurity presso il Consiglio per la Sicurezza Nazionale alla Casa Bianca.

Eric crede che parte del motivo per cui ora c'è un'enfasi sulla sicurezza della catena di approvvigionamento sia che la minaccia è evoluta. La natura sempre più complessa del software, compreso il fatto che molti componenti hanno vulnerabilità quando vengono creati per la prima volta e vengono scoperti solo col tempo, rende più difficile individuare i dispositivi costruiti tramite la catena di approvvigionamento del software. Inoltre, attacchi recenti di alto profilo tramite una violazione nella catena di approvvigionamento del software, come SolarWinds, hanno reso le persone più consapevoli del pericolo.

Nell'attacco di SolarWinds, l'autore ha avuto pazienza, non causando immediatamente il caos, ma aspettando un anno mentre vagava attraverso le reti informatiche americane, coltivando l'accesso e le informazioni. Quella pazienza è probabilmente la differenza più significativa tra un attacco di uno Stato-nazione e un attacco criminale. Mentre a volte gli attacchi criminali pazienti sono più concentrati su un ritorno finanziario sugli investimenti, coloro che sono dietro un attacco di uno Stato sono disposti a impiegare anni per sviluppare il loro accesso alle informazioni. Tuttavia, con entrambi gli attacchi, stanno diventando sempre più sofisticati e sono molto meglio posizionati per trarre un vantaggio devastante dalla complessità della catena di fornitura.

Per contrastare questi attacchi, stanno emergendo nuove normative. L'amministrazione Biden ha emesso il decreto esecutivo 14028 a maggio 2021, che presenta due punti principali: lo sviluppo sicuro del software e il bollettino dei materiali software (SBOM). Il decreto esecutivo è rivolto solo agli appalti governativi, ma è probabile che l'industria privata lo segua.

I dettagli e le raccomandazioni tecniche per lo sviluppo sicuro del software sono ancora in fase di elaborazione. Tuttavia, parte di questo sarebbe che i fornitori di software per il governo dovrebbero fornire un SBOM. La prima bozza di legislazione per gli SBOM è stata presentata nel 2014, quindi gli standard per produrli sono diventati più maturi e sviluppati. Un SBOM è essenzialmente un elenco dei componenti software che sono stati utilizzati per un prodotto software, non molto diverso da un elenco di ingredienti su un prodotto alimentare. Ciò offre trasparenza nella catena di fornitura, che è essenziale per valutare le vulnerabilità o per identificare una vulnerabilità scoperta successivamente.

Un eccellente esempio di ciò è ciò che è successo con Log4j. Quando è stata scoperta quella vulnerabilità, molte aziende non sapevano se l'avevano nel loro stack. Non sarebbe una bacchetta magica, ma un SBOM consentirebbe alle aziende di scoprire più facilmente se hanno il componente software problematico nel loro sistema e agire più rapidamente per implementare una patch.

Gli argomenti contro la pubblicazione degli SBOM (Software Bill of Materials) sono che forniranno una mappa agli attaccanti e sveleranno informazioni proprietarie. Nonostante questi siano legittimi motivi di preoccupazione e debbano essere discussi, il Dipartimento del Commercio e il Dipartimento della Sicurezza Interna sottolineano un beneficio molto più significativo per i difensori derivante dalla trasparenza rispetto a qualsiasi vantaggio concesso agli attaccanti. Ci sono proposte di legge bipartisan a sostegno degli SBOM. Esistono modi per ridurre il rischio che gli SBOM cadano nelle mani sbagliate, come contratti sicuri o non fungibili. Il dibattito su queste preoccupazioni continuerà nel settore pubblico e sempre più aziende li adotteranno.

Questa legislazione sta avvenendo perché la FDA ha suggerito ai produttori di dispositivi medici di incorporare SBOM come parte del processo di revisione, quindi gli SBOM stanno guadagnando slancio da parte di questi produttori. Il mondo fisico sta diventando sempre più influenzato dal software nei dispositivi medici e dai sistemi incorporati come i sistemi di controllo per centrali elettriche, sistemi di climatizzazione, controlli aeroportuali, ecc., quindi i sistemi operativi sono a rischio, con conseguenze più significative rispetto agli attacchi ai sistemi aziendali.

Una difficoltà per i professionisti OT è che molti dei componenti industriali sono più vecchi e non sono necessariamente stati aggiornati. Tuttavia, gli hacker sono riluttanti a connettersi a Internet e aggiornare perché è così che gli hacker entrano. La migliore risposta a questo problema è cercare di ottenere trasparenza dei componenti nella pila, effettuare una scansione del sistema e dei dispositivi che fanno parte della rete OT e fare un po' di reverse engineering e decompilazione per comprendere i dettagli. Fondamentalmente, è necessario creare il proprio SBOM e valutare quali vulnerabilità ci sono.

Questo è l'area principale di lavoro per Finite State. Esaminano i sistemi e i dispositivi e fanno un'analisi. Hanno una piattaforma che automatizza l'analisi del codice incorporato, fornisce una lettura delle vulnerabilità e identifica e raggruppa le vulnerabilità con la massima priorità. A volte puoi eliminare un'intera categoria di vulnerabilità con una singola correzione. Creare lo SBOM da solo, quindi, non è sufficiente. Deve essere collegato a un sistema di gestione del rischio per sfogliare e ordinare le numerose vulnerabilità. Trovare i rischi con la massima priorità è un processo complesso e Finite State può aiutare i team di sicurezza a dare priorità alle loro azioni per proteggere i loro sistemi.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
