---
layout: posts
title: "Building a Multi-Hybrid Cloud Strategy"
number: 162
permalink: episode-EDT162
has_children: false
parent: Episodes
nav_order: 162
tags:
    - cloudadoption
    - organizationalmodernization
    - barriers
    - riskmitigationplan
    - applicationrearchitecture
    - governance
    - organizationalculture
    - cloud
    - multihybridcloud
    - multicloud
    - embracingdigital
    - edt162

date: Tue Sep 26 2023 00:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Christine McMonigal
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "In this episode Darren interviews Christine McMonigal and discuss the challenges organizations face when transitioning to the cloud and adopting multi-hybrid cloud architectures. They highlight the importance of understanding these obstacles and providing guidance to overcome them. This episode will dive deeper into some key barriers and strategies for mitigating risks, ensuring a successful cloud transformation."
description: "In this episode Darren interviews Christine McMonigal and discuss the challenges organizations face when transitioning to the cloud and adopting multi-hybrid cloud architectures. They highlight the importance of understanding these obstacles and providing guidance to overcome them. This episode will dive deeper into some key barriers and strategies for mitigating risks, ensuring a successful cloud transformation."
---

<div>
<h3>Listen Here</h3>
{% include transistor.html id="afade5ea" title="#162 Building a Multi-Hybrid Cloud Strategy" %}

{% include youtube.html id="EmI607B9RuA" %}
</div>

---

## Best Practices for Cloud Adoption

Moving to the cloud and adopting new technologies like generative AI can bring numerous benefits, but organizations must also be prepared for the changes that come with it. According to Christine McMonigal, director of Data Center and Cloud Technologies at Intel, there are key best practices to consider.

### Organizational Modernization

One important aspect to recognize is that cloud adoption is not just a technology modernization, but also an organizational modernization. This means that organizations need to be prepared for changes to processes, workflows, and even organizational structures. It's crucial to address these changes and ensure that the entire organization is aligned and prepared for the transformation.

### Identifying Barriers and Setting Clear Expectations

A crucial step in overcoming barriers and mitigating risks is identifying what these barriers are in the first place. By doing a thorough assessment of the current infrastructure, workflows, and challenges within the organization, potential roadblocks can be pinpointed and strategies can be developed to overcome them.

Moreover, setting clear expectations upfront is essential. This means effective communication with stakeholders, employees, and partners about the goals, benefits, and challenges of adopting multi-hybrid cloud strategies. By setting realistic expectations and ensuring everyone is on the same page, organizations can minimize surprises and resistance to change.

### Robust Risk Mitigation Plan

Having a robust risk mitigation plan in place is another crucial aspect of successful cloud adoption. This includes evaluating potential security risks, data privacy concerns, and compliance requirements. By proactively addressing these risks and implementing appropriate measures, organizations can safeguard their data, ensure regulatory compliance, and minimize potential threats.

## Barrier 1: Application Re-Architecture

One of the key barriers organizations often face in cloud adoption is application re-architecture. It's important to assess which applications can be lifted and shifted to the cloud as-is, and which ones may require more significant modifications. By identifying opportunities for simplification and cost reduction through automation, organizations can streamline access and controls.

## Barrier 2: Governance

Governance policies play a crucial role in mitigating risks during cloud adoption. Inconsistent security models, diverse management tools, and heterogeneous user policies can increase complexity and jeopardize the success of the migration. Simplifying governance policies and eliminating bureaucracy can help organizations streamline operations, reduce costs, and ensure data security and compliance.

## Barrier 3: Organizational Culture and Maturity

Preparing the organization for the change that comes with cloud adoption is vital. This involves getting employees on board, providing skills training, and identifying key players who can embrace the new ways of working. Addressing fears and concerns that employees may have, such as fear of being left behind or losing their jobs, is essential to create a positive and collaborative environment.

