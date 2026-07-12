import Head from 'next/head';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Button from '@/components/button';
import ScrollToTopButton from '@/components/scrollToTop';
import Link from 'next/link';
import Script from "next/script";
import Image from "next/image";
import RegisterForm from '@/components/registerForm';

export default function soshyperlitechamberoperations() {
  return (
    <>
      <Head>
        <title>SHANFE | SOS Hyperlite Hyperbaric Chamber Operations Course</title>
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
          <h1 className="text-3xl font-bold mb-6">	#160 SOS Hyperlite Chamber Operations</h1>
          <h2 className="text-2xl font-semibold mb-8 ">Hands on training and theory
</h2>

          <div className="flex flex-col gap-1">
            <div className="content-center items-center">
          <h2 className="text-2xl font-semibold ">Pre-requisites</h2>
          <p className="mb-4">None.</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Duration</h2>
          <p className="mb-4">2 days on demand</p>
          </div>
          
          
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Dates</h2>
          <p className="">TBA</p>

          </div>
          <div className="content-center mt-4">
          <h2 className="text-2xl font-semibold ">Cost</h2>
          <p className="mb-4">$1,000.00</p>
          </div>
          </div>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Topics Covered</h2>
          <ul className="list-disc list-inside mb-6">
             <li>Supporting equipment requirements</li>
                <li>Unpacking/deploying</li>
                <li>Inspection of acrylics</li>
                <li>Assembly</li>
                <li>Patient loading</li>
                <li>Patient predive check</li>
                <li>Medical support</li>
                <li>Record keeping/time keeping</li>
                <li>Loading to a ground transport</li>
                <li>Loading to a fixed wing</li>
                <li>Loading to a rotary wing</li>
                <li>Transport by watercraft considerations</li>
                <li>Altitude compensations required</li>
                <li>Venting procedures</li>
                <li>Travel rates</li>
                <li>Air brakes</li>
                <li>Cleaning procedures</li>
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