---
layout: posts
title: "Operationalizing Business Process Management"
number: 113
permalink: episode-EDT113-en
has_children: false
lang: en
parent: Episodes
grand_parent: English
nav_order: 113
tags:
    - bpm
    - automation
    - compute
    - management
    - camunda
    - capitalbpm
    - rpa

date: Thu Nov 17 2022 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher
    - Max Young

img: thumbnail.png
image: thumbnail.png
summary: "In this episode, Darren discusses business process management and automation with Max Young, CEO of Capital BPM"
video: "https://youtu.be/url"
description: "In this episode, Darren discusses business process management and automation with Max Young, CEO of Capital BPM"
---

<div>
{% include transistor.html id="a05071ff" title="#113 Operationalizing Business Process Management" %}

{% include youtube.html id="url" %}
</div>

---

Max calls himself a “failed academic” because he left his Ph.D. in mathematics, specializing in topology, to study computer science. He earned an undergraduate and a master’s degree, specializing in AI. He then worked in business process management (BPM), starting at Lombardi, which was sold to IBM, and a few other vendors in the BPM space. Ten years ago, he took a plunge with friends and founded Capital BPM.

Max chose to focus on BPM for two reasons. First, he has always liked algorithms because it provides a systematic approach to solving complex problems. Algorithms give him a sense of security during crazy situations.

Second, he likes what is called transformations in mathematics. For example, if you have an ugly shape with many corners that is hard to measure, you would transform it into, say, a rectangle and then apply all the theories around rectangle measurement, measure it, and translate the answer back to the original shape. In the same way, in BPM, you can take a problem to a domain where it can be easily solved. Rather than making an issue a micro problem with complicated nested F statements that are difficult to maintain, you can transform it into a flattened-out problem that you can see and attack in stages.

This process is like zooming in on Google maps to see where you need concentrated focus and then zooming back out to see how that fits into the big picture. The heart of enterprise architecture is the ability to zoom in and out to ensure that line you’re drawing is still valid.

Max likens his fondness for BPM within the computer science world to martial arts, which he has studied since he was six. He says there are practical martial arts, such as judo and muay Thai, and more esoteric ones, such as tai chi. He likes pragmatic martial arts because they solve real-world problems. He doesn’t get into fistfights anymore, but, for example, his judo skills help him when he slips and falls. BPM is pragmatic in that it is the key to solving a business problem. He believes there is actual value in using all the theories he learned in school and making them subservient in creating a business platform that allows people to more efficiently and consistently solve everyday problems, thereby giving people and the community more opportunities.

This is one area of computer science that can be attached to how people work. Things can be automated to reduce the amount of repeatable and mundane tasks so they can focus on more important things. People worry that automation will swallow up everyday jobs, but instead, it removes drudgery and frees up time for more critical work. It can also create jobs. These same fears existed when Ford automated computers were introduced, but they ultimately made new industries. BPM should be fully embraced rather than feared.

The best way to start operationalizing processes is to use the scientific method of articulating the problem. In business process management, you draw pictures via a business process modeler. Max likes Camunda Business Process Modeler, which is downloadable for free with just a little notation to learn. In the modeling program, you draw steps that articulate the different systems and how they work.

In a hiring process, for instance, you start with a pool that defines interested parties, such as the candidate, the IT manager, and HR. Inside the pool are “swim lanes,” each containing one player who can do things. You can think of these as LDAP groups. Then you start laying out your business process: first, a candidate applies for the job, then HR might do a review, then an IT manager will review. Approved decisions are noted along the way. After the top-level, significant steps are in the model, you can get down into more detail regarding more articulate and nuanced processes, like a split interview, one for technical and one for management.

![bmp image](./bpm.png)

The modeling program generates XML behind the scenes as you draw all of these diagrams. This XML is run time interpretable by BPM machines; as you are drawing the diagram, it can become an executable process.

The human element is still in this loop but using a BPM system like this makes it clear where processes can be automated, such as checking job history or running a criminal background check. The model also allows flexibility and experimentation. For example, suppose the subject matter expert says that they don’t want to run a job check and criminal record check simultaneously because the criminal record check is expensive, and the job check is cheap. In that case, it’s easy to change to move the job check first and require a decision before the criminal record check. As changes are made, you build consensus and a true story that becomes progressively truer the more you experiment.

While the tool looks like a drawing tool, it is a modeling tool that lets you draw pictures and simulates them on the back end. So you can run this process and see all the different decision points and where they lead. The model will also tell you that you can’t deploy if you haven’t done something correctly.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
