---
layout: posts
title: "The Birth of Graph Intelligence Platforms"
number: 106
permalink: episode-EDT106
has_children: false
parent: Episodes
nav_order: 106
tags:
    - Data Management
    - Graph Intelligence Platform
    - GraphDB
    - Katana Graph

date: 2022-09-20
guests:
    - Darren W Pulsipher
    - Greg Steck

img: thumbnail.jpg
summary: "Intel’s Darren Pulsipher, Chief Solutions Architect, Public Sector and Greg Steck, Senior Director of Industry Solutions, Katana Graph, talk about the benefits of Katana’s graph intelligence platform."
---

{% include soundcloud.html id="edt106" title="#106 The Birth of Graph Intelligence Platforms" %}

{% include youtube.html id="Bx7yeMhnBJg" %}

---

Greg began his career at an investment bank in credit risk when they started implementing CCAR stress testing. After being heavily involved in that for some time, he began consulting and was introduced to graphs while doing credit risk model validation. He saw how graphs could be leveraged for many different kinds of analysis and had benefits in data management and machine learning, specifically in credit modeling. From there, he found his way to Katana.

Data analysts and data scientists are constantly struggling to integrate different data sets. Greg was drawn to graphs because after being introduced to RDF, a semantic kind of knowledge graph format, it made intuitive sense how the data could be combined and structured as a graph.

With existing graph solutions, analysts had difficulty scaling their solutions because much of their data was so big. Katana Graph developed the ability to scale and also focus on machine learning.

At the beginning of graph databases, large companies like Amazon and Facebook built in-house graph databases, doing their modeling and machine learning. Then came consumer versions of platforms such as Neo4j and TigerGraph for general use cases. The challenge was that they were centered around the database and not so much the analytics and machine learning, the processes, and actual graph computing. They were limited to being a kind of data store, focusing on the ingest and the CRUD operations and not as much on the data.

There are three different kinds of graph computing domains. The first is graph query, the graph database, and CRUD operations. The second is graph analytics and mining with PageRank, or clustering, algorithms, which are becoming popular. The third area is graph AI and machine learning. This is where graph neural networks come into the picture. There are point solutions that will solve specific parts of those domains, but Katana Graph sits at the intersection of those.

Each of the three platforms is important. To do machine learning, you need the other two domains. When the data is first ingested, it must undergo many transformations to prepare it for machine learning, so if you don’t have all of this in one solution, the pipeline will be slow, sending data out and back in. It’s most efficient to iterate on the whole pipeline quickly. It also reduces the risk of losing data because you are decreasing the number of times you transform the data.

In addition, since Katana Graph is a cloud-native platform, you can pause, save a checkpoint, spin down the cluster, and spin it back up later, right where you left off.

A good demo is for fraud detection with a Bitcoin transaction data set. The platform ingests the data, which is structured, so the Bitcoin wallets are the nodes in the graph, and then the edges between them are the transactions. It’s a simple graph. The idea is to predict if a Bitcoin wallet is fraudulent. Illicit wallets for money laundering, drug trafficking, etc., have been labeled. When a new account comes in, the task is to predict if it’s fraudulent. The challenging part, then, is to do some pre-processing with the numeric features of the accounts. A set of APIs has been designed to address that problem. All the things that data scientists do to prepare their features are done here. From there, the graph is ready to put into the machine learning model, where it is trained, and then, using neural networks, you can learn how to classify the accounts.

A benefit of the platform is that data scientists and engineers can work from one platform rather than piecing things together.

Another benefit is the total cost of ownership. Unlike other platforms, you do not have to keep the whole graph database running all the time. Since Katana Graph pipelines are designed with a separation of storage and compute, you can easily spin up a cluster, do some batch processing beforehand, and then run inferencing in a separate system and still leverage what was generated in the graph.

Katana Graph is also faster with large data sets because it does not load all the data upfront but has an innovative, dynamic way to load the data as you need it as you work through the pipeline.

