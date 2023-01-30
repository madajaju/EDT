---
layout: posts
title: "Decreasing Ingestion Congestion with Intel Optane DCPMM"
number: 16
permalink: episode-EDT16
has_children: false
parent: Episodes
nav_order: 16
tags:

date: 2020-08-25
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "In this episode, Darren talks about decreasing ingestion congestion using Intel’s Optane DC Persistent Memory, and the experiment he conducted with surprising results. It just might change the way we think about programming in the future."
---

{% include soundcloud.html id="edt16" title="#16 Decreasing Ingestion Congestion with Intel Optane DCPMM" %}

{% include youtube.html id="8vFFbBD9tZQ" %}

---

## Service Stack Details

A customer in the automotive industry was having a hard time trying to effectively get information out of their cars and into their data center so that they could do machine learning and analytics. There has been research in this area, but only for a small number of cars, not the customer’s hundred million cars. When I looked at their whole service stack and how everything was coming into the data center, data ingestion became the clear issue: How do I ingest that much data, and how do I do it quickly?

## High Level Kafka Architecture Overview

The customer wanted to use Kafka for their ingestion. Kafka is a broker than can scale well, and the key is that it can handle several producers, different consumers, and a lot of data. Using several Kafka brokers to place and land data in the most appropriate places offers great flexibility.

Kafka, however, was primarily designed for message sizes of about one to 10 kilobytes and the customer’s data was approximately 240 kilobytes per car.  There are work-arounds, but I wanted to bring the whole 240 kilobyte message into the Kafka bus so I could move it as I needed to.

## Performance Best Practices

I looked at the performance best practices of others working with Kafka to see if I could scale it for my customer. Increasing the buffer size to accommodate the whole message is one fine-tuning solution, along with managing batch size for optimal performance. Another successful practice is spreading out the logs. The flexibility of Kafka would allow me to put the data into different topics. I can break the topics into several partitions that I can span over multiple drives.  The question is, then, how many drives am I spreading the Kafka logs over? In addition, I want the fastest drives possible.

An example I examined was LinkedIn. Their published numbers from a year ago are that they can handle 13 million messages a second, or 2.7 gigabytes per second. They say they have about 1,100 Kafka brokers and more than 60 on a cluster, so that’s a pretty big configuration.

## Automotive Space

If I look at the customer’s raw numbers (1.6 million messages per second and 800 gigabytes per second), and compared them to LinkedIn, which is probably not optimized for 240 kilobytes, I come up with 44,000 brokers. If I optimized it, I could probably get down to 4,400 brokers, which is still 240 clusters. That’s a huge amount of machines, so I had to come up with a way to make things faster. With more optimization, I could probably get it down to 400 to 500 brokers, but I wanted to see what else I could do.

## Intel Optane DC Persistent Memory

I looked to our Optane Persistent Memory. It fits in a DDR4 format, so it sits right on the DDR4 bus. It goes up to 512 gigabyte modules, so in one two-socket server, I can have six terabytes of persistent memory. I wanted to figure out a way to leverage this highly reliable technology with great features such as built-in hardware encryption to help me solve this problem.

## Support for Breadth of Applications

There are two modes of operation with this Optane Memory: direct app mode and memory mode. The memory mode is simple. It uses the persistent memory as normal RAM because it’s cheaper than normal DDR4. It's not the same as DDR4, but it’s close enough so that in most applications, you can’t see a difference.  In app direct mode, you can actually write from your program directly into persistent memory. This way, I don’t have to marshal and unmarshal data structures and stream them; I can just push them into persistent memory. I can also mount app direct mode as a file system so it’s on the memory bus, which is much faster than on the IO bus. Now, what can I do with this memory?

## Using Linux Kernel

There are two primary tools available using the Linux kernel: ndctl and ipmctl. Ndctl is a non-volatile memory device controller, and then there is IPM, the Intel Persistent Memory controller, which lets me manipulate and control this persistent memory. I can set it up in the memory mode or app direct mode.  I had a bit to learn about these tools and how they work.

## Ingestion Approach

My first thought was that if I gave Kafka a lot more memory with large buffer sizes, it should run a lot faster. Code changes in the configuration would be unnecessary or minimal.  Another option was changing Kafka to write to persistent memory rather than writing to a file system, bypassing the hard drive. The last thing I looked at was creating a persistent file system using persistent memory and then putting the Kafka logs on this new file system.

The easiest of the three options was the first – more memory. I ran all my tasks with more memory, and there was no change in performance. The reasons why is because eventually my buffers filled up and I had to ride out to a drive. Everything ultimately had to go to the Kafka logs, which was my bottleneck.

The second option involves rewriting code and waiting on approvals, so I jumped to the third option. The results of this experiment where I pointed the logs to this new, ultra-fast file system, were fascinating. Let’s take a look at the process and the results.

## Testing Constraints

To remove obstacles to testing performance, I took network out of the equation by running my test on the same machine that my broker was on. Also, I only ran producers, then only consumers, then mixed, so I could weigh the differences. My goal was not to look at total production improvement, but at an individual broker to see if this drive would really make a difference.

## First Approach 50/50

The first thing I did was take half of my persistent memory into app direct mode and turned it into a file system. I left the other half as memory. I used the commands ndctl and ipmctl and created name spaces. I mounted these file systems and ran my test.

## Changing Message Size

I ran the tests over several different message sizes. I was expecting certain optimization, primarily for 1 kilobyte. I saw that I got better and better performance up to around 10 producers. Past 10 producers, I started saturating the bus and getting some variability. That tells me I was cashing things. I could now compare these numbers to what I ran before on just a SATA drive for the Kafka logs. I also tried our Optane NVMe drives for the logs.

## Technology Comparison

Let’s take a look at the differences. For 240 kilobyte, with a normal SATA drive, it’s pretty flat. I got some improvement, and then it decreased as the number of producers increased. With the Optane NVMe drive, I got a nice peak, almost twice as fast as a SATA drive, which is what I would expect because it's an NVMe bus instead of a SATA bus. The Pmem is almost five times faster than a SATA drive and two and a half times faster than the Optane NVMe drive. That’s because I’m using a memory bus instead of the SATA or NVMe bus.

## Additional Optimization (100% App Direct)

This was running fast and I was quickly filling up this temporary 750 GB drive. Since I needed to run the test a little longer, I went back and reconfigured my machine to do a 100 percent direct app mode so that I could now take the whole 1.5 terabytes.

## Optimized PMEM and 100% App Direct

After I did this and ran the same tests, I got a surprising result. I could add more producers, and my throughput went up almost another two or three times. Now it’s between 12 and 15 times faster than a SATA drive at 25-30 producers at 240 kilobytes message size. This is incredible and would greatly reduce my customer’s need for so many brokers, rows and rows of machines. I ran the test several times because I didn’t believe the results I was getting. I called one of our architects that designed this technology and learned that one reason for the increased speed was when I was using part of the persistent memory as memory, the data would have to go through two or three hops that are not necessary with app direct mode. That creates less contention on the memory bus, and the throughput went up dramatically.

## Call to Action

The end result is that I was able to use Kafka with Optane DC Persistent Memory as an ultra-fast file system to get major improvements in throughput on both producers and consumers.  A single broker can handle 15 times more messages and throughput than before, decreasing the number of servers required to handle large, complex system architectures. It’s time to evaluate your current architecture and see if this would benefit your organization.
 


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
