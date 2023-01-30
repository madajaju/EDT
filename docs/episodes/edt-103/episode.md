---
layout: posts
title: "Operationalizing Your AI Projects"
number: 103
permalink: episode-EDT103
has_children: false
parent: Episodes
nav_order: 103
tags:
    - AIOps
    - DevOps
    - DevSecOps
    - Artificial Intelligence

date: 2022-08-30
guests:
    - Darren W Pulsipher
    - Gretchen Stewart

img: thumbnail.png
summary: "Intel’s Darren Pulsipher, Chief Solutions Architect, Public Sector, and Gretchen Stewart, Chief Data Scientist, Public Sector, discuss operationalizing AI projects."
---

{% include soundcloud.html id="edt103" title="#103 Operationalizing Your AI Projects" %}

{% include youtube.html id="HbXNLtGkD5E" %}

---

Gretchen is an excellent example of someone who continually learns and adapts. Her undergraduate degree is in mathematics. She has a Master’s degree in business, and she completed a program at Harvard just a few years ago focusing on data science which led to her position as Chief Data Scientist at Intel in the public sector. She’s worked in the technology field for over 20 years, starting with software engineering, and spent 15 years in the federal space.

She finds working in the public sector especially rewarding because it makes a difference in everyday citizens’ lives. In addition, the federal government has the most data on the planet, so it’s perfect for someone who loves to be awash in data and continue to learn more.

There are many terms surrounding AI. First, it’s essential to understand the difference between artificial intelligence (AI) and machine learning operations (ML ops). ML ops are techniques that are part of AI; they are a subset. ML algorithms derive their strength from an ability to learn from available data. So primarily, you are learning from either supervised or unsupervised data.

The simple difference between supervised and unsupervised learning is the data label. In supervised learning, the datasets are labeled. This means that what the data looks like is already mapped out. It makes it much easier to classify and predict. In unsupervised learning, you are trying to find patterns in the data; the machine is learning to create relationships between data based on finding common ways, similarities, or differences.

An example of supervised learning would be an online store recommending an item that a customer might want to buy based on their shopping history or a streaming service recommending a movie based on someone’s viewing habits.

Many terms now have the abbreviation “ops” at the end. For example, people say “DL ops” for deep learning operations, a subset of machine learning. Why the “ops”? First, it’s not as sophisticated as DevOps. Instead, it is influenced by the widely adopted idea of the DevOps approach to creating and customizing applications. People are trying to develop a set of practices to help optimize the reliability and efficiency of machine learning design, development, and execution. So it would be almost like a marketplace where you can create and operate custom applications and then share them with others.

Many models and algorithms are already optimized and available in tools such as Converge.io or C3 AI. These methodologies and technologies can help you streamline your machine learning models. The best way to do that is with many tools that are either open source or specific vendor-created software to make creating, developing, designing, executing, and flow much more accessible.

AI development is similar to where software development was 30 years ago. Many of the steps are still manual and will hopefully be operationalized soon.

In previous episodes, Darren and Gretchen discussed how many AI and ML projects are science experiments done once. Then the data scientist moves on to something else, and it’s never operationalized. Counter to this, ML ops is moving toward deploying the model to provide real value after training and learning.

Some companies are explicitly leveraging those tools.   Domino Labs, for example, almost creates that marketplace. Work in the public sector, say, on nuclear subs doing object detection or clustering classification, could be applicable in the Air Force or other auxiliary so that work could be cataloged to help operationalize and build agile environments. You could leverage some algorithms and weigh them differently depending on the results. You could tweak it based on the differences in datasets, but at least there are…starting points? Commonalities? Shared tools? Her last words here cut out…..

Security is always concerned with open-source software and models, and AI has unique circumstances. For example, how do you know the developer hasn’t trained it to ignore its face in a facial recognition model? There is an expectation now that people document things, for example, where a dataset came from.

There is also the issue of ethics and responsibility. The Tay chatbot and the bias found in facial recognition programs were great examples of AI gone awry without malicious intent. For a long time in ML ops, it was a single person doing the work and producing the results. Now, the idea is that you need a diverse team of people in different capacities with different worldviews.

