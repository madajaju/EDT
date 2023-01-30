---
layout: posts
title: "the Rebirth of the Private Cloud"
number: 94
permalink: episode-EDT94
has_children: false
parent: Episodes
nav_order: 94
tags:
    - Hybrid Cloud
    - Micro Cloud
    - Private Cloud
    - Cloud
    - Verge.io

date: 2022-07-07
guests:
    - Darren W Pulsipher
    - Greg Campbell

img: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect, Intel, discusses Verge.io’s software-defined data centers that simplify IT and make private cloud easy and efficient with Verge.io’s CTO, Greg Campbell. "
---

{% include soundcloud.html id="edt94" title="#94 the Rebirth of the Private Cloud" %}

{% include youtube.html id="uXcMwwV8Xho" %}

---

Greg started coding on the Commodore 64 when he was a kid and had never quit. He has worked on everything from 3D gaming engines to communications to database engines, web servers, and encryption. He developed interoperable communications software and hardware solutions for first responders after problems surfaced during 9/11. For example, police couldn’t talk to the fire department because everyone was on different systems.

After a successful exit from that company, he started a new company to build a vertical search engine from scratch. He quickly realized the hard part was not the search engine or algorithms but infrastructure issues. He found that too much of the code was specific to hardware, and an abstraction layer was missing. This was the basis for what became Yottabyte, his company that started off solving the storage problem by putting together inexpensive drives and presenting it as a simplified platform for which you could write software without having to worry about what was under the hood. His vision then expanded to include computing, memory, and networking. Yottabyte recently became Verge.io.

Verge.io's success is that everything was developed from scratch, even designing their programming language and writing their database engines so the software would do everything. It is not tied to any specific piece of hardware. The goal was simplicity: it’s not just a bunch of pieces stitched together to make a singular private cloud but an entire virtualized data center.

This lends reliability and security, as there are, for example, seamless updates, no dependency on specific hardware, and fewer vulnerable entry points. In addition, the target users of the system are IT generalists, not SAN experts or programmers.

The Verge.io platform gives the same experience that a customer might get from a public cloud: simplicity, self-service, and agility, but it has a considerable cost and a data gravity benefit. You are paying for things like IOP or egress with a public cloud. Many little prices start to add up, and you can become accountable to the ecosystem. Conversely, you can run Verge.io software, for example, on bare metal servers for cost savings and the ability to scale up or down quickly.  In a public cloud, you also give up a lot of control. With a private cloud, you keep your data closer to where it is being generated and can operate efficiently at the edge.

Part of the reason service providers choose Verge.io is that they can manage their customers’ workloads without giving up the cost margin and reducing complications of moving them to the public cloud.

Other customers’ needs are met because they can accomplish things that are very difficult to do with other software. For example, the University of Michigan has found vastly improved efficiency and ease of use. They have thousands of researchers, and when they get grant money, they need an environment that is HIPAA or CUI compliant. Before, every request required six to nine months to get the hardware deployed, installed, and certified. Verge.io has built an environment, and getting up and running is as simple as hitting a button. The user is handed a virtual enclave that is fully compliant and very secure because the enclave is encapsulated and isolated.

Another benefit is that Verge.io’s snapshotting has built-in business continuity and disaster recovery. You can pick up the snapshot and move it to completely different hardware architecture, and it will work the same. The way the snapshotting works allows for a clone copy, even if it’s ten petabytes, in under 30 milliseconds.

Because the data center can now easily migrate to clouds or a colocation center, business owners have a lot more flexibility in negotiating the price and performance of hardware. In addition, there is no downtime for hardware upgrades or refresh cycles. The system never shuts down.

One of the following areas for Verge.io is expanding into building out multi-cloud aggregation software with benefits such as a centralized management pane. 






