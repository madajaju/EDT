---
layout: posts
title: "Violazioni dei dati e catena di approvvigionamento sicura"
number: 61
permalink: episode-EDT61-it
has_children: false
lang: it
nav_exclude: true
parent: Episódios
grand_parent: Italiano
nav_order: 61
tags:
    - datbreach
    - data
    - process
    - policy
    - cybersecurity
    - supplychain
    - securesupplychain

date: Wed Aug 11 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Intel, discute violazioni dati e catene di approvvigionamento sicure con l'ospite frequente Steve Orrin, CTO di Intel, settore federale."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solution Architect, Intel, discute violazioni dati e catene di approvvigionamento sicure con l'ospite frequente Steve Orrin, CTO di Intel, settore federale."
---

<div>
{% include transistor.html id="2462e3fe" title="#61 Data Breaches & Secure Supply Chain" %}

{% include youtube.html id="url" %}
</div>

---

Oltre agli attacchi di alto profilo nella catena di approvvigionamento come l'incidente con SolarWinds, ci sono altri attacchi meno conosciuti che sono altrettanto problematici.

## Fornitura sicura della catena di approvvigionamento

Un esempio è l'estensione di Chrome The Great Suspender, uno strumento per assicurarsi che la memoria venga utilizzata correttamente nelle applicazioni di Chrome, con circa due milioni di utenti. I fondatori di questo strumento open source hanno venduto la loro azienda a un'organizzazione per milioni di dollari senza un'adeguata dovuta diligenza. L'acquirente si è rivelato essere un gruppo di criminalità organizzata che ha trasformato lo strumento in malware e spyware.

Non c'è stata un'attacco nel senso che non hanno hackerato l'azienda originale, ma l'hanno acquistata e fatto ciò che volevano col codice. Quello che un giorno era un prodotto legittimo è diventato illegittimo il giorno seguente. Nessuna quantità di protocolli di sicurezza avrebbe risolto quel problema. Ora le aziende devono fare una selezione accurata dei propri fornitori e dei terzi che le supportano.

L'open source è una benedizione e una maledizione. La benedizione è che, poiché è open source, si ha accesso al codice sorgente e si può esaminarlo quanto si vuole. La maledizione è che nessuno ha il tempo, l'energia o l'esperienza necessaria per verificare attentamente ogni singolo pezzo di codice open source che utilizzano. Il codice vulnerabile ai malware, anche se non intenzionale, può essere introdotto se non viene individuato dalla comunità e talvolta ciò non accade per molto tempo.

Ci sono due cose che potrebbero attenuare questo problema: la prima è che il codice potrebbe essere sottoposto a un'analisi del codice sorgente utilizzando uno strumento apposito, e potrebbe esserci un sistema di valutazione per i contributori di codice i cui prodotti presentano consistentemente meno vulnerabilità o bug. Questo lavoro sarebbe principalmente svolto da fornitori esterni. In secondo luogo, esistono già alcune start-up ben consolidate nel settore della verifica dei prodotti open source per mostrare quali oggetti in un repository sono affidabili e quali non lo sono ancora.

La scansione delle vulnerabilità attuali nell'open source è un controllo, ma quel tipo di sicurezza da sola non è sufficiente. Deve essere combinata con controlli aggiuntivi prima di essere eseguita in tutta l'organizzazione.

## Violazioni dei dati

Oltre ai ransomware e agli attacchi alla catena di approvvigionamento, le violazioni dei dati sono un problema comune. Nel 2020 sono stati estratti 1,8 trilioni di dollari dalle violazioni dei dati su 7,8 miliardi di registrazioni. Ad esempio, una violazione presso McDonald's ha compromesso i dati dei clienti, dei partner e interni.

## Crittografia

La prima parte della soluzione consiste nell'avere migliori strumenti di sicurezza per i dati e l'infrastruttura. Critico è crittografare l'accesso e incorporare un rifiuto predefinito in modo che, anche se qualcuno riesce a entrare dalla porta principale, non abbia accesso a tutto. È fondamentale criptare anche i dati all'interno dell'organizzazione, non solo quelli esposti al cloud o quelli inviati esternamente. Ogni dato che attraversa la tua rete, così come i dati inattivi, dovrebbe essere criptato.

La crittografia ha un costo, ma sui dispositivi moderni è presente un'accelerazione integrata che riduce la penalità. Ora puoi attivare la crittografia in tutta la tua organizzazione senza alcun impatto sulle prestazioni.

## Segmentazione

Un'altra parte sono gli enclavi, o la segmentazione. Una delle sfide negli ambienti aziendali di rete è che, ancora una volta, se qualcuno entra attraverso la porta, avrà carta bianca se tutto è connesso. Di recente c'è stato un movimento per trasferire il "dev" e spostarlo nella sua propria rete, ed è un inizio, ma è solo la punta dell'iceberg. La segmentazione della rete dovrebbe essere estesa all'intera organizzazione. È ancora possibile creare connessioni trasversali, ma esse devono conformarsi a un insieme di regole e contribuiranno a limitare l'impatto. Ad esempio, se il tuo help desk viene attaccato, i tuoi sistemi di risorse umane non saranno compromessi contemporaneamente.

La microsegmentazione era un termine di moda cinque o più anni fa, ma ora è necessaria. Ci sono alcuni ottimi strumenti disponibili per aiutare in questo senso, come gli ecosistemi di container in cui è possibile distribuire un'applicazione e questa avrà la sua rete e il proprio firewall.

Implementare le credenziali di autenticazione corrette deve avvenire ora. L'autenticazione a più fattori è necessaria, così come l'autenticazione delle entità. Molti strumenti sono automatizzati e hanno processi automatizzati, quindi le entità, non solo le persone, devono avere le credenziali adeguate.

## Zero Trust can be translated to Italian as "Fiducia Zero".

La filosofia della "Zero Trust" ha raggiunto un livello di maturità tale da dover essere implementata, e alcuni dei principali principi come il rifiuto predefinito e la totale sfiducia sono cruciali. La tecnologia si è adeguata alla messa in atto di questi concetti.

I developer possono preoccuparsi di come questi strumenti di sicurezza rallentino il processo, ma ci sono modi per costruire l'architettura al fine di ridurre questo problema. Ad esempio, se sei un developer e hai le credenziali e l'accesso adeguati, dovresti essere in grado di accedere alle cose di cui hai bisogno quando ne hai bisogno e perdere l'accesso una volta che hai finito, anziché avere delle credenziali che ti danno accesso a tutto in ogni momento. L'idea di zero trust non significa che l'azienda non si fida del developer, ma che l'accesso avviene nel momento giusto, non solo un accesso generico nel caso in cui un attore malintenzionato rubi le credenziali.

Nessuna industria può permettersi di ignorare i rischi attuali. Ogni organizzazione deve guardare alla sicurezza in modo diverso e implementare la sicurezza in tutta l'organizzazione e l'architettura.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
