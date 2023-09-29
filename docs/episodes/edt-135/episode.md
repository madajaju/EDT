---
layout: posts
title: "Trustworthy and Ethical AI"
number: 135
permalink: episode-EDT135
has_children: false
parent: Episodes
nav_order: 135
tags:
    - ai
    - ethics
    - trustworthiness
    - deepfake
    - aicontent
    - aidetection

date: Wed Apr 26 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Gretchen Stewart

img: thumbnail.png
image: thumbnail.png
summary: "In this episode Darren interviews Gretchen Stewart, Chief Data Scientist of Public Sector at Intel where they discuss the trustworthiness and ethics of artificial intelligence."
description: "In this episode Darren interviews Gretchen Stewart, Chief Data Scientist of Public Sector at Intel where they discuss the trustworthiness and ethics of artificial intelligence."
---

<div>
<h3>Listen Here</h3>
{% include transistor.html id="f7d561ee" title="#135 Trustworthy and Ethical AI" %}

{% include youtube.html id="bY8d4oeW60c" %}
</div>

---

In the late 2010s, Microsoft released Tay as an AI chatbot designed to learn from its conversations with users on Twitter. However, things quickly went wrong when Tay began spewing racist and offensive comments, causing a public relations nightmare for Microsoft. Despite this, data scientist Gretchen Stewart believes that AI chatbots like Tay can still be useful tools, as long as they are developed with diverse teams that consider ethics and trust. Stewart argues that critical thinking is essential when using AI chatbots like ChatGPT, which are based on biased data and algorithms. AI developers must build diversity and ethics into the development process rather than bolting them on at the end.

## Trustworthiness

AI has immense capabilities but still lacks the human senses and experiences that can affect decision-making. There are ethical considerations in AI development and the need for skepticism when dealing with new technologies. Change is inevitable as the world moves towards the fourth Industrial Revolution, and people must adapt to keep up. However, raising concerns and posing ethical questions is crucial to ensure that AI is used for the greater good.

There are potential dangers of relying on artificial intelligence (AI) as a source of information. T AI can be helpful; however, it should not be blindly trusted because it is only as good as the data it is fed, which can be flawed and outdated. Critical thinking and questioning are essential when evaluating AI-generated content. Teaching these skills should become part of the curriculum in schools and universities. Additional to questioning AI’s veracity, diversity in AI responses should be considered when utilizing AI when making decisions.

## Ethics

As technology continues to advance, new ethical concerns continue to arise. This is true of Artificial Intelligence as well as AI-generated content. Recently, an AI-generated collaboration between two artists generated received 15 million downloads in 24 hours setting new records, but the artists involved needed to be made aware of the collaboration. Technologists should be allowed to produce such technology without considering ethical implications. The need for policies to catch up with technological advancements and for designers to create tools that can help ensure the trustworthiness and ethics of AI-generated content. Intel has developed “fake catcher” products as an example of a tool that can help detect fake videos, which is one step towards ensuring the ethical use of AI technology.

