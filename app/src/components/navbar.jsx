// NavBar.jsx
import { useState } from "react";
import { scroller, Link } from "react-scroll";

export function scrollToElement(name) {
    scroller.scrollTo(name, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -128 // height of the navbar
    });
}

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  }

function NavElement({name, activeSection, setActiveSection, silent=false}){

    const activeClass = 'text-blue-400 -translate-y-1';
    const hoverActiveClass = 'hover:text-blue-400 hover:-translate-y-1';

    return (
        <Link
            to={name}
            spy={true}
            smooth={true}
            duration={800}
            offset={-56}
            onSetActive={() => setActiveSection(name)}
        >
            <button 
                className={`
                    transition-all
                    ${hoverActiveClass}
                    ${activeSection === name && !silent ? activeClass : ''}
                `}
                onClick={() => setActiveSection(name)}
            >
                {toTitleCase(name)}
            </button>
        </Link>
    );
}

function NavBar({ ...pars }) {
    const [activeSection, setActiveSection] = useState('hero');

    const names = ["home","about","projects","presentations","contact"];


    return (
        <nav className="w-screen  flex justify-between items-end bg-gray-800 text-white p-4 fixed top-0 left-0 z-10">
            <div className="mr-4">
                <NavElement {...{name:'home', activeSection, setActiveSection}} silent={true} />
            </div>
            <ul className="flex flex-1 justify-between md:flex-grow-0 md:gap-4">
                {names.slice(1).map( name => 
                    <li key={`${name}-navitem`}>
                        <NavElement {...{name, activeSection, setActiveSection}}/>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;