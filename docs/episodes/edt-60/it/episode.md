---
layout: posts
title: "Gestione del rischio di fronte al ransomware"
number: 60
permalink: episode-EDT60-it
lang: it
nav_exclude: true
nav_order: 60
tags:
    - cybersecurity
    - ransomware
    - datalifecyclemanagement
    - databreaches
    - zerotrust
    - datasecurity

date: Wed Aug 04 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "In questo episodio, parte uno di due, Darren discute le tendenze della sicurezza con l'ospite frequente Steve Orrin, CTO di Intel, Federal. Nel corso dell'ultimo anno, si è registrato un aumento del numero e della sofisticazione degli attacchi informatici. Le tre principali aree degli attacchi ricorrenti sono i ransomware, gli attacchi alla catena di approvvigionamento e le violazioni dei dati."
video: "https://youtu.be/url"
description: "In questo episodio, parte uno di due, Darren discute le tendenze della sicurezza con l'ospite frequente Steve Orrin, CTO di Intel, Federal. Nel corso dell'ultimo anno, si è registrato un aumento del numero e della sofisticazione degli attacchi informatici. Le tre principali aree degli attacchi ricorrenti sono i ransomware, gli attacchi alla catena di approvvigionamento e le violazioni dei dati."
---

<div>
{% include transistor.html id="8b0a716a" title="#60 Managing Risk in the Face of Ransomware" %}

{% include youtube.html id="url" %}
</div>

---

Nell'ultimo anno, si è registrato un aumento del numero e della sofisticazione degli attacchi informatici. Le tre principali aree degli attacchi ricorrenti sono ransomware, attacchi alla catena di approvvigionamento e violazioni dei dati.

Gli attacchi sono diventati più sofisticati per diverse ragioni. Innanzitutto, man mano che la sicurezza migliora, il nemico deve continuare a migliorarsi. Criminalità organizzata, attori statali e altri agenti minaccia riconoscono che serve maggiore sofisticazione per compromettere e sventare i controlli di sicurezza. Proprio come le organizzazioni hanno processi di sviluppo del software, così anche la comunità del malware. Hanno strumenti e strutture da cui partire e buoni processi per garantire la qualità dei loro sistemi. Diversi partecipanti acquistano, vendono e prendono in prestito codice. Imparano l'uno dall'altro e condividono informazioni sul dark web. Non sono solo squadre disorganizzate di hacker; funzionano più come aziende.

Questi agenti di minaccia operano in un settore da miliardi di dollari. Il denaro grosso guida la necessità di maturità. Non possiamo più semplicemente aggiungere la sicurezza, deve essere integrata e integrata ovunque, non solo nei prodotti, ma anche nell'infrastruttura e nei processi. Questa è stata una delle lezioni apprese da SolarWinds: anche se costruisci un buon prodotto, l'infrastruttura che lo supporta può essere vulnerabile.

Gli attacchi recenti mostrano che nessuno è immune. Spesso le organizzazioni erroneamente assumono di essere al sicuro poiché non operano nel settore dei servizi finanziari, del governo o di altre industrie ad alto valore, ma gli attacchi recenti alle aziende come JBS Foods, McDonald’s e Audi hanno dimostrato che nessuno è immune. Le aziende, indipendentemente dal loro prodotto, dipendono dalla loro infrastruttura digitale per funzionare; l'attacco a JBS Foods ha colpito la più grande industria di confezionamento di carne al mondo.

Nessuna singola cosa funge da panacea per prevenire questi attacchi. C'è speranza, ma richiede molto lavoro. Un'organizzazione deve avere diligenza nel valutare correttamente le metriche di rischio per implementare la sicurezza in modo corretto. Se non si comprende il proprio rischio, nessuna quantità di controlli di sicurezza sarà efficace perché non si sa se vengono applicati nel posto giusto.

