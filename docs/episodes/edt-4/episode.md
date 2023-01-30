---
layout: posts
title: "Information Management Maturity Model"
number: 4
permalink: episode-EDT4
has_children: false
parent: Episodes
nav_order: 4
tags:
    - Data Management
    - Information Management
    - Information Maturity
    - Data Governance
    - Data Warehouse
    - Data Lake
    - Data Mesh
    - Data Lineage

date: 2020-06-30
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "In this episode, we will talk about the Information Management Maturity Model and how we can use that model to help our organizations move forward. This model can help you identify where your organization is and where it is going in its information management strategy, ultimately deriving maximum business value from your data"
---

{% include soundcloud.html id="edt4" title="#4 Information Management Maturity Model" %}

{% include youtube.html id="UaUSrh433-Y" %}

---

Developing a data strategy can be difficult, especially if the state of your company’s information management or trajectory is unclear.  This Information Management Maturity Model helps CDOs and CIOs identify where they are in their information management journey and their trajectory. This map can help guide organizations as they continuously improve and progress to the ultimate data organization that allows them to derive maximum business value from their data.
The model represents a series of phases, starting from the least mature to the most mature: Standardized, Managed, Governed, Optimized, and Innovation. Many times, an organization can exist in multiple phases at the same time. You can determine where the majority of your organization operates, and then identify your trail-blazers that should be further along in maturity. Use these trail-blazers to pilot or prototype new processes, technologies, or organizational structures.


## Standardized Phase

The Standardized phase has three sub-phases: basic, centralized, and simplified. Most organizations find themselves somewhere in this phase of maturity, so look at the behaviors, technology, and processes in your organization to find where your organization might fit.

### Basic

Almost every organization fits into this phase, at least partially. Here, data is only used reactively and in an ad hoc manner. Additionally, almost all the data collected is stored based on predetermined time frames, often indefinitely. Companies in this basic phase do not erase data for fear of missing out on some critical information in the future. For example, we were working with a company recently that has 30 years of email backups, about 12-10 terabytes, that they are afraid to get rid of. This is not an uncommon practice. 

These attributes best describe this phase:

* Management by reaction
* Uncataloged data
* Store everything everywhere

### Centralized (Data collection Centralized)

As organizations begin to evaluate their data strategy, they first look at centralizing their storage into big data storage solutions. This approach takes the form of cloud storage or on-prem big data appliances. Once the data is collected in a centralized location, data warehouse technology can enable basic business analytics to derive actionable information. Most of the time, this data is used to fix problems with customers, supply chain, product development, or any other area in your organization where data is generated and collected. 

These attributes best describe this phase:

* Management by reaction
* Basic data collection
* Data warehouses
* Big data storage
* Basic big data analytics (?)

### Simplified

As the number of data sources increases, companies begin to form organizations that focus on data strategy, organization, and governance. This shift begins with a Chief Data Officer’s (CDO) office. There are debates on whether the CDO fits in the company under the CEO or CIO. Don’t get hung up on where they sit in the organization. The important thing is to establish a data organization focus and implement a plan for data normalization. Normalization gives the ability to correlate different data sources to gather new insight into what is going on across your entire company. Note that without normalization, the data remains siloed and is only partially accessible. Another key attribute of this phase is the need to develop a plan to handle the massive volume of data being collected. Because of the increase in volume and cost of storing this data, tiered storage becomes important. Although in the early stages it is almost impossible to know the optimal way to manage data storage, we recommend using the best information available to develop rational data storage plans, with the caveat that this will need to be reviewed and improved once the data is being used. 

These attributes best describe this phase:

* Predictive data management (beginning of a data-centric organization)
* Data normalization
* Centralized tiered storage

## Managed (Standard Data Profiles)

In the Managed phase, organizations have formalized their data organization; data scientists, data stewards, and data engineers are now on the team and have defined roles and responsibilities. Meta-data management becomes a key factor in success at this phase, and multiple applications can now take advantage of the data in the company. Movement from a data warehouse to a data lake allows for more agility in development of data-centric applications. Data storage virtualization allows for a more efficient and dynamic storage solution. Data analytics can now run on data sets from multiple sources and departments in the company. 

These attributes best describe this phase:

* Organized data management (Data org in place with key roles identified)
* Meta-data management
* Data lineage
* Data lake
* Big data analytics
* Software-defined storage (storage virtualization)

## Governed

The Governed phase is primarily reached when an organization has a centralized approach to data and achieved a holistic approach to governing and securing it. The CDO works closely with the CSO (Chief Security Officer) to guarantee that the data and security strategies are working together to protect the company’s valuable data while making it accessible for analytics. Data is classified into different buckets based on criticality, secrecy, or importance. Compliance dictated by regulations is automated and applied to data across the organization. Increased visibility into data usage and security increases with the joint data and security strategies and tactical plans. Basic artificial intelligence is being used widely in the organization, and business decisions are inferred by data. Data can now be gathered and cataloged from all over the company including Internet of Thing (IoT) devices on the company’s physical assets. 

These attributes best describe this phase:

* Data Classification
* Data Compliance
* Data Security
* Basic AI
* Distributed Data Virtualization / IoT

## Optimized

As organizations’ data collection continues to increase, they need to find efficiencies in automation and continuous process improvement. Automation of data processes is the primary target in the Optimized phase. Specifically, the automation of annotation and meta tagging data decreases the time to derive value from the data. Data has now become too large to move to one centralized place, and a “distributed data lake” architecture emerges as the optimal way to manage data. Machine learning is key in this phase to begin providing information to decision-makers to help optimize business operations and value. Application and data are deployed on network, storage, and compute infrastructure based on historical information and AI models. 

These attributes best describe this phase:

* Automated meta tagging
* Distributed data lake
* Data Inference / ML
* Data-driven infrastructure

## Innovation

The ultimate organization is in the Innovation phase. It is not just driven by data, but creates new products, offerings, and services based on learnings from data inside and outside their organization. (removed redundant sentence here) This phase is when AI/ML provides invaluable advantages. There are three sub-phases in Innovation: insight, prescriptive, and foresight.

### Insight

Insight is data-driven decision making based on what you can see is actually going on in your ecosystem, for example, in your supply chain, product development, or manufacturing.

### Prescriptive

While insight is valuable, it requires human interaction, understanding, and intuition. In the next level, prescriptive, your artificial intelligence is suggesting what you should do based on the insight. This can play an important role in your whole organization, as decisions are data-driven from the supply chain all the way through customer acquisition.

### Foresight

In this crowning step, the data actually helps create the future. For example, foresight would allow an IT organization to project how much capacity it will need in the future based on historical norms and even factors such as changing conditions with its competitors. Foresight requires a lot of data and training of models, but leads to the ultimate goal of real-time enterprise.

These attributes best describe this phase:

*	Insight (data-driven decisions)
*	Prescriptive (data-driven business)
*	Foresight (create the future)
*	Deep learning
*	Real-time enterprise

## Conclusion

It’s common to feel stuck in one phase and overwhelmed at the amount of change necessary to move into a new phase of maturity. Each step forward, however, is valuable. For example, perhaps you are in a Centralized stage and can look at meta data management. Is there an opportunity to move beyond just cleaning the data and now augment it as well? This type of progressive thinking will move you forward on the chain on maturity in managing your information. 


<details>
<summary> Podcast Transcript </summary>

<p></p>

</details>
