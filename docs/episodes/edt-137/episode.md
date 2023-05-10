---
layout: posts
title: "Rebirth of the Private Cloud"
number: 137
permalink: episode-EDT137
has_children: false
parent: Episodes
nav_order: 137
tags:
    - Cloud
    - Computing
    - GreenLake
    - HPE
    - MultiCloud
    - HybridCloud
    - Technology

date: 2023-05-10
guests:
    - Darren W Pulsipher
    - Sam Ceccola

img: thumbnail.png
summary: "In this episode Darren interviews Sam Ceccola, CTO of DOD for HPE about the new business and technology models changing the way organizations consume hybrid cloud."
---

{% include soundcloud.html id="edt137" title="#137 Rebirth of the Private Cloud" %}

{% include youtube.html id="TBD" %}

---

There has been a trend towards repatriation in the commercial sector, where businesses are bringing workloads and virtual machines back from public cloud environments due to financial reasons such as egress charges and budgeting for hyper-scaler workloads. Data sovereignty, security concerns, performance, and latency issues have also led to more companies moving away from the public cloud and back to private cloud technologies. Despite this shift, many cloud promises have been fulfilled to provide ease of use, elasticity, and consumption-based pricing. In order to ease the transition between clouds, the private cloud must provide ease of use, portability of workloads, and new consumption pricing models so highly demanded from the public clouds.

## Cost Control

Sam Ceccola, the HPE DoD CTO, believes it's essential to understand the risks and challenges associated with each private, public, and hybrid cloud technology. And architect solutions that take advantage of each technology’s strength. This is where HPE’s production offering, GreenLake, comes to play. GreenLake’s consumption-based service procurement model was first implemented in 2005 and has since evolved to include a self-service portal for managing multiple private and public cloud environments. GreenLake provides customers with the ability to deploy additional resources across the private/public cloud boundary on demand. It also manages and visualizes complex costs, such as egress charges and budgeting for hyper-scale workloads.

## Data Management

Another major concern for most consumers of public clouds is data management, governance, and sovereignty. Without a cohesive data strategy, many organizations are heavily burdened with data egress costs moving data in and out of public clouds. There are several different approaches to managing data across cloud boundaries. HPE uses an approach of cloud-adjacent storage which decreases the amount of data moved into the cloud to a minimum. GreenLake's cloud-adjacent storage keeps data on-premises while running compute workloads in the cloud. This approach ensures data sovereignty and reduces egress costs and latency issues associated with moving large amounts of data between clouds.

## Portability

Another key aspect of multi-hybrid cloud architectures is the ability to easily move workloads between clouds. Some organizations have moved to stateless container-based microservice architectures to provide the flexibility and portability of workloads. However, not all workloads can easily be containerized especially workloads that have applications that contain state. In these cases, virtual machines are used to give the ability to move applications from one cloud to another.  Moving VMs between clouds can be problematic as cloud service providers use different hypervisors and CPUs that may not be completely compatible.  Understanding the limitations of these migrations is critical in purchase decisions of hardware both virtualized and non-virtualized.

## Security

GreenLake does not limit customers to on-premises deployment, as it allows them to provision workloads across various cloud environments, including Amazon, Google, and Azure. In addition, GreenLake supports true hybrid workloads, where a workload can run both on-premises and in hyperscale cloud environments simultaneously. Running workloads across cloud boundaries can cause additional exposure to cyber-attacks. Understanding the security models of the different public and private cloud technologies can be a daunting task and increases the human capital required to effectively architect and manage a strong security position. The GreenLake platform handles security through its agnostic security engine, Security Central, which supports multi-cloud attestation and zero-trust architectures for independent clouds, managing the complexity and integration of security models.

