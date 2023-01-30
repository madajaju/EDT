---
layout: posts
title: "Demystifying 5G, Edge and AI"
number: 62
permalink: episode-EDT62
has_children: false
parent: Episodes
nav_order: 62
tags:
    - Edge
    - Edge Computing
    - 5G
    - Artificial Intelligence
    - IoT

date: 2021-08-19
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.jpg
summary: "Darren Pulsipher, Chief Solution Architect, Intel, discusses the groundbreaking changes 5G will bring to edge and AI with Dr. Anna Scott, Chief Edge Architect, Intel."
---

{% include soundcloud.html id="edt62" title="#62 Demystifying 5G, Edge and AI" %}

{% include youtube.html id="tjuYUh6bJJ8" %}

---

Anna’s background is in the industrial and manufacturing side in information. She has a PhD in chemical engineering, as well as an MBA. She spent 15 years working as a process and design engineer, later doing startup work and engineering management. She has been with Intel for a little over six years, the last two and a half working in the public sector team where she primarily supports Intel’s IoT and edge activities, with increasing involvement in 5G because 5G, along with AI, is dramatically changing that space.

## Network Transformation Foundational to 5G Infrastructure

In the industrial world, IoT was not anything new; it was just hardwired. With systems now moving to wireless, they have the close coupling of IT plus OT to convert analytics, instead of just having a set of process data specific to that OT world. A different set systems now marry that to the business, so all of this is being pulled into the same space. Although there are some very defined differences in use cases and architectures in the public sector such as military and smart cities, there is a common convergence in the analysis, application, and timeframe to make better business decisions.

One reason IoT has taken so long to move out of manufacturing and into other areas is primarily hardwiring cost. Security has also been a roadblock.

5G is now unleashing the IoT and edge world because of cost effectiveness, especially on the consumer side. When it comes to critical business infrastructure, however, it’s a different conversation about how to do it in a way that protects the data. 5G will be transformative, but it's not happening just yet on the commercial side. Part of the gap is because of the delay between when the standards are released and the hardware to take advantage of those standards are produced.

For anyone who has spent a lot of time with 3GPP or other driving standards bodies, this timing is not unexpected. Right now you can stand up a 5G network, but we’re at the stage of doing testbeds where we have to demonstrate the value of 5G. We need to show new use cases that can’t be supported by LTE or by 4G.

## Multiple 5G Deployment Models Deliver Flexibility

Why not just stay with WiFi 6 instead of using 5G? The answer is complicated. Many of the standards organizations that were driving 5G were also driving WiFi 6, so it is a complementary technology. The differentiator is in the equipment, so you need to know the details of your use cases to determine would be the most cost effective. For example, 5G is amazing, but it wouldn’t be best to put a 5G network on a cruise ship because penetration isn’t there for that to make sense. The environment isn’t friendly to any kind of wireless signal, but WiFi 6 with access points makes more sense.

5G is compelling, however, for several reasons and can do things that 4G and LTE can’t. For augmented reality and virtual reality, you need very low latency and high bandwidth to enable more interactive use cases, for example equipment or machine repair. You need a remote expert that is standing looking at a problem that can do video and audio streaming with overlay of drawings and capabilities that are being managed back from a central location or remote location that is bringing all of that knowledge and expertise directly to the point at which you’re trying to do work. That type of use case can’t be done over an LTE network. Bandwidth plays a part, but latency is the driving force. In order not to get sick while using a headset, you have to have really low latencies with no delay or have things go asynchronous.

The LTE and 4G world has changed because of 5G due to how they managed spectrum. One area where this is changing in industry is that it is now possible for a company to get a priority license for CBRS spectrum and stand up their own private network, wholly divorced from the federal major telcos. For example, a large manufacturer can cover a huge space more cost effectively with a private LTE than it can with access points. There are also great benefits such as if you want to reconfigure your space and you don’t want all of your workstations to be hardwired, or say you have to move around enormous pieces of metal such as airplane fuselage in your space that could interfere with WiFi signals, you can stand up the infrastructure to be portable and not fixed to hardwire locations.

