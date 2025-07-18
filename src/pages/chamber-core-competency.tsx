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
        <title>SHANFE | Chamber Core Competency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
      <Image
        className='w-full relative'
        src='/images/COCC2.png'
        width={2000}
        height={2000}
        alt=''
        />
        </div>

      <main className="flex flex-col items-center gap-1 p-24 pt-20 pb-20 mobile:p-8 bg-white w-full">
        <div className="flex flex-col w-full max-w-5xl">
          <h1 className="text-3xl font-bold mb-6">Chamber Operator Core Competencies</h1>
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
          <p className="mb-4">7 days in person</p>
          </div>
          
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Location</h2>
          <p className="mb-4">SeaForce Hyperbaric, St. John’s, Newfoundland, Canada</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Dates</h2>
          <p className="mb-4">May 11–17, 2025</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold ">Cost</h2>
          <p className="mb-4">$3,000.00</p>
          </div>
          </div>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Topics Covered</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Hands-on operation of a hyperbaric chamber including start-up and shut-down procedures</li>
            <li>Operation of treatment tables, diving tables, and SUR-D-O₂ tables</li>
            <li>Chamber ventilation and maintenance requirements</li>
            <li>Auxiliary equipment operation and chamber cleaning</li>
            <li>Safety considerations and inspection of acrylics</li>
            <li>National and international standards</li>
            <li>Oxygen toxicity management and air brakes</li>
            <li>Monitoring for oxygen and carbon dioxide inside chambers</li>
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