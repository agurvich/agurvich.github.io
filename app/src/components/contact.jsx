import Footer from "./footer";
import Map from "./map";
import { Button } from "./ui/button";

// Contact.jsx
function Contact() {

    /*
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            placeholder="Your message"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Send
                        </button>
                    </div>
                </form>
                */

    return (
        <section id="contact" className="h-screen-navbar flex flex-col justify-between">
            <div className="py-16 px-4 bg-gray-100 flex flex-col items-center justify-center flex-1">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-6">Contact Me</h2>
                    <div className="text-center">
                        <p className="text-gray-700 mb-4 [&>a]:font-bold [&>a:hover]:underline">
                            You can reach me via email at <a href="mailto:alex.b.gurvich@gmail.com">alex.b.gurvich@gmail.com</a> or on:
                        </p>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/alex-b-gurvich" target="_blank" rel="noopener noreferrer">
                            <Button>Linked In</Button>
                        </a>
                        <a href="https://github.com/agurvich" target="_blank" rel="noopener noreferrer">
                            <Button>Github</Button>
                        </a>
                        <a href="https://twitter.com/alexbgurvich" target="_blank" rel="noopener noreferrer">
                            <Button>Twitter</Button>
                        </a>
                    </div>
                </div>
            </div>
            <Map />
            <Footer />
        </section>
    );
}

export default Contact;