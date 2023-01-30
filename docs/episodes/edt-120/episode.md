---
layout: posts
title: "An Argument for Global Data Networks"
number: 120
permalink: episode-EDT120
has_children: false
parent: Episodes
nav_order: 120
tags:
    - DataManagement
    - GlobalDataNetwork
    - MacroMeta
    - DataArchitecture
    - EdgeComputing

date: 
guests:
    - Darren W Pulsipher
    - Alan Evans

img: thumbnail.jpeg
summary: "On this episode Darren interviews Alan Evan, principle technologist at MacroMeta, about distributed data management and the impact of global distribution of data in the cloud to edge ecosystem."
---

{% include soundcloud.html id="edt120" title="#120 An Argument for Global Data Networks" %}

{% include youtube.html id="H0tDfaGDscQ" %}

---

Alan Evans is the principal technologist at Macrometa and focuses on bringing Global Data Networks to customers worldwide. As Darren finds out in this interview, his insight into data management and the complexities of data management in global organizations is invaluable. The focus of this interview is to understand the Laws of Edge computing and the characteristics of data that drive these new data architectures.

## Laws of Edge Computing

To effectively deploy edge computing architectures, three laws must be considered: the law of physics, the law of economics, and the law of the land.

### Law of Physics

The law of physics refers to the distance between edge devices and their corresponding on-prem and cloud data centers. The fact is that data currently cannot travel faster than the speed of light, which introduces latency in the movement of data from edge devices into the cloud or data center. Sometimes this latency does not affect the analytics and insight demanded by organizations’ use cases. However, there are some use cases where real-time data analytics and understanding are critical.

### Law of Economics

the following law is the law of economics, not all network, storage, and computing devices are created equal. Typically better performance devices cost more money, but how much money to spend is determined by the value of the movement of the data and the insight gained from collective analytics. Some organizations are finding additional costs in the direction of data in cloud technology. While ingress costs are typically free egress costs, moving data out of the cloud or from one region to another is costly. Understanding the economics behind edge computing is critical when developing distributed data architectures.

## Law of the Land

The last law to consider, the law of the land, is primarily regulated by local, regional, and country governments that want to protect the privacy of their citizens, industries, or government operations. Understanding the regulations around data generated at the edge and the governance around accessibility, distribution, and storage must be considered. Ignoring the law of the land concerning data can be costly through fines, re-architecture, and complex solutions.

## Data Characteristics

Understanding the laws of the land is the first aspect to consider. However, understanding data characteristics are just as important as understanding the operating rules they must adhere to when building business insight. These characteristics include data size, frequency, storage location, type, privacy and access regulations, and spoilage.

### Data Size

Traditional data warehouses require the data to be in the exact location, meaning all data needs to be moved or copied to the data center or cloud location. The data is also normalized based on the analysis performed. Because the raw data can be used to solve multiple business problems, a copy of the information is required. Data duplication is multiplied when organizations create different data warehouses for business problems they are trying to solve. This increases data size, driving up storage costs and administration.

### Data Frequency

Because data is constantly being generated, it is critical to understand the generation rate. With the number of different data sources generating increasing volumes of data, it is essential to catalog its frequency and volume. Organizations This impacts how the data is collected, stored, and processed.

### Data Source Location

The location of the data generation--machine, human, or software—is another critical driving factor for data analysis architectures. As the number of source locations increases, the architecture becomes more complex. Additionally, the location and the connectivity of the data source, combined with the volume and frequency of data generation, drive architectural data decisions.

### Type of Data

Data sources generate databases, video, audio, emails, texts, and reports. This data can be grouped into three categories: structured, unstructured, and semi-structured—these characterizations aid in processing the data and impact the type of data architecture used. Additional groups can be made within different categories of data to increase reusability, understanding, and, ultimately, insight into the data. Developing a data taxonomy is critical in building a robust data architecture that generates real business value.

### Privacy and Access

Governments and industries are increasingly regulating data privacy to protect the privacy of their citizens, patients, and customers. Understanding and adhering to the data regulations include who has access to the data, what can be done, and how long it must be stored. Several regulations focus on the location of data, healthcare patient data, financial data, and payment information. The National Institute of Science and Technology (NIST) documents key privacy and access controls used for compliance with regulations.

### Data Spoilage

