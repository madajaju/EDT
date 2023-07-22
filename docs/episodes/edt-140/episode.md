---
layout: posts
title: "Background Checking Your Open Source"
number: 140
permalink: episode-EDT140
has_children: false
parent: Episodes
nav_order: 140
tags:

date: Wed May 24 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Michael Mehlberg

img: thumbnail.png
summary: "In this episode, Darren interviews Michael Mehlberg about increasing confidence in open source through background checking the open source communities."
---

{% include transistor.html id="d17c9ba3" title="#140 Background Checking Your Open Source" %}

{% include youtube.html id="FhrAWLUEN-Q" %}

---

<p>If you're a software developer, you know the feeling of pride that comes with creating a popular package or tool that many people find useful. However, this popularity can sometimes attract the attention of attackers who look for vulnerabilities to exploit.</p>
<p>In a recent podcast, software engineer Jay Phelps shared his experience of discovering a vulnerability in a widely-used package he created. After realizing the potential impact of the vulnerability and the sheer number of instances of the package in the wild, Phelps quickly worked to fix the issue to prevent attackers from exploiting it.</p>
<p>This scenario highlights the importance of vigilance for software developers, especially those who create popular packages or tools. While it may be tempting to bask in the glory of a widely-used product, it's crucial to remember that popularity can also attract attackers. Regular checks and updates to address any vulnerabilities can help protect users and prevent exploitation.</p>
<p>As a software developer, it's important to approach your work with both pride and caution. While it's great to contribute to society with your creations, don't forget to prioritize the security and safety of your users. Stay vigilant and keep your packages up-to-date to prevent vulnerabilities from being exploited by attackers.</p>
<p></p>
<p>

