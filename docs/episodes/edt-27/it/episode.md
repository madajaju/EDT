---
layout: posts
title: "Sicurezza Hardware: Imperativo per la Trasformazione dei Dati"
number: 27
permalink: episode-EDT27-it
lang: it
nav_exclude: true
nav_order: 27
tags:
    - attackers
    - encryption
    - compliance
    - zerotrust
    - cybersecurity
    - technology
    - policy

date: 2020-10-28T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Jesse Schrater

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, settore pubblico, Intel, e Jesse Schrater, Security Manager, Gruppo Data Platforms, Intel, discutono del panorama attuale della sicurezza e di come la tecnologia Intel SGX e l'ecosistema di partner offrano una soluzione provata e tempestiva per i dati in uso e altre preoccupazioni legate alla sicurezza."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solution Architect, settore pubblico, Intel, e Jesse Schrater, Security Manager, Gruppo Data Platforms, Intel, discutono del panorama attuale della sicurezza e di come la tecnologia Intel SGX e l'ecosistema di partner offrano una soluzione provata e tempestiva per i dati in uso e altre preoccupazioni legate alla sicurezza."
---

<div>
{% include transistor.html id="360a1ce9" title="#27 Hardware Security: Imperative for Transforming Data" %}

{% include youtube.html id="url" %}
</div>

---

## Paesaggio della sicurezza dei dati

Il mondo è diventato incredibilmente connesso con tutti i dispositivi e ciò sta generando una crescita esponenziale nella quantità di dati che dobbiamo gestire: più volume, più rischi. È una sfida, e sfruttare nuove capacità di calcolo come il cloud, l'analisi e il computing periferico aumenta ulteriormente la complessità.

Ci sono tre tendenze principali nella sicurezza: la crittografia di tutto, l'isolamento del carico di lavoro e una catena di fiducia. Queste tre aree sono importanti per aiutare le organizzazioni a gestire l'aumento dei requisiti normativi per mantenere protetti i dati.

Quando le organizzazioni decidono di effettuare una trasformazione digitale, o quando si trovano ad affrontare un catalizzatore come il COVID 19 che richiede il lavoro a distanza, ad esempio, la sicurezza deve andare di pari passo per mantenere controlli e conformità in materia di sicurezza. Se affronti la sicurezza lungo il percorso dei tuoi sviluppi e delle tue implementazioni, sarai in grado di trasformare il modo in cui fai affari in modo sostenibile.

## Proteggere i dati durante il loro ciclo di vita.

Cifrare i dati è importante in tutte le sue fasi. Storicamente, gli attaccanti potevano accedere ai dati tramite la rete. Dopo che questi sono stati crittografati, hanno iniziato a violare i data center e ad estrarre i dati dai database. Quindi abbiamo iniziato a cifrare lo storage. Tuttavia, i dati arrivano a un endpoint, vengono caricati in memoria e decifrati, quindi un attacco sofisticato con accesso root potrebbe potenzialmente rubare o manipolare i dati in quel punto di elaborazione. Questo attacco ai dati in uso è la nuova frontiera per gli attaccanti e per coloro che difendono lo spazio. Intel ha alcune nuove capacità eccitanti e innovative che stiamo incorporando nei nostri processori per aiutare i proprietari dei dati, i proprietari delle applicazioni, i fornitori di servizi e fondamentalmente l'intero ecosistema a chiudere queste potenziali vulnerabilità.

## Perché proteggere i dati in uso?

In molti casi, gli attaccanti utilizzano scalate di privilegi a livello del sistema operativo o dell'Hypervisor. Potrebbero arrivare tramite un sistema operativo ospite, un sistema operativo host o addirittura attraverso l'accesso fisico all'hardware del server. Gli attaccanti potrebbero essere intrusioni di tipo malware di hacker classici, competitori di terze parti o insider come un amministratore o un amministratore di sistema presso un fornitore di servizi.

## Intel Software Guard Extensions (Intel SGX) can be translated to Italian as Estensioni Intel Software Guard (Intel SGX).

Intel ha introdotto una nuova tecnologia nei nostri processori chiamata Intel Software Guard Extensions, o SGX. Questa fa parte del paradigma del calcolo riservato che sta esplodendo sul mercato in questo momento, poiché le aziende stanno cercando di trasformare i loro dati e mantenerli privati. SGX affronta questi nuovi tipi di attacchi consentendo all'applicazione di comunicare direttamente con il processore nella memoria criptata, evitando il sistema operativo, l'ipervisore e fondamentalmente tutto il resto del sistema. Quindi, anche se si verificasse una violazione nel sistema operativo, nell'ipervisore o in altre applicazioni, gli attaccanti non potrebbero accedere a quei dati perché il sistema operativo stesso non ha la visibilità di quei dati. Pertanto, non è necessario fidarsi del provider né del resto dello stack di sistema, poiché si opera essenzialmente come se fossero già compromessi, e il codice e i dati rimarranno confidenziali e inalterati; avranno un'integrità.

