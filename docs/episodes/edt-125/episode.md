---
layout: posts
title: "Ways to Reduce Cybersecurity Risk"
number: 125
permalink: episode-EDT125
has_children: false
parent: Episodes
nav_order: 125
tags:
    - Cybersecurity
    - SupplyChain
    - RiskManagement
    - Encryption
    - Decryption
    - SBOM
    - compute
    - policy

date: 2023-02-16
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "In this episode, Darren discusses leveraging the six cybersecurity domains to develop a Zero Trust Architecture to protect your resources, data, and critical infrastructure."
---

{% include soundcloud.html id="edt125" title="#125 Ways to Reduce Cybersecurity Risk" %}

{% include youtube.html id="1vTOR_h8r3o" %}

---

## Cyber Threats

The types of cyber threats are constantly changing as bad actors continue to invest time and money into infiltration technologies. Keeping up with these changes is extremely difficult for organizations. this is prevalent in the recent cybersecurity numbers, which show little to no change in organizations’ ability to detect and remediate cyber threats to their infrastructure. The promise of zero-trust architecture solutions to protect against these ever-changing attacks seems hard to realize.

## Cyber Security Six Domains

Before organizations can deploy a zero-trust architectural solution, they must understand the critical elements of deploying cybersecurity systems. These systems can be grouped into six cybersecurity domains. Understanding these domains help organizations build a resilient cybersecurity system.

![img.png](img.png)

* Threat detection prevention intelligence analytics and management – This has been the primary focus of most cybersecurity products over the last ten years. Detecting cyber intrusion and remediating threats is the primary focus of most cyber security organizations.
* Identity and access management - identity and access management are moving beyond users' traditional access controls to access control of users’ devices and applications to other assets in the organization, including devices networks and, most importantly, data.
* Data and application security - this requires new thoughts of data and application encryption Techniques that encrypt data at rest, in transit, and in use. Silicon encryption is now available In client devices, server devices, and the cloud. Encryption of data and applications in use requires hardware-enabled confidential computing.
* Supply chain security - securing the supply chain requires more than generating a bill of materials for hardware devices. Supply chains include hardware, firmware, software, and solutions.
* Network security - New types of security topologies and control plane technologies are improving network security which can provide dynamic isolation of resources and infected assets in operational infrastructure.
* Host and system security - Security is only as good as its weakest link, ensuring hosts and systems security, including boot guard technologies, are leveraged to guarantee devices have not been infiltrated with zero-day attacks or malware injected into the BIOS or firmware of the device.

## Building Zero Trust Solutions

After organizations understand the six domains and the tools available in them, they should apply the guiding principles of zero trust architectures to those domains to build a cyber-resilient zero trust system. 

 ![img_1.png](img_1.png)

These principles include:

* Default deny - access to assets and resources is only granted through explicit requests following regulatory policies and defined processes.
* Contextual authentication - provides mechanisms to authenticate users, devices, and applications based on temporal, policy, situational, and environmental contexts.
* Granular control - provides direct access to groups of assets, individual assets, and even subsets of assets, for example, files in a file system directory or rows in a SQL database.
* Dynamic and real-time - provide dynamic and real-time threat analysis and cyber security policy enforcement based on environmental and situational contexts.
* Continuous monitoring - don't rely on event-driven architectures to provide complete and accurate status of assets and enterprise resources.
* Continuous trust validation - validate that a person is authenticated and has access to assets and resources in the context of the current operating environment and the temporal space allocated for access.

When these principles are applied to the security domains, organizations can build a policy-driven zero-trust architecture that provides a responsive, resilient cybersecurity platform that reduces risk. However, process and organizational changes must be made to establish a policy administration role to define and enable policies that can be enforced through automated cybersecurity systems.

## Secure Supply Chain

Creating a zero-trust solution does not mediate all an enterprise’s cyber-attack vulnerabilities. One area of concern is the security of the supply chain of IT solutions. Organizations must understand the solutions' five components to fully protect the supply chain: silicon, hardware, firmware, software, and systems integration. Each element of a solution how's a supply chain which includes suppliers of raw materials, manufacturers, integrators, deployment, and operations. The deployment and operations typically are performed by the consumer, but As organizations begin to provide XaaS offerings, they deliver the deployment and operations functions.

