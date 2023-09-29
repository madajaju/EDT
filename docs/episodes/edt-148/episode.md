---
layout: posts
title: "Securing the Remote Worker Through Mobile Virtualization"
number: 148
permalink: episode-EDT148
has_children: false
parent: Episodes
nav_order: 148
tags:
    - remoteworker
    - remotework
    - mobile
    - mobilevirtualization
    - hypori

date: Wed Jul 26 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Jared Shepard
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "In this episode of the podcast Embracing Digital Transformation, host Darren Pulsipher engages in an insightful conversation with special guest Jared Shepard, the CEO of Hypori. The interview focuses on the crucial topic of securing remote workers through mobile virtualization. Jared Shepard's unique journey from a high school dropout to a CEO adds an inspiring dimension to the discussion."
description: "In this episode of the podcast Embracing Digital Transformation, host Darren Pulsipher engages in an insightful conversation with special guest Jared Shepard, the CEO of Hypori. The interview focuses on the crucial topic of securing remote workers through mobile virtualization. Jared Shepard's unique journey from a high school dropout to a CEO adds an inspiring dimension to the discussion."
---

<div>
<h3>Listen Here</h3>
{% include transistor.html id="fd3c31e0" title="#148 Securing the Remote Worker Through Mobile Virtualization" %}

{% include youtube.html id="O2o4dRHhETE" %}
</div>

---

## Jared Shepard's Unconventional Path to Becoming a CEO:
Jared Shepard shares the remarkable story of his unconventional journey to becoming a CEO. Starting as a high school dropout, he found his calling in the Army, where he transitioned into an IT role, acquiring vital skills through informal education. His experiences in the Army, including playing a pivotal role in planning the invasion of Iraq and contributing to the country's reconstruction, shaped his perspective and expertise.

Jared's career progressed further as he founded his own company, Intelligent Waves, and dedicated his efforts to developing advanced technology solutions for the military. During this time, he encountered Hyper3, a technology that would ultimately become the foundation for his focus on mobile virtualization.

Driven by his vision and recognizing the immense potential of Hyper3, Jared established a separate company, Hypori, with a specific emphasis on mobile virtualization. Hypori's platform offers secure virtual mobile infrastructure, allowing organizations to separate personal and work data on employees' devices, bolstering security and control. This aspect proves particularly critical in the context of remote work, where sensitive data may be accessed from personal devices.

Host Darren Pulsipher expresses gratitude for Jared's service, highlighting the significance of his journey from a high school dropout to a successful CEO. Darren also discusses his non-profit organization, which aims to aid veterans transitioning back into civilian life.

## Hypori's Innovative Approach to Remote Work Security:

The interview delves into the concept of zero trust, a fundamental aspect of Hypori's platform. Zero trust advocates for not automatically trusting any device or user, irrespective of their location or network. This approach emphasizes protecting data and minimizing the attack surface by assuming that the edge device is compromised.

Hypori's platform transforms the edge device into a dumb terminal accessing a secure environment where data is stored. This eliminates the need to secure multiple edge devices, enabling organizations to focus on securing points of ingress and egress. Moreover, this approach enhances computing capabilities by utilizing high-performance processors in a data center.

The implications of Hypori's platform extend beyond securing remote work and communication in challenging environments. It also provides a comprehensive solution for managing and securing remote workers. Multifactor authentication and stringent security measures ensure that only authorized individuals can access the virtual operating system.

The review discusses the practicality of deploying mobile device management systems, even in personal settings. In specific scenarios, such as managing teenage kids' devices, deploying these systems can be beneficial. Users can create customized play stores or app stores to control which apps are accessible through approved app templates.

## Future of Mobile Device Management

Darren and Jared explore the technology behind virtual phone systems, also known as Voice over IP (VoIP) systems. These systems are more bandwidth-efficient than traditional phone systems as they only transmit the changes or "deltas" in screen pixels, resulting in low bandwidth utilization.

Advancements in network technology, such as 5G and high-speed bandwidth, have made cloud-based mobile device management solutions more efficient and cost-effective. Cloud computing offers scalability and cost-efficiency for managing mobile devices, making it an attractive option for organizations.

The goal of mobile device management systems like Hypori's is to offer accessible and cost-effective solutions for consumers. This includes providing secure second, third, or even fourth cell phones at a low monthly cost, which can revolutionize various industries, including healthcare, defense, and telecommunications.

## Conclusion

