---
layout: posts
title: "Gestione del lavoro da remoto alla massima capacità."
number: 6
permalink: episode-EDT6-it
lang: it
nav_exclude: true
nav_order: 6
tags:
    - telework
    - vpn
    - advancedcommunications
    - multicloud
    - process
    - technology

date: Thu Jul 23 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Tim Flynn
    - Pete Schmitz

img: thumbnail.png
image: thumbnail.png
summary: "In questo episodio, Darren, Tim Flynn, ammiraglio in pensione della Marina, e Pete Schmitz, responsabile delle vendite per la Marina di Intel, parlano di come gestire la crescita esplosiva dei telelavoratori a causa della pandemia di Covid-19. Discutiamo dei diversi modi in cui i lavoratori possono lavorare in remoto e comunque essere produttivi: dispositivo come terminale stupido, dispositivo come parte della rete interna e dispositivo come portale per i servizi. Comprendere questi modi di operare può aiutare a individuare i punti di sofferenza che possono ostacolare l'efficacia del tuo team."
video: "https://youtu.be/-uQJGrcYnZ8"
description: "In questo episodio, Darren, Tim Flynn, ammiraglio in pensione della Marina, e Pete Schmitz, responsabile delle vendite per la Marina di Intel, parlano di come gestire la crescita esplosiva dei telelavoratori a causa della pandemia di Covid-19. Discutiamo dei diversi modi in cui i lavoratori possono lavorare in remoto e comunque essere produttivi: dispositivo come terminale stupido, dispositivo come parte della rete interna e dispositivo come portale per i servizi. Comprendere questi modi di operare può aiutare a individuare i punti di sofferenza che possono ostacolare l'efficacia del tuo team."
---

<div>
{% include transistor.html id="24d6e2c7" title="#6 Managing Telework at Capacity" %}

{% include youtube.html id="-uQJGrcYnZ8" %}
</div>

---

## Modalità di lavoro da remoto

I modi di operare che vediamo le persone utilizzare nel Dipartimento della Difesa e nel settore privato sono i seguenti:

Dispositivo come una terminale stupida (VDI - Infrastruttura di Desktop Virtuale)

Dispositivo come parte della rete interna (VPN - Rete Privata Virtuale)

* Dispositivo come portale ai servizi

La maggior parte dei lavoratori sta utilizzando diverse modalità di funzionamento, quindi è necessario supportare diversi tipi attraverso l'infrastruttura.

## Dispositivo come un terminale stupido

In questa modalità, il lavoratore ha il proprio desktop in esecuzione su un server nel data center e utilizza il proprio laptop per connettersi al "desktop virtuale". Fondamentalmente, utilizzano il proprio laptop o un altro dispositivo come un terminale "stupido". Ci sono alcuni problemi con VDI, tra cui scalabilità, congestione di rete, latenza e ridondanza. A causa di questi problemi, una sessione VDI può essere piuttosto costosa. Tuttavia, tra le tre opzioni, VDI è la più sicura.

## Dispositivo come parte della rete interna

Questo è probabilmente la modalità più comune. Il lavoratore connette il proprio dispositivo alla VPN in modo da lavorare sulla rete come se fosse connesso in ufficio. Un vantaggio è la mobilità dato che i lavoratori possono connettere qualsiasi dispositivo come un telefono, un tablet o un laptop. Un altro vantaggio è che ci possono essere segmenti diversi della VPN per diverse classificazioni dei dati. Un aspetto negativo è che i lavoratori devono essere sempre connessi per poter lavorare. E sebbene non ci sia tanto traffico di rete come con un VDI, ci sarà comunque una certa congestione di rete durante il trasferimento dei dati.

## Dispositivo come un portale ai servizi

Sempre più persone si stanno orientando verso questa modalità. L'operaio utilizza il proprio dispositivo per connettersi ai servizi in cloud, pubblici o privati. Il servizio principale che le persone utilizzano è Office 365, che consente alle organizzazioni di utilizzare i servizi cloud al posto dei propri servizi o in concomitanza con essi. Efficienza, prestazioni e la capacità di lavorare disconnessi a volte sono vantaggi. Gli svantaggi includono dipendere da un terzo... (non sono sicuro di come concludere questa frase - adozione/migrazione e sicurezza)

