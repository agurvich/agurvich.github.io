import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@src/components/ui/dialog"

import { useUserData } from '@/contexts/user-data-context';  
                        
  function Writeup({
        name,
        description,
        category,
        demo_link,
        repo_link,
        writeup,
        image,
        isWriteupOpen, setIsWriteupOpen
    }){
    const anchorClass = 'hover:underline underline-offset-4 cursor-pointer';
    const disabledAnchorClass = 'pointer-events-none opacity-0';
    const { markdownComponents } = useUserData();

    return (
        <Dialog open={isWriteupOpen} onOpenChange={() => setIsWriteupOpen(prevIsWriteupOpen => !prevIsWriteupOpen)}>
            <DialogTitle />
            <DialogTrigger className={anchorClass} >Writeup</DialogTrigger>
            <DialogContent className='bg-white w-[80vw] h-[80vh] max-w-full overflow-y-scroll'>
                <DialogHeader className={'mt-4'}>
                    <div className="flex flex-row items-end justify-between text-gray-400 text-sm">
                        <div>
                            <h1 className="my-0 text-black inline mr-4">{name}</h1>
                            <span>{category}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
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
                        </div>

                    </div>
                    <hr/>
<img src={`/images/${image}`} />
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                    <hr/>
                </DialogHeader>
                <div
                    className="markdown-render"
                    dangerouslySetInnerHTML={{__html:markdownComponents[writeup]?.html}}
                />
            </DialogContent>
        </Dialog>
    );
  }

  export default Writeup;