<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, thisis Darren Pulsipher, chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing.</p>
<p>Digital Transformation,where we investigate effectivechange, leveraging people.</p>
<p>Process and technology.</p>
<p>On today's episode, The Rebirthof the Private Cloud with CTO of Verge.io.</p>
<p>Greg Campbell.</p>
<p>Craig, welcome to the show.</p>
<p>Thank you, Darren Good to be here.</p>
<p>We had an opportunity to talkabout a month ago is when we first talked.</p>
<p>I was enamored with with your teamand what you've done.</p>
<p>Greg tell my audiencea little bit about yourselfand why you are where you are.</p>
<p>Sure.</p>
<p>So I'm a I've been developing softwaresince I was a kid.</p>
<p>And the Commodore 64 days and.</p>
<p>Oh yeah, never stopped coding.</p>
<p>It was a daily thing. Since thenworked a lot of differentprojects from, you know, 3Dgaming engines to communications databaseengines and web servers and encryptionand all sorts of different things.</p>
<p>I was working in some write in publicsafety softwareand I rode one in computer,aided dispatch,then broke off and started my own company.</p>
<p>And it was I wrote some interoperablecommunication software.</p>
<p>So can solving some of the problemsthat were exposed during 911 where policecan't talk to fire, can't talk to you,everyone is different radiosystems, different communication methodsand none of them can talk to each other.</p>
<p>So I came up with a softwareand hardware solution to solvethat problem and built that company upand the head of successful exit with that.</p>
<p>And after that, I worked for the company,the Boss, for a couple of yearsand did some other things with them,parking systems and fire truck systems.</p>
<p>And, and then I started another companyafter thatwith the goal of buildinga vertical search engine from scratch.</p>
<p>And so this was probably 2008 ish.</p>
<p>And when it started that one andit was it was a really interesting projectbecause, you know,</p>
<p>I go into this thinking,you know, the search engineand the algorithms and theand all that's going to be the hard part.</p>
<p>Right.</p>
<p>And it ended up 80%of my time was spent with everything.</p>
<p>Other than that.</p>
<p>It wasit was really this infrastructure problem.</p>
<p>And, you know, it's you know,you got billions and billions of recordsthat you need to search,you know, to get millions of results,thousands and simultaneously eachget coming back in a quarter millisecond.</p>
<p>And, you know, you can't buy a big enoughserver to do that.</p>
<p>So you need lots of servers.</p>
<p>And I kind of found myself backlooking at, you know,think of your PC days and and whatthe hardware abstraction layerdid to development, you know,and it was kind of like,you know, we're missing that here.</p>
<p>I'm findingtoo much of my code is very specificto do the hardware together.</p>
<p>And and, you know, there really needsto be some form of abstraction.</p>
<p>Right.</p>
<p>And so, again,instead of giving some of the base ideasand, you know, I spent so much timebuilding, stitching, storage togetherand, you know, tothe traditional span and thepurchase at that time, justit doesn't work well in this sort of,you know, applications, large scale thing.</p>
<p>And and at the time and, you know, Googleor anybody else had been doing this,a lot of that stuff is very proprietary.</p>
<p>There's justthere weren't a lot of good tools.</p>
<p>So they gave the idea forat the time what became the right.</p>
<p>So started a company out of rightand really started offfocusing on the storage problem,being able to just take a bunch ofinexpensive drives, throw themin some chassis, stitching together bits,but really with the goalof presenting it all as one thing.</p>
<p>So I can,</p>
<p>I can write software to this one thingand not worry about what was underneaththe hood.</p>
<p>And I had this vision of expandingupon past that to includecomputing, memory and networkingand kind of all of that.</p>
<p>And that kind of gave birth to the device,which more recently became Virgil.</p>
<p>So it's really interestingbecause I got a demo of</p>
<p>You Ought to Buy It back in 2009</p>
<p>I think at supercomputing.</p>
<p>Yeah.</p>
<p>And I was blown awaywith your architecture and I thought,hey, this is a company to, to, to look at,especially in the high performancecomputing realmwhere data was just joint and everything.</p>
<p>And you guys had a,a way of addressing a Yahoo!</p>
<p>Bite of data.</p>
<p>I mean, no one was doing thatat that time.</p>
<p>It was I was just like blown away.</p>
<p>And then, you know,</p>
<p>I find you guys as Virgil.</p>
<p>Oh, you're still around. It's awesome.</p>
<p>Yeah, yeah, yeah.</p>
<p>The company name was the Idevice.</p>
<p>So it, you know, when I was architectingthe design for, I'm like, well,it has to be able to addressa array of storage, otherwisewe can't be called that. Yeah.</p>
<p>No. What I foundcompelling with, with, with you guys isyou extendedbeyond the software defined storage.</p>
<p>And you frankly,you guys were one of the first onesthat did software defined storage.</p>
<p>No one was even talking about itback in that time.</p>
<p>And you guys really kindof blazed the way for that.</p>
<p>And you see other peoplethat have done software defined storagenow, but back in that day,</p>
<p>I mean, no one was talking about it.</p>
<p>But you found really quickly that you alsoneeded compute and network as well.</p>
<p>You couldn't just do one.</p>
<p>One of the pillars of softwaredefined infrastructure.</p>
<p>Right.</p>
<p>And really the key here is that,you know, even even today,when when people are solvingthese problems, it'sthey're still taking a bunch of thingsand trying to stitch them together,make them work together.</p>
<p>Right.</p>
<p>And so it's millions of lines of codeacross all sorts of differentcomponents thatthat weren't necessarily designedto do what they are now.</p>
<p>They're more general purpose componentsthat were, you know, like Lego boxesand trying to figure it all together here.</p>
<p>And, you know, when I designed the storagelayer, it it was builtfor this purpose.</p>
<p>I brought,you know, file system from scratch.</p>
<p>We wrote,</p>
<p>I mean, to pull this off, we actuallywe designed our own programing language.</p>
<p>We wrote our own databaseengines from scratch.</p>
<p>We have our own web servers from scratch.</p>
<p>We have our ownmesh network networking fabricto connect things together.</p>
<p>We went into the development of thiswith the golden rulethat hardware is going to fail.</p>
<p>And, you know,and we have to expect the worst of it.</p>
<p>And, you know, we're not tying it inany specific piece of hardwareso thatthe software needs to do everything.</p>
<p>And we'vewe've you know, a lot of the developmentwas just going through all the differentspectacular ways that that hardware canfail from, you know, bad firmware update.</p>
<p>Well, as a hardware vendor,hardware never fails.</p>
<p>I don't know what you're talking about,</p>
<p>Greg.</p>
<p>Hardware spending drives,they never go out.</p>
<p>So, you know,so simplicity was really the key.</p>
<p>It was I. Like that.</p>
<p>Going down to the lowest level of buildingjust what we need just for thispurpose of good with, you know,and our ultimate goal was to build virtualvirtualized the entire data center.</p>
<p>So it's not just a bunch of piecesthat stitch togetherto make a singular private cloud.</p>
<p>It was you know, we were looking atmuch the same wayyou go into VMware and Head Start,you run AVM.</p>
<p>We wanted to be able to goin, assign resources, hit startand a virtual data downstairs.</p>
<p>I was right there when OpenStack started,which was a big group of private oropen sourceprojects, just crammed togetherand said,</p>
<p>All right guys, make it all look like one.</p>
<p>And all I did was put lipstick on it.</p>
<p>Basically they just put a nice</p>
<p>UI on the front end, but on the back endit was a bear to stand up.</p>
<p>It was.</p>
<p>And yeah.</p>
<p>And VMware is the same way, right?</p>
<p>It grew over timewhere they were stitchingindividual products together.</p>
<p>So your your approach was top downvirtualized full data center, notjust a hypervisor, not juststorage, not just network,but the whole thing together.</p>
<p>Absolutely.</p>
<p>Yeah.</p>
<p>It's it's one thing toto present a simplified user interface,a simplified user experience,which is what we see.</p>
<p>But if if everything underneaththat is not simple,you're going to have a problem.</p>
<p>It might work when everything is perfect,but as soon asthe world starts to fall apart,it will power failure.</p>
<p>You've got a hardware failure.</p>
<p>You've got it.</p>
<p>You know, one key component got updatedwhen a different one didn't get updated.</p>
<p>I mean, there's all sorts of thingsthat that happened.</p>
<p>And even outside of the reliabilityaspect, youthere's countless security issuesthat can come into playwhen you have all these different thingsthat weren't necessarilydesigned to be togetherand then you interface them together.</p>
<p>You know, I like to, you know,look at it like like a house versusa neighborhood or a city.</p>
<p>And it's, you know, if everything'sin the same house, I don't needas many windows and doors and, you know,entry points.</p>
<p>Right.</p>
<p>And this was all built from the ground upfor this purpose.</p>
<p>It's simple.</p>
<p>At the lowest level, you know,which means, you know,less security issues,seamless updates and upgrades.</p>
<p>I mean, we would treat it like a firmware.</p>
<p>It's it's very, very lightweight,you know, andit's in it does a lot for,you know, the reliability aspects,especially, again, you know, with us,you go on the roadassuming everything's going to failand the softwareneeds to take care of everything.</p>
<p>But it's it's a it's a huge difference,you know, fromfrom a supporting aspectand and even just the management aspect.</p>
<p>So our our goal has always been that,you know, the targetusers of this system are it generalist.</p>
<p>We don't need network experts,we don't need sand experts.</p>
<p>We don't need programmers,you know, to operate this.</p>
<p>It's an IP generalist.</p>
<p>And and we agreed we succeeded at that.</p>
<p>So I have a question around that.</p>
<p>I mean, most people listening to the showare moving to public cloud.</p>
<p>So why why would I even do a private cloudwith you guys over public cloud?</p>
<p>What are the benefits that you guys seewith a private cloud over a public cloud?</p>
<p>Yeah,there's there's a lot of lot of scenarios.</p>
<p>I'm not going to saythat you should never go to public cloudis never a use case for thatthey're actually is.</p>
<p>But I think what we've seenis that a lot ofpeople moved to the public cloud,maybe for the wrong reasons.</p>
<p>You know, it's they saw that simplicity.</p>
<p>And a lot of the moves happenedbecause of developers and developers,you know, getting along with i.t and yeah.</p>
<p>Shadow i.t. Right.</p>
<p>Yeah.</p>
<p>You go through all the red tapeand hurdles and it's like, well,wait a minute, I could just pop in a yearand I don't need a 90 staffand it didn't just workand I can manage it myself.</p>
<p>And that was kind of the wrong reasonto go to the public cloud.</p>
<p>And because at the time the managementand just the stitching together,the complexity made it too big of a deal.</p>
<p>If I needed more resources, I go to I.T.and it's like Iwait 16, 20 months for them tocome inand I go, so, you know,we are presenting it in suchwe're giving you that same experiencethat you might get from a public cloud.</p>
<p>In that simplicity, the self-service, the,you know, the agility.</p>
<p>So I can now go to it and say, hey,</p>
<p>I need an environment.</p>
<p>And within seconds,you know, here's your resources. Go.</p>
<p>And then either I can manage thator they can hand me the keys and say, Hereyou go, here'syour private, secure enclave.</p>
<p>Do whatever you want with it.</p>
<p>Self management you want to keep askingto retain my new VM.</p>
<p>I restrain your resources,do what you wantand and then I'm not paying</p>
<p>I'm not being nickel dimed onevery little piece of when I'm operating.</p>
<p>I'm not paying per eye app anymore.</p>
<p>I'm not paying for egress andand everything else,you know.</p>
<p>So there's a huge cost benefit there.</p>
<p>There's also,you know, a data gravity problem as well.</p>
<p>You know, a lot of people,if you move a lot to the cloudand then you realize how much morenow you're relying on networksand just where is my data stored versuswhere I need it, you know?</p>
<p>So having a private cloud, you know,it keeps thingscloser to wherethe data is being generated.</p>
<p>I think, you know, we throughoutcomputing time, if we see a lot of thisthis ebb and flow from,you know, client server modelsto, you know,back to sick and,you know,the pendulum has swung keeps swinging.</p>
<p>Right.</p>
<p>And I think, you know, we're generatingso much datain general across the board at the edgethat we're going to startto see a lot more.</p>
<p>That needs to be closer to wherewhere the data is being generatedin the cloud is not necessarilythe best place for that.</p>
<p>You know, there's only so fast we can go.</p>
<p>Physics can only allow things to goso quick.</p>
<p>So if we can get that same agility,security, everything,all the benefitsthat you see, all the public cloud,but we can allow you to run that,operate it at the edge and not have tohire a team of fees to operate it.</p>
<p>You know,we believe that that's a huge benefit.</p>
<p>All right.</p>
<p>So so the reason people movedwas ease of use, mostly developers.</p>
<p>I was I was totally guilty of that myself.</p>
<p>Right. Credit card.</p>
<p>I can spin up 10,000. Easy.</p>
<p>It's easy.</p>
<p>So what?</p>
<p>So you've you've tackled the easy part,right?</p>
<p>I could do it on the other onethat you mentioned was cost.</p>
<p>Now a lot of people will say, well, look,</p>
<p>I am a no CapEx cost at the beginningof when I use the cloud, right?</p>
<p>I can spin up a thousand instancesand it's only going to cost me$10 for an hour.</p>
<p>I can't I can't have a thousand boxessitting in my datacenterright at that cost.</p>
<p>But the cost is exorbitant over time.</p>
<p>And you mentioned egress.</p>
<p>This is a big, huge problemthat a lot of my customers run into.</p>
<p>They're like, I had no ideaegress costs was going to just kill me.</p>
<p>Right.</p>
<p>And it ingress is free,right?</p>
<p>You bring your data to me, right?</p>
<p>Bring it on.</p>
<p>So you guys kind of you can handle thatbecause you can stitch togetherlots of data sources together up to a Yodaby the data.</p>
<p>I'm just mind blowing still. Butso yeah.</p>
<p>So the cost is, is,is that why you're seeing people come backfrom public cloud back to private?</p>
<p>The costthe cost is absolutely a big component.</p>
<p>I think, you know, same sameyour opening a credit card at 50bucks a month,you don't think too much of it.</p>
<p>And then all of a sudden,you know, things start to scale out.</p>
<p>You go to productionand all those little costs that added upto a little before are now,you know, they're harder to predict.</p>
<p>And it's very, very easy for those coststo get out of hand.</p>
<p>And at that point,you're also kind of stuck.</p>
<p>I mean, the more you get pulled into an ecosystem, it'sthat much harder to get out.</p>
<p>You kind of hold them at that point,you know, and you'regiving up a lot of control as well.</p>
<p>I mean, you know,unless you're a huge company, you know,you have a problem or something,something is going on in that environment.</p>
<p>I mean, you can call, butyou kind of just you got to wait.</p>
<p>You know, there's not too much you can do.</p>
<p>You have a lot of control over,you know, issues that might pop up.</p>
<p>And there's there'sthere's a lot more options.</p>
<p>Now, I think that people don't realizeit's not it's not just about,you know, hey, I got to go buy,you know, make it this large cap ex,you know, it's expenditureto build out a data center with AC units.</p>
<p>And yes, that's an option.</p>
<p>And for a lot of people, that makes senseif you have enough volume.</p>
<p>But there is other alternatives as well.</p>
<p>I mean, you know, it'syou can go and get rents out baremetal servers, for example, and still say,</p>
<p>I don't want to deal with hardware.</p>
<p>I don't want to swap drives,</p>
<p>I don't want to do any of that.</p>
<p>You go rent out baremetal hardware for a fraction of the costof what a public cloudmight get to throw our software on it.</p>
<p>And now you have ayou have to have a build your own,you know.</p>
<p>Right. And it's to whatever scale.</p>
<p>Ep and Flow Scale out, scale up, scale down.</p>
<p>And it works ina, in a wide variety of commodity hardware.</p>
<p>So very, very important.</p>
<p>When you guys are out thereselling your solution,what's the big hook? What are people like?</p>
<p>Hey, I need your stuffbecause what's what's their concern?</p>
<p>What problem are you solvingthat, that they migrate to you guys?</p>
<p>So there's yeah, there's a couple,a couple of angles, you know, one,we have a lot of service providersthat, you know, they'rethey have a customer base that they needto manage their workloads for them.</p>
<p>They traditional onlywhere they used to do itthe old way they would you knowget co-location space filled out you know,sans and virtualization of the allowsi.t staff to manage them and run them.</p>
<p>Then they started to see the public clouderode some of that,some of their customers movingtheir others having to try to embrace itand say, okay, we'll put you there too.</p>
<p>But then, you know, they give up a ton ofmargin as well when they want to do that.</p>
<p>So we're able to go to them and say, hey,now we canwe can give you the similar experiencethat they were going to get.</p>
<p>You get the same ease of of whatit would have been managing in public.</p>
<p>I don't have to do a dealwith what you were doing before.</p>
<p>I imagine that it's just as easy,it's more powerful,and you get to make more money.</p>
<p>Right.</p>
<p>So that's that's one,you know, subset of the people that that,you know, deployedas we're also seeing some use casesthat that are just very difficultto even do with other software.</p>
<p>And so our our nested tenancy modeland what we do on thestorage for deduplication andit's at the lowest levels ofa file system enablesyou to do some really cool stuff.</p>
<p>So one of these cases,for example, University of Michiganis a very large customer of ours.</p>
<p>They have a very large on prem deployment,you know, thousandsof cores, petabytes of data running.</p>
<p>And they do a lot of researchprojects off of this.</p>
<p>So this was a scenario where, you know,when we take this off,they came to us, hey,we got thousands of researchers.</p>
<p>They get a they get grant money.</p>
<p>They need an environment.</p>
<p>It needs to be, you know, hyper compliantor full C UI compliant.</p>
<p>C every time they ask forthis, it's 6 to 9 monthsto get hardware deployed, install it,certify it, go through the whole process.</p>
<p>Right?</p>
<p>And what we were able to do is go in thereand build out this environmentand now anytimesomebody wants an environment,they hit a button, it createsa virtual enclave, they hand it to them.</p>
<p>It's already compliant,full certification, ready to go.</p>
<p>And within minutesthey're they're up and running. Now,these are allcompletely encapsulated in isolated,a very, very secure enclave.</p>
<p>And you can get thisthis nested tenancy model.</p>
<p>So in a larger organization like that,</p>
<p>I can say,all right, here'swhat I'm going to carve out resources.</p>
<p>You're getting.</p>
<p>They allocate hardware to specific groups.</p>
<p>Yeah, I've seen that.</p>
<p>And then I. Yeah.</p>
<p>Headed to the hospitalnow they could have their own i.t staffmanaging that environment and carving upand say, okay, here's this researchor here's test versus dev versus,you know, production.</p>
<p>I could then say in with our snapshot.</p>
<p>And so we're not just looking at storage.</p>
<p>This isn't just snapshots of your VMs,it's all of your networking,all your user management here,because we manage the entire stack,you literally can take our software,put it in bare metal, plug your carriers,and we run everything</p>
<p>BGP, the 32 DNS,all your firewall and rails you're.</p>
<p>So this is really interestingbecause you mention I'm snapshotin my data center</p>
<p>I'm a snapshot of a VM or set of VMs.</p>
<p>So this is really interestingbecause what this</p>
<p>I my brain is like going, wait, I could doa lot of really interesting things.</p>
<p>Like you mentioned, I have a, a snapshot,a data center that's HIPA compliant. Wow.</p>
<p>Right.</p>
<p>Drop a new one in. I'm done. Right.</p>
<p>Or I need a snapshotof my running environment.</p>
<p>I have a business continuity and disasterrecovery built in.</p>
<p>Is that right?</p>
<p>Absolutely. Absolutely.</p>
<p>And it's and it's this snapshotof an encapsulated virtual representation,meaning I can now pick this up,move it over to a completely differenthardware architecture, different switches,different every different.</p>
<p>Doesn't matter what the. Hardware.</p>
<p>And it's still going to work exactlythe way it did when it was over there,which, you know, has been done.</p>
<p>It means,hey, we got this issue in production,okay, well, instead of having to try toreproduce it, you know. Just snapshot.</p>
<p>In order.</p>
<p>Yeah, it's just boom, fired up now is theexact isolated version of production.</p>
<p>Or, you know,you get ransomware, it goes through it.</p>
<p>It's like</p>
<p>Yeah therethere's so many applications by.</p>
<p>Our, you know, snapshot someday.</p>
<p>Yeah, not now.</p>
<p>I mean, that's a that's a good question.</p>
<p>You said our by our snapshots,</p>
<p>I mean, how big are these snapshots?</p>
<p>How muchspace are these taking up?</p>
<p>There's purely the differentialsthe way our files.</p>
<p>Oh, so you'reyou only snapshot in the differences.</p>
<p>Yeah. And there's more to it than that.</p>
<p>So the, the engine under the hood,this is not deduplicationadded on to an existing file system,which is the kind of thingyou see out there or even snapshotsa lot of times are, you know,there's some file systems that might havesome snapshots built into them.</p>
<p>But we are we're not only takinga lot of snapshots, it'syou're you're looking up thedifferentials in the data,but there's still metadata.</p>
<p>And a lot of times, you know,even if I want to take a snapshotor take a cloneor a copy of an environment,it's still tapping out the meta dataand meta tables that went with that.</p>
<p>So there's still a little bit of timeto restore or do whateverand extra data that you're using.</p>
<p>Well, our deduplication is builtat such a low level that even the metadatais duplicated, which means I can takea snapshot of this entire environment.</p>
<p>I don't care if it's ten petabytes,</p>
<p>I can make a clone copy of itin under 30 milliseconds.</p>
<p>That's how I. Have it done.</p>
<p>And the differentials for that now areare truly onlywhat has actually changed between the two.</p>
<p>So I can</p>
<p>I could take this graininess or I want,you know, it doesn't have to be hourly.</p>
<p>And not only are we doing thatat the local spec, local cluster level,but we also have a global it's globallyif you do aware.</p>
<p>So if now if I'm taking itand synchronizing it to another location,it's utilizing that same engineto get those differentials.</p>
<p>So even,you know, a lot of even replicationservices still have to walk the meterto say what has changedfrom from A to B and,you know, for small files, not a big deal.</p>
<p>But when you're dealingwith hundreds of terabytes,you know that the metadata aloneand still the expansive datathat have to go across just to do that,whereas we could I could replicatean entire environment in secondspetabytes, you know.</p>
<p>So I changed.</p>
<p>That.</p>
<p>You guys created a virtual cloud.</p>
<p>Yeah, you have to, right?</p>
<p>I mean, when you think about it, right?</p>
<p>Because you're telling methat my data center, my which it's,you know, whatever you want to call it,my data center now can migrate around.</p>
<p>They can go in a public cloud,stay on a private cloud.</p>
<p>I can even drop it, you know,into a co-located co-location center.</p>
<p>So this gives me as a as a business owner,a lot more flexibilityin negotiating priceand performance of hardware.</p>
<p>I can upgrade hardware with with virtuallyno downtime.</p>
<p>I mean.</p>
<p>Yeah, absolutely.</p>
<p>Yeah, it's meant.</p>
<p>To be because I can stand up a new rack.</p>
<p>I yeah.</p>
<p>Yeah I'll provide everything zip in line.</p>
<p>I mean, the system never shuts down.</p>
<p>I mean, you could even go throughyour entire hardware refreshcycles and never have downtime.</p>
<p>That's yeah.</p>
<p>Yeah, absolutely.</p>
<p>And, andbecause the software is so lightweight,it would justit's scaled up and down equally.</p>
<p>So you could scale upto, you know, these large environments,but you could also scale downand run this on a pair of,you know, small, you know, atoms or,you know, intel atoms or the Andes orsomething, you know, put in two of them,real lightweight, couple of grand apiece,throw them in a, you know, in ain a plant or a retail locationand have the entire virtual dataand experience at the edge as well.</p>
<p>Where I can</p>
<p>I could build outthese virtual data centersand then just startdeploying them everywhere and manage them.</p>
<p>You know.</p>
<p>That's pretty cool. I love that you just.</p>
<p>You know, swap it out.</p>
<p>Yeah, that's happening. Micro cloud.</p>
<p>Micro Cloud Tech now.</p>
<p>I mean, this is somethinga lot of my customers want.</p>
<p>They want a micro cloud.</p>
<p>You know, it's a maybe it's a11 unit,a couple of islands or some nookssitting out there running some edge stuff.</p>
<p>But they still want the flexibilityof the private of a cloud like, hey,</p>
<p>I can deploy applications, I can dowhatever I want, right, and manage.</p>
<p>Which brings up another questionand we talked about before,if I haveall these virtual clouds out there,</p>
<p>I'm assuming you have a way of managingmultiple cloudsthen or multiple data centers, right?</p>
<p>Is that in your in your stack to wherehey, maybe I've got ten different datacenter imagesor data center,</p>
<p>I don't know, virtual data centers.</p>
<p>Right.</p>
<p>Can I now manage those as, as, you know,a single pane of glassor anything like that or how does that.</p>
<p>Yeah.</p>
<p>Yeah, you can.</p>
<p>And that's actually now now this nowwe're getting into some road map stuff.</p>
<p>So that that is actuallyone of the next things we are expanding onis we're going to we are building out our,you know, multi-cloud,you know, aggregation softwareto kind of take that to the next level.</p>
<p>We've got some stuff nowyou're part of the issue isyou want a centralized single point.</p>
<p>You know, we're kind of building thisso that the management layer itselfcan also you know, kind of exist in mobilestuff and float aroundso that you truly have never downtime,even the super manager, you know.</p>
<p>So there's a lot of stuffwe're doing in there too.</p>
<p>Also, you know, sexy that up a little bitand that is one of the next big oneswe're reallyworking on right now is the fleshthat we have some capabilitiesnow for for the multi asset management.</p>
<p>But there's a lot we want to add tothat as well.</p>
<p>This is really fascinating stuffbecause to meyou're really you're making it much easierto actually do private cloudbecause I mean, today to deploya full stack of private cloud takes days.</p>
<p>Right.</p>
<p>Whether it's OpenStack andor whether it's the VMware suite.</p>
<p>Well if I want a full of full thing,it, it takes a couple of daysto get everything set up.</p>
<p>And with you guysit sounds like it's much simpler.</p>
<p>I can type all your software inside.</p>
<p>Get it?</p>
<p>Yeah, the software. Yeah.</p>
<p>So the whole software is actually deployedas a firmware.</p>
<p>So it's not it's not something that'sbeing installed, running through updatecycles and configuring files.</p>
<p>It's, it gets flashed as a firmwareand then you booted upand then thereyou have your user interfaceand now you can, you know, in the UIyou can set up your networksand do what you want.</p>
<p>And it really takes about 15 minutesto get it up and running.</p>
<p>And then after that, as you're addingadditional nodes scaling out,you can even have itset up to execute them.</p>
<p>So you don't even haveto put any media. You just.</p>
<p>Execute on.</p>
<p>It. Auto configures itself. You know.</p>
<p>That's that's pretty cool.</p>
<p>Can can because of software or firmwarecan it runon other virtual infrastructurelike in like in the cloud,like in the public cloudor do I need bare metal?</p>
<p>That's going to be the you're goingto get the best bang for the buckif you run it on bare metal.</p>
<p>Even if that's in a public cloud,you know, you can go and get baremetal server.</p>
<p>Yeah, yeah,you can whoever and run it on there.</p>
<p>And that's where you can get the best bangfor your buck because we, we are,we're, we're managing the hardwareat the lowest level for it.</p>
<p>So we're, we're talkingdirectly to the drives.</p>
<p>We're not,you know, when you when you deploy us,we don't we don't want raid cards.</p>
<p>We don't want,you know, anything touching and managing,you know, the storage or the hardware.</p>
<p>We want to talk directly to itand control the whole experience.</p>
<p>So, you know, we're dealing withthe encryption.</p>
<p>We're dealing with, you know, all that rawand silent corruption detection.</p>
<p>We're guaranteeing all that integritythat it's going to happen.</p>
<p>Now, you could certainly layer something,put something below it, butthen you're just doubling up on effortsand kind of taking place, you know, rightthere.</p>
<p>Very, very cool stuff, Greg.</p>
<p>And I'm glad to seethat your byte continues forward.</p>
<p>I, I, you know, I loved your architectureand it's great to see that it's expandingand a very, very well thought out.</p>
<p>So great.</p>
<p>Thanks for coming on the show today.</p>
<p>Oh, thanks.</p>
<p>Thanks for having me there.</p>
<p>Thank you for listening to.</p>
<p>Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcast insider YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationat embracingdigital.org.</p>
<p>Until nexttime, go out and do something wonderful.</p>

</details>
