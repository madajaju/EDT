---
layout: posts
title: "La nascita delle piattaforme di intelligenza grafica"
number: 106
permalink: episode-EDT106-it
has_children: false
lang: it
parent: Episódios
grand_parent: Italiano
nav_order: 106
tags:
    - data
    - graphintelligenceplatform
    - graphdb
    - katanagraph
    - technology

date: Mon Sep 19 2022 20:00:00 GMT-0400 (Eastern Daylight Time)
guests:
    - Darren W Pulsipher
    - Greg Steck

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher di Intel, Chief Solutions Architect per il settore pubblico, e Greg Steck, Senior Director delle soluzioni settoriali presso Katana Graph, parlano dei vantaggi della piattaforma di intelligenza grafica di Katana."
video: "https://youtu.be/Bx7yeMhnBJg"
description: "Darren Pulsipher di Intel, Chief Solutions Architect per il settore pubblico, e Greg Steck, Senior Director delle soluzioni settoriali presso Katana Graph, parlano dei vantaggi della piattaforma di intelligenza grafica di Katana."
---

<div>
{% include transistor.html id="5fdeafa4" title="#106 The Birth of Graph Intelligence Platforms" %}

{% include youtube.html id="Bx7yeMhnBJg" %}
</div>

---

Greg ha iniziato la sua carriera presso una banca d'investimento nel settore del rischio di credito quando hanno iniziato a implementare i test di stress CCAR. Dopo avervi lavorato intensamente per un po' di tempo, ha iniziato a lavorare come consulente e si è familiarizzato con i grafici durante la convalida dei modelli di rischio di credito. Ha visto come i grafici potessero essere utilizzati per molteplici tipi di analisi e apportare vantaggi nella gestione dei dati e nell'apprendimento automatico, in particolare nella modellazione del credito. Da lì, ha trovato la sua strada verso Katana.

Gli analisti dei dati e gli scienziati dei dati lottano costantemente per integrare diversi set di dati. Greg è stato attratto dai grafici perché, dopo essere stato introdotto a RDF, un formato di grafo di conoscenza semantica, aveva intuitivamente senso come i dati potessero essere combinati e strutturati come un grafo.

Con le soluzioni di grafico esistenti, gli analisti hanno avuto difficoltà a scalare le proprie soluzioni perché gran parte dei loro dati era così grande. Katana Graph ha sviluppato la capacità di scalare e allo stesso tempo concentrarsi sull'apprendimento automatico.

All'inizio dei database a grafo, grandi aziende come Amazon e Facebook costruivano internamente database a grafo, facendo il loro modello e apprendimento automatico. Poi arrivarono versioni per consumatori delle piattaforme come Neo4j e TigerGraph per casi d'uso generali. La sfida era che erano incentrati sul database e non tanto sull'analisi e sull'apprendimento automatico, sui processi e sul calcolo effettivo del grafo. Erano limitati a essere una sorta di memorizzazione dei dati, focalizzandosi sull'ingestione e sulle operazioni CRUD e non tanto sui dati stessi.

Ci sono tre diverse tipologie di domini di calcolo grafico. La prima è la ricerca su grafi, il database a grafo e le operazioni CRUD. La seconda è l'analisi e l'estrazione di informazioni dai grafi utilizzando algoritmi come PageRank o clustering, che stanno diventando popolari. La terza area riguarda l'intelligenza artificiale e l'apprendimento automatico sui grafi. È qui che entrano in gioco le reti neurali a grafo. Ci sono soluzioni specifiche che risolvono parti specifiche di questi domini, ma Katana Graph si situa all'intersezione di questi.

Ciascuna delle tre piattaforme è importante. Per fare machine learning, hai bisogno degli altri due domini. Quando i dati vengono primariamente ingesti, devono subire molte trasformazioni per prepararli per il machine learning, quindi se non hai tutto questo in una soluzione unica, il flusso dei dati sarà lento, inviando i dati fuori e poi di nuovo dentro. È più efficiente iterare rapidamente sull'intero flusso dei dati. Inoltre, riduci il rischio di perdita dei dati perché stai riducendo il numero di volte in cui trasformi i dati.

