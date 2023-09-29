---
layout: posts
title: "Lessons in HPC Oil & Gas"
number: 133
permalink: episode-EDT133
has_children: false
parent: Episodes
nav_order: 133
tags:
    - compute
    - hpc
    - people
    - innovation
    - cloud

date: Wed Apr 12 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Keith Gray

img: thumbnail.png
image: thumbnail.png
summary: "In this episode, Darren interviews Keith Gray, a former director of high-performance computing at British Petroleum. With over 30 years of managing HPC centers, Keith gives great insight into the challenges, best practices, and the future of high-performance computing."
description: "In this episode, Darren interviews Keith Gray, a former director of high-performance computing at British Petroleum. With over 30 years of managing HPC centers, Keith gives great insight into the challenges, best practices, and the future of high-performance computing."
---

<div>
<h3>Listen Here</h3>
{% include transistor.html id="25af1aaa" title="#133 Lessons in HPC Oil & Gas" %}

{% include youtube.html id="obnwdUKsSGw" %}
</div>

---

Keith had worked in the industry for his entire career and joined Intel last July. He had led Consolidated Resources' High-Performance Computing group since 1999, where they started with only one-tenth of a teraflop of computing power. However, Keith successfully consolidated multiple sites and established their team as integral to BP's oil and gas exploration, development, and production operations. Over the last three decades of working in oil and gas high-performance computing, Keith has had three factors influencing the direction of HPC: cloud computing, a shortage of human talent, and the balance between collaboration and first-mover advantage.

## Cloud or On-Prem

Keith shared his experience building an HPC (High-Performance Computing) facility for BP. The construction took almost nine years, with the first seven spent on patching the existing facility and building a business case for a dedicated one. Despite the rise of cloud technology, they found running their facility cost-effective because of control over resources and bespoke architecture. Being in the oil and gas industry presented unique challenges in dealing with massive amounts of data, but having a dedicated facility allowed them to focus on BP's research needs. These factors are also relevant for other industries dealing with HPC clusters.

The big question for anyone running an HPC cluster is whether or not HPC workloads can be run successfully on general cloud services. That depends on the business's specific needs and the workload scale in question. While some companies may find it practical to collaborate with the cloud for spikes in demand, others require a large, fully utilized cluster to meet their needs.  Factors like predictive performance, data gravity, data size, and cost of operations are essential factors in HPC workload placement.

## Fighting the Resource Shortage

Acquiring and retaining talent in high-performance computing is challenging, particularly as the baby boomer generation retires. Keith suggests that building relationships with universities and identifying talented individuals early is critical to developing the necessary skills within an organization. Organizations must think long-term about creating successful HPC teams and building through mentorships. In these heterogeneous groups, scientists, system engineers, mathematicians, and computer engineers work together for years instead of months.

Building long-term commitments by investing in internships, pipelines, and fellowships is critical to creating a career-oriented work environment. Keith shares a challenge they faced in creating a shared vision for their team's future but found success in building a network of contacts outside of BP to help them achieve their goals.

## First Mover Advantage, Sharing

Another critical aspect of HPC in Oil in Gas is to have the first-mover advantage. Finding a new technique to find new energy sources can save the company billions of dollars. However, sharing information with competitors can also lead to discoveries that help the industry. This is an important balance that HPC professionals need to understand to get the most out of their work.

Keith shares a fun story of how their friends helped develop innovative technology to understand better the Gulf of Mexico subsurface geologic structures to find oil and gas. Despite the competition watching and questioning their methods, BP's experimentation proved successful. Keith explains that everyone is watching when you do something new in the field.

