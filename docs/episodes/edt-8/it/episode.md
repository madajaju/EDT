---
layout: posts
title: "Protezione del telelavoratore Parte 2"
number: 8
permalink: episode-EDT8-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 8
tags:

date: Mon Jul 20 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Con molti dipendenti che ora lavorano da casa, come fai a garantire che lavorino in modo sicuro ma allo stesso tempo dandogli la flessibilità di cui hanno bisogno per portare a termine i loro compiti? In questo episodio, Darren e l'ospite speciale Steve Orrin, CTO di Intel Federal, discutono di come sfruttare la tecnologia Intel per aiutare in modo efficace a proteggere i lavoratori da remoto."
video: "https://youtu.be/1PrO05zRapY"
description: "Con molti dipendenti che ora lavorano da casa, come fai a garantire che lavorino in modo sicuro ma allo stesso tempo dandogli la flessibilità di cui hanno bisogno per portare a termine i loro compiti? In questo episodio, Darren e l'ospite speciale Steve Orrin, CTO di Intel Federal, discutono di come sfruttare la tecnologia Intel per aiutare in modo efficace a proteggere i lavoratori da remoto."
---

<div>
{% include transistor.html id="5fc292e0" title="#8 Securing the Teleworker Part 2" %}

{% include youtube.html id="1PrO05zRapY" %}
</div>

---

## Tecnologie client per la sicurezza del lavoratore a distanza

La sicurezza lato client inizia e si conclude con la capacità di verificare il client tramite un avvio sicuro. Intel ha fornito questa tecnologia nei sistemi dei nostri clienti da anni, con Secure Boot con la tecnologia di esecuzione affidabile (TXT) e più recentemente con BootGuard (BtG). Sulle piattaforme più recenti, disponiamo di Intel Hardware Shield, un insieme di tecnologie che proteggono il sistema al livello più basso, a livello di firmware e BIOS. È così che un sistema di controllo degli accessi aziendali può verificare che un client sia avviato in modo sicuro e abbia il firmware corretto e i controlli di sicurezza corretti prima di ottenere l'accesso all'azienda.

Intel ha anche svolto molto lavoro nel corso degli anni per aiutare le organizzazioni a proteggere meglio i loro dati. Inoltre, abbiamo permesso al cliente di attivare la crittografia ovunque senza alcun impatto sulle prestazioni. Abbiamo implementato nuove istruzioni in quasi ogni generazione dei nostri prodotti, aggiungendo nuove capacità per proteggere il telelavoratore.

Il nostro altro obiettivo è stato proteggere le applicazioni e i loro dati in uso. Qui entra in gioco Intel Software Guard Extensions (SGX). Ciò consente alle organizzazioni di mettere parti chiave delle applicazioni e dati importanti in enclave di memoria crittografata sicura. Con il telelavoro, ciò significa che è possibile distribuire le applicazioni in ambienti non affidabili e mantenere comunque un alto livello di sicurezza.

Inoltre, la nuova tecnologia che Intel ha introdotto nella categoria di rilevamento delle minacce consente alle organizzazioni di ottenere una profonda visibilità sulle operazioni della piattaforma per monitorare le minacce; nessun malware può nascondersi. Queste tecnologie stanno rivoluzionando il modo in cui rileviamo il malware utilizzando l'apprendimento automatico e l'intelligenza artificiale.

## Tecnologie per la sicurezza del telelavoro nei data center

Anche se hai assicurato i clienti, devi anche assicurare il centro dati. Entrambi i lati devono essere protetti poiché il tuo sistema è sicuro solo quanto il collegamento più debole. Molte delle tecniche per proteggere il telelavoratore sono simili a quelle per proteggere l'azienda: avvio sicuro, sicurezza della virtualizzazione e controlli di isolamento. Ancora una volta, tecnologie come Intel TXT e BootGuard ti consentono di avviare in modo sicuro quelle piattaforme e gli asset del centro dati e del cloud. Più di recente, abbiamo introdotto la tecnologia Intel Select Solutions for Hardened Security, che integra molte delle tecnologie di sicurezza Intel in una singola piattaforma abilitata per impostazione predefinita.

