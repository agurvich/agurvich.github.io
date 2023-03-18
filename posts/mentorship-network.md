---
layout: post
title: "Mentorship network"
date: 2022-11-01 00:00:00 +0300
img: mentorship/mentorship.png # Add image post (optional)
tags: [dataviz,astronomy] # add tag
---

Traditional mentorship structures pair mentors/mentees into "dyads" but there are many axes to mentorship  (emotional, professional, scientific, social, etc.) and it is a lot to expect a single mentor to fulfill all these different needs .
<figure style="width:50%; float:right; height:auto; margin:10px" >
  <img src="{{ site.baseurl }}/assets/img/mentorship/mentor_lunch.jpg" >
  <figcaption>
    The first mentor network cohort meeting at our monthly lunch to discuss mentorship tools and strategies.
  </figcaption>
</figure>
It would be better instead if mentees had an network of mentors that extended beyond their main thesis advisor and indeed such a network was a popular request in the climate survey of our department.
As a result, CIERA's Social Justice Initiative Coordinating Committee (SJCC) organized the Mentorship Action Team (MAT). 
As a member of the MAT I used my experience from starting the peer mentorship program in [PAGSC]({{ site.baseurl }}/advocacy/pagsc/) to guide the creation of this broader mentorship program. 
In particular I emphasized the need for concrete mentorship support to persist past the initial phase of matching, and helped to build a library of mentorship resources (e.g. articles, guides, and example mentorship agreements). 
To enhance the impact of these resources, the MAT hosts a monthly lunch to discuss mentorship best practices and to give mentors and mentees an opportunity to meet.
Participation in our mentorship network is not required to attend the monthly lunch so that even those members of the department who did not sign up can benefit from exposure to the materials we provide.

Another major contribution I made to the MAT was in the matching algorithm. 
I led the code development and testing for a network graph theory approach to matching mentors and mentees based on survey data. 
The basic idea is to use a Monte Carlo approach of "randomly" assigning mentees and mentors (with some constraints that prioritize junior members).
By defining quantitative goodness-of-fit metrics on each proposed network, we can take the "optimal" network.