import Image from "next/image";
import Head from 'next/head'
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";
import Card01 from "@/components/card01";
import Card02 from "@/components/card02";
import Card03 from "@/components/card03";
import Card04 from "@/components/card04";
import Card05 from "@/components/card05";
import Card001 from "@/components/card001";
import Card002 from "@/components/card002";
import Card003 from "@/components/card003";
import Card004 from "@/components/card004";
import Card005 from "@/components/card005";
import ScrollToTopButton from "@/components/scrollToTop";
import Script from "next/script";
import Divercert from "@/components/divercert";


export default function Home() {
  return (
    <>
    <Head>
        <title>SHANFE | Hyperbaric & Hypobaric Consultancy Services</title>
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
        src='/images/Shanfe_Hero.png'
        width={2000}
        height={2000}
        alt='Hyperbaric & Hypobaric Consultancy Services'
        />
        <Image
        className='desktop:hidden w-full relative'
        src='/images/Shanfe_Hero_Phone.png'
        width={2000}
        height={2000}
        alt='Hyperbaric & Hypobaric Consultancy Services'
        />
    <main className={`flex flex-col items-center gap-24 p-10 max-w-7xl mobile:p-8`}>
      <div className={'max-w-7xl flex flex-col mobile:flex-col items-center gap-10 pt-10'}>
        <h1 className="text-4xl font-bold text-center">Safety is at the core of everything SHANFE offers.</h1>
        <div className='max-w-3xl'>
          <h1 className="text-3xl font-semibold">We promote safety in hyperbaric & hypobaric environments, diving, aerospace and hyperbaric oxygen therapy through education, audits, research and consulting.</h1>
          </div>
      </div>
      <div className={'flex flex-col gap-4'}> 
      <div className={'flex flex-row tablet:flex-col gap-10'}>
        <Image className='rounded-3xl '
              src='/images/photo02.png'
              width={400}
              height={400}
              alt='Hydrospace Group Incorporated'
              />
              <Image className='rounded-3xl '
              src='/images/photo03.png'
              width={400}
              height={400}
              alt='Hydrospace Group Incorporated'
              />
      </div>
     <div className={'flex flex-row tablet:flex-col gap-10'}>
        <Image className='rounded-3xl '
              src='/images/photo04.png'
              width={400}
              height={400}
              alt='Hydrospace Group Incorporated'
              />
              <Image className='rounded-3xl '
              src='/images/photo05.png'
              width={400}
              height={400}
              alt='Hydrospace Group Incorporated'
              />
      </div>
      </div>
      <h1 className='text-4xl font-bold tablet:text-3xl'>Explore our esteemed partnerships and discover why Shanfe is the trusted choice for hyperbaric safety and compliance.</h1>
      
      <div className='flex flex-col w-full items-center'>
        <Image
              className=' '
              src='/Icons/logo08.png'
              width={500}
              height={500}
              alt='Hydrospace Group Incorporated'
              />
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
        
        <ScrollToTopButton />
      <Footer />
    </main>
    </div>
    </>
  );
}
