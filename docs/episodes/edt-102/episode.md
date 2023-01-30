---
layout: posts
title: "Identity-based Micro-segmentation with Elisity"
number: 102
permalink: episode-EDT102
has_children: false
parent: Episodes
nav_order: 102
tags:
    - Micro-segmentation
    - OT Security
    - Identity-based Networking
    - Cybersecurity
    - SDN
    - Software Defined Networking

date: 2022-08-25
guests:
    - Darren W Pulsipher
    - Dana Yanch
    - Dan Demers

img: thumbnail.png
summary: "In part 2 of Security with Elisity, Darren discusses identity-based micro-segmentation solutions with Dana Yanch, Director of Technical Marketing, and Dan Demers, Technical Architect."
---

{% include soundcloud.html id="edt102" title="#102 Identity-based Micro-segmentation with Elisity" %}

{% include youtube.html id="L2g_PjWTlWI" %}

---

In part 2 of Security with Elisity, Darren discusses identity-based micro-segmentation solutions with Dana Yanch, Director of Technical Marketing, and Dan Demers, Technical Architect.

Elisity’s approach to network security differs from traditional architectures by how it’s delivered, distributed across the network, and done efficiently, providing rapid time value.  They have focused on making it as simple, intuitive, and effective as possible so any industry segment can leverage the technology.

The key to Elisity’s technology is micro-segmentation, meaning the capability to completely isolate any user, device, or application no matter what type of network it’s on, where it’s placed in the network, or whether it’s managed or unmanaged. In other words, it is flexible to isolate one asset from another without restrictions imposed by network architecture or constructs such as VLANs or VRFs.

Traditional micro-segmentation systems that require hardware replacement or on-prem appliance instantiation can take months or years to get up and run. Still, Elisity provides full functionality within a week by shifting to a cloud-native and cloud-delivered micro- segmentation platform. The entire control management and policy planes are fully cloud-delivered, and the component that ties to your on-prem network is 100 percent software. You don’t have to change anything on-prem, as it rides on top of your existing infrastructure. It scales well, is easy to manage, and is distributed dynamically.

Elisity also delivers an on-prem solution for the OT space where organizations can keep it behind their DMZ and cut off all access.

Elisity’s platform is a micro service in the sense of horizontal scalability. You can start small and add 10,000 things to the network and scale with you, whether on-prem or in the cloud. It is completely automated across the entire network. There is little friction, and it is easy to manage long-term.

One significant difference between Elisity’s platform and other overlay networks is that Elisity’s deals with the control and policy plane rather than the data plane. It can apply the same level of network security granularity without touching any packets. It dynamically tells the network who can talk to whom based on the attributes and identities found on the network.

A triangle of users, applications, and devices is an excellent way to visualize this. Within that triangle are all the lines of things talking to each other. Elisity can secure every single line, or channel, between users, applications, and devices with granularity. This happens at the network control layer. At the moment traffic hits the first edge, it’s being secured.

Security is essential at the network layer and not the application layer because there can be tens of thousands of devices in your network that you can’t put an agent on or modify since they have things like embedded operating systems, cameras, badge readers, and people. This is especially important on the OT side.

With OT, the focus is on availability and integrity. Things need to continue to function in a safe process because the process could represent critical infrastructure. This is different from IT, where you can quarantine and spin up a new instance if there's an intrusion. OT is a different mindset. Where something might exist in IT for six months or a year, something in OT might exist for 20 years. Often, these infrastructures are maintained or patched every few years or are hands-off until a failure event. Safety equates to restricting connectivity. For example, if you are in a VLAN, that doesn’t mean it /you? Should be talking to an RTU, a sensor, an HMI, or a DCS that are one switch over.  In legacy design, if those things are on the same VLAN, there is no efficient, flexible way to stop them from connecting.

With Elisity’s system, you set policies based on things you group things or attributes assigned to assets, rather than going through item by item. This can be as simple as grouping all your processes so they can only communicate north/south, not east/west, or, for example, allowing line managers to share with six or seven types of things. Two or three policies can quickly reduce your attack surface from 65,000 potential attack ports down to two or three.

