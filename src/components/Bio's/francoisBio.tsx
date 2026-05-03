import Image from "next/image";
import Button from "../button";

export default function FrancoisBio() {
  return (
    <div
      id="francois"
      className="text-Chocolate flex flex-row w-full bg-Sky items-center p-10 gap-10 rounded-3xl relative tablet:flex-col"
    >
      <Image
        className="rounded-3xl"
        src="/images/francois-photo.png"
        width={350}
        height={350}
        alt="Francois Burman Int(PE), MSc, FSAIW, UHMSDSA"
      />

      <div className="gap-5 flex flex-col max-w-3xl">
        <div className="gap-2">
          <h1 className="text-4xl font-bold">Francois Burman</h1>
          <h3 className="text-xl font-semibold">Int(PE), MSc, FSAIW, UHMSDSA</h3>
        </div>

        <p className="text-base">
          Originally from Cape Town (South Africa), Francois currently resides
          in Durham, NC (USA). He graduated from the University of Cape Town in
          1983 with a degree in mechanical engineering, is a registered
          international professional engineer, and in 2014 obtained a MSc in
          baromedical sciences from the University of Stellenbosch. After
          conscripted service in the South African Navy, a lengthy career in the
          nuclear industry and then managing a range of industrial companies,
          he served, and later led, Divers Alert Network (DAN) in South Africa
          from 1996 to 2018. He is currently the VP of Safety Services at DAN
          in Durham, NC.
        </p>

        <p className="text-base">
          His primary function at DAN is to promote safety and accident
          prevention through education, training, and awareness, and to assist
          and help develop global remote recompression chamber facilities that
          accept injured divers for treatment. His career in diving started in
          1994 as the operations director of a company that designed,
          manufactured, and supported a wide range of commercial diving systems
          and hyperbaric facilities. This expertise was later put to use in
          performing on-site safety assessments at more than 200 recompression
          and hyperbaric medicine chamber facilities around the world. He has
          managed a range of organizations and companies in parallel throughout
          his career, enjoying involvement in managerial, technical, production,
          investigative, educational, and outreach capacities.
        </p>

        <p className="text-base">
          He has authored a series of books, chapters, articles, and guidance
          documents, including risk assessment publications for recompression
          chamber facilities, clinical hyperbaric facilities, and for dive
          operators and dive professionals, all now accepted as industry
          standards. He is privileged to represent industry in several
          international organizations, including the UHMS safety and the FDA
          liaison committees, the NFPA-99 (hyperbaric healthcare facilities) and
          NFPA-53 (safe practice in oxygen-enriched atmospheres) committees, the
          ASME PVHO standards committees, the ECHM European Code of Good
          (hyperbaric) Practice committee, the Canadian Standards CZ275.1
          committee for hyperbaric facilities, and several ISO committees (all
          related to pressure equipment). Francois is the technical advisor to
          the Southern African Undersea & Hyperbaric Association (SAUHMA) and
          leads the hyperbaric facility accreditation program in Southern
          Africa. He is active in safety education programs for DAN, serves on
          educational faculties at four international universities, regularly
          presents papers at a range of international scientific meetings, and
          has been faculty of a medical educational organization in Texas for
          more than 23 years.
        </p>
      </div>
    </div>
  );
}