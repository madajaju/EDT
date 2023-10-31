---
layout: posts
title: "Blocking and Tackling of Security"
number: 115
permalink: episode-EDT115-en
has_children: false
lang: en
parent: Episodes
grand_parent: English
nav_order: 115
tags:
    - zta
    - zerotrustarchitecture
    - cyberhygiene
    - cybersecurity
    - technology
    - process

date: Wed Nov 30 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - John Evans

img: thumbnail.png
image: thumbnail.png
summary: "In this episode, Darren talks about cybersecurity with returning guest John Evans, Chief Technology Advisor at World Wide Technology (WWT)."
video: "https://youtu.be/SPmsH6Ia6pM"
description: "In this episode, Darren talks about cybersecurity with returning guest John Evans, Chief Technology Advisor at World Wide Technology (WWT)."
---

<div>
{% include transistor.html id="4c1b2203" title="#115 Blocking and Tackling of Security" %}

{% include youtube.html id="SPmsH6Ia6pM" %}
</div>

---

Foundational to all other cyber security is basic cyber hygiene. Many companies need to do these basics. This is evidenced by recent news headlines showing an uptick in attacks like denial of service attacks which should be easy to prevent.

From his experience working with the state community, John believes most attacks follow a typical kill chain. Most attacks hitting state and local governments result from exposed network protocols or email phishing. These are attractive entry points for hackers, and once they are in, bad patching practices are a typical culprit that allows them to gain a foothold and move laterally. That, combined with weak password policies or weak enforcement of password policies and an inability to recover, can lead to disaster.

In a well-publicized ransomware incident in 2019, the affected organization assumed that since they had the same amount of data in their production and backup environments, they were safe. But they had never tested their backups or recovery capabilities, which turned out to be poor. Basic cyber hygiene could have prevented this incident.

There are four essential basics that every organization should focus on. First, they must repeatedly train people to avoid phishing scams. Training might seem repetitive or mundane, but people falling for these schemes is a significant weakness in an organization. Hopefully, in the not-too-distant future, passwords will no longer be necessary.

Second, they must configure firewalls appropriately; just because RTP or network protocol ports are closed doesn’t mean there isn’t an open port in a less prominent spot. Security by obscurity doesn’t work.

Third, they must avoid bad patching policies, both with the client and the server, in the data centers and out at the edge. Many organizations are in technical debt and can’t update their old systems, so they accept the vulnerabilities and risk because they don’t want to invest in an update.

Fourth, they must have the ability to recover. Just because you know you can back up your data, can you use and recover with the backup? Testing is essential.

These four basics, along with a few others, are enough to stop almost all attacks coming into organizations that aren’t regular targets. That model doesn’t hold with organizations hit with nation-state attacks; they are doing all these things already and need additional security measures.

A consideration for many organizations is compliance versus risk. For some organizations to be compliant, they need to upgrade old machines, applications, and processes, which involves a significant cost. For organizations with a system that can’t be patched, it could take a risk-based approach that if something happens to the system, it would cost less than what it costs to upgrade the system. Of course, the secure thing to do would be upgrading to compliance, but most people think the risk-based approach is more secure. A small business could get away with this approach, but government organizations, for example, have regulatory compliance.

There are two reasons an organization might choose compliance other than a mandate. First, it’s an easy button for many organizations that don’t understand how to measure or prioritize risk. Compliance is a generalized framework to fall back on. It is not one-size-fits-all, however, because someone else is prioritizing risk in a generalized way.  Second, if something terrible happens and you have to, for example, explain it to your board of directors, you can say that you followed accepted standards.

Compliance is a bit of a crutch mentality because you don’t have to do all the risk evaluations and figure out what needs to be done. But, for example, a small municipality without a CISO could direct a sysadmin to use a compliance framework as a good starting point. If there is no CISO on hand, there is also the option of a part-time virtual CISO for guidance. John does this for clients, which is a viable path to better security.

The concept of zero trust also looks at a level of assurance versus risk. You need to understand the risk of granting someone access to a particular system or piece of data and then have a commensurate assurance that the person is whom they say they are. The heart of zero trust is a high level of security that mitigates risk.

Zero trust does not mean everything will be locked down and slow all processes. If, for example, someone wants to get in and see rainfall levels, you don’t need a high level of assurance that the person is verified. Still, if someone wants to access your organization’s crown jewels, there must be additional controls to verify identity.

Matching the level of assurance with the level of risk is challenging; it requires decision-point architecture. In the example of the risk it has in accessing a piece of data, an organization needs to know what and categorize it based on risk. For a mature organization, this can be difficult. John knows of one federal government organization that spent over two years ensuring its data was identified, classified, and tagged correctly before moving on to any decision-point type of architecture.

Identity and data are the two starting points for zero trust. In addition, it makes sense to avoid trying and doing everything at once. Starting with a piece of an organization might make the most sense, scaling it out through the rest of the organization over time.

Digital identity is becoming more sophisticated. John believes our transactions in the future will be primarily based on a zero-trust type of approach. For example, if he wants to transfer $10,000 out of his bank into an offshore account, the bank should make sure it is him and treat that transaction as if someone is trying to access a very sensitive, high-risk piece of information. If he goes to the store to buy a dollar cup of coffee, that level of assurance that it’s him purchasing the coffee is unnecessary. Many of these zero-trust principles will make their way into our everyday lives.

User behavioral analytics will also come into play. Just as a credit card company will raise a flag for unusual purchases, for example, if a system knows that John types 20 words per minute, and then all of a sudden, he’s typing 100 words per minute and trying to access sensitive information, there’s a red flag.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