In conclusion, adopting multi-hybrid cloud strategies requires careful planning, effective communication, and a thorough understanding of an organization's goals and challenges. By addressing barriers upfront and mitigating risks, organizations can pave the way for a successful digital transformation journey. Stay tuned for the next episodes where we will explore developing a cloud strategy, evaluating application portfolios, and more insights on embracing digital transformation. Don't forget to rate and subscribe to our podcast to stay updated on the latest trends and best practices in the digital landscape.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople, process and technology.</p>
<p>On today's episode, Building a multihybrid cloud Strategy</p>
<p>Best Practices with special guests.</p>
<p>Christine McMonigal, director of Data</p>
<p>Center and Cloud Technologies.</p>
<p>Christine, welcome to the show.</p>
<p>Thanks, Daryn. Appreciate it.</p>
<p>Hey, Christine.</p>
<p>We go back probably eight years.</p>
<p>It entails.</p>
<p>Probably I.</p>
<p>Think I met you the first time at a show,probably HP</p>
<p>Explorer one, one of the vents back there.</p>
<p>And yeah, maybe a VMWORLDor an HP or something.</p>
<p>Yeah. Yeah.</p>
<p>And I remember we on the show floortalks for hours at the booth,you know, inbetween rushes of people coming in.</p>
<p>We had a fun time.</p>
<p>And when I heard about this projectyou're working on, I said,</p>
<p>We got to talk to Christine.</p>
<p>This would be wonderful, but I know you.</p>
<p>But my guest do not. So, Christine.</p>
<p>So tell my guests a little bitabout yourself and your background.</p>
<p>Yeah.</p>
<p>Christine McMonagle,</p>
<p>I've been at Intel for many, many years.</p>
<p>I've been on the data centerside of the business since 2010,and I've been working on storage,hyper converged infrastructure.</p>
<p>Kind of evolvedinto more of a hybrid cloud focus.</p>
<p>And I work with a number of our keysoftware partners to help themtake advantage of Intel technologiesand then promote those technologies.</p>
<p>So where were you before Intel?</p>
<p>Our stores. Intel.</p>
<p>Been where you grew up?</p>
<p>Cut your teeth.</p>
<p>Oh, wow.</p>
<p>I was at a small startupbased in the Twin Citiesthat had networking and IO equipmentback in the nineties and then went backto school at Cornell for my MBA.</p>
<p>And Intel hired me out of that program.</p>
<p>Oh, wow.</p>
<p>All right.</p>
<p>So technologist turned in Bay.</p>
<p>That's right.</p>
<p>Sounds familiar. That's what I did, too.</p>
<p>That's hard to do.</p>
<p>Yeah.</p>
<p>When I learned that no one knows howto manage and control software engineers,</p>
<p>I decided to go learnhow to do that with my MBA.</p>
<p>And I still don't know how.</p>
<p>I'm a software engineer, too.</p>
<p>I'm not control. Everyone knows that. So.</p>
<p>So, Christine, we talk. We talk.</p>
<p>This is this is the first podcastin a series of five podcaststhat we're going to do on multi hybridcloud on best practicesin multicloud models. Why?</p>
<p>Why are we doing this?</p>
<p>You know, we recognize thattechnology providers, Cisco's I.T.decision makers,they're still facing a lot of challengesas they modernize their infrastructure,moved to cloud, bring in new technologieslike I consider how to use the edgeall of these things.</p>
<p>And well,we've had some good guidance in the past.</p>
<p>We felt it was really time to update that.</p>
<p>And and really see how we could helpour partnersand our customersbetter make use of their infrastructure.</p>
<p>And you know, get the most that they canas they're addressing business challenges,anything from, you know, improvingtheir customer experience, lowering costs,improving security, supportingtheir continued remote workforce, etc..</p>
<p>And and that's reallywhat transformation is all about.</p>
<p>Well, I'm glad you brought that up,because the landscape today,compared to just five yearsago, completely different.</p>
<p>Very true.</p>
<p>Mm hmm.</p>
<p>I mean, you mentioned you mentionedtwo of the biggest ones, remote work.</p>
<p>The pandemic.</p>
<p>The pandemic changed everything.</p>
<p>And the other one, which is very new,which is only six,eight months oldnow, is the birth of generative AI.</p>
<p>That's right.</p>
<p>So big, big changes.</p>
<p>So why does Intel thinkthat they have anything to sayabout this stuff?</p>
<p>We just produce chips.</p>
<p>Well, actually,</p>
<p>Intel's a lot more than justa chip producer, as you well know.</p>
<p>Why do you know We have 15,000 softwareengineers, for example?</p>
<p>Right.</p>
<p>And, you know,we really try to work closelywith the ecosystem, whether that's ondriving your technology standardthat make interoperability real to,you know, collaborating with our softwarepartners to help our technologiesimprove the software experiencethat they're delivering to customers.</p>
<p>And all of that is is really partof what we're doingto drive transformation in the industry.</p>
<p>And ultimately, you know, our missionis to make the world a better place.</p>
<p>Well, I'm glad you brought those things upbecause I leverageall that stuff in my own workbecause Idon't work with the software vendorsas much as I work with the end users.</p>
<p>And I'm like a matchmaker.</p>
<p>Or I call myselfsometimes a technology therapistwith other CIOs.</p>
<p>So when we talk about best practicesin adopting multi hybridcloud architectures or multi hybridcloud models, operating models,we have a lot of experiencebecause we work with a lot of customersand the vendors that are supplying thesetools to help them with this adoption.</p>
<p>So I love that you guys came upwith this idea for this seriesbecause a lot of my listenersare in the throes of all this today.</p>
<p>So I think this is wonderful.</p>
<p>Very good.</p>
<p>And I'm glad that you were willingto partner with us to get the word outand utilize your podcast,which which has been a longstandingand and valuable asset to the communityto help us provide this guidanceand share some expertise.</p>
<p>Well, great.</p>
<p>Well, thanks.</p>
<p>You know,buttering up the host always helps.</p>
<p>It always does.</p>
<p>All right.</p>
<p>So let's dive into it.</p>
<p>Today, specifically,we want to talk specificallyabout the first best practice.</p>
<p>Which iswhich is addressing barriersupfront to mitigate risk.</p>
<p>All right.</p>
<p>I heard two big buzzwords that I learnedin MBA school.</p>
<p>Barriers and risk.</p>
<p>Right. That's right. That's right. Right.</p>
<p>Yeah.</p>
<p>Well, you know, people think of of cloudas a as a technology modernization,but it's just as much ofan organizational modernization.</p>
<p>Right.</p>
<p>Changes to processesand and how people work and and.</p>
<p>Even organizational structure.</p>
<p>Right, Exactly. Mm hmm.</p>
<p>It's really a large change managementexercise, you know,</p>
<p>And it sort ofsounds like consultant buzz speak.</p>
<p>But in reality, it is a lot of change.</p>
<p>And and it's something that that peoplewant to plan for upfrontand set expectations for upfront.</p>
<p>So what what kind of you talked about?</p>
<p>I've got to identify the barriersand mitigate risk.</p>
<p>Right. Yeah.</p>
<p>How do I go about doing that?</p>
<p>Because this is new.</p>
<p>I mean, some of the barriers</p>
<p>I can think of would be,</p>
<p>I don't know what I don't know.</p>
<p>Well, thatis actually a lot of the challengethat I think people faceas they're modernizing workloads,as they're moving thingsto more of a cloud operating model.</p>
<p>You know, they find that they didn'tmaybe realize all the dependenciesthat a workload or applicationhas or all the different peopleaccessing it and utilizing itand how to secure that access.</p>
<p>So, you know, really the the first thingand this addressing barriers up frontthat people need to think aboutis what's my visibility into my operationsand do I really understandwhere apps are runningand where the data is storedthat supports those appsand what resources other resourcesare used in the data centerfor that workloadand who's accessing the workload.</p>
<p>And you know,what are the needs for performanceor latency or security on that workload.</p>
<p>So really getting that visibility upfrontinto all of thosedependenciesis both challenging and very critical.</p>
<p>Well, this this is interestingbecause I've seen some organizationsdo a lift and shift hire, right?</p>
<p>And they don't do the work upfront.</p>
<p>They have a mandate. I got to go to</p>
<p>I've got to go to Cloud.</p>
<p>So I got to get it done.</p>
<p>I don't have time to do the pre worklike what you're suggesting,and it ends up being a disaster.</p>
<p>Have you seen the same sorts of things?</p>
<p>Exactly. That's exactly right.</p>
<p>You know,and when you look at even surveysof people who've been working in the cloudfor a while,this often comes upas one of the big challenges.</p>
<p>Right.</p>
<p>That that they didn'thave that visibility and,you know, maybe were acting on a cloudfirst kind of a mandate.</p>
<p>But we really see that evolving nowand people trying to takea more strategic approachto their use of cloudand trying to ensure that they do thinkthrough those hurdles or barriers upfront,that they do plan out their cloud strategyand expectations up front as well.</p>
<p>So I love the</p>
<p>I love the term operational visibility.</p>
<p>I just love that.</p>
<p>Mm hmm.</p>
<p>Because you got to seewhat you're doing todayand you don't want to dothe same thing in the cloudor because it's more expensive.</p>
<p>Good point.</p>
<p>That's right.</p>
<p>The whole reason that you're moving tocloud, right, is to evolve your processesand make them more efficient,whether that's cost efficientor more performantor more power efficient, etc..</p>
<p>And if you try to keep everything the sameand just lift and shift it,you may be missing outon some of the benefitsthat you expected to get from Cloud.</p>
<p>All right.</p>
<p>That's great operational visibility.</p>
<p>We talked about that.</p>
<p>What's another tool that I haveor another best practice in this?</p>
<p>Identifying barriers and mitigating risk.</p>
<p>Yeah. Yeah.</p>
<p>Another barrier that we recommendpeople thinkthrough is their governance policiesas well.</p>
<p>You know, policiesfor how resources are accessed, utilized,where data is stored,you know, things that can really derailan effort with hybrid and multi-cloudare things like inconsistentsecurity modelsor heterogeneous user policies,you know, diversearray of management tools.</p>
<p>All these things increase complexityand if not at least understood upfront,they can really jeopardizethe success of a project that you'retrying to use to transform your workloador transform your infrastructure.</p>
<p>Okay. You mentioned governance.</p>
<p>Anytime I hear governance,</p>
<p>I think of bureaucracy.</p>
<p>No, that's not. Horrible.</p>
<p>No, I don't. I don't mean it that way.</p>
<p>You know, I thinkwhen we think bureaucracy,we think governance, government.</p>
<p>But yeah,and the two are tied together.</p>
<p>But what you're talking abouthas is actuallygetting rid of some of the bureaucracy.</p>
<p>To me, bureaucracycomes about because of exceptions.</p>
<p>It sounds kind of weird,but in my sick mind or bureaucraticyou get,it means morepeople have to make a decisionbecause there's so many differentexceptions to ajust a standard way of doing things.</p>
<p>So what you're talking about withgovernance is coming up with a simplified</p>
<p>I love how you said complexityreally kills.</p>
<p>That's right.</p>
<p>Yeah.</p>
<p>Understanding where thosewhere the complexity lies todayand then thinking throughhow to simplify those policiesas part of this transformation effort,as part of this hybridcloudtransformation, you know, really trying toavoid these things that have been a drainon efficiencyand cost driving up cost in the past.</p>
<p>So, you know, simplificationand putting practices in placethat respond to the current conditionsas well,whether that's regulatory or, you know,protecting your IP,protecting your customer information,all of those things are really partof that setof simplified policies for governance.</p>
<p>Okay.</p>
<p>So you mentioned a lot around governance,around data. Hmm.</p>
<p>Almosteverything you said had to do with datais is that really is this really tyinginto my my data governance?</p>
<p>Is it my data governancethat we're talking aboutor is it beyond just data governance?</p>
<p>Well, I think data is a huge piece of it,but it also extends to userpolicies, access controls,protecting how users are accessing dataand workloads in order to mitigaterisks and protect that data.</p>
<p>Okay.</p>
<p>So I can use my governance modelsas ways to help me mitigate my risks.</p>
<p>That's right. That's what I'm hearing.</p>
<p>Okay, great.</p>
<p>This is starting to make sense to me.</p>
<p>A lot of what you're talking aboutreminds me of a course I just tookrecently on process re-engineering.</p>
<p>I. Yes, right.</p>
<p>Which sounds a lot like. Right. Exactly.</p>
<p>Really?</p>
<p>This is part of a process re-engineering.</p>
<p>You know, all of this migration to cloudoperating models, transformation projects,all of this is really processre-engineering and a chart.</p>
<p>Now know that makes sense.</p>
<p>So so but any time as aas an executive when I was an executiveand they said yeah, we needto do process re-engineering,</p>
<p>I was like, Oh.</p>
<p>Yeah, sounds like somethingyou would dread, right?</p>
<p>Yeah, because it's a lot of work.</p>
<p>That's true.</p>
<p>Right.</p>
<p>So what you're telling me isif I'm doing a cloud,if I'm moving to a cloud or multi-cloud,</p>
<p>I got to do the work up front.</p>
<p>It's it doesn't make senseto do the lift and shift.</p>
<p>I think you're going to see limitedbenefitby simply doing a lift and shift.</p>
<p>Now, I'm not implying that every workloadneeds to be completely architected.</p>
<p>That's that's not the case.</p>
<p>But really, it's about evolvingyour policies and workflowsas part of this transformation,taking advantage of thatto make them more efficient andtransparent in terms ofhow they'revisible to the organizationand how they're utilized.</p>
<p>It also is what enables youto automate those kinds of processes.</p>
<p>If it's simplifiedand the workflow is clear.</p>
<p>Okay,that this this makes more sense to me nowbecause I do have some customersthat did lift and shiftand they were a rightand I've had other customersthat did a lift in shiftand there were hidden, hidden thingsthey did not know about because they knew.</p>
<p>Yeah, I mean, notevery workflow needs to be or workload needs to be dramatically modifiednecessarily.</p>
<p>Some may be goodas is or need minimal changesand others may benefit from more dramaticre architectingand a heavier investment, particularlyif they're really critical to theto the organization and your success.</p>
<p>So you know, there'sno one standardized approach,but the more that you can understandupfront and plan aheadand take advantage of this transformationto simplify, reduce costs,streamline access and controls, automateall of those things will be a big pieceof your success with the cloud.</p>
<p>Okay, that makes the most sense.</p>
<p>All right.</p>
<p>I think we beat this one up.</p>
<p>Governance makes sense to me.</p>
<p>Establishingpolicies. It's not just data governance.</p>
<p>I What else?</p>
<p>What next do you have on on our platefor another best practice?</p>
<p>Yeah.</p>
<p>The third barrier to think through upfront is organizational cultureand maturity.</p>
<p>You know, really tryingto prepare the organization for the changethat's coming, bringing them alongas part of the process.</p>
<p>Getting them to embrace it up frontso that there isn'tthe kind of resistance laterand also kind of identifyingyour key players in your organizationwho are ready to embrace these changes,some new ways of working,some new processesand making them part of youryour critical talent poolfor your, you know, your cloud centerof excellence, if you will.</p>
<p>Gotcha.</p>
<p>All right.</p>
<p>We know that change is difficult, as youmentioned, is for a lot of organizations.</p>
<p>But a lot of times when you'redoing a change like this, you identifymotivatorsand fear is one of those motivators.</p>
<p>What do. Well, it is right.</p>
<p>It is of something.</p>
<p>Why would I move to the cloud?</p>
<p>What do you seeas some of the fears that employees havewhen an organizationis moving to the cloud?</p>
<p>What are some of those thingsthat you've seen in your experience?</p>
<p>Yeah, I think it'syou know, people develop a comfort levelwith a certain way of doing things rightand having to changethat is by definitionbreeds discomfort,at least for a period of time.</p>
<p>Right.</p>
<p>And and also, I thinkpeople are,you know, fear being left behindor that as a new operating model,as a new process is developed,that they may be out of work as well.</p>
<p>So the more that you can doto sort of nurture that talentpool and bring people along,the more likely you are to see success.</p>
<p>And those same people are going to helpidentifyyour barriers, help identify your risks,help mitigate those and and, you know,help ensure that you will see successfrom these projects.</p>
<p>It's interesting when youwhen you said bring them along,you meant skills training, right?</p>
<p>Both skills training.</p>
<p>And, you know,just kind of getting them toto see the potential benefitsas well as why it needs to happen.</p>
<p>You know, peoplepeople don't make these changes.</p>
<p>I know that there'sbeen a lot of sort of cloudfirst mandatesfrom top down there in the past.</p>
<p>But I think people are thinking much morestrategically about their use of cloud.</p>
<p>I've oftenheard the term recently cloud smartand how people are,you know, making sure that they have goalsdefined and clear objectives. Andthe more that you can do to,you know, identify those motivatorsand it really all comes backto business challengesthat are the core driver of these changes.</p>
<p>Right.</p>
<p>We don't change for change sakeother than these maybe these top downmandates, but even those were often drivenby cost reduction efforts.</p>
<p>But it's today it's things more like</p>
<p>I need to improve my customer experienceto be more competitiveor I need to address,you know, business continuityor supply chainchain challenges that I've been facingthe last couple of yearsor I see now I'm going to have a continuedhybrid workforceand I want to make sure I retainmy most talented resourcesor I need to address new regulations.</p>
<p>So all of these things are sort ofthe array of business challengesthat motivate change.</p>
<p>And, you know, once you've decidedyou need to make that change,that's when you want to think throughas much as you can.</p>
<p>And plan ahead to mitigate the risks.</p>
<p>You know, it's interestingthat you said it because my brainwent to changehas been difficult in the past,but COVID taught us something.</p>
<p>I.T. organizations can move very fast.</p>
<p>That's very true. Yes.</p>
<p>And I think every success.</p>
<p>Really, right?</p>
<p>Yeah. Yeah.</p>
<p>I mean, I.</p>
<p>I was working with a lot of companies,pre-COVID on their digital transformation.</p>
<p>Right. I mean, that'swhat I talk about in my podcast.</p>
<p>It's what I help people do. Yeah.</p>
<p>And we have three yearroadmaps all mapped out.</p>
<p>This is what we were going to do.</p>
<p>And those three year roadmaps becamethree week roadmaps.</p>
<p>Isn't that amazing?</p>
<p>Everything just went and I was like,</p>
<p>Why is itthat an organization can move that fastwhen it has to?</p>
<p>But in other times it's this bogged downslowness that and I think you hit it.</p>
<p>It's discomfort.</p>
<p>Yeah, we drag our feetuntil we're really forced to changeby some type of business challengeor an external forcethat requires us to pivot and act quickly.</p>
<p>Yeah. Yeah, It's fascinating.</p>
<p>And the cloud smart thing.</p>
<p>I think that's the right strategy.</p>
<p>It's the same strategy that we employed insome customers that their CEO was cloud.</p>
<p>First I read it in CEO, CIO Magazine,</p>
<p>Cloud first.</p>
<p>Cloud first.</p>
<p>No, that's of doom.</p>
<p>We all clouds part. Right.</p>
<p>So I get that. That makes sense.</p>
<p>Have you seen as faras organizational structure goes,have you seen a change in the waythat organizations are structuredto handle clouddifferently than traditional data center?</p>
<p>I. Arethose things that you've seen as well?</p>
<p>Yeah, I've I've seen a few thingsin that regard.</p>
<p>One is this kind of blurringof traditional boundariesbetween silos in an organization, right?</p>
<p>Between compute and storage and networkingand even things like legal andand also between sortof the core operations team and the I.T.planning team.</p>
<p>Now, a lot more blurring of boundaries.</p>
<p>And I think a lot ofit comes down to the fact that as you'rerethinking processes, you realizethat things cannot be siloed.</p>
<p>You really need to be embracinga more agile approach.</p>
<p>And and then, you know,you really need to be unifyingmore of your operations on cloudin order to see the benefit, you know.</p>
<p>And ultimately,people want to move to a more unifiedoperating model, a single management plainand set of tools as much as possiblein order to be ableto make the most of their resources,whether they're in the public cloud,the private cloud at the edge, etc.,in order to really maximizethe potential of those resourceswherever they're placed.</p>
<p>And having a more unified operating modeland managementplan is what gives you that agility.</p>
<p>So that sounds like organizational change.</p>
<p>It is.</p>
<p>Yeah, it's fascinating because we didn'ttalk about technology at all today.</p>
<p>We'll have to come backand talk about that at another time.</p>
<p>Yeah. Yeah,because there are technology in place.</p>
<p>Christine, Like I said,this has been great talking to you.</p>
<p>I think it's a talking about the barriersand the risk managementupfront on best practicesis the way to go.</p>
<p>Can you give us just a brief just a briefoverview of the next podcastthat we're seeing coming up in the series?</p>
<p>I'm a teacher.</p>
<p>Let let's get to make surethat people want to come back and hearthe other four episodes in the series.</p>
<p>Yes. Well, next,we're going to talk about your cloudstrategy and operating model, eitherdeveloping one.</p>
<p>If you don't have a clear,unified strategy and operating modelor refining itto take into account new capabilitiesthat you may need to be developing,for example, A.I.or new resources, you need to be makingthe most of like EDGE, etc..</p>
<p>So we're going to talk about definingor refiningyour cloud strategyand operating model in the next episode.</p>
<p>And then after that,we're going to talk about your portfolioof application iconsand the best ways to modernize those.</p>
<p>We're going to evaluateworkload placement factors,and then we're going to talk abouthow do you do, how do you addressnext steps going forward, you know, agileapproach and continuous improvement.</p>
<p>So that's our plan.</p>
<p>All right.</p>
<p>I look forward to talkingand we have a special guest coming onand then you can wrap this upin a nice tight bow at the end.</p>
<p>So great.</p>
<p>Christine, as always, it's wonderfultalking to you and welcome.</p>
<p>Welcome to the show.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracing digital, dawg.</p>
<p>Until nexttime, go out and do something wonderful.</p>

</details>
