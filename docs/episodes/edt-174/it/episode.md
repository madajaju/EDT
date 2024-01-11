---
layout: posts
title: "Applicazione Zero Trust con Calcolo Riservato"
number: 174
permalink: episode-EDT174-it
has_children: false
lang: it
nav_exclude: true
parent: Episódios
grand_parent: Italiano
nav_order: 174
tags:
    - confidentialcomputing
    - encryptingdata
    - datasecurity
    - sgx
    - fortanix
    - datasecuritymanager
    - globalkeymanagement
    - encryptionkeys
    - databaseencryption
    - datasecurityplatform
    - truetrustapplications
    - confidentialcomputingmanager
    - onprem
    - privatecloud
    - publiccloud
    - zerotrust
    - futureofconfidentialcomputing
    - distributedanalytics
    - zta
    - cybersecurity

date: Thu Nov 16 2023 00:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Patrick Conte
    - Darren W Pulsipher

img: thumbnail.jpg
image: thumbnail.jpg
summary: "In questo episodio Darren intervista Patrick Conte di Fortanix sulla leva del calcolo confidenziale nella sicurezza delle applicazioni nelle architetture di fiducia zero."
video: "https://youtu.be/UWYLz_a9CsE"
description: "In questo episodio Darren intervista Patrick Conte di Fortanix sulla leva del calcolo confidenziale nella sicurezza delle applicazioni nelle architetture di fiducia zero."
---

<div>
{% include transistor.html id="a2bed64b" title="#174 Zero Trust Application with Confidential Computing" %}

{% include youtube.html id="UWYLz_a9CsE" %}
</div>

---

## L'Evoluzione del Calcolo Riservato

Il calcolo riservato consente di crittografare i dati non solo a riposo e in transito, ma anche mentre sono attivamente in uso. Ciò protegge contro gli attacchi anche se un attaccante ottiene l'accesso root, poiché i dump della memoria mostreranno solo dati criptati inutili. La tecnologia Software Guard Extensions (SGX) di Intel fornisce una base hardware per il calcolo riservato. Fortanix si basa su SGX e su i relativi progressi di Intel per rendere il calcolo riservato accessibile e facile da usare.

Un'offerta chiave di Fortanix è la loro piattaforma Data Security Manager. Questa sostituisce le soluzioni di crittografia hardware progettate per scopi specifici con la crittografia software alimentata da SGX enclaves. Data Security Manager consente funzioni crittografiche avanzate come la gestione globale delle chiavi per milioni di chiavi di crittografia, tutte da una console unificata. Può anche gestire la crittografia del database, la gestione dei certificati e altre necessità critiche di protezione dei dati. Questo approccio definito dal software rappresenta il futuro della sicurezza dei dati.

## Abilitazione di Applicazioni con Autentico Zero Trust

Il calcolo riservato ha implicazioni che vanno oltre la semplice sicurezza dei dati. Permette anche di associare direttamente profili di sicurezza alle applicazioni stesse, in modo che la sicurezza viaggi con l'applicazione indipendentemente da dove viene eseguita. Fortanix analizza le applicazioni per valutare se possono funzionare senza problemi negli enclavi SGX. Se sono necessarie modifiche, forniscono indicazioni su come riscrivere parti in lingue amichevoli dell'enclave come Python.

La soluzione di Gestione del Calcolo Confidenziale di Fortanix orkestra applicazioni crittografate in diversi ambienti, come on-prem, cloud privato e cloud pubblico. Questo motore di orchestrazione ha raggiunto lo zero trust non solo per i dati sensibili, ma anche per le applicazioni critiche per l'azienda. I carichi di lavoro possono essere spostati dinamicamente verso differenti ambienti abilitati SGX secondo necessità, mantenendo la sicurezza end-to-end.

## Il Futuro della Calcolo Confidenziale

Ci sono molti possibili casi d'uso eccitanti per il computing confidenziale, come l'esecuzione collaborativa di analisi distribuite all'interno di enclave sicure isolate. Sebbene in passato ci fossero significative penalità sulle prestazioni, i miglioramenti apportati da Intel e Fortanix hanno ora ridotto il sovraccarico a percentuali a una sola cifra nella maggior parte dei casi. L'adozione sta crescendo rapidamente in sanità, governo, finanza e altre industrie per proteggere algoritmi di valore e carichi di lavoro regolamentati. Man mano che il computing confidenziale diventa più ubiquo e accessibile, formerà un pilastro fondamentale delle moderne architetture zero trust.

## Conclusione

Questo podcast illuminante offre una visione stimolante su come il calcolo riservato possa abilitare applicazioni basate su una reale fiducia zero. La capacità di crittografare i dati in uso e allegare profili di sicurezza alle applicazioni apre intriganti nuove possibilità per la protezione dei dati end-to-end e la sicurezza delle applicazioni in ambienti dinamici. Man mano che le minacce diventano più sofisticate, il calcolo riservato aumenterà solo in importanza strategica.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
