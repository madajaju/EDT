---
layout: posts
title: "Operationalizing Business Process Management"
number: 113
permalink: episode-EDT113
has_children: false
parent: Episodes
nav_order: 113
tags:
    - Business Process Management
    - Automation
    - Camunda
    - CapitalBPM
    - BPM

date: 2022-11-18
guests:
    - Darren W Pulsipher
    - Max Young

img: thumbnail.png
summary: "In this episode, Darren discusses business process management and automation with Max Young, CEO of Capital BPM"
---

{% include soundcloud.html id="edt113" title="#113 Operationalizing Business Process Management" %}

{% include youtube.html id="bIJRyJxSGvE" %}

---

Max calls himself a “failed academic” because he left his Ph.D. in mathematics, specializing in topology, to study computer science. He earned an undergraduate and a master’s degree, specializing in AI. He then worked in business process management (BPM), starting at Lombardi, which was sold to IBM, and a few other vendors in the BPM space. Ten years ago, he took a plunge with friends and founded Capital BPM.

Max chose to focus on BPM for two reasons. First, he has always liked algorithms because it provides a systematic approach to solving complex problems. Algorithms give him a sense of security during crazy situations.

Second, he likes what is called transformations in mathematics. For example, if you have an ugly shape with many corners that is hard to measure, you would transform it into, say, a rectangle and then apply all the theories around rectangle measurement, measure it, and translate the answer back to the original shape. In the same way, in BPM, you can take a problem to a domain where it can be easily solved. Rather than making an issue a micro problem with complicated nested F statements that are difficult to maintain, you can transform it into a flattened-out problem that you can see and attack in stages.

This process is like zooming in on Google maps to see where you need concentrated focus and then zooming back out to see how that fits into the big picture. The heart of enterprise architecture is the ability to zoom in and out to ensure that line you’re drawing is still valid.

Max likens his fondness for BPM within the computer science world to martial arts, which he has studied since he was six. He says there are practical martial arts, such as judo and muay Thai, and more esoteric ones, such as tai chi. He likes pragmatic martial arts because they solve real-world problems. He doesn’t get into fistfights anymore, but, for example, his judo skills help him when he slips and falls. BPM is pragmatic in that it is the key to solving a business problem. He believes there is actual value in using all the theories he learned in school and making them subservient in creating a business platform that allows people to more efficiently and consistently solve everyday problems, thereby giving people and the community more opportunities.

This is one area of computer science that can be attached to how people work. Things can be automated to reduce the amount of repeatable and mundane tasks so they can focus on more important things. People worry that automation will swallow up everyday jobs, but instead, it removes drudgery and frees up time for more critical work. It can also create jobs. These same fears existed when Ford automated computers were introduced, but they ultimately made new industries. BPM should be fully embraced rather than feared.

The best way to start operationalizing processes is to use the scientific method of articulating the problem. In business process management, you draw pictures via a business process modeler. Max likes Camunda Business Process Modeler, which is downloadable for free with just a little notation to learn. In the modeling program, you draw steps that articulate the different systems and how they work.

In a hiring process, for instance, you start with a pool that defines interested parties, such as the candidate, the IT manager, and HR. Inside the pool are “swim lanes,” each containing one player who can do things. You can think of these as LDAP groups. Then you start laying out your business process: first, a candidate applies for the job, then HR might do a review, then an IT manager will review. Approved decisions are noted along the way. After the top-level, significant steps are in the model, you can get down into more detail regarding more articulate and nuanced processes, like a split interview, one for technical and one for management.

![bmp image](./bpm.png)

The modeling program generates XML behind the scenes as you draw all of these diagrams. This XML is run time interpretable by BPM machines; as you are drawing the diagram, it can become an executable process.

The human element is still in this loop but using a BPM system like this makes it clear where processes can be automated, such as checking job history or running a criminal background check. The model also allows flexibility and experimentation. For example, suppose the subject matter expert says that they don’t want to run a job check and criminal record check simultaneously because the criminal record check is expensive, and the job check is cheap. In that case, it’s easy to change to move the job check first and require a decision before the criminal record check. As changes are made, you build consensus and a true story that becomes progressively truer the more you experiment.

