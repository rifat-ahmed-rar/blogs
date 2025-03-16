---
coverImageAlt: RAR website & Blog
coverImageWidth: "1200"
coverImageHeight: "700"
datetime: 2025-03-15T16:55:12.000+00:00
tags:
  - OHSINT
  - TryHackme
  - Blog
author: RAR
type: article
title: Walkthrough/ Write-up OhSINT TryHackMe
description:
  My experience about developing my first portfolio website and a blog
  using NextJS and a headless CMS.
excerpt:
  My journey about planning, designing and developing my very first portfolio
  website and my personal blog. Thoughts about my motivation for this project and
  experiences.
slug:  OhSINT TryHackMe
featured: true
category: TryHackme
language: English
---

 OSINT, which stands for Open Source Intelligence. OSINT refers to the process of collecting and analyzing publicly available data from open sources (like the internet, social media, public records, etc.) to gather valuable information, typically for investigative or intelligence purposes.

![OhSINT](https://raw.githubusercontent.com/rifat-ahmed-rar/network/refs/heads/main/OhSINT/13.png )

If you want learn about ohsint, then [TryHackme OHSINT](https://tryhackme.com/room/ohsint) will be great for begining. Let's start:

![OhSINT](https://raw.githubusercontent.com/rifat-ahmed-rar/network/refs/heads/main/OhSINT/12.webp )
Download Image for task files. let's see what king of file this one.
![OhSINT](https://raw.githubusercontent.com/rifat-ahmed-rar/network/refs/heads/main/OhSINT/1.jpg )
Here you can see this one JPEG image data file. For image analysis, we can use [EXifTool](https://exiftool.org/ "EXifTool Official Website"). By analysis image this tools, we find many imformation such as location, time , type etc. ![OhSINT](https://raw.githubusercontent.com/rifat-ahmed-rar/network/refs/heads/main/OhSINT/2.png )

One of those information we get uncommon thing. which one is copyright. In this coptright, we get OWoodflint. Let's search this one for known about this.

 ![OhSINT](https://raw.githubusercontent.com/rifat-ahmed-rar/network/refs/heads/main/OhSINT/3.png )

 In search result, we get two links which one a [github](https://github.com/OWoodfl1nt/people_finder ) link and another one is [X](https://x.com/owoodflint?lang=en ) link.

 ![OhSINT](https://raw.githubusercontent.com/rifat-ahmed-rar/network/refs/heads/main/OhSINT/4.png )
 In X, we find a cat profile page. 
 ### our first question was What is this user's avatar of?
 Then answer of this  question is 

 ** cat
 ### 2nd question is What city is this person in?
 In X, we can't finding of this question answer. let's see our second website which one is  [github](https://github.com/OWoodfl1nt/people_finder ) 
 ![OhSINT](https://raw.githubusercontent.com/rifat-ahmed-rar/network/refs/heads/main/OhSINT/5.png )
 Here ths answer, which one 
 ** London

### 3rd questionWhat is the SSID of the WAP he connected to?
SSID (Service Set Identifier) of a WAP (Wireless Access Point) is the name of the wireless network that the access point broadcasts. It allows devices to identify and connect to that specific Wi-Fi network.
![OhSINT](https://raw.githubusercontent.com/rifat-ahmed-rar/network/refs/heads/main/OhSINT/6.png )
Again we return back X. Here, we get home wifi which one we are looking for. Bssid: B4:5D:50:AA:86:41. Lets check online get some thing or not? 
![OhSINT](https://raw.githubusercontent.com/rifat-ahmed-rar/network/refs/heads/main/OhSINT/7.png )
we get a office which one called [WiGLE](https://wigle.net/). In this website, after submit BSSID. We can view world map. As we know user live in london. So, when we see london map, we can get round circle. 
![OhSINT](https://raw.githubusercontent.com/rifat-ahmed-rar/network/refs/heads/main/OhSINT/8.png )
After we zoom in, we a wifi name. That is the answer.
** UnileverWiFi

### 4th question is What is his personal email address?
In [github](https://github.com/OWoodfl1nt/people_finder ), we can easily see the email address. which one is 
** OWoodflint@gmail.com

### 5th question is What site did you find his email address on?
Answer is 
** githuub

### 6th question is Where has he gone on holiday?
In [github](https://github.com/OWoodfl1nt/people_finder ), we also get a [website link](https://oliverwoodflint.wordpress.com/ ) https://oliverwoodflint.wordpress.com/. When we visit to this site, we can see.
![OhSINT](https://raw.githubusercontent.com/rifat-ahmed-rar/network/refs/heads/main/OhSINT/9.png )
Now we get new area. That's the answer.
** New York
### 7th question is What is the person's password?
For password, we need looking into in this [website link](https://oliverwoodflint.wordpress.com/ ) https://oliverwoodflint.wordpress.com/ source code. ![OhSINT](https://raw.githubusercontent.com/rifat-ahmed-rar/network/refs/heads/main/OhSINT/11.png )
In this code, we get a text class with entry value. Let's check this unique text. Here, we get the answer.

![OhSINT](https://raw.githubusercontent.com/rifat-ahmed-rar/network/refs/heads/main/OhSINT/10.png )
The answer is ** pennYDr0pper.!