Architecting a multi-hybrid cloud solution is nontrivial and requires an understanding of private and public cloud technologies, their limitations, and their strengths. luckily, there are organizations like HPE that have been working with multi-hybrid cloud architectures for several years and have learned the INS and outs of effective management of workloads across this new flexible environment.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople, process and technology.</p>
<p>On today's episode,the rebirth of the private Cloudwith special guest Sam Ceccola CTOof Department of Defense at HPE.</p>
<p>Sam, welcome to the show.</p>
<p>Glad to be here. Thank you for having me.</p>
<p>Hey, we are broadcastingfrom the show floorat Cyber Tech Tech Summit.</p>
<p>Right?</p>
<p>First time</p>
<p>I've done it at this show. Okay.</p>
<p>So working. Out Well. I will find out.</p>
<p>We'll find out how this goes.</p>
<p>It might be too noisy.</p>
<p>We'll give it a shotand see how things go.</p>
<p>Sam, first off, tell my audiencea little bit about yourself andyour background and then why in the worldwe would talk about cloud.</p>
<p>Absolutely.</p>
<p>Good morning. Good afternoon, everyone.</p>
<p>Sam Ceccola here.</p>
<p>I'm HPE's Department of Defense CTO.</p>
<p>I also lead our CTO teamfor our public sector business.</p>
<p>I've been with the company nowapproximately 20 years.</p>
<p>I have a background in a lot of solutionengineeringgoing back a long timeto multiple degrees in the business.</p>
<p>I love what I do and supporting the D.O.D.customer and and,you know, helping them solve problems.</p>
<p>So you've seen a huge change overthe last ten yearson going into the cloud,coming back out of the cloud.</p>
<p>And so give me your take on oncloud technology.</p>
<p>Well, I think, you know,you have to look at it firstfrom a commercial perspective.</p>
<p>And in our commercial customersand these what we've seen with them,you know,are leading the trends of repatriation.</p>
<p>The majority of the initial repatriationfor commercial customersand we're going back now to 2016, 2017,when this really started inthe commercial worldwas for financial reasons.</p>
<p>You know, there were there were between,you know, leaving</p>
<p>VMs on it or workloads on in differentcloud environments to the egress charges,you know, the budgeting forhyperscale or workloads can be toughif not handled correctly.</p>
<p>And then from there, we've startedto see other repatriation regions,whether that be Davis data sovereigntyor data security being concerns,performance and latency.</p>
<p>You know,and there's something as simple as yeah,we get this question all the time.</p>
<p>You do a backupas a service where the control planeis sitting in a hyperscale or, you know,what happens if I need to restore my dataand I lost my connection to the Internet?</p>
<p>Yeah. Yeah. So there's so.</p>
<p>Series of reasons.</p>
<p>Yeah, a series of reasons.</p>
<p>Some moving to the cloud.</p>
<p>All the promises of the cloudnever came to fruition.</p>
<p>Or they kind of did or depends.</p>
<p>Yeah. Yeah.</p>
<p>I actually think.</p>
<p>I think a majority of them did,to be honest withyou have to look at what they are toto really understand that concept.</p>
<p>Okay. You know, you talk aboutcloud agility,the ability to deploythousands of virtual CPUsin days and minutes when,you know, in a short timeframe, you know,that is, you know, if theif I if I date myself for a minuteand you go back to the ninetiesand you think of there was a concept backthen called Shadow I t Right.</p>
<p>I was part of. That,you and me both. Yeah.</p>
<p>You know.</p>
<p>I went to Fry's Electronics,but myself and HP Tower or HP Towerat the time jammed it under my deskand I didn't have to talk to it that way.</p>
<p>Exactly. Well,we saw the same thingwith moving to the commercial.</p>
<p>Cloud, of course. Yeah,for some of the same reasons.</p>
<p>But I got it even faster.</p>
<p>Right, But I got it even faster.</p>
<p>So? So, you know, I think.</p>
<p>Yes, a lot of thepromises came true,but nobody understood the risksor the challenges, you know,with everything we do with this business.</p>
<p>There's aplus in a minus to everything you do.</p>
<p>And what we do for a livingis try to solve problemsaround those minuses in order tohave a better solution. Yeah.</p>
<p>You know, and that's when we look at HP.</p>
<p>Greenlake.</p>
<p>HP Greenlake, you know,really, if I look back,took hold in 2005,we didn't call it Greenlake at the time,but by HP at the time it was an HP.</p>
<p>HP winning the first capacity servicescontract that DISAwhere they procuredthings from us as a service.</p>
<p>And to this day for the last 17 years overmultiple contractsevery server in addition environmentrunning Intel is procured by DISAnot as a CapEx procurement,but as a as a service procurement well.</p>
<p>So this is an old modelthat mainframe said the same thing.</p>
<p>Right. Right.</p>
<p>So you can play some. Yeah. Yeah.</p>
<p>You can even go to Xeroxand you pay for how many copies you made.</p>
<p>Right.</p>
<p>That was capacity, That was.</p>
<p>Consumption as.</p>
<p>Consumption as a service. Right.</p>
<p>Old model people, Old model.</p>
<p>But you know, then it becomeshow you implement it.</p>
<p>Right. Okay.</p>
<p>So, you know,and one of the things we targeted with</p>
<p>Greenlake is back when we startedactually the back then in 2005,it was just a financial model.</p>
<p>And really till 2012it was just a financial modelabout the 2014 15 timeframe piece.</p>
<p>HP, HPstarted on the creation of a control planbecause for any cloud environment,one of the requirements is a self-service.</p>
<p>Portal, right? Yeah.</p>
<p>When every everybody has one.</p>
<p>Ah, all the hyperscalers have one.</p>
<p>But if we were going to be a cloud serviceprovider,which is our core business today,we needed thatself-service portaland that's what's running today,either hosted in a commercial cloudenvironment for our commercial customersor in a completely disconnectedenvironment for our D.O.D.customers.</p>
<p>Were no connection to the public.</p>
<p>Internet is needed.</p>
<p>So the concentration is the sensorfirst is one piece of it, right?</p>
<p>In order to be a cloud service provider,you need to clearly meetthe NYSC definition of cloud,which is very easilyhighlighted in social publication.characteristics such as rapid elasticity.</p>
<p>I think another one you how we approachrapid elasticity, you know,we need to be able to do it.</p>
<p>And you know, just like we said,one of the benefitsof the commercial cloudor a fedramp cloud or whateverit is, is that rapid elasticityis the ability to deploy things quickly.</p>
<p>So what HP does for our customers,because it's all on prem at this point,we put additional hardwareout there, hot,able to run in a minute's noticethat the customer doesn't pay forunless they consume.</p>
<p>It's a consumption,so it's. A consumption based model.</p>
<p>So we're able to providenot just the self-service portal,but also a rapid, rapid elasticity, broadnetwork access,metering and monitoringand I'm missing onebecause I always forget onebecause I'm an old guy.</p>
<p>But but all those five characters of cloudcomputing are providedin a green light environment.</p>
<p>So this is really interestingbecause what you guys have basically saidis to the hyperscalers,we can do that on prem.</p>
<p>We can do that on prem.</p>
<p>But let's be clear.</p>
<p>Yes, it's one of those things where therethere are frenemies, if you like, or.</p>
<p>Well, yeah, because you still need themfor some things.</p>
<p>Well,and we partner with them right. Okay.</p>
<p>So in our self-service portal calledcalled Green Lake disconnectedor greatly connected, you have the abilitynot just to go and provisionedyour virtual machines, your containersor your HPC environment on site,but you also have to have the abilityto provision an Amazon image or, or.</p>
<p>Okay, so you're doing multi-cloud.</p>
<p>We are doing multi-cloud or a Google oror in as your workload as well.</p>
<p>And then furthermore,you have the ability to dotrue hybrid workloads.</p>
<p>So I can have a workloadthat spanned it's running on premand also part of itrunning out in right in hyperscale.</p>
<p>And then I.</p>
<p>Supportwhat's called multi-cloud attestation,which provides a zero trust architecturenot just to what's on premise,but to integrate in with the environmentsrunning in the hyperscalers.</p>
<p>It gets even more.</p>
<p>So you're handling the security because that's another hard part with yes, cloud ison prem, has asecurity model,</p>
<p>IWC has a security model, Azure has one,</p>
<p>Oracle has one, Google has oneand they're not all the same.</p>
<p>And independently of Greenlake, try to getand I'm an army to deploy in GCP.</p>
<p>Oh no, you're.</p>
<p>Not going to work because yeah,because that security modelis not the same among other things.</p>
<p>So so yeah, so we are,we have a two agnostic security engine.</p>
<p>It's called Security Central, for lack ofa better word, because we don't always.</p>
<p>Each piece naming things,they just make it.</p>
<p>Yeah, it's security central.</p>
<p>And what do you mean? Yes.</p>
<p>That implements two technologiesthat are related opensource technologies called Spiffy Inspire.</p>
<p>I like those.</p>
<p>There's have. You're familiar with them.</p>
<p>Yeah. Okay.</p>
<p>So you know says and supportsmulti-cloud attestationas well as you knowzero trust architectureswithin any independent cloud as well.</p>
<p>You don't need to do just multi-cloud.</p>
<p>But I wanted to double clickon the hybrid workloads that we supportbecause it's not just workloadtalking to workloadbe in two different clouds.</p>
<p>Let's take it let's take an example ofa concept called cloud adjacent storage.</p>
<p>I was going to say storagein data is probably the hardest partof a hybrid cloud and a multicloudbecause of egress costs.</p>
<p>Well, it is.</p>
<p>And because of latency and while.</p>
<p>Yeah, yeah, right.</p>
<p>So yeah.</p>
<p>So egress costsyou the financial boundary and,and latency becomes a technical barrier.</p>
<p>So theconcept of cloud adjacent storage is that</p>
<p>I can run my workload in my compute,if you will, in a hyperscale,but I leave all my storage on premiseinside the guns, guardsand gates of a digital data center.</p>
<p>I've been proposing that that idea ofbecause yeah, that's used the hyperscalersfor bursting or for special workloads but</p>
<p>I don't need to send all my data there.</p>
<p>Correct.</p>
<p>And at the end, if you think about it,</p>
<p>I talked about earlier how,you know, we spend our lives solvingadding things to our solutionsto solve challengesthat the customer has on top of somethingelse.</p>
<p>Well, think of what I talked aboutintegrate like environment on premise.</p>
<p>I put 20% additional hardware out thereto give the customerthe ability to order scaleand it burst within the limits of my 20%.</p>
<p>But in the environments that I servein the Department of Defense,if stuff goes bad in the worldreal quickly,they're going to need a lot more than 20%quicker than I can get hardware.</p>
<p>Yeah, Yeah.</p>
<p>So I need to give them the abilityto not just scale into my 20%,but through my 20%.</p>
<p>Up to two or 300%. Into the hyperscale.</p>
<p>And that's what we support.</p>
<p>And the only way that's supportable,because in that environment, before thatbursting starts to happen, all my datasitting on premise in a data center.</p>
<p>So if I scale in that fashion, thoseworkloads that burst into a hyperscaleor need to be able to reach backand access the data that they need.</p>
<p>Right.</p>
<p>I'm not going to move terabytesand terabytes of databecause of egress charges.</p>
<p>It's security.</p>
<p>And then when you get O'Connor'sdata sovereignty, yeah.</p>
<p>Data sovereignty is an issue. Issue.</p>
<p>So I can keep it all in a governmentdata center on U.S.soil all the way around the world.</p>
<p>And I can give them the robustnessto burst into a hyperscaleor when and if needed.</p>
<p>And that bursting cannot happenautomaticallyor is taking human intervention.</p>
<p>No, it's it's.</p>
<p>All it's all it's all cloud.</p>
<p>Automation.</p>
<p>See, that's where I see us moving onthat operational side is</p>
<p>I've got to figure out how to do thiswith less people. Yes.</p>
<p>Instead of having to hire more peopleto to do it, because a lot of peopleare thinking, okay, now you're saying</p>
<p>I have to have an admin for on prem,</p>
<p>I need an admin for a WAC, I need themfor Azure and an admin for Google.</p>
<p>Well, and that's the.</p>
<p>Most.</p>
<p>Costly multi-cloud portal of Greenlake.</p>
<p>Yeah, I have one interface to work withand in myto work with the GCP image to work with.</p>
<p>So I don't need an expertin each of the clouds.</p>
<p>I need a expert in systems.</p>
<p>It's all about consolidating silos, right?</p>
<p>Yeah. Yeah.</p>
<p>You know, I mean,that's the oversimplification of itas and that and that's what we,that's what we've done.</p>
<p>But I want to take it a step furtherbecause, you know, talk to today our,our talk has been about hyperscalersand datacenters.</p>
<p>Right. Right. But what about the edge,especially in the DOD world?</p>
<p>You know.</p>
<p>Yeah, that's an interesting one.</p>
<p>And COVID kind of exposed. Right.</p>
<p>This even more andand I've asked that question of people,where is your data?</p>
<p>Oh, right.</p>
<p>Especially like this recordingthat we're doing or if we record on Zoom,where's that zoom recording?</p>
<p>Where's it going.</p>
<p>Where's the teams recording at or, Hey,</p>
<p>I sent this.</p>
<p>We've lost control of our dataacross the edgeand then when which cloud is it in?</p>
<p>Well, I don't even know. Well.</p>
<p>Oh it's a SAS solution.</p>
<p>Well they switched the cloudservice providers last week.</p>
<p>It's no longer in Amazon.</p>
<p>It's now in right now Alibaba.</p>
<p>Oh my goodness.</p>
<p>I can't have that stuff inin China. Right.</p>
<p>Oh well, better and better yet,especially in the commercial world,not so much in the io5066 world.</p>
<p>You know what other tenantsare running in that environment.</p>
<p>Yeah.</p>
<p>There's I mean example there's a lot ofcyber currency that</p>
<p>China runs that is sitting in a U.S.so maybe they're using it as sidecar taxand then trying to mine other data.</p>
<p>But you know,when would you want to put it past them.</p>
<p>Yeah, they're smart there</p>
<p>So so when you talk about the cloudnow extends out to the edge. Yes.</p>
<p>And there's a couple models for that thatwe supported that need to be supported.</p>
<p>Yeah. One is a connected model, right?</p>
<p>I mean, think about even an opennessdata center, if you will,that being, let's say, for Island,you know, to put it in just words,since we're here at the conferenceor even a further edge ofcan't poster session or tentor however a tankyou knowhowever far you want to go about you knowso those environments are onceyou get to the further edge or what'swhat's called the DDL environment.</p>
<p>Yeah right very.</p>
<p>Familiar with. It.</p>
<p>Right.</p>
<p>So the intermittent disconnected,intermittent light scene,intermittent latency.</p>
<p>So you need to be able to runin a connected environment,but then you also need to be able to runin windows, become disconnected.</p>
<p>And then when you reconnect,you can't overwhelm the network.</p>
<p>Universe.</p>
<p>You have to have network prioritizationof traffic for synchronization purposes.</p>
<p>Exactly.</p>
<p>And there's some yeah,there's some very good technologyout there today, one of thembeing the asmall data fabric that HP hasthat allows for that connectionand the prioritization of datawhen things need to move back and forth.</p>
<p>Yeah,but the first challenge with the edgebefore you can even deploya cloud is being able to have data centercapablehardware out there that can run at a swampoptimized size,weight in power with the proper coolingand things like that.</p>
<p>And that's something that we've donewell together with the edge line.</p>
<p>Yeah, with Yeah, yeah. That's right.</p>
<p>I was saying that isthat is joint R&D between Intel and HPand that is what is supporting the,the edge cloudsthat we're doing all the way from,you know, a VM as a service environmentto a five in a box environment to see usif see solutions for that.</p>
<p>Com So there's a lot that is robustnow out at the edge then but then you.</p>
<p>Still have to manageapplications at the edge.</p>
<p>I still have to manage the dataat the edge.</p>
<p>You have to, you have to patch it.</p>
<p>I have to do all the things I wouldnormally do in the data center as well.</p>
<p>Right.</p>
<p>And that's easy when you're connected.</p>
<p>It, but not so easy when you. Disconnect.</p>
<p>Yeah.</p>
<p>So, you know, the challenge hasbeen is how do you create a</p>
<p>AI drivenautomation that can live out at the edge?</p>
<p>And I want to use the word</p>
<p>I absolutely hate, which is self-healing.</p>
<p>But but you need it.</p>
<p>But it's it's a concepteverybody understands.</p>
<p>So how do you deploy thatself-healing environmentthat can apply the firmware patchesand the vulnerability remediations?</p>
<p>And that's something we do.</p>
<p>We have auto remediation.</p>
<p>Yeah, we certainly we can do beingin the middle of remediation as well.</p>
<p>But soso would you say with like edge linewhen you when you have the edge out thereand I'm going to fold this intomy multi hybrid cloud environment,does it require me to connectto the data center, to the edgeor to the cloud?</p>
<p>Does it matteror is it just now become part of this bigamorphous compute hub and data hub of.</p>
<p>It ultimately depends on the solution.</p>
<p>So I tell you, you know,all of the all the possiblewe've got some out therethat never connect know because of.</p>
<p>Security, the.</p>
<p>Workloads they're running.</p>
<p>We're going to leave it at that.</p>
<p>Most of them do get at leastintermittent connectivityso that we can push patchesand things like that down.</p>
<p>And then, you know, I have some customersthat are using it in theirin their data centersto keep auto synchronized with the cloud.</p>
<p>And then whenor just saw something happens,they need to go mobile, they take it,put it in the back of the Humveeand go, gotcha.</p>
<p>So so this is really interesting becausethat's like a a mobile hybrid cloud.</p>
<p>And all of a sudden, Yeah, well.</p>
<p>When you have when you have somethingthat supports 160 cores of intelprocessing with six terabytes of memory,basically a one personcarry of £45, It's a data center.</p>
<p>Yeah, it's a data center on someone'sbackpack. Right.</p>
<p>And the other, the other beauty of it isbecause it's the way that it's architectedusing, you know, Xeon processors and allbasically the pro client</p>
<p>DNA that we have in our data centers.</p>
<p>I don't have to worry orthe customer doesn't have to worry abouttaking an applicationthat's running on a DL 380and moving it to an edge lineand having to re-architect itbecause they only have four,you know, four</p>
<p>Xeon CPUs versus 40 are coresorry versus 40.</p>
<p>Is Xeon scalable?</p>
<p>Of course, right?</p>
<p>It does.</p>
<p>It's the same architecture.</p>
<p>They can move. Workloads.</p>
<p>So workloads are more dynamic.</p>
<p>Yes. Than before you.</p>
<p>How how do you solve the problemof of moving workloadsbetween the hyperscalersand on prem because the Hyperscalersthey all use a different.</p>
<p>Yeah.</p>
<p>Oh I hypervisor.</p>
<p>Right.</p>
<p>Yeah.</p>
<p>And I can't really just take a running</p>
<p>VM instancethat's running in NWC and put it on prem.</p>
<p>It's you can't do. It, you can't.</p>
<p>And we have without jumping througha lot of hoops and it's not instantaneous.</p>
<p>So. So from a virtual machine perspective,because depending on what technologyyou're using,it's a little bit different, right.</p>
<p>I HP about two years agobought a company called Xr2.</p>
<p>Okay.</p>
<p>And what Xr2 Xr2that is from a virtual machineperspective, moving</p>
<p>VMs and reconfiguring networks.</p>
<p>As soon as you move the virus,you know everything along with that,whether that be compute VMs or storage,virtual virtual storage,that's what sort of specializes.</p>
<p>So that helps with all that complexityof movingthat workload between hypervisor on prem,even outside.</p>
<p>It's also very goodat moving something like a</p>
<p>AMD workload to an Intel workloadbecause it abstracts out the.</p>
<p>You can do it that way,but you can't go the other way.</p>
<p>Exactly.</p>
<p>You can't move an Intelworkload to an AMD.</p>
<p>I got to support all my partners.</p>
<p>Yeah, I know, I get it.</p>
<p>But hey, hey, hey, hey.</p>
<p>You pay by intel.</p>
<p>So why don't you do that? Don't.</p>
<p>Don't you move workloads off Intel? Right.</p>
<p>But no, but I get it.</p>
<p>The portability is important.</p>
<p>It is. It is.</p>
<p>Especiallywhy is the portability important?</p>
<p>It's about mission outcomes.</p>
<p>Yes. Yes.</p>
<p>Oh, it's not about itbecause as a driver, latency is a driver,but the most important thingis that workloadbe in the right placeat the right time to support the mission.</p>
<p>You don't want a warfightersitting there watching a spinningexam download, but you don't. Exactly.</p>
<p>Or I'm spinning this up.</p>
<p>You got to get rid of that.</p>
<p>I got it.</p>
<p>I need to move the workloadsto where the data is collectedand they need to be able to workautonomouslyin in a disconnected cloud.</p>
<p>That's why we disconnected green like inthe 90,000 are a perfect pair.</p>
<p>Awesome. This has been wonderful.</p>
<p>I appreciate the time today.</p>
<p>I really think. You know this.</p>
<p>I'm learning new things.</p>
<p>It's great and new things.</p>
<p>I hope you guys learn somethingnew on the show today.</p>
<p>Thank you for having me.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org.</p>
<p>Until nexttime, go out and do something wonderful.</p>

</details>
