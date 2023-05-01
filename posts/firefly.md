---
layout: post
title: "Firefly: an Interactive Dataviz Software for Millions of Datapoints"
date: "2022-10-01 00:00:00-06:00"
description: |
  Firefly is a cutting-edge 3D browser-based, interactive, data visualization software designed for tens of millions of datapoints.

img: four_view_banner.png # Add image post (optional)
tags: [dataviz,software] # add tag
---

Firefly is a cutting-edge 3D browser-based, interactive, data visualization software designed for tens of millions of datapoints.
While it was initially developed for visualizing galaxy formation simulation data (my former area of research), Firefly can visualize *any* dataset that can be loaded into three numpy arrays. 
Firefly visualizations are accessible via a URL with no prior installation needed, making it perfect for easily sharing results and ensures compatibility with almost any operating system or device, including smartphones and tablets.
Firefly also works in VR, combining stereoscopic views with gyroscopic controls to allow users to walk through their data in the real world using a Google cardboard. 
Creating new visualizations is simple with the provided Python Data Pre-processor (PDPP) which can be installed from the Python Package Index by `pip install firefly` or the latest development version can be built from source available at its [Github repository](https://www.github.com/ageller/Firefly).

# Firefly in Action: Astronomical Data Sets
<figure class="right-figure" >
  <img src="/images/firefly/hot_accretion.png" >
  <figcaption>
    hot gas raining down onto a cold disk in a redshift z=0 Milky Way-mass galaxy, visualized with Firefly using velocity vectors, a temperature colormap, and temperature & density filters. 
  </figcaption>
</figure>
Firefly has been successfully applied to various astronomical data sets, showcasing its versatility and adaptability. Some examples include:

* **The FIRE cosmological zoom-in simulations:** Firefly has been utilized to visualize the complex processes involved in galaxy formation, offering valuable insights into the evolution of galaxies.

* **The SDSS galaxy catalog:** Firefly enables users to explore the Sloan Digital Sky Survey (SDSS) galaxy catalog, providing a detailed and interactive view of the distribution of galaxies.

* **Gaia Data Release 3:** Firefly has been used to visualize all of the stars in the Gaia Data Release 3, totaling over one billion stars, demonstrating its capacity to handle large-scale astronomical data sets.

For more interactive demos and examples, visit the [Firefly gallery](http://www.firefly-viz.com/#gallery).

# Core features

## Interactive Interface Camera Controls
Firefly provides users with the ability to seamlessly navigate and manipulate their data using interactive controls. 
Using the default click-and-drag control scheme (designated "trackball" controls) users can orbit around a fixed rotation anchor and by scrolling up or down with the mouse users can zoom in and out. 
The rotation anchor can be repositioned to focus on specific regions by holding down the right mouse button and dragging to pan along a fixed plane. 
For more precise repositioning of the camera, or to explore the dataset from a first-person perspective, users can change to the "fly" control scheme (by pressing the spacebar or clicking the checkbox in the user interface). 

To make your visualization more accessible and engaging, you can also pre-define a camera path that the camera will automatically follow in order to highlight specific aspects of your data while still allowing viewers to interact with filters and colormap settings.

Firefly allows users to color and/or filter data based on an attribute
This can be particularly helpful when exploring complex datasets and identifying specific patterns or trends.
For instance, researchers interested in high-temperature regions can filter out particles below a certain temperature threshold to better analyze the 3D morphology of these areas.

## Flexible data input formats
Firefly offers flexibility in data input, supporting various file formats such as JSON, HDF5, and CSV that contain x, y, and z position data in columns as well as any number of associated scalar field values.
For other formats, Firefly's built-in Python data pre-processor (PDPP) can translate datasets into a Firefly-compatible format.
Once the data is pre-processed the PDPP also offers convenient methods for hosting instances of Firefly locally and online.

## High-performance Rendering
Firefly can render and enable real-time interactions with over 10 million particles on a typical consumer-grade laptop computer (e.g. a 2022 Macbook Air with M1 chip; which is what I use).
Firefly uses the [Three.js library](https://threejs.org/) which leverages the power of the GPU for efficient rendering using WebGL, a JavaScript API for rendering interactive 2D and 3D graphics within any compatible web browser without the need for plugins.
Using custom GLSL shaders, points can be rendered either as spheres, vectors (corresponding to an indicated vector quantity, typically velocity), or can be accumulated into a 2D histogram.
Note that if you are using an M1 mac that you have to enable hardware rendering in your browser (which is disabled by default by Apple)-- instructions for how to do this are available [in the documentation](http://firefly-viz.com/docs). 

## Customizable User Interface 
<figure class="left-figure">
  <img src="/images/firefly/app_controls.png" >
  <figcaption>
    The defeault Firefly interface for an example dataset, with all elements enabled. Each element shown here can be individually disabled by blacklisting element "urls" (e.g. `main/general/data/loadData`). A list of these urls can be found in our documentation.
     
  </figcaption>
</figure>

Firefly offers users the ability to enable or disable every individual element of the user interface to simplify the experience and reduce visual clutter.
This is particularly useful when presenting your visualizations to an audience (or incorporating Firefly into a stand-alone museum exhibit, for example).

## Advanced Visualization Capabilities:
If you want to predict how materials flow over time, you can extrapolate the particle positions along the direction of the velocity vectors by enabling the "animate velocities" checkbox.
This feature allows you to observe the expected movement of particles over a fixed period of time.

For an immersive experience, Firefly is VR-compatible, enabling basic camera controls using the orientation of a VR headset.
This feature allows users to explore their data in a virtual environment, providing an unparalleled level of interaction with complex datasets.
By combining this functionality with the other features mentioned above, Firefly can create a truly engaging visualization experience.

## Integration with Jupyter Notebooks and Remote Servers
Firefly's compatibility with Jupyter notebooks offers users the convenience of working directly within the notebook to manipulate their data and send (POST) the data to their Firefly server.
This allows researchers to efficiently explore their data in real time without the need to copy it on disk in a Firefly-compatible format.

For users with limited local resources, Firefly offers the option to access data on a remote server and stream a scene rendered on another computer.
This enables you to leverage the capabilities of a high-performance computer (HPC) to process and visualize your data, while your local machine only loads rasterized frame-by-frame images from the HPC.

## Sharing and Collaboration

Firefly is an excellent tool for sharing results with peers or engaging in public outreach for science communication.
Firefly allows users to export standalone instances of their visualizations, which can be uploaded to a personal web server or hosted on GitHub Pages.
This feature makes it easy to share interactive visualizations with others, supplementing publications or showcasing research findings on personal websites.
Since Firefly visualizations are accessible through most modern internet browsers simply by visiting a URL no installation is required and Firefly works seamlessly on various devices, including smartphones and tablets.

By sharing different preset settings files with their collaborators users can also allow collaborators to see different perspectives in the data without having to worry about explaining the control scheme or convincing their colleague to fuss with the interface.

## Try it out!

In summary, Firefly's extensive suite of features provides users with the flexibility to create customized visualizations tailored to their specific needs. 
By combining data processing and visualization, interactive controls, Jupyter notebook integration, remote server access, sharing and collaboration tools, and a customizable user interface with VR compatibility, Firefly enables users to interact with their data in new and exciting ways.

Firefly is a joint project between myself and Dr. Aaron Geller, a research faculty member at Northwestern's Center for Interdisciplinary Exploration and Research in Astrophysics (CIERA) and data visualization specialist with Northwestern's Research Computing Services (RCS).
You can find Firefly and contact us via the [Github repository](https://github.com/ageller/Firefly/issues). 
More information about Firefly along with demos, documentation, and the code paper is available on its homepage, [firefly-viz.com](http://www.firefly-viz.com).
If you're interested in utilizing Firefly for your data visualization needs or discussing visualization and galaxy formation simulations, feel free to get in touch.