Combatting fake AI-generated content has become an industry all itself, and it requires transparency in AI development. This has started an arms race, with bad actors using AI for malicious purposes, and white hats building technology to detect and expose AI generated content. It is important to educate individuals, especially younger generations, about the ethics and potential risks associated with AI. 


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople, process and technology.</p>
<p>On today's episode,</p>
<p>Trustworthy and Ethical A.I.with special guest Gretchen Stewart,</p>
<p>Chief Data Scientist,the Public Sector at Intel.</p>
<p>Gretchen, welcome to the show.</p>
<p>Thank you, Darren.</p>
<p>I am so excited to be backand we are definitely going to havea conversation on somethingthat's very timely today.</p>
<p>So I'm really looking forward to it.</p>
<p>Yeah, normally</p>
<p>I would say Gretchen, introduce yourself.</p>
<p>Everyone should know youand if you don't, you've got to go backand listen to Gretchen's previous podcast.</p>
<p>Very well done.</p>
<p>She is our A.I.expert on the CTO office team,which were glad.</p>
<p>Gretchen Gretchen, Gretchen's with uson that team because we do need someone,especially now.</p>
<p>Chad Chip has just taken the worldby storm and causedso many ethical issuesthat we got to deal with.</p>
<p>So Gretchen, please straighten us out.</p>
<p>Do I still have a jobor do you just take my job?</p>
<p>No, You know,</p>
<p>I I'm excited about Chad GPT itit offers us the ability to really havethat combination of human and machine,and it's going to take awaysome of the things that we do, butthey are boringkinds of things that I hate to dosome administrative stuffand even in some cases, I have to admit</p>
<p>I haven't been putting fingers to keyboardas often as I used to.</p>
<p>You and I joke about that periodicallyis that now I can go to chat GPT and say,</p>
<p>All right,</p>
<p>Python, I'd like to do a Python code to doa, B and C, and it's pretty good.</p>
<p>And so I don't have to think,</p>
<p>Oh gosh, do I remember how to do that.</p>
<p>It's been or.</p>
<p>Are we go, go find it on StackOverflowor find a book.</p>
<p>Yeah exactly.</p>
<p>Or did I already do that andit's in my GitHub or something like that.</p>
<p>So yeah, it'sone of those things that it's</p>
<p>I think it's going to be really exciting.</p>
<p>I honestly was at an eventabout a week ago at a museumand people were talkingabout leveraging Chat GPTas a way to expand ideas around artand that when you start to think about,you know,there are people who have absolutelybrilliant capabilities, butsometimes they might be stuckand leveraging something like Chatbot Tto say, I'm thinking about this mediumand these are kind of my ideasand it might spur on some even betterand betterideas about designing and developingsome really interesting art.</p>
<p>Yeah, I never thought about that.</p>
<p>I mean, just recently</p>
<p>I took my family for spring break.</p>
<p>My daughter's graduating from high school.</p>
<p>So last last family trip, right,with with the younger kids.</p>
<p>And we went to Italy.</p>
<p>And I thought it was very fascinatingand this is in context of chat.</p>
<p>She GPT it was banned in Italybecause of privacy concerns.</p>
<p>And then as we were going throughseveral different museums, art museums,it was fascinating to listento the tour guides talking because eachtour guide had a different storyfor the same piece of art.</p>
<p>And I was like, Wait, what's the truthhere?</p>
<p>Emilio</p>
<p>I was funny.</p>
<p>I was like, Whoa, what's going on?</p>
<p>It was the map room.</p>
<p>And in the Vatican Museum, a beautifulmap's all along the walls of Italy,and our tour guide saidit took ten years to do thisand the tour guide next to us,as I was listening to her talking, said,</p>
<p>Oh, it took two years and 100 artiststo do it.</p>
<p>And I'm like,</p>
<p>What's the truth? Right?</p>
<p>And us as tourists were like, Sure,my tour guide knows everything.</p>
<p>But then you step inand you say, Well, Chad,she could really tell mebecause it has consumed all that data.</p>
<p>And I think it'd be interesting.</p>
<p>Maybe it would say,</p>
<p>Well, it's controversialon how much time they really took.</p>
<p>I don't know.</p>
<p>Yeah. So and think about it.</p>
<p>If you're in research or,you know, if you're a lawyerand you are looking for,you know, you normally go into,you know, Westlawand and find information.</p>
<p>Now all of this plus more is in chat JPT</p>
<p>So there could be a way for a lot ofpeople to get better information fasterbecause you could neverresearch through all the informationthat's in interactivity.</p>
<p>So that brings up.</p>
<p>A good but I think we also really needto remember that, you know,</p>
<p>AI has gone wrong in the past.</p>
<p>And so it's really criticalfor us to think about,you know, we think about the algorithmchallenges aroundperpetuating discriminationand or when Microsoft released</p>
<p>Tay as the AI chat botand how that crashed and became.</p>
<p>Within</p>
<p>Yeah.</p>
<p>So, so I think, you know,some of the let's put this on hold,you know, I think, you know, truthfully,the cat's already out of the bag,so to speak.</p>
<p>But I think there's ways to use this.</p>
<p>And and being a data scientist, to meit just means there'll be more peoplewho are thinking about itfrom a very diverse and a trustand an ethics perspective.</p>
<p>And that's really important.</p>
<p>And and this is going to force more peopleto think criticallyand have those kind of conversationsto ensure to your earlier point,how accurate is thisand is this a good bit of informationthat that needs to be connectedwith the expertise that the people havethat are all part of the teamyou're working on?</p>
<p>It reminds me, Gretchen, of the Internetin thein the nineties, late nineties, right.</p>
<p>Because yes, this wasthe same conversation we were having then.</p>
<p>The internet is fullof all this information.</p>
<p>And I remember</p>
<p>I did some seminars on the Internet at,at some local universitiesbecause I was an early adopterand they were asking me about itand people said, Well, the internet,how do I know the information onthe Internet is correct?</p>
<p>Right?</p>
<p>And I think we have to askthat same question today.</p>
<p>How do I know the information</p>
<p>I'm getting out of Chad?</p>
<p>GP is correct.</p>
<p>Exactly. Exactly.</p>
<p>And and can you correlate and correspondand and again, use critical thinking.</p>
<p>I mean, even at Intelwe have a responsibly AI counciland this is a group of peopleand I'm lucky enough to sit on it.</p>
<p>The really has a global review and scopeand there's lots of data that comes to us,but we also have folkswho have a standardslens or a legal lens or an H.R.lens that are really looking atnot only what are we doing internally,but how are we working withour external partners?</p>
<p>And I think what's most criticalfor peopleis to build them into the processof any kind of development,even if it's just using Chad.</p>
<p>GPT That data is part of a processthat you're working on.</p>
<p>So make sure that when you're thinkingabout this that you don't bolton the idea around ethicsand having a diverse team.</p>
<p>I think if there's one thingthat I learned, you know, in schoolas a math major, you eithergot the right answer or the wrong answer.</p>
<p>And then when I started to spend more timeand look at those,you know, push the envelopekind of math designs in linearalgebra and finite math and thingslike that, it really became clear to methat you need a full group of very diversepeople who are coming at itso that you end up with the best answerand think about not bolting that onto kind of the end of what you're doing,but that really it's a journeyand there's not an endpoint and chat.</p>
<p>GPT three or Chapter four or 28will be onesthat will be able to leverage and use.</p>
<p>But I don't think we're ever goingto turn into cyborgs and or,you know, someone's going to replace mephysically.</p>
<p>Well, and that was that was the same fearswhen the Internet was going wild.</p>
<p>Right.</p>
<p>And it does change economies.</p>
<p>Absolutely. Yes.</p>
<p>Changes. Yes.</p>
<p>I want to</p>
<p>I want to touch on this diversity aspect.</p>
<p>Should we have diverse eyes as well?</p>
<p>Because we all know eyes are biased,period.</p>
<p>Yes, They they are biased.</p>
<p>Yes. Right.</p>
<p>So should I have a chat?</p>
<p>GPT and Google's is bear a rightif they were trained withwith even the same data setsbut with different biases kind of built inbecause there are biasesthat's just absolutely.</p>
<p>Well think about.</p>
<p>Would it make sense to have to,you know, give me answers back.</p>
<p>Well, yes.</p>
<p>And I think that that's part of the reasonwhen people are designingtheir models, lots of timesthey are looking at OC.</p>
<p>I think linear regressionwould be a good thing for this.</p>
<p>But I also know that I should be thinkingabout leveraging maybe gradient boostor some other algorithmand they weight them differentlyto come up with better and more accurateand potentially less biaseddata.</p>
<p>But the truth is, as you said, I mean.</p>
<p>Chatterjee GPT is based on informationthat's around the worldthat's fed in whether it besocial orthings that are comingfrom the Library of Congress or wherever.</p>
<p>All this information is coming from itby by default is biasedbecause it's designedby biased people and robots.</p>
<p>Well,and it's also a filter, too, right? Right.</p>
<p>Because if you rememberthe first chat shippedor it was even to was was wasfilthy. Right?</p>
<p>It was right because they just scouredeverything on the Internet.</p>
<p>Well, there's a lot of really garbage.</p>
<p>Yeah, right.</p>
<p>So, so they had people and</p>
<p>I can't remember which country was it inwas in the Philippines or Nigeria.</p>
<p>They had large amounts of people filteringdata.</p>
<p>Right.</p>
<p>They had criteria and said, go, go labelthis data.</p>
<p>As you know, we don't want it.</p>
<p>So obviously there is some notnot even in the algorithms,but in the data that we feed itand the data we decide to feed it presentssome level of trustworthiness, right?</p>
<p>Whether good or bad,there is a level of trustworthiness there.</p>
<p>Yeah. Yeah.</p>
<p>And when I mean, we're looking at it fromall of these different senses,we're looking at it from a visual sense,an auditory sense, a kinetic kind of</p>
<p>I mean, so we look at thingsfrom a whole bunch of different sensesthat the computer doesn't have,despite the fact that everyone says,oh, it's it's human or it's it'sisn't intelligent as a human intention.</p>
<p>And it's and it's not.</p>
<p>I mean, these are machinesthat have huge capability,and we are able to helpdesignthe systems to get to better answers.</p>
<p>But it still is because in just God'souter kind of thing, it's not the.</p>
<p>Oh, okay.</p>
<p>So I am also comparing I'm</p>
<p>I'm connecting that with a differentinformation loop that I might have hador a different sense that I might have hadbecause I went to Africa or whateverit might be, that you just have differentthings that you bring into it.</p>
<p>And that's why I think it's not an eitheror, it's a both, you know, And</p>
<p>I think that it's also really importantfor us to realize that we're not finished.</p>
<p>You know,this is the beginning of the conversationthat's going to continue to go on.</p>
<p>And there will be more and more thingsthat we will not have to do.</p>
<p>I mean, case in point in that session,</p>
<p>I was talking to you about where</p>
<p>I'm an artist and his wife.</p>
<p>She happens to be a Ph.D.in psychology.</p>
<p>The two of them were on the paneland they talked about how their son,who I think is probably in the thirdor fourth grade, doesn'teven know how to sign his own name.</p>
<p>And everyone knows how horrible.</p>
<p>And it's like he doesn't need to do that.</p>
<p>You know, you use Venmo, youyou do all of these thingswhere it's digital signing, etc.,so you just scribble whatever it is.</p>
<p>And he doesn't really know cursive.</p>
<p>That's, you know, does he really need to</p>
<p>I mean, it makes you start to think aboutthose assumptions that you've beenbrought up with or that you have thatyou know, truthfullythat might not be as relevant these days.</p>
<p>Do you really need to knowhow to write something in cursive?</p>
<p>So what you're telling me, peoplethat have a hard time with changecan have a really hard timeover the next couple of yearsbecause this is fundamentallygoing to change a lot of things.</p>
<p>Oh, yeah, yeah, yeah, absolutely.</p>
<p>And as people have talked for years,you know,about the fourth Industrial Revolution,we're in the middle of it.</p>
<p>And I think that for</p>
<p>I thinkthere's a lot we can learn from historyin termsof how to better move people through this.</p>
<p>But this is moving so quickly.</p>
<p>It's like it's sort of like thatfunny T-shirt I saw one day.</p>
<p>You know, it.</p>
<p>If you want to be on the porch,you got to play with the big dogs.</p>
<p>It's sort of like you got to jump onand pay attention to this.</p>
<p>But at the same time, with a certainamount of skepticism and the thoughtprocess of am I working with other peopleto really think about andthat you have the obligationto raise ethical questionsand concernsthat are coming from that the information.</p>
<p>So is that why the pause?</p>
<p>Is that why all the.</p>
<p>Well,it wasn't all the leaders, but no, I was.</p>
<p>Going to say this is this is where</p>
<p>I'm going to show my feminist side.</p>
<p>But it was interesting thatall the pause came from people of one Sex.</p>
<p>And for the most part, one caller.</p>
<p>I didn't know.</p>
<p>I didn't I didn't even thatdidn't even hit my hit my radar.</p>
<p>Yeah, it.</p>
<p>Was, you know, Elon Musk and Wars,</p>
<p>Wozniak and others.</p>
<p>And then granted, I hear whatthey were saying, but literallynot just Elon Musk,but two or three days afterit talked about how much moneyyou just invested in a chat.</p>
<p>GPT like company.</p>
<p>Yeah, I did.</p>
<p>I thought it was. Up to be suspect.</p>
<p>Yeah, I was thinking the same thinga little bit.</p>
<p>Gretchen But not with Elonbut with the CEO of Openai.</p>
<p>Yes. When he saidlet's put a pause on things.</p>
<p>Now that I've released chat or gpt four,nothing should go beyond GPT fourand I'm like, you know what?</p>
<p>You sound very insincere, right?</p>
<p>And it might be, I'm afraid that some ofmy competitors are going to catch up.</p>
<p>That's what it sounded like to me.</p>
<p>There is a real concern though, right?</p>
<p>Is there not otherwisebecause a thousand people signed it.</p>
<p>Yes. Yeah, I mean,there were a lot of people that signed it.</p>
<p>And I think part of it is thatjust isthey're wanting usnot to think it through.</p>
<p>I think that people are smarter than thatand that they really areor should not assumethat that is a 100% answer.</p>
<p>You know, that it's not completelyaccurate, you know, and the truth iswe owe it to the societyto really think aboutwhat are those ethical questions?</p>
<p>Are we respecting human rightsbased on this information?</p>
<p>Have we really had the right human teamoversight with all of that data?</p>
<p>Are we able to explain it?</p>
<p>And if you can't explain it, thenyou have to be suspect to like,where does all this data really come from?</p>
<p>From chat.</p>
<p>So so what you're saying.</p>
<p>Yeah, I get it.</p>
<p>We need to teach the world that.</p>
<p>Hey, Chadshipped is is an aggregator of dataand a distributor of ideas, right?</p>
<p>Yeah, but it is fed by datathat is two years old.</p>
<p>First off. Yes. Yes.</p>
<p>And because I put in there was.</p>
<p>Flawed.</p>
<p>And flawed, but but let's takelet's talk about our upcoming generation,because I've got three teenagers at homeright now, 16, 17, 18.</p>
<p>You know, if you were to ask them,is Churchill Beatty accurate,they would say 100% true.</p>
<p>And and frankly, I think that'sthe sentiment of most people,not just of the younger generation,but I think of a lot of people.</p>
<p>It's an A.I., It's intelligent.</p>
<p>Right. Right.</p>
<p>So I think we need to get out the wordjust like we did with the Internet,saying, hey, not everything you read onthe Internet is true.</p>
<p>We need to say the same thing about A.I..</p>
<p>Not everything you hear from an AI is truebecause the basis of its datais the internet.</p>
<p>Yes, that's the basis of the datais flawed and and biased in its own right.</p>
<p>And also,to your point, a couple of years old,</p>
<p>I've learned a lot and changemy opinionson a lot of things in the last two years.</p>
<p>So how you know what I mean?</p>
<p>So there's so many thingsthat are out there that can do that.</p>
<p>I think what this really forces,which is something that I've alwaystried to figure out how I can doit better, is to think critically.</p>
<p>I really think that whatthis is going to force is that becomespart of the curriculum for grade schooland for college, medical school.</p>
<p>And and that weyou know, we work for some of thewe work with some of the brightest peopleon the planet at Intel.</p>
<p>I mean, it's scary scaryhow smart they are.</p>
<p>But at the same time,we all have flat sides.</p>
<p>We all are,you know, have our own bias and come intothings from a different perspective.</p>
<p>And I have found, as I'm sureyou have, too, that when we pull peopletogether who come at itfrom that different perspective,we end up with somethingmuch better, much, much better decisions.</p>
<p>And that that criticalityof asking those questions like</p>
<p>I know I was annoying when I was a kidbecause I would always ask why,but you know. What I mean?</p>
<p>I could see you as that kid.</p>
<p>I told you like I would raise my handin class all the time.</p>
<p>You would be like, Shut her up.</p>
<p>But you know what I mean.</p>
<p>So I'm like, Why?</p>
<p>Why are we thinking thatthat's the best way to do this?</p>
<p>Or so And so based on the workthat you've done, have you thought aboutis there a different way to do this,or do we have all the data?</p>
<p>Are thereother places that we need to go to?</p>
<p>So. Chad JPT Absolutely.</p>
<p>Great place to get some info,but we also should be lookingat other places again like that.</p>
<p>As I was talking aboutcreating those models where you useseveral different algorithms and then wethem based on whatyou're really trying to do.</p>
<p>But it all starts from what's the problem?</p>
<p>What are you trying to solve?</p>
<p>Are you asking the right questions?</p>
<p>And again, are you really thinkingand coming at this critically?</p>
<p>And I think it alsobrings us to the point whereit's not a you know, again,when I was in my math class,if I got the answer, I good if I didn't.</p>
<p>All right, you didn't get it right.</p>
<p>But in our world today,nobody works by themselves.</p>
<p>They can't.</p>
<p>Yeah, with all of the informationand all that we need to do, it has to bea blended, diverse teamthat, you know, different ages,different sizes, different sexualities,you name it, that you just have people.</p>
<p>Get different perspectives.</p>
<p>Is that that that's.</p>
<p>Yeah it's it's critical.</p>
<p>And and I think having those kindsof discussions and pulling in thisdifferent data will allow all of usto think more criticallybecause I think we have gotten lazy,like you said, Oh, beauty is 100% right.</p>
<p>No, it's not.</p>
<p>I mean, no, there's a lot of things.</p>
<p>Film errors.</p>
<p>Yeah, exactly.</p>
<p>Like I asked,who wrote who wrote this book?</p>
<p>The articulate case deployment.</p>
<p>I wrote that bookand it didn't have me in there.</p>
<p>It had some other person in there,like when where to get that from.</p>
<p>And so it was fascinating.</p>
<p>Oh, it was it was fundamentallywrong on a basic fact,which I thought was interesting.</p>
<p>I want to shiftgears from trustworthiness.</p>
<p>Sure. Into ethics.</p>
<p>And I'm going to pose thisbecause I heard it on the news thismorning and I was like, wow.</p>
<p>And I generatedsong, which was a collaborationbetween Drake and Breck.</p>
<p>I think it was. The other artistwas released on on Spotify,</p>
<p>Amazon Musicand all that, got 15 million downloadsand the artists were not involvedin the collaboration at all.</p>
<p>And I did it.</p>
<p>It was taken down immediately,but it was the most popular songfor the month of April, you know, one day.</p>
<p>And they were they were talking on on theon the radio this morningwhen I was listening to it,they were talkingabout the ethics behind itand were people just downloading itbecause it was air generated.</p>
<p>So my question to you ishow how do we control the ethicsaround A.I.and generating content?</p>
<p>And do we attribute that?</p>
<p>I mean, what are the otherethical issues we have around A.I.generatedcontent?</p>
<p>Yeah,</p>
<p>I think you bring up a really good point.</p>
<p>And I think this is where,you know, for folks like you and Iwho work in the government space,this is really where the technology is wayfar advanced from the policy.</p>
<p>And and that we are going to have to thinkaboutsome of those policy questions.</p>
<p>But I think it goes backto thinking about it critically.</p>
<p>I mean, if if you highlight that the</p>
<p>I mean, I'm assuming somebody said, hey,take a Drake songthat sounds like X or this artist songthat sounds like Yand mash it togetherand come up with a, you know, okay,</p>
<p>But you're right that the responsibilityis that you say, Hey, that's what I did.</p>
<p>And thenif there are certain things that you needto, you know, copyrightand all that, again, it'sthat the policy isn't set up for that yet.</p>
<p>But I think that the capabilitiesare there.</p>
<p>And so I think thatwhen you're building itthat you need to describe what that is.</p>
<p>And if you can't describe it,</p>
<p>I mean, to methat just feels wrong that you shouldn'thave it out there.</p>
<p>But again, I'myou know, but when I'm one person.</p>
<p>Yeah, but should we even allowtechnologists to produce technologylike this?</p>
<p>That's where the big question is, right?</p>
<p>This is another example.</p>
<p>And we're starting to see more of this.</p>
<p>I just read an article and it's actuallyin our in our weekly podcaston Embracing Digital this week,which is a news podcast.</p>
<p>There was a A.I. voice.</p>
<p>Cloning is an issue and badpeople are using itto virtually kidnap children.</p>
<p>It's a huge problem, I guess.</p>
<p>And the FBI is all over thiswhere they've captureda little bit of a of your child's voice.</p>
<p>They then call you on the phone andand your kid is talking to you, Mom,</p>
<p>I'm in danger.</p>
<p>Someone has kidnaped me.</p>
<p>And then the kidnaper gets on the phone.</p>
<p>Yeah. Yeah.</p>
<p>So, yeah,</p>
<p>I. Think it if we even allow A.I.to go in this direction wherebecause as you said in the beginning,the genie is out of the bottle.</p>
<p>So how do we pull it backin? I don't know.</p>
<p>Well, you know, I think a great example ofus thinking about that is our statecatcher product that we have.</p>
<p>And so that's it.</p>
<p>And again, maybe we can create thatsame kind of thing that people haveand they can just add it into their phoneand it becomes an app or a model card,so to speak.</p>
<p>But in the case ofthe fake catcher, the idea is thatyou and I are human.</p>
<p>We are not A.I. generated.</p>
<p>And you know, we have different colorin our face and different waysthat our heart is beatingthat is different than a fake video.</p>
<p>And so what we have done is we have a toolthat is over 90 to, I think 93% accurate,where you run this through the videoand it will show you, hey, it's a fake.</p>
<p>And I think that part of the technologynow needs to createthose things like truth.</p>
<p>We need to create modules and toolsthat can help. A.I.</p>
<p>In terms of is it ethical or not,are therequestions that should be askedbefore something goes out?</p>
<p>And as a designer of technology, you know,we need to be thinking through someof that and then have thatalmost thatchain of custody or that detailthat then would say,here's what we went through, here'show we did this, here'sthe data set that we used,and that that almost has to besomething that every time you releasesomething like a next version of chatbotthat that's attached to itwith all of this.</p>
<p>So we know what actually went in in.</p>
<p>Exactly, exactly.</p>
<p>So so Gretchen, this is really interestingbecause it sounds to melike this is an air arms racein some respects, right?</p>
<p>Because you've got count,you've got counter A.I.or fake detection to detectair generated content.</p>
<p>We but like you said,the genie is out of the bottle.</p>
<p>So there are bad actors out therethat are going to use A.I.for bad things,just like they did with the Internet. Yep.</p>
<p>And just like they'rethey're they've done with cryptoand now they're going to do with A.I..</p>
<p>So this is an education technologycombatant, right?</p>
<p>Going back and forth.</p>
<p>But if we compare thisa little bit to the nuclear arms race,it's a little bit differentbecause there's somethere's some fundamental knowledge.</p>
<p>You have to have and somephysical materialthat you have to have to builda nuclear weapon.</p>
<p>Right? Right.</p>
<p>But to build an A.I.,that that can do some crazy.</p>
<p>This is all out in the wild.</p>
<p>It is.</p>
<p>And I think we also need to think abouthow even things like Facebookand others have created people very dug inand not having realcritical conversations on things.</p>
<p>And that's to me,that's the thing I worry aboutthe most, isthat people will really believe thisand and thereforemake some decisions based on it.</p>
<p>And the decisions could be, you know,detrimental and potentially, you know.</p>
<p>So you're talkingpoliticians could be making decisionsright in in policy and lawsand things like that. Right. Right.</p>
<p>Yeah. Based off of you too.</p>
<p>And I think youand I and others need to benot onlyeducating the current politicians,but working hard to get peoplewho are a bit younger,especially in the US, because, you know,</p>
<p>I remember I think it wasthe Alaska Senator Ted Stevens, talkingabout the Internetwho said it was just a bunch of tubes.</p>
<p>Oh, that was that was also Al Gore, too.</p>
<p>But I was like, yeah.</p>
<p>So, I mean, some of it is,you know, we we have to to deal with itfrom all fronts.</p>
<p>And I think it's impossibleto put a hold on on that.</p>
<p>And I also I really believe most ofthe people want to put holds on it,like you said, want to do itso that they can make more money.</p>
<p>It it you know,it came across that way, frankly.</p>
<p>But I agree with whatthey're saying in general,which is we got towe got to figure something out herebecausewe have to educate people.</p>
<p>We've got there's a lotthat has to be done in this spaceand we have to understandthe ethics around using a chat.</p>
<p>JPT I can't imagine teachersmust be pulling their hair out in collegesand in high schoolsbecause who needs to write a report?</p>
<p>You know, I mean,my kids have been playing around with itand they said,</p>
<p>Help me write a script for a new playwhere the antagonistand the protagonist are these charactersbased off of superheroesin the early 1900s?</p>
<p>And bam, it's like, holy cow.</p>
<p>So is it Well,is it whowho understands technology the best wins?</p>
<p>It has been, you.</p>
<p>Know, maybe.</p>
<p>But you know, I'mgoing to go back to one of my favoritewomen in technology,which was Admiral Grace Hopper.</p>
<p>And she heard one of her quotes,which I really like, isno computer is ever going to aska new reasonable question.</p>
<p>It takes trained people to do that.</p>
<p>And I think that we all need tothink about that when we're using chat,because some of it is arewe asking the questions in the right wayso that it really is explainable,you know, And are weare we potentially withsome of the things that we're using,creating new security risks?</p>
<p>You know, you and I are talkingabout a number of things that to mereally are security risks.</p>
<p>And how do wehow do we</p>
<p>I won't say go backwards,but how do we start to look at,you know, those kinds of questionsthat a teacher needsto ask in terms of,okay, I assume you use Chad.</p>
<p>GP How much of it did youwhat were the questions that you asked it?</p>
<p>How did you formulate your outline?</p>
<p>You know, some of thoseask it in a different as a teacher, askin a different way, make the assumptionthat they're probably using it.</p>
<p>But how did you use it?</p>
<p>What are the ways that you cameto the paper that you have?</p>
<p>You know what I mean? Yeah.</p>
<p>Yeah, I, I get it.</p>
<p>It's, it's an interesting dilemma.</p>
<p>And the truth is there'swe're at the beginning of all of this.</p>
<p>And as I said, there's there's no I mean,</p>
<p>I wish I had all the right answers,but I, you know, this isit's a writing process.</p>
<p>It's, it's a journey.</p>
<p>And and really,there is no endpoint there.</p>
<p>There will be more thingsattached to a chat.</p>
<p>JPT There will be more autonomousmanufacturing.</p>
<p>There will be a lot more autopilotcapability.</p>
<p>I mean, there's just so much morethat's going to happen.</p>
<p>And I think that anybodywho thinks they can stop it is is crazy.</p>
<p>Yeah. Yeah.</p>
<p>I mean, or or they or they think they'remore powerful than they really are.</p>
<p>Yeah. Yeah. Well, okay.</p>
<p>Well, yeah, there you go.</p>
<p>But that's true, too.</p>
<p>So. Hey, Gretchen,it's been great talking to you.</p>
<p>Obviously,we're going to have to talk to you againin six months for sure, becausethe landscape is changing so quickly.</p>
<p>Oh, apps and shorter than that.</p>
<p>So. Absolutely.</p>
<p>And thank you.</p>
<p>I appreciate it.</p>
<p>Again, I don't have all the answers,but I'm definitely willing to, you know,ask more people and try and,you know, improve my critical thinking,because that to me is reallythat's the fun part.</p>
<p>Yeah. No.</p>
<p>And the fun. Yeah,</p>
<p>I totally agree with you.</p>
<p>Thanks again,</p>
<p>Gretchen, for coming on. You're welcome.</p>
<p>All right.</p>
<p>Thank you.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org.</p>
<p>Until nexttime, go out and do something wonderful.</p>

</details>
