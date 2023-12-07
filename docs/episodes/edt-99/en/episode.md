---
layout: posts
title: "Precog Cyber Attack PAth with XM Cyber"
number: 99
permalink: episode-EDT99-en
has_children: false
lang: en
parent: Episodes
grand_parent: English
nav_order: 99
tags:
    - aiml
    - cybersecurity
    - xmcyber
    - technology
    - process

date: Mon Aug 08 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Paul Giorgi

img: thumbnail.png
image: thumbnail.png
summary: "Intel’s Darren Pulsipher, Chief Solutions Architect, and Paul Giorgi, Director of Sales Engineering, XM Cyber, discuss how XM Cyber technology can help organizations uncover attack paths and reduce risk."
video: "https://youtu.be/url"
description: "Intel’s Darren Pulsipher, Chief Solutions Architect, and Paul Giorgi, Director of Sales Engineering, XM Cyber, discuss how XM Cyber technology can help organizations uncover attack paths and reduce risk."
---

<div>
{% include transistor.html id="60eaf764" title="#99 Precog Cyber Attack PAth with XM Cyber" %}

{% include youtube.html id="url" %}
</div>

---

Paul has been in security since the late nineties, getting his start by doing projects for the Department of Homeland Security and the Department of Defense. In 2005, he joined Fishnet Security doing sales engineering and has been tied into sales engineering. He joined XM Cyber to concentrate on breach and attack simulation.

Rather than traditional cybersecurity, which is detection, remediation, and prevention, XM Cyber is predictive. A good description is that it is a precog simulation. XM Cyber creates imaginative incidents to give you insight into how your tools might be able to address them and how you could work to remediate specific chokepoints. The idea is to do all of this before pen testing. You can fix things today, see the impact tomorrow, and then continually increase and improve your security.

Google maps is a good analogy for how XM Cyber works. When you want to get from one place to the next, Google maps will tell you all the ways to get there, which avoids tolls, which is the most direct, etc…XM Cyber does the same thing but with an attack simulation. For example, suppose you have a compromised active directory user account. In that case, it will show you the six steps to be able to get to an on-prem domain controller and compromise that critical asset. It will also show all the different routes between those two points.

A use case for this is that you can enable a red team to be super-efficient with this information because they don’t have to poke around and try to make discoveries. It can also help the blue section, allowing them to prioritize remediations on chokepoints. For example, if there are 400 attack paths all going to different areas in your DMZ, but all 400 seem to have to leverage this one entity to make that path happen, then you can fix that one problem and destroy all 400 paths. Blue teams can lock down those chokepoints that could enable the attacker.

One area that XM Cyber analyzes is identity management, not just in the data center but also in the cloud. Sometimes attack paths will be ten steps long, but nine steps will be navigating the identity world. For example, you might have permissions to your admin account, and then that admin account might have additional permissions. Do six or seven adjusting different permissions or resetting passwords and deploying GPOs. You could take nine steps from a standard user account to domain admin by leveraging the active directory.

In addition to identity, XM Cyber looks at over a hundred entities such as machines, S3 buckets, and SSH keys. These different entities can be combined to create an attack path. Sometimes it gets very complex. For example, an attack could start on-prem, go out to Azure, take advantage of Intune, and then go back over to compromise another machine that allows a pivot over to GCP. Once attackers are in the GCP environment, they can take advantage of trust or permission between AWS and GCP to compromise AWS. XM Cyber looks at all the different types of entities in disparate environments and connects them to assess these paths around how every entity holistically plays together in the risk of all the others.

There are two ways XM Cyber engages with customers. The first is high-level discovery to assess the environment, expose vulnerabilities, and measure how an attacker can expose new vulnerabilities to put critical assets at risk. The second is a targeted assessment of a specific scenario that the customer is worried about. These engagements are not just static analysis of entities. They are dynamic because they look at traffic and other patterns.

A typical targeted use case is determining if OT is the critical asset or the breach point. XM Cyber plays out scenarios such as if a machine in HR is the breach point, is there any risk to this PLC sitting in the SCADA environment controlling pressure switches that could turn off the electricity for a city municipality. That is an actual use case that XM Cyber can simulate. This type of information is critical in a world where OT is no longer isolated but connected to networks.

XM Cyber is a SaaS solution rather than on-prem, so they can stay dynamic and deliver the best service. It can be scary to think that something in the cloud has all your attack techniques. Still, XM Cyber does a lot of work to ensure that data is completely isolated, SOC 2 compliant, among other certifications, and there is no multi-tenancy. They also do not collect anything sensitive. Sensitive information is hashed, and only a portion is sent to the cloud. They don’t have to have actual data.

Once XM Cyber has found the problematic pathways, they can also help you remediate them via customer success managers who have weekly or biweekly meetings where the goal is to take the data coming out of the platform and help you use it and find solutions. They also have partners such as managed service partners who bolt the attack simulations onto their platforms to give them insight into offering their services.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
