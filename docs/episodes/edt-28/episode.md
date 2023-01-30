---
layout: posts
title: "Legacy Integration with Cloud and RPA"
number: 28
permalink: episode-EDT28
has_children: false
parent: Episodes
nav_order: 28
tags:
    - RPA
    - Business Automation

date: 2020-11-06
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "One of the growing areas to help with Legacy Integration and automation of integration is the use of automation tools and frameworks. Over the last 3 years, a significant emphasis on the automation of workflows with legacy and new cloud-aware applications for information workers has emerged. These tools sets are called Robotic Process Automation (RPA) tools. Darren Pulsipher, Chief Solution Architect, Public Sector, Intel, reviews the Robotic Process Automation (RPA) industry and tool offerings."
---

{% include soundcloud.html id="edt28" title="#28 Legacy Integration with Cloud and RPA" %}

{% include youtube.html id="F15k-tmLXt4" %}

---


It seems like everyone is in the middle of a Digital Transformation. Private Cloud, Public Cloud, Multi-Hybrid Cloud, Data Lakes, Machine Learning, Inference, and Artificial Intelligence are all terms that people are using today to describe their digital transformation, but what about Legacy integration. No one ever talks about Legacy Integration. Why? Because it is challenging to integrate Legacy applications, data, and security into your new pristine Multi-Hybrid Cloud environment. That is one of the last things we want to concern ourselves. If we don’t develop a Legacy strategy, then we have a speedboat with its anchor down. It slows us down and keeps our boat stuck in the harbor.

One of the growing areas to help with Legacy Integration and automation of integration is the use of automation tools and frameworks. Over the last 3 years, a significant emphasis on the automation of workflows with legacy and new cloud-aware applications for information workers has emerged. These tools sets are called Robotic Process Automation (RPA) tools.

## Robotic Process Automation (RPA)

When I first started investigating Robotic Process Automation (RPA) tools, I thought they controlled robots. I was all ready to get my steel-toed boots and a hard hat and visit manufacturing facilities. However, I quickly found out that RPAs mimic the way that information workers work with the different tools they use. Some of the tools are Legacy tools, and some of those tools are new modern applications. RPAs record how the information worker uses the User Interface of the different tools and then allow the recording to be played back, automating the Information Worker workflow.

Surprisingly RPAs are quite a mature technology. Many of the RPA companies have a heritage in the UI Test Tool marketplace. The ability to capture user interaction with multiple applications over time is critical for developing a repeatable User Interface Test. These tools have been around for over 20 years and are quite mature. These UI QA Test Tools have been rebranded and repurposed for Information workers that want to automate their repeatable redundant tasks.

### Current Market Place – 2020 

Investors see this market as a hot market and have invested heavily in these technologies. Over the last three years, over $2.0 Billion has been invested in the RPA marketplace. Three companies have taken a majority of the investment:

* UiPath - $1 Billion investment on $300 Million in Annual Revenue
* Automation Anywhere - $500 Million investment on $100 Million in Annual Revenue
* BluePrism - $50 Million investment on $30 Million in Annual Revenue
* 
Most of the investment has not come from traditional high-tech Silicon Valley, but instead from the Financial centers like New York and London, indicating that financial institutions are looking at RPAs to automate many of their own information workers’ workflows and processes.

## Place where RPA works well
The first vertical segments to adopt RPAs have been the Financial, Insurance, and Medical industries. These industries have looked for ways to decrease variability, increased reliability, and decreased cost. Due to a large number of information workers in these industries, they have looked to RPAs to automate much of the work their Information Workers are currently doing. To automate these workflows organizations need to understand how these workflows get created.

First, let’s understand the information worker. Many of the information workers spend time working with multiple applications, tieing information, and applications together in an ad hoc way. As these workers continue to work with these applications, they organically create workflows coupling data and applications together in an innumerable number of permutations.

