---
layout: posts
title: "Understanding Edge to Data Center Problems"
number: 58
permalink: episode-EDT58
has_children: false
parent: Episodes
nav_order: 58
tags:
    - Data Management
    - Edge Computing
    - Edgemere
    - Edge to Cloud
    - Edge Security
    - Edge
    - OT Security

date: 2021-07-22
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Intel, outlines the common problems throughout edge to data center architectures that he’s observed and discussed with customers in the public sector. He lays out the ideal architecture to resolve these issues"
---

{% include soundcloud.html id="edt58" title="#58 Understanding Edge to Data Center Problems" %}

{% include youtube.html id="CVeyd3pZTkA" %}

---

## Mission Integration

There are many moving parts when putting capabilities out in mission, especially in the Department of Defense, but also in Veterans Affairs hospitals, Homeland Security, FDA, and FEMA, for example, and getting the data on edge devices back to ground stations and regional and enterprise datacenters. The data needs to be usable and reliable for big analytics flows in AI workflows and into the hands of analysts to make decisions based on the raw data.

## Drivers for Edge: Latency, Bandwidth, Security, Connectivity

Part of the puzzle is that edge devices have become more sophisticated and are gathering more data than we could ever throw at 5G. Hopes of 5G conquering all the data and making it seamlessly available to the datacenter never materialized with IoT device advances.

One of the original architectures around IoT was by Cisco, called a fog. The fog idea was that the datacenter connected the fog to the edge devices, so some of the processing and connectivity was happening there. If network connectivity is reliable and consistent, this works well with enough bandwidth. The amount of data now generated at the edge by these organizations, however, outpaces any amount of available bandwidth.

With IoT, only a portion of the data is moved to the datacenter, so generally, data value is only happening as it is analyzed there.  The problem is that the datacenter can’t store and ingest all the big data. Even pushing it into the cloud doesn’t resolve the problem, as the cloud can’t consume all the data that is sitting on the edge. So, we want to move away from sending all the data to the datacenter to collect the value and instead, push the data value as close to the edge as possible, decreasing the amount of data volume coming back to the datacenter.

Of course, not all data can be pushed down to the edge; there has to be correlation between different edge devices. The value needs to be in a more centralized place, not necessarily the central datacenter, but perhaps in one of these intermediate fogs or regional datacenters. They key is to move data intelligently and push data value as close to the edge as possible in a repeatable and sustainable manner. In doing so, we can react much more quickly to the edge.

## Common Physical Layer

To overcome some of these problems, we first need a common physical layer. This means that it’s common from the datacenter through the fog layers down to the edge devices; there’s one way to manage and control the devices and get aid from them in a reliable, common way. This doesn’t necessarily mean the same machine, but a minimal viable device with a common interface. Another benefit of the common physical layer is that if you write code for an application, it can run anywhere in this ecosystem. Intel has some great technology for this such as oneAPI that does a lot of the work so you can write code once, compile the binaries for the different types of devices, push it down to the common physical layer, and it runs appropriately.  In short, the benefits are a common operating model, common security model, and a write-once-run-anywhere mode of operation.

## Software Defined Infrastructure

SDI applies to the datacenter in private and public clouds with their software defined APIs. With SDI in the edge, we get common ways of moving data. We can provision resources in the edge in the datacenter anytime, and we can move data this way in a more seamless manner.

## Distributed Information Management Layer

We need to be more intelligent about managing and classifying data, moving the data only where it’s going to be processed, whether on the edge, in a regional datacenter, or in the cloud. Important aspects are cataloguing and reusing data and fitting in compliance and security requirements.  The benefit of this distributed information management layer is that you are pushing less data into the datacenter, moving less data, and pushing value down to the edge.

## Service Management Layer

In order to really push value down to the edge, we need to be able to deploy applications out to the edge. This is where a service management layer, or container ecosystem, comes in. This allows for pushing micro services to the edge, the fog, the datacenter, or the cloud in a repeatable and reliable manner. If a regional datacenter goes down, for example, you don't have to rely on that for the service mesh to continue to operate.

## Application Service Layer

An application service layer coordinates the different applications so you can create workflows that generate the real business value from the data. Just moving the data around or running it through an Analytics Engine isn’t good enough. The data must move from the Analytics Engine to an analyst workstation. Some tools in this layer would be robotic process automation and DevOps pipelines. This is also where you can enforce security and compliance at the application layer.

## Security and Identity Layers

The key aspect of the identity layer is to establish trust between entities that are properly identified. We must understand who is accessing what and which devices are accessing what data, at what time, and where. Identity is taken beyond the typical user and into applications identity of data, edge devices, fog, datacenters, and cloud.

The twin of identity is security. Here we have detection, remediation, encryption, and establishing root of trust. This results in reliability, trusted, data, and compliance. Now, intelligent data can be pushed down to the edge that is then populated up to the datacenter, but you are not moving massive amounts of raw data, only what you need in a secure manner.

## High Level View

To have a successful edge to cloud architecture that’s repeatable, all of these different elements are necessary. We have seen some organizations build purpose-built edge to cloud architecture, and when they deploy a new capability into that theater, they get stuck. If for example, they hard code the data residing in the edge because they will always process on the edge, or in the datacenter for an application they are always processing in the datacenter, this results in rigidity. It also increases the amount of time it takes deploy new capabilities, perhaps years instead of months. If we take the learnings from application deployments in edge to cloud over and over again and start generalizing, we quickly find that they fall into one of the layers we’ve identified.

For more information, check out this paper (include link) about the high level view of this architecture of edge to cloud.  We are not prescriptive on what fits in those boxes, but the key is understanding the use cases they encompass. We have ideas on what is in each of the layers, and we’re building out the ecosystems to accommodate your organization’s unique needs within the layers. 


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
