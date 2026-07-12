import Image from "next/image";
import Head from "next/head";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scrollToTop";

export default function Consulting() {
  return (
    <>
      <Head>
        <title>SHANFE | Consulting Services</title>
        <meta
          name="description"
          content="Clinical hyperbaric consulting, project management, and expert witness services for diving, aerospace, and medical operations."
        />
      </Head>

      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      {/* Hero */}
      <div className="w-full">
        <Image className='w-full relative tablet:hidden' src='/images/consulting_hero.png' width={2000} height={2000} alt='Hyperbaric Training & Courses' />
        <Image className='desktop:hidden w-full relative' src='/images/consulting_hero_mobile.png' width={2000} height={2000} alt='Hyperbaric Training & Courses' />
      </div>

      <main className="flex flex-col items-center gap-24 p-10 max-w-7xl mx-auto mobile:p-8">

        {/* Core Services */}
        <section className="grid grid-cols-3 tablet:grid-cols-1 gap-10 w-full">
          <ServiceCard
            title="Clinical Hyperbaric Operations"
            description="Operational consulting focused on safety, compliance, staffing, and clinical best practices for hyperbaric facilities."
            imageSrc="/images/photo28.JPG"
            imageAlt="Clinical hyperbaric operations consulting"
          />

          <ServiceCard
            title="Project Management"
            description="End-to-end project management for new installations or refurbishment of hyperbaric chambers."
            imageSrc="/images/photo03.png"
            imageAlt="Hyperbaric project management"
          />

          <ServiceCard
            title="Expert Witness Services"
            description="Independent expert analysis, case review, and testimony for legal proceedings."
            imageSrc="/images/photo04.png"
            imageAlt="Expert witness services"
          />
        </section>

        {/* Clinical Consulting */}
        <section className="flex flex-col gap-10 max-w-5xl">
          <h2 className="text-4xl font-bold">Clinical Consulting</h2>

          <p className="text-lg text-gray-700">
            We offer turnkey solutions for new hyperbaric facilities, removing uncertainty
            and ensuring safe, compliant, and efficient operations from day one.
          </p>

          <ul className="grid grid-cols-2 tablet:grid-cols-1 gap-4 text-lg list-disc list-inside">
            <li>Facility standard operating procedures</li>
            <li>Patient education and documentation</li>
            <li>Liability and daily screening documentation</li>
            <li>Emergency action planning</li>
            <li>Staff training and certification</li>
            <li>Equipment selection and vendor identification</li>
            <li>Refurbishment, installation, maintenance, and repairs</li>
            <li>Staffing solutions (permanent or temporary placement)</li>
          </ul>

          <p className="text-lg font-semibold">
            We take the guesswork out — so you don’t have to reinvent the wheel.
          </p>
        </section>

        {/* Expert Witness */}
        <section className="flex flex-col gap-10 max-w-5xl">
          <h2 className="text-4xl font-bold">Expert Witness Services</h2>

          <p className="text-lg text-gray-700">
            SHANFE has extensive experience providing expert witness testimony and case
            review in complex technical and medical cases.
          </p>

          <ul className="list-disc list-inside text-lg">
            <li>
              <strong>Diving:</strong> recreational, technical, and occupational accidents
              and fatalities
            </li>
            <li>
              <strong>Aerospace:</strong> hypoxia, oxygen systems, and facial hair
              considerations
            </li>
          </ul>

          <p className="text-lg text-gray-700">
            We have provided testimony in U.S. Federal Court (including depositions) and
            Canadian provincial cases involving diving fatalities.
          </p>
        </section>
        <ScrollToTopButton />
      <Footer />
      </main>

      
    </>
  );
}

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt = "",

}: ServiceCardProps) {

  return (
    <div className="rounded-3xl border shadow-2xl flex flex-col gap-5 p-5 items-center overflow-hidden shadow-sm hover:shadow-md transition">
      <Image
        className="rounded-3xl"
        src={imageSrc}
        width={200}
        height={200}
        alt={imageAlt}
      />

      <div className=" flex tablet:items-center flex-col gap-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg text-gray-700 tablet:text-center">{description}</p>
      </div>
    </div>
  );
}
