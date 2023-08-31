---
layout: posts
title: "Evolution of Cloud"
number: 138
permalink: episode-EDT138
has_children: false
parent: Episodes
nav_order: 138
tags:
    - cloud
    - computing
    - dell
    - multicloud
    - hybridcloud
    - technology

date: Mon May 15 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Sam Ceccola

img: thumbnail.png
summary: "In this episode Darren interviews Ken White from Dell Technology about how Cloud technology is more than technology, but a process and cultural change in organizations."
---

{% include transistor.html id="fdf8c82e" title="#138 Evolution of Cloud" %}

{% include youtube.html id="Woc49CCq27g" %}

---

The evolution of cloud computing is one of the most significant technological advancements of the last decade. The cloud is transitioning from a simple concept to a complex and ubiquitous system that now dominates business operations and strategies. As Ken White from Dell Technologies tells us, the cloud is no longer a single location or a one size fits all solution. Instead, it is everything, everywhere. 

With hyper scalers like Amazon and Azure expanding constantly, the cloud represents a consistent experience across platforms with predictability in performance and cost. However, hidden fees exist, particularly when moving data in and out of the cloud. It is essential for companies considering the cloud to fully adopt a cloud mindset concerned with consistency and predictability, as well as flexibility, performance, and security. While some executives are attracted to the cloud for its potential to reduce costs and IT management, it is essential to remember that it cannot solve every issue and is not a one-way street. The cloud can ultimately improve operations, increase efficiency and ultimately deliver a better experience for businesses and customers alike, provided a well-planned operational mindset is adopted.

If you're in the business world, you've likely heard about the cloud, but have you heard about the cloud mindset? It's a way of approaching technology that enables adaptability, portability, and predictability regarding cloud workloads and costs. That means you can develop portable applications across different ecosystems and choose where workloads land based on business requirements, not just technical constraints. It also means you can predict and control costs, a welcome relief in an ever-changing technological landscape. 

But changing mindsets is challenging, especially for organizations accustomed to a particular way of operating. This is where training and a commitment to continuous learning come in. Organizations that successfully adopt the cloud mindset prioritize a positive user experience, are willing to adapt to new architectures, and learn and change as technology evolves. 

Adopting the cloud mindset doesn't mean you'll have to fire all your IT people and move everything to the cloud. Instead, it's about training your workforce and rethinking your organizational philosophy. With a suitable management layer and a focus on flexibility and agility, organizations can unlock the benefits of the cloud for their businesses and enhance the experiences of their end-users, whether they're developers or customers.

Considering a cloud strategy, you must understand that you may experience failure. Moving applications to the cloud isn't always straightforward and can come at a cost. However, your chances of success are much higher with the right consistency and governance. 

Consistency doesn't necessarily mean a single pane of glass, but it does mean having a standard process for managing and deploying workloads and infrastructure. It also includes consistency with governance, processes, and workflows. This level of consistency ensures that everyone in your organization understands how to manage the cloud.

Cloud adoption failures are only sometimes avoidable, but repatriation may be an option to bring your workload back to an on-premises solution. However, this option can also be costly, so weighing the short-term and long-term benefits is essential.

Containers can also make a difference in cloud adoption by eliminating problems associated with moving applications to the cloud. But remember, no silver bullet will solve all your cloud adoption issues.

