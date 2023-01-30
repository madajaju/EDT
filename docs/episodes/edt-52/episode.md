---
layout: posts
title: "Telemetry in the Cloud"
number: 52
permalink: episode-EDT52
has_children: false
parent: Episodes
nav_order: 52
tags:
    - Multi-Cloud
    - Optimization
    - Workload Placement

date: 2021-06-08
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Intel, talks to Josh Hilliker, Director of Cloud Solution Architects at Intel about using telemetry in the cloud to maximize value and efficiency."
---

{% include soundcloud.html id="edt52" title="#52 Telemetry in the Cloud" %}

{% include youtube.html id="l6wZNe_mMfY" %}

---

## Benefits of Cloud Solution Architects (CSAs)

The CSA role is hot in the industry right now, and Intel has been hiring a team of CSAs to provide value to their customers. CSAs can help customers avoid the lift and shift mentality that leads to unnecessarily high costs. These new CSAs bring an external perspective and connect with the larger CSA community to problem solve.

## Phases of Telemetry

Telemetry in the cloud should not be relegated to your cloud service provider. For example, Amazon Web Services (AWS) had a major outage on the East Coast last November, and their tools weren’t reporting, so many customers had no idea they were down. Organizations need their own telemetry for monitoring.

The first phase is no monitoring in the cloud. The second is exposure of telemetry where you understand what you are getting, for example, CPU, memory, and network, but it’s surface level. The next phase is monitoring and action, where you get notifications about slowdowns, transaction rates, response rates etc.  The next phase is further down the stack where the modern intelligent cloud controls and predicts for remediation. Last is complete automation. This is where things are operating on their own, listening, responding, and then informing after the fact.

An example of complete automation would be a data center that controls an HVAC system, sensing and reducing or increasing temperature in different parts of a building. For workloads, an intelligent cloud can move the workloads around to maximize value in capacity and performance.

## Current Approaches and Limitations

Many times, however, customers of cloud service providers relegate automation at the infrastructure layer and forget the workload layer. Clients need information beyond just the vitals; they need deep, rich telemetry to know what’s really going on. It’s a mistake to rely on the cloud service provider to have your best interest in mind concerning telemetry, and this can manifest in high costs.

Some cloud service providers are opening up more. Currently AWS is a game changer in the telemetry they are providing. Hopefully, others will follow suit.

## Let’s Collect the Right Telemetry…

Picking the right instances matters. Not all cores are created equal; different cores are used for different things, and it’s important to understand what they are to get the best performance and price.

What kind of information can you collect? Intel’s product design includes performance monitoring units (PMUs). These are sub-level counters, and they provide information about transactions, delays, latency, and bottlenecks. There are three different camps in PMUs: core, off core, and uncore.  These PMUs collect information on CPI, utilization, frequency, and TMAM. All of this data is available using AWS.

Using metrics, real telemetry, is a tool to help you optimize your workloads. You could compare how your workload is running in your own data center, for example, to AWS in these instances, and run metrics to find out on which platform the workloads should land.

## IT Relevance

Layering telemetry with benchmarking is an ultimate solution. With benchmarking, you can know your output, and with telemetry, you can look at CPI, utilization, and frequency, and you have the full dashboard of what is happening. You want to do the same thing in the cloud, rather than just dropping workloads onto a seemingly cheaper instance.

IT professionals should not fear losing their jobs because things are moving to the cloud. Instead, they should transfer their skills to learn about benchmarking telemetry rather than having a lift and shift mentality. Becoming proficient in cloud utilization also involves using cloud native features such as Kubernetes and containers. Telemetry works in these areas as well. With Intel’s C advisor, you can get rich telemetry like the core and off core data from your containers.

Although it’s a bit daunting when you look at everything that is possible in the cloud, starting small is your best bet. Look at the right applications based on risk. Catalog your apps, look at the tiering of applications, and then start to shift them over to the cloud in sizable chunks of like functions and apps. As you look at new services and learn new applications, consider the architecture behind them and ask the right questions so you are a more informed technical architect. 


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