A use case that is common in OT networks is when a vendor does an update on a device, you need to let them in, and they have access to your whole network. With Elisity, you can easily give them access for a limited time and allow them to touch fixed assets.

Suppose you would like to know more about Elisity’s technology. In that case, many resources, including videos, white papers, and documents, explain how the solution works and how it could be applied within a week in your network at Elisity.com. 

Check out the previous episode in this series [here](episode-EDT101).


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, thisis Darren Pulsipher chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople, process and technology.</p>
<p>On today's episode identitybased micro segmentation.</p>
<p>Part two of my interview with Elisity.</p>
<p>What's the new approach here?</p>
<p>Because and Dan,you and I have talked actually quite a bitabout the impacts of networksecurity on OT networks.</p>
<p>But before we go down that rabbit hole,let's let's help people understandwhat other options do I have?</p>
<p>And this is where I was impressedwith your guys's approach, which,which you guys called identitynetwork security.</p>
<p>Right.</p>
<p>Or identity based micro segmentation,least privileged access architectures?</p>
<p>I did.</p>
<p>It has a big what you guys got.</p>
<p>I like what's.</p>
<p>What's the acronym for that. Yeah.</p>
<p>I thought of in there.</p>
<p>We should get one thing.</p>
<p>Yeah.</p>
<p>Hey, you got to have a good acronymfor that one.</p>
<p>Identity based.</p>
<p>IBM s identity. Based.</p>
<p>IBM's and. IBM. Hastheir own security.</p>
<p>It's something like LP and Privilege</p>
<p>Access.</p>
<p>Well, it was coolwhen you guys explained it to me. Solet's start at the basicsbecause this is pretty deep stuff, right?</p>
<p>So what's yourwhat's your biggest differentiator?</p>
<p>What's your different approachto network security?</p>
<p>Yeah, I mean, it's it's all about well,it's a couple of things, right?</p>
<p>There's there's how it's delivered,how it's distributed aroundacross the networkand how this can be doneefficiently, effectively and providerapid time to value.</p>
<p>That's what we've been focused on, makingthis as simple but effective as possible.</p>
<p>And intuitive so that really anybodyin any segment of theof the environmentor a segment of the industrycan leverage this technology,whether you're in the OT space orin the IOT space, medical space,</p>
<p>EMT devices, it doesn't matter too.</p>
<p>To us.</p>
<p>These are all just important assetsto the organization we need to secure.</p>
<p>But I think we've been talking a lotabout micro segmentation.</p>
<p>We keep using this terms.</p>
<p>Maybe we should talk about what reallywhat that means to Elisityand then that will help framehow we approach the problem.</p>
<p>So so what is micro segmentationfrom your guys's perspective?</p>
<p>Because I think I know what it means,but you guys blew that awaywith, you know, VLANs andand firewalls is too complex to set up.</p>
<p>So what do you guys meanby micro segmentation?</p>
<p>Yeah, that's a great question,because micro segmentationcan mean a lot of different thingsto different people.</p>
<p>The same way that word, zero trustcan mean a lot of thingsto a lot of different people.</p>
<p>But I mean, micro segmentation,for example,in the data centermight mean the ability to separatelayers of applicationsor workloads from each other and somethingcompletely different in the spaceand something different the Iot space.</p>
<p>But micro segmentation to elicitedis the capabilityto completely isolateany type of user device or application.</p>
<p>No matter what type of network it'son, where it's placed in the network,whether it's managed or unmanaged.</p>
<p>To us, it's the complete flexibilityto isolate one assetfrom another without restrictionsimposed by network architectureor network constructs like VLANs or Vor FS, which are super rigidthings that are that we get stuck on.</p>
<p>So then the questionthat you're probably asking thatwhat next is how does eliciting set it up?</p>
<p>How do we handle it right?</p>
<p>And that's a big part of the challengethat we've been solving forhistorically micro segmentation.</p>
<p>No matter what platform you were tryingto deploy it on or configure iton, require a lot of networking knowledge,tons of planning most of the time.</p>
<p>Yeah.</p>
<p>Hardware replacementor on prem appliance instantiationand this is stallingthe time to value for customersare they need a solution nownot six months from now when you get it upand running it usuallyit takes months, two yearsto get any value out of the traditionalor a lot of the solutionsthat are out therethat are being advertisedto provide this functionality.</p>
<p>And that doesn't flyunless he's found great successby shifting to a cloud nativeand cloud delivered microsite mentationplatform.</p>
<p>You've probably heard this before.</p>
<p>ISDN solutions like Meraki.</p>
<p>Yeah, yeah, yeah. Like Meraki or Tela.</p>
<p>I'm originally from Telco downand worked with the Taliban Cisco,when for a long timewe understand how powerful this clouddelivered software defined networkingsolution is for anything for security.</p>
<p>In this case, it just scales really well.</p>
<p>It's easy to managedistributed dynamically.</p>
<p>And so our our entire controlmanagementand policy plane is fully cloud delivered.</p>
<p>And the eliciting componentthat ties to your onprem network is 100% software,and it's a lightweight software.</p>
<p>So we've made this incredibly easyto deploy and configure.</p>
<p>There's nothingyou have to really change on prem.</p>
<p>It rides ontop of your existing infrastructure.</p>
<p>There's no hardware to change to replace,and it makes it easier toget up and running.</p>
<p>And you can write your policyand apply it within a week.</p>
<p>So that sounds a lot to me because I workin the container ecosystem quite a bit,so and I already know the answer,but I know my, my,my listeners are going to think,</p>
<p>Oh, you guys created something like Calicoan overlay network,but it's not that.</p>
<p>Go ahead.</p>
<p>Yeah, go ahead.</p>
<p>Then I was</p>
<p>I was kind of in the sense of we,we delivered in a sense, it'scalled a microservice and to tap on to it.</p>
<p>And so we're going to talk a little o.ttoday is everything Dana just describedis also on premis that we started in the cloud,but knowing that, you know, a lot oflistener is going to be in the area,everything we actually had a few customersthat said, hey,we love what you're doing,but we need that behind L 3.5.</p>
<p>We need that behind the DMZ.</p>
<p>We need to be able to cut off all accessand we've delivered that too as well.</p>
<p>And so everything</p>
<p>Dana mentioned is completely accurate,in addition to the fact on prem or cloud,we can both have both offerings.</p>
<p>You good point.</p>
<p>But from a from a function perspective.</p>
<p>Yeah containerization is thereyou could the easiestrepresentation is a microservicein the sense of horizontally scalable.</p>
<p>So you start small you add 10,000things to the in the networkand we just scale with you andwhether that be on prem or in the cloud.</p>
<p>Yeah, but, but the differencebetween what you guys doand what I've seen with overlay networks,overlay networks are still dealing with.</p>
<p>Right. Yeah. Your how.</p>
<p>You guys don't you guys only deal with.</p>
<p>Control.</p>
<p>I like to say the policy plane as well.</p>
<p>I love that you brought this upbecause it's a massive differentiator.</p>
<p>It's something we're really proudabout thatwe're able to apply the same levelof granularity when it comes to networksecurity without touching a singleone of your packets.</p>
<p>And we were injected in the networkin that we can seethe metadata of identityof all the flows in the network,and then that informationis sent up to our cloud engine,which can then figure outwhat policy you'd be appliedand push it push that policydown to the edge of your networkwithout actually touching your packet.</p>
<p>We use your existing infrastructure,whether that's catalyst 9000 seriesswitches or Catalyst 3850 Series,which is another host of vendorsthat we're bringing to the marketnow that we're going to support.</p>
<p>We're using that native functionalityon thatswitchso we don't have to inject our software inin benign.</p>
<p>So to me, because you're at the controlplane and you're not dealing,so you're basically telling dynamicallythe networkwhat to do based off of the identitiesthat you find on the network.</p>
<p>When people have registered on this deviceor on this application,running on this device, and I can specifywho else I can talkto, all based off of attributes of that.</p>
<p>That's absolutely correct.</p>
<p>And before we talk about the identitypiece of this, I had one more thing</p>
<p>I wanted to talk about when it comesto simplifying and obfuscating complexityfor the end user, because our number onegoal is rapid time to value.</p>
<p>So it's not just about the deploymentof a solution.</p>
<p>Yeah, we've made it so simplethat you can deploy thisand get it runningwithin a week to two weeks.</p>
<p>But it's the ongoing managementand operations of this platformthat you also need to be concerned about.</p>
<p>So by abstractingand obfuscating the complexity day.</p>
<p>To day, to.</p>
<p>By obfuscating abstraction,the complexity and keeping it intuitivefrom the perspective of the end userand making this distribution of policycompletely automatedacross the entire network,there's little friction here long term.</p>
<p>It's supersimple to manage long term as well.</p>
<p>Yeah, that to tack on to that.</p>
<p>If I'm if I'm a plan operator, if I'm aif I'm an X operator, I'm doing somethingand I'm maybe</p>
<p>I have a little bit of network backgroundas I need it to be useful,but I'm not a I'm not an IEEE.</p>
<p>I might not have been ina, you know, from that perspective, we,we've built the solutionso that you can look at our policyengine and say,hey, this needs to talk to that.</p>
<p>And you can interpret andcompletely understand what's happening.</p>
<p>You don't need to know what VLANs are.</p>
<p>I could flip your original questionand say, what aren't we?</p>
<p>Yeah, not a switch managementtool in the senseof we're not trying to deploy VLANsor we're not trying to deploy Verve's andand port configuration because nothingwe do has anything to do with any of that.</p>
<p>We don't carewhat port you're coming in or leaving,we don't care what VLAN you're on or whatversion or what the routing looks like.</p>
<p>It's completely abstracted away from usand the abstracted words a dangerous worda lot of the time.</p>
<p>But with our solution it'scompletely indifferent.</p>
<p>You could have one good example.</p>
<p>You could put everybody in a slashand we're going to work perfectly fineenough to put everybody into their ownindividual VLAN and everybody gets a verveand you have a really big BGP config.</p>
<p>Thereand that would work perfectly fine as wellbecause of how we we work with the controlplane topology independent.</p>
<p>Yeah. So energy independent.</p>
<p>Topology.</p>
<p>Yeah. That's pretty impressive key.</p>
<p>Because now it makes usa universal solution for any industry,any customer without any friction.</p>
<p>They don't have to go in and redesigntheir network, add new VLANs, IP,none of that.</p>
<p>We'll just layer right on top.</p>
<p>Okay, so let's talk some practicality.</p>
<p>So my so my listeners can understandbecause we're going to getreally geeky here.</p>
<p>We already started getting geekyslash AIDS like,come on, damn, I know you're a CNE.</p>
<p>I could tell you're a network engineer,a certified network.</p>
<p>You know, I know what that means.</p>
<p>Only because I had beat over my headby one of our internal network engineers.</p>
<p>But practically speaking,what you guys are saying is, I can say</p>
<p>I've got a certain device by identityand I can pin it to only talk to or.</p>
<p>Users or applications.</p>
<p>And you can do that device.</p>
<p>It's usually for applicationsor applications.</p>
<p>I look at this as like,yeah,</p>
<p>I users to it's just like trifecta, right?</p>
<p>So users devices, applicationsand then within that triangleyou have all these lines of thingstalking to each other there.</p>
<p>We could secure every single channelbetween userdevice and application with granularitywithin that triangle.</p>
<p>That's the visualization.</p>
<p>All right.</p>
<p>So effectively what you could do andyou're doing this at the network control.</p>
<p>Layer at the edge. Right.</p>
<p>So that traffic won't evenit won't even the edge.</p>
<p>Exactly.</p>
<p>Those networks at the moment,the traffic hits that first edge, switchthat ingress point.</p>
<p>It's being secure.</p>
<p>It doesn't have to go anywhere else.</p>
<p>It's the most efficient wayto apply security right at the edge.</p>
<p>Yeah.</p>
<p>You know, it it really sounds to mea lot like the originalcontrols they put in Unixwhen Unix was running on just one machine.</p>
<p>Right where I've got identity,</p>
<p>I'm only allowed accessto certain programs, certain dataand certain directories, right?</p>
<p>And a lot of times maybe even certainamount of processing power.</p>
<p>I had quotas and and all.</p>
<p>But you guys have done thisat the network,which says that when I come inmy identity, I come in as Darren.</p>
<p>You guys can really pin me to</p>
<p>Darren gets to run three applicationson these three machines and that's it.</p>
<p>Yeah.</p>
<p>Darren you know whywe have to do it at the network layerand not at the applicationlayer is because not all of these.</p>
<p>Okay.</p>
<p>First of all, we have usersthat might be on Macs and laptopsand things like thatthat you can put a user agent.</p>
<p>But what about all the tens of thousandsor hundreds of thousands of devicesin your network that you can't putan agent on, that you can't modify?</p>
<p>They have embedded operating systems,cameras, badge readers, people.</p>
<p>Oh, especially on the outside.</p>
<p>You can't happen at the device itself.</p>
<p>It's got to be.</p>
<p>Yeah, rightwhere it comes into the network.</p>
<p>I love your guys's approachbecause what you didwas you destroyed, what,four layers of the network, right?</p>
<p>Interesting. Yeah. Yeah.</p>
<p>I mean, you did. You did.</p>
<p>Yeah.</p>
<p>You you said I what you're saying isthey're still important,but I'm going to secure it.</p>
<p>Not at the top of the stack. Yeah.</p>
<p>The bigger down lowand. Yeah.</p>
<p>And you guys, you're doing it at leveltwo right.</p>
<p>There's still a use andthere's still a requirement for firewallsat the layerthree boundaryor at the edge of the network.</p>
<p>That's that's always going to be there.</p>
<p>But yeah, of course, a more efficient wayto do it at the edge of the networkfor that lateral East-West within VLANs,across pipelines or cross border ups.</p>
<p>And we can also do thethe North-South piece of it.</p>
<p>But yeah, it's we have really madesome these legacy mechanismsto be really deprecatedat this point.</p>
<p>And let's dig into OTTI.</p>
<p>All right.</p>
<p>Because I want to because this is thisis a big, huge thing I'm dealing with.</p>
<p>Right now with a lot of my customers.</p>
<p>I am very worried about securitybecause of security has an impacton functional safetyand and safety is the real world.</p>
<p>So I know, Dan, this is a sweet spotfor you, too, so help me understandhow I can leverage your guys's approachand your guys's solution stack in in O.T.</p>
<p>Network, becausethere's a lot of caution.</p>
<p>Ah, caution around O.T.</p>
<p>So how does this help me even more in the.</p>
<p>Yeah, so the 10/2, the classic thingyou hear kind of almost every timepeople talk about it versus O.T.is the, the fundamental differenceof what we're trying to accomplish.</p>
<p>If I'm thinking it, I'm thinking security,</p>
<p>I'm thinking integrity, confidentiality.</p>
<p>I'm thinking I want to protect what I haveavailabilities there, too.</p>
<p>And we've kind of solvedthat in different ways.</p>
<p>But the focused.</p>
<p>Yeah, yeah.</p>
<p>We just spin up a new instance if if we'reintruded on, we can spin up a new.</p>
<p>Very easy to rinse and replace.</p>
<p>It's very easy to just blow things away.</p>
<p>Like it's not a big deal without thethe equations flipped wherethe the cornerstone of your safety.</p>
<p>Now we need availability,we need integrity.</p>
<p>We need ourour things to continue to function.</p>
<p>But it's c it's safetynot just for people,but safety for the processbecause the process could representcritical infrastructure.</p>
<p>And so it'sa completely different mindset.</p>
<p>So and a good comparison is something init might exist for six months or a year,something in OT might exist for 20 yearsin the sense of a process that you have.</p>
<p>But I have run into that where I have a</p>
<p>I have a 50 yearold controller controlling.</p>
<p>I don't I don't doubt it. And.</p>
<p>And they're not going to replace it.</p>
<p>And they're probably doingkind of a fail till maintenancethinking in the sense of that,then that's a very commonthing in the sense of,hey, I'm just going toand that's a very valid designwhere you've got people like,</p>
<p>Hey, every ten years</p>
<p>I'll maintain it or something like that,or I'll patch it every couple of years,and then you've got other ones that goeven to the extreme.</p>
<p>I will not touch that environmentuntil something bad happens.</p>
<p>So it's just it's it's completely off,you know, hands offuntil some type of failure event.</p>
<p>And that's on purposeoften enough as opposed to not.</p>
<p>And so the intentionthere is just totally differentand now comes they're looking forand so on the outsidethe idea would be essentiallyto make sure that that safety,which equates to restrictingconnectivity, restrictingwhat who can touch what through userswe talked to a second agoand something as simpleas to bring back the VLAN example.</p>
<p>Just because you're in the VLANdoesn't mean an hour to you andyou know,another hour to you or a sensor orsome HMD or a DCSthat might be one switch over.</p>
<p>Doesn't meanthey have to talk to each other.</p>
<p>They should.</p>
<p>There may be no valid business casefor them to be talking.</p>
<p>And the crux of the legacy design is that,well, I put them on the same VLAN.</p>
<p>There's no way for me to stop thatunless I go really far into the toolboxand start doing vehicles or some goofystuff like that, which is just.</p>
<p>Exotic. Then it. Becomes.</p>
<p>Greater demand to manage who the heckunderstands how it's configured.</p>
<p>Right?</p>
<p>So, so with this,we talked a little bit about alsomy, my concern is identity.</p>
<p>You showed me that</p>
<p>I can actually group things together orput attributes on assetsand set up policies based off ofthose attributes as well or those groups.</p>
<p>So what that means, instead of saying,</p>
<p>I have to go through every single deviceand say these devices can talk to thiscontroller, this segregation switch,whatever the case may be,or aggregation data point,</p>
<p>I can say, hey,all these devices are sensors.</p>
<p>They can all talk to this aggregation datathat aggregating all data sensor,but no one else can talk to it.</p>
<p>So instead of having to goitem by item and say, I, this can talkto only this, I can group things togetherand how possibly.</p>
<p>We think people are going to do thatmore often than not, in the sensethe idea of us walking into a refineryor manufacturingor into some type of transit authorityor something like that, and say, hey,let's go down to the boneand let's make everything very exact.</p>
<p>That's just that's not real world.</p>
<p>And so we've designed our solutionto be incredibly crawler, right?</p>
<p>Meaning that, hey,</p>
<p>I just want to group all my processesand they can only communicate north south,no more east East-West,something as simple as thator hey, my line managers, they can it,they can communicate to the,the six or seven types of thingsthat they should huge broad brush hereand then my actual operators who actuallyyou know SSA or terminal into devicesand actually modify places livewell they can hit the placesthey can at the to usebut nobody else gets something as simpleas that where you might have twoor three policies for an entire planbut you just took your attack surfacefrom 65,000 potential attack,you know, your ports, for example,down to two or three.</p>
<p>Yeah. And so huge, huge, huge.</p>
<p>Vastly quickly.</p>
<p>Yeah.</p>
<p>So so thisthis really turns the network on its earbecause right now what people dois they air filter density networks as.</p>
<p>They go down. Yep.</p>
<p>Yep, as they go down and then they saythat's how on protecting it.</p>
<p>So they don't even use</p>
<p>VLANs. Yes, they use landsand they say,you know,no traffic can leave this little thing.</p>
<p>But with this stuff you can control thethe East-West traffic and the North-Southindependent of each otherand be very explicitand not worry about the topologyof the network itself,which I think is is valuablebecause how many times</p>
<p>I've even seen this onon naval shipswhere a, a captain needs some informationfrom one networkto the other that are air gappedand guess what happens?</p>
<p>They put a jumper cablebetween the two switches.</p>
<p>They're going to secure and get the go.</p>
<p>That's a user trust security officer.</p>
<p>Right.</p>
<p>And then and then the one sailor sailorthat did that,you know, get sick or,you know, something happens where he'sand no one knows that it's happened andnow you're running on secure with this.</p>
<p>I have visibility. I have control.</p>
<p>And I love the rapid time to valueand intuitive effective control.</p>
<p>Thank you.</p>
<p>We think so as well.</p>
<p>What you guys just just describedwas the whole conceptbehind identity based security.</p>
<p>And so what that means to usendlessly is about leveraging dynamicallylearned and updated attributesof all the assets in in your networkand using that as policy match criteria,using those attributesthat we dynamically learn and inventoryas part of your policy match criteria.</p>
<p>So as you as Dan said, you can make supergranular policies saying</p>
<p>I want all Siemens places to do thisor that or have access to this or that.</p>
<p>And I want all of these other typesof humidity sensors to do something elseand have access to something elsebased off of the model namethat the vendor,the device behavior or whateverit might be, but not based offthese rigid constructs like IP addressesand VLANs that don't tell us anythingand are only valid for an assignedand for a point of time right?</p>
<p>Yeah.</p>
<p>It just means that this policycan dynamicallyupdate and changeif the asset has also changed.</p>
<p>So it allows us to bring continuousverification in this environment as well.</p>
<p>I see another great use case for this.</p>
<p>This happens a lot in hot networks.</p>
<p>I have a vendor that has to do an updateon my on my device.</p>
<p>So what do I do?</p>
<p>I let them in to my networkfor a short period of time.</p>
<p>And guess what?</p>
<p>They have access to my whole network.</p>
<p>Yeah. Once you're in, you're in.</p>
<p>It's you're in, you're with this.</p>
<p>I can say I'm giving it to youfor 12 hours.</p>
<p>Exactly. Access to this device.</p>
<p>And that's it.</p>
<p>That's all you get.</p>
<p>Access to it even further.</p>
<p>I'm giving you short for 12 hours.</p>
<p>Here's the port combinationyou can communicate on.</p>
<p>Here's the passage you're allowed to touchand at the end of the 12 hours,that's the contractor example.</p>
<p>It's just there'sso many numerous examples there.</p>
<p>But to put it simply, isn't it?</p>
<p>They walk in to the door and they have to,you know, depending onwhere you throw them, it's you have toyou have to throw them close to the bottombecause that'swhere their their stuff is sitting.</p>
<p>They could have access to,you know, a thousand thingswhen they might only need access to two.</p>
<p>And so it's just a different gamewhen you can restrict themto those two thingsand to three ports and say, you know,here's the here's the two touch points.</p>
<p>You can have and nothing more.</p>
<p>All right.</p>
<p>So if my listeners want to find out more,they just go to listen Ecom.</p>
<p>Is that where they startto reach out to you guys?</p>
<p>How do we get them in?</p>
<p>You know, information? Yeah.</p>
<p>We have a ton of resources on our websiteand let's see dot com.</p>
<p>And if you look at the top as a resourceis what are videos and white papersand I'm on on the technical marketing sideso you can go and read all my documentsand really understand how thesolution works and how it would be appliedin your network.</p>
<p>And you'll see how quicklyyou could get this up and runningand seeing that value within a weeknow. And it's pretty cool.</p>
<p>And Dan, I know we're going to havemore conversation about the hot side.</p>
<p>I'm until I'm working on somethingright nowcalled hardened team managed security,of which I've already put you guysin the architecturefor my identitybased security at the network side.</p>
<p>So I love your guys approach.</p>
<p>I think it's pretty clever and simplewhich, which to me those arethose are the best. Absolutely.</p>
<p>That way.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.orguntil next time, go outand do something wonderful.</p>

</details>
