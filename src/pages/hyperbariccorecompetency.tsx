import Head from 'next/head';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Button from '@/components/button';
import ScrollToTopButton from '@/components/scrollToTop';
import Link from 'next/link';
import Script from "next/script";
import Image from "next/image";
import RegisterForm from '@/components/registerForm';

export default function ChamberCoreCompetencyPage() {
  return (
    <>
      <Head>
        <title>SHANFE | Hyperbaric Chamber Operator Core Competency Course</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="7-day in-person Chamber Operator Core Competency training in St. John's, NL. Practical instruction in chamber operation, decompression protocols, oxygen toxicity, safety inspections, and maintenance—ideal for certification, recertification, or as pre-requisite for diving or tunnel operations roles." />
        <meta name="keywords" content="chamber operator training, hyperbaric chamber core competency, commercial diving chamber course, CSA Z275.4 core competency, DCBC diver training, hyperbaric decompression procedures, oxygen toxicity prevention, chamber safety protocols, chamber maintenance training, tunnel operations hyperbaric training, diver medic training" />
      </Head>
      <>
      {/* Google Tag Manager Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-R38974EDZ7"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-R38974EDZ7');
        `}
      </Script>
    </>
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      <main className="flex flex-col items-center gap-1 p-24 pt-5 pb-20 mobile:p-8 bg-white w-full">
         <div className="text-Chocolate shadow-xl flex flex-row w-full gap bg-Eggshell items-center p-10 gap-10 rounded-3xl mt-10 mb-10 relative mobile:flex-col">
           <Image className="rounded-3xl" src="/images/photo19.png" width={450} height={350} alt="" />
              <div className="gap-5 flex flex-col">
               <h1 className="text-5xl font-bold tablet:text-center">#110 Hyperbaric Core Competencies Course</h1>
                <p>This course is content rich and intense: you will learn how to safely operate a hyperbaric chamber and understand and apply decompression procedures and treatment protocols, manage diving-related medical emergencies, including decompression sickness, barotrauma, and nitrogen narcosis , ensure the safe and effective use of hyperbaric chambers as well as how to comply with relevant safety regulations and industry standards. </p>
                  </div>
               </div>
        <div className="flex flex-col pt-5 w-full max-w-5xl">
          <h1 className="text-3xl font-bold mb-6">	#110 Hyperbaric Core Competencies Course</h1>
          <p className="mb-4">
            This course can be combined with one of our other online courses to be eligible for certification as a clinical chamber operator, or certification as an operator in support of occupational diving or tunnel operations, or towards certification to operate the SOS system evacuation chamber. 
            <br /><br />
            This course alone does not qualify for certification but can be used for recertification for those holding an out-of-date qualification or for retraining.
          </p>

          <div className="flex flex-col gap-1">
            <div className="content-center items-center">
          <h2 className="text-2xl font-semibold ">Pre-requisites</h2>
          <p className="mb-4">None.</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Duration</h2>
          <p className="mb-4">3 days in person</p>
          </div>
          
          
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Dates</h2>
          <p className="mt-4">April 8th to 10th, 2026 - Calgary, AB, CA.</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold ">Cost</h2>
          <p className="mb-4">$1,500.00</p>
          </div>
          </div>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Topics Covered</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Chamber grounding</li>
            <li>Predive checks of the patient</li>
            <li>Chamber travel rates</li>
            <li>Time keeping tables, air brakes, travel rate</li>
            <li>Log books for patient, chamber, operator</li>
            <li>Air brakes</li>
            <li>Decompression considerations</li>
            <li>History of hyperbaric</li>
            <li>Gas physics</li>
            <li>Hyperbaric physiologic considerations</li>
            <li>DCS</li>
            <li>AGE</li>
            <li>Approved indications/contraindication</li>
            <li>Medical anatomical terminology</li>
            <li>Oxygen toxicity</li>
            <li>Barotrauma</li>
            <li>Record keeping HIPPA compliance</li>
            <li>Canadian standards and provincial regulations</li>
            <li>HBOT research considerations and processes</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Course Objectives</h2>
          <ul className="list-decimal list-inside mb-8">
            <li>Safely operate a hyperbaric chamber</li>
            <li>Understand and apply decompression procedures and treatment protocols</li>
            <li>Manage diving-related medical emergencies, including decompression sickness, barotrauma, and nitrogen narcosis</li>
            <li>Ensure the safe and effective use of hyperbaric chambers</li>
            <li>Comply with relevant safety regulations and industry standards</li>
          </ul>

          <p className="mb-6">
            This course is intense and content rich, with a long daily commitment. Students are expected to spend 4–5 hours each evening completing knowledge reviews and required reading. 
            Some of the reading can be completed prior to the first day to support students with unique scheduling needs. 
            <br /><br />
            If you are unsure about the time commitment or have special needs (e.g., English as a second language), please contact <strong>Sherri Ferguson</strong> to discuss support options.
          </p>

          <p className="mb-6">
            Please note: travel and accommodation are not included. Shanfe will assist students in finding lower-cost shared student housing if they prefer not to stay in a hotel.
          </p>

          {/* Contact Info */}
          <div className="text-center">
            <RegisterForm/>
            
          </div>
        </div>

        {/* Back button at bottom */}
        <div className="pt-12 pb-20">
          <Link href="/courses"><Button backgroundColor="Eggshell">Back to All Courses</Button></Link>
        </div>

        <ScrollToTopButton />
        <Footer />
      </main>
    </>
  );
}