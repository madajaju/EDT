---
layout: posts
title: "Digital Transformation in 2022"
number: 77
permalink: episode-EDT77
has_children: false
parent: Episodes
nav_order: 77
tags:
    - Artificial Intelligence
    - Comms
    - Data Management
    - Edge
    - Multi-Cloud
    - Cybersecurity

date: 2022-02-17
guests:
    - Darren W Pulsipher
    - Gretchen Stewart
    - Anna Scott

img: thumbnail.png
summary: "Intel’s Darren Pulsipher, Chief Solution Architect, Dr. Anna Scott, Chief Edge Architect, and Gretchen Stewart, Chief Data Scientist discuss the six pillars of digital transformation in 2022: multi-cloud computing, edge computing, artificial intelligence, machine learning, cyber security, data management, and comms. "
---

{% include soundcloud.html id="edt77" title="#77 Digital Transformation in 2022" %}

{% include youtube.html id="-UsayFp-UwY" %}

---

As the Chief Data Scientist for Intel’s public sector, Gretchen spends her days talking to customers about their data challenges, data management, data governance, the ethics around what they are doing, and responsible AI.

Anna’s six years at Intel have been focused on IoT and the edge, with the last three years in the public sector. Both agree that 2022 is going to be an exciting year filled with game-changing possibilities.

Darren, Gretchen, and Anna each represent different parts of digital transformation with customers but came together to provide a common way to talk about the topic, with six pillars of digital transformation: multi-cloud computing, edge computing, artificial intelligence, machine learning, cyber security, data management, and comms.  They agree that these are going to be the areas of big transformations in the coming year. Intel is deeply involved with all of them, as they have built the hardware and software to support each of the pillars. The pillars are interwoven, and Intel plays a key role in leading the industry forward.

Intel’s hardware is the underpinning for the majority of the cloud providers. From a software perspective, Intel has optimized the common frameworks that people use for AI or ML or deep learning to be able to best take advantage of the hardware underneath. In some cases, performance is ten to 100 times better based on Intel’s software.

Not only has Intel provided hardware to edge and comms, especially in 5G, but has augmented those with software reference architectures. In addition, Intel tries to make the ecosystems work for everybody. There is a strong focus on open systems in a non-proprietary way, making it easier for new entrants and existing players to have an expanded footprint in these new markets and offer exciting advances.  Intel is one of, if not the number one, contributor to the open-source software community.

## Cyber Security Pillar

Implicit in Intel’s hardware designs are security features and capabilities to make sure customers in the ecosystem can protect their data in all of its different permutations.

Security is never static; it’s always evolving. Intel alone is not going to solve an organization’s security problems. Security is an interplay with what you do with your hardware, how you bring in the right software elements and the boundaries and policies of your organization.

Intel focuses on multiple areas but a foundational role is in hardware root of trust and authentication. Many features can be built in directly to accomplish that. A step further is trusted or transparent supply chains that Intel can share with customers that instill a high degree of confidence. Those capabilities are getting better all the time and Intel is always working to make progress.

Cyber attacks are top of mind for many customers because of recent breaches. Intel has security such as trusted execution and secure enclaves. They have a whole set of capabilities for the type of security you want to do such as encryption, without taking a big performance hit. There is a whole matrix of capabilities, including a different set of requirements on the edge because of the loss of the physical security of the data center.

Architectures with zero trust are becoming the frameworks that are especially prevalent in the public sector. For the Department of Defense, zero trust is a mandate. Intel has many capabilities that feed into zero trust.

One size does not fit all with security, but it is clear that bolt-on security is a thing of the past. Security must be built in from the beginning and must be continually iterated. Organizations must constantly ask whether they have the right protocols set up, whether they have the right threat detection tools, and whether there is trust all along the supply chain. All of this is integral.

## Edge Computing Pillar

Now that there is so much that can be done with AI, ML, and different algorithms, it’s exciting to see how we can exploit those things at the edge and optimize the architectures to deliver around those use cases.

There are some really simple models where everything lives in the cloud, and just the data gathering is done at the edge. If the connectivity allows it, then the latencies can match the applications. The bulk of the compute can be cloud-centric. There are, however, countless use cases where this makes no sense because of the sensitivity of the data or latency requirements. So, there are interesting conversations about how to figure out optimal architectures for the edge and what’s happening with the cloud and network.

For example, could we have a seamless architecture of gathering, using, and processing data immediately to provide intelligence? Can we incorporate that into the next round of trainings so the model will be continuously updated? How fast can we make that loop? Is it viable? Do we need all of our training on the cloud?  If all the training is on the cloud, what is the right interval for dropping those updated models back down?  And can the edge be lightweight enough to use the stuff generated on the cloud? The edge is still very complicated, and there are many possibilities and fascinating questions.

## Artificial Intelligence Pillar

AI and ML enable the edge to do so much more than anyone previously considered. One product is not always the right answer: It’s about fit for purpose. The use of open source is critical and being able to take advantage of microservices to run algorithms at the edge.

For example, if you have algorithms right at the edge doing the read work, you’re talking about traffic flow. The cadence of red, yellow, and green lights can change on the fly based on how many cars are going through, and at the same time collect data to pass back to a larger data center that could then do retraining. By the end of the week, maybe it makes sense to add some additional microservices or algorithm tweaking. Then that container goes back down to the edge and you can respond better and continue to learn.

Also, when talking about fit for purpose, bandwidth, latency, and form factor are all considerations.

Crops yields are a good example. A customer collects data that goes to a data center. They are working on the models, but it doesn’t translate into letting them know that they need more fertilizer or that there are current challenges with sun and rain. That means the formula needs to be changed. You need the crop yield data, the information, the algorithm, and the microservices in a much smaller form factor. The latency and bandwidth are different, yet you can have a small unit in the middle of a field collecting that data and responding back to, for example, the flow of water or fertilizer needs to improve crop yields.

Hopefully, this year, more of the edge designs will become standardized. With FlexRAM and 5G, there are standards, but everything else is the wild West. Many people are designing interesting things, but they are not designing in a way that makes it easy to have those microservices in a container and ML and AI kinds of algorithms. In some cases, you need multiple algorithms weighted in a different way, changing every week based on new data and the new training. We need to be able to do that in a way that it doesn’t matter who built a device. Creating standards not only in AI and ML data but at the edge will help explode capabilities.

## Comms Pillar

The commercial side of 5G will lead the way with 5G on phones everywhere. There is still a lag time, however, for having the type of user equipment to do different types of applications for edge or enterprise, for example. Intel is standing up their first 5G networks with partners that are more cutting edge and less on the commercial side. Although their commercial partners have had these going for a long time, private networks that are controlled for a specific purpose are being liberated and applications are being built out. 2022 is the year when these things will become actualized.

## Data Management Pillar

Data that used to take hours or days to ingest, prepare, analyze, and act upon can now take minutes or nanoseconds. You can also leverage different models, and when weights change, you can quickly act and consume the data and provide better services. Moving data, managing that data, and operationalizing your AI and ML are part of what data management brings to the world.

## Multi-Cloud Pillar

The multi-cloud pillar does not mean cloud services providers in this context. It means infrastructure in general and how to abstract that infrastructure away to deploy new capabilities across the edge, across a cloud service provider, or even across your own data center infrastructure. The goal with the multi-cloud architecture is that you know the key users and more importantly, how the data is managed.

Different clouds have different capabilities, and depending on use cases, may use different clouds for different purposes. Intel has cloud solution architects that help customers optimize workloads among the cloud offerings.

All of these pillars are intertwined and work together. Look for future episodes where Darren, Gretchen, and Anna continue this conversation. 


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
