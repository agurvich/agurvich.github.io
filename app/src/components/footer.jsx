import { scroller } from "react-scroll";
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

export function scrollToElement(name) {
  scroller.scrollTo(name, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
    offset: -84 // height of the navbar
  });
}

function Footer({...pars}){
    return (
        <nav className="flex justify-between items-center w-screen bg-gray-800 text-white p-4 pr-8 z-10">
            <div className="text-start">
                <p>&copy; 2024 Alex Gurvich. All rights reserved.</p>
            </div>
            <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/alex-b-gurvich" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin size={24} />
                </a>
                <a href="https://github.com/agurvich" target="_blank" rel="noopener noreferrer">
                    <BsGithub size={24} />
                </a>
                <a href="https://twitter.com/alexbgurvich" target="_blank" rel="noopener noreferrer">
                    <BsTwitter size={24} />
                </a>
            </div>
        </nav>
    );
};

export default Footer;