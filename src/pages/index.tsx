import Image from "next/image";
import Head from 'next/head'
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";
import Card01 from "@/components/card01";
import Card02 from "@/components/card02";
import Card03 from "@/components/card03";


export default function Home() {
  return (
    <>
    <Head>
        <title>SHANFE | Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={'sticky top-0 z-50'}>
        <NavBar />
      </div>
    <div className='flex flex-col items-center'>
      <Image
        className='w-full relative'
        src='/images/Shanfe_Hero.png'
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
      <h1 className='text-7xl font-bold'>Consulting</h1>
      <div className='w-full flex flex-col items-start'> 
        <Card01 />
        </div>
      <div className='w-full flex flex-col items-end'> 
        <Card02 />
        </div>
      <div className='w-full flex flex-col items-start'> 
        <Card03 />
        </div>
      <h1 className='text-7xl font-bold'>Research</h1>
      <p className='text-2xl'>Offering study design, ethics submission, study management, participant recruitment, field data collection, data analysis, scientific report writing and peer review submissions.</p>
        
      <Footer />
    </main>
    </div>
    </>
  );
}
