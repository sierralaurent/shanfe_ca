import Image from "next/image";
import { useState } from "react";
import Button from "./button";

export default function Card04() {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(true);
    };

    const handleClose = () => {
        setExpanded(false);
    };

    return (
        <div className="text-Chocolate flex flex-row gap bg-Sky items-center p-10 gap-10 rounded-3xl relative mobile:flex-col">
            
            {expanded ? (
                <div className='w-full flex flex-col gap-5'>
                    <p className='text-lg'>
                    We are partnered with Sea-Force Hyperbaric a full saturation depth chamber with environmental control to provide life support for 24 persons. We offer equipment evaluation in hyperbaric and diving conditions, along with physiological monitoring of divers in the chamber or in open water conditions including diver profile monitoring, 12 lead ECG, 4 chamber Echocardiogram for venous gas emboli monitoring, and phlebotomy. With 3 decades of experience in diving operations we can tailor research to meet your needs.  Previous grants for diver research include U.S. Office of Naval Research and Worksafe  BC. 
                    </p>
                    <button onClick={handleClose} className="absolute top-5 left-5 text-gray-500 hover:text-red-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            ) : (
                <div className='flex flex-col gap-5 items-end'>
                    <h1 className='text-5xl font-bold'>Diving</h1>
                    <Button backgroundColor="Eggshell" onClick={handleExpand}>Read More</Button>
                </div>
            )}
            <Image
                className="rounded-3xl"
                src='/images/photo12.png'
                width={375}
                height={350}
                alt=''
            />
        </div>
    );
}
