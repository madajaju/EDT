---
layout: posts
title: "Fighting the Cyber Adversary by Securing your Software Supply Chain"
number: 91
permalink: episode-EDT91
has_children: false
parent: Episodes
nav_order: 91
tags:
    - Cybersecurity
    - DevSecOps
    - SBOM
    - Secure Supply Chain

date: 2022-06-09
guests:
    - Darren W Pulsipher
    - Eric Greenwald

img: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect, Intel, and Eric Greenwald, General Counsel of Finite State, talk about securing the software supply chain."
---

{% include soundcloud.html id="edt91" title="#91 Fighting the Cyber Adversary by Securing your Software Supply Chain" %}

{% include youtube.html id="zyIH533JhyM" %}

---

Darren and Eric Greenwald, General Counsel of Finite State, discuss securing the software supply chain in this episode.

Finite State focuses on finding vulnerabilities in firmware, most often software from third parties that may have already had existing vulnerabilities, before folding it into their device. Finite State focuses primarily on industrial IoT devices, medical devices, automobiles, and consumer electronics.

For seven years before joining Finite State, Eric worked as a lawyer in the private sector, focusing on security testing and identifying vulnerabilities for cybersecurity companies. Before that, he worked in government with cybersecurity and national security, for the FBI and CIA, and as chief counsel for the House Intelligence Committee. His government work culminated when he became the Senior Director for Cybersecurity on the National Security Council at the White House.

Eric believes part of the reason there is now an emphasis on securing the supply chain is that the threat has evolved. The increasingly complex nature of software, including that many components have vulnerabilities when they are first created and only discovered over time, makes it more difficult to find devices built through the software supply chain. In addition, recent high-profile attacks via a breach in the software supply chain such as SolarWinds have made people more aware of the danger.

In the SolarWinds attack, the perpetrator had patience, not immediately causing havoc but waiting a year while roaming through American computer networks, cultivating access and information. That patience is probably the most significant difference between a nation-state and a criminal attack. While sometimes patient criminal attacks are more focused on a financial return on investment, those behind a state attack are willing to take years to develop their intelligence access. With either, however, the attacks are becoming more sophisticated and are much better positioned to take devastating advantage of supply chain complexity.

To combat these attacks, new regulations are cropping up. The Biden administration issued executive order 14028 in May 2021, which has two main points: secure software development and software bill of materials (SBOM). The executive order is only directed at government procurement, but private industry is likely to follow.

The details and technical recommendations of secure software development are still being worked out. Still, part of it would be that software suppliers to the government would have to provide an SBOM. The first draft legislation for SBOMS came out in 2014, so the standards for producing them have become more mature and developed. An SBOM is essentially a list of software components that went into a software product, not so different than a list of ingredients on a food product. This offers transparency in the supply chain, which is essential to assess vulnerabilities or to be able to identify a vulnerability that is discovered at a later date.

An excellent example of this is what happened with Log4j. When that vulnerability was discovered, many companies had no idea if they had it in their stack. It wouldn’t be a magic wand, but an SBOM would allow companies to more easily discover if they have the problem software component in their system and act more quickly to implement a patch.

Arguments against publishing SBOMs are that they will provide a roadmap for attackers and give away proprietary information. While these are legitimate concerns and must be discussed, the Commerce Department and the Department of Homeland Security maintain a much more significant benefit to defenders having transparency than any advantage given to attackers. There are bipartisan bills in support SBOMs. There are ways to reduce the risk that SBOMs will fall into the wrong hands, such as secure or non-fungible contracts. The debates over these concerns will continue in the public sector, and more companies will adopt them.

This legislation is happening because the FDA has suggested that medical device manufacturers incorporate SBOMs as part of the review process, so SBOMs are gaining momentum from these manufacturers. The physical world is becoming more affected by software in medical devices, and embedded systems such as control systems for power plants, HVAC systems, airport controls, etc., so operational systems are at risk, with more significant consequences than business system attacks.

A difficulty for OT professionals is that many of the industrial components are older and have not necessarily been updated. Still, hackers are reluctant to connect to the internet and update because that’s how hackers get in. The best answer to this problem is to try and gain transparency of the components in the stack, scan the system and the devices that are part of the OT network, and do some reverse engineering and decompiling to understand the details. Essentially, you need to create your SBOM and assess where the vulnerabilities are.

This is the primary area of work for Finite State. They look at the systems and devices and do an analysis. They have a platform that automates the embedded code analysis, provides a read-out of the vulnerabilities and identifies and groups the highest priority vulnerabilities. Sometimes you can knock out a whole category of openness with a single fix. Creating the SBOM by itself, then, is not good enough. It must be tied into a risk management system to wade through and sort the many vulnerabilities. Finding the highest priority risks is a complex process, and Finite State can help security teams prioritize their actions to protect their systems. 



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
