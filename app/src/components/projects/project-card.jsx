import { useState } from "react";
import Writeup from './writeup';

export const categoryClasses = (category) => {
    switch (category) {
        case 'Data Science':
            return { border: 'border-blue-500', bg: 'bg-blue-500', text: 'text-blue-500' };
        case 'Data Visualization':
            return { border: 'border-red-500', bg: 'bg-red-500', text: 'text-red-500' };
        case 'Software Engineering':
            return { border: 'border-green-500', bg: 'bg-green-500', text: 'text-green-500' };
        default:
            return { border: 'border-gray-500', bg: 'bg-gray-500', text: 'text-gray-500' };
    }
};

function ProjectCard({
    name,
    description,
    category,
    demo_link,
    repo_link,
    writeup,
    image,
    style,
    className='',
    ...pars
}){
        /*
        "category": "Data Science",
        "name": "Stellar Feedback",
        "description": "Everyone knows about the sun, fewer people know where it came from and how other stars might've influenced its formation.",
        "demo_link": "",
        "repo_link": "",
        "writeup": "stellar-feedback.md"
        */ 
    const anchorClass = 'hover:underline underline-offset-4 cursor-pointer';
    const disabledAnchorClass = 'pointer-events-none opacity-0';

    const [ isWriteupOpen, setIsWriteupOpen ] = useState(false);

    const TitleComponent = () =>
        true ?  <h3 >  {}{name} </h3> : <h3 > <a href={demo_link}>{name}</a></h3>;

    const onDescriptionClick = () => {
        if (writeup) setIsWriteupOpen(true);
    };
        
    return (
        <div 
            className={` ${categoryClasses(category).border} border-4 square-card ${className}`}
            style={{ backgroundImage: `url(/images/${image})`, ...style}}
        >
            <div className={ ` ${categoryClasses(category).bg} square-card-inner `} >
                <TitleComponent />
                <p 
                    className={`text-sm line-clamp-3`}
                >
                    {description}
                </p>
                <div
                    className='grid grid-cols-3 items-end'
                >
                    <a
                        href={repo_link} target="_blank" rel="noopener noreferrer"
                        className={repo_link ? anchorClass : disabledAnchorClass}
                    > 
                        Repo
                    </a>
                    <a
                        href={demo_link} target="_blank" rel="noopener noreferrer"
                        className={demo_link ? anchorClass : disabledAnchorClass}
                    > 
                        Demo 
                    </a>
                    <a 
                        className={writeup ? anchorClass : disabledAnchorClass}
                    >
                        <Writeup {...{
                            name,
                            description,
                            category,
                            demo_link,
                            repo_link,
                            writeup,
                            image,
                            isWriteupOpen, setIsWriteupOpen,
                            ...pars
                        }} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;