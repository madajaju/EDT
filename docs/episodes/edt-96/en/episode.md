---
layout: posts
title: "Leveraging Virtual Datacenters with Verge.io"
number: 96
permalink: episode-EDT96-en
has_children: false
lang: en
parent: Episodes
grand_parent: English
nav_order: 96
tags:
    - privatecloud
    - cloud
    - compute
    - technology
    - sdi
    - virtualdatacenter
    - vergeio

date: Wed Jul 20 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Aaron Reid
    - Chris Lehman

img: thumbnail.png
image: thumbnail.png
summary: "Intel’s Darren Pulsipher, Chief Solutions Architect, and https://www.verge.io/ Aaron Reid, Principal Systems Engineer, and Chris Lehman, Senior VP of Sales, discuss use cases for Verge.io’s virtual data center software."
video: "https://youtu.be/url"
description: "Intel’s Darren Pulsipher, Chief Solutions Architect, and https://www.verge.io/ Aaron Reid, Principal Systems Engineer, and Chris Lehman, Senior VP of Sales, discuss use cases for Verge.io’s virtual data center software."
---

<div>
{% include transistor.html id="dd535cf2" title="#96 Leveraging Virtual Datacenters with Verge.io" %}

{% include youtube.html id="url" %}
</div>

---

Aaron has been in IT for over 20 years. He is a pre-sales engineer, meaning he talks to customers about the value and features of Verge.io and helps them define their requirements.

Chris is the head of sales at Verge.io with 25 years of experience in tech software companies. He describes Verge.io as having a maniacal focus on customer satisfaction and success with the software.

The term “virtual data center” is for simplicity. The platform is multi-tenant, so there are standalone nested tenants with all the required resources inside of a data center, from CPU to memory to storage to networking, and have it isolated. Still, at the same time, you can build those on demand. Just like you can create a VM on demand, often with a template, you can do the same thing with a tenant where it encapsulates everything in the virtual data center. You can build through a recipe engine or from scratch. You can easily clone or take a snapshot of one of those tenants.

These virtual data centers can be large and complex. Verge.io’s largest customer runs over 60 nodes and multiple tenants in their environment. The only restrictions are what’s built in the backend Verge.io cluster. For example, say you have four terabytes of memory and 100 terabytes of storage, and 64 cores in your CPU. You could assign all those resources to that tenant, split it however you want, in half or thirds, and build the tenants that way.

If, for example, you allocated some nodes to development, some to test, and the rest to production, they would be different tenants, and you can snapshot between them and move into production. In this case, you can even have multiple production environments with blue-green updates.

Many of Verge.io’s customers are managed, service providers. They use multi-tenancy for their end-user customers and, with that, dedicate zero trust secure environments. Customers can have their cloud environment, and they can provision virtual workloads as needed.

There are also significant use cases for enterprise-type IT customers that want, for example, blue-green dev-test environments or where they may have different environments with different security compliance requirements such as SOX or HIPAA. Verge.io has several large educational institution customers who are doing compliant research. They certify their cluster a single time; then, they can deliver a compliant research environment to one of their researchers in under an hour. Previously, it could take months to get up and running in a compliant environment.

For updates, although users must use tools at the application level or inside VM workloads, the environment “recipe” for things such as firewall rules or configuration settings on how resources are mapped out to workloads can be seamlessly updated. You can also take a VM in a running environment with new compliance and move it over to a new environment.

Verge.io is also helpful for security. One of the largest quant firms in Europe is a good security use case. They take a picture of their entire environment and then run red and blue team drills against that, looking for security vulnerabilities, checking patches, etc.

VDI can run in the environment. Verge.io partners with a company for VDI support. Verge.io controls the resources, the CPU, and the memory. They also support GPU and GPU passthrough and physical GPU. This is a significant use case for some customers, especially in engineering or oil and gas workloads. The virtual GPU makes for favorable economics because the cost is spread among several users.

A perfect fit for Verge.io is edge use cases. A typical example is the point of sale. If a retail customer has a hundred stores, they might need two or three VM applications of VMs in each store. Since Verge.io has a small hardware footprint, once you have at least two servers, you can put that in the edge case data center and build those VMs. And then, with the snapshot and replications features, those configurations can copy and paste across all the different environments. You can update the latest configurations across all of them, not just OS patches but also firewall rules.

An exciting future space for Verge.io is in automated driving systems because of the volume of data. Many vendors are testing the vehicles in remote sites and physically shipping the hard drives. Imagine if the data could be processed on-site, fully redundant with the compelling cost associated with it, then the data could be transported in a wide area versus a disk and a truck.

For more information on Verge.io, visit http://verge.io.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
