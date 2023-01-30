---
layout: posts
title: "Requirements for Edge to Cloud Architectures"
number: 95
permalink: episode-EDT95
has_children: false
parent: Episodes
nav_order: 95
tags:
    - Data Management
    - Edge Computing
    - Cybersecurity
    - Edge

date: 2022-07-12
guests:
    - Darren W Pulsipher
    - Anna Scott

img: thumbnail.png
summary: "Intel’s Darren Pulsipher, Chief Solutions Architect, and Dr. Anna Scott, Chief Edge Architect, Public Sector, discuss essential requirements for edge to cloud service architectures.   "
---

{% include soundcloud.html id="edt95" title="#95 Requirements for Edge to Cloud Architectures" %}

{% include youtube.html id="wBPm1KcrhWg" %}

---


Anna recently headed an effort to write a white paper on edge to cloud service architectures. Edge to cloud encompasses all the high points of technology that Intel cares about: AI, edge, cloud, and network connectivity. The purpose was to gather experts in these areas to discuss how Intel approaches edge cloud architectures and how these architectures can all connect back to the cloud. The focus was on the elements that matter as opposed to current technology that addresses the issues. This would provide a framework to talk about and look for the disconnects. An interesting revelation was that IT, OT, and network folks speak different technical languages with different taxonomies, among other challenges.

One lesson from these discussions was that communications are hypercritical, and there must be solid knowledge of your comms, especially at the edge. This dictates how much computing needs to be local and how often you can rely on the cloud. In the public sector, the added complexity of use cases must keep functionality when there are denied, disrupted, intermittent, and limited (DDIL) conditions. We need to rethink these architectures in cloud connectivity based on those limitations.

Communications and connectivity is the most significant difference between a cloud architecture, service infrastructure, and the edge. Many current tools incorrectly assume constant connectivity; if something is not connected, it is dead. That is not the case on edge. It’s evident in edge organizations such as the military. Still, even in industries such as telehealth, you have to assume there will not be good connectivity, for example, in the telehealth use case where you might be dependent on the patient’s home WiFi. The industrial space has similar requirements. Some can’t be offline because of critical controls for specific machinery or processes.

So, how can you have edge-centric compute that maintains all critical functionality with connectivity back to the cloud in an essentially intermittent fashion? There are architectures for this, but there is still much more to be done to have seamless operations when the connectivity might not be continuous. What can you keep doing, and what happens when everything is restored? There will be a disconnect with what’s been happening with the data. It becomes complex when you have to synchronize all this data at scale, perhaps with thousands of edge devices.

## Security

Security on edge is another area where there is always more work to be done. Traditional security measures such as authentication are still critically important, but devices are a huge attack surface, and their physical security is a different issue. Laptop security tends to be solid, and those measures must be applied to other edge devices. New AI developments will help determine whether the devices are in the location they should be in and detect anomalies in one of, say, ten thousand devices.

## Application Development

In building applications, developers must understand the unique edge environment and develop them without the need to reprogram or bring in new middleware to run at the edge. Applications must be able to run with computing, power, and connectivity limitations. In addition, the edge can be in a new distributed compute setup, and the application needs to be designed to run off a mesh network with highly distributed compute. Decoupling the application from the hardware is a significant shift and getting more generic and less purpose-built. Still, the whole dialogue is moving toward getting data from anywhere and using it anywhere.

## Data Management

The volume of data generated and collected at the edge is so great that it doesn’t make sense to send all that data to a data center to be processed. One of the reasons is the cost. In the United States, a private 5G network can be cost-effective for these enormous amounts of data, but the cost would be prohibitive for most organizations without private 5G.

The other issue is that most of the data is of no use. For example, when monitoring devices or applications, most data indicate that everything is running correctly when you only care about events that suggest things are not OK. AI algorithms are applied at the edge, decreasing the amount of irrelevant data being pushed back to the cloud for processing.

The traditional mode of operation for data management, copying everything to the data center, and running analytics there, doesn’t work well for the edge. Pushing applications out to the edge doesn’t always work, either. Intel has identified a few other data architectures or data ops. One is called data exchange, where there is a combination of moving data in secure enclaves only after it has been analyzed on edge, like batch processing. The other is called intelligent data streams, where SADE and SABR come into play. Data is only moved based on rules, and it is being streamed. It works in DDIL environments because it can determine the current operating environments and adjust.

## Manageability

Systems must be architected in a way that they can be maintained. You can’t deploy ten thousand devices and then regularly send a small army of people to check on those. IT has been traditionally cautious about not wanting to upgrade a working system. Still, it doesn't make sense to leave systems alone, especially with a fear of ransomware attacks on OT networks. Systems must be architected with a way to keep everything easily updated to have the robustness to deal with the security environment.

