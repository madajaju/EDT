---
layout: posts
title: "Automating Business Process Management"
number: 114
permalink: episode-EDT114
has_children: false
parent: Episodes
nav_order: 114
tags:
    - Business Process Management
    - CapitalBPM
    - BPM
    - Automation
    - Camunda

date: 2022-11-23
guests:
    - Darren W Pulsipher
    - Max Young

img: thumbnail.png
summary: "Darren Pulsipher, Chief Solutions Architect, Public Sector, Intel, and Max Young, CEO of Capital BPM, discuss operationalizing business process management with modeling programs."
---

{% include soundcloud.html id="edt114" title="#114 Automating Business Process Management" %}

{% include youtube.html id="ysjoqIqvOGw" %}

---

BMP modeling reminds Darren of when he took drafting in high school, and AutoCAD's introduction of computer-aided drafting systems changed the game.  Before, they would have pages and pages of complex systems and diagrams so people could build, but they couldn’t test the model to ensure it was right. Using computer modeling, they could run simulations to ensure there weren’t problems such as electrical and plumbing running through the same hole.

This is analogous to architects using PowerPoint to show business processes instead of using a modeling tool that can find conflicts and issues in what you thought the business process was.

Using a business modeling tool also solves a practical problem by eliminating the wasted time of getting all the interested parties together for meetings that may need to be more productive. Instead, you can put a deployed model into the hands of the business customer and work through the steps with them.

After articulating and modeling the processes, you can choose integration points that might attach to restful interfaces that get information and pump it back in. This is how business processes can integrate with microservices in the cloud. In the example of the hiring process, these points might be where you need an API to invoke checks for job history or criminal record. The inputs will be items such as social security numbers and dates of birth, and the outputs will be a Boolean - does the information match or not? This is where. You can start having that iterative conversation.

![bpm image](./bpm.png)

There are quite a few manual steps in this process, and you can choose which ones to automate. For example, if you decide that an interview didn’t go well, you can default to HR. After you deploy that new process, you can go back and look at the previous version if you want to, so you have two concurrent versions of the software working and deployed at the prototype.

The Camunda modeler is a native modeler, but Capital BPM has built its own applications that help streamline some of the work and support different user roles.

This system is different from RPA because instead of capturing what a user does with keystrokes, a business analyst looks at the processes and steps across multiple departments. The analyst is looking top-down at the whole process. An RPA can be plugged into some steps for efficiency. A simple example is if a job applicant passes the job history check and criminal record check, it can go to a senior HR person; if not, it’s rejected. Choosing specific steps, or sets of steps, to automate is an iterative approach that has been used successfully in software development for some time.

RPAs can be game changers, but they are tactical and short-term. While these short-term gains may be profitable, you need to look at the entire business process to find optimization and steps you can eliminate. The story of the woman who always cut the roast before baking it because that’s how her mother did it is analogous to some company processes. The woman finally asked her mother why she cut the roast, and her mother replied, “So it would fit in my pan.” Many company processes are only there because they’ve always been done that way, and no one has thought to question why.

Testing, simulation, moving things around, and running processes repeatedly in the modeler, in other words, empirically testing, can help eliminate this process bloat and add significant value. Visualization and experimentation are vital parts of the whole process.

