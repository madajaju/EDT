---
layout: posts
title: "Securing your DevOps Pipeline"
number: 46
permalink: episode-EDT46
has_children: false
parent: Episodes
nav_order: 46
tags:
    - DevOps
    - DevSecOps
    - SecDevOps
    - Cybersecurity
    - Zero Trust

date: 2021-04-08
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "In part two of this episode, Darren Pulsipher, Chief Solution Architect, Intel, gives practical tips for securing each stage of the DevOps pipeline, including protecting the hardware and software stacks with hardware root of trust, Security scanning, attested and encrypted containers/VMs. and more."
---

{% include soundcloud.html id="edt46" title="#46 Securing your DevOps Pipeline" %}

{% include youtube.html id="sf0VaCpQLVE" %}

---

## The Attack Vectors

Many attacks happen at the people level. Some of the most recent insidious attacks have focused on phishing and social engineering on individuals inside of DevOps. We need to train people better at all levels. In one case, it was an intern with access to the keys that succumbed to a nefarious scheme. 

Another vector is technology: traditional denial of service attacks, SQL injection attacks, or buffer overflow attacks. The latest incidents use both people and technology to attack the process. They are insidious because they’re happening around the build process and can be very hard to find. They can also propagate malicious code through your customers. To instill customer confidence, organizations must have a strategy to secure the supply pipeline.

## Pipeline Security

Not every build pipeline is the same, but in general, they consist of four stages with environments: development, build, test, and production. These stages are easily broken down into multiple stages depending on the type of product that you are developing, but the environments link to those different stages. 

We need to look at the whole process, which includes software, hardware, and processes, and take a different approach rather than just focusing on infrastructure, which most have done effectively. 

## Host and Infrastructure Security

At the bottom of the stack, you need to secure the hardware in the development and build environment. The test environment will be a little different because you may want to run tests that involve injecting malicious code. Production environments are usually locked down well, especially now that more companies are offering software as a service. In the production and build environments, you need to do all the typical security measures that you would do in production or SaaS environments. 

There are three key elements in these environments. The first is detection. Detection and remediation is a well known safety measure using service logs that use a platform such as Splunk to find anything out of the ordinary. Make sure to do this not just in development environments, but in build and production as well. 

Keep in mind that in the test environment, you will need multiple test environments, some more secure than others on the detection side since you want to inject erroneous code into your testing. Don’t just peanut butter security across all the environments; security profiles can be different for each environment. 

Prevention is the second key. This means being smart with hardware, making sure things are patched properly, having the right security updates, and doing it in an automated way. This should happen across all the environments, including the test environment, and especially in build and production.

The third key is part of prevention: hardware root of trust. A chain of trust can be established from the hardware, through the firmware boot sections, all the way into the hypervisors and operating systems. The root of trust can be carried into the development, build, test, and production environments. This can include secure containers and secure virtual machines.  For example, I like to store my encryption and hash keys in hardware like a TPM module and then also with Secure Guard extension from Intel. Even if someone got into the machine, they will not be able to steal those keys. 

## Trusted Executables

Setting up trusted executables is the next step. This means that you can run security checks against code that is checked in and built, and then check in the hash with those changes. If there has been anything injected into the code base, you can detect it, since there shouldn’t be any changes to code during the build process. 

In a new stage of security checks, you can run static analysis on the code or dynamic analysis on the code or security violations. There are some great tools that you can easily integrate into your typical DevOps pipeline, whether you are using Jenkins or GitHub workflows, for example. 

Once an executable is built, create the hash immediately, and that hash should be versioned with the executable; it should remain the executable that goes through all the testing and pushed into production. That hash will guarantee that nothing has been tampered with. 

## Attested and Secured Images

Typically, there are multiple repositories, or executables, to use for code. The hash that is created at build time is now in the registry, and you can attest these. You can secure those in the images so they can’t be modified.  If someone needs to go back and make a small change, say a label or metadata, it’s important not to make the change and give it the same version number. It’s best to go through the cycle again even if it takes more time than to have manual processes mucking around with your binaries. 

Now, you can take that same binary that you’ve run all the tests on and push it to production. At this point, it is a mistake to rebuild the source code. It’s best to push the original build into the production, or golden, repository. This repository is the only place from which images, binaries, or VMs, for example, should be retrieved. All images should be notarized and attested. If you have confidential VMs or applications, or want to make sure that they only land on certain hardware, you can make those kinds of lockdowns. You can encrypt the VMs, containers, or even binaries and lock them with the key that is stored in your build and production systems. 

## Injecting Security Tools

Security tools must be injected into the build process. Instead of grabbing open source security libraries or recreating ones that already exist, your security engineers should be involved so they can choose tools that can be easily consumed and reused by the development teams. A good example is basic authentication: user login. There should be a common library rather than each application with its own. 

It’s important to treat these security libraries and tools much like you would any other software development program that you are sharing across your organization. Sharing will decrease time and increase security across your whole ecosystem. 

## Build Once, Deploy Security Everywhere

Once you’ve established your development security teams, make sure that you are injecting the policies and tools in all of your products and environments. Great technology exists today that allows you to manage multiple environments. So, when a new application is spun up, it is spun up in a security profile with your own VM or container images as base images that the development teams are using. By configuring security into your VMs or containers into your base images, you get instant security compliance across the different environments. There is also the ability to integrate with security tools, so that if you do find anything unusual in the application, you can notify securitry tools. Don’t try to create security tools that handle one hundred percent of cases, because you will never finish them; go for eighty percent as a strong baseline and create them so application developers can innovate the last twenty percent if necessary, in conjunction with your security team. 

A last bit of important advice is to automate everything that you can, especially in the DevOps pipeline to prevent malicious injections. Protect your pipeline; protect your process. 



<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
