---
layout: posts
title: "Modern Data Governance"
number: 70
permalink: episode-EDT70
has_children: false
parent: Episodes
nav_order: 70
tags:
    - Data Governance
    - Immuta
    - Cybersecurity
    - Data Management

date: 2021-11-25
guests:
    - Darren W Pulsipher
    - Matthew Carroll

img: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Intel, discusses the reality and future of modern data governance with Matthew Carroll, CEO of Immuta. "
---

{% include soundcloud.html id="edt70" title="#70 Modern Data Governance" %}

{% include youtube.html id="Y-mBQoKQvHM" %}

---

As organizations migrate to the cloud, the way we think about data and the way we think about using data is completely changing; in the past five or six years, the whole infrastructure layer has changed. The necessary performance, scale, rules, and number of users who want to combine data have increased exponentially. To manage that at scale is not trivial, and that’s where Immuta comes in.

Over time, the industry has re-thought the paradigm of warehousing data. Previously, each data team would build data products in a silo, then deliver to a business unit. The business unit would have their appropriate data that delivered a quality service to them. Now, all of a sudden, we want anyone to be able to combine data across the enterprise: business analysts, data scientists, data engineers, etc. The number of users has changed, and it’s not about search applications; it’s about transform and data pipelines.

That is a difference that requires a different quality of service, time, and level of sophistication that never existed before.  It becomes even more complex when you add in privacy laws, data classification, and the ever-changing rules and regulations.

What Immuta is trying to do is make it possible for any user to potentially combine any dataset, internal or external to the organization to get some insight. It’s all about scale. Policy needs to be separated from platform to scale policy for all these new users and all the different combinations of data. Security, privacy, and governance are great, but if you can’t perform, no one’s happy.

One lesson Immuta learned early on is that proxy won’t work. It is like trying to move petabytes of data through a straw: they become the bottleneck. It’s easy to blame the middleware whenever there is a problem because they are always a bottleneck since they are between the tools and the data. This is a classic problem of middleware.

The second problem with that design paradigm is that with classic data virtualization, it worked because there was a clear set of data. When there are petabytes of data, however, the give-me-everything-and-we’ll-figure-it-out approach breaks down very quickly because of the sheer size of the data as well as all the rules and policies around it.

In normal virtualization, you have to natively embed into the cloud compute infrastructure in Snowflake, in Synapse, etc. Instead of putting this abstraction layer on top of these different tools, the abstraction layer is on the policy side.

The policy is only as good as the ability to audit it. It’s like a chain of evidence. The key is that you can prove that this user complied or did not comply across the computing infrastructure. With modern data governance, it is scaling policy within and it is unifying audits because of the level of complexity of many people are doing so many things with the data. The audit of the policy must be dramatically simplified or it’s impossible to determine compliance.

There are three types of policy to consider: operational, regulatory, and contractual. An example of how unwieldy all of this can become is to look at a company such as Cummins. If they modernize in the cloud, they have to consider regulations for every market. For one of their engines, what if they have to write a custom rule for each country they are in, but also for every country they are not in, because those countries shouldn’t be able to see it? That doesn’t scale when you’re talking about tens of thousands of data sources for the schemas, which are constantly changing. There are petabytes of telemetry from these engines.

What you would want to write is that you can only see the data for the country where you reside once, and then it applies everywhere. But that’s not the way it’s done. So they would be writing something like 700 policies for a data object, when it should be only one. Keeping up with all the changing policies and regulations for each data source would be next to impossible. You would be out of compliance all the time.

It’s never been easier to globalize a company than today, and Immuta customers expect them to be able to run infrastructure globally across any cloud. They should be able to move their data to any cloud and be in full compliance.

Immuta applies rules to the data through tags versus using the raw data because each domain has their own jargon about how they classify and talk about their data. So they have generically started classifying and tagging in a way to apply general concept templates, such as for HIPAA. These templates, however, are not yet foolproof, and there is a long way to go.

Matt’s vision as CEO of Immuta is to get to a state where domains can share their policies. For example, in healthcare, there is a good reason that Moderna and Pfizer would want to work together. There could be an agreement on how to handle real world data controls with academia. So if there were a consistent policy that could be shared and crowdsourced in a concept policy cloud, that would be the right thing to do.


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
