---
layout: posts
title: "Securing Critical Infrastructure"
number: 107
permalink: episode-EDT107
has_children: false
parent: Episodes
nav_order: 107
tags:
    - Critical Infrastructure
    - HOTMS
    - irdeto
    - OT Security
    - Cybersecurity

date: 2022-09-20
guests:
    - Darren W Pulsipher
    - Carla Trevino

img: thumbnail.png
summary: "Intel’s Darren Pulsipher, Chief Solutions Architect, Public Sector, and Carla Trevino, Solutions Architect, Irdeto, talk about the importance of security in critical infrastructure."
---

{% include soundcloud.html id="edt107" title="#107 Securing Critical Infrastructure" %}

{% include youtube.html id="S2C1v5zyZJY" %}

---

Carla is originally from Mexico, living in Amsterdam after living in several countries, including Germany, over the past four years. She studied industrial and mechatronic engineering, then after working for a few years in the field, she earned an M.S. in mobility systems engineering, where she focused on autonomous vehicles.

The definition of OT critical infrastructure is any point that can trigger chaos in the real world. This is very different from IT infrastructure; IT lacks vital infrastructure. In the OT world, people can die if things go wrong. There can undoubtedly be chaos in the IT world, but the problem can be solved by fixing things. When there is chaos in critical infrastructure such as transportation, accidents can happen, and people’s lives are at stake.

There has been an uptick in the importance of security in critical infrastructure in the last five years, and certainly during the COVID pandemic; critical infrastructure has been relentlessly attacked in some cases. This can be attributed to people becoming bored and more creative, but also because the attack surface increased with the sudden shift to remote work, which broke down some of the security measures previously in place.

In transportation, part of the issue is the increase in connectivity, which brings potential attacks. Customers want more services, and companies want more data and access to information. With that comes opening up the transport network. The air gap, which previously offered safeguards, is diminishing.

The industry cannot use security measures that IT has been using for years because IT and OT are entirely different.  It is generally standardized, whereas OT is not. OT has a massive ecosystem with significant differences in devices that follow other protocols and implementations. For example, every country has different implementations. OT is also on another level because lives are literally on the line.

Another difference between IT and OT critical infrastructure is that in IT, if there’s a problem in your network, you can isolate it and even shut it down and move the workload elsewhere. That is not possible in critical infrastructure, so the approach is different.

The danger is that IT and OT networks have collapsed because of the desire for more connectivity, and at the same time, there has been an increase in cyber threats. Irdeto seeks to educate the industry on the complexities of these problems and offer solutions. It’s all about preventative solutions, not reacting after a disaster strikes.

Carla says organizations must have experts for security. Developing security in-house based on mandated standards is not good enough as the standards run behind the development.

Irdeto has been securing critical infrastructure for 50 years. They have about 1,000 employees, and 70 percent of them are in research and development to keep on top of what type of attacks are happening today and what kind of attacks can exist in the future. Irdeto strives to be one step ahead or future-proof. Their services evolve as the system evolves.

Irdeto can help customers who know what they need, whether PKI, keys and credentials, lifecycle management, or software protection. They can also help customers who do not know what they need and provide lasting solutions as threats evolve.

