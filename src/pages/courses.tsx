import Image from "next/image";
import Head from 'next/head';
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";
import Course01 from "@/components/course01";
import Course02 from "@/components/course02";
import Course03 from "@/components/course03";
import Course04 from "@/components/course04";
import Course05 from "@/components/course05";
import Course06 from "@/components/course06";
import Course07 from "@/components/course07";
import Course08 from "@/components/course08";
import ScrollToTopButton from "@/components/scrollToTop";
import Link from 'next/link';
import Script from "next/script";

type Course = {
  title: string;
  dates: string;
  format: string;
  tuition: string;
};

const courses: Course[] = [
  {
    title: 'Chamber Core Competency',
    dates: 'May 11–17',
    format: 'In Person – St. John’s',
    tuition: '$3,000',
  },
  {
    title: 'HCO - Clinical Hyperbaric Medicine',
    dates: 'Monthly',
    format: 'Online (5 days)',
    tuition: '$975',
  },
  {
    title: 'HCO – Diving Operations Support',
    dates: 'On Demand',
    format: 'Online / In Person (5 days)',
    tuition: '$5,000',
  },
  {
    title: 'HCO – Tunnel Operations Support',
    dates: 'On Demand',
    format: 'Online (3 days)',
    tuition: '$2,000',
  },
  {
    title: 'Hyperbaric Safety Specialist',
    dates: 'August 23–25',
    format: 'In Person – Thunder Bay',
    tuition: '$1,500',
  },
  {
    title: 'Acrylics Technician',
    dates: 'August 26',
    format: 'In Person – Thunder Bay',
    tuition: '$500',
  },
  {
    title: 'HCO - SOS Hyperlite Evacuation Chamber',
    dates: 'TBD',
    format: 'In Person (2 days)',
    tuition: '$1,800',
  },
];

export default function Courses() {
  return (
    <>
      <Head>
        <title>SHANFE | Courses</title>
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

      <main className="flex flex-col items-center p-24 pb-20 pt-20 mobile:p-8 bg-white w-full">
        <div className="w-full max-w-5xl">

          <h1 className="text-6xl font-bold mb-16 text-center">Hyperbaric Operations Training</h1>
          <p className="mb-6 text-lg ">
            Welcome to Shanfe Research and Consulting Ltd.'s professional training programs for individuals
            seeking careers in hyperbaric operations. Our comprehensive courses prepare participants for
            a wide range of roles including:
          </p>
          <ul className="list-disc text-lg  list-inside mb-6">
            <li>Clinical hyperbaric medicine</li>
            <li>Diving operations</li>
            <li>Tunneling and construction support</li>
            <li>Emergency evacuation</li>
          </ul>
          <p className="mb-6 text-xl ">
            All certification pathways begin with the <strong>Chamber Core Competency</strong> course. From there,
            students can pursue specialty certifications by the
            <strong> Divers Certification Board of Canada (DCBC)</strong>, in accordance with <em>CSA Z275.4 standards</em>.
          </p>
          <div className="flex flex-col items-center mb-5"> 
          <h2 className="text-4xl font-semibold mt-10 mb-4">2025 Course Offerings</h2>
            <div className="flex flex-row mobile:flex-col w-full justify-center gap-20 pt-10 pb-10">
            <Course01/>
            <Course02/>
            <Course03/>
            </div>
            <div className="flex flex-row mobile:flex-col w-full justify-center gap-20 pt-10 pb-10">
            <Course04/>
            <Course05/>
            <Course06/>
            </div>
            <div className="flex flex-row mobile:flex-col w-full justify-center gap-20 pt-10 pb-10">
            <Course07/>
            <Course08/>
            </div>  
            <h3 className="text-2xl font-semibold mb-4">Please Note:</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Tuition fees do not include travel, textbooks, or chamber operator logbook.</li>
            <li>Hybrid and online courses are designed for flexibility and accessibility.</li>
            <li>Upon successful completion, Shanfe provides job placement support through industry connections and referrals.</li>
          </ul>
          </div>
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
          <div className="text-Chocolate flex flex-row w-full gap bg-Eggshell items-center p-10 gap-10 rounded-3xl mt-20 mb-10 relative mobile:flex-col">
                <Image
                  className="rounded-3xl"
                  src="/images/photo21.png"
                  width={350}
                  height={350}
                  alt=""
                />
                <div className="gap-5 flex flex-col">
                  <h1 className="text-5xl font-bold">High Altitude Courses</h1>
                    <div className="flex flex-col gap-5">
                      <p className="text-lg">
                      On Demand
                      </p>
                      <Button backgroundColor="Sky">Syllabus Coming Soon</Button>
                    </div>
                </div>
              </div>

        </div>

        <ScrollToTopButton />
        <Footer />
      </main>
    </>
  );
}
