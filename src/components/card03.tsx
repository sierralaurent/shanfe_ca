import Image from "next/image";
import { useState } from "react";
import Button from "./button";

export default function Card03() {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(true);
    };

    const handleClose = () => {
        setExpanded(false);
    };

    return (
        <div className="text-Chocolate flex flex-row gap bg-Eggshell items-center p-10 gap-10 rounded-3xl relative">
            <Image
                className="rounded-3xl"
                src='/images/photo01.jpg'
                width={350}
                height={350}
                alt=''
            />
            {expanded ? (
                <div className='w-full flex flex-col gap-5'>
                    <p className='text-lg'>
                    Shanfe provides comprehensive training in hyperbaric safety and operation such as training and education for 
                    </p>
                    <ul>
                        <li>Hyperbaric safety specialists (CSA Z275.1 standard)</li>
                        <li>Chamber operator (DCBC)</li>
                        <li>Fundamentals of Hyperbaric Medicine (UHMS)</li>
                        <li>Hyperbaric emergency team training</li>
                        <li>High altitude indoctrination (Transport Canada)</li>
                        </ul>
                    <button onClick={handleClose} className="absolute top-5 right-5 text-gray-500 hover:text-red-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            ) : (
                <div className='flex flex-col gap-5'>
                    <h1 className='text-5xl font-bold'>Training</h1>
                    <Button backgroundColor="Sky" onClick={handleExpand}>Read More</Button>
                </div>
            )}
        </div>
    );
}
