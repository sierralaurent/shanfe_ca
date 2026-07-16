import Image from "next/image";
import Head from 'next/head';
import Link from "next/link";
import NavBarAerospace from "@/components/aerospace/navbaraerospace";
import Footer from "@/components/footer";
import Button from "@/components/button";
import Course180 from "@/components/course180";
import Course160 from "@/components/course160";
import Course200 from "@/components/course200";
import Course210 from "@/components/course210";
import Course220 from "@/components/course220";
import Course230 from "@/components/course230";
import ScrollToTopButton from "@/components/scrollToTop";
import CourseCalendar from "@/components/courseCalendar";
import OperatorCourseSelector from "@/components/operatorCourseSelector";
import RegisterForm from "@/components/registerForm";
import Divercert from "@/components/divercert";
import Script from "next/script";

export default function AerospaceCourses() {
  const scrollToAllCourses = () => {
    const element = document.getElementById('all-courses');
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>SHANFE | Aerospace Operations Training & Courses</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Explore Shanfe’s hyperbaric and hypobaric course offerings: Clinical Hyperbaric Medicine, Chamber Core Competency, Diving & Tunnel Operations Support, Hyperbaric Safety Specialist, and emergency evacuation training—all following CSA Z275.4 standards and DCBC certification pathways." />
        <meta name="keywords" content="hyperbaric training and courses, hyperbaric courses Canada, hypobaric training, chamber operator course, clinical hyperbaric medicine course, hyperbaric safety specialist, diver certification, DAN diver training, CSA Z275.4, DCBC certification, diving medicine, hyperbaric chamber operation, tunnel worker hyperbaric training, commercial diver training" />
      </Head>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-R38974EDZ7" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-R38974EDZ7');`}
      </Script>
      <div className="sticky top-0 z-50"><NavBarAerospace /></div>
      <div className='flex flex-col items-center'>
        <Image className='w-full relative tablet:hidden' src='/images/aerospace/courses_hero.png' width={2000} height={2000} alt='Hyperbaric Training & Courses' />
        <Image className='desktop:hidden w-full relative' src='/images/courses_hero_mobile.png' width={2000} height={2000} alt='Hyperbaric Training & Courses' />
      </div>
      <main className="flex flex-col items-center p-24 pb-20 pt-20 mobile:p-8 bg-white w-full">
        <div className="w-full max-w-5xl">
          <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Shanfe Aerospace Ltd.'s professional training programs for individuals seeking careers in Aerospace and hypobaric operations.</h1>
          <div className="flex flex-col items-center mobile:flex-col">
            <p className="mb-4 text-xl">Our comprehensive courses prepare participants for a wide range of roles including:</p>
            <div className="flex flex-row gap-5">
              <ul className="list-disc text-xl list-inside mb-10">
                <li>SOS Hyperlite Chamber Operations</li>
                <li>Hypoxia Awareness training</li>
              </ul>
              <ul className="list-disc text-xl list-inside mb-10">
                <li>Oxygen service technician</li>
                <li>Human factors of high altitude</li>
              </ul>
            </div>
          </div>

          <div id="all-courses" className="flex flex-col items-center"> 
            <h1 className="mb-10 mt-6 text-4xl font-bold">All Courses</h1>
            <div className="flex flex-row mobile:flex-col mobile:items-center w-full gap-20 pt-10 mb-14">
              <Course160/>
              <Course200/>
              <Course180/>
            </div>
            <div className="flex flex-row mobile:flex-col mobile:items-center w-full gap-20 pt-10 mb-14">
              <Course220/>
              <Course210/>
              <Course230/>
            </div>
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
            <Image className="rounded-3xl" src="/images/photo03.png" width={350} height={350} alt="" />
            <div className="gap-5 flex flex-col">
              <h1 className="text-4xl font-bold">Diving & Hyperbarics Operations Training</h1>
              <div className="flex flex-col gap-5">
                <Link href="/diving/courses"><Button backgroundColor="Sky">See Courses</Button></Link>
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
