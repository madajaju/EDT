---
layout: posts
title: "Digital Strategy and Data Architecture"
number: 24
permalink: episode-EDT24
has_children: false
parent: Episodes
nav_order: 24
tags:
    - Data Management
    - Data Architecture
    - AIOps
    - SecOps
    - DevOps

date: 2020-10-07
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel outlines digital strategy and architecture to effectively transform your organization. He explains how organizational, procedural, and technological elements must be balanced to work efficiently toward a common, ideal architecture to support a unified vision."
---

{% include soundcloud.html id="edt24" title="#24 Digital Strategy and Data Architecture" %}

{% include youtube.html id="fA8CWzRDZHM" %}

---

Having a plan for your organization’s digital transformation is critical to avoid getting lost in the maze of just going with the latest and greatest technologies and processes. This haphazard strategy will cause your digital transformation to fall flat. A plan, or a roadmap, from where your organization is currently to where you want to end up is the most important part of an effective transformation.

The three key elements that must be coordinated and balanced in your plan are organizational, procedural, and technological.

## Organizational Divisions

To understand organizational change, let’s first look at the common groups in most organizations.

### Development
This group is your day team; they are developing new products. The processes of the development team are well known and mature. They focus on development work, testing, and pushing the product into production. Almost every team will uses some kind of Agile or rapid iteration technique.

### IT
The goal of the IT team is to optimize infrastructure for cost and efficiency. They make sure the infrastructure is reliable and has built-in control and security. Primarily, they look at compute, storage, network, compliance, and cost.

### Security
The role of security has become increasingly important in the past few years, more so recently with employees working at home because of COVID-19. The security team primarily focuses on securing intellectual property, data, and infrastructure. Common tools are identity management, protection, detection, and remediation. Understanding how these tools work at a high level is important to your organizational change.

### Data 
This newest group, which previously may have been a statistician or mathematician who did some data mining, is now taking hold with the advent of chief data officers and the organizations built around them. They focus on analyzing, categorizing, and delivering real value from your data. Whether your organization is in manufacturing or services, or whether you’re trying to capture new customers or save money, there are many areas where data scientists can provide value.

## Bringing the Groups Together 

To make an effective digital change, all of these groups need to have a mutual understanding of what each brings to the table and one unified vision. You don’t want your data scientists exploring data that has no value to development or IT. You don’t want your security team locking everything down so tight that the development team can’t get their work done. Among the groups, there must be  common strategies, processes, and architectures.

Although common goals and outcomes are the ideal, there are obstacles to overcome. One of the hardest areas in organizational change is communication breakdown at the boundaries. Some organizations have created new groups to smooth the edges between the groups. For example, between security and IT, there could be a Sec Ops or Sec Dev Ops where they automate the policies and procedures that come out of the security team.  Another example would be a Data Dev team, who are developers who work with the data scientists to provide more repeatable processes through application development or integration of tools and applications.  Common architectures in common tool sets that all the groups can rely on make the process and changes much easier.

## The Perfect System 

What would a common architecture look like? A utopian version doesn’t exist today, but we can look at the elements and perhaps build something toward this ideal.

Self-service is a must. For example, if a data scientist needs more storage for data, they wouldn’t have to call IT and fill out a bunch of forms etc…, but instead use a time-saving self-service portal that would deliver the storage. Of course, the portal would be policy-driven, so the security team can rest assured that the confidential data the scientist drops into a drive is encrypted and access control is automatic.

Another ideal feature would be that the system is self-healing and data-driven. If machines became infected, for example, they would automatically be quarantined and the workloads would migrate to another area in the data center or into the public cloud.  Again, IT would have to establish policy and monitor processes, but the system would be mostly automatic. The system should not just be automatic, but intelligent, learning from experience and becoming more efficient.

We can get some elements of this utopian system today with off-the-shelf products by integrating them and getting everyone to use them. Let’s look at what each organization would want from this architecture.

## IT Architecture (Multi-Hybrid Cloud) 

IT is responsible for the underlying infrastructure and data information in the organization. If IT could establish a rock-solid foundation, everyone else could build on top of it. IT needs to move to a multi-hybrid cloud solution so that infrastructure can be easily orchestrated as needed, with flexibility based on policy. There is always a trade-off between cost and reliability, but you have options. A software-defined infrastructure layer easily allows orchestration of compute, storage, network, security, and now even new things like memory and accelerators. The multi-hybrid cloud foundation is a key aspect of your common architecture.

## Security Architecture 

The security team would add to this system and make it as automated as possible.  The first would be the identity aspect. This means that not only can you identify users, but infrastructure, applications, and services so everything has an identity. Those identities can be tied to specific authorizations and accesses to make sure everything is authenticated. On the security side, you want encryption and remediation when there are problems. Ideally, you could establish a root of trust so everything in the ecosystem, both in applications and services and all the way down to firmware and BIOS in the machines, are trusted.

## Development Architecture 

Developers may worry that all of this process may slow down development, so it needs to happen almost automatically.  Most developers now are focusing on reusable components that can be tested so they know they are safe. They do this through ecosystems on containers such as Kubernetes, Docker, or Mesos. Security can be injected into the development lifecycle at the deployment step before successfully moving into production. On top of the service layer is an application layer where developers can take advantage of workflows. These workflows can be development workflows like CI/CD or business workflows through automation tools like Robotic Process Automation. Having both the service layer and the application layer are key elements in this utopian architecture.

## Data Architecture 

With data scattered across several ecosystems, public clouds, and even out on the edge, we need a better way of managing data for the data scientists and application developers. Extracting data away from storage is one of the important elements here. With this structure, you can orchestrate data across the vast infrastructure and only tie that data to the applications and services where it is needed. The data could be abstracted to land on the infrastructure at the best place during that period of time, whether it’s out on the edge, in the data center, or processed in several different places for application replicas. Security would be required to lock down the data, since the data is the reason for the infrastructure in the first place. Some start-up companies are now in this space, to take control of the data management layer.

This utopian architecture, with its myriad of moving parts, is called the Edgemere architecture. We are trying to see how all of these parts fit together to help organizations accelerate their digital transformation. We need to understand what each organization needs, what their use cases are, and what commonalities are among the groups to come up with an architecture the whole organization can work in.

Your organization’s part is to break down the barriers between the groups, develop a common vision of where you want to be organizationally, procedurally, and architecturally, and develop a roadmap on how to get there. 



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
