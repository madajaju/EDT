---
layout: posts
title: "GenAI Advisor for Datacenter Management"
number: 155
permalink: episode-EDT155
has_children: false
parent: Episodes
nav_order: 155
tags:
    - ai
    - sdi
    - vergeio
    - cloud
    - privatecloud
    - hybridcloud

date: Wed Aug 30 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Greg Campbell
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "In this episode host Darren Pulsipher sits down with Greg Campbell, CTO of Verge.io, to discuss the exciting intersection of AI and infrastructure management. Greg, a software developer and entrepreneur, shares his journey of creating Verge.io to address the complexities of infrastructure stitching and management."
description: "In this episode host Darren Pulsipher sits down with Greg Campbell, CTO of Verge.io, to discuss the exciting intersection of AI and infrastructure management. Greg, a software developer and entrepreneur, shares his journey of creating Verge.io to address the complexities of infrastructure stitching and management."
---

<div>
<h3>Listen Here</h3>
{% include transistor.html id="4a6dc3d3" title="#155 GenAI Advisor for Datacenter Management" %}

{% include youtube.html id="wYe3SsCRpkY" %}
</div>

---


In the "Embracing Digital Transformation" podcast episode, Chief Solution Architect Darren Pulsipher interviews Greg Campbell, the CTO of Verge.io. The conversation revolves around innovative solutions in infrastructure management and the potential of augmented intelligence. Greg shares his background as a software developer and entrepreneur, discussing the challenges he aimed to address with Verge.io, a company focused on simplifying infrastructure management in distributed servers.

## Simplifying Complex Infrastructure Management

Managing infrastructure in today's digital landscape poses significant challenges. The complexity arises from various components, vendors, licenses, and versioning. This necessitates skilled staff and often results in high costs and a shortage of expertise. While the cloud was initially seen as a solution, it introduced its own complexities.

Verge.io offers a solution through its operating system, VergeOS. This system allows developers to easily manage and connect storage, compute, and networking resources across different hardware configurations. By providing a virtual data center, VergeOS simplifies infrastructure management, making it more intuitive and user-friendly.

## The Potential of Generative AI in Infrastructure Management

Greg also discusses his interest in artificial intelligence (AI) and its potential applications. He shares his experiences with generative AI and its use in infrastructure management. Greg explores how the automation of infrastructure and data center management through generative AI can simplify complex processes and streamline resource management.

Generative AI can automate infrastructure management, eliminating the need for specialized experts and improving efficiency. It has the potential to revolutionize user interface design and adaptive interfaces, making the infrastructure management process more intuitive and user-friendly.

## Augmented Intelligence as a Valuable Assistant

Augmented intelligence is the combination of human and machine intelligence. Augmented intelligence enhances human capabilities and decision-making by providing insights and answers to complex problems. It is intended to assist, rather than replace, human judgment in making informed decisions.

Greg emphasizes that as AI models become larger and more sophisticated, their accuracy and predictive abilities improve. Augmented intelligence can be applied in various industries, such as customer support, where AI models can provide responses to customer queries and aid human agents in finding solutions. It can also assist in managing remote sites or offices, providing guidance to on-site personnel who may lack expertise in certain areas.

## The Future of Digital Transformation

The podcast concludes with a discussion on the future of augmented intelligence and the potential impact on industries and the workforce. Greg's optimism lies in the ability of augmented intelligence to improve efficiency and productivity, but with a recognition that it should not replace human judgment entirely. The conversation highlights the importance of careful implementation, ongoing human oversight, and ethical considerations when leveraging augmented intelligence.

