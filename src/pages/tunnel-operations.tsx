import Head from 'next/head';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Button from '@/components/button';
import ScrollToTopButton from '@/components/scrollToTop';
import Link from 'next/link';
import Script from "next/script";
import Image from "next/image";
import RegisterForm from '@/components/registerForm';

export default function TunnelOperationsPage() {
  return (
    <>
      <Head>
        <title>SHANFE | Tunnel Operations Support</title>
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
                    src='/images/TOS.png'
                    width={2000}
                    height={2000}
                    alt=''
                    />
                    </div>
      <main className="flex flex-col items-center gap-1 p-24 pt-20 pb-20 mobile:p-8 bg-white w-full">
        <div className="flex flex-col w-full max-w-5xl">
          <h1 className="text-4xl font-bold mb-6">Hyperbaric Chamber Operator – Tunnel Operations
          Support</h1>
          <p className="mb-4">
          This online course, in conjunction with the Chamber Core Competency course, prepares participants for CSA Z275.4 certification as a chamber operator in tunneling environments. 
            <br /><br />
            Training focuses on operational safety, emergency procedures, and regulatory compliance.
          </p>

          <div className="flex flex-col gap-1">
            <div className="content-center items-center">
          <h2 className="text-2xl font-semibold ">Pre-requisites</h2>
          <p className="mb-4">Completed <Link href="/chamber-core-competency" className="text-blue-600 underline hover:text-blue-800 cursor-pointer">Chamber Core Competency course</Link></p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Duration</h2>
          <p className="mb-4">3 days</p>
          </div>
          
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Location</h2>
          <p className="mb-4">Live Online</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Dates</h2>
          <p className="mb-4">On Demand</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold ">Cost</h2>
          <p className="mb-4">$2,000.00</p>
          </div>
          </div>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Key Learning Modules:</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Module 1:</strong> Introduction to tunneling chamber operations</li>
            <li><strong>Module 2:</strong> Equipment, gas systems, and maintenance</li>
            <li><strong>Module 2:</strong> Hazard identification and emergency protocols</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Outcomes:</h2>
          <ul className="list-decimal list-inside mb-8">
            <li>Operate hyperbaric systems used in tunneling projects</li>
            <li>Apply safety and emergency protocols</li>
            <li>Meet compliance and performance standards</li>
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