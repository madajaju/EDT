---
layout: posts
title: "Blocking and Tackling of Security"
number: 115
permalink: episode-EDT115
has_children: false
parent: Episodes
nav_order: 115
tags:
    - ZTA
    - ZeroTrust
    - Cyber Hygiene
    - Cybersecurity

date: 2022-12-01
guests:
    - Darren W Pulsipher
    - John Evans

img: thumbnail.png
summary: "In this episode, Darren talks about cybersecurity with returning guest John Evans, Chief Technology Advisor at World Wide Technology (WWT)."
---

{% include soundcloud.html id="edt115" title="#115 Blocking and Tackling of Security" %}

{% include youtube.html id="SPmsH6Ia6pM" %}

---

Foundational to all other cyber security is basic cyber hygiene. Many companies need to do these basics. This is evidenced by recent news headlines showing an uptick in attacks like denial of service attacks which should be easy to prevent.

From his experience working with the state community, John believes most attacks follow a typical kill chain. Most attacks hitting state and local governments result from exposed network protocols or email phishing. These are attractive entry points for hackers, and once they are in, bad patching practices are a typical culprit that allows them to gain a foothold and move laterally. That, combined with weak password policies or weak enforcement of password policies and an inability to recover, can lead to disaster.

In a well-publicized ransomware incident in 2019, the affected organization assumed that since they had the same amount of data in their production and backup environments, they were safe. But they had never tested their backups or recovery capabilities, which turned out to be poor. Basic cyber hygiene could have prevented this incident.

There are four essential basics that every organization should focus on. First, they must repeatedly train people to avoid phishing scams. Training might seem repetitive or mundane, but people falling for these schemes is a significant weakness in an organization. Hopefully, in the not-too-distant future, passwords will no longer be necessary.

Second, they must configure firewalls appropriately; just because RTP or network protocol ports are closed doesn’t mean there isn’t an open port in a less prominent spot. Security by obscurity doesn’t work.

Third, they must avoid bad patching policies, both with the client and the server, in the data centers and out at the edge. Many organizations are in technical debt and can’t update their old systems, so they accept the vulnerabilities and risk because they don’t want to invest in an update.

Fourth, they must have the ability to recover. Just because you know you can back up your data, can you use and recover with the backup? Testing is essential.

These four basics, along with a few others, are enough to stop almost all attacks coming into organizations that aren’t regular targets. That model doesn’t hold with organizations hit with nation-state attacks; they are doing all these things already and need additional security measures.

A consideration for many organizations is compliance versus risk. For some organizations to be compliant, they need to upgrade old machines, applications, and processes, which involves a significant cost. For organizations with a system that can’t be patched, it could take a risk-based approach that if something happens to the system, it would cost less than what it costs to upgrade the system. Of course, the secure thing to do would be upgrading to compliance, but most people think the risk-based approach is more secure. A small business could get away with this approach, but government organizations, for example, have regulatory compliance.

There are two reasons an organization might choose compliance other than a mandate. First, it’s an easy button for many organizations that don’t understand how to measure or prioritize risk. Compliance is a generalized framework to fall back on. It is not one-size-fits-all, however, because someone else is prioritizing risk in a generalized way.  Second, if something terrible happens and you have to, for example, explain it to your board of directors, you can say that you followed accepted standards.

Compliance is a bit of a crutch mentality because you don’t have to do all the risk evaluations and figure out what needs to be done. But, for example, a small municipality without a CISO could direct a sysadmin to use a compliance framework as a good starting point. If there is no CISO on hand, there is also the option of a part-time virtual CISO for guidance. John does this for clients, which is a viable path to better security.

The concept of zero trust also looks at a level of assurance versus risk. You need to understand the risk of granting someone access to a particular system or piece of data and then have a commensurate assurance that the person is whom they say they are. The heart of zero trust is a high level of security that mitigates risk.

Zero trust does not mean everything will be locked down and slow all processes. If, for example, someone wants to get in and see rainfall levels, you don’t need a high level of assurance that the person is verified. Still, if someone wants to access your organization’s crown jewels, there must be additional controls to verify identity.

