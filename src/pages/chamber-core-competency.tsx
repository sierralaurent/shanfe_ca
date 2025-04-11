import Head from 'next/head';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Button from '@/components/button';
import ScrollToTopButton from '@/components/scrollToTop';
import Link from 'next/link';

export default function ChamberCoreCompetencyPage() {
  return (
    <>
      <Head>
        <title>SHANFE | Chamber Core Competency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      <main className="flex flex-col items-center p-24 pt-20 pb-20 mobile:p-8 bg-white w-full">
        <div className="w-full max-w-5xl">

          {/* Title */}
          <h1 className="text-4xl font-bold mb-6">Chamber Operator Core Competencies</h1>

          {/* Description */}
          <p className="mb-4">
            This course can be combined with one of our other online courses to be eligible for certification as a clinical chamber operator, or certification as an operator in support of occupational diving or tunnel operations, or towards certification to operate the SOS system evacuation chamber. 
            <br /><br />
            This course alone does not qualify for certification but can be used for recertification for those holding an out-of-date qualification or for retraining.
          </p>

          <div className="flex flex-col gap-1">
            <div className="content-center items-center">
          <h2 className="text-2xl font-semibold mt-5 mb-2">Pre-requisites</h2>
          <p className="mb-4">None.</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold mt-5 mb-2">Duration</h2>
          <p className="mb-4">7 days in person</p>
          </div>
          
          <div className="content-center">
          <h2 className="text-2xl font-semibold mt-5 mb-2">Location</h2>
          <p className="mb-4">SeaForce Hyperbaric, St. John’s, Newfoundland</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold mt-5 mb-2">Dates</h2>
          <p className="mb-4">May 11–17, 2025</p>
          </div>
          <div className="content-center">
          <h2 className="text-2xl font-semibold mt-5 mb-2">Cost</h2>
          <p className="mb-4">$3,000.00</p>
          </div>
          </div>
          <h2 className="text-2xl font-semibold mt-5 mb-2">Topics Covered</h2>
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
          <Link href="/courses"><Button backgroundColor="Eggshell">Back to Courses</Button></Link>
        </div>

        <ScrollToTopButton />
        <Footer />
      </main>
    </>
  );
}