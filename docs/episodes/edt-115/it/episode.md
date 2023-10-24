---
layout: posts
title: "Bloccare e affrontare la sicurezza"
number: 115
permalink: episode-EDT115-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 115
tags:
    - zta
    - zerotrustarchitecture
    - cyberhygiene
    - cybersecurity
    - technology
    - process

date: Wed Nov 30 2022 19:00:00 GMT-0500 (Eastern Standard Time)
guests:
    - Darren W Pulsipher
    - John Evans

img: thumbnail.png
image: thumbnail.png
summary: "In questa puntata, Darren parla di sicurezza informatica con il ritorno dell'ospite John Evans, Chief Technology Advisor presso World Wide Technology (WWT)."
video: "https://youtu.be/SPmsH6Ia6pM"
description: "In questa puntata, Darren parla di sicurezza informatica con il ritorno dell'ospite John Evans, Chief Technology Advisor presso World Wide Technology (WWT)."
---

<div>
{% include transistor.html id="4c1b2203" title="#115 Blocking and Tackling of Security" %}

{% include youtube.html id="SPmsH6Ia6pM" %}
</div>

---

Fondamentale per tutte le altre misure di sicurezza informatica è l'igiene di base della rete. Molte aziende devono mettere in pratica questi concetti di base. Questo è dimostrato dagli ultimi titoli di notizie che rivelano un aumento degli attacchi come i attacchi di denial of service, che dovrebbero essere facili da prevenire.

Dalla sua esperienza lavorando con la comunità statale, John crede che la maggior parte degli attacchi segua una tipica catena di uccisione. La maggior parte degli attacchi che colpiscono i governi statali e locali derivano da protocolli di rete esposti o phishing tramite email. Questi sono punti di ingresso attrattivi per gli hacker e una volta entrati, pratiche di patching scadenti sono solitamente le responsabili che permettono loro di ottenere una base solida e spostarsi lateralmente. Ciò, combinato con politiche di password deboli o una debole applicazione delle politiche di password e l'incapacità di recuperare, può portare al disastro.

In un incidente di ransomware ben pubblicizzato nel 2019, l'organizzazione interessata ha presumuto che, poiché avevano la stessa quantità di dati nei loro ambienti di produzione e di backup, fossero al sicuro. Ma non avevano mai testato i loro backup o le loro capacità di ripristino, che si sono rivelate scarse. Una semplice igiene informatica avrebbe potuto prevenire questo incidente.

Ci sono quattro principi fondamentali su cui ogni organizzazione dovrebbe concentrarsi. Primo, devono addestrare ripetutamente le persone per evitare le truffe di phishing. L'addestramento potrebbe sembrare ripetitivo o noioso, ma il fatto che le persone cadano in queste truffe rappresenta una significativa debolezza per un'organizzazione. Sperabilmente, in un futuro non troppo lontano, le password non saranno più necessarie.

Secondo, devono configurare correttamente i firewall; solo perché le porte RTP o dei protocolli di rete sono chiuse, non significa che non ci sia una porta aperta in un punto meno prominente. La sicurezza attraverso oscurità non funziona.

Terzo, devono evitare politiche di aggiornamento scorrette, sia sul client che sul server, nei data center e nei punti periferici. Molte organizzazioni hanno debiti tecnici e non possono aggiornare i loro vecchi sistemi, quindi accettano le vulnerabilità e i rischi perché non desiderano investire in un aggiornamento.

Quarto, devono avere la capacità di recuperare. Solo perché sai che puoi effettuare il backup dei tuoi dati, puoi usarlo e recuperare con il backup? Il test è essenziale.

Questi quattro concetti di base, insieme ad altri pochi, sono sufficienti per fermare quasi tutti gli attacchi rivolti alle organizzazioni che non sono obiettivi abituali. Questo modello non si applica alle organizzazioni colpite da attacchi di tipo statale; queste già adottano tutte queste misure e necessitano di ulteriori misure di sicurezza.