Max points out that there is fidelity between the diagram and the actual execution. Developers often draw diagrams as a starting point. Still, the charts disappear as development moves through the different parties, so what the business thinks is happening and what is happening are different. The diagram and reality are separate.  In this type of modeling, the picture is always an accurate representation of what is happening. In addition, it’s easy to see and make changes for improvement. 


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people, process and technology.</p>
<p>On today's episode, Optimizing.</p>
<p>Processes with Business Process Modeling.</p>
<p>Part two of my interview with Max Young,</p>
<p>CEO of Capital BPM.</p>
<p>Just so you know what this reminds me ofwhen I was in was I was in high school,</p>
<p>I took drafting.</p>
<p>Yeah.</p>
<p>So I was in three yearsof drafting in high schooland my junior yearthey introduced CAD systemsfor the first time,computer aided drafting systems, AutoCADand it was a huge shiftfrom drawing outbecause we had the big drafting boards,the whole thing,and you would have to draw pages and pagesfor complex systems, pages of diagramsso people could build them.</p>
<p>But you couldn't really test how could youtest that your model was right.</p>
<p>You, you did a lot of workand there was a lot of back and forthbetween the drafters, the architectsand the guys that had to build the thingsright.</p>
<p>All of a sudden, computer aided draftingcame along and they really used a modelinstead of.</p>
<p>That.</p>
<p>By using a model technique,now we could actually run simulationsof those modelsand see if there were any issues like,</p>
<p>Hey, did I have electrical and plumbinggoing through the same holes in a wall?</p>
<p>Well, that's a problem.</p>
<p>You don't want electricaland plumbing together, right.</p>
<p>And small things like that.</p>
<p>So what you're saying with this,this is very analogousto a lot of architectsare using PowerPoint presentationsto architector to show these business processes.</p>
<p>But if you use a modeling tool, itups the game so it it can find conflicts.</p>
<p>It can find issues in what you capturedor what you thought the business.</p>
<p>Process was not.</p>
<p>All right. So whatyou can actually see here, for example,that this thing has been deployed.</p>
<p>You know, it's at this particular step.</p>
<p>I can submit it, I can have logic,and it allows it to go one way or another.</p>
<p>And what I like about thisis that it solvesa really important problem for me.</p>
<p>And it's, again, a deeply pragmaticproblem, you know as well as I do.</p>
<p>What happenswhen you want to start a new project?</p>
<p>You sit down, you get, youknow, ten, 20 people into a room.</p>
<p>You guys shoot the breeze for about tenor 15 minutes about the kids in the snow.</p>
<p>You know, you talk about stuffsomebody might draw on a whiteboard,somebody takes notes, takes pictures.</p>
<p>There is an analyst in the room.</p>
<p>They go away and, you know,if you're lucky, you know,by the end of the week, they've typed outthe notes as senator everyone.</p>
<p>And then after you're done with that,you find a time when everybody elsecan get in the room again and again.</p>
<p>If you're lucky, somewhere in the next 2to 4 weeks, you have like a second meetingabout this, and you spend most of thatmeeting reviewing what you did previously.</p>
<p>And then you might be ableto move the ball forward in nature to.</p>
<p>Right.</p>
<p>I don't think I'm spellingany corporate secrets.</p>
<p>That's a no, no, no.</p>
<p>This is no, this is corporate. Right.</p>
<p>By here's what I just did.</p>
<p>I just went out and I builtand I deployed this.</p>
<p>I can put it into the handsof my customer, my business customers.</p>
<p>They can actually come in hereand they can say, well,</p>
<p>I'm going to actually drive this task.</p>
<p>Right? I'm I'm going to actually.</p>
<p>I want to step through it.</p>
<p>So you have. To push this. Wow.</p>
<p>Now I come over here and we see thatthe diagram is at this step,like itreally went through these processes.</p>
<p>And if I had told you to do like a checkfor a restfulcall here or here,you would have done those things.</p>
<p>So that's that's the nextthat's kind of the third part here is</p>
<p>I can take it from modelingto integration.</p>
<p>That's it.</p>
<p>So if I, if I, if I look at thethe steps here, we had to articulate.</p>
<p>Right, or capture the business processand articulate it, model it.</p>
<p>And now I can chooseintegration points in these steps.</p>
<p>I can say, hey, at this step</p>
<p>I'm attaching to a rest will interfacethat's out there that getsthat information for me and pumps back in.</p>
<p>So this is how I can integratebusiness processwith microservices or servicesthat are out there in the cloud, whatever.</p>
<p>Exactly.</p>
<p>So, so for example, you could say,hey, if we're going to do this project,the orange spots are the placeswhere we're going to need,you know, someone to come in and createan API for us that we can invokethe checks for job historyand checks for criminal reviewand what are going to bethe inputs and outputs of this?</p>
<p>Oh, well, you know, the inputs are goingto be the Social Security numberof the date of birth and the stateand and the outputs going to be a boolean.</p>
<p>You know, did you knowdoes the information match or does itnot match? Right.</p>
<p>So you can start havingthat iterative conversationand that becomes.</p>
<p>Yeah, so so this,yeah, this, this sounds a lotlike what we do in software development.</p>
<p>It is.</p>
<p>Right.</p>
<p>Which has been kind of missingin the business process or systemsanalyst space where this is mostly sits.</p>
<p>Right.</p>
<p>This mostly says, oh,</p>
<p>I've got a business analyst that's comein, help me do process improvement stuff.</p>
<p>But they're they're not modeling.</p>
<p>They're using, you know, Visio.</p>
<p>Visio is not a model. Right.</p>
<p>This is a drawing tool.</p>
<p>So I really like this.</p>
<p>And then you can drill downon, hey, here's some steps.</p>
<p>You could deploy this as a process today.</p>
<p>No, I just did. Right.</p>
<p>So this diagram,this is a deployed process.</p>
<p>Okay. So sweet.</p>
<p>There's a lot of manual stepsin this process.</p>
<p>No big deal. Yeah.</p>
<p>And that's why you actually.</p>
<p>Now I can choose which ones to automate.</p>
<p>I see what you're saying. Right.</p>
<p>And I can actually, like,do this really fast.</p>
<p>Like, let's say, for the sake of argument,</p>
<p>I want to puta decision on this interviewstaff and go, hey,if the interview didn't go well,maybe we push back to h.r.</p>
<p>And we say, you know,we push it back to the candidatewho said we have questions for you right?</p>
<p>So i can actually comein, i can evolve this, i can say, hey,you know, this is going to bemy default path here.</p>
<p>This is going to be,you know, an expression.</p>
<p>And that would be you know, I'veyeah, we've got toto put a lot of work in here,but we could be examining like a checkboxor whatever to indicatewhether we wantto move forward or not. Right.</p>
<p>And then we build this.</p>
<p>We say that we deploy it.</p>
<p>And now the thing that's actually deployedis this newer processwith the you know, with a gateway here.</p>
<p>And if I wanted to, I could go backand look at the previous version.</p>
<p>So I've got two concurrent versionsof the softwareworking and deployed rightnow, right at prototype.</p>
<p>That's bad and good.</p>
<p>And going at the same time. Right.</p>
<p>So you can actually see in here.</p>
<p>Yeah, like the datathat's going through the system.</p>
<p>So all right.</p>
<p>So I like, I like where we're headed hereif we so we've got our three selves.</p>
<p>What's the next step after</p>
<p>I've integrated.</p>
<p>Right. Because you show me some of that,some of the stuffbefore I can actually run.</p>
<p>You guys have a tool lintfor business process you.</p>
<p>So my thing is without being too braggyof our own stuff, we've actually built,you know, a couple of applicationsthat make this a, a more,a moreeasy thing to do.</p>
<p>So what I was showingwas the native okay on the modeler, butwe've built our own systemwhere you can kind of go on.</p>
<p>To help streamline.</p>
<p>Is it is it targeted primarily for isit targetedprimarily for business analyst?</p>
<p>It is men.</p>
<p>That are doing captureor is it for the developerthat's writing rest interfacesand things like that?</p>
<p>Who what?</p>
<p>So it's ait has support, different roles, right?</p>
<p>So initially you would have a businessanalyst or an SMB come in and sort ofdefine out, well, you know, here'sthe data model that we're working with.</p>
<p>Here is the workflow that we haveand the different rules that are involved.</p>
<p>You can actually have them come inas in this caseand go, Well, here'sa restful API that we're going to call.</p>
<p>Let'ssay this gets a list of all the customers.</p>
<p>And then,you know, we're going to have like a formand the form is going to say,display the customeror display all the different users andand we have like a one way, okay.</p>
<p>So you actually can take itto the next level, what I would callthe next level below testthat model where nowyou're actually creating the application.</p>
<p>Yeah, that's right.</p>
<p>On top of that model.</p>
<p>On top of that business processso that I can watch it go through,</p>
<p>I can drive it through, I can askusers for information, all that.</p>
<p>Yeah.</p>
<p>So for example, I could create a tableand I can say this tablewhen it loads, you know, it'sgoing to make a restful calland the restful callis going to be to say,</p>
<p>I don't know, loadall the customer is right.</p>
<p>So right.</p>
<p>So I want to kindof tease out a little bit onthis.</p>
<p>This is different than RPA. Yeah. Yeah.</p>
<p>Because RPA is I'm capturingwhat a user does with keystrokes, right.</p>
<p>It's doing that.</p>
<p>You guys are saying</p>
<p>I have a business analyst that comes in,really looks at the process and the steps.</p>
<p>Right.</p>
<p>Across multiple depart in in.</p>
<p>My opinion and.</p>
<p>Then. RPA.</p>
<p>Yeah. Would be a step in here. Right.</p>
<p>So you might have like.</p>
<p>Yeah I can see.</p>
<p>How we you know,when we review an applicationand the first thing we do iswe look at the boxesthat come in from criminal backgroundcheck and job history check.</p>
<p>And if that's true, then, you know,we pass it on to a senior h.r.</p>
<p>Person, otherwise we reject it, right?</p>
<p>So at that point, I might plug inlike an RPA step and here I go.</p>
<p>This is just going to invoke RPA, right?</p>
<p>Gotcha.</p>
<p>Okay, so that's that's the mainthat's the main difference.</p>
<p>You're looking top down the whole process.</p>
<p>Yeah, that's exactly right.</p>
<p>Across departments and an RPA isreally how a individualmight be doing a stepin that process or even a couple stepsin that process, whatever the case.</p>
<p>Absolutely right.</p>
<p>You know, RPA,you can get a really fast winlike, you know, creating a trueintegration that talks to the back end andand you put the security certificatesin place and all the right environmentsthat can take months.</p>
<p>Right.</p>
<p>Just from the bureaucratic architecture.</p>
<p>But you put an RPA bot in therethat just opens the email,it takes the two fields out and puts theminto the system and pushes the buttonand you just immediatelysolve the problem.</p>
<p>And in a couple of days ora couple of weeks, that might have takena really long timeto do in a quote unquote correct way.</p>
<p>And you always have the latitudeto come in and change thisand make it a trueintegration down the road.</p>
<p>Right.</p>
<p>And I like that approachbecause there's there's always a pointwhen you're designing a system like thiswhere you have to make a decision onhow howwhat is my return on the investment</p>
<p>I'm going to spend right nowby automating somethingand this I love thisbecause this gives you that opportunityto say, well,</p>
<p>I'm going to automate this step.</p>
<p>And that'show everything else is going to be manual.</p>
<p>But this one step I'm going to automateor the set of steps I'm going to automateand I'm good. I'm in good shape.</p>
<p>So I really like this iterativeapproach that we've been doing in softwaredevelopment for some time.</p>
<p>And it sounds likeyou're doing a great job at bringingthe things that we learned in softwaredevelopment over the last 30 yearsinto business processmanagement and business process.</p>
<p>So, you know, I think I saw a little bitabout some of the thingsthat you had built there, and I think youhad sort of done the same sort of thing.</p>
<p>Like you have a systemwhere you can visualizehow things interactand actually drive that.</p>
<p>And I think that's just what happenswhen you take smart peoplethat have to solve big problems.</p>
<p>We recognize the value of clarity.</p>
<p>Yeah, I like what you said there.</p>
<p>The visualization is key,right?</p>
<p>Because that's how you're communicating.</p>
<p>What's going on knowso and that gives you clarity.</p>
<p>I really like how you brought that out.</p>
<p>So that visualization really helpsother people understand what's going.</p>
<p>Yeah, we,you know, going back to like the,the martial arts metaphor and some ways</p>
<p>I think of the injection of RPAas sort of fighting dirty like,you know, you've got to do an integration.</p>
<p>Oh, all all my RPA buddies out there,forgive me.</p>
<p>Oh, I love it because I.</p>
<p>Know it. Is.</p>
<p>Yeah, it does work like that.</p>
<p>You get quick wins. Absolutely.</p>
<p>And I think that that'sthe highest compliment.</p>
<p>It's pragmatic.</p>
<p>You can solve a problem today, say thatif you took another path, you wouldn'tbe done talking about for two months.</p>
<p>I love that.</p>
<p>It iswithout putting too fine a point onit is a game changer,but it is, in my opinion, a tactical.</p>
<p>But it's a short term gain.</p>
<p>But it's enough, right?</p>
<p>You you could in a corporationthe size of intelor some of the ones that you knowthat we work withshort term gain by three months,millions of dollars.</p>
<p>But but you don't you don't want to restyour laurels on that short term gain.</p>
<p>Right. That's the problem. Right.</p>
<p>Right.</p>
<p>You need to see how that little processfits into this bigger process.</p>
<p>And you need to look at your full businessprocessesto to find optimizations,to find steps that I can get rid of.</p>
<p>I mean, we've had thisthere's this old story.</p>
<p>It's a funny story where this ladyis teaching her daughterhow to cook a Thanksgiving roast.</p>
<p>And she goes and she cuts theroast in half andand puts it in in the pan and cooks it.</p>
<p>And her daughter says, well,why do you cut the roast in half?</p>
<p>And she goes, Well, because my momtaught me to cut the roast in half.</p>
<p>So they asked Grandma, right, hey, why?</p>
<p>Why are you cutting roast?</p>
<p>You know, why did you do that?</p>
<p>And says,because the pan I used wasn't big enough.</p>
<p>But this processof cutting the roastpassed down from generation to generation.</p>
<p>We have stuff like that in our companiesall over the place.</p>
<p>Why are you doing it that way?</p>
<p>Well,because it's always been done that waywithout anyone sittingand really analyzing why?</p>
<p>What is the purpose of doing it?</p>
<p>So we end up with process bloatall over the place.</p>
<p>Yeah, yeah.</p>
<p>And and bureaucracies that fit in.</p>
<p>And I think that'swhere our training as engineers comes inbecause we have to be clear eyedand look at why are we doing it this way.</p>
<p>What is the benefits doesn't have onethat I'm that's a variablethat I failed to capture in this equationright andand testing simulationrunning things again and againlike one of the things that I loveto do as,as a stress relieving mechanism is once</p>
<p>I deploy a process,</p>
<p>I will pull it upand I'll start moving activities around.</p>
<p>I'll do this this thing before that thing,and I'll see if I can doparallel processing.</p>
<p>I'm, I'm playing with it.</p>
<p>I'm empirically testing itand that adds a value to it.</p>
<p>That does add a lot of value. Absolutely.</p>
<p>And it's somethingthat we need to be able to do more of.</p>
<p>And that is I don't know whatyou would call that permutationsjust test the model by pulling it aparta little bit or the processby rearranging things.</p>
<p>I call it experimentation again.</p>
<p>I like.</p>
<p>There you go.</p>
<p>That's the word</p>
<p>I was looking for experimentation.</p>
<p>We did something like this.</p>
<p>I was on a big projectat a former company, Cadence</p>
<p>Design Systems, where we were doinga running test of our softwareevery night and our software runswould take 24 hoursto test our software and we had to run it.</p>
<p>This is back in the good old dayswhere you had to run on HP X</p>
<p>Air x Solaris, all the flavors of Linux.</p>
<p>So we had these massive, massive gridsof compute, all compute resourcesthat we ran these tests onand we would run them one test on CPU,we would run front ways and the other oneon air X would run backwards.</p>
<p>So halfway through the nightwe would know like 12 hoursand we would know how the testgenerally did of crazy that we did that.</p>
<p>So we started looking at optimizing,how could we make this faster?</p>
<p>And we took the same approach.</p>
<p>What if I pulled things aparta little bit,move things around, group tests together?</p>
<p>If they failed, they failed earlyand I didn't run more tests.</p>
<p>We were able to get that cycletalent to about four or five.</p>
<p>So all of a sudden Icould run tests in the middle of the day,</p>
<p>I could run them at night, I could run.</p>
<p>So this whole idea of experimentationand the only reason we were able to dothat is because we could visualizeand we could see the stepsand how they interrelated.</p>
<p>And I love how this all fits together,right?</p>
<p>Yeah.</p>
<p>And and this should really empowerbusiness analyst and process engineershow to really do this rightinstead of I'm just going to copyexactly what we've always donein the same order we've always done that.</p>
<p>That's not the real benefitfrom absolutely right.</p>
<p>Absolutely right.</p>
<p>You literally couldn't have said thatany better.</p>
<p>I think that thethe thing that I really like about thisapproach is what and I'm not sayingit's the best approach in the world.</p>
<p>I know that there are softwareengineers just as goodor better than mewho take a completely different approach.</p>
<p>And I am sure they're.</p>
<p>Very they're just not as enlightenedas we are.</p>
<p>But I'm sure there are validcounterarguments.</p>
<p>But what I really like about thisis that it feeds the business.</p>
<p>And here's what I mean by that.</p>
<p>There is fidelity between the diagramand the actual execution.</p>
<p>A lot of timesin the business that you and I are,and we'll draw the diagramsand that will be the starting point.</p>
<p>But and then from there.</p>
<p>On, right, people,the developers make a compromise,they do something or anotherand it doesn't reflect back.</p>
<p>So what the business thinks is happeningand what it is really doing.</p>
<p>And what's.</p>
<p>Happened, they've separatedwhere with this the picture is the codeis always an accurate representationof what you're really doing.</p>
<p>And the business can come and look at youand go, No, dummy, you're doing it wrong.</p>
<p>Do step two before you dostep one, it'll save you a lot of trouble.</p>
<p>You know, we we hadwe had a system where we werechecking to seewhat country somebody was in.</p>
<p>And then based on that, we were givingyou were looking at what rewardsthey were entitled toand then giving them discounts.</p>
<p>We know we did this for a long time.</p>
<p>We model thatbecause the way I was showing youas a has a rule engine embedded into it.</p>
<p>And then one daywe showed it to the businessand they're like, Well, that's stupid.is in the United States.</p>
<p>Why don't you check for that first?</p>
<p>Why is it down at the bottomafter all these other kind of bottom?</p>
<p>Yeah.</p>
<p>Right.</p>
<p>Drastic improvementsbecause.</p>
<p>It's so I love</p>
<p>I love that the model it's not a diagram.</p>
<p>Right. That's what we want to get across.</p>
<p>It's a model and it drivesthe simulation,it drives the application itself.</p>
<p>It representsso I love how that's all tied together.</p>
<p>Max, this has been wonderful.</p>
<p>Yeah, Wichita. Wichita, 4 hours.</p>
<p>I already know.</p>
<p>That's about eight.</p>
<p>Our listeners will get tired.</p>
<p>So Max,thank you so much for coming on the show.</p>
<p>We most certainly will set itsome time again.</p>
<p>I really enjoyed this timeand thanks for having me on.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.orguntil next time, go outand do something wonderful.</p>

</details>
