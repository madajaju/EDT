---
layout: posts
title: "Myths of Lift and Shift Cloud Migration"
number: 112
permalink: episode-EDT112-en
lang: en
nav_exclude: true
nav_order: 112
tags:
    - cybersecuritypolicies
    - cybersecurity
    - multicloud
    - zerotrust

date: Mon Nov 14 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - John Evans

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, and John Evans, Chief Technology Advisor, WWT, discuss five lift and shift cloud migration myths."
video: "https://youtu.be/url"
description: "Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, and John Evans, Chief Technology Advisor, WWT, discuss five lift and shift cloud migration myths."
---

<div>
{% include transistor.html id="cfd34037" title="#112 Myths of Lift and Shift Cloud Migration" %}

{% include youtube.html id="url" %}
</div>

---

John started his career in technology at the help desk at a principal defense contractor 20 years ago. As his career progressed, he got into cybersecurity and enterprise architecture. He worked as a contractor for the Defense Information Systems Agency (DISA), where he was the lead architect for the Department of Defense DISA cloud. Eventually, the state of Maryland brought him in to lead the digital transformation efforts for the state, including cloud migration. That migration was the largest ever done across state and local education.

After that, he transitioned to the state Chief Information Security Officer (CISO) position, overseeing high-level operations, security, and governance. He left government service and joined WWT about three years ago. He works primarily in state and local education, although he helps in other public sector areas.

## Myth One - Cloud is Cheaper

The cloud is not necessarily cheaper than an on-premise environment. Legacy applications were built for the on-prem environment, so there is no issue with auto-scaling. It is a  consumption-based model, and there are already sunk costs, such as the servers. Most products meant to help organizations move applications to the cloud don’t support auto-scaling, so when they are forced to the cloud, they now have to be max provisioned at all times, which doesn’t often translate into cost savings. Customers are likely paying more than they were for the same capabilities on-prem.

When Darren worked with the Canadian government, they moved an SAP instance into the cloud. It was max provisioned, running 24/7, and they blew through their budget in just six months. When they discovered this problem, they turned it on and off every day since the instance didn’t need to run 24/7. They saved a lot of money by reducing it to 14-16 hours a day.

Access must be available at all times in a department such as Health and Human Services, which is typically the largest in a state IT budget, but it is possible to bring it down to a minor instance during off hours to save money.

The Cloud Service Providers (CSP) now offer cloud-native services that are being fulfilled by a third-party application or OEM product that can provide a similar capability with cost savings.  This won’t work with everything, as some legacy applications are not developed to leverage some of the cloud-native applications. It would be best to be careful about getting locked into a specific cloud. If, for example, you use proprietary AWS services, it could be challenging to extricate an application and move to Azure and vice versa.

John advises organizations to ask if it makes sense to move into the cloud. It’s not a good reason to move to the cloud because you think you should. You might end up with elevated expenses and frustrating superiors and workers because the strategy was not thoroughly thought through.

## Myth Two - Cloud Erases Technical Debt

Moving into the cloud does not eliminate technical debt in almost any case. It exposes and accelerates the debt. You will find exposure points if you take something running for 30 years and move it into a new environment. The acceleration part is that you have a more technical debt to worry about now that it's exposed.

Technical debt means you have systems falling behind what they should be. For example, when John first went to work for Maryland, some systems were still running on green screens. It was easy for current employees to navigate but had a steep learning curve for new users. Although the system had been working for many years, the downside of this technical debt is the amount of training necessary and retaining employees. More recent generations coming into the workforce who are knowledgeable on the latest trends and developments don’t want to deal with legacy applications.

Technical debt also means security issues. If a legacy application has not been updated, you may not be able to apply patches for fear of breaking it. This creates security vulnerabilities you must accept until you get out of the technical debt cycle.

A common reaction in an organization is to bolt on a bit of extra code when necessary to accommodate, for example, a rule change from a state legislature. This does not fix a problem; instead, the system ends up with a lot of spaghetti code, making it impossible to recreate the system for an update. One of the concepts in the cloud is breaking up your system into modules or microservices, but the spaghetti code does not allow for this since you can’t just pull out a piece of it.

This makes organizations even more hesitant to modernize because they’ve been doing things the wrong way for all these years. When something does break and becomes the impetus for this change, it’s even more challenging.

Sometimes it might make sense to scrap the old system and start fresh. This is costly, and you must have the new system before you toss the old system. For some organizations, however,  such as states, which can get federal funding for departments such as Health and Human Services, it might be the best choice. In a situation like this, you can also figure out the benefit of reusability, such as templates and governance structures for other departments.

## Myth Three - Cloud is Secure

Moving into the cloud does not necessarily make securing applications easier, although you don’t have to worry about physical security or hypervisors, for example. Cloud providers have a shared responsibility model in various forms. You have to understand what you are responsible for with each provider and what they are responsible for. It doesn’t just change with the provider but also with what services you consume. This can make security more complex for your security teams because they must stay on top of all the different variations across providers and services.

## Myth Four - Cloud is Easy

Migration to the cloud is complex. It is, in fact, easier to run everything in your own data center, not connected to the internet. Security is easy this way, and cost models are simple. However, you can’t grow. You can’t provide services to your constituents or customers, and you can’t satisfy mission needs, among other issues. The world is complex, and migration to the cloud is complicated.

## Myth Five - A New Skillset is not Necessary.

A knowledge gap can also add to the pain points around that complexity. Software developers and other IT specialists must change how they think about computing in the cloud, especially surrounding security. For example, software developers shouldn’t be spinning up instances in the cloud wherever they want or downloading things from GitHub or other repositories, grabbing libraries to make things work. This opens up all the firewall rules because they may not pick correctly. Guardrails must be implemented when moving to the cloud, which requires change. Working in the cloud requires a different skill set and mindset. Most importantly, you must figure out better ways to manage security with sophisticated ransomware and cyber attacks.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
