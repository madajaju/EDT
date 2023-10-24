---
layout: posts
title: "Proteggere la tua pipeline DevOps"
number: 46
permalink: episode-EDT46-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 46
tags:
    - devops
    - compute
    - technology
    - process
    - devsecops
    - cybersecurity
    - zerotrustarchitecture

date: Wed Apr 07 2021 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "Nella seconda parte di questo episodio, Darren Pulsipher, Chief Solution Architect di Intel, fornisce consigli pratici per proteggere ogni fase del DevOps pipeline, incluso la protezione dell'hardware e delle pile software con il hardware radice di fiducia, la scansione di sicurezza, i container/VM attestati ed criptati e altro ancora."
video: "https://youtu.be/sf0VaCpQLVE"
description: "Nella seconda parte di questo episodio, Darren Pulsipher, Chief Solution Architect di Intel, fornisce consigli pratici per proteggere ogni fase del DevOps pipeline, incluso la protezione dell'hardware e delle pile software con il hardware radice di fiducia, la scansione di sicurezza, i container/VM attestati ed criptati e altro ancora."
---

<div>
{% include transistor.html id="3abb647c" title="#46 Securing your DevOps Pipeline" %}

{% include youtube.html id="sf0VaCpQLVE" %}
</div>

---

## I Vettori di Attacco

Molti attacchi avvengono a livello individuale delle persone. Alcuni degli attacchi più recenti e subdoli si sono concentrati sul phishing e sull'ingegneria sociale rivolta agli individui all'interno di DevOps. Abbiamo bisogno di addestrare meglio le persone a tutti i livelli. In un caso, è stato uno stagista con accesso alle chiavi che è caduto vittima di un piano malvagio.

Un altro vettore è la tecnologia: attacchi tradizionali di negazione del servizio, attacchi di iniezione SQL o attacchi di andamento dell'overflow. Gli ultimi incidenti utilizzano sia persone che tecnologia per attaccare il processo. Sono insidiosi perché si verificano durante il processo di costruzione e possono essere molto difficili da individuare. Possono anche propagare codice maligno attraverso i clienti. Per instillare fiducia nei clienti, le organizzazioni devono avere una strategia per proteggere la pipeline di fornitura.

## Sicurezza della pipeline

Non tutte le build pipeline sono uguali, ma in generale, sono composte da quattro fasi con relativi ambienti: sviluppo, compilazione, test e produzione. Queste fasi possono essere facilmente suddivise in più stadi a seconda del tipo di prodotto che stai sviluppando, ma gli ambienti sono collegati a tali diverse fasi.

Dobbiamo analizzare l'intero processo, che comprende software, hardware e procedure, e adottare un approccio diverso anziché concentrarsi solo sull'infrastruttura, come hanno fatto efficacemente la maggior parte.

## Sicurezza del server e dell'infrastruttura

In fondo alla pila, è necessario proteggere l'hardware nell'ambiente di sviluppo e compilazione. L'ambiente di test sarà un po' diverso perché potresti voler eseguire test che coinvolgono l'iniezione di codice maligno. Gli ambienti di produzione di solito sono ben protetti, specialmente adesso che molte aziende offrono software come servizio. Negli ambienti di produzione e compilazione, devi adottare tutte le misure di sicurezza tipiche che adotteresti negli ambienti di produzione o SaaS.

Ci sono tre elementi chiave in questi ambienti. Il primo è la rilevazione. La rilevazione e la risoluzione dei problemi sono noti come misura di sicurezza utilizzando i registri di servizio che utilizzano una piattaforma come Splunk per trovare qualunque cosa fuori dall'ordinario. Assicurati di farlo non solo negli ambienti di sviluppo, ma anche in quelli di costruzione e produzione.

Tieni presente che nell'ambiente di test avrai bisogno di più ambienti di test, alcuni più sicuri di altri sul lato della rilevazione poiché desideri inserire codice errato nei tuoi test. Non distribuire semplicemente la sicurezza uniformemente in tutti gli ambienti; i profili di sicurezza possono essere diversi per ogni ambiente.

La prevenzione è la seconda chiave. Ciò significa essere attenti con l'hardware, assicurarsi che le cose siano correttamente aggiornate, avere gli aggiornamenti di sicurezza corretti e farlo in modo automatizzato. Questo dovrebbe avvenire in tutte le ambientazioni, inclusa l'ambiente di test, e soprattutto durante la creazione e la produzione.

La terza chiave fa parte della prevenzione: la radice affidabile dell'hardware. Una catena di fiducia può essere stabilita dall'hardware, attraverso le sezioni di avvio del firmware, fino ai supervisori e ai sistemi operativi. La radice della fiducia può essere portata nei contesti di sviluppo, costruzione, test e produzione. Questo può includere contenitori sicuri e macchine virtuali sicure. Ad esempio, mi piace conservare le mie chiavi di crittografia e di hash nell'hardware come un modulo TPM e poi anche con l'estensione Secure Guard di Intel. Anche se qualcuno accedesse alla macchina, non sarebbe in grado di rubare quelle chiavi.

