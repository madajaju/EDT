---
layout: posts
title: "Data Breaches & Secure Supply Chain"
number: 61
permalink: episode-EDT61
has_children: false
parent: Episodes
nav_order: 61
tags:
    - Data Breach
    - Cybersecurity
    - Supply Chain
    - Secure Supply Chain

date: 2021-08-12
guests:
    - Darren W Pulsipher
    - Steve Orrin

img: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Intel, discusses data breaches & secure supply chain with frequent guest Steve Orrin, CTO of Intel, Federal."
---

{% include soundcloud.html id="edt61" title="#61 Data Breaches & Secure Supply Chain" %}

{% include youtube.html id="zB6-pf_N4u8" %}

---

In addition to high profile attacks in the supply chain such as the incident with SolarWinds, there are other, lesser-known attacks that are equally problematic.

## Secure Supply Chain

One example is The Great Suspender Chrome extension, a tool for making sure memory is used correctly in Chrome applications, with about two million users. The founders of this open source tool sold their company to an organization for millions of dollars without due diligence. The purchaser turned out to be an organized crime group that then turned the tool into malware and spyware.

There was no attack in the sense that they didn’t hack into the original company, but they purchased it and did whatever they wanted with the code. What was one day a legitimate product was illegitimate the next day. No amount of security protocol would have fixed that problem. Companies now need to vet their suppliers and the third parties that support them.

Open source is a blessing and a curse. The blessing is that since it is open source, you have access to the source, and you can review it all you want. The curse is that no one has the time, energy, or expertise to thoroughly vet every piece of open source code that they are using. Malware vulnerable code, even if unintentional, can be introduced if it is not caught by the community, and sometimes that doesn’t happen for a long time.

There are two things that could mitigate this problem: One is that code could be run through a source code analysis tool and there could be a rating system for code contributors whose code consistently comes with fewer vulnerabilities or bugs. Third party vendors would primarily do this work. Second, there are already some well established startups in the space of verifying open source products to show which objects in a repository are trusted and which are not yet trusted.

Current vulnerability scans in open source is one control, but that kind of security alone is not enough. It needs to be combined with additional controls before it runs across your organization.

## Data Breaches

In addition to ransomware and supply chain attacks, data breaches are a common problem. In 2020, there were 1.8 trillion dollars in data breaches extracted across 7.8 billion data records. A breach at McDonald’s, for example, compromised customer, partner, and internal data.

## Encryption

The first part of the solution is to have better security tools in data and infrastructure. Encrypting access and incorporating default deny so that even if someone gets in through the front door, they do not have access to everything is critical. Data also needs to be encrypted inside the organization, not just what gets exposed to the cloud or what you send externally. Any data that transverses your network as well as data at rest should be encrypted.

Encryption has a cost, but on modern hardware, there is built-in acceleration that obviates the penalty. You can now turn on encryption throughout your organization without performance impact.

## Segmentation

Another part is enclaves, or segmentation.  One of the challenges in network corporate environments is that once again if someone gets in the door, it’s free rein if everything is connected. There has been a movement lately to take dev and move it into its own network, and that’s a start, but it’s only the tip of the iceberg. Network segmentation should be across the organization. You can still have transverse, but it’s up against a set of rules and will help limit the impact. For example, if your help desk gets attacked, your HR systems won’t be compromised at the same time.

Micro-segmentation was a buzzword five or so years ago, but it needs to happen now. There are some great tools out there to help with this, such as container ecosystems where you can deploy an application and it’s in its own network with its own firewall.

Implementing proper authentication credentials also needs to happen now. Multi-factor authentication is necessary, as well as entity authentication. Many tools are automated and have automated processes, so entities, not just people, must have proper credentials.

## Zero Trust

Zero trust has matured to the point where it should be implemented, and some of the key tenants around default deny and trust no one are critical. The technology has caught up to deployment of those types of concepts.

Developers may worry about these security tools slowing down the process, but there are ways to construct the architecture to lessen this problem. For example, if you are a developer and have proper credentials and access, you should be able to access the things you need when you need them, and lose access after you are finished, rather than having a credential that gives you access to everything all the time. The idea of zero trust is not that the company doesn’t trust the developer, but that access is for the right moment, not just blanket access if a bad actor steals the credential.

No industry can afford to ignore the current risks. Every organization must look at security differently and implement security across the organization and architecture. 


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
