---
layout: posts
title: "The AWS Outage of Nov 2020"
number: 33
permalink: episode-EDT33
has_children: false
parent: Episodes
nav_order: 33
tags:
    - AWS
    - Cloud Outage
    - Cloud Reliability
    - Multi-Cloud
    - Reliability

date: 2020-12-15
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "Darren Pulsipher, Chief Solution Architect, Public Sector, at Intel talks about the lessons learned from the AWS outage in November 2020 and preventative solutions to navigating such outages."
---

{% include soundcloud.html id="edt33" title="#33 The AWS Outage of Nov 2020" %}

{% include youtube.html id="KQH85zaVUe0" %}

---


## What We Learned from the AWS Outage

Amazon Web Services (AWS) suffered a substantial outage at an inopportune time – the day before Thanksgiving in 2020. Since they published their service logs, it’s interesting to review them to see what happened and what we can learn.

## Timeline of the AWS Outage

On Wednesday, November 25, 2020 around 3:00 am PST, AWS was updating the East region, adding servers to increase the capacity of Kinesis. Kinesis is a popular AI service that does pattern matching on log files and video files. About an hour and a half into the upgrade, the server alarms began firing errors in the Kinesis records. Fairly quickly, by 8 am, they initially identified a couple of candidates on the front-end services as the root cause. Kinesis has several different smaller services, a group of front-end services and a group of back-end services. The way the system is architected, each time a back-end service is running, a thread fires off the front end. One of the problems was that the front end hit the thread threshold as they added servers to the back end during the upgrade. Once they had determined this problem, they made a temporary fix with updates (patches) to the operating system and Kinesis was back online by about 10:30 pm and fully restored by 1:15 am on November 26th.  In the end, Kinesis was not fully operational for 21 hours, and although not everyone uses this AI tool, the impact was widespread.

## Kinesis Impact

Several other Amazon services use Kinesis, such as Amazon Cognito and CloudWatch, and they suffered varying degrees of disruption. Cognito was overloaded until about 2 pm; CloudWatch was down until about 10 pm. In a domino effect, services dependent on CloudWatch such as Lambda and EventBridge were also down. Since EventBridge was unavailable, the container services LCS and LKS were affected as well.

The outages only happened in the East region, and AWS quickly added capacity in the other regions to prevent Kinesis from failing in a similar manner. But during the outage, users in the East region encountered a perplexing problem, as their service dashboard and personal service dashboards were not receiving information and showed false positives. So, there were many other IT organizations investigating the issues since they weren’t getting the correct information. Surprisingly, AWS has been open about the whole incident, so it’s a great learning experience.

## Lessons Learned

One of the first lessons is that simple operations to infrastructure such as increasing capacity need to be understood and planned. Obviously, AWS didn’t just make the upgrades off the cuff, but they didn’t fully understand the impact. Even if an operation seems rote, it’s always a good idea to run things to failure in a test environment during upgrades, even if it takes more time. This is especially important with services that are critical to other core dependent services.

In addition, service or micro-service architectures must understand their whole service dependency tree so they can troubleshoot when there are outages. In addition, it’s important to be as loosely coupled to a dependency as possible and include defensive programming with microservices to avoid the domino effect that happened in this case.

Another issue to watch out for is circular dependencies. If, in a chain of micro services that are dependent on each other, one hiccups, everything can come to a screeching halt, consuming resources and accomplishing nothing.

When developing micro services, keep in mind that you will not always have connectivity to the services you are dependent on. Writing programs that can run in a degraded state, or at least indicate that a service is not working, can save time and trouble. In this outage, remember that dashboards were running green even though no new information was coming through.

## Who Handled the Outage Best

Many companies were affected by the AWS outage, including some owned by Amazon itself. Some flew right though the outage, almost unscathed, while others had a harder time recuperating. Those that were able to adjust quickly had a multi hybrid cloud strategy, so they had alternate clouds as backups. Some used a different region of AWS, while others used Google or Azure, and some even ran it back to their own data centers or external websites. At the very least, websites displayed message that they were currently experiencing problems, rather than a 404 error.

Companies that were not using some of Amazon’s specialized services also did better. For example, the EKS and ECS managed container offerings and Lambda were hit hard and were down for a substantial amount of time, so those dependent on these services were without options.

During the outage, auto scaling services were not working properly, so any company that had a lot of traffic at the time had to find out what was going on and scale up services manually. This was a bigger issue than it might normally be since it was the day before Thanksgiving, a time when many consumers are traveling and buying online.  For example, Etsy stayed up, but they could not scale as much as they normally would, leading to decreased sales.

The companies that have their own external monitoring also fared better. Some even alerted AWS to the outages. They were not dependent only on AWS’s health dashboard, but had their own monitoring running on their servers.

What is the main lesson we should learn from this? Organizations should take ownership of their cloud resources, much like any utility. Just like having a backup generator for electricity to assure continuation of business in the event of an outage, companies should use the same best practices for cloud services. This means having a backup cloud that can keep you running, even at diminished capacity, is essential to weathering a storm such as the AWS outage. 

## Resources

* https://aws.amazon.com/message/11201/
* https://www.theverge.com/2020/11/25/21719396/amazon-web-services-aws-outage-down-internet
* https://www.zdnet.com/article/amazon-heres-what-caused-major-aws-outage-last-week-apologies
* https://www.wsj.com/articles/amazon-web-services-hit-by-outage-11606326714
* https://www.washingtonpost.com/technology/2020/11/28/amazon-outage-explained



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
