---
layout: posts
title: "Requirements for Edge to Cloud Architectures"
number: 95
permalink: episode-EDT95-en
lang: en
nav_exclude: true
nav_order: 95
tags:
    - edgecomputing
    - cloudcomputing
    - datamanagement
    - itgovernance
    - security
    - multicloud
    - zerotrust
    - cybersecurity

date: 2022-07-12T00:00:00.000Z
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.png
image: thumbnail.png
summary: "Intel’s Darren Pulsipher, Chief Solutions Architect, and Dr. Anna Scott, Chief Edge Architect, Public Sector, discuss essential requirements for edge to cloud service architectures.   "
video: "https://youtu.be/url"
description: "Intel’s Darren Pulsipher, Chief Solutions Architect, and Dr. Anna Scott, Chief Edge Architect, Public Sector, discuss essential requirements for edge to cloud service architectures.   "
---

<div>
{% include transistor.html id="6279b2d2" title="#95 Requirements for Edge to Cloud Architectures" %}

{% include youtube.html id="url" %}
</div>

---

Anna recently headed an effort to write a white paper on edge to cloud service architectures. Edge to cloud encompasses all the high points of technology that Intel cares about: AI, edge, cloud, and network connectivity. The purpose was to gather experts in these areas to discuss how Intel approaches edge cloud architectures and how these architectures can all connect back to the cloud. The focus was on the elements that matter as opposed to current technology that addresses the issues. This would provide a framework to talk about and look for the disconnects. An interesting revelation was that IT, OT, and network folks speak different technical languages with different taxonomies, among other challenges.

One lesson from these discussions was that communications are hypercritical, and there must be solid knowledge of your comms, especially at the edge. This dictates how much computing needs to be local and how often you can rely on the cloud. In the public sector, the added complexity of use cases must keep functionality when there are denied, disrupted, intermittent, and limited (DDIL) conditions. We need to rethink these architectures in cloud connectivity based on those limitations.

Communications and connectivity is the most significant difference between a cloud architecture, service infrastructure, and the edge. Many current tools incorrectly assume constant connectivity; if something is not connected, it is dead. That is not the case on edge. It’s evident in edge organizations such as the military. Still, even in industries such as telehealth, you have to assume there will not be good connectivity, for example, in the telehealth use case where you might be dependent on the patient’s home WiFi. The industrial space has similar requirements. Some can’t be offline because of critical controls for specific machinery or processes.

So, how can you have edge-centric compute that maintains all critical functionality with connectivity back to the cloud in an essentially intermittent fashion? There are architectures for this, but there is still much more to be done to have seamless operations when the connectivity might not be continuous. What can you keep doing, and what happens when everything is restored? There will be a disconnect with what’s been happening with the data. It becomes complex when you have to synchronize all this data at scale, perhaps with thousands of edge devices.

## Security

Security on edge is another area where there is always more work to be done. Traditional security measures such as authentication are still critically important, but devices are a huge attack surface, and their physical security is a different issue. Laptop security tends to be solid, and those measures must be applied to other edge devices. New AI developments will help determine whether the devices are in the location they should be in and detect anomalies in one of, say, ten thousand devices.

## Application Development

In building applications, developers must understand the unique edge environment and develop them without the need to reprogram or bring in new middleware to run at the edge. Applications must be able to run with computing, power, and connectivity limitations. In addition, the edge can be in a new distributed compute setup, and the application needs to be designed to run off a mesh network with highly distributed compute. Decoupling the application from the hardware is a significant shift and getting more generic and less purpose-built. Still, the whole dialogue is moving toward getting data from anywhere and using it anywhere.

## Data Management

The volume of data generated and collected at the edge is so great that it doesn’t make sense to send all that data to a data center to be processed. One of the reasons is the cost. In the United States, a private 5G network can be cost-effective for these enormous amounts of data, but the cost would be prohibitive for most organizations without private 5G.

The other issue is that most of the data is of no use. For example, when monitoring devices or applications, most data indicate that everything is running correctly when you only care about events that suggest things are not OK. AI algorithms are applied at the edge, decreasing the amount of irrelevant data being pushed back to the cloud for processing.

The traditional mode of operation for data management, copying everything to the data center, and running analytics there, doesn’t work well for the edge. Pushing applications out to the edge doesn’t always work, either. Intel has identified a few other data architectures or data ops. One is called data exchange, where there is a combination of moving data in secure enclaves only after it has been analyzed on edge, like batch processing. The other is called intelligent data streams, where SADE and SABR come into play. Data is only moved based on rules, and it is being streamed. It works in DDIL environments because it can determine the current operating environments and adjust.

## Manageability

Systems must be architected in a way that they can be maintained. You can’t deploy ten thousand devices and then regularly send a small army of people to check on those. IT has been traditionally cautious about not wanting to upgrade a working system. Still, it doesn't make sense to leave systems alone, especially with a fear of ransomware attacks on OT networks. Systems must be architected with a way to keep everything easily updated to have the robustness to deal with the security environment.

## Availability

Especially in critical fields such as the military or healthcare, it is important to design systems with sufficient redundancy; it’s more of a systems approach. If individual components fail, the end goal still has to be met. That’s very different from what happens in the cloud, where it’s about keeping the infrastructure up.

The technology is not quite there yet, but it’s on the radar to design for multiple networks. If, for example, you use WiFi 6 preferentially that fails, the system can use 4G or another available network. The network must be solid as well as the compute. A standalone operation without the network side is fragile. If you go with hardwired costs, you get its higher limitations and lose your mobile applications.

You can find the white paper “Essential Requirements for Edge to Cloud Service Architectures” for more information at embracingdigital.org or intel.org.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