Three factors slow down business decisions due to increasing data’s time to value—time to identify the data sources, collect the data, and normalize and clean the data. In the past, all of an organization’s data resided in the data center. Adopting IoT, cloud, and remote work technologies have scattered data to several locations, including workers’ homes, the cloud, and the edge. Gathering data into one place to perform data analysis takes time and increases the time to produce value for an organization.

## Call to action

Now that you've been armed with the laws of edge computing and the characteristics of data, explore different data 
architectures that meet your needs and help you build genuine business and mission insight from your data. For more information and a white paper, check out the links on our blog. Embracingdigital.org. 


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people processand technology.</p>
<p>On today's episode,an argument for Global data Networkswith special guest</p>
<p>Alan Evan, principal technologistat MacroMeta.</p>
<p>Alan, welcome to the show.</p>
<p>Cheers, mate.</p>
<p>Nice to be here.</p>
<p>Hey, Alan,we've been talking for what months?</p>
<p>Has it been that long?</p>
<p>It could be longer.</p>
<p>Yeah, it could be longer.</p>
<p>Feels like. Could be longer.</p>
<p>Yeah. Yeah.</p>
<p>Oh, thanks.</p>
<p>Yeah.</p>
<p>I have been told I'm long winded,but not that long winded.</p>
<p>I think it's great.</p>
<p>We've. We've been actuallynow about six monthswhile you and I wrote a white papertogether specifically on this.</p>
<p>And it was actually pretty coolbecause we met every Wednesday,my morning year afternoonfor a good portion of that six monthsand talked about things.</p>
<p>It was a little bitcrazy, was a great time, right?</p>
<p>Very, very early.</p>
<p>It was very.</p>
<p>Convenient. Yeah.</p>
<p>Yes. Next.</p>
<p>Next one, we'll have to reverse.</p>
<p>Why don't I get up?</p>
<p>Yeah. There you go.</p>
<p>You get up at three in the morning.</p>
<p>Yeah, exactly.</p>
<p>Thank you.</p>
<p>All right.</p>
<p>Hey, let. Let's diveright right into this.</p>
<p>What?</p>
<p>What do you feel is the most importantaspect as we move forward into 2023and beyond?</p>
<p>We've got data spread all over the place.</p>
<p>What do you feel is kind of the keyaspect of managing this dataall over the place?</p>
<p>I think first,that's a great question, by the way,but I think the first pointwhen I think about it, it's,you know,</p>
<p>I hate to use the term paradigm shift.</p>
<p>People always useit does a paradigm shift.</p>
<p>But the big shift for me,</p>
<p>I think when I think about enterprisearchitectures and applicationsis, you know, at some pointyou always get to the data, right?</p>
<p>There's a data problemor a data use case behind it all.</p>
<p>That's what drives these applications.</p>
<p>And I think up until very recently,you know, what we call legacy approachesto data processingand data managementhave been largely okay.</p>
<p>And when I think about that,</p>
<p>I think I'm looking at,you know, big data batch based processing,you know, generating insights and then,you know, data scientistlooking at, you know, that and querying itand and exploring it and then,you know, trying to produce some sort ofactionable insight that then they will,you know, they willthen use and and feed into the rest ofwhatever business that they are running.</p>
<p>Right.</p>
<p>I thinkwith the advent of,you know, modern high performancenetworks, connected things, you know, so</p>
<p>Internet of Things, you know, we're seeingan exponential increase in data.</p>
<p>And the challenge with that is, you know,you no longer really can afford to haveor the only way to look at insight,having a human in the loop,it can't be your only solution for thesemodern applications and solutions.</p>
<p>You can't have a human therewaiting for data be pulled from whereverit's being generated or have a costput into a big data lake and then,you know, start to turn the handle on itand try to generate some insights.</p>
<p>And then and then some time in the,you know, later on, you know,try to do something about it.</p>
<p>And I think that the big shift hereis that from the legacy big data,slow data approach to how do I deal with,you know, billions of connected devices,you know,what the value of data is fleetingand I need to be able to action that datain a very short order.</p>
<p>I like how you put atemporal aspect to data and it's value.</p>
<p>I mean, we talked about this several timesand we'll talk about it more today.</p>
<p>That data, as it agesdoes not become more valuable.</p>
<p>It becomes less valuablefor ever actionable insight,which I think is fascinating.</p>
<p>A perception,as you said, it's kind of todaywhen we look at data science and insight,most of itis this big, methodical,</p>
<p>I got to do this, I got to do that.</p>
<p>It's just slow, right? Mm hmm.</p>
<p>And I will get insight on what happenweeks or months or even years later.</p>
<p>And there's no sense of urgency.</p>
<p>But I think there is nowthere's a sense of urgency.</p>
<p>But we haven't quite caught up with it.</p>
<p>Would you agree?</p>
<p>Yeah. Yeah, totally.</p>
<p>I mean, I think we'veyou know, there's various there's there'sno canonical view of this, in my opinion.</p>
<p>There's lots of contributing viewsthat I think if you expose yourself to theto the to the trends and initiativesthat are going on acrossmultiple industries,you know, you start to see a lot ofsynergies between them.</p>
<p>Right.</p>
<p>And I think the one that stands out to meis, you know,when we first started talking about,you know, artificial intelligence,for example, it was, well,you know, we collect all this data.</p>
<p>It's got to be good data,so we have to clean it.</p>
<p>We then want to use it to train our modelsand, you know, that's great.</p>
<p>We've now got a model is trained.</p>
<p>We can now ask questionsand get an insight out of it effectively,you know, removing the humanfrom the loop, albeit after, you know,the human is now we've rolls the nowno longer providing the insight.</p>
<p>They're now training a modelto provide the insight.</p>
<p>So it's not, you know,no one to get into that kind of thing. Butyou know, even once you've trainedthe model,you know, so to your point of data value,</p>
<p>I think, you know,yeah, real time data has immense value,historical value,historical data has value.</p>
<p>When you put it in the contextof training a model so that it can acton new real time in the moment data.</p>
<p>Right.</p>
<p>And the challenge there is, is that,you know, you build these modelsand then they're sitting outin a central locationsomewhere when the data's typically beingthat you want it to actupon is being generated,you know, in the human world.</p>
<p>Right, right at the edge, you know, and.</p>
<p>Right, right on the edge, right?</p>
<p>Yeah.</p>
<p>So right on the edge,</p>
<p>The real edge where we all are,you know, where our devices are.</p>
<p>And you know that that, you know,having a 300 millisecond or longerroundtriptime to my AI inference to get it insidekind of defeats the objectof building the model in the first placebecause I'm looking for a real timeactuation and insight intowhat is going on in the moment.</p>
<p>I can't afford to have that pushed outcentrally, right?</p>
<p>I need itclose to where the data's being generated.</p>
<p>Well, thatbrings up something you came up</p>
<p>I thought was brilliant in our paper,which was the three lawsof edge computing.</p>
<p>You called it the Laws of Physics,the Law of the Law of Economics.</p>
<p>And the third one, what was it?</p>
<p>Oh, the Law of the Land.</p>
<p>Of law, of the.</p>
<p>Land of Fascinating insight.</p>
<p>Yeah.</p>
<p>So explain the explainthose three laws real quick.</p>
<p>What? Why?</p>
<p>Why would you put laws on edge edges?</p>
<p>The wild West?</p>
<p>We can do whatever we feel like, right?</p>
<p>Well, we should definitely we shoulddefinitely go into with that mindset.</p>
<p>It's not about putting laws on it.</p>
<p>It is about thinking.</p>
<p>You know, it's about reality, right?</p>
<p>Yeah, it's it's it's about sort of</p>
<p>So when I think about the laws thatthe more than I thinkthe laws is probably a bit marketingsort of termbut more guidelines as to how I.</p>
<p>Like it. Aboutwhat kind ofcharacteristics requirementsdoes your applicationhave and how,how do you kind of classify them.</p>
<p>Right?</p>
<p>And the first way to think aboutit is you, you know, the laws of physics.</p>
<p>So you can think of an edge applicationin the context of the laws of physics,usually from like the speed of lightand the, you know,the connectivity between endpoints.</p>
<p>So, you know, an edgeapplication by definition is onethat, you know, reduces the distancebetween endpoints.</p>
<p>Okay.</p>
<p>So having a low latencykind of connection, you know, in backto the sense we you know, we have a sub 50</p>
<p>P90 round trip zone, Okay,you know, much lower in other placesand you know,but then you've got the concept of,you know, propagation delay as well.</p>
<p>So when I think about the laws of physics,</p>
<p>I'm thinking about it in a coupleof different dimensions as well.</p>
<p>So not just the distancebetween endpoints,but alsohow long does it take to process dataand what technologies should I useto actually handle the processing of data.</p>
<p>So, you know, I've worked with enterprisesin the past who,you know, have attemptedto build an edge solutionand they've used,you know, some of these legacybig data kind of approaches and,you know, the project at the edgeand completely negatedthe the benefitfrom the laws of physics perspective.</p>
<p>So there's yes, you've got a low roundtrip time, but the tack you put inplace is still processingdata like, you know,you know, ten years ago.</p>
<p>So therefore there'sno benefit of doing it right.</p>
<p>So you have towhen you think of the laws of physics,it's as I say, it's a combination of,you know, round trip time latencybut also the propagation delay of the datathrough the system itself.</p>
<p>So glad you brought that upbecause in somein some cases, right,we have edge devices that are so far outat the edge that the connectivityand those the laws of physics,like you said,just make itthat latency is is thereand you've got to deal with it.</p>
<p>You can't just say, well, I'mjust going to ignore the speed of light.</p>
<p>I'm going to ignorethat my device is on a satellite that's,you know, 1500 miles away or even furtherwhere on the other side of the world.</p>
<p>And I'm trying to connect theseto endpoints that are, you know,</p>
<p>You're going to have some latencywith that.</p>
<p>Well, yeah, you brought that point up.</p>
<p>Well, yeah.</p>
<p>And to I think to that point as well,you know, when you talk about the laws,physics, it's like you think aboutput your self in the perspective of the,you know,the enterprise in their applicationand the user experience they want to have.</p>
<p>So I can't think of an applicationwhere, you know, an enterprisewhere they don't want to havea good experience for their, for their,you know, their clients or their consumersor their devices or whatever.</p>
<p>Right?</p>
<p>The challenge is, you know,and you can solve that quite simplyby reducing, you know, the round triptime to the of the endpoints for sure.</p>
<p>But it's like, yes,we mentioned the propagation device.</p>
<p>I'm not going to go into that again.</p>
<p>But then then the next challenge ishow do you handle that on a global scale?</p>
<p>How do you provide a consistent experiencefor whateveryour endpoints are, your devices,your humans, whatever, or global scale,you know, rather than what you get todaywith a centralized approach where,you know, somebody in New York is gettinga great experience and somebody,you know, on the other side of the planetis getting a really poor experience.</p>
<p>It's like, well,how do I enable those devices,those users, to interactwith the application,with high performance,know the laws of physicsabout a global scale, okay.</p>
<p>And the edgeneeds to takethose things into account.</p>
<p>Well, in this brings up the next pointbecause most people would say, well,just have more substationsor endpoints connected inand just make short hops between things.</p>
<p>But then you have the law of economics.</p>
<p>Right now, I can't deploya million devices out there.</p>
<p>It's too expensive.</p>
<p>So explaina little bit on your law of economics.</p>
<p>We've got to make this reasonable, right?</p>
<p>You can't just. Yeah, yeah.</p>
<p>Well, the law of economics, you know,when I when I thought about this,you know, it'sas much about what you said,but also includesreally the value of that data itself.</p>
<p>You know, and this comes back to thethe value of data is fleeting.</p>
<p>Okay.</p>
<p>So it's say as we go forward and,you know, with, you know, into 2023and beyond, you know, the amount of datathat's being generated from the edges,it's just growing exponentially.</p>
<p>I forget the exact numbers we can probablylook that up, but it's zettabytes.</p>
<p>I think of data that's predictedto be generated from the edge.</p>
<p>And it's like,how are you going to process that?</p>
<p>You know, at the top of our chart,we talked about, you know, the old sort ofarchitecturalprocess of of back hauling all that datato a central locationand then and a human trawling over it.</p>
<p>It's like,is that really going to be cost effective?</p>
<p>I mean, from a from just from a dataprocessing perspective,is that the most costeffective way to do it?</p>
<p>There's a lot of noisein the signal as well</p>
<p>When you do that is all the datayour back hard hauling is that is thatyou know the valuable to youor is it specific insights now?</p>
<p>Yeah.</p>
<p>Is it the insights that valueor is it the data this value?</p>
<p>Did you really want to pull all that dataor just a subset of it,or did you not want to pull a subsetthat you actually want to process itand get to the pointwhere you're convertingraw data into valuable insight,you know, as it's being generatedso you can actuate it.</p>
<p>So the law of economics isit's not justabout moving datafrom one location to there to another.</p>
<p>It's it's about monetizing data, right?</p>
<p>It's about whether that's that's saving,you know, money, whether or not it'sgenerating new revenue.</p>
<p>Any of those things.</p>
<p>It's like the economicsaround the data itself. Andif you process the data at the edgeas opposed to it's a central location,does this all this does this open upnew economic models of business modelsfor you as a business that that willthat will mean the differencebetween going out of businessor being successful,having happy customersor unhappy customers.</p>
<p>Right. Okay.</p>
<p>Let's let's talk about the third law,right?</p>
<p>Because we've got physics, economics,and now the law of the land ideaare you applying the privacy laws here?</p>
<p>Is that what you're talking about here?</p>
<p>Totally.</p>
<p>So the law of the land is is,is is a fun one, isn't it?</p>
<p>I mean, one of the you know,we're also looking at a model here where,you know, a lot of enterprises have been,you know, Yeah, sure.</p>
<p>A lot of enterprisesof the whole lift and shift.</p>
<p>And they've put their applicationsin a central location,but there's an awful lot of applicantenterprises out there that can't do that.</p>
<p>And you know, they have a heavy investmentin on prem data centersand you know, these can be for a numberof different reasons, right?</p>
<p>It could be the privacy aspect of it.</p>
<p>It could.</p>
<p>And thosethose could be depending on the industrythat you're talking about, that could be alegislative or a regulative requirementfor them to do data processing.</p>
<p>So it's financial data.</p>
<p>Maybe it's close to a stock exchange, youknow, maybe it's a manufacturing company.</p>
<p>Maybe they have policies in placethat they've imposed on themselves.</p>
<p>This is our policyof how we want our data to be managed.</p>
<p>But they'regoing through a transformationwhere they really want to take advantageof, you know, thethe kind of modern sort of OpEx drivenbusiness model of cloud computingwhilst maintaining the performanceyou get from having an on prem data centerand the security that comes with that.</p>
<p>And the edge reallywhen we talk about the law of the landis really considering those things.</p>
<p>So whether or not these are,you know, health caredata that needs to be handledvery securely,perhaps captured at the edge, processedat the edge, but anonymized in some way,or it could be, as I say,could be, you know, financial data or or,you know,government datathat needs to be kept in a securelocation And processed, even though thezip code or postcode level.</p>
<p>I love Ilove these three thingskind of merge together because to me,we call them laws,but really they're what's the right word.</p>
<p>They'renot even impediments.</p>
<p>They're just the operating environmentthat you're in.</p>
<p>I mean, particularly</p>
<p>I can't get away from it.</p>
<p>Guiding principles of how to thinkwhat what,what do we meanwhen we talk about EDGE Right.</p>
<p>From afrom a first principles perspective,you know, why are we doing this?</p>
<p>What's the what are the driving factors?</p>
<p>And, you know, as I say,</p>
<p>I think these three laws,they're not really laws, but,you know, they they dotend to guide your thinkingwhen considering the why and how and whatthat's going to.</p>
<p>So so if we tie those nowto what we call data characteristics.</p>
<p>Right.</p>
<p>We've got data has characteristics in thisenvironment that has these three laws.</p>
<p>And we talked a lot about this.</p>
<p>A lot of people, when they think aboutdata characteristics, the commonthings come up, data sizeof how frequency,how frequent am I generating data,where is the data located,where it's being generated,</p>
<p>And then you get into types of data.</p>
<p>Is it like video data?</p>
<p>Is it audio, Is it text, is it, you know,encrypt it, allthose sorts of thingsand you have the privacy access.</p>
<p>But the one thing I want us to delve intoeven more and we've been hinting on it,is data spoilage.</p>
<p>This was a new one for me.</p>
<p>You guys introduced this concept to methat dataspoils over time like the rotten bananasin my in my kitchen.</p>
<p>Right.</p>
<p>You buy them green?</p>
<p>No one will see them.</p>
<p>And then, you know, later on they're brownand no one wants to eat them again.</p>
<p>There's that sweet spot rightwhere? Yeah, Yeah.</p>
<p>You can actually do somethingwith those bananas.</p>
<p>Yeah, they are totally. Yeah.</p>
<p>I think a lot about thethat the perishable spoilage of data,you know and I think it'syou can again there's and there'sa number of ways to think about itthere's the one of the use casesor you knowit's not even a hypothetical use casebut certainly you know a use case.</p>
<p>I think of, you know, one of my years ago,</p>
<p>I used to work in the broadcast and TVmedia industry, you know, notnot not on the producing, but on the,you know, the architecture in the businessdevelopment company event as a vendor.</p>
<p>And we did a lot of targeted advertising,you know, Soand I remember the shift between,you know, just carteblanche, you know, blanket advertisingwhere you just everyone gets the same.</p>
<p>Add to thatonce the connectivity was introducedand you could start to understanda little bit more about who was viewing,you could actually put the viewer orthe user into categories of advertising.</p>
<p>So campaigns,so you'd have various campaigns that wouldhave a profile andyou would, you know, you'd match them up.</p>
<p>And when the ads came on,you'd be able to target themwith a specific advert right?</p>
<p>And when I think about thatin the context of, you know, data,you know, it's I think there's athere's a lot of parallels to it.</p>
<p>So so imagine you were maybe youyou know, you've got your phone on you.</p>
<p>It's connected.</p>
<p>You've subscribed to an appthat basically givesyou offers around,you know, wherever you are in the world.</p>
<p>Now, say it's say it'sbased in the inner city and you'reyou know, you're walking along the streetand you're the app.</p>
<p>You subscribe to it.</p>
<p>So it's not you know, it's not imposing onyour, you know, in your time.</p>
<p>And if you want it to notify you of stuff.</p>
<p>Right.</p>
<p>So say you're walking down the streetand, you know, you know, there'sthere's definitely there's a lot of thingsfighting for your attentionof what happens.</p>
<p>And this there's a retail storejust ahead of youthat you know, has a number of offers on.</p>
<p>They would really like youto walk into the store.</p>
<p>How when is the besttime to ping me on the app?</p>
<p>Notify me on the app of,you know, when I should pop in the shop?</p>
<p>Is it when I'm on the walk,when I'm walking to when I'm right outsideor when I'm already down the streetthinking about what's on?</p>
<p>Right.</p>
<p>Obviously,you know, it's about as I'm approachingthe store, you can get away with doing itif I'm stood outside.</p>
<p>But in an ideal world, you want to be,you know, letting me know that, hey,you know, Europe, we notice you're about,you know, 50 yards away from our shop.</p>
<p>We've got a great offer.</p>
<p>If you come in today, we'll sweeten iteven further or something like that.</p>
<p>But if you try to use that data, you know,this guy was walking past my shopthe other day.</p>
<p>It's like you guys, you know.</p>
<p>And that's I think that is.</p>
<p>If. Epitome of the perishable data.</p>
<p>It's like you had this you know</p>
<p>Ireland was walking past you know,whatever shop the other day andthey're like, well that's great enough.</p>
<p>Maybe you will get. Himnext time, you know.</p>
<p>But by then, you know,the shopping experiencethat the opportunity to bring me intothe store has gone right.</p>
<p>I mean, lots of people probablywould answer that question with thethe old automotive use cases,you know, about, you know,breaking deadlock between, you know, inpotential collision environments.</p>
<p>And of course, thosethose are of super high risk.</p>
<p>And I think that's another part of edgecomputing that and not the buildingof applications around real time data thatyou know, there's there's the fun stufflike I just talked about like,you know, a shopping experience,you know, the ability to do advertising,which is really importantin a retail environment,but it's not life critical, right?</p>
<p>It's not like.</p>
<p>It's not it's not critical infrastructure,right?</p>
<p>Yeah, Yeah.</p>
<p>But you can but the same rules apply,even though there's a potentialfor accidents avoidance.</p>
<p>Like if you were in a in a, in ain the Air Force, the Royal Air Force,you know, you would have,you know, you have two different typesof air traffic control that you have,you know as wellyou have air traffic controlwhich just dealing with peopleflying around in a non-combat environment.</p>
<p>And then you have fighter control,which is dealing withyou know, we really need to be keepingtrack of everythingthat's going on right now.</p>
<p>We need to be able to and whilstthe pilots are going to make theirown decisions in a deadlock situation,we need a better answer and reactand provide them definitive life saving,you know, information from datain real time.</p>
<p>Yeah.</p>
<p>And it's like, so you've got those twoends of the spectrum, you've got the funand you've got the, the extreme like that.</p>
<p>Well, also it's interesting.</p>
<p>Let's go to thethe Fighter control, for example.</p>
<p>Yeah, I need that real time information,but I also need to do</p>
<p>I hate to use the word postpostmortem,but after the fact I want to thengo and say, what could we have done betterthat goes into that training, Right?</p>
<p>Whether I'm training an AI modelor I'm training people, there's still someadditional value that comes out of data,which is wonderful.</p>
<p>Unlike bananas, right?</p>
<p>Once they're spoiled, the only thing I canreally do is banana nut bread, right?</p>
<p>Or banana bread.</p>
<p>And that's all I get out of it. Right?</p>
<p>Right.</p>
<p>So there's there's still even thoughthere's data spoilage,there's still some intrinsic valueout of data, even even as it spoils.</p>
<p>Yeah, I'm laughing because we're big fanin this family of banana bread.</p>
<p>It's it's like we. Go.</p>
<p>We let our bananas spoil because we knowwe're getting banana bread.</p>
<p>You're getting banana bread. It'sthat's also</p>
<p>All right sowe've talked about the Yeah,we talked about all these characteristics.</p>
<p>We've talkedabout the operating environment, the laws.</p>
<p>Let's talk briefly about the architecturesthat help us overtake it, take advantage of the environmentthat we're in,because I can't just say one architectureis going to solve all my problems.</p>
<p>We already know that.</p>
<p>But there are some distinctarchitectural approachesto solving thesethese problems that we're talking about,especially with edge computing and data,with all these different characteristics.</p>
<p>Yeah, yeah, totally.</p>
<p>And I think that this is, you know,this is what I've seen over the overthe years of working in thethe edge space.</p>
<p>And I think it doesrelate to the to symptom,you know, obviously the loss as well.</p>
<p>It would have to wouldn't it.</p>
<p>But the,you know, you could computepretty much anywhere you wantand you know, within reason and you know,if you are part of the valuemay be derived from unique pointsof presence itself,you know that you can take advantage of.</p>
<p>Otherwise it's, you know, it's multilogical and neutral.</p>
<p>Right?</p>
<p>So, you know,anyone can put some hardware in thereand that's a that's a great model.</p>
<p>The next step up.</p>
<p>So you're talking about infrastructureas a service at this pointand that gets you so far.</p>
<p>But at some pointyou're going to want to buildan application to run on that compute.</p>
<p>And you know, if you're just running itin a single location, you know,then maybe thethe proximity in the locationis is sufficientfor you to be able to almost,if I can use the term lift and shiftfrom wherever it is to that edge.</p>
<p>But as soon as you want to getwhat I said earlier about theyou know, that consistency of experience,whether it's humanor a device or whatever,on a distributed stage.</p>
<p>Right.</p>
<p>And a distributed system, you know,that becomes more challenging. Andit's not so easyjust to pick off the shelfa few components and just say, that'smy tech stock and it's going to workglobally because these this these arethis is complicated stuffto build a distributed system.</p>
<p>It's like, how do you handlethe consistency and reconciliationof data, you know, in a distributed systemwhilst letting you put APIs on it?</p>
<p>How do you deal with, you know, dataat rest and data and flight?</p>
<p>We're talking about real timedata here, right?</p>
<p>So there's an enough predominantly,you know, you can be a mess of thinkingthat we're just focusing on datathat's being generated in the moment.</p>
<p>But to your point, a few moments ago,you know, the banana bread, right?</p>
<p>The part of thesay you're doing, you know, alittle process, part of that processcould be complex joinsand then data enrichmentas you as you're processing the extractingtransforming and lifting the data.</p>
<p>Right.</p>
<p>So you need to have that.</p>
<p>You start to get into thisvery complex environment where you realizethat your application needs a,well, almost a smorgasbord of technologiesto actually realize the kind of thingsyou want to do.</p>
<p>And all of a suddenyou're getting a lot of complexity.</p>
<p>And and I guess, you know, as is chattingand always says, you know,computer science is always about,you know, abstracting complexity.</p>
<p>Right? And and that's what we've done.</p>
<p>You know, we have takenwe're very opinionatedplatform, and I say opinionated becausewe know through our experiencethe kind of technologies that, you know,you need to have pre integratedand and customized to be able to buildthese kind of high performance, real timeapplications that can take advantage of,you know, data that has been collectedand is available for Oracle,but then also allow you to combine itwith with real timedata to provide real timeactionable insights on a global scale.</p>
<p>And I think that's to your questionthat that that is the real challengeof, of of edge computing.</p>
<p>It's like how do I go from a desirefor a performance improvementfor my application,whether or not it's more physics,whether it's an economicor whether it's a law of the land to thenactually taking into accounthow does this work on a global scale?</p>
<p>Okay.</p>
<p>And that's the real challenges, right?</p>
<p>And it yeah, and Iand I love that that approachbecause that also saysbecause I'm taking into considerationthe three lawsit says that I'm not necessarilyprocessing all the data on the edge.</p>
<p>I'm processing it in the ecosystem,which gives me flexibility.</p>
<p>Right.</p>
<p>And I need that flexibilitybecause as we mentioned,sometimes I need that real time insightand sometimes I need the data to spoilto produce great banana bread. Yes.</p>
<p>Is that where I'mwhen I'm combining stuff from other thingsand it takes more time.</p>
<p>So I can't just say no, everything's outon the edge or everything's centralized.</p>
<p>It's got to be I have to be ableto support multiple modesand that's what I really loveabout your guys's approach to this.</p>
<p>Yeah, I mean, thisthis is this is the thing.</p>
<p>I mean, I'm sorry,</p>
<p>I was going to say something else, butthe distributed systems are not justit would be wrong to assumethat distributed system simply means,you know, I'mreplicating the exact same partsof my applicationacross every point of presencethat I have available to me.</p>
<p>You know, back when I was at university,the, you know, we I or my placement.</p>
<p>Yeah,</p>
<p>I used to work with transducers,if you remember those downand you know, we'd have one. So yeah.</p>
<p>One transducer that did one thing.</p>
<p>I don't remember the model numbers.</p>
<p>It's too long ago we had one transmitterthat had one was good at one thingand another transmitterthat was good at another thing.</p>
<p>And the trick was to do parallelprocessing, you know, written in allcome across these, these transmittersand use them for, for the,you know, to the to their, you know,for the appropriate value that they bring.</p>
<p>Right.</p>
<p>And you can you can draw a parallel,no pun intended back to, you know,distributed systems in cloud computing.</p>
<p>Right.</p>
<p>So you could have you've got the edgethat's perfect for doing real timefast data processing to generate insightsand all kinds of other coolthings at the edge.</p>
<p>And then you can usesome of that centralized approach for,if you like, your machine learning.</p>
<p>So you have that.</p>
<p>The idea of a reinforcementlearning is a great example.</p>
<p>So federated or distributedreinforcement learning where you arerunning your inference at the edge,but you're your modeltraining and update isis handled centrally and then you're doinga an update of the edge.</p>
<p>Inference is dynamically.</p>
<p>So you're combining the best of both, youknow, historical data and real time data.</p>
<p>And not only that, the insights, right?</p>
<p>So you it's not just yes,</p>
<p>I got my real time data,my historical data, but you want to seewhat did you do with that data,those insights and then howdo you feed all that back and then retrainand improve the model itself?</p>
<p>So you're talking about buildingdistributed systems,not just moving stufffrom central locations to the edge.</p>
<p>You're talking about buildinghigh performance applications that thatthat that use the capabilitiesthat are in the industry todayfor being the best possibleway for your application.</p>
<p>So this is great. Alan.</p>
<p>I think we</p>
<p>I think we've kind of shown everyone,hey, this is the problem spacethat we're in.</p>
<p>You guys have</p>
<p>I think, a unique and fascinatingarchitectural approach to this.</p>
<p>Bye bye.</p>
<p>Handling all the complexitythat's in a global data meshhandling function as a service.</p>
<p>On top of that, in the data governancepart of that, we should spend a wholenother podcast just going more in depthinto your guys's architecture.</p>
<p>But we don't have time todaybecause we're already out of time,which you should be street read andyou. Can read the white paper without.</p>
<p>Yeah, read. The white paper.</p>
<p>That's a good primer.</p>
<p>And you know, we can alwaysredirect people to the websiteand, you know, they can,they can read more about it there.</p>
<p>So we got lots of Yeah.</p>
<p>In fact, check out check out our websiteyou can find on embracing digital dot org.</p>
<p>You can find a link to the white paper.</p>
<p>Check out MacroMeta.com.</p>
<p>MacroMeta.com Yeah.</p>
<p>All right And that from MacroMeta.com.</p>
<p>And I'm sure you guys have a link up thereto this wonderful white paperthat Alan and I wrote.</p>
<p>So. Alan, it's been a pleasurehaving you on the show today.</p>
<p>Yeah, thanks very much.</p>
<p>My pleasure as well.</p>
<p>Thank you.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five Stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigital.org.</p>
<p>Until nexttime, go out and do something wonderful.</p>

</details>
