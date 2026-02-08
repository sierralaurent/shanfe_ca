import Image from "next/image";
import Head from "next/head";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scrollToTop";

const auditServices = [
  {
    title: "Clinical Hyperbaric Operations",
    description:
      "Audits focused on patient safety, operational procedures, and facility compliance.",
    imageSrc: "/images/photo28.JPG",
  },
  {
    title: "Hyperbaric Diving Support",
    description:
      "Operational reviews ensuring safe diving support practices and regulatory alignment.",
    imageSrc: "/images/photo05.png",
  },
  {
    title: "Tunnelling Hyperbaric Intervention",
    description:
      "Specialized audits for hyperbaric tunnelling intervention environments.",
    imageSrc: "/images/photo04.png",
  },
  {
    title: "Hypobaric Operations",
    description:
      "Inspection and compliance verification for altitude and hypobaric systems.",
    imageSrc: "/images/photo02.png",
  },
  {
    title: "Occupational Diving Operations",
    description:
      "Safety and procedural audits supporting occupational diving programs.",
    imageSrc: "/images/photo03.png",
  },
];

export default function Audits() {
  return (
    <>
      <Head>
        <title>SHANFE | Compliance Audits</title>
        <meta
          name="description"
          content="Compliance audits to Canadian Standards for hyperbaric, hypobaric, and occupational diving operations."
        />
      </Head>

      {/* Nav */}
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      {/* Hero */}
      <div className="w-full">
              <Image className='w-full relative tablet:hidden' src='/images/audits_hero.png' width={2000} height={2000} alt='Compliance Audits-SHANFE conducts comprehensive compliance audits aligned with Canadian
            Standards to ensure operational safety, regulatory adherence, and risk reduction.' />
              <Image className='desktop:hidden w-full relative' src='/images/auidts_hero_mobile.png' width={2000} height={2000} alt='Compliance Audits-SHANFE conducts comprehensive compliance audits aligned with Canadian
            Standards to ensure operational safety, regulatory adherence, and risk reduction.' />
            </div>

      <main className="flex flex-col items-center gap-24 p-10 max-w-7xl mx-auto mobile:p-8">


        {/* ⭐⭐⭐ FULL WIDTH CAROUSEL */}
        <section className="w-full flex flex-col gap-8 shadow-2xl p-6 rounded-lg border border-Sky border-t-4">
          
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-4xl font-bold">
              Audit Services
            </h2>

            <p className="text-lg max-w-xl">
              Compliance audits across clinical, industrial, and operational hyperbaric environments.
            </p>
          </div>

          <div
            className="
              flex gap-8 overflow-x-auto pb-6
              snap-x snap-mandatory
              scrollbar-hide
            "
          >
            {auditServices.map((service, index) => (
              <AuditCard key={index} {...service} />
            ))}
          </div>

        </section>

        <section className="w-full flex flex-col gap-12 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold">Clinical Audit Program</h2>

          <p className="text-lg text-gray-700">
            We offer safety and operational audits aligned with the Canadian
            Standards Association <strong>Z275.1</strong> standard.
          </p>

          <p className="text-lg text-gray-700">
            Our audit program includes review of key documentation combined with an onsite
            inspection to identify areas of non-compliance. We provide solutions through
            risk assessment, mitigation strategies, or rectification.
          </p>

  <div className="flex flex-row tablet:flex-col gap-20 ">
  <div className="flex flex-col items-center gap-4 p-6 rounded-3xl shadow-xl">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12 text-Sky"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m-6-8h6M9 6h6M4 6h2v14H4V6zm14 0h2v14h-2V6z" />
    </svg>

    <h3 className="text-xl font-bold">Documentation Review</h3>

    <p className="text-lg text-center">
      The documentation review ensures all operational and patient care records are complete, compliant, and up to date. This includes procedures, maintenance logs, staff onboarding, certifications, and quality improvement initiatives.
    </p>

    <div className="flex flex-row gap-5">
      <ul className="gap-4 text-sm gap-4 list-disc list-inside">
        <li>Company SOP</li>
        <li>Emergency Action Plan</li>
        <li>Preventative Maintenance Plan</li>
        <li>Documentation of unplanned maintenance</li>
        <li>Patient information and policies</li>
        <li>Infection control and health initiatives</li>
        <li>HIPAA compliance of records</li>
        <li>Quality improvement programs</li>
        <li>Onboarding process for new staff</li>
        <li>Staff certifications and authorizations</li>
      </ul>
    </div>
  </div>

  <div className="flex flex-col items-center gap-4 p-6 rounded-3xl shadow-xl">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12 text-Sky"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
    </svg>

    <h3 className="text-xl font-bold">Onsite Inspection</h3>

    <p className="text-lg text-center">
      The onsite inspection evaluates the facility, equipment, and overall patient care processes to ensure safety and compliance. It includes observing patient flow, verifying staff training and medical clearances, and reviewing emergency readiness and procedural checklists.
    </p>

    <div className="flex flex-row gap-5">
      <ul className="gap-4 text-sm gap-4 list-disc list-inside">
        <li>Inspection of the facility and equipment</li>
        <li>Observation of patient preparation and flow</li>
        <li>Inside attendant decompression tracking</li>
        <li>Medical clearance and staff training verification</li>
        <li>Review of checklists (start-up / go-no-go)</li>
        <li>Consent process review</li>
        <li>Emergency equipment and readiness</li>
      </ul>
    </div>
  </div>

  <div className="flex flex-col items-center gap-4 p-6 rounded-3xl shadow-xl">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12 text-Sky"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zm0 6v14m0 0l-6-4.5M12 22l6-4.5" />
    </svg>

    <h3 className="text-xl font-bold">Referenced Standards</h3>

    <p className="text-lg text-center">
      All inspections and reviews are guided by recognized industry standards to ensure safety, compliance, and best practices. These include engineering, safety, and operational guidelines for clinical hyperbaric facilities.
    </p>

    <div className="flex flex-row gap-5">
      <ul className="gap-4 text-sm gap-4 list-disc list-inside">
        <li>ASME PVHO-2</li>
        <li>Risk Assessment Guide for Installation and Operation of Clinical Hyperbaric Facilities</li>
        <li>NFPA 99</li>
        <li>UHMS Hyperbaric Facility Design and Operations Guide</li>
      </ul>
    </div>
  </div>
</div>
</section>

        <section className="flex flex-col gap-8 max-w-5xl items-center">
            <div className="flex flex-col gap-8 ">
          <h2 className="text-4xl font-bold">Audit Outcomes</h2>

          <p className="text-lg text-gray-700">
            At the conclusion of the audit, a detailed report will identify any areas where
            current standards are not met. Facilities may then choose to:
          </p>

          <ol className="text-lg list-decimal list-inside flex flex-col gap-2">
            <li>Come into compliance</li>
            <li>Document mitigations through a formal risk assessment</li>
            <li>Decline recommendations</li>
          </ol>
          </div>

          <div className="rounded-3xl p-8 border shadow-xl flex flex-col gap-3 max-w-3xl">
            <p className="font-semibold">Possible determinations include:</p>
            <ul className="list-disc list-inside text-lg">
              <li>Letter of compliance without remarks</li>
              <li>Letter of compliance with exceptions</li>
              <li>Letter of non-compliance</li>
            </ul>
          </div>
        </section>
        <ScrollToTopButton />
        <Footer />
      </main>
    </>
  );
}

/* ================= CARD ================= */

type AuditCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

function AuditCard({ title, description, imageSrc }: AuditCardProps) {
  return (
    <div
      className="
        snap-start
        min-w-[85%]
        tablet:min-w-[45%]
        desktop:min-w-[30%]
        rounded-3xl
        border
        shadow-xl
        hover:shadow-md
        transition
        overflow-hidden
      "
    >
      <Image
        src={imageSrc}
        width={500}
        height={350}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