Basic analytics are much easier on the graph database rather than on a relational database. If you have ten different datasets, it can be cumbersome and error-prone for an analyst to figure out how to join them to write a query in a relational database. With a graph, you have a singular model, already predefined and built, so the questions will be much easier because the data is already connected. You can intuitively see how the information is related.

One of Katana’s new features is a Dash data frame importer. Dash is a common framework data scientists use for parallel processing data frames. The data scientists can work with the data frame they are already using and directly ingest it into Katana Graph for a seamless, simplified experience.

DevOps is a big part of what Katana is trying to facilitate with their platform. They easily integrate into existing learning pipelines. When the graph neural networks are run, the embeddings can be exported. These features that a graph generates can go downstream to a machine learning process. So the integration becomes a lot simpler and a lot easier to operationalize and put into production.

Over the next five years, Greg envisions organizations such as banks having centralized repositories to analyze customer, marketing, or credit data for multiple purposes. The output from machine learning models could be used for both credit risk and fraud detection, for example. Instead of using siloed data sets with a lot of replication and duplication between them, there would be a common model synchronized within a graph. 


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, thisis Darren Pulsipher, chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people, processand technology.</p>
<p>On today's episode,the birth of Graph Intelligence Platformswith Greg Stecksenior solution architect at Katana</p>
<p>Graph.</p>
<p>Welcome to the show.</p>
<p>Thanks, Darren.</p>
<p>Happy to be here.</p>
<p>Hey, Greg,tell me a little bit about yourself.</p>
<p>We've already talked to Hadiabout the benefits of graph databases,but tell me a little bit about yourselfand your background.</p>
<p>Sure.</p>
<p>Yeah.</p>
<p>So my background is in financial services.</p>
<p>So I started my career at an investmentbank in credit risk.</p>
<p>So it was right at the timewhere they were starting to implementa lot of the sector stress testing.</p>
<p>So we got heavily involved in that.</p>
<p>After doing that, for some time,</p>
<p>I went to did some consultingand we did more kind of creditrisk modeling model validation,and that's kind of where I was introducedto graphs, right?</p>
<p>And really how they could be leveragedfor a lot of different kinds of analysis,a lot of benefits on the datamanagement side, but then also on machinelearning and credit modeling sidespecificallyso that I then I found my way to a ton ofthat's how I ended up here.</p>
<p>All right.</p>
<p>So you're the one that, you know, made itso I couldn't get a loan on my house?</p>
<p>Is that what I'm hearing?</p>
<p>You're the credit. Guy.</p>
<p>Pretty much said. Yeah, you got it.</p>
<p>Oh, great.</p>
<p>So you know how all those algorithms work.</p>
<p>So you know how to work.</p>
<p>You know how to work.</p>
<p>You know we're getting loans and things,right?</p>
<p>Yep. Yeah, that's what we did.</p>
<p>A lot of it. Yeah.</p>
<p>Consulting a job at the investment bank.</p>
<p>It was more kind of on the derivativesand OTC side,so more counterparty risk,but yeah, consulting.</p>
<p>We did a lot of the consumer lending.</p>
<p>Wow. That's that's incredible.</p>
<p>All right.</p>
<p>So what takes you from financialinto something high tech kind of bleedingedge like a tanning graph?</p>
<p>What?</p>
<p>I mean, what made you move over there?</p>
<p>Yeah.</p>
<p>So when we were working with this data,you know, as a data analystand as the data scientist,we're constantly struggling trying tointegrate all these different datasets. Right.</p>
<p>And so what I was introduced to graphand I was actually introducedthrough RDF, right?</p>
<p>So that's like a very semantickind of knowledge graph format.</p>
<p>It made a lot of intuitive senseon how this data could be combined.</p>
<p>Right?</p>
<p>So I was very familiar with the data,so it just made a lot of senseto structure it as a graph.</p>
<p>So that's really kind ofwhat drew me into to start using graphs.</p>
<p>Well, that's that's incredible.</p>
<p>And then, I mean, you must have liked itso much that you jumped ship onto creating</p>
<p>I mean, container graph.</p>
<p>That's what they do, right?</p>
<p>Yeah, exactly.</p>
<p>Yeah.</p>
<p>So with chaotic graph,it was really seeing thisand we were experiencingthis scalability problem throughout.</p>
<p>We were trying to useexisting graph solutions.</p>
<p>We were havinga lot of our data was very big.</p>
<p>We were having a hard time scalingour solutions with the existing databases.</p>
<p>And so that's reallywhat was very compelling with the town of</p>
<p>Graph was their ability to scale,but then also the focus on machinelearning.</p>
<p>Okay. So tell me a little bit.</p>
<p>I mean,we mentioned at the top of the showthis is the birth of graphintelligence platforms.</p>
<p>What in the world is I mean,because we heard about graph databases.</p>
<p>All right.</p>
<p>They're super cool.</p>
<p>I like using them for for my work.</p>
<p>But I mean, I can only carry those so far.</p>
<p>So what's this next phase?</p>
<p>I mean, what would you call us?</p>
<p>Yeah, exactly.</p>
<p>So, yeah, we've seen kind of the graphdatabases evolve over time, right?</p>
<p>So kind of at the beginning,kind of the 1.0 was,you know, how you have the large companieslike Facebookand Amazon building basically in-housetheir own graph databases.</p>
<p>Right.</p>
<p>And they're doing a lot of the,you know, the modelingand then the machine learning around it.</p>
<p>And then you had some platforms like Neofor Jay</p>
<p>Tiger Graph introduce, you know,kind of a consumer version, right?</p>
<p>The ability to use those for,you know, just general use cases.</p>
<p>But the challenge wasthey really were centeredaround the databaseand not as much around analyticsand the machine learning, the processing,the actual, the graph compute so that.</p>
<p>They were prettythey were pretty limited then because</p>
<p>I mean they're they're onlyit's like a data store in that case.</p>
<p>Then, right? Yeah. Yeah, exactly.</p>
<p>So mostly on the storage,you know, the ingest, you know,the CRUD operationsand not as much on the on the compute.</p>
<p>Okay.</p>
<p>So then I mean, that has limited use,as you were saying.</p>
<p>So then it moves intoyou said analytics comes next.</p>
<p>Is that where you're seeing thingsmigrate to?</p>
<p>Yeah, exactly.</p>
<p>So we kind of see these in like threedifferent kind of graph compute domains.</p>
<p>So you've got kind of the the graph query,those are your graph databaseoperations, right? Your CRUD operations.</p>
<p>And then you have the seconddomain is graph analytics and mining.</p>
<p>So that's where you have kind of PageRankalgorithms, clustering algorithms, right?</p>
<p>Those have startedto become really popular.</p>
<p>And then the third area that we see as,you know, graph air and machine learning.</p>
<p>So this is where graph neural networksreally come into the pictureand there solutions like solve,you know, you know,kind of there's point solutions out therethat will solve specific partsof those domains, but the graph sitsat the intersection of those.</p>
<p>That'swhat we do that is really important.</p>
<p>So it's it's the three domains.</p>
<p>I want to make sure I got it right.</p>
<p>It's your graph databases,right for your normal like storingand your normal queryingtype things, right analytics.</p>
<p>And then I and,and it's the convergence of all three.</p>
<p>I mean, why do why do I care?</p>
<p>Why not just stick withwhat's already been out there?</p>
<p>I mean, we know the benefitsof an individual graph database,but why not just convertor take snapshots of that dataand put it in your traditional datalake and run analytics there?</p>
<p>Why not just do that? Yeah.</p>
<p>Yeah.</p>
<p>So what we found is that, you know,each of these are important.</p>
<p>You know,you need all three of these, right?</p>
<p>To have a successful platform and,you know, kind ofto walk through an example, right?</p>
<p>If you're trying to do machine learning,you need the other two domains, right?</p>
<p>You need to be able to run graph queryto prepare the graph.</p>
<p>You know, when you first ingest the datainto a graph,there's a lot of transformationsthat need to be doneto prepare it for machine learning.</p>
<p>And so if you don't have thisall in one solution,it's going to take you a lot of timefor that pipeline, right?</p>
<p>To get to the machine learningor to the analytics, it's a lot of painto, you know, to send the data out,read it back in.</p>
<p>And there's a lot of iteration that goeson, right?</p>
<p>You need to be able to iterateon this whole pipeline quickly.</p>
<p>So by goingto a full graph platform,what you're telling me is</p>
<p>I can decrease the amount of times</p>
<p>I have to transform the data.</p>
<p>That's what I'm doing. Is that. Right?</p>
<p>Yeah.</p>
<p>You got it. Yeah.</p>
<p>So we have an in-memory representation,so that's going to in our API,you can just operate on that same graphobject through that whole lifecycleso you can adjust it.</p>
<p>And then, you know,we're very data scientist friendly.</p>
<p>So it's all Python operations that you cando just through that whole pipeline.</p>
<p>So that's pretty cool.</p>
<p>So not only does that decrease time, I'mguessing that also decreasesthe amount of storage that you useand also possibilitiesof screwing things up.</p>
<p>Right.</p>
<p>I mean, anytime you touch and transformdata, there's an opportunity toto lose data, right?</p>
<p>Yeah, absolutely.</p>
<p>Yeah.</p>
<p>When you're trying to write backand send it between platformsand transform it, yeah,there's a lot of room for error, so.</p>
<p>Yeah. And then also with our,you know, we're a cloud native platform.</p>
<p>So being able to separate the storageand compute, you know, if you ever wantto, you know, parse, you can stop,you know, save a checkpoint offfor that graph, spend down the cluster,spit it back up later and startright back off where you left it.</p>
<p>So oh, wait, that's that's really cool.</p>
<p>So what you're telling me is I can take asnapshot of my graph in this case, right?</p>
<p>So, hey, I run into this one areathat I knowthe next steps may be risky.</p>
<p>I don't know what the right word is.</p>
<p>It could corrupt my data, possibly.</p>
<p>So I want to take a snapshot and keep thatso I have some temporal aspect to it.</p>
<p>Right. And then I can carry on.</p>
<p>And then possibly if that mess things up,</p>
<p>I, I can wipe that outand go back to my original.</p>
<p>Is that part of this whole platform idea?</p>
<p>Yeah, absolutely. Yeah.</p>
<p>So if you're a data scientist and you'rerunning various experiments, yeah,you'renot exactly sure what you're going to get.</p>
<p>So you wantto save a checkpoint at the beginning,try some things out and then go back.</p>
<p>Right. But also if you're passing itbetween teams, right?</p>
<p>So in these large organizations, typicallyyou'll have a data management teamthat's they're the ones that understandthe source data.</p>
<p>They're the ones they're goingto build the graph for you, right?</p>
<p>So they could build a graphin our platform, save it off.</p>
<p>And then the data scientists,the data science team, they can pick itright up from from that point.</p>
<p>Give me a use case.</p>
<p>So show me how I would use thiswhole platform with one of your customers,maybe someone that you've helped recently.</p>
<p>Yeah, sure.</p>
<p>So we've got a great demo that we thatwe walk through around fraud detection.</p>
<p>So there's this Bitcoin transactiondata set, right?</p>
<p>There's a tool called the elliptic Bitcoindata setand we go throughand we can ingest that data.</p>
<p>So you have the basically the waythe data is structured is you have</p>
<p>Bitcoin wallets are the nodes in the graphand then you have the edgesbetween those are the transactions, right?</p>
<p>So it's a pretty simple graphyou have. Yeah.</p>
<p>The walletsare these accounts, these account nodesand then you're transferring databetween the different nodesso that that's the structure.</p>
<p>And then we're trying to basically predictif Bitcoin wallet is fraudulent, right?</p>
<p>In this case, it's illicit or illicit.</p>
<p>So these have been previously labeled as,you know, for,you know, moneylaundering, trafficking, drug, right.</p>
<p>Any of these kind of things.</p>
<p>They flagged it as illicit.</p>
<p>And so in the task we're trying to predictwith a new account that comes inif it's fraudulent or not.</p>
<p>So we and the first step is to, you know,ingest that data into our platform.</p>
<p>We built a graph and then we want to dosome future preparation.</p>
<p>So if you think about each one of these</p>
<p>Bitcoin accounts, they have a whole setof numeric features, right?</p>
<p>And to start the machine learning process,you need to do some,some setup preprocessing to that, right?</p>
<p>You need to get it ready for machinelearning.</p>
<p>That in itself is really challenging.</p>
<p>We have actually designed a set of APIsto address that problem.</p>
<p>Right, to quickly normalize one hard code.</p>
<p>All these things that data scientistsdo to prepare their features,you can do that.</p>
<p>So now you've got the graph ready toto put into the machine learning model.</p>
<p>And then from thereit goes into the machine learning model.</p>
<p>You train it right.</p>
<p>And using graphneural networks, which I think we're goingto get into in another episode,you can you start to learn about,you know, howto classify these accountsas fraudulent or not.</p>
<p>So that's kind of an example of,you know, for fraud detection,how you would go through that process.</p>
<p>So you guys offer one platformthat lets a datascientist work onand your data engineers, right?</p>
<p>Work on that whole thing from one platforminstead of piecing things together.</p>
<p>Is that the best wayto think of the platform concept?</p>
<p>Yeah, exactly, exactly.</p>
<p>I of very, very cool stuff.</p>
<p>What other benefits do</p>
<p>I get from using a platformas I heard of ease of use decrease intime.</p>
<p>Yeah. What other things.</p>
<p>What other things are there.</p>
<p>Yeah.</p>
<p>So another one is total cost of ownership.</p>
<p>So when you think about running this,this pipelineand you're using a large amount of data,there are certain patternswhere you can actually haveto leave off the whole graph databaserunning all the time.</p>
<p>So when you have a new,we take our example from before.</p>
<p>If you have a new fraudulent,you have a new transactioncomes in, you want to runinferencing against that data, right?</p>
<p>And so in a lot of these cases,you have to keep up this cluster,which is very expensive. Right.</p>
<p>And you have to have itrunning all the time.</p>
<p>But with the waythat we design our pipelinesand the way because of the separationof storage and compute,we can easily spin up our cluster,do some batch processing beforehand,and then you can run inferencingkind of in a separate systemand we can still leveragewhat we generated in the graph.</p>
<p>So this really lowers the total costof ownership by a lot, right?</p>
<p>You're only spinning up your clusterwhen you need it.</p>
<p>You don't have tohave it online all the time.</p>
<p>So that that's prettycool because I can like you said,</p>
<p>I mean, if you're running in the cloud,you're payingwhether you're using it or not, right?</p>
<p>Yeah, exactly. Yeah.</p>
<p>You have to have it up for inferencing.</p>
<p>You've got to have it up 24 seven.</p>
<p>And it's got to beyou've got to have the whole data loaded.</p>
<p>Yeah.</p>
<p>So so that's that's</p>
<p>I guess another question I have for you.</p>
<p>How long does it take for?</p>
<p>All right, I've to spin up a cluster to domy training.</p>
<p>Is that a substantial amount of time?</p>
<p>Because some of these graph databasesare pretty large, or does it load thingsdynamically as it needs them, ordoes it have to load it all into memory?</p>
<p>What's what's the how does that work?</p>
<p>Yeah.</p>
<p>So, you know, in terms of actuallydeploying the cluster,you know, we have a,you know, a deployment method to do that.</p>
<p>And once the cluster is up,you know, that takes a little bit of timeto get it configured.</p>
<p>But then once it's stops,you can easily stop and start it, right?</p>
<p>But now when we talk about adjusting data,this might be getting to your point.</p>
<p>We can at any time when we first loadour load is very fast and it's becausewe don't load all the data that we needat, you know, at the beginning, right?</p>
<p>So we haven't got a smart wayto load the data.</p>
<p>And then as you workthrough that pipeline, as you needcertain properties on the graph,then it will actually load those.</p>
<p>So we do have a dynamic way to load dataall the only load stuff that you need.</p>
<p>So I don'thave to, I don'thave to load the whole thing in the memorybecause I know in the pastwhen I've worked with graph databasesto get them started at the beginning,</p>
<p>I'd have to load everything up into memoryand then I could work on it.</p>
<p>And then as the changes came through,it stored the deltas out.</p>
<p>But you guys, obviouslyyou're beyond that now, right?</p>
<p>I mean, that wasthat was probably an old clunky, you know,neo 4G install at the time.</p>
<p>So I'm able to I'm able to quicklybring things up.</p>
<p>And obviously, if if you're hammering theif you're hammering the graph,it's going to take some time to getthose nodes loaded at first.</p>
<p>But after that, it'll be fast, right?</p>
<p>Yeah. Yeah, exactly.</p>
<p>And you know, a lot of this technology,this is, you know,kind of our core competenciesin this area.</p>
<p>So our founder, Dr. Bishop in Galway.</p>
<p>Right.</p>
<p>And his team, this is where they focustheir research for, you know,the last ten years was aroundthese optimizations to be able to do thisin parallel and to do it very fast.</p>
<p>Very cool.</p>
<p>Now tell me a little bit moreabout on the analytics side,because there are platformsthat have been out there for some time.</p>
<p>I know the same techniques don'tdon't mean anything like MapReduce doesn'treally apply into a graph database nearlylike it does in a relational database.</p>
<p>Right.</p>
<p>Because you have to do that in orderto split everything up across a cluster.</p>
<p>But what kinds of operationswhat can I do on the analytics side?</p>
<p>Because I don't wantto get into the side yet.</p>
<p>We're going to do a wholenother podcast about that.</p>
<p>But what about on the analytics side?</p>
<p>What sorts of thingscan I do with a graph?</p>
<p>Database can do everything</p>
<p>I normally did with my relational deck.</p>
<p>What are the limitationsand maybe what's better in graph?</p>
<p>Yeah, sure.</p>
<p>So yeah, we talk about analytics.</p>
<p>Maybe we could talk about some of thewhen we talk about analytics,we think about graph algorithmslike PageRank from band.</p>
<p>So maybe we could talk about those too.</p>
<p>But in terms oflike your generalized analyticsthat you would want to do in a, ina, like a relational table,the real benefitthat you get for doing that in a graph,the firstbenefit is having a singular data model.</p>
<p>Right?</p>
<p>So you probably talked a little bitabout this with Heidi, but being able toif you have ten different datasets, right,and if you're an analystand you're trying to figure outhow do I join these togetherto write a query,you know, that's that's very cumbersomeand it's very error prone.</p>
<p>Now, when you'rewhen you're using a graph, right,you have a singular model, right.</p>
<p>That's already been predefined and built.</p>
<p>So as an analyst is data.</p>
<p>So I'm just trying to do queriesand try to understand the dataand what's some basic analyticsthat's going to be a much easierright to do that with a graphbecause my date is already connected.</p>
<p>I can, you know, I can intuitivelysee how the data is related, right?</p>
<p>So so you guys have inyour analytics toolboxthe, you've given the ability to actuallyperuse the graph itselfso I can see how things are related.</p>
<p>Is that part of youranalytics platform? Because</p>
<p>I know,</p>
<p>I knowsome, some of the stuff that I writebecause I'm a software engineerand some of the things that I write,</p>
<p>I start seeing new relationshipsbetween objects in my systemthat I didn't knowwhen I first designed it.</p>
<p>And they just pop out because, oh,those two things are related,let's connect them.</p>
<p>So some of these, they're not verywell-defined data schemas sometimes.</p>
<p>Is that. Yeah. Is that fair to say.</p>
<p>Yeah, that makes sense. Yeah.</p>
<p>At our focus. Right.</p>
<p>Kind of initially is really onthe data scientist kind of experience.</p>
<p>Right.</p>
<p>So we have a Jupiter notebook interface,but we do have some nativevisualizations in therewhere you can inspect the graph.</p>
<p>Right?</p>
<p>You can see the graph schema,you can explore it a little bit.</p>
<p>So we do have somecapabilities around that.</p>
<p>Oh, that's cool.</p>
<p>And thenit sounds like you geared it specificallyfor data scientist Jupyter Notebooks,very common for the data scientiststhat are out there,which then gives you, as you mentionedbefore, on the data scientist side,</p>
<p>I have that abilityto write my Python scripts tobring data in or traverse the traversethe graph as I need to,those sorts of things.</p>
<p>Is that pretty safe to say?</p>
<p>Yeah, exactly.</p>
<p>Yeah, you got it.</p>
<p>And one of the featuresthat I really like about thatthat we just introduced was Dest dataframe importer.</p>
<p>So Dash is a really commonframework similar to Spark, right?</p>
<p>Where you can doparallel processing on data frames.</p>
<p>And so data scientists are very usedto working with these structures.</p>
<p>And so we have a way, insteadof the traditional way to do this in graphdatabases, you have to learn a complicatedmapping syntax,right, to be able to mapit from relational to graph.</p>
<p>But using those data data frame,the data scientists can just workwith the data frames they're already usingand then directly ingest those intoa ton of crap. Right?</p>
<p>So it provides this really seamless wayto get started using Cortana.</p>
<p>So you've simpler, you've,you've radically simplified thingsit sounds like.</p>
<p>As far for the data scientists.</p>
<p>Yeah, exactly.</p>
<p>Yeah.</p>
<p>They don't have to worryabout learning a new syntax,they can just do data frame,they can use the data frames are using itand then just those.</p>
<p>Are very cool.</p>
<p>Now a lot of times and this may be offsubject is tell me but a lot of timeswhat I found was data scientistsit sounds like you are onea lot of times itit seems to me like data scientistswork on a projectget it all working, give the results outand then they move on to the next thing.</p>
<p>And they don't really the company doesn'toffer really operationalizedis not the right wordoperationalize that databecause it's it</p>
<p>I got my experiment it's done and it's outbut I want real time data.</p>
<p>I want this continuous thing.</p>
<p>Does this platform help with thator have you guys built that in?</p>
<p>We're a I've I've got my</p>
<p>I've got my analytics all set up nowset it out thereand then when new things come intell me what's changedor things like that.</p>
<p>Is that part of a platform like this?</p>
<p>Yeah, absolutely.</p>
<p>Yeah.</p>
<p>DevOps is a big partof what we're trying to accomplish, right,and what we're trying to facilitatewith our platform.</p>
<p>So, you know,one of the ways that we help with that isand now we can easily integrateinto existing machine learning pipelines.</p>
<p>Right.</p>
<p>And this is I kind of alluded this before,but when we run our ourour machine learning,our graph neural networks, right,we can export the embeddings, right?</p>
<p>These are the basically featureswe've generated from the graphand we can send those to a downstreammachine learning process.</p>
<p>So the integration becomes a lot simplerand a lot easier.</p>
<p>Production allows because you're right,it's really easy to, you know, designa, you know, design a model and then just,you know,it's it's hard to operationalize,but with the way that we can figure outpipelines is, you know, it'sa particular with fraud detectionlike we were talking about earlier.</p>
<p>It's really easyto put that into production, right.</p>
<p>It's going to easily plug intowhatever downstream machine learning modelplatform you're already using.</p>
<p>Very cool.</p>
<p>So it sounds to melike you guys have thought aboutthat whole experience of the data.</p>
<p>The data ops is out a word.</p>
<p>Yep. DevOps.</p>
<p>Yeah. Yeah, you got. Yeah, data.</p>
<p>It's like data data DevOpsdata dev, data ops.</p>
<p>You know, it'sall it's going to be all over the place.</p>
<p>So you, you guys have built thatinto your platform.</p>
<p>So I can I can do the work.</p>
<p>I can create these pipelinesthat can then be deployedon my livedata and produce value coming out.</p>
<p>That sounds like.</p>
<p>Yeah, exactly.</p>
<p>Yeah.</p>
<p>We're working with some really commonyou know, model registry metric trackingplatforms that are open sourcethat you can easily integrate with.</p>
<p>So yeah, we definitely want to make itas easy as possibleand as seamless as possibleto plug into those existing pipelines.</p>
<p>It sounds like,why would I ever use a relational databaseanalytics platform anymore?</p>
<p>I mean, you guys have simplifiedthis quite a bit.</p>
<p>Is that is that what you said?</p>
<p>Do you do you think that I can I can moveaway from your relational stuff?</p>
<p>Would you ever move petabytesof relational data into a graph?</p>
<p>Does that make sense or not?</p>
<p>What do you think?</p>
<p>Yeah, I think it does.</p>
<p>I think there are certain thingswhen you talk about latency, right,because we're we're in a analyticsplatform.</p>
<p>Right.</p>
<p>We're really built aroundkind of overlap functionality.</p>
<p>So certainly there'll be some,some things that you'll want to doa lot more in the online environmentthat you would want to haveyou could have a relational database for.</p>
<p>But yeah, absolutely, for all outtype workloadswhere you're running these large scaleanalytics and machine learning,yeah, it makes all the sense to to do itin a graph graph database becauseeven if you want to do some of theseother traditional machine learningmodels, like adeep, deep neural networks and lshtmand all these things,you can still do thatin our platform, right?</p>
<p>So you're not excluded.</p>
<p>You're not you're not excludedfrom using those types of modelsand those types of processes.</p>
<p>You're just getting the additional benefitof the graph data managementon the backend and then also leveragingsome of these graphdeep learning frameworks.</p>
<p>So super, super cool.</p>
<p>Wow. Craig,you've given us so much information.</p>
<p>It's I think it's almost overwhelming,right.</p>
<p>What you guys are able to do here.</p>
<p>Where do you see five years from now?</p>
<p>Where do you see these types of platforms?</p>
<p>You see any additionaltypes of things in here besides the threethat you've talked about.</p>
<p>Where do you see it moving forward?</p>
<p>Yeah, that's a good question.</p>
<p>I think in terms of where I see it going,you know,</p>
<p>I would envision thisin some of these banks that I've worked inas kind of like the centralized repositorywhere you're analyzingall of your customer data, for example.</p>
<p>Right?</p>
<p>Or you've got youryour marketing data, your credit data.</p>
<p>And you know, what we foundis when you run these machinelearning models, you can use themfor multiple purposes, right?</p>
<p>There's a bank out there that's done.</p>
<p>They basically ran a machinelearning model.</p>
<p>They built a machine learning model,and they use the outputs from itfor both credit riskand also for fraud detection.</p>
<p>Right.</p>
<p>So I think that's kind of thethe next level is being ableto really generate kind of the 360 viewor have it as a centralized repositoryand then feed it out to the different,you know, the different departments,the different groups.</p>
<p>Right, right.</p>
<p>That's marketing or credit or,you know, what, what it may be,but that I think that's a big part of a.</p>
<p>That's really interesting because todaythat would be different groupsthat were doing thatand creating their own models from that.</p>
<p>So what they're saying is a mm.</p>
<p>Yeah.</p>
<p>A common model.</p>
<p>Right.</p>
<p>They, they could work offof a common model in this case.</p>
<p>Yeah exactly.</p>
<p>They're using siloed datasets right there.</p>
<p>A lot of replication,a lot of duplication between the groups.</p>
<p>It's mostly the same datawith a few extra fields,but you know, you'd be able tosynchronize it all within a graph and runall of your,you know, your workloads off of that.</p>
<p>That very, very, very cool stuff.</p>
<p>Well, hey, Greg,thanks for coming on the show today.</p>
<p>This has been wonderful.</p>
<p>You've opened my eyesand hopefully our listeners eyes as well.</p>
<p>Yeah. Thanks, John.</p>
<p>Appreciate the opportunity.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.orguntil next time, go outand do something wonderful.</p>

</details>
