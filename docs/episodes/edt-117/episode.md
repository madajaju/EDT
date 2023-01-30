---
layout: posts
title: "2022 Year In Review"
number: 117
permalink: episode-EDT117
has_children: false
parent: Episodes
nav_order: 117
tags:
    - 2022
    - Edge Computing
    - AI
    - Hybrid Workspace
    - Multi-Cloud
    - Cybersecurity
    - Data Management

date: 2023-01-05
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "In this episode Darren reviews 2022. He identifies the most talked about topics on the podcast in 2022 including Data Management, Artificial Intelligence, Cyber Security, Edge Computing, and Hybrid Workspaces. "
---

{% include soundcloud.html id="edt117" title="#117 2022 Year In Review" %}

{% include youtube.html id="lxRMINWH48g" %}

---

2022 was a banner year for embracing digital transformation, with an uptick in listeners and several external guests interviewed this year. Eight guests were executives or former executives of government agencies and private sector organizations, including finance, manufacturing, and healthcare. In over 60 episodes, six topics emerged as necessary to our listeners and in the industry as a whole, namely: Hybrid workspaces, cybersecurity, multi-hybrid cloud, edge computing, data management, and artificial intelligence.

## Hybrid Workspace

After fighting COVID restrictions and keeping companies running in 2020 and 2021, organizations looked at optimizing the “New Normal” operating mode. This new normal decreased the bureaucratic impediments of pre-COVID days. However, controls and processes around the rapid pace of change during the pandemic to control costs and improve reliability began to emerge. Companies struggled with remote work policies as we saw organizations quickly switch between work-at-home, hybrid work, and everyone-in-the-office approaches, leaving IT organizations with complex workspace solutions. They began to develop architectures that could handle rapid change and flexible working models to handle constantly changing policies. Are flexible hybrid workspaces here to stay? Only the next couple of years will tell.

## Multi-Hybrid Cloud

Another big trend in 2022 was the migration and the repatriation of workloads to and from the cloud as organizations scammer to provide hybrid workspaces for their employees. IT organizations began to look at the operational costs of running and migrating workloads to the cloud. Many organizations found the lift and shift methodology of moving to the cloud was much more costly than initially estimated due to a lack of requirements gathering, understanding of cloud operating models, and understanding primarily egress network costs in the cloud.

The rapid adoption of the cloud during the pandemic left many global cloud service providers flat-footed in providing the high-reliability organizations required, overwhelming several cloud service providers and causing significant outages across the global CSP ecosystem. Many organizations started looking at multi-hybrid cloud architectures to improve reliability, decrease cost, and increase the predictability of workloads running across multiple private and public clouds. Regional cloud service providers took advantage of the stumble of the global cloud service providers. They provided higher reliability and boutique services in the SaaS and PaaS cloud offerings, competing head-to-head with the larger CSPs.

## Edge Computing and Industry 4.0

Industry 4.0 continue to make inroads into manufacturing and has a worker shortage force the hands of many organizations to look to automation to continue their operations. Additionally, OT and IT data began converging as organizations looked to optimize their business and operational processes. Advancements in CPU and storage technology moved more computing to the edge, making edge devices more intelligent and capable of performing tasks previously done in the data center. Connectivity between edge devices, data centers, and public clouds improved with the adoption of private 5G technologies across the sector. However, adoption still needs to catch up to previous predictions due to concerns about OTC cybersecurity. This is especially true around critical infrastructure management.

## Data Management

Hybrid workspaces, cloud adoption, and edge computing have created a data management nightmare for most organizations as their data has been spread across these somewhat disconnected and distributed environments. to manage data across this ecosystem effectively, new architectures began to emerge, including data mesh, distributed data lakes, and data networks. Organizations began to focus on four key data elements: location, classification, governance, and protection.

Privacy laws and regulations are driving organizations to correctly classify their data to protect the privacy of employees, customers, and constituents. Additionally, an uptick in cyber and ransomware attacks has forced organizations to better protect and govern their data in use, at rest, and in transit. Effectively managing who has access, how long they have access, and how long data resides is a critical element of data governance that organizations are beginning to understand.

## Cyber Security

2022 was a big year for cyber security, and it showed in the podcast with over 18 episodes talking about cybersecurity. The year’s big buzzword was zero trust architecture, which has been turned into an overused marketing term. Instead of focusing on zero-trust architecture, Darren tends to concentrate on zero-trust principles that architectures can support.

