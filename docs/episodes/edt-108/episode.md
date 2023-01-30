---
layout: posts
title: "History of Advanced Communications"
number: 108
permalink: episode-EDT108
has_children: false
parent: Episodes
nav_order: 108
tags:
    - 5G
    - Advanced Communication
    - Cell Phone
    - Comms
    - WiFi6

date: 2022-10-05
guests:
    - Darren W Pulsipher
    - Leeland Brown
    - Anna Scott

img: thumbnail.png
summary: "In this episode, Darren talks to frequent Intel guests Leland Brown, Principal Engineer: Technical Director of Advanced Communications, and Dr. Anna Scott, Chief Edge Architect for Public Sector, about the history of advanced comms."
---

{% include soundcloud.html id="edt108" title="#108 History of Advanced Communications" %}

{% include youtube.html id="XllHSDenC9g" %}

---

The first generation of cell phone technology, the Advanced Mobile Phone System (AMPS), was developed in the late 70s and early 80s. In the early 80s, making a call from your car with a bulky bag phone was a luxury. The luxury of making a mobile device call soon became a necessity.

In the early 90s, technology progressed as the Global System for Mobile Communications (GSM) standard developed to describe the protocols for 2G, which became the global standard by the mid-2010s. 2G started to turn the mobile phone into something with more capabilities than just making a call, adding texting, and even playing games.

3G launched in the early 2000s and brought some nascent data capabilities with the internet, which is still in its early stages. Wi-Fi was not broadly available, but you could, for example, access a carrier’s data network by connecting a phone to a laptop. You could do minimal, of course, with modem or DSL speeds.

With 4G, technology transitioned into a unified standard, converging CDMA and GSM into one LTE under the 3rd Generation Partnership Project (3GPP). Every carrier started to adopt this common standard. This was when broadband proliferated. Leland credits the economy’s advancement through the 2010s to 4G, allowing companies such as Amazon, Netflix, and Uber and platforms such as YouTube, Google, and Facebook to exist and thrive.

Leland talks about 5G in terms of what the carriers have deployed. 4G and 5G are related because they are part of the same spec line release. Fourteen ends what we call 4G LTE advanced. Fifteen kicks in with 5G NR. In this crossover, there is a business objective and a strategy to adopt the new technology as part of the standard. The business objective is that companies have already invested in their 4G networks, so the current evolved packet core and RAN components of the 4G networks are still in place. They add a 5G RAN box with a different frequency but is still connected back to the 4G core, called non-standalone.

Darren clarifies that 4G was revolutionary because it unlocked many new things and required all new equipment, whereas 5G is more evolutionary because it also opened new things. Still, the underlying technology is based on the same hardware and core.

It’s part of the modulation scheme that 5G provides in the air interface, but the architecture is different; it’s virtualized under 5G compared to more proprietary under 4G. That leads to many capabilities becoming part of the 5G deployments.

One example is a carrier deployed a 4G network by putting a RAN box next to an old 3G box. Many companies, such as Sprint, kept their 3G boxes and CDMA network up for years. In reality, 4G was just another box sitting next to a 3G box. 5G takes that proprietary box and gives the ability to spread the functions of that box across a virtualized network. Part of the baseband of 5G can now be software-defined in scale to multiple areas compared to being contained at one site, box, or location.

This means you can add functionality to your network without replacing hardware. As you go into standalone networks, however, you can take a 5G network and do something onsite. For example, suppose you have a skyscraper instead of depending on the network coverage from an antenna sitting outside with a core back at the carrier or a switch station. In that case, you can develop an on-premise network built within that building that proliferates coverage and data services throughout.

This standalone network opens up many new capabilities and enables new players. It also allows organizations such as the federal government and the Department of Defense to adopt the technology for their use cases. They have more flexibility when they are not highly dependent on the carriers.

