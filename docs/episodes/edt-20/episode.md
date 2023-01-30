---
layout: posts
title: "Destroying the Complexity of Storage Tiers"
number: 20
permalink: episode-EDT20
has_children: false
parent: Episodes
nav_order: 20
tags:
    - Data
    - Optane
    - Storage
    - Vast Data

date: 2020-09-09
guests:
    - Darren W Pulsipher
    - Randy Hayes

img: thumbnail.jpg
summary: "Randy Hayes from VAST Data and Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, discuss VAST Data’s innovative storage architecture that eliminates the need for tiers using NVMe over Fabrics, QLC Flash, and 3D XPoint Optane"
---

{% include soundcloud.html id="edt20" title="#20 Destroying the Complexity of Storage Tiers" %}

{% include youtube.html id="ZU6BDo0cFac" %}

---


## Thirty Years of Storage Complexity

Storage may be an old concept, but VAST Data has rocketed to unicorn status in just over a year of revenue shipments. VAST has replaced the old architecture of multi-tiered storage systems with a single, monolithic system that is fast and cost effective. The VAST solutions also eliminate the problem of big, messy storage systems that consist of different file systems and different architectures.

## A Foundation for a New Architecture

The founder of VAST was looking at storage from a clean slate perspective. He found that customers didn’t necessarily need any more performance from Flash, but instead, they needed support for file and object storage at a lower cost. He took advantage of three technologies that didn’t exist before 2018. First is NVMe over Fabrics, which is used as a kind of hyperscale SAN to connect everything together with low latency. Next is QLC Flash because it is inexpensive and has no moving parts like hard drives do. Third is Intel’s 3D XPoint Optane. Optane has read-write parity and has high endurance at a reasonable price point. Wrapping these three technologies together gives VAST the ability to give customers all-flash performance, but at a price comparable to that of a hard drive. It eliminates the need for other tiers that organizations are buying because they are cheap.

## Introducing Vast Data Universal Storage

The VAST system is the first disaggregated, shared everything architecture. What this means is that the logic is disaggregated from the state of the file system. Instead, the state of the file system lives in data boxes that contain QLC Flash and Optane. The Optane is used as a big meta data store. It is multi-use, just like the system, which is branded universal storage. With these boxes, there is no single point of failure, so the capacity is, theoretically, unlimited. (VAST has tested the system at about 50 petabytes in a single file system.) You can grow capacity by just adding inexpensive x86 servers into the clusters. Because it’s a parallel file system, any user can access any piece of data from any one of the servers as if it is direct attached, so you can continue to scale.

You can also scale performance independent of capacity. The only thing that would inhibit the performance of the flash is the CPU, so by having the ability to seamlessly scale the number of CPUs in the cluster, you can grow performance.

One of the problems that is solved with this structure is latency. Many organizations need low latency to all their data. Because each of these stateless servers has access to everything, you have fast access to all of the data.

## DASE Architecture: Server Pools

Another great benefit is that it is easy to fine-tune an organization’s storage. The composable nature of the stateless servers, and the absence of cross talk between them, gives you the ability to build a cluster to best suit your needs. For example, you can segment off your control boxes based on different workloads, but they can all access the same data.

In addition, the system works well with an organization that needs different classification layers to access the data. You have the ability to segregate what users have access to by creating multiple access zones with virtual IP addresses. One of the challenges with NFS is that it broadcasts basically to everything. If you limit the broadcasts to a subset of IP addresses, it gives you the ability to carve out those different architectures into discrete systems.


## Universal Storage Bridges Application Eras

This is not just a solution geared for HPC clusters; it is not cost-prohibitive. Many companies are using VAST first for backup to establish trust. For example, the National Cancer Institute has a tape library archive, and they wanted to be able to access the information faster. They looked at different platforms, and VAST came in with a lower price point, and for all Flash, which is faster than their production NAS system. So the solution has a good price point, and it is useful for general file sharing and a variety of workloads, such as AI, log analytics, Splunk, etc., not just for HPC. The VAST solutions are simple to manage and truly universal.

VAST is a young company, but they have multiple installs across government agencies such as the National Institute of Health and the Department of Energy’s Tri-labs where all-out performance is needed for these super computers. This is a powerful system in some of the largest HPC environments in the world, supporting mission-critical applications.


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
