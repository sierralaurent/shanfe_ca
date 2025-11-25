import Head from 'next/head';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Button from '@/components/button';
import ScrollToTopButton from '@/components/scrollToTop';
import Link from 'next/link';
import Script from "next/script";
import Image from "next/image";
import RegisterForm from '@/components/registerForm';

export default function introhyperbaricmedicine() {
  return (
    <>
      <Head>
        <title>SHANFE | #100 Introduction to Myperbaric Medicine</title>
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
<div className='flex flex-col items-center'>
      
        </div>

      <main className="flex flex-col items-center gap-1 p-24 pt-20 pb-20 mobile:p-8 bg-white w-full">
        <div className="flex flex-col w-full max-w-5xl">
          <h1 className="text-3xl font-bold mb-6">	#100 Introduction to Hyperbaric Medicine</h1>

          <div className="flex flex-col gap-1">
            <div className="content-center items-center">
          <h2 className="text-2xl font-semibold ">Pre-requisites</h2>
          <p className="mb-4">None.</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Duration</h2>
          <p className="mb-4">5 days in person</p>
          </div>
          
          
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Dates</h2>
          <p className="mb-4">March 4th to 7th, 2026 - Tobermory, ON, CA.</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold ">Cost</h2>
          <p className="mb-4">$975</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold ">Course Description</h2>
          <p className="mb-4">This 5 day course is an inter-professional educational activity that
                                provides a first step toward credentialing or certification in this
                                specialized field of medicine. HMTT is approved as an introductory
                                course in hyperbaric medicine by the Undersea & Hyperbaric
                                Medical Society and the National Board of Diving and Hyperbaric
                                Medical Technology. Academics include: physical and physiological
                                principles of hyperbaric oxygen therapy; hyperbaric mechanism of
                                action in the indications accepted by the Undersea & Hyperbaric
                                Medical Society; potential risks and complications of hyperbaric
                                oxygen; and currently accepted standards for the safe application of
                                hyperbaric oxygen therapy. The course content pertains to both
                                monoplace and multiplace facilities. The comprehensive curriculum
                                is presented by a large faculty of experts.
                                Completion of this course does not constitute certification in hyperbaric medicine.</p>
          </div>
          </div>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Topics Covered</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Foundation Knowledge</strong></li>
            <ul className="list-disc list-inside ml-4 mt-1">
                <li>History of Hyperbaric Medicine</li>
                <li>Physical Effects of Pressure Change</li>
                <li>Physiology & Pharmacology of Hyperbaric Gases</li>
                <li>Decompression Theory</li>
            </ul>
            <li className="mt-3"><strong>Safety*</strong></li>
            <ul className="list-disc list-inside ml-6 mt-1">
                <li>Barotrauma</li>
                <li>Fire Safety</li>
                <li>Decompression Tables</li>
                <li>Hyperbaric Standards & Guidelines</li>
                <li>Hyperbaric Chamber Systems</li>
                <li>Operational Chamber Safety</li>
            </ul>
            <li className="mt-3"><strong>Practical Exercise</strong></li>
            <ul className="list-disc list-inside ml-4 mt-1">
                <li>Hyperbaric Chamber Equipment</li>
                <li>Hyperbaric Chamber Operations</li>
                <li>Transcutaneous Oximetry</li>
            </ul>
            <li className="mt-3"><strong>Administrative</strong></li>
            <ul className="list-disc list-inside ml-4 mt-1">
                <li>Documentation</li>
                <li>Reimbursement</li>
                <li>Professional Society Resources</li>
                <li>Hyperbaric Facility Management</li>
            </ul>
            <li className="mt-3"><strong>Ethics*</strong></li>
            <ul className="list-disc list-inside ml-4 mt-1">
                <li>Off-label uses of HBOT</li>
            </ul>
            <li className="mt-3"><strong>Clinical</strong></li>
            <ul className="list-disc list-inside ml-4 mt-1">
                <li>Acute Traumatic Ischemia</li>
                <li>Arterial Gas Embolism</li>
                <li>Arterial Insufficiencies</li>
                <li>Avascular Necrosis</li>
                <li>Carbon Monoxide Poisoning</li>
                <li>Central Retinal Artery Occlusion</li>
                <li>Compromised Flaps &amp; Grafts</li>
                <li>Decompression Sickness</li>
                <li>Diabetic Foot Ulcers</li>
                <li>Exceptional Blood Loss Anemia</li>
                <li>Idiopathic Sudden Sensorineural Hearing Loss</li>
                <li>Intracranial Abscess</li>
                <li>Gas Gangrene</li>
                <li>Necrotizing Fasciitis</li>
                <li>Osteomyelitis</li>
                <li>Radiation Injury</li>
                <li>Thermal Burns</li>
                <li>Ancillary Equipment</li>
                <li>Interpretation of TCOM</li>
                <li>Side Effects and Contraindications</li>
            </ul>
            <li className="mt-3"><strong>Course Evaluation</strong></li>
            <ul className="list-disc list-inside ml-4 mt-1">
                <li>Daily Quizzes</li>
                <li>Course Review</li>
            </ul>

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