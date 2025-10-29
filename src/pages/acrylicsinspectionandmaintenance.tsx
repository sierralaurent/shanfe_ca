import Head from 'next/head';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Button from '@/components/button';
import ScrollToTopButton from '@/components/scrollToTop';
import Link from 'next/link';
import Script from "next/script";
import Image from "next/image";
import RegisterForm from '@/components/registerForm';

export default function acrylicsinspectionandmaintenance() {
  return (
    <>
      <Head>
        <title>SHANFE | #190 Inspection and Maintenance of Acrylics</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Professional diving operations support training covering safety, HBOT, chamber operations, and CSA Z275.4/DCBC certification for divers." />
        <meta name="keywords" content="diving operations support course, commercial diving safety, diver hyperbaric training, diving medicine support, DAN diver safety training, chamber operations for diving, CSA Z275.4 diver training, DCBC diver course, hyperbaric rescue procedures, diving emergency response, underwater operations safety" />
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
          <h1 className="text-2xl font-bold mb-6">#190 Inspection and Maintenance of Acrylics</h1>


          <div className="flex flex-col gap-1">
            <div className="content-center items-center">
          <h2 className="text-2xl font-semibold ">Pre-requisites</h2>
          <p className="mb-4">None</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Duration</h2>
          <p className="mb-4">1 day</p>
          </div>
          
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Location</h2>
          <p className="mb-4">Calgary, Alberta, Canada</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Dates</h2>
          <p className="mb-4">February 15th</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold ">Cost</h2>
          <p className="mb-4">$500.00</p>
          </div>
          </div>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Course Objectives:</h2>
          <ul className="list-disc list-inside mb-6">
             <li>How to inspect monoplace chambers acrylic tubes</li>
                <li>How to inspect view ports</li>
                <li>Cleaning agents</li>
                <li>Inspection of crazing and cracks</li>
                <li>When and how to polish</li>
                <li>How to avoid damage</li>
                <li>When to replace</li>
                <li>PVHO standards</li>
                <li>Paperwork</li>
          </ul>


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