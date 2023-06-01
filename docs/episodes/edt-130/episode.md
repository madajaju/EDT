---
layout: posts
title: "Productizing Decisional AI"
number: 130
permalink: episode-EDT130
has_children: false
parent: Episodes
nav_order: 130
tags:
    - ai
    - decisionalai
    - aiproductization
    - people
    - process

date: 2023-03-23
guests:
    - Darren W Pulsipher
    - Matthew Pulsipher

img: thumbnail.png
summary: "In this episode Darren interviews his son Matthew Pulsipher about productizing decisional AI. Matthew has recently modernized and product development pipeline to include decisional AI in his product development."
---

{% include soundcloud.html id="edt130" title="#130 Productizing Decisional AI" %}

{% include youtube.html id="x2sbb-2HI-o" %}

---

In this episode, Darren Pulsipher, Chief Solution Architect of Public Sector at Intel, interviews his son Matthew Pulsipher, a Product Manager, about the productization of Decisional AI. Matthew explains that generative AI is built on general datasets and is good for general knowledge questions but lacks predictability and determinism, making it difficult to automate processes. Decisional AI, on the other hand, is simpler in scope but more focused in context, allowing it to make data-driven decisions based on specific company needs. Matthew shares his experience integrating Decisional AI into products and highlights the importance of context in AI.

## Type of AI

There are different types of AI, and each has a unique ability to help organizations automate processes, make business decisions and augment human work. Decisional AI is primarily used for making decisions and is based on models generated from previous data. Predictive AI, on the other hand, generates predicted values based on custom models and data sets. Training models is critical to the deployment and implementation of AI solutions. The key is to identify a real problem that is operationally relevant and achievable within a reasonable timeframe.

## AI to streamline processes

Artificial intelligence (AI) can be used to streamline decision-making processes in businesses. It is important to scope the AI's capabilities to a specific set of options, so as not to overwhelm the system and make the decision-making process more efficient. AI is best suited for processes that are repeated, involve data-driven decisions, and require subjective human reviews. For example, a financial institution can use AI to validate driver's licenses using extracted data. Continuous training through user feedback to the AI can improve its decision-making abilities and eventually replace the need for human review altogether. Ancestry.com's indexing project as an example of how reinforced learning can reduce the need for human involvement over time.

## Human in the Loop

When building a machine learning backend, it's essential to keep the user's needs in mind. The goal is to streamline their current process and provide an aid to help them do their job more effectively. To achieve this, it's crucial to interview and observe users in their current environment to understand their behavior, identify inefficiencies, and document any inferences they make that may not be documented. By doing so, you can curate the data to pull out inferences before sending them to the model, which will result in more accurate results based on replicating human behavior. It's important to remember that the inferences are often more critical than the raw data, and by understanding the user's behavior and needs, you can design a better AI product.

Another key factor in deploying AI is the human factor. It's about establishing the right context when implementing automation to avoid the fear of job loss. How to deal with potential AI/Human problems, such as stakeholders circumventing the AI put in place for them. One solution is to design the interface to make it clear when a user has reviewed a specific data point and provide overrides where needed. Additionally, asking stakeholders about their reasons for bypassing the system can help improve the model and prevent gaming of the API. Ultimately, AI and humans can work together to achieve better results.

