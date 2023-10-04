---
layout: posts
title: "The Birth of Graph Intelligence Platforms"
number: 106
permalink: episode-EDT106-en
has_children: false
lang: en
parent: Episodes
grand_parent: English
nav_order: 106
tags:
    - data
    - graphintelligenceplatform
    - graphdb
    - katanagraph
    - technology

date: Mon Sep 19 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Greg Steck

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Intel’s Darren Pulsipher, Chief Solutions Architect, Public Sector and Greg Steck, Senior Director of Industry Solutions, Katana Graph, talk about the benefits of Katana’s graph intelligence platform."
video: "https://youtu.be/Bx7yeMhnBJg"
description: "Intel’s Darren Pulsipher, Chief Solutions Architect, Public Sector and Greg Steck, Senior Director of Industry Solutions, Katana Graph, talk about the benefits of Katana’s graph intelligence platform."
---

<div>
{% include transistor.html id="5fdeafa4" title="#106 The Birth of Graph Intelligence Platforms" %}

{% include youtube.html id="Bx7yeMhnBJg" %}
</div>

---

Greg began his career at an investment bank in credit risk when they started implementing CCAR stress testing. After being heavily involved in that for some time, he began consulting and was introduced to graphs while doing credit risk model validation. He saw how graphs could be leveraged for many different kinds of analysis and had benefits in data management and machine learning, specifically in credit modeling. From there, he found his way to Katana.

Data analysts and data scientists are constantly struggling to integrate different data sets. Greg was drawn to graphs because after being introduced to RDF, a semantic kind of knowledge graph format, it made intuitive sense how the data could be combined and structured as a graph.

With existing graph solutions, analysts had difficulty scaling their solutions because much of their data was so big. Katana Graph developed the ability to scale and also focus on machine learning.

At the beginning of graph databases, large companies like Amazon and Facebook built in-house graph databases, doing their modeling and machine learning. Then came consumer versions of platforms such as Neo4j and TigerGraph for general use cases. The challenge was that they were centered around the database and not so much the analytics and machine learning, the processes, and actual graph computing. They were limited to being a kind of data store, focusing on the ingest and the CRUD operations and not as much on the data.

There are three different kinds of graph computing domains. The first is graph query, the graph database, and CRUD operations. The second is graph analytics and mining with PageRank, or clustering, algorithms, which are becoming popular. The third area is graph AI and machine learning. This is where graph neural networks come into the picture. There are point solutions that will solve specific parts of those domains, but Katana Graph sits at the intersection of those.

Each of the three platforms is important. To do machine learning, you need the other two domains. When the data is first ingested, it must undergo many transformations to prepare it for machine learning, so if you don’t have all of this in one solution, the pipeline will be slow, sending data out and back in. It’s most efficient to iterate on the whole pipeline quickly. It also reduces the risk of losing data because you are decreasing the number of times you transform the data.

In addition, since Katana Graph is a cloud-native platform, you can pause, save a checkpoint, spin down the cluster, and spin it back up later, right where you left off.

A good demo is for fraud detection with a Bitcoin transaction data set. The platform ingests the data, which is structured, so the Bitcoin wallets are the nodes in the graph, and then the edges between them are the transactions. It’s a simple graph. The idea is to predict if a Bitcoin wallet is fraudulent. Illicit wallets for money laundering, drug trafficking, etc., have been labeled. When a new account comes in, the task is to predict if it’s fraudulent. The challenging part, then, is to do some pre-processing with the numeric features of the accounts. A set of APIs has been designed to address that problem. All the things that data scientists do to prepare their features are done here. From there, the graph is ready to put into the machine learning model, where it is trained, and then, using neural networks, you can learn how to classify the accounts.

A benefit of the platform is that data scientists and engineers can work from one platform rather than piecing things together.

Another benefit is the total cost of ownership. Unlike other platforms, you do not have to keep the whole graph database running all the time. Since Katana Graph pipelines are designed with a separation of storage and compute, you can easily spin up a cluster, do some batch processing beforehand, and then run inferencing in a separate system and still leverage what was generated in the graph.

Katana Graph is also faster with large data sets because it does not load all the data upfront but has an innovative, dynamic way to load the data as you need it as you work through the pipeline.

Basic analytics are much easier on the graph database rather than on a relational database. If you have ten different datasets, it can be cumbersome and error-prone for an analyst to figure out how to join them to write a query in a relational database. With a graph, you have a singular model, already predefined and built, so the questions will be much easier because the data is already connected. You can intuitively see how the information is related.

One of Katana’s new features is a Dash data frame importer. Dash is a common framework data scientists use for parallel processing data frames. The data scientists can work with the data frame they are already using and directly ingest it into Katana Graph for a seamless, simplified experience.

DevOps is a big part of what Katana is trying to facilitate with their platform. They easily integrate into existing learning pipelines. When the graph neural networks are run, the embeddings can be exported. These features that a graph generates can go downstream to a machine learning process. So the integration becomes a lot simpler and a lot easier to operationalize and put into production.

Over the next five years, Greg envisions organizations such as banks having centralized repositories to analyze customer, marketing, or credit data for multiple purposes. The output from machine learning models could be used for both credit risk and fraud detection, for example. Instead of using siloed data sets with a lot of replication and duplication between them, there would be a common model synchronized within a graph. 



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
