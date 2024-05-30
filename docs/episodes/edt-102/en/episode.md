---
layout: posts
title: "Identity-based Micro-segmentation with Elisity"
number: 102
permalink: episode-EDT102-en
lang: en
nav_exclude: true
nav_order: 102
tags:
    - networksecurity
    - microsegmentation
    - cloudnative
    - cloudsecurity
    - virtuallocalareanetwork
    - operationaltechnology
    - datasecurity
    - zerotrust
    - cybersecurity
    - technology
    - policy

date: Wed Aug 24 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Dana Yanch
    - Dan Demers

img: thumbnail.png
image: thumbnail.png
summary: "In part 2 of Security with Elisity, Darren discusses identity-based micro-segmentation solutions with Dana Yanch, Director of Technical Marketing, and Dan Demers, Technical Architect."
video: "https://youtu.be/url"
description: "In part 2 of Security with Elisity, Darren discusses identity-based micro-segmentation solutions with Dana Yanch, Director of Technical Marketing, and Dan Demers, Technical Architect."
---

<div>
{% include transistor.html id="f7d12ab8" title="#102 Identity-based Micro-segmentation with Elisity" %}

{% include youtube.html id="url" %}
</div>

---

In part 2 of Security with Elisity, Darren discusses identity-based micro-segmentation solutions with Dana Yanch, Director of Technical Marketing, and Dan Demers, Technical Architect.

Elisity’s approach to network security differs from traditional architectures by how it’s delivered, distributed across the network, and done efficiently, providing rapid time value.  They have focused on making it as simple, intuitive, and effective as possible so any industry segment can leverage the technology.

The key to Elisity’s technology is micro-segmentation, meaning the capability to completely isolate any user, device, or application no matter what type of network it’s on, where it’s placed in the network, or whether it’s managed or unmanaged. In other words, it is flexible to isolate one asset from another without restrictions imposed by network architecture or constructs such as VLANs or VRFs.

Traditional micro-segmentation systems that require hardware replacement or on-prem appliance instantiation can take months or years to get up and run. Still, Elisity provides full functionality within a week by shifting to a cloud-native and cloud-delivered micro- segmentation platform. The entire control management and policy planes are fully cloud-delivered, and the component that ties to your on-prem network is 100 percent software. You don’t have to change anything on-prem, as it rides on top of your existing infrastructure. It scales well, is easy to manage, and is distributed dynamically.

Elisity also delivers an on-prem solution for the OT space where organizations can keep it behind their DMZ and cut off all access.

Elisity’s platform is a micro service in the sense of horizontal scalability. You can start small and add 10,000 things to the network and scale with you, whether on-prem or in the cloud. It is completely automated across the entire network. There is little friction, and it is easy to manage long-term.

One significant difference between Elisity’s platform and other overlay networks is that Elisity’s deals with the control and policy plane rather than the data plane. It can apply the same level of network security granularity without touching any packets. It dynamically tells the network who can talk to whom based on the attributes and identities found on the network.

A triangle of users, applications, and devices is an excellent way to visualize this. Within that triangle are all the lines of things talking to each other. Elisity can secure every single line, or channel, between users, applications, and devices with granularity. This happens at the network control layer. At the moment traffic hits the first edge, it’s being secured.

Security is essential at the network layer and not the application layer because there can be tens of thousands of devices in your network that you can’t put an agent on or modify since they have things like embedded operating systems, cameras, badge readers, and people. This is especially important on the OT side.

With OT, the focus is on availability and integrity. Things need to continue to function in a safe process because the process could represent critical infrastructure. This is different from IT, where you can quarantine and spin up a new instance if there's an intrusion. OT is a different mindset. Where something might exist in IT for six months or a year, something in OT might exist for 20 years. Often, these infrastructures are maintained or patched every few years or are hands-off until a failure event. Safety equates to restricting connectivity. For example, if you are in a VLAN, that doesn’t mean it /you? Should be talking to an RTU, a sensor, an HMI, or a DCS that are one switch over.  In legacy design, if those things are on the same VLAN, there is no efficient, flexible way to stop them from connecting.

With Elisity’s system, you set policies based on things you group things or attributes assigned to assets, rather than going through item by item. This can be as simple as grouping all your processes so they can only communicate north/south, not east/west, or, for example, allowing line managers to share with six or seven types of things. Two or three policies can quickly reduce your attack surface from 65,000 potential attack ports down to two or three.

A use case that is common in OT networks is when a vendor does an update on a device, you need to let them in, and they have access to your whole network. With Elisity, you can easily give them access for a limited time and allow them to touch fixed assets.

Suppose you would like to know more about Elisity’s technology. In that case, many resources, including videos, white papers, and documents, explain how the solution works and how it could be applied within a week in your network at Elisity.com. 

Check out the previous episode in this series [here](episode-EDT101).



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
