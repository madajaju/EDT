---
layout: posts
title: "Work in Progress"
number: 0
permalink: episode-EDT0
has_children: false
parent: Episodes
nav_order: 0
tags:

date: 
guests:
    - Darren W Pulsipher

img: TBD
summary: ""
---

{% include soundcloud.html id="edt0" title="#0 Work in Progress" %}

{% include youtube.html id="url" %}

---

Recorded: EDT-121 Deploying Private Clouds

<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople process and technology.</p>
<p>On today's episode,</p>
<p>Disruptive Private Clouds with Aaron</p>
<p>Reid from Verge.io.</p>
<p>Aaron, welcome to the show.</p>
<p>Darren Thanks for having me.</p>
<p>Aaronthis is your second time on the show.</p>
<p>Last time you were on with Chrisand I've also had your CEO on from Verge.</p>
<p>I'm kind of enamored with you guys.</p>
<p>I think you already know this.</p>
<p>I like your approach tovirtualization, to the softwaredefined infrastructure layer.</p>
<p>And you've got some you've got somereally cool stuff you've been working on.</p>
<p>But let's firstbefore we dive into the really cool stuff,let's talk a little bitabout the difference between virtualizingjust VMs and virtualizingyour data centers or that concept thatyou guys have that's so different thanwhat we're seeing in the industry today.</p>
<p>Sure.</p>
<p>You bet. Thanks.</p>
<p>So one of the specialties around videothat we do is</p>
<p>I think you were going to mentionit is our multi tendency and being ableto extract the virtualizationof your resources into tenants.</p>
<p>And what we do with that basicallyis we start with a tenant in the tenant iswhat a lot of people callnested virtualizationand we put thatin a segregated environmentand that starts with zerotrust architecturewhen it comesto the networking side of it.</p>
<p>So you create that sub tenant,it has a zero trust architecture.</p>
<p>People can actually get access to that subtenant until you give them accessthrough the networking ruleswith firewall rules in routing, etc..</p>
<p>Once that set up, you can do thingswith that sub tenant, like you can dounlimited snapshotsacross the entire sub tenant.</p>
<p>You can do you can allocate resourceson demand, CPU, memory, ram and storage.</p>
<p>So for example,if I start with a sub tenantfor one of my end users or a group,say a research group for example,and they say we need 24 coresand 48 gigabytes of memoryand five terabytes of all flashstorage later on down the road.</p>
<p>As they're going through their testing,they may come back and say,</p>
<p>Well,now we need ten terabytes of storage.</p>
<p>I can easily and dynamicallyallocate that storage out to that tenantfor them to use.</p>
<p>It's all non disruptive.</p>
<p>It's just a matter of on demand.</p>
<p>Well, I have the storage in the back end.</p>
<p>I allocated up to my tenantfrom the back side.</p>
<p>Do they have access to it now?</p>
<p>No. Also, you do more than justbecause that sounds like,</p>
<p>Oh, that's just one VM,but that's not one VM.</p>
<p>A tenant can have multiple VMs and networkconfigurations, all of that.</p>
<p>Is that correct?</p>
<p>Yeah, absolutely.</p>
<p>It's it's just like a if youyou know, we like to call ita virtual data center, quote unquote.</p>
<p>But it's the same thing almost asif you were to go to a public cloudand say you wanted tosee a VPC, a virtual private cloud,or you went to a juryand you wanted a security group.</p>
<p>It's the exact same thing.</p>
<p>A tenant is a whole infrastructureconstruct where you can go up and spin up</p>
<p>VMs, you can create networks,and then you can protect it withsnapshots,unlimited snapshots of replication.</p>
<p>So we can take those tenantsand replicate them to other sites, etc..</p>
<p>So that means I have portabilityof that tenant,which to me this is actually pretty coolbecause I can createa full blown data centerwith hundreds of a virtual machines,several different networks.</p>
<p>I can do all that.</p>
<p>Snapshot it and do D.R.</p>
<p>Absolutely. Yep.</p>
<p>Or even even better business continuityas well.</p>
<p>Right.</p>
<p>You can do PR, you can dobusiness continuity.</p>
<p>You can even templated those tenants.</p>
<p>So, for example,maybe I have a testing environment and</p>
<p>I want to make a clone of thattesting environment for another group.</p>
<p>Maybe I'm moving it from Dev to testthe key way.</p>
<p>I can literally take that tenant.</p>
<p>It might have an applicationstack of 20 VMs in it.</p>
<p>I can do a snapshot and clone it offwithin seconds and then providethat as another environmentfor someone else to test on.</p>
<p>Oh, my brainjust went in crazy directions.</p>
<p>So which happens a lot.</p>
<p>People that listen to the showknow this about me already.</p>
<p>That means I could actually setup a hyper compliant tenantthat has</p>
<p>VMs that are running, that are doinglogging and all the protections I needed,maybe even have in there, and Identity</p>
<p>Access Management tool, all that.</p>
<p>I could have all that in one tenant andthen I can deploy that wherever I want.</p>
<p>Yes, exactly.</p>
<p>So from a health careservice provider, for example,one of the big conglomerateslike Sutter Health, whomy friend is a lawyer down there,so I'm going to pick on them a little bit.</p>
<p>If I have all these small businessesthat I've been acquiring and say,</p>
<p>Hey, we need to make sure you're HIPAcompliant, boom, doneright, I could drop a tenant on themand they can start addingtheir own VMs to it and and done.</p>
<p>Yeah, they can build into that tenantwith new greenfield VMsand or if they already have an environmentwith like ayou know, their own infrastructurethat's already built up,they can move their,their VMs into that tenant as well.</p>
<p>And then like you said, it's already</p>
<p>HIPA compliant.</p>
<p>Yeah. So I can say this is cool too.</p>
<p>I can migrate from other VMs into thisnew environment and now I'm compliant.</p>
<p>Yeah, absolutely.</p>
<p>And we can migrate offthe major virtualizationvendors in the market today</p>
<p>VMware, Hyper-V, IQVIA, you name it,and we can pull themright into our environment.</p>
<p>This is super, super cool.</p>
<p>And that's why I'm enamored with you guys,because every time I talk to you,</p>
<p>I learn something new thatnow I'm thinking of my customers.</p>
<p>What can I do for them?</p>
<p>There's lots of really coolthings I can do for them.</p>
<p>Yeah, we just had an examplethe other day</p>
<p>I created a videobecause we have a customerthat we're talking to right nowand they're on Hyper-Vin their environmentand they want to be able to migratefrom Hyper-V into view as well.</p>
<p>What's that process look like?</p>
<p>So I created a video forum.</p>
<p>It's not up on our website yet,but I can share it with you guys.</p>
<p>But literally the video walks throughhow you go inand you look at your Hyper-V VMsbecause Hyper-V is usedin a lot of smaller shopsthat put professional, you know, kind ofsmall to medium sized shopsand buta lot of customers are startingto move off of thatbecause they're not surewhich direction they're going to go.</p>
<p>And so what we enable them to dois literally take their VMs.</p>
<p>All you have to do is turn off of the,import it into our environmentand then turn it back onand it's up and running.</p>
<p>So pretty, pretty straightforward.</p>
<p>The only time it takes is probablyjust moving it from one environmentto the other, right?</p>
<p>Moving the the definition can rememberwhat they're called.</p>
<p>I used to know this.</p>
<p>Oh no, it's the hyper IBM'sor for any IBM for that matter.</p>
<p>You're spot on.</p>
<p>It's just a matter of the timeit takes to take that VM file.</p>
<p>VMware, they call it a</p>
<p>Hyper-V, they call it a vehicleand move it across the pipe.</p>
<p>So the bigger the pipe you have, it'sa one gig, five or ten gig or 25 pipe.</p>
<p>It moves that much faster.</p>
<p>Wow. Well, so that that's pretty simple.</p>
<p>Now, what about moving?</p>
<p>Because all the cloud service providersare all running virtualization techniques.</p>
<p>And, you know, obviously, Microsoftis running Hyper-V on their cloud.</p>
<p>Right.</p>
<p>And I can't remember NWC.</p>
<p>I think is running Zen Tanium.</p>
<p>Q Yeah, yeah, yeah.</p>
<p>So can I take can I snapshot somethingout of out of the public cloudand pull into a private cloudthis way or not?</p>
<p>Well, you would have to be able to exportone of your instances,depending if it's software as a service.</p>
<p>We probably couldn't do that nativelybecause software as a service runsas our own services in our cloud.</p>
<p>But if it's an instance VM,if you're backing upthat instance, you could back it upand restore it in our environment.</p>
<p>I don't know though,if you could do just a nativecopy from one cloud to the next.</p>
<p>Gotcha.</p>
<p>But there might be a past there that I can</p>
<p>I can explore to do to repatriate.</p>
<p>Maybe even some workloads are runningin the in the public cloud.</p>
<p>Oh, yeah, absolutely.</p>
<p>We have customers doing that todayand a lot of times they do.</p>
<p>That isthey don't have to really rebuild so much.</p>
<p>If it's running on a standard instance,like if it's on the boot to Linux instanceor a Windows instance or a S.O.</p>
<p>US instance,they can literally just build a VMsin our environmentand move their applications overpretty quick.</p>
<p>All right.</p>
<p>Well, so this gives me a migration path.</p>
<p>Snapshot Capability</p>
<p>Replication Template.</p>
<p>It sounds like to methis is what I'm looking for in a softwaredefined infrastructure layer.</p>
<p>And Iknow we're working with some customerstogether on this stuffand then you pulled out this crazy ideabecause I think you heard metalk about it once and you pulled outand you went and bought two nooks.</p>
<p>Thank you, by the way, for buying</p>
<p>Intel Silicon, I have to say, you know,</p>
<p>But you bought.</p>
<p>Your own great two there fast.</p>
<p>Yeah. Yeah.</p>
<p>Two of our nooks and you.</p>
<p>And you created a mini cluster.</p>
<p>So tell me a little bit about the processin doing that.</p>
<p>Yeah, you bet.</p>
<p>Can you see the two knocks on the screen?</p>
<p>Absolutely. Okay, perfect.</p>
<p>I forget the actual namebrand of the books, but they are</p>
<p>I believe they're generation 12until looks.</p>
<p>And basicallywhat I did is for our environment,when we want to cluster,we need a minimum of two nodes.</p>
<p>So I had to get to Nooks.</p>
<p>And then if you lookat the back of the bottom picture,where it has the red cablecoming out the back of the two nooks,both of these nooks are dual ported.</p>
<p>There are 2.5 gigabit network connections.</p>
<p>That red cablebasically goes from Nook eight and Nook Band that's our core networkfor voice and technology.</p>
<p>And we replicate all the data across that.</p>
<p>And what that provides for the enduser is high availability and a very tiny,small footprint.</p>
<p>So one of those lookscan completely go down.</p>
<p>Someone could step on it,or maybe you're doing maintenance on itor maybe the power goes out on that noteand the other nook stays up and runningand you have completely spilloverand that other nut.</p>
<p>In fact,you could if it's aif it's a cold like outage,where they take the nook comes offlineby, you know, getting unpluggedor maybe there's a flood or something,but the other are still uponline and running.</p>
<p>You can literally just restartyour VMs on the secondary nookand they'll come right up.</p>
<p>So, yep, and then what that doesis we basically replicate the storagebetween both those nooks.</p>
<p>The cool story about thisthough, is, is now we can take all the VMsin the infrastructurerunning on those nooks, the networking,the storage, and we can replicate thatto maybe a centralized data centerwhere we have multiplesets of these clustered nooksrunning in different environments,maybe like a point of sale environmentwhere they're all replicatingto a single data center.</p>
<p>So if I ever need to protect the datathat's on those books,</p>
<p>I have them protected,and that's all built into our software.</p>
<p>All right.</p>
<p>So so this is really interestingbecause what what I just heard,and correct me if I'm wrong, is</p>
<p>I can build out an environmenton these on these nooks,or I could build it in the data center,and then I can replicateit down to the nooks.</p>
<p>Yes. Soyou kind of stepped aheadand I was going to get there next.</p>
<p>But you can do it both directionsbecause we have bi directional replicationand we can replicatethe snapshots of the VMs.</p>
<p>We can now take those VMsand we can replicate those upto the central data centerand or you could takemaybe you're doing updates on your buildsfor all your remote sitesand you want to push it downto your remote sites.</p>
<p>You can now do that with replicationwhere you push it downto those remote sitesand you basicallybring those new builds up there.</p>
<p>But it's not just it's not just the VMs,it's the network configuration access.</p>
<p>It's everything all in a nice bundle,right?</p>
<p>Yep, absolutely.</p>
<p>Including storage. So all that.</p>
<p>So this is this is pretty cool becausewhat you produce, what I can see is</p>
<p>I can tie this into my dev ops pipelinewhere I'm building.</p>
<p>For example,these two nooks can go into a store.</p>
<p>Right.</p>
<p>Let's say I have 1500 storesthroughout the nation.</p>
<p>Right.</p>
<p>And they need to be runautonomously disconnected at times.</p>
<p>I could easily,in my DevOps pipeline say, here'sthe new updateto my environment that I needand then push that out across all 1500.</p>
<p>Yeah, absolutely. Okay.</p>
<p>That is slickbecause all the network to eventhe networks can all be inside the networkall identical to each other.</p>
<p>Right.</p>
<p>Without any, without any problems. Right.</p>
<p>Absolutely.</p>
<p>And the other cool thing about ittoo, is now I can take thatthose are replicationis basically it's when optimized.</p>
<p>And so we have deduplicationbuilt into our replication.</p>
<p>So whenever we push that data down to thisremote nooks,we're only sending out the, the datathat's duplicated and or changes, right?</p>
<p>We're not having to send outa whole entire footprint.</p>
<p>So if I have a VM, multiple</p>
<p>VMs running in on these two nooks,then I have to update.</p>
<p>It's not going to have to go throughand rewritethe entire footprint of maybe a terabyteor two terabytes of storage.</p>
<p>It'll only rewrite the changesand send that down.</p>
<p>So that that to me is super cool, right?</p>
<p>I mean, because I may not havegreat connectivity on those remote sites.</p>
<p>That's right. Exactly.</p>
<p>That's what I was getting at. Yep.</p>
<p>That's true.</p>
<p>All right.</p>
<p>So the big question I have know, I thinksome of our listeners have as well as.</p>
<p>All right, these two nooks,how much memory are in these in thesethat you're showing here?</p>
<p>Yeah.</p>
<p>So these two nooks,they can support up to 64 gigabytes each.</p>
<p>They basically use those 244pin DIMMs laptop, DIMMs.</p>
<p>And right now</p>
<p>I have 216 gigabit DIMMs in each of them.</p>
<p>So I have each one of these bookshas 32 gigabytes,but you can get them up to 64 gigabytesbecause it has to dimm slots.</p>
<p>All right.</p>
<p>So there's a total a 64gig is what you have on there.</p>
<p>And storagein storage right now,</p>
<p>I have two terabytes of a set of flashthat's basically two twoterabyte SSDs that are drives.</p>
<p>And then I have one terabyte in the flash.</p>
<p>So if I need anything that's real highperformance and I can fit it in there.</p>
<p>Yeah, it has the two drives,there's one terabyte in each system.</p>
<p>Oh wow. All right.</p>
<p>So have you, have you, have youdone some performance testing on this?</p>
<p>Have you like run it through its courses.</p>
<p>Can you make it typically. Oh yeah.</p>
<p>The performance is actually prettyunbelievable on these nooksit comes close to in thismight not to try to downsize it at allbut it comes close to running performancetests like on a local map.</p>
<p>And what I mean bythat is the performance is lights outwhen I do things like performancetesting to see my IOPS going in and outand my throughput going in and out,</p>
<p>It's super fastconsidering it'sjust running on two small looks.</p>
<p>That's incredible.</p>
<p>How many VMs are you able toand what size VMs doyou think you can run on this thingwithout it falling over?</p>
<p>I mean, what could I use this for?</p>
<p>I can think of a lot of crazy things</p>
<p>I could use this for, right?</p>
<p>But you can easily use it for databases.</p>
<p>You could use it for remote desktopwork workloads,editing, workstation type stuff.</p>
<p>It could definitely support that withthe performance that's on these systems.</p>
<p>Right.</p>
<p>And you're running Ubuntu on them or well,you're running your own OS on them.</p>
<p>So you can have as many VMs on thereas you want, right?</p>
<p>Yeah.</p>
<p>As long as the memoryand the CPU cores can support itwith your guys's cpu's, it's wicked fastso you can oversubscribed those.</p>
<p>Not that you need to,but then with the RAM, it'sliterally just,you know,how do I have enough ram in there to beable to support the workloads that I need?</p>
<p>And of course, if you needed more RAMand it's a small environmentwith these guys, you can scale these out.</p>
<p>We only see two here on the screen,but I can easily add threeor four of them in there.</p>
<p>Yeah, exactly.</p>
<p>Yeah. Yeah.</p>
<p>This is pretty cool.</p>
<p>I may have to replace my file server</p>
<p>I have at home with this, so.</p>
<p>All right, cool.</p>
<p>Can you show us a little bit.</p>
<p>About the size of it?</p>
<p>Depending on the size of your file server,</p>
<p>I mean, I could realistically getall flash just between these two nuts.</p>
<p>If I stood if I installed an eightterabyte</p>
<p>SSD on each oneand we mirror the data for protection.</p>
<p>Right. So that would give you eightterabytes usable.</p>
<p>And I installed another eight terabyteto drive on each one.</p>
<p>Now I'm up to 16 terabytesall across these two little mix.</p>
<p>And it would be screaming fast too.</p>
<p>And it's probably not a lot of heat,probably not a lot of heat comingoff of them either.</p>
<p>No, I'm sitting right next to itright now.</p>
<p>No, that's that's pretty cool.</p>
<p>So the two nicks that I haveon the screen there,this is basically the interfacefor those two looks.</p>
<p>And this is our primary dashboard.</p>
<p>And here you can see convergencesmerge here.</p>
<p>And I use these two looksfor doing my VR replication and testingand just running workloads on in general,sometimes for demo purposes.</p>
<p>If I want to see the nodes on thiscluster, I basically come over here.</p>
<p>Here you can see Node one in No.</p>
<p>Two here you can see keep me honest,there are 31 gigabyteson each one of those 32 physically,but we're using some of that off the top.</p>
<p>Now, I want to double clickinto one of those guys here.</p>
<p>And there you go again.</p>
<p>It's 12th Gen Intel core i5 1240, soit's one of the latest and greatest looks.</p>
<p>And then I come downhere, I can see my drive's on my nook,</p>
<p>I can see my nicks, just likewe saw the two nicks on the back of it,the one red cable and the one gray cable.</p>
<p>So I want to double click on that guyhere.</p>
<p>You can see ones running at one gigabitor a thousand megabitsper second, and then once 2.5,that's that red cable.</p>
<p>That's doing the crossoverbetween the two nuggets.</p>
<p>It's getting the native 2.5 gigahertz,which is really nice, and that basicallysupports my core networkfor my voice and replication acrossboth nodes.</p>
<p>So that's one note.</p>
<p>By go back into that node,</p>
<p>I can now see the drives.</p>
<p>So if I want to click on that drivethere, here you can seeone of my drives is about to drive.</p>
<p>That's my amp drive one terabyteand the other drivers that to driveand that's a two terabyte drive.</p>
<p>So each NIC has this configurationidentical configuration.</p>
<p>So that way when we set up our reviewcenters, we replicate across these.</p>
<p>So then I end up getting one terabyteor 92 gigabytes of usablenvme flash and then I get two terabytesof usable SSD.</p>
<p>Very nice.</p>
<p>And I canconfirm that because if I goback into my cluster environmentand I go into my beacon tiers,</p>
<p>I'll show you those two tiersthat are based on those drives.</p>
<p>Here's my tier one.</p>
<p>You can see the tier up here,and that tier isbased on those mini drives and you can seethe capacity is 130 gigabytes.</p>
<p>I'm only using a few gigabytes on itright now.</p>
<p>And here's my tier three.</p>
<p>That's the cities.</p>
<p>My capacity is 1.86 terabytes,and I'm using about 314 gigabytes on that.</p>
<p>And if I want to double clickon that to validate that, I can come here,</p>
<p>I can see it's two drives, onedrive on node, one, one drive on Node two.</p>
<p>They're both two terabytes each.</p>
<p>So we basically mirroracross our environment.</p>
<p>And the way our vCenter works isthe file system worksis it's a distributed mirror.</p>
<p>So as we scale up or scale out,depending on if your servers or your oryour systems can support additional drivesinternally or if you want to scale out.</p>
<p>So if I wanted to add another node,</p>
<p>I could potentially out of Nodethree here with the same configurationand that would just take thatmirrored up across those nice.</p>
<p>So this gives me the visibilitythat I need across nodes.</p>
<p>As I add nodes to this,it will see those nodes as well.</p>
<p>So that's my physical layer.</p>
<p>What about my virtual layer?</p>
<p>Yeah.</p>
<p>So if we go into the virtual layer,</p>
<p>I can come in here to my virtual machines.</p>
<p>Here is my virtual machinesdefault dashboard on the left hand menubar here I have a bunch of configurationbasically changes that I can door settings like I can do, like newthe new drive, new NIC.</p>
<p>And then in here I have a list of IBM's.</p>
<p>You can see I have some VMs running here.</p>
<p>I have my top drive rates, my topdrive storage usage, my top Nic Riggs</p>
<p>But usually where we spendmost of our time in this environmentis I go into my virtual machinesand this is where I can see a listof my different virtual machinesin my environment.</p>
<p>If I want tolook at the console of one of these VMsand you can see here I have fourrunning on the two looks right now.</p>
<p>So these four are running,but I double click on this Windows VM.</p>
<p>Here we have a guestgive you a queue immune agent.</p>
<p>So this gives us valuableguest information that we want to collect.</p>
<p>Like whatmy C drives using what my g-drive is usingwhat my hostname on my vn might be.</p>
<p>So all the things that you would expectof a matureinfrastructure virtualized product, right.</p>
<p>For your on on prem cloud.</p>
<p>And if I want to go into my consolehere, click on this guy.</p>
<p>This willgive me console.log since nine in that VMand this is one of the performance tests</p>
<p>I love to run to show peopleis this Blackmagic diskspeed test utility.</p>
<p>This was actually referred to meby a customerbecause they wanted meto do some testing for them.</p>
<p>But basically if I double click onthis guy and I start my speed test here,</p>
<p>I can come in here,</p>
<p>I can select which target drive.</p>
<p>I want it to run on.</p>
<p>I take my my data g-driveand I go ahead and click start.</p>
<p>This guy takes offand you can see automatically it'salready pushing the limitsof the performance I can get fromjust replicatingthe data across network on my right.</p>
<p>So I am limited because I have a 2.5gigabit connection on the back end.</p>
<p>Typically in a production barfor customers.</p>
<p>We'll ask that, you know,you have a ten gig or bigger for the VPN,but still this is pretty good speed forjust going across those two notes, right?</p>
<p>You're not you know, we can pretty muchsupport any application with this.</p>
<p>And then as this guy finishes,you'll see it'll flip over to the reads.</p>
<p>Here's the other thingtoo, is we just went from 180 megabytesper second to 3000 megabytesor three gigabytes per second.</p>
<p>And that's because what we dois whenever we're doing reads,we read locally within the local storage.</p>
<p>Yeah.</p>
<p>Versus with the rights we're writing,we're always writing acrossto two different environmentsbecause we want to make surethat right data is protected, right?</p>
<p>Of course, of course.</p>
<p>So with a faster network,because you basicallyper second,you've saturated a 2.5 gigabit gigabitconnection.</p>
<p>Yeah, almost almost saturated.</p>
<p>It's pretty close, right?</p>
<p>It's pretty close, yeah.</p>
<p>Because this could bemaybe a little bit over 200 or 240.</p>
<p>There's probablya little overhead in there for something.</p>
<p>But for the most partit's it's pretty secure.</p>
<p>Yeah, that, that is, that is pretty cool.</p>
<p>What about net network because I you know</p>
<p>Darren touted hey I set up my whole datacenter inside this thing</p>
<p>I can create multiple networks hereand put different machineson different networks.</p>
<p>All that is all built in here as well,right?</p>
<p>Yep, absolutely.</p>
<p>So here I go to my network.</p>
<p>So what I did is I jumped back into mymy primary dashboardand I could do thatvery quickly on this header up here.</p>
<p>And basically I click into my networksand we what we do iswe have these tiles where you can jumpinto the different environments.</p>
<p>But here you can see</p>
<p>I have tenant networks, so,so tenants that I have running in here,</p>
<p>I have internal networksthat would be for my core and my DMZ.</p>
<p>That's where all our services runacross our BSS and storageand any other services that we providethat.</p>
<p>Your internal that's your internal stuff.</p>
<p>Got it. Yeah.</p>
<p>And then I have my externaland that would be my connectionto my UI, right?</p>
<p>Or my connectionto my, my northbound southboundnetworking, basically my external network.</p>
<p>And so I click on all networks,it lists all of those together.</p>
<p>Here you can see in my corein DMZ, here's my core DMZ switch.</p>
<p>That's that one cross connectsthat red cable that goesacross those 2.5 gigabyte connections.</p>
<p>And then my external networkis that one gigabit.</p>
<p>If I double click on that, go here,you can see my IP addresses.</p>
<p>These are for my subtenants that I have set up.</p>
<p>So virtual IP addresses, they go back intomy external, here's my firewall rules.</p>
<p>So we have a firewall rule controlwhere you can come in hereand you can do things like here</p>
<p>I have a door synchronization ruleso that I can synchronizefrom my productionenvironment down to this environment,and that's basically how I can push</p>
<p>VMs down to itand then import them in and run them fromdemand.</p>
<p>Let's say I'm I'm the sysadmin, rightat some retail store.</p>
<p>I've got 1500 stores nationwideand I need to manage these things remotebecause I don't want to hire a sysadminfor every single small store I have.</p>
<p>Is there away that I can manageall this from one consolewhere I can today?</p>
<p>What's going on?</p>
<p>Yeah.</p>
<p>So today we basically do it side by side.</p>
<p>So it's a single console per site,but with our next release support 11and right now we're 4.10 three, but 4.11comes out in a couple of weekswith built in geographic site management.</p>
<p>So that means literallywhen you go to the primary dashboardinstead ofjust seeing your clusters and your nodes,there's another pane in herethat shows you a geographical mapwhere you can click into remote sitesfrom that geographical map.</p>
<p>And there's a list as well, too, whereif you already know the listeninglike know Philadelphia versus Seattleversus.</p>
<p>Boy, I can I can.</p>
<p>Still on those list namesand go right to it Exactly.</p>
<p>Oh that's super cool.</p>
<p>So I should be able on that map to seestatus of everything running as well.</p>
<p>So any red things come up I'mgoing to knowalerts, all that stuff is built into that.</p>
<p>That's super slick.</p>
<p>That is that is super slick.</p>
<p>So, Aaron.</p>
<p>We just have our sitesand we have our clusters,but that is coming in our next release,which issupposed to be out in a couple of weeks.</p>
<p>Oh, that that is that is really cool.</p>
<p>I can't wait to get my hands on that.</p>
<p>Aaron,</p>
<p>Any last words for our audience out therelistening today?</p>
<p>I would just say, you know,if you're looking for some type of edgerobotic,remote virtualization infrastructureor you're looking for somethingfor your primary on premdata centers, definitely check out</p>
<p>VeWe have a great product.</p>
<p>It's mature, it's easy to use,and we get great responsesfrom our customers.</p>
<p>We get a lot of repeat businessfrom our customersjust because it's so easy to useand it's durable.</p>
<p>So now is there a try?</p>
<p>Is there a try option here?</p>
<p>I heard there might be a try optionwhere I can go and maybe downloadthe software, install it,try it out myself for a period of time.</p>
<p>Is there an option?</p>
<p>Yeah, Ibelieve if you go to our web site and</p>
<p>I'll probably mess it up, butif you go in here, there should be a way.</p>
<p>If you go to videos or blogor about Birdseye, there's multiple linkswhere you can come in and let'sclick on videos for a second real quick.</p>
<p>And if you watch a video,we might have even a tryand body type thingnot to try to buy it, butit's a stress. Test drive.</p>
<p>Test, right right there. Yeah.</p>
<p>And so basicallyyou just fill out a simple formfirst name, last name, company,name your business email.</p>
<p>We trust the test drive, and then one ofour guys will reach out to you.</p>
<p>We have a couple of different waysyou can try it out.</p>
<p>You can either download our ISOand install it on your own.</p>
<p>Hardware will run on any hardwarein your environment, x86 based hardwareand or we have an online demo labthat we can set up for customers toif they don't have any hardware,but they want to get to knowhow the software works.</p>
<p>Very cool, Aaron, thanks for coming onthe show again, that's very Verge.iol.</p>
<p>I normally don't like to just come outand talk about products,but you guys have done such a killer job,especially of running on the nooks.</p>
<p>I just had to have you. Come on.</p>
<p>No, absolutely.</p>
<p>Thanks for having me.</p>
<p>So it's great.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasts Insider YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org Until nexttime, go out and do something wonderful.</p>

</details>
