---
layout: posts
title: "WaveForm AI"
number: 134
permalink: episode-EDT134
has_children: false
parent: Episodes
nav_order: 134
tags:
    - artificialintelligence
    - waveformai
    - datashapes
    - waveform
    - technology

date: Wed Apr 19 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Logan Selby

img: thumbnail.png
summary: "In this episode Darren Pulsipher, welcomed Logan Selby, the co-founder and president of DataShapes, where they discuss a unique approach to Artificial Intelligence that is bucking the trend."
---

{% include transistor.html id="43198853" title="#134 WaveForm AI" %}

{% include youtube.html id="Gaz-6HGLLg8" %}

---

Logan is a former intelligence officer in the DOD and has a passion for AI and robotics, which led him to be a reservist in the defense community. He transitioned to DataShapes, where they have a unique technology that solves critical needs in the defense community using AI. While AI has been around for a long time, the vast amount of data available for training models and the advancement of computing resources have led to the development of smarter systems like chatbots and large language models.

Current techniques are resource-hungry and very costly to train and build a general-purpose inference solution. For example, running large language models like ChatGPT can cost up to $3 million a day, but AI is evolving rapidly and receiving more attention than ever. One concern in using neural networks is the inability to audit and explain how the AI arrived at a result. There are social, political, and legal challenges to trusting decisions made by these networks, particularly in fields where human life is at stake. However, society will eventually overcome these challenges and fully embrace AI.  DataShapes' approach, which uses traditional machine learning techniques to solve pain points in data analysis, has full auditability and discovery in their trained models.

DataShapes has a unique approach to solving problems quickly and efficiently in resource-constrained environments. While traditional neural network training requires a lot of labeled data and can be brittle, DataShapes uses methodologies to learn in real-time or near-real-time. Their technology focuses on waveforms and signals and is auditable, making it ideal for use in austere environments where people are getting dirty and carrying a server stack is impossible. While neural networks are great at language models and image recognition, Logan's company is hyper-focused on waveforms and signals. Their approach is different and highly effective.

Detecting different types of waveforms and relationships in the waveforms is at the center of this new technology. This approach detects patterns harder to spoof compared to traditional techniques used by the Department of Defense. This has the potential for applications of their technology in electronic warfare, including gathering intelligence and analytics. Additionally, the platform can detect, analyze, and gather intelligence, which can be exported to edge devices. Their self-learning anomaly detection feature, Infinite Loop, was also mentioned, which establishes a continuous baseline based on the parameters the end-user prescribes. The technology can be used in the automotive industry, healthcare, and entertainment industries, where it could be embedded in every sensor.

DataShapes has a product called GlobalEdge, an intelligent agent that sits on or behind sensors to conduct ETL operations for data being collected. The machine learning component of GlobalEdge filters the data to provide relevant insights and anomalies in real-time, reducing the amount of irrelevant data being pushed back to headquarters. The product can also be used for data compression on the edge to the data center. The software can scale down to as little as 47 K, making it suitable for a variety of applications, including virus detection using UV waves.

