---
layout: posts
title: "Cloud Broker Organization Part 2"
number: 57
permalink: episode-EDT57
has_children: false
parent: Episodes
nav_order: 57
tags:
    - Cloud Broker
    - Organizational Change
    - Multi-Cloud

date: 2021-07-15
guests:
    - Darren W Pulsipher
    - Dave Shrestha
    - Kevin Bleckmann

img: thumbnail.png
summary: "In part two of two, Darren Pulsipher, Chief Solution Architect, and Intel Cloud Solution Architects Dave Shrestha and Kevin Bleckman talk about the benefits and services of a cloud broker organization."
---

{% include soundcloud.html id="edt57" title="#57 Cloud Broker Organization Part 2" %}

{% include youtube.html id="9cZHCXE64Zs" %}

---

# Considerations Cloud Selection

Seven years ago, when Dave and Kevin first started Intel’s cloud broker team, there were some significant differences in cloud service providers such as regional availability, but now, with maturity, the differences are smaller. Some providers specialize in certain areas like AI and machine learning or rich managed database services, and there are cost factors, but they are more similar than not. Cloud providers, in general, are becoming more of a utility as they mature.

Security is good and fairly standard across the cloud providers. Previously, Intel used external third party vendors’ products to manage security with cloud services. The cloud providers have now built much of that into their platforms, and Intel has switched over to using more built-in components. There is still a lot of work to be done in this space. In some cases, you will still have to do security yourself, but the providers are headed in the right direction. Using built-in tooling isn’t the easiest option for new companies because it’s not fully managed, but once you have the skill set and maturity, at least the tooling is provided.

Cost management is still an art; many people are shocked at their first cloud bill. Although there are built-in tools that will help, advisors, and public cloud calculators, there are some hidden costs. Ingress and egress charges are probably the number one surprise, followed by over provisioning. Intel has a cloud optimizer that is powered by Densify that will help identify over provisioned resources and recommend through detailed analysis which instance sizes and families are the most optimal.

Some workloads should remain on-prem, especially for large companies like Intel that have a large on-prem data center.  The cloud broker team has an internal tool called the decision framework tool that can help put the right workload in the right place, and sometimes on-prem is the best solution.

# Workload Consideration for Public Cloud Placement

Without a tool to make the determination, there are five areas to consider.

*	Security: Make sure you know the identity providers, encryption, compliance, and single sign-on options. These are the same items you would normally deal with on prem. Instead of separate tooling, it’s best to have tooling that spans both on-prem and public cloud so your teams don’t have to relearn separate tooling.
*	Privacy
*	Workload Stability
*	Data affinity/data gravity: Make sure your cloud provider has availability in the regions you need. Some cloud providers have availability zones, or data centers, across all their regions, and some don’t.  In addition, if a workload is connecting to a lot of on-prem systems, it doesn’t make sense to put that workload in the public cloud.
*	Cost: There are still some differences in cost across public cloud providers, especially with large compute instances. Also consider egress costs.

## How to Sell your Cloud Broker Service

Buying into the cloud broker service can be difficult for some, such as developers who are used to having control and spinning up any instance they want. There can also be growing pains. When people at Intel first got their accounts, they felt insecure, and then information security sent messages when they were doing something wrong, and they didn’t necessarily know what they did or how to fix it. As the service evolved and matured, those problems sorted themselves out as the team stepped in to help and then employed auto fixes.

People saw that the service was ultimately a benefit because they provided a quick, easy way to get in the public cloud with all the support they needed. After a period, the service began to sell itself.

One of the key services the team offers is acting as a bridge between Intel’s end customer business partners and information security groups to negate overly aggressive security policies that create hassle and too much ticketing.  The team provides the proper balance that allows developers enough freedom to work within a secured framework and still meet the security requirements. The brokers basically work as mediators between information security and developers.

The cloud broker team also provides training by bringing in the cloud providers to hold workshops. This benefit grew from the cloud Center of Excellence as well, where people asked for training in specific areas, and then the team would negotiate it with the vendors.

In addition to external vendors, Intel used internal teams to showcase what they had done with public cloud so other teams could use that knowledge.

Cloud broker teams within companies can provide a range of services and benefits such as security and cost efficiency, especially as the public cloud services mature and expand and become more necessary for operations. 



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