For example, they often contracted with companies like PGS to acquire data and the innovative solution of using helicopters and hard drives to deliver newly acquired data for processing. The results were impressive, showing better results than traditional methods. When asked about the future of HPC in the industry, Keith believes that collaboration will continue to be necessary, whether through shared clusters or collaborating on foundational science benchmarks. Despite the challenges, the HPC industry is exciting, and there are great opportunities for people to bring their computational skills and willingness to solve challenging problems.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople process and technology.</p>
<p>On today's episode, Lessonsfrom High Performance Computing in Oiland Gas with special guest Keith Gray.</p>
<p>Keith, welcome to the show.</p>
<p>Thanks, Darren.</p>
<p>A. Keith,you've just joined Intel not too long ago.</p>
<p>I mean, Intel of a short term meansyou haven't had your first sabbatical,which means seven years, whicha, but you've joined usjust in this last year, if I remember.</p>
<p>Right. Is that right?</p>
<p>That's correct. I joined last July.</p>
<p>So tell us a little bitabout your backgroundand what you're doing it, Intel.</p>
<p>Thanks.</p>
<p>So my background is geophysics.</p>
<p>I got an undergraduate degreefrom Virginia Tech and very much hopedit would help me find careeropportunities in oil and gas.</p>
<p>And I've been able to workmy whole career in oil and gas.</p>
<p>Worked really closelywith Intelfor a significant fraction of that.</p>
<p>And it was exciting to get the opportunityto joinand see the world from this side.</p>
<p>When I first came out of university.</p>
<p>I did seismic processing, quicklymoved into seismic software developmentwith Amoco.</p>
<p>I got the experience to work ina technology evaluation and deploymentteam.</p>
<p>And in 99, I was askedto lead the High Performance</p>
<p>Computing groupwith Consolidated Resourcesfrom the Amoco Tulsa Research Centerin Tulsa.</p>
<p>We moved compute from Denverand New Orleans into Houstonand started off our new journeywith BP in January of 99with 1/10 of a teraflop of compute power.</p>
<p>Wow. We had 1/10 of a Teraflopis like my phone now, right?</p>
<p>I mean, it's crazy.</p>
<p>Probably less than your phone.</p>
<p>At that point we had about 50 or 60 SGI</p>
<p>Power Challenge and Origin Systemsand we had the largest collectionof thinking machinesystemfive systems outside of the US government.</p>
<p>We were putting this all togetherin an environmentwhere oil prices have fallenby more than 75%.</p>
<p>We were consolidating a company.</p>
<p>We were gathering a group of peoplethat was considerably smallerthan what had been managing HPCin multiple sites.</p>
<p>But we were successfulputting it together.</p>
<p>We workedas an extensionof the seismic imaging research groupand supported themwhile they demonstrated the valueand became an integral partof BP's oil and gas exploration,development and production operations.</p>
<p>So what were some ofthe biggest challengesyou had with that consolidation?</p>
<p>Oh, during the consolidation,it was bringing everything together,putting it all into a facilitythat had originally been designedin the 19 in the mid 1980sto support IBM mainframes.</p>
<p>So there were facilities challenges.</p>
<p>We quickly ran out of the powerand cooling capabilities of that building.</p>
<p>I actually got to make lots of new friendsin December of 2004, when we deployedone of the first new systemsafter the merger,and we popped the main circuit breakerfor a buildingthat had over 4000 people. 000.</p>
<p>So everyone knew it was your faultthen, Keith.</p>
<p>Yes, they did.</p>
<p>Oh, so.</p>
<p>So you know, power.</p>
<p>Power, in fact, are always big concernswith HPC clusters, right?</p>
<p>Because, hey, there's a lot of powerthat goes into Iraq, right.</p>
<p>So how did you overcome, though?</p>
<p>I mean, didthey have to build a whole new facility?</p>
<p>So did you guys end up doing so?</p>
<p>I was able to define the requirements,justify a completely new facility,and then help,you know, lead the projectthrough construction and the move in.</p>
<p>So in 2004,we were able to patch that building,put in additional ups andcomputer roomair conditioners to support growth.</p>
<p>But by 2007 2008, it became clearthat something more viablewas going to be required.</p>
<p>By 2010,we'd gotten this supportto design a new building.</p>
<p>Unfortunately, in the spring of 2010,</p>
<p>BP suffered a tragedyin the Gulf of Mexico,and it was all hands on deck.</p>
<p>And so even high performance computingwas asked to participate.</p>
<p>Our team supportedcomputational fluid dynamicsto understand if you could actually lowera capping stack onto the Macondo well.</p>
<p>So our CFD analysis was valuable in thattheoretical exercise and supportedthe conclusion of that tragedy.</p>
<p>By 2011,we got support to go forward with adesign.</p>
<p>We broke ground in,</p>
<p>I think, May of 2012.</p>
<p>And finished construction and moved inby October of 2013.</p>
<p>So almost nine years.</p>
<p>So coming through that comingcircuit breaker,coming from the big whoops until theopening ceremony ofthe new building was about nine years.</p>
<p>Probably the first seven of thatwas just patching the facilitythat we had, building the business case.</p>
<p>We looked at lots of different options,co-location.</p>
<p>We looked at shared HPC capabilities.</p>
<p>We had a number of benchmarksthat we did to look at how cost effectiveour team was and what kind of capabilitieswe were delivering.</p>
<p>And through that process,we're able to justify the continued growthof the HPCand construction of a dedicated facility.</p>
<p>So that's really interestingbecause around 2011 or so,cloud technologywas really starting to just blow up.</p>
<p>I mean, it was really startingto become popular.</p>
<p>And so you got you guys did the analysisthat having your own facilityinstead of maybe runningall your HPC workloads in the cloudwas was viable.</p>
<p>Yes. Andwe have revisited that studypretty often over the last eightto 8 to 10 years.</p>
<p>Why was it so cost effective to run one?</p>
<p>So there's a number of points to that.</p>
<p>One is having a dedicated resourcemeans you have control.</p>
<p>You can focus on priority.</p>
<p>I am, yeah.</p>
<p>You'll have to decidewhether you want to keep this or cut it,but I've been arrogant enough to sayany idiot should be ableto keep up with Moore's Law.</p>
<p>But it takes somebody that is aggressiveand able todeliver new technologiesto do almost twice as good as Moore's Law.</p>
<p>And a lot of that camethrough our Real clear partnershipwith Intel that we paid attention,we worked closely.</p>
<p>We were willing to do things at scalewith Intelto test new ideas and new products.</p>
<p>So we were probably the largestcommercial installation of Intel Itaniumby 2004.</p>
<p>That gave us more than a ten X priceperformance stepcompared to proprietary UNIX systemsand small volume.</p>
<p>Interesting butchallenged processors like MIPS.</p>
<p>And then we worked closely with Intel.</p>
<p>We were a very early adopterof Nehalem technologythat gave almost a4x priceperformance bumpand balancingthe value that we could deliver to BP.</p>
<p>And we looked at that.</p>
<p>We actually stillbenefit from the flexibilitythat a bespoke architecture can deliver.</p>
<p>So wewe scale the network to fit our needs.</p>
<p>Were you able and willing to useinteresting processors?</p>
<p>We had probably the second largestcommercial installation of Knights landingwe had.</p>
<p>BP still has.</p>
<p>And one of the key clusters they have atthe momentis a cascade like AP system.</p>
<p>It's the firsttruly scaledwater cooled deployment that BP has done.</p>
<p>And when you look at the cloud,we still have a limited bandwidthto get data back and forth.</p>
<p>And sowhen you are dealing with huge datavolumes, that can be quite a challenge.</p>
<p>A typical input volume can be as much as</p>
<p>Anotherreality of working in oil and gasis that the researchers would call ustypically on a Friday afternoonand ask the operations team leadwho was responsiblefor resource allocation?</p>
<p>Hey, David, I'm about to run a job.</p>
<p>I'm going to submit itto run over the weekend.</p>
<p>It's going to create maybe two petabytesof intermediate results.</p>
<p>Where do you want me to put that?</p>
<p>They didn't ask.</p>
<p>Where is it?</p>
<p>They didn't give us six months warning.</p>
<p>They didn'tsay, Are you busy with other customers?</p>
<p>They said, I'm about to submit a job.</p>
<p>It's going to run.</p>
<p>Are you going to take care of me?</p>
<p>Yeah.</p>
<p>And it was our jobto make sure that happened.</p>
<p>So between the architecture, freedomto take on new technologies,picking architecturethat gave us great price performanceand the challenges of moving seismic data,having a bespoke facility that couldreally focus on what BP's researchneeded was valuable.</p>
<p>So do you do you think thatif I were to generalizethat outside of the oiland gas industry, other peoplethat are doing their HPC clusters?</p>
<p>Is that a common though?</p>
<p>Those those three things,are they common in otherindustries as well, where I'm dealingwith super huge amounts of data.</p>
<p>I mean, two petabytes of intermediatedata.</p>
<p>That's a lot of data.</p>
<p>And I need to be bleeding edge,not cutting as I need to be wayout there working with</p>
<p>Intel directly tolook at the latestand greatest accelerators and or CPU's.</p>
<p>Is thisis this always going to be the caseor can I start running some of these</p>
<p>HPC workloadsin the in the general cloudthat's out there?</p>
<p>What do you think?</p>
<p>I think thatit really comes down to your business.</p>
<p>For BP, we had a mixture ofa very high prioritytechnical service workand some fundamental seismicimaging researchthat had to be delivered.</p>
<p>We could keep a clusterfully utilized all the time,but when we had a high priority project,we could dedicate 100% to that work.</p>
<p>There's still no guaranteethat you may be able to ask forcoursein the cloud and get that in an hour.</p>
<p>Yeah, you're rightthat the scale that the scale that you'retalking about most people don't do.</p>
<p>I mean, when I do,</p>
<p>I do software development.</p>
<p>Still today I have fun doing itand I'll go to the cloudand I'll say, Oh, I need a thousand cores,no problem.</p>
<p>But when you start talking 350,000 cores,that's that's a that's a different story.</p>
<p>On a high performance, low latency networkaccessible to a filesystemthat can have many petabytesof storage capacityand potentially a half a terabytea second bandwidthto move data in and out.</p>
<p>Those are still interestingtechnical challenges.</p>
<p>There are other companies in the oiland gas industrywho have a different demand model.</p>
<p>There are seismic companiesthat deliver servicesto the major oil and gas companiesand they have spikes in their demandand it becomes much more practicalfor them to collaborate with the cloud.</p>
<p>Okay.</p>
<p>So there are somethere are some use cases, it sounds like,where thatwhere the cloud can be leveragedand you have to have a certain economiesof scale to be able to compete.</p>
<p>And once you reach that economy of scale,you can continue to justify growth.</p>
<p>But there areyou know, there's there'sinternal conversations about strategy.</p>
<p>There's,you know, what's the long termfuture of oil and gas?</p>
<p>Right now, it's very clear thatour industry needs to deliver cleanerfuels,do it more effectively.</p>
<p>But we're going to bepart of the energy mixfor many decades.</p>
<p>I want to talk about acquiring talentbecause this this has popped upin a couple of my podcast recentlywhen I talk to people.</p>
<p>There seems to bea gap that no one's really talking aboutas the babyboomers are starting to retire.</p>
<p>And all that knowledge,especially around high performancecomputing and in technical computing,is thereis there a huge gap that you're seeing andhow do you find thattalent and how how do youdevelop thatin your organizationso that you don't have a gap in continuityin running these HPC clustersand utilizing them effectively?</p>
<p>So the oil and gas industryhas recognized the great crew changefor more than a decade.</p>
<p>That's an interesting way to call it.</p>
<p>The great crew change.</p>
<p>That's that's the way we called it.</p>
<p>There were a significant number of peoplethat came into the industryfrom the late 1970suntil about the first oil pricecollapse in 85, 86,and at that point,oil prices droppedcheese,they'd gotten close to $50 a barrel.</p>
<p>And in the spring of 86,they were less than ten.</p>
<p>Wow. Wow.</p>
<p>So you can imaginewhen your revenues are cut by 75, 80%,what happens to thatmany companies that managed to survive?</p>
<p>They go through lots of changesand we wentthrough those timeswhere we really did not hire.</p>
<p>And then about 15 years ago,it became clearwe needed to grow capabilitiesand when you look at the skillsrequired for high performance computing orthey're still unique, they still requirebrilliant people to come in.</p>
<p>Oil and gas has to competewith the technology industryover the last 5 to 8 years.</p>
<p>We've lost a lot of people off to techthe way that our teamat BP managed to accomplish.</p>
<p>Growing our skill sets was by makingreally key friendshipsat a number of universities,identifying people early,bringing people in for oneor two internships,looking for peoplethat not only had the driveand skills,but they had the right cultural fit.</p>
<p>So our team jobwas to sit next to the seismicimaging reservoir simulation researchersand have an applied mathematician,a computer scientist,a geophysicist that love to do softwaredevelopment, sitting next to a researcherwho understood the mathematicsand the domain science and haveone domain specialistand one computing specialist delivermore than three timesthe work of that individual by themselves.</p>
<p>That's very rare to find and doesform these teams.</p>
<p>That must have been very difficultand continues.</p>
<p>It continues.</p>
<p>The only way that you accomplishthis is by a long term commitment,continuing to bring in internships,thinking about your pipelineat five, six, seven years,identifying students, funding fellowshipsand and and that's a very different modelthan most high tech.</p>
<p>I mean, most high tech.</p>
<p>It's like bring you in two or three years,burn you out and then throw your way.</p>
<p>Now, this is so this is like a career.</p>
<p>When you get in, you're there, right?</p>
<p>If you get in and you are ableto recognizehow you can make a contribution,then you create a role for yourself.</p>
<p>That is so valuablethat you're going to be neededfor a very long time.</p>
<p>Are there any other challengesthat you ran intothat you overcameor that maybe you ran intoand you went, Oh,</p>
<p>I botched that completely.</p>
<p>Anything that you can give other peopleadvice on how to how to really createthese a service oriented organizations.</p>
<p>So I think one of thechallenges ishow do you create a shared visionfor where you want to be in 3 to 5 years?</p>
<p>It's hard to get much past that, butmaking friendsoutside of BP and talking to peopleand building a network of contactswas really valuable for our success.</p>
<p>Why is that?</p>
<p>I mean, aren't aren't those contactssometimes competitors sometime is, yes.</p>
<p>But most of the workthat's being done in high performancecomputing in oiland gas companies isit's clearly not a commodity,but it isand it's something that we all understandwe've got to go deliverand there's not a ton of secrets.</p>
<p>Gotcha.</p>
<p>Even in the seismic imaging research, it'shard to keep a secretfor more than a year or two or three.</p>
<p>BP Strategy for Intellectual Propertywas to either firstdeliver for BP's most critical assetsand then share itso that it becomes more widely available.</p>
<p>Raised the tide for everyone.</p>
<p>For everyone to have have vendorsthat can deliverthe more commodity work.</p>
<p>And then as you rise is the tide rises.</p>
<p>You stay focusedon the most important work.</p>
<p>Win the one fun storyin 2000 to 2003.</p>
<p>Two of my best friendscame up with an idea.</p>
<p>They recognized thatthe geologic structuresin the Gulf of Mexicothat we truly cared aboutwere obscured by salt structuresabove them.</p>
<p>And the way of understandingthe subsurface was by putting energyinto the earth,having it propagate,and then putting the set of receivers.</p>
<p>Think of it as an antennaand then capturing that energywhen it comes back to the surface.</p>
<p>And so my friendsrealized that much of the energywe were propagating in the earthwasn't coming back to the antennathat we were pulling behind the boats.</p>
<p>So with these, these friendscame up with two different solutions.</p>
<p>One was insteadof pulling a small number ofcableswith receivers behind a single boat,let's put multiple boats out thereand let's take the energy source outfrom directlyin front of that string of receiversand put it further awayso that we can plan theright path of the energy and understandwe want the antennawhere the energy comes back to the surfacebecause we want to illuminatethe areas that have oil and gas.</p>
<p>And so in 2004, we went offand did two different experiments.</p>
<p>One with this new technology called</p>
<p>Wired as a toad streamer.</p>
<p>The otherwhere we contracted with the company,taught them how to buildlittle computersthat were placed on the seabed.</p>
<p>And the first experimentwe did was in between fourand 6000 feet of waterin the Gulf of Mexico.</p>
<p>So we did these two experiments.</p>
<p>The interesting thing, though, was duringthese experiments, our competitorswere flying helicopters over the Gulf,watching what we were doing.</p>
<p>Of course, instead of having one boatwith one set of air gunsand one set of receiver strings,we had multiple boatsand air guns on differentdifferent boats spread out more widely.</p>
<p>And so the first time we didit, people were wonderingwhether we were crazy or brilliant.</p>
<p>The second time that we did it,they realized BP's not offdoing an experiment the second time.</p>
<p>If it didn't succeed, the first.</p>
<p>The first. Yeah, yeah, yeah.</p>
<p>So everybody reallyhad enough intuitionor what was going on to think about what?</p>
<p>What's happening.</p>
<p>So at that point, keeping a secretis challenging.</p>
<p>You've already contracted with a companylike PGS to acquire the data,so they're telling their friends,your guys, you're talking.</p>
<p>So we published that information andyou know, the challenge of delivering thatcomputation personallyand operationally was interesting.</p>
<p>We sent helicopters out to the boatsonce a week to do crew changesand we would bring hard drivesfull of the newly acquired seismic data,put it on to a hotshot truck driverto Houston.</p>
<p>One of the people in our teamwould pick it up from the driveron Saturday morning, loadit in, we'd be processing and by Mondayor Tuesday, people who were standingin front of their workstationswanting to look at the image.</p>
<p>And before we before we were halfwayfinished, this $50 million experimentwas delivering better resultsthan the traditional methodof requiring seismic that we'd employ for,you know, easily the previous two decades.</p>
<p>That's it. That's incredible.</p>
<p>Alwayswe're going to call a helicopter network.</p>
<p>It was a helicopter network.</p>
<p>That is incredible.</p>
<p>It was what was the bandwidth?</p>
<p>Latency was really low, but the bandwidthwas probably pretty high, Right?</p>
<p>The bandwidth is huge.</p>
<p>The running timeis that the bandwidth of a 50 foot,is just almost infinite.</p>
<p>Yeah, that's that's incredible.</p>
<p>Well, Keith,this has been wonderful talking today.</p>
<p>Where where do you see</p>
<p>HPC going in the futurestill?</p>
<p>Do you still see ushaving our own clusters?</p>
<p>Do you see one massive cluster run by,you know, BPthat everyone can use in their lives?</p>
<p>Where do you see things going?</p>
<p>So that's that'skind of an interesting broad question.</p>
<p>I think thatas our industry goes forward,we'll have to continue to collaborate.</p>
<p>Whether we ever get to a place wherewe collaborateon a huge shared HPC clusteror if we just collaborateon some of the foundational sciencebenchmarks,some of the data handling routinesthat really don't createsignificant volume.</p>
<p>We're definitely collaboratingon developing people.</p>
<p>Intel is fundinga project at the University of Texas</p>
<p>Advanced Computing Centerto do benchmarking for seismic algorithmshigher students that are mentoredby the tech staff and by industry expertsto help growthe talent we're going to need.</p>
<p>So we'll we'll find ways to collaborate.</p>
<p>We'll find ways to compete.</p>
<p>The challenge is still out there for ustoday.</p>
<p>If we had a computerthat was 100 times larger,we would find a way to use that very,very quickly.</p>
<p>We have ideason increasing the resolutionby a factor of twothat require almost 20 x more compute.</p>
<p>We have ideas on using more of the physicsand taking awaysome of the simplifying assumptions thatmade 30 or 40 x more compute.</p>
<p>It's still a fun business.</p>
<p>Yeah, it sounds like, Well, hey, Keith,this has been wonderful.</p>
<p>Thank you for your great insightinto the industry,specifically around oil and gas.</p>
<p>Any last words for our listeners today?</p>
<p>No, I think this is still an exciting timewhen people think about comingto work in oil and gas,bringing mathematics,computational skills, awillingness to collaborate,a capabilityof being driven to solve challengingproblems is going to be a recipefor having a brilliant,interesting career.</p>
<p>Hey, I agree.</p>
<p>This is awesome.</p>
<p>Thanks a lot, Keith. And until next time.</p>
<p>Thank you, dear.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.org.</p>
<p>Until nexttime, go out and do something wonderful.</p>

</details>