È necessario essere in grado di proteggere i propri dati su larga scala, ovvero di poter utilizzare tutti gli strumenti di sicurezza senza influire negativamente sulle prestazioni. Gli strumenti di crittografia con accelerazione hardware di Intel (SHA, AES-2X, VPMADD52) rendono ciò possibile. Le nuove istruzioni di Intel e le tecnologie QuickAssist sono appositamente progettate per soddisfare le esigenze di crittografia scalabile per le aziende e per il cloud.

Infine, come monitori l'intelligence delle minacce e l'audit su larga scala? L'architettura della piattaforma di intelligence cibernetica di Intel (FPGA, DCPMM, Optane SSD) utilizza tecnologie di calcolo ad alte prestazioni, archiviazione e memoria per scalare la piattaforma di intelligence cibernetica, anche con l'onere aggiuntivo di una maggiore sicurezza esterna con i telelavoratori.

## Soluzioni a breve termine.

L'educazione dei dipendenti è la prima linea per limitare le minacce alla sicurezza del telelavoro. È cruciale fornire indicazioni sulla sicurezza domestica e offrire formazione sulla sicurezza o rafforzare la formazione precedente in ambiti come l'accesso corretto ai dati. Sii pro-attivo con gli aggiornamenti, spingendo per l'installazione di patch e richiedendo agli utenti di aggiornare i propri dispositivi. Se hai il controllo degli accessi dell'azienda, le soluzioni ERM/DRM e DLP, attivali e diffondili. Rivaluta le tue politiche per assicurarti che si adattino alla nuova realtà dei telelavoratori. Per le connessioni web, attiva il TLS e assicurati che sia applicato. È fondamentale utilizzare l'autenticazione a due fattori. Molte organizzazioni potrebbero pensare di non avere l'infrastruttura necessaria per implementarla, ma ci sono vari fornitori che possono aiutare in questo settore senza richiedere di implementare una grande quantità di nuova infrastruttura.

Molte soluzioni sono semplicemente igiene standard: Assicurati che i tuoi agenti di sicurezza per il punto finale siano abilitati e aggiornati. Gestisci e applica le politiche di sicurezza per i diversi tipi di dispositivi degli utenti. Abilita la crittografia del disco completo.

Le organizzazioni devono comprendere che i lavoratori a distanza operano in un ambiente in cui è molto probabile che un dispositivo venga utilizzato da altre persone in varie circostanze. Buoni controlli di sicurezza, soprattutto l'educazione dei dipendenti, possono prevenire problemi e consentire ai dipendenti di operare senza impatti negativi.

## Soluzioni a lungo termine.

Un piano a lungo termine per la sicurezza in un ambiente con lavoratori a distanza è ora necessario, che sia per un passaggio permanente a un numero maggiore di lavoratori remoti o per affrontare un'altra pandemia o situazione simile. Ci sono diverse azioni che le organizzazioni dovrebbero intraprendere ora per sostenere questa realtà in futuro.

Una delle migliori pratiche consiste nell'implementare politiche di zero trust. Questo riduce la dipendenza dalla necessità di fidarsi di ogni aspetto degli utenti e dei client che accedono. Insieme a ciò, l'autenticazione multi-fattore per gli utenti e i dispositivi dovrebbe diventare uno standard per l'organizzazione. Per coloro che ancora non hanno adottato ERM e il controllo dell'accesso ai dati basato su politiche, è ora il momento di farlo per proteggere i dati sia fuori sede che in loco. È importante implementare soluzioni di sicurezza a stack profondo anziché solo a livello di applicazione o rete. Questo include l'avvio sicuro con attestazione, la virtualizzazione e la sicurezza del contenimento, e la sicurezza e il monitoraggio del firmware. È importante estendere l'audit, l'intelligence sulle minacce e il monitoraggio agli ambienti di telelavoro, nonostante il rifiuto degli utenti che non vogliono ulteriori monitoraggi sui loro sistemi. Inoltre, considerare di estendere la sicurezza oltre il dispositivo nelle sedi dei telelavoratori quando possibile, ad esempio mediante dispositivi e reti gestiti.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
