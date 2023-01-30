---
layout: posts
title: "Future of Big Memory and CXL"
number: 89
permalink: episode-EDT89
has_children: false
parent: Episodes
nav_order: 89
tags:
    - Big Memory
    - MemVerge
    - Optane
    - PMEM
    - CXL
    - CEO

date: 2022-06-02
guests:
    - Darren W Pulsipher
    - Charles Fan

img: thumbnail.jpg
summary: "Darren Pulsipher, Chief Solutions Architect, Intel, talks with Charles Fan, CEO of MemVerge, about how the CXL revolution and MemVerge’s software are the future of big memory."
---

{% include soundcloud.html id="edt89" title="#89 Future of Big Memory and CXL" %}

{% include youtube.html id="1TUCZjI4yns" %}

---

An exciting development in memory is CXL (Compute Express Link). A robust ecosystem is being developed from the host side, with Intel and others supporting CXL 1.1 in their next-generation platforms, such as Sapphire Rapids. Those on the memory side, including fourth-generation Intel Optane, will be on CXL. Intel is one driving member of a strong CXL consortium that has been driving the standard. CLX 2.0 has already been defined, with additional capabilities, including the externalization and switching of CXL, and 3.0 is in process, which will standardize how CXL can be provisioned and shared.

There will be new products coming out of Samsung, Micron, SK-Hynix with CXL capabilities. Additionally, there are new interconnects that are being developed that can potentially connect memory with the fabric so there'll be a fabric-enabled memory that can be shared across multiple servers.

CXL technology is a game-changer. A new memory protocol runs on top of standard PCIe generation five and later. Since it allows you to put memory on PCIe, it can not only be inside the box, but in the future, with PCIe switching, you can have the memory on the fabric become composable and shareable.  The first CXL product will be coming out by the end of the year.

MemVerge already has a software-defined memory controller, and CXL opened up an entirely new world for the software. CXL is to memory as fiber channel is to storage. It’s like a memory area network rather than a storage network. It is possible to go directly into memory with CXL and bypass the CPU altogether.

CXL will be much faster than previous interconnect technologies.  It will have 100 or 200 nanoseconds of latency. This is where the utilization, manageability, and agility increase. There will be higher availability and productivity in the use of memory. In addition, you will be able to provision memory dynamically; you can provision as needed, and it doesn't have to fit into the server box. Theoretically, you will always have enough memory for whatever you need to be active.

With MemVerge’s snapshot technology, your data is protected and persistent as well. This becomes more important as your memory becomes bigger. If you lose it, it’s harder to reconstruct.

For CXL to take off, three things need to be in place. On the hardware side, the older hardware leaders need to be on board and embrace the same standards. That has happened this past year, so there is a single standard everyone is supporting. Second, you do not need to change your application to use CXL, just like storage area networks. Third, from a database point of view, you should not have to rewrite. This can happen between what the standards provide and what the operating system supports and MemVerge software that can do auto-tiering between DDR memory and CXL memory.

MemVerge can offer that abstraction layer. It’s essentially memory virtualization. The software-defined memory handles the actual placement of the physical memory.

MemVerge makes big memory transparent to the application so programmers can utilize the higher capacity and never run out of memory. Next is data protection. MemVerge has developed an in-memory snapshot service that can capture an application’s entire state in memory, and that state is immutable. It can be recovered anytime, anywhere. There are many use cases with this, such as ransomware mediation and decreasing cycle times in genomics research.

The snapshot feature is not only useful in that it can quickly and easily capture a running pipeline allowing you to roll back and recover at any time, but it can save money when using cloud services. The primary service providers have spot instances that are 70-90% off the demand price, but there is a catch: They can take it back at any time with only 30 seconds to two minutes’ notice. This is not enough time to deal with that, especially if you have a lot of data in the memory, so it hasn’t been helpful for many workloads. With MemVerge snapshot capability, you can take periodic snapshots of your running workload in any instance. If the spot instance is taken away, you have an image you can recover and continue running. It’s insurance that allows you to use the low-cost service with protection.

Since you are taking a snapshot of not just an application but a whole container or instance, you can reinstitute it anywhere, on-prem, in the same cloud, or another cloud. This gives you maximum mobility and resiliency in your operations, even in the case of a major cloud service outage. This technology lends itself to many exciting possibilities.

The CXL revolution and MemVerge Memory Machine software are potent combinations for game-changing possibilities. 


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
