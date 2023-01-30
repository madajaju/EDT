---
layout: posts
title: "Follow and Secure the Bit Edge to Cloud"
number: 64
permalink: episode-EDT64
has_children: false
parent: Episodes
nav_order: 64
tags:
    - Edge
    - Edge Computing
    - Multi-Cloud
    - Cybersecurity
    - Edge Security

date: 2021-09-02
guests:
    - Darren W Pulsipher
    - Greg Clifton
    - Steve Orrin

img: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Intel, discusses following the bit with Greg Clifton, Director, DOD and Intelligence, Intel, in a follow-up to episode #2, along with Steve Orrin, CTO Federal, Intel, who lends his expertise on security in complex edge to cloud environments."
---

{% include soundcloud.html id="edt64" title="#64 Follow and Secure the Bit Edge to Cloud" %}

{% include youtube.html id="aIwxVkw0k0o" %}

---

In episode #2, Greg explained the complex questions of collecting, moving, and analyzing data in a Department of Defense (DOD) environment that includes edge devices on ships, planes, and even war-fighters and the need to move and analyze that data quickly for timely, actionable decisions. Intel’s role is to help shorten the process cycles and relieve bottlenecks in the data flow with its technology portfolio. It’s all about matching technology to the mission.

One recent architecture trend is moving the compute, processing, and intelligence forward to meet the data rather than moving the data to the back end. This adjustment provides the best capability to get real-time responses and intelligence. This approach is a different operational model with challenging questions.

## Heterogeneous Hardware

In the foundational infrastructure, how do you provide the right compute, storage, memory, and network capabilities to drive analytics at the edge and drive processing where you need it? How do you manage those applications and data? How do you introduce quality and curation of data further up the food chain? Security is a foundational piece of any infrastructure, and now, data must be protected all the way at the edge.

The industry needs to get to more heterogeneous compute so that the underlying software can run on various hardware platforms so you don’t get locked into a specific software or hardware stack. Part of the beauty of what Intel has done for years is providing software portability: the open framework, x86, and other underlying systems.

An important factor in how Intel develops capabilities is understanding the workload and data flow rather than focusing on modernization, such as putting things in the cloud. It’s not about how you procure IT (cloud or on-prem) but optimizing the business flow to take advantage of how the data flows and what it is really doing.

## DevOps to the Rescue

Another critical aspect of these new solutions is deployment time. DevOps has become increasingly important across the DOD, and efforts to develop common DevOps platforms have increased dramatically.  To write code once and run anywhere (cloud, on-prem, or on the edge), organizations use the x86 chipset and Intel’s oneAPI to deploy complex services across the complete ecosystem. For example, oneAPI allows developers to write complex analytics or AI jobs that run on a GPU, a CPU, or even an FPGAs with the same code base. Developers can then test these complex systems in their data center, assuring hit will behave the same way when deployed into the field, decreasing deployment time.

Being able to leverage a combination of a flexible DevOps environment, which leverages containerization and software frameworks like oneAPI, gives programmers the abstraction they need but with hardware/software optimizations built-in. A key distinction here is that we have figured out a way to take all the power of the hardware and optimize software so that an application can still get performance improvement and still take advantage of specialized hardware.

The container ecosystem provides abstraction at the system level, so things don’t need to be hard-coded. Providing the ability to scale up or down based on service load and capacity. For example, if a capability runs on the edge, in a portable data center, or back in the cloud, and you lose connectivity or an asset, you can still carry out the mission. This intermittent connectivity is vital in a DOD environment.

## Edge Solutions

Many people think of Intel as a silicon or hardware provider, but the company has developed solutions and reference architectures in the edge to the cloud ecosystem. One example of progress is a naval tactical grid where processing happens on the edge, ships, aircraft, and onshore. The applications have to run across the whole ecosystem, and that can’t be done with only hardware. Intel has leveraged its silicon and security features and, building on top of a container ecosystem, produced complex applications with several microservices that can run when connected and disconnected assets.

Another example of edge architectures is tracking objects across sensor meshes, even with gaps in the sensor mesh.  By performing sensor fusion, data fusion, and cross-domain analytics, you can track objects across different scenes and across different sensor types, scaling up and down to create a mobile sensor platform that can do edge sensing analytics and fusion. It can then also hand off to a distributed set of nodes that can work in concert to track an object across all those different existing sensors.

For instance, if you’re tracking an object and it moves between sensors, you will lose it for a moment. What this intelligence allows you to do is to connect those two feeds and track the blind spots. Not only does this work with homogeneous sensor types, this can work with multiple types of sensors such as motion, RF, and IR sensors, so if you lose video but still have an RF and then pick up the video again, you can show the full path of the object. In the past, these types of analytics required moving data to the data center to process these complex interactions; now, we can do this at the sensor mesh edge through microservices at the edge.

## Flexibility of Deployment

An advantageous approach is building once and using the same architecture and software for different missions with an analytical requirement. Some places where heavy-duty computing is at the edge can scale up and take full advantage of the hardware capabilities. Other platforms may have limited compute capabilities and can run smaller microservices providing only a portion of the complete solution. New mission capabilities and services can be rapidly deployed by building these microservices once for multiple use cases.

## Security at the Edge

Complexity is sometimes the worst enemy of security, but foundational security principles can also secure data and applications out on the edge. Rather than the old approach of protecting the server and hoping everything stays there, it’s essential to understand where the data flows and every place it exists, protecting it no matter what it’s running on. Risk-based approaches and concepts like zero trust have gained traction because they take a systems-independent view of security.

Boiled down, zero trust means default deny. No one gets in unless they need to, and then only for the period for the necessary action. When temporal access controls are married with a risk-based approach of protecting the data throughout its lifecycle, the result is the ability to protect the data regardless of where it is and who is accessing it. This technique is one of the ways to secure these highly complex environments.

The practical action to take in these ecosystems is to apply a policy that leverages controls that meet the risk of a given system at a given point in time and then continually monitor and update them in real-time to meet the ever-changing cyber-threatening world. Use the technical controls that the hardware and software capabilities already provide, such as Secure Boot, hardware root of trust with TPM modules or SGX storage keys, encryption, etc.

There is no silver bullet you can buy to provide an end security solution in these complex ecosystems. It’s about creating and enforcing security policies as threats evolve and deploying them at scale, leveraging hardware, software, and the processes necessary to secure the bit as it flows from the edge all the way through the ecosystem.

The DevOps framework provides effective mechanisms to handle security across all assets in the ecosystem. Containers should be populated with instrumentation to enforce the security controls and policies. Security must be built into the DevOps process itself because if you rely on the developer to implement the security, each will do it slightly differently, increasing complexity and variability in the system. The developer must have the capabilities and the constraints upon which they have to develop.

Developers will still have to do security work, such as making sure they use suitable security tools for the particular threat environment, but the heavy lifting, the complexity, should be abstracted into the DevOps architecture.

One of the critical areas in a complex theater environment is edge device management, such as monitoring and updating firmware.  Making sure those devices are secure in order to be able to support the data security and profiles and policies deployed in the systems at scale is going to require innovation. That’s why the ecosystem is really growing currently: to meet that challenge. 


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
