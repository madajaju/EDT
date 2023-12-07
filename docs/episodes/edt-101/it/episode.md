---
layout: posts
title: "Sicurezza del controller di rete con Elisity"
number: 101
permalink: episode-EDT101-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 101
tags:
    - networksecurity
    - cybersecurity
    - elisity
    - comms
    - technology
    - process

date: Mon Aug 22 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Dan Demers
    - Dana Yanch

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher di Intel, Chief Solutions Architect, settore pubblico, intervista gli esperti di sicurezza di rete Dana Yanch e Dan Demers di Elisity sulle tecniche di sicurezza del controller di rete e sulle architetture di fiducia zero."
video: "https://youtu.be/url"
description: "Darren Pulsipher di Intel, Chief Solutions Architect, settore pubblico, intervista gli esperti di sicurezza di rete Dana Yanch e Dan Demers di Elisity sulle tecniche di sicurezza del controller di rete e sulle architetture di fiducia zero."
---

<div>
{% include transistor.html id="d4feba70" title="#101 Network Controller Security with Elisity" %}

{% include youtube.html id="url" %}
</div>

---

Dana ha lavorato nell'ambito delle reti hardcore negli ultimi 15 anni. Ha lavorato con le reti definite dal software e le reti wide area, concentrandosi per un periodo sul mondo SD-WAN. Successivamente ha lavorato con il cloud ma è tornato alle sue radici con la sicurezza di rete presso Elisity.

Dan ha lavorato principalmente nel networking, ma ha iniziato con servizi avanzati presso Cisco e ha svolto qualche lavoro nel settore petrolifero e del gas a Houston. Successivamente è passato allo spazio SASE SD-WAN, dove ha lavorato con Dana. Ora si concentra sulla sicurezza delle reti e sulla sicurezza definita dal software. Dan afferma che il termine, tuttavia, è sfuggente perché la tecnologia riguarda la micro-segmentazione attraverso l'identità.

Il modo tradizionale per creare una micro-segmentazione attraverso VLAN e firewall non è più sufficiente. Per 15 anni, la sicurezza di rete si è concentrata sul rafforzamento del perimetro della rete. Creare un muro impenetrabile intorno a un'azienda rimane essenziale e i firewall svolgono un lavoro incredibile nel tenere le persone fuori dalla rete. Ma per la maggior parte, all'interno della rete, dove c'è stata un'esplosione di nuovi requisiti di connettività a causa di IoT e OT, è un "Far West" una volta che un utente è all'interno. Poiché il muro esterno è robusto, chiunque sia all'interno viene spesso considerato un utente legittimo o affidabile.

La realtà è che la maggior parte degli attacchi attuali avviene all'interno della rete attraverso utenti, dispositivi e applicazioni fidati sfruttati.

Ci sono molti motivi per cui sfruttare VLANS, ACL IP, firewall e metodi di segmentazione tradizionali non funzionano più oggi per la sicurezza del movimento laterale. Possono funzionare in ambienti statici su piccola scala. Funzionano molto bene per il bordo della rete e luoghi specifici come punti di congestione o aggregazione, ma ci sono tre ragioni comuni per cui non sono più ideali.

In primo luogo, la scalabilità e l'efficienza operativa dei metodi tradizionali sono discutibili. La gestione delle VLAN, delle ACL IP e dei firewall nelle grandi aziende avviene manualmente. Non si tratta di un'architettura distribuita definita dal software, ma richiede una configurazione box per box, linea per linea. Non sono dinamici né reattivi a qualunque cosa nella rete. Il loro utilizzo crea inoltre una rete con molti buchi casuali come un formaggio svizzero. Gli utenti, specialmente gli operatori di reti, sono spesso il maggior rischio di un sistema. Potrebbero ad esempio aprire una VLAN o modificare una parte per effettuare un test rapido, ma poi non annullano la modifica.

Un altro esempio è che una VLAN partirà da un caso d'uso e si estenderà gradualmente ad altri casi d'uso. Improvvisamente, quello che era una VLAN con dieci dispositivi ne avrà ora sessanta. Nel mondo OT, potrebbe avere sei o sette processi diversi in esecuzione al suo interno perché si trattava della LAN affidabile. Tuttavia, spesso questi ambienti crescono lentamente e non sono documentati, quindi il rischio passa inosservato.

Il secondo problema è che le VLAN e i firewall sono intrinsecamente nel posto sbagliato nella rete per fornire sicurezza del movimento laterale. Se ti trovi nella stessa VLAN di un altro dispositivo, utente o applicazione, quel canale di comunicazione è aperto anche se potrebbe non essere necessario. I firewall di solito non vengono distribuiti in un luogo strategico in cui possono gestire il livello di accesso del movimento laterale. Devi convogliare il traffico verso un firewall e farlo tornare indietro, il che è inefficiente. Poi hai un collo di bottiglia.

Gli attori sbagliati stanno esaminando le reti per capire come possono distorcerle per ottenere un certo risultato, non come dovrebbero o erano intese a funzionare. Ad esempio, se un utente è in una VLAN e un processo è in esecuzione all'interno di un caso d'uso, non c'è nulla che li impedisca di passare dalla porta 3 alla porta 32 nella stessa VLAN. Spesso le persone progettano la sicurezza attorno all'uso previsto anziché a come potrebbe essere utilizzata. È comune, ad esempio, che gli sviluppatori di software facciano salti di porta per lavorare efficacemente, ma questo è pericoloso perché li lascia aperti. Nessuno può posizionare centinaia o migliaia di firewall lungo l'intero bordo di accesso. Sarebbe restrittivo dal punto di vista economico e impossibile da gestire.

Il terzo problema è che queste soluzioni di segmentazione legacy non considerano l'identità, il contesto o il comportamento dell'asset connesso alla rete. Si tratta di una topologia rigida e incentrata sulla rete che fornisce alcune misure di sicurezza essenziali. Tuttavia, un indirizzo IP non dice nulla sulla legittimità dell'asset né sulla rete a cui è collegato. Quindi, come puoi proteggere dinamicamente questa rete quando non sai cosa si sta connettendo ad essa? Non puoi creare una politica iniziale senza alcuna granularità; non funziona trattare ogni dispositivo come uguale.

Anche se esiste un'analisi del tipo di traffico, di solito avviene diversi salti più in alto, il che significa che ora sei esposto. Eventuali misure di sicurezza potrebbero o potrebbero non essere in grado di proteggere completamente l'infrastruttura.

Questa capacità di rilevamento ha ancora valore, anche se non vi è alcuna protezione. Tuttavia, la capacità di fermare qualcosa che avrebbe potuto accadere proprio al limite, il più vicino possibile all'attività, rappresenta una soluzione migliore.

Guarda il prossimo episodio di questa serie [qui](episode-EDT101).



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