<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people process and technology.</p>
<p>On todays episode, Backgroundchecking your OpenSource,</p>
<p>Micheal Mehlberg</p>
<p>CEO of Darksky Technologies.</p>
<p>Michael, welcome to the show.</p>
<p>Thank you for having me.</p>
<p>Hey, Michael, when we first talked,</p>
<p>I was really enamoredwith what you guys do,which we'll get to a second.</p>
<p>But first off, I know my audiencewants to know a little bit more about youand where you come fromand what you're doing now.</p>
<p>Yeah. Happy to share.</p>
<p>I, I do.</p>
<p>I've been in technologyfor as long as I can remember.</p>
<p>Started when I was about 12 years old.</p>
<p>I had a friend that was workingon a compact computer, which is kind of a,you know, compact with a cue,if you remember.</p>
<p>I remember that. Oh, yeah.</p>
<p>There's a funny namebecause this thing was hugeand had a handle on the back,but it probably weighed £50.</p>
<p>But but you could carry it around.</p>
<p>It was compact, Right?</p>
<p>And I remember that.</p>
<p>Exactly right.</p>
<p>And he he had programed this game.</p>
<p>I think he called it in Mortal Kombat overtwo stick figures that werefighting each other.</p>
<p>And I was just floored that you couldthat you could do that.</p>
<p>You know, I never thoughtabout where programs came from.</p>
<p>And so I started programing.</p>
<p>You know, he helped me learnand I started programing and I knew rightthen I was going to get into softwaredevelopment and making video gamesall through high schooland then finally ended up at Purdue</p>
<p>University studying computer scienceand left there to go right into industrywhere I was working on basically D.O.D.software protecting, you know, weaponssystems against tamperingand in reverse engineering.</p>
<p>So I got a crash course onhow to reverse engineer softwareat the first company</p>
<p>I did an internship with.</p>
<p>And I love solving problemsthat turned outto be at least good enoughto keep my job there. Andfrom there, just,you know, got into the whole industryand protecting software,protecting weapon systems.</p>
<p>And I have been, you know, learningever since, and I'm still learning.</p>
<p>Cybersecurity is one of those thingsthat it's kind of a never ending job.</p>
<p>There's always some new attack out thereand some new way to to defend against it.</p>
<p>Well, it doesit does keep us actually busy. Right?</p>
<p>It gives us employed. Right.</p>
<p>So, yeah, I guess we do.</p>
<p>We attribute we like the hackers out therecausing us to have no problem.</p>
<p>We knowthere's plenty ofother problems to solvewithout them creating anymore.</p>
<p>Right. Yeah.</p>
<p>Yeah, very much so. So.</p>
<p>So tell me a little bit aboutwhen I first talked to you went, Wow,</p>
<p>I never thought of thisabout the whole open source.</p>
<p>There's a big push right now on securingthe software supply chain out there.</p>
<p>Open source is a big aspect of that.</p>
<p>Tell me your guys's approach to helpingsecure the software supply chain.</p>
<p>Yeah, I guess.</p>
<p>I guess it helps a kind of to seewhat I've seen over the past</p>
<p>When I when I first got started,we were really just focusedon protecting our operating systemor even even applicationor right as a single applicationif it had some data in itor some algorithmthat was particularly sensitive,you know, we wanted to protect itbecause if an attacker got hands on, then,you know, they would understand itor they wouldthey would be able to reveal,you know,the secrets that were in in the software.</p>
<p>And sowe started with with just applicationsstartedthen protecting bigger systems, right?</p>
<p>Operating systemsand and things of that nature.</p>
<p>And over time,the open source development communityjust started exploding.</p>
<p>And so while we were learning,you know, how to both break in and defendbreak into and defend systems,there were justthousands and thousands of packagesbeing put out there by the whole opensource community, which was phenomenalbecause first thing you do as a developeris go looking for, you know,somebody who's already solved the problem.</p>
<p>Yeah.</p>
<p>So you don't have to reinvent the wheel.</p>
<p>So eventually, you know, itcame to a point where, all right, there'sa lot of operating systems out there.</p>
<p>There's constantly problemswithin operating systems.</p>
<p>How do you really make a secure one?</p>
<p>Right?</p>
<p>You can patch all this stuffon after the fact.</p>
<p>But what if you missed something, right?</p>
<p>It's it's a tough game, a cat and mousegame that we play with the attacker.</p>
<p>And unfortunately, it's it's in theattacker's favor most of the time becausewe have to get every single we have to getwe have to catch every single bugand every vulnerability in orderto protect the system wholly, which is animpossible task most of the time.</p>
<p>Whereas an attacker only has to find one.</p>
<p>They only have to find one. Yeah. Yeah.</p>
<p>And then there. And then they're in.</p>
<p>So how do you you know,how do you really makea secure system from the ground up?</p>
<p>Well, everybody's using open source.</p>
<p>You know, a couple of years ago,you know, Linux is huge.</p>
<p>It's in every systemthat's out there just about.</p>
<p>And but how do you secure itfrom the ground up?</p>
<p>And we kind of came to this realizationthat, boy, if we can'tif we can't trust the developerswho are developing the software,that'skind of the foundation of it, right?</p>
<p>Is we trust our developers,then how do we actually trustthe code that we would want to usefrom all of these different opensource packages?</p>
<p>And so that's kind of how we,</p>
<p>I guess, came to where we are today.</p>
<p>First, starting on embedded systemsecurity, just focused on application,then kind of broadening our view to how dowe secure the whole operating system.</p>
<p>And now really lookingat kind of fundamental trust issues.</p>
<p>And when I first started supplychain software, supply chain, I don'tthink was uttered once in any conversationthat we had and only recently. Right.</p>
<p>Have peoplereally started talking about it.</p>
<p>And I think it's just because there trulyis a software supply chain now.</p>
<p>There are,you know,just an enormous number of packagesand developers out therethat are all contributing both fromwithin organizationsand without organizationscreating this supply chain ofof people who develop systems,in some cases unknowingly.</p>
<p>Right. They're just developinga package elsewhere in the world.</p>
<p>They have no idea that it's being used inin really critical systems.</p>
<p>Well, that brings upsomething interesting that you saidyou have to trust your developers, Right?</p>
<p>So typically, I know when I got hired onand my first job, oh, my goodness, thethe vetting that they did for mewas outrageous.</p>
<p>I had psychological profile done.</p>
<p>I had background checks.</p>
<p>I had security checks done all this stuffso that the company knewwho they were bringing in and writingsoftware.</p>
<p>And specifically for me,it was for medical imagingwas was my first job out of college.</p>
<p>So they were ultra cautious.</p>
<p>But we just go and download someopen source package off the Internet.</p>
<p>Right? Right.</p>
<p>We don't know who wrote that stuff.</p>
<p>We have no ideaif they have a bent towards doingsomething malicious or nefarious.</p>
<p>Sure.</p>
<p>I mean, we go to to great lengths toto trust the peoplethat we bring into our organizations.</p>
<p>And then, you know,</p>
<p>I have developed a background.</p>
<p>What's the first thing you dois you go and try and find somebodywho's already done it.</p>
<p>And they areprobably not inside your organization.</p>
<p>Probably not yet.</p>
<p>Probably haven't been checked.</p>
<p>They're looked atand, you know, 99 pointwhatever percent of those peopleare probably developing open sourcefor the right reasons.</p>
<p>They're putting their code outthere. They're sharing it.</p>
<p>That's that's the amazing aspect of it.</p>
<p>But there's also kind of,you know, the fearthat can ruin it for the rest of us.</p>
<p>And and you don't knowyou just don't know whatyou know, what you're getting becauseyou haven't put anybody through that.</p>
<p>That type of.</p>
<p>So is that why you guys kind of shiftedyour focusfrom from protecting embedded systemsto operating to systemsto getting down to the core, which iscan I trust the person actually writingthe code?</p>
<p>Is that where that is?</p>
<p>That you got to that?</p>
<p>Yeah, it really is.</p>
<p>Because, I mean, still the ultimate focusis getting a system out therethat is secure and, you know, accomplisheswhatever missionthat that it needs to accomplish.</p>
<p>But as we're building it,you know, because we're pulling infrom all of these different places,software packages,you know, left, right, up and downfrom all over the world, Boy,if we can't if we can't trust thoseand, you know, our assertion is that youcan'tbecause you don't knowwho is who has worked on it,you got to at least look at it,make sure that you're not pulling in,you know, a problem, eitheran intentional. Or.</p>
<p>Or a maliciously inserted problem into,you know,what are really, really critical systemsto either, you know,national security or economics or whateverit may be.</p>
<p>Well, I mean, when when people argue,well, I test I test the software,right?</p>
<p>I've tested the software, the it passesall of all of the tests that I runto make sure there are no vulnerabilitiesor anything like that.</p>
<p>Or maybe you do a code review, Diego,line by line on open source code.</p>
<p>I don't know very many people that do. No.</p>
<p>I don't.</p>
<p>You know, we we talk about thata lot and in so many cases you just can't.</p>
<p>I mean, the Linux, the kernel,the Linux kernel alonehas almost it'smaybe exceeded 30 million lines of code.</p>
<p>That's amazing.</p>
<p>And if you have an enterprisedistribution,you know, something like RedHat,you're talking abouta hundred million lines of code or more.</p>
<p>It's just untenable to review all of that,you know, with human beings at least.</p>
<p>So you do you apply tools to itto try and seeif you can catch vulnerabilities</p>
<p>And those tools, they absolutelythey still have to remain in ourin our pipelines.</p>
<p>So we're not getting rid of those tools.</p>
<p>We still need those tools.</p>
<p>Absolutely. Yeah.</p>
<p>You know, we can identifyso many past vulnerabilities.</p>
<p>We don't want to see them again.</p>
<p>Right. As a developer,you copy and paste code.</p>
<p>You may unintentionally copya vulnerabilitythat's already beendetected in one packageand you're using it over here in another,a software assurance tool to be able toidentifywhat it really and and and root it out.</p>
<p>So so then why then why you even careabout who's contributing it</p>
<p>If these tools outthere are looking at things,what what danger is therein having a developer that's maliciousif I'm scanning their code anyway?</p>
<p>Yeah.</p>
<p>So the trouble is, I don't knowthe latest numbers off the top of my head,but there's some dozensof new vulnerabilities that are discoveredevery single day right.</p>
<p>And so that tells me and, you know, tellskind of the cybersecurity communityof experts that there's somethingthat we're not catching.</p>
<p>There's something that's that'sthat's in there that's getting in therethat we're not able to identify upfront.</p>
<p>Because if we could identify it upfront,we would root those out and you'd see,you know,</p>
<p>There's also, youknow, somemore nefarious things that could happen,you know, switches that that get flippedat the behest of some attackerwhere you don't know ifif there'sany kind of malicious code in thereuntil that switch is flippeduntil they've.</p>
<p>Oh, like a runtimes which even.</p>
<p>Yeah, something like that,</p>
<p>I think those are probably goingto be few and far between.</p>
<p>But these are the creative,creative things that you can dowith an attacker to,to try and inject malicious code.</p>
<p>I think the, you know, the realthe real point is if,if you don't knowwhere that code is coming from,which you don't,if you're just grabbing it from anywhere,then you don't really know what you'rewhat you're pulling in.</p>
<p>And given that there are so many newvulnerabilities every day,given that there are, you know, millions,millions of developers out there,we just don't know anything aboutin some very small percentage of themthat can kind of upset the applecartfor the rest of us.</p>
<p>It's worth taking a lookto make sure that, you know,the package that you pull in doesn'thave something that was somethingthat was injected malicious.</p>
<p>So you said something interesting.</p>
<p>There's there's of a bunch of usthat depend on a small number of packagesthat could affect lots of things.</p>
<p>A log forge is a great example rightwhen the log for J vulnerability came out,there was another package and I can't</p>
<p>I can't remember the nameoff the top of my headin the Node.js communitythat almost everyone depended on, eitherdirectly or indirectly depended on.</p>
<p>Oh, sure.</p>
<p>That was maintained by one person.</p>
<p>Right.</p>
<p>There's quite a few of those actually.</p>
<p>Yeah. So.</p>
<p>Whoa. Okay.</p>
<p>You know, when you think and, and,and it popped upbecause this one person was like,everyone's making money off of me.</p>
<p>Where's my, where's my take?</p>
<p>That happens a lot.</p>
<p>You know,</p>
<p>I even used to think of, of open source.</p>
<p>You think ofopen source as a community of peoplethat are all,you know, all eyes on this one packageand you're going to havesecurity experts in there, as wellas programing experts and memory experts.</p>
<p>And they're all going to point out,when you put this package out therein the open, they're going to point outwhere the problems are,</p>
<p>Hey, you're using memory wrong over here.</p>
<p>Hey, this is the vulnerabilitythat we've already seen before.</p>
<p>Don't program it that way.</p>
<p>At the end of the day, a huge, hugepercentage of packages are reallybeing developed and maintained by just oneor in some cases, a handful of people.</p>
<p>There's big packages for sure,like openness to sell a crypto packagebeing developed by hundreds of developersor the open Java development kit</p>
<p>I think has some 600plus active developers, but most packagesand when I say most,</p>
<p>I mean that double digit largepercentage of packagesare maintained by one.</p>
<p>I wanted to be.</p>
<p>Is that something, is that something thatwell, obviously we were concerned about?</p>
<p>Is that something that you can identifyeasily identify, Yeah.</p>
<p>Most of the time that information isis available thoughwho is actively contributing to it.</p>
<p>You just go on GitHubmost of the time, right.</p>
<p>Or get lab or wherever there or.</p>
<p>That's there and availableand even who is who is inactive,meaning they've contributed in the pastand they are no longer makingcontributions.</p>
<p>And so all of those can be kind ofinterestingpieces of data that you can,you can see a timeline of history.</p>
<p>You can start to understandhow supported or unsupporteda particular package is,and that may be a risk for your program.</p>
<p>If you have a really critical programthat you're working on and you have,you know, this one piece of software,no matter how small,that is just a critical piece to that,you know, Jengastack of blocks that you have in yourin your entire software stack,you don't want that thingfalling out from under youand causing the rest of it to topple.</p>
<p>So it's worth knowing how supported it is.</p>
<p>It's worth knowing a little bitabout where it comes from andand who's worked on it.</p>
<p>You know that</p>
<p>I just on whose worked on it too.</p>
<p>You couldbecause I know there's developersout there contributors to open sourcethat work on similar packagesat the lower levels or framework levels.</p>
<p>And theand these are very prolific programmersthat work across severaldifferent packages at the same time.</p>
<p>Sure. Right. They're contributing.</p>
<p>I think it would be fascinating toto take a software packageand break it down and see the numberof contributors you have an open sourceand then see who your biggest contributoris of the full softwarestack by number of packagesor lines of code, whatever.</p>
<p>I think that would be fascinatingto look at because you could easilysee who you're mostly dependenton an individual, right?</p>
<p>Right. That's right.</p>
<p>Yeah.</p>
<p>So and so when you say prolific,some people are we havewe have visualizations that we'vewe've created by looking at thisin different ways that showsome people are making,you know, tens of thousandsor in some caseshundreds of thousands of contributions.</p>
<p>It could be as something as small as,you know, a change to a characteror line of code or somethingas big as a check in of a function.</p>
<p>But tens of thousands ofof changes, additions or removalsto open source packages,they really, truly are prolific.</p>
<p>And it's fascinating to see,you know, how the whole communitykind of comes togetherand then certain people who are, you know,they're kind of the whalesfor for a particular packageare really influencing things.</p>
<p>Wow, that'sneat.</p>
<p>Now, here's another question.</p>
<p>What motivates me because there'ssome motivation behind developer.</p>
<p>I'm a softwaredeveloper to Michael's, so, you know,and I've contribute to open source.</p>
<p>What's that motivationfor someone to spendthat much time and effort?</p>
<p>But I mean, I can speak from experience iswhen I get a problem,you know, a technical problemthat I havethat I can solve with with programing.</p>
<p>I just can't stop until I solve it.</p>
<p>And and I think that's part of it.</p>
<p>There's definitely a tremendousfeeling of satisfactionthat you get from open sourceand contributing back to the communityby by seeing a lot of peopleuse the package that you've created.</p>
<p>You're right.</p>
<p>When I've when I've written a packageor something and and the number goesabove 10,000, you're like, yes,look how cool, right?</p>
<p>It's like I'm contributing to society,right?</p>
<p>People are downloading my stuff.</p>
<p>It's awesome. That's great.</p>
<p>There's, you know,the unfortunate side of that Very same</p>
<p>I think I think that very sameset of motivations can alsocontribute to theattacker side of things as well, where,oh, look at this log for Jay.</p>
<p>For example, you mentioned earliermillions and millionsof instances of that packageout there in the wild.</p>
<p>I bet they were head over heels, happyabout how widely spread.</p>
<p>How are they? Oh, yeah.</p>
<p>That particular vulnerabilitywas so in fixing it, you know,was one of the most important thingsthat we did quicklybecause of how widespread that that was.</p>
<p>Yeah, that's that's crazy.</p>
<p>So tell me a little bit about what</p>
<p>Dark Sky Technologyis doing in this space, because we kind oftouched a little bit on it.</p>
<p>So if if I wanted your guys's services,what what sort of helpcould you give me to see my open sourcevulnerabilities?</p>
<p>I'm going to call it maybe it'snot vulnerabilities, maybe it's exposure.</p>
<p>Yeah, right.</p>
<p>Yeah.</p>
<p>A risk or a measurement of trust.</p>
<p>Measurement of trust.</p>
<p>I like that even better. Yeah.</p>
<p>You know, that'smaybe best illustrated with an example.</p>
<p>There was a package last year.</p>
<p>You can look it up.</p>
<p>It's there was a Reuters articlethat came out about this packagecalled Push, Push and Push, whichis kind of a sophisticatednotification package if you wanted to to,you know, put notificationsin an application that you were developingand you didn't want to do thatyourself, you know, you could integrate,push, push in there.</p>
<p>Well, the Army and the CDC had integratedpush into multiple applications.</p>
<p>I think the CDC said seven or eightthat they had put itin, not sure how many for the Army,but they had they had put this in thereand they were using it.</p>
<p>And by the looks of it,push, push was an American companyand they were, you know, American runheadquartered, I think in Californiawith offices in Maryland and andand somewhere else in the United States.</p>
<p>Come to find out they were actually notheadquartered in America.</p>
<p>They were headquartered in Moscow.</p>
<p>They're paying taxes in Moscow.</p>
<p>They had developers in Siberiaand some in Thailand as well.</p>
<p>And soyou don't even haveto know if there is a single vulnerabilityin that package to immediatelyknow that you want to remove it. And.</p>
<p>That you're in youryour systems and software.</p>
<p>And that's what the Army Corpsand the CDC did is they removed it.</p>
<p>And that was what led to that Reutersarticle.</p>
<p>Holy smokes. Right.</p>
<p>This potentially Russian influencein our in our applicationsthat we had to get rid of because.</p>
<p>Well, that's that's really interestingbecause I could see this is athe open source community could be easilyinfiltrated by nation state.</p>
<p>Bad actors. Sure.</p>
<p>You know.</p>
<p>And we all know some of the bestprogrammers in the world are coming out ofout of Russia, Estonia.</p>
<p>They've got great programmersin that area.</p>
<p>So I would I would guessthat they are contributing open source.</p>
<p>Yeah, I think it's safe to saythat any avenue that of,you know, foreign state actorcould use to infiltrateor get some sort of meaningful advantageover a technology thatthey're going to do it for in leverageand you have to assume that, right.</p>
<p>That's the the game that you're playing.</p>
<p>So push, push.</p>
<p>You know, the first thing that we didwhen we saw that article is we'veplugged it into our own toolsbecause a lot of the tools that we'vedeveloped are aimed at automaticallydetecting trust issues like that.</p>
<p>And so we plugged it in, tools went out,did their analysis, they lookedat different sources of intelligencethat are out there, opensources of intelligence,and made a determination that,holy smokes, you know,there is an enormous effortinside of Russia to developthis particular push,push application around a package.</p>
<p>And there is no developmentout of the United States.</p>
<p>And so that's a red flag.</p>
<p>You know, right away you're telling meyou're an American company,but you don't have a singlepieceof development happening out of there.</p>
<p>So it was able to detectsort of trust issues like that.</p>
<p>And raise the warning flag and say,hey, I'm not so sure about this.</p>
<p>Open source is developedall over the world.</p>
<p>It doesn't meanthere's anything wrong with that.</p>
<p>There's like you said, there'splenty of very good Russian developersor any nationality for that matter,who are contributing to open source.</p>
<p>But when you say you're one thingand you're actually another.</p>
<p>That's an issue. For it.</p>
<p>That's that's potentially.</p>
<p>So what what other what other trust issuesdo you guys evaluate?</p>
<p>I mean, location,of course, location is going to be builtinto the Internet trust,whether we like it or not.</p>
<p>Right.</p>
<p>The federal Department of Defenseis not going to use open sourcethat was developed in China or Russiaright now or North Korea.</p>
<p>Sure. They're just not right.</p>
<p>So that's one trust.</p>
<p>What other do you score these?</p>
<p>How do you evaluate a contributor?</p>
<p>It's it'sreally it's really quite difficult.</p>
<p>And we, in fact,do not want to be in the businessof scoring because every programis going to be a little bit different.</p>
<p>Okay. You're going to andthere's going to be some absolute nos.</p>
<p>Right.</p>
<p>If you have a developerfrom a sanctioned company or country.</p>
<p>That you.</p>
<p>In that right away.</p>
<p>The rest of it,though, can be quite a bit, you know, grayso to say, you've got some programsthat are going to sayabsolutely no to this country,you know, having any development influenceor absolutely no to this company,having any sort of development influence.</p>
<p>And you've got other programsthat, you know, they don't care.</p>
<p>They're not as they're not as sensitive.</p>
<p>And so it really is up to thethe program or the business unitor the company itselfto determine what their businessand security requirements are.</p>
<p>I think the government is is coming aroundis you've probably seen recentlywith the executive order and thethe follow up memorandum about softwarebuilding materials is really a pushfor software supply chain security.</p>
<p>And in that memorandumthey even mention having a risk framework,and it wasn't particularly well definedwith that risk framework is I think we'regoing to get to a nice definition here,you know, in the coming months or year.</p>
<p>Once that definition happens,we might be able to say, all right,there's some mix, there's somequantitative things that we can do here toalert ourselves ifwe run into these issuesthis country is and now this you know,somebody who's contributedmultiple CDs is a no.</p>
<p>Yeah, I was going to ask that.</p>
<p>I mean to you can what attributes do youcan you report on not necessarily scoringbut you are reporting on attributes likethis guy contributedor this programmer contributedand it resulted in his CVand that happens a lot.</p>
<p>Like if you ran it on me,it might say, you know, Darren has a 25%,you know, CV generator right on the CV</p>
<p>Generally, that would be bad, right?</p>
<p>I don't want to use any of his codeanymore because he writes crappy code.</p>
<p>Right. Right, right.</p>
<p>Yeah.</p>
<p>Can you get.</p>
<p>Down to that level where I can look at,hey, I, you know, correlation between</p>
<p>Darren checking in code into open sourceand CVS coming up on his code, right?</p>
<p>I mean, you can get to the.</p>
<p>Level of</p>
<p>I don't knowif there's anybody out there doing it,but multiple CVS would certainly be aa fine again, could it be intentionalor not intentional?</p>
<p>Right.</p>
<p>Like I said, youcopy paste code all the time.</p>
<p>If there's a piece of codeyou're using over and over.</p>
<p>I charge you. But he wrote it for me.</p>
<p>That's what I'm going to apply.</p>
<p>Yeah, that's right.</p>
<p>It wasn't my fault.</p>
<p>It was my fault. You.</p>
<p>He did it.</p>
<p>What about goingbeyond just programing, right?</p>
<p>What about looking in?</p>
<p>Because they do this. They.</p>
<p>They do this all the time with employees.</p>
<p>They.</p>
<p>They look at financial records.</p>
<p>They look at, right?</p>
<p>Mm hmm. Yeah.</p>
<p>You know, I don't know if companiesare still doing drug testing or not.</p>
<p>Obviously,you can't do a virtual drug test.</p>
<p>Sure.</p>
<p>But you can look at criminal records.</p>
<p>You can look at a whole bunch of things.</p>
<p>Is that something that you see valuable?</p>
<p>Is that something you guys can doas well as reachinto the public side of things as well?</p>
<p>I mean.</p>
<p>Yeah, if you think aboutif you think about, you know,just the profile, the Internet profileon yourself for if I think about the</p>
<p>Internet profile on myself and I have a</p>
<p>I have a LinkedIn profile, I'm on Reddit,</p>
<p>I'm on GitHub, and and you start tolook at all the different piecesof information that are available.</p>
<p>What skills do I have?</p>
<p>You know, I don't I have some work historyin the field of cryptography,but I probably shouldn'tbe developing any crypto algorithms.</p>
<p>I definitely shouldn'tbe developing any kernel level, you.</p>
<p>Know, got. Linux drivers, for example.</p>
<p>So I might be able to look at thatand say, well, this person is kind of outof their element.</p>
<p>And the quality of the codethat they write is pretty lowand they're associatedwith this malicious website over here.</p>
<p>And you start to, to build up and say, I,</p>
<p>I want to look at what they're.</p>
<p>What they're writing, right?</p>
<p>I got to make.</p>
<p>Sure I can't review 30 million linesof of Linux kernel code,but I can look at their, you know, adozen lines that they've contributed and,you know, just make sure that everythinglooks okay and and say, yeah, thumbs up.</p>
<p>We have a littleflag here, but we're going towe're going to swipe that awaybecause it looks like it's okay.</p>
<p>We've had eyes on it.</p>
<p>So you're not just lookingat my contributions.</p>
<p>You're also looking you're doinga background check on open sourcedevelopers.</p>
<p>You could say thatwe're in, in, in for the purposes ofof finding those developerswho would intend to create malicious harm.</p>
<p>Well, yeah, some of the companies do that.</p>
<p>Companiesdo that when they hear someone write.</p>
<p>You have to.</p>
<p>Yeah, yeah, yeah, yeah. And right.</p>
<p>I've had background checks done on meand rightly so.</p>
<p>And, and if the first thing that I didwas step in the doorof a companythat now trusts me because of thatbackground check and the referencesthat they've talked to youand I start pulling in codefrom all over the placeand they don't know where that came from.</p>
<p>I wasn't the one that wrote it.</p>
<p>Somebody else? Yeah.</p>
<p>Their idea of where it's coming from.</p>
<p>Now, that's, that's somewhat scary.</p>
<p>So yeah,if people want to find out more aboutthis wholeconcept, I love trusting open sourcecontributors.</p>
<p>Right? Does that just kind ofwhere do they find out more informationand where can they contact you to engageif if this is a concern of theirs?</p>
<p>Yeah, we're on dark sky technology.</p>
<p>Com is our is our home page.</p>
<p>We spend a lot of time on LinkedIn.</p>
<p>That's a great way to direct messages.</p>
<p>We search dark sky technologyso you'll find us and you cansend us a message or interactwith our content.</p>
<p>We're we're really big onyou know kind of spread the word and andjust opening upthe things that we've learned aboutcybersecurity and reverse engineeringover the past 20 years,sharing it with the community and,you know, trying to helpbring awarenessand understanding that opensource is a phenomenally great thingthat's just done.</p>
<p>Amazing.</p>
<p>It's doneamazing things in technology space.</p>
<p>But we shouldn't just, you know, blindlyjust just grab itand put it into our systems, especiallyfor those really critical systemsthat are either,you know, supporting our warfighteror maybe responsible for, you know.</p>
<p>Health care, financial.</p>
<p>I mean, yeah, the list is long, right?</p>
<p>Right. So, well.</p>
<p>Yeah that would be a great placeis. Yeah. Yeah.</p>
<p>Michael, thank you for coming on the show.</p>
<p>This is this is exciting.</p>
<p>This is interesting to me right there.</p>
<p>A very interesting topic.</p>
<p>It's very interesting.</p>
<p>It's it's so much fun to to be engaged,you know, kind of at the root levelof of of trust.</p>
<p>Right.</p>
<p>Because if we can build thattrust from the ground up,then we can finally get to systemsthat that we trust.</p>
<p>And, you know, we can send outknowing that they're going to dowhat they're meant to doand and not be compromised by somebodywho has different intentions for us.</p>
<p>Yeah, absolutely.</p>
<p>Again, Michael,thanks for coming on the show.</p>
<p>Thanks for having me.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracing digital, dawg.</p>
<p>Until next time.</p>
<p>Go out and do something wonderful.</p>

</details>
