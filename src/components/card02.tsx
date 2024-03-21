import Image from "next/image";
import { useState } from "react";
import Button from "./button";

export default function Card02() {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(true);
    };

    const handleClose = () => {
        setExpanded(false);
    };

    return (
        <div className="text-Chocolate flex flex-row gap bg-Sky items-center p-10 gap-10 rounded-3xl relative">
            
            {expanded ? (
                <div className='w-full flex flex-col gap-5'>
                    <p className='text-lg'>
                    We specialize in comprehensive safety solutions tailored to hyperbaric environments. We conduct thorough risk assessments of facilities, identifying potential hazards and implementing robust safety protocols. From preventative maintenance to safety program development, we ensure compliance with industry standards and regulations, safeguarding the well-being of your personnel and facilities. 
                    </p>
                    <button onClick={handleClose} className="absolute top-5 left-5 text-gray-500 hover:text-red-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            ) : (
                <div className='flex flex-col gap-5 items-end'>
                    <h1 className='text-5xl font-bold'>Safety</h1>
                    <Button backgroundColor="Eggshell" onClick={handleExpand}>Read More</Button>
                </div>
            )}
            <Image
                className="rounded-3xl"
                src='/images/photo02.png'
                width={350}
                height={350}
                alt=''
            />
        </div>
    );
}
