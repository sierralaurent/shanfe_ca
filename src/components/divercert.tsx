import Image from "next/image";
import { useState } from "react";
import Button from "./button";

export default function Divercert() {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <div className="text-Chocolate flex flex-row w-full gap bg-Sky items-center p-10 gap-10 rounded-3xl relative mobile:flex-col">
      <Image
        className="rounded-3xl"
        src="/images/diver-cert.png"
        width={350}
        height={350}
        alt=""
      />

      <div className="gap-5 flex flex-col">
        <h1 className="text-3xl font-bold">Accredited by the Diver Certification Board of Canada</h1>
        {expanded ? (
          <div className="w-full flex flex-col gap-5">
            <p className="text-lg">
              
            </p>
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
            <p className="text-lg">
            Shanfe Research & Consulting Ltd. is proudly recognized by the Diver Certification Board of Canada for our Hyperbaric Chamber Operator training.
            </p>

          </div>
        )}
      </div>
    </div>
  );
}
