---
layout: posts
title: "Certifying Autonomous Flight"
number: 126
permalink: episode-EDT126
has_children: false
parent: Episodes
nav_order: 126
tags:
    - AIML
    - policy
    - process
    - Regulatory
    - AutonomousFlight
    - AirTaxi
    - Daedalean

date: 
guests:
    - Darren W Pulsipher
    - Luuk Van Dijk

img: TBD
summary: "In this episode, Luuk Van Dijk, CEO of Daedalean, talks with Darren about how his company has developed a technique to help governments certify AI-empowered autonomous flight in a highly regulated industry."
---

{% include soundcloud.html id="edt126" title="#126 Certifying Autonomous Flight" %}

{% include youtube.html id="fDz17_XLmx4" %}

---

The aerospace industries are highly regulated, with some unique challenges in introducing AI-enabled autonomous flight. Because of the nature of flying, where things that go up can come crashing down and cause harm to people on board and people on the ground, regulations and certifications in this industry are very prescriptive and rigid. Luuk discusses the challenges and the techniques used to overcome those challenges in this episode of “Embracing Digital Transformation.”

## Simplification

Electrification made everything much more accessible and straightforward. Everyone was expecting that urban air taxis would already be running now. However, regulations and certification that protect the public have slowed down the industry. People in the aerospace industry understand the challenge of working in this highly regulated space. Mavericks are trying to make this industry move faster, but government regulators are concerned about safety which slows things down. Regulations built around human pilots must change to enable machine flying. But these regulations have worked in the past and served the community well. So, there is resistance to change.

## Regulatory Comparison

Companies like Daedalean are working with the government to certify AI and autonomous flight within the existing regulations and in some cases updating the current laws to allow this new mode of transportation while keeping the public safe.

Some surmise that the autonomous automobiles are like autonomous flight, but the design spaces are very different. Autonomous vehicles are less regulated than autonomous aircraft. Additionally, the physics of automobiles are fundamentally different. If a car gets confused, it can merely pull over to the side of the road. When an aircraft gets confused, it must land, which is the hardest part of flying. Additionally, autonomous vehicles have many more objects to avoid and have a complex operating environment, including people, objects, animals, traffic signs, and signals. In autonomous flight, the working environment is in 3D but does not have all the potential obstacles to avoid.

## Complex Training

These complex environments require millions of hours of training for the AI algorithms for full autonomy. Additionally, regulators and the public need to gain confidence in AI's ability autonomous fly aircraft. One of the approaches companies leverage is to augment safety by giving pilots an autonomous co-pilot. This is especially important in small aircraft and helicopters, where the safety numbers are comparable to motorcycle riding. Larger aircraft are already highly safe with incredible safety records.

## Certifying AI algorithms.

In addition to certifying autonomous flight, many regulators are concerned about the ability to certify AI algorithms. This is an inherent problem in all AI algorithms that rely on extensive training sets to fine-tune the AI models. This comes from the fact that many regulators want to inspect the specific algorithms to understand how decisions are made for the algorithm. Many AI neuro networks used for pattern matching and visual AI processing are not defined by a simple mathematical model but instead fine-tuned by training data.

## Building Trust with AI

AI tools like ChatGPT are showing how the masses can use AI. However, many people are worried about the accuracy of these AI algorithms in producing results. Luuk reminds us that AI is only as good as the data they are trained with. Garbage in, Garbage out. One of the problems is that people are beginning to trust tools like ChatGPT to give accurate results completely, which is misplaced trust. This could damage to trust needed for AI’s driving or flying autonomous vehicles.

