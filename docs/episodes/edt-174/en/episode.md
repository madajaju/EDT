---
layout: posts
title: "Zero Trust Application with Confidential Computing"
number: 174
permalink: episode-EDT174-en
lang: en
nav_exclude: true
nav_order: 174
tags:
    - confidentialcomputing
    - encryptingdata
    - datasecurity
    - sgx
    - fortanix
    - datasecuritymanager
    - globalkeymanagement
    - encryptionkeys
    - databaseencryption
    - datasecurityplatform
    - truetrustapplications
    - confidentialcomputingmanager
    - onprem
    - privatecloud
    - publiccloud
    - zerotrust
    - futureofconfidentialcomputing
    - distributedanalytics
    - zta
    - cybersecurity

date: Thu Nov 16 2023 00:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Patrick Conte
    - Darren W Pulsipher

img: thumbnail.jpg
image: thumbnail.jpg
summary: "In this episode Darren interviews Patrick Conte from Fortanix about leveraging confidential computing in securiting applications in zero trust architectures."
video: "https://youtu.be/UWYLz_a9CsE"
description: "In this episode Darren interviews Patrick Conte from Fortanix about leveraging confidential computing in securiting applications in zero trust architectures."
---

<div>
{% include transistor.html id="a2bed64b" title="#174 Zero Trust Application with Confidential Computing" %}

{% include youtube.html id="UWYLz_a9CsE" %}
</div>

---

## The Evolution of Confidential Computing

## The Evolution of Confidential Computing

Confidential computing allows encrypting data not just at rest and in transit, but also while it is actively in use. This protects against attacks even if an attacker gains root access, since memory dumps will just show useless encrypted data. Intel's Software Guard Extensions (SGX) technology provides a hardware-based foundation for confidential computing. Fortanix builds on top of SGX and related Intel advancements to make confidential computing accessible and easy to use.

A core Fortanix offering is their Data Security Manager platform. This replaces purpose-built hardware encryption solutions with software encryption powered by SGX enclaves. Data Security Manager enables advanced crypto functions like global key management for millions of encryption keys all from a unified console. It can also handle database encryption, certificate management, and other critical data protection needs. This software-defined approach represents the future of data security.

## Enabling True Zero Trust Applications

Confidential computing has implications beyond just data security. It also allows attaching security profiles directly to applications themselves, so the security travels with the application regardless of where it runs. Fortanix analyzes applications to assess if they can run seamlessly in SGX enclaves. If modifications are needed, they provide guidance on rewriting portions in enclave-friendly languages like Python.

Fortanix's Confidential Computing Manager solution orchestrates encrypted applications across different environments like on-prem, private cloud, and public cloud. This orchestration engine achieved zero trust not just for sensitive data, but also for mission-critical applications. Workloads can be dynamically shifted to different SGX-enabled environments as needed while maintaining end-to-end security.

## The Future of Confidential Computing

There are many exciting potential use cases for confidential computing, like running distributed analytics collaboratively within isolated secure enclaves. While there used to be substantial performance penalties, improvements by Intel and Fortanix have now reduced overhead to single digit percentages in most cases. Adoption is rapidly growing in healthcare, government, finance, and other industries to protect valuable algorithms and regulated workloads. As confidential computing becomes more ubiquitous and accessible, it will form a foundational pillar of modern zero trust architectures.

## Conclusion

This insightful podcast provides a thought-provoking overview of how confidential computing can enable true zero trust applications. The ability to encrypt data in use and attach security profiles to applications opens up intriguing new possibilities for end-to-end data protection and application security across dynamic environments. As threats become more sophisticated, confidential computing will only increase in strategic importance.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
