---
layout: posts
title: "The Emergence of the Global Data Network"
number: 98
permalink: episode-EDT98
has_children: false
parent: Episodes
nav_order: 98
tags:
    - Data Architecture
    -  Data Management
    - Global Data Network
    - MacroMeta
    - Multi-Cloud

date: 2022-08-04
guests:
    - Darren W Pulsipher
    - Chetan Venkatesh

img: thumbnail.jpeg
summary: "In this episode, Darren reminisces with Chetan Venkatesh, CEO of MacroMeta. Venkatesh has a long history of data management from the beginning days of Grid Computing and has started MacroMeta to tackle data management across the globally dispersed edge, data centers, and clouds. "
---

{% include soundcloud.html id="edt98" title="#98 The Emergence of the Global Data Network" %}

{% include youtube.html id="9PKbVk-VvZo" %}

---

Chetan is an engineer turned operations and start-up guy (Macrometa is his fourth startup). He says he has been working on the same problem of dealing with distributed data and reducing latency for twenty years.

Data is no longer in a data center but everywhere: in the cloud, on the edge, and people’s laptops. Effectively managing all of that is a challenge.

About ten years ago, Marc Andreessen said software is eating the world. At this point, the software has eaten everything and turned all kinds of constraints and barriers into opportunities. Multithreading computing is one of the barriers that has come down with the cloud. You can build applications that run in different parts of the world simultaneously. A developer movement is happening parallel to make everything as simple as it needs to be for the average computer science person. So on one side is a sophisticated technological evolution and on the other side is a simplicity movement.

Architectures such as Jamstack allow distributed computing to happen at scale with a great deal of simplicity, but there’s still a vast frontier yet to be discovered and claimed. The extensive land rush opportunity is now at the edge. Distributed data management and edge are two sides of the same coin.

One big problem is that some software development is moving to function as a service that ignores data. Also, there is a perception that data is ubiquitous, but much of the edge is not always connected. There is no guarantee that an application has access to all the data. Networks are no longer centralized; the notion of stateless microservices came from the cloud movement. This statelessness can become a huge barrier. This is why architectures such as Jamstack and serverless functions treat data as a peripheral issue rather than a core issue.

Stateless data structures are simple. You have a specific place where you commit your data, then move on to stateless again. Stateful requires robust infrastructures with more complex data structures because they support the application as it continually emits state. As we move into a real-time streaming data world in which state is constantly emitted from somewhere in the ecosystem, the infrastructure becomes complex and hard to manage because they are not architected. That’s where Macrometa comes in. They have built a new platform for this continuous, real-time active state at the exabyte scale.

Dealing with this streaming data in an active and dynamic state is a significant shift for many software developers. Since the first cloud infrastructures came about, then big data platforms, then data as a service, the industry has become efficient at ingesting, processing, and analyzing historical data. But now, we are in a world where data is on a spectrum rather than existing as a monolith. One newly appreciated quality is that data has perishable insight and value. Some data has a brief shelf life. Current time scales are too big to use data efficiently; we need systems within 50 milliseconds to communicate efficiently and reduce cognitive overhead for the people interacting with those systems.

Most people misunderstand latency: it is not something that brings you joy, but the lack of it makes you upset. For example, how long will someone tolerate a choppy YouTube video or a slow-buffering Netflix show? Fifty milliseconds for a machine is an eternity. A machine can do a vast number of things in 50 milliseconds, so latency becomes essential, especially when considering the perishable value of data.

Another issue is now, because of the cloud, interconnectivity, and the global system, startups are multinational companies, and data becomes location sensitive. Some of the data is regulated, some are PII and can’t be exfiltrated in certain jurisdictions, etc. An excellent example of this problem is how the Europeans don’t want their data leaving their borders, but most of the cloud infrastructure in the U.S. and the applications are built here.

A third issue is that data sits in many places; there are boundaries between systems, physical and logical. Data can be essentially static and rigid, so we need infrastructure that will allow data to connect and flow in real-time with consistency and ordering guarantees. Most importantly, it creates fungibility to be consumed quickly in diverse ways.

An additional problem is that data has a lot of noise, and it doesn’t make sense to backhaul intercontinental distances, paying transfer fees, only to draw most of it away. Data loses value by the time it gets to its destination. There is also a high refresh rate, so systems often work on stale data.

We need new ways of solving these types of distributed data problems. Chetan believes the next ten years will belong to this area of data sciences.

The first generation of distributed data solutions used operational transformation. Google Docs is an excellent example of that. Operational transformation, however, requires centralization of the control, so it doesn’t scale well. Google has figured out a way to scale, but that doesn’t generalize to the average developer. There are only maybe five companies in the world that understand it at that scale, and much of that knowledge is locked up in those companies and proprietary technology.

Macrometa is working with the community and academia to try and create a new body of knowledge, far more efficient than these centralized models in a fully distributive way.

Currently, there are infrastructures available that are great at solving historical system of record-type problems. They are trying to move toward real-time data, but their architectures aren’t fundamentally meant for it. These new problems with data with time and location sensitivity, actuation value, refresh rates, data gravity, and data noise require a new way, a new infrastructure. Chetan calls this a system of interaction rather than a system of records because systems of interaction are data networks, close to where you originate and consume data, that then filter and rich augment all of it in line and route it to its intended recipients. It’s a networking function.

