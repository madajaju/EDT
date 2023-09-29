---
layout: posts
title: "The Four Superpowers of Digital Transformation"
number: 93
permalink: episode-EDT93
has_children: false
parent: Episodes
nav_order: 93
tags:
    - cybersecurity
    - aiml
    - multicloud
    - comms

date: Thu Jun 23 2022 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Greg Ernst

img: thumbnail.jpg
image: thumbnail.jpg
summary: "On this episode, Darren discusses the four superpowers of digital transformation with Intel’s Greg Ernst, Corporate VP of Sales, Americas. Ubiquitous compute, Pervasive Connectivity, Cloud to Edge, Artificial Intelligence."
description: "On this episode, Darren discusses the four superpowers of digital transformation with Intel’s Greg Ernst, Corporate VP of Sales, Americas. Ubiquitous compute, Pervasive Connectivity, Cloud to Edge, Artificial Intelligence."
---

<div>
<h3>Listen Here</h3>
{% include transistor.html id="f546d88e" title="#93 The Four Superpowers of Digital Transformation" %}

{% include youtube.html id="dsHVk3jONII" %}
</div>

---

Intel focuses on ubiquitous computing, pervasive connectivity, cloud to the edge, and artificial intelligence (AI). Elements of these four superpowers are mandatory in digital transformation strategies for companies worldwide, so there is great synergy.

## Ubiquitous Compute

Ubiquitous computing is a software engineering concept where computing is everywhere. Not only does it refer to smart personal devices such as phones, watches, and appliances, or data center infrastructure and cloud-based apps, but it’s the idea that enterprise infrastructure that has historically been behind a firewall is now coming into everyday life. Enterprise infrastructure is available to employees on campus, and anywhere they have a device. Even more importantly, the infrastructure can extend to customers to improve their experience.

Intel is looking at what foundational elements should be driven through the ecosystem to achieve a goal of every person on earth having access to a petabyte of data or a petaflop of computing within less than a millisecond of access. Intel is working on the laws of physics, economy, and data sovereignty to make that possible. This will give software companies, cloud companies, and all the companies worldwide a framework for software that will create value for their customers.

## Pervasive Connectivity

In a recent interview, Glenn Kurowski, the CTO of CACI, talked about connectivity and how he sees it unleashing into the space domain. A great example is when Elon Musk flew Starlink over Ukraine to keep them from going into the internet darkness.

With this tremendous computing power, connectivity is crucial. There is satellite connectivity, 5G, and 4G. Still, even within the internet, between states and countries, the question is, how do you traverse through networks and enable pools of computing that are not interconnected? Without connectivity, the value of computing rapidly declines.

To protect this interconnected data, Intel and teams of hundreds of technology companies are collaborating and innovating together. Governments must also understand the laws, rules, and concerns. Intel, for example, employs a sizable force to help lawmakers have those conversations to create laws that protect data. Intel’s ecosystem is vast, and people pay attention when Intel says this security is essential.

Estonia is a good model of a country protecting their citizens’ data but also unleashing that data and providing more for their citizens at a lower cost. There will be a natural evolution to this model, as governments actively protect the privacy and think strategically.

## Cloud to Edge

On the enterprise side is the extension of the surface that businesses can interact with their customers via the cloud to edge. A great example is Omnichannel retail, where a company knows who the customer is, their trends, and what they need. They can recommend additional services with pervasive connectivity from cloud to edge. They could tell the customer where something they are looking for is located when they arrive at the store. Retailers could extend their networks from a data center cloud or on-prem data center to unifying at the edge, creating a mesh network that goes all the way through the store.

Not only would this improve the shopper experience, but the stores could decrease loss by detecting things that are out of stock and the flow within the store. They could place their products in the most advantageous places and monitor, for example, perishable goods to take actions to move products quickly while it’s at their peak.

## Artificial Intelligence

AI is an extension of data analytics and will inevitably grow. Mass amounts of data are created daily, and it is already beyond companies’ abilities to effectively compute. People are only looking at less than five percent of generated data.

