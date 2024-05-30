---
layout: posts
title: "Proteggere il tuo castello con la Zero-Trust"
number: 84
permalink: episode-EDT84-it
lang: it
nav_exclude: true
nav_order: 84
tags:
    - valuechain
    - security
    - log4j
    - zerotrust
    - cybersecurity
    - policy
    - people

date: Sat Aug 20 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steve Orrin
    - Cameron Chehreh

img: thumbnail.png
image: thumbnail.png
summary: "In questo episodio, Darren discute della sicurezza di zero trust con Steve Orrin di Intel, CTO del settore pubblico, e Cameron Chehreh, VP-GM del settore pubblico."
video: "https://youtu.be/url"
description: "In questo episodio, Darren discute della sicurezza di zero trust con Steve Orrin di Intel, CTO del settore pubblico, e Cameron Chehreh, VP-GM del settore pubblico."
---

<div>
{% include transistor.html id="e3f35ec7" title="#84 Securing Your Castle with Zero-Trust" %}

{% include youtube.html id="url" %}
</div>

---

Il vecchio modello di sicurezza potrebbe essere paragonato a un castello, con guardie lungo la strada e un fossato che circonda il castello. Tutti i gioielli della corona, in questo caso i dati, sarebbero localizzati e gestiti centralmente all'interno del castello. L'emergere della fiducia-zero ha creato un nuovo quadro.

La minaccia più grande per i dati è l'utente finale, quindi la strategia numero uno è un quadro che parte dal bordo esterno con pilastri di eccellenza e protezioni interne. Questo modo aggiornato di pensare consente alle organizzazioni di coinvolgere realmente la propria missione e i partner commerciali nella conversazione.

Lo stile di pensiero vecchio era più orientato ad un approccio a corazza dura, con protezioni e controlli nei punti vulnerabili. Una parte fondamentale dell'architettura del zero trust è un approccio basato sul rischio, che è più dinamico e si basa su due cose: ciò che ha funzionato e ciò che non ha funzionato in passato. Quindi, se gli attaccanti sono entrati dall'ultima volta dalla porta sinistra, rafforzerai naturalmente le difese lì, ma imparerai anche da quell'attacco e rinforzerai altri punti sulla base delle nuove conoscenze su come sia successo. Un approccio basato sul rischio non consiste solo nel risolvere l'ultimo attacco, ma nel pensare in anticipo e applicare i controlli giusti per le minacce attuali e future in tutta l'azienda.

Parte dell'approccio basato sul rischio consiste nel comprendere l'ecosistema. I clienti, i partner e gli utenti sono tutti parte del calcolo di sicurezza. Il vecchio approccio a guscio duro non funziona. Proprio come un castello ha persone e rifornimenti che entrano ed escono, e le ricchezze potrebbero trovarsi in diverse località del regno, la "zero trust" porta la sicurezza un passo avanti, considerando tutti gli ingressi e le uscite per i dati o le persone che vi accedono.

Tradicionalmente, qualcuno poteva ottenere l'accesso con un solo login al castello aziendale. Esistono diversi principi di non fidarsi, ma le due fondamenta sono il rifiuto predefinito e il monitoraggio continua e l'autorizzazione. La fiducia non viene guadagnata automaticamente, né è permanente. Ad esempio, se un ospite entra nel castello, viene convalidato alla reception e poi gli viene chiesto cosa sta visitando. Potrebbe essere autorizzato a visitare una persona in una stanza per un determinato periodo di tempo e sarà scortato durante il trasporto. Verrà anche monitorato per ciò che porta dentro e fuori durante la visita.

La filosofia Zero-trust si applica a tutti i punti di accesso, come i data center, le piattaforme cloud, i dispositivi edge, gli ambienti aziendali, ecc... È incentrata sui dati e sull'accesso, combinando un approccio basato sul rischio. È necessaria una maggiore strategia. L'approccio basato su Zero-trust che ne deriva non scarta ciò che ha funzionato bene in precedenza, ma combina i buoni processi, i principi e le tecnologie aggiungendo un elemento temporale.

Questo nuovo elemento non è così difficile come spesso è stato dipinto, ma è un problema di processo e cultura che può risultare complicato.

Molti sviluppatori temono che un'architettura a fiducia zero possa rallentarli, ma gli esperti di sicurezza e gli sviluppatori devono lavorare in partnership per superare questa percezione. Un esempio concreto è Log4j. Sei mesi fa, gli sviluppatori potevano scaricarlo senza problemi, ma ora l'ambiente delle minacce è cambiato. Senza un approccio basato sul rischio, uno sviluppatore sarebbe in grado di scaricare Log4j finché qualcuno della sicurezza non interviene per bloccarlo. Con un approccio basato sul rischio, insieme a modalità di accesso, Log4j non sarebbe disponibile e verrebbe offerta un'alternativa. Un altro esempio riguarda l'integrazione di Log4j in un prodotto: la valutazione dinamica della fiducia potrebbe imporre controlli aggiuntivi anziché bloccarlo completamente. Si tratta di bilanciare entrambi gli elementi del calcolo in gioco.

Questo partenariato è simile all'addestramento incrociato e alla condivisione delle informazioni che vengono inseriti nel processo di sviluppo della sicurezza. Mentre si sta costruendo e testando un prodotto, la sicurezza sta anche monitorando e valutando il rischio sia per le entità con cui stai lavorando che per le vulnerabilità del prodotto in tempo reale. Costruire un approccio basato sul rischio nel processo sfrutta l'intelligence che va al cuore di molte delle cose che percepiamo come difficili.

Qual è il primo passo per i CISO, CIO o CTO per avviare la zero trust? Cameron suggerisce di smettere di usare "geekspeak" e comunicare in inglese comune. Avviare l'iniziativa può essere sfidante perché di solito i leader lavorano con un risultato o un obiettivo in mente. Zero Trust non ha un obiettivo definito verso cui lavorare, se non quello di creare un ambiente più sicuro per gli utenti. Ci sono, naturalmente, KPI e altre misure per mostrare un aumento della sicurezza, ma è un percorso, non una destinazione. Egli sottolinea anche il finanziamento continuo; non inserire il budget per la sicurezza informatica in quello IT. Deve essere separato e distinto.

Il miglior posto per trovare informazioni di alto livello con indicazioni pratiche è la pubblicazione NIST SP 800-207. Inoltre, essa illustra anche le cinque colonne portanti della fiducia, che rappresentano buoni punti di partenza.

Un aspetto fondamentale di base è avere un buon inventario dei beni che necessitano di essere protetti, come le fonti di dati, i database, i processi aziendali e le applicazioni di transazione. Fondamentalmente, è necessario definire il perimetro del tuo castello. È importante non solo pensare a ciò che possiedi, ma anche a ciò di cui ti affidi, come l'ambiente SAAS, l'infrastruttura cloud e gli strumenti di terze parti.

L'idea generale è conoscere la tua catena del valore. Non riguarda solo ciò che c'è nel tuo castello, ma riguarda anche come guadagni denaro, come tale denaro viene distribuito, a chi paghi e i tuoi fornitori. Ognuno di questi è un pezzo critico della catena.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
