---
layout: posts
title: "Collaborative Medical Research with Confidential Computing"
number: 40
permalink: episode-EDT40
has_children: false
parent: Episodes
nav_order: 40
tags:
    - Confidential Computing
    - Distributed Analytics
    - SGX
    - Healthcare

date: 2021-02-24
guests:
    - Darren W Pulsipher
    - Nick Bhadange

img: thumbnail.png
summary: "Breakdown the barriers to accelerating medical research for the cure to cancer with confidential computing. Nick Bhadange, Technology Specialist, AI-Vets and Darren Pulsipher, Chief Solution Architect, Public Sector, Intel, discuss the need for confidential computing in healthcare and the potential benefits through use cases."
---

{% include soundcloud.html id="edt40" title="#40 Collaborative Medical Research with Confidential Computing" %}

{% include youtube.html id="owwhD3g7xRE" %}

---

## Why Do We Need Confidential Computing?

The current computer infrastructure is built with a premium on sharing and openness: the internet is free and data should be free. That’s been a problem when it comes to security. We have implemented some solutions that work well; we know to encrypt data when it’s stored and when it’s in transit.  Despite that, data can be attacked in various ways while it’s being read, analyzed, and used.

Sensitive data remains vulnerable, whether it’s financial, medical, or location data, both from a visibility standpoint and a data integrity standpoint.

In dealing with data in healthcare, there are additional layers of complexity. There are many rules and regulations such as HIPAA, and every state has their own regulations around medical data as well. Despite the complexity and the number of governing parties, confidential computing is possible where you have the ability to share data among parties that inherently don’t trust each other.

For confidentiality, we need to think about a few different factors: data integrity, data confidentiality, and code integrity.

## Critical Data Privacy and Security Problems

An individual’s healthcare records, especially in the United States, are spread everywhere among doctors, specialists, labs, and hospitals. Most people do not have easy access to their records; it’s next to impossible to create a complete picture of your own health. Confidential computing can help break down these barriers.

First of all, it can ensure that whatever data you share, you can trust that it will be protected from a data integrity standpoint; it’s not going to be modified by anyone. It can be confidential, meaning tokenized or encrypted, but it can still be used for computation. For example, if a party wants to do analytics on some data, they don’t need to know information such as names, dates of birth, or social security numbers. So if those portions of the data can be tokenized or encrypted, they can be shared for analysis as long as the other party is trusted.

This is where security measures such as attestation play a role, so parties can prove their identity. And that attestation can be tied all the way down to the hardware level to the trusted execution environments that the hardware provides. This way, you are not just trusting the transport and endpoint, you are trusting the application and how it will use the data as well.

There are two basic approaches to this. First is application SDK, which means the developer can decide how to partition their code into trusted and untrusted components. The other approach is to have a runtime encryption system which can be built on top of a trusted execution environment, minimizing the effort required to convert a current application into something that can run in that environment.

With a hardware-based trusted execution environment protecting applications and data in use, it becomes very difficult for an unauthorized actor, even if they have physical access to the hardware, root privileges or admin rights to the hypervisor, to gain access to the protected application and data. The confidential computing paradigm aims to allow the removal of even the cloud provider from the trusted computing base. That way, only the hardware and the protected application itself is within the attack boundary.

These computing environments allow the CSPs to leverage the best of what the hardware can offer and the best possible security, over which the end user has absolute control. Each party can determine its own policies and the hierarchies of policies such as state and federal, and each provider of information can determine which policies apply and to whom.

## Real-World Evidence Clinical Study

Pulling all the data together and making sense of it is a big challenge in the healthcare industry. The number of privacy settings and data sharing settings that are in place among the different providers, devices, geographical locations, etc. makes it currently impossible.

AI-Vets, Intel, and some partners are working together on this problem. The brilliantly simple architecture allows for use across disparate environments, types of data and policies, yet is able to perform centralized analysis.

An example of our implementation is one small proof of concept: How do you analyze across multiple parties such as hospitals, research environments, and labs, each with their own data and trials they may be running in a clinical environment? For example, how can we find any correlation among people who take drug X, say for diabetes, and have condition Y, say cancer, when drug X has nothing to do with the treatment of condition Y? These two sets of data would not be in the same place because they are handled by different providers.

If, however, the providers were part of an ecosystem where they could determine what policies they want to apply at their endpoint, we could have a centralized application, a central research portal, which has connections to these endpoints. There would be third party key management and attestation to verify each other’s credentials and authorizations, so all parties can trust each other.

That’s one aspect of the trust, but we also need to protect the data that will be pulled out, queried, and transmitted. To accomplish this, we can manage data and applications inside secure, encrypted enclaves. The data is handled using the policies each user sets, such as obfuscating birthdays, social security numbers, etc. This information can be tokenized so it turns into complete garbage in unauthorized hands.

The central portal can perform a query that spans multiple endpoints and pulls different types of data together into its runtime system and does an analysis on that. So rather than having to pull everything into a data lake and then doing analysis, it’s done in real time. There is no waiting for data to be published or cleansed first by applying all those policies; it happens dynamically and on the fly.

This allows for tremendous insights. During the pandemic, for example, if we had to wait every day to get the data and run complex analysis on it, that would be hard. If we were able to tap into live data across all these different systems all over the country and around the world, yet be able to share it securely, we could come up with some unique insights that would not be otherwise possible.

We’ve already seen this in some POCs for clinician sites that we did with our partner Fortanix. They have a product line that makes it easy for different entities to define their policies in a confidential computing environment and verify each other’s identities and manage keys and trusts. The concept of trusted execution environments has been around for some time, and it’s gone mainstream, so it’s become easier to leverage. The use cases for this are fantastic.

## Automated COVID-19 Detection from Chest X-ray Images

In some use cases, it’s not just the data that needs to be secure, but also the intellectual property associated with some specialized algorithms.  For example, to automatically detect COVID from X-ray images, there would be radiological data, patient data, and there may be a proprietary algorithm to do the analysis. The enclaves can protect both the data and the applications from prying eyes.

The secure enclave also protects the other machines in the network because if someone pushed something nefarious out onto the end nodes, the key management system would prevent it from being exchanged because it’s not properly attested. Parties choose exactly which data sources the enclave can talk to and it’s locked down, both from what comes in and goes out.

## Electronic Health Records (eHR)

Health records are a big mess in the United States, with unenforceable paper HIPAA agreements etc. and everything spread across different entities. A use case that may be a good model for us to follow is from the German government. They have mandated that health care data must be stored in electronic health records, and those applications must be deployed in trusted execution environments. The patient is the end user and determines what data is available and to whom.

That level of granularity in terms of what is available to the end user is tremendous. And not only is all of that data being collected and shared from the different systems, it’s in secure enclaves, so it’s completely secure from the outside world. If someone unauthorized did get access to the data itself, it would be completely meaningless.

These trusted execution environments are the first step in the direction to controls that are easily understandable and easily enforceable. 


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
