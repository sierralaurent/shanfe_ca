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
        <title>SHANFE | Services</title>
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
    <div className={'sticky top-0 z-50'}>
        <NavBar />
      </div>
    <div className='flex flex-col items-center'>
      <Image
        className='w-full relative tablet:hidden'
        src='/images/Shanfe_Hero.png'
        width={2000}
        height={2000}
        alt=''
        />
        <Image
        className='desktop:hidden w-full relative'
        src='/images/Shanfe_Hero_Phone.png'
        width={2000}
        height={2000}
        alt=''
        />
    <main className={`flex flex-col items-center gap-24 p-10 max-w-7xl mobile:p-8`}>
      <Image
      src='/LogoMark300ppi.png'
      width={200}
      height={200}
      alt=''
      />
      <div className={'max-w-7xl flex flex-row mobile:flex-col items-center gap-20'}>
        <div className='max-w-2xl'>
          <h1 className="text-5xl font-bold">What can we do with over 30 years experience?</h1>
          </div>
        <div className="max-w-2xl">
          <p className='text-lg'>Shanfe is your premier partner for comprehensive experience in hyper/hypobaric environments. Specializing in research, compliance audits, risk assessments, training, and consultancy services, ensuring compliance with national and international standards while prioritizing safety and efficiency. With a commitment to excellence, Shanfe delivers tailored solutions that mitigate risks, optimize operations, and foster a culture of safety within your organization.</p>
          </div>
      </div>
        <div className='w-full flex flex-col items-start'> 
        <Card001 />
        </div>
        <div className='w-full flex flex-col items-end'> 
        <Card002 />
        </div>
        <div className='w-full flex flex-col items-start'> 
        <Card003 />
        </div>
      <h1 className='text-7xl font-bold'>Research</h1>
      <p className='text-2xl'>Offering study design, ethics submission, study management, participant recruitment, field data collection, data analysis, scientific report writing and peer review submissions.</p>

        <div className='w-full flex flex-col items-end'> 
        <Card004 />
        </div>
        <div className='w-full flex flex-col items-start'> 
        <Card005 />
        </div>
      <h1 className='text-5xl font-bold tablet:text-3xl'>Explore our esteemed partnerships and discover why Shanfe is the trusted choice for hyperbaric safety and compliance.</h1>
      
      <div className='flex flex-col w-full items-center'>
        <Image
              className=' '
              src='/Icons/logo08.png'
              width={500}
              height={500}
              alt=''
              />
        </div>
        <div className='flex flex-row w-full justify-between tablet:flex-col tablet:gap-5 tablet:items-center'>
            <Image
              className=' '
              src='/Icons/SVG/logo01.svg'
              width={300}
              height={100}
              alt=''
              />
              <Image
              className=' '
              src='/Icons/SVG/logo02.svg'
              width={400}
              height={300}
              alt=''
              />
              
              <Image
              className=' '
              src='/Icons/logo06.png'
              width={300}
              height={300}
              alt=''
              />
          
        </div>
        <div className='flex flex-row w-full justify-between tablet:flex-col tablet:gap-10 tablet:items-center'>
          <Image
              className=' '
              src='/Icons/SVG/Logo07.svg'
              width={300}
              height={300}
              alt=''
              />
              <Image
              className=' '
              src='/Icons/SVG/logo04.svg'
              width={200}
              height={300}
              alt=''
              />
              <Image
              className=' '
              src='/Icons/SVG/logo05.svg'
              width={300}
              height={300}
              alt=''
              />
        </div>
        
        <ScrollToTopButton />
      <Footer />
    </main>
    </div>
    </>
  );
}
