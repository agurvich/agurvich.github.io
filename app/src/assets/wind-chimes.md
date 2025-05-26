## Let's talk about interstellar chemistry.
It may not be obvious that chemistry is really important for how galaxies form and evolve, but it turns out to be a key component in determining how the instellar gas that eventually forms stars cools down and collapses into gravitationally bound clouds. 
When stuff is hanging out in space, it has to lose energy to cool down and the primary way it does that is by emitting light (we call the process "radiative cooling"). 
The rate at which material is able to emit light and cool depends on how hot it is, how dense it is, and what the material is made up of (the chemical composition). 
So when we're running these big [galaxy formation simulations](https://fire.northwestern.edu) it's vitally important to be able to calculate the rate at which stuff cools down correctly; among other things, of course.
The chemical composition of the interstellar gas depends on how elements are transformed inside the interiors of stars (fused from Hydrogen, to Helium, to even heavier elements that astronomers refer to in bulk as "metals;" with this definition Oxygen would be a metal, weird, I know) and how those elements combine to form molecules, i.e. chemistry.

So, in these simulations the typical thing to do is to approximate the chemistry using tabulated chemical reaction rates and then assume the reactions have had enough time to enter a state of "chemical equilibrium" (i.e. the reactions are balanced and the state is no longer changing).
However, the time it takes for a system to enter chemical equilibrium at these temperature and densities we're simulating can be millions to billions of years-- that assumption may not, and indeed [has been shown](https://richings.bitbucket.io/chimes/home.html) to not always be valid. 
That's where "non-equilibrium" or "time-dependent" chemistry comes into the story. 

## The problem with non-equilibrium chemistry
The problem is that non-equilibrium chemistry is very computationally demanding, it takes a lot of computer effort to solve the chemical reaction equations for how much of each molecule and chemical ion there should be for a given density and temperature. 
The issue isn't so much that the math is complicated, it's "only" a system of thousands of "coupled linear differential equations" referred to as a "chemical network."
A differential equation is just an equation that involves something changing with time (technically it means it has something called a derivative, which is another word for rate of change) so it makes sense considering we're talking about reaction rates.
That they're coupled just means that they depend on each other, and that they're linear means that they are simple (specifically it means no variable is raised to more than the first power-- no squares or cubes).

Those are important properties for a system of equations because it means that you can write them in terms of matrix operations and find solutions using linear algebra!
That the system is coupled just means that the matrix will have off diagonal elements.
So, our problem of interstellar chemistry just became a math problem of inverting and multiplying matrices-- that should be solved, right?
Well, yes, but... the problem is that we need to do this for tens of millions of independent systems (one system of equations for each particle in our simulation).
As well, for each particle, we would like to know how the chemical composition evolves over the timescale of millions of years, but the relevant timescale for the chemical rates are much shorter-- only thousands of years.
This mismatch in timescales makes our system of equations "stiff."
So, to put it another way, we need to do many millions of simply linear algebra operations that are independent of one another, a very computationally expensive task.
For some.

## GPUs to the rescue
Graphics processing units (GPUs) were originally designed to support computer rendering tasks by determining the color of each pixel on your screen in parallel. 
In the past decade GPUs have been used more and more for other purposes due to their massively parallel infrastructure. 
In particular, a GPU can run many thousands of independent computation threads on a single chip though any individual thread has a relatively small throughput. 
This makes them ideal for solving a huge volume of simple problems but not so good at solving one hard problem.
One thing in particular that GPUs have been used for a lot is to do linear algebra. 
It turns out, linear algebra is very important for machine learning and AI as the mathematics behind both is essentially... you guessed it! 
Solving systems of equations.

## Interstellar Chemistry with WIND CHIMES
So, with all this in mind, as a 2018-2019 Blue Waters Graduate Fellow I developed a GPU accelerated version of the non-equilibrium chemistry solver [CHIMES](https://richings.bitbucket.io/chimes/home.html), developed by Prof. Alex Richings at University of Hull in the UK.
Alex recently coupled CHIMES to the FIRE simulation code and, when enabled, dominates up to 95% of the computational time, making it prohibitively expensive to use in already expensive high-resolution studies.
However, by offloading the chemistry calculation and integrating the equations on a GPU we hoped to be able to bring the non-equilibrium chemistry in line with the rest of the cost of the simulation.

To that end, I created [WIND](https://github.com/agurvich/WIND), a CUDA application that integrates general systems of coupled stiff differential equations.
For the name, I wanted to evoke the idea of movement of the whole from a collection of small things, like particles of air in the wind-- also it pairs well with CHIMES.
But I digress, WIND is a standalone application that takes as input specially formatted data tabulating the coefficients in each of the differential equations. 
It is written in C+CUDA and implements both explicit (Runge-Kutta 4) and implicit (Semi-implicit extrapolation) differential equation integrators.
I optimized it at the kernel level using Nvidia's NSIGHT Compute profiling software. 
It uses shared block memory where possible, and texture memory to store reaction rate coefficients for easy interpolation. 

If you'd like to know more about WIND or want to talk shop about CUDA and GPUs drop me a line!
