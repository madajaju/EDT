---
layout: posts
title: "Use Cases in Confidential Computing"
number: 143
permalink: episode-EDT143
has_children: false
parent: Episodes
nav_order: 143
tags:
    - cybersecurity
    - sgx
    - confidentialcomputing
    - ai

date: Thu Jun 15 2023 02:00:00 GMT-0500 (Central Daylight Time)
guests:
    - Anna Scott
    - Ibett Acarapi
    - Jesse Schrater

img: thumbnail.png
summary: "In this episode of Embracing Digital Transformation Dr. Anna Scott continues her conversation with Ibett Acarapi and Jesse Schrater about Confidential Computing and their uses in AI, and software development."
---

{% include transistor.html id="896bc6e3" title="#143 Use Cases in Confidential Computing" %}

{% include youtube.html id="NZWVC4VLWL4" %}

---

Confidential computing is a revolutionary technology that allows data to be processed without exposure. It is advantageous in artificial intelligence, where sensitive data is involved in model development and deployment. It protects AI models and confidential data, enabling the development of better training models and diverse data sets. Collaboration between experts and enterprises is also affordable through confidential computing, which allows the creation of larger models and protects proprietary data.

The technology is available today and can be used by businesses through various providers, including Azure, GCP, IBM, and Alibaba. OEMs that offer servers for on-prem use also have SGX boxes that can be provisioned with SGX. Confidential computing development expertise is unnecessary to take advantage of confidential computing capabilities, as plenty of solutions allow native workloads to be migrated through the lifted shift model or cloud-first solutions.

To get started with confidential computing, businesses can put the requirement in their RFP and contact a vendor that offers it to incorporate it into their solutions. Many vendors already offer confidential computing solutions, and Intel is happy to participate. Confidential computing provides a new way to manage data, allows businesses to leverage the benefits of cloud or multi-party computing on sensitive data, and ultimately provides a safer environment for companies to handle confidential information.

Confidential computing is a pioneering technology rapidly growing in popularity, given the increasing numbers of data breaches being perpetrated in today's ever-connected world. Confidential computing allows you to isolate sensitive data within secure computing enclaves or "containers," which are difficult to access even if an attacker gains access to the host system. Confidential computing is about bringing an additional layer of security to computing environments that require the robust protection of sensitive information or Intellectual Property (IP).

As the podcast explains, there are many ways to implement confidential computing, from leveraging the toolsets provided by cloud service providers (CSPs) to using the services of software security vendors. It's also apparent that more companies are starting to move towards confidential computing to protect their IP and sensitive customer data.

However, the technology is still in its infancy, and its full potential is yet to be unlocked. Experts agree that one of the most exciting areas to watch is the rise of "smart" confidential computing. This refers to an approach that leverages artificial intelligence and machine learning to improve the efficacy and flexibility of confidential computing.

Another area to watch includes the development of advanced threat detection and analysis tools that leverage confidential computing in real-time to improve the analysis of potential threats and accelerate the response to attacks. Whatever the future holds for confidential computing, the technology is evolving at breakneck speed, and its continued adoption is a positive development in the fight against cybercrime.

