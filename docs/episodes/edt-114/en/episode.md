---
layout: posts
title: "Automating Business Process Management"
number: 114
permalink: episode-EDT114-en
has_children: false
lang: en
parent: Episodes
grand_parent: English
nav_order: 114
tags:
    - compute
    - businessprocessmanagement
    - capitalbpm
    - bpm
    - automation
    - camunda
    - rpa

date: Tue Nov 22 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Max Young

img: thumbnail.png
image: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, and Max Young, CEO of Capital BPM, discuss operationalizing business process management with modeling programs."
video: "https://youtu.be/ysjoqIqvOGw"
description: "Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, and Max Young, CEO of Capital BPM, discuss operationalizing business process management with modeling programs."
---

<div>
{% include transistor.html id="98cc2837" title="#114 Automating Business Process Management" %}

{% include youtube.html id="ysjoqIqvOGw" %}
</div>

---

BMP modeling reminds Darren of when he took drafting in high school, and AutoCAD's introduction of computer-aided drafting systems changed the game.  Before, they would have pages and pages of complex systems and diagrams so people could build, but they couldn’t test the model to ensure it was right. Using computer modeling, they could run simulations to ensure there weren’t problems such as electrical and plumbing running through the same hole.

This is analogous to architects using PowerPoint to show business processes instead of using a modeling tool that can find conflicts and issues in what you thought the business process was.

Using a business modeling tool also solves a practical problem by eliminating the wasted time of getting all the interested parties together for meetings that may need to be more productive. Instead, you can put a deployed model into the hands of the business customer and work through the steps with them.

After articulating and modeling the processes, you can choose integration points that might attach to restful interfaces that get information and pump it back in. This is how business processes can integrate with microservices in the cloud. In the example of the hiring process, these points might be where you need an API to invoke checks for job history or criminal record. The inputs will be items such as social security numbers and dates of birth, and the outputs will be a Boolean - does the information match or not? This is where. You can start having that iterative conversation.

![bpm image](./bpm.png)

There are quite a few manual steps in this process, and you can choose which ones to automate. For example, if you decide that an interview didn’t go well, you can default to HR. After you deploy that new process, you can go back and look at the previous version if you want to, so you have two concurrent versions of the software working and deployed at the prototype.

The Camunda modeler is a native modeler, but Capital BPM has built its own applications that help streamline some of the work and support different user roles.

This system is different from RPA because instead of capturing what a user does with keystrokes, a business analyst looks at the processes and steps across multiple departments. The analyst is looking top-down at the whole process. An RPA can be plugged into some steps for efficiency. A simple example is if a job applicant passes the job history check and criminal record check, it can go to a senior HR person; if not, it’s rejected. Choosing specific steps, or sets of steps, to automate is an iterative approach that has been used successfully in software development for some time.

RPAs can be game changers, but they are tactical and short-term. While these short-term gains may be profitable, you need to look at the entire business process to find optimization and steps you can eliminate. The story of the woman who always cut the roast before baking it because that’s how her mother did it is analogous to some company processes. The woman finally asked her mother why she cut the roast, and her mother replied, “So it would fit in my pan.” Many company processes are only there because they’ve always been done that way, and no one has thought to question why.

Testing, simulation, moving things around, and running processes repeatedly in the modeler, in other words, empirically testing, can help eliminate this process bloat and add significant value. Visualization and experimentation are vital parts of the whole process.

Max points out that there is fidelity between the diagram and the actual execution. Developers often draw diagrams as a starting point. Still, the charts disappear as development moves through the different parties, so what the business thinks is happening and what is happening are different. The diagram and reality are separate.  In this type of modeling, the picture is always an accurate representation of what is happening. In addition, it’s easy to see and make changes for improvement. 



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
