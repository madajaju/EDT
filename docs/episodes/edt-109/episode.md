---
layout: posts
title: "Advancing Operations with 5G"
number: 109
permalink: episode-EDT109
has_children: false
parent: Episodes
nav_order: 109
tags:
    - 5G
    - Advanced Communications
    - Comms
    - WiFi6

date: 2020-10-06
guests:
    - Darren W Pulsipher
    - Leeland Brown
    - Anna Scott

img: thumbnail.png
summary: "Intel’s Darren Pulsipher, Chief Solutions Architect, Leland Brown, Principal Engineer: Technical Director of Advanced Communications, and Dr. Anna Scott, Chief Edge Architect for Public Sector, talk about the history of advanced comms and future use cases with 5G. Part two of two."
---

{% include soundcloud.html id="edt109" title="#109 Advancing Operations with 5G" %}

{% include youtube.html id="ZHyeXrkxQhA" %}

---

5G opens up a lot of capability. You can now set up private networks, which is software-defined so that you can add more functionality to your network. Where does this enabling technology take us?

Anna says that although we are still in the early days from a bandwidth and latency standpoint, there are real advantages to 5G, such as the opening up of the spectrum, like CBRS, the ability to take advantage of existing user equipment, and the ability for customers to have mobile access.

One use case that is not sexy but has vast ramifications is that you can take your laptop onto the factory floor and use that for full connectivity. Instead of going out on the factory floor with a notepad and paper and transferring the information back to the office, you can converge the two environments. The 5G standards enable this, but it isn’t necessarily a full 5G deployment.

One evolution that is happening is the ability to stream high-definition video from a wireless camera over 5G and have low enough latency that you can do real-time analytics on it. Currently, not many 5G cameras can operate in that environment, so cameras are often hardwired close to coupled edge computing to get that real-time aspect, but this advantageous streaming option is coming soon.

Another example of a 5G advantage is using 10 to 20 AR headsets instead of one or two with Wi-Fi. The key point is the MEC (Mobile Edge Compute) that provides the ability to have the applications on-premise instead of having to go back to the switch or the core of the carrier and have that RAN time.

Understanding how frequencies are deployed is essential in use cases, as some carriers have deployed mmWave despite challenges; n41 and n42 frequencies react differently in the real world. So in on-prem deployments, the MEC and the RF design are extremely important.

A compelling use case for 5G outside the factory is using drones in emergency responses. An early predecessor to the eventual ability to bring in drones and assess a damaged area is getting drones connected, understanding a mission to do a flyover, and then pulling all of that data together. While we’re unable to stream live video from multiple drones and stitch it together, we are close to gathering, combining, and analyzing that data, just not yet in real time.

Another use case is using 5G, AI, modeling, simulation, and edge computing for training across many industries, including the Department of Defense. There’s a huge advantage in creating a realistic training simulation without putting the person under threat or spending massive amounts of money on live training.

As much as 5G enables this type of use case, much depends on 5G connecting to a MEC instead of 5G going up to the cloud. Physics comes into play. You need super low latency, so you can’t have an architecture that goes from a headset to the cloud, down to a MEC, then to visualization. It needs to go from the headset to the MEC, where real-time processing happens. Then you can share data through the cloud for a real-time experience.

There is also the capability of meshing or clustering MECs together, so that data may never have to go to the cloud. The MECs can do all the processing and analytics out on the switch. This could enable advances such as smart buildings and cities. This kind of 5G-enabling technology is the perfect storm for considerable changes in the industry.

Leland points out that the story of the new networks is distributed computing. Everything is connected through wireless connectivity, but compute points are spread across the landscape, where apps sit at the edge and enable the use cases. Where we are heading is to calculate wireless one-to-one.

What role does Intel play in 5G? It’s far beyond just providing chips. Since 5G is software-designed, Intel has enabled the ecosystem to build or design on top of its L15. When moving from 4G to 5G, Intel took the functional block of the RAN, called FlexRan, and allowed companies to design their baseband architectures and virtualize them. Writing the FlexRan reference architecture made it much easier for new entrants to pick that up as a starting point.

