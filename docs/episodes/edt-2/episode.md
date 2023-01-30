---
layout: posts
title: "Follow the Bit"
number: 2
permalink: episode-EDT2
has_children: false
parent: Episodes
nav_order: 2
tags:
    - IoT
    - DoD
    - Data Management
    - CyberSecurity

date: 2020-06-18
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "In this episode, Darren interviews Greg Clifton, Director of Department of Defense (DOD) and Intelligence for Intel Corp. They discuss the challenges of data management in a complex system that spans multiple clouds, enterprise data centers, regional data centers, and tactical edge. Listen to Darren and Greg follow a bit of data from its collection and journey through this ecosystem to the production of actionable information for analysts and warfighters. Listen to Darren and Greg discuss some of the obstacles in this large, circular environment and solutions to help get actionable information to analysts and back to warfighters."
---

{% include soundcloud.html id="edt2" title="#2 Follow the Bit" %}

{% include youtube.html id="N6WTErcBjrM" %}

---


## Internet of Things is the Start

The widespread implementation of the Internet of Things (IoT) has been taking longer than the industry expected. Many blame the delays in the adoption and roll-out of 5G across the world, but there is another problem that has slowed down the deployment of robust IoT systems: management of complexity. As data moves through the system from the edge, aggregated edge, network, data center, and cloud, securing the data is a major concern since the attack surface increases as it moves outside of the traditional data center. There are point solutions that help improve these problems, but there is not yet a complete solution architecture that solves all of the problems with this data center without walls.

## Complexity of the DoD environment

The IoT is already complex, and the DOD increases the complexity because of the types of producers and consumers of the data. On the producer side, sensors are attached to satellites, aircraft, ships, and vehicles; even warfighters themselves are basically moving data centers. The amount of data that these edge devices produce can overwhelm a network. The number of heterogeneous devices can make managing them seem nearly impossible, especially when the devices communicate with different protocols and have different levels of classifications. In other words, collecting the data is not the problem; getting it into the hands of those who make the decisions in a useful format quickly is the issue.

In addition, connectivity can be problematic with edge devices. Hostile environments where network connectivity to a data center is non-existent, or spotty at best can delay the data. This means that a solution in this space must work in connected and disconnected modes of operation. Speed of delivery is a key success factor; lives can be at stake if decisions based on the data are delayed.

## Common Framework for Applications, Data and Security

Obviously, we need solutions to these problems. Of paramount importance is a common framework to manage the complexity of these new IT architectures that are outside of the traditional data center walls. The framework needs to address the management of applications, data, and security. We need to be able to deploy portable and reusable applications anywhere within the system, from the edge to the cloud: the “write once, run anywhere” doctrine. This gives us the ability to rapidly develop, test, and deploy applications without having to set up all permutations of hardware configurations in the ecosystem. Using tools in the container ecosystem should help with this. Tools based on Kubernetes (K8s) are a good choice as they have become the defacto standard in the DevOps Community.   

Managing applications in isolation, however, is not enough. All applications need data in some respect, so understanding where the data is, where it is going, and how it is classified is key to successful solutions. We need a common operating environment to manage and govern the different data classes such as domains, security boundaries, governance, data life-cycle management, and data locality. A common operating environment increases the flexibility and velocity of deploying applications.

A common framework of security is also necessary. The critical question is how do you secure your data in all its forms and still share it? There are current hardware and software solutions and continuing progression in this area. Basic security solutions such as encryption should be foundational. Of course, this requires the right underlying engine for storage and capability. Another concern is erroneous or nefarious data entering the system. Establishing a root of trust as a foundation is also necessary in this vast ecosystem.

## Processing at the edge, datacenter and cloud

Where does Intel come into play in this environment? We can help provide the underlying infrastructure that supports these systems in performance and power. Whether you are processing sensor information on the edge in a low power environment (think Atom and custom ASIC designs), or you are doing Artificial Intelligence training or inference in your data center (Xeon and Neuromorphic computing),  Intel has a processor that can help convert raw data into valuable, actionable information, the key component in this complex, mission-oriented environment.


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
