---
layout: posts
title: "Artificial Intelligence and Security"
number: 85
permalink: episode-EDT85
has_children: false
parent: Episodes
nav_order: 85
tags:
    - Artificial Intelligence
    - Cybersecurity
    - DevOps

date: 2022-05-05
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "On this episode, Darren discusses the data aspects of artificial intelligence (AI) and the importance of securing that data."
---

{% include soundcloud.html id="edt85" title="#85 Artificial Intelligence and Security" %}

{% include youtube.html id="NVcBCPpJ4rY" %}

---

## AI Failures

Recently, Darren asked a class of high school and college students studying AI to find AI failures. They found examples such as Microsoft Tay, a chatbot that learned casual conversation from Twitter and, within 24 hours, was spewing racist and misogynist comments based on manipulation from Twitter feeds. Another example was a ball tracking system from Inverness Football Club that was meant to track a soccer ball but tracked a bald referee’s head instead.  More serious was a fatality when an Uber autonomous vehicle did not recognize a pedestrian outside of a crosswalk and failed to stop.

## Deploying Solutions

All of these AI failures had to do with data. When deploying AI solutions, you must ask yourself critical questions: Where am I making my inference?  Is the endpoint secure? If you are making all your inference at the endpoint, maybe object detection with a camera, for example, you need to make sure it is secure; no one should be able to manipulate the data, the camera, or the model.

Another question is, what is going to get deployed? Am I deploying a neuro network or algorithm out to the edge, or am I just streaming data back from the edge into a data center to make the inference there? In addition, when AI is operationalized, you have to ask how often the models or algorithms will be updated.

## AI Pipeline

The pipeline for AI development, training, testing, deployment, and inference, needs three things: the application, the model, and the data. Those three things must migrate through the pipeline together and be protected concurrently. You need to make sure the production data is not manipulated even in production.

## AI Security Threats

The threats for AI are significant, whether they are espionage, sabotage, or fraud because the attack surface is large.

## Attacks

First are the models. A model can be manipulated, such as someone putting black and white stickers on stop signs so they are not recognized as such or someone messing with pattern matching detection, so attacks are undetected. Models must not just be protected during training but during testing, deployment, and inference.  Encryption, access control, and model and version control are critical, just as they would be developing an application.

Source training data and production data must also be protected from manipulation.

## Types of Attacks

A paper from the Belfer Center places the threats on a format axis and a visibility axis. The format axis ranges from physical to digital. The visibility axis runs from perceivable to imperceivable.

### Physical Attacks

Physical attacks can be altering physical items such as the sticker on the stop sign. These attacks were evident early on with autonomous driving and facial recognition. We need better training of the AI algorithms for these attacks, using reinforced learning and negative case learning techniques.

### Digital Attacks

Digital attacks are harder to detect as they are not visible. An attack could be white noise injected into the data stream to throw off the algorithm. These attacks are brutal to combat unless inference is conducted at the edge or pattern detection is deployed.  For this reason, it’s essential to know where the source data is coming from, both in the source training, testing, and production data.

## Identify the Data Sources

Data sources must be verified and tested from public data sources. Open-source data is not well guarded. Consider looking at generating data sources, so you have more control. If you use a shared data source, use a version control system such as GitHub or GitLab to check for consistency. Test data also need version control, access control, and other security measures, just as you typically do in a DevOps pipeline.

The last, most challenging part is protecting the production data. Making the inference as close to the data is a good start. Much speculation can be done right at the edge with neuromorphic processing and even instruction sets in the Intel processors to lessen the risk of data being manipulated during transport.  Instead, you can encrypt the data and send it back to the data center.

Protect and Manage Data / Secure AI Pipeline

Once you have identified all of your data sources, there are three critical aspects for protection: control, security, and encryption.

The first is controlling. You should have version control, protected libraries, and backup and restoration in case of corrupted data files. These are standard good security practices that AI should practice as they are in app development.

Security should include access authorization, even some zero trust concepts such as giving access to people who need it for only a short time. Please make sure the models are not being manipulated and make sure they are tied to specific applications.

Data should be encrypted at rest, in transit, and use. In the past, it has been expensive as far as CPU utilization and time, but now much of the encryption is in silicon and is very fast with minimal to no performance lag.

## Call to Action

Data is key to making AI successful and secure, so protect it and use best practices right away around security. Operationalize pipelines to take the humans from the day-to-day grind of deploying and testing AI algorithms. Automate as much as possible and inject security into the AI DevOps pipeline to protect your source data, model, and application. 


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
