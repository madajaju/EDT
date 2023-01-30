---
layout: posts
title: "Managing Complexity in the Cloud"
number: 66
permalink: episode-EDT66
has_children: false
parent: Episodes
nav_order: 66
tags:
    - Data Management
    - DevOps
    - DevSecOps
    - Aiven

date: 2021-10-14
guests:
    - Darren W Pulsipher
    - David Esposito

img: thumbnail.jpg
summary: "On this episode, part 2 of 2, Darren continues his conversation with David Esposito, Global Solution Architect, from Aiven about accelerating cloud adoption while reducing complexity and cost."
---

{% include soundcloud.html id="edt66" title="#66 Managing Complexity in the Cloud" %}

{% include youtube.html id="OIIPkoZHKiw" %}

---

## Reducing Complexity

What business practices should be put into place when managing cloud assets to decrease complexity? First, you must have infrastructure code and automated deployments in place. Everything that comes next is a conversation to define what risks there are to the company such as outages and downtimes, how to mitigate these risks, and how much to invest in that.

For some companies, it’s critical to have the highest level of uptime. In healthcare, for example, you might have to have all of the data backup in multiple locations as well as all services available because critical, life-saving decisions might be based on that data. But if you are in ecommerce in April, maybe you can spend some time in that sick region because the consequences are not as dire.

In healthcare, it makes sense to go multi cloud even though it increases the complexity. Other industries that can benefit from multi cloud are those that are highly regulated such as financial services, oil and gas, or federal agencies. If there is a security incident, they can shut one off and deploy elsewhere.

When considering multi cloud, know that are some complexities with differences of APIs. If you are in GCP and you know how to deploy everything and thinking of going to AWS, you have to relearn the platform and deployment process, perhaps even writing some of that code. For this reason, containerization is popular because you can deploy anywhere. It does become more complex with other services; for example, Postgres has different configurations in AWS versus GCP, maybe with different patching versions, different networking setups, and different extensions. So, a service on one cloud is not the same as services on another.

In addition, containerized environments are not ideal for every situation, and a ideal situation becomes more important at as you scale. If you are doing Kafka and 1,000 messages per second, your own container is fine. But if you are starting to push a million-plus messages per second, a gigabyte, that’s a different conversation.

## Security

Security in the cloud is a different beast than security in your own data center. The most important thing to think about is data going outside of your own walls. You must have appropriate security controls in place to ensure data doesn’t leak or have any unauthorized access and make sure compliance requirements are in place. This requires training because the security measures for on premises data centers don’t directly translate to the cloud. For example, S3 containers are encrypted at rest, but not if you have programmatic access through publicly exposed buckets.

In addition, you need to know what the service providers are doing. For example, Aiven runs databases on GPUs EC2, GCP Compute, or Azure. When they store to disk, there’s one level of encryption that’s done at the cloud level by the cloud provider, so the data is encrypted at rest. Then, Aiven does another layer of encryption with their own managed keys, so data is double encrypted at rest, and any data in transit is encrypted. Anything going to the server is encrypted for that particular server, and when a server is decommissioned, it’s locked with Aiven’s key as well as the cloud provider’s key.

## Aiven

David joined Aiven as part of the solutions architecture team when he saw that the company did cloud solutions better than anyone else he had seen, based on his previous experience with managed Kafka and other open source technologies. The mission of Aiven is to make developers’ lives better. They offer a free trial, with production-ready and Kafka going in five minutes. They also have help articles and tutorials to walk you through, so you’re sending a Kafka message in the cloud with cloud-native best practices in less than ten minutes. 


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