On the hardware side, Intel spent many cycles to ensure that the commercial, off-the-shelf hardware would work well to support all of the basebands, RAN applications, and servers. The new systems that come when walking away from proprietary systems must be easily supported by the same type of server that works in the cloud and the data center because now you have the scale and the cost advantage.

This will drive down prices and drive more innovation in the industry. 

Check out the first part of this interview [here](episode-EDT108).


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, thisis Darren Pulsipher, chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people, processand technology.</p>
<p>On today's episode, Dr.</p>
<p>Anna Scott and Leland</p>
<p>Brown unleashing future use caseswith 5G.</p>
<p>You've opened up a lot of capability.</p>
<p>I can do my own private networks.</p>
<p>I it's software defined so I can add a lotmore functionality to my network now.</p>
<p>What does this unlock, Dr.</p>
<p>Scott?</p>
<p>Where where do you take where do you takethis enabling technology?</p>
<p>Fantastic.</p>
<p>So so we see.</p>
<p>Well, what's the best way to say it?</p>
<p>So we are still in the early daysof, say, from a USBlike a bandwidth in the latencystandpoint,what are the real advantages of 5G?</p>
<p>What we're seeingwith a lot of our first sets of customersis what we've already talked aboutis the the opening up of the spectrumlike the CBR as the abilityto take advantageof the existing user equipmentand now make it possible to have folkshave mobile access.</p>
<p>Right. So like one use case that isnot atall sexy but actually has really hugeramifications iscan you take your your laptopand onto the factory floor and startusing that for full connectivity?</p>
<p>So instead of goingout with a piece of paper and a notepadand writing down the stuff that matters,then going back to your officeto do your heavy work,you actually can convergethose two environments.</p>
<p>And, and again, it's enabledby the 5G standards but isn't necessarilydoing like a full 5G deployment.</p>
<p>What we're seeing and what we thinkwill be the evolution on thatand that's happeningkind of in real time right now, iscan you streamhigh definition videofrom a camera over 5G, do real timeanalytics on it,and now you've got a wireless camerathat's in whatever the environment isthat you care about.</p>
<p>Carry that again, that video over 5G andand then do your analytics on itand have that be lowenough latency that you're essentiallyhaving a real time system.</p>
<p>We're not quite therebecause the 5G cameras stillthere's not many of them thatcan really operate in that environment.</p>
<p>So often what we'll do with a 5Gnetwork is we'll still hardwirethe cameras to close coupled edge computeto get that real time aspect.</p>
<p>And then you can share up the the metadataand the output of those analytics.</p>
<p>So we're not very far away at allfrom saying nowthat we've got that massive bandwidthin that low latency.</p>
<p>Now streamingbecomes an option and and that has somereally nice advantages, right?</p>
<p>So that brought up something elsethat just popped into my head.</p>
<p>What about air?</p>
<p>Exactly. Yeah.</p>
<p>And that's the other hugeexample for that.</p>
<p>Right, isyou can definitely do like air headsetsover wi fi,but the information that we have isif you're doing a single headset,you're great.</p>
<p>If you want to do two headsets,you're probably okay.</p>
<p>If you want to bring that up to scaleand do more like ten or 20.</p>
<p>WI fi is not very well-equippedto be able to handle that and keepa good, you know, nonwell keep the system working in a waythat's going to makeeverybody have the real time experiencethat they want.</p>
<p>Whereas for 5G,that's a no brainer, right?</p>
<p>But leave in place.</p>
<p>Now, I was going to addand a perfect, perfect pointwhen you think about a 5G on premisenetwork, thisthere's a couple of key elements to thatyou have to have in place.</p>
<p>The corethe more way to computethe general brandand also the user playing functionwhich which is a core phone function,meaningwithin the warehouseyou have all those elements.</p>
<p>Key point is the Mac that provides youthe ability to give you theseapplications on on premiseinstead of having to go backto any switch or let's say,you know, developlike a core of the carrierand have that ran time.</p>
<p>You're you're on premise this private isdedicated as a dedicated network.</p>
<p>You know, wi fi doesn'thave those functions, of course.</p>
<p>So this is good for security, too.</p>
<p>Well, yeah, it.</p>
<p>Provides my data is not going outsideof my building.</p>
<p>I can make that out.</p>
<p>Right. Exactly.</p>
<p>And and then you think aboutand I mentioned about, again, frequencies.</p>
<p>Well,two two things need to occur right now.</p>
<p>There are certain carriersthat of play frequencies.</p>
<p>Millimeter wave in waysthat they probably should not havebecause the wave has challengesand there's other carriersthat have deployed lower frequencies.</p>
<p>And I'm not saying that they reallyunderstood it, not saying it did not.</p>
<p>But it's as you can see, the performancein a network is different.</p>
<p>So understanding how you deployfrequencies relative to the use caseis extremely important for oneand therefore two frequenciesreact very differently in the world.</p>
<p>And when you deploy in these on a net netnetwork, you have to havethat level of understanding.</p>
<p>So these on premise deployments,on premise network deployments,the MEC is is it's very important to it.</p>
<p>Your RF design is extremely important.</p>
<p>And having all those elements on premisegives you the abilityto have an independence, to design itfor you, for your own use cases and needs.</p>
<p>All right.</p>
<p>You threw out the word MEC.</p>
<p>What in the world? Mobile edge.</p>
<p>Mobile edge compute.</p>
<p>All right, because I don't thinkeveryone's familiar with that.</p>
<p>I know I'm I kind of know it because and.</p>
<p>Pretty tight on me.</p>
<p>Yeah. Yeah exactly.</p>
<p>So MSE that's so that mobile edge computethat's thatthat could be that could be in AR headset.</p>
<p>It could be an edgedevice that's feeding a bunch of datastreams, coming in video streams.</p>
<p>It could be any, anything that's out therethat's doing my edge computing, right?</p>
<p>Yeah.</p>
<p>And I think I don't know thatwe've quite gotten to a levelwhere a headset would be considered a mac.</p>
<p>I think almost always now there's stillthere's still.</p>
<p>Something nearby that's doing that. Right.</p>
<p>That is that then would have a devicethat's been the,the headset device would be attached backinto that Mac.</p>
<p>Right.</p>
<p>And it would bedoing some support functionalityeven if you're doing a lot of compute.</p>
<p>I want, I want glasses that are a mac.</p>
<p>Ideally a little higherand a little heavy right now.</p>
<p>Hey, it's a we're workingwe're going down to 1.8 nanometers, right?</p>
<p>That's 18 angstrom.</p>
<p>So I can fit a lot of transistors in.</p>
<p>Whereas Lossless Moore's Law still exists.</p>
<p>That's pushing it.</p>
<p>Yeah.</p>
<p>Yeah, absolutely.</p>
<p>What about outside the country?</p>
<p>Because we've been talkinginside the factory quite a bit.</p>
<p>What are some of those other edgeuse cases that</p>
<p>Well, I think one of the thingsthat we've been exploring for a whilethat is more kind of emergency response ishow can you really use dronesand how can you keep your dronesconnected?</p>
<p>So I think probably one of the biggest usecases and again, this isthis is early days.</p>
<p>We've done some testing with this, but notnot for hey, you've just come inand stood up your 5G networkand you're bringing your dronesto do an assessment of a damaged area.</p>
<p>But what we have done is kind ofthe earlier predecessor to that, which ishow can you get drones to be connectedand have a mission and understandwhat's happening and go overand do do the types of flyovers to say,hey, you've just had a major stormor you've had floodingor there's been a hurricane.</p>
<p>How do you pull that kind of data togetherand bring all of that camera data?</p>
<p>Right.</p>
<p>So again, we're not quite to the streamlive video back from multiple dronesand stitch that all togetherbut we're gettingwe're getting into the line of sight wherenow you can use a use a drone to actuallygather that data, combineall that data, analyze that data and say,here are the areas where you needhelp, or, hey, I see a person who needsimmediate attention or,</p>
<p>Hey, this house is no longer there.</p>
<p>And when you cando that with 5G, you</p>
<p>I mean, we can do a lot of that now.</p>
<p>What we can't do is do thatin real time, right?</p>
<p>The immediate intelligence. Right. And so.</p>
<p>Okay, so.</p>
<p>So this is search and rescue,including firefighting, because I knowwe're doing this in California now.</p>
<p>We are sending drones up.</p>
<p>They are on a 5G networkthat's a private 5G networkthat's stood upspecifically for firefighting.</p>
<p>But I love the search and rescueafter hurricanes or floods or whatever.</p>
<p>A great use case. Yeah.</p>
<p>And just to add to to what Joanna stated,</p>
<p>I mean, think about it,the metaverseand the discussion around the metaverseof how on premise networksfind it hard to imagine therealities of it.</p>
<p>Right. It'shavinghaving edge compute points on premiseallows you to have these distributedcompute architectures in placethat can then enable use casesthat can be connected to each otherto be able to function.</p>
<p>That's how I view the metaverse is reallytaking managing, you know, well file.</p>
<p>And then this is what excites me about itbecause you know,</p>
<p>I've been in the carrier guy for years,worked in the department in defenseand seen these ask.</p>
<p>And really what excites me is that</p>
<p>I'm able to see the realities of it now.</p>
<p>It's starting to come together.</p>
<p>It's starting to come to come together.</p>
<p>Yeah.</p>
<p>So in the use case and Anand mentioned,you know, that is tome will be intense dataand it has to work you know for firstresponder use cases it just says importantin sort of the Department of Defenseand to mewill happen far more in termsof, you know, hurricanesand natural disastersas compared to,you know, wartime scenarios.</p>
<p>Could you could you guys imaginean Amber Alertthat automatically sent drones up?</p>
<p>That would be so cool. And what? Be cool.</p>
<p>That's right.</p>
<p>We can find we can find childrenthat are lost or in our area.</p>
<p>We've had a lot of gray alerts or silveralerts recently where all older peoplehave left and old folks home and got lostand they found them.</p>
<p>But I'm having havingthat kind of visibility is</p>
<p>I think there's a lot of benefit,but a lot of people are going to saythere are this scary dronesflying around, taking pictures of peopleand where's my privacy?</p>
<p>Work ethics.</p>
<p>A Yeah, yeah.</p>
<p>But well what it yeah.</p>
<p>It's enabling technology, right?</p>
<p>What we do with that technology,we've, that's another discussionaround policy that we do today.</p>
<p>Yeah.</p>
<p>Well in another really good usecase, it's training, right.</p>
<p>So there's acrosskind of lots of different industriesin lots of lots of areaswithin the government as well.</p>
<p>There's a huge advantage if you can createas close to a reality sortof training simulationwithout actually putting the personin under threat or withoutyou spendingsome of the massive amounts of moneyif you're trying to do like aa real live training session.</p>
<p>Right.</p>
<p>So, so the idea of using 5G along withartificial intelligence,along with modeling and simulationand doing that with edge compute likeis enabled by the type of architectures.</p>
<p>If you put that all together with 5G,there reallywe are line of sightfor having a very realistic environmentso that you can actually train peoplevery, very effectivelyand then you can do things like understandhow they're responding to it,what are their biometrics where you know,what really changes over that?</p>
<p>The course of that trainingto to go into some world of enhancementthat we can't even talk about right nowwith respect to helping people deal witheither complex test or complex situations.</p>
<p>So training, I think, is going to beone of the places that we see everythingcome togetherfirst, right into some really remarkabletypes of situations.</p>
<p>And and I think maybe Leland,they haven't done a clear enough jobto explain how importantthe edge compute element is of this.</p>
<p>Because as much as 5Gis an enablement,much of this depends on 5Gconnecting to a mac as a pose to 5Ggoing up to the cloudbecause there is still a lot of physicsthat come into play.</p>
<p>So if you need super low latency,we're not talking about an architecturethat goes headset to the cloud, downto a mac, then down to visualization.</p>
<p>You really need to go headset to the mac,do your real time processing therefor what's important,and then you can share datathrough the cloudfor that real time experience.</p>
<p>You need that close couple that's well in.</p>
<p>And you know,</p>
<p>I've talked about this before.</p>
<p>We also have the capability of meshingare absolutely mixed togetherso I may never even send that datato the cloud.</p>
<p>These Macs can do all the processand analyticsthat I need to out on the switch.</p>
<p>Right, which. Very much so. Yeah.</p>
<p>This could do things like smart cities,smart buildings.</p>
<p>I mean, 5G isis really kind of that enabling technologywith the concept of a mobile edge computedevice altogether coming together.</p>
<p>I think we're it's a perfect stormto make huge changes in the industry now.</p>
<p>We just got to go do it.</p>
<p>Yeah, I always say that thethe story of the new networksthere's just shipping it compute.</p>
<p>Right.</p>
<p>And we're connecting itthrough wireless connectivity,but we're really distributingcompute points across the landscapewhere we can now have appssitting at the edge and enablinguse cases right.</p>
<p>So 1 to 1and I'm not saying that this is a true 1to 1, thatevery distributed compute pointto have a wireless connection point.</p>
<p>Now, in some examples,if you kind of think, think aboutas kind of wherewe're heading to compute wireless 1 to 1.</p>
<p>And the more you proliferate eitherwar, you're going to have the other oneno permanent with it.</p>
<p>All right.</p>
<p>So with all these great use casesthat we've talked about,what role does Intel play in 5G?</p>
<p>Are we just providing chips?</p>
<p>What what have we done to makethis really happen?</p>
<p>So when you look at what it meansto virtualizea network, it'sreally taking portions of the network,making it software defined,and then enabling an ecosystem to buildor to design on top of our L1 one.</p>
<p>And that's exactly what Intel has done.</p>
<p>If you look at 4G and and moving into 5G,we've taken the functional blocksof the RAN, right?</p>
<p>And we've allowed an ecosystem to builduse cases and capabilities on top of it.</p>
<p>You know, we've called it Flex Ran,you know, we've takenwhat is deemed to be the baseband,the L2 L3 layer and enablethe have an ability for for for companiesto come inand design their own basebandarchitectures, virtualize it.</p>
<p>Right.</p>
<p>Not necessarily something that existedwithin 4G, definitely did not exist in 3Gfor 4G.and then allows new players to come inand build aroundarchitectures on our L1 fi layer.</p>
<p>Okay.</p>
<p>So we actually provided thathalf of that common hardware acrossall of is that how it works is</p>
<p>I mean, this was common,it's different than proprietary hardware.</p>
<p>So we were the ones designing this commonhardware.</p>
<p>Is that the way to think about it?</p>
<p>So we did two things rightjust real quick.</p>
<p>So we so what Leland was describingis really the software side.</p>
<p>So when we talked aboutall of these new entrants that were comingin, they Intel writing the flex ramreference architecturemade it much easier for new entrantsto pick that up as a starting pointand then finish what was neededto have a full ran solution.</p>
<p>So Flex ran as an enabling on theon the software side,there's a whole other hardware storythat Leland hadn't got to it, so.</p>
<p>Right. Okay, sorry, Leland.</p>
<p>I was a little confused. Sohardware side, what do we got?</p>
<p>So set out more than 1 to 2and to speak so to speak to that.</p>
<p>But in termsof how the software side of the track andnot did not try to mess up things herebut in order to kind of finish upwith the ecosystem play was that scalingand opening up the abilityfor the ecosystem team to to build outtheir own flavors of flexran their own flavors of thethe baseband proliferatednot only across the U.S.but across the world.</p>
<p>There are so many new players nowthat are taking flex ran and developingran solutions, countless,countless players.</p>
<p>Now you can even take them nowinto other business verticals.</p>
<p>You're seeing the same thingyou're seeing.</p>
<p>And often the departments sensewithin the military verticalyou're seeing this off and first responderverticals taking flex ran and evolveand you know they're running solutionsbased on our L1 five layer.</p>
<p>So we have an ecosystemthat is grown on top of our architecturethat is now providing the abilityto develop these new use cases.</p>
<p>And I, I have a question around that.</p>
<p>Does that include the, the old guard?</p>
<p>Because what you basically came inand disrupted their industry.</p>
<p>And includesthe old guard that the old guard.</p>
<p>So the old guard bought into.</p>
<p>The old corporate by then.</p>
<p>Let's keep in mindthe old guard developed their solutionsand made a proprietary escenain that test or business case,the newerplayers are coming in as well becauseagain, the point of entry is easieras compared to whatthe old guard developed the closed box.</p>
<p>Now this ability tono to develop your own box, if you will.</p>
<p>Gotcha, if you will.</p>
<p>That makes more sense.</p>
<p>So there's still a lot of proprietarybrands out therethat are not based on Intel Flux.</p>
<p>Right. Right.</p>
<p>And those are insome of the major players.</p>
<p>Right.</p>
<p>But I think from ahow do you just open up a whole ecosystemand give newer playersan advantage rights to really come inwithout massivedevelopment times to really be theyou know, to be a significant contributor?</p>
<p>Definitely.</p>
<p>Intel's play on Flex was all about that.</p>
<p>And then the parallel ofit was really on the hardware side, right?</p>
<p>So we was definitely the 5G expert.</p>
<p>I'm much more of the applications.</p>
<p>And how do you use thingsthat we've we really didspend a lot of cyclesto make sure that our cotshardware over the commercial off the shelfhardware was going to workreally well to support all of the basebandand RAM applications in certain.</p>
<p>That's another thing that's just likemake sure when you're walking awayfrom these proprietary systemsthat those proprietarythe new systems are openand are easily supportedby the same type of server that worksin the cloud and works in the data center,because now you have the scaleand the cost advantageand again, you're not going to justa limited number of players and say,you know, give me your hardware for myyou know, for my baseband.</p>
<p>You get to say, hey, that serverthat you use across the board,you can use itin this case, too. And that'shugely significant as well.</p>
<p>Just from a price and a scalability.</p>
<p>I was going to say that's going to driveprices down.</p>
<p>It's going to drive more innovationin the industry as a whole.</p>
<p>So kudos to Intel.</p>
<p>Absolutely.</p>
<p>We need to give ourselves some kudosfor this, right?</p>
<p>I mean, we're building a big, hugeecosystemto enable more computeeverywhere in the world.</p>
<p>I in fact, it reminds me ofsomething that just happened.</p>
<p>And maybe you guys,if you don't have any information on this,</p>
<p>T-Mobilejust signed some agreements with Space X.</p>
<p>Do you know about this one?</p>
<p>I do not.</p>
<p>All right.</p>
<p>We're going to do some research.</p>
<p>I'll cut this out of the thingbecause I'm like, whoa,my phone will actually startworking in the middle of Nevada now.</p>
<p>Well, we'll have to wait and see.</p>
<p>Yeah, but keep this insidethe insidethe it's up to the air recordingspace, you know, in the terrestrialdomain.</p>
<p>Okay.</p>
<p>We tend to look at it as separate.</p>
<p>But as time goes on,because of what Intel has really begun,you know, hardware, software,the ability to scale is now for basicallyfor both domainsto look one in the same to us,just like how wi fi and cellular looks onein the same in your own imagined space.</p>
<p>And it's virtual conflictand one in the same.</p>
<p>It should, right? Yeah. No, I love.</p>
<p>That's awesome, guys, as always,it's been a pleasure.</p>
<p>Thanks for coming on the show.</p>
<p>Thank you, Darren, as always.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.orguntil next time, go outand do something wonderful.</p>

</details>
