import Image from "next/image";
import Link from "next/link";
import Button from "../button";

export default function SherriBio() {
  return (
    <div
      id="sherri"
      className="text-Chocolate flex flex-row w-full bg-Eggshell items-center p-10 gap-10 rounded-3xl relative tablet:flex-col"
    >
      <Image
        className="rounded-3xl"
        src="/images/sherri-ferguson.png"
        width={350}
        height={350}
        alt="Sherri Ferguson - President of Shanfe Research & Consulting"
      />

      <div className="gap-5 flex flex-col max-w-3xl">
        <div className="gap-2">
          <h1 className="text-4xl font-bold">Sherri Ferguson</h1>
          <h3 className="text-xl font-semibold">
            President - Shanfe Research & Consulting
          </h3>
        </div>

        <p className="text-base">
          Sherri Ferguson is the President of Shanfe Research and Consulting
          Ltd. A subject matter expert in hyperbaric, hypobaric and diving
          safety and training, she holds a Master of Science in biomedical
          physiology from Simon Fraser University. Her research includes
          cardiac function, decompression, and the effects of hypoxia on
          cognition and brain activity. She has conducted research for
          organizations such as Air Canada and Corrections Canada.
        </p>

        <p className="text-base">
          She is a research associate with the Divers Alert Network and
          Vice-Chair of the CSA Z275 Technical Committee on diving and
          hyperbaric standards. She has chaired the hyperbaric and compressed
          air sub-committee since 2013 and served with the UHMS Safety
          Committee since 2014.
        </p>

        <Link href="https://dan.org/" legacyBehavior passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Button backgroundColor="Sky">
              See Divers Alert Network (DAN)
            </Button>
          </a>
        </Link>

        <p className="text-base">
          Sherri has held leadership roles with CUHMA, received several
          awards for her contributions to hyperbaric safety, and was Director
          of the Environmental Medicine and Physiology Unit at SFU for 18
          years. She continues to advise on safety standards across
          institutions and has held diving safety officer roles at UBC and
          UVic.
        </p>
      </div>
    </div>
  );
}