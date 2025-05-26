import useMediaQuery from "@/hooks/use-media-query";
import { Beaker, BeakerIcon, Microscope } from "lucide-react";
import { BsBarChartLine, BsCode, BsChat, BsWrench } from "react-icons/bs";
import { FaPython, FaJs } from "react-icons/fa";


function Card({children, className}){
    return (
        <div className={`w-full flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-all duration-200 hover:-translate-y-4 hover:shadow-lg ${className}`}>
            {children}
        </div>
    );
}

function About({ ...pars }) {
    const screenSize = useMediaQuery();
    const imageSource = screenSize === 'large' ? "/outlier_tall.png" : '/outlier.png';

    return (
        <>
        <section id="about" className="relative py-16 px-4 min-h-screen-navbar flex flex-col">
            <div className="flex flex-col flex-1 md:flex-row items-center md:gap-8">
                <div className="flex-1">
                    <ProfilePicture {...{imageSource}}/>
                </div>
                <div className="flex-[2]">
                    <AboutMe />
                </div>
            </div>
        </section>
                <div className="flex flex-col gap-4">
                    <h1>My Vitals at a Glance</h1>
                    <div className="flex flex-col md:flex-row gap-2">
                        <Card1 />
                        <Card2 />
                        <Card3 />
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="flex flex-1">
                            <Card4 />
                        </div>
                        <div className="flex flex-1">
                            <Card5 />
                        </div>
                    </div>
                </div>
        </>
    );
}

export default About;

const ProfilePicture = ({imageSource}) => (
    <div className="relative mb-8 lg:flex-1 lg:mb-0 overflow-hidden rounded-lg shadow-lg ">
        <img src={imageSource} alt="Big Picture"
            className={``}
        />
    </div>
);

const AboutMe = () => (
        <div>
        <h1>About Me</h1>
        <div className="flex flex-col md:flex-row gap-8">

        <p className="text-lg text-gray-700 flex-1 [&>a]:font-bold [&>a:hover]:hover-underline">
            I wear many hats, and I enjoy working on all kinds of challenging problems.
            By day, I spend my time making full stack applications to help communicate NASA science to the public.
            By night, I volunteer to organize <a href="https://dc2.org">Data Community DC's</a> data visualization meetup and am currently working on a project with the Congressional Digital Service through <a href="https://civictechdc.org">Civic Tech DC</a>.
            For fun, I perform improv comedy and play complicated, 4+ hour, board games when I'm not reading or spending time with my lazy basset-mix dog. 
        </p>
        <p className="text-lg text-gray-700 flex-1">
            Recently, I've been especially interested in user-facing applications that combine LLMs powered chat-based interfaces and agentic pipelines for retrieving and transforming data.
            To give you an idea of what I mean, one project I've been prototyping is a tool that lets users simulate U.S. presidential election outcomes by modifying real voter registration data with natural language prompts.
            The goal is to be able to ask questions like: "What if 5% more young men in Texas voted Democrat?" or "What happens if voter turnout among women increases by 15% nationwide?"
            {/*
            Recently, I've been interested in LLM powered chat-based user interfaces and agentic pipelines for retrieving and transforming data.
            For example, a side-project I've been working on is to create an interactive application to explore possible U.S. presidential election outcomes using voter registration data split by demographic and county. 
            I'm working to build a chat-based interface to allow users to interactively transform the registration data to mock elections and ask questions like: 
            "What would happen if +5% of young men in Texas voted Democrat?" , "What if turnout among women across the country was 15% higher?" , or even "What if counties with median household income below the national average were twice as likely to split their vote than they actually were?" .
            By automatically generating SQL queries to a database of cleaned voter registration data calibrated to actual election returns users will be able to simulate their own election outcomes. 
            */}
        </p>
        </div>
    </div>
);
const Card1 = () => (
    <Card>
        <div className="text-4xl text-blue-500 mb-4">
            <Microscope />
        </div>
        <h3 className="text-xl font-semibold mb-2">Full-Stack Data Science</h3>
        <p className="text-gray-600">Expert at building applications from end-to-end; from the initial data cleaning, through the intermediate data storage and access architecture, all the way to user-facing interactive applications.</p>
    </Card>
);

const Card2 = () => (
    <Card>
        <div className="text-4xl text-red-500 mb-4">
            <BsBarChartLine />
        </div>
        <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
        <p className="text-gray-600"> Experienced in creating interesting interactive visualizations powered by large datasets that tell meaningful stories.</p>

    </Card>
);
const Card3 = () => (
    <Card>
        <div className="text-4xl text-green-500 mb-4">
            <BsCode />
        </div>
        <h3 className="text-xl font-semibold mb-2">Software and Data Engineering</h3>
        <p className="text-gray-600"> Always brings a performance-first mindset that comes from the experience of actually using the data, not just building abstract data systems. </p>
    </Card>
);

const Card4 = () => (
    <Card>
        <h2 className="text-2xl font-semibold mb-4">What I'm Currently Doing</h2>
        <p className="text-gray-700">
            Currently, I support NASA's <a className='font-bold hover:underline' href="https://Earth.gov" target="_blank">Earth Information Center</a>,
            as a member of <a className='font-bold hover:underline' href="https://svs.gsfc.nasa.gov" target="_blank">NASA's Scientific Visualization Studio</a>, building interactive visualization applications for communicating climate data and NASA's Earth Science Mission.
        </p>
    </Card>
);

const Card5 = () => (
    <Card >
        <h2 className="text-2xl font-semibold mb-4">Skills & Languages I Speak</h2>
        <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-2">
            <div><FaPython className="inline" /> Python</div>
            <div>C, CUDA</div>
            <div><FaJs className="inline" /> JavaScript<br/> (React, Vite, Next.js)</div> 
            <div>Data Visualization<br/> (D3, Recharts, Three.js)</div>
        </ul>
    </Card>
);