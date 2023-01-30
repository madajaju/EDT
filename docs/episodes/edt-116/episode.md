---
layout: posts
title: "An Argument for a Holistic approach to Critical Infrastructure Security"
number: 116
permalink: episode-EDT116
has_children: false
parent: Episodes
nav_order: 116
tags:
    - Critical Infrastructure
    - IoT
    - IT/OT Convergence
    - OT Security
    - Cybersecurity

date: 2022-12-15
guests:
    - Darren W Pulsipher
    - Steve Orrin
    - Anna Scott

img: thumbnail.png
summary: "In this episode, Darren talks about the convergence of OT and IT cybersecurity with Security expert Steve Orrin and Industrial OT expert Dr. Anna Scott"
---

{% include soundcloud.html id="edt116" title="#116 An Argument for a Holistic approach to Critical Infrastructure Security" %}

{% include youtube.html id="DRGy_il_nUg" %}

---


## There is a real threat to Critical Infrastructure

According to Dr. Scott, OT organizations still use the traditional Purdue Model, which leverages air-gapped and firewalled-off networks. However, this model is starting to fall apart as IT and OT networks converge. Businesses are trying to get better insight into what is happening in their operational infrastructure. As a result, they punch holes in the previously well-isolated networks, exposing them to cyber threats. Additionally, cybercriminals are finding ways to circumvent air-gapped and firewalled networks. 

Steve argues that leveraging IT best practices can help, but OT professionals and IT professionals have different motivators and operating models. Continuing to isolate your network is still a good strategy but should be one of many tools used in critical infrastructure cybersecurity protection. OT security should look at IT cybersecurity best practices for ideas to improve their networks and infrastructure.

## IT and OT differences impeding Best Practices

IT systems are traditionally updated quickly or continuously based on security profiles. One of the primary tools to improve security is basic security hygiene through patching operating systems firmware and software in the IT infrastructure. However, as Dr. Scott enlightens us, OT systems managing critical infrastructure cannot have downtime, and the window to update these systems is measured in years, not days. It is not uncommon in OT infrastructure devices that machines run for 5 to 10 years with no downtime, meaning no patch updates. 

For example, in the oil and gas industry, refineries operate continuously for four to five years, have a one to three-week downtime for upgrades, and then operate again for four to five years. These operating models are not conducive to the traditional continuous security patching that IT organizations typically use. However, Steve elaborates on many other cybersecurity tools that should be leveraged when cybersecurity patches cannot be applied to existing devices due to their critical controlling infrastructure.

## Best Practice Risk Assessment

the primary cybersecurity best practice is risk assessment. Even though risk remediation may be different, the risk assessment process can be leveraged equally across OT and its environments. Steve argues that the first step of the risk assessment process is getting a complete inventory of hardware, firmware, and software assets in your OT environment. This first step is critical in evaluating your cyber threat position and assessing the risk your organization is willing to take. The next step is to evaluate CVEs against your known inventory. 

It is critical to recognize that this is a continuous process and not to be done just once or periodically. Some OT professionals have argued that their OT environments are static and do not require ongoing risk assessment evaluation. However, Steve points out that even though OT environments may be fixed, the threat environment constantly changes, and business factors can change the organization’s risk position. Therefore continuous risk assessment must be done to protect critical infrastructure from bad cybersecurity actors.

## Dealing with OT Vendors

Another interesting factor in OT infrastructure is the shared security model with device vendors. In many cases, these embedded devices controlling multimillion-dollar critical infrastructure are managed to buy the vendor, not the OT professional. The vendor can only make cyber security patches and updates to the devices. This can sometimes lead to vulnerabilities in your OT environment, increasing the risk of cyber infiltration. Steve brings additional cyber security tools to help protect assets that cannot be patched with critical cyber security patches, including increase isolation of affected devices, deploying watchdog devices, and canary design patterns into the OT infrastructure. These tools can help protect and isolate the device to prevent the spread and access to compromised assets.

## What to do when you are compromised

So what do you do when you have a critical infrastructure that has been compromised? Can the organization handle shutting down the infected infrastructure? What business continuity plans are in place when hazardous situations occur? Can this be used when a cyber security event happens as well? 

The key here is to isolate the infection as quickly as possible to minimize the impact on the critical infrastructure. I am decreasing the effect on the operating reliability of the necessary infrastructure. The goal is to reduce the impact and protect the safety of people and the infrastructure involved.

## Find out more 

Continue to look for more podcasts on OT cybersecurity. Additionally, a whitepaper describes the challenges of converging OT and IT cybersecurity environments.


<details>
<summary> Podcast Transcript </summary>

