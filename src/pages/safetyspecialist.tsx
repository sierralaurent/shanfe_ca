import Head from 'next/head';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Button from '@/components/button';
import ScrollToTopButton from '@/components/scrollToTop';
import Link from 'next/link';
import Script from "next/script";
import Image from "next/image";
import RegisterForm from '@/components/registerForm';

export default function SafetySpecialist() {
  return (
    <>
      <Head>
        <title>SHANFE | Hyperbaric Safety Specialist Course</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Hyperbaric Safety Specialist training for chamber operators, clinicians, and technicians. Covers hazard assessment, protocols, and CSA Z275.4 safety." />
        <meta name="keywords" content="hyperbaric safety specialist, hyperbaric chamber safety training, hyperbaric hazard assessment, HBOT safety course, hyperbaric safety protocols, chamber fire safety, oxygen handling safety, CSA Z275.4 safety training, hyperbaric risk management, hyperbaric compliance training" />
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
        src='/images/HSS.png'
        width={2000}
        height={2000}
        alt='Hyperbaric Safety Specialist Course'
        />
        </div>

      <main className="flex flex-col items-center gap-1 p-24 pt-20 pb-20 mobile:p-8 bg-white w-full">
        <div className="flex flex-col w-full max-w-5xl">
          <h1 className="text-3xl font-bold mb-6">Hyperbaric Safety Specialist</h1>
          <p className="mb-4">
            This 3-day program provides the necessary tools and resources to fulfill the
            responsibilities of the Hyperbaric Safety Director or Safety Officer (as defined by the
            CSA Z275.1-23). 
            <br /><br />
            Note: Completion of this course does not constitute certification or credentialling.
          </p>

          <div className="flex flex-col gap-1">
            <div className="content-center items-center">
          <h2 className="text-2xl font-semibold ">Pre-requisites</h2>
          <p className="mb-4">None</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Duration</h2>
          <p className="mb-4">2 days in person</p>
          </div>
          
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Location</h2>
          <p className="mb-4">Calgary, Alberta, Canada</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold">Dates</h2>
          <p className="mb-4">February 13th to 14th</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold ">Cost</h2>
          <p className="mb-4">$1,000.00</p>
          </div>
          </div>
          <h2 className="text-2xl font-semibold mt-4 mb-4">Course Objectives:</h2>
          <p className="mb-4">Upon completion of the course, participants should be able to manage the safety issues
            associated with the care of patients in a hyperbaric medical setting, develop a
            comprehensive safety program, and know how to conduct safe hyperbaric chamber
            operations in accordance with the current industry and regulatory standards.</p>
            <ul className="list-disc list-inside mb-6">
              <li>Hyperbaric safety management</li>
              <li>Principles of risk management</li>
              <li>Risk assessment process</li>
              <li>Fire chemistry</li>
              <li>Material selection</li>
              <li>Medical gas safety</li>
              <li>Regulatory environment</li>
              <li>Chamber maintenance</li>
              <li>Equipment risk</li>
              <li>Mishaps</li>
              <li>Off-label considerations for informed consent</li>
              <li>Hyperbaric team roles and responsibilities</li>
              <li>Emergency action plan</li>
            </ul>
          <h2 className="text-2xl font-semibold mb-4">Who Should Attend:</h2>
          <p className="mb-4">This course is appropriate for hyperbaric technologists, respiratory therapists, nurses,
            physicians, and department managers of a hyperbaric facility, divers, occupational
            safety specialist working in tunnelling and diving operations, dive supervisors and any
            member of a team exposed to compressed air environments.</p>
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