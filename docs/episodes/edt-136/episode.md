---
layout: posts
title: "Resilient Data in Disruptive Comms"
number: 136
permalink: episode-EDT136
has_children: false
parent: Episodes
nav_order: 136
tags:
    - SABR
    - DDIL
    - Technology
    - Edge
    - Process
    - DevOps
    - Security

date: 
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.png
summary: "In this podcast episode, Darren Pulsipher, Intel's chief solution architect of the public sector, is interviewed by guest host Dr. Anna Scott on resilient data with disruptive comms."
---

{% include soundcloud.html id="edt136" title="#136 Resilient Data in Disruptive Comms" %}

{% include youtube.html id="XhtXz6hx9AY" %}

---

In this podcast episode, Darren Pulsipher, Intel's chief solution architect of the public sector, is interviewed by guest host Dr. Anna Scott on resilient data with disruptive comms. The discussion centers around managing data securely and efficiently in environments with limited bandwidth and disrupted service, enabling artificial intelligence and complex data analytics at the edge. Darren talks about his experience working on Toyota's connected car cloud as a basis for solving this problem and how common data management architectures were utilized to create a solution. The customer's gradual unveiling of their challenges helped identify design patterns that opened the architecture for a successful solution.

Despite intermittent connectivity and dynamic edge nodes, the architecture design process to perform edge analytics is complex and hard to articulate, so they took an iterative approach. First, they considered a solution that would bring all data to one place for analysis but found it impractical due to the sheer volume of data at the edge. Moving applications out to the edge seemed promising until the customer requested aggregate analytics across the edge. After exploring design patterns, they settled on using the data stream design pattern with a publish-and-subscribe hub to create data streams for consumers and producers dynamically. While this approach utilized well-established roots in IT, the customer initially had concerns about topic allocation.

In the past, Darren had to create a PubSubHub ecosystem ahead of time and be familiar with all its components. However, setting up data streams with Kafka or Apache Pulse was challenging, and configuring security was even harder. Utilizing their background in DevSecOps to devise a solution that bundles data stream definitions, input and output definitions, and data transforms into a package consumable by the pipeline. This bundle automatically creates data streams in PubSubHub and sets up all the necessary security measures. The result simplified complexity as developers only needed to focus on algorithms or AI models, while everything else was taken care of in a generic way. The iterative approach with customers helped modify architectures and implementations along the way.

The key challenge with this type of architecture is working with limited resources, such as only having access to two cores and 2 gigabytes of RAM. How much data processing can happen at the edge with limited resources? One of the constraints the architecture team needed to work on was making the SABR stream manager and security measures as small as possible. Darren stripped the code to the bare minimum and eliminated unnecessary third-party packages. The goal was to create a lightweight stream manager that could run on the edge and be portable across different environments. The resulting Saber architecture was scalable and adaptable, able to run anywhere from a smartwatch to a large Xeon server.

Darren and Anna discuss the difficulties of updating AI models in a distributed ecosystem with numerous instances of the same analytics running. To solve this problem, SABR created a learning data stream that connects all instances of the same analytics and handles intermittent comms, caching, and sending deltas to update the models. They also developed a data channel system using the policy strategy design pattern, allowing for different channels with varying levels of data to be sent based on policy-defined rules. This approach allows for more efficient data transmission, reducing the amount of data being processed and increasing the accuracy of the AI models.

Next is how to operate in the DDIL environment by prioritizing sending data by first sending summaries and historical data before real-time data. It is important of defining system expectations and communications policies upfront to ensure consistency across the ecosystem. An easy-to-use JSON-configured and JavaScript-based policy creation and activation process that eliminates duplication of effort and promotes reuse. The architecture has the ability to quickly add new capabilities by taking advantage of existing sabers and data transforms.

The last is the resiliency of the system by dynamically recovering from outages in the system. The potential for dynamic and flexible use of the SABR network. Even if a node goes down, it is possible to move a SABR to another box and still get all the data feeds coming in. It is also possible to use legacy computing by running a very lightweight SABR on an old system that collects and passes through data to the SABR network. The importance of security should not be overlooked. All data streams are encrypted and processes are set to establish trust and attestation of the SABRs to prevent spoofing and snooping of data. Overall, the SABR network offers a promising solution for processing data at the edge with flexibility and security.

