---
layout: posts
title: "An Argument for Multi-Hybrid Cloud"
number: 22
permalink: episode-EDT22
has_children: false
parent: Episodes
nav_order: 22
tags:

date: 2020-09-23
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "Darren Pulsipher describes why a Multi-Hybrid Cloud Architect may already be in your Data Center. Most organizations already all of the ingredients. They just need to know how they fit together."
---

{% include soundcloud.html id="edt22" title="#22 An Argument for Multi-Hybrid Cloud" %}

{% include youtube.html id="1cISpr_FNFM" %}

---

## Current Cloud environment
Over the last five years, there has been a fundamental shift in the IT environment. The continual growth of Public Cloud and the emergence of Private cloud options has left many CIO(s) and IT departments playing catchup. In the competitive market of today, many development teams need to move faster than most IT departments can deliver. Development team have found Public Clouds like AWS, GCE, and Azure a viable option for the old style “under the desk” “cottage IT”. The public cloud vendors have made “spinning up” new infrastructure easy and fast. No more waiting around for several levels of technical and business approvals, physical space in the data center, and vendor supply problems. Now in a matter of minutes a development team can have all the infrastructure they need for their new project.

Before the Public Cloud CIO(s) could easily “walk around” the cubes and count the number of “cottage IT” machines where running under peoples desks. With the physical machines no longer visible to the IT departments, identifying teams and their project’s infrastructures is impossible. Many public cloud have given organizations the ability to consolidate accounting from all of the accounts for specific domains, but visibility into what is running and who is working on the infrastructure is still somewhat of a “snipe hunt”. Many times these “rouge” projects become visible when projects are productized and need to be put into a company secured infrastructure. Security, privacy and regulatory policies can make “productization” of projects near impossible. Especially, if developers have tightly coupled their applications to Cloud infrastructure.

Forward thinking IT departments are doing their best to capture “cottage IT” by working with Public Clouds and ISVs to put in a “Company portals” to the Clouds. Putting a pass-thru portal in place is a good start to capturing projects using infrastructure, but many organizations find just a portal is leaving development teams wanting more. Over the last couple of years I have been working with many of these organizations to identify use cases, architectures, and technologies to help develop these augmented portals which we called “Hybrid Multi-Clouds” (MHC). Typically, three major technologies are integrated together to build these MHCs. Cloud Management Platforms (CMP), Automation Frameworks, and Platform as a Service tools (PaaS).
 
## Cloud Management Platform (CMP)

Cloud Management Platforms primary responsibility is managing multiple heterogeneous cloud both public and private. Giving end users the ability to manage multiple clouds and their infrastructure from one common pane of glass.  CMPs are typically opinionated with Cloud Administrators in mind. Although the Cloud Management Platform tools primary focus is managing multiple cloud, many tools have added features from the PAAS and Automation Frameworks or at minimum have a plugin architecture to support it.

### Use Cases covered

* Managing Public Clouds
* Managing Private Clouds
* Managing Cloud identities
* Managing Infrastructure across multiple clouds.

## Automation Frameworks

Automation Frameworks primary responsibility is to automate the deployment, management and upgrading software stacks on infrastructure. Automation Frameworks came out of the DevOps community and are typically focused on repeatable processes. Many of these tools include scripting languages that i DevOps engineers to repeatability manage and configure software and services. Many DevOps teams are well versed in these tools.

### Use Cases Covered

* Deploy Software on Infrastructure
* Manage Software on Infrastructure
* Upgrade Software and Services

## Platform as a Service (PAAS)

Platform as a Service is primarily responsible for giving a single portal to re-use platforms and deploy them onto Infrastructure. PaaS tools are typically highly opinionated with the Developer in mind. Which can lead to inflexible infrastructure configurations. Many of these tools have a web portal that give developers the ability to select services and deploy them in the infrastructure. 

### Use Cases Covered

* Deploy/Manage Services/Applications
* Manage Service Catalog
* Develop new Services/Applications

## Convergence creates Hybrid Multi-Cloud (MHC)

Because not one tool set has all of the use cases they need to manage clouds, applications, infrastructure and services, teams spend several “man years” installing, configuring, and integrating these three tool sets together. This has led to an emergence in technologies that integrate these tools including new product offerings, and new features in currently available products. 

Many CMP products are including PaaS and Automation Frameworks into their solutions. PaaS tools are now managing multiple clouds. Automation Frameworks are beginning to offer web portals and connectivity to multiple clouds. Many of the tools are moving to the Hybrid Multi-Cloud vision. When looking at which tool(s) to use it is important to remember the roots of the tool. 

## Deploying a solution

The Hybrid Multi-Cloud ecosystem is still fairly new and still requires some heavy integrations between the tools. There are some tools that are starting to deliver complete out of the box solutions, but still with their particular vision of the world. Because the ecosystem is nascent there are many players and choices. Time will tell who will win this space. For now, it will be interesting to watch the tools converge and consolidate while the features mature.


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
