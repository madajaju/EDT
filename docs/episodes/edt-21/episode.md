---
layout: posts
title: "Big Memory Software Defined Memory Controller"
number: 21
permalink: episode-EDT21
has_children: false
parent: Episodes
nav_order: 21
tags:
    - Big Memory
    - Memory Controller
    - MemVerge
    - Optane
    - PMEM

date: 2020-09-14
guests:
    - Darren W Pulsipher
    - Charles Fan

img: thumbnail.png
summary: "Charles Fan, CEO of MemVerge, talks to Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, about their new technology, Big Memory software-defined memory controllers. The technology utilizes Intel 3D XPoint Optane persistent memory to efficiently bridge the gap between current and future architectures, while providing bigger capacity, lower cost, and persistence."
---

{% include soundcloud.html id="edt21" title="#21 Big Memory Software Defined Memory Controller" %}

{% include youtube.html id="LTMWXuu59Po" %}

---

Intel’s 3D XPoint Optane persistent memory technology was a game changer for MemVerge, allowing them to develop software-defined memory, which they describe as expressing the power of Optane PMEM.

## The Best way of Using PMEM

MemVerge developed Big Memory software to meet a growing demand from applications and businesses to process data at an ever-higher volume and velocity. More real-time applications need instant insights and actions from the data. This requires a new, memory-centric infrastructure to fill latency requirements.

Applications that employ AI, machine learning, or real-time big data analytics, for example, typically use DRAM. Although DRAM has a nanosecond-level latency and delivers nice capability and capacity, it does have physical limitations like memory density and how much you can fit in a server. It is also relatively expensive. Most importantly, it is volatile, and as data gets bigger, memory volatility becomes more of a constraint.  PMEM removes these bottlenecks because you can have bigger capacity, lower cost, and persistence.

An important benefit is that companies do not need to rewrite their applications to use MemVerge’s technology. The company was looking for the best way to use persistence, and the answer was to provide the least disruption to programming paradigms. When Optane PMEM became available as a memory form factor, this was an opportunity to develop valuable software as part of the solution.

## Software Defined Memory 

There is a data transformation that is going on. From a hardware perspective, in the next ten years, there will perhaps be a more heterogeneous world, both in computing and memory elements. A new fabric will emerge, such as CXL, that connects between these elements. The biggest challenge will be getting the application ecosystem to move. A software layer is needed to massage it into consumable, composable pieces that make it easier for the application to digest. MemVerge’s software-defined memory will be an important component in this space.

In the meantime, MemVerge is building a bridge between the current and future paradigms. MemVerge’s Software-defined memory brings dynamic SLA and QLS, resiliency, application persistence, efficiency, and performance. These are all things you normally get with software-defined storage network, but now can get with memory with lower latency and screaming fast speed.

## Performance on Memory Machine

Two important MEMVerge intellectual properties are in play. The first is a software virtualization layer that optimizes on the performance of memory – the combination of PMEM and DRAM – that is very close to DRAM performance. Each workload has different performance profiles that can be fine tuned by mixing PMEM and DRAM at different ratios. This fine tuning of PMEM and DRAM gives application developers and It professionals the ability to tune the memory to their applications instead of for the whole machine.   Instead of configuring the existing DRAM and PMEM ratios for the whole machine, you can now dynamically change the ratios of PMEM and DRAM depending on the workload, and even exceed DRAM-level performance.

## ZeroIO Snapshot (Persisting Application Data)

The second of these inventions is memory snapshots or ZeroIO. It can persist existing transient applications without any rewrites.  It works on top of the software-defined memory, which is a volatile memory service. Even though the underlying PMEM is persistent, volatile memory is necessary to avoid breaking existing applications. The persistence is leveraged through providing the application operator a GUI and CI for managing snapshots. There is a snapshot capability, so you can have an instant capture the state of an entire application. Then, that application can be recovered any time in the future.

This makes your memory not only persistent, but highly available. After a crash, you can do an instant recovery. If you make a mistake in the database, you can roll back to a previous point. You can also clone on top of the snapshot, so you can create new instances of an application without physically replicating the memory. So you can create multiple independent processes and the logical memory spaces mapping to the same physical memory space. This not only saves memory, but makes the process of creating clones instant. This new technology makes a lot of things that were impossible before, possible.

There are no architectural changes to your program, but when you need to persist something, you can just snapshot it. This doesn’t change the familiar model of programming, but greatly accelerates the I/O. Another great feature is that snapshots become manageable objects, so they are transportable to anywhere you can restart the application. Live migration can be enabled in certain scenarios as well.

## Future Enabled Use Cases

For a sneak peak in to the future, MemVerge is planning a 2.0 version in about a year that will have an SDK. In addition to using it as a transparent memory layer, new application developers will have a new way of persisting their data. This will make application development, as well as modification of existing applications, easier.

With the SDK developers will be able to snapshot segments of the application memory or the complete memory profile, giving the application developer the ability to persist memory with the cumbersome ORM or memory mapping technologies today.

In partnership with Intel, MemVerge will launch the first version of their product with the software-defined memory and the snapshot capabilities for general availability on September 23, 2020.


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
