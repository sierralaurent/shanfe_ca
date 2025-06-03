import Head from 'next/head';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Button from '@/components/button';
import ScrollToTopButton from '@/components/scrollToTop';
import Link from 'next/link';
import Script from "next/script";
import Image from "next/image";
import RegisterForm from '@/components/registerForm';

export default function DivingOperationsPage() {
  return (
    <>
      <Head>
        <title>SHANFE | Diving Operations Support</title>
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
              src='/images/ODS.png'
              width={2000}
              height={2000}
              alt=''
              />
              </div>

      <main className="flex flex-col items-center gap-1 p-24 pt-20 pb-20 mobile:p-8 bg-white w-full">
        <div className="flex flex-col w-full max-w-5xl">
          <h1 className="text-2xl font-bold mb-6">Hyperbaric Chamber Operator – Occupational Diving
          Support</h1>
          <p className="mb-4">
          This blended learning course prepares participants to support unrestricted surface-supplied mixed gas diving operations. It includes online instruction and hands-on training at one of our partner diving schools. 
          </p>

          <div className="flex flex-col gap-1">
            <div className="content-center items-center">
          <h2 className="text-2xl font-semibold ">Pre-requisites</h2>
          <p className="mb-4">None</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Duration</h2>
          <p className="mb-4">5 days (3 online, 2 in-person)</p>
          </div>
          
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Location</h2>
          <p className="mb-4">Online &amp; Partner Sites</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Dates</h2>
          <p className="mb-4">On Demand</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold ">Cost</h2>
          <p className="mb-4">$5,000.00</p>
          </div>
          </div>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Course Modules:</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Module 1: </strong>Overview of surface-supplied mixed gas diving</li>
            <li><strong>Module 2: </strong>Diving physics and gas calculations</li>
            <li><strong>Module 3: </strong>Diving physiology and decompression management</li>
            <li><strong>Module 4: </strong>Chamber equipment, operations, and troubleshooting</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Outcomes:</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Graduates will:</strong> Support mixed gas operations using hyperbaric systems</li>
            <li>Manage emergencies and decompression issues Maintain chamber systems for diver
            safety</li>
          </ul>

          {/* Contact Info */}
          <div className="text-center">
            <RegisterForm/>
            <p className="text-2xl p-5 mb-4 font-bold">
              To request a detailed syllabus:
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