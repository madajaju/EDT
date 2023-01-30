---
layout: posts
title: "Hardware Security: Imperative for Transforming Data"
number: 27
permalink: episode-EDT27
has_children: false
parent: Episodes
nav_order: 27
tags:
    - Data Governance
    - Data Management
    - Data Protection
    - SGX
    - Confidential Computing
    - Secure Enclave

date: 2020-10-28
guests:
    - Darren W Pulsipher
    - Jesse Schrater

img: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Public Sector, Intel, and Jesse Schrater, Security Manager, Data Platforms Group, Intel, discuss the current security landscape and how Intel’s SGX and partnered ecosystem offers a timely and tested solution for data in use and other security concerns."
---

{% include soundcloud.html id="edt27" title="#27 Hardware Security: Imperative for Transforming Data" %}

{% include youtube.html id="2F1AgMncBjs" %}

---

## Data Security Landscape

The world has become incredibly connected with all the devices, and this is driving an exponential growth in the amount of data that we need to manage: the more volume, the more risk. It’s a challenge, and leveraging new computing capabilities like cloud, analytics and edge computing drives additional complexity.

There are three major trends in security: encrypting everything, workload isolation, and a chain of trust. These three areas are important to help organizations deal with increasing regulatory requirements to keep data protected.

When organizations decide to make a digital transformation, or with a catalyst such as COVID 19 that necessitated remote workers, for example, security needs to go hand in hand to keep security controls and compliance in place. If you address security along the way with your deployments and implementations, the more you are going to be able to transform the way you do business in a sustainable fashion.

## Protect Data Throughout its Life Cycle

Encrypting data is important through all its phases. Historically, attackers could get access to data right across the network. After that became encrypted, they started breaking into the data centers and pulling data out of the databases. So then we started encrypting storage. Still, the data arrives at an endpoint and gets pulled into memory and decrypted, so a sophisticated attack that could get root access could potentially grab or manipulate the data at that point of processing. This attack on data in use is the new frontier for attackers and for those defending the space. Intel has some exciting and innovative new capabilities that we are building into our processors to help data owners, application owners, service providers, and basically the whole ecosystem to close those potential vulnerabilities.

## Why Protect Data in Use?

In many cases, attackers are using privilege escalations at the operating system or Hypervisor layers. They could be coming through a guest OS, a host OS, or even physical hardware access on the server. The attackers could be classic hacker malware-type intrusions, third party competitors, or insiders such as an admin or system admin at a service provider.

## Intel Software Guard Extensions (Intel SGX)

Intel has built a new technology into our processors called Intel Software Guard Extensions, or SGX. This is part of the confidential computing paradigm that’s exploding on the market right now as businesses are trying to transform their data and keep it private. SGX addresses these newer types of attacks by allowing the application to speak directly to the processor in the encrypted memory, bypassing the operating system, the Hypervisor, and essentially everything else on the system. So, even if you had a breach in your operating system, Hypervisor, or other applications, attackers wouldn’t be able to access that data because the operating system itself doesn’t have the visibility to that data. Therefore, you don’t have to trust the provider or the rest of the system stack because you basically operate as if they are compromised already, and your code and data is going to remain confidential and unchanged; it will have integrity.

Intel is trying to make it so you have to trust the fewest number of components possible. SGX goes the farthest down that path for the data center than anything else we’ve seen. All you have to trust is your own application and the processor itself.

SGX offers a powerful capability for businesses such as cloud service providers, who can tell their clients that they, or the government, for example, couldn't get access to your data even if they wanted to do so.

## Intel SGX in Action

SGX is already used broadly by cloud service providers and software vendors, but in some ways, we are just getting started. Although this technology has been out there for a number of years, we’ve built in ecosystems, and we’re bringing new capabilities in our upcoming third generation Xeon Ice Lake processors. This will expand its capabilities, its ability to scale to large enterprise workloads, and it is going to be able to protect much larger chunks of memory with better performance and across a much broader footprint in the mainstream data center.

Intel is one of the founding members of the Confidential Computing Consortium, which is part of the Linux foundation. Most of the big cloud service providers, many software providers, and even our other silicon competitors are working together on these types of trusted execution environment solutions and building standards for handling this type of capability. We are also bringing awareness of the necessity and the business value of confidential computing.

## Intel SGX Software Partner Ecosystem

SGX provides plenty of options for use depending on what the data owner is looking for. If a client wants the most granular level of control, SGX is going to allow them to do that. In fact, they can essentially pare down their application to just the coded data that they want to keep isolated from the rest of the system, or even just a part of that application. This scenario, however, does require them to write the application for that purpose.  In the ecosystem, there are open source resources that are making this type of development a lot easier, and it’s always expanding.

On the other side is a fast path lift and shift. You can take your application and drop it into a more secure environment. The ecosystem is responding and creating SGX-aware containers. You could drop your unmodified application into that environment where it’s the only thing running, so the application itself thinks it is running in its native environment.

Our ecosystem partners have made a lot of progress in this space with things like Fortanix, Graphene, and Scone. Some are open source and some are proprietary, but come with all the services already baked in. For example, Microsoft Azure Confidential Computing offers the whole range from lift and shift solutions with SGX all the way down to SDKs that allow you to develop your application directly for it and to land it in their environment so you don’t even have to manage the hardware. There is a full set of options, so no one should be afraid of the complexities of SGX. Clients should also have confidence that sensitive material such as machine learning algorithms or encryption keys are going to be handled with a very granular level of protection.

## Confidential Computing: A Security Game Changer

SGX has been out there for some time, and we’ve been working to expand it. It’s been tested and put through the wringer, with hundreds of research papers and hardening over time with updates. It has the advantage of not being the new kid on the block, rather a foundational solution that is being brought into the mainstream with Ice Lake. It’s no longer focused on small, sensitive areas, but ready for the big stuff now.

Government, financial services, and health care are some of the industries that saw the appeal of SGX early on because they have a lot of regulatory expectations and privacy requirements, yet they’re trying to share data and do innovative things with multiple parties. Enterprise has similar situations, for example, if they want to move to the public cloud, yet don’t trust it to protect their sensitive data. With SGX, they don’t have to trust the provider.

Intel just had a big announcement this month and we are really blowing the doors open on the things we have coming up. A great place to start is intel.com/sgx for testimonials and a deeper dive into the information. Customers should be looking for the ecosystem partners such as Azure and Fortanix. Another place for information is the Confidential Computing Consortium because of the number of people working in that space.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
