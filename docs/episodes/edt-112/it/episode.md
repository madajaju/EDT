---
layout: posts
title: "Miti della migrazione di Cloud Lift and Shift"
number: 112
permalink: episode-EDT112-it
lang: it
nav_exclude: true
nav_order: 112
tags:
    - cybersecuritypolicies
    - cybersecurity
    - multicloud
    - zerotrust

date: 2022-11-15T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - John Evans

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect, settore pubblico, Intel, e John Evans, Consigliere Tecnologico Capo, WWT, discutono cinque miti sulla migrazione del cloud lift and shift."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solutions Architect, settore pubblico, Intel, e John Evans, Consigliere Tecnologico Capo, WWT, discutono cinque miti sulla migrazione del cloud lift and shift."
---

<div>
{% include transistor.html id="cfd34037" title="#112 Myths of Lift and Shift Cloud Migration" %}

{% include youtube.html id="url" %}
</div>

---

John ha iniziato la sua carriera nel campo della tecnologia al servizio di assistenza presso un importante appaltatore della difesa 20 anni fa. Man mano che la sua carriera progrediva, si è interessato alla sicurezza informatica e all'architettura aziendale. Ha lavorato come appaltatore per la Defense Information Systems Agency (DISA), dove è stato il principale architetto per il cloud DISA del Dipartimento della Difesa. Alla fine, lo stato del Maryland lo ha chiamato per guidare gli sforzi di trasformazione digitale per lo stato, incluso il processo di migrazione verso il cloud. Quella migrazione è stata la più grande mai effettuata nel campo dell'istruzione sia statale che locale.

Dopo ciò, passò alla posizione di Capo Ufficiale della Sicurezza Informatica dello Stato (CISO), supervisionando operazioni di alto livello, sicurezza e governance. Ha lasciato il servizio governativo e si è unito a WWT circa tre anni fa. Lavora principalmente nell'ambito dell'istruzione statale e locale, anche se collabora con altre aree del settore pubblico.

## Mito Uno - Il Cloud è più economico.

Il cloud non è necessariamente più economico di un ambiente in loco. Le applicazioni legacy sono state sviluppate per l'ambiente in loco, quindi non ci sono problemi di auto-scaling. È un modello basato sul consumo e ci sono già costi fissi, come i server. La maggior parte dei prodotti pensati per aiutare le organizzazioni a spostare le applicazioni nel cloud non supporta l'auto-scaling, quindi quando vengono spinte nel cloud, devono essere sempre configurate al massimo, il che non si traduce sempre in risparmi economici. È probabile che i clienti stiano pagando di più rispetto a prima per le stesse capacità in loco.

Quando Darren lavorava con il governo canadese, hanno trasferito un'istanza SAP nel cloud. Era massimamente approvvigionata, in funzione 24/7, e hanno superato il loro budget in soli sei mesi. Quando hanno scoperto questo problema, l'hanno acceso e spento ogni giorno poiché l'istanza non aveva bisogno di funzionare 24/7. Hanno risparmiato molti soldi riducendola a 14-16 ore al giorno.

L'accesso deve essere disponibile sempre in un dipartimento come quello della Salute e dei Servizi Umani, che di solito è il più grande nel bilancio IT di uno Stato, ma è possibile ridurlo a un'occasione minore durante le ore non lavorative per risparmiare denaro.

I fornitori di servizi cloud (CSP) offrono ora servizi nativi per il cloud che vengono soddisfatti da un'applicazione di terze parti o da un prodotto OEM in grado di fornire una capacità simile con risparmi sui costi. Questo non funzionerà con tutto, poiché alcune applicazioni legacy non sono sviluppate per sfruttare alcune delle applicazioni native per il cloud. Sarebbe meglio fare attenzione a rimanere vincolati a un cloud specifico. Ad esempio, se si utilizzano servizi proprietari di AWS, potrebbe essere difficile estrarre un'applicazione e passare ad Azure e viceversa.

John consiglia alle organizzazioni di chiedersi se ha senso passare al cloud. Non è una buona ragione passare al cloud solo perché si pensa di doverlo fare. Potresti finire con delle spese elevate e frustrare i superiori e i lavoratori perché la strategia non è stata sufficientemente valutata.

## Mito Due - Il Cloud Cancellain No in Debito Tecnico