## Availability

Especially in critical fields such as the military or healthcare, it is important to design systems with sufficient redundancy; it’s more of a systems approach. If individual components fail, the end goal still has to be met. That’s very different from what happens in the cloud, where it’s about keeping the infrastructure up.

The technology is not quite there yet, but it’s on the radar to design for multiple networks. If, for example, you use WiFi 6 preferentially that fails, the system can use 4G or another available network. The network must be solid as well as the compute. A standalone operation without the network side is fragile. If you go with hardwired costs, you get its higher limitations and lose your mobile applications.

You can find the white paper “Essential Requirements for Edge to Cloud Service Architectures” for more information at embracingdigital.org or intel.org.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, thisis Darren Pulsipher, chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people, processand technology.</p>
<p>On today'sepisode, Essential Requirements for Edgethe Cloud Service Architectures with Dr.</p>
<p>Anna Scott.</p>
<p>Anna welcome to the show.</p>
<p>Hey, thank you.</p>
<p>I was just going to say</p>
<p>I'm really excited to be here.</p>
<p>Thank you for giving me a chanceto come in and talk withyou about edge cloud.</p>
<p>So in if no one's heard Annaspeak before, which she has,this is her third time guaranteed.</p>
<p>We just talked about that. Dr.</p>
<p>Scott is our chief edge architectat Intel Public Sector and an incrediblebackground in industrial in the industrialspace, oil and gas and other things.</p>
<p>And Anna is is our go towhen it comes to edge architecturesso welcome again Anna to the show.</p>
<p>Thank you. So thank you so much, Dan.</p>
<p>It's really a pleasure.</p>
<p>So recently you headed up an effortto write a white paper on edge,the cloud service architecturesand tell tell the audiencea little bit about the experience.</p>
<p>Was it like herding herding cats? Right.</p>
<p>Yeah, it's really it's really interesting.</p>
<p>Like, obviously edge to cloud encompassesa whole lot.</p>
<p>Right.</p>
<p>So we're in it's a beautiful matchfor Intel because it hitsall of the high points of the technologythat we care about right now.</p>
<p>So you've got, you know,artificial intelligence is critical.</p>
<p>You have edge is a major component.</p>
<p>Obviously,you have cloud as a major component,but then your network connectivityis really, really important, too.</p>
<p>And so to really kind of tackle this paperand just how Intel is approachingcloud architectures,you know, we got folksfrom all of those different areas togetherwith some pretty impressive expertizeand really wanted to talk throughhow do we just start saying, here'sa great edge architecturewith no discussion about how does thatthen connect back into the cloudand take advantage of that?</p>
<p>And, you know, again,we have great cloud architectures as well.</p>
<p>So so this whole effort of how do you pulleverybody together was a lot of fun.</p>
<p>And also, you know, what's super trueis we all speak very different languages.</p>
<p>We have different taxonomies.</p>
<p>We say wordsand they mean something to one groupand somethingtotally different to another group.</p>
<p>And so it's got it'sgot some really interesting challengesfor us just to have the discussionsto really kind of pullthese architectures together.</p>
<p>We've had to ask people tolearn a whole lot of things, right?</p>
<p>Because you can't you can't talk abouthow how you can really make a solid cloudarchitecture without your cloud folksknowing more about the edge and the edge.</p>
<p>Well.</p>
<p>To me, I thought that was the mostinteresting thingin being involved in in the discussionis the OT guys and the IT guys.</p>
<p>I'm i t euro ti.</p>
<p>We were not speakingthe same at all, right?</p>
<p>When I would say something, you were like,no, they're not.</p>
<p>Doesn't make sense in the space.</p>
<p>So I thought it was really interestingbecause you're right,we both learned a lot from each otherin, in addressingthese new architecturesthat are spanning everything.</p>
<p>Yeah.</p>
<p>And then you like throw in networkand network.</p>
<p>Their language doesn't matcheither of those, either of.</p>
<p>The network guys. I'm sorrythe network guys,they can sit on the side network.</p>
<p>Come on. That's just plumbing, right.</p>
<p>Not for the.</p>
<p>It's just plumbing.</p>
<p>Not for this. No, not. So. Well, yeah.</p>
<p>And I know you know, Darren,</p>
<p>I mean, like one of the really coolthings about this waswhat we what we really learnedwith these discussions,especially when you get out to the edge,the communications is just hypercritical.</p>
<p>Like you're not going to design your edgearchitecture without a really solidknowledge of what your comms are,because that's going to dictatehow much compute you need to be local,how much you can really rely on the cloud,how often you can rely on the cloud.</p>
<p>And since we're both in public sector,we've got the added complexity ofof having use casesthat are really highly centered onstill needing to keep the functionalitywhen you've got the conditions rightor the delayed, disruptedand intermittent communications.</p>
<p>So it becomes really, really important.</p>
<p>And that's where I have to say, I think somany of the interesting conversationsand so many of the newthe new key points that are relevantreally came from is just commsis no longer something that you can sayis going to be there and that it'sgot the latencies that you need andthat it's got the bandwidth that you need.</p>
<p>You really have to rethinkthese these architecturesin the cloud connectivity based on those.</p>
<p>So I thought that that's interesting.</p>
<p>So the first major differencethat we saw between a cloudarchitected service infrastructureand the edge was the comms part, right?</p>
<p>I think there's this huge assumptionand I know I make it, I made it.</p>
<p>I don't do it anymorebecause you schooled me very well,which is I'm not always connected.</p>
<p>All right.</p>
<p>Because a lot of the tools out thereassume connectivity.</p>
<p>And if you're not connected,that means you're dead.</p>
<p>And I'm not going to deal with youanymore.</p>
<p>Right. That's what it typically meant.</p>
<p>But that's not the case in edge, right?</p>
<p>Yeah, definitely not.</p>
<p>And it's it's also true.</p>
<p>I mean, I brought up the public sectorexample because obviously forfor military applications,that's that's really true.</p>
<p>But, you know,one of the thingswe were able to do with thisgroup is bring in a lot of expertsfrom other verticals.</p>
<p>So like Karen Perry really helped uswith the health care side of the world.</p>
<p>And turns out health caretotally has to assumethat you don't have good connectivity,because if they want to do patientedge caseswhere like one of the ones</p>
<p>I know a little bit about thatthat Karen had shared with meis that if youif you want to work in somebody's homebecause they've got long, long term care,you most peopleare not necessarilysophisticated users of technology,especially if they're have a very serious,serious health condition.</p>
<p>And so how do you really set something upwhere you can docontinuous patient monitoring, do properalarming and alertingand do all the things that you need to dowhen, hey, that person's internet or their</p>
<p>WI fi could could go out.</p>
<p>So how do you how do you design around?</p>
<p>Well, you know,you're dealing with people's lives, right?</p>
<p>So, yeah, it's not like,oh, I couldn't streammy Netflix video for,you know, 30 minutes.</p>
<p>Now you're dealing with 15 minutes.</p>
<p>This is. Yeah, yeah.</p>
<p>And then it turns outindustrial has really similarsimilar requirements as well.</p>
<p>You you can't be offlinebecause the control for certainmachinery, for certain processesis just way too critical.</p>
<p>And so this whole idea ofhow do you have thisvery edge centric computethat maintains all critical functionalitybut then can have connectivity backinto the cloud and do that inessentially an intermittent fashion?</p>
<p>Right.</p>
<p>So we can absolutely architect for that.</p>
<p>But that's something that there'sthere's obviously been workfrom the edge perspective,but there's still a lot morethat can be done, especially if you wanta nice seamless set of operation of ayou do have cloud connectivity.</p>
<p>Now here's what you can doand you've lost introduced.</p>
<p>You cannow what does it meanwhen everything is restoredand what's your version of the truth?</p>
<p>Right,because you're going to have a disconnectbetweenwhat's been happening with your data.</p>
<p>And in some cases,that can be very, very, very important.</p>
<p>And then when it got really cool, rightwhen we were talking to this is,you know, when you really do this at scaleand you've got hundreds or thousandsof edge devices that whole idea ofhow do you synchronize all of that dataif you'retrying to really understandwhat's happening acrossa large area and across a large timeframe, you get into some complexitythat is really.</p>
<p>Yeah, yeah.</p>
<p>In fact,one one of the more interesting ones islet's say your cloud goes down,you have a thousand nodes connectedand then you reconnect.</p>
<p>You can get a Akamai swarmwhere everything is trying to communicateall at once and send all the datathey had all at onceand you'll overwhelm your cloud instances.</p>
<p>So yeah, and I wanted to highlightlike we didn't really do thisin the white paper when we,when we wrote that up, we tried to keep itfocused on hereare the things that matter as opposedto here's the technology that we havethat can help address these problems.</p>
<p>Right.</p>
<p>With the idea that what we wanted to dois start the dialogand help provide a frameworkfor how to think about things and wherewhere to look for some of the disconnectsthat we've we've identified.</p>
<p>But like if you're up for it, Darren,</p>
<p>I think talking about the workthat you've done with Edge</p>
<p>Mirror is really fascinating, right?</p>
<p>Because because Edge Mirroris really designed in a way that allowseverything to work well,even when you've got thatsort of a complex situationwhere tons of edge nodes,you've just come back on to the cloud,how do you make sure your comms are?</p>
<p>You know, how do you make sure that youryour system isn't overwhelmedbecause everybody is talking it?</p>
<p>Yeah, well, and we</p>
<p>I have a couple podcasts on edge mural</p>
<p>I'll point people to on thisbut edge mirrors this like you mentionedit's a conceptual architectureon how clouds work, cloud to edge workand the things you have to watch out for.</p>
<p>But I want to go back to kind of theserequirements that were flushed out, right?</p>
<p>Because we talked about comms,which is probably the biggest one.</p>
<p>Let's talk about some of the other oneslike security.</p>
<p>Right. Why?</p>
<p>What's different in security on the edgethan like in the cloud?</p>
<p>What would you say? The number one thing.</p>
<p>Probably thenumber one thing is your edgedevices could be picked up.</p>
<p>Picked up and carry out.</p>
<p>Yeah, someone could steal it. So.</p>
<p>So physical security is a different thingat the edge.</p>
<p>And depending on how criticalyour functionality isand what's actually on that device,there could very easily be informationthat you don't want to be retrievable.</p>
<p>You also want to make sure thatif somebody takes an edge device, thatthat doesn't give them essentially anentry point into your into your network.</p>
<p>So there's a whole new set of requirementsthat thatthat really can come to place.</p>
<p>A lot of the a lot of the traditionalsecurity stuff is still super important.</p>
<p>Right. You still want to doall of your authentication.</p>
<p>You still want to be able toto know that the devices,the device that you think it is.</p>
<p>But we have to.</p>
<p>Yeah, I thought it was interestingwhen we went over the security ones.</p>
<p>There's new cases where I can put itin, I can put an edge device out there andand proxy or spoof your cloud instanceand say, hey, I'm one of your edge devicesand all of a sudden I'm sucking downall the information,all of your critical information,or I'm just feeding it garbage,which could,you know, cause major problems.</p>
<p>You just.</p>
<p>Yeah. So, yeah, security on the edge.</p>
<p>It's a little scary to me, frankly.</p>
<p>Yeah.</p>
<p>And I would say it's also wherewhere we needto like we as an industryneed to be devoting more time.</p>
<p>Right.</p>
<p>Becausethere, there are very good solutionsthat are out that are out there.</p>
<p>But but it is just a more complex world.</p>
<p>And, you know, as we talkzero trust architectures, which againfor public sector are super important,you know, edge devices are just this hugeattack surface now.</p>
<p>Right.</p>
<p>And in some ways it's not so differentfrom, hey, everybody's working on.</p>
<p>Yeah. That's an interesting point.</p>
<p>Yeah.</p>
<p>COVID kind of pushed us a little bitto secure our or come upwith better edge security solutions.</p>
<p>Yeah, and there's there's a lot there.</p>
<p>But one of the things that we realizedthat we really want to be working on iswe have great laptop security and we haveall sorts of ways to protect around that.</p>
<p>Those aren't nascent.</p>
<p>Those types of capabilitiesaren't necessarily applied toto edge devices that are not laptopsthat are for moreindustrial functionalityor are being used.</p>
<p>So for machine visionor computer vision type of application.</p>
<p>And so there's athere's a pretty solid dividing line.</p>
<p>And and we really doat Intel want to work this idea ofhow muchof what we've learned with our PC securitycan we extract and really start applyinginto what used to be called gateways.</p>
<p>Because it's an old term, right?</p>
<p>You know, it's now it's you know, it'syour your it's your edge device, right.</p>
<p>And say, what can we leverage there?</p>
<p>And are there some some rapid iterationsthat we can do that, you know, that help?</p>
<p>And oftenthere's a big divide on operating systemsright between those two because, you know,</p>
<p>Linux is still the winnerwhen you're when you're doing anything,you know, with a more functional and more,you know, more applicationfocus as opposed to like atraditional type of workthat you do with PCs. Soyeah, so it's a fascinating world.</p>
<p>I wanted to mention one thingbefore we move on.</p>
<p>The other thing that is new that hasn'twe haven't really seen, adoptedor used yet, but is absolutely withinyour line of vision is this idea thatfor your edgedevices, we now know enough about whatthe edge device is supposed to do,where it's supposed to be,how to confirm that it's in the placethat it's supposed to be.</p>
<p>There are some new things that couldreally be brought into security to say,don't just stop at, Hey,</p>
<p>I recognize this idea, right?</p>
<p>Or I recognize the device.</p>
<p>Can we confirm that?</p>
<p>But the other edge information that we'recollecting as a result of the applicationthat is. In the right location.</p>
<p>Is probably its primary function.</p>
<p>Right.</p>
<p>And in being able to do that gives usa whole new horizon of of justwhat we can really monitorand what we can flag as a novel behavior.</p>
<p>And that's where I, from applicationstandpoint, is beautiful.</p>
<p>But if you just say, let's start talkingabout how you can use AI foranomaly detection to say, one of my 10,000devices is really out there with respectto what we would anticipate, given howwhat its design functionality is, right?</p>
<p>So there's, there's some really, I thinkamazing stuff that's going to be coming inthe near future becausebecausewe just have some some really good.</p>
<p>All right.</p>
<p>Let's talk a little bit about application,because you mentioned a little bit</p>
<p>I can use it to help anomaly detectionof whether an application is runningappropriatelyon an edge device or the edge deviceis doing what it's supposed to.</p>
<p>How are applications different in edgethan they are in the cloud?</p>
<p>So yeah, so so obviouslythere's a strong pushto have this be containerized, right?</p>
<p>Becauseone of the things that you really want isyou want portabilityof those applications.</p>
<p>And so without having to say, I knowexactly what this piece of hardware isand I know it's operating systemand I know everything about it.</p>
<p>You don't want a custom design in that.</p>
<p>You want to say, hey,that that architectureis set up for a containerand now I'm going to just pop this new.</p>
<p>That's a major shift, right?</p>
<p>Because in the past, edgeit's all custom stuff, right?</p>
<p>Yeah.</p>
<p>Yeah, yeah.</p>
<p>And there's obviously been use of useof containers and use of virtual machines.</p>
<p>But when you really want to scale thisand especially like the thingwe spent a lot of timeexploring, right, is where it becomesthe most relevant iswe're still going to developmost of our applications on the cloudor in a developer environment, right?</p>
<p>And so where they're all going to betested and use is going to be there first.</p>
<p>But if we can have a good understandingof what those applicationsreally need to run at the edge and againdo that in a compute limitationwith compute limitations,with power limitations,with the connectivity limitations, right?</p>
<p>And say understand those up frontso that when those applications aredeveloped,there's actually a very clear way for,hey, here's how you can drop thisdrop this down into this new locationwithout having to take an additional stepto be able to reprogram, you know,without having tobring in new middleware because, hey,you've got this great application,but to be able to understand your data,you still have to do a wholenother set of, of, of software developmentso that it can get its raw data feeds tothe application, has something to work on.</p>
<p>So again, lots of thingshave been done in that space.</p>
<p>But but again, just this whole ideaof begin with the end of mind,appreciate that the edge environmentis very different and before you startbuilding those applications,you know, take advantage of the fact that,you know whatyour limitations are on the edge.</p>
<p>We haven't talked about this yet,but let's do a quick diversionand say let's talk about how diversethe edge can be, how much it can bea new distributed compute setup,because where we also seesome really remarkable things, right, ismost designs rightnow as you have a single piece of computeor maybe like a a few small servers andyou can run your applications right there.</p>
<p>We are already able to say,can you design that applicationso that it could actually run offof a mesh network with highly distributedcompute where now that isjust if you've got ten nodes out thereand all ten, ten nodes ofthose are in place now as well.</p>
<p>So that lends itself reallywell then to containerizationand decoupling the applicationfrom the hardware.</p>
<p>And that's a major shift, right?</p>
<p>Yes. Well, yeah.</p>
<p>And oh, well.</p>
<p>And then just getting getting more genericand less purpose built.</p>
<p>Right.</p>
<p>You know, Iot and edge iswe still very much like hereis the single applicationthat you're going after, here'syour data feeds, here'syou know, and here is your one set of codethat's going to use those data feedsto give you one answer.</p>
<p>Right.</p>
<p>And that is great for, for situationswhere.</p>
<p>Yeah,well which doesn't happen anymore. Right.</p>
<p>I mean those development cyclesare years long and now we need to get intodeveloping new, new applicationsin, in monthsinstead of years. Yeah.</p>
<p>And they're constrainedand they tend to be very proprietaryand you have one companythat can actually keep them going.</p>
<p>And so this whole ideaof like changing the whole,the whole dialog to say, hey,now what we really want iswe want data from anywhere we can get itand then we want to plop down whatever.</p>
<p>Oh, that's a good word.</p>
<p>It's just working for me.</p>
<p>We want to use whatever application,you know,whatever application is the cutting edgeapplication that we care about, right?</p>
<p>So we want the software part of thatto stay extremely current and robust,to be able to take advantage of all of theall of the advances that are being made.</p>
<p>And then just really marry up very quicklyand effectively toto the data that's available.</p>
<p>And then if we can makethat even more robust by, say, you,you can usewhatever compute you have at the edge.</p>
<p>And if your applicationis too big to run ona very constrained piece of hardwarethat you've got,if there's others in the areaand you can mesh that out now,you can really still supportthat application at the edge.</p>
<p>So you mentioned somethingwhich is which is the next majorrequirements, data management?</p>
<p>Yes. Right.</p>
<p>This is a major shift. Right.</p>
<p>This is probably right up therewith comms.</p>
<p>How do I manage data on the edge?</p>
<p>I rememberwhen I first saw Edge architectures,everyone said, oh, 5G is going to fix usbecause I'll just connect right to 5G.</p>
<p>Will, will connect it all upand there's more bandwidth in 5Gthan I could ever filland that's completely shot to smithereens.</p>
<p>I think.</p>
<p>So. I mean, it's still can work, right?</p>
<p>It's just it depends on when do youactually have that network available?</p>
<p>And then can your applicationshave that be,you know, are your applicationssuch that you can support itwith a centralized modelwhere your maybe your data is collectedat a local, you know, at an edge location,but then everything happens in thein the cloud and then do you want a.</p>
<p>Is for. It.</p>
<p>Yeah. Yeah. It's the volume of data too.</p>
<p>There's so much data being collectedat the edge or generated at the edge.</p>
<p>I don't know this.</p>
<p>I don't think I want to send all thatraw data to a data center to be processed.</p>
<p>I just don't. Yeah.</p>
<p>And in most places, the cost is too high.</p>
<p>I mean, that's one of the nice things.</p>
<p>I will give a bit of a plugfor private 5G.</p>
<p>Part of the reasonthat private 5G and again this is very UScentric is the spectrum applicationsand things are differentthan other parts of the world.</p>
<p>But for the U.S., like when they opened up</p>
<p>CVR, a spectrum and allowed,you know,essentially the individual usersor private users to take advantageof that spectrum so that now, insteadof always being beholden to a carrier,you could stand up your own 5G networkon that available spectrum.</p>
<p>And now you care a whole lotless about those data costs,because what you're already paying foris your infrastructureand keeping your network going,as opposed to doing a,you know, a normal cost structure.</p>
<p>If you'reif you're working with a carrier.</p>
<p>So there are some things that can happenthat can make it very cost effectiveto still just movea ton of data over your over your network.</p>
<p>Obviously some stuff to fly six to.</p>
<p>But but again, like most peopleand for most organizations,you're not standing up a private 5Gnetwork, two or 40 4G LTE networkto do your work,which means you got massivedata, data ratesand high data rates that you have to pay.</p>
<p>So there's a good incentive to.</p>
<p>Buy also to store all thatand this world data, right?</p>
<p>I mean, we're talking exabytes of data.</p>
<p>Yeah, petabytesexabytes of data being generatedfor camera is outrageous, right.</p>
<p>Well and most of the datais of no use, right.</p>
<p>Because luckily when we're tryingto like monitor somethingor we're trying to understand somethingas a rule, you know,most of the data that's comingacross is telling you that everything'sokay and all you really care aboutis when things aren't okay.</p>
<p>Right.</p>
<p>And that's where the the valueof the computer vision of the edgeedge capabilities and really applying</p>
<p>AI algorithms gets really excitingbecause because you can do thatand do that very effectively.</p>
<p>But if we go back to data managementa little bit, you know, Darren,you're you're really much morethe data management expert than I am.</p>
<p>I did hope that we could talk a little bitabout some of the workthat Stan Mau has done with with Sandy.</p>
<p>With Sandy Vale.</p>
<p>And how that kind of makes sense and workswith the edge of your architecturethat you also have.</p>
<p>But maybe as opposed to talkingto architectures, we can say, here'sthe cool stuff that those those types.</p>
<p>Yeah. So let's.</p>
<p>Help with the problem. Right. Yeah.</p>
<p>You turned it around.</p>
<p>Now you're interviewing me.</p>
<p>Way to go around it.</p>
<p>Yeah. No, that's good.</p>
<p>No, you know what?</p>
<p>What we found was there's different modesof operation for data management,or we call data ops.</p>
<p>The traditional one is copy everythingto the data center run analytics.</p>
<p>There.</p>
<p>And everyone'sbeen doing that for decades.</p>
<p>And they're finding,oh, that doesn't quite work for Edge.</p>
<p>So we're just going to pushapplications out to the edgeand that doesn't always work.</p>
<p>So we've identified a couple other dataarchitectures or data ops.</p>
<p>One is called a data exchange, where it'sa combination of moving datain secure enclaves,or only afterit's been analyzed on the edge.</p>
<p>And, and,and that's in like batch type processing.</p>
<p>Another a fourth oneis what we call intelligent data streams.</p>
<p>And this is where Sadia and Saberreally come into play,where I'm only moving databased off of rules and it's being streamedand it works in these digital environmentsthat you talked about.</p>
<p>So it's not just, hey,this application always doesanalytics and sends it, it'swhat's the current operating environment?</p>
<p>Is it a full, full bandwidth?</p>
<p>I'm going to send everything</p>
<p>I possibly can.</p>
<p>Or am I only getting kill a bit right nowor do I have no comms?</p>
<p>I need to cacheand do some massaging thereand then only send whatreally matters later when I reconnect.</p>
<p>So there's lots of really cool thingsaround the data management side.</p>
<p>We should probably have Stancome on on the show and and talk about itbecause we can go for another hour or twojust talking about data. So.</p>
<p>All right.</p>
<p>We're going to move, though,because we'll never finish.</p>
<p>Let's let's talk about manageabilityand what doeswhat does manageability really mean?</p>
<p>Well, you kind of touched ona little bit earlier, butgive give me whythis is such a requirement.</p>
<p>Yeah.</p>
<p>So this isthis is the the classic edge problem forfor industrialbut also for for other verticals,which is,you know, the real promise of Iothas always been this whole idea of there'smillionsof millions of devices and now you'vejust got this massive amount of data.</p>
<p>But there's the very real problemthat's like, hey,let's just talk a hundred devicesand how are those hundred devicesreally going to be monitored,updated, authenticated,you? How are you going to make surethat you yeah,you're pushing your updatesand the updates are actually loadingin that everything's healthyand and you're responding as as expected.</p>
<p>And thenthat whole whole set of problemsis something that everybody's knownabout it for a long time.</p>
<p>And in some ways, is it terribly,terribly different from, hey, your entireworkforce just had to stay homefor, you know, for years?</p>
<p>And now you've got, you know,a 10,000 person organization and hey,how is that working, right?</p>
<p>I mean, so same same sort of problems.</p>
<p>But now you just don't have a personat the other endthat can pay attention to the updatesand can do the oh,what's our, what's our termfor the Wednesday the Wednesday reboots.</p>
<p>Yeah.</p>
<p>So but that all still has to happen,right.</p>
<p>And especially if you've got networkconnectivity,you know, you can't, you know,like the current industrial thing, right.</p>
<p>Is like you may have some connectivity,but essentially you'llput something in the fieldthat has a dedicated capabilityand you leave it there for ten yearsand, and.</p>
<p>Don't touch it.</p>
<p>And you just don't touch it.</p>
<p>And maybe you do the firmwareonce every ten years and then you do itby sending a guy with thumb drive rightin modern systems, especiallywhen you want to do them at scaleand especially when you want to get it,you know,get a lot more devices out there.</p>
<p>None of that stuff makes any sense.</p>
<p>And so you need to really well,these systemsjust absolutely have to be architectedin a way that they can be maintainedbecause you can't say deploy, you know,a thousand devices to a remote locationand then have a small army of peoplethat are going to begoing there on a regular basisto make sure that everything's working.</p>
<p>There's no economics in that. So.</p>
<p>But it doesn't isn't that.</p>
<p>Yeah, isn't that kind of I know the i.tguys are very cautious around this space.</p>
<p>Yeah.</p>
<p>Because and they don't upgrade thingsbecause don't touchwhat's working mentalitybut there's, there'sa lot of fear aroundransomware attacks on OT networks now.</p>
<p>Absolutely.</p>
<p>And, and that's whyyou can't leave it alone. Right.</p>
<p>It's like there's almost nothing worsethan you can do to say,hey, we're not going to fix itbecause it's not broken.</p>
<p>But that's not true from a securityvulnerability perspective, right?</p>
<p>So if you're going to have this typeof connectivity, you have to have a wayof keeping everything updatedso that it's got the robustness thatyou need to deal with theyou know, with the environmentthat we live in with respect to security.</p>
<p>So so yeah.</p>
<p>And there's a lot of different points.</p>
<p>I mean, this is, again, like all ofthe things that go into a cloud are,you know, fields on their ownwith experts and well-developedindustries and and lots of time spent.</p>
<p>It's so we werewe were did a very high level thing,which is just don't neglect thisbecause don't just go out thereand start throwing outsome good architectures.</p>
<p>Because if that architecture hasn't beencrafted to be with manageability in mind,you're probably going to findthat your management is going to saythank you, but go awaybecause we're not ever going to apply it.</p>
<p>Yeah, no, I agree. Right.</p>
<p>There's there's one one major one leftand that's availabilitywhich we've already kind oftouched on a little bit.</p>
<p>Yeah, availability.</p>
<p>Anytime I think of availability,</p>
<p>I remember when I was a CIOand we talk about availabilityas in three or four nines.</p>
<p>My data centers up for nines. Yeah.</p>
<p>Yeah, yeah.</p>
<p>But yeah, except for edge.</p>
<p>You don't talk even double nines, do you,as far as availability goes.</p>
<p>So we would love to right the way,the way that it worksis if we need that type of availability,it's still all hardwiredand then typicallyhas the redundancy built in.</p>
<p>So that's one of the things likeif we go back to the health care model,this is wherethat part of it becomes really critical.</p>
<p>Or I don't even want double nines,</p>
<p>I want 100% uptime.</p>
<p>You know. Yeah, like nine nine.</p>
<p>They're like seven nine. Yeah, exactly.</p>
<p>It's almost impossible to meet,but it's but it, it does becomelike a whole new world of saying,okay, it's not, again,good enough to have an edge architectureor have a manageable edge architectureor even have an edge architecturethat can communicate with the cloudand take advantage of thatwith these nice seamless applicationsflowing back and forth.</p>
<p>It is.</p>
<p>Can you design that with sufficientredundancy based on what the applications.</p>
<p>Yeah, I like that approachbecause it's more of a systems approach.</p>
<p>I don't care if one component failsas long as the missionsenior you can tell I've been in the DODway too long.</p>
<p>Everything's in missionas long as the application.</p>
<p>Like on a hospital bed, right?</p>
<p>As long as I keep that patient aliveand notify if there's issues.</p>
<p>I don't care if individual components failas long as I meet the end goal.</p>
<p>And that's very, very differentthan what we do in the cloud.</p>
<p>It's all aboutkeeping the infrastructure up.</p>
<p>Yeah.</p>
<p>And like, oh,</p>
<p>I'll see if I can give an example because,because I think at edge it's harderbecause there's also a cost sensitivityat the edge, because you want toget the scale where you've got,you know, lots and lots of devicesand lots of lots of capabilities.</p>
<p>Right.</p>
<p>And so soone of the other things that Intel does iswe we have a Smart Edge platform.</p>
<p>I've worked the most with the commercial,so I'll talk about that since,since I just understand it better.</p>
<p>But like one of the examples is likefor some applications, you could say,here's a Smart Edge Mac applicationthat has really good network connectivity.</p>
<p>You can use 4G, 5G, LTE, Wi-Fi, six,whatever is available and it can work.</p>
<p>You know, has a Xeon class serverand it will work with like, you know,say 10 to 100 different edge devices.</p>
<p>Right.</p>
<p>And that could be a really solidarchitecture, but that almost undoubtedlydoes not have a high enough availabilityif it's single serverand if it's single network.</p>
<p>Right.</p>
<p>So if we're really talking availability,there is extra costthat you have to throw inbecause at a minimumyou need redundancy of compute,but then you need that software tobe designed so that if there is a channel,you know, if something fails, you havea seamless set of operation, right?</p>
<p>Ideally in this we're not there yet.</p>
<p>But is is on the on the radaris this idea of,hey, if you can get your handson multiple networks, thenyou don't want a systemthat's designed for a single network.</p>
<p>You really know this is especially true.</p>
<p>And the, you know, in the public sectorside of the world,you want a system that can say,hey, I've got WiFi 6and I use that preferentially,but if I lose my wife,</p>
<p>I don't have any 4G hereand can I keep the network movingso that I still have good connectivityand I can still do what I need to do?</p>
<p>So it's almost likethe availability is a bit too,you know, twofold with respectto making sure your computer's solidand then making sure that your networkconnection is solid.</p>
<p>And again, we can designed to bestandalone operations without the networkside.</p>
<p>But then does that mean you're hardwired to all of your.</p>
<p>Yeah, yeah,that means it's fragile, right?</p>
<p>It's right. Right.</p>
<p>And if you go hard wired costs get higher.</p>
<p>It's limitations.</p>
<p>You lose your mobile applications.</p>
<p>And so this whole idea ofhow do you get your local networkto be highly, highly available as well?</p>
<p>And often what that means isyou've got to just go redundant, right?</p>
<p>So yeah, it's just it's fascinating.</p>
<p>So yeah, that's interestingbecause you've tied cost.</p>
<p>Cost of courseis something in there and it's almost inopposition to availabilityand things like that.</p>
<p>So and this has been very insightfulif people want to findout more,you guys can go to embracingdigital.org.</p>
<p>There is a white paper there.</p>
<p>You can also find the white paperon intel.com.</p>
<p>The white paper is called</p>
<p>Essential Requirementsfor edge to Cloud Service Architectures.</p>
<p>Go out and look for Dr.</p>
<p>Anna Scott, thank you again, as always.</p>
<p>It's a pleasure.</p>
<p>Hey, Darren, great conversation.</p>
<p>I appreciate it.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationat embracingdigital.orguntil next time, go outand do something wonderful.</p>

</details>
