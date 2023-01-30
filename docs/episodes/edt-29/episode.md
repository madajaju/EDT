---
layout: posts
title: "Next-Generation Hyperscale Database - Aerospike"
number: 29
permalink: episode-EDT29
has_children: false
parent: Episodes
nav_order: 29
tags:
    - Aerospike
    - Database
    - Ingestion
    - Optane
    - Temporal Database

date: 2020-11-12
guests:
    - Darren W Pulsipher
    - Tim Faulkes

img: thumbnail.png
summary: "Databases are showing their age, still taking some time to get results. Aerospike, with the help of Intel technology (Optane), breaks through with speed, volume, and low latency. Tim Faulkes, Vice President of Solutions Architecture at Aerospike, joins Darren Pulsipher, Chief Solutions Architect, Intel, to discuss the benefits of Aerospike technology."
---

{% include soundcloud.html id="edt29" title="#29 Next-Generation Hyperscale Database - Aerospike" %}

{% include youtube.html id="btMNND3AH7Q" %}

---

## Next-Generation Hyperscale Database

Databases are showing their age, still taking some time to get results. Aerospike, with the help of Intel technology, breaks through with speed, volume, and low latency. Tim Faulkes, Vice President of Solutions Architecture at Aerospike, joins Darren on this episode to discuss the benefits of their technology.

## NoSQL – An Emerging Market with Multiple Technologies

Aerospike was created in 2009, with the first production deployments in 2011. The cofounders were mindful of upcoming challenges. They built the architecture from the ground up with the framework that it would be reliable, enterprise scale, never go down, and be able to handle mass ingests of data. Aerospike’s architecture relied heavily on SSDs, whether NVMe drives in the modern incantations or SATA SAS drives.  Both were in their infancy, so the founders were forward-thinking in where the market was going. They relied on those devices to get the speed, and that’s why Intel technology was so important. Since then, other technologies from Intel such as the persistent memory, have made things a lot easier.

## Indexes in DRAM, Data on SSD

Aerospike approaches databases differently. The SSDs are not a faster hard drive. A hard drive has physical sectors and heads and things it has to move to read data. An SSD can quickly read thousands of pieces of data in parallel. It doesn’t run well on rotational drives, but with NVMe/SSD, it runs blazingly fast. No one has the same sort of performance, not even in memory database.

The unique architecture is designed for high volume, high throughput, and very low latency. For example, some customers are regularly doing 20 million transactions per second. Some are going up to petabytes of data. Typically, customers run on fairly nice hardware but round trip time is critical.  It takes Aerospike about 200 microseconds to look up a piece of data and bring it back to the client, not tens or hundreds of milliseconds. When you need a lot of data fast such as in fraud detection, or if you are ingesting a lot of data, such as in IOT, autonomous vehicles, sensor readings, or medical devices, Aerospike can do those millions of transactions per second across reads and writes. You don’t need to put it into a message bus and then let the database notify downstream systems via the message bus that it’s got the data. It’s already persistent.

## Powering Industry Leading Innovation Around the World

What use cases are sweet spots for Aerospike? There are obvious markets such as the previously mentioned IOT, fraud detection, and sensor data, but it’s an emerging market. Aerospike started in advertising technology, where data retrieval has to be done in milliseconds or faster. This is where the good performance was battle tested at a high scale.

Additional industries where Aerospike can be useful are varied. One example is a large telco in India. The infrastructure there is not always reliable, and sometimes calls are dropped. This company, with Aerospike technology, can tell, in real time, that a call has dropped, and they can immediately reach out and offer the customer credits or other compensation to maintain customer satisfaction.

## Real-time Settlement of Instant Payments

A new area that Aerospike has become heavily involved with is real-time digital payments. This doesn’t have specifically a lot of data, or high throughput requirements, but what these companies need is absolute consistency and absolute availability, even in the face of, say, losing a data center.

The manufacturing floor is also an emerging market for Aerospike technology in things like semiconductor manufacturing where it’s used to store sensor data to provide real time analytics. Aerospike shines in any industry where there is a lot of data and you need it quickly.

## Performance at Scale – Independent Third Party Test Results

There are many databases with good technology out there, but there are challenges of scale. Take Redis, for example. Because it stores all of its information in memory, you can’t go up to ten terabytes without significant cost, let alone hundreds of terabytes or petabytes. Since Aerospike stores the information on SSDs, the time difference between looking up data on SSD and memory is about 100 microseconds. Across the scale of petabytes, Aerospike replaces older technology such as Cassandra, which scales really well, but lacks speed.

