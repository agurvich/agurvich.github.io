---
layout: post
title: Weak gravitational lensing

description: >
  In my first-ever paper I showed that correlated noise is statistically similar to uncorrelated noise at a larger amplitude.
  <a href="https://ui.adsabs.harvard.edu/abs/2016MNRAS.457.3522G/abstract">ADS link</a>
sitemap: true
hide_last_modified: true
image:
  path:    /assets/img/subjects/research/gravlens/CN.png
  srcset:
    1920w: /assets/img/subjects/research/gravlens/CN.png
    #960w: /assets/img/subjects/research/gravlens/CN_50.png
    #480w: /assets/img/subjects/research/gravlens/CN_25.png
    #240w: /assets/img/subjects/research/gravlens/CN_125.png
---

We simulated images of weak gravitational lensing in order to see how systematic error might affect the signal to noise ratio of the image and the resulting shape estimation. In images of galaxies noise can build up along the edges and make the galaxy look “rounder” than it actually is. In gravitational lensing it is imperative to measure the “shear” (change in shape) as accurately as possible. This effect can be accounted for if one is able to identify how much noise one expects in the image and deconvolving it. We found that by naively using an “ideal” definition of the signal to noise ratio (SNR) one would underestimate the level of “signal degradation” (spurious circularization). 

<figure style="width:50%; float:left; height:auto; margin:10px" >
  <img src="{{ site.baseurl }}/assets/img/subjects/research/gravlens/corr_vs_uncorr.png" >
  <figcaption>
    Different estimators for the signal-to-noise ratio, &nu;. The separation of the red and black curves for &nu;<sub>ideal</sub> demonstrate that correlated noise is offset (i.e. "noiser") but follows the same shape. The other estimators for &nu; lie on top of each other and are therefore a more reliable estimate of SNR.
  </figcaption>
</figure>

Using this “ideal” definition we saw that noise correlations in simulated images that circularized galaxies at signal to noise ratios ~2x higher than in images without noise correlation. This sort of misidentification of the SNR shows that unknown correlation in noise can lead to a drastic misestimation of the shape of observed galaxies at the 3% level at signal to noise ratios as low as ~25 rising to the 20% level at signal to noise ratios of ~15. As precision cosmology is driven to measurements at the 1% level effects such as these will come to dominate the noise budget. Instead, we show that using more realistic definitions of the SNR allow you to correctly identify the amount of circularization expected in either the correlated or uncorrelated case, allowing you to correctly identify the SNR regardless of correlation.

For more details, see the paper.