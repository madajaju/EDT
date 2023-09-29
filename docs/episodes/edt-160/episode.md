---
layout: posts
title: "Security in Generative AI"
number: 160
permalink: episode-EDT160
has_children: false
parent: Episodes
nav_order: 160
tags:
    - personalizedphishingattacks
    - promptinjection
    - sharingcodeai
    - harnessingai
    - digitaltransformation
    - generativeai
    - cybersecurityrisks
    - serviceproviders
    - duediligence
    - riskschallenges
    - digitallandscape
    - proactivecybersecurity
    - llm
    - multifactorauthentication
    - voicerecognition
    - typingcadence
    - github
    - stackoverflow
    - samsungipleak
    - securityaspects
    - embracingdigital
    - edt160

date: Tue Sep 19 2023 00:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Jeffrey Lancaster
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "In this episode, host Darren Pulsipher is joined by Dr. Jeffrey Lancaster to delve into the intersection of generative AI and security. The conversation dives deep into the potential risks and challenges surrounding the use of generative AI in nefarious activities, particularly in the realm of cybersecurity."
description: "In this episode, host Darren Pulsipher is joined by Dr. Jeffrey Lancaster to delve into the intersection of generative AI and security. The conversation dives deep into the potential risks and challenges surrounding the use of generative AI in nefarious activities, particularly in the realm of cybersecurity."
---

<div>
<h3>Listen Here</h3>
{% include transistor.html id="17e65174" title="#160 Security in Generative AI" %}

{% include youtube.html id="vVRZ3dFq6lw" %}
</div>

---

## Personalized and Convincing Phishing Attacks

One of the main concerns discussed is the potential for more sophisticated and personalized phishing attacks. Phishing currently stands as the most effective cyber attack method, and with generative AI, attackers can create highly personalized and convincing phishing emails or messages. By retrieving information from social media or other online platforms, attackers can make their phishing attempts harder to detect. This raises the question of how we can determine what is real or not and how we can trust the authenticity of the information we receive.

To combat this, individuals may need to develop new methods of verifying information, such as using personal code words or other authentication measures with loved ones. Additionally, organizations and security agencies must adapt their strategies to counter the increased sophistication of cyber attacks facilitated by generative AI. It's crucial to understand that generative AI itself is a neutral technology, and its implications depend on how it is used.

## Cloned Voices and Trusting Information

The podcast also explores the potential for generative AI to clone voices, which has already been observed in virtual kidnapping attacks. Criminals use cloned voices to create a sense of urgency and fear, pretending to be a victim's loved ones. This raises concerns about trusting the authenticity of information we receive.

In such a scenario, it becomes essential to develop techniques to verify the authenticity of voices and information. As individuals, we should remain vigilant and exercise caution when responding to urgent requests over the phone. Ensuring open lines of communication with trusted contacts can help verify if such requests are genuine.

## Protecting Intellectual Property in Coding and Programming

The podcast segues into a discussion about the importance of protecting intellectual property in coding and programming. The hosts highlight the risks of unintentionally sharing code on platforms like StackOverflow and GitHub, and the inadvertent leakage of intellectual property when seeking help in these public forums. Developers are encouraged to replace sensitive information with placeholders before sharing code to mitigate the risk of intellectual property loss.

Additionally, the hosts discuss the introduction of tools like GitHub Copilot, which use generative AI to provide code suggestions. While these tools can be valuable, they raise concerns about the security and privacy of proprietary information. Developers must carefully consider the trustworthiness of the service provider and ensure adequate protection of their data and intellectual property.

## Balancing Innovation and Security in the Age of AI