AI can take care of easy tasks if it's well-trained, and humans can learn to leverage AI better over time. Building collaborative interfaces that make AI a team member rather than a cold algorithm, allowing for more natural interactions that can help it learn better. AI will become essential in any job dealing with stakeholders who process human data due to the variability involved. 


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people processand technology.</p>
<p>On today's episode Productizing Decisional AIwith special guest Matthew Pulsipher.</p>
<p>Matthew, welcome to the show.</p>
<p>Hey, Darren</p>
<p>It's weird You can't call me Darren.</p>
<p>I'm your dad.</p>
<p>Fair enough. Yeah.</p>
<p>No, no.</p>
<p>This the first time I've interviewedone of my kids on the show.</p>
<p>And it's apropos right nowbecause of what's going on inartificial intelligence.</p>
<p>So, Matthew,give us a little bit of your background,where you're coming fromand why we have you on the show today.</p>
<p>So I'm a product managerand I've worked withseveral companiesjust modernizing their product line.</p>
<p>And in my most recent role,one of the things I've worked onvery particularlywas integrating Decisional A.I.into the product.</p>
<p>And I found that was a veryintriguing, interesting experience,and it showed where a lot of the promisesand a lot of the exact tacticsthat you have to have when doing so.</p>
<p>You know, it's really interestingbecause not a lot of companieshave actually productizedany kind of eithertheir internal stuffor a chat bot here or something like this.</p>
<p>So this is a new field, right?</p>
<p>Oh, absolutely.</p>
<p>And the thing is that it's very commonthat everyone just kind of assumes A.I.is chat CBTor just other generative AI systems.</p>
<p>Right?</p>
<p>And in business, there's definitely a fitfor those systems and they become moreand more sophisticated every day.</p>
<p>But what matters the most in</p>
<p>AI is context.</p>
<p>And the issue with generative</p>
<p>AI is, is that you have limitedcontext of requestbecause you were limited to the prompt.</p>
<p>Everything beyond that contentor that promptis coming from its general dataset.</p>
<p>Okay.</p>
<p>But before we get into that, whatlet's let's simplify this a little bitbecause there's lots of different</p>
<p>AI techniques out thereand you kind of talk to me a little bitabout three different types of A.I.,</p>
<p>So let's let's kind of let's set thatground first.</p>
<p>What are the the main three types of of</p>
<p>AI that we see out there today?</p>
<p>Sure.</p>
<p>Well, you've got generative, which iswhere most of the hype is right now,and that's what Chat GPT is and othertexture writers image generators.</p>
<p>These generate text or imagesor contentand they're built on general datasets.</p>
<p>So it's just kind of takinga slice of whateverit was trainedon, which is just about everything.</p>
<p>For each query that you're sending to it,you need to give it the contextper query,and that can be kind of limited,which makes it good for general knowledgequestionsand difficult, complex individual tasks.</p>
<p>But it doesn't make it very goodfor making focuseddecisions based on your company.</p>
<p>Okay, so generative</p>
<p>AI generalized right IT general knowledgetrained on lots and lots of datafrom lots of different spaceswhen you ask it questions it.</p>
<p>It's like talking to someonethat reads encyclopedias.</p>
<p>Right.</p>
<p>And it can be a little bitunpredictable, too, right?</p>
<p>Because you don't alwaysget a standard response back.</p>
<p>Oh, well, how so?</p>
<p>Well, there's never a 100% chanceyou can ask it very specific questionsand offer a format.</p>
<p>And there's a very good chanceit will come back in that format.</p>
<p>But you never have 100% guaranteebecause there's alwaysa little bit of randomness to it.</p>
<p>Otherwise it would always produce the sameanswers for every single question.</p>
<p>So that's why if I ask it the same thingtwice, I don't get the same response.</p>
<p>I get a little bit different responseeach time.</p>
<p>Right. Okay.</p>
<p>All right.</p>
<p>So there's no absolute nesswith generative AI.</p>
<p>Very good AI, very good tool.</p>
<p>I play around with chat GPT all the time.</p>
<p>I use it for my podcastto find out information.</p>
<p>It's good at summarizing informationfor me and pulling in different formatsthat I need, but that lack of predictable,deterministicresponse makes it very hardto automate processes using it.</p>
<p>Okay, is this where the next step is?</p>
<p>Which is decision way AI or. Yeah.</p>
<p>Okay, so explain decisional AI then.</p>
<p>So the difference between generativeand decisional, a generative</p>
<p>AI is based on general knowledgeand it generates text or contentbased on that general knowledge.</p>
<p>With Decisional A.I., it is a lot simplerin its scope, but it's a lot morefocused in its context.</p>
<p>So Decisional, the AI chooses the bestoption given a set of data based on modelsgenerated from your previous dataand trained using your own company's data.</p>
<p>So this is this helps me focusand target decisionsbased off of previous decisions</p>
<p>I have made in my in my companyor in my industry.</p>
<p>Right?</p>
<p>If I'm sharing models in industry models,then that would be the case.</p>
<p>And you can take those modelsand train them according to your employeesor departments behavior.</p>
<p>Okay.</p>
<p>And Decisional, I used primarilyfor making decisions.</p>
<p>Decision only makes decisions. Right?</p>
<p>And those decisions could be usedfor balletic,validationand verification of uploads from a user.</p>
<p>It could be used to presentthe best product to a customerbased on their activities, on your siteand other information you know about them.</p>
<p>And it's based on a lot of contextfrom your company's data.</p>
<p>So it's the opposite of Jeremy Vinethat Jeremy knows a lotabout everythingand it's never really deterministic,but Decisional</p>
<p>AI knows a lot about your specific caseand it will return deterministic results.</p>
<p>Okay.</p>
<p>And I want that determinismwhen I'm dealing with business processand things like that.</p>
<p>So I would use decision when I do decidewhether a product is good,good enough to ship,or whether a customer that I have is worthextending a line of credit to or a vendoris giving me the best price in timeso I can use decision making for businessprocess and business process automation.</p>
<p>That's what I'm hearing is that right?</p>
<p>Correct.</p>
<p>It's very good for automation becauseit picks between options A, B, C, or D,</p>
<p>Okay.</p>
<p>All right.</p>
<p>All right.</p>
<p>So the last one hereand where we want to get to, right?</p>
<p>Eventually predictive.</p>
<p>I want it to tell mewhere the stock market's going,why SBB Bank actually failed.</p>
<p>And I would have gotten my money outbefore it failed.</p>
<p>This is predictive AI Right.</p>
<p>This is where I really wantto get to, right?</p>
<p>So predictableis almost a cross point between the two,but it's a lot more similar to Decisional.</p>
<p>So it's based on the custommodels and datasets that you have,but it generates a predicted valuebased on those other numbersand data points that you have.</p>
<p>And that predictive valueis based on the previous performanceof thatyou've worked in decision.</p>
<p>We are not predictive by decision AI.</p>
<p>So I don't, I just go grab this modeland it solves all my problemsfor decision making.</p>
<p>I mean, you can do it, all right?</p>
<p>So I just grab it, right?</p>
<p>I just</p>
<p>I just go to Walmart, buy my decision.</p>
<p>Okay?</p>
<p>I for industrial for my manufacturingby my decision,</p>
<p>I plug it in and I'm ready to go.</p>
<p>Is that how it works?</p>
<p>I mean, if you're dealing with a modelthat is working with cost softwareand it's using establishedpre-trained things, it can be that simple.</p>
<p>But in practice, yeah, I mean,actually there are marketplaces of modelsthat you can importthat take standardized datathat are pre-trainedto like a certain standard, right?</p>
<p>So you can start using those immediatelyand then train it further using your usersdata. Okay.</p>
<p>So I don't have to start from scratch.</p>
<p>Not all.</p>
<p>And, and it's not like I'm going and justbuying something that plugs in directly.</p>
<p>There's a little bit of work involved.</p>
<p>There's some integration work.</p>
<p>There are some SAS vendors out therethat offer Decisional is kind of a serviceand you can set up your containerand make those API callsand you're just feeding your data into itand getting those decisions backthen, sending corrections if needed.</p>
<p>And what kind of get intoif you were to start from scratch,what that would look like.</p>
<p>All right, so let's start.</p>
<p>How do I get started?</p>
<p>How do I decide whether I can use decision</p>
<p>AI or not?</p>
<p>Walk me down the process.</p>
<p>Sure.</p>
<p>Well, the first thing that you need to dois identify the problem that youwant to solveand once you've done that,you can determine whether it's a good fitfor A.I., it's a good fit for A.I.if it's not too large.</p>
<p>Otherwise, you're going to spend monthsand months trying to accommodatea very complex set of datawith not necessarily accurate model.</p>
<p>You want to pare it down to the pointwhere it is something that's achievablewithin about six months.</p>
<p>If you want to be successful right now.</p>
<p>And part of that, too, is pickingsomething that's operationally relevant.</p>
<p>If you're deciding to solve a problemthat doesn't really matterto your operations or your business users,you're doing it to say that you're using</p>
<p>AI and that's all you're going to achieve.</p>
<p>You need to solve a real problemthat helps the business.</p>
<p>So you need to scope your probleminstead of saying,</p>
<p>I want it to do a whole bunch of things,scope it to I want it to helpmake decisions on this specific thing.</p>
<p>Is that what I'm hearing?</p>
<p>Right?</p>
<p>You want to find somethingthat is has reasonable boundsso that you can limit your optionsbecause you're trying to have a decisional</p>
<p>I for a limited set of options, Right.</p>
<p>Let's say five options at mostit could be more, could be less.</p>
<p>But you don't want to make it toodifficult on yourself because that needsto be an answer to the query,whatever that decisional option is.</p>
<p>And we'll get into that in a minute.</p>
<p>We talk about influencersand decision options.</p>
<p>Another thing that makes problemsa good fit for A isif it's a repeated process,is this something that your business usersare doing every day?</p>
<p>Is it busywork?</p>
<p>Well, I mean, so. Whoa.</p>
<p>But decisions have to be made here.</p>
<p>So this is not just like an RPA,a robotic process automation, where</p>
<p>I'm just, oh, they, they go and do this,then they do this, then they do this.</p>
<p>There'sdecisions involved in this automationas well, right?</p>
<p>It's notit's well, there are a lotthere are a lot of thingsthat happen in businessesthat are repeated processesbut still require subjective human review.</p>
<p>Gotcha.</p>
<p>And the example I want to usethe other thing is that's data driven,but we can kind of talk about this exampleand how it applies all these things.</p>
<p>Let's talk about a financial institutionthat needs to validate driver'slicenses using extracted data.</p>
<p>So I have a driver's licenseand I can run it through OCRand I can take those data points from it.</p>
<p>Right?</p>
<p>I need to determinewhether these data pointsare logically consistent and each statehas slightly different rules.</p>
<p>And what I want is, is this good?</p>
<p>Is this definitely bad,or does it probably need human review?</p>
<p>This way I can speed up and clearout the human queue of workand still have aamount of risk management involved.</p>
<p>All right.</p>
<p>So this this helps with making decisions,which means I can take the humanout of out of the loop where humanslooking at a driver's license saying, yes,that looks good against this pictureof a California driver's licensecompared to a Georgia driver's license.</p>
<p>I know what they're supposed to look like.</p>
<p>I can check it.</p>
<p>That can happen automatically.</p>
<p>But then you can have onethat says it needs to be thrown outand then another onethat says it needs human review.</p>
<p>Do you eventually see canthe decisional models get betterso I can throw out the human review?</p>
<p>Absolutely.</p>
<p>And that's the intent ofif you've built the product correctly,what you've built is an interfacethat streamlines the manual processthat they're already doing,because a lot of timespeople will establishmanual processes for these thingsthat there's no system to do it for them.</p>
<p>They could be doing it in Excel sheet,they could befollowing their own rules on it.</p>
<p>So what you want to dois figure out what those rules are,and then you want to come upwith data points around those rulesand then use those data pointsto train the A.I..</p>
<p>Then you feed it back into an interfacethat lets them do the work.</p>
<p>And as they're doing the work,you can do a couple of things.</p>
<p>You can give them a predeterminationthat upon human review you can validateyes or no on.</p>
<p>So you're kind of pre filling stufffor them, which helps productivity.</p>
<p>Or you can skip the queue entirelybecause you're confident that it's good,which speeds up the user experienceand increases productivityor you canjust say needs review.</p>
<p>The A.I.doesn't knowthere is enough confidence scoreand then when the human reviews it,they will submit their response.</p>
<p>And that response goes back to the modeland trains the model continuously.</p>
<p>So you know what this reminds me of?</p>
<p>It reminds me of workthat ancestry.com com was doingwith indexing handwrittendocuments from the 16 1700scensus documents and birthcertificateand birth records and counties.</p>
<p>They had legions of people that wouldgo on and say, I think this is what it is.</p>
<p>And I noticed over the yearsbecause we did indexing, it wasit was kind of fun, right,to look at these old documents.</p>
<p>And I noticed something really coolas the years went on and doing it,the decision, it would say,we think it's this is that yes or no?</p>
<p>And I go, Yes, guess what? Indexing.</p>
<p>You don't need asmany people anymore because the</p>
<p>AI has gotten really smart, right?</p>
<p>So this reinforced learning is part ofit needs to be part of your productoffering that you're working inin your offering, it sounds like.</p>
<p>Yeah.</p>
<p>And to make the most effective productthat uses this kind of machinelearning back end,you're going to build something thateven if you didn't have the machinelearning back end builtin, would still speed up the processthat your users are currentlygoing through by streamlining itand keeping them focused on what matters.</p>
<p>Oh, I like what you said thereabout keeping them focused on what mattersbecauseyou don't want the</p>
<p>AI to get in the way right?</p>
<p>Right.</p>
<p>So it's supposed to just be like an aidto help them do their job more effectivelyand in better, you'd want to interviewand get a betterunderstanding of what the users are doingnow in their current process.</p>
<p>Okay. Andthe best thing to do is just sitand watch them after you've readthe documentation that drives the process.</p>
<p>Sometimes they've documentation,sometimes they don't,but sit and watch themand take notes of what they're doing.</p>
<p>Are there things they're looking at?</p>
<p>So going back to the driver's license,are they looking at the issue datesin relation to the expiration date?</p>
<p>Are they looking at certain otherindicators of the driver's license?</p>
<p>Maybe if it's Georgiaand it has a gold border, it's invalidor something along those lines.</p>
<p>You just need to figure outwhich inferencesthey're getting from the dataon the driver's license.</p>
<p>And this is very important.</p>
<p>And we'll talk a little bit about howthe inferencesare more important than the raw data.</p>
<p>And if you can write codeto pull those out beforesending them to the model,you're going to get much more accurateresults based on tryingto replicate the human behavior.</p>
<p>So if you can identify areaswhere you want to do the inference.</p>
<p>So it's that interviewwhen when you talkedabout the interview, it reminded meof my first job out of college.</p>
<p>I don't know if I've ever told youthe story.</p>
<p>Oh, no.</p>
<p>So I my first company I worked withwas ASG Technologies Medical Imaging.</p>
<p>My job was to help come upwith the user interface for a radio,a digital radiography station.</p>
<p>Now, this wasvery, very cool stuff.</p>
<p>Sorry, this was very, very cool stuffbecause backthen people put films on light boards,so the first thing they hadme do was go and watchradiologists in these light boardreading rooms for three days.</p>
<p>And I just took notes on what they did,how they workedand it was fascinating because I learnedfrom the waythat they interacted with the film,what we could do inin our product to make itso it was used to how they workedand and I saw the inefficienciesin what they did and the tricksthey used to get around things.</p>
<p>Sounds like we want to use the sametechnique when we're developing A.I.internal products and also external,it sounds like, right?</p>
<p>Because usually I assumethat when you did this, you had some kindof a guide that they were trained on thatyou also read before? No.</p>
<p>Okay.</p>
<p>No, I sat there with seasoned whiteguys that were reading film for 20years, and I sat there withnew doctors.</p>
<p>Right. That have beenthat were still residents.</p>
<p>They were six months into this.</p>
<p>So it was fascinatingwatching what they did and how differentbetween the two, right?</p>
<p>Yeah, absolutely. Absolutely.</p>
<p>Because that's one of the things you'llfind is seasonedpros will come up with shortcuts.</p>
<p>And the shortcuts are oftentimesinferencesthat may not be documented orthey may not have been trained in school,but these guys have seen enough recordsthat they know thatif this is the case on a record,then we can skip this other stuffbecause we know that this is a problem.</p>
<p>As an example. So how do youhow do you do?</p>
<p>I mean, you literally just sit thereand watch people take a recorded session,have them talk through whatthey're doing and why,or you could do a silentinterview.</p>
<p>It really just dependson which stakeholder you're working with.</p>
<p>And if they're nervous,have them talk through it.</p>
<p>Otherwise they won't feel like you'rejust watching themand judging their performance.</p>
<p>Yeah, yeah, that's just me.</p>
<p>I think that's if you're just tryingto understand what they do and why.</p>
<p>I think that's why they put someoneso junior.</p>
<p>I mean, fresh out of college,sitting in a dark room, they were like,</p>
<p>Oh, he's just a piano over there.</p>
<p>He's not.</p>
<p>You're not about it'sthis is a performance review.</p>
<p>It's not understand what you're doing.</p>
<p>Yeah.</p>
<p>Because that's going to bea fear of a lot of people.</p>
<p>Have you had to dealwith any fear of people saying, well, if,if they're coming in here to helpautomate the process with an ally,is that replacing my job?</p>
<p>I mean, do people feel that way?</p>
<p>I think to a degree they do, but it's allabout establishing the right contextbecause they're really trying to dois help themwork on their workmore effectively and faster.</p>
<p>Right.</p>
<p>So another thing I've seen isif you aren't the kind of personthat interacts with the stakeholders thebest, have the UI designer do the studythinkthey have a lot of experience in the area?</p>
<p>So getting a good UI designer.</p>
<p>So this is what I'm hearing,a UI designer or productmanager, that'sthat's good at it, taking copious notes.</p>
<p>And so you have these stakeholdersthat you're working with.</p>
<p>Have you run into any problems where,where people are circumventing the APIthat you put into place?</p>
<p>Oh, absolutely.</p>
<p>Yeah. So how do you deal with that?</p>
<p>Well, to a degree, you do have to be ableto trust the stakeholderand you need to have overrideswhere neededbecause ultimately that departmentcan make their own decisions and the airis meant to help them,not interfere with them.</p>
<p>But the other thing that I've found that'shelpful isif they're trying to, let's saythat they want to mark something.</p>
<p>No, but we don't want to train the</p>
<p>AI to reject those in the futurebecause it was a weird exception.</p>
<p>It doesn't really fitin the standard rules.</p>
<p>I asked themthe reason they're marking it.</p>
<p>No, in your interfaceand then under behind the scenes,choose not to train the AI with it.</p>
<p>Oh, interestinginterest. So.</p>
<p>So when they mark something.</p>
<p>No. I ask them why?</p>
<p>Because it could bethat the rules are wrong, right?</p>
<p>Or it could be.</p>
<p>This is an exceptionthat only happens once every million.</p>
<p>Or there's some circumstancewhere it's not.</p>
<p>They need to, let's say it's driver'slicensevalidation and independent of the imagethat was sent in,we found out this driver'slicense is bogus.</p>
<p>They still need a way to do their work.</p>
<p>But if you don't give them a wayto do their workthat fits in the confines of the system,they will find ways to justmake it happen.</p>
<p>And you don't want thatto harm the models.</p>
<p>So if you were to ask them, well,why are you doing this?</p>
<p>You don't even need to factorthat into the model.</p>
<p>And you could include thatas a data point,but you could also just use as a datapoint as to whether you send it or not.</p>
<p>Interesting.</p>
<p>And I actually I actually like thatsometimes we don't we don't think aboutthose sorts of things.</p>
<p>What about stakeholdersgaming the, the API?</p>
<p>Um, unfortunately I do think that there isa little bit of that going onor it can happen.</p>
<p>Definitely.</p>
<p>What you can do to prevent that isyou want to design the interfaceto make it very clearwhen it's a user that revieweda specific data point orand either review the specific data pointand make it clear to themit's just it's there to help you.</p>
<p>It's there to protect it.</p>
<p>And if it's not deadon, you can correct it.</p>
<p>Now, gaming it.</p>
<p>You just have to make surethat your model is aligned with whatthe user is doingout of it.</p>
<p>No. No. Okay.</p>
<p>No, that makes sense.</p>
<p>I, I just thought because APIsare susceptible to to human interaction.</p>
<p>Right.</p>
<p>Right.</p>
<p>You could get a group of peopleto help deaths right.</p>
<p>That are or piracyflagging stuff so they say no.</p>
<p>So they say noall the time which they can skip over.</p>
<p>So somehow you've got to be ableto capture those sorts of thingsin the back end.</p>
<p>It sounds like.</p>
<p>And allies just look at the reasonsand try and think of them ahead of timeand make sure your interface accommodatesfor that and also allows them to feelheard if they need to bypassthat.</p>
<p>Again, go back to the reason dropdown.</p>
<p>If there's a reason dropdown there,we are accommodatingthe fact that we know that they're goingto need to bypass this sometimes,especially if I wasn't confident.</p>
<p>Right, Because it</p>
<p>Yeah, I wasn't confident.</p>
<p>It's an edge caseand eventually what ends up happeningis, is the model gets better.</p>
<p>Your team is really only going to workon edge cases and stuff.</p>
<p>That is not as clear.</p>
<p>So their work will get harder,but they'll be doing less of it,which is exactly where humans are useful.</p>
<p>Well, yeah.</p>
<p>You sound like my interview with chat</p>
<p>CBT humans will be useful for.</p>
<p>I'm just giving you a hard timethat. Yeah.</p>
<p>So it's it's interestingbecause the way I kind of see this goingthen is the AI'swill take care of all the easy stuffultimately if you're if you've got a welltrained model.</p>
<p>Yes. Gotcha.</p>
<p>And I also thinkthat humans are trained as wellhow to leverage the AI betteras as they continually go through it.</p>
<p>They're going to learnhow the AI is going to be predictiveand they're going to know the areasto only focus on those areasmoving forward.</p>
<p>It's in our it's in our nature toto learn.</p>
<p>So it's an interesting combination wherewe're learning together, the AI and thestakeholderare learning how to do this together.</p>
<p>That's that's actually fascinating.</p>
<p>And you want to build an interfacethat, you know, the AI is a team mate.</p>
<p>It's helping youand it needs to be collaborative.</p>
<p>The kinds of thingsthat you would put intoa collaborative interface where multiplepeople need to work on a single fileare the things that you would wantto integrate into an AI interface as well,because it appears another teammember to the user.</p>
<p>Oh, that's interesting.</p>
<p>I never thought of it that way.</p>
<p>I always thought of it as this coldheartedcomputer algorithm,but I like what you're saying there.</p>
<p>If I include it into the team, it'spart of my team,then I can interact with itmore naturallyand it can learn better from thatnatural interaction just in termsof how it appears in the tool.</p>
<p>Of courseyou can't have chat.</p>
<p>GPT participate in Slack channels oranything along those lines, but not yet.</p>
<p>Just give it some time.</p>
<p>Oh, so if you could stackdecisional generative,</p>
<p>I mean you could just tolerate APIs. So.</p>
<p>So where do you see this movingforward, Matthew?</p>
<p>I mean,do you see this as a blossoming industryfor product managers that got to learnhow to add a leverage into their products?</p>
<p>Or is this a special niche?</p>
<p>AI What what do you see?</p>
<p>I think it's going to become essentialfor any kind of jobwhere you're dealing with stakeholdersthat do human dataprocessing of any kind.</p>
<p>And why just human data processingjust because it's so much variability?</p>
<p>Well, if right now we've already kind ofhad the digital revolutionto a degree, right?</p>
<p>Yeah, Yeah.</p>
<p>If you already have it in dataand you can do hard line logicto solve the problem,you've probably alreadysolved it or should solve itusing just hard line logic.</p>
<p>But where decisional is arethe most usefulare cases where you need to have it.</p>
<p>Normally right nowa human review something manuallybecause it doesn't quite add up.</p>
<p>Gotcha.</p>
<p>Okay.</p>
<p>So that's that'sthat's the the key point there.</p>
<p>All right, great.</p>
<p>Matthew,any any last words for my audience today?</p>
<p>Well, I reallyappreciate you having me on the show.</p>
<p>And I am looking for my next opportunityto transform a business using A.I.. So.</p>
<p>All right. So there you go. There's this.</p>
<p>There's his pitch.</p>
<p>Go hire this kid, please.</p>
<p>I don't want him moving backin with me, butthank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org</p>
<p>Until nexttime, go out and do something wonderful.</p>

</details>
