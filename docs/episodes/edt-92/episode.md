---
layout: posts
title: "Protecting the Outer Walls of your Castle with Vulnerability Scans"
number: 92
permalink: episode-EDT92
has_children: false
parent: Episodes
nav_order: 92
tags:
    - Cybersecurity
    - End Point Management
    - Vulnerability
    - Cyber attack
    - IoT
    - Censys

date: 2022-06-16
guests:
    - Darren W Pulsipher
    - Matt Lembright

img: thumbnail.png
summary: "On this episode, Darren talks to Matt Lembright, Director of Federal Applications, Censys, about how Censys assesses the attack surface for internet-connected devices, allowing organizations to eliminate vulnerabilities."
---

{% include soundcloud.html id="edt92" title="#92 Protecting the Outer Walls of your Castle with Vulnerability Scans" %}

{% include youtube.html id="TzyCREPs7Wk" %}

---

Matt spent eight years as an intelligence officer with the army. In the latter part of his service, he helped build out the cyber mission forces as part of US Cyber Command. After finishing his service, he worked with Army Cyber and a few startups before coming to Censys.

A typical vulnerability assessment requires an organization to provide what they are interested in, say a block list of IPs for a credential vulnerability scan. Then those vulnerabilities are discovered and can be patched. A Censys scan can provide a broad and deep scan on the internet from some basic information such as a domain and a few IPs, discovering everything else the organization owns and continually monitoring for those same aggregations and correlations between the data set. If, for example, the marketing department stands up an exposed website that doesn’t have TLS, Censys will catch it.  Censys takes an external view to know what’s available to an attacker at any given time of day.

Even if, for example, someone deploys an application in a cloud, doesn’t put it on the domain, and uses obfuscation security, Censys will still detect it if it’s in a cloud environment the organization owns. Cloud connectors will discover new cloud instances that pop up. Some connective tissue, whether it’s WHOIS or DNS information, must correlate to some of those instances. Censys is continuing to get better at detecting these types of instances.

The analogy of a castle works well here. An organization does not just want to rely on what they can see internally with the cameras and sentries. They want a roving security patrol to catch threats before they even get to the castle walls. The patrol can observe the castle the way an attacker would. Censys patrols the internet from an outside perspective, seeing things the way a potential hacker would see them.

One tool that Censys is looking at is JARM from Salesforce, an active TLS fingerprinting tool.  When things are deployed that don’t match fingerprinting on a specific server, they will stand out as anomalies. It’s essential to look for architectures that should be in a particular configuration but are not.

An important question is how Censys can avoid helping bad players. First, the bad players are already seeing what Censys can see, perhaps not at that scale, so Censys is assisting organizations to even the playing field. External visibility at scale can help erase the vulnerabilities bad players can exploit. For example, Censys helped Ukraine identify vulnerabilities that the adversary could have used to shape the battlefield. Censys also has a good security team that will make tough calls about who they are comfortable doing business with and who can gain access.

Censys offers more to organizations than just all the data on exposure. Their attack surface management platform can identify end-of-life software. By fingerprinting that software, they can identify where it is and what hosts it is tied to. Then the organization can prioritize removing that vulnerability.

Another benefit is proactivity and rapid response. For example, when the Log4j situation dropped, Censys researchers immediately began cataloging everything they could that had Log4j dependency and alerted clients they were at risk.

In addition, if an organization is worried about a particular CVE, they can use the Censys platform to search for it to see if it is a concern.

Although Censys can be integrated with other systems for internal scans as well, and their engineering teams can problem-solve for specific needs, no one system can meet all security needs or meet many of them correctly. You wouldn’t want to war with one weapon, and fighting cyber attacks is similar.  Censys is focused on finding those cracks in the outside wall of the castle.

Censys has found over 215 million externally exposed ipv4 hosts, 21.8 million ipv6 hosts, 559 million virtual hosts, and over 2 billion services, plus all certificates. The scope and depth of finding your attack surfaces are vast, but Censys has the technology to filter through it all and find your vulnerabilities. 



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
