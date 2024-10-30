import { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import Tooltip from './tooltip';
import Section from './section';

function Timeline({ events }) {
    const svgRef = useRef(null);
    const [tooltip, setTooltip] = useState({ content: {}, x: 0, y: 0 });
    const [tooltipIsVisible, setTooltipIsVisible] = useState(false);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = svgRef.current.clientWidth;
        const height = 200; // Height of the SVG

        // Define margins
        const margin = { top: 20, right: 20, bottom: 20, left: 20 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        // Set SVG dimensions
        svg.attr('width', width).attr('height', height);

        // Define scales with margins
        const xScale = d3.scaleTime()
            .domain(d3.extent(events.flatMap(d => [new Date(d.startDate), new Date(d.endDate)])))
            .range([0, innerWidth]);

        const yScale = d3.scaleLinear()
            .domain([0, 1])
            .range([innerHeight / 2, innerHeight / 2]);
        
        // Draw year ticks and labels
        const xAxis = d3.axisBottom(xScale)
        .ticks(d3.timeYear.every(1))
        .tickSize(-innerHeight)
        .tickFormat(d3.timeFormat("%Y"));

        // Clear previous content
        svg.selectAll('*').remove();

        svg.append('g')
        .attr('transform', `translate(${margin.left}, ${innerHeight + margin.top})`)
        .call(xAxis)
        .selectAll('text')
        .style('fill', '#999')
        .style('font-size', '10px');

        svg.selectAll('.tick line')
        .attr('stroke', '#000');


        const rectHeight = 16;

        // Draw the timeline line
        svg.append('line')
            .attr('x1', margin.left)
            .attr('y1', innerHeight / 2 + margin.top)
            .attr('x2', innerWidth + margin.left)
            .attr('y2', innerHeight / 2 + margin.top)
            .attr('stroke', '#333')
            .attr('stroke-width', rectHeight * 0.8);

        const offsetHeight = 2*rectHeight;
        // Draw event bars
        svg.selectAll('.event')
            .data(events)
            .enter()
            .append('rect')
            .attr('class', 'event')
            .attr('x', d => xScale(new Date(d.startDate)) + margin.left)
            .attr('y', d => innerHeight / 2 - rectHeight/2 + margin.top + d?.offset*offsetHeight )
            .attr('width', d => Math.max(8,xScale(new Date(d.endDate)) - xScale(new Date(d.startDate))))
            .attr('height', rectHeight)
            .attr('fill', d => d?.color ? d.color : 'orange')
            .style('cursor','pointer')
            .attr('rx', rectHeight/2) // Rounded corners
            .attr('ry', rectHeight/2)
            .on('mouseover', (event, d) => {
                const dy = innerHeight / 2 - rectHeight/2 + d?.offset*offsetHeight
                const dx = (xScale(new Date(d.endDate)) + xScale(new Date(d.startDate)))/2 + margin.left;
                setTooltip({
                    content: d,
                    x: dx,
                    y: 0
                });
                setTooltipIsVisible(true);
            })
            /*
            .on('mousemove', (event) => {
                setTooltep(prev => ({
                    ...prev,
                    x: event.clientX + 10,
                    y: event.offsetY
                }));
            })
            .on('mouseout', () => {
                setTooltip(prev => ({ ...prev, content:{}, visible: false }));
            });
            */

        svg.selectAll('.label')
            .data(events)
            .enter()
            .append('text')
            .attr('class', 'label')
            .attr('x', d => (xScale(new Date(d.endDate)) + xScale(new Date(d.startDate)))/2 + margin.left)
            .attr('y', d => {
                const position = d.labelPosition === 'above' ? innerHeight / 2 - 20 : innerHeight / 2 + 20;
                return position + margin.top;
            })
            .attr('text-anchor', 'middle')
            .text(d => d.label)
            .style('font-size', '10px')
            .style('fill', '#333');
    }, [events]);

    return (
                    
        <section
            id="projects"
            className={`relative 
                w-full h-screen-navbar
                py-16 px-4
                flex flex-col flex-between
                bg-gray-100
            `}

            onMouseLeave={ ()=> {
                setTooltipIsVisible(false);
            } }
        >
            <div className='mb-4'>
                <h1>{'Projects'}</h1>
                <div className='flex justify-center'> <hr className='w-1/3 mb-4'/> </div>
                <p>Here are some projects I've worked on. </p>
            </div>
            <div className='relative overflow-x-scroll flex-1 flex justify-center items-center'>
                <svg ref={svgRef} className="w-full h-[200px]" />
                <Tooltip
                    content={tooltip.content}
                    x={tooltip.x}
                    y={tooltip.y}
                    {...{tooltipIsVisible}}
                    onMouseOut={()=>{setTooltipIsVisible(false)}}
                />
            </div>
        </section>
    );
};

export default Timeline;