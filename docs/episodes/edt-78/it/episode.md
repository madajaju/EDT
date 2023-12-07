---
layout: posts
title: "Comprensione del modello di sicurezza della responsabilità condivisa"
number: 78
permalink: episode-EDT78-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 78
tags:
    - multicloud
    - compute
    - cybersecurity
    - sharedresponsibility
    - cloudsecurity
    - cloud
    - technology
    - process

date: Wed Feb 23 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect di Intel, spiega i modelli di sicurezza condivisa della responsabilità. Chi è responsabile della sicurezza può diventare confuso nel cloud; la responsabilità dipende dai modelli di fornitura di servizi cloud e da altri fattori."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solution Architect di Intel, spiega i modelli di sicurezza condivisa della responsabilità. Chi è responsabile della sicurezza può diventare confuso nel cloud; la responsabilità dipende dai modelli di fornitura di servizi cloud e da altri fattori."
---

<div>
{% include transistor.html id="975c761c" title="#78 Understanding the Shared Responsibility Security Model" %}

{% include youtube.html id="url" %}
</div>

---

## Sicurezza nel Cloud

La maggior parte delle persone comprende la responsabilità della sicurezza sul territorio, ma tale responsabilità diventa meno chiara nel cloud. Se i dati sono protetti nel cloud, come sono protetti? Chi è responsabile di tale sicurezza? E per quanto riguarda l'applicazione di patch alle macchine?

Di recente, i fornitori di servizi cloud hanno iniziato a offrire ancora più servizi, quindi esistono diversi modelli. A volte, la sicurezza finisce per essere persa nel mezzo.

## Aree di sicurezza

Ci sono quattro aree principali di sicurezza che dobbiamo comprendere.

## Fisico

La sicurezza fisica è la parte più facile da riconoscere. I fornitori di servizi cloud sono responsabili della sicurezza fisica dei loro data center, mentre tu sei responsabile della sicurezza fisica dei tuoi data center. Inoltre, devi proteggere il tuo spazio fisico. Ad esempio, se sei un produttore, devi proteggere le macchine all'interno della tua area. Di recente, è stato effettuato un attacco informatico tramite il sistema di climatizzazione (HVAC) che era collegato alla rete di un'organizzazione.

## Infrastruttura

La sicurezza dell'infrastruttura non riguarda l'aspetto fisico, ma l'hardware stesso. I tuoi switch di rete hanno le giuste patch di sicurezza e aggiornamenti? Vengono effettuati aggiornamenti ai dispositivi di archiviazione e memorizzazione? Sono protetti? L'infrastruttura può cadere in zone grigie con i provider di servizi cloud, quindi devi sapere chi è responsabile di cosa e in quali circostanze.

## Applicazione

Per la sicurezza dell'applicazione, è necessario sapere chi ha accesso a un'applicazione e se sta essendo aggiornata con le patch di sicurezza corrette.

## Data in Italian can be translated as "Data" or "Data di". It depends on the context.

Proteggere i tuoi dati è una delle cose più importanti che devi fare. I dati possono effettivamente essere utilizzati come arma in un attacco di ransomware in cui gli aggressori li prendono o li criptano. Vengono anche utilizzati per ottenere importanti vantaggi competitivi in diverse organizzazioni. Devi sapere dove si trovano i tuoi dati e come proteggerli.

## Modelli di erogazione dei servizi cloud

Ci sono tre modelli di distribuzione di base nel cloud. Vengono creati diversi modelli tutto il tempo, ma i tre principali sono Infrastruttura come Servizio (IAAS), Piattaforma come Servizio (PAAS) e Software come Servizio (SAAS). Categorizzeremo tutto il resto come X come Servizio (XAAS).

## Infrastruttura come servizio

IAAS è quando si noleggia da un fornitore di servizi cloud. Questo si traduce in termini di macchine virtuali e reti virtuali, quindi storage, calcolo e rete. Stiamo iniziando anche a vedere cose interessanti con acceleratori, come le GPU o addirittura i processori neuromorfici. IAAS è il luogo dove si eseguono le applicazioni.

## Piattaforma come Servizio

Il prossimo livello nella pila è il PAAS. Qui si ottiene un determinato framework come Kubernetes per eseguire le operazioni. VMware che viene eseguito su IAAS è PAAS. Le pipeline CICD come servizio utilizzano molti strumenti che si inseriscono in questo spazio. PAAS ti consente di creare e distribuire nuovi servizi su questa piattaforma in modo da poter facilmente distribuire e gestire sistemi complessi che sono costruiti su IAAS.

## Software come servizio

Il prossimo è SAAS. Si tratta di un software specifico gestito dal fornitore di software o dal fornitore di servizi cloud, oppure potrebbe essere un'offerta di SAAS di terze parti per qualcun altro. La chiave di SAAS è che sono responsabili della sicurezza dell'applicazione. Gestiscono il tempo di attività e tutte le aree gestionali come affidabilità, sicurezza e integrità. Molti dei programmi SAAS sono costruiti su piattaforme PAAS.

