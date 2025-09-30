import Image from "next/image";

export default function AaronBio() {
  return (
    <div
      id="aaron"
      className="text-Chocolate rounded-3xl w-full flex flex-row tablet:flex-col items-start tablet:items-center p-8 gap-8 bg-Eggshell  max-w-full"
    >
      <Image
        className="rounded-3xl"
        src="/images/aaron-griffin.png"
        width={350}
        height={350}
        alt="Aaron Griffin - President of Underwater Skills Institute"
      />

      <div className="flex flex-col gap-5 ">
        <div className="gap-2">
          <h1 className="text-4xl font-bold">Aaron Griffin</h1>
          <h3 className="text-xl font-semibold">
            President - Underwater Skills Institute
          </h3>
        </div>

        <p className="text-base">
          Aaron is an Inshore Diving Safety Specialist, having graduated from
          Seneca’s UWS program in 1994. He completed a Red Seal Millwright
          apprenticeship while working on the Mechanical/Dive team at the St.
          Lawrence Seaway Management Corporation’s Welland Canal Operations,
          completing it in 2000.
        </p>

        <p className="text-base">
          He has been working on civil and offshore projects throughout his
          career and in 2006, was hired by Seneca College’s Underwater Skills
          Program as an instructor. In 2012 he assumed the role as Professor
          and Program Coordinator.
        </p>

        <p className="text-base">
          In 2024, he co-founded the Underwater Skills Institute to continue
          his commitment to diver education.
        </p>

        <p className="text-base">
          He is engaged in the training of Occupational SCUBA, RSSDs, USSDs,
          DMTs, and CHCOs. He is also the current Chair of CSA Z275.4 Standard.
        </p>
      </div>
    </div>
  );
}