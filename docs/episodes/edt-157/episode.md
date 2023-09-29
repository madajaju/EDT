---
layout: posts
title: "Operationalizing GenAI"
number: 157
permalink: episode-EDT157
has_children: false
parent: Episodes
nav_order: 157
tags:
    - ai
    - generativeai
    - infrastructuremanagement
    - aisystems
    - aimodels
    - operationalization
    - datainput
    - modeltraining
    - finetuning
    - digitaltransformation
    - opensourcemodels
    - privateclouds
    - edgecomputing
    - aitools
    - creativeoutput
    - responsibleusage
    - reinforcementlearning
    - monitoring
    - optimization
    - sandboxenvironment
    - cloudbasedinfrastructure
    - onpremisesinfrastructure
    - hybridinfrastructure
    - customerservice
    - brainstormingapplications
    - embracingdigital

date: Wed Sep 06 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Jeffrey Lancaster
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "In this podcast episode, host Darren Pulsipher, Chief Solution Architect of Public Sector at Intel, discusses the operationalization of generative AI with returning guest Dr. Jeffrey Lancaster. They explore the different sharing models of generative AI, including public, private, and community models. The podcast covers topics such as open-source models, infrastructure management, and considerations for deploying and maintaining AI systems. It also delves into the importance of creativity, personalization, and getting started with AI models."
description: "In this podcast episode, host Darren Pulsipher, Chief Solution Architect of Public Sector at Intel, discusses the operationalization of generative AI with returning guest Dr. Jeffrey Lancaster. They explore the different sharing models of generative AI, including public, private, and community models. The podcast covers topics such as open-source models, infrastructure management, and considerations for deploying and maintaining AI systems. It also delves into the importance of creativity, personalization, and getting started with AI models."
---

<div>
<h3>Listen Here</h3>
{% include transistor.html id="0fb3d4b8" title="#157 Operationalizing GenAI" %}

{% include youtube.html id="4kXF6Pn-NJg" %}
</div>

---

## Exploring Different Sharing Models of Generative AI

The podcast highlights the range of sharing models for generative AI. At one end of the spectrum, there are open models where anyone can interact with and contribute to the model’s training. These models employ reinforcement learning, allowing users to input data and receive relevant responses. Conversely, some private models are more locked down and limited in accessibility. These models are suitable for corporate scenarios where control and constraint are crucial.

However, there is a blended approach that combines the linguistic foundation of open models with additional constraints and customization. This approach allows organizations to benefit from pre-trained models while adding their layer of control and tailoring. By adjusting the weights and words used in the model, organizations can customize the responses to meet their specific needs without starting from scratch.

## Operationalizing Gen AI in Infrastructure Management

The podcast delves into the operationalization of generative AI in infrastructure management. It highlights the advantages of using open-source models to develop specialized systems that efficiently manage private clouds. For example, one of the mentioned partners implemented generative AI to monitor and optimize their infrastructure's performance in real time, enabling proactive troubleshooting. By leveraging the power of AI, organizations can enhance their operational efficiency and ensure the smooth functioning of their infrastructure.

The hosts emphasize the importance of considering the type and quality of data input into the model and the desired output. It is not always necessary to train a model with billions of indicators; a smaller dataset tailored to specific needs can be more effective. By understanding the nuances of the data and the particular goals of the system, organizations can optimize the training process and improve the overall performance of the AI model.

## Managing and Fine-Tuning AI Systems

Managing AI systems requires thoughtful decision-making and ongoing monitoring. The hosts discuss the importance of selecting the proper infrastructure, whether cloud-based, on-premises, or hybrid. Additionally, edge computing is gaining popularity, allowing AI models to run directly on devices reducing data roundtrips.

The podcast emphasizes the need for expertise in setting up and maintaining AI systems. Skilled talent is required to architect and fine-tune AI models to achieve desired outcomes. Depending on the use case, specific functionalities may be necessary, such as empathy in customer service or creativity in brainstorming applications. It is crucial to have a proficient team that understands the intricacies of AI systems and can ensure their optimal functioning.