Passare nella nuvola non elimina il debito tecnico in quasi tutti i casi. Esso espone ed accelera il debito. Troverai punti di esposizione se prendi qualcosa che funziona da 30 anni e lo sposti in un nuovo ambiente. La parte di accelerazione è che ora hai più debito tecnico di cui preoccuparti dato che è stato esposto.

Il debito tecnico significa che hai sistemi che rimangono indietro rispetto a ciò che dovrebbero essere. Ad esempio, quando John ha iniziato a lavorare per Maryland, alcuni sistemi erano ancora in esecuzione su schermate verdi. Era facile da navigare per i dipendenti attuali, ma aveva una lunga curva di apprendimento per i nuovi utenti. Nonostante il sistema avesse funzionato per molti anni, il lato negativo di questo debito tecnico è l'ammontare di formazione necessaria e il mantenimento dei dipendenti. Le generazioni più recenti che entrano nel mondo del lavoro e sono aggiornate sulle ultime tendenze e sviluppi non vogliono occuparsi di applicazioni obsolete.

Il debito tecnico significa anche problemi di sicurezza. Se un'applicazione legacy non è stata aggiornata, potresti non riuscire ad applicare patch per paura di causare un malfunzionamento. Questo crea vulnerabilità di sicurezza che devi accettare finché non uscirai dal ciclo del debito tecnico.

Una reazione comune in un'organizzazione è aggiungere un po' di codice extra quando necessario per accontentare, ad esempio, un cambiamento normativo da parte di un'assemblea legislativa statale. Questo non risolve un problema; al contrario, il sistema finisce per avere molto codice spaghetti, rendendo impossibile ricreare il sistema per un aggiornamento. Uno dei concetti nel cloud è suddividere il sistema in moduli o microservizi, ma il codice spaghetti non lo permette poiché non puoi semplicemente estrarne una parte.

Ciò rende le organizzazioni ancora più restie a modernizzarsi perché hanno fatto le cose nel modo sbagliato per tutti questi anni. Quando qualcosa si rompe e diventa il motivo di questo cambiamento, diventa ancora più difficile.

A volte potrebbe avere senso eliminare il vecchio sistema e ricominciare da zero. Ciò comporta dei costi e bisogna avere il nuovo sistema prima di scartare quello vecchio. Tuttavia, per alcune organizzazioni, come gli Stati, che possono ottenere finanziamenti federali per dipartimenti come la Salute e i Servizi Umani, potrebbe essere la scelta migliore. In una situazione del genere, si possono anche valutare i vantaggi della riutilizzabilità, come modelli e strutture di governance per altri dipartimenti.

## Mito Tre - Il Cloud è Sicuro

Passare al cloud non rende necessariamente più semplice proteggere le applicazioni, anche se non devi preoccuparti della sicurezza fisica o degli hypervisor, per esempio. I fornitori di cloud hanno un modello di responsabilità condivisa in varie forme. Devi capire di cosa sei responsabile con ciascun fornitore e di cosa sono responsabili loro. Questo non cambia solo con il fornitore, ma anche con i servizi che consumi. Questo può rendere la sicurezza più complessa per i tuoi team di sicurezza perché devono tenere d'occhio tutte le diverse variazioni tra i fornitori e i servizi.

## Mito Quattro - Il cloud è facile

La migrazione al cloud è complessa. In realtà, è più semplice gestire tutto nel proprio data center, non connesso a internet. La sicurezza in questo modo è facile e i modelli di costo sono semplici. Tuttavia, non puoi crescere. Non puoi fornire servizi ai tuoi comitenti o clienti e non puoi soddisfare le necessità della missione, tra le altre questioni. Il mondo è complesso e la migrazione al cloud è complicata.

## Mito Cinque - Non è necessario acquisire nuove competenze.

Una mancanza di conoscenza può anche contribuire ai punti critici legati a quella complessità. Gli sviluppatori di software e altri specialisti IT devono cambiare il modo in cui pensano all'informatica nel cloud, soprattutto per quanto riguarda la sicurezza. Ad esempio, gli sviluppatori di software non dovrebbero creare istanze nel cloud ovunque vogliano o scaricare cose da GitHub o altri repository, prendendo librerie per far funzionare le cose. Questo apre tutte le regole del firewall perché potrebbero non scegliere correttamente. Devono essere implementate delle barriere di protezione quando si passa al cloud, il che richiede un cambiamento. Lavorare nel cloud richiede un diverso set di competenze e mentalità. Inoltre, è necessario trovare modi migliori per gestire la sicurezza con ransomware sofisticati e attacchi informatici.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