Macrometa has built network processors that are moving the data around - a global data network. It’s a serverless API system where developers simply consume APIs to solve real-time active and operational data problems. Macrometa is a global data network in the topology of a CDM, but with a data platform like Snowflake that produces rich data primitives to deal with real-time active and operational data values.

You can integrate analytic tools into the global data network and deploy the analytics near where the data is generated or required. Just as Amazon fundamentally changed retail distribution with edge architecture and algorithms to keep local warehouses optimally stocked for overnight shipments, Macrometa has done the same for data. They are bringing the data and computation on that data much closer and allowing it to happen in milliseconds. This ability to create real-time loops of information is a powerful enabler. For example, small retailers can use local store inventory in their e-commerce without oversubscribing to compete with Amazon.

A great use case for the Macrometa platform is in cybersecurity. Some customers are ripping out their centralized data models to take advantage of the lower latency so they can block threats in real-time.

The global data network is a transformation layer between your data sources and receivers with the consumers and publishers. It is composed of three technology pieces. The first is the global data mesh, which is the integration layer for data. The second is a global compute fabric that allows you to orchestrate data and business logic in the form of functions and containers globally. The third piece is a global privacy fabric: how to secure data and comply with different data regimes and regulations that affect whether your data is being transmitted or stored.

The global data mesh is a way to quickly and easily integrate data from different systems across boundaries, whether physical or logical. All of it is incorporated and flows with consistency and ordering guarantees. The most significant value of this mesh is that it makes data fungible and consumable by allowing you to put APIs on data quickly. This can be done in a few hours compared to usually taking months. The global data network is designed for trillions of events per second so that it can move data at vast scales at 90 percent less cost than the cloud.

The global compute fabric brings business logic and orchestration to move your processing closer to where your data originates or is consumed. This is the anti-cloud pattern. Macrometa will surgically and dynamically move those microservices that need to comply with data regulations, for example, into the right places for execution.

The last piece is data protection. This is a complex problem and the answers we have today, for example, opening a separate silo for that particular geo to comply with particulars every time you spin up an instance on your app, are not good. Macrometa’s platform has a data network that is already integrating and getting your data to flow across all the boundaries, along with compute functions and ingesting data without boundaries. Now, it can create logical boundaries and pin data to specific regions to protect data. They can set affinities and policies about how data lives and replicates in a region, such as whether it should be anonymized when it’s copied out of the region.

