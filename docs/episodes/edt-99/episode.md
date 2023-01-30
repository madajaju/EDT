---
layout: posts
title: "Precog Cyber Attack PAth with XM Cyber"
number: 99
permalink: episode-EDT99
has_children: false
parent: Episodes
nav_order: 99
tags:
    - Artificial Intelligence
    - Cybersecurity
    - XMCyber

date: 2022-08-09
guests:
    - Darren W Pulsipher
    - Paul Giorgi

img: thumbnail.png
summary: "Intel’s Darren Pulsipher, Chief Solutions Architect, and Paul Giorgi, Director of Sales Engineering, XM Cyber, discuss how XM Cyber technology can help organizations uncover attack paths and reduce risk."
---

{% include soundcloud.html id="edt99" title="#99 Precog Cyber Attack PAth with XM Cyber" %}

{% include youtube.html id="G9PfJdHZi08" %}

---

Paul has been in security since the late nineties, getting his start by doing projects for the Department of Homeland Security and the Department of Defense. In 2005, he joined Fishnet Security doing sales engineering and has been tied into sales engineering. He joined XM Cyber to concentrate on breach and attack simulation.

Rather than traditional cybersecurity, which is detection, remediation, and prevention, XM Cyber is predictive. A good description is that it is a precog simulation. XM Cyber creates imaginative incidents to give you insight into how your tools might be able to address them and how you could work to remediate specific chokepoints. The idea is to do all of this before pen testing. You can fix things today, see the impact tomorrow, and then continually increase and improve your security.

Google maps is a good analogy for how XM Cyber works. When you want to get from one place to the next, Google maps will tell you all the ways to get there, which avoids tolls, which is the most direct, etc…XM Cyber does the same thing but with an attack simulation. For example, suppose you have a compromised active directory user account. In that case, it will show you the six steps to be able to get to an on-prem domain controller and compromise that critical asset. It will also show all the different routes between those two points.

A use case for this is that you can enable a red team to be super-efficient with this information because they don’t have to poke around and try to make discoveries. It can also help the blue section, allowing them to prioritize remediations on chokepoints. For example, if there are 400 attack paths all going to different areas in your DMZ, but all 400 seem to have to leverage this one entity to make that path happen, then you can fix that one problem and destroy all 400 paths. Blue teams can lock down those chokepoints that could enable the attacker.

One area that XM Cyber analyzes is identity management, not just in the data center but also in the cloud. Sometimes attack paths will be ten steps long, but nine steps will be navigating the identity world. For example, you might have permissions to your admin account, and then that admin account might have additional permissions. Do six or seven adjusting different permissions or resetting passwords and deploying GPOs. You could take nine steps from a standard user account to domain admin by leveraging the active directory.

In addition to identity, XM Cyber looks at over a hundred entities such as machines, S3 buckets, and SSH keys. These different entities can be combined to create an attack path. Sometimes it gets very complex. For example, an attack could start on-prem, go out to Azure, take advantage of Intune, and then go back over to compromise another machine that allows a pivot over to GCP. Once attackers are in the GCP environment, they can take advantage of trust or permission between AWS and GCP to compromise AWS. XM Cyber looks at all the different types of entities in disparate environments and connects them to assess these paths around how every entity holistically plays together in the risk of all the others.

There are two ways XM Cyber engages with customers. The first is high-level discovery to assess the environment, expose vulnerabilities, and measure how an attacker can expose new vulnerabilities to put critical assets at risk. The second is a targeted assessment of a specific scenario that the customer is worried about. These engagements are not just static analysis of entities. They are dynamic because they look at traffic and other patterns.

A typical targeted use case is determining if OT is the critical asset or the breach point. XM Cyber plays out scenarios such as if a machine in HR is the breach point, is there any risk to this PLC sitting in the SCADA environment controlling pressure switches that could turn off the electricity for a city municipality. That is an actual use case that XM Cyber can simulate. This type of information is critical in a world where OT is no longer isolated but connected to networks.

XM Cyber is a SaaS solution rather than on-prem, so they can stay dynamic and deliver the best service. It can be scary to think that something in the cloud has all your attack techniques. Still, XM Cyber does a lot of work to ensure that data is completely isolated, SOC 2 compliant, among other certifications, and there is no multi-tenancy. They also do not collect anything sensitive. Sensitive information is hashed, and only a portion is sent to the cloud. They don’t have to have actual data.

Once XM Cyber has found the problematic pathways, they can also help you remediate them via customer success managers who have weekly or biweekly meetings where the goal is to take the data coming out of the platform and help you use it and find solutions. They also have partners such as managed service partners who bolt the attack simulations onto their platforms to give them insight into offering their services.

