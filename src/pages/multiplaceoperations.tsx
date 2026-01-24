import Head from 'next/head';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Button from '@/components/button';
import ScrollToTopButton from '@/components/scrollToTop';
import Link from 'next/link';
import Script from "next/script";
import Image from "next/image";
import RegisterForm from '@/components/registerForm';

export default function multiplaceoperations() {
  return (
    <>
      <Head>
        <title>SHANFE | #120 Multiplace Chamber Operator Course</title>
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

      <main className="flex flex-col items-center gap-1 p-24 pt-8 pb-20 mobile:p-8 bg-white w-full">
        <div className="text-Chocolate shadow-xl flex flex-row w-full gap bg-Eggshell items-center p-10 gap-10 rounded-3xl mt-10 mb-10 relative mobile:flex-col">
                      <Image className="rounded-3xl" src="/images/photo29.png" width={350} height={350} alt="" />
                      <div className="gap-5 flex flex-col">
                        <h1 className="text-5xl font-bold tablet:text-center">#120 Multiplace Chamber Operator Course</h1>
                        <p></p>
                      </div>
                    </div>
        <div className="flex flex-col w-full max-w-5xl">
          <div className="flex flex-col gap-1">
            <div className="content-center items-center">
          <h2 className="text-2xl font-semibold ">Pre-requisites</h2>
          <p className="mb-4">None.</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Duration</h2>
          <p className="mb-4">4 days in person</p>
          </div>
          
          
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Dates</h2>
          <p className="mb-4">TBA</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold ">Cost</h2>
          <p className="mb-4">$2,000.00</p>
          </div>
          </div>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Topics Covered</h2>
          <ul className="list-disc list-inside mb-6">
             <li>Patient flow</li>
                <li>Predive checks of the chamber</li>
                <li>Emergency procedures</li>
                <li>Chamber cleaning</li>
                <li>Ventilation calculations</li>
                <li>Venting procedures</li>
                <li>Recording and time keeping</li>
                <li>Compressors and air accumulators</li>
                <li>Viewport inspections</li>
                <li>Maintenance procedures - med lock procedures</li>
                <li>Transfer lock procedures</li>
                <li>Documentation</li>
                <li>Lessons learned past incidents</li>
                <li>Resources</li>
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