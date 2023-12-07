---
layout: posts
title: "The Emergence of the Global Data Network"
number: 98
permalink: episode-EDT98-en
has_children: false
lang: en
parent: Episodes
grand_parent: English
nav_order: 98
tags:
    - dataarchitecture
    - datamanagement
    - data
    - technology
    - cloud
    - globaldatanetwork
    - macrometa
    - multicloud
    - datamesh

date: Wed Aug 03 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Chetan Venkatesh

img: thumbnail.jpeg
image: thumbnail.jpeg
summary: "In this episode, Darren reminisces with Chetan Venkatesh, CEO of MacroMeta. Venkatesh has a long history of data management from the beginning days of Grid Computing and has started MacroMeta to tackle data management across the globally dispersed edge, data centers, and clouds. "
video: "https://youtu.be/url"
description: "In this episode, Darren reminisces with Chetan Venkatesh, CEO of MacroMeta. Venkatesh has a long history of data management from the beginning days of Grid Computing and has started MacroMeta to tackle data management across the globally dispersed edge, data centers, and clouds. "
---

<div>
{% include transistor.html id="140001aa" title="#98 The Emergence of the Global Data Network" %}

{% include youtube.html id="url" %}
</div>

---

Chetan is an engineer turned operations and start-up guy (Macrometa is his fourth startup). He says he has been working on the same problem of dealing with distributed data and reducing latency for twenty years.

Data is no longer in a data center but everywhere: in the cloud, on the edge, and people’s laptops. Effectively managing all of that is a challenge.

About ten years ago, Marc Andreessen said software is eating the world. At this point, the software has eaten everything and turned all kinds of constraints and barriers into opportunities. Multithreading computing is one of the barriers that has come down with the cloud. You can build applications that run in different parts of the world simultaneously. A developer movement is happening parallel to make everything as simple as it needs to be for the average computer science person. So on one side is a sophisticated technological evolution and on the other side is a simplicity movement.

Architectures such as Jamstack allow distributed computing to happen at scale with a great deal of simplicity, but there’s still a vast frontier yet to be discovered and claimed. The extensive land rush opportunity is now at the edge. Distributed data management and edge are two sides of the same coin.

One big problem is that some software development is moving to function as a service that ignores data. Also, there is a perception that data is ubiquitous, but much of the edge is not always connected. There is no guarantee that an application has access to all the data. Networks are no longer centralized; the notion of stateless microservices came from the cloud movement. This statelessness can become a huge barrier. This is why architectures such as Jamstack and serverless functions treat data as a peripheral issue rather than a core issue.

Stateless data structures are simple. You have a specific place where you commit your data, then move on to stateless again. Stateful requires robust infrastructures with more complex data structures because they support the application as it continually emits state. As we move into a real-time streaming data world in which state is constantly emitted from somewhere in the ecosystem, the infrastructure becomes complex and hard to manage because they are not architected. That’s where Macrometa comes in. They have built a new platform for this continuous, real-time active state at the exabyte scale.

Dealing with this streaming data in an active and dynamic state is a significant shift for many software developers. Since the first cloud infrastructures came about, then big data platforms, then data as a service, the industry has become efficient at ingesting, processing, and analyzing historical data. But now, we are in a world where data is on a spectrum rather than existing as a monolith. One newly appreciated quality is that data has perishable insight and value. Some data has a brief shelf life. Current time scales are too big to use data efficiently; we need systems within 50 milliseconds to communicate efficiently and reduce cognitive overhead for the people interacting with those systems.

Most people misunderstand latency: it is not something that brings you joy, but the lack of it makes you upset. For example, how long will someone tolerate a choppy YouTube video or a slow-buffering Netflix show? Fifty milliseconds for a machine is an eternity. A machine can do a vast number of things in 50 milliseconds, so latency becomes essential, especially when considering the perishable value of data.

Another issue is now, because of the cloud, interconnectivity, and the global system, startups are multinational companies, and data becomes location sensitive. Some of the data is regulated, some are PII and can’t be exfiltrated in certain jurisdictions, etc. An excellent example of this problem is how the Europeans don’t want their data leaving their borders, but most of the cloud infrastructure in the U.S. and the applications are built here.

