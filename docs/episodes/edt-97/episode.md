---
layout: posts
title: "The Benefits of Graph Databses"
number: 97
permalink: episode-EDT97
has_children: false
parent: Episodes
nav_order: 97
tags:
    - Data Management
    - GraphDB
    - KatanaGraph

date: 2022-07-28
guests:
    - Darren W Pulsipher
    - Madi Ahmadi

img: thumbnail.jpg
summary: "Darren Pulsipher, Chief Solutions Architect, Intel, Dr. Hadi Ahmadi, Director of Solutions Architecture, Katana Graph discuss the benefits of graph databases. "
---

{% include soundcloud.html id="edt97" title="#97 The Benefits of Graph Databses" %}

{% include youtube.html id="h06tRFkeK-E" %}

---

Hadi earned his Ph.D. in computer science in 2012 and researched cryptography and network information security. He worked in academia for a few years and then moved into industry, focused on different aspects of security solutions, including identity and access management. He began to learn more about graph modeling in 2015 and realized how graph data modeling could solve some of the exciting and complex problems in his field of study.

In graph databases, a graph does not mean charts or graphical interfaces but a way to structure data at the storage level so it can be retrieved and processed for some complex problems, especially if the data is interconnected. The graph offers many benefits and can complement existing data structures or solutions, such as relational database models or object storage.

The main difference between graph and relational databases is that while both are about relationships, relational databases take the relationships to the metadata and schema level, whereas graph databases are data-driven relationships. In other words, you are relating columns of tables in relational databases. To introduce a new relationship, you must change your schema. The graph provides a schema-less infrastructure where you can add more structure around your data but still be flexible so you can ingest any unstructured data.

Half of the world’s data has been created within the last few years, collected from many different sources, but less than two percent has been analyzed, most of which is structured data. The data is being collected, but the information is insufficient for processing. There must be a way to flexibly add a bit of structure that’s dynamic enough to change if you are uncertain but still benefit from the advanced optimized computation. The graph is an excellent way to do this.

If you are trying to work with correlated or interconnected data, as opposed to, for example, isolated data with critical values, a graph will offer benefits because of the relationships. Almost every industry can benefit because unstructured data usually comes from various sources and multiple natures.

An example would be cyber security solutions. There is data from logs and audit trains from the network environments, the cloud infrastructure, the endpoint hosts, etc. The data comes from different sources, such as directories or raw log files. It would be beneficial to correlate the data, for example, because typically, an identity or a user that could be part of a log from the identity management system could be the same user that triggers a process on a laptop such as downloading an attachment from an email. By analyzing those patterns, you can use this correlational linkage to get more insight. In other words, it doesn’t matter how or where the data comes from, but providing this linkage leads to learning about every record by looking at them in context.

One benefit is that there are no data transformation issues, so this increases speed. This also decreases the storage requirements.

Graphs and relational database structures, in general, are compatible. Here is a simplistic social network example: The node types in the graph look like tables. So you can have one node called “person” and then a table called “person.” You might have another node called “location” and connect the person to a specific location. You can have a table called location and connect them to foreign keys. Then you have this relationship of friends. A friend of a person in a graph model is just a self-loop. That would allow you to model that schema. In a relational database, you would need to create a new table called friends and then connect it. So even at a schema level, you are adding redundancy and some structure on top of it. And if you need to add a new concept of friendship or relationship, you must create new tables, building redundancy and complexity.

Other benefits of graphs over relational databases are graphs on elements, graph AI, and the idea of now model data to find patterns based on how the data is connected. You can decrease the data set that you are searching or analyzing because of the relationships. It’s using the power of data to empower the data even further. The algorithms in a graph database are very different than in relational databases and better optimized to get to large data sets faster.

One of the drawbacks of a graph database is that it is hard to scale. In a relational database, it’s easy to cut a table and put it on two servers, for example. Earlier graph databases were designed to be a single whole solution, so if you wanted to scale up, you would need to add more memory and CPU.

Now, If you want to work with petabytes of data in graphs, you want to scale vertically as much as possible with technology such as Intel VMs, but you also want to scale horizontally. New technologies, such as Katana’s graph platform, help solve this scaling problem with distributed computing. You can split or divide the problem into pieces and have each work up a small part of the graph for a final solution. Katana has proven that you could use 256 machines or beyond to process data, so you can quickly get tens of terabytes of data in memory.

