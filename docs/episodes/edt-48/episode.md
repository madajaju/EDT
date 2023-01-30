---
layout: posts
title: "VAST Data Revisited"
number: 48
permalink: episode-EDT48
has_children: false
parent: Episodes
nav_order: 48
tags:
    - Data Architecture
    - Data Management
    - Optane
    - VAST Data

date: 2021-04-29
guests:
    - Darren W Pulsipher
    - Randy Hayes

img: thumbnail.jpg
summary: "In this episode, Darren checks in with Randy Hayes, now VP of Sales, for the public sector of VAST Data, six months after their last conversation to see how they are doing in the industry, what is new at VAST, and interesting use cases. Their new product, Gemini, offers a different storage business model"
---

{% include soundcloud.html id="edt48" title="#48 VAST Data Revisited" %}

{% include youtube.html id="BvwpmK0Ct-0" %}

---


VAST Data has been growing rapidly in the last six months, with an expanding team and impressive sales such as about 70 petabytes of flash to the federal government. In addition to general file sharing with their all-flash storage systems, they have interesting use cases in areas such as next gen sequencing, confocal microscopy, and wind tunnel simulation workloads. 

The company’s platform allows for solving random read problems because all the data is on flash without the exorbitant cost; the platform handles a high volume of data with low latency. 

## VAST Technology and Intel Optane Drives

VAST uses Intel’s Optane Drives to achieve read/write parity, among other benefits. Since Optane is persistent memory, there are no cache coherency issues, and there is no need for DRAM, which is a great architectural advantage in averting a failure or data loss event. The total cost per user is also decreased because you don’t have to buy big machines with lots of memory for file storage if you want more speed. That tier is eliminated. 

Scalability and flexibility are two other advantages, as you can add more data boxes (D boxes) without affecting performance, and they are completely compatible even with multiple generations of flash.  There is no single point of failure , and there is no theoretical limit; VAST has tested up to 100 petabytes. 

You can improve performance by adding client boxes (C boxes), independent of D boxes. Capacity with flash is basically free, but you have to expose that flash with CPU. The C boxes are completely stateless, so you can grow or shrink them on the fly. VAST guarantees uptime because you have full access to every PCP on the back end.  

Depending on the performance requirements of the customer, there can be different numbers of D boxes and C boxes; for example, a client may not need any more performance, but more capacity, so the cluster may have, say, 11 C boxes and 37 D boxes. 

If you have one C box and one D box, you have about 40 gigabytes a second of bandwidth, which is the base model. Every addition of a D box adds another 40 gigabytes of bandwidth. One C box does not saturate all the IOPS, so if you add another C box you can get 350,000 IOPS out of a box. Since flash is CPU bound, the more CPUs you add, the more it allows you to scale. 

## New Storage Business Model

VAST Data’s new product, Gemini, allows customers who need high performance without much capacity license only the amount of hardware that they need from their contract manufacturer, which results in a huge cost savings. Customers can grow and pay for capacity as they need it, rather than incurring an upfront cost for future capacity needs. 

From an OPEX perspective, this makes sense for many companies. For example, for one customer, a 30 petabyte all-flash system that does a terabyte and a half of bandwidth, the cost is less than S3 infrequently accessed from Amazon. That’s just for one year; moving forward, it’s actually less than Glacier if you look at it from the way Amazon charges, per gig per month. And there is the flexibility to move back to a CAPEX model if that makes more sense later on. 

It’s important to note that VAST is presenting an appliance, not storage as a service, which can be a support nightmare because of all the variations of hardware and firmware, what drives you are supporting, what interconnects, etc….resulting in a crazy amount of complexity. VAST is still shipping the same boxes and servers; it’s just a different business model to allow flexibility in consuming storage.

Some interesting areas where VAST could be useful is in medical research such as digital pathology with an astronomical amount of data that is often difficult for researchers to access because it is on cheap, slow storage. Precision medicine based on a person’s genetic makeup is also a possibility. In addition, running AI against packet capture could be helpful in predicting attacks from advanced adversaries.

Another promising use case is a customer with all their data in a VAST all-flash storage system rather than in the cloud, but does all their compute in the cloud, perhaps bringing back just the results. The results are typically very small, maybe a couple of bytes of data, and are inexpensive to pull out.  This type of model, for example, could produce value from analytics on old data that is currently just sitting in storage and is too costly to move around. 

There is a lot of flexibility to do a hybrid or multi cloud approach where you have a centralized, on prem storage system that can be accessed via multiple cloud providers. 



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