To find out more about DataShapes and their approach check out https://www.datashapes.com


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsifpher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people processand technology.</p>
<p>On today's episode Way for me,</p>
<p>I was a special guest, Logan Selby'sco-founder and president of DataShapes.</p>
<p>Logan, welcome to the show.</p>
<p>Thanks, Darren. Appreciate.</p>
<p>I appreciate you.</p>
<p>And thanks for having me on.</p>
<p>Hey, Logan, we had dinner the other night.</p>
<p>We were thrown together at a dinner table.</p>
<p>We didn't know each other.</p>
<p>We sat next to each otherand we got to talkingand I went, this is super cool stuff,what you're doing.</p>
<p>But before we get into that, let's talka little bit about your background.</p>
<p>Where do you come from?</p>
<p>Logan Give me like a two or three minute.</p>
<p>What's where?</p>
<p>Who is Logan? Where do you come from?</p>
<p>Yeah, Yeah. No, absolutely.</p>
<p>So I spent most of my careerin the intelligence community in and DOD,mostly as an intelligence officer.</p>
<p>I spent time overseas.</p>
<p>I lived overseasfor an extended period of timein Germany and then didseveral different deployments.</p>
<p>I supported a bunch of differentorganizations throughout the intelligencecommunity during my time.</p>
<p>I'm still actively involvedon the defense side.</p>
<p>So currently athe lead for a time in roboticsfor organizationcalled the 75th Innovation Command.</p>
<p>We're a direct reporting unitto Army Futures Command,but we're reserve elements.</p>
<p>So I'm a reserve officer in the U.S.</p>
<p>Army, but I left full timegovernment service back in 2018 and spentsome time in the Fortune 500 environmentand worked for some startupsin the robotics communityand about 2000 in 2020.</p>
<p>I started advising for data shapesas a defense advisor because weat that point in timeknew that the technology, the data shapeshad was a perfect fitfor the defense community.</p>
<p>And then we got an injectionof capital in 2021,which allowed me to come on fulltime to run the company in 2022.</p>
<p>So I've been a data shapesince full time, since January of 22.</p>
<p>But on the academia side,you have a master's degree in data scienceand applied machine learning and a Ph.D.focused on autonomous systems.</p>
<p>So hence my sense, my attractionto robotics for the for the DOD.</p>
<p>But do do a lot of work stillfor the Army, like I said, as a reservist.</p>
<p>So I'm actively involved inwhat's going on in thethe autonomous systems and roboticscommunity throughout industry,academia and throughout the DOD.</p>
<p>Oh, that's awesome.</p>
<p>Now, whywhy move away from super cool robots?</p>
<p>So I've always data shapes.</p>
<p>Yeah,</p>
<p>I've always had an attraction for AI.</p>
<p>Like I said on Met,my master's program was really focusedon applied machine learning.</p>
<p>So I have a huge attraction toto that side of the business,which I wouldn't say is fully separatedfrom the robotics community.</p>
<p>But oh, no. No, it's it's tied. To it.</p>
<p>Definitely hardware versus softwareequation there.</p>
<p>But but no,data Shapes has a very unique technologythat solves a very critical needin the defense communityand throughout some other industriesthat I saw right away.</p>
<p>So it made sense for me to come aboard.</p>
<p>I felt like I could really push itand get it to the place it needed to be.</p>
<p>And we're we're thriving.</p>
<p>So we're we're finding our placein the world and in turning a lot of headsdoing so.</p>
<p>All right.</p>
<p>Before we get into ittoday, let's talk about AI in general.</p>
<p>When people hear about A.I.,they're hearing about chat, GPT,generative AI, large language models.</p>
<p>It's all the rage right now, right?</p>
<p>And we knowchatbots can conquer the world, right?</p>
<p>They've already proventhat they scared everyone.</p>
<p>There's a moratorium. Supposedly.</p>
<p>No ones do it. A moratorium.</p>
<p>Everyone knows that.</p>
<p>That's just their wayof slowing everyone else down.</p>
<p>What are your opinions on just the AI A.I.in general?</p>
<p>And then I want to talk a little bitabout a year guys's approach,which is very different.</p>
<p>Sure. Sure.</p>
<p>You know, so A.I.has been around for a long time,even deep learning modelsthat people like to throw around now.</p>
<p>You know, deep learning has been aroundfor for a long time as well.</p>
<p>I think now, you know,we're at a place in societywhere the amount of data that's availableto be pushed through some of these modelsfor training is is is extremely vast.</p>
<p>So that's why we're gettingsome of these very, very smart systemslike Chad GPT that can do a lot of thesedifferent things and kind of on demandand the computing resourceshave have evolved to a place to wherethey're readily more readily available,</p>
<p>I would say to, to allow peopleto do these things.</p>
<p>But it still requires a lot of resources.</p>
<p>It's an expensive thing to run.</p>
<p>You know, I think Chad GPT cost somewherebetween 3 to $5 million a dayjust just to run it now then that's.</p>
<p>Just to spit out what we already know.</p>
<p>Exactly. Exactly.</p>
<p>So there's there's a lot to it,but I'm happythat AI is getting getting the attentionthat it is.</p>
<p>I I'm definitely not on the teamthat we need to stop it.</p>
<p>I think it's</p>
<p>I think it's evolving at a rapid pace.</p>
<p>And I think we have to havean understandingof how it's going to be used and what it'sgoing to use for and who's using it.</p>
<p>But I definitely don't think we needto put a moratorium on it at this point.</p>
<p>So I have a question about that,because most of most of the airthat we hear about today and peoplein industry and outside of industryhave always heard of neural networks.</p>
<p>Right?</p>
<p>We're listening to oh,we need the program to operatelike our brain operatesusing neural networksand the whole concept behind it.</p>
<p>That's the big push in AI today.</p>
<p>Would you say that's true, Correct?</p>
<p>Correct. Yeah.</p>
<p>So neural networks,you know, if you're an unfamiliarto the audience,you know, neural networks are essentially,you know, layered parametric equationsthat are stacked on top of each otherto to perform a dutyutilizing mathematics.</p>
<p>The problem with neural networks isyou don't really knowhow or why a decision is made.</p>
<p>So an input goes in.</p>
<p>It is it is worked through the networkand then you get an outputand it's really hard to tellwhy that output is thereor how it got to that conclusion.</p>
<p>You may be able to point back to the datathat the model was trained on to saypotentially why this output waswas given based on this training datathat was shoved into the model.</p>
<p>But there's really no auditability there.</p>
<p>So the EXPLAINABILITYis kind of nonexistent.</p>
<p>Well, yeah.</p>
<p>And I remember there were some court casesaround this specific CLE, right.</p>
<p>How can we trust a convolutedneural network?</p>
<p>How can we trust any of theneural networks that are out there?</p>
<p>Because I have no proof of accuracy.</p>
<p>I have no way of determininghow it got to the answer that it got to.</p>
<p>Exactly.</p>
<p>Especially on the defense sidein other industries as well.</p>
<p>You know, where you have life, limb,eyesite involved, you know, trusting,trusting a decision something's madethat could result in a kinetic typeactivity is is onethat you have to be extra cautious on.</p>
<p>And so having something that's not ableto be audited is troublesome.</p>
<p>Do you think do you think as a societyis going to be able to overcome that?</p>
<p>Obviously,we already have overcome some of that, butdo you think we'll ever get to the pointwhere we fully trust a neural networkor that that technique of AI, becausethere's more than one technique of A.I.?</p>
<p>That's what we're going to talk about?</p>
<p>No, exactly. Exactly.</p>
<p>I think I think we will as a society,</p>
<p>I think eventually we'll just assumethat risk and say,you know, hey, it's providing a servicewhen it comes to,</p>
<p>I guess, more on the consumer side.</p>
<p>I don't know if we'll ever get to thatplace on the on the defense side unlesswe see some,you know, 99.99% resultsstatistically speaking,</p>
<p>You know, but it could get there.</p>
<p>I think it could get close.</p>
<p>But I think we're still a ways away.</p>
<p>No network.</p>
<p>That's the big buzz of the day.</p>
<p>We even have chips at Intel that doneuromorphic processing because, I mean,that's that's where every all the researchwell, all the big money is right now.</p>
<p>But you guys have a different approach.</p>
<p>We do.</p>
<p>I love this approach because it'sa simple approach to me.</p>
<p>It's it's not following the crowd.</p>
<p>I love people that kind of go againstagainst the grain because you spit outand you have this wonderful new technologythat that does wonderful things.</p>
<p>So explain a little bitabout why you guys decidedwhen you first startedlooking at your use cases, whyyou decided to go this different routeinstead of the traditional neural network?</p>
<p>Well, sure, sure.</p>
<p>So, you know,data shapes is mature in its technology.</p>
<p>So we've been aroundor I would say data shapes as IPhas been around for about a decade.</p>
<p>So our original engineering teamgot togetheralmost ten years ago now and developedthe technology that we have today.</p>
<p>And so that when they first lookedat some of the pain pointsthat were around at the time,they realized that they could be solvedwith traditional machine learning.</p>
<p>So looking at youryour data science one on one, your Knearest neighbor type algorithms, supportvector machines, things like thatthat you hear about and in,like I said, data science one on one.</p>
<p>But they took that technologyand they evolved it several, several,several layers ahead, I would say.</p>
<p>And then and that's kindof where our secret sauce liesas far as our patents go.</p>
<p>But they found thatthose simple approaches were able to,number one, solve a lot of problemsquickly,efficientlyand in many different environments.</p>
<p>So, you know,ten years ago, your resource constrainedenvironments were even more so.</p>
<p>Nowadays, there's a lot more resourcesthat are available, but you stillpeople still need solutionsthat are on the edge, that are ableto be used in austere environmentswhere there's no networksthat where people are getting dirty.</p>
<p>You can't carry,you know, you can't jump out of aback of a plane with a server stack.</p>
<p>And so you know, you're going to needsomething that's able to betrusted, used in these environments,and that's extremely efficient.</p>
<p>And, you know, we'll talk a little moreabout this, but, you know,our solution is also auditable,which is another big factor.</p>
<p>Like I mentioned,when it comes to these kinetic typeactivities, you canyou can automate the entire workflow.</p>
<p>So you know why it's making the decisionthat it's making.</p>
<p>Exactly.</p>
<p>You know,from the initial training instance,all the waythrough the workflow to the output,you understand why the decision was madeand when and who trained it,and so on and so forth.</p>
<p>So this is interesting because you usesome of the same terminology that we usein, in traditional neural networktraining.</p>
<p>I'm training the model, right?</p>
<p>I'm doing inference.</p>
<p>You're using the same terminologies,but the underlying technologyis fundamentally different.</p>
<p>Correct? Correct.</p>
<p>Yeah.</p>
<p>It's it's thesome of the methods we use that,you know, people in the machine learningand AI community will understand iswe use a lot of zeroto few shot methodologies.</p>
<p>So we're actually learning in real timeor near real time.</p>
<p>So whatever dataset we're looking at,the data is coming in.</p>
<p>We're either using somethingthat supervised or an individualis actually looking at the data coming inand training that model in real time.</p>
<p>I always draw a boxbecause I think about our UI.</p>
<p>So enduser would be drawing a box around an itemand then telling the systemto learn it in real time versusyour neural net approach where it takesa lot of labeled data that's collecting,you know, thousands of imagesor thousands of,you know, whatever type of datathat you're trying to learn.</p>
<p>It takes a lot of it to feed itinto the model so it then can learn.</p>
<p>And then at the end of the day,that model's brittlebecause it's only as goodas the training data that you sent it.</p>
<p>So then if it's somethingif your output is wrongor it's incorrect, you have to go backand retrain that model and retrain it.</p>
<p>Yeah, it's hard to actually onand train a neural network.</p>
<p>Exactly. Soand so we're doing it in real time.</p>
<p>So if something is wrong,we can counter train in real timeor teach you something elseor don't show me this.</p>
<p>So that would be an example of a countercounter train. So don't.</p>
<p>Wait. So.</p>
<p>So why doesn'teveryone just use this stuff?</p>
<p>Why is everyonefocusing on neural networks?</p>
<p>Well, Ithink, you know, the Aurora methodologyisn't a panacea, I would say.</p>
<p>You know, there's definitelythe neural net solutions outthere are great at things,</p>
<p>I would say, and you're hearingabout a lot of them today.</p>
<p>So we talked about languagemodels, large language models.</p>
<p>GGP or image.</p>
<p>You know, neural networks are really goodat those thingsthat that technology,that science has been around for years.</p>
<p>So it's been perfectedstill resource heavy.</p>
<p>They they've come up with waysto get it a little smaller.</p>
<p>How we're utilizing our technologies,we're focusing ona completely different segment that othersdon't really talk about, and that'swaveforms, waveforms and signals.</p>
<p>Okay, So, so that'swhy that's why you can really focusis because you're saying</p>
<p>I'm not going to do a general AI right?</p>
<p>I'm going to focus on a specific type ofinput that comes into ISE,which is waveforms,correct? Correct. Yeah.</p>
<p>So we are hyper focused on on waveforms.</p>
<p>And when I when I say waveforms,you know, a lot of people think,especially if you're talking tolike somebody with a physics background,they'll say, well, images a waveformas well.</p>
<p>But you know, we're talkingmetaphorically,you know, the the the actual visualrepresentation of a of a waveformthat happens in the environment.</p>
<p>So, you know, you've EEG,radio frequency, vibration.</p>
<p>Even even voice, right?</p>
<p>Sound, even buoys sound. Yeah. Acoustics.</p>
<p>So that's that's the realm we play in.</p>
<p>And that's wherewe've really focused this technology.</p>
<p>That's really cool.</p>
<p>This kind of reminds me ofyou guys are like a specialist.</p>
<p>So if I, I come from a family of doctors,so I would not go to mymy brother, who's an oral surgeon,a specialist to have my appendixtaken out, even though I know he canbecause he's done general surgery rounds.</p>
<p>But if but I wouldn'tgo to a general surgeon toto have oral surgery done,my jaw replaced or whatever like that.</p>
<p>So you guys havehave you guys have special lostyour eye to certain types of problemsand input that that that you're looking atwhich I think is wonderful.</p>
<p>And that's a perfect analogy.</p>
<p>You know, sothere's there are some neural netbased solutions out there that have thatthat try.</p>
<p>And I think they do a decent job ofof waveform analysis.</p>
<p>But essentially the way they doit is through image.</p>
<p>So they arethey are taking the image of the way.</p>
<p>They take an image and drop. Yeah, yeah.</p>
<p>And so they're comparing itto other waveforms.</p>
<p>So it's it's very general.</p>
<p>So they're generalizing itjust in that process, let aloneso you know, the waywe're doing it using our technologies,we're actually digesting the waveform.</p>
<p>So we're taking what we call metrology,which are measurements of the waveform.</p>
<p>We're attaching metadata to that waveformin real time, which allows us to not onlylearn, learn everything that's happeningin the waveform, it allows us to query it.</p>
<p>So then if we run our AI throughany historical database of waveforms,you're able to do correlationsin real time of anything you've collectedhistorically as well.</p>
<p>Okay.</p>
<p>So let let's sounds super cool.</p>
<p>I know you guys are using vectorprocessingand things like thatbecause Intel's got vectorvector processing technologythat you guys can take advantage of.</p>
<p>And we talked a little bit about this,but let's, let's not go do too geeky.</p>
<p>I'm going to lose half the audienceif we do that.</p>
<p>Let's insteadlook at what can I actually use waveform</p>
<p>I forsure use cases.</p>
<p>I mean I mean you said sound inand anyyou know, in anything that produces a wavethat are waveformbut what can I practically use it for.</p>
<p>Yeah.</p>
<p>So so two two industriesthat we're working in right nowthat are complete polar opposites,one being defense.</p>
<p>You know, I've I've mentioned thata couple of times.</p>
<p>So on the defense side wherewe're working, we're working in signalsintelligence, electronic warfare,different types of acoustic signatures,things for on the intelligence sideof the house in defense.</p>
<p>But then we're also working in theentertainment industry just completely.</p>
<p>All right, Let's talk about entertainment,because this is going to be more in it.</p>
<p>Well, it'll be more entertaining.</p>
<p>Yeah, exactly. Exactly.</p>
<p>So we're doing a lot of work in music,so we're partner with somesome labels and some other organizationsthroughout the music industryto look at copyrightand artist attribution concerns.</p>
<p>And so.</p>
<p>Interesting.</p>
<p>Yeah, because it's that's, you know, audiolike you mentioned is a formand people don't necessarilythink about it like thatbecause there's a lot of solutionsout there that that try to compareaudio audio tracks for,you know, sampling and copyrightand things like that.</p>
<p>But the way we break down the waveformallows us to take it to the next level.</p>
<p>So there's issues in in music todaywhere even with this stuff,the generative AI stuff that's out now,there was an article that came out todayabout it,but generative, generative aside,you have social media influencers todaythat are there.</p>
<p>They're taking artists original tracksand then they're transforming themin a waythat can't be recognizedby other software.</p>
<p>And so they're taking,you know, yeah, let's say ten.</p>
<p>Other softwarethat's just straight pattern match.</p>
<p>Yes. Yeah.</p>
<p>So they're taking like a Taylor Swiftsong, for example, and putting it on itand putting it on there, their content,but they're transforming it.</p>
<p>So there's nothing that's attributingthat track back to Taylor Swift.</p>
<p>So there's, you know, royaltiesand all these thingsthat are owed to these artistsevery time their songs are usedthat they're not gettingbecause it's not able to be understood.</p>
<p>But the way our technology worksand the way we break down the waveforms,we actually learn it in a waythat we can pick out transformationsof the songs, which is is currentlyfrom our understanding.</p>
<p>There's there's a couple of companiesthat are dabbling in itout there,but we've really, really honed it inand have extremely,extremely robust solution.</p>
<p>So that goes to detection.</p>
<p>I'm hearing it does.</p>
<p>I can</p>
<p>I can use your I can use your technologyto detect different types of waveformsand relationships in the waveforms press,which is pretty slick,</p>
<p>I have to admit, becauseif we go to the Department of Defense,one of the techniques that people useis they use modulation or frequencyshiftingto get rid of of a to to spoofor confuse a guy from pattern matching.</p>
<p>But you guys could look at a relationshipthat's in the waveform itself,which would be harder toharder to spoof which. Correct?</p>
<p>Correct. Yeah.</p>
<p>So that's that's oneyou know especially when it comesto, you know, jamming and spoofing.</p>
<p>There's you know, I would say, you know,we've been in the Middle East for</p>
<p>So the the we haven't really had anear-peer adversary that we've came acrossup until now that has atechnology on the offensive sideof electronic warfare.</p>
<p>So that's a new, you know, areafor us too, that we're really trying todabble into,really pull more intelligence out of it</p>
<p>From a defensive perspective and analyticsperspective of electronic warfare.</p>
<p>There's a lot of intelligence thereto be gathered that's not not really beenexploited to date because there hasn'tbeen a software like ourspulling that that intelligenceout of the way for waveformreciprocal. All right.</p>
<p>So detection is that your main thing isjust I shouldn't say just detection.</p>
<p>It's a big deal.</p>
<p>Can I do any transformationfrom from these waveforms as wellthat you guys are detecting?</p>
<p>I mean, whatwhat other things can I do with it?</p>
<p>So so we areyou know, we have a pretty robust platformthat does the detectionbecause our software,our technology is so lightweight,we're actually ableto embed it on different things.</p>
<p>And so we have, you know,just for our product profile,you know, we have a softwarethat does the analytics,it does the detection, it does thereally the intelligence gathering.</p>
<p>It allows you to do correlation.</p>
<p>Then you can also create applicationsthat then can be exported to edge devices,and that software can be the mothershipsoftware,like we call it, the actual productwhere you're doing that can be doneon, you know, a ruggedized tablet.</p>
<p>It can be done, you know, on a laptop.</p>
<p>And then you can create these executablesthat can go downto the microprocessor level.</p>
<p>So so that that's coolbecause I can really pushapplications out to the edge,completely disconnected.</p>
<p>Correct.</p>
<p>And still get all of all of thatinformation, including self learning.</p>
<p>Right. Exactly.</p>
<p>So that's that's,that's one of our other productsthat that is that we call infinite loop.</p>
<p>So it is a a self learninganomaly detection, still detection,but it's essentially,you know, deploy and let it go.</p>
<p>So it's a self-learning applicationwhere it will establish a baselinecontinuously.</p>
<p>So based on the parametersthat an end user would prescribe.</p>
<p>So if you want to deploy it and have it,you know, listenor monitor or whatever,you're going to assign that duty to be.</p>
<p>It will continuously and self learnthat environment that it's deployed. Andthat's pretty.</p>
<p>Is there any way that these edge nodescan share their modelswith other edge nodes that are maybelisting in a different place?</p>
<p>Oh, absolutely.</p>
<p>Is there any way to correlatethose models together?</p>
<p>Because my brain is like going,</p>
<p>I could deploy this easilyinto a car that my teenagers are driving.</p>
<p>Exactly. Yes.</p>
<p>Because it's a way for the way they driveis absolutely a way for.</p>
<p>No, Absolutely.</p>
<p>It's fast. And slow. There's you know,there's everything. Right.</p>
<p>And I think, you know, speaking of,you know, vehicles, we've donesome use cases in the past and some POCswith the automotive industry,and that's been one of the use cases.</p>
<p>You know, the way the way that we'recollecting our data, you know, we canand way that we can be embedded,we can be embedded on every sensor.</p>
<p>So today, you know, the the averagethe average sensor count on a vehiclecoming off the assembly linetoday is like 80.</p>
<p>You know, that's that's average.</p>
<p>You know, Tesla probably being at theat the top of the range.</p>
<p>But you know, average is around 80.</p>
<p>And think of all the datathat's being collected constantly.</p>
<p>One of the issues, though,and another issue that we sawwith our technology is the the vastamount of data that's being collected.</p>
<p>There's not really a pipe big enough topush that data back or it will come off.</p>
<p>Because 5G is going to solve all that.</p>
<p>It would be cost effective.</p>
<p>No, you're right. Soso this is something that this issomething I've been touting as well.</p>
<p>I want to push analytics out to the edgeso I can still getall the valuable informationwithout moving all the data.</p>
<p>Exactly. Exactly.</p>
<p>So that's and that's one of ourother products we have called Global Edge.</p>
<p>And Global Edgeis essentially an intelligent agentthat sits on that sensoror just behind the sensorand it conducts, you know, youryour normal ETL operations.</p>
<p>So extract, transform and load of the datathat's being pulled at thatat the collection point.</p>
<p>But then our machine learningis on the back end of that, which actuallyreduces the data even moreand then filters it for the insightsthat the end user wants,which will allow you to pushthat real time intelligence back,whether it's on a vehicle, it's on a,you know,some type of defense collection platformor it's on, you know, a piece of machineryin a factory.</p>
<p>So you're you're actually getting the datathat you wantand kind of weeding through the noise.</p>
<p>So you're not constantly pushing streamdata back.</p>
<p>That's irrelevant.</p>
<p>Well, and so I have a question around thatbecause some people would say,but there might be something specialin that noise.</p>
<p>So we're able towe're able to capture that as well.</p>
<p>But you're able to captureall the anomalies in the noise, right?</p>
<p>Correct. Correct. Yeah.</p>
<p>We're able to capture any anomalies,any insights.</p>
<p>But then we can capture thatthat that big picture data too.</p>
<p>So it doesn't go away.</p>
<p>We can retain retainthe collection, the normal collection.</p>
<p>It just won't beobviously won't be pushed back to theto the headquarters in real timelike the insights would, or any anomaliesthat would pop up in the noise.</p>
<p>So thisalso helps with data compressionon the edge to to the data center.</p>
<p>I can have I can have what do we call it?</p>
<p>I've got a project</p>
<p>I'm working on now, has reinforcedcollaborative learning, reinforcecollaborative learningbecause I've got all these edge nodesthat arethat are out theredoing their own learning. Right.</p>
<p>But I want them to share. Exactly.</p>
<p>Yeah.</p>
<p>So we've we've ranthrough a couple of different exerciseswhere, you know, the way that the datais being pulled back with whateverwhatever data frameworkthat you want to ingest thisor digest this into because it doesn'thave to be our software, you know,we can plug it into whateverdata framework that you want, but we'vesince we have that self-learning,there are ways where you canyou can kind of cross-pollinate or sharethe learned data across your portfolio.</p>
<p>Across the portfolio, Yeah.</p>
<p>So super cool. Super cool.</p>
<p>You mentionedyou mentioned that it's small.</p>
<p>How small is small?</p>
<p>So the smallest to datethat we've scaled it down to is 47 K</p>
<p>Whoa.</p>
<p>Whoa, whoa, wait.</p>
<p>This will run on my 64 Commodore.</p>
<p>It will. It will.</p>
<p>So we havethat is pretty that's pretty cool.</p>
<p>So historically,you know, prior to getting into defensein entertainment,we actually worked a lot in health care.</p>
<p>And so we came up with some productsa few years agothat were looking at handheld PCR devices.</p>
<p>So, you know, mouth swab detection.</p>
<p>And we were looking to detect hepatitis Cand we were doing thaton a small little cartridge.</p>
<p>And so we're able to scale the softwaredown to around 4750 Kto make that detection.</p>
<p>So obviously the more complexyou would want your email ops or your Moperations to be, you would probably scalethat up a little bit.</p>
<p>But we can keep it factor.</p>
<p>You can keep it pretty.</p>
<p>So that's you just have another thingyou guys can do virus detection with this.</p>
<p>We can.</p>
<p>Yeah. So that's in that examplewe were detecting hepatitis</p>
<p>C just based on UV waves.</p>
<p>Being reflectors going to say Yeah. Yeah.</p>
<p>Yeah.</p>
<p>That's, that's pretty,that's pretty darn slick.</p>
<p>Now see, you guys have opened upthis big huge aperture for me because now</p>
<p>I'm thinking, what other crazy thingscan I do that that come in waveforms?</p>
<p>There's a lot of things that come inwaveformswe talked a little bitthe other night at dinner about imageand video processingand you said could do it. Butyeah, it's not optimized for it, right?</p>
<p>Not that'd be like going that'd be likegoing to my brother for an appendectomy.</p>
<p>He could do it,but he doesn't have all the right tools.</p>
<p>He hasn't done them in years.</p>
<p>So I want to go tosomeone that knows how to do that in.</p>
<p>Exactly. Yeah.</p>
<p>I mean, like I said,the science on those two areashave been around for a long timeand not not that it hasn'tbeen around on on waveform and that typeof environment too, but it's onethat we are obviously specializing inand that's whywe're trying to stay extremely focusedright now in defense and entertainment.</p>
<p>Are there are industries that we planto scale this out to down the road,one being I think we'll get back intohealth care eventually.</p>
<p>But energy is another onethat we're interested in down the roadbecause current is a waveform, you know?</p>
<p>Oh, absolutely.</p>
<p>The lights are currentat a very granular leveland we've tested thatand it works rather well.</p>
<p>So that's onethat we would like to get into eventually.</p>
<p>You know,</p>
<p>I have a feeling the defense worldmight drag us in that in that directionanyway.</p>
<p>But that's that's onewe're we're holding off now.</p>
<p>But we've been asked lately I've beengetting a lot of questions about verydifferent types ofwave forms that we don'tnecessarily experience on earth.</p>
<p>So a lot of like space, spacewave gravitational waves,you know, electromagnetic type wavesthat are being emitted in space.</p>
<p>So that's another another area that we'rebeing approached about, too, which is.</p>
<p>Maybe maybe we'll find Ceti.</p>
<p>Maybe. Yeah. Now that's maybe.</p>
<p>Yeah, that's one. There you go.</p>
<p>We would love that.</p>
<p>We would love to chat with.</p>
<p>I know mymy co-founder and I are very interestedin that area, so I think it would be funjust to have the conversation.</p>
<p>No, no, this,this is really, really cool stuff.</p>
<p>Logan</p>
<p>The conversationwe had a dinner just carriedon, on the podcast was just wonderful.</p>
<p>I appreciate you coming on the show.</p>
<p>You have anything else?</p>
<p>Where can people find outmore about data, shapesand and find out moreabout what you guys are doing?</p>
<p>Yeah, yeah.</p>
<p>So our website datashapes.com,you can look us up on there,you can requestinformation, request a demo.</p>
<p>We have a pretty active</p>
<p>LinkedIn profile as well,so you can check us out on LinkedIn.</p>
<p>I'm on LinkedIn,so feel free to reach out to me directly.</p>
<p>But we're we're tryingto build our presence.</p>
<p>Like I said, this is we really juststarted our go to market this year.</p>
<p>So we are just nowstarting our marketing campaign.</p>
<p>So a lot of peopledon't know about us yet.</p>
<p>So we're trying to spread the word andtrying to getout there and be a little more visible.</p>
<p>So, you know, well.</p>
<p>Most definitely you guys are someoneto watch in the future,even I would say watch rightnow. Don't wait.</p>
<p>Watch these guys.</p>
<p>I think I think you've got somethingunique here that is excitingand I most definitely am going to dosome more due diligence with you guys.</p>
<p>Well, I appreciate it, Darren,and thanks for having us on.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org</p>
<p>Until next time, go outand do something wonderful.</p>

</details>
