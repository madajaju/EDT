---
layout: posts
title: "Non tutti i nuclei sono uguali."
number: 45
permalink: episode-EDT45-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 45
tags:
    - multicloud
    - compute
    - optimization
    - workloadplacement
    - workload
    - migration
    - process
    - cloudinstance

date: Tue Mar 30 2021 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Steven Holt

img: thumbnail.png
image: thumbnail.png
summary: "In questo episodio, Darren Pulsipher, Chief Solution Architect di Intel, e Stephen Holt, Cloud Solution Architect di Intel, discutono dell'ottimizzazione del cloud e degli studi che dimostrano che i core si comportano in modo diverso per diversi carichi di lavoro."
video: "https://youtu.be/url"
description: "In questo episodio, Darren Pulsipher, Chief Solution Architect di Intel, e Stephen Holt, Cloud Solution Architect di Intel, discutono dell'ottimizzazione del cloud e degli studi che dimostrano che i core si comportano in modo diverso per diversi carichi di lavoro."
---

<div>
{% include transistor.html id="cd1f0343" title="#45 Not All Cores are Equal" %}

{% include youtube.html id="url" %}
</div>

---

Intel ha assunto architetti di soluzioni cloud per aiutare i clienti a spostarsi in modo intelligente verso le istanze cloud appropriate per i loro carichi di lavoro. Stephen è recentemente entrato a far parte di Intel ed ha una lunga esperienza generale nei database, con gli ultimi sette o otto anni focalizzati sul cloud, sfruttando le sue risorse per i clienti.

Alcuni degli aspetti più difficili con cui Stephen si è confrontato nell'aiutare i clienti a passare al cloud sono la determinazione del prezzo e le aspettative per il trasferimento. I fornitori di servizi cloud spesso affermano che i clienti risparmieranno denaro passando al cloud, ma questo spesso non è il caso.

Una ragione è che c'è un cambiamento costante nel mercato dei fornitori di servizi cloud competitivi in termini di caratteristiche, funzioni e capacità. Un'altra ragione è l'ignoranza, ad esempio credere che un VCP centrale sia lo stesso per tutti. La migrazione con una mentalità di "prende e sposta" può essere anche molto costosa. L'ottimizzazione è fondamentale per una migrazione intelligente verso il cloud.

Per ridurre i costi e potenzialmente risparmiare una grande quantità di denaro, devi scegliere le istanze giuste per le giuste performance. Non tutti i core, o CPU virtuali, sono uguali. All'interno di AWS, hanno le M4, le Broadwell di Intel e le M5, che sono una combinazione di Cascade Lake e Skylake, e diversi carichi di lavoro possono sfruttare in modo molto diverso queste piattaforme.

## Prestazioni CoreMark

CoreMark è un'applicazione a thread singolo che testa i movimenti dei registri e le semplici aggiunte per qualsiasi numero di CPU. Attraverso tre generazioni di processori Intel, Broadwell, Skylake e Cascade Lake, questo test mostra pochissime differenze tra di loro. Questa informazione è stata erroneamente utilizzata per guidare le decisioni dei clienti, dato che il test non è un modo efficace per misurare le differenze nei processi stessi. Ci possono essere enormi differenze nelle prestazioni con carichi di lavoro diversi.

## Database prestazioni WL

Stephen ha eseguito test digitali su carichi di lavoro reali, focalizzandosi su database open source. L'ambiente Cascade Lake è stato tre volte migliore dell'ambiente Broadwell per gli open source, il che ha senso considerando i progressi in termini di velocità e i progressi su chip che sfruttano l'accesso a bassa latenza. Quindi, avanzare di due generazioni porta a un miglioramento delle performance di due o tre volte su questi carichi di lavoro.

Il carico di lavoro e il core devono essere considerati insieme. Ad esempio, un cliente potrebbe essere tentato di passare a una VCPU che Amazon afferma essere più economica del 10%. AWS potrebbe comunque imballare i core su questi processori e ti trovi ora a passare da un ambiente in cui sei una delle 48 macchine virtuali su una scatola a uno in cui ci sono 128 macchine virtuali; il tuo accesso alla memoria è limitato e potresti ottenere il 60% in meno di prestazioni per un risparmio del 10%.

Le organizzazioni spesso credono che se esternalizzano verso il cloud, non abbiano più bisogno di un architetto di sistemi. È vero che gli architetti non devono più installare fisicamente e configurare le macchine, ma lo fanno ora virtualmente e devono comprendere cosa offrono le diverse istanze per differenti carichi di lavoro.

Intel sta lavorando su uno strumento per mostrare quale carico di lavoro funziona meglio su quali istanze. Nel frattempo, Intel ha alcune linee guida generali e architetti di soluzioni cloud per aiutare a guidare i clienti.

Inoltre, è importante effettuare molti test per capire dove posizionare i carichi di lavoro, ma è anche importante testare e fare benchmark per convalidare che si stia ottenendo ciò che ci si aspetta da un provider.

## Database WL Performance – Non NVMe

Prestazioni del database WL - Non NVMe

Intel ha effettuato alcuni test sulle carichi di lavoro su installazioni fresche su un'istanza a 64 core con 64 VCPU fisse. Dopo aver ottenuto il numero iniziale, è stata istanziata un'altra istanza e lo stesso test è stato eseguito nuovamente. I risultati variavano drasticamente da un test all'altro. Ciò potrebbe essere dovuto al fatto che potrebbero esserci una combinazione di processi offerti a un determinato livello di tier, oppure potrebbero esserci distanza e latenze aggiuntive sugli allegati di archiviazione a blocchi, ad esempio, o addirittura rumori di vicini. Quindi vale la pena fare dei test per essere sicuri che il sistema soddisfi le aspettative.

In breve, per ottenere il massimo valore dalla cloud, devi educarti, testare i sistemi e sfruttare l'aiuto disponibile.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
