---
layout: posts
title: "Leveraging Virtual Datacenters with Verge.io"
number: 96
permalink: episode-EDT96
has_children: false
parent: Episodes
nav_order: 96
tags:
    - Private Cloud
    - SDI
    - Virtual Datacenter
    - Verge.io

date: 2022-07-21
guests:
    - Darren W Pulsipher
    - Aaron Reid
    - Chris Lehman

img: thumbnail.png
summary: "Intel’s Darren Pulsipher, Chief Solutions Architect, and https://www.verge.io/ Aaron Reid, Principal Systems Engineer, and Chris Lehman, Senior VP of Sales, discuss use cases for Verge.io’s virtual data center software."
---

{% include soundcloud.html id="edt96" title="#96 Leveraging Virtual Datacenters with Verge.io" %}

{% include youtube.html id="oYZH273nhUU" %}

---


Aaron has been in IT for over 20 years. He is a pre-sales engineer, meaning he talks to customers about the value and features of Verge.io and helps them define their requirements.

Chris is the head of sales at Verge.io with 25 years of experience in tech software companies. He describes Verge.io as having a maniacal focus on customer satisfaction and success with the software.

The term “virtual data center” is for simplicity. The platform is multi-tenant, so there are standalone nested tenants with all the required resources inside of a data center, from CPU to memory to storage to networking, and have it isolated. Still, at the same time, you can build those on demand. Just like you can create a VM on demand, often with a template, you can do the same thing with a tenant where it encapsulates everything in the virtual data center. You can build through a recipe engine or from scratch. You can easily clone or take a snapshot of one of those tenants.

These virtual data centers can be large and complex. Verge.io’s largest customer runs over 60 nodes and multiple tenants in their environment. The only restrictions are what’s built in the backend Verge.io cluster. For example, say you have four terabytes of memory and 100 terabytes of storage, and 64 cores in your CPU. You could assign all those resources to that tenant, split it however you want, in half or thirds, and build the tenants that way.

If, for example, you allocated some nodes to development, some to test, and the rest to production, they would be different tenants, and you can snapshot between them and move into production. In this case, you can even have multiple production environments with blue-green updates.

Many of Verge.io’s customers are managed, service providers. They use multi-tenancy for their end-user customers and, with that, dedicate zero trust secure environments. Customers can have their cloud environment, and they can provision virtual workloads as needed.

There are also significant use cases for enterprise-type IT customers that want, for example, blue-green dev-test environments or where they may have different environments with different security compliance requirements such as SOX or HIPAA. Verge.io has several large educational institution customers who are doing compliant research. They certify their cluster a single time; then, they can deliver a compliant research environment to one of their researchers in under an hour. Previously, it could take months to get up and running in a compliant environment.

For updates, although users must use tools at the application level or inside VM workloads, the environment “recipe” for things such as firewall rules or configuration settings on how resources are mapped out to workloads can be seamlessly updated. You can also take a VM in a running environment with new compliance and move it over to a new environment.

Verge.io is also helpful for security. One of the largest quant firms in Europe is a good security use case. They take a picture of their entire environment and then run red and blue team drills against that, looking for security vulnerabilities, checking patches, etc.

VDI can run in the environment. Verge.io partners with a company for VDI support. Verge.io controls the resources, the CPU, and the memory. They also support GPU and GPU passthrough and physical GPU. This is a significant use case for some customers, especially in engineering or oil and gas workloads. The virtual GPU makes for favorable economics because the cost is spread among several users.

A perfect fit for Verge.io is edge use cases. A typical example is the point of sale. If a retail customer has a hundred stores, they might need two or three VM applications of VMs in each store. Since Verge.io has a small hardware footprint, once you have at least two servers, you can put that in the edge case data center and build those VMs. And then, with the snapshot and replications features, those configurations can copy and paste across all the different environments. You can update the latest configurations across all of them, not just OS patches but also firewall rules.

An exciting future space for Verge.io is in automated driving systems because of the volume of data. Many vendors are testing the vehicles in remote sites and physically shipping the hard drives. Imagine if the data could be processed on-site, fully redundant with the compelling cost associated with it, then the data could be transported in a wide area versus a disk and a truck.


For more information on Verge.io, visit http://verge.io.