Organizations must understand the supply chain of each component in the stack. Understanding these five levels can be complex and overwhelming for anyone in the IT solution space. Simplifying this complex ecosystem can help organizations wrap their head around areas to improve and help mitigate risk. The first simplification comes in identifying physical and digital supply chain security.

![img_2.png](img_2.png)

### Physical Supply Chain Security

The COVID-19 pandemic showed the world the fragility of our supply chain as factories shut down due to a lack of physical supply based on shortages of raw materials and their derivatives. This continued to be exacerbated by the outbreak of war in Ukraine as supply chain channels continued to be cut further. The complex global supply chain had a ripple effect across unrelated industries. For example, a chip shortage causes delays in the delivery of hundreds of thousands of automobiles to consumers and government agencies. Securing the physical supply chain is critical to our national security.

Significant efforts have been made to improve the physical supply chain by investing in local manufacturing through partnerships with the public and private sectors, like the passing of the CHIPS act and subsequent investment in central Ohio by Intel and other technology companies to build silicon and to hardware manufacturing facilities in the silicon heartland.

### Digital Supply Chain Security

Identifying the components that comprise solutions and documenting their use and operating parameters have been standard procedures most organizations follow for hardware and physical product development. However, providing this same level of security for firmware software and solutions is not observed in the IT solution space. To improve this situation, organizations must look at the providers of the five solution component levels concerning the providers and set expectations for their deliverables.

![img_3.png](img_3.png)

* Suppliers - Provide a bill of materials for all components in the solution stack, including software, COTS libraries and code, firmware, BIOS, hardware, and even Silicon manufacture components. Understanding the source location, version, and certification level is critical when evaluating vulnerabilities in an organization against assets in operations. The best example of this is the log4J vulnerability in 2022. many organizations have no idea how many applications depended on the log4J library and were exposed to cyber-attacks.
* Manufacturers - Provide a chain of custody Ledger that shows who and what has accessed the product being developed through the development lifecycle process, including silicon, hardware, firmware, software, and solution stacks.
* Integrators – Provide products with a hardware root of trust to assure consumers that solutions have not been tampered with or altered from the original manufacturer’s specifications and production manifest.
* Deployment – Provide tested and certified manifests that can be checked against product delivery to guarantee no changes have been made during deployment.
* Operation – Provide mechanisms to monitor and execute applications and IT solutions in trusted execution environments.

## Data and Application Security

The last step in securing the supply chain is providing trusted execution environments for products to run securely and safely. To protect data and applications from cyber threats, including ransomware and data breaches, organizations must encrypt their data, at rest, in transit, and in use. Leveraging silicon in enabled encryption and decryption algorithms are critical in providing performance and reliability of application and data security.

New technology such as intel's SGX and TDX provides data encryption to prevent new cyber attacks on clear text memory execution. These technologies can be found in server and cloud service provider offerings under confidential computing.

![img_4.png](img_4.png)
 
## Conclusion

