---
layout: posts
title: "Advancing Operations with 5G"
number: 109
permalink: episode-EDT109-en
lang: en
nav_exclude: true
nav_order: 109
tags:
    - 5g
    - edgecomputing
    - multicloud
    - people
    - process

date: Mon Oct 05 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Leland Brown
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "Intel’s Darren Pulsipher, Chief Solutions Architect, Leland Brown, Principal Engineer: Technical Director of Advanced Communications, and Dr. Anna Scott, Chief Edge Architect for Public Sector, talk about the history of advanced comms and future use cases with 5G. Part two of two."
video: "https://youtu.be/url"
description: "Intel’s Darren Pulsipher, Chief Solutions Architect, Leland Brown, Principal Engineer: Technical Director of Advanced Communications, and Dr. Anna Scott, Chief Edge Architect for Public Sector, talk about the history of advanced comms and future use cases with 5G. Part two of two."
---

<div>
{% include transistor.html id="b613bc52" title="#109 Advancing Operations with 5G" %}

{% include youtube.html id="url" %}
</div>

---

5G opens up a lot of capability. You can now set up private networks, which is software-defined so that you can add more functionality to your network. Where does this enabling technology take us?

Anna says that although we are still in the early days from a bandwidth and latency standpoint, there are real advantages to 5G, such as the opening up of the spectrum, like CBRS, the ability to take advantage of existing user equipment, and the ability for customers to have mobile access.

One use case that is not sexy but has vast ramifications is that you can take your laptop onto the factory floor and use that for full connectivity. Instead of going out on the factory floor with a notepad and paper and transferring the information back to the office, you can converge the two environments. The 5G standards enable this, but it isn’t necessarily a full 5G deployment.

One evolution that is happening is the ability to stream high-definition video from a wireless camera over 5G and have low enough latency that you can do real-time analytics on it. Currently, not many 5G cameras can operate in that environment, so cameras are often hardwired close to coupled edge computing to get that real-time aspect, but this advantageous streaming option is coming soon.

Another example of a 5G advantage is using 10 to 20 AR headsets instead of one or two with Wi-Fi. The key point is the MEC (Mobile Edge Compute) that provides the ability to have the applications on-premise instead of having to go back to the switch or the core of the carrier and have that RAN time.

Understanding how frequencies are deployed is essential in use cases, as some carriers have deployed mmWave despite challenges; n41 and n42 frequencies react differently in the real world. So in on-prem deployments, the MEC and the RF design are extremely important.

A compelling use case for 5G outside the factory is using drones in emergency responses. An early predecessor to the eventual ability to bring in drones and assess a damaged area is getting drones connected, understanding a mission to do a flyover, and then pulling all of that data together. While we’re unable to stream live video from multiple drones and stitch it together, we are close to gathering, combining, and analyzing that data, just not yet in real time.

Another use case is using 5G, AI, modeling, simulation, and edge computing for training across many industries, including the Department of Defense. There’s a huge advantage in creating a realistic training simulation without putting the person under threat or spending massive amounts of money on live training.

As much as 5G enables this type of use case, much depends on 5G connecting to a MEC instead of 5G going up to the cloud. Physics comes into play. You need super low latency, so you can’t have an architecture that goes from a headset to the cloud, down to a MEC, then to visualization. It needs to go from the headset to the MEC, where real-time processing happens. Then you can share data through the cloud for a real-time experience.

There is also the capability of meshing or clustering MECs together, so that data may never have to go to the cloud. The MECs can do all the processing and analytics out on the switch. This could enable advances such as smart buildings and cities. This kind of 5G-enabling technology is the perfect storm for considerable changes in the industry.

Leland points out that the story of the new networks is distributed computing. Everything is connected through wireless connectivity, but compute points are spread across the landscape, where apps sit at the edge and enable the use cases. Where we are heading is to calculate wireless one-to-one.

What role does Intel play in 5G? It’s far beyond just providing chips. Since 5G is software-designed, Intel has enabled the ecosystem to build or design on top of its L15. When moving from 4G to 5G, Intel took the functional block of the RAN, called FlexRan, and allowed companies to design their baseband architectures and virtualize them. Writing the FlexRan reference architecture made it much easier for new entrants to pick that up as a starting point.

On the hardware side, Intel spent many cycles to ensure that the commercial, off-the-shelf hardware would work well to support all of the basebands, RAN applications, and servers. The new systems that come when walking away from proprietary systems must be easily supported by the same type of server that works in the cloud and the data center because now you have the scale and the cost advantage.

This will drive down prices and drive more innovation in the industry. 

Check out the first part of this interview [here](episode-EDT108).



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