Macrometa’s technology enables use cases that are impossible to do in the cloud because the clouds are too far or too slow. Macrometa has built the infrastructure to solve real-time data problems and turn them into opportunities instead of challenges. For more about Macrometa, go to macrometa.com. 


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, thisis Darren Pulsipher, chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people, processand technology.</p>
<p>On today's episode,the emergence of the Global Data Networkwith co-founder and CEO of MacroMeta,</p>
<p>Chetan</p>
<p>Venkatesh.</p>
<p>Chetan welcome to the show.</p>
<p>Thank you very much, Darren.</p>
<p>It's a pleasure to be here.</p>
<p>I appreciate the opportunity.</p>
<p>So, Chetan, you are the CEOand co-founder of MacroMeta.</p>
<p>Why did you do this?</p>
<p>Well, you know, some people think I'mjust a sucker for punishmentbecause this is my fourth startup, Darren.</p>
<p>And, you know, I like to trulyhave been solvingthe same problem for 20 years now.</p>
<p>But, you know, it's what I call the spiralstaircase where you're sort of going up.</p>
<p>So you sort of see the same things,but you see them from different elevationsand that gives youa different perspective.</p>
<p>So just my background.</p>
<p>I'm an engineer turned,you know, operations and startup guyprimarily because Iwas not a great engineer,</p>
<p>I was an okay engineer,and there were peoplewho are way better than me.</p>
<p>And when I started to work with customers,</p>
<p>I realized, Hey, this is something I cando, which is take all this complextechnical stuffand translate it into the world of thecustomer in a way that makes sense to thembecause they don't careabout all this technical things.</p>
<p>They just want to solve a problem.</p>
<p>And so, yeah, I luckily for me,there's a place in the world.</p>
<p>So I was able to sort oftake those complex technical ideas and,and turn that into business value.</p>
<p>And I've been working in data basesand datainfrastructure for 22 years,three startups prior to this,most of them dealing with distributed dataand trying to reduce latency.</p>
<p>So I've been trying to help the worldsave milliseconds for 20 years now.</p>
<p>Yeah.</p>
<p>So I might have given you, you know,a few seconds back in your life, Darren.</p>
<p>Well, there you go.</p>
<p>Thank you very much for this.</p>
<p>I want to know what you did with those.</p>
<p>I completely wasted on downloadingcat videos on YouTube.</p>
<p>That's what I did.</p>
<p>Well, my my mission is accomplished.</p>
<p>Well, I'm glad that you're up leveling,because you and I are very similarthis way.</p>
<p>I'm an okay engineer.</p>
<p>Software engineer,but where my superpowers like yours.</p>
<p>Right.</p>
<p>I can take really complex ideas andmake it easier for people to understand.</p>
<p>So we'll see how good both of us do today.</p>
<p>Making the complex worldof data management,especially now that data is no longerin your data center.</p>
<p>Right.</p>
<p>It's it's in the cloud. It's on the edge.</p>
<p>It's on people's laptops.</p>
<p>It's on mobiledevice. It's everywhere now.</p>
<p>And how do you effectively manageall of that?</p>
<p>That's that's going to be tough.</p>
<p>Yeah.</p>
<p>You know, we live, I think, insort of the wild west of data now.</p>
<p>You know, Marc</p>
<p>Andreessen said something like</p>
<p>Software is eating the world or somethingand that about ten, 12 years back.</p>
<p>And I think software is sortof eating everything at this point.</p>
<p>And largely turned,you know, all kinds of constraintsand barriers into opportunities.</p>
<p>And one of the barriersthat's come down with cloudnow is just multi reason computing.</p>
<p>You canyou can basically build applicationsthat run in different parts of the worldat the same time. How crazy is that?</p>
<p>And it's pretty crazywhen you think about it.</p>
<p>You Yeah.</p>
<p>And more importantly,</p>
<p>I think what's exciting is thatthere is this developer movementthat's happening in parallelto make everythingsimple, as simple as it needs to befor you to be able to use them.</p>
<p>The averageperson, you know, with somecomputer science backgroundcan build these types of things.</p>
<p>So it's really interestingbecause we've got on one sidethis very sophisticated technologyevolution and the other sidea simplicity movementcoming from developersto make everything simple and easy to use.</p>
<p>And you're seeing fabulous, amazingconstructs like Jam Stack, for example,that allow this sort of distributedcomputing to happen at scalewith a great deal of simplicityand super exciting stuff.</p>
<p>But, you know,there's still so much of openspace and vastfrontier yet to be discovered and cleaned.</p>
<p>And I think that's sort of the big landrush opportunity at the edge.</p>
<p>Distributed data management in edgeare just two sides of the same coin.</p>
<p>They're almost synonyms in many ways.</p>
<p>So yeah, what I found onthis is really interestingbecause you talkedabout the software developersand that whole communitythat's been built aroundserverless function as a service.</p>
<p>Like jam stacks and things like that.</p>
<p>They all ignore data.</p>
<p>Yeah.</p>
<p>There's this obsession.</p>
<p>That datais ubiquitously available everywhere.</p>
<p>And what I have learned by workinga lot on the edge is</p>
<p>I have a lot of edgenow that isn't connected all the time.</p>
<p>I can't guarantee that my applicationhas access to all the data all the time.</p>
<p>So this is a bit this is a big problem.</p>
<p>It is a huge problem.</p>
<p>And, you know, a part of it is that we'vebeen spoiled by centralized computing.</p>
<p>You know, think about it all.</p>
<p>Your network was centralized, right?</p>
<p>Hey, you bring all your data andturn it into one giant pile in one place,and then you can slice and dice itwith consistencywith all these different guaranteesthat are called acid.</p>
<p>You know, all that fun stuff, right?</p>
<p>And so we got spoiled.</p>
<p>And so one of the thingsthat came out of the cloud movement,which is a pattern in the cloud, butis an anti pattern when it comes to datamanagement, especially distributed data,is this notion of stateless microservices.</p>
<p>You know, stateless worksgreat for decoupling data and compute.</p>
<p>But to your point,when data is distributedand you need to bring compute toour data is not we're not shipping datato our computers that statelessnessends up becoming the huge barrier.</p>
<p>And so you actually need to embracea more stateful way of doing things.</p>
<p>And so you're right, you'reabsolutely right.</p>
<p>People have not figured outhow to do stateful things.</p>
<p>And that's why Jam Stack and all theseserverless functions and all that stufftreat data as sort of a second classcitizen, as a sort of a,you know, a peripheral issue,not a core issue.</p>
<p>Yeah. Which I think is hilarious, right.</p>
<p>When you think about it,why do we even write code?</p>
<p>Yeah, to do something with data.</p>
<p>To do something with data.</p>
<p>Well, I guess if you're a gamerand now you're still doing somethingwith data, but you.</p>
<p>Know, I mean, yeah, yeah.</p>
<p>I mean.</p>
<p>You always are.</p>
<p>And so this concept of,oh, I'm just I'm stateless.</p>
<p>I don't get I,</p>
<p>I don't know where it came from exceptexcept for, I guess, a very focusedand myopic view of the present.</p>
<p>But the future that we have today,it falls apart.</p>
<p>Well, you know, I if I could take a minuteto talk about state versus statelessness,because it's an really interesting issuewe don't appreciate.</p>
<p>And they'll give a little bitof a historical picture here.</p>
<p>We don't appreciate statelessnessas really a consequence of very good</p>
<p>UNIX design philosophy.</p>
<p>Like POSIX basically cleaned up stateand said State has to be thesediscrete things and it goesinto specific places at specific times.</p>
<p>And it created this very clean separationbetween compute and state and allowed,you know, statelessness to come as a as asa, as a first order consequence of that.</p>
<p>Right or state fulness.</p>
<p>You know, if you it complicatesthe state complicates everything.</p>
<p>It makes everything expensive. Oh,yeah, yeah, yeah.</p>
<p>And it forces peopleto start thinking in data structuresthat are not easy to reason with.</p>
<p>And that's the hardest problemabout state.</p>
<p>You know, when you're stateless, your datastructures are super simple, right?</p>
<p>And you have a very specific way placesat which you commit your dataand then you move onand you stateless again. Right?</p>
<p>So you kind of,you know, build up a little bit of stateand then you write itand then you move on.</p>
<p>So at any point you lose something.</p>
<p>It's that little bit of intermediary statethat you build up, right?</p>
<p>Versus in stateful,you need infrastructuresthat are far more powerful,that are even structurally more complexbecause they're supporting the applicationas it continually emits state.</p>
<p>And we're moving into a real timestreamingdata world and that's continuallyemitting state from somewhere.</p>
<p>And so the infrastructuresare just not designed for that.</p>
<p>And that's where my company Macromediacomes in, because we really builta new platform for this sort ofcontinuous, real time active statethat is happening at the Zara better,you know, whatever gajillionbyte scale scheduling invites.</p>
<p>Yeah, exactly.</p>
<p>You know, this is interestingbecause I've been doing a lot of researchin O.T infrastructureand the difference between opportunityot how state ownedall Iot devices have state right.</p>
<p>And I think this is fascinatingthat you brought up thatyou know the IT worldwe kind of separated the two.</p>
<p>Maybe why that might bewhy there's so much contentionbetween the opportunity professionalsand industries as a whole,because on the IT side,we've kind of ignored state.</p>
<p>But I like how you said nowwe've got streaming data that has activedynamic state.</p>
<p>I mean that'sthat's a major shift for a lot of I.T.software developers.</p>
<p>Yeah.</p>
<p>You know,</p>
<p>I mean, again, I take an evolutionaryperspective.</p>
<p>Almost everything we've done with datais historical in nature.</p>
<p>We're great at looking at the rearviewmirror and saying, ha, you know, that</p>
<p>I passed that thing already or a pastthis last quarter or last season.</p>
<p>But we're terribleat looking at the windscreenand seeing what's coming our way.</p>
<p>Our systems don't support that,which is counterintuitive.</p>
<p>You'd think that, you know,just given the human,you know, neural bias, right, towardspredicting the future,we would have been overly investedin technologies that allow you to processdata in real time.</p>
<p>But no, we've actually builta great competence and process and datathat's historical.</p>
<p>And that's actually what what'swhat's really, in my opinion,the shift that's happening this decade.</p>
<p>A lot of what we didsince the first cloud infrastructures cameand then the big dataplatforms came and then,you know, data as a service started in</p>
<p>March was just get very efficientat ingesting and processingand analyzing historical data.</p>
<p>But now we're starting to get into a worldwhere data needs to be,you know, kind ofyou need to think of data as on a spectrumrather than as these, you know, just onemonolithic, monolithic thing, because datahas maybe five or six qualitiesthat are now starting to get appreciate.</p>
<p>The first one is data has perishableinsight, value data has shelf life.</p>
<p>Right.</p>
<p>I when you first brought this up,</p>
<p>I thought this is hilariousbecause the first thing that came tomy mind is bananas, right?</p>
<p>Because bananas it I lived in Brazilfor two yearsand I know what real ripe bananas are.</p>
<p>We don't have those in the U.S.unless they're like, totally brown. Yeah.</p>
<p>But to have a very ripe banana,you watch it go through its progressand then it spoils.</p>
<p>So you're saying the same sort of thingwith data.</p>
<p>It has really important value,but as time goeson, that value can spoil over time.</p>
<p>Right.</p>
<p>They have their shelf life and data.</p>
<p>And I think of then, you know,there's different types of shelf life.</p>
<p>There's datathat is valid in tens of milliseconds,you know, hundreds of milliseconds.</p>
<p>There's some value there.</p>
<p>And then it's sort of the halflife of that datajust sort of falls off the cliff.</p>
<p>There's not not enough valuable things.</p>
<p>And then there's other forms of datathat are sort of really hundredsof milliseconds of secondsand so on and so forth.</p>
<p>The big data systemsreally operate at the level of,you know, many seconds,multiple seconds and onwards to minutes.</p>
<p>But substantially, almost everythingwe want to do, which comes with theyou know, which comeswith trying to interactbetween systems or people in systems.</p>
<p>You know, those timescales are too big,our brains too fast for those timescales.</p>
<p>So we need systemsthat are really within 50 millisecondsfor us to build,you know, to be able to communicateefficiently and reduce cognitive overheadfor those people who are interactingwith those systems.</p>
<p>Latency is actually it's not it's notlatency is a big cognitive overloadfor most people. I mean, imaginewatching a choppy video on YouTube.</p>
<p>You hate it, right?</p>
<p>I mean. We go, oh, yeah, yeah,</p>
<p>I change channel.</p>
<p>You change channels, right?</p>
<p>I mean, the minute your Netflix startsto buffering your screen, you know,you're like,what's going on? And you know, you're up.</p>
<p>So latency, most people misunderstand.</p>
<p>It's not something that gives you joy.</p>
<p>The lack of latency makes you very upsetand angry.</p>
<p>It's just a cognitive functionof our brains right now.</p>
<p>That's human latency, right?</p>
<p>Our perceptions of latencyare like 75 milliseconds and beloware 50 milliseconds, and below 50milliseconds for a machine is an eternity.</p>
<p>You know, it can do a gazillion thingsin those 50 milliseconds.</p>
<p>So latency ends up becoming sort of thisvery key thing.</p>
<p>And so when you start to look through,you know, data has shelf lifeand perishable valuethere, you just start to see problemsin a little bitof a different perspective.</p>
<p>The second issue isand now because of cloud and, you know,interconnectivity and global system,the startups are global companies.</p>
<p>Now, it's not like the old dayswhere you had to be an IBM,you know, to be in 20 countries. Right.</p>
<p>I mean, my tiny little startup,</p>
<p>Right.</p>
<p>We operate in all these different regimes.</p>
<p>And so everyone's globaland their data is location sensitive.</p>
<p>Now, some of that data is probablyregulated.</p>
<p>You know,you've got some PII, you're connecting.</p>
<p>And guess what,if you're in certain jurisdictions,that data can't be exfiltrated.</p>
<p>You shouldn't be sending itout of the country.</p>
<p>This whole privacy shield,you know, thing that happenedbetween the US and Europeis a great example of that.</p>
<p>The Europeans really don't want their dataleaving their borders,you know, and unfortunately, guess what?</p>
<p>All the cloudinfrastructure is mostly hereand we build our applications here.</p>
<p>You know, it'snot because we want everyone's data, it'sjust because this is where we builtthe data centers in the clouds.</p>
<p>Right. Right.</p>
<p>So so there are some interesting problemswith data center relocation, anything.</p>
<p>The third part of this is also that datasets in all these kinds of places.</p>
<p>There are boundariesbetween systems, physical boundaries.</p>
<p>There are different data centers.</p>
<p>They're different parts of the worldare geographically distributedor there are logical boundaries,which is I've got an app that needs datathat's in this part of the business.</p>
<p>And another part of datathat's in a, you know, supply chainwith a partner, for example.</p>
<p>So dataessentially is very static in origin.</p>
<p>And what we need is infrastructuresthat allow you to connectdata, get it flowing in real timewith consistency guarantees,with ordering guarantees,but most importantly,be able to turn that dataand know you know, fungibility, createfungibility with the data,allow it to be consumedvery rapidly and quickly in diverse waysthrough putting APIs on that data.</p>
<p>So that's sort of the second thingthat's driving a lot of this movementaway, right towards distributed,which is the location and the boundaries.</p>
<p>And third thing is a lot of datajust has a lot of noise in it.</p>
<p>There's very little signal, lots of noise,and it makes no sense to backhaulall of that dataintercontinental distances,paying transfer fees to our networkproviders only to draw most of it away.</p>
<p>You know, when we get it all therebecause we're filtering or aggregatingor doing things like that.</p>
<p>So when you start to appreciate,you know, these aspects of data gravity,that data originatesin certain places and loses valueby the time it gets to its destinationthat there is location, boundariesand sensitivity to those things.</p>
<p>There's also highrefresh rate and changes in data, right?</p>
<p>I mean, a lot of systems are busychange to process data.</p>
<p>You know,</p>
<p>I'll take data from this system, processit and push it on to the next thing.</p>
<p>Right.</p>
<p>And what ends up happeningis, you know, you start to see datathat is very high refresh rate.</p>
<p>And so systems are working on staleversions of data.</p>
<p>They're not seeing the latest versionof the datathey've computed on somethingthat's stale.</p>
<p>It's kind of likethe whole Scarlett problem.</p>
<p>When we look into the sky,we're seeing light from starsthat came up billionairesback, right? A million years back.</p>
<p>Yeah, well, guess what?</p>
<p>In terms of latency,your system is seeing datathat could, you know, metaphoricallyspeaking, is a million years old.</p>
<p>It's it's useless.</p>
<p>You know, that's because it's stilland so we need new infrastructures.</p>
<p>We need new ways of solvingthese type of distributed data problems.</p>
<p>And, you know, I'm</p>
<p>I think the next ten years belongs to thisthis area of data sciences. So.</p>
<p>So do you think this is I mean, can Im</p>
<p>I just going to fix thiswith this infrastructure changesor is this going to cause a paradigmshift as in programing models as wellwhere or can I can I leverage what I'vewhat I've just spentthe last 20 years doing right.</p>
<p>Can I leverage that stuff in in thisnew world where data is king or not?</p>
<p>I know you see where I'm going with that.</p>
<p>No, I think it has to be incremental.</p>
<p>Otherwise it's not going to get broadscale adoption.</p>
<p>I mean, we are an incremental speciesand civilization, right.</p>
<p>Disruptive changes,as much as they're disruptive,still have some sort of an on on rampon on board that you can get on the right.</p>
<p>And I think we saw thatwith the first generationof distributed data solutions,a lot of folks tried to build distributeddata solutionsusing some exotic technologies.</p>
<p>You know, maybe five, ten years back,there was those technologies calledoperational transformation.</p>
<p>And, you know,</p>
<p>Google Docs is a great example of that.</p>
<p>And everybodythought operational transformation ishow we're going to solve this data problemfor distributed data.</p>
<p>But operational transformationrequires centralization of the control.</p>
<p>There.</p>
<p>And so it doesn't scale very wellbecause the more participants you havethat are trained to distribute dataand coordinate consistencyin ordering of data, in that centralizedlayer becomes a chokepoint.</p>
<p>Now, in Google's case,they've got extensive infrastructure,very smart scientists,and they've figured out a wayto make operational transformation workat scale with things like Google Docs.</p>
<p>But that doesn't generalizevery well to the average developer, right.</p>
<p>In fact, if you think about distributeddata problems,there aremaybe only five companies in the worldthat really understand it at that scale.</p>
<p>Stats Amazon, Google, Facebookand your and Google.</p>
<p>Right. Those are the five companies. Yeah.</p>
<p>And so most of the body of knowledgeabout how to solve distributed dataat scale is locked up in those companiesand proprietary tech in, youknow, in Indiaand what we're doing at macroat least is sort of working with communityas well as with the with with academiato try and createjust a new body of knowledge,far more efficient than some of these,you know, centralized modelsto be able to do thisin a fully distributive way.</p>
<p>You know, this this reminds mea lot of the problem that wasprevalent in the late ninetiesand early 2000with high performance computing,same same similar type of problemwhen they startedbuilding the first clouds,which they call grids.</p>
<p>Yeah.</p>
<p>With disparate systemsscattered all over the place,they have the same sort of problem.</p>
<p>I have data that needs to be scatteredall over the place, but I need itwith low latency.</p>
<p>I need it as close to the computeas it is.</p>
<p>Do we have any learnings from from that,that old grid storage space?</p>
<p>Absolutely.</p>
<p>I mean, Hadoop is and is theis the consequence of that, right?</p>
<p>Yeah, that's. True. Yeah.</p>
<p>I think great things came out of the HPCclustering grid stuff.</p>
<p>I mean, you're giving me memoriesover here and remembering</p>
<p>Linux in the Bill</p>
<p>Wolff project from back in the early 2000.</p>
<p>That's right.</p>
<p>It was so exciting because suddenlyyou could put things together.</p>
<p>There was another amazing I'm sorry,</p>
<p>I'm going to reminisce for a second,but one of my. Oh, that's fine.</p>
<p>One of my favorite projectsfrom that time wasa project called Mosaics Open Mosaics from</p>
<p>I remember,</p>
<p>I think it might have been a universityin Israel that that did that.</p>
<p>I believe it was a moshesomething or the otherwho built that amazing piece of tech.</p>
<p>And I built my first 3D rendering farmusing that technology as myyou know, people are buildingrendering fonts today.</p>
<p>I built an IT rendering farm as a service,you know, 15 years back using open mosaicsbecause you could uploada raytracing file and we would farm it outusing open mosaics of 25 servers.</p>
<p>That's hilarious.</p>
<p>Yeah.</p>
<p>I wrote I wrote my seniorthesis on distributed raytracing.</p>
<p>Oh, wow. Yeah. Soare we the same person?</p>
<p>I know we might be the same person.</p>
<p>It feels, like, hilarious.</p>
<p>It feels like you're just.</p>
<p>We're versions of each other here.</p>
<p>Yeah, we are. This is.</p>
<p>This is pretty funny.</p>
<p>Yeah. Yeah.</p>
<p>All right, so solet's dig into a little biton what Macromediahas tackled and how,you know, as a developeror maybe not even as a developer, right?</p>
<p>As a systems engineer, as a solutionsengineer, how would I leverage somethinglike what you guys provide?</p>
<p>Is it just this,hey, data is available everywhereor what exactlywhat exactly did macrame tackle for us?</p>
<p>Yeah.</p>
<p>So, you know, we think thatthere's already a lot of high quality,you know, infrastructure availablefor solvingsort of this historical systemof record type of problems.</p>
<p>I mean, we've got databasesthat are amazing.</p>
<p>Yeah, right.</p>
<p>And today,you know, you can go to the cloudand you can fire up a plan at scaleor nobody else.</p>
<p>And you can throw infiniteamounts of historical data at itand it'll chop it up like a champion.</p>
<p>Right.</p>
<p>And, you know, same thing with data lakes.</p>
<p>You've got snowflakes,you've got you know,you've got the databricks of the world,all that.</p>
<p>They're great at historical stuff andthey're trying to move towards real time.</p>
<p>But their architectures fundamentallyaren't meant for these things.</p>
<p>They're rare view systems,as I like to call them.</p>
<p>But these new problems with datawhere there's time sensitive location,sensitivity, actuationvalue, refresh rates, data, gravity,data, noise, they require a new way,a new infrastructure.</p>
<p>And I think of theseas systems of interactionbecause they're closerto where data originates,they're closer to where data is consumed.</p>
<p>The closer where people are.</p>
<p>And so you can solve systemsof interaction problemswith systems of recordbecause systems of record,our databases in beta are houses,systems are actually a dealer networksbecause here you need to ingest data,you need to filter and rich augmentall of that in line and you need to rootdata to its intended recipients.</p>
<p>Systems are people.</p>
<p>It's a network, it'sa networking function.</p>
<p>Now, suddenlyyou need to start data like packetsand you need network processorsthat are moving data around.</p>
<p>And that's what McNamara has built,which is a, you know, aglobal data network.</p>
<p>And it's a serverless</p>
<p>API system, is a serverless platformthat developers simply consumer APIsand we now give them these abilitiesthrough those APIs to solve these,you know, real time active data,operational data problems that we have.</p>
<p>And, you know, just to double click one,they're deep into the global data networkthat MacRobert operates.</p>
<p>Think of it as sort of ace, you know,something like Akamai, a CDP, right?</p>
<p>A topology like a CDM,but a data platform like Snowflake.</p>
<p>Imagine you smash those two together in ain one of those actual linearaccelerators, right?</p>
<p>Like the one in CERN.</p>
<p>And, you know, you got this exoticnew infrastructure that came outfrom smashing these two prototypes.</p>
<p>That's what Macromedia is.</p>
<p>It's a global data networkin the topology of a CD,unlike Akamai or Cloudflare vastly.</p>
<p>But on the other end, it'sactually a data platformlike Snowflake and MongoDBthat gives you very rich data primitivesto be able to deal with these real timeactive data operational datavalues.</p>
<p>So I can take my analytics set.</p>
<p>I want to do on real timeand the tools that I'm used to using,and I can integrate them inwith this global data networkso that I can deploy these analyticsanywhereclose to where the data is generatedor where the data isrequired, where the data comes in, correctis that exactly.</p>
<p>So exactly.</p>
<p>Instead of</p>
<p>I'll give you a couple of direct examplesin the retail world, for example,you know, we're all used to gettingnext day delivery or same daydelivery in many cases.</p>
<p>And that's the Amazon nowadays. We are.</p>
<p>We are. Right.</p>
<p>And that's the Amazon prime effect.</p>
<p>But remember, five years, six years backwhen we didn't have it, you know,you usually take weeks,two weeks to get to us,but we're not going backto that world anymore because Amazonfundamentally changed retail distributionwith an edge architectureinstead of fulfilling everything from,you know, a single fulfillment centerin a state or in a region,they built caches of physical goodsclose to you and me so that when we order,they can basically locatewhich is the closest placeand ship it from there to us. Right.</p>
<p>And then clever algorithmskeep telling themwhat are the most popular thingsto keep on different caches, basically.</p>
<p>So what we're what management has doneis fundamentally build the Amazon</p>
<p>Prime for data, which is we're basicallybringing data and computation on that datamuch closer to where you are and allowingthat to happen in milliseconds.</p>
<p>So we can allow you, for example,to put our network in four of your apps.</p>
<p>And, you know, in retail as an example,a lot of retail customers use usas a way to connect the in-store inventorywith their fulfillment systemand the e-commerce system.</p>
<p>So as an example,you're shopping for hardware,you're doing a new newborn project,you go to your favorite,you know, version of Home Depotor whatever that is as you're shoppingand you add things to your basket,those are itemsthat are actually in the closest store youso you never get oversubscribedbecause that's one of the biggestfrustrations.</p>
<p>For example,people are doing these things out,which is I bought five carts from here.</p>
<p>They ran out.</p>
<p>I got to go to the next door.</p>
<p>Where's the visibility for all of this?</p>
<p>So this ability to create real timeloops of data and retailersis extraordinarily powerfulbecause it allows the small guyswho don't have Amazon's computer scienceand cloud and all of thatto really be able to compete with Amazon.</p>
<p>So, you know, we're seeing a lot of thatsort of intersection of retailingand adsand real time data as a powerful enabler.</p>
<p>Another one is in cybersecurity.</p>
<p>Some of our customers are cybersecurity enterprises that are ripping outtheir centralized data modelsand creating distributed data modelsto take advantage of lower latency sothey can block threats in real time now.</p>
<p>Yeah, so that's a really good use casebecause the sheer volume of datathat's generated from network logsor systemlogs, host logs is, is huge.</p>
<p>And today I was talking to aagency in the U.S.government.</p>
<p>They bring all their cyber threat logsback to the U.S.to do all their processing.</p>
<p>And then they'll tell you two days later,if you've been there, you can't do that.</p>
<p>So with your guys's stuff,</p>
<p>I can push that analyticsout to the edge very easily, right?</p>
<p>I do.</p>
<p>Do I have to do you guys have likeorchestration where I can say, hey,go run this on all these types of dataand it will distribute my,my and my containers or analytics,it'll distribute those out.</p>
<p>Or do I have to do that distributionmyself?</p>
<p>No, you don't have to do the distributionyourself.</p>
<p>You connect us to your data sourcesand your data destinations,and we sit in the middleand take care of all of this in real.</p>
<p>Time for you.</p>
<p>So it's ours.</p>
<p>So you take careof all the orchestration of data.</p>
<p>I'm dropping my service, mymy stateless server serverlesscontainer close to where the data isand it can do its job.</p>
<p>If I can share three slides,it might actually be helpful.</p>
<p>Is that something I could do?</p>
<p>Absolutely. Yeah.</p>
<p>Okay, great.</p>
<p>Absolutely.</p>
<p>So as I was explaining, the Global Data</p>
<p>Network really addresses sort of thisreal time needs around dataand data management and analytics.</p>
<p>Right? And it sort of acts as a plumbing.</p>
<p>It's a little transformation layerthat you put between your data sourcesand receiverswith the consumers and the publishersand it sort of takes care of it.</p>
<p>It's composed of three technology pieces.</p>
<p>The first is what we call the global datamesh.</p>
<p>It's the integration layer for data.</p>
<p>The second is a global compute fabricthat allows you to orchestrate dataand business logic in the formof functions and containers globally.</p>
<p>And then the third pieceis what we call the global privacy fabric,which is the way to secure dataand comply with different data regimesand regulations that might be in effectwherever your data is, you know, eithertransmitting or being stored.</p>
<p>So let's start with the global data mesh,which really is a way for youto integrate data from different systemsjust very quickly and easily.</p>
<p>So you've got systems that are sitting in,you know, across different boundaries,maybe physical boundaries of data centerand region,maybe they're geo distributed data.</p>
<p>Some is in Europe, some is over here.</p>
<p>Maybe it's logical.</p>
<p>You've got datain one part of your business and systemsin one part of your business and maybeother data partner systems, for example.</p>
<p>And so the data mesh acts as a wayfor you to integrate all of this stuffand get data flowing with consistencyand with,you know, ordering guarantees,which is one of the biggestand hardest problems over herebecause getting in get really, you know,you can get all kinds of twisted ways,right when you start getting it flowing.</p>
<p>But the biggest value of this globaldata mesh is that it makes datafungible and consumable by allowing youto put APIs on data very, very quickly.</p>
<p>So, you know, you might spend monthstrying to, you know,clean your dataand then put an API on it over here.</p>
<p>Is that global data mesh?</p>
<p>That's usually a couple of hours of work,for example.</p>
<p>Now, so once the data has been sortof connected and it's flowingand you put an API on top of itand we can do this at vast scales.</p>
<p>I mean, today our global data networkalready handles billions of eventsper second globally,but it's really designedfor trillions of events per second,you know, and so this is an infrastructuredesigned to move dataat vast scales at a very economical costcompared to the cloud.</p>
<p>I mean, we can move data at 90%less cost in one day,that 90% less cost because ofsome of the proprietary pieces over here.</p>
<p>So this is the first piece of the journey.</p>
<p>And then the second piece of the journeyis now bringing business logicand orchestration to move your processingcloser to where your data is originatingor data is being consumed.</p>
<p>This is the anti cloud patternin the cloud.</p>
<p>We shy. Yeah.</p>
<p>We ship data and everything to the.</p>
<p>Yeah we should be delighted computewhich is very far awaysometimes intercontinental distanceshere we flip it,we ship the computer where the data is.</p>
<p>And so with Macromedia you can actuallypoint us to your microservices, right?</p>
<p>And we will surgically movethose microservices that benefitor need to comply with data regulations,for example, and keep themdistributed and move them into a regionwhere that where that process of work,all of this is done dynamically.</p>
<p>And that's why we call it a network,because it's routing a lot of these thingsand putting them in the right placesfor these things to execute.</p>
<p>And, you know, substantially,once you've done the global,you've got the data mesh to integratedata, you've got the compute.</p>
<p>Now that's serving dataon top of that are ingestingand processing data and analyzing data.</p>
<p>Now you need to start worrying about thenext order of problems, which is, yeah.</p>
<p>I was going to sayprotection of data, right?</p>
<p>I, you mentioned it earlier in the podcastwhere you've got</p>
<p>GDPR, you got California's Privacy Act,so you need some kind of access controlover all this data as well.</p>
<p>Right, exactly.</p>
<p>And these are really hard problems.</p>
<p>And the answers we havetoday are terrible.</p>
<p>Your answer really is going to open upa separate you know, goingto open up a separate silo,you know, an instance of your appfor that particulargeo to comply with those particular.</p>
<p>And then, you know, every time you spinone of those up, you need a separate team.</p>
<p>Everybody on security surfacethat is exploded.</p>
<p>It's just an ugly,ugly way of doing things.</p>
<p>And so, you know, in McNamara's view,we've this is the data network that'salready integrating and getting your datato flow across all these boundaries.</p>
<p>Now you've got compute functionsalso being able to serve and,you know, ingest data on top of thatwithout boundaries.</p>
<p>Well, nowwe can basically create logical boundariesand we can pin Japan and Geofence datato specific regions.</p>
<p>We can set affinities and policiesabout how data lives in a region,how it replicates, should it be anonymizedwhen it's replicated out of the region?</p>
<p>For example.</p>
<p>See, I, I love your guys's approachbecause it put data as the primary userinstead of the secondarysecond class citizen,which it has been for the last 40 years.</p>
<p>I love this, a great approach.</p>
<p>So how do people find out more about this?</p>
<p>Yeah, about Macromedia.</p>
<p>Just go to your websiteor how do they get in contact with you?</p>
<p>The best way to to learnmore about Macromedia is go to our website</p>
<p>WW Macromedia dot comand you know we've got a lotof educational material over hereand it's a brave new worldand it's exciting time,you know, for folks who want tosort of explore this new frontier with us,what I can tell you is that there aresome use cases that are, you know,extraordinarilythat impossible to do in the cloud.</p>
<p>I call them impossible appsbecause the clouds are too faror it's too slowand it just is not a good purpose.</p>
<p>Fit for these types of problems.</p>
<p>And so for those classes of real timedata problems, you know, we've builtan infrastructure to solve thembecause we've been thinking hardabout this for now seven or eight years,about what the next ten years of statefuldata computing is in the visible world.</p>
<p>And that's what the platformis really designed to do.</p>
<p>So as much as this is sort of my marketingspiel over here, I like to say that,you know, the next ten years are reallyabout these global data problems.</p>
<p>And, you know, customershave all these emerging data problems.</p>
<p>And, you know, we're a platformthat can help very quickly and easilyturn them into opportunitiesrather than, you know, big challenges.</p>
<p>Hey, Chetan,thank you again for coming on the show.</p>
<p>This has been insightful.</p>
<p>We most definitely want you to come back.</p>
<p>I loved it because we canwe can reminisce.</p>
<p>Yeah.</p>
<p>Let's talk about the the early 2000sbecause I think that was sort of yeah,that was the Cambrian era of computerscience to me because all the.</p>
<p>Absolutely.</p>
<p>You know and I also maybe one last pieceof reminiscing before I say, but</p>
<p>I almost feel like everything we do inthe cloud is just basically puttinga more fungible interfaceon top of mainframes.</p>
<p>Literally every data structure inventedthe mainframe worldhas become a service in the cloud.</p>
<p>Yep, it has. You're right. You're right.</p>
<p>Yeah.</p>
<p>We've got to change that paradigm.</p>
<p>We do.</p>
<p>So. All right.</p>
<p>Hey, thanks again, Chetan. My pleasure.</p>
<p>Take care.</p>
<p>Thanks so much for having me. Thatthank you for listening to Embracing</p>
<p>Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.orguntil next time, go out anddo something wonderful.</p>

</details>
