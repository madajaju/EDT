---
layout: posts
title: "HPC OnDemand"
number: 129
permalink: episode-EDT129
has_children: false
parent: Episodes
nav_order: 129
tags:
    - hpc
    - technology
    - compute
    - openondemand
    - ohiosupercomputercenter
    - osc

date: Mon Mar 20 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Alan Chalker

img: thumbnail.png
image: thumbnail.png
summary: "In this episode Darren interviews Alan Chalker, director of strategic program at Ohio Super Computer Center about Open OnDemand for HPC clusters worldwide."
description: "In this episode Darren interviews Alan Chalker, director of strategic program at Ohio Super Computer Center about Open OnDemand for HPC clusters worldwide."
---

<div>
<h3>Listen Here</h3>
{% include transistor.html id="c106fb2a" title="#129 HPC OnDemand" %}

{% include youtube.html id="L_DVS77ICc4" %}
</div>

---


In this podcast episode, Darren Pulsipher, the chief solution architect of the public sector at Intel, interviews Alan Chalker from the Ohio Supercomputer Center about breaking down barriers to high-performance computing (HPC). Alan is the director of strategic programs at Ohio Supercomputer and has been working on an NSF-funded project called Open OnDemand for over a decade. The project aims to make HPC more accessible to general consumers who are used to doing things online, like online banking and shopping. Open OnDemand simplifies the process of using HPC by eliminating the need for command-line inputs. Alan's background includes getting his undergraduate degree in electrical and computer engineering at Ohio State University and then earning his doctorate in biomedical engineering from USC Chapel Hill.

## History of Open OnDemand

In 2006 & 2007, a web interface was developed with Edison Welding Institute in collaboration with some techies, who later named it Open OnDemand. It started as an online welding simulation and expanded to include a polymer and general-purpose one. Upon showcasing it at various conferences, other research computing institutions expressed interest in deploying it on their systems. To make it open source, the National Science Foundation awarded them a three-year, $300,000 program that made the prototype more robust. The success of Open OnDemand led to another five-year program worth $3 million. Today, it is deployed on every continent except Antarctica, serving over 400 research computing institutions.

## Expanding Influence of HPC

Supercomputers have expanded beyond traditional fields like computer science and engineering. At OSC, anthropology and political science students are using the supercomputer for their research, as well as students in horticulture and crop science courses. The demand for the supercomputer is increasing, with over 8,500 individuals using OSC’s supercomputers from all over the world last fiscal year. Additionally, during the pandemic, many universities could continue teaching and researching remotely through virtual desktops provided by the supercomputer.

## Comparing CSP and HPC Pricing Models

Pricing models for the supercomputer are based on core hours and terabyte months, and the government mandate allows for subsidized pricing for Ohio-based academic entities. Cloud service providers charge by the wall clock time, not core hours, and order by data storage and egress network costs. Commercial industry clients are starting to utilize supercomputers for traditional HPC simulation workloads saving money from running them in the retail public clouds.

## Examples of Commercial use

The day before Darren and Alan sat down and talked, there were tornadoes in the Columbus, Ohio, area. Weather prediction is significant to many industries, and supercomputers are well-suited. The center generates weather forecasts every 4 to 6 hours for clients such as shipping companies and airlines. While traditional high-performance computing workloads are still typical, emerging ones include analyzing tweets of congressional members relative to COVID-19, anthropology, horticulture, and crop sciences. Anything that is time-limited or involves too much data can benefit from high-performance computing capabilities. The demand for these capabilities is expected to grow due to increased accessibility. Making HPC easier to consume is similar to what the cloud did for grid computing back in the day.

## OSC Capacity

OSC's massive capacity for its high-performance computing system is constantly expanding to meet demand. At the time of the recording, they had 55,000 cores, mainly from Intel, with 400 accelerators spread across 1600 nodes. They anticipate a new acquisition that would bring them up to 75,000-80,000 seats due to the growing demand in biomedical fields. The system can handle large amounts of data, with 20 petabytes of actual disk storage and network connectivity at 350 gigabits per second of read/write speed. One of the significant benefits of OSC is the lack of egress costs for their clients due to the founding of the organization through a National Science Foundation grant.