Even with an increased emphasis on cybersecurity, there were primary data and infrastructure breaches this year, including critical infrastructure attacks. Many cyber professionals attribute this uptick to the war between Ukraine and Russia, as we saw the effectiveness of cyber warfare and physical warfare working in conjunction.

Another central concern in cybersecurity concerns the exposure of third-party software across the application ecosystem (log4J vulnerability). Many organizations need help finding direction due to the widely used log4J in their product offerings, back-office processing, and customer interfaces. A significant push for standardized software bill of materials to help identify vulnerabilities in software packages is being driven by several organizations and governments.

## Artificial Intelligence

Artificial intelligence continues to make improvements in techniques and operational processes. The big AI news of the year was ChatGBT, which has a wide range of uses, including writing blog posts, code, and papers and aiding IT help desk problems. Additionally, adopting AI silicon chips in the cloud service providers has expanded the availability of AI to the masses. This availability allows organizations to experiment more with AI algorithms in their day-to-day business operations. Organizations are starting to operationalize some of these experiments to run and automate processes previously performed by employees that are hard to find in a tight job market.

## Conclusion

2022 was a rough year for many tech companies as we saw a decrease in IT spending over the previous “pandemic years of spending.” This expected downturn surprised many high-tech companies with how quickly things changed. Despite the downturn, technology continued to grow, and the adoption of new technologies in edge, cloud, AI, data management, and cybersecurity continues to grow. 2023 should be an exciting year as we see the maturation of some of these technologies. Organizations will continue investigating ways to decrease costs through automation, optimizing workloads across multi-hybrid clouds, and protecting against increased cyber security threats.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>On today's episode,a look back at 2022.</p>
<p>Hey, today it's just me on the podcasttalking about the big trendsthat we saw in 2022,especially on our podcast.</p>
<p>And it was really kind of fun to go backand take a look at allthe different podcaststhat we did over this last yearand find out, yeah,where do we spend most of our time?</p>
<p>And I actually had a lot of fun doing thisbecause it brought backmemories of people I interviewed.</p>
<p>We did eight executive interviewsthis last year,great interviewswith former CEOs, CTOs, CEOs.</p>
<p>It was wonderful talking to themabout their experience in managingorganizations through technologytransformations and and all the above.</p>
<p>And in those interviewsand several other interviews that we did,we found six really major trendsthat we saw in 2022.</p>
<p>The trends are here you go.</p>
<p>Drum roll, please.</p>
<p>Hybrid workspace,cybersecurity, cloud technology,edge computing, data management,and of course, the one that everyone'sthinking about, artificial intelligence.</p>
<p>We're still waiting for the,you know, the the A.I.to take over the world.</p>
<p>Hasn't happened yet.</p>
<p>Don't think it will in 2023.</p>
<p>But we saw an emergenceof some really cool AI tools in 2022.</p>
<p>Let's dive right into each one of theseand let's start with probablythe most profound thing that we saw in</p>
<p>At the beginning of 2022,it was just getting out of COVID.</p>
<p>People were startingto go back to the office.</p>
<p>There were a lot of fits and startson that because of outbreaks and caution.</p>
<p>And but during COVID,it moved really fast.</p>
<p>They move really fast to get peopleworking from home at Starbucks,in cabins in the mountains. It was crazy.</p>
<p>People were workingfrom all over the placeand people startedgoing back into the office.</p>
<p>So we needed this real flexibilityon, Hey, where is my work?</p>
<p>Is my work just on my laptop?</p>
<p>Is it up in the cloud?</p>
<p>Is it in virtualdesktops, in VDI, in my data center or in</p>
<p>It was it was an interestingtime to see what was going on.</p>
<p>At the same time,we saw a lot of pressure,a lot of pressure from cost pressureson a decrease.</p>
<p>It cost because during COVID we kind oflet it costs run a little rampantbecause we wanted people working sothat we can continue the business growing.</p>
<p>This was great for I.T.</p>
<p>They were able to move very quicklyand got the funding that they needed.</p>
<p>But 2022 saw a pullbacka little bit on that.</p>
<p>We got to control costs.</p>
<p>We still need to move fast like we did,and we showed thatwe could during the pandemic,but we also neededto put some controls in place so we didn'tblow things out of proportion.</p>
<p>We didn't, you know, blow, blowthe budget on everything.</p>
<p>So it was an interesting time in 2020to have lots of podcastepisodes on the normal getting backto the new normal and what that meansand cultural change during the pandemicand how that affected everyone.</p>
<p>Go back and listen tothose are fascinatingdiscussions that we had with peoplefrom several different industriesinside Intel as well as outside of Intelin government and industry.</p>
<p>It was really fascinating.</p>
<p>Another major trend that we saw was cloudcomputing,another uptick in cloud computing,more people moving to the cloud.</p>
<p>And we also saw a big surgein regional clouds,smaller cloud service providersthat are more a little bit more boutiqueand can provide different services thanthe big global cloud service providers.</p>
<p>And we saw people moving to thembecause as from reliability,we had severalcloud outages in the major CSPs this year.</p>
<p>I think the massive growth got a littlein front of them, a little bit.</p>
<p>Also, the cloud serviceproviders of global ones were moving upthe stack into new SASand Paths platforms, whichthey maybe weren't architected completely.</p>
<p>Great. So we ran into some problems.</p>
<p>There were some outages that causedsome major outagesfor for large companies.</p>
<p>So we started seeing also these companieslook at not just putting all their eggsinto one cloud service provider,but into multiple cloud service providersand also on their own data centersin private cloud, we saw an interestinguptick in private cloud.</p>
<p>We're seeing a lot of rumors around</p>
<p>Broadcom buying VMware,which is the largestprivate cloud software vendor, VMware.</p>
<p>And we saw some competitorsmake some really strongfootholds in the private cloud space.</p>
<p>And competition is always good.</p>
<p>We like competition because it improvesthe technology and the offeringsand possibly will decrease in pricein the private cloud.</p>
<p>So the multi hybrid cloud really startedto take its form this last yearbecause of some faltering that we sawin the typical cloud service providers.</p>
<p>Another thing that we sawthat people were a little bit shocked of,we had three episodes on this alonewas controlling costs in the cloud.</p>
<p>A lot of people see this sticker shockwhen they firstget their first monthly cloud billand they're like, Oh my goodness,that was more than what I expected.</p>
<p>There are a lot ofthere are a lot of nuances to cloud costs,especially when it comes to egressand network.</p>
<p>Network costs.</p>
<p>Those thingstend to get people a little off guardbecause they're not quiteused to the changein operating that you do when you move toa cloud service providers.</p>
<p>A lot of peoplethat got stuck with really largecloud bills were the lift and shift.</p>
<p>I'm just going to liftwhat I have shift in the cloudand and work like normal day.</p>
<p>They typically ran into higher costsin what they expected.</p>
<p>So again, we see cloud strategyreally taking place in 2022, reallythat multi hybrid cloud as optionsthat people are looking for.</p>
<p>Now, another really big trend that we sawin 2022 was edge computing.</p>
<p>And as the edge has become more capable,we can do really crazy things on the edge.</p>
<p>Now because there's so much compute powerin these small form factorsand low wattage that we're startingto see more capabilities out to the edge,which means we have a lotof really interesting thingsgoing on out therelike t operational technology and i.t.</p>
<p>Information technology,convergence is starting to happenwhere i'm moving data acrossthose typically air gapped boundariesand thatin itself has caused a whole bunchof interesting problems in cybersecurity,which we'll get to later.</p>
<p>And we're certainly seeing it acrossmultiple verticals health care,manufacturing, energyproduction, transportation.</p>
<p>We're starting to seethe promises of industryfor auto really startingto takereally starting to come come about.</p>
<p>It's really starting to happen.</p>
<p>It's not moving as fast as we had hoped.</p>
<p>But I think that the emergence of private</p>
<p>And we saw some of the private 5Gofferings happen this year,which is great with Flex</p>
<p>Ran and things like that,a lot more flexible.</p>
<p>The barriers to entry into privatethan it is for 4Gand other technologies like that.</p>
<p>So edge computing</p>
<p>I think is going to be big againin 2023 and 2024.</p>
<p>Now that I have all my data scatteredin the cloud, in the data centerand out on the edge everywhere, guess whatthe next major thing that we saw thislast year, and I think it's an emerging,it's very nascent right now.</p>
<p>You're right, it's data management.</p>
<p>So data management took a major,major role this last yearand people are still trying to grasp it.</p>
<p>They're trying to get their head around itbecause my data is nowscattered everywhere.</p>
<p>And so how do I manage all that data?</p>
<p>How do I protect all that data,and then how do I classify that data?</p>
<p>So those are kind of thethe four key pillars of data managementthat we saw location,classification, governance and protection.</p>
<p>On the classificationside, we're seeing organizationsbeing I don't know what the right word isburdened with dataclassification because of regulation.</p>
<p>There's a lot of regulationsaround data privacy.</p>
<p>That means I have to do a better jobat classifying my data, making surethat who has access to my dataand the right dataat the right time also ties in to that,which is data governance, right?</p>
<p>Who has access for how long,and then how long do I need to keepkeep that dataunder this specific classification?</p>
<p>And then the fourth pillar,of course, is protection.</p>
<p>Really intereststaying interesting and growthin data protection specifically aroundconfidential computing.</p>
<p>So if you don't knowwhat confidential computing is,we had like four podcastson confidential computing.</p>
<p>Really fascinating stuff.</p>
<p>It's protecting our data in use.</p>
<p>So encrypting our data while we're usingour data in the CPU and protecting it fromfrom attacks, cyber attacks and threats,keeping my secrets secretand not out on disk and things like that.</p>
<p>Some really cool technologyaround encryptionencryption in silicon.</p>
<p>So that gives us the ability to encrypt inuse at rest and in transit.</p>
<p>So take a look at thosethose podcasts on confidential computing,great,great new technology is like SGX and tDCS,of course by Intel are availablethere that really open the doors to that.</p>
<p>And the great news is some of the cloudservice providers have adoptedthose technologies and other technologiesaround confidential computing.</p>
<p>So it's now availableto try out in the cloud.</p>
<p>And then also you can buy itin your own data centers, too.</p>
<p>So really interesting stuffaround this data management concept.</p>
<p>Now the next the next oneand probably in fact,it was the one that had the most episodesthis yearin 2022 was cybersecurity.</p>
<p>We had oh, 18 to 20 AI.</p>
<p>Some of them were fudged a little bitbecause we ended uptalking about cybersecurity,even though the topic may have beendata managementbecause cybersecurity plays everywhere.</p>
<p>But there were 18 toand wow, incredible episodes.</p>
<p>Everything.</p>
<p>Everything from ransomware attacksto thwarting ransomware attacks tonew ways of looking at micro segmentationfor protection and firewall management.</p>
<p>Really interesting things.</p>
<p>All of us circling around the big buzzword of the dayis zero trust architecture.</p>
<p>I know we've all heard it.</p>
<p>It's a big buzzword,it's a marketing term, butzero trust architectureprinciples are realand they're starting to be usedmore and more.</p>
<p>So this is somethingwe most definitely want to keep an eye on.</p>
<p>We saw a lot this year in Zero Trust.</p>
<p>Everyone says they have zero trust.</p>
<p>Look at the principles.</p>
<p>It's not just an architecture.</p>
<p>It's also has to do with processimprovement that you need to put in place.</p>
<p>It's a new way of thinking aboutsecurity in the cloud,in your data centerand also on the edge as well.</p>
<p>Also, we saw major breachesin ransomware attacks in security,critical infrastructure,security was attacked heavily this year.</p>
<p>The war between the Ukraineand Russia unleasheda bunch of cyber attacks during that waron each countryand also our allies to those countries.</p>
<p>So really interesting to see howcyber security and cyber warfareis going to playwith physical warfarein conjunction in the future.</p>
<p>Interestingly enough,a lot of surveys were done this last yearon cyber security.</p>
<p>Number one,threat number one attack, phishing.</p>
<p>It still remains the primary attack vectorbecause humans are involved.</p>
<p>I myself have fallen.</p>
<p>I've fallen to the phishing attacksthat are itdepartment does on its own employees.</p>
<p>So I've had to take the traininga couple of timesbecause I said, Oh,that looks really interesting.</p>
<p>I think we all kind of fall for that.</p>
<p>Sometimes.</p>
<p>Got to be more careful.</p>
<p>So we have to be cautious of thephishing attacks that are out there.</p>
<p>And then probably the most notarizedor our of those famousthings that happened this yearwhere software supply chain attacks,we had log forge with vulnerabilitiesthat were exposed.</p>
<p>Right.</p>
<p>That was huge becausealmost everyone uses log for Gand it caught a lot of i.t organizationsand software development organizationsa little off,off foot,maybe on their back foot a little bitbecause they weren'tsure if they had log, forge or not.</p>
<p>So we saw a big huge cry forwe need software bill of materialswhen you're delivering softwareor using software.</p>
<p>And there's been some standards groupsthat have come up like ECFs bomb group, the software bomb groupthat have come up with some standardsaroundsoftware bombs,how to use them, how to produce themso that we can get a better ideaof where we do have vulnerabilitiesin our workloads, in our infrastructure,both in the cloud, on the edgeand in the data center.</p>
<p>So cybersecurity will continueto be big in 2023.</p>
<p>Kind of check out my next episodewhere I go indepth on 2023 what I think the big itemswill be that yearand we'll get some feedbackfrom you guys, my listenerstoo, to see what you think about that.</p>
<p>Now the last oneand probably the coolest one, right?</p>
<p>Because it's bleeding edge stuff.</p>
<p>No, it's not Quantum computing.</p>
<p>There were some inroads in quantum,but artificial intelligence</p>
<p>AI that that was a big one.</p>
<p>This last year.</p>
<p>We did several episodes on the podcastabout it.</p>
<p>Probably the biggest news in</p>
<p>AI this last year and towardsthe end of the year was open A.I.releasing Chat GB t</p>
<p>Pig. You know, I played around with ita little bit.</p>
<p>It's pretty cool, I have to admit,and it possibilities of it.</p>
<p>My brain are just starting to wrap aroundwhat can I really do with this thing?</p>
<p>And it's pretty impressive.</p>
<p>So a generalized solution like thatthat I can usein several different things,even maybe even respondingto your comments on my podcast,my come from Chat GB t,</p>
<p>I don't know, we'll have to wait and see,but it can also help write code.</p>
<p>It can help.</p>
<p>There's a lot of things in chat Gee GB tthat we're seeing interesting things now.</p>
<p>Also this last yearwe saw a huge uptick in AI silicon chips.</p>
<p>So these are chips, neuromorphic computingchips that are availableto purchaseand or rent from the cloudservice providerswhere many of the cloud serviceproviders have adoptedneuromorphic computing as an offeringwhere it is so screaming fastwhen it comes to training and inferenceand things like that,much fastereven than the GPUs at a lower wattage.</p>
<p>Those are now available in the cloudor for purchasing your own data center.</p>
<p>And some of the wattage is even so smallthat we can push it down into edgedevices.</p>
<p>We're talking 2 to 5 watts type of thing.</p>
<p>So really cool stuff for the Edgeand A.I.chips that came out this this year.</p>
<p>Also, we're starting to see organizationsmove out of using</p>
<p>AI in a science experimentinto operationalizing AIin their day to dayworkflows that they're doing in theirin their dayto day business that they have.</p>
<p>So that's another major uptick.</p>
<p>And we're feelingthe growing pains around operationalizing</p>
<p>A.I..</p>
<p>We're starting to see the emergence of</p>
<p>AI ops, just like DevOps.</p>
<p>We've got air opsand we're seeing and we're bumping upagainst some of the rough edges.</p>
<p>It'll get polished off, Will will growover the next couple of yearsin the air space as it becomesmore readily available and operational.</p>
<p>I so I can, I can churn outa I applications more readily.</p>
<p>Now another thing that we sawand this is really interestingis we saw new types of cyber attacks.</p>
<p>Again, cyber cyber security comes up,but new types of cyber attacks on A.I.and and A.I.because A.I.has more moving parts than a typicalapplication,because I have my application,</p>
<p>I also have my datathat's driving the applicationand the data that I'm analyzingand the data them spitting out.</p>
<p>So lots of moving parts there.</p>
<p>And a lot of times with A.I.,</p>
<p>I'm dealing with the real world.</p>
<p>There's been some interesting</p>
<p>AI attacks that we've seenthat are attacking both the modelby changing parts of the modelor attacking the modelthrough the input coming inby sending different types of disruptioninto those input data streams.</p>
<p>We're starting to see the AI modelsmiss things and things.</p>
<p>So cyber attacks and I are increasing.</p>
<p>Research is being done on thisto how that's worked out as well.</p>
<p>So I hope your 2022 was a good year.</p>
<p>It was a transformational yearfor a lot of people.</p>
<p>I think we saw that in the tech marketsas tech kind of stumbled a little bitthis last yearas far as we had this big, hugetwo years of just spending like crazyto keep every everything going.</p>
<p>And we had what I would calla typical drawback after that.</p>
<p>And we had some stumbles,but we absolutely do.</p>
<p>The chip shortage being one of thosestumbles, whichwe continue to go through, the chipshortage, especially on edge devices.</p>
<p>The automotive industry, for example,is still has a majorchip shortagethat we're trying to get through still.</p>
<p>But 2023</p>
<p>I think will be an interesting year.</p>
<p>I think it's another transition year.</p>
<p>I'm hoping towards the end of the yearwe'll see this massivegrowth in these technologiesand maybe more.</p>
<p>But check out my next podcast episodewhere we'll go more indepth in what I see coming in 2023.</p>

</details>
