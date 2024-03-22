import Image from "next/image";
import { useState } from "react";
import Button from "./button";

export default function Card05() {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(true);
    };

    const handleClose = () => {
        setExpanded(false);
    };

    return (
        <div className="text-Chocolate flex flex-row gap bg-Eggshell items-center p-10 gap-10 rounded-3xl relative mobile:flex-col">
            <Image
                className="rounded-3xl"
                src='/images/photo05.png'
                width={350}
                height={350}
                alt=''
            />
            {expanded ? (
                <div className='w-full flex flex-col content-start gap-5'>
                    <p className='text-lg'>
                    Specializing in hypobaric research for over 18 years, clients in the past include aerospace industry giants like Boeing, Air Canada, and medical devices for companies such as Siemens and Abbott Point of Care to offer equipment performance testing at altitude for medical devices. Our expertise extends to human performance, physiology, and neurophysiology research in hypobaric environments. With a global network of hypobaric facilities, we're equipped to meet diverse research needs efficiently.
                    </p>
                    <div className='flex flex-col gap-3'>
                        <p className='text-xl'>Selected Papers:</p>
                        <ul className='text-sm'>Evan A. Hutcheon, Vasily A. Vakorin, Adonay S. Nunes, Urse Ribary, Sherri Ferguson, Victoria E.
                            Claydon, Sam M. Doesburg. <i>Comparing neuronal oscillations during spatial attention orienting between
                            normobaric and hypobaric hypoxia.</i> <b>Scientific Reports</b> October 2023 Vol. 13 (1)</ul>
                        <ul className='text-sm'>Evan A. Hutcheon, Vasily A. Vakorin, Adonay S. Nunes, Urse Ribary, Sherri Ferguson, Victoria E.
                            Claydon, Sam M. Doesburg. <i>Associations between spontaneous electroencephalogram oscillations and
                            oxygen saturation across normobaric and hypobaric hypoxia.</i> <b>Human Brain Mapping</b> Jan. 2023 44 (4)</ul>
                        <ul className='text-sm'>Richard NA, Sahota IS, Widmer N, Ferguson S, Sheel AW, Koehle MS. <i>Acute Mountain sickness, chemosensitivity and cardio-respiratory responses in humans exposed to hypobaric and normobaric hypoxia.</i> <b>J Appl Physiol</b> 2013 Jul 3 (Epub ahead of print)</ul>
                        <ul className='text-sm'>Asmaro D, Mayall J, Ferguson S. <i>Cognition at altitude: Impairment in executive and memory processes under hypoxic conditions.</i> <b>Aviation, Space and Environmental Medicine.</b> Vol. 84, No. 11, Nov 2013</ul>
                        </div>
                    <button onClick={handleClose} className="absolute top-5 right-5 text-gray-500 hover:text-red-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            ) : (
                <div className='flex flex-col gap-5'>
                    <h1 className='text-5xl font-bold'>Aerospace</h1>
                    <Button backgroundColor="Sky" onClick={handleExpand}>Read More</Button>
                </div>
            )}
        </div>
    );
}