<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, thisis Darren Pulsipher, chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people, processand technology.</p>
<p>Chris and Erin, welcome to the show.</p>
<p>Thanks, Darren.</p>
<p>We're excited to be here.</p>
<p>Hey, Erin, let's start with you first.</p>
<p>Tell my audience a little bit aboutyour background and why you're at Verge.io.</p>
<p>Yeah, so I've been in it for for 20plus years.</p>
<p>I'm a pre-sales systemengineer here at Verge.io.</p>
<p>So that means when we go and engagewith customers, I'm one of the guyswho talks to customers about the technicalfeatures and value of Bird's eye viewand helps them define the requirementsand how we can help them out.</p>
<p>So you're the you'rethe point of the spear.</p>
<p>You're right at the beginning.</p>
<p>You're out there gathering, use cases,finding out the pains that all theprofessionals are having, right?</p>
<p>Yes, absolutely.</p>
<p>Part of the the tip, if you will.</p>
<p>That's great.</p>
<p>And Chris, a little bit about yourselfand your background and what your role is.</p>
<p>It varies.</p>
<p>So I had sales at AdWordsand that means hiringteams like like Aaronand his sales counterpart'sbeen in been doing techsoftware companies for 25 years now andwe have awe have a maniacal focuson our customer satisfactionand making them successfulwith our software.</p>
<p>All right.</p>
<p>This is great.</p>
<p>Now, I've already for those of youthat are just tuning in to this episode,go look at a previous episodewith your one of your founders, Greg,who talked about we talked aboutthe rebirth of private cloud today.</p>
<p>We actually want to talk aboutthe use cases of virtual data centersbecause there was somethingthat was really cool.</p>
<p>The Greg talked about was I'm no longerjust virtualizing machines,</p>
<p>I'm virtualizing data centers.</p>
<p>And I thought, man, that's super cool.</p>
<p>There's a whole bunch of use cases</p>
<p>I'm sure we can come up with.</p>
<p>And Aaron, since you talk to customersevery day, let's start with I mean, whatwhat does that unleash for customerswhen they start thinking about,oh, it's not VMs, it'sthe disease,</p>
<p>I guess I virtual data centers now, right?</p>
<p>Yeah, it's a little differentthan virtual data centers.</p>
<p>This is part of the terminology goes.</p>
<p>But basically what Verge.io has includedand built into it is multi tenancyin those tenants stand standaloneas nested tenantswhere you can provide all the resourcesthat you require inside of a data centerfrom CPU to memoryto storage to networkingand have it totally isolated, but buildthose at the same time on demand, right?</p>
<p>So just like you go inand you build a VM on demand,you might have a template for that VM.</p>
<p>You can now do the same thingwith a tenant where it's encapsulateseverything that's includedin the virtual data center,all those resourcesthat we just talked about.</p>
<p>But you can build those right on demandand those can be a scriptthat you can build throughwhich we call our recipe engine,where some of that's already predefined,you can build it from scratch,where you just, you know,give it a name, give the resources,everything that needs in.</p>
<p>Or you can take one of those tenantsand you can now clone those tenants.</p>
<p>So if you have a project where someone'sworking on one of those tenantsor you have a customerthat's working in one of those tenants,and you need to kind of copy pastethat same type of environment, it's veryeasy to do.</p>
<p>Okay, so I can takebasically you just describe the snapshot,</p>
<p>I can take a snapshot of not just VMs, butsecurity profiles, networkstorage memory and everything iswhat you're talking about, not just whatwe've seen traditionally, right?</p>
<p>Yeah, exactly.</p>
<p>Yeah.</p>
<p>So, for example,if you have a test dust environment,test environment,and you're running workloads on thereand then all of a suddenyou want to move them into a productionin environment or AQR environment,it's very easy to take that whole stackcould be an application stack.</p>
<p>It could be multiple applicationstacks inside of a, you know, a networkframework.</p>
<p>And then just take that,do a clone of that.</p>
<p>And now you have numbertwo running over here on the other side.</p>
<p>Okay.</p>
<p>Is there a limitation to how largethese snapshots go and you call themtenants, not data centers?</p>
<p>Right. Well, we like to.</p>
<p>Get your term. Perspective.</p>
<p>We call it virtual data centers.</p>
<p>But really, what they are,because we are a multi-tenant platform,they are sub tenants of our.</p>
<p>So they can run multiple test. All right.</p>
<p>So let's just call them virtualdata centers because marketing, right.</p>
<p>Yeah, I gotcha there. I get that.</p>
<p>So how how big and complexcan these virtual data centers beor is it like a limitation?</p>
<p>How many applications of thiscould be massive and huge?</p>
<p>Yeah, they can be. They can be massive.</p>
<p>I think our largest customer today runsover 60 plus nodes in their environment.</p>
<p>They have multiple tenantsthat they run in their environment.</p>
<p>Really, the tenant,the only restrictions around a tenantor a virtual data center is what is thewhat's defined or what's built in the backend cluster, the virtual cluster.</p>
<p>So if I have a virtual</p>
<p>IO cluster, for example,and I have four terabytes of memoryand I have 100 terabytes of storageand I have, you know, 64 cores in my CPU,</p>
<p>I could assign all those resourcesto that tenant by one or twoand or I could split in half, splitin thirds, however you want to split it upand build them that way as well.</p>
<p>All right. So all right.</p>
<p>This is this is really interesting.</p>
<p>Let's see.</p>
<p>I have no tenants.</p>
<p>Ah, well, all right. No, no, no.</p>
<p>I think. I think this is interesting.</p>
<p>I can have maybe 128 nodes,and I'm going to say I'm allocatingdevelopment,</p>
<p>Those would be different tenants. Yes.</p>
<p>Absolutely. Yep.</p>
<p>Right.</p>
<p>So I can snapshot between themand then move into production.</p>
<p>Yeah.</p>
<p>I can even have multiple productionenvironments, red or blue.</p>
<p>Green updates in this case.</p>
<p>Yeah, you couldyou could figure out a way eitherwith automation, with a recipe engineand or if you're just switching between,like you said, blue, green,maybe my production, you know,first quarter as my blue, then my greenand then my blue, etc.flip back and forth.</p>
<p>Oh boy.</p>
<p>My, my head's starting to spinjust a little biton all the things I can do with this.</p>
<p>This could be pretty substantial.</p>
<p>Let's talk let's talk real quick aboutsome of the usecases where you see peopleusing this ability.</p>
<p>What inwhat areashave you seen the most traction for this?</p>
<p>So for our multi tenancy,we have a lot of our customerbase is MSPs.</p>
<p>So they'll actually use the multitenancy piece for their end user customersand with that they can dedicate zerotrust secure environmentsfor those customers.</p>
<p>We can do things like BGProuting to where those customers can useour own public</p>
<p>IP addresses into those tenants.</p>
<p>And then we do oath authenticationto connect to their environments.</p>
<p>So at that point,a customer can have their owncloud environmenttotally built outwith one of these virtual data centersor slash tenant and log inand they can, based on the resourcesthat the cluster ownergave to them, the CPU, the memory,the storage they can, provisionedworkloads, virtual workloads as needed.</p>
<p>Okay.</p>
<p>So you're your primary target right nowis your mid-tier cloud service providermore right where I get thatwhat about what aboutjust your normal everyday i.t department?</p>
<p>Is there use case for themor is this really geared just towardsthose those mid-tier cloud serviceproviders?</p>
<p>No, there's great use casesfor the enterprise type I.T customerswhere if you have test environments,where you have environmentswhere you want to do like blue, green,where you may have different environmentsthat have different security compliancerequirements.</p>
<p>Right?</p>
<p>Maybe it's a SOX requirement,maybe it's a missed requirement, maybeit's a HIPA or a C you a requirement.</p>
<p>We have some some higher education,very large education, universitiesthat use us to create multiple tenantsbecause, one,they may have their regulatory policiesthat they have to fit under,but then they want to do different typesof testing and to be able to do that,they have to spin up basically the tenantfor the virtual data centerwhere they can get around those policiesbut still have it securedand in effect, you know, air gapped awayfrom the rest of their environmentlike a sandbox,if you will, or a cyber range.</p>
<p>So that's a very good use case there.</p>
<p>Another good use case, you know,we can start with a minimum of two nodecluster and then, you know, go out as faras you need to go out to build that out.</p>
<p>So depending on it may be an edgeuse case or a robot remote office use casewhere you need something on prem,but then you want to take thaton prem workloadand you want to build to replicate thatdata or replicate those VMs or tenantsto another site for data protectionand, you know, DRM backup and recovery.</p>
<p>Because oh,boy, you just covered a wholegamut of things.</p>
<p>Chris, you want to step in here and helphelp out with, you know, use cases,more areas that you think we can use us.</p>
<p>Yeah, sure.</p>
<p>So as Aaron said, we've got severallarge EDAuse that are doing compliant researchand what we've enabled themis they certify their their clustera single time.</p>
<p>We have a recipe engine or a templateengine that will create the same instancewith, you know, depending on on resourceslike compute and storage and ram.</p>
<p>How much, how much of that they need.</p>
<p>They can they can delivera compliant research environmentto one of their research organizationsor researchersin under an hour.</p>
<p>Okay. So let's delve into this.</p>
<p>One's really interesting to mebecause there is a big uptick incyberthreats and and regulationsaround all this.</p>
<p>Right.</p>
<p>So it's really hardsometimes to get your environmentinto a state that is compliant.</p>
<p>So what you're saying here is</p>
<p>I can build that environment once,right.</p>
<p>With all the controlsand then just turn on those environments.</p>
<p>And then researchers can now researchin that environment without any concernsof setting it up appropriately.</p>
<p>It's already. Done.</p>
<p>And and then legacy and legacyenvironments.</p>
<p>The researcherswere doing a lot of their own work,and it could take months to get, you know,</p>
<p>HIPA compliance and run through the EDIthis particular E to usecompliance process.</p>
<p>So we've we've,you know, prospectively monthsoff off of,you know, the beginning of the research.</p>
<p>This this is really thisbecause I'm in the middle of thisright now with a lot of customerswhere we've got to get the patchesput up onto our OSesor our VMs that are running,you know, things.</p>
<p>But no one talks about updatingthe datacenter with all the policies.</p>
<p>And if you look at the NYSC standards,patching is is one of like 15 sections,right?</p>
<p>So what was this? I could</p>
<p>I could patch a a virtual data center.</p>
<p>Correct.</p>
<p>With the things that it's neededby bye bye bye.</p>
<p>Doing snapshots, is that a.</p>
<p>Snapshot or a clone?</p>
<p>But realistically, what you're doing isyou are copying that virtual data centerand you can take that data center,update it with those type of regulationsyou may have, or with our recipe engine,you may have virtual data centersthat have different requirements orregulations that are already set in there.</p>
<p>Right.</p>
<p>You might have different firewall rules.</p>
<p>You might have different network settings.</p>
<p>How to the trust and security set up.</p>
<p>And then it's very easy, just like yousaid, snapshot or copy those offto where, you know, we can do thatwithin minutes or hours versusif you go into a traditional environment.</p>
<p>If, for example,</p>
<p>I'm building a virtualized cluster,</p>
<p>I have to build everything from the groundup, bare metal networking, etc..</p>
<p>But once you put that virtual data centeron that, that multi-tenant, see,it's very easy to copy create. Gotcha.</p>
<p>All right. So let's talk about updating,though.</p>
<p>Let's say I have a recipe that's thereand and new HIPA regulations come out.</p>
<p>So I've got to make changes.</p>
<p>I've already deployed thisin several places.</p>
<p>So you guys have a mechanismwhere I just update the recipeand then I can go apply that recipe onto currently running systems.</p>
<p>How would I do that?</p>
<p>Because</p>
<p>I, I, I don't I have applications runningin those that I've added on.</p>
<p>So how do I update an environmentlike that then.</p>
<p>Does that?</p>
<p>Yes. So we don't necessarilyhave an automation engineor a recipe engine for your applicationlevel or inside your VM workloads.</p>
<p>Typically that would be done with thingslike infrastructure as a code or configmanagement like Ansible or TerraForm,those types of tools, maybe puppet chefor PowerShell Pythonscripting tools, programing tools.</p>
<p>But for the environment, for ourour our tenant or virtual data center,you could go back in with that recipeand update that tenant with that recipe.</p>
<p>So maybe I need to changesome firewallrules maybe</p>
<p>I need to do some configuration settingson the way my resources are mapped out tomy workloads.</p>
<p>Are mapped out. Right.</p>
<p>Okay.</p>
<p>Can I take a running VM?</p>
<p>Well, this is Darren's crazy thoughts.</p>
<p>I mean, these are crazywhere I've got a running environment,everything's running.</p>
<p>I got my applications all running.</p>
<p>I have new hyper requirementsthat came out.</p>
<p>Okay, gotcha.</p>
<p>I got I create a new environment.</p>
<p>Can I then take the VMs running in oneand migrate them over onto the onto the new infrastructure?</p>
<p>You can.</p>
<p>And so what we do is we allow you to setup the networking to be able to do that.</p>
<p>So you can take those VMs,you can either snapshot themor you can migrate them overto that other tenant.</p>
<p>You will.</p>
<p>Okay, so there's a paththere's a path to upgradingwithout having to reconstructbecause as you said before,you guys don't handle the applicationstacks per se.</p>
<p>But I can take a running environment,the VMs in a running environmentand move them overon onto a newa new environmentthat has the new compliance on it.</p>
<p>That's right. That would be okay.</p>
<p>Or you can even you could do iteven to a sense where you take thatthat environment,you do a clone of it, you test itbecause you always want to test anythingbefore you upgraded or move it.</p>
<p>Right, of course.</p>
<p>And then do your adjustmentsand then once it'sset and good clone it again or just,you know, change over to that and.</p>
<p>Going to move it over. Yeah.</p>
<p>Yeah.</p>
<p>I'm glad you brought up testbecause I used to be a CIO.</p>
<p>I've made some mistakes as a CIO.</p>
<p>I used to be a developer.</p>
<p>I've made some mistakes as a developer.</p>
<p>One of the biggest mistakesis I think it's good enough.</p>
<p>I made that one small change.</p>
<p>It shouldn't really matter if I test itand you push it into production,everything falls apart.</p>
<p>So with that, with your guys's technology,there's no excuses, really.</p>
<p>You got rid of my excuse.</p>
<p>Well, the other coolthing about our technology, too, is we dowe have snapshotsbuilt into the environment.</p>
<p>And the nice thing about our snapshots isyou can do VM level snapshots, you can dovirtual data center level snapshotsand you can do cluster level snapshots.</p>
<p>So you can have a snapshotthat protects youfrom from those types of bugsor stupid human tricks, if you will.</p>
<p>And I coined that phrasefrom someone else, another CIO or CTOthat I had talked to in the past.</p>
<p>But, you know, you apply that update.</p>
<p>And if something doesgo wrong with that updateand it's not something that you can easilytake out of the application, right?</p>
<p>The OS levelnow you can easily rollback to a snapshotbefore you apply that update.</p>
<p>And again, at that level,a tenant level and the cluster level.</p>
<p>All right. Very, very cool. All right.</p>
<p>We cover like the update use case.</p>
<p>Let's talk about security.</p>
<p>Chris, will you lay tile?</p>
<p>Tell us a little bit about security.</p>
<p>How what use cases?</p>
<p>I can I can use this technologyin helping with security.</p>
<p>Yeah.</p>
<p>So it's very similar to the test devtype of a type of a use case where,you know, we deploy on x86 hardware.</p>
<p>Every, every test engineer or dev engineercan can have their own environmentto do whatever they want with.</p>
<p>And when they're done, they blow it away.</p>
<p>And, you know, they've gotthe original golden image back.</p>
<p>We have a very largeone of the largest quant firmsin in Europe that's a customerand it's a security type use case.</p>
<p>So what they're doing is they're takinga picture of their entire environmentand then they're running redteam, blue team drills against that.</p>
<p>It's a it's about an eight personorganizationand same thing, looking for securityvulnerabilities, checking patches,that kind of thing.</p>
<p>Oh, so that's an interesting case.</p>
<p>I can take my productionsystem, environment, everything,snapshot it and then releasemy red team at it and say.</p>
<p>Break it.</p>
<p>Break it, you know, hack inor my blue team sitting there going,trying to defend it the whole timewithout affecting production.</p>
<p>But I have a copy of the productionenvironment.</p>
<p>Yes, exactly.</p>
<p>That's pretty darn slick.</p>
<p>I like that use case.</p>
<p>Any other use cases around security.</p>
<p>That's that'sthe one that we've actually tested outand proved you know in the marketand it is akin to thethe test use case as well.</p>
<p>So that makes sense.</p>
<p>I my brain went to honeypots.</p>
<p>Yes. I you know,</p>
<p>I detect</p>
<p>I detect someone and I put I'd put themin that pretend production environmentthey don't even know.</p>
<p>Stay tuned on that one, Darren.</p>
<p>We've we are we agree with you.</p>
<p>We'll just leave it there.</p>
<p>We'll just we're not going to talk anymoreabout that.</p>
<p>Well, no, Darren,you hit it right on the head, too.</p>
<p>I mean, essentially, once you virtualizethe data center, you can pretty much applyany type of use case to it, right?</p>
<p>Honeypot, cyber range, sandbox,you know, arrogant environment.</p>
<p>It's,you know, the whatever you want to do too.</p>
<p>It's very flexible.</p>
<p>Yeah, no, I'm in.</p>
<p>Well, sometimes we need to spell it outbecause I don't think peoplerealize the flexibility that this gives.</p>
<p>This ispretty cool.</p>
<p>All right, let's.</p>
<p>All right.</p>
<p>So we talked configuration, we talkedupgrades, security.</p>
<p>What's another major use case category?</p>
<p>Erin, what do you think?</p>
<p>Well.</p>
<p>So let's see here.</p>
<p>Let me just some of our use cases. So,you know, we do partner with a companyfor media support.</p>
<p>You can run BD in our environment.</p>
<p>The nice thing about that iswe can control the resources, the CPU,the memory.</p>
<p>We also support</p>
<p>GPU, passthrough and virtual GPUs.</p>
<p>Today we support that with NVIDIAfor the virtual CPUand GPU pass through and then for physicaljust playing physical GPU.</p>
<p>Also, we also supportsome other ones on there,but for the most part,that's a big use case for some customers,especially if they're want to do thingslike engineering, oil type,you know, workloads, oil or oil and gas,</p>
<p>I should say.</p>
<p>But anything basically that requiresany type of GPU resource around that.</p>
<p>And then of course the vehicles as well.</p>
<p>Yeah, I really likebecause normally when we think about it,when we think about VDI,we think, Oh, I have a virtual desktop.</p>
<p>That's what it is.</p>
<p>But for complex systemslike what I deal with, I'm programing.</p>
<p>For example, I have more than one VM,</p>
<p>I have a virtual desktopand a bunch of VMs that I want to to use.</p>
<p>So this would be very cool for me where</p>
<p>I can have like a group of VMs that I'm</p>
<p>Snapchatting and doing my development onand I can access them remotely.</p>
<p>And, and that that VDI sessioncan be bundled togetherwith my VMs into one virtual data centerfor me or one virtual tenant for me.</p>
<p>Yeah, absolutely.</p>
<p>Pretty,that's pretty cool that that unlocksa lot of new programing use cases for meas is what I see.</p>
<p>Yeah.</p>
<p>The the the virtual GPU also Darrenreally,really makes the economics favorable.</p>
<p>So, you know, that's not inexpensivetechnology and a 1 to 1can can get expensive.</p>
<p>So the ability to sharethat out among several usersreally reallyreallydelivers a favorable economic model.</p>
<p>My brainalso went to what I call micro cloudbecause I know your guys's stuffhas a very small footprint.</p>
<p>I can run it on on very small machines.</p>
<p>And we're startingto see more emergence of the edge.</p>
<p>And when people think edge,they're thinkingsmartwatches,smartphones, sensors, cameras.</p>
<p>We're also seeing edge devicesthat have three or four nodes.</p>
<p>And so I can really see your guys'stechnology being used as a distributionchannel where I'm distributingon to these micro datacenters, I'm distributing software stacks,</p>
<p>I'm distributing a full virtualizeddata center tenant out therethat's self-contained,managed, can, can run without issues.</p>
<p>Is that somethingyou guys have started to see yet or not?</p>
<p>Yeah, absolutely.</p>
<p>Yeah. I would say it's a use casethat we're going after.</p>
<p>It's actually a perfect fit for us.</p>
<p>If you look at an edge use case,one examplethat's common is a point of saleuse case, right?</p>
<p>Where I'm a retail customerand I have 50 stores, 100 stores, and now</p>
<p>I need to have two or three applicationsor VMs that are in that store.</p>
<p>And just like you said, we are our minimumrequirements are very small footprint.</p>
<p>We like to see at least two serversfor high availability.</p>
<p>But once you have that, you put thatin that edge use case data centerand you can build those VMs.</p>
<p>And then again with our snapshotand replicationfeatures,you can take those configurationsand then just copy paste acrossall those different environments.</p>
<p>Yeah, I see.</p>
<p>That's pretty cool because now,now you're talking updates, right?</p>
<p>Yeah, I have 100</p>
<p>I have 100 stores out there.</p>
<p>I all want them tohave the latest and greatestconfigurations, notjust OS patches, but also firewall rules.</p>
<p>The whole thing.</p>
<p>I can just peanut butterthat thing across.</p>
<p>Yeah, absolutely.</p>
<p>Now that's that's that's pretty slick.</p>
<p>And if you if you start to doubleclick on on the the edge use case.</p>
<p>And to your point, Darren, it's you know,it means a lot of things.</p>
<p>It can be a smart refrigeratoror a gas meter.</p>
<p>It can be. Yeah, yeah, yeah. Cool.</p>
<p>We're looking hard right nowand speaking with peoplein any eight hour spacebecause those cars generate so much data.</p>
<p>A lot of the vendors are testing themin remote sites and they'rethey're literally shippinghard drives around.</p>
<p>I've been in that space.</p>
<p>Yeah, it's a nightmare.</p>
<p>And 80, 85% of that data ends up gettingthrown away once the processing is done.</p>
<p>So think about the ability now to be ableto process that on a remote site, fullyredundant with with the compelling costassociated with it.</p>
<p>And then you canthen you can transport the data,you know, viaa wide area versus a disk and a truck.</p>
<p>No, no, I really like that a lot.</p>
<p>And well, I'm actually Funyons.</p>
<p>They're notthey're not removing any of that datathey're collecting because they're afraid.</p>
<p>Oh, yeah, yeah.</p>
<p>Because I'm still training these cars.</p>
<p>There might be some data in thereso they don't get rid of anything.</p>
<p>They gather all the data,but they ship that the,you know, for the for the model data,they'll ship that back overall.</p>
<p>Yeah. Yeah. That's versus a FedEx truck.</p>
<p>Well well and that's exactlywhat they're using is FedEx trucksfull of drivesyou know petabytes of storage,being transtransported via FedEx to the data center.</p>
<p>I've seen it myself. So I know.</p>
<p>I know so very, very cool.</p>
<p>Very cool.</p>
<p>Technology unleashing new waysof thinking about things.</p>
<p>Very cool stuff, guys.</p>
<p>Any last words for ourour audience out there?</p>
<p>Chris Couple a couple thingswe've mentioned the lightweighthardware footprint a couple of times.</p>
<p>We can take two x86 based serversand a crossover cable or a dumb layertwo switch and give it fullrouting capability for redundancy. Andas many virtual data centers or tenanciesas you have resources to deliver.</p>
<p>We alsohave to have a pretty robustchannel program as wellthat that people should, should be,should know about and be interested in.</p>
<p>Great.</p>
<p>All right, Aaron,what about you, the boss, everything?</p>
<p>Yeah, I think Chris covered itfor the most part.</p>
<p>It is a great technology.</p>
<p>At the very beginning of the call,you asked why, you know, why Verge.ioand one of the reasons coming over hereis when I saw the technology,it looked like a disruptor to me.</p>
<p>And it's very solid.</p>
<p>We have a you know, our core team ofdevelopers has been here the whole time.</p>
<p>So that means a lot to me.</p>
<p>It's coming in to a new companybecause when when you need new featuresor you have questionsabout the technology,we have the people thereto back it up and support it.</p>
<p>So it's really good.</p>
<p>Cool stuff.</p>
<p>Hey, guys, thank you very much.</p>
<p>Anyone can find out more informationabout Verge.io.</p>
<p>Oh, there you go. Yeah.</p>
<p>All right. Hey, thanks a lot, guys.</p>
<p>Thank you. Thanks verythank you for listening to Embracing</p>
<p>Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.org until nexttime, go out and do something wonderful.</p>

</details>
