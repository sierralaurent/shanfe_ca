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
        <title>SHANFE | Tunnel Operations Support Course</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Hyperbaric training for tunnel operations workers. Includes safety, decompression, chamber operation, and CSA Z275.4 certification." />
        <meta name="keywords" content="tunnel operations hyperbaric training, compressed air tunnel worker training, hyperbaric tunneling safety, tunnel decompression procedures, CSA Z275.4 tunnel course, tunnel worker hyperbaric certification, tunnel operations chamber training, pressurized tunnel safety, hyperbaric tunnel maintenance training" />
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
          <h1 className="text-4xl font-bold mb-6">#140 Tunnelling Chamber Operations Course</h1>
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
          <p className="mb-4">2 days</p>
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
          <p className="mb-4">$1,000.00</p>
          </div>
          </div>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Theory:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>CA deco tables</li>
            <li>Special considerations contaminated gas</li>
            <li>Compressor location</li>
            <li>Bentonite</li>
            <li>Tools</li>
            <li>TBM</li>
            <li>Saturation considerations</li>
            <li>Medical support</li>
            <li>T.U.P procedures</li>
            <li>Physiology and decompression considerations</li>
            <li>Standards and regulations in Canada</li>
            <li>Lessons learned past accidents</li>
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