A graph database requires a similar ecosystem as a relational database. Graph is a bit more dynamic and flexible. If you want to move to a graph analytics platform, which is beyond just the operational databases, you could take advantage of other things such as data warehousing and data lake capabilities. Storage and compute would be separate, meaning that graph processing technologies that do everything in memory don’t need to rely on storage attached to the services so that you can have a different storage service.

Katana uses object storage, and then when they want to compute, they opportunistically load whatever they want from the graph to the distributed memory of all the machines. The data returns immutable to the storage, so if you, say, destroy the whole cluster, you don’t lose anything. All the data is already there and warehoused. Relational databases are a more mature field, but graph databases are becoming more well supported in the ecosystem.

Based on Hadi’s eight years in the field talking to stakeholders and customers, all immediately see the benefit of graph databases. The limitations might be that they can’t keep up with scalability or expense. The work of Katana and other graph technology companies is to make graphs more of a commodity tool that customers can use for various tasks and less of a luxury in the database. For example, Katana is providing customers with graph-based identity and massive data management solutions.

Good use cases of graphs would be the early invention of graph solutions specific to some companies such as LinkedIn and Facebook that have their social graphs. Now, a natural fit is in e-commerce for recommendation engines. Finding connections between customers, accounts, purchases, and other behaviors will enable better recommendations immediately to the shoppers in a way that can’t be done with relational database queries.

To find out more about Katana or how to contact Hadi, go to embracingdigital.org.




