---
layout: posts
title: "Distance Teaching and Learning"
number: 11
permalink: episode-EDT11
has_children: false
parent: Episodes
nav_order: 11
tags:
    - RemoteLearning
    - TeleLearning

date: 2020-08-12
guests:
    - Darren W Pulsipher
    - Erin Moseley
    - Grant Kelly

img: thumbnail.png
summary: "In this episode, Erin Moseley, Sr. Account Exec for Education at Intel, and Grant Kelly, Solution Architect for Education at Intel, join Darren to talk about the challenges of distance learning and teaching and the overwhelming changes that school districts, teachers, parents, and students are absorbing during the Covid-19 pandemic. Find out how students and teachers are connecting with new technologies and ways of learning."
---

{% include soundcloud.html id="edt11" title="#11 Distance Teaching and Learning" %}

{% include youtube.html id="b-PT-b0W4Q4" %}

---

## Emerging Considerations<h2>

Teachers, staff, parents, and students are all facing different challenges in the sudden switch to distance learning. On the IT side for school districts, there is a host of emerging considerations. What do we do with the scenario of bring your own device (BYOD) coming from zero trust networks? How do we protect privacy and manage security with all the various new modes of communication among the teachers, staff, parents, and students? How do we maintain a streamlined, managed classroom experience? How do we offer support when a traditional helpdesk structure does not exist? In addition, we can’t forget that there is an important social aspect that must drive a seamless experience. A third grader being distracted by technical issues when they need to connect with teachers and peers will have a diminished distance learning experience.

## Systems Services, and Platforms for Education<h2>

There has always been complexity with all the different layers of services and platforms, for example, the productivity suite with G Suite and Office 365. The question now is what can we do with learning management systems in this layered approach in the integration of the student information system? We have to look at how we are leveraging our capabilities in regard to scalability. We must consider different infrastructure as a service (IAAS) and platform-as a service (PAAS) solutions, storage services, privacy and security, and, of course, the underlying platforms that drive all of it.

Previously, conferencing and collaboration tools had limited use, perhaps to bring in a guest speaker, for example. Now, however, they are being heavily used as primary tools and have added to the complexity of the system.

### Service Hosting Options<h3>

There are two main modes that are used to access services: device as a portal to services (software, infrastructure, or platform), and device as part of the internal network. Previously, most fell under the latter category, where there are limited concerns about things such as patching and policy compliance because devices are constantly connected to internal school sites regardless of whether they are BYOD or district-owned assets. Now, with the different types of connectivity, we need to be concerned about bandwidth scalability and how we implement it.

### Device as a Portal to Services<h3>

Platforms such as G Suite, Office 365, and those for conferencing and collaboration are a concern in that they create dependency on a third party. School districts don’t have control over security, privacy, and performance. It’s important to recognize that the connection to these cloud services connect back to the internal host, whether a private cloud or on-prem data center, that has underlying services of identity management, student information systems, possible content filtering, etc. The benefits, however, are decreased inbound traffic to the data center and inherent scalability and manageability.

### Device as Part of the Network/Private Cloud<h3>

Implementing a virtual private network (VPN) is a new idea for most school districts. Enterprise has been using VPNs for some time, and school districts may have to follow suit to meet the new needs of distance learning.  A few downsides to a VPN are network congestion, scalability, and traffic from zero trust networks. The main benefit is that it functions as an extension of the internal network, so security management and traffic encryption are extended to the VPN clients. Accessibility to all the services needed internally is another great benefit.


## Emerging Bottlenecks<h2>

Bottlenecks look different for distance learning. For enterprise, when the workforce went virtual, an expected ratio was about 10% VPN load. For education, that number is going to be significantly higher, creating a possible VPN bottleneck. Hosted services scalability is another area of consideration. Even if services sit in a public cloud, they connect back to a private cloud or on-prem data center for things like SSO, student information, traffic, and even content filtering. The dedicated internet access bandwidth, as well as how the bandwidth handoff in the data center is handled, are important considerations.

Access to a help desk component must also be scalable to prevent bottlenecks.

The foremost concern of school districts currently, however, is getting all of their students access. For some students, there’s a bottleneck just getting on the internet at home. When this problem is added to all the different layers, the emerging bottlenecks become very complex.

To combat these potential issues, school districts must take the time and resources necessary to create a solid architecture that will be resilient rather than constructing a hasty spaghetti mess.


### Scalability<h3>

Historically, school districts have scaled up in the data center and scaled out some of those services to the school sites. So the architecture generally exists in terms of accommodating the aggregation of faculty, staff, and students for things like authentication, patch management, software distribution, etc. Now that the scale-out is handled in the virtual classroom, it brings us back toward scaling up services in the datacenter.

### Finding the Balance<h3>

Previously, only the two factors of on-prem in the data center central office and the LAN links to the school sites were in play. Now there is the additional factor of accommodating all of the virtual classrooms, meaning each student’s and teacher’s living room. How do we accommodate that? It comes down to the primary concept of finding the balance of what you need for your school district. Each district is different in size and technology literacy, and there are a lot of moving parts.

### Addressing Bottlenecks<h3>

What can Intel do to help address these bottlenecks that we have identified?

Endpoint management and endpoint security is where the IT help desk comes in. We are looking at ways to be able to offer support remotely rather than with regular visits to school sites.

We can look at the data center and infrastructure and develop a strategy that will allow us to scale software defined networking and infrastructure. In addition, we can also integrate some infrastructure-as-a-service cloud bursting, all while taking into consideration the traffic patterns.

## Intel Components to Address Bottlenecks<h2>

Intel can help in three major categories: compute, storage, and network. When we look at bolstering software-defined infrastructure and the important considerations, it revolves around that computer with Intel processors, storage products, and network capabilities. Rather than being tied to and limited by physical interfaces and appliances, software-defined infrastructure can scale and bring in other compute, storage, and network resources. No one is certain what the landscape will be when we return to school, and this software-defined infrastructure is dynamic and will lend the most flexibility.

There are many options for school districts to construct a viable, secure environment for distance learning. Although we touched on the topics of privacy and security threats and solutions in this episode, next time we will take a deep dive into these important topics.


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