Furthermore, AI models need constant monitoring and adjustment. Models can exhibit undesirable behavior, and it is essential to intervene when necessary to ensure appropriate outcomes. The podcast differentiates between reinforcement issues, where user feedback can steer the model in potentially harmful directions, and hallucination, which can intentionally be applied for creative purposes.

## Getting Started with AI Models

The podcast offers practical advice for getting started with AI models. The hosts suggest playing around with available tools and becoming familiar with their capabilities. Signing up for accounts and exploring how the tools can be used is a great way to gain hands-on experience. They also recommend creating a sandbox environment within companies, allowing employees to test and interact with AI models before implementing them into production.

The podcast highlights the importance of giving AI models enough creativity while maintaining control and setting boundaries. Organizations can strike a balance between creative output and responsible usage by defining guardrails and making decisions about what the model should or shouldn't learn from interactions.

In conclusion, the podcast episode provides valuable insights into the operationalization of generative AI, infrastructure management, and considerations for managing and fine-tuning AI systems. It also offers practical tips for getting started with AI models in personal and professional settings. By understanding the different sharing models, infrastructure needs, and the importance of creativity and boundaries, organizations can leverage the power of AI to support digital transformation.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople process and technology.</p>
<p>On today's episode,operationalizing generative</p>
<p>AI with returning guest Dr.</p>
<p>Jeffrey Lancaster.</p>
<p>Jeffrey.welcome back to the show.</p>
<p>A number for the fourth time.</p>
<p>These are so much fun.</p>
<p>Darren I could we could do tons of theseand I'd be perfectly happy.</p>
<p>You know, we may we may call itthis is this is I think this would bethe almost the eighth c episodein a series on generative AI.</p>
<p>I love having you come in in betweensome of these othersbecause you and I are both generalists.</p>
<p>The other ones got very specificon very specific things,but today I actually want totalk about operationalizing Gen AIbecause I think there's this misnomer outthere.</p>
<p>It's just there, It's, it'sthis thing that we just useand that could be kind of dangerous.</p>
<p>Yeah, it's, it'swhen something is so magical,it's easy to oversimplify it.</p>
<p>Right.</p>
<p>And I think part of the decisionsthat leaders are going to have to make,you know, requiresa bit of understanding aboutwhat's actually going on under the hood.</p>
<p>And so you don't have to understand it.</p>
<p>And maybe at the level of, you know,what code is actually running, butyou do have to make some decisions aboutwhere do you want this to run,</p>
<p>Do you want it to runwithin your own infrastructure?</p>
<p>Do you want it to run withinsomebody else's infrastructure?</p>
<p>Do you want to have control overhow manyinputs are being broughtinto kind of updating the model?</p>
<p>Or do you want to put guardrailsonto the system that's been used?</p>
<p>So, you know, maybe what we could dois talk through some of those decisionsso that when people are kind of makinga case for leveraging some of these tools,they can already have thought out,okay, well,this is what we're going to need to do itboth responsibly but also securely.</p>
<p>And, you know, ultimatelyto meet the objective of whateverthe case, the use cases that somebodyis actually trying to accomplish.</p>
<p>I told you.</p>
<p>So let's startwith the three different category.</p>
<p>The categories.</p>
<p>No, they're really kind of three differentsharing models of Jenny Iright we got publicwhich is your chat JPT, Bard Cloudand then we've got communityand then we have Private</p>
<p>Jen AI sounds a lotlike what we did with Cloud.</p>
<p>We have Private clouds,we have public cloud.</p>
<p>There was this concept of community cloudsthat kind of disappeared.</p>
<p>But gov you could say</p>
<p>Gov cloud is a community cloud.</p>
<p>I guess. Yeah. Yeah.</p>
<p>So we're going to see the same thingin general.</p>
<p>I make sense.</p>
<p>So I'll be honest,</p>
<p>I'm not familiar with the community model.</p>
<p>I'd love to hear more about that, butyou know, the way that I think about it,you've got two ends of the spectrumand then something in the middle.</p>
<p>The one end of the spectrum is, like yousaid, there's open modelswhere anybody can interact with the modeland anybody is also kind oftuning the model because those models workthrough reinforcement.</p>
<p>So they're taking what people are asking.</p>
<p>They're taking people what they're taking,what people are generating,they're taking the responsesthat are being produced.</p>
<p>All ofthat is going back into the training,the large language model itselfto deliver relevant answers.</p>
<p>And so that's one end of the spectrum.</p>
<p>And the other end of the spectrumis a private model,and that's where you might really lockdown and limit maybe who has access to it,what data the model has accessto, you know, in terms ofwhen it's being trained,what it's being trained on.</p>
<p>And you really are being,you know, you're constrainingthe art of the possible in that case.</p>
<p>And so there that might be really usefulin a lot of industryor corporate scenarioswhere you don't want it to engagein a lot of lateral thinking.</p>
<p>You don't want it to engagein a lot of creativity or,you know, you just want thatconversational user interface.</p>
<p>Yeah, this is an</p>
<p>I've got a great point becausepopped in my head when you were talking.</p>
<p>If I put a Ginni AI on my chat botfor my customer serviceand I use a public one,that could be very dangerousbecause it could say,well,you should just buy this other productbecause it's more reliable,which is your competitor product.</p>
<p>But if I do a private Ginni, I,</p>
<p>I could put the guardrails in theresaying, push my product always, right?</p>
<p>Yeah. And you could even script it.</p>
<p>You can get to the point where you'realmost giving it the, the, the transcriptsthat you want it to produce and saying tryand keep, you know, this is this realm.</p>
<p>Okay?</p>
<p>So I can see I could see the benefit of,of the private.</p>
<p>Yeah, for sure.</p>
<p>Well the challenge with the private oneand I'll tell youthis, is that the computational overheadthat's already gone into the openmodels has already been done.</p>
<p>So to train opening.</p>
<p>Google to train them, that's important.</p>
<p>To train the model. That's right.</p>
<p>So they've already done the heavylifting to train those models.</p>
<p>If you go to a completely private modelwhere you might say, you know what,we want to build our own,you're then going to have to take onthat computational overheadin order to get to the pointwhere you have a large language modelthat you can use.</p>
<p>Now, luckily, there's that middle groundand this is kind of what I wastalking about.</p>
<p>You know, if this is a spectrum whereyou've kind of got a blended approach,and what that blendedapproach says is, okay, well,let me take the kind of linguisticunderpinnings that I get from thosepre-trained open models,but then layer on top of itsome constraints,and by layering on top of it,those constraints, you say, okay,</p>
<p>I'm not going to have to retrain my ownlarge language model, you know,which is going to take hours and hoursof compute time and generate a lot ofgreenhouse gas. Right.</p>
<p>Potentially.</p>
<p>I'm going to have to reproducewhat somebody else has already done.</p>
<p>But by giving an additional layerthat says these arethe ways that I kind of want to startto tweak some of the weights in the model,and I want to start to tweaksome of the words that can be used.</p>
<p>And andmaybe I don't want you to use these words,but I do want you to really prioritizethese words.</p>
<p>Then you can get to a pointin kind of tune that open modelto somethingthat actually meets your needs.</p>
<p>So like you said,you're not gettingyour competitors responses,but you're also not having to goand totally train winners. Okay?</p>
<p>So so that's really the only reasonableway you can move forward is to leveragemodels already out there.</p>
<p>There are several opensource models available.</p>
<p>That's right.</p>
<p>Lomita Or as I was corrected by my my teamdown in South America,</p>
<p>Yamaha yammer to Yammer.</p>
<p>So that's an open source model.</p>
<p>Very, very open source.</p>
<p>You can do whatever you wantwith that model as long as you'refollowingthe ethics involved in in in LMS.</p>
<p>That's right.</p>
<p>So I'm seeing people startingto use those models to developand put guardrailsor specialize the model on certain things.</p>
<p>Like on a previous podcastwhere I talked about</p>
<p>Gen AI in infrastructure management,we have a partner of oursthat is putting Gen AI on the front endof managing their private clouds.</p>
<p>Yeah, super cool, because now</p>
<p>I can ask my, my infrastructure,how are you doing today?</p>
<p>Okay, well, hey, I'm doing pretty good,except this one area is a little slowor I can say, well,what parts are slow and why?</p>
<p>Instead of having to learna bunch of commands and go throughwhat an incredible useof what I would call privatea private jet, I right.</p>
<p>Trained it for the type of work</p>
<p>I want it to do.</p>
<p>And it can.</p>
<p>And it's getting live feeds from my data.</p>
<p>And then that's you know,that's one of those considerationsthat people need to think through thatbefore you and I have talked about kind ofwhat data are you beingare you wanting to input into the model?</p>
<p>What data do you want to get out?</p>
<p>So if the type of datathat you want to input,which might be infrastructure sensor data,if that's not been part of the text modelthrough the image modelsor the video modelsor the music, you know,the ones that have already been done,you might have to do it yourself andthat's okay.</p>
<p>I think where, you know,where that gets really interesting is thenwhen you can start to say, okay, well,if I can't adapt to the types of modelsthat have already been produced,maybe I do have to go and train my own,but I don't need to train itwith as many signalsor as many features as what exists in.</p>
<p>Right.</p>
<p>To be.</p>
<p>Talking about.</p>
<p>Right. Exactly.</p>
<p>So you end up finding some middle groundand, you know, even even opening.</p>
<p>I had said there's not going to bea GPT five, that the way forwardis not to just add billions and billionsmore indicators within the model.</p>
<p>What they're really going to dois they have to start thinking through,okay, how can we better eitheradapt to the incoming datato get something that is useful?</p>
<p>How can we better adapt the outgoing,you know, whatever is produced inwhatever is generated.</p>
<p>So it's the current thinking,at least from a lot of the field isthe way forward isn't more and moreand more to expand.</p>
<p>And so people shouldn'tnecessarily be put off to say, okay, I'mgoing to have to train a model that has,you know, 100 billion.</p>
<p>Maybe my model only needs, you know,a few million or tens of millions.</p>
<p>It depends on the data that that's comingin. Okay.</p>
<p>So let's move towe talked about private I think</p>
<p>Private Jenny AI,lots of opportunities, right? Yes.</p>
<p>What about public it does it really havea place moving forward where everyonebecause you've got a lot of peopleyou talked about reinforce learningthat's happening when people interactwith charging CBT or Bard,the models changing and learning.</p>
<p>Do I want that too?</p>
<p>Is there aroom for is there room for a public</p>
<p>GenAI</p>
<p>In the future, what do you think?</p>
<p>I think it's a really good questionand you know,for instance, we talked aboutsome of the different use cases.</p>
<p>I'm writing emails.</p>
<p>I don't want a sandbox versionnow, you know, writing e-mail,maybe I want that broad modelif I'm writing,you know, a book for, for instance,</p>
<p>I don't want something that's locked down.</p>
<p>I want somethingthat's going to bring in moremaybe perspectives, more points of view,maybe more data.</p>
<p>So ultimately,</p>
<p>I keep coming back to the same thing,which is,yeah, there's a time and a place whereyou're going to want to constrain things,which might be brand identity, customerservice, you know, competitive, and.</p>
<p>Then other timeswhere you want to really broad.</p>
<p>Exactly.</p>
<p>And that's one of those early decisionsthat leaders are going to have to make, iswhat amount of flexibility do</p>
<p>I want the user to have in their system?</p>
<p>Do I want them to be able to tapinto a broad kind of brain trust,or do I want them to have kind ofa constrained knowledge base to pull from?</p>
<p>So to me,this is where community clouds fit in,and this concept goes way backto community grids.</p>
<p>Back in the early 2000s,when I was in the Global Grid Forum,there was this conceptthat communities would shareand I could totally see,especially in areas like medical,where doctors would share a community DNA.</p>
<p>I the doctors throughoutan organizationor even better throughout the countrywhere they're sharing a journeyto help do diagnosis.</p>
<p>Wouldn't that. And that. Ratable.</p>
<p>And that makes total sense.</p>
<p>Yeah and I think when.</p>
<p>You start because I don't want you knowsome punk like me putting inand putting in stuff and, you know,asking stupid questions that changes aa medical genAI but qualified doctorsthat are interacting with the gen</p>
<p>AI and sharing information.</p>
<p>What an incredible wayto share information with lots of doctors.</p>
<p>So that community I think, is going to bea really cool thing.</p>
<p>Well, and I think what you're getting atis almost a rolebased approachto who gets to retrain the AI.</p>
<p>So, you know,if I think about what's out there,if I think about the knowledge basesthat are out there,that might be the foundationfor a community modelyou brought up medical, right?</p>
<p>So there's going to be a lot of doctorswho might be interacting with it in a wayto help with a diagnosis,to help with a treatment plan, to helpgenerate thingswhich they then might decide to tweakbecause they went to med schooland did a residencyand are qualified to actually do that.</p>
<p>Where is I</p>
<p>When I'm looking at drug interactionsor I'm looking at something else?</p>
<p>You don't want the model to maybe adjustbecause of my dumb question.</p>
<p>That's exactly right.</p>
<p>Can I eat cheese while I'mon this medicine or whatever it is?</p>
<p>Like? That shouldn't influence the model.</p>
<p>And so I think what we're going to seeis in those community situationsthat certain usersare going to have different privilegesthan maybe a general public useralong the way.</p>
<p>Well, maybethey won't even have access to it at all.</p>
<p>That's right. Because ask any doctorthey wish that Web MD was not around.</p>
<p>And yet I've got all these symptoms.</p>
<p>I'm going to die in three.</p>
<p>No, you're not going to die.</p>
<p>You know, you have allergies.</p>
<p>But I mean, you know, on the flipside of that, I do wonderthe problem with the way that we interactwith like a WebMDis that when I get results,</p>
<p>I'm not also presented with well,there's also all these other conditionsthat have the exact same effect.</p>
<p>So I think he was right.</p>
<p>Yeah.</p>
<p>It's like you immediatelygo to that to the red alert,which is go to your doctor immediately.</p>
<p>But if I am getting some contextand say, okay, well hold on a second,only, you know, .05percent of the population has this,whereas 30% of the population has this,it might be more likelythat you don't needto have a large concern about this.</p>
<p>So go see your doctor.</p>
<p>Let me make an appointment for you.</p>
<p>You know, I do think tying togethersome of those different functionsand the different context,it still has a place here.</p>
<p>Okay.</p>
<p>We've talked aboutwe've talked about understandingthe the scope of public communityand private.</p>
<p>Let's talk about now as an organization.</p>
<p>How do I how do I manage these AIs?</p>
<p>Obviously, the public one,</p>
<p>I can't really manage, right?</p>
<p>It's public one.</p>
<p>I can have policy around it.</p>
<p>I can do that.</p>
<p>That's different.</p>
<p>Let's talk about managing my own GenAI</p>
<p>I or community AI that maybe I'm managing.</p>
<p>What operational things do</p>
<p>I need to worry about?</p>
<p>Well, there's less that to worry about.</p>
<p>But yeah, let's talk about the decisionsthat you're gonna want to make first.</p>
<p>So that first decision is probablywhere do I want this thing to live?</p>
<p>Do I want it to live in the cloud?</p>
<p>Do I want it to live on prem?</p>
<p>Do I want it to live in some hybridcombination of the two of those?</p>
<p>What I think is really interesting is do</p>
<p>I want it to live on the edge?</p>
<p>And this is, you know,you and I haven't really talked about whatthe future of some of this stuffis going to be yet, but it won't be longuntil the models and the compute necessaryto run some of these things is going to besubstantially smaller than it is today.</p>
<p>So is there a casewhere I might want it to run outon a devicewhere maybe it's not retraining the model?</p>
<p>There, but it's sending something back.</p>
<p>To all the information out there?</p>
<p>Exactly. Exactly.</p>
<p>And you don't need that roundtripmaybe to take place for the data,but you're getting the benefit of thaton a device,you know, maybe wherever you're located.</p>
<p>So first decision is, you know,in the cloud, on prem, some hybridinfrastructure.</p>
<p>Second decisionthat I would say that people have to make.</p>
<p>And when you say worry,this is really what I would worry about.</p>
<p>Do I have the peopleand do I have the talentthat can both set this thing upand also manage it?</p>
<p>So to expect this to bea, you know, a thingwhere it's out of the box,yet you plug it in and it just goes,that's not going to be, at least today,the way that many of these models work.</p>
<p>There is still going to be a matter ofam I stitching together different modelsbecause there might be differentcomponents that go into it.</p>
<p>There might be,you know, and a socio emotional componentof modelthat's specifically trained for empathy.</p>
<p>There might be a model that's specificallytrained for generating imagery.</p>
<p>There might be a modelspecifically trained for the conversation.</p>
<p>Okay. Soyeah, soa total solution is going to bea combination of models stitched together,probably with an overarchinginput model, an output model.</p>
<p>So it's it's not this big, huge</p>
<p>Goliath thing that handles everything.</p>
<p>In fact, we know we're chargingfor there's multiple models behind it.</p>
<p>It's it's parsing those things outbased off of the input.</p>
<p>So, okay, so there's some there'ssome architecture work that has to happen.</p>
<p>Absolutely.</p>
<p>Without a doubt.</p>
<p>You know, and I think that architecturework is got to be based onwhat is the outcome that you want,</p>
<p>You know,what is the casethat you're trying to solve for?</p>
<p>If you're trying to solvefor every possible use case,</p>
<p>I think you're really going to miss out.</p>
<p>I think if instead you're saying,you know, this is going to be a customerservice interface,this is going to be a toolthat my development teams can useto think broadly and to brainstorm.</p>
<p>Well, those two are very differentin terms of how you might set them upand you want to think through againthose guardrailsthat you want to put on something.</p>
<p>In one case,you might want it to have a lot of empathybecause you might want to say, I'mso sorry you're having that problem.</p>
<p>You know, let mesee what other people have encounteredin the past,whereas in a brainstorming app,you might want itto be much more kind of a cheerleader.</p>
<p>You say that's a great idea.</p>
<p>What if we also did thisand this and this?</p>
<p>Let's kind of expandthe conversation that way sothere's not going to be,</p>
<p>I don't think, a one size fits allthis is the way to do it,because everybody's going to tryand use it in a different way.</p>
<p>Gotcha. Gotcha. Okay.</p>
<p>So we talked about location, architecture.</p>
<p>Let's talk about a dirty little secret.</p>
<p>And that is my models getting sick there.</p>
<p>There's some great examples out therewhere guys were releasedand the trolls went crazy on themand they became misogynistic,bigoted, you foul mouthed, rude eyes.</p>
<p>I mean, that has yeah,we're not going to namethe two companies that that happened to,but it's happened right whenthey released out the out in the wild.</p>
<p>So what that tells me is chat</p>
<p>TVT or Openaiand Google,they actually have someone kind ofkeeping the health of the generative</p>
<p>AI healthy, right?</p>
<p>Because they can get sick,they can start making mistakes.</p>
<p>Hallucinations are a real thing,so you can't just leave them alone,it sounds like.</p>
<p>Is that sound right?</p>
<p>I think we have to be careful.</p>
<p>I would separate outthose two as two different issues.</p>
<p>One is in a few with reinforcement.</p>
<p>So depending on how muchauthorityyou're giving to the user to then buildthat reinforcement into the model,you mightthen get it steered in a directionthat you've seen a lot in the news.</p>
<p>That's going to be really differentthan the level of hallucination,which in some casesyou might want a lot of hallucinations.</p>
<p>So I don't want peopleto think of hallucination as a bad thing.</p>
<p>We don't want to think of that creativitythat's brought to itnecessarily as somethingwhich is a flaw in the model.</p>
<p>It's not a flaw.</p>
<p>It's actually a feature,but it's a feature that you can tuneand you have to be really intentionalabout how you tune that feature.</p>
<p>Because if you sayif you if you ignorehow much hallucination you wanted to have,then you're going to get answersthat you're not expecting.</p>
<p>But again, those two different scenarios,customer service versus,let's say, brainstorming, brainstorming,you might want a lot of hallucinationbecause you're like, Give me crazy ideas.</p>
<p>I'm going to be able to figure outwhat's what customer service.</p>
<p>And this is maybe counterintuitive.</p>
<p>You wouldn't want it to have zerohallucination because how often doessomebody call a customer service lineand know exactly what the problem is?</p>
<p>Rarely.</p>
<p>More often than not, somebody says,you know, this is what's going on.</p>
<p>Like it's not working.</p>
<p>The way that it's supposed to.</p>
<p>It's doing this and this,and you want it to still havea little bit of creative freedomto start to address and get to a pointwhere you can actually diagnosewhat the issue is that's going on.</p>
<p>So you're not mayberamping up the creativity all the waybecause you don't want them to say, oh,you know,you need to take your cat outside.</p>
<p>And that's the problem that will fix it.</p>
<p>But you do still want to give it enoughwhere it's not going to requireexactly saying something in a certain wayto be able to get to the answer.</p>
<p>Okay.</p>
<p>So I love I love how you differentiatethe two hallucinations.</p>
<p>A is the creativity part of the</p>
<p>I want that,but I want to be able to adjustthat as I need to.</p>
<p>Right? Yeah.</p>
<p>The other partwhat we talked about is the A.I.model, learningfrom interacting with people.</p>
<p>That's where it can get sick, right?</p>
<p>That's very sick based off ofthe interactions it's having with peopleand how much weight you give thatinteraction to adjusting one.</p>
<p>So there'sguardrails that you want to put in place.</p>
<p>You might say, You know what,</p>
<p>I don't think our customer,you know, that initial promptshould be rolled into the model.</p>
<p>I'm going to wait for,you know, some log data.</p>
<p>I want to go back and look at itand I want to see how people are actuallyusing.</p>
<p>Or exclude curse wordsfrom infiltrating the model,because you really don't want your A.I.cursing back at people.</p>
<p>Exact curse words, but also topos.</p>
<p>So you can say, okay, in, you know,you might plug into a knowledge basethat has a very, very broadknowledge graph,but within that knowledge graphyou might cut off certain connections.</p>
<p>Say, you know, I don't want you to bringup anything having to do with religion.</p>
<p>I don't want you to bring up anythinghaving to do with politicsor anything like that or you might say,</p>
<p>You know what,</p>
<p>I want to limit this to religion.</p>
<p>Maybe you're building somethingthat's a, you know, a modern confessionalfor the church or something like that.</p>
<p>Like they're, you know, again,it's a decision that has to be made.</p>
<p>But you want to know going into it,these are some of the decisionswe're going to have to agree onbefore we just dive in and start buildingand, you know, limitingeven what can be broken.</p>
<p>So it's really interesting to mebecause the A.I.model itself is changingright?</p>
<p>So does it make sense at allto snapshot these modelsor version control them, saying,</p>
<p>I really like this model the way it is?</p>
<p>I want to take a snapshot of it,put it over here, have it, keep learning.</p>
<p>But I really if I want to, I can go back.</p>
<p>What what I think you're getting atand then whatthe next logical step of that might beis the personalization of the model.</p>
<p>Okay, so, you know, it won't be long.</p>
<p>And this is where some of the dialogtracking in the dialog trackingcomes into playwith something like Chatbot, for instance,you can get it to rememberall of the thingsthat you've already talked about,which might includesettings or tone or waysthat you want it to interact,and you can actually encapsulatethat into a personality.</p>
<p>Now you and I might each wanta different personality to interact with.</p>
<p>Now, in reality, what thatis, is that's a differentkind of snapshot of the model,but really it's kind of a differentimplementation of the way that it'sgoing to interact with your account.</p>
<p>Almost likepre configuring the model to interactand engage with you in a certain way.</p>
<p>So could it not be long until each of ushas a different role modelthat we're interacting with?</p>
<p>Absolutely. Yeah. No, no, I can see that.</p>
<p>And it can keep state right on that.</p>
<p>I give it a name of a persona.</p>
<p>Hey, this is this is Darren.</p>
<p>Yeah.</p>
<p>And hey, anytime you interact with Darren,</p>
<p>I want you to respondin this tone, right?</p>
<p>Yeah.</p>
<p>And today I want to</p>
<p>I want to talk to this personality maybelater today I want to talk to a different</p>
<p>I can because.</p>
<p>Yeah, I can totally see a new branchof psychology coming out of this.</p>
<p>Well, and it's, you know,it still does require the userto do a little bit of that thinking.</p>
<p>Yeah.</p>
<p>Because yeah, maybe I want a personality.</p>
<p>You know, on the one handthat's really goodat writing scientific articles,you know, that has that language,that knows the kind of way to speak infor a scientific journal.</p>
<p>But then later maybe I'm doing somethingwhere I want somebody who'screative and supportive and, you know,maybe that's a different tone.</p>
<p>And so that might be a different settingthat I could use when I then go to engagewith the tool, then.</p>
<p>Okay, so this is interesting because Icould do that at a company level too, so.</p>
<p>That's right.</p>
<p>So there is operational</p>
<p>I have to interact with this.</p>
<p>I have to operationalize it,</p>
<p>I have to use it.</p>
<p>It's just I'm going to be using itdifferently than I've I've doneother things like I find in my databasesfor the type of work it needs to do.</p>
<p>I can find to my my,</p>
<p>I to do the same by creating personasor creating my own modelseither way, based off of a public model,let let'slet's tie this whole altogether in ain a nice tight bow.</p>
<p>How do I get started?</p>
<p>Where do I go?</p>
<p>I mean, where do I go to get started forfor my for my company or for mepersonally?</p>
<p>Yeah. Great question.</p>
<p>So those are going to be two differentanswers, right?</p>
<p>So if I'm going to startusing this for myself personally,my recommendation is gostart playing with the tools.</p>
<p>You know, again,depending on what you want to do,get some of that usage under your belt,go out, sign up for a</p>
<p>GPT account, go out, sign up for Bard,or start using it in your search.</p>
<p>Go out and sign up for mid journeyor daily, you know,see what the tools can do.</p>
<p>Because once you understandwhat the tools cando, you're going to better be ableto formulate the question that you want.</p>
<p>When you go to do this for your company.</p>
<p>You know, you don't want to start dumpingyour company data into those open models.</p>
<p>We've seen that not go well.</p>
<p>So you want to havea little bit more discretionand maybe thought put into itbefore you set that up.</p>
<p>What a lot of companies are doingis they're building a sandboxwhere people can go and playwithin kind of a safe space.</p>
<p>That's my recommendation for a first step.</p>
<p>Before you jump to implementinga production environmenttest it out, see how people use it.</p>
<p>Let people interactwith whatever you builtso you can see are thereother considerations that we might needbefore we get to the pointof releasing this into the wild?</p>
<p>I Great, great, great advice.</p>
<p>Jeffrey, as always, it's fun to talk.</p>
<p>It's fun to go through these things.</p>
<p>We most definitelyare going to have you backand keep keep listen to the show on.</p>
<p>Jenny I it's a hot topic.</p>
<p>We cover hot topicsso thanks again, Jeffrey.</p>
<p>Thank you, dear.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org Until nexttime, go out and do something wonderful.</p>

</details>
