import { useEffect, useRef, useState } from 'react';
import projects from '@src/data/projects.json';
import { Button } from '@src/components/ui/button';
import ProjectCard, { categoryClasses } from './project-card';

function Projects({...pars}){

    const categories = ['All',...new Set(projects.map(project => project.category))];
    const [filter, setFilter] = useState('All');
    let count = 0;
    const cardWidthRem = 15; // rem

    const [cardsPerRow, setCardsPerRow] = useState(4);
    const containerRef = useRef(null);

    useEffect(() => {
        function updateCardsPerRow() {
            const containerWidth = containerRef.current.offsetWidth;
            const cardWidth = (cardWidthRem+1) * parseFloat(getComputedStyle(document.documentElement).fontSize); // 15em to px
            const calculatedCardsPerRow = Math.floor(containerWidth / cardWidth);
            setCardsPerRow(calculatedCardsPerRow || 1); // Fallback to 1 if calculation returns 0
        }

        // Initial calculation and resize listener
        updateCardsPerRow();
        window.addEventListener("resize", updateCardsPerRow);

        return () => window.removeEventListener("resize", updateCardsPerRow);
    }, []);

    const positions = projects.map(
        project => {
            const isHidden = !( filter === project.category  || filter === 'All');
            if (isHidden) return {top:"0rem", left: "-15rem"};
            const irow = parseInt(count / cardsPerRow);
            const icol = count % cardsPerRow;
            const marginTop = irow > 0 ? 1 : 0; // rem
            const marginLeft = icol > 0 ? 1 : 0; // rem
            const position = {
                top:`${irow*(cardWidthRem+marginTop)}rem`,
                left:`${icol*(cardWidthRem+marginLeft)}rem`
            };
            count++;
            return position;
        }
    );
    return (
        <section
            id="projects"
            className={`relative 
                w-full min-h-screen-navbar
                py-16 px-4
                bg-gray-100
                transition-all
                flex flex-col
            `}
            >
                <div>
                    <h1>Projects & Portfolio</h1>
                </div>
                <div className='flex flex-col flex-1' ref={containerRef} >
                    {/* filter buttons */}
                    <div>
                        {categories.map(
                            (category,idx) => (
                                <Button 
                                    key={`portfolio-filter-${idx}`}
                                    onClick={()=>setFilter(category)}
                                    className={`text-base ${categoryClasses(category).text}`}
                                >
                                    {category}
                                </Button>
                            )
                        )}
                    </div>
                    {/* project grid */}
                    <div className='py-4 mx-auto overflow-hidden'>
                        <div className={`
                            relative
                            gap-4
                            transition-all
                        `}
                        style={{
                            width:`${cardsPerRow*(cardWidthRem+1) - 1}rem`,
                            height:`${(Math.ceil(count/cardsPerRow))*(cardWidthRem+1) - 1}rem`
                        }}
                        >
                            {projects.map(
                                (project,idx) => (
                                    <ProjectCard
                                        key={`project-card-${project.name}`}
                                        {...project}
                                        className={`
                                            absolute
                                        `}
                                        style={{...positions[idx]}}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Projects;