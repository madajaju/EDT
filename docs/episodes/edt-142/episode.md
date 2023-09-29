---
layout: posts
title: "Data Protection with Confidential Computing"
number: 142
permalink: episode-EDT142
has_children: false
parent: Episodes
nav_order: 142
tags:
    - cybersecurity
    - technology
    - sgx
    - confidentialcomputing
    - dataprotection

date: Wed Jun 07 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Anna Scott
    - Ibett Acarapi
    - Jesse Schrater

img: thumbnail.png
image: thumbnail.png
summary: "In this episode Dr. Anna Scott interviews Jesse Schrater and Ibett Acarapi about how to protect data using confidential computing."
description: "In this episode Dr. Anna Scott interviews Jesse Schrater and Ibett Acarapi about how to protect data using confidential computing."
---

<div>
<h3>Listen Here</h3>
{% include transistor.html id="3217af7f" title="#142 Data Protection with Confidential Computing" %}

{% include youtube.html id="U89t0CbBgv8" %}
</div>

---

in place to ensure that only those who are authorized can access certain data or systems. However, even with those controls in place, those with elevated privileges, such as cloud admins or sysadmins, still have access to sensitive data and systems. This is where confidential computing comes in, as it adds an extra layer of protection against malicious insiders or those who may accidentally cause a breach.

Controlled access refers to limiting and monitoring access to sensitive data or systems based on authorization and authentication protocols. Privileged access refers to when someone has elevated privileges or administrative rights that allow them to access sensitive data or systems beyond what is normally authorized or controlled.

Confidential computing helps to eliminate this privileged access by creating a hardware-based execution environment or trusted execution environment that prevents unauthorized access or modification of applications and data. By using confidential computing, organizations can maintain control over their sensitive data while still taking advantage of cloud computing, edge computing, and multi-party compute without compromising security. It's an important capability that ensures the protection of sensitive data for organizations in the digital age.

Confidential computing is a new technology that allows users to maintain control over their data even when it is stored in third-party servers such as those used in cloud computing. With confidential computing, users can encrypt their data while in memory, thereby protecting it even from privileged users and rogue administrators. This means that even if an attacker gains access to the server, they will find the data to be in an encrypted state, thus safe from prying eyes. Confidential computing is especially important for sensitive data such as medical records or financial information.

Confidential computing relies on hardware-level encryption, which provides a much stronger protection than software-based encryption. Since hardware encryption is implemented at the processor level, it requires no additional software or drivers and thus places minimal performance overhead on the system. Confidential computing is also very easy to use since it works transparently with existing software and applications.

The benefits of confidential computing are many. Since data is encrypted while it is being processed, sensitive information is not visible to third parties, thereby keeping it private and secure. Confidential computing can be used not only in the cloud but also in edge computing environments. As we continue to see an increase in the amount of data being generated and stored, the need for secure and trustworthy computing environments becomes even more important. Confidential computing is one of the technologies that can help achieve these goals.

Confidential computing is an essential component of a zero-trust architecture. A zero-trust framework operates under the assumption that a cyberattack can happen at any given moment, and thus, there is no such thing as a trusted resource. Each user and device must be authenticated repeatedly before every interaction, regardless of whether they have already been verified. Confidential computing provides an additional layer of security as it aims to protect data from cyberattacks and security breaches by ensuring that only the necessary places have access to it. This is achieved by bypassing the operating system and cloud stack and speaking directly to the chip, which manages access to memory.

Intel has been at the forefront of confidential computing with the development of SGX and tDCS. These technologies fall under the larger bucket of privacy-enhancing technologies that aim to provide solutions in the space. Fully homomorphic encryption is another solution that addresses the problem purely from a cryptography perspective by keeping data always encrypted.

What makes cutting-edge computing and trust execution environments unique is that they are available broadly today in production mainstream workloads with very little performance overhead. Being able to take a native workload, even in an unchanged format, and run it within an encrypted and isolated environment is a powerful tool for organizations to protect their data.