## Emergenti ostacoli

I seguenti sono tradotti in italiano: I collo di bottiglia sono emersi man mano che il numero di persone che lavorano da casa è aumentato dal 15% all'obiettivo dell'85%. Per le prime due modalità di funzionamento, la scalabilità della VPN può essere un grosso ostacolo. La banda limitata è anche una grande fonte di collo di bottiglia. Una soluzione a questi problemi è sfruttare i servizi cloud per alleviare la tensione. A livello umano, le operazioni informatiche e i servizi di assistenza sono sopraffatti poiché i lavoratori si stanno collegando da casa per la prima volta.

## Scalabilità VPN

Esistono diverse soluzioni a breve termine per aiutare a ridurre questi ostacoli. La prioritizzazione dell'accesso degli utenti può essere efficace, che sia basata sugli orari o sulla priorità delle missioni. È necessaria un'educazione dei dipendenti riguardo all'adattamento a questo ambiente.

Per una scalabilità a lungo termine, le organizzazioni dovrebbero migrare verso soluzioni SaaS utilizzando i laptop come modalità di accesso.

## Larghezza di banda per siti.

Una delle migliori cose che le organizzazioni possono fare nel breve termine è scoprire quanti utenti VDI hai attualmente e vedere se puoi spostarli a lavorare sulla rete o in modalità di collaborazione con gli strumenti. Ciò ridurrà drasticamente il carico sulla larghezza di banda. Potrebbe essere necessario anche aumentare le capacità della tua rete dopo aver valutato come lavorano gli utenti remoti. L'istruzione è ancora una volta una parte essenziale di questa transizione in modo che i lavoratori utilizzino le migliori pratiche, ad esempio disconnettersi dalla VPN quando non la utilizzano e configurare gli strumenti di backup per operare durante le ore non lavorative. Nel lungo termine, suggeriamo un'architettura multi-ibrida che ti dia la possibilità di sfruttare i fornitori di servizi cloud per la larghezza di banda di rete e la capacità di espansione e ottimizzare il costo e la capacità.

## Servizi ospitati scalabili

Per aiutare nell'implementazione di architetture scalabili per scopi a breve termine, ci sono diversi ottimi riferimenti, tra cui Outlook Web Access (OWA) e le architetture di riferimento VDI.

Ancora, per il lungo termine, raccomandiamo di passare a un'infrastruttura di cloud ibrido multipla per elasticità, capacità, prestazioni predictive, conformità e sicurezza.

## Operazioni IT

Come possiamo ampliare il team del servizio di assistenza che molto probabilmente si trova sopraffatto? Un'idea è quella di avere delle FAQ online a disposizione dei lavoratori per un facile riferimento. Le soluzioni contribuite dalla comunità degli utenti, moderati dall'IT, possono anche essere utili. Idealmente, le organizzazioni dovrebbero utilizzare un sistema di gestione dei ticket per individuare punti critici e semplificare i processi. Inoltre, tutto ciò che può essere automatizzato per evitare compiti ripetitivi dovrebbe essere automatizzato tramite, ad esempio, l'automazione dei processi robotici (RPA) o scripting aggiuntivi. Una soluzione a lungo termine potrebbe essere l'implementazione di AI Chat Bot come un servizio di help desk IT self-service. Questi rapidamente restringono le soluzioni online utilizzando parole chiave o raccomandando il contatto.

## Conclusione

In definitiva, Intel vuole vedere le organizzazioni avere successo durante questo periodo difficile in cui i lavoratori passano dall'ufficio al lavoro da remoto e affrontano molto stress. Intel può aiutare l'industria, il governo e i settori pubblici. Abbiamo silicio che funziona in tutti questi aspetti. Abbiamo partner che offrono soluzioni hardware e software, e naturalmente, vendiamo PC e dispositivi per clienti che permettono ai lavoratori remoti di operare.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
