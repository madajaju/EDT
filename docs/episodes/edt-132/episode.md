---
layout: posts
title: "Software Defined BareMetal Management"
number: 132
permalink: episode-EDT132
has_children: false
parent: Episodes
nav_order: 132
tags:
    - Metify
    - SDI
    - Technology
    - Baremetal
    - HeterogeneousCompute
    - Compute

date: 2023-04-06
guests:
    - Darren W Pulsipher

img: thumbnail.png
summary: "In this episode, Darren interviews the founders of Metify, Ian Evans and Mike Wagner, about their unique approach to bare metal software-defined infrastructure management using the Redfish standard."
---

{% include soundcloud.html id="edt132" title="#132 Software Defined BareMetal Management" %}

{% include youtube.html id="ecB9dPexjIM" %}

---

With over two decades of experience in the data center space, Ian shares his insights on optimizing infrastructure, automating server management, and streamlining different components in a data center. On the other hand, Mike, who previously worked with IBM and Red Hat, focuses on consultative selling and channeled-led sales to better understand the problems and patterns of enterprises in operating their data centers. Together, they created Metify in 2020 to provide automation solutions for managing servers, storage, and network devices in data centers, despite the rise of public cloud services like RWC Azure and GCP.

## Datacenter Automation

Automating data center management can bring on-prem management closer to a public cloud experience while reducing costs. One of the vital elements of this transformation is standardization and open standards like the DMCA redfish specification in making this automation possible. The ubiquity of this specification across enterprise-class motherboards has made it accessible for all players to integrate with it. Financial pressures and user demand are essential in pushing OEMs toward implementing these open standards. Overall, automation and standardization can help data centers compete with cloud service providers on OpEx costs while improving server management capabilities.

Datacenter efficiency can be improved using tools that allow automation and integration with standard frameworks. The hardware providers face pressure due to technology commoditization, so they must differentiate themselves by offering similar scaled-down white box servers. Metify provides a single pane of glass to manage any manufacturer's devices as long as they are BMC enabled and adhere to the Redfish specification. There are emerging standards to manage small devices through redfish; the question remains about how far the extensibility gets down to the networking-specific parts of the stack.

## Hybrid Cloud

The rise of hybrid cloud strategies drives how companies manage their data centers, edge, and cloud environments. Public cloud growth is significant; however, there is massive growth in private cloud spaces. Metify provides a more cloud-like experience from an operations standpoint, allowing sysadmins to manage their edge, data center, or multiple data centers all through a standard API. Keeping APIs open and standardized is essential for customers to use familiar management tools like TerraForm and Ansible. Hybrid cloud technologies enable companies to optimize cost, governance, security, and efficiency.

One of the dangers of an open standard can be vulnerable to security breaches without proper command and control measures. Metify addresses this problem by placing audibility, authorization, access, and controls to the open standards to provide a systemic approach to managing bare metal across heterogeneous hardware. Metify’s product focuses on providing a level of control to prevent undesirable incidents, and they integrate with workflow management tools for automation.

## BareMetal SDI

