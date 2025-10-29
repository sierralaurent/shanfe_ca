import Head from 'next/head';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Button from '@/components/button';
import ScrollToTopButton from '@/components/scrollToTop';
import Link from 'next/link';
import Script from "next/script";
import Image from "next/image";
import RegisterForm from '@/components/registerForm';

export default function HyperbaricMedicinePage() {
  return (
    <>
      <Head>
        <title>SHANFE | Clinical Hyperbaric Medicine Online Course</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="5-day live online Clinical Hyperbaric Medicine course approved for 40 CAT-A CME credits by UHMS, meeting CSA Z275.4 certification via the Diver Certification Board of Canada. Covers safety protocols, TCOM, wound care principles, hyperbaric oxygen therapy, and risk management." />
        <meta name="keywords" content="clinical hyperbaric medicine, hyperbaric oxygen therapy training, HBOT course, hyperbaric CME credits, UHMS approved training, CSA Z275.4, DCBC approved course, TCOM training, wound care hyperbaric medicine, hyperbaric safety, medical hyperbarics, hyperbaric risk assessment, online hyperbaric course" />
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
          <h1 className="text-2xl font-bold mb-6">#130 Monoplace Chamber Operator Course</h1>

          <div className="flex flex-col gap-1">
            <div className="content-center items-center">
          <h2 className="text-2xl font-semibold ">Pre-requisites</h2>
          <p className="mb-4">None</p>
          </div>
          <div className="content-center items-center">
          <h2 className="text-2xl font-semibold ">Recommended For:</h2>
          <p className="mb-4">Chamber operators, technicians, clinicians, nurses, physicians •</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Duration</h2>
          <p className="mb-4">2 days</p>
          </div>
          
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Location</h2>
          <p className="mb-4">Calgary, Alberta, Canada</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Dates</h2>
          <p className="mb-4">February 8th to 9th</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold ">Cost</h2>
          <p className="mb-4">$1000.00</p>
          </div>
          </div>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Key Areas of Study:</h2>
          <ul className="list-disc list-inside mb-6">
              <li>Patient grounding</li>
              <li>Loading a stretcher</li>
              <li>Air filled chambers vs oxygen filled chambers</li>
              <li>Patient flow</li>
              <li>Predive checks of the chamber</li>
              <li>Emergency procedures</li>
              <li>Chamber cleaning</li>
              <li>Acrylic inspection</li>
              <li>Time and record keeping</li>
              <li>Travel rates</li>
              <li>Go-no-go list and STOP procedures</li>
              <li>Lessons learned past incidents</li>
              <li>Resources</li>
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