Intel sta cercando di far sì che tu debba fidarti del minor numero possibile di componenti. SGX si spinge più avanti lungo questo percorso per il data center rispetto a tutto ciò che abbiamo visto finora. Tutto ciò di cui devi fidarti è la tua stessa applicazione e il processore stesso.

SGX offre una potente capacità per le aziende come i fornitori di servizi cloud, i quali possono garantire ai loro clienti che né loro né il governo, ad esempio, potrebbero accedere ai vostri dati anche se lo volessero.

## Intel SGX in Azione

SGX è già ampiamente utilizzato dai fornitori di servizi cloud e dai produttori di software, ma in alcuni aspetti, stiamo solo cominciando. Nonostante questa tecnologia sia stata disponibile per diversi anni, abbiamo sviluppato ecosistemi, e stiamo introducendo nuove capacità nei nostri prossimi processori Xeon Ice Lake di terza generazione. Ciò espanderà le sue capacità, la sua capacità di scalare su carichi di lavoro aziendali di grandi dimensioni e sarà in grado di proteggere porzioni di memoria molto più grandi con migliori prestazioni e su un'ampia gamma di centri dati mainstream.

Intel è uno dei membri fondatori del Consorzio per l'Elaborazione Confidenziale, che fa parte della Linux Foundation. La maggior parte dei grandi fornitori di servizi cloud, molti provider di software, e persino i nostri concorrenti nel settore dei semiconduttori stanno lavorando insieme su questo tipo di soluzioni di ambiente di esecuzione fidato e stanno stabilendo standard per gestire questa tipologia di capacità. Stiamo anche aumentando la consapevolezza sulla necessità e il valore commerciale dell'elaborazione confidenziale.

## Ecosistema di partner software di Intel SGX

SGX fornisce molte opzioni d'uso a seconda di ciò che il proprietario dei dati sta cercando. Se un cliente desidera il massimo livello di controllo dettagliato, SGX glielo permette. Infatti, possono essenzialmente ridurre la loro applicazione solo ai dati codificati che vogliono tenere isolati dal resto del sistema, o anche solo a una parte di quell'applicazione. Questo scenario, però, richiede loro di scrivere l'applicazione per quel determinato scopo. Nell'ecosistema, ci sono risorse open source che rendono molto più facile questo tipo di sviluppo e che sta sempre crescendo.

Dall'altra parte c'è il trasferimento rapido del percorso lift and shift. Puoi prendere la tua applicazione e inserirla in un ambiente più sicuro. L'ecosistema sta rispondendo e creando contenitori SGX-aware. Potresti inserire la tua applicazione non modificata in quell'ambiente in cui è l'unica cosa in esecuzione, così l'applicazione stessa pensa di essere in esecuzione nel suo ambiente nativo.

I nostri partner dell'ecosistema hanno fatto molti progressi in questo settore con cose come Fortanix, Graphene e Scone. Alcuni sono open source e altri sono proprietari, ma offrono tutti i servizi già incorporati. Ad esempio, Microsoft Azure Confidential Computing offre l'intera gamma, dalle soluzioni di lift and shift con SGX fino agli SDK che ti consentono di sviluppare direttamente la tua applicazione per esso e di inserirla nel loro ambiente in modo da non dover gestire nemmeno l'hardware. Ci sono un'ampia gamma di opzioni, quindi nessuno dovrebbe temere le complessità di SGX. I clienti dovrebbero anche avere fiducia che materiali sensibili come algoritmi di machine learning o chiavi di cifratura saranno gestiti con un livello di protezione molto granulare.

## Informatica riservata: Un cambiamento epocale nella sicurezza

SGX è stato là fuori per un po' di tempo e abbiamo lavorato per espanderlo. È stato testato e messo alla prova, con centinaia di articoli di ricerca e miglioramenti nel tempo. Ha il vantaggio di non essere il novellino del quartiere, ma piuttosto una soluzione di base che viene introdotta nel mainstream con Ice Lake. Non è più focalizzato su aree piccole e sensibili, ma è pronto ora per gli obiettivi più importanti.

Il governo, i servizi finanziari e l'assistenza sanitaria sono alcune delle industrie che hanno visto l'appeal di SGX fin dall'inizio perché hanno molte aspettative regolamentari e requisiti di privacy, ma stanno cercando di condividere dati e fare cose innovative con più parti. Le aziende hanno situazioni simili, ad esempio se vogliono passare al cloud pubblico ma non si fidano di proteggere i loro dati sensibili. Con SGX, non devono fidarsi del fornitore.

Intel ha appena fatto un grande annuncio questo mese e stiamo aprendo le porte su ciò che ci aspetta. Un ottimo punto di partenza è intel.com/sgx per testimonianze e approfondimenti sulle informazioni. I clienti dovrebbero cercare i partner dell'ecosistema come Azure e Fortanix. Un'altra fonte per informazioni è il Confidential Computing Consortium a causa del numero di persone che lavorano in quel settore.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
