import Image from "next/image";
import { useState } from "react";
import Button from "./button";

export default function Card01() {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => setExpanded(true);
    const handleClose = () => setExpanded(false);

    return (
        <>
            <div className="flex flex-col w-full gap-10 bg-Eggshell rounded-3xl p-10 text-Chocolate relative mobile:flex-col">
                <h1 className='text-4xl font-bold'>Teaching and Speaking Engagements</h1>

                <div className='flex flex-row items-start items-center gap-10 mobile:flex-col'>
                    <Image
                        className='rounded-3xl'
                        src='/images/photo07.png'
                        width={200}
                        height={100}
                        alt=''
                    />

                    <div className="flex flex-col gap-4">
                        <p className='text-lg'>
                            Sherri is an experienced educator, she was faculty for several hyperbaric and scientific
                            diving courses at Simon Fraser University, The University of British Columbia, and the
                            University of Victoria. She has delivered guest lectures at prestigious conferences and
                            institutions worldwide, sharing her expertise on topics ranging from occupational diving
                            to environmental medicine. She has been a guest lecturer in the graduate School of
                            Population and Public Health, at the University of British Columbia since 2005 and is
                            currently a continuing guest lecturer in the Masters in Subaquatic and Hyperbaric
                            Medicine program at the University of Padova Italy.
                        </p>

                        <Button backgroundColor="Sky" onClick={handleExpand}>
                            See Invited Presentations
                        </Button>
                    </div>
                </div>
            </div>

            {expanded && (
                <div className="mt-10 p-8 bg-white border border-gray-300 rounded-3xl shadow-lg relative">
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 focus:outline-none"
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <h2 className="text-2xl font-bold mb-4">Invited Presentations</h2>
                    <ul className="space-y-4 max-h-[500px] overflow-y-auto pr-4">
                        {presentations.map((entry, i) => (
                            <li key={i}>
                                <p className="font-semibold">{entry.title}</p>
                                <p className="text-sm text-gray-600">{entry.location} — {entry.year}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

// Presentation data
const presentations = [
    { title: "University of North Carolina, Saturation diving and compressed air work", location: "Chapel Hill", year: "2025" },
    { title: "Canadian Underwater Conference DCS and Occupational Diving", location: "Toronto, ON", year: "2024" },
    { title: "Bedford Institute of Oceanography DCS Is what you don’t know hurting you", location: "Halifax, NS", year: "2023" },
    { title: "Canadian Underwater Conference DCS Is what you don’t know hurting you", location: "Halifax, NS", year: "2023" },
    { title: "American Industrial Hygiene Association AGM virtual Occupational Health Considerations", location: "Virtual", year: "2022" },
    { title: "University North Carolina Unconventional Path to Science", location: "Chapel Hill", year: "2020" },
    { title: "Human Performance at Sea Environmental Medicine & Physiology", location: "Panama City, FL", year: "2019" },
    { title: "Divescapes: The effect of sudden drop in pressure on heart function", location: "Calgary, AB", year: "2018" },
    { title: "Canadian Underwater Conference: The diver’s heart", location: "Vancouver, BC", year: "2018" },
    { title: "American Academy of Underwater Science", location: "Alpena, MI", year: "2017" },
    { title: "Canadian Underwater Conference: Your heart and diving", location: "Ottawa, ON", year: "2017" },
    { title: "Canadian Underwater Conference: Skin bends as a serious case", location: "Halifax, NS", year: "2016" },
    { title: "Undersea & Hyperbaric Medical Society", location: "Montreal, PQ", year: "2015" },
    { title: "American Association of Mechanical Engineers PVHO", location: "Montreal, PQ", year: "2015" },
    { title: "Canadian Underwater Conference: Narcosis severity and oxygen pressure", location: "Victoria, BC", year: "2015" },
    { title: "Office of Naval Research: Narcosis and heart function", location: "Buffalo, NY", year: "2015" },
    { title: "Canadian Underwater Conference: Inert gas narcosis", location: "Toronto, ON", year: "2014" },
    { title: "Divers Weekend: Managing decompression stress", location: "Vancouver Aquarium", year: "2014" },
    { title: "Canadian Underwater Conference: Scientific diving methods", location: "St. Johns, NF", year: "2012" },
    { title: "BC Safety Authority Annual Technical Conference", location: "Vancouver, BC", year: "2011" },
    { title: "BC Ministry of Health Panel: HBOT in BC research", location: "Victoria, BC", year: "2010" },
    { title: "American Industrial Hygiene Association", location: "Vancouver, BC", year: "2009" },
    { title: "American Association of Diving Contractors", location: "Portland, OR", year: "2001" },
];