Overall, this podcast episode offers valuable insights into innovative infrastructure management solutions, the potential of generative AI in streamlining processes, and the benefits of augmented intelligence as a valuable assistant. It demonstrates the power of embracing digital transformation and leveraging technology to drive efficiency and success in organizations.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople process and technology.</p>
<p>On today's episode,</p>
<p>GenAI advisor for Data Center Managementwith special guest Greg Campbell,</p>
<p>CTO of Verge.io.</p>
<p>Greg, welcome to the show. It's me there.</p>
<p>Hey, this is your second time on.</p>
<p>Yes, yes.</p>
<p>It's been it'sbeen like a year and a half almost.</p>
<p>Yeah, probably.</p>
<p>Yeah. So exciting.</p>
<p>So it's.</p>
<p>I don't want you to just pitch your idea.</p>
<p>You talked to me the other day and I went,</p>
<p>Oh, that is cool.</p>
<p>That is super cool.</p>
<p>What you guys are doingwith your virtualized infrastructure.</p>
<p>But real quick, give peoplea little bit of your backgroundand why you started.</p>
<p>Virgilio And then we'll get into thisnew technology.</p>
<p>On leveraging Gen AI in infrastructuremanagement I think is pretty sure.</p>
<p>Yeah. Yeah.</p>
<p>So a software developer and entrepreneur,my whole lifestarted in a Commodore 64 daysand you know, just never stopped coding,never, you know, ran companies.</p>
<p>But even as running the company,</p>
<p>I'm always in the code, soalways deep, deep and.</p>
<p>Dear to my dear, to my heart.</p>
<p>Great to my heart. Yes.</p>
<p>And so you had a couple small exitsand it was actually startinganother company building search enginesand some prettywhat I thoughtwas complicated stuff at the time.</p>
<p>And you know, thisthis was like 0708 timeframe and,you know, I had realized that,you know, trying to stitch togetherlots of resources, lots of serversto, you know, to build the search engine.</p>
<p>I needed billions of results and,you know, millions of queriesand many millions of results.</p>
<p>And, you know, there's no single serverthat can do that. Right?</p>
<p>And I kind of saw thatthere was there wassomething missing and in the end, got itcoded, made it work.</p>
<p>But I found that a good 80% of my timehad nothing to do with the search engine.</p>
<p>It was stitching togetherinfrastructure, taking these servers,making them played nicely together,distributing storage and communicationsand security and compute.</p>
<p>And and I realizedthere is something missing in my toolboxto make that happen right away.</p>
<p>And kind of in my my thought at the timewas kind of like with thewith the personal operating system,with the hardware abstraction layer.</p>
<p>Did to a server by allowing developersto not have to worryabout hardware in code generically,we needed something like thatfor last year.</p>
<p>For distributed servers. Got Yes and sostarteda company at the time I called it</p>
<p>Yahoo Biteand the idea was to stitch togetherthese things.</p>
<p>A new storage was going to be thethe more difficult problem to solve.</p>
<p>So started with with storagewith the out of itand trying to stitch togetherand present storagein a very common way,whether it's a single laptopand a coding office or a thousand serversmake it work no matter what, right?</p>
<p>No matter what the hardware iswith the eventual ideaof then in building in computeand networking to ultimately get to theto the concept of virtual data center,which is what we did.</p>
<p>And and now it is presented out thereunder fragile innerverge operating system.</p>
<p>So it's really cool technology.</p>
<p>There is an episode on that.</p>
<p>If you guys go back and lookon ourpodcast,you can hear the whole story of Virgil,and we even did a demonstrationon the podcast of Connecting to Clusters.</p>
<p>But the new stuff that you were taughtthat you've been playing around withbecause you are like me,you are a tinkerer.</p>
<p>Oh, yes.</p>
<p>Right.</p>
<p>And you probably you probably think of</p>
<p>I can't wait to relax and coatsomething up. Yes,</p>
<p>That's your that's your right.</p>
<p>Yeah.</p>
<p>When I finally retireand then I could just code more stuff.</p>
<p>Yeah, yeah, yeah, yeah.</p>
<p>I feel the same way.</p>
<p>My wife,</p>
<p>I mentioned this on the show before.</p>
<p>I think my wife loves to read bookswhen we go on vacation, on aon a beach or by the pool,</p>
<p>I have my laptop.</p>
<p>And when am I doinggenetic algorithms or now it'sgoing to be generative.</p>
<p>AI So you, you cracked openllama too, right?</p>
<p>Yeah.</p>
<p>You know, I've always,you know, my, my hobby outside of,you know, work and coding everything I donormally has always been X have been A.I.and so I've always had had an ear and I,and I've written my own neural networks.</p>
<p>And years ago I built a wholevideo compression systemthat was basically a neural network.</p>
<p>And instead of, you know, the standardcompression algorithms it was using,like it was like predicting, you know,pixel sequences and like, oh, that's cool.</p>
<p>Basically is a neural network.</p>
<p>And, you know, it's really,really freaky, too.</p>
<p>And I finally got towork and it was like watchinglike, like</p>
<p>I would imagine watching somebody's dream.</p>
<p>That's what it was like.</p>
<p>Yeah. So it is like,</p>
<p>Oh, that's pretty cool.</p>
<p>But, you know,so I've always been tinkeringand kind of watching and, and honestly,you know,my retirement would have been workingon, you know, AGI and somethingwhere I don't necessarily have to worryabout making a profit immediatelybecause it's high risk,you know, very long term kind of stuff.</p>
<p>But but yeah, I mean, obviously anybodywith any interest in AI at all is a, youknow, all hands on deck watching what'swhat's unfolding in the world right now.</p>
<p>The past, you know, just really a yearand a half, two years, right?</p>
<p>Yeah, not even that.</p>
<p>Oh, not even a year.</p>
<p>Yeah, exactly.</p>
<p>So, you know, so obviously I've beenplaying around and yeah, with the new</p>
<p>Lomita announcement a few weeks ago,</p>
<p>I mean, that really opened up a lotfor the Tinkerers now to be ableto play around with this stuff.</p>
<p>So, yeah,</p>
<p>I've been, I've been playing and got somecool resultsso far and some really good ideasto kind of extend our vision ofof automating infrastructure, automatingthe data center and just, you know,bringing it down to a level that,you know, we don't need all the complexityand expertsand everything that goes along with it.</p>
<p>So so one thing we've been talkingon the podcastrecently about isis use cases of generative AI.</p>
<p>And you found a really interestinguse casespecifically aroundinfrastructure management,which I thinkis actually pretty brilliant.</p>
<p>And to me it's an example of a huge shiftin user interface designand in adaptive user interfaces,which to me is really exciting becauseit simplifies things so much, right?</p>
<p>So I just</p>
<p>I just pitched you a big, fat, juicypitch right down the middle.</p>
<p>So take us home with this.</p>
<p>Yeah.</p>
<p>So I'll talk a little bitabout some of the,you know, the because meyou know, my role in the company.</p>
<p>I'm, you know, I'm the founder and CTO, soyeah, yes,</p>
<p>I have the day job of coding the product.</p>
<p>But most of the guy that gets to lookto the future, play it, you know, dothe research and development and tinkerand though the prototype.</p>
<p>So I get the fun stuff too, right?</p>
<p>Right. Yeah.</p>
<p>So yeah, there's like fouror five kind of things that I seekind of emerging out of this.</p>
<p>And first and foremost, it justwhich is the heart and soul of our productis its simplicity, right?</p>
<p>Like, you know,so much of what we have an infrastructure,there's a lot of complexitythat just arose from how we got here.</p>
<p>You know, we have all these differentcomponents and storage, networkingand compute and backup and, you know,security and user manage all these things.</p>
<p>And then they all haveto talk to each otherand there's multiple vendorsand multiple licensesand multiple versioning,and it just all gets really complicated.</p>
<p>So then you have to have a lot of,you know, very,you know, educated and trained and skilledstaff that, you know, all of theseindividual silos and somebody to pull itall together and coordinate everything.</p>
<p>And it's very expensive.</p>
<p>And, you know,there's just not enough people out therethat even understand this stuff.</p>
<p>Right.</p>
<p>Which is why the cloud has takenover so much,because it's like, I'll just outsource it.</p>
<p>Well, yeah,</p>
<p>That wasn't that the promise of the cloud?</p>
<p>The promise was to simplify things, right?</p>
<p>Absolutely.</p>
<p>You know, but the tradeoff is younow, instead of buying a house, you'rerenting one, right.</p>
<p>And living in a hotel, basically.</p>
<p>To me, thecomplexity being shiftedand actually increased.</p>
<p>And in many ways it has. Yes, absolutely.</p>
<p>So so the thought was, okay,you know, we've got yeah,we've got these these cool modelsnow that have basically been trained on,you know, almost all of human knowledge,in particular whatever's on the Internet.</p>
<p>And, you know,it goes without saying that pretty muchanythingcomputer related is on the Internet.</p>
<p>You know, that's that's the one knowledgeset that we're we're pretty much covered.</p>
<p>Yeah.</p>
<p>As far as what's going to be scraped.</p>
<p>Right.</p>
<p>So it's very easyto start to get something togetherthat already has a pretty good i.tgeneralist starting point, you know.</p>
<p>And so the thought was, you know, okay,there's a few ways to go about thiswhich you know, we're playing with,but you know, we take something like that,train itas well on and you know our productspecific cli it,you know infrastructure management,hardware you know all this, all the stuffthat we've learned over the past decadeplus in doing what we're doing.</p>
<p>And you know what?</p>
<p>If that was available to you at all times,you know thatnot only from an answermy generic questions, you know,as I ask it,you know, about the product and about,you know, just it in general.</p>
<p>But it also has the context of yours.</p>
<p>It's not just a generic thing.</p>
<p>It's somethingthat's been trained generically, butalso has this extra context of what doesmy environment look like right now?</p>
<p>You know, what's the makeup?</p>
<p>How many servers do I have?</p>
<p>What what vendors am I use.</p>
<p>What applications my running.</p>
<p>What applications inmy what are the current CPUand memory stats?</p>
<p>You know, every single serverand you have all that context inwith whatever you're calling it.</p>
<p>So I could ask it very generic things likewhy is things where things are goingslow right nowyou know, And it's it knows I'mtalking about my infrastructure,knows who I amand knows all the stats and informationand has all the history of whatall the things that can make things be soand I can come back and say, well,for starters, maybe we should take a lookat Node number five, which seems to berunning at all, causea 100% CPU and blah blah blah,which you know, is is very cool, you know,especially at at the ready all the timeno matter where you are.</p>
<p>And yeah, we of course we've got supportand support staff and everything, butyou know, having access to that level,three levels of supportright there and with all the knowledgeof all your current stuff,even even our support staff'sgoing to have to.</p>
<p>Okay, let's look things upand see what things look like right nowin your environment. And right.</p>
<p>So there's some really cool stuffthat can happen,especially as we trained inand all we have about, you know, since.</p>
<p>And so let's talk let's talka little bit about the training.</p>
<p>So this is this is very differentthan what you see with like Chad, GPTor Bard or Cloud, which isyou took a generalized modellimitedwho has a lot of general knowledge.</p>
<p>Yeah.</p>
<p>Then you you almost clipped its wingsa little bit and said,you know, I don't want you to knowall the general knowledge.</p>
<p>I want you to focus on i.t managementknowledge.</p>
<p>Right kind of subject.</p>
<p>So trying to constrain it and.</p>
<p>Constrainit a. Little bit to talk about this. Yeah.</p>
<p>And so like part of whatwe've been experimenting withis kind of findingthe right balance between,you know, training the system,you know, and versus context.</p>
<p>There's, there's kind of this trap.</p>
<p>I gotcha, gotcha, free.</p>
<p>Trained and built infrom a very generic perspective versustake your generic model.</p>
<p>And now let's let'swell allow you to role play existing.</p>
<p>You're really good at role playing, butoh yeah, let's set your personaand get you a locked in your zoneand you are a consultant to working withhowever you want to frame it.</p>
<p>But you can, you can kind ofjust in context,even allow out to hone in and learn a lot.</p>
<p>So we're we would say along with the,you know, transcend that balance there.</p>
<p>And then you also you also give it livefeeds of real, real time data as well.</p>
<p>Absolutely. Yeah. And we've beenplaying around with like eventhere's a little bit of like a,you know, multiple aspects.</p>
<p>There might be some reiterate of stuffwhere, you know, one modelis asking another model to take thisand reduce it into somethingthat might be actionable,and then the other one's trainedmore and offering us that.</p>
<p>So, you know, there's even some.</p>
<p>So so I really like this approachbecause a lot of people,when they think of large languagemodels, it's one model to rule them.</p>
<p>All right.</p>
<p>And what and what I have foundand you're you're kind of reiteratingit is it's the combination of modelsthat have been trained todo different thingsthat get you the result that you want.</p>
<p>Yeah, it's you.</p>
<p>Absolutely.</p>
<p>I mean, obviously,the generic ones are powerful.</p>
<p>And, you know,if we had enough hardware and everything,you could run a massive model that,you know, knows everything.</p>
<p>But it also sometimes other knowledgecan can get in the way and can confuse itand you know Yeah.</p>
<p>And well and that comes upwith the concept of hallucinations, right?</p>
<p>Yes. Yes. Right.</p>
<p>And that's the biggest problemwe run into right now is, you know, howhow big and how advancesneed to be to get the right data sets,because as soon as you try toover optimize or shrink downtoo much, then it's just,you know, starts to make sense.</p>
<p>Or if you or if you tell itto give you more creativity.</p>
<p>Right.</p>
<p>It's going to get very creative,which is when you're managinginfrastructure, you don't want creativity.</p>
<p>Know this isthis is yeah, we we're all about the factwe're a great bunch of geeks, right?</p>
<p>You know, we'revery, very specific and be very technical.</p>
<p>So. All right, so this is pretty cool.</p>
<p>So let's talk aboutlet's talk about some of the scenariosthat you thinkthis could really help out with.</p>
<p>Yeah, because you mentioned can playyou can simplify things quite a bit.</p>
<p>So what does that mean to my staff?</p>
<p>What does that mean to it?</p>
<p>Well, yeah, you know where you knowwhere I'm going with this.</p>
<p>Yeah.</p>
<p>So there's there's a few cases and I thinkso we see it a lotwith even with our customer base that,you know, it's, it's hard to get goodpeople that are technical enoughat this low level.</p>
<p>Right.</p>
<p>And you know, even if you have a coupleof people, they're not always available.</p>
<p>They're busy, they're overwhelmed.</p>
<p>You know, they're expensive.</p>
<p>You know, So,</p>
<p>I mean, we get a lot of just,you know, even with our support,you know, more often than not, it ends upbeing nothing to do with our product.</p>
<p>You know, we're we're helping themdiagnose hardware issues and guest levelthings and,you know, infrastructure and I.T.in general.</p>
<p>It's it's you know, it's tough, right?</p>
<p>There's so many pieces.</p>
<p>So many. Variables.</p>
<p>Exactly.</p>
<p>And, you know, soso a big piece is to have thatthat available to everybody elsebuilt into the product that you've gotthis this, you know, consultant availableat all times that you can ask an inquiryand but then once you start doingsome other things with it,you know it's it's the first step is it'syou have to initiate right.</p>
<p>You're asking it a question. It'sjust there to help.</p>
<p>It's just there to consult.</p>
<p>But you could start to go a step furtherfrom there, a couple of stepsfurther know.</p>
<p>So so one thing we're looking atis things like, okay,what if I'm not initiating it?</p>
<p>What if the system is sending, you know,periodic snapshots and,you know, here's my current state.</p>
<p>Hey, do you see anything wrong?</p>
<p>No. Great.</p>
<p>Do you see anything wrong?</p>
<p>And it's just continually showing me out.</p>
<p>Yeah.</p>
<p>So let's say that it's asking every every,</p>
<p>I don't know, minuteor every hour, whatever the interval,and itfinds something and it sends me an emailor pages me,you know, whatever the case may bein the old systems we used to page people.</p>
<p>Yes. For you for use in Gen</p>
<p>Z and millennials.</p>
<p>You don't know what a pager is, right?</p>
<p>Old sysadmins.</p>
<p>We walked around with a pagerall the time.</p>
<p>Right?</p>
<p>Yeah, exactly. So.</p>
<p>But I'm notifiedif something goes wrong, can it?</p>
<p>The way that you envision it can mydigital virtual sysadmin,can they learn from the interactionwith me as well?</p>
<p>Meaningthose things aren't that big of a deal.</p>
<p>Right.</p>
<p>Right.</p>
<p>Well, you know,the first phase of it is going to beto learn from from us and from our.</p>
<p>Right all.</p>
<p>The data that we haveand to learn what types of.</p>
<p>What things are, alertsand what aren't. Yeah.</p>
<p>And even beyond that,you know, a next step is, you know, okay,one of the models determinesthat there's an issueand then it sends that resultto a different A.I.model with the question of youjust received this alert,what would your next action be?</p>
<p>Right.</p>
<p>Interesting.</p>
<p>And so then, you know, and maybeat that level it's it's that's the email.</p>
<p>Hey, we saw thisand here's what we suggest.</p>
<p>Well,then you go a step further from there.</p>
<p>And now let's say, you know,we train a model on how to speak APIbecause it's just a language.</p>
<p>Right? Yeah. Yeah.</p>
<p>And so maybe I didn't go so far as to say,okay, if you're this confidentor confident, you know, it's it's here'sthe action I'm determined I should take.</p>
<p>I'm going to emaileverybody, just let everyone know inunless you tell me not to.</p>
<p>Jane, unless you're saying,all right now created,you now created a semi sentientbut not sentient, butbut reallynow you've got a collaboration of A.I.modelsthat are actually doing stuff that are.</p>
<p>Yeah, right.</p>
<p>Not just notifying Darren or Greg.</p>
<p>You're actually I'm goingto reboot that machine.</p>
<p>I'm going to take that down. Right.</p>
<p>And once they have that AI access,</p>
<p>I mean, you know, that's that's a muchfurther down the line where you actuallyallow it to take action.</p>
<p>But even before that, you know, I fullysee user interfaces shifting and changing.</p>
<p>Right?</p>
<p>And you know, we have these complicateduser interfacesbecause, you know, for the most part.</p>
<p>They're written by they're written by us.</p>
<p>That's well. One thingand the other is they don't speak English.</p>
<p>No, that's that's exactly right. Right.</p>
<p>And other than maybe having somesome pretty dashboardsand visualization tools to help,you know, give me information,you know, the whole point and clickand do what I got to do.</p>
<p>You know, maybe there's maybe a chatinterface is better.</p>
<p>You know, in some cases, maybe maybe it'sjust quicker and easier to, you know, formy phone just, you know, hey,can you reboot server for for me.</p>
<p>Or hey, can you canyou apply this patch to all the machinesand neededand reboot them at 2:00 this morning.</p>
<p>And if it doesn't work, just roll it back.</p>
<p>Yeah.</p>
<p>If it doesn't work, roll backand make sure nothing is runningon those machines when you do it.</p>
<p>Right? Right, exactly.</p>
<p>Yeah.</p>
<p>Do you know how longit would take to code up?</p>
<p>And I just mentioned itin three weeks. Right.</p>
<p>And that's the thing.</p>
<p>And that's really what what thesea lot of these languagemodels are doing for usis that it's taking a lot of the stuffthat would have taken programingand we've shiftedwhat programing looks like.</p>
<p>You know, even a lot of the stuff</p>
<p>I'm doing now, you play with this, it'slike, yeah, there's some code involved,but a lot of it is.</p>
<p>It's English.</p>
<p>Like Englishis the programing language was.</p>
<p>Isn't that always when I went to when</p>
<p>I went to college and got my C degree,that was the thing.</p>
<p>Higher level languages,we always talked about it.</p>
<p>Yeah.</p>
<p>You know, and they always taught usassembly first, machine language first.</p>
<p>Right.</p>
<p>So we would appreciate the higherlevel languages like C and C++and then Fortran and Pascal and Lispand those things.</p>
<p>Now I, I truly believe we could startseeing some new languages based on chat.</p>
<p>Yeah, for sure.</p>
<p>Or at the very least, I could see,you know,a degree as a as an English majorbecoming a lot more valuable.</p>
<p>Yeah. Yeah. Well, yeah.</p>
<p>Or even shifting, you know, you know,just in learning the proper way oflearning things and giving proper contextand everything that goes along with,you know,how you interact with these models.</p>
<p>You know, it's.</p>
<p>So, so my, my big questionon kind of an ethical question is,are do you see these types ofcombinations of models and A's replacingthe number of people</p>
<p>I need to manage a data center?</p>
<p>Because what's the ratio today?</p>
<p>Is it like 300 servers per?</p>
<p>I used to know these numbers and I don't.</p>
<p>Yeah, and it changes all the time.</p>
<p>It changes all the time.</p>
<p>But, you know, I just I seeright now that it's it's such a struggleunless you're one of the big guys,you know, it's it's really hard to get</p>
<p>I, I don't think I've evertalked to a customer running a data centeror running, you know, whatevertheir businesses that said, I just</p>
<p>I got too much talent.</p>
<p>I've never heard anybody say that.</p>
<p>Right.</p>
<p>So I don't I don't see it necessarilyreplacing the head count.</p>
<p>I see it supplementing and fillingin the gaps that you you couldn't affordor at least you couldn'thave even attained this level.</p>
<p>Well, yeah,because there's there's so much.</p>
<p>Interest to be profitable, right? Yeah.</p>
<p>I mean, you're a generalistlike I am, right?</p>
<p>Because, you know, systems, you know,operating systems, you know, programing,both front end to back end.</p>
<p>There aren'ta lot of guys like us out there.</p>
<p>Right?</p>
<p>Right.</p>
<p>And and our knowledge is very broad.</p>
<p>If you gave me a coding test on the bestway to use different data structuresand like pointer arithmetic type stuffand seen C++, I would fail.</p>
<p>You know. Right.</p>
<p>Right. Beca why?</p>
<p>Because I don't code that way anymore.</p>
<p>Yeah, right.</p>
<p>Right, right.</p>
<p>But I know where I know what to look up.</p>
<p>Well, yeah.</p>
<p>And, and that's, you know, it'shard to even reproduceus. Yeah. Yeah.</p>
<p>Because</p>
<p>I'm talking about in termsof like future generations because I,you know, this isn't this field of every,any field that you can learn of, you knowin college like this,this field has changedso much over the years that the foundationof of my journey to get hereand what you know,what I worked with in the RAM limitsand how we had to code is.</p>
<p>No. Differentthan what people are starting from now.</p>
<p>You know, it's a. Different set of skills.</p>
<p>So, sodo we clone ourselves into these guys?</p>
<p>I mean that a little bit tongue in cheek,but not really.</p>
<p>Yeah, we're already joking about it aroundaround the office now that we've like,you know, we always joked abouthow do we find that the Greg or the pol orwhatever clone button to get more of usand now you knowwe might have a bunch of virtual Greg'sthat you know sales and just.</p>
<p>Understand the complexity of of allall the.</p>
<p>Right and how different would it really be</p>
<p>I mean as it is now</p>
<p>I mean our company we're we'renow completely remote, you know,other than, you know, the daily videoconferences and stuff like that.</p>
<p>Most of our day to dayinteractions are all through chat.</p>
<p>It's somebody.</p>
<p>Hey, Greg,real quick, I've got a customer now.</p>
<p>What do you think of thisor how would you answer this?</p>
<p>I mean,would they know if I know I had a problem?</p>
<p>So how do I know?</p>
<p>I'm really talking to Greg right now.</p>
<p>Right? Yeah.</p>
<p>Well, hey, I mean, if this is prerecorded,you're actually getting off.</p>
<p>Or maybe. Yeah.</p>
<p>You never know.</p>
<p>I just recentlydid something really crazy.</p>
<p>I used 11 labs.</p>
<p>Who does voice synthesis. You know.</p>
<p>I write the I cloned my voiceand now I produce my weekly podcast,the news podcastthat I do weekly check it outis I'm embracing digital this week.</p>
<p>I now produce it in sixdifferent languages with mespeaking the languages with your.</p>
<p>Oh, that's that's awesome.</p>
<p>And luckily I do speak Portuguese,so I did Portuguese first.</p>
<p>Oh, so you could compare, so I can.</p>
<p>Compare it to my, my Portuguese.</p>
<p>I've never spoke spokensuch great Portuguese in my whole life.</p>
<p>Then what's computer generated.</p>
<p>Oh that's and it's pretty impressive.</p>
<p>I was like, wow. Sothat that justgoes that'sjust heading in that direction.</p>
<p>But I think that, I think the benefitof these types of generative APIs,especially in complex systems, isthe human brain cannot containall that information.</p>
<p>Recall it.</p>
<p>All right. Yeah. It's like a generative.</p>
<p>I can. Right?</p>
<p>Yeah, right.</p>
<p>I mean, there isthere is a test that I did,you know, where I'm kind of comparing itto how I might answer an email or,you know, respond to support and,and yeah, there was stuff that I didn'ttrade in on, but because it also startedwith this general knowledge,it was able to add colorand you know, to the responsethat I probably I mean, yeah, I know whatit's talking about, I know it's right.</p>
<p>But like, are youthere wouldn't have thoughtto add much color to itor you know, I'd seen the throesas a couple of things like,oh yeah, you know the right</p>
<p>I didn't didn't think of that.</p>
<p>You know,where, you know,like I was doing some stuffwhere it so had a bunch of sampledata and said, Hey,did you see anything wrong?</p>
<p>But I already trained it on some of ourstats of like, you know, these numbers.</p>
<p>Right, right, right. These thresholds.</p>
<p>And at one particularwe were talking aboutlike swap in virtual memoryand you know,not to exceed certain amountsbut you know, ratherthan just giving the answer I gave ithey you identifiedone users over here is writing a swapand that you know you should take alook at itit went into a whole thing aboutwhat swap is, why this is a problemand how you know how it's going.</p>
<p>Wow. So fresh drives or, you know,your memory is running fastand, you know, and it's like, you know,</p>
<p>I didn't tell it to do that.</p>
<p>But I. Had that general knowledge.</p>
<p>It filled it in. It was correct.</p>
<p>And oh, yeah, it was. So that's great.</p>
<p>So, all right, here'sthe next big question.</p>
<p>Well, we'll finish with this.</p>
<p>You obviously don't completely trust itbecause you're checking it.</p>
<p>Sure. Right.</p>
<p>So is there a level of trustand how do we articulate thatlevel of trust?</p>
<p>Yeah, I mean, that it's a tough onefor sure, you know, And that's why</p>
<p>I think, you know, we absolutelyhave to inch our way into this, you know,the turning it over to thethe full access is is way down.</p>
<p>And it might only be possible. Right?</p>
<p>I mean, you know.</p>
<p>So for you, the trust is</p>
<p>I got to trainwhoever is using the system.</p>
<p>I have to train themenough to know whether the airis giving somethingvaluable back or not. Yes.</p>
<p>And that's also why I kind of</p>
<p>I still refer to it as like a consultant.</p>
<p>Okay.</p>
<p>It's it's still you know, it's it'sgiving you some input.</p>
<p>It's giving you some answers.</p>
<p>But ultimately,you still need to determine if.</p>
<p>It is. You're goingto pull the trigger on it or not. Right.</p>
<p>Yeah. And,you know, at the same time, you know, it'sit's funny because the bar we have forthese things is so incredibly high.</p>
<p>I mean, same thing with self-drivingright? Like we need for.</p>
<p>Yeah, yeah,yeah.</p>
<p>But you compare it to a bunch of humansand it's like.</p>
<p>Well, well, yeah, we're not this kind of</p>
<p>I think it's kind of funny too, right?</p>
<p>We put in some states,we put 14 year olds behind a car.</p>
<p>Right? Yeah, right.</p>
<p>And they say, Well, yeah,but I trained them, right?</p>
<p>And I look at my son, he'sgetting his driver's license right now.</p>
<p>He needs 40 hours of training.</p>
<p>Right.driving with him around town.</p>
<p>And then he can goand try and pass his test.</p>
<p>And and I'm thinking, wow, for ages,our bar has been much higher.</p>
<p>And I think rightfully so.</p>
<p>Yes. Yeah.</p>
<p>You know, it's yeah, it's interestingcause, like, I'm sure if I went throughall my support teamsresponses to customers and stuff,</p>
<p>I mean, I'm sure I could find countlessexamples of where they, you know,they misspoke or said something wrongor they weren't quite right on that.</p>
<p>I'm not going to fire them for their</p>
<p>They're doing great.</p>
<p>They're an excellent employee.</p>
<p>But if something like thisdoes that even once, it's like, oh, no,this isn't going to work.</p>
<p>So it's like, so how do how do wehow do we do that so that we canis that just over time there where maybe,maybe the augmented consultantis sitting next to a real consultantand you're bouncing ideas off of itand you go, That's a good one.</p>
<p>That one's not a good one.</p>
<p>So you still need to stand up to your eyea little bit and teach it.</p>
<p>Yeah,certainly at the beginning and everything.</p>
<p>But at the same time, I will say,you know what, what we're seeing nowwith these modelsand as they're getting larger thereand we don't entirely know why or how, butthey are as we make these things bigger,they are absolutely getting smarterand and the same.</p>
<p>And I see the difference as I comparelike a 13 billion parameter versusa seven versus a what,you know, as you start to go upthose those little mistakesthat it made at the beginning,it's like all this things,this is never going to work, right?</p>
<p>And then you go, it'sa little bigger modeland all of a sudden it's like it aces it.</p>
<p>It's like it not only did itget it correct, but it validatedand explained the whole thing.</p>
<p>And obviously understoodthe logic behind it.</p>
<p>It's not regurgitating stuffthat it already knew.</p>
<p>And it's right.</p>
<p>So it's there's promise there.</p>
<p>You know, it's hard to say.</p>
<p>It's not you know it will never get there.</p>
<p>It it sure seems likeyeah I wouldn't bet against itat this point.</p>
<p>I think it's going to be ableto get to a level where,you know, it's it is at leastthe equivalent of of a you know, a decentmaybe not your top employee,but yeah, it's going to be.</p>
<p>Well and and in in the case of let'ssay that I have a caseand you know we do have a casethat we've been talking aboutbut let's say that I have a casewhere I have a whole bunchof remote sites, remote offices,and I have to manage all that stuff.</p>
<p>And I have someone local on site,but their main job is not managingthat infrastructure.</p>
<p>Their main job is doing somethingelse. Yes.</p>
<p>This would be perfect for that, right?</p>
<p>Because you can have an air sitting thereand the person could go, Well,</p>
<p>I don't know.</p>
<p>I can't know all the intricacies of of it.</p>
<p>Maybe it's a maybe it's a grocery store,for example. Right.</p>
<p>And they've got a data center in thegrocery store monitoring everything.</p>
<p>And the person comes in and just says,what's wrong with the system?</p>
<p>It's running really slow.</p>
<p>Right? Right.</p>
<p>And then imagine the system trained oneven knowing the contextof where you're at, where your level is,to where it could say things,you know, to where now your remote staffis basically just the remote hands.</p>
<p>And this thing could say,can you look behindand see if the green light is flashingor solid?</p>
<p>It's solid. Great.</p>
<p>Now can you look and do this?</p>
<p>You know, they don't have to even knowwhat's going on.</p>
<p>They just have to have general.</p>
<p>Consent, right? Yeah.</p>
<p>So this isthis is wonderful, Greg, as always.</p>
<p>It's a pleasure talking to you.</p>
<p>And this isthis has got me really excited.</p>
<p>I can't wait to see whatyou guys are going to produceand that it hopefullymoves out of the laband kind of as a partner,</p>
<p>I want I want one to go through my emails.</p>
<p>Yeah.</p>
<p>That's all I'm going to say.</p>
<p>I get too many emails a day.</p>
<p>So yeah, this is exciting stuff. Cool.</p>
<p>Yeah. Thank.</p>
<p>Thanks so much for having me on.</p>
<p>Yeah, I love talking about it.</p>
<p>You know, we're having a lot of fun.</p>
<p>Playing with this for sure!</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel,</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.org Until nexttime, go out and do something wonderful.</p>

</details>
