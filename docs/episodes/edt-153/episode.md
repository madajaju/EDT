---
layout: posts
title: "Training the Next Generation in AI"
number: 153
permalink: episode-EDT153
has_children: false
parent: Episodes
nav_order: 153
tags:
    - genai
    - generativeai
    - ai
    - robotics
    - people
    - training

date: Wed Aug 23 2023 17:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Pete Schmitz
    - Darren W Pulsipher

img: thumbnail.png
image: thumbnail.png
summary: "In this podcast episode, Pete Schmitz, a retired Intel account executive, talks about his work with high school students in teaching them about AI and how to use it in their robotics competitions. He explains that these competitions require the use of autonomy, and AI is a crucial component in achieving that. Pete shares an example of how computer vision, powered by AI, is used in the Defense Advanced Research Projects Agency's unmanned surface vehicle, DARPA D Hunter."
description: "In this podcast episode, Pete Schmitz, a retired Intel account executive, talks about his work with high school students in teaching them about AI and how to use it in their robotics competitions. He explains that these competitions require the use of autonomy, and AI is a crucial component in achieving that. Pete shares an example of how computer vision, powered by AI, is used in the Defense Advanced Research Projects Agency's unmanned surface vehicle, DARPA D Hunter."
---

<div>
<h3>Listen Here</h3>
{% include transistor.html id="db2248b4" title="#153 Training the Next Generation in AI" %}

{% include youtube.html id="ZllW_RjX60M" %}
</div>

---

## Harnessing the Power of Linear Algebra and Calculus in AI

Linear algebra and calculus form the backbone of artificial intelligence (AI) algorithms and systems. In a recent podcast episode, Pete Schmitz, a retired Intel employee and AI enthusiast, highlights the importance of understanding these fundamental mathematical concepts in the context of AI.

Linear algebra is crucial in AI, particularly in tasks such as image recognition. Through matrix multiplication, convolutional neural networks (CNNs) are able to process and analyze vast amounts of image data, enabling the identification and classification of objects in images. Calculus, on the other hand, is utilized in training AI models through techniques like gradient descent, where the algorithm continuously adjusts its parameters based on the rate of change of a given function.

Schmitz emphasizes the value of students learning these subjects in school, as it provides them with a solid foundation to delve into the world of AI. Understanding the fundamentals enables students to build on the knowledge and advancements made by previous generations in the field of AI. With the exponential growth in technology, AI is evolving rapidly, allowing for more efficient and automated solutions to previously laborious tasks.

## AI's Transformative Impact Across Industries

The podcast also delves into the transformative impact of AI across various industries. AI-powered systems are enabling advancements in healthcare, retail, and several other sectors. For instance, AI is being utilized in healthcare to detect and diagnose diseases like cancer, improving the accuracy and efficiency of healthcare professionals. In the retail sector, AI is used to analyze customer shopping habits and provide personalized recommendations, enhancing the overall shopping experience.

Furthermore, the hosts discuss the recent advancements in generative AI models, such as transformers. These models have the ability to identify underlying patterns in large datasets, facilitating data analysis and decision-making. By leveraging transformers and generative models, industries can unlock valuable insights and drive innovation.

## Fostering Innovation and Adapting to New Technologies

Innovation is a key theme throughout the podcast episode. The hosts stress the importance of organizations embracing new technologies and processes to stay relevant in today's rapidly evolving world. It is essential to foster a comprehensive ecosystem that supports innovation in various industries, providing specialized tools and services for different aspects of innovation.

The podcast also encourages empowering new talent in engineering, business, and marketing roles to think outside traditional norms and embrace fresh perspectives. By breaking free from outdated processes and ways of thinking, organizations can tap into the potential of their employees and drive innovation.

The guest speaker, Pete Schmitz, emphasizes the need for continuous learning and adaptation in the face of technological advancements and digital transformations. Organizations must evolve and embrace change to avoid becoming obsolete in the competitive landscape.