Anna notes that in addition to new players and new on-prem capabilities, there is also the ability to use the CBRS spectrum. The way it is managed is complex, but there is non-priority that you can use for free, and priority, the Navy spectrum, that you can buy if you need no disruption. Some extensive manufacturing facilities are using the CBRS spectrum, either working with a primary carrier that does not charge for scope or working with a new entrant who will set up an on-prem standalone network with CBRS. This is a very different model, and there are real advantages to the wavelength and complexity of the systems that you can set up with 5G over Wi-Fi.

There are still some advantages to Wi-Fi, but setting up a robust Wi-Fi network can be challenging, especially if you are moving large pieces of metal around. If you have a set configuration, it makes sense to go with Wi-Fi 6, especially if the economics work.

Demand drives change; most end users are comfortable with 4G on their personal devices. So why go to 5G? The value 5G brings isn’t necessarily the higher data rates and lower latency; those services are provided at a broad scale because it’s virtualized. 5G is software intensive compared to 4G, which is more about proprietary boxes and based on hardware. 5G can be virtualized in position in many places. The frequency portfolio is dynamic, and you can utilize unlicensed bands, licensed bands, and CBRS, so there are many more options.

Check out the second part of this interview [here](episode-EDT109).


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, thisis Darren Pulsipher, chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people, processand technology.</p>
<p>On today's episode,</p>
<p>Advanced comes on the edge with Dr.</p>
<p>Anna Scott and Leland Brown.</p>
<p>Anna Leland, welcome to the show.</p>
<p>Hey, Darren. Thank you.</p>
<p>You are both not newcomers.</p>
<p>Leland, you've been on the show twice nowand Anna is a regular now.</p>
<p>And Leland,you're technical director of advancedcomms at Intel and those of, you know Dr.</p>
<p>Hannah Scott,she's our chief edge architectfor Public Sector Intel.</p>
<p>Guys,it's always a pleasure to have you on.</p>
<p>Normally, I'd say introduce yourselves,but everyone already knows you.</p>
<p>Well,yeah, I'd say Darren, as like</p>
<p>I said the last time, youone of my favorite peopleto work with at Intel.</p>
<p>And now you have another person</p>
<p>I'll always love to work with, Anna Scott,so this would be a great time for me.</p>
<p>So let's, let's yeah, let's start offby talkingabout the historyof advanced communications in general.</p>
<p>Right.</p>
<p>I don't want you feeling you're the manhere when it comes to advanced comms.</p>
<p>Let's not go all the way backto the telegraph, but let's go back.</p>
<p>Let's let's take a little step back.</p>
<p>Okay, great.</p>
<p>So, you know, when you think aboutcellular technology, you mayif you want to talk about communicationsand what's really when someone thinks ofcommunicating now, they're not thinkingabout a phone or a desk,you know, or some type of hit,you know, device move.</p>
<p>That's like old bell phone.</p>
<p>They're really thinkingabout a cell phone.</p>
<p>So where did it start?</p>
<p>You know, we're going back to maybevery late seventies, early eighties.</p>
<p>Know, we got into something called APTs,</p>
<p>Advanced Mobile</p>
<p>Public Service, I believe it wasthat what was heand stood for around 81if you had the ability to make a voicecall,you were the greatest personon the planet.</p>
<p>If you could sit in your phone,sit in your car and,you know, make a call like you were likethe coolest person running around.</p>
<p>I actually had a back phone in my carwhen I was in my early twenties and very</p>
<p>I thought I was rich.</p>
<p>No, I wasn't rich.</p>
<p>I just got a back phone, you know,it was like a cell phone in a car.</p>
<p>But did you mean. Wait, wait, wait.</p>
<p>We Leland, you got to back up.</p>
<p>Did you milk that? I hope you milked that.</p>
<p>Oh, no.</p>
<p>Yeah, I mean, I really.</p>
<p>I just want to make sure, man. Oh, yeah.</p>
<p>Mean college and things like, man,what's going on?</p>
<p>But, you know, it was it was reallyif you were able to make a callthat was likethe greatest thing I could call.</p>
<p>Now, of course, as you know, luxuriesonce tasted, you know, become,you know, a necessity.</p>
<p>So the necessity to make a calland a requirement to make a callwhen the cell phone became the foundation.</p>
<p>And if you couldn't make it, as thingswent on into what we call 2G,which is more our time divisionmore two more multi accesstype type of technologies</p>
<p>I think GMC may have</p>
<p>I'm sorry, GSM may have kind of kickedin around that time period.</p>
<p>You were getting more into, well,can you text, you know, can we make phonecalls and text, you know,maybe early nineties time time periodwhen 2G was starting to really kick inand of course, again,that became a necessity call text.</p>
<p>Okay, maybe playing SMS on a phonewhere phones went from this, making phonecalls, see, turn it to deviceyou can do a little bit of games.</p>
<p>You know that game called Snake on overif anybody remembers.</p>
<p>Oh yeah, I was good enough. Snake.</p>
<p>Yeah.</p>
<p>It's not I mean thatthat was really the time periodwhere 2G was starting to turn the phoneinto something a little more andand down buttons and making the call.</p>
<p>And you got to 3G and 3Gbrought on the abilityto do some nascent data capabilities.</p>
<p>What I mean bythat is the Internet was in its earlystages, late nineties, early 2000.</p>
<p>Can you do the same thing on the phoneand you want to talk about call?</p>
<p>I actually had a phone.</p>
<p>It was it was a flip phone.</p>
<p>I will be called a clamshell phonewhere I found it.</p>
<p>The abilityto take the take a dongle connectedinto my PC, a slot on my laptop.</p>
<p>And if you type £10, seven, seven, seven,it gave you direct accessto Sprint's data network.</p>
<p>And from there, I was able to havemy laptop be a mobile device.</p>
<p>You know,we take advantage of Wi-Fi nowadays.</p>
<p>That did not exist back then.</p>
<p>So it was really cool.</p>
<p>I mean, believe me, I was you know,</p>
<p>I was dating at the time of Give a girl,hey, you know, you want do your work.</p>
<p>So how can I did I got you hooked up.</p>
<p>So, you know, it was it was really cool.</p>
<p>But think about it.</p>
<p>That was very I mean, very minimal.</p>
<p>I mean, maybe DSL speeds,if that modem speeds reallythat Iwas able to manipulate the systemto going to give me data only callsthat we take for granted nowadayswith this phone can doyou know we take take take meyou take it for grantedyou know what what smartphones can do backthen that didn't existnow after 3G,we transitioned into 2to 2 areas of scope,a unified standard, meaning thatthen you had CDMA, Qualcomm, you had GSM,you know, and you had the carriers backthen that existed Sprint.</p>
<p>And the time may be Bell of Manticoreprobably just startingto turn into Verizon.</p>
<p>More on a C CDMA track.</p>
<p>You had T-Mobilewhen you had AT&T on a GSM track,primarily 4G converged it into one</p>
<p>LTE under 3G p.</p>
<p>Okay. That evolvedstandard turned whereevery carrier started to adopt,you know,a common standard across the board.</p>
<p>Now, we could talk about WiMAX as a wholenother long term discussion.</p>
<p>Everybody went to LTE primarily,and that's when you sawthe proliferation of broadband.</p>
<p>If you think about companieslike Amazon, Netflix,over all the platforms you to Google,</p>
<p>Facebook, everyone that there are commonnow for us you take away the smartphone,you take away broadbandand in the hand will not exist at all.</p>
<p>I give full 4G creditfor really proliferatingthe advancement of our economythrough to the 20 tens.</p>
<p>Without 4G, we have.</p>
<p>Okay,so now 4G has been out for a long time.now's physically right. Mm.</p>
<p>So that's where we're at today is 5G.</p>
<p>So I have a tendency tostate this in terms of the carriersand what they've deployed.</p>
<p>And anyone who see CCS seizes a podcast,it may have some discussion pointsfor me about this guywilling to defend it.</p>
<p>They're a part of the same spec linerelease 14in what we call 4G LTE advancedrelease, 15kicks in what we call 5G in or.</p>
<p>Right. And that crossover,if we really think think about it,there's a business objective thereand there's also a strategyto try to adopt the new technologyas a part of the standard.</p>
<p>The business objective isa lot of companies have already investedinto their 4G networks.</p>
<p>So the current evolved packet coreand in the current rancomponents of the 4Gnetwork are still in place.</p>
<p>You're adding in our 5G ranbox that has a different frequencybut still connectedback to the 4G core,something that we call Non-Standalone.</p>
<p>So it wasn't so 5G,correct me if I'm wrongbecause I may be completely off,but 4G was revolutionarybecause it really unlocked and it requiredit required new equipment,completely new equipment,new standard 5G is more evolutionary, butit unlocks a whole bunch of new things.</p>
<p>But the underlying technologyis based on the sametype of hardware, same core.</p>
<p>That the underlying technologyis based upon the same standard.</p>
<p>I mean, example,instead of having a bandwidthof 20 megahertz within your air interface,</p>
<p>This parts of the modulation schemethat that 4G providesand I'm sorry, 5G provides in thein the air interface,but the architecture is is differentis virtualized under 5G as comparedto more proprietary under 4G.</p>
<p>And that leads to a lot of capabilitiesthat you're starting to seebecome a part of the 5G deployments.</p>
<p>One example I like to give,when the carrier deployed a 4G network,they deployed it by putting a ramp boxright next to a old 3G box.that you can nowhave voice as a part of the data session.</p>
<p>And a lot of companies kept their 3G boxeslike Sprint for years,kept their CDMA network up.</p>
<p>I think they just turned it down once.</p>
<p>Wants to do once morewhere they had a had purchased them.</p>
<p>But in reality, 4G was just another boxsitting next to the 3G box.</p>
<p>As 5G takes that proprietary boxand it gives you the ability toto to spread the functions of that boxacross a virtualized network function.</p>
<p>Meaningwhat is a part of what we call the baseband of 5G can now be softwaredefined in scale to multiple areasas compared to being containedinto one site or one box or or one.</p>
<p>So that means I can add new functionalityto my networkwithout going out and replacing hardware.</p>
<p>That's what I just heard.</p>
<p>You can, but as you go into standalone,standalone networks, it's a termstand alone.</p>
<p>Now you can take a 5G networkand do something on premise or on site.</p>
<p>Example, if you have a skyscraperinstead of depending upon the networkcoverage from a antenna sitting outsidewhere the core is sitting back at,let's say the carriers,you know, switch to switch stationwhat have you,you can now develop an on premise networkbuilt within that buildingthat proliferates coverageand data services throughout because it'snow on premise, the standalone.</p>
<p>So 5G also it sounds like helped meprivatize</p>
<p>I'd had enough thatthat's not the right word butit kind of is I can own my own</p>
<p>I can have my own network inside my house.</p>
<p>I have a my own 5Gnetwork inside my building in a shipyard.</p>
<p>We've talked about this andso thisopens up a whole lot of new capabilities.</p>
<p>And a whole lot new capabilities.</p>
<p>Use cases in enablesnew players in the space.</p>
<p>Okay.</p>
<p>You know, we've been used to having twoor three strong playersin the space for a while now,throughout the generations.</p>
<p>Now, those players have changed.</p>
<p>Now we have two or three primarystrong players with in the U.S.</p>
<p>You know, if you go all acrossacross the world, it's more of course,but it enables new players to come inand enablesnew business verticalsto come into this area.</p>
<p>It also enables the federal government,the Defense Department and the liketo start to adopt the technologyfor their for for their own use.</p>
<p>Cases have more of a flexibilityin terms of the adoptionas compared to being highly dependentupon the carriers.</p>
<p>Okay. Yeah, yeah.</p>
<p>I mean, he just set this up for you,knock it out of the park.</p>
<p>He just said, Hey,we can do anything you want, basically.</p>
<p>How does that affect the edge?</p>
<p>Our edge architectures?</p>
<p>Yeah, it gets pretty interesting.</p>
<p>And so one thing that Lelandhadn't touched on that also was changewithin the same time frame is how Spectrumhas been managed and allocated, right?</p>
<p>So one of the most powerful thingswe've said is now you've gotthe ability for new players to come in.</p>
<p>We also have all these newon prem capabilities, these.</p>
<p>But the other thing that is, is reallyopening up the world in the U.S.and granted, it'sa slightly different picturewith respect to the spectrum managementin other parts of the world is we nowhave the ability to use cbrs spectrumand there's somewhat of a complex waythat they they manage that.</p>
<p>But there is a non-priority portionof that you can just usewithout paying for itand that and then there'sactually a priority that you can buyif you want to kind of look upthe assuredly that it's going to be therewhen you need it.</p>
<p>That's Navy spectrum.</p>
<p>So as you can imagine,there's quite a few places in the U.S.where where you thinkthat you can have that spectrum, use itand not have too muchdisruptive disruption.</p>
<p>And so what we're seeingis some really cool things where largemanufacturingfacilities are using CBRE spectrum,either working with a major carrierthat is notthen charging them for the spectrumbecause they're using TV or elseor working with a new entrantwho is just saying we'll use Cbrs, set upa total on prem standalone network,and now you can use thatfor everything that you want to doin your manufacturing environment.</p>
<p>And so that's a very different modelbecause there are especiallywith manufacturing,there are some real advantages tothe wavelengthand the complexity of the systemsthat you can set up with 5G that actuallyhave advantages over wi fi.</p>
<p>So I was going.</p>
<p>To ask youwhy not my wi fi in my in my farm, right.</p>
<p>Or in my factory?</p>
<p>And you still can.</p>
<p>And there's still some advantages.</p>
<p>But what we see is especiallyif you're moving really large pieces ofmetal around, setting up a robust wi finetwork can be really, really challenging.</p>
<p>So, you know, if you have the sameconfiguration of your spaceand you never change that,then go with wi fi, wi fi six,especially if the economics work for you.</p>
<p>But when you've got a complex environmentthat you are reshufflingon a regular basis, or like I say,if your air if you do aircraft rightand you're moving very large piecesof metal around,having a 5G network is very, very useful.</p>
<p>I should be super careful and say oftenwhat we're still seeing is that 4G</p>
<p>LTE is sufficientand there hasn't been a full on the moveover into 5G spectrumbecause you can use Cbrs with 4G as well.</p>
<p>So there'sthere's still a movement,but a lot of it is like the ecosystemfrom a user equipmentstandpoint isn't nearly as developedand doesn't have nearly the optionsthat you have.</p>
<p>On the political side.</p>
<p>I know you can buy a laptop with 5G,but it's heard about phone.</p>
<p>I've never bought one.</p>
<p>And do you guys think it'll everget to the point where wi fi andand the advanced in the 5Gor maybe it's six G where they'll convergewhere I can go buy a router myself,you know, like the router I have,you know, in my house for four,my Wi-Fi six.</p>
<p>Will I be able to buy a 5G router?</p>
<p>So you kind of what you kind of seeingit now, right?</p>
<p>This does a</p>
<p>I'll ask you two things</p>
<p>I'll get back to and his point as well.</p>
<p>There's something within</p>
<p>FI just called fixed wireless access.</p>
<p>To be quite honest,</p>
<p>Verizon and a couple of other companiesare deploying.</p>
<p>I think even T-Mobile is doing this,deploying boxesthat you can set up in your houseand gives you access to their network.</p>
<p>It gives you basically wifi services in your house.</p>
<p>Just say go</p>
<p>Yeah, but it's not.</p>
<p>It's receiving 5G.</p>
<p>Right, right. It is transferring it.</p>
<p>Yeah, it is receiving 5Gtransforming into wi fi in your houseand giving you Wi-Fi access, meaningfrom a standard.</p>
<p>You think we'll ever get to that pointwhere all have a 5G network or six networkin my house instead of wi fior does that matter?</p>
<p>I do asking are they converging or No,they're very separate, separateuse cases and all that.</p>
<p>In many ways, you you kind of dohave that, right.</p>
<p>I mean, let's face it, you're you'reyour house is a multi may house.</p>
<p>You have 5G comingin, converging into why, why, why, why fi.</p>
<p>Right.</p>
<p>You also have cellular coming inbut your phones.</p>
<p>So depending uponhow you have your devices set up, you'reeither on the certain the certain networkdirectly or you're usingwi fi through of througha fixed wireless access point.</p>
<p>So it's andand also if I have Bluetooth know right.</p>
<p>If I have.</p>
<p>I didn't know I was so advanced</p>
<p>I'm super advanced.</p>
<p>But it to the point you knowand getting back to this pointaround devices very truedemand driveschange 4G was nothing wrong with ityou know I can do broadband on 4G,watch Netflix and everything</p>
<p>I'm very comfortable withand I've asked these questionsand some discussed in the past.</p>
<p>Are you areyou satisfied with your 4G phoneand most people say, yeah,so why go to 5G?</p>
<p>What is the advantage of the end userto transition over to 5G?</p>
<p>I have a tendency to think that 5Gis the value that it brings,isn't necessarily the fact that you gethigher data rates and lowerlatency at the end user point is the factthat you cheat, that you can now providethose services at a broad scale acrossbecause it's virtualized.</p>
<p>Did it the system,the network architecture is very softwareintensive as compared to 4G,which is more proprietary boxesand still based on hardware.</p>
<p>It has software.</p>
<p>So based on hardware, primarily,this is a software intensive networkthat can be virtualized in positionin many places.</p>
<p>As Anna stated, the frequencyportfolio for 5G is very dynamic.</p>
<p>You can utilize unlicensed bands, licensebands, CPRS.</p>
<p>So there's.</p>
<p>More, more options and more. Options.</p>
<p>Yeah.</p>
<p>And I think that's where you'll see it.</p>
<p>If you look at, you know, some pictures.</p>
<p>So how you compare 4G to 5G,which is seenthe pictures is 4G larger, so smallercells more more dependentupon access points covering areas.</p>
<p>And then you'll see as a picture with 5Gwhere it'll show similar but underlay aof different types of usage pointsthings devices that are sharing access.</p>
<p>I mean, let's face it, v2x architecturesthat was a part of 4G,but a part of that spec was never usedand 5G is heavily used, looked at.</p>
<p>Now it's been adopted and deployedbecause it's virtualize.</p>
<p>We've taken awaysome of the barriers of entry,if you will, to utilizein that part of spectrum.</p>
<p>You go to virtualized architecture.</p>
<p>Yeah, very, very fascinating stuff.</p>
<p>Guys, thank you so muchfor coming on the show today.</p>
<p>Again,another great episode with you guys.</p>
<p>I appreciate your insight.</p>
<p>This is this has been enjoyable.</p>
<p>Hey, Darren,that's always one of my favorite people.</p>
<p>And then you had Anna.</p>
<p>I was not missing this for the world, man.</p>
<p>Yeah, I feel the saying.</p>
<p>This is always this is always exciting.</p>
<p>And I always learn something from Leland.</p>
<p>And I always learn somethingfrom you, Darren.</p>
<p>So thank youso much for giving us a chance.</p>
<p>All right. Thanks a lot, guys.</p>
<p>All right.</p>
<p>Thank you.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.orguntil next time, go outand do something wonderful.</p>

</details>
