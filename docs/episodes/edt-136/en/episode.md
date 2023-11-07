---
layout: posts
title: "Resilient Data in Disruptive Comms"
number: 136
permalink: episode-EDT136-en
has_children: false
lang: en
parent: Episodes
grand_parent: English
nav_order: 136
tags:
    - sabr
    - ddil
    - technology
    - edge
    - process
    - devops
    - security

date: Mon May 01 2023 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "In this podcast episode, Darren Pulsipher, Intel's chief solution architect of the public sector, is interviewed by guest host Dr. Anna Scott on resilient data with disruptive comms."
video: "https://youtu.be/XhtXz6hx9AY"
description: "In this podcast episode, Darren Pulsipher, Intel's chief solution architect of the public sector, is interviewed by guest host Dr. Anna Scott on resilient data with disruptive comms."
---

<div>
{% include transistor.html id="a2a806f7" title="#136 Resilient Data in Disruptive Comms" %}

{% include youtube.html id="XhtXz6hx9AY" %}
</div>

---

In this podcast episode, Darren Pulsipher, Intel's chief solution architect of the public sector, is interviewed by guest host Dr. Anna Scott on resilient data with disruptive comms. The discussion centers around managing data securely and efficiently in environments with limited bandwidth and disrupted service, enabling artificial intelligence and complex data analytics at the edge. Darren talks about his experience working on Toyota's connected car cloud as a basis for solving this problem and how common data management architectures were utilized to create a solution. The customer's gradual unveiling of their challenges helped identify design patterns that opened the architecture for a successful solution.

Despite intermittent connectivity and dynamic edge nodes, the architecture design process to perform edge analytics is complex and hard to articulate, so they took an iterative approach. First, they considered a solution that would bring all data to one place for analysis but found it impractical due to the sheer volume of data at the edge. Moving applications out to the edge seemed promising until the customer requested aggregate analytics across the edge. After exploring design patterns, they settled on using the data stream design pattern with a publish-and-subscribe hub to create data streams for consumers and producers dynamically. While this approach utilized well-established roots in IT, the customer initially had concerns about topic allocation.

In the past, Darren had to create a PubSubHub ecosystem ahead of time and be familiar with all its components. However, setting up data streams with Kafka or Apache Pulse was challenging, and configuring security was even harder. Utilizing their background in DevSecOps to devise a solution that bundles data stream definitions, input and output definitions, and data transforms into a package consumable by the pipeline. This bundle automatically creates data streams in PubSubHub and sets up all the necessary security measures. The result simplified complexity as developers only needed to focus on algorithms or AI models, while everything else was taken care of in a generic way. The iterative approach with customers helped modify architectures and implementations along the way.

The key challenge with this type of architecture is working with limited resources, such as only having access to two cores and 2 gigabytes of RAM. How much data processing can happen at the edge with limited resources? One of the constraints the architecture team needed to work on was making the SABR stream manager and security measures as small as possible. Darren stripped the code to the bare minimum and eliminated unnecessary third-party packages. The goal was to create a lightweight stream manager that could run on the edge and be portable across different environments. The resulting Saber architecture was scalable and adaptable, able to run anywhere from a smartwatch to a large Xeon server.

Darren and Anna discuss the difficulties of updating AI models in a distributed ecosystem with numerous instances of the same analytics running. To solve this problem, SABR created a learning data stream that connects all instances of the same analytics and handles intermittent comms, caching, and sending deltas to update the models. They also developed a data channel system using the policy strategy design pattern, allowing for different channels with varying levels of data to be sent based on policy-defined rules. This approach allows for more efficient data transmission, reducing the amount of data being processed and increasing the accuracy of the AI models.

Next is how to operate in the DDIL environment by prioritizing sending data by first sending summaries and historical data before real-time data. It is important of defining system expectations and communications policies upfront to ensure consistency across the ecosystem. An easy-to-use JSON-configured and JavaScript-based policy creation and activation process that eliminates duplication of effort and promotes reuse. The architecture has the ability to quickly add new capabilities by taking advantage of existing sabers and data transforms.

The last is the resiliency of the system by dynamically recovering from outages in the system. The potential for dynamic and flexible use of the SABR network. Even if a node goes down, it is possible to move a SABR to another box and still get all the data feeds coming in. It is also possible to use legacy computing by running a very lightweight SABR on an old system that collects and passes through data to the SABR network. The importance of security should not be overlooked. All data streams are encrypted and processes are set to establish trust and attestation of the SABRs to prevent spoofing and snooping of data. Overall, the SABR network offers a promising solution for processing data at the edge with flexibility and security.

The key learning is the iterative architectural approach that the team used to uncover the use cases and pain points that the end users were having. By simulating the architecture, they could find holes in it and get customer feedback. Additionally utilizing design patterns was essential to accelerating the architectural approach. The use of abstraction also provided the ability to swap in and out different technologies throughout the architectural process. Darren believes that this approach has made it easy to create solutions that are easy to use and take advantage of customers' current knowledge.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