In conclusion, this podcast episode sheds light on the significance of linear algebra and calculus in AI, the transformative impact of AI across industries, and the importance of fostering innovation and adapting to new technologies. Through a comprehensive understanding of AI fundamentals, harnessing transformative technologies, and fostering innovation, organizations can seize the vast opportunities presented by digital transformation and stay ahead in the evolving world of AI.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople process and technology.</p>
<p>On today's episode,</p>
<p>Training the Next Generation in AIwith special guest Pete Schmitz.</p>
<p>Pete, welcome to the show.</p>
<p>Thank you very much, Darren.</p>
<p>Glad to be here.</p>
<p>Pete and I have a sordid historyof working at Intel together.</p>
<p>But Pete, tell us a little bit about whatyou've been up to and your background.</p>
<p>Sure. Glad to.</p>
<p>So for many years,</p>
<p>I worked at Intel as an account executive,helping out the Department of Defense,figuring out which of the Inteltechnologies could be usefulto help them advance their mission.</p>
<p>So after a very wonderful tenureworking with many people,</p>
<p>I retired from Intelat the end of last year,and I've been focusingon continuing the volunteer work</p>
<p>I've done as part of the Defense Industry</p>
<p>Consortium called FCA.</p>
<p>That's the Armed Forces Communicationsand Electronics Association.</p>
<p>My role in the San Diegochapter has been to help</p>
<p>STEM studentswrite science, technology, engineering,math in the kit mathematicians to developa love and pursue a careerin STEM that might wind up aiding U.S.based defense, but it might not.</p>
<p>So it's been good work,and I've taken the interestthat I've developed over the yearsin artificial intelligenceand begun to teach the studentsbecause in their workas robotics competitors,especially at the high school level,they need to use autonomyin their competition.</p>
<p>So I thought perfect placeto educate them on this technologyfor their competitionand for use in the future.</p>
<p>So I think it's wonderful.</p>
<p>I mean, this volunteer,because you're buildingyou're building the next generationof entrepreneurs and scientiststhat are going to extend this incrediblefield of artificial intelligencethat we're starting to see now.</p>
<p>I think I think that's great.</p>
<p>Thank you for for doing that.</p>
<p>Yeah, that's terrific.</p>
<p>They're just amazing kids.</p>
<p>And, you know, they have suchincredible interest and capabilities now.</p>
<p>That's been wonderful to see them absorb.</p>
<p>I mean, I've worked with many amazingtechnical customers over the years,and I can just feel these studentsbeing on the cuspof being that next generationof implementers there. Oh,that's great. That must keep you young.</p>
<p>Exactly. Exactly.</p>
<p>That's awesome. All right.</p>
<p>So you've you've had some timeto focus on artificial intelligenceover this last seven,eight months that you've been retired.</p>
<p>What have you found?</p>
<p>Well, I've found that there's a real needfor people to understanda little bit betterhow this technology works.</p>
<p>That was what was driving me to understandso I could explain it.</p>
<p>Right.</p>
<p>There's a lot of FUD,a lot of hype concern.</p>
<p>Is it going to take over a future?</p>
<p>Is it going to be embedded in our brain?</p>
<p>So having been exposed to Intel's effortsin artificial intelligenceand having a head start,</p>
<p>I thought, well, I'm going to dive inand learn myself how it worksand what better way to figure outwhat I know, what I don't know.</p>
<p>Then by explaining it to the students?</p>
<p>Well, that's, you know, that'swhat they say.</p>
<p>The best way to learnsomething is to teach it.</p>
<p>Exactly. So. All right, so what?</p>
<p>So what have you found?</p>
<p>Well,what was kind of eye opening for you?</p>
<p>Well, let me just give youa representationof who these students are.</p>
<p>And that might help to,you know, shed a little light on on,you know, the appetite.</p>
<p>So can you take this screen?</p>
<p>No, not yet.</p>
<p>Did you hit share?</p>
<p>I think I did.</p>
<p>Let me try it again.</p>
<p>All right, now it's coming through.</p>
<p>Okay. All right. There we go. All right.</p>
<p>So this is a group of high school studentsin this case from San Diego High School.</p>
<p>But this robot that they're standingin front of operatesagainst a set of rules in a competition.</p>
<p>And part of this is to use autonomyand the autonomy portion in this case usescomputer vision.</p>
<p>So I thought, well, I'mgoing to help these studentswith an with a possible architecturein their autonomy portion.</p>
<p>Right.</p>
<p>They use QR codesfor positional information to determinewhere is the robot to help navigate it,to pick up an object, etc..</p>
<p>So I thought, well,</p>
<p>I'll explain to these studentshow this capability is currentlybeing used in the defense world.</p>
<p>So I took for themand described an example of the DARPA</p>
<p>D Hunter unmanned surface vehicle.</p>
<p>This is the Defense Advanced</p>
<p>Research Projects</p>
<p>Agency's continuous trail submarine.</p>
<p>It's a trimaran.</p>
<p>You know, it's a vehicleto trail submarines continuously.</p>
<p>Is the idea.</p>
<p>It's a 132 foot vesselthat has an outrigger on each sidethat's completely unmannedand it uses radar and camerasto implement itself piloting capability.</p>
<p>It can go up to 10,000 nautical miles.</p>
<p>Wow. And operate up to 21 knots.</p>
<p>So when a camera is looking outfrom the bow of this device,of this vessel, it's very similarto the students robotics and how they spotthreatobstacles,things that they need to investigate oror steer away from is based on computervision,based onartificial intelligence.</p>
<p>So I took them through the ideathat in artificial intelligence,you are gathering a lot of data right?</p>
<p>This could be structured data,it could be unstructured data, butit's all being used to make predictionsusing a model based on training data.</p>
<p>And this capability,the concept of machine learninghas been around for a long time,but it's evolving so quicklythat they have been bornjust at the right time in historyto be able to ridethis exponential increasein technology as it's coming togetherbecause there's a convergenceof the latest capabilities of math,data, silicon and programing.</p>
<p>They're really unleashingall kinds of world changing possibilities.</p>
<p>So are you seeing that these high schoolstudents, are they stepping up to it?</p>
<p>Are they able to understand?</p>
<p>Because this is really complex stuff,right?</p>
<p>It is it still too complexfor a high school student to grasp it?</p>
<p>Or the neat thing about these teams,</p>
<p>Darren, is that they want to bevery inclusive in gathering teammembers of all capabilities.</p>
<p>So of course you're going to havethe programmers that can graspand implement this technology,but you have mechanical engineersto design the system.</p>
<p>You have marketing students to let folksknow about the capabilities of the team.</p>
<p>You have operational folksto help implement the logistics.</p>
<p>So I'm finding that the computerprograming students on the teamare already well into this capabilityand very open and passionateabout how they can use this technology,especially the math portion.</p>
<p>I thoughtthat was particularly interestingto figure out, Gosh,</p>
<p>I cook a lot of linear algebraand calculusin college for my engineering degree.</p>
<p>How is that used?</p>
<p>It turns out that in artificialintelligence, linear algebra and calculusare widely used because you need to usematrix multiplication.</p>
<p>For instance, in the case of convolutionalneural networks for computer visionto figure out and detectwhat is in the image that I'm detectingor seeing in my camera.</p>
<p>So finally,we can tell our kids you're learning thisbecause you're actually going to use it.</p>
<p>How many times have you heard,</p>
<p>I'm never going to use this.</p>
<p>All the time.</p>
<p>Why? I think it's awesomebecause these kids actuallyget to learn a couple things.</p>
<p>First off, that what they're learning inschool is valuable and they're learning,</p>
<p>I mean, artificial intelligence.</p>
<p>They're standing on the shoulders ofin this space that theythey can just take for granted.</p>
<p>Oh, yeah, it works fine.</p>
<p>I, I think it's wonderful for them to havethat without having to gothrough all the pain and turmoil thatthe industry has already gone through.</p>
<p>That's really true.</p>
<p>And to open their eyes to the fact that,like you just said, it'sbeen around for 50 years or so that folkshave been trying to learn from data.</p>
<p>But now with the silicon capabilitiesand the programing capabilitiesthat exist, it's being acceleratedto the point where structured datathat had to be labeledvery laboriously.</p>
<p>You know,that's a great way up to this point.</p>
<p>But the doors are opening up to thisnew generation of artificial intelligencewhere unstructured data can be usedon, you know, some AI supervised learningcan be used to to remove thethe burden of I'm going to labelone image at a time with is that a raccoonor a monkey to determine in my picturewhat is this item that I'm seeing?</p>
<p>So so because advancementsin technology and silicon, frankly,</p>
<p>I mean, the silicon is a lot faster now.</p>
<p>So we can do a lot more. Right?</p>
<p>These students are able to take advantageof the of thesereally high tech things much easier.</p>
<p>The barrier to adoption is a lot lowerthan than it has been even four years ago.</p>
<p>That's really true.</p>
<p>I mean, take the case of the students.</p>
<p>They have a certain budgetthat they cannot spend morethan the allocated amountto build their system.</p>
<p>Right? Otherwise, it would be likethe world of competitive sailing.</p>
<p>You just throw money at itto build the best you can.</p>
<p>It's just not fair.</p>
<p>So the students have a budget where maybethey've got a couple of hundred dollarsto spend on the acceleratorsthat they might use.</p>
<p>It really forces themto learn the intricacies of A.I.to figure out what really isthe latency that I need to navigateautonomously and get an acceleratorproportionally priced right,or maybe use just the capabilitiesof the CPU to do that.</p>
<p>So it's a well, a good real word exercise.</p>
<p>Yeah, I like thatbecause it's a real world, right?</p>
<p>We don't have unlimited budgets,even though we'd like to haveunlimited budgets, we don't have them.</p>
<p>And there are powerconstraints and size, right?</p>
<p>You can't hook your autonomousrobot up to the cloudand have all your data processing happenin the cloud, right?</p>
<p>That that just doesn't work as well.</p>
<p>So I it sounds like a great program.</p>
<p>It's fantastic and it really is a platformand an opportunityto open their eyes to, okay,you've got this project you're working on,but as you pickyour path in education and decidewhat do I want to do when I graduatefrom college, what I want to study to helpget there, the types of questionsthat you can answer using</p>
<p>AI and deep learningare much broader, right?</p>
<p>In other words, in the autonomy world,you might just be asking,</p>
<p>Yeah, what?</p>
<p>What is that object out there? Is itwhat I'm looking for?</p>
<p>What should I do?</p>
<p>But in the broader scale, you can go fromjust detection tomaybe you want to decide.</p>
<p>I want to categorize a bunch of images.</p>
<p>I might want to predict an outcome.</p>
<p>Maybe I want to make a recommendationbased on the data that I'm seeing.</p>
<p>Maybe I want to generatenew contact content.</p>
<p>And these can be used in a varietyof applicationsin health care, for instance,you can use it to maybe detect cancer,assisting an oncologist with identifyingan object that maybe would be missedor should be looked at more deeplyor in the retail world,maybe you want to, you know,target ads based on whata user has in their shopping cards.</p>
<p>Correlate with what you have in inventorycorrelated with the highestmargin product you want to present to themin their shopping exercise.</p>
<p>It sounds like it's onair is kind ofunleashing a wholea whole myriad of new businesscases, business use opportunitiesin instead of it getting rid of jobs.</p>
<p>It actually may create several,several new ways of doing business.</p>
<p>That's really true.</p>
<p>And it's not just for the folksthat are the developers,the scientists or the engineers,because to answer these complex questionsmight take the insiderthe perspective of a business personor a marketer or a data analyst.</p>
<p>So the doors are opening for all kindsof work roles to use A.I.,not just the technical folksthat can digest the nuts and bolts.</p>
<p>So so this brings up an interestingquestion around generative</p>
<p>AI because you re you retired right?</p>
<p>When Jenny</p>
<p>I just kind of blew up November of 2023.</p>
<p>Now we're in 2023, now</p>
<p>Jen I opened Open Eyes.</p>
<p>Chad came out and took the world by storm.</p>
<p>What youwhat have you seen over the last six,seven months?</p>
<p>What has that donewith the kids that you're teachingand in the industry as a whole?</p>
<p>What's your perspective on that?</p>
<p>Well, it's been fascinatingbecause first I offer them a comparisonbetween, well,what was being used before thatconvolutional neural networks weremimicking the functionality of the brain.</p>
<p>Right? They had multiple layers.</p>
<p>They had perceptron all theselayers and perceptions were connected.</p>
<p>Input was fed into thisconvolutional neural network.</p>
<p>Wait.</p>
<p>Their assigned feedback was generateduntil you got the outputthat you had hoped for.</p>
<p>You compare it to the inputand calculate the loss.</p>
<p>Right?</p>
<p>That's the neural networkusing labeled input.</p>
<p>Now the and that was great for imageclassification,object detection, maybe speech recognitionand that uses the, you know,the mathematical functionalityof a matrix multiplication.</p>
<p>A lot of pre-trained modelsexist out there,so folks are not starting from scratch.</p>
<p>They can use transfer learningto take image recognitioncapability and decide, okay, I'mgoing to keep a couple of layers.</p>
<p>And now change subsequent layersto detect that particular itemthat I'm looking for.</p>
<p>That's differentthan what it was trained on, right?</p>
<p>But with Transformers andand Generation generative A.I.,the real breakthroughwas in finding patterns between elementsmathematicallythat exist over a long range.</p>
<p>You've got a long stream of datacoming in,but you want to draw information from thiswhole stream of data, this whole image.</p>
<p>They use positional encoding.</p>
<p>So the model that came out,the mathematical modeluses normalizationlayers, residual connections,and it's resulted in a numberof amazing new capabilities.</p>
<p>Right.</p>
<p>Not only the generative Pre-Trained</p>
<p>Transformer model, the GPT,but also Bert, the bi directional encoderrepresentation from Transformers,their visiontransformers, the vanity of the modeland the one of the latest ones is calledthe Megatron Turing Natural Language</p>
<p>Generation.</p>
<p>Now the real interesting thing is thatthese models would not have been possibleto train and use without the adventof the latest capabilities.</p>
<p>Right?</p>
<p>It takes millions of dollars,billions of petaflopsthe chain to train these modelsthat can now be used.</p>
<p>And both are wanting to usethese capabilities forthings like drug discovery.</p>
<p>If we can predict the shape of a proteinand its consequent functionality,we can accelerate the time to produce andpersonalized new medicines, for instance.</p>
<p>It's just fantastic.</p>
<p>So it so it is a game changer.</p>
<p>That's what I'm hearing. Yeah. To thisdo do you do.</p>
<p>You think that</p>
<p>I know there's alwaysa watershed momentin different technologies even if generaleven if GPT is not the most complexor most capable technology out there,it changed the worldbecause no ability.</p>
<p>Absolutely. Yeah. Yeah.</p>
<p>People are now thinking beyond,oh, AI's doing object detectionbecause that's what people were thinking.</p>
<p>I was was good for and,and more people are interestedwhich means more moneyis being dumped into it.</p>
<p>How, where do you see thingsput on your crystal.</p>
<p>You know get your crystal ball outand talking to the students.</p>
<p>The art of the possible.</p>
<p>So where do you see things goingin the next five years as far as A.I.and the way it can changeeducation and or or any industry?</p>
<p>Well,</p>
<p>I asked the students to take a look at</p>
<p>I give themtheir first dose of business insight.</p>
<p>This may be really cool.</p>
<p>It might make a wonderful video game,but when you get out into the real world,you have to ask yourself,does this offer the capabilityto make a company moneyor save a company money?</p>
<p>And that, of course,as you can see, the promiseand the hype of this has driven upvaluations in the stock market.</p>
<p>Folks expect that the futureearnings of companiesare going to increase because AI is goingto improve their ability to reduce costs.</p>
<p>Will it replace employees?</p>
<p>I don't think so.</p>
<p>I think it will make them more productive.</p>
<p>It will free them to be more creative.</p>
<p>Will it allow companiesto make more money?</p>
<p>I think you're going to see a combinationof companiesthat can either use the technologyto improve their revenuesand their income, or it will allowcustomers or companies to be bornthat will disrupt those companies.</p>
<p>They will be born without the shacklesof existing processes and infrastructureand can use AI to build new businessmodels.</p>
<p>So examples of those business modelscould be in encoding, right?</p>
<p>I've got studentsthat write a lot of code.</p>
<p>I asked them how would it beif you could use AI to generatethe first pass of your codeand then you could complete the code.</p>
<p>Very interesting to them.</p>
<p>I mentioned life sciencesuse in drug discovery or in chemistry.</p>
<p>Translate Passion.</p>
<p>Boy, How about the language gapsthat exist in cultures around the world?</p>
<p>Real time translation is possible to usepossible to do with these large languagemodels.</p>
<p>Well, in fact,</p>
<p>I don't know if you know this.</p>
<p>I have another podcastthat does the weekly newsin Digital transformation,and I produce it in six languages.</p>
<p>Oh boy. And I don't do translation.</p>
<p>I have a generative, I do the translationand I have native speakersin those countries,review it and then read for me.</p>
<p>And before when I looked at doing it,it was going to costme substantial amount of moneyto do the translations.</p>
<p>Now literally,it takes an hour's worth of someone'stime.</p>
<p>That's a native speakerto read through the script and read it.</p>
<p>And it's it'sone it's, it's opened up new doors.</p>
<p>So I see exactly where you're goingwith that right.</p>
<p>So the other thing that I letmy students know is where are the centersof excellence that exist in developingthese new innovative technologies?</p>
<p>Of course, they're with companieslike Intel that develop silicon,that have accelerating instructionsbuilt into the CPU'sor that have GPUs availablefor data center or end user.</p>
<p>But they also existin some of the software companies.</p>
<p>So for instance, the the trans formermodel itself, I let them knowthat came out of a Google</p>
<p>Brain initiative in 2017.</p>
<p>The concept of stable diffusion,which is generating high quality,detailed images that came out of Stanford.</p>
<p>Maybe you want to go to Stanfordand do some work thereand then other technologiesthat are on the cusp noware something called the neural radiance</p>
<p>Field and Nerve.</p>
<p>This is going to be really applicable inautonomous navigation and robotics.</p>
<p>You'll be able to generate 3D contentfrom 2D images coming out of industry.</p>
<p>So all kinds of placesthat I've tried to raise their awarenessor this work can be done.</p>
<p>And further using.</p>
<p>AI, I think that's wonderfulbecause you're showing them</p>
<p>AI's not over, it's just starting.</p>
<p>It really is.</p>
<p>And over the horizon there's this conceptthat's being talked about calledartificial generalintelligence, very differentthan just artificial intelligence.</p>
<p>But the general intelligence portionis the idea that down the roadyou might be a part of developing or usingsomethingcalled a generalizable embodied agent.</p>
<p>And this is an agentthat can adapt to new conditions.</p>
<p>It can handle high dimension orcomplement complicated data distributionsusing underlying technologieslike neural operators to understandmultiple domains, likeperhaps you want to mix image and textand scientific all together.</p>
<p>I think that's going to beon the next wave of innovation.</p>
<p>Very, very disruptive.</p>
<p>It absolutely.</p>
<p>In fact, it feels I'm sure you rememberthe early ninetieswhen the Internet started just taking off.</p>
<p>I mean, the Internet had been aroundfor how many years,decades before the ninetieswhen people started getting in their homesand e-mail was starting to take off.</p>
<p>It feels to me likethis is in the same boat as that.</p>
<p>It really is.</p>
<p>And and you're going to have somefriction, some some barriers to adoption.</p>
<p>So when you come up with a great new usecase, you've you've gotten your data,you've identified the problemyou want to solve, you figured outwhich model am I going to start with?</p>
<p>That has got to mixwith the infrastructure,the capabilities, the people, the culturethat already exist in the companythat's going to use it, right?</p>
<p>You and I have worked on great projectsthat involve enterprise,compute architecture and the architecturethat's going to host this A.I.</p>
<p>Innovation is much is similarin that it's going to have a goal ofhow am I going to developthis, test it, store it,iterate it, you know,check the value, and then in the end,you know, how accurate is.</p>
<p>I've got to be able to explain itwhen this model is running.</p>
<p>I've got to match that to my environment.</p>
<p>If it's on a very low powerautonomous system,</p>
<p>I can't just put a big 300 watt</p>
<p>GPU out there.</p>
<p>I might need a low power FPGA.</p>
<p>So all these things need to be consideredwhen you're going through the developmentcycleof getting ready to deploy that model.</p>
<p>I think that's where the ecosystemis very interesting.</p>
<p>Now you've got all kinds of folksout there that arefiguring out how to specializefrom an innovation perspective.</p>
<p>Am I going to be a companythat provides toolsacross the whole spectrum,like the cloud service providers, right?</p>
<p>At least have to matchwith the infrastructure.</p>
<p>So maybe you're going to piecemealyour data analytics portion,maybe you're going to piecemealyour experiment management portionto try and build and evolvethis environmentwhere these students, oncethey've been educated and trained,can go to work and be really productivein delivering that capability.</p>
<p>Well, well,that's another question I have, iswe need to we need to, in the industry,make sure that we have the environmentso the new workers that are coming incan hop on tothese new technologies, can be innovativethat we don't.</p>
<p>I love I love the wordwhen you said earlier shackle them downwith old processesand old ways of thinking.</p>
<p>We need to unleashthe power of of of these new engineers,business leaders, marketing peopleto to think outsideof the traditional boxes that wethat we've been dealing withfor for so long.</p>
<p>That really is true.</p>
<p>And I think that'swhy you've seen the rise to prominenceof some of these companies,like like a snowflake, for instance.</p>
<p>This is going to bea specialized capability and productto be able to manage your data, maybea tacked on or hops work, for instance,enables you todo feature managementin your development pipeline.</p>
<p>Your operations, as you and I have workedtogether before on DATABRICKS,but has a whole lot of other companythere, likeheavy AI or data robot.</p>
<p>Maybe you want to have a tool to labelyour data.</p>
<p>You might use something like label boxor scale or appen.</p>
<p>All kinds of technologies exist out therethat have to be put togetherto fit with your environment,your capabilities, and the objectivethat you're trying to accomplish.</p>
<p>So it sounds to melike we're not being replaced at all.</p>
<p>There's a lot of work to be done still.</p>
<p>I think that's, you know, the onus is onus, Darren, to figure out waysto enable our our students, our customersto really solve these hard problems,whether it's in robotics or videoanalytics, health care,public sector, public safety,media, entertainment,genome X, autonomous vehiclesor Internet servicesall offer terrific opportunitiesto solve amazing problems.</p>
<p>It's really an exciting timegoing forward.</p>
<p>I think so, too. Very, very excited.</p>
<p>I'm not scared at all.</p>
<p>I'm excited.</p>
<p>But I also know this</p>
<p>You either evolve or die,and so I'm trying to educate everyone,jump onto this bandwagonbecause this is going fast.</p>
<p>So exciting stuff.</p>
<p>Pete, thanks for coming on the show.</p>
<p>I love the perspectiveof the next generation ofof leaders that you're training up.</p>
<p>Thank you for obviously helpinghelping the industry as a whole.</p>
<p>Was that my pleasure, Darren.</p>
<p>Thank you for having me on the show.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org Until nexttime, go out and do something wonderful.</p>

</details>
