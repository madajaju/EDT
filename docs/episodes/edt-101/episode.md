---
layout: posts
title: "Network Controller Security with Elisity"
number: 101
permalink: episode-EDT101
has_children: false
parent: Episodes
nav_order: 101
tags:
    - Network Security
    - Cybersecurity
    - Elisity

date: 2022-08-23
guests:
    - Darren W Pulsipher
    - Dan Demers
    - Dana Yanch

img: thumbnail.png
summary: "Intel’s Darren Pulsipher, Chief Solutions Architect, Public Sector, interviews network security experts Dana Yanch and Dan Demers from Elisity about network controller security techniques and zero trust architectures. "
---

{% include soundcloud.html id="edt101" title="#101 Network Controller Security with Elisity" %}

{% include youtube.html id="st0HrHNmEUI" %}

---

Dana has been working in hardcore networking for the last 15 years. He has worked with software-defined networking and wide-area networking and focused on the SD-WAN world for a time. He then worked with cloud but returned to his roots with network security at Elisity.

Dan has worked chiefly in networking, but he started with advanced services at Cisco and did some oil and gas work in Houston. He then moved into the SASE SD-WAN space, where he worked with Dana. He is now focused on network security as well as software-defined security. Dan says the term, however, is elusive because the technology is micro-segmentation through identity.

The traditional way to create micro-segmentation through VLANs and firewalls is no longer enough. For 15 years, network security has focused on hardening the network’s perimeter. Making an impenetrable wall around an enterprise is still essential, and firewalls do an incredible job of keeping people out of the network. But for the most part, the inside of the network, where there has been an explosion of new connectivity requirements because of IoT, and OT, is a free-for-all once a user is inside. Since the outer wall is robust, anyone inside is often considered a legitimate or trusted user.

The reality is that most current attacks are happening inside the network via exploited trusted users, devices, and applications.

There are many reasons why leveraging VLANS, IP ACLs, firewalls, and traditional segmentation methods, don’t work today for lateral movement security. They can work in static environments at a small scale. They work great for the edge of the network and specific places such as bottlenecks or aggregation points, but there are three common reasons why these are no longer ideal.

First, traditional methods’ scalability and operational efficiency are questionable. Managing VLANs, IP ACLs, and firewalls across large enterprises is done manually. It is not a distributed software-defined architecture but requires a box-by-box configuration, line by line. They are not dynamic or responsive to anything on the network. Their use also creates a Swiss cheese network full of random holes. Users, especially operators of networks, are often a system’s most significant risk. They may, for example, open up a VLAN or change one piece to do a quick test but then don’t undo the change.

Another example is that a VLAN will start with a use case and slowly creep to other use cases. Suddenly, what was a ten-device VLAN now has 60 devices. In the OT world, it might have six or seven different processes running inside of it because it was the trusted LAN. Still, often these environments grow slowly and are undocumented, so the risk goes unnoticed.

The second issue is that VLANs and firewalls are inherently in the wrong place in the network to provide lateral movement security. If you are in the same VLAN as another device, user, or application, that communication channel is open even though it may not have to be. Firewalls are not typically deployed in a strategic place where they can handle the access level of lateral movement. You have to funnel traffic to a firewall and get it back down, which is inefficient. Then you have a bottleneck.

Bad actors are looking at networks to see how they can twist them to get some outcome, not how they should or were intended to function. For example, if a user is in a VLAN and a process is running inside a use case, there is nothing to stop them from going from port 3 to port 32 in that same VLAN. Often people design security around intended use rather than how it could be used. It’s common, for example, for software developers to jump ports to work effectively, but that’s dangerous because it leaves them open. No one can place hundreds or thousands of firewalls across the entire access edge. That would be fiscally restrictive and impossible to manage.

The third problem is that these legacy segmentation solutions don’t consider the identity, context, or behavior of the asset connected to the network. It’s a rigid, network-centric topology that provides some essential security measures. But an IP address says nothing about the asset’s legitimacy and the network it’s attached to. So how can you dynamically secure this network when you don’t know what’s connecting to the network? You can’t make a policy in the first place without any granularity; it doesn’t work now to treat every device as equal.

Even if there is an analysis of the type of traffic, it typically happens several hops up, which means you have exposure now. Any enforcement may or may not be able to protect the infrastructure fully.

This detection ability still has value, even if there is no protection. Still, the ability to stop something that could have happened right at the edge, as close to the asset as possible, is a better solution.