Second, Catalog the workflows as best as you can finding candidates for workflow elimination through duplication and redundancy. Now that workloads are understood the next step is to prioritize and enumerate the workflows. Focusing on the most used workflows with the most significant number of steps tends to be the best way to prioritize workflows.

Lastly, figure out how to automate the workflows with RPA bots. The automation can be done through UI recording the workflow from one of the information workers and annotating the workflow with variations based on data entry and security credentials. Once the recording is complete, an RPA bot is created to automate the workflow. Now you need to decide how you want the RPA to run: Attended or Unattended.

## RPA Modes of Operation

RPAs run in two basic modes of execution. Attended and Unattended. Attended means, it runs on the Desktop or Laptop of the information work. It aids the information worker by automating the work that they do day-to-day. Unattended runs in a Virtual Desktop environment and are typically kicked off via an event or trigger and runs without any interaction with the information worker. There are benefits to running in both modes as described below.

### Attended

* Handles tasks for individual employees
* Employees trigger and direct a bot to carry out an activity
* Employees trigger bots to automate tasks as needed at any time
* Increases productivity and customer satisfaction at call centers and other service desk environments

### Unattended
* Automates back-office processes at scale
* Provisioned based on rules-based processes
* Bots complete business processes without human intervention per a predetermined schedule
* Frees employees from rote work, lowering costs, improving compliance, and accelerating processes

## How to integrate RPA in your Enterprise

To understand how RPAs fit into your Enterprise, you have to first look at the users of the RPAs. Specifically, there are three types of “actors” that use, manage, or influence the RPA tools.

* Information Worker – This is the primary user of the RPA tools. Their manual processes are targets for automation.
* Application Developer – RPA bots change when applications are updated or created. Changes to User Interface require “re-recording” the RPA bots.
* IT Operations – Manage the RPA tools and deploy unattended RPA bots.
* 
### Managing Change
Managing the complexity of configurations and security are critical factors to a successful deployment of RPA tools and bots. First, you need an understanding of how the different users of the RPAs interact when changes to applications, workflows, and processes. This understanding critical to managing change in the RPA bots and the toolsets they use.

Small changes to applications can have a profound effect on Information Workers and how they perform their day-to-day work, which in turn means recording a new or updating an existing RPA bot. Because of the coupling of RPA bots to toolsets and workflows,  creating RPA bots when the workflows or toolsets are immature causes unnecessary churn and fragility. Mature processes and toolsets are great candidates for RPA automation.

Another thing to consider is where are the tools running that you are automating with your RPA tool. Do they use Legacy applications and infrastructure? Are they using Public or Private Cloud? How are the networks of these systems connected? As the number of environments increases, so does the complexity of maintaining and updating applications and RPA bots. Find ways to decrease the number of environmental boundaries the RPA bot is traversing.

### Managing Security

Another critical factor to consider is security for the RPA bots. When an Information Worker records their workflow, they need to authenticate (log in) to each tool they are using. Workers authenticate using usernames and passwords, authentication keys, or even Corporate Single Sign-On Tools. Either way, you need to manage the security of these tools in the context of the RPA bot at execution. Any changes to authentication (username, password, auth keys, or credentials) require changes to the RPA bot. Many of the RPA tools consider this and have mechanisms to inject security credentials into the RPA bot and authenticate with the tools at runtime.

## Managing RPA tools and bots with SecDevOps Workflows

The complexity of RPA tools and bots lends itself very well to well-known patterns in the SecDevOps world. Luckily, many of the problems with managing configurations and dependencies are handled well with a SecDevOps process.  

### RPA Bundling

One of the tricks is to treat the RPA bot as a complex-service that contains several VMs or containers for each of the tools, a Virtual Desktop, and the bot itself. These services can be bundled together and managed together like one package. A bundle includes not only the services but how the services communicate (network) in a secure manner (Authentication).