## Eseguibili affidabili

L'impostazione degli eseguibili fidati è il passaggio successivo. Ciò significa che puoi eseguire controlli di sicurezza sul codice che viene controllato e compilato e quindi effettuare il check-in con l'hash delle modifiche apportate. Se è stato inserito qualcosa nella base del codice, puoi rilevarlo, poiché non dovrebbero esserci modifiche al codice durante il processo di compilazione.

In una nuova fase di controlli di sicurezza, è possibile eseguire l'analisi statica del codice o l'analisi dinamica del codice o violazioni di sicurezza. Ci sono alcuni ottimi strumenti che è possibile integrare facilmente nel proprio tipico flusso di lavoro DevOps, sia che si utilizzi Jenkins o i flussi di lavoro di GitHub, ad esempio.

Una volta che un eseguibile è stato costruito, crea immediatamente l'hash e quel hash dovrebbe essere versionato con l'eseguibile; dovrebbe rimanere l'eseguibile che viene sottoposto a tutti i test e spinto in produzione. Quell'hash garantirà che nulla sia stato manomesso.

## Immagini attestata e sicure.

Solitamente, ci sono diversi repository o eseguibili da utilizzare per il codice. L'hash che viene creato durante la compilazione è ora nel registro e puoi attestarlo. Puoi proteggere quelli nelle immagini in modo che non possano essere modificati. Se qualcuno ha bisogno di tornare indietro e apportare una piccola modifica, ad esempio una etichetta o metadati, è importante non apportare la modifica e darle lo stesso numero di versione. È meglio passare di nuovo attraverso il ciclo, anche se ci vuole più tempo che avere processi manuali che si intromettono nei tuoi binari.

Ora, puoi prendere lo stesso binario su cui hai eseguito tutti i test e spingerlo in produzione. A questo punto, è un errore ricostruire il codice sorgente. È meglio spingere la build originale nel repository di produzione, o dorato. Questo repository è l'unico luogo da cui recuperare immagini, binari o macchine virtuali, ad esempio. Tutte le immagini devono essere notarizzate e certificate. Se hai macchine virtuali o applicazioni confidenziali, o desideri assicurarti che finiscano solo su hardware specifico, puoi impostare questo tipo di restrizioni. Puoi crittografare le macchine virtuali, i contenitori o persino i binari e bloccarli con la chiave che è memorizzata nei tuoi sistemi di build e produzione.

## Iniettare Strumenti di Sicurezza

Gli strumenti di sicurezza devono essere integrati nel processo di costruzione. Invece di prendere liberamente librerie di sicurezza open source o ricreare quelle già esistenti, i tuoi ingegneri della sicurezza dovrebbero essere coinvolti in modo che possano scegliere strumenti che possano essere facilmente utilizzati e riutilizzati dai team di sviluppo. Un buon esempio è l'autenticazione di base: il login dell'utente. Dovrebbe esistere una libreria comune anziché ogni applicazione avere la propria.

È importante trattare queste librerie di sicurezza e strumenti proprio come faresti con qualsiasi altro programma di sviluppo software che stai condividendo all'interno della tua organizzazione. La condivisione ridurrà i tempi e aumenterà la sicurezza in tutto il tuo ecosistema.

## Costruisci una volta, distribuisci sicurezza ovunque.

Una volta che hai istituito i tuoi team di sicurezza degli sviluppatori, assicurati di iniettare le politiche e gli strumenti in tutti i tuoi prodotti e ambienti. Oggi esistono delle ottime tecnologie che ti consentono di gestire più ambienti. Quindi, quando viene creato un nuovo applicativo, viene creato con un profilo di sicurezza usando le tue immagini di macchine virtuali o contenitori come immagini di base utilizzate dai team di sviluppo. Configurando la sicurezza nelle tue VM o contenitori nelle immagini di base, otterrai una conformità istantanea su diversi ambienti. È inoltre possibile integrarsi con strumenti di sicurezza, in modo che se si trova qualcosa di insolito nell'applicazione, è possibile notificarlo agli strumenti di sicurezza. Non cercare di creare strumenti di sicurezza che gestiscano il cento per cento dei casi, perché non li finiresti mai; punta all'ottanta percento come base solida e creali in modo che gli sviluppatori possano innovare l'ultimo venti percento se necessario, in collaborazione con il tuo team di sicurezza.

Un ultimo consiglio importante è automatizzare tutto ciò che puoi, soprattutto nel processo DevOps, per prevenire iniezioni maliziose. Proteggi la tua pipeline; proteggi il tuo processo.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
