---
layout: posts
title: "Resilient Logistical Analytics"
number: 139
permalink: episode-EDT139
has_children: false
parent: Episodes
nav_order: 139
tags:
    - data
    - analytics
    - artificialintelligence
    - pathway
    - technology

date: Wed May 17 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Adrian Kosowski

img: thumbnail.png
summary: "In this episode Darren interviews the Adrian Kosowski CPO of Pathway about their unique ability to handle logistical data from the edge in DDIL environments with real-time analytics."
---

{% include transistor.html id="c01d3f47" title="#139 Resilient Logistical Analytics" %}

{% include youtube.html id="Yn-EUssQG04" %}

---

<p>Are you interested in learning about how digital transformation is affecting logistics? In this episode of "Embracing Digital Transformation," special guest Adrian Kosowski, chief product officer at Pathway, discusses resilient analytics in logistics. Pathway focuses on studying real-world systems from a distributed computing perspective, and they specifically work with data in the logistics and transportation vertical. One of the biggest challenges in this field is aggregating data at scale and making sense of it, which is where machine learning analytics come into play. Kosowski also notes that logistics is a highly concentrated market, controlled by just a handful of companies, which makes even small improvements in processes incredibly valuable to the world economy. However, collecting data from the extreme edge, such as containers in the middle of the ocean, presents its own challenges, such as optimizing energy and communication for battery powered IoT devices. In summary, if you're interested in the intersection of logistics and digital transformation, this episode provides valuable insights into the challenges and opportunities of this field.</p>
<p>The use of internet of things (IoT) devices in the logistics and supply chain industry can greatly benefit businesses with end-to-end visibility and improved analytics capacity. However, there are several challenges associated with the use of these devices that need to be addressed.</p>
<p>One major challenge is the stability and reliability of these edge devices. In case of a device failure or crash, businesses should have a way of optimizing these devices without them guessing or performing incorrectly. This is especially critical for real-time systems that are used to events coming in order.</p>
<p>Another challenge is the accuracy of data collected by IoT devices. Some data may be inferred, and contextual analysis may be required to interpret the meaning of a given data point and distinguish measurement issues from process issues. Inaccurate or untimely data can lead to risks in the supply chain and make it difficult to optimize the transportation network.</p>
<p>However, the widespread use of IoT devices can lead to end-to-end visibility and observability of processes throughout the supply chain. This can help businesses optimize their processes and become proactive in their approach. This can benefit all actors in the supply chain – from transportation and logistics providers to retailers and manufacturers.</p>
<p>While there is no specific group or segment that businesses should target for the adoption of IoT devices, widespread adoption and cooperation among all actors can lead to significant benefits for the global supply chain.</p>
<p>Pathway was developed to address the deficiencies in existing data streaming technologies and provide a tool for advanced analytics pipelines on top of data streams. One of the key features that sets Pathway apart is the ease of describing logic as if it were meant for a batch system, while also making sure it works in a real-time system with out-of-order data.</p>
<p>Pathway was developed with IoT data in mind, but it can also handle data from video monitoring, server performance monitoring, log monitoring, and other physical entities. This allows for the complexities of data when it comes to anomaly detection, alerting with out-of-order data, and data with time series and geospatial elements to be handled in a cloud-agnostic manner.</p>
<p>Another important feature of Pathway is the ability to use Python scripts for data streaming analytics in both real-time and batch modes. This means that data scientists and engineers can develop their analytics pipelines in the normal development environment they are used to, and conveniently work with the streaming system. Additionally, Pathway allows for a much larger amount of history to be considered when running computations, which is a big difference from lightweight stream processors that only handle small amounts of data.</p>
<p>Overall, Pathway offers a bridging solution for organizations that need to combine batch and real-time data processing and provides a way to add value to data by adding structure and extent information for downstream use in business intelligence and analytics.</p>
<p>Data Streaming technology is becoming increasingly important as businesses seek to make decisions faster and respond more quickly to customer needs.  When you use data streaming, you can quickly detect and respond to trends, anomalies, and other important information. Pathway offers a suite of products specifically designed for working with time series data, logistics data, and data streaming. They offer examples and developer information on GitHub, as well as a vibrant community on Discord.</p>
<p>Data streaming is a critical technology for businesses in a wide variety of verticals. For example, it can be used in logistics to optimize routes and predict when shipments will arrive. In finance, it can help detect fraud and predict market trends before they become widely known. In transportation, it can be used to monitor the performance of engines and vehicles in real time.</p>
<p>If you're interested in learning more about data streaming and how it can benefit your business, be sure to check out Pathway's website and community [www.pathway.com](www.pathway.com). With the right tools and expertise, you can leverage this powerful technology to improve your operations and stay ahead of the curve.</p>
<p></p>
<p>