A third issue is that data sits in many places; there are boundaries between systems, physical and logical. Data can be essentially static and rigid, so we need infrastructure that will allow data to connect and flow in real-time with consistency and ordering guarantees. Most importantly, it creates fungibility to be consumed quickly in diverse ways.

An additional problem is that data has a lot of noise, and it doesn’t make sense to backhaul intercontinental distances, paying transfer fees, only to draw most of it away. Data loses value by the time it gets to its destination. There is also a high refresh rate, so systems often work on stale data.

We need new ways of solving these types of distributed data problems. Chetan believes the next ten years will belong to this area of data sciences.

The first generation of distributed data solutions used operational transformation. Google Docs is an excellent example of that. Operational transformation, however, requires centralization of the control, so it doesn’t scale well. Google has figured out a way to scale, but that doesn’t generalize to the average developer. There are only maybe five companies in the world that understand it at that scale, and much of that knowledge is locked up in those companies and proprietary technology.

Macrometa is working with the community and academia to try and create a new body of knowledge, far more efficient than these centralized models in a fully distributive way.

Currently, there are infrastructures available that are great at solving historical system of record-type problems. They are trying to move toward real-time data, but their architectures aren’t fundamentally meant for it. These new problems with data with time and location sensitivity, actuation value, refresh rates, data gravity, and data noise require a new way, a new infrastructure. Chetan calls this a system of interaction rather than a system of records because systems of interaction are data networks, close to where you originate and consume data, that then filter and rich augment all of it in line and route it to its intended recipients. It’s a networking function.

Macrometa has built network processors that are moving the data around - a global data network. It’s a serverless API system where developers simply consume APIs to solve real-time active and operational data problems. Macrometa is a global data network in the topology of a CDM, but with a data platform like Snowflake that produces rich data primitives to deal with real-time active and operational data values.

You can integrate analytic tools into the global data network and deploy the analytics near where the data is generated or required. Just as Amazon fundamentally changed retail distribution with edge architecture and algorithms to keep local warehouses optimally stocked for overnight shipments, Macrometa has done the same for data. They are bringing the data and computation on that data much closer and allowing it to happen in milliseconds. This ability to create real-time loops of information is a powerful enabler. For example, small retailers can use local store inventory in their e-commerce without oversubscribing to compete with Amazon.

A great use case for the Macrometa platform is in cybersecurity. Some customers are ripping out their centralized data models to take advantage of the lower latency so they can block threats in real-time.

The global data network is a transformation layer between your data sources and receivers with the consumers and publishers. It is composed of three technology pieces. The first is the global data mesh, which is the integration layer for data. The second is a global compute fabric that allows you to orchestrate data and business logic in the form of functions and containers globally. The third piece is a global privacy fabric: how to secure data and comply with different data regimes and regulations that affect whether your data is being transmitted or stored.

The global data mesh is a way to quickly and easily integrate data from different systems across boundaries, whether physical or logical. All of it is incorporated and flows with consistency and ordering guarantees. The most significant value of this mesh is that it makes data fungible and consumable by allowing you to put APIs on data quickly. This can be done in a few hours compared to usually taking months. The global data network is designed for trillions of events per second so that it can move data at vast scales at 90 percent less cost than the cloud.

The global compute fabric brings business logic and orchestration to move your processing closer to where your data originates or is consumed. This is the anti-cloud pattern. Macrometa will surgically and dynamically move those microservices that need to comply with data regulations, for example, into the right places for execution.

The last piece is data protection. This is a complex problem and the answers we have today, for example, opening a separate silo for that particular geo to comply with particulars every time you spin up an instance on your app, are not good. Macrometa’s platform has a data network that is already integrating and getting your data to flow across all the boundaries, along with compute functions and ingesting data without boundaries. Now, it can create logical boundaries and pin data to specific regions to protect data. They can set affinities and policies about how data lives and replicates in a region, such as whether it should be anonymized when it’s copied out of the region.

Macrometa’s technology enables use cases that are impossible to do in the cloud because the clouds are too far or too slow. Macrometa has built the infrastructure to solve real-time data problems and turn them into opportunities instead of challenges. For more about Macrometa, go to macrometa.com. 



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
