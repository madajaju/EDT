---
layout: posts
title: "Managing Telework at Capacity"
number: 6
permalink: episode-EDT6
has_children: false
parent: Episodes
nav_order: 6
tags:
    - Telework
    - Remotework
    - VDI
    - MFA
    - Cybersecurity

date: 2020-07-24
guests:
    - Darren W Pulsipher
    - Tim Flynn
    - Pete Schmitz

img: thumbnail.png
summary: "In this episode, Darren, Tim Flynn, Retired Rear Admiral of the Navy, and Pete Schmitz, Account Executive for the Navy from Intel, talk about how to manage the explosive growth of teleworkers due to the Covid-19 pandemic. We discuss the different modes that workers can use to work remotely and still be productive: device as a dumb terminal, device as part of the internal network and device as a portal to services. Understanding these modes of operation can help find bottlenecks that can hamper the effectiveness of your team."
---

{% include soundcloud.html id="edt6" title="#6 Managing Telework at Capacity" %}

{% include youtube.html id="-uQJGrcYnZ8" %}

---


## Teleworker Modes of Operation

The modes of operation that we see people working within the Department of Defense and also in the private sector are the following:

* Device as a dumb terminal (VDI - Virtual Desktop Infrastructure)
* Device as part of the internal network (VPN - Virtual Private Network)
* Device as a portal to services

Most workers are utilizing multiple modes of operation, so different types must be supported through the infrastructure.

### Device as a dumb terminal

In this mode, the worker has their desktop running on a server in the data center and they use their laptop to connect to the “virtual desktop.” They basically use their laptop or another device as a “dumb” terminal. There are some issues with VDI including scalability, network congestion, latency, and redundancy. Because of these issues, a VDI session can be quite expensive. Of the three options, however, VDI is the most secure.

### Device as part of the internal network

This mode is probably the most common. The worker connects their device to the VPN so they are working on the network as if they were connected in the office. One benefit is mobility because workers can connect any device such as a phone, tablet, or laptop. Another benefit is that there can be different segments of VPN for different classifications of data. One downside is that workers always have to be connected in order to work. And although there is not as much network traffic as with a VDI, there will still be some network congestion as data moves.

### Device as a portal to services

More people are moving toward this mode. The worker uses their device to connect to services in the cloud, public or private. The main service people are using is Office 365, which allows organizations to use cloud services instead of, or in conjunction with, their own services. Efficiency, performance, and the ability to work disconnected at times are benefits. Downsides include being dependent on a third party…(I’m not sure how to finish this – adoption/migration and security)

## Emerging Bottlenecks

Bottlenecks have emerged as the number of people working from home has increased from 15% to targeted over 85%. For the first two modes of operation, VPN scalability can be a major bottleneck. Limited bandwidth is also a big source of bottlenecks. One solution for these problems is to leverage cloud services to ease the strain. On a human level, IT operations and help desks are being overwhelmed as workers are connecting from home for the first time.

### VPN Scalability

There are several short-term solutions to help alleviate these bottlenecks. Prioritizing user access can be effective, whether it’s based on time schedules or priority of mission. Employee education about adjusting to this environment is necessary.

For long-term scalability, organizations should be migrating to SaaS solutions using laptops as a portal mode.

### Bandwidth to Sites

One of the best things organizations can do in the short term is to find out how many VDI users you currently have, and see if you can move them to work on the network or in the collaboration tools mode of operation. This will dramatically reduce the load on bandwidth. You may also have to increase your network capabilities after evaluating how your remote users are working. Education is, again, an essential part of this shift so workers will utilize best practices, for example, disconnecting from VPN when they are not using it, and configuring backup tools to operate during off-hours. In the long term, we suggest a multi-hybrid cloud architecture that gives you the ability to leverage cloud service providers for network bandwidth and burst-ability and optimize for cost and capacity.

### Hosted Services Scalability

To aid in implementing scalable architectures for short-term purposes, there are several great references, including Outlook Web Access (OWA) and VDI reference architectures.

Again, for the long term, we recommend moving to a multi-hybrid cloud infrastructure for elasticity, capacity, predictive performance, compliance, and security.


### IT Operations

How can we scale the help desk team who are likely overwhelmed? One idea is to have online FAQs for workers’ easy reference. User-group community-contributed solutions that are moderated by IT can also be useful. Ideally, organizations should be using a ticket-managed system to identify bottlenecks and streamline processes. In addition, anything that can be automated to avoid repetitive tasks should be automated through, for example, robotic process automation (RPA) or additional scripting. A longer-term solution could be the implementation of AI Chat Bots as a self-service IT help desk. They quickly narrow down online solutions using keywords or recommend contact.

## Conclusion

Ultimately, Intel wants to see organizations be successful during this difficult time when workers are shifting from the office to working remotely and dealing with a lot of stress. Intel can help out industry and government and public sectors. We have silicon that works in all of these aspects.  We have partners that deliver hardware and hardware and software solutions, and of course, we sell PCs and client devices that enable remote workers.


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