Many modern data center technologies rely on virtualization as the foundation of their management control plane. However, bare metal management remains a traditional, manually intensive task. This unique approach to private cloud infrastructure doesn't rely on virtualization. Instead, it uses the software-defined infrastructure approach for bare metal management, allowing for a mix of bare metal, VMs, and containers. This approach enables system administrators to manage the underlying infrastructure more effectively and provide a frictionless cloud-like experience. This approach can support heterogeneous computing environments, where CPU, GPU, FPGA, VPU, and NPUs can be leveraged for multiple workflows. With Redfish and an extension of the schema, Metify can easily control new devices, and they see the expanding ecosystem as incredibly valuable for product development. 


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsipher, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people processand technology.</p>
<p>He and Mike, welcome to the show.</p>
<p>Thank you.</p>
<p>Good to be here.</p>
<p>Hey, Ian, you're the CTO of Metify.</p>
<p>Let's hear first from you.</p>
<p>Give me a little bit about your backgroundand how you got started.</p>
<p>Sure.</p>
<p>So I have actually worked in the datacenter space for a very long time.</p>
<p>I've probably been in it since 1999,and throughthat I've worked in different rolesanywhere from engineering rolesup through systems architecture.</p>
<p>And yeah, it's just</p>
<p>I've focused on all the different domains,storage, network data center facilities.</p>
<p>And one of the thingsthat I've learned overthe years is how to optimizesome of that infrastructure.</p>
<p>And we're really going to talk to youabout today is what we've created,you know, something that really gets downinto the data center,deep into the data center,and allows you to automate differentaspects of it from servers to storage upthrough network devices and so forth.</p>
<p>Hey, before we get startedthere, though, Mike,tell us a little bit about your backgroundand then why you hooked up with Ian hereto start Modify? Yeah, sounds great.</p>
<p>So I started with IBM many, many moons agoand I was a network engineerand from there I actually stayed with IBMfor quite some timeand shifted into direct sales.</p>
<p>So working a lot with</p>
<p>Enterprise isand getting a look insidetheir data centers,understanding the problems that they face.</p>
<p>Consultative selling, of course,trying to understand the patternsand what it takes torun and operate a data centerand do the things that you need to doto keep the company going and then toeventually use it as a competitive edge.</p>
<p>So that led me to going to Red Hat,and I spent several years at Red</p>
<p>Hat as well, and Red</p>
<p>Hat introduced me to the channel side,which was really, really cool.</p>
<p>So I went from direct salesinto really channel led sales exclusively.</p>
<p>And like I said,that was really apertureopening for me and a fantastic experience.</p>
<p>It was through thatthat I actually met Ian.</p>
<p>He was with one of our top businesspartners, a very large multibillion dollarorganization,and that led directly to solutiondevelopment and the launching of Modifythree years ago.</p>
<p>So that'swhat got me here. Well, three years ago.</p>
<p>So you guys have known each otherfor how long?</p>
<p>Five, six, six years now?</p>
<p>Yeah, Five and six years.</p>
<p>Yeah. Yeah, that's.</p>
<p>That's awesome.</p>
<p>Yeah.</p>
<p>And you're still talking to each other?</p>
<p>Yeah. Okay.</p>
<p>I've been in startups before.</p>
<p>I've done three startups, and.</p>
<p>Yeah,</p>
<p>I don't talk to any of those founders.</p>
<p>Oh, wow.</p>
<p>Yeah, that's.</p>
<p>That's a show on to its own.</p>
<p>I look forward to having our little help.</p>
<p>Yeah, that'll be an interesting show.</p>
<p>We'll have to do thatone of these days, you know?</p>
<p>So what led you guys</p>
<p>What led you guys to create modify?</p>
<p>You talked aboutoptimizing the data center.</p>
<p>So there's a big elephant in the room,and it's called RWC Azure and GCP.</p>
<p>Yeah.</p>
<p>So if if I'm going to be the devil'sadvocate here, I'm going to say,why in the worlddo I need to automate my own data center?</p>
<p>Data centers are dead, but hey, WC comesand tells me that all the time.</p>
<p>Yeah.</p>
<p>Yeah.</p>
<p>Well, I thinkit, I think there's there's a lot to thatthe automation piece ofit is really aroundall the components in the data centeris really be the big oneright now as it stands, you have all thesedifferent problems you have to deal withwithin the data center,you know, different,you know, with Supermicro, Dell, HP,</p>
<p>I mean, you go down the list, right?</p>
<p>There's just a ton of different servers,a lot of different products, and each onekind of has its own specific managedmanagement toolset associated with it.</p>
<p>And while there's a state, there's openstandards coming togetherlike redfish,you know, where you can issue onespecific commandthat will do something on all the servers.</p>
<p>That's great,but you still have to fall backto all those tools, you know, to managefull lifecycle those servers, right?</p>
<p>So I think for for usand where I really view it isif you're going to talkabout the data centerand you're going to build a successfulinfrastructure footprintthat's fully automated,you need to be able to takea lot of those toolsand bring them together, which then bringsyou closer to an experiencethat you would see on the public cloud.</p>
<p>There's less emphasis on the underlyinginfrastructure, less focuson the individual pieces for your,you know, anywhere from a firm updateyou have to do on a server,which is time consuming.</p>
<p>Sometimes that's still very mucha manual process.</p>
<p>All of that really needs to be wrappedinto what I considera single stream of automation.</p>
<p>And then there needs to be somethingthat effectively, you know, kindof almost establish like a single paneof glass server over that entire thing.</p>
<p>So, so so you're cutting outbecause a lot of the complaintsthat people have on whythey want to move to the cloud is speed.</p>
<p>Yeah. And OpEx cost, right?</p>
<p>I can't find the right people.</p>
<p>They cost too much,too much variability in my data center.</p>
<p>And you guys have kind ofcome in and said, hey, let's automateas much of that as we possibly can.</p>
<p>We can run it more efficientlyand so you can compute your own datacenter can compete with the cloud serviceproviders on OpEx cost for sure.</p>
<p>On OpEx cost, right? Yeah, Yeah.</p>
<p>Your overall costscould actually be cheaper in a data centerusing a tool like what you guys have.</p>
<p>Is that right? Exactly.</p>
<p>And that's that's a really important pointbecause there's an absolute breakeven point.</p>
<p>What I whatwe loved about the space in particulargetting getting very low was,first of all,it wasn't possible to do what we're doingsix or seven years ago.</p>
<p>Right.</p>
<p>I mean, because open standardsand the promise of open standardsjust became real.</p>
<p>Essentially in the last five years.</p>
<p>The DMCA came out with the redredfish specification.</p>
<p>The red Cross specification.</p>
<p>Ian bet on it early.</p>
<p>He saw the potential for it,wrote a thesis.</p>
<p>As soon as he showed it to me,</p>
<p>I was like, Holy moly, you're right,this is beautiful.</p>
<p>We can do something with this. And,and we just started workingfrom that point and with the ubiquityof the red four specification nowacross all the motherboard manufacturers,all the motherboardsthat are going out at the enterpriseclass have the VMC built into the boardthat adhere to the retro specification.</p>
<p>All the players just got in line with it.</p>
<p>Okay.</p>
<p>So and this is why do you thinkwhy do you think that is, though,that they've finally got in line?</p>
<p>Because the redfish spechas been out for a long time.</p>
<p>Yeah. Five years. Six years now, yeah.</p>
<p>So it just took off.</p>
<p>So, you know, I think that it wasled by the industry because so</p>
<p>HP and Dell are on the board of the MTFand the guys there.</p>
<p>So they had big champions to begin with.</p>
<p>They recognized that there was a needto have this low levelcompatibility acrossmultiple different hardware profilesto allow for other tools to come inand do what they need to doand integrate with the products in waysthat they couldn't doif it was strictly proprietary.</p>
<p>So and they also saw aheada bit on the white box side, right?</p>
<p>Because the white box guys are coming inproviding this low levelavailability without all the expensiveproprietary tools necessarily.</p>
<p>So you don't want to get pricedout of a game.</p>
<p>And so there was, you know,financial pressures as well as openstandards, pressures from the usersto allow them to do these things,self-service outside of,you know, expensive proprietary toolsto always have to purchaseand maintain in order to run these serversthat they've already purchased.</p>
<p>Right.</p>
<p>So lots of different, you know, pressureshappening to make it all come together.</p>
<p>Yeah, that's absolutely correct. And</p>
<p>I think I'll add a couple of things to it.</p>
<p>One is, you know, there are good restfulstandard was still very much absent.</p>
<p>I mean, you use tools like PMIthat was very common.</p>
<p>Problem with PMI is that, you know,you have security concerns with it.</p>
<p>You know, when you start to deal withthings like the DMG redfish standard,you're actually full rest with that.</p>
<p>So, you know, you'recommunicating a secure manner.</p>
<p>And once people start to see thatthere was actually a serious specificationthat had a consortiumbacking it, like Mike mentioned,all the major OEMs are on board.</p>
<p>You know,</p>
<p>I think they started to take it much moreseriously in terms of implementationand what they could do with it.</p>
<p>And after they saw the capabilitiesand how extensibleit was being, it was, oh, data compliantand there's all these thingsthat really enhance the overall capabilityof server management that really helpedkind of seal the standard.</p>
<p>I think it was just a matterof seeing some of the big guys go in on itand then a lot of the other onesstarted to follow.</p>
<p>And now you see it as,you know, kind of the common standard.</p>
<p>Do you think there'ssome pressure on the OEMsto do this as well to to help improvedata centerefficiency On the optics side, yeah.</p>
<p>So they can compete against cloud serviceproviders because. Yes.</p>
<p>Yes. Right.</p>
<p>I mean, I mean, ultimatelythat's their biggest competition is IWC aswell, as I mentioned.</p>
<p>What they ultimately what it comes down tois everybody has their own tools.</p>
<p>You know, a lot of people have their ownautomation frameworks, right?</p>
<p>They want to be able to use those tools.</p>
<p>They want to be able to integrate thosewith the standard.</p>
<p>So I think that,you know, it really helped quite a lot.</p>
<p>So, you know, that's what might go ahead.</p>
<p>I would just want to know for sure.</p>
<p>I mean, you know,the pressures and theand the commoditization, right?</p>
<p>The technology commoditizationcurve gets everybody eventually.</p>
<p>So the hardware providershave been facing this for some time.</p>
<p>So what do you do to differentiate?</p>
<p>Well, sometimes it's join the herdand make sure that you are that you havesimilar offerings, in this case,more of a scaled downwhite box server that across the board.</p>
<p>Now HP, Dell Supermicro kind of wasthe original heavy in the space, right?</p>
<p>Well,they're trying to take on the inspirationthe quant isthey want to make sure they're not givingthe market weight to the hyperscale.</p>
<p>And especially at the tier two level,there's a number of opportunitieswith large enterprisesthat want some of the resilientresiliency featuresin Dell servers, the fantastic servers,but they also want to be able to automateand do the thingsthat they the way they like doing themat a very at a low level.</p>
<p>So what our tool allows them to dois for the first timehave a single pane of glassthat can heterogeneous sleep providelights outmanagement across any manufacturerand that's not just so serverstorage, networking and really any devicethat's BMC enabled and adheresto the red specification.</p>
<p>So we've done some really cool stuffon the edge as well,which is you're going to ask about aboutthe edge because that's a huge concernthat a lot of my customersand my listeners have ishow do I manage the edge?</p>
<p>Because it's highly heterogeneous, itsconnectivity is questionable.</p>
<p>Yeah, right. Yeah.</p>
<p>And but I still want to be ableto push patches outlike firmware patches or BIOS patches out.</p>
<p>Yeah. And do that in an effective way.</p>
<p>So you guys provide kind of a commoncommon management plane that is longas you said it was only BMC and redfish.</p>
<p>If I can I can take a lookat everything then Yeah yeah, yeah we do.</p>
<p>And we even took it farther during COVIDin, in Ian's neighborhood,there were some teachers that were havingtrouble connecting to the Internetand they because they had these new well,they had broadband issues, right?</p>
<p>So they're real broadband users.</p>
<p>He lives in the Blue Ridge Mountains,beautiful granite range.</p>
<p>Not exactly easy to get a signalthrough there.</p>
<p>Dense forest as well, densely forested.</p>
<p>So, you know, we saw an opportunityto help out the local community did that.</p>
<p>And, you know, we built another productthat works really well with Mojo platformand that's called Photonas photon router.</p>
<p>And it's a it's a it's a proprietary</p>
<p>I mean, I should say it's ait's a very unique built inhas got a lot of skill in this area.</p>
<p>He was a distinguished engineerat Verizon prior to joining by priorto launching Modify anda lot of a lot of skilland expertise in the space.</p>
<p>And what he created was a rather amazingrouter that could do a hell of a lotwith less from a bandwidth perspective.</p>
<p>So taking that, you know,sort of next step from core edgeand then into the customerpremise is where we've taken itall the way, so to speak,and it's all provisionedand maintained by module platform.</p>
<p>So so that's interestingbecause you brought up network.</p>
<p>Yeah.</p>
<p>And do you do network routers, Dothey talk redfish as well.</p>
<p>Can I.</p>
<p>Well at that lower level, yeah.</p>
<p>So it's really interestingif you look at you knowlike in the stand up space,you look at some of the white box,which is, you know,there is emerging standards to managesmall devices through redfish becauseat the end of the day, a lot of those are,you know, x86 64 boxes are,you know, they Yeah, yeah, yeah.</p>
<p>We hope they're using.</p>
<p>Yeah, exactly right.</p>
<p>They are.</p>
<p>So with that, there's really no reasonwhy there can't be a VMC in there.</p>
<p>Expose some of that functionality.</p>
<p>The question is, ishow far does the extensibilityget down to the networking specific,you know, you know, stackparts of the stack and you know, you see</p>
<p>Yang to redfish, you know where you can dothings with with Yang in that top.</p>
<p>And that certainly lends itself to that.</p>
<p>But you're also starting to see morenative capabilities rolled in.</p>
<p>So it's our hope, you know, as the redfishstandard does continue to emergein networking devices,we start to see more coverage for whatwe considerjust white box type of switches.</p>
<p>Yeah, So so</p>
<p>I'm still wrap my headaround this whole thing.</p>
<p>Yeah.</p>
<p>Most organize Asians that I work with nowthey have what I call a multi hybridcloud strategy. Yes.</p>
<p>Where I have data center,</p>
<p>I have edge, I have cloud. Yes.</p>
<p>You guys don't work in the cloud, right?</p>
<p>Becausethe clouddoesn'tlet you guys manage their hardware, right?</p>
<p>That's right.</p>
<p>That would be a bad thing, right?</p>
<p>Oh, yeah. I'mgoing to I'm going to knock every one off.</p>
<p>There's one serverso I could take control of it.</p>
<p>But you guys can provide aa much a much more cloud likeexperience from the operationsside of things like my sysadmins.</p>
<p>Yeah, I can now go to one place and managemy edge, my data centeror multiple data centers, you know. Yeah.</p>
<p>All through all through a common</p>
<p>API, right.</p>
<p>Yeah.</p>
<p>That's great because you mentioned the APIand that's really the key is that we,we, we make the product extensiblein that way that the API is exposed.</p>
<p>So if there is a set of automationsas an example, that do certain thingsin the public cloud and there'ssome elasticity or there's requirements,it needs to reach back into the hybridcloud or private data center.</p>
<p>You know, we're working basicallycustomers are working both those APIs.</p>
<p>And so those two systemsare kind of working in tandemwith each other to do certain things.</p>
<p>So we see as long as we manage the API,we have the API exposed.</p>
<p>You know,the customer can do certain thingswithin that hybrid environmentthat certainly pertainto the private data center in in tandemwith their public cloud deploymentsof because of that API.</p>
<p>Does that meanyou guys have integrations intomanagement toolsthat people are already used to?</p>
<p>Yeah.</p>
<p>So it's a very common use casewhere we kind of the way we look at ourthe way we look at the APIs,we want to keep that as openand as standardized as possible.</p>
<p>So if customers want to be able to take,you know, they have TerraForm,they have Ansible,whatever they're using, right?</p>
<p>Yeah, they can essentially use our APIlike they would any other API,and they can build their ownspecific automation framework that workswith a bunch of different thingsthat Mojo might not even manage.</p>
<p>So, you know, that's that'sbeen a huge focus for us, is keeping thatas accessible and open as we possibly canto facilitate exactly what you mentioned.</p>
<p>All right, cool.</p>
<p>Mike, I know you're etching your kitchen.</p>
<p>Yeah.</p>
<p>There to say something so well,so the hybrid experience,</p>
<p>I mean, it is all hybrid.</p>
<p>So when we talk about youmentioned earlier,one of the first questions was publiccloud growth.</p>
<p>Everyone saying the data centers deadmean.</p>
<p>The fact is the growth in data centersin North America last year,</p>
<p>Okay. A good percentage ofthat was hyperscalers.</p>
<p>But there is also a massive growthin the private cloud space.</p>
<p>So and this isthis is an area that we we've always seenand it's been very consistentacross the years. Yes.</p>
<p>The public cloud is growing,the hyperscalers are growing faster,but the growth of the enterprisesis continuing.</p>
<p>It's not shrinking. It's growing.</p>
<p>So there is a moment whencompaniesrecognize that their public cloudinstantiation is that's a big bill.</p>
<p>There's a there is a specific pricerelated to that ease of useand functionality, as well as being ableto turn things on and off.</p>
<p>So there's a breakpoint.</p>
<p>And from a OpEx perspective,it's becomes much more efficientand palatable for a CFO to say,let's buy the equipment or write it offand we know that we can use thiswell enoughto do all the things that we needed to do.</p>
<p>Okay. Yeah. And you can watch that.</p>
<p>You can watch that from a priceperspective, you know, save millionsand millions of dollars a yearwhich which there's, you know, very publicexamples of like Dropbox was a big onea couple of years ago.</p>
<p>And this idea of cloud repatriationis only picking up steambecause you know the Yeah,you guys well, speaking of, you know,</p>
<p>I was a grandmother who just passed</p>
<p>You're the founder of.</p>
<p>Yeah Gordon</p>
<p>Gordon Moore passed last Friday.</p>
<p>Yeah.</p>
<p>So I mean he's been banging on about,you know, Moore's Lawand you keep making better and betterprocessors.</p>
<p>You can do more with less and less.</p>
<p>So what you can do nowand Ian loves talking about this,what you can do on a single rack nowused to be a couple rows, right?</p>
<p>So the ability to bring in what you needto run the compute that you need is oftenmuch more efficient than spinning upand dropping multiple cycles.</p>
<p>And you get that, you know,shadow it thing under control as well.</p>
<p>So there's a number of reasonsfrom security to governanceto to cost that really drive this.</p>
<p>Yeah.</p>
<p>And, and to that pointthat Mike just made on the governancethat we see that is, you know,you can createwhatever bare metal tools you wantand you can have as much extensibilityand as many systems supportwhatever you need.</p>
<p>If you don't have a good frameworkof governance and policyand security controlsthat are built around that, wherebasically the platform becomesthe custodian of the hardwareand you're you're controlling thingslike what movesfrom staging to production, you know,what can be overwritten, who can do that,who can place a specific workloadon those machines, who canplace firmware, but they can't do specificother things in the system.</p>
<p>These are all things that are criticallyimportant from the CXOs ise or, you know,somebody that is very much interested inthe security posture of their data center.</p>
<p>And since BMC is notoriouslyhave a history of, you know, securityvulnerabilities and things like that,yeah, I was going to say, yeah, that waslevel of oversight on that.</p>
<p>So we see that as critically importanthas to be there.</p>
<p>And that's where a huge focus onour productshas been for,for controlling the datacenter.</p>
<p>Yeah. All right.</p>
<p>So this I'm glad you brought this upbecause this is an issue any timeyou have an open standard, right.</p>
<p>If security wasn't thought about upfrontand like you said with BMC,yeah, I don't really know who's logged in.</p>
<p>I don't know who's made those changes.</p>
<p>Right.</p>
<p>So you guys have put command and controltogetherin in your platformso I can have an auditability trail.</p>
<p>Yeah, I know who has access to whatsets of machines or individual machines,whatever the case may be.</p>
<p>Is that is that of Tuesday. That it is.</p>
<p>Yeah.</p>
<p>We've thatin fact that was one of the areaswe put a very specific level of focuson very early in the productis that we had to have that.</p>
<p>And the Audibility trail,like you mentioned, be able to see what'shappened over a period of time,who did what.</p>
<p>You know, somebody breaks a couple serversmistakenly.</p>
<p>Well,this person or this one never done that.</p>
<p>Yeah right rightso we yeah And then we also, you knowon top of thatwe also see importance around verificationand validation, checking for for specificthings that are done to infrastructure.</p>
<p>So you don't have thingslike cascading failure.</p>
<p>If something fails,you should have some logic in there.</p>
<p>It stops it from doing that again.</p>
<p>So there's a lot of different thingswe see in that governance model.</p>
<p>But yeah, that's, that's really okay.</p>
<p>So, so I can really seesome real value here where before</p>
<p>I'm like, okay,well you put a, an interface in there,blah blah, blah, blah blah,everyone's got this.</p>
<p>But you guys are actually treatingthis like a first classprop from.</p>
<p>Right? A first class up operations thing.</p>
<p>And you've exposed the dirty little secretthat everyone has in data centers.</p>
<p>And Right.</p>
<p>Which isa handful of peoplehold the keys to all the kingdom.</p>
<p>Right? Yeah, right.</p>
<p>They really do.</p>
<p>The sysadmin undoing patch updates.</p>
<p>I'm doing all I have complete controland access of of that machine.</p>
<p>Right.</p>
<p>And you know, no one's watching me, right.</p>
<p>Yeah. And it is you're right.</p>
<p>That is a huge issue.</p>
<p>It's been a longstanding issueand we addressed thatand we yeah we offer a level controlsthat not only preventyou know some some of these lessdesirable things from happening,but also that knowthe auditing pieces of itand everything elsethat are critically important.</p>
<p>So that's that's pretty cool.</p>
<p>Have youintegratedwith any any workflow management ortools that already exist out thereor you provide, you know, those typesof workflows where I can actually dosome automation workflows.</p>
<p>Is that part of your tool or do yourely on a tool above you to do that part?</p>
<p>We do.</p>
<p>We've got so we've what we've doneis there's a couple of thingsthat we focus on there.</p>
<p>We mentioned one, I mentioned the APIso we can bring your own tools.</p>
<p>You know,we're very friendly towards that.</p>
<p>We see that as very important.</p>
<p>The other one is we do have workflowsand automation built into the product,so customers that do havea very specific requirement, let's saythey have 1000 serversacross three different ACSand they want to make sure that they'reonly provisioned on systems that have this</p>
<p>Xeon Gold 6244 processorwith two Optane drives.</p>
<p>And I'm talkingup Intel here. That's right.</p>
<p>About some persistent memoryin their existing memoryor some of our new Flex GPUs, Right?</p>
<p>Yeah, but you can, you can put thoseconstraints based profiles in thereand then you can mobilize a servicecatalog item against that.</p>
<p>So as an example, if they want to deploy</p>
<p>OpenShift, you know, they can do that.</p>
<p>They can put those constraints in there.</p>
<p>Those systems arethen presented as the systems that wouldthen be part of that automated workflowbased on those specific constraints.</p>
<p>Yeah, that's pretty coolbecause I could span multiple OEM vendors.</p>
<p>Yes. Yeah.</p>
<p>In that's in that, which is super cool.</p>
<p>What you just mentioned. That's it.</p>
<p>That, that is, that is reallythe important thing for customers.</p>
<p>They, they don't want to be focusedon all of these different OEMsall over the placeand they would really like toto focus more on,you know, the capability of the systems,what it provides, you know,not having to get into the proprietarytool required to create the pool of,you know, hardware specific itemsthat they needfor a runtime, for a workload,for an OpenShift cluster,for an Anthos cluster, for a ranchercluster, for a Tansey cluster,where we work with all of them or partnerswith all those organizations.</p>
<p>You guys have Major League Baseball.</p>
<p>And what we did for themspecifically is wasan edge based bare metal is going to sayprobably edge, right?</p>
<p>Yeah, absolutely.</p>
<p>So I mean thatthat build was a lot of fun for us.</p>
<p>And you know it'sthey're amazing customer.</p>
<p>And what's cool about Major League</p>
<p>Baseball is theyhave this advanced media groupthat they publish in a technical blog</p>
<p>I think weekly things that they're doingfrom a technical perspective,this is a really advanced group.</p>
<p>They're actually their own consultingoutside Major League Baseball purchase.</p>
<p>I'm assuming they must have beenbuilding them and you know, a lot.</p>
<p>And they said, You know what,we just need to hire.</p>
<p>You guys are going to hire you guys.</p>
<p>Yeah, well, and you know,when you think about it, Major League</p>
<p>Baseball was the they were the first onesthat really got into this big dataimportance of having as much informationthat's right.</p>
<p>Yeah. I mean, think about it. Moneyball,right? I mean, you know,the true datanuts thatknew every possible detail about,you know, what a guy batted under duress,how he batted on Monday,</p>
<p>Wednesday, Friday,where did he sleep last exactly?</p>
<p>In a hotel. It'sall correlated. Well, I'm Tonya.</p>
<p>Did he sleep at home?</p>
<p>Was it a Holiday Inn Express? There we go.</p>
<p>We had a better, better day.</p>
<p>There's data. There's data on it.</p>
<p>So, I mean, so.</p>
<p>But but what were you guys helping</p>
<p>Major League Baseball with?</p>
<p>I mean. Right. You said Edge.</p>
<p>Is this in the stadiums? Is it?</p>
<p>I mean, yeah.</p>
<p>So what?</p>
<p>Yeah, yeah.</p>
<p>So exactly that.</p>
<p>So this isthis is a perfect example of hybrid.</p>
<p>Okay. So and this is Googlewas our partner as well.</p>
<p>And the solution itselfwas every ballpark had to be refreshedwith new hardware and there'sbecause they arethat's a high value target.</p>
<p>Major League Baseball,you know, from a security perspective,they had to make sure thateverything was updated andall their security features were enabled.</p>
<p>So we provided an important layerto make that happenacross any hardware profile for them.</p>
<p>So specifically the build,</p>
<p>I don't know if we can share, but it wasso we'll just say that the builds.</p>
<p>Yeah, the builds were I believeit's five servers per ballpark across</p>
<p>North America and we now we're workingwith the minor league parks as well.</p>
<p>So that's expanded from the first yearwe're in our</p>
<p>I think our third yearnow with Major League Baseball.</p>
<p>I mean they started early with us.</p>
<p>So, so with with Major League</p>
<p>Baseball then.</p>
<p>Yeah, if I have like five serversin each stadium for example.</p>
<p>Yeah, I can, I can sit at headquarters.</p>
<p>I don't even know where headquarters is.</p>
<p>Yeah, it's,well so and I know so Kevin Beckman is thehe's their senior principal.</p>
<p>He's their senior architect who reallyspearheaded the bare metal project.</p>
<p>And so he can sit in one place and manageall these stadiums.</p>
<p>Yeah, the idea. Yeah, that is super cool.</p>
<p>Isn't that cool? Yeah.</p>
<p>So they save money on, you know,travel expenses and flying around to,you know, have to do the thumb drive,low level rebootsto get an OS upgraded or a firmwareupgrade at the specific firmware.</p>
<p>So yeah, there's just a ton of advantagesto being ableto remotely controllow level infrastructure like that.</p>
<p>So it's interestingbecause a lot of times when we talk aboutprivate cloud,we always talk about the software definedinfrastructure layeras virtualizing everythingand you guys don't doany virtualization at all.</p>
<p>We do software defined infrastructure.</p>
<p>Yep, Yes, for bare metal,which to me is even more interesting.</p>
<p>It is because I can do a mixmatch of some bare metal, some VMs. Yes.</p>
<p>Some containers. Yes.</p>
<p>And you guys, you guys can managethe underlying infrastructure.</p>
<p>That's right.</p>
<p>More effectively.</p>
<p>Exactly. Yeah.</p>
<p>Yeah, yeah. That's very cool.</p>
<p>I mean, yeah. So absolutely.</p>
<p>And you know, we, we, we love VMware,we work very well with VMware.</p>
<p>We, we just also have we workwell with everybody.</p>
<p>I mean, just like you and Intel,we work at the chip leveland you know, when you're as low levelas us, we get along with everybodybecause frankly, we just want to make itreally easy for you to access the chipsand do what you need to doat that low level to provide,you know, the pooling and automationto take awaythe manual overheadthat's required with a lot of this.</p>
<p>And once we once we get that solid,once we get that sort of cloudlike experience to be truly frictionless,so you are able to discoverprovisioned hundreds, thousands of nodesfrom a single locationeither in a data center or through hybridand into cloud, which is the cool partabout what Major League Baseball does.</p>
<p>And they publish this, like I mentioned</p>
<p>Kevin back when he published on in Medium.</p>
<p>I have you familiar with the</p>
<p>Yeah yeah yeah yeah mediumas well as their Major League Baseballblog A really great articleabout how they did itbare metal to all the stadiums, you know</p>
<p>And he put some nice diagramswith Mojo platformright at the right at the top of of andso yeah so so so this isthis is really interestingyeah because I can see you guys is helpingactuallyone big push that we have at Intelis what we call heterogeneous compute.</p>
<p>Yeah.</p>
<p>The CPU is a great general purposemachine.</p>
<p>It's been around for 5060 years now.</p>
<p>Yeah, amazing. It is.</p>
<p>But we're starting to see different typesof processors starting to emergelike visual processing units,neuromorphic processing, unit chip use,all these things.</p>
<p>You guys could easily let me managethis heterogeneous compute environment.</p>
<p>Yep, I'm down at the chip level,which is actually pretty cool.</p>
<p>Yeah,that's and, and what exposes more.</p>
<p>Yeah.</p>
<p>And what's exciting about that,what you just mentionedis that, you know, with redfish it's greatbecause it's an extension of the schemaat that point, you know, so.</p>
<p>Right. Yeah. You need,you need some additional functionality.</p>
<p>There's there's standardsboard that reviews it.</p>
<p>They go through the process of extendingthat and then next thing you know,you have some control therethat you you have and as long as thethe lifecycle on the VMs the inthe firmware supports that functionalityyou know you can certainly go inand control those new devices.</p>
<p>So we look forward with the expandingecosystem where it goes into,you know, the rack feed you,it goes into server storage.</p>
<p>I mean, swordfish is another standardthat we didn't really talk about, but,you know, that's that's very muchcentric to obviously storage stuff.</p>
<p>So, yeah, we're following all that stuffvery closely andwe see all those extensionsis incredibly valuableas we move throughthe development of the product.</p>
<p>Yeah, that's one of the best parts aboutcommunity driven innovation in general.</p>
<p>Coming from RedHatand seeing the power of open source.</p>
<p>I mean, to have that open source communityreally driving the R&D,owning the R&D budget for us and,you know, this broad community saying,okay, we absolutely know we need to addthis into the red for specification.</p>
<p>In the case of data centers, you know,they're looking at powercooling all the way back to the plug.</p>
<p>Right.</p>
<p>And you know, those are we have awe have a a green data centersolution that we're workingwith some crypto companies on.</p>
<p>And it's just the wayefficiencies are going to be driventoday and in the very near future.</p>
<p>It's just in its infancy,but it's all really being enabledthrough open standards so everyone can,you know, figure out how to workthese things together, control themin ways that are AI driven, frankly.</p>
<p>Right.</p>
<p>So you are powering up workloadsat specific times, powering down?</p>
<p>Yeah. I was going to say,depending on the bitcoin price,</p>
<p>I may throttle back my power.</p>
<p>There you go. Which is what?</p>
<p>Which is what they do, right.</p>
<p>So sure they do. Yeah.</p>
<p>No, if prices aren't right, the miningthe miners will just shut them off.</p>
<p>But there's, there's ways of having thatbe automated is, is actually pretty cool.</p>
<p>Yeah.</p>
<p>Or depending on price ofis it a cloudy day or not.</p>
<p>Do I have solar panels or</p>
<p>I mean there's a lot of really coolthingsthat you guys can actually help enable.</p>
<p>Yeah.</p>
<p>And right right on that point,</p>
<p>Darren, is the chat tea revolution, right?</p>
<p>So don't get me started on that, right?</p>
<p>Yeah. I don't know if you guys know this.</p>
<p>If you haven't, you should go.</p>
<p>Listen,</p>
<p>I interviewed Chad GPT on this podcast.</p>
<p>Wow. Okay.</p>
<p>I did not hear that yet. I can't wait.</p>
<p>No, no, you got to go. Listen.</p>
<p>Yeah, that's hilarious.</p>
<p>Oh, I mean, so. Yeah.</p>
<p>And I work with Chad. Yep.</p>
<p>Quite a bit as an augment.</p>
<p>As an augment or to the work that I do.</p>
<p>Very cool.</p>
<p>Yeah. Great stuff.</p>
<p>And when you look at what they're doingand the specializationthat's involved in the workloads, right,the compute intensive specializationthat Chatbot requires, Right.</p>
<p>With these new chips and the newframeworks that are being built around it.</p>
<p>So this is just centerof the bull's eye for us, right?</p>
<p>So we're</p>
<p>I don't knowhow much we can talk about it right now.</p>
<p>Well, we're we're we're lookingat a hosted offering, frankly,in this space to provide specializedbare metal workload optimizationacross this specificallyfor chatbot type startupsthat are looking to quickly scalethat super cool their infrastructure.</p>
<p>Right.</p>
<p>So I mean, and these are the thingsthese are the barriers of entry.</p>
<p>Right.</p>
<p>There could be some great ideasthat are out there from a chat, CBTor other, you know, GPU heavyor one of these new chip heavyworkload perspectivesthat we can quickly get up and running.</p>
<p>And it's very easy for us to spin upany of these workloads because again,we operate at the chip leveland whatever the peripherals are thatneed to be added into the box to make itoptimized to run specific workloads,we can easily do that.</p>
<p>So it's somethingthat we're we're kicking aroundand we certainly see potential for.</p>
<p>And given and given thisthis very interesting momentwith chat CBT and the potential for it,not to mention the investmentin this space,there's just going to be a needfor infrastructure, specializedinfrastructure that we are confidentwe we know how to deliverwell in possibly excuse me,possibly specialized infrastructurethat spread across the edge.</p>
<p>That's right.</p>
<p>That's right.</p>
<p>Because I don't necessarilywant to move all that data rightfrom the edge back into a data center.</p>
<p>And in some cases where I'm startingto see some really cool data architectureswhere there is no center,there is no yeah, data center.</p>
<p>It's federated acrossan edge, yetno one's in control in that in that perbox power.</p>
<p>Now you know what you can put in one forhow many cores you can in one processoryou know, and just that piece of new PCIadvancements, you know, all thesethings and VMware, it just it's amazingwhat you can put in to a small box.</p>
<p>So yes, we that point in thereand we totally recognize that andthat's absolutely true. Yeah.</p>
<p>So hey guys, this has been wonderful.</p>
<p>Any last words for our listeners today?</p>
<p>Anything you want to share?</p>
<p>Oh, boy.</p>
<p>No, I think we seem to coverquite a few bases there, no pun intended.</p>
<p>So if they want to find outmore, it's metaphorical.</p>
<p>I o correct.</p>
<p>You mean t if y dot ioa to find out more about your companyand the products that you offer.</p>
<p>Right. That's it.</p>
<p>Yeah. All right, cool.</p>
<p>Thanks. Thanks, guys, for coming on today.</p>
<p>Thank you, Daryn, very much. Daryn.</p>
<p>Thank you for listening to Embracing</p>
<p>Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital,org.</p>
<p>Until nexttime, go out and do something wonderful.</p>

</details>
