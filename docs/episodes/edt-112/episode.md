---
layout: posts
title: "Myths of Lift and Shift Cloud Migration"
number: 112
permalink: episode-EDT112
has_children: false
parent: Episodes
nav_order: 112
tags:
    - EDT112
    - EmbracingDigital
    - Multi-Cloud
    - Cloud Migration
    - Cloud

date: 2022-11-15
guests:
    - Darren W Pulsipher
    - John Evans

img: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, and John Evans, Chief Technology Advisor, WWT, discuss five lift and shift cloud migration myths."
---

{% include soundcloud.html id="edt112" title="#112 Myths of Lift and Shift Cloud Migration" %}

{% include youtube.html id="7pQKyV45ay4" %}

---

John started his career in technology at the help desk at a principal defense contractor 20 years ago. As his career progressed, he got into cybersecurity and enterprise architecture. He worked as a contractor for the Defense Information Systems Agency (DISA), where he was the lead architect for the Department of Defense DISA cloud. Eventually, the state of Maryland brought him in to lead the digital transformation efforts for the state, including cloud migration. That migration was the largest ever done across state and local education.

After that, he transitioned to the state Chief Information Security Officer (CISO) position, overseeing high-level operations, security, and governance. He left government service and joined WWT about three years ago. He works primarily in state and local education, although he helps in other public sector areas.

## Myth One - Cloud is Cheaper

The cloud is not necessarily cheaper than an on-premise environment. Legacy applications were built for the on-prem environment, so there is no issue with auto-scaling. It is a  consumption-based model, and there are already sunk costs, such as the servers. Most products meant to help organizations move applications to the cloud don’t support auto-scaling, so when they are forced to the cloud, they now have to be max provisioned at all times, which doesn’t often translate into cost savings. Customers are likely paying more than they were for the same capabilities on-prem.

When Darren worked with the Canadian government, they moved an SAP instance into the cloud. It was max provisioned, running 24/7, and they blew through their budget in just six months. When they discovered this problem, they turned it on and off every day since the instance didn’t need to run 24/7. They saved a lot of money by reducing it to 14-16 hours a day.

Access must be available at all times in a department such as Health and Human Services, which is typically the largest in a state IT budget, but it is possible to bring it down to a minor instance during off hours to save money.

The Cloud Service Providers (CSP) now offer cloud-native services that are being fulfilled by a third-party application or OEM product that can provide a similar capability with cost savings.  This won’t work with everything, as some legacy applications are not developed to leverage some of the cloud-native applications. It would be best to be careful about getting locked into a specific cloud. If, for example, you use proprietary AWS services, it could be challenging to extricate an application and move to Azure and vice versa.

John advises organizations to ask if it makes sense to move into the cloud. It’s not a good reason to move to the cloud because you think you should. You might end up with elevated expenses and frustrating superiors and workers because the strategy was not thoroughly thought through.

## Myth Two - Cloud Erases Technical Debt

Moving into the cloud does not eliminate technical debt in almost any case. It exposes and accelerates the debt. You will find exposure points if you take something running for 30 years and move it into a new environment. The acceleration part is that you have a more technical debt to worry about now that it's exposed.

Technical debt means you have systems falling behind what they should be. For example, when John first went to work for Maryland, some systems were still running on green screens. It was easy for current employees to navigate but had a steep learning curve for new users. Although the system had been working for many years, the downside of this technical debt is the amount of training necessary and retaining employees. More recent generations coming into the workforce who are knowledgeable on the latest trends and developments don’t want to deal with legacy applications.

Technical debt also means security issues. If a legacy application has not been updated, you may not be able to apply patches for fear of breaking it. This creates security vulnerabilities you must accept until you get out of the technical debt cycle.

A common reaction in an organization is to bolt on a bit of extra code when necessary to accommodate, for example, a rule change from a state legislature. This does not fix a problem; instead, the system ends up with a lot of spaghetti code, making it impossible to recreate the system for an update. One of the concepts in the cloud is breaking up your system into modules or microservices, but the spaghetti code does not allow for this since you can’t just pull out a piece of it.

This makes organizations even more hesitant to modernize because they’ve been doing things the wrong way for all these years. When something does break and becomes the impetus for this change, it’s even more challenging.

Sometimes it might make sense to scrap the old system and start fresh. This is costly, and you must have the new system before you toss the old system. For some organizations, however,  such as states, which can get federal funding for departments such as Health and Human Services, it might be the best choice. In a situation like this, you can also figure out the benefit of reusability, such as templates and governance structures for other departments.

## Myth Three - Cloud is Secure

Moving into the cloud does not necessarily make securing applications easier, although you don’t have to worry about physical security or hypervisors, for example. Cloud providers have a shared responsibility model in various forms. You have to understand what you are responsible for with each provider and what they are responsible for. It doesn’t just change with the provider but also with what services you consume. This can make security more complex for your security teams because they must stay on top of all the different variations across providers and services.

## Myth Four - Cloud is Easy

