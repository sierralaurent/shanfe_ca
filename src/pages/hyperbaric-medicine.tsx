import Head from 'next/head';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Button from '@/components/button';
import ScrollToTopButton from '@/components/scrollToTop';
import Link from 'next/link';
import Script from "next/script";
import Image from "next/image";

export default function HyperbaricMedicinePage() {
  return (
    <>
      <Head>
        <title>SHANFE | Clinical Hyperbaric Medicine</title>
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
              src='/images/CHM.png'
              width={2000}
              height={2000}
              alt=''
              />
              </div>
      
      <main className="flex flex-col items-center gap-1 p-24 pt-20 pb-20 mobile:p-8 bg-white w-full">
        <div className="flex flex-col w-full max-w-5xl">
          <h1 className="text-2xl font-bold mb-6">Clinical Hyperbaric Medicine (Online)</h1>
          <p className="mb-4">
          This 5-day online course, offered monthly via International ATMO, complements the Chamber Core Competencies for certification under CSA Z275.4 through the Diver Certification Board of Canada. 
            <br /><br />
            Also approved for 40 CAT-A CME credits by the Undersea and Hyperbaric Medical Society and recognized by the National Board of Diving and Hyperbaric Medicine.
          </p>

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
          <p className="mb-4">5 days</p>
          </div>
          
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Location</h2>
          <p className="mb-4">Live Online</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Dates</h2>
          <p className="mb-4">Monthly</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold ">Cost</h2>
          <p className="mb-4">$975.00</p>
          </div>
          </div>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Key Areas of Study:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Clinical use of hyperbaric chambers</li>
            <li>Hyperbaric oxygen therapy and risk management</li>
            <li>Specialized equipment: TCOM, infusion pumps, ventilators</li>
            <li>Wound care principles and patient orientation</li>
            <li>Contraindications and safety standards</li>
          </ul>

          {/* Contact Info */}
          <div className="text-center">
            <p className="text-2xl p-5 mb-4 font-bold">
              To register or request a detailed syllabus:
            </p>
            <p className="text-lg mb-2">
              Email: <a href="mailto:mechal@shanfe.ca" className="text-blue-600 underline hover:text-blue-800">mechal@shanfe.ca</a>
            </p>
            <p className="text-lg mb-6">
              Phone: <a href="tel:+16048027069" className="text-blue-600 underline hover:text-blue-800">+1-604-802-7069</a>
            </p>
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