La chiave sta nel partire con il giusto insieme di politiche e rischi per la tua organizzazione. Un passo fondamentale è che anche se la tua organizzazione non ha ancora completamente capito come implementare un'architettura a zero trust, negare tutte le richieste di accesso fino a prova contraria è un passo nella direzione giusta. Ciò significa che c'è un cancello ad ogni porta, piuttosto che una chiave principale per tutto ciò che è all'interno. Negare in modo predefinito è un principio fondamentale del zero trust.

Se una società non è specializzata nella sicurezza informatica o non dispone dei finanziamenti necessari per un team interno sufficiente, ci sono molte risorse disponibili per aiutare. I fornitori di sicurezza gestita (MSP) sono una buona opzione, ma dovrebbe sempre esserci almeno un esperto interno: un Chief Security Officer. Questa persona ha la conoscenza del contesto locale e dell'esperienza di dominio per lavorare con l'MSP e diffondere tale conoscenza in tutta l'organizzazione. L'MSP si occupa della gestione degli strumenti e delle configurazioni di sicurezza, ma è necessario avere qualcuno che trasmetta la saggezza della sicurezza alle unità aziendali e IT. Alla luce degli attacchi recenti, un team di sicurezza non è facoltativo.

Ogni azienda dovrebbe avere un piano pronto per un attacco di ransomware. Non è il momento di adattarsi quando è già successo. Un principio fondamentale è fare regolarmente il backup dei dati. Conserva copie intatte dei dati, dei sistemi, delle applicazioni e delle configurazioni in un ambiente di archiviazione offline. Sei mesi di dati di backup puliti sono importanti perché a volte il ransomware può trovarsi nei backup prima che venga rilevato. Inoltre, assicurati di avere offline le piattaforme o i server necessari per eseguire il tuo database, in modo da poterli attivare in un modello di fallback o di ridondanza.

Questo è essenzialmente il piano di continuità aziendale. Proprio come un'organizzazione avrebbe un piano per la continuità in caso di disastro fisico come un'alluvione o un'interruzione di corrente, dovrebbe esserci anche un piano per continuare con le applicazioni aziendali critiche per tornare almeno parzialmente in funzione mentre il problema viene risolto.

Un passo per realizzare questa ridondanza è essere in grado di passare rapidamente al cloud quando necessario, mantenendo le risorse del cloud in uno stato perfetto e magari anche presso un diverso fornitore di servizi cloud. Un altro passo consiste nell'avere un canarino nella miniera. Ciò significa avere sistemi distribuiti in tutta l'azienda dotati di sensori impostati al massimo. Per evitare problemi di prestazioni, spazio di archiviazione e velocità, è possibile distribuirli strategicamente anziché a livello di sistema, in modo da fungere da allarmi precoci.

Creare un piano in anticipo aiuterà anche a fronteggiare la sfida di cosa fare nel momento di crisi, che sia pagare il ransomware o contattare l'FBI. Il piano dovrebbe essere su carta e coinvolgere non solo il personale tecnico, ma anche avvocati, CEO, CFO, ecc..., e tutti dovrebbero avervi accesso. Dovreste sapere come acquistare bitcoin e dovreste avere il numero degli uffici locali dell'FBI e altre informazioni. Mettete in pratica il piano come un esercizio per verificare se funziona, esattamente come fareste con un piano di ripristino dalla disastrosità o di continuità aziendale.

Alcune industrie potrebbero pensare di stare al sicuro se mantengono separate la loro tecnologia operativa (OT) e la loro tecnologia informativa (IT), ma in realtà non sono veramente separate. Ad esempio, una linea di produzione può essere gestita da macchine informatiche, ma gran parte di ciò che guida la catena di approvvigionamento, la logistica e l'organizzazione generale sono sistemi IT. Se quei sistemi si bloccano, nulla entra o esce. I sistemi IT sono essenziali per la missione e l'apprendimento dagli attacchi recenti ci ha mostrato che dipendiamo dalla tecnologia digitale per tutte le nostre attività commerciali.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
