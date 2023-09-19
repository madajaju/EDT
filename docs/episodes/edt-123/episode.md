---
layout: posts
title: "Cybersecurity in Public Sector"
number: 123
permalink: episode-EDT123
has_children: false
parent: Episodes
nav_order: 123
tags:
    - cybersecurity
    - ransomeware
    - automation
    - government
    - people
    - process
    - technology

date: Thu Feb 16 2023 02:00:00 GMT+0200 (Eastern European Standard Time)
guests:
    - Darren W Pulsipher
    - Jim Richberg

img: thumbnail.jpg
summary: "In this episode, Darren interviews Jim Richberg Forinet's Field CISO of the Public Sector, discussing the differences in cybersecurity in the public sector. The federal government is very different from state and local governments concerning cybersecurity and their approaches."
---

{% include transistor.html id="e5e637d3" title="#123 Cybersecurity in Public Sector" %}

{% include youtube.html id="o9R9W5x_frA" %}

---

Jim has extensive experience in cybersecurity, and the public sector, including as national intelligence manager of cybersecurity for the director of national intelligence. While working in the public sector for several years, he has played offensive and defensive cybersecurity roles. He is now working in the private sector as a Field CISO of the Public Sector.

## Differences between Federal, State, and Local Governments

There are fundamental differences between the federal, state, and local governments, including funding, expertise in cyber warfare, and attack surface. Even the threat actors for each level of government are fundamentally different from each other. For example, the federal government tends to deal with highly sophisticated nation-state cyber-attacks, while state and local governments rarely see these types of attacks directly. This is primarily due to the cybersecurity preparedness of federal agencies compared to state and local governments.

Where the federal government primarily deals with attacks that gather data, compromise data or shut down assets, state and local governments tend to deal with ransomware attacks where data and infrastructure are held hostage. These attacks differ from the typical cybersecurity threats the federal government deals with daily and require different skill sets and cybersecurity positions.

## The Cyber Talent Shortage

One common problem that all levels of government deal with is a need for cybersecurity talent. Most talent tends to move to the private sector, where salaries are higher and more attractive to top cybersecurity talent. However, the federal government has attracted top talent through interesting “mission impossible” programs that attract top talent looking for challenging problems.

The same is not valid for state and local governments where financial resources are tighter, and cybersecurity projects are less attractive to type cybersecurity professionals. This has left several state and local governments with a significant gap in cybersecurity talent and, consequently, vulnerable to cyber-attacks. Sometimes, local governments don’t have a strategic cybersecurity plan or a professional on staff.

The private sector is beginning to offer cybersecurity as a service for many of these local governments that need help finding and retaining talent in their organizations. These services include cybersecurity strategic planning, ransomware negotiation, cyber attack forensics, cyber threat detection, and cyber prevention technologies.

## Ubiquitous Cyber Attacks

In the past, state and local governments rarely concern themselves with physical attacks from other nations. However, because ongoing cyber wars between countries and states have no physical boundaries, there are times when state and local governments are collateral damage in these cyber battles. Often, targeted cyber-attacks from one nation to another have “gotten loose” and severely damaged state and local governments.

CISA has created regions to help state and local governments deal with cyber attacks that penetrate the borders of the United States. Additionally, state and local governments are beginning to share best practices, detected cyber attacks, and common vulnerabilities found in their infrastructure. Additional funding from the federal government is helping these organizations shore up their cybersecurity positions.

## Critical Infrastructure Cyberattacks

One of the most concerning trends is the increased attack on systems that manage critical infrastructure, specifically power generation and distribution.  Because the power grid comprises several private, state, and local government collectives rather than a centralized federal government agency, managing and protecting the nation's power grid is complex and daunting. Larger organizations tend to have a better cybersecurity position than small municipal utility companies leaving them at risk of cyber-attacks. However, not all is lost in protecting our critical infrastructure, as organizations in these vertical industries share the best physical and cyber security practices.

## Zero Trust Architecture

