function PresentationCard({presentation}){

    const anchorClass = 'hover:underline underline-offset-4 cursor-pointer';
    const disabledAnchorClass = 'pointer-events-none opacity-0';
    const TitleComponent = () => (
        presentation?.recording_link === "" ?
        <h3 > {presentation?.name} </h3> :
        <h3 className="line-clamp-2"> <a href={presentation?.recording_link}>{presentation?.name} </a> </h3>
    );

    if (presentation?.hidden) return null;
    return (
        <div 
            className={`
                square-card
                bg-cover
                bg-center
                p-0
                flex
                flex-col
                justify-between
                overflow-hidden
                ${presentation?.upcoming ? 'upcoming' : ''}
            `}
            style={{ backgroundImage: `url(/images/presentations/${presentation?.image})` }}
        >
            <div className={ `bg-black square-card-inner`} >
                <TitleComponent />
                <p className={`text-sm line-clamp-3`} >
                    {presentation?.description}
                </p>
                <div className='px-4 py-1 flex flex-row gap-4 justify-between' >
                    <a
                        href={presentation?.slides_link} target="_blank" rel="noopener noreferrer"
                        className={presentation?.slides_link ? anchorClass : disabledAnchorClass}
                    > 
                        Slides
                    </a>
                    <a
                        href={presentation?.recording_link}  target="_blank" rel="noopener noreferrer"
                        className={presentation?.recording_link ? anchorClass : disabledAnchorClass}
                    > 
                        Recording
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PresentationCard;