The battle with cyber bad actors will not go away anytime soon. However, organizations can prepare themselves two better combat and mitigate risk. Applying zero trust principles to the six domains of cybersecurity will profoundly affect an organization’s ability to combat cyber bad actors and mitigate risk across their infrastructure.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people processand technology.</p>
<p>On today's episode,the state of the Cyber threat Waysto reduce and address risk.</p>
<p>Today on the show, it's just me.</p>
<p>I'm going to talk a little bitabout the state of the cybersecurity todayand threats that are going on and waysthat we can help reduce thoseby looking at the sixdomains of cybersecurity,which we've talkedabout on the show before.</p>
<p>So you can check out the other episodes,just type in cybersecurityor six domains and and you'll find outthe other episodes on this.</p>
<p>But I want to give a little bit of updateand focus a little bit moretoday on the secure supplychain and application and datasecurity.</p>
<p>So let's dive right in.</p>
<p>First off, let's take a lookat the state of things today.</p>
<p>Cyber threats with the warbetween Russia and Ukraine, we've seena major increase, about 300% increasein nation state attackson soft targets in the United Statesand in Western Europe.</p>
<p>And we're also seeingthat trickle down into non nationstate attacks as well as cyber bad actorsare starting to feel more empoweredand they're they're starting to attacktargetsthat before have been kind of ignored,including a lot of targetsin the critical infrastructuresector, which includesenergy, water treatment,oil and gas refinery, health careand the list goes on and on.</p>
<p>CISA has 16 sectorsthat they've identified as criticalinfrastructure, and we're doing our bestto shore those up.</p>
<p>But today,they currently are a soft target.</p>
<p>So we got towe got to take a look at what we can doin those areas to help improve things.</p>
<p>But we've had some major attacksover this last yearthat have caused substantial financialand in some cases physicalharm to individuals and to infrastructure.</p>
<p>In fact,last year it's predictedthat data breaches have cost about $5.2trillionglobally and have exposed 22.1 billiondata records in the history of uscollecting dataaround cyber attacks and databreaches on average.</p>
<p>Most enterprises are trying to combat thisby using severaldifferent security products,and on average,most organizations are using aroundto secure their networks,which I think is interestingbecause in some respects,increasing the number of security productsincreasesthe threat attack surface.</p>
<p>So it's an interesting dilemmathat you have.</p>
<p>One of the best quotes that I've heardis in Information</p>
<p>Security by Bruce Schneier,</p>
<p>Complexity is the worst enemy of security,and I totally agree with that.</p>
<p>The more complex your systems are,there's bound to be more gaps involved.</p>
<p>All right.</p>
<p>So we've got to figure out ways toto combatthis in a in a in a better way.</p>
<p>And frankly, we're not doing very well.</p>
<p>If we take a look at the statisticson how long it takesto identify an attack and how longit takes to contain the attack,we haven't really seen any improvementover the lasteight years or so.</p>
<p>So from 2016 until now,it takes around 70 days to oncewe've detected an attack,an infiltration,it takes about 70 days to contain it.</p>
<p>That's that's over two months.</p>
<p>That's a long time.</p>
<p>But it's even worse when you look athow long it takes to actually identifythat you've been infiltrated,which is up to around 200, a little overmuch in the last eight years.</p>
<p>A little bit of ebband flow have happened, but the cost,the cost of a data breach has gone updramatically.</p>
<p>A data breach on averagenow is costing about 10% more or 4.4$4.35 million per data breach.</p>
<p>That's quite substantial.</p>
<p>So we got to do something about this asand this isthis is kind of a game for a catand mouse game for a lot of people.</p>
<p>It's a battle for sure.</p>
<p>So as we increase our ability to defendthe bad actors, increase their ability toattack, in fact,the attacks are evolving very quickly nowand we're starting to see more attacksspecifically in five different areas.</p>
<p>Ransomware attacks are becomingmore prevalent and they're not.</p>
<p>And this is interestingabout ransomware attacks.</p>
<p>I had a great interview with</p>
<p>Jim Freberg,who talked about the differencebetween federal attacks, attackson our federal government and attackson state and local governments.</p>
<p>Attacks on state and local governmentstend to be more ransomware attacks.</p>
<p>Why? They're softer targets.</p>
<p>It's not really a nation stateattacking you to get money.</p>
<p>It's it's more,you know, bad actors, organized crimeor whatever the case may be, terrorists,whatever that need money.</p>
<p>Right.</p>
<p>That ransomware attacks are primarilyfocused on state and local governmentsand some critical infrastructure,not so much on the federal governmentspace, because they can handle thosepretty quickly.</p>
<p>Another interestingattack that we're seeing is Cryptojacking,wherepeople are actuallyusing your infrastructure to mine crypto.</p>
<p>And it typically consumes about 40%of your resource of your endpoint,whether it's your laptopor an edge device of another sortor even your phones.</p>
<p>Even now, we're starting to see cryptojacking happen.</p>
<p>About 40% of your resources areare infected at this time, and it could gomonths and months and monthswithout detection because they're prettythey're pretty smart about how they'redoing crypto mining.</p>
<p>They're not doing it when someone elseis using the computer, they're doing itwhen your computer's just plugged inand sitting idle.</p>
<p>And sometimes they just take overthe whole thing and just go to town on it.</p>
<p>Another interesting attack that we'reseeing is control flow hijacking.</p>
<p>Now, this one's an interesting one,a fairly new one.</p>
<p>Well, it's not that new,but we're starting to see more of it.</p>
<p>And that's where they'retaking legitimate application codeand accessing data inside of the system.</p>
<p>So understanding that, hey,that application's doing whatit should be doing,but now it's accessing resourcesand sending it other placesthat it normally does not.</p>
<p>So that's a big concern, right?</p>
<p>Because that's a way to to hijack data andand get data out of organizations.</p>
<p>The next one is firmware attacks.</p>
<p>Now, this one is really interestingbecause as firmwareis typicallypretty hill held pretty tight,but we're starting to seemore attacks on firmwarewhich is below the operating system.</p>
<p>And firmware attackshave grown about five Xover the last three years,which means they're injectingthose attacks in the firmwarebefore it actually gets released,which leads to the lastbig evolving cyber threat,which is supply chain.</p>
<p>And this is specifically we can talkhardware, software, silicon supply chaincorruption or supply chain infiltration.</p>
<p>We've seen some of this,the most popular or infamous,</p>
<p>I should say, one that we've heard aboutis the SolarWinds attack,where they actually attackedthe DevOps pipeline.</p>
<p>And in doing so, they injectednew libraries into the softwaresupply chain that were their own librariesand then certified them.</p>
<p>And it's amazing, right?</p>
<p>So these are really big problemsthat we have to deal with.</p>
<p>As you can see,these are not your normal threatsthat we've seen over the last sixyears or so.</p>
<p>They're changingand webreak them down into three categories.</p>
<p>We can see the different vectorsof those attacks that are being used.</p>
<p>And the first one are people attacks.</p>
<p>And believe it or not,the number one attack,</p>
<p>Start with phishing.</p>
<p>The phishing attack.</p>
<p>I it sounds silly.</p>
<p>We all know. Don't click on that link.</p>
<p>But boy, they're getting really goodat phishing attacks.</p>
<p>In fact, just recentlywe're starting to see attacks,phishing attacks on discord,which is really interesting.</p>
<p>Right, that you would think, hey, discord,that's a little more controlled.</p>
<p>Na na.</p>
<p>We're seeing not just email phishing,but social media of phishing attacks.</p>
<p>We're seeing social engineeringwhere people are being groomedonline,being groomed by cyber bad actors, right.</p>
<p>Where they're share, wheretechnologists are sharing informationthey should not be sharing on socialon social media to gain access toto information about them or their companythat cybercriminals are starting toto use to attack their infrastructure.</p>
<p>We also have the insider threat.</p>
<p>That's always a problemwhen you have people involved in somehighly classified type of informationand things like that.</p>
<p>So those are some thingswe have to worry about.</p>
<p>We're also seeing process attacks.</p>
<p>Now this one is kind of new.</p>
<p>Well, it's been around for a long time,but we're seeing a really huge uptickwhere people are actually attackingthe build processand injecting themselvesinto these build processes.</p>
<p>Batch management,the software development lifecycleor even the hardware developmentlifecycle, which is much longer.</p>
<p>We're seeing attackseven at the hardware and design level,which is really interestingbecause these attacks are now in siliconor in a motherboard and now they're beingproduced in mass produced and sent out.</p>
<p>So we're startingto see those types of attacks.</p>
<p>We've got to be very mindfulof of those things.</p>
<p>And then we also have technology attacks,which are primarily software attacks.</p>
<p>Now, we're veryused to software attacks likethe software memory attacks, D</p>
<p>DOS, SQL injectionand ROP and chop those things.</p>
<p>We've seen those before.</p>
<p>They're continuing to happenand they're finding new ways to infiltrateusing those techniques.</p>
<p>Now, a lot of times people say,</p>
<p>Oh, this is all in the IP space.</p>
<p>What we're seeing actuallyit's starting to move overinto the OTT space in a big way.</p>
<p>And in OT has been really good in the pastat isolating themselves fromthe the the internetfor no better word,which means they're isolating themselvesfrom a lot of these attacksby firewalls or air gapped networks.</p>
<p>But hey guess what we're starting to seecyber criminals and cyber bad actorsjump the air gap into the spaceand they're not prepared because they'verelied on this really solid.</p>
<p>They call it the Purdue model.</p>
<p>They've they've relied on this reallysolid fortress that they've created.</p>
<p>But once someone's punchedin, it's it's soft on the insideand they're going hog wild,crazy on there.</p>
<p>Now, if we look what is happeningbehind these attacks,we find some common threads.</p>
<p>If you look at data breaches, supplychain attacks and ransomware,the three big ones there of the five,let's focus on these three.</p>
<p>We see common thread, poor cyber hygiene.</p>
<p>These are basic things.</p>
<p>I like password protection,setting access management.</p>
<p>These arethese are basic things that we should talka little bit about in a minute.</p>
<p>But there's other thingsthat we're seeing here too.</p>
<p>On the data breaches.</p>
<p>We're seeing systemcentric security and datacentric security are separate.</p>
<p>So people aren't.</p>
<p>They're worried more about hardware accessthan data access or application accessmore than data access.</p>
<p>And there's a really big lawlack of egress, monitoring in my watching,where my data is going outsideof my data center out, so my cloud serviceprovider, whatever the case may be.</p>
<p>So those are some big thingson data breach that we're not doingwell at on supply chain attacks.</p>
<p>This one, it worries me a lot actually,because we don't really havegreat visibilityor accountability into our supply chains,both hardware and software.</p>
<p>And we'll talk moreabout supply chain attacks.</p>
<p>We're also basing things on just eventdriven monitoringinstead of continuous monitoring.</p>
<p>So we only raise a red flagwhen something bad happens.</p>
<p>But we're not we're not continuouslymonitoring to see what's going onand looking at patterns of changeand things like thatand a lack of just specific productmonitoring that we should be doingthat we're not both on the hardware sideas we're building hardware up,and that includes the process monitoringand also on the software side, as well.</p>
<p>And then the last major threatand what's behind it is that ransomware,again, poor cyber hygiene, phishingattacks areare rampant in the ransomwarearena.</p>
<p>We also have a lack of defense in depthin a lot of our infrastructure.</p>
<p>We rely on that hardened shell onthe outside and it's soft in the middle.</p>
<p>So we've got to do a better job atlooking at things like micro segmentationand other tools like thatwhere I'm hardening throughout.</p>
<p>And so I need to do a better jobwith my security overall onon all these things, specifically aroundpolicy and risk management.</p>
<p>So let's talk a little bitabout cyber hygiene,since it was thenumber one issue that we saw.</p>
<p>So cyber hygiene, what it is.</p>
<p>Well, there's some really great resourcesout there that give yousome ideas on best practices,on cyber hygiene.</p>
<p>But basic security and risk managementpractices is really good cyber hygiene.</p>
<p>So you need to establish policiesand then implement those policiesacross your organization,not just in one pocket.</p>
<p>Right.</p>
<p>And things such as least privilegedmicro segmentation, encrypting everything,multifactorauthentication, patching,getting those security patches up to date.</p>
<p>These are your blockingand tackling of cybersecurity.</p>
<p>If you don't do these things,all the other fancy things that you dojust aren'tgoing to matter as much, right?</p>
<p>You're stillopening the gates to everyone, basically,which is going to be hard to manage.</p>
<p>So check outand you can Google this anywhere, frankly,cyber hygiene, best practices, there'sthere's tons of great ones out there.</p>
<p>You can also look at the nice standard,great ideasthere on how to secure your organization.</p>
<p>And I can seem overwhelming at times.</p>
<p>But if you look at the key principlesand you start at the top at theat the phishing, for example,phishing or multifactor authentication,if you start with just those two,you're going toyou're going to be so much more securethan you are right now.</p>
<p>So real quick, let's jump overto cybersecurity domains.</p>
<p>So Intel's position on thisis that there's six cybersecurity domains.</p>
<p>If we look at cybersecurityand break it into six bundles,there's threatdetection, prevention and analytics.</p>
<p>There's identity and access managementthis year, multi-factor authentication,there's data and application security,there's supply chain security,network security and host and systemsecurity.</p>
<p>Now, each one of these has a playand working them together.</p>
<p>And and it'snot just focusing just on detectionor just on supplychain is going to be good enough.</p>
<p>You've got to have a well-roundedprocess solution,whatever the case may be.</p>
<p>It has to be well-rounded.</p>
<p>You've got to you've got to touchall six of these areas to have and builda strong security castle or fortress.</p>
<p>Well, we've this is interesting.</p>
<p>When you look at these six domains,they really haven't changedmuch over the years.</p>
<p>The technology and processimprovements have.</p>
<p>But if I take a look at the evolutionof cybersecurity, it's really fascinating.</p>
<p>Each one of these six areas,all have a playall the way back to the 1990s,all through all the different typesof things that we saw,sometimes we focused more on like dataand application security with encryption.</p>
<p>And other days we looked at, Oh,we need to secure the supply chainlike software development,supply chain, or hey, we need to doidentity managementbetter with multifactor authentication.</p>
<p>But they all touched parts of it.</p>
<p>And until we get to today and today,</p>
<p>I find very interesting the big hugebuzz word of the day,of course, is cybersecurity architecture.</p>
<p>And I really don't like the name I see.</p>
<p>Or zero trust architecture.</p>
<p>Sorry, I really don't like the name zero</p>
<p>Trust architecture.</p>
<p>I think it should be zero trustphilosophy or principles,because when we hear the wordarchitecture, we are automatically think,</p>
<p>I can just go buy that,but you really can't.</p>
<p>Zero Trust means changesto process, changesto paradigm,the way you think about thingsand tools and training people.</p>
<p>So goes back to thatpeople process policy and technology.</p>
<p>So let's take a look at what it takesto enable zero trust First.</p>
<p>The first thing you have to understandare the six domains,which we already talked about threatdetection, identity managementdata and application security, networksecurity, supply chain security and hostand system security, understanding thoseand then applying zero trust principles.</p>
<p>These are interesting.</p>
<p>So trust principles like default, deny,don't let anyone in by default.</p>
<p>Don't. Don't let anyone in.</p>
<p>Contextual authentication,including temporal authentication.</p>
<p>Meaning</p>
<p>I have access for a short period of timeor a designated period of time, granularcontrol all the way down to data elements.</p>
<p>If you need it right.</p>
<p>Dynamic and real time controls,continuous monitoring, continuoustrust validation.</p>
<p>I trusted you once.</p>
<p>I trust you again.</p>
<p>All right.</p>
<p>I've got</p>
<p>I got to establish these key principles.</p>
<p>Now, if I apply those principlesto the six domainsusing processand technologyand training of your people,then I can truly start deploying a zerotrust architecture,which includes policy management,automation on your policy engine,creating the policyadmin, the Security Policy Administrationrole in your organization.</p>
<p>Which means if I doall of that together, right,then I can look at true policy enforcementat the endpoints,which means I'm getting informationfrom my assets on their current state,and then I am enforcingthose policies on those resourceswhich include not just hardware,not just virtual machinesor containers, but data applications,devices, virtual devices,virtual machines, containers, everythingnow fits into that default.</p>
<p>Deny and that zero trust principle,meaning everything has an identity,everything has access rightsthat I need to work through.</p>
<p>And this is really,really important concepts.</p>
<p>So let's take a little bit deeper.</p>
<p>Look into the best practices.</p>
<p>Where do you begin?</p>
<p>Well, you start with the six domains.</p>
<p>So if we start with the six domains,there's a lot to unpack there.</p>
<p>We can be</p>
<p>I could I could do a podcast on eachone of the six domains, which I might do.</p>
<p>Right.</p>
<p>So stay tuned, come back and listenand look, because we will do this.</p>
<p>We'll go through each domain in detail.</p>
<p>But today I'm going to talkspecifically about the supply chain,secure supply chain,that this is really become more complexthan we even realized,because if we look at the secure supplychain,we're not talking just and a lot of timeswhen you hear supplychain, you're thinking shipsitting off the coast of California,not able to come into portor fuel prices, driving uplogistics costs,all of those are those are part of it.</p>
<p>But that's not all.</p>
<p>When we look at supply chainin the microelectronics world,we have to look at silicon andwe have tolook athardware, we have to look at firmware,software and then solutionsthat I'm building on top of that software.</p>
<p>So I have to look at the supply chainof each one of thosebecause each one is unique.</p>
<p>Well, this could be overwhelmingfor any organization.</p>
<p>I got a I got to learn</p>
<p>I got to be an expert in all these things.</p>
<p>Well, the good news is.</p>
<p>No, you don't.</p>
<p>You there's some common themesthat we can seethroughout all of them that if we applysome general zerotrust philosophy against them,we'll be able to startto establish some securityin each one of these domains instead ofjust being a free for all right.</p>
<p>So if I take a look at those fivehorizontal solution software,firmware, hardware, silicon,and I look through its lifecycleand if I look at its lifecycle,which I could sayalmost on a vertical space,</p>
<p>I got suppliers of those,</p>
<p>I have manufacturers,</p>
<p>I have suppliers, I've got manufacturers,</p>
<p>I have an integrator, I have deployment,and then I have operations.</p>
<p>So that's kind of the lifecycleof each one of those those five levelsin my solution chain.</p>
<p>So if I look at each one, I've got to say,all right, well,how do I secure the supply chainfrom the supplier to the manufacturerto the integrator to deploymentand to operations of silicon?</p>
<p>How do I do that for hardwarefor each one of those?</p>
<p>Well, there's something really interestingabout this.</p>
<p>We can break downsecuring this in two waysphysical security and digital security.</p>
<p>So physicalsecurity and we've already seen thiswith like things like Fedrampand the gov cloud, right where</p>
<p>I have trusted people in those govclouds, right?</p>
<p>They are U.S. citizens.</p>
<p>They they go through the whole processto be certified, to be fedramp certified,and that I trust the peoplein those factoriesand the suppliers in those factories.</p>
<p>We have a process for that at theat the topat the solution stack,which is really interesting.</p>
<p>And it also includes a little biton the software stack.</p>
<p>So that's that physical supplychain security.</p>
<p>We are working feverishly right nowand that's why we're building fabsin Ohio, in Arizona and New Mexicoand in Europe to shore uptrusted factories in the United Statesand in Europeso that we can have that physical supplychain security that we need as well.</p>
<p>So that's being doneor in the process of being done today.</p>
<p>If you look at where hardware comes from,if I just have like a motherboard,for example, it is amazing.</p>
<p>If you broke it downto all the individual components,how many countries in the world contributeto that, which is part of globalization.</p>
<p>But when you get globalization like that,you also havefragile supply chainsthat you have to worry about.</p>
<p>That's why we're seeing so much investmentin into the United Statesto build out the supply chainsin a moretrusted way, in a more secureand reliable way.</p>
<p>Right now on the digital supply chain,the digital supply chain security,this is interestingbecause we really haven't done a great jobhere.</p>
<p>We've started to in thereand people have been playing aroundwith like blockchains and secureblock ledgers and and things like that.</p>
<p>But we haven't seen wide adoptionat the top and the solutions stackwe're starting to see it at the bottom,at the silicon layer,at the hardware layer,where I can go and see a bombof a device and I can know whereall the components have come from.</p>
<p>We're seeing that.</p>
<p>We're starting to see that now.</p>
<p>But on the software side,which you would think would be easiestbecause we're building the software,we know where it all came from,where we got when I see that yet.</p>
<p>But there are mandatesto provide software bombs,executive orderin Q2 of this year and in Q2 of 2023,we'll see if will be able to pull it offas a industry.</p>
<p>There are companiesthat are ahead of this.</p>
<p>They are providing a s bombs already,software bombs,and there are some good standardsout there that are being adopted now,but it's still in its infancy.</p>
<p>It's still very nascent.</p>
<p>Now, another thing that we need to look aton securing the supply chainis if we look at eachlevel inside the supply chain,starting with suppliers,manufacturers, integration,deployment and operations, whatcybersecurity techniquescan we use in each one of those?</p>
<p>And this turns out to be actuallysomething I can apply acrossall five horizontals,meaning the solutions, the hardware,firmware, software, silicon, rightbelow materials is one from the suppliers.</p>
<p>So if I request or mandate,</p>
<p>I need to build materialsfrom my supplier.</p>
<p>This should help out quite a bit. Right?</p>
<p>Because I know where my silicon came from.</p>
<p>I know that it came from a factoryin Portlandor a factory in Ohio or a factory in</p>
<p>Arizona or a factory in Dalian, China.</p>
<p>I can get access to that at the hardware.</p>
<p>Same thing.</p>
<p>Firmware softwaresolution stacks all the way at the top.</p>
<p>I should be able to go to a cloud serviceprovider and say, You'reproviding this service like Ardis,for example, AWB already has, or Azure</p>
<p>SQL Server.</p>
<p>You should be able to say what what wasput in there to make that work,</p>
<p>Which software stacks and which hardwareis it running on in the firmware?</p>
<p>I should be ableto get access to those bombs.</p>
<p>So that's the benefit of the bombs.</p>
<p>It helps build up some trustwhich goes into the next partis when I'm manufacturing something,</p>
<p>I want to make sure that I'm protected.</p>
<p>So I need a chain of custody.</p>
<p>I need to know that nothing's beeninjected into the manufacturing process.</p>
<p>As I've gotten my supply, I I'm startingto build out my manufacturing.</p>
<p>We do this in hardened,hardened operational pipelinesand there's some great technology on thisaround trusted execution environmentswhere I can make sure I knowwho has touch of the softwarethat's being built, who has touchedthe silicon or the hardware,and that gives me that chain of custody,who has touched it,who's manipulated itall that the next one is integration.</p>
<p>So once it's manufactured,now I'm getting up to the integration.</p>
<p>We want to make sure that nothing changeshere, right?</p>
<p>So we need to establish a route of trust,meaning I trust where this came from.</p>
<p>And I can guaranteethat during integration it's not changing,that those core foundational partsare not changing.</p>
<p>And then when I get to deployment,</p>
<p>I can use that route of trustto do attestationand certification of my manifest.</p>
<p>So now I have everything I need in there.</p>
<p>I can say, yes,every part of this solutionor silicon or hardware that I'm deliveringhas been attested and certified.</p>
<p>I know exactly what's in there.</p>
<p>I certify that that it's true.</p>
<p>Now, we'veseen attacks right hereat this deployment levelin when people have been attackingsoftware supply chains.</p>
<p>We're starting to see that happen.</p>
<p>So you got to lock downyour environment there.</p>
<p>And then this is really interesting,the last step here,and it's on the operations side.</p>
<p>It is I can</p>
<p>I can have the most secure products.</p>
<p>You've got me.</p>
<p>And then if on the end,when I'm running an operations,if I don't usea trusted execution environment,if I'm not establishing trust there,it doesn't matterif I open upall of all of my firewallrulesif I don't do access it anyway,anyone can access anything they want.</p>
<p>They'reall the work down from the supplierup to operations.</p>
<p>Doesn't matterbecause I've opened everything up.</p>
<p>So I need to establish dataand application security at this, at thisoperation side.</p>
<p>So which brings you to the next domain.</p>
<p>I want to quickly talk about,which is data and application security.</p>
<p>So when I talk about data and applicationsecurity,</p>
<p>I'm talking about encryptingand access managementand see how they all tie togetherthe domains.</p>
<p>But let's specifically talk about dataand application security real quick.</p>
<p>This means encrypting data.</p>
<p>Data at rest, data in in flightand also data in use.</p>
<p>So if I look at data at restand data in flight, thesea lot of people are avoiding this becauseencryption costs too much time, right?</p>
<p>It's like 20% overhead.</p>
<p>It is not.</p>
<p>It's like single like 1%,maybe even less than 1%,depending on what you're encrypting,because a lot of the encryptionalgorithms are now in silicon,which meansyou can take advantage of the siliconto do the encryption for youand everything is encryptedend to end encryption.</p>
<p>And with new technology that we're seeing,like trusted execution environments,</p>
<p>I can also encrypt memory as I'm using itso no one can get access to itthrough a side channel attackor whatever the case may be.</p>
<p>So take a look at trusted executionenvironments in encrypting data in use.</p>
<p>It's very important as well.</p>
<p>And then the last thing</p>
<p>I just want to make sure everyoneunderstands, to really achievecybersecurity and resilience,you've got to look at the sixdomains, apply the zero trust principles,and build a zero trust organizationthat can really help establishcybersecurityand resiliency.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five Stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracingdigtial.org</p>
<p>Until nexttime, go out and do something wonderful.</p>

</details>