With AI algorithms, it’s possible to find patterns with that data to, for example, cure cancer. It might be sitting there because the information is not yet in a spot where AI can use it. There will have to be a new market surrounding centralized, accessible data sets. An organized data brokerage could make centralized data available to multiple companies via the cloud while protecting data privacy, such as patient identification.

## Security of Data

COVID quickly made ubiquitous computing important to employees working from home. That, and the subsequent hybrid workforce, exposed security flaws in the industry. There is currently a significant uptick in funding for security to address the problems and keep up with the expansion of the superpowers. Especially with edge-to-cloud architectures and ubiquitous computing, the attack surface has exploded. The industry can keep up but requires tremendous effort and forward-thinking.

Intel has significant innovations in this space with software guard extensions, security features in silicon, and the ecosystem to take advantage of these things. The ecosystem can build new use cases such as confidential distributed analytics for cancer research or multi-domain analytics, which mean across unclassified, classified, and top-secret data. Before, that data could never mingle. Now it can mix securely and solve problems we couldn’t solve before.

## Intel Software

Many might be surprised that Intel has more than 19,000 software engineers. Intel can keep all of these engineers fully occupied as they operate at three levels: foundational software; languages, frameworks, tools, and libraries; and application-level work.

Most of this technology on the application level is given away in the open-source community, where it is accessible, secure, and optimized.

Go to http://embracingdigital.org for Intel resources related to the four superpowers. 