<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople process and technology.</p>
<p>On today's episode,increasing data protectionwith confidential computing,with special guest host Dr.</p>
<p>Anna Scott, and guests</p>
<p>Jesse Schrader and Ibett Acarapi.</p>
<p>Hello and welcome.</p>
<p>Thank youso much for joining today on our podcast,</p>
<p>Embracing Digital Transformation.</p>
<p>Today, we are going to go overa really important topic,and this is confidential computing.</p>
<p>I am very fortunatein having to really qualified guestswho really knowthis space backwards and forwards,and they're going to help us understandsome of the high levelparts of confidential computethat really hopefully help us really knowhow does this fit in the world,how can we take advantage of itand why is it a really importantcapability?</p>
<p>So I would like to do some quickintroductions.</p>
<p>And so, Jesse,if we could start with you and thenplease just do a quick introductionand then we'll kick itoff with the first question.</p>
<p>Sure.</p>
<p>I'm Jesse Schrader.</p>
<p>I'm responsiblefor our go to market of our securitytechnologies here at Intel,specifically focused in the data center.</p>
<p>Confidential computing is one of my babiesthat I've been shepherdingsince the very beginning.</p>
<p>My background is I.T.</p>
<p>I've been doing it for over 30 years.</p>
<p>I actually started my careerin the highly classified Air Forceintelligence systems.</p>
<p>And so that has rolled through in hereinto Inteland excited about the technologieswe have to talk about today.</p>
<p>Beautiful in bit.</p>
<p>Yes. Hello.</p>
<p>I knew that.</p>
<p>And I then now I'm that cloud securitylead for Americafor covering all the America sector.</p>
<p>And we talk about security and we go deepdive into confidential computing.</p>
<p>And my previous experience in securityhas been both at Intelworking in the client sectoras well as that Cloud Solutions architect.</p>
<p>And now, as you know, expanding that rolemore focus in securityin some of Iwhich is a very exciting sector as well.</p>
<p>Perfect.</p>
<p>Good. Well, welcome to you both.</p>
<p>We're really excited to have you.</p>
<p>So just incase the folks that are listeningdon't have a really good understandingof whatwhat we mean by confidential computing,that I was hoping you could just give uskind of a high level overviewso folks know what we mean by that.</p>
<p>Yeah, this is my favorite questionbecause confidential computinghas been around for a whileand it has expanded and it has developedinto different capabilitiesand different architectures. Sobeginning from thebeginning, we look at datathat is being protected, addressedthen in transit and top adventurecomputing really is protecting datain use, bringing the whole secure cyclewhen you're using the data.</p>
<p>So and then I like the definitionbecause then it'show is it being definedis how it's being architectedin the solutions, the technologiesthat's offering in the different sectors.</p>
<p>Right?</p>
<p>So according to the confidential competinginformation,the definition is it protects data in useby performing computationin a harder based,attested, trusted execution environment.</p>
<p>And I think many we know it's like,okay, we'reperforming computation in a hardware basedattached to today's environment.</p>
<p>But as I'm trying to wrap my head around,what does it really do?</p>
<p>What the trusted executionenvironments are,the isolated environmentswhich prevent unauthorized accessor modification of application and datawhile they use.</p>
<p>So what this definition and I'm really</p>
<p>I am really excited about thisbecause I had the privilegeto actually work with our awesome teamat Intel,who collaborated with Microsoft Azure.</p>
<p>When we're bringing SGX</p>
<p>Confidential computing to their customers.</p>
<p>And this was even before a confidentialcomputing consortium was formed.</p>
<p>So after confidential computingconsortia came in, I was excited about itbecause,you know, now we have tech leaders,big technology and collaborationthat are coming togetheras hardware vendors, cloud providersand software developersto accelerate the adoptionof that trusted execution environmentand how it can actually helpin the technologiesand capabilities in the security sector.</p>
<p>So if we think about itin a more familiar sector,the most familiar waythat people think about it inthe security practiceis maybe thinking about a perimeter.</p>
<p>So where we trust what's in that perimeterand not what's outside and confidentialcomputing brings the parameter downto the virtual machine level.</p>
<p>So depending on what architectureyou're looking for, dependingwhat that definition is, for example,bringing that down that perimeteris what we recently announced,which is Intel today,which is now in preview in Azure.</p>
<p>So that's now down to the parameter levelin the virtual machine.</p>
<p>But then we can also do single applicationwhere only the applicationis being trusted to access the datato that granular level.</p>
<p>And that's Intel SGX.</p>
<p>So that'skind of the high level,the architecture and the different levelsand what you can actually bringto that parameter levelof it.</p>
<p>And just anything to add to that?</p>
<p>Well, I would just say,you know, that the big value here is,you know,if you air gap your systems,you'll you'll definitely reduce your risk,but you're also goingto limit your efficiencyand your insightsthat you can get out of the data.</p>
<p>And confidential computingis definitely another layer of security,another layer of protectionthat can reduce risk.</p>
<p>But it's really more about datatransformation.</p>
<p>It's about being ableto get access and leverage,the kind of the full capabilitiesof your data assets,even when they are sensitive dataand even when the processingmay be happening in on infrastructurethat you don't have direct control overor that is in an otherwisemore potentially compromisedarena.</p>
<p>So, you know, it's covenantcomputing is about getting the valuesout of cloud computing,edge computing, multi-party compute,even though you've got datathat may be regulated or otherwise is,you know, proprietary</p>
<p>IP and have levels of sensitivity.</p>
<p>One other big advantage of leveragingconfidential computing is the protectionagainst malicious insiders.</p>
<p>And sometimes they're malicious insidersand sometimes they'reinnocently making mistakes.</p>
<p>But butcloud admins, sysadminswho have elevated privileges,could potentiallybe a source of additional riskwhere they can bypass thattraditional authenticationand authorization controls.</p>
<p>And so confidential computing,basically weeds,all of that type of privileged access outand so that you cannot leveragethat to get access to the dataand that that's apowerful implication,especially with many of the breacheswe've seen latelythat have been in the newswith the US government, militaryand things like that,being able to minimizewho could get access to that dataand kind of weed out a whole sysadminarenain the whole cloud stack and malwarearena is a really powerful concept.</p>
<p>So is there a differencebetween controlled access and privilege?</p>
<p>Access? Yeah, absolutely.</p>
<p>So I mean, we know that the whole securityarena is set up aroundcontrolling accessand we have lots of systems and policiesand procedures and tools in placethat are all aroundidentifyingwho should have access to the dataand when and from where and that's athat's a continuing art thatthat's always expanding within it overall.</p>
<p>But there's sort of this dirty secretor this difficultarea on the side,which is privileged access.</p>
<p>And if you can get admin or routepermissions to a system,you may be able to get your hands on keysor on the datathat's sitting in memoryin an exposed state,and that can basically bypass all of therest of the permissions systems.</p>
<p>So it's a veryit's an areathat's kind of ripe for attack these days.</p>
<p>We've we've been long encrypting datawhen it's in storage,long encrypting datawhen we send it over the network.</p>
<p>But while we're processing itactively in memory, it's in the clear.</p>
<p>It's typically in an unencrypted state.</p>
<p>And so those with privileged accesswho could get their hands on iteither, you know,like I said, through malwareor some other direct access,can potentially see that data.</p>
<p>And it's unencrypted formwithout the protections that wouldnormally be afforded by authenticationand authorization from.</p>
<p>That's huge. Thenwhy is that so importantand cloud to be able to use somethinglike confidential compute?</p>
<p>Because it sounds like it's we'redefinitely not restricted to to being ableto use that type of data protectionthat Jessie what you were just saying.</p>
<p>But I know within Intel and I it'syour confidential computeis pretty much synonymous with cloudso that can you maybego into a little bit of detailabout why that so and whythat's so important in that environment?</p>
<p>Yeah, I think it comes due to the trustissues, right, where it's like, Oh,you're giving your data to the cloud.</p>
<p>And most people are like,</p>
<p>Oh, I'm going to to the cloud.</p>
<p>I'm not going to be losingcontrol of that data.</p>
<p>But really using confidential computingand with the different, you know, virtualmachine and application level,you can still migrate to the cloudand you can still have that trust boundaryand you can still be able to confidentlybe able to have control of your dataeven when you're migrating to the cloud.</p>
<p>So I think it's kind of havingbringing that back how much you might yethow how much you might be leavingbecause data is very sensitive,but with confidential computing,you have that control of your data.</p>
<p>You are able tostill be the owner of that dataand also isolated from other placeswhere you can.</p>
<p>You have to interact in the cloudand not have to expose your datato any sensitive datato any parts of the stack we have.</p>
<p>I'll just addthere are plenty of usages ofconfidential computingthat involve on prem and things like that.</p>
<p>It's not just a cloud arena,but cloud really drives homeone of the big values,which is fundamentallywhen I'm using the cloud,</p>
<p>I have a workload, I have datathat's mine, and yet it's going to resideon somebody else's system, right?</p>
<p>That system is providedby a cloud service provider.</p>
<p>They are the ultimate controllersof that system.</p>
<p>It's their data center.</p>
<p>They've got admins, they've got a hoststack that supports my instances.</p>
<p>And so by definition</p>
<p>I've got a set of thingsand I'm having to rely on somebody elsewho I don't knowto to provide those extra protectionsand controls.</p>
<p>One of the things I've heard outragecomputing referred to as is makethe public cloudyour private cloud, right or private cloudinside the public cloud,because essentiallywhat it's doing is it'sputting the control at the data level.</p>
<p>And I'm saying I am controlling my dataand I don't really care where it existsbecause wherever it exists,they don't have access to that data.</p>
<p>Even if they had malicious intent,they still don't have access to that data.</p>
<p>I'm keeping control of the dataeven as it sits somewhere else.</p>
<p>That's great.</p>
<p>Could you give a real world exampleof how using confidential computingand that that would help drive thathome? Sure.</p>
<p>I mean, there's, you know,lots of examples out there.</p>
<p>A couple of kind of quick onesthat come to mindthat the it's beena really interesting story in the Germanhealth care system because they've beenmaybe one of the last in the worldstill keeping most of their country'spatient health care records on paper.</p>
<p>And security has beenone of the big issues therebecause going to a digital formatcould potentially also open upprivacyconcerns and general management concerns.</p>
<p>And so they have nowfinally embarked on a projectand actually far down the lineon this projectdo finally digitizeall of the country's patienthealth care records,which have a lot of private data in them.</p>
<p>Obviously, and are undera lot of regulation and controls on that.</p>
<p>And they're using confidential computingin the cloud to providea technological control over that data.</p>
<p>So that just as I described,even as that data sits in the cloudand the cloud admins and the cloud stackand any potential vulnerabilitiesthat come into play withinthe cloud are still not going to be ableto get access to that data.</p>
<p>So it's providingadditional risk protection.</p>
<p>So on, on something that is, you know,is very sensitive and very importantto keep to keep private.</p>
<p>That's that's a great example of sortof the cloud side of it.</p>
<p>We've also seen, though, in the arena ofjust protecting secrets and especially inedge compute arenas, a very largeglobal social media companythat I won't name.</p>
<p>But, you know, theyyou know, they have basicallycontent delivery networkall over the world.</p>
<p>And that means they have to run systemsthat sit at the edge for them.</p>
<p>And, you know, little data centers,telecoms, etc., all over the world.</p>
<p>And soand yet they have keying and encryptionand management protocols and,you know, private airand a lot of thingsthat run to manage that control planeand that sensitive IP for their company.</p>
<p>And so beingand so they're using Intel SGXto protect that management planeeven as it runs in the edgein, you know, hundreds and hundredsof data centers all over the worldthat are not actually owned by them,but they're well into them.</p>
<p>And really tosee, because this is, you know, until SGXis the only technology in the industrythat can provide is really smart asand you know, there are the onesin different architectures,but this is really where it shinesand where it's like a solutionnow that exists and is already.</p>
<p>So can you can you explain?</p>
<p>Because one of the things</p>
<p>I don't understand well is, oh,</p>
<p>I know SGX is really goodabout creating trusted enclavesand that that ishas a very small perimeterand a very small trust boundarythere for a very small attack surface.</p>
<p>Right.</p>
<p>But is there additional securitythat comes from thatbeing a hardware security featureas opposed to being a software,a software way of creating that enclave?</p>
<p>You know, is thereis there really a differentiation thereor are those roughly equivalent?</p>
<p>So I'm I'll I'll take that one.</p>
<p>You know, another saying I often useis securityis only as strong as the layer below it.</p>
<p>So you can have the best applicationsecurity in the world.</p>
<p>But if you have a vulnerabilityin your operating systemor in your hypervisor,that can potentially expose the data.</p>
<p>Right?</p>
<p>Well,continue down the layers of the stackthat we don't think about as much right.</p>
<p>Under under that operating system, there'sfirmware running and under that firmwarethere's hardware.</p>
<p>Each layer could potentially exposedthe layers above itbecause they have to trust those nodes,lower layers.</p>
<p>They don't have control over them.</p>
<p>If you keep going down the stack,you get down to the lowest layer possible.</p>
<p>The immutable layer.</p>
<p>That doesn't changeand that's the silicon.</p>
<p>There's nothing below it, right?</p>
<p>And so that is the perfect place to home.</p>
<p>These core security technologies.</p>
<p>And one of the things that's happeninghere is</p>
<p>Intel, SGX, Intel, tDCS.</p>
<p>What they allow is for the applicationto basically bypass the entire system,stack, bypass the OS, bypassthe hypervisor and speak directlyto the chip to instructions in the chipthat manages access to memory.</p>
<p>And so if there's a vulnerability in the</p>
<p>OS or a vulnerability in the cloud stack,it doesn't matter because the OSand the cloud stack are not involvedin the transaction.</p>
<p>It's happeningdirectly between the application and that.</p>
<p>That's amazing. Okay.</p>
<p>So if you were to home it anywhere else,like say you were at a home,this solution in your hypervisoror you were at a home in in the OSa vulnerability belowthat could still expose this dataand that's whywe put it all the way down in the chip.</p>
<p>And you're seeing that from Intelis really the first to bring thiscapabilityto market on a mass scale with Intel SGX.</p>
<p>But you're also seeing othersilicon vendorsand everybodybasically taking that same approach.</p>
<p>It really is the core to the definitionof what is confidential computing.</p>
<p>Now, that's amazing.</p>
<p>Thank you. Thatthat is a really good clarification.</p>
<p>And I want to take this like, well, zerotrust is all over the place today,like with the government mandatesand with this standardsin the public sector,we have even more force aroundmandates to actually say zero trustis something that's got to be applied.</p>
<p>I know that that in itselfis just a massive subject.</p>
<p>And that's that'swhat we're going to cover today.</p>
<p>But I do think it would be really helpfulif that could you just kind of goover and say,how does confidential compute fitinto a zero trust type of architecture?</p>
<p>And is this a valuable capabilityin that space?</p>
<p>Yeah.</p>
<p>So we have the zero trust architectureand the zero trust strategy, right?</p>
<p>So before zerotrust approach to security was, well,a more traditional like we look intothe primary defense strategyand the perimeter defense organizationprotect the boundaries of its privatenetwork with firewalls and multilayerand software security solutionsin order to regulate and filter trafficthat's coming inand out of that public network. Right.</p>
<p>So in that traditional way,once a user or device has been verifiedand admitted to the private network, it istypically treated as a trusted resource.</p>
<p>Your aim, you know,you went through all that verifications,all the different stacks.</p>
<p>You're good to go.</p>
<p>However, now with, you know,with zero</p>
<p>Trust security framework is designedaround the assumption that a cyber attackcan happen at any moment,even inside,even once you're coming insideand there is no such thingas a trusted resource,there's not a you know, how youget a minute once and you're good to go.</p>
<p>It's actually currently continuouslylooking into what is being validated.</p>
<p>So it's protecting the frameworkand design to apply security.</p>
<p>The technologies on the hardware,the software, the dataand the uses across the organization'sinfrastructure.</p>
<p>And each user device must be authenticatedrepeatedly before every interaction.</p>
<p>So in every different phase and saying,well, there's no need for me to trust youor assume that there should be trustor actually that you should be given.</p>
<p>So I me have my own processin my own layer, in my own spaceto actually verify this.</p>
<p>And so that's, you know, the strategyis overall zero trust strategy.</p>
<p>How do you implement thatin the capabilities and technologythat you're using?</p>
<p>Well, you want to apply that by designand by architecture.</p>
<p>Those technologies are alreadyallowing youto do that or alreadydoing that for your architecture.</p>
<p>When you're designing in your environment.</p>
<p>And confidential computing does that.</p>
<p>It's already designedwith a smaller trust, right?</p>
<p>So you don't have to be likejust you explain, you have to be trustin the OS the cloud providerbecause it'sbringing the whole way of identifyingand actually making sure that onlycertain places that need to have access tothis sector would have it.</p>
<p>So those are the two different waysthat the strategy and the architectureactually come togetherfor confidential computing.</p>
<p>Perfect.</p>
<p>Yeah, And that's super helpful, right?</p>
<p>Because you know, the world has changedso much of how we haveto navigate this worldto be able to really protect our dataas some advanced tools like the onesyou guys are talking about.</p>
<p>And and I did want to kind of follow upon that a bit, too,and say, this one's for you, Jesse.</p>
<p>You went into some detail around SGX,right?</p>
<p>There are other technologiesthat play in this space.</p>
<p>Can you give us just a brief overviewof what this looks like?</p>
<p>And then you a fullera fuller landscape, right?</p>
<p>Yeah.</p>
<p>Coming into computingand some of the technologiessuch as SGX and tDCS,they kind of fall into this larger bucket,which the industry calls privacyenhancing technologies.</p>
<p>And and, you know, really the wholeindustry is recognizing this need.</p>
<p>And so everybody is attacking itand going after itto try to provide solutions in the space.</p>
<p>And confidentialcomputing is a big part of that.</p>
<p>There are other solutions.</p>
<p>Intel has beennot just doing confidential computing,but also contributingtowards the standards and the definitionsin a lot of the other spaces, includingthings like fully homomorphic encryption,which basically kind of addressesthe problem purely from a very advancedcryptography perspective in keeping dataalways encrypted.</p>
<p>And we're really excitedabout the revolutions in that spacethat that are going to be coming in thein the years aheadand are actively contributing in that.</p>
<p>I think what makes cutting edge computingand trust execution environmentsuniquein this overall arena, though, is thatthey're availablebroadly today in productionmore mainstream workloads on those.</p>
<p>Right?</p>
<p>It's a now thing and they comewith very little performance overhead.</p>
<p>Performance overheadis measured in the lowsingle digit type overheads thatare much easier to work into.</p>
<p>You know, current business processesthat something that may haveorders of magnitude of, of cryptographythat has to executeand is going to need to be acceleratedin the years ahead.</p>
<p>So being able to take a native workloadeven in an unchanged format and run itwithin this encryptedand isolated environment,you know, on instancesthat you can get from Microsoft Azureor from Googleor whoever today is really powerful.</p>
<p>Well, yeah, a lot to look for.</p>
<p>It sounds like there's another podcastwe need to do a little morehomomorphic encryption.</p>
<p>I mean, I will</p>
<p>I will follow up with you on that.</p>
<p>Thank you for listening to Embracing</p>
<p>Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcast, Insider YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org.</p>
<p>Until nexttime, go out and do something wonderful.</p>

</details>