## Open OnDemand

Many universities and HPC centers are leveraging Open OnDemand as a simple web interface to make HPC more available for researchers who need to learn or understand the complexities of scheduling jobs, decomposing problem sets, and managing data across a cluster. Even the cloud service providers have Open OnDemand interfaces to their HPC offering. 



<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people processand technology.</p>
<p>On today's episode,breaking down the barriers to highperformancecomputing is Alan Chalker from the Ohio</p>
<p>Supercomputer Center.</p>
<p>Alan, welcome to the show.</p>
<p>Thanks so much for having me, Darren.</p>
<p>Hey, this is kind of exciting for mebecause I don't get to interviewpeople in personvery often, but I'm in Columbus,</p>
<p>I'm at the Ohio Supercomputer Centerand I get to sit right next to you.</p>
<p>Yeah, pretty awesome. Yeah, I agree.</p>
<p>It's been nice and several yearsfor since we've been able to do anythingquite like this. So.</p>
<p>So, Alan,tell me a little bit about your yourself.</p>
<p>You're the director of Strategic programsat Ohio Supercomputer.</p>
<p>Tell me a little bitabout your background.</p>
<p>What got you into this first?</p>
<p>And then we'll dive in on how you're goingto break down some barriersso I can use your HPC cluster.</p>
<p>Sure. Sure.</p>
<p>So I am the director Strategicprograms at OAC, which is a made of title.</p>
<p>My boss likes to say that he went he'sexecutive director of OAC,and he went to some of his peerdirectors and said,</p>
<p>What do you callthe person who is the catchall utilityinfielderthat does all the things you don't fitnicelyin any of the other managers groups.</p>
<p>And that's basicallywhat my responsibility is.</p>
<p>So there's a lot ofthings are in my portfolio that don't fitnicely in just kind of the otherportfolios in terms of, you know,we have a client services group, we havean operations group, things like that.</p>
<p>I handle a lot of different things,some of which we'll talk about today.</p>
<p>Well, so where did you come from?</p>
<p>You weren't born here in Ohio.</p>
<p>Or were you?</p>
<p>So I'm actually an interestingsuccess storywhen it comes to workforce developmentand stuff.</p>
<p>The story goes well.</p>
<p>I was not born in Ohio,but I spent most of my childhoodin Ohio, in southwestern</p>
<p>Ohio, south of Dayton, Ohio.</p>
<p>And when I was a doing myselfwhen I was a freshman in high school,this little organization called the Ohio</p>
<p>Supercomputer Centerwas only a few years oldor she was in 1987and had a summer institutefor high school studentsto learn about supercomputers.</p>
<p>And I was the thirdyear, third class of that program.</p>
<p>And my colleagues like to make the.</p>
<p>Oh, you were born here. Yeah, I know.</p>
<p>They like to make the statementthat they made the mistakeof letting me in the building way,way back in the early ninetiesand like a bad penny, I keep coming back.</p>
<p>So you never know.</p>
<p>Have you worked in other places?</p>
<p>I mean, obviouslyyou've worked in other places.</p>
<p>Yeah.</p>
<p>So I got,</p>
<p>I got my undergraduate in electricaland computer engineering here at Ohio</p>
<p>State University, and then I livedfor eight years down in Research</p>
<p>Triangle Park, North Carolina, where I gotmy doctorate in biomedical engineeringfrom USC Chapel Hill.</p>
<p>And then mymy wife and I wanted to move backto the central</p>
<p>Ohio area, was looking for opportunities.</p>
<p>There was one that opened up hereat USC and 18 years later I'm still here.</p>
<p>And Yeah,yeah, that is that is really awesome.</p>
<p>Well, all right, so tell me what's uniqueabout what you guys are doing here,because as you as as I heard about thison demand and breaking downthe barriers, I used to bein high performance computing myself backat the turn of the millenniumwhen the Global Grid Forum was kicked off.</p>
<p>And I was all part of all of that.</p>
<p>And but you guys have something you knewand unique here.</p>
<p>You're kind of making it easier to consume</p>
<p>HPC Is that.</p>
<p>Yeah, I think we were just happened to bein the right place at the right time.</p>
<p>And so what you're referring tois open OnDemand, which is an NSFfunded project that we've been developingfor many, many years.</p>
<p>It's well over a decade, 15plus years at this point.</p>
<p>And so the genesis story ofthat is if you go backto the Mid-Aughts,these things became really popular, right?iPhones and cell phones andand general consumers being comfortablewith doing things online, online banking,online shopping, things like that.</p>
<p>Whenever they those folks started comingto supercomputer centers and researchcomputing centers were saying,hey, can you make it easier for us?</p>
<p>Why do we have to do all the,you know, command line stufflike you see in the hacker movieswith the green techscrolling by because it gives usgeeks like me a job.</p>
<p>Yeah. Yeah, exactly.</p>
<p>And so wewe did a very first web interfaceway back in 2006, 2007with a collaborating companythat we have just down the streetcalled Edison Welding Institute.</p>
<p>And it was a online welding simulation.</p>
<p>Basically what it didis it took some of the knowledgeworkflows they already were doingfor their customers, using thingslike Abacus and machines like that,and encapsulate that in a Web page.</p>
<p>One thing led to another.</p>
<p>We then did a polymer one,then we did a general purpose one.</p>
<p>We started because we're not creative.</p>
<p>We said, okay,we're going to bundle these togetherand we created what we called O.C.</p>
<p>OnDemand.</p>
<p>Yeah, we're techieswe can't think of, you know. Yeah.</p>
<p>So the old adage, No good deed goesunpunished.</p>
<p>We started showing thatat various conferences in the earlyteens to our our peer centers,and they were all like, That's amazing.</p>
<p>We've been thinking about doing this.</p>
<p>Can we get a copy of your codeand deploy on our system?</p>
<p>And we're like, Whoa,this is held together with baling wireand chewing gum and and it's really notvery, very robust there.</p>
<p>So we went to the National Science</p>
<p>Foundation and proposeda program to them which they awarded,which was a three year,$300,000 program to take what we hadkind of prototype it to a seeand make it open sourceavailable to the community.</p>
<p>And again, we're not creative, right?</p>
<p>So it was ocean demand.</p>
<p>What are we going to name it?</p>
<p>Let's call it open on demand, open on afew years after that.</p>
<p>Again, you know, successjust results in more success.</p>
<p>We went back to the NSF, got an extensionof five year program, $3 million.</p>
<p>And now here, here we are in 2023.</p>
<p>Open on demand is kind of the de factostandard.</p>
<p>Now it's deployed at 400plus research computinginstitutions, every continentexcept Antarctica.</p>
<p>I really want to get it at Antarcticaso somebody can help me get into the NSFdata center there.</p>
<p>McMurdo I'd love to hear from you.</p>
<p>You you want to go and visit? Yeah. Thereyou go. I do. I do want to visit.</p>
<p>I will personally ensurethat it gets installed correctly.</p>
<p>Yeah,because I'm unfamiliarwith high performance computing.</p>
<p>Right? Sure, I'm right.</p>
<p>So when you talk about on demand,you're not talking about, Oh,</p>
<p>I have a job and I'm going to go scheduleit on there.</p>
<p>You're going a level above that.</p>
<p>Yes, exactly.</p>
<p>What On-Demand does itit's providing that web interfaceto thewhat you already have on those systems.</p>
<p>So, you know, one of the issues,if you look at a lot of students nowin college and even grad school,they've grown upnot knowing laptops, they've grown upwith iPads and cell phones.</p>
<p>And they they don't know command lines.</p>
<p>They don't even it's a shame.</p>
<p>It is. It is.</p>
<p>But I mean, we could even get into debateand debate on via Emacs in the.</p>
<p>Yes, we could.</p>
<p>Oh, hey, I'm Nano all the way.</p>
<p>Okay, great.</p>
<p>Oh, that's.</p>
<p>So yeah, this is interesting conceptbecause I've seen it with my own kidsas they're moving into theinto the workforce in computer scienceand electrical engineering.</p>
<p>I did a poor job.</p>
<p>I didn't teach them Linux.</p>
<p>Yeah. They don't know the command line.</p>
<p>They're like where's the where'sthe interface. Exactly.</p>
<p>Well, you actually use the keyboardon your on your laptop.</p>
<p>Yeah.</p>
<p>So that's a big problemthat, that this is helping overcome.</p>
<p>That's exactly right.</p>
<p>It's you know,we like to say any device anywhere.</p>
<p>I've got video of melogging in to the O.C.instance of on demandfrom my in-car browser on my Tesla carand running Jupiter and MATLABin my Tesla.</p>
<p>I mean, it's literally we</p>
<p>I like to say we actuallyseveral years agosaw a grad student science a picture.</p>
<p>The grad student was sitting in a barwith their cell phone in one hand, loggedin, monitoring some jobs they were runningand a pint of beer in the other.</p>
<p>Here.</p>
<p>Now, at least here in Ohio, it'snot illegal to drink and compute,but we don't condone doing that there.</p>
<p>But that's that's what this really does,is it helps to make it easy toto utilize these resources. So is itcan it provide because it sounds likewith the Edison welding, when you guyswere doing simulations for them,you provided an abstraction layereven above that where they could say,hey, here's my here'smy welding type of simulation.</p>
<p>I want to runand I want to see the results.</p>
<p>Yep. So you're providingeven above the jobs?</p>
<p>That's correct. Yeah.</p>
<p>Many of the people that utilize thisdon't know anything about job schedulesor anything like that.</p>
<p>Yeah, and, and we've seen an impact.</p>
<p>So let's talk a little bitabout the result of this.</p>
<p>This would be an unheard of five,ten years ago.</p>
<p>But here at USC,we've got our anthropology students,they're using us political scienceprofessors, they're using UScourses using, I know, computerhorticulture and crop science classes.</p>
<p>I mean, you know, so it's really makingit really neat because they wouldn't,you know,they wouldn't be in the command line.</p>
<p>But they'rethey all have all these groupsthat have data that they need to do stuffwith and they need to analyze and processand and we abstract that out.</p>
<p>That really is what helpful to them.</p>
<p>All right.</p>
<p>So this is obviously driving up demandfor the use of the of the supercomputerthat you guys have.</p>
<p>Yep. Right.</p>
<p>I mean, so what are you guys are you guysrunning out of out of compute space?</p>
<p>Because I can imagine if you open this upto every departmentin the college, everyone's going to go,</p>
<p>Oh, yeah, I'm going to use that.</p>
<p>Yeah.</p>
<p>So, so our mandate is actuallyfrom the state legislator here in Ohioto provide resources to all Ohioans, bothacademic and private industry.</p>
<p>Last fiscal year we had 8500 individualsutilize our systems.</p>
<p>Now those are from about four nearlyall over the world, actually all over.</p>
<p>And one one of the cool things about itis that it does are so in anotherone of these be in the right placeat the right time.</p>
<p>Well, we were the right place,the right time back in the late aughts.</p>
<p>We were also really in the right place,the right time during the pandemic,because I can't tell you the numberof institutions just Yes, just last week</p>
<p>I heard from institution who saidit was so wonderful that we had on demandinstalled at the start of the pandemicbecause so many students couldn'tgo on to campus and access computer labsand they could get virtual desktopsthrough on demand on our systems.</p>
<p>You know, it just helpedso many universities continue to teachand research.</p>
<p>While the pandemic was goingon, people couldn't be in-person.</p>
<p>And now this seems like,of course, it's obvious, you know,why do you need to be on campus?</p>
<p>Yeah, exactly.</p>
<p>This isthis is really a huge success story.</p>
<p>Yeah. So.</p>
<p>All right.</p>
<p>So pricing models,if you can talk about if I well,</p>
<p>I mean, because this is not a cloud,this is a supercomputer.</p>
<p>This is not.</p>
<p>Oh, I'm going to go.</p>
<p>Right. So are you guys using AI?</p>
<p>And maybe we can goall the way back to sun grid engine?</p>
<p>I know they are. Yeah.</p>
<p>And when they first started,they had a business modelthat didn't do very well because they werecharging on traditional HPCcharges,which is CPU time, not clock time.</p>
<p>So are you guys doing the all the time?</p>
<p>I mean, how do you gel.</p>
<p>Yeah, they're talkingand I do want emphasizethat open on demand itself no chargefully open sourceso any site anybody can deploy itthere's no cost associated with thatthat's you know that's not that.</p>
<p>But here at O.C.,we do have pricing set forwe charge for core hoursand we charge for terabyte months.</p>
<p>One of the nice things aboutwhat we're able to do is because we areso highly subsidized by taxpayer dollars,if you are an Ohio based academic entity,basically 80% of of your costis subsidized by taxpayer dollars.</p>
<p>So we know down to a thousandth of a pennyhow much a coreour cost, you know, on our systems.</p>
<p>And we can we charge that.</p>
<p>The other nice thing about thisis because we're the government fermentand have a mandate to write industry.</p>
<p>We can set whatever price we wantfor commercial industry.</p>
<p>And so, you know,</p>
<p>I would say we were the cloud.</p>
<p>We are the cloud. We were the cloudbefore. Before the cloud. Yes. Yeah.</p>
<p>No, You know, we when we had last year,we had something like 50 or 60active commercial accounts that utilize ussome names you'd recognize folkslike Proctor and Gamble and Honda, namesthat you wouldn't recognize.</p>
<p>And we deliberately set our pricingto undercut the commercial clouds.</p>
<p>Now, weyou guys do a different type of work.</p>
<p>That's exactly right.</p>
<p>Yes. Yeah.</p>
<p>So there are a lot of times wheresomebody comes out says, can I do this?</p>
<p>We say, no,you really need to go to one of the cloud.</p>
<p>You don't want to run an email server.</p>
<p>Exactly. Exactly.</p>
<p>But if you want to do large scale, I mean,one of our are and some of our clients,we can't talk about some of themwe can write we we do release key studies.</p>
<p>One of our largestclients is a company called Spire.</p>
<p>They have a fleet of Microsatellitesorbiting the Earthand they are doing weather modelingfor of the entire Earth,mainly for like transportationcompanies, shipping companies, because,you know, sure, you can get a weathermodel of what can happen here in Ohio.</p>
<p>You know, we hadwe had tornadoes yesterday.</p>
<p>We knew thatif you're in the middle of the Pacific,but if you're a shipping company,you are know,if you're an airline,you want to know that.</p>
<p>So they're a good example of a customerthat they've got that data coming inand the weather forecaststhat they are providing to their clientsevery 4 to 6 hoursare being generated on our systems.</p>
<p>Okay.</p>
<p>So these are pretty traditional highperformance computing workloadsthat you're running in your clusters.</p>
<p>Have you seen any new or emerging ones?</p>
<p>Because now it's easier to use that.</p>
<p>You're like going,</p>
<p>I never would have thought, but a talent.</p>
<p>Yes. Yeah.</p>
<p>So I mentioned earlier the policy.</p>
<p>Yeah.</p>
<p>Fascinating, fascinating studiesthat were done a few years ago.</p>
<p>Right.</p>
<p>You know, after the pandemic started,we're one of the Ohio State researcherswas analyzing the tweetsof congressional membersrelative to COVID, of course.</p>
<p>Yeah.</p>
<p>And doing all kinds of interestinganalysis around the language.</p>
<p>It was a use to paying for what partysomebody was in and all of that stuff.</p>
<p>That's one of the oneswho would have thought.</p>
<p>But, you know, no, you know,the intersection of we see in Twitterand COVID ofwho would you would have thought there.</p>
<p>I mentioned earlier,you know, anthropology and horticultureand crop sciences.</p>
<p>I mean, we've got folksthat are developing new model.</p>
<p>So Ohio is an agricultural state.</p>
<p>It's known as,you know, a agricultural stateand one of things that's very commonlygrown here are soybeans.</p>
<p>And there are issues with things calledcrop rot, certainfungus diseases that in fact a field.</p>
<p>And so, you know,there's all kinds of interesting analysisthat researchers are doing aroundtrying to combatcrop rot, try to, you know, breednew strains that are resistant to that.</p>
<p>And so that's the kind of thingwho would have thought that peoplewere doing thaton our system of supercomputer systems?</p>
<p>That's pretty cool. Soif I wereto determine,because you've made it easier to consumejust and that's why the cloud took off,let's just be brutally honest, right?</p>
<p>They took the stuffwe did back at the turn of the millenniumwith grid computing,and they made it easy to consumewith a really kick butt business modelthat made them tons of money.</p>
<p>Yep. Right.</p>
<p>All right.</p>
<p>So if I'm looking at now,we've made it easy to consume HPC,and if I'm looking at work</p>
<p>I'm doing right now,what sort of characteristicswould I have in my workloadsthat would say, I need to goto one of the high performancecomputing centers in the United States or</p>
<p>Ohio's Supercomputer Centerand say, I'm going to run my work.</p>
<p>I'm going to be a bit glib hereand say anything.</p>
<p>I mean, I'm gonna give you a preciseexample wirelessly, anythingseveralyears ago, this was eight years ago or so.</p>
<p>I've lost track of timebecause of the pandemic.</p>
<p>It might be Ted, you know,we were out talkingto a company here in Ohiothat manufacturesplastic bottles like your water bottles,disposable water bottles.</p>
<p>And we were just kind of talking to themabout, well,do you need to you know,maybe we could provide a service to you?</p>
<p>And their engineers were like,no, no, no, no, we're all good now.</p>
<p>So, okay, tell us a little bitabout what your workday looks like.</p>
<p>And one of the engineerssaid, well, I've got this nice, beefyworkstation right here.</p>
<p>I need to and I'm trying to designnew models.</p>
<p>I need to come up with my new meshof a new model by about 5 p.m.so that I can start the solver runningbecause it's got to run overnight.</p>
<p>So it's ready at 9 a.m.the next day and I can look at itand analyze this and you know,but it's all good.</p>
<p>I was like, What if we could help you?</p>
<p>Instead of running that over night,we run that over your lunch breakor coffee break.</p>
<p>And to themit was like, Well, that's only possible.</p>
<p>Yes, it is.</p>
<p>That's that's the kind of thing.</p>
<p>So really, if there's any type,anything that you do that you are sayingto patch up over you patch up time limitedor you're not looking as many parametersor sweeps as you want tobecause you oh, you just can't handle it.</p>
<p>Or you, you know, there's too much dataand you have to be throwing stuff away.</p>
<p>That's all stuff. That's right.</p>
<p>For high performance computingand research computing capabilities.</p>
<p>And since you've made it easy, easy to donow, this is going to beso, so much accessible.</p>
<p>So. All right.</p>
<p>Next, next question</p>
<p>I have, Do you see the demand growinghuge enough whereyou're going to have to add more capacity?</p>
<p>We're constantly at new capacity,</p>
<p>Yeah. Okay. Yeah.</p>
<p>So so right nowwe have about 55,000 cores.</p>
<p>All intel, by the way. All right,</p>
<p>Thank you very much.</p>
<p>I'm sorry to saywe have 53,000 intel cores.</p>
<p>We have 2000 from another company.</p>
<p>Okay? We just.</p>
<p>I forgot thatwe just got those two or three months ago.</p>
<p>We. We have about 400 accelerators,and that's spread across about 1600 nodes.</p>
<p>We're about to do a new acquisitionthat's probably going to get us upto 75,000, 8000, cause,you know, there's constant demand.</p>
<p>Our systems sit regularly at 80%,utilization consistently.</p>
<p>Yeah, yeah.</p>
<p>It's you know, there's justthere means comfort and where it's reallygrowingis in a lot of the biomedical fields.</p>
<p>One of the big growing thingsthat we're starting to have to deal withare things like cryo-em.</p>
<p>So cryo electronmicroscopy, it's a wonderful toolthat's become more and more availableto biomedical researchers.</p>
<p>That generates just volumes of data.</p>
<p>And everybodyseems to be wanting to analyze that data.</p>
<p>You know, you know, hundreds of terabytesare coming out of these these devices.</p>
<p>Yeah, Yeah. So so that's a big play.</p>
<p>Now, how much how much?</p>
<p>Let's talk about data,because high performancecomputing is knownfor lots of data move movement. Sohow much data are we talking aboutdo you guys have.</p>
<p>Yeah, we, we have about 20 petabytesor we get technical, we're about 18pivi bytes for those of you on it,you know, you use the binary onefor about aboutabout 20 petabytes of actual disk storage.</p>
<p>So it's a combination of solid stateand speed spinning and spinning.</p>
<p>Yeah. Yeah.</p>
<p>I call it spinning. Yes. You know. Yeah.</p>
<p>A very, very high performance system.</p>
<p>So our mainthe bulk of that is on a systemthat is able to have in aggregatesomewhere on the order of 350gigabits per second of, of right in there.</p>
<p>Oh wow. Yeah. It's, Yeah.</p>
<p>And that's importantbecause we need peopleto be able to process and retrieveand write that data very, very fast.</p>
<p>So it's very commonfor us to have researcherscome to us with multi-hundredterabyte data setsthat they want to put on our systemor or process.</p>
<p>And we're happy.</p>
<p>It's really funnybecause all the time my colleaguesand I get new clients coming and say,</p>
<p>Well, we've got some really big data,can you handle it?</p>
<p>And we're like, Well,tell us what you're being fairly big data.</p>
<p>Yeah.</p>
<p>And they'll go and they'll say, Oh, it's,you know, it's about ten gigabytes.</p>
<p>I'm like, okay,when it gets to 100, let's talk, you know,</p>
<p>I mean, to be frank,every client that comes in,</p>
<p>I mentioned 8500 clients, every clientgets a home directory on our systems.</p>
<p>It's 500 gigabytesthat we just give to them.</p>
<p>Just don't even think about.</p>
<p>Yeah, you know, it's just. It'sjust there.</p>
<p>So it's a different,different perspective.</p>
<p>But it is, it is very,very large data sets.</p>
<p>You know, I,</p>
<p>I was just having a conversation todaywith somebody who on a daily basis,they need to bring downor send up close to 100 gigabytes.</p>
<p>And, you know,they're like, that could be a problem.</p>
<p>Like, no, it's not.</p>
<p>You know, we've got a 40 gig of bitconnection to our main backbonegoing out of the building.</p>
<p>I can handle 100 gigabytes a day.</p>
<p>Yeah, no problem.</p>
<p>Yeah,well, that'sthat's another interesting thing.</p>
<p>A big cost in doing high performancecomputing is the movement of data,which is very cost ineffectivein your typical cloudbecause they charge youfor ingress and egress.</p>
<p>Well, egress costs,</p>
<p>I always call them the hotel.</p>
<p>Yeah, yeah, yeah. Right.</p>
<p>You can't check in, but you can check out.</p>
<p>Yeah. For you guys. Are there egress.</p>
<p>No I right that.</p>
<p>So that's that's pretty smart, right?</p>
<p>Yeah, exactly.</p>
<p>And part of the reason why we're ableto have no egress costs is becauseso So let me go back a little bit to that.</p>
<p>To the founding of O.C.</p>
<p>I mentioned earlier, O.C.was founded in 1987 and actually,let me tell the real story,the mid eighties, these things calledsupercomputers, H CS Really popular</p>
<p>National Science Foundation said, Hey,we need to find some nationalsupercomputer centers just like we findradio telescopes and Antarctica.</p>
<p>So they put out a call to fundsnational Centers.</p>
<p>A group of Ohio faculty membersput together a proposal.</p>
<p>And for those of you there in the know,we didn't win.</p>
<p>You know, the national centers are San</p>
<p>Diego and Pittsburgh and Illinois.</p>
<p>Well, those faculty memberstook that proposal back to the stateand said, well, the federal governmentwon't fund it, Will you fund it?</p>
<p>And the state said, yeah,this is a good idea.</p>
<p>We're going to fundthis for the state of Ohio.</p>
<p>Now, thathappened and they said,okay, we're going to create this entity.</p>
<p>Let's put it at Ohio State University herein Columbus, in central Ohio.</p>
<p>It makes sense.</p>
<p>So she was the largest universityin the state.</p>
<p>Very shortly thereafter,a lot of the faculty membersaround the state said, wait a minute,you've created the supercomputer for us.</p>
<p>But this thing calledthe Internet doesn't exist yet.</p>
<p>We don't want to have to driveto Columbus to use it.</p>
<p>You need to help us out.</p>
<p>And the state said, you're right.</p>
<p>We're going to create somethingwe call the Ohio Academic Resource</p>
<p>Network, or NET.</p>
<p>And the whole purpose of Ornette,when it was created in 1987, was literallydial up modems connected to T-1 linesconnected to the Cray supercomputer.</p>
<p>So researchers at Case</p>
<p>Western and Universities</p>
<p>Cincinnati and Miami knowhow university could dial in over there.</p>
<p>Yeah.</p>
<p>So thenthat was the late eightiesfor Mann's ARPANET.</p>
<p>Yeah, that's exactly.</p>
<p>That's exactly what it was.</p>
<p>Yeah. Yeah.</p>
<p>So then in thein the mid-nineties, I already mentionedthis little thing calledthe Internet was invented.</p>
<p>We had the dotcom boom right around 2000 icon bustand Ornette had the brilliant ideaof basically for pennies on the dollar,buying the rights to fiberthat was laid all over the state.</p>
<p>So Ornette now has the right tosomethinglike 1600 miles of fiber throughout</p>
<p>Ohio and every noncommercial interestin the state.</p>
<p>So every university, K-through-12 school,hospital, PBS station, stateagency, driver's License bureau,they all connect to that backbone.</p>
<p>We are Ornetteis the the main backbone in Ohiothat then connects to AT&Tand Comcast and Spack and all those.</p>
<p>But basically we run a high levelgig backbone here in Ohio.</p>
<p>And that's what allows USC to not chargeany type of because, you know,we have that connectivity That's that'skudos to whoever set that up.</p>
<p>Yes. That'ssaving the state and university.</p>
<p>It isthis is truly fascinating.</p>
<p>Where do people go to learnmore about on demand or openon demand or Ohio's supercomputer center?</p>
<p>So open on demand dot org, it'sright over your shoulder there.</p>
<p>But if people are soliciting,they can't see it, you know.</p>
<p>So it's all one word open on demanddot org for open on demandand that's for if you want to seeif your we have on there bothif you're a research computing sitethat wants to deploy it,but also if you're just a clientand want to figure outwhere can you play around with or maybedoes your research computing site accessit, I'll say all the majorcommercial providers Microsoft</p>
<p>Azure, Amazon, TWC andwhy might Google Cloud,</p>
<p>Google, they all have OnDemandavailable on their sites so you can.</p>
<p>Yeah. Yeah.</p>
<p>So if you do open on a mortgage RWC,it dropsyou right into the Amazon demand.</p>
<p>You just spin up in AWP,open an event organizer, open on demand.</p>
<p>Slash Really, I could just hop on CSPand start up a cluster or.</p>
<p>Absolutely you can you spin up</p>
<p>Not sure surebut you can spin up as you as you wantvirtual HP sees with on demandan interface that each of those providershave have create.</p>
<p>So that's open on demand.</p>
<p>And then if you want to learn more aboutor seehow supercomputer center,it's our site, our EDU.</p>
<p>And if you go to our web page again,it's not a rescue, it's a C dot eduand the upper righthand corner of the menubar, there's a get accessand it talks a little bitabout how to get access to usand some of the pricing is in.</p>
<p>This is wonderfuland this has been wonderfulto actually sit and talk to a human being.</p>
<p>And so just via Zoom,yes, it's been great.</p>
<p>And we're and we're next to each otherjust so you can seeso you way in caseeverybody thinks that we're faking this.</p>
<p>No, we're right here.</p>
<p>Yeah, right.</p>
<p>Thank you so much for your time.</p>
<p>Hey, I pleasure.</p>
<p>Thank you so much for having me do this.</p>
<p>There.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org.</p>
<p>Until nexttime, go out and do something wonderful.</p>

</details>
