---
layout: posts
title: "Securing the Teleworker Part 2"
number: 8
permalink: episode-EDT8
has_children: false
parent: Episodes
nav_order: 8
tags:
    - CyberSecurity
    - Teleworker

date: 2020-08-04
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
summary: "With many employees now working from home, how do you make sure they are working securely yet still give them the flexibility they need to get their jobs done? In this episode, Darren and special Guest Steve Orrin, CTO of Intel Federal, discuss how to leverage Intel technology to effectively help secure the teleworker.  "
---

{% include soundcloud.html id="edt8" title="#8 Securing the Teleworker Part 2" %}

{% include youtube.html id="1PrO05zRapY" %}

---


## Client Technologies for Securing the Teleworker

Security on the client side starts and stops with being able to verify the client with a secure boot. Intel has provided this technology in our clients’ systems for years with Secure Boot with Trusted Execution Technology (TXT), and more recently, BootGuard (BtG). On the most recent platforms, we have Intel Hardware Shield, a set of technologies that secure the system at its lowest level, at the firmware and BIOS level. This is how something like an enterprise access control system can verify a client as being securely booted and having the correct firmware and the correct security controls in place prior to having access to the enterprise.

Intel has also done a lot of work over the years to help organizations better protect their data. In addition, we have allowed the client to turn on encryption everywhere without a performance impact. We have been implementing new instructions in almost every generation of our products, adding new capabilities to secure the teleworker.

Our other focus has been protecting the applications and their data in use. This is where Intel Software Guard Extensions (SGX) come into play. This gives organizations the ability to put key parts of applications and important data into secure encrypted memory enclaves. With teleworking, this means you can deploy applications into untrusted environments and still maintain a high level of security.

In addition, new technology that Intel has introduced in the threat detection category allows for organizations to get deep visibility into the operations of the platform to monitor for threats; no malware can hide. These technologies are revolutionizing the way we detect malware using machine learning and artificial intelligence.

## Data center Technologies for Securing the Teleworker

Even if you have secured the clients, you must also secure the data center. Both sides must be protected because your system is only as secure as the weakest link. Many of the techniques for securing the teleworker are similar to securing your enterprise: secure booting, virtualization security, and isolation controls. Again, technologies like Intel TXT and BootGuard enable you to securely boot those platforms and data center and cloud assets. More recently, we’ve introduced technology, Intel Select Solutions for Hardened Security, that integrates a lot of the Intel security technologies into a single platform that is enabled by default.

You need to be able to protect your data at scale, meaning the ability to use all your security tools without negatively affecting performance. Intel’s Hardware-Accelerated Encryption tools (SHA, AES-2X, VPMADD52) make this possible. Intel’s new instructions and QuickAssist technologies are specifically geared to the enterprise and cloud scale encryption requirements.

Finally, how do you monitor threat intelligence and audit at scale? Intel’s Cyber Intelligence Platform Architecture (FPGA, DCPMM, Optane SSD) uses high performance compute, storage, and memory technologies to scale the cyber intelligence platform, even with the extra burden of more external security with teleworkers.

## Short-term Solutions

Employee education is the first line for curbing teleworking security threats. Guidance in home security and security training or reinforcement of prior training in areas such as proper data access is crucial. Be pro-active with patches by pushing patches and requiring users to patch their devices. If you have enterprise access control, ERM/DRM and DLP solutions, turn them on and scale them out. Reassess your policies to make sure they meet the new reality of teleworkers. For web connections, turn on TLS and make sure it’s enforced. Two-factor authentication must be leveraged. Most organizations may not think they have the infrastructure to deploy this, but there are a variety of vendors that can help in this area that don’t require you to deploy a large amount of new infrastructure.

Many solutions are simply standard hygiene: Make sure your end point security agents are enabled and up to day. Manage and enforce security policies for the different types of user devices. Enable full disk encryption.

Organizations must understand that teleworkers are operating in an environment where the likelihood of a device being used by others in a variety of circumstances is high. Good security controls, most importantly employee education, can circumvent problems and allow employees to operate without negative impacts.

## Long-term Solutions

A long-term plan for security in an environment with teleworkers is now necessary, whether it’s for a permanent shift to more remote workers or to deal with another pandemic or similar situation. There are several steps organizations should take now to support this reality in the future.

One best practice is to implement zero trust policies. This reduces reliance on having to trust every aspect of users and clients who come in. Along with this, multi-factor authentication with users and devices should become standard across the organization. For those who haven’t adopted ERM and policy-based data access control, now is the time to do so to protect the data both offsite and onsite. Implementing deep stack security solutions rather than just at the application or network level is important. This includes secure boot with attestation, virtualization and contain security, and firmware security and monitoring. It is important to extend audit, threat intelligence, and monitoring to teleworker environments, despite pushback from users who don’t want more monitoring on their systems. Also consider extending security beyond the device in teleworker locations whenever possible, such as managed devices and networks.


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