XM Cyber recently acquired Cyber Observer to more directly deal with encryption, which offers controls and protection.  Cyber Observer has API integrations into different cloud environments and the other security controls, both cloud and on-prem. They can assess whether or not an exfiltrated XM Cyber simulated file was encrypted and ease worry. For example, they can point out three security controls that would have made it harder for that to happen. With the insight of Cyber Observer, something that looked like an easy attack can be made more complex with encryption; an attack might still be technically possible, but there is an EDR solution to bypass.

For more information about XM Cyber, go to http://xmcyber.com.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, thisis Darren Pulsipher chief solutionarchitect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people, processand technology.</p>
<p>On today's episode, Precogs</p>
<p>Cyberattack Powers with Paul Giorgifrom XM Cyber.</p>
<p>Hey, Paul, welcome to the show.</p>
<p>Thanks, Darren.</p>
<p>Hey, Paul Giorgiis our director of sales at XM Cyber.</p>
<p>When I first heard about XM Cyber,</p>
<p>I was like, I don't quite understand.</p>
<p>And then you guys coached me and taught meand I was like, This is cool stuff.</p>
<p>Yeah.</p>
<p>So before we get into what you guysdo, tell me a little bit about yourself,your background,and how you ended up at XM Cyber.</p>
<p>Yeah, so I've been in securitysince the late nineties,started doing a lot of DHSand DOD projects.</p>
<p>That was where I got my start.</p>
<p>There's a great place to learnand have kind of an unlimited budgetto just do whatever.</p>
<p>I wanted to kind of secure the perimeter.</p>
<p>And I started there.</p>
<p>Ended up coming over and joininga company called Fishnet Security,doing sales engineering.</p>
<p>And that was back in 2005.</p>
<p>And then I fell in lovewith sales engineering.</p>
<p>If you would have askedthe one who's managing the firewallsthat Paulwho was managing the firewalls back then,if I'd ever get into anythingsales related,</p>
<p>I'd be like disgusted by the idea.</p>
<p>But I love sales engineering.</p>
<p>And so I really fell in love with itat Fishnet.</p>
<p>And then my career has been kind of tiedwithin sales engineering.</p>
<p>I've worked at a few different places.</p>
<p>I participate as a co-founderof a cybersecurity companycalled Device Security.</p>
<p>I worked at exhibitions.</p>
<p>I love logs.</p>
<p>One thing I've always played around withis breach and attack simulation.</p>
<p>I think that that's an emerging space.</p>
<p>The last few years that I fell in lovewith an XM</p>
<p>Cyber Falls within that category.</p>
<p>And so when I was looking forthe next kind of adventure, I was like,</p>
<p>I want to do breach in attack simulation.</p>
<p>And then I surveyedand I really fell in lovewith what XM Cyber was doingand their unique take.</p>
<p>And so that's that's how I ended up here.</p>
<p>Okay.</p>
<p>First of all, as you know what breach.</p>
<p>You know, simulation and attacksimulation,you're dealing with blackout whitehat type of things going on here, right?</p>
<p>Yeah. Is that what it is?</p>
<p>Yeah.</p>
<p>There's categories of breach in an attacksimulation,like you can automate pen test.</p>
<p>So if you want every single dayto run a test in your environment,that is a categoryof reaching exact simulation.</p>
<p>And then there's what we callsecurity control validations, whereif you're using CrowdStrike or Sentinel</p>
<p>One or Microsoft Defender or Silenceor whatever the EDR tool is,and you want to make surethat your solution's blocking specifictype of variance, you can launch thingsthat look and simulatethose type of behaviorsto see, is my policy protecting me?</p>
<p>Or if it is protectingme, are my playbooks working the way</p>
<p>I anticipate them?</p>
<p>So there is definite valuein those type of use cases.</p>
<p>We don'treally address either one of those kind ofto the extent that our competitors do.</p>
<p>We do what's called attackpath management.</p>
<p>And attack path management is justholistically assessing your environmentand giving you insight intohow an attacker might leverage entitiesin your environment to laterally moveand compromised critical assets.</p>
<p>Okay.</p>
<p>So this is a this is different than whatwe hear traditionally about cyber, right?</p>
<p>Yeah, traditionally,it's detection, remediation prevention.</p>
<p>You know, those arethose are the typical thingsyou guys are doing, like predictive.</p>
<p>How can they get in?</p>
<p>If they do get in,where can they go type of thing.</p>
<p>So you're like, oh, what's the right word?</p>
<p>It's like,it's notit's not like going to the doctor, it'sgoing to the gym.</p>
<p>Kind of, yeah,</p>
<p>I've sea of like a three cog sim or it's.</p>
<p>A great precogs now.</p>
<p>Now we got Minority Report going on.</p>
<p>I feel like that's been a good descriptionwhere it's like we're not correlatinga whole bunch of thingsthat are happening.</p>
<p>We're correlating a lot of stuffthat could have,could have stringing them together,a imaginative incident,giving you insight into how your toolsmight be able to address it,how you could work to address remediationson specific chokepoints,and then if you thinkabout an organizationwho learns a lot from a test, like backwhen I was doing the DOD projects,</p>
<p>I was working at an Air Force base.</p>
<p>Every quarter we would have a pen testand they would always get usand it would just be so frustratingthat we'd spent so much time fixing stuff.</p>
<p>But my favorite time waswe would get around a conference tableand they would all share around, Hey,we did this,we did this, and then immediately</p>
<p>I would respond and addressall of the thingsthat they were doing to fix it.</p>
<p>And there was so muchwe learned during those incidences.</p>
<p>So that's what we're trying to do.</p>
<p>But on a regular basisand something where you canfix things today,see the impact of them tomorrowand then continually increaseand improve your security.</p>
<p>So this can happenwell before pen testing then, right?</p>
<p>Yeah, that's the idea really.</p>
<p>There was one customer.</p>
<p>So so he says well so here's a questionthen.</p>
<p>Yeah, right.</p>
<p>Could, could you have your red teamuse your stuff to find their way aroundthe blue team and then go to town.</p>
<p>Right. Yeah.</p>
<p>So we actually havethat use case deployed.</p>
<p>And so your tool can be very dangerous.</p>
<p>Yeah.</p>
<p>I mean, if you think aboutwhat we're doing, I use it in.</p>
<p>The wrong hands, right? Paul</p>
<p>Yeah, exactly.</p>
<p>Like Google Maps, for example,is a good analogy where it's like,</p>
<p>Hey, I want to get from one placeto the next place.</p>
<p>Here's my starting point, here'smy ending point.</p>
<p>Google Maps will tell youthese are all the ways to get there.</p>
<p>We do that same thing.</p>
<p>But from an attacksimulation, we're saying,hey, if you've compromised thisas your Active Directory user account,these are the six steps that you can takein this order to be able to get to likean on premise domain controllerand compromise that critical assets.</p>
<p>So just like Google Maps will say this isthe route that we recommend you take.</p>
<p>This is the one that avoids tolls.</p>
<p>This one's the most scenic route.</p>
<p>We do that same thing. We'll tell you.</p>
<p>These are the six waysto get from this point to this point.</p>
<p>And you think about howthat would help a red teamer.</p>
<p>It makes them super efficient.</p>
<p>They don't have to waste timepoking around and trying to do discovery.</p>
<p>They say, this is where I'm at.</p>
<p>I want to get over hereexcept tell me how to get there.</p>
<p>And so, yeah, you're right,it is kind of scary being able to to showall of that data in one specific view.</p>
<p>Well, yeah,you're going to enable the red team byyou can also give it to the blue team too.</p>
<p>So that's</p>
<p>I guess that's the next question, right?</p>
<p>You guys run all these predictiveattack path analysis and so what do I do?</p>
<p>You give me all that information.</p>
<p>What do I do with it?</p>
<p>Yeah.</p>
<p>So there's this fascinating perspective.</p>
<p>From a blue team perspective.</p>
<p>You can now prioritize your remediations.</p>
<p>If we are showing youthe entities that are allowing an attackerto most commonly compromiseyour critical assets,you want to focusyour remediations on those.</p>
<p>So we call them choke pointsand think about a choke point as aif I have 400 attack paths,all going to different areas in my DMZ,but all 400seem to have to leverage this one entityto make that attack path happen.</p>
<p>I just fixed that one problemon that one entity.</p>
<p>I've really destroyed 400 attack paths.</p>
<p>So from a blue teamer, it allows youto prioritize your efforts at making surethat you've locked down these choke pointsthat could enable an attacker.</p>
<p>We know that if an attacker is able to getsomething like a domain admin accountor get onto a machinelike a domain controller,there's a lot of stuffthat they can wreak havoc on.</p>
<p>They basically own the environmentat that point, but in most environmentsthere are accounts or entities that areriskier than your domain admin accountsand without having any insight,you don't know what those are.</p>
<p>But I'll tell you, there's a lot oflike a developer accountwho has rights from a federated identityand Google and Azure.</p>
<p>And from that one account, you're ableto get access to all these things.</p>
<p>And that's more powerfulthan a domain admin account.</p>
<p>Or think about an into an adminor just a regular domain userwho has rights to use the Intuneadmin service.</p>
<p>They could push software to anyas your Active Directory admin machinesor as your Active Directorydomain machines and push software.</p>
<p>So that one account is even more dangerousthan to make them an adminbecause it sits above another layer butthen has the ability to replicate down.</p>
<p>So it's an interesting perspectiveto now start seeing what other accountseven today introducemore risk than a domain admin account.</p>
<p>All right.</p>
<p>So I got to back you up a little bitbecause my my listenersheads are spinning now.</p>
<p>Right.</p>
<p>So I want to kind of break this downa little bit.</p>
<p>You talking about attack paths, so andthen you were talking about user accounts.</p>
<p>So yeah, obviously in in your past stuff,there's more than just user accounts.</p>
<p>There's more than just what's connected towhat and what firewalls are.</p>
<p>So how would you break down?</p>
<p>I mean, let's break it down a little bit.</p>
<p>Yeah, I've got identity managementas one of the things.</p>
<p>So that's one of the things that you guysleverage is, hey, who is who in the zoo?</p>
<p>Yeah, not just in my data center,but it also sounds like in the cloud.</p>
<p>Yeah.</p>
<p>So you guys can handle multi-cloud accessmanagementand or you're analyzing the access.</p>
<p>You're not doing the access management.</p>
<p>You're analyzingit, correct? Yeah. Is thatokay?</p>
<p>So that's the identity site.</p>
<p>So if Ithis is going to beif I have multiple identities, is thereany way for you to track to track that?</p>
<p>I am using multiple identities or not.</p>
<p>Is that just outside of the realm?</p>
<p>So we wouldn't I mean, we don't carewho owns what, but if if you've ever useda tool called Bloodhound, they are doingthe same thing that we're doing.</p>
<p>We actually have the same exact features,but kind of at a much larger levelwhere if you have accessto a specific Active Directory user,we understand that this active direct usercan reset the password for another one.</p>
<p>And now this past, this user accounthas the ability to now add a GPOand then from that GPO,we can then do this.</p>
<p>So sometimes attack paths will be tensteps long, but nine steps.</p>
<p>So I'll just be navigating the identityworld and it's all just due toyou might have permissions to your adminaccount and then that admin accountmight have additional permissions.</p>
<p>So if you do six or seven stepsadjusting groups and adjustingjust different permissionsor resetting passwords and deploying GPOs,you could kind of take nine stepsto go from standard Darrenor Darren's user accountto then get to the pointwhere you're at domain adminjust by leveraging Active Directory. Wow.</p>
<p>Most people don't even know thatthat that's an attack stuff.</p>
<p>And it gets even. More right.</p>
<p>I mean, I've got identities. Yeah.</p>
<p>Yeah.</p>
<p>I can imaginebecause, you know, cloud identitieseven though they try and sync them upbetween.</p>
<p>Yeah, they're unique identities, right.</p>
<p>They're not you know, they're unique.</p>
<p>Okay.</p>
<p>So identity is one paththat you guys follow on attacks.</p>
<p>What's another path that you guys follow?</p>
<p>Because it just can't just be identities,right?</p>
<p>You're doing but not. Yeah.</p>
<p>And so I like to use the term entitiesbecause it's a generic termencompassing a lot.</p>
<p>So sometimes an entity in an attackpath is the user like we were talkingabout another example of a common entity,it would be a machine,another entity would be like an S3 bucket.</p>
<p>It's not a machine, it's not a user.</p>
<p>It's just kind of a cloud storage area.</p>
<p>Another entity is a fileor an associates key.</p>
<p>I mean, the list is longin our supported entities.</p>
<p>I think there's about a hundred, maybeeven more than that, where all of thesedifferent entities can all be combinedtogether to create an attack path.</p>
<p>And sometimes, like I was saying,it's an attack path of ten,but nine of them are just userlike within the user space.</p>
<p>And then sometimes it gets really complexwhere an attackstarts on premise,goes out to as you're takes advantageof maybe Azure Intune like thatexample we're talking about before goesback over to compromise another machinethat then allows you to pivot over to GCP.</p>
<p>They don't want you over in the GCPenvironment taking advantage ofmaybe some sort of like trustor permission between AWB and GCP tothen compromise AWB.</p>
<p>So you get really complicatedand you look at allthese different types of entitiesand the different disparate environments,and then you connect them togetherto assess these paths aroundhow every entity holistically playstogether in the risk of every other.</p>
<p>Oh, so, so wow.</p>
<p>I mean,most I know because I do this myselfsometimes I set up those paths myselfbecause obscurity is a form of security.</p>
<p>At least we thought.</p>
<p>Yeah, but it sounds like to methat with tools like yours, I'm surethe bad guys have tools like this too.</p>
<p>Yeah.</p>
<p>Now, once you get in,they start looking around for paths.</p>
<p>Yeah.</p>
<p>So you can't use obscurity anymore, right?</p>
<p>So even if you're hopping betweendomains or hopping between cloud serviceproviders.</p>
<p>Yeah, it sounds like you really needsomething to help you identify these.</p>
<p>So let's say. All right,how does it work as a customer?</p>
<p>I bring you guys inand it's professional servicesor I just let your software just go hogwild, crazy.</p>
<p>How how does it work?</p>
<p>Explain an engagementwith with a customer.</p>
<p>Yeah. So there's two main waysthat we get engaged.</p>
<p>Sometimes it's just at a high leveland on a discoverall my attack pathsand that's a great, great use case.</p>
<p>Sometimes it'shey, we do pen tests every quarter,we get so much insight and from them</p>
<p>I would like to kind of have these doneon a daily basis if I could afford it.</p>
<p>But I don't have a budget of $100 millionto do a pen test every single day.</p>
<p>So sometimes it's just at a high level.</p>
<p>I just want to be ableto assess my environment.</p>
<p>And in that case, when thingslike filling out or log for a dayor spring for a showlike those vulnerabilities of the monththat kind of pop up under the radar,it is a really strong valueto for an organizationto measure the impact of thesevulnerabilities, like, hey, yesterdaythere was only ten attack passgoing to this critical asset.</p>
<p>Lena dropped on the sceneand now I have 100.</p>
<p>And so being able to measurehow an attacker can operationalizenew vulnerabilities in your environmentto put your critical assets at risk,that's that'skind of in line with that first customer.</p>
<p>The next customer,when we kind of get engagedis they'll have a specific scenario.</p>
<p>There was a really large bankthat we did a posse with last year,their customer now.</p>
<p>But when we did the posse, they said,we know that our offshore developershave access to one small IWC environment.</p>
<p>That's all they should have access to.</p>
<p>But we're really concernedthat there is some way that they havethe ability to abusemaybe different entitiesin the environmentto be able to access production data.</p>
<p>So that was a different scenariowhere they said,</p>
<p>I want to start hereand see if there's any risk to that.</p>
<p>And in that case,it was two days later we were saying,</p>
<p>Yeah, look at how they can abusethis lambda function.</p>
<p>From this lambda function.</p>
<p>They get this role from this rolethey can do is crawl across to meand assume role capability to thenget access to your production data.</p>
<p>So for however longthat they had this configuration,they had this false sense of securitythinking that because all their offshoredevelopers were relegated to one.</p>
<p>Yeah, they had them in a.</p>
<p>More secure, like there's no way.</p>
<p>So they came to us saying like, Hey,we want to verify this.</p>
<p>And so we ran through the simulations andwere able to say, Hey, you're not secure.</p>
<p>And by the way, it only takes three stepsto get from here.</p>
<p>Over there, it's very easy.</p>
<p>So they stopped the posse, fixedall of those things and thenresumed the PSC and is now a customer.</p>
<p>And so those are kind of the twomain areas where we.</p>
<p>Are targeted, right?</p>
<p>Yeah, I have a specific problem.</p>
<p>And then also tell me where I'm at.</p>
<p>This one, to me,this is kind of screaming forthis would have to be continuously runbecause as soon as I add another entityand as three bucket a new person,</p>
<p>I could have opened up Pandora's box.</p>
<p>Yeah.</p>
<p>Not only just the dynamicnature of cloud,but we alsotrack user behavior in our simulations.</p>
<p>So in most environments</p>
<p>I've found that the security scoregoes up during the weekend,and that's because we've removed the usersfrom the environment.</p>
<p>You're moving the users, rather,the score goes up.</p>
<p>I mean, every network is more securewith our users.</p>
<p>So that was one thing that you find.</p>
<p>So there's a lot of patterns, not onlyjust, hey, we deployed a new applicationor Hey, we're, we have some elasticityin our cloud environment.</p>
<p>We've got like this expansionthat normally doesn't happen.</p>
<p>So there's a bigger attack surfaceor like the example I gavethe users are doing something differenttoday.</p>
<p>What's happening today that is putting usmore at a security risk than yesterday.</p>
<p>So it's just not you're notjust doing static analysis of of entities.</p>
<p>You're also doing dynamic because you'relooking at traffic patterns.</p>
<p>You're looking atholy cow.</p>
<p>Yeah. Yeah.</p>
<p>I mean, that's that's why. Impressive.</p>
<p>Yeah, that is a lot.</p>
<p>And you said something interestingand it'skind of in in jest,but a serious question.</p>
<p>You basically saidget rid of users off your network.</p>
<p>Well, I mean, for the most secure,conscious for the most and limitthe number of users,</p>
<p>I think that that's a really good it'skind of if we talk about least privilegedprinciples, I mean, the best wayto get rid of privilegedprinciple or implement that is getting.</p>
<p>Rid of years. Yeah.</p>
<p>All right.</p>
<p>The reason I brought those upis because the OT environment.</p>
<p>Yeah.</p>
<p>Which is very different than I.Tand I'm doing a lot of researchright now in OT managed security andthe OT guys are scared out of their minds.</p>
<p>Right, because I think rightfully so.</p>
<p>Right.</p>
<p>Because if someone hacks into yourcritical infrastructure or people die.</p>
<p>Yeah, right.</p>
<p>This is a big deal.</p>
<p>So can you guyscan you guys help with thatpathfinding across the entity barriersor do I just saythere are no identities in the OT network?</p>
<p>But yeah,</p>
<p>I don't know if that's an answer.</p>
<p>So go to.</p>
<p>That specific use casewhere it's a targeted use casethat's a really common targeted use case.</p>
<p>We have customerslike in the energy sectoror anybody really with an O.T environmentthat probably is having that problemor problem, but it's converging.</p>
<p>Everything's kind of the same networksand so there's risk to that.</p>
<p>And the old schoolskater guys managing their PLCs,he thought they were isolated because,hey, this doesn't connect to our network,can no longer say that anymore.</p>
<p>So now you've got this problemwhere, hey, is otithe critical asset or the breach point?</p>
<p>If you think about kind of like attackpasses,are we getting attacked from these devicesor to them or.</p>
<p>Right. And so we get to calculate that.</p>
<p>But to your description,we definitely have that use casecommonly played out like, hey,is there any way from my i.t.</p>
<p>Environment, let's playthe scenario of somebody in h.r.</p>
<p>If somebody in h.r.</p>
<p>As machine as the breach point,is there any risk to this policysitting in my skate environmentcontrolling pressure switchesthat could turn on and off the electricityfor some city municipality?</p>
<p>So that is a real use casethat we can simulate.</p>
<p>And if we do findthese are the attack pass,it gives you insight to remediate thembefore an attacker finds themand then takes advantage of them.</p>
<p>So so thiswould be really importantto to run these simulations.</p>
<p>So that's another question I have for you.</p>
<p>I mean, is this is this a SaaS offeringor is it on prem?</p>
<p>I think SAS would be a little scary for mepersonally, right?</p>
<p>Yeah, because I'm like,you're going to store in the cloudsomewhere how people can attack me.</p>
<p>I mean, that's scary, right? Yeah.</p>
<p>So we ask the solution.</p>
<p>Early on, we did have kind ofwe did have an on premise solution,but it was really hard to keep it updated.</p>
<p>Think about. How often we're.</p>
<p>Constantly adding new attacktechniques and new attack vectors.</p>
<p>And so it became such a problem for usto constantly be tryingto update all of these on prem systemsthat we eventually saidfor us to deliver the best servicethat we can and constantly stay dynamicwith every new vulnerability and a tacticthat comes out, we have to be SAS only.</p>
<p>And to your point,it is a little scary to think about,</p>
<p>Hey, there's something in the cloudthat has all of our attack techniques.</p>
<p>We do a very, verywe put a lot of work to make sureall of our datais completely isolated, SOC two compliantand all these different certificationsshowing that we don't do any multi-tenant.</p>
<p>See everything is in it'sisolated tenants using a WACand so we make sure everything is isolatedand secure and we try not to collectanything sensitive.</p>
<p>Now you think about stitching theirtheir attack pass and what appears likethat's sensitive but if you think aboutwhat we're showing you, a lot of itisn't as sensitiveas some things like datasetting credit card doubles, credit cardnumbers, PII, so, so the password.</p>
<p>So when we are doing these attacks,it's really common for us to say, hey,we compromised this user account,we have this password sitting here,but we never send anythingsensitive to the cloud.</p>
<p>What we do is we hash it a bunch of timesand we actually sent halfor a portion of that hash up to the cloud.</p>
<p>So that way we can say, Hey, this passwordis the same as this password over here.</p>
<p>So we can leverage it in a waywhere we can kind of continue to use that,that password in living off the landfrom an attack perspective.</p>
<p>But we don't have to know what it isand we try to do thatsame sort of mentality on everythingor it'sif we don't need the actual datathat old kind of hash it, obfuscate it,and then just compare it in the cloud.</p>
<p>But we have really large referencesfor customerslike Nasdaq, for example,is a really big customer of ours.</p>
<p>We've got Fortune 50 banks.</p>
<p>So you have to like the scrutinythat we've gone over to get those times.</p>
<p>You've already gone through that.</p>
<p>So yeah, yeah, I, I bet I was a bigit takes a while for them right.</p>
<p>Yeah. And there's some still. Yeah.</p>
<p>So thinking or cloud is scaryand it's somebody else's computerand I don't like that. So yeah, I get it.</p>
<p>I feel that way, the same waya lot of times too.</p>
<p>So I guess here's here'sanother quick question.</p>
<p>Have you guys moved itall into the government spacein state and local governmentsor federal governmentsor, you know, national governments?</p>
<p>Have you moved into that space yetor are you still getting a little pushbackfrom them?</p>
<p>You mean just with the cloud adoption?</p>
<p>Yeah. With yeah, with the cloud adoption.</p>
<p>Yeah, I think so.</p>
<p>Most of our customers are in that space.</p>
<p>Put usthrougha little bit more of a effort test.</p>
<p>Of the ringer. Yeah, yeah.</p>
<p>And I mean, so, like,we are owned by a German company,the Schwartz Group that owns</p>
<p>XM Cyber Germany is knownfor like a lot of really strictprivacy laws and things like GDPRand all these different compliance.</p>
<p>So there is a kind ofan extra layer of scrutinyjust because we have to adhereto these type of things like the GDPRin a way that maybe we don't have toas much in different areas in the States.</p>
<p>So right, it is definitely somethingthat we have to keepstaying in touch with and different,different compliancelike Fedramp, for example,if you're playing in federal spaceand you want to SAS servicethat adheres to Fedrampand state fedramp compliant,like there's alot of those type of things as wellthat we continually have to work.</p>
<p>So you're so you're already in Fedramp.</p>
<p>You're in the gov cloud already. Not yet.</p>
<p>I think what we are, what do you call itwhen it's pending authorizationso we don't have the certification. Right.</p>
<p>We're just going through that process.</p>
<p>You're going to.</p>
<p>Oh, that's good.</p>
<p>That's good. That's good to know. Yeah.</p>
<p>Okay, let's say that</p>
<p>I, I get all this information from youguys.</p>
<p>You guys have shown mewhere all my, my parts are.</p>
<p>Maybe I'mnot that sophisticated in my cyber.</p>
<p>Maybe I'm a mid-sized company. Yeah.</p>
<p>Do you guys have, like,consulting services to help me figure out?</p>
<p>All right, you you found all these powers,and I'm sitting there going,</p>
<p>I don't know what to do.</p>
<p>I mean, how do you educate me?</p>
<p>Or can you help me figure out what to door point me to a partner?</p>
<p>Maybe you guys have a partnerthat does manage security.</p>
<p>I don't I don't know.</p>
<p>Yeah. What do I do?</p>
<p>So we have both every customer of oursgets assigned what we callcustomer success manager.</p>
<p>And they either have weeklyor biweekly meetingswhere the whole goal of their sessionstogether is just to take the datathat's coming out of our platformand help them like actually use it.</p>
<p>If we're just running,running thesetheoretical is every single week,but no one's fixing anything, thenwe aren't really making anything better.</p>
<p>So what, you're not.</p>
<p>Making any progress? Exactly.</p>
<p>So what's really a fun takeaway or a funoutcome of those sessions is commonlythose sessions will identifya few things like, hey,this chokepoint is impacted by this attacktechnique.</p>
<p>It will.</p>
<p>These are the steps to remediate it.</p>
<p>Do you think we can have this doneby two weeks from now?</p>
<p>And then on the team, they'll assignstuff, open tickets, put it infor that change control window.</p>
<p>And then two weeks later, we get to nowsee the impact and say, wow, look,we had this fix.</p>
<p>Look at how it replicaterippled across all the environmentand your security score goes up.</p>
<p>So that's kind of the main waythat we addresskind of using the solutionand not just turning in the shelf where.</p>
<p>But to your other point,we do have a lot of partners.</p>
<p>There's a lot of like managedservice partners that we work withwho bolt on kind of these attacksimulationofferings into their platformand then allow them to have that value.</p>
<p>But the perspective it gives themfrom a managed service, like an MDR,really gives them a ton of insightinto the organization to help thembe better at offering those services.</p>
<p>Now that that that makesthat makes a lot of sense.</p>
<p>Yeah. Now I have another question.</p>
<p>You talked about the entitiesand all that stuff.</p>
<p>What about if I have all of my stuffencrypted?</p>
<p>Are he checking for encryption?</p>
<p>Because Intel, we've gotsome cool technology around encryptionlike memoryand use encryption right in SGX.</p>
<p>Are you guys looking downat that level too?</p>
<p>So even if someone infiltratedso what they can't seen.</p>
<p>Yeah.</p>
<p>So that's a really interesting point.</p>
<p>We just acquired a company called Cyber</p>
<p>Observer and cyber observerkind of is more on the controlsand protection aspect of it.</p>
<p>So what we did before iswe kind of ignored encryptionor we ignored kind of security controlsaying, Hey, this risk is still here.</p>
<p>So what they ended up being ableto download or access an encrypted blob.</p>
<p>They shouldn't have been able to do thatin the first place.</p>
<p>And there's risk to that because Imean, we're talking about encryption.</p>
<p>I mean, we know that the postquantum world and being ableto kind of be able to startbreaking encryption is not that far away.</p>
<p>So we don't want to have any data loss,even if it is encrypted.</p>
<p>But now through this acquisitionof cyber observer,cyber observer has API integrationsinto different cloudenvironments, the different securitycontrols, both cloud and on prem.</p>
<p>And now they can assess whether or not,hey, that file that we simulateda compromised on waswe had a simulation that there wasthe acceleration that happened,but cyber observer was able to sayit was encryptedso you don't have to worry about it.</p>
<p>And then also things likethere was these three security controlsthat probably would have made it harderfor that to happen.</p>
<p>So then we address itand rate our our complexity factor.</p>
<p>So now with the insight of cyber observer,we could say, hey,without cyber observer, it looked likethis was a really easy attack.</p>
<p>But now there's this encryption to break.</p>
<p>There's this EDR solutionyou have to bypass.</p>
<p>And so it now because cyber observertold us that we're going to saythat this is still technically possible,but it is something that'sgoing to be more complex than somethingthat doesn't have that.</p>
<p>Okay.</p>
<p>That that makes a lot of sense to me.</p>
<p>So with without this new acquisition,you guys made it.</p>
<p>Can I get access?</p>
<p>Yeah.</p>
<p>Basically now it's like, Oh,</p>
<p>I got access, but it's guarded.</p>
<p>Yes, exactly.</p>
<p>I mean, I've always.</p>
<p>I can't understand it or, you know, what.</p>
<p>I've always referred to,like security controls as safety netsbeing like, hey, if something bad happens,this will protect you.</p>
<p>And so we've never really evaluatedthe safety net in the aspect of security.</p>
<p>So we've always said like,hey, this is possible.</p>
<p>You probably shouldn't careif there's a safety net or not.</p>
<p>Like this is something that's badthat could happenand I don't want to rely on thatsafety net.</p>
<p>You should rely on the actual postureof it in general without kind of falling.</p>
<p>So we would address those things firstto make sure you never have to leveragethe safety net.</p>
<p>But now we're at least kind of consideringwhether or not the safetynets exist and how strong they areand can they help you?</p>
<p>Because now we actually have that insightthrough our cyber observeracquisition.</p>
<p>That's pretty cool.</p>
<p>That'sthat's a nice addition for you guys.</p>
<p>Another thing that comes to mind,</p>
<p>I don't know if you guys handled this.</p>
<p>It's micro segmentation motionor controlled.</p>
<p>I'm talking to a companynow called Felicity.</p>
<p>Really cool stuffwhere they're controlling at layer twoand layer three where they're saying,</p>
<p>I'm getting rid of VLANs completelyand I'm controllingtraffic between devices directly.</p>
<p>Do you guys bring that into play too?</p>
<p>Like on the networking sidein micro segmentation or or you say, now</p>
<p>I got access and if these two machinescan talk, you're, you're yeah.</p>
<p>Yeah.</p>
<p>So we do play in that spacekind of when you're talking about likethe targeted use case, that would be onewhere it's saying like, hey, I want to seelike how well my micro or macrosegmentation is actually in our help.</p>
<p>So yeah, we do take that into account.</p>
<p>The way that we do it is most of the timeif we are sayingthat there is some sort of attackthat's happening between two machinesor there's a vulnerability being exploitedbetween two machines, we'lllook at the relevantport number that that service runs onand the exploit that it's running on.</p>
<p>And we will attempt to,through a handshake to see like, hey,can I talk on that appropriateport number?</p>
<p>We don't passany data, there's no exploit happening,but we are confirming connectivity.</p>
<p>So whether you're using a Lumiaor guard, a call or whatever,the micro or macro segmentationthe solution is,we will be aware of those controlsand that limitation.</p>
<p>So that wayif there is a vulnerable service running,we will have insight into,hey, these are the only three machinesin the environmentthat actually exploit that vulnerabilitybecause of those controls.</p>
<p>All that that is says, Yeah, cool,you guys have some really amazingtechnology.</p>
<p>Yeah, it's relevant and.</p>
<p>I. Would it's funbecause. Yeah, it's very real.</p>
<p>I'd be afraid to yeah, I'd be afraidto release it on my own network.</p>
<p>I did thatwhen I first started at five or so.</p>
<p>I've got four kids.</p>
<p>I know you got a lot of kids.</p>
<p>And so it's one of those thingswhere I was able to seewhich one of my kids machines putsthe most amount of risk to my network.</p>
<p>Is that storage device.</p>
<p>I've got a little synology device forall of my critical stuff is sitting there.</p>
<p>So I built all the attack pathsand figured out that my daughter Rylan'scomputer is a choke pointbecause of the way it was configuredso I fixed thoseand then made it so that way.</p>
<p>At least all of the kidscomputers risk are the same.</p>
<p>Oh, yeah.</p>
<p>Well, there you go.</p>
<p>You want to be an equal, equal opportunityparent, right?</p>
<p>All the kids computers are.</p>
<p>Definitely especially the games.</p>
<p>They play the samethe same amount of risk.</p>
<p>Hey, Paul has been a pleasure.</p>
<p>This has been wonderful.</p>
<p>I learn. I learned a lot.</p>
<p>We may probably have to have.</p>
<p>You kind of love that. Yeah.</p>
<p>Cause I especially. I want to go.</p>
<p>I really want to go deeper into OTbecause that's that'sa scary part for a lot of people today.</p>
<p>And I'm like I said before, I'mdoing a lot of research in thisin this area right now.</p>
<p>I have a lot of customers buggingme. Darren, what do I do?</p>
<p>What do I do?</p>
<p>So we mostdefinitively need to talk again.</p>
<p>Okay. Yeah.</p>
<p>Next time, maybe I'll even pull upin a use case and show you the interface.</p>
<p>And with those two scenarios,that'd be fun.</p>
<p>Oh that, that would,that would be awesome.</p>
<p>Hey, thanks again, Paul.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.orguntil next time, go outand do something wonderful.</p>

</details>