Migration to the cloud is complex. It is, in fact, easier to run everything in your own data center, not connected to the internet. Security is easy this way, and cost models are simple. However, you can’t grow. You can’t provide services to your constituents or customers, and you can’t satisfy mission needs, among other issues. The world is complex, and migration to the cloud is complicated.

## Myth Five - A New Skillset is not Necessary.

A knowledge gap can also add to the pain points around that complexity. Software developers and other IT specialists must change how they think about computing in the cloud, especially surrounding security. For example, software developers shouldn’t be spinning up instances in the cloud wherever they want or downloading things from GitHub or other repositories, grabbing libraries to make things work. This opens up all the firewall rules because they may not pick correctly. Guardrails must be implemented when moving to the cloud, which requires change. Working in the cloud requires a different skill set and mindset. Most importantly, you must figure out better ways to manage security with sophisticated ransomware and cyber attacks.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople, process and technology.</p>
<p>On today's episode, the Myths of Liftand Shift to the Cloud with special guest</p>
<p>John Evans, Chief Technology Advisorat WWT John, welcome to the show.</p>
<p>And thank you for for for having me.</p>
<p>It's my pleasure.</p>
<p>You come highly regardedfrom someone that left</p>
<p>WWT and came to Intel and that's Hannah.</p>
<p>I know you know who Hannah is,and we're glad we have her.</p>
<p>Sorry we stole her from you.</p>
<p>But we're happyto have Hannah on our team.</p>
<p>So a shout out to Hannah on that one?</p>
<p>Absolutely. She definitely deserves it.</p>
<p>I'm still a little bitter.</p>
<p>I'm totally kidding. But no.</p>
<p>And it is is is awesome.</p>
<p>I totally concur. They'regreat.</p>
<p>So, John, tell us a little bitabout your background and your history,how you got involved in technologyand all that.</p>
<p>Okay.</p>
<p>So been involved in technologyfor about 20 years now,started actually during collegein a in a helpdesk.</p>
<p>So I think that's not an uncommon startfor a lot of technologistsstarting off and helped us.</p>
<p>But I started off doing Tierone support in amajor defense contractor, helped ustheir internal help helpdesk and thenjust started moving on from from theremove that into a NOCas a service type of positionstarted getting moreinto the cybersecurity side the enterprisearchitecture side worked for DISAfor a few years as a contractorhelping to architect the DOD,the DISA Cloud.</p>
<p>I was one of the lead architects for thatand theneventually came to the state of Marylandwhere I was brought in to leadthe cloud migration, digitaltransformation efforts for the state.</p>
<p>They became aware of the work</p>
<p>I'd done on the cloud, so they brought mein to help out with their cloudand after a few yearsof doing that,</p>
<p>I transitioned to the State CSO position.</p>
<p>So got to seeat a at a high level,got to do the operationsside as well as the securityand governance side.</p>
<p>And then about three years ago</p>
<p>I left government serviceand came over to WWTand it's been awesome here since.</p>
<p>So are you still doing a lotin the public sector with WWT?</p>
<p>I mean, because your whole careerhas been in the public sector.</p>
<p>Yeah, no doubt. Yeah, absolutely.</p>
<p>I work primarily in state,local and education.</p>
<p>Help out a little bitin some other public sector.</p>
<p>But I've really kind of focusedmore on the statelocal in educationover the last year or so.</p>
<p>I guess there's still help outin some other areas, things like,you know, zerotrust road maps coming up with the</p>
<p>WWT sort of way of doing things and cybercyber consulting.</p>
<p>So those types of of initiatives that arekind of crossing the different verticalswithin public sector.</p>
<p>I still help out with,with, with those as as well.</p>
<p>You know whatwe're going to have to are non-retail.</p>
<p>You have to come back on the showand talk about securitysince you were a see.</p>
<p>So we're going to have to do thatbut not today.</p>
<p>Today, today we're doing lift and shiftthe myth of lift and shift.</p>
<p>You've done several cloud migrations.</p>
<p>It sounds like.</p>
<p>I've I've beenvery involved in two very large ones.</p>
<p>So if you think ofthe Department of Defense, that's yeah.</p>
<p>Yeah. That's a huge. One.</p>
<p>And then State of Maryland is a</p>
<p>I just learned this actuallyabout a couple of months agotalking to one of the major cloud serviceproviders that the program I let it</p>
<p>Maryland is still the largestcloud migration ever to be doneacross state local education.</p>
<p>So wow that's amazing. Yeah.</p>
<p>So 2 to 2 pretty big ones.</p>
<p>All right.</p>
<p>So a lot of we we all want to hearwe all want to hear how that went.</p>
<p>Right.</p>
<p>And we and we name the episode todaythe the myths of lift and shift.</p>
<p>I've I've seen this myself</p>
<p>I've helped some organizationsgo through this migrationand the way that cloud is soldinitially was just move your workloadsjust move everything right.</p>
<p>And so what have you found?</p>
<p>Well, I mean, let's start off at rightat the beginning with that firstwhat's the first myth?</p>
<p>So I think that there's kind of four majorlifts, I guess.</p>
<p>But let's start with the.</p>
<p>First one beingclouds cheaper.</p>
<p>And it's not not necessarily,you know, when you lift and shift,a lot of the timesyour applications were builtfor an on premise environment.</p>
<p>So there was no issue with thingslike auto scaling.</p>
<p>They didn't have to bedevelopedwith some of these cloud concepts in mind.</p>
<p>Some of thesemore of consumption basedconcepts in mind.</p>
<p>So when you think about auto scaling,that wasn't somethingthat was built into a lot of your legacyapplications.</p>
<p>So and, and a lot of the</p>
<p>I don't want to mentionany names of, of products,but there's products out therethat will help customersor help organizationsmove an application into the cloudmajority of those productsdon't support auto scaling either.</p>
<p>So what you've got is when you moveyour application to the cloud, younow have to be max provisioned at alltimes.</p>
<p>Being max provisioning all at all timesmeans a lot more money,whichdoesn't often translate into cost savings,especially if you've already paidfor a server, you already paid forwhatever environment you'reyou're hosting the applicationand now you move it in the cloud,you're having to max provision at at alltimes.</p>
<p>You're not able to automate scale.</p>
<p>So you're not really makinguse of a consumption based model which isthe main costsavings mechanism in the cloud.</p>
<p>And now customers are actually paying morethan they werefor the same capability on premise.</p>
<p>You know, I have a great example that Iwas doing work in the Canadian governmentand this was at the early days of themusing the cloudand they moved in SFP instanceinto the cloud and SAP.</p>
<p>And since that they ranand they moved it in the cloud.</p>
<p>Same thing, Max provisioned runningand they blew through their budgetjust blew through itright in like six months,the year budget completely blew fluid inand they were complainingback to the cloudservice provider,what in the world is going on here?</p>
<p>And they quickly learned that well,that instancedid not need to be running 24 seven.</p>
<p>They only really needed it</p>
<p>I think they finally got it downto 14 five.</p>
<p>So they actually turned it on and offevery day.</p>
<p>Yeah.</p>
<p>Which it sounds silly, but.</p>
<p>But it saved them gobs of money.</p>
<p>So you're right,it's a different mentalitybecause the cost is consumption based,which isa completely different model than whatwe're used to in in our data center.</p>
<p>It's sunk costs in our data center. Right.</p>
<p>Yeah.</p>
<p>Well, and you know, if you think about</p>
<p>Health and Human Services,which is typically the largest,</p>
<p>I would say it budgetwithin state government,if you just think about that,we can't turn off a lot of the accessto these services, you know, applicationsfor eligibility servicesas a for instance, you can't turn them offa certain times of day.</p>
<p>They have to be available all the time.</p>
<p>But if you're able to auto scale,</p>
<p>I mean, you couldyou could bring that downto the smallest instance,probably that, you know, a cloud serviceprovider or CSP offers,you know, in those off hours.</p>
<p>So it's still running,is still there, still available.</p>
<p>Somebody needs it, but you're hardlyrunning through any money at all.</p>
<p>Whereas if you're not able to auto scale,you're not coming down to a small instanceand you're having to run at thatlarge size,even in those hours where nobody's used.</p>
<p>So it is is that the main saveror is that the main thingthat helps realize that cloud is cheaper,is understanding the consumption modeland in changing the your operationsand or your applicationto fit that model better?</p>
<p>Or are there other factors that are inthat are contributing to your your bill?</p>
<p>So there's others, but that one'sprobably the easiest to to talk through.</p>
<p>And it's got it'sarguably the largest cost savingsmechanism is that that auto scalingthe consumption base based modelother things that you can considerthat I would sayyou could put into that same bucketare some of the cloud native services.</p>
<p>So each of the cloud providers,each of the CSP offersservices thatnow inmost organizations are being fulfilledby some third party applicationson some OEM product.</p>
<p>Now, if you move into the cloud,you'll typically geta cost savingsfor a similar type of capability.</p>
<p>They typically most of the CCP's offersome of those capabilitiesat a pricethat would be less than if you were to goto a third party vendor, an OEM,whatever you were in.</p>
<p>Running yourselfin. Your on premise environment.</p>
<p>And a lot of timesit'll be managed or in someat some level managed by by the CSP.</p>
<p>So there's, you know, the potential thereto take some work off of your workforce.</p>
<p>Also.</p>
<p>So there's a lot of attractive piecesto doing that.</p>
<p>Part of the problem,there's a couple of problems with that.</p>
<p>One is, again, a lot of these legacyapplications, they're not developedto be able to leveragesome of the cloud native applications.</p>
<p>So you won't be able to do everyeverything that, you know,you read a white paper maybe, and sayshow great the CSP offering is.</p>
<p>Your applicationmay not be able to consume that.</p>
<p>The other issue there is lock in.</p>
<p>So if you use those services quite a bit,it's very easyto get locked in to that specific cloudif you need to for some reason,whether it's cost, whether it's licensing,you need to move your applicationnow to another cloud environment.</p>
<p>But you know, just say innot trying to sayone is better than the other by any means,let's say you need to move from the U.S.to to to Azure.</p>
<p>If you've used a whole bunch of services,it could be very difficult for youto extricate your application,you know, break all the tieswith the services, move to Azure.</p>
<p>But the same is exactly true.</p>
<p>Moving from Azure table use.</p>
<p>I'm not I was just using the right.</p>
<p>Now it's that typical vendorlockdown thing that people worry about.</p>
<p>Right and it's real in the cloud for sure.</p>
<p>It's probably more soit's it's more of a concern, I would say,in the cloud than I've seen itbe in the past, because you canleverage so many services acrossso many different areasof of your stack.</p>
<p>You know what it kind of reminds me of?</p>
<p>It reminds me of the server warsin the nineties and early 2000.</p>
<p>Do you remember thatyou had to compile your codefor Solaris or Ajax or HP Unix?</p>
<p>And then Linux came alongand rattled everyone's cages.</p>
<p>And now we don't worry about stufflike that.</p>
<p>Yeah. At all in the data center.</p>
<p>So I'm wondering,do you think we'll ever get to the pointwhere the cloud service providersare relying on proprietary</p>
<p>SAS offerings that lock people in?</p>
<p>Do you think the people will getfrustrated enough where they move to likewhat happened with Linux?</p>
<p>I Linux was just earth shatteringto all these big companies that hadthese proprietary operating systems.</p>
<p>I don't know that the CCP'swill want to do that only because it.</p>
<p>Well, yeah, Iif I'm locked into your environment,</p>
<p>I'm going to keep paying youmy consumption costs.</p>
<p>So there's is sort of that's whythey offer it at a lowercost is to get you locked in is.</p>
<p>That is to get you. Locked. Yeah.</p>
<p>So that you'reyou're then going to continuepaying consumption cost to themand not move off to anotherclass. So they all sort of</p>
<p>I would guess.</p>
<p>Like a drug dealer,let's just say what it is.</p>
<p>Okay. Well.</p>
<p>They probablythey want to get you hooked now.</p>
<p>Of course they do.</p>
<p>I mean, this isthis is a normal business model, right?</p>
<p>I'm going to entice youwith better services at a lower priceto get you locked in so that you canconsume additional services.</p>
<p>Yeah. Yeah.</p>
<p>I but you still bring back the pointthat sometimes your legacy applicationsthat maybe you can't afford todate, you can't afford to.</p>
<p>What's the rightwhere you can't afford to replacethat may prevent youfrom actually moving to the cloudand or using some of these servicesbecause of the cost.</p>
<p>I would say good I Mike,</p>
<p>I would say don't move into the cloudunless you can do it the right way.</p>
<p>And I think that's part of why, you know,we want to call it that's part of whythis ismaybe called the myth of lift and shift.</p>
<p>If you'reif you're not able to move into the cloudfor whatever reason,if you're not able to do it the right way,take a good, hard look in the mirrorand say, why am I moving into the cloud?</p>
<p>Why am I, you know,what is my reason for doing this?</p>
<p>Maybe you haveyou know, legislationthat says that you have tomove into the cloudor we have to be out of a data center.</p>
<p>Okay. Well,that that that's a good reason.</p>
<p>That's a pretty big motivator right there.</p>
<p>That's a great reason.</p>
<p>But if it's just to saythat you're in the cloud,you know. Not a good.</p>
<p>Not not a good reason, you're probablygoing end up costing yourself more.</p>
<p>You're probably going to end upfrustrating both your superiorsand your workers because the strategyhasn't been fully thoughtthrough.</p>
<p>Let's talk about technical here.</p>
<p>This is a good one. Okay.</p>
<p>Yeah. Yeah.</p>
<p>Because I'm seeing this in in huge droves.</p>
<p>Right.</p>
<p>It's a big.</p>
<p>Problem. Absolutely.</p>
<p>And people think a lot of timesthat by moving into the cloud that they'regoing to fix their technical debtor eliminate theirsome portion of their technical debt.</p>
<p>Doing the lift and shift doesn'teliminate your technical debt.</p>
<p>In almost any case.</p>
<p>That doesn'tit actually expose it more 100%.</p>
<p>That was going to be the next point.</p>
<p>It can expose itmore and accelerate it evenaway. Explain it.</p>
<p>I understand the exposebecause I'm now taking somethingthat's been running for 30 yearsand moving it into a new environment.</p>
<p>I am going to find exposure points.</p>
<p>But what's what's the acceleration part?</p>
<p>I don't know.</p>
<p>I think it's kind of the same concept iswhen I thinkwe're kind of saying the same thing,you know, by, okay, you're exposing it.</p>
<p>But I guess what I was,you know, the other by sayingthat it's accelerating it'syou know, you'venow you have more technical debtto sort of worry about.</p>
<p>So whether you look at thatas more technical debt being exposedor whether it happening,accelerate your technical debt.</p>
<p>Either way, you have more technical debtto kind of worry about in some ofthose cases.</p>
<p>All right.</p>
<p>Let's walk through an example,because I think some of the people hearthat word, technical debt.</p>
<p>I think they think they know what it is.</p>
<p>But let's walklet's walk through an example.</p>
<p>What would be a gooda good, easy case to understand.</p>
<p>So I can I can look and seeif I'm having the same issues.</p>
<p>So you move into that well.</p>
<p>So first of all, technical debt isoften sort of the,</p>
<p>I guess, colloquial kind of termfor systems that are kind of fallingbehind what they should be.</p>
<p>So when you're not making updatesto your system, when those systems I mean,when I came in to the state of Marylandas a for instance, we had systemsthat were still running on green screenswhere the, you know, the.</p>
<p>The 81 VTI 100 terminals.</p>
<p>Yeah.</p>
<p>The operators were, you know, they wouldthey would hit, you know,whatever code five or somethingand it would bring up a new screenand like there was no navigationthat was happening therefor people who had been using that systemfor ten years.</p>
<p>It was super easy forfor for them to navigatefor someone just coming into the system.</p>
<p>I sat down at a terminal one day.</p>
<p>I couldn't figure outhow to make anything work on this thing.</p>
<p>Like, and then and the and,and the book is this thick, you know,to to learn all the commandsand everything. Sonot a super great user experience thereand a super steep learning curve there.</p>
<p>So that was well,</p>
<p>I want to stop you for a second there,but it's working.</p>
<p>That's well, it's working for those peoplewho have been there ten years.</p>
<p>Oh, gotcha.</p>
<p>But but what's the what's thewhat's the danger incarrying technical debt like that?</p>
<p>I mean, it workswell, but I mean,what's the downside of that?</p>
<p>Well, so anytime I have to bring insomebody new when it's a lot of trainingto get them brought up and brought up tospeed, there's a lot of doubt downsides.</p>
<p>You know, one of the downsidesthat people don't often think about,especially when you're talking about ina government space, is employee retention.</p>
<p>So, you know, millennials,any of the newer generations, I guess,that are coming into the workforce,which is, you know, you want to havesomeone who is knowledgeable on the latesttrends and developments around caseworkas a as a for instance.</p>
<p>So if you're trying to attractthose top caseworker talents out of schoolwho are up on the newest, not knowledge,they're not going to want to come inand learn a green screen.</p>
<p>They're not going to want to come in andand deal with these legacy applications.</p>
<p>So we were seeing a high amountof turnoverof very qualified peoplecoming in after a couple of months.</p>
<p>They're like,you know, I've had enough of this.</p>
<p>I'm washing my hands of this place.</p>
<p>I'm out of here. That is fast.</p>
<p>I never would havethought I never would have thoughtof employee retention with technical debt.</p>
<p>Yeah,but that's an interesting correlation.</p>
<p>Yeah, that's cool.</p>
<p>I mean, it was one of our biggest issuesin in one of the agencieswas the amount of peoplewho were turning over andwe think it was directly attributableto some of the technical debtthat we had in some of our systems.</p>
<p>You know,when you have technical debt also,there's there's security issues.</p>
<p>If I.</p>
<p>Think.</p>
<p>If I have an old legacy applicationthat hasn't been updated, I mean, I sawthis firsthand more times than than</p>
<p>I would like to have to think about, but</p>
<p>I may not be able to apply patchesto that to that system.</p>
<p>There may be a fearthat I'm going to break it.</p>
<p>This is an outdated operating systemthat it's that it's running on.</p>
<p>I may not be able to applypatches, therefore,</p>
<p>I've got six security vulnerabilities that</p>
<p>I just have to accept until we can get outof that technical debt cycle.</p>
<p>As a C.</p>
<p>So that must have driven you crazy it.</p>
<p>Now when I say I had to actually acceptwe had a risk acceptance processwhere the head of the agencyactually had to accept them,but it was still not a nota pleasant process for for years.</p>
<p>I bet not now.</p>
<p>Did you did you see a lot of thatin the space in operational technologyor was this in your i.tenvironment as well?</p>
<p>Oh, this was in the I.T. environment</p>
<p>I'm talking about. Oh, yeah.</p>
<p>And I'm talking because I can</p>
<p>I've seen that a lot in the OT space.</p>
<p>It's been doing that same job.</p>
<p>That pump has been pumping waterfor the last 30 years on Windows 95 box.</p>
<p>I'm not touching it. Never, ever. Right.</p>
<p>I'll just keep it connectdisconnected from the internet.</p>
<p>That's kind of mentality, the Iot guys.</p>
<p>But in the IT space, that's</p>
<p>I mean, that's a whole different beast.</p>
<p>Oh yeah. No, it was a real thing.</p>
<p>We had applications that were runningoutdated operating systems, couldn'tapply patches to them because they wouldit would break the system essentially.</p>
<p>So they just had to acceptthe agency had to accept the risk thatsomething real bad may happenhere.</p>
<p>What about cost.</p>
<p>To maintain these legacy,this technical debt?</p>
<p>The first thing that comes to my mindis COBOL systems, how much you have to paya COBOL programmerto come and fix problems.</p>
<p>Oh yeah.</p>
<p>And I mean, we laugh about it, but there'sa lot of COBOL out there still running.</p>
<p>The IRS usessome and I know a lot of other statesare still using mainframesthat run COBOL on them.</p>
<p>Yeah.</p>
<p>So COBOL in itself,</p>
<p>I mean, there are some things</p>
<p>COBOL is really good at and so it's notnecessarily a bad language on its own.</p>
<p>The problem is two things.</p>
<p>One is the lack of talent out there around</p>
<p>COBOL still.</p>
<p>So now you're having to payexorbitant pricesto get someone in who understands it.</p>
<p>But another big problemthat relates back tothe technical debtis a lot of these systems.</p>
<p>So again, I'm not talking the healthand in the services space,that's an easy example for forfor for me to give.</p>
<p>But it happens across motor vehicledepartments, happens in other places.</p>
<p>Also, there's rule changesthat that come down eitherfrom the state legislature,maybe from the feds, from CMS,and they they make tweaksto your eligibility programs.</p>
<p>Very avery common reaction tothat is for someone to sort ofor for an agency,</p>
<p>I guess, to kind of bolt on,</p>
<p>I'll say a little bit extra codeto account for these these these tweaks.</p>
<p>Right.</p>
<p>So they're not actuallyreally going in and and fixing the system.</p>
<p>They're essentially kind of, you know,adding on something a little bit extrathat will that thatthat will achieve the required result.</p>
<p>The problem withthis is in this release backto the concept of technical debt,you end up with a ton of spaghetti code.</p>
<p>And then so now when you do want to updateyour, your,your systems, there's no way to recreatethese systems, essentially.</p>
<p>So it becomes this very dauntingtask to the point where it makespeople almost want to continuein the technical debt cyclebecause they're like, well,</p>
<p>I can't just like, I can't break this up.</p>
<p>You know, one of the common conceptsnow in around cloud isbreaking up your system into modulescontainerized, right?</p>
<p>Yeah.</p>
<p>I've heard I've heard that first approach.</p>
<p>The way the spaghetti code is written now,</p>
<p>I have no way typicallyof breaking these up into modules,breaking these up into microservices.</p>
<p>So now it's I have to do all of it.</p>
<p>I can't just pull outa little piece of it.</p>
<p>So that makes people even more hesitantto move towards this modernization effortbecause they've been doing things wrongfor all these years now.</p>
<p>It's like when something does break,when, when,when they're when there is the impetusfor this change, it's it's even harder.</p>
<p>So that tells me</p>
<p>I need to tell my kids to learn COBOL.</p>
<p>They will have a job forever.</p>
<p>Well, I think the other option there is we</p>
<p>I mean, one of the other options thereand this is what we had to largely doin Maryland, you just essentially scrappedthe old program. You.</p>
<p>Yeah, but aren't won't services go downfor your constituents and you don't.</p>
<p>Scrap it until you have a new programbuilt to replace it.</p>
<p>Right.</p>
<p>But but basically you have to rebuild.</p>
<p>You have to go back, look at.</p>
<p>Go go from scratch, look at the old.</p>
<p>Graduated from scratch,rebuild something new.</p>
<p>And then you can scrap the old one.</p>
<p>That's coststhat cost a lot of money. It does.</p>
<p>There's someso likewhen we got our cod migration of Maryland,one of the reasons we startedwith Health and Human Servicesis because there's a lot of federalfunding dollarsout there to help with these migrations.</p>
<p>So what we were able to do,</p>
<p>I mean, the program at Maryland ended upbeing about a $500 million program overthe life of it, and it's not done yet.</p>
<p>Goodness.</p>
<p>But it was paid for by about 70%or more, probably more than that, 70something percentby the federal government.</p>
<p>So the state didn't have to put up nearlyas much moneyfor a lot of these activities.</p>
<p>When you're updating a medicaid systemas a for instance,when you're developing the Medicaidsystem, moving the Medicaid systeminto the cloud, the federal governmenttypically pays for 90% of all the costs.</p>
<p>So the states were responsible for 10%.</p>
<p>So if a state is doing this, you know,if they're really thinking about costsand how to optimize their money,if you start in the healthand human services space,you can get up to 90%or a lot of these activitiespaid for by the federal government.</p>
<p>You can keep things like your your cloudformation template, some of your turf.</p>
<p>So, you know, the the templates forfor saying these things up the governancestructures, all those things are reusableacross the entire enterprise later.</p>
<p>So yeah,so you have reusability that you built.</p>
<p>In, you have reusable,you're paying for a fraction of whatyou would have to payif, say, central I.Tor maybe Department of motor vehiclesor someone i don't knowwhat the matches on divvy, butif you started another agency,you may have to pay significantly moreout of your state funds than if you starton the health human services on health.</p>
<p>And this totally makes a lot of sense,right, because you also build up youryour muscle memory onhow to do this sort of stuff.</p>
<p>Right. Which can be daunting.</p>
<p>It sounds like a.</p>
<p>Lot of people think that by movinginto the cloud, well, the cloud is secure.</p>
<p>I can move into the cloud,and that's going to make securingmy applications easier.</p>
<p>But that's not always the case either.</p>
<p>It's very important.</p>
<p>So it'll be us and all the all the CCP'shave some version of it.</p>
<p>I'm most versed in the WCFwhere I have somethingon my cert, so it's easiestfor me to talk about that in some cases.</p>
<p>But they have what's calledthe shared responsibility model.</p>
<p>Yeah, they all have it.</p>
<p>They all have the the model,but they differ.</p>
<p>This is one thing that got me tricky.</p>
<p>You know, they differjust a little bit in each one.</p>
<p>So there's this weird overlap,right, where, you know, things are secure,but then there's this gap.</p>
<p>Yeah, you have to be real careful.</p>
<p>That was kind of the point</p>
<p>I'm making is you have to be real carefulof understanding in each CSP Exactly.</p>
<p>To your point,it's a little bit different.</p>
<p>So you have to understandexactly what you're responsiblefor in each of the CCP'sand exactly what they're responsible for.</p>
<p>And it doesn't just change by, say, a CSP,it changes by which servicesyou're consuming in that system and CSP.</p>
<p>So it's very importantthat your security teams, it'sit's almost more complex in some casesto figure outexactly what I'm responsible for,make sure that I'm staying on top of thatversus what they're responsible for.</p>
<p>You know, it's almost like likea racing matrix across the different CSPsand across the different productsthat you have.</p>
<p>But if you don't keep up on that,you could have vulnerabilities out therewhere CSP knows thatthey're not responsible for it,but your team may not.</p>
<p>So security in the cloudif it's not necessary.</p>
<p>There's a couple of thingsyou don't really have to worry about.</p>
<p>You worry about things like hypervisorsand stuff, stuff, stuff like that.</p>
<p>Or even physical security.</p>
<p>Physical security, yeah.</p>
<p>But it doesn't necessarily make it easier.</p>
<p>It's it's still complex.</p>
<p>You still have to be on the stuffthat you're responsible for.</p>
<p>And it can be difficult to knowwhat you're responsible for at timesunless you're well, well versed in cloud.</p>
<p>Have have you ever taken an approach?</p>
<p>Well, the security is ultimatelyyour responsibility anyway.</p>
<p>Have you ever run into thein the in the case where you arestepping on the security measuresof the cloud service provider?</p>
<p>Are they ever in conflict?</p>
<p>Have you have you run into that case?</p>
<p>I don't.</p>
<p>I'm trying to think if I ran into that,</p>
<p>I can't think of where I ran into that.</p>
<p>I have run into the reverseof that, though,where someone thoughtthe CSP was responsible for somethingand it's like,no, you're responsible for for for that.</p>
<p>If you give me enough time, I maybe</p>
<p>I'll come up with an answer on that one.</p>
<p>I just I haven't heard of one ear.</p>
<p>I so in my gut</p>
<p>I'm constantly thinking, well,ultimately I'm responsibleanyway for, for security of my stuff.</p>
<p>It's my stuff, right?</p>
<p>So maybe if I am a little overzealousand step on the cloud service providersa little bit, I think that might be okaybecause it's it's better to bea little over cautious than have a gap.</p>
<p>So I think I don't know I this is well.</p>
<p>So that makes a lot of sense.</p>
<p>And if you have</p>
<p>I'm going to be a little bit specious herein interpreting what I'm saying.</p>
<p>But if you have unlimited funds,then that's a great approach.</p>
<p>Oh yeah, you can.</p>
<p>If if you have.</p>
<p>Yeah. I don't have unlimited funds.</p>
<p>So if you have to make tradeoffsand you have to prioritize.</p>
<p>You know, there's.</p>
<p>Even cases that I could point to,</p>
<p>I don't want tomaybe reference anything directlybecause I don't knowif that would be politically proper.</p>
<p>But cases where if the risk of an incidentwas less costlythan the riskof fixing that vulnerability,just let that. Take that risk.</p>
<p>Just let it roll.</p>
<p>You know what? That's a normal.</p>
<p>That should be in your riskassessment plans that you do.</p>
<p>That's part of a life of a CSO.</p>
<p>So that tells mewhen you're moving to the cloud,it adds to your risk profile.</p>
<p>Most definitely.</p>
<p>Right.</p>
<p>And you said it's more complex.</p>
<p>I totally agree with you there.</p>
<p>And in fact, people said, oh,the cloud is easy,not easierthan just runningbecause it's so much easier if I just runeverything in my own little data centerand I'm not connected to the Internet.</p>
<p>Right.</p>
<p>I mean, security's easy,my cost models simple.</p>
<p>But I can't grow. I can't grow.</p>
<p>I can't provide servicesto, you know, my constituents.</p>
<p>I can't satisfy mission needs,all those sorts of things.</p>
<p>So we're living in this complex world.</p>
<p>We have to understand thatmigration to the cloud is complex.</p>
<p>Absolutely.</p>
<p>And I mean,when we were first moving into the cloud,both on the DOD side and in Maryland,</p>
<p>I've got very specific exampleswhere the security team would say,no, you can't do that.</p>
<p>You can't set the firewall rules to that.</p>
<p>And it's like, well,you just don't understand the way thatthe way that these conceptswork in the cloud, it's not the same. Soit's complex.</p>
<p>And, you know, there's a knowledgegap a lot of times when you're firststarting off moving it to the cloud also.</p>
<p>So that adds to some of the pain pointsalso around that complexity.</p>
<p>So I think he's just found a fifth math.</p>
<p>It's and it is you need to scale up.</p>
<p>Yeah you can't</p>
<p>I mean you need to learn about it, right.</p>
<p>That's something that youyou can't just I think and I willblame software developers.</p>
<p>I am a software developer.</p>
<p>I caused this problem in inside Intel.</p>
<p>I causes problem to a lot.</p>
<p>Right. Oh,</p>
<p>I can just spin up instances in the cloud.</p>
<p>I can do whatever I want.</p>
<p>Oh and oh I need to downloadthings out of GitHuband you know, out of all these otherrepositories where I'm just grabbinglibraries to make things work.</p>
<p>So I open up all the firewall rules because I'm too lazy to pick the right ports,right?</p>
<p>So yeah, so I'm skilled enoughto spin up an instance, but that's not,that's not the same.</p>
<p>I'm right.</p>
<p>I'm. I'm glad you didn't work in.</p>
<p>I'm just kidding.</p>
<p>Oh, believe me. Believe me.</p>
<p>I've interviewed our cloud.</p>
<p>Our cloud broker team, and they go, Yeah,we know who you are, Darren.</p>
<p>Yeah, we know exactly who you are.</p>
<p>And they did, they did wonderful things byputting security underneath me without meknowing.</p>
<p>Yeah.</p>
<p>And that's a great.</p>
<p>In my own instances and, and there's so,so it's a different skill set.</p>
<p>It's a different wayof thinking of compute.</p>
<p>And I think that's our number five isyou have to change your mindset,you have to scale upon because these are different ways ofdoing compute than we've done in the past.</p>
<p>And that's a great you know,what you were talking about there.</p>
<p>It's a great example of howwe need some different types of guardrailswhen you're moving into the cloud,there has to beyou know,somebody shouldn't be able to from afrom anenterprise managed cloud environment.</p>
<p>They should not be allowed to go out andpull from whatever library they want to.</p>
<p>They should be limited to be ableto pull from from certain environments.</p>
<p>John,you just scared every software developer.</p>
<p>If you need to have something,tell me and we'll approve itand we'll get it into the library andthen you can pull from so from that also.</p>
<p>But you're slowing me down.</p>
<p>Just slow me down and you.</p>
<p>Got to have security too, so.</p>
<p>Oh, I know, I know.</p>
<p>I, I totally, I totally agreewith you there, but I can tell youfrom my perspective, I'm like,</p>
<p>Then forget it, I'll just write it.</p>
<p>I'll just go outside of the corporate,because that's where Shadow it came from.</p>
<p>That's why people do it. Peoplethat's why people do it.</p>
<p>Yeah. Yeah.</p>
<p>So we've got to figure out better waysto manage, especially in today's world.</p>
<p>Holy cow.</p>
<p>Yeah.</p>
<p>The ransomware attacks.</p>
<p>The cyber attacks, though,the sophistication of the attacksare outrageous.</p>
<p>Yeah, I mean, we had bots crawling the weblooking for any sort of datathat could be Marylandtype of data looking for.</p>
<p>And we found a development environmentin another countrywith an unlocked S3 bucket.</p>
<p>That was some of some of our code.</p>
<p>There wasn'tany of our sensitive information in there.</p>
<p>It was open source code,but it was code thatwe had adapted a little bit.</p>
<p>So it wasn't it wasn't this bad. For afunny enough, though,there actually was another state datain that bucketthat they were using for test purposes.</p>
<p>So some of our code base was was in there.</p>
<p>It was open source, like I said.</p>
<p>So it wasn't, wasn't hugely concerningfrom our perspective,but I had to call that other state systemsince becoming a good friend of mineand explained to him, Hey, I think I found</p>
<p>PII information of your citizensthat they're running againstin order to validate.</p>
<p>How did that conversation go?</p>
<p>I got a colorful call on a Saturdaymorning as I was heading to breakfast.</p>
<p>So this is John.</p>
<p>This has been wonderful,great, great information.</p>
<p>Things we need to think about.</p>
<p>So thankyou so much for coming on the show.</p>
<p>It's my pleasure.</p>
<p>I enjoyed talking with youand looking forward to doing this againsometime soon.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.org until nexttime, go out and do something wonderful.</p>

</details>