More information about AI autonomous Flight can be found at https://www.daedalean.ai/.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople process and technology.</p>
<p>On today's episode, certifyingautonomous flight is Luuk Van Dijk,</p>
<p>CEO of the Deadalean.</p>
<p>Luuk.</p>
<p>Welcome to the show.</p>
<p>Thanks for having me.</p>
<p>Hey, Luuk, you're the CEO of Daedalean,</p>
<p>Did I say it right?</p>
<p>Almost. I say the Daedalean.</p>
<p>But anyway, I when I chose the name,</p>
<p>I knew I was going to have to acceptall the pronunciations that people get.</p>
<p>So it's great talking to you.</p>
<p>We talked just briefly before this, and I.</p>
<p>I learn about your companythrough a former Intel employee.</p>
<p>Really fascinating stuff.</p>
<p>But before we get into that, Luuk,tell us a little bit about yourself.</p>
<p>Okay.</p>
<p>My name is Luuk Van Dijk.</p>
<p>I'm a physicist by training,actually a theoretical physicist,but I bluffed my waythrough a career of programing computers.</p>
<p>I moved from Zurichfrom the Netherlands, where I was born,and raised to Zurich in Switzerland.</p>
<p>When Google opened an officethere back in 2005,</p>
<p>I worked for Google for quite a long time.</p>
<p>Programing computers.</p>
<p>Then I had the good fortune.</p>
<p>Amazing opportunityto work for Space X on the flightcontrols in Hawthorne,</p>
<p>California for almost a year and a half.</p>
<p>Then, for various reasons that wedidn't go into, I returned to Switzerland,which is very nice and comfortableand an excellent place to raise kids.</p>
<p>And a couple of thingscame togetherthat made me decide to start this company.</p>
<p>Therewere a couple of things from my past.</p>
<p>Having worked for Google,having worked for Space X,seeing that you can do thingsthe aerospace way, you can do thingsthe Internet way, and you confuse themand do amazing things.</p>
<p>But certification is reallysomething that you should useto make your thing betterrather than see itas a bureaucratic handicap.</p>
<p>There was something I got fromthe episode.</p>
<p>The American style ambitionwas something that you have therethat you have less of hereand that you can do that.</p>
<p>Flying is an interesting problemspace to be in.</p>
<p>So these things came together and that'swhat made me decideto start Daedalean in 2016.</p>
<p>And our goal is to bring modern roboticsand artificialintelligence and machinelearning, innovation and all these thingsto the worldof certifiable flight control systems.</p>
<p>And the general belief back in 2016was that machine learning.</p>
<p>Nobody knows how that works.</p>
<p>Therefore it'sfundamentally un certifiable.</p>
<p>And on the other hand, the culturefrom academia and getting stuff to workor, you know, programing things for phonesis completely disjointfrom how you program stuff for aircraftor for rockets.</p>
<p>So I thought it would be interestingto join thatto bridge these gaps and to createa way touse thesemodern techniques in an aircraft,which is the solutionfor an actual interesting problems.</p>
<p>Namely, how do you fly at scalewithout relying very deepin the control loop on the human andso that's what we set out to do today.</p>
<p>We're about 100 people, mostly in Zurich.</p>
<p>I poached one of your employees.</p>
<p>Yes, you did.</p>
<p>The ones you just talkedabout to be my head of businessdevelopment in the United States.</p>
<p>So we have her name is my Aberdeen.</p>
<p>And she was supposed to be here with me,but she's currently developing business.</p>
<p>She had the Phenix, Arizona officeand dealswith all our key accounts of whichthere are many in the United States.</p>
<p>And then we have a little dataannotation office in Latvia,and the core of engineeringhappens here in Zurichand what we've built so far is visualbased systems that, you know,just like the human eyecan see where you are, where you can fly,where others are flying,that you fly into,and where you can land, which are arguablythe three most important things you doif you're on your ownin visual conditions in aircraft.</p>
<p>So do I mean, that was a lot. Yes.</p>
<p>I got to unpack a little bit of that.</p>
<p>So you're you're targetingprimarily these autonomousflying like air taxis in urban areas. And</p>
<p>I would love to have that.</p>
<p>I would, yes. Yes, I wouldn't. Right.</p>
<p>And they were definitely the inspirationto get started.</p>
<p>So in 2016,there were a couple of companies in</p>
<p>Germany and also the United Statesthat were, you know, startingwith these vehicles that were calledelectrical electric, vertical takeoffand landing for urban mobilityor a local regional mobility.</p>
<p>And what struck me wasthat electrification of the drive trainwould makewould make everything a lot simpler.</p>
<p>And things that are simpler are safer andcheaper and, you know, generally better.</p>
<p>And so the total number of aircraftthat are built in the worldin any given yearcurrently is around 5000, sorry, 3500.</p>
<p>So there's almost nothingcompared to 80 million cars.</p>
<p>But if this urban mobility takes off,you know, you're going to have 50,000 jobsor no 100,000 metersor even flying around the world,which would massively changethe way the aerospace industry is stacked.</p>
<p>So I thought, ha, there's an opportunitybecause how are these peoplegoing to find peoplewith a commercial pilot license?</p>
<p>So that's what got me started.</p>
<p>Since then, two things happened.</p>
<p>First of all, the timelines that I and</p>
<p>I guess everyone hadfor these urban mobilities was,you know, it should be flying by now.</p>
<p>Yeah, of course. Yeah.</p>
<p>And turns out that I so,so that didn't quite happen.</p>
<p>The other thing that happenedwas we saw that an existing aircraftthere is actually a lot of headroomand there's a lot of things to be done.</p>
<p>Also, we learned through discussionswith very people very high upthat the relevant authoritiesthat barging in and saying,oh, okay,we're going to take out the human,put in this computer here,trust us, it's safe.</p>
<p>You know, it'snot a it's not a recipe for success.</p>
<p>We knew thatyou have to actually certified,but they gave us the very important hintthat we should be a good copilotbefore we tried to be good pilots.</p>
<p>And that actually made us rethinkour whole marketing approach.</p>
<p>So with respect to DC vehicles, that wasdefinitely the targets we were going for.</p>
<p>I guess this is a general themein aerospace.</p>
<p>The timelines are so long.</p>
<p>The things are only started by peoplewho didn't get the memo.</p>
<p>It was hard.</p>
<p>No, I'm guilty,so I thought it would be done by now.</p>
<p>These things would be flying,but that doesn'tundercut the fundamental assumptionthat there's a viable business case hereby solving problems.</p>
<p>Some of these details are definitely goingto definitely going to happen.</p>
<p>And they will need thisbecause in current instrumentflight rules,you can have one air taxi over Londonand then everybody elsestay the hell out of the airspacebecause there's the air taxis there,everybody's there.</p>
<p>So if you want to fly 100 of these thingsover London or Paris or New York,you're going to have to do somethingdifferent than flying an instrument.</p>
<p>Rules flying visual rules.</p>
<p>You know, you get to maybe a couple more,but then the responsible partyto not fly into each otheris is own boards.</p>
<p>And so you have to have a systemthat flies much better than the humansto keep all these things apart.</p>
<p>You need to do some vehicles,visual communication, butyou can't really rely on a central systemthat solves it for everyone.</p>
<p>Because the rules of the air todayallow people just to fly there.</p>
<p>And these rules are set downin international treaties,the change in the timescale of years.</p>
<p>So one of our basic ingredients wasyou have to fly like a human betweenhumans in a system that's designedfrom 120 years ago around humans.</p>
<p>So humans are actually very deepin the control of holding a stick.</p>
<p>And in most aircraft theyif you let go of the sticks,eventually you will die by it.</p>
<p>So the autopilot does a trivial amount ofautomation in cruise,but for almost all aircraft,you have to disengage that by hand.</p>
<p>There's no helicopter. Yeah.</p>
<p>For example, to land.</p>
<p>And then there's a rulewhich in the United Statesis called the part 90 1113,which says thateven if you're flying instrument rulesor visual flight rules, doesn't matterif the conditions are visual, other peoplemight be flying on visual rules.</p>
<p>And that means it's your responsibilityto look out the windowto not fly into them.</p>
<p>So there's no instrument todaythat can do the looking out the window.</p>
<p>So it's it's actually on visual,it's in the law.</p>
<p>And these things change very slowly.</p>
<p>And there's a good reasonthat they are the way they are.</p>
<p>So there's there's bad reason,which is the legacy.</p>
<p>But the good reason is, well, it works.</p>
<p>And visual information is the highestdensity of information around us.</p>
<p>And it's on accident that we have eyesthat are sensitive spectrum.</p>
<p>So you want to build systemsthat can fly likea human evaluating that informationand fuzing it all.</p>
<p>This is another thing.</p>
<p>It is an aircraft today,very much not the case.</p>
<p>Every instrument is is by itselfclamoring for the attention of a pilotwho has the job of fuzing it all into onecoherent picture of the situation.</p>
<p>And this is on purpose because notall the instruments are equally reliableand you have to make some judgment calls.</p>
<p>I'm not forcing thisbecause I look outside and I can still seethat I'm following this coastline.</p>
<p>So somebody must have been messingwith my G.P.S.dips.</p>
<p>Generally, it's a world miraclethat the thing exists.</p>
<p>It's not actually safe enoughto conduct flight operations, for example.</p>
<p>You know,you're not supposed to land on zone.</p>
<p>We didn't do it,but you're not supposed to.</p>
<p>So the next thing you have to dois certify that because in the air,nothing nothing goes in an airplanewithout the FAA signing off on it.</p>
<p>You have it?</p>
<p>No, is a quick question on that,because it is.</p>
<p>Does the FAA kind of controlall the airspace throughout the world?</p>
<p>No, no. But no.</p>
<p>But I mean,but if if I get FAA approval on something,does everyone else kind of say, well,if you got FAA, it's good enough was So</p>
<p>I don't know.</p>
<p>I it's not it's not it's not that simple.</p>
<p>But between the FAAand the AASA, you know,if the systems get certified, then you'rethen then you're in a good start tothe rest of the worldwill probably recognize or compete with.</p>
<p>So there's differentkinds of certification.</p>
<p>This is about the instrumentsand the equipment.</p>
<p>The other crucial thing is the the rightsto operate in a certain way.</p>
<p>You know,</p>
<p>I have this airline, I fly from hereto there doing this kind of operations.</p>
<p>I you know, I do search and rescueor I have this commercial, we call itjust transporting people to holidays oror I have cargo or transports or organs orthat particular type of operationsalso subject to certification.</p>
<p>And there the FAA is,you know, is rules for airlines,also knownas the United States of America.</p>
<p>Yeah.</p>
<p>And the other rules, the other land,also known as the European Unionand some nearby things. Andso these are twoaspects that you have toyou have to both have and bring.</p>
<p>But so if you have those two,then you have a good start.</p>
<p>So so just real quick,because when you were talking,</p>
<p>I was thinking this sounds a lot like thethe problemsthat we're having with the autonomousvehicles and certification.</p>
<p>And I need visual. I need.</p>
<p>So would you say a lot of thethe technical andand political or certification issuesare very similar to autonomous vehicles?</p>
<p>In some ways, yes. In some ways not.</p>
<p>So we're really in a different cornerof the design space.</p>
<p>So first of all, drivingis very unregulated. No.</p>
<p>Compared to the airspace compared to.</p>
<p>Okay. Really.</p>
<p>And the other thing is that if you driveand your robot doesn't know what to doanymore, your robot can try to pull followup, you know, flash the red light.</p>
<p>I don't know.</p>
<p>Are we doing any more installing?</p>
<p>You can't do that in an airplane.</p>
<p>No, it's called landingand it's already the hardest thing.</p>
<p>So if your computerdoes not allow anymore,you know, you haveyou have quite a big problem.</p>
<p>So and from a, you know, physicistfrom a physics point of view,apart from the half empty squaredcomponent of your energy,you have the M times, G times thethe heightcomponent of the energy,which is the thing that really kills you.</p>
<p>That's what you do.</p>
<p>Yeah, yeah. Falling out of the sky and so,so with thatthe barrier to put, to try out the things,to put new thingsin is really far more rigorousthan in automotive.</p>
<p>In automotiveyou have the certification levelsfor the safety systems that goes to ICL,level B, which is the highest.</p>
<p>So ISO, ABC, D in Aerospace, it'scalled BULB, the design assurance level,which goes from E meaningno to cabin light, has no safety impact.</p>
<p>DC is or is the highest.</p>
<p>And one of the things your colleague,your ex colleagueanalyzed in her time at Intelis that there's ISO leadershighest level is roughlythe same amount of work is as Bell</p>
<p>C to get the goal is twice more worktwice biggera stack of paper with evidencethat it actually works as advertised.</p>
<p>So it's far more rigorous.</p>
<p>And one of the consequencesis that the systems that are allowed to dothis kind of things are really simple.</p>
<p>And you know, it's technology.</p>
<p>Of the 1980s and ninetiesand, youknow, they can do it super reliable.</p>
<p>But it's it's a fairly simple stuffand it requires a human to switchon and off if it if it doesn't workand is deliberately not integrated,it comes with all kinds.</p>
<p>So there's a there's a massive barrierto get into that space,but the robotic problemis actually much simpler.</p>
<p>So driving is a much harder problemthan flyingbecause in drivingyou have the super complex environmentwhere you have to understandthe difference between a rock and a dogand a traffic sign and a bicyclethat actually goes this way, or onewhen you're flying youto just avoid things.</p>
<p>Right? Right.</p>
<p>If you can see it, do not fly into itunless you really sureyou want to land on it.</p>
<p>So that's a problem.</p>
<p>And this is one of the things I alreadyrealized back when I started companies.</p>
<p>So that's the size of problem isyou can hope to solvewith a fairly small team, right?</p>
<p>So these are these cars that was,you know, in 2016, already morethan a decade on the way since the DARPA'schallenge was won by Sebastian Poon.</p>
<p>Uh, so, you know, you're going to needhundreds of millions of dollarsand insanely big teams,and you're going to have this big shakeoutbetween big companies trying to do this.</p>
<p>And then even then there'sgoing to be a valley of promisesand a the throes ofdespair.</p>
<p>Yeah, and all that.</p>
<p>So, you know, we havewe have small version of that, too.</p>
<p>But the general premisehas remained intactso that applying we canwe can actually do simple things.</p>
<p>And so one of the insane sides that camewith these comments from from peoplehigh up in the FAA,you know, be a good copilot firstis also made me realize that if youif you come in with okay</p>
<p>I'm going to take the human out,puts autopilot in,then you immediatelyhave the uphill battle to fight.</p>
<p>Oh, but is that safe enough?</p>
<p>Whereasthere are millions of pilots worldwidethat have to flysingle pilot operations for them.</p>
<p>What if we gave all these pilotsan extra copilot?</p>
<p>Extra copilot?</p>
<p>Now we have a clear safety case wherewe can start by adding immediate safety,also some cost.</p>
<p>But we'll we'll work on that separately.</p>
<p>So once we havethis copilot roll out, we can nowdo things that previously requiredto do a pilot operations.</p>
<p>Maybe we can do some of themwith the pilot and the electrical pilot,and then maybe in the course ofhundreds of thousands of flight hours,we can gather the evidencethat it's actually betterif the electric copilotdoes the landing in a takeoffbecause he tends to fly into here.</p>
<p>Most common thing with helicoptersis flying into a mast that you just saw.</p>
<p>You just forgot about it.</p>
<p>So things like that.</p>
<p>And then we can say, okay,we can move to the phase where,you know, it's betterif the human doesn't touch anythingand here's the evidence to do so.</p>
<p>And so these these are battlesthat will have to be fought onon actual data and and thingsthat are true and not a pipe dream.</p>
<p>So with respect to that,</p>
<p>I've had to tell my investors, listen,you know, in the course of the years,we have the understandingthat we're not going to be donein 2021, but definitely 2028.</p>
<p>There.</p>
<p>Good. I'm kidding.</p>
<p>So wewe are not in a hurry to do things wrong.</p>
<p>And you have to do this carefully.</p>
<p>So anyone who promises you beyond visualline of sight, full autonomyfor arbitrary operations next year,you know, good luck.</p>
<p>The technology may be in principle there,but the evidence that is going to getservice is not.</p>
<p>And that's just the autonomousflying part.</p>
<p>So for many of these new airframes,you also have, you know, you have newpropulsion, give new structures,you have new types of operations,everything is new.</p>
<p>So so they have to get certifiedindependent.</p>
<p>Right? Right, right.</p>
<p>So you have to firsthave your airframe certified,you know, to do pilot operations.</p>
<p>There are somethat want to go to autonomy directly.</p>
<p>But then they also say, okay, which is also going to take us longer to get started.</p>
<p>So in the meantime,we think we have a valid business casewith existing aircraft,uh, both rotorcraft and uh, and smalleraircraft, not the big parts.</p>
<p>That's called part 25, the big airliners.</p>
<p>They're not actually that broken.</p>
<p>So, you know, they're expensive,but they are super safe.</p>
<p>You know, there was a year recentlywhere there were zero crashes worldwideof any of these, and then the next onewas the big disaster.</p>
<p>But that was a common cause of extremethat we shall not discuss.</p>
<p>But so that is that's not the most brokenand it's not the most urgent fix.</p>
<p>But anything that's smaller,smaller than 19seats, all the helicopters,the probability to die per hour is roughlythe same as riding a motorcycle,which, you know, forsome people is acceptable. Butthere's a lot ofheadroom for safetyand also for scaling operations.</p>
<p>And yeah,so that's that's a very interesting field.</p>
<p>And so so,</p>
<p>Luca, a quick question, because the thingsthat you're learning aroundgetting this certificationfor autonomous, right?</p>
<p>Because now we have eyesand machine learningthat are starting to infiltrateall the work that we do, right?</p>
<p>Like Chad GPT is a great example, right,that we shaking the world Andcan I take any of the,any of the learnings that you guyshave learned onhow to certify autonomy for aircraft?</p>
<p>Can I can I take some of those learningsand apply them into other fields?</p>
<p>Um, perhaps yes,</p>
<p>I need to think about that.</p>
<p>But first we need to distinguishautonomy and, and a I thinkso first of all, air is of coursea marketing term.</p>
<p>It means and yes, we've asked quite,you know how to do yetbut so what we do is machine learningand the reason we do machine learningis that the only way to solve a problem,like is there an aircraft in this pictureor, you know, awarenesspictures, the runway just from pixels.</p>
<p>The only way to currently solvethat is by using machine learning.</p>
<p>So it's a means and moment.</p>
<p>And then these are building blocks.</p>
<p>You need to get to the types of operationsyou might want to do without pilots.</p>
<p>So if that's your end goal,your your, your, your bumper to this,we can already do thingsthat are not fully autonomousbut still add valuebecause there's no other instrumenton boardthat can look outside the window and say,ha, there's a runway.</p>
<p>Right? Right.</p>
<p>So, uh, that's on the AI.</p>
<p>Yeah. So, Soit's learning.</p>
<p>Learning, learning, learning. Yes.</p>
<p>So actually a large part of what we doas a company, which we haven'ttalked about in the last half hour yet, is</p>
<p>So first you need to make it work right?</p>
<p>Then you need to provide the evidencethat it works to get it certified.</p>
<p>What we have to do.</p>
<p>We also have to develop the theoryof how to produce the evidencethat it works for machine learning system.</p>
<p>And that's actually very interestingbecause because these normal traditional,simple avionics systems, they work or not,and you can test it and they work.</p>
<p>You know, you they take a couple of bitsof information out of the environmentand manipulate a couple of bits,even an engine controller for a turbineengine is relatively you know,it measures a couple of variablesand it controls a couple of variables,and it does very reliably.</p>
<p>And you can test thatand it's not trivial to get it right.</p>
<p>And it's it's easy to get it wrong,but we know how to do that.</p>
<p>So now you come in with a cameraas a sensor.</p>
<p>Now I have 12 megapixel and all these 12megapixels can have a valuebetween zero and two and 55.</p>
<p>So the input space is ginormous.</p>
<p>You know what?</p>
<p>What kind of statementdo you want to make about it works, Buteven the input space itself isis too large to make such a statement.</p>
<p>And there's not that for a reason.</p>
<p>If you could easily see this is the crispboundary between something that worksand doesn't work that you probably didn'tneed machine learning.</p>
<p>So you need machine learning to begin withbecause the problem nature is suchthat you need something that can dealwith the inherent uncertaintythat is the problem.</p>
<p>So what we did is we went to a user firstoff, the European version of the FAA,and we proposed a method,basically a framework to think about it.</p>
<p>And then they said that's very timelybecause we were just scratching our headwhat to do next.</p>
<p>And so, you know, come inand we did two projects with themcalled the Innovation Partnership projectsin whichwe paid Acer for their consultancy,but they added some consultants for freebecause the topic interested them selves.</p>
<p>And so a consequence of that was thatwe owned the outcome of that.</p>
<p>But then, you know, we wanted the worldto stop thinking that it was impossibleto certify these things.</p>
<p>So we published these reports or,you know, the bulk of it.</p>
<p>And then the FAAwas interestedand wanted to actually see if,if that would stick,if the rubber hits the runway, the tarmac.</p>
<p>And so we were invited todo a project with the FAA inthis was in 2021.</p>
<p>And that report also came outbecause the American taxpayermoney well-spent, entirely public.</p>
<p>And what we did there iswe looked at the visual learning guidanceand industry reports.</p>
<p>What we developedwas the theory of how to arguethat a machine learning component is safe,which is slightly differentthan normal hardware and software.</p>
<p>So we have the systemthat takes in the cameraand then there's a small bird in therethat tries to draw a box aroundan aircraft in the air,and it should be, which is really hard.</p>
<p>And also for humans.</p>
<p>So first of all, humansmiss most of thembecause they don't actually see that much.</p>
<p>But even though I can show you the imageand you go, isn't an aircraft, I'mnot sure could be cloudsand so you have to make a systemthat tries to make a judgment call,and then you have to guarantee thatthat system works well enough.</p>
<p>So first you have to establishwhat is well enough.</p>
<p>And we want to be able to see 95% of alltraffic that comes within this distance.</p>
<p>Okay, good.</p>
<p>So we have that system requirement.</p>
<p>Now, how suppose we make a componentthat gets it right 90% of the time,</p>
<p>Then you have to do two things.</p>
<p>You have to first make sure that thatin the context of the bigger system.</p>
<p>So fortunately,we don't have just one pictures to go on.</p>
<p>Also, when you land, it'snot like you look out the window once,close your eyes and then so, so sothere is some inherentdesign freedomyou have in making the system such thatthere's 90% actually multiple sizeto something large enough,or that technically that one -90%multiplies to something large enough,unlikely that you'll miss the runway orthat, you know, I'm not seeing the runway.</p>
<p>Let's not land here.</p>
<p>No, let's defer to a higher level system.</p>
<p>So that's one.</p>
<p>And then the other thing you have to dois you have to guaranteethat this 90% actually holdswhen you go out in flight.</p>
<p>So you train your system in the laband you evaluateand you tested, they say, okay, no,this is acceptable.</p>
<p>I have my system requirementswhich say that this is good enough.</p>
<p>Now I go out and suddenlythe sun is from the eastinstead of from the west,and my system completely falls apartbecause I'd never thought to testwith the sun coming from there.</p>
<p>So how do you guarantee thatthe thing actually still keeps workingwhen you go out into the wildand that turns out to be dependenton how you teach your data.</p>
<p>So in machine learning instead of lockingsome engineers in a room with chocolateand coffee and requirements and waitinguntil they produce some code that works,you have a computer programcalled the Machine Learning Algorithm,exploiting the design spaceof what's called the model,which is not a computer program.</p>
<p>And when you've come to an acceptablemodel,you go into point in the field,and that's driven by the data.</p>
<p>So what you need for thatis that the data that he used to evaluateyour performance onis actually representative of the datayou have out in the field, which is,you know, it sounds trivial and obvious,but it's actually a massive shiftfrom how things were,how you could do things in the moretraditional system.</p>
<p>Now youstill need those traditional methodsbecause this machine learning thingruns in software that runs on hardware.</p>
<p>So there's hardware stuff and certifiedthe software itself and certified,but there's an extra thing you have to do.</p>
<p>You have to certifythat the emergent behaviorof this new networkor whatever machine learning thing you didis adequate to do to solve the problemthat you are trying to solve.</p>
<p>So that's a whole thingthat we developed with Iowaand the FAA and that we're now testdriving with the partner.</p>
<p>Everything is in Florida and they'remaking for us the box of the camera.</p>
<p>We make the software and we're applyingfor what's called an STC supplemental typecertificate under the FAAwith concurrent validation by ASA.</p>
<p>And so the software in the hardwarewill be ready pretty soon.</p>
<p>And then there might be some more monthsbefore we're done presenting thethe the the safety argumentsto the FAA and the ASA.</p>
<p>And then we hope to be the firstsystem in the worldthat has an STC to design assurance level.</p>
<p>See this deal, seewhich is not trivial for machineand components and it's specificallyfor the application of traffic detectionfor human pilot assistance.</p>
<p>So it's not immediately, you know, themost ambitious, fully autonomous flying.</p>
<p>Here's a whole system that does everythingthat can putyou're taking it step by step, whichand it will be a beachheadinto certifiable machine learning systems.</p>
<p>So, you know, oncewe show that this is possibleand that we we we've covered the gaps,we have a system that has a clear safetybenefit, but it should actually workbecause if the beeps all the timeand there's no aircraft there, you know,that's actually dangerousif you give the pilot a falsesense of safety,it's actually also super dangerous.</p>
<p>So so we're going to have a systemthat actually needsa nontrivial safety barand that we use the methods to ensurethat the data was treated correctly.</p>
<p>Yeah.</p>
<p>Yeah.</p>
<p>Do you think I can use that same methodin other machine learning systems, like,for example, a forklift out in a factory?</p>
<p>Right.</p>
<p>I, I would, I would think yes.</p>
<p>So now we've cometo actually answer the questionthat you ask me 10 minutes agois this reusable salt?</p>
<p>So this method of assuringbased on the data.</p>
<p>So it's a combination of dataassurance guaranteesthat your machine learning component workand your architectural mitigationmake sure that the finite failureprobability actually adds up to somethingreasonable at the system level.</p>
<p>Those two things are</p>
<p>I think, generally applicableand and good serve elsewhere.</p>
<p>So yeah, so can can someonethat's in this field, right.</p>
<p>I mean, you don't want tocapture the whole machine learningcertification field that's just minutes.</p>
<p>Yes. Wherewhere can they get more informationon following the same approach because itsounds like it sounds like a verywell thought out,methodical approach that I would like.</p>
<p>Do you guys have a white paper?</p>
<p>Do you have anything?</p>
<p>So we havewe have some blog posts and white paperson our on our website deadline.</p>
<p>Not I.</p>
<p>So you don't have to remember whereall the vowels go,where we refer to some more things.</p>
<p>So we tend to focus on aerospacebecause it's a big enough problemand it's a large enough hurdle.</p>
<p>So the temptation to spread out eitherinto uncertified systems or into otherdomains is always high.</p>
<p>But we've managedto keep our relative tightfocus on manned flightsand yeah,no. And the reason I'm askingis a lot of my a lot of my customersand my listeners,they're dealing with machine learningand AI techniques now.</p>
<p>Right.</p>
<p>And they're trying to say,can I trust this?</p>
<p>Right, Because it's certified.</p>
<p>What what are the methods? Right, Right.</p>
<p>So for this particular applicationand we've tried this outparticularly on image processing,so convolutional Network that recognizesthings in images,that's what we're focused on.</p>
<p>Things probably change if you're talkingabout language processing.</p>
<p>So there's a whole setupthat you mentioned earlier.</p>
<p>So it's a massive accomplishment. Butit's it's full of garbage.</p>
<p>So in my opinion, it's so peoplepeople used to thinkas one of the applications of airis trying to understand morewhat human intelligence is like.</p>
<p>And when I look at these deep examples,</p>
<p>I'm not sure about human intelligence,but I have a great modelfor human stupidity, which is soyou mindlessly ramble and repeat stuffthat you read beforewithout any creative thought or insight,and it looks plausible.</p>
<p>But it's the kind of statement you,you know,you expect from the extremeson the political spectrum.</p>
<p>And there's no there's nobody.</p>
<p>The term Tea Party does not go well.</p>
<p>I hear myself say this, but now I hearmyself say, this doesn't sound right.</p>
<p>What irks me here.</p>
<p>So I actually</p>
<p>I actually interviewed GPT on on podcast.</p>
<p>Oh, okay.</p>
<p>And asked about ethics and biasand things.</p>
<p>And you're right,it was just regurgitating the things that.</p>
<p>Right.</p>
<p>So so that's actually dangerous if peopledon't realize how unreliable it is.</p>
<p>So I'm sure it's a great tooland it can be good to great use.</p>
<p>But so 20 years ago I remember</p>
<p>I told you I work at Google,so, you know, findingthings on the Internet was was hooray.</p>
<p>It was revolutionary. Yeah. Yeah. Things.</p>
<p>You know whatlittle footnote you know that we findit doesn't mean it's true right?</p>
<p>So you can find some things.</p>
<p>Wait. Hello? Hey.</p>
<p>So, yeah, nobody calls.</p>
<p>I think they Google my kids.</p>
<p>Think that Googleor Alexa knows everything.</p>
<p>Well, you know, we did our best, I say,on behalf of my former colleagues, butthere are some risks associated with it.</p>
<p>So now you have this great toolthat can you know, and it's it's a UI toolthat can do can be a great interfaceto a document search system.</p>
<p>But the crap that comes up, you know,it's garbage in, garbage out, right?</p>
<p>Well, so.</p>
<p>Well, no, it's more subtle,you know? It because it looksyou. You don't see it's garbage, right?</p>
<p>Yeah. No hardnumeric on it for sure.</p>
<p>To do too muchto put any kind of guarantee on it.</p>
<p>It's going to take some serious researchand it's going to boil downto the quality of the data.</p>
<p>So, you know, if you if you feed itopinions, you have the true factthat that was somebody's opinion,but that doesn't make it true.</p>
<p>So that's the subtlety.</p>
<p>I don't know how that's modeledin the generative</p>
<p>Transformer topology,but it might be a detail that the systemmay not actually deal with, but who knows?</p>
<p>So it's going to requiresomeone to sit down and think aboutwhat does it mean to certify it.</p>
<p>So that was actually our opening offerto either,you know,people think it's not certifiable,but certify what means to providecertainty. All right.</p>
<p>I think that's one of the different means.</p>
<p>So why don't we go overall the sources of uncertaintyand try to put bounds on them?</p>
<p>How how can we limit the uncertainty?</p>
<p>And sometimes uncertaintyis actually your friend.</p>
<p>So if you'reif you have a physics backgroundor you have some thermodynamics,you know that the law of large numbersand the simple limit theorem can actuallybe your friends and can can help things.</p>
<p>So Sebastian Thrun, who wrotewho won this</p>
<p>Darwin competition that basicallyjumpstarted the wholesale drivingmovement,he wrote a very good book about robotsin the introduction.</p>
<p>He spells outthat in the world is full of uncertainty.</p>
<p>So if you want to make robotsthat operate in the real world,you have to build systemsthat can deal with this uncertainty.</p>
<p>Uncertainty.</p>
<p>This is exactly wherewhere the the frictionwith aerospace was, because in aerospace,you know, we don't want any uncertainty.</p>
<p>If it's uncertain, it's illegal.</p>
<p>So you have all these systemsthat do very certain thingsand then all the uncertaintyis delegated to the human pilotwho sits there making judgment calls.</p>
<p>So if you just built one extra instrumentalong the same lines,you have one more instrument that clamorsfor attention and the pilot has to make.</p>
<p>So we start from the other side.</p>
<p>If you want to deal with this uncertainty.</p>
<p>First of all, we're going to fuzeall the sensors.</p>
<p>We're going to get thisevery bit of information we can get.</p>
<p>And then we build algorithms that trustnothing and try to sort outwhat's our state in the world.</p>
<p>And if you start designing from that side,then you're in this machinelearning territory.</p>
<p>So then you have to say, is that spotcertain enough to be an aircraftthat I want to make an evasive maneuver,or am I going to make a judgment callto not do that?</p>
<p>And so if you start designing itwith that goal,then you naturally arrive at, okay, now</p>
<p>I have to prove that this is good enough,and then so then are closerto certification of peopleas qualified pilots, which you do.</p>
<p>But, you know, you test them out a bitand then you broken your approvaland you trust them,then hard mathematical proof.</p>
<p>So that's I thinkthat's reallywhat we added to the discussion.</p>
<p>Well,</p>
<p>Luuk, this has been fascinating.</p>
<p>A whole new areafor me is autonomous flight.</p>
<p>I you know,</p>
<p>I don't know anything about it.</p>
<p>You've educated mequite a bit and machine learning.</p>
<p>I know a lot of a lot of my listenersare in the throes of this right nowbecause whether we like itor not, it has raised awarenessand at the end increasedthe possibilities where, yes, go.</p>
<p>And it's not a matter of liking or notliking.</p>
<p>It's, you know,the thing is there now, you know,and it's it's causingto to really thinkmore about machine learning.</p>
<p>So which is what the PC did in the 1980s,you know, is the brain capacityon our desk.</p>
<p>You know, it's goingto change everything. Lookgood.</p>
<p>It did. And then, you know,changed everything.</p>
<p>And now, you know, some of these thingswill change everything again,but probably not quite in the waywe expect, but probablyin the way that you don't expect.</p>
<p>So yeah, Yeah.</p>
<p>It'll be it'll be an interesting time.</p>
<p>Hey, thanks again, Luuk.</p>
<p>I appreciate the time.</p>
<p>Anytime.</p>
<p>Yeah, Got you.</p>
<p>Just tothank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationat embracingdigital.org.</p>
<p>Until nexttime, go out and do something wonderful.</p>

</details>