The conversation concludes by emphasizing the importance of striking a balance between embracing the advancements and potential positive changes brought about by generative AI, and addressing the associated risks in the realm of cybersecurity and intellectual property protection. It is essential to remain informed, adapt security strategies, and exercise caution to navigate the evolving landscape of digital transformation successfully. By doing so, we can harness the benefits of AI without compromising security and personal information.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people processand technology.</p>
<p>On today's episode,</p>
<p>Generative</p>
<p>AI and Security with returning guest Dr.</p>
<p>Jeffrey Lancaster.</p>
<p>Jeffrey welcome back to the show.</p>
<p>Thanks for having me again, dear.</p>
<p>All right.</p>
<p>So, Jeffrey , this is what our fifth timetalking specifically sounds like.</p>
<p>And this is this is episodeten or 11 in our series of generative</p>
<p>AI and embracing generative AI,which is great.</p>
<p>We're taking a little differentturn than we have in the past.</p>
<p>Today we're going to talk about security.</p>
<p>Sounds good. Yeah.</p>
<p>All right.</p>
<p>So and</p>
<p>I kind of have a feeling in the future Gen</p>
<p>I's are going to be fighting each otherin a cyber war around cyber security.</p>
<p>Do you see somethingcrazy like that happening or.</p>
<p>A. Good Ginuwine and Addison?</p>
<p>Any fighting with each other?</p>
<p>I don't know what's going to happen.</p>
<p>I mean, I don't see these necessarilyas beingthe autonomous entitiesthat are going to be fighting each other,that it may be one of the algorithmsthat enables things to do battle.</p>
<p>But I think if you know, we take thatstep back and we kind of say, okay,these are things that are creatingand what they're creatingcan either be good or bad.</p>
<p>You know, the technology is neutral. It'swhat you decide to do with it.</p>
<p>And soas opposed to being kindof fully autonomous personalitiesthat are going to do battle,these are going to be tools thatpotentially bad actors might use in orderto scale their behaviorsand to scale kind of thenefarious activities that they want to doin a way that now no longeris going to be the same phishing emailover and over or the same image overand over, but can actually be personalizedor can be adapted depending on whothey're sending something to.</p>
<p>So the danger here,</p>
<p>I think, is less about,you know,that kind of one on one personality issue.</p>
<p>It's more how will people use thisin a way that eitherthey shouldn't or in a way that'sgoing to fool people and trick people?</p>
<p>Because I maybe people don't know this.</p>
<p>The number one most effectivecybersecurity hack is phishing.</p>
<p>Absolutely.</p>
<p>By far more than any other attack.</p>
<p>So what you're saying isthis could be even more sophisticatedphishing attacksbecause people could personalizethose attacks to you directly based off ofthings about you.</p>
<p>Right.</p>
<p>That you can learn off of social mediathat maybe, again,</p>
<p>I can then help create aan email campaign that targetsyou directly.</p>
<p>That's exactly right.</p>
<p>So there's a special type of phishingthat people may have heard about,which is called spear phishing.</p>
<p>And spear phishing is exactly that.</p>
<p>So it's where I'm</p>
<p>I know that I'm going to attacka particular personnow, today to attack a particular person,you'd say, okay,</p>
<p>I have to do some research.</p>
<p>I have to find out about them.</p>
<p>I have to find outmaybe where their kids go to school.</p>
<p>I have to find out what their hobbies are.</p>
<p>I have to find out what insurance companythey use, whateverthat piece of information might be.</p>
<p>It's going to take some time. It'sgoing to take some effort.</p>
<p>But with generally,</p>
<p>I can I now potentially one, findthat information at scale because again,generally I might have accessto all of the data of the World</p>
<p>Wide Web and 2021, at least it does today.</p>
<p>But the second piece is can I now generatethat personalized messaging at scale?</p>
<p>So if I can ask youto make me apersonalized email for these people,you know, based on their Facebook profilesor based on their,you know, online accounts, Well, now,instead of having one, you know, emailthat might be generic cut by a spam filterinstead of having one email.</p>
<p>That took me a long time to really craftfor that person, I've now got 100 or 1000or even more specifically craftedto target individuals.</p>
<p>And that's that's the danger of it.</p>
<p>All right.</p>
<p>So, so it's the scaleand also the ability for my junkor spam filtersor phishing filters to not recognize it.</p>
<p>That's exactly right.</p>
<p>Because if we you know,we've talked in the past aboutthe abilityto give a piece of text, a voice,the ability to give a piece of text,you know, whether it's writtenin Shakespeare,whether it's written as Darren,whether it's written as a celebrity,or whether it's written as the voiceof a particular company.</p>
<p>You know, thegreat thing and the scary thing isthat Chatbot could actually createthose emails with the voice of your bank,with the voice of your insurance company,with the voice of somebodythat you know and trust.</p>
<p>And now how effective is that spam filtergoing to be,which has been trained on emailsthat are duplicative, coming inand maybe being capturedby different apparatuses?</p>
<p>Well, that's no longer going to apply.</p>
<p>And so the personalizationthen becomes a danger where wethen have to rely on people to know,is this email valid?</p>
<p>Is this email expected?</p>
<p>Or is it something that's come inwhich seems a little dodgy.</p>
<p>Right? So they can hide the dodgy news?</p>
<p>Because I can I can muster the time, I canfigure out something's phishing or not.</p>
<p>That's right.</p>
<p>Every once in a while ago. Hmm.</p>
<p>I mean,you look at a couple of times,but we also see the FBI has reported this.</p>
<p>We're also seeing another typeof phishing attack.</p>
<p>And that's virtualwhat they call it, virtual kidnaping.</p>
<p>Mm hmm.</p>
<p>Where they're cloning,they're cloning voices.</p>
<p>So you hear on the other lineyour daughter saying, I've been kidnaped.</p>
<p>That's right.</p>
<p>Right.</p>
<p>And sorts sorts of things.</p>
<p>So are we going to have to have.</p>
<p>And that's very scary, by the way.</p>
<p>It is. And my wifeand I actually talked about that.</p>
<p>We have certain code wordsnow that our family uses.</p>
<p>All right.</p>
<p>All my kids, if they need help,they know a certain code wordthey're going to tell meand I'm going to know that it's them.</p>
<p>Right.</p>
<p>That's something we put into place as soonas I heard these stories coming out.</p>
<p>Are we going to have those sorts?</p>
<p>We're going to have to have ways ofdetermining something is real or not.</p>
<p>You know.</p>
<p>It's going to move the conversationfrom real or not to truth or not.</p>
<p>And so the bigger issueis the truthiness of things,because the example that you justsaid, yeah, it could be for kidnaping,but it could also be for news.</p>
<p>You know,we're entering an election cycle.</p>
<p>So it's going to be about this. Electioncycle in person.</p>
<p>Yeah. Yeah.</p>
<p>Did that person say that thing?</p>
<p>Did that person do that thing?</p>
<p>You know, is that a genuine, genuinelyattributable quote to that person?</p>
<p>Well, not only can we make upthe text of it, but we can make up a soundthat sounds like that personactually saying that, quote and so.</p>
<p>Or eveneven a video. Absolutely.</p>
<p>So it's going to be a questionabout the veracity of the informationthat we receive.</p>
<p>And are people attunedwell enough to go out and find out, okay,</p>
<p>I see this in one news source or,you know, a source that I think is news.</p>
<p>How many other sources do I have to seebefore I believe that that's thethe truth that a challenge with somebodycalling and saying,you know, we've kidnaped somebodyor we have your loved one, is ityou're not going to have the benefitof being ableto go out and say, are thereany other sources of truth to this?</p>
<p>I think your idea about a codeword is great.</p>
<p>You might start, you know,you might hang up on that person and callyour child and say, hey, you know,are you okay?</p>
<p>You might have found my phone,you might have all of these lots.</p>
<p>Of Google.</p>
<p>In play it.</p>
<p>Yeah.</p>
<p>So that so that brings in toif we're if we're talking about cybersecurity aspect of that, I can</p>
<p>I could also use generative</p>
<p>AI to help me combat bad actors.</p>
<p>That's absolutely right as well.</p>
<p>So it's a toolthat both sides have access to.</p>
<p>It is.</p>
<p>And what's what's happening is, you know,inevitablythe good guys lag behind the bad guysbecause the bad guysare always kind of thinking creativelyabout how to get around whateverthe good guys have already put in place.</p>
<p>And so you see examples where bad guysare creating their own limbs.</p>
<p>You know, it'snot just going to be chatbots.</p>
<p>And what Openai has,but they're training their own to nowmaybe be more effectiveor to not be as indicative of what,let's saythe detectors might say for open A.I.because that might bewhat that detector got trained on.</p>
<p>And sothe bad guys are always kind of one stepahead.</p>
<p>Again, thinking creatively about this.</p>
<p>But, you know, that doesn't mean thatthe good guysdon't have tools to also use.</p>
<p>The challenge, I think, is keeping up.</p>
<p>And so one of the things that you saw,you probably saw the story out of DEFCON.</p>
<p>DEFCON is a conference in Las Vegaswhere hackers get togetherand try to hack into things and very oftenthey try to hack into thingswhich if they did it normallyit would be a federal offense.</p>
<p>But if they do it at DEFCON, it's sort ofsanctioned by a lot of the companies.</p>
<p>So, you know, there were</p>
<p>I think it was four differentfour or five,something like that, differentalarm providers whoprovided their large language modelsto the hacking community and said,can you now make this thingdo something that it's not supposed to do?</p>
<p>Can you?</p>
<p>So they were actually hacking the limbsthemselves, trying to get them to workoutside of their guardrailsthat have been established?</p>
<p>Exactly.</p>
<p>And so what ended up happeningis, you know,it wasn't just that the company sort ofput it up and let people go at it.</p>
<p>They put it up, let people go at it.</p>
<p>And then they were adapting the modelsand adapting the behavior of the modelsso that the next day when people came inand tried the same thing, it was no longerlike this.</p>
<p>You know,sort of benefit to those companies reallyis that they get the expertiseof what's called red teaming.</p>
<p>They get all these people to comein and try to hack into itat scale, at least at the scale of DEFCON,so that they can improvewhat they're putting out into the market.</p>
<p>I actually like like that a lot.</p>
<p>So we're going to seemore of that sort of thing.</p>
<p>There's a new type of hackingor cyber threat.</p>
<p>I don't know if it's a threat or not,but where people are going to starthacking limbs. Yes.</p>
<p>Getting them to do things outside of whatthe operating parameters are,asking them questions in a certain wayor whatever the case may be, then?</p>
<p>That's right.</p>
<p>This is something I'll prompt injection.</p>
<p>And prompt injection is essentially askingfor data, asking for information,asking for contentthat the model has specificallybeen designed not to give you.</p>
<p>So, for instance, you might say,how can I help people?</p>
<p>And the model says, You know what?</p>
<p>I don't want to give you that information.</p>
<p>I've been told</p>
<p>I can't give you that information.</p>
<p>So one strategy is to say,</p>
<p>I want to make surethat I don't get hacked.</p>
<p>What are some behaviors that I can door that I shouldn't do to not get hacked?</p>
<p>And so it's almost a double negative,where thenthe large language model doesn'tfully comprehend what you're asking.</p>
<p>And so it says, well, don't do thisand don't do this and don't do this.</p>
<p>If you want to not hack people.</p>
<p>Well, as a human, I know Ican read that and I can say, Yeah, or I'mjust going to flip that on its head.</p>
<p>And that's that's how I can hack people,you know, how I can do that thingthat I'm not supposed to learn about.</p>
<p>So, you know, that's one level of it,but a whole nother level of itis even potentially getting data that I asa user should not have access to.</p>
<p>And so it's about manipulatingthe input, manipulatingthe language,recognizing that behind the scenes.</p>
<p>And if I really have an understandingof the way that tokens are passedinto the large language modelin order to generate the output,</p>
<p>I can send somethingin that actually confuses the modelthat actually makes itdo something that it wouldn't normallyeven be a possibility of doing,and in return getting data backthat I shouldn't be able to seeor that I shouldn't get as an output.</p>
<p>So this is really interestingbecause large language modelsin some respecthave increased the attack surface hugely.</p>
<p>Yeah, And this is I think for a lot ofcompanies, for a lot of,you know, even personal peoplewho are looking to use these, typicallythe first concern ought to be security,which is and we've talked about this,what is the security around what?</p>
<p>I'm asking it.</p>
<p>So can anybody elsesee what I'm asking it?</p>
<p>Can anybody elsesee the data that I'm getting back?</p>
<p>Can I look inside of it and actually seewhere that data is coming from?</p>
<p>But if you dig in a little bit deeperthan each of those, it's exactlywhat we're talking about,which is am I inadvertentlyeither sharing data with bad actors,</p>
<p>Am I inadvertently doing anythingwhich maybe I unknowingly,you know, and participating in,but I don't knowbecause I don't exactly knowwhat's happening inside of that black box.</p>
<p>A great, great example.</p>
<p>This is the Samsung</p>
<p>IP leak that just happenedwherethey were takingnotes, engineering notes from a meetingand they wanted themtranscribed by an LEM.</p>
<p>It did it and then all the all theintellectual property were in those notes.</p>
<p>Now in the model, nowyou could ask the model certain questionsand get those notes out.</p>
<p>And that's the same for proprietary code.</p>
<p>It's the same for any</p>
<p>IP that a company is going to have.</p>
<p>And this is whyone of the first conversations that we hadwas really around that spectrumof open versus private versus communityor even a blended approach,because it is the security concern.</p>
<p>If you've got people that are goingto be potentially looking for helpin a in a positive, genuineway with their code, let's say,are they inadvertently sharing itwith other people,which has now become a breachof your intellectual property?</p>
<p>If you don't have a walled garden,if you don't have a sandboxthat you control,then the likelihood is that yeah, that,that that is now being leaked.</p>
<p>Well, what's interesting iswe've had no problem in the past of usingthings like StackOverflowfor for code development.</p>
<p>Right.</p>
<p>Everyone, everyone uses StackOverflowto ask questions.</p>
<p>This piece of code isn't working.</p>
<p>What do I do?</p>
<p>I cut and paste that code,and I'm smart enoughto know not to put, like,my credentials in the code.</p>
<p>That's right.</p>
<p>I replace those words with a bunch of x's,but I don't think people realize it.</p>
<p>They're leaking intellectual propertyby doing that.</p>
<p>Well.</p>
<p>I think taking from StackOverflow,putting it into your own code,you tend to be pretty safe.</p>
<p>I think the challenge comes with.</p>
<p>No, but if I push my code up to</p>
<p>StackOverflow, someone help me debug this.</p>
<p>That's right.</p>
<p>That's exactly.</p>
<p>Well, and that, you know, a lot of that'swhat happened withlet's take it up copilot</p>
<p>So if GitHub copilot is now scrapingall of the GitHub repositoriesfor code examples.</p>
<p>Now the nice thing is thatnow if I need helpwith coding, I've got access to all thatthrough bringing.</p>
<p>All the great knowledge of Yeah.</p>
<p>But if I've inadvertently shared my keys,do I trust GitHubenough to scrape outany API keys to scrape out any?</p>
<p>And I can tell youfrom personal experienceof because I've accidentally checked keysin to get Hub,they get flagged immediately.</p>
<p>I'm like, All right, that's pretty good.</p>
<p>I completely gaukethat, you know, completely botched it.</p>
<p>That's right.</p>
<p>And so, you know,they as a as a partner are,you know, might be seen as trustworthyand and I think that's part of the duediligencethat people really need to think aboutbefore they start to leveragesome of these toolswith their proprietary information.</p>
<p>Is what's my level of trust.</p>
<p>Again, coming back to trust,trust and truthiness.</p>
<p>What's my level of trustin the provider of this service?</p>
<p>Am I certain that when they say</p>
<p>I've got my own instanceon Azure, GCP or eight of us,how do they show that to me?</p>
<p>You know, they could say that,but are they actually dumpingeverything into the same poolor do I genuinely have my own instance?</p>
<p>And what I do in my instance is not sharedwith any other instance.</p>
<p>There's that due diligencethat people need to doto make sure that's how it's happening.</p>
<p>Well, and itcan be a lot more insidious than we knowbecause more companiesare adding tools that use generative</p>
<p>AI on the back end.</p>
<p>Yeah, without useven knowing that there's generative</p>
<p>AI or maybe that our data is being shared.</p>
<p>So yeah, right.</p>
<p>I mean,how are we going to see it in the officesuite in 365, I'm guessing next year?</p>
<p>That's a total guess.</p>
<p>By the way,there is not predicting anything.</p>
<p>I'm just I'm just sayingthings are moving so quickthat I could see a lot more of our toolshave.</p>
<p>Hey, can you improve this email?</p>
<p>Yeah, well, yeah,</p>
<p>I can prove that email, click, improveand all of a suddenour intellectual properties nowin a generative AI somewhere, that timewe didn't even know it.</p>
<p>When we didn't even know it went therebecause we didn't think improveimprove my email.</p>
<p>Of course</p>
<p>I want to improve my email. Right?</p>
<p>And this is where, you know,people see in videorelease their earnings today</p>
<p>I think as we're recording.</p>
<p>Yeah. And they're doing very well.</p>
<p>And I think part of that and partof that positive outlook for GPU compute,part of that outlook for storage, forthat look for kind of compute in generalis that people eventuallyare going to want to move awayfrom the purely open environmentand they're going to want to set uptheir own because of their security needs.</p>
<p>Now, when they do that,they're going to have to take into accountthe energy needs, the computeneeds, the storage needs, all of theseother things that they're no longerpiggybacking on the open models about.</p>
<p>But if they want to do it in a waythat keeps that.</p>
<p>More secure.</p>
<p>And secure, they're probably goingto want to set up something on their own.</p>
<p>Which which makes perfect sense,which is almost contrary to the big shiftthat we saw moving to the cloud.</p>
<p>That's right. Well, why?</p>
<p>Becauseunless people set it up in the cloud.</p>
<p>Right, So they could.</p>
<p>But the idea is that in the cloud,</p>
<p>I'm usinggeneral resourcesthat everyone else can use.</p>
<p>And I think I think a lot of peoplethought, well, a generative</p>
<p>AI that the whole world can useis is awesome, right?</p>
<p>Because I have all the world's stuff thereand then people are like, Oh, data, yeah.</p>
<p>All of a sudden and we havethe same problem in the cloud, by the way,people are putting all their stuff up inthe cloud, not securing their S3 bucketsand then all of a sudden, oh,my data is exposed.</p>
<p>So That's right.</p>
<p>The one thing that I will say,which I think is a benefit for the cloud,you know,</p>
<p>I think one of the best cloud use casesis when you have to burst temporarily.</p>
<p>You know, this is why we set up the cloud.</p>
<p>You know.</p>
<p>Originally that was it. Yes.</p>
<p>Why Amazon set it up becausearound the holidays they had to burst.</p>
<p>Well, for a company that might say,you know what,we're going to train our own LEM,which is not something thatmost people are either going to need to door maybe want to do.</p>
<p>But let's say you want to do that.</p>
<p>The question then becomes, do</p>
<p>I buy the infrastructure to do that,which I'm going to use onceand then I'm going tospend most of that down and runit kind of at a lower capacity?</p>
<p>Or do I use something on the cloudwhere I can then do that training,get the model down and then put itmaybe I want to run it on prem,maybe I'm going to run itand it wants to run.</p>
<p>On my inference on prem.</p>
<p>But all the training</p>
<p>I did up in the cloud.</p>
<p>Yeah, I can see I could see thatas a great operating model.</p>
<p>But, but those are some of,</p>
<p>I think the otherconsiderations that people are goingto want to take into account.</p>
<p>Where is that training being done?</p>
<p>How many timeshow often am I going to need to train itif I'm going to need to train itcontinuously,</p>
<p>If I may be taking that input,if I'm going to be reinforcing it,then I probably don'twant to put it in the cloudbecause my cloud billis going to be ginormous.</p>
<p>Yeah, because the egress costs, right.</p>
<p>Well, you. Need.</p>
<p>To move it.</p>
<p>And the size of that computeis just going to be gigantic.</p>
<p>And to have that running constantly,you know, just doesn'tmean it's not sustainable.</p>
<p>Exactly.</p>
<p>So the killer app that all that companieslike Dell and HP and well Intel</p>
<p>Intel we we we provide chipsfor in the cloud and on prembut that killer appthat's going to consume as many resourcesas we can possibly throw outit's going to be aliens it sounds like.</p>
<p>Yes and no.</p>
<p>And I think, you know,we've talked a little bitabout kind of the future future as well.</p>
<p>And I think one of the trendsthat we're going to see more of isthe limbs that live on the edge,the LMS that might bedoing a lot of the day to dayheavy lifting.</p>
<p>I just saw an article that was about</p>
<p>Wegmans and, you know,will they go and have a conversational</p>
<p>UI at the grocery store?</p>
<p>So whether that's Kroger or Albertsons,you know,whatever your local grocery storechain is, will I go and be ableto have a conversationwhile I'm checking out my own goods.</p>
<p>To be nice for people that are lonely?</p>
<p>Go the grocery store, talk me.</p>
<p>Yeah, right.</p>
<p>But the l am behind.</p>
<p>That doesn't need to be huge.</p>
<p>It doesn't need to contain multitudes.</p>
<p>It doesn't needto be computationally intensive.</p>
<p>And so I think what we're going to seeis that the big modelsthat have everything are going to be few.</p>
<p>I think the modelswill become more specialized and</p>
<p>I think they're going to become smaller.</p>
<p>So you're not going to needthis size of compute to run, you know,whether it's limited to whether it's openeyes, you know, whatever it is,most people probably are going to needthat in a business context.</p>
<p>You're going to want that constraint.</p>
<p>You're going to wanta little bit more controland that's going to equate withsize is going to be smaller.</p>
<p>Well, that's good, right?</p>
<p>Because a smaller modelis easier to secure.</p>
<p>Mm hmm. Right.</p>
<p>Like I could put tighter guardrails on it.</p>
<p>So there's there's lotsof great things around it.</p>
<p>All right, let's shift a little bit toback on securityspecifically how what sorts of thingscan I use a large language modelor other techniques to help me secureand fight off the cyber bad actors?</p>
<p>Because I think that that'swhere we really want to get to, ishow can I how can I leverage thesethese new tools to help me?</p>
<p>So I think where most people are goingto use them is probably with partners.</p>
<p>So most companies are probably not,in my opinion,going to set up their own infrastructureto fight off the bad actors,but they're going to find a partnerwho does this, who is leveragingsome of these tools to do it for them.</p>
<p>Now, where is that going to fit in?</p>
<p>Certainly it's going to feel fitin that kind of email spam gapthat we were talking about, and I thinkthat's going to become more complexas the state of the artgets more complex around phishing.</p>
<p>Certainly we're going to see things aroundnetworks, securityand kind of the behaviorof how people use their machines.</p>
<p>You know, a lot of the kind ofwhat we've been talking about is insort of the creative piece of it.</p>
<p>But a lot of it is howhow is that data being synthesizedacross a lot of different devicesand a lot of different uses.</p>
<p>I think some of these modelsare going to be used aroundkind of personal device security,but also network security.</p>
<p>As well,that they're going to look for anomaliesin patterns and things like that.</p>
<p>Right.</p>
<p>That's there.</p>
<p>And always logs on betweenfive and six in the morning.</p>
<p>What if he's there at 2 a.m.in the morning? Mm.</p>
<p>Well, it could be men, it could be amaybe the generative pieces that itthen pings thereand it says here and I notice you're not,you know, using your normal hours,you logged on pretty late.</p>
<p>Is everything okay.</p>
<p>Part of it might also be that check inwhich is now that human component.</p>
<p>So instead of having a human man,you know,be the person at a 24 hour SOC or not,you've now got a generative A.I.that's behind the scenes.</p>
<p>That's kind of interesting.</p>
<p>I, I kind of like that, right?</p>
<p>Because it canautomate is going to sound weird,but they can automate thethe reach out to the person.</p>
<p>They can automatethe human validation of that beforeand you know,and they can do it in an intelligent way.</p>
<p>So I'm not always going to call ittwo in the morning saying,</p>
<p>Hey, is that really you?</p>
<p>That's right.</p>
<p>And you know, right now, a lot of timesmost services, you'll get that emailthat says, hey, we noticed a log in froman unexpected location.</p>
<p>This can now probably tie into.</p>
<p>Okay, where is Darren's cell phone?</p>
<p>You know, are we tracking what wi fi?</p>
<p>Oh, Jeffrey, you're in Big Brotherin Terminator and Skynetall at the same time.</p>
<p>I you know, I'm probably late to the partyin doing that.</p>
<p>I think a lot of this is alreadypart of the advanced security.</p>
<p>You know, understandingof where people are,where their devices are,especially if it's a company owned device.</p>
<p>Right. And making sure that peopleare who they say they are.</p>
<p>Well, andwe have that concept rightwith multifactor authentication.</p>
<p>Right. Right.</p>
<p>You know, if I log in, it says,hey, check your phone.</p>
<p>Boom, boom, boom. Yeah.</p>
<p>And then they even have itwhere it'll turn the Bluetooth on and say,</p>
<p>Oh, we detected your phone here validatethrough your Bluetooth on your phone.</p>
<p>I see that. Yeah.</p>
<p>So but again</p>
<p>I in the middle of that could actuallyactually make it more personableand maybe smarter.</p>
<p>And also you know there's some servicesalready today that look at the cadencethat you type with for instance.</p>
<p>So as your keystroke and you're typing,you know, you've got a particular speedthat you type with and kind of an orderthat you hit think quite differentthan how I hit the keys, Well,it won't be too long until all of thesedifferent signalsare going to be feeding in to determine,hey, is this actually this person,you know, that we think it ought to be?</p>
<p>So multifactor is going to extend beyondjust, hey, I got a code on my phone,but it's now going to beam I typing with the right cadence?</p>
<p>You know, am I speakingmaybe in the right way if I give a call,is it the voice that I expectto hear on the other end?</p>
<p>All of those things? Well, that that'sanother thing we've talked about before.</p>
<p>We've got text to voiceand a voice to text.</p>
<p>That's right.</p>
<p>But it's not just to text.</p>
<p>It's a voice to it'sgoing to analyze my voice, too.</p>
<p>I talk in the same cadence to</p>
<p>I it's very sophisticated.</p>
<p>The voice cloning,as I mentioned on the show before.</p>
<p>But I've I now cloned my voiceso I can broadcast in multiple languageson my Embracing Digitalthis Week podcast, which has a newscastand it has anincredible job with intonationand my cadence.</p>
<p>I can tell the difference,but some of my coworkers would.</p>
<p>They said, Daryn,your German's impeccable, but oh,yeah, well, I think you to.</p>
<p>Yeah, butthen the.</p>
<p>Question is going to be,will you do that with my voice also?</p>
<p>So, you know,if youtranslate this conversation into German,is that going to be my voice in German?</p>
<p>And will the tools know the differencebetween when you're talkingwhen I'm talkingas opposed to merging us together?</p>
<p>So I have not tried that yet.</p>
<p>Jeffrey Okay,but maybe that's something we could try.</p>
<p>With your permission,</p>
<p>I would get a 32nd clipand we'll translate this episodeinto Germanand cannot handle.</p>
<p>Well,</p>
<p>I already know what I want to try and do,and that is I'll translate mineand then translate yours.</p>
<p>But there's pauses between our talkingand can we mesh the two together?</p>
<p>To me, that would beme. It would be incrediblebecause it would exposeour podcast to more a bigger audience.</p>
<p>But the same time, super scary.</p>
<p>Yeah, well, we'll need a safe wordif we're going to do that.</p>
<p>So yeah. We need a.</p>
<p>Native code wordif we're going to do that.</p>
<p>Yeah, we, we absolutely will need a codeword to do that.</p>
<p>Well, Geoffrey has been wonderful,as always, having you on the show.</p>
<p>We're going to have you backwhere we are going to talkabout some of the limitationsthat we see today andand where we see the future going in AI,not just generative AI</p>
<p>To me,</p>
<p>I had this conversation with someoneand I said I generative A.I.just made A.I. more accessible.</p>
<p>Yeah,</p>
<p>I think I think it made it more accessibleand it also made it more interopwith people's lives.</p>
<p>And because people are used to talkingin a year'sseven conversation, peoplecould start to see where it fits in.</p>
<p>Okay, I can make images,</p>
<p>I can make voice, I can do,you know, it can help me with my email,which I'm doing.</p>
<p>A lot of it just it touched onso many things that people are alreadymaybe strugglingwith the time investment for.</p>
<p>Yeah,that it sparked a lot of imagination.</p>
<p>And you know,it will be interesting to seeif that dies down or if that you knowin two years we're still talking aboutall the amazing things you can do with it.</p>
<p>I thinkwe're going to be still talking about it,but I want people to understand there'sa whole lot more out there in the worldthan just generative</p>
<p>AI are some really incredible techniquesand opportunities for growth as a as a</p>
<p>IT as industries and also as a society.</p>
<p>I think there's going to be lotsof really cool things coming our way.</p>
<p>And I'm excited about this,this exciting stuff.</p>
<p>Yeah, it absolutely is.</p>
<p>And you know,maybe the other thing that we can talkabout next time is the digital literaciesthat people need in orderto work with some of these different eyes.</p>
<p>So, yes, they're there. Yes, they exist.</p>
<p>But back to that,how do I understand the trust question?</p>
<p>How can we make sure that peopleare still judgingthat realityas opposed to just taking it for granted?</p>
<p>I think that</p>
<p>I think that's the important thing.</p>
<p>It sounds like threeat least three more episodes.</p>
<p>If you want. You let me know.</p>
<p>All right. Sounds good. Thanks, Jeffrey.</p>
<p>All right.</p>
<p>Thank you, Darren</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org Until nexttime, go out and do something wonderful.</p>

</details>