For more information about Irdeto, go to their website www.Irdeto.com/connected-transport to learn more about their 
products or contact them directly. 


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, thisis Darren Pulsipher, chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople, process and technology.</p>
<p>On today's episode, the importanceof Security and Critical Infrastructurewith special guest</p>
<p>Carla Trevino from IRDeto.</p>
<p>Carla, welcome to the show.</p>
<p>Thank you very much, Darren,and thank you for having me here.</p>
<p>Excited for our talks.</p>
<p>Yeah.</p>
<p>So Carlaand I've been working together on a jointeffort between Intel on your demo.</p>
<p>Carlos The solution architect.</p>
<p>I'm a solution architect.</p>
<p>So we got two real geeky people onon today, on the episode,which should be a lot of fun.</p>
<p>And we're working together onsecurity in the Iot space,which is really fascinating stuff.</p>
<p>But first, Carla,before we get into the geeky stuff,tell us a little bit about yourself.</p>
<p>Yeah, thank you very much.</p>
<p>Yeah. So, Carla Trevino, my name.</p>
<p>I'm originally from Mexico.</p>
<p>I'm currentlyliving in Amsterdam in the Netherlands.</p>
<p>I've had interesting path on my careerinternational wise.</p>
<p>I've lived in several countriesthe past four years.</p>
<p>I was living in Germany.</p>
<p>I know very much what it isabout working cross-culturaland living cross-cultural.</p>
<p>I can say that</p>
<p>I'm an engineer from background,so we are geeky.</p>
<p>Would be the nice term.</p>
<p>I studied industrialengineering and mechatronics engineeringand after a couple of years of working,</p>
<p>I decided I wanted to studymore engineering.</p>
<p>So I did a master's in Sciencein Mobility Systems Engineering,and where I focused in autonomous drivingcars, vehicles and so on.</p>
<p>So yeah, I love technology engineering.</p>
<p>That's somethingthat I'm into pretty much.</p>
<p>All right.</p>
<p>Finally, a real engineer on the show.</p>
<p>I've had others, but it's great to havesomeone that just you love learning.</p>
<p>I can tell Carla.</p>
<p>Yes, definitely. Yeah.</p>
<p>And then also a little bit going tothis is you don't know.</p>
<p>I'm going to ask this question.</p>
<p>What has been some of the hardest thingswhen you move to a new culture?</p>
<p>Because you said you've moved todifferent cultures throughout the world.</p>
<p>It sounds likeyou've been a lot of places.</p>
<p>What's one of the hardest thingsto get used to when you first move?</p>
<p>I would say, firstof all, if you don't know the language,that's a great barrier.</p>
<p>So when I moved to Germany,</p>
<p>I couldn't speak any German,so that was hard part to start on.</p>
<p>It's been really hard. Yeah.</p>
<p>But getting used to people'sbehavior,like people acting on different way.</p>
<p>The typical things that you don't know,as if you have to tip the serverswhen you go to a restaurant.</p>
<p>What are the normal like?</p>
<p>How do people behavein certain circumstances or thingslike that, or critical conversationslike maybe politics?</p>
<p>How do people talk about those things?</p>
<p>That's hard.</p>
<p>And then I always miss Mexican food,so that's.</p>
<p>All I was going to say.</p>
<p>I love Mexican foodbecause I live in Californiaand I'm a I'ma fourth generation Californian.</p>
<p>So we have a lot of Mexican foodin California.</p>
<p>And I've been to Europe.</p>
<p>There is no good</p>
<p>Mexican food in Europe. Now,</p>
<p>I can only confirms.</p>
<p>You can you can confirm that.</p>
<p>That's good to know.</p>
<p>All right.</p>
<p>Let's let's dove right into this.</p>
<p>First off, what first off,what is critical infrastructure?</p>
<p>When we say that term criticalinfrastructure, what do we really mean?</p>
<p>Well, when we talk aboutcritical infrastructure,it talks about anyopen point that can lead.</p>
<p>Or let me see, how do I not getso technical into answering this question?</p>
<p>You get technical.</p>
<p>Let's start being basic.</p>
<p>So critical infrastructurecomes from criticalright on what can bring chaosif it's exposed, what can be.</p>
<p>When when some when you'remanaging something, when you're managinginfrastructure, if something goes wrongin certain points or in certainparts, that is definitely somethingthat is critical to start with.</p>
<p>We can we can start with the definitionpart of it.</p>
<p>So any point that can bethat can be a triggerfor chaos can be considered critical.</p>
<p>So in this case, when wetalk about it, we're talking about chaosin the real world. Yes.</p>
<p>Audience, not in the virtual world. Right.</p>
<p>This is very different than I.T.infrastructure.</p>
<p>There's very little criticalinfrastructure in the IT world.</p>
<p>In the OT world, critical infrastructure.</p>
<p>I mean, people die rightif things go wrong.</p>
<p>Right. Exactly.</p>
<p>I mean, chaos on like our on a peoplelevel, let's call it like that.</p>
<p>So I mean,it's you world, but it's chaosthat you can solve by fixing some things.</p>
<p>When there is chaoson critical infrastructure or when you'retalking about transportation,when there's chaos, people can die.</p>
<p>Accidents can happen.</p>
<p>Yeah. Yeah.</p>
<p>So we've seen an uptick in the importanceof critical infrastructureover the last probably five yearsand a little bit pre-COVID,but absolutely during peak during COVID,we saw critical infrastructurebeing attacked relentlessly.</p>
<p>In some cases.</p>
<p>Have you guyshave you noticed that, too,in the transportation world as well?</p>
<p>Definitely. More attacks more?</p>
<p>Definitely.</p>
<p>I think it's a combinationof probably people where bored fromnot being able to be able to flyand started to get creative.</p>
<p>People got very I mean, creativitymoved into like fears for other people.</p>
<p>So probably that was somethingthat was generated for being lockedin the time that we were locked in COVID.</p>
<p>Definitely this had started before.</p>
<p>So we would likeyou would see certain creativitythat would harmor that would look into peoplejust testing out, Hey,what happens if I do this?</p>
<p>And but this creativity,</p>
<p>I think went beyond what we hadseen on the COVID period.</p>
<p>It can be a combination of peoplebeing bored, of people having more timeto get creative while being at home orof yeah, of more fears coming outfrom people's mind and people's mouth.</p>
<p>Yeah,</p>
<p>I think that had a lot to do with it.</p>
<p>The, you know, societyas a whole was kind of disrupted, right?</p>
<p>With COVID worldwideand people started toying around.</p>
<p>I think boredom was part of it.</p>
<p>I also think with more peopleworking from home,we also increased the attack surface.</p>
<p>So now there were more people workingremote, even people that were workingin managing criticalinfrastructure were working remote now.</p>
<p>And I think that broke down some of thesecurity measuresthat we used to keep in place.</p>
<p>Definitely. And I mean.</p>
<p>What are your thoughts on that?</p>
<p>I mean. I am I can only agree.</p>
<p>And I think the fact that the companieshad to adjust so quickto everyone working from home,they had to adjust their networks.</p>
<p>They had to adjust the workloads.</p>
<p>They had to adjust so many things.</p>
<p>And on a sure like we can say in a very,very short period of timeand this opened the possibilities forattacksinto different levels than before, becausethen if you were living in a buildingand you hadlet's say in that building,you could have access or you could havea pretend like you knew everyone was thereand you knew everyone was working.</p>
<p>And you probably talkto your neighbors before.</p>
<p>So it opened up the possibilityof getting into more layersthan it would have been before.</p>
<p>So let's talk specific.</p>
<p>Let's drill down a little bitinto transportation.</p>
<p>Um, specifically and how, how is thatchanged over the last three or four years?</p>
<p>And, and what kind of threat vectorsand what kind of threatsare we seeing in that area?</p>
<p>Well, I would talk about maybe.</p>
<p>Yeah, what has happened istransportation is becoming more connected.</p>
<p>You have more servicesthat are being offered.</p>
<p>You have more connectivityin vehicles and infrastructure.</p>
<p>And with connectivity,there always comes the potential.</p>
<p>I mean, there comesall the beauties that there are with them.</p>
<p>You can control them,but if you can control them,you can control them for the goodor for the bad.</p>
<p>Right.</p>
<p>And and this comes I mean, this comes fromfrom the services that the providersare giving to the final customers,those that are being transported, thatthey want to have more digital services.</p>
<p>But also the servicesthat are being offered to the transportsuppliers or providersfrom their suppliers themselves.</p>
<p>Everyone wants to become more digital.</p>
<p>Everyone wants to have more connectivity,more access to data, more accessto information.</p>
<p>And all of that comeswith opening your transport network,which was formerly not open.</p>
<p>So what we know as air gap,so it was not connected, it was safeper definition, right.</p>
<p>So and I think this is interestingbecause you said servicesto the customers.</p>
<p>So services like wi fi on the train,other digital services likestreaming video and entertainment,all those sorts of things.</p>
<p>I think people don't understandall those sorts of things provide.</p>
<p>You need connectivity to do that.</p>
<p>Right.</p>
<p>And what you're saying isthey've broken down that air gap thatoriginally the train was connected,but that was control systems.</p>
<p>Those were critical systems. Right.</p>
<p>Controlling the train.</p>
<p>All of a sudden,those those there's connectivity betweenthose critical infrastructure and alsoall this other connectivity that I have.</p>
<p>Is that what I'm hearing?</p>
<p>Yeah, exactly.</p>
<p>Yeah, that's that's exactly the point.</p>
<p>So what's soand so why not just use the ITsecurity stuff we've been doing for yearsand just put that on the train?</p>
<p>Why why doesn't that work?</p>
<p>Well, there are several aspects to that.</p>
<p>First aspect is when you talk about it,when wewhen we talk about like the devicesthat are using it and the world of it,we can say it's a worldthat it's pretty standardized.</p>
<p>That's not true for the old world.</p>
<p>We have a huge ecosystemwith huge differencesin devices, fielded devices and suchthat are following differentprotocolsthat are implemented on different.</p>
<p>Even if you go like internationally,every country has a different wayof implementing and so on.</p>
<p>So it's not standardized, it'snot a mobile device. Andand thereforefrom that side, it's alreadya very different level from that.</p>
<p>It second level is what we discussedbefore thethe differences in criticalinfrastructure in talking about, well,if you're on the trainand you're a personand something happens to the train, well,there's a possibility of personsgetting injured or worse.</p>
<p>So you have to from one sidehandle it on a different levelbecause we're talkingabout different things completely.</p>
<p>And why are you talking aboutdifferent thingsand the complexities that come with thatgo with the standardize the differentdevices,the different everything that there isnow. Ilove how you said it's not standardized,so it's highly heterogeneous.</p>
<p>So I can't applyjust one security standardand just go with everyeveryone needs to just follow this.</p>
<p>So that's one aspect.</p>
<p>And then the other one I kind ofwant to pick out a little bit, and that isif there's a problem in your i.t.</p>
<p>Network, a security problemisolated in a quarantine, it.</p>
<p>Right.</p>
<p>And then I shut it down.</p>
<p>I can't do thatin critical infrastructure, can I? No.</p>
<p>I mean, what are you going to do?</p>
<p>Are you gonna isolate, trainand shut it down?</p>
<p>And, I mean.</p>
<p>Yeah, that's a big problem, right?</p>
<p>Definitely.</p>
<p>You can't just shut it down in and movethe move the workload somewhere else.</p>
<p>It's on a physical. Device and you cannotfreeze it until we see what's going on.</p>
<p>So the approach,it sounds like the approach in O.T.and critical is very, very different.</p>
<p>It is. It is.</p>
<p>And I think this is one of the things thatthe industry and everyone aroundit has to first of all, understandwhy it's different, but also understandthe differences between it not.</p>
<p>I think sometimes this is not so clearfor certain persons or.</p>
<p>Yeah.</p>
<p>So first.</p>
<p>Especiallyif you're a cybersecurity expert, right?</p>
<p>If you're a cybersecurity expert,you just come in and say,oh, that's a cybersecurity problem.</p>
<p>This is what we do, right?</p>
<p>We identify, we detect, we quarantine,we do forensics on it.</p>
<p>Then we you can't do that in O.T.so it's a completely different space.</p>
<p>Exactly. Yeah.</p>
<p>So this sounds to me like a disasterjust waiting to happen.</p>
<p>Right.</p>
<p>We've collapsed the 90 networks togetherin some aspectsbecause I want more connectivity.</p>
<p>I want more data coming out of thosetrains to run analytics on.</p>
<p>And at the same time, we've seen an uptickin cyber threats and cybermalfeasance, if that's a word.</p>
<p>And so and people that don't havea real good knowledge onhow to do ot security.</p>
<p>Sounds like a disaster waiting to happen.</p>
<p>Is that true?</p>
<p>Well, we hope we don't get to that point.</p>
<p>So this is exactly whatwe're trying to do.</p>
<p>We're trying to work togetherwith the industry,educate on the complexities, educate.</p>
<p>We don't want to bring fear.</p>
<p>It's not about bringing fearto the industry.</p>
<p>It's about opening the eyesbefore the disaster happensand looking at cybersecurity.</p>
<p>I mean, you can we sometimes dothis comparison.</p>
<p>It's a sad comparison, but you can seecybersecurity kind of like an insurance.</p>
<p>You don't want to have the insuranceafter your house burnt down.</p>
<p>You want to have it before it burned down.</p>
<p>You want it not to burn down,of course. Yes.</p>
<p>You don't want it to have her down. Yeah.</p>
<p>You don't want to get to the pointwhere your house is on fire.</p>
<p>But if your house is on fire,you want to have an insurance.</p>
<p>And this is exactly what cybersecurityis going to prevent.</p>
<p>The having the fire, let's say so.</p>
<p>I mean, it'sa different level of complexity.</p>
<p>But we we think there's athere's a lot of educationthat needsor that is happening that at the moment.</p>
<p>And we're working togetherwith a lot of players.</p>
<p>And I think this is</p>
<p>I mean, the cybersecurity on the old side,</p>
<p>I think we are all on the same side.</p>
<p>We're all wanting to educate the industryto help them be aware of what there isso that they consciously decidethat they need somethingand take preventive measuresbefore that something happens.</p>
<p>These attacks are getting moreand more complex.</p>
<p>Does that mean if I do have criticalinfrastructure that I need to hirea cybersecurity expert or</p>
<p>I need to hire a firm to help me do that?</p>
<p>Or can I do it on my own?</p>
<p>Is it is it can I educate myself to do iton my own or not?</p>
<p>Well. What would you say?</p>
<p>I would say it's very hard to educateyourself in topics that you don't know.</p>
<p>So from one side,</p>
<p>I mean, if you're confidentthat you are an expert on the matterand that you can do it on yourselfbecause you have the expertize,then it can be that you build it.</p>
<p>But if you're trying to say, hey,this is something that I mean,you need experts and experts are onlygoing tobe experts if they've done it before,if they know what they're talking about.</p>
<p>So there are, of course, standards,which is I mean,we all work on I mean, industry works onstandard basis, right?</p>
<p>Sadly, what we're seeing todayis that the standardsare running behind the developmentthat is coming with the industry.</p>
<p>So of course, you can followif you want to develop things in-house,you say, well, I'm following the standardsthat are mandated.</p>
<p>The question is, is that enough?</p>
<p>And if you're not able to answer thatby your own,probably you don't have the expertizeto assesswhetherwhat kind of cybersecurity solutionsyou need, what kind of protectionsdo you need where you're vulnerable,what are your vulnerabilitiesand things like that?</p>
<p>So this is where your data comesin, right?</p>
<p>You guys have a long historyof securing critical infrastructure.</p>
<p>And so</p>
<p>I'm sure you guys have seen an uptickin business in the last couple of years.</p>
<p>I would guess you have.</p>
<p>Is that true to say?</p>
<p>Yeah.</p>
<p>Well, your data, it's a companythat started doing cybersecurityand that is five zero, not one five.</p>
<p>So we've built time.</p>
<p>You know.</p>
<p>It's more than I've been alive,</p>
<p>I can tell you that. Sowith we have expertsand we have expertizethat has been evolving as industrieshave been evolving as thismalicious attacks have been evolving.</p>
<p>And we're no there's no end point to this.</p>
<p>There's going to be new wayspeople are going to get more creative.</p>
<p>Technology is advancing and there'sgoing to be new ways of attacking.</p>
<p>But companies like our company,we are a company,we have around about 1000 employees,but 70% of them are in researchand development and they're looking intowhat kind of attacks existtoday, but also what kind of attackscan exist in the future.</p>
<p>And we're doing the research into thatand we're making surethat we are future proof.</p>
<p>We want to be one step ahead.</p>
<p>We want to make sure that our customersare going to be protectednot only the moment that they get asecured system, but also ask the security.</p>
<p>As the system is evolvingand the new use cases are coming, that ourour services are also evolving with themand that they're going to be securedin the future as well.</p>
<p>So it's not something that you just buyand you implement it today.</p>
<p>You can't just buy it and say,oh, I'm secure right now.</p>
<p>That makes sense.</p>
<p>And I like how you said</p>
<p>I mean, everything's evolving, right?</p>
<p>The cybercriminalsare getting really sophisticated.</p>
<p>We saw that with the Centennial Pipelinebreach.</p>
<p>That was very interesting.</p>
<p>And there's been several others as wellthat thatthe people thought they were air gapped,but they weren'tbecause cyber criminalshave figured out how to bridge air gaps.</p>
<p>Now in creative, very creative ways.</p>
<p>So tell me a little bitabout the types of youmentioned tools that you guys have,but what's your approachwhen when you talk about securingcritical infrastructure, what are the keytenantsthat you guys have put into place, bothin in process and technology?</p>
<p>Because I know you guys do both. Right.</p>
<p>And so tell tell us a little bitabout your portfolio,what you guys have availableto help people?</p>
<p>Well, there is let's say there are alwaysthe two sides of the story, right?</p>
<p>When it comes to, hey, I'm a customer,</p>
<p>I need some support.</p>
<p>So there are and there are differentlevels where the customers are.</p>
<p>There are customers that really knowwhat they want and what they need.</p>
<p>And you can talk very straightforwardinto the solutions that they need.</p>
<p>And this is where we can talkabout portfolio, about specifics.</p>
<p>So what do you need?</p>
<p>Are you talking about you need PKI?</p>
<p>I do need some kind of keysand credentials.</p>
<p>Life cycle management.</p>
<p>Do you need are you looking intoprotecting your network?</p>
<p>Do you need an anomaly detection system?</p>
<p>These are all solutions that we offer.</p>
<p>We offer, for example,software protection as well.</p>
<p>But there's also customersthat are kind of more into</p>
<p>I don't know what I need.</p>
<p>I don't know what else. Yeah.</p>
<p>You don't know what you don't know, right?</p>
<p>That's tough.</p>
<p>So, I mean, we have expertizeand we're more than happyto walk with our customers,to walk with the andwith what kind of solutionsare there in the industry?</p>
<p>There are several practicesthat you can have that you can implement.</p>
<p>For example, when you're talking about,</p>
<p>I want to protect my asset,we can make some kind of guidelineslike device hardening todetect where the vulnerabilities areand detect what kind of solutionsare needed to mitigate those peoplein our abilities that the customers have.</p>
<p>So we can we mostly work on implementingmanaged servicesbecause we do believethat the customer needsus to work together with themand give them a solution.</p>
<p>As I said before,not that, hey, here's what you need.</p>
<p>Put it on your on your system.</p>
<p>And there you go.</p>
<p>You're good to go because the thing thatthe threats are evolving,the hackers are getting more creativetechnologies evolving.</p>
<p>So we want thatour solutions evolve with them.</p>
<p>We want to make sure that our expertizeis being offeredthroughout the lifespan of theof the asset that we're protecting.</p>
<p>But we can also offer what there isbefore some kind of professional servicesthat might be neededso that they're awareof what they need to implement beforehand.</p>
<p>Right.</p>
<p>And I love that you guys have that servicebecause you're right, a lot of peopledon't know how to even securetheir critical infrastructure.</p>
<p>Right.</p>
<p>Maybe they just use the Perdue model,which is just air gapped itand then someonewalks in with a USB keyand sticks it into a deviceand all of a sudden you've got malwarespread throughout the whole OT network.</p>
<p>We've seen that time and time again.</p>
<p>So you guys understand the crime,the criminal element,let's call them what they areor the nation state that's tryingto disrupt your critical infrastructure.</p>
<p>So it's good to have you guys come inand kind of do an assessment, right?</p>
<p>This is where you're at.</p>
<p>These are the tools that you needand so on and so forth.</p>
<p>I love the approach.</p>
<p>I think it's it's very valuableif people want to find out moreabout this approach and what your datacan bring to the table, where do they go?</p>
<p>Because are going to our websitethat your death tollyou spell it irtet0 dotcom slash connected dash transport.</p>
<p>There you can find some informationabout our products. Definitely.</p>
<p>There's also an optionto contact us directly from there.</p>
<p>And then you can likewe can schedule the first callto get to knowyou, that you get to know usand that we start understandingwhat the requirements are.</p>
<p>So, I mean, you can get a good understanding of our products from the website, butdon't be shy to ask forfor getting in contact with usand we will make sure to givethat information more in accordanceto what the customerspecifically is needing or the company.</p>
<p>Oh, that's great.</p>
<p>Also, you guys, we work together, Inteland your dad, we're working togetherso that you guys can even make your toolseven more secure by using Intel'stechnology under the covers.</p>
<p>So a great partner here. Ditto.</p>
<p>And Carla, thank you.</p>
<p>It's been it'sbeen very enlightening today.</p>
<p>I learned a lot of things.</p>
<p>Yeah. Thank you very much for having me.</p>
<p>And yeah, I'mlooking forward into our collaboration.</p>
<p>I think Bringing</p>
<p>Security Foundation from hardwareplus adding extra layers of softwareon the security in top of it,what Intel has to bring, plus whatyour data has to bring will definitelyhelp the industry get one step furtherinto being more secure.</p>
<p>Thank you for listening to Embracing</p>
<p>Digital Transformation today.</p>
<p>If you enjoyed our podcast, give it fivestars on your favorite podcast insideror YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.org until nexttime, go out and do something wonderful.</p>

</details>
