
function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  }

function Section({name, children, ...pars}){
    return (
        <section id={name} className="relative py-16 px-4 h-[75vh] flex flex-col flex-between" {...pars}>
            <div>
              <h1>{toTitleCase(name)}</h1>
              <div className='flex justify-center'> <hr className='w-1/3 mb-4'/> </div>
            </div>
            {children}
        </section>
    );
};

export default Section;