Confidential computing is a rapidly growing field that promises to protect sensitive data. The industry has evolved and grown so much that now it is worthy of a whole summit dedicated to it. The Combat Edge Computing Summit in San Francisco is the inaugural event to feature confidential computing. It will focus on the future of confidential computing and how it will impact web three, blockchain, and distributed ledgers. Confidential containers are a significant area of cloud-native development, and many products are coming. This technology is now available and ready to use today, and vendors can take your real-life workload data on board. Confidential computing is exciting because it is a natural solution to data security and privacy. Confidential computing technology puts data protection in the hands of users, providing a secure environment that enables data to be analyzed without exposure. As confidentiality becomes increasingly essential, confidential computing will become ubiquitous, and it is something that any organization should use to safeguard sensitive data. So if you're interested in implementing confidential computing in your environment, don't hesitate to reach out and ask for assistance. Confidential computing is doable, and companies like Intel are willing and able to help customers in this journey.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>So if you had mentioned in your introthat you have also been workingwith artificial intelligence,and so I was hoping you could providesome more information to say, you know,how does confidential computingactually work in the worldof artificial intelligence,especially with how you do thosehow you do your model developments,how you do your deployment of those?</p>
<p>Is there is there a role there?</p>
<p>And can you walk us through the relevancethere?</p>
<p>Yeah.</p>
<p>So, know, everyone's really talkingabout artificial intelligence,but everyoneso as we know, you know, liketheir models are going to beas good as your training,as good as your data, right?</p>
<p>So how the virus, the body of your data,how much of ayou're doing your trainingand how big is it?</p>
<p>Right. Becausethen you have like the whole diversity.</p>
<p>So it confidential computing,you're you're able to protect your A.I.models and that confidential datathat you're going to be working thatof course enabling you to providebetter training modelsand be ableto give you a more diverse dataand be able to collaboratewith with other expertsor other even within your own enterprise,to enable more use cases.</p>
<p>Because if you are going of on your siloand you have just one kind of modeland one kind ofdata, you're going to keepgetting the same kind of training models.</p>
<p>You're going tokeep getting kind of the sametraining.</p>
<p>But when you expand that and you're ableto collaborate with others,you're you're getting bigger models nowand you can protect them.</p>
<p>You don't have to be able toyou don't have to be ableto expose everything.</p>
<p>You can, protect your data and be able toalso protect your models,which can be very proprietary.</p>
<p>Right?</p>
<p>So you're enablingalso the developers to be ableto collaborate, enabling the industryto be able to get better models,and you're enabling to actuallyget a lot more fine tuned training models.</p>
<p>You know what those results arein analysisto make better decisions.</p>
<p>So what that sounds like too,is that for these trusted executionenvironments that are fundamentalto confidential compute,they're pretty big, right?</p>
<p>Because if you can deal with datasetsthat or the large type of data filesthat you need for training models,that's that's totally possible, right?</p>
<p>There's not some sizerestriction that says this is only goodif you're like this, you know,if you're really small dataor single image type stuff,you can getyou can get pretty advanced here.</p>
<p>It sounds like a pretty,pretty large size. Yeah, absolutely.</p>
<p>Intel SGX, which has that very granularlevel of control that's targeted towardsjust a single application,can handle memory spacesall the way up to a terabyte.</p>
<p>And then, well, you know, tDCS,which does the isolation at the VM levelhas has no limit other than just the sizeof the instance that you provisioned it.</p>
<p>So, yes, we can definitelywe see full database in memorydatabases running and so around cladesand things like that.</p>
<p>So that is really good news then.</p>
<p>Yeah, fantastic.</p>
<p>So, so we've talked, we've talkedabout how amazing this technology is.</p>
<p>So can you give us some more details?</p>
<p>And I think, Jesse,if you'll start this one off that a bit,if you can, if there's anything toto build on, this is how to work,how to folks actually use this. Right.</p>
<p>What are the best options?</p>
<p>And you, Jesse, you already shared with uslook, this stuff is available today.</p>
<p>The technology is absolutely in market.</p>
<p>So how how would somebody go about saying,</p>
<p>I want this feature, I want to use it,</p>
<p>How do I buy it today?</p>
<p>Yeah, I mean, a huge market hasarisen in this space.</p>
<p>I, I got started on this way back in 2017and it felt like I was a lone voicein the wilderness, you know,feuding.</p>
<p>And that's just not the case anymore.</p>
<p>And and in the early days,it took quite a bit of effort.</p>
<p>If you wanted to leverageconfidential computingand people were doing it, but they werethey were advanced projects.</p>
<p>I remember the famous indictment ofsomebody saying, you have to have a Ph.D.to use.</p>
<p>I remember this to that.</p>
<p>That would struggle a little bit.</p>
<p>But but there was some truth to itback in the day.</p>
<p>And, you know, but but fast forwardto where we are today and, you know,the big Hyperscalerslike Azure and GCP and IBM and Alibaba,they've all got into computing solutionsin the market today.</p>
<p>We've got you know, you can go to Asia'smarketplace provision in SGX instanceand have it up and runningwith a native TensorFlow,you know, work load in Kuberneteswithin an hour.</p>
<p>You don't have to know SGX,you don't have to write any SGX code.</p>
<p>And Bill, you can be running in an hour.</p>
<p>And, you know,you can also go to pretty much all of themajor OEMs that you're used to workingwith to get servers for on prem.</p>
<p>And they're going to have SGX boxesthat can be provisioned with SGXbecause it existson an all of our server CPUs.</p>
<p>And you know, there's also a whole listof global solutions integratorsand software vendors that are servingsegments like, you know, financialservices and health care and governmentand covering all those big usageslike cloudmigration, multi-partyanalytics, IP protection,all of those kinds of things, solutionsin the market today.</p>
<p>So it's a pretty rich ecosystemwith a lot of opportunity nowand you don't necessarilyhave to be a confidential computingdevelopment expertin order to take advantage of it,because there's plenty of solutionsthat allow native workloadsto be migrated, kind of that lifted shiftmodel or for, you know, new greenfield,you know, cloud,you know, cloud first type solutions toto leverage the integrationin a very seamless fashion.</p>
<p>So, you know, one of the big call outs</p>
<p>I make to people about how to get startedin confidential computing is startputting the requirement in your RFPright now to bring this solution.</p>
<p>One of the things we've seenis that most people just flat outaren't aware that this capability exists.</p>
<p>And once they realize that existsand once they realize that, oh,this means</p>
<p>I can manage my data in new waysand get, you know,kind of the advantages of of cloudor of multi-party computeon my sensitive data.</p>
<p>Now I want to find out how I could get it.</p>
<p>And the reality isthere's all these vendors out therealready offering it, right?</p>
<p>So putting in your are these andyou'll get a vendor who will come forwardand deliver it to you.</p>
<p>And that's a great way to get started.</p>
<p>And Intel is happyto be part of that process.</p>
<p>Yeah, that's great.</p>
<p>Yeah.</p>
<p>Also, you know, being part of that,the team that got to help bring thisto collaborate with Azure, it's awesome tobe in this site to bring that awareness.</p>
<p>So I hope that applicationssecurity professionals are jumpingoff their seedsof excitement and all of us.</p>
<p>I really hope thatthey'll I will, you know,</p>
<p>I think I know what competition,if you will, to, you know, whatwhat they do that they're in the out.</p>
<p>But yeah it justis that bringing awarenessand you know if they have any questionor they're just like you know</p>
<p>I don't really know how this can fit intomy did reach out to uswe are more than happy to just talk abouthow is that goingto be fitting into your overall goaland help you do thatagain,the security necessity is incredible.</p>
<p>Like if you look at how datais being used today and back to the stuffthat you're covering about with respectto artificial intelligence,having a way to take advantageof all of the amazing capabilitiesthat are on the cloud with respect to A.I.tools, and do thatin a way where you can trust your dataand trust them all that's developed.</p>
<p>That's just one example on top of the onesthat Jessie had shared earlier where,man, it's super important to to knowthat there's there are more secure optionswhere you can really protect youryour data while you're actually using it.</p>
<p>I did want to ask like so how do how dosecurity software companies fit into this?</p>
<p>It sounds like you really don't needa security ISVto be able to take advantageof of confidential computewithin the cloud environmentsbecause there's cloud environments.</p>
<p>I can already provide this,but I am curious like especiallywhen you get outside the cloud environmentor even within the cloud environment,can you enhance itby working with security software as well?</p>
<p>I I'm just not, I am not at all sure. Soyeah, I think it's some of both.</p>
<p>I mean, we see many end customersleveraging security software vendorsjust as a way to get into the spacebecause as with everything,things need integrationin, they need orchestration.</p>
<p>You know, there's,there's plenty of aspects.</p>
<p>And so leveraging an ACI,like an Accenture or a,you know, Deloitte or Capgeminior some of the software vendorsthat are out therethat specialize in these arenaswho maybe focus in a certain arealike health care, A.I.and so they can take healthcare API modelsand and, you know, kind of integratethose with these added protectionsthat are availablethat certainly is happening.</p>
<p>It's not required.</p>
<p>A lot of organizations are doing iton their own or going directly to the CSPand just getting a provisioned instancewith kind of minimal overhead required.</p>
<p>So there's a, you know, kind of a mixdepending on the levelof granularity of protectionthat people are looking for,that that can vary.</p>
<p>And then we're starting to seea lot of that kind of traditional securitysoftware vendorslooking at confidential computingand not so much to offersome sort of instance orpiece of softwarethat they can offercomprehensive computingas like a container to their customer.</p>
<p>But rather to start protecting their IP.</p>
<p>You know, if they've got a listenerthat sits on the networkthat monitors network traffic,why not protect that inside of an enclaveso they can not be manipulatedby a potential malware attackor, you know,we were bringing some third partysoftware into our environmentfor a security purpose.</p>
<p>Why not protect that inside of an enclaveso that it doesn't introducean additional exposureinto our environment?</p>
<p>So we are seeing a lot of securitysoftware vendorsstarting to leverage confidencecomputing as a way to protect their IPand their solution that againsits in somebody else's network.</p>
<p>Right? Well, okay.</p>
<p>And kind of almost the same thing.</p>
<p>We talkedexcuse me, we talked earlier on to sayconfidential compute has a real strengthwith respectto how do you protect yourselffrom your admins, Right.</p>
<p>And how do you protect your datafrom folks that really should notwho should be in the systemdoing a specific functionbut really should not have the keysto the kingdom type thing?</p>
<p>Is there a connectionalso in terms of how confidential computehelps against ransomware and some ofthe other things that are very top of mindthat are causing peoplea lot of grief these days?</p>
<p>Yeah, ransomware is a, you know,kind of a broadtype of of of attackthat can have many different vectorsand also many different actions in it.</p>
<p>I don't think any singletechnology is a panaceathat just increases the the need.</p>
<p>I think common edge computingis one of the things that can contributeto resistance against ransomware.</p>
<p>One of the things that'scommon in ransomware is, you know, there'sthere's some vector of attack,somethingwhere the person gets into the environmentand then typicallythrough that vector of attack,they get to a place ofof an escalation of privileges.</p>
<p>And once they have that, that allows themto do things like encryptthe data on the disk or move the data offto somewhere else, or it allows themto do greater manipulations.</p>
<p>So if you are sensitive dataor your critical datais protected inside of an enclave,one of the things that's oftennot talked about,we talk so much about confidentiality.</p>
<p>The prevention of the wrong person,being able to read the data.</p>
<p>But what also is includedin confidential computingis theprevention of anybody being able to modifyor manipulateor change the dataof the data.</p>
<p>And so that also has a big implicationor impact against ransomware.</p>
<p>We're often the kind of the entryinto action of ransomwareis manipulation or change or movement.</p>
<p>And so those things are preventedthrough contracting as well.</p>
<p>And then bit, I'm kind of curiouslike what what are you most excited about?</p>
<p>Right?</p>
<p>Because I,like the world evolves every day.</p>
<p>Security feels like it moves fasterthan even technology moves.</p>
<p>And technology is like crazy fast, right?</p>
<p>So how do you how do you see the world ofconfidential compute computing changing?</p>
<p>And what what are the cool stuffthat you expect to see coming up in thein the near future?</p>
<p>What excites me is when I tellthe customers about the technologiesand the capabilitiesand how they like, I can really use this.</p>
<p>This is something</p>
<p>I've been looking for more.</p>
<p>This is something that I canyou show me how to actually get it done.</p>
<p>And another part is with the cloud.</p>
<p>I know the different tools now.</p>
<p>You know, like not too long ago,even a Cloud Solutionsarchitect, there was no pathto be in a corporation after that.</p>
<p>Now there's certificationand there's instructor training.</p>
<p>There's a way that you can actually buildin somebody who doesn't even havea technology background.</p>
<p>There's courses that you can justgoing to check and be very good in techand actually get trained, right?</p>
<p>I think so many courses and you like, Wow,</p>
<p>I had no idea that you can do thatthat transition so quick.</p>
<p>Where would it taken before several yearsnow with this structure paththere is waysand the technologies to allow to do that.</p>
<p>So what gets me really excitedis that where the technology understandingawareness, all those abilities,but also enabling and seeing how customersreally utilizing itand benefiting from it and saying,this is really helpful,this is something I've been looking for.</p>
<p>I understand itand these are the different placesthat I can really use this.</p>
<p>That is that is great to hear.</p>
<p>And Jessie, anything to add to that?</p>
<p>You know, we have thethe inaugural confidentialcomputing event called the Combat</p>
<p>Edge Computing Summit coming upin San Francisco at the end of this month.</p>
<p>And again, it's testamentto how much the market has evolvedto the point where we can supporta whole summit just on that topic.</p>
<p>And in there, I, I know that there'sgoing to be lots of discussionsabout ways that confidential computingis evolving for the future,including big impacts on Web three,blockchain, distributed ledgers, areaslike that.</p>
<p>First, confidential containers area huge area for cloud native development.</p>
<p>So certainlythere's a lot of that development coming.</p>
<p>And you know, the that perspectivethat you know, has as the future comes,cutting edge computingis almost going to become ubiquitous.</p>
<p>I mean, why wouldn't you use it?</p>
<p>You know,you can check the box and and have it.</p>
<p>So those are all exciting.</p>
<p>But I know for me, as somebody who'sbeen working in this space for a while,who has these technologies on our productstoday,what's also exciting isjust that it's a now thing, right?</p>
<p>It's something that can be used today.</p>
<p>It's something that you can go to vendorsand actually landyour your real life workload on today.</p>
<p>And I think that may be the most excitingthing.</p>
<p>I am looking forward towhat's coming in the future, but</p>
<p>I think we've got a big chunk of thatfuture here now.</p>
<p>That's beautiful.</p>
<p>Good.</p>
<p>Well, I we're pretty much close to time.</p>
<p>I did want to do just like a final wrapand say,you know, which we tried to to cover thispretty welland just make sure there's good awarenessaround confidential computeany final comments, anythingthat we missed that occurs to you nowthat you'd like to saybefore we go ahead and close For me,</p>
<p>I think we've done a good jobthat I thank you for inviting us.</p>
<p>For me, it would be nice.</p>
<p>If you have any questions, reach out.</p>
<p>Reach out to us. We areexcited tohelp customers in this journeybecause it is real.</p>
<p>It is doable.</p>
<p>It is where it's helping customers.</p>
<p>And we are looking forwardto, you know, driving that journeywith the customersto enable that in their environmentsand seeing that this is really helpingin their capability.</p>
<p>So something as simple,</p>
<p>I'm not sure where to start.</p>
<p>Just reach out to usand we can get you started.</p>
<p>Beautiful event.</p>
<p>That is great.</p>
<p>I perfect you guys, a wonderful job.</p>
<p>Thank youfor sharing all this information.</p>
<p>I learned a ton, which I super appreciate.</p>

</details>
