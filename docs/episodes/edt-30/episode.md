---
layout: posts
title: "Application Portability with OneAPI"
number: 30
permalink: episode-EDT30
has_children: false
parent: Episodes
nav_order: 30
tags:
    - Artificial Intelligence
    - AI
    - AIML
    - DevOps
    - OneAPI
    - AIOps
    - Software Developer
    - AI Developer
    - Portable AI

date: 2020-11-17
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "With oneAPI, Intel has created a unified software environment for development, geared toward data processing. Gretchen Stewart, Chief Data Scientist, Public Sector, Intel, discusses this technology with Darren Pulsipher, Chief Solution Architect, Intel, that eliminates the need for using a different language for different architectures."
---

{% include soundcloud.html id="edt30" title="#30 Application Portability with OneAPI" %}

{% include youtube.html id="JZYP2jxQY78" %}

---

With oneAPI, Intel has created a unified software environment for development, geared toward data processing. It is data parallel programming based on an open source C++. Multiple kinds of libraries such as Intel’s MKL, DNN, and other open sources are part of the oneAPI tool kit, along with accessories such as a CUDA translator. You can develop software in oneAPI and then point it to the different libraries depending on what it is you are doing. It has extracted away the complexity of learning a different language for different architectures.

## oneAPI Industry Initiative – Alternative to Single-Vendor Solution

Basically, a software engineer can write code once and it will run on different processors:  CPU, GPU, FPGA, NPU, and VPU. Depending on the architecture and libraries you are using, there could be a recompile, but no code rewrites are required.

## Powerful API Libraries 

This version is just the first step; Intel and others will continue to design with the addition of AI accelerators, for example. The idea is that it will evolve to give developers much more flexibility, and that abstraction will allow many people to be able to more simply design and code, especially from a data science and AI perspective.

Practically speaking, a software engineer could write something on their laptop, try it out there, then use that same code and run it on a cloud fully loaded with neural processors, GPUs, or FPGAs. This could be especially useful in the public sector where engineers are writing special apps that process on the edge, maybe with an FPGA. They won’t have to have a full environment to do their work.

Another exciting aspect is that once Intel gets the machine learning built in, oneAPI could go through the code and specify which portions would be best on different processors. It would push the code out to the right places for the best speed and performance.

## oneAPI Industry Initiative – Alternative to Single-Vendor Solution

There are a lot of AI frameworks out there, but oneAPI takes any kind of code migration from something proprietary to an open-source programming language. It is based on SYCL and developed under a whole industry consortium called Khronos group, so that’s a kind of development framework.


## Powerful API Libraries

OneAPI has twenty to thirty libraries such as MKL, libraries for neural networks and machine learning, open CNN or DNN. All are open, part of the larger consortium.

In addition, Intel is in the process of adding the tensorflow framework and libraries into oneAPI. Many frameworks have already been optimized by Intel and they’re being incorporated or using the same libraries so users can utilize it or build on to it.

## Resources

Intel made oneAPI generally available at the beginning of Nov, 2020, and it was a highlight of the Super Computing virtual convention November 17-19.



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