<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople, process and technology.</p>
<p>On today's episode,</p>
<p>Resilient Analytics in Logisticswith special guest Adrian Kosowski,</p>
<p>Chief Product Officer at Pathway.</p>
<p>Adrian, welcome to the show.</p>
<p>It's a pleasure to be here that.</p>
<p>So, Adrian, before we get into whatpathways is and all that, let's firstto tell my audiencea little bit about yourselfand then where you come fromand why you're doing what you're doing.</p>
<p>My background is in distributed computing.</p>
<p>So I actually went to a research careerlargely in Francewith some of the leading engineeringschools and institutes in the École</p>
<p>Polytechnique studying differentaspects of distributed systemsand optimization and distributed systems.</p>
<p>I dida mixof distributed computing and understandinghow computations scaleand looking at how real worldsystems can be modeledfrom a distributed computing perspective.</p>
<p>So a lot of systems in the real world,which include everythingfrom transportationto actual social interactionsbetween animals and othersthat can be modeledwith a distributed computing perspective.</p>
<p>Very cool.</p>
<p>So so I had thislike double double approach to it.</p>
<p>And I belong to the distributedcomputing community.</p>
<p>It's a it's a research communitythat studieshow to make sure local algorithmscan be proved useful forfor computationsand for understanding systems.</p>
<p>And this is a bit of my my DNA.</p>
<p>And it somehow naturally led uswhen when we were creating pathwayto to study systemswhich can be modeled, understoodfrom the same localperspective of local interactions,local changes in in systems.</p>
<p>So I really like your approachbecause I'm a systems guy too.</p>
<p>I like to look at things at a systemslevel and go down.</p>
<p>So how does a real world interact?</p>
<p>Can I model that?</p>
<p>Can I improve itthrough distributed systems?</p>
<p>I love it.</p>
<p>So, I mean, this is awesome.</p>
<p>I get to talk tosomeone that understands me,which is which is great for for me.</p>
<p>So when when you started looking at this,what were some of the biggest challengesyou ran into with the current waythat the industryis tackling this problem of mirroringor optimizing current systems?</p>
<p>A distributed system, real worldtype things like logisticor like you said,social interaction, things like that.</p>
<p>So what was the biggest challengesyou found in doing that?</p>
<p>So when we started,we started out with data in the logisticsand transportation vertical.</p>
<p>A lot of the data was beginningto come from Iot sources.</p>
<p>Automatic click collected traces of howhow objects move around.</p>
<p>And this is very interesting databecause on the one hand it'sextremely simple to describewhat's going on in the state.</p>
<p>I just have some traces,like a timestamp, GPSlocation, latitude, longitude,so there's not so much to it.</p>
<p>Perhaps some event factorsassociated with this data.</p>
<p>But on the other hand,aggregating this data at scaleand making sense of what's going on acrossmultipledevices is a major challenge.</p>
<p>So we found ourselves on the intersectionof working with real time datacoming in from the edgeand the necessity to make sense of it,to structure it, to do logical conclusionswhich belongto the realm of some kind of machinelearning analytics.</p>
<p>So this was a major challenge, but somehowwe found ourselves in betweenadvanced analyticscapabilities that were requiredof these systems to deliver valueand a streaming approach of an event,different approach to sourcing data.</p>
<p>And we needed to put the two together.</p>
<p>Right?</p>
<p>Well, andthis is a this is a big problemthat a lot of people actually have, right?</p>
<p>How do I run deepanalytics on streaming data?</p>
<p>And like you said, A.I.is now grown up enoughwhere we can probably leverage I.</p>
<p>But right.</p>
<p>I mean.</p>
<p>It is it is the time for A.I.that is. I mean,yeah, we could have a chat</p>
<p>GPT solve all the world's problemsaccording to some people,but not logistics problems.</p>
<p>It's due for a lot of focus in A.I.is I wouldn't like to say consumer facing,but it's very much aboutincreasing productivity of peopleand the part of analyticsthat we took on was really much closer toof bringing value insightsout of data sources.</p>
<p>So it's more on the enterpriseanalytical backbone side of things.</p>
<p>Whichwhich I think is more important, frankly,because we're talking big systems.</p>
<p>So small changes can make big impactinto industries, not just individualcompanies, but industries,especially with logistics,because you're actually dealingwith several different companiesat the same time with logistics, right?</p>
<p>Indeed, indeed.</p>
<p>And logistics is a fascinating area,just because of what you said, thatthe market is so concentrated thatjust making a small improvementin one single processmakes an enormous difference for,well, the world economy, actually,because is if you think about it,transportation is something like 10%of overall industry,industry production of GDP.</p>
<p>And then if you look at it like wealthfade is highly concentrated,most of the value of goodsthat are being shippedis is linked to containerized shipping.</p>
<p>And this is controlledby a handful of companies,five major players on the maritime sidecontrol half of the market.</p>
<p>And in terms of likefreight forwarders and outsource logisticsprocesses,it's also highly concentrated marketswith enormous processeswhich spend millions of containers,each of whichhaving value of merchandise exportedin the tens of thousands of dollars,sometimes much more.</p>
<p>And all of this isit's like one data source,which is maybe not even completelyenormous in terms of data size and anykind of like tuning analytics improvementon top of this allows to do valueall across the operations for this.</p>
<p>Now, what are some of the issuesthat you run intowhen collecting data from the edge,especially the logistics data?</p>
<p>Because you said the data.</p>
<p>The data is pretty simple, right?</p>
<p>Right.</p>
<p>Latitude, longitude, a timestamp,maybe a little bit more dataon on what you're tracking.</p>
<p>But what are some of the challengeswith distribute withwith gathering this data from</p>
<p>I would call it the extreme edge,because some of these containers outin the middle of the ocean.</p>
<p>Right. That's an extreme edge case, right.</p>
<p>So the situation is insome sense optimisticand that the catalog of problemsis rather limited.</p>
<p>It seems thatthe problems fitthe tier are pretty consistent acrossdifferent types of Iot devices involvedand different types of collection. Thegenerally speakingissues associated with the devicesas such, with the sensors,with the responsible for measurementand the issues related to communication,both types of issues.</p>
<p>Pierre Um, interestinglyenough, thefirst a lot of um,misconceptions about whatthese devices,these edge devices are actually capable ofand how they can be expected to perform.</p>
<p>Um, it's,if we think of logistics processes,you may have a container that's travelingfor weeks without a power source.</p>
<p>So you have a battery powered Iot devicewhich needs to optimize energy credit.</p>
<p>And the apart from the factthat energy is an issue,which means that communicationis an issue,you have to optimizebits of communication.</p>
<p>You also have the issue ofbasically I don't know how to put it likestabilityand reliability of these edge devices.</p>
<p>If a device fails or crashes.</p>
<p>This is a major, major issue,which means that you should have a wayof optimizing thesewhat these devices do withoutwithout them guessing or performingincorrectly or getting jammed or stuck.</p>
<p>So that's like onemajor source of sorts of issues is tryingto make smart devices, devices thatum, do measurements in the smart wayadaptively or to communicatein a smart wayalso means that these devicesmay malfunctionor not follow specificationor just get stuck in off statewith no way of reaching them.</p>
<p>So it's like one category of issues whichwhich, which vary widelyaccording to manufacturer of of device.</p>
<p>So actually possible to benchmarkthese devices and see if a theoreticallysimilar devices have very differentprofiles in terms of areas for generatingtheir their issues related to the factthat we're talking about the extreme edgeand it's it'sit's devices that lose connectivityregularly that they will need to catch upat some pointand communicate late data points toto let's say the cloud in inverted commasto to the centralized data collection.</p>
<p>And thisis a major issue, especially if you thinkfrom a streaming perspective,because of streaming systemstraditionallynot so used to handling out of order.</p>
<p>Out of order data. Yes. Data issue.</p>
<p>So so it's it's worse.</p>
<p>And then by now, we've learnedto recognize typical patterns of errorsthat we see with chips, issueswith positioning issues.</p>
<p>These are quite fascinating, actually,and many of them are related tokind of like,</p>
<p>I would like to say cover ups,but they are indeed cover ups of a devicethat wasn't really measuringbut was communicating some data anywaybased on some extrapolationof what it thought was rightand just the way to, you know, to cleanlydistinguish what's an actual measurementand what's the guess by the device.</p>
<p>So it's it's.</p>
<p>So it's a it's interestingbecause I would have thoughtthat the data would be a lot cleaner.</p>
<p>It sounds like the data is noisycan come out of out of order.</p>
<p>And for, like you said, for real timesystems,they're used to events coming in order.</p>
<p>Right.</p>
<p>So this is a pretty big because of thenot the data itself,but the way that the data is collectedand where it's being generated.</p>
<p>It ends up being pretty complex.</p>
<p>It doesn't.</p>
<p>It does indeed.</p>
<p>And there are some issues that we seeno way of resolvingthat are inherent to the data.</p>
<p>This out of order rival is is one example,but some issues that requirecontextual data analysis,which means that interpreting the meaningof a given data pointand learning to distinguishissues with thethe measurement from issueswith the actual process that's being facedvery much depends on the contextwhere this measurement was made,what were persistent measurementswith other devicesmeasured in the same location.</p>
<p>So one example islet's say temperature measurements.</p>
<p>If we're thinking aboutsensitive shipments where temperaturesneed to be kept belowa certain threshold, it'sabsolutely normalthat only for part of the shipment,which is actually sensitive,has this temperature controlled.</p>
<p>Whereas the the device,the measurement deviceis associated with a box.</p>
<p>And in some in some casesit's perfectly normal that the temperatureof the box will go up when refrigerationis no longer needed, for example.</p>
<p>So so there's no need to raise an alarm.</p>
<p>And the kind of issueswith today's supply chains is forall ofthis has to be, to some extent inferred.</p>
<p>There's no super precise informationwhich would stealthy unfortunate</p>
<p>Iot device if the cargo has been loadedinside the box which contains the device.</p>
<p>And not all of this is a little bitquite a little bit of heuristic inference.</p>
<p>Fascinating stuff.</p>
<p>So what are thewhere are the effectsof not having accurate dataand in timely, accurate data?</p>
<p>Because you said there's lots of lotsof different things, right?</p>
<p>I've got some data that's inferred.</p>
<p>So some real data, some not things coming.</p>
<p>So what's the effecton the logistics chain bybecause I, I guess I shouldn't sayour supply chain is great,even though it's actually pretty goodwhen you think the worldwide supplychain, it'sbeen pretty robust for several years.</p>
<p>I mean, COVIDkind of threw a kink in some of that.</p>
<p>Right.</p>
<p>But what's the effects ofhaving this datathat's not necessarily accurateto the industry today?</p>
<p>So if we look at supplychains specifically,um, the current state ofof the use of datais that it'sstill not widely used in aggregation.</p>
<p>That is,if you, if you think of a given shipment,a given piece of cargo is being importantyou take it.</p>
<p>And the conclusions that that concern thisgiven shipment obtained from the datawhich it collects,there's verylittle in terms of systems thatto that are able to aggregate dataacross multiple devices to conclusionsthat they'd love to optimally optimize,for example, transportation networksthat allow to minimizerisks to task for to to actuallyto to find these risks out in advance.</p>
<p>And indeed, theone thing that that COVIDforced us to think aboutwas really movingto a new normal of a supply chain.</p>
<p>We organized in a completely different wayand based onrelatively small amounts,small data samples of it,there was a need to figure outthe new processes and to understandwhether these new processes make sensewithout being able to relyon the aggregated experience of humanswho've been experts in the fieldfor ten years.</p>
<p>Well, yeah, yeah, you've got all that.</p>
<p>And this is really interestingbecause it's not just tribal knowledgeinside one organization,it's tribal knowledgeacross an aggregate of companiesbecause like we said in logistics, thereis this knowledge that's kind of gainedacross several verticals in across severalorganizations on how everything works. Iright, I mean, is there anyone out therethat can draw a pictureof our global supply chain of accurately?</p>
<p>It's so difficult.</p>
<p>And actually one of the one of the mainthe main changes of a main potentialfor change between observingwith the existence of Iotlike data sourcesand the massive rollout of Iotis that this visibilityand this observability of what's going onbecomes end to end, which means thatwe actually have start to have datawhich is not partitioned by what's knownor visible to a given subcontractor,given the link and the supply chain.</p>
<p>But we have like a global viewof processes,which is quite fascinating from the pointof view of analytics capacity it unlocksand the potentialfor for improvement for different actors.</p>
<p>So in some cases for potentialmeans that there's somethingthat's really actionable,like I can improve a process.</p>
<p>In some cases it's actionable because itprovides information about what to expect.</p>
<p>We can expect congestion,we can expect damage in the next few daysand gives us time to prepareand to adapt other processespotentially downstream in the supply chainor related to retail.</p>
<p>When the waiting for for supplyto to be able to cushionpotential blowsbefore they actually come to be proactive.</p>
<p>So when you're when when you guys areattacking a market like this where there'sseveral different organizations,is there is thereone that you're really going after to sayif we can get themto adopt new techniques ofgathering data and ingestingand curating dataand building insight from thatthat will give such an impactinto the global supply chain,</p>
<p>Is there is there a group or a segmentthat you guysare focusing on where you thinkthat would be the biggest impact?</p>
<p>I'd say thatfirst, the big will of actorsto collaborate in terms ofputting into placenew methods of treating data.</p>
<p>While of coursethis is a kind of competitive advantageand whoever adopted first adopts it first,it's it's traditionally wasnot for main angle the maintype of differentiationbetween between companieswith to actually, but the actualoperations in the physical world.</p>
<p>So with some will to to cooperateand to to to catch upand to to adopt new approachesall across the board.</p>
<p>Basically, if one major actor adoptssomething because of the operations,some kind of.</p>
<p>Everyone else does.</p>
<p>Anyone else does. So so so.</p>
<p>It's it's a weird so it's almost likea competitive collaborationto kind of liftthe whole industry as a whole is that.</p>
<p>It's it's it's first and it'sit's also a questionof finding shortcuts toto making an organization data drivenbecause for some organizationsand I should name Amazon here obviouslybut Alibaba as well and othersthat have but actuallyno longer moonlighting as data providers,data centric organizationsand those aspects and thesethese organizationshave have data at the heart.</p>
<p>And it's kind of more obvious for themto work with data of other organizationsfor which it is less obviousand that are very much looking forfor shortcutsto get the similar level of valuefrom their data and to to to actually leador compete on equal terms.</p>
<p>That's really interesting.</p>
<p>So Alibaba and Amazon are kind of pushingthe industry as a wholebecause they are data driven,they are data centric,so the others have to followwhere they die.</p>
<p>It's right.</p>
<p>It it is</p>
<p>I guess it isthe case that actorswho don't have this dataand they run the risk of commoditizationin the sense that they becomesomething like physical subcontractorswho just operate certain operationsbut lose for the linkwith with, with, with clientsand with the actual management of this.</p>
<p>All right.</p>
<p>So let's shiftgears a little bit and talk about pathway,right, because your backgroundand your backgrounds, incredible.</p>
<p>You understand the space really well.</p>
<p>So why develop pathway?</p>
<p>Because there were other there's otherdata streaming technologies out there.</p>
<p>Open source.</p>
<p>We could talk about Kafka,we can talk about Flink,we can talk about Spark that dodata analytics and big dataanalytics, right?</p>
<p>So why do something different?</p>
<p>Why I mean, what makes you guys so uniquebesides Adrian,obviously, besides your knowledgeof distributed systems?</p>
<p>I mean, but why do something differentin India?</p>
<p>We werewhen doing, when doing pathway, when,when we got to the place where we didwe did pathway, we did it forfor reasons that we were missing a tooland we felt that we were missing a toolthat would resolve what we needed to doand we needed todevelop advancedanalytics pipelineson top of data streams, notably datathemes that were coming from Iot,but in general events, themes, data.</p>
<p>And we found thatthe existing frameworks weredeficient for multiple reasonsthat of the which we were looking forwas certainly ease of describing logicas if it were meant for batch systemand making sure it worksin the real time systemwith out of order data that it relieveswhoever's designing the system of thisneed to care about manual event folksthis thingwhile under the hoodbeing an event processing system.</p>
<p>So it's a strange place to be in.</p>
<p>I mean, anytime anyone thinks aboutgetting delayed events,the first thing that comes tomy mind is of you got a batch this stuffup, it's got to be batched.</p>
<p>And then so you're almostyou're spanning the space between batchand in real time systems with constantcontinuity of events and things like that.</p>
<p>Right.</p>
<p>So you're spanningthis really nebulous space in betweenwhich the real world works in itinstead of the computer world, right?</p>
<p>The real world works inmessiness, right?</p>
<p>Things coming in and out of orderand and and all this.</p>
<p>So I think this is brilliant.</p>
<p>Thanks.</p>
<p>But definitely we have,</p>
<p>I think, a lot of data collection efforts,if you think about it, about video world,even if you think about somethinglike server monitoring, server performancemonitoring, log monitoring and the like,we are thinking here about the hardware.</p>
<p>The hardware is about that devicewhich which may malfunction.</p>
<p>It's the physics that comes inand the fact that it may break.</p>
<p>And that's about thingslike overheating and failures and so on.</p>
<p>So so a lot of these effortsabout the datathat concernsphysical things done by physical entitiesover machines or in some cases humans,if we talk about consumer behavior.</p>
<p>So it's it's kind ofthe natural way events, things behave.</p>
<p>And indeed working with Iotdata of the kind that we were workingfirst made us ready for.</p>
<p>Certainly complexities of of datawhen we'retalking about anomaly detection,alerting with out-of-order data, with datathat that has elements of both timeseries and geospatial spatial elements.</p>
<p>So we need to prepare for,for all of the complexitieshere of type and analysis,iterative golf algorithms and so on.</p>
<p>And we we found that in fact,if you take something like an iterativegolf algorithm, remarkablyfew of the current solutions,</p>
<p>I'd say none.</p>
<p>That's cloudagnostic as prepared to handlethis type of approach,to be able to to have an algorithmwhich works until convergence,for example, or to to optimize, to applyrules inin in a given order, in a loop, etc..</p>
<p>So sothere were things that were very muchmissingfrom existing frameworkswhich we result in pathway.</p>
<p>And we found ourselves being a bridgethat allows youto conveniently express in Pythonthe fourdifferent ways of aggregating,harmonizing dataand reducing it and creating data.</p>
<p>Pipelinesthat take data from different sourcesand add add valueto value to the data in the sensethat at structure and at x,the extent information to the datatwo to to to be able to use it downstreamin business intelligence and analytics.</p>
<p>Yeah, that was one interesting thingwhen we talked before that I thoughtwas was cool was the same</p>
<p>Python scripts that I write for datastreaming analytics can be used in batchas well because you guys kind of span you,you connect the two together very well.</p>
<p>So I can run my run my real timeanalytics and then also goand do even more deep learning or deepanalytics on things that have happenedin the past as wellwithout having to rewrite everything.</p>
<p>I think that's actually a huge benefitto a lot of data scientiststhat data engineers.</p>
<p>And indeed the amount of historythat can be taken intoaccount is much, much larger.</p>
<p>Basically, whatever fits in the machinesfor the running of the computationand can be and can be included.</p>
<p>And this is a big difference from,let's say,the lightweight theme processors,which just take a little state andand handle thatactually from what we see fromfor my usersthe many problems with streaming systemslittle related to usability toto to being able to conveniently workwith the streaming system in the normaldevelopment environmentfor data scientistsso used to, for example,to lead on in a repetitive waya given data source, make sure the resultsof the same every timeto to to make sure to be able to simulatedifferent impact.</p>
<p>The impact of different changesto to, let's say, machinelearning algorithms to modelsand see if you have to come and ofthis this the idea of simulationmeans that actuallywhen you're doing a simulation,you're rerunning a data stream,you're doing somethinga bit more batch like the waybecause you have all that data batchto just replace all.</p>
<p>The data sitting there already curatedand in the right tablesand everything, Right? Yeah.</p>
<p>So, so we've dispatch experienceto designing and modelingstreaming systems is something that we seeas as important for the future,for real time space in general.</p>
<p>And the featurewe're happy to bring with the way.</p>
<p>This has been. This has been great.</p>
<p>Adrian If people want to find outmore about pathway and aboutthe products that you guys offer,specifically aroundtime series data, logistics, dataand and data streaming,this, this weird space in between datastreaming and batch.</p>
<p>Where do they go?</p>
<p>To find out more information.</p>
<p>You'll find this at pathway dotcom or for developer informationthat's fair content.</p>
<p>Numerous examples all acrossverticals from server log monitoring,anomaly detection and different usecases to doing things like sentimentanalysis on the social network,</p>
<p>Twitter sentiment classes and the like.</p>
<p>So you'll find all the examplesthere on on GitHub repost.</p>
<p>Don't hesitateto reach out to us on Discordanytime discord DG slash pathway.</p>
<p>I'm happy to discussand learn about use caseswhere you might findpowerfully useful as well.</p>
<p>We see numerous ones acrossmultiple verticals, not just logistics,real timefinancial data, data coming from asactual operations of engines andand vehiclesand all sorts of fascinating data sources.</p>
<p>So happy to learn if we can help.</p>
<p>Well, Adrian, it's been a pleasurehaving you on the show today.</p>
<p>Thanks again.</p>
<p>And hopefully we'll hopefullywe'll talk again in the future.</p>
<p>My pleasure. Entirely that.</p>
<p>Thank you so much for having me.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org.Untilnext time, go outand do something wonderful.</p>

</details>
