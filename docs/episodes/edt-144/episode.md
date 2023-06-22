---
layout: posts
title: "Science Behind Digital Twins"
number: 144
permalink: episode-EDT144
has_children: false
parent: Episodes
nav_order: 144
tags:
    - edge
    - artificialintelligence
    - digitaltwin
    - iot

date: Thu Jun 22 2023 00:00:00 GMT-0700 (Pacific Daylight Time)
guests:
    - Darren W Pulsipher
    - Rob Watts

img: thumbnail.png
summary: "In this episode Darren explores the science and use cases behind digital twin technology with the principal architect of Intel's ScheneScape."
---

{% include soundcloud.html id="edt144" title="#144 Science Behind Digital Twins" %}

{% include youtube.html id="C6xDweCGboU" %}

---

Have you ever wondered how robots and machines navigate the physical world around them? It's all about accurately representing the natural world in a digital form called a "digital twin.” A digital twin has a standard coordinate system enabling different applications to make sense of a real space or environment. It's like a virtual version of the natural world, allowing more efficient and effective data reuse across systems.

Digital twins may not be a term we commonly use, but the concept is becoming increasingly popular, especially in the manufacturing, retail, and security industries. A digital twin is a virtual replica of a physical object, process, or system that can be used to monitor and control it in real time. One example is Google Earth, a highly latent digital twin of the world. However, as technology advances, there is potential for reducing latency and creating near-real-time digital twins for more efficient control and monitoring.

The applications for digital twins are vast and varied. For example, factories can use digital twins to improve safety and optimize production lines by monitoring where products and where people are for security purposes. Digital twins can also be used in augmented and virtual reality, enabling users to walk through spaces that may be inaccessible or dangerous in the physical world. Even everyday tools like Google Maps use a form of a digital twin to provide real-time traffic updates and information on accidents.

Digital twins are becoming increasingly important in the development of machine-based AI. Just like humans need spatial awareness to make sense of the world around us, machines need digital twins to navigate and interact with the physical world. The possibilities are endless for this technology, and it's exciting to think about how it may shape our future.

The implementation of digital twins requires the integration of multiple sensors and calibrating their data into a common representation or digital twin. This process can be complex and requires standard units to ensure consistency between different industries.

Interestingly, the gaming industry has inspired the development of digital twins due to their experience creating virtual worlds with complex physics engines. By adopting existing standards used in the gaming industry, such as the Universal Scene Description format, it is possible to develop a universal representation of physical spaces.

Digital twins also have the potential to enable closed-loop control in various applications, introducing near-real-time current rules to systems. Perhaps in the future, we will have intelligent scenes similar to those in the Iron Man movie, where one can speak to their home's smart assistant and control devices through it. The possibilities of using digital twins seem endless, and we will likely see more of them affecting our daily lives.

Efficiently solve complex problems in various industries. Intel's Scene Scape is a product that came from the company's efforts to develop a vision that would enable the transformation of pixel-based units into real-world units and cameras. The product is meant to help turn sensor data into virtual models of the natural world, known as digital twins, that can be used to drive better outcomes and operational efficiencies. The technology relies on multi-modal tracking and motion modeling. It can monitor and track people, vehicles, and equipment across various use cases, including transportation, healthcare, retail, and factories.

One of the exciting aspects of Scene Scape is its ability to estimate where someone will go and the next camera they should be showing up in. This is useful when trying to cover large spaces with cameras or sensors. However, there is always an error bar on the measurement, which means different sensors may need to agree on where something of interest is. To address this, Scene Scape uses a motion model to extrapolate movements, allowing for accurate tracking and monitoring of subjects.

Overall, digital twins are a technology still in its infancy, but the potential for their use is enormous. As technology continues to improve, we will likely see more applications for digital twins and more industries leveraging their use to drive better outcomes.

Are you curious about how digital transformation can benefit you and your family? In this episode of Embracing Digital Transformation, Rob discusses the various use cases for digital tools. One exciting example he brings up is using technology to track your children. While this may seem controversial, Rob argues it is a responsible use of digital tools. Monitoring your child's location and activity can give parents peace of mind and help ensure their safety.