<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, thisis Darren Pulsipher chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople, process and technology.</p>
<p>On today's episode,the benefits of Graph Databaseswith Hadi Amadi,</p>
<p>Director of Product Solutionsat Katana Graph.</p>
<p>Hadi, welcome to the show.</p>
<p>Thank you so much for inviting meand giving me this opportunityto be able to talk about thisinteresting topic.</p>
<p>Well, it's really interestingbecause when I first talked to you guysabout graph databases, I was like, yeah,</p>
<p>I know a little bit about graph databases.</p>
<p>Then you blew my head offbecause you taught me a whole lot moreand what you could do.</p>
<p>But before we get into that, Haddie,tell us a little tellmy audience a little bit about yourself.</p>
<p>Sure. Thanks.</p>
<p>Absolutely.</p>
<p>So let me actually start from a littleof my background and where I came from.</p>
<p>I got my peers in computerscience in 2012, did a lot of researchin cryptography, networkinformation securityand were in academiafor in a couple of yearsafter then moved the industryand focused on different aspectsof security solutions from identityand access management to other things.</p>
<p>But I think it was since 2015or so that I started to learnmore about graphdata modeling, graph databases,graph structure.</p>
<p>And it was interesting enough for meto actually start thinking how we couldmodel some of these complex problemsin my field of studyand see whether we can benefitfrom a graph latermodelingand how we can possible better solve them.</p>
<p>And that was interesting enoughfor me to be ableto actually do this kind of things.</p>
<p>And the results were very promising.</p>
<p>You know, I had a lot of productsworked on and that actually made medecide, you know, I want to dedicatemore of my time to grasp.</p>
<p>And that's why I jumped on a graph.</p>
<p>And I'm now there as a directorof solution architecture and also workon the product, very happy to do soand trying to actually befinding those interesting problemsthat are complex enoughthat the existing alternativesolutions cannot tackle.</p>
<p>And hence the graph.</p>
<p>So this is really interestingbecause you guys are trying toin some respects displacea technology that's been around</p>
<p>Right.</p>
<p>Those have been around since the dawn of.</p>
<p>All. Of your data structuresand things like that.</p>
<p>Right. Exactly.</p>
<p>Well, let me first,</p>
<p>I know that most of you know peoplethat are probably listeningto our conversation already know aboutthis concept of the graph graph structure.</p>
<p>But to respect everybodywho might be interested in the podcast,let me tell you first, what do we meanwhen we talk graph reference?</p>
<p>Okay, that sounds great.</p>
<p>First of all, we're not really talkingabout graphs as charts orgraphical interfaces or things like that.</p>
<p>Not even put that matter either.</p>
<p>A graphin a way of visually visualizing data,using those images that could be a sidebenefit or some product.</p>
<p>But you're really talking about a wayto structure your data in a storage levelso that you can retrieveand process this datafor some of the complex problems,especially if this data is interconnected.</p>
<p>On that note,</p>
<p>I should say that it's not.</p>
<p>That graph is going to do the magic andsolve all the problems and we're not here.</p>
<p>At least that's my beliefthat to to replace or completethe existing data structures or solutionsis probably complementing thosefor some of the problemthat they can tackle.</p>
<p>Still, if you look at thesome of the problems, some of the dataand hopefully we can talk about that,the nature of the data will be in a waythat you could still benefit from a keyvalue datastore relational database modelor or object storage for that matter.</p>
<p>So it doesn't mean that graphsare there to solve all the problems.</p>
<p>We really need to look at data and seewhether we can benefit from graphs.</p>
<p>Okay.</p>
<p>So that brings up an interesting pointbecause graph graph databasesare great for linkagesand relationships, right?</p>
<p>Yeah.</p>
<p>But isn't that a relational database?</p>
<p>I mean, the relational databaseis all about relationships.</p>
<p>Has it has it in its own right?</p>
<p>It has it in its term.</p>
<p>So what's the keydifferentiator differential here?</p>
<p>I know relational databases.</p>
<p>I've got a table, I've got you know, I canrelate from one table to another table.</p>
<p>So what's the key differentiator?</p>
<p>Differentiator here? Fair enough.</p>
<p>Now that's very valid.</p>
<p>Very good question.</p>
<p>I'm glad that you asked that.</p>
<p>Yeah, you're right.</p>
<p>And relational databases are all alsoabout respecting relationships.</p>
<p>The main differenceis that in relational databases,we actually took this relationship,the metadata level and the schema levelbrowsing graph database is going to bedata driven relationships.</p>
<p>So relationships are going to be partof the dataversus part of the relational side.</p>
<p>So in other words,in relational databases, we are lettingtables, columns off the tables basically.</p>
<p>And if you want to introducea new relationship, basically,you need to change a schema in a way.</p>
<p>Whereas Graph providesthis code on clothes schemaless infrastructurefor you to be able to actually adda little bit of more structurearound your data, but still be flexibleso you can ingest any sort of unstructureddata as well.</p>
<p>Okay.</p>
<p>So it's great at unstructured data comingin and seamless, which means great forcrave for data.</p>
<p>I don't quite know what the schema is yet.</p>
<p>Right.</p>
<p>So I can see</p>
<p>I can see those those benefits of.</p>
<p>But isn'teverything already stored in a database.</p>
<p>It is.</p>
<p>No, absolutely.</p>
<p>It's just a fact that, again,the main risk thatyou're not facing is big computation.</p>
<p>So we have had a conversationaround big datafor a long while and that thanksto a lot of technology,basically that has been has been builtand providedwithin the last few years,we have been able to collect a lot of datafrom different sources.</p>
<p>So more than half of the world'sdata has been createdwithin the last couple of years,but only. At.</p>
<p>Less than 2% of it has been analyzed,which means that, again,thanks to those datalike sort of experiences,you can slowly collect data, however,and then it gets to processing.</p>
<p>That data is not enough.</p>
<p>It can doso you want to have a way to flexiblyadd a little bit of a structureto this data, not really much.</p>
<p>And it's dynamic enough that you caneasily change it if you're uncertain.</p>
<p>What still benefitfrom optimized advanced computation on itand graph is an excellent way to do so.</p>
<p>So with only 2%of the data being analyzed,most of that data analyzes structured datatoday.</p>
<p>Right? Yeah.</p>
<p>But what percentage is thatunstructured datathat that's sitting out therehave all this new data being generated?</p>
<p>Yeah, it's a very valid questionand a very good question.</p>
<p>I don't really know the exact,you know, basically fraction of that data,but assume that all of that unstructureddata now is is being tackledusing low level APIs of the datalike experience, which works excellent.</p>
<p>But the problem isit lacks the optimizationbecause if you deal with on a structuredlow level data, you can't really doany sort of independent.</p>
<p>Okay.</p>
<p>So how does how does graph databasehelp with that unstructured data orgive it give us some examples.</p>
<p>Yeah, no, fair enough.</p>
<p>So as I said before, again,the let me let me start with this again.</p>
<p>I would love to just make sure that I stayfair with this concept that, hey,if you do have a data that or a problemdeals with data that's that's isolated.</p>
<p>I mean, you have a bunch of a key valuesdocuments you want to store and retrieve.</p>
<p>You don't really need graphif you of your use.</p>
<p>This is all about storing datalots of storage.</p>
<p>You could usean object solution with that.</p>
<p>But if you you're actually trying to workwith correlated data, interconnecteddata, that's where you would benefitfrom graph because of the relationships.</p>
<p>And this comes almost in any industrybecause thethe unstructured datausually comes from a variety of sourcesand variety of structureor I should say natures.</p>
<p>And when I can give an examplethat I may be more versatileas let's say we want to go and docyber security solutions,looking at the logs and audit trailsthat come from the networkenvironments, the cloud infrastructure,the end point hostsand all that, and these are all comingfrom different sources.</p>
<p>The data is different.</p>
<p>Some of them are coming from directories,some from raw log files and so onand so forth.</p>
<p>And we would like to have a way to be ableto correlate the data because typicallyan identity or a userthat could be part of a logthat comes from our identitymanagement system could be the same userthat triggers a process in a laptopor maybe downloadsan attachment from an emailand then out of that.</p>
<p>So if you can actually usethe correlational linkage betweenthis data, you can get more insightfrom it by just analyzing those patterns.</p>
<p>So this is what I'm trying to say.</p>
<p>It doesn't matterhow or where your data is coming from,but providing that sort of linkagebetween these data points,you will be able to learn more about eachand every recordby looking at the context of them.</p>
<p>So I like the context part of part of thisbecause that's where I can really startlooking at real data analytics,where did my data come from?</p>
<p>What else is it related to?</p>
<p>I love the example of an email because</p>
<p>I can't imaginebuilding a relational databasethat shows an email.</p>
<p>Well, I mean, that would be really hardbecause, oh,</p>
<p>I've got attachments to it,</p>
<p>I've got responses, I've got for my data.</p>
<p>Tables would be massiveand there would be so many of them to showall the different relationships.</p>
<p>Yeah.</p>
<p>So, so in graph databases</p>
<p>I can form these relationshipsdynamically as,as my data structures are dynamic.</p>
<p>Is that.</p>
<p>Is that right. Absolutely.</p>
<p>Make itmaybe even to make it more sort of boldas you know,if you have a problem anywhereand you think you can just go to awhiteboard and just model your data with,you know,just some hyper friendly sort of notesthat are connected with edges,then it seems like it can benefitfrom a graph that you don't wantto downgrade that model.</p>
<p>You have in mind to tackle,but just, you know, make it atwo dimensional datastructures, tables and rules and columns.</p>
<p>You would actually be able to storeit as is</p>
<p>I emphasizeas is the graph data structure.</p>
<p>So one it.</p>
<p>Yeah no I like that.</p>
<p>I like that a lotso I can see one of the benefits.</p>
<p>One is</p>
<p>I don't have data transformation issues,so that's going to speed up thingsdramatically.</p>
<p>Right, because I'm not trying to representcomplex relationshipsin several tables,so I'm decreasing also thestorage requirements, right?</p>
<p>That is correct.</p>
<p>That is correct.</p>
<p>I mean, it would be one of those,you know,double resourcethat depending on how you model data,but you're rightthat, you know, let let me just maybetalk about this social networkbecause that's very easy.</p>
<p>Oh, social network.</p>
<p>That's a great. One. Yeah.</p>
<p>So to me,if we want to make it very simplistic,the graphs and relational databasesor relational database function in generalare very compatible.</p>
<p>The no types look like the tables.</p>
<p>So I have a node, cyber sibekothat's a person.</p>
<p>And then I could have a table calledpersonal relational.</p>
<p>That is great.</p>
<p>I might have another.</p>
<p>No talk call location and connectmy person to specific location.</p>
<p>Of course I can have a table call locationand connect them to foreign keys.</p>
<p>Awesome.</p>
<p>Now I have thisrelationship of friendship.</p>
<p>A friend person is a friend of personin my graph model is just so loopkind of thing, right?</p>
<p>That would allow me to just modelthat schema if I want to.</p>
<p>In in a relational database,</p>
<p>I need to createthis new table for friendsand then I need to connect it.</p>
<p>So even at the schema level, I'madding some redundancy and some structureover the top of it.</p>
<p>And if I need to add a new conceptof friendship or relationship,</p>
<p>I need to create new tables. Yeah.</p>
<p>So that is the redundancy of complexity.</p>
<p>So hey, you're right.</p>
<p>And it does add a lot of complexityon traversing tables to get informationon maintenance, management,building indices.</p>
<p>All that stuff now becomes more complexthe more relationship of tablesthat I have.</p>
<p>So I really kind of</p>
<p>I like this a lot in that what,what other benefits do I get from a graphdatabase over relational?</p>
<p>Yeah.</p>
<p>The one other thing about graph databasesis this whole area of graph on elementsin the graph.</p>
<p>I, I'm not going to go into detailsof those things.</p>
<p>And basicallythe idea of being able to now modelyour data and be able to find patternson your data based on that.</p>
<p>The way that data is connected is great.</p>
<p>An example could be PageRankalgorithm, which is put forth by Googleto be able to actually nowsort the the pages that have been searchedover time.</p>
<p>You know, what is the most linkagesto the page and all that?</p>
<p>So once you have a data model as a graph,then you can simply go on a pagelike algorithm across a graphand find a rank for eachand every note based onhow they are connected to the others.</p>
<p>The other example,to be finding the components.</p>
<p>So you have this this big data, you don'tyou have a problem to solve.</p>
<p>You don't know how to tackle thisin a relational database,but if your data was in the graph,the one thing that you could dopossibly can make sense depending onyour problem would be to divideand conquer, to use a connected componentsort of algorithmwith some sort of communitydetection algorithm on the graphto be able to try to get off the subgraphs, which are our focus.</p>
<p>And then you could goand look at a specific subgroupof certain sizeand be able to solve your problem.</p>
<p>That is specific.</p>
<p>Some graph that's normal.</p>
<p>So you're how help me understandwhat I think I heard was</p>
<p>I can decrease the data setthat I am searching through or analyzingbecause of the relationships I can I canprune things down to a more substantialset instead of searching everything.</p>
<p>Exactly. Exactly. It's like that's.</p>
<p>Using the the power of datato even in our data in orderthis is connected performanceand things like that would be even lookedat asways of doing feature engineeringfor our email layerwhere you can take advantage of it.</p>
<p>And this informationmay not be explicitly givenby a relational or any sort of data,but it can be found using some sort ofgraph mining data mining your data.</p>
<p>So, so the algorithms in a graph databaseare very different than the algorithmsthat we've seen in relational databasesthat so and better optimize you think,oh I can get,</p>
<p>I can get to large sets of data faster.</p>
<p>Absolutely.</p>
<p>I mean better optimized for those.</p>
<p>Again, for the purpose of data.</p>
<p>I mean, if you're talking aboutgraph algorithm, which is about,you know, that first search,you need a graph in the structureif you want to use a relational dataor anything else, that would be to.</p>
<p>Let's say that I just hadone big table and I'm just doing rawsearches for I need</p>
<p>I need everyone with this zip code.</p>
<p>A relational databasewould probably be the way to go.</p>
<p>Absolutely.</p>
<p>I mean, if those are the queriesthat you want to get, that would be.</p>
<p>But if you're in the realm of,let's say, manage massive data managementfor some sort of entity,basically entity resolution,those kind of things that actually wouldbenefit from a modeling your data in a waythat you can actually find patternsand patterns between different entities.</p>
<p>Then relational databasecan help you in a scalable right.</p>
<p>And again, I'm saying.</p>
<p>In a scalable.</p>
<p>Way, you can definitely model anythingthat today we have in a graph databasewith a relational data structureand vice versa.</p>
<p>It's all about when data skills,one of them can't keep up.</p>
<p>Gotcha.</p>
<p>So let's talk about scale a little bit.</p>
<p>When you say scale,</p>
<p>I mean, how big are we talking?</p>
<p>I mean, in relational databases,we talk about number of rows.</p>
<p>Yeah. Right.</p>
<p>That would be comparableto number of nodes in ain a graph database, correct.</p>
<p>Pretty much, yes.</p>
<p>You're right.</p>
<p>The number of nodesfor that give you actually a numberof those timesthe tables in a relational database.</p>
<p>Plus you do havethe relationships here as wellthat could add to the complexity of this.</p>
<p>So how big can these graphs get.</p>
<p>That that's also a very great questionbecause again, the way that graphs workor this graph it is the structuremakes it a bit hard to scale and charta relational database.</p>
<p>It's easy to cut a tableand put it on two servers.</p>
<p>Right.</p>
<p>And that would allow youto be able to more.</p>
<p>I would say intuitively, partitionyour data and go with your scalabilitybeyond a specific basicallyone serverso you can go with much, much bigger data.</p>
<p>And that that's that that has beenone of the drawbacks of the graph dataor earlier graph database technologiesthat they were allactually designedor built to be a single whole solution.</p>
<p>So you have a bigger graphif you want to have a bigger,you know, make iteven bigger, you need to scaleup, add more memory or more CPU too.</p>
<p>Yeah, we yeah, we like itwhen they have more CPU'sand maybe some persistent memoryfrom Intel.</p>
<p>There's that would be great.</p>
<p>It's just awesome and that's great.</p>
<p>But I can't scale to thatto buy it right. Now.</p>
<p>If you do have that,you know you get definitely it stillyou want to vertically scaleas much as possiblethanks to the technologieslike Intel VMs and all that.</p>
<p>But then once you get to basicallya place that you want to actually workwith petabytes of data,then you would want to scale horizontallyand the new technologieson the on the graphic to platformslike ourselvesare actually all about distributedcomputing.</p>
<p>And distributedcomputing is basically allowing us to nowshort the graph, basically just look out,you know,in terms of just using a scissorand cutting the grass and multiple piecesand just make sure those edgesof those linkages are kept a preserve.</p>
<p>And then you can split or the probleminto multiple small piecesand have each graphwork up a small part of the graphand give you the final solution.</p>
<p>Okay.</p>
<p>So there are so this isthis is a new things very distributeddistributed graph databasesbecause</p>
<p>I like how you mentioned thatthat has been a limitation in the past.</p>
<p>Right.</p>
<p>A graph database can only be as big asthe amount of memory you have on your box.</p>
<p>Basically, which makes some screamingfast, write very things in memory.</p>
<p>But now you're now you're sayingthey do have distributed techniques.</p>
<p>Now I can.</p>
<p>So how bigcan I make a distributed graph now?</p>
<p>Is there any limitation.</p>
<p>From our technology or what</p>
<p>I can say we have proven like, you know,you could use 256 machines or beyondto be able to actually process your data.</p>
<p>So if you multiply by those, it'sarbitrary.</p>
<p>You can easily getto tens of terabytes of data in memory.</p>
<p>Yeah, yeah.</p>
<p>Tens of petabytes. Yeah.</p>
<p>That's a lot of data.</p>
<p>That's right.</p>
<p>And all in one go all connect.</p>
<p>That's in that's incredible. Yeah.</p>
<p>That's absolutelybecause that, that actually matchessome of the existing requirementsthat we have from graphthat are dealing with, you know, dailycollecting logs, data and being ableto analyze it and bring it backto the downstream systems.</p>
<p>The usually atomized data,especially for the companiesthat provide SAS solutionsto their customersand they want to have acrosscustomer analyticsthat's really very popular.</p>
<p>So the users.</p>
<p>RDR, our</p>
<p>DB CMS has been around a long time,a lot of tools around backupand restore onmanaging indexesand in purging parts,you know, cleaning of database.</p>
<p>All this has been around for a long time.</p>
<p>What about for graph databases?</p>
<p>Do I have the same issuesor is it differentbecause it's stored differentlybecause you're storing the modelinstead of a representation of the model?</p>
<p>I mean, what's built up around it?</p>
<p>And do I need an ecosystem like I've hadto build with relational databases?</p>
<p>Yeah, pretty much similar.</p>
<p>Maybe graph is a little bit more dynamicand might be a little more flexibleto tackle, but I would say that we do ifif you are providing graph databasemanagement system,you would need to go throughthe same process very much like data is.</p>
<p>And thankfullythose have already been resolvednow. Okay.</p>
<p>If you want to move tographs data analytics platform,which is beyondjust the operational databases,you could take advantage of other thingslike data warehousing capabilities, data,native communities.</p>
<p>You know, one of themwould be just a storage of separatethe separation of the storage and compute,meaning that especiallyfor those graph processing technologiesthat are doing everything in memorydon't really need to rely on storagethat is attached to the services.</p>
<p>So you can have a totally differentstorage service.</p>
<p>What we use, for example, is objectstorage and then we want to compute.</p>
<p>We opportunistically load whatever we wantfrom the graph to the memory,distributed memory of all those machines.</p>
<p>There's a computation, bring the databack in immutable way of the storage.</p>
<p>So in that case,even if you destroy the whole clusterand that's something that you would seedata scientist,the analytics use cases are a lot.</p>
<p>You don't lose anything.</p>
<p>All your data is already therewarehouse and you just need to actuallybe able to run that you will.</p>
<p>Got to know that.</p>
<p>So what you're telling meis all the things that I can find inrelational databases,analytics packages, backup and restoremaintenance, all that stuff existsfor graph databases too.</p>
<p>Is that okay?</p>
<p>So I'm not I'm not bleeding bleeding edgeout herewhere I'm all alone and I have no support.</p>
<p>There's lots ofthere's open source graph databasesand there's commercial ones.</p>
<p>There's,there's more than just one out there.</p>
<p>But again, we could talk about this thingsand these are all valid concernsbecause as you said,the relational database with others,these are mature fields and groundis a bit newer.</p>
<p>But one thing is absolutelysome of this needs to be tackled.</p>
<p>One of the other limitationsthat I should saythat people mentioned about graph dataand these tools is about the language,lack of standard language to fully graspand is on the way to go.</p>
<p>Now, open software is a de factostandard way of talking to graph.</p>
<p>It's it'svery slow like a SQL, I would say,but definitely more intuitive for graphs.</p>
<p>And thenwe are on the horizon to see a Google,which is a graphwhich is going to be a standard onewhich is, you know,pretty much basically deciphered.</p>
<p>So, so soon enough we're going to seereally standard languageto be able to talk the graphs.</p>
<p>Oh, that would be great,because then I have that portabilitythat I worry about, right,as a practitioner.</p>
<p>So SQL statement, has anyone writtenand asked you all the graph.</p>
<p>Oh interesting.</p>
<p>Non no.</p>
<p>Of what you know there isgraphs fill in a graphlike school statements or this is.</p>
<p>Well some of them won't make sense.</p>
<p>Yeah exactly.</p>
<p>Like join.</p>
<p>I'm going to join. What.</p>
<p>No there aren't tables.</p>
<p>There aren't tables to join.</p>
<p>Yeah it should be an easy task.</p>
<p>But if you do have the graph, I would sayif you do have the graph capabilities,you want benefits from them,you don't want to downgrade your income.</p>
<p>You don't want to downgrade.</p>
<p>Yeah, yeah, yeah.</p>
<p>But on the service layer, I've seen a lot.</p>
<p>I mean, now there's this graph tool,basically frameworkand we allow us to connect to any sortof relational document or graphingand basically that might be ableto provide an APIand and graph actually is doing a good joband it's based on a graph databack can like can work for anything.</p>
<p>So that would be probably a very nice theyhave to do this interfaces some of this.</p>
<p>Oh this has been insightful I like becausethis is a big conundrumfor a lot of people,especially as our data is exploding,especially unstructured or semi-structureddata.</p>
<p>Sounds like graphdatabases is a good way to go,but like you said, not for everything.</p>
<p>So do you.</p>
<p>Do you ever see anyone maybe goingto a graph database first and then saying,hey, I understand the structurewell enough, I'm going to drop it intoa relational database for indexspeed and things like thator how do you see it?</p>
<p>I think I think everybody that well,this is based on my view and little orno sign of the new,</p>
<p>I'll get 100% certainty in my view.</p>
<p>But based on my I would say about a yearbeing experienced in the field and talkingto some stakeholders and customers,people thatuse graphs to immediatelysee the benefit they don't want to draw.</p>
<p>The main reason that they may dropit is because some of the technologiescannot keep up in terms of scalabilityand or maybe they're just expensive.</p>
<p>So the work that some of the other graphtechnology out there is doing istry to make graphsmore like very commodity toolthat people can use for different thingsrather than luxuries in that database.</p>
<p>Gotcha. Yeah.</p>
<p>Like I'm only targeting it to this problembecause it's perfect for graph.</p>
<p>The cost benefits are huge.</p>
<p>So I see where you're going.</p>
<p>You want to make it more commonly used.</p>
<p>That makes. Sense. Yeah.</p>
<p>And I'm, I'm working with companies now.</p>
<p>We're actually providinggraph based solutions.</p>
<p>Everything is graphsand graphics solutions for identity,for massive data management and all that.</p>
<p>And they see the benefits immediatelythat they can easily downgradeback to the version of news.</p>
<p>And that again, I'm not saying thatthese are replacing each otheris that maybe it's still relational data.</p>
<p>Is it going to be used for some purposes,but not for the problemsthat necessarilydeal with interconnectivity.</p>
<p>Now that that makes sense?</p>
<p>I mean, that makes some sense.</p>
<p>So thisthis will cover almost any vertical I can.</p>
<p>I can see applications, especially for Iottypes of devices. Right.</p>
<p>So we can see this span of verticals.</p>
<p>Well, what would you say are the hottestthe hottest use case,the hottest verticals right nowthat you guys are seeingthe most traction? Yeah, definitely.</p>
<p>I mean, graph in generalstarted from those,</p>
<p>I would say early invention of graphsolutions specific to some products,you know, companieslike LinkedIn and Facebook,they have their own social graphsand all thatmore textbook.</p>
<p>Now, you know, a very good examplecould be in e-commerce, righton the problem of recommendationengine, basically.</p>
<p>I'll recommend. It. Yeah.</p>
<p>I mean, this is huge becausejust to look at it again,</p>
<p>I try to just imagine my mind.</p>
<p>I'm going to work around and tryto actually now abstract this problem.</p>
<p>What I'm talking about,</p>
<p>I'm talking about customers accounts,purchases of products and servicesand other things, right?</p>
<p>And as soon as I actually can findthis connectionbetween themand how customers do some actions,maybe they review a product, a purchase,and they click on a link.</p>
<p>And if I can have this basically graphmade based on thisbehaviorof the customers that I can easily nowlook at a specific customerthat now has signed into mye-commerce website and lookwhat attributes they have, what kind of,you know, purchases they've done before,what other customers are similar to you.</p>
<p>But just finding this patternsof traversing to the graphand what customer to the otherson all the similarity measuresand then be able to providethe recommendationright away to that customer.</p>
<p>So this is something that, again,you couldn't do it with any singledata store graph.</p>
<p>That's so it's great.</p>
<p>It's great for like real timerelationships reversing.</p>
<p>I love that. Right.</p>
<p>Because otherwise can you imaginethe the relational database querieson one on that you'd be hittingall the tables in in your e-commerce.</p>
<p>Yeah.</p>
<p>And the joins would be extraordinaryand it wouldn't be in secondsit would be in minutesif. You were like. Exactly.</p>
<p>Especially in this case,you already have a starting point.</p>
<p>This means that look at youhave your your your sourceand possibly going to,you know, maybe you're lookinghow to work from that sourceand find some destination packet there.</p>
<p>Yeah.</p>
<p>In relation to this, this problemis not really meant to be solved that wayand graph is just walking with the graph.</p>
<p>Simple.</p>
<p>That's walking.</p>
<p>Yeah.</p>
<p>Walk in the graphwhich which I really like a lot.</p>
<p>Well a howdy this has been great.</p>
<p>Thank you for coming on the show.</p>
<p>I, I learn a lot every time I talk to you.</p>
<p>I learn something new, which I appreciateand and thank you for coming on the showalso.</p>
<p>Well, thank you so much for againinviting me to this podcast,having this conversation.</p>
<p>It was lovely, having a chat withyou also learned a lot fromfrom your comments and your feedback.</p>
<p>Any time, you know,</p>
<p>I'll I'll be happy to help anybodythat is interested about this counciland also learn more aboutgreat.</p>
<p>If you guys want to find out more onhow to contact Hadi,take a look at our blogat embracingdigital.organd we'll have we'll have an email addressup there.</p>
<p>Is that okay, Hadi? My pleasure.</p>
<p>All right.</p>
<p>There you go.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.org nexttime, Go out and do something wonderful.</p>

</details>
