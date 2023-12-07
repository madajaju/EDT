---
layout: posts
title: "The Benefits of Graph Databses"
number: 97
permalink: episode-EDT97-en
has_children: false
lang: en
parent: Episodes
grand_parent: English
nav_order: 97
tags:
    - data
    - graphdb
    - katanagraph

date: Wed Jul 27 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Madi Ahmadi

img: thumbnail.jpg
image: thumbnail.jpg
summary: "Darren Pulsipher, Chief Solutions Architect, Intel, Dr. Hadi Ahmadi, Director of Solutions Architecture, Katana Graph discuss the benefits of graph databases. "
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solutions Architect, Intel, Dr. Hadi Ahmadi, Director of Solutions Architecture, Katana Graph discuss the benefits of graph databases. "
---

<div>
{% include transistor.html id="c81eaabc" title="#97 The Benefits of Graph Databses" %}

{% include youtube.html id="url" %}
</div>

---

Hadi earned his Ph.D. in computer science in 2012 and researched cryptography and network information security. He worked in academia for a few years and then moved into industry, focused on different aspects of security solutions, including identity and access management. He began to learn more about graph modeling in 2015 and realized how graph data modeling could solve some of the exciting and complex problems in his field of study.

In graph databases, a graph does not mean charts or graphical interfaces but a way to structure data at the storage level so it can be retrieved and processed for some complex problems, especially if the data is interconnected. The graph offers many benefits and can complement existing data structures or solutions, such as relational database models or object storage.

The main difference between graph and relational databases is that while both are about relationships, relational databases take the relationships to the metadata and schema level, whereas graph databases are data-driven relationships. In other words, you are relating columns of tables in relational databases. To introduce a new relationship, you must change your schema. The graph provides a schema-less infrastructure where you can add more structure around your data but still be flexible so you can ingest any unstructured data.

Half of the world’s data has been created within the last few years, collected from many different sources, but less than two percent has been analyzed, most of which is structured data. The data is being collected, but the information is insufficient for processing. There must be a way to flexibly add a bit of structure that’s dynamic enough to change if you are uncertain but still benefit from the advanced optimized computation. The graph is an excellent way to do this.

If you are trying to work with correlated or interconnected data, as opposed to, for example, isolated data with critical values, a graph will offer benefits because of the relationships. Almost every industry can benefit because unstructured data usually comes from various sources and multiple natures.

An example would be cyber security solutions. There is data from logs and audit trains from the network environments, the cloud infrastructure, the endpoint hosts, etc. The data comes from different sources, such as directories or raw log files. It would be beneficial to correlate the data, for example, because typically, an identity or a user that could be part of a log from the identity management system could be the same user that triggers a process on a laptop such as downloading an attachment from an email. By analyzing those patterns, you can use this correlational linkage to get more insight. In other words, it doesn’t matter how or where the data comes from, but providing this linkage leads to learning about every record by looking at them in context.

One benefit is that there are no data transformation issues, so this increases speed. This also decreases the storage requirements.

Graphs and relational database structures, in general, are compatible. Here is a simplistic social network example: The node types in the graph look like tables. So you can have one node called “person” and then a table called “person.” You might have another node called “location” and connect the person to a specific location. You can have a table called location and connect them to foreign keys. Then you have this relationship of friends. A friend of a person in a graph model is just a self-loop. That would allow you to model that schema. In a relational database, you would need to create a new table called friends and then connect it. So even at a schema level, you are adding redundancy and some structure on top of it. And if you need to add a new concept of friendship or relationship, you must create new tables, building redundancy and complexity.

Other benefits of graphs over relational databases are graphs on elements, graph AI, and the idea of now model data to find patterns based on how the data is connected. You can decrease the data set that you are searching or analyzing because of the relationships. It’s using the power of data to empower the data even further. The algorithms in a graph database are very different than in relational databases and better optimized to get to large data sets faster.

One of the drawbacks of a graph database is that it is hard to scale. In a relational database, it’s easy to cut a table and put it on two servers, for example. Earlier graph databases were designed to be a single whole solution, so if you wanted to scale up, you would need to add more memory and CPU.

Now, If you want to work with petabytes of data in graphs, you want to scale vertically as much as possible with technology such as Intel VMs, but you also want to scale horizontally. New technologies, such as Katana’s graph platform, help solve this scaling problem with distributed computing. You can split or divide the problem into pieces and have each work up a small part of the graph for a final solution. Katana has proven that you could use 256 machines or beyond to process data, so you can quickly get tens of terabytes of data in memory.

A graph database requires a similar ecosystem as a relational database. Graph is a bit more dynamic and flexible. If you want to move to a graph analytics platform, which is beyond just the operational databases, you could take advantage of other things such as data warehousing and data lake capabilities. Storage and compute would be separate, meaning that graph processing technologies that do everything in memory don’t need to rely on storage attached to the services so that you can have a different storage service.

Katana uses object storage, and then when they want to compute, they opportunistically load whatever they want from the graph to the distributed memory of all the machines. The data returns immutable to the storage, so if you, say, destroy the whole cluster, you don’t lose anything. All the data is already there and warehoused. Relational databases are a more mature field, but graph databases are becoming more well supported in the ecosystem.

Based on Hadi’s eight years in the field talking to stakeholders and customers, all immediately see the benefit of graph databases. The limitations might be that they can’t keep up with scalability or expense. The work of Katana and other graph technology companies is to make graphs more of a commodity tool that customers can use for various tasks and less of a luxury in the database. For example, Katana is providing customers with graph-based identity and massive data management solutions.

Good use cases of graphs would be the early invention of graph solutions specific to some companies such as LinkedIn and Facebook that have their social graphs. Now, a natural fit is in e-commerce for recommendation engines. Finding connections between customers, accounts, purchases, and other behaviors will enable better recommendations immediately to the shoppers in a way that can’t be done with relational database queries.

To find out more about Katana or how to contact Hadi, go to embracingdigital.org.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
