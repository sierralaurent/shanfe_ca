import Image from "next/image";

export default function BobBio() {
  return (
    <div
      id="bob"
      className="text-Chocolate bg-Eggshell rounded-3xl w-full flex flex-row tablet:flex-col items-start tablet:items-center p-8 gap-8 max-w-full"
    >
      <Image
        className="rounded-3xl"
        src="/images/bob-photo2.png"
        width={350}
        height={350}
        alt="Aaron Griffin - President of Underwater Skills Institute"
      />

      <div className="flex flex-col gap-5 ">
        <div className="gap-2">
          <h1 className="text-4xl font-bold">Bob Abrams</h1>
          <h3 className="text-xl font-semibold">
            Course Instructor
          </h3>
        </div>

        <p className="text-base">
          Bobby M. Abrams is a highly respected diving life-support and oxygen-service specialist 
          with more than 53 years of professional experience and 39 years of specialized experience
           in diving equipment maintenance, cleanroom operations, oxygen-system calibration, and 
           precision cleaning. He currently serves as a Diving Equipment and Cleanroom Manager with
            Global/PCCI (GPC), a position he has held for over two decades.
        </p>

        <p className="text-base">
          Throughout his career, Mr. Abrams has developed extensive expertise in oxygen-service equipment, 
          instrumentation, and contamination control. His specialized training includes U.S. Navy 
          instructor-level programs in oxygen gas systems measuring instrument calibration, precision 
          cleaning of diver life-support system components, and oxygen-system analysis using NOVAC 
          HFE-7100 solvents and OSEE surface quality monitoring technologies.
        </p>

        <p className="text-base">
          A recognized subject matter expert in oxygen-service cleaning, Mr. Abrams is noted in his 
          résumé as the only individual certified by the U.S. Navy to teach instrument cleaning for 
          oxygen and mixed-gas systems using NOVAC HFE-7100 solvent and OSEE surface quality monitoring 
          for qualitative analysis. He is also qualified as a Divers Life Support Oxygen Maintenance 
          Instructor for the U.S. Navy, Army, Marine Corps, and Air Force.
        </p>

        <p className="text-base">
          Mr. Abrams has managed Class 100,000 cleanroom operations for military diving and life-support
           programs and has successfully led multiple oxygen gauge calibration and instrument-cleaning
            audits conducted by NAVSEA and METCAL. His expertise has supported military operations and
             maintenance programs throughout the United States, Hawaii, Singapore, Bahrain, Guam, Saipan, 
             and other international locations.
        </p>

        <p className="text-base">
          His instructional focus includes oxygen cleanliness requirements, MIL-STD-1330E compliance, 
          contamination control, oxygen-fire hazard prevention, precision cleaning techniques, gauge 
          calibration, and quality assurance practices for high-reliability breathing-gas and life-support 
          systems.
        </p>

        <p className="text-base">
         Following his retirement in July 2025, Mr. Abrams continues to serve as a Class 100,000 
         Cleanroom and Gauge Calibration Consultant, providing technical expertise, auditing support, 
         and training in oxygen-service maintenance and contamination control programs.
        </p>
      </div>
    </div>
  );
}