<p>﻿Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people processand technology.</p>
<p>On today's episode,an argument for a holistic approachto critical infrastructure securitywith our special guest, Dr.</p>
<p>Anna Scott and Steve Orrin.</p>
<p>Anna. Steve, welcome to the show.</p>
<p>Good to be here.</p>
<p>Thank you, Darren</p>
<p>I know it's hard to know who to go firstwhen I'm going to people.</p>
<p>To sort out at the same time say.</p>
<p>You guys have been on the showseveral times, Steve,</p>
<p>I think I think you're my number oneinterviewee.</p>
<p>I think. Anna, your second.</p>
<p>This is like your fifth time.</p>
<p>I think it's been a lot. Yeah. So.</p>
<p>And the reason I ask both of youon today was I wanted to geta different perspectiveon critical infrastructure security.</p>
<p>First off, from a former CSOand a security expert.</p>
<p>That's you, Steve, if you don't know.</p>
<p>And also from an industrial Iotexpert like you, Anna,because you've been in the trenchesin industry trying to work through theseand critical infrastructure environments.</p>
<p>So both of you on together,we should help figure out what's going onas far as criticalinfrastructure, cybersecurity.</p>
<p>So let's first get kicked off bywith you in a little bit.</p>
<p>Is is there a real threat to criticalinfrastructure, cyber security,or is that just a red herring or somethingwe're just hearing on the newsbecause there's nothing going onin the news cycles toknow.</p>
<p>It's a huge it's a huge concern. Right.</p>
<p>And it's a it's a huge threat.</p>
<p>It it does depend a lot onhow the individual companiesare dealing with their systems.</p>
<p>Right.</p>
<p>There's still a predominance of the wayyou protectreally critical systems isyou just don't let anything access themthroughthrough anything exceptbeing in the same room with them.</p>
<p>So that that's a great wayif you can control around insider threatsbecause you have a very limited attacksurfaceand you've got a great deal of controlin that space,there's all sorts of reasonswhy that just does not workwell in the modern world,because that tends to prevent takingadvantage of a lot of modern technology,especially when you get intowhat you can do with analyticsand analytics across different data sets.</p>
<p>So so yes, you can continuein that pattern, but you do thatat the expenseof not being able to take advantageof those tools and bring thatcompetitive advantage into your space.</p>
<p>But as soon as you do that and youconnected to the Internetor you can connect contributor systems,now you've got a whole different setof protections that you need.</p>
<p>And these tend to be things that are notwell understood and especiallywhere operational folks make the call,which is what happens in the space,then you have some real challengesjust in understandingwhat are the real threats, what are thereal tools for to protect against them.</p>
<p>And the question that you addressedwith your paper, Darren, which iscan we really use I.T tools in this spaceand use them to good advantage?</p>
<p>And I love that idea because I thinkthere's so much more that can be doneand much more that can be leveragedto just deal with the,the specific problemsthat happened in the operations.</p>
<p>So, so whatwhat I heard a little bit there in is thethe Purdue modelthat everyone's been using this isolationeitherfirewalled off or completely air gapped.</p>
<p>That's a naive approach in today'smodern things because I need the data out.</p>
<p>Yeah, I hate to use my because I thinkthere's some really good reasons for it.</p>
<p>And I, I guesshaving worked in situationswhere where my life has dependedupon the systems working and not having ithaving to be tampered withand, you know, having malicious intent,</p>
<p>I, I'm pretty comfortable with that.</p>
<p>But I do think that there's a big costthat goes that goes with that.</p>
<p>And so so it's really like gettinga good handle on your risk profile.</p>
<p>Like, I'm going to cite Steve herebecause I love this so much.</p>
<p>Right?</p>
<p>It's likeif you try and figure out how to dozero trust, what you have to start with iswhat's your real risk profileand what really matters, right?</p>
<p>Because if you take that type of approach,then that helps balance offwhat's really happeningwhen you do this connectivityand you bring these assetstogether. Right.</p>
<p>And so I thinkyou still have to do an assessment,which is do those new capabilitiesbring you enough value to overlay the riskof the vulnerability of those systems,especially when you know, one,you're going to be constantlytrying to keep up with the hackers and allof the new software and everything else.</p>
<p>And that is a pretty high requestand pretty difficult to do in some cases,especially with organizations that don'talready have that type of capability.</p>
<p>And so really having a handleon that relative towhat's the real benefit to your business.</p>
<p>Right.</p>
<p>So, Steve, she she quoted you,you got to come in and cyberand and also</p>
<p>I want you to address a little bit of</p>
<p>I call it naive and thank you, Anna, forfor correct me on it, but I still thinkthere's a little bit of false securitybehinda isolated network.</p>
<p>So, Steve.</p>
<p>So, Dan, I think Anna does hit it right.</p>
<p>It's understanding the risk profile.</p>
<p>I think one thingand maybe naive is not the right term.</p>
<p>I think the cat is out of the bag.</p>
<p>Those systems,that critical infrastructure is connected.</p>
<p>They're connected to IT systems.</p>
<p>They're being managedin a distributed fashion.</p>
<p>They are getting tappedinto from the outside.</p>
<p>They're interconnected amongst themselves.</p>
<p>So the notion of a truly isolatedenvironment or a critical infrastructureenvironment is actually a notionthat isn't true anymore.</p>
<p>In many cases, what's considered to bean air gap of the oldor where you physically had spaceis now more a virtual or logical air gap.</p>
<p>And then we're seeing attacks that canjump that virtual or logical air gap.</p>
<p>And in many cases, thewhat you thought was a logical or virtualair gap is not an air gap at all.</p>
<p>And sosystems are much more connectedthan they've ever been.</p>
<p>And so I wouldn't that's I call it naive.</p>
<p>I just say, like in some casesit's already happened.</p>
<p>And so the question isn't, well,should I open up my network,your network,because your systems are already open.</p>
<p>It's now how do I start to apply the rightcontrols and falling back on?</p>
<p>Well, I'mjust going to continually isolateand that's been a majorapproach is is a good one.</p>
<p>It's a tool.</p>
<p>It's not the only tooland it's not the complete tool.</p>
<p>It's one of the tools.</p>
<p>So encrypting the network trafficor providing logical firewalls to separatenetworks that do network segmentationis absolutely a great tool in the arsenal.</p>
<p>But it alone will not preventthis kind of threats that these</p>
<p>OT and criticalinfrastructure systems are seeing.</p>
<p>And so when you look at itfrom that perspective, it'sokay, let's understandthe risks of the OT systems, understandhow they're different from the I.T systemsthat many of thesesecurity products and technologieswere originally designed forand applythose security controls in an old fashion.</p>
<p>I think that's one of the learnings bothfrom from the paper that you publishedas well as what organisé tionsthat are doing this right now are seeingis leveraging its security capabilitiesand controlsin an way.</p>
<p>So I think glad you said in an odd way,because a lot of times I've seen the ITprofessional, the CSO come inwith a hammer on the operational guysand say you need to be secure,update all your patches,right?</p>
<p>Everything needs to be updated.</p>
<p>And Ana, is that doable?</p>
<p>Well, depends onhow old your equipment is, right?</p>
<p>Well, I mean, yeah,some of this equipment is 50 years old.</p>
<p>Yeah.</p>
<p>And then there's a lot of diversity in itas well. Right.</p>
<p>And so many of those systems were designedso that maybe you update the firmwareonce every ten years and you're going outthere with a USB stick to do that.</p>
<p>Right? Because it does.</p>
<p>Does that scare you, Steve,when you hear that ten yearsyou haven't updatedyour security patches in ten years?</p>
<p>And I wish it was somethingthat was novel, but we see this oftenin OT edge environments, even in systemsthat are supposed to be itrelated, but are driving those.</p>
<p>So that's actually an interesting pointis when you golook at an industrial manufacturing lineor you go look at a smart cityor any of these sort of operationaltechnology, critical infrastructure,and you go look insidethe cabinets, you go look,it looks like an I.T system.</p>
<p>There's a rack of servers in therenow that are driving those technologies,monitoring them, doing the thethe operations that once was very analog.</p>
<p>And so that the scary partis that those i.t systemsdo need to be patched regularly.</p>
<p>They do have vulnerabilities.</p>
<p>But as I pointed out, there's a reasonwhy they don't get patchedthe same cadence that standard i.t. Yeah.</p>
<p>And why is that a why?</p>
<p>So they really weren't designed,they weren't designed with this whole ideaof you're connectedall of the time and you need tobe constantly updated. It'swhat isthe difference betweenstreaming on your music, on your iPhone,right,where you're connected all of the timeand everything's completely up to dateand having an old iPodwhere you can load it up onceand then run that suckeruntil it died, right?</p>
<p>Or until it just really needed attention.</p>
<p>So and I shouldn't have you start becausethat's not how you fix the old system,but it's just kind of the idea.</p>
<p>It isit is a just a completely different world.</p>
<p>If you are living in a spacewhere you're constantly connectedand so much of the legacy equipment,it was never designed with that in mind.</p>
<p>It was it was hardenedin a way that once you install that,you could really keep it going for a very,very long period of time.</p>
<p>And so you have this much longer lifecyclelike so.</p>
<p>That the applicationsthat are being supported by the systemsare very different from it.</p>
<p>So if your email goes downfor a couple of hours, it's no.</p>
<p>Big deal.</p>
<p>Life goes on.</p>
<p>But many of these critical infrastructurethat are driving your power, watertreatment, you know, lifesaving devices inside hospitals,they're not meant to be taken downby a patch that, you know, that didn't do.</p>
<p>It's quality assurance to the same leveland the regular cadence of being ableto do things and bring things offlineand bring them back in.</p>
<p>That's a modern i.t concept,but these systems were meant to,like I said, run for 15 years nonstopand that's not something that is easily,you know, deployed patchesor to be able to do, you know, inspectionsand security tools that get in the wayof the operational technology.</p>
<p>And that's againwhy I talked about it in an odd way.</p>
<p>So it sounds to me like there'sa total mismatch in motivationand in in results in the space right?</p>
<p>High availability.</p>
<p>We're not talkingthree nines, we're talking 12 nines.</p>
<p>Right.</p>
<p>I don't want I don't want a heart monitoror a heart machineto oh, I need to rebootor I need to reboot every three days.</p>
<p>You don't want that.</p>
<p>Or even your power gridyou really don't want down.</p>
<p>So because thebecause the motivation is so different,can I really usethe same techniques in I.T in O.T.or, or do I just go and I understandthe isolate myselfbecause I don't want any change.</p>
<p>Things are working.</p>
<p>Don't bother me. Right.</p>
<p>Isn't that how it's done In a.</p>
<p>Probably way too often.</p>
<p>Right.</p>
<p>And there's definitely a risk associatedwith trying to fix your problems.</p>
<p>Right.</p>
<p>The same way there's riskswith just continuing to do nothingand keeping your fingers crossed.</p>
<p>There's a lot of very clever peoplethat still wantto find ways to disrupt systems,even the legacy systems.</p>
<p>Right.</p>
<p>And in some ways, many of the legacysystems are more vulnerablebecause they were designed beforemodern hacking was really happening.</p>
<p>Right. So there's just somesome real concerns there.</p>
<p>But I do think that there's a real placefor having the i.t.</p>
<p>Tools, right?</p>
<p>Like, there's a lot of tools that can sayi'm going to lookat the network, I'm going to identifyeverything that's on the network.</p>
<p>I'm going to identifywhat is the current level of firmware.</p>
<p>And then if it's set up properly,you can say what is,what should be the current versionand where do you have gaps insome of the tools where you're actuallysophisticated enough, where they can say,</p>
<p>What's your real risk associatedwith not having those updates in place?</p>
<p>And when you get into that levelof sophistication and that becomesvery, very valuable, right?</p>
<p>Because now you have a clear pictureof what's going onand then you have a wayto actually prioritize that risk.</p>
<p>Granted, I don't know that you ever wantto trust another company to do that.</p>
<p>You probably want to beat least understand very clearly howthe software made the decisionsabout where your risk really lies,because there's no way a softwarecompany knows what each of your individualcomponents are really controllingand how how critical those can be.</p>
<p>So so you got to stay very involved.</p>
<p>Right?</p>
<p>But if you have that type of assessment,at least you can start out and do that.</p>
<p>And my understanding is that's prettycommon on its systems, right?</p>
<p>There are tools that can do that, andthere's lots of tools that can do that.</p>
<p>So at least you're not just havingthis big black boxand a bunch of question marks.</p>
<p>You can say,let's start doing that assessment.</p>
<p>And if those types of toolscan find things on your network,that means somebody who's coming into thatenvironment can also find things, right?</p>
<p>So you really do want to understandwhat's discoverableand what is its current status andand then determine where you take this.</p>
<p>So that brings upone of the best practicesthat we know about in its cybersecurity,which is risk assessment.</p>
<p>And Steve, can you talk a little bitabout risk assessment?</p>
<p>Because I knowif we ran a vulnerability scan,there would be tens of thousands,hundreds of thousands in any company.</p>
<p>You can't do them all.</p>
<p>So this is wherethe risk assessment comes in.</p>
<p>So can you explain how I can leverage the</p>
<p>IT risk assessment?</p>
<p>Best practice in the OT space as well?</p>
<p>Absolutely.</p>
<p>And so it really startswith what Hannah was talking about.</p>
<p>You can't secure what you don't know.</p>
<p>And so starting with the assetinventory, the discoveryto understand what your assets are,understand what's running inside the box,what you know, what firmware,what operating systems, what versionsyou need to create that asset inventoryto be able to do the next phase.</p>
<p>And before you even get to your securityconsiderations, the next piece of this,this is actually defined as partof the next cybersecurity frameworkis once you know what your environment is,understanding what's what they're doing,what is the purpose of those systems.</p>
<p>And this is important.</p>
<p>When you do your risk calculation,you need to know what are your missioncritical, what are the necessarysupport systems to keep those missioncritical systems operationalso that you can create that riskprofile and understand the prioritizationof applying the security.</p>
<p>So before you ever get to your firstencryption key or firewall, it'sknowing what you have in great detail,understanding what those systemsand processes and technologiesdo for your business,for your mission systems.</p>
<p>And then from thereyou can start to apply a risk calculus.</p>
<p>And that risk takesfrom published vulnerability.</p>
<p>So databases,there's new technology, new standardsand formats around softer builtmaterials and vulnerability.</p>
<p>And in our exchange called VEX, to be ableto give you information aboutwhat's the vulnerable stateof the components, there'sa lot of great information out therealready in the might or frameworksto let you dothe assessment of what you found.</p>
<p>So no, this version of Linuxhas got this level of vulnerabilityor this particular product over herehas these cves that I needthat haven't been patched in the version</p>
<p>I have.</p>
<p>So you get that information nowyou have what you have, what's it called,what's critical in your organizationand what the known vulnerability,the other side of the risk assessmentbesides the known form is understanding.</p>
<p>And this is where things like pentests, scanners and other kinds of toolsgive you an idea of whatyour overall threat landscape is.</p>
<p>Those come togetherinto understanding your risk profile.</p>
<p>So I understand what my current assetsare, what the known risk,what the potential risk,and then the what these thingsare usually important for helpsguide the prioritization of, okay, now</p>
<p>I need to start planning security tools.</p>
<p>And it's only at this last phasethat you start applyingprocess, technology and proceduresto do the compensating controls to reduceor mitigatethe risks that you've identified.</p>
<p>And that's your standard I.T flowthat I've been describingcan be absolutely appliedto the OT systems, understanding that thewhat you actually implement the process,the procedures have to be donein that way.</p>
<p>So it's not going to be well,</p>
<p>I'm just gonna push a buttonand patch everything or I can just put a,you know, an encryption system ontoor an enterprise producton to that, that PFC device.</p>
<p>You have to be able to applythe right kind of controls,but it's only at that last phase of theprocess of assessing the risk environment,your risk posture,and then the prioritizationthat your assets tell you about that,then you can start to make the decisionsand applying budgets and actually buildingyour capacity and capabilityto mitigate the controls.</p>
<p>And it's not a one and done this,not like we're finished.</p>
<p>We did our assessment. Okay, we can goback.</p>
<p>It's an ongoing, constant process becauseeven if you're in a nice, structuredenvironment, that never changes.</p>
<p>For 15 years,the threat landscape is always changing.</p>
<p>Your app threat, your risk appetiteis actually always changing.</p>
<p>What's happening in the macroeconomicworld changes regularly.</p>
<p>And so reassessing and reevaluating.</p>
<p>Are your controls sufficient?</p>
<p>What's next on the list</p>
<p>Prioritization list to be addressedand verifying that you're mitigatingcontrols are in fact doing what they saidthey do are all part of the ongoingprocess of securing your infrastructure.</p>
<p>Whether that's it or not.</p>
<p>I want to</p>
<p>I want to reemphasize what you said there.</p>
<p>Even if your own environment is static,the threat environment changesand your business motivatorscan be changing too.</p>
<p>So you have to constantly evaluateand nothing.</p>
<p>I like that you said to let's saythat I have a certain version of Linuxthat has a security vulnerabilityacross itand it doesn't mean</p>
<p>I'm patching everything on the outside.</p>
<p>It may be I can't patch thatbecause name the critical infrastructure,so I have to come upwith a different remediationfor that device, a.k.a locking it downcompletely as far as network and monitorthe firewall around that one devicemore rigidly.</p>
<p>That might be a different remediationthan doing the patch for example.</p>
<p>So Darren, so two things we've seensuccessful inside of environments.</p>
<p>These two terms</p>
<p>I'm going to use of that new kindof mitigating control when you can't justflip a switch and turn on encryption.</p>
<p>One is what I call watchdog approach,where you take a modern system,put it right up next to a legacy systemon the wire so that they can monitorand have the advanced inspectionand detection in.</p>
<p>Particular, watching everybody.</p>
<p>On behalf of the devicethat it's proxy in.</p>
<p>And the other approach that's often usedis what I call the canary approach,where if you've got an environmentwhere you have a segmented networkof legacy systems that are hard to patch,you can't get the rightthe tight security controls.</p>
<p>You put a detector in there on the networkthat hasthose does advanced detectionand B, it becomes the canary for that.</p>
<p>That segment.</p>
<p>So it will alert, whereas legacy systemsdon't have the capacity to alertor to tell you that something isbeing attacked or are being targeted.</p>
<p>And so that watchdog in Canarycombination is a differentkind of compensating controlthat is very popular in O.T.because it doesn't require goingand changing that policy itself.</p>
<p>It's about adding the right i.tcapabilities into that environmentto to proxy those systemsand to give them the capabilitieswithout impacting know missioncritical functions.</p>
<p>And there's also another thing I heard.</p>
<p>I was talking to our own</p>
<p>OT organizationand they were sayingwe actually can't patchsome of the devices in our infrastructurebecause we're not allowed tobecause it's the vendor, right?</p>
<p>It's their machine, right.</p>
<p>If we touch it, thenour warranty on this multimillion dollarparticle acceleratoror whatever it is, right,is is now null and void. Right.</p>
<p>We can't we can't enforcesome of our security thingson some of these embedded devices.</p>
<p>But we know that there'sa vulnerability in there.</p>
<p>Right.</p>
<p>Is that a common thing that you'reseeing as well, or is that just unique tothese really huge,you know, manufacturing or fab</p>
<p>OT systems?</p>
<p>So I think it can definitely bedefinitely be the case.</p>
<p>You know,like a lot of on the industrial side,what we really worryabout is the control systemsbecause because that's whereyou can go in and mess with things, right?</p>
<p>Otherwise you have to.</p>
<p>Be that's where you're messingwith the physical world.</p>
<p>Right. Exactly.</p>
<p>I'm sorry.</p>
<p>I just got a call. So.</p>
<p>So updating those control systems, you'renot going to be doing that in isolation.</p>
<p>You're going to be doing that in closecoordination with who the vendors areand make sure that you've got a planthat you've executed with with them.</p>
<p>The other thing I wanted to mention,because we haven't talked talked about ityet, is often in the oh two systems,your only window for really doing updatesis when you're shutting downfor planes, flat maintenance.</p>
<p>So that's another factor that comes intoit is you really do have to say,well, when I worked inrefining, we did turnaroundsbetween three andfive years, depending on the type of unit.</p>
<p>Literally all of the updatesto major systems had to fallwithin the three week period of turnaroundbecause that was the only timeit was really safeto go in and change those systems.</p>
<p>And it was also the only timewe could actually test them to say,</p>
<p>Hey, we've just made this change.</p>
<p>Is it really ready to come back online?</p>
<p>And so those intervals around the plannedmaintenance can alsobe extremely importantas well as the point that you brought up,which is then talk to your vendor, right,when they're part of thosecritical systems.</p>
<p>Because because they willthey will have strong opinions, Right?</p>
<p>I'm sure they will about. How to do thatproperly.</p>
<p>Now, in a refinery where you work,how how often are these turnarounds?</p>
<p>How often do you get to do that?</p>
<p>Once a year, six months, three years,four years?</p>
<p>Well, typically, thekind ofaverage cadence was about four years.</p>
<p>If you're really stretched onprofitability,you try and push it to fivejust because those areextraordinarily expensive.</p>
<p>But yeah, so about a four,four year time frame, right?</p>
<p>So if you can imagine,you've got a control systemthat's running everythingand you only get to touch it onceevery four years, right?</p>
<p>That's that's. Crazy. You touch it.</p>
<p>Now you've got a window that'smaybe if you're lucky, it's three weeks.</p>
<p>And if it's somebody you can do themaintenance maintenance on really quickly.</p>
<p>It's like one week, right?</p>
<p>So fit and everything.</p>
<p>You've got to change in a one week periodand you got to plan for that because youknow, your next opportunity for an updateis also going to be four years.</p>
<p>And it's a similar cadencein a lot of military systemsas well with the tech refreshas being once every three or more years.</p>
<p>One of the techniquesthat we're seeing being adopted bya lot of the more advanced organizationsand we're seeing vendorsactually supply this to their customersof some of theseenvironmentsis what's called a digital twin.</p>
<p>And the idea is that you havea digital virtual version of that physicalasset of that policy or that controllerthat you can apply changes,you can do patches too,and run simulations and basically run itthrough its paces to see what impactit may have on the digital twin version.</p>
<p>Now it's not you're still goingto want to do physical or testing,but allows you to do a whole lotof pre-loaded testsbefore you ever get to touching thatthat systemwhere you got that one week windowto do all of your testingand all of your patching.</p>
<p>And so we're seeing digital twins come up.</p>
<p>I've seen themin the construction industry.</p>
<p>I've seen, you know, in factswhere there's digital versions of thosethat are supplied along with the productfor the contractor to basically run theirtheir simulations both from a patching,but also test on load,be able to look at the environmentalconditions and changes thereand be able to do those testsin a virtual simulated environment.</p>
<p>That's one technique that can actuallybe applied to security patches as well.</p>
<p>You know, we're also seeing</p>
<p>I've been approached by a couple of stategovernmentsto set up a site in cyber rangewhere in theirprimary focushas been on the electrical grid system,which I found totally fascinating.</p>
<p>Right.</p>
<p>They want us to help themestablish a noticeable rangeso they can test outsome of these new architecturesthat we're talking about,like the watchdog, the canary,the the data diode and some new onesthat we're talking about aroundone is called thethe patch here or the patchairlock pattern,which is an interesting pattern as well.</p>
<p>Do you even with these things,we still have this long cycle timebetween being able to to updateand A, do you ever see uswhere we could do continuousupdateson these critical infrastructure systemsor is therejust too much risk involved in updating,you know, controllersas there as they're operating?</p>
<p>Yeah, And I think, yes, with time anda lot of it's redundancy of capabilities.</p>
<p>Okay. Right.</p>
<p>There's athe there's been work going on forit might even be seven years nowthat is the Open process automation forumand they have been leadinga consortium effort through the Open groupto really do a modernizationof control systemsfor not just refiningbut chemicals and pharmaceuticalsand kind of all the groups that usethose sophisticated control systems.</p>
<p>And there's specifically addressing this.</p>
<p>Right?</p>
<p>They've got a whole cybersecuritysubcommitteethat much of it is really coming downto what's the design,</p>
<p>How do you have the redundancy set upso that if you lose onecapability, do you have jail overwithin the timeframe?</p>
<p>That's important.</p>
<p>So that does it kick out your equipmentbecause a lot of equipment,if it loses a signal like ato a power failure or even a power blink,that'll just take it down.</p>
<p>So there'sthere's some real hard and fast rulesthere.</p>
<p>I think all of that is fantastic.</p>
<p>But I'll I'll kind of add on top of that,the next thing that has to happenis people have to trust those systems.</p>
<p>And so once they've got a good designand they start doing those testbeds,there's going to be a lot of rigoroustesting that goes on for yearsand then deployments will be in very lowrisk systems whereif you do have something, go on, go downthat it's know.</p>
<p>No one's going to get hurt.</p>
<p>No one's going to get hurt. Right.</p>
<p>So, yeah,probably start out with wastewaterbecause wastewater is prettyyou know, it's you don't it's smelly.</p>
<p>That's about. It.</p>
<p>Well, you can kill your bugs,but then it's easy to recover from,or at least it's recoverable in waysthat other other technologies aren't.</p>
<p>So, yes, I think we will get there.</p>
<p>But it's it is a slow process.</p>
<p>You know, we.</p>
<p>Can't put too much reliance onpatching is the only compensating control.</p>
<p>I know that the security createda lot of toxic patch.</p>
<p>Your systemand security hygiene is important.</p>
<p>Absolutely.</p>
<p>But as we're as end is indicating,you don't you can't rely on thatas your only major compensating controland that's whywhen we look at an OT system security,it's got to be an overall evaluationfrom the security aspect,not just can I patch the operating system,the firmware.</p>
<p>Well, I think that's the number one toolthat it uses, right, for security?</p>
<p>It is. It's one of many categories.</p>
<p>And that's really the goalhere, is finding out the right securitycontrol, the right security toolto mitigate the risk.</p>
<p>It's not always going to be in the caseof what we're talking about,it often can't be it can't go for years.</p>
<p>And that's four years of riskthat you should not be,you know,are accepting within your organization.</p>
<p>So that's where, you know, segmentationencryption, strongauthentication inspection detectsand prevention, all these kind of thingscome into play, providing thesurrounding controls to compensatefor the one that you can't use, which.</p>
<p>Is that you can't touch them. No, no, no.</p>
<p>I like to add another thingin the OT space.</p>
<p>I know it's very different in i.t.</p>
<p>If we have an assetthat has been compromised,we typically we isolate it.</p>
<p>After we've done some forensics on it,we isolate it right?</p>
<p>Then we restart it,we clean it and restart it.</p>
<p>That's a typical pattern.</p>
<p>I can't do that in the old space.</p>
<p>Right. I can not.</p>
<p>Easily not knowwithout a great deal of expense.</p>
<p>And we're taking other thingsdown with it. Right.</p>
<p>So unless you're super lucky.</p>
<p>Yeah.</p>
<p>So what approachcan I use in the Iot space if I know that</p>
<p>I have a device that's been compromised,what do I do?</p>
<p>I if I can't take it downbecause maybe I ama policy controller in a refineryand we know once you set a refinery down,it takes a long time to bring it back up.</p>
<p>Right.</p>
<p>So what do I do andwhat techniques do I have at my disposal?</p>
<p>Yeah,and I'm trying to think through that.</p>
<p>And and I have to say,that is a really good questionand what I've never asked myself.</p>
<p>And so I'm hoping Steve hasn't.</p>
<p>I'm up all night worrying about stuff.</p>
<p>Like this, about this,because that's a that's a super tough onebecause besides higher monitoring youand then trying to add something elseinto the chain that allows you to seeto see if that is really being exploitedor it's what the real status is.</p>
<p>I have no good answers for you.</p>
<p>So let's make a distinctionbetween somethingthat you find to be absolutely vulnerableto an exploitand something that has beenhas been exploited.</p>
<p>Okay, that's fair enough.</p>
<p>So you've got a known vulnerabilitythat's active exploitation in the field.</p>
<p>There are controlsyou can put in place to isolatesignals and inspect the traffic toand from a deviceto monitor it for aberrant behavior.</p>
<p>There are things you can do todayand you can do that.</p>
<p>The IT world.</p>
<p>You can do that. The world.</p>
<p>Oftentimes you have to do thatwhen you have a known vulnerabilitythat doesn't have a patch.</p>
<p>But it's active exploitation.</p>
<p>In the case of a zero day,you don't have a patch, but you can turnon, you know, turn the dial to 11on the infrastructure of security.</p>
<p>Like long log log.</p>
<p>In the event that you have a OT systemthat has been compromised.</p>
<p>So you're detected the aberrant behavior.</p>
<p>You've detected the signatureof a OT style attackor you've noticedthe firmware has been swapped out.</p>
<p>That's where, you know, again,in the good parts of systems that they'rehighly redundant and often place.</p>
<p>So that's where you're going to kick inyour your process and proceduresthat you have forif it was a non cyber event, if it was a.</p>
<p>Physical,if it is a physical event. Gotcha.</p>
<p>So it's the same way iswhen if a power station goes downbecause of a weather storm,you have redundancybuilt the system to help handle the load.</p>
<p>If you're under active, explain your bet.</p>
<p>You have been attacked.</p>
<p>You've identified a a power generator ora transformer that has been compromised.</p>
<p>Kick in the processyou already have for dealing with theevery other kinds of outageand take that thing offlinebefore it can infect the neck.</p>
<p>And we've seenwhere cascading events can happen,where you get one OT system, in fact,because you don't haveoften the inspection tools,the lateral movementcan be a lot faster to the systemsthat it's connected to because again,there isn't the same level of controlsonce it's into that, you know, it'sthe old adage of the the egg,you know, you've got a harder shell,but once you get in, it's nice and soft.</p>
<p>OTI systems are often the same wayonce you get past the door on one of thosekey mission critical airsystems is compromised.</p>
<p>You may have to take a lot of itoffline, butagain, it's that'swhere you kick in the existing processes.</p>
<p>And one advice that we give to CISOsand organizations is game the systembefore you ever get a vulnerabilityor an exploit you have to deal with,run the war gaming on your environment.</p>
<p>Actually, you know, identify a policyand have it be quote unquotetaken out and run the courseand see what would be the problem.</p>
<p>Make sure you've covered all your basesand you know whatthe procedures and peopleall the way at the tactical edgeand at the executive levelall know their role in the eventso will makewhen it does that much smoother.</p>
<p>So what you're telling me is runmy own business continuity scenarios.</p>
<p>That's which makes.</p>
<p>Yeah. And I have to have them.</p>
<p>There's a really good contextfor doing that.</p>
<p>Every manufacturing facility,at least in the U.S., is requiredto do what they call has ups,and it's exactly what Steve described.</p>
<p>They don't tend to focus on cyber threats,although I'msure that's that is definitely evolvingand that is happening now.</p>
<p>It tends to be more, hey, this pump failsor we had a power failure or a.</p>
<p>Hurricane or tornado hit somewhere.</p>
<p>But it's very easyto take that methodology and say,now let's apply that to our system.</p>
<p>It's been hacked and it's been hackedin these particular ways.</p>
<p>Now, what does that really mean?</p>
<p>And what is going to be our response andhow can we design in mitigations, Right?</p>
<p>And how can we change our system?</p>
<p>So so if it does happen,there's much less vulnerability, right?</p>
<p>Or it's back to can wecan we live with that?</p>
<p>Because some things you can livewith. Right, right, right, right.</p>
<p>Guys, thishas been this has been very insightful.</p>
<p>As always. I love talking to you guys.</p>
<p>Any last words for our our listenerstodayon that are dealing with this opportunityso things what would your advicebe to them that are that are dealing withyou know this convergencethat we're already starting to see.</p>
<p>We'll go with you first, Steve.</p>
<p>Okay.</p>
<p>So I think,you know, just restating what we saidearlier is that it is already happening.</p>
<p>It's not a wait and seewhen when this happens.</p>
<p>Your AT&T systems are blurring.</p>
<p>And so it's take to takethe measured approachof understanding your assets, providing,you know, doing the risk assessmentso that you can apply proper controlsand securityto the systemsyou have and start planning for it.</p>
<p>And then the key is get out of analysisphase, get into implementation.</p>
<p>So get, you know,knowing that this is going to be ongoing.</p>
<p>If you spend all your timeanalyzing your environmentand not only your time actuallyimplementing controls,you're never going to get anywhere.</p>
<p>It's a feedback loop.</p>
<p>So you you analyze and you go deployfeedback into the analysis and continue.</p>
<p>So it's going to constant processesand continuous security assessment.</p>
<p>Is not a one and done.</p>
<p>It's not a one and done and the you know,the key thing is to start deployingthe security now and getting thatvisibility into your environment.</p>
<p>Is that the first step in being ableto understand what's going onand what your risk posture isand what your risk and be able tothen managethat risk across your own enterprise.</p>
<p>Sounds good to Ana.</p>
<p>Yeah, and I would say on the O2 side,you as an operational companiesstart bringing in your I.T folksand treating them like they're partof your operations and make surethat they understand the implications,make sure they are equally involvedin all of these discussionsbecause the there is no longer,as you know, a reasonablethat treats them in ain isolation and just has themworried about your pieces.</p>
<p>They they need to be integrally involvedin what's happeningand they need to help bridge the gapbetween what we understandof the operational systemsand all the electronicsand all of the computethat's necessary to back that up.</p>
<p>Thanks, Santa.</p>
<p>I think that's that's absolutely critical,</p>
<p>I'd say on the CSO side as well.</p>
<p>Bring the OT guys to sit at the tableat the top of the table with youbecause I've seen this beforewhere C so mandates down to the OT guys,you will do this.</p>
<p>And they're like, No, we're not all right,</p>
<p>But if you're sitting at the tablewith them at the front of the table,then they have a say.</p>
<p>Then you can talk about the differencesand really take a look at the paper.</p>
<p>It is on on the website, we talk aboutthe differences between opportunityand how we're going to get over this,this division. So.</p>
<p>All right.</p>
<p>Thanks again,guys, for coming on the show.</p>
<p>Thank you, Darren</p>
<p>Thank you, Darren Pleasure as always.</p>
<p>Thank you.</p>
<p>Anna for your insights.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org</p>
<p>Until next time, go outand do something wonderful.</p>

</details>
