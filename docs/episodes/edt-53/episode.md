---
layout: posts
title: "DevOps with Speed While Reducing Risk"
number: 53
permalink: episode-EDT53
has_children: false
parent: Episodes
nav_order: 53
tags:
    - DevOps
    - DevSecOps
    - Multi-Cloud

date: 2021-06-15
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "In this episode, Robert Boule, Head of Solution Engineering at OpsMx, joins Darren to talk about improving speed without increasing risk in the DevOps process. The three key areas to balance in software delivery are velocity, risk, and quality. Most can manage one or two of these things, but adding the third can get difficult. For example, you might be able to deliver at velocity because you have a great cd system, but once you introduce compliance and policy checks, you are faced with a challenge. Do you stop and check those things, or maybe ingest some results from another tool? Suddenly, your velocity suffers."
---

{% include soundcloud.html id="edt53" title="#53 DevOps with Speed While Reducing Risk" %}

{% include youtube.html id="50gM62Tl0Tw" %}

---

The three key areas to balance in software delivery are velocity, risk, and quality. Most can manage one or two of these things, but adding the third can get difficult.  For example, you might be able to deliver at velocity because you have a great cd system, but once you introduce compliance and policy checks, you are faced with a challenge. Do you stop and check those things, or maybe ingest some results from another tool? Suddenly, your velocity suffers.

OpsMx is working to help people automate those decision points. Automation is the most important thing to keep velocity up while increasing the other two pillars, risk and quality.

## OpsMx Solution: Fully Automated Software Delivery

The automation works as a data aggregation, by grabbing results from the various tools in the tool chain and then having a mechanism like a policy manager that gives expected results on check marks from tools such as BlackDuck. If it looks right, the pipeline doesn’t stop, as it does currently, for a human check.

## Faster Application Delivery Increases Failure Rates

The velocity of application delivery has gone from weekly or monthly to hourly, adding pressure to produce quickly. As you try to increase velocity, however, you could start to lose some control over quality, perhaps skipping some of the risk checks. The net result is the faster you try to move, the more apt you are to have a failure.

## Friction Points and Problem Spaces

With strategic use of automation, you have the ability to increase velocity without swallowing risk. Continuous verification can cut a three or four hour endeavor down to five or ten seconds. Instead of using human labor to parse through logs to look for anomalous behavior that may have passed a binary pass/fail check, continuous verification can do this automatically, allowing people to look at exception cases only.

## What Does Automation Mean in this Context?

The next piece is using the tools required by the security and compliance team, such as BlackDuck. With automation, you do not have to stop the pipeline to have someone interpret the results before continuing because it will happen automatically.

The other pieces are policy at a higher level if you are in a regulated industry with more checks, or something as simple as a retailer who, for example, doesn’t want to release new software two weeks before Christmas. Those checks can be automated to eliminate the need for human approval, allowing the pipeline to continue if there are no exceptions. The idea is to remove as many human gates as possible to allow the pipeline to flow.

The primary set of control and policy automations are reusable across pipelines; you only have to customize or create ones for criteria specific to your release cycle.

## OpsMx Solution: Fully Automated Software Delivery

OpsMx gives you the ability to create those pipelines and the automations of analyzing logs. Spinnaker is the current tool, but OpsMx’s vision is to be as cd agnostic as possible, allowing use of all the cd tools such as Jenkins and Microsoft Azure. OpsMx leverages the cd part for the automation, but is sitting on top of that to help make the automated decisions.

A growing part of the tool is machine learning to help understand what is baseline for a particular application versus what is anomalous behavior. There is also a supervised learning model where a DevOps professional, an engineer, or product owner can specify anomalous behavior as expected in context of the application.

The system also allows auditability. Any change or exception is documented. There is a complete audit trail of everything that happens, from who approved an exception to which artifact was deployed and what base image was used. Whether it’s running on the cloud or on-prem, you can see the whole pipeline as one entity.

Another aspect of visibility OpsMx provides is a kind of map of what is deployed where, such as the series of micro services that are currently in the QA, what is in certain stages, or what is in production, and then for any one of those things, you can drill down and get a historical view. You can click any given release and all of the audit information is right at your fingertips.  

In addition, the next frontier that OpsMx is working on is the efficacy of the artifacts that are being captured so the supply chain, or lineage, is transparent.

OpsMx is now using an agent-based technology that can interact with, for example, resources that sit behind your firewall. The agent acts as a proxy to the intelligence layer so data can be gathered there. There are no worries about opening or exposing firewall ports. It works the same way with the cloud providers: the agent can be deployed inside of the VPC and you no longer have to risk putting any keys and secrets in a cloud-based application. The agent simply acts as a proxy so the authorized piece always remains inside the VPC, securing the way information is gathered.

With this new direction, the DevOps industry as a whole is in for a shake-up around security and auditability. 


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
