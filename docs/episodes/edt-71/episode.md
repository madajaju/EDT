---
layout: posts
title: "Modern Data Governance"
number: 71
permalink: episode-EDT71
has_children: false
parent: Episodes
nav_order: 71
tags:
    - Data Governance
    - Data Management
    - Immuta
    - Data Access
    - Identity Management
    - CEO

date: 2021-12-02
guests:
    - Darren W Pulsipher
    - Matthew Carroll

img: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect at Intel, continues his in depth discussion about the reality and future of modern data governance with Matthew Carroll, the CEO of Immuta. In this episode, they discuss Data Classification, Policies and Governance."
---

{% include soundcloud.html id="edt71" title="#71 Modern Data Governance" %}

{% include youtube.html id="Qv8Y32qjaGA" %}

---

In modern data governance, the first premise is that you have to separate policy from platform.

The second is that there can be no ontology.  If anyone tries to create a super schema of everything, it’s impossible, but you need a schema to apply policy. So if a user wants to join two columns, you have to have a new policy. Sensitive data must be discovered, both through direct and indirect identifiers. Indirect identifiers are more difficult, and techniques must be applied to mitigate the risk of link attacks.

The third premise is the introduction of a series of privacy enhancing techniques such as masking, redaction, authorization, etc.

These tools are automated as part of modern data governance. A parallel example is how you used to have to be a wizard to remove red eye in a photo. Now, you click on a button and the red eye is gone. It’s the same thing in privacy. We need that easy button to automatically find a potentially indirect identifier where there’s greater than very low risk of re-identification.

Besides privacy, there is a myriad of other things with data that should be automated before classification. Although Immuta does not delve into data transformation and those data flows, they provide an API and command-line interface. Engineers who are building these pipelines can do their thing, and Immuta will tell them the rules, and the rules update can be part of the pipeline. They want to be a conduit to that layer.

There are some new roles in this arena such as data steward and data governance engineer, which are segregated from the data engineer. And then data users are really three separate users with three separate needs.

First, there are data scientists who have specialized skills and need data in a specific way. Sometimes they need a specific tools and a specific compute environment somewhere in the world to accomplish their mission.

On the other hand, data engineers and analytic engineers, one building the pipelines and one sustaining the pipelines, need quick access to an emergent when something breaks. They feed it into a pipeline and deliver it to someone and check to make sure it’s up to date.

Finally, there are the governors who are trying to keep up with regulations.

These users all have very different views and needs around governance. When applying a new governance, the most important thing is to treat these groups as separate stakeholders.

If you think of all of these roles in a binary way, as data engineers, what ends up happening is a lot of meetings, so it’s impossible to scale. We need to create a symbiotic relationship among data operations, data science, data analytics, and governance. An example model is Salesforce or ServiceNow, where there is a whole workflow from start to finish and no meetings have to happen. This would be real data ops.

Immuta has, philosophically, an attribute-based approach rather than a role-based approach. The problem with a role-based approach is that you get bloat as you inevitably keep adding roles. One pharmaceutical organization, for example, had over 800,000 roles because roles can never be deleted because of the need to reproduce drug trials. Role bloat can become a scale problem quickly.

Attribute-based access is the key to counter this. Rather than constantly adding roles, users have specific and consistent attributes. For example, an attribute of a user could be that they are tagged so they can only see their own state. With role-based access, every state, whether they can see it or not,  would have to be written in. This modern identity management is very scalable. Attribute access simplifies the number of policies that need to be written and helps with performance.

Modern global regulations such as GDPR, however, also require purpose. This is where attribute access becomes important: what purposes can each person operate under? Under a EULA, data must be processed by users only for the stated reason. If not, there needs to be a risk analysis in flight before the data is operationally used for production.

Right now, we are at the beginning of modern data governance. Currently, users make a one-time binary decision on the data, either consent or no consent. The future is somewhere in the middle: limited consent. For example, if a person gives their genomic data to a company such as ancestry.com, down the road, what does that mean for their child? The child did not give consent for their genetic material to be handed over to be possibly examined by, say, a health insurance company to determine risk. In modern data governance, Matt sees consumers providing limited consent, such as allowing a company to only analyze DNA for ancestry and nothing else.

The future has to be about consent and purpose-based access because ultimately, the derivative data drives insights, as developing machine learning embeds data in the algorithms.

To learn more about Immuta and building a data governance program, go to Immuta.com 


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
