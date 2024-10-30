import PresentationCard from "./presentation-card";
import presentations from '@src/data/presentations.json';

function Presentations({...pars}){
    return (
        <section id="personal" className="h-screen-navbar flex flex-col items-center justify-center py-8">
            <div> <h1>Presentations & Talks</h1> </div>
            <div className="w-full px-4 overflow-hidden">
                <ul className="relative flex flex-row py-4 gap-2 w-full overflow-x-scroll"> {
                    presentations.map( (presentation,idx) => <li key={`presentation-${idx}`} className="">
                        <PresentationCard {...{presentation}} />
                    </li>)
                } </ul>
            </div>
        </section>
    );
};

export default Presentations;