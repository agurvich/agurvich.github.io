const e={},n=`<h2>Introduction</h2>
<figure class="left-figure">
    <img src="/images/hometown-dashboard/splash.png">
    <figcaption>
        Splash Screen of the dashboard inviting museum guests to interact.
        The splash screen is animated and pans across the map.
        Every 10 seconds it fades between different predictions for temperature and precipitation as well as different emissions scenarios.
    </figcaption>
</figure>
<p>Hometown Dashboard is an interactive climate data visualization tool that is currently installed on a 65&quot; touch screen at the Smithsonian National Museum of Natural History on the National Mall in Washington, D.C..
The purpose of Hometown Dashboard is to help visitors form a personal connection to the abstract concept of &quot;climate models,&quot; which they have likely heard of before.</p>
<p>Specifically, it helps museum visitors explore how climate change might affect a geography they're familiar with (e.g.
their hometown).</p>
<p>Another important aspect of Hometown Dashboard is that it provides four different possibilities to help visitors understand how global decisions today can impact their hometowns in the future.
The dashboard displays projections across four global greenhouse gas scenarios, defined by the Intergovernmental Panel on Climate Change (IPCC), known as Shared Socioeconomic Pathways (SSPs).</p>
<br>
<ul>
<li>
<p><strong>SSP1-2.6 – Sustainability: Taking the Green Road</strong><br>
The world shifts toward a more sustainable path that emphasizes inclusive development, human well-being, and environmental stewardship.
Global inequality is reduced, consumption becomes less material-intensive, and emissions are drastically reduced.</p>
</li>
<li>
<p><strong>SSP2-4.5 – Middle of the Road</strong><br>
Social, economic, and technological trends continue along historical lines.
Some progress is made toward sustainability, but development is uneven and challenges to reducing vulnerability remain.
Emissions stabilize at a moderate level.</p>
</li>
<li>
<p><strong>SSP3-7.0 – A Rocky Road</strong><br>
This scenario assumes high challenges to mitigation and adaptation, driven by regional conflicts, slow economic development, and fragmented international cooperation.</p>
</li>
<li>
<p><strong>SSP5-8.5 – Fossil-fueled Development: Taking the Highway</strong><br>
A world of rapid economic growth powered by abundant fossil fuels.
Innovation and markets flourish, but at the cost of very high emissions.
Resource- and energy-intensive lifestyles dominate, though local environmental issues are managed.</p>
</li>
</ul>
<br>
<p>These SSPs are part of the sixth version of the Coupled Model Intercomparison Project (CMIP6) framework developed for the IPCC’s Sixth Assessment Report.</p>
<hr>
<h2>Find Your Hometown</h2>
<p>Visitors begin by searching for a location they care about—often their hometown.
The dashboard features an interactive world map that makes it easy to locate familiar places.
As users zoom in, smaller towns become visible, encouraging deeper exploration.</p>
<figure class="right-figure">
    <img src="/images/hometown-dashboard/map.png">
    <figcaption>An overview showing the map view of the application where users can search for their hometowns.</figcaption>
</figure>
<figure class="left-figure">
    <img src="/images/hometown-dashboard/map_zoom.png">
    <figcaption>
        A zoomed-in view of the map with additional, smaller, towns appearing.
    </figcaption>
</figure>
<hr>
<h2>Explore Climate Predictions</h2>
<h3>Annual Trends</h3>
<p>Once a location is selected, users are presented with long-term projections of temperature trends over the coming decades.
The &quot;Annual Trends&quot; view simplifies large datasets into clear, easy-to-read visuals showing how average yearly temperatures may change under different emissions scenarios.</p>
<figure class="right-figure">
    <img src="/images/hometown-dashboard/annual.png">
    <figcaption>
        The default dashboard view of the application, showing annual climate data predictions for different climate models.
    </figcaption>
</figure>
<h3>Monthly Patterns</h3>
<p>For a more detailed perspective, the dashboard also displays monthly climate projections.
These visualizations help users understand how the seasons may shift, with hotter summers or warmer winters, and how these changes vary depending on future greenhouse gas levels.</p>
<figure class="left-figure">
    <img src="/images/hometown-dashboard/monthly.png">
    <figcaption>
        The seasonal dashboard view of the application, showing how monthly temperature patterns are predicted to evolve under a specific climate model.
    </figcaption>
</figure>
<hr>
<h2>Compare Climate Models</h2>
<p>Not all models agree, and that uncertainty is part of the story.
The dashboard allows users to switch between different global climate models to see how projections differ.
This reinforces the idea that while details may vary, the general trend toward a warmer climate is consistent.</p>
<figure class="right-figure">
    <img src="/images/hometown-dashboard/very_high_monthly.png">
    <figcaption>
        Changing the climate model shows different predictions.
    </figcaption>
</figure>
<hr>
<h2>Precipitation Insights</h2>
<p>In addition to temperature, the dashboard includes monthly precipitation forecasts.
Users can examine how rainfall patterns might change—whether their hometown is likely to see more intense storms, longer dry spells, or shifts in seasonal rainfall timing.</p>
<figure class="left-figure">
    <img src="/images/hometown-dashboard/precipitation_monthly.png">
    <figcaption>
        The application allows users to explore both monthly temperature and precipitation data.
    </figcaption>
</figure>
<hr>
<h2>Learn more about the data</h2>
<p><strong>The data shown here</strong> is from the NASA Earth Exchange (<strong>NEX</strong>) Global Daily Downscaled Projections (<strong>GDDP</strong>) of the scenarios assessed by the UN Intergovernmental Panel on Climate Change (<strong>IPCC</strong>) and is based on simulations of the Coupled Model Intercomparison Project Phase 6 (<strong>CMIP6</strong>).</p>
<p><strong>The NEX-GDDP-CMIP6 data</strong> is calculated on a 0.25°×0.25° latitude and longitude grid, which is a system of lines used to map the sphere of the Earth.
In some cases, the temperature in major cities could be higher than what's displayed in the gridded cell because it includes a larger area than just that city.
For example, if you search for a city, such as Los Angeles, CA, the average will include the temperature of Los Angeles (which could be higher than average) plus the surrounding geographical area (which could be lower than average).</p>
`;export{e as attributes,n as html};