Inoltre, poiché Katana Graph è una piattaforma cloud-native, puoi mettere in pausa, salvare un checkpoint, spegnere il cluster e riavviarlo successivamente, proprio da dove ti eri interrotto.

Un buon esempio è per la rilevazione delle frodi con un set di dati sulle transazioni Bitcoin. La piattaforma acquisisce i dati, che sono strutturati in modo che i portafogli Bitcoin siano i nodi nel grafo, e quindi i collegamenti tra di loro sono le transazioni. È un grafo semplice. L'idea è prevedere se un portafoglio Bitcoin è fraudolento. I portafogli illeciti per il riciclaggio di denaro, il traffico di droga, ecc. sono stati etichettati. Quando arriva un nuovo account, il compito è prevedere se è fraudolento. La parte difficile, quindi, è fare alcune operazioni di pre-elaborazione con le caratteristiche numeriche degli account. Un insieme di API è stato progettato per affrontare quel problema. Tutte le cose che i data scientist fanno per preparare le loro caratteristiche vengono fatte qui. Da lì, il grafo è pronto per essere inserito nel modello di apprendimento automatico, dove viene addestrato e quindi, utilizzando le reti neurali, puoi imparare come classificare gli account.

Un vantaggio della piattaforma è che i data scientist e gli ingegneri possono lavorare da una sola piattaforma anziché unire insieme pezzi diversi.

Un altro vantaggio è il costo totale di proprietà. A differenza di altre piattaforme, non è necessario mantenere il database di grafi in funzione tutto il tempo. Poiché i pipeline di Katana Graph sono progettati con una separazione tra archiviazione e calcolo, è possibile avviare facilmente un cluster, eseguire elaborazioni batch preventivamente e quindi eseguire inferenze in un sistema separato e ancora sfruttare ciò che è stato generato nel grafo.

Katana Graph è anche più veloce con grandi set di dati in quanto non carica tutti i dati inizialmente, ma ha un modo innovativo e dinamico di caricare i dati man mano che li si necessita mentre si lavora nel flusso di lavoro.

Le analisi di base sono molto più facili sul database grafico piuttosto che su un database relazionale. Se si hanno dieci diversi set di dati, può essere difficoltoso e soggetto ad errori per un analista capire come unirli per scrivere una query in un database relazionale. Con un grafico, si ha un modello singolare, già predefinito e costruito, quindi le domande saranno molto più facili perché i dati sono già collegati. Si può intuire facilmente come le informazioni sono correlate.

Una delle nuove caratteristiche di Katana è un'importante per i trame dei dati Dash. Dash è un framework comune che i data scientist utilizzano per l'elaborazione parallela dei trame dei dati. I data scientist possono lavorare con il trame dei dati che stanno già utilizzando e inglobarlo direttamente in Katana Graph per un'esperienza fluida e semplificata.

DevOps è una parte importante di ciò che Katana sta cercando di facilitare con la loro piattaforma. Si integrano facilmente nelle pipeline di apprendimento esistenti. Quando i graph neural networks vengono eseguiti, gli embedding possono essere esportati. Queste caratteristiche generate da un grafo possono essere utilizzate in un processo di machine learning. Quindi l'integrazione diventa molto più semplice e più facile da operazionalizzare e mettere in produzione.

Nel corso dei prossimi cinque anni, Greg immagina che le organizzazioni come le banche abbiano dei repository centralizzati per analizzare i dati dei clienti, del marketing o del credito per molteplici scopi. Ad esempio, l'output dai modelli di apprendimento automatico potrebbe essere utilizzato sia per il rischio di credito che per la rilevazione delle frodi. Invece di utilizzare set di dati isolati con molta replicazione e duplicazione tra di loro, ci sarebbe un modello comune sincronizzato all'interno di un grafico.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