The first conference to discuss AI and ML was in 1956 at Dartmouth College. The truth is that many AI basics, such as log regression, linear regression, clustering algorithms, etc., are math equations that have been around for a long time. Of course, there have been brilliant additional frameworks such as TensorFlow from which to build, but the basics are/were still the foundation. We’ve added computing, storage, 5G, and unique capabilities. Once you’ve done all the training, you’ve got the data and information next to the technology as opposed to having to bring it all to the technology. Bringing the technology to the data opens up some fun and exciting problems we can now solve.

But conversations surrounding how the model was trained, what was the original data, and accounting for model drift must always be happening. After a time, you need to retrain; maybe you need to bring in a different algorithm or weight the current one differently to get more accurate information because there’s more data and more data that is more diverse. This is all good because it increases your level of accuracy.

So with the movement toward ML ops, you can do this continuously. Just like software development went toward continuous integration and deployment, the same will start happening in AI or ML, where models will be updated and become more and more accurate. 


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, thisis Darren Pulsipher chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople, process and technology.</p>
<p>On today's episode,</p>
<p>Operationalizing your AI projectswith Gretchen Stewart.</p>
<p>Gretchen, welcome to the show.</p>
<p>Thank you so much.</p>
<p>I'm delighted to be here.</p>
<p>It's been a whilesince you and I have talked.</p>
<p>It has you.</p>
<p>This is your second or third time, third,third time on the show?</p>
<p>Hurd Yeah, it's the third.</p>
<p>That we need to have you on more often.</p>
<p>Gretchen is our chief solution or chiefdata scientist of public sector at Inteland Gretchen and myselfand Anna Scott,which we've all talked to on the podcast.</p>
<p>Together we make the triumph,the triumvirateof the CTO office in public sector,and we have a lot of fun.</p>
<p>And I invited Gretchen to come on todayto talk about her specialty,which is data scienceand specifically A.I..</p>
<p>Yeah, and I'm so delighted to be here.</p>
<p>This kind of,</p>
<p>I should say, started from the factthat I'd done an articlethat we got into Fed News on ML Opsand you and I were talking and thought,</p>
<p>Hey, it's probably a good ideato come back and talk with folks ononly a bit aboutwhat's going on in the world of ML Ops.</p>
<p>But you know how that fits into overalldata science and artificial intelligenceas well.</p>
<p>But before we get there, Gretchen,everyone wants to knowa little bit about youso let's get your background going.</p>
<p>Sure.</p>
<p>So where did you come from?</p>
<p>Why are you here and and so forth?</p>
<p>Oh, I appreciate.</p>
<p>It's kind of fun to advertise,but I think I'm a great exampleof somebodywho continually learns and adapts.</p>
<p>I honestly, undergrad is mathematics,so I'm enough of a geek and a nerd and,you know, been workingin the technology space for over 20 yearsand almost 15 of thatin the federal space.</p>
<p>So cut my teethand honestly really felt like</p>
<p>I found my place where we really makea difference in citizens lives.</p>
<p>We really help the academic researchers.</p>
<p>The work that we do to meis really critically importantand I don't feel like</p>
<p>I'm making some fat cat in some industryjust making more money.</p>
<p>So I really like that</p>
<p>I'm in the public sector, but I.</p>
<p>Have I totally agree with you there.</p>
<p>I love what.</p>
<p>I do, too. It'sjust it's the right place to be.</p>
<p>You feel like it's a jobwhere you make a difference.</p>
<p>It's not easy.</p>
<p>Are part of the reason why I'm delightedto be working in the public sectorin the federal government is who hasthe most amount of data on the planet.</p>
<p>That would be our government, you know.</p>
<p>And so, you know, it's the right placefor somebodywho is awash in dataand just wants to continue to learn more.</p>
<p>I do also have a master's in businessand then I went back to Harvardand focused on data sciencetwo and a half, three years agoand then became the chief data scientist.</p>
<p>So I will tell you that absolutely can,you know, load up a Jupiter notebookand do some of the programing in Pythonand PyTorch and things like that.</p>
<p>But the truth is,</p>
<p>I don't do a lot of that these days.</p>
<p>It really is conversationswith CIOs and CTOs.</p>
<p>And what's your data strategy anddo you have all the data that you need?</p>
<p>And oh, by the way, you probably needsome data from other organizations,so how do you create the governancemodel, etc.?</p>
<p>So those tend to bea lot of the conversations that I have.</p>
<p>So not putting fingers to keyboard,so to speak anymore.</p>
<p>So I feel quite rusty.</p>
<p>So if you ask me a python coding fragment,specific question.</p>
<p>I might, I will.</p>
<p>I won't put you through that.</p>
<p>I promise.</p>
<p>Even though I can be kind of funbecause you know me,even though I'm not supposed to be coding,</p>
<p>I still code because it is in my blood.</p>
<p>I am a software engineerand I'm going to code the day I die.</p>
<p>I already know it.</p>
<p>Yeah, well, and I started,you know, in software engineering too,so I totally know what you mean.</p>
<p>And it's, it's likehaving another language that, you know.</p>
<p>Yeah, absolutely.</p>
<p>So, Gretchen, what let's talkabout our subject today, which is really</p>
<p>AI and</p>
<p>ML ops and what in the worldis that right?</p>
<p>Is it the same as dev ops?</p>
<p>Is it the same as data of AI?</p>
<p>There's a whole bunch of everyone'sthrowing ops on the end of things.</p>
<p>So let's start first off with AI and ML.</p>
<p>What's the difference?</p>
<p>Make this simple for us becausethose words are thrown around like crazy.</p>
<p>Absolutely.</p>
<p>So when you think ofartificial intelligence,think of it as the the big circle,so to speak, and think of machinelearning as techniquethat are part of artificial intelligence.</p>
<p>So it's not different.</p>
<p>It's really a subsetof artificial intelligence.</p>
<p>These are algorithmsthat derive their strengthfrom an abilityto learn from available data.</p>
<p>And so primarily you're learningeither from supervised or unsuperviseddata.</p>
<p>There's lots of nuances, but yet that'sthe best way to really think about it.</p>
<p>So machine learning and AI.</p>
<p>So in machine language, machine learning,sorry.</p>
<p>Yes, machine learning.</p>
<p>Is that just a subset of A.I.?</p>
<p>Because there's other types of algorithmsin AI that do different things.</p>
<p>Absolutely. Absolutely, yep. Yep.</p>
<p>And and the real simple differencebetween supervisedand unsupervised learning is reallyis the data label.</p>
<p>It's that simple.</p>
<p>So if you havesupervised learning,that means the data sets are labeled.</p>
<p>That means it is already mapped outas to whatthat data looks like,what's the data size?</p>
<p>And it just makes it much easierto classifyand predict where unsupervised.</p>
<p>What you're really doingis trying to find patterns in the data.</p>
<p>So you're really almost looking at it ishow do I associate thingsor how do I cluster them in a waythat might make them interesting?</p>
<p>Okay.</p>
<p>So I'm going to restate what you saidso I make sure I understandbecause that's how I learned.</p>
<p>Supervisedmeans could mean someone sitting therelabeling things that is a dog.</p>
<p>That is a cat. Exactly.</p>
<p>And is a hot dog. Right.</p>
<p>We all know a Silicon Valley reference.</p>
<p>It's hot dog, not an orange. Exactly.</p>
<p>Yeah, exactly. Yep.</p>
<p>Unsupervised means that the machineis learning to create relationshipsbetween data based off of findingcommon patterns throughout the data.</p>
<p>Exactly.</p>
<p>Similarities or potentially differences.</p>
<p>But or differently.</p>
<p>Okay.</p>
<p>Yeah, you could you could think of itin ways like you'reclustering information together.</p>
<p>So it's unlabeledand you're clustering similar things,or maybe you're clustering thingsthat aren't similar.</p>
<p>So you might think of it for marketsegmentation.</p>
<p>That might be a way where somebody startsto look at markets or different marketsand then also unsupervisedcould be relationshipsbetween, I'll call it, differentbatchesof information or different data set. Soas anexample, a customer who bought this itemmight also buy that itemso that that associationcould be another wayto think of unsupervised learning.</p>
<p>So, you know.</p>
<p>I mean, what seem very powerful.</p>
<p>Of unsupervised learning,some of the information's labeled,but some of it is really just basedon comments and informationthat you've input into your Netflix workand say, hey,if you bought this or you like thisparticular movie, you might like this one.</p>
<p>Yeah, I kind of hate those Netflixafter my granddaughters have been visitingand they're watching,you know, Teletubbies or whatever,all of a sudden, Iyou know, I don't I don't really needto watch the Teletubby movie.</p>
<p>I don't I totally just don't</p>
<p>I totally get it.</p>
<p>Then there's specificmath techniques, basically.</p>
<p>You know,if you're clustering something together,there are key meansor can nearest neighbor clusteringalgorithms, you know,and we could get into all of those.</p>
<p>But that's that'sreally from a simplistic level.</p>
<p>That's that's reallywhat we're we're trying to.</p>
<p>Do this we want to start from is simplybecause we could spend days and daysgoing over all the different A.I.stuff.</p>
<p>But today I want to focus a little biton the op side.</p>
<p>As we kind of mentioned, people just throwops on the end of everything now,which really means operations.</p>
<p>But I think it should bemore like operations.</p>
<p>Maybe it should be. It should be art.</p>
<p>Yeah,</p>
<p>I think maybe I think that makes sense.</p>
<p>And to your point,</p>
<p>I think that you know, you'll see peoplesay deal ops deal meaning deep learning.</p>
<p>So that's even a smallersubset of machine learningand that's where you have really serious.</p>
<p>Ralph graph algorithms and neural netsand things like that.</p>
<p>You hear people talk aboutand they startedto put ops on the end of that.</p>
<p>So the first thing.</p>
<p>So what does that mean. Yeah.</p>
<p>What does that meanwhen they put ops on the.</p>
<p>Yeah well the first thing is it's not assophisticated as DevOps.</p>
<p>So think of it as being influencedby the widely adopted ideaabout DevOps approach to creating andand customizing applications.</p>
<p>But what, whatfolks are really trying to do is createa, I'll call it a set of practicesto help optimize the reliabilityin the efficiency of machine learningdesigns, development and execution.</p>
<p>So almost more of like a marketplacewhere you've got the abilityto create and operate custom applications,but thenyou have those to be able to sharewith others.</p>
<p>Because again, many of themodels and the algorithmsthat are being usedlots of times are already optimizedand are in what people todaythink of as models whose soten or 15 or 20 alreadyoptimized models,that could be all for machine learning.</p>
<p>So the idea isthat you can have these methodologiesand technologies to help you streamlineyour machine learning models and the best.</p>
<p>So the best way to do that honestlywith is with a whole bunch of toolsthat are either open sourceor specific software vendors have created.</p>
<p>Again, to make thatcreating, developing, designing,executing flow much easier.</p>
<p>So this sounds a lotlike where software development wasmaybe 30 years ago when they first startedcreating libraries, right?</p>
<p>Oh, I'm going to create this libraryso everyone doesn't have to writea string class in C++.</p>
<p>I just use the standard library.</p>
<p>Are there standard email models out therethat I can use over and over againor is there a marketplacethat's starting to build around this?</p>
<p>What's what's that look like?</p>
<p>That's a really great question.</p>
<p>And what I've seen in terms of thethe I'll call it supervised learning,you know, you think about classification.</p>
<p>So these are vector machine decisiontrees, random forests,linear classification.</p>
<p>So a lot of those are math equationsthat have been around for quite some time.</p>
<p>Anothertechnique that's used in supervisedlearning is regression.</p>
<p>So you think about linear regressionor log regressionor polynomial regression.</p>
<p>Again, these are math equationsthat have been around a while.</p>
<p>So many of those specificalgorithms are already done and optimizedand are available in tools such as</p>
<p>Converge IO or C three.</p>
<p>AEI has a really nice ML design flow.</p>
<p>Databricks sas.</p>
<p>I mean, so there's a bunch of vendorsthat have many of those algorithmsthat are already optimized sitting therefor you to be able to do to use it.</p>
<p>And then what you're really ableto leverage in that softwareis do that, that whole workflow.</p>
<p>So think of a quick agile.</p>
<p>Hey, I've got several datasets</p>
<p>I would like to link these together,multiple variables.</p>
<p>Here's the technology.</p>
<p>Now let me see when I point it to twoor three datasetsthat I have, what the results areand. Got you so.</p>
<p>So fabulous.</p>
<p>So you don't have togo through all of that converge.</p>
<p>I honestly which intel owns justit has a really nicegraphical user interfacewhere literally you are just mapping out,you know, with boxes triangles almostthink of it as a visio kind of a diagram.</p>
<p>Just quickly lay it out and literallyhit the go button.</p>
<p>So this is helping mebuild up my air pipeline.</p>
<p>Right. Bye. Bye bye.</p>
<p>You're saying by weaving togetheremail algorithms and or modelson my data streams as they're coming up?</p>
<p>And then there are also really great opensource tools.</p>
<p>So these are ones that the communityhas been developing thatpeople add to, that you can easilygo to GitHub and download like cube flowwith a K QBE flow or Metal Flow or Quadroor ML flow.</p>
<p>And again, these are great toolsthat really help you with that,that DevOps and the, the cool thing,you know for somebody like an intel wherewe want to make sure that they leveragethe best librariesthat we have math kernel librariesand open double or CNN libraries, etc.that we've already optimized.</p>
<p>The good news is that's already built in.</p>
<p>So somebody doesn't have to goand, you know,pull down specific I'll call itnot onlythe libraries and do any read compilesall that stuff is already doneand built into some of these really niceopen source flow tools.</p>
<p>And we've talked about this on the showbefore.</p>
<p>A lot of AI and emailprojects end up being science experimentswhere I do itonce I get great information out and thenthe data scientist has movedon to something else and it's like,but you didn't operationalize it, right?</p>
<p>Right.</p>
<p>So is this where email ops is moving tois because what you were talking aboutis primarily training or learning.</p>
<p>But what do I do after I learn?</p>
<p>If my models learn, I got to deploy itright next to provide real value.</p>
<p>Yeah. Yeah.</p>
<p>And some companiesspecifically are leveraging those tools.</p>
<p>Domino Labs is another onethat does ML opswhere it reallyalmost creates that marketplace.</p>
<p>So you've got a customer.</p>
<p>So in our public sectoryou have a customer who is working onsub, you know, the nuclear subsand there's doing some object detectionor some clustering classification.</p>
<p>Well,you know, that work could be applicablein the Air Forceor might work somewhere else.</p>
<p>And to your pointwhere people have done this work, thenthey finish the visualization,provide the results and move on.</p>
<p>So the idea here is thatthat would really catalog it.</p>
<p>And even some of the, you know, defenseindustrial base that we work withare adding and almost creatingtheir own sets of catalogsinternally at their own companies.</p>
<p>So they can really help operationalizethat and really buildagile environmentsso that somebody can just oh, okay.</p>
<p>This is a multi variant problem.</p>
<p>Maybe I want a couple different algorithmsthat I might want to leverageand I'm going tothen wait them in a different way,depending on the results or the accuracy.</p>
<p>And I might testthat out a couple of times,and then all of that informationwould be captured,and then somebody could go back and go,</p>
<p>Oh, Joe did this great work.</p>
<p>He waited it 6040 andlook at the kind of results that he got.</p>
<p>But this isthe data sets that he was using.</p>
<p>Well, our data sets are different basedon what we know in those characteristics.</p>
<p>So maybe we'll take what he's done,but we might tweak it a little,but at least there's not.</p>
<p>Okay.</p>
<p>Yeah, this this brings up a big concern</p>
<p>I have, actually,but it's the same concernwe have with open source softwarewith these open source models and things.</p>
<p>How do I know that I can trust that model,that someone hasn't trained that model?</p>
<p>Maybe I'm doing facial recognitionand I'm now going to use that modelto do my facial recognitionto allow people into my secure lab.</p>
<p>How do I know they haven't trained itto ignore their own face?</p>
<p>Yeah.</p>
<p>And the truth.</p>
<p>Is, I mean, is there any way to know.</p>
<p>The truth is right now, that'spart of the I'll call the trustworthinessand the ethical natureof what we need to do, wherethere is now an expectationthat people now documentthose kinds of things, i.e.,where did you get that dataset?</p>
<p>Is it is it a publicly available dataset?</p>
<p>Is it a synthetic data set?</p>
<p>Is it something that you maybecreated on your own?</p>
<p>And how did you do that?</p>
<p>And so you have to as we move forward,people need to describe that means sothis gets intohonestly something that's so fascinatingand interesting to me.</p>
<p>It's really the trustworthiness,the ethical ness, the howhow can you be more responsibleabout what you're developing to ensurethat those models have gone througha set of rigor in terms of questions?</p>
<p>And to your point,where does that data come from?</p>
<p>You know, a great example that,you know of A.I.gone awry is say,you know, the system within 30 hoursthat started to becomeimagine gets pulled.</p>
<p>All that great work,that joy and and team are doing.</p>
<p>And then you're at MIT</p>
<p>Media Labs around facial recognition.</p>
<p>And and you understandhow that could have happened.</p>
<p>And I honestly don't think it's malicious,but folks basically took datasets of parliament and data sets of peoplethat were in Congress and datasets of people that are in,you know, leaders of companies, CIOsand oh, by the way,they kind of look like you, you know,and they don't they they aren'treally representative of the globe.</p>
<p>And again,</p>
<p>I don't think people maliciously said, I'mgoing to train this model on a non</p>
<p>I'm onsomething that doesn't look likethe globe that doesn't have.</p>
<p>Yeah, right.</p>
<p>You know diverse representation.</p>
<p>I'm just going to pull these datasets.</p>
<p>You know, it's interestingbecause China had the same issuewith there and China has done incrediblework in AI,but they had the same issuewith facial recognitionbecause most of their pictureswere of Chinese people.</p>
<p>Right.</p>
<p>And when it came to Caucasiansor African-Americans,it could not figure it outbecause their dataset was so homogeneous.</p>
<p>You a.k.a Tic TACand many people don't know this</p>
<p>Ticktalk is a Chinese company,which means it's ownedby the Chinese governmentand Tick Tock provides more a</p>
<p>AI datasets to China than any other place.</p>
<p>So when you're out theredoing your tick tock dancealgorithms are getting smarter.</p>
<p>So just, you know, be wary of that.</p>
<p>It's very true.</p>
<p>Well, and honestly,</p>
<p>China is one of those placesthat really has factories of peoplewho are labeling the data, you know, so,you know, they they have imprintedthey are actually using,you know, unsupervised data.</p>
<p>But a lot more of their datais in those data sets.</p>
<p>So then that also makes it more accuratebecause if it's unsupervised, supervised,think about it.</p>
<p>You're trying to cluster and findpatterns as opposed toyou've already labeled the dataand therefore you are really doingmuch more sophisticated machinelearning against outapplying algorithms against that.</p>
<p>So you're you're doingand it's not better or worse, it's justdifferent work, if you know what I mean.</p>
<p>And and that's obviously one thing</p>
<p>Intel's been working on withsome of our university folksat MIT and Berkeley and othersin terms of leveragingartificial intelligence to help label dataand how and oh.</p>
<p>So the supervisor is an AIthat's doing the supervision, right?</p>
<p>Oh, goodness.</p>
<p>Here,who's watching the A.I.own eyes watching A.I..</p>
<p>When you think about in the labsfor a long time, it really wasthat single person who was doing the workand then produced the results.</p>
<p>And the idea now is that, okay,it needs to be a team of peopleand you need to havea diverse team of people.</p>
<p>You need to have people who come out thismaybe not from the I'm a Ph.D.researcher,but hey, I'm a practitioner or I'm a useror I'm somebody who ethnically hasa whole different backgroundand a different worldview than you do.</p>
<p>And I need to be part of that.</p>
<p>And so so in that case, the email opshelps withthe fusion and coordinationof those workers.</p>
<p>Data workers,</p>
<p>I guess has what we would call them.</p>
<p>Right,that are that are doing supervisedlearning with that with the average.</p>
<p>I really that really makes a lot of senseto me.</p>
<p>Yeah.</p>
<p>And and againit's, it's one of those things whereand you know, this,it's like being a cloud practitioner,you know that ten or 12 years agothe answer was cloud, what's the question?</p>
<p>And so now it's AI, what's the question?</p>
<p>You know what I mean?</p>
<p>And yet, as I like to remind people,the first conferenceto talk about artificial intelligenceand machine learning was in 1956.</p>
<p>It was at Dartmouth College.</p>
<p>It was funded by thethe precursorto the National Science Foundation.</p>
<p>But but bottom line isthese are many of theseare math equationsthat have been around for quite some time.</p>
<p>And Brennan there arethen brilliant additional frameworkslike TensorFlow and otherswhere you then can build from those.</p>
<p>But the truth isthere's still a lot of the basicsin terms of logregression, linear regression,you know, clustering algorithms, etc..</p>
<p>These are ones, again,that have been around a long time.</p>
<p>But now, as you know, you've gotthe compute, you've got the storage,you've got 5G, you've got the capabilityto do what we're talking aboutliterally asyour car is passing the traffic lightwhere you're able to show that person'sthat there was a silver, silver alert,there's someone missing.</p>
<p>We know that their license plate is them,you know, and that you're going outlike you've done the training.</p>
<p>And now all of a suddenyou've got that data and that informationliterally next to the technology,as opposed to having to bring all of itto the technology.</p>
<p>We've brought the technology to the data.</p>
<p>So it just opens up some really,really fun and interesting problemsthat we can solve.</p>
<p>But to your point, then it brings up a lotmore of those conversations of,okay, where did we where dohow do we train this?</p>
<p>What was the original datathat we used and over yeah you get as theyas you hearpeople talk about it model driftso after a certain point in timeyou know you can start to seethat you need to basically retrainand that maybe you need to havethe algorithms or bring in a different oneor wait those differently to be able tothen get more accurate informationbecause hey, there's even more dataand more data that's more diverse,which is all good,you know, increasesyour level of accuracy.</p>
<p>But so if, if I have my pipeline nowin my email office,then I can do this continuously.</p>
<p>Exactly. Just like so.</p>
<p>So the movement is what I'm hearing isvery much like what we went to is softwaredevelopment, where I have continuousintegration and deployment,</p>
<p>I'm going to startseeing the same things in email in any I.</p>
<p>Right? Yes.</p>
<p>Or an emailwhere the models will be updatedoftenas they become more and more accurate.</p>
<p>And I and then I can combatthat model that I see thereor and and I think I even have a podcast.</p>
<p>I do have a podcastabout email security attacksbecause thereare some physical attacks that you canplay on email that are doing visionthat I would like to know,</p>
<p>Oh, that's a vulnerability of data model.</p>
<p>So it can now detect those attacks.</p>
<p>So I love where you went with this.</p>
<p>Gretchen.</p>
<p>I can't wait to hear more.</p>
<p>We need to have you come backand go a deep dove on the different dataanalytics and techniquesand we'll schedule that one upso that we can say,</p>
<p>Hey, machine learning is good for this.</p>
<p>Linear regressions are good for this,genetic algorithms are good for this.</p>
<p>Yeah, that's that's another podcastwe have in the future.</p>
<p>How's that?</p>
<p>I think that sounds awesomebecause the truth is, in some casesit's really easy and straightforward.</p>
<p>And in other cases, that's partof the science and that's part of the art.</p>
<p>You know what you were mentioningearlier, though,that maybe a AI algorithms could choosewhich algorithm to use.</p>
<p>So did you just get rid of your own job?</p>
<p>Oh, I don't know. Maybe, but.</p>
<p>But I think you might solve it.</p>
<p>But in the end, you still need somebodyto help with the interpretation, you know?</p>
<p>I do. Yeah.</p>
<p>There's there's this great book, honestly,and I'm not going to rememberwho wrote it, but it Harvard.</p>
<p>It's out of Harvard Business</p>
<p>Reviewand it's called Human Human in the Middle.</p>
<p>And it really no truly human plus machine.</p>
<p>And it really talks about the factthat there are ethicsjobs as we were talking about,or responsible jobs.</p>
<p>Those didn't exist two or three years ago.</p>
<p>And now people are starting to realizethat, you know, you do needsomebody who thinks aboutthe ethics and maybe you needsomebody who is like oursenior fellow, Genevieve,who's an anthropologist,you know, so you need peoplewith different backgrounds.</p>
<p>And as this gets more and more inculcatedinto everything that we do,then you really do need that diversityand you really do need peoplewith a lot of different thoughts.</p>
<p>And it is not a single personsolving this problem.</p>
<p>I, I think that's great.</p>
<p>Gretchen,thanks again for coming on the show.</p>
<p>You're welcome.</p>
<p>It was great fun.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.org until nexttime, go out and do something wonderful.</p>

</details>