Una considerazione per molte organizzazioni è la conformità rispetto al rischio. Per alcune organizzazioni essere conformi implica l'aggiornamento di vecchie macchine, applicazioni e processi, il che comporta un costo significativo. Per le organizzazioni con un sistema che non può essere aggiornato, potrebbe essere adottato un approccio basato sul rischio, in cui se accadesse qualcosa al sistema, costerebbe meno rispetto all'aggiornamento del sistema. Naturalmente, la cosa sicura da fare sarebbe l'aggiornamento per conformità, ma la maggior parte delle persone ritiene che l'approccio basato sul rischio sia più sicuro. Un piccolo business potrebbe cavarsela con questo approccio, ma le organizzazioni governative, ad esempio, devono rispettare dei regolamenti di conformità.

Ci sono due ragioni per cui un'organizzazione potrebbe scegliere la conformità oltre a un mandato. Prima di tutto, è un pulsante facile per molte organizzazioni che non capiscono come misurare o dare priorità ai rischi. La conformità è un quadro generalizzato a cui fare riferimento. Tuttavia, non è adatta a tutti, poiché qualcun altro sta assegnando priorità ai rischi in modo generalizzato. In secondo luogo, se accade qualcosa di terribile e, ad esempio, devi spiegarlo al tuo consiglio di amministrazione, puoi dire di aver seguito gli standard accettati.

La conformità è un po' una mentalità del bastone perché non è necessario fare tutte le valutazioni dei rischi e capire cosa deve essere fatto. Tuttavia, ad esempio, un piccolo comune senza un CISO potrebbe dirigere un sistemista amministratore a utilizzare un quadro di conformità come punto di partenza valido. Se non c'è un CISO a disposizione, c'è anche l'opzione di un CISO virtuale a tempo parziale per la guida. John fa questo per i clienti, che è un percorso praticabile per una migliore sicurezza.

Il concetto di "zero trust" considera anche un livello di garanzia rispetto al rischio. È necessario comprendere il rischio di concedere a qualcuno l'accesso a un particolare sistema o ad un dato e poi avere una garanzia adeguata che la persona sia effettivamente chi afferma di essere. Il cuore del "zero trust" è un alto livello di sicurezza che mitig

Zero trust non significa che tutto sarà bloccato e rallenterà tutti i processi. Ad esempio, se qualcuno vuole entrare e vedere i livelli di pioggia, non è necessario un elevato livello di affidabilità che la persona sia verificata. Tuttavia, se qualcuno vuole accedere ai gioielli della corona della tua organizzazione, devono essere presenti ulteriori controlli per verificare l'identità.

Abbinare il livello di sicurezza al livello di rischio è una sfida; richiede un'architettura di decisione. Ad esempio, per quanto riguarda il rischio nell'accesso a un dato, un'organizzazione deve sapere cosa è e categorizzarlo in base al rischio. Per un'organizzazione matura, ciò può essere difficile. John conosce un'organizzazione governativa federale che ha impiegato oltre due anni per assicurarsi che i suoi dati fossero identificati, classificati e contrassegnati correttamente prima di passare a qualsiasi tipo di architettura decisionale.

Identità e dati sono i due punti di partenza per la fiducia zero. Inoltre, ha senso evitare di cercare e fare tutto contemporaneamente. Iniziare con una parte di un'organizzazione potrebbe avere più senso, espandendola gradualmente nel resto dell'organizzazione nel tempo.

L'identità digitale sta diventando sempre più sofisticata. John crede che le nostre transazioni future si baseranno principalmente su un approccio di tipo "zero-trust". Ad esempio, se lui vuole trasferire $10.000 dal suo conto bancario a un conto all'estero, la banca dovrebbe assicurarsi che sia proprio lui e trattare quella transazione come se qualcuno stesse cercando di accedere a informazioni molto sensibili e ad alto rischio. Se invece lui va al negozio a comprare una tazza di caffè da un dollaro, quel livello di sicurezza che sia lui che effettua l'acquisto è superfluo. Molti di questi principi di "zero-trust" troveranno spazio nella nostra vita quotidiana.

L'analisi comportamentale dell'utente verrà presa in considerazione. Proprio come una compagnia di carte di credito solleva un'allerta per acquisti insoliti, ad esempio, se un sistema sa che John digita 20 parole al minuto e poi improvvisamente ne digita 100 al minuto cercando di accedere a informazioni sensibili, si tratta di un campanello d'allarme.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