While the tool looks like a drawing tool, it is a modeling tool that lets you draw pictures and simulates them on the back end. So you can run this process and see all the different decision points and where they lead. The model will also tell you that you can’t deploy if you haven’t done something correctly.



<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople, process and technology.</p>
<p>On today's episode, Operationalizing</p>
<p>Business Process Automationwith CEO of Capital BPM, Max Young.</p>
<p>Max, welcome to the show.</p>
<p>Thank you, Darren.</p>
<p>Good. Good to be talking to you again.</p>
<p>So, Max, this is like the third or fourthtime we've talked.</p>
<p>I was really impressedwith some of the things that you showed meon business process managementand business process automation.</p>
<p>I really like the approachthat you guys took.</p>
<p>But before we dove into that, Max,let's hear your background a little bit.</p>
<p>Where do you come from?</p>
<p>What led you to where you're at today?</p>
<p>Sure. Sure.</p>
<p>So I am a failed academic.</p>
<p>I was studying for my Ph.D.in mathematics, specializingin topology in the mid-nineties,and I looked at mytalents, which were meager,and I looked at the job.</p>
<p>Pull for mathematiciansversus computer sciences.</p>
<p>And I walked across the street at Ohio</p>
<p>State, and I got into computer sciencespecifically and finishingan undergraduateand a masters specializing in AI.</p>
<p>And then I just startedworking in the computer field.</p>
<p>I got the bug early on.</p>
<p>I published a couple of books</p>
<p>I actually helped with.</p>
<p>Part of the Java line was the digital 1.4</p>
<p>Value Expressions Engine.</p>
<p>I had a small, small part to do with that.</p>
<p>And then, you know, I found myselfa small company called Lombardi,which was run business process managementthat was sold to IBM.</p>
<p>I bumped around to a coupleof other vendors that workin the same</p>
<p>BPM process orchestration space.</p>
<p>About ten years ago I took the plunge andwith some friends we formed Capital IPA.</p>
<p>Oh, that's awesome.</p>
<p>I what what a great story.</p>
<p>Right.</p>
<p>Mathematician found your wayto the computer science realm like myself.</p>
<p>I started in E, actually. Okay.</p>
<p>And I said, wow,</p>
<p>I'm really good at this programing stuff.</p>
<p>Let me go learn how to do it right.</p>
<p>And I had some great teachersin computer scienceand I ended up switchingliterally the last year of college.</p>
<p>I switched from double lead to see usand finished my senior degree.</p>
<p>And yeah, that was crazy that I did that.</p>
<p>What was I thinking?</p>
<p>You know, you doubleguys were the only onesthat I was intimidated by academically.</p>
<p>Like, I always felt like, you know,like a chief nerd being a mathematician.</p>
<p>And then, you know,you guys walked in the room,and you guys could do all the math.</p>
<p>We could do,but you could also do the engineering.</p>
<p>And it was very intimate. Well.</p>
<p>I have to tell you, I come from a company.</p>
<p>Intel has a lot of doubles.</p>
<p>They're not the best they're not the bestsoftware engineers in the world.</p>
<p>Right.</p>
<p>Because and I learned that I'ma total software guy.</p>
<p>I'm not in fact, even in double E, I said</p>
<p>I don't want to be like everyone else.</p>
<p>So I took the power option.</p>
<p>What was he thinking?</p>
<p>Because I'm not a great mathematician.</p>
<p>I'm horrible at math.</p>
<p>But I there was something</p>
<p>I could really architect software.</p>
<p>Really? Well, yeah.</p>
<p>And, and look at it tops downand it got me throughsome of my classes, my programing skillsbecause the teacher was like,you really are horribleat the test and things,but this program you wrote that explains,you know, a field theory on on powerlines, that's incredible.</p>
<p>I'm like, oh, thanks.</p>
<p>Yeah.</p>
<p>So we'll let you pass this class.</p>
<p>That's kind ofwhat my my college career was like.</p>
<p>So very nice.</p>
<p>I know exactly what you're talking about,but that's let's let's talk about whybusiness process management.</p>
<p>I mean, this isthis is kind of in that real weirdrealm of computer sciencewhere, oh, it's not algorithms, it's,you know,but it's so important and so useful.</p>
<p>But why did you choose that route?</p>
<p>So there are two reasons.</p>
<p>One is I've always liked algorithms.</p>
<p>I've always liked systematic approachesto solving complex problems.</p>
<p>It's the same reason I got intomartial arts.</p>
<p>You know, there is a way to do this thing.</p>
<p>There's a way to throw a good punch.</p>
<p>There's athere's a way to protect your ribswhen you're,you know, when you're boxing, whatever.</p>
<p>I like algorithms.</p>
<p>They give me a sense of security and also,frankly, a sense of daring.</p>
<p>I can get into crazy situationsand trust the algorithm.</p>
<p>The other thing I really like aboutbusiness process management in particularis that it reminds me a lotof what we calltransformations in mathematics.</p>
<p>So let's say you have this shapethat's like really ugly, right?</p>
<p>And you're trying to measure it and youcan't because it's got all these corners.</p>
<p>What you would do in mathematicsand mathematics is you wouldtransform this to a different spacewhere it's like a beautiful rectangle.</p>
<p>And then you applyall the theories around measurementsof rectangles, and you measure that.</p>
<p>You take the answer and then you translatethe answer back right?</p>
<p>So you take your problem to a domainwhere it can be solved easily.</p>
<p>You get the value out of thatand you bring it back.</p>
<p>And that's what I really likeabout business process management.</p>
<p>I can take all these things around.</p>
<p>Well, this system has got to talkto this other system,except when this event goes off.</p>
<p>And here's the escalation that we do,unless there's an eruption.</p>
<p>And then sometimeswe have a business rulethat we have to apply,and this is how we talkto this other thing.</p>
<p>And rather than making thatlike a micro problem, supercomplicated, nested, if statementsthat are difficult to maintain,it becomes thisbeautiful, sort of flattened out problem.</p>
<p>The you can see and attack in stagesyou know like zooming in on Google Mapslike here'swhere we need concentrated focusand then you zoom back out and see howthat fits into the big picture.</p>
<p>I really like what you said therebecause I found that myself.</p>
<p>You do need a top level pictureof everything so you can see how thingsrelate to each other in proximity,just like in the map, right?</p>
<p>You can see a map of the United Statesto really understandwhere the California where I liveis it with relationship to other things?</p>
<p>I need to blow it outin order to get a feel for, hey,how long is itgoing to take me to drive to Oregon?</p>
<p>Exactly right.</p>
<p>I can see thatsame thing with business process.</p>
<p>I love</p>
<p>I love that analogy. That's a great one.</p>
<p>Yeah. That ability.</p>
<p>I think that's somethingthat you and I have in common.</p>
<p>You know, as soon as we started talking,</p>
<p>I felt like we were from the same tribebecause that ability to be ableto zoom out and zoom inand make sure that the lineyou're drawing is still true.</p>
<p>That's theheart of, I think, enterprisearchitecture,right?</p>
<p>I think that's really critical.</p>
<p>And finally, I will say this.</p>
<p>The thing that I really like aboutokay, so minor tangent here,</p>
<p>I'm really in a martial arts.</p>
<p>I've been doing it.</p>
<p>I'm 51 now. I've been doing martial arts.</p>
<p>I was like six.</p>
<p>Oh, wow.</p>
<p>And within the realm of martial artsand I've got multiple ones.</p>
<p>I've been beat up by a lot of people.</p>
<p>But within the realm of martial arts,they're like these martial arts thatare considered practical, like your judo,your boxing, your Muay Thai.</p>
<p>And then you've got onesthat are a little bit more esoteric,like your Thai cheeseand your Aquino's and whatnot.</p>
<p>Now, the thing that I likeabout the pragmatic martial artsis that they solve real worldproblems, right?</p>
<p>They they have an effectivenessthat is germane to the art itself.</p>
<p>So, you know, I'm at my fiftiesand I don't get into fistfights anymore,but I slip and fallall the time and my judo saves me.</p>
<p>Right.</p>
<p>There's a pragmaticthere's a pragmatic aspect to it.</p>
<p>In the same way Ilike business process managementbecause it is fun.</p>
<p>It is key to solving a business problem.</p>
<p>We're taking all these theoriesand all these things that you and</p>
<p>I learned through school and grad schooland on the job.</p>
<p>But we're making them subservientto creating a business platform.</p>
<p>That means that peopleget to keep their jobs and get bonusesand buy Christmas kids for their kids.</p>
<p>And I love being a part of that.</p>
<p>Without without, you know,writing a love letter to capitalism.</p>
<p>I feel that there is a true valuethat I provide to my communityby making it easier and more consistentfor people to solve common problems.</p>
<p>Therefore, giving them the opportunityto go solve uncommonand interesting and exciting problems.</p>
<p>So this is I like how you said that,becauseit's not always the casewith computer sciencethat we can really attachto the way people work.</p>
<p>Right. Right.</p>
<p>And this is kind of that human computerinteraction part.</p>
<p>A lot of times we're actually creatingmore work for for people with this.</p>
<p>You're kind of turning it around.</p>
<p>How do people work? Yeah.</p>
<p>And how can we automatethe things that they dothat arethat are repeatable and mundane, right?</p>
<p>So that we can make theirtheir work easierand so they can focus moreon more important things.</p>
<p>I really like that.</p>
<p>And that's another thingthat I am really excited about.</p>
<p>People talk about the threat of automationto mundane jobs,and that is a valid that is a validcritique.</p>
<p>Automation is going to swallow upa lot of mundane jobs.</p>
<p>Yeah, but look what the. Jobsit creates. Though.</p>
<p>That's yeah, you're you read my mindbecause what it really doesis it removes drudgery of open email,you know, copy,</p>
<p>I don't know this field number 27from Excel put it into the services,then push the buttonand wait 3 minutes to removes thatand it allows peopleto step back and solve next generationproblems, real problems that were hidingbehind the money problems.</p>
<p>But you never got to them because you wereopening Excel and waiting 3 minutes.</p>
<p>Right, exactly.</p>
<p>And it I mean, this revolutionthat we're seeing onon information automation and things, it'sthe same thingthat went through with Fordwhen he automated automaking.</p>
<p>Right.</p>
<p>It's the same thing that we sawwhen computers were first introducedin the sixties and seventies.</p>
<p>Yeah, right.</p>
<p>Oh, no.</p>
<p>What are all those people going to do?</p>
<p>It is truewe don't have typing pools anymore,right?</p>
<p>Yeah.</p>
<p>I can't even imagine because I grew up on</p>
<p>I grew up with email and.</p>
<p>Oh, yes, this world I can't even imagine.</p>
<p>How would you communicatebefore you'd call on the phone?</p>
<p>You'd some memosso someone would take something up.</p>
<p>So, so much wasted time.</p>
<p>But there were a lot of peoplesupporting that.</p>
<p>But if you look,those people are now in powered in morepowerful and morecontributing positionsthan they were before.</p>
<p>Yeah. So yeah.</p>
<p>And it's createdwhole new whole new industries around it.</p>
<p>So I think we have to embrace it.</p>
<p>Absolutely.</p>
<p>So let's let's talk about embracinghow do I operationalize this?</p>
<p>Because there are so many tools out thereon business process automationor robot process or robotic processautomation.</p>
<p>RPA Yeah.</p>
<p>Yeah.</p>
<p>How, how do I really make this happennow where</p>
<p>I can actually use iteffectively and repeatedly?</p>
<p>So what was the first step?</p>
<p>So great that man, I, I really,</p>
<p>I love the wayyou approach things because your firstquestions are pragmatic. Sowhat I would say is thatthe best way,so it comes back to the scientific method.</p>
<p>The best thing to dois to articulate out your problemand the way that we do that.</p>
<p>In my world, in the business processmanagement world,is we draw little pictures.</p>
<p>So can I share my screenand show you something?</p>
<p>Absolutely.</p>
<p>So there is a free tool like thiscalled it's called the Commander</p>
<p>BPM and Modeler.</p>
<p>You can download it for free.</p>
<p>There's a company out therecalled Commander.</p>
<p>They, you know, they make this modeler.</p>
<p>There are other companiesthat do this as well.</p>
<p>I like is</p>
<p>I think it's a pretty good one. It'sit's pretty clear.</p>
<p>And there's just a little bit of notationthat you have to learn.</p>
<p>And it is this you're basicallygoing to be drawing stepsthat articulate outwhat the different systems areand how they work.</p>
<p>So just a little bit of vocabulary.</p>
<p>This will literally this one part of it,it'll be over in about 2 seconds.</p>
<p>So we have this concept of a pooland a pool kind of definesall of the interested partiesin a process.</p>
<p>So if this was like a hiring process,we would have like a candidateand we'd have the i.t managerand we have h.r.</p>
<p>So the larger thing that you seeand hear outside is called the pool.</p>
<p>The inner ones are called swimlanes. Right?</p>
<p>So let's saywe're doing like a hiring process.</p>
<p>We have a candidate in the swim lineand then we have like h.r.</p>
<p>And you can think of theseas sort of elderly groups, right?</p>
<p>People who are in a rolethat are allowed to do somethingand then you might have like 90 manager.</p>
<p>So now youstart laying out your business process.</p>
<p>What's the first thing that happens?</p>
<p>Well and candidate might applyand you have excuse me.</p>
<p>My my spelling is atrocious.</p>
<p>Apply for a job.</p>
<p>And then, you know, from thereit goes to a next step, which is H.R..</p>
<p>H.R. might do a review.</p>
<p>There's a there's a nameyou can register how you do this stuff.</p>
<p>You know, you have like a active verband a noun, but you might say somethinglike review applicationand then you might have like a decision.</p>
<p>These little diamonds represent decision.</p>
<p>So if you know, if it's approved,it goes back up.</p>
<p>You go to say the i.t.</p>
<p>Manager who might do an interviewand if it's not approved,it goes back to the job applicantsto answer more questions.</p>
<p>Right.</p>
<p>So here's like the first generationof this question.</p>
<p>How do we hirepeople? Well, it's like this.</p>
<p>Okay, nowhow do we make this more nuanced,more articulate?</p>
<p>Well, maybe the interview process has,you know, like a split, and it's and,you know, this interview is actually likea technical interview.</p>
<p>And then there's like a managementinterview, and each one of thosehas an opportunity to be approved.</p>
<p>And then if it is approved, we go on.</p>
<p>And if it's not approved, we progressand we push it.</p>
<p>And I like what you said here.</p>
<p>You start with the very top level. Yeah.</p>
<p>And say what are the major stepsinto hiring person.</p>
<p>That's right.</p>
<p>Right.</p>
<p>And start there and then you can startgetting down into more detailafter you do that.</p>
<p>And a tool like this letsyou do this pretty quick, it looks like.</p>
<p>That's right.</p>
<p>So you start sort of articulatingwhat this is and this is not newto anyone like you and me,any any architect, any business analyst.</p>
<p>What's interesting about thisis that when you draw these diagrams,it actuallybehind the scenes is generated X amountand this example is runtimeinterpretable by BPM engines.</p>
<p>So what that means is that as I'm drawingthis diagram,this can actually becomean executable processright?</p>
<p>So as I'm writing this down, I'm saying,oh, wow, this is a special kind of task.</p>
<p>It's a human task.</p>
<p>So you can see it'sgot a human component here.</p>
<p>And, you know, maybe this one is as well.</p>
<p>And then when we do a review, applicants,maybe now we start to say,well, you know, we review the applicantand maybe we have an h.r.</p>
<p>Person that does the review,but they talkto, you know, like a background checksystem, right?</p>
<p>So check for job history, right?</p>
<p>Or a criminal record.</p>
<p>Right? Right. Yeah.</p>
<p>So that's a that's a great one.</p>
<p>So you would say and that's partof the natural evolution of these things,you would say, well, yeah, let'scheck for job history and also let's checkfor like criminal record, right?</p>
<p>So so far you haven't takeneven if this is automated,you still haven't taken humanout of the loop yet, which is good.</p>
<p>Right? Right.</p>
<p>So this is this is augmenting the workthat a human is doing is what I'm seeing.</p>
<p>Right.</p>
<p>But even as I'm doing this,what's interesting is you could say, boy,you know, the time of people is expensiveand the time of machines is cheap.</p>
<p>Why don't we do thiscriminal background check first, right?</p>
<p>And then if that passes,then we bring it to the person and review.</p>
<p>Because if you don't pass the criminalbackground check, maybe we don't let you.</p>
<p>You didn't get time from our guy, right?</p>
<p>Right.</p>
<p>So what you're really doing here isyou are using this mechanismto describe your problem.</p>
<p>And in the definite,like most things in life,when you start thinking about it outloud, you end up discovering solutions,right?</p>
<p>Yeah.</p>
<p>And that's where things startto get kind of interesting.</p>
<p>You're like, okay,well now I understand that</p>
<p>I'm probably going to need an integrationwith, you know, some backend system that'sgoing to check for their job historyand check for their criminal history.</p>
<p>So you as, say, the businessanalyst or the, you know,the enterprise architect will say,you know, call up one of your solutionarchitect friends and you'll say, hey,how long would it takeus to figure this out?</p>
<p>You know, finding a systemthat we can afford that can do thissort of background check right?</p>
<p>So I'm starting to hackthis problem togetherand and I get a little obsessivewith my lines crossing.</p>
<p>So I'm trying to make surethat doesn't happen.</p>
<p>This is almost like a fidgettoy for me at this point,but you can see how I am lookingfor opportunities to do automation, right?</p>
<p>So here I am.</p>
<p>And I can easily see this in this diagram,you know, using a BPM tool like this,it will, it willscreen, hey, this is an automated checkthat I could do.</p>
<p>There's a servicethat lets you do this sort of thing.</p>
<p>Exactly.</p>
<p>And this is actually the other part of itthat's really powerful for, again,people like you and I,because we need to be subservientto the needs of the business.</p>
<p>So the first thing that I'll do withthis is I will run this by my semiand my subject matter expert and I'll say,</p>
<p>Hey, am I hearing this right?</p>
<p>Is this what we do?</p>
<p>And you know, he'll say, Well, you know,it's kind of what we do,but it turns out that we don't wantto do these things in parallelbecause, say, a criminal backgroundcheck is really expensive,but a job history search is really cheap.</p>
<p>So what we really want to do is we want todo these maybe sequentially, right?</p>
<p>So we do the first one and if it passes,then we do the second one.</p>
<p>And I'm not sayingthat's necessarily the case, but what I.</p>
<p>Say, it's easyfor you to make that change.</p>
<p>That's right.</p>
<p>And in making that change,</p>
<p>I am building consensus.</p>
<p>I am building rapport.</p>
<p>I am building a true storyabout what's happening.</p>
<p>Right. Like again,like the scientific process.</p>
<p>It becomes progressively more truethe more the you experiment with it.</p>
<p>Yeah.</p>
<p>So now I start to tell this storyand as I'm telling this story,like, okay, well this, you know,this makes a little bit of senseso I can come in here and, you know,</p>
<p>I can put likelogic into this, like thisand say for the sake of argumentthat I want to build this and deploy itso I can actually take this thingand say, well, you know, here's a processand here's like another one.</p>
<p>And literally, within a matter of minutes,</p>
<p>I can have this deployed and working.</p>
<p>So we can see what happens when you goone way or you go the other way.</p>
<p>So you're telling you withif I use a modeling tooland it's not a drawing tool,</p>
<p>I want to make sure people understandthat.</p>
<p>That's right.</p>
<p>This is a modeling tool.</p>
<p>So it does let you draw pretty pictures,but it also simulates on the back end.</p>
<p>So I can actually run this workflowor this process and seeall of the different decision pointsand where they lead to.</p>
<p>So I can check my.</p>
<p>That's exactly. Right. My model.</p>
<p>That's exactly right.</p>
<p>And this is where this becomesreally sort of powerfulbecause I can build this.</p>
<p>I think I screwed upsome of my logic here,but I can build this, I can deploy it,</p>
<p>I can see it,execute.</p>
<p>And it's actually what it's actually doingis it's yelling at me and it's saying,hey, I can't actually deploy thisbecause you didn't do it.</p>
<p>The right way.</p>
<p>And what?</p>
<p>It's yelling at me, right?</p>
<p>So yeah, it's helping you, right?</p>
<p>It's yeah, it's actually catching me.</p>
<p>So it's saying, hey,you told me you were going to dosome kind of integration here,but you didn't.</p>
<p>So I'm not going to let youdeploy this, right?</p>
<p>So now I can build this.</p>
<p>And that was a successful deployment.</p>
<p>That's cool.</p>
<p>Max To finish listening to my interviewwith Max Young.</p>
<p>On Business Process Automation,check out our next episode.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.org until next time.</p>
<p>Go out and do something wonderful.</p>

</details>
