---
layout: posts
title: "History of Data Centric Architecture"
number: 1
permalink: episode-EDT1
has_children: false
parent: Episodes
nav_order: 1
tags:
    - dataarchitecture
    - softwaredeveloper
    - microservice
    - container
    - virtualization
    - technology
    - compute
    - data

date: Thu May 07 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher

img: thumbnail.bmp
summary: "In this episode, Darren talks about the history of applications and how recent changes, primarily due to the onslaught of data from the Internet of Things, is affecting data-centric architectures. The infrastructure is ready, but we don%92t yet have a suitable way to manage all our data. There are three elements that need to change to facilitate this process: people (organization), process (operation), and architecture (technology). Darren focuses on the architecture where data and compute are spread over thousands of edge devices and across public and private clouds."
---

{% include transistor.html id="7dda1ee9" title="#1 History of Data Centric Architecture" %}

{% include youtube.html id="SZyyG2AGM6g" %}

---

<p>In this episode, Darren talks about the history of applications and how recent changes, primarily due to the onslaughtof data from the Internet of Things, is affecting data-centric architectures. The infrastructure is ready, but we don’tyet have a suitable way to manage all our data. There are three elements that need to change to facilitate this process:people (organization), process (operation), and architecture (technology). Darren focuses on the architecture where dataand compute are spread over thousands of edge devices and across public and private clouds.</p>
<p></p><h2> Purpose Built Hardware-software Stacks</h2>
<p>
</p>
<p>How we deploy applications for missions today has not changed significantly in thirty years. A reference architecturethat has an application and application stack is built on specific hardware, with compute and storage connected to anetwork. This model worked well for a long time, and in fact, about a quarter of applications are still being deployedon purpose-built hardware, but it is not optimal today. Technology moves too fast for this model; drifts happen. Inaddition, there are long development times, high costs, limited re-use of the technology, and lack of integration withother applications.</p>
<p></p><h2> Virtualization Architectures</h2>
<p>
</p>
<p>About 20 – 25 years ago, hardware virtualization began to resolve some of these issues with the ability to deploymultiple applications on one machine. Applications were no longer tied to specific hardware. Instead of buying fivesmaller machines, one larger piece of hardware could be used, not just for compute, but for virtual storage and networkfunctions as well, leading to greater cost-effectiveness. As with any development, this raised some new issues:increased security concerns and “noisy neighbors,” meaning one application interfering with the performance of anotherbecause of using up IO bandwidth, network, or storage, etc..</p>
<p></p><h2> Cloud Architectures</h2>
<p>
</p>
<p>In the early 2000s, cloud technology took off. We could now share across multiple organizations. Where virtualizationcreated abstraction of hardware, cloud technology created abstraction of operations, making it easier to manage multiplemachines. The cloud architectural idea created “software defined infrastructure,” which makes it easier to spin up andspin down compute, storage and network resources. Other benefits are decreased CapEx and OpEx costs, due to lesshardware and manpower. It also gave bursting ability, for example, for retailers during the busy holiday season or thegovernment during the census. With the progression of this technology, the issues of security and noisy neighborsincreased because of multiple tenants on the same machine. Another concern is integration costs between public andprivate clouds. Even with these worries, however, the pros far outweigh the cons in most cases.</p>
<p></p><h2> Service and Container Architectures</h2>
<p>
</p>
<p>Over the last five to six years, we’ve seen the reinvention of an old technology: containerization. Docker created aneasier way to use the previously clunky and difficult-to-use container technology. Application developers, inparticular, embraced this technology because it is consistent across multiple environments. The service management layerwith containerization of applications and microservices is more application-centric and maps those applications togeneric, virtualized hardware that’s been abstracted away. We now have automatic deployment across multiple clouds,we’ve optimized OpEx and also CapEx on the application stack and service stack layer. Fault tolerance is automated, andit’s much easier to integrate with overlay networks, integrate across multiple clouds, create firewalls, domicro-segmentation etc… all via software.</p>
<p>Security, however, is a primary concern. Since containers are easy to deploy across multiple environments, it’simportant to focus on security that is “built-in” to the deployment. Also, there is an increase in complexity. Here,we’ve moved away from a three-tier architecture to a multi-tier or even a micro-service architecture with dozens ofservices working together. Another problem is where and how the data is stored and managed. On the service managementlayer, storage is a generic container, which doesn’t manage the data itself.</p>
<p></p><h2> Internet of Things Architectures</h2>
<p>
</p>
<p>Now, when Internet of Things (IoT) is added to this ecosystem, the increased volume of data is spread across hundreds orthousands of smart devices. It also increases visibility, but this creates additional security concerns. Many edgedevices are accessible by the public. For example, someone could tamper with a smart city light, a smart traffic signal,a drone, or security camera. The complexity of the different devices, their number and locations, along with the immenseamount of data, is enormous.</p>
<p></p><h2> Data and Information Management Architectures</h2>
<p>
</p>
<p>How do we work through these issues? Organizations are already changing to handle this complexity with new organizationsand positions foxing on data management use cases. Previously, there was no place for these use cases to be managed, sowe’ve created a new key layer called the distributed information management layer. This layer manages data across all ofthe IoT, Legacy, and public and private clouds. It matches the data with application stacks and service stacks, so wecan dynamically allocate services and applications close to the data, or visa versa. Regulations and sheer size of datacan limit the ability to move data to central locations, as we have done traditionally. With this new architecture,several modes of operations can be utilized including disaggregated analytics, data movement and application movement.</p>
<p>Once again, with this expanded architecture, security is of utmost importance. Security needs to run as a common aspectthrough all the layers. Identity security, meaning access, authorization, and authentication of individuals, IOTdevices, applications, services, and even of data is key. Management of identity includes encryption for trusted dataand devices.</p>
<p></p><h2> Conclusion</h2>
<p>
</p>
<p>All of this architecture together is called the Edgemere architecture. Many of the parts already exist; we need tooptimize how they work together. The newest area is the distributed information management layer (DIML). Fortunately, weare beginning to see start-ups and more established companies building out the use cases and the architectural elementsin this layer.</p>
<p>The Edgemere architecture helps identify the key moving parts of a modern digitally transformed system and how they allfit together.</p>
<p>Intel fits into this ecosystem by providing the key element of a common physical layer to control and manage all of yourresources, whether it’s an IOT device, in the data center, or in a remote location. We make it possible for you toefficiently move the data, store it effectively, and process everything. Whether it’s the Xeon processors at the highend, or whether it’s doing inference or AI on the edge at very low power, Intel has a full stack of physical hardware.</p>
<p></p>
<p>

<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