Jim and Darren agreed that the term zero trust architecture has been overused and lost its impact as the private sector quickly adopted this term and attached it to everything dealing with cybersecurity. However, they both agree that zero trust principles must be adopted in organizations to protect their valuable assets fully. These principles include: verifying explicitly continuously, using least-privilege access, assuming a breach, and automating context collection and response. These principles can be implemented through technology, process improvement, and training.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople process and technology.</p>
<p>On today's episode, Securityin the Public Sector with special guest</p>
<p>Jim Richburg Field CSO of Public Sectorat Fortinet.</p>
<p>Jim, welcome to be with you.</p>
<p>Darren, It's great to be here with you.</p>
<p>Hey, Jim,we had a just a brief discussion.</p>
<p>It was really interestingand you brought up some thingsand you wanted to go more.</p>
<p>You were so excited.</p>
<p>I said, Stop, Don'twe want our audienceto hear this discussion?</p>
<p>So I know we're going to havea great discussion day.</p>
<p>But first, Jim, tell us a little bit aboutyourself and your background.</p>
<p>Okay.</p>
<p>Well, thanks, Erin. You know, I spent.</p>
<p>This is my second careerand I spent my first careerin the other older intel community,not the people who use Intel products,but the U.S.intelligence community.</p>
<p>I spent 20 years for one of the threeletter agencies, and then I was thenational intelligence manager for cyber,for the director of National intelligence.</p>
<p>So I've seen cyber,you know, from both sides, played offense,play defense, helped build cyberthreat intelligence, ran whole of nationcyber programs under two presidents.</p>
<p>So I retired from government.</p>
<p>I went to Fortinet, you know,one of the biggest cybersecurity companiesin the ecosystem because it does a lotof work with governmentand I understand governmentand I was always good at being ableto not only answer the immediate questionssomebody had, butput it in a bigger picture and say, okay,this is a symptom of a broader problem.</p>
<p>And that's what I do a lotwith public sector in the United Statesand also globally.</p>
<p>I think I was a cyber evangelistbefore we had term.</p>
<p>But before they were there.</p>
<p>It's it sounds like it.</p>
<p>So you've got a large experiencein cybersecurity, in public sector.</p>
<p>This is great.</p>
<p>So and when you were talkingsays a not all publicsector, cybersecurity is the same.</p>
<p>So well because not all the public.</p>
<p>Should have read on with that.</p>
<p>Yeah, I mean.</p>
<p>Let's let's stick to the U.S.just for a minute.</p>
<p>You know, federal, state and localare all different.</p>
<p>They're different in terms of resources.</p>
<p>They're different in terms of mission.</p>
<p>They're different in terms of thecybersecurity challenges that they face.</p>
<p>And, you know, let's look at who do youinteract with as a citizen in the U.S.?</p>
<p>You interact with your local company.</p>
<p>You do a little bit less with stateservices.</p>
<p>Yeah.</p>
<p>When you go to get your driver's license.</p>
<p>But hey, we've been able to virtualizethat and you do lessdirect interactionwith the federal government.</p>
<p>So as we've talkedabout digital transformation,you know, it's been local government,the people who arguablyare the least resourced,certainly in terms of human expertswho've had to figure out how to dorobotic process automation.</p>
<p>You and I were talking about,you know, chat AI and thingsthat allow you to really use AI drivenautomation.</p>
<p>It's been more a back officeissue for stateand certainly federal governmentthan it has been for local government.</p>
<p>So the paradox has been the peopleyou interact with the most or arguablythe leastwell-positioned to competewith the private sectorin terms of offering those services.</p>
<p>End to our conversation, securing them.</p>
<p>That's that's really interestingwhen you think about it, right?</p>
<p>Becausethe things that yousaid, the things that are most importantto us in our day to daylives are the least fundedas far as cybersecurity protectionand and things like that.</p>
<p>I mean, one of the one of the and again,</p>
<p>I won't say all of the challengesare unique for each.</p>
<p>There are some common ones.</p>
<p>And one of them, frankly, isyou and I come from companiesthat are well-resourcedand can hire the best and the brightestpeople, including from government.</p>
<p>So government alwaysis going to have a skills and workforcegap, especially acute in an arealike cybersecurity.</p>
<p>They're people, you know,they get to a point in their career,their families say whatever,that sometimes the lure of public servicegets outweighedby the fact that they can come workon innovative thingsfor the private sector in cybersecurity.</p>
<p>So government is alwaysis never going to hireits way to cybersecurity Nirvana.</p>
<p>They're always going to have to findsmart ways to do it.</p>
<p>Or I come from the intelligence community.</p>
<p>They were always the farmteam. In one sense.</p>
<p>You had people who came onbecause we had a unique mission.</p>
<p>It was challenging,it was stimulating, it was rewarding,you know, But for a lot of people,when they got to a certain pointin even fairly early in your career,and they discovered a bureaucracyand somebody would come and say, Hey,you can come inmultiples, This might come work for youto come work for me.</p>
<p>You know, that's a gap that they'rethat's a challenge that's going totranscend state, local and federal.</p>
<p>But the feds are better resourced at thisand certainly local government.</p>
<p>Well, then that's what I was going to ask.</p>
<p>I mean, the feds, they work on somepretty fun projects, right?</p>
<p>So if you're a realtechno guy, you're going to go workfor the feds instead of Folsom.</p>
<p>The city of Folsom where I live.</p>
<p>Yeah.</p>
<p>And and, you know, again,</p>
<p>I come out of the intelligence community.</p>
<p>They were doing Mission Impossible stuffthat is cool to work on.</p>
<p>They're doing stuffthat you're relying on your expertise,your your company and my company have.</p>
<p>But they are doing stuff that is,you know,</p>
<p>Mission Impossible in some cases,and that's fun to do.</p>
<p>And some people I'm case in point,</p>
<p>I stayed for 30 plus yearsdoing that, you know, making a feelinglike I was making a difference.</p>
<p>But not everybody.</p>
<p>I mean, frankly, I think even a minorityof people who come into governmentare going to stickfor a career in government,frankly, is starting to recognize that.</p>
<p>So they're allowing they're beginningto think about how do you bring people inwho are mid-career, who come fromthe cybersecurity industry on the outside?</p>
<p>And we talk about and I'm hoping we coverin the course of this conversationthe need for trust andthe need for partnership, because neitherthe public or the private sectorcan do everything on its own.</p>
<p>And I certainly saw this in governmentwhen there would be a breachor an incident from the private sector.</p>
<p>We could talk into awere blue in the face about at that point,talk to DHS or talk to the FBI.</p>
<p>The reality is somebody inthe breached companywas going to callwhoever they knew in government,whether it was somebody at that agency,whether it was somebody at marinefish and mammals, they were going toyou're going to phone a friend and.</p>
<p>Somebody's friend Anyway.</p>
<p>Some of that social some of it is trustyou built up by working together.</p>
<p>So the kind of being able to rotate peopleback and forth work in adjacent cubiclesback when we were all in the officeallowed you to really get to knowsomebody, to recognizewhat their interests wereand develop that kind of trustthat really is instrumental.</p>
<p>And I think part of the challenge forgovernment is find smart ways to recognizeare people who may come on and say,</p>
<p>I appreciate public service.</p>
<p>It's an important calling.</p>
<p>I'm willing to come make a contributionfor a while.</p>
<p>I'm not going to stay for a career,but I really want to give back for a whileand similarly put people from governmentout in the private sector.</p>
<p>They become more. Than private sectorso they can learn.</p>
<p>I'm sorry, things that.</p>
<p>So a questionon that the the federal governmentcan can attract more talent than a local,a local or state government can.</p>
<p>So what hope do they have to attractthat talent that they needfor their cybersecurity positioningand in how they do their work?</p>
<p>Or are there some unique modelsthat we can maybe look at?</p>
<p>Well, and this is whereit gets really interesting,especially in the United Stateslocal government is is you know,</p>
<p>I talked to a lot of smallerlocal governments who don't even have</p>
<p>CISOs, forget cybersecurity staffwho are on government.</p>
<p>It's a contracted service,if you're lucky.</p>
<p>It's coming from elsewhere in your state.</p>
<p>It's not even always coming that way.</p>
<p>So they were having remote provisioningand remote services well before COVIDand well before, you know, all of usin the white collar world went to remote.</p>
<p>So, you know,even the smallest state out therehas critical mass at the state level.</p>
<p>There's a state, see?</p>
<p>So everywhere they all have,they may not have enough of them,but they have cyber security experts.</p>
<p>So they spend a lot of timehelping, helping them figure outhow do youhow do you regionalize some of this.</p>
<p>So sometimes you recognizethere are small jurisdictionsthat maybe they need to band together,they get critical mass,they become a big enough market,they get enough data that they canpotentially solve it that way.</p>
<p>And sometimes that meansit's done at the state level.</p>
<p>But then, of course,</p>
<p>I recognize that there's a dynamic at playbetween state and stateand local politics.</p>
<p>You know, sometimesif someone in a local jurisdictiondoesn'twant to have to do what they think, that,you know, the people in the Capitol statecapital are telling themjust as statesdon't want to do what Washington says.</p>
<p>So it's an attractive solution.</p>
<p>And I think a lot ofit works by federal or by federating.</p>
<p>It not not at the national level,but within a state becomesa provider, critical mass, etc..</p>
<p>Some places have work, some placesit doesn't.</p>
<p>But that's an attractive option.</p>
<p>You know, it's interestingwhen we were in talking about this,something puffed on my head.</p>
<p>It was theit was when we started movingwest back in the 1700s.</p>
<p>I don't know why this popped in my head,but it does in the cyberspace as well.</p>
<p>You started getting groups of peoplethat would work togetherto protect themselvesagainst the Native Americansat the time or against the Frenchor whoever was attacking them.</p>
<p>Right.</p>
<p>That they formed towns and communitiesand they formed countiesthat they had protectionagainst their enemy.</p>
<p>At the time, what you were mentioningthere is very similar right?</p>
<p>I've gotcities and towns that are like, well,</p>
<p>I can't protect myselffrom cyber criminals,so maybe I need to reach outto other citiesor the state to to get that.</p>
<p>And now we have national defense, right?</p>
<p>And we have state militias.</p>
<p>And maybe there needs to be a callfor a state cybermilitia or a regional cyber militia,the same way that that we didback in the frontier days.</p>
<p>Well, in ironically,some of that is actually being done.</p>
<p>You know, the National Guard.</p>
<p>The National Guard, you know,the military is big on cyber.</p>
<p>We have, you know, Cyber Command right.</p>
<p>As a unified command.</p>
<p>And there are essentially cybercomponents in everything,including the National Guard.</p>
<p>And there are states where recognizeand especially for small businessand for local governmentand we saw this a lot.</p>
<p>It just helpedsecure the midterm elections.</p>
<p>Cyber expertsfrom some of these National Guard unitswere called up by the governorand sent to actually help securelocal election infrastructure,recognizing that these peoplehad no internal expertise.</p>
<p>This was this is a governmental function,a governmental priority.</p>
<p>So, yeah, we actually did use expertisethat was residentin one part of governmentto help another part of government.</p>
<p>Yeah, that's National Guard and Reserve.</p>
<p>Force, you know that. Yeah.</p>
<p>We're literally called up to,you know, to active dutyto help secure election infrastructure,something a government can do.</p>
<p>They call it something governor could do.</p>
<p>But butwhat about a more generalized sense?</p>
<p>Because when we talked earlier,you said the attacks on local and stategovernments are different than the attackson federal government for cybersecurity.</p>
<p>Yes, they're very.</p>
<p>Do you remember we talk about,you know, it's those citizenfacing services that you especially haveat local government.</p>
<p>But, you know, the existential problemwhen you talk to stateand local government,you can't get far into a conversationwithout ransomware.</p>
<p>Coming upthat is top of mind for those people.</p>
<p>You know, and I remember the first time</p>
<p>I started reading about, you know,what is essentially a really tiny town ingetting hit with ransomwareand then paying, you know, $100,000.</p>
<p>And my first question was, where the heckdid they come out of with that money?</p>
<p>You know, very quickly.</p>
<p>Well, turns out that was insurance.</p>
<p>We were talking about collective defense.</p>
<p>I mean, at the end of the day,cybersecurity, you and I both recognizethis is about riskand it's about managing risk.</p>
<p>And one of the classic waystrying to managerisk is through insurance,transfer the risk to somebody else.</p>
<p>And that's one way to deal with ransomwarethat especially local governmenthas said, I'm going to try to rely ontransferring the risk to a third party,an insurer.</p>
<p>Now, the interesting thing,</p>
<p>Daryn, is I've been conflictedabout this for a long time,about whether that really helps or hurts.</p>
<p>Because, yeah,</p>
<p>I was just thinking that myself.</p>
<p>Government budgets are public,they're public record.</p>
<p>It doesn't take much to go onlineand look and say, Oh, look,here's a payment from this townto Acme Insurance Company,and it's for this amount where you canpretty much guess what their coverage is.</p>
<p>You can guess when they get here.</p>
<p>Insurance policy, huh?</p>
<p>Yeah. Exactly.</p>
<p>So when they get hit for ransom,where does it come infor a billion bitcoins?</p>
<p>It comes in for that level.</p>
<p>And when you have a ransomware,the insurer comes inand takes over the negotiationand takes over the payment.</p>
<p>In one sense, insurance is good because,you know, you put out the standard set.</p>
<p>You know, they helpto raise the tide of cybersecurity.</p>
<p>If you have to do certain things,you get a policy.</p>
<p>On the other hand, sometimes I feel likeit's the it's a publicizedeasy button for saying,okay, this is going to be a quick payout.</p>
<p>I'm not going to hit these peoplewho I'm going to have to explainhow does virtual currency work withand where do you get Bitcoin from?</p>
<p>You know, they're they're negotiatorfrom the insurance companies can come in,they'll settle the claim.</p>
<p>Yeah. I mean, these people work togetherall the time.</p>
<p>The negotiators are goinghigh, you know, basically, you know,</p>
<p>I dealt with you last week, you know, soinsurance can help and insurance can hurt.</p>
<p>But for local governmentin particular, ransomware,</p>
<p>I think has been the the top of my threat.</p>
<p>Elevate it to the federal government.</p>
<p>We talk about advanced persistent threats,those threat actorswho have got sophisticated capabilitiestend to be very clandestine.</p>
<p>They often do want to use the aviator'sterm, go low and slow.</p>
<p>You know, they're willing to get intoa network progressively over timeand they're trying to steal intellectualproperty or national security secrets.</p>
<p>And usually advanced persistent threat isa euphemism for nation state.</p>
<p>So when you're the federal government,you are disproportionately worried aboutbeing targeted by other nation states,less so at state and local government.</p>
<p>Now, you may have,you know, a country like Russiawhere their doctrine isyou go for the soft underbelly,you distract the adversary.</p>
<p>So especially withwhat happened in Ukraine,</p>
<p>I've heard an uptick in stateand local government saying, oh, my gosh,am I maybe in the crosshairsfor something happening around the world?</p>
<p>Or, you know, remember the not picturebotched ransomware,which is really destructive malwarein 2017 that which launched into Ukrainebut very quickly spread globally.</p>
<p>These people say, am I,you know, at a minimumat risk of being collateral damagefor a cyber conflictbeing wagedon the other side of the world.</p>
<p>That that is really interestingthat you brought that up, becausenormally a small town is like, well,</p>
<p>I'm protected.</p>
<p>I'm the middle of the United States.</p>
<p>I'm not going to be in a war.</p>
<p>Right.</p>
<p>Because I'm in I'm safe and protected.</p>
<p>But now because of the Internetand because of virtualeverything's a digital economy,</p>
<p>I can now be attackedfrom Ukraine or Russia or Chinaor North Koreaor who knows, or some scripted high schoolstudent somewhere.</p>
<p>I can nowbe attacked from anywhere in the world.</p>
<p>That that's kind of as kind of worrisomeas them.</p>
<p>Well, and Darren,sometimes it's on purposeand sometimes it's not even intentional.</p>
<p>You know, I remember about ten years agowhen we saw one of our adversary,nation states, starting to look atcritical infrastructure in the U.S.and starting to scan industrial controlsystem, ICS components.</p>
<p>And they were looking for things really inyou know, in pumping.</p>
<p>They were looking for thingsin the energy industry.</p>
<p>Well, guess what?</p>
<p>It turns out that a lot of thosesame components, programable logic chipsget used inelevator systems, in buildings.</p>
<p>So all of a sudden, real estateacross the countrystarts, you know, startsgetting hit by these people, not becausea bad guy wanted to seize controlof the elevator and never let you get off.</p>
<p>But because they were they were lookinggot out through too.</p>
<p>Yeah.</p>
<p>They literally ended up in placeseven they didn't intend to be.</p>
<p>You know.</p>
<p>So part of this is,yeah, you need to worrythat they may go after you intentionally.</p>
<p>I mean if you're if you are in a cyber,if you're in a geopolitical confrontationwith the U.S.and you can cause bad things to happen,alarming things to happenin the U.S., then, you know,you arguably will distract us.</p>
<p>Russia has thisdoctrine of escalate to deescalate,and that can mean broaden the conflict.</p>
<p>So, yeah, sometimes you worrysome of these more forwardleaning local governmentpeople are saying, you know,you're right, this is the first timethat I might actually be targetedbecause otherwise I look at it and go,</p>
<p>Why would they come after my watch?</p>
<p>Why do I keep yeah, why do I care?</p>
<p>I'm just a sweater.</p>
<p>I can't I'mjust a small municipality or whatever.</p>
<p>Yeah, but certainly was not petro.</p>
<p>And the fact that it spreadglobally rapidly and it was destructivehas made some of them say, look, you know,to your point, we're all interconnected.</p>
<p>This is globalized services.</p>
<p>And we certainly saw with somethinglike SolarWinds that everybody'susing the same things and inheritscommon vulnerabilities.</p>
<p>They may not recognize they have.</p>
<p>So it'sespecially scary for local government.</p>
<p>But then put yourself in the shoes of,you know, a federal see,so they know these peopleare coming after them and a lot of themalso move large amounts of money.</p>
<p>So they need to worry about the criminalscoming after them as well.</p>
<p>So they get,if you will, the worst of both worlds.</p>
<p>Right.</p>
<p>But on the other hand, their beliefs are.</p>
<p>Exactly.</p>
<p>Yeah.</p>
<p>That they are inand they know the space really well.</p>
<p>So I understand that.</p>
<p>Now, you you mentioned something</p>
<p>I want to dive into a little bitbecause it's dear to my heartand that is criticalinfrastructure, security and you mentionedindustrial control systems because</p>
<p>CISA has a list of what,but not all of them have industrialcontrol systems as part of it.</p>
<p>I worry about that partbecause they're actuallyaffecting the real world as we know itwith pumps and motors and sensors,and they're controlling dams and energyproduction and oil movement.</p>
<p>And it there's a lot in that space.</p>
<p>I really worry about this stuffbecause the traditional modelthat they've been using in the past,which is isolation,which is the Purduemodel, is starting to crumble.</p>
<p>And I mean.</p>
<p>It seems like we're vulnerable.</p>
<p>I mean, do you see that as well,or is this just, Darren, paranoid?</p>
<p>Because I don't know enough about it?</p>
<p>Well, I mean, I think the day, you know,we used to ten years agotalk about the first line of securityfor for operational technologyand for ISIS components wasthe air gap.</p>
<p>As you said, they were connected throughto the Internetand security through obscurity.</p>
<p>You know, a lot of these thingswere around for a very long time.</p>
<p>And who knows where to gofind that old component?</p>
<p>Well, thanks to searchengines, it's all discoverable.</p>
<p>And now, you know,just as we have digital transformation,you know,connected everything in our lives,you know, from our watches to, you know,our refrigerators to the Internet,that's happened on as well.</p>
<p>And I remember 15 years ago,if you had an old system that was Internetaccessible, it was probablybecause someone had made a mistake,they'd forgotten to shut something offafter maintenance.</p>
<p>Now, you know, I'm hard pressed.</p>
<p>For they put a patch cablebetween two switches for a.</p>
<p>Yeah.</p>
<p>You know, when security and convenienceclash, the convenience always wins.</p>
<p>You know, people want to get the job done.</p>
<p>That's job People want.</p>
<p>But now, you know,</p>
<p>I think it's almost by exceptionother than somethinglike nuclear power plantsassume I assume in my conversationswith organizations that have what is thewhat is connected to the Internetand in many cases this connectedconnected to the corporate I.T as well.</p>
<p>So that air gap has gone inand that has implications.</p>
<p>You said that we have the 16critical infrastructures.</p>
<p>They all have a lead federal agencyto be their partners.</p>
<p>The federal governmenthas carrots and sticks.</p>
<p>I mean, it can give you an incentiveto do somethingor it can create a requirement,whether it's a regulation or,you know, thethe legislative branch gets involvedand actually passes a law.</p>
<p>We try to shape behavior.</p>
<p>And obviously you win more friends,you get farther if you can, you know, usepersuasion and incentives to do somethingrather than say you must do this.</p>
<p>But, you know,the federal government tries to shapethe way these critical infrastructureswork.</p>
<p>And part ofthat is sharing information with them.</p>
<p>You know, so they all have informationsharing and analysis centers, ICE acts.</p>
<p>They all get information.</p>
<p>But to your point, Daryn, it'snot one size fits all.</p>
<p>It's a microcosm of the conversationwe had about the public sector.</p>
<p>All 16 sectors are critical.</p>
<p>That's what you know,what leads them to be that way.</p>
<p>That's in the definition, right?</p>
<p>But there's a subset of themthat, you know,they're called systemically important.</p>
<p>I mean, I hate this.</p>
<p>I actually I hateand love this acronym, six systemicallyimportant critical infrastructures.</p>
<p>You know,you know, there's three or four of those.</p>
<p>But, you know, at the top of the listthere and I call this the supercriticalthe hyper critical infrastructure of allis power, is energypower, generation of power transmission,because take that awayand in very short order,the other 15 are going to shut down.</p>
<p>You know, you run out of backup power,you're dead in the water no matter.</p>
<p>Yeah, that's, that's or protection.</p>
<p>Yeah, that's, that's true.</p>
<p>I didn't think of that right.</p>
<p>Without power,our economy comes to a screeching halt.</p>
<p>All the other critical infrastructurecomes down.</p>
<p>So in.</p>
<p>American power, General, nothing.</p>
<p>Yeah, Yeah, exactly.</p>
<p>So how secure is our power grid?</p>
<p>Which a good. News, bad news story there?</p>
<p>I mean, the the you know, the it'sit is a highly diversified verticalsector.</p>
<p>You know, you've got, you know, fouror five big tower companies at the topthat are really capable.</p>
<p>And then on the other hand, you have smallrural electrical cooperativesthat, you know, it's 25 to 50 peopleproviding power for a couple of counties.</p>
<p>They don't even have a full timei.t person, much less a security expert.</p>
<p>Now, there's fairlymuch resilience built into the grid.</p>
<p>Mothernature stress test it for us all the timeand we've got this big interconnectsin the electrical grid.</p>
<p>But, you know, they're used to dealingwith things that cause problemsso you can lose a certain numberof players and the resilience will kickin the problemis, you know, a lot of cascading failureswhen something goes down,it puts more pressure on the other things.</p>
<p>You know, you lose enough of themand it becomes something that causesa bigger problem.</p>
<p>And again, it's something where there'sthere's an issue of power generationand then there's an issue of powertransmission.</p>
<p>They're related,but they're separate problems.</p>
<p>And we've seen even on the physical side,when we've had people running aroundshooting at power substationsfor electricity, it turns outwe don't have a hugeit's not like you go down to Home Depotand get new generators and new, you know,this is or.</p>
<p>Insulators or whatever, they. Can go.</p>
<p>We don't keep a lot of that stuff.</p>
<p>It's just in time, you know.</p>
<p>You know, So there is some fragilitythere, some resilience as well.</p>
<p>But the big players,</p>
<p>I think, are in relatively goodposition in terms of their securityand their maturity.</p>
<p>It's the small guysyou got to worry about.</p>
<p>You can lose a certain number of themwithout reaching critical mass.</p>
<p>But you know, you never know.</p>
<p>Remember, some power outages,that one that turned out to be a squirrelchewed on a line and, you know,and it led to this cascading failurehere in the Northeast 15 years ago,which Murphy's Law strikes in weird ways.</p>
<p>But I worry more about power than anythingelse, because if you lose that one,you know, we're all we're all downand not just critical infrastructure.</p>
<p>Well, society, you know. Society.</p>
<p>I mean, we experience that in Californiaquite a bit because of the forest firesthat we have.</p>
<p>We and we've seen a major shift in powergrid.</p>
<p>They they movefrom really large grids to microgridsso that they could shut offinstead of several counties.</p>
<p>At the same time, they could shut offjust a community where where things were.</p>
<p>So I am seeing some changeon the physical sideand I'm guessing similaron the cybersecurity side as well then.</p>
<p>Yeah, Yeah.</p>
<p>But, but you know, to sort ofbring the conversation back to government,it's this is a real challenge.</p>
<p>It's local governmentwho really have been the onesinnovating in a lot of the digitaltransformation that they've been doing.</p>
<p>I think COVID for them, you know, putso much more stress on local government.</p>
<p>You know, the two months after March 2020,we watch unemploymentinsurance applications which go to stategovernment spiked by 3,000%.</p>
<p>At the same time,they sent their workforce homeand were working less efficiently.</p>
<p>Well, robotic processautomation, chat bots,that was a lifeline for get peoplefeeling like you're taking my job away.</p>
<p>This was the only thing that was keepingthese people from from sinking,you know, so so innovation becamereally, really critical and we innovated.</p>
<p>It's just likewe sent people home with laptopsand you wanted that kind of connectivityto occur and to occur securely.</p>
<p>Well, you can measure whether it'swhether it occurred or not.</p>
<p>Did they have the devices?</p>
<p>Do they have the platforms?</p>
<p>Do they have the bandwidth?</p>
<p>We couldn't directly measure security.</p>
<p>And I think in the year after COVID,we watched ransomwareand against statelocal government spiked by 1100 percent.</p>
<p>And most of itcame in through these endpoints.</p>
<p>People are working at home.</p>
<p>This is not industrial grade security,which they may or may nothave had in the office, but they almostcertainly don't have it at home.</p>
<p>And, you know, and that was a newsystemic weakness and it got exploited.</p>
<p>So, again, there's a lot of pressureon local government, state government.</p>
<p>But, you know, the paradigm is changingand, you know, one of the buzzwordsin cyber security of the lastcouple of years is zero trust.</p>
<p>You know,</p>
<p>I've always been conflicted about this.</p>
<p>I come from the national securitycommunity.</p>
<p>You know, in one sense,</p>
<p>I call this when old wine in new bottles.</p>
<p>You know, I come from a community wherewe were all about information was onlyyou're in California.</p>
<p>You go, Yeah, I like that.</p>
<p>But, you know, we talked aboutneed to know for access to information.</p>
<p>Heck, I worked at a in a facilitywhere you couldn't even gophysically to some parts of the buildingif you didn'thave the right kind of badge, the rightcolor badge.</p>
<p>So we were about segmentation and rolebased access controlbefore we even had that term.</p>
<p>So, you know, zero trust,you know, the idea that you want toyou will bestow trust, but ityou want to verify the user, the device,the activityis something that allows you to say</p>
<p>I don't need to workin a perfectly secure environmentto be able to secure the data,the process processing.</p>
<p>I can make this all work now.</p>
<p>Zero Trust is a terrible name becauseespecially for people in the public sectorwho may be making financial sacrificesto stay there instead of work for you.</p>
<p>And I, you know, you say,wait a minute, I'myou know, I'min a position of public trust.</p>
<p>But now you're telling me you have zerotrust in me.</p>
<p>I'm not trustworthy. Yeah.</p>
<p>That's not trustworthy.</p>
<p>And that's not reallywhat the paradigm means,but that is a tool that allows you to say,okay, I can allow youto work on the same networkthat your kids may be doing.</p>
<p>Who the heck knowswhat going to interesting places.</p>
<p>And yet the the workyou're still doing for me in governmentis secure or secure or and guess what?</p>
<p>It's just not Big Brotherlooking over your shoulder.</p>
<p>This is a safety net because I learnedthis in my time in government.</p>
<p>You know, if we in securitystand in the way of the mission,people are going to get the job done.</p>
<p>They're going to do what they have to doto get the work done.</p>
<p>Security needs to not be doctor.</p>
<p>No, you know, you can't you know,we have to give you tools and proceduresto get to do the work.</p>
<p>So is zero.</p>
<p>Trust becomes a way of saying,</p>
<p>I've got your back.</p>
<p>If you make a mistake, this is a safetynet that may say, did you mean to do that?</p>
<p>Did you know this is unusual?</p>
<p>I'm going to stop it.</p>
<p>I'm going to block it.</p>
<p>I may even warn you,because this is not Orwellian big brother.</p>
<p>This is this is something where werecognize security is trying to help youget the job done.</p>
<p>Well,and I like what you said about zero trustbecause I felt the same way around it.</p>
<p>It's a philosophy, non architectureand and what I saw was we're bundlingthingswe've already said were best practicesin the cybersecurity realmwith a couple small changeslike temporal access.</p>
<p>I only have access or authenticationfor a period of timewhere before we always said, Oh, I gotyou got access, you got access forever.</p>
<p>That has changedand I think that's a good thing.</p>
<p>So but I think</p>
<p>Zero Trust to me is a philosophythat brings all the bestpractices together, and that's why</p>
<p>I don't like the term either.</p>
<p>I agree with you. Yeah, Yeah.</p>
<p>But here's the interesting thing.</p>
<p>You know, it came from government.</p>
<p>It came from the federal government.</p>
<p>You know, they created this,you know, before we called it Zero Trust.</p>
<p>We were operating that way.</p>
<p>We had you know,we had segmentation of databefore segmentation was was even a thingfor the private sector.</p>
<p>They had flat networksand then the private sectorhad a series of breaches, high profilebreaches about a dozen years ago,and they figured outhow to work globalized enterpriseswhere you needed to access the data,sometimes even have sensitive accessin the to the dataand to be able tosecure it at scale. And I wasand yet governmentdidn't realize that this could be done.</p>
<p>I had people in governmentas I retire at the end of 2018who still said zero trust.</p>
<p>The only way to do zerotrust is to air gapand then to watch your networkfrom within.</p>
<p>And I said,</p>
<p>No, we've learned how to do this.</p>
<p>Now that I'm in the private sector,</p>
<p>I see this.</p>
<p>Well, it took the executive orderand President Biden signed in 2021where the federal governmentsaid, we're going to move to zero trust.</p>
<p>We're going to move there very quicklyfor government to then lookto the private sector for the solutions.</p>
<p>And government has federalgovernment has tended to be goodat generatingthe intellectual construct for things.</p>
<p>So in, you know,the next cybersecurity framework,which I helped build the first one.</p>
<p>Yeah, yeah, yeah.</p>
<p>Was intended as a model for riskmanagement in the federal governmentand it took on a lifein the private sector and arguably becamean international standard.</p>
<p>So the government tends to be goodat framing a problem in a technologyand vendor neutral fashion.</p>
<p>The people on the outsidego, Yeah, that works for me too.</p>
<p>So in the case of Zero Trust,the government put togethera strategy of multiple strategies.</p>
<p>They put together a maturity model,</p>
<p>They put together,you know, a list of a way to do it thatthe people in the private sectorsaid, Oh, this works for us too.</p>
<p>And the private sector then has servedgoods and services that map back to that.</p>
<p>So they're ablethat. Can support you. Yeah.</p>
<p>For governmentand for the private sector as well.</p>
<p>So it's an example of a partnership.</p>
<p>The government could drive thingsintellectually where if any of us did it,people would go, okay, well this is aboutcompetitive advantage for your company.</p>
<p>Yeah, yeah,yeah. What are you selling me? Andthe rules of the game.</p>
<p>The goalposts all got set, you know,by by government for its own purposes.</p>
<p>People agreed it made sense, and they wereall marching down the field the same,you know, playing by the same basic rulesand with the same equipment.</p>
<p>So that's an example of a partnership.</p>
<p>Yeah. Yeah.</p>
<p>Jim, this has been a wonderfulconversation and we could go on for hours.</p>
<p>I know we could, but we're out of time,so I appreciate.</p>
<p>Do you have any, any last wordsfor the people that are in public sector,whether they're at state and localgovernments or federal governments,</p>
<p>Any last words of wisdom on cybersecurityor how to move forward?</p>
<p>So so Darren, I've been talking a lotabout the differencesin the different partslevels of government, but there really arethree common problems,and I want to touch on this really quicklyin closing.</p>
<p>One is they're all focus now onhow do they integratesecurity across their government.</p>
<p>That matters, whether I'm trying to dodepartments in my local governmentor agencies, the federal government,you know, it's a two part problem.</p>
<p>I want to understandwhat's going on, situational awareness.</p>
<p>I want to drive integrated response.</p>
<p>And I've seen a number of different waysto do that.</p>
<p>And building blocks to apply for.</p>
<p>So, you know, don't reinvent the wheel.</p>
<p>Talk to others about how to framethat problem, break into bite sized chunksand make progress on it.</p>
<p>The second piece of is workwith not against technology trends.</p>
<p>I mean, we're seeing increasing powerdrivenby the things you all put together,an intel drivenby the kind of thingswe do here at Fortinet.</p>
<p>There's increasingly convergence betweenthings like networking and security.</p>
<p>The same products can do both things,so you can zero trust.</p>
<p>I can get the kind of connectivitythat I need,and it's innately done in a fashionthat's secure.</p>
<p>So work with Moore's Law,not in opposition to, you know, soso that's the second piece of advice.</p>
<p>And the third is partnership.</p>
<p>You know, I ran intelligence,</p>
<p>I ran threat information.</p>
<p>You can't secure yourself against a threatthat you don't understand,much less that you can detect.</p>
<p>And thenso build these bridges within governmentand with public and private sector.</p>
<p>But the thing that drives me crazy isespecially at National government,people say, I've got a problem.</p>
<p>I'm going to roll up my sleevesand build a solution from scratch.</p>
<p>Why don't you lookand see what somebody else is doing.</p>
<p>What someone else has already.</p>
<p>Done or something in the private sector.</p>
<p>If you need to make tweaks, that's good.</p>
<p>But it's, you know, odds are really,really high that somebody else has alreadythought of, addressedand probably solved that same problem.</p>
<p>Oh, that's awesome.</p>
<p>Jim, again,thank you for coming on the show.</p>
<p>I appreciate the conversation.</p>
<p>I learn every time.</p>
<p>Every time I do this,</p>
<p>I learn something new and today.</p>
<p>Must have I learned a lot. So thank you.</p>
<p>That's my pleasure.</p>
<p>Darren, I asyou can tell, I'm passionate about this.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org Until nexttime, go out and do something wonderful.</p>

</details>
