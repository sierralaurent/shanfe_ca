import Image from "next/image";
import Head from 'next/head'
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import Button from "@/components/button";

import ScrollToTopButton from "@/components/scrollToTop";
import Script from "next/script";
import Divercert from "@/components/divercert";


export default function DivingAndHyperBaricsHome() {
  return (
    <>
    <Head>
        <title>SHANFE | Diving & Hyperbaric Consultancy Services</title>
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
        <NavBar />
      </div>
    <div className='flex flex-col items-center'>
      <Image
        className='w-full relative tablet:hidden'
        src='/images/shanfeHero.png'
        width={2000}
        height={2000}
        alt='Hyperbaric & Hypobaric Consultancy Services - Safety is at the core of everything SHANFE offers.
We promote safety in hyperbaric & hypobaric environments, diving, aerospace and hyperbaric oxygen therapy through education, audits, research and consulting.'
        />
        <Image
        className='desktop:hidden w-full relative'
        src='/images/shanfeHeroMobile.png'
        width={2000}
        height={2000}
        alt='Hyperbaric & Hypobaric Consultancy Services - Safety is at the core of everything SHANFE offers.
We promote safety in hyperbaric & hypobaric environments, diving, aerospace and hyperbaric oxygen therapy through education, audits, research and consulting.'
        />
    <main className={`flex flex-col items-center gap-24 p-10 max-w-7xl mobile:p-8`}>
      <div className={'max-w-7xl flex flex-col mobile:flex-col items-center gap-8 pt-10'}>
        <h1 className="text-4xl font-bold text-center">Welcome to SHANFE Research & Consulting LTD.</h1>
        <h1 className="text-3xl text-center">Promoting safety in hyperbaric environments through…</h1>
      </div>


<div className={'flex flex-col gap-4'}> 

  <div className={'flex flex-row tablet:flex-col gap-10'}>
      {/* Courses */}
    <div className="relative group flex overflow-hidden rounded-3xl">
      <Image
        className="w-full h-auto transition-all duration-500 group-hover:brightness-125 group-hover:scale-[1.03]"
        src="/images/photo05.png"
        width={400}
        height={400}
        alt="Hydrospace Group Incorporated"
      />

      <Link href="/diving/courses"><div className="absolute inset-0 flex items-end transition-all duration-500 group-hover:scale-[1.03]">
        <div className="w-full p-4 bg-gradient-to-t from-black/30 to-transparent rounded-b-3xl flex flex-row gap-5 items-center">
                <Image
                     className=''
                     src="/Icons/arrow-eggshell.png"
                     width={80}
                     height={60}
                     alt='shanfe hyperbaric and diving education and courses'
                      />
                  <h1 className="text-7xl mobile:text-5xl font-bold text-Eggshell drop-shadow-lg">Education</h1>
                </div>
      </div></Link>
    </div>

    {/* Audits */}
    <div className="relative group flex overflow-hidden rounded-3xl">
      <Image
        className="w-full h-auto transition-all duration-500 group-hover:brightness-125 group-hover:scale-[1.03]"
        src="/images/photo03.png"
        width={400}
        height={400}
        alt="Hydrospace Group Incorporated"
      />

      <Link href="/diving/audits"><div className="absolute inset-0 flex items-end transition-all duration-500 group-hover:scale-[1.03]">
        <div className="w-full p-4 bg-gradient-to-t from-black/30 to-transparent rounded-b-3xl flex flex-row gap-5 items-center">
                <Image
                     className=''
                     src="/Icons/arrow-blue.png"
                     width={80}
                     height={60}
                     alt='shanfe hyperbaric and diving education and courses'
                      />
                  <h1 className="text-7xl mobile:text-5xl font-bold text-Sky drop-shadow-lg">Audits</h1>
                </div>
      </div></Link>
    </div>

  </div>

  <div className={'flex flex-row tablet:flex-col gap-10'}>

    {/* Research */}
    <div className="relative group flex overflow-hidden rounded-3xl">
      <Image
        className="w-full h-auto transition-all duration-500 group-hover:brightness-125 group-hover:scale-[1.03]"
        src="/images/photo04.png"
        width={400}
        height={400}
        alt="Hydrospace Group Incorporated"
      />

      <div className="absolute inset-0 flex items-end transition-all duration-500 group-hover:scale-[1.03]">
        <div className="w-full p-4 bg-gradient-to-t from-black/30 to-transparent rounded-b-3xl flex flex-row gap-5 items-center">
                <Image
                     className=''
                     src="/Icons/arrow-blue.png"
                     width={80}
                     height={60}
                     alt='shanfe aerospace education and courses'
                      />
                  <h1 className="text-7xl mobile:text-5xl font-bold text-Sky drop-shadow-lg">Research</h1>
                </div>
      </div>
    </div>

    {/* Consulting */}
    <Link href="/diving/consulting"><div className="relative group flex overflow-hidden rounded-3xl">
      <Image
        className="w-full h-auto transition-all duration-500 group-hover:brightness-125 group-hover:scale-[1.03]"
        src="/images/photo02.png"
        width={400}
        height={400}
        alt="Hydrospace Group Incorporated"
      />

      {/* Gradient + Text */}
      <div className="absolute inset-0 flex items-end transition-all duration-500 group-hover:scale-[1.03]">
        <div className="w-full p-4 bg-gradient-to-t from-black/30 to-transparent rounded-b-3xl flex flex-row gap-5 items-center">
                <Image
                     className=''
                     src="/Icons/arrow-eggshell.png"
                     width={80}
                     height={60}
                     alt='shanfe aerospace education and courses'
                      />
                  <h1 className="text-7xl mobile:text-5xl font-bold text-Eggshell drop-shadow-lg">Consulting</h1>
                </div>
      </div>
    </div></Link>


  </div>

</div>
<div className="flex items-center flex-col gap-20">
      <h1 className='text-4xl font-bold tablet:text-3xl'>Explore our esteemed partnerships and discover why Shanfe is the trusted choice for hyperbaric safety and compliance.</h1>
      <div className="flex items-center flex-col gap-5">
      <div className='flex flex-row w-full mobile:flex-col items-center gap-20'>
        <Image
              className=' '
              src='/Icons/CAF-logo.png'
              width={200}
              height={200}
              alt='Canadian Armed Forces'
              />
        <Image
              className=' '
              src='/Icons/logo08.png'
              width={500}
              height={500}
              alt='Hydrospace Group Incorporated'
              />
        </div>
        </div>
        <div className='flex flex-row w-full justify-between tablet:flex-col tablet:gap-5 tablet:items-center'>
            <Image
              className=' '
              src='/Icons/SVG/logo01.svg'
              width={300}
              height={100}
              alt='New Foundland Health Services'
              />
              <Image
              className=' '
              src='/Icons/SVG/logo02.svg'
              width={400}
              height={300}
              alt='De Havilland Aircraft of Canada Limited'
              />
              
              <Image
              className=' '
              src='/Icons/logo06.png'
              width={300}
              height={300}
              alt='Ripleys Aquariums'
              />
        </div>
        <div className='flex flex-row w-full justify-between tablet:flex-col tablet:gap-10 tablet:items-center'>
          <Image
              className=' '
              src='/Icons/SVG/Logo07.svg'
              width={300}
              height={300}
              alt='West End Connectors'
              />
              <Image
              className=' '
              src='/Icons/SVG/logo04.svg'
              width={200}
              height={300}
              alt='DAN Divers Alert Network'
              />
              <Image
              className=' '
              src='/Icons/SVG/logo05.svg'
              width={300}
              height={300}
              alt='The University of British Columbia UBC'
              />
        </div>
        <div className="flex items-center flex-col gap-5">
        <div className='flex flex-row gap-20 tablet:flex-col tablet:gap-5 tablet:items-center'>
            <Image
              className=' '
              src='/Icons/seaforce-logo.svg'
              width={500}
              height={300}
              alt='Seaforce'
              />
              <Image
              className=' '
              src='/Icons/vancouver-coastal-health-logo.png'
              width={400}
              height={100}
              alt='De Havilland Aircraft of Canada Limited'
              />
        </div>
        </div>
        <div className="flex items-center flex-row tablet:flex-col">
           <Image src='/images/diver-cert-mockup.png' width={600} height={600} alt='Accredited by the Diver Certification Board of Canada' />
              <div className="flex items-center flex-col gap-5 p-5">
                <h1 className="text-3xl font-bold">Accredited by the Diver Certification Board of Canada</h1>
                  <p className="text-lg">Shanfe Research & Consulting Ltd. is proudly recognized by the Diver Certification Board of Canada for our Hyperbaric Chamber Operator training.</p>
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
