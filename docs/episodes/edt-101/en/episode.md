---
layout: posts
title: "Network Controller Security with Elisity"
number: 101
permalink: episode-EDT101-en
lang: en
nav_exclude: true
nav_order: 101
tags:
    - networksecurity
    - ot
    - iot
    - microsegmentation
    - zerotrust
    - cybersecurity
    - advancedcommunications
    - technology
    - policy

date: 2022-08-23T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Dan Demers
    - Dana Yanch

img: thumbnail.png
image: thumbnail.png
summary: "Intel’s Darren Pulsipher, Chief Solutions Architect, Public Sector, interviews network security experts Dana Yanch and Dan Demers from Elisity about network controller security techniques and zero trust architectures. "
video: "https://youtu.be/url"
description: "Intel’s Darren Pulsipher, Chief Solutions Architect, Public Sector, interviews network security experts Dana Yanch and Dan Demers from Elisity about network controller security techniques and zero trust architectures. "
---

<div>
{% include transistor.html id="d4feba70" title="#101 Network Controller Security with Elisity" %}

{% include youtube.html id="url" %}
</div>

---

Dana has been working in hardcore networking for the last 15 years. He has worked with software-defined networking and wide-area networking and focused on the SD-WAN world for a time. He then worked with cloud but returned to his roots with network security at Elisity.

Dan has worked chiefly in networking, but he started with advanced services at Cisco and did some oil and gas work in Houston. He then moved into the SASE SD-WAN space, where he worked with Dana. He is now focused on network security as well as software-defined security. Dan says the term, however, is elusive because the technology is micro-segmentation through identity.

The traditional way to create micro-segmentation through VLANs and firewalls is no longer enough. For 15 years, network security has focused on hardening the network’s perimeter. Making an impenetrable wall around an enterprise is still essential, and firewalls do an incredible job of keeping people out of the network. But for the most part, the inside of the network, where there has been an explosion of new connectivity requirements because of IoT, and OT, is a free-for-all once a user is inside. Since the outer wall is robust, anyone inside is often considered a legitimate or trusted user.

The reality is that most current attacks are happening inside the network via exploited trusted users, devices, and applications.

There are many reasons why leveraging VLANS, IP ACLs, firewalls, and traditional segmentation methods, don’t work today for lateral movement security. They can work in static environments at a small scale. They work great for the edge of the network and specific places such as bottlenecks or aggregation points, but there are three common reasons why these are no longer ideal.

First, traditional methods’ scalability and operational efficiency are questionable. Managing VLANs, IP ACLs, and firewalls across large enterprises is done manually. It is not a distributed software-defined architecture but requires a box-by-box configuration, line by line. They are not dynamic or responsive to anything on the network. Their use also creates a Swiss cheese network full of random holes. Users, especially operators of networks, are often a system’s most significant risk. They may, for example, open up a VLAN or change one piece to do a quick test but then don’t undo the change.

Another example is that a VLAN will start with a use case and slowly creep to other use cases. Suddenly, what was a ten-device VLAN now has 60 devices. In the OT world, it might have six or seven different processes running inside of it because it was the trusted LAN. Still, often these environments grow slowly and are undocumented, so the risk goes unnoticed.

The second issue is that VLANs and firewalls are inherently in the wrong place in the network to provide lateral movement security. If you are in the same VLAN as another device, user, or application, that communication channel is open even though it may not have to be. Firewalls are not typically deployed in a strategic place where they can handle the access level of lateral movement. You have to funnel traffic to a firewall and get it back down, which is inefficient. Then you have a bottleneck.

Bad actors are looking at networks to see how they can twist them to get some outcome, not how they should or were intended to function. For example, if a user is in a VLAN and a process is running inside a use case, there is nothing to stop them from going from port 3 to port 32 in that same VLAN. Often people design security around intended use rather than how it could be used. It’s common, for example, for software developers to jump ports to work effectively, but that’s dangerous because it leaves them open. No one can place hundreds or thousands of firewalls across the entire access edge. That would be fiscally restrictive and impossible to manage.

The third problem is that these legacy segmentation solutions don’t consider the identity, context, or behavior of the asset connected to the network. It’s a rigid, network-centric topology that provides some essential security measures. But an IP address says nothing about the asset’s legitimacy and the network it’s attached to. So how can you dynamically secure this network when you don’t know what’s connecting to the network? You can’t make a policy in the first place without any granularity; it doesn’t work now to treat every device as equal.

Even if there is an analysis of the type of traffic, it typically happens several hops up, which means you have exposure now. Any enforcement may or may not be able to protect the infrastructure fully.

This detection ability still has value, even if there is no protection. Still, the ability to stop something that could have happened right at the edge, as close to the asset as possible, is a better solution.

Check out the next episode in this series [here](episode-EDT101).



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
