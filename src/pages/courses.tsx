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
import CourseCalendar from "@/components/courseCalendar";
import RegisterForm from "@/components/registerForm";
import Link from 'next/link';
import { useEffect } from "react";
import Script from "next/script";
import Divercert from "@/components/divercert";


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

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

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
      <div className='flex flex-col items-center'>
            <Image
              className='w-full relative tablet:hidden'
              src='/images/courses_hero.png'
              width={2000}
              height={2000}
              alt=''
              />
              <Image
              className='desktop:hidden w-full relative'
              src='/images/courses_hero_mobile.png'
              width={2000}
              height={2000}
              alt=''
              />
              </div>
      <main className="flex flex-col items-center p-24 pb-20 pt-20 mobile:p-8 bg-white w-full">
        <div className="w-full max-w-5xl">

          <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Shanfe Research and Consulting Ltd.'s professional training programs for individuals
          seeking careers in hyperbaric operations.</h1>
          <div className="flex items-center flex-col p-10">
            <div className="m-4 mb-10">
              <Divercert/>
            </div>
            
          </div>
          <p className="mb-4 text-xl ">
             Our comprehensive courses prepare participants for
            a wide range of roles including:
          </p>
          <ul className="list-disc text-xl  list-inside mb-10">
            <li>Clinical hyperbaric medicine</li>
            <li>Diving operations</li>
            <li>Tunneling support</li>
            <li>Emergency chamber evacuation</li>
          </ul>
          <p className="mb-6 text-xl ">
            All certification pathways begin with the <strong>Chamber Core Competency</strong> course. From there,
            students can pursue specialty certifications by the
            <strong> Divers Certification Board of Canada (DCBC)</strong>, in accordance with <em>CSA Z275.4 standards</em>.
          </p>
          <div className="flex items-center flex-col m-20">
            <Button backgroundColor="Eggshell" onClick={scrollToBottom}>
              See High Altitude Courses
            </Button>
          </div>
          <div className="flex items-center flex-col pb-10">
            <h1 className="mb-6 mt-6 text-6xl ">2025 Course Calendar</h1>
            <CourseCalendar/>
          </div>
          <div className="flex flex-col items-center"> 
            <div className="flex flex-row mobile:flex-col mobile:items-center w-full gap-20 pt-10 mb-14">
            <Course01/>
            <Course04/>
            <Course02/>
            </div>
            <div className="flex flex-row mobile:flex-col mobile:items-center w-full gap-20 pt-10 mb-14">
            <Course03/>
            <Course05/>
            <Course08/>
            </div>
            <div className="flex flex-row mobile:flex-col mobile:items-center w-full justify-center gap-20 pt-10 pb-10">
            <Course06/>
            <Course07/>
            </div>  
            <div className="flex flex-col items-center pt-10 pb-10">
            <h3 className="text-3xl font-bold mb-4">Please Note:</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Tuition fees do not include travel, textbooks, or chamber operator logbook.</li>
            <li>Hybrid and online courses are designed for flexibility and accessibility.</li>
            <li>Upon successful completion, Shanfe provides job placement support through industry connections and referrals.</li>
          </ul>
          </div>
          </div>
          <div className="text-center">
            <RegisterForm/>
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
