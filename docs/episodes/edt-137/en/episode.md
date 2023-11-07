---
layout: posts
title: "Rebirth of the Private Cloud"
number: 137
permalink: episode-EDT137-en
has_children: false
lang: en
parent: Episodes
grand_parent: English
nav_order: 137
tags:
    - cloud
    - computing
    - greenlake
    - hpe
    - multicloud
    - hybridcloud
    - technology

date: Tue May 09 2023 14:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
guests:
    - Darren W Pulsipher
    - Sam Ceccola

img: thumbnail.png
image: thumbnail.png
summary: "In this episode Darren interviews Sam Ceccola, CTO of DOD for HPE about the new business and technology models changing the way organizations consume hybrid cloud."
video: "https://youtu.be/ca8WFpYQLss"
description: "In this episode Darren interviews Sam Ceccola, CTO of DOD for HPE about the new business and technology models changing the way organizations consume hybrid cloud."
---

<div>
{% include transistor.html id="fcf7bb68" title="#137 Rebirth of the Private Cloud" %}

{% include youtube.html id="ca8WFpYQLss" %}
</div>

---

There has been a trend towards repatriation in the commercial sector, where businesses are bringing workloads and virtual machines back from public cloud environments due to financial reasons such as egress charges and budgeting for hyper-scaler workloads. Data sovereignty, security concerns, performance, and latency issues have also led to more companies moving away from the public cloud and back to private cloud technologies. Despite this shift, many cloud promises have been fulfilled to provide ease of use, elasticity, and consumption-based pricing. In order to ease the transition between clouds, the private cloud must provide ease of use, portability of workloads, and new consumption pricing models so highly demanded from the public clouds.

## Cost Control

Sam Ceccola, the HPE DoD CTO, believes it's essential to understand the risks and challenges associated with each private, public, and hybrid cloud technology. And architect solutions that take advantage of each technology’s strength. This is where HPE’s production offering, GreenLake, comes to play. GreenLake’s consumption-based service procurement model was first implemented in 2005 and has since evolved to include a self-service portal for managing multiple private and public cloud environments. GreenLake provides customers with the ability to deploy additional resources across the private/public cloud boundary on demand. It also manages and visualizes complex costs, such as egress charges and budgeting for hyper-scale workloads.

## Data Management

Another major concern for most consumers of public clouds is data management, governance, and sovereignty. Without a cohesive data strategy, many organizations are heavily burdened with data egress costs moving data in and out of public clouds. There are several different approaches to managing data across cloud boundaries. HPE uses an approach of cloud-adjacent storage which decreases the amount of data moved into the cloud to a minimum. GreenLake's cloud-adjacent storage keeps data on-premises while running compute workloads in the cloud. This approach ensures data sovereignty and reduces egress costs and latency issues associated with moving large amounts of data between clouds.

## Portability

Another key aspect of multi-hybrid cloud architectures is the ability to easily move workloads between clouds. Some organizations have moved to stateless container-based microservice architectures to provide the flexibility and portability of workloads. However, not all workloads can easily be containerized especially workloads that have applications that contain state. In these cases, virtual machines are used to give the ability to move applications from one cloud to another.  Moving VMs between clouds can be problematic as cloud service providers use different hypervisors and CPUs that may not be completely compatible.  Understanding the limitations of these migrations is critical in purchase decisions of hardware both virtualized and non-virtualized.

## Security

GreenLake does not limit customers to on-premises deployment, as it allows them to provision workloads across various cloud environments, including Amazon, Google, and Azure. In addition, GreenLake supports true hybrid workloads, where a workload can run both on-premises and in hyperscale cloud environments simultaneously. Running workloads across cloud boundaries can cause additional exposure to cyber-attacks. Understanding the security models of the different public and private cloud technologies can be a daunting task and increases the human capital required to effectively architect and manage a strong security position. The GreenLake platform handles security through its agnostic security engine, Security Central, which supports multi-cloud attestation and zero-trust architectures for independent clouds, managing the complexity and integration of security models.

Architecting a multi-hybrid cloud solution is nontrivial and requires an understanding of private and public cloud technologies, their limitations, and their strengths. luckily, there are organizations like HPE that have been working with multi-hybrid cloud architectures for several years and have learned the INS and outs of effective management of workloads across this new flexible environment.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
