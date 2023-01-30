---
layout: posts
title: "Multi Cloud Data Solutions with Hammerspace"
number: 26
permalink: episode-EDT26
has_children: false
parent: Episodes
nav_order: 26
tags:
    - Hammerspace
    - Data Architecture
    - Multi-Cloud
    - Multi-Hybrid Cloud
    - Data Mesh

date: 2020-10-22
guests:
    - Darren W Pulsipher
    - Johan Ballin

img: thumbnail.png
summary: "Johan Ballin, Director of Technical Marketing at Hammerspace and Darren Pulsipher, Chief Solution Architect, Public Sector, at Intel discuss Hammerspace’s hybrid cloud technology that untethers data from storage infrastructure, providing data portability and performance."
---

{% include soundcloud.html id="edt26" title="#26 Multi Cloud Data Solutions with Hammerspace" %}

{% include youtube.html id="9bLpCtVq9CM" %}

---

Storage is ripe for disruption. Currently, managing data is done in a cumbersome, procedural, and often manual and error-prone way. Hammerspace was founded to solve this problem by abstracting data from the storage infrastructure.

## Imagine For a Second….

…if your data were untethered from storage infrastructure. Free from the limitations imposed by current storage systems, users could self-service their data management and protection, change the cost profile instantly, and access data from anywhere on the infrastructure. Software defined storage could scale out performance on demand and deploy modern workloads such as kubernetes on any underlying infrastructure anywhere.

## The Challenge

Applications have become portable, but data is still siloed. The challenge is that performance, reliability, and manageability all suffer at scale because of the silo problem. The solution is to release the data from the limitations of the underlying infrastructure. Hammerspace does this through metadata disaggregation, assimilating the smallest constituent parts to make data portable.

## Untether Data from Storage

With this technology, your apps have on-demand data wherever you are. You have independent control, data planes, and a global namespace and file system that spans multiple data centers and clouds. Storage is orchestrated; data is fully automated and leverages declarative autonomic data management. In other words, it separates the “how” from the “what,” declaring the desired end state without having to outline every detail of how to get there.

## Hammerspace Architecture

The system allows you to operate at a file granular level, provides enterprise-class data services such as snapshots and clones, and easily moves to massive scale from data center to data center, from data center to cloud, and back to data center to disperse it in a multi-hybrid cloud scenario.

## Legacy Storage is Unable to Overcome Modern Challenges 

Legacy storage does not sufficiently scale, even with horizontal or cloud or planet scale up solutions because even those clusters become silos, sometimes leaving you stuck with data that cannot be correlated and analyzed. Traditional storage also has a hard time scaling capacity and performance independently.

Replication is an ancient technology that leads to copy-data sprawl. Instead of moving the smallest constituent parts, you’re moving the entire payload. Data management is often an afterthought; data management belongs in the front, not the back.

One problem Hammerspace architecture solves is finding things easily. Versioning can lead to big business problems. For example, both Airbus and Boeing have run into massive problems because some engineers did not have their most updated versions. The solution is orchestrating the data.

## Data Orchestration

Orchestration, first, is the decoupling of all the different silos; the data is treated as a single pool. Hammerspace assimilates the smallest constituent parts, the metadata, to create, essentially, a data anti-gravity system. Then they implement objectives such as durability, availability, and snapshots, or custom defined actions that can be done through hammer script. Finally, data, whether it is kubernetes, NFS, or SMB, becomes portable and ties into the system.

What this means in action is that you do not need to go to another silo to service a particular workload. Data is delivered where you want it to be. This data mobility is key because it is live; it is not data migration, which is disruptive and causes down time.

To minimize expensive egress costs, data is deduplicated and compressed on a file granular basis. Instead of moving an entire fixed volume, you can pick out the data you want to move based on any kind of expression such as folders, metadata tags, or a customer descriptor. This offers flexibility and cost savings.

## Hammerspace Architecture 

In the Hammerspace architecture, the global file system has three components from a high level: the global file system itself, the front end presentation (NFS, CSI Driver, and SMB), and Anvil within the global file system. Anvil is the metadata management component and DSX, which provides metadata management services. These can be implemented as virtual machines, VMware, KBM, or Hyper-V. Anvil is in an A-shaped configuration so there are at least two of them at each location. DSX can be parallel-ized to scale out performance, so you can have a number of these at different locations to make sure you have enough performance. They can be scaled down easily.

On the back end, the underlying storage can be Hammerspace’s own software defined storage with directly attached disk, assimilated NAS, any cloud, or any combination. This can also scale horizontally, so you can now scale performance and capacity independently. Following the cloud model, it’s also elastic, so should the business change at that particular location, you can scale back performance as well as capacity to make sure applications have just enough of what you need at that location. This all makes for a very flexible architecture to serve any of the application workloads on the front end.

One great advantage about this flexible architecture is the ability to assimilate data that’s being stored in devices that are not yours, such as NAS or in the cloud. This simplifies moving data. For example, if you have an older NAS and you want to migrate to a newer NAS, it doesn’t matter whether it’s the same vendors or different vendors. Hammerspace assimilates the metadata and moves the data behind and completely transparently to the applications because it’s live data mobility. Another significant advantage is that there is no downtime in moving the data.

If you would like to try out this technology, go to hammerspace.com and get started with a free trial with a license for up to 10 terabytes deployed in Azure, AWS or Google Cloud. 



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
