---
layout: posts
title: "Application Portability with OneAPI"
number: 30
permalink: episode-EDT30
has_children: false
parent: Episodes
nav_order: 30
tags:
    - aiml
    - devops
    - compute
    - technology
    - process
    - oneapi
    - aiops
    - developer
    - people

date: Mon Nov 16 2020 16:00:00 GMT-0800 (Pacific Standard Time)
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "With oneAPI, Intel has created a unified software environment for development, geared toward data processing. Gretchen Stewart, Chief Data Scientist, Public Sector, Intel, discusses this technology with Darren Pulsipher, Chief Solution Architect, Intel, that eliminates the need for using a different language for different architectures."
---

{% include transistor.html id="3d30cd84" title="#30 Application Portability with OneAPI" %}

{% include youtube.html id="JZYP2jxQY78" %}

---

<p>With oneAPI, Intel has created a unified software environment for development, geared toward data processing. It is data parallel programming based on an open source C++. Multiple kinds of libraries such as Intel’s MKL, DNN, and other open sources are part of the oneAPI tool kit, along with accessories such as a CUDA translator. You can develop software in oneAPI and then point it to the different libraries depending on what it is you are doing. It has extracted away the complexity of learning a different language for different architectures.</p>
<p></p><h2> oneAPI Industry Initiative – Alternative to Single-Vendor Solution</h2>
<p>
</p>
<p>Basically, a software engineer can write code once and it will run on different processors:  CPU, GPU, FPGA, NPU, and VPU. Depending on the architecture and libraries you are using, there could be a recompile, but no code rewrites are required.</p>
<p></p><h2> Powerful API Libraries </h2>
<p>
</p>
<p>This version is just the first step; Intel and others will continue to design with the addition of AI accelerators, for example. The idea is that it will evolve to give developers much more flexibility, and that abstraction will allow many people to be able to more simply design and code, especially from a data science and AI perspective.</p>
<p>Practically speaking, a software engineer could write something on their laptop, try it out there, then use that same code and run it on a cloud fully loaded with neural processors, GPUs, or FPGAs. This could be especially useful in the public sector where engineers are writing special apps that process on the edge, maybe with an FPGA. They won’t have to have a full environment to do their work.</p>
<p>Another exciting aspect is that once Intel gets the machine learning built in, oneAPI could go through the code and specify which portions would be best on different processors. It would push the code out to the right places for the best speed and performance.</p>
<p></p><h2> oneAPI Industry Initiative – Alternative to Single-Vendor Solution</h2>
<p>
</p>
<p>There are a lot of AI frameworks out there, but oneAPI takes any kind of code migration from something proprietary to an open-source programming language. It is based on SYCL and developed under a whole industry consortium called Khronos group, so that’s a kind of development framework.</p>
<p></p>
<p></p><h2> Powerful API Libraries</h2>
<p>
</p>
<p>OneAPI has twenty to thirty libraries such as MKL, libraries for neural networks and machine learning, open CNN or DNN. All are open, part of the larger consortium.</p>
<p>In addition, Intel is in the process of adding the tensorflow framework and libraries into oneAPI. Many frameworks have already been optimized by Intel and they’re being incorporated or using the same libraries so users can utilize it or build on to it.</p>
<p></p><h2> Resources</h2>
<p>
</p>
<p>Intel made oneAPI generally available at the beginning of Nov, 2020, and it was a highlight of the Super Computing virtual convention November 17-19.</p>
<p></p>
<p>

<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