However, this is just one example of countless use cases for digital transformation. Rob encourages listeners to think about how technology can improve outcomes for themselves, their businesses, and their communities. From streamlining processes and increasing efficiency to enhancing communication and delivering better customer experiences, digital tools can provide many benefits. 


<details>
<summary> Podcast Transcript </summary>

<p>﻿1</p>
<p>Hello, this is Darren</p>
<p>Pulsifer, chief solution,architect of public sector at Intel.</p>
<p>And welcome to Embracing</p>
<p>Digital Transformation,where we investigate effective change,leveragingpeople process and technology.</p>
<p>On today's episode, The Science behind</p>
<p>Digital Twins with special guest</p>
<p>Rob Watts, principal architect of Intel's</p>
<p>Seen Scale.</p>
<p>Rob, welcome to the show.</p>
<p>Thanks, Daryn. Good to be here.</p>
<p>I'm glad I'm glad you came. You.</p>
<p>You're workingon some really cool technology at Intel.</p>
<p>I've seen it in action.</p>
<p>It's super cool.</p>
<p>I've seen it on stage in lifedemos, super cool stuff.</p>
<p>But we're going to tease everyone and say,you got to wait.</p>
<p>You got to waitbecause we want to hear about Rob.</p>
<p>First.</p>
<p>Tell him,tell my audience your background,and then we'll dive into why,why you're doing what you're doing.</p>
<p>Well, it's kind of, you know,everybody has their story, but I come tothings from more of a physics backgroundrather than like your traditional I.T.background. Soreally,</p>
<p>I have a master's in applied physicsand did some work.</p>
<p>And, you know, I did myyou know,some graduate stuff at Los Alamos lab.</p>
<p>And then I went into sellingsemiconductors for about five years,and then that's then some entrepreneurshipand then landed at Intel.</p>
<p>So focusing more on like, you know,holistic solutions,not just one particular discipline.</p>
<p>How do we bring togetherconnectivity, wireless, Iotsensing in orderto do something really special?</p>
<p>Okay.</p>
<p>So you're a physicist.</p>
<p>Well, I have a masters.</p>
<p>That's what you learned in school?</p>
<p>Yeah, I did.</p>
<p>I did study physics or applied physics.</p>
<p>And at the time it was a concentrationand like microwave theoryand applications of of electrodynamicsand that.</p>
<p>Oh, don't get me started.</p>
<p>That was my hardest class in college.</p>
<p>Yeah. It's because I was.</p>
<p>I was a electrical engineergoing into the power option.</p>
<p>And my hardest classeswere my electromagnetic classes.</p>
<p>And you probably eatthat to eat that for lunch.</p>
<p>That's no big deal for. You, right?</p>
<p>Yeah.</p>
<p>You know how things go afternot using somethingfor a while,but the principle is remain, right?</p>
<p>Actually, one of the moreone of the more challenging classes</p>
<p>I took in grad school was plasma physics,which somehow managed to combinethe hardest parts of quantum mechanics,fluid mechanics and electrodynamicsinto into one discipline.</p>
<p>So, yeah, that's.</p>
<p>It sounds that sounds horrible.</p>
<p>I'd like to ask the class,but I'm not sure I.</p>
<p>Oh, I was happy I passedmy electromagnetics class with a C plus.</p>
<p>Yeah, I was like, That's a passing grade.</p>
<p>Exactly.</p>
<p>So. All right, So, Rob,tell me a little bit about how yougot involved in what you're doing now,which is mostly aroundmimicking the real world in software.</p>
<p>You're creating digital twins,basically, right?</p>
<p>Yeah.</p>
<p>Well, it really comes down to what iswhat are we trying to do with sensor dataand and coming at itfrom a physics perspective of how do you,you know, how can you make the dataas reusable and and valuable as possible.</p>
<p>And so what it comes down to it for me ishow do we get it in the right unitsand in standard units.</p>
<p>So like, let me give you an example. Andin a typicalapplications that uses uses video,what we do iswe run it through a deep learning modelthat's running some inferencing that drawsa little bounding box around a personor a dog or a vehicle or whatever.</p>
<p>To object detection, right? Yeah.</p>
<p>So yeah, detection draws a bounding boxor you could do fancier stuff likesemantic segmentation that actually, youknow, is connects the dots around that.</p>
<p>The, the object or like classificationwhich is saying what's in the whole image.</p>
<p>But ultimatelythe context for thatdetection is in the camera.</p>
<p>Right. Right.</p>
<p>So the interesting thing iswhen you're going to a manufacturinguse caseor health careor transportation, it's not enough to say</p>
<p>I detected something in the camera.</p>
<p>If you don't know where the camera is,the data is essentially useless.</p>
<p>When you when yousay you don't know where the camera is,you mean in the physical space and.</p>
<p>The physical world.</p>
<p>If I don't know the pose of that cameraand I can't transpose the datafrom a bounding box into somethingthat isn't real, world coordinatesthe data doesn't really mean much.</p>
<p>Oh, interesting.</p>
<p>I never thought of it that way.</p>
<p>I thought, you know,because the camera's really onlytaking a 2D picture right?</p>
<p>Right.</p>
<p>And the bounding box says, Hey,</p>
<p>I've got something in in, in there.</p>
<p>I could even say, I have Rob here.</p>
<p>I could say that right?</p>
<p>Yeah. What, what is here?</p>
<p>Yeah.</p>
<p>Where is here and what is here?</p>
<p>Yeah, I guess that matters. Yeah.</p>
<p>So I guess I guess the thing that we'retrying to answer is is three things.</p>
<p>What, where and when.</p>
<p>You know,what is it that we saw or detected?</p>
<p>Where was it and when was it?</p>
<p>And, you know, time, coordinationand, and,you know, precisiontime stamping is pretty well understood.</p>
<p>You know, you can look up an A.P.server and get a timestamp,but doing the same thing,you know,if you had G.P.S., that's helpful.</p>
<p>It gets you in within a certainradius of where you think something is,but you don't always have it.</p>
<p>You might be, you know, might be indoorsor something like that.</p>
<p>But you also don'tget like a precise pose.</p>
<p>You don't get like the actualdirection the camerais pointing or thethe object is pointing, shall we say.</p>
<p>And if you have the cameraand you have the exact pose of the camera,then thenthat's some additional informationthat essentially what itwhat we're really trying to do is,is well, let me back up.</p>
<p>If we do create like a digital twinthat's an overloaded term, but a digitaltwin or a mirror world of the real world,if we have a digital representationof that real world,the real question is how do we projectthe sensor data onto that virtual world?</p>
<p>So you on?</p>
<p>All right,</p>
<p>I got it. I got it. Done this down.</p>
<p>So I understand.</p>
<p>Okay, So, so what you're saying is</p>
<p>I've got cameras and sensors out therethat are taking pictures.</p>
<p>You're telling mewhat's at their location,but that's meaninglessif I can't superimposethat in the real worldor a representation of the real world.</p>
<p>Otherwise I can't see the real interactionbetween those objectsthat I'm detecting in the real world.</p>
<p>Yeah, maybe we can think about iteven a little simpler way.</p>
<p>Is that.</p>
<p>Is that in orderto make sense of the of the sensor data,</p>
<p>I need to know where that the virtualrepresentation of the sensor is.</p>
<p>So essentially, you know, when the sensor.</p>
<p>Right, So like at my house, I'mgoing to even dumb it downeven more At my house,</p>
<p>I got security camerasbecause someone stole something offmy porch.</p>
<p>Amazon, you know, someone stole something.</p>
<p>So all of a suddenthe ring camera was not enough.</p>
<p>And I'd put up five more cameras aroundmy house and I have them labeledright front side back, Whatever.</p>
<p>You know what that means?</p>
<p>I know what that means,but the computer doesn'tknow what that means.</p>
<p>It has no concept of exactly right.</p>
<p>So me, myself, when I'm looking at allthe cameras, I can see</p>
<p>I saw this person walk through the front.</p>
<p>Come onto my side yard, into my backyard.</p>
<p>I know thatbecause I know where I put the camerasand I name the camera front side and back.</p>
<p>Yeah, right.</p>
<p>What if you don't speak English?</p>
<p>Yeah, that's bad, right?</p>
<p>Or Mike, my computer.</p>
<p>If I wanted my computer toto watch my kidssneaking out of the house at night.</p>
<p>I have three teenagers. Right.</p>
<p>Then I want to know which path they took.</p>
<p>Right.</p>
<p>The computer can't tell me thatwithout having some notionof where those cameras arewith respect to the house.</p>
<p>That is exactly right.</p>
<p>Got it.</p>
<p>Okay, so my kids, if you're watching thisshow, Rob's going to help me catch you.</p>
<p>I'm just saying.</p>
<p>You know, it's not the first time</p>
<p>I've heard that.</p>
<p>Yeah. Oh,so that.</p>
<p>So why did you get in this space?</p>
<p>I mean, why does it matter that we havewhy does it matterthat the computer has an accurateor semi accurate representationin the real world?</p>
<p>Well, it's really about data reuse.</p>
<p>How do you how do you represent the datain a way that that more than just oneapplication can make sense of it.</p>
<p>So the idea is like if I put,you know, cameras up in a factoryfor monitoring wherewhere a product is or monitoringsomething aboutthe space like where people arefor security purposes, typicallyyou put up security cameras over hereand then you put upmachine vision cameras over there.</p>
<p>And those two systemslike one for tracking a productand another one for tracking.</p>
<p>People don't talk to each other.</p>
<p>They don't represent the differences. Yes.</p>
<p>And another one would be like</p>
<p>I put up a security camerato monitor this entry way hereand I have an HGV that has cameras on itcoming down a corridor.</p>
<p>And thenyou you know, you have a blind corner.</p>
<p>One system knows that the personis about to be run over,but the other system doesn't know it.</p>
<p>There is a digital version of somethingin a computer somewhere over hereand Robot can't talk to it, doesn'tknow how to how to connect the dots.</p>
<p>So the idea is that if you havethis digital version that is essentiallya a common coordinate systemfor everything to work in, then thethe robot can slow down because it knowsthat the person is there right?</p>
<p>It can.</p>
<p>All right. I gotcha.</p>
<p>So this commonality or this common wayof describing the real worldends up being very importantwhen I'm especially in factories rightnow, factories where I've gotsafety systems, I've got security systems,</p>
<p>I've got product quality,all these things that are running.</p>
<p>Would it be greatif they could all share the samevirtual instance of the world?</p>
<p>Yeah, I'm saying it's essentially tryingto bringthe spatial awarenessinto into the machine machine.</p>
<p>I right.</p>
<p>It's like, how do you know if,if you think about how we as humansmake sense of the world, we create thismental model of the space around us.</p>
<p>It's in 3D. It's in 3D plus time actually.</p>
<p>And we use our senses, audio touch, visionin order to build that 3D understandingof the world around us.</p>
<p>And then we can determine how to actand really,</p>
<p>I just don't see how we're going to driveforward machine based A.I.without having that spatial understandingas as one of thatcore fundamental components of that.</p>
<p>Gotcha.</p>
<p>So I really like the premiseof I think is super cool.</p>
<p>Could we leverage thisalso in the VR, AR, VR and AR worldas well, where, hey, maybe letlet's talk about Chernobyl, right?</p>
<p>If I had a accurate modelof Chernobyl and sensors currently,</p>
<p>I could go in there with a VR headsetand a robot and move around and workin that environment.</p>
<p>Without going in the environment.</p>
<p>Do you seethat is one of the possibilities here?</p>
<p>Yeah, absolutely.</p>
<p>It's it'sthis notion of being able to well,</p>
<p>I like to say air for when you're there,</p>
<p>VR for when you're not.</p>
<p>So okay yeah I like that.</p>
<p>Yeah that the amazing thing aboutyou know, I actually think aboutaugmented reality and roboticsas being closer togetherthan augmented realityand virtual reality.</p>
<p>Augmented reality and robots,they have to operatewithin the physical space.</p>
<p>They need to.</p>
<p>They need. To.</p>
<p>Yeah, VR doesn't, Right. Right, right.</p>
<p>But that makes use of datathat is capturedfrom the live sceneto create that that digital twinof of the physical space to mirrorthe physical spacethat you can walk throughin virtual reality when you're not there.</p>
<p>So there's a sort of continuumthat happens when you're in that space.</p>
<p>But then if you can store and and maintainthe history of that over time and maybe,maybe push up the data and near real time,you can ultimately walkthrough your factory,walk through Chernobyl, walk through thatarea where humans can't particularly gofor one reason oranother, as if you were therein virtual reality.</p>
<p>And ironically,the virtual reality headsetis creating a digital twin of the spaceyou're in. Yes,you could in turn go somewhere elseand then walk through and, you know,so it all comes together.</p>
<p>So I need</p>
<p>I need the sort of map and twinthat the space where I am operating there.</p>
<p>And in both cases when I'm remoteand when I'm am on premor in the in the physical scene.</p>
<p>So you've really taken your physics degreekind of to the nextthe next level, right?</p>
<p>Applied physics, right.</p>
<p>Because now you're saying,</p>
<p>I understand the physical world.</p>
<p>Do you understand,you know, our understanding of physicsin the physical worldand now you're saying, let's see if we cancapture that in the virtual world.</p>
<p>Yeah, in a in a twin of the real world.</p>
<p>What other use casesdo you see that we can usewith, with this kind of technology?</p>
<p>Is it, is itjust, it's super cool.</p>
<p>But obviously, I mean,what other things can I use for thisthis type of technology?</p>
<p>Well, I would say that there are usecases out thereright now that we use every daythat you don't quite realize.</p>
<p>But some things are more more emergentlike autonomous driving.</p>
<p>They need to work against amore real time digital twin.</p>
<p>But every time you use Google Maps,for example, you're using a digital twin.</p>
<p>You're using Oh, right.</p>
<p>Because it tells me traffic. Yeah, right.</p>
<p>It tells me accidents.</p>
<p>Exactly.</p>
<p>All right.</p>
<p>So people are already using digital twinalready.</p>
<p>They just don't necessarily call it that.</p>
<p>So there's there's a few thingsthat that you really want tothink about is one of themis like the latency aspect of it.</p>
<p>But Google Earth, for example, is a highlylatent digital twin of the world.</p>
<p>You know thatthey probably.</p>
<p>Look at the front of your house, right?</p>
<p>If you look at the front of your house,it's not the same cars that you had.</p>
<p>Yeah, a year ago or whateversomeone was visiting that day.</p>
<p>You're no longer friends with them. Yeah.</p>
<p>You're like,what is their car doing from my house?</p>
<p>Right?</p>
<p>And that's how I cut that tree down.</p>
<p>And I can't.</p>
<p>I forgot we had that tree there. You know?</p>
<p>So it's sort of a historical thing,</p>
<p>But imagineif we can reduce that latencyand get to the pointwhere your you're near real time.</p>
<p>Now we can start enabling closedloop type controls and maybe,maybe the implementation of that of thatis running closer to the scene itself.</p>
<p>And I like to think that maybe,maybe in the future will actually havethe truly intelligent scenes likein that Iron Man movie, like the Jarvis,you know, it's like it's in the house.</p>
<p>Yeah.</p>
<p>It's like you talk to him,he knows where everything isand where the robots areand knows who's there.</p>
<p>You can say, Hey,you can imagine thissituation where you can monitorwhere you are and the lights arejust kind of following youand you know, whatever.</p>
<p>You know, that real time current closedloop control aspect of it is coming.</p>
<p>Okay.</p>
<p>So, Rob, have you already set this upin your house?</p>
<p>To some extent.</p>
<p>My truth,your true applied physicists, right?</p>
<p>Yeah. It's funny.</p>
<p>One of our lead developers, Chris,he has a set up as at his house andand so he can monitor you knowwhen there's a delivery truck versusnot a delivery truckor when the mail arrived or whatever.</p>
<p>And he has he has this notificationbeing sent to his phoneand it gives a certain alertwhen it's the UPS truckor whatever the Amazon truck versuswhen it's something else.</p>
<p>And his dog has learnedwhich which sound it is.</p>
<p>So you just get inthere.</p>
<p>It is my dog uses right, my dog usesscene scape, my dog uses a digital toy.</p>
<p>Right. I love it.</p>
<p>That's a headline. So it's like,you know, it's.</p>
<p>To make the papers.</p>
<p>They learned that that it'sa certain sound so it's doing the dog'sjob for itso I think that's just hilarious.</p>
<p>That's awesome.</p>
<p>So factoriesbig, huge use cases in factories,security, inventory management,all that detail.</p>
<p>Yeah we retail Yeah</p>
<p>Can I, I mean Amazon is using itare they using something similarto this in their, in their know.</p>
<p>What are they. They're no touch stores.</p>
<p>Amazon go.</p>
<p>Like Amazon go.</p>
<p>Are they using this kind of technology.</p>
<p>Absolutely.</p>
<p>I think any case where you'reyou're having multiple sensorscoming together to try to trackwhere objects and people areand everything using different modalities.</p>
<p>I don't know of any other way to do it.</p>
<p>You really need toto calibrate all of these sensorstogetherinto the into the same coordinate system.</p>
<p>And if you were to introduce that,that's sort of commonrepresentation or digital twinor whatever you want to call it.</p>
<p>That is a fundamental way to doit, really.</p>
<p>It's just getting it into SCI unitsand think back to the physics things likehow do we get it from pixels into metersor from from pixels into a geospatial?</p>
<p>You those sorts of like thinkingabout the unitsfirstprinciples is really a good way to go.</p>
<p>I think you know that that reminds me,and you probably know the storybetter than I do.</p>
<p>There was a a probe that we sent to Marsthat had the wrong units, right?</p>
<p>It was it was feet over.</p>
<p>Rather.</p>
<p>Than meters or something like that. Yeah.</p>
<p>And because they weren't in a standard,</p>
<p>I setwhat happens every you know,we crash it right into the ground.</p>
<p>Yeah. This Well.</p>
<p>Yeah. Right into the Mars ground</p>
<p>I should say. Right.</p>
<p>And it's because we had people from Europeworking with people from America.</p>
<p>And there is just this assumptionthat, you know, of the unit.</p>
<p>So it's it's evenworse in the computer industry, Right.</p>
<p>As far as the different types of datathat's collected in the nonnon conformity to any kind ofspatial units or whatever,whatever the case may be.</p>
<p>Well,</p>
<p>I guess it depends on the the discipline.</p>
<p>Right.</p>
<p>But like with with an Iotand like the type of sensordata that comes off of Iotor even things like,like temperature and humidityand those sorts of things,some things are more maturein terms of the,the standardization around itor there's a standard and one industrythat's different than a standardin another industry.</p>
<p>Yeah, exactly.</p>
<p>Yeah.</p>
<p>So the real idea is to focus onhow do I get to as a unit and representthat bear, but also look outsideof your industry and like for example,when you're creatinga, you know, a digital twin, so calledmaybe there is another industrythat's already donethis and an example would be scene graphsfor gaming or rendering.</p>
<p>They already have a representation forfor a physical space or a virtual space.</p>
<p>And if we just say, Oh,this is just the way to transportthe data, like here for a universal scenedescription format USD.</p>
<p>Now there is a way to transport that data.</p>
<p>That's, that's standards based.</p>
<p>So let's just adoptthat and maybe extend in.</p>
<p>Is that what you guys say?</p>
<p>Because this sounds kind of funnybecause I know the answer to this,because I've, I've talked toyou guys before.</p>
<p>You guys actuallywent to the gaming industrybecause there's a lot of peopleworking in gamingand they create incredible worlds, right,that all have physics involved in it.</p>
<p>So you just went there, right, and said,</p>
<p>Why don't we just use what already exists?</p>
<p>Why reinvent the wheel?</p>
<p>There's decades of developmenthappening there.</p>
<p>And so and maybe theone thing I like to think about is like,remember, we used to play these gamesback in the day, right?</p>
<p>And really pixelated or 2D.</p>
<p>Yeah, yeah, yeah, yeah.</p>
<p>And then and thenlike the first 3D games came alongand they were really low poly,you know, it's like blocky but fun, right?</p>
<p>It's like you got a sense of motion.</p>
<p>I remember playing this is a 2D game, butplaying Prince of Persia back in the day,</p>
<p>I don't know if you.</p>
<p>Oh yeah, yeah.</p>
<p>They, they like Rotoscoped the captureof, of the player and it was so lifelikeeven though there's just pixels.</p>
<p>Right.</p>
<p>And then,and then fast forward to like todaywhere you can look at a game and, and,and it looks just like it's photorealisticand then introduce like Gans into thatand really had this like superlike indistinguishablefrom the real world.</p>
<p>I think the same thing we're going tostart to see the same thing in this mirrorworld approach is where todaythe sensor data is not that great.</p>
<p>You know, you can sort of see,see where things are.</p>
<p>It's low poly, butwe can get lots of value out of it like,like with autonomous cars or or,you know, factories or retail or whatever.</p>
<p>But with Moore's Law,with better sensing and bettercompute the fidelity of that twinand that and the additional use casesthat will come alongthat will drive this virtuous cycle of of,you know, bettersensing, better compute, better twins,more value back to being able to invest.</p>
<p>And it'll be this this massive,you know, virtuous cycle that will drivedrive this technology forward.</p>
<p>So it's what do you doyou think that the gaming industrythan the standards that they use,are they sufficient enoughto to model the real worldor they're missing things in therethat that you need to add to it?</p>
<p>Or can you take it for just as it is?</p>
<p>Well,that's that's a really good question.</p>
<p>I think thatwe should try to useas much as we can, buttypically,like a render works on a frame wise basis.</p>
<p>So it's sort of like, you know, a clock.</p>
<p>Is ticking, slices in time.</p>
<p>You know,it's like just rendering forward withwith a real world, it's a little messier.</p>
<p>You might have really asynchronouslike some low latency, somesome high latency,you know, sources of datathat all coming in at different timescales and and everything.</p>
<p>And you need to be able to coordinateall of that and sort ofbring in the accuracy of these thingsor the thethe error bars inand be able to make sense of that model itand maybedo some things like say, well,how late into something,how much time do I haveto get the data in into my model.</p>
<p>Maybe I can I can model with less.</p>
<p>I can run my my understanding of the worldnear real time at relatively low fidelity.</p>
<p>It's a little choppy,little, little chunky,but I can store all of that dataand render it in higher fidelity,you know, for historical analytics,you know, so it's definitely messier.</p>
<p>But there we're standing on the shouldersof giants here.</p>
<p>I mean, a lot of the workthat's been that's there in the gamingindustry can be reused for sure.</p>
<p>Oh, that's awesome.</p>
<p>So my my next question is that the productthat Intel has,it's called scene scape, right?</p>
<p>Something you've been working onfor for some time.</p>
<p>This is not like new stuff.</p>
<p>This is not oh, Rob did thisin his basement with a couple otherpals at Intel.</p>
<p>Tell me, I mean,is this a productthat people can look at right now?</p>
<p>Can they?</p>
<p>And then what what use casesare you guys using it for today?</p>
<p>Yeah, well,it kind of did start as something that wewe developed on nights and weekends.</p>
<p>You know, it's like a vision.</p>
<p>It really did come around saying,how do we get from pixelbased units into real worldunits and cameras?</p>
<p>And we quickly realized thatif we can separate things outinto the multi-modal tracker, along with,you know, motion modeling and everything,now we can support other modalitiesand we can make things better.</p>
<p>But yes, same scape intel,same scape is the result of that work.</p>
<p>And, and hopefully,you know, with our customersand our partners,we can drive this vision forward to,to, you know, really improve outcomesfor our customers.</p>
<p>And in terms of use cases, reallyit sort of started out in citiesand transportation,like being able to make sense of what'shappening on roadside cameras or,you know, and say, how do I attract carsfrom one camera to another or whatever.</p>
<p>But we quickly realized that that trackeruse case, the multimodal trackingis a sort of neededcapability across industries.</p>
<p>So it quickly extended into thingslike health care, for example.</p>
<p>Imagine a scenario where you can trackwhere the instrumentsare in an operating room to make sure.</p>
<p>Nothing gets left in. So yeah.</p>
<p>If I track if I track somethinggoing into the patient,</p>
<p>I need to make sure I'm tracking it out.</p>
<p>For example, that's a high fidelityuse case that requireslots of high resolution camerasto do and 3D detection and all that.</p>
<p>But really it's the same problemas trackinga person, moving in a factoryand making sure that I don'tturn on a robotwhen that person is nearby or whatever.</p>
<p>So these are safety use cases,but I think there are some someother use cases like just to improveoperational efficienciesthat that we can do sooner,you know, like or just knowinghow many people are in line at the storeor knowing if I need to turn the lightson using a common digital twinrather than special purpose sensors.</p>
<p>So I find this interestbecause you talked about multi modalitiesand one of the demosthat you guys have shown me isyou can estimate where someone'sgoing to goand the next camerathat they should be showing up in.</p>
<p>And when they don't, then, you know,because a lot of timesyou can't cover your whole spacewith cameras or sensors,but you know where the gaps arebecause you have a 3D model of it.</p>
<p>And when someone's walking infollowing a path, you know where they'reyou know, where they are in the factory.</p>
<p>That's the idea.</p>
<p>And and it's it's another another reallyanother really interesting aspect of thisis that notwo sensors agree on onwhere something will interest.</p>
<p>Right.</p>
<p>It's like there's always some error barsback to the physics thing.</p>
<p>There's always an error baron that measurement.</p>
<p>Right.</p>
<p>And so if I have if I have camerasthat overlap or other sensormodalities that that cover the same area,</p>
<p>I need to be able to reconcilethe the measurementabout where somebody is.</p>
<p>And then if I can set up a motion model,</p>
<p>I say, well, here'sthe math, here's the velocity, here'sthe maximum acceleration that.</p>
<p>So back to physics, right?</p>
<p>All comes down to physics,the maximum accelerationthat this thing can can handle or perform.</p>
<p>Then I can set upand do some extrapolation.</p>
<p>I can say, yeah, this person ismoving in this direction andthen it's probably the same personthis hour.</p>
<p>Previously,if they showed up in the next camera,if I don't have coverage in that areaor a measurement of the track.</p>
<p>So yeah, I mean the physicsdefinitely comes into it.</p>
<p>So, you know, a lot of peoplethat think about digitalwhen they say, just put cameras upand you'll know everything about.</p>
<p>Rob, thanks for explaining it.</p>
<p>It's a complex problem. It's not easy.</p>
<p>Yeah,and think about the fact that it's it's ait's a continuum.</p>
<p>It's like you have low, low latencydigital twins for real time type stuffand higher latency ones like Google Mapsthat for longer term historical stuff.</p>
<p>But really in the end, it's all goingto sort of compress into the real timeand, you know, really improve outcomesfor for a lot of,you know,</p>
<p>I hope that like a lot of technologists,</p>
<p>I hope that we can use this technologyresponsibly andand really improve outcomesfor for ourselves and for.</p>
<p>That the use cases.</p>
<p>My mind's just going crazy on use casesright now, mostly tracking my children,but that's.</p>
<p>Actually a responsible use.</p>
<p>I'm not sure.</p>
<p>That's a totally responsible rightas a parent.</p>
<p>Yeah, it's still there. It's fun.</p>
<p>I love it.</p>
<p>All right, Rob, hey,thanks for coming on the show today.</p>
<p>Of course.</p>
<p>Dan, take care.</p>
<p>Thank you for listeningto Embracing Digital Transformation today.</p>
<p>If you enjoyed our podcast,give it five stars on your favoritepodcasting site or YouTube channel,you can find out more informationabout embracing digital transformationand embracing digital.</p>
<p>Dawg Until nexttime, go out and do something wonderful.</p>

</details>
