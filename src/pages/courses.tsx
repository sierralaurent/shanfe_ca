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
import Course09 from "@/components/course09";
import Course10 from "@/components/course10";
import ScrollToTopButton from "@/components/scrollToTop";
import CourseCalendar from "@/components/courseCalendar";
import OperatorCourseSelector from "@/components/operatorCourseSelector";
import RegisterForm from "@/components/registerForm";
import Divercert from "@/components/divercert";
import Script from "next/script";

export default function Courses() {
  const scrollToAllCourses = () => {
    const element = document.getElementById('all-courses');
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>SHANFE | Hyperbaric Training & Courses</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Explore Shanfe’s hyperbaric and hypobaric course offerings: Clinical Hyperbaric Medicine, Chamber Core Competency, Diving & Tunnel Operations Support, Hyperbaric Safety Specialist, and emergency evacuation training—all following CSA Z275.4 standards and DCBC certification pathways." />
        <meta name="keywords" content="hyperbaric training and courses, hyperbaric courses Canada, hypobaric training, chamber operator course, clinical hyperbaric medicine course, hyperbaric safety specialist, diver certification, DAN diver training, CSA Z275.4, DCBC certification, diving medicine, hyperbaric chamber operation, tunnel worker hyperbaric training, commercial diver training" />
      </Head>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-R38974EDZ7" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-R38974EDZ7');`}
      </Script>
      <div className="sticky top-0 z-50"><NavBar /></div>
      <div className='flex flex-col items-center'>
        <Image className='w-full relative tablet:hidden' src='/images/courses_hero.png' width={2000} height={2000} alt='Hyperbaric Training & Courses' />
        <Image className='desktop:hidden w-full relative' src='/images/courses_hero_mobile.png' width={2000} height={2000} alt='Hyperbaric Training & Courses' />
      </div>
      <main className="flex flex-col items-center p-24 pb-20 pt-20 mobile:p-8 bg-white w-full">
        <div className="w-full max-w-5xl">
          <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Shanfe Research and Consulting Ltd.'s professional training programs for individuals seeking careers in hyperbaric operations.</h1>
          <div className="flex items-center flex-row tablet:flex-col p-5">
            <Image src='/images/diver-cert-mockup.png' width={600} height={600} alt='Hyperbaric Training & Courses' />
            <div className="flex items-center flex-col gap-5 p-5">
              <h1 className="text-3xl font-bold">Accredited by the Diver Certification Board of Canada</h1>
              <p className="text-lg">Shanfe Research & Consulting Ltd. is proudly recognized by the Diver Certification Board of Canada for our Hyperbaric Chamber Operator training.</p>
            </div>
          </div>
          <div className="flex flex-col items-center mobile:flex-col">
            <p className="mb-4 text-xl">Our comprehensive courses prepare participants for a wide range of roles including:</p>
            <div className="flex flex-row gap-5">
              <ul className="list-disc text-xl list-inside mb-10">
                <li>Clinical hyperbaric medicine</li>
                <li>Diving operations</li>
              </ul>
              <ul className="list-disc text-xl list-inside mb-10">
                <li>Tunneling support</li>
                <li>Emergency chamber evacuation</li>
              </ul>
            </div>
          </div>
          <p className="mb-6 text-xl">All certification pathways include <strong>#110 Hyperbaric Core Competencies</strong> course. From there, students can pursue specialty certifications by the <strong>Divers Certification Board of Canada (DCBC)</strong>, in accordance with <em>CSA Z275.4 standards</em>.</p>

          <div className="flex items-center flex-col pb-16 pt-16">
            <h1 className="mb-10 mt-6 text-4xl font-bold">Not sure what course to take?</h1>
            <OperatorCourseSelector/>
            <div className="mt-16">
              <Button backgroundColor="Sky" onClick={scrollToAllCourses}>See All Courses</Button>
            </div>
          </div>
          

          <div className="flex items-center flex-col pb-10">
            <h1 className="mb-6 mt-6 text-6xl">Course Calendar</h1>
            <CourseCalendar/>
          </div>

          <div id="all-courses" className="flex flex-col items-center"> 
            <h1 className="mb-10 mt-6 text-4xl font-bold">All Courses</h1>
            <div className="flex flex-row mobile:flex-col mobile:items-center w-full gap-20 pt-10 mb-14">
              <Course09/>
              <Course01/>
              <Course04/>
            </div>
            <div className="flex flex-row mobile:flex-col mobile:items-center w-full gap-20 pt-10 mb-14">
              <Course02/>
              <Course05/>
              <Course03/>
            </div>
            <div className="flex flex-row mobile:flex-col mobile:items-center w-full justify-center gap-20 pt-10 pb-10">
              <Course08/>
              <Course10/>
              <Course06/>
            </div>
            <div className="flex flex-row mobile:flex-col mobile:items-center w-full justify-center gap-20 pt-10 pb-10"></div>
            <Course07/>
          </div>

          <div className="flex flex-col items-center pt-20 pb-10">
            <h3 className="text-3xl font-bold mb-4">Please Note:</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Tuition fees do not include travel, textbooks, or chamber operator logbook.</li>
              <li>Hybrid and online courses are designed for flexibility and accessibility.</li>
              <li>Upon successful completion, Shanfe provides job placement support through industry connections and referrals.</li>
            </ul>
          </div>

          <div className="text-Chocolate flex flex-row w-full gap bg-Eggshell items-center p-10 gap-10 rounded-3xl mt-20 mb-10 relative mobile:flex-col">
            <Image className="rounded-3xl" src="/images/photo21.png" width={350} height={350} alt="" />
            <div className="gap-5 flex flex-col">
              <h1 className="text-5xl font-bold">High Altitude Courses</h1>
              <div className="flex flex-col gap-5">
                <p className="text-lg">On Demand</p>
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
