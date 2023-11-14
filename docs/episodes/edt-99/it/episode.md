---
layout: posts
title: "Percorso di Attacco Cyber Precog con XM Cyber"
number: 99
permalink: episode-EDT99-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 99
tags:
    - aiml
    - cybersecurity
    - xmcyber
    - technology
    - process

date: Mon Aug 08 2022 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Paul Giorgi

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect di Intel, e Paul Giorgi, Direttore dell'Ingegneria delle Vendite di XM Cyber, discutono di come la tecnologia di XM Cyber possa aiutare le organizzazioni a scoprire percorsi di attacco e ridurre il rischio."
video: "https://youtu.be/G9PfJdHZi08"
description: "Darren Pulsipher, Chief Solutions Architect di Intel, e Paul Giorgi, Direttore dell'Ingegneria delle Vendite di XM Cyber, discutono di come la tecnologia di XM Cyber possa aiutare le organizzazioni a scoprire percorsi di attacco e ridurre il rischio."
---

<div>
{% include transistor.html id="60eaf764" title="#99 Precog Cyber Attack PAth with XM Cyber" %}

{% include youtube.html id="G9PfJdHZi08" %}
</div>

---

Paul è nel campo della sicurezza dagli anni '90, iniziando facendo progetti per il Dipartimento della Sicurezza Interna e il Dipartimento della Difesa. Nel 2005, si è unito a Fishnet Security lavorando come ingegnere delle vendite e da allora è stato coinvolto nelle vendite. Si è poi unito a XM Cyber per concentrarsi sulla simulazione di violazioni e attacchi.

Piuttosto che la tradizionale sicurezza informatica, che consiste nella rilevazione, correzione e prevenzione, XM Cyber è predittiva. Una buona descrizione è che si tratta di una simulazione precognitiva. XM Cyber crea incidenti immaginari per fornirti un'idea di come i tuoi strumenti potrebbero affrontarli e di come potresti lavorare per risolvere situazioni critiche specifiche. L'idea è fare tutto questo prima dei test di penetrazione. Puoi sistemare le cose oggi, osservarne l'impatto domani e continuamente potenziare e migliorare la tua sicurezza.

Google Maps è un buon analogo per il funzionamento di XM Cyber. Quando desideri spostarti da un luogo all'altro, Google Maps ti indicherà tutte le strade per raggiungerlo, evitando pedaggi o proponendo la via più diretta e così via... XM Cyber fa la stessa cosa, ma con una simulazione di attacco. Ad esempio, supponiamo che tu abbia un account utente attivo in Active Directory compromesso. In tal caso, ti mostrerà i sei passaggi necessari per raggiungere un controller di dominio in locale e compromettere quell'asset critico. Ti mostrerà anche tutte le diverse rotte tra questi due punti.

Un caso d'uso per questo è che è possibile consentire a un red team di essere super efficiente con queste informazioni perché non devono girare a vuoto e cercare di fare scoperte. Può anche aiutare la sezione blu, consentendo loro di dare la priorità alle correzioni sui punti di strozzatura. Ad esempio, se ci sono 400 percorsi d'attacco che vanno tutti in diverse aree nella tua DMZ, ma tutti e 400 sembrano dover sfruttare questa entità per far avvenire quel percorso, allora puoi risolvere quel singolo problema e distruggere tutti e 400 i percorsi. Le squadre blu possono bloccare quei punti di strozzatura che potrebbero consentire all'attaccante di agire.

Un'area che XM Cyber analizza è la gestione dell'identità, non solo nel centro dati ma anche nel cloud. A volte i percorsi di attacco saranno lunghi dieci passaggi, ma nove di questi saranno relativi alla navigazione nel mondo dell'identità. Ad esempio, potresti avere permessi per il tuo account di amministratore, e poi quell'account di amministratore potrebbe avere permessi aggiuntivi. Esegui sei o sette passaggi per regolare diverse autorizzazioni o reimpostare password e implementare GPO. Potresti raggiungere il ruolo di amministratore di dominio compiendo nove passaggi partendo da un normale account utente, sfruttando la directory attiva.

Oltre all'identità, XM Cyber considera oltre cento entità come macchine, bucket S3 e chiavi SSH. Queste diverse entità possono essere combinate per creare un percorso di attacco. A volte diventa molto complesso. Ad esempio, un attacco potrebbe iniziare in locale, passare ad Azure, sfruttare Intune e poi tornare indietro per compromettere un'altra macchina che consente un passaggio a GCP. Una volta che gli aggressori sono nell'ambiente GCP, possono approfittare della fiducia o delle autorizzazioni tra AWS e GCP per compromettere AWS. XM Cyber analizza tutti i diversi tipi di entità in ambienti diversi e le collega per valutare questi percorsi su come ogni entità interagisce globalmente nel rischio di tutte le altre.

Ci sono due modi in cui XM Cyber interagisce con i clienti. Il primo è una scoperta di alto livello per valutare l'ambiente, esporre le vulnerabilità e misurare come un attaccante può scoprire nuove vulnerabilità per mettere a rischio asset critici. Il secondo è una valutazione mirata di uno scenario specifico che preoccupa il cliente. Questi impegni non sono solo un'analisi statica delle entità, ma sono dinamici perché considerano il traffico e altri pattern.

Un caso d'uso tipico è determinare se l'OT è l'asset critico o il punto di violazione. XM Cyber simula scenari come ad esempio se una macchina nel dipartimento delle risorse umane è il punto di violazione, vi è un rischio per questo PLC che si trova nell'ambiente SCADA e controlla gli interruttori di pressione che potrebbero interrompere l'elettricità per un'intera città municipale. Questo è un caso d'uso reale che XM Cyber può simulare. Questo tipo di informazione è cruciale in un mondo in cui l'OT non è più isolato ma connesso alle reti.

XM Cyber è una soluzione SaaS piuttosto che on-prem, così può rimanere dinamico e offrire il miglior servizio. Può essere spaventoso pensare che qualcosa nel cloud abbia tutte le tue tecniche di attacco. Tuttavia, XM Cyber fa molto lavoro per garantire che i dati siano completamente isolati, conformi a SOC 2 e ad altre certificazioni, e non vi sia alcuna multi-tenancy. Inoltre, non raccolgono nulla di sensibile. Le informazioni sensibili vengono crittografate e solo una porzione viene inviata al cloud. Non devono avere dati effettivi.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
