---
layout: post
title: "Firefly: an interactive dataviz software an interactive dataviz software"
date: 2022-10-01 00:00:00 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: four_view_banner.png # Add image post (optional)
tags: [dataviz,software] # add tag
---

Firefly is a browser-based 3D interactive data visualization software for particle-like data. 
I co-created it in partnership with Aaron Geller, a research faculty member (and dataviz guru) at Northwestern's Center for Interdisciplinary Exploration and Research in Astrophysics (CIERA) where I am currently a graduate student.
<figure style="width:50%; float:right; height:auto; margin:10px" >
  <img src="{{ site.baseurl }}/assets/img/firefly/hot_accretion.png" >
  <figcaption>
    hot gas raining down onto a cold disk in a redshift z=0 Milky Way-mass galaxy, visualized with Firefly using velocity vectors, a temperature colormap, and temperature & density filters. 
  </figcaption>
</figure>
Firefly visualizations, once built, can be explored by simply visiting a URL without any prior installation. 
Making a new Firefly visualization is simple with the Python Data Pre-processor (PDPP) we provide. 
Though Firefly has mostly been used for visualizing simulations of galaxy formation (my research focus),  if you can load your data into three numpy arrays you can visualize it in Firefly!
Because Firefly runs in a web-browser, it automatically works on (almost) any operating system or device (including smartphones and iPads). 
Firefly also works in VR, combining stereoscopic views with gyroscopic controls to allow users to walk through their data in the real world using a Google cardboard. 


Firefly can visualize up to tens-of-millions of particles at once, but for even larger datasets (we've tested up to one billion particles) users can take advantage of our progressive rendering scheme which only loads data which lies in the camera's field of view. 
This is accomplished using a novel data indexing scheme in the PDPP that links the data's position in realspace to its location on disk using an octree. 
Using this method, we have visualized all of the stars in Gaia DR3, just over one billion stars.

Demos, documentation, and the code paper are all available on the [code's homepage](https://alexbgurvi.ch/Firefly).