---
layout: post
title: "Exploring Gaia DR3 with Firefly"
date: 2023-01-01 00:00:00 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: firefly/gaia_lane.png # Add image post (optional)
tags: [dataviz,astronomy] # add tag
---

FIRE Studio was inspired by a student I worked with who took a screenshot of figure from a paper and put it on their poster because they wanted a pretty image of a simulation they were studying. 
I thought to myself, this isn't right. 
The power to visualize images should belong to everyone and so I set out to write a convenient and sensible API for making publication quality images that you could plot stuff on top of. 
Thus, FIRE Studio was born. 
FIRE Studio is named as such because I love movies (science ones but also like, actual movies) and I wanted users to feel like they were in the editing booth turning knobs to make the most fantastic version of their figure/movie (now I mean the science kind) they could.
There are cameras, and "productions" (pre-built visualization scripts that people can riff off of) and utilities for time interpolating data using a novel slope-limiting scheme to avoid spurious artifacts when making high framerate movies (thanks Phil for the inspiration!).

FIRE Studio has a couple of different "modes" (or studios, as I call them).
Users can make column density projections, "two color" projections where the hue is set by one quantity like temperature and the brightness is set by another like density, "three color" projections where different quantities (usually mass in different temperature bins) are projected and colormapped independently and then the R, G, and B channels are blended, and luminosity + dust attenuation maps (mock Hubble images).
Each of these modes shares a common underlying API for setting up the image and can easily be plotted in matplotlib axis objects so you can compose or plot ontop of them. 

More information, tutorials, and the code itself can be found [on it's homepage](alexbgurvi.ch/FIRE_studio).