Matching the level of assurance with the level of risk is challenging; it requires decision-point architecture. In the example of the risk it has in accessing a piece of data, an organization needs to know what and categorize it based on risk. For a mature organization, this can be difficult. John knows of one federal government organization that spent over two years ensuring its data was identified, classified, and tagged correctly before moving on to any decision-point type of architecture.

Identity and data are the two starting points for zero trust. In addition, it makes sense to avoid trying and doing everything at once. Starting with a piece of an organization might make the most sense, scaling it out through the rest of the organization over time.

Digital identity is becoming more sophisticated. John believes our transactions in the future will be primarily based on a zero-trust type of approach. For example, if he wants to transfer $10,000 out of his bank into an offshore account, the bank should make sure it is him and treat that transaction as if someone is trying to access a very sensitive, high-risk piece of information. If he goes to the store to buy a dollar cup of coffee, that level of assurance that it’s him purchasing the coffee is unnecessary. Many of these zero-trust principles will make their way into our everyday lives.

User behavioral analytics will also come into play. Just as a credit card company will raise a flag for unusual purchases, for example, if a system knows that John types 20 words per minute, and then all of a sudden, he’s typing 100 words per minute and trying to access sensitive information, there’s a red flag.


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren Pulsipher, chiefsolution.</p>
<p>Architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveraging people.</p>
<p>Process and technology.</p>
<p>On today's episode,</p>
<p>Blocking and Tackling of cybersecuritywith special guest John Evans from WWT.</p>
<p>John, welcome back to the show.</p>
<p>Thank you very much for having me back.</p>
<p>I had a great time last time and lookingforward to talk with you again today.</p>
<p>Well, todaywe're expanding things a little bit.</p>
<p>Well, kind of.</p>
<p>We're actually narrowing things downto cyber securitybecause we you teased me last time.</p>
<p>You teased me last time with the sharedcybersecurity model on cloud.</p>
<p>I said, John, we got to talk about cybersecurity in general.</p>
<p>There's so much tounpack here.</p>
<p>But let's first start by was talk aboutjust basic cyber hygiene, just the basics.</p>
<p>Where do you see a lot of companiesthat are failing in cyber hygieneand where do you see companiesthat are doingcyber hygienewell and what does that look like?</p>
<p>Yeah, so I think it's a great topic and,you know,foundational to all the other cyber stuffthat that that we do.</p>
<p>So it's probably a good placeto start the conversation.</p>
<p>You know, when you think cyber hygiene,it's those basic cyberthings that we all need to be doing.</p>
<p>But unfortunately,not everyone's always doing them.</p>
<p>And I think that that's been evidencedby news headlines recently.</p>
<p>You know, there's it'syou know, there's there'sthere's been an uptickeven just in distributeddenial of service attacks, somethingthat should be relatively easy to do.</p>
<p>I mean, those have been around forever.</p>
<p>We know how to defeat those, right?</p>
<p>Yeah. It's in some cloud services.</p>
<p>It's clickinga button, you know, it's, it's.</p>
<p>But I think cyber hygiene,it isn't always the cool, kind of sexycybersecurity thing happening.</p>
<p>So sometimes it doesn't get the,the view, you know, thethe level of the level of importanceisn't paid on it,that maybe it should be in a lot of cases.</p>
<p>And that's unfortunate.</p>
<p>You know, I used to be the CSOfor the state of Marylandand I still stay prettywell plugged in with the state.</p>
<p>So, so community.</p>
<p>And I think I can say relatively certainthat most attacksfollow a common kill chain.</p>
<p>So if you think about most attackshitting state and local government,it's exposed network protocolslike expose RTP, maybe somemaybe somebody put some RTP in a boxto make it easierfor them to get in to do maintenancewhen they're not not in the officemight have been forgot forgotten aboutbut that exposed networkprotocol is open to to the Internet.</p>
<p>Perhaps, and providesa real attractive entry pointfor hackers to get at once once they're inthat patch.</p>
<p>And practices are typically a culpritthat allows them to be ableto gain a foothold,start to move, move laterally.</p>
<p>Now you combine that with weakpassword policiesor weak enforcement of password policiesand then an inability to recover.</p>
<p>I was involved directly ina very large cyber incident that happenedin 2019.</p>
<p>So people can go back,they can read the headlines, whatever.</p>
<p>You can figure it outreally, really easily.</p>
<p>What it was probably.</p>
<p>But basically it was a ransomware attackwhere the affected organizationthey basically kind of said, well,we know thatwe've got the same amount of datain our production environmentand in our backup environment.</p>
<p>Therefore we must be good.</p>
<p>But they never testedtheir backups, never tested recovering.</p>
<p>So poor, poor recovery capabilities.</p>
<p>But yeah, it's a fairly common kill chain.</p>
<p>They get in from one or two places,mostly either email, which.</p>
<p>Phishing attacks.</p>
<p>Write phishing attacksor expose net network protocols.</p>
<p>There's very oftensome poor patch compliancetype of component to itand then an inability to recover.</p>
<p>So cyber hygiene is still very important.</p>
<p>We need to be, I think, putting moreemphasis on it, you know, in the future.</p>
<p>You know, this reminds me of I remember</p>
<p>I played football in high school.</p>
<p>I rememberwe had a horrible, horrible gameand we had all the talent in the world.</p>
<p>And the coach said, back to basics, man,back to basics, blocking and tackling.</p>
<p>And I hated that week.</p>
<p>That was a miserable weekbecause it was the same thingover and over again until we got it right.</p>
<p>So that sounds like if we were to saythe blocking and tacklingof cybersecurity arephishing.</p>
<p>Right?</p>
<p>Right.</p>
<p>Making sure that you're trainingpeople on phishing.</p>
<p>We get this intel all the time.</p>
<p>I get phishing.</p>
<p>I like to sayit just wants me to take more trainingbecause I'm, you know, fish bait, right?</p>
<p>That's me. Right?</p>
<p>I'm like, oh, that looks interesting.</p>
<p>Now I'm learning it takes me some time.</p>
<p>But so training your people on phishingis, number one,exposing network protocol.</p>
<p>So this is configuring your firewallsappropriately, basically, right.</p>
<p>Having something in front of themif you're going to have them.</p>
<p>Yeah.</p>
<p>I don't care if it's VPN or but don'tbut don't have it just exposed andyou know, one of the things that we foundwas, you know,</p>
<p>I'd go into agencies and say, you knowwhat, we're going to do a full port scan.</p>
<p>They would show me portscans of the standard ports and say, well,we don't have anything exposed.</p>
<p>And it's like, well.</p>
<p>No, I.</p>
<p>You mean 22 was closed in 80.</p>
<p>Yeah, just. In four for three.</p>
<p>Yeah. Those are the ones you closed.</p>
<p>Just because your standard, you know,</p>
<p>RTP or network protocol ports are closeddoesn't mean somebody couldn'thave put it somewhere else.</p>
<p>And we very often would find thatthat was the case.</p>
<p>So securitybiosecurity doesn't doesn't doesn't work.</p>
<p>I like how you said that because a lot ofpeople rely on security by obscurity.</p>
<p>But that doesn't it doesn't work.</p>
<p>No, not at all.</p>
<p>I mean, especially now with all the toolsthat that hackers have out there,even scripts, script kiddies aremuch more sophisticated probablythan they were just a few years ago.</p>
<p>There's so many tools out there, so manyscanners available.</p>
<p>Nobody's just lookingat the standard ports anymore.</p>
<p>Yeah, another thing that you saw,the third one was bad patching policies.</p>
<p>You're talking about client patching,but also in the server,in the data centers as well.</p>
<p>And even out on the edge, right?</p>
<p>Oh, absolutely.</p>
<p>Absolutely.</p>
<p>We have you know,</p>
<p>I imagine there's a lot of organizationsthat have we were talking abouttechnical debt last time a little bit.</p>
<p>Yeah.</p>
<p>And I imaginethere's a lot of organizationsthat have acquired a lot of technical debtin certain systems,and now they're at a pointwhere they can't even update those systemsbecause.</p>
<p>The software has been eold, right?</p>
<p>Yeah.</p>
<p>So they know that they have to run on thisoutdated operating systemthat has all these vulnerabilitiesassociated with it.</p>
<p>And it's just a risk that they acceptbecause they don't have or theythey don't want to invest the moneyinto updating this system.</p>
<p>It's a large undertaking, perhaps, butso they're just sitting out thereas known vulnerabilities.</p>
<p>So would you say if and the other.</p>
<p>I want to quickly go over the other ones.</p>
<p>I want to kind of the weakpassword policy.</p>
<p>I totally get it. I'm horrible at this.</p>
<p>If you hack one of my passwords, you canfigure out all the other ones guaranteed.</p>
<p>And it doesn't take long.</p>
<p>So we need to do a better job at password.</p>
<p>But can we get rid of passwords?</p>
<p>I know that's a whole nother story,but and this goes into digital identity,which we're going to talk aboutanother time.</p>
<p>That'd be great.</p>
<p>Yeah.</p>
<p>I'm I'm hoping that that we canin the not too distant future.</p>
<p>I think there's a lot of organizationthat are still going to be reluctantto give up their passwords.</p>
<p>But I think that agood intermediate step is MFA everything.</p>
<p>MFA everything.</p>
<p>Yeah, I think MFAeverything is a great intermediate step.</p>
<p>And then hopefully that will take usto the promised land of of Passwordless.</p>
<p>Which would, which would be nice.</p>
<p>And the last one I think is, isreally important, the ability to recover.</p>
<p>And I love how you said, yeah,oh you back things up.</p>
<p>Can you actually use the backup rightnow? Well, I've never tested it.</p>
<p>I don't know. Right.</p>
<p>Yeah.</p>
<p>I mean, when this big eventhappened in 2019, they foundthey didn't have a lotof their organizational structures,so they had the raw data.</p>
<p>Yeah, but then. Yeah, yeah.</p>
<p>What a nightmare, you know.</p>
<p>Oh, we don't have the right accountsto access that,that dataor the applications don't have the right.</p>
<p>There's, there's a whole list ofwould you say if Idid these four basic things, how,how much of the security issuesthat I'm having inmy organization would go away?</p>
<p>I think it depends on the typeof organization that you're in.</p>
<p>I think if you're talking aboutand maybe it's not for wewe chose to hit on four I think.</p>
<p>Yeah,those are the four. Of the most important.</p>
<p>Yeah.</p>
<p>But you know, maybe it's, you know,six or seven things, it's certainlyless than ten probably that we couldreally come up with a solid list and say,you know, if you're an organizationthat isn't getting hit with zero daytype threats, that isn't getting hitwith nation state type attacks,we can stop, you know,</p>
<p>I mean, you could probablystop 98, 99% of attackscoming into your organization.</p>
<p>If you do these half dozen things.</p>
<p>Well, that that model doesn't hold true.</p>
<p>If you're talking about three letteragencies, you know.</p>
<p>They better be doing all those thingsalready.</p>
<p>Anyway, that's that's that's true.</p>
<p>That's a good point.</p>
<p>I'm sure that they are.</p>
<p>But there's a lot more resources beingthrown at those types of organizations.</p>
<p>So that model doesn't hold truefor for those types of organizations.</p>
<p>But if you're talking aboutmost state,local education, small businesses,those types of things probably holdspretty, pretty true, I would say.</p>
<p>No. Very cool.</p>
<p>All right.</p>
<p>So you mentioned one thingand it was around patching.</p>
<p>Now, this is really interestingbecause this ties usinto our second topic,which is really compliance versus risk.</p>
<p>And the reason I tie this to patching alittle bit, because you mentioned before,</p>
<p>I may havemachines that I can't patch anymore.</p>
<p>So now you got a wayto be compliant.</p>
<p>I would have to upgrade all those machinesand upgrade applicationsand change my process.</p>
<p>Big cost,but what is the real risk involved?</p>
<p>So there's this this push and pullon compliance and risk.</p>
<p>And if I am completely compliant,does that mean that I'm completely secure?</p>
<p>Then there's all these questions</p>
<p>I've got in my in my head.</p>
<p>So teach me.</p>
<p>Oh, great, John.</p>
<p>Well, so you brought upan interesting use case for itbecause that's not one that peopletypically think of when they think of orwhen they start discussions on complianceversus risk.</p>
<p>What you kind of brought up is a use casewhere compliance mightpotentially lead you to the better place,which isn't a use case.</p>
<p>What I mean by that is if I've got asystem that</p>
<p>I'm unable to to patch,</p>
<p>I could make a riskbased approach that says, you know what,if something bad happens to the system,the cost of that bad thing happeningcosts me more.</p>
<p>Or I'm sorry,the costs are going upand it costs me less than what it's goingto cost me to actually update the systemin order to patch it.</p>
<p>Therefore,</p>
<p>I might just let that bad thing happen,or I might just run the risk ofof having that that that bad thing happenin that case compliant being,you know, I would be out of complianceif I tried to get into compliance.</p>
<p>It may be validfrom a risk based approach,but the more secure thing to dowould be to be compliant in that case,which is an odd kind of call out the way,because most people think ofthe risk basedapproach as being more securethan than compliance.</p>
<p>Either way, they are certainly different.</p>
<p>I think that that example shows showsthat they're different,you know, a lot of times.</p>
<p>So I have to doboth is what you're telling me.</p>
<p>I can't just I can't just say</p>
<p>I'm going to using a risk basedapproach and you can't just say</p>
<p>I'm doing a compliance based approach.</p>
<p>Well,so if you're if you're a private industry,if you're a small business,you could probably get awaywith just a risk based approach.</p>
<p>Most government organizationscan't just rely on a riskbecause there are compliance issuesor complianceregulatory compliancethat they have to adhere to. So</p>
<p>I think, you know,if we have to prioritize one or the other,a risk based approach is probablythe better choice for most cases.</p>
<p>Even in the case that we were justtalking about, about not patching,yeah, you'd be more securewith a compliance based approach,but you could also arguethat you've wasted moneyby using a compliance based approach.</p>
<p>So for a business, it's probably not the,the, the, the best decision.</p>
<p>But, you know,if you look at there's,there's been a tax out there releasedinto the wild that were,you know, rated very lowon the CD Cvss scoring.</p>
<p>And if thoseif someone had been using more of a riskbased approach, they would say, you knowwhat, we're seeing an uptick in the damagebeing done by these types of attacks,remote code executable,some of those other factors.</p>
<p>And you could use those.</p>
<p>You'd also look at your internalorganization and say, you know,what do I have?</p>
<p>What what dataand how sensitive is that data?</p>
<p>That is susceptibleto this type of an attack?</p>
<p>Do I have mitigating controlsin front of it?</p>
<p>Therefore, I don't need to prioritizeit quite as quite as high. Sousing that risk based approachwill allow you to, one,really spend your moneywhere it needs to be spentand focus your resources,where they should be focusedultimately with the goal of making itmore secure in the long run. But,you know, it'sit's it's really about in a lot ofand I would say it's mostly reallyabout that prioritizationof your resources and your moneybeing able to make a risk based decision.</p>
<p>So why even do compliancedoes it every and no, it's anhonest question why it why is governmentbecause it sounds like maybe compliancemight just bea heavy handedway of doing riskor someone's already decidedthis is too risky so you can't do it.</p>
<p>Yeah.</p>
<p>I mean, I think it's two reasons.</p>
<p>I think one is it'sit's somewhat of an easy buttonfor a lot of organizations.</p>
<p>If organizations don't understandhow to prioritize risk or how to measurerisk, it's very difficult.</p>
<p>So then you can fall back on a compliancebased type of an approach where they havesort of generalized risk for youin some sort of framework,because that's really what they're tryingto do in a lot of the cases.</p>
<p>They feel like the CIS, where theyprioritize the different controls,they're sort of trying to prioritize riskfor you, but in a very generalized way.</p>
<p>It's not a one size.</p>
<p>It shouldn't be a one size fits all.</p>
<p>They're kind of tryingto make it do that, but.</p>
<p>But their lead.</p>
<p>I see where you're sayingthey're leading you down a path today.</p>
<p>Are these types of things are risky,right?</p>
<p>You need to pay attention to these thingsand put some kind of risk measureagainst it.</p>
<p>Yeah.</p>
<p>So, you know, the other thing isit gives you a sort of a CIA position.</p>
<p>If you say, well, I followed these,</p>
<p>I follow national standardsand something bad happens, you can fallback on that when you're tryingto explain it to your board of directorsor trying to explain it to the governoror whoever you need to toto explain that that that issue, too.</p>
<p>And then thirdly, and probablythe biggest reason it's done withingovernment is because you have to do itaccording to some mandate.</p>
<p>So like state, local government,if you want your money from CMSto pay for your billion dollar</p>
<p>Medicaid system, you have to be compliantwith Marcy if you're not and you may notget your your your your funding.</p>
<p>And that's a huge amount of fundingcoming into the States. So.</p>
<p>Gotcha.</p>
<p>Well, in general, do youdo you believe that some of thesesecurity frameworks or standards, dothey help the industry as a whole,or do you see them as a crutch that,oh, I just did the complianceand that's good enough.</p>
<p>Where are you seeing that vetting?</p>
<p>Yeah, I thinkthere's a little bitof the crutch mentality.</p>
<p>I think there you know, if you look at,you know, saying it's a way to kind ofcover yourself, that that that goes backto the kind of crutch mentality, I think.</p>
<p>And then I think there's a little bit of</p>
<p>I don't want to call it laziness,a little bit of, you know,this is good enough.</p>
<p>I do this.</p>
<p>I don't have to spend the timedoing all of my risk evaluationsand really figuring things outfor what needs to be done.</p>
<p>I can just kind of followthis, this, this, this playbook.</p>
<p>So, yeah,</p>
<p>I would say I think in some waysit is a bit of a crutch having it's a.</p>
<p>Little morelet's say that I'm a small municipality,going to a compliance frameworkmay be a good start for me because I don't</p>
<p>I can't afford a C, so I just have this,you know,this sysadmin that says he likes security.</p>
<p>I can point him in this direction and saythere is a good starting point for you.</p>
<p>Right?</p>
<p>I mean, they're not all bad.</p>
<p>Yeah.</p>
<p>I mean, you know, another thingto consider and I actually do this for</p>
<p>I have a call later todayor think about it.</p>
<p>I think I moved to tomorrow actually, butso through WWTand this isn't this wasn't plannednot trying to create a picturebut you know I do virtual</p>
<p>CSO types of engagements.</p>
<p>So there's a county I'm meeting with thisweek to talk to them aboutwhere we're kicking off the engagementactually.</p>
<p>So, you know, the contractsbeen signed, everything. Sobut we actually do some,some pieces of work.</p>
<p>I do somedirectly with some different customers.</p>
<p>So I would say, you know,if you don't have the staff on hand,it doesn't have to be hundredsof thousands of dollars either to getsome part of part time of a virtual saw.</p>
<p>So we'll be able to help walkyou through sort ofsome of these risk basedand prioritization of of activities.</p>
<p>You know, so, I mean, I would say thatthat's a a a feasible pathmaybe for some of these municipalitiesalso to kind of take.</p>
<p>Great.</p>
<p>All right.</p>
<p>Let's talk a little bit.</p>
<p>Let's extend this risk basedto zero trust,because all that's all the buzz right now.</p>
<p>Zero trust is zero trust.</p>
<p>My product has zero trust,but I have a lot of ideas around thisand strong opinions about zerotrust, philosophy and principles,which I think is more important than zerotrust architecture.</p>
<p>And you and I talked about this before,and that's the same.</p>
<p>But really, when you look at Zero Trust,you're really looking at levelof assurance versus level of risk as well.</p>
<p>That's a great way to say it.</p>
<p>There's a you need to know the levelof risk with somebody or with a setwith with access to a particular systemor piece of data in you to understandwhat the risk could bewith granting access to that, if,you know,could it be disclosed or altered.</p>
<p>So you need to understand the riskand then you need to have a commensuratelevel of assurance that what's tryingto access the person or system,trying to access that that that datais who they say they areand they're supposed to have access.</p>
<p>So it's exactly what you just said.</p>
<p>It's risk of accessing somethingand assurance that I.</p>
<p>Know who that other personor entity really is.</p>
<p>Entity is and that they're supposedto have access to it. Yeah.</p>
<p>So would you say that's it in zero trust?</p>
<p>Zero Trust is high level of assurancemitigated by risk.</p>
<p>Mitigated mitigates risk.</p>
<p>That's a yeah.</p>
<p>I mean at the heart of zerotrust that's, that's what zero.</p>
<p>I mean that's really sort of what it is.</p>
<p>It's that security decisionpoint architecture that saysbased on the level of riskassociated with accessing this thing,</p>
<p>I am going to put more stringent controlsor more stringently evaluate,make sure that I have a higher levelof assurancethat this entity is who they say they areand that they're supposed to be accessingthis data.</p>
<p>So people talk about zero trust.</p>
<p>I think they get you know,</p>
<p>I think it's a term that some peopleare a little overwhelmed by at times.</p>
<p>But at the heart of it,that's really all it is.</p>
<p>So if we think practically, you know, ifif I've got somebodywho's trying to to get in to see,you know, rainfall levels,</p>
<p>I don't need to verify thatwith much level of,you know,very highlevel of assurancethat person is who they say they are,that they're supposedto have access to that data.</p>
<p>But if it's my crown jewels,</p>
<p>I need to make surethat there are some additional controlsput on that to really make surethat this person is who they say they'rein, that they're supposed to have access.</p>
<p>I really like how you describe that,because when I first heard about</p>
<p>Zero Trust, I thought, Oh,they're going to lock everything downand everything is going to havetemporal access.</p>
<p>I mean, I only have accessfor a short period of timeand high assurance on everything and knowthat this is going to be ridiculous.</p>
<p>Because if I do want to find outhow much it rained last night,they have to authenticate who I am.</p>
<p>And I can only look for 30 seconds.</p>
<p>I mean, that's just not reasonable.</p>
<p>So I love how you said that.</p>
<p>It is.</p>
<p>It's not</p>
<p>I don't trust anyone all the time.</p>
<p>It's I'm weighingthat assurance with the risk involvedin accessing an asset or data.</p>
<p>And you're the only one</p>
<p>I've heard really talk about it that way.</p>
<p>So you should write a book.</p>
<p>John Okay.</p>
<p>You made it so easy to understand.</p>
<p>Frankly.</p>
<p>No, thank you.</p>
<p>I try to.</p>
<p>That'syou know,you're not always going to have the luxuryof being able to explain it to peoplelike yourself who are, you know,very knowledgeable, very educatedin the technologies.</p>
<p>If that's the philosophy, the principles.</p>
<p>Right.</p>
<p>Matching thelevel of assurance with the level of risk.</p>
<p>How about implementing that? Is that hard?</p>
<p>Are there tools that I can just use todaythat let me do that effectively?</p>
<p>Or does this meana completely re architecture of the waythat I do access managementand the way that I doeverything that I've been doingfor 30 years, 40 years even?</p>
<p>Yeah.</p>
<p>So there's a lot to unpack in therein that question.</p>
<p>I'm going to sort of try to take it pieceby piece or say at a pretty high levelbecause there's a lot of depth,a lot of places you can go.</p>
<p>That was a big question to answer,sort of.</p>
<p>Is it hard? I mean, it can be.</p>
<p>I think it depends on the levelof maturity of your organization.</p>
<p>One of we talked aboutthe risk associated withaccessing a piece of dataas a as an example.</p>
<p>If my organization doesn't know what data</p>
<p>I have out thereand if I can't categorize that data,if I can't assign a riskscoring basically to that data,then it can be real.</p>
<p>It can be real hardbecause I know a pretty maturefederal government organizationtalking to their CTO.</p>
<p>They spent over two yearsjust making sure that they have their dataidentified, classified, taggedcorrectly before they moved on toany sort of the decisionpoint type of architecture. Soso it sounds likethe first thing you have to do isidentify your data and classify it,but sounds like that'sone of the first steps.</p>
<p>Yeah, it's it's definitely one of them.</p>
<p>You know, identityand data are probably the two big thingsthat you want to start start off with.</p>
<p>If you don't have a good handleon your identitiesand you don't havea good handle on your data,you can run those tracks in parallel,and you probably shouldbecause both of those can take quite upquite a bit of timeto get them into a placeto really move you to towardszero zero trust.</p>
<p>The other thing I would say ismaybepick up a piece of your organization.</p>
<p>Don't try to boilthe ocean. Don't do everything over.</p>
<p>Yeah, maybe pick a piece of itand work through it there.</p>
<p>Get some muscle memory work,working through it thereand then start kind of scaling that outto other pieces of of your organization.</p>
<p>It's interesting.</p>
<p>You threw in identity again.</p>
<p>Yeah, no identity.</p>
<p>Yeah.</p>
<p>This is a big topicthen I digital identity and.</p>
<p>Yeah well you know it's interesting too so</p>
<p>I'm going totransition if it's okay with with with youso digital identityyou mentioned that digital identityif you think about,you know, digital identity,we have identity proofing,making sure that this person iswho they say they are.</p>
<p>You know, we're getting intomore sophisticated ways of doing that.</p>
<p>But if we think about howthis all plays out in the future, move,move it moving forward,</p>
<p>I think our identities are going to bealmost based on our transactions.</p>
<p>I should say, in the real world,are going to be based on the zerotrust type of an approach.</p>
<p>So as a for instance, if I need toor, you know, if John is transferring$10,000, let's say, out of his bankaccount to an offshore accountsomewhere, mymy bank should make real search for that.</p>
<p>This is me trying to make thatmake the transaction just as if someone'strying to access some very sensitivehigh risk piece of information.</p>
<p>Whereas if I'm going to the storeand buying a cup of coffee,you may not need the same levelof assurance that that, you know,it's actually</p>
<p>John who's who's making this transaction,the impact, therisk associated withit is much lower in those cases. So</p>
<p>I think we're going to see a lot ofa lot of the principlesthat we're learning and or that we'redeveloping around zero trust,making their way into our everyday.</p>
<p>Life or day lives as.</p>
<p>We start to stop doing more of theof the digital identity type oftype type of framework.</p>
<p>You know,something else just popped into my head.</p>
<p>It's not just the one eventeitherthat you have to be able to identify.</p>
<p>And this is where I think we're goingto start seeing some interesting playsin a I and access over over time.</p>
<p>If Darren's acts if Darren buyscoffee every day at a certain placewhich I don't drink coffee so that shouldraise red alarms everywhere.</p>
<p>But we already see thiswith credit card transactions.</p>
<p>If I do something outside of the ordinaryof my normal buying patterns,they flag it, right.</p>
<p>We should see the same sorts of thingswhen I'm accessing data as wellinside at different classification levels,because I think you and I both know</p>
<p>I can gathera bunch of data from unclassified areasand one piece of datafrom classified areaand create top secret data. Yep.</p>
<p>And have situational awarenessthat no one else would have,which would make me a threat in that case.</p>
<p>So I think I think we're going to seean extensionto zero trust to a</p>
<p>I don't know what you would call it,but it's almost like what is your access?</p>
<p>What is your zero trust access over time?</p>
<p>And are youis that developing some kind of a threat?</p>
<p>I mean, user behavioral analytics,</p>
<p>UVA is hugely important.</p>
<p>We you're talking aboutthe concept of zero trust.</p>
<p>And, you know, that's that'spart of what you're talking about there isyeah I know some of thatsome of the super principles ofif the system is keeping trackand it notices that John Hunt impacts,you know,per minute in in the system.</p>
<p>And he's that's been pretty steady overthe course of his of his tenure there.</p>
<p>And all of a sudden.</p>
<p>He's talked for 100 words per minute.</p>
<p>Yeah, I'm type</p>
<p>And I'm trying to accessone of the most sensitive thingsthat my account has access to.</p>
<p>You know, that that that's a that's.</p>
<p>A really good that's a really good point.</p>
<p>Hey, John, this has beenabsolutely wonderful, very enlightening.</p>
<p>Thank you again for coming on the show.</p>
<p>And of course, we're going to talkabout digital identity.</p>
<p>So you got to come backor you're going to come back for me.</p>
<p>I would love to.</p>
<p>I would love to.</p>
<p>I've had a great time talking with youboth times now.</p>
<p>Digital identity is something that</p>
<p>I'm near and dear to me.</p>
<p>It's something I've been,you know, learning more and more about.</p>
<p>So I would love to come in and talktalk with you more about that.</p>
<p>Sounds great.</p>
<p>Thanks again, John.</p>
<p>And I can't wait to talk to you again.</p>
<p>Looking forward to it. Thank you.</p>
<p>Thank you for listening to Embracing</p>
<p>Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcast and site or YouTube channel.</p>
<p>You can find out more informationabout embracing digital transformationand embracingdigital.org.</p>
<p>Until nexttime, go out and do something wonderful.</p>

</details>
