---
layout: posts
title: "Understanding the Shared Responsibility Security Model"
number: 78
permalink: episode-EDT78
has_children: false
parent: Episodes
nav_order: 78
tags:
    - Multi-Cloud
    - Cybersecurity
    - Shared Responsibility
    - Cloud Security

date: 2022-02-24
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Intel, explains shared responsibility security models. Who is responsible for security can become murky in the cloud; responsibility depends on cloud service delivery models and other factors.  "
---

{% include soundcloud.html id="edt78" title="#78 Understanding the Shared Responsibility Security Model" %}

{% include youtube.html id="NY3Ct___1w8" %}

---

## Security in the Cloud

Most people understand the responsibility of security on-prem, but the responsibility becomes murkier in the cloud. If data is protected in the cloud, how is it protected? Who is responsible for that security? What about patching machines?
Recently, cloud service providers have begun offering even more services, so there are multiple models. Sometimes security ends up lost in the middle.

## Security Areas

There are four major security areas we need to understand.

### Physical

Physical security is the easy piece to recognize. Cloud service providers are responsible for the physical security of their data centers, and you are responsible for the physical security of your own data centers. In addition, you must secure your physical space. If you are a manufacturer, for example, you must secure the machines inside your area. A recent hack came through the HVAC system that was plugged into an organization’s network.

### Infrastructure

Infrastructure security is not the physical aspect, but the hardware itself. Do your network switches have the right security patches and upgrades? Are the drive and storage devices being upgraded? Are they being protected? The infrastructure can fall into gray areas with cloud services providers, so you must know who is responsible for what and in what circumstances.

### Application

For application security, you must know who has access to an application and whether it is being updated with the right security patches.

### Data

Protecting your data is one of the most important things you must do. Data can actually be used as a weapon in a ransomware attack where attackers take it or encrypt it. It’s also being used for powerful competitive advantages in different organizations. You must know where your data is and how to protect it.

## Cloud Service Delivery Models

There are three basic cloud delivery models. Different models are created all the time, but the three big ones are Infrastructure as a Service (IAAS), Platform as a Service (PAAS), and Software as a Service (SAAS). We will categorize everything else as X as a Service (XAAS).

### Infrastructure as a Service

IAAS is when you are leasing from a cloud service provider. This comes in terms of virtual machines and virtual networks, so storage, compute, and network. We are also starting to see cool things with accelerators, such as GPUs, or even neuromorphic processors. IAAS is where you run your applications.

### Platform as a Service

The next layer up the stack is PAAS. This is where you get a certain framework such as Kubernetes to run things. VMware running on top of IAAS is PAAS. CICD pipelines as a service have many tools that fit into this space. PAAS allows you to build and deploy new services on top of this platform so you can easily deploy and manage large systems that are built on top of IAAS.

### Software as a Service

Next is SAAS. This is specific software that is managed by the software provider or the cloud service provider, or it could be a third party offering SAAS for someone else. The key with SAAS is that they are responsible for application security. They manage the uptime and all the managerial areas such as reliability, security, and integrity. Many of the SAAS programs are built on top of PAAS platforms.

### X as a Service

XAAS can be any new service such as artificial intelligence, device management, or security detection.

Understanding these different delivery models is important because shared security models from cloud service providers are based on the delivery model.

## Cyber Domains

Each of the six pillars of cyber security, as identified by Steve Warren, CTO at Intel on an earlier podcast is important whether you are in the cloud, on-prem, or on the edge. The six pillars are threat detection, intelligence, analytics, and orchestration; identity and access management; data and application security; network security; supply chain security; and host and system security. All six of these domains fit into the shared responsibility security model that cloud service providers are espousing.

## Shared Responsibility Security Matrix

This shared responsibility is illustrated in the matrix. The service model delivery techniques are on the vertical axis: SAAS, PAAS, IAAS, and on-prem. If you are hosting yourself, everything on the far right is your own responsibility.

On the IAAS side, you are fully responsible for data and application security and half responsible for infrastructure because you are still responsible for network control and operating system. The cloud service provider is responsible for the physical network and host.

On the PAAS layer, you are still responsible for data security and half responsible for application security and identity and directory infrastructure. There are some tools available to help in these areas. Although you are responsible for applications and their platforms, they are responsible for the frameworks and middleware that they are providing. Although most of the operating system will be taken care of by the PAAS layer and they give you some higher-level tools, you are still responsible for configuring the network controls.

Up the stack on SAAS, even if you are using storage as a service, data as a service, or CRM such as Salesforce, you are still responsible for your data because you still need to design and encrypt your backups and manage accounts and identities.

One key point is across the models is that you are responsible for your data security; there is never a scenario where you leave all your security to the cloud service providers. You must back it up and ask if you are using object storage so you can roll back from a ransomware attack, if you are correctly maintaining your access management, and if you are using tools that make this easy to do.

## Different Approaches to Security

Each of the top three cloud service providers takes a different approach to security, specifically around network configuration.

### AWS

AWS focuses on prevention. When you spin up a VM, the default is to have no ports open, so you must create security groups. AWS is the most restrictive, using IAM for identity management. AWS is great for mid-sized teams, but it doesn’t do as well for very large organizations.

### Azure

Azure focuses more on ease of use; security is less restrictive. They use the concept of virtual networks for security, so all VMs on the same virtual network can talk to each other on that network. This is the opposite of zero trust, so you have to decide what is more important to you. Azure uses Active Directory, so if you already have a mature, substantial Active Directory, then that is a good way to go for identity management.

### Google Cloud Platform

Google Cloud Platform also focuses on ease of use, but they hedge their bets on VMs and network security. You can have profiles that lock down everything on a VM or you can have a profile that opens them up a bit more. They are in the middle of the road as far as restrictiveness. Although not as robust as AWS or Active Directory, GCP has good identity management.

All three of these cloud service providers office IAAS, PAAS, SAAS, Container as a Service, and a variety of XAAS. You must evaluate the security model and understand the differences in each.

In some respects, understanding the shared responsibility security model is more difficult than just running things on-prem because now there are more players involved and complexity increases. The key is in understanding the models and using available tools to help you manage security across multiple clouds. 


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
