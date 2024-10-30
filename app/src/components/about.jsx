import useMediaQuery from "@/hooks/use-media-query";
import { BsBarChartLine, BsCode, BsChat } from "react-icons/bs";
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
        <section id="about" className="relative py-16 px-4 min-h-screen-navbar flex flex-col">
            <div className="flex flex-col flex-1 md:flex-row items-center md:gap-8">
                <div className="flex-1">
                    <ProfilePicture {...{imageSource}}/>
                </div>
                <div className="flex flex-col flex-[3] gap-4">
                    <Header />
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
            </div>
            <div className="flex flex-row flex-1">
            </div>
        </section>
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

const Header = () => (
    <div>
        <h1>About Me</h1>
        <p className="text-lg text-gray-700">
            I wear many hats, and I enjoy working on all kinds of challenging and innovative projects.
        </p>
    </div>
);
const Card1 = () => (
    <Card>
        <div className="text-4xl text-blue-500 mb-4">
            <BsCode />
        </div>
        <h3 className="text-xl font-semibold mb-2">Full-Stack Data Science</h3>
        <p className="text-gray-600">Experienced in building applications from start to start to finish; from data reduction to user-facing application.</p>
    </Card>
);

const Card2 = () => (
    <Card>
        <div className="text-4xl text-green-500 mb-4">
            <BsBarChartLine />
        </div>
        <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
        <p className="text-gray-600">Expert in creating interactive visualizations powered by large datasets.</p>

    </Card>
);
const Card3 = () => (
    <Card>
        <div className="text-4xl text-red-500 mb-4">
            <BsChat />
        </div>
        <h3 className="text-xl font-semibold mb-2">Communication</h3>
        <p className="text-gray-600">Passionate about storytelling and using data visualization to communicate complex concepts to any audience.</p>
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
            <div><FaJs className="inline" /> JavaScript<br/> (React, Node.js)</div> 
            <div>Data Visualization<br/> (D3, Three.js)</div>
        </ul>
    </Card>
);