Security is a core concern for any organization. Although 5G was not written with security in mind, 6G will be. Luckily, with the capabilities of 5G, we can do a lot around zero trust networking and other security measures that will instill customers with confidence about how their data is being moved across networks.

The 5G standards have changed the problem of a few years ago when wireless infrastructure existed in proprietary hardware and proprietary software, with a licensed spectrum only a few companies that could afford.  Software-defined networking enables the ability to host network infrastructure on common, off- the- shelf hardware. There is no need for specialized hardware as in previous generations. This is also happening on the LTE side with, for example, making the CBRS spectrum available and getting away from the proprietary hardware and software.

Intel spends a lot of time working with disruptors that are using our FlexRAN reference architecture. The FlexRAN architecture becomes the basis for helping disruptive technology to proliferate in the new 5G marketplace because it provides a 5G software stack running on common, off-the-shelf hardware where before, proprietary hardware was required.  Now there is a space with much more openness and portability, and the cost of entry is much cheaper than it used to be. It’s no longer just a few companies controlling everything. Intel and others are trying to open everything up and take advantage of open standards to support all these disruptors and change the entire dynamic.

## 5G Spectrum and Regulation for Tomorrow’s Networks

With improved connectivity, low latency, and high bandwidth, many new use cases will be available. How 5G will be monetized is what is changing across the market. For example, a cloud service provider along with a telco can provide better services for their customers because they are no longer siloed. They are a combined business effort of what really matters: quality and prioritization. Another way to look at this is cloud service providers are buying capabilities that are going to open up network functionality in the same way that telcos are exploring what they can do on the cloud side. Again, this is because the silo is broken down; the data pipe is no longer a set of services.

It’s not clear how all of this is going to fall out, except that it’s redefining what kind of work you can do because of data accessibility, and where those workloads are going to live. There is a huge value in going from edge to cloud seamlessly and doing it in a way that is based on the need of the customer, which is now possible.

## A New Compute Paradigm Supports New Data Demands

5G is unleashing many different architectural models. For example, it gives two options of architectures for AI, whereas before there was only one with limitations.

Without the high bandwidth that is provided by 5G, AI was limited to inference on the edge devices, which required pushing AI models out to the edge devices. This cumbersome restriction increased the AI development and deployment cycle and limits the number of AI workloads that can be leveraged at the edge. With an increase in bandwidth, large data streams from cameras or sensors can be sent back to a datacenter which enables multiple AI workloads to be run and for continuous AI learning to occur. This gives organizations the opportunity run both inference on the edge at the same time improve the deep learning required by so many organizations ever-changing demands on their data.

With AR, for example, 5G means that headsets can be mobile instead of tethered with the same capabilities because 5G allows for the sharing of larger data sets in an untethered world. The data centers traditional walls are being broken down.

If you don’t have a lot of tech support or detailed knowledge of how to keep your systems running, you can run it all in the cloud. If you don’t want your data on the cloud, you can do a version that’s on prem over a private network that gives you all the type of functionality to aggregate and correlate data to provide a high level understanding of what’s happening in your system in a secure, cost-effective way.

Basically, your data can now reside on the edge, in the cloud, on prem, or in what Cisco calls the fog. It doesn’t matter any longer where your application runs, so you can use the most cost effective model. In industrial spaces, for example, there are massive savings in not having a hard wiring component, or by using a private LTE structure rather than WiFi access points. Getting these types of costs down will lead to the ability to have super rich data. These barriers of cost and physical connectivity are what’s been missing for IoT to take off the way everyone predicted.

Anna predicts that for non-control applications, the next two years will be different because of 5G. A simple example is that in industry, someone could take their regular PC out of the office and onto the factory floor and be able to do everything there. 5G will change what’s possible with respect to controls and doing control of robots and machines over a wireless network in the next five years. The next level of transformation will be that you can do control over a wireless network and do it safely and effectively, putting no one at risk. This will take a lot of validation and stringency of review, but it’s on the horizon.

Also, it will be exciting what your favorite cloud service provider and telco are going to do together to change what’s possible from a services standpoint. 


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
