---
layout: posts
title: "Calcolo confidenziale in DevSecOps"
number: 87
permalink: episode-EDT87-it
has_children: false
lang: it
nav_exclude: true
parent: Episódios
grand_parent: Italiano
nav_order: 87
tags:
    - confidentialcomputing
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - sgx

date: Wed May 18 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Ofir Azoulay-Rozanes

img: thumbnail.png
image: thumbnail.png
summary: "In questo episodio, Darren Pulsipher, Chief Solutions Architect, Intel, e Ofir Azoulay-Rozanes, Direttore del Product Management, Anjuna, discutono delle soluzioni di Anjuna per il computing confidenziale nel ciclo di vita del DevOps."
video: "https://youtu.be/url"
description: "In questo episodio, Darren Pulsipher, Chief Solutions Architect, Intel, e Ofir Azoulay-Rozanes, Direttore del Product Management, Anjuna, discutono delle soluzioni di Anjuna per il computing confidenziale nel ciclo di vita del DevOps."
---

<div>
{% include transistor.html id="e31a9c3f" title="#87 Confidential Computing in DevSecOps" %}

{% include youtube.html id="url" %}
</div>

---

Il software di Anjuna consente alle applicazioni di funzionare con la protezione SGX di Intel e risolve il problema della protezione dei dati in uso. La missione di Anjuna è rendere le enclave sicure il più semplice possibile. Con il software di Anjuna, non c'è bisogno di modificare nulla nell'applicazione; prendila, eseguila in una enclave e la tecnologia SGX funzionerà immediatamente. Il software funziona con qualsiasi app, su qualsiasi cloud, a qualsiasi scala.

La catena di fornitura globale del software è sotto attacco. SolarWinds, in particolare, è stato un attacco a DevOps, e nonostante ci siano state idee su come risolvere il problema, non è stato ancora risolto definitivamente. La tecnologia Anjuna può essere una soluzione facile. Non c'è bisogno di riprogettare il tuo software o cambiare metodologie. Li fai funzionare in enclave sicure.

Quando ha provato il software di Anjuna, Darren ha creato uno stack utilizzando Intel SGX alla base, Red Hat OpenShift, Anjuna per la parte di elaborazione confidenziale e Vault di HashiCorp per conservare un registro sicuro. È rimasto sorpreso da quanto velocemente la soluzione fosse pronta e funzionante in meno di una settimana.

Darren chiama questo processo la pipeline hardened DevSecOps, anche se ha molte componenti in movimento. Ofir concorda con questa terminologia, in quanto questo processo è un nuovo DevOps hardened con la tecnologia hardware SGX con il software di Anjuna.

Il calcolo confidenziale, o enclave sicuri, risolve il problema della protezione dei dati. Quando si memorizzano i dati in uno storage persistente, la soluzione per i dati a riposo è già presente. Esiste anche una soluzione per i dati in transito con TLS. La sicurezza dei dati in uso non è stata ancora risolta perché quando i dati sono in uso, l'applicazione deve accedervi dalla memoria in chiaro. Non può essere contemporaneamente criptata e in uso. Questo è stato un problema senza fine. Se un cattivo attore ha accesso a una macchina in cui l'applicazione è in esecuzione, un attacco è semplice come accedere al dispositivo, identificare il processo e creare un dump della memoria. Otterranno tutti i segreti e i dati confidenziali presenti nel file, e non sono criptati. Ciò includerebbe anche le chiavi di crittografia per i dati a riposo e in transito perché il software deve utilizzarle per crittografare. Il cattivo attore avrà le chiavi del regno.

Il problema si risolve se si eseguono le diverse applicazioni in enclave sicure. Anche se qualcuno ottiene accesso alla macchina, non avrà accesso alla memoria di ogni singola applicazione. Ciò non significa che non si debbano risolvere le vulnerabilità, ma si è molto meno stressati nel correggerle al più presto possibile. Anche se ci sono vulnerabilità del kernel, quando qualcosa viene eseguito in un enclave sicuro, il kernel non può accedere alla sua memoria.

Il software Anjuna può funzionare su altre tecnologie hardware oltre a SGX. A differenza dell'esecuzione dell'encrypting direttamente nel software, dove il calo delle prestazioni sarebbe elevato, Anjuna può ottimizzare la configurazione per far girare la tua applicazione con un impatto quasi trascurabile sulle prestazioni: meno del cinque percento.

Quindi potresti non voler mettere tutto in un enclave sicuro per ora, ma è il futuro per la sicurezza.

Uno dei utilizzi di un enclave sicuro è quello di archiviare dati che attraversano diverse fasi nella pipeline DevOps in un registro sicuro. Il registro contiene tutto ciò che è stato inserito nella costruzione, chiavi di sicurezza e valori hash utilizzati per la verifica. Questi valori hash di verifica devono rimanere invariati durante il ciclo, così nessuno può iniettare codice, librerie o binari nel pacchetto che si consegna. Tutto dovrebbe funzionare in un contenitore nel mondo moderno.

Un altro candidato per la protezione è una chiave di firma. Senza enclave sicure, una volta che hai un file binario pronto, devi portarlo su un'altra macchina in una stanza buia a cui nessuno ha accesso. Ma tre persone con tre chiavi diverse lo firmano lì. Le enclave sicure consentono l'accesso a quella chiave di firma nel tuo ambiente familiare, ma solo l'enclave stessa potrà accedervi. Sarà basato sull'identità complessa del software in esecuzione all'interno dell'enclave SGX, che viene implementata tramite l'attestazione. In altre parole, puoi attestare un'enclave ad un'altra enclave. Puoi anche attestare cose che vengono eseguite al di fuori delle enclave. Ti dà la possibilità di fidarti del software che viene eseguito altrove.

La compilazione dei binari è un altro utilizzo. Uno dei grandi problemi nel Dipartimento della Difesa, ad esempio, è che vogliono essere garantiti che tutto ciò che è stato incluso nella compilazione possa essere rintracciato allo sviluppatore che lo ha scritto. Soprattutto nei sistemi embedded in cui il software controlla macchine da milioni di dollari che possono uccidere persone o salvare vite. Deve esserci piena tracciabilità per contribuire a garantire responsabilità e che lo sviluppo sicuro sia stato eseguito.

Oltre agli attacchi di dumping della memoria, un altro problema di attacco risolto da Anjuna è assicurarsi che nei casi in cui è necessario accedere al kernel, protegga tutto ciò che deve essere coperto in quell'interazione tra l'enclave e il mondo esterno. Inoltre, può proteggere dall'accesso al codice e rendere segreti disponibili solo per l'enclave. Inoltre, se qualcuno accede a una macchina, non sarà in grado di trovare un certificato TLS in chiaro o la chiave usata per criptarlo.

Ogni fornitore di servizi cloud offre ambienti sicuri, e Anjuna li supporta tutti. Supportano anche tecnologie on-prem. Oltre all'offerta principale, Anjuna può anche abilitare la capacità di crittografare i tuoi dati a riposo e in transito senza modificare il tuo software, anche nelle applicazioni legacy o nelle nuove applicazioni che non supportano la crittografia di ogni singolo file di dati.

Per ulteriori informazioni, visita anjuna.io, o consulta un white paper scritto da Darren e Ofir su embracingdigital.com.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
