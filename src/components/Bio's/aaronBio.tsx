import Image from "next/image";
import { useState } from "react";
import Button from "../button";

export default function AaronBio() {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <div className="text-Chocolate flex flex-row w-full bg-Eggshell items-center p-10 gap-10 rounded-3xl relative tablet:flex-col">
      <Image
        className="rounded-3xl"
        src="/images/aaron-griffin.png"
        width={350}
        height={350}
        alt="Aaron Griffin"
      />

      <div className="gap-5 flex flex-col max-w-3xl">
        <div className="gap-2">
        <h1 className="text-4xl font-bold">Aaron Griffin</h1>
        <h3 className="text-xl font-semibold">President - Underwater Skills Institute</h3>
        </div>
        <p className="text-lg">
          Aaron is an Inshore Diving Safety Specialist, having graduated from Seneca’s UWS program in 1994. He completed a Red Seal Millwright apprenticeship while working on the Mechanical/Dive team at the St. Lawrence Seaway Management Corporation’s Welland Canal Operations, completing it in 2000.
        </p>
        {expanded ? (
          <div className="w-full flex flex-col gap-5">
             <p className="text-lg">He has been working on civil and offshore projects throughout his career and in 2006, was hired by Seneca College’s Underwater Skills Program as an instructor. In 2012 he assumed the roll as Professor and Program Coordinator.</p>
                <p className="text-lg">In 2024, he co-founded the Underwater Skills Institute to continue his commitment to diver education</p>
                  <p className="text-lg">He is engaged in the training of Occupational SCUBA, RSSDs, USSDs, DMTs, and CHCOs. He is also the current Chair of CSA Z275.4 Standard.</p>


            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-gray-500 hover:text-red-500 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <Button backgroundColor="Sky" onClick={handleExpand}>Read More</Button>
          </div>
        )}
      </div>
    </div>
  );
}