<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, thisis Darren Pulsipher, chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people, processand technology.</p>
<p>On today's episode, The Four Superpowersof Digital Transformationwith special guest</p>
<p>Greg Ernst, Corporate VP of Salesin the Americas.</p>
<p>Greg, welcome to the show.</p>
<p>Thank you, dear.</p>
<p>It's good to be on for my second show.</p>
<p>I know it's been, what, a yearsince you were on.</p>
<p>I think it is about once a yearthat once a yearyou get to come on the show,tell us how things are going.</p>
<p>Yeah, I get to instead of listening,it gets actually speak.</p>
<p>You become I tell my my team all the time</p>
<p>I listen to this while I run.</p>
<p>So it's been thank you for theentertainment over the last 52 weeks.</p>
<p>Well, they thank you.</p>
<p>Thank you, Greg.</p>
<p>I appreciate your supportin helping me do this, especially today.</p>
<p>We're going to talk about Intel'sfour superpowers.</p>
<p>They really a tie in to public sector.</p>
<p>On my side, I talk about the six pillarsof public sector transformationand four of those pillarsare the four superpowers.</p>
<p>So great minds think alike.</p>
<p>Yeah, exactly. No, no coincidence.</p>
<p>But but as I've delvedeeper and deeper into the public sector,it's just clear that so much of whaton the public sectorside they're trying to solve regardingmission outcomes and how they do it,like you said,aligned to what our four superpowers arethat are very applicableto enterprises as well.</p>
<p>Yeah.</p>
<p>So let's go over with those,what those four superpowers arebecause not everyone listensto every show.</p>
<p>I know that it's a shame everyone should,but they don't.</p>
<p>So let's talkabout what those four superpowers are.</p>
<p>And these are four areas that Intelis really focusing on above and beyond.</p>
<p>They're not going to sound likesilicon at all.</p>
<p>Are they?</p>
<p>Know they're not.</p>
<p>And that's what it's</p>
<p>I mean, for me, it's these four.</p>
<p>I'll just list them real quick.</p>
<p>The concept of ubiquitous computenumber is number one.</p>
<p>And this idea thatit's really kind ofa concept in software engineeringwhere compute is pervasive and everywhere.</p>
<p>So so that would be number one.</p>
<p>Number two is pervasive connectivityand it allows technologythat's dispersed all over the worldto communicate.</p>
<p>Number threeis this concept of really cloud edgeand extending your compute networkas a as an enterpriseor a public sector from cloudall the way to edge.</p>
<p>And then third or fourthare artificial intelligence,which allows businesses and agenciesto take the billionsand billions of bytes of datathat get createdeach day and really extractactionable insights from them.</p>
<p>So at a real basic level,those are the four and dare.</p>
<p>And what I'm seeing is as if we go outand we talk to companiesor public agencies around their digitaltransformation strategy.</p>
<p>There's elements of each for thesethat that's mandatory,it's an underpinning.</p>
<p>And so it'swhat we're working on as a company andwhat all the businesses aroundthe world are doingas part of digital transformationis that there's a great synergy there.</p>
<p>So let's talkfirst about pervasive compute.</p>
<p>I mean, what really does that mean?</p>
<p>Because you're saying ubiquitous, I guessubiquitous computing.</p>
<p>Yeah. You're saying it's everywhere.</p>
<p>Which means what?</p>
<p>I mean, we're talking smartwatches,smart phones, smart refrigerators.</p>
<p>Now that tell me when my milk is bad.</p>
<p>Yeah, right.</p>
<p>Is that what you're talking about?</p>
<p>Well, yeah.</p>
<p>And PCs, data centerinfrastructure, the cloud based appsthat we all have on our phones,whether it's Uber or Twitterwithin the enterprise workday.</p>
<p>And then really the idea of makingthat that enterprise infrastructureand today right now just startingto kind of enterprise and pub sector.</p>
<p>But the idea of taking thatwhat historically was behinda firewall enterprise infrastructureonly accessiblewhile you're on campus to bring thatinto everyday life for the employees.</p>
<p>But more even more importantly,</p>
<p>Daryn, is the customers.</p>
<p>So as we talk to retailers,as we talk to construction orinfrastructuremanagement companies around,how do they improve thatthe customer experience as well.</p>
<p>So it's really kind of extending beyondjust your employeesaccessing the infrastructure.</p>
<p>You're actually extendingthat out to the customers even more.</p>
<p>That's right.</p>
<p>It's employees as well as the customersand and so at Intel, what we're looking atare what are the foundational elementsthat we could drive through the ecosystem.</p>
<p>But one day what we view as achievableis that every person on earth,they'll have access to a petaflops of dataand or byte of data,petaflops, top of compute,all within less than a millisecond access.</p>
<p>And so it's now it's the laws of physics,the laws of economy,the laws, the data sovereignty.</p>
<p>Those are the things now we're working onis, is to make that possible.</p>
<p>And that'll give a frameworkfor softwarecompanies and cloud companiesand all the companies that are worldreally to create valuefor their customers.</p>
<p>You know, that's really fascinatingbecause in a recent interviewwith Glencore of the CTO of CCI,he talked about that same sort of thing,about that connectivitythat connects us all, that allowsthat sort of thing to happen,and that he sees that coming into space,that the unleashing of the space domainis really going to make that happen.</p>
<p>A great example of that,when Elon Musk flew his,you know, StarLink over the Ukraineand kept the Ukrainefrom going into Internetdarkness, that was brilliantand showed the power of that new domainthat is now available.</p>
<p>Yeah, that idea and that brings usin really a second one,which is if you had this computein a in a threw downreally that the big goal of a petabyteless than a millisecond away.</p>
<p>But but but if you have that computeit's got to be connected.</p>
<p>And and like you said, there'sthere's the satellite connectivity,there's 5Gand cellular connectivity or 4G.</p>
<p>And then there's even the concept ofwithin Internet here,within a city,within a state, within a country ofhow do you traverse through networksand enable that constant connectivitybecause that the the pools of compute,if they're not interconnected,the value to humankind just goes downquickly.</p>
<p>Right?</p>
<p>Yeah.</p>
<p>So this should be kind of scary, though,for people.</p>
<p>You talked about datasovereignty in this space.</p>
<p>Isn't that a little bit scaryfor a lot of a lot of peopleand governments that are like, whoa, wait,everyone's connectedand where's their data?</p>
<p>Don't</p>
<p>I want some protection for my people?</p>
<p>How does Intelhow does Intel work through that?</p>
<p>But wellwant first from a technologybut then but then to with the governmentsthemselves understanding the rulesthe laws, the concerns.</p>
<p>It's one of the reasonswhy we we employ at Intel a pretty,pretty sizable force really in countriesto help have those conversationswith the lawmakers of the countriesin order to create lawsthat protect the data,but also continue tofor the for each of these countriesand the businesses in those countriesreally to foster innovation.</p>
<p>But I as you know, they're up.</p>
<p>So I was I was like,we don't do anything alone.</p>
<p>And no, no,we it's a team of teams of hundredsof technology companiesthat are collaborating together on this.</p>
<p>But I think we're kind of the tipof the spear on a lot of this stuff.</p>
<p>We're the ones that are bringingconsortiums together.</p>
<p>Our ecosystem is is vast.</p>
<p>And I think people pay attentionwhen Intel says,hey, this is important.</p>
<p>Estonia was way ahead of everyone elsein this digital transformationand protecting their citizens data,but also unleashing that dataand providing more for their citizensat lower cost and much more effective.</p>
<p>You see that same model pervasivethroughout the Americas as well.</p>
<p>We'll see that as advanced yetas as a scourge.</p>
<p>Do you see it happening as well?</p>
<p>I think it will.</p>
<p>I think it absolutely will.</p>
<p>I mean, it plays closely into the privacy.</p>
<p>And, you know, that that's a spacethat every government active aroundis protecting the privacy.</p>
<p>But then I think a natural evolution fromthere is exactlywhat's going on and what Estonia has done.</p>
<p>And so I do think it's a it'sa natural evolution.</p>
<p>The first ones always protect.</p>
<p>That's just that'sjust human beings. Right.</p>
<p>But then that then the secondis actually thinking strategicallyas a country, as a nation, what to do.</p>
<p>All right.</p>
<p>So let's talk outside of the public sectora little bit on pervasive connectivity.</p>
<p>What other use modelsis this really bring up?</p>
<p>When you say pervasive of</p>
<p>I'm thinking factories, I'mthinking schools, I'm thinking c, I,</p>
<p>I go back to my public sector, right?</p>
<p>Everything but I'm also thinkingroads and freeways that are connected.</p>
<p>I mean, the list can go along.</p>
<p>I think it's is.</p>
<p>Yeah.</p>
<p>I mean, all of those are it is endless.</p>
<p>Right.</p>
<p>But, but for me on on the enterpriseside, it's justand we hit on this earlier,it's the connection ofbusiness services with their customersand the extension of that that surfacethat businesses can interactwith their customers.</p>
<p>And so retail is a great one.</p>
<p>And this concept of omnireally omni channel retailwhere a businesswhether whether I buy from let's just pickone here in the US let's say targetwhether I buy from online on Targetin the store at Targetor Wal Mart or best Buy should nameall of our favorite retailers.</p>
<p>Kroger.</p>
<p>They want oneseamless experience for mewhere the they know who</p>
<p>I am, they know my trendsand they know what I need.</p>
<p>So then they can recommendadditional services in in addition.</p>
<p>And so sothis is what where you couldn't do that.</p>
<p>But without this concept of pervasiveconnectivity, if the only connectivitywas I want,</p>
<p>I can either shop online from my computeror go in the storeif there is no connecting of the systemsare with that pervasive connectivitythat you could see whatthat that experience for me.</p>
<p>Well who I would want that would breakso that would be interesting.</p>
<p>So if I looked at something onlineon the Target websitewhen I arrived at the store, I'd say,hey, this is on aislewith what you were looking atis on aisle five and then six.</p>
<p>Go check it out.</p>
<p>That'd be kind of cool.</p>
<p>But every retaileras it is, they have theirtheir omni channel channel strategies.</p>
<p>Some some are more advanced.</p>
<p>But but as I travel through the Americas,similarto Mexico, Brazil, the US, Canada,it's a regular kind of radio topic.</p>
<p>But again, I that's that and that combinesbecause all of these superpowersif you will build on top of each otherthat service combiningthe ubiquitous computethe pervasive connectivity.</p>
<p>And then the third one which we haven'ttalked through yet, but is this idea ofas a companyextending their networkfrom what today would be primarilya data center cloud, whether on prem,data center or on prem cloud,public cloud,but then also unifying the edge.</p>
<p>And in our target example,it would be,and I should say again, Walmart Best Buy.</p>
<p>But but in those examples,then it's creating a meshnetworkthat goes all the way through the store.</p>
<p>So in the store that means point of salesystems,cameras, sensors, weight weightscales, the whole thing.</p>
<p>Right,all of that, right? Yeah. Yeah, exactly.</p>
<p>All with thegoal of improving the shopper experience.</p>
<p>And soby but then there's also benefitsfor the stores,which is eliminating lossby having cameras,like you said, easier checkoutfor the clients, inventory management,eliminating out of stock,automatically detecting out of stoptraffic flow within the store.</p>
<p>So understanding what the traffic flowpatterns are and then being ableto place products into the right place.</p>
<p>All of those, every one of thoseyou could imagine, if you're not carefulas a business, you setthey could set it up as really a disparatestandalone solutionwhich which would be a mistake.</p>
<p>What they really want to dois really set upan architecture,an edge to cloud architecture.</p>
<p>That's almost as ifyou think kind of one platformand then they can just layer on topsoftware applicationsand that allows a much quicker deployment.</p>
<p>Now I like that.</p>
<p>In fact,</p>
<p>I was talking to a retailer recentlyand their ideas on moving some of thisedge computing outwas to help with spoilagein in their produce sectionas a brilliantand when they were talkingabout the numbers, which I can't disclosebut when they were talking aboutthe numbers on how much fruitgets thrown out or vegetablesget thrown outbecause of spoilage, it's amazingwhat the retailers have to do.</p>
<p>I mean, because, hey, once it's spoiled,it's spoiled.</p>
<p>So if they can do better predictionon when things spoiland look at traffic flow and with thatpervasive connectivity and edge,this is all really changingand being more efficient and moreresponsiblewith the resources that we have.</p>
<p>That's pretty obvious.</p>
<p>If you enable thethe team is stuck in the shelves to easilybe able to stock what they limes,lemons, seafood when they put it outand then there was a record of thatand then a digital record of that.</p>
<p>You can you can quickly see how storesthen can take different functionsto to move the product quicklywhile it's still at its peak.</p>
<p>Right.</p>
<p>And that fascinating use cases there.</p>
<p>We've also talked in factory, too.</p>
<p>There's a lot of things we can doin factories, in manufacturing,with industry, Ford Auto,with edge computing.</p>
<p>Well, there's some great ideas there, too,of a preventative maintenance failure.</p>
<p>You know, predicting failuresand handling the maintenance.</p>
<p>You know, a big you can imagineeven just a company like Intel Digitalcontinuing to digitize our manufacturing,which is for us, it's a long process.</p>
<p>But to be able to have a record of that,know where each processor isby customer and the eventual destinationbecomes a huge servicefor our own customers on manufacturing.</p>
<p>So. All right.</p>
<p>Hey, the last superpowers</p>
<p>I may argue with you, is it really A.I.or is it more data analytics?</p>
<p>So I want you I want you to convince methat it's just really just A.I..</p>
<p>Well, I think it I mean, it isit's more complex data analytics,</p>
<p>I would say.</p>
<p>Okay, there you go.</p>
<p>So you could concept of matrixmath in allowing in</p>
<p>I don't know what point the crossover is,but but at some pointon the number of variablesand number of data setswhere you have to rely on matrix math,</p>
<p>I do think there isa crossover there for a lot for for sure.</p>
<p>But, but it's something I,</p>
<p>I joke with companies all the time.</p>
<p>You know, you can imagine like SAS,they're saying, hey,we've been in the dataanalytics business for decadesand in the AI business for decades,we just called it data analytics.</p>
<p>So Oh yeah, that's accurate.</p>
<p>So A.I.</p>
<p>So what where do you see this going?</p>
<p>The air, air space.</p>
<p>Because air to me is like this blackbox of magic, you know, voodoo magic that,oh, data comes inand the air takes over the world.</p>
<p>And we've got, you know, Skynet.</p>
<p>Well, I do think it's there.</p>
<p>There's definitely a piece of it's upto the humans to make sure the machinesmake the right decisionand that there's definitelyan ethical element to it.</p>
<p>Now, insome of these just their math equationsthat can't be solved by humans,which is the promise, promise of air.</p>
<p>And so so there is again, just as we weretalking around data, there is elements ofethical AI.</p>
<p>There's also elementsof really incorporating</p>
<p>AI into all applications,which is where you were going.</p>
<p>Really an extension oftoday is just data, data analytics.</p>
<p>But, but to me,</p>
<p>I think it's, it's inevitablethat this is going to continue to grow.</p>
<p>There's justa massive amounts of datacreated every day.</p>
<p>Companies, it's beyond companies abilityto really compute.</p>
<p>It will continue to grow.</p>
<p>You know, even at Intel, we're using itmore and more of operations.</p>
<p>You know, it's interesting,</p>
<p>I just sat in an IDC conferenceand they talkedabout the explosion of data.</p>
<p>And today we're only we're only lookingat one of 4.5% of the data generated.</p>
<p>And that's nothing that even seemshigh to me.</p>
<p>Yeah. I mean, yeah.</p>
<p>Can we imagine with A.I.algorithms what we might be ableto find other patterns in that data?</p>
<p>Maybe the cure cured canceris sitting there and we can unleash itbecause we don't have the datain a spot yet that we can use A.I.to use it. Yeah. No,it absolutely will. It'sand I do</p>
<p>I mean, some emerging concepts to thatthat will make it easier, which issome of the concepts aroundlike an enterprise blockchain.</p>
<p>There</p>
<p>I'm very excited aboutand really having acentralized accessible datasets that through permission based.</p>
<p>You can get access to having the datain the same format is also a big one downwhere we so many companies strugglewith their own data, let aloneother third party data sets in order to doexactly what you just said.</p>
<p>So do you see an emergingkind of data brokerageindustry forming around these data sets?</p>
<p>Then they can be hired, right?</p>
<p>I do. I do.</p>
<p>And then we've already seen somesome in market fight around this.</p>
<p>You call it data brokerage.</p>
<p>But that's really that's some ofthese concepts brought through blockchainwhere that that centralized data setavailable via cloudcan be accessed by multiple companies.</p>
<p>And then there's a ledgerof each interaction with that datato to me, it's it's very powerfulunlocking exactly what you just saidwould lead to curing cancer.</p>
<p>So so protecting patients databy making it accessible to researchersall over is without exposing datawithout you.</p>
<p>Right? That's exactly right. Yeah.</p>
<p>So these architectures.</p>
<p>Yeah, these are these are goodarchitectures that exist today, right?</p>
<p>Yeah.</p>
<p>So these are theand so I think all four though.</p>
<p>Right.</p>
<p>Is the again ubiquitous computethen the connectivity of itand then having really a data centerto edge strategyand then also really understandingwhether I call data analytics.</p>
<p>Okay, I use the buzzword, buzzword dujour, right?</p>
<p>So we're going to use it as.</p>
<p>Oh, yeah, yes.</p>
<p>Well, that's what we've been using.</p>
<p>But I'm with you thereand I think it's a data analytics,but I think I mean, to meit's all it's clear.</p>
<p>It's all forour keyto a digital transformation strategy.</p>
<p>One piece we didn't discuss,which I know you're a huge believerand expert on on this podcast,is the secure D Yeah.</p>
<p>Of the data of the informationof the assets as it moves.</p>
<p>And we would be crazy not to spend a few,few minutes just kind of talking throughsome of the trends we see there, right?</p>
<p>Yeah.</p>
<p>Those trends are really this last coveredkind of exposed a lot of stuffin some respects.</p>
<p>COVID made ubiquitous,computing important.</p>
<p>I mean, extremely important. Right.</p>
<p>I need to be able to access my workfrom anywherein the office, at home,you know, wherever.</p>
<p>And that really kind of shined a big lighton ubiquitouscomputing in that hybrid workforcethat we see happening.</p>
<p>And it also exposedour security flaws in the industryas a whole.</p>
<p>Huge, huge, hugegaping holes over the last two years,some in the way that we have beenarchitect doing networks on securityand then some in our reliability on opensource projects and kind of ourwe played this game of securitythroughout this occasion.</p>
<p>Well, if I make it confusing enough,no one will figure it out.</p>
<p>Well, they did.</p>
<p>They figured out some of those thingsand we had some major exposure.</p>
<p>So I see a huge uptick inin the importanceand the money being put into security.</p>
<p>Right now.</p>
<p>It's it's incredible, actually,just to listenand watch what's going on.</p>
<p>You feel like Darren, it's ouras an industryyou feel like we're on a path to continueis is the rate of our ability to securekeeping up with with the expansion ofthese four superpowers are soit has to as especiallywhen you talk aboutthe edge edge to cloud architecturesand the ubiquitouscomputing our attacksurface is just exploded.</p>
<p>We used to say, hey, if I put a nice hardshell around my data center, I'm safe.</p>
<p>But all of a sudden</p>
<p>I now have a data center without walls.</p>
<p>My data is in the cloud,it's on the edge, it's in the datacenter, it's everywhere.</p>
<p>So how do I secure that data everywhere?</p>
<p>That has really made usfundamentally rethink security.</p>
<p>So I think, yes, the answer is yes.</p>
<p>We can't keep up.</p>
<p>But it it requires rethinking,rethinking.</p>
<p>So things like zero trust architecturesor principles or philosophies, whatever</p>
<p>I was calling it.</p>
<p>So but I think yes,</p>
<p>I think we can't keep up, butit's going to require effortand not just I'll dealwith security later,which a lot of companieshave done in the past.</p>
<p>Yeah, yeah, I agree.</p>
<p>I think it's so and I've been excitedaround Intel's innovations in the spaceand some ofthe things that we've been bringing outaround from a technology wise, thingslike the software card extensions,which is really a safe lockbox of datathat a server can use it really.</p>
<p>You can run</p>
<p>Linux based apps on the data, butbut that data remains protectedfrom the rest of the system.</p>
<p>So some of the some of the work thatwe've done there is super exciting for us.</p>
<p>Oh, yeah, very exciting.</p>
<p>And this goes into Intel'screated a lot of really great securityfeatures in silicon, and we're buildingthe ecosystem to take advantage of it.</p>
<p>And that's the key, right?</p>
<p>Because just having the hardware</p>
<p>Silicon itself doesn't doeverything you want it to do.</p>
<p>You really need peoplethat know how to use it,and they can build newuse cases around itlike a confidential distributed analytics.</p>
<p>Yeah, for cancer research or multi-domainanalytics across which means acrossunclassified,classified and top secret data,where before that data can never mingle.</p>
<p>Now we can mingle that datain a protected way and find new waysof solving problemsthat we couldn't solve before.</p>
<p>So very cool stuff.</p>
<p>Yeah, I've been it'sone of the things that increasinglyjust naturally as we talk to customers,</p>
<p>CIOs,i.t, directors, CISOs is reallywhat we've been doing at a software level,as you said, to really enablethese partners to build these softwarecompanies to build around and extractthe value from our technologies.</p>
<p>We've made huge strides, I think.</p>
<p>No, no small part of having Greg Lavendercome over.</p>
<p>He was at VMware,his former CTO at Citibank.</p>
<p>He really understands the CIO,the app dev, and understandshow to make it easier for themto extract the value of the hardware.</p>
<p>And a big part of that is our software,the ecosystem of software companies.</p>
<p>Yeah,</p>
<p>I love Pat Gelsinger, our Vision 2022.</p>
<p>Right.</p>
<p>He said, Hey,</p>
<p>I used to run one of the biggest softwarecompanies in the world, VMware,and we have moresoftware engineers at Intelthan we had to be aware.</p>
<p>It was like, Whoa, you know, I don't thinkpeople know that about Intel.</p>
<p>Yeah, it's it's a crazy wayto think of it, though.</p>
<p>But but but you can quickly apply.</p>
<p>Think of that.</p>
<p>That day we let the world knowwe had 19,000 software engineers.</p>
<p>But you could quickly thinkyou could quickly apply themto a lot of projects.</p>
<p>And then all of a sudden,the 19,000 are full at fully occupied,because for us we operate at three layers.</p>
<p>One is the foundational software,which is firmware bios,the work we do with with virtualization,enabling the workwe do with like for instance, Red Hat,some of the good Linuxopen source contributions that we make.</p>
<p>You know, that firstis that foundational level, which is keyfor security, is absolutely foundation.</p>
<p>And then the second layer, you startthinking through some of the languagesand frameworks and the toolsand libraries that we create.</p>
<p>So like company for instance,granular that we acquiredwas really absolutely there,absolutely brilliant,really taking existing codeand being able optimizeit and get better performance now.</p>
<p>But then even things like PyTorchgetting our optimizations into TensorFlowfor our standard Xeon processors, forall the things that we're doingwith Sickle,</p>
<p>C++, parallel C++, round one API.</p>
<p>So now that's at second layerand then the third layer,then you start looking at some of thethe more applicationlevel work that we doand there's hundreds, hundreds of that,some of whichwe never take out of beta.</p>
<p>So some we do commercialize butbut and some we just give away usually.</p>
<p>Yeah.</p>
<p>In the open source community,which is huge.</p>
<p>Yeah. Yeah, exactly.</p>
<p>I mean everything from like data centermanagement softwareto some of the acceleratorsand some of the tools for open vino.</p>
<p>So it's very quickly.</p>
<p>Wow, 19,000 engineers.</p>
<p>But then you think about the rolethat we have to do thatwe get to do for the world to really makethe compute accessibleand safe and secure.</p>
<p>You can see you can see why night 2000engineers are fully occupied.</p>
<p>Now, I love how you said that it's safe,secure and optimized.</p>
<p>I think those are our keyfocus areas on on our software endeavors.</p>
<p>So hopefullymore people learn about those.</p>
<p>So they can take advantageof all the siliconthat's there, which iswhich is what we want people to do.</p>
<p>Right.</p>
<p>Well, that's my dream.</p>
<p>My dream is like everyevery developer on Earthknows these tools,knows these benefits, because it reallydoes unlock the value of the hardware.</p>
<p>And we were talking earlier aroundlike kind of the moonshotchallengeof petabyte of data petaflops computeone millisecondaway from every person on earth.</p>
<p>I'll be the first to sign up for that.</p>
<p>Give me that right now. I'll be happy.</p>
<p>It's a developer's dream right now.</p>
<p>It's like, wow.</p>
<p>Okay. With that unlock innovation.</p>
<p>So, yeah.</p>
<p>So that's what we do that. Very cool.</p>
<p>Hey, Greg, it's been wonderful againtalking to you about the four superpowers.</p>
<p>Any last words for ourour listeners out therenow? I just, you know, thank you.</p>
<p>And Amy Darren, if they want moreinformation, what's what do you recommend?</p>
<p>What's the one best place to go?</p>
<p>You know, the best place to gois embracing digital dot org.</p>
<p>And on there, we've got tons of linksfrom this episodeand all of our other episodesinto Intel resources so that you can findwhat you're looking for, whether it'ssecurity, ubiquitous, compute,pervasive connectivity.</p>
<p>I'm going to get them all A.I.and edge to cloud.</p>
<p>You can find out more informationat embracingdigital dot org.</p>
<p>Thank you, Darren, and have a great night.</p>
<p>Hey, thanks.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast, give itfive stars on your favorite podcast siteor YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracing digital dot org until nexttime, go out and do something wonderful.</p>

</details>
