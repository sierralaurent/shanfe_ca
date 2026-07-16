import Image from "next/image";
import Head from 'next/head'
import NavBarAerospace from "@/components/aerospace/navbaraerospace";
import Footer from "@/components/footer";
import Link from "next/link";
import Button from "@/components/button";

import ScrollToTopButton from "@/components/scrollToTop";
import Script from "next/script";
import Divercert from "@/components/divercert";


export default function AerospaceAndHypobaricsHome() {
  return (
    <>
    <Head>
        <title>SHANFE | Aerospace & Hypobaric Consultancy Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Specialized hyperbaric and hypobaric risk assessments, research, audits, and training services for aviation, medical devices, and diving industries." />
        <meta name="keywords" content="hyperbaric, hyperbaric medicine, hyperbaric training, hyperbaric audits, hyperbaric research, diving research, aerospace safety, hypobaric, SHANFE" />
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
    <div className={'sticky top-0 z-50'}>
        <NavBarAerospace/>
      </div>
    <div className='flex flex-col items-center'>
      <Image
        className='w-full relative tablet:hidden'
        src='/images/aerospace/aerospace-hero2.png'
        width={2000}
        height={2000}
        alt='Hyperbaric & Hypobaric Consultancy Services - Safety is at the core of everything SHANFE offers.
We promote safety in hyperbaric & hypobaric environments, diving, aerospace and hyperbaric oxygen therapy through education, audits, research and consulting.'
        />
        <Image
        className='desktop:hidden w-full relative'
        src='/images/aerospace/aerospace-hero-mobile.png'
        width={2000}
        height={2000}
        alt='Hyperbaric & Hypobaric Consultancy Services - Safety is at the core of everything SHANFE offers.
We promote safety in hyperbaric & hypobaric environments, diving, aerospace and hyperbaric oxygen therapy through education, audits, research and consulting.'
        />
    <main className={`flex flex-col items-center gap-24 p-10 max-w-7xl mobile:p-8`}>
      <div className={'max-w-7xl flex flex-col mobile:flex-col items-center gap-8 pt-10'}>
        <h1 className="text-4xl font-bold text-center">Advancing Aerospace Safety Through Expertise</h1>
        <h1 className="text-3xl text-center">Shanfe Aerospace partners with government agencies, healthcare organizations, and industry professionals to deliver specialized training, compliance audits, consulting, and research that improve safety and operational performance in aerospace, enriched oxygen operations, and hyper/hypobaric environments.</h1>
      </div>


<div className={'flex flex-col gap-4'}> 

  <div className={'flex flex-row tablet:flex-col gap-10'}>
      {/* Courses */}
    <div className="relative group flex overflow-hidden rounded-3xl">
      <Image
        className="w-full h-auto transition-all duration-500 group-hover:brightness-125 group-hover:scale-[1.03]"
        src="/images/aerospace/aerospace-photo05.png"
        width={400}
        height={400}
        alt="Hydrospace Group Incorporated"
      />

      <Link href="/aerospace/aerospacecourses"><div className="absolute inset-0 flex items-end transition-all duration-500 group-hover:scale-[1.03]">
        <div className="w-full p-4 bg-gradient-to-t from-black/30 to-transparent rounded-b-3xl flex flex-row gap-5 items-center">
        <Image
             className=''
             src="/Icons/arrow-blue.png"
             width={100}
             height={60}
             alt='shanfe aerospace education and courses'
              />
          <h1 className="text-8xl font-bold text-Sky drop-shadow-lg">Education</h1>
        </div>
      </div></Link>
    </div>

    {/* Audits */}
    <div className="relative group flex overflow-hidden rounded-3xl">
      <Image
        className="w-full h-auto transition-all duration-500 group-hover:brightness-125 group-hover:scale-[1.03]"
        src="/images/aerospace/aerospace-photo03.png"
        width={400}
        height={400}
        alt="Hydrospace Group Incorporated"
      />

      <Link href="/aerospace/aerospaceaudits"><div className="absolute inset-0 flex items-end transition-all duration-500 group-hover:scale-[1.03]">
        <div className="w-full p-4 bg-gradient-to-t from-black/30 to-transparent rounded-b-3xl flex flex-row gap-5 items-center">
        <Image
             className=''
             src="/Icons/arrow-eggshell.png"
             width={100}
             height={60}
             alt='shanfe aerospace audits'
              />
          <h1 className="text-8xl font-bold text-Eggshell drop-shadow-lg">Audits</h1>
        </div>
      </div></Link>
    </div>

  </div>


</div>
<div className="flex items-center flex-col gap-10">
      <h1 className='text-4xl font-bold tablet:text-3xl'>Explore our esteemed partnerships and discover why Shanfe is the trusted choice for hyperbaric safety and compliance.</h1>
      <div className="flex items-center flex-col gap-10">
      <div className='flex flex-row w-full mobile:flex-col items-center gap-20'>
        <Image
              className=' '
              src='/Icons/CAF-defence-logo.png'
              width={300}
              height={200}
              alt='Canadian Armed Forces'
              />
        <Image
              className=' '
              src='/Icons/bell-logo.png'
              width={200}
              height={500}
              alt='Hydrospace Group Incorporated'
              />
        </div>
             <div className='flex flex-col w-full tablet:flex-col tablet:gap-5 items-center'>
              <Image
              className=' '
              src='/Icons/SVG/logo02.svg'
              width={400}
              height={300}
              alt='De Havilland Aircraft of Canada Limited'
              />
        </div>
        </div>
        <div className="flex items-center flex-row tablet:flex-col">
           <Image src='/images/diver-cert-mockup.png' width={600} height={600} alt='Accredited by the Diver Certification Board of Canada' />
              <div className="flex flex-col gap-5 p-5">
                <h1 className="text-3xl font-bold">Accredited by the Diver Certification Board of Canada</h1>
                  <p className="text-lg">Shanfe Research & Consulting Ltd. is proudly recognized by the Diver Certification Board of Canada for our Hyperbaric Chamber Operator training.</p>
                  <Link href='/diving/courses'><Button backgroundColor="Sky">See More on Diving</Button></Link>
                </div>
             </div>
        </div>
        
        <ScrollToTopButton />
      <Footer />
    </main>
    </div>
    </>
  );
}