Check out the next episode in this series [here](episode-EDT101).


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, thisis Darren Pulsipher chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople, process and technology.</p>
<p>On today's episode, Network</p>
<p>Controller Security with Dana Yanchand Dan Demers from Elisity.</p>
<p>Dan, Dana, welcome to the show.</p>
<p>Thanks.</p>
<p>Thanks.</p>
<p>Hey, Dana,tell us a little bit about your backgroundand why we're talking todayand then we'll head over to Dan.</p>
<p>Yeah, absolutely. Thanks, Darren.</p>
<p>So I'm Dana Yanch, director of technicalmarketing at Elisity.</p>
<p>My background as well has been hardcore networking for the last 15 years.</p>
<p>A lot of softwaredefined networking, wide area networking,the SDWAN world, which is something</p>
<p>I was focused on for a long time.</p>
<p>And then the cloud world,</p>
<p>I went to work for a companycalled Aviatrix for a period of timeand it's been great.</p>
<p>But I came back to my rootshere on network security at Elisity</p>
<p>Great.</p>
<p>Thanks.</p>
<p>Dana, what about you?</p>
<p>Dan, your backgroundis different than Dana's.</p>
<p>I know that it's as we've talkedquite a few times.</p>
<p>Yeah, I started</p>
<p>I've been the networking most of the time,but I started out in the services areawith advanced services at Ciscofor a few years down oil did some oiland gas work down in Houston.</p>
<p>And then I moved over into kind of SASEamd SDWAN spaceafter that for several years and thenworked with Dana in the past.</p>
<p>And then we jumped over here to Elisityand now more focused onnetwork security,but also software defined security.</p>
<p>It's kind of a an elusive termhere in the sense of we're quite lans,but from a micro segmentation to identity.</p>
<p>Yeah, thisis something really unique about whatyour guys's approach to securing networksand things like that.</p>
<p>Very differentthan what I've seen traditionallyand what I learned rightwhen I started doing networking.</p>
<p>It's very different, very unique.</p>
<p>So I was very fascinated.</p>
<p>So let's start offwith the first question why?</p>
<p>Why not just use </p>
<p>VLANs and firewallsjust to protect my network?</p>
<p>Isn't that good enoughto create micro segmentation?</p>
<p>Because that's what I was told.</p>
<p>So yeah. Whywhy do any different than that?</p>
<p>Okay. Yeah,it's it's it's a pretty common question.</p>
<p>We've been doing one way,one thing for a long time.</p>
<p>And and why?</p>
<p>Why fix what's potentially not broken?</p>
<p>But actually it isit's quite broken in this day and age.</p>
<p>So I mean, for me to talk about thatin the preface to it a little bitabout what we'vebeen focused on for the last 15 yearsor more in network security,and that's been hardeningthe perimeter of the network.</p>
<p>I'm sure you've heard thatthat terminologybefore, the perimeter of the network.</p>
<p>And that's thingslike when as the Internet, as DMS,these remote access edge.</p>
<p>And so what we've spent a lot of timeand energy spent there making thisimpenetrable wall around our enterprises,and that's still important.</p>
<p>But the problem, thatproblem's been solved for a long time.</p>
<p>Firewall firewalls doing an incredible jobkeeping people out of the network.</p>
<p>But for the most part,we neglected the inside of the networkwhere there's been this explosionof new connectivity requirementsbecause of all this Iot and IMT and OTand Iot, that's just being connectedinternally to absolutely everything,to the Internet too, to resources. Andso, you.</p>
<p>Know, it reminds me we didwe did a podcast on Zero</p>
<p>Trust Architecturesand we compared it to a castle.</p>
<p>So what you're telling meis you built a really strong moat.</p>
<p>You built really strong wallsaround your castle,and we've done a great job at that.</p>
<p>But what you're sayingis inside the castle, once I'm inside,it's like a free for all.</p>
<p>Yeah. A pretty safe to say. Exactly.</p>
<p>For the most part, that's. That'spretty much what we've seen.</p>
<p>We've been looking at a lot of networkswith our customers and finding out thatthe inside of the networkhas been implicitly permittedbecause, you know,if you've made it past this robustouter wall and into the network,you must be a legitimate.</p>
<p>You must be.</p>
<p>Yeah, exactly.</p>
<p>But that's really not the case.</p>
<p>It's not the case this day.</p>
<p>And so,</p>
<p>I mean, as you'rewell aware, the majority of the attacksthat are happeningthese days are happeningfrom the inside of network, namelyfrom exploited trusted users, devicesand applications.</p>
<p>It's almost like the Trojan horse.</p>
<p>Well, that'swhere Trojan Horse came from. Right.</p>
<p>The whole concept. Yeah. Right.</p>
<p>They brought the Trojan horseinside the security walls of Troy.</p>
<p>Right.</p>
<p>That's what happened.</p>
<p>That's right.</p>
<p>I mean, then they came outand killed everyone, right? Yeah.</p>
<p>I mean, what that meansis that these threat actors, they'recrawling around the network that's that'sgot all these channels that are fully openthat we've never sat down and analyzed.</p>
<p>And it's shut down, you know, made itso that only what you need to access to doyour job is openand everything else is closed offor that's somethingwe totally just ignored.</p>
<p>And now it's time to go back and fix this,because all sorts of organizationsare being,you know, brought to their knees becauseof all the threats that are happening now.</p>
<p>All right.</p>
<p>So but the term I've heard onthis is just Microsoft mentation.</p>
<p>Yeah.</p>
<p>So why not just create a bunch of VLANswith firewalls around each Phelan and say,hey, only these applicationscan talk to each other and why not?</p>
<p>Why not just go that route? That's right.</p>
<p>Yeah, it's a good question.</p>
<p>And that's the we need to answer here.</p>
<p>That's whatwe've been focused on solving for adults.</p>
<p>See the problem with traditionalmechanisms of segmentationand I say that lightlywhen we talk about VLANs,but things like leveraging VLANsor IP, ACLsor firewalls with access control entriesin them, there's all sorts of reasonswhy they don't work todayfor lateral movement security.</p>
<p>They workedgreat for the edge of the networkand they were great for very specificmaybe bottlenecks or aggregation points.</p>
<p>I'll talk about three common ones. Okay.</p>
<p>And that should frame the conversationpretty, pretty, pretty.</p>
<p>Well.</p>
<p>So number one, VLANs, ACLs,firewalls, their scalabilityand operational efficiencyis questionable, right?</p>
<p>Managing VLANs,</p>
<p>IP, ACLs and firewalls acrosslarge enterprises is done quite manually.</p>
<p>Right.</p>
<p>It's not a scalable mechanism.</p>
<p>It's not a distributedsoftware-defined architecture.</p>
<p>It requires a box by boxconfiguration, line by line.</p>
<p>They're not dynamic in any wayand they don't respond to anythinghappening on the network.</p>
<p>They're just not intelligentenough. Right.</p>
<p>These are kind of dumb mechanisms thatkind of work for certain environments.</p>
<p>But in the grand scheme of things,for large enterprises,lateral movementis not a efficient way to do this.</p>
<p>What happens also that we've seenis that you might try to usethese features, these functionalities,and you'll come back and realize thatthere's a network full of random holes.</p>
<p>It's like a Swiss cheese networkbecause people have put little accesscontrol entries that allow this and that.</p>
<p>And out of nowhere you now have.</p>
<p>Well, that would be me.</p>
<p>Yeah, yeah.</p>
<p>Just yeah, that's that's your,that's your software developers, right.</p>
<p>They do that all over the place. Yeah.</p>
<p>Because we just want the thing towork, right.</p>
<p>So we're like, okay, we're under pressure.</p>
<p>Let's just make it workand nobody comes back. Results for</p>
<p>I'm yourworst user as far as security goes,because if I need to download somethingor if I need a port openso I can attach to an external service,</p>
<p>I open the port.</p>
<p>Yeah, right. Right.</p>
<p>I don't ask permission.</p>
<p>So Dan, you were going to saysomething about this.</p>
<p>How do you manage?</p>
<p>ALL Yeah, one of the,one of the things that always hit mewas that your users are your greatestasset, but also your biggest risk inthe sense of users are especiallythe operators of networks in the sense of,hey, I'm going to open up that VLANor change this one piecejust to do a quick test.</p>
<p>But then don't undo the change.</p>
<p>Or well, because something else happened.</p>
<p>Or VLANs started,especially the VLAN example.</p>
<p>We've actually seen this in the real worldnumerous times where a VLANor some kind of verve or a constructwill start with a use caseand then it will slowly creepto other use cases.</p>
<p>And all of a sudden what was a ten device?</p>
<p>VLAN is now having 40, 50, 60 devicesand in the OTTI worldit might have six or sevendifferent processes running inside of itbecause that's the that was the trustedthis, you know, the safety lanthat wasn't the dirty one.</p>
<p>But then it kind of blew up over ten yearsbecause these environments oftenthey're static alot of the time, but they kind of go slowand are documented.</p>
<p>Yeah. Okay.</p>
<p>So this brings up something interestingwhat you're saying is</p>
<p>VLANs and firewalls do workin very static environmentswhere I can where I know everythingthat's going to happen on there andand in small scale.</p>
<p>Well, one thing.</p>
<p>That that's what I just heard, right.</p>
<p>Yeah. That's that brings me to thethat's fine.</p>
<p>That brings me excitedbecause that brings me to the othertwo pointsaround the efficacy of these mechanisms.</p>
<p>Right.</p>
<p>The fact that VLANs and firewallsare inherentlyin the wrong place in the networkto provide lateral movement.</p>
<p>Security is the big problem.</p>
<p>I mean, if you're in the same VLANas another device that communityor useror application, that communication channelis completely open and availableeven though it may not have to be.</p>
<p>And firewalls are typicallynot even deployedin a strategic place where it can handlethat access level of lateral movement.</p>
<p>You have to funnel trafficup to a firewall, get it back down.</p>
<p>It's just it's not the most efficient.</p>
<p>Then you have a bottleneck.</p>
<p>Yeah, yeah.</p>
<p>So justthey're not even seeing the trafficthat we're trying to securemost of the time.</p>
<p>Interesting. Very interesting. Yeah.</p>
<p>So that goes into that scalabilityissue as well then.</p>
<p>Yeah, right.</p>
<p>The first off,they're not catching the right traffic.</p>
<p>Doesn't really prevent lateral movementinside the same network, right.</p>
<p>Yeah.</p>
<p>And not to me,if I'm a VLAN and I have a process runninginside, that's some kind of use case.</p>
<p>What's to stop me from going from portthree to port 32 in the same VLAN?</p>
<p>Now if there's nothing,there is nothing to do and it comes downto what was the intended,what's the intended functionthat should be occurring versuswhat could occur.</p>
<p>And that's too often people will designsecurity around what they they'll putsecurity up into a point of, all right,this is what I'm going to allow.</p>
<p>I'm thinking it's a white list,but it's not.</p>
<p>They don't actually think ofhow could this be turned around and useddifferently because when when bad actorsare looking at networksand not looking of howthey should be functioning,they're looking at how they can takewhat is functioning and twistedto get some type of outcomethey're looking to do.</p>
<p>And they're not using your tools.</p>
<p>They're using their tools.</p>
<p>Well,isn't that a developer as well as a saw?</p>
<p>I'm a software developer. Right.</p>
<p>And and I'm trying to find waysto get my work done most effectively.</p>
<p>And I will jump ports.</p>
<p>I do that. Right, which is awful.</p>
<p>I know I'm but I do jump ports,especiallyif for some reason a port goes down, I'mgoing to jump ports onto something elseand try other through a range of ports.</p>
<p>I mean, that'sjust something that I've done.</p>
<p>Yeah, but what you're saying isthat's kind of dangerous is in,in the current VLAN environment. Right.</p>
<p>Because I, I'm kind of open.</p>
<p>Yeah, you're absolutely right.</p>
<p>In firewalls, nobody is placingfar hundreds or thousands of firewallsacross the entire access edgeto get that type of visibility.</p>
<p>If be impossible to manageand it be fiscally restrictive.</p>
<p>There's no waya lot of organizations can handleputting these firewalls everywhere.</p>
<p>So so isn't that isn't that the balancethe balance between flexibilitythat I need to actually deliver myapplication or my data and also security?</p>
<p>Aren't they at odds with each other? Yeah.</p>
<p>Yeah, to an extent.</p>
<p>They are at oddsand it be based on current technologiesbecause for the last 15, 20 years,ever since the firewall, you know,in the ninetiesreally kind of became a thing.</p>
<p>The it's been the go to tool, hey,</p>
<p>I need security.</p>
<p>I'll throw a firewall and hey,</p>
<p>I've got to separate two things.</p>
<p>I'll throw a firewall.</p>
<p>And it's always been this L-3 two or threehops up in the network kind of thinkingand the whole market,all the vendors, including have,you know, the major vendors have kind ofgone down that path in the sense of, hey,you know,we're going to invest there because itmay not be the best possible way to do it,but it's a way that that is rinseand repeatable and that.</p>
<p>Oh I see.</p>
<p>Yeah.</p>
<p>So they first did itbecause it was exactly.</p>
<p>What it was.</p>
<p>It was probably, you know, day 1/1firewall, iteration, eighties, ninetiesish, true kind of modern firewallthinking it was a wild success day one.</p>
<p>It's more like day 20,000, you know, some,you know, many years later,the success calculation is,is it much different?</p>
<p>Well, and I think a lot of thathas to do with the scalability,the sophistication of cyber attacks now.</p>
<p>Yeah, totally. So.</p>
<p>All right.</p>
<p>So what you're telling me iswe've got an internal combustionengine, the firewall,and it's time to replace it with electric.</p>
<p>I love that.</p>
<p>I'm a massive Tesla fan, so.</p>
<p>Yeah, absolutely.</p>
<p>Right.</p>
<p>So, soso you have a third one that you gave me.</p>
<p>Yeah, the third one to me is probablythe most interesting out of them all.</p>
<p>And it's the factthat these legacy solutions, these legacysecurity slash segmentation solutions,don't take into consideration identityor the context or the behavior ofthe asset that's connected to the network.</p>
<p>So it means it's really unintelligent.</p>
<p>It's a really networkcentric topology, dependent and rigidway to providesome measure of basic security.</p>
<p>I mean, an IP address tells menothing about the legitimacy of the assetand the network that it's attached to.</p>
<p>Right. It doesn't tell you anything.</p>
<p>So how can you secure this networkand dynamic fashionwhen you don't even really know what'sout there connecting to the network?</p>
<p>How can you make a policyin the first place without anywith any type of granularity?</p>
<p>If all your match yarn or five tuplenetwork constructs, that's your policymatch criteria.</p>
<p>It doesn't work in this day and age,</p>
<p>I think.</p>
<p>Yeah, that's really fascinatingbecause what you're saying isevery day, every device securingthe network, every device is equal.</p>
<p>That's right. Yeah.</p>
<p>They're all the same. Right.</p>
<p>How are you supposed to get graphs?</p>
<p>They all look the same,right?</p>
<p>But I can't.</p>
<p>I analyze traffic and then,you know, based off the type of traffic,</p>
<p>I can do different things with work.</p>
<p>But that's not how. This is happening.</p>
<p>It's going to be happening.</p>
<p>How many hands and.</p>
<p>Several hops he essentially.</p>
<p>Gets, right?</p>
<p>Yeah.</p>
<p>Which means I have exposure now.</p>
<p>And let's say let's say wewe tapped everythingand we saw everything.</p>
<p>The analysis is going to still happenin the traditional thinking,multiple hops away firewall thinkingand or some kind of appliance.</p>
<p>And then any type of enforcementit may or may not be able to dois going to be up there.</p>
<p>It's not going to be down here.</p>
<p>And so I might know somethingthat's very valuablethat's not to take away from the value.</p>
<p>It's the whole concept of,you know,protect, detectand then kind of some kind of response.</p>
<p>That's very oversimplify it.</p>
<p>But we still need that.</p>
<p>The detection, we still need to knowsomething bad happenedeven if we didn't protect ourselves.</p>
<p>That's incredibly and that's actuallyan underused part of cybersecurityin the sense of nowthere's more value to be put in there.</p>
<p>But the abilityto stop something from happeningand then detectsomething could have happenedand I killed it before it happened.</p>
<p>That's something that can happenand should be happening at the very edgeof the network, as close to the assetas possible, whatever that asset may be.</p>
<p>That's really interesting.</p>
<p>Let's go back to my castle.</p>
<p>I got my castle.</p>
<p>So you guys are telling meas people are coming through my castle,</p>
<p>I'm sendingmy report on who's come throughand what they're carrying with them offto another city to go tell.</p>
<p>And they're going to analyze it.</p>
<p>And then they'll get back to meon who's in my castle.</p>
<p>That's what today happens. Yeah.</p>
<p>And then they'll make a needto keep the analogy going.</p>
<p>They'll make a rule somewhere in the roadoutside the city of.</p>
<p>Hey, if anyone comes,it goes from the city.</p>
<p>We're going to kill that,you know, that behavior.</p>
<p>But the what if and it's not even awhat if thewhat happens oftenis it all stays within that little realm.</p>
<p>It doesn't actually leaveand go to the other cityor hit the highway and so forth.</p>
<p>You know, great analogy.</p>
<p>Oh, very, very fascinating.</p>
<p>Okay, guys.</p>
<p>So we've scared everyone.</p>
<p>Oh, there's a. Solution. Don't worry.</p>
<p>To find out about a solutionto solve the networkcontroller security problems,listen to Dana and Dan explain.</p>
<p>Identity based micro segmentationin the second partof this interview.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.orguntil next time, go outand do something wonderful.</p>

</details>
