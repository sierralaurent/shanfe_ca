import Image from "next/image";
import Head from 'next/head'
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";
import ScrollToTopButton from "@/components/scrollToTop";
import Script from "next/script";
import sherriBio from "@/components/Bio's/sherriBio";
import Link from 'next/link';
import SherriBio from "@/components/Bio's/sherriBio";
import FrancoisBio from "@/components/Bio's/francoisBio";
import AaronBio from "@/components/Bio's/aaronBio";

export default function About() {
  return (
    <>
      <Head>
        <title>SHANFE | Meet the Shanfe Team – Hyperbaric & Hypobaric Experts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Meet the Shanfe team of hyperbaric and hypobaric medicine experts, diving safety specialists, and aerospace medical consultants." />
        <meta name="keywords" content="Shanfe team, Shanfe staff, hyperbaric medicine experts, hypobaric research specialists, diving medicine professionals, hyperbaric trainers, aerospace medical consultants, hyperbaric chamber instructors, clinical hyperbaric educators, diving safety specialists, hyperbaric training staff" />
      </Head>

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

      <div className={'sticky top-0 z-50'}>
        <NavBar />
      </div>

      <main className={`flex flex-col items-center p-24 pt-12 mobile:p-8 bg-white`}>
        <div className={`flex flex-col items-center pt-5 pb-24 gap-10 mobile:p-8 bg-white max-w-7xl`}>
            <div className='flex flex-col p-10 gap-8 items-center'>
            <h1 className="text-6xl font-bold text-center">Meet the SHANFE Team – Hyperbaric & Hypobaric Experts</h1>
            <h3 className="text-xl pb-10">At SHANFE, our team is made up of experienced professionals dedicated to advancing education in hyperbaric medicine, dive safety, and emergency response. Together, we deliver practical, real-world training backed by the latest in industry best practices.</h3>
            <div className="flex desktop:flex-row items-center justify-between items-start w-full flex-col justify-between tablet:gap-10">
            <Image
                    className="rounded-3xl tablet:w-full"
                    src="/images/photo23.png"
                    width={450}
                    height={350}
                    alt="Hyperbaric & Hypobaric Experts"
                />
                <Image
                    className="rounded-3xl tablet:w-full"
                    src="/images/photo25.png"
                    width={250}
                    height={350}
                    alt="Hyperbaric & Hypobaric Experts"
                />
                <Image
                    className="rounded-3xl tablet:w-full"
                    src="/images/photo24.png"
                    width={450}
                    height={350}
                    alt="Hyperbaric & Hypobaric Experts"
                />
            </div>
            </div>
        <div className='flex flex-col p-10 pt-5 gap-5 items-center'>
            <h1 className="text-6xl font-bold">Staff</h1>
            <h3 className="text-xl">Behind every successful course and certification is our committed administrative team. From enrollment to certification support, they’re here to ensure a seamless experience for all students and clients.</h3>
            </div>
        <SherriBio/>
        <div className='flex flex-col p-16 gap-5 items-center'>
            <h1 className="text-6xl font-bold">Faculty</h1>
            <h3 className="text-xl">Our instructors are leaders in their fields — from hyperbaric medicine and chamber operations to emergency preparedness and dive safety. Each brings unique experience and a passion for teaching to every course we offer.</h3>
            </div>
            <FrancoisBio/>
            <AaronBio/>
        </div>
        <ScrollToTopButton />
        <Footer />
      </main>
    </>
  );
}