---
layout: posts
title: "Elastic Search & Intel Optane DCPMM"
number: 17
permalink: episode-EDT17
has_children: false
parent: Episodes
nav_order: 17
tags:

date: 2020-08-31
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "Darren Pulsipher shows how he increased Elasticsearch performance using Intel%92s Optane Persistent Memory in 100 percent app direct mode. His tests show an incredible performance increase of 2x. By doubling the throughput capacity, you can greatly decrease the number of servers in your Elasticsearch cluster."
---

{% include soundcloud.html id="edt17" title="#17 Elastic Search & Intel Optane DCPMM" %}

{% include youtube.html id="R5TUrX4BcD8" %}

---

Recently, I ran some tests with Intel’s new technology called Optane DC Persistent Memory (PMEM) with Kafka. By using Optane in a non-traditional way, mounted as a file system, I was able to get a massive improvement in throughput. Check out my podcast about it here. (can you put a link here?) I tried the same thing with Elasticsearch to see if I could achieve similar performance improvement.

Elasticsearch is a highly scalable search and analytics engine that allows for the distribution of data across multiple nodes to scale out the solution and support more substantial amounts of data. In other words, it is a distributed metadata manager, primarily used to do log analysis. Elastic itself is a great tool for normalizing data into JSON format. I can push any kind of data into Elastic and it can span over a distributive cluster. It is not a message bus like Kafka, but instead, indexes the data you have coming in. Since Elastic is storing this data on drives, I realized I could use the PMEM in the same way that I did with Kafka.

## Intel Optane DC Persistent Memory

Intel Optane DC Persistent Memory comes in DDR4 format, so it fits right in your server in a DDR4 memory slot. The modules come in 128, 256, and 512 gigabytes, so in a two-socket system, I can have 6 terabytes of PMEM. One important feature is that the hardware is encrypted and tied to your CPU with that encryption, so it’s secure and highly reliable. It is already being used to make some profound changes in the way it’s being used in tools in a lot of databases, such as in Oracle’s Exadata platform as well as SAP HANA.

## Support for Breadth of Applications


There are several ways to use this technology:
The first is memory mode, which extends the footprint of a server. It uses the PMEM just like normal memory. The DDR4 memory acts as a cache to the PMEM. In this mode, the speed is comparable to DDR4; in most applications, you won’t see a change.

The second mode is app direct. In app direct mode, I can write an application so that it writes directly into PMEM, bypassing time-consuming steps.

The third mode is using app direct mode to create a non-volatile memory file system that sits right on the memory bus, which is many times faster than the NVMe bus or even the SATA bus.

Using this third mode, I had to learn a bit about the architecture of Elastic to find out which parts I should run in this ultra-fast file system and which I should leave where they are. I also wanted to know if I could make those changes with just the configuration file.

## Using Linux Kernel

First, I had to learn how to use the Linux kernel commands for manipulating this PMEM.

With the Intel persistent memory control (ipmctl) command, I found I could configure and manage the PMEM so that I could allocate it to run in memory mode, app direct mode, or a percentage in memory mode.

The other command is non-volatile memory device control (ndctl). This allows me to create namespaces and regions in that PMEM I created, so I can mount that region as a device. Then I can mount that device as a file system.

## ESRally Performance Testing

I found ESRally, a benchmark tool, to use in my tests. The first time I set up the test, I ran ESRally from my normal SATA drive, where Elastic was running everything out of the PMEM drive. I got some performance improvement, but what I found was that because I was streaming data off the SATA drive that was stored in my ESRally, I was limited by how fast I could push data into Elasticsearch. So it wasn’t Elastic that was slowing down, it was ESRally because my SATA drive was so much slower than my PMEM drive. I moved ESRally onto the PMEM drive. This improved the performance, and I got some interesting results.

## Testing Constraints

To see what the effects of this PMEM ultra-fast drive would be on Elastic, I ran the test on one machine. This removed network variability which eliminated network bottlenecks as a limiting factor. I decreased inter-service communication, which reduced replica bottlenecks, and ran all inquiries on PMEMs which eliminated the variability of the SATA drive.

## Optimal Performance (100%) App Direct

First, I allocated all of the PMEM to app direct mode so I could mount the whole thing as a file system. I used 128 gigabyte DIMMS, so I had a drive with 1.5 terabytes I could use. I knew from my previous test with Kafka that I get better performance with 100% app direct mode rather than 50%.

Median Thru put (should be Throughput – might want to change on slide) docs/sec

Using the ESRally statistics, I took the median throughput on documents per second compared to the number of concurrent races I was running at the same time with producers and consumers.  I got some good numbers with the SATA drive, comparable to other published tests. With the PMEM Drive, I was able to ingest almost twice as many documents per second. This is pretty incredible considering there were no changes to code, just a configuration change.

## Service Response Time

The other result was response times to functions. As expected, as the number of concurrent races running at the same time increases, the response time to those queries or functions goes up. But with the PMEM, the response time is almost twice as fast. From this simple test, I learned that where you are storing the data that Elasticsearch needs (PMEM or SATA) does have an effect on response time.

## Conclusion 

Using Optane Persistent Memory in file system mode to increase performance and decrease costs of Elasticsearch servers requires minimal hardware and software configuration changes and no changes to Elasticsearch or underlying applications. Doubling your throughput capacity of Elasticsearch means you can decrease the total number of servers in your Elasticsearch cluster, reducing your total cost of ownership.

## For More Information

For more detailed information, check out the link in the podcast to the document that we created in response to these test results. You can also contact me at darren.w.pulsipher@intel.com or on LinkedIn @darrenpulsipher.


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
