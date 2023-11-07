---
layout: posts
title: "Software Defined BareMetal Management"
number: 132
permalink: episode-EDT132-en
has_children: false
lang: en
parent: Episodes
grand_parent: English
nav_order: 132
tags:
    - metify
    - sdi
    - technology
    - baremetal
    - heterogeneouscompute
    - compute

date: Wed Apr 05 2023 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Ian Evans
    - Mike Wagner

img: thumbnail.png
image: thumbnail.png
summary: "In this episode, Darren interviews the founders of Metify, Ian Evans and Mike Wagner, about their unique approach to bare metal software-defined infrastructure management using the Redfish standard."
video: "https://youtu.be/ecB9dPexjIM"
description: "In this episode, Darren interviews the founders of Metify, Ian Evans and Mike Wagner, about their unique approach to bare metal software-defined infrastructure management using the Redfish standard."
---

<div>
{% include transistor.html id="dd6ccded" title="#132 Software Defined BareMetal Management" %}

{% include youtube.html id="ecB9dPexjIM" %}
</div>

---

With over two decades of experience in the data center space, Ian shares his insights on optimizing infrastructure, automating server management, and streamlining different components in a data center. On the other hand, Mike, who previously worked with IBM and Red Hat, focuses on consultative selling and channeled-led sales to better understand the problems and patterns of enterprises in operating their data centers. Together, they created Metify in 2020 to provide automation solutions for managing servers, storage, and network devices in data centers, despite the rise of public cloud services like RWC Azure and GCP.

## Datacenter Automation

Automating data center management can bring on-prem management closer to a public cloud experience while reducing costs. One of the vital elements of this transformation is standardization and open standards like the DMCA redfish specification in making this automation possible. The ubiquity of this specification across enterprise-class motherboards has made it accessible for all players to integrate with it. Financial pressures and user demand are essential in pushing OEMs toward implementing these open standards. Overall, automation and standardization can help data centers compete with cloud service providers on OpEx costs while improving server management capabilities.

Datacenter efficiency can be improved using tools that allow automation and integration with standard frameworks. The hardware providers face pressure due to technology commoditization, so they must differentiate themselves by offering similar scaled-down white box servers. Metify provides a single pane of glass to manage any manufacturer's devices as long as they are BMC enabled and adhere to the Redfish specification. There are emerging standards to manage small devices through redfish; the question remains about how far the extensibility gets down to the networking-specific parts of the stack.

## Hybrid Cloud

The rise of hybrid cloud strategies drives how companies manage their data centers, edge, and cloud environments. Public cloud growth is significant; however, there is massive growth in private cloud spaces. Metify provides a more cloud-like experience from an operations standpoint, allowing sysadmins to manage their edge, data center, or multiple data centers all through a standard API. Keeping APIs open and standardized is essential for customers to use familiar management tools like TerraForm and Ansible. Hybrid cloud technologies enable companies to optimize cost, governance, security, and efficiency.

One of the dangers of an open standard can be vulnerable to security breaches without proper command and control measures. Metify addresses this problem by placing audibility, authorization, access, and controls to the open standards to provide a systemic approach to managing bare metal across heterogeneous hardware. Metify’s product focuses on providing a level of control to prevent undesirable incidents, and they integrate with workflow management tools for automation.

## BareMetal SDI

Many modern data center technologies rely on virtualization as the foundation of their management control plane. However, bare metal management remains a traditional, manually intensive task. This unique approach to private cloud infrastructure doesn't rely on virtualization. Instead, it uses the software-defined infrastructure approach for bare metal management, allowing for a mix of bare metal, VMs, and containers. This approach enables system administrators to manage the underlying infrastructure more effectively and provide a frictionless cloud-like experience. This approach can support heterogeneous computing environments, where CPU, GPU, FPGA, VPU, and NPUs can be leveraged for multiple workflows. With Redfish and an extension of the schema, Metify can easily control new devices, and they see the expanding ecosystem as incredibly valuable for product development. 



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