Passing a bundle to a service orchestrator allows for greater automation of network firewall management, security, and credential key injection and lifecycle management of the RPA bot and the tools it consumes. There are several tools in the Virtualization space (VMWare, and OpenStack) that allow for the creation and management of these bundles.  The container space has similar scheduling and orchestration tools as well: namely Kubernetes, Mesos,  and Docker Swarm.

### SecDevOps Pipelining

A simple SecDevOps pipeline manages the RPA bot bundle just like any other traditional application bundle.

An Information Worker builds the RPA bot bundles by recording the User Interface workflow in a development environment. The worker easily records their workflow and then creates a bundle that gets “Checked In” to the pipeline. At that point, the RPA bot bundle moves through a build, test, and production cycle. Checkpoints at each step along the way, help guarantee the quality of the RPA bot. Because the bundle can inject network and security depending on different environments, the RPA bots can be reused by different Information Workers and in different environments.

Another benefit of putting RPA bots into RPA Bundles is the management of the tools and bots across multiple infrastructure environments like legacy, private, and public clouds. Many of the Service orchestration tools can automatically create connections between these infrastructure environments through creating an overlay network. The pipeline decreases the amount of “hands-on” work done by the IT organization, and in many cases, all of the steps in the pipeline are automated.

## Pitfalls of RPA bots

Here is a list of somethings to watch out for when using RPA bots in your enterprise systems.

* Security can be a gaping hole if you don’t pay attention to it. One of the biggest mistakes is running applications in an RPA bot in privileged mode or with “global” account credentials.
* RPAs bots tightly couple to User Interfaces of multiple applications, any small change to an application means you need to re-record the RPA bot.
* RPA bots cannot hand change very well they are very brittle to change in applications and even configuration of applications.
* Reuse is minimal due to the tight coupling with the application user interfaces. Some tools use tags instead of the absolute position of cursor and clicks.
* Some User Interfaces do not allow themselves to RPAs because they are dynamic. Which means they are hard to record.

The RPA industry is trying its best to overcome some of these issues inherent with the record/reply aspect of the tools. Some of these pitfalls cannot be overcome because of the generalized approach. Other options, like API gateways and functional automation, should be evaluated.

## AI to the rescue of RPAs 

As mentioned in the pitfalls of the RPA, bots reuse is a big problem that the industry is looking at fixing. One of the techniques they are investigating is the use of AI and Inference to handle dynamic user interfaces and small changes to applications without re-recording RPA bots. Pattern recognition and Optical Character recognition are two areas that are being used to train AI models to be used to identify fields and segments of User Interfaces.

With these AI models, bots can be more flexible lending themselves to reuse across multiple toolsets, and similar processes/workflows. Another area that RPA vendors are investigating is process optimization using AI and ML.

## Legacy Migration is a journey

The RPA marketplace has caught new energy as companies are looking to modernize their IT infrastructure and processes. Automating current manual processes through recording is a quick win that many organizations are getting benefits. However, RPA should be considered a stop-gap mechanism instead of the end state. Why? Many of the current information processes require legacy systems and policies. Automating an old process on new infrastructure is similar to automating the creation of buggy whips for an automotive factory. There may be a benefit at first, but in the long term, the process is highly inefficient and antiquated. No matter how fast it runs reliability, it just may not be needed.

## Conclusion

Robotic Process Automation tools are another set of tools that can be used to help organizations with their digital transformation from Legacy to more modern Computing infrastructure and processes. The tools by themselves are not enough, and you need to plan how you are going to use, manage, and eventually replace them. Here are some helpful tips when working with these tools.

* Treat RPAs as Complex Services running in your Multi-Hybrid Cloud
* Run your RPA bots through SecDevOps Workflows like other applications.
* Inject Security and Auth at runtime into the RPA tool.
* Find ways to reuse RPA bots in different parts of your organization.
* Have a plan to replace your RPA bot with a simplified integration
* Look for ways to decrease the Legacy applications (Replace or Remove)



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