The key learning is the iterative architectural approach that the team used to uncover the use cases and pain points that the end users were having. By simulating the architecture, they could find holes in it and get customer feedback. Additionally utilizing design patterns was essential to accelerating the architectural approach. The use of abstraction also provided the ability to swap in and out different technologies throughout the architectural process. Darren believes that this approach has made it easy to create solutions that are easy to use and take advantage of customers' current knowledge.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople process and technology.</p>
<p>On today's episode, Resilient Datawith Disruptive</p>
<p>Comms with special guest host Dr.</p>
<p>Anna Scott.</p>
<p>Welcome, everybody. I am Anna Scott.</p>
<p>I have the extraordinary pleasure todayof actually hostingthe podcastof Embracing Digital Transformation,and I actually get to interview</p>
<p>Darren this time.</p>
<p>So, so welcome. Darren.</p>
<p>We are delighted to actually bein a position to talk to you and put youkind of put you in the hot seatas opposed to in the the seat.</p>
<p>So welcome.</p>
<p>I'm I'm looking forward to it.</p>
<p>I really am.</p>
<p>And I hope I hope that Anna doesmore hosting.</p>
<p>Give me a break.</p>
<p>I could take a vacation maybe some time.</p>
<p>I would love to do that.</p>
<p>So we will figure outhow to make that happen. So.</p>
<p>All right.</p>
<p>So what's on your mind today, Anna?</p>
<p>You have developeda really interesting technologythat has really brought the utility.</p>
<p>And really the focus ofthat is how you can do secureand efficient, essentially data managementthat allowsand enables artificial intelligenceas well as complex data analyticsand do that at the edge and do thatwhen you have things likelimited bandwidth or you have interruptedservice for a long timeso that instead of just saying, hey,</p>
<p>I've got this incrediblenetwork connectionthat allows me to go to the cloud andbe continuously connected to the cloud,you really are informing thisarchitecture saying,</p>
<p>Hey, maybe the cloud there,maybe it's not.</p>
<p>Maybe you get it for 5 minutesand then you lose it for an hour.</p>
<p>And maybe when you are connected,you don't have this beautifulfiber connection.</p>
<p>Instead, you're on a really lowbandwidth connection.</p>
<p>But you still need to be ableto communicate.</p>
<p>You still need to be able to do the API.</p>
<p>So I was really hopingthat you could talk us through, right?</p>
<p>How did you solve that problem?</p>
<p>Like how that is? That is a tough one.</p>
<p>What was yourwhat was your basis of saying?</p>
<p>What do you do about that?</p>
<p>Well, yeah, yeah.</p>
<p>I think it's really interesting.</p>
<p>When we first were approachedwith helping to solve this problem, itmy first thought went back to a work</p>
<p>I'd already donewith Toyota on their connected car cloud,which was which was very different.</p>
<p>But there were somesome things that were similar.</p>
<p>So I started there.</p>
<p>I said, All right, I know how to dodistributed data management.</p>
<p>I've done that before.</p>
<p>I think I can figure this out.</p>
<p>But then the customer were talkingto said, Oh, and by the way,there's this weird thing called DDL.</p>
<p>And I went, Oh, what is DDL?</p>
<p>Disruptive, intermittent,low bandwidth, low latency,all these really.</p>
<p>I don't have really good connectivityand I'mand they it was interestingbecause the way that the customer unveiledthat to us was not all at onceit was over time as weas we kept asking more and more questions,which was great because if they would havejust given it to us all at once,</p>
<p>I would havejust folded up and curled up in a ballin the middle of the room and just said.</p>
<p>I don't believe that.</p>
<p>But that'sthat is a super hard problem. Yeah.</p>
<p>It is.</p>
<p>But butthe way that they led us down the pathor that we discovered the path with themhelped us identify certain design patternsthat were out therethat are common design patternsthat we could use and utilize.</p>
<p>And it really opened up the architecturethrough thisdiscovery process that we had with them,which was really kind of cool.</p>
<p>I totally agree.</p>
<p>So so maybe walk us throughhow how you solve the problem, right?</p>
<p>In terms of I know,</p>
<p>I know you had some data, data managementconstructs that used as a basis,but give us a quick overview in termsof how you what your solution isand then maybe backtrack a little bitand saywhat were the data managementdesign patternsthat kind of informed where you ended up?</p>
<p>Yeah, Yeah.</p>
<p>So the first thing</p>
<p>I did was look at commondata management architecturesthat are already out there, right?</p>
<p>I said, I don't want to reinvent anything.</p>
<p>I really don't.</p>
<p>I want to just use what's there.</p>
<p>The goal is to help the customeras quickly as we could.</p>
<p>So we first lookedat the most common designor data architectures that are out there.</p>
<p>One was datalike bring everything to one place, runmy analytics, send my resultsback out where they needed to go.</p>
<p>That would not work in this casebecause of the sheervolume of the edgeand also the intermittent connectivity.</p>
<p>I would get data sometimes,sometimes I wouldn't.</p>
<p>But the edge still needed analytics done.</p>
<p>They still need to make decisions outat the edge, even disconnected.</p>
<p>So we threw that one outand the next one we looked atwas What if we move theapplications out to the edgeand just move theapplications out thereand everything would be great.</p>
<p>I could do all the analytics at the edgeand that would work.</p>
<p>And when we looked at that,we said, Yeah, this looks very promising.</p>
<p>But then the customer said, Well,we also need to runanalytics across the edge, meaning I'mgathering data from the edge and runninganalytics on the aggregate, not just onthe individual data feeds coming through.</p>
<p>I said, All right, so moving applicationsjust outwards doesn't quite work.</p>
<p>And then I remember, hey,we've done some work in something calledthe Collaborative Cancer Cloud throughan architecture called the Data Exchange,which says I'mpushing analytics out to the edgeand putting the aggregate in together.</p>
<p>And if I pull the aggregate in together,then I can run my analytics there.</p>
<p>I said, That's going to work.</p>
<p>I said, That'swhat we're that's what we need to do.</p>
<p>And then I learnedsomething else from the customerthat the edge was not static.</p>
<p>It was very dynamic, meaningsome nodes are comingin, some nodes are going out.</p>
<p>And I'm like, Well, I can't.</p>
<p>The data exchange requires a static.</p>
<p>I need a well-known edge.</p>
<p>I know what all the edge nodes are.</p>
<p>I've exchanged security keys,</p>
<p>I know where all my data sources areand they're in there coming in.</p>
<p>And they said, Well,that's not all we have.</p>
<p>We have assets moving in and out ofthe ecosystem all the time.</p>
<p>I said, Well,you guys are asking for the impossible,which they said, No,we know you can figure it out.</p>
<p>So then I went, Okay,these three don't work,but there's parts of the threethat do right?</p>
<p>So then then I went and I grabbedmy design patterns book from college.</p>
<p>Right.</p>
<p>And for all you youngsters out therethat don't know what the design patternsbook is, you need to go buy one.</p>
<p>It's it'spretty incredible because you can seewhat common design patterns are used for,what types of situation.</p>
<p>And I looked at a design patterncalled the data stream design pattern.</p>
<p>I went, Wow,we can make this work nice.</p>
<p>And the data stream,it's like 30 years old.</p>
<p>It's an old design pattern, not a new one.</p>
<p>As a this,this might have something to it.</p>
<p>So I started delving into designpattern to data streams more,and it's typically implementedwith somethingcalled a Publish and subscribe hub. Soand I said, Well,there's plenty of pub sub hubs out there.</p>
<p>You got Apache Pulsar,you got Kafka, read thismessage, it sends a message.</p>
<p>But even zero and Q can can do aa pub sub hub.</p>
<p>And I said, All right, let's play aroundwith this idea a little bit.</p>
<p>How can I create data streamsin this architecture that allowfor consumers and producers quicklyand dynamicallybecause they're decoupled itfit It said, yeah, this is going to work.</p>
<p>So that's that's kind ofhow we led to that, that first discoveryon, hey, we could use datastreams to make this all workwell.</p>
<p>So I look at that and I think, okay,so this has well-established roots, right?</p>
<p>That if you're in it professional,there's a good chancethis is something that you already knowand are comfortable with.</p>
<p>You're using a lot of I mean, like I said,there's a ton of pops up hubs.</p>
<p>The data, the data managementstructure is very well known.</p>
<p>If I put those two things together,what I want to think isthis is something that i.t.</p>
<p>Folks will understand.</p>
<p>It isn't going to take a ton of trainingto get them up to speed on.</p>
<p>So putting together an architecture,using those types of foundationsthat that's, you know,it's, it's not a massive lift to sayhere's a whole new skill set and go backand train yourself for the next yearand then maybe you're ready to adopt.</p>
<p>Can you talk through that a little bit?</p>
<p>Like, is this a isthis is easy as it sounds, or is thereis there more to it to.</p>
<p>You know, when I first I'mglad you brought that up because whenwe took this back to the customer,</p>
<p>I go, okay, yeah, that's that's thatthat's something we understandwe already have about some hub.</p>
<p>But what you're suggesting there,it doesn't work.</p>
<p>I said, What do you mean it doesn't work?</p>
<p>It's as well because pub sub hubs,</p>
<p>I have to allocate topics ahead of time.</p>
<p>I have to create thispub sub hub ecosystemstatically ahead of time.</p>
<p>I have to know everything ahead of time.</p>
<p>And how do I, how do I do thateffectively?</p>
<p>And I want to be able to do this quickly.</p>
<p>I want to be able to turn new capabilitiesinto the ecosystem quick.</p>
<p>And I found that when I work with Kafka,where I work with Apache</p>
<p>Pulse, are setting upthose data streams is difficult.</p>
<p>It's hard insetting up the security, all that part.</p>
<p>And I went, Oh crud,</p>
<p>I've got to go back to the drawing board.</p>
<p>Okay.</p>
<p>So I took my background in Devsecops,which I've got a long beforewas called Devsecopsback in the good old dayswhere you had cvesand people don't even know what that is.</p>
<p>R.C.S.</p>
<p>And I said, All right,how can we package up data streamsinto something that's consumableor composable in the Devsecops pipeline?</p>
<p>And I said, okay, so whatwhat do I need in order to do this work?</p>
<p>I have a data transformand an AI algorithm or deep analytics.</p>
<p>Whatever I'm doing, I'm transformingdata or sets of datafrom one thing to informationcoming out on the other end.</p>
<p>And I said, All right,what if I could bundle that togetherwith data stream definitions,input stream and output stream definition?</p>
<p>So I created this bundlethat Icould push through the data ops pipeline,and then when it got deployed,it would automatically createdata streams in the pub sub huband set up all the security for it.</p>
<p>Whoa, wait.</p>
<p>That's simplifieseverything. Right? Right.</p>
<p>The developer only has to worryabout the algorithm now or the AI modeland all of the complexity of setting upa pub sub hub and securing it.</p>
<p>We can take care of in a generic way.</p>
<p>So that was that was kind of our approachwas, Oh, all right,so how am I going to do all of that?</p>
<p>We looked at another five or six designpatterns to come up with all the rest ofof the parts to simplify that complexityof working with the puzzle Hub.</p>
<p>Wow. Soso asalways, I'm really impressed by thatbecause I do thinkone of the bad tendencies of engineersis thatwe love to solve hardproblems with even harder solutions. Yes.</p>
<p>And and really, you know, inand to to essentially attacka problem this hard and do itwith that level of simplicity,</p>
<p>I think is just it's just a beautybecause we all know likeat the end of the day,to be able to deploy it and maintain itand have it be something that's used.</p>
<p>If you can make it simpleand easy to understandand easy to you easy to keep up to date,that is a way better solutionthan somethingthat's the antithesis of that right? So.</p>
<p>Well,</p>
<p>I don't think I would have gotten there,frankly, if I would have knownthe whole problem space upfront.</p>
<p>Really?</p>
<p>Okay.</p>
<p>No, I truly believe thatbecause as we would make some progressand then show it back to the customer,they go, well, what about thisand what about</p>
<p>ARM? Can I still use that?</p>
<p>And then and then it made me scratchmy head and go, Whoa, wait, wait.</p>
<p>I understand something.</p>
<p>So to me, I thought it was greatbecause we were doing like codearchitectureand discovery at the same time, and it wasthis really tight and iterative processthat we use with the customer.</p>
<p>Meaning, what about this? And,and we would</p>
<p>I would say it was all slide wear,but it wasn't because we were simulatingsome of this stuff at the same timeas we were progressing the architecture.</p>
<p>So to me that was, that was one of the keylearnings was to doan iterative architecturewith the customer in the loop saying,</p>
<p>All right, this is what this will provide.</p>
<p>And they go, Well, that's good.</p>
<p>I like that part,but you're still missing this other part.</p>
<p>And I could go back and say, All right,we can make some architectural changes.</p>
<p>Nice that fundamentally changethe implementationnow at the at the beginning.</p>
<p>So I think that helped out quite a bit.</p>
<p>That that makes total sense.</p>
<p>So, yeah, that's good stuff.</p>
<p>So there's another set of questions.</p>
<p>So obviously you're involved withwhat's happening at the edge and the edge.</p>
<p>You can have some really hard constraintswith respect to how much compute, right?</p>
<p>So if you could kind of walk throughand say like what?</p>
<p>What are the, you know, how heavy is thisand does this really have a placeif you're really limited in termsof your like,yeah, well, in some parlanceit would be swap constrained, right?</p>
<p>How how does that fit in?</p>
<p>And then what does it meanwhen you aren't limited andyou really can load this up for compute?</p>
<p>How can you really leverage it in this?</p>
<p>Yeah, I'm glad you asked.</p>
<p>Very different because I was another.</p>
<p>Yeah,that was another discovery that we had.</p>
<p>You know, I do most of my developmentin the data center andespecially in the cloud,which means I have unlimited resourcesright.</p>
<p>So my application.</p>
<p>So what if it takes two gig of Ram?</p>
<p>No big deal, right?</p>
<p>It's done that before, right?</p>
<p>I'm just going to include Splunk, too.</p>
<p>Yeah, Splunk is huge, right?</p>
<p>I can't do those sorts of things.</p>
<p>So when we started talking morewith the customer,they go, Well, yeah,</p>
<p>I want this running on the edge.</p>
<p>It needs to run out therein a sizeweight and powerconstraint swaps constraint.</p>
<p>And I said, okay, well, you know,what do I get like 16 cores 32 gigram he says to cores for giga Ram topson some of the edge and their atom chipsright They're not like big old Xeonsor anything like that.</p>
<p>And so I'm like, okay,so the fundamental partof managing the data streams and,and having the algorithms out there,that part that I automatically managethe data streams that needs to be very,very small and is lightweightas I can possibly make it.</p>
<p>So I started ripping stuff out.</p>
<p>I started saying, Well,</p>
<p>I don't really need that.</p>
<p>I that can goor I had some third party packagesthat just made it easy to do some thingsso I wouldn't have to write the code.</p>
<p>But it camewith a whole bunch of stuff with itbecause they were using thirdparty packets.</p>
<p>So I had to go,you know what I could write?</p>
<p>I could easily write that instead.</p>
<p>That's it's simple.</p>
<p>The algorithm that I need,there is a simpler.</p>
<p>So I'll just write that part myselfand I strip things down to the bare metalor that bare metal to the bare minimumso that I could get the stream managerpart of thisas small as I possibly could.</p>
<p>And now we're under we're under</p>
<p>And a saver is, as you call it,running out there at the edge.</p>
<p>And I think we canmaybe even get that under 50.</p>
<p>Meg if I, if I try even harder,which I want to do,</p>
<p>I've got to get to that point where</p>
<p>I can say I can run this on a watch,right on a smart watch or,or something like that,and that it can handle things.</p>
<p>The other thing that we learned wasthe algorithmsthat are doing the inferencewhich I don't doany of the inference stuff at all.</p>
<p>I don't do any of the data analytics.</p>
<p>I'm just providing a containerfor that to happen.</p>
<p>And we want to make sure that we're givingas many resources to that dataanalytics as possibleand that it's flexible enoughso that these savers, as we call them,can run anywhere on the edge in the cloud,in a data center on a big Xeon serverwith two terabytes of RAMall the way down to a two core atom chipwith two giga RAM or whateverthe case may be, thatthe sabers are portable, that they canthey can go anywhereand create this dynamic meshbased off of the type of algorithmthat needs to runand the resource requirementsthat they have.</p>
<p>Okay. So that that was the goal.</p>
<p>So what it sounds likethen is really because theand we haven't actually called thisby name yet, so this is thesentient ancientbundle resource or the saber architecture.</p>
<p>And so it sounds likewhat you're able to do with the sabersis your overhead for running.</p>
<p>Your system is quite low.</p>
<p>But what really sets your systemrequirements is how much data do you haveand what kind of analyticsyou need to run on it.</p>
<p>And that's really what determinesyour system.</p>
<p>And so you can really,as you said, run this anywhere.</p>
<p>And then the real question oncan you run it as lightweightas you want on the edges,</p>
<p>Hey, what is your data and what are youtrying to do to that data and what right.</p>
<p>How are you going to support that?</p>
<p>And same thingwith respect to memory and storage.</p>
<p>So that sounds enormous, scalableand really liketake it anywhere, do anything with it,</p>
<p>Just make sure you understand how you howyou have to process your data.</p>
<p>Right?</p>
<p>Exactly.</p>
<p>For example, I run Saber's on my laptop.</p>
<p>It's 32 giga ram laptop.</p>
<p>It's it'snot even our latest intel processor.</p>
<p>I think it's like a Gen nineor something like that.</p>
<p>And we're up to like 30.</p>
<p>So I need to talk to you.</p>
<p>I need to talk to you. Yeah.</p>
<p>Yeah, I need to talk to i.t.</p>
<p>I can run 100 sabers easily on my laptopthat are doingminimum data data transformation.</p>
<p>Okay, so.</p>
<p>Then just,just to make sure I caught this point.</p>
<p>So within thethe actual saber, within this bundle,you're able to pull downwhatever your analytics are,right in terms of like whatever yourand whatever your models are, whateverwhatever your code is, it's actually goingto do your data transformation.</p>
<p>So can you talk about like what isdoes this all fall apartwhen you have to update a model?</p>
<p>And are you talking about your big</p>
<p>B being stuckwith like a massive downloadin a constrained environment if you know?</p>
<p>So please.</p>
<p>And you brought up another questionthat our customer had, right?</p>
<p>And that is what and they askedme, Darren,we've got these</p>
<p>AI inference models out at the edge now.</p>
<p>Great. Right.</p>
<p>Because I'm doing</p>
<p>I'm doing inference on 4K camerasor air data or radar data or whateverthe case may be.</p>
<p>And what if I need to update those thethe A.I.model? What do I do?</p>
<p>Because I could have thousandsof these spread all over of the sametype of analytics that are running.</p>
<p>So in Saber itself,we created a learning data stream.</p>
<p>I got the Learning</p>
<p>Channel. That's kind of funny.</p>
<p>And andwhat happens is all the sabersof the same typerunning, the same analytics are connectedto each otherin the same waywhere I can handle intermittent comms.</p>
<p>I can cache things all that,all that intermittentcomms is all handled for you.</p>
<p>And then I'm only sending deltasto the modelsthrough these data streams.</p>
<p>So it's the same mechanismthat I used to do the data analytics,but it's a, it'sa, it's a back channel for no better wordthat is encrypted and protected and testedall the things I need to secure it.</p>
<p>But that helps the data modelsstay in sync.</p>
<p>So if let's say you're doingobject detectionand is doing object detectionand I'm doing objectdetection on the same type of data,when I get an update and it gets an updateto within a reasonable amount of time,depending on, you know, your connectivity.</p>
<p>But the goal is, is that these models livenot centrally, but throughout the wholeecosystem of savers.</p>
<p>That makes sense.</p>
<p>So that'syeah, that's why we had to have that backchannel because the customer Right.</p>
<p>So so give us a little bitmore description on your data streams.</p>
<p>Right.</p>
<p>And like what kind of data streamsyou need for what types of situations?</p>
<p>I think that that would be helpful.</p>
<p>Yeah, that's, that'sa, that's a good point.</p>
<p>This is where DDL came inand where I got schooledfrom from the customer again, Right.</p>
<p>Most of the timewhen people think of data streams,they think, Oh,</p>
<p>I'm connected all the time,or if I'm disconnected,</p>
<p>I'll just cache the data.</p>
<p>And then when I reconnect,just send the data.</p>
<p>Well, they told me,</p>
<p>Well, can you reason the data on a</p>
<p>I know.</p>
<p>What?</p>
<p>No, I can'tbecause I've got,</p>
<p>I've got gigabytes of data I got to sendand they go, well,that's not going to work.</p>
<p>So we came up with this concepton the data streams and we call themdata channelsand this is actually pretty cool.</p>
<p>I was I was happy withthis was like, Wow, this works cool.</p>
<p>We used the policystrategy design pattern,which says that policy can dictatewhen certain channels on the data streamare active and not active and a channelis defined by policy as well.</p>
<p>So I could have a channelthat would be like a real timechannel where I'm sending all the datathat I've transformed.</p>
<p>I'm sending on the real timechannel all the time, all the time.</p>
<p>But I can also create another channelcalled a historical channelwhere I'm maybe aggregating the data oryeah, aggregating the datain a temporal space where I say, I'mgoing to give you a statistical modelof the data in 15 minute intervalsor a half hour interval,and then you can have a summary channelthat says, I'm going to updatejust the summary of what's happenedover the last half hour,and that's all I'm sending.</p>
<p>So you justthe summary of the last half hour, right?</p>
<p>So you can get the thewhat comes across on a datastream can be quite small, right?</p>
<p>It can be very small.</p>
<p>And the cool thing about itis the the consumer of that data stream,all they knowis that I've subscribed to a data streamand the channels are knownthroughout the whole ecosystembecause the policies can be appliedacross the whole ecosystem.</p>
<p>So no longer doesthe algorithm have to know abouthow to connect to what channelor that all that stuff is handlefor you in the stream manager.</p>
<p>So the algorithm goes, Hey,</p>
<p>I just got a saw,</p>
<p>I just got informationon the summary channelthat means that maybe that downstreamsomewhere elsewas running in a digital environmentwhere they could not communicatefor a long period of timeand now they've prioritizedhow they're going to send data.</p>
<p>I can only send the summary because that'sall the bandwidth I have right now.</p>
<p>So they prioritize.</p>
<p>I send summary, I send historical,and then I send real time and see how much</p>
<p>I can pump over this network connectionthat I have for maybe 5 minutes.</p>
<p>Okay.</p>
<p>So it doesn't start of the upstreamdata analyticsthat are happening on that data stream.</p>
<p>It will feed it as much as it can possiblygive it inthrough these different channels.</p>
<p>And the cool thing about it is the channels are defined across the whole ecosystem.</p>
<p>So there'sconsistencythroughout the whole ecosystem.</p>
<p>And that's one, that'sone of the beauties of that architecture.</p>
<p>So it sounds like then therethere's upfront work in sayingwhat is your systemand what does that system need?</p>
<p>What's the expectationwith respect to communicationsas well as your sensor typesand your analytics?</p>
<p>And then you needed intelligent designaround your policyso that it really executesthe way you need it to look?</p>
<p>How easy is it to set your policy in placeand get that into into your savers?</p>
<p>And it's that was one of the thingsthat we had to put upfrontis we had to make it easy to definethat the channel policies,both creation and activationand prioritization,those are the three types of policiesthat we have a very easyit's all JSON configured and JavaScript.</p>
<p>If you need to write anyany code inthere where you're doingreally fancy things with the channel.</p>
<p>So it's very straightforward and easy.</p>
<p>And what we found wasor people that were doing</p>
<p>Distributed</p>
<p>Edge were writing these policies anyway,but they were hard coding itin the applications and so, oh well, sothere was no consistency across deployingmultiple applications on the edge.</p>
<p>So we saw a lot of non reuse.</p>
<p>That'swhere a lot of duplication of effortbecause I would deploy one capabilityand I'd have to knowwhat all the comms links werein their bandwidth and all that.</p>
<p>So I'd have to know all that upfrontwith thisand the idea of the data streams,</p>
<p>I can deploy individual saversthat can take advantageof low lower end saversthat are doing object detectionand change that into tracking an objectthrough a multiple, multiple edge devices.</p>
<p>And I can add, oh, an object disappeared.</p>
<p>That could be another saber.</p>
<p>Or I can say, Hey, there's two objectsthat look the samein two different places, another saber.</p>
<p>So I can add new capability very quicklyby taking advantage of the data,the saber networkthat's already establishedand all those data transforms thatare already out there that are workingand we'vedone this with the customer,they were like, Oh, I want to do this.</p>
<p>And I said, Oh yeah, I'll have that to youthis afternoon.</p>
<p>What?</p>
<p>I said, Well, I'm just taking advantageof all the underlying sabersthat are already there.</p>
<p>Oh, wow.</p>
<p>You know,that's one of the powers of beautiful.</p>
<p>This architecture iswhat it sounds like to methen is this is a system that is very easyto keep current with whatevernew capabilities are coming out.</p>
<p>Right.</p>
<p>So we know AI is moving at lightningspeed.</p>
<p>There's new stuff every day.</p>
<p>Then this system is really designedin a way that,hey, if you've got a new modeland you know where you want to use it,you make a new saber for itand you get it intoyou get it in with the right policy.</p>
<p>And now we're actually maybenot even a policy change, right?</p>
<p>You just say, here's the existing policythat you can useto the to to control this new saber.</p>
<p>And now you can spread that across, youknow, everywhere across your entire mess.</p>
<p>Right. So.</p>
<p>Yeah, in fact,one thing we're working on in the DevOpspipeline is in the deployment model,ie, where do I deploy my saberswhere we're workingreally hard right nowso that the devices can advertisetheir capabilities and what they'rewhat they're connected to?</p>
<p>Oh, beautiful.</p>
<p>What sensors they're connected to.</p>
<p>So when I drop a saberin, I can describe in a saberwhat I'm, what data sources it'slooking for specific like sensorsand also what the capabilities arethat it requires.</p>
<p>So I need the GPU.</p>
<p>Do I need an FPGA or neuromorphicprocessor or things like that?</p>
<p>And then the Saberswould automatically deploy out.</p>
<p>We want to get to that pointbecause that that would be super.</p>
<p>Go say that sounds way too easy, right?</p>
<p>Like, where's where, where are thethe days and days of work to like that.</p>
<p>Do that make. It a target.</p>
<p>Yeah. Yeah. Right.</p>
<p>So we really want to get to that pointwhere the sabers can be very dynamic.</p>
<p>Even if I have a node godown right, or I'm over whelming,maybe it's a gatewaythat is doing sensor fusion, right?</p>
<p>Maybe I'm overwhelming thatmaybe I can move a saber to a boxsitting next to itand still get all the data feeds coming inand do all the transformationson a bigger box because maybe the</p>
<p>AI algorithms more intense.</p>
<p>So I need</p>
<p>I need more cause I need the CPU or inyou to do to do it effectively, whichthat's where we want to do thatmore dynamic the saber network itself.</p>
<p>Yeah, I don't care.</p>
<p>They're, they're completely decoupled.</p>
<p>They canconnect to each other through the pulse ofso Huh.</p>
<p>Based on what you're describing,there's a real wayto use legacy compute in this, right?</p>
<p>Absolutely.</p>
<p>Obviously, there's some things that haveto be done with respect to the data,the data and more specificallythe algorithms to saycan they be run on the existing compute.</p>
<p>But to me, it sounds like thissystem is also flexible enoughthat if there's a real computelimitation at the edge,that is can't really be changed outor augmentedthat you can really focus in on that usethe super lightweight sabersand then say, can we get thatalgorithm down small enough that thatthere's really a path to you to using itwell, or maybe the better way to say,how would you do that right,if you're really constrained?</p>
<p>Well, yeah, yeah, you could evenput a saber that's a passthrough.</p>
<p>So explain that.</p>
<p>Well, allit does, all it does is collect the data.</p>
<p>Maybe.</p>
<p>Maybe I do have a very small footprintand maybe it's old.</p>
<p>I can run a saver on therebecause they're pretty lightweight.</p>
<p>I can run a saber on therethat is just connecting itto the pub sub huband it's just a pass through.</p>
<p>It's not doing anythingexcept grabbing the dataand publishing it into the Saber network.</p>
<p>So you then can take advantageof where you do.</p>
<p>Have can take advantage.</p>
<p>Right? Yeah. And yeah, exactly.</p>
<p>Obviously there's still a networkconstraint piece of that, but that,that means there is a clear wayto work around that isn't re-engineering,that isn't addingyou adding in a new box or, or any.</p>
<p>And yeah the other option is to addeven a small nook right.</p>
<p>Even in Zelnick, I can add it sitting sideby side, the very lightweight and small.</p>
<p>I can I can add it right next to a box that maybe doesn't have a network connectionor any way oftalkingoutside except maybe a USB or an RS.</p>
<p>Wow. Perfect. All right.</p>
<p>Connect that into a nook.</p>
<p>And now, now it's in the Saber Network.</p>
<p>So now I have a new data feed.</p>
<p>I can do tons of stuff with it.</p>
<p>With that data now. Beautiful.</p>
<p>And I know we need to get closeto wrapping up here, but I do.</p>
<p>And I'm going to ask youthe hardest question with no time left.</p>
<p>Oh, no. Right.</p>
<p>Which is we all knowthat none of this can be put in placewithout a way to secure itso that the data that's being transferredis is well controlledand well well monitored and protected.</p>
<p>So can you just do a high level ofhow you approach securitywith this with your saber?</p>
<p>Yeah.</p>
<p>So yeah, that's that's a great question.</p>
<p>First the easiest thing right,that we that they're going to saywell of coursehe's encrypting the data streams.</p>
<p>Absolutely right.</p>
<p>I have to encrypt the data streams.</p>
<p>The keysare generated for data stream encryptionand decryption in a rotating manner,and that happens at build time,where I establisha route of trustand attestation of the saber's.</p>
<p>So when they get deployed,they can be targeted to specificcategories of machines that I trust.</p>
<p>The reason we had to dothat is a saber, if it got out in the wildand could just be deployed anywhere,someone could take a USB keywith the saber, plug it into anything.</p>
<p>And now I could connectto the Saber network. Yeah.</p>
<p>Which I could feed it with garbage.</p>
<p>I can feed it with tons of erroneous data.</p>
<p>So we set it upso the savers themselves are encryptedand they can only be decrypted on boxesthat I have attestedto Beautiful, which is which is critical.</p>
<p>That prevents spoofingand snooping of data on the data streams.</p>
<p>So those are those are the mechanismsthat we use to secure the savers.</p>
<p>Beautiful,perfect.</p>
<p>Well, I think we are close to wrapping up,but in</p>
<p>I said that was the last question.</p>
<p>Of course it wasn't.</p>
<p>Is there anything else that we have thatwe haven't covered that that that we oughtto be talking about with with the saversin howthat architecture works?</p>
<p>You know, Iit has been a journey to to do it.</p>
<p>And I appreciated the the process probablyeven more than the end result, which waswe did a really cool way of doingiterativearchitecture with the customerbecause we could simulate the architectureand find holes in itand get feedback from the customeras we went through this, discoverwhat they knew inside them,but they didn't know that they knewby showing them thingswithout writing a ton of code, right?</p>
<p>To to make it all, all workfor them in the simulation.</p>
<p>So to me that was probably one of the,the most critical aspectsof doing this work.</p>
<p>And the savers themselves,</p>
<p>I think they're pretty cool littletechnology, but I couldn't do it without.</p>
<p>The partners that that we workedwith, our idea was,let's use what's already out thereif we can.</p>
<p>So we're using</p>
<p>Apache Pulsar and we're usingvendors to bundle this allin into a nice package andand sell it with our partners.</p>
<p>So I think that's, that's the directionthat we're headed.</p>
<p>That's great.</p>
<p>Then my understanding isyou're not married to Apache Pulsar.</p>
<p>So if somebody needs differentparts of you've got yeah,with very little code changesyou can easily work withwith whatever softwarethe customer prefers.</p>
<p>Right?</p>
<p>You got to just well and.</p>
<p>That was another thing that we found too.</p>
<p>We needed to put an adapterpattern in place so that we could,we could plug in a different pub sub hub,a different security key generatoror authorization mechanism.</p>
<p>So or even even on deployment mechanism.</p>
<p>So we have abstractions for that.</p>
<p>And frankly, I don't want to do that work.</p>
<p>I'm kind of lazy.</p>
<p>I want someone else to do that work.</p>
<p>So I just put an abstractionlayer in there and call their stuff.</p>
<p>That's that's the key. Perfect.</p>
<p>Well, Darren, thank you so much.</p>
<p>We really appreciate your insight on this.</p>
<p>I know you've got additional collateral,too, that you're going to attach to thisthis this webcast.</p>
<p>So just know if you're curious.</p>
<p>There's a lot more informationto be had in a lot more detailthat is in more of a written form.</p>
<p>And Darren, impressive stufflike I just like.</p>
<p>Thanks and.</p>
<p>I see I see a lot</p>
<p>I see a lot of solutions out therethat are extremely elegant and super hardto actually use and take advantage of.</p>
<p>So having something that folkscan understand that takes advantageof their current knowledgeand I it's a thing of beauty.</p>
<p>So thank you for the little thank you.</p>
<p>Thank you for the details.</p>
<p>I promiseand appreciate your time today and well.</p>
<p>And thanks for. Hosting. I appreciate it.</p>
<p>It waswonderful to be in the in the interview.</p>
<p>See a nice change if nothing else.</p>
<p>Right.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org</p>
<p>Until next time, go outand do something wonderful.</p>

</details>