## X come servizio

XAAS può essere qualsiasi nuovo servizio come intelligenza artificiale, gestione dei dispositivi o rilevamento della sicurezza.

Capire questi diversi modelli di consegna è importante perché i modelli di sicurezza condivisa dei fornitori di servizi cloud si basano sul modello di consegna.

## Domini cibernetici

Ogni dei sei pilastri della sicurezza informatica, individuati da Steve Warren, CTO di Intel in un precedente podcast, è importante sia che tu sia in cloud, on-premises o on the edge. I sei pilastri sono: rilevamento minacce, intelligence, analisi e orchestrazione; gestione dell'identità e dell'accesso; sicurezza dei dati e delle applicazioni; sicurezza di rete; sicurezza della catena di distribuzione; e sicurezza di host e sistema. Tutti e sei di questi ambiti si inseriscono nel modello di sicurezza a responsabilità condivisa che i fornitori di servizi cloud stanno promuovendo.

## Matrice di sicurezza della responsabilità condivisa

Questa responsabilità condivisa è illustrata nella matrice. Le tecniche di erogazione del modello di servizio si trovano sull'asse verticale: SAAS, PAAS, IAAS e on-prem. Se ti stai ospitando da solo, tutto a destra è di tua responsabilità.

Dallato IAAS, sei pienamente responsabile della sicurezza dei dati e delle applicazioni e sei parzialmente responsabile per l'infrastruttura perché sei ancora responsabile del controllo della rete e del sistema operativo. Il fornitore del servizio di cloud è responsabile della rete fisica e dell'host.

Sul livello PAAS, sei ancora responsabile della sicurezza dei dati e parzialmente responsabile della sicurezza delle applicazioni e dell'infrastruttura di identità e directory. Ci sono alcuni strumenti disponibili per aiutarti in queste aree. Sebbene tu sia responsabile delle applicazioni e delle loro piattaforme, loro sono responsabili dei framework e delle middleware che forniscono. Sebbene gran parte del sistema operativo venga preso in carico dal livello PAAS e ti vengano forniti alcuni strumenti di livello superiore, sei comunque responsabile della configurazione dei controlli di rete.

Su SAAS, anche se stai utilizzando archiviazione come servizio, dati come servizio o CRM come Salesforce, sei comunque responsabile dei tuoi dati perché devi ancora progettare e crittografare i tuoi backup e gestire i conti e le identità.

Un punto chiave che si applica a tutti i modelli è che tu sei responsabile per la sicurezza dei tuoi dati; non esiste mai uno scenario in cui lasci completamente la sicurezza ai fornitori di servizi cloud. Devi effettuare il backup e verificare se stai utilizzando lo storage degli oggetti in modo da poter tornare indietro in caso di attacco ransomware, se stai gestendo correttamente l'accesso ai tuoi dati e se stai utilizzando strumenti che semplificano questa operazione.

## Diverse Approcci alla Sicurezza

Ogni dei tre principali fornitori di servizi cloud adotta un approccio diverso alla sicurezza, in particolare per quanto riguarda la configurazione della rete.

## AWS in Italian is "Servizi Web Amazon"

AWS si concentra sulla prevenzione. Quando si avvia una VM, l'impostazione predefinita è che non ci siano porte aperte, quindi è necessario creare gruppi di sicurezza. AWS è il più restrittivo, utilizzando IAM per la gestione delle identità. AWS è ottimo per team di medie dimensioni, ma non funziona altrettanto bene per organizzazioni molto grandi.

## Azzurro

Azure si concentra maggiormente sulla facilità d'uso, mentre la sicurezza è meno restrittiva. Utilizzano il concetto di reti virtuali per la sicurezza, quindi tutte le VM sulla stessa rete virtuale possono comunicare tra loro su quella rete. Questo è l'opposto del principio di non fidarsi (zero trust), quindi devi decidere cosa è più importante per te. Azure utilizza Active Directory, quindi se hai già un Active Directory maturo e consistente, allora è una buona scelta per la gestione delle identità.

## Google Cloud Platform

La piattaforma Google Cloud Platform (GCP) punta anche sulla facilità d'uso, ma si basa sulle macchine virtuali (VMs) e sulla sicurezza di rete per assicurarsi. È possibile avere profili che chiudono completamente tutto su una VM, oppure un profilo che li apre un po' di più. In termini di restrizioni, si collocano nel mezzo della strada. Sebbene non sia tanto robusta quanto AWS o Active Directory, la GCP offre una buona gestione dell'identità.

Tutti e tre questi fornitori di servizi cloud offrono IAAS, PAAS, SAAS, Container as a Service e una varietà di XAAS. È necessario valutare il modello di sicurezza e comprendere le differenze in ognuno.

In alcuni aspetti, capire il modello di sicurezza della responsabilità condivisa è più difficile che semplicemente gestire le cose in locale perché ora sono coinvolti più attori e la complessità aumenta. La chiave sta nel comprendere i modelli e utilizzare gli strumenti disponibili per aiutarti a gestire la sicurezza su più cloud.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