Overall, the key to success with a cloud strategy is to focus on consistency and understanding the costs involved in moving to the cloud. With these factors in mind, your chances of success are much greater.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople process and technology.</p>
<p>On today's episode,</p>
<p>The Evolution of Cloud with Ken</p>
<p>White from Dell Technologies.</p>
<p>Ken, welcome to the show.</p>
<p>Thanks for having me, Daryn.</p>
<p>All right.</p>
<p>Now, this is the second timewe've done this.</p>
<p>The second. Time.</p>
<p>So you did a wonderful job.</p>
<p>First time I had a good guidance.</p>
<p>Yeah. Oh, thank you. Thank you.</p>
<p>But first, let's just kick off. Ken.</p>
<p>Tell us a little bit about yourself, yourbackground, and why you're here today.</p>
<p>So about 25 years in the industry,we started the ground uplike everybody else does,and now I'm pretty much doing strategy,but I've been focusing moreon infrastructure as a serviceand just delivering it as a servicein general in several different forms.</p>
<p>Since like the early 2002 thousand.</p>
<p>So, well, you've seen a lot of changethen in the last 23 years.</p>
<p>Oh, goodness gracious. Yes. I mean,first off, the dot com boom and.</p>
<p>Bust, right?</p>
<p>Yeah, I was there for the.</p>
<p>Yeah.</p>
<p>And then the birth of the cloud. Yes.</p>
<p>And now we're seeing the birth of</p>
<p>AI as well.</p>
<p>That's a whole nother.</p>
<p>I get that another day.</p>
<p>So you've seen a lot.</p>
<p>Do you see anything new now that'swe haven't seen beforeor are we just cycling through.</p>
<p>No, everything's new and there's some oldor some new and there's some unknown.</p>
<p>You know, create the know.</p>
<p>You know, because it's it'severything's evolving quickly now.</p>
<p>And so it's it's it'syou know, at the beginning cloud,you know,that's the subject we're talking about.</p>
<p>It was you know it's fairly simple,you know is storage and computenot on prem.</p>
<p>Well now cloud is not just Amazon,it's not just as you'rethose are hyperscalers now.</p>
<p>Yeah,</p>
<p>I like how you use that term Hyperscalersbecause every we've been calling themthe cloud.</p>
<p>Oh, the cloud.</p>
<p>Oh, you went to Amazonor you went to Azure, right.</p>
<p>They're really Hyperscalers. Correct. Yes.</p>
<p>Yeah.</p>
<p>It's, it's the cloud isjust not one place, one location anymore.</p>
<p>The cloud is everything everywhere.</p>
<p>Yeah.</p>
<p>Trying to explain that to a non techie.</p>
<p>I tried to explain it to my parents.</p>
<p>My mom's an educator, my dad's a doctor.</p>
<p>They. Oh, yeah, it's in the cloud.</p>
<p>They think it's his nebulous place,that everything exists. Andbut it's kind of turned into that.</p>
<p>It has, it has.</p>
<p>And it has different flavors.</p>
<p>I mean, so so back to when it wentfrom the evolution of cloudwhen it first started there.</p>
<p>And, you know, we we had AWB, we had a jarand we knew exactly what was going on.</p>
<p>Well, now we have AWB,we have Azure, we have SASproviders like,you know, Microsoft, like Office 365.</p>
<p>Yeah, No.</p>
<p>Or BP.</p>
<p>You know,and then they have their own variantsof their cloud offering as well too.</p>
<p>So so it's, it's, it'snow that's multi-cloud and thenthen you haveokay well we have stuff on prem.</p>
<p>We have an a colo now that's a hybrid i.t.</p>
<p>You know, and so when you combineall those things together,you got to figure out what is cloud.</p>
<p>Now and what it is.</p>
<p>It's, it's it'sa it's a different way to operatebecause and it's about flexibility.</p>
<p>It's about it's about adaptabilityand it's about being mobileon the front endand being mobile on the back end.</p>
<p>And so it's it's a whole new mindset.</p>
<p>So that that's what I kind of</p>
<p>I kind of likefrom the first timethat we talk, as you said, it's a mindsetand the mindset.</p>
<p>I think we can blame the softwareengineers on like on the softwareengineer.</p>
<p>It started in the ninetieswhen people went to phraseelectronics in Silicon Valleyand poor phrase doesn't exist anymore.</p>
<p>So you newbies out theredon't know what phrase is.</p>
<p>You missed out on a great, great coupleof decades of some really cool stuff.</p>
<p>You would just go and buy a boxand put it under your deskand you had your own little clusterthat you were runningor whatever the case may be.</p>
<p>Cloud comes in.</p>
<p>Now I can just swipe a credit cardand now I have a thousand instancesfor a couple hours and I get rid of it.</p>
<p>That was wow, that changed softwaredevelopers lotbecause I could get instant accessto as much resources as I wanted.</p>
<p>And then if I remember to spin it down,it didn't cost me too much.</p>
<p>Well, as long as you had an unlimitedcredit expense at the time, you're you're,you know, you're going toyou interact that up pretty quickly.</p>
<p>Yeah. I learned that the hard way.</p>
<p>That if you move data move.</p>
<p>Oh, yeah, yeah, yeah.</p>
<p>So but that's kind of where it cloudreally took off was the softwaredevelopment community because they said,</p>
<p>I don't have to wait to procure hardware,get it through the I.T onboardingprocess, blah blah blah.</p>
<p>Blah. But it's like, oh yeah. Yeah.</p>
<p>It's,it's definitely, it's definitely moving.</p>
<p>It's, it's always moving,</p>
<p>I think. Yeah. So it's.</p>
<p>So it's we're not in those same daysas I don't just go to the cloudand just get instances anymorelike I used.</p>
<p>To know, I mean, I mean you can. Still.</p>
<p>You can, I mean that's obviously is, is,is a governance model,you know, within your own organization.</p>
<p>You know, it has to you know, there'sthere's you know, it clouds.</p>
<p>It's not technology.</p>
<p>You know, it's it's it's people.</p>
<p>It's process. It's technologylike we talked about before.</p>
<p>Well, well, well, that that'sthat's the big question I have.</p>
<p>So when you talk about it's evolvedand it's an operational mindset. Yes.</p>
<p>What is that mindset?</p>
<p>What is the cloudoperational mindset look like?</p>
<p>Well, I think I think it's</p>
<p>I think when we talked previously,you're like like what's the i.t.</p>
<p>Workforce? Look at that.</p>
<p>And that's the one we're talking about.</p>
<p>Yeah, yeah.</p>
<p>From from their operational models.</p>
<p>So it's every organization from an ITperspective operates in one way.</p>
<p>Okay.</p>
<p>But, but what I thinkthe cloud is now more than anythingelse, it's an experienceand it's a consistent experiencethat's provided on prem in a coloin in as you're using office 365and SAP some of the SAS providers, it'sthe experienceand it's a consistent experience acrossentire platforms with predictability,both in performance and both in cost.</p>
<p>All right. So the cost is a big deal.</p>
<p>It is has predictive cost in cloudhave not been always the same thing?</p>
<p>Yes, because there's hidden costswith cloud, There's.</p>
<p>There's cost is you don't knowuntil your workload is actually running.</p>
<p>Right.</p>
<p>And then you go, oh, my goodness,what just happened?</p>
<p>I'm 40% over budget.</p>
<p>That's Yeah, yeah, that's happening a lot.</p>
<p>Why is that? Why, why is that the case?</p>
<p>And just egress costs, you know, movingdata in and out of the cloud is expensive.</p>
<p>And so it's there's, there's.</p>
<p>Well is that because people are notusing the cloud with a cloud mindset,they're notunderstandingthe operational model of a cloud.</p>
<p>I know I think I think it's it's yes, yes.</p>
<p>Yeah.</p>
<p>That the answer is yes, because it's justyou still have to managethat infrastructure,even though it's easy to provisionbecause.</p>
<p>Oh, yes.</p>
<p>You still have to manage it, even thoughit's easy, you still have to manage it.</p>
<p>And then if you're not using it,you need to spin it down.</p>
<p>But there's but you have to spend it that.</p>
<p>So do you think a lot of CIOs, probablynot the CIOs, but executives said, oh,if I move into the cloud, I can accessa lot of my operational costs in my</p>
<p>I.T organization.</p>
<p>I don't need as many peoplein order to manage my infrastructurebecause AWB is managing itnow or Azure is managing it now.</p>
<p>To a point.</p>
<p>It's not all inclusive, you know.</p>
<p>No, but</p>
<p>I think that's kind of their mindset.</p>
<p>It is.</p>
<p>And I think obviously yes,</p>
<p>I think I think I think it wasfrom a from a private sector perspective,</p>
<p>I think I think cloud adoptionwas to help the balance sheetbecause there are benefits to not carryingthose assets on the balance sheet.</p>
<p>But then I think as time has evolved,does thatdoes that benefit outweighor is it better than having it on prem?</p>
<p>And what is the differencein my operating model?</p>
<p>Am I operating more efficiently?</p>
<p>Am I providing my customersbetter service?</p>
<p>Am I giving them, you know,speed to value, speed capability?</p>
<p>You know, are those things do?</p>
<p>And I think as time has evolved,</p>
<p>I think the answer is yes.</p>
<p>By certain use cases, there'sthere are specific reasons and needs thatthe cloud does address that an on premor a colo solution could not do.</p>
<p>So would you say that the cloud mindsetis is drivingus away from infrastructure managementand more into workload oruser managementand outcome outcome based management?</p>
<p>I think I think it's driving us towardsconsistencybetween the environments.</p>
<p>And we talked about this.</p>
<p>Okay. Yeah, yeah.</p>
<p>You know, it's because,because an organization wants to be ableto put an application or a workload whereit's designed or where it's the best,best use for it.</p>
<p>And sometimes cost is notone of those drivers they need to perform.</p>
<p>Sometimes it's performance.</p>
<p>Yeah, sometimes performance,sometimes it's security,sometimes it's other things.</p>
<p>You know, there's costschedule and performance or the.</p>
<p>Risk factor and reliability,of course. Yes.</p>
<p>Yes. But, you know, reliability isyou have one of the cloud regions go downand well, you know.</p>
<p>I started on reliability of cloud.</p>
<p>You can't you can't you can'tyou can't fail over too quickly,you know, when it goes bad.</p>
<p>So, I mean, you know,but I think I think it's about consistencyand it's consistency.</p>
<p>It's it's consistencyon how it's delivered, how it's measured,how it's managed,and how it's accounted forfrom a cost perspective,you need to be ableand that's where the as a serviceon prem stuff comes into play, becausewhat it does, it allows you to budget,it allows you to predict your costsin the same manner of knowregardless of where it is.</p>
<p>So this predictability, I really likethe concept of predictability.</p>
<p>Yes, because it's hard to run a businesswithout knowing what yourpredictabilityis next month, like your cloud bill.</p>
<p>Right. Or your performancethat you're getting out of it. Yes.</p>
<p>And all right.</p>
<p>But I'm going to throw a curveball to you.</p>
<p>But people would say we're moving so fast.</p>
<p>It's hard to be predictablein what my needs are,because if everything was predictable,</p>
<p>I wouldn't go to the cloud.</p>
<p>I would run everything on premand everything would be</p>
<p>I would purchase my serversfrom Delljust in time for my workloads to land.</p>
<p>Everything would be copasetic.</p>
<p>But we know that's not business, right?</p>
<p>I mean, look at what Chad GPT isdoing to the business worldright now, turning everything on its end.</p>
<p>Generative is.</p>
<p>I can't predict that.</p>
<p>No, but what you can't predictis you have unknown needs in the futureand you need to have the capacitythat's available to you.</p>
<p>And what I mean by available to youthat's on prem, that's color,but it's a hybrid environment.</p>
<p>It's multi-cloud.</p>
<p>So I could burst out.</p>
<p>When you need to and I need tothen come back in.</p>
<p>But then there'sthere's a whole data cost.</p>
<p>So how do we solve that problem?</p>
<p>There's there's, there's cloudadjacent storage, you know, there'swhich helps lower those costs, you know,so there's advantages to that.</p>
<p>So if you need to burstand build an application, you know,and then containersbecause you can move themanywhere, really solve the problemfor mobility on the application side.</p>
<p>And so by adopting those typesof mindsets, you're able to operatein a consistent manneracross all platforms and for unknownneeds and thingsthat you need to burst and get quickly.</p>
<p>So you can go to the hyperscalers.</p>
<p>For back out. Yes.</p>
<p>And then you can then you can migrate itback on prem when you have the.</p>
<p>When you have the infrastructureto support it oror maybe you leave it out there for maybe.</p>
<p>You do it, maybe you do.</p>
<p>So it's this portabilityof workloads, consistency,which leads to predictability.</p>
<p>Yes, these these are the key aspects.</p>
<p>How do youhow do you feel like that is changingthe way that it is engagingwith developers and with their end users?</p>
<p>Because before it used to beif I have a productthat I'm going to releasesix months from now,</p>
<p>I involve I.T now and I say,here's my system architecture, here's my,my Q os, my SLA,and you have all these formal reviewsthat you go through.</p>
<p>I that's gone, yes.</p>
<p>So what's the,what's replacing that mindset?</p>
<p>You know, I don't, I don't knowif it's so much of a replacementas it is a transfer mission. Okay.</p>
<p>Because there are elementswhere that is neededand it goes down to, you know,what application in my deploying.</p>
<p>Okay.</p>
<p>And so there's going to betraditional waysof doing things,and then there's going to be innovative,innovative ways to do things.</p>
<p>And I think from an ITperspective, a developers perspective is,is that they have to understand,you know, what their requirements, their</p>
<p>CapEx, their infrastructure requirementsgoing to be and be less concernedabout where they're getting them from.</p>
<p>I think that's the biggest mindset becausethey yes, because like in the old days,you know, we've talked about this before.</p>
<p>You know, if a software engineertells Intel's infrastructure,you know, what to buybased on the application requirementsand software engineers load the box.</p>
<p>Oh, yeah, Yeah.</p>
<p>What's your budget? Yeah.</p>
<p>I mean, 10,000 cores.</p>
<p>Yeah.</p>
<p>You know, what,are you running a calculator?</p>
<p>Yeah, that's. Right. Yeah. So.</p>
<p>So it prevents thing.</p>
<p>It does so, so so the, the mindset of,of being able to build the applicationnot overspend at the get go.</p>
<p>Okay. And so I think I think as.</p>
<p>Harvard software developers.</p>
<p>It used to be it used to be becausebecause because they canyou can like if you develop on aon prem cloud or public cloud,you can see what your workload is.</p>
<p>You can see how like. Performanceis performing. For.</p>
<p>No, it's that's part of thewhat I. See where.</p>
<p>You go, you have telemetry data.</p>
<p>Okay.</p>
<p>So, so so what, what, what,what this new cloud experience does, itnot only provides the flexibility it waswe talked about on the front end,the mobility on the backand the front end.</p>
<p>You know, users can need to be ableto connect everywhere,anywhere, all the time.</p>
<p>And then the applications need to beneed, need to be able to move anywhere,any time as the organization dictates.</p>
<p>So, so, so. So so that's a business.</p>
<p>I like this that's a business decisionon where the workload lands.</p>
<p>Yes. Yes.</p>
<p>Not a technical decision, correct? Yes.</p>
<p>See, that's wonderful.</p>
<p>When you think aboutbecause I'm a software engineerby by trade and my passion is software.</p>
<p>I can't spell code. Oh, man.</p>
<p>I cannot even talkto, you know, that's one of my passions.</p>
<p>And I spend so much time setting upmachines and but I don't anymore.</p>
<p>Right.</p>
<p>Because I moved to containerization.</p>
<p>You're right. I can move this anywhere.</p>
<p>I don't.</p>
<p>A lot of times I don't even carehow much it consumes, you know?</p>
<p>But now with self-service portals,</p>
<p>I can run a workload,</p>
<p>I can run my testing, I can seehow many resources it's really consuming,which means I can right size my instances,save the company money.</p>
<p>Yes, and not overprovision.</p>
<p>And why don't we always overprovision,right?</p>
<p>Yeah, but.</p>
<p>So sometimes when it's called for there,sometimes when it's not.</p>
<p>Well, most of the time it'snot unless I write really crappy code.</p>
<p>Which the that's questionable.</p>
<p>There's some crappy code out there.</p>
<p>It's a lot of it.</p>
<p>So okay, so this, this mindset isnot just in the IT world now.</p>
<p>It's in the developer world too.</p>
<p>It's a cloud mindset.</p>
<p>I need to write applicationsthat can be portable acrossthe whole ecosystem,which means I don't want to use servicesthat lock me into one specific wayof using the cloud.</p>
<p>Yeah,and I think we talked about this earlier.</p>
<p>I think I think the line of businessleaders and and the business decisionleaders have that mindset ofthey need to be flexible and agileto to support their business caseor to supportwhatever workload that they want to do.</p>
<p>Now, I think what's happeningis, is that mindset is pervasiveand now it's it's in the</p>
<p>IT organization as well, too,because they're no longerdictating how things run.</p>
<p>They're no longer dictating,you know, how infrastructureis going to be deployedand things of that nature.</p>
<p>Because with it,with a consistent management layer,you eliminate some of the some ofthe challenges associated with with that.</p>
<p>So that something like Dell providesis this consistent management layerreally okay?</p>
<p>Because right nowif I go to each cloud service provider,the way they even deploy instancesin their security models are different.</p>
<p>Yes. Well,the management layer is not when I sayyes, it's it's to us in our ecosystem.</p>
<p>So it's it's you know, it's notyou're not going to have one personcan't provide everything.</p>
<p>Okay.</p>
<p>So much of what you do need isyou do need that one.</p>
<p>Management layer,because what that allows you to dois you extrapolate the intelligencefrom the infrastructure and you put thaterase that up into the stack.</p>
<p>So it prevents you from being lockedinto any type of architecture,both at the management layerand at the physical layer,because you're able to change and moveand adapt to what we talked about earlier.</p>
<p>As technology advances, as use casescome about, as threats become available,you know, our impact,you know, it allows you to move to out.</p>
<p>So if I hear what I'm hearinga lot in what you're sayingis adaptability.</p>
<p>Portability of workloads is crucial with.</p>
<p>Predictable. Cost, with predictable.</p>
<p>See, that's the thing,because I can do all that stuff,but my cost is not predictable.</p>
<p>Correct.</p>
<p>But the predictable, that's a big deal.</p>
<p>It's huge.</p>
<p>It's huge.</p>
<p>As a consumer, don't you want to knowwhat your mortgage payment is every month?</p>
<p>Yeah. Can you imagine? It changed every.</p>
<p>Right because you because.</p>
<p>If I'm on a variable rate, it'schanging like crazy right now.</p>
<p>I wasn't only leaving my house, like.</p>
<p>Like you're on the roadand stuff like that.</p>
<p>I was only in my house</p>
<p>So is that a different cost of I'min there 30 nights, you know.</p>
<p>Could you imagine if we paid our mortgagethat way?</p>
<p>Right. There would be interest.</p>
<p>Yeah, but that's how we're, that'show we are paying cloud.</p>
<p>And there are some difficult coststo predict, like egress costsis difficult to predict.</p>
<p>And now not only egress and ingest,it's there in ingress, wherever you are.</p>
<p>Sad. You know,there'salso the security layerand there's also the networking component.</p>
<p>You know, you still haveto perform all those functionsbecause that's not all inclusive.</p>
<p>You still have to do all that.</p>
<p>You still have to do.</p>
<p>Yeah, right.</p>
<p>It's just the location has changed.</p>
<p>Yeah. Yeah.</p>
<p>Which I I'm glad you said thatbecause I think executivesneed to hear that more because. Go.</p>
<p>We're going to save so much moneyby firing all of our I.T.people moving to the cloud.</p>
<p>Yeah.</p>
<p>No, you have to retrain your people.</p>
<p>Right?</p>
<p>It's a change skill setas much as a mindset and a philosophy,organizational philosophy as it isa change in skill set for your workforce.</p>
<p>And you have to train your workforce.</p>
<p>There's a lot of good people out thereand they understand these things,but as technology evolves,they have to adapt and the organizationshave to help them adapt their workforceto the new evolving architectures.</p>
<p>And it's going to have to bea continuous learning.</p>
<p>It's like ISO,it's like a continuous improvement.</p>
<p>Yeah, it's continuous improvement.</p>
<p>It's got to be that way.</p>
<p>Have you seen organizations successfullymove through this rapidly?</p>
<p>And if so, what were the what were the keythings that you saw an organizationthat was able to really adopt this new wayof operating in this cloud mindset?</p>
<p>What were the things that you sawreally helped them move, move along?</p>
<p>Well, I think I think it's it's I thinkit's different for every organization.</p>
<p>Okay.</p>
<p>I would say that the longeran organization has has has has operatingfor second model, regardless of size,the harder that is to change.</p>
<p>So there's all that inertia, culturalinertia. Yes. Yes.</p>
<p>And people in general are we're justrevertare are resistant to changebecause I'm guilty of it as well.</p>
<p>To me too. You know.</p>
<p>I mean I mean I know what I know.</p>
<p>Yeah I know what I know.</p>
<p>I can tellyou know now. Yeah, I'll do it, you know.</p>
<p>And so it's, it's like going from a stickto an automatic, you know.</p>
<p>You, you know, Why would you ever do that?</p>
<p>You know, I know if you likedriving a stick or manual, you know.</p>
<p>Yeah. You know,</p>
<p>And why would you go to an automatic?</p>
<p>You know, it's it's change is difficult.</p>
<p>You're not going to like it.</p>
<p>But once once it'sonce it once once you experience itand once you're in the environmentlong enough, you're able to do that.</p>
<p>But change rapid.</p>
<p>I don't think that's</p>
<p>I don't think that's possible.</p>
<p>I think change is constant.</p>
<p>And I think I think we need to setthe environment up and the experience.</p>
<p>It's all about the experienceand set the experience up.</p>
<p>So where change isis is really acceptable.</p>
<p>Oh, I like I like that. Acceptable. Yes.</p>
<p>All right.</p>
<p>Yes. So acceptable to memeans I need upper level management.</p>
<p>It's got to be across the organization,across the across the horizontalsand across the verticals. Gotcha.</p>
<p>And that. It's okay.</p>
<p>It is okay. Change is okay. Yeah. Okay.</p>
<p>Got it.</p>
<p>Great.</p>
<p>Have you seen organizationsthat completely torpedoedor went sidewayson their cloud adoption eithertotal botched,moving into a hyper scaleror total box repatriation?</p>
<p>And whatwhat was the main thing that caused?</p>
<p>I think well,</p>
<p>I think I think with anythingnew, you're goingto have things that fail.</p>
<p>And so I think moving into the cloud,yes, everybody did.</p>
<p>You know, I mean,because you have to put your applicationsaren't just ready to move in the cloudor not.</p>
<p>There's cost to put the applicationover. Right. Okay.</p>
<p>And then then if you bring it back,there's cost to report it back to an onprem solution. Okay.</p>
<p>Now with containers,as we talked about previously,that type of architecture eliminatessome of those problemsassociated with that. Right.</p>
<p>So it doesn't completely eliminateall of them?</p>
<p>No, not completely, no.</p>
<p>So there's no silver bullet? No,no silver ball.</p>
<p>But but yeah. So everybody fails. Okay.</p>
<p>But the repatriation part, I thinkthat's probably a little bit easier to dobecause you're because.</p>
<p>It's been there before. It'sbeen. There before. It's a known thing.</p>
<p>The only problem with repatriation isyou've got to move the workload,you got to move the data.</p>
<p>And so then it's then, then there'snow there's that's it can be costprohibitive depending on where it is.</p>
<p>But at the short term.</p>
<p>But the long term gains are beneficialfor that workload.</p>
<p>So you have to understand that going inbecause your costs are always going to bepredictable in this type of environment.</p>
<p>So I had somereally fascinatingtime talking about this againand thank you for coming on.</p>
<p>Thank you on again. I appreciate it.</p>
<p>Any last words for people out therethat are lookingat their cloud strategy going,what do I do?</p>
<p>I, I think the biggest thing is,is that they it's about like we talkedabout is about consistency.</p>
<p>And I think they really need to understandhow they're going to manageand deploy workloadsand infrastructure across all aspects.</p>
<p>And to have consistency.</p>
<p>It doesn't have to be a single paneof glass, but there has to be consistency.</p>
<p>And I think that's the biggest thingbecause if you have differentenvironments differentand that's consistency, just not withtechnology, consistency with governance.</p>
<p>Consistency is what processes with.</p>
<p>Workflows and things like that, There hasto be consistency and it has to be known.</p>
<p>So I think that's the biggest thing.</p>
<p>And I think I thinkonce once you can achieve thatand once you understand that,then no matter what you're goingto do, your chances of being successfulare much greaterthan they would beif you weren't consistently all right.</p>
<p>The word the word today is consistency.</p>
<p>Consistency.</p>
<p>I love it.</p>
<p>Thanks again.</p>
<p>Thank you, Daryn.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org Until nexttime, go out and do something wonderful.</p>

</details>