## Total Cost of Ownership

In addition, compared to those technologies, people save a lot of money moving to Aerospike because the number of nodes drops down dramatically because of the unique architecture. The savings is in not only in capex, but in opex because there are fewer machines to oversee.

Aerospike has collapsed some of the traditional tiers in the architecture. Often legacy systems will have extra cache in front of it to speed it up. This introduces complexity. Aerospike does not need a cache. There isn’t a large amount of DRAM. It relies on the speed of the SSDs and the underlying technology to get the performance of raw storage without a cache. Since the cache and storage tiers are collapsed, the solution is simplified, which means built-in reliability and speed.

## Continental Deployment Example

Consistency across multiple geographic areas is also an important benefit of the technology.  Modern architecture requires low latency, so that typically means there are a bunch of H-based clusters where the data sits close to the user. Otherwise, the speed of light becomes a factor. Aerospike can have all of the H-based clusters talking to each other, so if a record is changed in one cluster, it will automatically propagate to the other clusters, asynchronously. With some uses, however, such as digital payments, there must be strong consistency between the clusters, so they might want to replicate the data synchronously instead. They would rather read from the local copy of the data. The reads become very fast; the writes are affected by the speed of light, but they guarantee consistency across geographical distances. So, this isn’t conflict resolution, it’s conflict avoidance. Being able to spread those strong consistency writes around the world and maybe have multiple systems of records has enormous potential and value.

## Aerospike Connect for Spark

For example, Aerospike currently interfaces with Spark, an analytic technology that requires its data to be in memory. By loading the data off Aerospike, the Spark data frame can process tens or hundreds of terabytes with enormous cost savings and speed. Integration with other AI tools is one driving force that will open some exciting doors.

Getting data into Aerospike is simple and straightforward. Since applications have an API layer like most databases, Aerospike can ingest from industry standard sources such as Kafka and Janus. The bi-directional ability to talk to message buses makes sense, because not only can Aerospike ingest data from these sources, but egress them. If Aerospike is a source of truth when you write a record, you can push it to downstream systems.

## Aerospike Connect for Kafka

If you want to use Aerospike for ingestion rather than an ingestion engine on the front end, Aerospike can determine whether it wants to break the data up or keep it in the same format and just put it into Aerospike; With its plugin framework,  it’s an API call. When the data is stored a message bus can be notified for downstream processing. This eliminates one of the ingestion steps and increases total throughput.

Scaling to thousands of clients is possible due to the way the Aerospike client is designed as multi-threaded to scale on one process and ingest a lot of data with that.  The client is smart for the sake of speed. Any record goes directly from the client to the node that owns that piece of data. There are no middlemen of kind. That means the client must know about all the nodes, so there are finite connection limits, making hundreds of thousands of clients impractical.

## Continental Deployment Example

If, however, you’ve got hundreds of thousands of clients, it’s because you have a globally distributed population. If they were talking to one cluster, the speed of light becomes a big issue. There are ways to set up smaller, edge-based clusters that either share information or they talk to a system of record in more of a hub and spoke model, so it can be done.

## Aerospike is a Database for System of Record Applications

As data moves around the world, different layers of privacy come into play and standards such as GDPR and CCPA, so customers must know the origin of the data. Aerospike has the flexibility to look at the data with a fine grain, and based on the content of the data, know when and where it can be shipped. This is part of Aerospike’s data shipping configuration that is transparent at the application. You don’t have to change anything in the applications, only in the configuration.

Aerospike also makes sure the data is secure. Just like all enterprise-strength databases, Aerospike supports encryption at rest and in flight, and security integration of things like Hashicorp Vault. It can be, and is being used, as a system of record.

A foundational goal at Aerospike is using the latest innovations and technology for customers’ success.  For example, when Intel came out with PMem, they used it in app direct mode to use it for its full capabilities. This means for a rolling upgrade on say, a petabyte of information, the time it takes is small. Aerospike holds that petabyte in maybe 50 or 60 nodes instead of thousands of nodes, and when a node is shut down, it doesn’t have to be rebuilt, so the restart time is very fast.

Overall, Aerospike offers security, high availability, speed, low latency, scalability, consistency, and low cost of ownership. 




<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
