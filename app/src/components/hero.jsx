import { scrollToElement } from "./navbar";
import { Button } from "./ui/button";

function Hero({...pars}){
    return (
        <section className="bg-blue-500 text-white h-[100vh] flex items-center justify-center w-full">
            <div className="px-4">
                <h1 >Alex Gurvich, Ph.D.</h1>
                <h2 className="text-xl w-full">
                    <span className="inline-block text-blue-200 hover:-translate-y-1 transition-all">
                        Sr. Scientific Programmer/Analyst
                    </span>
                    {' '}
                    &
                    {' '}
                    <span className="inline-block text-green-200 hover:-translate-y-1 transition-all">
                        Data Visualization Specialist
                    </span>
                    {' '}
                    at
                    {' '}
                    <p className="inline-block text-red-200 hover:-translate-y-1 transition-all">
                    NASA
                    </p>
                </h2>
                <div>
                    <Button onClick={() => scrollToElement('about')}>Get to know me</Button>
                    <Button onClick={() => scrollToElement('projects')}>Check out my work</Button>
                    <Button onClick={() => scrollToElement('contact')}>Get in contact</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;