The interview with CEO Jared Shepard sheds light on the significance of securing remote workers through mobile virtualization. Hypori's innovative approach based on zero trust and its virtual mobile infrastructure offers organizations an effective way to embrace remote work without compromising security. The advancements in mobile device management and virtual phone systems promise enhanced security and flexibility in the modern digital age, transforming industries and driving the path of digital transformation.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople process and technology.</p>
<p>On today's episode,securing the remote workers through mobilevirtualization was special guest</p>
<p>Jared Shepard, CEO of Hypori,Jared,welcome to the show.</p>
<p>Thank you. I appreciate it.</p>
<p>Hey, Jared, tell my my audience</p>
<p>I always like to knowa little bit about who I'm interviewingand their background.</p>
<p>Tell us a little bit about yourselfand your journey to where you are today.</p>
<p>Sure.</p>
<p>I mean,it's an entertaining journey,</p>
<p>I guess, because I'm kind of the anti</p>
<p>CEO in a lot of ways, even though</p>
<p>I've been doing it for 17 years.</p>
<p>I was I was a high schooldropout, knucklehead kid that wasthat was in trouble when I was young.</p>
<p>I ended up joining the Army,served in the infantry.</p>
<p>I got to do some cool stuff inthe infantry.</p>
<p>Was a sniper for a while.</p>
<p>I got to do some other,you know, fun stuffand hit a turning point in my life where,you know, ultimately it was, you know, do</p>
<p>I want to continue to go down that roadand maybe go into Special Forcesor something similar?</p>
<p>Or a buddy of mine said, Man,you should really get into it.</p>
<p>And I was like, Well, it's why I make like$70,000 a year, like $70,000 a year.</p>
<p>That's a lot of money.</p>
<p>And so nonetheless,</p>
<p>I ended up re-enlisting and becoming an ITguy and know, again, being a high schooldropout didn't have a formal education.</p>
<p>So I learned it the informal way.</p>
<p>And it's one of those placeswhere you can get away with that right?</p>
<p>You know where you can. Yeah. Yeah,you can. Absolutely. Absolutely.</p>
<p>So I learned it in the Armyand then I got out andand got brought right backbecause sure enough, you know,had gottensome of those really good certifications,you know, that informal educationgot brought right back as the Active</p>
<p>Directory consultant to the third</p>
<p>Armored Corps at Fort Hood, Texas.</p>
<p>And then just by luck,we got tapped to go to war,and I ended up having to help the Corpsplan with the invasion plans.</p>
<p>And then ultimately</p>
<p>I went to the war in Iraqand I got to build Iraq from scratchas a technical consultantin a team of about five of us.</p>
<p>Which of which three.</p>
<p>Now work with methat builds Iraq from scratch.</p>
<p>And so, you know, just my lifeis a long list of oncein a lifetime opportunities.</p>
<p>And so got that opportunity.</p>
<p>And then fast forward, my new bosswas a guy named General Ray Odiernowho who asked me to go find a predictivemining and modeling capabilityfor premises based model.</p>
<p>And I kind of said, huh?</p>
<p>And, you know,he said, you know, you're a smart guy.</p>
<p>You know, you'll be able to figure it out.</p>
<p>You figure it out right. Back, back, back.</p>
<p>Then, you know, predictive mining,a modeling today, we call it AML.</p>
<p>You know, I ended up being introducedto an organizationthat was standing up in the departmentfence called Giteau.</p>
<p>I ended up being asked to come inas a consultant for them.</p>
<p>I became the first acting jsix for Giteau.</p>
<p>Djokovic deployed again to Iraq, builtthe first go at downrange, and didso this time wearing my own shirt.</p>
<p>So I started my first companycalled Intelligent Wavesand that was almost 17 years ago.</p>
<p>We built the first coat,blood, sweat and tears, you know,designed to go after operational</p>
<p>IED networks,you know,using it in advanced technologies.</p>
<p>And then they kind of said,hey, could you do more of that?</p>
<p>And so my company grew rapidlyand we builtlots of coatsand other, you know, unique s-pencapabilities for the Air Force, etc.,all of them deployed areas Iraq,</p>
<p>Afghanistan, Kuwait, Qatar, Yemen, Syria,you name it. And and company grew.</p>
<p>And along the way, I founda great technology called Hyper threethat was was in a a failing startupthat I stepped in and bought outbought the IP created as a built it inas a product inside of intelligent ways.</p>
<p>But then as I started to peel the onionon the potential of it, I realized,holy moly, this is going to be biggerthan anything I've ever done before.</p>
<p>So I started out as its own companyand now I'm running that.</p>
<p>Oh, what?</p>
<p>You know that what you First off,</p>
<p>I have to say thank you for your service.</p>
<p>That it.</p>
<p>Was, you know, and I thinka lot of veterans feel this way.</p>
<p>And obviously it means a lot to me.</p>
<p>And I also run a nonprofit called Worthy</p>
<p>Ethos that helps veteransin transition out of the militarythat I started because I saw the needto help veterans in transition.</p>
<p>But I would tell you that</p>
<p>I think I feel this way.</p>
<p>I think a lot of other veteransfeel this way.</p>
<p>It was my privilegebecause I got way more out of my servicein the militarythan I'm sure the military got out of me.</p>
<p>No, I, I doubt that very much.</p>
<p>But again,thank you, though, for protecting,you know, our libertieshere in the United States.</p>
<p>I really appreciate that.</p>
<p>Also, one American story,high school dropout,</p>
<p>CEO of two successful companies.</p>
<p>You know, it wasyou know, it was funny,says one of my last bosswhen I started my company.</p>
<p>It was a guy named General Ray Odierno.</p>
<p>And Odierno is is a legend in the Armyleadership community.</p>
<p>He he replaced General Petraeus as a fourstar commander downrange in Iraq.</p>
<p>He was the guy that put me on that taskto find a predictive mining modelin capability.</p>
<p>And when I had come and I said, hey,</p>
<p>I think I want to start my own companyto help this this thing happen.</p>
<p>You know, he came and he put thisthis mob hand on my shoulderbecause he was a giant gentleman.</p>
<p>We we lost in the cancer last year,fortunately, but.</p>
<p>Not to.</p>
<p>The the just this giant,you know, West Point lineman.</p>
<p>Right. And he puts this mobhand on my shoulders. Three star general,just a great individual.</p>
<p>And he says, Jared,this is the American dream.</p>
<p>He's like to have come where you came frombecause he knew my background.</p>
<p>Right.</p>
<p>And to serve your countryand now have the opportunity toto start your own company.</p>
<p>He's like, I support it.</p>
<p>He's like, in fact, I'll I'll call Giteauand tell him I support it.</p>
<p>And that's kind of what Greecethis let's do this, kids, for meto to actually start my company now.</p>
<p>What an awesome story.</p>
<p>So, all right,let's dive into the into the subject todayand let's go back tolet's see if I can remember the day</p>
<p>March 13th, 2020.</p>
<p>Okay.</p>
<p>Right.</p>
<p>It's when the world came crashing down.</p>
<p>Yeah, right.</p>
<p>I remember the day because it was Fridaythe 13thand we got a call from thethe kid's school.</p>
<p>There's no school today.</p>
<p>We're going to shut downbecause of this COVID.</p>
<p>This little COVID thing will be downfor about two weeks.</p>
<p>That's what everyone said.</p>
<p>What a blackswan momentthat completely changed the world.</p>
<p>I mean, and I told you, I said, you know,my life has been a lifetime,a once in a lifetime opportunities.</p>
<p>I mean, I've just been purely lucky.</p>
<p>So we had already committed</p>
<p>I had already committed to the ideaof what hyper it could be.</p>
<p>And then it's almost like aa perfect summation of events,the fact that COVID hit nobody.</p>
<p>Cause I didn't want COVID to hitand nobody wants.</p>
<p>No, no one. Wanted it.</p>
<p>But the fact that it happened,it created a potential understandingand an opportunity for our technologyto blossominto.</p>
<p>Right.</p>
<p>So before we get to technology,let's talk about it.</p>
<p>What it did was it forcedpeople to start looking at remote work.</p>
<p>And I remember</p>
<p>I got calls from several differentagencies in the federal governmentand in state government.</p>
<p>What do we do?</p>
<p>How how,how do we keep VPN up and running?</p>
<p>That was the big thing, right?</p>
<p>How how, how do we keep</p>
<p>VPN up and running for 800,000 people.</p>
<p>Right before COVID?</p>
<p>If I had gone into a senior leadershipmeeting and tried to say, Hey,how are you going to allow your remote,your workforce to work remotely, like,how are you going to out,you know, service memberswalk outof the room right out of the room.</p>
<p>Now all of a suddenit's like everyone's like,oh my God, what are we going to do?</p>
<p>Right? And it's still a problem, right?</p>
<p>It's stillhow do I manage these remote workers?</p>
<p>And one of the key aspects of managingthem is securely managing them, right?</p>
<p>How do I secure the remote edge?</p>
<p>And it's it's my laptop, it's my phone,it's my tablet, it's whatever,whatever I have.</p>
<p>And a lot of people movedirectly to like VDI.</p>
<p>That was one of the thingsthat they moved to.</p>
<p>Other people went to the cloudand kind of a hybrid cloudlike Office 365,where some of the data is on my laptop,but it's synched up into the cloudand and things like that.</p>
<p>But there's a whole bunch of securityaspects around this.</p>
<p>And then multifactor authenticationbecame important, all these crazy things.</p>
<p>But no one really tackled the problemthat High poorI was really targeting.</p>
<p>Sure.</p>
<p>Which I thought waswhen I saw your guys's product.</p>
<p>That's pretty slickand that is how to use securephones.</p>
<p>All right.</p>
<p>So it's actually ironically, it'skind of more than that. So.</p>
<p>Okay,all everything you said is is correct.</p>
<p>But, you know, when I had my epiphanybecause I originallywe weirdly built hyper as a product, butthe idea was how can I get really, really,really secure communications and really,really difficult places, right?</p>
<p>So the original idea of this was advancedmilitary scenarios or intelligencecommunity scenariosand difficult to be places,and this technology could help themaccomplish their job.</p>
<p>And and once we did that, we're like,wait a second, this is this is waybigger, right?</p>
<p>And this is right beforethis is before quick hit, COVID hit.</p>
<p>You know, we were like, man,this could be way bigger.</p>
<p>And it's biggernot just in in the concept of, well, it'sit's VDI for mobile, which is whatsome people who they try to kind ofdumb it down and say that no it's it'sbigger than that from like nowwe use the words like zero trustand we joke we were zero trust before.</p>
<p>Zero trust was a thingbecause our platform assumesthe edge device is compromised, right?</p>
<p>So rather than I like thatrather than others zero trust approach,you know, otheryou know, large companies build zerotrust approach,which is control everything, controleverything, verify everything.</p>
<p>We took the opposite approach,assume it's compromised.</p>
<p>We assume the edge device is compromised.</p>
<p>Thus I want to collapse the attack surfaceso that you don't have to managethe edge anymore.</p>
<p>You can manage your points of ingressand egress and defend thoserather than defending all the edge devicesthat are out there.</p>
<p>And then when you thinkabout the virtual platformlike VDI versus us, which some would saywere virtual mobile infrastructure,which those of you who are watching whostill don't know what we're talking about.</p>
<p>Yeah.</p>
<p>So Hyper-V is essentially a virtual mobileoperating system.</p>
<p>It's written around the Android openopen source protocolwith a whole bunchof NSA security protocols around it.</p>
<p>What it providesyou is the ability to get to a dedicatedoperating system from any edge device.</p>
<p>But the beauty of it is there's no datain transit and there's no data at rest.</p>
<p>So that means the edge devicedoes not present a threat.</p>
<p>We assume the edge device is compromised,that we would never allow the softwareor middleware layers of the edge deviceto directly interactwith the data that you're protecting.</p>
<p>So by doing so,you're essentially making thisor your tablet or your PC a dumb terminalthat's access an informationset inside of a secure environment.</p>
<p>And and the implications of thatare massive besides not having to defendthe edge anymore,you also imagine, like what kind ofcompute can you put into this form factor?</p>
<p>Well.</p>
<p>My you're limited by space and time.</p>
<p>Yeah, you're limited by space and power.</p>
<p>My operating systemis running in a data center on Iraq.</p>
<p>So that means that my mobile deviceis running on Xeon based Intel</p>
<p>X86 processorsthat are going to outperformthis little thing every day.</p>
<p>And so now that compute bandwidth,all those things just smoke.</p>
<p>What this form factorhas the ability to support.</p>
<p>Now that'sthat that's that's pretty slick.</p>
<p>So though so you let the genieout of the bottle already it's sorry.</p>
<p>Well, I just figured we were going to betalking about stuff and people don't know.</p>
<p>What the heck are they talking about.</p>
<p>Yeah. So it's actually pretty slick.</p>
<p>The perception and I like your approach,which wasthe edge is compromisedbecause phones are out in the wild, Right?</p>
<p>We know that already.</p>
<p>So what's going to preventmy phone?</p>
<p>Let's say someone takes my phone, right?</p>
<p>What's going to prevent them fromjust logging in?</p>
<p>I, I mean and getting accessto my virtual device out therein the cloud or in my data centeror whatever the case may be.</p>
<p>What's preventing them from doing that?</p>
<p>I guess you use the the multifactorauthentication on the devices themselves.</p>
<p>Depending on what you're doing.</p>
<p>I mean, I mean, of course there'salways a hygiene responsible for the userand that user hygiene that cyber hygieneis is generally manifested in a way.</p>
<p>If you're going to deploy MFA,you're going to deploy, you know, I mean,like certain things like look, for one,</p>
<p>I want you to always have a pen or usebiometrics on your edge device to is.</p>
<p>You then have to also authenticateagainst MFAto get into my,my virtual operating system.</p>
<p>So when you start thinking about likemultifactor first,you have to have the phone.</p>
<p>You have to be able to get into the phone.</p>
<p>The phone has to actually havethe correct external certificateto have access to my gateway.</p>
<p>Then you have to authenticateagainst an MFA to get through my gatewayto your virtual device.</p>
<p>Okay.</p>
<p>So if someone's even just cloned my phoneand they're still not going.</p>
<p>To be able to gonot going to do it. Absolutely.</p>
<p>And all these keys residein different tiers of secure key stores.</p>
<p>So there isn't a single, you know,place that you could attack,that you could exploit our platform.</p>
<p>And, you know, we really believe this iseverybody says are secure.</p>
<p>Right.</p>
<p>And one of the most important things thatwe did was in the Department of Fence.</p>
<p>We invited them to provewhether we were right or not.</p>
<p>And so you gave it to a red team.</p>
<p>We've been through sevendifferent Department of Defense red teamsand most most recent couplewere the Threat Systems Management Officeand the director of Test and Evaluation,into which they briefed the DOD</p>
<p>CIO and said, Hey, this is the most securemobile platform we've ever tested today.</p>
<p>And they actually came out of itwith zero significant security findingsin any way, shape or form.</p>
<p>Oh, that that's pretty cool.</p>
<p>Now, the next thing that poppedinto my head aroundsecurity,right, is if you're sending just bits,stream,you're sending stream back to back.</p>
<p>In fact, not even a screen delta pixels.</p>
<p>So just change pixels.</p>
<p>I'll just change pixels.</p>
<p>So the beauty of change pixelsrather than a screen scrape,like a rolling screen scrape,if I can decrypt that,</p>
<p>I can see what you're looking.</p>
<p>Yeah. Yeah,</p>
<p>I can see what you're looking at.</p>
<p>But you're only sending deltasmuch harder.</p>
<p>Are you encrypting that? Yes.</p>
<p>Well, okay,so over the air, who knows what?</p>
<p>It's encrypted. Garbage? Yep.</p>
<p>And if you were.</p>
<p>If even if you could.</p>
<p>Real time decrypt 8 to 56pixel stream.</p>
<p>By the way, if you can do that,the NSA would like to meet you.</p>
<p>You can send me a note. I'll. Yeah. Yeah.</p>
<p>It's a quantum computer</p>
<p>I have running in my garage.</p>
<p>You'll be both.</p>
<p>But the if you could do thatbecause it's delta pixelsand that screen scrapes,all you get is moving blobs.</p>
<p>So it wouldn't even have any value to you.</p>
<p>Yeah, yeah, yeah, yeah.</p>
<p>Would only havewhere I put my mouse, my fingeron the screen.</p>
<p>Right.</p>
<p>No, no that's, that's pretty,that's pretty slickas far as onboarding in how,how do, how do I takea large organization, 100,000 employeeslike Intel and say, hey, we're going to,we're going to move your phone instanceon toan into this new new platform?</p>
<p>Sure. Right.</p>
<p>So because right there, right now andlet's talk about phone secure right now.</p>
<p>Right now I have something</p>
<p>I think it's knocks on here.</p>
<p>Yeah it sounds like Samsung yeah.</p>
<p>Yeah yeah Samsung Knoxand my work stuff is in a secure areaand my my personal stuff is in anotherso I'm not carrying aroundmultiple phones I see people all the timecarry on multiple phones.</p>
<p>I hate it. So I just say container.</p>
<p>That's containerization.</p>
<p>And there's some challengeswith containerization.</p>
<p>So when you look at like MDM,which by the way, we can always go backto the covered to conversation too,because that became your earlier point.</p>
<p>That became pivotal for us to bean actual industry wide viable platformbecause it required people had to changethe way they thought about the problem.</p>
<p>Right? And COVID forced forced that changetoo. To your question about likeeither containerization or really</p>
<p>MDM, right, Because lot number one, peoplesay, well, look, you compete with yeah,no I don't because I'm not MDM.</p>
<p>In fact I, I, I'm,you can use NPM to manage my platformif you wanted to, but I make itso that largely MDM is not necessary.</p>
<p>Yeah that that's really fascinatingbecausewhat do you do when a phone gets stolen.</p>
<p>Oh I've got to do MDM, right?</p>
<p>Because I've got to brick the phone.</p>
<p>So what we've found actually,so there are bad actors out there nowthat are,that they originatedas military, bad actors,but now have got intocriminal organizationsbecause that's what a lot of them do,the regressions, especially, etc..</p>
<p>What we found is, is thatthere was a couple of cases in New York,and there's one out in Californiawhere bad actors will target you.</p>
<p>They'll distract youto take your cell phone,they'll clone your cell phone, and then,you know, they'll drop your cell phoneinto a Faraday bag, take it over,clone it, take it, and then thendrop it back out of the ferreted bagand dump it in a trashcan somewhere.</p>
<p>The reason why is because you as the user,you're going to call the boss and go, Hey,</p>
<p>I lost my phoneand they're going to go, Great.</p>
<p>You're going to go on the MDMA, go brickand the MDMA, and it's going to turngo waiting to connect, Waiting to connect,</p>
<p>Waiting to connect, waiting to connect.</p>
<p>And of course, the device has beennow replicated.</p>
<p>And when they reintroducedthe device on the network, they dumped itout of the Faraday bag, MDMA connectsand then reports back to you.</p>
<p>All this secure, we've bricked. Them.</p>
<p>But yet now they have a full replicationof your device and all your data.</p>
<p>We prevent that becausethe data never existed on the edge device.</p>
<p>That never existed on the edge device.</p>
<p>Pretty clever. Pretty clever.</p>
<p>All right, let's talka little bit about the downsides.</p>
<p>Sure. Right.</p>
<p>Because there are some downsides.</p>
<p>That I always joke.</p>
<p>I say if Achilles had to heal, so do we,you know, you know, even though he washe was famous for one.</p>
<p>But really, he had to. Right.</p>
<p>And so do we,you know, with any virtual platformconnectivity.</p>
<p>Right. So.</p>
<p>Yeah, I was going to say connectivity.</p>
<p>So let's talk about the field of battle,right?</p>
<p>Deal environments, right.</p>
<p>Disruptive,intermittent, low bandwidth, low light,low bandwidth.</p>
<p>This is a problem, right?</p>
<p>Because I can't get access to my data,right, Because it's not on the device.</p>
<p>Sure.</p>
<p>It's so for for a DOD,like a tactical environment,the deal has gotten better and betterand we work with them.</p>
<p>And my other company does this as well.</p>
<p>And but there's there's forwarddeployed communications capabilitieswhere you can deploy a node forwardthat doesn't need long haulreach back capability.</p>
<p>You could deploy a hyper three nodein that forward node.</p>
<p>And then in like a Deville environment,we just did an exercise with itwith a unique organization in the militarywhere we were using ly fito actually transmit networks via flight.</p>
<p>So using, you know, like I wirelessrather than radio, because it wasthe scenario was what happenswhen you're in a spectrum tonight, but.</p>
<p>You can't. Radiate. Exactly.</p>
<p>You can't radiateyour spectrum denied environmentor spectrumtargeted potentially. Right. Sothis, you knowhyper worry can workironically on very low bandwidth.</p>
<p>But it does one of our heelsit does require conductivity.</p>
<p>Two is the type of conductivityit's not as sensitive to bandwidthlike this was originally designedto run on a couple of bars of 3G.</p>
<p>So it doesn't require a lot of bandwidthbecause it's only streaming delta pixels.</p>
<p>So if you think. About yeah, see,that's that's pretty clever.</p>
<p>I'm not sending a bunch of data, right.</p>
<p>Because it's more bandwidth efficientthan a regular phone user is.</p>
<p>And yet. We.</p>
<p>Yeah, because most most most of the timewhen you think VDI I'moh I'm sayinghow often my refreshing screen upbecause that's what people are thinkingso you guys are only sending deltashow often do things actually change.</p>
<p>So it's very very low bandwidthutilization,but in a network environmentthat introduces a lot of packet drop.</p>
<p>So a dirty network that's just horriblefor brand virtualization, right?</p>
<p>It's really hard for themto to be able to rectifywhen it's losing large packet,you know, large sets of packet data.</p>
<p>So so thoseare two really kind of weakness placesthat bandwidth and latencyironically bandwidthit works forin a really relatively low bandwidthas a side effectof using only delta pixelsand and latency that has to dowith what your expectations are.</p>
<p>So you've got to setsome user expectations.</p>
<p>And one of the ways I like to demonstratethat is I take teams calls and zoomcalls on an airplane using Hyper-Vand it works great and everybody.</p>
<p>Knows that.</p>
<p>Everybody on a plane freaks out about it,cause I'm actually on a live call,but I don't use voicebecause of the latency delay.</p>
<p>So what I do is I listen to whatthey're briefing and I type my responses,and then that way it breaks upthat that duplex of of latency.</p>
<p>Okay.</p>
<p>So, so that kind of makes a lot of sense,right?</p>
<p>Understanding the limitationsand of of the technology,which is the Wi-Fi terminology,that's that's pretty cleverand and I get it.</p>
<p>So you brought out the Achilles Achillesheel.</p>
<p>Let's talk about onboarding people now.</p>
<p>And because this one's interesting to me,if I have like a work phone number,which I do and I haveautomatically forward to my cell phone,but could I set this upso I have a work phone numberthat calls my my virtual phoneand it ring on this phone.</p>
<p>So it's so interesting that so we arenot onlyhave we been through all these D.O.D.red teams,we received our aisle five certification,so we're now five certified cloud SAS.</p>
<p>We've gotten the DOD</p>
<p>CIO memorandum saying that we're nowan enterprise DOD capable BYOD platform.</p>
<p>We're the only one out there.</p>
<p>Ironically, the</p>
<p>NSA has a program called</p>
<p>Commercial Solutions for Classified.</p>
<p>So CSC and it's a series of standardsin which you can usecommercial technologiesto get access to classified network.</p>
<p>We are the largest deployed mobileplatform in that environment as well.</p>
<p>And so because everything is encryptedin transit, in and on receiptand it's very lightweight,you can technically do as long as you'rein the appropriate environment,even classified voice across our platform,but in a way that you accomplish itas the same way you would accomplishexactly the scenario you just laid out,which is I would take a my deskphone number through an IP set, you know,so like a call manager of some kindand route that to a softphonethat exists in the virtual thumb.</p>
<p>And then that way</p>
<p>I can literally make phone callsfrom my officedesk, from my virtual device.</p>
<p>Anywhere.</p>
<p>Can I take my environment Ihave already on here and move itinto your virtualized environment?</p>
<p>Or is it like starting from scratch?</p>
<p>Right.</p>
<p>I'm like, Well,</p>
<p>I have which version of Android do I have?</p>
<p>And I have to download all of my appsthat I normally have.</p>
<p>How can I take what I haveand move it over?</p>
<p>Or do I or do I do itlike I have a brand new phone?</p>
<p>We have brand.</p>
<p>It'd be a brand new phone to some extent.</p>
<p>So remember, most services you use onyour phoneare CSPcloud service providers of some kind.</p>
<p>Of course using.</p>
<p>Office 365, regardless of which deviceyou log into office 365,you get your office three, you.</p>
<p>Get all your data, right? Yeah.</p>
<p>So from that standpoint,you would still have all the same dataavailable to you through your CSPs, etc..</p>
<p>The but the way the device,the phone itself is managed likeso there is we don't havea play store in our device by designbecause play store bleeds off data, right.</p>
<p>We don't use that.</p>
<p>We have our own app store and mechanismin which we sideload applicationsand manage those applicationsspecifically to prevent datableed out of our environment because,you know, we kind of talk about as we talkabout the advantages of securityand how great security is a sideeffect of us not being an MBAand not not even,you know, we're our own product category,which by the way, that's kind of a doublefolded sort to that has to it.</p>
<p>Well, yeah, yeah, yeah.</p>
<p>You're on your own product category.</p>
<p>You're the leader. Of of one. Yeah.</p>
<p>I mean or have a very,very small number. Right.</p>
<p>But the, thethat the advantage of that thoughis not just securitybut it's also privacy.</p>
<p>So that means I don't needor want abilityto see into your personal device.</p>
<p>Right.</p>
<p>So my platformbecause it doesn't trust your deviceit means it wants no permissions.</p>
<p>So it doesn't want to knowwhat you're doing on your personal time,on your personal device, you know,and if it has malware on itbecause you went to a bad websiteor your team or you're not.</p>
<p>Yeah.</p>
<p>Or your teenage kid went to ato a bad website and it got malware.</p>
<p>And that malware probesthe security containers on your devicebecause it's looking for data.</p>
<p>If you have an MTM,your MTM is going to alert,hey, malware associated with bad website,right?</p>
<p>Probe the security container.</p>
<p>And in some places like the governmentthat can leadto an investigation that really shouldn'thave happened in the first place.</p>
<p>Right.</p>
<p>So we protect the users privacybecause we don'twe don't want to knowwhat's on the device.</p>
<p>That's yourthat's your that's your challenge.</p>
<p>That's your environment.</p>
<p>What we enable the enterprise to dois very granularly managewhat applications you have access toand what data actually flows in and outof that operating system environment.</p>
<p>So that the side effectof that privacy piecesthat here in the U.S., it's amazingthat that, you know, MDM has struggledwith adoption that large scale simplybecause of the privacy issue.</p>
<p>Right.</p>
<p>Go to go to Europe.</p>
<p>And they have what's called GDPR.</p>
<p>You know, GDPR essentially prevents it.</p>
<p>GDPR says you're not allowed to movea personal a person's personal informationacross a country's borderwithout their explicit permission.</p>
<p>Right.</p>
<p>Well, the beauty is we don't movedata anywhere.</p>
<p>We just allow it to view.</p>
<p>So that means I don't havethe GDPR restrictionssort of enabling you to move across</p>
<p>Europe across.</p>
<p>And I can.</p>
<p>Access databecause I'm not moving the data.</p>
<p>No, this is this is really fascinating.</p>
<p>So the next question that comes to mind isif I want to deploy this in my, let's say,my home,</p>
<p>I would never do that, but I mightbecause I have teenage kids, right?</p>
<p>Yeah.</p>
<p>So I, I could create my own play store,my own app store, right.</p>
<p>You would select through the managementcourse.</p>
<p>So now, of course, we're not B2C yet.</p>
<p>We hope to get there.</p>
<p>But let's talk B to B,let's say I'm going to deploy this admin.</p>
<p>If you're the administrator,you're going to go throughan approved app templateand you're going to selectwhich apps your users get a chapter,approve, which apps your users get,you would you would through eitherwe get them from open source libraries,we get them directly from the app vendors,we sideload them.</p>
<p>You create an app templateand you deploy that app templateand you say, Hey,look, I'm going to have power usersget this mobile users get this,you know, executives get this.</p>
<p>And these are the appsthat they get in the associated data.</p>
<p>Right?</p>
<p>Okay.</p>
<p>Now let's go to the backend of of this thing.</p>
<p>I think we got the front endon the back end.</p>
<p>Are you guys running this in ais it a service you're offering?</p>
<p>Is it can I run it on prem?</p>
<p>Can I run it in the cloud?</p>
<p>What are the restrictions around that?</p>
<p>And I'm guessingsince you're doing military, it'sgoing to be running on prem for,for some of it and some of itin the cloud because it dependson which department you're talking to.</p>
<p>Yeah. So, so interesting.</p>
<p>You know, when you talk about the COVIDbeing one of the evolutionary thingsthat happened to us, right,that helped us evolve in the context ofthat was alsoin the evolution of the technology.</p>
<p>So we started out purely as an on premtechnology, right.</p>
<p>And and the idea wasyou deploy server racks worth of stuffand you get mobile access, right?</p>
<p>And that was what we,everybody was comfortablewith three or four or five years ago.</p>
<p>And when you look at the idea of peoplethat were going to cloud, a lot of peopleweren't comfortable with cloud or,you know, is cloud really efficient?</p>
<p>Is it really cost effective, etc..</p>
<p>We we went througha pilot with the Department of Financewhere we realized the costto run a mobile device on a data centeron a server rackjust wasn't cost efficientcompared to cloud, because like,look at that.</p>
<p>When I talk about a couple of thingsthat really had to happento make Hyper-V successful,like I bought it outas and it didn't succeedwhen I bought the technology.</p>
<p>So why is it succeeding now? What changed?</p>
<p>Well, a couple of things.</p>
<p>One, the network has massively changed.</p>
<p>We now have 5G, we have high speedbandwidth environmentsaccessible everywhereto cloud.</p>
<p>So if you look at the placein which cloud is really valuable,cloud is valuable on incremental compute,what I need to compute a little bitand then not anymore.</p>
<p>And then again and then not anymore.</p>
<p>That's where Cloud really makes its moneyfrom an efficiency standpoint.</p>
<p>Well, yeah, yeah, absolutely.</p>
<p>So, so, so so mobile devices arewhat you are what you're saying.</p>
<p>I think I hear what you're saying.</p>
<p>It correct meif I'm wrong when I'm not on my mobile,my virtual mobile device,that instance is shut down.</p>
<p>So what what happensis, is that the data set resides.</p>
<p>It remains you know, it's like the datathat you have that's associated to you.</p>
<p>But we decommissionthe compute in the RAM.</p>
<p>And then when you come to logback in again, we fire it back up again.</p>
<p>So then that wayyou're not paying for a 24 hour,seven day a week phone,you're paying for your memory.</p>
<p>The little steps that you're taking now.</p>
<p>And I mean, our long term goal iswe want to make this consumable as a,you know, like B to C level.</p>
<p>And, you know, my objective inthe business is to get this costsdown to the point where it's 999 a monthand you can have an a completely securesecond cell phoneor a third cell phone or a fourthcell phone all from your own device.</p>
<p>Now, now that this is very, very cool,</p>
<p>Jerod And we could talk for hours.</p>
<p>I could see it already.</p>
<p>But if people want to find out more,where do they go?</p>
<p>Well, our Web site is a great location.</p>
<p>So you can go to www.hypori.comand take a look there you canyou can contact us you can request a demoand you can even if you're ayou know an organizational consumerand you're looking at tryingto deploy this in your organization,we'll set up something for youyou need to play with itsounds great.</p>
<p>Also, I'll have these links on our onour podcast site, EmbracingDigital.org.</p>
<p>Jared Well, thank you.</p>
<p>This has been this has been great.</p>
<p>And like I said, we're going tohave to have you come back on.</p>
<p>I mean, so I do want to say, youknow, Parting shot is while we're doingall this great stuff in the government,like the Army's gone to 50,000 licenses,the Air Force is talking to us, the DOJ istalking with the government is amazing.</p>
<p>Where this is really going tochange is outside the government.</p>
<p>Think, oh, absolutely.</p>
<p>HIPPA protections think SEC.</p>
<p>They'll trade control protections,think banking, health care,defense, industrial base.</p>
<p>That has to be CMC compliantrather than you havingto deploy infrastructurein second cell phones to be CMC compliant.</p>
<p>You just buy from a SaaS from usand we save you, you know,a fraction of the money with more secure.</p>
<p>Oh yeah, yeah, yeah.</p>
<p>Absolutely not.</p>
<p>I see a lot of potentials.</p>
<p>Health care, even education. Absolutely.</p>
<p>Absolutely.</p>
<p>With which manufacturing, telecom.</p>
<p>I mean, imagineif you're if you're one of the majortelecom providersand you can offer your customers and say,hey, look, if you're already a customerfor an extra 699 a month,we'll give you a second cell phone.</p>
<p>Oh, thisthis is going to cause so many problemsfor a Department of Justice.</p>
<p>Oh, by the way, burnerphone, virtual burner phone is.</p>
<p>There you go. Yeah, exactly.</p>
<p>I mean, hey, and also, you can have fivephones on your phone, right?</p>
<p>All right, Jerrod.</p>
<p>Hey, thanks again for coming on.</p>
<p>I appreciate you guys having us.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org Until nexttime, go out and do something wonderful.</p>

</details>
